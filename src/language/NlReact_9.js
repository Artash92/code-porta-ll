import React from 'react';

function NlReact_9() {
  return (
    <div>
      <div className='ad-container'>  
          {/*  реклама  */}
      </div>
      
         <h1>Redux-Saga</h1>
         
      <p>Redux-saga is een bibliotheek voor het afhandelen van bijwerkingen, zoals asynchrone verzoeken en het ophalen van gegevens, in Redux-toepassingen. Het gebruikt generatorfuncties om de stroom van asynchrone bewerkingen te beheren en biedt een gecentraliseerde plaats voor het afhandelen van alle bijwerkingen, waardoor het gemakkelijker wordt om de toepassingsgedrag te begrijpen en te testen.</p>

      <p>Hier is een voorbeeld van hoe je redux-saga kunt gebruiken om een asynchrone API-oproep te behandelen:</p>

<code>
<p><span className='red'>import</span> {'{ call, put, takeLatest }'} <span className='red'>from</span> <span className='blue1'>'redux-saga/effects'</span>; </p>

<p><span className='red'>import</span> axios <span className='red'>from</span> <span className='blue1'>'axios'</span>; </p>

<p><span className='green'>{"// Action Types "}</span></p>

<p>&nbsp;<span className='red'>const</span> FETCH_USERS_REQUEST = <span className='blue1'>'FETCH_USERS_REQUEST'</span>;</p>

<p>&nbsp;<span className='red'>const</span> FETCH_USERS_SUCCESS = <span className='blue1'>'FETCH_USERS_SUCCESS'</span>;</p>

<p>&nbsp;<span className='red'>const</span> FETCH_USERS_FAILURE = <span className='blue1'>'FETCH_USERS_FAILURE'</span>;</p>

<p><span className='green'>{"// Action Creators"}</span></p>

<p>&nbsp;<span className='red'>const</span> fetchUsersRequest {'= () => ({'} <span className='blue'>type</span>: FETCH_USERS_REQUEST {'});'} </p>

<p>&nbsp;<span className='red'>const</span> fetchUsersSuccess {'= (users) => ({'} <span className='blue'>type</span>: FETCH_USERS_SUCCESS, <span className='blue'>users</span> {'});'} </p>

<p>&nbsp;<span className='red'>const</span> fetchUsersFailure {'= (error) => ({'} <span className='blue'>type</span>: FETCH_USERS_FAILURE, <span className='blue'>error</span> {'});'} </p>

<p><span className='green'>{"// Reducer"}</span></p>

<p>&nbsp;<span className='red'>const</span> initialState = {'{'} <span className='blue'>users</span>: {'[]'}, <span className='blue'>loading</span>: <span className='blue1'>false</span>, <span className='blue'>error</span>: <span className='red'>null</span> {'};'} </p>

<p>&nbsp;<span className='red'>const</span> {"usersReducer = (state = initialState, action) => {"}</p>

<p>&nbsp;&nbsp;&nbsp;<span className='red'>switch</span> {'('}action.<span className='blue'>type</span>{") {"}</p>

<p>&nbsp;&nbsp;&nbsp;&nbsp;<span className='red'>case</span> {"FETCH_USERS_REQUEST:"}</p>

<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className='red'>return</span> {'{'} ...state, <span className='blue'>loading</span>: <span className='blue1'>true</span> {'};'} </p>

<p>&nbsp;&nbsp;&nbsp;&nbsp;<span className='red'>case</span> {"FETCH_USERS_SUCCESS:"}</p>

<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className='red'>return</span> {'{'} ...state, <span className='blue'>users</span>: action.<span className='blue'>users</span>, <span className='blue'>loading</span>: <span className='blue1'>false</span> {'};'} </p>

<p>&nbsp;&nbsp;&nbsp;&nbsp;<span className='red'>case</span> {"FETCH_USERS_FAILURE:"}</p>

<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className='red'>return</span> {'{'} ...state, <span className='blue'>error</span>: action.<span className='blue'>error</span>, <span className='blue'>loading</span>: <span className='blue1'>false</span> {'};'} </p>

<p>&nbsp;&nbsp;&nbsp;&nbsp;<span className='red'>default</span>:</p>

<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className='red'>return</span> state;</p>

<p>&nbsp;{" }"}</p>

<p>{"};"}</p>

<p><span className='green'>{"// Sagas"}</span></p>

<p>&nbsp;<span className='red'>function*</span> <span className='blueviole'>fetchUsers</span>{"() {"}</p>

<p>&nbsp;&nbsp;<span className='red'>try</span> {"{"}</p>

<p>&nbsp;&nbsp;&nbsp;<span className='red'>const</span> response = <span className='red'>yield</span> <span className='blueviole'>call</span>(axios.<span className='blue'>get</span>, <span className='blue1'>'{'https://jsonplaceholder.typicode.com/users'}</span>'); </p>

<p>&nbsp;&nbsp;&nbsp;<span className='red'>yield</span> <span className='blueviole'>put</span>(<span className='blueviole'>fetchUsersSuccess</span>(response.<span className='blue'>data</span>)); </p>

<p>&nbsp;&nbsp;{"}"} <span className='red'>catch</span> {"(error) {"}</p>

<p>&nbsp;&nbsp;&nbsp;<span className='red'>yield</span> <span className='blueviole'>put</span>(<span className='blueviole'>fetchUsersFailure</span>(error));</p>

<p>&nbsp;{"}"}</p>

<p>{"}"}</p>

<p>&nbsp;<span className='red'>function*</span> <span className='blueviole'>usersSaga</span>{"() {"}</p>

<p>&nbsp;&nbsp;&nbsp;<span className='red'>yield</span> <span className='blueviole'>takeLatest</span>{'(FETCH_USERS_REQUEST, fetchUsers)'};</p>

<p>{"}"}</p>

<p><span className='red'>export</span> {"{ usersReducer, usersSaga };"}</p>
</code>

<p>In dit voorbeeld definiëren we drie actietypen (FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS en FETCH_USERS_FAILURE), drie actie-creators (fetchUsersRequest, fetchUsersSuccess en fetchUsersFailure), en een reducer-functie (usersReducer) om staatupdates af te handelen.</p>

<p>We definiëren ook twee sagas: fetchUsers en usersSaga. De fetchUsers saga gebruikt het call-effect om een API-oproep te maken met behulp van axios en dispatcht fetchUsersSuccess of fetchUsersFailure, afhankelijk van het al dan niet slagen van de oproep. De usersSaga-saga luistert naar FETCH_USERS_REQUEST-acties en voert de fetchUsers-saga uit als reactie.</p>

<p>Tenslotte exporteren we zowel de reducer als de saga zodat ze kunnen worden gebruikt in onze Redux store setup:</p>

<code>
<p><span className='red'>import</span> {"{ createStore, applyMiddleware }"} <span className='red'>from</span> <span className='blue1'>'redux'</span>;</p>

<p><span className='red'>import</span> {'createSagaMiddleware'} <span className='red'>from</span> <span className='blue1'>'redux-saga'</span>; </p>

<p><span className='red'>import</span> {"{ usersReducer, usersSaga }"} <span className='red'>from</span> <span className='blue1'>'./users'</span>;</p>

<p><span className='red'>const</span> sagaMiddleware = <span className='blueviole'>createSagaMiddleware</span>(); </p>

<p><span className='red'>const</span> store = <span className='blueviole'>createStore</span>(usersReducer, <span className='blueviole'>applyMiddleware</span>(sagaMiddleware)); </p>

<p>sagaMiddleware.<span className='blue'>run</span>(usersSaga);</p>

<p><span className='red'>export default</span> store;</p>
</code>

<p>In deze opstelling maken we een Redux store met onze usersReducer en passen we de sagaMiddleware toe. Vervolgens voeren we de usersSaga uit met sagaMiddleware.run. Dit zorgt ervoor dat onze saga actief is en luistert naar acties in onze applicatie.</p>

<b><p>* Tekst geschreven met behulp van een vertaler. Als je een fout vindt, laat het ons dan weten *</p></b>
    
    <div className='ads-container'>  
      {/*  реклама  */}
    </div>
     </div>
  )
}

export default NlReact_9;