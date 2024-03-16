import React from 'react';

function NlReact_3() {
  return (
    <div>
      <div className='ad-container'>  
          {/*  реклама  */}
        </div>
        
      <h1>React Gebeurtenissen</h1>

<p>React biedt een manier om gebeurtenissen in componenten te verwerken, vergelijkbaar met het verwerken van gebeurtenissen in vanilla JavaScript. In React kun je gebeurtenishandlers toevoegen aan elk JSX-element met behulp van de on<b>[EventName]</b>-syntax</p>

<p>Bijvoorbeeld, laten we zeggen dat we een knop hebben in een React-component waarvoor we een klikgebeurtenis willen behandelen:</p>

<code>
  <p><span className='red'>function</span> <span className='blueviole'>MyButton</span>(props) {'{'} </p>

  <p><span className='red'>function</span> <span className='blueviole'>handleClick</span>() {'{'}</p>

  <p><span className='blue'>{"console.log"}</span>(<span className='blue1'>'Button clicked'</span>); </p>

  <p>{' }'}</p>

  <p><span className='red'>return</span> {'('}</p>

  <p>{'<'}<span className='green'>button</span> <span className='blue'>onClick</span>={'{handleClick}'}{'>'}Click me{'</'}<span className='green'>button</span>{'>'}  </p>

  <p>&nbsp;{');'}</p>

  <p>{'} '}</p>
</code>

<p>In dit voorbeeld definiëren we een <b>MyButton</b>-component die een knopelement bevat met een <b>onClick</b>-prop ingesteld op een functie genaamd <b>handleClick</b>. Wanneer er op de knop wordt geklikt, wordt de <b>handleClick</b>-functie aangeroepen en wordt de boodschap "Knop geklikt" naar de console gelogd.</p>

<p>Je kunt ook argumenten doorgeven aan de gebeurtenishandlerfunctie met behulp van pijlfuncties. Laten we bijvoorbeeld zeggen dat we een lijst met items hebben die we als knoppen willen weergeven:</p>

<code>
 <p><span className='red'>function</span> <span className='blueviole'>ItemList</span>(props) {'{'}</p>

<p><span className='red'>const</span> items = props.<span className='blue'>items</span>; </p>

<p><span className='red'>function</span> <span className='blueviole'>handleClick</span>(item) {'{'}</p>

<p><span className='blue'>{'console.log'}</span>(<span className='blue1'>`Item $</span><span className='blue1'>{'{item'}.<span className='blue'>id</span>{'}'}</span><span className='blue1'> geklikt`</span>); </p>

<p>&nbsp;{'}'}</p>

<p><span className='red'>const</span> buttonList = {'items'}.<span className='blue'>map</span>{'('}(item) {'=>'} </p>

<p>{'<'}<span className='green'>button</span> <span className='blue1'>key</span>= {'{item'}.<span className='blue'>{'id}'}</span> <span className='blue'>onClick</span>={'{()'} {'=>'} <span className='blueviole'>handleClick</span>(item){'}'}{'>'}</p>

<p>{'{item'}.<span className='blue'>{'name}'}</span></p>

<p>{'</'}<span className='green'>button</span>{'>'}</p>

<p>{' ); '}</p>

<p><span className='red'>return</span> {'('}</p>

<p>{'<'}<span className='green'>div</span>{'>'}</p>

<p>{'{buttonList} '}</p>

<p>{'</'}<span className='green'>div</span>{'>'}</p>

<p>&nbsp;{');'}</p>

<p>{'} '}</p>
</code>

<p>In dit voorbeeld definiëren we een <b>ItemList</b>-component die een <b>items</b>-prop gebruikt. We definiëren een <b>handleClick</b>-functie die een <b>item</b>-argument gebruikt, die zal worden gebruikt om een bericht naar de console te loggen wanneer de overeenkomstige knop wordt geklikt.</p>

<p>We gebruiken de <b>map</b>-methode om een nieuwe array van <b>{'<button>'}</b>-elementen te maken, waarbij elk element overeenkomt met een item in de <b>items</b>-prop. We stellen de <b>key</b>-prop van elk <b>{'<button> '}</b>-element in op de <b>id</b> van het overeenkomstige item, wat een vereiste is in React om het optimaliseren van updates te helpen. We gebruiken ook een pijlfunctie om het <b>item</b>-object door te geven aan de <b>handleClick</b>-functie wanneer er op de knop wordt geklikt.</p>

<p>Vervolgens retourneren we een <b>{'<div>'}</b>-element dat de <b>buttonList</b>-array bevat.</p>

<h5>React Events</h5>

    <p className='blue1'>onKeyDown</p>

    <p className='blue1'>onKeyPress </p>

    <p className='blue1'>onKeyUp</p>

    <p className='blue1'>onFocus</p>

    <p className='blue1'>onBlur</p>

    <p className='blue1'>onChange</p>

    <p className='blue1'>onInput</p>

    <p className='blue1'>onInvalid </p>

    <p className='blue1'>onSubmit</p>

    <p className='blue1'>onClick</p>

    <p className='blue1'>onContextMenu</p>

    <p className='blue1'>onDoubleClick</p>

    <p className='blue1'>onDrag</p>

    <p className='blue1'>onDragEnd</p>

    <p className='blue1'>onDragEnter</p>

    <p className='blue1'>onDragExit</p>

    <p className='blue1'>onDragLeave</p>

    <p> <a href="https://react.dev/reference/react-dom/components/common#react-event-object" target='_blank' > 👉🏼 React https://react.dev/reference/react-dom/components/common#react-event-object</a> </p>

    <b>React state in class components</b>

<p>In React kan de state ook beheerd worden met behulp van class components. Class components zijn JavaScript-klassen die de <b>React.Component</b>-klasse uitbreiden en een <b>render</b>-methode implementeren die de UI van het component retourneert.</p>

<p>Hier is een voorbeeld van een class component die de state beheert:</p>

<code>
   <p><span className='red'>import</span> React,{"{ Component }"} <span className='red'>from</span> 'react'; </p>

   <p> <span className='red'>class</span> Counter <span className='red'>extends</span> Component {'{'}</p>

   <p><span className='blue'>constructor</span>(props) {'{'}</p>

   <p>super (props);</p>

   <p><span className='red'>this</span>.<span className='blue'>state</span> = {'{'}<span className='blue'>count</span>: <span className='blue1'>0</span> {'}'};</p>

   <p><span className='red'>this</span>.<span className='blue'>handleClick</span> = <span className='red'>this</span>.<span className='blue'>handleClick</span>.<span className='blue'>bind</span>(<span className='red'>this</span>);</p>

   <p>&nbsp;{'}'}</p>

   <p><span className='blue'>handleClick</span>() {'{'}</p>

   <p><span className='red'>this</span>.<span className='blue'>setState</span>{'({'} <span className='blue'>count</span>: <span className='red'>this</span>.<span className='blue'>state</span>.<span className='blue'>count</span> + <span className='blue1'>1</span>{' })'}; </p>

   <p>{'}'}</p>

   <p><span className='blue'>render</span>() {'{'}</p>

   <p><span className='red'>return</span> {'('}</p>

   <p>{'<'}<span className='green'>div</span>{'>'}</p>

   <p>{'<'}<span className='green'>p</span>{'>'}Je hebt {'{'}<span className='red'>this</span>.<span className='blue'>state</span>.<span className='blue'>count</span>{'}'} keer geklikt{'</'}<span className='green'>p</span>{'>'}</p>

   <p>{'<'}<span className='green'>button</span> <span className='blue'>onClick</span>={'{'}<span className='red'>this</span>.<span className='blue'>handleClick</span>{'}'}{'>'}Klik hier{'</'}<span className='green'>button</span>{'>'}</p>

   <p>{'</'}<span className='green'>div</span>{'>'}</p>

   <p>&nbsp;&nbsp;{');'}</p>

   <p>&nbsp;{'}'}</p>

   <p>{'}'}</p>
</code>

<p>In dit voorbeeld definiëren we een <b>Counter</b>-klasse die <b>React.Component</b> uitbreidt. Binnen de klasse definiëren we een constructor die de initiële staat van het component instelt op een object met een <b>count</b>-eigenschap van 0. We binden ook de <b>handleClick</b>-methode aan de componentinstantie met behulp van <b>bind</b>.</p>

<p>De <b>handleClick</b>-methode bijwerkt de staat van het component door this.setState aan te roepen met een nieuw object dat een <b>count</b>-eigenschap heeft die met 1 is verhoogd.</p>

<p>De <b>render</b>-methode retourneert de UI van het component, die een <b>{'<p>'}</b>-element bevat dat de huidige waarde van <b>count</b> weergeeft, en een knop die <b>handleClick</b> aanroept wanneer erop wordt geklikt.</p>

<p>Net als bij functionele componenten is het belangrijk om de staat nooit rechtstreeks te wijzigen. Gebruik in plaats daarvan altijd <b>this.setState</b> om de staat bij te werken.</p>

<p>Hoewel class components nog steeds worden ondersteund in React, hebben functionele componenten over het algemeen de voorkeur, vooral met de introductie van hooks. Het begrijpen van class components is echter nog steeds belangrijk voor het onderhouden en bijwerken van oudere codebases.</p>

<b>React levenscyclus</b>

<p>In React hebben componenten een levenscyclus die de verschillende fasen beschrijft die ze doorlopen tijdens hun bestaan. Het begrijpen van de React-levenscyclus is essentieel voor het bouwen en onderhouden van robuuste React-toepassingen.</p>

<p>Hier is een kort overzicht van de React-componentlevenscyclusmethoden, gegroepeerd per fase:</p>

<h4>Montagefase:</h4>

<p><b>{'constructor()'}</b>: Wordt aangeroepen wanneer het component wordt geïnitialiseerd.</p>

<p><b>{'static getDerivedStateFromProps()'}</b>: Wordt aangeroepen wanneer het component wordt geïnitialiseerd, en opnieuw wanneer het nieuwe props ontvangt. Zelden gebruikt.</p>

<p><b>{'render()'}</b>: Wordt telkens aangeroepen wanneer het component moet worden gerenderd.</p>

<p><b>{'componentDidMount()'}</b>: Wordt aangeroepen nadat het component voor de eerste keer is gerenderd.</p>

<h4>Updatefase:</h4>

<p><b>{'static getDerivedStateFromProps()'}</b>: Wordt aangeroepen wanneer het component nieuwe props ontvangt.</p>

<p><b>{'shouldComponentUpdate()'}</b>: Wordt aangeroepen voordat het component opnieuw gerenderd wordt. Hiermee kun je de update annuleren.</p>

<p><b>{'render()'}</b>: Wordt telkens aangeroepen wanneer het component moet worden gerenderd.</p>

<p><b>{'getSnapshotBeforeUpdate()'}</b>: Wordt aangeroepen voordat het component wordt bijgewerkt. Zelden gebruikt.</p>

<p><b>{'componentDidUpdate()'}</b>: Wordt aangeroepen nadat het component is bijgewerkt.</p>

<h4>Demontagefase:</h4>

<p><b>{'componentWillUnmount()'}</b>: Wordt aangeroepen wanneer het component verwijderd gaat worden uit de DOM.</p>

<p>Hier is een voorbeeld dat de levenscyclusmethoden demonstreert:</p>

<code>
  <p><span className='red'>import</span> React,{"{ Component }"} <span className='red'>from</span> 'react'; </p>
  
  <p><span className='red'>class</span> LifecycleDemo <span className='red'>extends</span> Component {'{'}</p>

  <p><span className='blue'>constructor</span>(props) {'{'} </p>

  <p>{'super(props);'}</p>  

  <p><span className='red'>{'this'}</span>.<span className='blue'>state</span>= {'{'}<span className='blue'>count</span>: <span className='blue1'>0</span> {'}'};</p>

  <p>{"console"}.<span className='blue'>log</span>(<span className='blue1'>'constructor'</span>);</p>

  <p>{'}'}</p>

  <p><span className='red'>static</span> <span className='blue'>getDerivedStateFromProps</span>(props, state) {'{'}</p>

  <p>{"console"}.<span className='blue'>log</span>('<span className='blue1'>getDerivedStateFromProps</span>');</p>

  <p><span className='red'>return null</span>;</p>

  <p>{'}'}</p>

  <p><span className='blue'>componentDidMount</span>() {'{'}</p>

  <p>{"console"}.<span className='blue'>log</span>(<span className='blue1'>'componentDidMount'</span>); </p>

  <p>{'}'}</p>

  <p><span className='blue'>shouldComponentUpdate</span>(nextProps, nextState) {'{'}</p>

  <p>{"console"}.<span className='blue'>log</span>(<span className='blue1'>'shouldComponentUpdate'</span>);</p>

  <p><span className='red'>return</span> <span className='blue'>true</span>;</p>

  <p>{'}'}</p>

  <p><span className='blue'>getSnapshotBeforeUpdate</span>(prevProps, prevState) {'{'}</p>

  <p>{"console"}.<span className='blue'>log</span>(<span className='blue1'>'getSnapshotBeforeUpdate'</span>);</p>

  <p><span className='red'>return null</span>;</p>

  <p>{'}'}</p>

  <p><span className='blue'>componentDidUpdate</span>(prevProps, prevState, snapshot) {'{'}</p>

  <p>{"console"}.<span className='blue'>log</span>(<span className='blue1'>'componentDidUpdate'</span>); </p>

  <p>{'}'}</p>

  <p><span className='blue'>componentWillUnmount</span>() {'{'} </p>

  <p>{"console"}.<span className='blue'>log</span>(<span className='blue1'>'componentWillUnmount'</span>); </p>

  <p>{'}'}</p>

  <p> <span className='blue'>handleClick</span> = () {'=>'} {'{'}</p>

  <p><span className='red'>this</span>.<span className='blue'>setState</span>{'({'} <span className='blue'>count</span>: <span className='red'>this</span>.<span className='blue'>state</span>.<span className='blue'>count</span> + <span className='blue1'>1</span> {'})'};</p>

  <p>{'}; '}</p>

  <p><span className='blue'>render</span>() {'{'} </p>

  <p>{"console"}.<span className='blue'>log</span>(<span className='blue1'>'render'</span>);</p>

  <p><span className='red'>return</span> {'('}</p>

  <p>{'<'}<span className='green'>div</span>{'>'}</p>

  <p>{'<'}<span className='green'>p</span>{'>'}Je hebt {'{'}<span className='red'>this</span>.<span className='blue'>state</span>.<span className='blue'>count</span>{'}'} keer geklikt{'</'}<span className='green'>p</span>{'>'}</p>

  <p>{'<'}<span className='green'>button</span> <span className='blue'>onClick</span>={'{'}<span className='red'>this</span>.<span className='blue'>handleClick</span>{'}>'}Klik hier{'</'}<span className='green'>button</span>{'>'}</p>
  
  <p>{'</'}<span className='green'>div</span>{'>'}</p>

  <p>&nbsp;&nbsp;{');'}</p>

  <p>&nbsp;{'}'}</p>

  <p>{'}'}</p>
</code>

<p>In dit voorbeeld definiëren we een <b>LifecycleDemo</b>-klasse die berichten naar de console logt tijdens elke fase van de levenscyclus van het component. We definiëren ook een <b>handleClick</b>-methode die de staat van het component bijwerkt.</p>

<p>Wanneer het component voor de eerste keer wordt gemonteerd, worden de volgende methoden achtereenvolgens aangeroepen: <b>constructor, getDerivedStateFromProps, render en componentDidMount</b>. Telkens wanneer de staat van het component verandert, worden de methoden <b>shouldComponentUpdate, render en componentDidUpdate</b> aangeroepen, in die volgorde.</p>

<p>Wanneer het component wordt verwijderd, wordt de methode <b>componentWillUnmount</b> aangeroepen.</p>

<p>Het is belangrijk om de levenscyclus van het React-component te begrijpen, zodat je je componenten kunt optimaliseren en veelvoorkomende valkuilen zoals geheugenlekken en oneindige lussen kunt vermijden. Maar maak je geen zorgen als het in het begin overweldigend lijkt - met oefening zul je er meer vertrouwd mee worden.</p>

<b><p>* Tekst geschreven met behulp van een vertaler. Als je een fout vindt, laat het ons dan weten *</p></b>
    
    <div className='ads-container'>  
      {/*  реклама  */}
    </div>
     </div>
  )
}

export default NlReact_3;