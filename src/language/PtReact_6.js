import React from 'react';

function PtReact_6() {
  return (
    <div>
      <div className='ad-container'>  
          {/*  реклама  */}
        </div> 

<h1>React Refs</h1>

<p>No React, um <b>ref</b> é uma maneira de acessar o nó DOM subjacente ou a instância do componente React de um elemento renderizado. Você pode usar refs para obter acesso a determinadas propriedades ou métodos de um componente ou para modificar seu comportamento.</p>

<p>Aqui está um exemplo de como criar uma referência no React:</p>

<code>
 <p><span className='red'>import</span>  React, {'{ useRef }'} <span className='red'>from</span> <span className='blue1'>'react'</span>;  </p>

 <p><span className='red'>function</span> <span className='blueviole'>TextInput</span>{'() {'}</p>

 <p>&nbsp;<span className='red'>const</span> inputRef = <span className='blueviole'>useRef</span>(<span className='red'>null</span>); </p> 

 <p>&nbsp;<span className='red'>const</span> {'handleClick = () => {'}</p>

 <p> inputRef.<span className='blue'>current</span>.<span className='blue'>focus</span>();</p>

 <p>{' };'}</p>

 <p>&nbsp;<span className='red'>return</span> {'('}</p>

 <p>{'<'}<span className='green'>div</span>{'>'}</p>

 <p>&nbsp;{'<'}<span className='green'>input</span> <span className='blue'>type</span>=<span className='blue1'>"text"</span> <span className='blue'>ref</span>={'{inputRef} />'}</p>

 <p>&nbsp;{'<'}<span className='green'>button</span> <span className='blue'>onClick</span>={'{handleClick}>'}Focus Input{'</'}<span className='green'>button</span>{'>'}</p>

 <p>{'</'}<span className='green'>div</span>{'>'}</p>

 <p>&nbsp;{' );'}</p>

 <p>{'}'}</p>
</code>

<p>Neste exemplo, criamos um <b>ref</b> usando o gancho <b>useRef</b>. Em seguida, passamos o <b>ref</b> para o elemento <b>input</b> usando a propriedade <b>ref</b>.</p>

<p>Também criamos uma função <b>handleClick</b> que usa a propriedade <b>current</b> de <b>ref</b> para chamar o método <b>focus</b> no elemento <b>entrada</b>. Isso nos permite definir o foco para a entrada quando o usuário clica no botão "Focus Input".</p>

  <p>No geral, usar <b>refs</b> pode ser uma ferramenta poderosa para acessar e manipular componentes no React. No entanto, é importante usá-los com moderação e evitar depender muito de código imperativo, pois isso pode tornar seu código mais difícil de raciocinar e manter.</p>

<b>Emissor de Eventos</b>

<p>Um emissor de evento é um padrão de design que permite que objetos em um programa se comuniquem entre si disparando e manipulando eventos. Em termos simples, um emissor de eventos é um mecanismo para transmitir e receber mensagens dentro de um programa.</p>

<p>Em JavaScript, a classe EventEmitter é um módulo integrado que fornece uma maneira de implementar esse padrão. Aqui está um exemplo de como usar EventEmitter em Node.js:</p>

<code>
  <p><span className='red'>const</span> EventEmitter = <span className='blueviole'>require</span>(<span className='blue1'>'events'</span> ); </p>

  <p><span className='red'>class</span> MyEmitter <span className='red'>extends</span> EventEmitter {"{}"}</p>

  <p><span className='red'>const</span> myEmitter = <span className='red'>new</span> MyEmitter(); </p>

  <p>myEmitter.<span className='blue'>on</span>{'('}<span className='blue1'>'event'</span>, (arg){" => {"}</p>

  <p>console.<span className='blue'>log</span>(<span className='blue1'>'Evento acionado com argumento:'</span>, arg); </p>

  <p>{"});"}</p>

  <p>myEmitter.<span className='blue'>emit</span>(<span className='blue1'>'event', 'Olá Mundo!'</span>); </p>
</code>
<p>Neste exemplo, criamos uma classe <b>MyEmitter</b> personalizada que estende a classe <b>EventEmitter</b>. Em seguida, criamos uma instância desta classe e definimos um ouvinte para o evento <b>event</b> usando o método <b>on</b>. Finalmente, emitimos o evento <b>event</b> e passamos um argumento de string, que aciona o ouvinte e registra o argumento no console.</p>

<p>No geral, usar um emissor de evento pode ser uma maneira útil de implementar um padrão pub-sub em seu código, onde diferentes partes do seu programa podem se comunicar entre si sem precisar estar fortemente acopladas. No entanto, é importante usar esse padrão criteriosamente e não depender muito de eventos, pois isso pode dificultar a compreensão e a depuração do código.</p>

<p><b>No React</b>, você pode usar um padrão de emissor de evento para se comunicar entre diferentes componentes do seu aplicativo. Isso pode ser útil para transmitir dados ou acionar ações entre componentes que não estão diretamente relacionados entre si.</p>

<p>Uma maneira de implementar um padrão de emissor de eventos no React é usar uma biblioteca de terceiros, como <b>eventemitter3 ou mitt</b>. Essas bibliotecas fornecem uma API simples para criar e assinar eventos e podem ser usadas tanto com componentes de classe quanto com componentes funcionais com ganchos.</p>

<p>Aqui está um exemplo de como usar <b>eventemitter3</b> em um componente React:</p>

<code>
  <p><span className='red'>import</span> React, {"{ useEffect }"} <span className='red'>from</span> <span className='blue1'>'react'</span>; </p>

  <p><span className='red'>import</span> EventEmitter <span className='red'>from</span> <span className='blue1'>'eventemitter3'</span>;  </p>

  <p>&nbsp;<span className='red'>const</span>  emitter = <span className='red'>new</span> EventEmitter(); </p>

  <p><span className='red'>function</span> <span className='blueviole'>ComponentA</span>() {"{"}</p>

  <p>&nbsp;<span className='blueviole'>useEffect</span>{"(() => { "}</p>

  <p>&nbsp;&nbsp;emitter.<span className='blue'>emit</span>{'('}<span className='blue1'>'eventA'</span>, {'{'} <span className='blue'>data</span>: <span className='blue1'>'Olá do ComponentA'</span> {'})'}; </p>

  <p>{"}, []);"}</p>

  <p>&nbsp;&nbsp;<span className='red'>return</span> {'<'}<span className='green'>div</span>{'>'}ComponentA{'</'}<span className='green'>div</span>{">; "}</p>

  <p>{"} "}</p>

  <p><span className='red'>function</span> <span className='blueviole'>ComponentB</span>{"() {"}</p>

  <p>&nbsp;<span className='blueviole'>useEffect</span>{"(() => {"}</p>

  <p>&nbsp;&nbsp;emitter.<span className='blue'>on</span>(<span className='blue1'>'eventA'</span>, handleEventA); </p>

  <p>&nbsp;&nbsp;<span className='red'>return</span>  () {'=>'} emitter.<span className='blue'>off</span>(<span className='blue1'>'eventA'</span>, handleEventA);</p>

  <p>{" }, []);"}</p>

  <p>&nbsp;<span className='red'>const</span>  handleEventA = (payload) {"=> {"}</p>

  <p>&nbsp;&nbsp;{'console.'}<span className='blue'>log</span>(<span className='blue1'>'Received eventA:'</span>, payload.<span className='blue'>data</span>);</p>

  <p>{" }; "}</p>

  <p>&nbsp;&nbsp;<span className='red'>return</span> {'<'}<span className='green'>div</span>{'>'}ComponentB{'</'}<span className='green'>div</span>{">; "}</p>

  <p>{"}"}</p>
</code>

<p>Neste exemplo, criamos uma instância de <b>EventEmitter chamada emitter</b>. Em <b>ComponentA</b>, usamos o gancho <b>useEffect</b> para emitir um evento chamado <b>eventA</b> com alguns dados. Em <b>ComponentB</b>, usamos o gancho <b>useEffect</b> para assinar o evento <b>eventA</b> e definimos uma função de retorno chamada <b>handleEventA</b> que registra os dados no console.</p>

<p>Quando o ComponentA é montado, ele emite o evento eventA com alguns dados. Quando o ComponentB é montado, ele se inscreve no evento eventA e começa a escutar quaisquer eventos com esse nome. Quando eventA é emitido, handleEventA é chamado com os dados e registra a mensagem no console.</p>

<p>No geral, usar um padrão de emissor de evento no React pode ser uma maneira útil de implementar a comunicação entre componentes que não estão diretamente relacionados entre si. No entanto, é importante usar esse padrão criteriosamente e não depender muito de eventos, pois isso pode dificultar a compreensão e a depuração do código.</p>

<h4>React Animation</h4>

<p>No React, você pode adicionar animações aos seus componentes usando diversas técnicas. As animações podem tornar sua IU mais envolvente e fornecer feedback visual ao usuário quando as coisas mudam.</p>

<p>Uma maneira popular de implementar animações no React é usar transições ou animações CSS. Você pode adicionar classes CSS aos seus componentes para acionar essas animações e usar a propriedade <b>className</b> do React para alternar as classes com base no estado do componente.</p>

<p>Veja um exemplo de como usar transições CSS para animar um botão quando ele é clicado:</p>

<code>
  <p><span className='red'>import</span> {'React, { useState }'} <span className='red'>from</span> <span className='blue1'>'react'</span>;</p> 

  <p><span className='red'>import</span>  <span className='blue1'>'./Button.css'</span>;</p>

  <p><span className='red'>function</span> <span className='blueviole'>Button</span>{"() {"}</p>

  <p>&nbsp;<span className='red'>const</span>  {"[isClicked, setIsClicked]"} = <span className='blueviole'>useState</span>(<span className='blue1'>false</span>); </p>

  <p>&nbsp;<span className='red'>const</span> {"handleClick = () => { "}</p>

  <p><span className='blueviole'>setIsClicked</span>(<span className='blue1'>true</span>); </p>

  <p><span className='blueviole'>setTimeout</span>{"(() => "}<span className='blueviole'>setIsClicked</span>(<span className='blue1'>false</span>), <span className='blue1'>1000</span>{')'};</p>

  <p>{"};"}</p>

  <p>&nbsp;<span className='red'>return</span> {"("}</p>

  <p>{'<'}<span className='green'>button</span> <span className='blue'>className</span>={'{'}<span className='blue1'>`button {'${'}</span>isClicked ? <span className='blue1'>'clicked'</span> : <span className='blue1'>''{'}`'}</span>{'}'} <span className='blue'>onClick</span>={'{handleClick}>'}</p>

  <p>&nbsp;{"Clique em mim! "}</p>

  <p>{"</"}<span className='green'>button</span>{">"}</p>

  <p>{"); "}</p>

  <p>{" }"}</p>
</code>
<p>Neste exemplo, definimos um componente chamado <b>Button</b> que usa o gancho <b>useState</b> para controlar se o botão foi clicado ou não. Quando o botão é clicado, definimos o estado <b>isClicked</b> como <b>true</b>, o que adiciona a classe <b>clicked</b> ao botão. Em seguida, usamos <b>setTimeout</b> para remover a classe <b>clicked</b> após 1 segundo, o que aciona a transição de volta ao estado original.</p>

<p>Também definimos um arquivo CSS chamado <b>Button.css</b> que define os estilos do botão e da <b>classe</b> clicada:</p>

 <code>
    <p>{'.button {'}</p>

    <p>&nbsp;&nbsp;<span className='blue'>background-color</span>: <span className='blue1'>blue</span>; </p>

    <p>&nbsp;&nbsp;<span className='blue'>color</span>: <span className='blue1'>white</span>;</p>

    <p>&nbsp;&nbsp;<span className='blue'>padding</span>: 10<span className='blue1'>px</span> 20<span className='blue1'>px</span>; </p>

    <p>&nbsp;&nbsp;<span className='blue'>border</span>: <span className='blue1'>none</span>;</p>

    <p>&nbsp;&nbsp;<span className='blue'>border-radius</span>: 5<span className='blue1'>px</span>;</p>

    <p>&nbsp;&nbsp;<span className='blue'>transition</span>: <span className='blue1'>background-color</span> 0.5<span className='blue1'>s</span>; </p>

    <p>{'}'}</p>

    <p>{'.clicked {'}</p>

    <p>&nbsp;&nbsp;<span className='blue'>background-color</span>: <span className='blue1'>red</span>; </p>

    <p>{'}'}</p>
 </code>
 
 <p>Neste arquivo CSS, definimos os estilos do botão e especificamos uma propriedade <b>transition</b> na classe <b>button</b> para animar as alterações na <b>cor de fundo</b> propriedade. Também definimos a classe <b>clicked</b>, que altera a <b>cor de fundo</b> para vermelho quando aplicada.</p>

<p>Outra maneira de implementar animações no React é usar uma biblioteca de terceiros, como <b>react-spring ou framer-motion</b>. Essas bibliotecas fornecem uma API mais flexível para a criação de animações complexas e podem ser úteis para casos de uso mais avançados.</p>

<p><b>react-transition-group</b> é uma biblioteca de terceiros para React que fornece uma maneira de adicionar facilmente transições e animações CSS aos seus componentes. Ele fornece um conjunto de componentes e APIs para gerenciar o ciclo de vida das transições, incluindo montagem e desmontagem de elementos, adição e remoção de classes e atraso de animações.</p>

<b>{'npm install react-transition-group'}</b>

<p>Os componentes principais do <b>react-transition-group são Transition, CSSTransition e TransitionGroup</b>. Aqui está uma breve visão geral de cada componente:</p>

<p>• <b>Transição</b>: Este componente define o ciclo de vida básico de uma transição, incluindo estados de entrada, entrada, saída e saída. Você pode usar este componente para acionar </p>

<p>• <b>CSSTransition</b>: Este componente estende o componente <b>Transition</b> e adiciona suporte para transições e animações CSS. Você pode especificar classes CSS para aplicar ao seu componente durante os diferentes estágios da transição, como <b>enter, enter-active, exit e exit-active</b>.</p>

<p>• <b>TransitionGroup</b>: Este componente é usado para gerenciar um conjunto de componentes <b>Transition ou CSSTransition</b>. Ele rastreia a montagem e desmontagem de componentes e pode aplicar diferentes efeitos de transição a cada componente. </p>

<p>Aqui está um exemplo de como usar <b>react-transition-group</b> para adicionar uma animação fade-in a um componente quando ele é montado:</p>

<code>
  <p><span className='red'>import</span>  {'React, { useState }'} <span className='red'>from</span> <span className='blue1'>'react'</span>; </p>

  <p><span className='red'>import</span>  {'{ CSSTransition }'} <span className='red'>from</span> <span className='blue1'>'react-transition-group'</span>;</p>

  <p><span className='red'>import</span>  <span className='blue1'>'./FadeIn.css'</span>;</p>

  <p><span className='red'>function</span> <span className='blueviole'>FadeIn</span>{"() { "}</p>

  <p>&nbsp;<span className='red'>const</span> {'[isMounted, setIsMounted]'} = <span className='blueviole'>useState</span>(<span className='blue1'>false</span>); </p>

  <p>&nbsp;<span className='red'>const</span> {'handleMount = () => '}<span className='blueviole'>setIsMounted</span>(<span className='blue1'>true</span>);  </p>

  <p>&nbsp;<span className='red'>return</span> {"( "}</p>

  <p>{"<> "}</p>

  <p>&nbsp;{'<'}<span className='green'>button</span> <span className='blue'>onClick</span>={'{handleMount}>Mount component</'}<span className='green'>button</span>{'>'}</p>

  <p>&nbsp;{'<'}<span className='blueviole'>CSSTransition</span> <span className='blue'>in</span>={'{isMounted}'} <span className='blue'>timeout</span>={'{'}<span className='blue1'>300</span>{'}'} <span className='blue'>classNames</span>=<span className='blue1'>"fade"</span>{'>'}</p>

  <p>&nbsp;{'<'}<span className='green'>div</span> <span className='blue'>className</span>=<span className='blue1'>"content"</span>{'>'}Olá Mundo!{'</'}<span className='green'>div</span>{'>'}</p>

  <p>&nbsp;{"</"}<span className='blueviole'>CSSTransition</span>{">"}</p>

  <p>{" </> "}</p>

  <p>&nbsp;{"); "}</p>

  <p>{"} "}</p>
</code>

<p>Neste exemplo, definimos um componente chamado <b>FadeIn</b> que usa o gancho <b>useState</b> para controlar se o componente foi montado ou não. Quando o botão é clicado, definimos o estado <b>isMounted</b> como <b>true</b>, o que aciona o componente <b>CSSTransition</b> para renderizar o <b>conteúdo</b > div com uma animação fade-in. Também definimos um arquivo CSS chamado <b>FadeIn.css</b> que define os estilos e a animação do efeito fade-in:</p>

<code>
  <p>{" .fade-enter { "}</p>

  <p>&nbsp;&nbsp;<span className='blue'>opacity</span>: 0;</p>

  <p>{"} "}</p>

  <p>{".fade-enter-active { "}</p>

  <p>&nbsp;&nbsp;<span className='blue'>opacity</span>: 1; </p>

  <p>&nbsp;&nbsp;<span className='blue'>transition</span>: <span className='blue1'>opacity</span> 300<span className='blue1'>ms ease-in</span>;  </p>

  <p>{"} "}</p>

  <p>{".fade-exit { "}</p>

  <p>&nbsp;&nbsp;<span className='blue'>opacity</span>: 1;  </p>

  <p>{"} "}</p>

  <p>{".fade-exit-active { "}</p>

  <p>&nbsp;&nbsp;<span className='blue'>opacity</span>: 0;  </p>

  <p>&nbsp;&nbsp;<span className='blue'>transition</span> : <span className='blue1'>opacity</span> 300<span className='blue1'>ms ease-out</span>; </p>

  <p>{"}"}</p>
</code>

<p>Neste arquivo CSS definimos as classes para as diferentes etapas da transição. Quando o componente entra, ele tem uma opacidade de 0 (<b>fade-enter</b>) e transita para uma opacidade de 1 em 300ms (<b>fade-enter-active</b>). Quando o componente é encerrado, ele tem uma opacidade de 1 (<b>fade-exit</b>) e transita para uma opacidade de 0 ao longo de 300 ms (<b>fade-exit-active</b>).</p >

<p>No geral, adicionar animações aos componentes do React pode tornar sua IU mais envolvente e fornecer feedback visual ao usuário. Usando transições ou animações CSS ou uma biblioteca de terceiros, você pode facilmente adicionar animações aos seus componentes e torná-los mais dinâmicos.</p>
    
    <b><p>* Texto escrito com a ajuda de um tradutor. Se encontrar algum erro, por favor, avise-nos *</p></b>
    
    <div className='ads-container'>  
      {/*  реклама  */}
      </div>
    </div>
  )
}

export default PtReact_6;