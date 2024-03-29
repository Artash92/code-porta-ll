import React from 'react'

function RuReact_5() {
  return (
    <div>
      <div className='ad-container'>  
          {/*  реклама  */}
        </div>
      
      <h1>React Router DOM</h1>

<p>React Router Dom – это популярная библиотека, используемая в приложениях React для управления клиентским маршрутизацией. Она позволяет разработчикам создавать разные маршруты для разных компонентов и рендерить их на основе текущего URL. Это обеспечивает более интуитивный и плавный пользовательский опыт, так как пользователи могут перемещаться по разным страницам и компонентам без необходимости перезагрузки всей страницы.</p>

<p>React Router Dom основан на библиотеке React Router и специально разработан для использования в браузере. Он использует API истории браузера для управления URL-адресом и синхронизации пользовательского интерфейса с текущим URL. Кроме того, он обеспечивает декларативный подход к определению маршрутов, что делает управление сложными приложениями с несколькими маршрутами и вложенными компонентами более простым.</p>

<p>Некоторые из ключевых функций React Router Dom включают:</p>

<p> • Декларативная маршрутизация: вы можете определить свои маршруты как компоненты JSX, что упрощает понимание и управление логикой маршрутизации.</p>

<p> • Вложенные маршруты: вы можете вкладывать маршруты внутри других маршрутов, что позволяет решать более сложные сценарии маршрутизации.</p>

<p> • Параметры маршрута: вы можете определить динамические параметры в своих маршрутах, позволяя передавать данные между компонентами на основе текущего URL.</p>

<p> • Управление историей: React Router Dom предоставляет инструменты для управления историей браузера, позволяя программно перемещаться между страницами и обрабатывать навигацию вперед/назад.</p>

<p> Вот простой пример того, как может использоваться React Router Dom в приложении React: <b>(старая версия)v5</b></p>
   
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

<p>В этом примере мы импортируем необходимые компоненты из библиотеки React Router Dom (в частности, <b>BrowserRouter, Route и Link</b>). Затем мы определяем два простых компонента для наших домашней и страницы "О нас".</p>

<p>Внутри компонента <b>App</b> мы оборачиваем все в компонент <b>Router</b>, который обеспечивает контекст маршрутизации для остальной части приложения. Затем мы определяем простую навигационную панель, используя компонент <b>Link</b>, чтобы перемещаться между нашими двумя страницами.</p>

<p>Наконец, мы определяем два компонента <b>Route</b>, которые отображают компоненты <b>Home</b> и <b>About</b> в зависимости от текущего URL.</p>

<p>React Router Dom 6.4 - это последняя версия библиотеки, выпущенная в феврале 2022 года. Некоторые из новых функций в этой версии включают:</p>

<p>В последней версии (v6) изменились некоторые API и коллекции, поэтому я могу привести новый пример, используя версию React Router Dom 6.4:</p>

<p>Вот пример использования React Router Dom версии 6.4:</p>   


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


<p>В этом примере мы используем те же основные компоненты из React Router Dom (<b>такие как BrowserRouter, Route, Link</b>), но некоторые из них имеют немного другой синтаксис.</p>

<p>Например, теперь мы используем компонент <b>Routes</b> вместо <b>Switch</b> для группировки нескольких маршрутов. Каждый маршрут теперь представлен элементом <b>Route</b> с параметрами <b>path и element</b>. Параметр <b>path</b> задает шаблон URL для маршрута, а параметр <b>element</b> - компонент, который должен быть отрисован, когда маршрут соответствует.</p>

<p>В этом примере мы также добавили компонент <b>NotFound</b>, который отображается, когда пользователь попадает на несуществующую страницу.</p>

<p>В целом, React Router Dom 6 предоставляет более гибкий и удобный способ обработки маршрутизации в приложениях React.</p>

<p>1. Если вы используете <b>npm</b>, откройте терминал и выполните следующую команду:</p>

<b>npm install react-router-dom</b>

<p>2. Если вы используете <b>yarn</b>, откройте терминал и выполните следующую команду:</p>

<b>yarn add react-router-dom</b>

<p>После установки вы можете импортировать необходимые компоненты из пакета <b>react-router-dom</b>, как показано в приведенных выше примерах.</p>

<p>Для получения дополнительной информации о React Router посетите их официальный веб-сайт: <a href="https://reactrouter.com/" target='_blank' > 👉🏼  https://reactrouter.com/.</a></p>

<p>На веб-сайте вы найдете всеобъемлющее руководство по использованию React Router, включая:</p>

<p>• Обзор React Router и его ключевых концепций</p>

<p>• Инструкции по установке и настройке</p>

<p>• Примеры различных случаев использования и сценариев</p>

<p>• Документация API для каждого из основных компонентов и утилит</p>

<p>• Расширенные темы, такие как серверный рендеринг, разделение кода и вложенные маршруты</p>
   
<p>Кроме документации, вы также можете найти ряд полезных ресурсов, таких как форум сообщества, репозиторий GitHub для отчетов об ошибках и запросов функций, а также коллекцию связанных проектов и плагинов.</p>   
   
<b><p>* Текст написан с помощью переводчика. Если вы нашли ошибку, пожалуйста, сообщите нам *</p></b>

    <div className='ads-container'>  
  {/*  реклама  */}
</div>
    </div>
  )
}

export default RuReact_5;