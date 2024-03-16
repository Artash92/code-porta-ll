import React from 'react';

function NlReact_2() {
  return (
    <div>
      <div className='ad-container'>  
          {/*  реклама  */}
        </div>

      <h1>JSX</h1>

<p>JSX is een syntaxisuitbreiding voor JavaScript waarmee je HTML-achtige code kunt schrijven in je JavaScript-bestanden. Het wordt uitgebreid gebruikt in React om de structuur en lay-out van UI-componenten te definiëren.</p>

<p>Hier is een voorbeeld van hoe JSX werkt:</p>

<code>
  <p><span className='red'>import</span> React <span className='red'>from</span> <span className='blue1'>'react'</span>; </p>

  <p><span className='red'>function</span> <span className='blueviole'>MyComponent</span>() {'{'}</p>

  <p><span className='red'>return</span> {'('}</p>

  <p>{'<'}/<span className='green'>div</span>{'>'}</p>

  <p>&nbsp;{'<'}/<span className='green'>h1</span>{'>'}Hallo, wereld!{'</'}<span className='green'>h1</span>{'>'} </p>

  <p>&nbsp;{'<'}/<span className='green'>p</span>{'>'}Dit is een eenvoudig voorbeeld van JSX.{'</'}<span className='green'>p</span>{'>'} </p>

  <p>{'</'}<span className='green'>div</span>{'>'}</p>

  <p>&nbsp;{'); '}</p>

  <p>{'}'}</p>

  <p><span className='red'>export default</span> MyComponent;</p> 
</code>

<p>In dit voorbeeld definiëren we een eenvoudige React-component met behulp van JSX. De component rendert een <b>div</b>-element dat een <b>h1- en een p</b>-element bevat. Let op dat de HTML-achtige code tussen haakjes staat en wordt gedefinieerd met behulp van JSX-syntaxis.</p>

<p>JSX stelt je in staat om eenvoudig HTML-achtige code te combineren met JavaScript-logica. Je kunt bijvoorbeeld JavaScript-variabelen en expressies gebruiken binnen je JSX-code:</p>

<code>
  <p><span className='red'>import</span> React <span className='red'>from</span> <span className='blue1'>'react'</span>;</p>

  <p><span className='red'>function</span> <span className='blueviole'>MyComponent</span>() {'{'}</p>

  <p><span className='red'>const</span> name = <span className='blue1'>'John'</span>;  </p>

  <p><span className='red'>return</span> {'('}</p>

  <p>{'<'}/<span className='green'>div</span>{'>'} </p>

  <p>&nbsp;{'<'}/<span className='green'>h1</span>{'>'} Hallo,{'{'}name{'}'}!{'</'}<span className='green'>h1</span>{'>'} </p>

  <p>&nbsp;{'<'}/<span className='green'>p</span>{'>'}Dit is een eenvoudig voorbeeld van JSX.{'</'}<span className='green'>p</span>{'>'} </p>

  <p>{'</'}<span className='green'>div</span>{'>'} </p>

  <p>&nbsp;{");"}</p>

  <p>{" } "}</p>

  <p><span className='red'>export default</span> MyComponent;</p> 
</code>

<p>In dit voorbeeld gebruiken we een JavaScript-variabele <b>(naam)</b> in onze JSX-code om dynamisch een gepersonaliseerde begroeting weer te geven.</p>

<p>JSX is niet vereist voor React-ontwikkeling, maar het wordt ten zeerste aanbevolen omdat het veel gemakkelijker maakt om complexe UI-componenten te schrijven en te beheren. Wanneer je JSX-code schrijft, wordt deze getranspileerd naar reguliere JavaScript-code die door de browser kan worden uitgevoerd.</p>

<p>Er zijn twee hoofdtypen React-componenten: functionele componenten en klassencomponenten.</p>

<p>Functionele componenten worden gedefinieerd als JavaScript-functies die een JSX-element retourneren. Ze worden meestal gebruikt voor eenvoudige, presentatiegerichte UI-componenten die geen toestand of levenscyclusmethoden hebben.</p>

<p>Hier is een voorbeeld van een eenvoudige functionele component:</p>

<code>
    <p><span className='red'>import</span> React <span className='red'>from</span> <span className='blue1'>'react'</span>; </p>

    <p><span className='red'>function</span> <span className='blueviole'>MyComponent</span>(props) {'{'}</p>

    <p><span className='red'>return</span> {'('}</p>

    <p> {'<'}<span className='green'>div</span>{'>'} </p>

    <p>&nbsp;{'<'}<span className='green'>h1</span>{'>'}Hallo,{'{'}props.<span className='blue'>naam</span>{'}'}!{'</'}<span className='green'>h1</span>{'>'} </p>

    <p>&nbsp;{'<'}<span className='green'>p</span>{'>'}Dit is een functionele component.{'</'}<span className='green'>p</span>{'>'} </p>

    <p>{'</'}<span className='green'>div</span>{'>'} </p>

    <p>&nbsp;{');'}</p>

    <p>{'}'}</p>

    <p><span className='red'>export default</span> MyComponent;</p>  
</code>

<p>In dit voorbeeld definiëren we een functionele component genaamd <b>MyComponent</b> die een <b>props</b>-object als argument gebruikt. De component retourneert een JSX-element dat een h1-element bevat met een gepersonaliseerde begroeting en een <b>p</b>-element met een boodschap.</p>

<p>Klassencomponenten daarentegen worden gedefinieerd als JavaScript-klassen die de klasse <b>React.Component</b> uitbreiden. Ze worden gebruikt voor meer complexe UI-componenten die de toestand moeten beheren en levenscyclusmethoden hebben.</p>

<p>Hier is een voorbeeld van een eenvoudige klassencomponent:</p>

<code>
    <p><span className='red'>import</span> React <span className='red'>from</span> <span className='blue1'>'react'</span>; </p>

    <p><span className='red'>class</span> MyComponent <span className='red'>extends</span> React.<span className='blue'>Component</span> {'{'}</p>

    <p><span className='blue'>constructor</span>(props) {'{'}</p>

    <p>super(props);</p>

    <p><span className='red'>this</span>.<span className='blue'>state</span> = {'{'}</p>

    <p><span className='blue'>teller</span>: <span className='blue1'>0</span></p>

    <p>&nbsp;{'};'}</p>

    <p>{'}'}</p>

    <p><span className='blue'>render</span>() {'{'}</p>

    <p><span className='red'>return</span> {'('}</p>

    <p>{'<'}<span className='green'>div</span>{'>'} </p>

    <p>{'<'}<span className='green'>h1</span>{'>'}Teller: {'{'}<span className='red'>this</span>.<span className='blue'>state</span>.<span className='blue'>teller</span>{'}'}{'</'}<span className='blue'>h1</span>{'>'}</p>

    <p>{'<'}<span className='green'>button</span> <span className='blue'>onClick</span> = {'{() => '}<span className='red'>this</span>.<span className='blue'>setState</span>{'({'} <span className='blue'>teller</span>:<span className='red'>this</span>.<span className='blue'>state</span>.<span className='blue'>teller</span> + <span className='blue1'>1</span> {'})}'}{'>'}Verhogen{'</'}<span className='green'>button</span>{'>'}</p>

    <p>{'</'}<span className='blue'>div</span>{'>'} </p>

    <p>&nbsp;&nbsp;{');'}</p>

    <p>&nbsp;{'}'}</p>

    <p>{'}'}</p>

    <p><span className='red'>export default</span> MyComponent;</p>  
</code>

<p>In dit voorbeeld definiëren we een klassencomponent genaamd MyComponent met een toestandeigenschap genaamd <b>teller</b> en een rendermethode die een JSX-element retourneert met een h1-element dat de huidige teller weergeeft en een <b>button</b>-element dat de teller verhoogt wanneer erop wordt geklikt.</p>

<p>Componenten kunnen worden samengesteld en genest om complexe UI-elementen te maken. Ze kunnen ook props accepteren als invoer, waardoor ze kunnen worden aangepast en hergebruikt in de hele toepassing.</p>

<p><b>{'<Component />'}</b> is een syntaxis die in React wordt gebruikt om een component te renderen. Het wordt een zelfsluitend tag of een lege tag genoemd, en het staat gelijk aan het aanroepen van de component als een functie zonder argumenten.</p>

<p>Bijvoorbeeld, laten we zeggen dat we een eenvoudige component genaamd <b>MyComponent</b> hebben:</p>

<code>
    <p><span className='red'>function</span> <span className='blueviole'>MyComponent</span>() {'{'}</p>

    <p><span className='red'>return</span> {'('}</p>

    <p>{'<'}<span className='green'>div</span>{'>'}</p>

    <p>&nbsp;{'<'}<span className='green'>h1</span>{'>'}Hallo, wereld!{'</'}<span className='green'>h1</span>{'>'} </p>

    <p>{'</'}<span className='green'>div</span>{'>'}</p>

    <p>&nbsp;{');'}</p>

    <p>{'}'}</p>
</code>

<p>Om deze component te renderen, zouden we de syntaxis <b>{'<MyComponent /> '}</b> gebruiken:</p>

<code>
    <p>ReactDOM.<span className='blue'>render</span>{'('} </p>

    <p>{'<'}<span className='blueviole'>MyComponent </span>{'/>'}, </p>

    <p>document.<span className='blue'>getElementById</span>(<span className='blue1'>'root'</span>)</p>

    <p>{');'}</p> 
</code>

<p>De syntaxis <b>{'<MyComponent /> '}</b> maakt een instantie van de MyComponent-component en rendert deze naar de DOM.</p>

<b><p>* Tekst geschreven met behulp van een vertaler. Als je een fout vindt, laat het ons dan weten *</p></b>
    
    <div className='ads-container'>  
      {/*  реклама  */}
    </div>
     </div>
  )
}

export default NlReact_2;