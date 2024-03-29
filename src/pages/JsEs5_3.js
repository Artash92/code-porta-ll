import React,{useState, useEffect } from 'react';
import RuEs5_3 from '../language/RuEs5_3';
import AmEs5_3 from '../language/AmEs5_3';
import Wrapper from '../components/Wrapper';
import FrEs5_3 from '../language/FrEs5_3';
import ArJSEs5_3 from '../language/ArJSEs5_3';
import JpJSEs5_3 from '../language/JpJSEs5_3';
import EsJSEs5_3 from '../language/EsJSEs5_3';

 function JsEs5_3() {
 
  const [language, setLanguage] = useState('en'); // по умолчанию язык выбран английский

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
  };

 
  useEffect(() => {
    switch (language) {
      case 'en':
        document.title = 'JavaScript ES5-3 | Anonymous functions | Closures ';
        break;
      case 'ru':
        document.title = ' JavaScript ES5-3 |Анонимные функции | Замыкания ';
        break;
      case 'am':
        document.title = 'ՋավաՍկրիպտ ES5-3 | Անանուն ֆունկցիաներ | Փակումներ (Closures) ';
        break;
        case 'fr':
        document.title = 'Concept de fonction JavaScript: Création, Arguments, Portées, Expressions, Fonctions anonymes et Fermetures';
        break;
        case 'es':
        document.title = 'Concepto de Función en JavaScript: Creación, Argumentos, Ámbitos y Clausuras';
        break;
        case 'ar':
        document.title = 'JavaScript ES5: مفهوم الدوال وإنشاءها واستخدامها | تعرف على مفاهيم الدوال في JavaScript';
        break;
        case 'jp':
        document.title = 'JavaScript 関数の概念と作成 | 引数、スコープ、関数式、匿名関数、クロージャ';
        break;
      default:
        document.title = 'JavaScript ES5-3 | java script lesson 3';
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
          <button className='button1' onClick={() => handleLanguageChange('ar')}>عربى</button>
          <button className='button1' onClick={() => handleLanguageChange('jp')}>日本語</button>
       </div>
      {language === 'en' && (
        <div>
          <div className='ad-container'>
           {/*  реклама  */}
          </div>  

      <h3>Function Concept</h3>
      
     <p>A function is a block of code that can be defined and executed at a later time. It is used to perform a specific task, and it can be called from any part of the program where it is accessible. Functions make the code more organized, reusable and easier to understand.</p>
      
      <h3>Creating a Function</h3>
      
    <p>In JavaScript ES5, a function can be created using the function keyword, followed by the function name, and a set of parentheses. Inside the parentheses, we can define one or more parameters, and inside the curly braces, we define the code to be executed when the function is called.</p>
     
     <p><b>Example:</b></p>
      
  <code>
    <p><span className='blueviole'>function </span><span className='blue'>sum</span>(<span className='blue'>a</span>,<span className='blue'> b</span>) {'{'} </p>  

    <p><span className='blueviole'>return</span> a + b;</p>  

    <p>{'}'}</p>  
  </code>
      

<p><b>Function Arguments:</b></p>

<p>Function arguments are the values that are passed to a function when it is called. We can define one or more parameters inside the parentheses when creating a function. When the function is called, we pass the actual values as arguments.</p>

<p><b>Example:</b></p>
 
<code>
  <p><span className='blueviole'>function </span><span className='blue'>sum</span>(<span className='blue'>a</span>,<span className='blue'> b</span>) {'{'} </p>  

  <p><span className='blueviole'>return</span> a + b;</p>  

  <p>{'}'}</p>  

  <p><span className='blueviole'>var</span> <span className='blue'>result</span> = sum(<span className='blue'>5</span>, <span className='blue'>10</span>);</p>

  <p> <span className='darkgreen'>// Output: 15</span></p>
</code>

 <p><b>Variable scopes:</b></p>

<p>Variables can have different scopes depending on where they are declared. Here's an example of a variable declared inside a function, which is not accessible outside of that function:</p>
  
  <p><b>Example:</b></p>
  
<code>
  <p><span className='blueviole'>function</span> <span className='blue'>showMessage</span>() {'{'} </p>

  <p><span className='blueviole'>var</span> <span className='blue'>message</span> = <span className='red'>'Hello, World!'</span>;</p>

  <p>{"console.log(message);"}</p>

  <p>{"} "}</p>

  <p>showMessage(); <span className='darkgreen'>//Output:Hello,World!</span> </p>

  <p>{" console.log(message); "} <span className='darkgreen'>//Output:Uncaught ReferenceError: message is not defined</span></p>
</code>

<p><b>Function expressions:</b></p>

<p>A function expression is a function that is assigned to a variable. Here's an example:</p>
 
<code>
  <p><span className='blueviole'>var</span> <span className='blue'>multiply</span> = <span className='blueviole'>function</span>(<span className='blue'>a</span>, <span className='blue'>b</span>) {'{'}</p>

  <p><span className='blueviole'>return</span> a * b ;</p>

  <p>{'}'}</p>

  <p><span className='blueviole'>var</span> <span className='blueviole'>result</span> = multiply(<span className='blue'>3</span>, <span className='blue'>4</span>);</p>

  <p>{'console.log(result);'} <span className='darkgreen'>// Output: 12</span></p>
</code>

 
 
<p><b>Anonymous functions:</b></p>

<p>An anonymous function is a function without a name. Here's an example of an anonymous function that is immediately invoked:</p>
  
 <code>
  <p>{'('}<span className='blueviole'>function</span>() {'{'}</p>

  <p>{'console.log'}(<span className='red'>"Hello, World!"</span>);</p>

  <p>{'})();'}</p>
 </code>

<p><b>Closures</b></p>

<p>Closures are a feature of JavaScript that allows a function to access and manipulate variables that are outside of its own scope. In other words, a closure is formed when a function is defined inside another function and has access to the parent function's variables. Here's an example of a closure in JavaScript ES5:</p>
 
<code>
  <p><span className='blueviole'>function</span> <span className='blue'>outerFunction</span>() {'{'}</p>

  <p><span className='blueviole'>var</span> <span className='blue'>outerVariable</span> = <span className='red'>"I am outside!"</span>;</p>

  <p><span className='blueviole'>function</span> <span className='blue'>innerFunction</span>() {'{'}</p> 

  <p>{'console.log(outerVariable);'}</p>

  <p>{'}'}</p>

  <p><span className='blueviole'>return </span>innerFunction;</p>

  <p>{'}'}</p>

  <p><span className='blueviole'>var</span> <span className='blue'>closureExample</span> = outerFunction();</p>

  <p>closureExample(); <span className='darkgreen'>// Output: "I am outside!"</span></p>
</code>
 
<p>In this example, the outerFunction defines a variable outerVariable and a function innerFunction that logs the value of outerVariable. The innerFunction is returned from outerFunction and assigned to the closureExample variable. When closureExample() is called, it logs the value of outerVariable, which is "I am outside!". This is possible because innerFunction has access to outerVariable through closure, even though outerVariable is not defined within innerFunction. This is just a simple example of closures in JavaScript ES5, but it demonstrates how powerful and useful they can be. Closures are often used to create private variables and methods in JavaScript, among other things.</p>

<b><p>* Text written with the help of a translator. If you find an error, please let us know *</p></b>
  <div className='ads-container'>  
  {/*  реклама  */}
</div>
 </div>
      )}
      {language === 'ru' && (
        <div>
          <RuEs5_3 />
        </div>
      )}
      {language === 'am' && (
        <div>
          <AmEs5_3 />
        </div>
      )}
       {language === 'fr' && (
        <div>
          <FrEs5_3 />
        </div>
      )}
       {language === 'ar' && (
        <div>
          <ArJSEs5_3 />
        </div>
      )}
       {language === 'jp' && (
        <div>
          <JpJSEs5_3 />
        </div>
      )}
      {language === 'es' && (
        <div>
          <EsJSEs5_3 />
        </div>
      )}
    </div>
    </Wrapper>
  )
}



export default JsEs5_3;