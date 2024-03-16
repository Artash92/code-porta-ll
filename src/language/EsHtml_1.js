import React from 'react';

function EsHtml_1() {
  return (
    <div>
        <div className='ad-container'>  
          {/*  реклама  */}
        </div>
        
        <h1>HTML</h1>

<p>HTML, que significa Lenguaje de Marcado de Hipertexto, es un lenguaje de marcado utilizado para crear y estructurar contenido en la web. Es la columna vertebral de cada sitio web y sirve como los bloques de construcción de las páginas web. HTML es un lenguaje declarativo, lo que significa que se utiliza para describir el contenido y la estructura de una página web, pero no necesariamente su apariencia.</p>

<p>HTML fue creado por Tim Berners-Lee a principios de la década de 1990 mientras trabajaba en el CERN, la Organización Europea para la Investigación Nuclear. Berners-Lee buscaba una forma de compartir y organizar información entre los investigadores, y HTML fue la solución que ideó. HTML fue diseñado para ser un lenguaje simple que pudiera ser comprendido y utilizado fácilmente por cualquier persona, independientemente de su formación técnica.</p>

<p>HTML está compuesto por una serie de elementos, que están representados por etiquetas. Las etiquetas están encerradas entre corchetes angulares y se utilizan para definir la estructura y el contenido de una página web. Por ejemplo, la etiqueta {'<head>'} se utiliza para definir la sección head de una página web, que generalmente contiene información como el título de la página y enlaces a hojas de estilo externas y scripts. La etiqueta {'<body>'} se utiliza para definir la sección body de una página web, que contiene el contenido principal de la página.</p>

<p>HTML es un lenguaje en constante evolución, con nuevas versiones que se lanzan periódicamente. La versión actual de HTML es HTML5, que se lanzó en 2014. HTML5 introdujo muchas características y capacidades nuevas, como etiquetas de video y audio, elementos de lienzo para dibujar gráficos y etiquetas semánticas para una mejor accesibilidad y SEO.</p>

<p>En resumen, HTML es un lenguaje de marcado utilizado para crear y estructurar contenido en la web. Fue creado por Tim Berners-Lee a principios de la década de 1990 y es la columna vertebral de cada sitio web. HTML está compuesto por una serie de elementos representados por etiquetas, y es un lenguaje en constante evolución con nuevas versiones que se lanzan periódicamente.</p>

<p>1. Página web simple con un título y un párrafo:</p>

<code>
   <p>{'<'}!<span className='blue'>DOCTYPE</span> <span className='blue1'>html</span>{'>'}</p>

   <p>{'<'}<span className='green'>html</span>{'>'}</p> 
  
   <p>{'<'}<span className='green'>head</span>{'>'}</p>

   <p>&nbsp;{'<'}<span className='green'>title</span>{'>'}Mi página web{'</'}<span className='green'>title</span>{'>'}</p>

   <p>{'</'}<span className='green'>head</span>{'>'}</p>

   <p>{'<'}<span className='green'>body</span>{'>'}</p>

   <p>&nbsp;{'<'}<span className='green'>h1</span>{'>'}Bienvenido a mi página web{'</'}<span className='green'>h1</span>{'>'}</p>

   <p>&nbsp;{'<'}<span className='green'>p</span>{'>'}Esta es mi primera página web.{'</'}<span className='green'>p</span>{'>'}</p>

   <p>{'</'}<span className='green'>body</span>{'>'}</p>

   <p>{'</'}<span className='green'>html</span>{'>'}</p>
</code>

<p>Este es un ejemplo de una página web simple que consta de un título y un párrafo. El título está representado por la etiqueta "title" y el párrafo por la etiqueta "p". El título de la página se muestra en la barra de título del navegador y en los resultados de los motores de búsqueda.</p>

<p>2. Imagen con texto alternativo y un enlace a otra página:</p>

<code>
    <p>{'<'}!<span className='blue'>DOCTYPE</span> <span className='blue1'>html</span>{'>'}</p>
       
    <p>{'<'}<span className='green'>html</span>{'>'}</p> 
       
    <p>{'<'}<span className='green'>head</span>{'>'}</p>  
       
    <p>&nbsp;{'<'}<span className='green'>title</span>{'>'}Mi página web{'</'}<span className='green'>title</span>{'>'}</p> 
       
    <p>{'</'}<span className='green'>head</span>{'>'}</p> 
       
    <p>{'<'}<span className='green'>body</span>{'>'}</p> 
       
    <p>&nbsp;{'<'}<span className='green'>h1</span>{'>'}Bienvenido a mi página web{'</'}<span className='green'>h1</span>{'>'}</p>
       
    <p>&nbsp;{'<'}<span className='green'>p</span>{'>'}Esta es una imagen de un gato:{'</'}<span className='green'>p</span>{'>'}</p>
       
    <p>&nbsp;{'<'}<span className='green'>img</span> <span className='blue'>src</span>=<span className='blue1'>"gato.jpg"</span> <span className='blue'>alt</span>=<span className='blue1'>"Un gato lindo"</span>{'>'}</p> 

    <p>&nbsp;{'<'}<span className='green'>p</span>{'>'}Haz clic {'<'}<span className='green'>a</span> <span className='blue'>href</span>=<span className='blue1'>"http://www.google.com"</span>{'>'}aquí{'</'}<span className='green'>a</span>{'>'} para ir a Google.{'</'}<span className='green'>p</span>{'>'}</p> 

    <p>{'</'}<span className='green'>body</span>{'>'}</p> 

    <p>{'</'}<span className='green'>html</span>{'>'}</p>
</code>

<p>Este ejemplo incluye una imagen de un gato, representada por la etiqueta "img", con texto alternativo que se muestra en caso de que la imagen no se pueda cargar. El enlace a Google está representado por la etiqueta "a" con el atributo "href" apuntando a la URL de la página de destino.</p>

<p>3. Formulario para ingresar un nombre y enviar datos a un servidor:</p>

<code>
    <p>{'<'}!<span className='blue'>DOCTYPE</span> <span className='blue1'>html</span>{'>'}</p>
    
    <p>{'<'}<span className='green'>html</span>{'>'}</p>    

    <p>{'<'}<span className='green'>head</span>{'>'}</p>  

    <p>&nbsp;{'<'}<span className='green'>title</span>{'>'}Mi página web{'</'}<span className='green'>title</span>{'>'}</p>   

    <p>{'</'}<span className='green'>head</span>{'>'}</p>  

    <p>{'<'}<span className='green'>body</span>{'>'}</p> 

    <p>&nbsp;{'<'}<span className='green'>h1</span>{'>'}Bienvenido a mi página web{'</'}<span className='green'>h1</span>{'>'}</p> 

    <p>{'<'}<span className='green'>form</span>{'>'}</p> 

    <p>&nbsp;{'<'}<span className='green'>label</span> <span className='blue'>for</span>=<span className='blue1'>"nombre"</span>{'>'}Ingresa tu nombre:{'</'}<span className='green'>label</span>{'>'}</p>  

    <p>&nbsp;{'<'}<span className='green'>input</span> <span className='blue'>type</span>=<span className='blue1'>"text"</span> <span className='blue'>id</span>=<span className='blue1'>"nombre"</span> <span className='blue'>name</span>=<span className='blue1'>"nombre"</span>{'><'}<span className='green'>br</span>{'><'}<span className='green'>br</span>{'>'}</p>  

    <p>&nbsp;{'<'}<span className='green'>input</span> <span className='blue'>type</span>=<span className='blue1'>"submit"</span> <span className='blue'>value</span>=<span className='blue1'>"Enviar"</span>{'>'}</p>  

    <p>{'</'}<span className='green'>form</span>{'>'}</p>  

    <p>{'</'}<span className='green'>body</span>{'>'}</p>   

    <p>{'</'}<span className='green'>html</span>{'>'}</p>   
</code>

<p>Este ejemplo muestra un formulario con un campo de entrada de texto para que el usuario ingrese su nombre. Cuando se envía el formulario, los datos se envían a un servidor para su procesamiento. La etiqueta "label" proporciona una etiqueta de texto para el campo de entrada, y la etiqueta "input" se utiliza para crear el campo de entrada y el botón de enviar.</p>

<p>4. Lista ordenada de elementos:</p>

<code>
    <p>{'<'}!<span className='blue'>DOCTYPE</span> <span className='blue1'>html</span>{'>'}</p>

    <p>{'<'}<span className='green'>html</span>{'>'}</p> 

    <p>{'<'}<span className='green'>head</span>{'>'}</p>

    <p>&nbsp;{'<'}<span className='green'>title</span>{'>'}Mi página web{'</'}<span className='green'>title</span>{'>'}</p>

    <p>{'</'}<span className='green'>head</span>{'>'}</p> 

    <p>{'<'}<span className='green'>body</span>{'>'}</p> 

    <p>&nbsp;{'<'}<span className='green'>h1</span>{'>'}Bienvenido a mi página web{'</'}<span className='green'>h1</span>{'>'}</p> 

    <p>&nbsp;{'<'}<span className='green'>h2</span>{'>'}Mis comidas favoritas:{'</'}<span className='green'>h2</span>{'>'}</p> 

    <p>{'<'}<span className='green'>ol</span>{'>'}</p>

    <p>&nbsp;{'<'}<span className='green'>li</span>{'>'}Pizza{'</'}<span className='green'>li</span>{'>'}</p>

    <p>&nbsp;{'<'}<span className='green'>li</span>{'>'}Hamburguesas{'</'}<span className='green'>li</span>{'>'}</p>

    <p>&nbsp;{'<'}<span className='green'>li</span>{'>'}Helado{'</'}<span className='green'>li</span>{'>'}</p>

    <p>{'</'}<span className='green'>ol</span>{'>'}</p> 

    <p>{'</'}<span className='green'>body</span>{'>'}</p> 

    <p>{'</'}<span className='green'>html</span>{'>'}</p>
</code>
 

<p>Este ejemplo muestra una lista ordenada de elementos representada por la etiqueta "ol", con cada elemento representado por la etiqueta "li". Los números de la lista son generados automáticamente por el navegador.</p>

<p>5. Lista desordenada de elementos:</p>

<code>
  <p>{'<'}!<span className='blue'>DOCTYPE</span> <span className='blue1'>html</span>{'>'}</p>

  <p>{'<'}<span className='green'>html</span>{'>'}</p>

  <p>{'<'}<span className='green'>head</span>{'>'}</p>

  <p>&nbsp;{'<'}<span className='green'>title</span>{'>'}Mi página web{'</'}<span className='green'>title</span>{'>'}</p>

  <p>{'</'}<span className='green'>head</span>{'>'}</p>

  <p>{'<'}<span className='green'>body</span>{'>'}</p>

  <p>&nbsp;{'<'}<span className='green'>h1</span>{'>'}Bienvenido a mi página web{'</'}<span className='green'>h1</span>{'>'}</p> 

  <p>&nbsp;{'<'}<span className='green'>h2</span>{'>'}Mis películas favoritas:{'</'}<span className='green'>h2</span>{'>'}</p> 

  <p>{'<'}<span className='green'>ul</span>{'>'}</p>

  <p>&nbsp;{'<'}<span className='green'>li</span>{'>'}Sueño de fuga{'</'}<span className='green'>li</span>{'>'}</p>

  <p>&nbsp;{'<'}<span className='green'>li</span>{'>'}El padrino{'</'}<span className='green'>li</span>{'>'}</p>

  <p>&nbsp;{'<'}<span className='green'>li</span>{'>'}El caballero de la noche{'</'}<span className='green'>li</span>{'>'}</p>

  <p>{'</'}<span className='green'>ul</span>{'>'}</p> 

  <p>{'</'}<span className='green'>body</span>{'>'}</p>

  <p>{'</'}<span className='green'>html</span>{'>'}</p> 
</code>
      
<p>Este ejemplo muestra una lista desordenada de elementos representada por la etiqueta "ul", con cada elemento representado por la etiqueta "li". Los elementos de la lista se muestran con viñetas por defecto.</p> 

<p>Para mejorar aún más su comprensión de HTML, se puede dirigir a los estudiantes a recursos adicionales como la documentación en <b>MDN Web Docs</b> o <b>W3Schools</b>.</p> 

<p>Para agregar un enlace a MDN Web Docs en su sitio web, use el siguiente código HTML:</p> 

<p><a href="https://developer.mozilla.org/es/docs/Web/HTML "target='_blank'> <b> &#x1F44D; MDN Web Docs</b></a></p> 
     
<p>Para agregar un enlace a W3Schools en su sitio web, use el siguiente código HTML:</p>  

<p><a href="https://www.w3schools.com/html/" target='_blank' > <b>&#x1F44D; W3Schools</b></a></p>

<p>Tanto MDN Web Docs como W3Schools proporcionan documentación completa y detallada sobre HTML y tecnologías relacionadas, así como tutoriales interactivos y ejemplos. Los estudiantes pueden utilizar estos recursos para profundizar su conocimiento de HTML y mejorar sus habilidades de desarrollo web.</p>



<b><p>* Texto escrito con la ayuda de un traductor. Si encuentras un error, por favor avísanos *</p></b>
  
  <div className='ads-container'>  
  {/*  реклама  */}
</div>
    </div>
  )
}

export default EsHtml_1;