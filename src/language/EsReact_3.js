import React from 'react';

function EsReact_3() {
  return (
    <div>
      <div className='ad-container'>  
          {/*  реклама  */}
        </div> 


      <h1>Eventos de React</h1>

<p>React proporciona una forma de manejar eventos en componentes, similar al manejo de eventos en JavaScript puro. En React, puedes agregar manejadores de eventos a cualquier elemento JSX utilizando la sintaxis <b>on[NombreDelEvento]</b>.</p>

<p>Por ejemplo, digamos que tenemos un botón en un componente de React que queremos manejar un evento de clic para:</p>

<code>
  <p><span className='red'>function</span> <span className='blueviole'>MyButton</span>(props) {'{'} </p>

  <p><span className='red'>function</span> <span className='blueviole'>handleClick</span>() {'{'}</p>

  <p><span className='blue'>{"console.log"}</span>(<span className='blue1'>'Botón clickeado'</span>); </p>

  <p>{' }'}</p>

  <p><span className='red'>return</span> {'('}</p>

  <p>{'<'}<span className='green'>button</span> <span className='blue'>onClick</span>={'{handleClick}'}{'>'}Haz clic{'</'}<span className='green'>button</span>{'>'}  </p>

  <p>&nbsp;{');'}</p>

  <p>{'} '}</p>
</code>

<p>En este ejemplo, definimos un componente <b>MyButton</b> que contiene un elemento de botón con una propiedad <b>onClick</b> establecida en una función llamada <b>handleClick</b>. Cuando se hace clic en el botón, se llamará a la función <b>handleClick</b> y se registrará el mensaje "Botón clickeado" en la consola.</p>

<p>También puedes pasar argumentos a la función del manejador de eventos utilizando funciones flecha. Por ejemplo, digamos que tenemos una lista de elementos que queremos renderizar como botones:</p>

<code>
  <p><span className='red'>function</span> <span className='blueviole'>ItemList</span>(props) {'{'}</p>

  <p><span className='red'>const</span> items = props.<span className='blue'>items</span>; </p>

  <p><span className='red'>function</span> <span className='blueviole'>handleClick</span>(item) {'{'}</p>

  <p><span className='blue'>{'console.log'}</span>(<span className='blue1'>`Elemento $</span><span className='blue1'>{'{item'}.<span className='blue'>id</span>{'}'}</span><span className='blue1'> clickeado`</span>); </p>

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

<p>En este ejemplo, definimos un componente <b>ItemList</b> que recibe una propiedad <b>items</b>. Definimos una función <b>handleClick</b> que recibe un argumento <b>item</b>, que se utilizará para registrar un mensaje en la consola cuando se hace clic en el botón correspondiente.</p>

    <p>Usamos el método <b>map</b> para crear un nuevo array de elementos <b>{'<button>'}</b>, donde cada elemento corresponde a un ítem en la propiedad <b>items</b>. Establecemos la propiedad <b>key</b> de cada elemento <b>{'<button> '}</b> al <b>id</b> del ítem correspondiente, que es un requisito en React para ayudar a optimizar las actualizaciones. También usamos una función de flecha para pasar el objeto <b>item</b> a la función <b>handleClick</b> cuando se hace clic en el botón.</p>

    <p>Luego devolvemos un elemento <b>{'<div>'}</b> que contiene el array <b>buttonList</b>.</p>
    
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

<b>React state in class components</b>

    <p>En React, el estado también puede ser gestionado utilizando componentes de clase. Los componentes de clase son clases de JavaScript que extienden la clase <b>React.Component</b> e implementan un método <b>render</b> que devuelve la interfaz de usuario del componente.</p>

    <p>Aquí tienes un ejemplo de un componente de clase que gestiona el estado:</p>

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

       <p>{'<'}<span className='green'>p</span>{'>'}Has hecho clic {'{'}<span className='red'>this</span>.<span className='blue'>state</span>.<span className='blue'>count</span>{'}'} veces{'</'}<span className='green'>p</span>{'>'}</p>

       <p>{'<'}<span className='green'>button</span> <span className='blue'>onClick</span>={'{'}<span className='red'>this</span>.<span className='blue'>handleClick</span>{'}'}{'>'}Haz clic{'</'}<span className='green'>button</span>{'>'}</p>

       <p>{'</'}<span className='green'>div</span>{'>'}</p>

       <p>&nbsp;&nbsp;{');'}</p>

       <p>&nbsp;{'}'}</p>

       <p>{'}'}</p>
  </code>

  <p>En este ejemplo, definimos una clase <b>Counter</b> que extiende <b>React.Component</b>. Dentro de la clase, definimos un constructor que establece el estado inicial del componente como un objeto con una propiedad <b>count</b> de 0. También vinculamos el método <b>handleClick</b> a la instancia del componente usando <b>bind</b>.</p>

<p>El método <b>handleClick</b> actualiza el estado del componente llamando a this.setState con un nuevo objeto que tiene una propiedad <b>count</b> incrementada en 1.</p>

<p>El método <b>render</b> devuelve la interfaz de usuario del componente, que incluye un elemento <b>{'<p>'}</b> que muestra el valor actual de <b>count</b>, y un botón que llama a <b>handleClick</b> cuando se hace clic.</p>

<p>Al igual que con los componentes funcionales, es importante nunca modificar el estado directamente. En su lugar, siempre use <b>this.setState</b> para actualizar el estado.</p>

<p>Aunque los componentes de clase todavía son compatibles en React, generalmente se prefieren los componentes funcionales, especialmente con la introducción de hooks. Sin embargo, entender los componentes de clase sigue siendo importante para mantener y actualizar bases de código más antiguas.</p>

<b>Ciclo de vida de React</b>

<p>En React, los componentes tienen un ciclo de vida que describe las diferentes etapas por las que pasan durante su existencia. Entender el ciclo de vida de React es esencial para construir y mantener aplicaciones React robustas.</p>

<p>Aquí tienes una breve descripción de los métodos del ciclo de vida del componente de React, agrupados por fase:</p>

<h4>Fase de montaje:</h4>

<p><b>{'constructor()'}</b>: Se llama cuando se inicializa el componente.</p>

<p><b>{'static getDerivedStateFromProps()'}</b>: Se llama cuando se inicializa el componente, y nuevamente cuando recibe nuevas props. Rara vez se usa.</p>

<p><b>{'render()'}</b>: Se llama siempre que el componente necesita ser renderizado.</p>

<p><b>{'componentDidMount()'}</b>: Se llama después de que el componente haya sido renderizado por primera vez.</p>

<h4>Fase de actualización:</h4>

<p><b>{'static getDerivedStateFromProps()'}</b>: Se llama cuando el componente recibe nuevas props.</p>

<p><b>{'shouldComponentUpdate()'}</b>: Se llama antes de que el componente se vuelva a renderizar. Permite cancelar la actualización.</p>

<p><b>{'render()'}</b>: Se llama siempre que el componente necesita ser renderizado.</p>

<p><b>{'getSnapshotBeforeUpdate()'}</b>: Se llama antes de que el componente se actualice. Rara vez se usa.</p>

<p><b>{'componentDidUpdate()'}</b>: Se llama después de que el componente haya sido actualizado.</p>

<h4>Fase de desmontaje:</h4>

<p><b>{'componentWillUnmount()'}</b>: Se llama cuando el componente está a punto de ser eliminado del DOM.</p>

<p>Aquí tienes un ejemplo que demuestra los métodos del ciclo de vida:</p>

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

  <p>{'<'}<span className='green'>p</span>{'>'}Has hecho clic {'{'}<span className='red'>this</span>.<span className='blue'>state</span>.<span className='blue'>count</span>{'}'} veces{'</'}<span className='green'>p</span>{'>'}</p>

  <p>{'<'}<span className='green'>button</span> <span className='blue'>onClick</span>={'{'}<span className='red'>this</span>.<span className='blue'>handleClick</span>{'}>'}Haz clic{'</'}<span className='green'>button</span>{'>'}</p>
  
  <p>{'</'}<span className='green'>div</span>{'>'}</p>

  <p>&nbsp;&nbsp;{');'}</p>

  <p>&nbsp;{'}'}</p>

  <p>{'}'}</p>
</code>

<p>En este ejemplo, definimos una clase <b>LifecycleDemo</b> que registra mensajes en la consola durante cada fase del ciclo de vida del componente. También definimos un método <b>handleClick</b> que actualiza el estado del componente.</p>

<p>Cuando el componente se monta por primera vez, se llaman los siguientes métodos, en orden: <b>constructor, getDerivedStateFromProps, render y componentDidMount</b>. Cada vez que cambia el estado del componente, se llaman los métodos <b>shouldComponentUpdate, render y componentDidUpdate</b>, en ese orden.</p>

<p>Cuando el componente se desmonta, se llama al método <b>componentWillUnmount</b>.</p>

<p>Es importante comprender el ciclo de vida del componente de React para poder optimizar sus componentes y evitar problemas comunes como fugas de memoria y bucles infinitos. Pero no te preocupes si parece abrumador al principio; con la práctica, te sentirás más cómodo con él.</p>


<b><p>* Texto escrito con la ayuda de un traductor. Si encuentras un error, por favor avísanos *</p></b>
    <div className='ads-container'>  
  {/*  реклама  */}
</div>
    </div>
  )
}

export default EsReact_3;