import React from 'react'

function FrReact_2() {
  return (
    <div>
       <div className='ad-container'>  
          {/*  реклама  */}
        </div> 
      
      <h1>JSX</h1>

<p>JSX est une extension de syntaxe pour JavaScript qui vous permet d'écrire du code semblable à HTML dans vos fichiers JavaScript. Il est largement utilisé dans React pour définir la structure et la mise en page des composants d'interface utilisateur (UI).</p>    

<p>Voici un exemple de fonctionnement de JSX :</p>

<code>
  <p><span className='red'>import</span> React <span className='red'>from</span> <span className='blue1'>'react'</span>; </p>
  <p><span className='red'>function</span> <span className='blueviole'>MonComposant</span>() {'{'}</p>
  <p><span className='red'>return</span> {'('}</p>
  <p>{'<'}<span className='green'>div</span>{'>'}</p>
  <p>&nbsp;{'<'}<span className='green'>h1</span>{'>'}Bonjour, monde !{'</'}<span className='green'>h1</span>{'>'} </p>
  <p>&nbsp;{'<'}<span className='green'>p</span>{'>'}Ceci est un exemple de JSX simple.{'</'}<span className='green'>p</span>{'>'} </p>
  <p>{'</'}<span className='green'>div</span>{'>'}</p>
  <p>&nbsp;{'); '}</p>
  <p>{'}'}</p>
  <p><span className='red'>export default</span> MonComposant;</p> 
</code>

<p>Dans cet exemple, nous définissons un simple composant React en utilisant JSX. Le composant rend un élément <b>div</b> qui contient un élément <b>h1 et un p</b>. Remarquez que le code semblable à HTML est encadré de parenthèses et est défini à l'aide de la syntaxe JSX.</p>

<p>JSX vous permet de combiner facilement du code semblable à HTML avec de la logique JavaScript. Par exemple, vous pouvez utiliser des variables et des expressions JavaScript dans votre code JSX :</p>

<code>
  <p><span className='red'>import</span> React <span className='red'>from</span> <span className='blue1'>'react'</span>;</p>
  <p><span className='red'>function</span> <span className='blueviole'>MonComposant</span>() {'{'}</p>
  <p><span className='red'>const</span> name = <span className='blue1'>'John'</span>;  </p>
  <p><span className='red'>return</span> {'('}</p>
  <p>{'<'}<span className='green'>div</span>{'>'} </p>
  <p>&nbsp;{'<'}<span className='green'>h1</span>{'>'} Bonjour,{'{'}name{'}'} !{'</'}<span className='green'>h1</span>{'>'} </p>
  <p>&nbsp;{'<'}<span className='green'>p</span>{'>'}Ceci est un exemple de JSX simple.{'</'}<span className='green'>p</span>{'>'} </p>
  <p>{'</'}<span className='green'>div</span>{'>'} </p>
  <p>&nbsp;{");"}</p>
  <p>{" } "}</p>
  <p><span className='red'>export default</span> MonComposant;</p> 
</code>

<p>Dans cet exemple, nous utilisons une variable JavaScript <b>(name)</b> dans notre code JSX pour rendre dynamiquement un salut personnalisé.</p>

<p>JSX n'est pas nécessaire pour le développement React, mais il est fortement recommandé car il facilite beaucoup l'écriture et la gestion de composants d'interface utilisateur complexes. Lorsque vous écrivez du code JSX, il est transpilé en code JavaScript régulier qui peut être exécuté par le navigateur.</p>

<p>Il existe deux types principaux de composants React : les composants fonctionnels et les composants de classe.</p>

<p>Les composants fonctionnels sont définis comme des fonctions JavaScript qui renvoient un élément JSX. Ils sont généralement utilisés pour les composants d'interface utilisateur simples et de présentation qui n'ont pas d'état ni de méthodes de cycle de vie.</p>

<p>Voici un exemple d'un simple composant fonctionnel :</p>

<code>
  <p><span className='red'>import</span> React <span className='red'>from</span> <span className='blue1'>'react'</span>; </p>
  <p><span className='red'>function</span> <span className='blueviole'>MonComposant</span>(props) {'{'}</p>
  <p><span className='red'>return</span> {'('}</p>
  <p>{'<'}<span className='green'>div</span>{'>'}</p>
  <p>&nbsp;{'<'}<span className='green'>h1</span>{'>'}Bonjour,{'{'}props.<span className='blue'>name</span>{'}'} !{'</'}<span className='green'>h1</span>{'>'} </p>
  <p>&nbsp;{'<'}<span className='green'>p</span>{'>'}Ceci est un composant fonctionnel.{'</'}<span className='green'>p</span>{'>'} </p>
  <p>{'</'}<span className='green'>div</span>{'>'} </p>
  <p>&nbsp;{');'}</p>
  <p>{'}'}</p>
  <p><span className='red'>export default</span> MonComposant;</p>  
</code>

<p>Dans cet exemple, nous définissons un composant fonctionnel appelé <b>MonComposant</b> qui prend un objet <b>props</b> en argument. Le composant renvoie un élément JSX qui inclut un élément h1 avec un salut personnalisé et un élément <b>p</b> avec un message.</p>

<p>Les composants de classe, en revanche, sont définis comme des classes JavaScript qui étendent la classe <b>React.Component</b>. Ils sont utilisés pour les composants d'interface utilisateur plus complexes qui ont besoin de gérer l'état et ont des méthodes de cycle de vie.</p>

<p>Voici un exemple d'un simple composant de classe :</p>

<code>
  <p><span className='red'>import</span> React <span className='red'>from</span> <span className='blue1'>'react'</span>; </p>
  <p><span className='red'>class</span> MonComposant <span className='red'>extends</span> React.<span className='blue'>Component</span> {'{'}</p>
  <p><span className='blue'>constructor</span>(props) {'{'}</p>
  <p>super(props);</p>
  <p><span className='red'>this</span>.<span className='blue'>state</span> = {'{'}</p>
  <p><span className='blue'>count</span>: <span className='blue1'>0</span></p>
  <p>&nbsp;{'};'}</p>
  <p>{'}'}</p>
  <p><span className='blue'>render</span>() {'{'}</p>
  <p><span className='red'>return</span> {'('}</p>
  <p>{'<'}<span className='green'>div</span>{'>'}</p>
  <p>&nbsp;{'<'}<span className='green'>h1</span>{'>'}Compteur : {'{'}<span className='red'>this</span>.<span className='blue'>state</span>.<span className='blue'>count</span>{'}'}{'</'}<span className='green'>h1</span>{'>'}</p>
  <p>&nbsp;{'<'}<span className='green'>button</span> <span className='blue'>onClick</span> = {'{() => '}<span className='red'>this</span>.<span className='blue'>setState</span>{'({'} <span className='blue'>count</span>:<span className='red'>this</span>.<span className='blue'>state</span>.<span className='blue'>count</span> + <span className='blue1'>1</span> {'})}'}{'>'}Incrémenter{'</'}<span className='green'>button</span>{'>'}</p>
  <p>{'</'}<span className='green'>div</span>{'>'} </p>
  <p>&nbsp;&nbsp;{');'}</p>
  <p>&nbsp;{'}'}</p>
  <p>{'}'}</p>
  <p><span className='red'>export default</span> MonComposant;</p>  
</code>

<p>Dans cet exemple, nous définissons un composant de classe appelé <b>MonComposant</b> qui a une propriété d'état appelée <b>count</b> et une méthode de rendu qui renvoie un élément JSX avec un élément h1 qui affiche le compteur actuel et un <b>bouton</b> qui incrémente le compteur lorsqu'il est cliqué.</p>

<p>Les composants peuvent être composés et imbriqués pour créer des éléments d'interface utilisateur complexes. Ils peuvent également accepter des props en entrée, ce qui leur permet d'être personnalisés et réutilisés dans toute l'application.</p>

<p><b>{'<Component />'}</b> est une syntaxe utilisée en React pour rendre un composant. On l'appelle une balise auto-fermante ou une balise vide, et elle est équivalente à appeler le composant comme une fonction sans arguments.</p>

<p>Par exemple, supposons que nous ayons un simple composant appelé <b>MonComposant</b> :</p>

<code>
  <p><span className='red'>function</span> <span className='blueviole'>MonComposant</span>() {'{'}</p>
  <p><span className='red'>return</span> {'('}</p>
  <p>{'<'}<span className='green'>div</span>{'>'}</p>
  <p>&nbsp;{'<'}<span className='green'>h1</span>{'>'}Bonjour, monde !{'</'}<span className='green'>h1</span>{'>'} </p>
  <p>{'</'}<span className='green'>div</span>{'>'}</p>
  <p>&nbsp;{');'}</p>
  <p>{'}'}</p>
</code>

<p>Pour rendre ce composant, nous utiliserions la syntaxe <b>{'<MonComposant />'}</b> :</p>

<code>
  <p>ReactDOM.<span className='blue'>render</span>{'('} </p>
  <p>{'<'}<span className='blueviole'>MonComposant </span>{'/>'}, </p>
  <p>document.<span className='blue'>getElementById</span>(<span className='blue1'>'root'</span>)</p> 
  <p>{');'}</p>
</code>

<p>La syntaxe <b>{'<MonComposant />'}</b> crée une instance du composant MonComposant et la rend dans le DOM.</p>

<b><p>* Texte écrit avec l'aide d'un traducteur. Si vous trouvez une erreur, veuillez nous en informer *</p></b>
    <div className='ads-container'>  
  {/*  реклама  */}
</div> 
    </div>
  )
}

export default FrReact_2;