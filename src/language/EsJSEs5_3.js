import React from 'react';

function EsJSEs5_3() {
  return (
    <div>
       <div className='ad-container'>  
          {/*  реклама  */}
        </div>
      
      <h3>Concepto de Función</h3>
      
      <p>Una función es un bloque de código que puede ser definido y ejecutado en un momento posterior. Se utiliza para realizar una tarea específica, y puede ser llamado desde cualquier parte del programa donde sea accesible. Las funciones hacen que el código sea más organizado, reutilizable y más fácil de entender.</p>
            
      <h3>Creación de una Función</h3>
            
      <p>En JavaScript ES5, una función puede ser creada usando la palabra clave function, seguida del nombre de la función y un conjunto de paréntesis. Dentro de los paréntesis, podemos definir uno o más parámetros, y dentro de las llaves, definimos el código que se ejecutará cuando se llame a la función.</p>
           
      <p><b>Ejemplo:</b></p>
            
      <code>
        <p><span className='blueviole'>function </span><span className='blue'>suma</span>(<span className='blue'>a</span>,<span className='blue'> b</span>) {'{'} </p>  
      
        <p><span className='blueviole'>return</span> a + b;</p>  
      
        <p>{'}'}</p>  
      </code>
            
      
      <p><b>Argumentos de la Función:</b></p>
      
      <p>Los argumentos de la función son los valores que se pasan a una función cuando se llama. Podemos definir uno o más parámetros dentro de los paréntesis al crear una función. Cuando se llama a la función, pasamos los valores reales como argumentos.</p>
      
      <p><b>Ejemplo:</b></p>
       
      <code>
        <p><span className='blueviole'>function </span><span className='blue'>suma</span>(<span className='blue'>a</span>,<span className='blue'> b</span>) {'{'} </p>  
      
        <p><span className='blueviole'>return</span> a + b;</p>  
      
        <p>{'}'}</p>  
      
        <p><span className='blueviole'>var</span> <span className='blue'>resultado</span> = suma(<span className='blue'>5</span>, <span className='blue'>10</span>);</p>
      
        <p> <span className='darkgreen'>// Salida: 15</span></p>
      </code>
      
       <p><b>Ámbitos de Variables:</b></p>
      
      <p>Las variables pueden tener diferentes ámbitos dependiendo de dónde se declaren. Aquí hay un ejemplo de una variable declarada dentro de una función, que no es accesible fuera de esa función:</p>
        
        <p><b>Ejemplo:</b></p>
        
      <code>
        <p><span className='blueviole'>function</span> <span className='blue'>mostrarMensaje</span>() {'{'} </p>
      
        <p><span className='blueviole'>var</span> <span className='blue'>mensaje</span> = <span className='red'>'¡Hola, Mundo!'</span>;</p>
      
        <p>{"console.log(mensaje);"}</p>
      
        <p>{"} "}</p>
      
        <p>mostrarMensaje(); <span className='darkgreen'>//Salida:¡Hola, Mundo!</span> </p>
      
        <p>{" console.log(mensaje); "} <span className='darkgreen'>//Salida: Uncaught ReferenceError: mensaje no está definido</span></p>
      </code>
      
      <p><b>Expresiones de Función:</b></p>
      
      <p>Una expresión de función es una función que se asigna a una variable. Aquí tienes un ejemplo:</p>
       
      <code>
        <p><span className='blueviole'>var</span> <span className='blue'>multiplicar</span> = <span className='blueviole'>function</span>(<span className='blue'>a</span>, <span className='blue'>b</span>) {'{'}</p>
      
        <p><span className='blueviole'>return</span> a * b ;</p>
      
        <p>{'}'}</p>
      
        <p><span className='blueviole'>var</span> <span className='blueviole'>resultado</span> = multiplicar(<span className='blue'>3</span>, <span className='blue'>4</span>);</p>
      
        <p>{'console.log(resultado);'} <span className='darkgreen'>// Salida: 12</span></p>
      </code>
      
      <p><b>Funciones Anónimas:</b></p>
      
      <p>Una función anónima es una función sin nombre. Aquí tienes un ejemplo de una función anónima que se invoca inmediatamente:</p>
        
      <code>
        <p>{'('}<span className='blueviole'>function</span>() {'{'}</p>
      
        <p>{'console.log'}(<span className='red'>"¡Hola, Mundo!"</span>);</p>
      
        <p>{'})();'}</p>
       </code>
      
      <p><b>Clausuras</b></p>
      
      <p>Las clausuras son una característica de JavaScript que permite que una función acceda y manipule variables que están fuera de su propio ámbito. En otras palabras, una clausura se forma cuando una función se define dentro de otra función y tiene acceso a las variables de la función padre. Aquí tienes un ejemplo de una clausura en JavaScript ES5:</p>
       
      <code>
        <p><span className='blueviole'>function</span> <span className='blue'>funcionExterna</span>() {'{'}</p>
      
        <p><span className='blueviole'>var</span> <span className='blue'>variableExterna</span> = <span className='red'>"¡Estoy fuera!"</span>;</p>
      
        <p><span className='blueviole'>function</span> <span className='blue'>funcionInterna</span>() {'{'}</p> 
      
        <p>{'console.log(variableExterna);'}</p>
      
        <p>{'}'}</p>
      
        <p><span className='blueviole'>return </span>funcionInterna;</p>
      
        <p>{'}'}</p>
      
        <p><span className='blueviole'>var</span> <span className='blue'>ejemploClausura</span> = funcionExterna();</p>
      
        <p>ejemploClausura(); <span className='darkgreen'>// Salida: "¡Estoy fuera!"</span></p>
      </code>
       
      <p>En este ejemplo, la funciónExterna define una variable variableExterna y una función funcionInterna que registra el valor de variableExterna. La funcionInterna se devuelve de la funciónExterna y se asigna a la variable ejemploClausura. Cuando se llama a ejemploClausura(), registra el valor de variableExterna, que es "¡Estoy fuera!". Esto es posible porque funcionInterna tiene acceso a variableExterna a través de una clausura, aunque variableExterna no está definida dentro de funcionInterna. Este es solo un ejemplo simple de clausuras en JavaScript ES5, pero demuestra cuán poderosas y útiles pueden ser. Las clausuras se utilizan a menudo para crear variables y métodos privados en JavaScript, entre otras cosas.</p>
      
    <b><p>* Texto escrito con la ayuda de un traductor. Si encuentras un error, por favor avísanos *</p></b>
    
    <div className='ads-container'>  
      {/*  реклама  */}
      </div>
    </div>
  )
}

export default EsJSEs5_3;