import React from 'react';

function EsJSEs5_8() {
  return (
    <div>
      <div className='ad-container'>  
          {/*  реклама  */}
        </div>
    
    <h4>Fecha - objeto</h4>

<p>En JavaScript, el objeto Date se utiliza para trabajar con fechas y horas. Permite crear, manipular y formatear fechas y horas de diversas formas. El objeto Date representa un único momento en el tiempo y se inicializa con la fecha y hora actual de forma predeterminada.</p>

<p>Aquí tienes algunos ejemplos de cómo usar el objeto Date en JavaScript:</p>

<p>1. Crear un objeto Date con una fecha y hora específicas:</p>

<code>
  <p><span className='blueviole'>var</span> <span className='blue'>fecha</span> = <span className='blueviole'>new</span> Date(<span className='blue'>2022, 0, 1, 12, 0, 0</span>);</p>

  <p>{'console.log(fecha);'} <span className='green'>// Sáb Ene 01 2022 12:00:00 GMT+0200 (hora estándar de Europa del Este)</span></p>
</code>

<p>En este ejemplo, se crea un nuevo objeto Date con el año especificado (2022), el mes (0 para enero), el día (1), la hora (12), el minuto (0) y el segundo (0). La salida muestra la fecha y hora resultantes en un formato legible para humanos.</p>

<p>2. Crear un objeto Date con la fecha y hora actuales:</p>

<code>
  <p><span className='blueviole'>var</span> <span className='blue'>fecha</span> = <span className='blueviole'>new</span> Date(); </p>

  <p>{'console.log(fecha);'}<span className='green'>// Sáb Mar 27 2023 13:28:17 GMT+0200 (hora estándar de Europa del Este)</span></p>
</code>

<p>En este ejemplo, se crea un nuevo objeto Date con la fecha y hora actuales. La salida muestra la fecha y hora resultantes en un formato legible para humanos.</p>

<p>3. Obtener el año, mes y día actuales:</p>

<code>
  <p><span className='blueviole'>var</span> <span className='blue'>fecha</span> = <span className='blueviole'>new</span> Date();</p>

  <p><span className='blueviole'>var</span> <span className='blue'>año</span> = fecha.getFullYear();</p>

  <p><span className='blueviole'>var</span> <span className='blue'>mes</span> = fecha.getMonth();</p>

  <p><span className='blueviole'>var</span> <span className='blue'>día</span> = fecha.getDate();</p>

  <p>{'console.log'}(año + <span className='red'>"-"</span> + mes + <span className='red'>"-"</span> + día); <span className='green'></span></p>
</code>

<p>En este ejemplo, se crea un nuevo objeto Date con la fecha y hora actuales. Luego, se utilizan los métodos getFullYear(), getMonth() y getDate() para extraer el año, el mes (donde 0 representa enero) y el día del objeto Date. La salida muestra la fecha resultante en una cadena formateada.</p>

<p>4. Convertir una fecha a una cadena:</p>

<code>
  <p><span className='blueviole'>var</span> <span className='blue'>fecha</span> = <span className='blueviole'>new</span> Date();</p>

  <p><span className='blueviole'>var</span> <span className='blue'>cadenaFecha</span> = fecha.toDateString(); </p>

  <p>{'console.log'}(cadenaFecha); <span className='green'>// Sáb May 30 2023</span></p>
</code>

<p>En este ejemplo, se crea un nuevo objeto Date con la fecha y hora actuales. Luego, se utiliza el método toDateString() para convertir la fecha a un formato legible para humanos. La salida muestra la representación de cadena resultante de la fecha.</p>

<p>Estos son solo algunos ejemplos de las muchas formas en que puedes usar el objeto Date en JavaScript para trabajar con fechas y horas.</p>

<p><b>Error - objeto</b></p>

<p>En JavaScript, se utiliza un objeto Error para representar errores en tiempo de ejecución. Cuando ocurre un error en un programa, JavaScript genera un objeto Error y lo lanza. El objeto Error contiene información sobre el error, como el mensaje de error y el nombre del error.</p>

<p>Aquí tienes un ejemplo de cómo usar un bloque try-catch para atrapar un ReferenceError:</p>

<code>
  <p><span className='blueviole'>try </span>{'{'}</p>

  <p>{'console.log(variable);'}</p>

  <p>{'}'} <span className='blueviole'>catch</span>(<span className='blue'>err</span>) {'{'}</p>

  <p>{'console.log(err);'} <span className='green'>// ReferenceError: variable no está definida</span></p>

  <p>{'console.log(err.name);'} <span className='green'>// ReferenceError</span></p>

  <p>{' console.log(err.message);'} <span className='green'>// variable no está definida</span></p>

  <p>{'}'}</p>
</code>

<p>En este ejemplo, el bloque try intenta registrar una variable que no ha sido definida, lo que resulta en un ReferenceError. El bloque catch captura el error y registra el objeto de error junto con sus propiedades de nombre y mensaje.</p>

<p>Aquí tienes otro ejemplo de cómo usar un bloque try-catch para lanzar un objeto Error personalizado:</p>

<code>
  <p><span className='blueviole'>var</span> <span className='blue'>num1</span> = <span className='blue'>10</span>;</p>

  <p><span className='blueviole'>var</span> <span className='blue'>num2</span> = <span className='blue'>0</span>; </p>

  <p><span className='blueviole'>try</span> {'{'}</p>

  <p><span className='blueviole'>if</span> (num2 == <span className='blue'>0</span>) {'{'}</p>

  <p><span className='blueviole'>throw new</span> Error(<span className='red'>"No se puede dividir por cero."</span>);</p>

  <p>{'}'}</p>

  <p>{'console.log(num1 / num2);'}</p>

  <p>{'}'} <span className='blueviole'>catch</span> (<span className='blue'>err</span>) {'{'}</p>

  <p>{' console.log'}(err.name, <span className='red'>" : "</span>, err.message) ; </p>

  <p>{'}'}</p>
</code>

<p>En este ejemplo, el bloque try intenta dividir num1 entre num2. Si num2 es cero, se lanza un nuevo objeto Error con un mensaje de error personalizado. El bloque catch captura el error y registra el objeto de error junto con sus propiedades de nombre y mensaje.</p>

<p>Usar objetos Error y bloques try-catch es una parte importante del manejo de errores en tiempo de ejecución en los programas JavaScript. Permite a los desarrolladores manejar los errores con elegancia y proporcionar comentarios útiles a los usuarios.</p>

<b><p>* Texto escrito con la ayuda de un traductor. Si encuentras un error, por favor avísanos *</p></b>
    
    <div className='ads-container'>  
      {/*  реклама  */}
      </div>
    </div>
  )
}

export default EsJSEs5_8;