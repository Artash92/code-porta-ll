import React from 'react';

function PtReact_2() {
  return (
    <div>

<div className='ad-container'>  
          {/*  реклама  */}
        </div> 

      <h1>JSX</h1>
  
  <p>JSX é uma extensão de sintaxe para JavaScript que permite escrever código semelhante a HTML em seus arquivos JavaScript. É usado extensivamente no React para definir a estrutura e o layout dos componentes de interface do usuário.</p>

  <p>Aqui está um exemplo de como JSX funciona:</p>

  <code>
   <p><span className='red'>import</span> React <span className='red'>from</span> <span className='blue1'>'react'</span>; </p>
   <p><span className='red'>function</span> <span className='blueviole'>MyComponent</span>() {'{'}</p>
   <p><span className='red'>return</span> {'('}</p>
   <p>{'<'}<span className='green'>div</span>{'>'}</p>
   <p>&nbsp;{'<'}<span className='green'>h1</span>{'>'}Olá, mundo!{'</'}<span className='green'>h1</span>{'>'} </p>
   <p>&nbsp;{'<'}<span className='green'>p</span>{'>'}Este é um exemplo simples de JSX.{'</'}<span className='green'>p</span>{'>'} </p>
   <p>{'</'}<span className='green'>div</span>{'>'}</p>
   <p>&nbsp;{'); '}</p>
   <p>{'}'}</p>
  <p><span className='red'>export default</span> MyComponent;</p> 
</code>

<p>Neste exemplo, estamos definindo um componente React simples usando JSX. O componente renderiza um elemento <b>div</b> que contém um elemento <b>h1</b> e um elemento <b>p</b>. Observe que o código semelhante a HTML está envolvido em parênteses e é definido usando a sintaxe JSX.</p>

<p>O JSX permite combinar facilmente código semelhante a HTML com lógica JavaScript. Por exemplo, você pode usar variáveis e expressões JavaScript dentro do seu código JSX:</p>

<code>
   <p><span className='red'>import</span> React <span className='red'>from</span> <span className='blue1'>'react'</span>;</p>
   <p><span className='red'>function</span> <span className='blueviole'>MyComponent</span>() {'{'}</p>
  <p><span className='red'>const</span> name = <span className='blue1'>'John'</span>;  </p>
  <p><span className='red'>return</span> {'('}</p>
  <p>{'<'}<span className='green'>div</span>{'>'} </p>
  <p>&nbsp;{'<'}<span className='green'>h1</span>{'>'} Olá,{'{'}name{'}'}!{'</'}<span className='green'>h1</span>{'>'} </p>
  <p>&nbsp;{'<'}<span className='green'>p</span>{'>'}Este é um exemplo simples de JSX.{'</'}<span className='green'>p</span>{'>'} </p>
  <p>{'</'}<span className='green'>div</span>{'>'} </p>
  <p>&nbsp;{");"}</p>
  <p>{" } "}</p>
  <p><span className='red'>export default</span> MyComponent;</p> 
</code>

<p>Neste exemplo, estamos usando uma variável JavaScript <b>(name)</b> dentro do nosso código JSX para renderizar dinamicamente uma saudação personalizada.</p>

<p>O JSX não é necessário para o desenvolvimento do React, mas é altamente recomendado, pois facilita muito a escrita e o gerenciamento de componentes de interface de usuário complexos. Quando você escreve código JSX, ele é transpilado para código JavaScript regular que pode ser executado pelo navegador.</p>

<p>Há dois tipos principais de componentes React: componentes funcionais e componentes de classe.</p>

<p>Os componentes funcionais são definidos como funções JavaScript que retornam um elemento JSX. Eles são tipicamente usados para componentes de interface de usuário simples e apresentacionais que não possuem nenhum estado ou métodos de ciclo de vida.</p>

<p>Aqui está um exemplo de um componente funcional simples:</p>

 <code>
    <p><span className='red'>import</span> React <span className='red'>from</span> <span className='blue1'>'react'</span>; </p>

    <p><span className='red'>function</span> <span className='blueviole'>MyComponent</span>(props) {'{'}</p>

    <p><span className='red'>return</span> {'('}</p>

    <p>{'<'}<span className='green'>div</span>{'>'} </p>

    <p>&nbsp;{'<'}<span className='green'>h1</span>{'>'}Olá,{'{'}props.<span className='blue'>name</span>{'}'}!{'</'}<span className='green'>h1</span>{'>'} </p>

    <p>&nbsp;{'<'}<span className='green'>p</span>{'>'}Este é um componente funcional.{'</'}<span className='green'>p</span>{'>'} </p>

    <p>{'</'}<span className='green'>div</span>{'>'} </p>

    <p>&nbsp;{');'}</p>

    <p>{'}'}</p>

    <p><span className='red'>export default</span> MyComponent;</p>  
 </code>

<p>Neste exemplo, estamos definindo um componente funcional chamado <b>MyComponent</b> que recebe um objeto <b>props</b> como argumento. O componente retorna um elemento JSX que inclui um elemento h1 com uma saudação personalizada e um elemento <b>p</b> com uma mensagem.</p>

<p>Por outro lado, os componentes de classe são definidos como classes JavaScript que estendem a classe <b>React.Component</b>. Eles são usados para componentes de interface de usuário mais complexos que precisam gerenciar estado e têm métodos de ciclo de vida.</p>

<p>Aqui está um exemplo de um componente de classe simples:</p>

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

    <p>{'<'}<span className='green'>h1</span>{'>'}Contagem: {'{'}<span className='red'>this</span>.<span className='blue'>state</span>.<span className='blue'>count</span>{'}'}{'</'}<span className='blue'>h1</span>{'>'}</p>

    <p>{'<'}<span className='green'>button</span> <span className='blue'>onClick</span> = {'{() => '}<span className='red'>this</span>.<span className='blue'>setState</span>{'({'} <span className='blue'>count</span>:<span className='red'>this</span>.<span className='blue'>state</span>.<span className='blue'>count</span> + <span className='blue1'>1</span> {'})}'}{'>'}Incrementar{'</'}<span className='green'>button</span>{'>'}</p>

    <p>{'</'}<span className='blue'>div</span>{'>'} </p>

    <p>&nbsp;&nbsp;{');'}</p>

    <p>&nbsp;{'}'}</p>

    <p>{'}'}</p>

    <p><span className='red'>export default</span> MyComponent;</p>
</code>

<p>Neste exemplo, estamos definindo um componente de classe chamado MyComponent que possui uma propriedade de estado chamada <b>count</b> e um método de renderização que retorna um elemento JSX com um elemento h1 que exibe a contagem atual e um elemento <b>button</b> que incrementa a contagem quando clicado.</p>

<p>Os componentes podem ser compostos e aninhados para criar elementos de interface de usuário complexos. Eles também podem aceitar props como entradas, o que lhes permite serem personalizados e reutilizados em toda a aplicação.</p>

<p><b>{'<Component />'}</b> é uma sintaxe usada no React para renderizar um componente. É chamado de tag de auto-fechamento ou tag vazia, e é equivalente a chamar o componente como uma função sem argumentos.</p>

<p>Por exemplo, digamos que temos um componente simples chamado <b>MyComponent</b>:</p>

<code>
  <p><span className='red'>function</span> <span className='blueviole'>MyComponent</span>() {'{'}</p>
  <p><span className='red'>return</span> {'('}</p>
  <p>{'<'}<span className='green'>div</span>{'>'}</p>
  <p>&nbsp;{'<'}<span className='green'>h1</span>{'>'}Olá, mundo!{'</'}<span className='green'>h1</span>{'>'} </p>
  <p>{'</'}<span className='green'>div</span>{'>'}</p>
  <p>&nbsp;{');'}</p>
  <p>{'}'}</p>
</code>

<p>Para renderizar este componente, usaríamos a sintaxe <b>{'<MyComponent /> '}</b>:</p>

 <code>
  <p>ReactDOM.<span className='blue'>render</span>{'('} </p>
  <p>{'<'}<span className='blueviole'>MyComponent </span>{'/>'}, </p>
  <p>document.<span className='blue'>getElementById</span>(<span className='blue1'>'root'</span>)</p>
  <p>{');'}</p> 
 </code>

<p>A sintaxe <b>{'<MyComponent /> '}</b> cria uma instância do componente MyComponent e a renderiza no DOM.</p>

<b><p>* Texto escrito com a ajuda de um tradutor. Se encontrar algum erro, por favor, avise-nos *</p></b>
    
    <div className='ads-container'>  
      {/*  реклама  */}
      </div>
    </div>
  )
}

export default PtReact_2;