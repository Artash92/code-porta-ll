import React from 'react';

function KoReact_5() {
  return (
    <div>
      <div className='ad-container'>  
          {/*  реклама  */}
        </div>

<h1>React Router DOM</h1>

<p>React Router Dom는 React 애플리케이션에서 사용되는 인기 있는 라이브러리로, 클라이언트 측 라우팅을 관리하는 데 사용됩니다. 이를 통해 개발자는 다른 URL에 따라 다른 컴포넌트를 만들고 렌더링할 수 있습니다. 이는 전체 페이지를 다시로드하지 않고도 사용자가 서로 다른 페이지와 컴포넌트를 탐색할 수 있도록하여 보다 직관적이고 매끄러운 사용자 경험을 제공합니다.</p>

<p>React Router Dom은 React Router 라이브러리를 기반으로 하며 특히 브라우저에서 사용하도록 설계되었습니다. 브라우저의 History API를 사용하여 URL을 조작하고 사용자 인터페이스를 현재 URL과 동기화시킵니다. 또한 라우트를 정의하는 선언적 접근 방식을 제공하여 여러 라우트와 중첩된 컴포넌트를 관리하기 쉽게 만듭니다.</p>

<p>React Router Dom의 주요 기능 중 일부는 다음과 같습니다:</p>

<p> • 선언적 라우팅: 라우트를 JSX 컴포넌트로 정의하여 라우팅 로직을 이해하고 관리하기 쉽게 합니다.</p>

<p> • 중첩된 라우트: 다른 라우트 내에 라우트를 중첩하여 더 복잡한 라우팅 시나리오를 처리할 수 있습니다.</p>

<p> • 라우트 매개변수: 라우트 내에서 동적 매개변수를 정의하여 현재 URL을 기반으로 컴포넌트 간에 데이터를 전달할 수 있습니다.</p>

<p> • 히스토리 관리: React Router Dom은 브라우저의 히스토리를 관리하기 위한 도구를 제공하여 페이지 간의 프로그래밍 방식으로 이동 및 뒤로/앞으로 탐색을 처리할 수 있습니다.</p>

<p>React 애플리케이션에서 React Router Dom을 사용하는 간단한 예제는 다음과 같습니다: <b>(이전 버전)v5</b></p>

<code>
  <p> <span className='red'>import</span> React <span className='red'>from</span> <span className='blue1'>'react'</span>;</p>
  <p> <span className='red'>import</span> {'{'} BrowserRouter <span className='red'>as</span> Router, Route, Link {'}'} <span className='red'>from</span> <span className='blue1'>'react-router-dom'</span>;  </p>
  <p>&nbsp;<span className='red'>const</span> Home = () {'=> <'}<span className='green'>h1</span>{'>'}Home{'</'}<span className='green'>h1</span>{'>; '}</p>
  <p>&nbsp;<span className='red'>const</span> About = () {'=> <'}<span className='green'>h1</span>{'>'}About{'</'}<span className='green'>h1</span>{'>;'}</p>
  <p>&nbsp;<span className='red'>const</span> App {'= () => ( '}</p>
  <p>{'<'}<span className='blueviole'>Router</span>{'>'}</p>
  <p>&nbsp;{'<'}<span className='green'>nav</span>{'>'}</p>
  <p>&nbsp;&nbsp;{'<'}<span className='green'>ul</span>{'>'}</p>
  <p>&nbsp;&nbsp;&nbsp;{'<'}<span className='green'>li</span>{'>'}</p>
  <p>&nbsp;&nbsp;&nbsp;&nbsp;{'<'}<span className='blueviole'>Link</span> <span className='blue'>to</span>=<span className='blue1'>"/"</span>{'>'}Home{'</'}<span className='blueviole'>Link</span>{'>'}</p>
  <p>&nbsp;&nbsp;&nbsp;{'</'}<span className='green'>li</span>{'>'}</p>
  <p>&nbsp;&nbsp;&nbsp;{'<'}<span className='green'>li</span>{'>'}</p>
  <p>&nbsp;&nbsp;&nbsp;&nbsp;{'<'}<span className='blueviole'>Link</span> <span className='blue'>to</span>=<span className='blue1'>"/about"</span>{'>'}About{'</'}<span className='blueviole'>Link</span>{'>'}</p>
  <p>&nbsp;&nbsp;&nbsp;{'</'}<span className='green'>li</span>{'>'}</p>
  <p>&nbsp;&nbsp;{'</'}<span className='green'>ul</span>{'>'}</p>
  <p>&nbsp;{'</'}<span className='green'>nav</span>{'>'}</p>
  <p>&nbsp;{'<'}<span className='blueviole'>Route </span><span className='blue'>exact path</span>=<span className='blue1'>"/"</span> <span className='blue'>component</span>={'{Home}  />'}</p>
  <p>&nbsp;{'<'}<span className='blueviole'>Route</span>  <span className='blue'>path</span>=<span className='blue1'>"/about"</span> <span className='blue'>component</span>={'{About}  />'}</p>
  <p>{'</'}<span className='blueviole'>Router</span>{'>'}</p>
  <p>{');'}</p>
  <p><span className='red'>export default</span> App; </p>
</code>

<p>이 예제에서는 React Router Dom에서 필요한 컴포넌트를 가져오고 있습니다(<b>특히, BrowserRouter, Route 및 Link</b>). 그런 다음 홈 및 정보 페이지를 위한 두 가지 간단한 컴포넌트를 정의합니다.</p>

<p><b>App</b> 컴포넌트 내에서는 나머지 응용 프로그램을 위한 라우팅 컨텍스트를 제공하는 <b>Router</b> 컴포넌트로 모든 것을 래핑합니다. 그런 다음 <b>Link</b> 컴포넌트를 사용하여 두 페이지 간을 이동하는 간단한 네비게이션 바를 정의합니다.</p>

<p>마지막으로 현재 URL을 기반으로 <b>Home 및 About</b> 컴포넌트를 렌더링하는 두 개의 <b>Route</b> 컴포넌트를 정의합니다.</p>

<p>React Router Dom 6.4는 2022년 2월에 출시된 최신 버전입니다. 이 버전의 새로운 기능 중 일부는 다음과 같습니다:</p>

<p>최신 버전(v6)에서는 일부 API 및 컬렉션에 변경 사항이 있으므로 React Router Dom 버전 6.4를 사용한 새 예제를 선택할 수 있습니다:</p>

<p>React Router Dom 버전 6.4를 사용한 예제는 다음과 같습니다:</p>
   
 <code>  
  <p><span className='red'>import</span> {'{'} BrowserRouter <span className='red'>as</span> Router, Routes, Route, Link {'}'} <span className='red'>from</span> <span className='blue1'>'react-router-dom'</span>;</p>

  <p>&nbsp;<span className='red'>const</span>  Home = () {'=> <'}<span className='green'>h1</span>{'>'}Home{'</'}<span className='green'>h1</span>{'>;'}</p>

  <p>&nbsp;<span className='red'>const</span> About = () {'=> <'}<span className='green'>h1</span>{'>'}About{'</'}<span className='green'>h1</span>{'>;'}</p>

  <p>&nbsp;<span className='red'>const</span> NotFound = () {'=> <'}<span className='green'>h1</span>{'>'}404 Not Found{'</'}<span className='green'>h1</span>{'>;'}</p>

  <p>&nbsp;<span className='red'>const</span> {'App = () => ( '}</p>

  <p>{'<'}<span className='blueviole'>Router</span>{'>'}</p>

  <p>&nbsp;{'<'}<span className='green'>nav</span>{'>'}</p>

  <p>&nbsp;&nbsp;{'<'}<span className='green'>ul</span>{'>'}</p>

  <p>&nbsp;&nbsp;&nbsp;{'<'}<span className='green'>li</span>{'>'}</p>

  <p>&nbsp;&nbsp;&nbsp;&nbsp;{'<'}<span className='blueviole'>Link</span> <span className='blue'>to</span>=<span className='blue1'>"/"</span>{'>'}Home{'</'}<span className='blueviole'>Link</span>{'>'}</p>

  <p>&nbsp;&nbsp;&nbsp;{'</'}<span className='green'>li</span>{'>'}</p>

  <p>&nbsp;&nbsp;&nbsp;{'<'}<span className='green'>li</span>{'>'}</p>

  <p>&nbsp;&nbsp;&nbsp;&nbsp;{'<'}<span className='blueviole'>Link</span> <span className='blue'>to</span>=<span className='blue1'>"/about"</span>{'>'}About{'</'}<span className='blueviole'>Link</span>{'>'}</p>

  <p>&nbsp;&nbsp;&nbsp;{'</'}<span className='green'>li</span>{'>'}</p>

  <p>&nbsp;&nbsp;{'</'}<span className='green'>ul</span>{'>'}</p>

  <p>&nbsp;{'</'}<span className='green'>nav</span>{'>'}</p>

  <p>{'<'}<span className='blueviole'>Routes</span>{'>'}</p>

  <p>&nbsp;{'<'}<span className='blueviole'>Route</span> <span className='blue'>path</span>=<span className='blue1'>"/"</span> <span className='blue'>element</span>={'{<'}<span className='blueviole'>Home</span> {'/>} />'}</p>

  <p>&nbsp;{'<'}<span className='blueviole'>Route</span> <span className='blue'>path</span>=<span className='blue1'>"/about"</span> <span className='blue'>element</span>={'{<'}<span className='blueviole'>About</span> {'/>} />'}</p>

  <p>&nbsp;{'<'}<span className='blueviole'>Route</span> <span className='blue'>path</span>=<span className='blue1'>"*"</span> <span className='blue'>element</span>={'{<'}<span className='blueviole'>NotFound</span> {'/>} />'}</p>

  <p>{'</'}<span className='blueviole'>Routes</span>{'>'}</p>

  <p>{'</'}<span className='blueviole'>Router</span>{'>'}</p>

  <p>{');'}</p>

  <p><span className='red'>export default</span> App; </p>
 </code>

<p>이 예제에서는 React Router Dom에서 동일한 핵심 구성 요소를 사용하지만 일부 구성 요소의 구문이 약간 다릅니다.</p>

<p>예를 들어, 이제 <b>Switch</b> 대신 <b>Routes</b> 구성 요소를 사용하여 여러 경로를 그룹화합니다. 각 경로는 이제 <b>Route</b> 요소로 표시되며 <b>path</b> 및 <b>element</b> 속성이 있습니다. <b>path</b> 속성은 경로의 URL 패턴을 설정하고 <b>element</b> 속성은 경로가 일치할 때 렌더링될 구성 요소입니다.</p>

<p>이 예에서는 사용자가 존재하지 않는 페이지로 이동했을 때 표시되는 <b>NotFound</b> 구성 요소도 추가했습니다.</p>

<p>전반적으로, React Router Dom 6은 React 애플리케이션에서 경로 설정을 더 유연하고 편리하게 처리할 수 있는 방법을 제공합니다.</p>    
  
<p>1. <b>npm</b>을 사용하는 경우 터미널을 열고 다음 명령을 실행합니다:</p>

<b>npm install react-router-dom</b>

<p>2. <b>yarn</b>을 사용하는 경우 터미널을 열고 다음 명령을 실행합니다:</p>

<b>yarn add react-router-dom</b> 

<p>설치 후에는 위의 예제에서와 같이 필요한 구성 요소를 <b>react-router-dom</b> 패키지에서 가져올 수 있습니다.</p>

<p>React Router에 대한 자세한 정보는 공식 웹사이트를 참조하세요: <a href="https://reactrouter.com/" target='_blank' > 👉🏼  https://reactrouter.com/.</a></p>    
  
<p>웹 사이트에서 React Router 사용에 대한 포괄적인 가이드를 찾을 수 있습니다:</p>    
  
<p>• React Router 및 주요 개념 개요</p> 

<p>• 설치 및 설정 지침</p>

<p>• 다양한 사용 사례 및 시나리오 예제</p>

<p>• 핵심 구성 요소 및 유틸리티에 대한 API 설명서</p>

<p>• 서버 렌더링, 코드 분할 및 중첩된 경로와 같은 고급 주제</p>

<p>문서 외에도 커뮤니티 포럼, 버그 보고 및 기능 요청을 위한 GitHub 리포지토리, 관련 프로젝트 및 플러그인 모음과 같은 다양한 도움말 리소스를 찾을 수 있습니다.</p>

 <b><p>* 번역기를 사용하여 작성된 텍스트입니다. 오류를 발견하시면 알려주시면 감사하겠습니다 *</p></b>
   
   <div className='ads-container'>  
   {/*  реклама  */}
  </div>  
</div>
  )
}

export default KoReact_5;