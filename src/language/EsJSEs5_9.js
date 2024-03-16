import React from 'react';

function EsJSEs5_9() {
  return (
    <div>
      <div className='ad-container'>  
          {/*  реклама  */}
        </div>
      
      <h1>Protocolo Pseudo JavaScript</h1>

<p>Ejemplo de uso del "protocolo pseudo" JavaScript: en el atributo href de una etiqueta de anclaje {'(<a>)'}. Cuando el usuario hace clic en el enlace, ejecutará el código JavaScript especificado en el atributo href.</p>

<p>Aquí hay una forma alternativa de escribir el mismo código sin usar el protocolo javascript:</p>

<code>
  <p>{'<'}<span className='green'>a</span> <span className='blue'>href</span>=<span className='blue1'>"#"</span> <span className='blue'>onclick</span>=<span className='blue1'>"myFunction(); return false;"</span>{'>'}Click{'</'}<span className='green'>a</span>{'>'}</p>

  <p>{'<'}<span className='green'>script</span>{'>'}</p>

  <p>&nbsp;<span className='red'>function</span> myFunction() {'{'}</p>

  <p>&nbsp;&nbsp;{'console'}.<span className='blue'>log</span>(<span className='blue1'>"Hola"</span>);</p>

  <p>&nbsp;{'}'}</p>

  <p>{'</'}<span className='green'>script</span>{'>'}</p>
</code>

<p>En este ejemplo, usamos un atributo href de anclaje vacío y el controlador de eventos onclick para llamar a la función myFunction() cuando el usuario hace clic en el enlace. La declaración return false evita que el enlace navegue a una nueva página.</p>

<p>Ambos ejemplos logran el mismo resultado de imprimir "Hola" en la consola cuando se hace clic en el enlace. Sin embargo, se considera que el segundo ejemplo es una práctica mejor porque separa el código JavaScript del marcado HTML, lo que facilita el mantenimiento y la depuración del código.</p>

<h2>Modelo de Objeto del Navegador (BOM)</h2>

<p>En JavaScript ES5, el Modelo de Objeto del Documento (DOM) representa los elementos HTML de una página web como un árbol estructurado, lo que permite que el código JavaScript interactúe y manipule el contenido de la página web dinámicamente. A continuación, se muestran algunos objetos comúnmente utilizados en el objeto de ventana del navegador:</p>

<p>1. <b>window:</b> El objeto de nivel superior en la jerarquía de JavaScript del navegador, que representa la ventana del navegador. Todos los objetos, funciones y variables globales de JavaScript se convierten automáticamente en miembros del objeto window.</p>

<p>2. <b>history:</b> El objeto history permite que JavaScript interactúe con el historial del navegador, lo que le permite retroceder y avanzar entre páginas.</p>

<p>Ejemplo</p>

<code><p>window.history.back(); <span className='green'>// Retrocede una página</span> </p></code>

<p>3. <b>navigator:</b> El objeto navigator proporciona información sobre el navegador web y el sistema operativo que se ejecuta en la computadora del usuario.</p>

<p>Ejemplo</p>

<code><p>{'console'}.<span className='blue'>log</span>(navigator.userAgent); <span className='green'>// Muestra la cadena de agente de usuario para el navegador</span></p></code>

<p>4. <b>screen:</b> El objeto screen proporciona información sobre la resolución de pantalla y la profundidad de color del usuario.</p>

<p>Ejemplo:</p>

<code><p>{'console'}.<span className='blue'>log</span>(screen.width);<span className='green'> // Muestra el ancho de la pantalla del usuario</span></p></code>

<p><span>5. location:</span> El objeto location proporciona información sobre la URL actual de la página web y le permite navegar a nuevas URL.</p>

<p>Ejemplo:</p>

<code><p>{'console'}.<span className='blue'>log</span>(location.href);<span className='green'> // Muestra la URL actual location.href = "https://www.example.com"; // Navega a una nueva URL</span></p></code>

<p>6. <b>document:</b> El objeto document representa el contenido HTML de la página web actual y permite que el código JavaScript interactúe y manipule el contenido de la página.</p>

<p>Ejemplo:</p>

<code><p>{'document'}.<span className='blue'>getElementById</span>(<span className='blue1'>"miDiv"</span>).<span className='blue'>innerHTML </span>= <span className='blue1'>"Nuevo contenido"</span>; <span className='green'>// Cambia el contenido HTML de un elemento con el ID "miDiv"</span></p></code>

<p>7. <b>métodos:</b> Hay muchos otros métodos disponibles en el objeto de ventana del navegador, como alert(), prompt(), confirm(), setInterval() y setTimeout(), que le permiten mostrar cuadros de diálogo, establecer temporizadores y más.</p>

<p>Ejemplo:</p>

<code><p><span className='blueviole'>alert</span>(<span className='blue1'>"¡Hola, mundo!"</span>); <span className='green'>// Muestra un cuadro de diálogo de alerta con el mensaje "¡Hola, mundo!"</span></p></code>

<h5>El Modelo de Objeto del Navegador (BOM) es una API de JavaScript que proporciona acceso al objeto de ventana del navegador y sus propiedades. Una de las propiedades del objeto window es el objeto history, que contiene el historial de navegación del usuario.</h5>

<p>El objeto history proporciona varios métodos para navegar a través del historial de navegación.</p>

<p>El método <b>history.go()</b> se puede utilizar para navegar a una página específica en el historial de navegación. Este método acepta un entero positivo o negativo como argumento. Si el argumento es un entero positivo, navega hacia adelante en el historial, y si es negativo, navega hacia atrás en el historial. Por ejemplo, history.go(-1) navegaría hacia atrás una página en el historial de navegación, y history.go(2) navegaría hacia adelante dos páginas.</p>

<p>El método <b>history.back()</b> se utiliza para retroceder una página en el historial de navegación, equivalente a <b>history.go(-1)</b>.</p>

<p>El método <b>history.forward()</b> se utiliza para avanzar una página en el historial de navegación, equivalente a <b>history.go(1)</b>.</p>

<p>La propiedad <b>history.length</b> devuelve el número de páginas en el historial de navegación.</p>

<p>Aquí tienes un ejemplo de cómo usar el objeto history:</p>

<code>
  <p><span className='green'>{ '// Retrocede una página en el historial de navegación'} </span> history.<span className='blue'>back</span>();</p>

  <p><span className='green'>{'// Avanza una página en el historial de navegación'} </span>history.<span className='blue'>forward</span>();</p>

  <p><span className='green'>{'// Navega a la tercera página en el historial de navegación'} </span> history.<span className='blue'>go</span>(<span className='blue1'>2</span>);</p>

  <p><span className='green'>{ '// Obtiene el número de páginas en el historial de navegación'}</span>  {'console'}.<span className='blue'>log</span>(history.<span className='blue'>length</span>);</p>
</code>

<h4>El Modelo de Objeto del Navegador (BOM) es una parte de la API de JavaScript que proporciona acceso a la ventana del navegador y sus propiedades. El objeto Navigator es una parte del BOM y representa el navegador en sí mismo. Proporciona información sobre el navegador que se está utilizando actualmente.</h4>

<p>Aquí tienes algunas de las propiedades del objeto Navigator y sus explicaciones:</p>

<code>
  <p>navigator.<span className='blue'>appCodeName</span>: Devuelve el nombre de código del navegador.</p>

  <p>navigator.<span className='blue'>appName</span>: Devuelve el nombre del navegador.</p>

  <p>navigator.<span className='blue'>appVersion</span>: Devuelve la información de versión del navegador.</p>

  <p>navigator.<span className='blue'>language</span>: Devuelve el idioma que tiene configurado el navegador.</p>

  <p>navigator.<span className='blue'>platform</span>: Devuelve la plataforma del sistema operativo en la que se está ejecutando el navegador.</p>

  <p>navigator.<span className='blue'>userAgent</span>: Devuelve la cadena de agente de usuario para el navegador.</p>
</code>

<p>Aquí tienes un ejemplo de cómo usar el objeto Navigator:</p>

<code>
  <p>{'console'}.<span className='blue'>log</span>(navigator.appName); <span className='green'>// Muestra el nombre del navegador</span></p>

  <p>{'console'}.<span className='blue'>log</span>(navigator.userAgent); <span className='green'>// Muestra la cadena de agente de usuario para el navegador</span></p>
</code>

<p>Al usar las propiedades del objeto Navigator, puedes escribir código JavaScript que se comporte de manera diferente según el navegador que esté utilizando el usuario.</p>

<h3>El Modelo de Objeto del Navegador (BOM) en JavaScript proporciona una forma de interactuar con la ventana del navegador y sus propiedades. El objeto window.screen es parte del BOM y proporciona información sobre la pantalla del usuario.</h3>

<p>Aquí tienes un desglose de las propiedades de <b>window.screen:</b></p>

<p><b>screen.height:</b> devuelve la altura total de la pantalla del usuario en píxeles.</p>

<p><b>screen.width:</b> devuelve el ancho total de la pantalla del usuario en píxeles.</p>

<p><b>screen.availHeight:</b> devuelve la altura disponible de la pantalla del usuario en píxeles, excluyendo la barra de tareas de Windows y otros elementos del sistema.</p>

<p><b>screen.availWidth:</b> devuelve el ancho disponible de la pantalla del usuario en píxeles, excluyendo la barra de tareas de Windows y otros elementos del sistema.</p>

<p>Aquí tienes un ejemplo de cómo usar estas propiedades:</p>

<code>
  <p>{'console'}.<span className='blue'>log</span>(<span className='blue1'>"Altura total de la pantalla: "</span> + window.<span className='blue'>screen</span>.<span className='blue'>height</span> + <span className='blue1'>" píxeles"</span>);</p>

  <p>{'console'}.<span className='blue'>log</span>(<span className='blue1'>"Ancho total de la pantalla: "</span> + window.<span className='blue'>screen</span>.<span className='blue'>width</span> + <span className='blue1'>" píxeles"</span>);</p>

  <p>{'console'}.<span className='blue'>log</span>(<span className='blue1'>"Altura disponible de la pantalla: "</span> + window.<span className='blue'>screen</span>.<span className='blue'>availHeight</span> + <span className='blue1'>" píxeles"</span>);</p>

  <p>{'console'}.<span className='blue'>log</span>(<span className='blue1'>"Ancho disponible de la pantalla: "</span> + window.<span className='blue'>screen</span>.<span className='blue'>availWidth</span> + <span className='blue1'>" píxeles"</span>);</p>
</code>

<p>Este código registrará la altura y el ancho de la pantalla, así como la altura y el ancho disponibles de la pantalla, en la consola.</p>

<p>Ten en cuenta que el objeto screen es de solo lectura y no se puede modificar.</p>

<h3>El Modelo de Objeto del Navegador (BOM) es un conjunto de objetos JavaScript proporcionados por los navegadores web para interactuar con la ventana del navegador. Uno de los objetos en el BOM es el objeto location, que representa la URL actual de la ventana del navegador. El objeto location tiene varias propiedades a las que se puede acceder y modificar para interactuar con la URL.</h3>

<p>Aquí están las explicaciones de las propiedades del objeto <b>location:</b></p>

<p><b>location.protocol:</b> Esta propiedad especifica el protocolo utilizado en la URL, como <span className='blue1'>"http:"</span> o <span className='blue1'>"https:"</span>.</p>

<p><b>location.host:</b> Esta propiedad especifica el nombre de dominio y el número de puerto en la URL, como <span className='blue1'>"www.site.com:8080"</span>.</p>

<p><b>location.hostname:</b> Esta propiedad especifica el nombre de dominio en la URL, como <span className='blue1'>"www.site.com"</span>.</p>

<p><b>location.href:</b> Esta propiedad especifica la URL completa, como <span className='blue1'>"http://www.site.com/about/?name=javascript#content"</span>.</p>

<p><b>location.port:</b> Esta propiedad especifica el número de puerto en la URL, como <span className='blue1'>"8080"</span>.</p>

<p><b>location.pathname:</b> Esta propiedad especifica la ruta de la URL, como <span className='blue1'>"/about/"</span>.</p>

<p><b>location.search:</b> Esta propiedad especifica la cadena de consulta en la URL, como <span className='blue1'>"?name=javascript"</span>.</p>

<p><b>location.hash:</b> Esta propiedad especifica el identificador de fragmento en la URL, como <span className='blue1'>"#content"</span>.</p>

<p>Al acceder y modificar estas propiedades del objeto <b>location</b>, puedes interactuar con la URL actual de la ventana del navegador, como redirigir al usuario a una página diferente o modificar la cadena de consulta.</p>

<p>El método <b>setTimeout()</b> es una función JavaScript incorporada que ejecuta una función o un fragmento de código especificado después de que haya pasado una cantidad específica de tiempo. Toma dos argumentos: una función para ejecutar y un retraso de tiempo en milisegundos.</p>

<p>En el código de ejemplo que proporcionaste, se declara una variable llamada <b>timer</b> y se le asigna el valor de retorno de la función <b>setTimeout()</b>. La función que se ejecuta aquí es una simple declaración de <b>console.log()</b> que imprime "¡Hola, mundo!" en la consola después de un retraso de 2000 milisegundos (o 2 segundos).</p>
 
 <p>Luego se llama al método <b>clearTimeout()</b> con la variable del temporizador como argumento. Este método cancela el tiempo de espera establecido por <b>setTimeout()</b>, lo que significa que la declaración <b>console.log()</b> no se ejecutará después del retraso especificado.</p>
    
 <p>Entonces, en resumen, el código establece un temporizador para ejecutar una función después de 2 segundos, pero luego cancela inmediatamente ese temporizador antes de que pueda completarse. Este es un ejemplo simple de cómo usar los métodos <b>setTimeout()</b> y <b>clearTimeout()</b> en JavaScript.</p>   
   
  <p>Código de ejemplo usando <b>setTimeout:</b></p> 
   
 <code>
  <p><span className='blueviole'>function </span><span className='blue'>sayHello</span>() {'{'}</p>

  <p>{'console'}.<span className='blue'>log</span>(<span className='red'>"¡Hola, mundo!"</span>);</p>

  <p>{'}'}</p>

  <p className='green'>// Llama a la función después de 2 segundos</p>

  <p><span className='blueviole'>var</span> <span className='blue'>timer</span> = setTimeout(sayHello, <span className='blue'>2000</span>);</p>

  <p className='green'>// Cancela el temporizador antes de que se ejecute</p>

  <p>clearTimeout(timer);</p>
 </code>

<p>En este ejemplo, la función <b>setTimeout</b> se utiliza para retrasar la ejecución de la función <b>sayHello</b> durante 2 segundos. La función se pasa como parámetro a setTimeout junto con el retraso de tiempo en milisegundos. La función <b>setTimeout</b> devuelve un ID de temporizador que se utiliza para cancelar el temporizador antes de que se ejecute utilizando la función <b>clearTimeout</b>.</p>

<h3>Eventos</h3>

<p>El Modelo de Objeto del Documento (DOM) es una interfaz de programación para documentos web. Representa la página para que los programas puedan cambiar la estructura, el estilo y el contenido del documento. Los eventos son acciones u ocurrencias que suceden en el navegador, como hacer clic en un botón, desplazar la página o presionar una tecla en el teclado.</p>

<p>onclick</p>
   
<p>onmousedown</p>

<p>onmouseup</p>
   
<p>onmousemove</p>

<p>onmouseover</p>

<p>onmouseout</p>

<p>onkeydown</p>

<p>onkeyup</p>

<p>onkeypress</p>

<p>onfocus</p>

<p>onblur</p>

<p>onsubmit</p>

<p>onreset</p>

<p>onselect</p>

<p>onchange</p>

<p>onscroll</p>

<p>onload</p>

<p>onunload</p>

<p>Los eventos enumerados son controladores de eventos, que son funciones que se ejecutan cuando ocurre un evento específico en una página web. Por ejemplo, el controlador de eventos "onclick" se ejecuta cuando un usuario hace clic en un elemento en una página web. De manera similar, el controlador de eventos "onload" se ejecuta cuando la página ha terminado de cargarse en el navegador.</p>
   

<p>Estos controladores de eventos se pueden agregar a elementos HTML utilizando el prefijo "on" seguido del nombre del evento, como "onclick" o "onload". Cuando ocurre el evento especificado, se ejecuta la función asignada al controlador de eventos. Esto permite a los desarrolladores crear páginas web interactivas que respondan a las acciones del usuario.</p>   

  <b><p>* Texto escrito con la ayuda de un traductor. Si encuentras un error, por favor avísanos *</p></b>
    
    <div className='ads-container'>  
      {/*  реклама  */}
      </div>
    </div>
  )
}

export default EsJSEs5_9;