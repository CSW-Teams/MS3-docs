# Guida all'utilizzo della classe `ControllerSchedulerTest` per testare schedule vari

La seguente guida ha l'obbiettivo di illustrare il funzionamento della classe `ControllerSchedulerTest`, nella speranza che essa, anche in futuro, possa rivelarsi utile per testare lo scheduler.

Partiamo mostrando un estratto del codice della classe stessa:

``` java
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
@RunWith(SpringJUnit4ClassRunner.class)
@Transactional
@ActiveProfiles("test")
public abstract class ControllerSchedulerTest {


    protected boolean isPossible ;
    protected LocalDate start ;

    protected LocalDate end ;

    protected Schedule schedule ;

    @Autowired
    private ISchedulerController controller ;

    public abstract void populateDB() ;

    @Before
    public void beforeScript() {

        System.out.println("Port :" + port);

        registerHolidays();

        try {
            populateDB();
        } catch (Exception e) {
            e.printStackTrace();
            fail() ;
        }

        registerConstraints();
        registerScocciature();
    }

    @Test
    @Transactional
    public void testScheduler() {

        this.schedule = controller.createSchedule(start, end) ;

        if(isPossible) {
            assertNull(schedule.getCauseIllegal());
        } else {
            assertNotNull(schedule.getCauseIllegal());
        }
    }

    private void registerHolidays() {
        ...
    }

    private void registerConstraints() {
        ...   
    }

    private void registerScocciature() {
        ...
    }
}
```

Questa classe rappresenta un template per un qualisasi test basilare dello scheduler: essa, nello script `@Before`, carica le vacanze, popola il Database con i dati di medici, servizi, mansioni e turni, registra i constraint e le scocciature. Successivamente, nel metodo `@Test`, tenta di generare una schedule a partire da `start` ad `end`; la variabile `isPossible` serve a descrivere l'esito atteso dallo scheduler : se `true`, la schedule generata deve essere corretta per passare il test, se `false`, ci si aspetta che lo schedule sia illegale.

I metodi `registerHolidays()`, `registerConstraints()` e `registerScocciature()` ricalcano quelli della classe `ApplicationStartup`.

Una qualsiasi classe che estende `ControllerSchedulerTest` dovrà, all'interno del metodo `populateDB()`, creare medici, turni, servizi e mansioni, nonché assegnare i valori di `start`, `end` ed `isPossible`.

Riportiamo un esempio sul come estendere `ControllerSchedulerTest` :

``` java
public class ControllerSchedulerGoodTest extends ControllerSchedulerTest {

    @Autowired
    private SpecializationDAO specializationDAO ;

    ...

    @Autowired
    private TemporaryConditionDAO temporaryConditionDAO ;

    @Override
    public void populateDB() {

        //CREA LE CATEGORIE DI TIPO STATO (ESCLUSIVE PER I TURNI)
        // Condition may be structure specific TODO: Ask if it is needed a configuration file for that
        PermanentCondition over62 = new PermanentCondition("OVER 62");
        TemporaryCondition pregnant = new TemporaryCondition("INCINTA", LocalDate.now().toEpochDay(), LocalDate.now().plusMonths(9).toEpochDay());
        TemporaryCondition maternity = new TemporaryCondition("IN MATERNITA'", LocalDate.now().toEpochDay(), LocalDate.now().plusDays(60).toEpochDay());
        TemporaryCondition vacation = new TemporaryCondition("IN FERIE", LocalDate.now().toEpochDay(), LocalDate.now().plusDays(7).toEpochDay());
        TemporaryCondition sick = new TemporaryCondition("IN MALATTIA", LocalDate.now().toEpochDay(), LocalDate.now().plusDays(7).toEpochDay());

        permanentConditionDAO.saveAndFlush(over62) ;
        temporaryConditionDAO.saveAndFlush(pregnant) ;
        temporaryConditionDAO.saveAndFlush(maternity) ;
        temporaryConditionDAO.saveAndFlush(vacation) ;
        temporaryConditionDAO.saveAndFlush(sick) ;

        //Specializations
        Specialization a_logia = new Specialization("ALOGIA") ;
        Specialization b_logia = new Specialization("BLOGIA") ;

        specializationDAO.save(a_logia) ;
        specializationDAO.save(b_logia) ;

        //Tasks and services

        Task ward = new Task(TaskEnum.WARD) ;
        taskDAO.saveAndFlush(ward) ;

        MedicalService repartoAlogia = medicalServiceControllercontroller.createService(Collections.singletonList(ward), "ALOGIA") ;
        MedicalService repartoBlogia = medicalServiceControllercontroller.createService(Collections.singletonList(ward), "BLOGIA") ;

        //Doctors

        Doctor doc1 = new Doctor("Esperto", "Alogia", "SLVMTN97T56H501Y", LocalDate.of(1997, 3, 14), "espertoalogia@gmail.com", "passw", Seniority.STRUCTURED, Set.of(SystemActor.CONFIGURATOR));
        Doctor doc2 = new Doctor("Esperto", "Blogia", "SLVMTN97T56H501Y", LocalDate.of(1997, 3, 14), "espertoblogia97@gmail.com", "passw", Seniority.SPECIALIST_SENIOR, Set.of(SystemActor.CONFIGURATOR));

        try {
            userController.addSpecialization(doc1, a_logia) ;
            userController.addSpecialization(doc2, b_logia) ;
        } catch (Exception e) {
            fail() ;
        }

        doctorDAO.save(doc1) ;
        doctorDAO.save(doc2) ;

        Map<Seniority, Integer> alogiaQuantities = new HashMap<>() ;
        alogiaQuantities.put(Seniority.STRUCTURED, 1) ;
        QuantityShiftSeniority repartoAlogiaQss = new QuantityShiftSeniority(alogiaQuantities, ward) ;

        Map<Seniority, Integer> blogiaQuantities = new HashMap<>() ;
        blogiaQuantities.put(Seniority.SPECIALIST_SENIOR, 1) ;
        QuantityShiftSeniority repartoBlogiaQss = new QuantityShiftSeniority(blogiaQuantities, ward) ;

        Set<DayOfWeek> monday = new HashSet<>(Collections.singletonList(DayOfWeek.MONDAY)) ;

        Shift shift1 = new Shift(LocalTime.of(8, 0),
                Duration.ofHours(6),
                repartoAlogia,
                TimeSlot.MORNING,
                Collections.singletonList(repartoAlogiaQss),
                monday,
                Collections.emptyList());
        shiftDAO.saveAndFlush(shift1);

        Shift shift2 = new Shift(LocalTime.of(8, 0),
                Duration.ofHours(6),
                repartoBlogia,
                TimeSlot.MORNING,
                Collections.singletonList(repartoBlogiaQss),
                monday,
                Collections.emptyList());
        shiftDAO.saveAndFlush(shift2);

        List<Holiday> holidays = holidayDAO.findAll();  //retrieve of holiday entities (and not DTOs)

        //we are assuming that, at the moment of instantiation of DoctorHolidays, the corresponding doctor has worked in no concrete shift in the past.
        HashMap<Holiday, Boolean> holidayMap = new HashMap<>();
        for (Holiday holiday : holidays) {
            if (!holiday.getName().equals("Domenica"))   //we do not care about Sundays as holidays
                holidayMap.put(holiday, false);

        }

        DoctorUffaPriority dup = new DoctorUffaPriority(doc1);
        DoctorUffaPrioritySnapshot doc1UffaPrioritySnapshot = new DoctorUffaPrioritySnapshot(doc1);
        DoctorHolidays dh = new DoctorHolidays(doc1, holidayMap);

        doctorUffaPriorityDAO.save(dup);
        doctorHolidaysDAO.save(dh);
        doctorUffaPrioritySnapshotDAO.save(doc1UffaPrioritySnapshot);

        DoctorUffaPriority dup2 = new DoctorUffaPriority(doc2);
        DoctorUffaPrioritySnapshot doc2UffaPrioritySnapshot = new DoctorUffaPrioritySnapshot(doc2);
        DoctorHolidays dh2 = new DoctorHolidays(doc2, holidayMap);

        doctorUffaPriorityDAO.save(dup2);
        doctorHolidaysDAO.save(dh2);
        doctorUffaPrioritySnapshotDAO.save(doc2UffaPrioritySnapshot);

        //Set all parameters in parent class, like in @Parametrized

        super.isPossible = true ;
        super.start = LocalDate.of(2024, 3, 1) ;
        super.end = LocalDate.of(2024, 3, 31) ;

    }
}
```

Questo approccio è stato adottato perché, per questioni di tempo, cercare di comprendere come adottare l'uso di `@Parametrized` è risultato eccessivamente dispendioso, essendo che, come si può notare, la creazione dell'ambiente di test risulta essere molto poco meccanica.

Si conclude menzionando una sottoclasse astratta di `ControllerSchedulerTest`, `ControllerSchedulerExtraTest` :

``` java
public abstract class ControllerSchedulerExtraTest extends ControllerSchedulerTest {

    public abstract void extraChecks() ;

    @Override
    @Test
    @Transactional
    public void testScheduler() {
        super.testScheduler() ;
        extraChecks() ;
    }
}
```

Lo scopo di questa classe è quello di permettere di fare dei check extra sullo scheduler dopo averlo generato.