import React from 'react';

function PtReact_9() {
  return (
    <div>
      <div className='ad-container'>  
          {/*  реклама  */}
        </div>
        
         <h1>Redux-Saga</h1>

    <p>Redux-saga é uma biblioteca para lidar com efeitos colaterais, como solicitações assíncronas e recuperação de dados, em aplicativos Redux. Ele usa funções geradoras para gerenciar o fluxo de operações assíncronas e fornece um local centralizado para lidar com todos os efeitos colaterais, tornando mais fácil entender e testar o comportamento da aplicação.</p>

    <p>Aqui está um exemplo de como você pode usar o redux-saga para lidar com uma chamada de API assíncrona:</p>


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

<p>Neste exemplo, definimos três tipos de ação (FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS e FETCH_USERS_FAILURE), três criadores de ação (fetchUsersRequest, fetchUsersSuccess e fetchUsersFailure) e uma função redutora (usersReducer) para lidar com atualizações de estado.</p>

<p>Também definimos duas sagas: fetchUsers e usersSaga. A saga fetchUsers usa o efeito call para fazer uma chamada de API usando axios e despacha fetchUsersSuccess ou fetchUsersFailure dependendo se a chamada é bem-sucedida ou falha. A saga usersSaga escuta as ações FETCH_USERS_REQUEST e executa a saga fetchUsers em resposta.</p>

<p>Finalmente, exportamos tanto o redutor quanto a saga para que possam ser usados em nossa configuração de loja Redux:</p>

<code>
<p><span className='red'>import</span> {"{ createStore, applyMiddleware }"} <span className='red'>from</span> <span className='blue1'>'redux'</span>;</p>

<p><span className='red'>import</span> {'createSagaMiddleware'} <span className='red'>from</span> <span className='blue1'>'redux-saga'</span>; </p>

<p><span className='red'>import</span> {"{ usersReducer, usersSaga }"} <span className='red'>from</span> <span className='blue1'>'./users'</span>;</p>

<p><span className='red'>const</span> sagaMiddleware = <span className='blueviole'>createSagaMiddleware</span>(); </p>

<p><span className='red'>const</span> store = <span className='blueviole'>createStore</span>(usersReducer, <span className='blueviole'>applyMiddleware</span>(sagaMiddleware)); </p>

<p>sagaMiddleware.<span className='blue'>run</span>(usersSaga);</p>

<p><span className='red'>export default</span> store;</p>
</code>

<p>Nesta configuração, criamos uma loja Redux com nosso usersReducer e aplicamos o sagaMiddleware. Em seguida, executamos o usersSaga usando sagaMiddleware.run. Isso garantirá que nossa saga esteja ativa e ouvindo as ações em nossa aplicação.</p>
   
    <b><p>* Texto escrito com a ajuda de um tradutor. Se encontrar algum erro, por favor, avise-nos *</p></b>
    
    <div className='ads-container'>  
      {/*  реклама  */}
      </div>
    </div>
  )
}

export default PtReact_9;