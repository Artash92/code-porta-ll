import React from 'react';

function EsHtml_2() {
  return (
    <div>
       <div className='ad-container'>  
          {/*  реклама  */}
        </div>

        <h1>Etiquetas HTML y sus descripciones:</h1>

<p>1. <b>{'<'}<span className='green'>html</span>{'>'}</b> Define un documento HTML.</p>

<p>2. <b>{'<'}<span className='green'>head</span>{'>'}</b> Contiene información de metadatos sobre el documento, como el título y los enlaces a hojas de estilo CSS.</p>

<p>3. <b>{'<'}<span className='green'>title</span>{'>'}</b> Define el título del documento, que aparece en la barra de título o pestaña del navegador.</p>

<p>4. <b>{'<'}<span className='green'>body</span>{'>'}</b> Contiene el contenido visible del documento.</p>

<p>5. <b>{'<'}<span className='green'>h1</span>{'>'} - {'<'}<span className='green'>h6</span>{'>'}</b> Define encabezados de diferentes niveles de importancia, siendo {'<h1>'} el más importante y {'<h6>'} el menos.</p>

<p>6. <b>{'<'}<span className='green'>p</span>{'>'}</b> Define un párrafo de texto.</p>

<p>7. <b>{'<'}<span className='green'>a</span>{'>'}</b> Define un hipervínculo a otra página web o una ubicación específica dentro de la misma página.</p>

<p>8. <b>{'<'}<span className='green'>img</span>{'>'}</b> Inserta una imagen en el documento.</p>

<p>9. <b>{'<'}<span className='green'>ul</span>{'>'}</b> Define una lista no ordenada, típicamente marcada con viñetas.</p>

<p>10. <b>{'<'}<span className='green'>ol</span>{'>'}</b> Define una lista ordenada, típicamente marcada con números o letras.</p>

<p>11. <b>{'<'}<span className='green'>li</span>{'>'}</b> Define un elemento de lista dentro de una lista ordenada o no ordenada.</p>

<p>12. <b>{'<'}<span className='green'>div</span>{'>'}</b> Define un contenedor para elementos HTML, que se puede usar para estilos y posicionamiento.</p>

<p>13. <b>{'<'}<span className='green'>span</span>{'>'}</b> Define un pequeño contenedor para elementos HTML en línea, que se puede usar para estilos y posicionamiento.</p>

<p>14. <b>{'<'}<span className='green'>form</span>{'>'}</b> Define un formulario para la entrada del usuario, que puede contener varios campos de entrada y botones de envío.</p>

<p>15. <b>{'<'}<span className='green'>input</span>{'>'}</b> Define un campo de entrada para la entrada del usuario, como un cuadro de texto o una casilla de verificación.</p>

<p>16. <b>{'<'}<span className='green'>button</span>{'>'}</b> Define un elemento de botón clickeable, que se puede usar para varias interacciones del usuario.</p>

<p>17. <b>{'<'}<span className='green'>select</span>{'>'}</b> Define una lista desplegable, que permite a los usuarios seleccionar una o varias opciones.</p>

<p>18. <b>{'<'}<span className='green'>option</span>{'>'}</b> Define una opción dentro de una lista desplegable.</p>

<p>19. <b>{'<'}<span className='green'>textarea</span>{'>'}</b> Define un campo de entrada de texto multilínea.</p>

<p>20. <b>{'<'}<span className='green'>hr</span>{'>'}</b> Significa "regla horizontal". Se utiliza para insertar una línea horizontal en la página HTML. La línea se puede utilizar para separar visualmente el contenido.</p>

<p>21. <b>{'<'}<span className='green'>br</span>{'>'}</b> Significa "salto de línea". Se utiliza para insertar un salto de línea o una nueva línea en el contenido HTML. A diferencia de la etiqueta {'<p>'}, que crea un nuevo párrafo, la etiqueta {'<br>'} solo crea una nueva línea.</p>

<p>22. <b>{'<'}<span className='green'>small</span>{'>'}</b> Define texto más pequeño (como derechos de autor y otros comentarios laterales).</p>

<p><a href="https://www.w3schools.com/tags/" target='_blank' > <b>Más etiquetas se pueden encontrar aquí 👉🏼 W3Schools</b></a></p>

<h2>Etiquetas y atributos de tabla HTML</h2>

<p>1. <b>{'<'}<span className='green'>table</span>{'>'}</b> Se utiliza para definir el inicio y el final de una tabla HTML. Todas las etiquetas relacionadas con tablas están contenidas dentro del elemento {'<table>'}.</p>

<p>2. <b>{'<'}<span className='green'>caption</span>{'>'}</b> Se utiliza para proporcionar un título o una leyenda para la tabla. Debería colocarse inmediatamente después de la etiqueta de apertura {'<table>'}.</p>

<p>3. <b>{'<'}<span className='green'>frame</span>{'>'}</b> Especifica cómo deben mostrarse los bordes de la tabla. Tiene tres valores posibles: void, above y below.</p>

<p>4. <b>{'<'}<span className='green'>rules</span>{'>'}</b> Especifica la visibilidad de los bordes de la tabla. Puede establecerse en "none" para ocultar los bordes, "groups" para mostrar bordes entre grupos de filas y grupos de columnas, o "rows" para mostrar bordes entre filas.</p>

<p>5. <b>{'<'}<span className='green'>border</span>{'>'}</b> Especifica el ancho de los bordes de la tabla en píxeles.</p>

<p>6. <b>{'<'}<span className='green'>cellspacing</span>{'>'}</b> Especifica la cantidad de espacio entre celdas adyacentes en la tabla. Se especifica en píxeles.</p>

<p>7. <b>{'<'}<span className='green'>cellpadding</span>{'>'}</b> Especifica la cantidad de espacio entre el contenido de la celda y los bordes de la celda. También se especifica en píxeles.</p>

<p>8. <b>{'<'}<span className='green'>tr</span>{'>'}</b> Define una fila de tabla.</p>

<p>9. <b>{'<'}<span className='green'>th</span>{'>'}</b> Define una celda de encabezado de tabla. Esto se usa típicamente para proporcionar encabezados para cada columna en la tabla.</p>

<p>10. <b>{'<'}<span className='green'>td</span>{'>'}</b> Define una celda de datos de tabla. Aquí es donde se coloca el contenido real de la tabla.</p>

<h2>Enlaces o referencias de hipertexto</h2>

<p>Los enlaces o referencias de hipertexto en HTML se utilizan para crear elementos clicables en una página web que permiten a los usuarios navegar a otras páginas, secciones de la misma página u otros recursos en línea. La estructura básica de un enlace consiste en una etiqueta de anclaje {'(<a>)'} y un atributo href que especifica el destino del enlace.</p>

<p>Aquí tienes un ejemplo de un enlace básico en HTML:</p>

<code><p>{'<'}<span className='green'>a</span> <span className='blue'>href</span>=<span className='blue1'>"https://www.example.com"</span>{'>'}Haz clic aquí para visitar Example.com{'</'}<span className='green'>a</span>{'>'}</p></code>

<p>En este ejemplo, el texto "Haz clic aquí para visitar Example.com" es la parte cliclable del enlace, mientras que el atributo href especifica la URL del destino. Cuando el usuario hace clic en el enlace, será llevado al sitio web en la URL especificada.</p>

<p>Los enlaces también se pueden usar para crear puntos de anclaje dentro de una sola página web. Esto permite a los usuarios saltar rápidamente a una sección específica de la página haciendo clic en un enlace. Para crear un punto de anclaje, agregarías un atributo <b>id</b> al elemento al que quieres enlazar, y luego crearías un enlace con un símbolo <b>#</b> seguido del valor de <b>id</b> como destino.</p>

<code>
<p>{'<'}<span className='green'>h2</span> <span className='blue'>id</span>=<span className='blue1'>"section1"</span>{'>'}Sección 1{'</'}<span className='green'>h2 </span>{'>'}</p>

<p>{'<'}<span className='green'>p</span>{'>'}Esta es la primera sección de la página.{'</'}<span className='green'>p</span>{'>'}</p>

<p>{'<'}<span className='green'>h2</span> <span className='blue'>id</span>=<span className='blue1'>"section2"</span>{'>'}Sección 2 {'</'}<span className='green'>h2 </span>{'>'}</p>

<p>{'<'}<span className='green'>p</span>{'>'}Esta es la segunda sección de la página.{'</'}<span className='green'>p</span>{'>'}</p>

<p>{'<'}<span className='green'>a</span> <span className='blue'>href</span>=<span className='blue1'>"#section1"</span>{'>'}Ir a la Sección 1{'</'}<span className='green'>a</span>{'>'}</p>

<p>{'<'}<span className='green'>a</span> <span className='blue'>href</span>=<span className='blue1'>"#section2"</span>{'>'}Ir a la Sección 2{'</'}<span className='green'>a</span>{'>'}</p>
</code>

<p>En este ejemplo, hemos agregado atributos <b>id</b> a las dos etiquetas <b>h2</b> para crear puntos de anclaje para cada sección. Los dos enlaces en la parte inferior de la página usan el atributo <b>href</b> para enlazar a estos puntos de anclaje, permitiendo a los usuarios saltar rápidamente a una sección específica de la página.</p>

<p>Hay muchas otras opciones y atributos que se pueden usar con enlaces en HTML, incluyendo target, download, rel y más. Al utilizar los enlaces de manera efectiva, puedes crear una experiencia de usuario más interactiva y atractiva en tus páginas web.</p>

<p>Para crear un enlace para un número de teléfono o Skype, puedes usar la etiqueta {'<a>'} con el atributo href configurado en <b>"tel:"</b> o <b>"skype:"</b> seguido del número de teléfono o el nombre de usuario de Skype.</p>

<p>Por ejemplo, para crear un enlace para un número de teléfono, puedes usar el siguiente código:</p>

<code><p>{'<'}<span className='green'>a</span> <span className='blue'>href</span>=<span className='blue1'>"tel:+1234567890"</span>{'>'}Llámanos al +1 (234) 567-890{'</'}<span className='green'>a</span>{'>'}</p></code>

<p>En este ejemplo, <b>"tel:"</b> se utiliza como protocolo para números de teléfono, y "+1234567890" es el número de teléfono. Cuando un usuario hace clic en este enlace en un dispositivo móvil, se lanzará automáticamente la aplicación de teléfono con el número prellenado.</p>

<p>Para crear un enlace para Skype, puedes usar el siguiente código:</p>

<code><p>{'<'}<span className='green'>a</span> <span className='blue'>href</span>=<span className='blue1'>"skype:nombredeusuario?call"</span>{'>'}Llámanos en Skype{'</'}<span className='green'>a</span>{'>'}</p></code>

<p>En este ejemplo, <b>"skype:"</b> se utiliza como protocolo para enlaces de Skype, "nombredeusuario" es el nombre de usuario de la persona o empresa a la que deseas llamar, y "?call" se agrega para iniciar una llamada. Cuando un usuario hace clic en este enlace, se lanzará la aplicación de Skype y se iniciará una llamada al nombre de usuario especificado.</p>

<p><b>La etiqueta {'<img>'} en HTML se utiliza para mostrar imágenes en una página web. Aquí tienes un ejemplo de cómo usar la etiqueta {'<img>'}:</b></p>

<code><p>{'<'}<span className='green'>img</span> <span className='blue'>src</span>=<span className='blue1'>"imagen.jpg"</span> <span className='blue'>alt</span>=<span className='blue1'>"Descripción de la imagen"</span>{'>'}</p></code>

<p>Vamos a desglosar las diferentes partes de esta etiqueta:</p>

<p>El atributo "src" especifica la URL del archivo de imagen que deseas mostrar.</p>

<p>El atributo "alt" proporciona una descripción de la imagen para lectores de pantalla y otras tecnologías de asistencia.</p>

<p>Aquí tienes un ejemplo de cómo usar la etiqueta {'<img>'} para mostrar una imagen con un ancho y alto específicos:</p>

<code><p>{'<'}<span className='green'>img</span> <span className='blue'>src</span>=<span className='blue1'>"imagen.jpg"</span> <span className='blue'>alt</span>=<span className='blue1'>"Descripción de la imagen"</span> <span className='blue'>width</span>=<span className='blue1'>"500"</span> <span className='blue'>height</span>=<span className='blue1'>"300"</span> {'>'}</p></code>

<p>En este ejemplo, los atributos <b>"width"</b> y <b>"height" </b> especifican las dimensiones de la imagen en píxeles.</p>

<p>También puedes agregar otros atributos a la etiqueta {'<img>'} para personalizar aún más la visualización de la imagen, como <b>"class"</b> e <b>"id"</b> para propósitos de estilización CSS.</p>


<b><p>* Texto escrito con la ayuda de un traductor. Si encuentras un error, por favor avísanos *</p></b>
  
  <div className='ads-container'>  
  {/*  реклама  */}
</div>

    </div>
  )
}

export default EsHtml_2;