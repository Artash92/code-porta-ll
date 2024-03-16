import React from 'react';

function NlReact_7() {
  return (
    <div>
      <div className='ad-container'>  
          {/*  реклама  */}
      </div>
      
      <h1>Redux</h1>

<p>Redux is een bibliotheek voor het beheer van de staat voor JavaScript-toepassingen. Het helpt bij het beheren van de staat van uw toepassing op een voorspelbare manier, waardoor het gemakkelijker wordt om de gegevensstroom in uw toepassing te begrijpen. Met Redux slaat u de staat van uw toepassing op in een enkel object dat de store wordt genoemd, en u gebruikt acties en reducers om die staat te wijzigen.</p>

<p>Zo werkt het: Wanneer u de staat van uw toepassing wilt wijzigen, verzendt u een actie. De actie is een eenvoudig JavaScript-object dat beschrijft wat er is gebeurd in uw toepassing. U kunt bijvoorbeeld een actie verzenden om een nieuw item aan een lijst toe te voegen, of om de profielinformatie van een gebruiker bij te werken.</p>

<p>Reducers zijn functies die de huidige staat van uw toepassing en een actie aannemen, en een nieuwe staat retourneren. Reducers zijn pure functies, wat betekent dat ze geen neveneffecten hebben en ze altijd dezelfde output retourneren voor een gegeven input.</p>

<p>React-Redux is een bibliotheek die Redux integreert met React. Het biedt een manier om uw React-componenten te verbinden met de Redux-store, zodat u toegang heeft tot en de staat van uw toepassing kunt wijzigen vanuit uw componenten. React-Redux biedt twee belangrijke componenten: Provider en connect.</p>

<p>De Provider-component wordt gebruikt om uw gehele React-toepassing in te pakken. Het neemt een store-object als een prop en maakt die store beschikbaar voor alle componenten in uw toepassing.</p>

<p>1. Installeer de benodigde pakketten:</p>

<b>npm install redux react-redux</b>

<p>2. Maak een Redux-store aan:</p>

<code>
  <p><span className='red'>import</span> {'{ createStore }'} <span className='red'>from</span> <span className='blue1'>'redux'</span>;</p>
  
  <p><span className='red'>import</span> rootReducer <span className='red'>from</span> <span className='blue1'>'./reducers'</span>; </p>

  <p><span className='red'>const</span> store = <span className='blueviole'>createStore</span>(rootReducer); </p>
</code>

<p>3. Maak Redux-acties aan:</p>

<code>
  <p><span className='red'>export const</span> {"increment = () => {"}</p>
 
  <p>&nbsp;<span className='red'>return</span>  {"{ "}</p>

  <p>&nbsp;&nbsp;<span className='blue'>type</span> : <span className='blue1'>'INCREMENT'</span></p>

  <p>&nbsp;{" } "}</p>

  <p>{" } "}</p>

  <p><span className='red'>export const</span>  {"decrement = () => { "}</p>

  <p>&nbsp;<span className='red'>return</span>  {" { "}</p>

  <p>&nbsp;&nbsp;<span className='blue'>type</span> : <span className='blue1'>'DECREMENT'</span></p>

  <p>&nbsp;{" } "}</p>

  <p>{" } "}</p>
</code>

<p>4. Maak Redux-reducers:</p>

   <code>
    <p><span className='red'>const</span> counterReducer = {'('}state = <span className='blue1'>0</span>, {"action) => { "}</p>

    <p>&nbsp;<span className='red'>switch</span> (action.<span className='blue'>type</span>) {"{ "}</p>

    <p>&nbsp;&nbsp;<span className='red'>case</span> <span className='blue1'>'INCREMENT'</span>:</p>

    <p>&nbsp;&nbsp;&nbsp;<span className='red'>return</span>  state + <span className='blue1'>1</span>;</p>

    <p>&nbsp;&nbsp;<span className='red'>case</span> <span className='blue1'>'DECREMENT'</span>:</p>

    <p>&nbsp;&nbsp;&nbsp;<span className='red'>return</span> state - <span className='blue1'>1</span>; </p>

    <p>&nbsp;&nbsp;<span className='red'>default</span>: </p>

    <p>&nbsp;&nbsp;&nbsp;<span className='red'>return</span> state; </p>

    <p>&nbsp;{" }"}</p>

    <p>{"} "}</p>

    <p><span className='red'>export default</span> counterReducer;</p>
  </code>

   <p>5. Verbind Redux met een React-component met behulp van de <b>connect</b>-functie van React-Redux:</p>

  <code>
    <p><span className='red'>import</span> {'{ connect }'} <span className='red'>from</span> <span className='blue1'>'react-redux'</span>; </p>

    <p><span className='red'>import</span>  {'{ increment, decrement }'} <span className='red'>from</span> <span className='blue1'>'./actions'</span>;</p>

    <p>&nbsp;<span className='red'>const</span> {"Counter = (props) => { "}</p>

    <p>&nbsp;<span className='red'>return</span> {'('}</p>

    <p>{'<'}<span className='green'>div</span>{'>'}</p>

    <p>&nbsp;&nbsp;{'<'}<span className='green'>h1</span>{'>{'}props.<span className='blue'>count</span>{'}</'}<span className='green'>h1</span>{'>'}</p>

    <p>&nbsp;&nbsp;{'<'}<span className='green'>button</span> <span className='blue'>onClick</span>={'{'}props.<span className='blue'>increment</span>{'}>'}+{'</'}<span className='green'>button</span>{'>'}</p>

    <p>&nbsp;&nbsp;{'<'}<span className='green'>button</span> <span className='blue'>onClick</span>={'{'}props.<span className='blue'>decrement</span>{'}>-</'}<span className='green'>button</span>{'>'}</p>

    <p>{"</"}<span className='green'>div</span>{">"}</p>

    <p>&nbsp;{");"}</p>

    <p>{"} "}</p>

    <p>&nbsp;<span className='red'>const</span> {"mapStateToProps = (state) => {"}</p>

    <p>&nbsp;<span className='red'>return</span> {"{ "}</p>

    <p>&nbsp;&nbsp;&nbsp;<span className='blue'>count</span>: state.<span className='blue'>counter</span></p>

    <p>&nbsp;{"} "}</p>

    <p>{"} "}</p>

    <p>&nbsp;<span className='red'>const</span> {"mapDispatchToProps = (dispatch) => { "}</p>

    <p>&nbsp;<span className='red'>return</span> {"{ "}</p>

    <p>&nbsp;&nbsp;&nbsp;<span className='blue'>increment</span>: {"() =>"} <span className='blueviole'>dispatch</span>(<span className='blueviole'>increment</span>()), </p>

    <p>&nbsp;&nbsp;&nbsp;<span className='blue'>decrement</span>: {"() =>"} <span className='blueviole'>dispatch</span>(<span className='blueviole'>decrement</span>())</p>

    <p>&nbsp;{"}"}</p>

    <p>{"}"}</p>

    <p><span className='red'>export default</span> <span className='blueviole'>connect</span>(mapStateToProps, mapDispatchToProps)(Counter); </p>
  </code>

<p>6. Wikkel je app in met het <b>Provider</b>-component om de Redux-store beschikbaar te maken voor alle componenten:</p>

<code> 
  <p><span className='red'>import</span> {"{ Provider } "} <span className='red'>from</span> <span className='blue1'>'react-redux'</span>;</p>

  <p><span className='red'>import</span> store <span className='red'>from</span> <span className='blue1'>'./store'</span>;</p>

  <p><span className='red'>import</span> Counter <span className='red'>from</span> <span className='blue1'>'./Counter'</span>; </p>

  <p>&nbsp;<span className='red'>const</span> {"App = () => { "}</p>

  <p>&nbsp;<span className='red'>return</span> {"("}</p>

  <p>{"<"}<span className='blueviole'>Provider</span> <span className='blue'>store</span>={"{store}> "}</p>

  <p>&nbsp;&nbsp;{"<"}<span className='blueviole'>Counter</span> {"/>"}</p>

  <p>{"</"}<span className='blueviole'>Provider</span>{">"}</p>

  <p>&nbsp;{");"}</p>

  <p>{"}"}</p>

  <p><span className='red'>export default</span> App;</p>
</code>

<p>Dit is een basisvoorbeeld van hoe je Redux en React-Redux kunt gebruiken in een React-toepassing. Houd in gedachten dat dit slechts het topje van de ijsberg is en dat er veel meer te leren valt over Redux en zijn ecosysteem.</p>

<p>Er zijn nog een paar dingen om in gedachten te houden bij het gebruik van Redux in een React-toepassing:</p>

<p>1. Redux-middleware: Middleware is een manier om Redux-acties te wijzigen of te onderscheppen voordat ze de reducers bereiken. Middleware kan worden gebruikt voor taken zoals logging, asynchrone verzoeken en meer. Enkele populaire middleware-opties voor Redux zijn <b>redux-thunk, redux-saga en redux-observable</b>.</p>

<p>2. Redux-devtools: Redux-devtools is een browserextensie die een handige UI biedt voor het debuggen en inspecteren van de Redux-store. Het stelt je in staat om acties en statuswijzigingen te inspecteren en biedt ook functionaliteit voor debuggen met time-travel.</p>

<p>3. Redux-selectors: Selectors zijn functies die specifieke gegevens uit de Redux-store halen. Ze kunnen worden gebruikt om afgeleide gegevens te berekenen, gegevens te filteren en te transformeren, en meer. Selectors kunnen je componenten helpen vereenvoudigen door ze precies de gegevens te geven die ze nodig hebben, zonder zich zorgen te hoeven maken over de vorm van de store.</p>

<p>4. Redux-ducks: Ducks is een voorstel voor het organiseren van Redux-code in modules die alle gerelateerde actietypen, actie-creators en reducers bevatten voor een specifieke functie of domein. Deze aanpak kan je codebase helpen vereenvoudigen en gemakkelijker te onderhouden maken.</p>

<p>Dit zijn slechts een paar van de aanvullende onderwerpen die je mogelijk wilt verkennen bij het werken met Redux. Er zijn veel andere bibliotheken en tools beschikbaar in het Redux-ecosysteem, dus het is belangrijk om de tijd te nemen om er meer over te leren en te beslissen welke het beste bij je project passen.</p>

<b><p>* Tekst geschreven met behulp van een vertaler. Als je een fout vindt, laat het ons dan weten *</p></b>
    
    <div className='ads-container'>  
      {/*  реклама  */}
    </div>
      </div>
  )
}

export default NlReact_7;