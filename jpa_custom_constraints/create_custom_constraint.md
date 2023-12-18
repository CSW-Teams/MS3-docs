# Creare Constraint custom per JPA

I costraint custom per validare entity JPA si possono implementare nel seguente modo:

- Creare un set di annotazioni che meglio si ritenga permetta di semplificare la specifica del constraint che si vuole introdurre; di queste annotazioni, quelle da cui si vuole lanciare un validatore dovranno essere annotate nella maniera seguente :

   ```java
        @Target(ElementType.TYPE)
        @Retention(RetentionPolicy.RUNTIME)
        @Constraint(validatedBy = BeforeInTimeValidator.class)
        public @interface MyConstraintAnnotation {

            //Valori obbligatori dell'annotazione

            String message() default "{org.cswteams.ms3.jpa_constraints.temporal_consistency.BeforeInTime" + "message}";

            Class<?>[] groups() default { };

            Class<? extends Payload>[] payload() default { };

            //Eventuali valori extra che afferiscono ai dettagli dell'implementazione della specifica annotazione

            String valore1() ;

            ...
        }
   ```

- Successivamente bisogna implementare una classe che validi l'annotazione creata :

   ```java

        public class MyConstraintAnnotationValidator implements ConstraintValidator<MyConstraintAnnotation, Object> {
            @Override
            public void initialize(MyConstraintAnnotation constraintAnnotation) {
                ConstraintValidator.super.initialize(constraintAnnotation);
            }

            @Override
            public boolean isValid(Object object, ConstraintValidatorContext constraintValidatorContext) {
                //Inserire propria logica di validazione
            }
        }
   ```

In questo modo, quando un oggetto annotato con le proprie annotazioni verrà passato come argomento ad un `Validator` della *Jakarta Bean Validation*, il metodo `isValid` dei Validator ad esse associato verrà lanciato e verificherà la correttezza della classe.

Per evitare di dover ottenere ogni volta manualmente un `Validator`, si veda la sezione della guida su *Spring AOP*.

Riferimenti: [*Jakarta Bean Validation specification*](https://jakarta.ee/specifications/bean-validation/3.0/jakarta-bean-validation-spec-3.0.html#constraintsdefinitionimplementation).

Esempi : vedere guida sull'utilizzo di `@BeforeInTime`.
