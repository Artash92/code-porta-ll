import React from 'react';

function KoReact_3() {
  return (
    <div>
      <div className='ad-container'>  
          {/*  реклама  */}
        </div>
     
      <h1>리액트 이벤트</h1>

<p>리액트는 컴포넌트에서 이벤트를 처리하는 방법을 제공하는데, 바닐라 자바스크립트에서 이벤트를 처리하는 것과 유사합니다. 리액트에서는 on<b>[EventName] </b>구문을 사용하여 모든 JSX 요소에 이벤트 핸들러를 추가할 수 있습니다.</p>

<p>예를 들어, 리액트 컴포넌트에서 클릭 이벤트를 처리하고 싶은 버튼이 있다고 가정해 봅시다:</p>

<code>
  <p><span className='red'>function</span> <span className='blueviole'>MyButton</span>(props) {'{'} </p>

  <p><span className='red'>function</span> <span className='blueviole'>handleClick</span>() {'{'}</p>

  <p><span className='blue'>{"console.log"}</span>(<span className='blue1'>'버튼 클릭됨'</span>); </p>

  <p>{' }'}</p>

  <p><span className='red'>return</span> {'('}</p>

  <p>{'<'}<span className='green'>button</span> <span className='blue'>onClick</span>={'{handleClick}'}{'>'}클릭하세요{'</'}<span className='green'>button</span>{'>'}  </p>

  <p>&nbsp;{');'}</p>

  <p>{'} '}</p>
</code>

<p>이 예제에서는 <b>MyButton</b> 컴포넌트를 정의하고, 그 안에 <b>onClick</b> 속성을 <b>handleClick</b>이라는 함수로 설정한 버튼 요소를 포함합니다. 버튼이 클릭되면 <b>handleClick</b> 함수가 호출되고, 콘솔에 "버튼 클릭됨" 메시지가 기록됩니다.</p>

<p>화살표 함수를 사용하여 이벤트 핸들러 함수에 인수를 전달할 수도 있습니다. 예를 들어, 항목 목록을 버튼으로 렌더링하고 싶다고 가정해 봅시다:</p>

<code>
     <p><span className='red'>function</span> <span className='blueviole'>ItemList</span>(props) {'{'}</p>

    <p><span className='red'>const</span> items = props.<span className='blue'>items</span>; </p>

    <p><span className='red'>function</span> <span className='blueviole'>handleClick</span>(item) {'{'}</p>

    <p><span className='blue'>{'console.log'}</span>(<span className='blue1'>`항목 $</span><span className='blue1'>{'{item'}.<span className='blue'>id</span>{'}'}</span><span className='blue1'> 클릭됨`</span>); </p>

    <p>&nbsp;{'}'}</p>

    <p><span className='red'>const</span> buttonList = {'items'}.<span className='blue'>map</span>{'('}(item) {'=>'} </p>

    <p>{'<'}<span className='green'>button</span> <span className='blue1'>key</span>= {'{item'}.<span className='blue'>{'id}'}</span> <span className='blue'>onClick</span>={'{()'} {'=>'} <span className='blueviole'>handleClick</span>(item){'}'}{'>'}</p>

    <p>{'{item'}.<span className='blue'>{'name}'}</span></p>

    <p>{'</'}<span className='green'>button</span>{'>'}</p>

    <p>{' ); '}</p>

    <p><span className='red'>return</span> {'('}</p>

    <p>{'<'}<span className='green'>div</span>{'>'}</p>

    <p>{'{buttonList} '}</p>

    <p>{'</'}<span className='green'>div</span>{'>'}</p>

    <p>&nbsp;{');'}</p>

    <p>{'} '}</p>
 </code>
    
    <p>이 예제에서는 <b>ItemList</b> 컴포넌트를 정의하고, <b>items</b> prop을 가져옵니다. <b>handleClick</b> 함수를 정의하고, 해당 버튼이 클릭될 때 콘솔에 메시지를 기록하기 위해 <b>item</b> 인수를 사용합니다.</p>

    <p><b>map</b> 메서드를 사용하여 <b>{'<button>'}</b> 요소의 새 배열을 생성합니다. 각 요소는 <b>items</b> prop의 항목에 해당합니다. 각 <b>{'<button> '}</b> 요소의 <b>key</b> prop을 해당 항목의 <b>id</b>로 설정합니다. 이것은 리액트에서 업데이트를 최적화하기 위한 요구 사항입니다. 또한 버튼이 클릭될 때 <b>item</b> 객체를 <b>handleClick</b> 함수로 전달하기 위해 화살표 함수를 사용합니다.</p>

    <p>그런 다음 <b>{'<div>'}</b> 요소를 반환하고, 그 안에 <b>buttonList</b> 배열을 포함합니다.</p>

    <h5>React Events</h5>

<p className='blue1'>onKeyDown</p>

<p className='blue1'>onKeyPress </p>

<p className='blue1'>onKeyUp</p>

<p className='blue1'>onFocus</p>

<p className='blue1'>onBlur</p>

<p className='blue1'>onChange</p>

<p className='blue1'>onInput</p>

<p className='blue1'>onInvalid </p>

<p className='blue1'>onSubmit</p>

<p className='blue1'>onClick</p>

<p className='blue1'>onContextMenu</p>

<p className='blue1'>onDoubleClick</p>

<p className='blue1'>onDrag</p>

<p className='blue1'>onDragEnd</p>

<p className='blue1'>onDragEnter</p>

<p className='blue1'>onDragExit</p>

<p className='blue1'>onDragLeave</p>

<p><a href="https://react.dev/reference/react-dom/components/common#react-event-object" target='_blank' > 👉🏼 React https://react.dev/reference/react-dom/components/common#react-event-object</a> </p>

<b>클래스 컴포넌트에서의 React 상태</b>

<p>React에서도 클래스 컴포넌트를 사용하여 상태를 관리할 수 있습니다. 클래스 컴포넌트는 <b>React.Component</b> 클래스를 확장하고 구성 요소의 UI를 반환하는 <b>render</b> 메서드를 구현하는 JavaScript 클래스입니다.</p>

<p>다음은 상태를 관리하는 클래스 컴포넌트의 예입니다:</p>

<code>
   <p><span className='red'>import</span> React,{"{ Component }"} <span className='red'>from</span> 'react'; </p>

   <p> <span className='red'>class</span> Counter <span className='red'>extends</span> Component {'{'}</p>

   <p><span className='blue'>constructor</span>(props) {'{'}</p>

   <p>super (props);</p>

   <p><span className='red'>this</span>.<span className='blue'>state</span> = {'{'}<span className='blue'>count</span>: <span className='blue1'>0</span> {'}'};</p>

   <p><span className='red'>this</span>.<span className='blue'>handleClick</span> = <span className='red'>this</span>.<span className='blue'>handleClick</span>.<span className='blue'>bind</span>(<span className='red'>this</span>);</p>

   <p>&nbsp;{'}'}</p>

   <p><span className='blue'>handleClick</span>() {'{'}</p>

   <p><span className='red'>this</span>.<span className='blue'>setState</span>{'({'} <span className='blue'>count</span>: <span className='red'>this</span>.<span className='blue'>state</span>.<span className='blue'>count</span> + <span className='blue1'>1</span>{' })'}; </p>

   <p>{'}'}</p>

   <p><span className='blue'>render</span>() {'{'}</p>

   <p><span className='red'>return</span> {'('}</p>

   <p>{'<'}<span className='green'>div</span>{'>'}</p>

   <p>{'<'}<span className='green'>p</span>{'>'}당신은 {'{'}<span className='red'>this</span>.<span className='blue'>state</span>.<span className='blue'>count</span>{'}'} 번 클릭했습니다.{'</'}<span className='green'>p</span>{'>'}</p>

   <p>{'<'}<span className='green'>button</span> <span className='blue'>onClick</span>={'{'}<span className='red'>this</span>.<span className='blue'>handleClick</span>{'}'}{'>'}클릭 해주세요{'</'}<span className='green'>button</span>{'>'}</p>

   <p>{'</'}<span className='green'>div</span>{'>'}</p>

   <p>&nbsp;&nbsp;{');'}</p>

   <p>&nbsp;{'}'}</p>

   <p>{'}'}</p>
</code>

<p>이 예제에서는 <b>Counter</b> 클래스를 정의하고 <b>React.Component</b>를 확장합니다. 클래스 내에서는 <b>count</b> 속성이 0인 객체로 구성된 초기 상태를 설정하는 생성자를 정의합니다. 또한 <b>bind</b>를 사용하여 <b>handleClick</b> 메서드를 구성 요소 인스턴스에 바인딩합니다.</p>

<p><b>handleClick</b> 메서드는 <b>count</b> 속성이 1씩 증가된 새 객체를 전달하여 this.setState를 호출하여 구성 요소의 상태를 업데이트합니다.</p>

<p><b>render</b> 메서드는 구성 요소의 UI를 반환합니다. 이 UI에는 현재 <b>count</b> 값을 표시하는 <b>{'<p>'}</b> 요소와 클릭할 때 <b>handleClick</b>을 호출하는 버튼이 포함되어 있습니다.</p>

<p>함수 구성 요소와 마찬가지로 상태를 직접 수정하지 않는 것이 중요합니다. 대신 항상 상태를 업데이트하기 위해 <b>this.setState</b>를 사용하세요.</p>

<p>React에서는 클래스 구성 요소가 아직 지원되지만, 훅의 도입으로 특히 함수 구성 요소가 일반적으로 선호됩니다. 그러나 클래스 구성 요소를 이해하는 것은 여전히 오래된 코드베이스를 유지 및 업데이트하는 데 중요합니다.</p>

<b>React 라이프사이클</b>

<p>React에서 구성 요소는 존재하는 동안 거치는 다양한 단계를 설명하는 라이프사이클이 있습니다. React 라이프사이클을 이해하는 것은 견고한 React 애플리케이션을 구축하고 유지하는 데 필수적입니다.</p>

<p>다음은 React 구성 요소 라이프사이클 메서드의 간단한 개요입니다. 단계별로 그룹화되어 있습니다.</p>

<h4>마운팅 단계:</h4>

<p><b>{'constructor()'}</b>: 구성 요소가 초기화될 때 호출됩니다.</p>

<p><b>{'static getDerivedStateFromProps()'}</b>: 구성 요소가 초기화될 때 호출되며 새로운 속성을 받을 때 다시 호출됩니다. 거의 사용되지 않습니다.</p>

<p><b>{'render()'}</b>: 구성 요소를 렌더링해야 할 때마다 호출됩니다.</p>

<p><b>{'componentDidMount()'}</b>: 구성 요소가 처음 렌더링된 후에 호출됩니다.</p>

<h4>업데이팅 단계:</h4>

<p><b>{'static getDerivedStateFromProps()'}</b>: 구성 요소가 새로운 속성을 받을 때 호출됩니다.</p>

<p><b>{'shouldComponentUpdate()'}</b>: 구성 요소가 다시 렌더링되기 전에 호출됩니다. 업데이트를 취소할 수 있습니다.</p>

<p><b>{'render()'}</b>: 구성 요소를 렌더링해야 할 때마다 호출됩니다.</p>

<p><b>{'getSnapshotBeforeUpdate()'}</b>: 구성 요소가 업데이트되기 전에 호출됩니다. 거의 사용되지 않습니다.</p>

<p><b>{'componentDidUpdate()'}</b>: 구성 요소가 업데이트된 후에 호출됩니다.</p>

<h4>언마운팅 단계:</h4>

<p><b>{'componentWillUnmount()'}</b>: 구성 요소가 DOM에서 제거되려고 할 때 호출됩니다.</p>

<p>다음은 라이프사이클 메서드를 보여주는 예제입니다:</p>


<code>
  <p><span className='red'>import</span> React,{"{ Component }"} <span className='red'>from</span> 'react'; </p>
  
  <p><span className='red'>class</span> LifecycleDemo <span className='red'>extends</span> Component {'{'}</p>

  <p><span className='blue'>constructor</span>(props) {'{'} </p>

  <p>{'super(props);'}</p>  

  <p><span className='red'>{'this'}</span>.<span className='blue'>state</span>= {'{'}<span className='blue'>count</span>: <span className='blue1'>0</span> {'}'};</p>

  <p>{"console"}.<span className='blue'>log</span>(<span className='blue1'>'constructor'</span>);</p>

  <p>{'}'}</p>

  <p><span className='red'>static</span> <span className='blue'>getDerivedStateFromProps</span>(props, state) {'{'}</p>

  <p>{"console"}.<span className='blue'>log</span>('<span className='blue1'>getDerivedStateFromProps</span>');</p>

  <p><span className='red'>return null</span>;</p>

  <p>{'}'}</p>

  <p><span className='blue'>componentDidMount</span>() {'{'}</p>

  <p>{"console"}.<span className='blue'>log</span>(<span className='blue1'>'componentDidMount'</span>); </p>

  <p>{'}'}</p>

  <p><span className='blue'>shouldComponentUpdate</span>(nextProps, nextState) {'{'}</p>

  <p>{"console"}.<span className='blue'>log</span>(<span className='blue1'>'shouldComponentUpdate'</span>);</p>

  <p><span className='red'>return</span> <span className='blue'>true</span>;</p>

  <p>{'}'}</p>

  <p><span className='blue'>getSnapshotBeforeUpdate</span>(prevProps, prevState) {'{'}</p>

  <p>{"console"}.<span className='blue'>log</span>(<span className='blue1'>'getSnapshotBeforeUpdate'</span>);</p>

  <p><span className='red'>return null</span>;</p>

  <p>{'}'}</p>

  <p><span className='blue'>componentDidUpdate</span>(prevProps, prevState, snapshot) {'{'}</p>

  <p>{"console"}.<span className='blue'>log</span>(<span className='blue1'>'componentDidUpdate'</span>); </p>

  <p>{'}'}</p>

  <p><span className='blue'>componentWillUnmount</span>() {'{'} </p>

  <p>{"console"}.<span className='blue'>log</span>(<span className='blue1'>'componentWillUnmount'</span>); </p>

  <p>{'}'}</p>

  <p> <span className='blue'>handleClick</span> = () {'=>'} {'{'}</p>

  <p><span className='red'>this</span>.<span className='blue'>setState</span>{'({'} <span className='blue'>count</span>: <span className='red'>this</span>.<span className='blue'>state</span>.<span className='blue'>count</span> + <span className='blue1'>1</span> {'})'};</p>

  <p>{'}; '}</p>

  <p><span className='blue'>render</span>() {'{'} </p>

  <p>{"console"}.<span className='blue'>log</span>(<span className='blue1'>'render'</span>);</p>

  <p><span className='red'>return</span> {'('}</p>

  <p>{'<'}<span className='green'>div</span>{'>'}</p>

  <p>{'<'}<span className='green'>p</span>{'>'}당신은{'{'}<span className='red'>this</span>.<span className='blue'>state</span>.<span className='blue'>count</span>{'}'} 번 클릭했습니다{'</'}<span className='green'>p</span>{'>'}</p>

  <p>{'<'}<span className='green'>button</span> <span className='blue'>onClick</span>={'{'}<span className='red'>this</span>.<span className='blue'>handleClick</span>{'}>'}클릭 해주세요{'</'}<span className='green'>button</span>{'>'}</p>
  
  <p>{'</'}<span className='green'>div</span>{'>'}</p>

  <p>&nbsp;&nbsp;{');'}</p>

  <p>&nbsp;{'}'}</p>

  <p>{'}'}</p>
</code>

<p>이 예제에서는 <b>LifecycleDemo</b> 클래스를 정의하여 구성 요소의 라이프사이클 각 단계에서 콘솔에 메시지를 기록합니다. 또한 구성 요소의 상태를 업데이트하는 <b>handleClick</b> 메서드를 정의합니다.</p>

<p>구성 요소가 처음으로 마운트될 때 다음 메서드가 순서대로 호출됩니다: <b>constructor, getDerivedStateFromProps, render, 그리고 componentDidMount</b>. 구성 요소의 상태가 변경될 때마다 <b>shouldComponentUpdate, render, 그리고 componentDidUpdate</b> 메서드가 순서대로 호출됩니다.</p>

<p>구성 요소가 마운트 해제될 때 <b>componentWillUnmount</b> 메서드가 호출됩니다.</p>

<p>React 구성 요소 라이프사이클을 이해하는 것이 중요합니다. 이를 통해 구성 요소를 최적화하고 메모리 누수나 무한 루프와 같은 일반적인 함정을 피할 수 있습니다. 처음에는 압도적으로 느껴질 수 있지만, 연습을 통해 더 익숙해질 것입니다.</p>


<b><p>* 번역기를 사용하여 작성된 텍스트입니다. 오류를 발견하시면 알려주시면 감사하겠습니다 *</p></b>
   
   <div className='ads-container'>  
   {/*  реклама  */}
  </div>
    </div>
  )
}

export default KoReact_3;