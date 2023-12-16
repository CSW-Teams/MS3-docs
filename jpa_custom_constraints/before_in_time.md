# L'annotazione `@BeforeInTime`

L'annotazione `@BeforeInTime` è utile quando si hanno classi nelle quali si è giunti a modellare un momento di inizio e di fine. Ciò che essa verifica è che il valore dell'attributo che rappresenta l'inizio sia precedente al valore dell'attributo che rappresenta la fine. Un esempio pratico di utilizzo è il seguente :

```java
    @BeforeInTime(firstParam="start", secondParam="end", comparator=LocalDateComparator.class)
    public class Dummy {

        private LocalDate start ;
        private LocalDate end ;

        //Constuctors, getters, setters, etc
     }
```

Dove a `firstParam` va passato il nome dell'attributo che rappresenta l'inizio, a `secondParam` il nome dell'attributo che rappresenta la fine, a comparator un oggetto `Class` che implementi l'interfaccia `Comparator` di seguito descritta :

```java
    public interface Comparator {

        boolean compare(Object first, Object second) ;
    }
```

Che deve ritornare `true` se `first` è precedente o coincidente a `second`, `false` altrimenti.

Di seguito viene riportato anche il comportamento del Validator dell'annotazione :

```java
    public class BeforeInTimeValidator implements ConstraintValidator<BeforeInTime, Object> {
        @Override
        public void initialize(BeforeInTime constraintAnnotation) {
            ConstraintValidator.super.initialize(constraintAnnotation);
        }

        @Override
        public boolean isValid(Object object, ConstraintValidatorContext constraintValidatorContext) {

            try {
                BeforeInTime annotation = object.getClass().getAnnotation(BeforeInTime.class) ;
                String firstName = annotation.firstParam();
                String secondName = annotation.secondParam();

                Comparator comparator = annotation.comparator().getDeclaredConstructor().newInstance() ;
                Object object1, object2 ;

                Field firstField = object.getClass().getDeclaredField(firstName);
                firstField.setAccessible(true) ;
                object1 = firstField.get(object) ;

                Field secondField = object.getClass().getDeclaredField(secondName);
                secondField.setAccessible(true) ;
                object2 = secondField.get(object) ;

                return comparator.compare(object1, object2);

            } catch (NoSuchFieldException | IllegalAccessException | NoSuchMethodException | InvocationTargetException |
                     InstantiationException e) {
                return false ;
            }
        }
    }
```
