import React, {useState, useEffect} from 'react';
import Wrapper from '../components/Wrapper';
import RuReact_2 from '../language/RuReact_2';
import AmReact_2 from '../language/AmReact_2';
import FrReact_2 from '../language/FrReact_2';
import EsReact_2 from '../language/EsReact_2';
import PtReact_2 from '../language/PtReact_2';
import ItReact_2 from '../language/ItReact_2';
import NlReact_2 from '../language/NlReact_2';
import TjReact_2 from '../language/TjReact_2';
import ArReact_2 from '../language/ArReact_2';
import JpReact_2 from '../language/JpReact_2';
import InReact_2 from '../language/InReact_2';
import KoReact_2 from '../language/KoReact_2';

function React_2() {
   const [language, setLanguage] = useState('en');  

   const handleLanguageChange = (lang) => {
    setLanguage(lang);
  };

  useEffect(() => {
    switch (language) {
      case 'en':
        document.title = 'JSX is a syntax extension for JavaScript that allows you to write HTML-like code in your JavaScript files. It is used extensively in React to define the structure and layout of UI components. | JSX allows you to easily combine HTML-like code with JavaScript logic. For example, you can use JavaScript variables and expressions inside your JSX code:';
        break;
      case 'ru':
        document.title = 'JSX - это расширение синтаксиса для JavaScript, которое позволяет писать код, похожий на HTML, в файлах JavaScript. Оно широко используется в React для определения структуры и макета компонентов пользовательского интерфейса (UI). | JSX не является обязательным для разработки в React, но рекомендуется, так как он значительно упрощает написание и управление сложными компонентами пользовательского интерфейса. Когда вы пишете код на JSX, он транспилируется в обычный код JavaScript, который может быть выполнен браузером. ';
        break;
      case 'am':
        document.title = 'JSX-ը JavaScript-ի շարահյուսական ընդլայնում է, որը թույլ է տալիս JavaScript ֆայլերում գրել HTML-անման կոդ: Այն լայնորեն օգտագործվում է React-ում՝ օգտատիրոջ ինտերֆեյսներ (UI) բաղադրիչների կառուցվածքն ու դասավորությունը սահմանելու համար: | JSX-ը չի պահանջվում React-ի մշակման համար, սակայն խորհուրդ է տրվում, քանի որ այն շատ ավելի հեշտ է դարձնում UI-ի բարդ բաղադրիչները գրելն ու կառավարելը: Երբ դուք գրում եք կոդ JSX-ում, այն փոխակերպվում է սովորական JavaScript կոդի, որը կարող է գործարկվել զննարկչի կողմից:JSX-ը չի պահանջվում React-ի մշակման համար, սակայն խորհուրդ է տրվում, քանի որ այն շատ ավելի հեշտ է դարձնում UI-ի բարդ բաղադրիչները գրելն ու կառավարելը: Երբ դուք գրում եք կոդ JSX-ում, այն փոխակերպվում է սովորական JavaScript կոդի, որը կարող է գործարկվել զննարկչի կողմից:';
        break;
        case 'fr':
        document.title = "JSX est une extension de syntaxe pour JavaScript qui vous permet d'écrire du code semblable à HTML dans vos fichiers JavaScript. Il est largement utilisé dans React pour définir la structure et la mise en page des composants d'interface utilisateur (UI). | JSX n'est pas nécessaire pour le développement React, mais il est fortement recommandé car il facilite beaucoup l'écriture et la gestion de composants d'interface utilisateur complexes. Lorsque vous écrivez du code JSX, il est transpilé en code JavaScript régulier qui peut être exécuté par le navigateur. ";
        break;
        case 'es':
        document.title = 'JSX es una extensión de sintaxis para JavaScript que te permite escribir código similar a HTML en tus archivos JavaScript. Se utiliza ampliamente en React para definir la estructura y el diseño de los componentes de la interfaz de usuario. | JSX no es necesario para el desarrollo de React, pero se recomienda encarecidamente ya que facilita mucho escribir y gestionar componentes de interfaz de usuario complejos. Cuando escribes código JSX, se transpila a código JavaScript regular que puede ser ejecutado por el navegador. ';
        break;
        case 'pt':
        document.title = 'JSX é uma extensão de sintaxe para JavaScript que permite escrever código semelhante a HTML em seus arquivos JavaScript. É usado extensivamente no React para definir a estrutura e o layout dos componentes de interface do usuário. | O JSX não é necessário para o desenvolvimento do React, mas é altamente recomendado, pois facilita muito a escrita e o gerenciamento de componentes de interface de usuário complexos. Quando você escreve código JSX, ele é transpilado para código JavaScript regular que pode ser executado pelo navegador. ';
        break;
        case 'it':
        document.title = "JSX è un'estensione di sintassi per JavaScript che ti permette di scrivere codice simile all'HTML nei tuoi file JavaScript. Viene ampiamente utilizzato in React per definire la struttura e il layout dei componenti UI. | JSX non è richiesto per lo sviluppo di React, ma è altamente raccomandato poiché rende molto più facile scrivere e gestire componenti UI complessi. Quando scrivi codice JSX, viene trasposto in codice JavaScript regolare che può essere eseguito dal browser.";
        break;
        case 'nl':
        document.title = 'JSX is een syntaxisuitbreiding voor JavaScript waarmee je HTML-achtige code kunt schrijven in je JavaScript-bestanden. Het wordt uitgebreid gebruikt in React om de structuur en lay-out van UI-componenten te definiëren. | JSX is niet vereist voor React-ontwikkeling, maar het wordt ten zeerste aanbevolen omdat het veel gemakkelijker maakt om complexe UI-componenten te schrijven en te beheren. Wanneer je JSX-code schrijft, wordt deze getranspileerd naar reguliere JavaScript-code die door de browser kan worden uitgevoerd.';
        break;
        case 'tj':
        document.title = 'JSX як васеъшавии синтаксиси JavaScript мебошад, ки ба шумо имкон медиҳад, ки дар файлҳои JavaScript коди ба HTML монандро нависед. Он дар React барои муайян кардани сохтор ва тарҳбандии ҷузъҳои UI ба таври васеъ истифода мешавад. | JSX барои таҳияи React талаб карда намешавад, аммо он хеле тавсия дода мешавад, зеро он навиштан ва идоракунии ҷузъҳои мураккаби UI-ро хеле осон мекунад. Вақте ки шумо рамзи JSX менависед, он ба рамзи муқаррарии JavaScript интиқол дода мешавад, ки онро браузер иҷро карда метавонад. ';
        break;
        case 'ar':
        document.title = 'JSX هو امتداد لبناء الجملة في جافا سكريبت يسمح لك بكتابة رمز شبيه بـ HTML في ملفات JavaScript الخاصة بك. يتم استخدامه بشكل واسع في React لتحديد الهيكل وتخطيط مكونات واجهة المستخدم. | ليس من الضروري استخدام JSX في تطوير React، ولكن من المُنصَح به بشدة حيث يجعل من الأسهل كتابة وإدارة مكونات واجهة المستخدم المُعقدة. عند كتابة رمز JSX، يتم تحويله إلى رمز جافا سكريبت عادي يمكن تنفيذه بواسطة المتصفح.';
        break;
        case 'in':
        document.title = 'जेएसएक्स जावास्क्रिप्ट के लिए एक सिंटैक्स एक्सटेंशन है जो आपको अपने जावास्क्रिप्ट फ़ाइलों में HTML-जैसी कोड लिखने की अनुमति देता है। यह रीऐक्ट में UI के संरचना और लेआउट को परिभाषित करने के लिए व्यापक रूप से प्रयुक्त किया जाता है। | रीऐक्ट डेवलपमेंट के लिए जेएसएक्स की आवश्यकता नहीं है, लेकिन यह उत्कृष्ट रूप से सिफारिश की जाती है क्योंकि इससे संगठित यूआई कॉम्पोनेंट्स लिखना और प्रबंधन करना बहुत आसान हो जाता है। जब आप जेएसएक्स कोड लिखते हैं, तो इसे नियमित जावास्क्रिप्ट कोड में ट्रांसपाइल किया जाता है जो ब्राउज़र द्वारा क्रियान्वित किया जा सकता है।';
        break;
        case 'jp':
        document.title = 'JSXはJavaScriptのための構文拡張であり、JavaScriptファイル内でHTMLのようなコードを書くことができます。ReactではUIコンポーネントの構造とレイアウトを定義するために広く使用されています。 | React開発ではJSXは必須ではありませんが、複雑なUIコンポーネントを書きやすく管理しやすくするために非常に推奨されています。JSXコードを書くと、ブラウザで実行できる通常のJavaScriptコードに変換されます。';
        break;
        case 'ko':
        document.title = 'JSX는 자바스크립트의 구문 확장으로, 자바스크립트 파일에서 HTML과 유사한 코드를 작성할 수 있게 해줍니다. React에서 UI 컴포넌트의 구조와 레이아웃을 정의하는 데 널리 사용됩니다. | React 개발에 JSX는 필수는 아니지만 복잡한 UI 컴포넌트를 작성하고 관리하기 훨씬 쉽게 만들어주므로 강력히 권장됩니다. JSX 코드를 작성하면 브라우저에서 실행할 수 있는 일반 자바스크립트 코드로 변환됩니다.';
        break;
      default:
        document.title = 'JSX';
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
      
      <h1>JSX</h1>

  <p>JSX is a syntax extension for JavaScript that allows you to write HTML-like code in your JavaScript files. It is used extensively in React to define the structure and layout of UI components.</p>    

    <p>Here is an example of how JSX works:</p>

 <code>
   <p><span className='red'>import</span> React <span className='red'>from</span> <span className='blue1'>'react'</span>; </p>

   <p><span className='red'>function</span> <span className='blueviole'>MyComponent</span>() {'{'}</p>

   <p><span className='red'>return</span> {'('}</p>

   <p>{'<'}<span className='green'>div</span>{'>'}</p>

   <p>&nbsp;{'<'}<span className='green'>h1</span>{'>'}Hello, world!{'</'}<span className='green'>h1</span>{'>'} </p>

   <p>&nbsp;{'<'}<span className='green'>p</span>{'>'}This is a simple JSX example.{'</'}<span className='green'>p</span>{'>'} </p>

   <p>{'</'}<span className='green'>div</span>{'>'}</p>

   <p>&nbsp;{'); '}</p>

   <p>{'}'}</p>

  <p><span className='red'>export default</span> MyComponent;</p> 
</code>

    <p>In this example, we are defining a simple React component using JSX. The component renders a <b>div</b> element that contains an <b>h1 and a p</b> element. Notice that the HTML-like code is enclosed in parentheses and is defined using JSX syntax.</p>

    <p>JSX allows you to easily combine HTML-like code with JavaScript logic. For example, you can use JavaScript variables and expressions inside your JSX code:</p>
    
<code>
   <p><span className='red'>import</span> React <span className='red'>from</span> <span className='blue1'>'react'</span>;</p>

   <p><span className='red'>function</span> <span className='blueviole'>MyComponent</span>() {'{'}</p>

  <p><span className='red'>const</span> name = <span className='blue1'>'John'</span>;  </p>

  <p><span className='red'>return</span> {'('}</p>

  <p>{'<'}<span className='green'>div</span>{'>'} </p>

  <p>&nbsp;{'<'}<span className='green'>h1</span>{'>'} Hello,{'{'}name{'}'}!{'</'}<span className='green'>h1</span>{'>'} </p>

  <p>&nbsp;{'<'}<span className='green'>p</span>{'>'}This is a simple JSX example.{'</'}<span className='green'>p</span>{'>'} </p>

  <p>{'</'}<span className='green'>div</span>{'>'} </p>

  <p>&nbsp;{");"}</p>

  <p>{" } "}</p>

  <p><span className='red'>export default</span> MyComponent;</p> 
</code>
   
    <p>In this example, we are using a JavaScript variable <b>(name)</b> inside our JSX code to dynamically render a personalized greeting.</p>

    <p>JSX is not required for React development, but it is highly recommended as it makes it much easier to write and manage complex UI components. When you write JSX code, it is transpiled into regular JavaScript code that can be executed by the browser.</p>
    
    <p>There are two main types of React components: functional components and class components.</p>
    
    <p>Functional components are defined as JavaScript functions that return a JSX element. They are typically used for simple, presentational UI components that don't have any state or lifecycle methods.</p>
    
    <p>Here's an example of a simple functional component:</p>

  <code>
      <p><span className='red'>import</span> React <span className='red'>from</span> <span className='blue1'>'react'</span>; </p>

      <p><span className='red'>function</span> <span className='blueviole'>MyComponent</span>(props) {'{'}</p>

      <p><span className='red'>return</span> {'('}</p>

      <p> {'<'}<span className='green'>div</span>{'>'} </p>

      <p>&nbsp;{'<'}<span className='green'>h1</span>{'>'}Hello,{'{'}props.<span className='blue'>name</span>{'}'}!{'</'}<span className='green'>h1</span>{'>'} </p>

      <p>&nbsp;{'<'}<span className='green'>p</span>{'>'}This is a functional component.{'</'}<span className='green'>p</span>{'>'} </p>

      <p>{'</'}<span className='green'>div</span>{'>'} </p>

      <p>&nbsp;{');'}</p>

      <p>{'}'}</p>

      <p><span className='red'>export default</span> MyComponent;</p>  
 </code>
   
    <p>In this example, we are defining a functional component called <b>MyComponent</b> that takes in a <b>props</b> object as an argument. The component returns a JSX element that includes a h1 element with a personalized greeting and a <b>p</b> element with a message.</p>
    
    <p>Class components, on the other hand, are defined as JavaScript classes that extend the <b>React.Component</b> class. They are used for more complex UI components that need to manage state and have lifecycle methods.</p>
    
    <p>Here's an example of a simple class component:</p>

<code>
    <p><span className='red'>import</span> React <span className='red'>from</span> <span className='blue1'>'react'</span>; </p>

    <p><span className='red'>class</span> MyComponent <span className='red'>extends</span> React.<span className='blue'>Component</span> {'{'}</p>

    <p><span className='blue'>constructor</span>(props) {'{'}</p>

    <p>super(props);</p>

    <p><span className='red'>this</span>.<span className='blue'>state</span> = {'{'}</p>

    <p><span className='blue'>count</span>: <span className='blue1'>0</span></p>

    <p>&nbsp;{'};'}</p>

    <p>{'}'}</p>

    <p><span className='blue'>render</span>() {'{'}</p>

    <p><span className='red'>return</span> {'('}</p>

    <p>{'<'}<span className='green'>div</span>{'>'} </p>

    <p>{'<'}<span className='green'>h1</span>{'>'}Count: {'{'}<span className='red'>this</span>.<span className='blue'>state</span>.<span className='blue'>count</span>{'}'}{'</'}<span className='blue'>h1</span>{'>'}</p>

    <p>{'<'}<span className='green'>button</span> <span className='blue'>onClick</span> = {'{() => '}<span className='red'>this</span>.<span className='blue'>setState</span>{'({'} <span className='blue'>count</span>:<span className='red'>this</span>.<span className='blue'>state</span>.<span className='blue'>count</span> + <span className='blue1'>1</span> {'})}'}{'>'}Increment{'</'}<span className='green'>button</span>{'>'}</p>

    <p>{'</'}<span className='blue'>div</span>{'>'} </p>

    <p>&nbsp;&nbsp;{');'}</p>

    <p>&nbsp;{'}'}</p>

    <p>{'}'}</p>

    <p><span className='red'>export default</span> MyComponent;</p>  
</code>
    
    <p>In this example, we are defining a class component called MyComponent that has a state property called <b>count and a render</b> method that returns a JSX element with a h1 element that displays the current count and a <b>button</b> element that increments the count when clicked.</p>

    <p>Components can be composed and nested to create complex UI elements. They can also accept props as inputs, which allow them to be customized and reused throughout the application.</p>

    <p><b>{'<Component />'}</b> is a syntax used in React to render a component. It's called a self-closing tag or an empty tag, and it's equivalent to calling the component as a function with no arguments.</p>

    <p>For example, let's say we have a simple component called <b>MyComponent</b>:</p>

<code>
  <p><span className='red'>function</span> <span className='blueviole'>MyComponent</span>() {'{'}</p>

  <p><span className='red'>return</span> {'('}</p>

  <p>{'<'}<span className='green'>div</span>{'>'}</p>

  <p>&nbsp;{'<'}<span className='green'>h1</span>{'>'}Hello, world!{'</'}<span className='green'>h1</span>{'>'} </p>

  <p>{'</'}<span className='green'>div</span>{'>'}</p>

  <p>&nbsp;{');'}</p>

  <p>{'}'}</p>
</code>
   
    <p>To render this component, we would use the <b>{'<MyComponent /> '}</b> syntax:</p>

 <code>
  <p>ReactDOM.<span className='blue'>render</span>{'('} </p>

  <p>{'<'}<span className='blueviole'>MyComponent </span>{'/>'}, </p>

  <p>document.<span className='blue'>getElementById</span>(<span className='blue1'>'root'</span>)</p>

  <p>{');'}</p> 
 </code>

    <p>The <b>{'<MyComponent /> '}</b> syntax creates an instance of the MyComponent component and renders it to the DOM.</p>

    <b><p>* Text written with the help of a translator. If you find an error, please let us know *</p></b>
    
    <div className='ads-container'>  
  {/*  реклама  */}
  </div>  
    </div>
     )}
     {language === 'ru' && (
       <div>
         <RuReact_2 />
       </div>
     )}
     {language === 'am' && (
       <div>
         <AmReact_2 />
       </div>
     )} 
     {language === 'fr' && (
       <div>
         <FrReact_2 />
       </div>
     )}
      {language === 'es' && (
       <div>
         <EsReact_2 />
       </div>
     )}
     {language === 'pt' && (
       <div>
         <PtReact_2 />
       </div>
     )} 
     {language === 'it' && (
       <div>
         <ItReact_2 />
       </div>
     )} 
     {language === 'nl' && (
       <div>
         <NlReact_2 />
       </div>
     )}
      {language === 'tj' && (
       <div>
         <TjReact_2 />
       </div>
     )}
      {language === 'ar' && (
       <div>
         <ArReact_2 />
       </div>
     )}
      {language === 'jp' && (
       <div>
         <JpReact_2 />
       </div>
     )}
      {language === 'in' && (
       <div>
         <InReact_2 />
       </div>
     )} 
     {language === 'ko' && (
       <div>
         <KoReact_2 />
       </div>
     )}     
      </div>
    </Wrapper>
  )
}

export default React_2;