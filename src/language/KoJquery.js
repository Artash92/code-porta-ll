import React from 'react';

function KoJquery() {
  return (
    <div>
      <div className='ad-container'>  
          {/*  реклама  */}
        </div>
        
        <h1>자바스크립트(JQuery)</h1>

<p>jQuery는 자바스크립트 코드를 작성하고 HTML 문서와 작업하는 과정을 간소화하는 자바스크립트 라이브러리입니다. 이는 2006년 John Resig에 의해 만들어졌으며 현재 가장 인기 있는 자바스크립트 라이브러리 중 하나입니다.</p>

<p>jQuery는 문서 객체 모델(DOM) 및 AJAX(비동기 자바스크립트 및 XML)와 애니메이션 생성에 대한 다양한 기능을 제공합니다. 또한 jQuery 라이브러리가 자동으로 브라우저 호환성 문제를 처리하기 때문에 크로스 브라우저 코드 작성을 간소화합니다.</p>

<p>다음은 jQuery를 사용하는 방법의 몇 가지 예시입니다:</p>

<p>DOM 요소 조작:</p>

<code>
  <p><span className='green'>// ID가 "myElement"인 요소의 텍스트 변경</span></p>

  <p><span className='blueviole'>$</span>(<span className='blue1'>'#myElement'</span>).<span className='blue'>text</span>(<span className='blue1'>'새 텍스트'</span>); </p>

  <p><span className='green'>// 페이지에 새 요소 추가</span> </p>

  <p><span className='blueviole'>$</span>(<span className='blue1'>'body'</span>).<span className='blue'>append</span>(<span className='blue1'>'{'<'}div{'>'}새 요소{'</'}div{'>'}'</span>); </p>
</code>

<p>2. 이벤트 처리:</p>

<code>
  <p><span className='green'>// ID가 "myButton"인 버튼의 클릭 이벤트 처리</span></p>

  <p><span className='blueviole'>$</span>(<span className='blue1'>'#myButton'</span>).<span className='blue'>click</span>{'('}<span className='red'>function</span>() {"{"}</p>

  <p>&nbsp;<span className='blueviole'>alert</span>(<span className='blue1'>'버튼이 클릭되었습니다!'</span>);</p>

  <p>{"});"}</p>
</code>

<p>3. AJAX 작업:</p>

<code>
  <p><span className='green'>// 서버로 AJAX 요청을 보내고 응답으로 페이지 요소를 업데이트합니다. </span></p>

  <p> <span className='blueviole'>$</span>.<span className='blue'>get</span>{'('}<span className='blue1'>'https://example.com/api/data'</span>, <span className='red'>function</span>(response) {"{"}</p>

  <p><span className='blueviole'>$</span>(<span className='blue1'>'#myElement'</span>).<span className='blue'>text</span>(response); </p>

  <p>{" }); "}</p>
</code>

<p>전반적으로, jQuery는 자바스크립트 개발을 간편화하고 동적 및 인터랙티브 웹 페이지를 생성하기 쉽게 만드는 강력하고 다재다능한 도구입니다.</p>

<b>HTML 문서에 jQuery를 포함하기 위해 다음 단계를 사용할 수 있습니다:</b>

<p>1. 공식 웹사이트 <a href="https://jquery.com/download/" target='_blank' > 👉🏼 (https://jquery.com/download/)</a>에서 jQuery 라이브러리를 다운로드하거나 CDN (콘텐츠 전송 네트워크) 링크를 사용할 수 있습니다. </p>

<p>2. 새 HTML 파일을 만들고 HTML 문서의 "head" 섹션에 jQuery 라이브러리를 포함하기 위해 다음 코드를 추가합니다:</p>

<code>
  <p>{'<'}<span className='green'>head</span>{'>'}</p>

  <p>&nbsp;{'<'}<span className='green'>script</span> <span className='blue'>src</span>=<span className='blue1'>"path/to/jquery.js"</span>{'>'}{'</'}<span className='green'>script</span>{'>'}</p>

  <p>{'</'}<span className='green'>head</span>{'>'}</p>
</code>

<p>"path/to/jquery.js"를 서버에 저장된 jQuery 라이브러리의 실제 경로로 대체하거나 CDN 링크를 사용합니다:</p>

<code>
  <p>{'<'}<span className='green'>head</span>{'>'}</p>

  <p>&nbsp;{'<'}<span className='green'>script</span> <span className='blue'>src</span>=<span className='blue1'>"https://code.jquery.com/jquery-3.6.0.min.js"</span>{'>'}{'</'}<span className='green'>script</span>{'>'}</p>

  <p>{'</'}<span className='green'>head</span>{'>'}</p>
</code>

<p>3. HTML 문서에 jQuery 라이브러리를 포함한 후에는 jQuery 라이브러리를 참조하는 자바스크립트 코드를 작성하여 사용할 수 있습니다.</p>

<p>예를 들어, ID가 "myElement"인 HTML 요소의 텍스트를 변경하려면 다음 코드를 사용할 수 있습니다:</p>

<code>
  <p>{'<'}<span className='green'>body</span>{'>'}</p>

  <p>&nbsp;{'<'}<span className='green'>div</span> <span className='blue'>id</span>=<span className='blue1'>"myElement"</span>{'>'}안녕하세요!{'</'}<span className='green'>div</span>{'>'}</p>

  <p>&nbsp;{'<'}<span className='green'>script</span>{'>'}</p>

  <p>&nbsp;&nbsp;{'$(document).ready(function() {'}</p>

  <p>&nbsp;&nbsp;&nbsp;<span className='blueviole'>$</span>(<span className='blue1'>"#myElement"</span>).<span className='blue'>text</span>(<span className='blue1'>"새로운 텍스트!"</span>);</p>

  <p>&nbsp;&nbsp;{'});'}</p>

  <p>&nbsp;{'</'}<span className='green'>script</span>{'>'}</p>

  <p>{'</'}<span className='green'>body</span>{'>'}</p>
</code>

<p>이 예시에서는 jQuery를 사용하여 ID가 "myElement"인 요소를 선택하고 그 텍스트를 "새로운 텍스트!"로 변경합니다. 코드는 문서가 로드된 후에만 실행되도록 문서 준비 함수로 래핑됩니다.</p>

<p>전반적으로, HTML 문서에 jQuery를 포함하는 것은 jQuery 라이브러리를 참조하고 해당 라이브러리를 사용하여 HTML 요소를 조작하는 자바스크립트 코드를 작성하는 간단한 과정입니다.</p>

<p>jQuery 구문은 CSS 스타일 선택자와 자바스크립트 코드의 조합으로 구성되어 있어 HTML 요소를 선택하고 조작하기 쉽습니다. jQuery 구문의 몇 가지 예시는 다음과 같습니다:</p>

<p><b>1. 요소 선택</b></p>

<p>HTML 요소를 선택하려면 CSS 스타일 선택자를 인수로 취하는 jQuery 함수를 사용할 수 있습니다. 예를 들어, 페이지의 모든 "p" 요소를 선택하려면 다음 코드를 사용할 수 있습니다:</p>

<code><p><span className='blueviole'>$</span>(<span className='blue1'>'p'</span>) </p> </code>

<p>또한 선택자를 연결하여 다른 요소와의 관계에 따라 요소를 선택할 수 있습니다. 예를 들어, "div" 요소의 자식인 모든 "p" 요소를 선택하려면 다음 코드를 사용할 수 있습니다:</p>

<code><p><span className='blueviole'>$</span>(<span className='blue1'>'div {'>'} p'</span>)</p></code>

<p><b>2. 요소 수정</b></p>

<p>요소를 선택한 후에는 jQuery를 사용하여 해당 내용, 속성 및 CSS 속성을 수정할 수 있습니다. 예를 들어, 페이지의 모든 "p" 요소의 텍스트를 변경하려면 다음 코드를 사용할 수 있습니다:</p>

<code>
  <p><span className='blueviole'>$</span>(<span className='blue1'>'p'</span>).<span className='blue'>text</span>(<span className='blue1'>'새로운 텍스트'</span>)</p>

  <p>요소에 <span className='green'>class</span>를 추가하려면 <span className='blue1'>"addClass"</span> 메소드를 사용할 수 있습니다: </p>

  <p><span className='blueviole'>$</span>(<span className='blue1'>'p'</span>).<span className='blue'>addClass</span>(<span className='blue1'>'highlight'</span>)</p>
</code>

<p><b>3. 이벤트 처리</b></p>

<p>jQuery를 사용하여 클릭, 마우스 오버 및 키 누름과 같은 이벤트를 처리할 수 있습니다. 예를 들어, ID가 "myButton"인 버튼의 클릭 이벤트를 처리하려면 다음 코드를 사용할 수 있습니다:</p>

<code>
  <p><span className='blueviole'>$</span>(<span className='blue1'>'#myButton'</span>).<span className='blue'>click</span>{'('}<span className='red'>function</span>() {"{"}</p>    
    
  <p>&nbsp;<span className='blueviole'>alert</span>(<span className='blue1'>'버튼이 클릭되었습니다!'</span>) </p> 
    
  <p>{"})"}</p>
</code>

<p><b>4. AJAX 작업</b></p>

<p>jQuery를 사용하면 AJAX 요청을 처리하기 쉽습니다. 예를 들어, URL로 GET 요청을 보내고 응답을 처리하려면 다음 코드를 사용할 수 있습니다:</p>

<code>
  <p>$.<span className='blue'>get</span>{'('}<span className='blue1'>'https://example.com/data'</span>, <span className='red'>function</span>(response) {"{"}</p>

  <p>&nbsp;{"console"}.<span className='blue'>log</span>(response)</p>

  <p>{"}) "}</p>
</code>

<p>전반적으로, jQuery 구문은 배우고 사용하기 쉽고 HTML 요소를 조작하고 이벤트를 처리하는 강력한 방법을 제공합니다.</p>

<p><b>jQuery 탐색 방법은 DOM 트리에서 요소를 탐색하고 찾는 데 사용됩니다. 다음은 형제 요소를 처리하는 일부 탐색 방법의 예시입니다.</b></p>    

<p><b>1. next() 메소드:</b> </p>

<p>next() 메소드는 선택한 요소의 다음 형제 요소를 반환합니다. 예를 들어:</p>

<code>
  <p><span className='blueviole'>$</span>(document).<span className='blue'>ready</span>{'('}<span className='red'>function</span>() {'{'}</p> 

  <p>&nbsp;<span className='blueviole'>$</span>(<span className='blue1'>"h2"</span>).<span className='blue'>next</span>().<span className='blue'>css</span>(<span className='blue1'>"background-color", "yellow"</span>); </p>

  <p>{'}); '}</p>
</code>

<p>이 코드는 모든 "h2" 요소를 선택하고 그 다음 형제 요소에 CSS 스타일을 적용하여 배경색을 노란색으로 변경합니다.</p>

<p><b>2. prev() 메소드:</b></p>

<p>prev() 메소드는 선택한 요소의 이전 형제 요소를 반환합니다. 예를 들어:</p>

<code>
  <p><span className='blueviole'>$</span>(document).<span className='blue'>ready</span>{'('}<span className='red'>function</span>() {'{'}</p> 

  <p>&nbsp;<span className='blueviole'>$</span>(<span className='blue1'>"h2"</span>).<span className='blue'>prev</span>().<span className='blue'>css</span>(<span className='blue1'>"background-color", "yellow"</span>); </p>

  <p>{'});'}</p>
</code>

<p>이 코드는 모든 "h2" 요소를 선택하고 그 이전 형제 요소에 CSS 스타일을 적용하여 배경색을 노란색으로 변경합니다.</p>
 
<b>3. nextAll() 메소드:</b>

<p>nextAll() 메소드는 선택한 요소의 모든 다음 형제 요소를 반환합니다. 예를 들어</p>

<code>
  <p><span className='blueviole'>$</span>(document).<span className='blue'>ready</span>{'('}<span className='red'>function</span>() {'{'}</p> 

  <p>&nbsp;<span className='blueviole'>$</span>(<span className='blue1'>"h2"</span>).<span className='blue'>nextAll</span>().<span className='blue'>css</span>(<span className='blue1'>"background-color", "yellow"</span>); </p>

  <p>{'}); '}</p>
</code>

<p>이 코드는 모든 "h2" 요소를 선택하고 그 다음 형제 요소에 CSS 스타일을 적용하여 배경색을 노란색으로 변경합니다.</p>

<b>4. prevAll() 메소드:</b> 

<p>prevAll() 메소드는 선택한 요소의 모든 이전 형제 요소를 반환합니다. 예를 들어:</p>

<code>
  <p><span className='blueviole'>$</span>(document).<span className='blue'>ready</span>{'('}<span className='red'>function</span>() {'{'}</p> 

  <p>&nbsp;<span className='blueviole'>$</span>(<span className='blue1'>"h2"</span>).<span className='blue'>prevAll</span>().<span className='blue'>css</span>(<span className='blue1'>"background-color", "yellow"</span>); </p>

  <p>{'}); '}</p>
</code>

<p>이 코드는 모든 "h2" 요소를 선택하고 그 이전 형제 요소에 CSS 스타일을 적용하여 배경색을 노란색으로 변경합니다.</p>

<b>5. siblings() 메소드:</b>

<p>siblings() 메소드는 선택한 요소의 모든 형제 요소를 반환합니다. 예를 들어:</p>

<code>
  <p><span className='blueviole'>$</span>(document).<span className='blue'>ready</span>{'('}<span className='red'>function</span>() {'{'}</p> 

  <p>&nbsp;<span className='blueviole'>$</span>(<span className='blue1'>"h2"</span>).<span className='blue'>siblings</span>().<span className='blue'>css</span>(<span className='blue1'>"background-color", "yellow"</span>); </p>

  <p>{'}); '}</p>
</code>

<p>이 코드는 모든 "h2" 요소를 선택하고 그 형제 요소에 CSS 스타일을 적용하여 배경색을 노란색으로 변경합니다.</p>

<p>전반적으로, 이러한 탐색 메소드를 사용하면 HTML 요소의 형제 요소를 쉽게 탐색하고 선택할 수 있으며, 이는 스타일링이나 내용 수정과 같은 다양한 용도로 유용합니다.</p>

<p><b>JQuery (CSS)</b></p>

<code>
  <p><span className='blueviole'>$</span>(document).<span className='blue'>ready</span>{'('}<span className='red'>function</span>() {'{'}</p> 

  <p>&nbsp;<span className='blueviole'>$</span>(<span className='blue1'>".box"</span>).<span className='blue'>click</span>{'('}<span className='red'>function</span>() {'{'}</p>

  <p>&nbsp;&nbsp;<span className='blueviole'>$</span>(<span className='red'>this</span>).<span className='blue'>css</span>(<span className='blue1'>"background-color", "red"</span>);</p>

  <p>&nbsp;&nbsp;{'});'}</p>

  <p>{'});'}</p>
</code>

<p>이 코드는 jQuery 선택자 ".box"를 사용하여 클래스가 "box"인 요소를 선택합니다. 그런 다음 click() 메소드를 사용하여 해당 요소에 클릭 이벤트 핸들러를 추가합니다. 이벤트 핸들러 함수 내에서는 css() 메소드를 사용하여 요소의 배경색을 빨간색으로 변경합니다.</p>

<p>따라서 상자 요소가 클릭되면 배경색이 파란색에서 빨간색으로 변경됩니다. 우리는 또한 css() 메소드를 사용하여 폰트 크기, 테두리 너비 등 다른 CSS 속성을 변경할 수 있습니다.</p>

<p>다음은 css() 메소드를 사용하여 여러 CSS 속성을 변경하는 방법을 보여주는 또 다른 예입니다:</p>

<code>
  <p><span className='blueviole'>$</span>(document).<span className='blue'>ready</span>{'('}<span className='red'>function</span>() {'{'}</p>

  <p>&nbsp;<span className='blueviole'>$</span>(<span className='blue1'>".box"</span>).<span className='blue'>css</span>{'({'}</p>

  <p>&nbsp;&nbsp;<span className='blue1'>"background-color"</span>: <span className='blue1'>"green"</span>,</p>

  <p>&nbsp;&nbsp;<span className='blue1'>"width"</span>: <span className='blue1'>"150px"</span>, </p>

  <p>&nbsp;&nbsp;<span className='blue1'>"height"</span>: <span className='blue1'>"150px"</span>, </p>

  <p>&nbsp;&nbsp;<span className='blue1'>"border"</span>: <span className='blue1'>"2px solid black"</span> </p>

  <p>&nbsp;{' });'}</p>

  <p>{'});'}</p>
</code>

<p>이 코드는 "box" 클래스를 가진 모든 요소를 선택하고 그 배경색을 녹색으로, 너비와 높이를 150px로, 테두리는 2px 두께의 검정색 실선으로 변경합니다.</p>

<p>전반적으로, jQuery를 사용하여 CSS를 조작하는 것은 사용자 상호작용이나 다른 이벤트에 따라 HTML 요소를 동적으로 스타일링하는 강력한 방법을 제공합니다.</p>

<b>JQuery ($.each)</b>

<p>jQuery의 $.each() 메소드는 배열과 객체를 반복하는 데 사용됩니다. 사용 방법을 보여주는 예제는 다음과 같습니다:</p>

<p>우리가 숫자 배열을 가지고 있고 배열의 각 요소를 반복하여 콘솔에 값 출력을 원하는 경우를 가정해보겠습니다:</p>
    
<code>
  <p><span className='red'>var</span> numbers = [<span className='blue1'>1, 2, 3, 4, 5</span>]; </p>

  <p>$.<span className='blue'>each</span>{'('}numbers, <span className='red'>function</span>(index, value){'{'}</p>

  <p>&nbsp;{'console'}.<span className='blue'>log</span>(<span className='blue1'>"인덱스 "</span> + index + <span className='blue1'>"의 요소는 "</span> + value);</p>

  <p>{'});'}</p>
</code>

<p>이 코드에서는 numbers 배열을 $.each() 메소드에 전달하고 현재 요소의 인덱스와 값을 가져오는 콜백 함수를 사용합니다. 콜백 함수 내에서는 현재 요소의 인덱스와 값을 콘솔에 출력하기 위해 console.log()를 사용합니다.</p>
    
<p>이 코드의 출력 결과는 다음과 같습니다:</p>

<code>
  <p>인덱스 <span className='blue1'>0</span>의 요소는 <span className='blue1'>1</span></p>

  <p>인덱스 <span className='blue1'>1</span>의 요소는 <span className='blue1'>2</span></p>

  <p>인덱스 <span className='blue1'>2</span>의 요소는 <span className='blue1'>3</span></p>

  <p>인덱스 <span className='blue1'>3</span>의 요소는 <span className='blue1'>4</span></p>

  <p>인덱스 <span className='blue1'>4</span>의 요소는 <span className='blue1'>5</span></p>
</code>

<p>다음은 객체와 함께 $.each()를 사용하는 방법을 보여주는 또 다른 예입니다:</p>

<p>사람의 세부 정보를 나타내는 객체가 있고 해당 속성을 반복하여 값들을 콘솔에 출력하려는 경우를 가정해보겠습니다:</p>

<code>
  <p><span className='red'>var</span> person = {'{'}</p>

  <p>&nbsp;<span className='blue'>name</span>: <span className='blue1'>"John"</span>,</p>

  <p>&nbsp;<span className='blue'>age</span>: <span className='blue1'>30</span>, </p>

  <p>&nbsp;<span className='blue'>occupation</span>: <span className='blue1'>"Developer"</span> </p>

  <p>{'};'}</p>

  <p>$.<span className='blue'>each</span>{'('}person, <span className='red'>function</span>(key, value){'{'}</p>

  <p>&nbsp;{'console'}.<span className='blue'>log</span>(key + ": " + value);</p>

  <p>{'});'}</p>
</code>

<p>이 코드에서는 person 객체를 $.each() 메소드에 전달하고 현재 속성의 키와 값을 가져오는 두 개의 인수를 가진 콜백 함수를 사용합니다. 콜백 함수 내에서는 현재 속성의 키와 값을 콘솔에 출력하기 위해 console.log()를 사용합니다.</p>

<p>이 코드의 출력 결과는 다음과 같습니다:</p>

<code>
  <p><span className='blue'>name</span>: John </p>

  <p><span className='blue'>age</span>: <span className='blue1'>30</span> </p>

  <p><span className='blue'>occupation</span>: Developer</p>
</code>

<p>전반적으로, jQuery의 $.each() 메소드는 배열과 객체를 반복하고 그 요소에 작업을 수행하는 편리한 방법을 제공합니다.</p>

<b>JQuery 이벤트</b>

<p>JQuery는 HTML 요소에 이벤트 핸들러를 추가하고 마우스 클릭, 키보드 입력 및 폼 제출과 같은 사용자 상호작용에 응답하는 풍부한 이벤트 처리 메소드 집합을 제공합니다.</p>
    
<p>다음은 jQuery의 click() 메소드를 사용하여 버튼 요소에 클릭 이벤트 핸들러를 추가하고 사용자가 버튼을 클릭할 때 응답하는 방법을 보여주는 예제입니다:</p>    
    
<code>
  <p>{'<'}!<span className='blue'>DOCTYPE</span> <span className='blue1'>html</span>{'>'}</p>

  <p>{'<'}<span className='green'>html</span>{'>'}</p>  

  <p>{'<'}<span className='green'>head</span>{'>'}</p>

  <p>&nbsp;{'<'}<span className='green'>title</span>{'>'}jQuery Event Example{'</'}<span className='green'>title</span>{'>'}</p>

  <p>{'<'}<span className='green'>script</span> <span className='blue'>src</span>=<span className='blue1'>"https://code.jquery.com/jquery-3.6.0.min.js"</span>{'>'}{'</'}<span className='green'>script</span>{'>'}</p>

  <p>{'</'}<span className='green'>head</span>{'>'}</p>

  <p>{'<'}<span className='green'>body</span>{'>'}</p>

  <p>&nbsp;{'<'}<span className='green'>button</span> <span className='blue'>id</span>=<span className='blue1'>"myButton"</span>{'>'}Click me!{'</'}<span className='green'>button</span>{'>'}</p>

  <p>{'<'}<span className='green'>script</span>{'>'}</p>

  <p>&nbsp;{'$(document).ready(function(){'}</p>

  <p>&nbsp;<span className='blueviole'>$</span>(<span className='blue1'>"#myButton"</span>).<span className='blue'>click</span>{'('}<span className='red'>function</span>(){'{'}</p>

  <p>&nbsp;<span className='blueviole'>alert</span>(<span className='blue1'>"Button clicked!"</span>);</p>

  <p>&nbsp;{'});'}</p>

  <p>{'});'}</p>

  <p>{'</'}<span className='green'>script</span>{'>'}</p>

  <p>{'</'}<span className='green'>body</span>{'>'}</p>

  <p>{'</'}<span className='green'>html</span>{'>'}</p>
</code>    

<p>이 코드에서는 head 섹션에 jQuery 라이브러리를 포함하고, ID 선택기 <b>#myButton</b>을 사용하여 버튼 요소에 <b>click()</b> 이벤트 핸들러를 추가합니다. 이벤트 핸들러 함수 내에서는 <b>alert()</b> 메소드를 사용하여 메시지 상자에 "Button clicked!" 텍스트를 표시합니다.</p>

<p>사용자가 버튼을 클릭하면 <b>click()</b> 이벤트가 트리거되고, 이벤트 핸들러 함수가 실행되어 메시지 상자가 표시됩니다.</p>

<p>다음은 jQuery의 <b>submit()</b> 메소드를 사용하여 폼 요소에 제출 이벤트 핸들러를 추가하고 기본 폼 제출 동작을 방지하는 방법을 보여주는 또 다른 예제입니다:</p>
    
<code>
  <p>{'<'}!<span className='blue'>DOCTYPE</span> <span className='blue1'>html</span>{'>'}</p>

  <p>{'<'}<span className='green'>html</span>{'>'}</p> 

  <p>{'<'}<span className='green'>head</span>{'>'}</p>

  <p>&nbsp;{'<'}<span className='green'>title</span>{'>'}jQuery Event Example{'</'}<span className='green'>title</span>{'>'}</p>

  <p>{'<'}<span className='green'>script</span> <span className='blue'>src</span>=<span className='blue1'>"https://code.jquery.com/jquery-3.6.0.min.js"</span>{'>'}{'</'}<span className='green'>script</span>{'>'}</p>

  <p>{'</'}<span className='green'>head</span>{'>'}</p>

  <p>{'<'}<span className='green'>body</span>{'>'}</p>

  <p>{'<'}<span className='green'>form</span> <span className='blue'>id</span>=<span className='blue1'>"myForm"</span>{'>'}</p>

  <p>&nbsp;{'<'}<span className='green'>label</span> <span className='blue'>for</span>=<span className='blue1'>"name"</span>{'>'}Name:{'</'}<span className='green'>label</span>{'>'}</p>

  <p>&nbsp;{'<'}<span className='green'>input</span> <span className='blue'>type</span>=<span className='blue1'>"text"</span> <span className='blue'>id</span>=<span className='blue1'>"name"</span> <span className='blue'>name</span>=<span className='blue1'>"name"</span>{'><'}<span className='green'>br</span>{'><'}<span className='green'>br</span>{'>'}</p>

  <p>&nbsp;{'<'}<span className='green'>label</span> <span className='blue'>for</span>=<span className='blue1'>"email"</span>{'>'}Email:{'</'}<span className='green'>label</span>{'>'}</p>

  <p>&nbsp;{'<'}<span className='green'>input</span> <span className='blue'>type</span>=<span className='blue1'>"email"</span> <span className='blue'>id</span>=<span className='blue1'>"email"</span> <span className='blue'>name</span>=<span className='blue1'>"email"</span>{'><'}<span className='green'>br</span>{'><'}<span className='green'>br</span>{'>'}</p>

  <p>&nbsp;{'<'}<span className='green'>input</span> <span className='blue'>type</span>=<span className='blue1'>"submit"</span> <span className='blue'>value</span>=<span className='blue1'>"Submit"</span>{'>'}</p>

  <p>{'</'}<span className='green'>form</span>{'>'}</p>

  <p>{'<'}<span className='green'>script</span>{'>'}</p>

  <p>&nbsp;{'$(document).ready(function(){'}</p>

  <p>&nbsp;<span className='blueviole'>$</span>(<span className='blue1'>"#myForm"</span>).<span className='blue'>submit</span>{'('}<span className='red'>function</span>(event){'{'}</p>

  <p>&nbsp;event.<span className='blue'>preventDefault</span>();</p>

  <p>&nbsp;<span className='blueviole'>alert</span>(<span className='blue1'>"Form submitted!"</span>);</p>

  <p>&nbsp;{'});'}</p>

  <p>{' });'}</p>

  <p>{'</'}<span className='green'>script</span>{'>'}</p>

  <p>{'</'}<span className='green'>body</span>{'>'}</p>

  <p>{'</'}<span className='green'>html</span>{'>'}</p>
</code>

<p>이 코드에서는 ID 선택기 <b>#myForm</b>을 사용하여 폼 요소에 <b>submit()</b> 이벤트 핸들러를 추가합니다. 이벤트 핸들러 함수 내에서는 기본 폼 제출 동작을 방지하기 위해 <b>preventDefault()</b> 메소드를 사용하고, 페이지를 다시로드하는 대신 메시지 상자에 "Form submitted!" 텍스트를 표시합니다.</p>
    
<p>사용자가 폼을 제출하면 <b>submit()</b> 이벤트가 트리거되고, 이벤트 핸들러 함수가 실행되어 기본 폼 제출 동작이 방지되고 메시지 상자가 표시됩니다.</p>    

<p>전반적으로, jQuery의 이벤트 처리 메소드는 사용자 상호작용을 처리하고 이벤트에 응답하는 강력한 방법을 제공합니다.</p>


<b><p>* 번역기를 사용하여 작성된 텍스트입니다. 오류를 발견하시면 알려주시면 감사하겠습니다 *</p></b>
   
   <div className='ads-container'>  
   {/*  реклама  */}
  </div>

    </div>
  )
}

export default KoJquery;