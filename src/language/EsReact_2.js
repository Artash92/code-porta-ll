import React from 'react';

function EsReact_2() {
  return (
    <div>
      <div className='ad-container'>  
          {/*  реклама  */}
        </div> 

      <h1>JSX</h1>

<p>JSX es una extensión de sintaxis para JavaScript que te permite escribir código similar a HTML en tus archivos JavaScript. Se utiliza ampliamente en React para definir la estructura y el diseño de los componentes de la interfaz de usuario.</p>    

  <p>Aquí tienes un ejemplo de cómo funciona JSX:</p>

<code>
 <p><span className='red'>import</span> React <span className='red'>from</span> <span className='blue1'>'react'</span>; </p>

 <p><span className='red'>function</span> <span className='blueviole'>MyComponent</span>() {'{'}</p>

 <p><span className='red'>return</span> {'('}</p>

 <p>{'<'}<span className='green'>div</span>{'>'}</p>

 <p>&nbsp;{'<'}<span className='green'>h1</span>{'>'}¡Hola, mundo!{'</'}<span className='green'>h1</span>{'>'} </p>

 <p>&nbsp;{'<'}<span className='green'>p</span>{'>'}Este es un ejemplo simple de JSX.{'</'}<span className='green'>p</span>{'>'} </p>

 <p>{'</'}<span className='green'>div</span>{'>'}</p>

 <p>&nbsp;{'); '}</p>

 <p>{'}'}</p>

<p><span className='red'>export default</span> MyComponent;</p> 
</code>

  <p>En este ejemplo, estamos definiendo un componente React simple usando JSX. El componente renderiza un elemento <b>div</b> que contiene un elemento <b>h1 y un p</b>. Observa que el código similar a HTML está encerrado entre paréntesis y se define usando la sintaxis de JSX.</p>

  <p>JSX te permite combinar fácilmente código similar a HTML con lógica de JavaScript. Por ejemplo, puedes usar variables y expresiones de JavaScript dentro de tu código JSX:</p>
  
<code>
 <p><span className='red'>import</span> React <span className='red'>from</span> <span className='blue1'>'react'</span>;</p>

 <p><span className='red'>function</span> <span className='blueviole'>MyComponent</span>() {'{'}</p>

<p><span className='red'>const</span> name = <span className='blue1'>'John'</span>;  </p>

<p><span className='red'>return</span> {'('}</p>

<p>{'<'}<span className='green'>div</span>{'>'} </p>

<p>&nbsp;{'<'}<span className='green'>h1</span>{'>'} ¡Hola,{'{'}name{'}'}!{'</'}<span className='green'>h1</span>{'>'} </p>

<p>&nbsp;{'<'}<span className='green'>p</span>{'>'}Este es un ejemplo simple de JSX.{'</'}<span className='green'>p</span>{'>'} </p>

<p>{'</'}<span className='green'>div</span>{'>'} </p>

<p>&nbsp;{");"}</p>

<p>{" } "}</p>

<p><span className='red'>export default</span> MyComponent;</p> 
</code>
 
  <p>En este ejemplo, estamos usando una variable de JavaScript <b>(name)</b> dentro de nuestro código JSX para renderizar dinámicamente un saludo personalizado.</p>

  <p>JSX no es necesario para el desarrollo de React, pero se recomienda encarecidamente ya que facilita mucho escribir y gestionar componentes de interfaz de usuario complejos. Cuando escribes código JSX, se transpila a código JavaScript regular que puede ser ejecutado por el navegador.</p>
  
  <p>Existen dos tipos principales de componentes React: componentes funcionales y componentes de clase.</p>
  
  <p>Los componentes funcionales se definen como funciones de JavaScript que retornan un elemento JSX. Normalmente se usan para componentes de interfaz de usuario simples y presentacionales que no tienen ningún estado o métodos de ciclo de vida.</p>
  
  <p>Aquí tienes un ejemplo de un componente funcional simple:</p>

<code>
    <p><span className='red'>import</span> React <span className='red'>from</span> <span className='blue1'>'react'</span>; </p>

    <p><span className='red'>function</span> <span className='blueviole'>MyComponent</span>(props) {'{'}</p>

    <p><span className='red'>return</span> {'('}</p>

    <p> {'<'}<span className='green'>div</span>{'>'} </p>

    <p>&nbsp;{'<'}<span className='green'>h1</span>{'>'}¡Hola,{'{'}props.<span className='blue'>name</span>{'}'}!{'</'}<span className='green'>h1</span>{'>'} </p>

    <p>&nbsp;{'<'}<span className='green'>p</span>{'>'}Este es un componente funcional.{'</'}<span className='green'>p</span>{'>'} </p>

    <p>{'</'}<span className='green'>div</span>{'>'} </p>

    <p>&nbsp;{');'}</p>

    <p>{'}'}</p>

    <p><span className='red'>export default</span> MyComponent;</p>  
</code>

<p>En este ejemplo, estamos definiendo un componente funcional llamado <b>MyComponent</b> que recibe un objeto <b>props</b> como argumento. El componente devuelve un elemento JSX que incluye un elemento h1 con un saludo personalizado y un elemento <b>p</b> con un mensaje.</p>

<p>Los componentes de clase, por otro lado, se definen como clases de JavaScript que extienden la clase <b>React.Component</b>. Se utilizan para componentes de interfaz de usuario más complejos que necesitan gestionar el estado y tienen métodos de ciclo de vida.</p>

<p>Aquí tienes un ejemplo de un componente de clase simple:</p>

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

    <p>{'<'}<span className='green'>h1</span>{'>'}Conteo: {'{'}<span className='red'>this</span>.<span className='blue'>state</span>.<span className='blue'>count</span>{'}'}{'</'}<span className='green'>h1</span>{'>'}</p>

    <p>{'<'}<span className='green'>button</span> <span className='blue'>onClick</span> = {'{() => '}<span className='red'>this</span>.<span className='blue'>setState</span>{'({'} <span className='blue'>count</span>:<span className='red'>this</span>.<span className='blue'>state</span>.<span className='blue'>count</span> + <span className='blue1'>1</span> {'})}'}{'>'}Incremento{'</'}<span className='green'>button</span>{'>'}</p>

    <p>{'</'}<span className='blue'>div</span>{'>'} </p>

    <p>&nbsp;&nbsp;{');'}</p>

    <p>&nbsp;{'}'}</p>

    <p>{'}'}</p>

    <p><span className='red'>export default</span> MyComponent;</p>  
</code>
    
<p>En este ejemplo, estamos definiendo un componente de clase llamado MyComponent que tiene una propiedad de estado llamada <b>count</b> y un método <b>render</b> que devuelve un elemento JSX con un elemento h1 que muestra el conteo actual y un elemento <b>button</b> que incrementa el conteo cuando se hace clic.</p>

<p>Los componentes pueden componerse y anidarse para crear elementos de interfaz de usuario complejos. También pueden aceptar props como entradas, lo que les permite personalizarse y reutilizarse en toda la aplicación.</p>

<p><b>{'<Component />'}</b> es una sintaxis utilizada en React para renderizar un componente. Se llama etiqueta de autocierre o etiqueta vacía, y es equivalente a llamar al componente como una función sin argumentos.</p>

<p>Por ejemplo, digamos que tenemos un componente simple llamado <b>MyComponent</b>:</p>

<code>
  <p><span className='red'>function</span> <span className='blueviole'>MyComponent</span>() {'{'}</p>

  <p><span className='red'>return</span> {'('}</p>

  <p>{'<'}<span className='green'>div</span>{'>'}</p>

  <p>&nbsp;{'<'}<span className='green'>h1</span>{'>'}¡Hola, mundo!{'</'}<span className='green'>h1</span>{'>'} </p>

  <p>{'</'}<span className='green'>div</span>{'>'}</p>

  <p>&nbsp;{');'}</p>

  <p>{'}'}</p>
</code>
   
<p>Para renderizar este componente, usaríamos la sintaxis <b>{'<MyComponent />'}</b>:</p>

 <code>
  <p>ReactDOM.<span className='blue'>render</span>{'('} </p>

  <p>{'<'}<span className='blueviole'>MyComponent </span>{'/>'}, </p>

  <p>document.<span className='blue'>getElementById</span>(<span className='blue1'>'root'</span>)</p> 
  
  <p>{');'}</p>
 </code>

<p>La sintaxis <b>{'<MyComponent />'}</b> crea una instancia del componente MyComponent y lo renderiza en el DOM.</p>


<b><p>* Texto escrito con la ayuda de un traductor. Si encuentras un error, por favor avísanos *</p></b>
    <div className='ads-container'>  
  {/*  реклама  */}
</div>
    </div>
  )
}

export default EsReact_2;