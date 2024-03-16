import React from 'react';

function NlReact_4() {
  return (
    <div>
      <div className='ad-container'>  
          {/*  реклама  */}
      </div>

      <h1>Data Ophalen in React</h1>

<p>1. Gegevens ophalen met behulp van de fetch API:</p>

<code> 
  <p><span className='blueviole'>fetch</span>(<span className='blue1'>'https://api.example.com/data'</span>)</p>

  <p>.<span className='blue'>then</span>(response {'=>'} response.<span className='blue'>json</span>()) </p>

  <p>.<span className='blue'>then</span>(data {'=>'} console.<span className='blue'>log</span>(data))</p>

  <p>.<span className='blue'>catch</span>(error {'=>'} console.<span className='blue'>error</span>(error)) </p>
</code>

<p>In dit voorbeeld maken we een verzoek naar een server met behulp van de <b>fetch</b> API. Het <b>response</b>-object wordt geconverteerd naar JSON-formaat met behulp van de <b>json()</b>-methode, en de resulterende gegevens worden gelogd naar de console. Als er een fout optreedt, wordt deze opgevangen en gelogd naar de console.</p>


<p>2. Weergeef opgehaalde gegevens in de staat van het component:</p>

<code>
  <p><span className='red'>import</span> {'React, { useState, useEffect } '} <span className='red'>from</span> <span className='blue1'>'react'</span>;   </p>

  <p><span className='red'>function</span> <span className='blueviole'>MyComponent</span>() {'{'}</p>

  <p><span className='red'>const</span> [data, setData] = <span className='blueviole'>useState</span>([]);</p>

  <p><span className='blueviole'>useEffect</span>{'(() => {'}</p>

  <p><span className='blueviole'>fetch</span>(<span className='blue1'>'https://api.example.com/data'</span>)</p>

  <p>.<span className='blue'>then</span>(response {'=>'} response.<span className='blue'>json</span>())</p>

  <p>.<span className='blue'>then</span>(data {'=>'} <span className='blueviole'>setData</span>(data))</p>

  <p>.<span className='blue'>catch</span>(error {'=>'} console.<span className='blue'>error</span>(error)); </p>

  <p>{'}, []);'}</p>

  <p><span className='red'>return</span> {'('}</p>

  <p>{'<'}<span className='green'>div</span>{'>'}</p>

  <p>{'{'}data.<span className='blue'>map</span>{'(item => ('}</p>

  <p>{'<'}<span className='green'>p</span> key={'{item.'}<span className='blue'>id</span>{'}>'}{'{item.'}<span className='blue'>name</span>{'}</'}<span className='green'>p</span>{'>'}</p>

  <p>{'))} '}</p>

  <p>{'</'}<span className='green'>div</span>{'>'}</p>

  <p>&nbsp;{');'}</p>

  <p>{'}'}</p>
</code>

<p>In dit voorbeeld gebruiken we de <b>useState</b>-hook om een ​​toestandsvariabele genaamd <b>data</b> te definiëren. We gebruiken ook de <b>useEffect</b>-hook om gegevens van de server op te halen wanneer het component wordt gemonteerd, en de toestandsvariabele <b>data</b> bij te werken met de opgehaalde gegevens. Ten slotte gebruiken we de <b>map</b>-methode om door de gegevensarray te lopen en elk item weer te geven als een alinea-element.</p>

<h1>Axios</h1>

<p>Zowel Fetch als Axios zijn JavaScript-bibliotheken die worden gebruikt voor het maken van HTTP-verzoeken vanuit de browser of Node.js-omgeving. Er zijn echter enkele verschillen tussen de twee.</p>

<p>Fetch is een ingebouwde browser-API die beloften gebruikt om verzoeken en antwoorden te verwerken. Het heeft een eenvoudigere syntaxis en is gemakkelijker te gebruiken voor eenvoudige verzoeken, maar het mist enkele geavanceerde functies zoals het annuleren van verzoeken, voortgangsgebeurtenissen en automatische herhaalde verzoeken.</p>

<p>Axios is een populaire externe bibliotheek die een meer uitgebreide en krachtige API biedt voor het maken van HTTP-verzoeken. Het ondersteunt het annuleren van verzoeken, voortgangsgebeurtenissen en automatische herhalingen vanzelf, en heeft ook een ingebouwde ondersteuning voor het verwerken van responsgegevens zoals JSON, XML en FormData.</p>

<p>Wat betreft waarom het beter is om Axios boven Fetch te gebruiken, hangt het echt af van de specifieke behoeften van uw project. Als u een eenvoudige webtoepassing bouwt die alleen basisverzoeken hoeft te doen, kan Fetch voldoende zijn. Als u echter meer geavanceerde functies en een krachtigere API nodig heeft voor het verwerken van verzoeken en antwoorden, is Axios een betere keuze.</p>

<p>Enkele voordelen van het gebruik van Axios boven Fetch zijn:</p>

<p>1. Betere foutafhandeling: Axios heeft een robuuster systeem voor het afhandelen van fouten en biedt meer nuttige foutmeldingen in vergelijking met Fetch.</p>

<p>2. Interceptors: Axios biedt interceptors waarmee u verzoeken of antwoorden kunt wijzigen voordat ze worden verzonden of ontvangen.</p>

<p>3. Automatische transformatie van verzoek- en responsgegevens: Axios kan verzoek- en responsgegevens automatisch transformeren naar verschillende formaten, zoals JSON, wat zeer nuttig kan zijn bij het werken met API's.</p>

<p>4. Eenvoudig annuleren van verzoeken: Axios biedt een eenvoudige manier om verzoeken te annuleren, wat handig kan zijn bij het omgaan met trage of onbetrouwbare netwerken.</p>

<p>Kortom, zowel Fetch als Axios zijn nuttige tools voor het maken van HTTP-verzoeken in JavaScript, maar Axios biedt meer geavanceerde functies en een krachtigere API die zeer nuttig kan zijn voor het bouwen van complexere toepassingen.</p>

<p><b>Axios</b> is een bibliotheek voor het maken van HTTP-verzoeken vanuit de browser of Node.js. Het maakt het gemakkelijk om verzoeken te verzenden met behulp van beloften en antwoorden te verwerken.</p>

<p>Om Axios te gebruiken in React.js, moet u het eerst installeren met het commando:</p>

<b>npm install axios</b>

<p>Daarna kunt u Axios gebruiken in uw React-componenten. Bijvoorbeeld, de volgende code stuurt een GET-verzoek naar een externe server en toont de respons op de pagina:</p>

<code>
    <p><span className='red'>import</span> {' React, { useState, useEffect }'} <span className='red'>from</span> <span className='blue1'>"react"</span>;</p>  

    <p><span className='red'>import</span> axios <span className='red'>from</span> <span className='blue1'>"axios"</span>;</p>

    <p><span className='red'>function</span> <span className='blueviole'>App</span>() {'{'}</p>  

    <p><span className='red'>const</span> {'[data, setData]'} = <span className='blueviole'>useState</span>("");</p>

    <p><span className='blueviole'>useEffect</span>{'(() => { '}</p>

    <p>axios.<span className='blue'>get</span>(<span className='blue1'>"https://jsonplaceholder.typicode.com/todos/1"</span>).<span className='blue'>then</span>{'((response) => {'}</p>

    <p><span className='blueviole'>setData</span>(response.<span className='blue'>data</span>);</p>

    <p>{'});'}</p>

    <p>{' }, []);'}</p>

    <p> return {'<'}<span className='green'>div</span>{'>'}{'{'}data.<span className='blue'>title</span>{'}'}{'</'}<span className='green'>div</span>{'>;'}</p>

    <p>{'}'}</p>

    <p><span className='red'>export default</span> App;</p>
 </code>

 <p>In dit voorbeeld wordt de <b>useEffect</b>-hook gebruikt om een GET-verzoek naar de server te sturen en de <b>data</b>-statusvariabele bij te werken met de respons. De data-variabele wordt vervolgens weergegeven op de pagina met behulp van JSX.</p>  
    
    <p>Axios ondersteunt ook andere HTTP-methoden, zoals POST, PUT en DELETE, die kunnen worden gebruikt om gegevens naar de server te verzenden en bronnen te wijzigen. Het axios-object biedt ook veel configuratieopties, zoals het instellen van headers, timeouts en verzoekinterceptoren, waarmee u het gedrag van de verzoeken kunt aanpassen.</p>  
    
    <p>Over het algemeen is Axios een krachtige en flexibele bibliotheek voor het werken met HTTP-verzoeken in React.js, en het kan veelvoorkomende taken vereenvoudigen, zoals het ophalen van gegevens uit een externe API.</p>
    
    <p>Het HTTP-protocol ondersteunt verschillende verzoekmethoden waarmee verschillende bewerkingen met gegevens kunnen worden uitgevoerd. Hier volgt een korte beschrijving van de vier belangrijkste verzoekmethoden samen met voorbeelden van het gebruik ervan in React:</p>
        
    <p>1. <b>GET</b>: een verzoekmethode die wordt gebruikt voor het ophalen van gegevens van de server. In React kunt u de <b>axios.get</b>-methode gebruiken</p>  
        
    <code>
        <p>axios.<span className='blue'>get</span>(<span className='blue1'>'/api/data'</span>)</p>
    
        <p>.<span className='blue'>then</span>{'(response => {'}</p>
    
        <p>{'console'}.<span className='blue'>log</span>(response.<span className='blue'>data</span>); </p>
    
        <p>{'})'}</p>
    
        <p>.<span className='blue'>catch</span>{'(error => {' }</p>
    
        <p>{'console'}.<span className='blue'>log</span>(error);</p>
      
        <p>{'});'}</p>  
    </code> 
    
    <p>In dit voorbeeld halen we gegevens op van het <b>/api/data</b>-eindpunt. De responsgegevens worden gelogd naar de console als het verzoek succesvol is en eventuele fouten worden opgevangen en gelogd naar de console.</p>
        
    <p>2. <b>PUT</b>: een verzoekmethode die wordt gebruikt voor het bijwerken van bestaande gegevens op de server. In React kunt u de <b>axios.put</b>-methode gebruiken:</p>  
    
    <code>
        <p>axios.<span className='blue'>put</span>{'('}<span className='blue1'>'/api/data/1'</span>, {'{'} <span className='blue'>newData</span>: <span className='blue1'>'updatedData'</span> {"})"}</p>
    
        <p>.<span className='blue'>then</span>{'('}response { '=> {' }</p>
    
        <p>{'console'}.<span className='blue'>log</span>(response.<span className='blue'>data</span>);</p>  
    
        <p>{'})'}</p>
    
        <p>.<span className='blue'>catch</span>{'(error => {'}</p>
    
        <p>{'console'}.<span className='blue'>log</span>(error);</p>
    
        <p>{'});'}</p>
    </code>
    
    <p>In dit voorbeeld werken we gegevens bij op het <b>/api/data/1</b>-eindpunt. We verzenden een payload met de nieuwe gegevens als het tweede argument naar <b>axios.put</b>. De responsgegevens worden gelogd naar de console als het verzoek succesvol is en eventuele fouten worden opgevangen en gelogd naar de console.</p>    
        
    <p>3. <b>POST</b>: een verzoekmethode die wordt gebruikt voor het maken van nieuwe gegevens op de server. In React kunt u de <b>axios.post</b>-methode gebruiken</p>  
        
    <code>
        <p>axios.<span className='blue'>post</span>{'('}<span className='blue1'>'/api/data'</span>, {'{'} <span className='blue'>newData</span>: <span className='blue1'>'newData'</span> {"})"}</p>
    
        <p>.<span className='blue'>then</span>{'(response => {'}</p>
    
        <p>{'console'}.<span className='blue'>log</span>(response.<span className='blue'>data</span>);</p>
    
        <p>{'})'}</p>  
    
        <p>.<span className='blue'>catch</span>{'(error => {'}</p>
    
        <p>{'console'}.<span className='blue'>log</span>(error);</p> 
    
        <p>{'});'}</p> 
    </code>  
    
    <p>In dit voorbeeld maken we nieuwe gegevens aan op het <b>/api/data</b>-eindpunt. We verzenden een payload met de nieuwe gegevens als het tweede argument naar <b>axios.post</b>. De responsgegevens worden gelogd naar de console als het verzoek succesvol is en eventuele fouten worden opgevangen en gelogd naar de console.</p>
        
    <p>4. <b>DELETE</b>: een verzoekmethode die wordt gebruikt voor het verwijderen van bestaande gegevens op de server. In React kunt u de <b>axios.delete</b>-methode gebruiken:</p>  
        
    <code>
        <p>axios.<span className='blue'>delete</span>(<span className='blue1'>'/api/data/1'</span>)  </p>
    
        <p>.<span className='blue'>then</span>{'(response => { '}</p>
    
        <p>{'console'}.<span className='blue'>log</span>(response.<span className='blue'>data</span>);</p>
    
        <p>{'}) '}</p>
    
        <p>.<span className='blue'>catch</span>{'(error => { '}</p>
    
        <p>{'console'}.<span className='blue'>log</span>(error);</p>
    
        <p>{'});'}</p>
    </code> 
    
    <p>In dit voorbeeld verwijderen we gegevens op het <b>/api/data/1</b>-eindpunt. De responsgegevens worden gelogd naar de console als het verzoek succesvol is, en eventuele fouten worden opgevangen en gelogd naar de console.</p>
    
    <p>Voor meer informatie over Axios kunt u hun officiële website bezoeken: <a href=" https://axios-http.com" target='_blank' > 👉🏼  https://axios-http.com</a></p>
    
    <b><p>* Tekst geschreven met behulp van een vertaler. Als je een fout vindt, laat het ons dan weten *</p></b>
    
    <div className='ads-container'>  
      {/*  реклама  */}
    </div>
     </div>
  )
}

export default NlReact_4;