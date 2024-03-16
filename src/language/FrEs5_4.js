import React from 'react';

 function FrEs5_4() {
  return (
    <div>
      <div className='ad-container'>  
          {/*  реклама  */}
        </div>
        
        <h3>Récursion</h3>

<p>La récursion est une technique de programmation où une fonction s'appelle elle-même jusqu'à ce qu'elle atteigne un cas de base. Elle est souvent utilisée pour résoudre des problèmes qui peuvent être décomposés en sous-problèmes plus petits et similaires. En JavaScript ES5, la récursion peut être utilisée pour parcourir un arbre ou une structure imbriquée, pour effectuer certains calculs ou pour générer toutes les combinaisons possibles d'un ensemble d'éléments. Voici un exemple d'une fonction qui utilise la récursion pour calculer le factoriel d'un nombre donné:</p>

<code>
    <p><span className='blueviole'>function</span> <span className='blue'>factorial</span>(<span className='blue'>num</span>) {'{'} </p>
    <p><span className='blueviole'>if</span> (num {'<='}<span className='blue'> 1</span>) {'{'}</p>
    <p><span className='blueviole'>return</span> <span className='blue'>1</span>;</p>
    <p>{'}'}<span className='blueviole'> else</span> {'{'}</p>
    <p><span className='blueviole'>return</span> num * factorial(num - <span className='blue'>1</span>); </p>
    <p>{' }'}</p>
    <p>{'}'}</p>
    <p>{'console.log'}(factorial(<span className='blue'>5</span>)); <span className='darkgreen'>// Résultat: 120</span></p>
</code>
    
    <p>Dans cet exemple, la fonction factorial() s'appelle elle-même avec un nombre plus petit jusqu'à ce qu'elle atteigne le cas de base de {'num <='}, moment auquel elle retourne 1. Le résultat final est calculé en multipliant toutes les valeurs retournées ensemble.</p>
    
    <p>Il est important de noter que la récursion peut consommer beaucoup de mémoire, surtout pour des entrées importantes, il est donc important de concevoir vos fonctions récursives avec soin et de vous assurer qu'elles ont un cas de base pour éviter les boucles infinies.</p>
    
    <h3>Objet</h3>
    
    <p>Un objet est une structure de données en JavaScript qui vous permet de stocker des collections de données et de fonctionnalités liées. C'est un concept clé en JavaScript et il est largement utilisé dans tout le langage. Les objets sont définis à l'aide d'accolades {} et se composent de paires clé-valeur, où la clé est une chaîne et la valeur peut être de n'importe quel type de données, y compris d'autres objets ou fonctions.</p>
    
    <p>Les objets sont utilisés en JavaScript pour une grande variété de purposes, notamment pour créer des structures de données complexes, organiser le code et fournir un moyen d'encapsuler des données et des comportements associés. Ils sont une partie importante de la programmation orientée objet en JavaScript et sont un bloc de construction fondamental pour bon nombre des fonctionnalités avancées et des bibliothèques du langage.</p>
    
    <p><b>Exemple</b></p>
  
  <code>
    <p className='darkgreen'>// Création d'un objet</p>
    <p><span className='blueviole'>var</span> car = {'{'} </p>
    <p>make: <span className='red'>"Toyota"</span>,</p>
    <p>model: <span className='red'>"Camry"</span>,</p>
    <p>year: <span className='blue'>2021</span>,</p>
    <p>start: <span className='blueviole'>function</span>() {'{'} </p>
    <p>{'console.log'}(<span className='red'>"Démarrage de la voiture..."</span>);</p>
    <p>{'}'}</p>
    <p>{'}'}</p>
    <p><span className='darkgreen'>// Accéder aux propriétés de l'objet</span></p>
    <p>{'console.log(car.make);'} <span className='darkgreen'>// Toyota</span></p>
    <p>{'console.log(car.year);'}<span className='darkgreen'> // 2021</span> </p>
    <p><span className='darkgreen'>// Appel des méthodes de l'objet</span></p>
    <p>{'car.start(); '}<span className='darkgreen'>// Démarrage de la voiture...</span></p>
  </code>
   
  <h3>Propriétés d'un objet</h3>

<code>
  <p><span className='blueviole'>var</span> <span className='blue'>personne</span> = {'{'} </p>
  <p>nom: <span className='red'>"John"</span>,</p>
  <p>âge: <span className='blue'>30</span>,</p>
  <p>genre: <span className='red'>"masculin"</span></p>
  <p>{'};'}</p>
  <p>personne.email = <span className='red'>"john@example.com"</span>;</p>
  <p>{'console.log(personne.nom);'} <span className='darkgreen'>// John</span></p>
  <p>{'console.log(personne.email);'} <span className='darkgreen'>// john@example.com</span></p>
</code>

<p><b>Méthodes d'un objet</b></p>

<code>
  <p><span className='blueviole'>var</span> <span className='blue'>calculatrice</span> = {'{'}</p>
  <p>additionner: <span className='blueviole'>function</span>(<span className='blue'>a</span>, <span className='blue'>b</span>) {'{'} </p>
  <p><span className='blueviole'>return</span> a + b; {'}'},</p>
  <p>soustraire: <span className='blueviole'>function</span>(<span className='blue'>a</span>,<span className='blue'>b</span>) {'{'} </p>
  <p><span className='blueviole'>return</span> a - b;</p>
  <p>{'}'}</p>
  <p>{'};'}</p>
  <p>{'console.log'}(calculatrice.additionner(<span className='blue'>5</span>, <span className='blue'>3</span>)); <span className='darkgreen'>// 8</span></p>
  <p>{'console.log'}(calculatrice.soustraire(<span className='blue'>5</span>, <span className='blue'>3</span>)); <span className='darkgreen'>// 2</span></p>
</code>

<p><b>Type orienté objet - tableau</b></p>

<p className='darkgreen'>// Création d'un tableau</p>

<code>
  <p><span className='blueviole'>var</span> <span className='blue'>couleurs</span> = [<span className='red'>"rouge", "vert", "bleu"</span>]; <span className='darkgreen'>// Accès aux éléments du tableau</span></p>
  <p>{'console.log'}(couleurs[<span className='blue'>0</span>]); <span className='darkgreen'>// rouge</span></p>
  <p>{'console.log'}(couleurs[<span className='blue'>2</span>]); <span className='darkgreen'>// bleu</span></p>
  <p><span className='darkgreen'>// Ajout d'un nouvel élément au tableau </span></p>
  <p>{'couleurs.push'}(<span className='red'>"jaune"</span>); </p>
  <p><span className='darkgreen'>// Parcours du tableau</span></p>
  <p><span className='blueviole'>for</span>(<span className='blueviole'>var</span> <span className='blue'>i</span> = <span className='blue'>0</span>; i {'<'} couleurs.length; i++) {'{'}</p>
  <p>{' console.log(couleurs[i]);'}</p>
  <p>{'}'}</p>
</code>

<p><b>Propriétés et méthodes d'une fonction</b></p>

<code>
  <p><span className='blueviole'>function</span> <span className='blue'>salutation</span>(<span className='blue'>nom</span>) {'{'}</p>
  <p>{'console.log'}(<span className='red'>"Bonjour "</span> + nom);</p>
  <p>{'}'}</p>
  <p>{'console.log(salutation.length);'} <span className='darkgreen'>// 1 (le nombre d'arguments attendus)</span></p>
  <p><span className='darkgreen'>// Ajout d'une nouvelle propriété à la fonction</span></p>
  <p>salutation.langue = <span className='red'>"Anglais"</span>;</p>
  <p><span className='darkgreen'>// Accès aux propriétés de la fonction</span></p>
  <p>{'console.log(salutation.langue);'} <span className='darkgreen'>// Anglais</span></p>
  <p><span className='darkgreen'>// Invocation de la fonction salutation("John"); // Bonjour John</span></p>
</code>

<h3>this</h3>

<p>En JavaScript ES5, this est un mot-clé qui fait référence à l'objet actuel ou au contexte dans lequel le code est exécuté. Il peut faire référence à différents objets en fonction de la manière et de l'endroit où il est utilisé. Lorsque this est utilisé à l'intérieur d'une fonction appelée comme méthode d'un objet, il fait référence à l'objet lui-même. Par exemple:</p>

<code>
  <p><span className='blueviole'>var</span> <span className='blue'>monObjet</span> = {'{'}</p>
  <p>nom: <span className='red'>"John"</span>,</p>
  <p>direBonjour: <span className='blueviole'>function</span>() {'{'}</p>
  <p>{'console.log'}(<span className='red'>"Bonjour, je m'appelle "</span> + <span className='blueviole'>this</span>.nom);</p>
  <p>{' }'}</p>
  <p>{'};'}</p>
  <p>{'monObjet.direBonjour();'} <span className='darkgreen'>// Sortie : "Bonjour, je m'appelle John"</span></p>
</code>

<p>Dans cet exemple, this fait référence à l'objet monObjet car direBonjour() est appelé comme méthode de monObjet.</p>

<p>Cependant, lorsque this est utilisé à l'intérieur d'une fonction régulière (c'est-à-dire non appelée comme méthode d'un objet), il fait référence à l'objet global (window dans le navigateur ou global dans Node.js) par défaut. Par exemple:</p>

<code>
  <p><span className='blueviole'>function</span> <span className='blue'>direBonjour</span>() {'{'}</p>
  <p>{'console.log'}(<span className='red'>"Bonjour, je m'appelle "</span> + <span className='blueviole'>this</span>.nom);</p>
  <p>{'}'}</p>
  <p><span className='blueviole'>var</span> <span className='blue'>nom</span> = <span className='red'>"John"</span>;</p>
  <p>{'direBonjour();'} <span className='darkgreen'>// Sortie : "Bonjour, je m'appelle undefined"</span></p>
</code>

<p>Dans ce cas, this fait référence à l'objet global car direBonjour() n'est pas appelé comme méthode d'un objet. Comme l'objet global n'a pas de propriété nom, this.nom est undefined. Il est important de noter que la valeur de this peut être définie explicitement en utilisant des méthodes telles que call(), apply() et bind(). Ces méthodes vous permettent d'appeler une fonction avec une valeur this spécifique, quel que soit son mode d'appel.</p>

<h3>Fonction en tant qu'objet</h3>

<code>
  <p><span className='blueviole'>var</span> <span className='blue'>utilisateur</span> = {'{'}</p>
  <p>nom: <span className='red'>"John"</span>,</p>
  <p>âge:<span className='blue'>20</span></p>
  <p>{'};'}</p>
  <p><span className='blueviole'>function </span><span className='blue'> foo</span>(<span className='blue'>a</span>,<span className='blue'>b</span>) {'{'}</p>
  <p>{'console.log'}(<span className='blueviole'>this</span>.nom);</p>
  <p>{'console.log(a + b);'}</p>
  <p>{'}'}</p>
  <p><span className='darkgreen'>//Utilisation de la méthode call pour définir this sur l'objet utilisateur foo.call(utilisateur, 3, 5);</span></p>
  <p><span className='darkgreen'>// Accès à la propriété length de la fonction {'console.log(foo.length);'}</span></p>
</code>

<h3>Arguments de l'objet</h3>

<p>L'objet arguments est une variable locale disponible dans toutes les fonctions. Il contient une liste semblable à un tableau des arguments passés à la fonction. Voici un exemple d'utilisation de l'objet arguments :</p>

<code>
  <p> <span className='blueviole'>function</span> <span className='blue'>somme</span>() {'{'} </p>
  <p><span className='blueviole'>var</span> <span className='blue'>resultat</span> = <span className='blue'>0</span>;</p>
  <p><span className='blueviole'>for</span> (<span className='blueviole'>var</span><span className='blue'> i</span> = <span className='blue'>0</span>; i {'<'} arguments.length; i++) {'{'} </p>
  <p>{'resultat += arguments[i];'}</p>
  <p>{'}'}</p>
  <p><span className='blueviole'>return</span> resultat;</p>
  <p>{'}'}</p>
  <p><span className='blueviole'>var</span> <span className='blue'>total</span> = somme(<span className='blue'>1, 2, 3, 4</span>);</p>
  <p>{'console.log(total);'} <span className='darkgreen'>// Sortie : 10</span></p>
</code>

<p>Dans l'exemple ci-dessus, la fonction somme accepte un nombre quelconque d'arguments, et l'objet arguments est utilisé pour parcourir chaque argument et les additionner. La fonction retourne ensuite la somme totale.</p>

<p>Un autre exemple d'utilisation de l'objet arguments consiste à créer une fonction qui concatène tous les arguments passés en argument</p>

<code>
  <p><span className='blueviole'>function</span> <span className='blue'>concaténer</span>() {'{'}</p>
  <p> <span className='blueviole'>var </span><span className='blue'>resultat</span> = <span className='red'>" "</span>;</p>
  <p><span className='blueviole'>for</span> (<span className='blueviole'>var</span> <span className='blue'>i</span> = <span className='blue'>0</span>; i {'<'} arguments.length; i++) {'{'}</p>
  <p>{'resultat += arguments[i];'}</p>
  <p>{'}'}</p>
  <p><span className='blueviole'>return</span> resultat;</p>
  <p>{'}'}</p>
  <p><span className='blueviole'>var</span> <span className='blue'>chaine</span> = concaténer(<span className='red'>"Bonjour", " ", "monde", "!"</span>); </p>
  <p>{'console.log(chaine);'}<span className='darkgreen'>// Sortie : "Bonjour monde!"</span></p>
</code>

<p>Dans cet exemple, la fonction concaténer accepte un nombre quelconque d'arguments et les concatène dans une seule chaîne, qui est ensuite retournée.</p>
   
   
<b><p>* Texte écrit avec l'aide d'un traducteur. Si vous trouvez une erreur, veuillez nous en informer *</p></b>
    <div className='ads-container'>  
  {/*  реклама  */}
  </div>
    </div>
  )
}



export default FrEs5_4;