import React,{ useState, useEffect } from 'react';
import Wrapper from '../components/Wrapper';
import RuReact_5 from '../language/RuReact_5';
import AmReact_5 from '../language/AmReact_5';
import FrReact_5 from '../language/FrReact_5';
import EsReact_5 from '../language/EsReact_5';
import PtReact_5 from '../language/PtReact_5';
import ItReact_5 from '../language/ItReact_5';
import NlReact_5 from '../language/NlReact_5';
import TjReact_5 from '../language/TjReact_5';
import ArReact_5 from '../language/ArReact_5';
import JpReact_5 from '../language/JpReact_5';
import InReact_5 from '../language/InReact_5';
import KoReact_5 from '../language/KoReact_5'; 

function React_5() {
  const [language, setLanguage] = useState('en');  

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
  };

  useEffect(() => {
    switch (language) {
      case 'en':
        document.title = 'React Router DOM | React Router Dom is a popular library used in React applications for managing client-side routing. It allows developers to create different routes for different components and render them based on the current URL. This provides a more intuitive and seamless user experience, as users can navigate through different pages and components without having to reload the entire page.';
        break;
      case 'ru':
        document.title = 'React Router Dom – это популярная библиотека, используемая в приложениях React для управления клиентским маршрутизацией. Она позволяет разработчикам создавать разные маршруты для разных компонентов и рендерить их на основе текущего URL. Это обеспечивает более интуитивный и плавный пользовательский опыт, так как пользователи могут перемещаться по разным страницам и компонентам без необходимости перезагрузки всей страницы.| Вот простой пример того, как может использоваться React Router Dom в приложении React: (старая версия)v5 ';
        break;
      case 'am':
        document.title = 'React Router Dom-ը հանրաճանաչ գրադարան է, որն օգտագործվում է React հավելվածներում՝ հաճախորդի երթուղին կառավարելու համար: Այն թույլ է տալիս ծրագրավորողներին ստեղծել տարբեր երթուղիներ տարբեր բաղադրիչների համար և մատուցել դրանք ընթացիկ URL-ի հիման վրա: Սա ապահովում է օգտվողին ավելի անխափան օգտագործել, քանի որ օգտվողները կարող են նավարկել տարբեր էջերի և բաղադրիչների միջով՝ առանց ամբողջ էջը վերաբեռնելու: | React Router Dom-ը հիմնված է React Router գրադարանի վրա և հատուկ նախագծված է բրաուզերում օգտագործելու համար: Այն օգտագործում է բրաուզերի պատմության API՝ URL-ը կառավարելու և օգտատիրոջ ինտերֆեյսը ընթացիկ URL-ի հետ համաժամեցնելու համար: Բացի այդ, այն ապահովում է երթուղիների սահմանման դեկլարատիվ մոտեցում՝ հեշտացնելով բազմաթիվ երթուղիներով և ներկառուցված բաղադրիչներով բարդ հավելվածների կառավարումը: ';
        break;
        case 'fr':
        document.title = "React Router Dom est une bibliothèque populaire utilisée dans les applications React pour gérer le routage côté client. Elle permet aux développeurs de créer différents itinéraires pour différents composants et de les rendre en fonction de l'URL actuelle. Cela offre une expérience utilisateur plus intuitive et fluide, car les utilisateurs peuvent naviguer entre différentes pages et composants sans avoir à recharger toute la page. | React Router Dom est basé sur la bibliothèque React Router et spécifiquement conçu pour une utilisation dans le navigateur. Il utilise l'API d'historique du navigateur pour manipuler l'URL et maintenir l'interface utilisateur synchronisée avec l'URL actuelle. Il offre également une approche déclarative pour définir des itinéraires, ce qui facilite la gestion des applications complexes avec de multiples itinéraires et des composants imbriqués. ";
        break;
        case 'es':
        document.title = 'React Router Dom es una biblioteca popular utilizada en aplicaciones de React para gestionar el enrutamiento del lado del cliente. Permite a los desarrolladores crear diferentes rutas para diferentes componentes y renderizarlos según la URL actual. Esto proporciona una experiencia de usuario más intuitiva y fluida, ya que los usuarios pueden navegar por diferentes páginas y componentes sin tener que volver a cargar toda la página. ';
        break;
        case 'pt':
        document.title = "React Router Dom è una libreria popolare utilizzata nelle applicazioni React per gestire il routing lato client. Consente agli sviluppatori di creare percorsi diversi per diversi componenti e renderizzarli in base all'URL corrente. Ciò fornisce un'esperienza utente più intuitiva e senza soluzione di continuità, poiché gli utenti possono navigare attraverso diverse pagine e componenti senza dover ricaricare l'intera pagina.";
        break;
        case 'it':
        document.title = "React Router Dom è una libreria popolare utilizzata nelle applicazioni React per gestire il routing lato client. Consente agli sviluppatori di creare percorsi diversi per diversi componenti e renderizzarli in base all'URL corrente. Ciò fornisce un'esperienza utente più intuitiva e senza soluzione di continuità, poiché gli utenti possono navigare attraverso diverse pagine e componenti senza dover ricaricare l'intera pagina.";
        break;
        case 'nl':
        document.title = "React Router Dom is een populaire bibliotheek die wordt gebruikt in React-applicaties voor het beheren van client-side routing. Het stelt ontwikkelaars in staat om verschillende routes voor verschillende componenten te maken en deze weer te geven op basis van de huidige URL. Dit zorgt voor een meer intuïtieve en naadloze gebruikerservaring, omdat gebruikers kunnen navigeren tussen verschillende pagina's en componenten zonder de hele pagina opnieuw te hoeven laden.";
        break;
        case 'tj':
        document.title = 'React Router Dom китобхонаи маъмулест, ки дар барномаҳои React барои идоракунии масир аз ҷониби муштарӣ истифода мешавад. Он ба таҳиягарон имкон медиҳад, ки барои ҷузъҳои гуногун масирҳои гуногун эҷод кунанд ва онҳоро дар асоси URL-и ҷорӣ гардонанд. Ин таҷрибаи корбарро осонтар ва бефосила таъмин мекунад, зеро корбарон метавонанд бидуни дубора боркунии тамоми саҳифа дар саҳифаҳо ва ҷузъҳои гуногун паймоиш кунанд. | React Router Dom ба китобхонаи React Router асос ёфтааст ва махсусан барои истифода дар браузер тарҳрезӣ шудааст. Он API History-и браузерро барои идора кардани URL ва нигоҳ доштани интерфейси корбар дар ҳамоҳангӣ бо URL-и ҷорӣ истифода мебарад. Он инчунин равиши декларативиро барои муайян кардани хатсайрҳо таъмин намуда, идоракунии барномаҳои мураккабро бо масирҳои сершумор ва ҷузъҳои лона гузошташударо осон мекунад.';
        break;
        case 'ar':
        document.title = 'راوتر رياكت دوم | راوتر رياكت دوم هو مكتبة شهيرة تستخدم في تطبيقات رياكت لإدارة التوجيه على جانب العميل. يتيح للمطورين إنشاء مسارات مختلفة لمكونات مختلفة وتقديمها استنادًا إلى عنوان URL الحالي. يوفر هذا تجربة مستخدم أكثر تفاعلية وسلسة، حيث يمكن للمستخدمين التنقل بين الصفحات والمكونات المختلفة دون الحاجة إلى إعادة تحميل الصفحة بأكملها. ';
        break;
        case 'in':
        document.title = 'रिएक्ट राउटर डॉम | रिएक्ट राउटर डॉम एक प्रसिद्ध पुस्तकालय है जो रिएक्ट अनुप्रयोगों में ग्राहक-पक्ष रूटिंग को प्रबंधित करने के लिए प्रयुक्त होती है। इसकी मदद से डेवलपर्स विभिन्न कॉम्पोनेंट्स के लिए विभिन्न रूट बना सकते हैं और मौजूदा URL के आधार पर उन्हें रेंडर कर सकते हैं। यह उपयोगकर्ता अनुभव को और अधिक सहज और अविरल बनाता है, क्योंकि उपयोगकर्ता पूरे पृष्ठ को पुनः लोड किए बिना विभिन्न पृष्ठों और घटकों में भ्रमण कर सकते हैं। ';
        break;
        case 'jp':
        document.title = 'React Router Domは、Reactアプリケーションでクライアントサイドのルーティングを管理するために使用される人気のあるライブラリです。異なるコンポーネント用の異なるルートを作成し、現在のURLに基づいてそれらをレンダリングすることができます。これにより、ユーザーはページ全体をリロードせずに異なるページとコンポーネントをナビゲートできるため、直感的でシームレスなユーザーエクスペリエンスが提供されます。| React Router Domの主な機能には、次のものがあります:';
        break;
        case 'ko':
        document.title = 'React Router Dom는 React 애플리케이션에서 사용되는 인기 있는 라이브러리로, 클라이언트 측 라우팅을 관리하는 데 사용됩니다. 이를 통해 개발자는 다른 URL에 따라 다른 컴포넌트를 만들고 렌더링할 수 있습니다. 이는 전체 페이지를 다시로드하지 않고도 사용자가 서로 다른 페이지와 컴포넌트를 탐색할 수 있도록하여 보다 직관적이고 매끄러운 사용자 경험을 제공합니다.';
        break;
      default:
        document.title = 'React Router Dom';
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

      <h1>React Router DOM</h1>

<p>React Router Dom is a popular library used in React applications for managing client-side routing. It allows developers to create different routes for different components and render them based on the current URL. This provides a more intuitive and seamless user experience, as users can navigate through different pages and components without having to reload the entire page.</p>

<p>React Router Dom is based on the React Router library and specifically designed for use in the browser. It uses the browser's History API to manipulate the URL and keep the user interface in sync with the current URL. It also provides a declarative approach to defining routes, making it easy to manage complex applications with multiple routes and nested components.</p>

<p>Some of the key features of React Router Dom include:</p>

<p> • Declarative routing: You can define your routes as JSX components, making it easy to understand and manage the routing logic.</p>

<p> • Nested routes: You can nest routes within other routes, allowing for more complex routing scenarios</p>

<p> • Route parameters: You can define dynamic parameters within your routes, allowing you to pass data between components based on the current URL.</p>

<p> • History management: React Router Dom provides tools for managing the browser's history, allowing you to programmatically navigate between pages and handle back/forward navigation. </p>
 
<p>Here's a simple example of how React Router Dom might be used in a React application: <b>(old version)v5</b></p>

<code>
  <p> <span className='red'>import</span> React <span className='red'>from</span> <span className='blue1'>'react'</span>;</p>

  <p> <span className='red'>import</span> {'{'} BrowserRouter <span className='red'>as</span> Router, Route, Link {'}'} <span className='red'>from</span> <span className='blue1'>'react-router-dom'</span>;  </p>

  <p>&nbsp;<span className='red'>const</span> Home = () {'=> <'}<span className='green'>h1</span>{'>'}Home{'</'}<span className='green'>h1</span>{'>; '}</p>

  <p>&nbsp;<span className='red'>const</span> About = () {'=> <'}<span className='green'>h1</span>{'>'}About{'</'}<span className='green'>h1</span>{'>;'}</p>

  <p>&nbsp;<span className='red'>const</span> App {'= () => ( '}</p>

  <p>{'<'}<span className='blueviole'>Router</span>{'>'}</p>

  <p>&nbsp;{'<'}<span className='green'>nav</span>{'>'}</p>

  <p>&nbsp;&nbsp;{'<'}<span className='green'>ul</span>{'>'}</p>

  <p>&nbsp;&nbsp;&nbsp;{'<'}<span className='green'>li</span>{'>'}</p>

  <p>&nbsp;&nbsp;&nbsp;&nbsp;{'<'}<span className='blueviole'>Link</span> <span className='blue'>to</span>=<span className='blue1'>"/"</span>{'>'}Home{'</'}<span className='blueviole'>Link</span>{'>'}</p>

  <p>&nbsp;&nbsp;&nbsp;{'</'}<span className='green'>li</span>{'>'}</p>

  <p>&nbsp;&nbsp;&nbsp;{'<'}<span className='green'>li</span>{'>'}</p>

  <p>&nbsp;&nbsp;&nbsp;&nbsp;{'<'}<span className='blueviole'>Link</span> <span className='blue'>to</span>=<span className='blue1'>"/about"</span>{'>'}About{'</'}<span className='blueviole'>Link</span>{'>'}</p>

  <p>&nbsp;&nbsp;&nbsp;{'</'}<span className='green'>li</span>{'>'}</p>

  <p>&nbsp;&nbsp;{'</'}<span className='green'>ul</span>{'>'}</p>

  <p>&nbsp;{'</'}<span className='green'>nav</span>{'>'}</p>

  <p>&nbsp;{'<'}<span className='blueviole'>Route </span><span className='blue'>exact path</span>=<span className='blue1'>"/"</span> <span className='blue'>component</span>={'{Home}  />'}</p>

  <p>&nbsp;{'<'}<span className='blueviole'>Route</span>  <span className='blue'>path</span>=<span className='blue1'>"/about"</span> <span className='blue'>component</span>={'{About}  />'}</p>

  <p>{'</'}<span className='blueviole'>Router</span>{'>'}</p>

  <p>{');'}</p>

  <p><span className='red'>export default</span> App; </p>
</code>

<p>In this example, we're importing the necessary components from React Router Dom (specifically, <b>BrowserRouter, Route, and Link</b>). We then define two simple components for our home and about pages.</p>

<p>Inside the <b>App</b> component, we wrap everything in a <b>Router</b> component, which provides the routing context for the rest of the application. We then define a simple navigation bar using the <b>Link</b> component to navigate between our two pages.</p>

<p>Finally, we define two <b>Route</b> components that render the <b>Home and About</b> components based on the current URL.</p>

<p>React Router Dom 6.4 is the latest version of the library, released in February 2022. Some of the new features in this version include:</p>

<p>The latest version (v6) has changes to some APIs and collections, so I can pick a new example using React Router Dom version 6.4:</p>

<p>here's an example using React Router Dom version 6.4:</p>


<code>
  <p><span className='red'>import</span> {'{'} BrowserRouter <span className='red'>as</span> Router, Routes, Route, Link {'}'} <span className='red'>from</span> <span className='blue1'>'react-router-dom'</span>;</p>

  <p>&nbsp;<span className='red'>const</span>  Home = () {'=> <'}<span className='green'>h1</span>{'>'}Home{'</'}<span className='green'>h1</span>{'>;'}</p>

  <p>&nbsp;<span className='red'>const</span> About = () {'=> <'}<span className='green'>h1</span>{'>'}About{'</'}<span className='green'>h1</span>{'>;'}</p>

  <p>&nbsp;<span className='red'>const</span> NotFound = () {'=> <'}<span className='green'>h1</span>{'>'}404 Not Found{'</'}<span className='green'>h1</span>{'>;'}</p>

  <p>&nbsp;<span className='red'>const</span> {'App = () => ( '}</p>

  <p>{'<'}<span className='blueviole'>Router</span>{'>'}</p>

  <p>&nbsp;{'<'}<span className='green'>nav</span>{'>'}</p>

  <p>&nbsp;&nbsp;{'<'}<span className='green'>ul</span>{'>'}</p>

  <p>&nbsp;&nbsp;&nbsp;{'<'}<span className='green'>li</span>{'>'}</p>

  <p>&nbsp;&nbsp;&nbsp;&nbsp;{'<'}<span className='blueviole'>Link</span> <span className='blue'>to</span>=<span className='blue1'>"/"</span>{'>'}Home{'</'}<span className='blueviole'>Link</span>{'>'}</p>

  <p>&nbsp;&nbsp;&nbsp;{'</'}<span className='green'>li</span>{'>'}</p>

  <p>&nbsp;&nbsp;&nbsp;{'<'}<span className='green'>li</span>{'>'}</p>

  <p>&nbsp;&nbsp;&nbsp;&nbsp;{'<'}<span className='blueviole'>Link</span> <span className='blue'>to</span>=<span className='blue1'>"/about"</span>{'>'}About{'</'}<span className='blueviole'>Link</span>{'>'}</p>

  <p>&nbsp;&nbsp;&nbsp;{'</'}<span className='green'>li</span>{'>'}</p>

  <p>&nbsp;&nbsp;{'</'}<span className='green'>ul</span>{'>'}</p>

  <p>&nbsp;{'</'}<span className='green'>nav</span>{'>'}</p>

  <p>{'<'}<span className='blueviole'>Routes</span>{'>'}</p>

  <p>&nbsp;{'<'}<span className='blueviole'>Route</span> <span className='blue'>path</span>=<span className='blue1'>"/"</span> <span className='blue'>element</span>={'{<'}<span className='blueviole'>Home</span> {'/>} />'}</p>

  <p>&nbsp;{'<'}<span className='blueviole'>Route</span> <span className='blue'>path</span>=<span className='blue1'>"/about"</span> <span className='blue'>element</span>={'{<'}<span className='blueviole'>About</span> {'/>} />'}</p>

  <p>&nbsp;{'<'}<span className='blueviole'>Route</span> <span className='blue'>path</span>=<span className='blue1'>"*"</span> <span className='blue'>element</span>={'{<'}<span className='blueviole'>NotFound</span> {'/>} />'}</p>

  <p>{'</'}<span className='blueviole'>Routes</span>{'>'}</p>

  <p>{'</'}<span className='blueviole'>Router</span>{'>'}</p>

  <p>{');'}</p>

  <p><span className='red'>export default</span> App; </p>
</code>

<p>In this example, we use the same core components from React Router Dom (<b>such as BrowserRouter, Route, Link</b>), but some of them have a slightly different syntax.</p>

<p>For example, we now use the <b>Routes</b> component instead of <b>Switch</b> to group multiple routes. Each route is now represented by a <b>Route</b> element with <b>path and element</b> props. The <b>path</b> prop sets the URL pattern for the route, and the <b>element</b> prop is the component to be rendered when the route matches.</p>

<p>In this example, we also added a <b>NotFound</b> component that displays when the user lands on a non-existent page.</p>

<p>Overall, React Router Dom 6 provides a more flexible and convenient way to handle routing in React applications.</p>    
    
<p>1. If you're using <b>npm</b>, open your terminal and run the following command:</p>

<b>npm install react-router-dom</b>

<p>2. If you're using <b>yarn</b>, open your terminal and run the following command:</p>

<b>yarn add react-router-dom</b> 

<p>After installation, you can import the necessary components from the <b>react-router-dom</b> package, as I showed in the examples above</p>

<p> For more information on React Router, please visit their official website: <a href="https://reactrouter.com/" target='_blank' > 👉🏼  https://reactrouter.com/.</a></p>    
    
<p>On the website, you'll find a comprehensive guide to using React Router, including:</p>    
    
<p>•  An overview of React Router and its key concepts</p> 

<p>• Installation and setup instructions</p>

<p>• Examples of different use cases and scenarios</p>

<p>• API documentation for each of the core components and utilities</p>

<p>• Advanced topics such as server rendering, code splitting, and nested routes</p>

<p>In addition to the documentation, you can also find a number of helpful resources such as a community forum, a GitHub repository for bug reports and feature requests, and a collection of related projects and plugins.</p>

<b><p>* Text written with the help of a translator. If you find an error, please let us know *</p></b>
    
    <div className='ads-container'>  
  {/*  реклама  */}
  </div> 
</div>
    )}
    {language === 'ru' && (
      <div>
        <RuReact_5 />
      </div>
    )}
    {language === 'am' && (
      <div>
        <AmReact_5 />
      </div>
    )} 
    {language === 'fr' && (
      <div>
        <FrReact_5 />
      </div>
    )}
     {language === 'es' && (
      <div>
        <EsReact_5 />
      </div>
    )}
    {language === 'pt' && (
      <div>
        <PtReact_5 />
      </div>
    )} 
    {language === 'it' && (
      <div>
        <ItReact_5 />
      </div>
    )} 
    {language === 'nl' && (
      <div>
        <NlReact_5 />
      </div>
    )}
     {language === 'tj' && (
      <div>
        <TjReact_5 />
      </div>
    )}
     {language === 'ar' && (
      <div>
        <ArReact_5 />
      </div>
    )}
     {language === 'jp' && (
      <div>
        <JpReact_5 />
      </div>
    )}
     {language === 'in' && (
      <div>
        <InReact_5 />
      </div>
    )} 
    {language === 'ko' && (
      <div>
        <KoReact_5 />
      </div>
    )} 
    </div>
    </Wrapper>
  )
}

export default React_5;