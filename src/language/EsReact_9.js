import React from 'react';

function EsReact_9() {
  return (
    <div>
      <div className='ad-container'>  
          {/*  реклама  */}
        </div>
        
         <h1>Redux-Saga</h1>

    <p>Redux-saga es una biblioteca para manejar efectos secundarios, como solicitudes asíncronas y obtención de datos, en aplicaciones Redux. Utiliza funciones generadoras para gestionar el flujo de operaciones asíncronas y proporciona un lugar centralizado para manejar todos los efectos secundarios, lo que facilita el razonamiento y prueba del comportamiento de la aplicación</p>

    <p>Aquí tienes un ejemplo de cómo puedes usar redux-saga para manejar una llamada de API asíncrona:</p>


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

<p>En este ejemplo, definimos tres tipos de acción (FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS y FETCH_USERS_FAILURE), tres creadores de acción (fetchUsersRequest, fetchUsersSuccess y fetchUsersFailure) y una función reductora (usersReducer) para manejar las actualizaciones de estado.</p>

<p>También definimos dos sagas: fetchUsers y usersSaga. La saga fetchUsers utiliza el efecto call para hacer una llamada de API usando axios y despacha fetchUsersSuccess o fetchUsersFailure dependiendo de si la llamada tiene éxito o falla. La saga usersSaga escucha las acciones FETCH_USERS_REQUEST y ejecuta la saga fetchUsers en respuesta.</p>

<p>Finalmente, exportamos tanto el reductor como la saga para que puedan ser utilizados en nuestra configuración de la tienda Redux:</p>

<code>
<p><span className='red'>import</span> {"{ createStore, applyMiddleware }"} <span className='red'>from</span> <span className='blue1'>'redux'</span>;</p>

<p><span className='red'>import</span> {'createSagaMiddleware'} <span className='red'>from</span> <span className='blue1'>'redux-saga'</span>; </p>

<p><span className='red'>import</span> {"{ usersReducer, usersSaga }"} <span className='red'>from</span> <span className='blue1'>'./users'</span>;</p>

<p><span className='red'>const</span> sagaMiddleware = <span className='blueviole'>createSagaMiddleware</span>(); </p>

<p><span className='red'>const</span> store = <span className='blueviole'>createStore</span>(usersReducer, <span className='blueviole'>applyMiddleware</span>(sagaMiddleware)); </p>

<p>sagaMiddleware.<span className='blue'>run</span>(usersSaga);</p>

<p><span className='red'>export default</span> store;</p>
</code>

<p>En esta configuración, creamos una tienda Redux con nuestro usersReducer y aplicamos el sagaMiddleware. Luego ejecutamos usersSaga usando sagaMiddleware.run. Esto asegurará que nuestra saga esté activa y escuchando acciones en nuestra aplicación.</p>

<b><p>* Texto escrito con la ayuda de un traductor. Si encuentras un error, por favor avísanos *</p></b>
    <div className='ads-container'>  
  {/*  реклама  */}
</div>
    </div>
  )
}

export default EsReact_9;