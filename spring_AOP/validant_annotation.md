# Annotazione `@Validant`

L'annotazione `@Validant` è nata con lo scopo di facilitare a livello di codice l'inserimento di validazione di parametri di metodi annotati con `@Valid` senza essere all'interno di un `@RestController`.

L'annotazione si usa semplicemente aggiungendola ad un metodo (può essere applicata _solamente_ a questi). Se un qualsiasi parametro del metodo annotato è annotato con `@Valid`, verrà lanciato dall' _Aspect_ ad essa associato un `@Before` _Advice_ che passerà l'oggetto tramite un JPA `Validator`. Se l'oggetto passato come parametro non sarà valido, verrà lanciata una `ValidaitonConstraintException`.

Esempio :

```java
    package org.cswteams.ms3;

    import org.cswteams.ms3.entity.Holiday;
    import org.cswteams.ms3.jpa_constraints.validant.Validant;
    import org.springframework.stereotype.Component;
    import javax.validation.Valid;

    @Component
    public class ValidantTestClass {
        @Validant
        public String validMethod(@Valid Holiday holiday) {
            return holiday.getName().substring(1) ;
        }
    }
```
