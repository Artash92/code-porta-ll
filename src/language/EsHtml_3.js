import React from 'react';

function EsHtml_3() {
  return (
    <div>
      <div className='ad-container'>  
          {/*  реклама  */}
        </div>
        
        <h1>Entendiendo las Etiquetas Meta en HTML - Una Guía para Principiantes</h1>

<p>1. <b>charset:</b> El atributo charset especifica la codificación de caracteres para el documento HTML. Es importante asegurarse de que la codificación esté configurada correctamente para garantizar que los caracteres especiales se muestren correctamente.</p>

<p>Ejemplo:</p>

<code><p>{'<'}<span className='green'>meta</span> <span className='blue'>charset</span>=<span className='blue1'>"UTF-8"</span>{'>'}</p></code>

<p>2. <b>name:</b> El atributo name se utiliza para definir el tipo de metadatos proporcionados, como palabras clave, descripción o autor.</p>

<p>Ejemplo:</p>

<code><p>{'<'}<span className='green'>meta</span> <span className='blue'>name</span>=<span className='blue1'>"description"</span> <span className='blue'>content</span>=<span className='blue1'>"Esta es una descripción de mi página web."</span>{'>'}</p></code>

<p>3. <b>content:</b> El atributo content se utiliza para especificar el valor de los metadatos proporcionados.</p>

<p>Ejemplo:</p>

<code><p>{'<'}<span className='green'>meta</span> <span className='blue'>name</span>=<span className='blue1'>"keywords"</span> <span className='blue'>content</span>=<span className='blue1'>"HTML, CSS, JavaScript"</span>{'>'}</p></code>

<p>4. <b>http-equiv:</b> El atributo http-equiv se utiliza para definir una cabecera HTTP para el documento HTML, como refresh o content-type.</p>

<p>Ejemplo:</p>

<code><p>{'<'}<span className='green'>meta</span> <span className='blue'>http-equiv</span>=<span className='blue1'>"refresh"</span> <span className='blue'>content</span>=<span className='blue1'>"5"</span>{'>'}</p></code>
  
<p>5. <b>viewport:</b> El atributo viewport se utiliza para controlar el diseño y la escala de una página web en diferentes dispositivos, como teléfonos móviles o tabletas.</p>

<p>Ejemplo:</p>

<code><p>{'<'}<span className='green'>meta</span> <span className='blue'>name</span>=<span className='blue1'>"viewport"</span> <span className='blue'>content</span>=<span className='blue1'>"width=device-width, initial-scale=1.0"</span>{'>'}</p></code>

<h2>Cómo Usar Colores en HTML: Una Guía para Principiantes</h2>

<p>Los colores en HTML se pueden definir utilizando una variedad de métodos, incluyendo nombres de colores, valores hexadecimales, valores RGB y valores HSL.</p>

<b>1. Nombres de Colores:</b>

<p>HTML proporciona un conjunto de nombres de colores predefinidos que se pueden utilizar para especificar el color de un elemento. Algunos ejemplos de nombres de colores incluyen "rojo", "verde", "azul", "amarillo", "morado" y "negro".</p>

<b>2. Valores Hexadecimales:</b>

<p>Un valor de color hexadecimal es un código de seis dígitos que representa un color. Los dos primeros dígitos representan la cantidad de rojo en el color, los siguientes dos dígitos representan la cantidad de verde en el color, y los últimos dos dígitos representan la cantidad de azul en el color. Por ejemplo, #FF0000 representa rojo puro, #00FF00 representa verde puro, y #0000FF representa azul puro.</p>

<b>3. Valores RGB:</b>

<p>Un valor de color RGB es un conjunto de tres números que representan la cantidad de rojo, verde y azul en un color. Cada valor varía de 0 a 255. Por ejemplo, rgb(255, 0, 0) representa rojo puro, rgb(0, 255, 0) representa verde puro, y rgb(0, 0, 255) representa azul puro.</p>

<b>4. Valores HSL:</b>

<p>Un valor de color HSL es un conjunto de tres números que representan el matiz, saturación y luminosidad de un color. El matiz es un grado en la rueda de colores (de 0 a 360), la saturación es un valor porcentual (de 0% a 100%), y la luminosidad también es un valor porcentual (de 0% a 100%). Por ejemplo, hsl(0, 100%, 50%) representa rojo puro, hsl(120, 100%, 50%) representa verde puro, y hsl(240, 100%, 50%) representa azul puro.</p>

<h2>Conceptos Básicos de CSS para Principiantes: Una Introducción a las Hojas de Estilo en Cascada</h2>

<p>CSS significa Hojas de Estilo en Cascada y es un lenguaje utilizado para dar estilo a los documentos HTML. CSS te permite cambiar los colores, fuentes, diseño y otros aspectos de tu página web. Funciona seleccionando elementos HTML y aplicándoles estilos.</p>

<p>Los estilos CSS se crean utilizando selectores, propiedades y valores. Los selectores apuntan a elementos HTML específicos y se pueden utilizar para aplicar estilos a varios elementos a la vez. Las propiedades definen qué estilos deseas aplicar y pueden incluir cosas como tamaño de fuente, color y relleno. Los valores especifican la configuración específica para la propiedad, como un color o tamaño específico.</p>

<p>Para vincular un archivo CSS a un documento HTML, puedes utilizar la etiqueta {'<link>'} en la sección {'<head>'} de tu documento HTML.</p>

<p>Aquí tienes un ejemplo de cómo vincular un archivo CSS llamado "styles.css" a tu documento HTML:</p>

<code>
  <p>{'<'}!<span className='blue'>DOCTYPE</span> <span className='blue1'>html</span>{'>'}</p>

  <p>{'<'}<span className='green'>html</span>{'>'}</p> 

  <p>{'<'}<span className='green'>head</span>{'>'}</p>

  <p>&nbsp;{'<'}<span className='green'>link</span> <span className='blue'>rel</span>=<span className='blue1'>"stylesheet"</span> <span className='blue'>type</span>=<span className='blue1'>"text/css"</span> <span className='blue'>href</span>=<span className='blue1'>"styles.css"</span>{'>'}</p>

  <p>{'</'}<span className='green'>head</span>{'>'}</p>

  <p>{'<'}<span className='green'>body</span>{'>'}</p>

  <p>&nbsp;{'<!-- tu contenido HTML aquí -->'}</p>

  <p>{'</'}<span className='green'>body</span>{'>'}</p>

  <p>{'</'}<span className='green'>html</span>{'>'}</p>
</code>

<p>Aquí tienes un ejemplo de código CSS:</p>

<code>
  <p>{'h1 {'}</p>

  <p><span className='blue'>color</span>: <span className='blue1'>red</span>;</p>

  <p><span className='blue'>font-size</span>: <span className='blue1'>36px</span>; </p>

  <p><span className='blue'>text-align</span>: <span className='blue1'>center</span>; </p>

  <p>{'}'}</p>

  <p>{'p {'}</p>

  <p><span className='blue'>color</span>: <span className='blue1'>blue</span>; </p>

  <p> <span className='blue'>font-size</span>: <span className='blue1'>16px</span>;</p>

  <p><span className='blue'>line-height</span>: <span className='blue1'>1.5</span>;</p>

  <p>{'}'}</p>
</code>

<p>En este código, tenemos dos selectores <b>(h1 y p)</b> y varias propiedades y valores aplicados a cada uno. El selector <b>h1</b> aplica un color rojo, tamaño de fuente de 36px y alineación de texto centrado a todos los elementos <b>h1</b> en la página. El selector <b>p</b> aplica un color azul, tamaño de fuente de 16px y un espaciado entre líneas de 1.5 a todos los elementos <b>p</b> en la página.</p>

<p>El CSS se puede aplicar a documentos HTML de varias formas, incluyendo estilos en línea, incrustados y hojas de estilo externas. Los estilos en línea se aplican directamente al elemento HTML utilizando el atributo <b>style</b>. Los estilos incrustados se colocan en la sección <b>head</b> del documento HTML utilizando la etiqueta style. Las hojas de estilo externas se almacenan en archivos CSS separados y se vinculan al documento HTML utilizando la etiqueta <b>link</b>.</p>

<b><p>* Texto escrito con la ayuda de un traductor. Si encuentras un error, por favor avísanos *</p></b>
  
  <div className='ads-container'>  
  {/*  реклама  */}
</div>
    </div>
  )
}

export default EsHtml_3;