# Usare SpringAOP per definire azioni da eseguire prima e/o dopo metodi particolari

## Preambolo

_SpringAOP_ è l'integrazione dell'_Aspect Oriented Programming_ di Spring. Questa può essere utilizzata sia con i formati xml nativi che direttamente su codice Java utilizzando la stessa sintassi di _@AspectJ_ della Eclipse Foundation.

Per impostare _SpringAOP_ bisogna aggiungere determinati import sul `pom.xml` e creare determinate classi di configurazione, vedasi [qui](https://docs.spring.io/spring-framework/docs/3.2.x/spring-framework-reference/html/aop.html#aop-aspectj-support) e [qui](https://www.baeldung.com/spring-aop#maven-dependencies).

## Come definire gli Aspect e pertanto eseguire codice prima e dopo un detemrinato metodo

In prima fase sono necessari due concetti fondamentali:

 - _Pointcut_ : Stirnga che serve ad individuare punti nel sorgente nei quali lanciare gli _Aspect_ :

   In _@AspectJ_ viene inserito in un metodo annotato con `@Pointcut("expression")`, la sua sintassi permette di cercare punti di attivazione stile regexp all'interno di classi in maniera statica, o intercettare chiamate di metodi dirette o indirette; la sintassi viene spiegata [qui](https://docs.spring.io/spring-framework/docs/3.2.x/spring-framework-reference/html/aop.html#aop-pointcuts-examples) e [qui](https://blog.espenberntsen.net/2010/03/20/aspectj-cheat-sheet/).

   _SpringAOP_ definisce il pointcut _@annotation(annotationName)_ che individua come punti di attivazione metodi annotati con l'annotazione _annotationName_.

 - _Advice_ : Indica il momento in cui bisogna eseguire codice prima del _Pointcut_ :

   In _@AspectJ_ si definiscono annotando metodi contenenti il contenuto con, ad esempio `@Before("metodoAnnotatoConPointcutPrecedentementeDefinito &&/|| espressionePointcut")`, definendo come primo parametro una classe `JoinPoint` (o `ProceedingJoinPoint` se si usa _Advice_ `@Around`) si possono ottenere i parametri attuali di un metodo e identificare il metodo stesso tramite Reflection.

Si illustrano ora gli step necessari per integrare un _Aspect_ in Spring :

 1. Si crea la classe che conterrà _Pointcut_ ed _Advice_, questa sarà annotata con annotazione `@Aspect`.

 2. Si inseriscono come metodi nella classe vari metodi _Pointcut_ ed _Advice_ con le proprie annotazioni.

 3. Si registra l'_Aspect_ come _Bean_ creando una classe di configurazione annotata con `@Configuration` che contenga al suo interno un metodo annotato con `@Bean` che ritorni **esplicitamente** (deve fare _return new_) la classe Aspect appena definita.

 4. Questo non è uno step necessario, ma molto probabilmente sarà utile in molti casi: definire annotazione da processare inserendola come _Pointcut_ (tramite espressione _@annotation_, vedi sopra.

**Nota, affinché tutto il meccanismo funzioni organicamente con Spring i metodi da intercettare vanno invocati su istanze ottenute tramite _Autowiring_!**

## Riferimenti

- [Utilizzo di _@AspectJ_](https://docs.spring.io/spring-framework/docs/3.2.x/spring-framework-reference/html/aop.html#aop-ataspectj)
- [_Pointcut_ syntax](https://blog.espenberntsen.net/2010/03/20/aspectj-cheat-sheet/)
