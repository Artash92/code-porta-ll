import React from 'react';

function ItReact_3() {
  return (
    <div>
       <div className='ad-container'>  
          {/*  реклама  */}
        </div>

      <h1>Eventi React</h1>

<p>React fornisce un modo per gestire gli eventi nei componenti, simile alla gestione degli eventi in JavaScript vanilla. In React, puoi aggiungere gestori di eventi a qualsiasi elemento JSX usando la sintassi <b>on[EventName]</b>.</p>

<p>Ad esempio, diciamo che abbiamo un pulsante in un componente React che vogliamo gestire un evento di click:</p>

<code>
  <p><span className='red'>function</span> <span className='blueviole'>MyButton</span>(props) {'{'} </p>

  <p><span className='red'>function</span> <span className='blueviole'>handleClick</span>() {'{'}</p>

  <p><span className='blue'>{"console.log"}</span>(<span className='blue1'>'Pulsante cliccato'</span>); </p>

  <p>{' }'}</p>

  <p><span className='red'>return</span> {'('}</p>

  <p>{'<'}<span className='green'>button</span> <span className='blue'>onClick</span>={'{handleClick}'}{'>'}Clicca qui{'</'}<span className='green'>button</span>{'>'}  </p>

  <p>&nbsp;{');'}</p>

  <p>{'} '}</p>
</code>

<p>In questo esempio, definiamo un componente <b>MyButton</b> che contiene un elemento di pulsante con una proprietà <b>onClick</b> impostata su una funzione chiamata <b>handleClick</b>. Quando viene cliccato il pulsante, la funzione <b>handleClick</b> verrà chiamata e il messaggio "Pulsante cliccato" verrà registrato sulla console.</p>

<p>Puoi anche passare argomenti alla funzione gestore dell'evento usando le funzioni freccia. Ad esempio, diciamo che abbiamo una lista di elementi che vogliamo renderizzare come pulsanti:</p>

<code>
     <p><span className='red'>function</span> <span className='blueviole'>ItemList</span>(props) {'{'}</p>

    <p><span className='red'>const</span> items = props.<span className='blue'>items</span>; </p>

    <p><span className='red'>function</span> <span className='blueviole'>handleClick</span>(item) {'{'}</p>

    <p><span className='blue'>{'console.log'}</span>(<span className='blue1'>`Item $</span><span className='blue1'>{'{item'}.<span className='blue'>id</span>{'}'}</span><span className='blue1'> cliccata`</span>); </p>

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

 <p>In questo esempio, definiamo un componente <b>ItemList</b> che accetta una prop <b>items</b>. Definiamo una funzione <b>handleClick</b> che prende un argomento <b>item</b>, che verrà utilizzato per registrare un messaggio nella console quando il pulsante corrispondente viene cliccato.</p>
 
 <p>Usiamo il metodo <b>map</b> per creare un nuovo array di elementi <b>{'<button>'}</b>, dove ogni elemento corrisponde a un elemento nella prop <b>items</b>. Impostiamo la prop <b>key</b> di ogni elemento <b>{'<button> '}</b> sull'<b>id</b> dell'elemento corrispondente, che è un requisito in React per aiutarlo ad ottimizzare gli aggiornamenti. Usiamo anche una funzione freccia per passare l'oggetto <b>item</b> alla funzione <b>handleClick</b> quando il pulsante viene cliccato.</p>
 
 <p>Quindi restituiamo un elemento <b>{'<div>'}</b> che contiene l'array <b>buttonList</b>.</p>
 
 <h5>Eventi React</h5>


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

<b>Stato React nei componenti di classe</b>

<p>In React, lo stato può essere gestito anche utilizzando i componenti di classe. I componenti di classe sono classi JavaScript che estendono la classe <b>React.Component</b> e implementano un metodo <b>render</b> che restituisce l'interfaccia utente del componente.</p>

<p>Ecco un esempio di un componente di classe che gestisce lo stato:</p>

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
   <p>{'<'}<span className='green'>p</span>{'>'}Hai cliccato {'{'}<span className='red'>this</span>.<span className='blue'>state</span>.<span className='blue'>count</span>{'}'} volte{'</'}<span className='green'>p</span>{'>'}</p>
   <p>{'<'}<span className='green'>button</span> <span className='blue'>onClick</span>={'{'}<span className='red'>this</span>.<span className='blue'>handleClick</span>{'}'}{'>'}Clicca{'</'}<span className='green'>button</span>{'>'}</p>
   <p>{'</'}<span className='green'>div</span>{'>'}</p>
   <p>&nbsp;&nbsp;{');'}</p>
   <p>&nbsp;{'}'}</p>
   <p>{'}'}</p>
</code>


<p>In questo esempio, definiamo una classe <b>Counter</b> che estende <b>React.Component</b>. All'interno della classe, definiamo un costruttore che imposta lo stato iniziale del componente su un oggetto con una proprietà <b>count</b> di 0. Collegiamo anche il metodo <b>handleClick</b> all'istanza del componente usando <b>bind</b>.</p>

<p>Il metodo <b>handleClick</b> aggiorna lo stato del componente chiamando this.setState con un nuovo oggetto che ha una proprietà <b>count</b> incrementata di 1.</p>

<p>Il metodo <b>render</b> restituisce l'interfaccia utente del componente, che include un elemento <b>{'<p>'}</b> che visualizza il valore corrente di <b>count</b> e un pulsante che chiama <b>handleClick</b> quando viene cliccato.</p>

<p>Come con i componenti funzionali, è importante non modificare direttamente lo stato. Invece, utilizzare sempre <b>this.setState</b> per aggiornare lo stato.</p>

<p>Anche se i componenti di classe sono ancora supportati in React, i componenti funzionali sono generalmente preferiti, soprattutto con l'introduzione degli hooks. Tuttavia, capire i componenti di classe è ancora importante per mantenere e aggiornare codebase più vecchie.</p>

<b>Ciclo di vita di React</b>

<p>In React, i componenti hanno un ciclo di vita che descrive le diverse fasi che attraversano durante la loro esistenza. Comprendere il ciclo di vita di React è essenziale per la costruzione e la manutenzione di applicazioni React robuste.</p>

<p>Ecco una breve panoramica dei metodi del ciclo di vita del componente React, raggruppati per fase:</p>

<h4>Fase di montaggio:</h4>

<p><b>{'constructor()'}</b>: Chiamato quando il componente viene inizializzato.</p>

<p><b>{'static getDerivedStateFromProps()'}</b>: Chiamato quando il componente viene inizializzato e di nuovo quando riceve nuove props. Usato raramente.</p>

<p><b>{'render()'}</b>: Chiamato ogni volta che il componente deve essere renderizzato.</p>

<p><b>{'componentDidMount()'}</b>: Chiamato dopo che il componente è stato renderizzato per la prima volta.</p>

<h4>Fase di aggiornamento:</h4>

<p><b>{'static getDerivedStateFromProps()'}</b>: Chiamato quando il componente riceve nuove props.</p>

<p><b>{'shouldComponentUpdate()'}</b>: Chiamato prima che il componente venga ri-renderizzato. Consente di annullare l'aggiornamento.</p>

<p><b>{'render()'}</b>: Chiamato ogni volta che il componente deve essere renderizzato.</p>

<p><b>{'getSnapshotBeforeUpdate()'}</b>: Chiamato prima che il componente venga aggiornato. Usato raramente.</p>

<p><b>{'componentDidUpdate()'}</b>: Chiamato dopo che il componente è stato aggiornato.</p>

<h4>Fase di smontaggio:</h4>

<p><b>{'componentWillUnmount()'}</b>: Chiamato quando il componente sta per essere rimosso dal DOM.</p>

<p>Ecco un esempio che illustra i metodi del ciclo di vita:</p>

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

  <p>{'<'}<span className='green'>p</span>{'>'}Hai cliccato {'{'}<span className='red'>this</span>.<span className='blue'>state</span>.<span className='blue'>count</span>{'}'} volte{'</'}<span className='green'>p</span>{'>'}</p>

  <p>{'<'}<span className='green'>button</span> <span className='blue'>onClick</span>={'{'}<span className='red'>this</span>.<span className='blue'>handleClick</span>{'}>'}Cliccami{'</'}<span className='green'>button</span>{'>'}</p>
  
  <p>{'</'}<span className='green'>div</span>{'>'}</p>

  <p>&nbsp;&nbsp;{');'}</p>

  <p>&nbsp;{'}'}</p>

  <p>{'}'}</p>
</code>

<p>In questo esempio, definiamo una classe <b>LifecycleDemo</b> che registra messaggi sulla console durante ogni fase del ciclo di vita del componente. Definiamo anche un metodo <b>handleClick</b> che aggiorna lo stato del componente.</p>

<p>Quando il componente viene montato per la prima volta, vengono chiamati i seguenti metodi, nell'ordine: <b>constructor, getDerivedStateFromProps, render e componentDidMount</b>. Ogni volta che lo stato del componente cambia, vengono chiamati i metodi <b>shouldComponentUpdate, render e componentDidUpdate</b>, in quell'ordine.</p>

<p>Quando il componente viene smontato, viene chiamato il metodo <b>componentWillUnmount</b>.</p>

<p>È importante comprendere il ciclo di vita del componente React in modo da poter ottimizzare i tuoi componenti e evitare problemi comuni come perdite di memoria e loop infiniti. Ma non preoccuparti se sembra travolgente all'inizio - con la pratica, diventerai più confortevole.</p>

   <b><p>* Testo scritto con l'aiuto di un traduttore. Se trovi un errore, per favore, faccelo sapere *</p></b>
    
    <div className='ads-container'>  
      {/*  реклама  */}
    </div>

    </div>
  )
}

export default ItReact_3;