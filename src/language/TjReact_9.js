import React from 'react';

function TjReact_9() {
  return (
    <div>
      <div className='ad-container'>  
          {/*  реклама  */}
        </div>
        
         <h1>Redux-Saga</h1>

    <p>Redux-saga китобхона барои коркарди таъсири тараф, ба монанди дархостҳои асинхронӣ ва гирифтани маълумот дар замимаҳои Redux мебошад. Он функсияҳои генераторро барои идора кардани ҷараёни амалиёти асинхронӣ истифода мебарад ва ҷои мутамарказро барои коркарди ҳама таъсироти номатлуб таъмин мекунад, ки мулоҳиза кардан ва санҷиши рафтори барномаро осонтар мекунад</p>

    <p>Ин ҷо як мисоли он аст, ки чӣ тавр шумо метавонед redux-saga-ро барои коркарди занги асинхронии API истифода баред:</p>


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

<p>Дар ин мисол, мо се намуди амал (FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS ва FETCH_USERS_FAILURE), се action creators (fetchUsersRequest, fetchUsersSuccess ва fetchUsersFailure) ва функсияи reducers -ро муайян мекунем. </p>

<p>Мо инчунин ду сагаро муайян мекунем: fetchUsers ва usersSaga. Сагаи fetchUsers эффекти зангро барои занги API бо истифода аз axios истифода мебарад ва вобаста ба муваффақ шудан ё ноком шудани занг fetchUsersSuccess ё fetchUsersFailure мефиристад. Сагаи usersSaga дар посух ба FETCH_USERS_REQUEST actions ва runs достони fetchUsers-ро гӯш мекунад.</p>

<p>Дар ниҳоят, мо ҳам редуктор ва ҳам сагаро содир мекунем, то онҳо дар танзимоти мағозаи Redux мо истифода шаванд:</p>

<code>
  <p><span className='red'>import</span> {"{ createStore, applyMiddleware }"} <span className='red'>from</span> <span className='blue1'>'redux'</span>;</p>

  <p><span className='red'>import</span> {'createSagaMiddleware'} <span className='red'>from</span> <span className='blue1'>'redux-saga'</span>; </p>

  <p><span className='red'>import</span> {"{ usersReducer, usersSaga }"} <span className='red'>from</span> <span className='blue1'>'./users'</span>;</p>

  <p><span className='red'>const</span> sagaMiddleware = <span className='blueviole'>createSagaMiddleware</span>(); </p>

  <p><span className='red'>const</span> store = <span className='blueviole'>createStore</span>(usersReducer, <span className='blueviole'>applyMiddleware</span>(sagaMiddleware)); </p>

  <p>sagaMiddleware.<span className='blue'>run</span>(usersSaga);</p>

  <p><span className='red'>export default</span> store;</p>
</code>

<p>Дар ин танзимот, мо бо usersReducer -и худ як мағозаи Redux эҷод мекунем ва sagaMiddleware -ро истифода мебарем. Сипас, мо userSaga-ро бо истифода аз sagaMiddleware.run иҷро мекунем. Ин кафолат медиҳад, ки достони мо фаъол аст ва дар замимаи мо actions -ро гӯш мекунад.</p>


<b><p>* Матн бо ёрии тарчумон навишта шудааст. Агар шумо хатое пайдо кунед, лутфан ба мо хабар диҳед *</p></b>
    
    <div className='ads-container'>  
  {/*  реклама  */}
</div>
    </div>
  )
}

export default TjReact_9;