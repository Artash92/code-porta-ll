import React from 'react';

function KoReact_4() {
  return (
    <div>
      <div className='ad-container'>  
          {/*  реклама  */}
        </div>

      <h1>React에서 데이터 가져오기</h1>

<p>1. fetch API를 사용하여 데이터 가져오기:</p>

<code> 
  <p><span className='blueviole'>fetch</span>(<span className='blue1'>'https://api.example.com/data'</span>)</p>

  <p>.<span className='blue'>then</span>(response {'=>'} response.<span className='blue'>json</span>()) </p>

  <p>.<span className='blue'>then</span>(data {'=>'} console.<span className='blue'>log</span>(data))</p>

  <p>.<span className='blue'>catch</span>(error {'=>'} console.<span className='blue'>error</span>(error)) </p>
</code>

<p>이 예제에서는 <b>fetch</b> API를 사용하여 서버에 요청을 보냅니다. <b>response</b> 객체는 <b>json()</b> 메서드를 사용하여 JSON 형식으로 변환되고, 변환된 데이터가 콘솔에 로그됩니다. 오류가 발생하면 콘솔에 오류가 기록됩니다.</p>


<p>2. 컴포넌트의 상태에 가져온 데이터 표시:</p>

<code>
  <p><span className='red'>import</span> {'React, { useState, useEffect } '} <span className='red'>from</span> <span className='blue1'>'react'</span>;   </p>

  <p><span className='red'>function</span> <span className='blueviole'>MyComponent</span>() {'{'}</p>

  <p><span className='red'>const</span> [data, setData] = <span className='blueviole'>useState</span>([]);</p>

  <p><span className='blueviole'>useEffect</span>{'(() => {'}</p>

  <p><span className='blueviole'>fetch</span>(<span className='blue1'>'https://api.example.com/data'</span>)</p>

  <p>.<span className='blue'>then</span>(response {'=>'} response.<span className='blue'>json</span>())</p>

  <p>.<span className='blue'>then</span>(data {'=>'} <span className='blueviole'>setData</span>(data))</p>

  <p>.<span className='blue'>catch</span>(error {'=>'} console.<span className='blue'>error</span>(error)); </p>

  <p>{'}, []);'}</p>

  <p><span className='red'>return</span> {'('}</p>

  <p>{'<'}<span className='green'>div</span>{'>'}</p>

  <p>{'{'}data.<span className='blue'>map</span>{'(item => ('}</p>

  <p>{'<'}<span className='green'>p</span> key={'{item.'}<span className='blue'>id</span>{'}>'}{'{item.'}<span className='blue'>name</span>{'}</'}<span className='green'>p</span>{'>'}</p>

  <p>{'))} '}</p>

  <p>{'</'}<span className='green'>div</span>{'>'}</p>

  <p>&nbsp;{');'}</p>

  <p>{'}'}</p>
</code>    


<p>이 예제에서는 <b>useState</b> 훅을 사용하여 <b>data</b>라는 상태 변수를 정의합니다. 또한 컴포넌트가 마운트될 때 서버에서 데이터를 가져오고, 가져온 데이터로 상태 변수 <b>data</b>를 업데이트하는 데 <b>useEffect</b> 훅을 사용합니다. 마지막으로 <b>map</b> 메서드를 사용하여 데이터 배열을 반복하고 각 항목을 단락 요소로 표시합니다.</p>

<h1>Axios</h1>
  
  <p>Fetch와 Axios 모두 브라우저 또는 Node.js 환경에서 HTTP 요청을 만드는 데 사용되는 JavaScript 라이브러리입니다. 그러나 두 라이브러리 사이에는 몇 가지 차이가 있습니다.</p>
  
  <p>Fetch는 내장된 브라우저 API로, 요청과 응답을 처리하기 위해 프로미스를 사용합니다. 더 간단한 구문을 가지고 있으며 간단한 요청에 대해서는 사용하기 쉽지만, 요청 취소, 진행 이벤트 및 자동 요청 재시도와 같은 일부 고급 기능이 없습니다.</p>  
  
  <p>Axios는 HTTP 요청을 만들기 위한 더 많은 기능이 있는 인기 있는 서드파티 라이브러리입니다. 요청 취소, 진행 이벤트 및 자동 재시도를 기본으로 지원하며 JSON, XML 및 FormData와 같은 응답 데이터 처리를 위한 내장 지원도 제공합니다.</p>
  
  <p>Axios를 사용하는 것이 Fetch보다 나은 이유는 프로젝트의 특정 요구 사항에 따라 실제로 달라집니다. 간단한 웹 애플리케이션을 구축하는 경우 기본 요청만을 처리해야한다면 Fetch가 충분할 수 있습니다. 그러나 더 많은 고급 기능과 요청 및 응답 처리를 위한 더 강력한 API가 필요한 경우 Axios가 더 나은 선택입니다.</p>  
  
  <p>Axios를 사용하는 장점은 다음과 같습니다:</p>
  
  <p>1. 더 나은 오류 처리: Axios는 오류 처리를위한 더 견고한 시스템을 갖추고 있으며 Fetch보다 더 유용한 오류 메시지를 제공합니다.</p>  
  
  <p>2. 인터셉터: Axios는 요청이 보내지거나 받기 전에 요청 또는 응답을 수정할 수 있는 인터셉터를 제공합니다.</p>  
  
  <p>3. 요청 및 응답 데이터의 자동 변환: Axios는 요청 및 응답 데이터를 JSON과 같은 다른 형식으로 자동 변환 할 수 있으며, 이는 API와 작업 할 때 매우 유용합니다.</p>  
  
  <p>4. 요청의 쉬운 취소: Axios는 느린 또는 신뢰할 수없는 네트워크를 처리할 때 유용한 요청을 취소하는 간단한 방법을 제공합니다.</p>  
  
  <p>요약하면 Fetch와 Axios 모두 JavaScript에서 HTTP 요청을 만드는 유용한 도구입니다. 그러나 Axios는 더 많은 고급 기능과 더 강력한 API를 제공하여 더 복잡한 응용 프로그램을 구축하는 데 매우 유용할 수 있습니다.</p>  
  
  <p><b>Axios</b>는 브라우저 또는 Node.js에서 HTTP 요청을 만들기 위한 라이브러리입니다. 프로미스를 사용하여 요청을 보내고 응답을 처리하는 것이 쉽습니다.</p> 
  
  <p>React.js에서 Axios를 사용하려면 먼저 다음 명령을 사용하여 설치해야합니다:</p>
  
  <b>npm install axios</b>

  <p>그 후에는 React 구성 요소에서 Axios를 사용할 수 있습니다. 예를 들어, 다음 코드는 원격 서버에 GET 요청을 보내고 응답을 페이지에 표시합니다:</p> 
 
 <code>
    <p><span className='red'>import</span> {' React, { useState, useEffect }'} <span className='red'>from</span> <span className='blue1'>"react"</span>;</p>  
    
    <p><span className='red'>import</span> axios <span className='red'>from</span> <span className='blue1'>"axios"</span>;</p>

    <p><span className='red'>function</span> <span className='blueviole'>App</span>() {'{'}</p>  

    <p><span className='red'>const</span> {'[data, setData]'} = <span className='blueviole'>useState</span>("");</p>

    <p><span className='blueviole'>useEffect</span>{'(() => { '}</p>

    <p>axios.<span className='blue'>get</span>(<span className='blue1'>"https://jsonplaceholder.typicode.com/todos/1"</span>).<span className='blue'>then</span>{'((response) => {'}</p>

    <p><span className='blueviole'>setData</span>(response.<span className='blue'>data</span>);</p>

    <p>{'});'}</p>

    <p>{' }, []);'}</p>

    <p> return {'<'}<span className='green'>div</span>{'>'}{'{'}data.<span className='blue'>title</span>{'}'}{'</'}<span className='green'>div</span>{'>;'}</p>

    <p>{'}'}</p>

    <p><span className='red'>export default</span> App;</p>
  </code>

<p>이 예에서 <b>useEffect</b> 훅은 서버에 GET 요청을 보내고 응답으로 <b>data</b> 상태 변수를 업데이트합니다. 그런 다음 JSX를 사용하여 데이터 변수를 페이지에 표시합니다.</p>

<p>Axios는 또한 POST, PUT 및 DELETE와 같은 다른 HTTP 메서드를 지원하며 이를 사용하여 서버로 데이터를 보내고 리소스를 수정할 수 있습니다. axios 객체는 또한 헤더, 타임아웃 및 요청 인터셉터를 설정하는 등의 많은 구성 옵션을 제공하여 요청의 동작을 사용자 정의할 수 있습니다.</p>

<p>전반적으로 Axios는 React.js에서 HTTP 요청을 처리하기 위한 강력하고 유연한 라이브러리이며, 원격 API에서 데이터를 가져오는 등의 많은 일반적인 작업을 간소화할 수 있습니다.</p>

<p>HTTP 프로토콜은 데이터를 처리하는 다양한 작업을 허용하는 여러 요청 메서드를 지원합니다. 여기에는 이를 React에서 사용하는 예제와 함께 네 가지 주요 요청 메서드에 대한 간략한 설명이 포함되어 있습니다:</p>

<p>1. <b>GET</b>: 서버에서 데이터를 검색하는 데 사용되는 요청 메서드입니다. React에서는 <b>axios.get</b> 메서드를 사용할 수 있습니다.</p>

<code>
  <p>axios.<span className='blue'>get</span>(<span className='blue1'>'/api/data'</span>)</p>
  <p>.<span className='blue'>then</span>{'(response => {'}</p>
  <p>{'console'}.<span className='blue'>log</span>(response.<span className='blue'>data</span>); </p>
  <p>{'})'}</p>
  <p>.<span className='blue'>catch</span>{'(error => {' }</p>
  <p>{'console'}.<span className='blue'>log</span>(error);</p>
  <p>{'});'}</p>
</code>

<p>이 예에서는 <b>/api/data</b> 엔드포인트에서 데이터를 검색하고 있습니다. 요청이 성공하면 응답 데이터가 콘솔에 기록되고, 오류가 발생하면 콘솔에 기록됩니다.</p>

<p>2. <b>PUT</b>: 서버에 있는 기존 데이터를 업데이트하는 데 사용되는 요청 메서드입니다. React에서는 <b>axios.put</b> 메서드를 사용할 수 있습니다:</p>

<code>
  <p>axios.<span className='blue'>put</span>{'('}<span className='blue1'>'/api/data/1'</span>, {'{'} <span className='blue'>newData</span>: <span className='blue1'>'updatedData'</span> {"})"}</p>
  <p>.<span className='blue'>then</span>{'('}response { '=> {' }</p>
  <p>{'console'}.<span className='blue'>log</span>(response.<span className='blue'>data</span>);</p>
  <p>{'})'}</p>
  <p>.<span className='blue'>catch</span>{'(error => {'}</p>
  <p>{'console'}.<span className='blue'>log</span>(error);</p>
  <p>{'});'}</p>
</code>

<p>이 예에서는 <b>/api/data/1</b> 엔드포인트에서 데이터를 업데이트하고 있습니다. 새 데이터를 두 번째 인수로 <b>axios.put</b>에 보내고 있습니다. 요청이 성공하면 응답 데이터가 콘솔에 기록되고, 오류가 발생하면 콘솔에 기록됩니다.</p>

<p>3. <b>POST </b>: 서버에 새 데이터를 생성하는 데 사용되는 요청 메서드입니다. React에서는 <b>axios.post</b> 메서드를 사용할 수 있습니다</p>

<code>
  <p>axios.<span className='blue'>post</span>{'('}<span className='blue1'>'/api/data'</span>, {'{'} <span className='blue'>newData</span>: <span className='blue1'>'newData'</span> {"})"}</p>
  <p>.<span className='blue'>then</span>{'(response => {'}</p>
  <p>{'console'}.<span className='blue'>log</span>(response.<span className='blue'>data</span>);</p>
  <p>{'})'}</p>
  <p>.<span className='blue'>catch</span>{'(error => {'}</p>
  <p>{'console'}.<span className='blue'>log</span>(error);</p>
  <p>{'});'}</p>
</code>

<p>이 예에서는 <b>/api/data</b> 엔드포인트에 새 데이터를 생성하고 있습니다. 새 데이터를 두 번째 인수로 <b>axios.post</b>에 보내고 있습니다. 요청이 성공하면 응답 데이터가 콘솔에 기록되고, 오류가 발생하면 콘솔에 기록됩니다.</p>

<p>4. <b>DELETE </b>: 서버에 있는 기존 데이터를 삭제하는 데 사용되는 요청 메서드입니다. React에서는 <b>axios.delete</b> 메서드를 사용할 수 있습니다:</p>

<code>
  <p>axios.<span className='blue'>delete</span>(<span className='blue1'>'/api/data/1'</span>)  </p>
  <p>.<span className='blue'>then</span>{'(response => { '}</p>
  <p>{'console'}.<span className='blue'>log</span>(response.<span className='blue'>data</span>);</p>
  <p>{'}) '}</p>
  <p>.<span className='blue'>catch</span>{'(error => { '}</p>
  <p>{'console'}.<span className='blue'>log</span>(error);</p>
  <p>{'});'}</p>
</code>

<p>이 예에서는 <b>/api/data/1</b> 엔드포인트에서 데이터를 삭제하고 있습니다. 요청이 성공하면 응답 데이터가 콘솔에 기록되고, 오류가 발생하면 콘솔에 기록됩니다</p>

<p>더 많은 정보를 원하시면 Axios의 공식 웹사이트를 방문해주세요: <a href=" https://axios-http.com" target='_blank' > 👉🏼  https://axios-http.com</a></p>

<b><p>* 번역기를 사용하여 작성된 텍스트입니다. 오류를 발견하시면 알려주시면 감사하겠습니다 *</p></b>
   
   <div className='ads-container'>  
   {/*  реклама  */}
  </div>
    </div>
  )
}

export default KoReact_4;