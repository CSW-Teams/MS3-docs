# L'annotazione `@DayAndMonth`

L'annotazione `@DayAndMonth` può essere utilizzata nel momento in cui è necessario passare una coppia _(giorno, mese)_. Il suo scopo è quello di verificare che la coppia sia corretta (ovvero, che non sia ad esempio _(31,2)_). Riportiamo di seguito un esempio di applicazione dell'annotazione

```java
    @DayAndMonth(day="startDay", month="startMonth")
    @DayAndMonth(day="endDay", month="endMonth")
    public class Dummy {

        private Integer startDay ;
        private Integer startMonth ;

        private Integer endDay ;
        private Integer endMonth ;

        //Constuctors, getters, setters, etc
     }
```

Dove a `day` va passato il nome dell'attributo che rappresenta il giorno, a `month` il nome dell'attributo che rappresenta il mese.

Si nota che l'annotazione creata è ripetibile, ovvero in caso più date siano consegnate in tale formato, è possibile controllarle tutte.

Di seguito viene riportato anche il comportamento del Validator dell'annotazione :

``` java
public class DayAndMonthValidator implements ConstraintValidator<DayAndMonth, Object> {

    private String day ;

    private String month ;

    @Override
    public void initialize(DayAndMonth constraintAnnotation) {
        day = constraintAnnotation.day() ;
        month = constraintAnnotation.month();
        ConstraintValidator.super.initialize(constraintAnnotation);
    }

    @Override
    public boolean isValid(Object o, ConstraintValidatorContext constraintValidatorContext) {

        try {
            Object dayObject, monthObject ;

            Field dayField = o.getClass().getDeclaredField(day) ;
            dayField.setAccessible(true);
            dayObject = dayField.get(o) ;

            Field monthField = o.getClass().getDeclaredField(month) ;
            monthField.setAccessible(true);
            monthObject = monthField.get(o) ;

            Integer day = (Integer) dayObject ;
            Integer month = (Integer) monthObject ;

            switch (month) {
                case 1 :
                case 3 :
                case 5 :
                case 7 :
                case 8 :
                case 10 :
                case 12 :
                    if(!(day > 0 && day <= 31)) return false ;
                    break;
                case 4 :
                case 6 :
                case 9 :
                case 11 :
                    if(!(day > 0 && day <= 30)) return false ;
                    break;
                case 2 :
                    if(!(day > 0 && day <= 29)) return false ;
                    break;
                default :
                    return false ;
            }

            return true ;

        } catch (NoSuchFieldException | IllegalAccessException | ClassCastException e) {
            return false ;
        }
    }
}
```
