import React, { useState, useEffect } from 'react'; 
import Wrapper from '../components/Wrapper';
import UzHtml_7 from '../language/UzHtml_7';
import TjHtml_7 from '../language/TjHtml_7';
import FrHtml_7 from '../language/FrHtml_7';
import RuHtml_7 from '../language/RuHtml_7';
import AmHtml_7 from '../language/AmHtml_7';
import ArHtml_7 from '../language/ArHtml_7';
import JpHtml_7 from '../language/JpHtml_7';
import PtHtml_7 from '../language/PtHtml_7';
  
function Html_7() {
  const [language, setLanguage] = useState('en');  

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
  };


  useEffect(() => {
    switch (language) {
      case 'en':
        document.title = 'What is the difference between HTML and XML? | What are the similarities between HTML and XML? | Primary Syntax Differences between HTML and XML | Predefined Tags | HTML and XML Examples | Other Key Differences between HTML and XML | Brief Summary of Key Differences between HTML and XML ';
        break;
      case 'ru':
        document.title = 'В чем разница между HTML и XML? | В чем сходство между HTML и XML? | Основные синтаксические различия HTML и XML | Примеры HTML и XML | Другие ключевые отличия HTML и XML | Когда использовать HTML и XML | Как использовать HTML и XML вместе | Краткое изложение основных различий между HTML и XML | Как начать работать с XML | Как начать работать с HTML';
        break;
      case 'am':
        document.title = 'Ո՞րն է տարբերությունը HTML-ի և XML-ի միջև: | Ի՞նչ նմանություններ կան HTML-ի և XML-ի միջև: | Հիմնական շարահյուսական տարբերությունները HTML-ի և XML-ի միջև | Կանխորոշված թեգեր | HTML և XML օրինակներ | Ինքնափակվող թեգեր | HTML-ի և XML-ի այլ հիմնական տարբերություններ | Երբ օգտագործել HTML-ը և XML-ը | Ինչպես օգտագործել HTML-ը և XML-ը միասին | HTML-ի և XML-ի հիմնական տարբերությունների ամփոփում | Ինչպես սկսել աշխատել XML-ի հետ | Ինչպես սկսել աշխատել HTML-ի հետ';
        break;
      case 'fr':
          document.title = 'Quelle est la différence entre HTML et XML ? | Quelles sont les similitudes entre HTML et XML ? | Principales différences de syntaxe entre HTML et XML | Balises prédéfinies | Exemples HTML et XML | Balises auto-fermantes | Autres différences clés entre HTML et XML | Résumé succinct des principales différences entre HTML et XML ';
          break;
      case 'uz':
            document.title = "HTML va XML o'rtasidagi farq nima? | HTML va XML o'rtasida qanday o'xshashliklar bor? | HTML va XML o'rtasidagi asosiy sintaktik farqlar | HTML va XML misollari | O'z-o'zidan yopiladigan teglar | HTML va XML o'rtasidagi boshqa asosiy farqlar | HTML va XML-dan qachon foydalanish kerak | HTML va XML-dan qanday foydalanish kerak | HTML va XML o'rtasidagi asosiy farqlarning qisqacha mazmuni | XML bilan qanday ishlashni boshlash kerak ";
          break;
      case 'ar':
            document.title = 'ما الفرق بين HTML و XML؟ | ما هي الشبهات بين HTML و XML؟ | الفروق الرئيسية في الصياغة بين HTML و XML | أمثلة على HTML و XML | الفروقات الرئيسية الأخرى بين HTML و XML | متى يجب استخدام HTML مقابل XML | كيفية استخدام HTML و XML معًا | ملخص موجز للفروق الرئيسية بين HTML و XML | كيفية البدء في العمل مع XML | كيفية البدء في العمل مع HTML';
          break;
      case 'tj':
           document.title = 'Фарқи байни HTML ва XML чист? | Байни HTML ва XML чӣ монандиҳо мавҷуданд? | Истифода | Тафовутҳои асосии синтаксиси байни HTML ва XML | Тегҳои пешакӣ муайяншуда | Намунаҳои HTML ва XML | Дигар фарқиятҳои калидӣ байни HTML ва XML | Кай истифода бурдани HTML ва XML | Чӣ тавр HTML ва XML-ро якҷоя истифода бурдан мумкин аст | Хулосаи фарқиятҳои асосии байни HTML ва XML | Чӣ тавр бо XML оғоз кардан мумкин аст | Чӣ тавр бо HTML оғоз кардан мумкин аст';
          break;
      case 'jp':
          document.title = 'HTMLとXMLの違いは何ですか？ | HTMLとXMLの類似点は何ですか？ | HTMLとXMLの主な構文の違い | HTMLとXMLの例 | HTMLとXMLのその他の主な違い | HTMLとXMLの使い分け | HTMLとXMLの併用方法 | HTMLとXMLの主な違いの要約 | XMLでの作業の開始方法 | HTMLでの作業の開始方法 ';
          break;
          case 'pt':
          document.title = 'Qual é a diferença entre HTML e XML? | Quais são as semelhanças entre HTML e XML? | Diferenças Sintáticas Principais entre HTML e XML | Tags Predefinidas | Exemplos de HTML e XML | Tags Auto-fechadas | Outras Diferenças Principais entre HTML e XML | Quando Usar HTML vs XML | Como Usar HTML e XML Juntos | Resumo Breve das Principais Diferenças entre HTML e XML | Como Começar a Trabalhar com XML | Como Começar a Trabalhar com HTML';
          break;
      default:
        document.title = 'HTML and XML Examples';
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
          <button className='button1' onClick={() => handleLanguageChange('pt')}>Português</button>
          <button className='button1' onClick={() => handleLanguageChange('ar')}>عربى</button>
          <button className='button1' onClick={() => handleLanguageChange('jp')}>日本語</button>
          <button className='button1' onClick={() => handleLanguageChange('tj')}>Тоҷикӣ</button>
          <button className='button1' onClick={() => handleLanguageChange('uz')}>OʻZBEK</button>
      </div>
        {language === 'en' && (
          <div>
          
          <div className='ad-container'>  
          {/*  реклама  */}
        </div>
        
          <h2>What is the difference between HTML and XML?</h2>
  <p>
    HTML (HyperText Markup Language) is used for creating structured web pages that define the content of the page for display in a web browser. 
    XML (eXtensible Markup Language) is a universal markup language for storing and transmitting data without limitations on structure. 
    The main difference between HTML and XML is that HTML is intended for displaying content, while XML is for storing and transmitting data 
    without being tied to a specific structure.
  </p>

<h2>What are the similarities between HTML and XML?</h2>

 <p>
    Both HTML and XML are markup languages that use tags to define data structures. 
    Both can be processed by parsers and interpreted to display information, although their applications and purposes differ.
</p>

<h2>Syntax</h2>
 
 <p>
    The syntax of HTML and XML is similar in that they both use tags to define the document structure. 
    In HTML, many elements have predefined tags, whereas XML allows you to define your own tags. 
    HTML tags can be written using uppercase, lowercase, or a combination thereof, while XML tags are case-sensitive.
</p>

<h2>Usage</h2>

<p>
    HTML is used to create web pages, whereas XML is widely used for storing and transmitting data, 
    such as configuration files, product data, etc.
</p>

<h2>Primary Syntax Differences between HTML and XML</h2>

 <p>
    The main syntax differences are that HTML has many predefined tags and structure, 
    whereas XML allows you to define your own tags and structures. 
    Additionally, HTML often contains attributes that complement tags, 
    such as href in <code>&lt;a&gt;</code> for links, while XML uses tags without attributes to define data structures.
</p>

<h2>Predefined Tags</h2>

  <p>
    HTML has many predefined tags, such as <code>{'<h1>, <p>, <a>, <div>,'}</code>, that define various parts of a web page. 
    XML does not have predefined tags and relies on creating custom tags according to the required data structure.
  </p>
{/* Examples of HTML and XML */}

<h2>HTML and XML Examples</h2>

<code>
<pre>
    {`
    <!-- HTML Example -->
    <!DOCTYPE html>
    <html>
    <head>
        <title>HTML Example</title>
    </head>
    <body>
        <h1>Header</h1>
        <p>Paragraph with <a href="https://example.com">link</a>.</p>
    </body>
    </html>
   
   
    <?xml version="1.0" encoding="UTF-8"?>
<note>
    <to>Recipient</to>
    <from>Sender</from>
    <heading>Header</heading>
    <body>Text of the note.</body>
</note>
`}
</pre>
</code>
{/* Self-closing Tags */}
<h2>Self-closing Tags</h2>
<p>
    HTML sometimes uses self-closing tags, for example <code>&lt;img&gt;</code> or <code>&lt;br&gt;</code>, while in XML, each tag 
    must be explicitly closed or self-closed.
</p>
{/* Other Key Differences between HTML and XML */}

<h2>Other Key Differences between HTML and XML</h2>
<p>
    HTML is intended for presenting web page content, whereas XML is for storing and transmitting data. 
    HTML has many predefined elements and attributes, whereas XML requires explicitly defining custom elements and attributes.
</p>
{/* When to Use HTML vs XML */}

<h2>When to Use HTML vs XML</h2>
<p>
    Use HTML for creating web pages with content that needs to be displayed in a browser. 
    Use XML for structuring and storing data that doesn't necessarily need to be displayed on a web page.
</p>
{/* How to Use HTML and XML Together */}

<h2>How to Use HTML and XML Together</h2>
<p>
    HTML and XML can be used together, for example, to create web pages that load data from XML files for display. 
    Technologies such as AJAX or server-side programming languages are often used for this purpose.
</p>
{/* Brief Summary of Key Differences between HTML and XML */}

<h2>Brief Summary of Key Differences between HTML and XML</h2>
<p>
    HTML is for creating web pages and has predefined tags, whereas XML is used for 
    storing and transmitting structured data and allows defining custom tags and attributes.
</p>
{/* How to Start Working with XML */}

<h2>How to Start Working with XML</h2>
<p>
    To work with XML, you'll need a text editor and knowledge of basic syntax. 
    You can start by learning the structure of XML documents, their basic elements and attributes, 
    and methods for processing XML data using libraries or tools in your programming language.
</p>
{/* How to Start Working with HTML */}

<h2>How to Start Working with HTML</h2>
<p>
    To start working with HTML, you'll also need a text editor and knowledge of markup language basics. 
    You can learn basic HTML tags, their attributes, and the structure of a web page, 
    as well as methods for styling and interactivity using CSS and JavaScript.
</p>
        <b><p>* Text written with the help of a translator. If you find an error, please let us know *</p></b>
        <div className='ads-container'>  
      {/*  реклама  */}
    </div>  
        </div>
        )}
        {language === 'ru' && (
          <div>
            <RuHtml_7 />
          </div>
        )}
        {language === 'am' && (
          <div>
            <AmHtml_7 />
          </div>
        )}
        {language === 'fr' && (
          <div>
            <FrHtml_7 />
          </div>
        )}
        {language === 'tj' && (
          <div>
            <TjHtml_7 />
          </div>
        )}
        {language === 'uz' && (
          <div>
            <UzHtml_7 />
          </div>
        )}
        {language === 'pt' && (
          <div>
            <PtHtml_7 />
          </div>
        )}
        {language === 'ar' && (
          <div>
            <ArHtml_7 />
          </div>
        )}  {language === 'jp' && (
          <div>
            <JpHtml_7 />
          </div>
        )}
      </div>
    </Wrapper>
  );
}

export default Html_7;