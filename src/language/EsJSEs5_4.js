import React from 'react';

function EsJSEs5_4() {
  return (
    <div>
      <div className='ad-container'>  
          {/*  реклама  */}
        </div>
      
      <h3>Recursión</h3>

<p>La recursión es una técnica de programación donde una función se llama a sí misma hasta que alcanza un caso base. A menudo se utiliza para resolver problemas que pueden descomponerse en subproblemas más pequeños y similares. En JavaScript ES5, la recursión se puede utilizar para recorrer un árbol o una estructura anidada, para realizar ciertos cálculos o para generar todas las combinaciones posibles de un conjunto de elementos. Aquí tienes un ejemplo de una función que utiliza la recursión para calcular el factorial de un número dado:</p>


<code>
<p><span className='blueviole'>function</span> <span className='blue'>factorial</span>(<span className='blue'>num</span>) {'{'} </p>

<p><span className='blueviole'>if</span> (num {'<='}<span className='blue'> 1</span>) {'{'}</p>

<p><span className='blueviole'>return</span> <span className='blue'>1</span>;</p>

<p>{'}'}<span className='blueviole'> else</span> {'{'}</p>

<p><span className='blueviole'>return</span> num * factorial(num - <span className='blue'>1</span>); </p>

<p>{' }'}</p>

<p>{'}'}</p>

<p>{'console.log'}(factorial(<span className='blue'>5</span>)); <span className='darkgreen'>// Resultado: 120</span></p>
</code>

<p>En este ejemplo, la función factorial() se llama a sí misma con un número más pequeño hasta que alcanza el caso base de {'num <='}, momento en el cual devuelve 1. El resultado final se calcula multiplicando todos los valores devueltos juntos.</p>

<p>Es importante tener en cuenta que la recursión puede ser intensiva en memoria, especialmente para entradas grandes, por lo que es importante diseñar cuidadosamente las funciones recursivas y asegurarse de que tengan un caso base para evitar bucles infinitos.</p>

<p><b>Ejemplo</b></p>

<code>
<p><span className='blueviole'>function</span> <span className='blue'>factorial</span>(<span className='blue'>num</span>) {'{'} </p>

<p><span className='blueviole'>if</span> (num === <span className='blue'>0</span> || num === <span className='blue'>1</span>) {'{'} </p>

<p><span className='blueviole'>return</span> <span className='blue'>1</span>; </p>

<p>{'}'} <span className='blueviole'>else</span> {'{'} </p>

<p><span className='blueviole'>return</span> num * factorial(num - <span className='blue'>1</span>); </p>

<p> {'}'}</p>

<p>{'}'}</p>

<p><span className='blueviole'>var</span> <span className='blue'>result</span> = factorial(<span className='blue'>5</span>);</p>

<p>{'console.log(result);'} <span className='darkgreen'>// Resultado: 120</span></p>
</code>

<p>En el ejemplo actualizado, hemos definido una función factorial que toma un solo parámetro num. La función primero verifica si el número dado es 0 o 1, en cuyo caso devuelve inmediatamente 1. De lo contrario, calcula el factorial del número de forma recursiva llamando a la misma función factorial con un valor decrementado de num y multiplicándolo por el valor actual de num.</p>

<p>Cuando llamamos a la función factorial con el argumento 5, calcula recursivamente el factorial llamándose a sí misma con valores decrecientes hasta que alcanza el caso base de num === 1, momento en el que devuelve 1 y la recursión se desenrolla, devolviendo el resultado final de 5 * 4 * 3 * 2 * 1 = 120.</p>

<h3>Objeto</h3>

<p>
Un objeto es una estructura de datos en JavaScript que te permite almacenar colecciones de datos y funcionalidades relacionadas. Es un concepto clave en JavaScript y se utiliza extensamente en todo el lenguaje. Los objetos se definen utilizando llaves {} y consisten en pares clave-valor, donde la clave es una cadena y el valor puede ser cualquier tipo de datos, incluidos otros objetos o funciones.

Los objetos se utilizan en JavaScript para una amplia variedad de propósitos, incluida la creación de estructuras de datos complejas, la organización del código y proporcionar una forma de encapsular datos y comportamientos relacionados. Son una parte importante de la programación orientada a objetos en JavaScript y son un bloque de construcción fundamental para muchas de las características y bibliotecas avanzadas del lenguaje.
</p>

<p><b>Ejemplo</b></p>

<p className='darkgreen'>// Creando un objeto</p>

<code>
<p><span className='blueviole'>var</span> car = {'{'} </p>

<p>make: <span className='red'>"Toyota"</span>,</p>

<p> model: <span className='red'>"Camry"</span>,</p>

<p>year: <span className='blue'>2021</span>,</p>

<p> start: <span className='blueviole'>function</span>() {'{'} </p>

<p>{'console.log'}(<span className='red'>"Starting the car..."</span>);</p>

<p>{'}'}</p>

<p>{'}'}</p>

<p><span className='darkgreen'>// Accediendo a las propiedades del objeto</span></p>

<p>{'console.log(car.make);'} <span className='darkgreen'>// Toyota</span></p>

<p>{'console.log(car.year);'}<span className='darkgreen'> // 2021</span> </p>

<p><span className='darkgreen'>// Invocando métodos del objeto</span></p>

<p>{'car.start(); '}<span className='darkgreen'>// Starting the car...</span></p>
</code>

<p><b>Propiedades de un objeto</b></p>

<code>
  <p><span className='blueviole'>var</span> <span className='blue'>persona</span> = {'{'} </p>

  <p> nombre: <span className='red'>"Juan"</span>,</p>

  <p>edad: <span className='blue'>30</span>,</p>

  <p>género: <span className='red'>"masculino"</span></p>

  <p>{'};'}</p>

  <p>persona.email = <span className='red'>"juan@example.com"</span>;</p>

  <p>{'console.log(persona.nombre);'} <span className='darkgreen'>// Juan</span></p>

  <p>{'console.log(persona.email);'} <span className='darkgreen'>// juan@example.com</span></p>
</code>

<p><b>Métodos de un objeto</b></p>

<code>
  
  <p><span className='blueviole'>var</span> <span className='blue'>calculadora</span> = {'{'}</p>

<p>sumar: <span className='blueviole'>function</span>(<span className='blue'>a</span>, <span className='blue'>b</span>) {'{'} </p>

<p> <span className='blueviole'>return</span> a + b; {'}'},</p>

<p>restar: <span className='blueviole'>function</span>(<span className='blue'>a</span>,<span className='blue'>b</span>) {'{'} </p>

<p><span className='blueviole'>return</span> a - b;</p>

<p>{'}'}</p>

<p>{'};'}</p>

<p>{'console.log'}(calculadora.sumar(<span className='blue'>5</span>, <span className='blue'>3</span>)); <span className='darkgreen'>// 8</span></p>

<p>{'console.log'}(calculadora.restar(<span className='blue'>5</span>, <span className='blue'>3</span>)); <span className='darkgreen'>// 2</span></p>

</code>
 
<p><b>Tipo de objeto orientado - array</b></p>
 

<p className='darkgreen'>// Creando un array</p>
<code>

<p><span className='blueviole'>var</span> <span className='blue'>colores</span> = [<span className='red'>"rojo", "verde", "azul"</span>]; <span className='darkgreen'>// Accediendo a los elementos del array</span></p>

<p>{'console.log'}(colores[<span className='blue'>0</span>]); <span className='darkgreen'>// rojo</span></p>

<p>{'console.log'}(colores[<span className='blue'>2</span>]); <span className='darkgreen'>// azul</span></p>

<p><span className='darkgreen'>// Agregando un nuevo elemento al array </span></p>

<p>{'colores.push'}(<span className='red'>"amarillo"</span>); </p>

<p><span className='darkgreen'>// Recorriendo el array</span></p>

<p><span className='blueviole'>for</span>(<span className='blueviole'>var</span> <span className='blue'>i</span> = <span className='blue'>0</span>; i {'<'} colores.length; i++) {'{'}</p>

<p>{' console.log(colores[i]);'}</p>

<p>{'}'}</p>

</code>
 
<p><b>Propiedades y métodos de una función</b></p>

<code>
<p><span className='blueviole'>function</span> <span className='blue'>saludo</span>(<span className='blue'>nombre</span>) {'{'}</p>

<p>{'console.log'}(<span className='red'>"Hola "</span> + nombre);</p>

<p>{'}'}</p>

<p>{'console.log(saludo.length);'} <span className='darkgreen'>// 1 (el número de argumentos esperados)</span></p>

<p><span className='darkgreen'>// Agregando una nueva propiedad a la función</span></p>

<p>saludo.idioma = <span className='red'>"Español"</span>;</p>

<p><span className='darkgreen'>// Accediendo a las propiedades de la función</span></p>

<p>{'console.log(saludo.idioma);'} <span className='darkgreen'>// Español</span></p>

<p><span className='darkgreen'>// Invocando la función saludo("Juan"); // Hola Juan</span></p>
</code>

<h3>this</h3>

<p>
En JavaScript ES5, this es una palabra clave que se refiere al objeto actual o al contexto en el que se está ejecutando el código. Puede referirse a diferentes objetos según cómo y dónde se use.

Cuando this se usa dentro de una función que se llama como método de un objeto, se refiere al objeto mismo. Por ejemplo:
</p>
 
<code>
  <p><span className='blueviole'>var</span> <span className='blue'>miObjeto</span> = {'{'}</p>

  <p>nombre: <span className='red'>"Juan"</span>,</p>

  <p>decirHola: <span className='blueviole'>function</span>() {'{'}</p>

  <p>{'console.log'}(<span className='red'>"Hola, mi nombre es "</span> + <span className='blueviole'>this</span>.nombre);</p>

  <p>{' }'}</p>

  <p>{'};'}</p>

  <p>{'miObjeto.decirHola();'} <span className='darkgreen'>// Resultado: "Hola, mi nombre es Juan"</span></p>
</code>

<p>
En este ejemplo, this se refiere al objeto miObjeto porque decirHola() se está llamando como método de miObjeto.
</p>
<p>
Sin embargo, cuando this se usa dentro de una función regular (es decir, no se llama como método de un objeto), se refiere al objeto global (window en el navegador o global en Node.js) de manera predeterminada. Por ejemplo:
</p>

<code>
  <p><span className='blueviole'>function</span> <span className='blue'>decirHola</span>() {'{'}</p>

  <p>{'console.log'}(<span className='red'>"Hola, mi nombre es "</span> + <span className='blueviole'>this</span>.nombre);</p>

  <p>{'}'}</p>

  <p><span className='blueviole'>var</span> <span className='blue'>nombre</span> = <span className='red'>"Juan"</span>;</p>

  <p>{'decirHola();'} <span className='darkgreen'>// Resultado: "Hola, mi nombre es undefined"</span></p>
</code>

<p>
En este caso, this se refiere al objeto global porque decirHola() no se está llamando como método de un objeto. Dado que el objeto global no tiene una propiedad de nombre, this.nombre es indefinido.

Es importante tener en cuenta que el valor de this se puede establecer explícitamente utilizando métodos como call(), apply() y bind(). Estos métodos te permiten llamar a una función con un valor específico de this, independientemente de cómo se esté llamando.
</p>

<h3>Función como objeto</h3>

<code>
  <p><span className='blueviole'>var</span> <span className='blue'>usuario</span> = {'{'}</p>

  <p>nombre: <span className='red'>"Juan"</span>,</p>

  <p>edad:<span className='blue'>20</span></p>

  <p>{'};'}</p>

  <p><span className='blueviole'>function </span><span className='blue'>foo</span>(<span className='blue'>a</span>,<span className='blue'>b</span>) {'{'}</p>

  <p>{'console.log'}(<span className='blueviole'>this</span>.nombre);</p>

  <p>{'console.log(a + b);'}</p>

  <p>{'}'}</p>

  <p><span className='darkgreen'>// Usando el método call para establecer this en el objeto usuario foo.call(usuario, 3, 5);</span></p>

  <p><span className='darkgreen'>// Accediendo a la propiedad length de la función {'console.log(foo.length);'}</span></p>
</code>

<h3>Argumentos de objeto</h3>

<p>El objeto arguments es una variable local que está disponible dentro de todas las funciones. Contiene una lista de tipo array de los argumentos pasados a la función.

Aquí tienes un ejemplo de cómo usar el objeto arguments:</p>
 
<code>
  <p> <span className='blueviole'>function</span> <span className='blue'>suma</span>() {'{'} </p>

  <p><span className='blueviole'>var</span> <span className='blue'>resultado</span> = <span className='blue'>0</span>;</p>

  <p><span className='blueviole'>for</span> (<span className='blueviole'>var</span><span className='blue'> i</span> = <span className='blue'>0</span>; i {'<'} arguments.length; i++) {'{'} </p>

  <p>{'resultado += arguments[i];'}</p>

  <p>{'}'}</p>

  <p><span className='blueviole'>return</span> resultado;</p>

  <p>{'}'}</p>

  <p><span className='blueviole'>var</span> <span className='blue'>total</span> = suma(<span className='blue'>1, 2, 3, 4</span>);</p>

  <p>{'console.log(total);'} <span className='darkgreen'>// Resultado: 10</span></p>
</code>
 
<p>En el ejemplo anterior, la función suma acepta cualquier número de argumentos y el objeto arguments se utiliza para recorrer cada argumento y sumarlos. Luego, la función devuelve la suma total.</p>

<p>Otro ejemplo de uso del objeto arguments es crear una función que concatene todos los argumentos pasados.</p>

<code>
  <p><span className='blueviole'>function</span> <span className='blue'>concatenar</span>() {'{'}</p>

  <p> <span className='blueviole'>var </span><span className='blue'>resultado</span> = <span className='red'>" "</span>;</p>

  <p><span className='blueviole'>for</span> (<span className='blueviole'>var</span> <span className='blue'>i</span> = <span className='blue'>0</span>; i {'<'} arguments.length; i++) {'{'}</p>

  <p>{'resultado += arguments[i];'}</p>

  <p>{'}'}</p>

  <p><span className='blueviole'>return</span> resultado;</p>

  <p>{'}'}</p>

  <p><span className='blueviole'>var</span> <span className='blue'>str</span> = concatenar(<span className='red'>"Hola", " ", "mundo", "!"</span>); </p>

  <p>{'console.log(str);'}<span className='darkgreen'>// Resultado: "Hola mundo!"</span></p>
</code>

<p>En este ejemplo, la función concatenar acepta cualquier número de argumentos y los concatena en una sola cadena, que se devuelve.</p>


   <b><p>* Texto escrito con la ayuda de un traductor. Si encuentras un error, por favor avísanos *</p></b>
    
    <div className='ads-container'>  
      {/*  реклама  */}
      </div>
    </div>
  )
}

export default EsJSEs5_4;