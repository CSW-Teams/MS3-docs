classDiagram
direction BT
class ApplicationStartup {
  + ApplicationStartup() 
  - ConfigVincoliDao configVincoliDao
  - VincoloDao vincoloDao
  - DesiderataDao desiderataDao
  - TurnoDao turnoDao
  - UtenteDao utenteDao
  - ScocciaturaDao scocciaturaDao
  - ConfigVincoloMaxPeriodoConsecutivoDao configVincoloMaxPeriodoConsecutivoDao
  - CategorieDao categoriaDao
  - CategoriaUtenteDao categoriaUtenteDao
  - IHolidayController holidayController
  - ServizioDao servizioDao
  - populateDB() void
  + LoadHoliday() void
  + onApplicationEvent(ApplicationReadyEvent) void
  - registerScocciature() void
  - registerConstraints() void
}
class AssegnazioneTurno {
  + AssegnazioneTurno(LocalDate, Turno) 
  + AssegnazioneTurno(Set~Utente~, Set~Utente~, long, Turno) 
  + AssegnazioneTurno(LocalDate, Turno, Set~Utente~, Set~Utente~) 
  + AssegnazioneTurno() 
  - Set~Utente~ utentiDiGuardia
  - Set~Utente~ retiredUsers
  - Long id
  - Set~Utente~ utentiReperibili
  - long dataEpochDay
  - Turno turno
  + isReserve(Utente) boolean
  + setUtentiDiGuardia(Set~Utente~) void
  + getRetiredUsers() Set~Utente~
  + setId(Long) void
  + setUtentiReperibili(Set~Utente~) void
  + setRetiredUsers(Set~Utente~) void
  + setDataEpochDay(long) void
  + setTurno(Turno) void
  + hashCode() int
  + equals(Object) boolean
  # canEqual(Object) boolean
  + toString() String
  + getUtentiReperibili() Set~Utente~
  + getTurno() Turno
  + isAllocated(Utente) boolean
  + getData() LocalDate
  + getUtenti() Set~Utente~
  + getDataEpochDay() long
  + addUtenteReperibile(Utente) void
  + getUtentiDiGuardia() Set~Utente~
  + getUtentiAsList() List~Utente~
  + getId() Long
  + clone() AssegnazioneTurno
  - isUserIn(Utente, List~Utente~) boolean
  + isRetired(Utente) boolean
  + addUtentediGuardia(Utente) void
}
class AssegnazioneTurnoDTO {
  + AssegnazioneTurnoDTO(Long, Long, Timestamp, Timestamp, Set~UtenteDTO~, Set~UtenteDTO~, ServizioDTO, TipologiaTurno, boolean, MansioneEnum, boolean, Set~UtenteDTO~) 
  + AssegnazioneTurnoDTO(Timestamp, Timestamp, Set~UtenteDTO~, Set~UtenteDTO~, ServizioDTO, TipologiaTurno) 
  + AssegnazioneTurnoDTO(Long, Timestamp, Timestamp, Set~UtenteDTO~, Set~UtenteDTO~, ServizioDTO, TipologiaTurno) 
  + AssegnazioneTurnoDTO() 
  + AssegnazioneTurnoDTO(Long, Long, Timestamp, Timestamp, Set~UtenteDTO~, Set~UtenteDTO~, ServizioDTO, TipologiaTurno, boolean, boolean) 
  - Long idTurno
  - MansioneEnum mansione
  - ServizioDTO servizio
  - Long id
  - boolean reperibilitaAttiva
  - boolean giornoSuccessivoTurno
  - Set~UtenteDTO~ utentiDiGuardia
  - Timestamp inizio
  - Set~UtenteDTO~ retiredUsers
  - Timestamp fine
  - Set~UtenteDTO~ utentiReperibili
  - TipologiaTurno tipologiaTurno
  + isGiornoSuccessivoTurno() boolean
  + getMansione() MansioneEnum
  + isReperibilitaAttiva() boolean
  + setGiornoSuccessivoTurno(boolean) void
  + getRetiredUsers() Set~UtenteDTO~
  + setRetiredUsers(Set~UtenteDTO~) void
  + setId(Long) void
  + setIdTurno(Long) void
  + setUtentiReperibili(Set~UtenteDTO~) void
  + setReperibilitaAttiva(boolean) void
  + toString() String
  + setInizio(Timestamp) void
  + setServizio(ServizioDTO) void
  + setMansione(MansioneEnum) void
  # canEqual(Object) boolean
  + hashCode() int
  + equals(Object) boolean
  + setUtentiDiGuardia(Set~UtenteDTO~) void
  + setFine(Timestamp) void
  + setTipologiaTurno(TipologiaTurno) void
  + getUtentiReperibili() Set~UtenteDTO~
  + getTipologiaTurno() TipologiaTurno
  + getId() Long
  + getFine() Timestamp
  + getIdTurno() Long
  + getInizio() Timestamp
  + getUtentiDiGuardia() Set~UtenteDTO~
  + getServizio() ServizioDTO
}
class AssegnazioneTurnoDao {
<<Interface>>
  + findTurniUtente(Long) Set~AssegnazioneTurno~
}
class AssegnazioneTurnoException {
  + AssegnazioneTurnoException(String) 
}
class AssegnazioneTurnoRestEndpoint {
  + AssegnazioneTurnoRestEndpoint() 
  - IControllerAssegnazioneTurni controllerAssegnazioneTurni
  - IControllerScheduler controllerScheduler
  + creaTurnoAssegnato(RegistraAssegnazioneTurnoDTO) ResponseEntity~?~
  + rimuoviAssegnazione(Long) ResponseEntity~?~
  + leggiTurniAssegnati() ResponseEntity~?~
  + leggiTurniUtente(Long) ResponseEntity~?~
  + modificaAssegnazioneTurno(ModificaAssegnazioneTurnoDTO) ResponseEntity~?~
}
class AttoreEnum {
<<enumeration>>
  + AttoreEnum() 
  +  PIANIFICATORE
  +  UTENTE
  +  CONFIGURATORE
  + values() AttoreEnum[]
  + valueOf(String) AttoreEnum
}
class CalendarServiceException {
  + CalendarServiceException(Exception) 
  + CalendarServiceException(String) 
  - long serialVersionUID
}
class CalendarServiceManager {
  + CalendarServiceManager() 
  - String serviceURL
  ~ IHolidayController holidayController
  - String dateFormat
  + getHolidays() List~Holiday~
  + getAllSundays(int) List~Date~
  + init(CalendarSetting) void
}
class CalendarSetting {
  + CalendarSetting(String) 
  - String baseURL
  - List~KeyValue~String, String~~ URLParameters
  - String dateFormat
  + getDateFormat() String
  + addURLParameter(String) void
  + reset() void
  + addURLParameter(String, String) void
  + getServiceURL() String
}
class CambiaPasswordRestEndpoint {
  + CambiaPasswordRestEndpoint() 
  - IControllerPassword controllerpwd
  + cambiaPass(PasswordDTO) ResponseEntity~?~
}
class Categoria {
  + Categoria() 
  + Categoria(String, TipoCategoriaEnum) 
  - Long id
  - String nome
  - TipoCategoriaEnum tipo
  + getId() Long
  + getNome() String
  + getTipo() TipoCategoriaEnum
  + setId(Long) void
  + setNome(String) void
  + setTipo(TipoCategoriaEnum) void
  + equals(Object) boolean
  # canEqual(Object) boolean
  + hashCode() int
  + toString() String
}
class CategoriaDTO {
  + CategoriaDTO(String, TipoCategoriaEnum) 
  + CategoriaDTO() 
  - TipoCategoriaEnum tipo
  - String nome
  + getNome() String
  + getTipo() TipoCategoriaEnum
  + setNome(String) void
  + setTipo(TipoCategoriaEnum) void
  + equals(Object) boolean
  # canEqual(Object) boolean
  + hashCode() int
  + toString() String
}
class CategoriaUtente {
  + CategoriaUtente(Categoria, LocalDate, LocalDate) 
  + CategoriaUtente() 
  - LocalDate inizioValidità
  - Long id
  - Categoria categoria
  - LocalDate fineValidità
  + getFineValidità() LocalDate
  + getCategoria() Categoria
  + getId() Long
  + getInizioValidità() LocalDate
  + setId(Long) void
  + setCategoria(Categoria) void
  + setInizioValidità(LocalDate) void
  + setFineValidità(LocalDate) void
  + equals(Object) boolean
  # canEqual(Object) boolean
  + toString() String
  + hashCode() int
  + isValid(LocalDate) boolean
}
class CategoriaUtenteDTO {
  + CategoriaUtenteDTO(Long, Categoria, String, String) 
  + CategoriaUtenteDTO() 
  + CategoriaUtenteDTO(Categoria, String, String) 
  - Long id
  - Categoria categoria
  - String fineValidita
  - String inizioValidita
  + setId(Long) void
  + getId() Long
  + getCategoria() Categoria
  + getInizioValidita() String
  + getFineValidita() String
  + setCategoria(Categoria) void
  + setInizioValidita(String) void
  + setFineValidita(String) void
  + toString() String
  + equals(Object) boolean
  # canEqual(Object) boolean
  + hashCode() int
}
class CategoriaUtenteDao {
<<Interface>>
  + findTurnazioniUtente(Long) Set~CategoriaUtente~
  + findStatoUtente(Long) Set~CategoriaUtente~
  + findSpecializzazioniUtente(Long) Set~CategoriaUtente~
}
class CategoriaUtenteRestEndpoint {
  + CategoriaUtenteRestEndpoint() 
  - IControllerCategorie controllerCategorie
  - IControllerCategorieUtente controllerCategorieUtente
  + leggiCategorieUtente(Long) ResponseEntity~?~
  + aggiungiTurnazione(CategoriaUtenteDTO, Long) ResponseEntity~?~
  + leggiSpecializzazioniUtente(Long) ResponseEntity~?~
  + leggiSpecializzazioni() ResponseEntity~?~
  + leggiTurnazioni() ResponseEntity~?~
  + deleteStatoUtente(Long, Long) ResponseEntity~?~
  + aggiungiStato(CategoriaUtenteDTO, Long) ResponseEntity~?~
  + leggiTurnazioniUtente(Long) ResponseEntity~?~
  + leggiStati() ResponseEntity~?~
  + deleteCategoriaUtente(Long, Long) ResponseEntity~?~
}
class CategorieDao {
<<Interface>>
  + findAllByTipo(TipoCategoriaEnum) Set~Categoria~
  + findAllByNome(String) Categoria
}
class Config {
  + Config() 
  - String name
  - boolean firstBoot
  + getName() String
  + isFirstBoot() boolean
  + setName(String) void
  + setFirstBoot(boolean) void
  + equals(Object) boolean
  # canEqual(Object) boolean
  + hashCode() int
  + toString() String
}
class ConfigDao {
<<Interface>>

}
class ConfigVincoli {
  + ConfigVincoli() 
  + ConfigVincoli(int, int, int, int, List~ConfigVincoloMaxPeriodoConsecutivo~) 
  - int numGiorniPeriodo
  - List~ConfigVincoloMaxPeriodoConsecutivo~ configVincoloMaxPeriodoConsecutivoPerCategoria
  - int horizonTurnoNotturno
  - int maxMinutiPeriodo
  - int numMaxMinutiConsecutiviPerTutti
  - Long id
  + setId(Long) void
  + getId() Long
  + hashCode() int
  + getNumGiorniPeriodo() int
  + getMaxMinutiPeriodo() int
  + getHorizonTurnoNotturno() int
  + toString() String
  # canEqual(Object) boolean
  + getNumMaxMinutiConsecutiviPerTutti() int
  + getConfigVincoloMaxPeriodoConsecutivoPerCategoria() List~ConfigVincoloMaxPeriodoConsecutivo~
  + setNumGiorniPeriodo(int) void
  + setMaxMinutiPeriodo(int) void
  + setNumMaxMinutiConsecutiviPerTutti(int) void
  + setHorizonTurnoNotturno(int) void
  + setConfigVincoloMaxPeriodoConsecutivoPerCategoria(List~ConfigVincoloMaxPeriodoConsecutivo~) void
  + equals(Object) boolean
}
class ConfigVincoliDao {
<<Interface>>

}
class ConfigVincoloMaxPeriodoConsecutivo {
  + ConfigVincoloMaxPeriodoConsecutivo(Categoria, int) 
  + ConfigVincoloMaxPeriodoConsecutivo() 
  - Long id
  - Categoria categoriaVincolata
  - int numMaxMinutiConsecutivi
  + getId() Long
  + getCategoriaVincolata() Categoria
  + getNumMaxMinutiConsecutivi() int
  + setId(Long) void
  + setCategoriaVincolata(Categoria) void
  + setNumMaxMinutiConsecutivi(int) void
  + equals(Object) boolean
  # canEqual(Object) boolean
  + hashCode() int
  + toString() String
}
class ConfigVincoloMaxPeriodoConsecutivoDao {
<<Interface>>
  + findAllByCategoriaVincolataNome(String) List~ConfigVincoloMaxPeriodoConsecutivo~
}
class ContestoScocciatura {
  + ContestoScocciatura(UserScheduleState, AssegnazioneTurno) 
  - UserScheduleState userScheduleState
  - AssegnazioneTurno assegnazioneTurno
  + getUserScheduleState() UserScheduleState
  + getAssegnazioneTurno() AssegnazioneTurno
  + setUserScheduleState(UserScheduleState) void
  + setAssegnazioneTurno(AssegnazioneTurno) void
  + equals(Object) boolean
  # canEqual(Object) boolean
  + hashCode() int
  + toString() String
}
class ContestoVincolo {
  + ContestoVincolo(UserScheduleState, AssegnazioneTurno) 
  - AssegnazioneTurno assegnazioneTurno
  - UserScheduleState userScheduleState
  + getUserScheduleState() UserScheduleState
  + getAssegnazioneTurno() AssegnazioneTurno
  + setUserScheduleState(UserScheduleState) void
  + setAssegnazioneTurno(AssegnazioneTurno) void
  + equals(Object) boolean
  # canEqual(Object) boolean
  + hashCode() int
  + toString() String
}
class ControllerAssegnazioniTurni {
  + ControllerAssegnazioniTurni() 
  - TurnoDao turnoDao
  - AssegnazioneTurnoDao assegnazioneTurnoDao
  - ScheduleDao scheduleDao
  - UtenteDao utenteDao
  + leggiTurnoByID(long) AssegnazioneTurno
  + leggiTurniAssegnati() Set~AssegnazioneTurnoDTO~
  + creaTurnoAssegnato(RegistraAssegnazioneTurnoDTO) AssegnazioneTurno
  + leggiTurniUtente(Long) Set~AssegnazioneTurnoDTO~
  - utenteInReperibilita(AssegnazioneTurno, Long) boolean
}
class ControllerCategorie {
  + ControllerCategorie() 
  ~ CategorieDao categorieDao
  + leggiCategorieStato() Set~CategoriaDTO~
  + leggiCategorieSpecializzazioni() Set~CategoriaDTO~
  + leggiCategorieTurnazioni() Set~CategoriaDTO~
}
class ControllerCategorieUtente {
  + ControllerCategorieUtente() 
  ~ CategoriaUtenteDao categoriaUtenteDao
  - CategorieDao categorieDao
  - UtenteDao utenteDao
  + leggiTurnazioniUtente(Long) Set~CategoriaUtenteDTO~
  + cancellaRotazione(Long, Long) void
  + aggiungiTurnazioneUtente(CategoriaUtenteDTO, Long) CategoriaUtente
  + leggiCategorieUtente(Long) Set~CategoriaUtenteDTO~
  + aggiungiStatoUtente(CategoriaUtenteDTO, Long) CategoriaUtente
  + cancellaStato(Long, Long) void
  + leggiSpecializzazioniUtente(Long) Set~CategoriaUtenteDTO~
}
class ControllerDesiderata {
  + ControllerDesiderata() 
  ~ DesiderataDao desiderataDao
  ~ UtenteDao utenteDao
  + aggiungiDesiderata(DesiderataDTO, long) Desiderata
  + getDesiderateUtente(long) List~Desiderata~
  + aggiungiDesiderate(List~DesiderataDTO~, long) List~Desiderata~
  + getDesiderateDtoUtente(long) List~DesiderataDTO~
  + cancellaDesiderata(Long, long) void
}
class ControllerGiustificaForzatura {
  + ControllerGiustificaForzatura() 
  ~ LiberatoriaDao liberatoriaDao
  ~ GiustificazioneFozaturaDao giustificazioneFozaturaDao
  ~ UtenteDao utenteDao
  + saveDelibera(MultipartFile) Liberatoria
  + saveGiustificazione(GiustificazioneForzaturaVincoliDTO) void
  + getDelibera(String) Liberatoria
}
class ControllerLogin {
  + ControllerLogin() 
  - UtenteDao utenteDao
  + autenticaUtente(LoginDTO) UtenteDTO
}
class ControllerPassword {
  + ControllerPassword() 
  - UtenteDao utenteDao
  + cambiaPassword(PasswordDTO) void
}
class ControllerScheduler {
  + ControllerScheduler() 
  - ScocciaturaDao scocciaturaDao
  - VincoloDao vincoloDao
  - UtenteDao utenteDao
  - ScheduleBuilder scheduleBuilder
  - TurnoDao turnoDao
  - AssegnazioneTurnoDao assegnazioneTurnoDao
  - ScheduleDao scheduleDao
  + rigeneraSchedule(long) boolean
  + rimuoviAssegnazioneTurnoSchedulo(AssegnazioneTurno) void
  + check(LocalDate, LocalDate) boolean
  + aggiungiAssegnazioneTurno(AssegnazioneTurno, boolean) Schedule
  - checkAssegnazioneTurno(AssegnazioneTurno) boolean
  + leggiSchedulazioniIllegali() List~ScheduloDTO~
  + rimuoviAssegnazioneTurno(Long) boolean
  + aggiungiAssegnazioneTurno(RegistraAssegnazioneTurnoDTO, boolean) Schedule
  + modificaAssegnazioneTurno(ModificaAssegnazioneTurnoDTO) Schedule
  + rimuoviSchedulo(long) boolean
  + leggiSchedulazioni() List~ScheduloDTO~
  + createSchedule(LocalDate, LocalDate) Schedule
}
class ControllerScocciatura {
  + ControllerScocciatura(List~Scocciatura~) 
  + List~Scocciatura~ scocciature
  + getScocciature() List~Scocciatura~
  + setScocciature(List~Scocciatura~) void
  + equals(Object) boolean
  # canEqual(Object) boolean
  + hashCode() int
  + toString() String
  + ordinaByUffa(List~UserScheduleState~) void
  + addUffaTempUtenti(List~UserScheduleState~, AssegnazioneTurno) void
  + calcolaUffaComplessivoUtenteAssegnazione(ContestoScocciatura) int
}
class ControllerServizi {
  + ControllerServizi() 
  ~ ServizioDao servizioDao
  + creaServizio(ServizioDTO) Servizio
  + leggiServizioByNome(String) ServizioDTO
  + leggiServizi() Set~ServizioDTO~
}
class ControllerTurni {
  + ControllerTurni() 
  ~ TurnoDao turnoDao
  + leggiTurniDiServizio(String) Set~TurnoDTO~
  + leggiTurni() Set~TurnoDTO~
  - checkTurno(Turno) boolean
  + creaTurno(TurnoDTO) Turno
}
class ControllerUtente {
  + ControllerUtente() 
  - UtenteDao utenteDao
  + leggiUtenti() Set~UtenteDTO~
  + creaUtente(UtenteDTO) Object
  + leggiUtente(long) UtenteDTO
}
class ControllerVincolo {
  + ControllerVincolo() 
  ~ VincoloDao vincoloDao
  ~ ConfigVincoliDao configVincoliDao
  ~ ConfigVincoloMaxPeriodoConsecutivoDao configVincoloMaxPeriodoConsecutivoDao
  + aggiornaVincoli(ConfigVincoli) ConfigVincoli
  + leggiVincoli() List~Vincolo~
  + leggiConfigurazioneVincoli() ConfigVincoli
}
class ConvertitoreData {
  + ConvertitoreData() 
  + daStandardVersoTestuale(String) String
}
class Country {
<<enumeration>>
  - Country(String) 
  +  GERMANY
  +  GUADELOUPE
  +  CHILE
  +  AMERICAN_SAMOA
  +  PARAGUAY
  +  SWEDEN
  +  POLAND
  +  CONGO
  +  ECUADOR
  +  HONDURAS
  +  CANADA
  - String countryCode
  +  TURKEY
  +  GUATEMALA
  +  LESOTHO
  +  PORTUGAL
  +  EL_SALVADOR
  +  LITHUANIA
  +  MADAGASCAR
  +  BRAZIL
  +  NETHERLANDS
  +  SIERRA_LEONE
  +  GUERNSEY
  +  ARMENIA
  +  SAN_MARINO
  +  VIETNAM
  +  BOLIVIA
  +  MEXICO
  +  BOTSWANA
  +  FRANCE
  +  INDONESIA
  +  SLOVENIA
  +  REUNION
  +  CROATIA
  +  AUSTRIA
  +  MALTA
  +  DENMARK
  +  RWANDA
  +  FRENCH_GUIANA
  +  MARTINIQUE
  +  BAHAMAS
  +  ANDORRA
  +  SLOVAKIA
  +  VENEZUELA
  +  UNITED_STATES
  +  CENTRAL_AFRICAN_REPUBLIC
  +  IRELAND
  +  SOUTH_SUDAN
  +  DOMINICA
  +  ISLE_OF_MAN
  +  SPAIN
  +  CUBA
  +  TOGO
  +  ARUBA
  +  ANTIGUA_AND_BARBUDA
  +  CARIBBEAN_NETHERLANDS
  +  ESTONIA
  +  HAITI
  +  CZECH_REPUBLIC
  +  SAINT_HELENA
  +  ST_BARTHELEMY
  +  UNITED_KINGDOM
  +  JERSEY
  +  TANZANIA
  +  COSTA_RICA
  +  LUXEMBOURG
  +  CURACAO
  +  ANGUILLA
  +  ANGOLA
  +  LICHTENSTEIN
  +  ZIMBABWE
  +  SOMALIA
  +  UGANDA
  +  RUSSIA
  +  GRENADA
  +  MAYOTTE
  +  ITALY
  +  NICARAGUA
  +  LATVIA
  +  NORWAY
  +  CAPE_VERDE
  +  BOSNIA_AND_HERZEGOVINA
  +  GREENLAND
  +  HUNGARY
  +  ALBANIA
  +  BARBADOS
  +  ICELAND
  +  BELGIUM
  + valueOf(String) Country
  + nameToCode(String) String?
  + values() Country[]
  + code() String
}
class CountryRestEndpoint {
  + CountryRestEndpoint() 
  + getCountryCode(String) ResponseEntity~String~
}
class DatabaseException {
  + DatabaseException(String) 
}
class Desiderata {
  + Desiderata(LocalDate, List~TipologiaTurno~, Utente) 
  + Desiderata() 
  - Utente utente
  - LocalDate data
  - Long id
  - List~TipologiaTurno~ tipologieTurnoCoinvolte
  + setId(Long) void
  + getId() Long
  + getData() LocalDate
  + getTipologieTurnoCoinvolte() List~TipologiaTurno~
  + getUtente() Utente
  + setData(LocalDate) void
  + setTipologieTurnoCoinvolte(List~TipologiaTurno~) void
  + setUtente(Utente) void
  + equals(Object) boolean
  # canEqual(Object) boolean
  + hashCode() int
  + toString() String
}
class DesiderataDTO {
  + DesiderataDTO(Long, int, int, int, List~TipologiaTurno~) 
  + DesiderataDTO(int, int, int, List~TipologiaTurno~) 
  + DesiderataDTO(int, int, int) 
  + DesiderataDTO() 
  - Long idDesiderata
  - int anno
  - int giorno
  - List~TipologiaTurno~ tipologieTurni
  - int mese
  + getAnno() int
  + getIdDesiderata() Long
  + getGiorno() int
  + equals(Object) boolean
  + getMese() int
  + getTipologieTurni() List~TipologiaTurno~
  + setIdDesiderata(Long) void
  + setGiorno(int) void
  + toString() String
  + setMese(int) void
  + setAnno(int) void
  # canEqual(Object) boolean
  + hashCode() int
  + setTipologieTurni(List~TipologiaTurno~) void
}
class DesiderataDao {
<<Interface>>
  + findAllByUtenteId(Long) List~Desiderata~
}
class DesiderataRestEndpoint {
  + DesiderataRestEndpoint() 
  ~ IControllerDesiderata controllerDesiderata
  + aggiungiDesiderate(List~DesiderataDTO~, Long) ResponseEntity~?~
  + leggiDesiderateUtente(Long) ResponseEntity~?~
  + deleteCategoriaUtente(Long, Long) ResponseEntity~?~
}
class GenerazioneScheduloDTO {
  + GenerazioneScheduloDTO() 
  - int giornoInizio
  - int meseInizio
  - int annoInizio
  - int annoFine
  - int giornoFine
  - int meseFine
  + getGiornoInizio() int
  + getAnnoInizio() int
  + getMeseInizio() int
  + getGiornoFine() int
  + getMeseFine() int
  # canEqual(Object) boolean
  + hashCode() int
  + getAnnoFine() int
  + setGiornoInizio(int) void
  + setMeseInizio(int) void
  + toString() String
  + setAnnoFine(int) void
  + equals(Object) boolean
  + setMeseFine(int) void
  + setAnnoInizio(int) void
  + setGiornoFine(int) void
  + getStartDate() LocalDate
  + getEndDate() LocalDate
}
class GiorniDellaSettimanaBitMask {
  + GiorniDellaSettimanaBitMask() 
  - byte giorni
  + getGiorni() byte
  + setGiorni(byte) void
  + equals(Object) boolean
  # canEqual(Object) boolean
  + hashCode() int
  + toString() String
  + disableAllDays() GiorniDellaSettimanaBitMask
  + removeDayOfWeek(DayOfWeek) GiorniDellaSettimanaBitMask
  + isDayOfWeekIncluded(DayOfWeek) boolean
  + enableAllDays() GiorniDellaSettimanaBitMask
  + addDayOfWeek(DayOfWeek) GiorniDellaSettimanaBitMask
  - getBitMaskGiorno(DayOfWeek) byte
}
class GiorniDellaSettimanaBitMask {
  + GiorniDellaSettimanaBitMask() 
  + byte giorni
  + isDayOfWeekIncluded(DayOfWeek) boolean
  + removeDayOfWeek(DayOfWeek) void
  + getBitMaskGiorno(DayOfWeek) byte
  + addDayOfWeek(DayOfWeek) void
}
class GiustificazioneForzaturaEndpoint {
  + GiustificazioneForzaturaEndpoint() 
  - IControllerGiustificaForzatura iControllerGiustificaForzatura
  + caricaGiustificazione(GiustificazioneForzaturaVincoliDTO) ResponseEntity~String~
  + uploadFile(MultipartFile) ResponseEntity~String~
}
class GiustificazioneForzaturaVincoli {
  + GiustificazioneForzaturaVincoli(String, TipologiaTurno, Servizio, LocalDate, Set~Utente~, Utente) 
  + GiustificazioneForzaturaVincoli() 
  - String motivazione
  - Servizio servizio
  - TipologiaTurno turnoViolante
  - Utente utenteGiustificatore
  - LocalDate data
  - Long id
  - Set~Utente~ utentiAllocati
  + getId() Long
  + getTurnoViolante() TipologiaTurno
  + getData() LocalDate
  + setServizio(Servizio) void
  + getUtentiAllocati() Set~Utente~
  + getServizio() Servizio
  # canEqual(Object) boolean
  + hashCode() int
  + getMotivazione() String
  + getUtenteGiustificatore() Utente
  + equals(Object) boolean
  + setMotivazione(String) void
  + setId(Long) void
  + setUtenteGiustificatore(Utente) void
  + toString() String
  + setTurnoViolante(TipologiaTurno) void
  + setUtentiAllocati(Set~Utente~) void
  + setData(LocalDate) void
}
class GiustificazioneForzaturaVincoliDTO {
  + GiustificazioneForzaturaVincoliDTO() 
  - int giorno
  - ServizioDTO servizio
  - String message
  - int mese
  - String utenteGiustificatoreId
  - TipologiaTurno tipologiaTurno
  - int anno
  - Set~UtenteDTO~ utentiAllocati
  + getMessage() String
  + getUtenteGiustificatoreId() String
  + setTipologiaTurno(TipologiaTurno) void
  # canEqual(Object) boolean
  + getGiorno() int
  + getMese() int
  + getAnno() int
  + getTipologiaTurno() TipologiaTurno
  + setUtentiAllocati(Set~UtenteDTO~) void
  + hashCode() int
  + toString() String
  + getUtentiAllocati() Set~UtenteDTO~
  + setAnno(int) void
  + getServizio() ServizioDTO
  + setMessage(String) void
  + setGiorno(int) void
  + setMese(int) void
  + equals(Object) boolean
  + setUtenteGiustificatoreId(String) void
  + setServizio(ServizioDTO) void
}
class GiustificazioneFozaturaDao {
<<Interface>>
  + saveAll(Iterable~S~) List~S~
}
class Holiday {
  + Holiday() 
  + Holiday(String, HolidayCategory, long, long, String) 
  - String name
  - String location
  - Long id
  - HolidayCategory category
  - long endDateEpochDay
  - long startDateEpochDay
  + setId(Long) void
  + getLocation() String
  + setName(String) void
  + setCategory(HolidayCategory) void
  + setStartDateEpochDay(long) void
  + setEndDateEpochDay(long) void
  + setLocation(String) void
  + equals(Object) boolean
  # canEqual(Object) boolean
  + toString() String
  + hashCode() int
  + getStartDate() LocalDate
  + getId() Long
  + getStartDateEpochDay() long
  + setEndDate(LocalDate) void
  + getEndDateEpochDay() long
  + getName() String
  + getCategory() HolidayCategory
  + getEndDate() LocalDate
  + setStartDate(LocalDate) void
}
class HolidayCategory {
<<enumeration>>
  + HolidayCategory() 
  +  CIVILE
  +  NAZIONALE
  +  RELIGIOSA
  +  LAICA
  +  CORPORATE
  + valueOf(String) HolidayCategory
  + values() HolidayCategory[]
}
class HolidayController {
  + HolidayController() 
  - HolidayDao holidayDao
  + registerHoliday(List~Holiday~) void
  + readHolidays() List~Holiday~
  + registerHolidayPeriod(HolidayDTO) void
  + registerHolidayPeriod(HolidayDTO, int) void
  + registerSundays(LocalDate, int) void
}
class HolidayDTO {
  + HolidayDTO() 
  + HolidayDTO(String, HolidayCategory, long, long, String) 
  - int endMonth
  - int startDayOfMonth
  - String name
  - String Location
  - HolidayCategory category
  - int endYear
  - int endDayOfMonth
  - int startMonth
  - int startYear
  + getLocation() String
  + getStartDateEpochDay() long
  + hashCode() int
  + setName(String) void
  + setCategory(HolidayCategory) void
  + setStartYear(int) void
  + setStartMonth(int) void
  + setStartDayOfMonth(int) void
  + setLocation(String) void
  + setEndYear(int) void
  + toString() String
  + setEndMonth(int) void
  # canEqual(Object) boolean
  + setEndDayOfMonth(int) void
  + equals(Object) boolean
  + getEndMonth() int
  + getEndYear() int
  + setStartDateEpochDay(long) void
  + getStartMonth() int
  + getStartYear() int
  + getEndDayOfMonth() int
  + getStartDayOfMonth() int
  + getEndDateEpochDay() long
  + getName() String
  + getCategory() HolidayCategory
  + setEndDateEpochDay(long) void
}
class HolidayDao {
<<Interface>>
  + findByStartDateEpochDayGreaterThanEqualAndEndDateEpochDayLessThanEqual(long, long) List~Holiday~
  + findByName(String) List~Holiday~
  + findAll() List~Holiday~
  + findByCategory(HolidayCategory) List~Holiday~
}
class HolidayRestEndpoint {
  + HolidayRestEndpoint() 
  - CalendarSetting setting
  - ICalendarServiceManager calendarServiceManager
  - IHolidayController holidayController
  + getHolidays(String, String) ResponseEntity~List~HolidayDTO~~
}
class ICalendarServiceManager {
<<Interface>>
  + init(CalendarSetting) void
  + getHolidays() List~Holiday~
  + getAllSundays(int) List~Date~
}
class IControllerAssegnazioneTurni {
<<Interface>>
  + leggiTurniAssegnati() Set~AssegnazioneTurnoDTO~
  + leggiTurniUtente(Long) Set~AssegnazioneTurnoDTO~
  + leggiTurnoByID(long) AssegnazioneTurno
  + creaTurnoAssegnato(RegistraAssegnazioneTurnoDTO) AssegnazioneTurno
}
class IControllerCategorie {
<<Interface>>
  + leggiCategorieStato() Set~CategoriaDTO~
  + leggiCategorieTurnazioni() Set~CategoriaDTO~
  + leggiCategorieSpecializzazioni() Set~CategoriaDTO~
}
class IControllerCategorieUtente {
<<Interface>>
  + cancellaRotazione(Long, Long) void
  + leggiSpecializzazioniUtente(Long) Set~CategoriaUtenteDTO~
  + aggiungiTurnazioneUtente(CategoriaUtenteDTO, Long) CategoriaUtente
  + leggiTurnazioniUtente(Long) Set~CategoriaUtenteDTO~
  + aggiungiStatoUtente(CategoriaUtenteDTO, Long) CategoriaUtente
  + leggiCategorieUtente(Long) Set~CategoriaUtenteDTO~
  + cancellaStato(Long, Long) void
}
class IControllerDesiderata {
<<Interface>>
  + cancellaDesiderata(Long, long) void
  + getDesiderateUtente(long) List~Desiderata~
  + aggiungiDesiderate(List~DesiderataDTO~, long) List~Desiderata~
  + aggiungiDesiderata(DesiderataDTO, long) Desiderata
  + getDesiderateDtoUtente(long) List~DesiderataDTO~
}
class IControllerGiustificaForzatura {
<<Interface>>
  + saveGiustificazione(GiustificazioneForzaturaVincoliDTO) void
  + saveDelibera(MultipartFile) Liberatoria
  + getDelibera(String) Liberatoria
}
class IControllerLogin {
<<Interface>>
  + autenticaUtente(LoginDTO) UtenteDTO
}
class IControllerPassword {
<<Interface>>
  + cambiaPassword(PasswordDTO) void
}
class IControllerScheduler {
<<Interface>>
  + rimuoviAssegnazioneTurno(Long) boolean
  + leggiSchedulazioniIllegali() List~ScheduloDTO~
  + createSchedule(LocalDate, LocalDate) Schedule
  + rimuoviAssegnazioneTurnoSchedulo(AssegnazioneTurno) void
  + aggiungiAssegnazioneTurno(RegistraAssegnazioneTurnoDTO, boolean) Schedule
  + leggiSchedulazioni() List~ScheduloDTO~
  + modificaAssegnazioneTurno(ModificaAssegnazioneTurnoDTO) Schedule
  + rigeneraSchedule(long) boolean
  + aggiungiAssegnazioneTurno(AssegnazioneTurno, boolean) Schedule
  + rimuoviSchedulo(long) boolean
}
class IControllerServizi {
<<Interface>>
  + leggiServizi() Set~ServizioDTO~
  + leggiServizioByNome(String) ServizioDTO
  + creaServizio(ServizioDTO) Servizio
}
class IControllerTurni {
<<Interface>>
  + leggiTurniDiServizio(String) Set~TurnoDTO~
  + leggiTurni() Set~TurnoDTO~
  + creaTurno(TurnoDTO) Turno
}
class IControllerUtente {
<<Interface>>
  + leggiUtenti() Set~UtenteDTO~
  + leggiUtente(long) UtenteDTO
  + creaUtente(UtenteDTO) Object
}
class IControllerVincolo {
<<Interface>>
  + leggiVincoli() List~Vincolo~
  + aggiornaVincoli(ConfigVincoli) ConfigVincoli
  + leggiConfigurazioneVincoli() ConfigVincoli
}
class IHolidayController {
<<Interface>>
  + registerHolidayPeriod(HolidayDTO) void
  + readHolidays() List~Holiday~
  + registerHoliday(List~Holiday~) void
  + registerHolidayPeriod(HolidayDTO, int) void
  + registerSundays(LocalDate, int) void
}
class IllegalAssegnazioneTurnoException {
  + IllegalAssegnazioneTurnoException(String) 
  + IllegalAssegnazioneTurnoException(Exception) 
}
class Liberatoria {
  + Liberatoria() 
  + Liberatoria(String, String, byte[]) 
  - String type
  - byte[] data
  - Long id
  - String name
  + setType(String) void
  + getId() Long
  + toString() String
  + getName() String
  + getType() String
  + getData() byte[]
  + setId(Long) void
  + setName(String) void
  + setData(byte[]) void
  + equals(Object) boolean
  # canEqual(Object) boolean
  + hashCode() int
}
class LiberatoriaDao {
<<Interface>>
  + findDeliberaByName(String) Liberatoria
}
class LoginDTO {
  + LoginDTO(String, String) 
  + LoginDTO() 
  - String username
  - String password
  + getUsername() String
  + getPassword() String
  + setUsername(String) void
  + setPassword(String) void
  + equals(Object) boolean
  # canEqual(Object) boolean
  + hashCode() int
  + toString() String
}
class LoginRestEndpoint {
  + LoginRestEndpoint() 
  - IControllerLogin controllerLogin
  + login(LoginDTO) ResponseEntity~?~
}
class MansioneEnum {
<<enumeration>>
  + MansioneEnum() 
  +  AMBULATORIO
  +  REPARTO
  +  SALA_OPERATORIA
  +  GUARDIA
  + values() MansioneEnum[]
  + valueOf(String) MansioneEnum
}
class MappaAssegnazioneTurni {
  + MappaAssegnazioneTurni() 
  + assegnazioneTurnoToDTO(Set~AssegnazioneTurno~) Set~AssegnazioneTurnoDTO~
  + assegnazioneTurnoToDTO(AssegnazioneTurno) AssegnazioneTurnoDTO
}
class MappaCategoriaUtente {
  + MappaCategoriaUtente() 
  + categoriaUtenteToDTO(Set~CategoriaUtente~) Set~CategoriaUtenteDTO~
  + categoriaUtenteDTOToEntity(CategoriaUtenteDTO) CategoriaUtente
  + categoriaUtenteToDTO(CategoriaUtente) CategoriaUtenteDTO
}
class MappaCategoriePerTipo {
  + MappaCategoriePerTipo() 
  + equals(Object) boolean
  # canEqual(Object) boolean
  + hashCode() int
  + toString() String
  + categoriaSetEntityToDTO(Set~Categoria~) Set~CategoriaDTO~
  + CategoriatoDTO(Categoria) CategoriaDTO
  + CategoriaDTOtoEntity(CategoriaDTO) Categoria
}
class MappaDesiderata {
  + MappaDesiderata() 
  + desiderataDtoToEntity(DesiderataDTO, Utente) Desiderata
  + desiderataDtoToEntity(List~DesiderataDTO~, Utente) List~Desiderata~
  + desiderataToDto(List~Desiderata~) List~DesiderataDTO~
  + desiderataToDto(Desiderata) DesiderataDTO
}
class MappaGiustificazioneForzaturaVincoli {
  + MappaGiustificazioneForzaturaVincoli() 
  + equals(Object) boolean
  # canEqual(Object) boolean
  + hashCode() int
  + toString() String
}
class MappaHolidays {
  - MappaHolidays() 
  + holidayToDto(Holiday) HolidayDTO
  + dtoToHoliday(HolidayDTO) Holiday
}
class MappaSchedulo {
  + MappaSchedulo() 
  + scheduloEntitytoDTO(List~Schedule~) List~ScheduloDTO~
  + scheduloToDTO(Schedule) ScheduloDTO
}
class MappaServizio {
  + MappaServizio() 
  + servizioEntitytoDTO(List~Servizio~) Set~ServizioDTO~
  + servizioEntitytoDTO(Servizio) ServizioDTO
  + servizioDTOtoEntity(ServizioDTO) Servizio
}
class MappaTurni {
  + MappaTurni() 
  + turnoEntityToDTO(List~Turno~) Set~TurnoDTO~
  + turnoDTOToEntity(TurnoDTO) Turno
  + turnoEntityToDTO(Turno) TurnoDTO
}
class MappaUtenti {
  + MappaUtenti() 
  + utenteDTOtoEntity(Set~UtenteDTO~) Set~Utente~
  + utentiEntitytoDTO(List~Utente~) Set~UtenteDTO~
  + utenteEntitytoDTO(Utente) UtenteDTO
  + utenteDTOtoEntity(UtenteDTO) Utente
  + utentiEntitytoDTO(Set~Utente~) Set~UtenteDTO~
}
class ModificaAssegnazioneTurnoDTO {
  + ModificaAssegnazioneTurnoDTO(long, long[], long[], long) 
  + ModificaAssegnazioneTurnoDTO() 
  ~ long utenteModificatoreId
  ~ long idAssegnazione
  ~ long[] utenti_guardia
  ~ long[] utenti_reperibili
  + getUtenti_guardia() long[]
  + getIdAssegnazione() long
  + getUtenti_reperibili() long[]
  + getUtenteModificatoreId() long
  + hashCode() int
  + setIdAssegnazione(long) void
  + setUtenti_guardia(long[]) void
  + setUtenti_reperibili(long[]) void
  + setUtenteModificatoreId(long) void
  + equals(Object) boolean
  # canEqual(Object) boolean
  + toString() String
}
class Ms3Application {
  + Ms3Application() 
  + main(String[]) void
}
class NotEnoughFeasibleUsersException {
  + NotEnoughFeasibleUsersException(int, int) 
}
class PasswordDTO {
  + PasswordDTO(Long, String, String) 
  + PasswordDTO() 
  - Long id
  - String oldPassword
  - String newPassword
  + getId() Long
  + getOldPassword() String
  + getNewPassword() String
  + setId(Long) void
  + setOldPassword(String) void
  + setNewPassword(String) void
  + equals(Object) boolean
  # canEqual(Object) boolean
  + hashCode() int
  + toString() String
}
class RegistraAssegnazioneTurnoDTO {
  + RegistraAssegnazioneTurnoDTO() 
  - Set~UtenteDTO~ utentiReperibili
  - int anno
  - Set~UtenteDTO~ utentiDiGuardia
  - ServizioDTO servizio
  - TipologiaTurno tipologiaTurno
  - boolean forced
  - int mese
  - MansioneEnum mansione
  - int giorno
  + getUtentiDiGuardia() Set~UtenteDTO~
  + getGiorno() int
  + getMese() int
  + getAnno() int
  + toString() String
  + getTipologiaTurno() TipologiaTurno
  + getMansione() MansioneEnum
  + setAnno(int) void
  + setUtentiReperibili(Set~UtenteDTO~) void
  + hashCode() int
  + setTipologiaTurno(TipologiaTurno) void
  # canEqual(Object) boolean
  + setServizio(ServizioDTO) void
  + getUtentiReperibili() Set~UtenteDTO~
  + setMansione(MansioneEnum) void
  + setUtentiDiGuardia(Set~UtenteDTO~) void
  + getServizio() ServizioDTO
  + isForced() boolean
  + setGiorno(int) void
  + equals(Object) boolean
  + setMese(int) void
  + setForced(boolean) void
}
class RispostaViolazioneVincoli {
  + RispostaViolazioneVincoli() 
  ~ List~String~ messagges
  + getMessagges() List~String~
  + setMessagges(List~String~) void
  + equals(Object) boolean
  # canEqual(Object) boolean
  + hashCode() int
  + toString() String
}
class RuoloEnum {
<<enumeration>>
  + RuoloEnum() 
  +  SPECIALIZZANDO
  +  STRUTTURATO
  + values() RuoloEnum[]
  + valueOf(String) RuoloEnum
}
class RuoloNumero {
  + RuoloNumero() 
  + RuoloNumero(Long, RuoloEnum, int) 
  + RuoloNumero(RuoloEnum, int) 
  - Long id
  - int numero
  - RuoloEnum ruolo
  + getId() Long
  + getRuolo() RuoloEnum
  + getNumero() int
  + setId(Long) void
  + setRuolo(RuoloEnum) void
  + setNumero(int) void
  + equals(Object) boolean
  # canEqual(Object) boolean
  + hashCode() int
  + toString() String
}
class RuoloNumeroDao {
<<Interface>>

}
class Schedule {
  + Schedule(LocalDate, LocalDate) 
  + Schedule() 
  - Exception causeIllegal
  - long startDateEpochDay
  - Long id
  - boolean isIllegal
  ~ List~ViolatedConstraintLogEntry~ violatedConstraintLog
  - List~AssegnazioneTurno~ assegnazioniTurno
  - long endDateEpochDay
  + setId(Long) void
  + getId() Long
  + getStartDateEpochDay() long
  + toString() String
  + setIllegal(boolean) void
  + equals(Object) boolean
  # canEqual(Object) boolean
  + getEndDateEpochDay() long
  + setAssegnazioniTurno(List~AssegnazioneTurno~) void
  + getAssegnazioniTurno() List~AssegnazioneTurno~
  + getViolatedConstraintLog() List~ViolatedConstraintLogEntry~
  + isIllegal() boolean
  + hashCode() int
  + getCauseIllegal() Exception
  + setStartDateEpochDay(long) void
  + setCauseIllegal(Exception) void
  + setEndDateEpochDay(long) void
  + setViolatedConstraintLog(List~ViolatedConstraintLogEntry~) void
  + getEndDate() LocalDate
  + redeem() void
  + getStartDate() LocalDate
  + taint(Exception) void
  + purify() void
}
class ScheduleBuilder {
  + ScheduleBuilder(List~Vincolo~, List~Utente~, Schedule) 
  + ScheduleBuilder(LocalDate, LocalDate, List~Vincolo~, List~AssegnazioneTurno~, List~Utente~) 
  - Schedule schedule
  - ControllerScocciatura controllerScocciatura
  - Logger logger
  - List~Vincolo~ allConstraints
  - Map~Long, UserScheduleState~ allUserScheduleStates
  + getAllUserScheduleStates() Map~Long, UserScheduleState~
  + getLogger() Logger
  + getAllConstraints() List~Vincolo~
  + getSchedule() Schedule
  + toString() String
  + getControllerScocciatura() ControllerScocciatura
  + setLogger(Logger) void
  + setAllConstraints(List~Vincolo~) void
  + setAllUserScheduleStates(Map~Long, UserScheduleState~) void
  + setSchedule(Schedule) void
  # canEqual(Object) boolean
  + equals(Object) boolean
  + hashCode() int
  + setControllerScocciatura(ControllerScocciatura) void
  + addAssegnazioneTurno(AssegnazioneTurno, boolean) Schedule
  + build() Schedule
  - initializeUserScheduleStates(List~Utente~) void
  - aggiungiUtenti(AssegnazioneTurno, int, Set~Utente~) void
  - verificaTuttiVincoli(ContestoVincolo, boolean) boolean
}
class ScheduleDao {
<<Interface>>
  + findByDateBetween(long) Schedule
  + leggiSchedulazioniIllegali() List~Schedule~
}
class ScheduloDTO {
  + ScheduloDTO() 
  + ScheduloDTO(String, String, boolean, long) 
  - boolean illegalita
  - String dataInizio
  - String dataFine
  - long id
  + setDataInizio(String) void
  + getDataInizio() String
  + getDataFine() String
  + getId() long
  + isIllegalita() boolean
  + setDataFine(String) void
  + setId(long) void
  + setIllegalita(boolean) void
  + equals(Object) boolean
  # canEqual(Object) boolean
  + toString() String
  + hashCode() int
}
class ScheduloRestEndpoint {
  + ScheduloRestEndpoint() 
  - IControllerScheduler controllerScheduler
  + creaSchedulo(GenerazioneScheduloDTO) ResponseEntity~?~
  + ricreaSchedulo(Long) ResponseEntity~?~
  + leggiSchedulazioniIllegali() ResponseEntity~?~
  + leggiSchedulazioni() ResponseEntity~?~
  + deleteSchedulo(Long) ResponseEntity~?~
}
class Scocciatura {
  + Scocciatura() 
  - Long id
  + calcolaUffa(ContestoScocciatura) int
  + getId() Long
  + setId(Long) void
  + equals(Object) boolean
  # canEqual(Object) boolean
  + hashCode() int
  + toString() String
}
class ScocciaturaAssegnazioneUtente {
  + ScocciaturaAssegnazioneUtente(int, DayOfWeek, TipologiaTurno) 
  + ScocciaturaAssegnazioneUtente() 
  - int peso
  - DayOfWeek giornoSettimana
  - TipologiaTurno tipologiaTurno
  + getPeso() int
  + getGiornoSettimana() DayOfWeek
  + getTipologiaTurno() TipologiaTurno
  + setPeso(int) void
  + setGiornoSettimana(DayOfWeek) void
  + setTipologiaTurno(TipologiaTurno) void
  + equals(Object) boolean
  # canEqual(Object) boolean
  + hashCode() int
  + toString() String
  + calcolaUffa(ContestoScocciatura) int
}
class ScocciaturaDao {
<<Interface>>

}
class ScocciaturaDesiderata {
  + ScocciaturaDesiderata() 
  + ScocciaturaDesiderata(int) 
  - int peso
  + getPeso() int
  + setPeso(int) void
  + equals(Object) boolean
  # canEqual(Object) boolean
  + hashCode() int
  + toString() String
  + calcolaUffa(ContestoScocciatura) int
}
class ScocciaturaVacanza {
  + ScocciaturaVacanza() 
  + ScocciaturaVacanza(int, Holiday, TipologiaTurno) 
  - int peso
  - Holiday vacanza
  - TipologiaTurno tipologiaTurno
  + getPeso() int
  + getVacanza() Holiday
  + getTipologiaTurno() TipologiaTurno
  + setPeso(int) void
  + setVacanza(Holiday) void
  + setTipologiaTurno(TipologiaTurno) void
  + equals(Object) boolean
  # canEqual(Object) boolean
  + hashCode() int
  + toString() String
  + calcolaUffa(ContestoScocciatura) int
}
class Servizio {
  + Servizio(String) 
  # Servizio() 
  + Servizio(String, List~MansioneEnum~) 
  - String nome
  ~ List~MansioneEnum~ mansioni
  + getNome() String
  + getMansioni() List~MansioneEnum~
  + setNome(String) void
  + setMansioni(List~MansioneEnum~) void
  + equals(Object) boolean
  # canEqual(Object) boolean
  + hashCode() int
  + toString() String
}
class ServizioDTO {
  + ServizioDTO(String, List~MansioneEnum~) 
  + ServizioDTO() 
  + ServizioDTO(String) 
  - String nome
  - List~MansioneEnum~ mansioni
  + getNome() String
  + getMansioni() List~MansioneEnum~
  + setNome(String) void
  + setMansioni(List~MansioneEnum~) void
  + equals(Object) boolean
  # canEqual(Object) boolean
  + hashCode() int
  + toString() String
}
class ServizioDao {
<<Interface>>
  + findByNome(String) Servizio
}
class ServizioRestEndpoint {
  + ServizioRestEndpoint() 
  ~ IControllerServizi controllerServizi
  + creaServizio(ServizioDTO) ResponseEntity~?~
  + leggiServizi() ResponseEntity~?~
  + leggiServizio(String) ResponseEntity~?~
}
class TipoCategoriaEnum {
<<enumeration>>
  + TipoCategoriaEnum() 
  +  STATO
  +  SPECIALIZZAZIONE
  +  TURNAZIONE
  + values() TipoCategoriaEnum[]
  + valueOf(String) TipoCategoriaEnum
}
class TipologiaTurno {
<<enumeration>>
  + TipologiaTurno() 
  +  MATTUTINO
  +  POMERIDIANO
  +  NOTTURNO
  + valueOf(String) TipologiaTurno
  + values() TipologiaTurno[]
}
class Turno {
  + Turno() 
  + Turno(LocalTime, LocalTime, Servizio, MansioneEnum, TipologiaTurno, List~RuoloNumero~, boolean) 
  + Turno(LocalTime, LocalTime, Servizio, MansioneEnum, TipologiaTurno, boolean) 
  + Turno(long, LocalTime, LocalTime, Servizio, MansioneEnum, TipologiaTurno, boolean) 
  + Turno(LocalTime, LocalTime, Servizio, MansioneEnum, TipologiaTurno, boolean, List~RuoloNumero~, boolean) 
  + Turno(Long, TipologiaTurno, LocalTime, LocalTime, GiorniDellaSettimanaBitMask, Servizio, MansioneEnum, boolean) 
  + Turno(LocalTime, LocalTime, Servizio, MansioneEnum, TipologiaTurno, List~RuoloNumero~) 
  - LocalTime oraInizio
  - Long id
  - boolean reperibilitaAttiva
  - TipologiaTurno tipologiaTurno
  - boolean giornoSuccessivo
  - MansioneEnum mansione
  - List~UserCategoryPolicy~ categoryPolicies
  - Servizio servizio
  - GiorniDellaSettimanaBitMask giorniDiValidità
  - List~RuoloNumero~ ruoliNumero
  - LocalTime oraFine
  + getNumRequiredUsers() int
  + getOraFine() LocalTime
  + getTipologiaTurno() TipologiaTurno
  + getId() Long
  + setId(Long) void
  + setReperibilitaAttiva(boolean) void
  + setOraFine(LocalTime) void
  + getOraInizio() LocalTime
  + isGiornoSuccessivo() boolean
  + isReperibilitaAttiva() boolean
  + setMansione(MansioneEnum) void
  + getCategoryPolicies() List~UserCategoryPolicy~
  + equals(Object) boolean
  + setGiornoSuccessivo(boolean) void
  + hashCode() int
  + setOraInizio(LocalTime) void
  + getRuoliNumero() List~RuoloNumero~
  + setServizio(Servizio) void
  + setGiorniDiValidità(GiorniDellaSettimanaBitMask) void
  # canEqual(Object) boolean
  + getMansione() MansioneEnum
  + setRuoliNumero(List~RuoloNumero~) void
  + toString() String
  + setTipologiaTurno(TipologiaTurno) void
  + setCategoryPolicies(List~UserCategoryPolicy~) void
  + getGiorniDiValidità() GiorniDellaSettimanaBitMask
  + getServizio() Servizio
  + setCategorieVietate(Set~Categoria~) void
  + getMinutidiLavoro() long
  + getCategorieVietate() Set~Categoria~
  + setGiornoSuccessivo() void
}
class TurnoDTO {
  + TurnoDTO(long, TipologiaTurno, LocalTime, LocalTime, ServizioDTO, MansioneEnum, boolean, boolean, List~RuoloNumero~) 
  + TurnoDTO() 
  - TipologiaTurno tipologiaTurno
  - Set~Categoria~ categorieVietate
  - boolean giornoSuccessivo
  - MansioneEnum mansione
  - LocalTime oraInizio
  - List~RuoloNumero~ ruoliNumero
  - LocalTime oraFine
  - ServizioDTO servizio
  - long id
  - boolean reperibilitaAttiva
  + setOraInizio(LocalTime) void
  + getMansione() MansioneEnum
  + isGiornoSuccessivo() boolean
  + getId() long
  + isReperibilitaAttiva() boolean
  + setId(long) void
  + hashCode() int
  + setReperibilitaAttiva(boolean) void
  + setMansione(MansioneEnum) void
  + getRuoliNumero() List~RuoloNumero~
  + setTipologiaTurno(TipologiaTurno) void
  + setOraFine(LocalTime) void
  + setGiornoSuccessivo(boolean) void
  + setCategorieVietate(Set~Categoria~) void
  + toString() String
  + equals(Object) boolean
  # canEqual(Object) boolean
  + setRuoliNumero(List~RuoloNumero~) void
  + setServizio(ServizioDTO) void
  + getOraFine() LocalTime
  + getOraInizio() LocalTime
  + getTipologiaTurno() TipologiaTurno
  + getServizio() ServizioDTO
  + getCategorieVietate() Set~Categoria~
}
class TurnoDao {
<<Interface>>
  + findAllByServizioNomeAndTipologiaTurno(String, TipologiaTurno) List~Turno~
  + findAllByServizioNome(String) List~Turno~
}
class TurnoException {
  + TurnoException(String) 
}
class TurnoRestEndpoint {
  + TurnoRestEndpoint() 
  ~ IControllerTurni controllerTurni
  + creaTurno(TurnoDTO) ResponseEntity~?~
  + leggiTurni() ResponseEntity~?~
  + leggiTurniServizio(String) ResponseEntity~?~
}
class UnableToBuildScheduleException {
  + UnableToBuildScheduleException(String) 
  + UnableToBuildScheduleException(String, NotEnoughFeasibleUsersException) 
}
class UserCategoryPolicy {
  + UserCategoryPolicy(Categoria, Turno, UserCategoryPolicyValue) 
  + UserCategoryPolicy() 
  - Categoria categoria
  - Turno turno
  - Long id
  - UserCategoryPolicyValue policy
  + getTurno() Turno
  + getId() Long
  + getCategoria() Categoria
  + toString() String
  + getPolicy() UserCategoryPolicyValue
  + setId(Long) void
  + setCategoria(Categoria) void
  + setTurno(Turno) void
  + setPolicy(UserCategoryPolicyValue) void
  + equals(Object) boolean
  # canEqual(Object) boolean
  + hashCode() int
}
class UserCategoryPolicyDao {
<<Interface>>

}
class UserCategoryPolicyValue {
<<enumeration>>
  + UserCategoryPolicyValue() 
  +  INCLUDE
  +  EXCLUDE
  + valueOf(String) UserCategoryPolicyValue
  + values() UserCategoryPolicyValue[]
}
class UserScheduleState {
  + UserScheduleState(Utente, Schedule) 
  + UserScheduleState() 
  - int uffaParziale
  - int uffaCumulativo
  ~ List~AssegnazioneTurno~ assegnazioniTurnoCache
  - Utente utente
  - Long id
  - Schedule schedule
  + getSchedule() Schedule
  + getId() Long
  + getUtente() Utente
  + getUffaParziale() int
  + equals(Object) boolean
  # canEqual(Object) boolean
  + getUffaCumulativo() int
  + toString() String
  + setAssegnazioniTurnoCache(List~AssegnazioneTurno~) void
  + setId(Long) void
  + setUtente(Utente) void
  + hashCode() int
  + setSchedule(Schedule) void
  + setUffaParziale(int) void
  + setUffaCumulativo(int) void
  + addUffaTemp(int) void
  + addAssegnazioneTurno(AssegnazioneTurno) void
  + getAssegnazioniTurnoCache() List~AssegnazioneTurno~
  + saveUffaTemp() void
}
class Utente {
  + Utente(Long, String, String, String, LocalDate, String, String, RuoloEnum, AttoreEnum) 
  + Utente(Long, String, String, LocalDate, String, RuoloEnum, String, String, int, AttoreEnum) 
  # Utente() 
  + Utente(Long, String, String, LocalDate, String, RuoloEnum, String, String, int, List~CategoriaUtente~, AttoreEnum) 
  + Utente(Long, String, String, String, LocalDate, String, String, RuoloEnum, List~CategoriaUtente~, AttoreEnum) 
  + Utente(String, String, String, LocalDate, String, String, RuoloEnum, AttoreEnum) 
  + Utente(Long, String, String, String, LocalDate, String, RuoloEnum, List~CategoriaUtente~, String, List~Desiderata~, AttoreEnum) 
  - List~Desiderata~ desiderataList
  - String cognome
  - List~CategoriaUtente~ turnazioni
  - String nome
  - List~CategoriaUtente~ specializzazioni
  - LocalDate dataNascita
  - Long id
  - RuoloEnum ruoloEnum
  - AttoreEnum attore
  - String password
  - int maxWeekSchedulableHours
  - String codiceFiscale
  - String email
  - List~CategoriaUtente~ stato
  + getPassword() String
  + getId() Long
  + getNome() String
  + setRuoloEnum(RuoloEnum) void
  + setAttore(AttoreEnum) void
  + setStato(List~CategoriaUtente~) void
  + setId(Long) void
  + getCognome() String
  + getTurnazioni() List~CategoriaUtente~
  + setPassword(String) void
  + hashCode() int
  + setDataNascita(LocalDate) void
  # canEqual(Object) boolean
  + setEmail(String) void
  + getDataNascita() LocalDate
  + equals(Object) boolean
  + setTurnazioni(List~CategoriaUtente~) void
  + getCodiceFiscale() String
  + getRuoloEnum() RuoloEnum
  + getEmail() String
  + getMaxWeekSchedulableHours() int
  + setNome(String) void
  + setDesiderataList(List~Desiderata~) void
  + setCodiceFiscale(String) void
  + getSpecializzazioni() List~CategoriaUtente~
  + setSpecializzazioni(List~CategoriaUtente~) void
  + setCognome(String) void
  + toString() String
  + getDesiderataList() List~Desiderata~
  + getStato() List~CategoriaUtente~
  + getAttore() AttoreEnum
  + setMaxWeekSchedulableHours(int) void
}
class UtenteDTO {
  + UtenteDTO(Long, String, String, LocalDate, String, RuoloEnum, String, String, List~CategoriaUtente~, List~CategoriaUtente~, AttoreEnum) 
  + UtenteDTO() 
  - String email
  - RuoloEnum ruoloEnum
  - String cognome
  - List~CategoriaUtente~ specializzazioni
  - LocalDate dataNascita
  - String nome
  - String codiceFiscale
  - String password
  - List~CategoriaUtente~ categorie
  - Long id
  - AttoreEnum attore
  + getDataNascita() LocalDate
  + getId() Long
  + getNome() String
  + equals(Object) boolean
  + setId(Long) void
  + setNome(String) void
  + getCognome() String
  + getCodiceFiscale() String
  + hashCode() int
  + setEmail(String) void
  + setAttore(AttoreEnum) void
  + getRuoloEnum() RuoloEnum
  + getEmail() String
  + getAttore() AttoreEnum
  + setPassword(String) void
  + toString() String
  + getPassword() String
  # canEqual(Object) boolean
  + setRuoloEnum(RuoloEnum) void
  + setSpecializzazioni(List~CategoriaUtente~) void
  + getCategorie() List~CategoriaUtente~
  + setCodiceFiscale(String) void
  + setCategorie(List~CategoriaUtente~) void
  + setCognome(String) void
  + getSpecializzazioni() List~CategoriaUtente~
  + setDataNascita(LocalDate) void
}
class UtenteDao {
<<Interface>>
  + findByEmailAndPassword(String, String) Utente
  + findById(long) Utente
}
class UtentiRestEndpoint {
  + UtentiRestEndpoint() 
  - IControllerUtente controllerUtente
  + creaUtente(UtenteDTO) ResponseEntity~?~
  + leggiUtenti() ResponseEntity~?~
  + leggiUtente(Long) ResponseEntity~?~
}
class Vincolo {
  + Vincolo() 
  - boolean violabile
  - String descrizione
  - Long id
  + isViolabile() boolean
  + getDescrizione() String
  + setViolabile(boolean) void
  + setDescrizione(String) void
  + equals(Object) boolean
  # canEqual(Object) boolean
  + hashCode() int
  + toString() String
  + getId() Long
  + setId(Long) void
  + verificaVincolo(ContestoVincolo) void
}
class VincoloAssegnazioneTurnoTurno {
  + VincoloAssegnazioneTurnoTurno() 
  # getAssegnazioneTurnoPrecedenteIdx(List~AssegnazioneTurno~, AssegnazioneTurno) int
  # verificaContiguitàAssegnazioneTurni(AssegnazioneTurno, AssegnazioneTurno) boolean
  # verificaContiguitàAssegnazioneTurni(AssegnazioneTurno, AssegnazioneTurno, TemporalUnit, long) boolean
}
class VincoloCategorieUtenteTurno {
  + VincoloCategorieUtenteTurno() 
  - checkPolicy(UserCategoryPolicy, Utente, LocalDate) boolean
  + verificaVincolo(ContestoVincolo) void
}
class VincoloDao {
<<Interface>>
  + findByType(String) List~Vincolo~
}
class VincoloMaxOrePeriodo {
  + VincoloMaxOrePeriodo() 
  + VincoloMaxOrePeriodo(int, long) 
  - long numMinutiMaxPeriodo
  - int numGiorniPeriodo
  + getNumGiorniPeriodo() int
  + getNumMinutiMaxPeriodo() long
  + setNumGiorniPeriodo(int) void
  + setNumMinutiMaxPeriodo(long) void
  + equals(Object) boolean
  # canEqual(Object) boolean
  + hashCode() int
  + toString() String
  + verificaVincolo(ContestoVincolo) void
}
class VincoloMaxPeriodoConsecutivo {
  + VincoloMaxPeriodoConsecutivo(int) 
  + VincoloMaxPeriodoConsecutivo() 
  + VincoloMaxPeriodoConsecutivo(int, Categoria) 
  - long maxConsecutiveMinutes
  - Categoria categoriaVincolata
  + getMaxConsecutiveMinutes() long
  + getCategoriaVincolata() Categoria
  + setMaxConsecutiveMinutes(long) void
  + setCategoriaVincolata(Categoria) void
  + equals(Object) boolean
  # canEqual(Object) boolean
  + hashCode() int
  + toString() String
  + verificaVincolo(ContestoVincolo) void
  - verificaAppartenenzaCategoria(ContestoVincolo) boolean
}
class VincoloNumeroDiRuoloTurno {
  + VincoloNumeroDiRuoloTurno() 
  + verificaVincolo(ContestoVincolo) void
  - verifica(ContestoVincolo, Set~Utente~) void
  - contaRuoli(ContestoVincolo, Set~Utente~) void
}
class VincoloRestEndpoint {
  + VincoloRestEndpoint() 
  ~ IControllerVincolo controllerVincolo
  + leggiConfigurazioneVincoli() ResponseEntity~?~
  + leggiVincoli() ResponseEntity~?~
  + aggiornaConfigurazioneVincoli(ConfigVincoli) ResponseEntity~?~
}
class VincoloTipologieTurniContigue {
  + VincoloTipologieTurniContigue() 
  + VincoloTipologieTurniContigue(int, ChronoUnit, TipologiaTurno, HashSet~TipologiaTurno~) 
  - int horizon
  - ChronoUnit tUnit
  - Set~TipologiaTurno~ tipologieTurnoVietate
  - TipologiaTurno tipologiaTurno
  + getHorizon() int
  + getTUnit() ChronoUnit
  + getTipologiaTurno() TipologiaTurno
  + getTipologieTurnoVietate() Set~TipologiaTurno~
  + setHorizon(int) void
  + setTUnit(ChronoUnit) void
  + setTipologiaTurno(TipologiaTurno) void
  + setTipologieTurnoVietate(Set~TipologiaTurno~) void
  + verificaVincolo(ContestoVincolo) void
}
class VincoloTipologieTurniContigueDao {
<<Interface>>

}
class VincoloUbiquità {
  + VincoloUbiquità() 
  + verificaVincolo(ContestoVincolo) void
}
class ViolatedConstraintException {
  + ViolatedConstraintException() 
  + ViolatedConstraintException(Exception) 
  + ViolatedConstraintException(String) 
}
class ViolatedConstraintLogEntry {
  + ViolatedConstraintLogEntry() 
  + ViolatedConstraintLogEntry(ViolatedConstraintException) 
  - Long id
  - ViolatedConstraintException violation
  + getId() Long
  + getViolation() ViolatedConstraintException
  + setId(Long) void
  + equals(Object) boolean
  # canEqual(Object) boolean
  + hashCode() int
  + toString() String
}
class ViolatedVincoloAssegnazioneTurnoTurnoException {
  + ViolatedVincoloAssegnazioneTurnoTurnoException(AssegnazioneTurno, AssegnazioneTurno, Utente) 
  + ViolatedVincoloAssegnazioneTurnoTurnoException(AssegnazioneTurno, Utente, int, long) 
  + ViolatedVincoloAssegnazioneTurnoTurnoException(AssegnazioneTurno, Utente, long) 
}
class ViolatedVincoloCategorieUtenteTurnoException {
  + ViolatedVincoloCategorieUtenteTurnoException(AssegnazioneTurno, List~UserCategoryPolicy~, Utente) 
  - printBrokenPolicies(List~UserCategoryPolicy~) String
}
class ViolatedVincoloRuoloNumeroException {
  + ViolatedVincoloRuoloNumeroException(AssegnazioneTurno, RuoloNumero, int) 
  + ViolatedVincoloRuoloNumeroException(AssegnazioneTurno, Utente) 
}

CalendarServiceManager  ..>  ICalendarServiceManager 
ControllerAssegnazioniTurni  ..>  IControllerAssegnazioneTurni 
ControllerCategorie  ..>  IControllerCategorie 
ControllerCategorieUtente  ..>  IControllerCategorieUtente 
ControllerDesiderata  ..>  IControllerDesiderata 
ControllerGiustificaForzatura  ..>  IControllerGiustificaForzatura 
ControllerLogin  ..>  IControllerLogin 
ControllerPassword  ..>  IControllerPassword 
ControllerScheduler  ..>  IControllerScheduler 
ControllerServizi  ..>  IControllerServizi 
ControllerTurni  ..>  IControllerTurni 
ControllerUtente  ..>  IControllerUtente 
ControllerVincolo  ..>  IControllerVincolo 
HolidayController  ..>  IHolidayController 
NotEnoughFeasibleUsersException  -->  UnableToBuildScheduleException 
ScocciaturaAssegnazioneUtente  -->  Scocciatura 
ScocciaturaDesiderata  -->  Scocciatura 
ScocciaturaVacanza  -->  Scocciatura 
VincoloAssegnazioneTurnoTurno  -->  Vincolo 
VincoloCategorieUtenteTurno  -->  Vincolo 
VincoloMaxOrePeriodo  -->  VincoloAssegnazioneTurnoTurno 
VincoloMaxPeriodoConsecutivo  -->  VincoloAssegnazioneTurnoTurno 
VincoloNumeroDiRuoloTurno  -->  Vincolo 
VincoloTipologieTurniContigue  -->  VincoloAssegnazioneTurnoTurno 
VincoloUbiquità  -->  VincoloAssegnazioneTurnoTurno 
ViolatedVincoloAssegnazioneTurnoTurnoException  -->  ViolatedConstraintException 
ViolatedVincoloCategorieUtenteTurnoException  -->  ViolatedConstraintException 
ViolatedVincoloRuoloNumeroException  -->  ViolatedConstraintException 
