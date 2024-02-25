# L'annotazione `@StartEndDayMonth`

L'annotazione `@StartEndDayMonth` è utile quando si hanno classi nelle quali si è giunti a modellare un periodo temporale ricorrente (ad esempio, dal 4 gennaio al 5 febbraio di ogni anno). Ciò che essa verifica è che il valore degli attributi che rappresentano giorno e mese di inizio e siano precedente al valori degli attributi che rappresentano giorno e mese di fine. Un esempio pratico di utilizzo è il seguente :

```java
    @StartEndDayMonth(startDay = "startDay", startMonth = "startMonth", endDay = "endDay", endMonth = "endMonth")
    public class Dummy {

        private Integer startDay ;
        private Integer startMonth ;

        private Integer endDay ;
        private Integer endMonth ;

        //Constuctors, getters, setters, etc
     }
```

Dove a `startDay`, `startMonth`, `endDay`, `endMonth` vanno passati i nomi degli attributi che rappresentano, rispettivamente, il giorno di inizio, il mese di inizio, il giorno di fine e il mese di fine del periodo ricorrente considerato.

Di seguito viene riportato anche il comportamento del Validator dell'annotazione :

```java
public class StartEndMonthValidator implements ConstraintValidator<StartEndDayMonth, Object> {

    private String startDay ;
    private String startMonth ;
    private String endDay ;
    private String endMonth ;

    @Override
    public void initialize(StartEndDayMonth constraintAnnotation) {
        this.startDay = constraintAnnotation.startDay();
        this.startMonth = constraintAnnotation.startMonth();
        this.endDay = constraintAnnotation.endDay();
        this.endMonth = constraintAnnotation.endMonth();

        ConstraintValidator.super.initialize(constraintAnnotation);
    }

    @Override
    public boolean isValid(Object o, ConstraintValidatorContext constraintValidatorContext) {

        try {
            Integer startDay, startMonth, endDay, endMonth ;

            Field firstField = o.getClass().getDeclaredField(this.startDay);
            firstField.setAccessible(true) ;
            startDay = (Integer) firstField.get(o) ;

            Field secondField = o.getClass().getDeclaredField(this.startMonth);
            secondField.setAccessible(true) ;
            startMonth = (Integer) secondField.get(o) ;

            Field thirdField = o.getClass().getDeclaredField(this.endDay);
            thirdField.setAccessible(true) ;
            endDay = (Integer) thirdField.get(o) ;

            Field fourthField = o.getClass().getDeclaredField(this.endMonth);
            fourthField.setAccessible(true) ;
            endMonth = (Integer) fourthField.get(o) ;

            if(endMonth < startMonth) return false ;
            if(endMonth.equals(startMonth)) {
                return endDay >= startDay;
            }

            return true ;
        }catch (NoSuchFieldException | IllegalAccessException | ClassCastException e) {
            return false ;
        }
    }
}
```
