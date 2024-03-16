import React from 'react';

function EsReact_7() {
  return (
    <div>
      <div className='ad-container'>  
          {/*  реклама  */}
        </div> 
        
      <h1>Redux</h1>

<p>Redux es una biblioteca de gestión de estado para aplicaciones JavaScript. Ayuda a gestionar el estado de su aplicación de manera predecible, facilitando el razonamiento sobre el flujo de datos en su aplicación. Con Redux, almacena el estado de su aplicación en un único objeto llamado tienda (store), y utiliza acciones y reductores para modificar ese estado.</p>

<p>Así es como funciona: cuando desea cambiar el estado de su aplicación, despacha una acción. La acción es un objeto JavaScript simple que describe lo que ocurrió en su aplicación. Por ejemplo, podría despachar una acción para agregar un nuevo elemento a una lista, o para actualizar la información de perfil de un usuario.</p>

<p>Los reductores son funciones que toman el estado actual de su aplicación y una acción, y devuelven un nuevo estado. Los reductores son funciones puras, lo que significa que no tienen efectos secundarios y siempre devuelven la misma salida para una entrada dada.</p>

<p>React-Redux es una biblioteca que integra Redux con React. Proporciona una manera de conectar sus componentes React con la tienda de Redux, para que pueda acceder y modificar el estado de su aplicación desde sus componentes. React-Redux proporciona dos componentes clave: Provider y connect.</p>

<p>El componente Provider se utiliza para envolver toda su aplicación React. Toma un objeto de tienda como prop y hace que esa tienda esté disponible para todos los componentes de su aplicación.</p>

<p>1. Instale los paquetes requeridos:</p>

<b>npm install redux react-redux</b>

<p>2. Cree una tienda Redux:</p>

<code>
  <p><span className='red'>import</span> {'{ createStore }'} <span className='red'>from</span> <span className='blue1'>'redux'</span>;</p>
  
  <p><span className='red'>import</span> rootReducer <span className='red'>from</span> <span className='blue1'>'./reducers'</span>; </p>

  <p><span className='red'>const</span> store = <span className='blueviole'>createStore</span>(rootReducer); </p>
</code>

<p>3. Cree acciones Redux:</p>

<code>
  <p><span className='red'>export const</span> {"increment = () => {"}</p>
 
  <p>&nbsp;<span className='red'>return</span>  {"{ "}</p>

  <p>&nbsp;&nbsp;<span className='blue'>type</span> : <span className='blue1'>'INCREMENT'</span></p>

  <p>&nbsp;{" } "}</p>

  <p>{" } "}</p>

  <p><span className='red'>export const</span>  {"decrement = () => { "}</p>

  <p>&nbsp;<span className='red'>return</span>  {" { "}</p>

  <p>&nbsp;&nbsp;<span className='blue'>type</span> : <span className='blue1'>'DECREMENT'</span></p>

  <p>&nbsp;{" } "}</p>

  <p>{" } "}</p>
</code>

<p>4. Cree reductores Redux:</p>

<code>
  <p><span className='red'>const</span> counterReducer = {'('}state = <span className='blue1'>0</span>, {"action) => { "}</p>

  <p>&nbsp;<span className='red'>switch</span> (action.<span className='blue'>type</span>) {"{ "}</p>

  <p>&nbsp;&nbsp;<span className='red'>case</span> <span className='blue1'>'INCREMENT'</span>:</p>

  <p>&nbsp;&nbsp;&nbsp;<span className='red'>return</span>  state + <span className='blue1'>1</span>;</p>

  <p>&nbsp;&nbsp;<span className='red'>case</span> <span className='blue1'>'DECREMENT'</span>:</p>

  <p>&nbsp;&nbsp;&nbsp;<span className='red'>return</span> state - <span className='blue1'>1</span>; </p>

  <p>&nbsp;&nbsp;<span className='red'>default</span>: </p>

  <p>&nbsp;&nbsp;&nbsp;<span className='red'>return</span> state; </p>

  <p>&nbsp;{" }"}</p>

  <p>{"} "}</p>

  <p><span className='red'>export default</span> counterReducer;</p>
</code>

<p>5. Conecte Redux a un componente React utilizando la función <b>connect</b> de React-Redux:</p>

<code>
<p><span className='red'>import</span> {'{ connect }'} <span className='red'>from</span> <span className='blue1'>'react-redux'</span>; </p>

<p><span className='red'>import</span>  {'{ increment, decrement }'} <span className='red'>from</span> <span className='blue1'>'./actions'</span>;</p>

<p>&nbsp;<span className='red'>const</span> {"Counter = (props) => { "}</p>

<p>&nbsp;<span className='red'>return</span> {'('}</p>

<p>{'<'}<span className='green'>div</span>{'>'}</p>

<p>&nbsp;&nbsp;{'<'}<span className='green'>h1</span>{'>{'}props.<span className='blue'>count</span>{'}</'}<span className='green'>h1</span>{'>'}</p>

<p>&nbsp;&nbsp;{'<'}<span className='green'>button</span> <span className='blue'>onClick</span>={'{'}props.<span className='blue'>increment</span>{'}>'}+{'</'}<span className='green'>button</span>{'>'}</p>

<p>&nbsp;&nbsp;{'<'}<span className='green'>button</span> <span className='blue'>onClick</span>={'{'}props.<span className='blue'>decrement</span>{'}>-</'}<span className='green'>button</span>{'>'}</p>

<p>{"</"}<span className='green'>div</span>{">"}</p>

<p>&nbsp;{");"}</p>

<p>{"} "}</p>

<p>&nbsp;<span className='red'>const</span> {"mapStateToProps = (state) => {"}</p>

<p>&nbsp;<span className='red'>return</span> {"{ "}</p>

<p>&nbsp;&nbsp;&nbsp;<span className='blue'>count</span>: state.<span className='blue'>counter</span></p>

<p>&nbsp;{"} "}</p>

<p>{"} "}</p>

<p>&nbsp;<span className='red'>const</span> {"mapDispatchToProps = (dispatch) => { "}</p>

<p>&nbsp;<span className='red'>return</span> {"{ "}</p>

<p>&nbsp;&nbsp;&nbsp;<span className='blue'>increment</span>: {"() =>"} <span className='blueviole'>dispatch</span>(<span className='blueviole'>increment</span>()), </p>

<p>&nbsp;&nbsp;&nbsp;<span className='blue'>decrement</span>: {"() =>"} <span className='blueviole'>dispatch</span>(<span className='blueviole'>decrement</span>())</p>

<p>&nbsp;{"}"}</p>

<p>{"}"}</p>

<p><span className='red'>export default</span> <span className='blueviole'>connect</span>(mapStateToProps, mapDispatchToProps)(Counter); </p>
</code>

<p>6. Envuelve tu aplicación con el componente <b>Provider</b> para hacer que la tienda Redux esté disponible para todos los componentes:</p>

<code> 
  <p><span className='red'>import</span> {"{ Provider } "} <span className='red'>from</span> <span className='blue1'>'react-redux'</span>;</p>

  <p><span className='red'>import</span> store <span className='red'>from</span> <span className='blue1'>'./store'</span>;</p>

  <p><span className='red'>import</span> Counter <span className='red'>from</span> <span className='blue1'>'./Counter'</span>; </p>

  <p>&nbsp;<span className='red'>const</span> {"App = () => { "}</p>

  <p>&nbsp;<span className='red'>return</span> {"("}</p>

  <p>{"<"}<span className='blueviole'>Provider</span> <span className='blue'>store</span>={"{store}> "}</p>

  <p>&nbsp;&nbsp;{"<"}<span className='blueviole'>Counter</span> {"/>"}</p>

  <p>{"</"}<span className='blueviole'>Provider</span>{">"}</p>

  <p>&nbsp;{");"}</p>

  <p>{"}"}</p>

  <p><span className='red'>export default</span> App;</p>
</code>

<p>Este es un ejemplo básico de cómo usar Redux y React-Redux en una aplicación de React. Ten en cuenta que esto es solo la punta del iceberg, y hay mucho más que aprender sobre Redux y su ecosistema.</p>

<p>hay algunas cosas más que debes tener en cuenta al usar Redux en una aplicación de React:</p>

<p>1. Middleware de Redux: El middleware es una forma de modificar o interceptar acciones de Redux antes de que lleguen a los reductores. El middleware se puede utilizar para tareas como el registro, solicitudes asíncronas y más. Algunas opciones de middleware populares para Redux incluyen <b>redux-thunk, redux-saga y redux-observable</b>.</p>

<p>2. Redux devtools: Redux devtools es una extensión del navegador que proporciona una interfaz de usuario útil para depurar e inspeccionar la tienda Redux. Te permite inspeccionar acciones y cambios de estado, y también proporciona funcionalidad de depuración de viaje en el tiempo.</p>

<p>3. Selectores de Redux: Los selectores son funciones que extraen piezas específicas de datos de la tienda Redux. Se pueden utilizar para calcular datos derivados, filtrar y transformar datos, y más. Los selectores pueden ayudar a simplificar tus componentes al proporcionarles los datos exactos que necesitan, sin tener que preocuparse por la forma de la tienda.</p>

<p>4. Patos de Redux: Ducks es una propuesta para organizar el código Redux en módulos que contienen todos los tipos de acción relacionados, creadores de acciones y reductores para una función o dominio específico. Este enfoque puede ayudar a simplificar tu base de código y hacer que sea más fácil de mantener.</p>

<p>Estos son solo algunos de los temas adicionales que puedes explorar al trabajar con Redux. Hay muchas otras bibliotecas y herramientas disponibles en el ecosistema de Redux, por lo que es importante tomarse el tiempo para aprender sobre ellas y decidir cuáles son las más adecuadas para tu proyecto.</p>

<b><p>* Texto escrito con la ayuda de un traductor. Si encuentras un error, por favor avísanos *</p></b>
    <div className='ads-container'>  
  {/*  реклама  */}
</div>
    </div>
  )
}

export default EsReact_7;