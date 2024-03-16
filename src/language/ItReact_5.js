import React from 'react';

function ItReact_5() {
  return (
    <div>
      <div className='ad-container'>  
          {/*  реклама  */}
        </div>

      <h1>React Router DOM</h1>

<p>React Router Dom è una libreria popolare utilizzata nelle applicazioni React per gestire il routing lato client. Consente agli sviluppatori di creare percorsi diversi per diversi componenti e renderizzarli in base all'URL corrente. Ciò fornisce un'esperienza utente più intuitiva e senza soluzione di continuità, poiché gli utenti possono navigare attraverso diverse pagine e componenti senza dover ricaricare l'intera pagina.</p>

<p>React Router Dom si basa sulla libreria React Router e è progettato specificamente per l'uso nel browser. Utilizza l'API della cronologia del browser per manipolare l'URL e mantenere l'interfaccia utente sincronizzata con l'URL corrente. Fornisce anche un approccio dichiarativo alla definizione dei percorsi, rendendo facile gestire applicazioni complesse con percorsi multipli e componenti nidificati.</p>

<p>Alcune delle principali caratteristiche di React Router Dom includono:</p>

<p> • Routing dichiarativo: è possibile definire i percorsi come componenti JSX, rendendo facile comprendere e gestire la logica del routing.</p>

<p> • Percorsi nidificati: è possibile annidare percorsi all'interno di altri percorsi, consentendo scenari di routing più complessi</p>

<p> • Parametri del percorso: è possibile definire parametri dinamici all'interno dei percorsi, consentendo di passare dati tra i componenti in base all'URL corrente.</p>

<p> • Gestione della cronologia: React Router Dom fornisce strumenti per gestire la cronologia del browser, consentendo di navigare programmatticamente tra le pagine e gestire la navigazione avanti/indietro.</p>
 
<p>Ecco un esempio semplice di come React Router Dom potrebbe essere utilizzato in un'applicazione React: <b>(vecchia versione)v5</b></p>

<code>
  <p> <span className='red'>import</span> React <span className='red'>from</span> <span className='blue1'>'react'</span>;</p>

  <p> <span className='red'>import</span> {'{'} BrowserRouter <span className='red'>as</span> Router, Route, Link {'}'} <span className='red'>from</span> <span className='blue1'>'react-router-dom'</span>;  </p>

  <p>&nbsp;<span className='red'>const</span> Home = () {'=> <'}<span className='green'>h1</span>{'>'}Home{'</'}<span className='green'>h1</span>{'>; '}</p>

  <p>&nbsp;<span className='red'>const</span> About = () {'=> <'}<span className='green'>h1</span>{'>'}About{'</'}<span className='green'>h1</span>{'>;'}</p>

  <p>&nbsp;<span className='red'>const</span> App {'= () => ( '}</p>

  <p>{'<'}<span className='blueviole'>Router</span>{'>'}</p>

  <p>&nbsp;{'<'}<span className='green'>nav</span>{'>'}</p>

  <p>&nbsp;&nbsp;{'<'}<span className='green'>ul</span>{'>'}</p>

  <p>&nbsp;&nbsp;&nbsp;{'<'}<span className='green'>li</span>{'>'}</p>

  <p>&nbsp;&nbsp;&nbsp;&nbsp;{'<'}<span className='blueviole'>Link</span> <span className='blue'>to</span>=<span className='blue1'>"/"</span>{'>'}Home{'</'}<span className='blueviole'>Link</span>{'>'}</p>

  <p>&nbsp;&nbsp;&nbsp;{'</'}<span className='green'>li</span>{'>'}</p>

  <p>&nbsp;&nbsp;&nbsp;{'<'}<span className='green'>li</span>{'>'}</p>

  <p>&nbsp;&nbsp;&nbsp;&nbsp;{'<'}<span className='blueviole'>Link</span> <span className='blue'>to</span>=<span className='blue1'>"/about"</span>{'>'}About{'</'}<span className='blueviole'>Link</span>{'>'}</p>

  <p>&nbsp;&nbsp;&nbsp;{'</'}<span className='green'>li</span>{'>'}</p>

  <p>&nbsp;&nbsp;{'</'}<span className='green'>ul</span>{'>'}</p>

  <p>&nbsp;{'</'}<span className='green'>nav</span>{'>'}</p>

  <p>&nbsp;{'<'}<span className='blueviole'>Route </span><span className='blue'>exact path</span>=<span className='blue1'>"/"</span> <span className='blue'>component</span>={'{Home}  />'}</p>

  <p>&nbsp;{'<'}<span className='blueviole'>Route</span>  <span className='blue'>path</span>=<span className='blue1'>"/about"</span> <span className='blue'>component</span>={'{About}  />'}</p>

  <p>{'</'}<span className='blueviole'>Router</span>{'>'}</p>

  <p>{');'}</p>

  <p><span className='red'>export default</span> App; </p>
</code>

<p>In questo esempio, importiamo i componenti necessari da React Router Dom (specificamente, <b>BrowserRouter, Route e Link</b>). Definiamo quindi due componenti semplici per le nostre pagine home e about.</p>

<p>All'interno del componente <b>App</b>, avvolgiamo tutto in un componente <b>Router</b>, che fornisce il contesto di routing per il resto dell'applicazione. Definiamo quindi una semplice barra di navigazione utilizzando il componente <b>Link</b> per navigare tra le nostre due pagine.</p>

<p>Infine, definiamo due componenti <b>Route</b> che renderizzano i componenti <b>Home e About</b> in base all'URL corrente.</p>

<p>React Router Dom 6.4 è l'ultima versione della libreria, rilasciata nel febbraio 2022. Alcune delle nuove funzionalità di questa versione includono:</p>

<p>La versione più recente (v6) ha modifiche a alcune API e raccolte, quindi posso scegliere un nuovo esempio utilizzando React Router Dom versione 6.4:</p>

<p>ecco un esempio utilizzando React Router Dom versione 6.4:</p>


<code>
  <p><span className='red'>import</span> {'{'} BrowserRouter <span className='red'>as</span> Router, Routes, Route, Link {'}'} <span className='red'>from</span> <span className='blue1'>'react-router-dom'</span>;</p>

  <p>&nbsp;<span className='red'>const</span>  Home = () {'=> <'}<span className='green'>h1</span>{'>'}Home{'</'}<span className='green'>h1</span>{'>;'}</p>

  <p>&nbsp;<span className='red'>const</span> About = () {'=> <'}<span className='green'>h1</span>{'>'}About{'</'}<span className='green'>h1</span>{'>;'}</p>

  <p>&nbsp;<span className='red'>const</span> NotFound = () {'=> <'}<span className='green'>h1</span>{'>'}404 Not Found{'</'}<span className='green'>h1</span>{'>;'}</p>

  <p>&nbsp;<span className='red'>const</span> {'App = () => ( '}</p>

  <p>{'<'}<span className='blueviole'>Router</span>{'>'}</p>

  <p>&nbsp;{'<'}<span className='green'>nav</span>{'>'}</p>

  <p>&nbsp;&nbsp;{'<'}<span className='green'>ul</span>{'>'}</p>

  <p>&nbsp;&nbsp;&nbsp;{'<'}<span className='green'>li</span>{'>'}</p>

  <p>&nbsp;&nbsp;&nbsp;&nbsp;{'<'}<span className='blueviole'>Link</span> <span className='blue'>to</span>=<span className='blue1'>"/"</span>{'>'}Home{'</'}<span className='blueviole'>Link</span>{'>'}</p>

  <p>&nbsp;&nbsp;&nbsp;{'</'}<span className='green'>li</span>{'>'}</p>

  <p>&nbsp;&nbsp;&nbsp;{'<'}<span className='green'>li</span>{'>'}</p>

  <p>&nbsp;&nbsp;&nbsp;&nbsp;{'<'}<span className='blueviole'>Link</span> <span className='blue'>to</span>=<span className='blue1'>"/about"</span>{'>'}About{'</'}<span className='blueviole'>Link</span>{'>'}</p>

  <p>&nbsp;&nbsp;&nbsp;{'</'}<span className='green'>li</span>{'>'}</p>

  <p>&nbsp;&nbsp;{'</'}<span className='green'>ul</span>{'>'}</p>

  <p>&nbsp;{'</'}<span className='green'>nav</span>{'>'}</p>

  <p>{'<'}<span className='blueviole'>Routes</span>{'>'}</p>

  <p>&nbsp;{'<'}<span className='blueviole'>Route</span> <span className='blue'>path</span>=<span className='blue1'>"/"</span> <span className='blue'>element</span>={'{<'}<span className='blueviole'>Home</span> {'/>} />'}</p>

  <p>&nbsp;{'<'}<span className='blueviole'>Route</span> <span className='blue'>path</span>=<span className='blue1'>"/about"</span> <span className='blue'>element</span>={'{<'}<span className='blueviole'>About</span> {'/>} />'}</p>

  <p>&nbsp;{'<'}<span className='blueviole'>Route</span> <span className='blue'>path</span>=<span className='blue1'>"*"</span> <span className='blue'>element</span>={'{<'}<span className='blueviole'>NotFound</span> {'/>} />'}</p>

  <p>{'</'}<span className='blueviole'>Routes</span>{'>'}</p>

  <p>{'</'}<span className='blueviole'>Router</span>{'>'}</p>

  <p>{');'}</p>

  <p><span className='red'>export default</span> App; </p>
</code>

<p>In questo esempio, utilizziamo gli stessi componenti principali di React Router Dom (<b>come BrowserRouter, Route, Link</b>), ma alcuni di essi hanno una sintassi leggermente diversa.</p>

<p>Ad esempio, ora utilizziamo il componente <b>Routes</b> invece di <b>Switch</b> per raggruppare più percorsi. Ogni percorso è ora rappresentato da un elemento <b>Route</b> con le proprietà <b>path ed element</b>. La proprietà <b>path</b> imposta il modello URL per il percorso e la proprietà <b>element</b> è il componente da renderizzare quando il percorso corrisponde.</p>

<p>In questo esempio, abbiamo anche aggiunto un componente <b>NotFound</b> che viene visualizzato quando l'utente atterra su una pagina inesistente.</p>

<p>In generale, React Router Dom 6 fornisce un modo più flessibile e conveniente per gestire il routing nelle applicazioni React.</p>

<p>1. Se stai utilizzando <b>npm</b>, apri il terminale e esegui il seguente comando:</p>

<b>npm install react-router-dom</b>

<p>2. Se stai utilizzando <b>yarn</b>, apri il terminale e esegui il seguente comando:</p>

<b>yarn add react-router-dom</b>

<p>Dopo l'installazione, puoi importare i componenti necessari dal pacchetto <b>react-router-dom</b>, come mostrato negli esempi sopra.</p>

<p>Per ulteriori informazioni su React Router, visita il loro sito web ufficiale: <a href="https://reactrouter.com/" target='_blank' > 👉🏼  https://reactrouter.com/.</a></p>

<p>Sul sito web, troverai una guida completa all'uso di React Router, inclusi:</p>

<p>• Una panoramica di React Router e dei suoi concetti chiave</p>

<p>• Istruzioni per l'installazione e la configurazione</p>

<p>• Esempi di diversi casi d'uso e scenari</p>

<p>• Documentazione API per ciascuno dei componenti principali e delle utilità</p>

<p>• Argomenti avanzati come il rendering lato server, la suddivisione del codice e i percorsi nidificati</p>

<p>Oltre alla documentazione, puoi trovare anche una serie di risorse utili come un forum della comunità, un repository GitHub per segnalazioni di bug e richieste di funzionalità e una raccolta di progetti e plugin correlati.</p>

<b><p>* Testo scritto con l'aiuto di un traduttore. Se trovi un errore, per favore, faccelo sapere *</p></b>
    
    <div className='ads-container'>  
      {/*  реклама  */}
    </div>
     </div>
  )
}

export default ItReact_5;