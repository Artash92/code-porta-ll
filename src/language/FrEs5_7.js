import React from 'react';

function FrEs5_7() {
  return (
    <div>
      <div className='ad-container'>  
          {/*  реклама  */}
        </div>
        
        <h1>Programmation orientée objet, ou OOP</h1>

<p>La programmation orientée objet, ou OOP, est un paradigme de programmation qui met l'accent sur les objets, les classes et l'encapsulation. En JavaScript ES5, l'OOP est mise en œuvre grâce à l'utilisation de fonctions constructeurs et de prototypes.</p>

<p>Une fonction constructeur est une fonction spéciale utilisée pour créer et initialiser des objets. Les fonctions constructeurs sont définies à l'aide du mot-clé function, et leurs noms commencent généralement par une lettre majuscule pour les distinguer des fonctions ordinaires. Le mot-clé this est utilisé à l'intérieur de la fonction constructeur pour faire référence à l'objet en cours de création. Voici un exemple:</p>

<code>
  <p><span className='blueviole'>function</span> <span className='blue'>Personne</span>(<span className='blue'>nom, âge</span>) {'{'}</p>

  <p><span className='blueviole'>this</span>.nom = nom;</p>

  <p><span className='blueviole'>this</span>.âge = âge;</p>

  <p>{'}'}</p>

  <p><span className='blueviole'>var</span> <span className='blue'>personne1</span> = <span className='blueviole'>new</span> Personne(<span className='red'>"Alice"</span>, <span className='blue'>25</span>);</p>

  <p><span className='blueviole'>var</span> <span className='blue'>personne2</span> = <span className='blueviole'>new</span> Personne(<span className='red'>"Bob"</span>, <span className='blue'>30</span>);</p>

  <p>{'console.log'}(personne1.nom); <span className='darkgreen'>// "Alice"</span></p>

  <p>{'console.log'}(personne2.âge); <span className='darkgreen'>// 30</span></p>
</code>

<p>Dans cet exemple, la fonction Personne est utilisée comme une fonction constructeur pour créer deux objets Personne, personne1 et personne2. Les propriétés nom et âge sont définies à l'aide du mot-clé this à l'intérieur de la fonction constructeur.</p>

<p>En plus des fonctions constructeurs, les prototypes sont utilisés pour mettre en œuvre l'héritage et partager des méthodes et des propriétés entre les objets. Chaque objet en JavaScript a un prototype, qui est un autre objet dont l'objet hérite. Des propriétés et des méthodes peuvent être ajoutées au prototype d'un objet à l'aide de la propriété prototype. Voici un exemple:</p>

<code>
  <p><span className='blueviole'>function</span> <span className='blue'>Personne</span>(<span className='blue'>nom, âge</span>) {'{'}</p>

  <p><span className='blueviole'>this</span>.nom = nom</p>

  <p><span className='blueviole'>this</span>.âge = âge;</p>

  <p>{'}'}</p>

  <p>Personne.prototype.saluer = <span className='blueviole'>function</span>() {'{'}</p>

  <p>{'console.log'}(<span className='red'>"Bonjour, je m'appelle "</span> + <span className='blueviole'>this</span>.nom + <span className='red'>" et j'ai "</span> + <span className='blueviole'>this</span>.âge + <span className='red'>" ans."</span>);</p>

  <p>{'}'}</p>

  <p><span className='blueviole'>var</span> <span className='blue'>personne1</span> = <span className='blueviole'>new</span> <span className='blue'>Personne</span>(<span className='red'>"Alice"</span>, <span className='blue'>25</span>);</p>

  <p><span className='blueviole'>var</span> <span className='blue'>personne2</span> = <span className='blueviole'>new</span> <span className='blue'>Personne</span>(<span className='red'>"Bob"</span>, <span className='blue'>30</span>);</p>

  <p>personne1.saluer(); <span className='darkgreen'>// "Bonjour, je m'appelle Alice et j'ai 25 ans."</span></p>

  <p>personne2.saluer(); <span className='darkgreen'>// "Bonjour, je m'appelle Bob et j'ai 30 ans."</span></p>
</code>

<p>Dans cet exemple, une méthode saluer est ajoutée au prototype de Personne à l'aide de la propriété prototype. Cette méthode peut ensuite être appelée sur n'importe quel objet Personne, comme le démontrent les appels personne1.saluer() et personne2.saluer().</p>

<p>Un autre concept OOP en JavaScript ES5 est l'encapsulation, qui fait référence à la pratique de masquer les détails d'implémentation et d'exposer uniquement les interfaces nécessaires au monde extérieur. Cela peut être réalisé à l'aide de fermetures (closures), qui permettent aux fonctions d'accéder aux variables de leur portée externe même après que la fonction externe ait été renvoyée. Voici un exemple : </p>
 
<code>
  <p><span className='blueviole'>function</span> <span className='blue'>Compteur</span>() {'{'}</p>

  <p><span className='blueviole'>var</span> <span className='blue'>compte</span> = <span className='blue'>0</span>;</p>

  <p><span className='blueviole'>this</span>.incrémenter = <span className='blueviole'>function</span>() {'{'}</p>

  <p>compte++;</p>

  <p> console.log(compte);</p>

  <p>{'};'}</p>

  <p><span className='blueviole'>this</span>.décrémenter = <span className='blueviole'>function</span>() {'{'}</p>

  <p>compte--;</p>

  <p>console.log(compte);</p>

  <p>{'};'}</p>

  <p>{'}'}</p>

  <p><span className='blueviole'>var</span> <span className='blue'>compteur1</span> = <span className='blueviole'>new</span> Compteur();</p>

  <p><span className='blueviole'>var</span> <span className='blue'>compteur2</span> = <span className='blueviole'>new</span> Compteur();</p>

  <p>compteur1.incrémenter(); <span className='darkgreen'>// 1</span></p>

  <p>compteur1.incrémenter(); <span className='darkgreen'>// 2</span></p>

  <p>compteur1.décrémenter(); <span className='darkgreen'>// 1</span></p>

  <p>compteur2.incrémenter(); <span className='darkgreen'>// 1</span></p>
</code>

<p>Dans cet exemple, la fonction constructeur Counter crée des objets avec des méthodes increment et decrement, qui accèdent à une variable count privée en utilisant des fermetures. Cela garantit que la variable count est cachée du monde extérieur et ne peut être accédée que par les méthodes fournies par l'objet Counter. </p>

<p><b>Programmation orientée objet (OOP) avec des valeurs primitives en JavaScript ES5</b></p>

<code>
  <p><span className='blueviole'>function</span> <span className='blue'>Personne</span>(<span className='blue'>nom, âge, genre</span>) {'{'}</p>

  <p><span className='blueviole'>this</span>.nom = nom;</p>

  <p><span className='blueviole'>this</span>.âge = âge;</p>

  <p><span className='blueviole'>this</span>.genre = genre;</p>

  <p> <span className='blueviole'>this</span>.printDetails = <span className='blueviole'>function</span>() {'{'}</p>

  <p>{'console.log'}(<span className='red'>"Nom : "</span> + <span className='blueviole'>this</span>.nom);</p>

  <p>{'console.log'}(<span className='red'>"Âge : "</span> + <span className='blueviole'>this</span>.âge);</p>

  <p>{'console.log'}(<span className='red'>"Genre : "</span> + <span className='blueviole'>this</span>.genre);</p>

  <p>{'}'}</p>

  <p>{'}'}</p>

  <p><span className='blueviole'>var</span> <span className='blue'>personne1</span> = <span className='blueviole'>new</span> Personne(<span className='red'>"John"</span>, <span className='blue'>25</span>, <span className='red'>"male"</span>); </p>

  <p><span className='blueviole'>var</span> <span className='blue'>personne2</span> = <span className='blueviole'>new</span> Personne(<span className='red'>"Jane"</span>, <span className='blue'>30</span>, <span className='red'>"female"</span>); </p>

  <p>{'personne1.printDetails();'}</p>

  <p>{'personne2.printDetails();'}</p>

  <p><span className='blueviole'>var</span> <span className='blue'>bool</span> = <span className='blueviole'>new</span> Boolean(<span className='blue'>true</span>);</p>

  <p>{'console.log'}(bool.valueOf()); <span className='darkgreen'> // true</span></p>

  <p><span className='blueviole'>var</span> <span className='blue'>str</span> = <span className='blueviole'>new</span> String(<span className='red'>"Bonjour"</span>); </p>

  <p>{'console.log'}(str.concat(<span className='red'>" tout le monde"</span>)); <span className='darkgreen'>// "Bonjour tout le monde"</span></p>

  <p><span className='blueviole'>var</span> <span className='blue'>num</span> = <span className='blueviole'>new</span> Number(<span className='blue'>10</span>);</p>

  <p>{'console.log'}(num.valueOf() + <span className='blue'>5</span>); <span className='darkgreen'>// 15</span></p>
</code>

<p>Dans cet exemple, nous définissons une fonction constructeur Personne pour créer des objets de personne avec les propriétés nom, âge et genre. Nous définissons également une méthode printDetails sur l'objet Personne pour imprimer les détails de la personne.</p>

<p>Nous créons ensuite deux objets Personne en utilisant la fonction constructeur et appelons la méthode printDetails pour chaque objet.</p>

<p>Ensuite, nous créons des objets Boolean, String et Number en utilisant leurs fonctions constructeurs respectives et montrons certaines de leurs méthodes, telles que valueOf, concat et opération arithmétique de base </p>

<p><b>En JavaScript ES5, nous pouvons créer des objets en utilisant les fonctions constructeurs Object et Array. Il s'agit d'une forme de création d'objets basée sur le constructeur.</b></p>

<p>Pour créer un objet en utilisant une fonction constructeur, nous utilisons le mot-clé new suivi du nom de la fonction. Par exemple, pour créer un objet en utilisant la fonction constructeur Object, nous pouvons faire :</p>

<code>
  <p> <span className='blueviole'>var</span> <span className='blue'>personne</span> = <span className='blueviole'>new</span> Object(); </p>

  <p> personne.nom = <span className='red'>"John"</span>; </p>

  <p>personne.âge = <span className='blue'>30</span>;</p>

  <p>personne.profession = <span className='red'>"Développeur"</span>;</p>
</code>

<p>Dans l'exemple ci-dessus, nous créons un nouvel objet personne en utilisant la fonction constructeur Object. Nous ajoutons ensuite des propriétés à cet objet en utilisant la notation pointée. </p>

<p>De même, nous pouvons créer un tableau en utilisant la fonction constructeur Array :</p>

<code>
  <p><span className='blueviole'>var</span> <span className='blue'>arr</span> = [];</p>

  <p>arr.push(<span className='blue'>1</span>);</p>

  <p>arr.push(<span className='blue'>2</span>);</p>

  <p>arr.push(<span className='blue'>3</span>);</p>

  <p>console.log(arr); <span className='darkgreen'>// [1, 2, 3]</span></p>
</code>


<p>Dans l'exemple ci-dessus, nous créons un nouveau tableau arr en utilisant la fonction constructeur Array. Nous ajoutons ensuite des éléments à ce tableau en utilisant la méthode push.</p>

<p>La création d'objets basée sur le constructeur est utile lorsque nous devons créer plusieurs objets du même type. Nous pouvons définir une fonction constructeur qui définit les valeurs initiales des propriétés de l'objet, puis créer de nouveaux objets en utilisant ce constructeur.</p>

<p>Par exemple, supposons que nous voulions créer des objets représentant des voitures. Nous pouvons définir une fonction constructeur comme ceci :</p>

<code>
  <p><span className='blueviole'>function</span> <span className='blue'>Voiture</span>(<span className='blue'>marque, modèle, année</span>) {'{'}</p>

  <p><span className='blueviole'>this</span>.marque = marque;</p>

  <p><span className='blueviole'>this</span>.modèle = modèle;</p>

  <p><span className='blueviole'>this</span>.année = année;</p>

  <p>{'}'}</p>

  <p><span className='blueviole'>var</span> <span className='blue'>voiture1</span> = <span className='blueviole'>new</span> Voiture(<span className='red'>"Honda"</span>, <span className='red'>"Civic"</span>, <span className='blue'>2020</span>);</p>


  <p><span className='blueviole'>var</span> <span className='blue'>voiture2</span> = <span className='blueviole'>new</span> Voiture(<span className='red'>"Toyota"</span>, <span className='red'>"Corolla"</span>, <span className='blue'>2021</span>);</p>
</code>

<p>Dans l'exemple ci-dessus, nous définissons une fonction constructeur Voiture qui prend trois paramètres (marque, modèle et année) et définit les propriétés correspondantes de l'objet en utilisant le mot-clé this. Nous créons ensuite deux objets voiture (voiture1 et voiture2) en utilisant ce constructeur.</p>

<p><b>OOP I new RegExp()</b></p>

<code>
  <p><span className='blueviole'>var</span> <span className='blue'>str</span> = <span className='red'>"Bonjour, monde!"</span>;</p>

  <p><span className='blueviole'>var</span> <span className='blue'>regex</span> = <span className='blueviole'>new</span> RegExp(<span className='red'>'\\w', 'g'</span>);</p>

  <p><span className='blueviole'>var</span> <span className='blue'>matches</span> = str.match(regex);</p>

  <p>{'console.log(matches);'} <span className='darkgreen'>// ["B", "o", "n", "j", "o", "u", "r", "m", "o", "n", "d", "e"]</span></p>
</code>

<p>Dans l'exemple ci-dessus, nous créons une expression régulière qui correspond à n'importe quel caractère de mot (\w) et utilisons le drapeau g pour effectuer une recherche globale. Nous utilisons ensuite la méthode match() pour trouver toutes les correspondances dans la chaîne str. Enfin, nous enregistrons le tableau de correspondances dans la console.</p>

<p>Remarquez que nous devons échapper le caractère antislash lors du passage du motif d'expression régulière en tant que chaîne à la fonction constructeur RegExp. Cela est dû au fait que le caractère antislash est utilisé pour échapper les caractères spéciaux dans les expressions régulières, et nous devons également l'échapper dans la chaîne.</p>

<p><b>Prototype __proto__</b></p>


<p>La programmation basée sur le prototype est un concept fondamental en JavaScript qui permet aux objets d'hériter de propriétés et de méthodes d'autres objets. Chaque objet en JavaScript a un prototype, qui est un autre objet dont il hérite des propriétés et des méthodes.</p>

<p>En ES5, vous pouvez créer un prototype en utilisant la méthode Object.create(), qui prend un objet comme paramètre et crée un nouvel objet avec son prototype défini sur cet objet. Vous pouvez ensuite ajouter des propriétés et des méthodes à l'objet prototype, qui seront héritées par tous les objets créés avec lui comme prototype.</p>

<p>Voici un exemple de création d'un prototype pour un objet Personne</p>

<code>
  <p><span className='blueviole'>var</span> prototypePersonne = {'{'}</p>

  <p>salutation: <span className='blueviole'>function</span>() {'{'}</p>

  <p>{'console.log'}(<span className='red'>"Bonjour, je m'appelle "</span> + <span className='blueviole'>this</span>.nom);</p>

  <p>{'} ,'}</p>

  <p>adieu: <span className='blueviole'>function</span>() {'{'} </p>

  <p>{'console.log'}(<span className='red'>"Au revoir!"</span>);</p>

  <p>{'}'}</p>

  <p>{'};'}</p>

  <p><span className='blueviole'>var</span> <span className='blue'>john</span> = Object.create(prototypePersonne); </p>

  <p>john.nom = <span className='red'>"John"</span>;</p>

  <p>john.salutation(); <span className='darkgreen'>// affiche : "Bonjour, je m'appelle John"</span></p>
</code>

<p>Dans cet exemple, nous définissons d'abord un objet prototypePersonne avec une méthode salutation() et une méthode adieu(). Ensuite, nous créons un nouvel objet Personne john en appelant Object.create(prototypePersonne) et en définissant sa propriété nom sur "John". Comme john est créé avec prototypePersonne comme prototype, il hérite de la méthode salutation() de l'objet prototype et peut l'appeler en utilisant john.salutation().</p>

<p><b>instanceof</b></p>

<p>En JavaScript ES5, instanceof est un opérateur qui est utilisé pour vérifier si un objet appartient à une classe particulière ou non. Il renvoie une valeur booléenne indiquant si un objet est une instance d'une classe spécifiée ou de ses sous-classes.</p>

<p>La syntaxe pour instanceof est la suivante :</p>

<p>objet instanceof constructeur</p>

<p>Ici, objet est le nom de l'objet à vérifier et constructeur est le nom de la fonction constructeur ou de la classe. L'opérateur instanceof vérifie la chaîne de prototype de l'objet et renvoie true si l'objet est une instance de la fonction constructeur ou de la classe spécifiée, sinon il renvoie false.</p>

<p>Voici un exemple :</p>

<code>
  <p><span className='blueviole'>function</span> <span className='blue'>Animal</span>(<span className='blue'>nom</span>) {'{'}</p>

  <p><span className='blueviole'>this</span>.nom = nom;</p>

  <p>{'}'}</p>

  <p><span className='blueviole'>function</span> <span className='blue'>Chien</span>(<span className='blue'>nom</span>) {'{'}</p>

  <p>Animal.call(<span className='blueviole'>this</span>, nom); </p>

  <p>{' }'}</p>

  <p>Chien.prototype = Object.create(Animal.prototype); </p>

  <p><span className='blueviole'>var</span> <span className='blue'>monChien</span> = <span className='blueviole'>new</span> Chien(<span className='red'>"Buddy"</span>);</p>

  <p>{'console.log'}(monChien instanceof Chien);  <span className='darkgreen'>// true</span></p>

  <p>{'console.log'}(monChien instanceof Animal); <span className='darkgreen'>// true</span></p>
</code>

<p>Dans cet exemple, nous définissons deux classes Animal et Chien. Chien hérite d'Animal. Nous créons un nouvel objet Chien et vérifions s'il est une instance à la fois de Chien et d'Animal en utilisant l'opérateur instanceof. Les deux vérifications renvoient true, car monChien est une instance des deux classes.</p>

<p>En résumé, instanceof est utilisé pour déterminer si un objet est une instance d'une classe particulière ou de ses sous-classes en vérifiant sa chaîne de prototype.</p>

<b><p>* Texte écrit avec l'aide d'un traducteur. Si vous trouvez une erreur, veuillez nous en informer *</p></b>
    <div className='ads-container'>  
  {/*  реклама  */}
  </div>
    </div>
  )
}

export default FrEs5_7;