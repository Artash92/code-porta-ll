import React, { useState, useEffect } from 'react';
import Wrapper from '../components/Wrapper';
import RuReact_9 from '../language/RuReact_9';
import AmReact_9 from '../language/AmReact_9';
import FrReact_9 from '../language/FrReact_9';
import EsReact_9 from '../language/EsReact_9';
import PtReact_9 from '../language/PtReact_9';
import ItReact_9 from '../language/ItReact_9';
import NlReact_9 from '../language/NlReact_9';
import TjReact_9 from '../language/TjReact_9';
import ArReact_9 from '../language/ArReact_9';
import JpReact_9 from '../language/JpReact_9';
import InReact_9 from '../language/InReact_9';
import KoReact_9 from '../language/KoReact_9';   

function React_9() {
  
  const [language, setLanguage] = useState('en'); 

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
  };
  
  useEffect(() => {
    switch (language) {
      case 'en':
        document.title = 'Redux-Saga | Redux-saga is a library for handling side effects, such as asynchronous requests and data fetching, in Redux applications. It uses generator functions to manage the flow of asynchronous operations and provides a centralized place for handling all side effects, making it easier to reason about and test application behavio | In this example, we define three action types (FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS, and FETCH_USERS_FAILURE), three action creators (fetchUsersRequest, fetchUsersSuccess, and fetchUsersFailure), and a reducer function (usersReducer) to handle state updates.';
        break;
      case 'ru':
        document.title = 'Redux-saga это библиотека для управления побочными эффектами, такими как асинхронные запросы и получение данных, в приложениях Redux. Она использует генераторные функции для управления потоком асинхронных операций и предоставляет централизованное место для обработки всех побочных эффектов, что упрощает понимание и тестирование поведения приложения. | В этом примере мы определяем три типа действий (FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS и FETCH_USERS_FAILURE), три функции-создателя действий (fetchUsersRequest, fetchUsersSuccess и fetchUsersFailure) и функцию-редьюсер (usersReducer) для обновления состояния. ';
        break;
      case 'am':
        document.title = 'Redux-saga-ն գրադարան է Redux հավելվածներում կողմնակի ազդեցությունների կառավարման համար, ինչպիսիք են ասինխրոն հարցումները և տվյալների որոնումը: Այն օգտագործում է գեներատորի ֆունկցիաները՝ վերահսկելու ասինխրոն գործողությունների հոսքը և ապահովում է կենտրոնական տեղ՝ բոլոր կողմնակի ազդեցությունները կարգավորելու համար՝ հեշտացնելով հասկանալը և փորձարկել հավելվածի գործելակերպը: | Ահա մի օրինակ, թե ինչպես կարող եք օգտագործել redux-saga՝ Asynchronous API հարցումը կառավարելու համար. | Մենք նաև սահմանում ենք երկու սագա՝ fetchUsers և usersSaga: FetchUsers սագան օգտագործում է call էֆեկտը API հարցումը կատարելու համար՝ օգտագործելով axios և ուղարկում է fetchUsersSuccess կամ fetchUsersFailure գործողությունները՝ կախված հարցումը հաջող լինելուց: UserSaga-ն լսում է FETCH_USERS_REQUEST գործողությունները և ի պատասխան գործարկում է fetchUsers սագան:';
        break;
        case 'fr':
        document.title = "Redux-Saga est une bibliothèque pour gérer les effets secondaires, tels que les requêtes asynchrones et la récupération de données, dans les applications Redux. Elle utilise des fonctions génératrices pour gérer le flux des opérations asynchrones et fournit un endroit centralisé pour gérer tous les effets secondaires, ce qui facilite la compréhension et le test du comportement de l'application. | Nous définissons également deux sagas : fetchUsers et usersSaga. La saga fetchUsers utilise l'effet call pour effectuer un appel d'API en utilisant axios et envoie soit fetchUsersSuccess soit fetchUsersFailure en fonction de la réussite ou de l'échec de l'appel. La saga usersSaga écoute les actions FETCH_USERS_REQUEST et exécute la saga fetchUsers en réponse. ";
        break;
        case 'es':
        document.title = 'Redux-saga es una biblioteca para manejar efectos secundarios, como solicitudes asíncronas y obtención de datos, en aplicaciones Redux. Utiliza funciones generadoras para gestionar el flujo de operaciones asíncronas y proporciona un lugar centralizado para manejar todos los efectos secundarios, lo que facilita el razonamiento y prueba del comportamiento de la aplicación | También definimos dos sagas: fetchUsers y usersSaga. La saga fetchUsers utiliza el efecto call para hacer una llamada de API usando axios y despacha fetchUsersSuccess o fetchUsersFailure dependiendo de si la llamada tiene éxito o falla. La saga usersSaga escucha las acciones FETCH_USERS_REQUEST y ejecuta la saga fetchUsers en respuesta.';
        break;
        case 'pt':
        document.title = 'Redux-saga é uma biblioteca para lidar com efeitos colaterais, como solicitações assíncronas e recuperação de dados, em aplicativos Redux. Ele usa funções geradoras para gerenciar o fluxo de operações assíncronas e fornece um local centralizado para lidar com todos os efeitos colaterais, tornando mais fácil entender e testar o comportamento da aplicação. | Também definimos duas sagas: fetchUsers e usersSaga. A saga fetchUsers usa o efeito call para fazer uma chamada de API usando axios e despacha fetchUsersSuccess ou fetchUsersFailure dependendo se a chamada é bem-sucedida ou falha. A saga usersSaga escuta as ações FETCH_USERS_REQUEST e executa a saga fetchUsers em resposta. | Nesta configuração, criamos uma loja Redux com nosso usersReducer e aplicamos o sagaMiddleware. Em seguida, executamos o usersSaga usando sagaMiddleware.run. Isso garantirá que nossa saga esteja ativa e ouvindo as ações em nossa aplicação. ';
        break;
        case 'it':
        document.title = "Redux-saga è una libreria per gestire gli effetti collaterali, come le richieste asincrone e il recupero dei dati, nelle applicazioni Redux. Utilizza le funzioni generator per gestire il flusso delle operazioni asincrone e fornisce un luogo centralizzato per gestire tutti gli effetti collaterali, rendendo più facile ragionare e testare il comportamento dell'applicazione. | In questo esempio, definiamo tre tipi di azione (FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS e FETCH_USERS_FAILURE), tre creatori di azioni (fetchUsersRequest, fetchUsersSuccess e fetchUsersFailure) e una funzione reducer (usersReducer) per gestire gli aggiornamenti dello stato. | Definiamo anche due saghe: fetchUsers e usersSaga. La saga fetchUsers utilizza l'effetto call per effettuare una chiamata API utilizzando axios e dispaccia sia fetchUsersSuccess che fetchUsersFailure a seconda che la chiamata riesca o fallisca. La saga usersSaga ascolta le azioni FETCH_USERS_REQUEST e esegue la saga fetchUsers in risposta. ";
        break;
        case 'nl':
        document.title = 'Redux-saga is een bibliotheek voor het afhandelen van bijwerkingen, zoals asynchrone verzoeken en het ophalen van gegevens, in Redux-toepassingen. Het gebruikt generatorfuncties om de stroom van asynchrone bewerkingen te beheren en biedt een gecentraliseerde plaats voor het afhandelen van alle bijwerkingen, waardoor het gemakkelijker wordt om de toepassingsgedrag te begrijpen en te testen. | In dit voorbeeld definiëren we drie actietypen (FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS en FETCH_USERS_FAILURE), drie actie-creators (fetchUsersRequest, fetchUsersSuccess en fetchUsersFailure), en een reducer-functie (usersReducer) om staatupdates af te handelen. | We definiëren ook twee sagas: fetchUsers en usersSaga. De fetchUsers saga gebruikt het call-effect om een API-oproep te maken met behulp van axios en dispatcht fetchUsersSuccess of fetchUsersFailure, afhankelijk van het al dan niet slagen van de oproep. De usersSaga-saga luistert naar FETCH_USERS_REQUEST-acties en voert de fetchUsers-saga uit als reactie.';
        break;
        case 'tj':
        document.title = 'Redux-saga китобхона барои коркарди таъсири тараф, ба монанди дархостҳои асинхронӣ ва гирифтани маълумот дар замимаҳои Redux мебошад. Он функсияҳои генераторро барои идора кардани ҷараёни амалиёти асинхронӣ истифода мебарад ва ҷои мутамарказро барои коркарди ҳама таъсироти номатлуб таъмин мекунад, ки мулоҳиза кардан ва санҷиши рафтори барномаро осонтар мекунад | Дар ин мисол, мо се намуди амал (FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS ва FETCH_USERS_FAILURE), се action creators (fetchUsersRequest, fetchUsersSuccess ва fetchUsersFailure) ва функсияи reducers -ро муайян мекунем. | Мо инчунин ду сагаро муайян мекунем: fetchUsers ва usersSaga. Сагаи fetchUsers эффекти зангро барои занги API бо истифода аз axios истифода мебарад ва вобаста ба муваффақ шудан ё ноком шудани занг fetchUsersSuccess ё fetchUsersFailure мефиристад. Сагаи usersSaga дар посух ба FETCH_USERS_REQUEST actions ва runs достони fetchUsers-ро гӯш мекунад. ';
        break;
        case 'ar':
        document.title = 'Redux-saga هو مكتبة لمعالجة الآثار الجانبية ، مثل الطلبات الغير متزامنة وجلب البيانات ، في تطبيقات Redux. يستخدم وظائف المولد لإدارة تدفق العمليات الغير متزامنة ويوفر مكاناً مركزيًا لمعالجة جميع الآثار الجانبية ، مما يجعل من السهل استنتاج سلوك التطبيق واختباره. | في هذا المثال، نحدد ثلاثة أنواع للإجراءات (FETCH_USERS_REQUEST، FETCH_USERS_SUCCESS، و FETCH_USERS_FAILURE)، وثلاث مُنشئين للإجراءات (fetchUsersRequest، fetchUsersSuccess، و fetchUsersFailure)، ووظيفة مُخفِضة (usersReducer) للتعامل مع تحديثات الحالة. | نحدد أيضًا ساجتين: fetchUsers و usersSaga. تستخدم ساجة fetchUsers تأثير الاستدعاء لإجراء استدعاء API باستخدام axios وترسل entweder fetchUsersSuccess أو fetchUsersFailure اعتمادًا على ما إذا نجح الاستدعاء أو فشل. تستمع ساجة usersSaga إلى إجراءات FETCH_USERS_REQUEST وتشغّل ساجة fetchUsers ردًا على ذلك. ';
        break;
        case 'in':
        document.title = 'Redux-saga एक पुस्तकालय है जो साइड इफेक्ट, जैसे असमंजस अनुरोध और डेटा प्राप्ति, को संभालने के लिए बनाया गया है, Redux एप्लिकेशनों में। यह जनरेटर फ़ंक्शन का उपयोग करता है ताकि असमंजस कार्यों के प्रवाह को प्रबंधित किया जा सके और सभी साइड इफेक्ट को संभालने के लिए एक केंद्रीय स्थान प्रदान करता है, जिससे एप्लिकेशन के व्यवहार को समझना और परीक्षण करना आसान हो जाता है। | इस उदाहरण में, हम तीन क्रिया प्रकार (FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS, और FETCH_USERS_FAILURE), तीन क्रिया सृजक (fetchUsersRequest, fetchUsersSuccess, और fetchUsersFailure), और एक रीड्यूसर फ़ंक्शन (usersReducer) को राज्य अपडेट करने के लिए परिभाषित करते हैं। | हम दो सागा भी परिभाषित करते हैं: fetchUsers और usersSaga। fetchUsers सागा axios का उपयोग करके एक API कॉल करने के लिए कॉल प्रभाव का उपयोग करता है और या तो fetchUsersSuccess या fetchUsersFailure डिस्पैच करता है यदि कॉल सफल होता है या असफल होता है। usersSaga सागा FETCH_USERS_REQUEST क्रियाओं को सुनता है और प्रतिक्रिया में fetchUsers सागा चलाता है।';
        break;
        case 'jp':
        document.title = 'Redux-sagaは、Reduxアプリケーションで非同期リクエストやデータの取得などの副作用を処理するためのライブラリです。ジェネレーター関数を使用して非同期操作のフローを管理し、すべての副作用を処理するための集中化された場所を提供します。これにより、アプリケーションの動作を推論し、テストするのが簡単になります。 | この例では、3つのアクションタイプ（FETCH_USERS_REQUEST、FETCH_USERS_SUCCESS、FETCH_USERS_FAILURE）、3つのアクションクリエーター（fetchUsersRequest、fetchUsersSuccess、fetchUsersFailure）、および状態の更新を処理するリデューサー関数（usersReducer）を定義しています。 | また、2つのサガを定義しています：fetchUsersとusersSaga。fetchUsersサガは、API呼び出しを行い、成功または失敗に応じてfetchUsersSuccessまたはfetchUsersFailureをディスパッチするためにcallエフェクトを使用します。usersSagaサガはFETCH_USERS_REQUESTアクションをリッスンし、応答としてfetchUsersサガを実行します。';
        break;
        case 'ko':
        document.title = 'Redux-saga는 비동기 요청 및 데이터 가져오기와 같은 부수 효과를 처리하기 위한 라이브러리입니다. generator 함수를 사용하여 비동기 작업의 흐름을 관리하고 모든 부수 효과를 처리하기 위한 중앙 집중식 장소를 제공하여 응용 프로그램 동작을 이해하고 테스트하기 쉽게 만듭니다. | 이 예제에서는 세 가지 액션 유형 (FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS 및 FETCH_USERS_FAILURE), 세 가지 액션 생성자 (fetchUsersRequest, fetchUsersSuccess 및 fetchUsersFailure) 및 상태 업데이트를 처리하기 위한 리듀서 함수 (usersReducer)를 정의합니다. | 또한 fetchUsers 및 usersSaga 두 개의 사가를 정의합니다. fetchUsers 사가는 axios를 사용하여 API 호출을 수행하고 호출이 성공 또는 실패하는지에 따라 fetchUsersSuccess 또는 fetchUsersFailure를 디스패치합니다. usersSaga 사가는 FETCH_USERS_REQUEST 액션을 수신하고 응답으로 fetchUsers 사가를 실행합니다.';
        break;
      default:
        document.title = 'Redux-Saga';
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

        <h1>Redux-Saga</h1>

        <p>Redux-saga is a library for handling side effects, such as asynchronous requests and data fetching, in Redux applications. It uses generator functions to manage the flow of asynchronous operations and provides a centralized place for handling all side effects, making it easier to reason about and test application behavio</p>
      
      <p>Here is an example of how you can use redux-saga to handle an asynchronous API call:</p>

    <code>
      <p><span className='red'>import</span> {'{ call, put, takeLatest }'} <span className='red'>from</span> <span className='blue1'>'redux-saga/effects'</span>; </p>

      <p><span className='red'>import</span> axios <span className='red'>from</span> <span className='blue1'>'axios'</span>; </p>

      <p><span className='green'>{"// Action Types "}</span></p>

      <p>&nbsp;<span className='red'>const</span> FETCH_USERS_REQUEST = <span className='blue1'>'FETCH_USERS_REQUEST'</span>;</p>

      <p>&nbsp;<span className='red'>const</span> FETCH_USERS_SUCCESS = <span className='blue1'>'FETCH_USERS_SUCCESS'</span>;</p>

      <p>&nbsp;<span className='red'>const</span> FETCH_USERS_FAILURE = <span className='blue1'>'FETCH_USERS_FAILURE'</span>;</p>

      <p><span className='green'>{"// Action Creators"}</span></p>

      <p>&nbsp;<span className='red'>const</span> fetchUsersRequest {'= () => ({'} <span className='blue'>type</span>: FETCH_USERS_REQUEST {'});'} </p>

      <p>&nbsp;<span className='red'>const</span> fetchUsersSuccess {'= (users) => ({'} <span className='blue'>type</span>: FETCH_USERS_SUCCESS, <span className='blue'>users</span> {'});'} </p>

      <p>&nbsp;<span className='red'>const</span> fetchUsersFailure {'= (error) => ({'} <span className='blue'>type</span>: FETCH_USERS_FAILURE, <span className='blue'>error</span> {'});'} </p>

      <p><span className='green'>{"// Reducer"}</span></p>

      <p>&nbsp;<span className='red'>const</span> initialState = {'{'} <span className='blue'>users</span>: {'[]'}, <span className='blue'>loading</span>: <span className='blue1'>false</span>, <span className='blue'>error</span>: <span className='red'>null</span> {'};'} </p>

      <p>&nbsp;<span className='red'>const</span> {"usersReducer = (state = initialState, action) => {"}</p>

      <p>&nbsp;&nbsp;&nbsp;<span className='red'>switch</span> {'('}action.<span className='blue'>type</span>{") {"}</p>

      <p>&nbsp;&nbsp;&nbsp;&nbsp;<span className='red'>case</span> {"FETCH_USERS_REQUEST:"}</p>

      <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className='red'>return</span> {'{'} ...state, <span className='blue'>loading</span>: <span className='blue1'>true</span> {'};'} </p>

      <p>&nbsp;&nbsp;&nbsp;&nbsp;<span className='red'>case</span> {"FETCH_USERS_SUCCESS:"}</p>

      <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className='red'>return</span> {'{'} ...state, <span className='blue'>users</span>: action.<span className='blue'>users</span>, <span className='blue'>loading</span>: <span className='blue1'>false</span> {'};'} </p>

      <p>&nbsp;&nbsp;&nbsp;&nbsp;<span className='red'>case</span> {"FETCH_USERS_FAILURE:"}</p>

      <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className='red'>return</span> {'{'} ...state, <span className='blue'>error</span>: action.<span className='blue'>error</span>, <span className='blue'>loading</span>: <span className='blue1'>false</span> {'};'} </p>

      <p>&nbsp;&nbsp;&nbsp;&nbsp;<span className='red'>default</span>:</p>

      <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className='red'>return</span> state;</p>

      <p>&nbsp;{" }"}</p>

      <p>{"};"}</p>

      <p><span className='green'>{"// Sagas"}</span></p>

      <p>&nbsp;<span className='red'>function*</span> <span className='blueviole'>fetchUsers</span>{"() {"}</p>

      <p>&nbsp;&nbsp;<span className='red'>try</span> {"{"}</p>

      <p>&nbsp;&nbsp;&nbsp;<span className='red'>const</span> response = <span className='red'>yield</span> <span className='blueviole'>call</span>(axios.<span className='blue'>get</span>, <span className='blue1'>'{'https://jsonplaceholder.typicode.com/users'}</span>'); </p>

      <p>&nbsp;&nbsp;&nbsp;<span className='red'>yield</span> <span className='blueviole'>put</span>(<span className='blueviole'>fetchUsersSuccess</span>(response.<span className='blue'>data</span>)); </p>

      <p>&nbsp;&nbsp;{"}"} <span className='red'>catch</span> {"(error) {"}</p>

      <p>&nbsp;&nbsp;&nbsp;<span className='red'>yield</span> <span className='blueviole'>put</span>(<span className='blueviole'>fetchUsersFailure</span>(error));</p>

      <p>&nbsp;{"}"}</p>

      <p>{"}"}</p>

      <p>&nbsp;<span className='red'>function*</span> <span className='blueviole'>usersSaga</span>{"() {"}</p>

      <p>&nbsp;&nbsp;&nbsp;<span className='red'>yield</span> <span className='blueviole'>takeLatest</span>{'(FETCH_USERS_REQUEST, fetchUsers)'};</p>

      <p>{"}"}</p>

      <p><span className='red'>export</span> {"{ usersReducer, usersSaga };"}</p>
  </code>

<p>In this example, we define three action types (FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS, and FETCH_USERS_FAILURE), three action creators (fetchUsersRequest, fetchUsersSuccess, and fetchUsersFailure), and a reducer function (usersReducer) to handle state updates.</p>

<p>We also define two sagas: fetchUsers and usersSaga. The fetchUsers saga uses the call effect to make an API call using axios and dispatches either fetchUsersSuccess or fetchUsersFailure depending on whether the call succeeds or fails. The usersSaga saga listens to FETCH_USERS_REQUEST actions and runs the fetchUsers saga in response.</p>

<p>Finally, we export both the reducer and saga so they can be used in our Redux store setup:</p>

<code>
  <p><span className='red'>import</span> {"{ createStore, applyMiddleware }"} <span className='red'>from</span> <span className='blue1'>'redux'</span>;</p>

  <p><span className='red'>import</span> {'createSagaMiddleware'} <span className='red'>from</span> <span className='blue1'>'redux-saga'</span>; </p>

  <p><span className='red'>import</span> {"{ usersReducer, usersSaga }"} <span className='red'>from</span> <span className='blue1'>'./users'</span>;</p>

  <p><span className='red'>const</span> sagaMiddleware = <span className='blueviole'>createSagaMiddleware</span>(); </p>

  <p><span className='red'>const</span> store = <span className='blueviole'>createStore</span>(usersReducer, <span className='blueviole'>applyMiddleware</span>(sagaMiddleware)); </p>

  <p>sagaMiddleware.<span className='blue'>run</span>(usersSaga);</p>

  <p><span className='red'>export default</span> store;</p>
</code>

<p>In this setup, we create a Redux store with our usersReducer and apply the sagaMiddleware. We then run the usersSaga using sagaMiddleware.run. This will ensure that our saga is active and listening for actions in our application.</p>

<b><p>* Text written with the help of a translator. If you find an error, please let us know *</p></b>
    
    <div className='ads-container'>  
  {/*  реклама  */}
  </div>
</div>
    )}
    {language === 'ru' && (
      <div>
        <RuReact_9 />
      </div>
    )}
    {language === 'am' && (
      <div>
        <AmReact_9 />
      </div>
    )} 
    {language === 'fr' && (
      <div>
        <FrReact_9 />
      </div>
    )}
     {language === 'es' && (
      <div>
        <EsReact_9 />
      </div>
    )}
    {language === 'pt' && (
      <div>
        <PtReact_9 />
      </div>
    )} 
    {language === 'it' && (
      <div>
        <ItReact_9 />
      </div>
    )} 
    {language === 'nl' && (
      <div>
        <NlReact_9 />
      </div>
    )}
     {language === 'tj' && (
      <div>
        <TjReact_9 />
      </div>
    )}
     {language === 'ar' && (
      <div>
        <ArReact_9 />
      </div>
    )}
     {language === 'jp' && (
      <div>
        <JpReact_9 />
      </div>
    )}
     {language === 'in' && (
      <div>
        <InReact_9 />
      </div>
    )} 
    {language === 'ko' && (
      <div>
        <KoReact_9 />
      </div>
    )}   
    </div>
    </Wrapper>
  )
}

export default React_9;