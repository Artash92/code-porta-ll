import React from 'react';

function EsJSEs5_6() {
  return (
    <div>
      <div className='ad-container'>  
          {/*  реклама  */}
        </div>
        
      <h3>Objeto global en JavaScript</h3>

<p>El objeto global en JavaScript es un objeto integrado que está disponible en todas partes del código. Proporciona propiedades y métodos que son utilizados por varias partes del lenguaje y también pueden ser extendidos con funcionalidad personalizada.</p>

<code>

<p>Algunas de las propiedades y métodos del objeto global en JavaScript incluyen:</p>

<p><span className='blue'>1.</span> Infinity - representa el valor infinito matemático</p>

<p><span className='chocolate'>Ejemplo:</span> console.log(Infinity);</p>

<p><span className='blue'>2.</span> NaN - representa el valor "Not a Number" (No es un número).</p>

<p><span className='chocolate'>Ejemplo:</span> console.log(NaN);</p>

<p><span className='blue'>3.</span> console - proporciona métodos para registrar información en la consola.</p>

<p><span className='chocolate'>Ejemplo:</span> console.log('¡Hola, mundo!');</p>

<p><span className='blue'>4.</span> parseInt() - analiza una cadena y devuelve un entero.</p>

<p><span className='chocolate'>Ejemplo:</span> console.log(parseInt('10'));</p>

<p><span className='blue'>5.</span> parseFloat() - analiza una cadena y devuelve un número de punto flotante.</p>

<p><span className='chocolate'>Ejemplo:</span> console.log(parseFloat('3.14'));</p>

<p><span className='blue'>6.</span> encodeURIComponent() - codifica un componente URI.</p>

<p><span className='blue'>7.</span> Date - proporciona métodos para trabajar con fechas y horas.</p>

<p><span className='chocolate'>Ejemplo:</span> console.log(new Date());</p>

<p><span className='blue'>8.</span> Math - proporciona funciones matemáticas y constantes.</p>

<p><span className='chocolate'>Ejemplo:</span> console.log(Math.PI);</p>

</code>

<p>Los métodos del objeto global pueden ser llamados desde cualquier parte del código, sin necesidad de crear una instancia del objeto. Sin embargo, se debe tener cuidado al extender el objeto global con métodos personalizados, ya que pueden entrar en conflicto potencialmente con métodos integrados u otros métodos personalizados.</p>

<p>Es importante tener en cuenta que en entornos de JavaScript modernos, el objeto global no siempre está disponible en todos los contextos, como en el código basado en módulos o en el modo estricto.</p>

<h3>Manipulación de cadenas en JavaScript ES5</h3>

<p>
En JavaScript ES5, una cadena es una secuencia de caracteres y puede ser manipulada utilizando varios métodos. Dos métodos para extraer subcadenas de una cadena son slice() y substring().
</p>

<p>
El método slice() extrae una sección de una cadena y la devuelve como una nueva cadena, sin modificar la cadena original. Toma dos parámetros: el índice de inicio y el índice de finalización (opcional). Si no se proporciona el índice de finalización, el método extraerá hasta el final de la cadena. Si el índice de inicio es negativo, cuenta desde el final de la cadena.
</p>

<p>
El método substring() es similar a slice(), pero no acepta índices negativos. Si el índice de inicio es mayor que el índice de finalización, los dos índices se intercambian para evitar un error.
</p>

<p>Aquí hay algunos ejemplos</p>

<p><span className='darkgreen'>// Obtener la subcadena "is"</span></p>

<code>
<p>str.slice(<span className='blue'>5</span>, <span className='blue'>7</span>); <span className='darkgreen'>//"is"</span></p>

<p>str.substring(<span className='blue'>5</span>,<span className='blue'>7</span>); <span className='darkgreen'>//"is"</span></p>
</code>

<p><span className='darkgreen'>// Obtener la subcadena "is"</span></p>

<code>
<p>{'console.log'}(str.slice(<span className='blue'>5</span>, <span className='blue'>7</span>)); <span className='darkgreen'>//"is"</span></p>

<p>{'console.log'}(str.substring(<span className='blue'>5</span>, <span className='blue'>7</span>)); <span className='darkgreen'>//"is"</span></p>

<p><span className='darkgreen'>// Obtener la subcadena "is my text"</span></p>

<p>{'console.log'}(str.slice(<span className='blue'>5</span>)); <span className='darkgreen'>//"is my text"</span></p>

<p>{'console.log'}(str.substring(<span className='blue'>5</span>)); <span className='darkgreen'>//"is my text"</span></p>
</code>

<p><span className='darkgreen'>// Obtener la subcadena " "</span></p>

<code>
<p>{'console.log'}(str.slice(<span className='blue'>7</span>, <span className='blue'>5</span>)); <span className='darkgreen'>//" "</span></p>

<p>{'console.log'}(str.substring(<span className='blue'>7</span>, <span className='blue'>5</span>)); <span className='darkgreen'>//"is"</span> </p>
</code>

<p><span className='darkgreen'>// Obtener la subcadena "my"</span></p>

<code>
<p>{'console.log'}(str.slice(-<span className='blue'>7</span>, -<span className='blue'>5</span>)); <span className='darkgreen'>//"my"</span></p>

<p>{'console.log'}(str.substring(<span className='blue'>7</span>,<span className='blue'>5</span>)); <span className='darkgreen'>//" "</span></p>
</code>

<p>
En los ejemplos anteriores, slice() y substring() se utilizan para extraer subcadenas de la variable str. El primer ejemplo extrae la subcadena "is", mientras que el segundo ejemplo extrae "is my text". Los tercer y cuarto ejemplos muestran cómo slice() y substring() manejan casos donde los índices están fuera de orden. Finalmente, el quinto ejemplo muestra cómo slice() puede ser usado con índices negativos para extraer una subcadena desde el final de la cadena.
</p>

<h3>El tema es "Búsqueda de cadenas" en JavaScript ES5.</h3>

<p>En JavaScript, puedes buscar una subcadena específica dentro de una cadena usando varios métodos. Aquí hay algunos métodos comúnmente utilizados:</p>

<p>1. El tema es "Búsqueda de cadenas" en JavaScript ES5.

En JavaScript, puedes buscar una subcadena específica dentro de una cadena usando varios métodos. Aquí hay algunos métodos comúnmente utilizados:

indexOf(subcadena, inicio): Este método busca una subcadena dentro de una cadena y devuelve el índice de la primera ocurrencia de la subcadena. También puedes especificar la posición de inicio de la búsqueda pasando un parámetro de inicio opcional. Si la subcadena no se encuentra, devuelve -1.</p>

<p><b>Ejemplo</b></p>

<code>
  
  <p><span className='blueviole'>var</span> <span className='blue'>mensaje</span> = <span className='red'>"¡Hola mundo!"</span>;</p>

  <p><span className='blueviole'>var</span> <span className='blue'>índice</span> = mensaje.indexOf(<span className='red'>"mundo"</span>);</p>

  <p>{'console.log(índice);'} <span className='darkgreen'>// 6</span></p>

</code>

<p>2. lastIndexOf(subcadena, fin): Este método funciona de la misma manera que indexOf, pero busca la última ocurrencia de la subcadena dentro de la cadena, buscando hacia atrás desde el final de la cadena. También puedes especificar la posición de finalización de la búsqueda pasando un parámetro de finalización opcional.</p>

<p><b>Ejemplo</b></p>

<code>
<p><span className='blueviole'>var</span><span className='blue'> mensaje</span> = <span className='red'>"¡Hola mundo, hola!"</span>;</p>

<p><span className='blueviole'>var</span> <span className='blue'>índice</span> = mensaje.lastIndexOf(<span className='red'>"hola"</span>);</p>

<p>{'console.log(índice);'}<span className='darkgreen'> // 13</span></p>
</code>

<p>Ten en cuenta que el caso de la subcadena importa al usar estos métodos. Por ejemplo, buscar "hola" cuando la cadena solo contiene "Hola" no encontrará la subcadena.</p>

<p>3.includes(subcadena): Este método comprueba si la subcadena dada está presente en la cadena o no, y devuelve un valor booleano que indica el resultado.</p>

<p><b>Ejemplo</b></p>

<code>
  <p><span className='blueviole'>var</span> <span className='blue'>encontrado</span> = mensaje.includes(<span className='red'>"mundo"</span>);</p>

  <p>{'console.log(encontrado);'} <span className='darkgreen'>// true</span></p>
</code>

<p>4. search(regex): Este método busca una expresión regular dentro de la cadena y devuelve el índice de la primera coincidencia. Si no hay coincidencia, devuelve -1.</p>

<p><b>Ejemplo</b></p>

<code>
  <p><span className='blueviole'>var</span> <span className='blue'>mensaje</span> = <span className='red'>"¡Hola mundo, hola!"</span>;</p>

  <p><span className='blueviole'>var</span> <span className='blue'>índice</span> = mensaje.search(<span className='red'>/hola/i</span>);<span className='darkgreen'>// la bandera "i" lo hace insensible a mayúsculas y minúsculas</span></p>

  <p>{'console.log(índice);'}<span className='darkgreen'> // 0</span></p>
</code>

<p>En tu ejemplo, la variable str contiene la cadena "Este es mi texto". Las siguientes líneas de código demuestran el uso de los métodos de búsqueda de cadenas descritos anteriormente:</p>

<code>
<p><span className='blueviole'>var</span> <span className='blue'>str</span> = <span className='red'>"Este es mi texto"</span>;</p>

<p>{'console.log'}(str.indexOf(<span className='red'>"es"</span>)); <span className='darkgreen'>//2</span></p>

<p>{'console.log'}(str.indexOf(<span className='red'>"es"</span>, <span className='blue'>3</span>));<span className='darkgreen'> //5</span></p>

<p>{'console.log'}(str.lastIndexOf(<span className='red'>"es"</span>)); <span className='darkgreen'>//5</span></p>

<p>{'console.log'} (str.lastIndexOf(<span className='red'>"es"</span>, <span className='blue'>4</span>)); <span className='darkgreen'>//2</span></p>

<p>{'console.log'}(str.indexOf(<span className='red'>"some"</span>)); <span className='darkgreen'>//-1</span></p>
</code>

<p>Estas líneas de código buscan la subcadena "es" y "some" dentro de la cadena str, y devuelven sus índices usando los métodos indexOf y lastIndexOf. El segundo parámetro de indexOf especifica la posición de inicio de la búsqueda, mientras que el segundo parámetro de lastIndexOf especifica la posición de finalización de la búsqueda.</p>

<h3>Expresiones regulares</h3>

<p>RegExp es un objeto integrado que proporciona una forma de crear expresiones regulares. Las expresiones regulares son patrones utilizados para hacer coincidir combinaciones de caracteres en cadenas.</p>

<p><b>Aquí tienes un ejemplo de cómo crear un objeto de expresión regular usando la función constructora:</b></p>

<code>
<p> <span className='blueviole'>var</span> <span className='blue'>regex</span> = <span className='blueviole'>new</span> RegExp(<span className='red'>"some", "long"</span>);</p>
</code>

<p>Aquí, some es la bandera de la expresión regular, y long son banderas opcionales que modifican el comportamiento de la expresión regular.</p>

<p>Aquí tienes un ejemplo de cómo usar el método test() del objeto RegExp para comprobar si una cadena coincide con una expresión regular:</p>

<code>
<p><span className='blueviole'>var</span> <span className='blue'>str</span> = <span className='red'>"El rápido zorro marrón salta sobre el perro perezoso"</span>;</p>

<p><span className='blueviole'>var</span> <span className='blue'>regex </span>=<span className='red'> /zorro/i</span>;</p>

<p><span className='blueviole'>var</span> <span className='blue'>resultado</span> = regex.test(str);</p>

<p>{'console.log(resultado);'} <span className='darkgreen'>// true </span></p>
</code>

<p>En este ejemplo, /zorro/i es un patrón de expresión regular que coincide con la palabra "zorro" de manera insensible a mayúsculas y minúsculas. El método test() devuelve un valor booleano que indica si el patrón de expresión regular coincide o no con la cadena str.</p>

<p>Aquí tienes otro ejemplo de cómo usar el método match() del objeto String con una expresión regular para extraer valores coincidentes:</p>

<code>
<p><span className='blueviole'>var</span> <span className='blue'>str</span> = <span className='red'>"El rápido zorro marrón salta sobre el perro perezoso"</span>;</p>

<p><span className='blueviole'>var</span> <span className='blue'>regex </span>=<span className='red'> /zorro/i</span>;</p>

<p><span className='blueviole'>var</span><span className='blue'> resultado</span>  = str.match(regex);</p>

<p>{'console.log(resultado);'} <span className='darkgreen'> // ["zorro"]</span></p>
</code>

<p>En este ejemplo, el método match() devuelve una matriz que contiene la(s) subcadena(s) coincidente(s) si el patrón de expresión regular se encuentra en la cadena.</p>

<p><b>Y aquí tienes algunos caracteres especiales comúnmente utilizados en expresiones regulares:</b></p>

<p>.- Coincide con cualquier carácter excepto un salto de línea \n</p>

<p>\w - Coincide con cualquier carácter de palabra ASCII [a-zA-Z0-9_]</p>

<p>\W - Coincide con cualquier carácter que no sea de palabra [^a-zA-Z0-9_]</p>

<p>\d - Coincide con cualquier dígito ASCII [0-9]</p>

<p>\D - Coincide con cualquier carácter que no sea un dígito [^0-9]</p>

<p>\s - Coincide con cualquier carácter de espacio en blanco Unicode</p>

<p>\S - Coincide con cualquier carácter que no sea de espacio en blanco</p>

<code>
  <p><span className='blueviole'>var</span> <span className='blue'>miCadena</span> = <span className='red'>"Texto increíble"</span>;</p>

  <p><span className='blueviole'>var</span> <span className='blue'>miExpReg</span> = <span className='red'>/[a-zA-Z0-9]/</span>;</p>

  <p><span className='blueviole'>var</span> <span className='blue'>resultado</span> = miExpReg.test(miCadena);</p>

  <p>{'console.log(resultado);'}<span className='darkgreen'> //true</span></p>
</code>

<p><b>^ - Coincide con el inicio de una cadena</b></p>

<p><b>$ - Coincide con el final de una cadena</b></p>

<p>Bandera:</p>

<p><b>i - ignoreCase</b></p>

<code>
  <p><span className='blueviole'>var</span><span className='blue'> exp</span> = <span className='red'>/a/i</span> <span className='darkgreen'>// busca tanto letras mayúsculas como minúsculas</span></p> 
</code>

<p><b>g - global</b></p>

<p><b>Busca todas las ocurrencias de un patrón en una cadena</b></p>

<code>
<p><span className='blueviole'>var</span> <span className='blue'>str</span> = <span className='red'>"Borobudur"</span>;</p>

<p><span className='blueviole'>var</span> <span className='blue'>patrón</span> = <span className='red'>/[ou]/g</span>;</p>

<p>{'console.log'}(str.replace(patrón, <span className='red'>"a"</span>)); <span className='darkgreen'>//"Barabadar"";</span></p>
</code>

<p><b>m - multiline</b></p>

<p><b>Busca todas las ocurrencias de un patrón en todas las líneas de una cadena</b></p>

<code>
<p><span className='blueviole'>var</span> <span className='blue'>str</span> = <span className='red'>"Algo de texto Y algo más Y aún Esto es el final"</span>;</p>

<p><span className='blueviole'>var</span> <span className='blue'> patrón</span> = <span className='red'>/\w+\s/g</span>;</p>

<p>{'console.log(str.match(patrón));'} <span className='darkgreen'>//  [ "Algo ", "texto ", "Y ", "algo ", "más ", "Y ", "aún ", "Esto ", "es ", "el ", "final"]</span></p>
</code>

<p>Aquí, definimos una cadena str con el valor "este es mi texto". Luego, definimos un patrón de expresión regular que coincide con el inicio de la cadena (^) seguido de una o más letras minúsculas ([a-z]+) separadas por espacios, y el final de la cadena ($). Usamos paréntesis para capturar cada grupo de letras como un subpatrón separado.</p>

<p>Finalmente, usamos el método replace() en la cadena, pasando el patrón y una cadena de reemplazo que usa el símbolo $ para hacer referencia a los subpatrones capturados en el orden en que se definieron. En este caso, intercambiamos el primer y segundo grupos de letras, dejando los terceros y cuartos grupos en su lugar.</p>

<p>Aquí tienes el código:</p>

<code>
  <p><span className='blueviole'>var</span> <span className='blue'>str</span> = <span className='red'>"este es mi texto"</span>;</p>

  <p><span className='blueviole'>var</span> <span className='blue'>patrón</span> = <span className='red'>/^([a-z]+) ([a-z]+) ([a-z]+) ([a-z]+)$/</span> ;</p>

  <p><span className='blueviole'>var</span> <span className='blue'>res</span> = str.replace(patrón, <span className='red'>"$2 $1 $3 $4"</span>);</p>

  <p>{'console.log(res);'} <span className='darkgreen'>// "es este mi texto"</span> </p>
</code>

    <b><p>* Texto escrito con la ayuda de un traductor. Si encuentras un error, por favor avísanos *</p></b>
    
    <div className='ads-container'>  
      {/*  реклама  */}
      </div>
    </div>
  )
}

export default EsJSEs5_6;