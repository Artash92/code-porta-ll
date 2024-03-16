import React from 'react';

function ItReact_8() {
  return (
    <div>
      <div className='ad-container'>  
          {/*  реклама  */}
        </div>

      <h1>Redux Thunk</h1>
      
      <p>Redux Thunk è una libreria middleware per Redux che ti permette di scrivere logica asincrona che interagisce con il magazzino Redux. Ti consente di inviare azioni che contengono codice asincrono, come richieste API o altri effetti collaterali, avvolgendo i tuoi creatori di azioni in una funzione che restituisce un'altra funzione.</p>

      <p>Ecco un esempio di come Redux Thunk può essere utilizzato in un'applicazione React:</p>


      <code>
        <p><span className='green'>{"// actions.js "}</span></p>

        <p><span className='red'>import</span> axios <span className='red'>from</span> <span className='blue1'>'axios'</span>; </p>

        <p><span className='red'>export const</span> {"fetchUserRequest = () => ({ "}</p>

        <p>&nbsp;&nbsp;<span className='blue'>type</span>: <span className='blue1'>'FETCH_USER_REQUEST'</span>, </p>

        <p>{"}); "}</p>

        <p><span className='red'>export const</span> {"fetchUserSuccess = (user) => ({ "}</p>

        <p>&nbsp;&nbsp;<span className='blue'>type</span>: <span className='blue1'>'FETCH_USER_SUCCESS'</span>,</p>

        <p>&nbsp;&nbsp;<span className='blue'>payload</span>: user, </p>

        <p>{"}); "}</p>

        <p><span className='red'>export const</span> {"fetchUserError = (error) => ({ "}</p>

        <p>&nbsp;&nbsp;<span className='blue'>type</span>: <span className='blue1'>'FETCH_USER_ERROR'</span>, </p>

        <p>&nbsp;&nbsp;<span className='blue'>payload</span>: error, </p>

        <p>{"}); "}</p>
        
        <p><span className='red'>export const</span> {"fetchUser = (userId) => { "}</p>

        <p>&nbsp;<span className='red'>return</span> {"(dispatch) => { "}</p>

        <p>&nbsp;&nbsp;<span className='blueviole'>dispatch</span>(<span className='blueviole'>fetchUserRequest</span>());</p>

        <p>&nbsp;&nbsp;axios.<span className='blue'>get</span>(` <span className='blue1'>{'https://jsonplaceholder.typicode.com/users/$'}</span>{'{userId}'} `)  </p>

        <p>&nbsp;&nbsp;&nbsp;.<span className='blue'>then</span>{"((response) => {"}</p>

        <p>&nbsp;&nbsp;&nbsp;&nbsp;<span className='red'>const</span> user = response.<span className='blue'>data</span>; </p>

        <p>&nbsp;&nbsp;&nbsp;&nbsp;<span className='blueviole'>dispatch</span>(<span className='blueviole'>fetchUserSuccess</span>(user)); </p>

        <p>{"})"}</p>

        <p>&nbsp;&nbsp;&nbsp;.<span className='blue'>catch</span>{"((error) => {"}</p>

        <p>&nbsp;&nbsp;&nbsp;&nbsp;<span className='blueviole'>dispatch</span>(<span className='blueviole'>fetchUserError</span>(error.<span className='blue'>message</span>)); </p>

        <p>&nbsp;&nbsp;{"});"}</p>

        <p>&nbsp;{"};"}</p>

        <p>{"};"}</p>
    </code>

    <p>Nell'esempio precedente, definiamo tre creatori di azioni: <b>fetchUserRequest, fetchUserSuccess e fetchUserError</b>. Definiamo anche un creatore di azioni <b>fetchUser</b> che restituisce una funzione invece di un oggetto azione. Questa funzione prende <b>dispatch</b> come argomento, che è la funzione <b>dispatch</b> dello store Redux.</p>

    <p>All'interno della funzione <b>fetchUser</b>, inviamo l'azione <b>fetchUserRequest</b>, che imposta lo stato <b>isLoading</b> su <b>true</b>. Successivamente effettuiamo una chiamata API utilizzando Axios e inviamo l'azione <b>fetchUserSuccess o fetchUserError</b> in base alla risposta dell'API. Queste azioni aggiornano lo store Redux con i dati recuperati o il messaggio di errore, rispettivamente.</p>

    <p>Per utilizzare questo creatore di azioni in un componente, possiamo importarlo e passarlo a <b>dispatch</b> in questo modo:</p>

    <code>
      <p><span className='green'>{"// MyComponent.js"}</span></p>

      <p><span className='red'>import</span> {"React, { useEffect }"} <span className='red'>from</span> <span className='blue1'>'react'</span>;</p>

      <p><span className='red'>import</span> {"{ useDispatch, useSelector }"} <span className='red'>from</span> <span className='blue1'>'react-redux'</span>;</p>

      <p><span className='red'>import</span> {"{ fetchUser }"} <span className='red'>from</span> <span className='blue1'>'./actions'</span>; </p>

      <p>&nbsp;<span className='red'>const</span> MyComponent = {'({'} <span className='blue'>userId</span> {'})'} {"=> { "}</p>

      <p>&nbsp;<span className='red'>const</span> dispatch = <span className='blueviole'>useDispatch</span>(); </p>

      <p>&nbsp;<span className='red'>const</span> user = <span className='blueviole'>useSelector</span>(state {'=>'} state.<span className='blue'>user</span>.<span className='blue'>data</span>); </p>

      <p>&nbsp;<span className='red'>const</span> isLoading = <span className='blueviole'>useSelector</span>(state {'=>'} state.<span className='blue'>user</span>.<span className='blue'>isLoading</span>); </p>

      <p>&nbsp;<span className='red'>const</span> error = <span className='blueviole'>useSelector</span>(state {'=>'} state.<span className='blue'>user</span>.<span className='blue'>error</span>);</p>

      <p>&nbsp;<span className='blueviole'>useEffect</span>{"(() => { "}</p>

      <p>&nbsp;&nbsp;<span className='blueviole'>dispatch</span>(<span className='blueviole'>fetchUser</span>(userId));</p>

      <p>&nbsp;{"}, [dispatch, userId]); "}</p>

      <p>&nbsp;<span className='red'>if</span> {"(isLoading) { "}</p>

      <p>&nbsp;&nbsp;<span className='red'>return</span> {'<'}<span className='green'>div</span>{'>'}Loading...{'</'}<span className='green'>div</span>{'>'};</p>

      <p>{" } "}</p>

      <p>&nbsp;<span className='red'>if</span> {"(error) {  "}</p>

      <p>&nbsp;&nbsp;<span className='red'>return</span> {'<'}<span className='green'>div</span>{'>Error: {error}</'}<span className='green'>div</span>{'>'};</p>

      <p>{"}"}</p>

      <p>&nbsp;&nbsp;<span className='red'>return</span> {"("}</p>

      <p>{'<'}<span className='green'>div</span>{'>'}</p>

      <p>&nbsp;{'<'}<span className='green'>h1</span>{'>{'}user.<span className='blue'>name</span>{'}</'}<span className='green'>h1</span>{'>'}</p>

      <p>&nbsp;{'<'}<span className='green'>p</span>{'>{'}user.<span className='blue'>email</span>{'}</'}<span className='green'>p</span>{'>'}</p>
     
      <p>&nbsp;{'<'}<span className='green'>p</span>{'>{'}user.<span className='blue'>phone</span>{'}</'}<span className='green'>p</span>{'>'}</p>
     
      <p>{"</"}<span className='green'>div</span>{">"}</p>

      <p>&nbsp;{");"}</p>

      <p>{"};"}</p>
   </code>

<p>Nell'esempio sopra, utilizziamo i ganci useDispatch e useSelector della libreria react-redux per interagire con lo store Redux. Inviamo il creatore di azioni fetchUser nel gancio useEffect, che verrà chiamato quando il componente viene montato. Utilizziamo anche useSelector per estrarre i pezzi di dati rilevanti dallo store Redux, come i dati dell'utente e i flag isLoading e error.</p>

<p>In generale, Redux Thunk è una utile libreria middleware per Redux che ti permette di scrivere logica asincrona che interagisce con lo store Redux. Può aiutare a semplificare il tuo codice e renderlo più semplice da comprendere il comportamento asincrono nella tua applicazione React.</p>

<h3>Redux-Observable</h3>

<p>Redux-Observable è un middleware per Redux che consente l'uso della programmazione reattiva nelle applicazioni Redux. Permette agli sviluppatori di gestire azioni e eventi asincroni complessi in modo dichiarativo, componibile e facile da testare utilizzando RxJS, una libreria per la programmazione reattiva.</p>

<p>Con Redux-Observable, gli sviluppatori possono definire "epiche" che sono funzioni che ascoltano determinate azioni e poi reagiscono ad esse con uno stream di nuove azioni. Queste epiche sono osservabili, che sono funzioni che ricevono uno stream di eventi e possono trasformarli, filtrarli o unirli in modo dichiarativo.</p>

<p>Ecco un esempio di come utilizzare Redux-Observable:</p>


<code>
  <p><span className='red'>import</span> {'{ createStore, applyMiddleware } '} <span className='red'>from</span> <span className='blue1'>'redux'</span>;</p>

  <p><span className='red'>import</span>  {'{ createEpicMiddleware, combineEpics }'} <span className='red'>from</span> <span className='blue1'>'redux-observable'</span>;</p>

  <p><span className='red'>import</span> {'{ ajax }'} <span className='red'>from</span> <span className='blue1'>'rxjs/ajax'</span>;  </p>

  <p><span className='red'>import</span> {'{ mergeMap, map, catchError }'} <span className='red'>from</span> <span className='blue1'>'rxjs/operators'</span>;</p>

  <p>&nbsp;<span className='red'>const</span> {"pingEpic = action$ =>"}</p>

  <p>&nbsp;&nbsp;action$.<span className='blue'>ofType</span>(<span className='blue1'>'PING'</span>)</p>

  <p>&nbsp;&nbsp;.<span className='blue'>mergeMap</span>{"(action =>"}</p>

  <p>&nbsp;&nbsp;&nbsp;ajax.<span className='blue'>getJSON</span>(<span className='blue1'>'/api/ping'</span>)</p>

  <p>&nbsp;&nbsp;&nbsp;.<span className='blue'>map</span>{'('}response {'=> ({ '}<span className='blue'>type</span>: <span className='blue1'>'PONG'</span>, <span className='blue'>payload</span>: response {'}))'}  </p>

  <p>&nbsp;&nbsp;&nbsp;.<span className='blue'>catch</span>{'(error => ({'} <span className='blue'>type</span>: <span className='blue1'>'PING_ERROR'</span>, <span className='blue'>payload</span>: error.<span className='blue'>message</span> {'}))'}</p>

  <p>{");"}</p>

  <p>&nbsp;<span className='red'>const</span> rootEpic = <span className='blueviole'>combineEpics</span>{'('}</p>

  <p>&nbsp;&nbsp;{"pingEpic, "}</p>

  <p>&nbsp;&nbsp;<span className='green'>{"// more epics... "}</span></p>

  <p>{"); "}</p>

  <p>&nbsp;<span className='red'>const</span> epicMiddleware = <span className='blueviole'>createEpicMiddleware</span>();</p>

  <p>&nbsp;<span className='red'>const</span> store = <span className='blueviole'>createStore</span>{'('}</p>

  <p>&nbsp;&nbsp;{"reducer, "}</p>

  <p>&nbsp;&nbsp;<span className='blueviole'>applyMiddleware</span>(epicMiddleware)</p>

  <p>{");"}</p>

  <p>epicMiddleware.<span className='blue'>run</span>(rootEpic); </p>
</code>

<p>In questo esempio, definiamo un'epica chiamata <b>pingEpic</b> che ascolta un'azione di tipo 'PING', e quindi fa una richiesta AJAX a un server per inviare un ping. Se la richiesta ha successo, invia un'azione di tipo 'PONG' con il payload della risposta. Se la richiesta fallisce, invia un'azione di tipo 'PING_ERROR' con il messaggio di errore come payload.</p>

<p>Poi combiniamo tutte le nostre epiche in una singola <b>rootEpic</b>, e creiamo un'istanza di <b>createEpicMiddleware()</b> da utilizzare come middleware nel nostro store Redux. Infine, applichiamo il middleware allo store e eseguiamo la root epic con <b>epicMiddleware.run(rootEpic)</b>.</p>
   
<p>In generale, Redux-Observable è uno strumento potente per gestire azioni e eventi asincroni complessi nelle applicazioni Redux. Fornisce un modo flessibile e dichiarativo per gestire il comportamento asincrono utilizzando concetti di programmazione reattiva.</p>

<b><p>* Testo scritto con l'aiuto di un traduttore. Se trovi un errore, per favore, faccelo sapere *</p></b>
    
    <div className='ads-container'>  
      {/*  реклама  */}
    </div>
    </div>
  )
}

export default ItReact_8;