import React from 'react'

function RuReact_4() {
  return (
    <div>
      <div className='ad-container'>  
          {/*  реклама  */}
        </div>
      
      <h1>Получение данных в React(Fetch Data)</h1>

      <p>1. Получение данных с помощью API fetch:</p>

 <code> 
    <p><span className='blueviole'>fetch</span>(<span className='blue1'>'https://api.example.com/data'</span>)</p>

    <p>.<span className='blue'>then</span>(response {'=>'} response.<span className='blue'>json</span>()) </p>

    <p>.<span className='blue'>then</span>(data {'=>'} console.<span className='blue'>log</span>(data))</p>

    <p>.<span className='blue'>catch</span>(error {'=>'} console.<span className='blue'>error</span>(error)) </p>
 </code>
  

<p>В этом примере мы отправляем запрос на сервер, используя API <b>fetch</b>. Объект <b>response</b> преобразуется в формат JSON с помощью метода <b>json()</b>, а полученные данные выводятся в консоль. Если происходит ошибка, она перехватывается и выводится в консоль.</p>


<p>2. Отображение полученных данных в состоянии компонента:</p>
 
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

<p>В этом примере мы используем хук <b>useState</b> для определения переменной состояния с именем <b>data</b>. Мы также используем хук <b>useEffect</b> для получения данных с сервера при монтировании компонента и обновления переменной состояния <b>data</b> полученными данными. Наконец, мы используем метод <b>map</b> для перебора массива данных и отображения каждого элемента в виде элемента параграфа.</p>
  
  <h1>Axios</h1>
  
  <p>Как Fetch, так и Axios являются библиотеками JavaScript, используемыми для выполнения HTTP-запросов из браузера или среды Node.js. Однако между ними есть некоторые отличия.</p>
  
  <p>Fetch является встроенным в браузер API, который использует промисы для обработки запросов и ответов. У него более простой синтаксис и проще использовать для простых запросов, но у него отсутствуют некоторые расширенные функции, такие как отмена запроса, события прогресса и автоматическая повторная отправка запроса.</p>  
  
  <p>Axios является популярной сторонней библиотекой, которая предоставляет более функциональный и мощный API для выполнения HTTP-запросов. Он поддерживает отмену запроса, события прогресса и автоматическую повторную отправку из коробки, а также имеет встроенную поддержку для обработки данных ответа, таких как JSON, XML и FormData.</p>
  
  <p>В отношении того, почему лучше использовать Axios вместо Fetch, это действительно зависит от конкретных потребностей вашего проекта. Если вы создаете простое веб-приложение, которому нужно только выполнять базовые запросы, то Fetch может быть достаточным. Однако, если вам нужны более расширенные функции и мощный API для обработки запросов и ответов, то Axios является лучшим выбором.</p>  
  
  <p>Некоторые преимущества использования Axios перед Fetch включают:</p>
  
  <p>1. Лучшая обработка ошибок: Axios имеет более надежную систему обработки ошибок и предоставляет более полезные сообщения об ошибках по сравнению с Fetch.</p>  

  <p>2. Перехватчики: Axios предоставляет перехватчики, которые позволяют вам изменять запросы или ответы перед их отправкой или получением.</p>  
  
  <p>3. Автоматическое преобразование данных запросов и ответов: Axios может автоматически преобразовывать данные запросов и ответов в различные форматы, такие как JSON, что может быть очень полезным при работе с API.</p>  
  
  <p>4. Легкая отмена запросов: Axios предоставляет простой способ отмены запросов, что может быть полезно при работе с медленными или ненадежными сетями.</p>  
  
  <p>В общем, как Fetch, так и Axios являются полезными инструментами для отправки HTTP-запросов в JavaScript, но Axios предоставляет более продвинутые функции и более мощный API, который может быть очень полезен при создании более сложных приложений.</p>  
  
  <p><b>Axios</b> - это библиотека для отправки HTTP-запросов из браузера или Node.js. Она упрощает отправку запросов с использованием обещаний и обработку ответов.</p> 
  
  <p>Чтобы использовать Axios в React.js, вам сначала необходимо установить его с помощью команды:</p> 
  
  <b>npm install axios</b>

<p>После этого вы можете использовать Axios в своих компонентах React. Например, следующий код отправляет GET-запрос на удаленный сервер и отображает ответ на странице:</p>

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

  <p>В этом примере используется хук <b>useEffect</b> для отправки GET-запроса на сервер и обновления переменной состояния <b>data</b> ответом. Затем переменная data отображается на странице с помощью JSX.</p>  

  <p>Кроме того, Axios поддерживает другие методы HTTP, такие как POST, PUT и DELETE, которые можно использовать для отправки данных на сервер и изменения ресурсов. Объект axios также предоставляет множество параметров конфигурации, таких как установка заголовков, тайм-аутов и перехватчиков запросов, которые позволяют настраивать поведение запросов.</p>  

  <p>В целом, Axios является мощной и гибкой библиотекой для работы с HTTP-запросами в React.js, которая может упростить многие общие задачи, такие как получение данных из удаленного API.</p> 

  <p>Протокол HTTP поддерживает несколько методов запросов, которые позволяют выполнять различные операции с данными. Вот краткое описание четырех основных методов запросов, а также примеры их использования в React:</p> 

  <p>1. <b>GET</b>: метод запроса, используемый для получения данных с сервера. В React вы можете использовать метод <b>axios.get</b>.</p>

  <code>
    <p>axios.<span className='blue'>get</span>(<span className='blue1'>'/api/data'</span>)</p>

    <p>.<span className='blue'>then</span>{'(response => {'}</p>

    <p>{'console'}.<span className='blue'>log</span>(response.<span className='blue'>data</span>); </p>

    <p>{'})'}</p>

    <p>.<span className='blue'>catch</span>{'(error => {' }</p>

    <p>{'console'}.<span className='blue'>log</span>(error);</p>
  
    <p>{'});'}</p>  
  </code> 

  <p>В этом примере мы получаем данные из конечной точки <b>/api/data</b>. Данные ответа записываются в консоль в случае успешного запроса, а любые ошибки перехватываются и записываются в консоль.</p>
  
  <p>2. <b>PUT</b>: метод запроса, используемый для обновления существующих данных на сервере. В React вы можете использовать метод <b>axios.put</b>:</p>


  <code>
    <p>axios.<span className='blue'>put</span>{'('}<span className='blue1'>'/api/data/1'</span>, {'{'} <span className='blue'>newData</span>: <span className='blue1'>'updatedData'</span> {"})"}</p>

    <p>.<span className='blue'>then</span>{'('}response { '=> {' }</p>

    <p>{'console'}.<span className='blue'>log</span>(response.<span className='blue'>data</span>);</p>  

    <p>{'})'}</p>

    <p>.<span className='blue'>catch</span>{'(error => {'}</p>

    <p>{'console'}.<span className='blue'>log</span>(error);</p>

    <p>{'});'}</p>
 </code>

  <p>В этом примере мы обновляем данные в конечной точке <b>/api/data/1</b>. Мы отправляем полезную нагрузку с новыми данными вторым аргументом в <b>axios.put</b>. Данные ответа записываются в консоль в случае успешного запроса, а любые ошибки перехватываются и записываются в консоль.</p>
  
  <p>3.<b>POST</b>: метод запроса, используемый для создания новых данных на сервере. В React вы можете использовать метод <b>axios.post</b>:</p>

  <code>
    <p>axios.<span className='blue'>post</span>{'('}<span className='blue1'>'/api/data'</span>, {'{'} <span className='blue'>newData</span>: <span className='blue1'>'newData'</span> {"})"}</p>

    <p>.<span className='blue'>then</span>{'(response => {'}</p>

    <p>{'console'}.<span className='blue'>log</span>(response.<span className='blue'>data</span>);</p>

    <p>{'})'}</p>  

    <p>.<span className='blue'>catch</span>{'(error => {'}</p>

    <p>{'console'}.<span className='blue'>log</span>(error);</p> 

    <p>{'});'}</p> 
  </code>  

  <p>В этом примере мы создаем новые данные в конечной точке <b>/api/data</b>. Мы отправляем полезную нагрузку с новыми данными вторым аргументом в <b>axios.post</b>. Данные ответа записываются в консоль в случае успешного запроса, а любые ошибки перехватываются и записываются в консоль.</p>
  
  <p>4.<b>DELETE</b>: метод запроса, используемый для удаления существующих данных на сервере. В React вы можете использовать метод <b>axios.delete</b>:</p>

  <code>
    <p> axios.<span className='blue'>delete</span>(<span className='blue1'>'/api/data/1'</span>)  </p>

    <p>.<span className='blue'>then</span>{'(response => { '}</p>

    <p>{'console'}.<span className='blue'>log</span>(response.<span className='blue'>data</span>);</p>

    <p>{'}) '}</p>

    <p>.<span className='blue'>catch</span>{'(error => { '}</p>

    <p>{'console'}.<span className='blue'>log</span>(error);</p>

    <p>{'});'}</p>
  </code> 

    <p>В этом примере мы удаляем данные по адресу <b>/api/data/1</b>. Если запрос выполнен успешно, то ответные данные будут зарегистрированы в консоли, а любые ошибки будут перехвачены и зарегистрированы в консоли.</p>
    
    <p>Для получения дополнительной информации о библиотеке Axios, пожалуйста, посетите их официальный веб-сайт: <a href="https://axios-http.com" target='_blank'>👉🏼 https://axios-http.com</a></p>

    <b><p>* Текст написан с помощью переводчика. Если вы нашли ошибку, пожалуйста, сообщите нам *</p></b>
    <div className='ads-container'>  
  {/*  реклама  */}
</div>
    </div>
  )
}

export default RuReact_4;