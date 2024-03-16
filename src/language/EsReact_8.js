import React from 'react';

function EsReact_8() {
  return (
    <div>
      <div className='ad-container'>  
          {/*  реклама  */}
        </div> 

    <h1>Redux Thunk</h1>
     
<p>Redux Thunk es una biblioteca de middleware para Redux que te permite escribir lógica asíncrona que interactúa con la tienda Redux. Te permite despachar acciones que contienen código asíncrono, como solicitudes a API u otros efectos secundarios, envolviendo tus creadores de acciones en una función que devuelve otra función.</p>

<p>Aquí tienes un ejemplo de cómo Redux Thunk puede ser utilizado en una aplicación de React:</p>

      <code>
        <p><span className='green'>{"// actions.js "}</span></p>

        <p><span className='red'>import</span> axios <span className='red'>from</span> <span className='blue1'>'axios'</span>; </p>

        <p><span className='red'>export const</span> {"fetchUserRequest = () => ({ "}</p>

        <p>&nbsp;&nbsp;<span className='blue'>type</span>: <span className='blue1'>'FETCH_USER_REQUEST'</span>, </p>

        <p>{"}); "}</p>

        <p><span className='red'>export const</span> {"fetchUserSuccess = (user) => ({ "}</p>

        <p>&nbsp;&nbsp;<span className='blue'>type</span>: <span className='blue1'>'FETCH_USER_SUCCESS'</span>,</p>

        <p>&nbsp;&nbsp;<span className='blue'>payload</span>: user, </p>

        <p>{"}); "}</p>

        <p><span className='red'>export const</span> {"fetchUserError = (error) => ({ "}</p>

        <p>&nbsp;&nbsp;<span className='blue'>type</span>: <span className='blue1'>'FETCH_USER_ERROR'</span>, </p>

        <p>&nbsp;&nbsp;<span className='blue'>payload</span>: error, </p>

        <p>{"}); "}</p>
        
        <p><span className='red'>export const</span> {"fetchUser = (userId) => { "}</p>

        <p>&nbsp;<span className='red'>return</span> {"(dispatch) => { "}</p>

        <p>&nbsp;&nbsp;<span className='blueviole'>dispatch</span>(<span className='blueviole'>fetchUserRequest</span>());</p>

        <p>&nbsp;&nbsp;axios.<span className='blue'>get</span>(` <span className='blue1'>{'https://jsonplaceholder.typicode.com/users/$'}</span>{'{userId}'} `)  </p>

        <p>&nbsp;&nbsp;&nbsp;.<span className='blue'>then</span>{"((response) => {"}</p>

        <p>&nbsp;&nbsp;&nbsp;&nbsp;<span className='red'>const</span> user = response.<span className='blue'>data</span>; </p>

        <p>&nbsp;&nbsp;&nbsp;&nbsp;<span className='blueviole'>dispatch</span>(<span className='blueviole'>fetchUserSuccess</span>(user)); </p>

        <p>{"})"}</p>

        <p>&nbsp;&nbsp;&nbsp;.<span className='blue'>catch</span>{"((error) => {"}</p>

        <p>&nbsp;&nbsp;&nbsp;&nbsp;<span className='blueviole'>dispatch</span>(<span className='blueviole'>fetchUserError</span>(error.<span className='blue'>message</span>)); </p>

        <p>&nbsp;&nbsp;{"});"}</p>

        <p>&nbsp;{"};"}</p>

        <p>{"};"}</p>
    </code>

  <p>En el ejemplo anterior, definimos tres creadores de acciones: <b>fetchUserRequest, fetchUserSuccess y fetchUserError</b>. También definimos un creador de acción <b>fetchUser</b> que devuelve una función en lugar de un objeto de acción. Esta función toma <b>dispatch</b> como argumento, que es la función <b>dispatch</b> del almacén Redux.</p>

  <p>Dentro de la función <b>fetchUser</b>, despachamos la acción <b>fetchUserRequest</b>, que establece el estado <b>isLoading</b> en <b>true</b>. Luego, realizamos una llamada a la API utilizando Axios y despachamos la acción <b>fetchUserSuccess o fetchUserError</b> según la respuesta de la API. Estas acciones actualizan el almacén Redux con los datos recuperados o el mensaje de error, respectivamente.</p>
  
  <p>Para usar este creador de acciones en un componente, podemos importarlo y pasarlo a <b>dispatch</b> de esta manera:</p>
   
    <code>
      <p><span className='green'>{"// MyComponent.js"}</span></p>

      <p><span className='red'>import</span> {"React, { useEffect }"} <span className='red'>from</span> <span className='blue1'>'react'</span>;</p>

      <p><span className='red'>import</span> {"{ useDispatch, useSelector }"} <span className='red'>from</span> <span className='blue1'>'react-redux'</span>;</p>

      <p><span className='red'>import</span> {"{ fetchUser }"} <span className='red'>from</span> <span className='blue1'>'./actions'</span>; </p>

      <p>&nbsp;<span className='red'>const</span> MyComponent = {'({'} <span className='blue'>userId</span> {'})'} {"=> { "}</p>

      <p>&nbsp;<span className='red'>const</span> dispatch = <span className='blueviole'>useDispatch</span>(); </p>

      <p>&nbsp;<span className='red'>const</span> user = <span className='blueviole'>useSelector</span>(state {'=>'} state.<span className='blue'>user</span>.<span className='blue'>data</span>); </p>

      <p>&nbsp;<span className='red'>const</span> isLoading = <span className='blueviole'>useSelector</span>(state {'=>'} state.<span className='blue'>user</span>.<span className='blue'>isLoading</span>); </p>

      <p>&nbsp;<span className='red'>const</span> error = <span className='blueviole'>useSelector</span>(state {'=>'} state.<span className='blue'>user</span>.<span className='blue'>error</span>);</p>

      <p>&nbsp;<span className='blueviole'>useEffect</span>{"(() => { "}</p>

      <p>&nbsp;&nbsp;<span className='blueviole'>dispatch</span>(<span className='blueviole'>fetchUser</span>(userId));</p>

      <p>&nbsp;{"}, [dispatch, userId]); "}</p>

      <p>&nbsp;<span className='red'>if</span> {"(isLoading) { "}</p>

      <p>&nbsp;&nbsp;<span className='red'>return</span> {'<'}<span className='green'>div</span>{'>'}Loading...{'</'}<span className='green'>div</span>{'>'};</p>

      <p>{" } "}</p>

      <p>&nbsp;<span className='red'>if</span> {"(error) {  "}</p>

      <p>&nbsp;&nbsp;<span className='red'>return</span> {'<'}<span className='green'>div</span>{'>Error: {error}</'}<span className='green'>div</span>{'>'};</p>

      <p>{"}"}</p>

      <p>&nbsp;&nbsp;<span className='red'>return</span> {"("}</p>

      <p>{'<'}<span className='green'>div</span>{'>'}</p>

      <p>&nbsp;{'<'}<span className='green'>h1</span>{'>{'}user.<span className='blue'>name</span>{'}</'}<span className='green'>h1</span>{'>'}</p>

      <p>&nbsp;{'<'}<span className='green'>p</span>{'>{'}user.<span className='blue'>email</span>{'}</'}<span className='green'>p</span>{'>'}</p>
     
      <p>&nbsp;{'<'}<span className='green'>p</span>{'>{'}user.<span className='blue'>phone</span>{'}</'}<span className='green'>p</span>{'>'}</p>
     
      <p>{"</"}<span className='green'>div</span>{">"}</p>

      <p>&nbsp;{");"}</p>

      <p>{"};"}</p>
   </code>

<p>En el ejemplo anterior, usamos los ganchos useDispatch y useSelector de la biblioteca react-redux para interactuar con el almacén Redux. Despachamos el creador de acciones fetchUser en el gancho useEffect, que se llamará cuando se monte el componente. También usamos useSelector para extraer las piezas relevantes de datos del almacén Redux, como los datos de usuario y las banderas de isLoading y error.</p>

<p>En general, Redux Thunk es una biblioteca de middleware útil para Redux que le permite escribir lógica asincrónica que interactúa con el almacén Redux. Puede ayudar a simplificar su código y hacer que sea más fácil razonar sobre el comportamiento asincrónico en su aplicación React.</p>

<h3>Redux-Observable</h3>

<p>Redux-Observable es un middleware para Redux que permite el uso de programación reactiva en aplicaciones Redux. Permite a los desarrolladores manejar acciones y eventos asincrónicos complejos de manera declarativa, componible y fácil de probar usando RxJS, una biblioteca para programación reactiva.</p>

<p>Con Redux-Observable, los desarrolladores pueden definir "épicos" que son funciones que escuchan ciertas acciones, y luego reaccionan ante ellas con un flujo de nuevas acciones. Estos épicos son observables, que son funciones que reciben un flujo de eventos y pueden transformar, filtrar o fusionarlos de manera declarativa.</p>

<p>Aquí hay un ejemplo de cómo usar Redux-Observable:</p>

<code>
  <p><span className='red'>import</span> {'{ createStore, applyMiddleware } '} <span className='red'>from</span> <span className='blue1'>'redux'</span>;</p>

  <p><span className='red'>import</span>  {'{ createEpicMiddleware, combineEpics }'} <span className='red'>from</span> <span className='blue1'>'redux-observable'</span>;</p>

  <p><span className='red'>import</span> {'{ ajax }'} <span className='red'>from</span> <span className='blue1'>'rxjs/ajax'</span>;  </p>

  <p><span className='red'>import</span> {'{ mergeMap, map, catchError }'} <span className='red'>from</span> <span className='blue1'>'rxjs/operators'</span>;</p>

  <p>&nbsp;<span className='red'>const</span> {"pingEpic = action$ =>"}</p>

  <p>&nbsp;&nbsp;action$.<span className='blue'>ofType</span>(<span className='blue1'>'PING'</span>)</p>

  <p>&nbsp;&nbsp;.<span className='blue'>mergeMap</span>{"(action =>"}</p>

  <p>&nbsp;&nbsp;&nbsp;ajax.<span className='blue'>getJSON</span>(<span className='blue1'>'/api/ping'</span>)</p>

  <p>&nbsp;&nbsp;&nbsp;.<span className='blue'>map</span>{'('}response {'=> ({ '}<span className='blue'>type</span>: <span className='blue1'>'PONG'</span>, <span className='blue'>payload</span>: response {'}))'}  </p>

  <p>&nbsp;&nbsp;&nbsp;.<span className='blue'>catch</span>{'(error => ({'} <span className='blue'>type</span>: <span className='blue1'>'PING_ERROR'</span>, <span className='blue'>payload</span>: error.<span className='blue'>message</span> {'}))'}</p>

  <p>{");"}</p>

  <p>&nbsp;<span className='red'>const</span> rootEpic = <span className='blueviole'>combineEpics</span>{'('}</p>

  <p>&nbsp;&nbsp;{"pingEpic, "}</p>

  <p>&nbsp;&nbsp;<span className='green'>{"// more epics... "}</span></p>

  <p>{"); "}</p>

  <p>&nbsp;<span className='red'>const</span> epicMiddleware = <span className='blueviole'>createEpicMiddleware</span>();</p>

  <p>&nbsp;<span className='red'>const</span> store = <span className='blueviole'>createStore</span>{'('}</p>

  <p>&nbsp;&nbsp;{"reducer, "}</p>

  <p>&nbsp;&nbsp;<span className='blueviole'>applyMiddleware</span>(epicMiddleware)</p>

  <p>{");"}</p>

  <p>epicMiddleware.<span className='blue'>run</span>(rootEpic); </p>
</code>

<p>En este ejemplo, definimos un épico llamado <b>pingEpic</b> que escucha una acción de tipo 'PING', y luego realiza una solicitud AJAX a un servidor para hacerle ping. Si la solicitud es exitosa, despacha una acción de tipo 'PONG' con la carga de respuesta. Si la solicitud falla, despacha una acción de tipo 'PING_ERROR' con el mensaje de error como carga.</p>

<p>Luego combinamos todos nuestros épicos en un solo <b>rootEpic</b>, y creamos una instancia de <b>createEpicMiddleware()</b> para usar como middleware en nuestro almacén Redux. Finalmente, aplicamos el middleware al almacén y ejecutamos el épico raíz con <b>epicMiddleware.run(rootEpic)</b>.</p>

<p>En general, Redux-Observable es una herramienta poderosa para manejar acciones y eventos asincrónicos complejos en aplicaciones Redux. Proporciona una forma flexible y declarativa de gestionar el comportamiento asincrónico utilizando conceptos de programación reactiva.</p>

<b><p>* Texto escrito con la ayuda de un traductor. Si encuentras un error, por favor avísanos *</p></b>
    <div className='ads-container'>  
  {/*  реклама  */}
</div>
    </div>
  )
}

export default EsReact_8;