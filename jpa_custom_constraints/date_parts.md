# L'annotazione `@DateParts`

L'annotazione `@DateParts` può essere utilizzata nel momento in cui una qualsiasi data viene passata come tripla _(giorno, mese, anno)_. Il suo scopo è quello di verificare che la tripla sia una data corretta (ovvero, che non sia ad esempio _(31,2,2000)_ ). Riportiamo di seguito un esempio di applicazione dell'annotazione:

```java
    @DateParts(day="startDay", month="startMonth",year="startYear")
    @DateParts(day="endDay", month="endMonth",year="endYear")
    public class Dummy {

        private Integer startDay ;
        private Integer startMonth ;
        private Integer startYear ;

        private Integer endDay ;
        private Integer endMonth ;
        private Integer endYear ;

        //Constuctors, getters, setters, etc
     }
```

Dove a `day` va passato il nome dell'attributo che rappresenta il giorno, a `month` il nome dell'attributo che rappresenta il mese, a `year` il nome dell'attributo che rappresenta l'anno.

Si nota che l'annotazione creata è ripetibile, ovvero in caso più date siano consegnate in tale formato, è possibile controllarle tutte.

Di seguito viene riportato anche il comportamento del Validator dell'annotazione :

``` java
public class DatePartsValidator implements ConstraintValidator<DateParts, Object> {

    private String dayFieldName ;
    private String monthFieldName ;

    private String yearFieldName ;
    @Override
    public void initialize(DateParts constraintAnnotation) {
        dayFieldName = constraintAnnotation.day() ;
        monthFieldName = constraintAnnotation.month() ;
        yearFieldName = constraintAnnotation.year() ;
        ConstraintValidator.super.initialize(constraintAnnotation);
    }

    @Override
    public boolean isValid(Object o, ConstraintValidatorContext constraintValidatorContext) {

        try {
            Integer day, month, year ;

            Field dayField = o.getClass().getDeclaredField(dayFieldName);
            dayField.setAccessible(true);
            day = (Integer) dayField.get(o) ;

            Field monthField = o.getClass().getDeclaredField(monthFieldName);
            monthField.setAccessible(true);
            month = (Integer) monthField.get(o) ;

            Field yearField = o.getClass().getDeclaredField(yearFieldName);
            yearField.setAccessible(true);
            year = (Integer) yearField.get(o) ;

            LocalDate.of(year, month, day) ;

            return true ;

        } catch (NoSuchFieldException | IllegalAccessException | ClassCastException | DateTimeException | NullPointerException e) {
            return false ;
        }
    }
}

```
