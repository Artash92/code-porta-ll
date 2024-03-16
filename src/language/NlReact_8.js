import React from 'react';

function NlReact_8() {
  return (
    <div>
      <div className='ad-container'>  
          {/*  реклама  */}
      </div>
      
      <h1>Redux Thunk</h1>
      
      
  <p>Redux Thunk is een middleware bibliotheek voor Redux die je toelaat om asynchrone logica te schrijven die interacteert met de Redux store. Het maakt het mogelijk om acties te dispatchen die asynchrone code bevatten, zoals API-verzoeken of andere neveneffecten, door je actie-makers in te pakken in een functie die een andere functie retourneert.</p>
  
  <p>Hier is een voorbeeld van hoe Redux Thunk kan worden gebruikt in een React applicatie:</p>

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


    <p>In het bovenstaande voorbeeld definiëren we drie actie-makers: <b>fetchUserRequest, fetchUserSuccess, en fetchUserError</b>. We definiëren ook een <b>fetchUser</b> actie-maker die een functie retourneert in plaats van een actie-object. Deze functie neemt <b>dispatch</b> als argument, dat de <b>dispatch</b> functie van de Redux store is.</p>
    
    <p>In de <b>fetchUser</b> functie dispatchen we de <b>fetchUserRequest</b> actie, die de <b>isLoading</b> toestand op <b>true</b> zet. Vervolgens maken we een API-oproep met behulp van Axios en dispatchen we ofwel de <b>fetchUserSuccess of fetchUserError</b> actie op basis van de API-reactie. Deze acties werken respectievelijk de Redux store bij met de opgehaalde gegevens of het foutbericht.</p>
    
    <p>Om deze actie-maker in een component te gebruiken, kunnen we deze importeren en doorgeven aan <b>dispatch</b> als volgt:</p>
    
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


   <p>In het bovenstaande voorbeeld gebruiken we de useDispatch en useSelector haken van de react-redux bibliotheek om te communiceren met de Redux store. We dispatchen de fetchUser actie-maker in de useEffect hook, die zal worden aangeroepen wanneer de component wordt gemonteerd. We gebruiken ook useSelector om de relevante stukken gegevens uit de Redux store te extraheren, zoals de gebruikersgegevens en de isLoading en error vlaggen.</p>
   
   <p>Over het algemeen is Redux Thunk een nuttige middleware bibliotheek voor Redux die je toelaat om asynchrone logica te schrijven die interacteert met de Redux store. Het kan helpen om je code te vereenvoudigen en het gemakkelijker te maken om na te denken over asynchrone gedragingen in je React applicatie.</p>
    
    <h3>Redux-Observable</h3>


    <p>Redux-Observable is een middleware voor Redux die het gebruik van reactieve programmering in Redux applicaties mogelijk maakt. Het stelt ontwikkelaars in staat om complexe asynchrone acties en gebeurtenissen op een declaratieve, samenstelbare en gemakkelijk te testen manier af te handelen met behulp van RxJS, een bibliotheek voor reactieve programmering.</p>
    
    <p>Met Redux-Observable kunnen ontwikkelaars "epics" definiëren, dat zijn functies die luisteren naar bepaalde acties, en er vervolgens op reageren met een stroom van nieuwe acties. Deze epics zijn observables, dat zijn functies die een stroom van gebeurtenissen ontvangen en deze op een declaratieve manier kunnen transformeren, filteren of samenvoegen.</p>
    
    <p>Hier is een voorbeeld van hoe Redux-Observable te gebruiken:</p>

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

<p>In dit voorbeeld definiëren we een epic genaamd <b>pingEpic</b> die luistert naar een actie van het type 'PING', en vervolgens een AJAX-verzoek naar een server maakt om deze te pingen. Als het verzoek succesvol is, dispatcht het een actie van het type 'PONG' met de responspayload. Als het verzoek mislukt, dispatcht het een actie van het type 'PING_ERROR' met het foutbericht als payload.</p>

<p>Vervolgens combineren we al onze epics in een enkele <b>rootEpic</b>, en maken we een instantie van <b>createEpicMiddleware()</b> om te gebruiken als middleware in onze Redux store. Ten slotte passen we de middleware toe op de store en voeren we de root epic uit met <b>epicMiddleware.run(rootEpic)</b>.</p>

<p>Al met al is Redux-Observable een krachtige tool voor het afhandelen van complexe asynchrone acties en gebeurtenissen in Redux applicaties. Het biedt een flexibele en declaratieve manier om asynchrone gedrag te beheren met behulp van concepten uit reactieve programmering.</p>
    
<b><p>* Tekst geschreven met behulp van een vertaler. Als je een fout vindt, laat het ons dan weten *</p></b>
    
    <div className='ads-container'>  
      {/*  реклама  */}
    </div>
  </div>
  )
}

export default NlReact_8;