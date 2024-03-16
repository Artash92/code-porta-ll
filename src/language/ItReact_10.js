import React from 'react';

function ItReact_10() {
  return (
    <div>
      <div className='ad-container'>  
          {/*  реклама  */}
        </div>

<h2>Errori HTTP</h2>
{/* Risposte informative (100 – 199) */}

<h3>Risposte informative (100 – 199)</h3>
<p>
  <strong>100 Continue:</strong> Il server ha ricevuto gli header della richiesta e il client dovrebbe procedere a inviare il corpo della richiesta (nel caso di una richiesta per cui è necessario inviare un corpo; ad esempio, una richiesta POST).
</p>
<p>
  <strong>101 Switching Protocols:</strong> Il richiedente ha chiesto al server di passare a protocolli diversi e il server ha accettato di farlo.
</p>
<p>
  <strong>102 Processing:</strong> Il server ha ricevuto ed è in fase di elaborazione della richiesta, ma non è ancora disponibile alcuna risposta.
</p>
<p>
  <strong>103 Early Hints:</strong> Indica al client che è probabile che il server invii una risposta finale con i campi dell'header inclusi nella risposta informativa.
</p>
{/* Risposte di successo (200 – 299) */}

<h3>Risposte di successo (200 – 299)</h3>
<p>
  <strong>200 OK:</strong> La richiesta è stata completata con successo. Le informazioni restituite con la risposta dipendono dal metodo utilizzato nella richiesta.
</p>
<p>
  <strong>201 Created:</strong> La richiesta è stata soddisfatta, risultando nella creazione di una nuova risorsa.
</p>
<p>
  <strong>202 Accepted:</strong> La richiesta è stata accettata per l'elaborazione, ma l'elaborazione non è stata completata.
</p>
<p>
  <strong>203 Non-Authoritative Information:</strong> Il server ha elaborato con successo la richiesta, ma sta restituendo informazioni che potrebbero provenire da un'altra fonte.
</p>
<p>
  <strong>204 No Content:</strong> Il server ha elaborato con successo la richiesta e non sta restituendo alcun contenuto.
</p>
<p>
  <strong>205 Reset Content:</strong> Il server ha elaborato con successo la richiesta, ma non sta restituendo alcun contenuto. Il client dovrebbe reimpostare la visualizzazione del documento.
</p>
<p>
  <strong>206 Partial Content:</strong> Il server sta consegnando solo parte della risorsa a causa di un'intestazione di intervallo inviata dal client.
</p>
<p>
  <strong>207 Multi-Status:</strong> Una risposta Multi-Status trasmette informazioni su risorse multiple in situazioni in cui potrebbero essere appropriati più codici di stato.
</p>
{/* Messaggi di reindirizzamento (300 – 399) */}

<h3>Messaggi di reindirizzamento (300 – 399)</h3>
<p>
  <strong>300 Multiple Choices:</strong> La risorsa richiesta ha molte scelte, ciascuna con attributi e risposte diverse.
</p>
<p>
  <strong>301 Moved Permanently:</strong> La risorsa richiesta è stata spostata definitivamente su un nuovo URL e qualsiasi riferimento futuro a questa risorsa dovrebbe utilizzare uno degli URL restituiti.
</p>
<p>
  <strong>302 Found:</strong> La risorsa richiesta risiede temporaneamente in un diverso URI.
</p>
<p>
  <strong>303 See Other:</strong> La risposta alla richiesta può essere trovata in un diverso URI e dovrebbe essere recuperata utilizzando un metodo GET su tale risorsa.
</p>
<p>
  <strong>304 Not Modified:</strong> Indica che la risorsa non è stata modificata dalla versione specificata dagli header della richiesta If-Modified-Since o If-None-Match. In tal caso, non è necessario ritrasmettere la risorsa poiché il client ha ancora una copia precedentemente scaricata.
</p>
<p>
  <strong>305 Use Proxy:</strong> La risorsa richiesta deve essere accessa attraverso il proxy indicato dal campo Location.
</p>
<p>
  <strong>307 Temporary Redirect:</strong> La risorsa richiesta risiede temporaneamente in un diverso URI.
</p>
<p>
  <strong>308 Permanent Redirect:</strong> La risorsa richiesta è stata spostata definitivamente su un altro URI e il client dovrebbe aggiornare tutti i riferimenti a questo nuovo URI.
</p>
{/* Risposte di errore del client (400 – 499) */}

<h3>Risposte di errore del client (400 – 499)</h3>
<p>
  <strong>400 Bad Request:</strong> Il server non può elaborare la richiesta a causa di un errore del client (ad esempio, sintassi errata, dimensione troppo grande, formattazione del messaggio di richiesta non valida o instradamento della richiesta ingannevole).
</p>
<p>
  <strong>401 Unauthorized:</strong> Simile al 403 Forbidden, ma specificamente per l'uso quando è richiesta l'autenticazione ed è fallita o non è ancora stata fornita.
</p>
<p>
  <strong>402 Payment Required:</strong> Riservato per un uso futuro.
</p>
<p>
  <strong>403 Forbidden:</strong> Il client non ha il permesso di accedere alla risorsa richiesta.
</p>
<p>
  <strong>404 Not Found:</strong> Il server non può trovare la risorsa richiesta.
</p>
<p>
  <strong>405 Method Not Allowed:</strong> Il metodo ricevuto nella riga di richiesta è noto dal server di origine ma non supportato dalla risorsa di destinazione.
</p>
<p>
  <strong>406 Not Acceptable:</strong> La risorsa di destinazione non ha una rappresentazione attuale che sarebbe accettabile per l'agente utente, secondo i campi di negoziazione proattiva dell'intestazione ricevuti nella richiesta.
</p>
<p>
  <strong>407 Proxy Authentication Required:</strong> Il client deve prima autenticarsi con il proxy.
</p>
<p>
  <strong>408 Request Timeout:</strong> Il client non ha prodotto una richiesta entro il tempo che il server era pronto ad attendere.
</p>
<p>
  <strong>409 Conflict:</strong> La richiesta non può essere completata a causa di un conflitto con lo stato corrente della risorsa di destinazione.
</p>
<p>
  <strong>410 Gone:</strong> Indica che la risorsa di destinazione non è più disponibile sul server e non è noto alcun indirizzo di inoltro.
</p>
<p>
  <strong>411 Length Required:</strong> Il server rifiuta di accettare la richiesta senza una lunghezza di contenuto definita.
</p>
<p>
  <strong>412 Precondition Failed:</strong> Una o più condizioni date nei campi di intestazione della richiesta valutate come false durante il test sul server.
</p>
<p>
  <strong>413 Payload Too Large:</strong> Il server rifiuta di elaborare una richiesta perché il carico utile della richiesta è più grande di quanto il server sia disposto o in grado di elaborare.
</p>
<p>
  <strong>414 URI Too Long:</strong> Il server rifiuta di servire la richiesta perché il destinatario della richiesta è più lungo di quanto il server sia disposto a interpretare.
</p>
<p>
  <strong>415 Unsupported Media Type:</strong> Il server di origine rifiuta di servire la richiesta perché il formato del payload è in un formato non supportato.
</p>
<p>
  <strong>416 Range Not Satisfiable:</strong> Il client ha richiesto una porzione del file (servizio di byte), ma il server non può fornire quella porzione.
</p>
<p>
  <strong>417 Expectation Failed:</strong> Il server non può soddisfare i requisiti del campo di intestazione della richiesta Expect.
</p>
<p>
  <strong>418 I'm a teapot:</strong> Qualsiasi tentativo di preparare il caffè con una teiera dovrebbe risultare nel codice di errore "418 I'm a teapot".
</p>
<p>
  <strong>420 Enhance Your Calm:</strong> Restituito dalla ricerca e dalle tendenze dell'API di Twitter quando il client è soggetto a limiti di velocità.
</p>
<p>
  <strong>421 Misdirected Request:</strong> La richiesta è stata indirizzata a un server che non è in grado di produrre una risposta.
</p>
<p>
  <strong>422 Unprocessable Entity:</strong> La richiesta era ben formata ma non poteva essere seguita a causa di errori semantici.
</p>
<p>
  <strong>423 Locked:</strong> La risorsa a cui si accede è bloccata.
</p>
<p>
  <strong>425 Too Early:</strong> Indica che il server non è disposto a rischiare di elaborare una richiesta che potrebbe essere ripetuta.
</p>
<p>
  <strong>426 Upgrade Required:</strong> Il server rifiuta di eseguire la richiesta utilizzando il protocollo corrente ma potrebbe essere disposto a farlo dopo che il client ha eseguito l'aggiornamento a un protocollo diverso.
</p>
<p>
  <strong>428 Precondition Required:</strong> Il server di origine richiede che la richiesta sia condizionale.
</p>
<p>
  <strong>429 Too Many Requests:</strong> L'utente ha inviato troppe richieste in un determinato intervallo di tempo.
</p>
{/* Risposte di errore del server (500 – 599) */}

<h3>Risposte di errore del server (500 – 599)</h3>
<p>
  <strong>500 Internal Server Error:</strong> Un messaggio di errore generico, fornito quando viene incontrata una condizione imprevista e non esiste un messaggio più specifico adatto. Si tratta di un errore molto generale che può essere causato da una vasta gamma di problemi sul lato del server.
</p>
<p>
  <strong>501 Not Implemented:</strong> Il server non riconosce il metodo di richiesta o non ha la capacità di soddisfare la richiesta.
</p>
<p>
  <strong>502 Bad Gateway:</strong> Il server, mentre agisce come gateway o proxy, ha ricevuto una risposta non valida dal server upstream a cui ha tentato di accedere per soddisfare la richiesta.
</p>
<p>
  <strong>503 Service Unavailable:</strong> Il server non è attualmente in grado di gestire la richiesta a causa di un sovraccarico temporaneo o della manutenzione del server.
</p>
<p>
  <strong>504 Gateway Timeout:</strong> Il server, mentre agisce come gateway o proxy, non ha ricevuto una risposta tempestiva dal server upstream specificato dall'URI o da qualche altro server ausiliario a cui aveva bisogno di accedere per completare la richiesta.
</p>
<p>
  <strong>505 HTTP Version Not Supported:</strong> Il server non supporta, o rifiuta di supportare, la versione principale di HTTP utilizzata nel messaggio di richiesta.
</p>
<p>
  <strong>506 Variant Also Negotiates:</strong> Il server ha un errore di configurazione interno: la risorsa variante scelta è configurata per impegnarsi nella negoziazione trasparente del contenuto stessa e quindi non è un punto finale adeguato nel processo di negoziazione.
</p>
<p>
  <strong>507 Insufficient Storage:</strong> Il server non è in grado di memorizzare la rappresentazione necessaria per completare la richiesta.
</p>
<p>
  <strong>508 Loop Detected:</strong> Il server ha rilevato un ciclo infinito durante l'elaborazione della richiesta.
</p>
<p>
  <strong>510 Not Extended:</strong> Sono necessarie ulteriori estensioni per la richiesta affinché il server possa soddisfarla.
</p>
<p>
  <strong>511 Network Authentication Required:</strong> Il client deve autenticarsi per ottenere l'accesso di rete.
</p>
    
    <b><p>* Testo scritto con l'aiuto di un traduttore. Se trovi un errore, per favore, faccelo sapere *</p></b>
    
    <div className='ads-container'>  
      {/*  реклама  */}
    </div>
     </div>
  )
}

export default ItReact_10;