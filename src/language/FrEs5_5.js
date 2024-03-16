import React from 'react';

function FrEs5_5() {
  return (
    <div>
      <div className='ad-container'>  
          {/*  реклама  */}
        </div>
    
<h1>Tableau</h1>

<p>En JavaScript, un tableau est une structure de données qui vous permet de stocker plusieurs valeurs dans une seule variable. Un tableau est déclaré à l'aide de crochets, et ses éléments sont séparés par des virgules.</p>

<p><b>Exemple</b></p>

<p className='darkgreen'>// Un tableau de nombres</p>    

<code>
  <p><span className='blue'>var </span><span className='blue'> numbers</span> = [<span className='blue'>1, 2, 3, 4, 5</span>];</p>
  <p className='darkgreen'>// Un tableau de chaînes de caractères</p>
  <p><span className='blueviole'>var</span> <span className='blue'>fruits</span> = [<span className='red'>"pomme", "banane", "orange"</span>];</p>
</code>

<p><b>Longueur du tableau</b></p>

<p>La propriété length d'un tableau renvoie le nombre d'éléments dans le tableau.</p>

<p><b>Exemple</b></p>

<code>
  <p><span className='blueviole'>var</span> <span className='blue'>numbers</span> = [<span className='blue'>1, 2, 3, 4, 5</span>];</p>
  <p>{'console.log(numbers.length);'} <span className='darkgreen'>// Sortie: 5</span></p>  
</code>

<p><b>Méthodes de tableau</b></p>

<p>Les tableaux en JavaScript ont des méthodes intégrées qui peuvent être utilisées pour manipuler les données du tableau. Certaines méthodes de tableau couramment utilisées sont :</p>

<code>
  <p><b>push()</b> : ajoute un ou plusieurs éléments à la fin d'un tableau</p>
  <p><b>pop()</b> : supprime le dernier élément d'un tableau</p>
  <p><b>shift()</b> : supprime le premier élément d'un tableau</p>
  <p><b>unshift()</b> : ajoute un ou plusieurs éléments au début d'un tableau</p>
  <p><b>splice()</b> : ajoute ou supprime des éléments d'un tableau à un index spécifié</p>
  <p><b>slice()</b> : renvoie un nouveau tableau contenant une portion d'un tableau existant</p>
  <p><b>join()</b> : joint tous les éléments d'un tableau en une chaîne de caractères</p>
  <p><b>concat()</b> : concatène deux tableaux ou plus </p>
</code>

<p><b>Exemple :</b></p>

<code>
  <p><span className='blueviole'>var</span> <span className='blue'>numbers</span> = [<span className='blue'>1, 2, 3, 4, 5</span>];</p>
  <p>numbers.push(<span className='blue'>6</span>); <span className='darkgreen'>// ajoute 6 à la fin du tableau</span></p>
  <p>{'console.log(numbers);'} <span className='darkgreen'>// Sortie: [1, 2, 3, 4, 5, 6]</span></p>
</code>

<code>
  <p><span className='blueviole'>var</span> <span className='blue'>fruits</span> = [<span className='red'>"pomme", "banane", "orange"</span>];</p>
  <p>fruits.pop(); <span className='darkgreen'>// supprime le dernier élément du tableau</span></p>
  <p>{'console.log(fruits);'} <span className='darkgreen'>// Sortie: ["pomme", "banane"]</span></p>
</code>

<code>
  <p><span className='blueviole'>var</span> <span className='blue'>colors</span> = [<span className='red'>"rouge", "vert", "bleu"</span>];</p>
  <p>colors.shift(); <span className='darkgreen'> // supprime le premier élément du tableau</span></p>
  <p>{'console.log(colors);'} <span className='darkgreen'>// Sortie: ["vert", "bleu"]</span></p>
</code>

<code>
  <p><span className='blueviole'>var</span> <span className='blue'>cars</span> = [<span className='red'>"BMW","Audi","Mercedes"</span>];</p>
  <p>cars.unshift(<span className='red'>"Toyota","Honda"</span>); <span className='darkgreen'>// ajoute deux éléments au début du tableau</span></p>
  <p>{'console.log(cars);'} <span className='darkgreen'>//Sortie:["Toyota","Honda","BMW","Audi","Mercedes"]</span></p>
</code>

<code>
  <p><span className='blueviole'>var</span> <span className='blue'>animals</span> = [<span className='red'>"chien","chat","éléphant","lion"</span>];</p>
  <p>animals.splice(<span className='blue'>2</span>,<span className='blue'>0</span>,<span className='red'>"ours"</span>,<span className='red'>"zèbre"</span>); <span className='darkgreen'>// ajoute "ours" et "zèbre" à l'index 2</span></p>
  <p>{'console.log(animals);'} <span className='darkgreen'>// Sortie: ["chien","chat","ours","zèbre","éléphant","lion"]</span></p>
</code>

<code>
  <p><span className='blueviole'>var</span> <span className='blue'>letters</span> = [<span className='red'>"a", "b", "c", "d", "e"</span>];</p>
  <p><span className='blueviole'>var</span> <span className='blue'>slice1</span> = letters.slice(<span className='blue'>0, 2</span>); <span className='darkgreen'>// renvoie ["a", "b"]</span></p>
  <p><span className='blueviole'>var</span> <span className='blue'>slice2</span> = letters.slice(<span className='blue'>2</span>); <span className='darkgreen'>// renvoie ["c", "d", "e"]</span></p>
  <p>{'console.log(slice1);'}</p>
  <p>{'console.log(slice2);'}</p>
</code>

<code>
  <p><span className='blueviole'>var</span> <span className='blue'>fruits</span> = [<span className='red'>"pomme", "banane", "orange"</span>];</p>
  <p><span className='blueviole'>var</span> <span className='blue'>fruitString</span> = fruits.join(<span className='red'>", "</span>); <span className='darkgreen'>// joint les éléments du tableau avec une virgule</span></p>
  <p>{'console.log(fruitString);'} <span className='darkgreen'>// Sortie: "pomme,banane,orange"</span></p>
</code>

<code>
  <p><span className='blueviole'>var</span> <span className='blue'>nums1</span> = [<span className='blue'>1, 2, 3</span>];</p>
  <p><span className='blueviole'>var</span> <span className='blue'>nums2</span> = [<span className='blue'>4, 5, 6</span>];</p>
  <p><span className='blueviole'>var</span> <span className='blue'>nums3</span> = nums1.concat(nums2); <span className='darkgreen'>// concatène nums1 et nums2</span></p>
  <p>{'console.log(nums3);'} <span className='darkgreen'>// Sortie: [1, 2, 3, 4, 5, 6]</span></p>
</code>

<p><b>Méthodes de tableau | Combinaison de tableaux</b></p>

<p>Vous pouvez combiner deux ou plusieurs tableaux en JavaScript en utilisant la méthode concat(). Cette méthode renvoie un nouveau tableau qui contient tous les éléments des tableaux d'origine.</p>

<h3>forEach et map</h3>

<p><b>forEach</b> est utilisé pour parcourir chaque élément d'un tableau et exécuter une fonction sur chaque élément. Il prend une fonction en tant qu'argument et passe chaque élément du tableau en tant qu'argument à cette fonction.</p>

<p>Voici un exemple d'utilisation de forEach pour afficher chaque élément d'un tableau :</p>

<code>
  <p><span className='blueviole'>var</span> <span className='blue'>arr</span> = [<span className='blue'>1, 2, 3, 4, 5</span>];</p>
  <p>arr.forEach{'('}<span className='blueviole'>function</span>(<span className='blue'>élément</span>) {'{'}</p>
  <p>{'console.log(élément);'}</p>
  <p>{' });'}</p>
</code>

<p>Cela affichera :</p>

<code>
  <p className='blue'>1</p>
  <p className='blue'>2</p>
  <p className='blue'>3</p>
  <p className='blue'>4</p>
  <p className='blue'>5</p>
</code>

<p>
D'autre part, map est utilisé pour créer un nouveau tableau avec les résultats de l'appel d'une fonction sur chaque élément du tableau d'origine. Il prend également une fonction en tant qu'argument et passe chaque élément du tableau en tant qu'argument à cette fonction. La fonction devrait 
retourner une nouvelle valeur à ajouter au nouveau tableau.
</p>
<p>
Voici un exemple d'utilisation de map pour créer un nouveau tableau avec chaque élément du tableau d'origine doublé :
</p>

<code>
  <p><span className='blueviole'>var</span> <span className='blue'>arr</span> = [<span className='blue'>1, 2, 3, 4, 5</span>];</p>
  <p><span className='blueviole'>var</span> <span className='blue'>doubledArr</span> = arr.map{'('}<span className='blueviole'>function</span>(<span className='blue'>élément</span>) {'{'}</p>
 <p><span className='blueviole'>return</span> élément * <span className='blue'>2</span>;</p>
 <p>{'});'}</p>
 <p>{'console.log(doubledArr);'}</p>
</code>

<p>Cela affichera</p>

<code><p className='blue'>[2, 4, 6, 8, 10 ]</p></code>

<p>
En résumé, forEach est utilisé pour effectuer une opération sur chaque élément d'un tableau, tandis que map est utilisé pour créer un nouveau tableau avec les résultats de l'appel d'une fonction sur chaque élément du tableau d'origine.
</p>

<h3>Méthode apply</h3>

<p>En JavaScript, la méthode apply() est utilisée pour appeler une fonction avec une valeur this donnée et des arguments fournis sous forme de tableau (ou d'objet de type tableau).</p>

<p>La syntaxe pour utiliser la méthode apply() est :</p>
  
  <code>
    <p>{'nomDeLaFonction.apply(valeurThis, [tableauArguments]) '}</p>
  </code>

<p><b>Où</b></p>

<p>nomDeLaFonction est le nom de la fonction que vous souhaitez appeler.</p>

<p>valeurThis est la valeur que vous souhaitez utiliser comme valeur this à l'intérieur de la fonction. Ce paramètre est facultatif. Si vous l'ommettez, l'objet global sera utilisé.</p>

<p>tableauArguments est un tableau ou un objet de type tableau qui contient les arguments que vous souhaitez passer à la fonction. Ce paramètre est également facultatif. Si vous n'avez pas besoin de passer d'arguments, vous pouvez l'omettre.</p>

<p>Voici un exemple d'utilisation de la méthode apply() avec un tableau :</p>

<code>
    <p><span className='blueviole'>var</span> <span className='blue'>numbers</span> = [<span className='blue'>1, 2, 3, 4, 5</span>];</p>
    
    <p><span className='blueviole'>function</span> <span className='blue'>sumArray</span>() {'{'}</p>

    <p><span className='blueviole'>var</span> <span className='blue'>sum</span> = <span className='blue'>0</span>;</p>

    <p><span className='blueviole'>for</span> (<span className='blueviole'>var</span> <span className='blue'>i</span> = <span className='blue'>0</span>; i {'<'} <span className='blueviole'>this</span>.length; i++) {'{'}</p>

    <p>{'sum +='} <span className='blueviole'>this</span>{'[i];'}</p>

    <p>{'}'}</p>

    <p><span className='blueviole'>return</span> sum;</p>

    <p>{'}'}</p>

    <p><span className='blueviole'>var</span> <span className='blue'>result</span> = sumArray.apply(numbers);</p>

    <p>{'console.log(result);'} <span className='darkgreen'>// Sortie: 15</span></p>

    <p>{''}</p>

    </code>

<p>Dans cet exemple, nous avons un tableau de nombres et une fonction sumArray() qui calcule la somme de tous les éléments dans un tableau. Nous appelons la méthode apply() sur la fonction sumArray() avec le tableau numbers comme valeur this. La méthode apply() passe le tableau en tant que valeur this et la fonction sumArray() calcule la somme de tous les éléments dans le tableau et la retourne.</p>
  
  <p>Remarquez que la méthode apply() est similaire à la méthode call(). La seule différence est que la méthode call() accepte les arguments sous forme de liste séparée par des virgules, tandis que la méthode apply() accepte les arguments sous forme de tableau.</p>
  
  <h3>Fonction auto-invocatrice</h3>
  
  <p>Une fonction auto-invocatrice est une fonction JavaScript qui s'exécute automatiquement lorsqu'elle est définie. Elle est également connue sous le nom d'expression de fonction immédiatement invoquée (IIFE). Cette fonction est enveloppée entre parenthèses puis immédiatement appelée en utilisant les parenthèses ouvrantes et fermantes.</p>
  
  <p>Voici un exemple d'une fonction auto-invocatrice :</p>
  
  <code>
    <p>{'('}<span className='blueviole'>function</span>() {'{'}</p>
    
    <p>{'console.log'}(<span className='red'>"Bonjour, le monde!"</span>);</p>

    <p>{' })();'}</p>
  </code>

  <p>Dans cet exemple, la fonction est définie puis immédiatement appelée en utilisant les parenthèses ouvrantes et fermantes. Cela affichera "Bonjour, le monde !" dans la console.</p>

 <p>Les fonctions auto-invocatrices sont couramment utilisées pour créer une portée privée dans laquelle les variables et les fonctions peuvent être définies sans polluer l'espace de noms global. Voici un exemple :</p>

<code>
  <p>{'('}<span className='blueviole'>function</span>() {'{'}</p>
  <p><span className='blueviole'>var</span> <span className='blue'>x</span> = <span className='blue'>10</span>;</p>
  <p><span className='blueviole'>function</span> <span className='blue'>foo</span>() {'{'}</p>
  <p>{'console.log(x);'}</p>
  <p>{'}'}</p>
  <p>foo(); <span className='darkgreen'>// Sortie: 10</span></p>
  <p>{'})();'}</p>
</code>

<p>Dans cet exemple, les variables x et la fonction foo sont définies à l'intérieur de la fonction auto-invocatrice. Elles ne sont pas accessibles depuis l'extérieur de la fonction, ce qui aide à éviter les conflits de noms avec d'autres codes.</p>

<p>Les fonctions auto-invocatrices peuvent également prendre des arguments, comme les fonctions régulières. Voici un exemple :</p>

<code>
  <p>{'('}<span className='blueviole'>function</span>(<span className='blue'>x, y</span>) {'{'}</p>
  <p>{'console.log'}(x + y);</p>
  <p>{'})'}(10, 20); <span className='darkgreen'>// Sortie: 30</span></p>
</code>

<p>Dans cet exemple, la fonction auto-invocatrice prend deux arguments (x et y) et affiche leur somme dans la console.</p>

<p>Les fonctions auto-invocatrices sont un outil puissant en JavaScript pour créer des portées privées, éviter les conflits de noms et gérer les variables globales.</p>


<b><p>* Texte écrit avec l'aide d'un traducteur. Si vous trouvez une erreur, veuillez nous en informer *</p></b>
    <div className='ads-container'>  
  {/*  реклама  */}
  </div>
    </div>
  )
}

export default FrEs5_5;