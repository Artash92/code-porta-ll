import React from 'react';

function KoReact_8() {
  return (
    <div>
      <div className='ad-container'>  
          {/*  реклама  */}
        </div>
      
      <h1>Redux Thunk</h1>
      
      <p>Redux Thunk는 Redux를 위한 미들웨어 라이브러리로, Redux 스토어와 상호 작용하는 비동기 논리를 작성할 수 있게 합니다. 이를 통해 API 요청 또는 다른 부수 효과와 같은 비동기 코드를 포함하는 액션을 디스패치할 수 있습니다. 이를 위해 액션 생성자를 또 다른 함수를 반환하는 함수로 감싸는 방식으로 구현합니다.</p>

      <p>다음은 Redux Thunk를 React 애플리케이션에서 사용하는 예시입니다:</p>


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

    <p>위의 예제에서는 세 개의 액션 생성자를 정의합니다: <b>fetchUserRequest, fetchUserSuccess, 그리고 fetchUserError</b>. 또한 액션 객체 대신 함수를 반환하는 <b>fetchUser</b> 액션 생성자를 정의합니다. 이 함수는 Redux 스토어의 <b>dispatch</b> 함수인 <b>dispatch</b>를 인수로 취합니다.</p>

    <p><b>fetchUser</b> 함수 내부에서는 <b>isLoading</b> 상태를 <b>true</b>로 설정하는 <b>fetchUserRequest</b> 액션을 디스패치합니다. 그런 다음 Axios를 사용하여 API 호출을 수행하고 API 응답에 따라 <b>fetchUserSuccess 또는 fetchUserError</b> 액션을 디스패치합니다. 이러한 액션들은 각각 검색된 데이터 또는 오류 메시지로 Redux 스토어를 업데이트합니다.</p>

    <p>컴포넌트에서 이 액션 생성자를 사용하려면 다음과 같이 가져와서 <b>dispatch</b>에 전달할 수 있습니다:</p>

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

<p>위의 예에서는 리액트 리덕스 라이브러리에서 useDispatch와 useSelector 훅을 사용하여 Redux 스토어와 상호 작용합니다. useEffect 훅에서 fetchUser 액션 생성자를 디스패치하는데, 이는 컴포넌트가 마운트될 때 호출됩니다. 또한 useSelector를 사용하여 Redux 스토어에서 사용자 데이터 및 isLoading 및 error 플래그와 같은 관련 데이터를 추출합니다.</p>

<p>전반적으로 Redux Thunk는 Redux를 위한 유용한 미들웨어 라이브러리로, Redux 스토어와 상호 작용하는 비동기 논리를 작성할 수 있습니다. 이를 통해 코드를 단순화하고 리액트 애플리케이션에서 비동기 동작을 이해하기 쉽게 할 수 있습니다.</p>

<h3>Redux-Observable</h3>

<p>Redux-Observable은 Redux를 위한 미들웨어로, 리덕스 애플리케이션에서 반응형 프로그래밍을 사용할 수 있게 합니다. 이는 RxJS를 사용하여 선언적이고 조합 가능하며 테스트하기 쉬운 방식으로 복잡한 비동기 작업 및 이벤트를 처리할 수 있습니다.</p>

<p>Redux-Observable을 사용하면 개발자들은 특정 액션을 감시하고 그에 따라 새로운 액션 스트림으로 반응하는 "epics"을 정의할 수 있습니다. 이러한 epics은 리액티브 함수로, 이벤트 스트림을 받아들이고 선언적인 방식으로 변형, 필터링 또는 병합할 수 있는 함수입니다.</p>

<p>다음은 Redux-Observable을 사용하는 예시입니다:</p>

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

<p>이 예제에서는 'PING' 유형의 액션을 감시하고 그것에 반응하여 서버에 ping하는 <b>pingEpic</b>이라는 epic을 정의합니다. 요청이 성공하면 응답 페이로드와 함께 'PONG' 유형의 액션을 디스패치합니다. 요청이 실패하면 오류 메시지를 페이로드로 하는 'PING_ERROR' 유형의 액션을 디스패치합니다.</p>

<p>그런 다음 모든 epics을 단일 <b>rootEpic</b>으로 결합하고 <b>createEpicMiddleware()</b>의 인스턴스를 만들어 Redux 스토어에서 미들웨어로 사용합니다. 마지막으로 미들웨어를 스토어에 적용하고 <b>epicMiddleware.run(rootEpic)</b>을 사용하여 root epic을 실행합니다.</p>

<p>전반적으로 Redux-Observable은 Redux 애플리케이션에서 복잡한 비동기 작업과 이벤트를 처리하는 강력한 도구입니다. 반응형 프로그래밍 개념을 사용하여 비동기 동작을 유연하고 선언적으로 관리할 수 있는 방법을 제공합니다.</p>

<b><p>* 번역기를 사용하여 작성된 텍스트입니다. 오류를 발견하시면 알려주시면 감사하겠습니다 *</p></b>
   
   <div className='ads-container'>  
   {/*  реклама  */}
  </div> 
    </div>
  )
}

export default KoReact_8;