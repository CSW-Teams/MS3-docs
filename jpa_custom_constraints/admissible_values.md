# L'annotazione `@AdmissibleValues`

L'annotazione `@AdmissibleValues` può essere utilizzata nel momento in cui un parametro di una classe può assumere solo un sottoinsieme di valori, ma non si vuole che questo sia un'`enum`. Un esempio pratico è un attributo di un _DTO_ che corrisponde, nell'entità ad esso associata, ad un attributo di tipo `enum`. Riportiamo di seguito un esempio di applicazione dell'annotazione:

```java
    public class Dummy {

        @AdmissibleValues(values = {"A", "B", "C"})
        private String kind ;

        //Constuctors, getters, setters, etc
     }
```

Dove a `values` va passato un array con tutti i valori che quel campo può assumere.

Si nota che l'annotazione creata è assegnabile solo a livello di attributo.

Oltretutto, l'utilizzo di questa annotazione è anche utile per creare decoupling tra i nomi dei valori dell'annotazione nel frontend e nel backend.

Di seguito viene riportato anche il comportamento del Validator dell'annotazione :

``` java
public class AdmissibleValuesValidator implements ConstraintValidator<AdmissibleValues, String> {
    
    private List<String> admissibleValues ;
    
    @Override
    public void initialize(AdmissibleValues constraintAnnotation) {
        this.admissibleValues = List.of(constraintAnnotation.values()) ;
        ConstraintValidator.super.initialize(constraintAnnotation);
    }

    @Override
    public boolean isValid(String o, ConstraintValidatorContext constraintValidatorContext) {
        if(o == null) return false ;
        return admissibleValues.contains(o);
    }
}

```
