import React from 'react'

function FrReact_9() {
  return (
    <div>
      <div className='ad-container'>  
          {/*  реклама  */}
        </div>
        
      <h1>Redux-Saga</h1>

<p>Redux-Saga est une bibliothèque pour gérer les effets secondaires, tels que les requêtes asynchrones et la récupération de données, dans les applications Redux. Elle utilise des fonctions génératrices pour gérer le flux des opérations asynchrones et fournit un endroit centralisé pour gérer tous les effets secondaires, ce qui facilite la compréhension et le test du comportement de l'application.</p>

<p>Voici un exemple de comment vous pouvez utiliser redux-saga pour gérer un appel d'API asynchrone :</p>

<code>
  <p><span className='red'>import</span> {'{ call, put, takeLatest }'} <span className='red'>from</span> <span className='blue1'>'redux-saga/effects'</span>; </p>

  <p><span className='red'>import</span> axios <span className='red'>from</span> <span className='blue1'>'axios'</span>; </p>

  <p><span className='green'>{"// Types d'actions"}</span></p>

  <p>&nbsp;<span className='red'>const</span> FETCH_USERS_REQUEST = <span className='blue1'>'FETCH_USERS_REQUEST'</span>;</p>

  <p>&nbsp;<span className='red'>const</span> FETCH_USERS_SUCCESS = <span className='blue1'>'FETCH_USERS_SUCCESS'</span>;</p>

  <p>&nbsp;<span className='red'>const</span> FETCH_USERS_FAILURE = <span className='blue1'>'FETCH_USERS_FAILURE'</span>;</p>

  <p><span className='green'>{"// Créateurs d'actions"}</span></p>

  <p>&nbsp;<span className='red'>const</span> fetchUsersRequest {'= () => ({'} <span className='blue'>type</span>: FETCH_USERS_REQUEST {'});'} </p>

  <p>&nbsp;<span className='red'>const</span> fetchUsersSuccess {'= (users) => ({'} <span className='blue'>type</span>: FETCH_USERS_SUCCESS, <span className='blue'>users</span> {'});'} </p>

  <p>&nbsp;<span className='red'>const</span> fetchUsersFailure {'= (error) => ({'} <span className='blue'>type</span>: FETCH_USERS_FAILURE, <span className='blue'>error</span> {'});'} </p>

  <p><span className='green'>{"// Réducteur"}</span></p>

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

<p>Dans cet exemple, nous définissons trois types d'actions (FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS et FETCH_USERS_FAILURE), trois créateurs d'actions (fetchUsersRequest, fetchUsersSuccess et fetchUsersFailure) et une fonction de réduction (usersReducer) pour gérer les mises à jour de l'état.</p>

<p>Nous définissons également deux sagas : fetchUsers et usersSaga. La saga fetchUsers utilise l'effet call pour effectuer un appel d'API en utilisant axios et envoie soit fetchUsersSuccess soit fetchUsersFailure en fonction de la réussite ou de l'échec de l'appel. La saga usersSaga écoute les actions FETCH_USERS_REQUEST et exécute la saga fetchUsers en réponse.</p>

<p>Enfin, nous exportons à la fois le réducteur et la saga afin qu'ils puissent être utilisés dans notre configuration de magasin Redux :</p>

<code>
  <p><span className='red'>import</span> {"{ createStore, applyMiddleware }"} <span className='red'>from</span> <span className='blue1'>'redux'</span>;</p>

  <p><span className='red'>import</span> {'createSagaMiddleware'} <span className='red'>from</span> <span className='blue1'>'redux-saga'</span>; </p>

  <p><span className='red'>import</span> {"{ usersReducer, usersSaga }"} <span className='red'>from</span> <span className='blue1'>'./users'</span>;</p>

  <p><span className='red'>const</span> sagaMiddleware = <span className='blueviole'>createSagaMiddleware</span>(); </p>

  <p><span className='red'>const</span> store = <span className='blueviole'>createStore</span>(usersReducer, <span className='blueviole'>applyMiddleware</span>(sagaMiddleware)); </p>

  <p>sagaMiddleware.<span className='blue'>run</span>(usersSaga);</p>

  <p><span className='red'>export default</span> store;</p>
</code>

<p>Dans cette configuration, nous créons un magasin Redux avec notre usersReducer et appliquons le sagaMiddleware. Ensuite, nous exécutons le usersSaga à l'aide de sagaMiddleware.run. Cela garantira que notre saga est active et écoute les actions dans notre application.</p>

<b><p>* Texte écrit avec l'aide d'un traducteur. Si vous trouvez une erreur, veuillez nous en informer *</p></b>
  
  <div className='ads-container'>  
{/*  реклама  */}
</div>
    </div>
  )
}

export default FrReact_9;