import React from 'react';

function EsJSEs5_1() {
  return (
    <div>
      <div className='ad-container'>  
          {/*  реклама  */}
        </div> 

        <h1>JavaScript</h1>
<p>
  JavaScript fue creado en 1995 por Brendan Eich mientras trabajaba en Netscape Communications Corporation.
  El lenguaje originalmente se llamaba Mocha, pero luego fue renombrado a LiveScript antes de finalmente ser nombrado JavaScript.
  El cambio de nombre se debió principalmente a razones de marketing y para capitalizar la popularidad de Java en ese momento.
  Brendan Eich es un tecnólogo y programador estadounidense que ha trabajado para empresas como Mozilla, Netscape y Brave Software.
  Se le considera el creador de JavaScript y ha realizado contribuciones significativas a otros lenguajes de programación también.
</p>

<h3>ECMAScript define 7 tipos de datos:</h3>

<code>
  <ul>
    <li><span className='blue'>Number:</span> representa valores numéricos, incluyendo enteros y números de punto flotante. Ejemplo: <span className='blue'>1, 3.14, -42</span>.</li>

    <li><span className='blue'>String:</span> representa datos de texto, encerrados entre comillas simples o dobles. Ejemplos: <span className='red'>"hola", 'mundo', "123"</span>.</li>

    <li><span className='blue'>Boolean:</span> representa una entidad lógica y solo puede tener dos valores: true o false. Ejemplo: <span className='blue'> true, false</span>.</li>

    <li><span className='blue'>Undefined:</span> representa una variable que ha sido declarada pero no ha sido asignada un valor. Ejemplo: <span className='blueviole'>var</span> <span className='blue'>x</span>; console.log(x); <span className='darkgreen'>// Salida: undefined</span></li>

    <li><span className='blue'>Null:</span> representa la ausencia intencional de cualquier valor de objeto. Ejemplo: <span className='blueviole'>var</span> <span className='blue'>x</span> = <span className='blueviole'>null</span>; console.log(x); <span className='darkgreen'>// Salida: null</span></li>

    <li><span className='blue'>Symbol:</span> representa un identificador único que no está expuesto al código que lo llama. Ejemplo: <span className='blueviole'>const</span> <span className='blue'>sym1</span> = Symbol(<span className='red'>'foo'</span>);</li>

    <li><span className='blue'>Object:</span> representa una colección de datos y/o funcionalidades relacionadas. Ejemplo: <span className='blueviole'>var</span> <span className='blue'>obj</span> = {'{'} nombre: <span className='red'>"John"</span>, edad: <span className='blue'>30</span> {'}'}; <span className='blueviole'>var</span> <span className='blue'>arr</span> = [<span className='blue'>1, 2, 3</span>];</li>
  </ul>
</code>

<h2>Tipo de datos booleano</h2>

<p>El tipo de datos booleano tiene solo dos valores: verdadero y falso. Se usa comúnmente en operaciones de comparación utilizando los siguientes operadores:</p>


<code>
  <ul>
    <li>=== y ==</li>
    <li>{'>'} y {'<='}</li>
    <li>{'>='} y {'<='}</li>
  </ul>
</code>

<p>Ejemplos:</p>

<code>
  <ul>
    <li><span className='blue'>10</span> {'<'} <span className='blue'>16</span> == <span className='blue'>true</span></li>

    <li><span className='blue'>10</span> {'>'} <span className='blue'>16</span> == <span className='blue'>false</span></li>
  </ul>
</code>

<h2>Operadores booleanos</h2>

<code>
  <ul>
    <li>NOT (!)</li>
    <li>AND (&&)</li>
    <li>OR (||)</li>
  </ul>
</code>

<p>Al evaluar una condición, se utiliza el tipo de datos booleano. Los siguientes valores se convierten en falso: 0 y una cadena vacía. Los siguientes valores se convierten en verdadero: todos los demás números y cadenas no vacías.</p>

<h3>Ejemplos:</h3>

<code>
  <p><span className='blue'>5</span> && <span className='blue'>6</span> <span className='darkgreen'>// 6</span></p>

  <p><span className='blue'>6</span> && <span className='blue'>0 </span> <span className='darkgreen'>// 0</span></p>

  <p><span className='blue'>true</span> && <span className='blue'>false</span> <span className='darkgreen'>// false</span></p>

  <p><span className='blue'>5</span> || <span className='blue'>6</span> <span className='darkgreen'>// 5</span></p>

  <p><span className='blue'>0</span> || <span className='blue'>false</span> <span className='darkgreen'>// false</span></p>

  <p><span className='blue'>false</span> || <span className='blue'>true</span> <span className='darkgreen'>// true</span></p>

  <p><span className='blue'>6</span> || <span className='blue'>7</span> <span className='darkgreen'> // 6</span></p>

  <p><span className='blue'>0</span> || <span className='blue'>false</span> <span className='darkgreen'> // false</span></p>

  <p><span className='blue'>false</span> || <span className='blue'>true</span> <span className='darkgreen'>// true</span></p>

  <p><span className='blue'>50</span> && <span className='blue'>6</span> <span className='darkgreen'>// 6</span></p>

  <p><span className='blue'>10</span> && <span className='blue'>0</span> <span className='darkgreen'>// 0</span></p>

  <p><span className='red'>'Hello'</span> && <span className='red'>'World'</span> <span className='darkgreen'>// "World"</span></p>

  <p><span className='red'>'Hello'</span> && <span className='red'>''</span> <span className='darkgreen'>// ''</span></p>

  <p>!<span className='blue'>true</span> <span className='darkgreen'>// false</span></p>

</code>

<h3>Expresiones y Sentencias</h3>

<p>Estos son ejemplos de expresiones y operadores en JavaScript. Una expresión es una combinación de valores, variables, operadores, que pueden evaluarse a algún valor. Las expresiones se pueden usar en otras expresiones o en sentencias.</p>

<p>Los operadores como *, +, etc., se usan para crear expresiones. Las primeras tres líneas muestran ejemplos de expresiones con diferentes tipos de datos: números, cadenas y valores booleanos.</p>

<p>Los operadores se pueden usar en forma de expresiones de operadores, que son parte de los operadores. Las siguientes tres líneas muestran ejemplos de expresiones de operadores, que son operadores.</p>

<p>Cada expresión de operador termina con un operador (;), lo que la convierte en una sentencia.</p>

<ul>
  <li><strong className='blue'>Expresión</strong>: <span className='blue'>8</span> * <span className='blue'>3</span> + <span className='blue'>2</span> </li>
    
  <li><strong className='blue'>Expresión</strong>: <span className='red'>"¡Hola, aquí!"</span></li>
    
  <li><strong className='blue'>Expresión</strong>: <span className='blue'>false</span></li>
    
  <li><strong className='blue'>Sentencia</strong>: <span className='blue'>8</span> * <span className='blue'>3</span> + <span className='blue'>2</span> ;</li>
    
  <li><strong className='blue'>Sentencia</strong>: <span className='red'>"¡Hola, aquí!"</span>;</li>
    
  <li><strong className='blue'>Sentencia</strong>: <span className='blue'>false</span>;</li>
</ul>

<h2>Valores y Funciones Especiales de JavaScript</h2>

<h5>NaN</h5>

<p>NaN significa "No es un Número" y es un valor especial en JavaScript que representa un valor no definido o no representable que resulta de una operación aritmética. Por ejemplo, dividir cero entre cero resultará en NaN.</p>

<h5>typeof</h5>

<p>typeof es un operador unario en JavaScript que devuelve una cadena que indica el tipo de datos de un operando. Por ejemplo, typeof "hola" devolverá "cadena" y typeof 42 devolverá "número".</p>

<h5>isNaN()</h5>

<p>isNaN() es una función global en JavaScript que devuelve true si el argumento es NaN (No es un Número), y false en caso contrario. Por ejemplo, isNaN("hola") devolverá true, y isNaN(42) devolverá false.</p>

<h5>isFinite()</h5>

<p>isFinite() es una función global en JavaScript que devuelve true si el argumento es un número finito, y false en caso contrario. Por ejemplo, isFinite(42) devolverá true, y isFinite(Infinity) devolverá false.</p>

<h2>Variables</h2>

<ul>
  <li>Declaración de variables (a-A, $, _)</li>

  <ul>
    <li><code><span className='blueviole'>var</span> <span className='blue'>nombreEstudiante</span>;</code></li>
    <li><code><span className='blueviole'>var</span> <span className='blue'>nombre, apellido, edad</span>;</code></li>
  </ul>

  <li>Declaración y asignación de variables</li>

  <ul>
    <li><code><span className='blueviole'>var</span> <span className='blue'>modeloCoche</span> = <span className='red'>"Tesla"</span>;</code></li>
    <li><code><span className='blueviole'>var</span> <span className='blue'>modeloCoche</span> = <span className='red'>"Tesla"</span>, <span className='blue'>año</span> = <span className='blue'>2022</span>, <span className='blue'>esElectrico</span> = <span className='blue'>true</span>;</code></li>
  </ul>

  <li>Uso de variables</li>

  <ul>
    <li><code><span className='blueviole'>var</span> <span className='blue'>cantidad</span> = <span className='blue'>5</span>;</code></li>
    <li><code>cantidad = cantidad + <span className='blue'>3</span>;</code></li>
    <li><code>cantidad += <span className='blue'>2</span>;</code></li>
  </ul>
</ul>

<h2>Nulo y Sin Definir</h2>

<ul>
  <li>Null es un valor especial en JavaScript que representa la ausencia de cualquier valor de objeto. Es un valor primitivo y representa un valor no deliberado o vacío. A menudo se usa para indicar que una variable no tiene valor o que una función no devuelve ningún valor.</li>
  <li>Undefined es un valor que una variable puede tener si no se le ha asignado un valor o si se le ha asignado explícitamente el valor undefined. También es un valor primitivo en JavaScript.</li>
  <li>El operador typeof se usa para determinar el tipo de un valor. Si el valor es indefinido, typeof devuelve la cadena "indefinido". Si el valor es nulo, typeof devuelve la cadena "objeto". Este es un error conocido en JavaScript que ha existido desde que se creó el lenguaje.</li>
  <li>Null y undefined a menudo se confunden entre sí porque ambos representan la ausencia de un valor. Sin embargo, no son lo mismo. null representa una ausencia deliberada de un valor, mientras que undefined representa una ausencia accidental de un valor.</li>
  <li>El operador == en JavaScript realiza coerción de tipo, lo que significa que intentará convertir valores de diferentes tipos a un tipo común antes de compararlos. Al comparar null e undefined con ==, el resultado es true porque ambos se consideran valores falsos.</li>
  <li>El operador === en JavaScript realiza una comparación estricta que no realiza coerción de tipo. Al comparar null e undefined con ===, el resultado es false porque no son el mismo tipo de valor.</li>
  <li>Las funciones parseInt, parseFloat y Number se utilizan para convertir una cadena en un número. Cuando se pasa el valor nulo, las tres funciones devuelven NaN, que significa "No es un Número". Esto se debe a que null no es un número válido y no se puede convertir en un número.</li>
</ul>

<b><p>* Texto escrito con la ayuda de un traductor. Si encuentras un error, por favor avísanos *</p></b>
    <div className='ads-container'>  
  {/*  реклама  */}
</div>
    </div>
  )
}

export default EsJSEs5_1;