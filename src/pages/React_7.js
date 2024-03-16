import React,{ useState , useEffect } from 'react';
import Wrapper from '../components/Wrapper';
import RuReact_7 from '../language/RuReact_7';
import AmReact_7 from '../language/AmReact_7';
import FrReact_7 from '../language/FrReact_7';
import EsReact_7 from '../language/EsReact_7';
import PtReact_7 from '../language/PtReact_7';
import ItReact_7 from '../language/ItReact_7';
import NlReact_7 from '../language/NlReact_7';
import TjReact_7 from '../language/TjReact_7';
import ArReact_7 from '../language/ArReact_7';
import JpReact_7 from '../language/JpReact_7';
import InReact_7 from '../language/InReact_7';
import KoReact_7 from '../language/KoReact_7'; 
 

function React_7() {
  const [language, setLanguage] = useState('en');  

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
  };
  
  useEffect(() => {
    switch (language) {
      case 'en':
        document.title = 'Redux | Redux is a state management library for JavaScript applications. It helps manage the state of your application in a predictable way, making it easier to reason about the flow of data in your application. With Redux, you store your application state in a single object called the store, and you use actions and reducers to modify that state | React-Redux is a library that integrates Redux with React. It provides a way to connect your React components to the Redux store, so that you can access and modify the state of your application from your components. React-Redux provides two key components: Provider and connect. ';
        break;
      case 'ru':
        document.title = 'Redux - это библиотека управления состоянием для приложений на JavaScript. Она помогает управлять состоянием вашего приложения предсказуемым образом, упрощая анализ потока данных в вашем приложении. С помощью Redux вы храните состояние вашего приложения в единственном объекте, называемом хранилищем, и используете действия и редьюсеры для изменения этого состояния. | Вот как это работает: когда вы хотите изменить состояние вашего приложения, вы отправляете действие (action). Действие - это простой объект JavaScript, который описывает то, что произошло в вашем приложении. Например, вы можете отправить действие, чтобы добавить новый элемент в список или обновить информацию профиля пользователя. ';
        break;
      case 'am':
        document.title = 'Redux-ը վիճակի ​​կառավարման գրադարան է JavaScript հավելվածների համար: Այն օգնում է կանխատեսելի կերպով կառավարել ձեր հավելվածի վիճակը՝ հեշտացնելով ձեր հավելվածում տվյալների հոսքի վերլուծությունը: Redux-ի միջոցով դուք պահում եք ձեր հավելվածի վիճակը մեկ օբյեկտի մեջ, որը կոչվում է store և օգտագործում գործողություններ և reducers՝ այդ վիճակը փոխելու համար: | Ահա թե ինչպես է այն աշխատում. Երբ ցանկանում եք փոխել ձեր հավելվածի վիճակը, դուք ուղարկում եք գործողություն (action): Գործողությունը պարզ JavaScript օբյեկտ է, որը նկարագրում է մի բան, որը տեղի է ունեցել ձեր հավելվածում: Օրինակ՝ կարող եք գործողություն ուղարկել՝ ցուցակում նոր տարր ավելացնելու կամ օգտվողի պրոֆիլի տեղեկությունները թարմացնելու համար: | Reducers-ը գործառույթներ են, որոնք ընդունում են ձեր հավելվածի ընթացիկ վիճակը և գործողությունները և վերադարձնում նոր վիճակ: Reducers-Ները մաքուր գործառույթներ(functions) են, ինչը նշանակում է, որ նրանք չունեն կողմնակի ազդեցություններ և միշտ վերադարձնում են նույն արդյունքը տվյալ մուտքագրման համար: ';
        break;
        case 'fr':
        document.title = "Redux est une bibliothèque de gestion d'état pour les applications JavaScript. Il aide à gérer l'état de votre application de manière prévisible, facilitant la compréhension du flux de données dans votre application. Avec Redux, vous stockez l'état de votre application dans un seul objet appelé le store, et vous utilisez des actions et des reducers pour modifier cet état. | Voici comment ça marche : lorsque vous souhaitez changer l'état de votre application, vous envoyez une action. L'action est un objet JavaScript simple qui décrit ce qui s'est passé dans votre application. Par exemple, vous pourriez envoyer une action pour ajouter un nouvel élément à une liste, ou pour mettre à jour les informations de profil d'un utilisateur. | Les reducers sont des fonctions qui prennent l'état actuel de votre application et une action, et renvoient un nouvel état. Les reducers sont des fonctions pures, ce qui signifie qu'ils n'ont pas d'effets secondaires et qu'ils renvoient toujours la même sortie pour une entrée donnée.";
        break;
        case 'es':
        document.title = 'Redux es una biblioteca de gestión de estado para aplicaciones JavaScript. Ayuda a gestionar el estado de su aplicación de manera predecible, facilitando el razonamiento sobre el flujo de datos en su aplicación. Con Redux, almacena el estado de su aplicación en un único objeto llamado tienda (store), y utiliza acciones y reductores para modificar ese estado. | Así es como funciona: cuando desea cambiar el estado de su aplicación, despacha una acción. La acción es un objeto JavaScript simple que describe lo que ocurrió en su aplicación. Por ejemplo, podría despachar una acción para agregar un nuevo elemento a una lista, o para actualizar la información de perfil de un usuario. ';
        break;
        case 'pt':
        document.title = 'O Redux é uma biblioteca de gerenciamento de estado para aplicativos JavaScript. Ele ajuda a gerenciar o estado do seu aplicativo de uma maneira previsível, tornando mais fácil entender o fluxo de dados em seu aplicativo. Com o Redux, você armazena o estado do seu aplicativo em um único objeto chamado de store, e você usa actions e reducers para modificar esse estado. | Eis como funciona: quando você deseja alterar o estado do seu aplicativo, você despacha uma action. A action é um objeto JavaScript simples que descreve o que aconteceu no seu aplicativo. Por exemplo, você pode despachar uma action para adicionar um novo item a uma lista, ou para atualizar as informações do perfil de um usuário. ';
        break;
        case 'it':
        document.title = "Redux è una libreria di gestione dello stato per le applicazioni JavaScript. Aiuta a gestire lo stato della tua applicazione in modo prevedibile, rendendo più semplice ragionare sul flusso dei dati nella tua applicazione. Con Redux, memorizzi lo stato dell'applicazione in un unico oggetto chiamato store, e usi azioni e riduttori per modificare tale stato. | Ecco come funziona: quando desideri cambiare lo stato della tua applicazione, invii un'azione. L'azione è un semplice oggetto JavaScript che descrive cosa è successo nella tua applicazione. Ad esempio, potresti inviare un'azione per aggiungere un nuovo elemento a un elenco, o per aggiornare le informazioni del profilo di un utente.";
        break;
        case 'nl':
        document.title = 'Redux is een bibliotheek voor het beheer van de staat voor JavaScript-toepassingen. Het helpt bij het beheren van de staat van uw toepassing op een voorspelbare manier, waardoor het gemakkelijker wordt om de gegevensstroom in uw toepassing te begrijpen. Met Redux slaat u de staat van uw toepassing op in een enkel object dat de store wordt genoemd, en u gebruikt acties en reducers om die staat te wijzigen. | Zo werkt het: Wanneer u de staat van uw toepassing wilt wijzigen, verzendt u een actie. De actie is een eenvoudig JavaScript-object dat beschrijft wat er is gebeurd in uw toepassing. U kunt bijvoorbeeld een actie verzenden om een nieuw item aan een lijst toe te voegen, of om de profielinformatie van een gebruiker bij te werken. | Reducers zijn functies die de huidige staat van uw toepassing en een actie aannemen, en een nieuwe staat retourneren. Reducers zijn pure functies, wat betekent dat ze geen neveneffecten hebben en ze altijd dezelfde output retourneren voor een gegeven input.';
        break;
        case 'tj':
        document.title = 'Redux китобхонаи идоракунии давлатӣ барои барномаҳои JavaScript мебошад. Он ба идоракунии ҳолати барномаи шумо ба таври пешгӯинашаванда кӯмак мекунад, ки дар бораи ҷараёни маълумот дар замимаи шумо мулоҳиза карданро осонтар мекунад. Бо Redux, шумо ҳолати аризаи худро дар як объекте бо номи мағоза нигоҳ медоред ва барои тағир додани ин ҳолат actions ва редукторҳоро истифода мебаред | Ин чӣ гуна кор мекунад: Вақте ки шумо мехоҳед ҳолати аризаи худро тағир диҳед, шумо амал мефиристед. Ин амал як объекти оддии JavaScript мебошад, ки он чиро, ки дар замимаи шумо рух додааст, тасвир мекунад. Масалан, шумо метавонед амалеро барои илова кардани ашёи нав ба рӯйхат фиристед ё маълумоти профили корбарро навсозӣ кунед. ';
        break;
        case 'ar':
        document.title = 'Redux هو مكتبة لإدارة الحالة لتطبيقات JavaScript. يساعد في إدارة حالة تطبيقك بطريقة قابلة للتنبؤ، مما يجعل من السهل استيعاب تدفق البيانات في تطبيقك. باستخدام Redux، تخزن حالة تطبيقك في كائن واحد يسمى المتجر، وتستخدم الإجراءات والمقلصات لتعديل تلك الحالة. | هكذا يعمل الأمر: عندما تريد تغيير حالة تطبيقك، ترسل إجراءً. الإجراء هو كائن JavaScript عادي يصف ما حدث في تطبيقك. على سبيل المثال، قد ترسل إجراءً لإضافة عنصر جديد إلى قائمة، أو لتحديث معلومات ملف تعريف المستخدم. | React-Redux هو مكتبة تدمج Redux مع React. يوفر وسيلة لربط مكونات React الخاصة بك بمتجر Redux، بحيث يمكنك الوصول إلى وتعديل حالة تطبيقك من مكوناتك. يوفر React-Redux عنصرين رئيسيين: Provider و connect.';
        break;
        case 'in':
        document.title = 'रीडक्स | रीडक्स एक जावास्क्रिप्ट एप्लिकेशनों के लिए एक स्टेट प्रबंधन लाइब्रेरी है। यह आपके एप्लिकेशन की स्थिति को एक पूर्वानुमाननीय तरीके से प्रबंधित करने में मदद करता है, जिससे आपके एप्लिकेशन में डेटा के प्रवाह को सोचने में आसानी हो। रीडक्स के साथ, आप अपने एप्लिकेशन की स्थिति को एक एकल ऑब्जेक्ट जिसे स्टोर कहा जाता है में संग्रहित करते हैं, और आप उस स्थिति को संशोधित करने के लिए कार्रवाई और रीड्यूसर्स का उपयोग करते हैं। | यहाँ कैसे काम करता है: जब आप अपने एप्लिकेशन की स्थिति को बदलना चाहते हैं, तो आप एक एक्शन डिस्पैच करते हैं। एक्शन एक सादा जावास्क्रिप्ट ऑब्जेक्ट होता है जो आपके एप्लिकेशन में क्या हुआ है यह वर्णित करता है। उदाहरण के लिए, आप एक्शन डिस्पैच कर सकते हैं ताकि एक नई आइटम को सूची में जोड़ा जा सके, या उपयोगकर्ता के प्रोफ़ाइल जानकारी को अपडेट कर सकते हैं। ';
        break;
        case 'jp':
        document.title = 'ReduxはJavaScriptアプリケーションの状態管理ライブラリです。アプリケーションの状態を予測可能な方法で管理し、データのフローを理解しやすくします。Reduxでは、アプリケーションの状態をストアと呼ばれる単一のオブジェクトに格納し、アクションとリデューサを使用してその状態を変更します。 | 動作の仕組みは次のようになります。アプリケーションの状態を変更したい場合は、アクションをディスパッチします。アクションは、アプリケーションで何が起こったかを記述するプレーンなJavaScriptオブジェクトです。例えば、リストに新しいアイテムを追加したり、ユーザーのプロファイル情報を更新したりするためにアクションをディスパッチすることがあります。| React-Reduxは、ReduxをReactと統合するライブラリです。ReactコンポーネントをReduxストアに接続し、コンポーネントからアプリケーションの状態にアクセスして変更する方法を提供します。React-Reduxには、Providerとconnectという2つの重要なコンポーネントがあります。';
        break;
        case 'ko':
        document.title = '리덕스 / 리덕스는 JavaScript 애플리케이션을 위한 상태 관리 라이브러리입니다. 이는 애플리케이션의 상태를 예측 가능한 방식으로 관리하여 데이터의 흐름을 이해하기 쉽게 합니다. 리덕스를 사용하면 애플리케이션 상태를 스토어라고 불리는 단일 객체에 저장하고 액션과 리듀서를 사용하여 해당 상태를 수정합니다. | 작동 방식은 다음과 같습니다: 애플리케이션의 상태를 변경하려면 액션을 디스패치합니다. 액션은 애플리케이션에서 발생한 일을 설명하는 일반 JavaScript 객체입니다. 예를 들어, 목록에 새 항목을 추가하거나 사용자 프로필 정보를 업데이트하는 등의 작업을 수행할 수 있습니다. | 리듀서는 현재 애플리케이션 상태와 액션을 가져와 새로운 상태를 반환하는 함수입니다. 리듀서는 순수 함수로, 즉 부작용이 없으며 주어진 입력에 대해 항상 동일한 출력을 반환합니다. ';
        break;
      default:
        document.title = 'Redux';
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
      
      <h1>Redux</h1>
   
   <p>Redux is a state management library for JavaScript applications. It helps manage the state of your application in a predictable way, making it easier to reason about the flow of data in your application. With Redux, you store your application state in a single object called the store, and you use actions and reducers to modify that state</p>
   
   <p>Here's how it works: When you want to change the state of your application, you dispatch an action. The action is a plain JavaScript object that describes what happened in your application. For example, you might dispatch an action to add a new item to a list, or to update a user's profile information.</p>
   
   <p>Reducers are functions that take the current state of your application and an action, and return a new state. Reducers are pure functions, which means they don't have any side effects and they always return the same output for a given input.</p>
   
   <p>React-Redux is a library that integrates Redux with React. It provides a way to connect your React components to the Redux store, so that you can access and modify the state of your application from your components. React-Redux provides two key components: Provider and connect.</p>
   
   <p>The Provider component is used to wrap your entire React application. It takes a store object as a prop, and makes that store available to all components in your application.</p>
   
   <p>1. Install the required packages:</p>

   <b>npm install redux react-redux</b>

   <p>2. Create a Redux store:</p>

    <code>
      <p><span className='red'>import</span> {'{ createStore }'} <span className='red'>from</span> <span className='blue1'>'redux'</span>;</p>
      
      <p><span className='red'>import</span> rootReducer <span className='red'>from</span> <span className='blue1'>'./reducers'</span>; </p>

      <p><span className='red'>const</span> store = <span className='blueviole'>createStore</span>(rootReducer); </p>
    </code>

    <p>3. Create Redux actions:</p>

    <code>
      <p><span className='red'>export const</span> {"increment = () => {"}</p>
     
      <p>&nbsp;<span className='red'>return</span>  {"{ "}</p>

      <p>&nbsp;&nbsp;<span className='blue'>type</span> : <span className='blue1'>'INCREMENT'</span></p>

      <p>&nbsp;{" } "}</p>

      <p>{" } "}</p>

      <p><span className='red'>export const</span>  {"decrement = () => { "}</p>

      <p>&nbsp;<span className='red'>return</span>  {" { "}</p>

      <p>&nbsp;&nbsp;<span className='blue'>type</span> : <span className='blue1'>'DECREMENT'</span></p>

      <p>&nbsp;{" } "}</p>

      <p>{" } "}</p>
   </code>

   <p>4. Create Redux reducers:</p>

   <code>
    <p><span className='red'>const</span> counterReducer = {'('}state = <span className='blue1'>0</span>, {"action) => { "}</p>

    <p>&nbsp;<span className='red'>switch</span> (action.<span className='blue'>type</span>) {"{ "}</p>

    <p>&nbsp;&nbsp;<span className='red'>case</span> <span className='blue1'>'INCREMENT'</span>:</p>

    <p>&nbsp;&nbsp;&nbsp;<span className='red'>return</span>  state + <span className='blue1'>1</span>;</p>

    <p>&nbsp;&nbsp;<span className='red'>case</span> <span className='blue1'>'DECREMENT'</span>:</p>

    <p>&nbsp;&nbsp;&nbsp;<span className='red'>return</span> state - <span className='blue1'>1</span>; </p>

    <p>&nbsp;&nbsp;<span className='red'>default</span>: </p>

    <p>&nbsp;&nbsp;&nbsp;<span className='red'>return</span> state; </p>

    <p>&nbsp;{" }"}</p>

    <p>{"} "}</p>

    <p><span className='red'>export default</span> counterReducer;</p>
  </code>

   <p>5. Connect Redux to a React component using React-Redux's <b>connect</b> function:</p>

  <code>
    <p><span className='red'>import</span> {'{ connect }'} <span className='red'>from</span> <span className='blue1'>'react-redux'</span>; </p>

    <p><span className='red'>import</span>  {'{ increment, decrement }'} <span className='red'>from</span> <span className='blue1'>'./actions'</span>;</p>

    <p>&nbsp;<span className='red'>const</span> {"Counter = (props) => { "}</p>

    <p>&nbsp;<span className='red'>return</span> {'('}</p>

    <p>{'<'}<span className='green'>div</span>{'>'}</p>

    <p>&nbsp;&nbsp;{'<'}<span className='green'>h1</span>{'>{'}props.<span className='blue'>count</span>{'}</'}<span className='green'>h1</span>{'>'}</p>

    <p>&nbsp;&nbsp;{'<'}<span className='green'>button</span> <span className='blue'>onClick</span>={'{'}props.<span className='blue'>increment</span>{'}>'}+{'</'}<span className='green'>button</span>{'>'}</p>

    <p>&nbsp;&nbsp;{'<'}<span className='green'>button</span> <span className='blue'>onClick</span>={'{'}props.<span className='blue'>decrement</span>{'}>-</'}<span className='green'>button</span>{'>'}</p>

    <p>{"</"}<span className='green'>div</span>{">"}</p>

    <p>&nbsp;{");"}</p>

    <p>{"} "}</p>

    <p>&nbsp;<span className='red'>const</span> {"mapStateToProps = (state) => {"}</p>

    <p>&nbsp;<span className='red'>return</span> {"{ "}</p>

    <p>&nbsp;&nbsp;&nbsp;<span className='blue'>count</span>: state.<span className='blue'>counter</span></p>

    <p>&nbsp;{"} "}</p>

    <p>{"} "}</p>

    <p>&nbsp;<span className='red'>const</span> {"mapDispatchToProps = (dispatch) => { "}</p>

    <p>&nbsp;<span className='red'>return</span> {"{ "}</p>

    <p>&nbsp;&nbsp;&nbsp;<span className='blue'>increment</span>: {"() =>"} <span className='blueviole'>dispatch</span>(<span className='blueviole'>increment</span>()), </p>

    <p>&nbsp;&nbsp;&nbsp;<span className='blue'>decrement</span>: {"() =>"} <span className='blueviole'>dispatch</span>(<span className='blueviole'>decrement</span>())</p>

    <p>&nbsp;{"}"}</p>

    <p>{"}"}</p>

    <p><span className='red'>export default</span> <span className='blueviole'>connect</span>(mapStateToProps, mapDispatchToProps)(Counter); </p>
  </code>

   <p>6. Wrap your app with the <b>Provider</b> component to make the Redux store available to all components:</p>

    <code> 
      <p><span className='red'>import</span> {"{ Provider } "} <span className='red'>from</span> <span className='blue1'>'react-redux'</span>;</p>

      <p><span className='red'>import</span> store <span className='red'>from</span> <span className='blue1'>'./store'</span>;</p>

      <p><span className='red'>import</span> Counter <span className='red'>from</span> <span className='blue1'>'./Counter'</span>; </p>

      <p>&nbsp;<span className='red'>const</span> {"App = () => { "}</p>

      <p>&nbsp;<span className='red'>return</span> {"("}</p>

      <p>{"<"}<span className='blueviole'>Provider</span> <span className='blue'>store</span>={"{store}> "}</p>

      <p>&nbsp;&nbsp;{"<"}<span className='blueviole'>Counter</span> {"/>"}</p>

      <p>{"</"}<span className='blueviole'>Provider</span>{">"}</p>

      <p>&nbsp;{");"}</p>

      <p>{"}"}</p>

      <p><span className='red'>export default</span> App;</p>
    </code>

    <p>This is a basic example of how to use Redux and React-Redux in a React application. Keep in mind that this is just the tip of the iceberg, and there's much more to learn about Redux and its ecosystem.</p>

    <p>there are a few more things to keep in mind when using Redux in a React application:</p>

    <p>1. Redux middleware: Middleware is a way to modify or intercept Redux actions before they reach the reducers. Middleware can be used for tasks such as logging, asynchronous requests, and more. Some popular middleware options for Redux include <b>redux-thunk, redux-saga, and redux-observable</b>.</p>

    <p>2. Redux devtools: Redux devtools is a browser extension that provides a useful UI for debugging and inspecting the Redux store. It allows you to inspect actions and state changes, and also provides time-travel debugging functionality.</p>

    <p>3. Redux selectors: Selectors are functions that extract specific pieces of data from the Redux store. They can be used to compute derived data, filter and transform data, and more. Selectors can help simplify your components by providing them with the exact data they need, without having to worry about the shape of the store.</p>

    <p>4. Redux ducks: Ducks is a proposal for organizing Redux code into modules that contain all the related action types, action creators, and reducers for a specific feature or domain. This approach can help simplify your codebase and make it easier to maintain.</p>

    <p>These are just a few of the additional topics you may want to explore when working with Redux. There are many other libraries and tools available in the Redux ecosystem, so it's important to take the time to learn about them and decide which ones are the best fit for your project.</p>
    
    <b><p>* Text written with the help of a translator. If you find an error, please let us know *</p></b>
    
    <div className='ads-container'>  
  {/*  реклама  */}
  </div>
    </div>
    )}
    {language === 'ru' && (
      <div>
        <RuReact_7 />
      </div>
    )}
    {language === 'am' && (
      <div>
        <AmReact_7 />
      </div>
    )} 
    {language === 'fr' && (
      <div>
        <FrReact_7 />
      </div>
    )}
     {language === 'es' && (
      <div>
        <EsReact_7 />
      </div>
    )}
    {language === 'pt' && (
      <div>
        <PtReact_7 />
      </div>
    )} 
    {language === 'it' && (
      <div>
        <ItReact_7 />
      </div>
    )} 
    {language === 'nl' && (
      <div>
        <NlReact_7 />
      </div>
    )}
     {language === 'tj' && (
      <div>
        <TjReact_7 />
      </div>
    )}
     {language === 'ar' && (
      <div>
        <ArReact_7 />
      </div>
    )}
     {language === 'jp' && (
      <div>
        <JpReact_7 />
      </div>
    )}
     {language === 'in' && (
      <div>
        <InReact_7 />
      </div>
    )} 
    {language === 'ko' && (
      <div>
        <KoReact_7 />
      </div>
    )}  
    </div>
    </Wrapper>
  )
}

export default React_7;