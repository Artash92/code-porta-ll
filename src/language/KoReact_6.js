import React from 'react';

function KoReact_6() {
  return (
    <div>
      <div className='ad-container'>  
          {/*  реклама  */}
        </div>

      <h1>리액트 Refs</h1>

<p>리액트에서 <b>ref</b>는 렌더링된 요소의 기본 DOM 노드 또는 리액트 컴포넌트 인스턴스에 액세스하는 방법입니다. ref를 사용하여 컴포넌트의 특정 속성이나 메소드에 액세스하거나 그 동작을 수정할 수 있습니다.</p>

<p>다음은 리액트에서 ref를 만드는 방법의 예시입니다:</p>

<code>
  <p><span className='red'>import</span>  React, {'{ useRef }'} <span className='red'>from</span> <span className='blue1'>'react'</span>;  </p>

  <p><span className='red'>function</span> <span className='blueviole'>TextInput</span>{'() {'}</p>

  <p>&nbsp;<span className='red'>const</span> inputRef = <span className='blueviole'>useRef</span>(<span className='red'>null</span>); </p> 

  <p>&nbsp;<span className='red'>const</span> {'handleClick = () => {'}</p>

  <p> inputRef.<span className='blue'>current</span>.<span className='blue'>focus</span>();</p>

  <p>{' };'}</p>

  <p>&nbsp;<span className='red'>return</span> {'('}</p>

  <p>{'<'}<span className='green'>div</span>{'>'}</p>

  <p>&nbsp;{'<'}<span className='green'>input</span> <span className='blue'>type</span>=<span className='blue1'>"text"</span> <span className='blue'>ref</span>={'{inputRef} />'}</p>

  <p>&nbsp;{'<'}<span className='green'>button</span> <span className='blue'>onClick</span>={'{handleClick}>'}Focus Input{'</'}<span className='green'>button</span>{'>'}</p>

  <p>{'</'}<span className='green'>div</span>{'>'}</p>

  <p>&nbsp;{' );'}</p>

  <p>{'}'}</p>
</code>

<p>이 예시에서는 useRef 훅을 사용하여 ref를 만듭니다. 그런 다음 ref를 ref 속성을 사용하여 input 요소로 전달합니다.</p>

<p>또한, ref의 current 속성을 사용하여 input 요소의 focus 메소드를 호출하는 handleClick 함수를 만듭니다. 이렇게 하면 사용자가 "Focus Input" 버튼을 클릭할 때 입력에 포커스를 설정할 수 있습니다.</p>

<p>전반적으로 ref를 사용하면 리액트에서 컴포넌트에 액세스하고 조작하는 강력한 도구가 될 수 있습니다. 그러나 이를 사용할 때는 신중하게 사용하고 명령형 코드에 너무 의존하지 않도록 주의해야 합니다. 왜냐하면 이렇게 하면 코드를 이해하고 유지 관리하기가 더 어려워질 수 있기 때문입니다.</p>

<b>이벤트 에미터</b>

<p>이벤트 에미터는 프로그램의 객체들이 이벤트를 트리거하고 처리함으로써 서로 통신할 수 있는 디자인 패턴입니다. 간단히 말해, 이벤트 에미터는 프로그램 내에서 메시지를 브로드캐스트하고 받는 메커니즘입니다.</p>

<p>자바스크립트에서 EventEmitter 클래스는 이러한 패턴을 구현하는 방법을 제공하는 내장 모듈입니다. 다음은 Node.js에서 EventEmitter를 사용하는 예시입니다:</p>

<code>
  <p><span className='red'>const</span> EventEmitter = <span className='blueviole'>require</span>(<span className='blue1'>'events'</span>); </p>

  <p><span className='red'>class</span> MyEmitter <span className='red'>extends</span> EventEmitter {"{}"}</p>

  <p><span className='red'>const</span> myEmitter = <span className='red'>new</span> MyEmitter(); </p>

  <p>myEmitter.<span className='blue'>on</span>{'('}<span className='blue1'>'event'</span>, (arg){" => {"}</p>

  <p> console.<span className='blue'>log</span>(<span className='blue1'>'Event triggered with argument:'</span>, arg); </p>

  <p>{"});"}</p>

  <p> myEmitter.<span className='blue'>emit</span>(<span className='blue1'>'event', 'Hello, world!'</span>); </p>
</code>

<p>이 예시에서는 EventEmitter 클래스를 확장하는 MyEmitter 클래스를 만듭니다. 그런 다음 이 클래스의 인스턴스를 만들고, on 메소드를 사용하여 event 이벤트에 대한 리스너를 정의합니다. 마지막으로, event 이벤트를 발생시키고 문자열 인수를 전달하여 리스너를 트리거하고 콘솔에 인수를 기록합니다.</p>

<p>전반적으로, 이벤트 에미터를 사용하면 프로그램의 다른 부분들이 서로 긴밀하게 결합되지 않고도 통신할 수 있는 pub-sub 패턴을 구현하는 유용한 방법이 될 수 있습니다. 그러나 이 패턴을 신중하게 사용하고 이벤트에 너무 의존하지 않도록 주의해야 합니다. 그렇지 않으면 코드를 이해하고 디버그하기가 어려워질 수 있습니다.</p>

<p><b>리액트</b>에서는 응용 프로그램의 다른 컴포넌트 간에 통신하는 데 이벤트 에미터 패턴을 사용할 수 있습니다. 이는 서로 직접적으로 관련되지 않은 컴포넌트 간에 데이터를 전달하거나 액션을 트리거하는 데 유용할 수 있습니다.</p>

<p>리액트에서 이벤트 에미터 패턴을 구현하는 한 가지 방법은 eventemitter3 또는 mitt와 같은 서드파티 라이브러리를 사용하는 것입니다. 이러한 라이브러리는 이벤트를 만들고 구독하는 간단한 API를 제공하며, 클래스 컴포넌트 및 훅을 사용하는 함수형 컴포넌트 모두에서 사용할 수 있습니다.</p>

<p>다음은 리액트 컴포넌트에서 eventemitter3를 사용하는 예시입니다:</p>

<code>
  <p><span className='red'>import</span> React, {"{ useEffect }"} <span className='red'>from</span> <span className='blue1'>'react'</span>; </p>

  <p><span className='red'>import</span> EventEmitter <span className='red'>from</span> <span className='blue1'>'eventemitter3'</span>;  </p>

  <p>&nbsp;<span className='red'>const</span>  emitter = <span className='red'>new</span> EventEmitter(); </p>

  <p><span className='red'>function</span> <span className='blueviole'>ComponentA</span>() {"{"}</p>

  <p>&nbsp;<span className='blueviole'>useEffect</span>{"(() => { "}</p>

  <p>&nbsp;&nbsp;emitter.<span className='blue'>emit</span>{'('}<span className='blue1'>'eventA'</span>, {'{'} <span className='blue'>data</span>: <span className='blue1'>'Hello from ComponentA'</span> {'})'}; </p>

  <p>{"}, []);"}</p>

  <p>&nbsp;&nbsp;<span className='red'>return</span> {'<'}<span className='green'>div</span>{'>'}ComponentA{'</'}<span className='green'>div</span>{">; "}</p>

  <p>{"} "}</p>

  <p><span className='red'>function</span> <span className='blueviole'>ComponentB</span>{"() {"}</p>

  <p>&nbsp;<span className='blueviole'>useEffect</span>{"(() => {"}</p>

  <p>&nbsp;&nbsp;emitter.<span className='blue'>on</span>(<span className='blue1'>'eventA'</span>, handleEventA); </p>

  <p>&nbsp;&nbsp;<span className='red'>return</span>  () {'=>'} emitter.<span className='blue'>off</span>(<span className='blue1'>'eventA'</span>, handleEventA);</p>

  <p>{" }, []);"}</p>

  <p>&nbsp;<span className='red'>const</span>  handleEventA = (payload) {"=> {"}</p>

  <p>&nbsp;&nbsp;{'console.'}<span className='blue'>log</span>(<span className='blue1'>'Received eventA:'</span>, payload.<span className='blue'>data</span>);</p>

  <p>{" }; "}</p>

  <p>&nbsp;&nbsp;<span className='red'>return</span> {'<'}<span className='green'>div</span>{'>'}ComponentB{'</'}<span className='green'>div</span>{">; "}</p>

  <p>{"}"}</p>
</code>

<p>이 예에서는 <b>EventEmitter</b>라고 불리는 인스턴스를 만듭니다. <b>ComponentA</b>에서는 <b>useEffect</b> 훅을 사용하여 일부 데이터와 함께 <b>eventA</b>라는 이벤트를 발생시킵니다. <b>ComponentB</b>에서는 <b>useEffect</b> 훅을 사용하여 <b>eventA</b> 이벤트를 구독하고, <b>handleEventA</b>라는 콜백 함수를 정의하여 데이터를 콘솔에 기록합니다.</p>

<p>ComponentA가 마운트될 때 일부 데이터와 함께 eventA 이벤트를 발생시킵니다. ComponentB가 마운트되면 eventA 이벤트를 구독하고 해당 이름의 이벤트를 청취하기 시작합니다. eventA가 발생하면 데이터와 함께 handleEventA가 호출되어 메시지를 콘솔에 기록합니다.</p>

<p>전반적으로 React에서 이벤트 발생기 패턴을 사용하면 서로 직접적으로 관련이 없는 구성 요소 간의 통신을 구현하는 유용한 방법일 수 있습니다. 그러나 이 패턴을 신중하게 사용하고 이벤트에 지나치게 의존하지 않도록하는 것이 중요합니다. 그렇지 않으면 코드를 이해하고 디버그하기가 더 어려워질 수 있습니다.</p>

<h4>React 애니메이션</h4>

<p>React에서는 다양한 기술을 사용하여 구성 요소에 애니메이션을 추가할 수 있습니다. 애니메이션을 추가하면 UI가 더 매력적이고 변경 사항이 있을 때 사용자에게 시각적 피드백을 제공할 수 있습니다.</p>

<p>React에서 애니메이션을 구현하는 인기있는 방법 중 하나는 CSS 전환 또는 애니메이션을 사용하는 것입니다. CSS 클래스를 구성 요소에 추가하여 이러한 애니메이션을 트리거하고, 구성 요소의 상태에 따라 클래스를 토글하는 React의 <b>className</b> 속성을 사용할 수 있습니다.</p>

<p>버튼을 클릭할 때 CSS 전환을 사용하여 버튼을 애니메이션화하는 방법에 대한 예제는 다음과 같습니다:</p>

<code>
  <p><span className='red'>import</span> {'React, { useState }'} <span className='red'>from</span> <span className='blue1'>'react'</span>;</p> 

  <p><span className='red'>import</span>  <span className='blue1'>'./Button.css'</span>;</p>

  <p><span className='red'>function</span> <span className='blueviole'>Button</span>{"() {"}</p>

  <p>&nbsp;<span className='red'>const</span>  {"[isClicked, setIsClicked]"} = <span className='blueviole'>useState</span>(<span className='blue1'>false</span>); </p>

  <p>&nbsp;<span className='red'>const</span> {"handleClick = () => { "}</p>

  <p><span className='blueviole'>setIsClicked</span>(<span className='blue1'>true</span>); </p>

  <p><span className='blueviole'>setTimeout</span>{"(() => "}<span className='blueviole'>setIsClicked</span>(<span className='blue1'>false</span>), <span className='blue1'>1000</span>{')'};</p>

  <p>{"};"}</p>

  <p>&nbsp;<span className='red'>return</span> {"("}</p>

  <p>{'<'}<span className='green'>button</span> <span className='blue'>className</span>={'{'}<span className='blue1'>`button {'${'}</span>isClicked ? <span className='blue1'>'clicked'</span> : <span className='blue1'>''{'}`'}</span>{'}'} <span className='blue'>onClick</span>={'{handleClick}>'}</p>

  <p>&nbsp;{"Click me! "}</p>

  <p>{"</"}<span className='green'>button</span>{">"}</p>

  <p>{"); "}</p>

  <p>{" }"}</p>
</code>

<p>이 예에서는 <b>Button</b>이라는 구성 요소를 정의하고 <b>useState</b> 훅을 사용하여 버튼이 클릭되었는지 여부를 추적합니다. 버튼이 클릭되면 <b>isClicked</b> 상태를 <b>true</b>로 설정하여 버튼에 <b>clicked</b> 클래스를 추가합니다. 그런 다음 1초 후에 <b>clicked</b> 클래스를 제거하는 <b>setTimeout</b>을 사용하여 원래 상태로의 전환을 트리거합니다.</p>

<p>또한 <b>Button.css</b>라는 CSS 파일을 정의하여 버튼 및 클릭된 <b>class</b>의 스타일을 정의합니다:</p>

<code>
  <p>{'.button {'}</p>

  <p>&nbsp;&nbsp;<span className='blue'>background-color</span>: <span className='blue1'>blue</span>; </p>

  <p>&nbsp;&nbsp;<span className='blue'>color</span>: <span className='blue1'>white</span>;</p>

  <p>&nbsp;&nbsp;<span className='blue'>padding</span>: 10<span className='blue1'>px</span> 20<span className='blue1'>px</span>; </p>

  <p>&nbsp;&nbsp;<span className='blue'>border</span>: <span className='blue1'>none</span>;</p>

  <p>&nbsp;&nbsp;<span className='blue'>border-radius</span>: 5<span className='blue1'>px</span>;</p>

  <p>&nbsp;&nbsp;<span className='blue'>transition</span>: <span className='blue1'>background-color</span> 0.5<span className='blue1'>s</span>; </p>

  <p>{'}'}</p>

  <p>{'.clicked {'}</p>

  <p>&nbsp;&nbsp;<span className='blue'>background-color</span>: <span className='blue1'>red</span>; </p>

  <p>{'}'}</p>
</code>

<p>이 CSS 파일에서는 버튼에 대한 스타일을 정의하고 버튼 클래스에 <b>transition</b> 속성을 지정하여 <b>background-color</b> 속성의 변경 사항을 애니메이션화합니다. 또한, 적용되었을 때 <b>background-color</b>를 빨간색으로 변경하는 <b>clicked</b> 클래스를 정의합니다.</p>

<p>리액트에서 애니메이션을 구현하는 또 다른 방법은 <b>react-spring</b>이나 <b>framer-motion</b>과 같은 서드파티 라이브러리를 사용하는 것입니다. 이러한 라이브러리들은 복잡한 애니메이션을 만들기 위한 더 유연한 API를 제공하며, 고급 사용 사례에 유용할 수 있습니다.</p>

<p><b>react-transition-group</b>은 리액트용 서드파티 라이브러리로, 구성 요소에 CSS 전환과 애니메이션을 쉽게 추가할 수 있습니다. 이 라이브러리는 전환의 수명주기를 관리하기 위한 구성 요소 및 API 세트를 제공하여 요소의 마운트 및 언마운트, 클래스 추가 및 제거, 애니메이션 지연 등을 처리합니다.</p>

<b>{'npm install react-transition-group'}</b>

<p><b>react-transition-group</b>의 핵심 구성 요소는 <b>Transition, CSSTransition, 그리고 TransitionGroup</b>입니다. 각 구성 요소에 대한 간단한 개요는 다음과 같습니다:</p>

<p>• <b>Transition</b>: 이 구성 요소는 전환의 기본 수명주기를 정의하며 진입, 진입 완료, 나가는 중, 나갔음 상태를 포함합니다. 이 구성 요소를 사용하여 전환을 트리거할 수 있습니다.</p>

<p>• <b>CSSTransition</b>: 이 구성 요소는 <b>Transition</b> 구성 요소를 확장하여 CSS 전환과 애니메이션을 지원합니다. 전환의 다른 단계 중에 구성 요소에 적용할 CSS 클래스를 지정할 수 있습니다. (예: <b>enter, enter-active, exit, exit-active</b>)</p>

<p>• <b>TransitionGroup</b>: 이 구성 요소는 <b>Transition</b> 또는 <b>CSSTransition</b> 구성 요소 집합을 관리하는 데 사용됩니다. 구성 요소의 마운트 및 언마운트를 추적하고 각 구성 요소에 다른 전환 효과를 적용할 수 있습니다.</p>

<p><b>react-transition-group</b>을 사용하여 컴포넌트를 마운트할 때 컴포넌트에 페이드 인 애니메이션을 추가하는 예제는 다음과 같습니다:</p>

<code>
  <p><span className='red'>import</span>  {'React, { useState }'} <span className='red'>from</span> <span className='blue1'>'react'</span>; </p>

  <p><span className='red'>import</span>  {'{ CSSTransition }'} <span className='red'>from</span> <span className='blue1'>'react-transition-group'</span>;</p>

  <p><span className='red'>import</span>  <span className='blue1'>'./FadeIn.css'</span>;</p>

  <p><span className='red'>function</span> <span className='blueviole'>FadeIn</span>{"() { "}</p>

  <p>&nbsp;<span className='red'>const</span> {'[isMounted, setIsMounted]'} = <span className='blueviole'>useState</span>(<span className='blue1'>false</span>); </p>

  <p>&nbsp;<span className='red'>const</span> {'handleMount = () => '}<span className='blueviole'>setIsMounted</span>(<span className='blue1'>true</span>);  </p>

  <p>&nbsp;<span className='red'>return</span> {"( "}</p>

  <p>{"<> "}</p>

  <p>&nbsp;{'<'}<span className='green'>button</span> <span className='blue'>onClick</span>={'{handleMount}>Mount component</'}<span className='green'>button</span>{'>'}</p>

  <p>&nbsp;{'<'}<span className='blueviole'>CSSTransition</span> <span className='blue'>in</span>={'{isMounted}'} <span className='blue'>timeout</span>={'{'}<span className='blue1'>300</span>{'}'} <span className='blue'>classNames</span>=<span className='blue1'>"fade"</span>{'>'}</p>

  <p>&nbsp;{'<'}<span className='green'>div</span> <span className='blue'>className</span>=<span className='blue1'>"content"</span>{'>'}Hello, world!{'</'}<span className='green'>div</span>{'>'}</p>

  <p>&nbsp;{"</"}<span className='blueviole'>CSSTransition</span>{">"}</p>

  <p>{" </> "}</p>

  <p>&nbsp;{"); "}</p>

  <p>{"} "}</p>
</code>

<p>이 예에서는 <b>FadeIn</b>이라는 컴포넌트를 정의하고 <b>useState</b> 훅을 사용하여 컴포넌트가 마운트되었는지 여부를 추적합니다. 버튼을 클릭하면 <b>isMounted</b> 상태를 <b>true</b>로 설정하고, 이로 인해 <b>CSSTransition</b> 구성 요소가 페이드 인 애니메이션을 적용하여 <b>content</b> div를 렌더링합니다. 또한, 페이드 인 효과에 대한 스타일과 애니메이션을 정의하는 <b>FadeIn.css</b>라는 CSS 파일을 정의합니다.</p>

<code>
  <p>{" .fade-enter { "}</p>

  <p>&nbsp;&nbsp;<span className='blue'>opacity</span>: 0;</p>

  <p>{"} "}</p>

  <p>{".fade-enter-active { "}</p>

  <p>&nbsp;&nbsp;<span className='blue'>opacity</span>: 1; </p>

  <p>&nbsp;&nbsp;<span className='blue'>transition</span>: <span className='blue1'>opacity</span> 300<span className='blue1'>ms ease-in</span>;  </p>

  <p>{"} "}</p>

  <p>{".fade-exit { "}</p>

  <p>&nbsp;&nbsp;<span className='blue'>opacity</span>: 1;  </p>

  <p>{"} "}</p>

  <p>{".fade-exit-active { "}</p>

  <p>&nbsp;&nbsp;<span className='blue'>opacity</span>: 0;  </p>
  
  <p>&nbsp;&nbsp;<span className='blue'>transition</span> : <span className='blue1'>opacity</span> 300<span className='blue1'>ms ease-out</span>; </p>

  <p>{"}"}</p>
</code>

<p>이 CSS 파일에서는 전환의 다른 단계에 대한 클래스를 정의합니다. 컴포넌트가 진입할 때 <b>fade-enter</b> 상태로 투명도가 0이 되고, 300ms 동안 투명도가 1로 전환됩니다 (<b>fade-enter-active</b>). 컴포넌트가 나갈 때 <b>fade-exit</b> 상태로 투명도가 1이되고, 300ms 동안 투명도가 0으로 전환됩니다 (<b>fade-exit-active</b>).</p>

<p>전반적으로, 리액트 컴포넌트에 애니메이션을 추가하면 UI가 더 매력적으로 보이고 사용자에게 시각적 피드백을 제공할 수 있습니다. CSS 전환 또는 애니메이션 또는 서드파티 라이브러리를 사용하여 컴포넌트에 애니메이션을 쉽게 추가하여 더 동적인 UI를 만들 수 있습니다.</p>

<b><p>* 번역기를 사용하여 작성된 텍스트입니다. 오류를 발견하시면 알려주시면 감사하겠습니다 *</p></b>
   
   <div className='ads-container'>  
   {/*  реклама  */}
  </div> 

    </div>
  )
}

export default KoReact_6;