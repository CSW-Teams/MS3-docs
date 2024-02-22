# Suggerimenti sull'implementazione della validazione del backend

La seguente guida ha lo scopo di fornire dei suggerimenti su una possibile via per inserire la validazione, nella maniera più organica possibile, all'interno del codice del backend.

La strategia proposta non è implementata pervasivamente all'interno dell'applicazione, ma solo in alcune parti, tra cui ad esempio lo stack software delle Preferences, che verrà riportato qui come esempio per dare definizione pragmatica della strategia proposta.

## Livello DTO, inserimento tag di validazione e `@JsonProperty`

Riportiamo come esempio la classe EditedPreferencesDTOIn :

``` java
@Getter
public class EditedPreferencesDTOIn {

    @NotNull
    private final Long doctorId ;

    @NotNull
    private final List<@Valid PreferenceDTOIn> remainingPreferences ;

    @NotNull
    private final List<@Valid PreferenceDoctorIDDTO> preferencesToDelete ;

    public EditedPreferencesDTOIn(
            @JsonProperty("doctorId") Long doctorId,
            @JsonProperty("remainingPreferences") List<PreferenceDTOIn> remainingPreferences,
            @JsonProperty("preferencesToDelete") List<PreferenceDoctorIDDTO> preferencesToDelete) {

        this.doctorId = doctorId ;
        this.remainingPreferences = remainingPreferences ;
        this.preferencesToDelete = preferencesToDelete ;
    }
}
```

Questa classe è ciò in cui viene deserializzato il _json_ proveniente dal frontend con le informazioni necessarie alla modifica delle preferenze di un dottore.

Gli elementi che in questa classe sono rilevanti al processo di validazione sono:

  - I tag di `javax.validation.constraints` : in questo esempio sono presenti solo tag standard, come `@NotNull`, ma nulla vieta di poter creare i propri tag (vedi guida apposita nella documentazione). Il vantaggio di questo approccio è legato al fatto che il codice per la validazione effettiva sarà contenuto nei validatori, pertanto i codici dei vari controller potranno essere esenti dal dover implementare meccanismi di controllo.

    Notare il tag `@Valid` all'interno dei `<>` : se anche i _DTO_ secondari sono annotati con annotazioni `javax.validation.constraints`, al momento della validazione verranno controllati anch'essi.

  - La presenza di un unico costruttore non di default, con i parametri annotati con un tag `@JsonProperty`: questa costruzione permette di avere vari vantaggi, tra cui :

    - La possibilità di disaccopiare i nomi nel _json_ nel frontend dai nomi dei parametri del _DTO_

    - L'impossibilità di far passare oggetti che abbiano meno proprietà del necessario.


## Livello _REST_, lancio del controller applicativo e gestione eccezioni di validazione

L'esempio qui è dato dalla classe `PreferencesRestEndpoint` :

``` java
@RequestMapping(method = RequestMethod.POST, path = "/edit")
    public ResponseEntity<?> editPreferences(@RequestBody() EditedPreferencesDTOIn dto) {
        if(dto != null) {
            try {
                return new ResponseEntity<>(preferenceController.editPreferences(dto), HttpStatus.ACCEPTED);
            } catch (ValidationException e) {
                return new ResponseEntity<>(HttpStatus.NOT_ACCEPTABLE) ;
            } catch (Exception e) {
                return new ResponseEntity<>(HttpStatus.BAD_REQUEST) ;
            }
        }
        return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
    }
```

In questo caso, ciò che pertiene alla validazione è il blocco _try/catch_ : in caso di errore di validazione si potrà catturare `ValidationException` e riportare un errore apposito.

## Livello Controller Applicativo, `@Validant` e `@Valid`

Per il Controller Applicativo l'esempio è invece:

``` java
    @Validant
    @Transactional
    public List<PreferenceDTOOut> addPreferences(@Valid PreferenceListWithUIDDTO dto) throws DatabaseException {
        Optional<Doctor> doctor = doctorDao.findById(dto.getDoctorId());

        ...
    }
```

Qui ciò che pertiene alla validazione è l'inserimento del tag `@Validant` sul metodo che deve validare i _DTO_ e l'annotazione `@Valid` davanti ai parametri da validare.

## Conclusioni

In conclusione, il processo di validazione segue queste regole:

  1. Annotare tutti i _DTO_ con i vari tag di validazione necessari, utilizzando anche `@Valid` per permettere la validazione anche degli attributi che sono a loro volta dei _DTO_ (o comunque oggetti anch'essi contenenti tag di validazione)

  2. Creare il costruttore con tutti i parametri e assegnare ad ognuno di questi il tag `@JsonProperty` con il nome appropriato

  3. Lanciare, nel Controller _REST_, i metodi del controller applicativo catturando l'eventuale `ValidationException`

  4. Aggiungere il tag `@Validant` al metodo del Controller Applicativo, e il tag `@Valid` a tutti i parametri da validaree il tag `@Valid` a tutti i parametri da validare