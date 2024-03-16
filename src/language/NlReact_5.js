import React from 'react';

function NlReact_5() {
  return (
    <div>
      <div className='ad-container'>  
          {/*  реклама  */}
      </div>
      
      <h1>React Router DOM</h1>

<p>React Router Dom is een populaire bibliotheek die wordt gebruikt in React-applicaties voor het beheren van client-side routing. Het stelt ontwikkelaars in staat om verschillende routes voor verschillende componenten te maken en deze weer te geven op basis van de huidige URL. Dit zorgt voor een meer intuïtieve en naadloze gebruikerservaring, omdat gebruikers kunnen navigeren tussen verschillende pagina's en componenten zonder de hele pagina opnieuw te hoeven laden.</p>

<p>React Router Dom is gebaseerd op de React Router-bibliotheek en specifiek ontworpen voor gebruik in de browser. Het maakt gebruik van de History API van de browser om de URL te manipuleren en de gebruikersinterface in sync te houden met de huidige URL. Het biedt ook een declaratieve benadering voor het definiëren van routes, waardoor het eenvoudig is om complexe toepassingen met meerdere routes en geneste componenten te beheren.</p>

<p>Enkele van de belangrijkste kenmerken van React Router Dom zijn:</p>

<p> • Declaratieve routing: U kunt uw routes definiëren als JSX-componenten, waardoor het eenvoudig is om de routinglogica te begrijpen en te beheren.</p>

<p> • Geneste routes: U kunt routes nesten binnen andere routes, waardoor meer complexe routingscenario's mogelijk zijn</p>

<p> • Route parameters: U kunt dynamische parameters definiëren binnen uw routes, waardoor u gegevens tussen componenten kunt doorgeven op basis van de huidige URL.</p>

<p> • Geschiedenisbeheer: React Router Dom biedt tools voor het beheren van de geschiedenis van de browser, waardoor u programmatisch tussen pagina's kunt navigeren en terug-/vooruitnavigatie kunt afhandelen.</p>
 
<p>Hier is een eenvoudig voorbeeld van hoe React Router Dom kan worden gebruikt in een React-toepassing: <b>(oude versie)v5</b></p>

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

<p>In dit voorbeeld importeren we de nodige componenten van React Router Dom (specifiek, <b>BrowserRouter, Route, en Link</b>). Vervolgens definiëren we twee eenvoudige componenten voor onze home- en about-pagina's.</p>

<p>Binnen de <b>App</b>-component omhullen we alles in een <b>Router</b>-component, die de routingscontext biedt voor de rest van de toepassing. We definiëren vervolgens een eenvoudige navigatiebalk met behulp van de <b>Link</b>-component om tussen onze twee pagina's te navigeren.</p>

<p>Tenslotte definiëren we twee <b>Route</b>-componenten die de <b>Home</b>- en <b>About</b>-componenten renderen op basis van de huidige URL.</p>

<p>React Router Dom 6.4 is de nieuwste versie van de bibliotheek, uitgebracht in februari 2022. Enkele van de nieuwe functies in deze versie zijn:</p>

<p>De nieuwste versie (v6) heeft wijzigingen in sommige API's en collecties, dus ik kan een nieuw voorbeeld kiezen met behulp van React Router Dom versie 6.4:</p>

<p>hier is een voorbeeld met gebruik van React Router Dom versie 6.4:</p>

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

<p>In dit voorbeeld gebruiken we dezelfde kerncomponenten van React Router Dom (<b>zoals BrowserRouter, Route, Link</b>), maar sommige ervan hebben een iets andere syntaxis.</p>

<p>Bijvoorbeeld, we gebruiken nu de <b>Routes</b> component in plaats van <b>Switch</b> om meerdere routes te groeperen. Elke route wordt nu vertegenwoordigd door een <b>Route</b> element met <b>path en element</b> props. De <b>path</b> prop stelt het URL-patroon in voor de route, en de <b>element</b> prop is het component dat moet worden weergegeven wanneer de route overeenkomt.</p>

<p>In dit voorbeeld hebben we ook een <b>NotFound</b> component toegevoegd die wordt weergegeven wanneer de gebruiker op een niet-bestaande pagina terechtkomt.</p>

<p>Over het algemeen biedt React Router Dom 6 een meer flexibele en handige manier om routing in React-applicaties te behandelen.</p>    
    
<p>1. Als je <b>npm</b> gebruikt, open dan je terminal en voer het volgende commando uit:</p>

<b>npm install react-router-dom</b>

<p>2. Als je <b>yarn</b> gebruikt, open dan je terminal en voer het volgende commando uit:</p>

<b>yarn add react-router-dom</b> 

<p>Na installatie kun je de benodigde componenten importeren uit het <b>react-router-dom</b> pakket, zoals ik heb laten zien in de voorbeelden hierboven</p>

<p> Voor meer informatie over React Router, bezoek alstublieft hun officiële website: <a href="https://reactrouter.com/" target='_blank' > 👉🏼  https://reactrouter.com/.</a></p>    
    
<p>Op de website vind je een uitgebreide handleiding voor het gebruik van React Router, inclusief:</p>    
    
<p>• Een overzicht van React Router en de belangrijkste concepten</p> 

<p>• Installatie- en setup-instructies</p>

<p>• Voorbeelden van verschillende use cases en scenario's</p>

<p>• API-documentatie voor elk van de kerncomponenten en hulpprogramma's</p>

<p>• Geavanceerde onderwerpen zoals server rendering, code splitting en geneste routes</p>

<p>Naast de documentatie vind je ook een aantal nuttige bronnen zoals een communityforum, een GitHub-repository voor bugrapporten en functieverzoeken, en een verzameling gerelateerde projecten en plugins.</p>

<b><p>* Tekst geschreven met behulp van een vertaler. Als je een fout vindt, laat het ons dan weten *</p></b>
    
    <div className='ads-container'>  
      {/*  реклама  */}
    </div>
     </div>
  )
}

export default NlReact_5;