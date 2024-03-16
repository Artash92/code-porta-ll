import React from 'react';

function EsReact_4() {
  return (
    <div>
      <div className='ad-container'>  
          {/*  реклама  */}
        </div> 
        
      <h1>Obtener datos en React</h1>

<p>1. Obtener datos usando la API fetch:</p>

<code> 
  <p><span className='blueviole'>fetch</span>(<span className='blue1'>'https://api.example.com/data'</span>)</p>

  <p>.<span className='blue'>then</span>(response {'=>'} response.<span className='blue'>json</span>()) </p>

  <p>.<span className='blue'>then</span>(data {'=>'} console.<span className='blue'>log</span>(data))</p>

  <p>.<span className='blue'>catch</span>(error {'=>'} console.<span className='blue'>error</span>(error)) </p>
</code>
  
  <p>En este ejemplo, estamos haciendo una solicitud a un servidor usando la API <b>fetch</b>. El objeto <b>response</b> se convierte a formato JSON usando el método <b>json()</b>, y los datos resultantes se registran en la consola. Si ocurre un error, se captura y se registra en la consola.</p>
  

  <p>2. Mostrar los datos obtenidos en el estado del componente:</p>

<code>
  <p><span className='red'>import</span> {'React, { useState, useEffect } '} <span className='red'>from</span> <span className='blue1'>'react'</span>;   </p>

  <p><span className='red'>function</span> <span className='blueviole'>MiComponente</span>() {'{'}</p>

  <p><span className='red'>const</span> [data, setData] = <span className='blueviole'>useState</span>([]);</p>

  <p><span className='blueviole'>useEffect</span>{'(() => {'}</p>

  <p><span className='blueviole'>fetch</span>(<span className='blue1'>'https://api.example.com/data'</span>)</p>

  <p>.<span className='blue'>then</span>(response {'=>'} response.<span className='blue'>json</span>())</p>

  <p>.<span className='blue'>then</span>(data {'=>'} <span className='blueviole'>setData</span>(data))</p>

  <p>.<span className='blue'>catch</span>(error {'=>'} console.<span className='blue'>error</span>(error)); </p>

  <p>{'}, []);'}</p>

  <p><span className='red'>return</span> {'('}</p>

  <p>{'<'}<span className='green'>div</span>{'>'}</p>

  <p>{'{'}data.<span className='blue'>map</span>{'(item => ('}</p>

  <p>{'<'}<span className='green'>p</span> key={'{item.'}<span className='blue'>id</span>{'}>'}{'{item.'}<span className='blue'>name</span>{'}</'}<span className='green'>p</span>{'>'}</p>

  <p>{'))} '}</p>

  <p>{'</'}<span className='green'>div</span>{'>'}</p>

  <p>&nbsp;{');'}</p>

  <p>{'}'}</p>
</code>

<p>En este ejemplo, estamos utilizando el <b>hook useState</b> para definir una variable de estado llamada <b>data</b>. También estamos usando el hook <b>useEffect</b> para obtener datos del servidor cuando el componente se monta, y actualizar la variable de estado <b>data</b> con los datos obtenidos. Finalmente, estamos utilizando el método <b>map</b> para recorrer la matriz de datos y mostrar cada elemento como un elemento de párrafo.</p>
    
    
  <h1>Axios</h1>

  <p>Tanto Fetch como Axios son bibliotecas de JavaScript utilizadas para realizar solicitudes HTTP desde el navegador o el entorno Node.js. Sin embargo, hay algunas diferencias entre ambas.</p>


  <p>Fetch es una API de navegador integrada que utiliza promesas para manejar solicitudes y respuestas. Tiene una sintaxis más simple y es más fácil de usar para solicitudes simples, pero carece de algunas funciones avanzadas como cancelación de solicitudes, eventos de progreso y reintentos automáticos de solicitudes.</p>  
    
  <p>Axios es una biblioteca de terceros popular que proporciona una API más rica en funciones y poderosa para realizar solicitudes HTTP. Admite cancelación de solicitudes, eventos de progreso y reintentos automáticos de solicitudes de forma predeterminada, y también tiene un soporte incorporado para manejar datos de respuesta como JSON, XML y FormData.</p>

  <p>En cuanto a por qué es mejor usar Axios en lugar de Fetch, realmente depende de las necesidades específicas de tu proyecto. Si estás construyendo una aplicación web simple que solo necesita realizar solicitudes básicas, entonces Fetch puede ser suficiente. Sin embargo, si necesitas funciones más avanzadas y una API más potente para manejar solicitudes y respuestas, entonces Axios es una mejor opción.</p>  

  <p>Algunos beneficios de usar Axios en lugar de Fetch incluyen:</p>

  <p>1. Mejor manejo de errores: Axios tiene un sistema más robusto para manejar errores y proporciona mensajes de error más útiles en comparación con Fetch.</p>  
    
  <p>2. Interceptors: Axios proporciona interceptores que te permiten modificar solicitudes o respuestas antes de que sean enviadas o recibidas.</p>  
    
  <p>3. Transformación automática de datos de solicitud y respuesta: Axios puede transformar automáticamente datos de solicitud y respuesta en diferentes formatos, como JSON, lo cual puede ser muy útil al trabajar con APIs.</p>  
    
  <p>4. Cancelación fácil de solicitudes: Axios proporciona una forma simple de cancelar solicitudes, lo cual puede ser útil al tratar con redes lentas o poco confiables.</p>  
    
  <p>En resumen, tanto Fetch como Axios son herramientas útiles para realizar solicitudes HTTP en JavaScript, pero Axios proporciona funciones más avanzadas y una API más poderosa que puede ser muy útil para construir aplicaciones más complejas.</p>  
    
  <p><b>Axios</b> es una biblioteca para realizar solicitudes HTTP desde el navegador o Node.js. Facilita el envío de solicitudes usando promesas y manejar respuestas.</p> 

  <p>Para usar Axios en React.js, primero necesitas instalarlo usando el siguiente comando:</p>

  <b>npm install axios</b>

  <p>Después de eso, puedes usar Axios en tus componentes de React. Por ejemplo, el siguiente código envía una solicitud GET a un servidor remoto y muestra la respuesta en la página:</p> 
   

 <code>
    <p><span className='red'>import</span> {' React, { useState, useEffect }'} <span className='red'>from</span> <span className='blue1'>"react"</span>;</p>  

    <p><span className='red'>import</span> axios <span className='red'>from</span> <span className='blue1'>"axios"</span>;</p>

    <p><span className='red'>function</span> <span className='blueviole'>App</span>() {'{'}</p>  

    <p><span className='red'>const</span> {'[data, setData]'} = <span className='blueviole'>useState</span>("");</p>

    <p><span className='blueviole'>useEffect</span>{'(() => { '}</p>

    <p>axios.<span className='blue'>get</span>(<span className='blue1'>"https://jsonplaceholder.typicode.com/todos/1"</span>).<span className='blue'>then</span>{'((response) => {'}</p>

    <p><span className='blueviole'>setData</span>(response.<span className='blue'>data</span>);</p>

    <p>{'});'}</p>

    <p>{' }, []);'}</p>

    <p> return {'<'}<span className='green'>div</span>{'>'}{'{'}data.<span className='blue'>title</span>{'}'}{'</'}<span className='green'>div</span>{'>;'}</p>

    <p>{'}'}</p>

    <p><span className='red'>export default</span> App;</p>
 </code>

 <p>En este ejemplo, el gancho <b>useEffect</b> se utiliza para enviar una solicitud GET al servidor y actualizar la variable de estado <b>data</b> con la respuesta. La variable de datos se muestra en la página utilizando JSX.</p>  
    
    <p>Axios también admite otros métodos HTTP, como POST, PUT y DELETE, que se pueden utilizar para enviar datos al servidor y modificar recursos. El objeto axios también proporciona muchas opciones de configuración, como establecer encabezados, tiempos de espera e interceptores de solicitudes, que le permiten personalizar el comportamiento de las solicitudes.</p>  
  
    <p>En general, Axios es una biblioteca potente y flexible para trabajar con solicitudes HTTP en React.js, y puede simplificar muchas tareas comunes, como obtener datos de una API remota.</p>
  
    <p>El protocolo HTTP admite varios métodos de solicitud que permiten realizar varias operaciones con datos. Aquí hay una breve descripción de los cuatro métodos de solicitud principales junto con ejemplos de cómo usarlos en React:</p>
      
    <p>1. <b>GET</b>: un método de solicitud utilizado para recuperar datos del servidor. En React, puedes usar el método <b>axios.get</b></p>  
      
    <code>
      <p>axios.<span className='blue'>get</span>(<span className='blue1'>'/api/data'</span>)</p>
  
      <p>.<span className='blue'>then</span>{'(response => {'}</p>
  
      <p>{'console'}.<span className='blue'>log</span>(response.<span className='blue'>data</span>); </p>
  
      <p>{'})'}</p>
  
      <p>.<span className='blue'>catch</span>{'(error => {' }</p>
  
      <p>{'console'}.<span className='blue'>log</span>(error);</p>
    
      <p>{'});'}</p>  
    </code> 
  
    <p>En este ejemplo, estamos recuperando datos del punto de conexión <b>/api/data</b>. Los datos de respuesta se registran en la consola si la solicitud es exitosa, y cualquier error se captura y se registra en la consola.</p>
      
    <p>2. <b>PUT</b>: un método de solicitud utilizado para actualizar datos existentes en el servidor. En React, puedes usar el método <b>axios.put</b>:</p>  
  
    <code>
      <p>axios.<span className='blue'>put</span>{'('}<span className='blue1'>'/api/data/1'</span>, {'{'} <span className='blue'>newData</span>: <span className='blue1'>'updatedData'</span> {"})"}</p>
  
      <p>.<span className='blue'>then</span>{'('}response { '=> {' }</p>
  
      <p>{'console'}.<span className='blue'>log</span>(response.<span className='blue'>data</span>);</p>  
  
      <p>{'})'}</p>
  
      <p>.<span className='blue'>catch</span>{'(error => {'}</p>
  
      <p>{'console'}.<span className='blue'>log</span>(error);</p>
  
      <p>{'});'}</p>
   </code>
  
    <p>En este ejemplo, estamos actualizando datos en el punto de conexión <b>/api/data/1</b>. Enviamos una carga útil con los nuevos datos como segundo argumento a <b>axios.put</b>. Los datos de respuesta se registran en la consola si la solicitud es exitosa, y cualquier error se captura y se registra en la consola.</p>    
      
    <p>3. <b>POST </b>: un método de solicitud utilizado para crear nuevos datos en el servidor. En React, puedes usar el método <b>axios.post</b></p>  
      
    <code>
      <p>axios.<span className='blue'>post</span>{'('}<span className='blue1'>'/api/data'</span>, {'{'} <span className='blue'>newData</span>: <span className='blue1'>'newData'</span> {"})"}</p>
  
      <p>.<span className='blue'>then</span>{'(response => {'}</p>
  
      <p>{'console'}.<span className='blue'>log</span>(response.<span className='blue'>data</span>);</p>
  
      <p>{'})'}</p>  
  
      <p>.<span className='blue'>catch</span>{'(error => {'}</p>
  
      <p>{'console'}.<span className='blue'>log</span>(error);</p> 
  
      <p>{'});'}</p> 
    </code>  
  
    <p>En este ejemplo, estamos creando nuevos datos en el punto de conexión <b>/api/data</b>. Enviamos una carga útil con los nuevos datos como segundo argumento a <b>axios.post</b>. Los datos de respuesta se registran en la consola si la solicitud es exitosa, y cualquier error se captura y se registra en la consola.</p>
      
    <p>4. <b>DELETE </b>: un método de solicitud utilizado para eliminar datos existentes en el servidor. En React, puedes usar el método <b>axios.delete</b>:</p>  
      
   <code>
      <p> axios.<span className='blue'>delete</span>(<span className='blue1'>'/api/data/1'</span>)  </p>
  
      <p>.<span className='blue'>then</span>{'(response => { '}</p>
  
      <p>{'console'}.<span className='blue'>log</span>(response.<span className='blue'>data</span>);</p>
  
      <p>{'}) '}</p>
  
      <p>.<span className='blue'>catch</span>{'(error => { '}</p>
  
      <p>{'console'}.<span className='blue'>log</span>(error);</p>
  
      <p>{'});'}</p>
    </code> 
  
      <p>En este ejemplo, estamos eliminando datos en el punto de conexión <b>/api/data/1</b>. Los datos de respuesta se registran en la consola si la solicitud es exitosa, y cualquier error se captura y se registra en la consola</p>
  
     <p> Para obtener más información sobre Axios, visita su sitio web oficial: <a href=" https://axios-http.com" target='_blank' > 👉🏼  https://axios-http.com</a></p>
  
     <b><p>* Texto escrito con la ayuda de un traductor. Si encuentras un error, por favor avísanos *</p></b>
    
     <div className='ads-container'>  
      {/*  реклама  */}
     </div>
    </div>
  )
}

export default EsReact_4;