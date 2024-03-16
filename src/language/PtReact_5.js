import React from 'react';

function PtReact_5() {
  return (
    <div>
      <div className='ad-container'>  
          {/*  реклама  */}
        </div> 
      
      <h1>React Router DOM</h1>

<p>O React Router Dom é uma biblioteca popular usada em aplicações React para gerenciar o roteamento do lado do cliente. Ele permite que os desenvolvedores criem diferentes rotas para diferentes componentes e os renderizem com base no URL atual. Isso proporciona uma experiência de usuário mais intuitiva e perfeita, pois os usuários podem navegar por diferentes páginas e componentes sem precisar recarregar a página inteira.</p>

<p>O React Router Dom é baseado na biblioteca React Router e projetado especificamente para uso no navegador. Ele usa a API de Histórico do navegador para manipular o URL e manter a interface do usuário sincronizada com o URL atual. Ele também fornece uma abordagem declarativa para definir rotas, facilitando o gerenciamento de aplicativos complexos com múltiplas rotas e componentes aninhados.</p>

<p>Algumas das principais características do React Router Dom incluem:</p>

<p> • Roteamento declarativo: Você pode definir suas rotas como componentes JSX, facilitando o entendimento e o gerenciamento da lógica de roteamento.</p>

<p> • Rotas aninhadas: Você pode aninhar rotas dentro de outras rotas, permitindo cenários de roteamento mais complexos</p>

<p> • Parâmetros de rota: Você pode definir parâmetros dinâmicos dentro de suas rotas, permitindo passar dados entre componentes com base no URL atual.</p>

<p> • Gerenciamento de histórico: O React Router Dom fornece ferramentas para gerenciar o histórico do navegador, permitindo navegar programaticamente entre páginas e lidar com a navegação para frente/trás.</p>

<p>Aqui está um exemplo simples de como o React Router Dom pode ser usado em uma aplicação React: <b>(versão antiga)v5</b></p>

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

<p>Neste exemplo, estamos importando os componentes necessários do React Router Dom (especificamente, <b>BrowserRouter, Route e Link</b>). Em seguida, definimos dois componentes simples para nossas páginas home e about.</p>

<p>Dentro do componente <b>App</b>, envolvemos tudo em um componente <b>Router</b>, que fornece o contexto de roteamento para o restante da aplicação. Em seguida, definimos uma barra de navegação simples usando o componente <b>Link</b> para navegar entre nossas duas páginas.</p>

<p>Finalmente, definimos dois componentes <b>Route</b> que renderizam os componentes <b>Home e About</b> com base no URL atual.</p>

<p>O React Router Dom 6.4 é a versão mais recente da biblioteca, lançada em fevereiro de 2022. Algumas das novas funcionalidades nesta versão incluem:</p>

<p>A versão mais recente (v6) tem alterações em algumas APIs e coleções, então posso escolher um novo exemplo usando o React Router Dom versão 6.4:</p>

<p>aqui está um exemplo usando o React Router Dom versão 6.4:</p>

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

   <b><p>* Texto escrito com a ajuda de um tradutor. Se encontrar algum erro, por favor, avise-nos *</p></b>
    
    <div className='ads-container'>  
      {/*  реклама  */}
      </div>
    </div>
  )
}

export default PtReact_5;