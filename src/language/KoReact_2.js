import React from 'react';

function KoReact_2() {
  return (
    <div>
       <div className='ad-container'>  
          {/*  реклама  */}
        </div>

      <h1>JSX</h1>

<p>JSX는 자바스크립트의 구문 확장으로, 자바스크립트 파일에서 HTML과 유사한 코드를 작성할 수 있게 해줍니다. React에서 UI 컴포넌트의 구조와 레이아웃을 정의하는 데 널리 사용됩니다.</p>    

  <p>JSX가 작동하는 예시입니다:</p>

<code>
 <p><span className='red'>import</span> React <span className='red'>from</span> <span className='blue1'>'react'</span>; </p>

 <p><span className='red'>function</span> <span className='blueviole'>MyComponent</span>() {'{'}</p>

 <p><span className='red'>return</span> {'('}</p>

 <p>{'<'}<span className='green'>div</span>{'>'}</p>

 <p>&nbsp;{'<'}<span className='green'>h1</span>{'>'}안녕하세요, 세계!{'</'}<span className='green'>h1</span>{'>'} </p>

 <p>&nbsp;{'<'}<span className='green'>p</span>{'>'}이것은 간단한 JSX 예제입니다.{'</'}<span className='green'>p</span>{'>'} </p>

 <p>{'</'}<span className='green'>div</span>{'>'}</p>

 <p>&nbsp;{'); '}</p>

 <p>{'}'}</p>

<p><span className='red'>export default</span> MyComponent;</p> 
</code>

  <p>이 예시에서는 JSX를 사용하여 간단한 React 컴포넌트를 정의하고 있습니다. 이 컴포넌트는 <b>div</b> 요소를 렌더링하며 <b>h1과 p</b> 요소를 포함합니다. HTML과 유사한 코드가 괄호로 둘러싸여 있고 JSX 구문을 사용하여 정의되어 있음에 유의하세요.</p>

  <p>JSX를 사용하면 HTML과 유사한 코드와 자바스크립트 로직을 쉽게 결합할 수 있습니다. 예를 들어, JSX 코드 내에서 자바스크립트 변수와 표현식을 사용할 수 있습니다:</p>
  
<code>
 <p><span className='red'>import</span> React <span className='red'>from</span> <span className='blue1'>'react'</span>;</p>

 <p><span className='red'>function</span> <span className='blueviole'>MyComponent</span>() {'{'}</p>

<p><span className='red'>const</span> name = <span className='blue1'>'John'</span>;  </p>

<p><span className='red'>return</span> {'('}</p>

<p>{'<'}<span className='green'>div</span>{'>'} </p>

<p>&nbsp;{'<'}<span className='green'>h1</span>{'>'} 안녕하세요,{'{'}name{'}'}!{'</'}<span className='green'>h1</span>{'>'} </p>

<p>&nbsp;{'<'}<span className='green'>p</span>{'>'}이것은 간단한 JSX 예제입니다.{'</'}<span className='green'>p</span>{'>'} </p>

<p>{'</'}<span className='green'>div</span>{'>'} </p>

<p>&nbsp;{");"}</p>

<p>{" } "}</p>

<p><span className='red'>export default</span> MyComponent;</p> 
</code>
 
  <p>이 예시에서는 JSX 코드 내에서 자바스크립트 변수 <b>(name)</b>를 사용하여 개인화된 인사말을 동적으로 렌더링하고 있습니다.</p>

  <p>React 개발에 JSX는 필수는 아니지만 복잡한 UI 컴포넌트를 작성하고 관리하기 훨씬 쉽게 만들어주므로 강력히 권장됩니다. JSX 코드를 작성하면 브라우저에서 실행할 수 있는 일반 자바스크립트 코드로 변환됩니다.</p>
  
  <p>React 컴포넌트에는 두 가지 주요 유형이 있습니다: 함수형 컴포넌트와 클래스 컴포넌트입니다.</p>
  
  <p>함수형 컴포넌트는 JSX 요소를 반환하는 자바스크립트 함수로 정의됩니다. 주로 상태나 라이프사이클 메서드가 없는 간단한 UI 컴포넌트에 사용됩니다.</p>
  
  <p>다음은 간단한 함수형 컴포넌트의 예시입니다:</p>

  <code>
      <p><span className='red'>import</span> React <span className='red'>from</span> <span className='blue1'>'react'</span>; </p>

      <p><span className='red'>function</span> <span className='blueviole'>MyComponent</span>(props) {'{'}</p>

      <p><span className='red'>return</span> {'('}</p>

      <p> {'<'}<span className='green'>div</span>{'>'} </p>

      <p>&nbsp;{'<'}<span className='green'>h1</span>{'>'}안녕하세요,{'{'}props.<span className='blue'>name</span>{'}'}님!{'</'}<span className='green'>h1</span>{'>'} </p>

      <p>&nbsp;{'<'}<span className='green'>p</span>{'>'}이것은 함수형 컴포넌트입니다.{'</'}<span className='green'>p</span>{'>'} </p>

      <p>{'</'}<span className='green'>div</span>{'>'} </p>

      <p>&nbsp;{');'}</p>

      <p>{'}'}</p>

      <p><span className='red'>export default</span> MyComponent;</p>  
 </code>
   
    <p>이 예시에서는 <b>MyComponent</b>라는 함수형 컴포넌트를 정의하고 있습니다. 이 컴포넌트는 <b>props</b> 객체를 인수로 받습니다. 컴포넌트는 개인화된 인사말이 포함된 h1 요소와 메시지가 포함된 <b>p</b> 요소를 반환합니다.</p>
    
    <p>반면에 클래스 컴포넌트는 <b>React.Component</b> 클래스를 확장하는 자바스크립트 클래스로 정의됩니다. 상태를 관리하고 라이프사이클 메서드가 있는 더 복잡한 UI 컴포넌트에 사용됩니다.</p>
    
    <p>다음은 간단한 클래스 컴포넌트의 예시입니다:</p>

<code>
    <p><span className='red'>import</span> React <span className='red'>from</span> <span className='blue1'>'react'</span>; </p>

    <p><span className='red'>class</span> MyComponent <span className='red'>extends</span> React.<span className='blue'>Component</span> {'{'}</p>

    <p><span className='blue'>constructor</span>(props) {'{'}</p>

    <p>super(props);</p>

    <p><span className='red'>this</span>.<span className='blue'>state</span> = {'{'}</p>

    <p><span className='blue'>count</span>: <span className='blue1'>0</span></p>

    <p>&nbsp;{'};'}</p>

    <p>{'}'}</p>

    <p><span className='blue'>render</span>() {'{'}</p>

    <p><span className='red'>return</span> {'('}</p>

    <p>{'<'}<span className='green'>div</span>{'>'} </p>

    <p>{'<'}<span className='green'>h1</span>{'>'}Count: {'{'}<span className='red'>this</span>.<span className='blue'>state</span>.<span className='blue'>count</span>{'}'}{'</'}<span className='blue'>h1</span>{'>'}</p>

    <p>{'<'}<span className='green'>button</span> <span className='blue'>onClick</span> = {'{() => '}<span className='red'>this</span>.<span className='blue'>setState</span>{'({'} <span className='blue'>count</span>:<span className='red'>this</span>.<span className='blue'>state</span>.<span className='blue'>count</span> + <span className='blue1'>1</span> {'})}'}{'>'}Increment{'</'}<span className='green'>button</span>{'>'}</p>

    <p>{'</'}<span className='blue'>div</span>{'>'} </p>

    <p>&nbsp;&nbsp;{');'}</p>

    <p>&nbsp;{'}'}</p>

    <p>{'}'}</p>

    <p><span className='red'>export default</span> MyComponent;</p>  
</code>
    
    <p>이 예시에서는 <b>MyComponent</b>라는 클래스 컴포넌트를 정의하고 있습니다. <b>count</b>라는 상태 속성을 가지고 있으며 현재 카운트를 표시하는 h1 요소와 클릭할 때마다 카운트를 증가시키는 <b>button</b> 요소가 포함된 JSX 요소를 반환합니다.</p>

    <p>컴포넌트는 조합되고 중첩되어 복잡한 UI 요소를 만들 수 있습니다. 또한 애플리케이션 전체에서 재사용할 수 있도록 입력으로 props를 받을 수 있습니다.</p>

    <p><b>{'<Component />'}</b>는 React에서 컴포넌트를 렌더링하는 데 사용되는 구문입니다. 이를 자체 닫히는 태그 또는 빈 태그라고도 하며, 인수 없이 함수처럼 컴포넌트를 호출하는 것과 동일합니다.</p>

    <p>예를 들어, 간단한 <b>MyComponent</b>라는 컴포넌트가 있다고 가정해 봅시다:</p>

<code>
  <p><span className='red'>function</span> <span className='blueviole'>MyComponent</span>() {'{'}</p>

  <p><span className='red'>return</span> {'('}</p>

  <p>{'<'}<span className='green'>div</span>{'>'}</p>

  <p>&nbsp;{'<'}<span className='green'>h1</span>{'>'}안녕하세요, 세계!{'</'}<span className='green'>h1</span>{'>'} </p>

  <p>{'</'}<span className='green'>div</span>{'>'}</p>

  <p>&nbsp;{');'}</p>

  <p>{'}'}</p>
</code>
   
    <p>이 컴포넌트를 렌더링하기 위해선 <b>{'<MyComponent />'}</b> 구문을 사용합니다:</p>

 <code>
  <p>ReactDOM.<span className='blue'>render</span>{'('} </p>

  <p>{'<'}<span className='blueviole'>MyComponent </span>{'/>'}, </p>

  <p>document.<span className='blue'>getElementById</span>(<span className='blue1'>'root'</span>)</p>

  <p>{');'}</p> 
 </code>

    <p><b>{'<MyComponent />'}</b> 구문은 MyComponent 컴포넌트의 인스턴스를 생성하고 DOM에 렌더링합니다.</p>

    <b><p>* 번역기를 사용하여 작성된 텍스트입니다. 오류를 발견하시면 알려주시면 감사하겠습니다 *</p></b>
   
   <div className='ads-container'>  
   {/*  реклама  */}
  </div>
    </div>
  )
}

export default KoReact_2;