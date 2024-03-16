import React from 'react';

function EsReact_5() {
  return (
    <div>
      <div className='ad-container'>  
          {/*  реклама  */}
        </div> 
        
      <h1>React Router DOM</h1>

<p>React Router Dom es una biblioteca popular utilizada en aplicaciones de React para gestionar el enrutamiento del lado del cliente. Permite a los desarrolladores crear diferentes rutas para diferentes componentes y renderizarlos según la URL actual. Esto proporciona una experiencia de usuario más intuitiva y fluida, ya que los usuarios pueden navegar por diferentes páginas y componentes sin tener que volver a cargar toda la página.</p>

<p>React Router Dom se basa en la biblioteca React Router y está diseñado específicamente para su uso en el navegador. Utiliza la API de historial del navegador para manipular la URL y mantener la interfaz de usuario sincronizada con la URL actual. También proporciona un enfoque declarativo para definir rutas, lo que facilita la gestión de aplicaciones complejas con múltiples rutas y componentes anidados.</p>

<p>Algunas de las características clave de React Router Dom incluyen:</p>

<p> • Enrutamiento declarativo: Puedes definir tus rutas como componentes JSX, lo que facilita entender y gestionar la lógica de enrutamiento.</p>

<p> • Rutas anidadas: Puedes anidar rutas dentro de otras rutas, lo que permite escenarios de enrutamiento más complejos</p>

<p> • Parámetros de ruta: Puedes definir parámetros dinámicos dentro de tus rutas, lo que te permite pasar datos entre componentes según la URL actual.</p>

<p> • Gestión del historial: React Router Dom proporciona herramientas para gestionar el historial del navegador, lo que te permite navegar programáticamente entre páginas y manejar la navegación hacia atrás/adelante.</p>

<p>Aquí tienes un ejemplo simple de cómo se podría usar React Router Dom en una aplicación de React: <b>(versión antigua)v5</b></p>

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

<p>En este ejemplo, importamos los componentes necesarios de React Router Dom (específicamente, <b>BrowserRouter, Route y Link</b>). Luego, definimos dos componentes simples para nuestras páginas de inicio y acerca de.</p>

<p>Dentro del componente <b>App</b>, envolvemos todo en un componente <b>Router</b>, que proporciona el contexto de enrutamiento para el resto de la aplicación. Luego, definimos una barra de navegación simple utilizando el componente <b>Link</b> para navegar entre nuestras dos páginas.</p>

<p>Finalmente, definimos dos componentes <b>Route</b> que renderizan los componentes <b>Home y About</b> según la URL actual.</p>

<p>React Router Dom 6.4 es la última versión de la biblioteca, lanzada en febrero de 2022. Algunas de las nuevas características en esta versión incluyen:</p>

<p>La última versión (v6) tiene cambios en algunas API y colecciones, así que puedo elegir un nuevo ejemplo usando React Router Dom versión 6.4:</p>

<p>aquí tienes un ejemplo usando React Router Dom versión 6.4:</p>

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

<p>In this example, we use the same core components from React Router Dom (<b>such as BrowserRouter, Route, Link</b>), but some of them have a slightly different syntax.</p>

<p>For example, we now use the <b>Routes</b> component instead of <b>Switch</b> to group multiple routes. Each route is now represented by a <b>Route</b> element with <b>path and element</b> props. The <b>path</b> prop sets the URL pattern for the route, and the <b>element</b> prop is the component to be rendered when the route matches.</p>

<p>In this example, we also added a <b>NotFound</b> component that displays when the user lands on a non-existent page.</p>

<p>Overall, React Router Dom 6 provides a more flexible and convenient way to handle routing in React applications.</p>    

<p>1. If you're using <b>npm</b>, open your terminal and run the following command:</p>

<b>npm install react-router-dom</b>

<p>2. If you're using <b>yarn</b>, open your terminal and run the following command:</p>

<b>yarn add react-router-dom</b> 

<p>After installation, you can import the necessary components from the <b>react-router-dom</b> package, as I showed in the examples above</p>

<p> For more information on React Router, please visit their official website: <a href="https://reactrouter.com/" target='_blank' > 👉🏼  https://reactrouter.com/.</a></p>    

<p>On the website, you'll find a comprehensive guide to using React Router, including:</p>    

<p>•  An overview of React Router and its key concepts</p> 

<p>• Installation and setup instructions</p>

<p>• Examples of different use cases and scenarios</p>

<p>• API documentation for each of the core components and utilities</p>

<p>• Advanced topics such as server rendering, code splitting, and nested routes</p>

<p>In addition to the documentation, you can also find a number of helpful resources such as a community forum, a GitHub repository for bug reports and feature requests, and a collection of related projects and plugins.</p>

<b><p>* Texto escrito con la ayuda de un traductor. Si encuentras un error, por favor avísanos *</p></b>
    <div className='ads-container'>  
  {/*  реклама  */}
</div>
    </div>
  )
}

export default EsReact_5;