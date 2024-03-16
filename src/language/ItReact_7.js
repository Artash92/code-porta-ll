import React from 'react';

function ItReact_7() {
  return (
    <div>
      <div className='ad-container'>  
          {/*  реклама  */}
        </div>

      <h1>Redux</h1>

<p>Redux è una libreria di gestione dello stato per le applicazioni JavaScript. Aiuta a gestire lo stato della tua applicazione in modo prevedibile, rendendo più semplice ragionare sul flusso dei dati nella tua applicazione. Con Redux, memorizzi lo stato dell'applicazione in un unico oggetto chiamato store, e usi azioni e riduttori per modificare tale stato.</p>

<p>Ecco come funziona: quando desideri cambiare lo stato della tua applicazione, invii un'azione. L'azione è un semplice oggetto JavaScript che descrive cosa è successo nella tua applicazione. Ad esempio, potresti inviare un'azione per aggiungere un nuovo elemento a un elenco, o per aggiornare le informazioni del profilo di un utente.</p>

<p>I riduttori sono funzioni che prendono lo stato attuale della tua applicazione e un'azione, e restituiscono un nuovo stato. I riduttori sono funzioni pure, il che significa che non hanno effetti collaterali e restituiscono sempre lo stesso output per un dato input.</p>

<p>React-Redux è una libreria che integra Redux con React. Fornisce un modo per collegare i tuoi componenti React allo store Redux, in modo che tu possa accedere e modificare lo stato della tua applicazione dai tuoi componenti. React-Redux fornisce due componenti chiave: Provider e connect.</p>

<p>Il componente Provider viene utilizzato per avvolgere l'intera applicazione React. Prende un oggetto store come prop e rende tale store disponibile a tutti i componenti della tua applicazione.</p>

<p>1. Installa i pacchetti richiesti:</p>

<b>npm install redux react-redux</b>

<p>2. Crea uno store Redux:</p>

<code>
  <p><span className='red'>import</span> {'{ createStore }'} <span className='red'>from</span> <span className='blue1'>'redux'</span>;</p>
  
  <p><span className='red'>import</span> rootReducer <span className='red'>from</span> <span className='blue1'>'./reducers'</span>; </p>

  <p><span className='red'>const</span> store = <span className='blueviole'>createStore</span>(rootReducer); </p>
</code>

<p>3. Crea azioni Redux:</p>

<code>
  <p><span className='red'>export const</span> {"increment = () => {"}</p>
 
  <p>&nbsp;<span className='red'>return</span>  {"{ "}</p>

  <p>&nbsp;&nbsp;<span className='blue'>type</span> : <span className='blue1'>'INCREMENT'</span></p>

  <p>&nbsp;{" } "}</p>

  <p>{" } "}</p>

  <p><span className='red'>export const</span>  {"decrement = () => { "}</p>

  <p>&nbsp;<span className='red'>return</span>  {" { "}</p>

  <p>&nbsp;&nbsp;<span className='blue'>type</span> : <span className='blue1'>'DECREMENT'</span></p>

  <p>&nbsp;{" } "}</p>

  <p>{" } "}</p>
</code>

<p>4. Crea i riduttori Redux:</p>
   
   <code>
    <p><span className='red'>const</span> counterReducer = {'('}state = <span className='blue1'>0</span>, {"azione) => { "}</p>
    
    <p>&nbsp;<span className='red'>switch</span> (azione.<span className='blue'>type</span>) {"{ "}</p>

    <p>&nbsp;&nbsp;<span className='red'>case</span> <span className='blue1'>'INCREMENTO'</span>:</p>

    <p>&nbsp;&nbsp;&nbsp;<span className='red'>return</span>  state + <span className='blue1'>1</span>;</p>

    <p>&nbsp;&nbsp;<span className='red'>case</span> <span className='blue1'>'DECREMENTO'</span>:</p>

    <p>&nbsp;&nbsp;&nbsp;<span className='red'>return</span> state - <span className='blue1'>1</span>; </p>

    <p>&nbsp;&nbsp;<span className='red'>default</span>: </p>

    <p>&nbsp;&nbsp;&nbsp;<span className='red'>return</span> state; </p>

    <p>&nbsp;{" }"}</p>

    <p>{"} "}</p>

    <p><span className='red'>export default</span> counterReducer;</p>
  </code>
   
   <p>5. Connetti Redux a un componente React usando la funzione <b>connect</b> di React-Redux:</p>
  
  <code>
    <p><span className='red'>import</span> {'{ connect }'} <span className='red'>from</span> <span className='blue1'>'react-redux'</span>; </p>
    
    <p><span className='red'>import</span>  {'{ increment, decrement }'} <span className='red'>from</span> <span className='blue1'>'./actions'</span>;</p>

    <p>&nbsp;<span className='red'>const</span> {"Counter = (props) => { "}</p>

    <p>&nbsp;<span className='red'>return</span> {'('}</p>

    <p>{'<'}<span className='green'>div</span>{'>'}</p>

    <p>&nbsp;&nbsp;{'<'}<span className='green'>h1</span>{'>{'}props.<span className='blue'>count</span>{'}</'}<span className='green'>h1</span>{'>'}</p>

    <p>&nbsp;&nbsp;{'<'}<span className='green'>button</span> <span className='blue'>onClick</span>={'{'}props.<span className='blue'>increment</span>{'}>'}+{'</'}<span className='green'>button</span>{'>'}</p>

    <p>&nbsp;&nbsp;{'<'}<span className='green'>button</span> <span className='blue'>onClick</span>={'{'}props.<span className='blue'>decrement</span>{'}>-</'}<span className='green'>button</span>{'>'}</p>

    <p>{"</"}<span className='green'>div</span>{">"}</p>

    <p>&nbsp;{");"}</p>

    <p>{"} "}</p>

    <p>&nbsp;<span className='red'>const</span> {"mapStateToProps = (state) => {"}</p>

    <p>&nbsp;<span className='red'>return</span> {"{ "}</p>

    <p>&nbsp;&nbsp;&nbsp;<span className='blue'>count</span>: state.<span className='blue'>counter</span></p>

    <p>&nbsp;{"} "}</p>

    <p>{"} "}</p>

    <p>&nbsp;<span className='red'>const</span> {"mapDispatchToProps = (dispatch) => { "}</p>

    <p>&nbsp;<span className='red'>return</span> {"{ "}</p>

    <p>&nbsp;&nbsp;&nbsp;<span className='blue'>increment</span>: {"() =>"} <span className='blueviole'>dispatch</span>(<span className='blueviole'>increment</span>()), </p>

    <p>&nbsp;&nbsp;&nbsp;<span className='blue'>decrement</span>: {"() =>"} <span className='blueviole'>dispatch</span>(<span className='blueviole'>decrement</span>())</p>

    <p>&nbsp;{"}"}</p>

    <p>{"}"}</p>

    <p><span className='red'>export default</span> <span className='blueviole'>connect</span>(mapStateToProps, mapDispatchToProps)(Counter); </p>
  </code>

  <p>6. Avvolgi la tua app con il componente <b>Provider</b> per rendere lo store Redux disponibile a tutti i componenti:</p>

<code> 
  <p><span className='red'>import</span> {"{ Provider } "} <span className='red'>from</span> <span className='blue1'>'react-redux'</span>;</p>

  <p><span className='red'>import</span> store <span className='red'>from</span> <span className='blue1'>'./store'</span>;</p>

  <p><span className='red'>import</span> Counter <span className='red'>from</span> <span className='blue1'>'./Counter'</span>; </p>

  <p>&nbsp;<span className='red'>const</span> {"App = () => { "}</p>

  <p>&nbsp;<span className='red'>return</span> {"("}</p>

  <p>{"<"}<span className='blueviole'>Provider</span> <span className='blue'>store</span>={"{store}> "}</p>

  <p>&nbsp;&nbsp;{"<"}<span className='blueviole'>Counter</span> {"/>"}</p>

  <p>{"</"}<span className='blueviole'>Provider</span>{">"}</p>

  <p>&nbsp;{");"}</p>

  <p>{"}"}</p>

  <p><span className='red'>export default</span> App;</p>
</code>

<p>Questo è un esempio di base su come utilizzare Redux e React-Redux in un'applicazione React. Tieni presente che questo è solo la punta dell'iceberg, e c'è molto altro da imparare su Redux e il suo ecosistema.</p>

<p>Ci sono alcune cose in più da tenere a mente quando si utilizza Redux in un'applicazione React:</p>

<p>1. Middleware di Redux: Il middleware è un modo per modificare o intercettare le azioni di Redux prima che raggiungano i reducer. Il middleware può essere utilizzato per compiti come il logging, le richieste asincrone e altro ancora. Alcune opzioni di middleware popolari per Redux includono <b>redux-thunk, redux-saga e redux-observable</b>.</p>

<p>2. Redux devtools: Redux devtools è un'estensione del browser che fornisce una UI utile per il debug e l'ispezione dello store Redux. Consente di ispezionare azioni e cambiamenti di stato, e fornisce anche funzionalità di debug a viaggio nel tempo.</p>

<p>3. Selettori di Redux: I selettori sono funzioni che estraggono parti specifiche di dati dallo store Redux. Possono essere utilizzati per calcolare dati derivati, filtrare e trasformare dati e altro ancora. I selettori possono aiutare a semplificare i tuoi componenti fornendo loro i dati esatti di cui hanno bisogno, senza doversi preoccupare della forma dello store.</p>

<p>4. Ducks di Redux: Ducks è una proposta per organizzare il codice di Redux in moduli che contengono tutti i tipi di azione correlati, creatori di azioni e riduttori per una funzionalità o dominio specifico. Questo approccio può aiutare a semplificare la tua base di codice e renderla più facile da mantenere.</p>

<p>Questi sono solo alcuni degli argomenti aggiuntivi che potresti voler esplorare quando lavori con Redux. Ci sono molte altre librerie e strumenti disponibili nell'ecosistema Redux, quindi è importante dedicare del tempo per conoscerli e decidere quali sono i più adatti per il tuo progetto.</p>

    <b><p>* Testo scritto con l'aiuto di un traduttore. Se trovi un errore, per favore, faccelo sapere *</p></b>
    
    <div className='ads-container'>  
      {/*  реклама  */}
    </div>
     </div>
  )
}

export default ItReact_7;