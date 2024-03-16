import React from 'react';

function KoReact_9() {
  return (
    <div>
      <div className='ad-container'>  
          {/*  реклама  */}
        </div>
        
         <h1>Redux-Saga</h1>

      <p>Redux-saga는 비동기 요청 및 데이터 가져오기와 같은 부수 효과를 처리하기 위한 라이브러리입니다. generator 함수를 사용하여 비동기 작업의 흐름을 관리하고 모든 부수 효과를 처리하기 위한 중앙 집중식 장소를 제공하여 응용 프로그램 동작을 이해하고 테스트하기 쉽게 만듭니다.</p>

      <p>다음은 redux-saga를 사용하여 비동기 API 호출을 처리하는 예입니다:</p>

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

<p>이 예제에서는 세 가지 액션 유형 (FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS 및 FETCH_USERS_FAILURE), 세 가지 액션 생성자 (fetchUsersRequest, fetchUsersSuccess 및 fetchUsersFailure) 및 상태 업데이트를 처리하기 위한 리듀서 함수 (usersReducer)를 정의합니다.</p>

<p>또한 fetchUsers 및 usersSaga 두 개의 사가를 정의합니다. fetchUsers 사가는 axios를 사용하여 API 호출을 수행하고 호출이 성공 또는 실패하는지에 따라 fetchUsersSuccess 또는 fetchUsersFailure를 디스패치합니다. usersSaga 사가는 FETCH_USERS_REQUEST 액션을 수신하고 응답으로 fetchUsers 사가를 실행합니다.</p>

<p>마지막으로 리듀서 및 사가를 내보내어 Redux 스토어 설정에서 사용할 수 있도록합니다:</p>

<code>
<p><span className='red'>import</span> {"{ createStore, applyMiddleware }"} <span className='red'>from</span> <span className='blue1'>'redux'</span>;</p>

<p><span className='red'>import</span> {'createSagaMiddleware'} <span className='red'>from</span> <span className='blue1'>'redux-saga'</span>; </p>

<p><span className='red'>import</span> {"{ usersReducer, usersSaga }"} <span className='red'>from</span> <span className='blue1'>'./users'</span>;</p>

<p><span className='red'>const</span> sagaMiddleware = <span className='blueviole'>createSagaMiddleware</span>(); </p>

<p><span className='red'>const</span> store = <span className='blueviole'>createStore</span>(usersReducer, <span className='blueviole'>applyMiddleware</span>(sagaMiddleware)); </p>

<p>sagaMiddleware.<span className='blue'>run</span>(usersSaga);</p>

<p><span className='red'>export default</span> store;</p>
</code>

<p>이 설정에서는 사용자 리듀서를 사용하여 Redux 스토어를 생성하고 sagaMiddleware를 적용합니다. 그런 다음 sagaMiddleware.run을 사용하여 usersSaga를 실행합니다. 이렇게하면 사가가 활성화되어 응용 프로그램에서 액션을 수신 대기합니다.</p>

<b><p>* 번역기를 사용하여 작성된 텍스트입니다. 오류를 발견하시면 알려주시면 감사하겠습니다 *</p></b>
   
   <div className='ads-container'>  
   {/*  реклама  */}
  </div> 
    </div>
  )
}

export default KoReact_9;