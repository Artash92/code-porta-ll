import React from 'react';

function EsJSEs5_7() {
  return (
    <div>
      <div className='ad-container'>  
          {/*  реклама  */}
        </div>

      <h1>Programación Orientada a Objetos, o POO</h1>

<p>La Programación Orientada a Objetos, o POO, es un paradigma de programación que enfatiza objetos, clases y encapsulación. En JavaScript ES5, la POO se implementa mediante el uso de funciones constructoras y prototipos.</p>

<p>Una función constructora es una función especial que se utiliza para crear e inicializar objetos. Las funciones constructoras se definen utilizando la palabra clave function, y sus nombres suelen comenzar con una letra mayúscula para distinguirlas de las funciones regulares. La palabra clave this se utiliza dentro de la función constructora para hacer referencia al objeto que se está creando. Aquí tienes un ejemplo:</p>

<code>
  <p><span className='blueviole'>function</span> <span className='blue'>Persona</span>(<span className='blue'>nombre, edad</span>) {'{'}</p>

  <p><span className='blueviole'>this</span>.nombre = nombre;</p>

  <p><span className='blueviole'>this</span>.edad = edad;</p>

  <p>{'}'}</p>

  <p><span className='blueviole'>var</span> <span className='blue'>persona1</span> = <span className='blueviole'>new</span> Persona(<span className='red'>"Alice"</span>, <span className='blue'>25</span>);</p>

  <p><span className='blueviole'>var</span> <span className='blue'>persona2</span> = <span className='blueviole'>new</span> Persona(<span className='red'>"Bob"</span>, <span className='blue'>30</span>);</p>

  <p>{'console.log'}(persona1.nombre); <span className='darkgreen'>// "Alice"</span></p>

  <p>{'console.log'}(persona2.edad); <span className='darkgreen'>// 30</span></p>
</code>

<p>En este ejemplo, la función Persona se utiliza como una función constructora para crear dos objetos Persona, persona1 y persona2. Las propiedades nombre y edad se establecen utilizando la palabra clave this dentro de la función constructora.</p>

<p>Además de las funciones constructoras, los prototipos se utilizan para implementar la herencia y compartir métodos y propiedades entre objetos. Cada objeto en JavaScript tiene un prototipo, que es otro objeto del cual hereda el objeto. Las propiedades y métodos se pueden agregar al prototipo de un objeto utilizando la propiedad prototype. Aquí tienes un ejemplo:</p>

<code>
  <p><span className='blueviole'>function</span> <span className='blue'>Persona</span>(<span className='blue'>nombre, edad</span>) {'{'}</p>

  <p><span className='blueviole'>this</span>.nombre = nombre</p>

  <p><span className='blueviole'>this</span>.edad = edad;</p>

  <p>{'}'}</p>

  <p>Persona.prototype.saludar = <span className='blueviole'>function</span>() {'{'}</p>

  <p>{'console.log'}(<span className='red'>"¡Hola, mi nombre es "</span> + <span className='blueviole'>this</span>.nombre + <span className='red'>" y tengo "</span> + <span className='blueviole'>this</span>.edad + <span className='red'>" años."</span>);</p>

  <p>{'}'}</p>

  <p><span className='blueviole'>var</span> <span className='blue'>persona1</span> = <span className='blueviole'>new</span> <span className='blue'>Persona</span>(<span className='red'>"Alice"</span>, <span className='blue'>25</span>);</p>

  <p><span className='blueviole'>var</span> <span className='blue'>persona2</span> = <span className='blueviole'>new</span> <span className='blue'>Persona</span>(<span className='red'>"Bob"</span>, <span className='blue'>30</span>);</p>

  <p>persona1.saludar(); <span className='darkgreen'>// "¡Hola, mi nombre es Alice y tengo 25 años."</span></p>

  <p>persona2.saludar(); <span className='darkgreen'>// "¡Hola, mi nombre es Bob y tengo 30 años."</span></p>
</code>

<p>En este ejemplo, se agrega un método saludar al prototipo de Persona utilizando la propiedad prototype. Este método luego puede ser llamado en cualquier objeto Persona, como se demuestra en las llamadas persona1.saludar() y persona2.saludar(). </p>

<p>Otro concepto de POO en JavaScript ES5 es la encapsulación, que se refiere a la práctica de ocultar los detalles de implementación y exponer solo las interfaces necesarias al mundo exterior. Esto se puede lograr utilizando clausuras, que permiten que las funciones accedan a variables en su ámbito externo incluso después de que la función externa haya retornado. Aquí tienes un ejemplo: </p>
 
<code>
  <p><span className='blueviole'>function</span> <span className='blue'>Contador</span>() {'{'}</p>

  <p><span className='blueviole'>var</span> <span className='blue'>cuenta</span> = <span className='blue'>0</span>;</p>

  <p><span className='blueviole'>this</span>.incrementar = <span className='blueviole'>function</span>() {'{'}</p>

  <p>cuenta++;</p>

  <p> console.log(cuenta);</p>

  <p>{'};'}</p>

  <p><span className='blueviole'>this</span>.decrementar = <span className='blueviole'>function</span>() {'{'}</p>

  <p>cuenta--;</p>

  <p>console.log(cuenta);</p>

  <p>{'};'}</p>

  <p>{'}'}</p>

  <p><span className='blueviole'>var</span> <span className='blue'>contador1</span> = <span className='blueviole'>new</span> Contador();</p>

  <p><span className='blueviole'>var</span> <span className='blue'>contador2</span> = <span className='blueviole'>new</span> Contador();</p>

  <p>contador1.incrementar(); <span className='darkgreen'>// 1</span></p>

  <p>contador1.incrementar(); <span className='darkgreen'>// 2</span></p>

  <p>contador1.decrementar(); <span className='darkgreen'>// 1</span></p>

  <p>contador2.incrementar(); <span className='darkgreen'>// 1</span></p>
</code>

<p>En este ejemplo, la función constructora Contador crea objetos con métodos incrementar y decrementar, que acceden a una variable privada cuenta utilizando clausuras. Esto asegura que la variable cuenta esté oculta para el mundo exterior y solo se pueda acceder a través de los métodos proporcionados por el objeto Contador. </p>

<p><b>Programación Orientada a Objetos (POO) con valores primitivos en JavaScript ES5</b></p>

<code>
  <p><span className='blueviole'>function</span> <span className='blue'>Persona</span>(<span className='blue'>nombre, edad, género</span>) {'{'}</p>

  <p><span className='blueviole'>this</span>.nombre = nombre;</p>

  <p><span className='blueviole'>this</span>.edad = edad;</p>

  <p><span className='blueviole'>this</span>.género = género;</p>

  <p> <span className='blueviole'>this</span>.imprimirDetalles = <span className='blueviole'>function</span>() {'{'}</p>

  <p>{'console.log'}(<span className='red'>"Nombre: "</span> + <span className='blueviole'>this</span>.nombre);</p>

  <p>{'console.log'}(<span className='red'>"Edad: "</span> + <span className='blueviole'>this</span>.edad);</p>

  <p>{'console.log'}(<span className='red'>"Género: "</span> + <span className='blueviole'>this</span>.género);</p>

  <p>{'}'}</p>

  <p>{'}'}</p>

  <p><span className='blueviole'>var</span> <span className='blue'>persona1</span> = <span className='blueviole'>new</span> Persona(<span className='red'>"John"</span>, <span className='blue'>25</span>, <span className='red'>"masculino"</span>); </p>

  <p><span className='blueviole'>var</span> <span className='blue'>persona2</span> = <span className='blueviole'>new</span> Persona(<span className='red'>"Jane"</span>, <span className='blue'>30</span>, <span className='red'>"femenino"</span>); </p>

  <p>{'persona1.imprimirDetalles();'}</p>

  <p>{'persona2.imprimirDetalles();'}</p>

  <p><span className='blueviole'>var</span> <span className='blue'>bool</span> = <span className='blueviole'>new</span> Boolean(<span className='blue'>true</span>);</p>

  <p>{'console.log'}(bool.valueOf()); <span className='darkgreen'> // true</span></p>

  <p><span className='blueviole'>var</span> <span className='blue'>str</span> = <span className='blueviole'>new</span> String(<span className='red'>"Hola"</span>); </p>

  <p>{'console.log'}(str.concat(<span className='red'>" Mundo"</span>)); <span className='darkgreen'>// "Hola Mundo"</span></p>

  <p><span className='blueviole'>var</span> <span className='blue'>num</span> = <span className='blueviole'>new</span> Number(<span className='blue'>10</span>);</p>

  <p>{'console.log'}(num.valueOf() + <span className='blue'>5</span>); <span className='darkgreen'>// 15</span></p>
</code>

<p>En este ejemplo, definimos una función constructora Persona para crear objetos de persona con propiedades de nombre, edad y género. También definimos un método printDetails en el objeto Persona para imprimir los detalles de la persona.</p>

<p>Luego creamos dos objetos Persona utilizando la función constructora y llamamos al método printDetails para cada objeto.</p>

<p>A continuación, creamos objetos Boolean, String y Number utilizando sus respectivas funciones constructoras y demostramos algunos de sus métodos, como valueOf, concat y operaciones aritméticas básicas.</p>

<p><b>En JavaScript ES5, podemos crear objetos utilizando las funciones constructoras Object y Array. Esto es una forma de creación de objetos basada en constructores.</b></p>

<p>Para crear un objeto utilizando una función constructora, utilizamos la palabra clave new seguida del nombre de la función. Por ejemplo, para crear un objeto utilizando la función constructora Object, podemos hacer lo siguiente:</p>

<code>
  <p> <span className='blueviole'>var</span> <span className='blue'>persona</span> = <span className='blueviole'>new</span> Object(); </p>

  <p> persona.nombre = <span className='red'>"John"</span>; </p>

  <p>persona.edad = <span className='blue'>30</span>;</p>

  <p>persona.trabajo = <span className='red'>"Desarrollador"</span>;</p>
</code>

<p>En el ejemplo anterior, creamos un nuevo objeto persona utilizando la función constructora Object. Luego agregamos propiedades a este objeto utilizando la notación de punto.</p>

<p>De manera similar, podemos crear un array utilizando la función constructora Array:</p>

<code>
  <p><span className='blueviole'>var</span> <span className='blue'>arr</span> = [];</p>

  <p>arr.push(<span className='blue'>1</span>);</p>

  <p>arr.push(<span className='blue'>2</span>);</p>

  <p>arr.push(<span className='blue'>3</span>);</p>

  <p>console.log(arr); <span className='darkgreen'>// [1, 2, 3]</span></p>
</code>

<p>En el ejemplo anterior, creamos un nuevo array arr utilizando la función constructora Array. Luego agregamos elementos a este array utilizando el método push.</p>

<p>La creación de objetos basada en constructores es útil cuando necesitamos crear múltiples objetos del mismo tipo. Podemos definir una función constructora que establezca los valores iniciales de las propiedades del objeto y luego crear nuevos objetos utilizando este constructor.</p>

<p>Por ejemplo, supongamos que queremos crear objetos que representen autos. Podemos definir una función constructora de la siguiente manera:</p>

<code>
  <p><span className='blueviole'>function</span> <span className='blue'>Auto</span>(<span className='blue'>marca, modelo, año</span>) {'{'}</p>

  <p><span className='blueviole'>this</span>.marca = marca;</p>

  <p><span className='blueviole'>this</span>.modelo = modelo;</p>

  <p><span className='blueviole'>this</span>.año = año;</p>

  <p>{'}'}</p>

  <p><span className='blueviole'>var</span> <span className='blue'>auto1</span> = <span className='blueviole'>new</span> Auto(<span className='red'>"Honda"</span>, <span className='red'>"Civic"</span>, <span className='blue'>2020</span>);</p>


  <p><span className='blueviole'>var</span> <span className='blue'>auto2</span> = <span className='blueviole'>new</span> Auto(<span className='red'>"Toyota"</span>, <span className='red'>"Corolla"</span>, <span className='blue'>2021</span>);</p>
</code>

<p>En el ejemplo anterior, definimos una función constructora Auto que toma tres parámetros (marca, modelo y año) y establece las propiedades correspondientes del objeto utilizando la palabra clave this. Luego creamos dos objetos auto (auto1 y auto2) utilizando este constructor.</p>

<p><b>POO I new RegExp()</b></p>

<code>
  <p><span className='blueviole'>var</span> <span className='blue'>str</span> = <span className='red'>"¡Hola, mundo!"</span>;</p>

  <p><span className='blueviole'>var</span> <span className='blue'>expresionRegular</span> = <span className='blueviole'>new</span> RegExp(<span className='red'>'\\w', 'g'</span>);</p>

  <p><span className='blueviole'>var</span> <span className='blue'>coincidencias</span> = str.match(expresionRegular);</p>

  <p>{'console.log(coincidencias);'} <span className='darkgreen'>// ["H", "o", "l", "a", "m", "u", "n", "d", "o"]</span></p>
</code>

<p>En el ejemplo anterior, creamos una expresión regular que coincide con cualquier carácter de palabra (\w) y usamos la bandera g para realizar una búsqueda global. Luego usamos el método match() para encontrar todas las coincidencias en la cadena str. Finalmente, registramos el array de coincidencias en la consola.</p>

<p>Observa que necesitamos escapar el carácter de barra invertida al pasar el patrón de expresión regular como una cadena a la función constructora RegExp. Esto se debe a que el carácter de barra invertida se usa para escapar caracteres especiales en expresiones regulares, y necesitamos escaparlo también en la cadena.</p>

<p><b>Prototipo __proto__</b></p>

<p>La programación basada en prototipos es un concepto fundamental en JavaScript que permite a los objetos heredar propiedades y métodos de otros objetos. Cada objeto en JavaScript tiene un prototipo, que es otro objeto del cual hereda propiedades y métodos.</p>

<p>En ES5, puedes crear un prototipo utilizando el método Object.create(), que toma un objeto como parámetro y crea un nuevo objeto con su prototipo establecido en ese objeto. Luego puedes agregar propiedades y métodos al objeto prototipo, que serán heredados por cualquier objeto que se cree con él como su prototipo.</p>

<p>Aquí tienes un ejemplo de creación de un prototipo para un objeto Persona</p>

<code>
  <p><span className='blueviole'>var</span> prototipoPersona = {'{'}</p>

  <p>saludo: <span className='blueviole'>function</span>() {'{'}</p>

  <p>{'console.log'}(<span className='red'>"¡Hola, mi nombre es "</span> + <span className='blueviole'>this</span>.nombre);</p>

  <p>{'} ,'}</p>

  <p>despedida: <span className='blueviole'>function</span>() {'{'} </p>

  <p>{'console.log'}(<span className='red'>"¡Adiós!"</span>);</p>

  <p>{'}'}</p>

  <p>{'};'}</p>

  <p><span className='blueviole'>var</span> <span className='blue'>juan</span> = Object.create(prototipoPersona); </p>

  <p>juan.nombre = <span className='red'>"Juan"</span>;</p>

  <p>juan.saludo(); <span className='darkgreen'>// resultados: "¡Hola, mi nombre es Juan"</span></p>
</code>

<p>En este ejemplo, primero definimos un objeto prototipoPersona con un método saludo() y un método despedida(). Luego, creamos un nuevo objeto Persona juan llamando a Object.create(prototipoPersona) y configurando su propiedad nombre en "Juan". Dado que juan se crea con prototipoPersona como su prototipo, hereda el método saludo() del objeto prototipo y puede llamarlo utilizando juan.saludo().</p>

<p><b>instanceof</b></p>

<p>En JavaScript ES5, instanceof es un operador que se utiliza para verificar si un objeto pertenece a una clase específica o no. Devuelve un valor booleano que indica si un objeto es una instancia de una clase especificada o sus subclases.</p>

<p>La sintaxis de instanceof es la siguiente:</p>

<p>objeto instanceof constructor</p>

<p>Aquí, objeto es el nombre del objeto que se va a verificar y constructor es el nombre de la función constructora o la clase. El operador instanceof verifica la cadena de prototipos del objeto y devuelve true si el objeto es una instancia de la función constructora o la clase especificada, de lo contrario devuelve false.</p>

<p>Aquí tienes un ejemplo:</p>

<code>
  <p><span className='blueviole'>function</span> <span className='blue'>Animal</span>(<span className='blue'>nombre</span>) {'{'}</p>

  <p><span className='blueviole'>this</span>.nombre = nombre;</p>

  <p>{'}'}</p>

  <p><span className='blueviole'>function</span> <span className='blue'>Perro</span>(<span className='blue'>nombre</span>) {'{'}</p>

  <p>Animal.call(<span className='blueviole'>this</span>, nombre); </p>

  <p>{' }'}</p>

  <p>Perro.prototype = Object.create(Animal.prototype); </p>

  <p><span className='blueviole'>var</span> <span className='blue'>miPerro</span> = <span className='blueviole'>new</span> Perro(<span className='red'>"Buddy"</span>);</p>

  <p>{'console.log'}(miPerro instanceof Perro);  <span className='darkgreen'>// true</span></p>

  <p>{'console.log'}(miPerro instanceof Animal); <span className='darkgreen'>// true</span></p>
</code>

<p>En este ejemplo, definimos dos clases Animal y Perro. Perro hereda de Animal. Creamos un nuevo objeto Perro y verificamos si es una instancia tanto de Perro como de Animal utilizando el operador instanceof. Ambas comprobaciones devuelven true, porque miPerro es una instancia de ambas clases.</p>

<p>En resumen, instanceof se utiliza para determinar si un objeto es una instancia de una clase específica o de sus subclases verificando su cadena de prototipos.</p>

<b><p>* Texto escrito con la ayuda de un traductor. Si encuentras un error, por favor avísanos *</p></b>
    
    <div className='ads-container'>  
      {/*  реклама  */}
      </div>
    </div>
  )
}

export default EsJSEs5_7;