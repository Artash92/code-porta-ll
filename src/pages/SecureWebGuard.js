import React, { useState, useEffect } from 'react';
import Wrapper from '../components/Wrapper';
import AmSecureWebGuard from '../language/AmSecureWebGuard';
import RuSecureWebGuard from '../language/RuSecureWebGuard';
import FrSecureWebGuard from '../language/FrSecureWebGuard';
import DaSecureWebGuard from '../language/DaSecureWebGuard';


function JsEs5_1() {
   
  const [language, setLanguage] = useState('en'); 

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
  };

  useEffect(() => {
    switch (language) {
      case 'en':
        document.title = 'What is Cross-Site Scripting (XSS) in React.js? | Input Validation in React | Output Encoding in React | Content Security Policy (CSP) with React | React Context for State Management | React Helmet for Setting HTTP Headers | React Router Security | Regular Updates and Security Audits | Additional Measures to Mitigate XSS in React.js | Use React Fragments | DOMPurify for Sanitization | React Props for Data Binding ';
        break;
      case 'ru':
        document.title = 'Что такое межсайтовый скриптинг (XSS) в React.js? | Валидация ввода в React | Кодирование вывода в React | Контекст React для управления состоянием | React Helmet для установки HTTP-заголовков | Регулярные обновления и проверки безопасности | Дополнительные меры по смягчению XSS в React.js | Используйте React Fragments | DOMPurify для санитарии | React Props для привязки данных | Client-Side XSS Protection Headers | Меры безопасности против XSS, включая Eval и Prompt | Внедрение рекомендаций, связанных с eval и prompt ';
        break;
      case 'am':
        document.title = 'Ի՞նչ է միջկայքային սկրիպտավորումը (XSS) React.js-ում: | Տվյալների վավերացում(վալիդացիա) React-ում. | Կոդավորման ելքը React-ում. | Պարբերական թարմացումներ և անվտանգության ստուգումներ | React Props տվյալների կապման համար. | Անվտանգության միջոցներ XSS-ի դեմ, ներառյալ Eval-ը և Prompt-ը. | Անվտանգության կանոնավոր ստուգումներ ';
        break;
        case 'fr':
        document.title = "Qu'est-ce que le Cross-Site Scripting (XSS) en React.js ? | Validation des entrées en React | Mises à jour régulières et audits de sécurité | En-têtes de protection contre XSS côté client | L'intégration de directives spécifiques à eval et prompt dans le contexte plus large de la sécurité XSS renforce votre capacité à créer une application React.js plus sécurisée. ";
        break;
      default:
        document.title = 'Your Default Title';
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
          <button className='button1' onClick={() => handleLanguageChange('da')}>Dansk</button>
        </div>
 {language === 'en' && (
       <div>
         <div className='ad-container'>  
          {/*  реклама  */}
        </div> 
      
      <h2>What is Cross-Site Scripting (XSS) in React.js?</h2>

      <p>Cross-Site Scripting (XSS) remains a critical security concern, even in modern frontend 
      frameworks like React.js. XSS occurs when attackers inject malicious scripts into a website, 
      exploiting the trust a user has for that site. In React.js, this can happen when user inputs are not properly validated or sanitized.</p>

      <p>How to Secure Your React.js Application:</p>

      <h4>Input Validation in React:</h4>

     <p>Always validate and sanitize user inputs before rendering them in React components.</p>

     <p>Use libraries like <b>validator</b> to assist with input validation.</p>

     <h4>Output Encoding in React:</h4>

     <p>Employ React's built-in mechanisms for output encoding, such as <b>{'{}'}</b> for variable interpolation.</p>

     <p>Be cautious with dangerouslySetInnerHTML{';'} only use it with sanitized content.</p>
 
     <h4>Content Security Policy (CSP) with React:</h4>

     <p>Implement Content Security Policy headers to control which scripts can be executed on your React.js app.</p>

     <p>Configure the CSP to allow only trusted sources for scripts.</p>

     <h4>React Context for State Management:</h4>
    
    <p>Use React Context and state management to control sensitive data flow and access within your components.</p>

    <h4>React Helmet for Setting HTTP Headers:</h4>

    <p>Leverage React Helmet to set HTTP headers, including Content Security Policy, enhancing the security posture of your React.js application.</p>

    <h4>React Router Security:</h4>

    <p>Ensure secure routing by validating and sanitizing parameters passed via React Router.</p>

    <h4>Regular Updates and Security Audits:</h4>

    <p>Keep your React.js version and dependencies up-to-date to benefit from security patches.</p>

    <p>Conduct regular security audits to identify and address potential vulnerabilities.</p>

    <p>By integrating these practices into your React.js development workflow, you can build resilient and secure frontend applications, mitigating the risk of XSS attacks and fostering a safer learning environment for frontend developers.</p>

    <h2>Additional Measures to Mitigate XSS in React.js:</h2>

    <h4>Use React Fragments:</h4>

    <p>When rendering multiple elements, consider using React Fragments <b>{'(<React.Fragment>)'}</b> instead of a wrapper div. This helps to avoid unnecessary divs in the DOM that could be targeted by an attacker.</p>

    <h4>DOMPurify for Sanitization:</h4>

    <p>Utilize a library like DOMPurify to further sanitize user-generated content. DOMPurify helps to ensure that any dynamic content inserted into the DOM is properly sanitized and free from malicious code.</p>

<code>
  <p><span className='red'>import </span>DOMPurify <span className='red'>from</span> <span className='blue'>'dompurify'</span>;</p>

  <p><span className='red'>function</span> <span className='blueviole'>SanitizedHTML</span>{'({'}<span className='blue'>content</span>{'})'} {'{'}</p>

  <p>&nbsp;<span className='red'>return</span> {'<'}<span className='green'>div</span> <span className='blue1'>{'dangerouslySetInnerHTML'}</span>={'{{'}<span className='blue1'> __html: DOMPurify.sanitize</span>{'('}<span className='blue'>content</span>{')'} {'}} />;'}</p>
</code>

<h4>React Props for Data Binding:</h4>

<p>Prefer using React props to bind dynamic data instead of directly embedding it in the JSX. This helps ensure that data is properly escaped and prevents unintentional script execution.</p>

<code>
  <p><span className='red'>function</span> <span className='blueviole'>DynamicContent</span>{'({'} <span className='blue'>data</span> {'})'} {'{'}</p>

  <p>&nbsp;<span className='red'>return</span> {'<'}<span className='green'>div</span>{'>'}{'{'}<span className='blue'>data</span>{'}'}{'</'}<span className='green'>div</span>{'>'}{'; // Safer than using dangerouslySetInnerHTML'}</p>

  <p>{'}'}</p>
</code>

<h4>Client-Side XSS Protection Headers:</h4>

<p>Implement client-side XSS protection headers in addition to server-side Content Security Policy. This adds an extra layer of defense by instructing the browser to block or sanitize malicious scripts.</p>

<code>
  <p>{'<'}<span className='green'>Helmet</span>{'>'}</p>

  <p>&nbsp;{'<'}<span className='blue'>meta</span> <span className='blueviole'>http-equiv</span>= <span className='blue1'>"X-XSS-Protection"</span> <span className='blueviole'>content</span>= <span className='blue1'>"1; mode=block"</span> {'/>'}</p>

  <p>{'</'}<span className='green'>Helmet</span>{'>'}</p>
</code>

<p>Instill a strong sense of security awareness within your development practices. Ensure that everyone is educated about the risks associated with XSS and the critical importance of implementing secure coding practices.</p>

<p>Always remember, security is a multifaceted element in development, and it's essential to adopt a holistic approach. By incorporating these measures, conducting regular security audits, and staying informed about emerging threats, you contribute to a more robust and secure React.js application</p>


<h4>Security Measures Against XSS, Including Eval and Prompt:</h4>

<p>Mitigating <b>eval</b> Risks in XSS Prevention:</p>

<h5>Minimize Usage:</h5>

<p><b>Guideline:</b>Restrict the use of <b>eval</b> as much as possible within your codebase.</p>

<p><b>Rationale:</b> <b>eval</b> introduces dynamic code execution and is a common target for XSS attacks. Reducing its usage minimizes potential attack vectors.</p>

<h5>Input Sanitization:</h5>

<p><b>Guideline:</b> If <b>eval</b> is unavoidable, rigorously sanitize and validate user inputs before invoking it.</p>

<p><b>Rationale:</b> Proper input sanitization mitigates the risk of injecting malicious code through user inputs, a common avenue for XSS exploitation.</p>

<p>Example of a React.js web page with a comment form where user input is not using <b>eval</b> and is sanitized:</p>

<code>
  <p><span className='red'>import </span>React , {'{ useState }'} <span className='red'>from</span> <span className='blue'>'react'</span>;</p>

  <p><span className='red'>import </span>DOMPurify <span className='red'>from</span> <span className='blue'>'dompurify'</span>;</p>
  
  <p><span className='red'>const</span> <span className='blueviole'>CommentForm</span> {'= () => {'}</p>

  <p>&nbsp;&nbsp;<span className='red'>const</span> {'[comment, setComment] ='} <span className='blueviole'>useState</span>{'('}<span className='blue1'>{"''"}</span>{');'}</p>

  <p>&nbsp;&nbsp;<span className='red'>const</span> {'[comments, setComments] ='} <span className='blueviole'>useState</span>{'([]);'}</p>

  <p>&nbsp;&nbsp;<span className='red'>const</span> <span className='blueviole'>handleCommentChange</span> {'= ('}<span className='blue1'>event</span>{') => {'}</p>

  <p>&nbsp;&nbsp;&nbsp;&nbsp;<span className='blueviole'>setComment</span>{'(event.target.'}<span className='blue'>value</span>{');'}</p>

  <p>&nbsp;&nbsp;{'};'}</p>

  <p><span className='red'>const</span> <span className='blueviole'>submitComment</span> {'= () => {'}</p>

  <p>&nbsp;&nbsp;{'// Sanitizing the entered comment before adding it to the state'}</p>

  <p>&nbsp;&nbsp;<span className='red'>const</span> {'sanitizedComment = DOMPurify.'}<span className='blue'>sanitize</span>{'('}<span className='blue1'>comment</span>{');'}</p>

  <p>&nbsp;&nbsp;{'// Adding the comment to the state'}</p>

  <p>&nbsp;&nbsp;<span className='blueviole'>setComments</span>{'([...comments, sanitizedComment]);'}</p>

  <p>&nbsp;&nbsp;{'// Clearing the input field'}</p>

  <p>&nbsp;&nbsp;<span className='blueviole'>setComment</span>{'('}<span className='blue1'>{"''"}</span>{");"}</p>
  
  <p>{'};'}</p>

  <p><span className='red'>return</span> {'('}</p>

  <p>&nbsp;&nbsp;{'<'}<span className='green'>div</span>{'>'}</p>

  <p>&nbsp;&nbsp;&nbsp;{'<'}<span className='green'>h2</span>{'>'}Comments{'</'}<span className='green'>h2</span>{'>'}</p>

  <p>&nbsp;&nbsp;&nbsp;{'<'}<span className='green'>ul</span>{'>'}</p>

  <p>&nbsp;&nbsp;&nbsp;&nbsp;{'{comments.'}<span className='blue'>map</span>{'((c, index) => ('}</p>

  <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'<'}<span className='green'>li</span> <span className='blue'>key</span>{'={index}>{c}</'}<span className='green'>li</span>{'>'}</p>

  <p>&nbsp;&nbsp;&nbsp;&nbsp;{'))}'}</p>

  <p>&nbsp;&nbsp;&nbsp;{'</'}<span className='green'>ul</span>{'>'}</p>

  <p>&nbsp;&nbsp;&nbsp;{'<'}<span className='green'>textarea</span> <span className='blue'>value</span>{'={comment}'} <span className='blue'>onChange</span>{'={handleCommentChange}'} <span className='blue'>placeholder</span>{'='}<span className='blue1'>"Enter your comment"</span>{'/>'}</p>

  <p>&nbsp;&nbsp;&nbsp;{'<'}<span className='green'>button</span> <span className='blue'>onClick</span>{'={submitComment}>Submit</'}<span className='green'>button</span>{'>'}</p>
  
  <p>&nbsp;&nbsp;{'</'}<span className='green'>div</span>{'>'}</p>

  <p>&nbsp;{');'}</p>

  <p>{'};'}</p>

  <p><span className='red'>export default</span> CommentForm;</p>  
</code>

<p>Ensuring Secure Usage of <b>prompt</b>:</p>

<h5>Context-Aware Prompts:</h5>

<p><b>Guideline:</b> Ensure prompts provide context, informing users about the purpose and origin of the prompt.</p>

<p><b>Rationale:</b> Context-aware prompts help users make informed decisions, reducing the likelihood of falling victim to social engineering or malicious prompts.</p>

<h5>Input Validation:</h5>

<p><b>Guideline:</b> Sanitize and validate user inputs received through prompts to prevent injection attacks</p>

<p><b>Rationale:</b> Unchecked user inputs can lead to script injection, making it essential to validate and sanitize before utilizing them in dynamic code execution.</p>

<h5>Securing User Interactions with Context-Aware Prompts: A React.js Example</h5>

<code>
  <p><span className='red'>import </span>React  <span className='red'>from</span> <span className='blue'>'react'</span>;</p>

  <p><span className='red'>const</span> {'SecurePromptUsage = () => {'}</p>

  <p>&nbsp;&nbsp;<span className='red'>const</span> {'showSecurePrompt = () => {'}</p>

  <p>&nbsp;&nbsp;&nbsp;<span>{'// Context-Aware Prompts'}</span></p>

  <p><span className='red'>const</span> {'promptMessage ='} <span className='blue1'>'Do you want to proceed with this secure action?'</span>;</p>

  <p><span className='red'>const</span> {'promptContext ='} <span className='blue1'>'This action is related to updating your account settings.'</span>;</p>

  <p>&nbsp;&nbsp;&nbsp;{'// Displaying a context-aware prompt'}</p>

  <p><span className='red'>const</span> {'userDecision ='} <span className='blueviole'>prompt</span>{'(`${promptContext}\n\n${promptMessage}`);'}</p>
  
  <p>&nbsp;&nbsp;&nbsp;{'// Input Validation'}</p>

  <p>&nbsp;&nbsp;&nbsp;<span className='red'>if</span> {'(userDecision !=='} <span className='red'>null</span>{') {'}</p>
  
  <p>&nbsp;&nbsp;&nbsp;&nbsp;{'// Sanitizing and validating user input received through the prompt'}</p>

  <p>&nbsp;&nbsp;&nbsp;&nbsp;<span className='red'>const</span> {'sanitizedUserDecision ='} <span className='blueviole'>sanitizeAndValidateInput</span>{'(userDecision);'}</p>

  <p>&nbsp;&nbsp;&nbsp;&nbsp;{'// Proceeding with the action based on the validated input'}</p>

  <p>&nbsp;&nbsp;&nbsp;&nbsp;<span className='red'>if</span> {'(sanitizedUserDecision ==='} <span className='blue1'>{"'yes'"}</span>{') {'}</p>

  <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'// Perform the secure action'}</p>

  <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'console.'}<span className='blue'>log</span>{'('}<span className='blue1'>'Secure action performed successfully!'</span>{');'}</p>

  <p>&nbsp;&nbsp;&nbsp;&nbsp;{'}'} <span className='red'>else</span> {'{'}</p>

  <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'// User decided not to proceed'}</p>

  <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'console.'}<span className='blue'>log</span>{'('}<span className='blue1'>'Action canceled by the user.'</span>{');'}</p>
  
  <p>&nbsp;&nbsp;&nbsp;&nbsp;{'}'}</p>

  <p>&nbsp;&nbsp;{'}'}</p>

  <p>{'};'}</p>

  <p><span className='red'>const</span> {'sanitizeAndValidateInput = (input) => {'}</p>

  <p>&nbsp;&nbsp;{'// Perform input sanitization and validation as needed'}</p>

  <p>&nbsp;&nbsp;{"// For simplicity, let's assume a basic validation for 'yes' or 'no'"}</p>

  <p>&nbsp;&nbsp;<span className='red'>const</span> {'sanitizedInput = input.'}<span className='blue'>toLowerCase</span>{'().'}<span className='blue'>trim</span>{'();'}</p>

  <p>&nbsp;&nbsp;<span className='red'>return</span> {'sanitizedInput ==='} <span className='blue1'>'yes'</span>{' || sanitizedInput ==='} <span className='blue1'>'no'</span>{' ? sanitizedInput :'} <span className='blue1'>{"'no'"}</span>{';'}</p>
  
  <p>&nbsp;{'};'}</p>

  <p>&nbsp;<span className='red'>return</span> {'('}</p>

  <p>&nbsp;&nbsp;{'<'}<span className='green'>div</span>{'>'}</p>

  <p>&nbsp;&nbsp;&nbsp;{'<'}<span className='green'>h2</span>{'>'}Secure Prompt Usage Example{'</'}<span className='green'>h2</span>{'>'}</p>
  
  <p>&nbsp;&nbsp;&nbsp;{'<'}<span className='green'>button</span>&nbsp;<span className='blue'>onClick</span>{'={showSecurePrompt}>'}Show Secure Prompt{'</'}<span className='green'>button</span>{'>'}</p>
  
  <p>&nbsp;&nbsp;{'</'}<span className='green'>div</span>{'>'}</p>

  <p>&nbsp;{');'}</p>

  <p>{'};'}</p>
  
  <p>&nbsp;<span className='red'>export default</span>&nbsp;SecurePromptUsage;</p>  
</code>

<p>In this example, the <b>showSecurePrompt</b> function demonstrates the secure usage of a prompt:</p>

<p><b>Context-Aware Prompts:</b> The prompt message includes context information, helping users understand the purpose and origin of the prompt.</p>

<p><b>Input Validation:</b> The user's input received through the prompt is sanitized and validated to prevent injection attacks. In this case, a basic validation is performed, assuming the user can only enter 'yes' or 'no'.</p>

<h5>Overall XSS Security Best Practices:</h5>

<p><b>Content Security Policy (CSP):</b></p>

<p><b>Guideline:</b> Implement a robust Content Security Policy to control which scripts can be executed on your React.js app.</p>

<p><b>Rationale:</b> CSP acts as a critical defense layer, restricting the execution of unauthorized scripts, including those injected through XSS vulnerabilities.</p>

<h5>Regular Security Audits:</h5>

<p><b>Guideline:</b> Conduct regular security audits, specifically assessing the handling of dynamic code execution and user inputs.</p>

<p><b>Rationale:</b> Ongoing security audits identify and address potential XSS vulnerabilities, ensuring the continual resilience of your application.</p>

<p>Incorporating guidelines specific to <b>eval</b> and <b>prompt</b> within the broader context of XSS security enhances your ability to create a more secure React.js application. By addressing these potential risk factors, you contribute to a comprehensive defense strategy against XSS attacks.</p>

<b><p>* Text written with the help of a translator. If you find an error, please let us know *</p></b>
    
    <div className='ads-container'>  
        {/*  реклама  */}
    </div>
        </div>
     )}
      {language === 'ru' && (
        <div>
          <RuSecureWebGuard />
        </div>
      )}
      {language === 'am' && (
        <div>
          <AmSecureWebGuard />
        </div>
      )}
       {language === 'fr' && (
        <div>
          <FrSecureWebGuard />
        </div>
      )}
      {language === 'da' && (
        <div>
          <DaSecureWebGuard />
        </div>
      )}
    </div>
    </Wrapper>
  )
}




export default   JsEs5_1;