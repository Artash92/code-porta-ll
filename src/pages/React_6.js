import React,{ useState , useEffect } from 'react';
import Wrapper from '../components/Wrapper';
import RuReact_6 from '../language/RuReact_6';
import AmReact_6 from '../language/AmReact_6';
import FrReact_6 from '../language/FrReact_6';
import EsReact_6 from '../language/EsReact_6';
import PtReact_6 from '../language/PtReact_6';
import ItReact_6 from '../language/ItReact_6';
import NlReact_6 from '../language/NlReact_6';
import TjReact_6 from '../language/TjReact_6';
import ArReact_6 from '../language/ArReact_6';
import JpReact_6 from '../language/JpReact_6';
import InReact_6 from '../language/InReact_6';
import KoReact_6 from '../language/KoReact_6'; 

function React_6() {
  const [language, setLanguage] = useState('en');  

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
  };

  useEffect(() => {
    switch (language) {
      case 'en':
        document.title = 'React Refs | In React, a ref is a way to access the underlying DOM node or React component instance of a rendered element. You can use refs to get access to certain properties or methods of a component, or to modify its behavior. | Event Emitter | React Animation | CSSTransition | TransitionGroup';
        break;
      case 'ru':
        document.title = 'Реакт ссылки (Refs) | В React, ссылка (ref) - это способ доступа к базовому узлу DOM или экземпляру компонента React отображаемого элемента. Вы можете использовать ссылки, чтобы получить доступ к определенным свойствам или методам компонента, или изменить его поведение. | Event Emitter - это шаблон проектирования, который позволяет объектам в программе взаимодействовать друг с другом, запуская и обрабатывая события. Простыми словами, Event Emitter - это механизм для передачи и получения сообщений в программе. | В JavaScript класс EventEmitter является встроенным модулем, который обеспечивает способ реализации этого шаблона. Вот пример того, как использовать EventEmitter в Node.js: | Анимация в React ';
        break;
      case 'am':
        document.title = 'React հղումներ (Refs) | React-ում ref-ը միջոց է՝ մուտք գործելու հիմքում ընկած DOM հանգույց կամ ներկայացվող տարրի React բաղադրիչի օրինակ: Դուք կարող եք օգտագործել հղումներ՝ բաղադրիչի որոշակի հատկություններ կամ մեթոդներ մուտք գործելու կամ դրա գործելակերպը փոխելու համար: | Event Emitter-ը դիզայնի օրինաչափություն է, որը թույլ է տալիս ծրագրի օբյեկտներին փոխազդել միմյանց հետ՝ շարունակելով և մշակելով իրադարձությունները: Պարզ բառերով ասած՝ Event Emitter-ը ծրագրում հաղորդագրություններ ուղարկելու և ստանալու մեխանիզմ է: | JavaScript-ում EventEmitter կլասը ներկառուցված մոդուլ է, որն ապահովում է այս օրինաչափությունն իրականացնելու միջոց: Ահա մի օրինակ, թե ինչպես օգտագործել EventEmitter-ը Node.js-ում: | Անիմացիա React-ում ';
        break;
        case 'fr':
        document.title = "Références React | En React, un ref est un moyen d'accéder au nœud DOM sous-jacent ou à l'instance de composant React d'un élément rendu. Vous pouvez utiliser des refs pour accéder à certaines propriétés ou méthodes d'un composant, ou pour modifier son comportement. | Émetteur d'événements | En React, vous pouvez ajouter des animations à vos composants en utilisant une variété de techniques. Les animations peuvent rendre votre interface utilisateur plus attrayante et fournir des retours visuels à l'utilisateur lorsque les choses changent.";
        break;
        case 'es':
        document.title = 'En React, una ref es una forma de acceder al nodo DOM subyacente o a la instancia del componente React de un elemento renderizado. Puede utilizar referencias para obtener acceso a determinadas propiedades o métodos de un componente, o para modificar su comportamiento. | Un emisor de eventos es un patrón de diseño que permite que los objetos en un programa se comuniquen entre sí mediante la activación y el manejo de eventos. En términos simples, un emisor de eventos es un mecanismo para transmitir y recibir mensajes dentro de un programa. | En JavaScript, la clase EventEmitter es un módulo incorporado que proporciona una forma de implementar este patrón. Aquí tienes un ejemplo de cómo usar EventEmitter en Node.js:';
        break;
        case 'pt':
        document.title = 'No React, um ref é uma maneira de acessar o nó DOM subjacente ou a instância do componente React de um elemento renderizado. Você pode usar refs para obter acesso a determinadas propriedades ou métodos de um componente ou para modificar seu comportamento. | Emissor de Eventos Um emissor de evento é um padrão de design que permite que objetos em um programa se comuniquem entre si disparando e manipulando eventos. Em termos simples, um emissor de eventos é um mecanismo para transmitir e receber mensagens dentro de um programa. | Em JavaScript, a classe EventEmitter é um módulo integrado que fornece uma maneira de implementar esse padrão. Aqui está um exemplo de como usar EventEmitter em Node.js: |No React, você pode adicionar animações aos seus componentes usando diversas técnicas. As animações podem tornar sua IU mais envolvente e fornecer feedback visual ao usuário quando as coisas mudam.';
        break;
        case 'it':
        document.title = "In React, un ref è un modo per accedere al nodo DOM sottostante o all'istanza del componente React di un elemento renderizzato. Puoi utilizzare i riferimenti per ottenere l'accesso a determinate proprietà o metodi di un componente o per modificarne il comportamento. | Un emettitore di eventi è un modello di progettazione che consente agli oggetti di un programma di comunicare tra loro attivando e gestendo eventi. In termini semplici, un emettitore di eventi è un meccanismo per trasmettere e ricevere messaggi all'interno di un programma. | In JavaScript, la classe EventEmitter è un modulo integrato che fornisce un modo per implementare questo modello. Ecco un esempio di come utilizzare EventEmitter in Node.js: ";
        break;
        case 'nl':
        document.title = 'In React is een ref een manier om toegang te krijgen tot het onderliggende DOM-knooppunt of de React-componentinstantie van een weergegeven element. U kunt refs gebruiken om toegang te krijgen tot bepaalde eigenschappen of methoden van een component, of om het gedrag ervan te wijzigen. | Een gebeurteniszender is een ontwerppatroon waarmee objecten in een programma met elkaar kunnen communiceren door gebeurtenissen te activeren en af te handelen. Simpel gezegd is een gebeurteniszender een mechanisme voor het uitzenden en ontvangen van berichten binnen een programma. | In JavaScript is de klasse EventEmitter een ingebouwde module die een manier biedt om dit patroon te implementeren. Hier is een voorbeeld van het gebruik van EventEmitter in Node.js: | In React kun je animaties aan je componenten toevoegen met behulp van verschillende technieken. Animaties kunnen uw gebruikersinterface aantrekkelijker maken en visuele feedback aan de gebruiker geven als er dingen veranderen. ';
        break;
        case 'tj':
        document.title = 'Дар React, ref роҳи дастрасӣ ба гиреҳи аслии DOM ё мисоли ҷузъҳои React-и элементи додашуда мебошад. Шумо метавонед refs-ро барои дастрасӣ ба хосиятҳо ё усулҳои муайяни ҷузъ ё тағир додани рафтори он истифода баред. | Эмитенти ҳодиса намунаи тарроҳӣ мебошад, ки ба объектҳои барнома имкон медиҳад, ки тавассути ангеза ва коркарди рӯйдодҳо бо ҳамдигар муошират кунанд. Ба ибораи оддӣ, эмитенти ҳодиса механизми пахш ва қабули паёмҳо дар дохили барнома мебошад. | Дар JavaScript синфи EventEmitter модули дарунсохт аст, ки роҳи татбиқи ин намунаро таъмин мекунад. Ин аст мисоли тарзи истифодаи EventEmitter дар Node.js: | Дар React, шумо метавонед намунаи эмитенти ҳодисаро барои иртибот байни ҷузъҳои гуногуни замимаи худ истифода баред. Ин метавонад барои интиқоли маълумот ё ангезиши амалҳо байни ҷузъҳое, ки мустақиман бо ҳамдигар алоқаманд нестанд, муфид бошад. ';
        break;
        case 'ar':
        document.title = 'الرد المراجع | في React، الـ ref هو طريقة للوصول إلى عنصر DOM الأساسي أو مثيل مكون React لعنصر مقدم. يمكنك استخدام الـ refs للوصول إلى خصائص أو طرق معينة من مكون، أو لتعديل سلوكه. | مصدر الحدث | مصدر الحدث هو نمط تصميم يسمح للكائنات في برنامج بالتواصل مع بعضها البعض عن طريق إطلاق ومعالجة الأحداث. ببساطة، مصدر الحدث هو آلية لبث الرسائل واستقبالها داخل برنامج. | في JavaScript، فئة EventEmitter هي وحدة مدمجة توفر وسيلة لتنفيذ هذا النمط. إليك مثال على كيفية استخدام EventEmitter في Node.js: | رد الفعل في React';
        break;
        case 'in':
        document.title = 'रिएक्ट रेफ | रिएक्ट में, रेफ एक प्रकार का तरीका है जिससे किसी रेंडर किए गए तत्व के अंतर्निहित डोम नोड या रिएक्ट कॉम्पोनेंट इंस्टेंस तक पहुँचा जा सकता है। आप रेफ का उपयोग करके किसी कॉम्पोनेंट के कुछ गुण या विधियों तक पहुँच सकते हैं, या उसके व्यवहार को संशोधित कर सकते हैं। | इवेंट इमिटर | इवेंट इमिटर एक डिज़ाइन पैटर्न है जो एक प्रोग्राम में वस्तुओं को आपस में संचार करने की अनुमति देता है जो इवेंट्स को ट्रिगर और हैंडल करने के द्वारा होता है। सरल शब्दों में, एक इवेंट इमिटर प्रोग्राम के भीतर संदेश प्रसारित और प्राप्त करने के लिए एक तंत्र है। | जावास्क्रिप्ट में, EventEmitter क्लास एक इनबिल्ट मॉड्यूल है जो इस पैटर्न को कैसे लागू करने का तरीका प्रदान करता है। यहाँ नोड.जेएस में EventEmitter का उपयोग करने का एक उदाहरण है: | रिएक्ट में, आप अपने एप्लिकेशन में विभिन्न कॉम्पोनेंट्स के बीच संचार के लिए इवेंट इमिटर पैटर्न का उपयोग कर सकते हैं। यह उन कॉम्पोनेंट्स के बीच डेटा पास करने या क्रियाओं को ट्रिगर करने के लिए उपयोगी हो सकता है जो सीधे रूप से एक-दूसरे संबंधित नहीं हैं। ';
        break;
        case 'jp':
        document.title = 'Reactでは、refはレンダリングされた要素の基礎となるDOMノードまたはReactコンポーネントインスタンスにアクセスする方法です。refを使用して、コンポーネントの特定のプロパティやメソッドにアクセスしたり、その動作を変更したりすることができます。| イベントエミッターは、プログラム内のオブジェクトがイベントをトリガーして処理することで互いに通信するデザインパターンです。単純に言えば、イベントエミッターは、プログラム内でメッセージをブロードキャストして受信するメカニズムです。| JavaScriptでは、EventEmitterクラスはこのパターンを実装する方法を提供する組み込みモジュールです。以下は、Node.jsでEventEmitterを使用する方法の例です | Reactでは、イベントエミッターパターンを使用してアプリケーション内の異なるコンポーネント間で通信できます。これは、お互いに直接関連していないコンポーネント間でデータを渡したりアクションをトリガーしたりする場合に役立ちます。';
        break;
        case 'ko':
        document.title = '리액트 Refs | 리액트에서 ref는 렌더링된 요소의 기본 DOM 노드 또는 리액트 컴포넌트 인스턴스에 액세스하는 방법입니다. ref를 사용하여 컴포넌트의 특정 속성이나 메소드에 액세스하거나 그 동작을 수정할 수 있습니다. | React 애니메이션 | React에서는 다양한 기술을 사용하여 구성 요소에 애니메이션을 추가할 수 있습니다. 애니메이션을 추가하면 UI가 더 매력적이고 변경 사항이 있을 때 사용자에게 시각적 피드백을 제공할 수 있습니다.';
        break;
      default:
        document.title = 'React Refs';
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
     
      <h1>React Refs</h1>

    <p>In React, a <b>ref</b> is a way to access the underlying DOM node or React component instance of a rendered element. You can use refs to get access to certain properties or methods of a component, or to modify its behavior.</p>

    <p>Here's an example of how to create a ref in React:</p>

    <code>
     <p><span className='red'>import</span>  React, {'{ useRef }'} <span className='red'>from</span> <span className='blue1'>'react'</span>;  </p>

     <p><span className='red'>function</span> <span className='blueviole'>TextInput</span>{'() {'}</p>

     <p>&nbsp;<span className='red'>const</span> inputRef = <span className='blueviole'>useRef</span>(<span className='red'>null</span>); </p> 

     <p>&nbsp;<span className='red'>const</span> {'handleClick = () => {'}</p>

     <p> inputRef.<span className='blue'>current</span>.<span className='blue'>focus</span>();</p>

     <p>{' };'}</p>

     <p>&nbsp;<span className='red'>return</span> {'('}</p>

     <p>{'<'}<span className='green'>div</span>{'>'}</p>

     <p>&nbsp;{'<'}<span className='green'>input</span> <span className='blue'>type</span>=<span className='blue1'>"text"</span> <span className='blue'>ref</span>={'{inputRef} />'}</p>

     <p>&nbsp;{'<'}<span className='green'>button</span> <span className='blue'>onClick</span>={'{handleClick}>'}Focus Input{'</'}<span className='green'>button</span>{'>'}</p>

     <p>{'</'}<span className='green'>div</span>{'>'}</p>

     <p>&nbsp;{' );'}</p>

     <p>{'}'}</p>
    </code>

    <p>In this example, we create a <b>ref</b> using the <b>useRef</b> hook. We then pass the <b>ref</b> to the <b>input</b> element using the <b>ref</b> prop.</p>

    <p>We also create a <b>handleClick</b> function that uses the <b>current</b> property of the <b>ref</b> to call the <b>focus</b> method on the <b>input</b> element. This allows us to set focus to the input when the user clicks the "Focus Input" button.</p>

     <p>Overall, using <b>refs</b> can be a powerful tool for accessing and manipulating components in React. However, it's important to use them sparingly and avoid relying too heavily on imperative code, as this can make your code harder to reason about and maintain.</p>

    <b>Event Emitter</b>

<p>An event emitter is a design pattern that allows objects in a program to communicate with each other by triggering and handling events. In simple terms, an event emitter is a mechanism for broadcasting and receiving messages within a program.</p>

<p>In JavaScript, the EventEmitter class is a built-in module that provides a way to implement this pattern. Here's an example of how to use EventEmitter in Node.js:</p>

<code>
  <p><span className='red'>const</span> EventEmitter = <span className='blueviole'>require</span>(<span className='blue1'>'events'</span>); </p>

  <p><span className='red'>class</span> MyEmitter <span className='red'>extends</span> EventEmitter {"{}"}</p>

  <p><span className='red'>const</span> myEmitter = <span className='red'>new</span> MyEmitter(); </p>

  <p>myEmitter.<span className='blue'>on</span>{'('}<span className='blue1'>'event'</span>, (arg){" => {"}</p>

  <p> console.<span className='blue'>log</span>(<span className='blue1'>'Event triggered with argument:'</span>, arg); </p>

  <p>{"});"}</p>

  <p> myEmitter.<span className='blue'>emit</span>(<span className='blue1'>'event', 'Hello, world!'</span>); </p>
</code>

<p>In this example, we create a custom <b>MyEmitter</b> class that extends the <b>EventEmitter</b> class. We then create an instance of this class and define a listener for the <b>event</b> event using the <b>on</b> method. Finally, we emit the <b>event</b> event and pass a string argument, which triggers the listener and logs the argument to the console.</p>

<p>Overall, using an event emitter can be a useful way to implement a pub-sub pattern in your code, where different parts of your program can communicate with each other without having to be tightly coupled together. However, it's important to use this pattern judiciously and not rely too heavily on events, as this can make your code harder to understand and debug.</p>

<p><b>In React</b>, you can use an event emitter pattern to communicate between different components in your application. This can be useful for passing data or triggering actions between components that are not directly related to each other.</p>

<p>One way to implement an event emitter pattern in React is to use a third-party library such as <b>eventemitter3 or mitt</b>. These libraries provide a simple API for creating and subscribing to events, and can be used with both class components and functional components with hooks.</p>

<p>Here's an example of how to use <b>eventemitter3</b> in a React component:</p>

<code>
  <p><span className='red'>import</span> React, {"{ useEffect }"} <span className='red'>from</span> <span className='blue1'>'react'</span>; </p>

  <p><span className='red'>import</span> EventEmitter <span className='red'>from</span> <span className='blue1'>'eventemitter3'</span>;  </p>

  <p>&nbsp;<span className='red'>const</span>  emitter = <span className='red'>new</span> EventEmitter(); </p>

  <p><span className='red'>function</span> <span className='blueviole'>ComponentA</span>() {"{"}</p>

  <p>&nbsp;<span className='blueviole'>useEffect</span>{"(() => { "}</p>

  <p>&nbsp;&nbsp;emitter.<span className='blue'>emit</span>{'('}<span className='blue1'>'eventA'</span>, {'{'} <span className='blue'>data</span>: <span className='blue1'>'Hello from ComponentA'</span> {'})'}; </p>

  <p>{"}, []);"}</p>

  <p>&nbsp;&nbsp;<span className='red'>return</span> {'<'}<span className='green'>div</span>{'>'}ComponentA{'</'}<span className='green'>div</span>{">; "}</p>

  <p>{"} "}</p>

  <p><span className='red'>function</span> <span className='blueviole'>ComponentB</span>{"() {"}</p>

  <p>&nbsp;<span className='blueviole'>useEffect</span>{"(() => {"}</p>

  <p>&nbsp;&nbsp;emitter.<span className='blue'>on</span>(<span className='blue1'>'eventA'</span>, handleEventA); </p>

  <p>&nbsp;&nbsp;<span className='red'>return</span>  () {'=>'} emitter.<span className='blue'>off</span>(<span className='blue1'>'eventA'</span>, handleEventA);</p>

  <p>{" }, []);"}</p>

  <p>&nbsp;<span className='red'>const</span>  handleEventA = (payload) {"=> {"}</p>

  <p>&nbsp;&nbsp;{'console.'}<span className='blue'>log</span>(<span className='blue1'>'Received eventA:'</span>, payload.<span className='blue'>data</span>);</p>

  <p>{" }; "}</p>

  <p>&nbsp;&nbsp;<span className='red'>return</span> {'<'}<span className='green'>div</span>{'>'}ComponentB{'</'}<span className='green'>div</span>{">; "}</p>

  <p>{"}"}</p>
</code>

<p>In this example, we create an instance of <b>EventEmitter called emitter</b>. In <b>ComponentA</b>, we use the <b>useEffect</b> hook to emit an event called <b>eventA</b> with some data. In <b>ComponentB</b>, we use the <b>useEffect</b> hook to subscribe to the <b>eventA</b> event, and define a callback function called <b>handleEventA</b> that logs the data to the console.</p>

<p>When ComponentA is mounted, it emits the eventA event with some data. When ComponentB is mounted, it subscribes to the eventA event and starts listening for any events with that name. When eventA is emitted, handleEventA is called with the data, and it logs the message to the console.</p>

<p>Overall, using an event emitter pattern in React can be a useful way to implement communication between components that are not directly related to each other. However, it's important to use this pattern judiciously and not rely too heavily on events, as this can make your code harder to understand and debug.</p>

<h4>React Animation</h4>

<p>In React, you can add animations to your components using a variety of techniques. Animations can make your UI more engaging and provide visual feedback to the user when things change.</p>

<p>One popular way to implement animations in React is to use CSS transitions or animations. You can add CSS classes to your components to trigger these animations, and use React's <b>className</b> prop to toggle the classes based on the component's state.</p>

<p>Here's an example of how to use CSS transitions to animate a button when it's clicked:</p>

<code>
  <p><span className='red'>import</span> {'React, { useState }'} <span className='red'>from</span> <span className='blue1'>'react'</span>;</p> 

  <p><span className='red'>import</span>  <span className='blue1'>'./Button.css'</span>;</p>

  <p><span className='red'>function</span> <span className='blueviole'>Button</span>{"() {"}</p>

  <p>&nbsp;<span className='red'>const</span>  {"[isClicked, setIsClicked]"} = <span className='blueviole'>useState</span>(<span className='blue1'>false</span>); </p>

  <p>&nbsp;<span className='red'>const</span> {"handleClick = () => { "}</p>

  <p><span className='blueviole'>setIsClicked</span>(<span className='blue1'>true</span>); </p>

  <p><span className='blueviole'>setTimeout</span>{"(() => "}<span className='blueviole'>setIsClicked</span>(<span className='blue1'>false</span>), <span className='blue1'>1000</span>{')'};</p>

  <p>{"};"}</p>

  <p>&nbsp;<span className='red'>return</span> {"("}</p>

  <p>{'<'}<span className='green'>button</span> <span className='blue'>className</span>={'{'}<span className='blue1'>`button {'${'}</span>isClicked ? <span className='blue1'>'clicked'</span> : <span className='blue1'>''{'}`'}</span>{'}'} <span className='blue'>onClick</span>={'{handleClick}>'}</p>

  <p>&nbsp;{"Click me! "}</p>

  <p>{"</"}<span className='green'>button</span>{">"}</p>

  <p>{"); "}</p>

  <p>{" }"}</p>
</code>

<p>In this example, we define a component called <b>Button</b> that uses the <b>useState</b> hook to keep track of whether the button has been clicked or not. When the button is clicked, we set the <b>isClicked</b> state to <b>true</b>, which adds the <b>clicked</b> class to the button. We then use <b>setTimeout</b> to remove the <b>clicked</b> class after 1 second, which triggers the transition back to the original state.</p>

<p>We also define a CSS file called <b>Button.css</b> that defines the styles for the button and the clicked <b>class</b>:</p>

<code>
  <p>{'.button {'}</p>

  <p>&nbsp;&nbsp;<span className='blue'>background-color</span>: <span className='blue1'>blue</span>; </p>

  <p>&nbsp;&nbsp;<span className='blue'>color</span>: <span className='blue1'>white</span>;</p>

  <p>&nbsp;&nbsp;<span className='blue'>padding</span>: 10<span className='blue1'>px</span> 20<span className='blue1'>px</span>; </p>

  <p>&nbsp;&nbsp;<span className='blue'>border</span>: <span className='blue1'>none</span>;</p>

  <p>&nbsp;&nbsp;<span className='blue'>border-radius</span>: 5<span className='blue1'>px</span>;</p>

  <p>&nbsp;&nbsp;<span className='blue'>transition</span>: <span className='blue1'>background-color</span> 0.5<span className='blue1'>s</span>; </p>

  <p>{'}'}</p>

  <p>{'.clicked {'}</p>

  <p>&nbsp;&nbsp;<span className='blue'>background-color</span>: <span className='blue1'>red</span>; </p>

  <p>{'}'}</p>
</code>

<p>In this CSS file, we define the styles for the button and specify a <b>transition</b> property on the <b>button</b> class to animate changes to the <b>background-color</b> property. We also define the <b>clicked</b> class, which changes the <b>background-color</b> to red when applied.</p>

<p>Another way to implement animations in React is to use a third-party library such as <b>react-spring or framer-motion</b>. These libraries provide a more flexible API for creating complex animations and can be useful for more advanced use cases.</p>
    
<p><b>react-transition-group</b> is a third-party library for React that provides a way to easily add CSS transitions and animations to your components. It provides a set of components and APIs for managing the lifecycle of transitions, including mounting and unmounting elements, adding and removing classes, and delaying animations.</p>

<b>{'npm install react-transition-group'}</b>

<p>The core components in <b>react-transition-group are Transition, CSSTransition, and TransitionGroup</b>. Here's a brief overview of each component:</p>

<p>• <b>Transition</b>: This component defines the basic lifecycle of a transition, including entering, entered, exiting, and exited states. You can use this component to trigger  </p>

<p>• <b>CSSTransition</b>: This component extends the <b>Transition</b> component and adds support for CSS transitions and animations. You can specify CSS classes to apply to your component during the different stages of the transition, such as <b>enter, enter-active, exit, and exit-active</b>.</p>

<p>• <b>TransitionGroup</b>: This component is used to manage a set of <b>Transition or CSSTransition</b> components. It tracks the mounting and unmounting of components and can apply different transition effects to each component. </p>

<p>Here's an example of how to use <b>react-transition-group</b> to add a fade-in animation to a component when it's mounted:</p>


<code>
  <p><span className='red'>import</span>  {'React, { useState }'} <span className='red'>from</span> <span className='blue1'>'react'</span>; </p>

  <p><span className='red'>import</span>  {'{ CSSTransition }'} <span className='red'>from</span> <span className='blue1'>'react-transition-group'</span>;</p>

  <p><span className='red'>import</span>  <span className='blue1'>'./FadeIn.css'</span>;</p>

  <p><span className='red'>function</span> <span className='blueviole'>FadeIn</span>{"() { "}</p>

  <p>&nbsp;<span className='red'>const</span> {'[isMounted, setIsMounted]'} = <span className='blueviole'>useState</span>(<span className='blue1'>false</span>); </p>

  <p>&nbsp;<span className='red'>const</span> {'handleMount = () => '}<span className='blueviole'>setIsMounted</span>(<span className='blue1'>true</span>);  </p>

  <p>&nbsp;<span className='red'>return</span> {"( "}</p>

  <p>{"<> "}</p>

  <p>&nbsp;{'<'}<span className='green'>button</span> <span className='blue'>onClick</span>={'{handleMount}>Mount component</'}<span className='green'>button</span>{'>'}</p>

  <p>&nbsp;{'<'}<span className='blueviole'>CSSTransition</span> <span className='blue'>in</span>={'{isMounted}'} <span className='blue'>timeout</span>={'{'}<span className='blue1'>300</span>{'}'} <span className='blue'>classNames</span>=<span className='blue1'>"fade"</span>{'>'}</p>

  <p>&nbsp;{'<'}<span className='green'>div</span> <span className='blue'>className</span>=<span className='blue1'>"content"</span>{'>'}Hello, world!{'</'}<span className='green'>div</span>{'>'}</p>

  <p>&nbsp;{"</"}<span className='blueviole'>CSSTransition</span>{">"}</p>

  <p>{" </> "}</p>

  <p>&nbsp;{"); "}</p>

  <p>{"} "}</p>
</code>

<p>In this example, we define a component called <b>FadeIn</b> that uses the <b>useState</b> hook to keep track of whether the component has been mounted or not. When the button is clicked, we set the <b>isMounted</b> state to <b>true</b>, which triggers the <b>CSSTransition</b> component to render the <b>content</b> div with a fade-in animation. We also define a CSS file called <b>FadeIn.css</b> that defines the styles and animation for the fade-in effect:</p>

<code>
  <p>{" .fade-enter { "}</p>

  <p>&nbsp;&nbsp;<span className='blue'>opacity</span>: 0;</p>

  <p>{"} "}</p>

  <p>{".fade-enter-active { "}</p>

  <p>&nbsp;&nbsp;<span className='blue'>opacity</span>: 1; </p>

  <p>&nbsp;&nbsp;<span className='blue'>transition</span>: <span className='blue1'>opacity</span> 300<span className='blue1'>ms ease-in</span>;  </p>

  <p>{"} "}</p>

  <p>{".fade-exit { "}</p>

  <p>&nbsp;&nbsp;<span className='blue'>opacity</span>: 1;  </p>

  <p>{"} "}</p>

  <p>{".fade-exit-active { "}</p>

  <p>&nbsp;&nbsp;<span className='blue'>opacity</span>: 0;  </p>
  
  <p>&nbsp;&nbsp;<span className='blue'>transition</span> : <span className='blue1'>opacity</span> 300<span className='blue1'>ms ease-out</span>; </p>

  <p>{"}"}</p>
</code>

<p>In this CSS file, we define the classes for the different stages of the transition. When the component enters, it has an opacity of 0 (<b>fade-enter</b>) and transitions to an opacity of 1 over 300ms (<b>fade-enter-active</b>). When the component exits, it has an opacity of 1 (<b>fade-exit</b>) and transitions to an opacity of 0 over 300ms (<b>fade-exit-active</b>).</p>

<p>Overall, adding animations to your React components can make your UI more engaging and provide visual feedback to the user. By using CSS transitions or animations, or a third-party library, you can easily add animations to your components and make them more dynamic.</p>    
    
<b><p>* Text written with the help of a translator. If you find an error, please let us know *</p></b>
    
    <div className='ads-container'>  
  {/*  реклама  */}
  </div> 
</div>
    )}
    {language === 'ru' && (
      <div>
        <RuReact_6 />
      </div>
    )}
    {language === 'am' && (
      <div>
        <AmReact_6 />
      </div>
    )} 
    {language === 'fr' && (
      <div>
        <FrReact_6 />
      </div>
    )}
     {language === 'es' && (
      <div>
        <EsReact_6 />
      </div>
    )}
    {language === 'pt' && (
      <div>
        <PtReact_6 />
      </div>
    )} 
    {language === 'it' && (
      <div>
        <ItReact_6 />
      </div>
    )} 
    {language === 'nl' && (
      <div>
        <NlReact_6 />
      </div>
    )}
     {language === 'tj' && (
      <div>
        <TjReact_6 />
      </div>
    )}
     {language === 'ar' && (
      <div>
        <ArReact_6 />
      </div>
    )}
     {language === 'jp' && (
      <div>
        <JpReact_6 />
      </div>
    )}
     {language === 'in' && (
      <div>
        <InReact_6 />
      </div>
    )} 
    {language === 'ko' && (
      <div>
        <KoReact_6 />
      </div>
    )} 
    </div>
    </Wrapper>
  )
}

export default React_6;