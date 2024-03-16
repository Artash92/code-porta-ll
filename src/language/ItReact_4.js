import React from 'react';

function ItReact_4() {
  return (
    <div>
      <div className='ad-container'>  
          {/*  реклама  */}
        </div>
        
      <h1>Recuperare Dati In React</h1>

<p>1. Recupero dati utilizzando l'API fetch:</p>

<code> 
  <p><span className='blueviole'>fetch</span>(<span className='blue1'>'https://api.example.com/data'</span>)</p>

  <p>.<span className='blue'>then</span>(response {'=>'} response.<span className='blue'>json</span>()) </p>

  <p>.<span className='blue'>then</span>(data {'=>'} console.<span className='blue'>log</span>(data))</p>

  <p>.<span className='blue'>catch</span>(error {'=>'} console.<span className='blue'>error</span>(error)) </p>
</code>

<p>In questo esempio, stiamo facendo una richiesta a un server utilizzando l'API <b>fetch</b>. L'oggetto <b>response</b> viene convertito nel formato JSON utilizzando il metodo <b>json()</b>, e i dati risultanti vengono registrati sulla console. Se si verifica un errore, viene catturato e registrato sulla console.</p>

<p>2. Visualizzare i dati recuperati nello stato del componente:</p>

<code>
  <p><span className='red'>import</span> {'React, { useState, useEffect } '} <span className='red'>from</span> <span className='blue1'>'react'</span>;   </p>

  <p><span className='red'>function</span> <span className='blueviole'>MyComponent</span>() {'{'}</p>

  <p><span className='red'>const</span> [data, setData] = <span className='blueviole'>useState</span>([]);</p>

  <p><span className='blueviole'>useEffect</span>{'(() => {'}</p>

  <p><span className='blueviole'>fetch</span>(<span className='blue1'>'https://api.example.com/data'</span>)</p>

  <p>.<span className='blue'>then</span>(response {'=>'} response.<span className='blue'>json</span>())</p>

  <p>.<span className='blue'>then</span>(data {'=>'} <span className='blueviole'>setData</span>(data))</p>

  <p>.<span className='blue'>catch</span>(error {'=>'} console.<span className='blue'>error</span>(error)); </p>

  <p>{'}, []);'}</p>

  <p><span className='red'>return</span> {'('}</p>

  <p>{'<'}<span className='green'>div</span>{'>'}</p>

  <p>{'{'}data.<span className='blue'>map</span>{'(item => ('}</p>

  <p>{'<'}<span className='green'>p</span> key={'{item.'}<span className='blue'>id</span>{'}>'}{'{item.'}<span className='blue'>name</span>{'}</'}<span className='green'>p</span>{'>'}</p>

  <p>{'))} '}</p>

  <p>{'</'}<span className='green'>div</span>{'>'}</p>

  <p>&nbsp;{');'}</p>

  <p>{'}'}</p>
</code>

<p>In questo esempio, stiamo utilizzando il hook <b>useState</b> per definire una variabile di stato chiamata <b>data</b>. Stiamo inoltre utilizzando il hook <b>useEffect</b> per recuperare i dati dal server quando il componente viene montato e aggiornare la variabile di stato <b>data</b> con i dati recuperati. Infine, stiamo utilizzando il metodo <b>map</b> per iterare attraverso l'array dei dati e visualizzare ogni elemento come un elemento di paragrafo.</p>

<h1>Axios</h1>

<p>Sia Fetch che Axios sono librerie JavaScript utilizzate per effettuare richieste HTTP dal browser o dall'ambiente Node.js. Tuttavia, ci sono alcune differenze tra le due.</p>

<p>Fetch è un'API del browser integrata che utilizza promesse per gestire richieste e risposte. Ha una sintassi più semplice ed è più facile da usare per richieste semplici, ma manca di alcune funzionalità avanzate come l'annullamento delle richieste, gli eventi di avanzamento e i tentativi di richiesta automatica.</p>

<p>Axios è una popolare libreria di terze parti che fornisce un'API più ricca di funzionalità e potente per effettuare richieste HTTP. Supporta l'annullamento delle richieste, gli eventi di avanzamento e i tentativi di ripetizione automatica già integrati, e ha anche un supporto integrato per la gestione dei dati di risposta come JSON, XML e FormData.</p>

<p>In termini di perché è meglio usare Axios rispetto a Fetch, dipende davvero dalle esigenze specifiche del tuo progetto. Se stai costruendo un'applicazione web semplice che ha solo bisogno di effettuare richieste di base, allora Fetch potrebbe essere sufficiente. Tuttavia, se hai bisogno di funzionalità più avanzate e di un'API più potente per gestire richieste e risposte, allora Axios è una scelta migliore.</p>

<p>Alcuni vantaggi nell'utilizzare Axios rispetto a Fetch includono:</p>

<p>1. Migliore gestione degli errori: Axios ha un sistema più robusto per gestire gli errori e fornisce messaggi di errore più utili rispetto a Fetch.</p>

<p>2. Interceptor: Axios fornisce interceptor che consentono di modificare le richieste o le risposte prima che vengano inviate o ricevute.</p>

<p>3. Trasformazione automatica dei dati di richiesta e risposta: Axios può trasformare automaticamente i dati di richiesta e risposta in formati diversi, come JSON, il che può essere molto utile quando si lavora con API.</p>

<p>4. Annullamento semplice delle richieste: Axios fornisce un modo semplice per annullare le richieste, il che può essere utile quando si gestiscono reti lente o non affidabili.</p>

<p>In sintesi, sia Fetch che Axios sono strumenti utili per effettuare richieste HTTP in JavaScript, ma Axios fornisce funzionalità più avanzate e un'API più potente che può essere molto utile per la costruzione di applicazioni più complesse.</p>

<p><b>Axios</b> è una libreria per effettuare richieste HTTP dal browser o da Node.js. Facilita l'invio di richieste utilizzando promesse e la gestione delle risposte.</p>

<p>Per utilizzare Axios in React.js, è necessario installarlo prima utilizzando il comando:</p>

<b>npm install axios</b>

<p>Dopo di che, è possibile utilizzare Axios nei componenti React. Ad esempio, il seguente codice invia una richiesta GET a un server remoto e visualizza la risposta sulla pagina:</p>

 <code>
    <p><span className='red'>import</span> {' React, { useState, useEffect }'} <span className='red'>from</span> <span className='blue1'>"react"</span>;</p>  

    <p><span className='red'>import</span> axios <span className='red'>from</span> <span className='blue1'>"axios"</span>;</p>

    <p><span className='red'>function</span> <span className='blueviole'>App</span>() {'{'}</p>  

    <p><span className='red'>const</span> {'[data, setData]'} = <span className='blueviole'>useState</span>("");</p>

    <p><span className='blueviole'>useEffect</span>{'(() => { '}</p>

    <p>axios.<span className='blue'>get</span>(<span className='blue1'>"https://jsonplaceholder.typicode.com/todos/1"</span>).<span className='blue'>then</span>{'((response) => {'}</p>

    <p><span className='blueviole'>setData</span>(response.<span className='blue'>data</span>);</p>

    <p>{'});'}</p>

    <p>{' }, []);'}</p>

    <p>return {'<'}<span className='green'>div</span>{'>'}{'{'}data.<span className='blue'>title</span>{'}'}{'</'}<span className='green'>div</span>{'>;'}</p>

    <p>{'}'}</p>

    <p><span className='red'>export default</span> App;</p>
  </code>

  <p>In questo esempio, il hook <b>useEffect</b> viene utilizzato per inviare una richiesta GET al server e aggiornare la variabile di stato <b>data</b> con la risposta. La variabile data viene quindi visualizzata sulla pagina utilizzando JSX.</p>

<p>Axios supporta anche altri metodi HTTP, come POST, PUT e DELETE, che possono essere utilizzati per inviare dati al server e modificare risorse. L'oggetto axios fornisce inoltre molte opzioni di configurazione, come impostare intestazioni, timeout e intercettori di richiesta, che consentono di personalizzare il comportamento delle richieste.</p>

<p>In generale, Axios è una libreria potente e flessibile per lavorare con richieste HTTP in React.js, e può semplificare molte attività comuni, come recuperare dati da un'API remota.</p>

<p>Il protocollo HTTP supporta diversi metodi di richiesta che consentono di eseguire varie operazioni con i dati. Ecco una breve descrizione dei quattro principali metodi di richiesta insieme ad esempi di utilizzo in React:</p>

<p>1. <b>GET</b>: un metodo di richiesta utilizzato per recuperare dati dal server. In React, puoi utilizzare il metodo <b>axios.get</b></p>

<code>
  <p>axios.<span className='blue'>get</span>(<span className='blue1'>'/api/data'</span>)</p>

  <p>.<span className='blue'>then</span>{'(response => {'}</p>

  <p>{'console'}.<span className='blue'>log</span>(response.<span className='blue'>data</span>); </p>

  <p>{'})'}</p>

  <p>.<span className='blue'>catch</span>{'(error => {' }</p>

  <p>{'console'}.<span className='blue'>log</span>(error);</p>

  <p>{'});'}</p>
</code>

<p>In questo esempio, stiamo recuperando dati dall'endpoint <b>/api/data</b>. I dati della risposta vengono registrati nella console se la richiesta ha successo, e qualsiasi errore viene intercettato e registrato nella console.</p>

<p>2. <b>PUT</b>: un metodo di richiesta utilizzato per aggiornare dati esistenti sul server. In React, puoi utilizzare il metodo <b>axios.put</b>:</p>

<code>
  <p>axios.<span className='blue'>put</span>{'('}<span className='blue1'>'/api/data/1'</span>, {'{'} <span className='blue'>newData</span>: <span className='blue1'>'updatedData'</span> {"})"}</p>

  <p>.<span className='blue'>then</span>{'('}response { '=> {' }</p>

  <p>{'console'}.<span className='blue'>log</span>(response.<span className='blue'>data</span>);</p>

  <p>{'})'}</p>

  <p>.<span className='blue'>catch</span>{'(error => {'}</p>

  <p>{'console'}.<span className='blue'>log</span>(error);</p>

  <p>{'});'}</p>
</code>

<p>In questo esempio, stiamo aggiornando dati presso l'endpoint <b>/api/data/1</b>. Stiamo inviando un payload con i nuovi dati come secondo argomento a <b>axios.put</b>. I dati della risposta vengono registrati nella console se la richiesta ha successo, e qualsiasi errore viene intercettato e registrato nella console.</p>

<p>3. <b>POST</b>: un metodo di richiesta utilizzato per creare nuovi dati sul server. In React, puoi utilizzare il metodo <b>axios.post</b></p>

<code>
  <p>axios.<span className='blue'>post</span>{'('}<span className='blue1'>'/api/data'</span>, {'{'} <span className='blue'>newData</span>: <span className='blue1'>'newData'</span> {"})"}</p>

  <p>.<span className='blue'>then</span>{'(response => {'}</p>

  <p>{'console'}.<span className='blue'>log</span>(response.<span className='blue'>data</span>);</p>

  <p>{'})'}</p>

  <p>.<span className='blue'>catch</span>{'(error => {'}</p>

  <p>{'console'}.<span className='blue'>log</span>(error);</p>

  <p>{'});'}</p>
</code>

<p>In questo esempio, stiamo creando nuovi dati presso l'endpoint <b>/api/data</b>. Stiamo inviando un payload con i nuovi dati come secondo argomento a <b>axios.post</b>. I dati della risposta vengono registrati nella console se la richiesta ha successo, e qualsiasi errore viene intercettato e registrato nella console.</p>

<p>4. <b>DELETE</b>: un metodo di richiesta utilizzato per eliminare dati esistenti sul server. In React, puoi utilizzare il metodo <b>axios.delete</b>:</p>

<code>
  <p>axios.<span className='blue'>delete</span>(<span className='blue1'>'/api/data/1'</span>)</p>

  <p>.<span className='blue'>then</span>{'(response => { '}</p>

  <p>{'console'}.<span className='blue'>log</span>(response.<span className='blue'>data</span>);</p>

  <p>{'}) '}</p>

  <p>.<span className='blue'>catch</span>{'(error => { '}</p>

  <p>{'console'}.<span className='blue'>log</span>(error);</p>

  <p>{'});'}</p>
</code>

<p>In questo esempio, stiamo eliminando dati presso l'endpoint <b>/api/data/1</b>. I dati della risposta vengono registrati nella console se la richiesta ha successo, e qualsiasi errore viene intercettato e registrato nella console</p>

<p>Per ulteriori informazioni su Axios, visita il loro sito ufficiale: <a href="https://axios-http.com" target='_blank'>👉🏼 https://axios-http.com</a></p>

    <b><p>* Testo scritto con l'aiuto di un traduttore. Se trovi un errore, per favore, faccelo sapere *</p></b>
    
    <div className='ads-container'>  
      {/*  реклама  */}
    </div>
      </div>
  )
}

export default ItReact_4;