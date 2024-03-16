import React from 'react';

function ItReact_2() {
  return (
    <div>
       <div className='ad-container'>  
          {/*  реклама  */}
        </div>
        
      <h1>JSX</h1>

<p>JSX è un'estensione di sintassi per JavaScript che ti permette di scrivere codice simile all'HTML nei tuoi file JavaScript. Viene ampiamente utilizzato in React per definire la struttura e il layout dei componenti UI.</p>    

  <p>Ecco un esempio di come funziona JSX:</p>

<code>
 <p><span className='red'>import</span> React <span className='red'>from</span> <span className='blue1'>'react'</span>; </p>

 <p><span className='red'>function</span> <span className='blueviole'>MyComponent</span>() {'{'}</p>

 <p><span className='red'>return</span> {'('}</p>

 <p>{'<'}<span className='green'>div</span>{'>'}</p>

 <p>&nbsp;{'<'}<span className='green'>h1</span>{'>'}Ciao, mondo!{'</'}<span className='green'>h1</span>{'>'} </p>

 <p>&nbsp;{'<'}<span className='green'>p</span>{'>'}Questo è un semplice esempio di JSX.{'</'}<span className='green'>p</span>{'>'} </p>

 <p>{'</'}<span className='green'>div</span>{'>'}</p>

 <p>&nbsp;{'); '}</p>

 <p>{'}'}</p>

<p><span className='red'>export default</span> MyComponent;</p> 
</code>

  <p>In questo esempio, stiamo definendo un semplice componente React usando JSX. Il componente rende un elemento <b>div</b> che contiene un elemento <b>h1 e un p</b>. Nota che il codice simile all'HTML è racchiuso tra parentesi ed è definito usando la sintassi JSX.</p>

  <p>JSX ti consente di combinare facilmente il codice simile all'HTML con la logica JavaScript. Ad esempio, puoi utilizzare variabili ed espressioni JavaScript all'interno del tuo codice JSX:</p>
  
<code>
 <p><span className='red'>import</span> React <span className='red'>from</span> <span className='blue1'>'react'</span>;</p>

 <p><span className='red'>function</span> <span className='blueviole'>MyComponent</span>() {'{'}</p>

<p><span className='red'>const</span> name = <span className='blue1'>'John'</span>;  </p>

<p><span className='red'>return</span> {'('}</p>

<p>{'<'}<span className='green'>div</span>{'>'} </p>

<p>&nbsp;{'<'}<span className='green'>h1</span>{'>'} Ciao,{'{'}name{'}'}!{'</'}<span className='green'>h1</span>{'>'} </p>

<p>&nbsp;{'<'}<span className='green'>p</span>{'>'}Questo è un semplice esempio di JSX.{'</'}<span className='green'>p</span>{'>'} </p>

<p>{'</'}<span className='green'>div</span>{'>'} </p>

<p>&nbsp;{");"}</p>

<p>{" } "}</p>

<p><span className='red'>export default</span> MyComponent;</p> 
</code>

<p>In questo esempio, stiamo utilizzando una variabile JavaScript <b>(name)</b> nel nostro codice JSX per renderizzare dinamicamente un saluto personalizzato.</p>

    <p>JSX non è richiesto per lo sviluppo di React, ma è altamente raccomandato poiché rende molto più facile scrivere e gestire componenti UI complessi. Quando scrivi codice JSX, viene trasposto in codice JavaScript regolare che può essere eseguito dal browser.</p>
    
    <p>Ci sono due tipi principali di componenti React: componenti funzionali e componenti di classe.</p>
    
    <p>I componenti funzionali sono definiti come funzioni JavaScript che restituiscono un elemento JSX. Sono tipicamente utilizzati per componenti UI semplici e presentazionali che non hanno stato o metodi di ciclo di vita.</p>
    
    <p>Ecco un esempio di un semplice componente funzionale:</p>

  <code>
      <p><span className='red'>import</span> React <span className='red'>from</span> <span className='blue1'>'react'</span>; </p>

      <p><span className='red'>function</span> <span className='blueviole'>MyComponent</span>(props) {'{'}</p>

      <p><span className='red'>return</span> {'('}</p>

      <p> {'<'}<span className='green'>div</span>{'>'} </p>

      <p>&nbsp;{'<'}<span className='green'>h1</span>{'>'}Ciao,{'{'}props.<span className='blue'>name</span>{'}'}!{'</'}<span className='green'>h1</span>{'>'} </p>

      <p>&nbsp;{'<'}<span className='green'>p</span>{'>'}Questo è un componente funzionale.{'</'}<span className='green'>p</span>{'>'} </p>

      <p>{'</'}<span className='green'>div</span>{'>'} </p>

      <p>&nbsp;{');'}</p>

      <p>{'}'}</p>

      <p><span className='red'>export default</span> MyComponent;</p>  
 </code>
   
    <p>In questo esempio, stiamo definendo un componente funzionale chiamato <b>MyComponent</b> che prende un oggetto <b>props</b> come argomento. Il componente restituisce un elemento JSX che include un elemento h1 con un saluto personalizzato e un elemento <b>p</b> con un messaggio.</p>
    
    <p>I componenti di classe, d'altra parte, sono definiti come classi JavaScript che estendono la classe <b>React.Component</b>. Sono utilizzati per componenti UI più complessi che devono gestire lo stato e avere metodi di ciclo di vita.</p>
    
    <p>Ecco un esempio di un semplice componente di classe:</p>

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

    <p>{'<'}<span className='green'>h1</span>{'>'}Conteggio: {'{'}<span className='red'>this</span>.<span className='blue'>state</span>.<span className='blue'>count</span>{'}'}{'</'}<span className='blue'>h1</span>{'>'}</p>

    <p>{'<'}<span className='green'>button</span> <span className='blue'>onClick</span> = {'{() => '}<span className='red'>this</span>.<span className='blue'>setState</span>{'({'} <span className='blue'>count</span>:<span className='red'>this</span>.<span className='blue'>state</span>.<span className='blue'>count</span> + <span className='blue1'>1</span> {'})}'}{'>'}Incrementa{'</'}<span className='green'>button</span>{'>'}</p>

    <p>{'</'}<span className='blue'>div</span>{'>'} </p>

    <p>&nbsp;&nbsp;{');'}</p>

    <p>&nbsp;{'}'}</p>

    <p>{'}'}</p>

    <p><span className='red'>export default</span> MyComponent;</p>  
</code>
    
    <p>In questo esempio, stiamo definendo un componente di classe chiamato MyComponent che ha una proprietà di stato chiamata <b>count e un metodo di renderizzazione</b> che restituisce un elemento JSX con un elemento h1 che visualizza il conteggio corrente e un <b>pulsante</b> che incrementa il conteggio quando viene cliccato.</p>

    <p>I componenti possono essere composti e nidificati per creare elementi UI complessi. Possono anche accettare props come input, il che consente loro di essere personalizzati e riutilizzati in tutta l'applicazione.</p>

    <p><b>{'<Component />'}</b> è una sintassi utilizzata in React per renderizzare un componente. Viene chiamato un tag di auto-chiusura o un tag vuoto, ed è equivalente a chiamare il componente come una funzione senza argomenti.</p>

    <p>Ad esempio, diciamo che abbiamo un componente semplice chiamato <b>MyComponent</b>:</p>

<code>
  <p><span className='red'>function</span> <span className='blueviole'>MyComponent</span>() {'{'}</p>

  <p><span className='red'>return</span> {'('}</p>

  <p>{'<'}<span className='green'>div</span>{'>'}</p>

  <p>&nbsp;{'<'}<span className='green'>h1</span>{'>'}Ciao, mondo!{'</'}<span className='green'>h1</span>{'>'} </p>

  <p>{'</'}<span className='green'>div</span>{'>'}</p>

  <p>&nbsp;{');'}</p>

  <p>{'}'}</p>
</code>
   
    <p>Per renderizzare questo componente, useremmo la sintassi <b>{'<MyComponent /> '}</b>:</p>

 <code>
  <p>ReactDOM.<span className='blue'>render</span>{'('} </p>

  <p>{'<'}<span className='blueviole'>MyComponent </span>{'/>'}, </p>

  <p>document.<span className='blue'>getElementById</span>(<span className='blue1'>'root'</span>)</p>

  <p>{');'}</p> 
 </code>

    <p>La sintassi <b>{'<MyComponent /> '}</b> crea un'istanza del componente MyComponent e lo renderizza nel DOM.</p>

    <b><p>* Testo scritto con l'aiuto di un traduttore. Se trovi un errore, per favore, faccelo sapere *</p></b>
    
    <div className='ads-container'>  
      {/*  реклама  */}
    </div>
    </div>
  )
}

export default ItReact_2;