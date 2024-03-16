import React,{ useState, useEffect } from 'react';
import AmHtml_3 from '../language/AmHtml_3';
import RuHtml_3 from '../language/RuHtml_3';
import Wrapper from '../components/Wrapper';
import ElHtml_3 from '../language/ElHtml_3';
import DeHtml_3 from '../language/DeHtml_3';
import IdHtml_3 from '../language/IdHtml_3';
import JpHtml_3 from '../language/JpHtml_3';
import KyHtml_3 from '../language/KyHtml_3';
import EsHtml_3 from '../language/EsHtml_3';
import FrHtml_3 from '../language/FrHtml_3';
import InHtml_3 from '../language/InHtml_3';
import PtHtml_3 from '../language/PtHtml_3';

function Html_3() {
  const [language, setLanguage] = useState('en'); 

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
  };
 
  useEffect(() => {
    switch (language) {
      case 'en':
        document.title = 'Understanding Meta Tags in HTML - A Guide for Beginners | How to Use Colors in HTML: A Beginners Guide | CSS Basics for Beginners: An Introduction to Cascading Style Sheets ';
        break;
      case 'ru':
        document.title = 'Понимание метатегов в HTML - Руководство для начинающих | Как использовать цвета в HTML: руководство для начинающих | Основы CSS для начинающих: Введение в Cascading Style Sheets ';
        break;
      case 'am':
        document.title = 'HTML-ում մետա թեգերի հասկանալը - Սկսնակների ուղեցույց | Ինչպես օգտագործել գույները HTML-ում. Սկսնակների ուղեցույց | CSS հիմունքներ սկսնակների համար. ներածություն կասկադային ոճերի թերթիկներին ';
        break;
        case 'el':
          document.title = 'Κατανόηση μετα-ετικέτες σε HTML - Οδηγός για αρχάριους | .charset: Το χαρακτηριστικό charset καθορίζει την κωδικοποίηση χαρακτήρων για το έγγραφο HTML. Είναι σημαντικό να βεβαιωθείτε ότι η κωδικοποίηση έχει ρυθμιστεί σωστά, ώστε οι ειδικοί χαρακτήρες να εμφανίζονται σωστά. | Τρόπος χρήσης χρωμάτων σε HTML: οδηγός για αρχάριους. | Βασικά στοιχεία CSS για αρχάριους: Εισαγωγή στα Cascading Style Sheets | Η CSS (Cascading Style Sheets) είναι μια γλώσσα που χρησιμοποιείται για το στυλ εγγράφων HTML. Το CSS σάς επιτρέπει να αλλάζετε χρώματα, γραμματοσειρές, διάταξη και άλλες πτυχές της ιστοσελίδας σας. Λειτουργεί επιλέγοντας στοιχεία HTML και εφαρμόζοντας στυλ σε αυτά.';
          break;
          case 'de':
          document.title = 'Verständnis von Meta-Tags in HTML - Ein Leitfaden für Anfänger | Wie man Farben in HTML verwendet: Ein Leitfaden für Anfänger | Grundlagen von CSS für Anfänger: Eine Einführung in Cascading Style Sheets';
          break;
          case 'pt':
          document.title = 'Compreensão das Meta Tags em HTML - Um Guia para Iniciantes | Como Usar Cores em HTML: Um Guia para Iniciantes. | Princípios Básicos de CSS para Iniciantes: Uma Introdução às Folhas de Estilo em Cascata ';
          break;
          case 'fr':
          document.title = 'Comprendre les balises meta en HTML - Un guide pour les débutants | Comment utiliser les couleurs en HTML : Guide pour débutants. | Principes de base de CSS pour débutants : Une introduction aux feuilles de style en cascade';
          break;
          case 'es':
          document.title = 'Entendiendo las Etiquetas Meta en HTML - Una Guía para Principiantes | Cómo Usar Colores en HTML: Una Guía para Principiantes | Conceptos Básicos de CSS para Principiantes: Una Introducción a las Hojas de Estilo en ';
          break;
          case 'id':
          document.title = 'Mengerti Meta Tag dalam HTML - Panduan untuk Pemula | Cara Menggunakan Warna dalam HTML: Panduan untuk Pemula. | Dasar CSS untuk Pemula: Pengenalan terhadap Cascading Style Sheets ';
          break;
          case 'jp':
          document.title = 'HTMLのメタタグの理解 - 初心者向けガイド | HTMLで色の使用方法：初心者向けガイド | 初心者向けCSS基礎：カスケーディングスタイルシートの紹介';
          break;
          case 'in':
          document.title = 'HTML में मेटा टैग को समझना - नवादेश के लिए एक मार्गदर्शिका | HTML में रंग का उपयोग कैसे करें: एक शुरुआती गाइड। | शुरुआती लिए सीएसएस मूल अवधारणाएँ: कैस्केडिंग स्टाइल शीट्स का परिचय';
          break;
          case 'ky':
          document.title = 'HTML дагы Мета тегтерди түшүнүү - Башкычтарга көргөзмө | HTML дегенде түсдөрдү колдонуу: Башкычтарга көргөзмө | Башкычтарга CSS: CSS жана HTML документтерди стилизациялоо үчүн кызмат кылуунун башкычтары';
          break;
      default:
        document.title = 'HTML/CSS';
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

     
      <h1>Understanding Meta Tags in HTML - A Guide for Beginners</h1>

    <p>1. <b>charset:</b> The charset attribute specifies the character encoding for the HTML document. It is important to ensure that the encoding is set correctly to ensure that special characters are displayed correctly.</p>

    <p>Example:</p>

    <code><p>{'<'}<span className='green'>meta</span> <span className='blue'>charset</span>=<span className='blue1'>"UTF-8"</span>{'>'}</p></code>

    <p>2. <b>name:</b> The name attribute is used to define the type of metadata being provided, such as keywords, description, or author.</p>

    <p>Example:</p>

    <code><p>{'<'}<span className='green'>meta</span> <span className='blue'>name</span>=<span className='blue1'>"description"</span> <span className='blue'>content</span>=<span className='blue1'>"This is a description of my web page."</span>{'>'}</p></code>

    <p>3. <b>content:</b> The content attribute is used to specify the value of the metadata being provided.</p>

    <p>Example:</p>

    <code><p>{'<'}<span className='green'>meta</span> <span className='blue'>name</span>=<span className='blue1'>"keywords"</span> <span className='blue'>content</span>=<span className='blue1'>"HTML, CSS, JavaScript"</span>{'>'}</p></code>

    <p>4. <b>http-equiv:</b> The http-equiv attribute is used to define an HTTP header for the HTML document, such as refresh or content-type</p>

    <p>Example:</p>

    <code><p>{'<'}<span className='green'>meta</span> <span className='blue'>http-equiv</span>=<span className='blue1'>"refresh"</span> <span className='blue'>content</span>=<span className='blue1'>"5"</span>{'>'}</p></code>
  
    <p>5. <b>viewport:</b> The viewport attribute is used to control the layout and scaling of a web page on different devices, such as mobile phones or tablets.</p>

    <p>Example:</p>

    <code><p>{'<'}<span className='green'>meta</span> <span className='blue'>name</span>=<span className='blue1'>"viewport"</span> <span className='blue'>content</span>=<span className='blue1'>"width=device-width, initial-scale=1.0"</span>{'>'}</p></code>

    <h2>How to Use Colors in HTML: A Beginner's Guide.</h2>

    <p>Colors in HTML can be defined using a variety of methods, including color names, hexadecimal values, RGB values, and HSL values.</p>

    <b>1. Color Names:</b>

    <p>HTML provides a set of predefined color names that can be used to specify the color of an element. Some examples of color names include "red", "green", "blue", "yellow", "purple", and "black".</p>

    
    <b>2. Hexadecimal Values:</b>

    <p>A hexadecimal color value is a six-digit code that represents a color. The first two digits represent the amount of red in the color, the next two digits represent the amount of green in the color, and the last two digits represent the amount of blue in the color. For example, #FF0000 represents pure red, #00FF00 represents pure green, and #0000FF represents pure blue.</p>

     <b>3. RGB Values:</b>

     <p>An RGB color value is a set of three numbers that represent the amount of red, green, and blue in a color. Each value ranges from 0 to 255. For example, rgb(255, 0, 0) represents pure red, rgb(0, 255, 0) represents pure green, and rgb(0, 0, 255) represents pure blue.</p>

    <b>4. HSL Values:</b>

    <p>An HSL color value is a set of three numbers that represent the hue, saturation, and lightness of a color. Hue is a degree on the color wheel (from 0 to 360), saturation is a percentage value (from 0% to 100%), and lightness is also a percentage value (from 0% to 100%). For example, hsl(0, 100%, 50%) represents pure red, hsl(120, 100%, 50%) represents pure green, and hsl(240, 100%, 50%) represents pure blue.</p>

    <h2>CSS Basics for Beginners: An Introduction to Cascading Style Sheets</h2>

    <p>CSS stands for Cascading Style Sheets and it is a language used to style HTML documents. CSS allows you to change the colors, fonts, layout, and other aspects of your webpage. It works by selecting HTML elements and applying styles to them.</p>

    <p>CSS styles are created using selectors, properties, and values. Selectors target specific HTML elements and can be used to apply styles to multiple elements at once. Properties define what styles you want to apply and can include things like font size, color, and padding. Values specify the specific settings for the property, such as a specific color or size.</p>

    <p>To link a CSS file to an HTML document, you can use the {'<link>'} tag in the {'<head>'} section of your HTML document.</p>

    <p>Here's an example of how to link a CSS file called "styles.css" to your HTML document:</p>

    <code>
      <p>{'<'}!<span className='blue'>DOCTYPE</span> <span className='blue1'>html</span>{'>'}</p>

      <p>{'<'}<span className='green'>html</span>{'>'}</p> 

      <p>{'<'}<span className='green'>head</span>{'>'}</p>

      <p>&nbsp;{'<'}<span className='green'>link</span> <span className='blue'>rel</span>=<span className='blue1'>"stylesheet"</span> <span className='blue'>type</span>=<span className='blue1'>"text/css"</span> <span className='blue'>href</span>=<span className='blue1'>"styles.css"</span>{'>'}</p>

      <p>{'</'}<span className='green'>head</span>{'>'}</p>

      <p>{'<'}<span className='green'>body</span>{'>'}</p>

      <p>&nbsp;{'<!-- your HTML content here -->'}</p>

      <p>{'</'}<span className='green'>body</span>{'>'}</p>

      <p>{'</'}<span className='green'>html</span>{'>'}</p>
    </code>


    
    <p>Here's an example of CSS code:</p>

  <code>
    <p>{'h1 {'}</p>

    <p><span className='blue'>color</span>: <span className='blue1'>red</span>;</p>

    <p><span className='blue'>font-size</span>: <span className='blue1'>36px</span>; </p>

    <p><span className='blue'>text-align</span>: <span className='blue1'>center</span>; </p>

    <p>{'}'}</p>

    <p>{'p {'}</p>

    <p><span className='blue'>color</span>: <span className='blue1'>blue</span>; </p>

    <p> <span className='blue'>font-size</span>: <span className='blue1'>16px</span>;</p>

    <p><span className='blue'>line-height</span>: <span className='blue1'>1.5</span>;</p>

    <p>{'}'}</p>
   </code>

    <p>In this code, we have two selectors <b>(h1 and p)</b> and several properties and values applied to each. The <b>h1</b> selector applies a red color, 36px font size, and centered text alignment to all <b>h1</b> elements on the page. The <b>p</b> selector applies a blue color, 16px font size, and 1.5 line height to all <b>p</b> elements on the page.</p>

    <p>CSS can be applied to HTML documents in several ways, including in-line, embedded, and external stylesheets. In-line styles are applied directly to the HTML element using the <b>style</b> attribute. Embedded styles are placed in the <b>head</b> section of the HTML document using the style tag. External stylesheets are stored in separate CSS files and linked to the HTML document using the <b>link</b> tag.</p>
   

    <b><p>* Text written with the help of a translator. If you find an error, please let us know *</p></b>
    <div className='ads-container'>  
  {/*  реклама  */}
</div>
 </div>
      )}
      {language === 'ru' && (
        <div>
          <RuHtml_3 />
        </div>
      )}
      {language === 'am' && (
        <div>
          <AmHtml_3 />
        </div>
      )}
       {language === 'el' && (
        <div>
          <ElHtml_3 />
        </div>
      )}
       {language === 'de' && (
        <div>
          <DeHtml_3 />
        </div>
      )} 
       {language === 'id' && (
        <div>
          <IdHtml_3 />
        </div>
      )}
      {language === 'jp' && (
        <div>
          <JpHtml_3 />
        </div>
      )}
        {language === 'ky' && (
        <div>
          <KyHtml_3 />
        </div>
      )}
      {language === 'es' && (
        <div>
          <EsHtml_3 />
        </div>
      )}
      {language === 'fr' && (
        <div>
          <FrHtml_3 />
        </div>
      )}
       {language === 'in' && (
        <div>
          <InHtml_3 />
        </div>
      )} 
      {language === 'pt' && (
        <div>
          <PtHtml_3 />
        </div>
      )}      
    </div>
    </Wrapper>
  )
}

export default Html_3;