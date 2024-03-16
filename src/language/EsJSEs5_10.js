import React from 'react';

function EsJSEs5_10() {
  return (
    <div>

      <div className='ad-container'>  
          {/*  реклама  */}
        </div>
      
      <h1>Ejemplos de JavaScript ES5</h1>

<p><b>Función para calcular la potencia de un número</b></p>

<code>
    <p><span className='blueviole'>function</span> <span className='blue'>pow</span>(<span className='blue1'>num, exp</span>) {"{ "}</p>

    <p><span className='blueviole'>var</span> <span className='blue'>cnt</span> = <span className='blue1'>0</span>; </p>

    <p><span className='blueviole'>var</span> <span className='blue'>res</span> = <span className='blue1'>1</span>; </p>

    <p><span className='blueviole'>while</span> (cnt {'<'} exp) {"{"}</p>

    <p>{" res *= num;"}</p>

    <p>{" cnt++; "}</p>

    <p>&nbsp;{" }"}</p>

    <p><span className='blueviole'>return</span> res;</p>

    <p>{"}"}</p>
</code>   

<p><b>pow(num, exp)</b>: Esta función calcula la potencia de un número. Toma dos parámetros, num y exp, y devuelve el valor de num elevado a la potencia de exp. La función utiliza un bucle while y un contador para multiplicar repetidamente num por sí mismo exp veces hasta que el contador alcanza exp.</p>

<p><b>Función para calcular la potencia de un número (versión alternativa)</b></p>

<code>
  <p><span className='blueviole'>function</span> <span className='blue'>pow2</span>(<span className='blue1'>num1, num2</span>) {'{'}</p>

  <p><span className='blueviole'>var</span> <span className='blue'>num3</span> = <span className='blue1'>1</span>;</p>

  <p><span className='blueviole'>for</span> (<span className='blueviole'>var</span> <span className='blue'>i</span> = <span className='blue1'>1</span>; i {'<='} num2; i++) {'{'}</p>

  <p>{'num3 *= num1;'}</p>

  <p>&nbsp;{'}'}</p>

  <p><span className='blueviole'>return</span> num3;</p>

  <p>{'}'}</p>
</code>

<p><b>pow2(num1, num2)</b>: Esta función calcula la potencia de un número. Toma dos parámetros, num1 y num2, y devuelve el valor de num1 elevado a la potencia de num2. La función utiliza un bucle for para multiplicar repetidamente num1 por sí mismo num2 veces hasta que el bucle se completa.</p>

<p><b>Función para verificar si un número es primo</b></p>

<code>
  <p><span className='blueviole'>function </span><span className='blue'>isPrime</span>(<span className='blue1'>number</span>) {'{'}</p> 

  <p><span className='blueviole'>if</span> (number {'<'} <span className='blue1'>2</span>) {'{'}</p> 

  <p><span className='blueviole'>return</span> <span className='blue1'>false</span>;</p> 

  <p>{'}'} <span className='blueviole'>else if</span> (number == undefined) {'{'}</p> 

  <p><span className='blueviole'>return</span> undefined;</p> 

  <p>{'}'} <span className='blueviole'>else</span> {'{'}</p> 

  <p><span className='blueviole'>for</span> (<span className='blueviole'>var</span> <span className='blueviole'>i</span> = <span className='blue1'>2</span>; i {'<'} number; i++) {'{'}</p>

   <p> <span className='blueviole'>if</span> (number % i === <span className='blue1'>0</span>) {'{'}</p> 

   <p><span className='blueviole'>return</span> <span className='blue1'>false</span>;</p>

   <p>&nbsp;{' }'}</p>

   <p>{'}'}</p>

   <p><span className='blueviole'>return</span> <span className='blue1'>true</span>;</p>

   <p>&nbsp;{'}'}</p>

   <p>{'}'}</p>
</code> 

<p><b>isPrime(number)</b>: Esta función verifica si un número es primo o no. Toma un parámetro number y devuelve true si el número es primo, de lo contrario devuelve false. La función primero verifica si el número es menor que 2, en cuyo caso devuelve false de inmediato. Si el número es undefined, devuelve undefined. De lo contrario, la función utiliza un bucle for para verificar si algún número entre 2 y number (exclusivo) divide el número de manera uniforme. Si se encuentra dicho número, la función devuelve false. Si no se encuentra dicho número, la función devuelve true.</p>

<h4>Creación de una pirámide usando asteriscos en JavaScript</h4>

<code>
    <p><span className='blueviole'>var</span> <span className='blue'>x</span> = <span className='blue1'>6</span>; </p>

    <p><span className='blueviole'>var</span> <span className='blue'>string</span> = <span className='red'>""</span>;</p>

    <p><span className='blueviole'>for</span> (<span className='blueviole'>var</span> <span className='blue'>i</span> = <span className='blue1'>1</span>; i {'<='} x; i++) {"{"}</p>

    <p><span className='blueviole'>for</span> (<span className='blueviole'>var</span> <span className='blue'>y</span> = <span className='blue1'>1</span>; y {'<= '}x - i; y++) {"{"}</p>

    <p>string += <span className='red'>" "</span>;</p>

    <p>{"}"}</p>

    <p> <span className='blueviole'>for</span> (<span className='blueviole'>var</span> <span className='blue'>k</span> = <span className='blue1'>0</span>; k {'<'} <span className='blue1'>2</span> * i - <span className='blue1'>1</span>; k++) {"{"}</p>

    <p>string += <span className='red'>"*"</span>; </p>

    <p>&nbsp;{" }"}</p>

    <p>string += <span className='red'>"\n"</span>;</p>

    <p>{"}"}</p>

    <p>{"console"}.<span className='blue'>log</span>(string);</p>
</code>

<p>El código crea un patrón de pirámide usando asteriscos ('*') y espacios.</p>

<p>El código comienza definiendo una variable 'x' con un valor de 6 y una variable de cadena vacía 'string'. Luego, utiliza un bucle for para iterar a través de cada fila de la pirámide, comenzando desde 1 y subiendo hasta 'x'.</p>

<p>Dentro del primer bucle for, otro bucle for se utiliza para agregar espacios antes de los asteriscos. Agrega (x-i) cantidad de espacios antes de cada fila de asteriscos.</p>

<p>Luego, se utiliza el segundo bucle for para agregar asteriscos a la cadena. La cantidad de asteriscos agregados en cada fila está dada por la fórmula 2*i-1, donde 'i' es el número de fila actual.</p>   

<p>Finalmente, se agrega un carácter de nueva línea al final de cada fila, y la cadena completada se imprime en la consola usando el método console.log().</p>  

<p><b>Creación de un patrón de pirámide con estrellas y números</b></p>

<code>
    <p><span className='blueviole'>var</span> <span className='blue'>lineCount</span> = <span className='blue1'>5</span>;</p>

    <p><span className='blueviole'>var</span> <span className='blue'>symb</span> = <span className='red'>'*'</span>;</p>

    <p><span className='blueviole'>var</span> <span className='blue'>result</span> = <span className='red'>''</span>; </p>

    <p><span className='blueviole'>for</span> (<span className='blueviole'>var</span> <span className='blue'>i</span> = <span className='blue1'>0</span>; i {'<'} lineCount; i++){'{'}</p>

    <p><span className='blueviole'>for</span> (<span className='blueviole'>var</span> <span className='blue'>j</span> = <span className='blue1'>0</span>; j {'<'} lineCount - i; j++){'{'}</p>

    <p>result += <span className='red'>'1'</span>; </p>

    <p>&nbsp;{' }'}</p>

    <p>result += symb + <span className='red'>'\n;'</span></p>

    <p> symb += <span className='red'>' *'</span>;</p>

    <p>{"}"}</p>

    <p>{"console"}.<span className='blue'>log</span>(result)</p>
</code>

<p>El código crea un patrón de estrellas y números en forma de pirámide. Primero define el número de líneas para la pirámide y el símbolo a usar (en este caso, ''). Luego utiliza bucles anidados para construir cada línea de la pirámide, comenzando por la base y agregando un símbolo a la vez hasta llegar a la cima. Los números en el patrón están representados por el dígito '1'. Cada línea de la pirámide se construye agregando la cantidad apropiada de '1's, seguido del símbolo y luego un carácter de nueva línea. El símbolo usado para cada línea se actualiza usando el operador de concatenación de cadenas para agregar un adicional '' para cada nueva línea. Finalmente, el patrón resultante se imprime en la consola usando la función 'console.log'.</p>

<h3>Funciones de JavaScript para generar la serie Fibonacci</h3>

<p><b>Ejemplo</b></p>
    
<code>
  <p><span className='blueviole'>function </span><span className='blue'>fibo</span>(<span className='blue1'>num</span>) {"{"}</p>

  <p><span className='blueviole'>if</span> (isNaN(+num)) {"{"}</p>

  <p><span className='blueviole'>return</span> <span className='red'>'ERROR'</span>; </p>

  <p>{" } "}</p>

  <p><span className='blueviole'>var</span> <span className='blue'>firstN</span> = <span className='blue1'>0</span>; </p>

  <p><span className='blueviole'>var</span> <span className='blue'>secondN</span> = <span className='blue1'>1</span>; </p>

  <p><span className='blueviole'>while </span>(firstN {'<'} num) {"{"}</p>

  <p>{" console"}.<span className='blue'>log</span>(firstN); </p>

  <p>{" secondN = firstN + secondN; "}</p>

  <p>{"firstN = secondN - firstN; "}</p>

  <p>&nbsp;{"}"}</p>

  <p>{"}"}</p>

  <p>fibo(<span className='blue'>55</span>);</p>
</code>

<p><b>Ejemplo</b></p>

<code>
  <p><span className='blueviole'>function</span> <span className='blue'>fibonachi</span>(<span className='blue1'>num</span>) {"{"}</p>

  <p><span className='blueviole'>var</span> <span className='blue'>num1</span> = <span className='blue1'>0</span>;</p>

  <p><span className='blueviole'>var</span> <span className='blue'>num2</span> = <span className='blue1'>1</span>;</p>

  <p> <span className='blueviole'>if</span> (<span className='blueviole'>typeof</span> num !== <span className='red'>"number"</span>) {'{'}</p>

  <p>{'console'}.<span className='blue'>error</span>(<span className='red'>"escribe solo números"</span>);</p>

  <p>{"}"} <span className='blueviole'>else</span> {"{"}</p>

  <p><span className='blueviole'>for</span> (<span className='blueviole'>var</span> <span className='blue'>i</span>; num1 {'<'} num;) {"{"}</p>

  <p>{" console"}.<span className='blue'>log</span>(num1);</p>

  <p>{" i = num1 + num2;"}</p>

  <p>{"num1 = num2;"}</p>

  <p>{"num2 = i;"}</p>

  <p>&nbsp;&nbsp;{" }"}</p>

  <p>&nbsp;{" }"}</p>

  <p>{"}"}</p>

  <p>fibonachi(<span className='blue'>100</span>);</p>
</code>

<p><b>Ejemplo</b></p>
    
<code> 
  <p><span className='blueviole'>function</span> <span className='blue'>fibonachi</span>(<span className='blue1'>n</span>) {"{"}</p>

  <p> <span className='blueviole'>if</span> (<span className='blueviole'>typeof</span> n === <span className='red'>"number"</span>) {'{'}</p>

  <p> <span className='blueviole'>var</span> <span className='blue'>a</span> = <span className='blue1'>0</span>; </p>

  <p><span className='blueviole'>var</span> <span className='blue'>b</span> = <span className='blue1'>1</span>;  </p>

  <p><span className='blueviole'>var</span> <span className='blue'>result</span>;</p>

  <p><span className='blueviole'>for</span> {'(var i = 0; i < n; i++)'} {"{"}</p>

  <p>{"console"}.<span className='blue'>log</span>(a){';'}</p>

  <p>{"result = a + b;"}</p>

  <p>{"  a = b;"}</p>

  <p>{" b = result; "}</p>

  <p>&nbsp;{"}"}</p>
  
  <p><span className='blueviole'>return</span> <span className='blue1'>result</span>;</p>

  <p>{"}"} <span className='blueviole'>else</span> {"{"}</p>

  <p>{'console'}.<span className='blue'>error</span>(<span className='red'>"por favor escribe solo números"</span>){';'}</p>

  <p>&nbsp;{"}"}</p>

  <p>{"}"}</p>
</code>


<p>Estas son tres implementaciones diferentes del generador de la secuencia Fibonacci en JavaScript</p>

<p>La primera implementación (fibo) utiliza un bucle while para generar números de Fibonacci hasta un límite dado (num) y los imprime usando console.log(). Primero verifica si la entrada es un número válido y, si no lo es, devuelve un mensaje de error.</p>

<p>La segunda implementación (fibonachi) utiliza un bucle for para generar números de Fibonacci hasta un límite dado (num) y los imprime usando console.log(). Primero verifica si la entrada es un número válido y, si no lo es, imprime un mensaje de error en la consola.</p>    

 <p>La tercera implementación (fibonachi) también utiliza un bucle for para generar números de Fibonacci hasta un límite dado (n) y los imprime usando console.log(). Primero verifica si la entrada es un número válido y, si no lo es, imprime un mensaje de error en la consola. Esta implementación utiliza tres variables para generar el siguiente número de Fibonacci: a, b y resultado. Comienza con a = 0 y b = 1, y para cada iteración, calcula la suma de a y b, almacena el resultado en resultado, establece a en b y establece b en resultado.</p>   

 <h3>Tablero de ajedrez en JavaScript</h3>

 <code>
    <p><span className='blueviole'>function</span> <span className='blue'>chess</span>(<span className='blue1'>filas, simboloUno, simboloDos, filaActual</span>) {"{"}</p>

    <p><span className='blueviole'>var</span> <span className='blue'>simbolo</span> = <span className='red'>' '</span>;</p>

    <p><span className='blueviole'>if</span> (<span className='blueviole'>typeof</span> filas != <span className='red'>"number"</span></p>

    <p>|| <span className='blueviole'>typeof</span> simboloUno != <span className='red'>"string"</span></p>

    <p>|| <span className='blueviole'>typeof</span> simboloDos != <span className='red'>"string"</span>) {'{'}</p>

    <p>{' console'}.<span className='blue'>error</span>(<span className='red'>"Parámetros inválidos"</span>);</p>

    <p> <span className='blueviole'>return</span>; </p>

    <p>{"}"}</p>

    <p>filas = filas || <span className='blue1'>8</span>;</p>

    <p> simboloUno = simboloUno ||<span className='red'> " ⬛"</span>;</p>
  
    <p>simboloDos = simboloDos || <span className='red'>" ⬜"</span>;</p>

    <p>filaActual = filaActual || <span className='blue1'>1</span>;</p>

    <p><span className='blueviole'>if</span> (filaActual {'>'} filas) <span className='blueviole'>return</span> <span className='red'>''</span>;</p>

    <p><span className='blueviole'>for</span> (<span className='blueviole'>var</span> <span className='blue'>i</span> = <span className='blue1'>0</span>; i {'<'} filas / <span className='blue1'>2</span>; i++) {"{"}</p>

    <p>{"simbolo += simboloUno + simboloDos;"}</p>

    <p>{" }"}</p>

    <p>simbolo += <span className='red'>"\n"</span>; </p>

    <p>simbolo += chess(filas, simboloDos, simboloUno, filaActual + <span className='blue1'>1</span>);</p>

    <p><span className='blueviole'>return</span> simbolo;</p>
  
    <p>{'}'}</p>

    <p>{'console'}.<span className='blue'>log</span>(chess(<span className='blue1'>8</span>, <span className='red'>"⬛"</span>, <span className='red'>"⬜"</span>))</p>
</code>

<p>Este código define una función recursiva llamada "chess" que toma cuatro parámetros: "filas", "simboloUno", "simboloDos" y "filaActual". Su objetivo es crear una representación de cadena de un patrón de tablero de ajedrez alternando dos símbolos, "simboloUno" y "simboloDos", para cada cuadrado en el tablero.</p>
   
<p>La función primero verifica si los parámetros de entrada son válidos, es decir, si "filas" es un número y "simboloUno" y "simboloDos" son cadenas. Si alguno de los parámetros no es válido, devuelve un mensaje de error y sale de la función.</p>  
    
<p>Luego, establece valores predeterminados para "filas", "simboloUno" y "simboloDos" si no se proporcionaron. El valor predeterminado para "filas" es 8, mientras que los valores predeterminados para "simboloUno" y "simboloDos" son dos caracteres Unicode que representan un cuadrado negro y un cuadrado blanco, respectivamente.</p>  

<p>A continuación, la función verifica si ha llegado al final del tablero de ajedrez (es decir, si "filaActual" es mayor que "filas"). Si es así, devuelve una cadena vacía y sale de la función.</p>

<p>Si no se ha alcanzado el final del tablero de ajedrez, la función crea una cadena "simbolo" agregando "simboloUno" y "simboloDos" alternativamente "filas / 2" veces (ya que cada fila consta de "filas / 2" pares de símbolos).</p>

<p>Luego agrega un carácter de nueva línea a la cadena "simbolo" y realiza una llamada recursiva a la función "chess", intercambiando "simboloUno" y "simboloDos" y aumentando "filaActual" en 1.</p>  
    
<p>Finalmente, devuelve la cadena "simbolo", que contiene todo el patrón del tablero de ajedrez. La última línea de código invoca la función "chess" con "filas" establecidas en 8 y "simboloUno" y "simboloDos" establecidos en los caracteres Unicode que representan cuadrados negros y blancos, respectivamente, y registra el patrón resultante del tablero de ajedrez en la consola.</p> 

<b><p>* Texto escrito con la ayuda de un traductor. Si encuentras un error, por favor avísanos *</p></b>
    
    <div className='ads-container'>  
      {/*  реклама  */}
      </div>
    </div>
  )
}

export default EsJSEs5_10;