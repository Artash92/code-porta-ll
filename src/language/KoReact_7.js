import React from 'react';

function KoReact_7() {
  return (
    <div>
      <div className='ad-container'>  
          {/*  реклама  */}
        </div>

<h1>리덕스</h1>

<p>리덕스는 JavaScript 애플리케이션을 위한 상태 관리 라이브러리입니다. 이는 애플리케이션의 상태를 예측 가능한 방식으로 관리하여 데이터의 흐름을 이해하기 쉽게 합니다. 리덕스를 사용하면 애플리케이션 상태를 스토어라고 불리는 단일 객체에 저장하고 액션과 리듀서를 사용하여 해당 상태를 수정합니다.</p>

<p>작동 방식은 다음과 같습니다: 애플리케이션의 상태를 변경하려면 액션을 디스패치합니다. 액션은 애플리케이션에서 발생한 일을 설명하는 일반 JavaScript 객체입니다. 예를 들어, 목록에 새 항목을 추가하거나 사용자 프로필 정보를 업데이트하는 등의 작업을 수행할 수 있습니다.</p>

<p>리듀서는 현재 애플리케이션 상태와 액션을 가져와 새로운 상태를 반환하는 함수입니다. 리듀서는 순수 함수로, 즉 부작용이 없으며 주어진 입력에 대해 항상 동일한 출력을 반환합니다.</p>

<p>리액트-리덕스는 리덕스를 리액트와 통합하는 라이브러리입니다. 이를 사용하면 리액트 컴포넌트를 리덕스 스토어에 연결하여 애플리케이션 상태에 액세스하고 수정할 수 있습니다. 리액트-리덕스는 Provider와 connect라는 두 가지 주요 구성 요소를 제공합니다.</p>

<p>Provider 구성 요소는 전체 리액트 애플리케이션을 랩하는 데 사용됩니다. 이는 스토어 객체를 prop으로 가져와 애플리케이션의 모든 구성 요소에서 해당 스토어를 사용할 수 있도록 합니다.</p>

<p>1. 필요한 패키지 설치:</p>

<b>npm install redux react-redux</b>

<p>2. 리덕스 스토어 생성:</p>

<code>
  <p><span className='red'>import</span> {'{ createStore }'} <span className='red'>from</span> <span className='blue1'>'redux'</span>;</p>
  <p><span className='red'>import</span> rootReducer <span className='red'>from</span> <span className='blue1'>'./reducers'</span>; </p>
  <p><span className='red'>const</span> store = <span className='blueviole'>createStore</span>(rootReducer); </p>
</code>

<p>3. 리덕스 액션 생성:</p>

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

<p>4. 리덕스 리듀서 생성:</p>

<code>
<p><span className='red'>const</span> counterReducer = {'('}state = <span className='blue1'>0</span>, {"action) => { "}</p>

<p>&nbsp;<span className='red'>switch</span> (action.<span className='blue'>type</span>) {"{ "}</p>

<p>&nbsp;&nbsp;<span className='red'>case</span> <span className='blue1'>'INCREMENT'</span>:</p>

<p>&nbsp;&nbsp;&nbsp;<span className='red'>return</span>  state + <span className='blue1'>1</span>;</p>

<p>&nbsp;&nbsp;<span className='red'>case</span> <span className='blue1'>'DECREMENT'</span>:</p>

<p>&nbsp;&nbsp;&nbsp;<span className='red'>return</span> state - <span className='blue1'>1</span>; </p>

<p>&nbsp;&nbsp;<span className='red'>default</span>: </p>

<p>&nbsp;&nbsp;&nbsp;<span className='red'>return</span> state; </p>

<p>&nbsp;{" }"}</p>

<p>{"} "}</p>

<p><span className='red'>export default</span> counterReducer;</p>
</code>

<p>5. <b>connect</b> 함수를 사용하여 React 컴포넌트에 Redux를 연결합니다:</p>

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

<p>6. 모든 컴포넌트에서 Redux 스토어를 사용할 수 있도록 앱을 <b>Provider</b> 컴포넌트로 래핑하세요:</p>

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

    <p>이것은 React 애플리케이션에서 Redux 및 React-Redux를 사용하는 기본적인 예제입니다. 이것은 단지 빙산의 일각에 불과하며, Redux 및 해당 생태계에 대해 더 많이 배울 수 있습니다.</p>

    <p>React 애플리케이션에서 Redux를 사용할 때 몇 가지 주의할 사항이 있습니다:</p>

    <p>1. Redux 미들웨어: 미들웨어는 Redux 액션이 리듀서에 도달하기 전에 수정하거나 가로채는 방법입니다. 미들웨어는 로깅, 비동기 요청 등과 같은 작업에 사용될 수 있습니다. Redux의 인기있는 미들웨어 옵션으로는 <b>redux-thunk, redux-saga 및 redux-observable</b>이 있습니다.</p>

    <p>2. Redux 개발 도구: Redux 개발 도구는 Redux 스토어를 디버깅하고 검사하기 위한 유용한 UI를 제공하는 브라우저 확장 프로그램입니다. 액션 및 상태 변경을 검사하고 시간 여행 디버깅 기능도 제공합니다.</p>

    <p>3. Redux 셀렉터: 셀렉터는 Redux 스토어에서 특정 데이터 조각을 추출하는 함수입니다. 파생된 데이터를 계산하거나 데이터를 필터링하고 변환하는 데 사용될 수 있습니다. 셀렉터는 스토어의 형태에 대해 걱정하지 않고도 정확한 데이터를 제공하여 컴포넌트를 단순화하는 데 도움이 될 수 있습니다.</p>

    <p>4. Redux 덕스: 덕스는 특정 기능 또는 도메인에 대한 모든 관련 액션 유형, 액션 생성자 및 리듀서를 포함하는 모듈로 Redux 코드를 구성하기 위한 제안입니다. 이 접근 방식은 코드베이스를 단순화하고 유지하기 쉽게 만들 수 있습니다.</p>

    <p>이것들은 Redux를 사용할 때 살펴볼 수 있는 추가 주제 중 일부에 불과합니다. Redux 생태계에는 많은 다른 라이브러리와 도구가 있으므로 이를 배우고 프로젝트에 가장 적합한 것을 결정하는 데 시간을 투자하는 것이 중요합니다.</p>

    <b><p>* 번역기를 사용하여 작성된 텍스트입니다. 오류를 발견하시면 알려주시면 감사하겠습니다 *</p></b>
   
   <div className='ads-container'>  
   {/*  реклама  */}
  </div> 
    </div>
  )
}

export default KoReact_7;