import React,{useState, useEffect} from 'react';
import RuReact_1 from '../language/RuReact_1';
import AmReact_1 from '../language/AmReact_1';
import Wrapper from '../components/Wrapper';
import FrReact_1 from '../language/FrReact_1';
import EsReact_1 from '../language/EsReact_1';
import PtReact_1 from '../language/PtReact_1';
import ItReact_1 from '../language/ItReact_1';
import NlReact_1 from '../language/NlReact_1';
import TjReact_1 from '../language/TjReact_1';
import ArReact_1 from '../language/ArReact_1';
import JpReact_1 from '../language/JpReact_1';
import InReact_1 from '../language/InReact_1';
import KoReact_1 from '../language/KoReact_1';

function React_1() {
  
  const [language, setLanguage] = useState('en');  
  
  const handleLanguageChange = (lang) => {
    setLanguage(lang);
  };

  useEffect(() => {
    switch (language) {
      case 'en':
        document.title = 'ReactJS | is a popular JavaScript library that was created by Facebook | Installing Node.js on Windows | Installing Node.js on Ubuntu ';
        break;
      case 'ru':
        document.title = 'Реакт | ReactJS - это популярная библиотека JavaScript, созданная Facebook | Установка Node.js в Windows | Установка Node.js на Ubuntu ';
        break;
      case 'am':
        document.title = 'ReactJS | ReactJS-ը հայտնի JavaScript գրադարան է, որը ստեղծվել է Facebook-ի կողմից | Node.js-ի տեղադրում Windows-ում | Node.js-ի տեղադրում Ubuntu-ում | React-ի հետ աշխատելու համար դուք պետք է լավ պատկերացնեք հետևյալը. ';
        break;
        case 'fr':
        document.title = "ReactJS est une bibliothèque JavaScript populaire qui a été créée par Facebook. Elle a été initialement publiée en 2013 et a depuis acquis une énorme popularité parmi les développeurs web. | Voici un exemple d'un composant ReactJS simple: | Installation de Node.js sur Windows | Installation de Node.js sur Ubuntu | Pour travailler avec React, vous devrez avoir une bonne compréhension des éléments suivants:";
        break;
        case 'es':
        document.title = 'ReactJS es una popular biblioteca de JavaScript que fue creada por Facebook. Fue lanzada por primera vez en 2013 y desde entonces ha ganado una gran cantidad de seguidores entre los desarrolladores web. | Aquí hay un ejemplo de un componente ReactJS simple: | Instalación de Node.js en Windows | Instalación de Node.js en Ubuntu | Para trabajar con React, necesitarás tener un buen entendimiento de lo siguiente:';
        break;
        case 'pt':
        document.title = 'ReactJS é uma popular biblioteca de JavaScript criada pelo Facebook. Foi lançada pela primeira vez em 2013 e desde então conquistou uma grande quantidade de desenvolvedores web. | Aqui está um exemplo de um componente ReactJS simples: | Instalando o Node.js no Windows | Instalando o Node.js no Ubuntu | Para trabalhar com React, você precisará ter um bom entendimento dos seguintes:';
        break;
        case 'it':
        document.title = "ReactJS è una popolare libreria JavaScript creata da Facebook. È stata rilasciata per la prima volta nel 2013 e da allora ha guadagnato un grande seguito tra gli sviluppatori web. | Ecco un esempio di un componente ReactJS semplice: | Installazione di Node.js su Windows | Installazione di Node.js su Ubuntu | Per lavorare con React, avrai bisogno di una buona comprensione dei seguenti argomenti:";
        break;
        case 'nl':
        document.title = 'ReactJS is een populaire JavaScript-bibliotheek die is gemaakt door Facebook. Het werd voor het eerst uitgebracht in 2013 en heeft sindsdien een grote aanhang gekregen onder webontwikkelaars. | Hier is een voorbeeld van een eenvoudig ReactJS-component: | Node.js installeren op Windows | Node.js installeren op Ubuntu | Om met React te werken, moet je een goed begrip hebben van het volgende:';
        break;
        case 'tj':
        document.title = 'ReactJS як китобхонаи маъмули JavaScript мебошад, ки аз ҷониби Facebook сохта шудааст. Он бори аввал соли 2013 бароварда шуд ва аз он вақт инҷониб дар байни таҳиягарони веб пайравони зиёд пайдо кард. | Ин ҷо як мисоли ҷузъҳои оддии ReactJS: | Насб кардани Node.js дар Windows | Насб кардани Node.js дар Ubuntu | Барои кор бо React, шумо бояд чизҳои зеринро хуб фаҳмед:';
        break;
        case 'ar':
        document.title = 'رياكت جي إس | رياكت جي إس هو مكتبة جافا سكريبت شهيرة تم إنشاؤها بواسطة فيسبوك. تم إصدارها لأول مرة في عام 2013 ومنذ ذلك الحين اكتسبت متابعة كبيرة بين مطوري الويب. | فيما يلي مثال على مكون رياكت جي إس بسيط: | تثبيت Node.js على ويندوز | تثبيت Node.js على أوبونتو | للعمل مع رياكت، ستحتاج إلى فهم جيد لما يلي:';
        break;
        case 'in':
        document.title = 'ReactJS एक लोकप्रिय जावास्क्रिप्ट लाइब्रेरी है जिसे फेसबुक द्वारा बनाया गया था। इसे पहली बार 2013 में रिलीज़ किया गया था और तब से इसे वेब डेवलपर्स के बीच बड़ी संख्या में फॉलोअर्स हासिल हुए हैं। | यहां एक सरल ReactJS घटक का उदाहरण दिया गया है: | विंडोज़ पर Node.js इंस्टॉल करना | Ubuntu पर Node.js इंस्टॉल करना | रिएक्ट के साथ काम करने के लिए, आपको निम्नलिखित की अच्छी समझ होनी चाहिए: ';
        break;
        case 'jp':
        document.title = 'ReactJS（リアクトジェーエス）は、Facebook（フェイスブック）によって作成された人気のあるJavaScript（ジャバスクリプト）ライブラリです。2013年に初めてリリースされ、以来、多くのウェブ開発者の支持を得ています。| 以下は、単純なReactJSコンポーネントの例です | WindowsにNode.jsをインストールする | UbuntuにNode.jsをインストールする | Reactで作業するには、以下のことをよく理解しておく必要があります： ';
        break;
        case 'ko':
        document.title = 'ReactJS은 페이스북에서 만든 인기 있는 JavaScript 라이브러리입니다. 이는 2013년 처음 출시되었으며 그 이후 웹 개발자들 사이에서 큰 인기를 얻었습니다. | 다음은 간단한 ReactJS 구성 요소의 예입니다: | Windows에서 Node.js 설치하기 | Ubuntu에서 Node.js 설치하기 | React 작업을 위해 다음을 잘 이해해야 합니다:';
        break;
      default:
        document.title = 'JavaScript ES5-1 | java script lesson 1';
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

        <h1>React JS</h1>

<p><b>ReactJS</b> is a popular <b>JavaScript </b>library that was created by <b>Facebook</b>. It was first released in 2013 and has since gained a huge following among web developers.</p>

<p>ReactJS was created to solve a specific problem - the need for a fast and efficient way to build complex user interfaces with large amounts of data that change over time. Prior to ReactJS, building these types of interfaces required a lot of code and was often slow and difficult to manage.</p>

<p>The core idea behind ReactJS is to break down user interfaces into individual components that can be reused across different parts of an application. Each component is responsible for rendering a small piece of the UI and can be easily composed together to create complex interfaces.</p>

<p>One of the key benefits of ReactJS is that it makes use of a virtual DOM, which is a lightweight representation of the actual DOM. This allows ReactJS to make updates to the UI in a very efficient way, without having to make expensive updates to the actual DOM.</p>

<p><b>Here is an example of a simple ReactJS component:</b></p>

<code>
  <p><span className='red'>import </span>React  <span className='red'>from</span> <span className='blue'>'react'</span>;</p>

  <p><span className='red'>function</span> <span className='blueviole'>MyComponent</span>(props) {'{'}</p>

  <p><span className='red'>return</span> {'('}</p>

  <p>{'<'}<span className='green'>div</span>{'>'}</p>

  <p>&nbsp;{'<'}<span className='green'>h1</span>{'>'}{'{'}props.<span className='blue'>title{'}'}</span>{'</'}<span className='green'>h1</span>{'>'}</p>

  <p>&nbsp;{'<'}<span className='green'>p</span>{'>'} {'{'}props.<span className='blue'>description</span>{'}'}{'<'}<span className='green'>/p</span>{'>'}</p>

  <p>{'</'}<span className='green'>div</span>{'>'}</p>

  <p>&nbsp;{');'}</p>

  <p>{'}'}</p>

  <p><span className='red'>export default</span> MyComponent;</p>  
</code>

<p>This component takes in two props - <b>title and description </b>- and renders them in a simple HTML structure. This component can then be used throughout an application to display information to the user.</p>

<p>If you're interested in learning more about ReactJS, I would recommend starting with the official documentation on the ReactJS website: <a href="https://react.dev/" target='_blank' > 👉🏼 <b>https://react.dev/</b> </a>. There you will find a wealth of information on how to get started with ReactJS, including tutorials, guides, and reference materials.</p>

<p>To install Node.js for working with React, follow the steps below:</p>

<h1>Installing Node.js on Windows</h1>

<p>1. Go to the official Node.js website:<a href="https://nodejs.org/" target='_blank' > 👉🏼 https://nodejs.org/ </a></p>

<p>2. Click the "Download" button for the "Windows Installer" version</p> 

<p>3. Run the downloaded installer and follow the prompts to install Node.js</p>

<p>4. Once the installation is complete, open a command prompt and type node -v to verify that Node.js is installed correctly</p>
    

<h1>Installing Node.js on Ubuntu</h1>

<p>1. Open a terminal window</p>

<p>2. Run the command <b>sudo apt update to update</b> the package manager</p>

<p>3. Run the command <b>sudo apt install nodejs</b> to install Node.js</p>

<p>4. Run the command <b>node -v</b> to verify that Node.js is installed correctly</p>

<b>Here is an example of how to use Node.js and React together:</b>

<p>1. Create a new React app using the command <b>npx create-react-app my-app</b></p>

<p>2. Change into the <b>my-app</b> directory using the command <b>cd my-app</b></p>

<p>3. Start the development server using the command <b>npm start</b></p>

<p>4. Open a web browser and navigate to <b>http://localhost:3000</b> to see the React app running</p>
    
 <p>If you're interested in learning more about Node.js and React, I would recommend checking out the official documentation for both technologies. Here are the links to their respective websites:</p>   
    
 <p><b><a href="https://nodejs.org/" target='_blank' > 👉🏼 Node.js</a></b></p>

 <p><b> <a href="https://reactjs.org/" target='_blank' > 👉🏼 React</a></b> </p>

 <p><b>To work with React, you will need to have a good understanding of the following:</b></p> 

 <p>1. <span className='chocolate'>HTML</span>/<span className='blue'>CSS</span>: You should have a good understanding of HTML and CSS, as React is primarily used for building user interfaces (UIs) and web applications.</p>

 <p>2. <span className='yellow'>JavaScript</span>: React is a JavaScript library, so you will need to have a solid understanding of JavaScript, including concepts such as functions, arrays, objects, and scope.</p>

 <p>3. <span className='red'>ES6</span>: React relies heavily on ES6 features such as arrow functions, destructuring, and classes, so you will need to have a good understanding of these features.</p> 

 <p>4. <span className='blueviole'>JSX</span>: As mentioned earlier, JSX is a syntax extension for JavaScript that allows you to write HTML-like code in your JavaScript files. You will need to understand how JSX works and how to use it to define UI components.</p>

 <p>5. <span className='green'>Node.js</span> and <span className='red'>npm</span>: React applications are typically built using Node.js and the npm package manager. You will need to understand how to install and use these tools.</p>

 <p>6. <span className='blue'>React</span> ecosystem: There is a wide range of tools and libraries that are commonly used in the React ecosystem, such as React Router, Redux, and Axios. You will need to understand how these tools work and how to use them to build React applications.</p>

 <p>7. <span className='dev-tools'>Development tools</span>: You will also need to be familiar with development tools such as Visual Studio Code, Chrome DevTools, and Git.</p>
 
 <b><p>* Text written with the help of a translator. If you find an error, please let us know *</p></b>
    <div className='ads-container'>  
  {/*  реклама  */}
</div>
 </div>
 
     )}
      {language === 'ru' && (
        <div>
          <RuReact_1 />
        </div>
      )}
      {language === 'am' && (
        <div>
          <AmReact_1 />
        </div>
      )} 
      {language === 'fr' && (
        <div>
          <FrReact_1 />
        </div>
      )}
       {language === 'es' && (
        <div>
          <EsReact_1 />
        </div>
      )}
      {language === 'pt' && (
        <div>
          <PtReact_1 />
        </div>
      )} 
      {language === 'it' && (
        <div>
          <ItReact_1 />
        </div>
      )} 
      {language === 'nl' && (
        <div>
          <NlReact_1 />
        </div>
      )}
       {language === 'tj' && (
        <div>
          <TjReact_1 />
        </div>
      )}
       {language === 'ar' && (
        <div>
          <ArReact_1 />
        </div>
      )}
       {language === 'jp' && (
        <div>
          <JpReact_1 />
        </div>
      )}
       {language === 'in' && (
        <div>
          <InReact_1 />
        </div>
      )} 
      {language === 'ko' && (
        <div>
          <KoReact_1 />
        </div>
      )}     
  </div>
  </Wrapper>
  )
}

export default React_1;