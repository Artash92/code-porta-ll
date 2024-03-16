import React, {useState, useEffect} from 'react';
import Wrapper from '../components/Wrapper';
import RuReact_4 from '../language/RuReact_4';
import AmReact_4 from '../language/AmReact_4';
import FrReact_4 from '../language/FrReact_4';
import EsReact_4 from '../language/EsReact_4';
import PtReact_4 from '../language/PtReact_4';
import ItReact_4 from '../language/ItReact_4';
import NlReact_4 from '../language/NlReact_4';
import TjReact_4 from '../language/TjReact_4';
import ArReact_4 from '../language/ArReact_4';
import JpReact_4 from '../language/JpReact_4';
import InReact_4 from '../language/InReact_4';
import KoReact_4 from '../language/KoReact_4';

function React_4() {
  const [language, setLanguage] = useState('en'); 

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
  };
  
  useEffect(() => {
    switch (language) {
      case 'en':
        document.title = 'Fetch Data In React | Axios | Both Fetch and Axios are JavaScript libraries used for making HTTP requests from the browser or Node.js environment. However, there are some differences between the two. | GET: a request method used for retrieving data from the server. In React, you can use the axios.get method ';
        break;
      case 'ru':
        document.title = 'Получение данных в React(Fetch Data) | Axios | Как Fetch, так и Axios являются библиотеками JavaScript, используемыми для выполнения HTTP-запросов из браузера или среды Node.js. Однако между ними есть некоторые отличия.';
        break;
      case 'am':
        document.title = 'Տվյալների ստացում React-ում (Fetch Data) | Եվ Fetch-ը, և Axios-ը JavaScript գրադարաններ են, որոնք օգտագործվում են բրաուզերից կամ Node.js շրջանակից HTTP հարցումներ կատարելու համար: Այնուամենայնիվ, կան որոշ տարբերություններ նրանց միջև: | Axios-ը հանրաճանաչ գրադարան է, որն ապահովում է ավելի ֆունկցիոնալ և հզոր API՝ HTTP հարցումներ կատարելու համար: Այն աջակցում է հարցումների չեղարկմանը, առաջընթացի իրադարձություններին և ավտոմատ վերաուղարկմանը, ինչպես նաև ունի ներկառուցված աջակցություն պատասխանների տվյալների մշակման համար, ինչպիսիք են JSON, XML և FormData: ';
        break;
        case 'fr':
        document.title = "Récupérer des données avec React | Fetch et Axios sont tous deux des bibliothèques JavaScript utilisées pour effectuer des requêtes HTTP depuis le navigateur ou l'environnement Node.js. Cependant, il existe quelques différences entre les deux. | Axios est une bibliothèque tierce populaire qui fournit une API plus riche en fonctionnalités et puissante pour effectuer des requêtes HTTP. Elle prend en charge l'annulation de requête, les événements de progression et les nouvelles tentatives automatiques dès le départ, et dispose également d'une prise en charge intégrée pour le traitement des données de réponse telles que JSON, XML et FormData. ";
        break;
        case 'es':
        document.title = 'Obtener datos en React | Tanto Fetch como Axios son bibliotecas de JavaScript utilizadas para realizar solicitudes HTTP desde el navegador o el entorno Node.js. Sin embargo, hay algunas diferencias entre ambas. | Axios es una biblioteca de terceros popular que proporciona una API más rica en funciones y poderosa para realizar solicitudes HTTP. Admite cancelación de solicitudes, eventos de progreso y reintentos automáticos de solicitudes de forma predeterminada, y también tiene un soporte incorporado para manejar datos de respuesta como JSON, XML y FormData. ';
        break;
        case 'pt':
        document.title = 'Obter Dados no React | Tanto Fetch quanto Axios são bibliotecas JavaScript usadas para fazer requisições HTTP a partir do navegador ou do ambiente Node.js. No entanto, existem algumas diferenças entre os dois. | O Axios é uma biblioteca de terceiros popular que fornece uma API mais rica em recursos e poderosa para fazer requisições HTTP. Ele suporta cancelamento de requisição, eventos de progresso e tentativas automáticas de requisição, e também possui suporte integrado para lidar com dados de resposta como JSON, XML e FormData.';
        break;
        case 'it':
        document.title = "Recuperare Dati In React | Sia Fetch che Axios sono librerie JavaScript utilizzate per effettuare richieste HTTP dal browser o dall'ambiente Node.js. Tuttavia, ci sono alcune differenze tra le due. | Axios è una popolare libreria di terze parti che fornisce un'API più ricca di funzionalità e potente per effettuare richieste HTTP. Supporta l'annullamento delle richieste, gli eventi di avanzamento e i tentativi di ripetizione automatica già integrati, e ha anche un supporto integrato per la gestione dei dati di risposta come JSON, XML e FormData. ";
        break;
        case 'nl':
        document.title = 'Data Ophalen in React | Zowel Fetch als Axios zijn JavaScript-bibliotheken die worden gebruikt voor het maken van HTTP-verzoeken vanuit de browser of Node.js-omgeving. Er zijn echter enkele verschillen tussen de twee. | Axios is een populaire externe bibliotheek die een meer uitgebreide en krachtige API biedt voor het maken van HTTP-verzoeken. Het ondersteunt het annuleren van verzoeken, voortgangsgebeurtenissen en automatische herhalingen vanzelf, en heeft ook een ingebouwde ondersteuning voor het verwerken van responsgegevens zoals JSON, XML en FormData. ';
        break;
        case 'tj':
        document.title = 'Fetch Data Дар React | Ҳам Fetch ва ҳам Axios китобхонаҳои JavaScript мебошанд, ки барои қабули дархостҳои HTTP аз браузер ё муҳити Node.js истифода мешаванд. Бо вуҷуди ин, байни ин ду фарқият вуҷуд дорад. | Axios як китобхонаи маъмули тарафи сеюм аст, ки барои қабули дархостҳои HTTP API-и бойтар ва пурқувватро таъмин мекунад. Он бекоркунии дархост, рӯйдодҳои пешрафт ва такрори автоматии берун аз қуттӣ дастгирӣ мекунад ва инчунин дорои дастгирии дохилӣ барои коркарди додаҳои посух ба монанди JSON, XML ва FormData. ';
        break;
        case 'ar':
        document.title = 'احصل على البيانات في رياكت | أكسيوس | أكسيوس هو مكتبة خارجية شهيرة توفر واجهة برمجة تطبيقات (API) أكثر ثراءً وقوة لإجراء طلبات HTTP. تدعم إلغاء الطلب، وأحداث التقدم، وإعادة المحاولات التلقائية بشكلٍ مباشر، وتحتوي أيضًا على دعم مدمج للتعامل مع بيانات الاستجابة مثل JSON، وXML، وFormData.  ';
        break;
        case 'in':
        document.title = 'रिएक्ट में डेटा लाना | फेच और एक्सियोस दोनों ब्राउज़र या नोड.जेएस परिवेश से HTTP अनुरोध भेजने के लिए उपयोग की जाने वाली जावास्क्रिप्ट लाइब्रेरी हैं। हालांकि, इन दोनों में कुछ अंतर हैं। | एक्सियोस एक लोकप्रिय तीसरे पक्ष की पुस्तकालय है जो HTTP अनुरोध भेजने के लिए एक अधिक सुविधाजनक और शक्तिशाली एपीआई प्रदान करती है। यह अनुरोध रद्द करने, प्रगति घटनाओं, और स्वचालित प्रयासों का समर्थन करता है, और साथ ही JSON, XML, और FormData जैसे प्रतिक्रिया डेटा का संभालन करने के लिए एक निर्मित समर्थन भी है।  ';
        break;
        case 'jp':
        document.title = 'Reactでデータを取得する | FetchとAxiosは、ブラウザやNode.js環境からのHTTPリクエストを行うためのJavaScriptライブラリです。ただし、両者にはいくつかの違いがあります。 | Axiosは、HTTPリクエストを行うためのより豊富な機能を提供する人気のあるサードパーティのライブラリです。リクエストのキャンセル、進行イベント、自動リトライのサポートを提供し、また、JSON、XML、FormDataなどのレスポンスデータの処理をサポートしています。| Axiosは、ブラウザやNode.jsからのHTTPリクエストを行うためのライブラリです。プロミスを使用してリクエストを送信し、レスポンスを処理することが容易になります。';
        break;
        case 'ko':
        document.title = 'React에서 데이터 가져오기 | Fetch와 Axios 모두 브라우저 또는 Node.js 환경에서 HTTP 요청을 만드는 데 사용되는 JavaScript 라이브러리입니다. 그러나 두 라이브러리 사이에는 몇 가지 차이가 있습니다. | Axios는 HTTP 요청을 만들기 위한 더 많은 기능이 있는 인기 있는 서드파티 라이브러리입니다. 요청 취소, 진행 이벤트 및 자동 재시도를 기본으로 지원하며 JSON, XML 및 FormData와 같은 응답 데이터 처리를 위한 내장 지원도 제공합니다. ';
        break;
      default:
        document.title = 'Fetch Data In React | Axios ';
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
      
      <h1>Fetch Data In React</h1>

      <p>1. Fetch data using the fetch API:</p>

  <code> 
    <p><span className='blueviole'>fetch</span>(<span className='blue1'>'https://api.example.com/data'</span>)</p>

    <p>.<span className='blue'>then</span>(response {'=>'} response.<span className='blue'>json</span>()) </p>

    <p>.<span className='blue'>then</span>(data {'=>'} console.<span className='blue'>log</span>(data))</p>

    <p>.<span className='blue'>catch</span>(error {'=>'} console.<span className='blue'>error</span>(error)) </p>
  </code>
    
    <p>In this example, we're making a request to a server using the <b>fetch</b> API. The <b>response</b> object is converted to JSON format using the <b>json()</b> method, and the resulting data is logged to the console. If an error occurs, it is caught and logged to the console.</p>
    

    <p>2. Display fetched data in the component's state:</p>

<code>
    <p><span className='red'>import</span> {'React, { useState, useEffect } '} <span className='red'>from</span> <span className='blue1'>'react'</span>;   </p>

    <p><span className='red'>function</span> <span className='blueviole'>MyComponent</span>() {'{'}</p>

    <p><span className='red'>const</span> [data, setData] = <span className='blueviole'>useState</span>([]);</p>

    <p><span className='blueviole'>useEffect</span>{'(() => {'}</p>

    <p><span className='blueviole'>fetch</span>(<span className='blue1'>'https://api.example.com/data'</span>)</p>

    <p>.<span className='blue'>then</span>(response {'=>'} response.<span className='blue'>json</span>())</p>

    <p>.<span className='blue'>then</span>(data {'=>'} <span className='blueviole'>setData</span>(data))</p>

    <p>.<span className='blue'>catch</span>(error {'=>'} console.<span className='blue'>error</span>(error)); </p>

    <p>{'}, []);'}</p>

    <p><span className='red'>return</span> {'('}</p>

    <p>{'<'}<span className='green'>div</span>{'>'}</p>

    <p>{'{'}data.<span className='blue'>map</span>{'(item => ('}</p>

    <p>{'<'}<span className='green'>p</span> key={'{item.'}<span className='blue'>id</span>{'}>'}{'{item.'}<span className='blue'>name</span>{'}</'}<span className='green'>p</span>{'>'}</p>

    <p>{'))} '}</p>

    <p>{'</'}<span className='green'>div</span>{'>'}</p>

    <p>&nbsp;{');'}</p>

    <p>{'}'}</p>
</code>    


<p>In this example, we're using the <b>useState</b> hook to define a state variable called <b>data</b>. We're also using the <b>useEffect</b> hook to fetch data from the server when the component mounts, and update the state variable <b>data</b> with the fetched data. Finally, we're using the <b>map</b> method to loop through the data array and display each item as a paragraph element.</p>
    
    
  <h1>Axios</h1>

  <p>Both Fetch and Axios are JavaScript libraries used for making HTTP requests from the browser or Node.js environment. However, there are some differences between the two.</p>


  <p>Fetch is a built-in browser API that uses promises to handle requests and responses. It has a simpler syntax and is easier to use for simple requests, but it lacks some advanced features like request cancellation, progress events, and automatic request retries.</p>  
    
  <p>Axios is a popular third-party library that provides a more feature-rich and powerful API for making HTTP requests. It supports request cancellation, progress events, and automatic retries out of the box, and also has a built-in support for handling response data like JSON, XML, and FormData.</p>

  <p>In terms of why it's better to use Axios over Fetch, it really depends on the specific needs of your project. If you're building a simple web application that only needs to make basic requests, then Fetch might be sufficient. However, if you need more advanced features and a more powerful API for handling requests and responses, then Axios is a better choice.</p>  

  <p>Some benefits of using Axios over Fetch include:</p>

  <p>1. Better error handling: Axios has a more robust system for handling errors and provides more helpful error messages compared to Fetch.</p>  
    
  <p>2. Interceptors: Axios provides interceptors that allow you to modify requests or responses before they are sent or received.</p>  
    
  <p>3. Automatic transformation of request and response data: Axios can automatically transform request and response data into different formats, like JSON, which can be very helpful when working with APIs.</p>  
    
  <p>4. Easy cancellation of requests: Axios provides a simple way to cancel requests, which can be useful when dealing with slow or unreliable networks.</p>  
    
  <p>In summary, both Fetch and Axios are useful tools for making HTTP requests in JavaScript, but Axios provides more advanced features and a more powerful API that can be very helpful for building more complex applications.</p>  
    
  <p><b>Axios</b> is a library for making HTTP requests from the browser or Node.js. It makes it easy to send requests using promises and handle responses.</p> 

  <p>To use Axios in React.js, you first need to install it using the command:</p>

  <b>npm install axios</b>

  <p>After that, you can use Axios in your React components. For example, the following code sends a GET request to a remote server and displays the response on the page:</p> 
   

 <code>
    <p><span className='red'>import</span> {' React, { useState, useEffect }'} <span className='red'>from</span> <span className='blue1'>"react"</span>;</p>  

    <p><span className='red'>import</span> axios <span className='red'>from</span> <span className='blue1'>"axios"</span>;</p>

    <p><span className='red'>function</span> <span className='blueviole'>App</span>() {'{'}</p>  

    <p><span className='red'>const</span> {'[data, setData]'} = <span className='blueviole'>useState</span>("");</p>

    <p><span className='blueviole'>useEffect</span>{'(() => { '}</p>

    <p>axios.<span className='blue'>get</span>(<span className='blue1'>"https://jsonplaceholder.typicode.com/todos/1"</span>).<span className='blue'>then</span>{'((response) => {'}</p>

    <p><span className='blueviole'>setData</span>(response.<span className='blue'>data</span>);</p>

    <p>{'});'}</p>

    <p>{' }, []);'}</p>

    <p> return {'<'}<span className='green'>div</span>{'>'}{'{'}data.<span className='blue'>title</span>{'}'}{'</'}<span className='green'>div</span>{'>;'}</p>

    <p>{'}'}</p>

    <p><span className='red'>export default</span> App;</p>
 </code> 
    
  <p>In this example, the <b>useEffect</b> hook is used to send a GET request to the server and update the <b>data</b> state variable with the response. The data variable is then displayed on the page using JSX.</p>  
    
  <p>Axios also supports other HTTP methods, such as POST, PUT, and DELETE, which can be used to send data to the server and modify resources. The axios object also provides many configuration options, such as setting headers, timeouts, and request interceptors, which allow you to customize the behavior of the requests.</p>  

  <p>Overall, Axios is a powerful and flexible library for working with HTTP requests in React.js, and it can simplify many common tasks, such as fetching data from a remote API.</p>

  <p>The HTTP protocol supports several request methods that allow performing various operations with data. Here is a brief description of the four main request methods along with examples of using them in React:</p>
    
  <p>1. <b>GET</b>: a request method used for retrieving data from the server. In React, you can use the <b>axios.get</b> method</p>  
    
  <code>
    <p>axios.<span className='blue'>get</span>(<span className='blue1'>'/api/data'</span>)</p>

    <p>.<span className='blue'>then</span>{'(response => {'}</p>

    <p>{'console'}.<span className='blue'>log</span>(response.<span className='blue'>data</span>); </p>

    <p>{'})'}</p>

    <p>.<span className='blue'>catch</span>{'(error => {' }</p>

    <p>{'console'}.<span className='blue'>log</span>(error);</p>
  
    <p>{'});'}</p>  
  </code> 

  <p>In this example, we are retrieving data from the <b>/api/data</b> endpoint. The response data is logged to the console if the request is successful, and any errors are caught and logged to the console.</p>
    
  <p>2. <b>PUT</b>: a request method used for updating existing data on the server. In React, you can use the <b>axios.put</b> method:</p>  

  <code>
    <p>axios.<span className='blue'>put</span>{'('}<span className='blue1'>'/api/data/1'</span>, {'{'} <span className='blue'>newData</span>: <span className='blue1'>'updatedData'</span> {"})"}</p>

    <p>.<span className='blue'>then</span>{'('}response { '=> {' }</p>

    <p>{'console'}.<span className='blue'>log</span>(response.<span className='blue'>data</span>);</p>  

    <p>{'})'}</p>

    <p>.<span className='blue'>catch</span>{'(error => {'}</p>

    <p>{'console'}.<span className='blue'>log</span>(error);</p>

    <p>{'});'}</p>
 </code>

  <p>In this example, we are updating data at the <b>/api/data/1</b> endpoint. We are sending a payload with the new data as the second argument to <b>axios.put</b>. The response data is logged to the console if the request is successful, and any errors are caught and logged to the console.</p>    
    
  <p>3. <b>POST </b>: a request method used for creating new data on the server. In React, you can use the <b>axios.post</b> method</p>  
    
  <code>
    <p>axios.<span className='blue'>post</span>{'('}<span className='blue1'>'/api/data'</span>, {'{'} <span className='blue'>newData</span>: <span className='blue1'>'newData'</span> {"})"}</p>

    <p>.<span className='blue'>then</span>{'(response => {'}</p>

    <p>{'console'}.<span className='blue'>log</span>(response.<span className='blue'>data</span>);</p>

    <p>{'})'}</p>  

    <p>.<span className='blue'>catch</span>{'(error => {'}</p>

    <p>{'console'}.<span className='blue'>log</span>(error);</p> 

    <p>{'});'}</p> 
  </code>  

  <p>In this example, we are creating new data at the <b>/api/data</b> endpoint. We are sending a payload with the new data as the second argument to <b>axios.post</b>. The response data is logged to the console if the request is successful, and any errors are caught and logged to the console.</p>
    
  <p>4. <b>DELETE </b>: a request method used for deleting existing data on the server. In React, you can use the <b>axios.delete</b> method:</p>  
    
 <code>
    <p> axios.<span className='blue'>delete</span>(<span className='blue1'>'/api/data/1'</span>)  </p>

    <p>.<span className='blue'>then</span>{'(response => { '}</p>

    <p>{'console'}.<span className='blue'>log</span>(response.<span className='blue'>data</span>);</p>

    <p>{'}) '}</p>

    <p>.<span className='blue'>catch</span>{'(error => { '}</p>

    <p>{'console'}.<span className='blue'>log</span>(error);</p>

    <p>{'});'}</p>
  </code> 

    <p>In this example, we are deleting data at the <b>/api/data/1</b> endpoint. The response data is logged to the console if the request is successful, and any errors are caught and logged to the console</p>

   <p> For more information on Axios, please visit their official website: <a href=" https://axios-http.com" target='_blank' > 👉🏼  https://axios-http.com</a></p>

   <b><p>* Text written with the help of a translator. If you find an error, please let us know *</p></b>
    
    <div className='ads-container'>  
  {/*  реклама  */}
  </div> 
   </div>
      )}
      {language === 'ru' && (
        <div>
          <RuReact_4 />
        </div>
      )}
      {language === 'am' && (
        <div>
          <AmReact_4 />
        </div>
      )} 
      {language === 'fr' && (
        <div>
          <FrReact_4 />
        </div>
      )}
       {language === 'es' && (
        <div>
          <EsReact_4 />
        </div>
      )}
      {language === 'pt' && (
        <div>
          <PtReact_4 />
        </div>
      )} 
      {language === 'it' && (
        <div>
          <ItReact_4 />
        </div>
      )} 
      {language === 'nl' && (
        <div>
          <NlReact_4 />
        </div>
      )}
       {language === 'tj' && (
        <div>
          <TjReact_4 />
        </div>
      )}
       {language === 'ar' && (
        <div>
          <ArReact_4 />
        </div>
      )}
       {language === 'jp' && (
        <div>
          <JpReact_4 />
        </div>
      )}
       {language === 'in' && (
        <div>
          <InReact_4 />
        </div>
      )} 
      {language === 'ko' && (
        <div>
          <KoReact_4 />
        </div>
      )}   
    </div>
  </Wrapper>
  )
}

export default React_4;