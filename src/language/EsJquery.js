import React from 'react';

function EsJquery() {
  return (
    <div>
      <div className='ad-container'>  
          {/*  реклама  */}
        </div>
        
        <h1>JavaScript (JQuery)</h1>

<p>jQuery es una biblioteca de JavaScript que simplifica el proceso de escribir código JavaScript y trabajar con documentos HTML. Fue creada en 2006 por John Resig y actualmente es una de las bibliotecas de JavaScript más populares.</p>

<p>jQuery proporciona una variedad de funciones para trabajar con el Modelo de Objetos del Documento (DOM), así como para trabajar con AJAX (JavaScript Asíncrono y XML) y crear animaciones. También simplifica la escritura de código compatible con varios navegadores porque la biblioteca jQuery maneja automáticamente los problemas de compatibilidad del navegador.</p>

<p>Aquí hay algunos ejemplos de cómo se puede usar jQuery:</p>

<p>Manipulación de elementos del DOM:</p>

<code>
  <p><span className='green'>// Cambiar el texto de un elemento con ID "miElemento"</span></p>

  <p><span className='blueviole'>$</span>(<span className='blue1'>'#miElemento'</span>).<span className='blue'>text</span>(<span className='blue1'>'Nuevo Texto'</span>); </p>

  <p><span className='green'>// Agregar un nuevo elemento a la página</span> </p>

  <p><span className='blueviole'>$</span>(<span className='blue1'>'body'</span>).<span className='blue'>append</span>(<span className='blue1'>'{'<'}div{'>'}Nuevo Elemento{'</'}div{'>'}'</span>); </p>
</code>

<p>2. Manejo de eventos:</p>

<code>
  <p><span className='green'>// Manejar el evento de clic de un botón con ID "miBoton"</span></p>

  <p><span className='blueviole'>$</span>(<span className='blue1'>'#miBoton'</span>).<span className='blue'>click</span>{'('}<span className='red'>function</span>() {"{"}</p>

  <p>&nbsp;<span className='blueviole'>alert</span>(<span className='blue1'>'¡Botón clickeado!'</span>);</p>

  <p>{"});"}</p>
</code>

<p>3. Trabajar con AJAX:</p>

<code>
  <p><span className='green'>// Realizar una solicitud AJAX a un servidor y actualizar un elemento de la página con la respuesta </span></p>

  <p> <span className='blueviole'>$</span>.<span className='blue'>get</span>{'('}<span className='blue1'>'https://ejemplo.com/api/datos'</span>, <span className='red'>function</span>(respuesta) {"{"}</p>

  <p><span className='blueviole'>$</span>(<span className='blue1'>'#miElemento'</span>).<span className='blue'>text</span>(respuesta); </p>

  <p>{" }); "}</p>
</code>

<p>En general, jQuery es una herramienta poderosa y versátil para simplificar el desarrollo de JavaScript y facilitar la creación de páginas web dinámicas e interactivas.</p>

<b>Para incluir jQuery en un documento HTML, puedes seguir los siguientes pasos:</b>

<p>1. Descarga la biblioteca jQuery desde el sitio web oficial <a href="https://jquery.com/download/" target='_blank' > 👉🏼 (https://jquery.com/download/)</a> o usa un enlace de CDN (Red de Entrega de Contenidos).</p>

<p>2. Crea un nuevo archivo HTML y agrega el siguiente código dentro de la sección "head" de tu documento HTML para incluir la biblioteca jQuery:</p>

<code>
  <p>{'<'}<span className='green'>head</span>{'>'}</p>

  <p>&nbsp;{'<'}<span className='green'>script</span> <span className='blue'>src</span>=<span className='blue1'>"ruta/hacia/jquery.js"</span>{'>'}{'</'}<span className='green'>script</span>{'>'}</p>

  <p>{'</'}<span className='green'>head</span>{'>'}</p>
</code>

<p>Sustituye "ruta/hacia/jquery.js" por la ruta real donde se encuentra almacenada la biblioteca jQuery en tu servidor, o usa el enlace de CDN:</p>

<code>
  <p>{'<'}<span className='green'>head</span>{'>'}</p>

  <p>&nbsp;{'<'}<span className='green'>script</span> <span className='blue'>src</span>=<span className='blue1'>"https://code.jquery.com/jquery-3.6.0.min.js"</span>{'>'}{'</'}<span className='green'>script</span>{'>'}</p>

  <p>{'</'}<span className='green'>head</span>{'>'}</p>
</code>

<p>3. Una vez que hayas incluido la biblioteca jQuery en tu documento HTML, puedes comenzar a usarla escribiendo código JavaScript que haga referencia a la biblioteca jQuery.</p>

<p>Por ejemplo, para cambiar el texto de un elemento HTML con un ID de "miElemento", puedes usar el siguiente código:</p>

<code>
  <p>{'<'}<span className='green'>body</span>{'>'}</p>

  <p>&nbsp;{'<'}<span className='green'>div</span> <span className='blue'>id</span>=<span className='blue1'>"myElement"</span>{'>'}¡Hola Mundo!{'</'}<span className='green'>div</span>{'>'}</p>

  <p>&nbsp;{'<'}<span className='green'>script</span>{'>'}</p>

  <p>&nbsp;&nbsp;{'$(document).ready(function() {'}</p>

  <p>&nbsp;&nbsp;&nbsp;<span className='blueviole'>$</span>(<span className='blue1'>"#myElement"</span>).<span className='blue'>text</span>(<span className='blue1'>"¡Nuevo texto!"</span>);</p>

  <p>&nbsp;&nbsp;{'});'}</p>

  <p>&nbsp;{'</'}<span className='green'>script</span>{'>'}</p>

  <p>{'</'}<span className='green'>body</span>{'>'}</p>
</code>

<p>En este ejemplo, estamos usando jQuery para seleccionar el elemento con el ID "myElement" y cambiar su texto a "¡Nuevo texto!". El código está envuelto en una función de documento listo, que asegura que el código se ejecute solo después de que el documento haya terminado de cargarse.</p>

<p>En general, incluir jQuery en un documento HTML es un proceso simple que implica hacer referencia a la biblioteca jQuery y escribir código JavaScript que use la biblioteca para manipular elementos HTML.</p>

<p>La sintaxis de jQuery es una combinación de selectores de estilo CSS y código JavaScript, lo que facilita la selección y manipulación de elementos HTML. Aquí hay algunos ejemplos de la sintaxis de jQuery:</p>

<p><b>1. Selección de elementos</b></p>

<p>Para seleccionar un elemento HTML, puedes usar la función jQuery, que toma un selector de estilo CSS como argumento. Por ejemplo, para seleccionar todos los elementos "p" en la página, puedes usar el siguiente código:</p>

<code><p><span className='blueviole'>$</span>(<span className='blue1'>'p'</span>) </p> </code>

<p>También puedes encadenar selectores para seleccionar elementos en función de su relación con otros elementos. Por ejemplo, para seleccionar todos los elementos "p" que son hijos de un elemento "div", puedes usar el siguiente código:</p>

<code><p><span className='blueviole'>$</span>(<span className='blue1'>'div {'>'} p'</span>)</p></code>

<p><b>2. Modificación de elementos</b></p>

<p>Una vez que hayas seleccionado un elemento, puedes modificar su contenido, atributos y propiedades CSS usando jQuery. Por ejemplo, para cambiar el texto de todos los elementos "p" en la página, puedes usar el siguiente código:</p>

<code>
  <p><span className='blueviole'>$</span>(<span className='blue1'>'p'</span>).<span className='blue'>text</span>(<span className='blue1'>'Nuevo texto'</span>)</p>

  <p>Para agregar una <span className='green'>clase</span> a un elemento, puedes usar el método <span className='blue1'>"addClass"</span>: </p>

  <p><span className='blueviole'>$</span>(<span className='blue1'>'p'</span>).<span className='blue'>addClass</span>(<span className='blue1'>'resaltar'</span>)</p>
</code>

<p><b>3. Manejo de eventos</b></p>

<p>Puedes usar jQuery para manejar eventos como clics, mouseovers y pulsaciones de teclas. Por ejemplo, para manejar el evento de clic de un botón con un ID de "myButton", puedes usar el siguiente código:</p>

<code>
  <p><span className='blueviole'>$</span>(<span className='blue1'>'#myButton'</span>).<span className='blue'>click</span>{'('}<span className='red'>function</span>() {"{"}</p>    
    
  <p>&nbsp;<span className='blueviole'>alert</span>(<span className='blue1'>'¡Botón clickeado!'</span>) </p> 
    
  <p>{"})"}</p>
</code>

<p><b>4. Trabajando con AJAX</b></p>

<p>jQuery facilita el trabajo con solicitudes AJAX. Por ejemplo, para hacer una solicitud GET a una URL y manejar la respuesta, puedes usar el siguiente código:</p>

<code>
  <p>$.<span className='blue'>get</span>{'('}<span className='blue1'>'https://ejemplo.com/datos'</span>, <span className='red'>function</span>(respuesta) {"{"}</p>

  <p>&nbsp;{"console"}.<span className='blue'>log</span>(respuesta)</p>

  <p>{"}) "}</p>
</code>

<p>En general, la sintaxis de jQuery es fácil de aprender y usar, y proporciona una forma poderosa de manipular elementos HTML y manejar eventos en tus aplicaciones web.</p>

<p><b>Los métodos de travesía de jQuery se utilizan para navegar y encontrar elementos en un árbol DOM. A continuación, se presentan algunos ejemplos de métodos de travesía que tratan con elementos hermanos.</b></p>    

<p><b>1. Método next():</b> </p>

<p>El método next() devuelve el siguiente elemento hermano del elemento seleccionado. Por ejemplo:</p>

<code>
  <p><span className='blueviole'>$</span>(document).<span className='blue'>ready</span>{'('}<span className='red'>function</span>() {'{'}</p> 

  <p>&nbsp;<span className='blueviole'>$</span>(<span className='blue1'>"h2"</span>).<span className='blue'>next</span>().<span className='blue'>css</span>(<span className='blue1'>"background-color", "yellow"</span>); </p>

  <p>{'}); '}</p>
</code>

<p>Este código selecciona todos los elementos "h2" y aplica un estilo CSS a su siguiente elemento hermano cambiando su color de fondo a amarillo.</p>

<p><b>2. Método prev():</b></p>

<p>El método prev() devuelve el elemento hermano anterior del elemento seleccionado. Por ejemplo:</p>

<code>
  <p><span className='blueviole'>$</span>(document).<span className='blue'>ready</span>{'('}<span className='red'>function</span>() {'{'}</p> 

  <p>&nbsp;<span className='blueviole'>$</span>(<span className='blue1'>"h2"</span>).<span className='blue'>prev</span>().<span className='blue'>css</span>(<span className='blue1'>"background-color", "yellow"</span>); </p>

  <p>{'});'}</p>
</code>

<p>Este código selecciona todos los elementos "h2" y aplica un estilo CSS a su elemento hermano anterior cambiando su color de fondo a amarillo.</p>
 
<b>3. Método nextAll():</b>

<p>El método nextAll() devuelve todos los elementos hermanos siguientes del elemento seleccionado. Por ejemplo</p>

<code>
  <p><span className='blueviole'>$</span>(document).<span className='blue'>ready</span>{'('}<span className='red'>function</span>() {'{'}</p> 

  <p>&nbsp;<span className='blueviole'>$</span>(<span className='blue1'>"h2"</span>).<span className='blue'>nextAll</span>().<span className='blue'>css</span>(<span className='blue1'>"background-color", "yellow"</span>); </p>

  <p>{'}); '}</p>
</code>

<p>Este código selecciona todos los elementos "h2" y aplica un estilo CSS a todos sus elementos hermanos siguientes cambiando su color de fondo a amarillo.</p>

<b>4. Método prevAll():</b> 

<p>El método prevAll() devuelve todos los elementos hermanos anteriores del elemento seleccionado. Por ejemplo:</p>

<code>
  <p><span className='blueviole'>$</span>(document).<span className='blue'>ready</span>{'('}<span className='red'>function</span>() {'{'}</p> 

  <p>&nbsp;<span className='blueviole'>$</span>(<span className='blue1'>"h2"</span>).<span className='blue'>prevAll</span>().<span className='blue'>css</span>(<span className='blue1'>"background-color", "yellow"</span>); </p>

  <p>{'}); '}</p>
</code>

<p>Este código selecciona todos los elementos "h2" y aplica un estilo CSS a todos sus elementos hermanos anteriores cambiando su color de fondo a amarillo.</p>

<b>5. Método siblings():</b>

<p>El método siblings() devuelve todos los elementos hermanos del elemento seleccionado. Por ejemplo:</p>

<code>
  <p><span className='blueviole'>$</span>(document).<span className='blue'>ready</span>{'('}<span className='red'>function</span>() {'{'}</p> 

  <p>&nbsp;<span className='blueviole'>$</span>(<span className='blue1'>"h2"</span>).<span className='blue'>siblings</span>().<span className='blue'>css</span>(<span className='blue1'>"background-color", "yellow"</span>); </p>

  <p>{'}); '}</p>
</code>

<p>Este código selecciona todos los elementos "h2" y aplica un estilo CSS a todos sus elementos hermanos cambiando su color de fondo a amarillo.</p>

<p>En general, estos métodos de travesía te permiten navegar y seleccionar fácilmente elementos hermanos de un elemento HTML, lo que puede ser útil para varios propósitos como estilizar o modificar el contenido.</p>

<p><b>JQuery (CSS)</b></p>

<code>
  <p><span className='blueviole'>$</span>(document).<span className='blue'>ready</span>{'('}<span className='red'>function</span>() {'{'}</p> 

  <p>&nbsp;<span className='blueviole'>$</span>(<span className='blue1'>".caja"</span>).<span className='blue'>click</span>{'('}<span className='red'>function</span>() {'{'}</p>

  <p>&nbsp;&nbsp;<span className='blueviole'>$</span>(<span className='red'>this</span>).<span className='blue'>css</span>(<span className='blue1'>"background-color", "red"</span>);</p>

  <p>&nbsp;&nbsp;{'});'}</p>

  <p>{'});'}</p>
</code>

<p>Este código selecciona el elemento con la clase "box" usando el selector de jQuery ".box". Luego, adjunta un controlador de eventos de clic a ese elemento usando el método click(). Dentro de la función del controlador de eventos, usamos el método css() para cambiar el color de fondo del elemento a rojo.</p>

<p>Entonces, cuando se hace clic en el elemento de la caja, su color de fondo cambia de azul a rojo. También podemos usar el método css() para cambiar otras propiedades CSS como el tamaño de fuente, el ancho del borde, etc.</p>

<p>Aquí hay otro ejemplo que demuestra cómo cambiar múltiples propiedades CSS usando el método css():</p>

<code>
  <p><span className='blueviole'>$</span>(document).<span className='blue'>ready</span>{'('}<span className='red'>function</span>() {'{'}</p>

  <p>&nbsp;<span className='blueviole'>$</span>(<span className='blue1'>".box"</span>).<span className='blue'>css</span>{'({'}</p>

  <p>&nbsp;&nbsp;<span className='blue1'>"background-color"</span>: <span className='blue1'>"verde"</span>,</p>

  <p>&nbsp;&nbsp;<span className='blue1'>"width"</span>: <span className='blue1'>"150px"</span>, </p>

  <p>&nbsp;&nbsp;<span className='blue1'>"height"</span>: <span className='blue1'>"150px"</span>, </p>

  <p>&nbsp;&nbsp;<span className='blue1'>"border"</span>: <span className='blue1'>"2px sólido negro"</span> </p>

  <p>&nbsp;{' });'}</p>

  <p>{'});'}</p>
</code>

<p>Este código selecciona todos los elementos con la clase "box" y cambia su color de fondo a verde, su ancho y altura a 150px, y agrega un borde sólido negro de 2px.</p>

<p>En general, usar jQuery para manipular CSS proporciona una forma poderosa de estilizar dinámicamente elementos HTML basados en interacciones del usuario u otros eventos.</p>

<b>JQuery ($.each)</b>

<p>El método $.each() en jQuery se utiliza para iterar sobre matrices y objetos. Aquí hay un ejemplo que muestra cómo usarlo:</p>

<p>Supongamos que tenemos una matriz de números y queremos iterar sobre cada elemento de la matriz e imprimir su valor en la consola:</p>
    
<code>
  <p><span className='red'>var</span> numeros = [<span className='blue1'>1, 2, 3, 4, 5</span>]; </p>

  <p>$.<span className='blue'>each</span>{'('}numeros, <span className='red'>function</span>(indice, valor){'{'}</p>

  <p>&nbsp;{'console'}.<span className='blue'>log</span>(<span className='blue1'>"Elemento en el índice "</span> + indice + <span className='blue1'>" es "</span> + valor);</p>

  <p>{'});'}</p>
</code>

<p>En este código, pasamos la matriz de números al método $.each() junto con una función de devolución de llamada que toma dos argumentos: el índice del elemento actual y el valor del elemento actual. Dentro de la función de devolución de llamada, usamos console.log() para imprimir el índice y el valor del elemento actual en la consola.</p>
    
<p>La salida de este código sería:</p>

<code>
  <p>El elemento en el índice <span className='blue1'>0</span> es <span className='blue1'>1</span></p>

  <p>El elemento en el índice <span className='blue1'>1</span> es <span className='blue1'>2</span></p>

  <p>El elemento en el índice <span className='blue1'>2</span> es <span className='blue1'>3</span></p>

  <p>El elemento en el índice <span className='blue1'>3</span> es <span className='blue1'>4</span></p>

  <p>El elemento en el índice <span className='blue1'>4</span> es <span className='blue1'>5</span></p>
</code>

<p>Aquí hay otro ejemplo que demuestra cómo usar $.each() con un objeto:</p>

<p>Supongamos que tenemos un objeto que representa los detalles de una persona y queremos iterar sobre sus propiedades e imprimir sus valores en la consola:</p>

<code>
  <p><span className='red'>var</span> persona = {'{'}</p>

  <p>&nbsp;<span className='blue'>nombre</span>: <span className='blue1'>"John"</span>,</p>

  <p>&nbsp;<span className='blue'>edad</span>: <span className='blue1'>30</span>, </p>

  <p>&nbsp;<span className='blue'>ocupación</span>: <span className='blue1'>"Desarrollador"</span> </p>

  <p>{'};'}</p>

  <p>$.<span className='blue'>each</span>{'('}persona, <span className='red'>function</span>(clave, valor){'{'}</p>

  <p>&nbsp;{'console'}.<span className='blue'>log</span>(clave + ": " + valor);</p>

  <p>{'});'}</p>
</code>

<p>En este código, pasamos el objeto persona al método $.each() junto con una función de devolución de llamada que toma dos argumentos: la clave de la propiedad actual y el valor de la propiedad actual. Dentro de la función de devolución de llamada, usamos console.log() para imprimir la clave y el valor de la propiedad actual en la consola.</p>

<p>La salida de este código sería:</p>

<code>
  <p><span className='blue'>nombre</span>: John </p>

  <p><span className='blue'>edad</span>: <span className='blue1'>30</span> </p>

  <p><span className='blue'>ocupación</span>: Desarrollador</p>
</code>

<p>En general, el método $.each() en jQuery proporciona una forma conveniente de iterar sobre matrices y objetos y realizar operaciones en sus elementos.</p>

<b>Eventos de jQuery</b>

<p>JQuery proporciona un conjunto completo de métodos de manejo de eventos que permiten a los desarrolladores adjuntar controladores de eventos a elementos HTML y responder a interacciones del usuario, como clics de mouse, entrada de teclado y envíos de formularios.</p>
    
<p>Aquí hay un ejemplo que muestra cómo usar el método click() en jQuery para adjuntar un controlador de eventos de clic a un elemento de botón y responder al usuario haciendo clic en el botón:</p>    
    
<code>
  <p>{'<'}!<span className='blue'>DOCTYPE</span> <span className='blue1'>html</span>{'>'}</p>

  <p>{'<'}<span className='green'>html</span>{'>'}</p>  

  <p>{'<'}<span className='green'>head</span>{'>'}</p>

  <p>&nbsp;{'<'}<span className='green'>title</span>{'>'}Ejemplo de evento jQuery{'</'}<span className='green'>title</span>{'>'}</p>

  <p>{'<'}<span className='green'>script</span> <span className='blue'>src</span>=<span className='blue1'>"https://code.jquery.com/jquery-3.6.0.min.js"</span>{'>'}{'</'}<span className='green'>script</span>{'>'}</p>

  <p>{'</'}<span className='green'>head</span>{'>'}</p>

  <p>{'<'}<span className='green'>body</span>{'>'}</p>

  <p>&nbsp;{'<'}<span className='green'>button</span> <span className='blue'>id</span>=<span className='blue1'>"myButton"</span>{'>'}Haz clic!{'</'}<span className='green'>button</span>{'>'}</p>

  <p>{'<'}<span className='green'>script</span>{'>'}</p>

  <p>&nbsp;{'$(document).ready(function(){'}</p>

  <p>&nbsp;<span className='blueviole'>$</span>(<span className='blue1'>"#myButton"</span>).<span className='blue'>click</span>{'('}<span className='red'>function</span>(){'{'}</p>

  <p>&nbsp;<span className='blueviole'>alert</span>(<span className='blue1'>"¡Botón clickeado!"</span>);</p>

  <p>&nbsp;{'});'}</p>

  <p>{'});'}</p>

  <p>{'</'}<span className='green'>script</span>{'>'}</p>

  <p>{'</'}<span className='green'>body</span>{'>'}</p>

  <p>{'</'}<span className='green'>html</span>{'>'}</p>
</code> 

<p>En este código, incluimos la biblioteca jQuery en la sección head del documento HTML y adjuntamos un controlador de eventos <b>click()</b> al elemento de botón usando el selector de ID <b>#myButton</b>. Dentro de la función del controlador de eventos, usamos el método <b>alert()</b> para mostrar un cuadro de mensaje con el texto "¡Botón clickeado!".</p>

<p>Cuando el usuario hace clic en el botón, se activa el evento <b>click()</b>, y se ejecuta la función del controlador de eventos, mostrando el cuadro de mensaje.</p>

<p>Aquí hay otro ejemplo que demuestra cómo usar el método <b>submit()</b> en jQuery para adjuntar un controlador de eventos de envío a un elemento de formulario y evitar el comportamiento de envío de formulario predeterminado:</p>
    
<code>
  <p>{'<'}!<span className='blue'>DOCTYPE</span> <span className='blue1'>html</span>{'>'}</p>

  <p>{'<'}<span className='green'>html</span>{'>'}</p> 

  <p>{'<'}<span className='green'>head</span>{'>'}</p>

  <p>&nbsp;{'<'}<span className='green'>title</span>{'>'}Ejemplo de Evento jQuery{'</'}<span className='green'>title</span>{'>'}</p>

  <p>{'<'}<span className='green'>script</span> <span className='blue'>src</span>=<span className='blue1'>"https://code.jquery.com/jquery-3.6.0.min.js"</span>{'>'}{'</'}<span className='green'>script</span>{'>'}</p>

  <p>{'</'}<span className='green'>head</span>{'>'}</p>

  <p>{'<'}<span className='green'>body</span>{'>'}</p>

  <p>{'<'}<span className='green'>form</span> <span className='blue'>id</span>=<span className='blue1'>"myForm"</span>{'>'}</p>

  <p>&nbsp;{'<'}<span className='green'>label</span> <span className='blue'>for</span>=<span className='blue1'>"name"</span>{'>'}Nombre:{'</'}<span className='green'>label</span>{'>'}</p>

  <p>&nbsp;{'<'}<span className='green'>input</span> <span className='blue'>type</span>=<span className='blue1'>"text"</span> <span className='blue'>id</span>=<span className='blue1'>"name"</span> <span className='blue'>name</span>=<span className='blue1'>"name"</span>{'><'}<span className='green'>br</span>{'><'}<span className='green'>br</span>{'>'}</p>

  <p>&nbsp;{'<'}<span className='green'>label</span> <span className='blue'>for</span>=<span className='blue1'>"email"</span>{'>'}Correo electrónico:{'</'}<span className='green'>label</span>{'>'}</p>

  <p>&nbsp;{'<'}<span className='green'>input</span> <span className='blue'>type</span>=<span className='blue1'>"email"</span> <span className='blue'>id</span>=<span className='blue1'>"email"</span> <span className='blue'>name</span>=<span className='blue1'>"email"</span>{'><'}<span className='green'>br</span>{'><'}<span className='green'>br</span>{'>'}</p>

  <p>&nbsp;{'<'}<span className='green'>input</span> <span className='blue'>type</span>=<span className='blue1'>"submit"</span> <span className='blue'>value</span>=<span className='blue1'>"Enviar"</span>{'>'}</p>

  <p>{'</'}<span className='green'>form</span>{'>'}</p>

  <p>{'<'}<span className='green'>script</span>{'>'}</p>

  <p>&nbsp;{'$(document).ready(function(){'}</p>

  <p>&nbsp;<span className='blueviole'>$</span>(<span className='blue1'>"#myForm"</span>).<span className='blue'>submit</span>{'('}<span className='red'>function</span>(evento){'{'}</p>

  <p>&nbsp;evento.<span className='blue'>preventDefault</span>();</p>

  <p>&nbsp;<span className='blueviole'>alert</span>(<span className='blue1'>"¡Formulario enviado!"</span>);</p>

  <p>&nbsp;{'});'}</p>

  <p>{' });'}</p>

  <p>{'</'}<span className='green'>script</span>{'>'}</p>

  <p>{'</'}<span className='green'>body</span>{'>'}</p>

  <p>{'</'}<span className='green'>html</span>{'>'}</p>
</code>

<p>En este código, adjuntamos un controlador de eventos <b>submit()</b> al elemento de formulario usando el selector de ID <b>#myForm</b>. Dentro de la función del controlador de eventos, usamos el método <b>preventDefault()</b> para evitar el comportamiento de envío de formulario predeterminado, que recargaría la página. En su lugar, mostramos un cuadro de mensaje con el texto "¡Formulario enviado!".</p>
    
<p>Cuando el usuario envía el formulario, se activa el evento <b>submit()</b>, y se ejecuta la función del controlador de eventos, evitando el comportamiento de envío de formulario predeterminado y mostrando el cuadro de mensaje.</p>    

<p>En general, los métodos de manejo de eventos en jQuery proporcionan una forma poderosa de manejar interacciones del usuario y responder a eventos de manera consistente y compatible entre navegadores</p>    


<b><p>* Texto escrito con la ayuda de un traductor. Si encuentras un error, por favor avísanos *</p></b>
  
  <div className='ads-container'>  
  {/*  реклама  */}
</div>

    </div>
  )
}

export default EsJquery;