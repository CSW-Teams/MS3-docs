# Report Gestione JWT Backend

## 1. Panoramica Tecnologica
Il sistema utilizza la libreria **JJWT (Java JWT)** per la creazione e validazione dei token, integrata con **Spring Security**. Le dipendenze specifiche sono dichiarate nel `pom.xml`: `jjwt-api`, `jjwt-impl` e `jjwt-jackson` (versione 0.12.6).

La gestione dei token è *stateless* (senza sessione server-side), come configurato nel `SecurityConfigurer`, dove la policy di creazione della sessione è impostata su `SessionCreationPolicy.STATELESS`.

## 2. Generazione e Struttura del Token
La logica core è centralizzata nella classe `JwtUtil`.

* **Chiave Segreta**: Attualmente la chiave di firma è hardcodata nel codice (`SECRET_KEY`) e codificata in Base64.
    * *Nota*: Nel codice è presente un commento `TODO` che suggerisce di spostare la chiave nelle variabili d'ambiente per sicurezza.
* **Algoritmo di Firma**: Viene utilizzato l'algoritmo **HS256** (HMAC con SHA-256).
* **Durata (Expiration)**: I token hanno una validità fissata a **1 ora** (3.600.000 ms) dalla creazione.
* **Claims (Contenuto del Payload)**:
  Oltre ai claim standard (`sub` per lo username, `iat` per issued at, `exp` per expiration), vengono aggiunti claim personalizzati:
    * `role`: Lista dei ruoli dell'utente.
    * `current_tenant`: Il tenant associato all'utente.
    * `is_multi_factor_authentication_enabled`: Stato dell'autenticazione a due fattori.

La generazione effettiva avviene nel `LoginRestEndpoint` dopo un'autenticazione avvenuta con successo tramite `authenticationManager`.

## 3. Intercettazione e Validazione delle Richieste
La validazione avviene tramite il filtro personalizzato `JwtRequestFilters`, che estende `OncePerRequestFilter` e viene inserito nella catena di sicurezza prima del filtro standard `UsernamePasswordAuthenticationFilter`.

Il flusso di validazione per ogni richiesta HTTP è il seguente:
1.  **Estrazione**: Il filtro cerca l'header `Authorization` che inizia con `Bearer `.
2.  **Parsing**: Estrae lo username e il tenant dal token.
3.  **Verifica Integrità**:
    * Verifica la firma digitale.
    * Controlla che il token non sia scaduto.
    * Verifica che lo username nel token corrisponda all'utente caricato dal database.
4.  **Verifica Blacklist**: essendo la gestione dei token stateless, vengono verificate le due seguenti condizioni:
    - il token inviato nella richiesta non è presente nella lista dei token invalidati (blacklist)
    - il token non è stato emesso prima che tutti i token dell'utente siano stati invalidati (per i dettagli tecnici, vedere la sezione 4)
5.  **Contesto di Sicurezza**: Se valido, crea un `UsernamePasswordAuthenticationToken` e lo imposta nel `SecurityContextHolder`.
6.  **Multi-tenancy**: Imposta il tenant corrente nel `TenantContext` basandosi sul claim `current_tenant` estratto dal token.

## 4. Invalidazione dei token (Blacklist)
Poiché i JWT sono stateless, non possono essere "distrutti" lato server prima della scadenza. Il sistema implementa quindi un meccanismo di **Blacklisting** su database per gestire il logout.

* **Entità**: Esiste un'entità `BlacklistedToken` mappata sulla tabella `blacklisted_tokens` che memorizza il token e la data di invalidazione.
* **Servizio**: `JwtBlacklistService` gestisce l'inserimento e la verifica dei token nel database.
* **Funzionamento**:
    * Quando un filtro riceve un token, interroga `jwtBlacklistService.isBlacklisted(jwt)`.
    * Se il token è presente nel DB, la richiesta viene respinta con stato 401 e messaggio "Token is invalidated (logged out)", anche se il token è crittograficamente valido e non scaduto.

## 5. Gestione Errori
Il filtro gestisce le eccezioni specifiche legate ai token:
* `ExpiredJwtException`: Logga un warning e restituisce errore 401 "Token expired".
* `JwtException` / `IllegalArgumentException`: Logga un warning e restituisce errore 401 "Invalid token".
  In entrambi i casi, il contesto del tenant viene resettato allo schema di default (`public`) e il contesto di sicurezza viene pulito.