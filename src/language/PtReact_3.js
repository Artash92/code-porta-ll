import React from 'react';

function PtReact_3() {
  return (
    <div>
      <div className='ad-container'>  
          {/*  реклама  */}
        </div> 

<h1>Eventos do React</h1>

<p>O React oferece uma maneira de lidar com eventos em componentes, semelhante ao tratamento de eventos em JavaScript puro. No React, você pode adicionar manipuladores de eventos a qualquer elemento JSX usando a sintaxe on<b>[NomeDoEvento]</b></p>

<p>Por exemplo, digamos que tenhamos um botão em um componente React que queremos lidar com um evento de clique:</p>

<code>
      <p><span className='red'>function</span> <span className='blueviole'>MyButton</span>(props) {'{'} </p>

      <p><span className='red'>function</span> <span className='blueviole'>handleClick</span>() {'{'}</p>

      <p><span className='blue'>{"console.log"}</span>(<span className='blue1'>'Button clicked'</span>); </p>

      <p>{' }'}</p>

      <p><span className='red'>return</span> {'('}</p>

      <p>{'<'}<span className='green'>button</span> <span className='blue'>onClick</span>={'{handleClick}'}{'>'}Clique em mim{'</'}<span className='green'>button</span>{'>'}  </p>

      <p>&nbsp;{');'}</p>

      <p>{'} '}</p>
    </code>

<p>Neste exemplo, definimos um componente <b>MyButton</b> que contém um elemento de botão com uma propriedade <b>onClick</b> definida como uma função chamada <b>lidarComClique</b>. Quando o botão é clicado, a função <b>lidarComClique</b> será chamada, e a mensagem "Button clicked" será registrada no console.</p>

<p>Você também pode passar argumentos para a função manipuladora de eventos usando funções de seta. Por exemplo, digamos que tenhamos uma lista de itens que queremos renderizar como botões:</p>

<code>
     <p><span className='red'>function</span> <span className='blueviole'>ItemList</span>(props) {'{'}</p>

    <p><span className='red'>const</span> items = props.<span className='blue'>items</span>; </p>

    <p><span className='red'>function</span> <span className='blueviole'>handleClick</span>(item) {'{'}</p>

    <p><span className='blue'>{'console.log'}</span>(<span className='blue1'>`Item $</span><span className='blue1'>{'{item'}.<span className='blue'>id</span>{'}'}</span><span className='blue1'> clicked`</span>); </p>

    <p>&nbsp;{'}'}</p>

    <p><span className='red'>const</span> buttonList = {'items'}.<span className='blue'>map</span>{'('}(item) {'=>'} </p>

    <p>{'<'}<span className='green'>button</span> <span className='blue1'>key</span>= {'{item'}.<span className='blue'>{'id}'}</span> <span className='blue'>onClick</span>={'{()'} {'=>'} <span className='blueviole'>handleClick</span>(item){'}'}{'>'}</p>

    <p>{'{item'}.<span className='blue'>{'name}'}</span></p>

    <p>{'</'}<span className='green'>button</span>{'>'}</p>

    <p>{' ); '}</p>

    <p><span className='red'>return</span> {'('}</p>

    <p>{'<'}<span className='green'>div</span>{'>'}</p>

    <p>{'{buttonList} '}</p>

    <p>{'</'}<span className='green'>div</span>{'>'}</p>

    <p>&nbsp;{');'}</p>

    <p>{'} '}</p>
 </code>


<p>Neste exemplo, definimos um componente <b>ItemList</b> que recebe uma propriedade <b>items</b>. Definimos uma função <b>handleClick</b> que recebe um argumento <b>item</b>, que será usado para registrar uma mensagem no console quando o botão correspondente for clicado.</p>

<p>Usamos o método <b>map</b> para criar um novo array de elementos <b>{'<button>'}</b>, onde cada elemento corresponde a um item na propriedade <b>items</b>. Definimos a propriedade <b>key</b> de cada elemento <b>{'<button>'}</b> para o <b>id</b> do item correspondente, que é um requisito no React para ajudá-lo a otimizar as atualizações. Também usamos uma função de seta para passar o objeto <b>item</b> para a função <b>handleClick</b> quando o botão é clicado.</p>

<p>Em seguida, retornamos um elemento <b>{'<div>'}</b> que contém o array <b>buttonList</b>.</p>

<h5>React Events</h5>

    <p className='blue1'>onKeyDown</p>

    <p className='blue1'>onKeyPress </p>

    <p className='blue1'>onKeyUp</p>

    <p className='blue1'>onFocus</p>

    <p className='blue1'>onBlur</p>

    <p className='blue1'>onChange</p>

    <p className='blue1'>onInput</p>

    <p className='blue1'>onInvalid </p>

    <p className='blue1'>onSubmit</p>

    <p className='blue1'>onClick</p>

    <p className='blue1'>onContextMenu</p>

    <p className='blue1'>onDoubleClick</p>

    <p className='blue1'>onDrag</p>

    <p className='blue1'>onDragEnd</p>

    <p className='blue1'>onDragEnter</p>

    <p className='blue1'>onDragExit</p>

    <p className='blue1'>onDragLeave</p>

    <p><a href="https://react.dev/reference/react-dom/components/common#react-event-object" target='_blank' > 👉🏼 React https://react.dev/reference/react-dom/components/common#react-event-object</a> </p>

    <b>Estado React em componentes de classe</b>

    <p>No React, o estado também pode ser gerenciado usando componentes de classe. Os componentes de classe são classes JavaScript que estendem a classe <b>React.Component</b> e implementam um método <b>render</b> que retorna a interface do usuário do componente.</p>

    <p>Aqui está um exemplo de um componente de classe que gerencia o estado:</p>

    <code>
       <p><span className='red'>import</span> React,{"{ Component }"} <span className='red'>from</span> 'react'; </p>

       <p> <span className='red'>class</span> Counter <span className='red'>extends</span> Component {'{'}</p>
    
       <p><span className='blue'>constructor</span>(props) {'{'}</p>

       <p>super (props);</p>

       <p><span className='red'>this</span>.<span className='blue'>state</span> = {'{'}<span className='blue'>count</span>: <span className='blue1'>0</span> {'}'};</p>

       <p><span className='red'>this</span>.<span className='blue'>handleClick</span> = <span className='red'>this</span>.<span className='blue'>handleClick</span>.<span className='blue'>bind</span>(<span className='red'>this</span>);</p>

       <p>&nbsp;{'}'}</p>

       <p><span className='blue'>handleClick</span>() {'{'}</p>

       <p><span className='red'>this</span>.<span className='blue'>setState</span>{'({'} <span className='blue'>count</span>: <span className='red'>this</span>.<span className='blue'>state</span>.<span className='blue'>count</span> + <span className='blue1'>1</span>{' })'}; </p>

       <p>{'}'}</p>

       <p><span className='blue'>render</span>() {'{'}</p>

       <p><span className='red'>return</span> {'('}</p>

       <p>{'<'}<span className='green'>div</span>{'>'}</p>

       <p>{'<'}<span className='green'>p</span>{'>'}Você clicou {'{'}<span className='red'>this</span>.<span className='blue'>state</span>.<span className='blue'>count</span>{'}'} vezes{'</'}<span className='green'>p</span>{'>'}</p>

       <p>{'<'}<span className='green'>button</span> <span className='blue'>onClick</span>={'{'}<span className='red'>this</span>.<span className='blue'>handleClick</span>{'}'}{'>'}Clique aqui{'</'}<span className='green'>button</span>{'>'}</p>

       <p>{'</'}<span className='green'>div</span>{'>'}</p>

       <p>&nbsp;&nbsp;{');'}</p>

       <p>&nbsp;{'}'}</p>

       <p>{'}'}</p>
  </code>

  <p>Neste exemplo, definimos uma classe <b>Counter</b> que estende <b>React.Component</b>. Dentro da classe, definimos um construtor que define o estado inicial do componente como um objeto com uma propriedade <b>count</b> de 0. Também vinculamos o método <b>handleClick</b> à instância do componente usando <b>bind</b>.</p>

<p>O método <b>handleClick</b> atualiza o estado do componente chamando this.setState com um novo objeto que possui uma propriedade <b>count</b> incrementada em 1.</p>

<p>O método <b>render</b> retorna a IU do componente, que inclui um elemento <b>{'<p>'}</b> que exibe o valor atual de <b>count</b>, e um botão que chama <b>handleClick</b> quando clicado.</p>

<p>Assim como com componentes funcionais, é importante nunca modificar o estado diretamente. Em vez disso, sempre use <b>this.setState</b> para atualizar o estado.</p>

<p>Embora os componentes de classe ainda sejam suportados no React, os componentes funcionais são geralmente preferidos, especialmente com a introdução dos hooks. No entanto, entender os componentes de classe ainda é importante para manter e atualizar bases de código mais antigas.</p>

<b>Ciclo de vida do React</b>

<p>No React, os componentes têm um ciclo de vida que descreve as diferentes etapas pelas quais passam durante sua existência. Entender o ciclo de vida do React é essencial para construir e manter aplicativos React robustos.</p>

<p>Aqui está uma breve visão geral dos métodos de ciclo de vida do componente React, agrupados por fase:</p>

<h4>Fase de montagem:</h4>

<p><b>{'constructor()'}</b>: Chamado quando o componente é inicializado.</p>

<p><b>{'static getDerivedStateFromProps()'}</b>: Chamado quando o componente é inicializado e novamente quando ele recebe novas props. Raramente usado.</p>

<p><b>{'render()'}</b>: Chamado sempre que o componente precisa ser renderizado.</p>

<p><b>{'componentDidMount()'}</b>: Chamado após o componente ter sido renderizado pela primeira vez.</p>

<h4>Fase de atualização:</h4>

<p><b>{'static getDerivedStateFromProps()'}</b>: Chamado quando o componente recebe novas props.</p>

<p><b>{'shouldComponentUpdate()'}</b>: Chamado antes do componente ser re-renderizado. Permite cancelar a atualização.</p>

<p><b>{'render()'}</b>: Chamado sempre que o componente precisa ser renderizado.</p>

<p><b>{'getSnapshotBeforeUpdate()'}</b>: Chamado antes do componente ser atualizado. Raramente usado.</p>

<p><b>{'componentDidUpdate()'}</b>: Chamado após o componente ter sido atualizado.</p>

<h4>Fase de desmontagem:</h4>

<p><b>{'componentWillUnmount()'}</b>: Chamado quando o componente está prestes a ser removido do DOM.</p>

<p>Aqui está um exemplo que demonstra os métodos de ciclo de vida:</p>

<code>
  <p><span className='red'>import</span> React,{"{ Component }"} <span className='red'>from</span> 'react'; </p>
  
  <p><span className='red'>class</span> LifecycleDemo <span className='red'>extends</span> Component {'{'}</p>

  <p><span className='blue'>constructor</span>(props) {'{'} </p>

  <p>{'super(props);'}</p>  

  <p><span className='red'>{'this'}</span>.<span className='blue'>state</span>= {'{'}<span className='blue'>count</span>: <span className='blue1'>0</span> {'}'};</p>

  <p>{"console"}.<span className='blue'>log</span>(<span className='blue1'>'constructor'</span>);</p>

  <p>{'}'}</p>

  <p><span className='red'>static</span> <span className='blue'>getDerivedStateFromProps</span>(props, state) {'{'}</p>

  <p>{"console"}.<span className='blue'>log</span>('<span className='blue1'>getDerivedStateFromProps</span>');</p>

  <p><span className='red'>return null</span>;</p>

  <p>{'}'}</p>

  <p><span className='blue'>componentDidMount</span>() {'{'}</p>

  <p>{"console"}.<span className='blue'>log</span>(<span className='blue1'>'componentDidMount'</span>); </p>

  <p>{'}'}</p>

  <p><span className='blue'>shouldComponentUpdate</span>(nextProps, nextState) {'{'}</p>

  <p>{"console"}.<span className='blue'>log</span>(<span className='blue1'>'shouldComponentUpdate'</span>);</p>

  <p><span className='red'>return</span> <span className='blue'>true</span>;</p>

  <p>{'}'}</p>

  <p><span className='blue'>getSnapshotBeforeUpdate</span>(prevProps, prevState) {'{'}</p>

  <p>{"console"}.<span className='blue'>log</span>(<span className='blue1'>'getSnapshotBeforeUpdate'</span>);</p>

  <p><span className='red'>return null</span>;</p>

  <p>{'}'}</p>

  <p><span className='blue'>componentDidUpdate</span>(prevProps, prevState, snapshot) {'{'}</p>

  <p>{"console"}.<span className='blue'>log</span>(<span className='blue1'>'componentDidUpdate'</span>); </p>

  <p>{'}'}</p>

  <p><span className='blue'>componentWillUnmount</span>() {'{'} </p>

  <p>{"console"}.<span className='blue'>log</span>(<span className='blue1'>'componentWillUnmount'</span>); </p>

  <p>{'}'}</p>

  <p> <span className='blue'>handleClick</span> = () {'=>'} {'{'}</p>

  <p><span className='red'>this</span>.<span className='blue'>setState</span>{'({'} <span className='blue'>count</span>: <span className='red'>this</span>.<span className='blue'>state</span>.<span className='blue'>count</span> + <span className='blue1'>1</span> {'})'};</p>

  <p>{'}; '}</p>

  <p><span className='blue'>render</span>() {'{'} </p>

  <p>{"console"}.<span className='blue'>log</span>(<span className='blue1'>'render'</span>);</p>

  <p><span className='red'>return</span> {'('}</p>

  <p>{'<'}<span className='green'>div</span>{'>'}</p>

  <p>{'<'}<span className='green'>p</span>{'>'}Você clicou {'{'}<span className='red'>this</span>.<span className='blue'>state</span>.<span className='blue'>count</span>{'}'} vezes{'</'}<span className='green'>p</span>{'>'}</p>

  <p>{'<'}<span className='green'>button</span> <span className='blue'>onClick</span>={'{'}<span className='red'>this</span>.<span className='blue'>handleClick</span>{'}>'}Clique em mim{'</'}<span className='green'>button</span>{'>'}</p>
  
  <p>{'</'}<span className='green'>div</span>{'>'}</p>

  <p>&nbsp;&nbsp;{');'}</p>

  <p>&nbsp;{'}'}</p>

  <p>{'}'}</p>
</code>

<p>Neste exemplo, definimos uma classe <b>LifecycleDemo</b> que registra mensagens no console durante cada fase do ciclo de vida do componente. Também definimos um método <b>handleClick</b> que atualiza o estado do componente.</p>

<p>Quando o componente é montado pela primeira vez, os seguintes métodos são chamados, nesta ordem: <b>constructor, getDerivedStateFromProps, render e componentDidMount</b>. Sempre que o estado do componente é alterado, os métodos <b>shouldComponentUpdate, render e componentDidUpdate</b> são chamados, nessa ordem.</p>

<p>Quando o componente é desmontado, o método <b>componentWillUnmount</b> é chamado.</p>

<p>É importante entender o ciclo de vida do componente React para que você possa otimizar seus componentes e evitar problemas comuns, como vazamentos de memória e loops infinitos. Mas não se preocupe se parecer esmagador no início - com a prática, você ficará mais confortável com isso.</p>


<b><p>* Texto escrito com a ajuda de um tradutor. Se encontrar algum erro, por favor, avise-nos *</p></b>
    
    <div className='ads-container'>  
      {/*  реклама  */}
      </div>

    </div>
  )
}

export default PtReact_3;