import React from 'react';

function EsJavaScript6() {
  return (
    <div>
      <div className='ad-container'>  
          {/*  реклама  */}
        </div>

        <h1 className='hy'>JavaScript ES6 (ECMAScript 2015) es la sexta versión de JavaScript que introdujo nuevas características y mejoras de sintaxis al lenguaje. Aquí hay algunas características clave de ES6:</h1>

<p>1 . <b className='blueviole'>let </b>y <b className='blueviole'>const</b>: Estas son nuevas declaraciones de variables que reemplazan la antigua palabra clave var. Proporcionan mejores reglas de ámbito y ayudan a evitar errores comunes que pueden ocurrir con <b className='blueviole'>var</b>.</p>

<p>2. Funciones de flecha: Las funciones de flecha proporcionan una sintaxis más corta para escribir expresiones de funciones. También vinculan el valor de this léxicamente, lo que facilita razonar sobre el ámbito de la función.</p>

<p>3. Literales de plantilla: Esta característica proporciona una forma de incrustar expresiones dentro de cadenas usando acentos graves en lugar de comillas. Facilita la creación de cadenas con contenido dinámico.</p>

<p>4. Operador de propagación: El operador de propagación está representado por tres puntos (...). Permite expandir un iterable como una expresión de matriz o cadena en lugares donde se esperan cero o más argumentos (para llamadas de función) o elementos (para literales de matriz).</p>

<p>5. Desestructuración: La desestructuración proporciona una forma de extraer datos de matrices y objetos en variables separadas usando una sintaxis abreviada.</p>

<p>6. Clases: ES6 introdujo una nueva sintaxis de clase que proporciona una forma más simple e intuitiva de crear objetos y definir su comportamiento.</p>

<p>7. Módulos: Los módulos son una forma de organizar el código en archivos separados y autocontenidos que pueden importarse y exportarse fácilmente según sea necesario. Esto permite un desarrollo y mantenimiento más eficientes de aplicaciones grandes. ES6 introdujo una sintaxis de módulo estandarizada usando las palabras clave import y export, lo que facilita compartir y reutilizar código en varios archivos y proyectos.</p>

<p>8. Clases: ES6 introdujo una nueva sintaxis para crear clases, que permite la programación orientada a objetos en JavaScript. Las clases se pueden usar para crear objetos con propiedades y métodos, y también pueden heredar de otras clases. Esta sintaxis facilita la escritura y el mantenimiento de código complejo, y puede mejorar la legibilidad y reutilización de su código.</p>

<p>9. Promesas: Las promesas son una forma de manejar operaciones asíncronas en JavaScript. Proporcionan una forma estandarizada de manejar el resultado de una operación asíncrona, ya sea resolviendo o rechazando un valor. Las promesas se pueden encadenar y combinar con otras funciones como async/await para crear flujos de trabajo asíncronos más complejos y potentes.</p>

<p>Estas son solo algunas de las muchas características introducidas en ES6. Aprender y usar estas características puede mejorar considerablemente su código JavaScript y hacer que su proceso de desarrollo sea más eficiente y efectivo.</p>

<p><b>Variables de ES6</b></p>

<code>
  <p><span className='blueviole'>const</span> <span className='blue'>num</span> = <span className='blue1'>10</span>; </p>

  <p>{'console'}.<span className='blue'>log</span>(num);<span className='green'> // 10</span></p>

  <p>{'{'}</p>

  <p><span className='blueviole'>const</span> <span className='blue'>num2</span> = <span className='blue1'>20</span>;</p>

  <p>{'console'}.<span className='blue'>log</span>(num2); <span className='green'>// 20</span> </p>

  <p>{'}'}</p>

  <p><span className='green'>// num2 is not defined</span></p>

  <p>{'console'}.<span className='blue'>log</span>(num); <span className='green'>// 10</span></p>
</code>

<p>Este código está utilizando variables de ES6. La primera línea crea una variable constante llamada "num" y le asigna el valor 10. La segunda línea inicia un bloque de código usando llaves, que es una nueva característica en ES6.</p>

<p>Dentro de este bloque, se declara una nueva variable llamada "num2" usando la palabra clave "const" y se le asigna el valor 20. Esta variable solo es accesible dentro del bloque porque se declaró usando la palabra clave "const", que crea una variable con ámbito de bloque. La tercera línea imprime el valor de "num2" en la consola, que será 20.</p>

<p>Después del bloque, se llama a otra declaración de console.log, pero esta vez imprime el valor de la variable "num", que está fuera del bloque y, por lo tanto, es accesible. Finalmente, el código intenta imprimir el valor de "num2", pero como se declaró dentro del bloque y no es accesible fuera de él, ocurrirá un error que dice que "num2 no está definido".</p>

<p><b>Variables de ES6</b></p>

<code>
  <p><span className='blueviole'>const</span> <span className='blue'>name</span> = <span className='red'>"Leo"</span>;</p>

  <p><span className='blueviole'>const</span> <span className='blue'>name</span> = <span className='red'>"Kevin"</span>; <span className='green'>//El identificador (name) ya ha sido declarado</span></p>

  <p><span className='blueviole'>const</span> <span className='blue'>name</span> = <span className='red'>"Leo"</span>;</p>

  <p><span className='blueviole'>if</span> (<span className='blue1'>true</span>) {'{'}</p>

  <p><span className='blueviole'>const</span> <span className='blue'>name</span> = <span className='red'>"Mike"</span>;</p>

  <p>{'console'}.<span className='blue'>log</span>(name); <span className='green'>// Mike</span></p>

  <p>{'}'}</p>

  <p>{'console'}.<span className='blue'>log</span>(name); <span className='green'>// Leo</span></p>
</code>

<p>Este código declara una variable constante "name" y luego intenta declararla nuevamente con un valor diferente, lo que resulta en un error "El identificador 'name' ya ha sido declarado".</p>

<p>Luego, el código vuelve a declarar "name" como "Leo" y crea un ámbito de bloque con una instrucción if. Dentro del bloque, se declara una nueva variable "name" con el valor "Mike", que luego se imprime en la consola. Fuera del bloque, la variable original "name" con el valor "Leo" todavía está en ámbito y se imprime en la consola.</p>

<p>Por lo tanto, la salida de este código es "El identificador 'name' ya ha sido declarado", seguido de "Mike" y "Leo".</p>

<p><b>Variables de ES6</b></p>

<code>
  <p><span className='blueviole'>if</span> (<span className='blue1'>true</span>) {'{'}</p>

  <p><span className='green'>// Zona muerta temporal</span></p>

  <p>{'console'}.<span className='blue'>log</span>(<span className='blueviole'>typeof</span> value); <span className='green'>//value is not defined</span></p>

  <p><span className='blueviole'>let</span> <span className='blue'>value</span> = <span className='blue1'>10</span>;</p>

  <p>{'} '}</p>

  <p>{'console'}.<span className='blue'>log</span>(<span className='blueviole'>typeof</span> value); <span className='green'>//undefined</span></p>
</code>

<p>La palabra clave <b>let</b> se utiliza para declarar la variable <b>value</b> dentro del bloque. Sin embargo, cuando se llama a <b>typeof value</b> dentro del bloque antes de la declaración de <b>value</b>, el motor de JavaScript arroja un ReferenceError porque la variable aún no está definida. Esto se conoce como la Zona Muerta Temporal, que se refiere al período de tiempo entre la creación de una variable y su declaración donde no se puede acceder. La declaración <b>console.log(typeof value)</b> fuera del bloque devuelve <b>undefined</b> porque <b>value</b> no está definido en el ámbito actual.</p>

<p>En el segundo bloque de código:</p>

<code>
  <p><span className='blueviole'>if</span>(<span className='blue1'>true</span>) {'{'}</p>

  <p><span className='blueviole'>let</span> <span className='blue'>value</span> = <span className='blue1'>10</span>;</p>

  <p>{'}'}</p>
</code>

<p>La variable <b>value</b> se declara y se le asigna un valor de <b>10 </b> dentro del bloque. Sin embargo, como el bloque no está en el ámbito global y <b>value</b> no se devuelve ni se asigna a una variable en el ámbito externo, el valor de <b>value</b> se pierde efectivamente una vez que el bloque termina de ejecutarse.</p>

<p><b>Variables de ES6</b> </p>

<code>
  <p><span className='blueviole'>for</span>(<span className='blueviole'>var</span> <span className='blue'>i</span> = <span className='blue1'>0</span>; i {'<'} <span className='blue1'>5</span>; i++) {'{'}</p>

  <p><span className='green'>// Código aquí</span></p>

  <p>{'}'}</p>

  <p>{'console'}.<span className='blue'>log</span>(i); <span className='green'>// 5</span> </p>

  <hr/>

  <p><span className='blueviole'>for</span>(<span className='blueviole'>let</span> <span className='blue'>i</span> = <span className='blue1'>0</span>; i {'<'} <span className='blue1'>5</span>; i++) {'{'}</p>

  <p><span className='green'>// Código aquí</span></p>

  <p>{'}'}</p>

  <p>{'console'}.<span className='blue'>log</span>(i); <span className='green'>// i is not defined</span> </p>
</code>

<p>Este código demuestra la diferencia en el ámbito de las variables entre usar var y let en un bucle for. En el primer ejemplo, la variable i se declara usando var, que tiene un ámbito de función. Esto significa que la variable existe fuera del bucle for, por lo que el valor de i es 5 cuando se imprime en la consola.</p>

<p>En el segundo ejemplo, i se declara usando let, que tiene un ámbito de bloque. Esto significa que la variable solo existe dentro del bloque del bucle for, por lo que no es accesible fuera del bucle. Por lo tanto, cuando se imprime i en la consola fuera del bucle, arroja un error de referencia que dice que i no está definido.</p>

<p><b>Operador de propagación de ES6</b></p>

<p>El operador de propagación es una nueva característica introducida en ES6 que te permite expandir un objeto iterable en elementos individuales. Este objeto iterable podría ser una matriz, una cadena o cualquier otro objeto iterable.</p>

<p><b>El operador de propagación está representado por tres puntos (...) y se puede usar de varias maneras. Aquí hay algunos ejemplos:</b></p>

<p>1. Usar el operador de propagación para concatenar matrices:</p>

<code>
    <p><span className='blueviole'>const</span> <span className='blue'>array1</span> = [<span className='blue1'>1, 2, 3</span>];</p>

    <p><span className='blueviole'>const</span> <span className='blue'>array2</span> = [<span className='blue1'>4, 5, 6</span>]; </p>

    <p><span className='blueviole'>const</span> <span className='blue'>newArray</span> = [...array1, ...array2]; </p>

    <p>{'console'}.<span className='blue'>log</span>(newArray); <span className='green'>// [1, 2, 3, 4, 5, 6]</span></p>
   </code>

    <p>2. Utilizando el operador de propagación para crear una copia de un array:</p>

  <code>
    <p><span className='blueviole'>const</span> <span className='blue'>array1</span> = [<span className='blue1'>1, 2, 3</span>];</p>

    <p><span className='blueviole'>const</span> <span className='blue'>array2</span> = [...array1];</p>

    <p>{'console'}.<span className='blue'>log</span>(array2); <span className='green'>// [1, 2, 3]</span></p>
  </code>

    <p>3. Utilizando el operador de propagación para pasar argumentos a una función:</p>

  <code>
    <p><span className='blueviole'>function</span> <span className='blue'>sum</span>(<span className='blue1'>a, b, c</span>) {'{'}</p>

    <p><span className='blueviole'>return</span> a + b + c; </p>

    <p>{'}'}</p>

    <p><span className='blueviole'>const</span> <span className='blue'>numbers</span> = [<span className='blue1'>1, 2, 3</span>]; </p>

    <p><span className='blueviole'>const</span> <span className='blue'>result</span> = sum(...numbers);</p>

    <p>{'console'}.<span className='blue'>log</span>(result); <span className='green'>// 6</span></p>
  </code>

    <p>4. Utilizando el operador de propagación para fusionar objetos: </p>

    <code>
      <p><span className='blueviole'>const</span> <span className='blue'>object1</span> = {'{'} x: <span className='blue1'>1</span>, y: <span className='blue1'>2</span> {'}'}; </p>

      <p><span className='blueviole'>const</span> <span className='blue'>object2</span> = {'{'} z: <span className='blue1'>3</span> {'}'};</p>

      <p><span className='blueviole'>const</span> <span className='blue'>mergedObject</span> = {'{'} ...object1, ...object2 {'}'};</p>

      <p>{'console'}.<span className='blue'>log</span>(mergedObject); <span className='green'>// {'{'} x: 1, y: 2, z: 3 {'}'}</span></p>
    </code>
    
    <p>En todos estos ejemplos, el operador de propagación se utiliza para expandir un objeto iterable en elementos individuales. Es una característica útil que puede simplificar tu código y hacerlo más legible.</p>

    <p><b>Desestructuración en ES6</b></p>

    <p>La desestructuración en ES6 es una forma de extraer valores de objetos o arrays y asignarlos a variables de una manera más concisa y legible.</p>

    <p>Por ejemplo, considera el siguiente objeto:</p>

  <code>
    <p><span className='blueviole'>const</span> <span className='blue'>person</span> = {'{'}</p>

    <p>name: <span className='red'>'John Doe'</span>, </p>

    <p>age: <span className='blue1'>30</span>,</p>

    <p> email: <span className='red'>'john.doe@example.com'</span></p>

    <p>{'};'}</p>
  </code>

    <p>En lugar de acceder a cada propiedad individualmente de esta manera:</p>

  <code>
    <p><span className='blueviole'>const</span> <span className='blue'>name</span> = person.name;</p>

    <p><span className='blueviole'>const</span> <span className='blue'>age</span> = person.age; </p>

    <p><span className='blueviole'>const</span> <span className='blue'>email</span> = person.email; </p>
  </code>

    <p>Puedes usar la desestructuración para asignar cada propiedad a una variable de una manera más concisa:</p>
    
    <code><p> <span className='blueviole'>const</span> {'{'} <span className='blue'>name, age, email</span> {'}'} = person; </p></code>

    <p>Esto crea tres variables <b>(name, age y email)</b> y les asigna los valores de sus propiedades correspondientes en el objeto person.</p>

    <p>También puedes usar la desestructuración con arrays. Por ejemplo:</p>

    <code>
      <p><span className='blueviole'>const</span> <span className='blue'>numbers</span> = [<span className='blue1'>1, 2, 3, 4, 5</span>]; </p>

      <p><span className='blueviole'>const</span> [<span className='blue'>first</span>, <span className='blue'>second</span>, ...<span className='blue'>rest</span>] = numbers; </p>

      <p>{'console'}.<span className='blue'>log</span>(first); <span className='green'>// 1</span></p>

      <p>{'console'}.<span className='blue'>log</span>(second); <span className='green'>// 2</span></p>

      <p>{'console'}.<span className='blue'>log</span>(rest); <span className='green'>// [3, 4, 5]</span></p>
   </code>

<p>Esto crea tres variables <b>(first, second y rest)</b> y les asigna los valores de los dos primeros elementos en el array <b>numbers</b> y el resto de los elementos, respectivamente.</p>

<p>La desestructuración también se puede usar con objetos y arrays anidados, e incluso se pueden asignar valores predeterminados a variables en caso de que el valor que se está desestructurando sea undefined.</p>
    
<p>En general, la desestructuración es una característica poderosa en ES6 que puede ayudar a que tu código sea más legible y conciso.</p>

    <p><b>Ciclo ES6 (for - of)</b></p>

<p>ES6 introdujo un nuevo tipo de bucle en JavaScript llamado el bucle <b>for...of</b>. Este bucle se utiliza para iterar sobre elementos de un objeto iterable como arrays, strings, maps, sets, etc.</p>
    
    <p>Aquí tienes un ejemplo de cómo utilizar el bucle <b>for...of</b> para iterar sobre un array:</p>

  <code>
    <p><span className='blueviole'>const</span> <span className='blue'>arr</span> = [<span className='blue1'>1, 2, 3, 4, 5</span>]; </p>

    <p><span className='blueviole'>for</span> (<span className='blueviole'>let</span> <span className='blue'>num</span> <span className='blueviole'>of</span> arr) {'{'}</p>

    <p>{'console'}.<span className='blue'>log</span>(num);</p>

    <p>{'} '}</p>
  </code>
    
    <p>En este ejemplo, el bucle <b>for...of</b> itera sobre cada elemento en el array <b>arr</b> y lo registra en la consola.</p>

    <p>También podemos utilizar el bucle <b>for...of</b> para iterar sobre los caracteres en un string:</p>

  <code>
    <p><span className='blueviole'>const</span> <span className='blue'>str</span> = <span className='red'>"¡Hola, mundo!"</span>; </p>

    <p><span className='blueviole'>for</span> (<span className='blueviole'>let</span> <span className='blue'>char</span> <span className='blueviole'>of</span> str) {'{'}</p>

    <p>{'console'}.<span className='blue'>log</span>(char);</p>

    <p>{'}'}</p>
  </code>
  <p>En este ejemplo, el bucle <b>for...of</b> itera sobre cada carácter en la cadena <b>str</b> y lo registra en la consola.</p>

<p>También podemos usar el bucle <b>for...of</b> para iterar sobre las claves o valores de un objeto Map:</p>

<code>
  <p><span className='blueviole'>const</span> <span className='blue'>map</span> = <span className='blueviole'>new</span> Map {'(['} </p>

  <p>[<span className='red'>'a'</span>, <span className='blue1'>1</span>],</p>

  <p> [<span className='red'>'b'</span>, <span className='blue1'>2</span>], </p>

  <p> [<span className='red'>'c'</span>, <span className='blue1'>3</span>] </p>

  <p>{']);'}</p>

  <p><span className='blueviole'>for</span> (<span className='blueviole'>let</span> [<span className='blue'>key, value</span>] <span className='blueviole'>of</span> map) {'{'}</p>

  <p>{'console'}.<span className='blue'>log</span>(key, value);</p>

  <p>{'}'}</p>
</code>

<p>En este ejemplo, el bucle <b>for...of</b> itera sobre cada par clave-valor en el objeto <b>map</b> y los registra en la consola.</p>

<p>En general, el bucle <b>for...of</b> es una adición útil al lenguaje JavaScript que simplifica la iteración sobre objetos iterables.</p>

<p><b>Parámetro rest de las funciones ES6</b></p>

<p>El parámetro rest de las funciones ES6 es una característica que permite que una función acepte un número indefinido de argumentos como un array. Se denota con tres puntos (...) seguidos del nombre del parámetro.</p>

<p>Aquí tienes un ejemplo de cómo usar el parámetro rest:</p>

<code>
  <p><span className='blueviole'>function</span> <span className='blue'>sum</span>(...<span className='blue'>numbers</span>) {'{'}</p>

  <p><span className='blueviole'>let</span> <span className='blueviole'>result</span> = <span className='blue1'>0</span>; </p>

  <p><span className='blueviole'>for</span> (<span className='blueviole'>let</span> <span className='blue'>number</span> <span className='blueviole'>of</span> numbers) {'{'}</p>

  <p>{'result += number;'}</p>

  <p>&nbsp;{' }'}</p>

  <p><span className='blueviole'>return</span> result; </p>

  <p>{'}'}</p>

  <p>{'console'}.<span className='blue'>log</span>(sum(<span className='blue1'>1, 2, 3</span>)); <span className='green'>// Salida: 6</span></p>

  <p>{'console'}.<span className='blue'>log</span>(sum(<span className='blue1'>4, 5, 6, 7</span>)); <span className='green'>// Salida: 22</span></p>
</code>

<p>En el ejemplo anterior, la función sum acepta un número indefinido de argumentos usando el parámetro rest ...numbers. Luego recorre el array de números usando un bucle for...of para sumar los valores y devuelve el resultado.</p>

<p>El parámetro rest es útil cuando quieres escribir una función que pueda manejar un número variable de argumentos sin tener que definir explícitamente cada argumento. Se usa comúnmente en funciones que manipulan arrays o realizan operaciones matemáticas en un conjunto de valores.</p>

<p>En general, el parámetro rest es una característica conveniente que facilita la escritura de funciones más flexibles y versátiles.</p>

<p><b>Funciones de flecha</b></p>

<p>Las funciones de flecha son una forma concisa de escribir funciones en JavaScript, introducidas en ES6 (ECMAScript 2015). Proporcionan una sintaxis más compacta en comparación con las expresiones de funciones tradicionales, lo que hace que el código sea más fácil de leer y escribir.</p>

<p>Aquí tienes un ejemplo de una expresión de función tradicional que toma dos parámetros y devuelve su suma:</p>

<code>
  <p><span className='blueviole'>function</span> <span className='blue'>sum</span>(<span className='blue1'>a, b</span>) {'{'}</p>

  <p><span className='blueviole'>return</span> a + b; </p>

  <p>{'}'}</p>
</code>

<p>La misma función se puede escribir usando una función de flecha de la siguiente manera:</p>

<code><p><span className='blueviole'>const</span> <span className='blue'>sum</span> = (<span className='blue1'>a, b</span>) {'=>'} a + b; </p></code>


<p>En este ejemplo, la función se define utilizando la sintaxis de flecha <b>{'=>.'}</b> Los parámetros <b>(a, b)</b> están encerrados entre paréntesis, seguidos por la flecha <b>{'=>'}</b> y el cuerpo de la función <b>a + b.</b> Dado que el cuerpo de la función es una sola declaración, se pueden omitir las llaves y la palabra clave <b>return.</b></p>

<p>Las funciones de flecha también se pueden usar como funciones anónimas, asignadas a variables y pasadas como argumentos a otras funciones. Aquí tienes un ejemplo de una función de flecha que toma un array y devuelve un nuevo array con cada elemento duplicado:</p>

<code><p><span className='blueviole'>const</span> <span className='blue'>doubleArray</span> = <span className='blue'>arr</span> {'=>'} arr.map(<span className='blue'>item</span> {'=>'} item * <span className='blue1'>2</span>); </p></code>

<p>En este ejemplo, la función de flecha {'(item => item * 2)'} se pasa como argumento al método <b>map()</b>, que aplica la función a cada elemento del array y devuelve un nuevo array con los valores modificados.</p>

<p>Las funciones de flecha también tienen un enlace léxico de <b>this</b>, lo que significa que <b>this</b> se refiere al valor de <b>this</b> en el ámbito encerrado, en lugar del <b>this</b> propio de la función. Esto hace que las funciones de flecha sean particularmente útiles para trabajar con métodos de objetos y controladores de eventos.</p>

<p>En general, las funciones de flecha proporcionan una forma más concisa y legible de escribir funciones en JavaScript, lo que hace que el código sea más fácil de entender y mantener.</p>

<p><b>Prototipo</b></p>

<p>En JavaScript, cada objeto tiene una propiedad interna llamada [[Prototype]] (a veces referida como "dunder proto"), que se refiere a otro objeto o null. Esta propiedad se utiliza para implementar la herencia y permitir que los objetos hereden propiedades y métodos de sus prototipos.</p>

<p>En ES5, puedes crear un prototipo utilizando funciones constructoras y la propiedad prototype. Aquí tienes un ejemplo:</p>

<code>
  <p><span className='blueviole'>function</span> <span className='blue'>Person</span>(<span className='blue1'>name, age</span>) {'{'}</p>

  <p><span className='blueviole'>this</span>.name = name; </p>

  <p><span className='blueviole'>this</span>.age = age; </p>

  <p>&nbsp;{'} '}</p>

  <p>Person.prototype.greet = <span className='blueviole'>function</span>() {'{'}</p>

  <p>{'console'}.<span className='blue'>log</span>(<span className='red'>`Hola, mi nombre es</span> ${'{'}<span className='blueviole'>this</span>.name{'}'} <span className='red'>y tengo</span> ${'{'}<span className='blueviole'>this</span>.age{'}'} <span className='red'>años.`</span>);</p>

  <p>{'} '}</p>

  <p><span className='blueviole'>const</span> <span className='blue'>john</span> = <span className='blueviole'>new</span> Person(<span className='red'>"John"</span>, <span className='blue1'>30</span>); </p>

  <p>john.greet(); <span className='green'>// "Hola, mi nombre es John y tengo 30 años."</span></p>
</code>

<p>En este ejemplo, creamos una función constructora llamada <b>Person</b> que toma un <b>name</b> y una <b>age</b> como argumentos y los establece como propiedades en el objeto. Luego agregamos un método <b>greet</b> al prototipo de <b>Person</b> usando el objeto <b>Person.prototype</b>. Este método registra un mensaje de saludo en la consola que incluye el nombre y la edad de la persona.</p>

<p>Cuando creamos un objeto <b>new</b> utilizando la palabra clave new y el constructor <b>Person</b>, la propiedad [[Prototype]] del nuevo objeto apuntará al objeto <b>Person.prototype</b>. Esto permite que el nuevo objeto herede el método <b>greet</b> de su prototipo.</p>

<p>En ES6, puedes usar la sintaxis de <b>class</b> para definir una clase y su prototipo. Aquí tienes el mismo ejemplo usando clases ES6:</p>

<code>
  <p><span className='blueviole'>class</span> <span className='green'>Person</span> {'{'}</p>

  <p>constructor(<span className='blue'>name, age</span>) {'{'}</p>

  <p><span className='blueviole'>this</span>.name = name; </p>

  <p><span className='blueviole'>this</span>.age = age;</p>

  <p>{'}'}</p>

  <p>{'greet() { '}</p>

  <p>{'console'}.<span className='blue'>log</span>(<span className='red'>`Hola, mi nombre es</span> ${'{'}<span className='blueviole'>this</span>.name{'}'} <span className='red'>y tengo</span> ${'{'}<span className='blueviole'>this</span>.age{'}'} <span className='red'>años.`</span>);</p>

  <p>&nbsp;{'}'}</p>

  <p>{'}'}</p>

  <p><span className='blueviole'>const</span> <span className='blue'>john</span> = <span className='blueviole'>new</span> Person(<span className='red'>"John"</span>, <span className='blue1'>30</span>); </p>

  <p>john.greet(); <span className='green'>// "Hola, mi nombre es John y tengo 30 años."</span></p>
</code>

<p>En este ejemplo, definimos una clase llamada <b>Person</b> con un constructor que toma un <b>name</b> y una <b>age</b> y los establece como propiedades en el objeto. Luego definimos un método <b>greet</b> directamente en la clase. Bajo el capó, la sintaxis de <b>class</b> crea una función constructora y establece su prototipo en el prototipo de la clase.</p>

<p>Tanto ES5 como ES6 utilizan el concepto de prototipos para implementar la herencia en JavaScript, pero la sintaxis para definir prototipos es diferente. Las clases ES6 proporcionan una sintaxis más concisa e intuitiva para crear clases y definir sus prototipos, mientras que los prototipos ES5 proporcionan más flexibilidad y control sobre cómo se definen los prototipos.</p>

<p><b>Clase (métodos estáticos)</b></p>

<p>En ES6, las clases fueron introducidas como una forma de crear prototipos de objetos. Las clases son una plantilla para crear objetos que encapsulan datos y funcionalidad. Una característica de las clases es la capacidad de definir métodos estáticos, que son métodos que se llaman en la propia clase en lugar de en una instancia de la clase.</p>

<p>Un método estático es un método que pertenece a la clase en sí, en lugar de a cualquier instancia de la clase. Se puede llamar en la clase sin tener que crear primero una instancia de la clase.</p>

<p>Aquí tienes un ejemplo de una clase con un método estático:</p>

<code>
  <p><span className='blueviole'>class</span> <span className='green'>Car</span> {'{'}</p>

  <p>constructor(<span className='blue'>make, model</span>) {'{'}</p>

  <p><span className='blueviole'>this</span>.make = make; </p>

  <p><span className='blueviole'>this</span>.model = model; </p>

  <p>{'}'}</p>

  <p><span className='blueviole'>static</span> compare(<span className='blue'>car1, car2</span>) {'{'}</p>

  <p><span className='blueviole'>if</span> (car1.make === car2.make) {'{'}</p>

  <p><span className='blueviole'>return</span> <span className='red'>"Misma marca"</span>; </p>

  <p>&nbsp;{'}'} <span className='blueviole'>else</span> {'{'}</p>

  <p><span className='blueviole'>return</span> <span className='red'>"Marca diferente"</span>; </p>

  <p>&nbsp;&nbsp;{' }'}</p>

  <p>&nbsp;{' }'}</p>

  <p>{' }'}</p>

  <p><span className='blueviole'>let</span> <span className='blue'>car1</span> = <span className='blueviole'>new</span> Car(<span className='red'>"Honda", "Civic"</span>); </p>

  <p><span className='blueviole'>let</span> <span className='blue'>car2</span> = <span className='blueviole'>new</span> Car(<span className='red'>"Toyota", "Corolla"</span>); </p>

  <p>console.<span className='blue'>log</span>(Car.compare(car1, car2)); <span className='green'>// "Marca diferente"</span> </p>
</code>

<p>En el ejemplo anterior, la clase Car tiene un método estático llamado compare. Este método toma dos objetos Car como parámetros y devuelve una cadena que indica si tienen el mismo fabricante o no. El método compare puede ser llamado en la misma clase Car, en lugar de en una instancia de la clase.</p>

<p> Tenga en cuenta que en el método compare, no se utiliza la palabra clave this, ya que el método no se llama en una instancia de la clase. En su lugar, el método toma dos objetos Car como parámetros y compara sus propiedades de fabricante.</p>

<p>En ES5, los métodos estáticos pueden ser definidos en una función constructora utilizando la propiedad prototype de la función constructora. Aquí hay un ejemplo de cómo se vería la clase ES6 anterior en ES5:</p>

<code>
  <p><span className='blueviole'>function</span> <span className='blue'>Car</span>(<span className='blue'>make, model</span>) {'{'}</p>

  <p><span className='blueviole'>this</span>.make = make; </p>

  <p><span className='blueviole'>this</span>.model = model; </p>

  <p>{'} '}</p>

  <p>Car.compare = <span className='blueviole'>function</span>(<span className='blue'>car1, car2</span>) {'{'}</p>

  <p><span className='blueviole'>if</span> (car1.make === car2.make) {'{'}</p>

  <p><span className='blueviole'>return</span> <span className='red'>"Mismo fabricante"</span>; </p>

  <p>&nbsp;{'}'} <span className='blueviole'>else</span>  {'{'}</p>

  <p><span className='blueviole'>return</span> <span className='red'>"Fabricante diferente"</span>; </p>

  <p>&nbsp;{'}'}</p>

  <p>{'}; '}</p>

  <p><span className='blueviole'>let</span> <span className='blue'>car1</span> = <span className='blueviole'>new</span> Car(<span className='red'>"Honda", "Civic"</span>); </p>

  <p><span className='blueviole'>let</span> <span className='blue'>car2</span> = <span className='blueviole'>new</span> Car(<span className='red'>"Toyota", "Corolla"</span>); </p>

  <p>console.<span className='blue'>log</span>(Car.compare(car1, car2)); <span className='green'>// "Fabricante diferente"</span> </p>
</code>

<p>En el ejemplo ES5, el método compare se define directamente en la función constructora Car, en lugar de en su propiedad prototype. Esto permite que el método sea llamado en la misma función constructora Car.</p>

<p><b>Símbolo</b></p>

<p>En ES6, Symbol es un nuevo tipo de dato primitivo que representa un identificador único. A diferencia de las cadenas o los números, los símbolos están garantizados para ser únicos e inmutables, lo que los hace útiles para crear claves de objeto o propiedades que deben ser completamente únicas.</p>

<p>Para crear un símbolo, puedes usar la función <b>Symbol()</b>, así:</p>

<code><p><span className='blueviole'>const</span> <span className='blue'>mySymbol</span> = Symbol();</p></code>

<p>También puedes agregar una descripción a un símbolo para identificarlo más fácilmente más adelante, así:</p>

<code><p><span className='blueviole'>const</span> <span className='blue'>mySymbol</span> = Symbol(<span className='red'>'Mi Símbolo'</span>); </p></code>

<p>Los símbolos pueden ser utilizados como claves de objeto o propiedades, así:</p>

<code>
  <p><span className='blueviole'>const</span> <span className='blue'>mySymbol</span> = Symbol(<span className='red'>'Mi Símbolo'</span>); </p>

  <p><span className='blueviole'>const</span> <span className='blue'>obj</span> = {'{}'}; </p>

  <p>{'obj[mySymbol]'} = <span className='red'>'¡Hola, Mundo!'</span>; </p>

  <p>{"console"}.<span className='blue'>log</span>{'(obj[mySymbol])'}; <span className='green'>// Salida: ¡Hola, Mundo!</span> </p>
</code>

<p>Uno de los principales beneficios de utilizar símbolos es que no pueden ser accedidos ni modificados accidentalmente, porque son únicos y no pueden ser replicados. Esto los hace ideales para crear propiedades privadas o internas en objetos.</p>

<p>Otro beneficio de los símbolos es que pueden ser utilizados para definir símbolos conocidos, que son símbolos integrados que tienen un significado o comportamiento específico en el lenguaje. Por ejemplo, el símbolo Symbol.iterator se utiliza para definir el iterador predeterminado de un objeto.</p>

<p>En general, los símbolos proporcionan una forma poderosa y flexible de crear identificadores únicos y definir un comportamiento personalizado para objetos en JavaScript.</p>

<p><b>Promesa</b></p>

<p>Una Promesa es una característica introducida en ES6 que te permite manejar operaciones asíncronas de manera más fácil y organizada.</p>

<p>En términos simples, una Promesa es un objeto que representa un valor que podría no estar disponible aún, pero que lo estará en algún momento en el futuro. Proporciona una forma de manejar los resultados de operaciones asíncronas (como solicitudes API o consultas a bases de datos) sin bloquear el hilo principal de ejecución.</p>

<p>Una Promesa tiene tres estados: pendiente, cumplida o rechazada. Cuando una Promesa está pendiente, significa que la operación que representa aún no se ha completado. Cuando una Promesa está cumplida, significa que la operación fue exitosa y el resultado está disponible. Cuando una Promesa es rechazada, significa que la operación falló y hay un error disponible.</p>

<p>Aquí tienes un ejemplo de cómo usar una Promesa para obtener datos de una API:</p>

<code>
  <p><span className='blueviole'>fetch</span>(<span className='blue1'>'https://jsonplaceholder.typicode.com/todos/1'</span>) </p>

  <p>.<span className='blue'>then</span>(response {'=>'} response.<span className='blue'>json</span>()) </p>

  <p>.<span className='blue'>then</span>(data {'=>'} {'console'}.<span className='blue'>log</span>(data))</p>

  <p>.<span className='blue'>catch</span>(error {'=>'} {'console'}.<span className='blue'>error</span>(error))</p>
</code>

<p>En este ejemplo, <b>fetch</b> es una función que devuelve una Promesa que se resuelve con la respuesta de la API. El método <b>then</b> se llama en la Promesa, que toma una función de devolución de llamada que se ejecuta cuando la Promesa se cumple. La primera devolución de llamada de <b>then</b> analiza la respuesta como JSON y la devuelve. La segunda devolución de llamada de <b>then</b> registra los datos analizados en la consola. El método <b>catch</b> se llama para manejar cualquier error que ocurra durante la operación.</p>

<p>Las Promesas también pueden crearse manualmente utilizando el constructor <b>Promise</b>:</p>

<code>
  <p><span className='blueviole'>const</span> <span className='blue'>promise</span> = <span className='blueviole'>new</span> Promise{'(('}<span className='blue'>resolve, reject</span>{')'} {'=>'} {"{"}</p>

  <p>{"setTimeout(() => { "}</p>

  <p> resolve(<span className='red'>'¡Éxito!'</span>) </p>

  <p>&nbsp;{" }"}, <span className='blue1'>1000</span>{')'} </p>

  <p>{"}) "}</p>

  <p> promise.then(<span className='blue'>result</span> {"=> console"}.<span className='blue'>log</span>(result)) <span className='green'>// Salida: ¡Éxito!</span> </p>
</code>

<p>En este ejemplo, la Promesa se crea con una función que toma dos parámetros: <b>resolve</b> y <b>reject.</b> La función <b>resolve</b> se llama después de un segundo con el argumento <b>'¡Éxito!'</b>. El método <b>then</b> se llama en la Promesa, que toma una función de devolución de llamada que se ejecuta cuando la Promesa se cumple. La devolución de llamada registra el resultado en la consola.</p>

<b><p>* Texto escrito con la ayuda de un traductor. Si encuentras un error, por favor avísanos *</p></b>
  
  <div className='ads-container'>  
  {/*  реклама  */}
</div>
    </div>
  )
}

export default EsJavaScript6;