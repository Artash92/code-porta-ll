import React from 'react';

function EsReact_6() {
  return (
    <div>
      <div className='ad-container'>  
          {/*  реклама  */}
        </div> 
  
  <h1>React Refs</h1>
  
  <p>En React, una <b>ref</b> es una forma de acceder al nodo DOM subyacente o a la instancia del componente React de un elemento renderizado. Puede utilizar referencias para obtener acceso a determinadas propiedades o métodos de un componente, o para modificar su comportamiento.</p>

<p>Aquí hay un ejemplo de cómo crear una referencia en React:</p>

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

<p>En este ejemplo, creamos un <b>ref</b> utilizando el gancho <b>useRef</b>. Luego pasamos el <b>ref</b> al elemento <b>input</b> usando la propiedad <b>ref</b>.</p>

<p>También creamos una función <b>handleClick</b> que utiliza la propiedad <b>current</b> del <b>ref</b> para llamar al método <b>focus</b> en el elemento <b>input</b>. Esto nos permite establecer el foco en la entrada cuando el usuario hace clic en el botón "Focus Input".</p>

 <p>En general, el uso de <b>refs</b> puede ser una herramienta poderosa para acceder y manipular componentes en React. Sin embargo, es importante usarlos con moderación y evitar depender demasiado del código imperativo, ya que esto puede hacer que su código sea más difícil de entender y mantener.</p>

<b>Event Emitter</b>

<p>Un emisor de eventos es un patrón de diseño que permite que los objetos en un programa se comuniquen entre sí mediante la activación y el manejo de eventos. En términos simples, un emisor de eventos es un mecanismo para transmitir y recibir mensajes dentro de un programa.</p>

<p>En JavaScript, la clase EventEmitter es un módulo incorporado que proporciona una forma de implementar este patrón. Aquí tienes un ejemplo de cómo usar EventEmitter en Node.js:</p>


<code>
<p><span className='red'>const</span> EventEmitter = <span className='blueviole'>require</span>(<span className='blue1'>'events'</span>); </p>

<p><span className='red'>class</span> MyEmitter <span className='red'>extends</span> EventEmitter {"{}"}</p>

<p><span className='red'>const</span> myEmitter = <span className='red'>new</span> MyEmitter(); </p>

<p>myEmitter.<span className='blue'>on</span>{'('}<span className='blue1'>'event'</span>, (arg){" => {"}</p>

<p> console.<span className='blue'>log</span>(<span className='blue1'>'Evento desencadenado con argumento:'</span>, arg); </p>

<p>{"});"}</p>

<p> myEmitter.<span className='blue'>emit</span>(<span className='blue1'>'event', '¡Hola Mundo!'</span>); </p>
</code>

<p>En este ejemplo, creamos una clase personalizada <b>MyEmitter</b> que extiende la clase <b>EventEmitter</b>. Luego creamos una instancia de esta clase y definimos un escucha para el evento <b>event</b> utilizando el método <b>on</b>. Finalmente, emitimos el evento <b>event</b> y pasamos un argumento de cadena, lo que activa el escucha y registra el argumento en la consola.</p>

<p>En general, el uso de un emisor de eventos puede ser una forma útil de implementar un patrón pub-sub en tu código, donde diferentes partes de tu programa pueden comunicarse entre sí sin tener que estar fuertemente acopladas. Sin embargo, es importante utilizar este patrón con prudencia y no depender demasiado de los eventos, ya que esto puede hacer que tu código sea más difícil de entender y depurar.</p>

<p><b>En React</b>, puedes usar un patrón de emisor de eventos para comunicarte entre diferentes componentes en tu aplicación. Esto puede ser útil para pasar datos o activar acciones entre componentes que no están directamente relacionados entre sí.</p>

<p>Una forma de implementar un patrón de emisor de eventos en React es usar una biblioteca de terceros como <b>eventemitter3 o mitt</b>. Estas bibliotecas proporcionan una API simple para crear y suscribirse a eventos, y se pueden utilizar tanto con componentes de clase como con componentes funcionales con ganchos.</p>

<p>Aquí tienes un ejemplo de cómo usar <b>eventemitter3</b> en un componente de React:</p>


<code>
<p><span className='red'>import</span> React, {"{ useEffect }"} <span className='red'>from</span> <span className='blue1'>'react'</span>; </p>

<p><span className='red'>import</span> EventEmitter <span className='red'>from</span> <span className='blue1'>'eventemitter3'</span>;  </p>

<p>&nbsp;<span className='red'>const</span>  emitter = <span className='red'>new</span> EventEmitter(); </p>

<p><span className='red'>function</span> <span className='blueviole'>ComponentA</span>() {"{"}</p>

<p>&nbsp;<span className='blueviole'>useEffect</span>{"(() => { "}</p>

<p>&nbsp;&nbsp;emitter.<span className='blue'>emit</span>{'('}<span className='blue1'>'eventA'</span>, {'{'} <span className='blue'>data</span>: <span className='blue1'>'Hola desde ComponenteA'</span> {'})'}; </p>

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

<p>En este ejemplo, creamos una instancia de <b>EventEmitter llamada emisor</b>. En <b>ComponenteA</b>, usamos el gancho <b>useEffect</b> para emitir un evento llamado <b>eventoA</b> con algunos datos. En <b>ComponenteB</b>, usamos el gancho <b>useEffect</b> para suscribirnos al evento <b>eventoA</b>, y definimos una función de devolución de llamada llamada <b>manejarEventoA</b> que registra los datos en la consola.</p>

<p>Cuando se monta ComponenteA, emite el evento eventoA con algunos datos. Cuando se monta ComponenteB, se suscribe al evento eventoA y comienza a escuchar cualquier evento con ese nombre. Cuando se emite eventoA, se llama a manejarEventoA con los datos y registra el mensaje en la consola.</p>

<p>En general, el uso de un patrón de emisor de eventos en React puede ser una forma útil de implementar la comunicación entre componentes que no están directamente relacionados entre sí. Sin embargo, es importante utilizar este patrón con prudencia y no depender demasiado de los eventos, ya que esto puede hacer que tu código sea más difícil de entender y depurar.</p>

<h4>Animación en React</h4>

<p>En React, puedes agregar animaciones a tus componentes utilizando una variedad de técnicas. Las animaciones pueden hacer que tu interfaz de usuario sea más atractiva y proporcionar retroalimentación visual al usuario cuando las cosas cambian.</p>

<p>Una forma popular de implementar animaciones en React es utilizar transiciones o animaciones CSS. Puedes agregar clases CSS a tus componentes para activar estas animaciones y usar la propiedad <b>className</b> de React para cambiar las clases según el estado del componente.</p>

<p>Aquí tienes un ejemplo de cómo usar transiciones CSS para animar un botón cuando se hace clic en él:</p>

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

<p>&nbsp;{"Click me! "}</p>

<p>{"</"}<span className='green'>button</span>{">"}</p>

<p>{"); "}</p>

<p>{" }"}</p>
</code>

<p>En este ejemplo, definimos un componente llamado <b>Button</b> que utiliza el gancho <b>useState</b> para realizar un seguimiento de si se ha hecho clic en el botón o no. Cuando se hace clic en el botón, establecemos el estado <b>isClicked</b> en <b>true</b>, lo que agrega la clase <b>clicked</b> al botón. Luego, usamos <b>setTimeout</b> para eliminar la clase <b>clicked</b> después de 1 segundo, lo que desencadena la transición de vuelta al estado original.</p>

<p>También definimos un archivo CSS llamado <b>Button.css</b> que define los estilos para el botón y la clase <b>clicked</b>:</p>

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

<p>En este archivo CSS, definimos los estilos para el botón y especificamos una propiedad <b>transition</b> en la clase <b>button</b> para animar cambios en la propiedad <b>background-color</b>. También definimos la clase <b>clicked</b>, que cambia el <b>background-color</b> a rojo cuando se aplica.</p>

<p>Otra forma de implementar animaciones en React es usar una biblioteca de terceros como <b>react-spring o framer-motion</b>. Estas bibliotecas proporcionan una API más flexible para crear animaciones complejas y pueden ser útiles para casos de uso más avanzados.</p>

<p><b>react-transition-group</b> es una biblioteca de terceros para React que proporciona una forma de agregar fácilmente transiciones y animaciones CSS a tus componentes. Proporciona un conjunto de componentes y APIs para gestionar el ciclo de vida de las transiciones, incluyendo el montaje y desmontaje de elementos, la adición y eliminación de clases, y la demora de animaciones.</p>

<b>{'npm install react-transition-group'}</b>

<p>Los componentes principales en <b>react-transition-group son Transition, CSSTransition y TransitionGroup</b>. Aquí tienes una breve descripción de cada componente:</p>

<p>• <b>Transition</b>: Este componente define el ciclo de vida básico de una transición, incluyendo los estados de entrada, ingresado, salida y salido. Puedes usar este componente para activar </p>

<p>• <b>CSSTransition</b>: Este componente extiende el componente <b>Transition</b> y agrega soporte para transiciones y animaciones CSS. Puedes especificar clases CSS para aplicar a tu componente durante las diferentes etapas de la transición, como <b>enter, enter-active, exit y exit-active</b>.</p>

<p>• <b>TransitionGroup</b>: Este componente se utiliza para gestionar un conjunto de componentes <b>Transition o CSSTransition</b>. Realiza un seguimiento del montaje y desmontaje de componentes y puede aplicar diferentes efectos de transición a cada componente. </p>

<p>Aquí tienes un ejemplo de cómo usar <b>react-transition-group</b> para agregar una animación de desvanecimiento a un componente cuando se monta:</p>


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

<p>&nbsp;{'<'}<span className='green'>div</span> <span className='blue'>className</span>=<span className='blue1'>"content"</span>{'>'}¡Hola Mundo!{'</'}<span className='green'>div</span>{'>'}</p>

<p>&nbsp;{"</"}<span className='blueviole'>CSSTransition</span>{">"}</p>

<p>{" </> "}</p>

<p>&nbsp;{"); "}</p>

<p>{"} "}</p>
</code>

<p>En este ejemplo, definimos un componente llamado <b>FadeIn</b> que utiliza el gancho <b>useState</b> para realizar un seguimiento de si el componente ha sido montado o no. Cuando se hace clic en el botón, establecemos el estado <b>isMounted</b> en <b>true</b>, lo que activa que el componente <b>CSSTransition</b> renderice el <b>div content</b> con una animación de desvanecimiento. También definimos un archivo CSS llamado <b>FadeIn.css</b> que define los estilos y la animación para el efecto de desvanecimiento:</p>


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

<p>En este archivo CSS, definimos las clases para las diferentes etapas de la transición. Cuando el componente entra, tiene una opacidad de 0 (<b>fade-enter</b>) y hace la transición a una opacidad de 1 durante 300ms (<b>fade-enter-active</b>). Cuando el componente sale, tiene una opacidad de 1 (<b>fade-exit</b>) y hace la transición a una opacidad de 0 durante 300ms (<b>fade-exit-active</b>).</p>

<p>En general, agregar animaciones a tus componentes de React puede hacer que tu interfaz de usuario sea más atractiva y proporcionar retroalimentación visual al usuario. Al utilizar transiciones o animaciones CSS, o una biblioteca de terceros, puedes agregar fácilmente animaciones a tus componentes y hacerlos más dinámicos.</p>


<b><p>* Texto escrito con la ayuda de un traductor. Si encuentras un error, por favor avísanos *</p></b>
    <div className='ads-container'>  
  {/*  реклама  */}
</div>
    </div>
  )
}

export default EsReact_6;