import React from 'react';

function ItReact_6() {
  return (
    <div>
      <div className='ad-container'>  
          {/*  реклама  */}
        </div>

<h1>React Refs</h1>

<p>In React, un <b>ref</b> è un modo per accedere al nodo DOM sottostante o all'istanza del componente React di un elemento renderizzato. Puoi utilizzare i riferimenti per ottenere l'accesso a determinate proprietà o metodi di un componente o per modificarne il comportamento.</p>

<p>Ecco un esempio di come creare un riferimento in React:</p>

<code>
  <p><span className='red'>import</span>  React, {'{ useRef }'} <span className='red'>from</span> <span className='blue1'>'react'</span>;  </p>

  <p><span className='red'>function</span> <span className='blueviole'>TextInput</span>{'() {'}</p>

  <p>&nbsp;<span className='red'>const</span> inputRef = <span className='blueviole'>useRef</span>(<span className='red'>null</span>); </p> 

  <p>&nbsp;<span className='red'>const</span> {'handleClick = () => {'}</p>

  <p>inputRef.<span className='blue'>current</span>.<span className='blue'>focus</span>();</p>

  <p>{' };'}</p>

  <p>&nbsp;<span className='red'>return</span> {'('}</p>

  <p>{'<'}<span className='green'>div</span>{'>'}</p>

  <p>&nbsp;{'<'}<span className='green'>input</span> <span className='blue'>type</span>=<span className='blue1'>"text"</span> <span className='blue'>ref</span>={'{inputRef} />'}</p>

  <p>&nbsp;{'<'}<span className='green'>button</span> <span className='blue'>onClick</span>={'{handleClick}>'}Focus Input{'</'}<span className='green'>button</span>{'>'}</p>

  <p>{'</'}<span className='green'>div</span>{'>'}</p>

  <p>&nbsp;{' );'}</p>

  <p>{'}'}</p>
</code>

<p>In questo esempio, creiamo un <b>ref</b> utilizzando l'hook <b>useRef</b>. Passiamo quindi <b>ref</b> all'elemento <b>input</b> utilizzando la prop <b>ref</b>.</p>

<p>Creiamo anche una funzione <b>handleClick</b> che utilizza la proprietà <b>current</b> di <b>ref</b> per chiamare il metodo <b>focus</b> sull'elemento <b>input</b>. Ciò ci consente di mettere a fuoco l'input quando l'utente fa clic sul pulsante "Messa a fuoco input".</p>

<p>Nel complesso, l'utilizzo di <b>refs</b> può essere un potente strumento per accedere e manipolare i componenti in React. Tuttavia, è importante usarli con parsimonia ed evitare di fare troppo affidamento sul codice imperativo, poiché ciò può rendere più difficile ragionare e mantenere il codice.</p>

<b>Event Emitter</b>

<p>Un emettitore di eventi è un modello di progettazione che consente agli oggetti di un programma di comunicare tra loro attivando e gestendo eventi. In termini semplici, un emettitore di eventi è un meccanismo per trasmettere e ricevere messaggi all'interno di un programma.</p>

<p>In JavaScript, la classe EventEmitter è un modulo integrato che fornisce un modo per implementare questo modello. Ecco un esempio di come utilizzare EventEmitter in Node.js:</p>

<code>
  <p><span className='red'>const</span> EventEmitter = <span className='blueviole'>require</span>(<span className='blue1'>'events'</span>); </p>

  <p><span className='red'>class</span> MyEmitter <span className='red'>extends</span> EventEmitter {"{}"}</p>

  <p><span className='red'>const</span> myEmitter = <span className='red'>new</span> MyEmitter(); </p>

  <p>myEmitter.<span className='blue'>on</span>{'('}<span className='blue1'>'event'</span>, (arg){" => {"}</p>

  <p>console.<span className='blue'>log</span>(<span className='blue1'>'Evento attivato con argomento:'</span>, arg); </p>

  <p>{"});"}</p>

  <p>myEmitter.<span className='blue'>emit</span>(<span className='blue1'>'event', 'Ciao mondo!'</span>); </p>
</code>

<p>In questo esempio, creiamo una classe <b>MyEmitter</b> personalizzata che estende la classe <b>EventEmitter</b>. Creiamo quindi un'istanza di questa classe e definiamo un ascoltatore per l'evento <b>event</b> utilizzando il metodo <b>on</b>. Infine, emettiamo l'evento <b>event</b> e passiamo un argomento di tipo stringa, che attiva l'ascoltatore e registra l'argomento sulla console.</p>

<p>Nel complesso, l'utilizzo di un emettitore di eventi può essere un modo utile per implementare un modello pub-sub nel codice, in cui parti diverse del programma possono comunicare tra loro senza dover essere strettamente accoppiate tra loro. Tuttavia, è importante utilizzare questo modello con giudizio e non fare troppo affidamento sugli eventi, poiché ciò potrebbe rendere più difficile la comprensione e il debug del codice.</p>

<p><b>In React</b>, puoi utilizzare un modello di emettitore di eventi per comunicare tra diversi componenti nella tua applicazione. Questo può essere utile per trasferire dati o attivare azioni tra componenti che non sono direttamente correlati tra loro.</p>

<p>Un modo per implementare un modello di emettitore di eventi in React è utilizzare una libreria di terze parti come <b>eventemitter3 o mitt</b>. Queste librerie forniscono una semplice API per la creazione e la sottoscrizione di eventi e possono essere utilizzate sia con componenti di classe che con componenti funzionali con hook.</p>

<p>Ecco un esempio di come utilizzare <b>eventemitter3</b> in un componente React:</p>

<code>
  <p><span className='red'>import</span> React, {"{ useEffect }"} <span className='red'>from</span> <span className='blue1'>'react'</span>; </p>

  <p><span className='red'>import</span> EventEmitter <span className='red'>from</span> <span className='blue1'>'eventemitter3'</span>;  </p>

  <p>&nbsp;<span className='red'>const</span>  emitter = <span className='red'>new</span> EventEmitter(); </p>

  <p><span className='red'>function</span> <span className='blueviole'>ComponentA</span>() {"{"}</p>

  <p>&nbsp;<span className='blueviole'>useEffect</span>{"(() => { "}</p>

  <p>&nbsp;&nbsp;emitter.<span className='blue'>emit</span>{'('}<span className='blue1'>'eventA'</span>, {'{'} <span className='blue'>data</span>: <span className='blue1'>'Un saluto da ComponentA'</span> {'})'}; </p>

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

<p>In questo esempio, creiamo un'istanza di <b>EventEmitter chiamata emitter</b>. In <b>ComponentA</b>, utilizziamo l'hook <b>useEffect</b> per emettere un evento chiamato <b>eventA</b> con alcuni dati. In <b>ComponentB</b>, utilizziamo l'hook <b>useEffect</b> per sottoscrivere l'evento <b>eventA</b> e definire una funzione di callback chiamata <b>handleEventA</b> che registra i dati sulla console.</p>

<p>Quando ComponentA è montato, emette l'evento eventA con alcuni dati. Quando ComponentB è montato, si iscrive all'evento eventA e inizia ad ascoltare qualsiasi evento con quel nome. Quando viene emesso eventA, viene chiamato handleEventA con i dati e registra il messaggio sulla console.</p>

<p>Nel complesso, utilizzare un modello di emettitore di eventi in React può essere un modo utile per implementare la comunicazione tra componenti che non sono direttamente correlati tra loro. Tuttavia, è importante utilizzare questo modello con giudizio e non fare troppo affidamento sugli eventi, poiché ciò potrebbe rendere più difficile la comprensione e il debug del codice.</p>

<h4>React Animation</h4>

<p>In React, puoi aggiungere animazioni ai tuoi componenti utilizzando una varietà di tecniche. Le animazioni possono rendere la tua interfaccia utente più coinvolgente e fornire feedback visivo all'utente quando le cose cambiano.</p>

<p>Un modo popolare per implementare le animazioni in React è utilizzare transizioni o animazioni CSS. Puoi aggiungere classi CSS ai tuoi componenti per attivare queste animazioni e utilizzare la prop <b>className</b> di React per attivare/disattivare le classi in base allo stato del componente.</p>

<p>Ecco un esempio di come utilizzare le transizioni CSS per animare un pulsante quando viene fatto clic:</p>

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

  <p>&nbsp;{"Cliccami! "}</p>

  <p>{"</"}<span className='green'>button</span>{">"}</p>

  <p>{"); "}</p>

  <p>{" }"}</p>
</code>

<p>In questo esempio, definiamo un componente chiamato <b>Button</b> che utilizza l'hook <b>useState</b> per tenere traccia se il pulsante è stato cliccato o meno. Quando si fa clic sul pulsante, impostiamo lo stato <b>isClicked</b> su <b>true</b>, che aggiunge la classe <b>cliccato</b> al pulsante. Utilizziamo quindi <b>setTimeout</b> per rimuovere la classe <b>cliccata</b> dopo 1 secondo, il che attiva la transizione allo stato originale.</p>

<p>Definiamo anche un file CSS chiamato <b>Button.css</b> che definisce gli stili per il pulsante e la <b>classe</b> cliccata:</p>

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

<p>In questo file CSS, definiamo gli stili per il pulsante e specifichiamo una proprietà <b>transizione</b> sulla classe <b>pulsante</b> per animare le modifiche al <b>colore-sfondo</b> proprietà. Definiamo anche la classe <b>cliccata</b>, che cambia il <b>colore di sfondo</b> in rosso quando applicato.</p>

<p>Un altro modo per implementare le animazioni in React è utilizzare una libreria di terze parti come <b>react-spring o framer-motion</b>. Queste librerie forniscono un'API più flessibile per la creazione di animazioni complesse e possono essere utili per casi d'uso più avanzati.</p>

<p><b>react-transition-group</b> è una libreria di terze parti per React che fornisce un modo per aggiungere facilmente transizioni e animazioni CSS ai tuoi componenti. Fornisce una serie di componenti e API per la gestione del ciclo di vita delle transizioni, incluso il montaggio e lo smontaggio di elementi, l'aggiunta e la rimozione di classi e il ritardo delle animazioni.</p>

<b>{'npm install react-transition-group'}</b>

<p>I componenti principali di <b>react-transition-group sono Transition, CSSTransition e TransitionGroup</b>. Ecco una breve panoramica di ciascun componente:</p>

<p>• <b>Transizione</b>: questo componente definisce il ciclo di vita di base di una transizione, inclusi gli stati di entrata, entrata, uscita ed uscita. Puoi utilizzare questo componente per attivare </p>

<p>• <b>CSSTransition</b>: questo componente estende il componente <b>Transition</b> e aggiunge il supporto per transizioni e animazioni CSS. Puoi specificare le classi CSS da applicare al tuo componente durante le diverse fasi della transizione, come <b>enter, enter-active, exit ed exit-active</b>.</p>

<p>• <b>TransitionGroup</b>: questo componente viene utilizzato per gestire un insieme di componenti <b>Transition o CSSTransition</b>. Tiene traccia del montaggio e dello smontaggio dei componenti e può applicare diversi effetti di transizione a ciascun componente. </p>

<p>Ecco un esempio di come utilizzare <b>react-transition-group</b> per aggiungere un'animazione in dissolvenza a un componente quando è montato:</p>

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

  <p>&nbsp;{'<'}<span className='green'>div</span> <span className='blue'>className</span>=<span className='blue1'>"content"</span>{'>'}Ciao mondo!{'</'}<span className='green'>div</span>{'>'}</p>

  <p>&nbsp;{"</"}<span className='blueviole'>CSSTransition</span>{">"}</p>

  <p>{" </> "}</p>

  <p>&nbsp;{"); "}</p>

  <p>{"} "}</p>
</code>

<p>In questo esempio, definiamo un componente chiamato <b>FadeIn</b> che utilizza l'hook <b>useState</b> per tenere traccia se il componente è stato montato o meno. Quando si fa clic sul pulsante, impostiamo lo stato <b>isMounted</b> su <b>true</b>, che attiva il componente <b>CSSTransition</b> per eseguire il rendering del <b>contenuto</b > div con un'animazione in dissolvenza. Definiamo anche un file CSS chiamato <b>FadeIn.css</b> che definisce gli stili e l'animazione per l'effetto di dissolvenza in entrata:</p>


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

<p>In questo file CSS definiamo le classi per le diverse fasi della transizione. Quando il componente entra, ha un'opacità di 0 (<b>fade-enter</b>) e passa a un'opacità di 1 su 300 ms (<b>fade-enter-active</b>). Quando il componente esce, ha un'opacità pari a 1 (<b>fade-exit</b>) e passa a un'opacità pari a 0 nell'arco di 300 ms (<b>fade-exit-active</b>).</p >

<p>Nel complesso, l'aggiunta di animazioni ai componenti React può rendere la tua interfaccia utente più coinvolgente e fornire feedback visivo all'utente. Utilizzando transizioni o animazioni CSS o una libreria di terze parti, puoi facilmente aggiungere animazioni ai tuoi componenti e renderli più dinamici.</p>
    
    <b><p>* Testo scritto con l'aiuto di un traduttore. Se trovi un errore, per favore, faccelo sapere *</p></b>
    
    <div className='ads-container'>  
      {/*  реклама  */}
    </div>
  </div>
  )
}

export default ItReact_6;