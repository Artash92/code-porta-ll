import React from 'react';

function FrReact_3() {
  return (
    <div>
       <div className='ad-container'>  
          {/*  реклама  */}
        </div> 

<h1>Événements React</h1>

<p>React offre un moyen de gérer les événements dans les composants, similaire à la gestion des événements en JavaScript classique. En React, vous pouvez ajouter des gestionnaires d'événements à n'importe quel élément JSX en utilisant la syntaxe <b>on[EventName]</b>.</p>

<p>Par exemple, disons que nous avons un bouton dans un composant React pour lequel nous voulons gérer un événement de clic :</p>

<code>
  <p><span className='red'>function</span> <span className='blueviole'>MonBouton</span>(props) {'{'} </p>
  <p><span className='red'>function</span> <span className='blueviole'>gérerClic</span>() {'{'}</p>
  <p><span className='blue'>{"console.log"}</span>(<span className='blue1'>'Bouton cliqué'</span>); </p>
  <p>{' }'}</p>
  <p><span className='red'>return</span> {'('}</p>
  <p>{'<'}<span className='green'>button</span> <span className='blue'>onClick</span>={'{gérerClic}'}{'>'}Cliquez-moi{'</'}<span className='green'>button</span>{'>'}  </p>
  <p>&nbsp;{');'}</p>
  <p>{'} '}</p>
</code>

<p>Dans cet exemple, nous définissons un composant <b>MonBouton</b> qui contient un élément de bouton avec une propriété <b>onClick</b> définie sur une fonction appelée <b>gérerClic</b>. Lorsque le bouton est cliqué, la fonction <b>gérerClic</b> sera appelée, et le message "Bouton cliqué" sera enregistré dans la console.</p>

<p>Vous pouvez également passer des arguments à la fonction gestionnaire d'événements en utilisant des fonctions fléchées. Par exemple, disons que nous avons une liste d'éléments que nous voulons afficher sous forme de boutons :</p>

<code>
  <p><span className='red'>function</span> <span className='blueviole'>ListeItems</span>(props) {'{'}</p>
  <p><span className='red'>const</span> items = props.<span className='blue'>items</span>; </p>
  <p><span className='red'>function</span> <span className='blueviole'>gérerClic</span>(item) {'{'}</p>
  <p><span className='blue'>{'console.log'}</span>(<span className='blue1'>`Item $</span><span className='blue1'>{'{item'}.<span className='blue'>id</span>{'}'}</span><span className='blue1'> cliqué`</span>); </p>
  <p>&nbsp;{'}'}</p>
  <p><span className='red'>const</span> listeBoutons = {'items'}.<span className='blue'>map</span>{'('}(item) {'=>'} </p>
  <p>{'<'}<span className='green'>button</span> <span className='blue1'>key</span>= {'{item'}.<span className='blue'>{'id}'}</span> <span className='blue'>onClick</span>={'{()'} {'=>'} <span className='blueviole'>gérerClic</span>(item){'}'}{'>'}</p>
  <p>{'{item'}.<span className='blue'>{'name}'}</span></p>
  <p>{'</'}<span className='green'>button</span>{'>'}</p>
  <p>{' ); '}</p>
  <p><span className='red'>return</span> {'('}</p>
  <p>{'<'}<span className='green'>div</span>{'>'}</p>
  <p>{'{listeBoutons} '}</p>
  <p>{'</'}<span className='green'>div</span>{'>'}</p>
  <p>&nbsp;{');'}</p>
  <p>{'} '}</p>
</code>

<p>Dans cet exemple, nous définissons un composant <b>ListeItems</b> qui prend une propriété <b>items</b>. Nous définissons une fonction <b>gérerClic</b> qui prend un argument <b>item</b>, qui sera utilisé pour enregistrer un message dans la console lorsque le bouton correspondant est cliqué.</p>

<p>Nous utilisons la méthode <b>map</b> pour créer un nouveau tableau d'éléments <b>{'<button>'}</b>, où chaque élément correspond à un élément dans la propriété <b>items</b>. Nous définissons la propriété <b>key</b> de chaque élément <b>{'<button> '}</b> sur l'<b>id</b> de l'élément correspondant, ce qui est une exigence dans React pour l'aider à optimiser les mises à jour. Nous utilisons également une fonction fléchée pour passer l'objet <b>item</b> à la fonction <b>gérerClic</b> lorsque le bouton est cliqué.</p>

<p>Ensuite, nous retournons un élément <b>{'<div>'}</b> qui contient le tableau <b>listeBoutons</b>.</p>

<h5>Événements React</h5>

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

<p><a href="https://react.dev/reference/react-dom/components/common#react-event-object" target='_blank' > 👉🏼 React https://react.dev/reference/react-dom/components/common#react-event-object</a> </p>

<b>État React dans les composants de classe</b>

<p>En React, l'état peut également être géré en utilisant des composants de classe. Les composants de classe sont des classes JavaScript qui étendent la classe <b>React.Component</b> et implémentent une méthode <b>render</b> qui renvoie l'interface utilisateur du composant.</p>

<p>Voici un exemple de composant de classe qui gère l'état :</p>

<code>
   <p><span className='red'>import</span> React,{"{ Component }"} <span className='red'>from</span> 'react'; </p>
   <p> <span className='red'>class</span> Compteur <span className='red'>extends</span> Component {'{'}</p>
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
   <p>{'<'}<span className='green'>p</span>{'>'}Vous avez cliqué {'{'}<span className='red'>this</span>.<span className='blue'>state</span>.<span className='blue'>count</span>{'}'} fois{'</'}<span className='green'>p</span>{'>'}</p>
   <p>{'<'}<span className='green'>button</span> <span className='blue'>onClick</span>={'{'}<span className='red'>this</span>.<span className='blue'>handleClick</span>{'}'}{'>'}Cliquez-moi{'</'}<span className='green'>button</span>{'>'}</p>
   <p>{'</'}<span className='green'>div</span>{'>'}</p>
   <p>&nbsp;&nbsp;{');'}</p>
   <p>&nbsp;{'}'}</p>
   <p>{'}'}</p>
</code>

<p>Dans cet exemple, nous définissons une classe <b>Compteur</b> qui étend <b>React.Component</b>. À l'intérieur de la classe, nous définissons un constructeur qui définit l'état initial du composant à un objet avec une propriété <b>count</b> de 0. Nous lions également la méthode <b>handleClick</b> à l'instance du composant en utilisant <b>bind</b>.</p>

<p>La méthode <b>handleClick</b> met à jour l'état du composant en appelant this.setState avec un nouvel objet qui a une propriété <b>count</b> incrémentée de 1.</p>

<p>La méthode <b>render</b> retourne l'interface utilisateur du composant, qui comprend un élément <b>{'<p>'}</b> qui affiche la valeur actuelle de <b>count</b>, et un bouton qui appelle <b>handleClick</b> lorsqu'il est cliqué.</p>

<p>Tout comme avec les composants fonctionnels, il est important de ne jamais modifier l'état directement. Au lieu de cela, utilisez toujours <b>this.setState</b> pour mettre à jour l'état.</p>

<p>Alors que les composants de classe sont toujours pris en charge en React, les composants fonctionnels sont généralement préférés, surtout avec l'introduction des hooks. Cependant, comprendre les composants de classe est toujours important pour maintenir et mettre à jour les anciens codes.</p>

<b>Cycle de vie React</b>

<p>En React, les composants ont un cycle de vie qui décrit les différentes étapes qu'ils traversent pendant leur existence. Comprendre le cycle de vie React est essentiel pour construire et maintenir des applications React robustes.</p>

<p>Voici un bref aperçu des méthodes de cycle de vie des composants React, regroupées par phase :</p>

<h4>Phase de montage :</h4>

<p><b>{'constructor()'}</b> : Appelé lorsque le composant est initialisé.</p>

<p><b>{'static getDerivedStateFromProps()'}</b> : Appelé lorsque le composant est initialisé, et à nouveau lorsqu'il reçoit de nouvelles props. Rarement utilisé.</p>

<p><b>{'render()'}</b> : Appelé chaque fois que le composant doit être rendu.</p>

<p><b>{'componentDidMount()'}</b> : Appelé après que le composant a été rendu pour la première fois.</p>

<h4>Phase de mise à jour :</h4>

<p><b>{'static getDerivedStateFromProps()'}</b> : Appelé lorsque le composant reçoit de nouvelles props.</p>

<p><b>{'shouldComponentUpdate()'}</b> : Appelé avant que le composant ne se réaffiche. Vous permet d'annuler la mise à jour.</p>

<p><b>{'render()'}</b> : Appelé chaque fois que le composant doit être rendu.</p>

<p><b>{'getSnapshotBeforeUpdate()'}</b> : Appelé avant que le composant ne soit mis à jour. Rarement utilisé.</p>

<p><b>{'componentDidUpdate()'}</b> : Appelé après que le composant a été mis à jour.</p>

<h4>Phase de démontage :</h4>

<p><b>{'componentWillUnmount()'}</b> : Appelé lorsque le composant est sur le point d'être supprimé du DOM.</p>

<p>Voici un exemple qui démontre les méthodes du cycle de vie :</p>

<code>
  <p><span className='red'>import</span> React,{"{ Component }"} <span className='red'>from</span> 'react'; </p>
  <p><span className='red'>class</span> DemoCycleDeVie <span className='red'>extends</span> Component {'{'}</p>
  <p><span className='blue'>constructor</span>(props) {'{'} </p>
  <p>{'super(props);'}</p>  
  <p><span className='red'>this</span>.<span className='blue'>state</span>= {'{'}<span className='blue'>count</span>: <span className='blue1'>0</span> {'}'};</p>
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
  <p><span className='blue'>handleClick</span> = () {'=>'} {'{'}</p>
  <p><span className='red'>this</span>.<span className='blue'>setState</span>{'({'} <span className='blue'>count</span>: <span className='red'>this</span>.<span className='blue'>state</span>.<span className='blue'>count</span> + <span className='blue1'>1</span> {'})'};</p>
  <p>{'}; '}</p>
  <p><span className='blue'>render</span>() {'{'} </p>
  <p>{"console"}.<span className='blue'>log</span>(<span className='blue1'>'render'</span>);</p>
  <p><span className='red'>return</span> {'('}</p>
  <p>{'<'}<span className='green'>div</span>{'>'}</p>
  <p>{'<'}<span className='green'>p</span>{'>'}Vous avez cliqué {'{'}<span className='red'>this</span>.<span className='blue'>state</span>.<span className='blue'>count</span>{'}'} fois{'</'}<span className='green'>p</span>{'>'}</p>
  <p>{'<'}<span className='green'>button</span> <span className='blue'>onClick</span>={'{'}<span className='red'>this</span>.<span className='blue'>handleClick</span>{'}>'}Cliquez-moi{'</'}<span className='green'>button</span>{'>'}</p>
  <p>{'</'}<span className='green'>div</span>{'>'}</p>
  <p>&nbsp;&nbsp;{');'}</p>
  <p>&nbsp;{'}'}</p>
  <p>{'}'}</p>
</code>

<p>Dans cet exemple, nous définissons une classe <b>DemoCycleDeVie</b> qui journalise des messages dans la console pendant chaque phase du cycle de vie du composant. Nous définissons également une méthode <b>handleClick</b> qui met à jour l'état du composant.</p>

<p>Lorsque le composant est monté pour la première fois, les méthodes suivantes sont appelées, dans l'ordre : <b>constructor, getDerivedStateFromProps, render et componentDidMount</b>. Chaque fois que l'état du composant change, les méthodes <b>shouldComponentUpdate, render et componentDidUpdate</b> sont appelées, dans cet ordre.</p>

<p>Lorsque le composant est démonté, la méthode <b>componentWillUnmount</b> est appelée.</p>

<p>Il est important de comprendre le cycle de vie des composants React afin de pouvoir optimiser vos composants et éviter les problèmes courants tels que les fuites de mémoire et les boucles infinies. Mais ne vous inquiétez pas si cela semble accablant au début – avec la pratique, vous deviendrez plus à l'aise avec.</p>
   
<b><p>* Texte écrit avec l'aide d'un traducteur. Si vous trouvez une erreur, veuillez nous en informer *</p></b>
    <div className='ads-container'>  
  {/*  реклама  */}
</div> 
   </div>
  )
}

export default FrReact_3;