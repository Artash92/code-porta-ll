import React from 'react';

function EsJSEs5_2() {
  return (
    <div>
      <div className='ad-container'>  
          {/*  реклама  */}
        </div>

<h3>Bucles y Condiciones en JavaScript</h3>

<p><b>1. El bucle while</b></p>

<p>El bucle while se utiliza para ejecutar un bloque de código repetidamente mientras se cumpla una condición especificada.</p>

<p>Aquí tienes un ejemplo:</p>
  
<code>
<p><span className='blueviole'>var</span> <span className='blue'>i</span> = <span className='blue'>0</span>; <span className='darkgreen'>// inicializar la variable contador</span></p> 

<p><span className='blueviole'>while</span> (i {'<'}<span className='blue'> 5</span>) {'{'}<span className='darkgreen'> // establecer la condición</span></p>

<p>{'console.log'}(<span className='blue'>i</span>); <span className='darkgreen'>// ejecutar el bloque de código</span></p>

<p>i++; <span className='darkgreen'>// actualizar la variable contador</span></p>

<p>{'}'}</p>
</code>
   
<p>En este ejemplo, el bucle se ejecutará siempre que el valor de i sea menor que 5. El bloque de código se ejecutará cada vez que se ejecute el bucle y el valor de i se incrementará en 1 hasta que alcance 5. La salida de este código será:</p>

<code>
<p className='blue'>0</p>

<p className='blue'>1</p>

<p className='blue'>2</p>

<p className='blue'>3</p>

<p className='blue'>4</p>
</code>

<p><b>2. El bucle for</b></p>
  
<p>El bucle for se utiliza para ejecutar un bloque de código un número especificado de veces. Aquí tienes un ejemplo:</p>

<code>
<p><span className='blueviole'>for</span> (<span className='blueviole'>var</span> i = <span className='blue'>0</span>; i {'<'} <span className='blue'>5</span>; i++) {'{'} </p>

<p>{'console.log(i);'}</p>

<p>{'}'}</p>
</code>

<p>En este ejemplo, el bucle se ejecutará 5 veces, ya que la condición especifica que i debe ser menor que 5. El bloque de código se ejecutará cada vez que se ejecute el bucle y el valor de i se incrementará en 1 cada vez. La salida de este código será la misma que en el ejemplo anterior:</p>

<code>
<p className='blue'>0</p>

<p className='blue'>1</p>

<p className='blue'>2</p>

<p className='blue'>3</p>

<p className='blue'>4</p>
</code>
  
<p><b>3. El bucle do-while</b></p>
  
<p>El bucle do-while es similar al bucle while, pero ejecuta el bloque de código al menos una vez, incluso si la condición es inicialmente falsa. Aquí tienes un ejemplo:</p>

<code>
<p><span className='blueviole'>var</span> i = <span className='blue'>0</span>; <span className='darkgreen'>// inicializar la variable contador</span></p>

<p><span className='blueviole'>do</span> {'{'}</p>

<p>{'console.log(i);'} <span className='darkgreen'>// ejecutar el bloque de código</span></p>

<p>i++; <span className='darkgreen'>// actualizar la variable contador</span></p>

<p>{'}'}</p>

<p><span className='blueviole'>while</span> (i {'<'} <span className='blue'>5</span>); <span className='darkgreen'>// establecer la condición</span></p>
</code>

<p>En este ejemplo, el bucle se ejecutará al menos una vez, ya que la condición se verifica después de que se ejecuta el bloque de código. El bloque de código se ejecutará cada vez que se ejecute el bucle y el valor de i se incrementará en 1 cada vez, hasta que alcance 5. La salida de este código será la misma que en los ejemplos anteriores:</p>

<code>
<p className='blue'>0</p>

<p className='blue'>1</p>

<p className='blue'>2</p>

<p className='blue'>3</p>

<p className='blue'>4</p>
</code>
  
<p> <b>4. Los operadores ++ y --</b></p>
  
<p>Los operadores ++ y -- se utilizan para incrementar o decrementar una variable en 1. Aquí tienes algunos ejemplos:</p>
 
<code>
  <p><span className='blueviole'>var</span> <span className='blue'>i</span> = <span className='blue'>0</span>; <span className='darkgreen'>// inicializar una variable</span></p>

  <p>i++; <span className='darkgreen'>// incrementar la variable</span></p>

  <p>{'console.log(i);'} <span className='darkgreen'>// salida: 1</span></p>

  <p><span className='blueviole'>var</span> <span className='blue'>j</span> = <span className='blue'>2</span>; <span className='darkgreen'>// inicializar otra variable</span></p>

  <p>j--; <span className='darkgreen'>// decrementar la variable</span> </p>

  <p>{'console.log(j);'} <span className='darkgreen'>// salida: 1</span></p>
</code>
  
  
 
<p>Estos operadores se usan frecuentemente en bucles para llevar un seguimiento de la iteración actual.</p>
 
<b>5. Las sentencias if, else y else if</b>
 
<p>La sentencia if se utiliza para ejecutar un bloque de código si se cumple una condición especificada. La sentencia else se utiliza para ejecutar un bloque de código si la condición es falsa. La sentencia else if se utiliza para probar múltiples condiciones. Aquí tienes un ejemplo:</p>
 
<code>
  <p><span className='blueviole'>var</span> <span className='blue'>x</span> = <span className='blue'>15</span>; <span className='darkgreen'>// inicializar una variable</span></p>

  <p><span className='blueviole'>if</span> (x {'>'} <span className='blue'>10</span>) {'{'} <span className='darkgreen'>// verificar la condición</span></p>

  <p>{'console.log'}(<span className='red'>"x es mayor que 10"</span>)</p>

  <p>{'}'}</p>
</code>

 
<h3>Operador Condicional (ternario)</h3>
  
<p>El operador condicional (ternario) es una forma abreviada de escribir una sentencia if-else en JavaScript. Toma tres operandos: una condición, un valor para devolver si la condición es verdadera, y un valor para devolver si la condición es falsa. La sintaxis del operador condicional es: (condición) ? valor-verdadero : valor-falso. Aquí tienes algunos ejemplos de cómo usar el operador condicional en JavaScript:</p>
 
<p><b>Ejemplo 1:</b></p>
 
<code>
  <p><span className='blueviole'>var</span> <span className='blue'>a</span> = <span className='blue'>5</span>;</p>

  <p><span className='blueviole'>var</span><span className='blue'> resultado</span> = (a == <span className='blue'>5</span>) ? <span className='red'>"verdadero"</span> : <span className='red'>"falso"</span>;</p>

  <p>document.getElementById(<span className='red'>"ejemplo1"</span>).innerHTML = resultado;</p>
</code>
   
<p>Salida: verdadero. Explicación: En este ejemplo, establecemos el valor de la variable a en 5, y luego usamos el operador condicional para verificar si a es igual a 5. Como es verdadero, se devuelve el valor "verdadero" y se asigna a la variable resultado, que luego se imprime en el elemento div HTML.</p>

<p><b>Ejemplo 2:</b></p>

<code>
  <p> <span className='blueviole'>var</span> <span className='blue'>a</span> = <span className='blue'>10</span>;</p>

  <p><span className='blueviole'>var</span> <span className='blue'>resultado</span> = (a == <span className='blue'>5</span>) ? <span className='red'>"verdadero"</span> : <span className='red'>"falso"</span>;</p>

  <p>document.getElementById(<span className='red'>"ejemplo2"</span>).innerHTML = resultado;</p>
</code>

<p>Salida: falso. Explicación: En este ejemplo, establecemos el valor de la variable a en 10, y luego usamos el operador condicional para verificar si a es igual a 5. Como es falso, se devuelve el valor "falso" y se asigna a la variable resultado, que luego se imprime en el elemento div HTML.</p>

<p><b>Ejemplo 3:</b></p>

<code>

  <p><span className='blueviole'>var</span> <span className='blue'>a</span> = <span className='blue'>7</span>;</p>

  <p><span className='blueviole'>var</span> <span className='blue'>resultado</span> = ( a {'>'} <span className='blue'>10</span>) ? <span className='red'>"mayor que 10"</span>: (a {'<'} <span className='blue'>5</span>) ? <span className='red'>"menor que 5"</span> : <span className='red'>"entre 5 y 10"</span> ;</p>

  <p>document.getElementById(<span className='red'>"ejemplo3"</span>).innerHTML = resultado;</p>

</code>


<p>Salida: entre 5 y 10. Explicación: En este ejemplo, establecemos el valor de la variable a en 7, y luego usamos el operador condicional para verificar si a es mayor que 10. Como es falso, pasamos a la segunda condición que verifica si a es menor que 5. Como esto también es falso, pasamos a la tercera condición que devuelve el valor "entre 5 y 10" ya que es la única opción restante. El resultado se imprime en el elemento div HTML.</p>

<b><p>* Texto escrito con la ayuda de un traductor. Si encuentras un error, por favor avísanos *</p></b>
    <div className='ads-container'>  
      {/*  реклама  */}
      </div>
    </div>
  )
}

export default EsJSEs5_2;