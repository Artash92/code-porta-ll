import React, { useState, useEffect } from 'react';
import Wrapper from "../components/Wrapper";
import AmHtml_1 from '../language/AmHtml_1';
import RuHtml_1 from '../language/RuHtml_1';
import ElHtml_1 from '../language/ElHtml_1';
import DeHtml_1 from '../language/DeHtml_1';
import IdHtml_1 from '../language/IdHtml_1';
import JpHtml_1 from '../language/JpHtml_1';
import KyHtml_1 from '../language/KyHtml_1';
import EsHtml_1 from '../language/EsHtml_1';
import FrHtml_1 from '../language/FrHtml_1';
import InHtml_1 from '../language/InHtml_1';
import PtHtml_1 from '../language/PtHtml_1';

function Html_1() {
  
  const [language, setLanguage] = useState('en'); 

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
  };

  useEffect(() => {
    switch (language) {
      case 'en':
        document.title = 'HTML, which stands for HyperText Markup Language, is a markup language used to create and structure content on the web. It is the backbone of every website and serves as the building blocks of web pages. HTML is a declarative language, meaning it is used to describe the content and structure of a web page, but not necessarily its appearance. | HTML document structure  | HTML (HyperText Markup Language) ';
        break;
      case 'ru':
        document.title = 'HTML (HyperText Markup Language) - язык разметки, используемый для создания и структурирования контента в интернете. Он является основой каждого веб-сайта и служит строительным блоком веб-страниц. HTML - декларативный язык, что означает, что он используется для описания содержания и структуры веб-страницы, но не обязательно для ее внешнего вида. |Структура HTML-документа | HTML (язык гипертекстовой разметки)';
        break;
      case 'am':
        document.title = 'HTML (HyperText Markup Language) նշագրման լեզու է, որն օգտագործվում է համացանցում բովանդակություն ստեղծելու և կառուցվածքի համար: Այն յուրաքանչյուր վեբ կայքի հիմքն է և ծառայում է որպես վեբ էջերի կառուցում: HTML-ը դեկլարատիվ լեզու է, ինչը նշանակում է, որ այն օգտագործվում է վեբ էջի բովանդակությունը և կառուցվածքը նկարագրելու համար, բայց պարտադիր չէ, որ դրա տեսքը նկարագրվի: | HTML փաստաթղթի կառուցվածքը | HTML (հիպերտեքստի նշագրման լեզու)';
        break;
        case 'el':
        document.title = 'Η HTML (HyperText Markup Language) είναι μια γλώσσα σήμανσης που χρησιμοποιείται για τη δημιουργία και τη δομή περιεχομένου στο Διαδίκτυο. Είναι το θεμέλιο κάθε ιστότοπου και χρησιμεύει ως το δομικό στοιχείο των ιστοσελίδων. Η HTML είναι μια δηλωτική γλώσσα, που σημαίνει ότι χρησιμοποιείται για να περιγράψει το περιεχόμενο και τη δομή μιας ιστοσελίδας, αλλά όχι απαραίτητα την εμφάνισή της. | Η HTML δημιουργήθηκε από τον Tim Berners-Lee στις αρχές της δεκαετίας του 1990 ενώ εργαζόταν στο CERN, τον Ευρωπαϊκό Οργανισμό Πυρηνικής Έρευνας. Ο Berners-Lee έψαχνε έναν τρόπο να μοιράζεται και να οργανώνει πληροφορίες μεταξύ των ερευνητών και η HTML ήταν η λύση που βρήκε. Η HTML δημιουργήθηκε για να είναι μια απλή γλώσσα που θα μπορούσε εύκολα να γίνει κατανοητή και να χρησιμοποιηθεί από οποιονδήποτε, ανεξάρτητα από το τεχνικό τους υπόβαθρο.';
        break;
        case 'de':
        document.title = 'HTML, was für HyperText Markup Language steht, ist eine Auszeichnungssprache, die verwendet wird, um Inhalte im Web zu erstellen und zu strukturieren. Es bildet das Rückgrat jeder Website und dient als Bausteine von Webseiten. HTML ist eine deklarative Sprache, was bedeutet, dass sie verwendet wird, um den Inhalt und die Struktur einer Webseite zu beschreiben, aber nicht unbedingt ihr Erscheinungsbild. | HTML wurde von Tim Berners-Lee Anfang der 1990er Jahre während seiner Arbeit am CERN, der Europäischen Organisation für Kernforschung, erstellt. Berners-Lee suchte nach einer Möglichkeit, Informationen unter Forschern zu teilen und zu organisieren, und HTML war die Lösung, die er entwickelte. HTML wurde als eine einfache Sprache konzipiert, die von jedermann, unabhängig von seinem technischen Hintergrund, leicht verstanden und verwendet werden kann.';
        break;
        case 'pt':
        document.title = 'O HTML, que significa Linguagem de Marcação de Hipertexto, é uma linguagem de marcação usada para criar e estruturar conteúdo na web. É a espinha dorsal de cada site e serve como os blocos de construção das páginas da web. HTML é uma linguagem declarativa, o que significa que é usada para descrever o conteúdo e a estrutura de uma página da web, mas não necessariamente sua aparência. | O HTML foi criado por Tim Berners-Lee no início da década de 1990 enquanto trabalhava no CERN, a Organização Europeia para a Pesquisa Nuclear. Berners-Lee estava procurando uma maneira de compartilhar e organizar informações entre pesquisadores, e o HTML foi a solução que ele encontrou. O HTML foi projetado para ser uma linguagem simples que poderia ser facilmente compreendida e usada por qualquer pessoa, independentemente de seu conhecimento técnico. | O HTML é composto por uma série de elementos, que são representados por tags. As tags são cercadas por colchetes angulares e são usadas para definir a estrutura e o conteúdo de uma página da web. Por exemplo, a tag <head> é usada para definir a seção de cabeçalho de uma página da web, que normalmente contém informações como o título da página e links para folhas de estilo externas e scripts. A tag <body> é usada para definir a seção de corpo de uma página da web, que contém o conteúdo principal da página. ';
        break;
        case 'fr':
        document.title = "HTML, qui signifie HyperText Markup Language, est un langage de balisage utilisé pour créer et structurer le contenu sur le web. Il est l'épine dorsale de chaque site web et sert de fondation aux pages web. HTML est un langage déclaratif, ce qui signifie qu'il est utilisé pour décrire le contenu et la structure d'une page web, mais pas nécessairement son apparence. | HTML a été créé par Tim Berners-Lee au début des années 1990 alors qu'il travaillait au CERN, l'Organisation européenne pour la recherche nucléaire. Berners-Lee cherchait un moyen de partager et d'organiser l'information entre les chercheurs, et HTML était la solution qu'il avait trouvée. HTML a été conçu comme un langage simple pouvant être facilement compris et utilisé par n'importe qui, indépendamment de ses compétences techniques.";
        break;
        case 'es':
        document.title = 'HTML, que significa Lenguaje de Marcado de Hipertexto, es un lenguaje de marcado utilizado para crear y estructurar contenido en la web. Es la columna vertebral de cada sitio web y sirve como los bloques de construcción de las páginas web. HTML es un lenguaje declarativo, lo que significa que se utiliza para describir el contenido y la estructura de una página web, pero no necesariamente su apariencia. | HTML fue creado por Tim Berners-Lee a principios de la década de 1990 mientras trabajaba en el CERN, la Organización Europea para la Investigación Nuclear. Berners-Lee buscaba una forma de compartir y organizar información entre los investigadores, y HTML fue la solución que ideó. HTML fue diseñado para ser un lenguaje simple que pudiera ser comprendido y utilizado fácilmente por cualquier persona, independientemente de su formación técnica. | HTML está compuesto por una serie de elementos, que están representados por etiquetas. Las etiquetas están encerradas entre corchetes angulares y se utilizan para definir la estructura y el contenido de una página web. Por ejemplo, la etiqueta <head> se utiliza para definir la sección head de una página web, que generalmente contiene información como el título de la página y enlaces a hojas de estilo externas y scripts. La etiqueta <body> se utiliza para definir la sección body de una página web, que contiene el contenido principal de la página.';
        break;
        case 'id':
        document.title = 'HTML, yang merupakan singkatan dari HyperText Markup Language, adalah bahasa markup yang digunakan untuk membuat dan struktur konten di web. Ini adalah tulang punggung setiap situs web dan berfungsi sebagai blok pembangun halaman web. HTML adalah bahasa deklaratif, yang berarti digunakan untuk menggambarkan konten dan struktur halaman web, tetapi tidak selalu penampilannya. | HTML diciptakan oleh Tim Berners-Lee pada awal tahun 1990-an saat bekerja di CERN, Organisasi Eropa untuk Riset Nuklir. Berners-Lee sedang mencari cara untuk berbagi dan mengatur informasi di antara para peneliti, dan HTML adalah solusi yang dia temukan. HTML dirancang untuk menjadi bahasa yang sederhana yang dapat dengan mudah dimengerti dan digunakan oleh siapa pun, tanpa memandang latar belakang teknis mereka. | HTML terdiri dari serangkaian elemen, yang direpresentasikan oleh tag. Tag dikemas dalam tanda kurung sudut dan digunakan untuk mendefinisikan struktur dan konten halaman web. Misalnya, tag <head> digunakan untuk mendefinisikan bagian kepala halaman web, yang biasanya berisi informasi seperti judul halaman dan tautan ke stylesheet dan skrip eksternal. Tag <body> digunakan untuk mendefinisikan bagian tubuh halaman web, yang berisi konten utama dari halaman.';
        break;
        case 'jp':
        document.title = 'HTMLは、ウェブ上のコンテンツを作成し構造化するためのマークアップ言語です。それはすべてのウェブサイトのバックボーンであり、ウェブページの構築ブロックとして機能します。HTMLは宣言型の言語であり、ウェブページのコンテンツと構造を記述するために使用されますが、必ずしもその外観を指定するものではありません。 | HTMLは、ティム・バーナーズ＝リーが1990年代初頭にCERN（欧州原子核研究機構）で働いていたときに作成されました。バーナーズ＝リーは、研究者間で情報を共有し整理する方法を探しており、HTMLがその解決策でした。HTMLは、技術的なバックグラウンドに関係なく、誰でも簡単に理解して使用できるシンプルな言語で設計されました。| HTMLはタグによって表される一連の要素で構成されています。タグは角かっこで囲まれ、ウェブページの構造とコンテンツを定義するために使用されます。例えば、<head>タグはウェブページのヘッドセクションを定義するために使用され、通常はページのタイトルや外部スタイルシートやスクリプトへのリンクなどの情報が含まれます。<body>タグはウェブページのボディセクションを定義するために使用され、ページの主なコンテンツが含まれます。';
        break;
        case 'in':
        document.title = 'HTML, जिसका पूरा रूप होता है हाइपरटेक्स्ट मार्कअप भाषा, वेब पर सामग्री को बनाने और संरचित करने के लिए एक मार्कअप भाषा है। यह हर वेबसाइट की मुख्य स्तंभ होती है और वेब पृष्ठों के निर्माण खंडों के रूप में कार्य करती है। HTML एक घोषणात्मक भाषा है, जिसका अर्थ है कि यह एक वेब पृष्ठ की सामग्री और संरचना का वर्णन करने के लिए प्रयोग किया जाता है, लेकिन इसकी उपस्थिति को नहीं। उसके दिखावे की। | HTML को सन 1990 के दशक के प्रारंभ में CERN, यूरोपीय परमाणु अनुसंधान संगठन, में काम करते समय तिम बर्नर्स-ली द्वारा बनाया गया था। बर्नर्स-ली अनुसंधानकर्ताओं के बीच जानकारी साझा और व्यवस्थित करने का एक तरीका ढूंढ रहे थे, और HTML उस समाधान था जिसे उन्होंने बनाया। HTML को सरल भाषा के रूप में डिज़ाइन किया गया था, जो किसी के भी तकनीकी पृष्ठभूमि के बिना समझने और प्रयोग करने में सरल हो सकती है। | HTML किसी श्रृंखला के तत्वों से बना होता है, जिन्हें टैगों द्वारा प्रतिनिधित किया जाता है। टैगों को कोणाकार ब्रैकेट में बंद किया जाता है और इस्तेमाल किया जाता है वेब पृष्ठ की संरचना और सामग्री को वर्णित करने के लिए। उदाहरण के लिए, <head> टैग का उपयोग एक वेब पृष्ठ के हेड सेक्शन को परिभाषित करने के लिए किया जाता है, जो सामान्यत: पृष्ठ के शीर्षक और बाहरी स्टाइलशीट और स्क्रिप्ट को लिंक करने जैसी जानकारी को शामिल करता है। <body> टैग का उपयोग एक वेब पृष्ठ के बॉडी सेक्शन को परिभाषित करने के लिए किया जाता है, जो पृष्ठ की मुख्य सामग्री को शामिल करता है। ';
        break;
        case 'ky':
        document.title = 'HTML, кийинча HyperText Markup Language деп аталат, вебдеги мазмунду жасоо жана структуралоо үчүн колдонулаткан белгилөөлөр тили болуп саналат. Бул бардык сайттердин асы болуп, веб баракчалардын жайлары болуп табылады. HTML декларативтик тил болуп саналат, бул сайттин мазмунун жана строектурасын аныктаган жок, чыгуусун аныктамайды. | HTML Тим Бернерс-Лии 1990 жылдардын алдында CERN, Европалык Ядро Түшкүндөрүш Организациясында иштеген учурда түзүлгөн. Бернерс-Лии зооп жана оюу көзөмөндөргөн адамдар арасында маалыматты бөлүп аракет кылуу үчүн HTMLди пайдаланган. HTML сынган ада тема, техникалык өнүмдөрүне башка ким кийин чакырылышы мүмкүн болгон окуучулардан көркүлөт. | HTML колдонуучулар тизмесиндеги элементтер тармагынан турган. Тармактар бардык тарабынан ачылып, веб баракчанын строектурасын жана мазмунун түрүн аныктаган. Мисалы, <head> тармагы веб баракчасынын баш секциясын аныктаган, ушул бөлүмде сайтын аталышы жана сылталык стилдер мен скрипттерге ссылкалар бар. <body> тармагы веб баракчасынын беден секциясын аныктаган, ушул бөлүмде баракчанын негизги мазмуну бар.';
        break;
      default:
        document.title = 'HTML';
    }
  }, [language]);

  return (
    <Wrapper>
      <div className='java-script'>
        <div>
          <button className='button1' onClick={() => handleLanguageChange('en')}>English</button>
          <button className='button1' onClick={() => handleLanguageChange('ru')}>Русский</button>
          <button className='button1' onClick={() => handleLanguageChange('am')}>Հայերեն</button>
          <button className='button1' onClick={() => handleLanguageChange('el')}>Ελληνικά</button>
          <button className='button1' onClick={()=> handleLanguageChange('de')}>Deutschland</button>
          <button className='button1' onClick={() => handleLanguageChange('pt')}>Português</button>
          <button className='button1' onClick={() => handleLanguageChange('fr')}>Français</button>
          <button className='button1' onClick={() => handleLanguageChange('es')}>Español</button>
          <button className='button1' onClick={() => handleLanguageChange('id')}>Bahasa Indonesia</button>
          <button className='button1' onClick={() => handleLanguageChange('jp')}>日本語</button>
          <button className='button1' onClick={() => handleLanguageChange('in')}>हिन्दी</button>
          <button className='button1' onClick={() => handleLanguageChange('ky')}>Кыргызча</button>
        </div>

        {language === 'en' && (
          <div>
             <div className='ad-container'>  
          {/*  реклама  */}
        </div> 
            
        <h1>HTML</h1>

<p>HTML, which stands for HyperText Markup Language, is a markup language used to create and structure content on the web. It is the backbone of every website and serves as the building blocks of web pages. HTML is a declarative language, meaning it is used to describe the content and structure of a web page, but not necessarily its appearance.</p>   
    
<p>HTML was created by Tim Berners-Lee in the early 1990s while working at CERN, the European Organization for Nuclear Research. Berners-Lee was looking for a way to share and organize information among researchers, and HTML was the solution he came up with. HTML was designed to be a simple language that could be easily understood and used by anyone, regardless of their technical background.</p>

<p>HTML is made up of a series of elements, which are represented by tags. Tags are enclosed in angle brackets and are used to define the structure and content of a web page. For example, the {'<head>'} tag is used to define the head section of a web page, which typically contains information such as the title of the page and links to external stylesheets and scripts. The {'<body>'} tag is used to define the body section of a web page, which contains the main content of the page.</p>

<p>HTML is a constantly evolving language, with new versions being released periodically. The current version of HTML is HTML5, which was released in 2014. HTML5 introduced many new features and capabilities, such as video and audio tags, canvas elements for drawing graphics, and semantic tags for better accessibility and SEO.</p>

<p>In summary, HTML is a markup language used to create and structure content on the web. It was created by Tim Berners-Lee in the early 1990s and is the backbone of every website. HTML is made up of a series of elements represented by tags, and it is a constantly evolving language with new versions being released periodically.</p>

<p>1. Simple web page with a title and paragraph:</p>
    
    
<code>
   <p>{'<'}!<span className='blue'>DOCTYPE</span> <span className='blue1'>html</span>{'>'}</p>

   <p>{'<'}<span className='green'>html</span>{'>'}</p> 
  
   <p>{'<'}<span className='green'>head</span>{'>'}</p>

   <p>&nbsp;{'<'}<span className='green'>title</span>{'>'}My Web Page{'</'}<span className='green'>title</span>{'>'}</p>

   <p>{'</'}<span className='green'>head</span>{'>'}</p>

   <p>{'<'}<span className='green'>body</span>{'>'}</p>

   <p>&nbsp;{'<'}<span className='green'>h1</span>{'>'}Welcome to My Web Page{'</'}<span className='green'>h1</span>{'>'}</p>

   <p>&nbsp;{'<'}<span className='green'>p</span>{'>'}This is my first web page.{'</'}<span className='green'>p</span>{'>'}</p>

   <p>{'</'}<span className='green'>body</span>{'>'}</p>

   <p>{'</'}<span className='green'>html</span>{'>'}</p>
</code>

<p>This is an example of a simple web page that consists of a title and a paragraph. The title is represented by the "title" tag, and the paragraph by the "p" tag. The page title is displayed in the browser's title bar and in search engine results.</p>

<p>2. Image with alternative text and a link to another page:</p>

 
  <code>
    <p>{'<'}!<span className='blue'>DOCTYPE</span> <span className='blue1'>html</span>{'>'}</p>
       
    <p>{'<'}<span className='green'>html</span>{'>'}</p> 
       
    <p>{'<'}<span className='green'>head</span>{'>'}</p>  
       
    <p>&nbsp;{'<'}<span className='green'>title</span>{'>'}My Web Page{'</'}<span className='green'>title</span>{'>'}</p> 
       
    <p>{'</'}<span className='green'>head</span>{'>'}</p> 
       
    <p>{'<'}<span className='green'>body</span>{'>'}</p> 
       
    <p>&nbsp;{'<'}<span className='green'>h1</span>{'>'}Welcome to My Web Page{'</'}<span className='green'>h1</span>{'>'}</p>
       
    <p>&nbsp;{'<'}<span className='green'>p</span>{'>'}This is a picture of a cat:{'</'}<span className='green'>p</span>{'>'}</p>
       
    <p>&nbsp;{'<'}<span className='green'>img</span> <span className='blue'>src</span>=<span className='blue1'>"cat.jpg"</span> <span className='blue'>alt</span>=<span className='blue1'>"A cute cat"</span>{'>'}</p> 

    <p>&nbsp;{'<'}<span className='green'>p</span>{'>'}Click {'<'}<span className='green'>a</span> <span className='blue'>href</span>=<span className='blue1'>"http://www.google.com"</span>{'>'}here{'</'}<span className='green'>a</span>{'>'} to go to Google.{'</'}<span className='green'>p</span>{'>'}</p> 

    <p>{'</'}<span className='green'>body</span>{'>'}</p> 

    <p>{'</'}<span className='green'>html</span>{'>'}</p>
  </code>

<p>This example includes an image of a cat, represented by the "img" tag, with alternative text displayed in case the image cannot be loaded. The link to Google is represented by the "a" tag with the "href" attribute pointing to the URL of the destination page.</p>

<p>3. Form for entering a name and submitting data to a server:</p>

  
  <code>
    <p>{'<'}!<span className='blue'>DOCTYPE</span> <span className='blue1'>html</span>{'>'}</p>
    
    <p>{'<'}<span className='green'>html</span>{'>'}</p>    

    <p>{'<'}<span className='green'>head</span>{'>'}</p>  

    <p>&nbsp;{'<'}<span className='green'>title</span>{'>'}My Web Page{'</'}<span className='green'>title</span>{'>'}</p>   

    <p>{'</'}<span className='green'>head</span>{'>'}</p>  

    <p>{'<'}<span className='green'>body</span>{'>'}</p> 

    <p>&nbsp;{'<'}<span className='green'>h1</span>{'>'}Welcome to My Web Page{'</'}<span className='green'>h1</span>{'>'}</p> 

    <p>{'<'}<span className='green'>form</span>{'>'}</p> 

    <p>&nbsp;{'<'}<span className='green'>label</span> <span className='blue'>for</span>=<span className='blue1'>"name"</span>{'>'}Enter your name:{'</'}<span className='green'>label</span>{'>'}</p>  

    <p>&nbsp;{'<'}<span className='green'>input</span> <span className='blue'>type</span>=<span className='blue1'>"text"</span> <span className='blue'>id</span>=<span className='blue1'>"name"</span> <span className='blue'>name</span>=<span className='blue1'>"name"</span>{'><'}<span className='green'>br</span>{'><'}<span className='green'>br</span>{'>'}</p>  

    <p>&nbsp;{'<'}<span className='green'>input</span> <span className='blue'>type</span>=<span className='blue1'>"submit"</span> <span className='blue'>value</span>=<span className='blue1'>"Submit"</span>{'>'}</p>  

    <p>{'</'}<span className='green'>form</span>{'>'}</p>  

    <p>{'</'}<span className='green'>body</span>{'>'}</p>   

    <p>{'</'}<span className='green'>html</span>{'>'}</p>   
  </code>
 

<p>This example shows a form with a text input field for the user to enter their name. When the form is submitted, the data is sent to a server for processing. The "label" tag provides a text label for the input field, and the "input" tag is used to create the input field and the submit button.</p>

    <p>4. Ordered list of items:</p>

    
  <code>
    <p>{'<'}!<span className='blue'>DOCTYPE</span> <span className='blue1'>html</span>{'>'}</p>

    <p>{'<'}<span className='green'>html</span>{'>'}</p> 

    <p>{'<'}<span className='green'>head</span>{'>'}</p>

    <p>&nbsp;{'<'}<span className='green'>title</span>{'>'}My Web Page{'</'}<span className='green'>title</span>{'>'}</p>

    <p>{'</'}<span className='green'>head</span>{'>'}</p> 

    <p>{'<'}<span className='green'>body</span>{'>'}</p> 

    <p>&nbsp;{'<'}<span className='green'>h1</span>{'>'}Welcome to My Web Page{'</'}<span className='green'>h1</span>{'>'}</p> 

    <p>&nbsp;{'<'}<span className='green'>h2</span>{'>'}My favorite foods:{'</'}<span className='green'>h2</span>{'>'}</p> 

    <p>{'<'}<span className='green'>ol</span>{'>'}</p>

    <p>&nbsp;{'<'}<span className='green'>li</span>{'>'}Pizza{'</'}<span className='green'>li</span>{'>'}</p>

    <p>&nbsp;{'<'}<span className='green'>li</span>{'>'}Burgers{'</'}<span className='green'>li</span>{'>'}</p>

    <p>&nbsp;{'<'}<span className='green'>li</span>{'>'}Ice cream{'</'}<span className='green'>li</span>{'>'}</p>

    <p>{'</'}<span className='green'>ol</span>{'>'}</p> 

    <p>{'</'}<span className='green'>body</span>{'>'}</p> 

    <p>{'</'}<span className='green'>html</span>{'>'}</p>
</code>
 

<p>This example shows an ordered list of items represented by the "ol" tag, with each item represented by the "li" tag. The numbers for the list are automatically generated by the browser.</p>

<p>5. Unordered list of items:</p>

 
<code>
  <p>{'<'}!<span className='blue'>DOCTYPE</span> <span className='blue1'>html</span>{'>'}</p>

  <p>{'<'}<span className='green'>html</span>{'>'}</p>

  <p>{'<'}<span className='green'>head</span>{'>'}</p>

  <p>&nbsp;{'<'}<span className='green'>title</span>{'>'}My Web Page{'</'}<span className='green'>title</span>{'>'}</p>

  <p>{'</'}<span className='green'>head</span>{'>'}</p>

  <p>{'<'}<span className='green'>body</span>{'>'}</p>

  <p>&nbsp;{'<'}<span className='green'>h1</span>{'>'}Welcome to My Web Page{'</'}<span className='green'>h1</span>{'>'}</p> 

  <p>&nbsp;{'<'}<span className='green'>h2</span>{'>'}My favorite movies:{'</'}<span className='green'>h2</span>{'>'}</p> 

  <p>{'<'}<span className='green'>ul</span>{'>'}</p>

  <p>&nbsp;{'<'}<span className='green'>li</span>{'>'}The Shawshank Redemption{'</'}<span className='green'>li</span>{'>'}</p>

  <p>&nbsp;{'<'}<span className='green'>li</span>{'>'}The Godfather{'</'}<span className='green'>li</span>{'>'}</p>

  <p>&nbsp;{'<'}<span className='green'>li</span>{'>'}The Dark Knight{'</'}<span className='green'>li</span>{'>'}</p>

  <p>{'</'}<span className='green'>ul</span>{'>'}</p> 

  <p>{'</'}<span className='green'>body</span>{'>'}</p>

  <p>{'</'}<span className='green'>html</span>{'>'}</p> 
</code>
      
<p>This example shows an unordered list of items represented by the "ul" tag, with each item represented by the "li" tag. The list items are displayed with bullet points by default.</p> 

<p>To further enhance their understanding of HTML, students can be directed to additional resources such as the documentation on <b>MDN Web Docs</b> or <b>W3Schools</b>.</p> 

<p>To add a link to MDN Web Docs on your website, use the following HTML code:</p> 

<p><a href="https://developer.mozilla.org/en-US/docs/Web/HTML "target='_blank'> <b> &#x1F44D; MDN Web Docs</b></a></p> 
     
<p>To add a link to W3Schools on your website, use the following HTML code:</p>  

<p><a href="https://www.w3schools.com/html/" target='_blank' > <b>&#x1F44D; W3Schools</b></a></p>

<p>Both MDN Web Docs and W3Schools provide comprehensive and detailed documentation on HTML and related technologies, as well as interactive tutorials and examples. Students can use these resources to deepen their knowledge of HTML and improve their web development skills.</p>


<b><p>* Text written with the help of a translator. If you find an error, please let us know *</p></b>
    <div className='ads-container'>  
  {/*  реклама  */}
</div>
          </div>
        )}
        {language === 'ru' && (
          <div>
            <RuHtml_1 />
          </div>
        )}
        {language === 'am' && (
          <div>
            <AmHtml_1 />
          </div>
        )}
        {language === 'el' && (
          <div>
            <ElHtml_1 />
          </div>
        )}
        {language === 'de' && (
          <div>
            <DeHtml_1 />
          </div>
        )}
        {language === 'id' && (
          <div>
            <IdHtml_1 />
          </div>
        )}
        {language === 'jp' && (
          <div>
            <JpHtml_1 />
          </div>
        )}
         {language === 'ky' && (
          <div>
            <KyHtml_1 />
          </div>
        )}
        {language === 'es' && (
          <div>
            <EsHtml_1 />
          </div>
        )}
        {language === 'fr' && (
          <div>
            <FrHtml_1 />
          </div>
        )}
         {language === 'in' && (
          <div>
            <InHtml_1 />
          </div>
        )}
         {language === 'pt' && (
          <div>
            <PtHtml_1 />
          </div>
        )}
      </div>
    </Wrapper>
  );
}

export default Html_1;
