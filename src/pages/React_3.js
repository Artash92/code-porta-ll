import React,{useState,useEffect} from 'react';
import Wrapper from '../components/Wrapper';
import RuReact_3 from '../language/RuReact_3';
import AmReact_3 from '../language/AmReact_3';
import FrReact_3 from '../language/FrReact_3';
import EsReact_3 from '../language/EsReact_3';
import PtReact_3 from '../language/PtReact_3';
import ItReact_3 from '../language/ItReact_3';
import NlReact_3 from '../language/NlReact_3';
import TjReact_3 from '../language/TjReact_3';
import ArReact_3 from '../language/ArReact_3';
import JpReact_3 from '../language/JpReact_3';
import InReact_3 from '../language/InReact_3';
import KoReact_3 from '../language/KoReact_3';


function React_3() {
 
  const [language, setLanguage] = useState('en');  

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
  };
 
  useEffect(() => {
    switch (language) {
      case 'en':
        document.title = 'React Events | React provides a way to handle events in components, similar to handling events in vanilla JavaScript. In React, you can add event handlers to any JSX element using the on[EventName] syntax | React state in class components | Mounting phase | Updating phase | Unmounting phase | When the component is mounted for the first time, the following methods are called, in order: constructor, getDerivedStateFromProps, render, and componentDidMount . Whenever the components state changes, the shouldComponentUpdate, render, and componentDidUpdate methods are called, in that order. ';
        break;
      case 'ru':
        document.title = 'События React | React предоставляет способ обработки событий в компонентах, аналогичный обработке событий в чистом JavaScript. В React вы можете добавлять обработчики событий для любого элемента JSX с помощью синтаксиса on[ИмяСобытия]. | Состояние React в классовых компонентах | Жизненный цикл React | Фаза монтирования | Фаза обновления | Фаза удаления (Unmounting phase) ';
        break;
      case 'am':
        document.title = 'React-ը հնարավորություն է տալիս կարգավորել իրադարձությունները բաղադրիչներում, որոնք նման են այն բանին, թե ինչպես են իրադարձությունները մշակվում մաքուր JavaScript-ում: React-ում կարող եք իրադարձությունների մշակիչներ ավելացնել ցանկացած JSX տարրի՝ օգտագործելով [EventName]-ի շարահյուսությունը: | React state կլասի բաղադրիչներում(կոմպոնենտ) | constructor(). կանչվում է, երբ բաղադրիչը սկզբնավորվում է: | Ջնջման փուլ | Կոմպոնենտի ջնջման ժամանակ կանչվում է componentWillUnmount մեթոդը';
        break;
        case 'fr':
        document.title = "Événements React | React offre un moyen de gérer les événements dans les composants, similaire à la gestion des événements en JavaScript classique. En React, vous pouvez ajouter des gestionnaires d'événements à n'importe quel élément JSX en utilisant la syntaxe on[EventName]. | État React dans les composants de classe | Cycle de vie React | Phase de montage | Phase de mise à jour | Phase de démontage | Lorsque le composant est démonté, la méthode componentWillUnmount est appelée. ";
        break;
        case 'es':
        document.title = 'Eventos de React | React proporciona una forma de manejar eventos en componentes, similar al manejo de eventos en JavaScript puro. En React, puedes agregar manejadores de eventos a cualquier elemento JSX utilizando la sintaxis on[NombreDelEvento]. | React state in class components | Ciclo de vida de React | Fase de montaje | Fase de actualización | Fase de desmontaje | Cuando el componente se desmonta, se llama al método componentWillUnmount.';
        break;
        case 'pt':
        document.title = 'Eventos do React | O React oferece uma maneira de lidar com eventos em componentes, semelhante ao tratamento de eventos em JavaScript puro. No React, você pode adicionar manipuladores de eventos a qualquer elemento JSX usando a sintaxe on[NomeDoEvento] | Estado React em componentes de classe | Ciclo de vida do React | Fase de montagem | Fase de atualização | Fase de desmontagem | Quando o componente é desmontado, o método componentWillUnmount é chamado.';
        break;
        case 'it':
        document.title = "Eventi React | React fornisce un modo per gestire gli eventi nei componenti, simile alla gestione degli eventi in JavaScript vanilla. In React, puoi aggiungere gestori di eventi a qualsiasi elemento JSX usando la sintassi on[EventName]. | Stato React nei componenti di classe | Ciclo di vita di React | Fase di montaggio | Fase di aggiornamento | Fase di smontaggio | Quando il componente viene smontato, viene chiamato il metodo componentWillUnmount.";
        break;
        case 'nl':
        document.title = 'React Gebeurtenissen | React biedt een manier om gebeurtenissen in componenten te verwerken, vergelijkbaar met het verwerken van gebeurtenissen in vanilla JavaScript. In React kun je gebeurtenishandlers toevoegen aan elk JSX-element met behulp van de on[EventName]-syntax | React state in class components | React levenscyclus | Montagefase | Updatefase | Demontagefase | Wanneer het component wordt verwijderd, wordt de methode componentWillUnmount aangeroepen.';
        break;
        case 'tj':
        document.title = 'React роҳи коркарди рӯйдодҳоро дар ҷузъҳо таъмин мекунад, ба монанди коркарди рӯйдодҳо дар JavaScript JavaScript. Дар React, шумо метавонед бо истифода аз синтаксиси on[EventName] ба ягон унсури JSX коркардкунандагони рӯйдодҳо илова кунед | Ҳолати реаксия дар ҷузъҳои синф | Вақте ки ҷузъ ҷудо карда мешавад, усули componentWillUnmount даъват карда мешавад.';
        break;
        case 'ar':
        document.title = 'أحداث React | توفر React طريقة للتعامل مع الأحداث في المكونات، بطريقة مشابهة للتعامل مع الأحداث في جافا سكريبت العادي. في React، يمكنك إضافة معالجين للأحداث إلى أي عنصر JSX باستخدام بنية التحرير on[اسم الحدث] | في React، يمكن أيضًا إدارة الحالة باستخدام مكونات الصف. مكونات الصف هي فئات جافا سكريبت تمتد من الفئة React.Component وتنفذ طريقة render التي تعيد واجهة مستخدم المكون. | عندما يتم إزالة المكون، يتم استدعاء الطريقة componentWillUnmount.';
        break;
        case 'in':
        document.title = 'रिएक्ट इवेंट्स | रिएक्ट कॉम्पोनेंट्स में इवेंट्स को हैंडल करने का एक तरीका प्रदान करता है, जो वैनिला जावास्क्रिप्ट में इवेंट्स को हैंडल करने के तरीके के समान है। रिएक्ट में, आप on[इवेंटनाम] सिंटैक्स का उपयोग करके किसी भी JSX तत्व में इवेंट हैंडलर जोड़ सकते हैं। | रिएक्ट स्टेट क्लास कॉम्पोनेंट में | संघ को अनमाउंट किया जाता है, तो componentWillUnmount विधि को बुलाया जाता है।';
        break;
        case 'jp':
        document.title = 'React イベント | React は、コンポーネント内でイベントを処理する方法を提供しており、バニラ JavaScript でイベントを処理するのと同様です。React では、JSX 要素に対して on[イベント名] 構文を使用してイベントハンドラを追加できます。 | クラスコンポーネントでのReactの状態管理 | コンポーネントがアンマウントされると、componentWillUnmount メソッドが呼び出されます。';
        break;
        case 'ko':
        document.title = '리액트 이벤트 | 리액트는 컴포넌트에서 이벤트를 처리하는 방법을 제공하는데, 바닐라 자바스크립트에서 이벤트를 처리하는 것과 유사합니다. 리액트에서는 on[EventName] 구문을 사용하여 모든 JSX 요소에 이벤트 핸들러를 추가할 수 있습니다. | 클래스 컴포넌트에서의 React 상태 | 구성 요소가 마운트 해제될 때 componentWillUnmount 메서드가 호출됩니다. ';
        break;
      default:
        document.title = ' React Events | События React';
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
        
        <h1>React Events</h1>

    <p>React provides a way to handle events in components, similar to handling events in vanilla JavaScript. In React, you can add event handlers to any JSX element using the on<b>[EventName] </b>syntax</p>

    <p>For example, let's say we have a button in a React component that we want to handle a click event for:</p>

    <code>
      <p><span className='red'>function</span> <span className='blueviole'>MyButton</span>(props) {'{'} </p>

      <p><span className='red'>function</span> <span className='blueviole'>handleClick</span>() {'{'}</p>

      <p><span className='blue'>{"console.log"}</span>(<span className='blue1'>'Button clicked'</span>); </p>

      <p>{' }'}</p>

      <p><span className='red'>return</span> {'('}</p>

      <p>{'<'}<span className='green'>button</span> <span className='blue'>onClick</span>={'{handleClick}'}{'>'}Click me{'</'}<span className='green'>button</span>{'>'}  </p>

      <p>&nbsp;{');'}</p>

      <p>{'} '}</p>
    </code>

    <p>In this example, we define a <b>MyButton</b> component that contains a button element with a <b>onClick</b> prop set to a function called <b>handleClick</b>. When the button is clicked, the <b>handleClick</b> function will be called, and the message "Button clicked" will be logged to the console.</p>

    <p>You can also pass arguments to the event handler function using arrow functions. For example, let's say we have a list of items that we want to render as buttons:</p>

  <code>
     <p><span className='red'>function</span> <span className='blueviole'>ItemList</span>(props) {'{'}</p>

    <p><span className='red'>const</span> items = props.<span className='blue'>items</span>; </p>

    <p><span className='red'>function</span> <span className='blueviole'>handleClick</span>(item) {'{'}</p>

    <p><span className='blue'>{'console.log'}</span>(<span className='blue1'>`Item $</span><span className='blue1'>{'{item'}.<span className='blue'>id</span>{'}'}</span><span className='blue1'> clicked`</span>); </p>

    <p>&nbsp;{'}'}</p>

    <p><span className='red'>const</span> buttonList = {'items'}.<span className='blue'>map</span>{'('}(item) {'=>'} </p>

    <p>{'<'}<span className='green'>button</span> <span className='blue1'>key</span>= {'{item'}.<span className='blue'>{'id}'}</span> <span className='blue'>onClick</span>={'{()'} {'=>'} <span className='blueviole'>handleClick</span>(item){'}'}{'>'}</p>

    <p>{'{item'}.<span className='blue'>{'name}'}</span></p>

    <p>{'</'}<span className='green'>button</span>{'>'}</p>

    <p>{' ); '}</p>

    <p><span className='red'>return</span> {'('}</p>

    <p>{'<'}<span className='green'>div</span>{'>'}</p>

    <p>{'{buttonList} '}</p>

    <p>{'</'}<span className='green'>div</span>{'>'}</p>

    <p>&nbsp;{');'}</p>

    <p>{'} '}</p>
 </code>
    
    <p>In this example, we define an <b>ItemList</b> component that takes in a <b>items</b> prop. We define a <b>handleClick</b> function that takes in an <b>item</b> argument, which will be used to log a message to the console when the corresponding button is clicked.</p>

    <p>We use the <b>map</b> method to create a new array of <b>{'<button>'}</b> elements, where each element corresponds to an item in the <b>items</b> prop. We set the <b>key</b> prop of each <b>{'<button> '}</b> element to the <b>id</b> of the corresponding item, which is a requirement in React to help it optimize updates. We also use an arrow function to pass the <b>item</b> object to the <b>handleClick</b> function when the button is clicked.</p>

    <p>Then we return a <b>{'<div>'}</b> element that contains the <b>buttonList</b> array.</p>

    <h5>React Events</h5>

    <p className='blue1'>onKeyDown</p>

    <p className='blue1'>onKeyPress </p>

    <p className='blue1'>onKeyUp</p>

    <p className='blue1'>onFocus</p>

    <p className='blue1'>onBlur</p>

    <p className='blue1'>onChange</p>

    <p className='blue1'>onInput</p>

    <p className='blue1'>onInvalid </p>

    <p className='blue1'>onSubmit</p>

    <p className='blue1'>onClick</p>

    <p className='blue1'>onContextMenu</p>

    <p className='blue1'>onDoubleClick</p>

    <p className='blue1'>onDrag</p>

    <p className='blue1'>onDragEnd</p>

    <p className='blue1'>onDragEnter</p>

    <p className='blue1'>onDragExit</p>

    <p className='blue1'>onDragLeave</p>

    <p> <a href="https://react.dev/reference/react-dom/components/common#react-event-object" target='_blank' > 👉🏼 React https://react.dev/reference/react-dom/components/common#react-event-object</a> </p>


    <b>React state in class components</b>

    <p>In React, state can also be managed using class components. Class components are JavaScript classes that extend the <b>React.Component</b> class and implement a <b>render</b> method that returns the component's UI.</p>

    <p>Here's an example of a class component that manages state:</p>

    <code>
       <p><span className='red'>import</span> React,{"{ Component }"} <span className='red'>from</span> 'react'; </p>

       <p> <span className='red'>class</span> Counter <span className='red'>extends</span> Component {'{'}</p>
    
       <p><span className='blue'>constructor</span>(props) {'{'}</p>

       <p>super (props);</p>

       <p><span className='red'>this</span>.<span className='blue'>state</span> = {'{'}<span className='blue'>count</span>: <span className='blue1'>0</span> {'}'};</p>

       <p><span className='red'>this</span>.<span className='blue'>handleClick</span> = <span className='red'>this</span>.<span className='blue'>handleClick</span>.<span className='blue'>bind</span>(<span className='red'>this</span>);</p>

       <p>&nbsp;{'}'}</p>

       <p><span className='blue'>handleClick</span>() {'{'}</p>

       <p><span className='red'>this</span>.<span className='blue'>setState</span>{'({'} <span className='blue'>count</span>: <span className='red'>this</span>.<span className='blue'>state</span>.<span className='blue'>count</span> + <span className='blue1'>1</span>{' })'}; </p>

       <p>{'}'}</p>

       <p><span className='blue'>render</span>() {'{'}</p>

       <p><span className='red'>return</span> {'('}</p>

       <p>{'<'}<span className='green'>div</span>{'>'}</p>

       <p>{'<'}<span className='green'>p</span>{'>'}You clicked {'{'}<span className='red'>this</span>.<span className='blue'>state</span>.<span className='blue'>count</span>{'}'} times{'</'}<span className='green'>p</span>{'>'}</p>

       <p>{'<'}<span className='green'>button</span> <span className='blue'>onClick</span>={'{'}<span className='red'>this</span>.<span className='blue'>handleClick</span>{'}'}{'>'}Click me{'</'}<span className='green'>button</span>{'>'}</p>

       <p>{'</'}<span className='green'>div</span>{'>'}</p>

       <p>&nbsp;&nbsp;{');'}</p>

       <p>&nbsp;{'}'}</p>

       <p>{'}'}</p>
  </code>

<p>In this example, we define a <b>Counter</b> class that extends <b>React.Component</b>. Inside the class, we define a constructor that sets the initial state of the component to an object with a <b>count</b> property of 0. We also bind the <b>handleClick</b> method to the component instance using <b>bind</b>.</p>

<p>The <b>handleClick</b> method updates the component's state by calling this.setState with a new object that has a <b>count</b> property incremented by 1.</p>

<p>The <b>render</b> method returns the component's UI, which includes a <b>{'<p>'}</b> element that displays the current value of <b>count</b>, and a button that calls <b>handleClick</b> when clicked.</p>

<p>Like with functional components, it's important to never modify the state directly. Instead, always use <b>this.setState</b> to update the state.</p>

<p>While class components are still supported in React, functional components are generally preferred, especially with the introduction of hooks. However, understanding class components is still important for maintaining and updating older codebases.</p>

<b>React lifecycle</b>

<p>In React, components have a lifecycle that describes the different stages they go through during their existence. Understanding the React lifecycle is essential for building and maintaining robust React applications.</p>

<p>Here's a brief overview of the React component lifecycle methods, grouped by phase:</p>

<h4>Mounting phase:</h4>

<p><b>{'constructor()'}</b>: Called when the component is initialized.</p>

<p><b>{'static getDerivedStateFromProps()'}</b>: Called when the component is initialized, and again when it receives new props. Rarely used.</p>

<p><b>{'render()'}</b>: Called whenever the component needs to be rendered.</p>

<p><b>{'componentDidMount()'}</b>: Called after the component has been rendered for the first time.</p>

<h4>Updating phase:</h4>

<p><b>{'static getDerivedStateFromProps()'}</b>: Called when the component receives new props.</p>

<p><b>{'shouldComponentUpdate()'}</b>: Called before the component re-renders. Allows you to cancel the update.</p>

<p><b>{'render()'}</b>: Called whenever the component needs to be rendered.</p>

<p><b>{'getSnapshotBeforeUpdate()'}</b>: Called before the component updates. Rarely used.</p>

<p><b>{'componentDidUpdate()'}</b>: Called after the component has been updated.</p>

<h4>Unmounting phase:</h4>

<p><b>{'componentWillUnmount()'}</b>: Called when the component is about to be removed from the DOM.</p>

<p>Here's an example that demonstrates the lifecycle methods:</p>

<code>
  <p><span className='red'>import</span> React,{"{ Component }"} <span className='red'>from</span> 'react'; </p>
  
  <p><span className='red'>class</span> LifecycleDemo <span className='red'>extends</span> Component {'{'}</p>

  <p><span className='blue'>constructor</span>(props) {'{'} </p>

  <p>{'super(props);'}</p>  

  <p><span className='red'>{'this'}</span>.<span className='blue'>state</span>= {'{'}<span className='blue'>count</span>: <span className='blue1'>0</span> {'}'};</p>

  <p>{"console"}.<span className='blue'>log</span>(<span className='blue1'>'constructor'</span>);</p>

  <p>{'}'}</p>

  <p><span className='red'>static</span> <span className='blue'>getDerivedStateFromProps</span>(props, state) {'{'}</p>

  <p>{"console"}.<span className='blue'>log</span>('<span className='blue1'>getDerivedStateFromProps</span>');</p>

  <p><span className='red'>return null</span>;</p>

  <p>{'}'}</p>

  <p><span className='blue'>componentDidMount</span>() {'{'}</p>

  <p>{"console"}.<span className='blue'>log</span>(<span className='blue1'>'componentDidMount'</span>); </p>

  <p>{'}'}</p>

  <p><span className='blue'>shouldComponentUpdate</span>(nextProps, nextState) {'{'}</p>

  <p>{"console"}.<span className='blue'>log</span>(<span className='blue1'>'shouldComponentUpdate'</span>);</p>

  <p><span className='red'>return</span> <span className='blue'>true</span>;</p>

  <p>{'}'}</p>

  <p><span className='blue'>getSnapshotBeforeUpdate</span>(prevProps, prevState) {'{'}</p>

  <p>{"console"}.<span className='blue'>log</span>(<span className='blue1'>'getSnapshotBeforeUpdate'</span>);</p>

  <p><span className='red'>return null</span>;</p>

  <p>{'}'}</p>

  <p><span className='blue'>componentDidUpdate</span>(prevProps, prevState, snapshot) {'{'}</p>

  <p>{"console"}.<span className='blue'>log</span>(<span className='blue1'>'componentDidUpdate'</span>); </p>

  <p>{'}'}</p>

  <p><span className='blue'>componentWillUnmount</span>() {'{'} </p>

  <p>{"console"}.<span className='blue'>log</span>(<span className='blue1'>'componentWillUnmount'</span>); </p>

  <p>{'}'}</p>

  <p> <span className='blue'>handleClick</span> = () {'=>'} {'{'}</p>

  <p><span className='red'>this</span>.<span className='blue'>setState</span>{'({'} <span className='blue'>count</span>: <span className='red'>this</span>.<span className='blue'>state</span>.<span className='blue'>count</span> + <span className='blue1'>1</span> {'})'};</p>

  <p>{'}; '}</p>

  <p><span className='blue'>render</span>() {'{'} </p>

  <p>{"console"}.<span className='blue'>log</span>(<span className='blue1'>'render'</span>);</p>

  <p><span className='red'>return</span> {'('}</p>

  <p>{'<'}<span className='green'>div</span>{'>'}</p>

  <p>{'<'}<span className='green'>p</span>{'>'}You clicked {'{'}<span className='red'>this</span>.<span className='blue'>state</span>.<span className='blue'>count</span>{'}'} times{'</'}<span className='green'>p</span>{'>'}</p>

  <p>{'<'}<span className='green'>button</span> <span className='blue'>onClick</span>={'{'}<span className='red'>this</span>.<span className='blue'>handleClick</span>{'}>'}Click me{'</'}<span className='green'>button</span>{'>'}</p>
  
  <p>{'</'}<span className='green'>div</span>{'>'}</p>

  <p>&nbsp;&nbsp;{');'}</p>

  <p>&nbsp;{'}'}</p>

  <p>{'}'}</p>
</code>

<p>In this example, we define a <b>LifecycleDemo</b> class that logs messages to the console during each phase of the component's lifecycle. We also define a <b>handleClick</b> method that updates the component's state.</p>

<p>When the component is mounted for the first time, the following methods are called, in order: <b>constructor, getDerivedStateFromProps, render, and componentDidMount</b> . Whenever the component's state changes, the <b>shouldComponentUpdate, render, and componentDidUpdate </b> methods are called, in that order.</p>

<p>When the component is unmounted, the <b>componentWillUnmount</b> method is called.</p>

<p>It's important to understand the React component lifecycle so you can optimize your components and avoid common pitfalls like memory leaks and infinite loops. But don't worry if it seems overwhelming at first – with practice, you'll become more comfortable with it.</p>

   <b><p>* Text written with the help of a translator. If you find an error, please let us know *</p></b>
    
    <div className='ads-container'>  
  {/*  реклама  */}
  </div> 
</div>
     )}
     {language === 'ru' && (
       <div>
         <RuReact_3 />
       </div>
     )}
     {language === 'am' && (
       <div>
         <AmReact_3 />
       </div>
     )} 
     {language === 'fr' && (
       <div>
         <FrReact_3 />
       </div>
     )}
      {language === 'es' && (
       <div>
         <EsReact_3 />
       </div>
     )}
     {language === 'pt' && (
       <div>
         <PtReact_3 />
       </div>
     )} 
     {language === 'it' && (
       <div>
         <ItReact_3 />
       </div>
     )} 
     {language === 'nl' && (
       <div>
         <NlReact_3 />
       </div>
     )}
      {language === 'tj' && (
       <div>
         <TjReact_3 />
       </div>
     )}
      {language === 'ar' && (
       <div>
         <ArReact_3 />
       </div>
     )}
      {language === 'jp' && (
       <div>
         <JpReact_3 />
       </div>
     )}
      {language === 'in' && (
       <div>
         <InReact_3 />
       </div>
     )} 
     {language === 'ko' && (
       <div>
         <KoReact_3 />
       </div>
     )}  
    </div>
  </Wrapper>
  )
}

export default React_3;