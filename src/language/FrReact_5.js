import React from 'react'

function FrReact_5() {
  return (
    <div>
      <div className='ad-container'>  
          {/*  реклама  */}
        </div>
        
      <h1>React Router DOM</h1>

<p>React Router Dom est une bibliothèque populaire utilisée dans les applications React pour gérer le routage côté client. Elle permet aux développeurs de créer différents itinéraires pour différents composants et de les rendre en fonction de l'URL actuelle. Cela offre une expérience utilisateur plus intuitive et fluide, car les utilisateurs peuvent naviguer entre différentes pages et composants sans avoir à recharger toute la page.</p>

<p>React Router Dom est basé sur la bibliothèque React Router et spécifiquement conçu pour une utilisation dans le navigateur. Il utilise l'API d'historique du navigateur pour manipuler l'URL et maintenir l'interface utilisateur synchronisée avec l'URL actuelle. Il offre également une approche déclarative pour définir des itinéraires, ce qui facilite la gestion des applications complexes avec de multiples itinéraires et des composants imbriqués.</p>

<p>Certaines des principales caractéristiques de React Router Dom incluent :</p>

<p> • Routage déclaratif : Vous pouvez définir vos itinéraires sous forme de composants JSX, ce qui rend facile à comprendre et à gérer la logique de routage.</p>

<p> • Itinéraires imbriqués : Vous pouvez imbriquer des itinéraires les uns dans les autres, ce qui permet des scénarios de routage plus complexes.</p>

<p> • Paramètres d'itinéraire : Vous pouvez définir des paramètres dynamiques dans vos itinéraires, ce qui vous permet de transmettre des données entre les composants en fonction de l'URL actuelle.</p>

<p> • Gestion de l'historique : React Router Dom fournit des outils pour gérer l'historique du navigateur, ce qui vous permet de naviguer de manière programmée entre les pages et de gérer la navigation avant/arrière.</p>

<p>Voici un exemple simple de la manière dont React Router Dom pourrait être utilisé dans une application React : <b>(ancienne version) v5</b></p>

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

<p>Dans cet exemple, nous importons les composants nécessaires de React Router Dom (en particulier, <b>BrowserRouter, Route, and Link</b>). Nous définissons ensuite deux composants simples pour nos pages d'accueil et à propos.</p>

<p>À l'intérieur du composant <b>App</b>, nous enveloppons tout dans un composant <b>Router</b>, qui fournit le contexte de routage pour le reste de l'application. Ensuite, nous définissons une barre de navigation simple en utilisant le composant <b>Link</b> pour naviguer entre nos deux pages.</p>

<p>Enfin, nous définissons deux composants <b>Route</b> qui rendent les composants <b>Home et About</b> en fonction de l'URL actuelle.</p>

<p>React Router Dom 6.4 est la dernière version de la bibliothèque, sortie en février 2022. Certaines des nouvelles fonctionnalités de cette version incluent :</p>

<p>La dernière version (v6) apporte des modifications à certaines API et collections, je peux donc choisir un nouvel exemple utilisant React Router Dom version 6.4 :</p>

<p>Voici un exemple utilisant React Router Dom version 6.4 :</p>

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

<p>Dans cet exemple, nous utilisons les mêmes composants principaux de React Router Dom (<b>tels que BrowserRouter, Route, Link</b>), mais certains d'entre eux ont une syntaxe légèrement différente.</p>

<p>Par exemple, nous utilisons maintenant le composant <b>Routes</b> au lieu de <b>Switch</b> pour regrouper plusieurs itinéraires. Chaque itinéraire est maintenant représenté par un élément <b>Route</b> avec les props <b>path et element</b>. La prop <b>path</b> définit le motif d'URL pour l'itinéraire, et la prop <b>element</b> est le composant à rendre lorsque l'itinéraire correspond.</p>

<p>Dans cet exemple, nous avons également ajouté un composant <b>NotFound</b> qui s'affiche lorsque l'utilisateur arrive sur une page inexistante.</p>

<p>Globallement, React Router Dom 6 offre une manière plus flexible et pratique de gérer le routage dans les applications React.</p>    

<p>1. Si vous utilisez <b>npm</b>, ouvrez votre terminal et exécutez la commande suivante :</p>

<b>npm install react-router-dom</b>

<p>2. Si vous utilisez <b>yarn</b>, ouvrez votre terminal et exécutez la commande suivante :</p>

<b>yarn add react-router-dom</b>

<p>Après l'installation, vous pouvez importer les composants nécessaires du package <b>react-router-dom</b>, comme je l'ai montré dans les exemples ci-dessus.</p>

<p> Pour plus d'informations sur React Router, veuillez visiter leur site officiel : <a href="https://reactrouter.com/" target='_blank' > 👉🏼  https://reactrouter.com/.</a></p>    

<p>Sur le site, vous trouverez un guide complet sur l'utilisation de React Router, comprenant :</p>    

<p>• Une vue d'ensemble de React Router et de ses concepts clés</p> 

<p>• Instructions d'installation et de configuration</p>

<p>• Exemples de différents cas d'utilisation et scénarios</p>

<p>• Documentation de l'API pour chacun des composants principaux et des utilitaires</p>

<p>• Sujets avancés tels que le rendu côté serveur, la division de code et les itinéraires imbriqués</p>

<p>En plus de la documentation, vous trouverez également plusieurs ressources utiles telles qu'un forum communautaire, un dépôt GitHub pour les rapports de bugs et les demandes de fonctionnalités, et une collection de projets et plugins associés.</p>

  <b><p>* Texte écrit avec l'aide d'un traducteur. Si vous trouvez une erreur, veuillez nous en informer *</p></b>
  
    <div className='ads-container'>  
  {/*  реклама  */}
  </div>   
</div>
  )
}

export default FrReact_5;