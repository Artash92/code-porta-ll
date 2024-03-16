import React from 'react'

function FrReact_6() {
  return (
    <div>
      <div className='ad-container'>  
          {/*  реклама  */}
        </div>

      <h1>Références React</h1>

<p>En React, un <b>ref</b> est un moyen d'accéder au nœud DOM sous-jacent ou à l'instance de composant React d'un élément rendu. Vous pouvez utiliser des refs pour accéder à certaines propriétés ou méthodes d'un composant, ou pour modifier son comportement.</p>

<p>Voici un exemple de création d'une ref en React :</p>

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

<p>Dans cet exemple, nous créons une <b>ref</b> en utilisant le hook <b>useRef</b>. Nous passons ensuite la <b>ref</b> à l'élément <b>input</b> en utilisant la prop <b>ref</b>.</p>

<p>Nous créons également une fonction <b>handleClick</b> qui utilise la propriété <b>current</b> de la <b>ref</b> pour appeler la méthode <b>focus</b> sur l'élément <b>input</b>. Cela nous permet de mettre le focus sur l'entrée lorsque l'utilisateur clique sur le bouton "Focus Input".</p>

<p> Globalement, l'utilisation des <b>refs</b> peut être un outil puissant pour accéder et manipuler des composants en React. Cependant, il est important de les utiliser avec parcimonie et d'éviter de s'appuyer trop fortement sur le code impératif, car cela peut rendre votre code plus difficile à comprendre et à maintenir.</p>

<b>Émetteur d'événements</b>

<p>Un émetteur d'événements est un modèle de conception qui permet aux objets dans un programme de communiquer entre eux en déclenchant et en gérant des événements. En termes simples, un émetteur d'événements est un mécanisme pour diffuser et recevoir des messages au sein d'un programme.</p>

<p>En JavaScript, la classe EventEmitter est un module intégré qui fournit un moyen de mettre en œuvre ce modèle. Voici un exemple de l'utilisation de EventEmitter dans Node.js :</p>

<code>
  <p><span className='red'>const</span> EventEmitter = <span className='blueviole'>require</span>(<span className='blue1'>'events'</span>); </p>
  <p><span className='red'>class</span> MyEmitter <span className='red'>extends</span> EventEmitter {"{}"}</p>
  <p><span className='red'>const</span> myEmitter = <span className='red'>new</span> MyEmitter(); </p>
  <p>myEmitter.<span className='blue'>on</span>{'('}<span className='blue1'>'event'</span>, (arg){" => {"}</p>
  <p> console.<span className='blue'>log</span>(<span className='blue1'>'Événement déclenché avec l'argument :'</span>, arg); </p>
  <p>{"});"}</p>
  <p> myEmitter.<span className='blue'>emit</span>(<span className='blue1'>'event', 'Bonjour, monde!'</span>); </p>
</code>

<p>Dans cet exemple, nous créons une classe personnalisée <b>MyEmitter</b> qui étend la classe <b>EventEmitter</b>. Nous créons ensuite une instance de cette classe et définissons un écouteur pour l'événement <b>event</b> en utilisant la méthode <b>on</b>. Enfin, nous émettons l'événement <b>event</b> et passons un argument de chaîne, ce qui déclenche l'écouteur et enregistre l'argument dans la console.</p>

<p> Globalement, l'utilisation d'un émetteur d'événements peut être un moyen utile de mettre en œuvre un modèle pub-sub dans votre code, où différentes parties de votre programme peuvent communiquer entre elles sans avoir besoin d'être étroitement couplées. Cependant, il est important d'utiliser ce modèle avec parcimonie et de ne pas trop s'appuyer sur les événements, car cela peut rendre votre code plus difficile à comprendre et à déboguer.</p>

<p><b>En React</b>, vous pouvez utiliser un modèle d'émetteur d'événements pour communiquer entre différents composants de votre application. Cela peut être utile pour transmettre des données ou déclencher des actions entre des composants qui ne sont pas directement liés les uns aux autres.</p>

<p>Une façon de mettre en œuvre un modèle d'émetteur d'événements en React est d'utiliser une bibliothèque tierce telle que <b>eventemitter3 ou mitt</b>. Ces bibliothèques fournissent une API simple pour créer et souscrire à des événements, et peuvent être utilisées avec des composants de classe et des composants fonctionnels avec des hooks.</p>

<p>Voici un exemple de l'utilisation de <b>eventemitter3</b> dans un composant React :</p>

<code>
  <p><span className='red'>import</span> React, {"{ useEffect }"} <span className='red'>from</span> <span className='blue1'>'react'</span>; </p>

  <p><span className='red'>import</span> EventEmitter <span className='red'>from</span> <span className='blue1'>'eventemitter3'</span>;  </p>

  <p>&nbsp;<span className='red'>const</span>  emitter = <span className='red'>new</span> EventEmitter(); </p>

  <p><span className='red'>function</span> <span className='blueviole'>ComponentA</span>() {"{"}</p>

  <p>&nbsp;<span className='blueviole'>useEffect</span>{"(() => { "}</p>

  <p>&nbsp;&nbsp;emitter.<span className='blue'>emit</span>{'('}<span className='blue1'>'eventA'</span>, {'{'} <span className='blue'>data</span>: <span className='blue1'>'Bonjour de ComponentA'</span> {'})'}; </p>

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

<p>Dans cet exemple, nous créons une instance de <b>EventEmitter appelée émetteur</b>. Dans <b>ComposantA</b>, nous utilisons le hook <b>useEffect</b> pour émettre un événement appelé <b>eventA</b> avec des données. Dans <b>ComposantB</b>, nous utilisons le hook <b>useEffect</b> pour nous abonner à l'événement <b>eventA</b>, et définissons une fonction de rappel appelée <b>handleEventA</b> qui enregistre les données dans la console.</p>

<p> Lorsque ComposantA est monté, il émet l'événementA avec des données. Lorsque ComposantB est monté, il s'abonne à l'événementA et commence à écouter tous les événements avec ce nom. Lorsque eventA est émis, handleEventA est appelé avec les données, et il enregistre le message dans la console.</p>

<p> Globalement, l'utilisation d'un modèle d'émetteur d'événements en React peut être un moyen utile de mettre en œuvre la communication entre des composants qui ne sont pas directement liés les uns aux autres. Cependant, il est important d'utiliser ce modèle avec parcimonie et de ne pas trop s'appuyer sur les événements, car cela peut rendre votre code plus difficile à comprendre et à déboguer.</p>

<h4>Animation React</h4>

<p>En React, vous pouvez ajouter des animations à vos composants en utilisant une variété de techniques. Les animations peuvent rendre votre interface utilisateur plus attrayante et fournir des retours visuels à l'utilisateur lorsque les choses changent.</p>

<p>Une façon populaire de mettre en œuvre des animations en React est d'utiliser des transitions ou des animations CSS. Vous pouvez ajouter des classes CSS à vos composants pour déclencher ces animations, et utiliser la prop <b>className</b> de React pour basculer les classes en fonction de l'état du composant.</p>

<p>Voici un exemple de l'utilisation de transitions CSS pour animer un bouton lorsqu'il est cliqué :</p>

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

  <p>&nbsp;{"Cliquez-moi ! "}</p>

  <p>{"</"}<span className='green'>button</span>{">"}</p>

  <p>{"); "}</p>

  <p>{" }"}</p>
</code>

<p>Dans cet exemple, nous définissons un composant appelé <b>Bouton</b> qui utilise le hook <b>useState</b> pour suivre si le bouton a été cliqué ou non. Lorsque le bouton est cliqué, nous définissons l'état <b>isClicked</b> sur <b>true</b>, ce qui ajoute la classe <b>clicked</b> au bouton. Nous utilisons ensuite <b>setTimeout</b> pour supprimer la classe <b>clicked</b> après 1 seconde, ce qui déclenche la transition vers l'état d'origine.</p>

<p>Nous définissons également un fichier CSS appelé <b>Button.css</b> qui définit les styles pour le bouton et la classe <b>clicked</b> :</p>

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

<p>Dans ce fichier CSS, nous définissons les styles pour le bouton et spécifions une propriété <b>transition</b> sur la classe <b>button</b> pour animer les changements de la propriété <b>background-color</b>. Nous définissons également la classe <b>clicked</b>, qui change la couleur de fond en rouge lorsqu'elle est appliquée.</p>

<p>Une autre façon de mettre en œuvre des animations en React est d'utiliser une bibliothèque tierce telle que <b>react-spring ou framer-motion</b>. Ces bibliothèques fournissent une API plus flexible pour créer des animations complexes et peuvent être utiles pour des cas d'utilisation plus avancés.</p>

<p><b>react-transition-group</b> est une bibliothèque tierce pour React qui permet d'ajouter facilement des transitions et des animations CSS à vos composants. Elle fournit un ensemble de composants et d'API pour gérer le cycle de vie des transitions, y compris le montage et le démontage des éléments, l'ajout et la suppression de classes, et le retard des animations.</p>

<b>{'npm install react-transition-group'}</b>

<p>Les composants de base de <b>react-transition-group sont Transition, CSSTransition et TransitionGroup</b>. Voici un bref aperçu de chaque composant :</p>

<p>• <b>Transition</b> : Ce composant définit le cycle de vie de base d'une transition, y compris les états d'entrée, d'entrée, de sortie et de sortie. Vous pouvez utiliser ce composant pour déclencher </p>

<p>• <b>CSSTransition</b> : Ce composant étend le composant <b>Transition</b> et ajoute la prise en charge des transitions et des animations CSS. Vous pouvez spécifier les classes CSS à appliquer à votre composant pendant les différentes étapes de la transition, telles que <b>entrer, entrer-active, sortir et sortir-active</b>.</p>

<p>• <b>TransitionGroup</b> : Ce composant est utilisé pour gérer un ensemble de composants <b>Transition ou CSSTransition</b>. Il suit le montage et le démontage des composants et peut appliquer différents effets de transition à chaque composant. </p>

<p>Voici un exemple de l'utilisation de <b>react-transition-group</b> pour ajouter une animation de fondu à un composant lorsqu'il est monté :</p>


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

  <p>&nbsp;{'<'}<span className='green'>div</span> <span className='blue'>className</span>=<span className='blue1'>"content"</span>{'>'}Bonjour le monde!{'</'}<span className='green'>div</span>{'>'}</p>

  <p>&nbsp;{"</"}<span className='blueviole'>CSSTransition</span>{">"}</p>

  <p>{" </> "}</p>

  <p>&nbsp;{"); "}</p>

  <p>{"} "}</p>
</code>

<p>Dans cet exemple, nous définissons un composant appelé <b>FadeIn</b> qui utilise le hook <b>useState</b> pour suivre si le composant a été monté ou non. Lorsque le bouton est cliqué, nous définissons l'état <b>isMounted</b> sur <b>true</b>, ce qui rend le composant visible. Nous utilisons ensuite <b>CSSTransition</b> pour appliquer une classe CSS appelée <b>fade</b> au composant, ce qui déclenche une animation de fondu définie dans le fichier CSS <b>FadeIn.css</b>.</p>

<p>Nous définissons également un fichier CSS appelé <b>FadeIn.css</b> qui définit les styles pour le composant et l'animation de fondu :</p>

<code>
  <p>{'.fade-enter {'}</p>
  <p>&nbsp;&nbsp;<span className='blue'>opacity</span>: <span className='blue1'>0</span>; </p>
  <p>{'}'}</p>
  <p>{'.fade-enter-active {'}</p>
  <p>&nbsp;&nbsp;<span className='blue'>opacity</span>: <span className='blue1'>1</span>; </p>
  <p>&nbsp;&nbsp;<span className='blue'>transition</span>: <span className='blue1'>opacity 300ms</span>; </p>
  <p>{'}'}</p>
  <p>{'.fade-exit {'}</p>
  <p>&nbsp;&nbsp;<span className='blue'>opacity</span>: <span className='blue1'>1</span>; </p>
  <p>{'}'}</p>
  <p>{'.fade-exit-active {'}</p>
  <p>&nbsp;&nbsp;<span className='blue'>opacity</span>: <span className='blue1'>0</span>; </p>
  <p>&nbsp;&nbsp;<span className='blue'>transition</span>: <span className='blue1'>opacity 300ms</span>; </p>
  <p>{'}'}</p>
  <p>{'.box {'}</p>
  <p>&nbsp;&nbsp;<span className='blue'>background-color</span>: <span className='blue1'>blue</span>; </p>
  <p>&nbsp;&nbsp;<span className='blue'>color</span>: <span className='blue1'>white</span>; </p>
  <p>&nbsp;&nbsp;<span className='blue'>padding</span>: 20<span className='blue1'>px</span>; </p>
  <p>&nbsp;&nbsp;<span className='blue'>border-radius</span>: 5<span className='blue1'>px</span>; </p>
  <p>{'}'}</p>
</code>

<p>Dans ce fichier CSS, nous définissons les styles pour le composant et les classes d'animation <b>fade-enter, fade-enter-active, fade-exit</b> et <b>fade-exit-active</b>. Ces classes sont utilisées par <b>CSSTransition</b> pour déclencher des animations de fondu lorsque le composant est monté ou démonté.</p>

<p>En utilisant <b>react-transition-group</b>, vous pouvez facilement ajouter des transitions et des animations CSS à vos composants React, ce qui peut rendre votre interface utilisateur plus attrayante et fournir une expérience utilisateur plus fluide. Cette bibliothèque fournit un moyen simple et flexible de gérer les transitions et les animations dans votre application React.</p>
  
<b><p>* Texte écrit avec l'aide d'un traducteur. Si vous trouvez une erreur, veuillez nous en informer *</p></b>
  
  <div className='ads-container'>  
{/*  реклама  */}
</div> 
    </div>
  )
}

export default FrReact_6;