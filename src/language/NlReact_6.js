import React from 'react';

function NlReact_6() {
  return (
    <div>
      <div className='ad-container'>  
          {/*  реклама  */}
      </div>
      
      <h1>React Refs</h1>

      <p>In React is een <b>ref</b> een manier om toegang te krijgen tot het onderliggende DOM-knooppunt of de React-componentinstantie van een weergegeven element. U kunt refs gebruiken om toegang te krijgen tot bepaalde eigenschappen of methoden van een component, of om het gedrag ervan te wijzigen.</p>

      <p>Hier is een voorbeeld van hoe je een ref aanmaakt in React:</p>

    <code>
     <p><span className='red'>import</span>  React, {'{ useRef }'} <span className='red'>from</span> <span className='blue1'>'react'</span>;  </p>

     <p><span className='red'>function</span> <span className='blueviole'>TextInput</span>{'() {'}</p>

     <p>&nbsp;<span className='red'>const</span> inputRef = <span className='blueviole'>useRef</span>(<span className='red'>null</span>); </p> 

     <p>&nbsp;<span className='red'>const</span> {'handleClick = () => {'}</p>

     <p> inputRef.<span className='blue'>current</span>.<span className='blue'>focus</span>();</p>

     <p>{' };'}</p>

     <p>&nbsp;<span className='red'>return</span> {'('}</p>

     <p>{'<'}<span className='green'>div</span>{'>'}</p>

     <p>&nbsp;{'<'}<span className='green'>input</span> <span className='blue'>type</span>=<span className='blue1'>"text"</span> <span className='blue'>ref</span>={'{inputRef} />'}</p>

     <p>&nbsp;{'<'}<span className='green'>button</span> <span className='blue'>onClick</span>={'{handleClick}>'}Focus Input{'</'}<span className='green'>button</span>{'>'}</p>

     <p>{'</'}<span className='green'>div</span>{'>'}</p>

     <p>&nbsp;{' );'}</p>

     <p>{'}'}</p>
    </code>

    <p>In dit voorbeeld maken we een <b>ref</b> met behulp van de <b>useRef</b> hook. Vervolgens geven we de <b>ref</b> door aan het <b>input</b> element met behulp van de <b>ref</b> prop.</p>

    <p>We maken ook een functie <b>handleClick</b> die de eigenschap <b>current</b> van <b>ref</b> gebruikt om de methode <b>focus</b> aan te roepen op het <b>invoer</b>-element. Hierdoor kunnen we de focus op de invoer instellen wanneer de gebruiker op de knop 'Focusinvoer' klikt.</p>

    <p>Over het algemeen kan het gebruik van <b>refs</b> een krachtig hulpmiddel zijn voor het openen en manipuleren van componenten in React. Het is echter belangrijk om ze spaarzaam te gebruiken en te voorkomen dat u te zwaar leunt op imperatieve code, omdat dit het moeilijker kan maken om over uw code te redeneren en deze te onderhouden.</p>
    
    <b>Event Emitter</b>

    <p>Een gebeurteniszender is een ontwerppatroon waarmee objecten in een programma met elkaar kunnen communiceren door gebeurtenissen te activeren en af te handelen. Simpel gezegd is een gebeurteniszender een mechanisme voor het uitzenden en ontvangen van berichten binnen een programma.</p>

    <p>In JavaScript is de klasse EventEmitter een ingebouwde module die een manier biedt om dit patroon te implementeren. Hier is een voorbeeld van het gebruik van EventEmitter in Node.js:</p>

<code>
  <p><span className='red'>const</span> EventEmitter = <span className='blueviole'>require</span>(<span className='blue1'>'events'</span>); </p>

  <p><span className='red'>class</span> MyEmitter <span className='red'>extends</span> EventEmitter {"{}"}</p>

  <p><span className='red'>const</span> myEmitter = <span className='red'>new</span> MyEmitter(); </p>

  <p>myEmitter.<span className='blue'>on</span>{'('}<span className='blue1'>'event'</span>, (arg){" => {"}</p>

  <p> console.<span className='blue'>log</span>(<span className='blue1'>'Gebeurtenis geactiveerd met argument:'</span>, arg); </p>

  <p>{"});"}</p>

  <p> myEmitter.<span className='blue'>emit</span>(<span className='blue1'>'event', 'Hallo Wereld!'</span>); </p>
</code>

<p>In dit voorbeeld maken we een aangepaste klasse <b>MyEmitter</b> die de klasse <b>EventEmitter</b> uitbreidt. Vervolgens maken we een instantie van deze klasse en definiëren we een luisteraar voor de gebeurtenis <b>event</b> met behulp van de methode <b>on</b>. Ten slotte zenden we de gebeurtenis <b>event</b> uit en geven we een stringargument door, dat de luisteraar activeert en het argument in de console registreert.</p>

<p>Over het algemeen kan het gebruik van een gebeurteniszender een nuttige manier zijn om een pub-sub-patroon in uw code te implementeren, waarbij verschillende delen van uw programma met elkaar kunnen communiceren zonder nauw aan elkaar gekoppeld te hoeven zijn. Het is echter belangrijk om dit patroon oordeelkundig te gebruiken en niet te zwaar te vertrouwen op gebeurtenissen, omdat dit uw code moeilijker te begrijpen en te debuggen kan maken.</p>

<p><b>In React</b> kunt u een gebeurtenisemitterpatroon gebruiken om te communiceren tussen verschillende componenten in uw toepassing. Dit kan handig zijn voor het doorgeven van gegevens of het activeren van acties tussen componenten die niet direct aan elkaar gerelateerd zijn.</p>

<p>Een manier om een gebeurtenisemitterpatroon in React te implementeren is door een bibliotheek van derden te gebruiken, zoals <b>eventemitter3 of mitt</b>. Deze bibliotheken bieden een eenvoudige API voor het maken van en abonneren op evenementen, en kunnen worden gebruikt met zowel klassecomponenten als functionele componenten met hooks.</p>

<p>Hier is een voorbeeld van hoe je <b>eventemitter3</b> gebruikt in een React-component:</p>

<code>
  <p><span className='red'>import</span> React, {"{ useEffect }"} <span className='red'>from</span> <span className='blue1'>'react'</span>; </p>

  <p><span className='red'>import</span> EventEmitter <span className='red'>from</span> <span className='blue1'>'eventemitter3'</span>;  </p>

  <p>&nbsp;<span className='red'>const</span>  emitter = <span className='red'>new</span> EventEmitter(); </p>

  <p><span className='red'>function</span> <span className='blueviole'>ComponentA</span>() {"{"}</p>

  <p>&nbsp;<span className='blueviole'>useEffect</span>{"(() => { "}</p>

  <p>&nbsp;&nbsp;emitter.<span className='blue'>emit</span>{'('}<span className='blue1'>'eventA'</span>, {'{'} <span className='blue'>data</span>: <span className='blue1'>'Hallo van ComponentA'</span> {'})'}; </p>

  <p>{"}, []);"}</p>

  <p>&nbsp;&nbsp;<span className='red'>return</span> {'<'}<span className='green'>div</span>{'>'}ComponentA{'</'}<span className='green'>div</span>{">; "}</p>

  <p>{"} "}</p>

  <p><span className='red'>function</span> <span className='blueviole'>ComponentB</span>{"() {"}</p>

  <p>&nbsp;<span className='blueviole'>useEffect</span>{"(() => {"}</p>

  <p>&nbsp;&nbsp;emitter.<span className='blue'>on</span>(<span className='blue1'>'eventA'</span>, handleEventA); </p>

  <p>&nbsp;&nbsp;<span className='red'>return</span>  () {'=>'} emitter.<span className='blue'>off</span>(<span className='blue1'>'eventA'</span>, handleEventA);</p>

  <p>{" }, []);"}</p>

  <p>&nbsp;<span className='red'>const</span>  handleEventA = (payload) {"=> {"}</p>

  <p>&nbsp;&nbsp;{'console.'}<span className='blue'>log</span>(<span className='blue1'>'Received eventA:'</span>, payload.<span className='blue'>data</span>);</p>

  <p>{" }; "}</p>

  <p>&nbsp;&nbsp;<span className='red'>return</span> {'<'}<span className='green'>div</span>{'>'}ComponentB{'</'}<span className='green'>div</span>{">; "}</p>

  <p>{"}"}</p>
</code>

<p>In dit voorbeeld maken we een instantie van <b>EventEmitter met de naam emitter</b>. In <b>ComponentA</b> gebruiken we de <b>useEffect</b> hook om een gebeurtenis met de naam <b>eventA</b> met enkele gegevens uit te zenden. In <b>ComponentB</b> gebruiken we de hook <b>useEffect</b> om ons te abonneren op de gebeurtenis <b>eventA</b> en definiëren we een callback-functie met de naam <b>handleEventA</b> die de gegevens naar de console registreert.</p>

<p>Wanneer ComponentA is aangekoppeld, verzendt deze de eventA-gebeurtenis met enkele gegevens. Wanneer ComponentB is aangekoppeld, abonneert deze zich op de eventA-gebeurtenis en begint te luisteren naar alle gebeurtenissen met die naam. Wanneer eventA wordt uitgezonden, wordt handleEventA aangeroepen met de gegevens en wordt het bericht in de console geregistreerd.</p>

<p>Over het algemeen kan het gebruik van een gebeurtenisemitterpatroon in React een nuttige manier zijn om communicatie te implementeren tussen componenten die niet direct aan elkaar gerelateerd zijn. Het is echter belangrijk om dit patroon oordeelkundig te gebruiken en niet te zwaar te vertrouwen op gebeurtenissen, omdat dit uw code moeilijker te begrijpen en te debuggen kan maken.</p>

<h4>React Animation</h4>

<p>In React kun je animaties aan je componenten toevoegen met behulp van verschillende technieken. Animaties kunnen uw gebruikersinterface aantrekkelijker maken en visuele feedback aan de gebruiker geven als er dingen veranderen.</p>

<p>Een populaire manier om animaties in React te implementeren is het gebruik van CSS-overgangen of animaties. U kunt CSS-klassen aan uw componenten toevoegen om deze animaties te activeren, en de <b>className</b> prop van React gebruiken om de klassen te schakelen op basis van de status van de component.</p>

<p>Hier is een voorbeeld van hoe u CSS-overgangen kunt gebruiken om een knop te animeren wanneer erop wordt geklikt:</p>

<code>
  <p><span className='red'>import</span> {'React, { useState }'} <span className='red'>from</span> <span className='blue1'>'react'</span>;</p> 

  <p><span className='red'>import</span>  <span className='blue1'>'./Button.css'</span>;</p>

  <p><span className='red'>function</span> <span className='blueviole'>Button</span>{"() {"}</p>

  <p>&nbsp;<span className='red'>const</span>  {"[isClicked, setIsClicked]"} = <span className='blueviole'>useState</span>(<span className='blue1'>false</span>); </p>

  <p>&nbsp;<span className='red'>const</span> {"handleClick = () => { "}</p>

  <p><span className='blueviole'>setIsClicked</span>(<span className='blue1'>true</span>); </p>

  <p><span className='blueviole'>setTimeout</span>{"(() => "}<span className='blueviole'>setIsClicked</span>(<span className='blue1'>false</span>), <span className='blue1'>1000</span>{')'};</p>

  <p>{"};"}</p>

  <p>&nbsp;<span className='red'>return</span> {"("}</p>

  <p>{'<'}<span className='green'>button</span> <span className='blue'>className</span>={'{'}<span className='blue1'>`button {'${'}</span>isClicked ? <span className='blue1'>'clicked'</span> : <span className='blue1'>''{'}`'}</span>{'}'} <span className='blue'>onClick</span>={'{handleClick}>'}</p>

  <p>&nbsp;{"Klik hier! "}</p>

  <p>{"</"}<span className='green'>button</span>{">"}</p>

  <p>{"); "}</p>

  <p>{" }"}</p>
</code>

<p>In dit voorbeeld definiëren we een component genaamd <b>Button</b> die de hook <b>useState</b> gebruikt om bij te houden of er op de knop is geklikt of niet. Wanneer op de knop wordt geklikt, stellen we de status <b>isClicked</b> in op <b>true</b>, waardoor de klasse <b>clicked</b> aan de knop wordt toegevoegd. Vervolgens gebruiken we <b>setTimeout</b> om de klasse <b>clicked</b> na 1 seconde te verwijderen, waardoor de overgang naar de oorspronkelijke staat wordt geactiveerd.</p>

<p>We definiëren ook een CSS-bestand met de naam <b>Button.css</b> dat de stijlen definieert voor de knop en de aangeklikte <b>klasse</b>:</p>

<code>
  <p>{'.button {'}</p>

  <p>&nbsp;&nbsp;<span className='blue'>background-color</span>: <span className='blue1'>blue</span>; </p>

  <p>&nbsp;&nbsp;<span className='blue'>color</span>: <span className='blue1'>white</span>;</p>

  <p>&nbsp;&nbsp;<span className='blue'>padding</span>: 10<span className='blue1'>px</span> 20<span className='blue1'>px</span>; </p>

  <p>&nbsp;&nbsp;<span className='blue'>border</span>: <span className='blue1'>none</span>;</p>

  <p>&nbsp;&nbsp;<span className='blue'>border-radius</span>: 5<span className='blue1'>px</span>;</p>

  <p>&nbsp;&nbsp;<span className='blue'>transition</span>: <span className='blue1'>background-color</span> 0.5<span className='blue1'>s</span>; </p>

  <p>{'}'}</p>

  <p>{'.clicked {'}</p>

  <p>&nbsp;&nbsp;<span className='blue'>background-color</span>: <span className='blue1'>red</span>; </p>

  <p>{'}'}</p>
</code>

<p>In dit CSS-bestand definiëren we de stijlen voor de knop en specificeren we een <b>overgangseigenschap</b> op de <b>button</b>-klasse om wijzigingen in de <b>achtergrondkleur</b>-eigenschap te animeren. We definiëren ook de <b>geklikt</b>-klasse, die de <b>achtergrondkleur</b> naar rood verandert wanneer toegepast.</p>

<p>Een andere manier om animaties in React te implementeren, is door een externe bibliotheek zoals <b>react-spring of framer-motion</b> te gebruiken. Deze bibliotheken bieden een meer flexibele API voor het maken van complexe animaties en kunnen nuttig zijn voor meer geavanceerde toepassingen.</p>

<p><b>react-transition-group</b> is een externe bibliotheek voor React die een manier biedt om eenvoudig CSS-overgangen en -animaties aan uw componenten toe te voegen. Het biedt een set van componenten en API's voor het beheren van de levenscyclus van overgangen, inclusief het monteren en demonteren van elementen, het toevoegen en verwijderen van klassen, en het vertragen van animaties.</p>

<b>{'npm install react-transition-group'}</b>

<p>De kerncomponenten in <b>react-transition-group zijn Transition, CSSTransition en TransitionGroup</b>. Hier is een beknopt overzicht van elke component:</p>

<p>• <b>Transition</b>: Deze component definieert de basislevenscyclus van een overgang, inclusief de toestanden invoeren, ingevoerd, verlaten en verlaten. U kunt deze component gebruiken om de overgang te activeren.</p>

<p>• <b>CSSTransition</b>: Deze component breidt de <b>Transition</b>-component uit en voegt ondersteuning toe voor CSS-overgangen en -animaties. U kunt CSS-klassen specificeren die moeten worden toegepast op uw component tijdens de verschillende stadia van de overgang, zoals <b>invoeren, invoer-actief, verlaten en verlaten-actief</b>.</p>

<p>• <b>TransitionGroup</b>: Deze component wordt gebruikt om een set van <b>Transition of CSSTransition</b>-componenten te beheren. Het houdt het monteren en demonteren van componenten bij en kan verschillende overgangseffecten toepassen op elke component.</p>

<p>Hier is een voorbeeld van hoe <b>react-transition-group</b> te gebruiken om een fade-in-animatie aan een component toe te voegen wanneer deze wordt gemonteerd:</p>


<code>
  <p><span className='red'>import</span>  {'React, { useState }'} <span className='red'>from</span> <span className='blue1'>'react'</span>; </p>

  <p><span className='red'>import</span>  {'{ CSSTransition }'} <span className='red'>from</span> <span className='blue1'>'react-transition-group'</span>;</p>

  <p><span className='red'>import</span>  <span className='blue1'>'./FadeIn.css'</span>;</p>

  <p><span className='red'>function</span> <span className='blueviole'>FadeIn</span>{"() { "}</p>

  <p>&nbsp;<span className='red'>const</span> {'[isMounted, setIsMounted]'} = <span className='blueviole'>useState</span>(<span className='blue1'>false</span>); </p>

  <p>&nbsp;<span className='red'>const</span> {'handleMount = () => '}<span className='blueviole'>setIsMounted</span>(<span className='blue1'>true</span>);  </p>

  <p>&nbsp;<span className='red'>return</span> {"( "}</p>

  <p>{"<> "}</p>

  <p>&nbsp;{'<'}<span className='green'>button</span> <span className='blue'>onClick</span>={'{handleMount}>Mount component</'}<span className='green'>button</span>{'>'}</p>

  <p>&nbsp;{'<'}<span className='blueviole'>CSSTransition</span> <span className='blue'>in</span>={'{isMounted}'} <span className='blue'>timeout</span>={'{'}<span className='blue1'>300</span>{'}'} <span className='blue'>classNames</span>=<span className='blue1'>"fade"</span>{'>'}</p>

  <p>&nbsp;{'<'}<span className='green'>div</span> <span className='blue'>className</span>=<span className='blue1'>"content"</span>{'>'}Hallo Wereld!{'</'}<span className='green'>div</span>{'>'}</p>

  <p>&nbsp;{"</"}<span className='blueviole'>CSSTransition</span>{">"}</p>

  <p>{" </> "}</p>

  <p>&nbsp;{"); "}</p>

  <p>{"} "}</p>
</code>

<p>In dit voorbeeld definiëren we een component genaamd <b>FadeIn</b> die de <b>useState</b> hook gebruikt om bij te houden of de component is aangekoppeld of niet. Wanneer op de knop wordt geklikt, stellen we de status <b>isMounted</b> in op <b>true</b>, waardoor de component <b>CSSTransition</b> wordt geactiveerd om de <b>inhoud</b> weer te geven  div met een fade-in-animatie. We definiëren ook een CSS-bestand met de naam <b>FadeIn.css</b> dat de stijlen en animaties voor het fade-in-effect definieert:</p>

<code>
  <p>{" .fade-enter { "}</p>

  <p>&nbsp;&nbsp;<span className='blue'>opacity</span>: 0;</p>

  <p>{"} "}</p>

  <p>{".fade-enter-active { "}</p>

  <p>&nbsp;&nbsp;<span className='blue'>opacity</span>: 1; </p>

  <p>&nbsp;&nbsp;<span className='blue'>transition</span>: <span className='blue1'>opacity</span> 300<span className='blue1'>ms ease-in</span>;  </p>

  <p>{"} "}</p>

  <p>{".fade-exit { "}</p>

  <p>&nbsp;&nbsp;<span className='blue'>opacity</span>: 1;  </p>

  <p>{"} "}</p>

  <p>{".fade-exit-active { "}</p>

  <p>&nbsp;&nbsp;<span className='blue'>opacity</span>: 0;  </p>
  
  <p>&nbsp;&nbsp;<span className='blue'>transition</span> : <span className='blue1'>opacity</span> 300<span className='blue1'>ms ease-out</span>; </p>

  <p>{"}"}</p>
</code>

<p>In dit CSS-bestand definiëren we de klassen voor de verschillende fasen van de transitie. Wanneer de component binnenkomt, heeft deze een dekking van 0 (<b>fade-enter</b>) en gaat over naar een dekking van 1 gedurende 300 ms (<b>fade-enter-active</b>). Wanneer de component wordt afgesloten, heeft deze een dekking van 1 (<b>fade-exit</b>) en gaat over naar een dekking van 0 gedurende 300 ms (<b>fade-exit-active</b>).</p >

<p>Over het algemeen kan het toevoegen van animaties aan uw React-componenten uw gebruikersinterface aantrekkelijker maken en visuele feedback aan de gebruiker geven. Door gebruik te maken van CSS-overgangen of animaties, of een bibliotheek van derden, kunt u eenvoudig animaties aan uw componenten toevoegen en deze dynamischer maken.</p>

<b><p>* Tekst geschreven met behulp van een vertaler. Als je een fout vindt, laat het ons dan weten *</p></b>
    
    <div className='ads-container'>  
      {/*  реклама  */}
    </div>
     </div>
  )
}

export default NlReact_6;