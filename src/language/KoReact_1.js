import React from 'react';

function KoReact_1() {
  return (
    <div>
       <div className='ad-container'>  
          {/*  реклама  */}
        </div>
        
      <h1>React JS</h1>

<p><b>ReactJS</b>은 <b>페이스북</b>에서 만든 인기 있는 <b>JavaScript</b> 라이브러리입니다. 이는 2013년 처음 출시되었으며 그 이후 웹 개발자들 사이에서 큰 인기를 얻었습니다.</p>

<p>ReactJS는 특정한 문제를 해결하기 위해 만들어졌습니다 - 바로 많은 양의 데이터를 가진 복잡한 사용자 인터페이스를 빠르고 효율적으로 구축하는 필요성입니다. ReactJS 이전에는 이러한 종류의 인터페이스를 구축하는 데 많은 코드가 필요했으며 종종 느리고 관리하기 어려웠습니다.</p>

<p>ReactJS의 핵심 아이디어는 사용자 인터페이스를 여러 개의 재사용 가능한 구성 요소로 분해하는 것입니다. 각 구성 요소는 UI의 작은 부분을 렌더링하는 역할을 하며 쉽게 조합하여 복잡한 인터페이스를 만들 수 있습니다.</p>

<p>ReactJS의 주요 이점 중 하나는 가상 DOM을 사용한다는 것입니다. 이는 실제 DOM의 가벼운 표현입니다. 이를 통해 ReactJS는 실제 DOM에 비싼 업데이트를 할 필요 없이 UI를 매우 효율적으로 업데이트할 수 있습니다.</p>

<p><b>다음은 간단한 ReactJS 구성 요소의 예입니다:</b></p>

<code>
  <p><span className='red'>import </span>React  <span className='red'>from</span> <span className='blue'>'react'</span>;</p>
  <p><span className='red'>function</span> <span className='blueviole'>MyComponent</span>(props) {'{'}</p>
  <p><span className='red'>return</span> {'('}</p>
  <p>{'<'}<span className='green'>div</span>{'>'}</p>
  <p>&nbsp;{'<'}<span className='green'>h1</span>{'>'}{'{'}props.<span className='blue'>title{'}'}</span>{'</'}<span className='green'>h1</span>{'>'}</p>
  <p>&nbsp;{'<'}<span className='green'>p</span>{'>'} {'{'}props.<span className='blue'>description</span>{'}'}{'<'}<span className='green'>/p</span>{'>'}</p>
  <p>{'</'}<span className='green'>div</span>{'>'}</p>
  <p>&nbsp;{');'}</p>
  <p>{'}'}</p>
  <p><span className='red'>export default</span> MyComponent;</p>  
</code>

<p>이 구성 요소는 두 개의 속성(<b>title</b> 및 <b>description</b>)을 입력으로 받아 간단한 HTML 구조에 렌더링합니다. 이 구성 요소는 사용자에게 정보를 표시하기 위해 응용 프로그램 전체에서 사용할 수 있습니다.</p>

<p>ReactJS에 대해 더 알고 싶다면, ReactJS 웹사이트의 공식 문서를 참조하는 것을 추천합니다: <a href="https://react.dev/" target='_blank' > 👉🏼 <b>https://react.dev/</b> </a>. 거기에서 ReactJS를 시작하는 방법에 대한 튜토리얼, 가이드 및 참조 자료를 찾을 수 있습니다.</p>

<p>React 작업을 위해 Node.js를 설치하려면 아래 단계를 따르십시오:</p>

<h1>Windows에서 Node.js 설치하기</h1>

<p>1. 공식 Node.js 웹사이트로 이동하십시오: <a href="https://nodejs.org/" target='_blank' > 👉🏼 https://nodejs.org/ </a></p>

<p>2. "Windows Installer" 버전의 "Download" 버튼을 클릭하십시오</p> 

<p>3. 다운로드한 설치 프로그램을 실행하고 Node.js를 설치하기 위해 안내에 따르십시오</p>

<p>4. 설치가 완료되면 명령 프롬프트를 열고 node -v를 입력하여 Node.js가 올바르게 설치되었는지 확인하십시오</p>

<h1>Ubuntu에서 Node.js 설치하기</h1>

<p>1. 터미널 창을 엽니다</p>

<p>2. 명령어 <b>sudo apt update</b>를 실행하여 패키지 관리자를 업데이트하십시오</p>

<p>3. 명령어 <b>sudo apt install nodejs</b>를 실행하여 Node.js를 설치하십시오</p>

<p>4. 명령어 <b>node -v</b>를 실행하여 Node.js가 올바르게 설치되었는지 확인하십시오</p>

<b>Node.js와 React를 함께 사용하는 예시는 다음과 같습니다:</b>

<p>1. 명령어 <b>npx create-react-app my-app</b>을 사용하여 새로운 React 앱을 생성하십시오</p>

<p>2. 명령어 <b>cd my-app</b>을 사용하여 <b>my-app</b> 디렉토리로 이동하십시오</p>

<p>3. 명령어 <b>npm start</b>를 사용하여 개발 서버를 시작하십시오</p>

<p>4. 웹 브라우저를 열고 <b>http://localhost:3000</b>으로 이동하여 React 앱이 실행되는 것을 확인하십시오</p>

<p>Node.js와 React에 대해 더 알고 싶다면, 각 기술에 대한 공식 문서를 참조하는 것이 좋습니다. 다음은 각각의 웹사이트로 연결됩니다:</p>   

<p><b><a href="https://nodejs.org/" target='_blank' > 👉🏼 Node.js</a></b></p>

<p><b> <a href="https://reactjs.org/" target='_blank' > 👉🏼 React</a></b> </p>

<p><b>React 작업을 위해 다음을 잘 이해해야 합니다:</b></p> 

<p>1. <span className='chocolate'>HTML</span>/<span className='blue'>CSS</span>: React는 주로 사용자 인터페이스(UI) 및 웹 애플리케이션을 구축하는 데 사용되므로 HTML 및 CSS에 대한 충분한 이해가 필요합니다.</p>

<p>2. <span className='yellow'>JavaScript</span>: React는 JavaScript 라이브러리이므로 함수, 배열, 객체 및 범위와 같은 JavaScript 개념에 대해 확실한 이해가 필요합니다.</p>

<p>3. <span className='red'>ES6</span>: React는 화살표 함수, 해체 할당 및 클래스와 같은 ES6 기능을 중요하게 활용하므로 이러한 기능에 대한 충분한 이해가 필요합니다.</p> 

<p>4. <span className='blueviole'>JSX</span>: 앞서 언급했듯이 JSX는 JavaScript의 구문 확장으로 JavaScript 파일에서 HTML과 유사한 코드를 작성할 수 있게 해줍니다. JSX가 어떻게 작동하고 UI 구성 요소를 정의하는 데 어떻게 사용되는지 이해해야 합니다.</p>

<p>5. <span className='green'>Node.js</span> 및 <span className='red'>npm</span>: React 애플리케이션은 일반적으로 Node.js와 npm 패키지 관리자를 사용하여 구축됩니다. 이 도구를 설치하고 사용하는 방법을 이해해야 합니다.</p>

<p>6. <span className='blue'>React</span> 생태계: React 생태계에서는 React Router, Redux 및 Axios와 같은 다양한 도구 및 라이브러리가 일반적으로 사용됩니다. 이러한 도구가 어떻게 작동하고 React 애플리케이션을 구축하는 데 어떻게 사용되는지 이해해야 합니다.</p>

<p>7. <span className='dev-tools'>개발 도구</span>: Visual Studio Code, Chrome DevTools 및 Git과 같은 개발 도구에도 익숙해져야 합니다.</p>
    
<b><p>* 번역기를 사용하여 작성된 텍스트입니다. 오류를 발견하시면 알려주시면 감사하겠습니다 *</p></b>
   
   <div className='ads-container'>  
   {/*  реклама  */}
  </div>
    </div>
  )
}

export default KoReact_1;