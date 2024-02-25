# L'annotazione `@MustBeDifferent`

L'annotazione `@MustBeDifferent` è utile quando si hanno classi nelle quali si hanno parametri che devono essere differenti tra loro.

```java
    @MustBeDifferent(first="old", second="new")
    @MustBeDifferent(first="a", second="b")
    public class Dummy {

        private String old ;
        private String new ;

        private String a ;
        private String b ;

        //Constuctors, getters, setters, etc
     }
```

Dove a `first` e `second` vanno passati i nomi degli attributi che devono avere valori differenti.

Si nota che l'annotazione è ripetibile.

Di seguito viene riportato anche il comportamento del Validator dell'annotazione :

```java
public class MustBeDifferentValidator implements ConstraintValidator<MustBeDifferent, Object> {

    private String first ;
    private String second ;

    @Override
    public void initialize(MustBeDifferent constraintAnnotation) {
        first = constraintAnnotation.first() ;
        second = constraintAnnotation.second() ;
        ConstraintValidator.super.initialize(constraintAnnotation);
    }

    @Override
    public boolean isValid(Object o, ConstraintValidatorContext constraintValidatorContext) {

        try {
            Object firstObj, secondObj ;

            Field dayField = o.getClass().getDeclaredField(first) ;
            dayField.setAccessible(true);
            firstObj = dayField.get(o) ;

            Field monthField = o.getClass().getDeclaredField(second) ;
            monthField.setAccessible(true);
            secondObj = monthField.get(o) ;

            return firstObj.equals(secondObj) ;
        } catch (NoSuchFieldException | IllegalAccessException e) {
            return false ;
        }
    }
}
```
