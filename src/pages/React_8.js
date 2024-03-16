import React, { useState , useEffect } from 'react';
import Wrapper from '../components/Wrapper';
import RuReact_8 from '../language/RuReact_8';
import AmReact_8 from '../language/AmReact_8';
import FrReact_8 from '../language/FrReact_8';
import EsReact_8 from '../language/EsReact_8';
import PtReact_8 from '../language/PtReact_8';
import ItReact_8 from '../language/ItReact_8';
import NlReact_8 from '../language/NlReact_8';
import TjReact_8 from '../language/TjReact_8';
import ArReact_8 from '../language/ArReact_8';
import JpReact_8 from '../language/JpReact_8';
import InReact_8 from '../language/InReact_8';
import KoReact_8 from '../language/KoReact_8';  

function React_8() {
  
  const [language, setLanguage] = useState('en');  

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
  };
  
  useEffect(() => {
    switch (language) {
      case 'en':
        document.title = 'Redux Thunk is a middleware library for Redux that allows you to write async logic that interacts with the Redux store. It enables you to dispatch actions that contain async code, such as API requests or other side effects, by wrapping your action creators in a function that returns another function.| In the example above, we define three action creators: fetchUserRequest, fetchUserSuccess, and fetchUserError. We also define a fetchUser action creator that returns a function instead of an action object. This function takes dispatch as an argument, which is the Redux store s dispatch function. ';
        break;
      case 'ru':
        document.title = 'Redux Thunk - это библиотека промежуточного программного обеспечения для Redux, которая позволяет вам писать асинхронную логику, взаимодействующую с хранилищем Redux. Он позволяет вам диспетчеризовать действия, которые содержат асинхронный код, такой как запросы API или другие побочные эффекты, обернув ваши создатели действий в функцию, которая возвращает другую функцию. | В приведенном выше примере мы определяем три создателя действий: fetchUserRequest, fetchUserSuccess и fetchUserError. Мы также определяем создателя действий fetchUser, который возвращает функцию вместо объекта действия. Эта функция принимает аргументом dispatch, который является функцией dispatch хранилища Redux.';
        break;
      case 'am':
        document.title = 'Redux Thunk-ը Redux-ի ծրագրային գրադարան է, որը թույլ է տալիս գրել ասինխրոն տրամաբանություն, որը փոխազդում է Redux store-ի հետ: Այն թույլ է տալիս ուղարկել գործողություններ, որոնք պարունակում են ասինխրոն կոդ, ինչպիսիք են API հարցումները կամ այլ կողմնակի էֆեկտները՝ փաթեթավորելով ձեր գործողությունների ստեղծողներին մի ֆունկցիա, որը վերադարձնում է մեկ այլ գործառույթ: | Վերոհիշյալ օրինակում մենք սահմանում ենք գործողությունների երեք ստեղծողներ՝ fetchUserRequest, fetchUserSuccess և fetchUserError: Մենք նաև սահմանում ենք գործողությունների ստեղծող fetchUser, որը գործողությունների օբյեկտի փոխարեն ֆունկցիա է վերադարձնում: Այս ֆունկցիան ընդունում է որպես արգումենտ dispatch, որը Redux store-ի dispatch ֆունկցիան է:';
        break;
        case 'fr':
        document.title = "Redux Thunk est une bibliothèque middleware pour Redux qui vous permet d'écrire une logique asynchrone qui interagit avec le magasin Redux. Il vous permet de dispatcher des actions contenant du code asynchrone, telles que des requêtes API ou d'autres effets secondaires, en enveloppant vos créateurs d'actions dans une fonction qui renvoie une autre fonction. | Dans la fonction fetchUser, nous envoyons l'action fetchUserRequest, qui définit l'état isLoading sur true. Nous effectuons ensuite un appel API en utilisant Axios et envoyons soit l'action fetchUserSuccess ou fetchUserError en fonction de la réponse de l'API. Ces actions mettent à jour le magasin Redux avec les données récupérées ou le message d'erreur, respectivement. ";
        break;
        case 'es':
        document.title = 'Redux Thunk es una biblioteca de middleware para Redux que te permite escribir lógica asíncrona que interactúa con la tienda Redux. Te permite despachar acciones que contienen código asíncrono, como solicitudes a API u otros efectos secundarios, envolviendo tus creadores de acciones en una función que devuelve otra función. | En el ejemplo anterior, definimos tres creadores de acciones: fetchUserRequest, fetchUserSuccess y fetchUserError. También definimos un creador de acción fetchUser que devuelve una función en lugar de un objeto de acción. Esta función toma dispatch como argumento, que es la función dispatch del almacén Redux.';
        break;
        case 'pt':
        document.title = 'Redux Thunk é uma biblioteca de middleware para Redux que permite escrever lógica assíncrona que interage com a loja Redux. Ele permite despachar ações que contêm código assíncrono, como solicitações de API ou outros efeitos colaterais, envolvendo seus criadores de ação em uma função que retorna outra função. | No exemplo acima, definimos três criadores de ação: fetchUserRequest, fetchUserSuccess e fetchUserError. Também definimos um criador de ação fetchUser que retorna uma função em vez de um objeto de ação. Esta função recebe dispatch como argumento, que é a função dispatch da loja Redux.';
        break;
        case 'it':
        document.title = "Redux Thunk è una libreria middleware per Redux che ti permette di scrivere logica asincrona che interagisce con il magazzino Redux. Ti consente di inviare azioni che contengono codice asincrono, come richieste API o altri effetti collaterali, avvolgendo i tuoi creatori di azioni in una funzione che restituisce un'altra funzione. | Nell'esempio precedente, definiamo tre creatori di azioni: fetchUserRequest, fetchUserSuccess e fetchUserError. Definiamo anche un creatore di azioni fetchUser che restituisce una funzione invece di un oggetto azione. Questa funzione prende dispatch come argomento, che è la funzione dispatch dello store Redux.";
        break;
        case 'nl':
        document.title = 'Redux Thunk is een middleware bibliotheek voor Redux die je toelaat om asynchrone logica te schrijven die interacteert met de Redux store. Het maakt het mogelijk om acties te dispatchen die asynchrone code bevatten, zoals API-verzoeken of andere neveneffecten, door je actie-makers in te pakken in een functie die een andere functie retourneert. | In het bovenstaande voorbeeld definiëren we drie actie-makers: fetchUserRequest, fetchUserSuccess, en fetchUserError. We definiëren ook een fetchUser actie-maker die een functie retourneert in plaats van een actie-object. Deze functie neemt dispatch als argument, dat de dispatch functie van de Redux store is.';
        break;
        case 'tj':
        document.title = 'Redux Thunk як китобхонаи миёнарав барои Redux аст, ки ба шумо имкон медиҳад мантиқи асинкро нависед, ки бо мағозаи Redux ҳамкорӣ мекунад. Он ба шумо имкон медиҳад, ки амалҳоеро, ки дорои рамзи асинхронӣ ҳастанд, ба мисли дархостҳои API ё дигар эффектҳои номатлуб, тавассути печонидани эҷодкорони амали худ дар функсияе, ки вазифаи дигарро бармегардонад, интиқол диҳед. | Дар мисоли боло мо се эҷодкунандаи амалро муайян мекунем: fetchUserRequest, fetchUserSuccess ва fetchUserError. Мо инчунин эҷодкунандаи амали fetchUser-ро муайян мекунем, ки ба ҷои объекти амал функсияро бармегардонад. Ин функсия dispatch -ро ҳамчун аргумент мегирад, ки он функсияи диспетчер-и мағозаи Redux мебошад.';
        break;
        case 'ar':
        document.title = 'Redux Thunk هو مكتبة وسيطة لـ Redux تتيح لك كتابة منطق غير متزامن يتفاعل مع متجر Redux. يتيح لك توجيه الإجراءات التي تحتوي على كود غير متزامن، مثل طلبات API أو آثار جانبية أخرى، عن طريق لف منشئي الإجراءات الخاصة بك في دالة تعيد دالة أخرى. | في المثال أعلاه، نقوم بتعريف ثلاث منشئي إجراءات: fetchUserRequest, fetchUserSuccess, و fetchUserError. نحدد أيضًا منشئ إجراء fetchUser الذي يعيد دالة بدلاً من كائن إجراء. تأخذ هذه الدالة dispatch كوسيطة، وهي دالة dispatch المخزن Redux. ';
        break;
        case 'in':
        document.title = 'Redux Thunk रीडक्स के लिए एक मध्यवर्ती पुस्तकालय है जो आपको रीडक्स स्टोर के साथ आसिंक तार्किक कोड लिखने की अनुमति देता है। यह आपको ऐसी क्रियाओं को डिस्पैच करने की अनुमति देता है जो आसिंक कोड, जैसे API अनुरोध या अन्य प्रभाव, को शामिल करती है, अपने कार्रवाई सृजनकर्ताओं को एक फ़ंक्शन में लपेटकर जो एक और फ़ंक्शन वापस करता है। | उपर के उदाहरण में, हम तीन क्रिया सृजनकर्ताओं को परिभाषित करते हैं: fetchUserRequest, fetchUserSuccess, और fetchUserError। हम fetchUser क्रिया सृजनकर्ता को भी परिभाषित करते हैं जो एक क्रिया ऑब्जेक्ट की बजाय एक फ़ंक्शन वापस करता है। यह फ़ंक्शन dispatch को एक आर्ग्यूमेंट के रूप में लेता है, जो रीडक्स स्टोर का dispatch फ़ंक्शन होता है। ';
        break;
        case 'jp':
        document.title = 'Redux Thunk は、Redux のミドルウェアライブラリであり、Redux ストアとやり取りする非同期ロジックを記述することができます。これにより、API リクエストやその他の副作用を含む非同期コードを含むアクションをディスパッチできるようになります。アクションクリエーターを別の関数を返す関数でラップすることで、この機能が実現されます。 | 上記の例では、fetchUserRequest、fetchUserSuccess、fetchUserError の 3 つのアクションクリエーターを定義しています。また、アクションオブジェクトの代わりに関数を返すfetchUser アクションクリエーターも定義しています。この関数は、Redux ストアのdispatch 関数を引数として受け取ります。';
        break;
        case 'ko':
        document.title = 'Redux Thunk는 Redux를 위한 미들웨어 라이브러리로, Redux 스토어와 상호 작용하는 비동기 논리를 작성할 수 있게 합니다. 이를 통해 API 요청 또는 다른 부수 효과와 같은 비동기 코드를 포함하는 액션을 디스패치할 수 있습니다. 이를 위해 액션 생성자를 또 다른 함수를 반환하는 함수로 감싸는 방식으로 구현합니다. | 위의 예제에서는 세 개의 액션 생성자를 정의합니다: fetchUserRequest, fetchUserSuccess, 그리고 fetchUserError. 또한 액션 객체 대신 함수를 반환하는 fetchUser 액션 생성자를 정의합니다. 이 함수는 Redux 스토어의 dispatch 함수인 dispatch를 인수로 취합니다.';
        break;
      default:
        document.title = 'Redux Thunk';
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

      <h1>Redux Thunk</h1>
      
      <p>Redux Thunk is a middleware library for Redux that allows you to write async logic that interacts with the Redux store. It enables you to dispatch actions that contain async code, such as API requests or other side effects, by wrapping your action creators in a function that returns another function.</p>

      <p>Here's an example of how Redux Thunk can be used in a React application:</p>

      <code>
        <p><span className='green'>{"// actions.js "}</span></p>

        <p><span className='red'>import</span> axios <span className='red'>from</span> <span className='blue1'>'axios'</span>; </p>

        <p><span className='red'>export const</span> {"fetchUserRequest = () => ({ "}</p>

        <p>&nbsp;&nbsp;<span className='blue'>type</span>: <span className='blue1'>'FETCH_USER_REQUEST'</span>, </p>

        <p>{"}); "}</p>

        <p><span className='red'>export const</span> {"fetchUserSuccess = (user) => ({ "}</p>

        <p>&nbsp;&nbsp;<span className='blue'>type</span>: <span className='blue1'>'FETCH_USER_SUCCESS'</span>,</p>

        <p>&nbsp;&nbsp;<span className='blue'>payload</span>: user, </p>

        <p>{"}); "}</p>

        <p><span className='red'>export const</span> {"fetchUserError = (error) => ({ "}</p>

        <p>&nbsp;&nbsp;<span className='blue'>type</span>: <span className='blue1'>'FETCH_USER_ERROR'</span>, </p>

        <p>&nbsp;&nbsp;<span className='blue'>payload</span>: error, </p>

        <p>{"}); "}</p>
        
        <p><span className='red'>export const</span> {"fetchUser = (userId) => { "}</p>

        <p>&nbsp;<span className='red'>return</span> {"(dispatch) => { "}</p>

        <p>&nbsp;&nbsp;<span className='blueviole'>dispatch</span>(<span className='blueviole'>fetchUserRequest</span>());</p>

        <p>&nbsp;&nbsp;axios.<span className='blue'>get</span>(` <span className='blue1'>{'https://jsonplaceholder.typicode.com/users/$'}</span>{'{userId}'} `)  </p>

        <p>&nbsp;&nbsp;&nbsp;.<span className='blue'>then</span>{"((response) => {"}</p>

        <p>&nbsp;&nbsp;&nbsp;&nbsp;<span className='red'>const</span> user = response.<span className='blue'>data</span>; </p>

        <p>&nbsp;&nbsp;&nbsp;&nbsp;<span className='blueviole'>dispatch</span>(<span className='blueviole'>fetchUserSuccess</span>(user)); </p>

        <p>{"})"}</p>

        <p>&nbsp;&nbsp;&nbsp;.<span className='blue'>catch</span>{"((error) => {"}</p>

        <p>&nbsp;&nbsp;&nbsp;&nbsp;<span className='blueviole'>dispatch</span>(<span className='blueviole'>fetchUserError</span>(error.<span className='blue'>message</span>)); </p>

        <p>&nbsp;&nbsp;{"});"}</p>

        <p>&nbsp;{"};"}</p>

        <p>{"};"}</p>
    </code>

      <p>In the example above, we define three action creators: <b>fetchUserRequest, fetchUserSuccess, and fetchUserError</b>. We also define a <b>fetchUser</b> action creator that returns a function instead of an action object. This function takes <b>dispatch</b> as an argument, which is the Redux store's <b>dispatch</b> function.</p>

      <p>Inside the <b>fetchUser</b> function, we dispatch the <b>fetchUserRequest</b> action, which sets the <b>isLoading</b> state to <b>true</b>. We then make an API call using Axios and dispatch either the <b>fetchUserSuccess or fetchUserError</b> action based on the API response. These actions update the Redux store with the retrieved data or the error message, respectively.</p>

      <p>To use this action creator in a component, we can import it and pass it to <b>dispatch</b> like this:</p>

    <code>
      <p><span className='green'>{"// MyComponent.js"}</span></p>

      <p><span className='red'>import</span> {"React, { useEffect }"} <span className='red'>from</span> <span className='blue1'>'react'</span>;</p>

      <p><span className='red'>import</span> {"{ useDispatch, useSelector }"} <span className='red'>from</span> <span className='blue1'>'react-redux'</span>;</p>

      <p><span className='red'>import</span> {"{ fetchUser }"} <span className='red'>from</span> <span className='blue1'>'./actions'</span>; </p>

      <p>&nbsp;<span className='red'>const</span> MyComponent = {'({'} <span className='blue'>userId</span> {'})'} {"=> { "}</p>

      <p>&nbsp;<span className='red'>const</span> dispatch = <span className='blueviole'>useDispatch</span>(); </p>

      <p>&nbsp;<span className='red'>const</span> user = <span className='blueviole'>useSelector</span>(state {'=>'} state.<span className='blue'>user</span>.<span className='blue'>data</span>); </p>

      <p>&nbsp;<span className='red'>const</span> isLoading = <span className='blueviole'>useSelector</span>(state {'=>'} state.<span className='blue'>user</span>.<span className='blue'>isLoading</span>); </p>

      <p>&nbsp;<span className='red'>const</span> error = <span className='blueviole'>useSelector</span>(state {'=>'} state.<span className='blue'>user</span>.<span className='blue'>error</span>);</p>

      <p>&nbsp;<span className='blueviole'>useEffect</span>{"(() => { "}</p>

      <p>&nbsp;&nbsp;<span className='blueviole'>dispatch</span>(<span className='blueviole'>fetchUser</span>(userId));</p>

      <p>&nbsp;{"}, [dispatch, userId]); "}</p>

      <p>&nbsp;<span className='red'>if</span> {"(isLoading) { "}</p>

      <p>&nbsp;&nbsp;<span className='red'>return</span> {'<'}<span className='green'>div</span>{'>'}Loading...{'</'}<span className='green'>div</span>{'>'};</p>

      <p>{" } "}</p>

      <p>&nbsp;<span className='red'>if</span> {"(error) {  "}</p>

      <p>&nbsp;&nbsp;<span className='red'>return</span> {'<'}<span className='green'>div</span>{'>Error: {error}</'}<span className='green'>div</span>{'>'};</p>

      <p>{"}"}</p>

      <p>&nbsp;&nbsp;<span className='red'>return</span> {"("}</p>

      <p>{'<'}<span className='green'>div</span>{'>'}</p>

      <p>&nbsp;{'<'}<span className='green'>h1</span>{'>{'}user.<span className='blue'>name</span>{'}</'}<span className='green'>h1</span>{'>'}</p>

      <p>&nbsp;{'<'}<span className='green'>p</span>{'>{'}user.<span className='blue'>email</span>{'}</'}<span className='green'>p</span>{'>'}</p>
     
      <p>&nbsp;{'<'}<span className='green'>p</span>{'>{'}user.<span className='blue'>phone</span>{'}</'}<span className='green'>p</span>{'>'}</p>
     
      <p>{"</"}<span className='green'>div</span>{">"}</p>

      <p>&nbsp;{");"}</p>

      <p>{"};"}</p>
   </code>

<p>In the example above, we use the useDispatch and useSelector hooks from the react-redux library to interact with the Redux store. We dispatch the fetchUser action creator in the useEffect hook, which will be called when the component mounts. We also use useSelector to extract the relevant pieces of data from the Redux store, such as the user data and the isLoading and error flags.</p>

<p>Overall, Redux Thunk is a useful middleware library for Redux that allows you to write async logic that interacts with the Redux store. It can help simplify your code and make it easier to reason about async behavior in your React application.</p>

<h3>Redux-Observable</h3>

<p>Redux-Observable is a middleware for Redux that enables the use of reactive programming in Redux applications. It allows developers to handle complex asynchronous actions and events in a declarative, composable, and easy-to-test way using RxJS, a library for reactive programming.</p>

<p>With Redux-Observable, developers can define "epics" which are functions that listen for certain actions, and then react to them with a stream of new actions. These epics are observables, which are functions that receive a stream of events and can transform, filter, or merge them in a declarative way.</p>

<p>Here is an example of how to use Redux-Observable:</p>

<code>
  <p><span className='red'>import</span> {'{ createStore, applyMiddleware } '} <span className='red'>from</span> <span className='blue1'>'redux'</span>;</p>

  <p><span className='red'>import</span>  {'{ createEpicMiddleware, combineEpics }'} <span className='red'>from</span> <span className='blue1'>'redux-observable'</span>;</p>

  <p><span className='red'>import</span> {'{ ajax }'} <span className='red'>from</span> <span className='blue1'>'rxjs/ajax'</span>;  </p>

  <p><span className='red'>import</span> {'{ mergeMap, map, catchError }'} <span className='red'>from</span> <span className='blue1'>'rxjs/operators'</span>;</p>

  <p>&nbsp;<span className='red'>const</span> {"pingEpic = action$ =>"}</p>

  <p>&nbsp;&nbsp;action$.<span className='blue'>ofType</span>(<span className='blue1'>'PING'</span>)</p>

  <p>&nbsp;&nbsp;.<span className='blue'>mergeMap</span>{"(action =>"}</p>

  <p>&nbsp;&nbsp;&nbsp;ajax.<span className='blue'>getJSON</span>(<span className='blue1'>'/api/ping'</span>)</p>

  <p>&nbsp;&nbsp;&nbsp;.<span className='blue'>map</span>{'('}response {'=> ({ '}<span className='blue'>type</span>: <span className='blue1'>'PONG'</span>, <span className='blue'>payload</span>: response {'}))'}  </p>

  <p>&nbsp;&nbsp;&nbsp;.<span className='blue'>catch</span>{'(error => ({'} <span className='blue'>type</span>: <span className='blue1'>'PING_ERROR'</span>, <span className='blue'>payload</span>: error.<span className='blue'>message</span> {'}))'}</p>

  <p>{");"}</p>

  <p>&nbsp;<span className='red'>const</span> rootEpic = <span className='blueviole'>combineEpics</span>{'('}</p>

  <p>&nbsp;&nbsp;{"pingEpic, "}</p>

  <p>&nbsp;&nbsp;<span className='green'>{"// more epics... "}</span></p>

  <p>{"); "}</p>

  <p>&nbsp;<span className='red'>const</span> epicMiddleware = <span className='blueviole'>createEpicMiddleware</span>();</p>

  <p>&nbsp;<span className='red'>const</span> store = <span className='blueviole'>createStore</span>{'('}</p>

  <p>&nbsp;&nbsp;{"reducer, "}</p>

  <p>&nbsp;&nbsp;<span className='blueviole'>applyMiddleware</span>(epicMiddleware)</p>

  <p>{");"}</p>

  <p>epicMiddleware.<span className='blue'>run</span>(rootEpic); </p>
</code>

<p>In this example, we define an epic called <b>pingEpic</b> which listens for an action of type 'PING', and then makes an AJAX request to a server to ping it. If the request is successful, it dispatches an action of type 'PONG' with the response payload. If the request fails, it dispatches an action of type 'PING_ERROR' with the error message as the payload.</p>

<p>We then combine all our epics into a single <b>rootEpic</b>, and create an instance of <b>createEpicMiddleware()</b> to use as a middleware in our Redux store. Finally, we apply the middleware to the store and run the root epic with <b>epicMiddleware.run(rootEpic)</b>.</p>
   
<p>Overall, Redux-Observable is a powerful tool for handling complex asynchronous actions and events in Redux applications. It provides a flexible and declarative way to manage async behavior using reactive programming concepts.</p>   

<b><p>* Text written with the help of a translator. If you find an error, please let us know *</p></b>
    
    <div className='ads-container'>  
  {/*  реклама  */}
  </div>
</div>
   )}
   {language === 'ru' && (
     <div>
       <RuReact_8 />
     </div>
   )}
   {language === 'am' && (
     <div>
       <AmReact_8 />
     </div>
   )} 
   {language === 'fr' && (
     <div>
       <FrReact_8 />
     </div>
   )}
    {language === 'es' && (
     <div>
       <EsReact_8 />
     </div>
   )}
   {language === 'pt' && (
     <div>
       <PtReact_8 />
     </div>
   )} 
   {language === 'it' && (
     <div>
       <ItReact_8 />
     </div>
   )} 
   {language === 'nl' && (
     <div>
       <NlReact_8 />
     </div>
   )}
    {language === 'tj' && (
     <div>
       <TjReact_8 />
     </div>
   )}
    {language === 'ar' && (
     <div>
       <ArReact_8 />
     </div>
   )}
    {language === 'jp' && (
     <div>
       <JpReact_8 />
     </div>
   )}
    {language === 'in' && (
     <div>
       <InReact_8 />
     </div>
   )} 
   {language === 'ko' && (
     <div>
       <KoReact_8 />
     </div>
   )}  
      </div>
    </Wrapper>
  )
}

export default React_8;