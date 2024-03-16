import React from 'react';

function EsJSEs5_5() {
  return (
    <div>
      <div className='ad-container'>  
          {/*  реклама  */}
        </div>
      
      <h1>Array</h1>
      
      <p>En JavaScript, un array es una estructura de datos que te permite almacenar múltiples valores en una sola variable. Un array se declara usando corchetes, y sus elementos están separados por comas.</p>
      
      <p><b>Ejemplo</b></p>

 <p className='darkgreen'>// Un array de números</p>    

 <code>
  <p><span className='blue'>var </span><span className='blue'> numeros</span> = [<span className='blue'>1, 2, 3, 4, 5</span>];</p>

  <p className='darkgreen'>// Un array de cadenas de texto</p>

  <p><span className='blueviole'>var</span> <span className='blue'>frutas</span> = [<span className='red'>"manzana", "plátano", "naranja"</span>];</p>
 </code>
 

<p><b>Longitud del array</b></p>

<p>La propiedad length de un array devuelve el número de elementos en el array.</p>

<p><b>Ejemplo</b></p>
 
<code>
  <p><span className='blueviole'>var</span> <span className='blue'>numeros</span> = [<span className='blue'>1, 2, 3, 4, 5</span>];</p>

  <p>{'console.log(numeros.length);'} <span className='darkgreen'>// Resultado: 5</span></p>  
</code>
 

<p><b>Métodos del array</b></p>

<p>Los arrays en JavaScript tienen métodos incorporados que se pueden usar para manipular los datos del array. Algunos métodos de array comúnmente utilizados son:

</p>

<code>

<p><b>push()</b>: agrega uno o más elementos al final de un array</p>

<p><b>pop()</b>: elimina el último elemento de un array</p>

<p><b>shift()</b>: elimina el primer elemento de un array</p>

<p><b>unshift()</b>: agrega uno o más elementos al principio de un array</p>

<p><b>splice()</b>: agrega o elimina elementos de un array en un índice especificado</p>

<p><b>slice()</b>: devuelve un nuevo array que contiene una parte de un array existente</p>

<p><b>join()</b>: une todos los elementos de un array en una cadena de texto</p>

<p><b>concat()</b>: concatena dos o más arrays </p>

</code>

<p><b>Ejemplo:</b></p>

<code>
  <p><span className='blueviole'>var</span> <span className='blue'>numeros</span> = [<span className='blue'>1, 2, 3, 4, 5</span>];</p>

  <p>numeros.push(<span className='blue'>6</span>); <span className='darkgreen'>// agrega 6 al final del array</span></p>

  <p>{'console.log(numeros);'} <span className='darkgreen'>// Resultado: [1, 2, 3, 4, 5, 6]</span></p>
</code>

 

<code>
  <p><span className='blueviole'>var</span> <span className='blue'>frutas</span> = [<span className='red'>"manzana", "plátano", "naranja"</span>];</p>

  <p>frutas.pop(); <span className='darkgreen'>// elimina el último elemento del array</span></p>

  <p>{'console.log(frutas);'} <span className='darkgreen'>// Resultado: ["manzana", "plátano"]</span></p>
</code>

<code>
  <p><span className='blueviole'>var</span> <span className='blue'>colores</span> = [<span className='red'>"rojo", "verde", "azul"</span>];</p>

  <p>colores.shift(); <span className='darkgreen'> // elimina el primer elemento del array</span></p>

  <p>{'console.log(colores);'} <span className='darkgreen'>// Resultado: ["verde", "azul"]</span></p>
</code>

 

<code>
  <p><span className='blueviole'>var</span> <span className='blue'>autos</span> = [<span className='red'>"BMW","Audi","Mercedes"</span>];</p>

  <p>autos.unshift(<span className='red'>"Toyota","Honda"</span>); <span className='darkgreen'>// agrega dos elementos al principio del array</span></p>

  <p>{'console.log(autos);'} <span className='darkgreen'>//Resultado:["Toyota","Honda","BMW","Audi","Mercedes"]</span></p>
</code>


<code>
  <p><span className='blueviole'>var</span> <span className='blue'>animales</span> = [<span className='red'>"perro","gato","elefante","león"</span>];</p>

  <p>animales.splice(<span className='blue'>2</span>,<span className='blue'>0</span>,<span className='red'>"oso"</span>,<span className='red'>"cebra"</span>); <span className='darkgreen'>// agrega "oso" y "cebra" en el índice 2</span></p>

  <p>{'console.log(animales);'} <span className='darkgreen'>// Resultado: ["perro","gato","oso","cebra","elefante","león"]</span></p>
</code>

<code>
  <p><span className='blueviole'>var</span> <span className='blue'>letras</span> = [<span className='red'>"a", "b", "c", "d", "e"</span>];</p>

  <p><span className='blueviole'>var</span> <span className='blue'>corte1</span> = letras.slice(<span className='blue'>0, 2</span>); <span className='darkgreen'>// devuelve ["a", "b"]</span></p>

  <p><span className='blueviole'>var</span> <span className='blue'>corte2</span> = letras.slice(<span className='blue'>2</span>); <span className='darkgreen'>// devuelve ["c", "d", "e"]</span></p>

  <p>{'console.log(corte1);'}</p>

  <p>{'console.log(corte2);'}</p>
</code>

<code>
  <p><span className='blueviole'>var</span> <span className='blue'>frutas</span> = [<span className='red'>"manzana", "plátano", "naranja"</span>];</p>

  <p><span className='blueviole'>var</span> <span className='blue'>cadenaFrutas</span> = frutas.join(<span className='red'>", "</span>); <span className='darkgreen'>// une los elementos del array con una coma</span></p>

  <p>{'console.log(cadenaFrutas);'} <span className='darkgreen'>// Resultado: "manzana,plátano,naranja"</span></p>
</code>

<code>
  <p><span className='blueviole'>var</span> <span className='blue'>nums1</span> = [<span className='blue'>1, 2, 3</span>];</p>

  <p><span className='blueviole'>var</span> <span className='blue'>nums2</span> = [<span className='blue'>4, 5, 6</span>];</p>

  <p><span className='blueviole'>var</span> <span className='blue'>nums3</span> = nums1.concat(nums2); <span className='darkgreen'>// concatena nums1 y nums2</span></p>

  <p>{'console.log(nums3);'} <span className='darkgreen'>// Resultado: [1, 2, 3, 4, 5, 6]</span></p>
</code>

<p><b>Métodos de Arrays | Combinación de Arrays</b></p>

<p>Puedes combinar dos o más arrays en JavaScript usando el método concat(). Este método devuelve un nuevo array que contiene todos los elementos de los arrays originales.</p>

<h3>forEach y map</h3>

<p><b>forEach</b> se utiliza para iterar sobre cada elemento de un array y realizar una función en cada elemento. Toma una función como argumento y pasa cada elemento del array como un argumento a esa función.</p>

<p>Aquí tienes un ejemplo de uso de forEach para imprimir cada elemento de un array:</p>
 
<code>
  <p><span className='blueviole'>var</span> <span className='blue'>arr</span> = [<span className='blue'>1, 2, 3, 4, 5</span>];</p>

  <p>arr.forEach{'('}<span className='blueviole'>function</span>(<span className='blue'>element</span>) {'{'}</p>

  <p>{'console.log(element);'}</p>

  <p>{' });'}</p>
</code>
 
<p>Esto imprimirá:</p>

<code>
  <p className='blue'>1</p>

  <p className='blue'>2</p>

  <p className='blue'>3</p>

  <p className='blue'>4</p>

  <p className='blue'>5</p>
</code>

<p>
map, por otro lado, se utiliza para crear un nuevo array con los resultados de llamar a una función en cada elemento del array original. También toma una función como argumento y pasa cada elemento del array como un argumento a esa función. La función debe 
devolver un nuevo valor para ser agregado al nuevo array.
</p>
<p>
Aquí tienes un ejemplo de uso de map para crear un nuevo array con cada elemento del array original duplicado:
</p>

<code>
  <p><span className='blueviole'>var</span> <span className='blue'>arr</span> = [<span className='blue'>1, 2, 3, 4, 5</span>];</p>

  <p><span className='blueviole'>var</span> <span className='blue'>doubledArr</span> = arr.map{'('}<span className='blueviole'>function</span>(<span className='blue'>element</span>) {'{'}</p>

 <p><span className='blueviole'>return</span> element * <span className='blue'>2</span>;</p>

 <p>{'});'}</p>

 <p>{'console.log(doubledArr);'}</p>
</code>
   
<p>Esto imprimirá</p>

<code><p className='blue'>[2, 4, 6, 8, 10 ]</p></code>

<p>En resumen, forEach se utiliza para realizar una operación en cada elemento de un array, mientras que map se utiliza para crear un nuevo array con los resultados de llamar a una función en cada elemento del array original.</p>

<h3>Método apply</h3>

<p>En JavaScript, el método apply() se utiliza para llamar a una función con un valor this dado y argumentos proporcionados como un array (o un objeto similar a un array).</p>

<p>La sintaxis para usar el método apply() es:</p>
 
  <code>
  <p>{'functionName.apply(thisValue, [argumentsArray]) '}</p>
  </code>
 
<p><b>Donde</b></p>

<p>functionName es el nombre de la función que deseas llamar.</p>

<p>thisValue es el valor que deseas usar como el valor this dentro de la función. Este parámetro es opcional. Si lo omites, se usará el objeto global.</p>

<p>argumentsArray es un array o un objeto similar a un array que contiene los argumentos que deseas pasar a la función. Este parámetro también es opcional. Si no necesitas pasar ningún argumento, puedes omitirlo.</p>

<p>Aquí tienes un ejemplo de uso del método apply() con un array:</p>

  <code>
    <p><span className='blueviole'>var</span> <span className='blue'>numbers</span> = [<span className='blue'>1, 2, 3, 4, 5</span>];</p>

    <p><span className='blueviole'>function</span> <span className='blue'>sumArray</span>() {'{'}</p>

    <p><span className='blueviole'>var</span> <span className='blue'>sum</span> = <span className='blue'>0</span>;</p>

    <p><span className='blueviole'>for</span> (<span className='blueviole'>var</span> <span className='blue'>i</span> = <span className='blue'>0</span>; i {'<'} <span className='blueviole'>this</span>.length; i++) {'{'}</p>

    <p>sum += <span className='blueviole'>this</span>[i];</p>

    <p>{'}'}</p>

    <p><span className='blueviole'>return</span> sum;</p>

    <p>{'}'}</p>

    <p><span className='blueviole'>var</span> <span className='blue'>result</span> = sumArray.apply(numbers);</p>

    <p>{'console.log(result);'} <span className='darkgreen'>// Resultado: 15</span></p>

    <p>{''}</p>
  </code>
 
<p>En este ejemplo, tenemos un array de números y una función sumArray() que calcula la suma de todos los elementos en un array. Llamamos al método apply() en la función sumArray() con el array de números como el valor this. El método apply() pasa el array como el valor this y la función sumArray() calcula 
  la suma de todos los elementos en el array y la devuelve.</p>
  
  <p>Observa que el método apply() es similar al método call(). La única diferencia es que el método call() acepta los argumentos como una lista separada por comas, mientras que el método apply() acepta los argumentos como un array.</p>
  
  <h3>Función Autoinvocada</h3>
  
  <p>Una función autoinvocada es una función JavaScript que se ejecuta automáticamente cuando se define. También se conoce como una expresión de función invocada inmediatamente (IIFE). Esta función está envuelta entre paréntesis y luego se llama inmediatamente usando los paréntesis de apertura y cierre.</p>
  
  <p>Aquí tienes un ejemplo de una función autoinvocada:</p>
 
  <code>
    <p>{'('}<span className='blueviole'>function</span>() {'{'}</p>

    <p>{'console.log'}(<span className='red'>"¡Hola, Mundo!"</span>);</p>

    <p>{' })();'}</p>
  </code>
  
<p>En este ejemplo, la función se define y luego se llama inmediatamente usando los paréntesis de apertura y cierre. Esto imprimirá "¡Hola, Mundo!" en la consola.</p>

<p>Las funciones autoinvocadas se utilizan comúnmente para crear un ámbito privado en el que se pueden definir variables y funciones sin contaminar el espacio de nombres global. Aquí tienes un ejemplo:</p>
 
<code>
  <p>{'('}<span className='blueviole'>function</span>() {'{'}</p>

  <p><span className='blueviole'>var</span> <span className='blue'>x</span> = <span className='blue'>10</span>;</p>

  <p><span className='blueviole'>function</span> <span className='blue'>foo</span>() {'{'}</p>

  <p>{'console.log(x);'}</p>

  <p>{'}'}</p>

  <p>foo(); <span className='darkgreen'>// Imprime 10</span></p>

  <p>{'})();'}</p>
</code>

<p>En este ejemplo, las variables x y la función foo se definen dentro de la función autoinvocada. No son accesibles desde fuera de la función, lo que ayuda a prevenir conflictos de nombres con otro código.</p>

<p>Las funciones autoinvocadas también pueden tomar argumentos, como las funciones regulares. Aquí tienes un ejemplo:</p>
 
<code>
  <p>{'('}<span className='blueviole'>function</span>(<span className='blue'>x, y</span>) {'{'}</p>

  <p>{'console.log'}(x + y);</p>

  <p>{'})'}(10, 20); <span className='darkgreen'>// Imprime 30</span></p>
</code>
 
<p>En este ejemplo, la función autoinvocada toma dos argumentos (x e y) y muestra su suma en la consola.</p>

<p>Las funciones autoinvocadas son una herramienta poderosa en JavaScript para crear ámbitos privados, prevenir conflictos de nombres y administrar variables globales.</p>


    <b><p>* Texto escrito con la ayuda de un traductor. Si encuentras un error, por favor avísanos *</p></b>
    
    <div className='ads-container'>  
      {/*  реклама  */}
      </div>
    </div>
  )
}

export default EsJSEs5_5;