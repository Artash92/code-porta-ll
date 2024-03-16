import React from 'react';

function EsReact_10() {
  return (
    <div>
      <div className='ad-container'>  
          {/*  реклама  */}
        </div>

      <h2>Errores HTTP</h2>

{/* Respuestas informativas (100 – 199) */}
 
  <h3>Respuestas informativas (100 – 199)</h3>
  <p>
    <strong>100 Continuar:</strong> El servidor ha recibido los encabezados de la solicitud y el cliente debería proceder a enviar el cuerpo de la solicitud (en el caso de una solicitud para la cual se necesita enviar un cuerpo; por ejemplo, una solicitud POST).
  </p>
  <p>
    <strong>101 Cambio de protocolo:</strong> El solicitante ha pedido al servidor cambiar de protocolo y el servidor ha aceptado hacerlo.
  </p>
  <p>
    <strong>102 Procesando:</strong> El servidor ha recibido y está procesando la solicitud, pero aún no hay una respuesta disponible.
  </p>
  <p>
    <strong>103 Indicaciones anticipadas:</strong> Indica al cliente que es probable que el servidor envíe una respuesta final con los campos de encabezado incluidos en la respuesta informativa.
  </p>
 

{/* Respuestas exitosas (200 – 299) */}
 
  <h3>Respuestas exitosas (200 – 299)</h3>
  <p>
    <strong>200 OK:</strong> La solicitud ha tenido éxito. La información devuelta con la respuesta depende del método utilizado en la solicitud.
  </p>
  <p>
    <strong>201 Creado:</strong> La solicitud se ha cumplido, lo que resulta en la creación de un nuevo recurso.
  </p>
  <p>
    <strong>202 Aceptado:</strong> La solicitud ha sido aceptada para su procesamiento, pero el procesamiento no se ha completado.
  </p>
  <p>
    <strong>203 Información no autorizada:</strong> El servidor procesó correctamente la solicitud, pero está devolviendo información que puede ser de otra fuente.
  </p>
  <p>
    <strong>204 Sin contenido:</strong> El servidor procesó correctamente la solicitud y no está devolviendo ningún contenido.
  </p>
  <p>
    <strong>205 Restablecer contenido:</strong> El servidor procesó correctamente la solicitud, pero no está devolviendo ningún contenido. El cliente debe restablecer la vista del documento.
  </p>
  <p>
    <strong>206 Contenido parcial:</strong> El servidor está entregando solo una parte del recurso debido a un encabezado de rango enviado por el cliente.
  </p>
  <p>
    <strong>207 Estado múltiple:</strong> Una respuesta de Estado Múltiple transmite información sobre múltiples recursos en situaciones donde múltiples códigos de estado podrían ser apropiados.
  </p>
 

{/* Mensajes de redirección (300 – 399) */}

  <h3>Mensajes de redirección (300 – 399)</h3>
  <p>
    <strong>300 Múltiples opciones:</strong> El recurso solicitado tiene múltiples opciones, cada una con diferentes atributos y respuestas.
  </p>
  <p>
    <strong>301 Movido permanentemente:</strong> El recurso solicitado se ha movido permanentemente a una nueva URL, y cualquier referencia futura a este recurso debe usar una de las URL devueltas.
  </p>
  <p>
    <strong>302 Encontrado:</strong> El recurso solicitado reside temporalmente bajo un URI diferente.
  </p>
  <p>
    <strong>303 Ver otro:</strong> La respuesta a la solicitud se puede encontrar bajo un URI diferente y debe recuperarse utilizando un método GET en ese recurso.
  </p>
  <p>
    <strong>304 No modificado:</strong> Indica que el recurso no ha sido modificado desde la versión especificada por los encabezados de solicitud If-Modified-Since o If-None-Match. En tal caso, no hay necesidad de retransmitir el recurso ya que el cliente aún tiene una copia previamente descargada.
  </p>
  <p>
    <strong>305 Usar proxy:</strong> El recurso solicitado debe accederse a través del proxy dado por el campo de ubicación.
  </p>
  <p>
    <strong>307 Redirección temporal:</strong> El recurso solicitado reside temporalmente bajo un URI diferente.
  </p>
  <p>
    <strong>308 Redirección permanente:</strong> El recurso solicitado se ha movido permanentemente a otro URI, y el cliente debe actualizar todas las referencias a este nuevo URI.
  </p>
 

{/* Respuestas de error del cliente (400 – 499) */}
 
  <h3>Respuestas de error del cliente (400 – 499)</h3>
  <p>
    <strong>400 Solicitud incorrecta:</strong> El servidor no puede procesar la solicitud debido a un error del cliente (por ejemplo, sintaxis incorrecta, tamaño demasiado grande, estructura de mensaje de solicitud no válida o enrutamiento de solicitud engañoso).
  </p>
  <p>
    <strong>401 No autorizado:</strong> Similar al 403 Prohibido, pero específicamente para su uso cuando se requiere autenticación y ha fallado o aún no se ha proporcionado.
  </p>
  <p>
    <strong>402 Pago requerido:</strong> Reservado para uso futuro.
  </p>
  <p>
    <strong>403 Prohibido:</strong> El cliente no tiene permiso para acceder al recurso solicitado.
  </p>
  <p>
    <strong>404 No encontrado:</strong> El servidor no puede encontrar el recurso solicitado.
  </p>
  <p>
    <strong>405 Método no permitido:</strong> El método recibido en la línea de solicitud es conocido por el servidor de origen pero no es compatible con el recurso de destino.
  </p>
  <p>
    <strong>406 No aceptable:</strong> El recurso de destino no tiene una representación actual que sería aceptable para el agente de usuario, según los campos de encabezado de negociación proactiva recibidos en la solicitud.
  </p>
  <p>
    <strong>407 Se requiere autenticación de proxy:</strong> El cliente primero debe autenticarse con el proxy.
  </p>
  <p>
    <strong>408 Tiempo de espera de la solicitud:</strong> El cliente no produjo una solicitud dentro del tiempo que el servidor estaba preparado para esperar.
  </p>
  <p>
    <strong>409 Conflicto:</strong> La solicitud no pudo completarse debido a un conflicto con el estado actual del recurso de destino.
  </p>
  <p>
    <strong>410 Desaparecido:</strong> Indica que el recurso de destino ya no está disponible en el servidor y no se conoce ninguna dirección de reenvío.
  </p>
  <p>
    <strong>411 Longitud requerida:</strong> El servidor se niega a aceptar la solicitud sin una longitud de contenido definida.
  </p>
  <p>
    <strong>412 Falló la precondición:</strong> Una o más condiciones dadas en los campos de encabezado de solicitud evaluadas como falsas al ser probadas en el servidor.
  </p>
  <p>
    <strong>413 Carga útil demasiado grande:</strong> El servidor se niega a procesar una solicitud porque la carga útil de la solicitud es más grande de lo que el servidor está dispuesto o puede procesar.
  </p>
  <p>
    <strong>414 URI demasiado largo:</strong> El servidor se niega a atender la solicitud porque el destino de la solicitud es más largo de lo que el servidor está dispuesto a interpretar.
  </p>
  <p>
    <strong>415 Tipo de medio no soportado:</strong> El servidor de origen se niega a atender la solicitud porque el formato de carga útil está en un formato no compatible.
  </p>
  <p>
    <strong>416 Rango no satisfactorio:</strong> El cliente ha pedido una parte del archivo (servicio de bytes), pero el servidor no puede suministrar esa parte.
  </p>
  <p>
    <strong>417 Falló la expectativa:</strong> El servidor no puede cumplir con los requisitos del campo de encabezado de solicitud Expect.
  </p>
  <p>
    <strong>418 Soy una tetera:</strong> Cualquier intento de preparar café con una tetera debería resultar en el código de error "418 Soy una tetera".
  </p>
  <p>
    <strong>420 Mejora tu calma:</strong> Devuelto por la API de búsqueda y tendencias de Twitter cuando el cliente está siendo limitado por la velocidad.
  </p>
  <p>
    <strong>421 Solicitud mal dirigida:</strong> La solicitud fue dirigida a un servidor que no puede producir una respuesta.
  </p>
  <p>
    <strong>422 Entidad no procesable:</strong> La solicitud estaba bien formada pero no pudo seguirse debido a errores semánticos.
  </p>
  <p>
    <strong>423 Bloqueado:</strong> El recurso que se está accediendo está bloqueado.
  </p>
  <p>
    <strong>425 Demasiado temprano:</strong> Indica que el servidor no está dispuesto a arriesgarse a procesar una solicitud que podría repetirse.
  </p>
  <p>
    <strong>426 Se requiere actualización:</strong> El servidor se niega a realizar la solicitud utilizando el protocolo actual pero podría estar dispuesto a hacerlo después de que el cliente se actualice a un protocolo diferente.
  </p>
  <p>
    <strong>428 Se requiere precondición:</strong> El servidor de origen requiere que la solicitud sea condicional.
  </p>
  <p>
    <strong>429 Demasiadas solicitudes:</strong> El usuario ha enviado demasiadas solicitudes en un período de tiempo determinado.
  </p>
 

{/* Respuestas de error del servidor (500 – 599) */}
 
  <h3>Respuestas de error del servidor (500 – 599)</h3>
  <p>
    <strong>500 Error interno del servidor:</strong> Un mensaje de error genérico, dado cuando se encuentra una condición inesperada y no hay un mensaje más específico adecuado. Este es un error muy general que puede ser causado por una amplia gama de problemas en el lado del servidor.
  </p>
  <p>
    <strong>501 No implementado:</strong> El servidor no reconoce el método de solicitud o le falta la capacidad para cumplir con la solicitud.
  </p>
  <p>
    <strong>502 Puerta de enlace incorrecta:</strong> El servidor, mientras actúa como una puerta de enlace o proxy, recibió una respuesta no válida del servidor ascendente al que accedió al intentar cumplir con la solicitud.
  </p>
  <p>
    <strong>503 Servicio no disponible:</strong> El servidor no puede manejar la solicitud en este momento debido a una sobrecarga temporal o mantenimiento del servidor.
  </p>
  <p>
    <strong>504 Tiempo de espera de la puerta de enlace:</strong> El servidor, mientras actúa como una puerta de enlace o proxy, no recibió una respuesta oportuna del servidor ascendente especificado por el URI o algún otro servidor auxiliar que necesitaba acceder para completar la solicitud.
  </p>
  <p>
    <strong>505 Versión de HTTP no compatible:</strong> El servidor no soporta, o se niega a soportar, la versión principal de HTTP que se utilizó en el mensaje de solicitud.
  </p>
  <p>
    <strong>506 Variante también negocia:</strong> El servidor tiene un error de configuración interna: el recurso de variante elegido está configurado para participar en la negociación de contenido transparente por sí mismo y, por lo tanto, no es un punto final adecuado en el proceso de negociación.
  </p>
  <p>
    <strong>507 Almacenamiento insuficiente:</strong> El servidor no puede almacenar la representación necesaria para completar la solicitud.
  </p>
  <p>
    <strong>508 Detectado bucle:</strong> El servidor detectó un bucle infinito mientras procesaba la solicitud.
  </p>
  <p>
    <strong>510 No extendido:</strong> Se requieren extensiones adicionales para la solicitud para que el servidor la cumpla.
  </p>
  <p>
    <strong>511 Se requiere autenticación de red:</strong> El cliente necesita autenticarse para obtener acceso a la red.
  </p>

<b><p>* Texto escrito con la ayuda de un traductor. Si encuentras un error, por favor avísanos *</p></b>
    <div className='ads-container'>  
  {/*  реклама  */}
</div>
    </div>
  )
}

export default EsReact_10;