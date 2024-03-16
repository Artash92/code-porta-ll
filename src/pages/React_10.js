import React, { useState , useEffect } from 'react';
 import Wrapper from '../components/Wrapper';
 import RuReact_10 from '../language/RuReact_10';
import AmReact_10 from '../language/AmReact_10';
import FrReact_10 from '../language/FrReact_10';
import EsReact_10 from '../language/EsReact_10';
import PtReact_10 from '../language/PtReact_10';
import ItReact_10 from '../language/ItReact_10';
import NlReact_10 from '../language/NlReact_10';
import TjReact_10 from '../language/TjReact_10';
import ArReact_10 from '../language/ArReact_10';
import JpReact_10 from '../language/JpReact_10';
import InReact_10 from '../language/InReact_10';
import KoReact_10 from '../language/KoReact_10'; 

function React_10() {
  
  const [language, setLanguage] = useState('en'); 

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
  };
  
  useEffect(() => {
    switch (language) {
      case 'en':
        document.title = 'HTTP Errors | Informational responses (100 – 199) | Successful responses (200 – 299) | Redirection messages (300 – 399) | Client error responses (400 – 499) | 404 Not Found: The server cannot find the requested resource. | Server error responses (500 – 599) | 500 Internal Server Error: A generic error message, given when an unexpected condition was encountered and no more specific message is suitable. This is a very general error that can be caused by a wide range of issues on the server-side.';
        break;
      case 'ru':
        document.title = 'Ошибки HTTP | Информационные ответы (100 – 199) | Успешные ответы (200 – 299) | Сообщения о перенаправлении (300 – 399) | Ответы клиента с ошибкой (400 – 499) | 404 Не найдено: Сервер не может найти запрошенный ресурс. | Ответы сервера с ошибкой (500 – 599) | 500 Внутренняя ошибка сервера: Обобщенное сообщение об ошибке, предоставленное при встрече с неожиданным условием, и нет более конкретного сообщения, подходящего. Это очень общая ошибка, которая может быть вызвана широким спектром проблем на стороне сервера.';
        break;
      case 'am':
        document.title = 'HTTP սխալներ | Տեղեկատվական պատասխաններ (100 – 199) | Հաջողված պատասխաններ (200 – 299) | Վերահղման հաղորդագրություններ (300 – 399) | Սխալով պատասխանները հաճախորդին (400 - 499) | 404 Not Found. Սերվերը չի կարող գտնել պահանջվող ռեսուրսը: | Սերվերի պատասխանները սխալներով (500 – 599) | 500 Internal Server Error. Ընդհանուր սխալի հաղորդագրություն, որը տրամադրվում է, երբ հանդիպում է անսպասելի պայման, և չկա ավելի կոնկրետ հաղորդագրություն, որը հարմար է: Սա շատ տարածված սխալ է, որը կարող է առաջանալ սերվերի կողմից բազմաթիվ խնդիրների պատճառով: ';
        break;
        case 'fr':
        document.title = "Erreurs HTTP | Réponses d'information (100 – 199) | Réponses réussies (200 – 299) | Messages de redirection (300 – 399) | Réponses d'erreur du client (400 – 499) | 404 Non trouvé : Le serveur ne peut pas trouver la ressource demandée. | Réponses d'erreur du serveur (500 – 599) | 500 Erreur interne du serveur : Un message d'erreur générique, donné lorsqu'une condition inattendue a été rencontrée et qu'aucun message plus spécifique n'est approprié. Il s'agit d'une erreur très générale qui peut être causée par une large gamme de problèmes côté serveur. ";
        break;
        case 'es':
        document.title = 'Errores HTTP | Respuestas informativas (100 – 199) | Respuestas exitosas (200 – 299) | Mensajes de redirección (300 – 399) | Respuestas de error del cliente (400 – 499) | 404 No encontrado: El servidor no puede encontrar el recurso solicitado. | Respuestas de error del servidor (500 – 599) | 500 Error interno del servidor: Un mensaje de error genérico, dado cuando se encuentra una condición inesperada y no hay un mensaje más específico adecuado. Este es un error muy general que puede ser causado por una amplia gama de problemas en el lado del servidor.';
        break;
        case 'pt':
        document.title = 'Erros HTTP | Respostas informativas (100 – 199) | Respostas bem-sucedidas (200 – 299) | Mensagens de redirecionamento (300 – 399) | Respostas de erro do cliente (400 – 499) | 404 Não Encontrado: O servidor não pode encontrar o recurso solicitado. | Respostas de erro do servidor (500 – 599) | 500 Erro Interno do Servidor: Uma mensagem de erro genérica, fornecida quando uma condição inesperada foi encontrada e nenhuma mensagem mais específica é adequada. Este é um erro muito geral que pode ser causado por uma ampla gama de problemas no lado do servidor. ';
        break;
        case 'it':
        document.title = "Errori HTTP | Risposte informative (100 – 199) | Risposte di successo (200 – 299) | Messaggi di reindirizzamento (300 – 399) | Risposte di errore del client (400 – 499) | 404 Not Found: Il server non può trovare la risorsa richiesta. | Risposte di errore del server (500 – 599) | 500 Internal Server Error: Un messaggio di errore generico, fornito quando viene incontrata una condizione imprevista e non esiste un messaggio più specifico adatto. Si tratta di un errore molto generale che può essere causato da una vasta gamma di problemi sul lato del server. ";
        break;
        case 'nl':
        document.title = 'HTTP Fouten | Informatieve antwoorden (100 – 199) | Succesvolle antwoorden (200 – 299) | Omleidingsberichten (300 – 399) | Clientfoutreacties (400 – 499) | 404 Niet Gevonden: De server kan de aangevraagde bron niet vinden. | Serverfoutreacties (500 – 599) | 500 Interne Serverfout: Een generieke foutmelding, gegeven wanneer een onverwachte situatie werd aangetroffen en er geen specifieker bericht geschikt is. Dit is een zeer algemene fout die kan worden veroorzaakt door een breed scala aan problemen aan de serverzijde. ';
        break;
        case 'tj':
        document.title = 'Хатоҳои HTTP | Ҷавобҳои иттилоотӣ (100 – 199) | Ҷавобҳои муваффақ (200 – 299) | Паёмҳои масир (300 – 399) | Ҷавобҳои хатогии муштарӣ (400 – 499) | 404 Not Found: Сервер манбаи дархостшударо пайдо карда наметавонад. | Ҷавобҳои хатогии сервер (500 – 599) | 500 Internal Server Error: Паёми хатогии умумӣ, ки ҳангоми дучор шудан ба ҳолати ғайричашмдошт дода мешавад ва ягон паёми мушаххас мувофиқ нест. Ин як хатои хеле умумӣ аст, ки метавонад аз доираи васеи мушкилот дар тарафи сервер ба вуҷуд ояд.';
        break;
        case 'ar':
        document.title = 'أخطاء HTTP | الاستجابات التحذيرية (100 – 199) | الاستجابات الناجحة (200 – 299) | رسائل التوجيه (300 – 399) | استجابات أخطاء العميل (400 – 499) | 404 Not Found: الخادم لا يمكنه العثور على المورد المطلوب. | استجابات أخطاء الخادم (500 – 599) | 500 Internal Server Error: رسالة خطأ عامة، تُعطى عندما يتم مواجهة حالة غير متوقعة ولا يوجد رسالة أكثر تحديدًا مناسبة. هذا خطأ عام جدًا يمكن أن يتسبب فيه مجموعة واسعة من المشاكل على جانب الخادم. ';
        break;
        case 'in':
        document.title = 'HTTP त्रुटियाँ | सूचनात्मक प्रतिक्रियाएँ (100 – 199) | सफल प्रतिक्रियाएँ (200 – 299) | पुनर्निर्देशन संदेश (300 – 399) | ग्राहक त्रुटि प्रतिक्रियाएँ (400 – 499) | 404 Not Found: सर्वर अनुरोधित संसाधन को नहीं मिला सकता है। | सर्वर त्रुटि प्रतिक्रियाएँ (500 – 599) | 500 Internal Server Error: एक सामान्य त्रुटि संदेश, जब एक अप्रत्याशित स्थिति से सामना किया गया और कोई अधिक विशिष्ट संदेश उपयुक्त नहीं है। यह सर्वर-स्तर पर विभिन्न मुद्दों के द्वारा प्रेरित हो सकता है।';
        break;
        case 'jp':
        document.title = 'HTTPエラー | 情報応答 (100 – 199) | 成功応答 (200 – 299) | リダイレクトメッセージ (300 – 399) | クライアントエラー応答 (400 – 499) | 404 Not Found: サーバーは要求されたリソースを見つけることができません。| サーバーエラー応答 (500 – 599) | 500 Internal Server Error: 予期しない状態が発生し、より具体的なメッセージが適切でない場合に与えられる一般的なエラーメッセージです。これは、サーバーサイドのさまざまな問題によって引き起こされる非常に一般的なエラーです。';
        break;
        case 'ko':
        document.title = 'HTTP 오류 | 정보 응답 (100 – 199) | 성공 응답 (200 – 299) | 리디렉션 메시지 (300 – 399) | 클라이언트 오류 응답 (400 – 499) | 404 Not Found: 서버가 요청한 리소스를 찾을 수 없습니다. | 서버 오류 응답 (500 – 599) | 500 Internal Server Error: 예상치 못한 상황이 발생했고 더 구체적인 메시지가 적합하지 않은 경우에 제공되는 일반적인 오류 메시지입니다. 이는 서버 측의 다양한 문제로 인해 발생할 수 있는 매우 일반적인 오류입니다.';
        break;
      default:
        document.title = 'HTTP Errors';
    }
  }, [language]);
  
  return (
    <Wrapper>
    <div className='java-script'>
       <div>
          <button className='button1' onClick={() => handleLanguageChange('en')}>English</button>
          <button className='button1' onClick={() => handleLanguageChange('ru')}>Русский</button>
          <button className='button1' onClick={() => handleLanguageChange('am')}>Հայերեն</button>
          <button className='button1' onClick={() => handleLanguageChange('fr')}>Français</button>
          <button className='button1' onClick={() => handleLanguageChange('es')}>Español</button>
          <button className='button1' onClick={() => handleLanguageChange('pt')}>PORTUGUÊS</button>
          <button className='button1' onClick={() => handleLanguageChange('it')}>Italiano</button>
          <button className='button1' onClick={() => handleLanguageChange('nl')}>Nederlands</button>
          <button className='button1' onClick={() => handleLanguageChange('tj')}>Тоҷикӣ</button>
          <button className='button1' onClick={() => handleLanguageChange('ar')}>عربى</button>
          <button className='button1' onClick={() => handleLanguageChange('in')}>हिन्दी</button>
          <button className='button1' onClick={() => handleLanguageChange('jp')}>日本語</button>
          <button className='button1' onClick={() => handleLanguageChange('ko')}>Korean</button>
       </div>
 {language === 'en' && (
         <div>
           <div className='ad-container'>  
          {/*  реклама  */}
        </div>
        
         <h2>HTTP Errors</h2>
   
         {/* Informational responses (100 – 199) */}
          
           <h3>Informational responses (100 – 199)</h3>
           <p>
             <strong>100 Continue:</strong> The server has received the request headers and the client should proceed to send the request body (in the case of a request for which a body needs to be sent; for example, a POST request).
           </p>
           <p>
             <strong>101 Switching Protocols:</strong> The requester has asked the server to switch protocols and the server has agreed to do so.
           </p>
           <p>
             <strong>102 Processing:</strong> The server has received and is processing the request, but no response is available yet.
           </p>
           <p>
             <strong>103 Early Hints:</strong> Indicates to the client that the server is likely to send a final response with the header fields included in the informational response.
           </p>
          
   
         {/* Successful responses (200 – 299) */}
          
           <h3>Successful responses (200 – 299)</h3>
           <p>
             <strong>200 OK:</strong> The request has succeeded. The information returned with the response is dependent on the method used in the request.
           </p>
           <p>
             <strong>201 Created:</strong> The request has been fulfilled, resulting in the creation of a new resource.
           </p>
           <p>
             <strong>202 Accepted:</strong> The request has been accepted for processing, but the processing has not been completed.
           </p>
           <p>
             <strong>203 Non-Authoritative Information:</strong> The server successfully processed the request, but is returning information that may be from another source.
           </p>
           <p>
             <strong>204 No Content:</strong> The server successfully processed the request and is not returning any content.
           </p>
           <p>
             <strong>205 Reset Content:</strong> The server successfully processed the request, but is not returning any content. The client should reset the document view.
           </p>
           <p>
             <strong>206 Partial Content:</strong> The server is delivering only part of the resource due to a range header sent by the client.
           </p>
           <p>
             <strong>207 Multi-Status:</strong> A Multi-Status response conveys information about multiple resources in situations where multiple status codes might be appropriate.
           </p>
          
   
         {/* Redirection messages (300 – 399) */}
         
           <h3>Redirection messages (300 – 399)</h3>
           <p>
             <strong>300 Multiple Choices:</strong> The requested resource has multiple choices, each with different attributes and responses.
           </p>
           <p>
             <strong>301 Moved Permanently:</strong> The requested resource has been permanently moved to a new URL, and any future references to this resource should use one of the returned URLs.
           </p>
           <p>
             <strong>302 Found:</strong> The requested resource resides temporarily under a different URI.
           </p>
           <p>
             <strong>303 See Other:</strong> The response to the request can be found under a different URI and should be retrieved using a GET method on that resource.
           </p>
           <p>
             <strong>304 Not Modified:</strong> Indicates that the resource has not been modified since the version specified by the request headers If-Modified-Since or If-None-Match. In such case, there is no need to retransmit the resource since the client still has a previously-downloaded copy.
           </p>
           <p>
             <strong>305 Use Proxy:</strong> The requested resource must be accessed through the proxy given by the Location field.
           </p>
           <p>
             <strong>307 Temporary Redirect:</strong> The requested resource resides temporarily under a different URI.
           </p>
           <p>
             <strong>308 Permanent Redirect:</strong> The requested resource has been permanently moved to another URI, and the client should update all references to this new URI.
           </p>
          
   
         {/* Client error responses (400 – 499) */}
          
           <h3>Client error responses (400 – 499)</h3>
           <p>
             <strong>400 Bad Request:</strong> The server cannot process the request due to a client error (e.g., malformed syntax, size too large, invalid request message framing, or deceptive request routing).
           </p>
           <p>
             <strong>401 Unauthorized:</strong> Similar to 403 Forbidden, but specifically for use when authentication is required and has failed or has not yet been provided.
           </p>
           <p>
             <strong>402 Payment Required:</strong> Reserved for future use.
           </p>
           <p>
             <strong>403 Forbidden:</strong> The client does not have permission to access the requested resource.
           </p>
           <p>
             <strong>404 Not Found:</strong> The server cannot find the requested resource.
           </p>
           <p>
             <strong>405 Method Not Allowed:</strong> The method received in the request-line is known by the origin server but not supported by the target resource.
           </p>
           <p>
             <strong>406 Not Acceptable:</strong> The target resource does not have a current representation that would be acceptable to the user agent, according to the proactive negotiation header fields received in the request.
           </p>
           <p>
             <strong>407 Proxy Authentication Required:</strong> The client must first authenticate itself with the proxy.
           </p>
           <p>
             <strong>408 Request Timeout:</strong> The client did not produce a request within the time that the server was prepared to wait.
           </p>
           <p>
             <strong>409 Conflict:</strong> The request could not be completed due to a conflict with the current state of the target resource.
           </p>
           <p>
             <strong>410 Gone:</strong> Indicates that the target resource is no longer available at the server and no forwarding address is known.
           </p>
           <p>
             <strong>411 Length Required:</strong> The server refuses to accept the request without a defined Content-Length.
           </p>
           <p>
             <strong>412 Precondition Failed:</strong> One or more conditions given in the request header fields evaluated to false when tested on the server.
           </p>
           <p>
             <strong>413 Payload Too Large:</strong> The server is refusing to process a request because the request payload is larger than the server is willing or able to process.
           </p>
           <p>
             <strong>414 URI Too Long:</strong> The server is refusing to service the request because the request-target is longer than the server is willing to interpret.
           </p>
           <p>
             <strong>415 Unsupported Media Type:</strong> The origin server is refusing to service the request because the payload format is in an unsupported format.
           </p>
           <p>
             <strong>416 Range Not Satisfiable:</strong> The client has asked for a portion of the file (byte serving), but the server cannot supply that portion.
           </p>
           <p>
             <strong>417 Expectation Failed:</strong> The server cannot meet the requirements of the Expect request-header field.
           </p>
           <p>
             <strong>418 I'm a teapot:</strong> Any attempt to brew coffee with a teapot should result in the error code "418 I'm a teapot".
           </p>
           <p>
             <strong>420 Enhance Your Calm:</strong> Returned by the Twitter Search and Trends API when the client is being rate-limited.
           </p>
           <p>
             <strong>421 Misdirected Request:</strong> The request was directed at a server that is not able to produce a response.
           </p>
           <p>
             <strong>422 Unprocessable Entity:</strong> The request was well-formed but was unable to be followed due to semantic errors.
           </p>
           <p>
             <strong>423 Locked:</strong> The resource that is being accessed is locked.
           </p>
           <p>
             <strong>425 Too Early:</strong> Indicates that the server is unwilling to risk processing a request that might be replayed.
           </p>
           <p>
             <strong>426 Upgrade Required:</strong> The server refuses to perform the request using the current protocol but might be willing to do so after the client upgrades to a different protocol.
           </p>
           <p>
             <strong>428 Precondition Required:</strong> The origin server requires the request to be conditional.
           </p>
           <p>
             <strong>429 Too Many Requests:</strong> The user has sent too many requests in a given amount of time.
           </p>
          
   
         {/* Server error responses (500 – 599) */}
          
           <h3>Server error responses (500 – 599)</h3>
           <p>
             <strong>500 Internal Server Error:</strong> A generic error message, given when an unexpected condition was encountered and no more specific message is suitable. This is a very general error that can be caused by a wide range of issues on the server-side.
           </p>
           <p>
             <strong>501 Not Implemented:</strong> The server either does not recognize the request method, or it lacks the ability to fulfill the request.
           </p>
           <p>
             <strong>502 Bad Gateway:</strong> The server, while acting as a gateway or proxy, received an invalid response from the upstream server it accessed in attempting to fulfill the request.
           </p>
           <p>
             <strong>503 Service Unavailable:</strong> The server is currently unable to handle the request due to a temporary overload or maintenance of the server.
           </p>
           <p>
             <strong>504 Gateway Timeout:</strong> The server, while acting as a gateway or proxy, did not receive a timely response from the upstream server specified by the URI or some other auxiliary server it needed to access in order to complete the request.
           </p>
           <p>
             <strong>505 HTTP Version Not Supported:</strong> The server does not support, or refuses to support, the major version of HTTP that was used in the request message.
           </p>
           <p>
             <strong>506 Variant Also Negotiates:</strong> The server has an internal configuration error: the chosen variant resource is configured to engage in transparent content negotiation itself, and is therefore not a proper endpoint in the negotiation process.
           </p>
           <p>
             <strong>507 Insufficient Storage:</strong> The server is unable to store the representation needed to complete the request.
           </p>
           <p>
             <strong>508 Loop Detected:</strong> The server detected an infinite loop while processing the request.
           </p>
           <p>
             <strong>510 Not Extended:</strong> Further extensions to the request are required for the server to fulfill it.
           </p>
           <p>
             <strong>511 Network Authentication Required:</strong> The client needs to authenticate to gain network access.
           </p>
       
           <b><p>* Text written with the help of a translator. If you find an error, please let us know *</p></b>
    
          <div className='ads-container'>  
              {/*  реклама  */}
          </div>
       </div>
      )} 
    {language === 'ru' && (
      <div>
        <RuReact_10 />
      </div>
    )}
    {language === 'am' && (
      <div>
        <AmReact_10 />
      </div>
    )} 
    {language === 'fr' && (
      <div>
        <FrReact_10 />
      </div>
    )}
     {language === 'es' && (
      <div>
        <EsReact_10 />
      </div>
    )}
    {language === 'pt' && (
      <div>
        <PtReact_10 />
      </div>
    )} 
    {language === 'it' && (
      <div>
        <ItReact_10 />
      </div>
    )} 
    {language === 'nl' && (
      <div>
        <NlReact_10 />
      </div>
    )}
     {language === 'tj' && (
      <div>
        <TjReact_10 />
      </div>
    )}
     {language === 'ar' && (
      <div>
        <ArReact_10 />
      </div>
    )}
     {language === 'jp' && (
      <div>
        <JpReact_10 />
      </div>
    )}
     {language === 'in' && (
      <div>
        <InReact_10 />
      </div>
    )} 
    {language === 'ko' && (
      <div>
        <KoReact_10 />
      </div>
    )}   
    </div>
    </Wrapper>
  )
}

export default React_10;