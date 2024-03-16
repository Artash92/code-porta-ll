import React from 'react'

function FrEs5_6() {
  return (
    <div>
      <div className='ad-container'>  
          {/*  реклама  */}
        </div>
        
        <h3>Objet global en JavaScript</h3>

<p>L'objet global en JavaScript est un objet intégré disponible partout dans le code. Il fournit des propriétés et des méthodes utilisées par différentes parties du langage et peut également être étendu avec des fonctionnalités personnalisées.</p>

<code>

<p>Quelques-unes des propriétés et méthodes de l'objet global en JavaScript incluent :</p>

<p><span className='blue'>1.</span> Infinity - représente la valeur de l'infini mathématique</p>

<p><span className='chocolate'>Exemple :</span> console.log(Infinity);</p>

<p><span className='blue'>2.</span> NaN - représente la valeur "Not a Number".</p>

<p><span className='chocolate'>Exemple :</span> console.log(NaN);</p>

<p><span className='blue'>3.</span> console - fournit des méthodes pour enregistrer des informations dans la console.</p>

<p><span className='chocolate'>Exemple :</span> console.log('Bonjour, monde !');</p>

<p><span className='blue'>4.</span> parseInt() - analyse une chaîne et renvoie un entier.</p>

<p><span className='chocolate'>Exemple :</span> console.log(parseInt('10'));</p>

<p><span className='blue'>5.</span> parseFloat() - analyse une chaîne et renvoie un nombre à virgule flottante.</p>

<p><span className='chocolate'>Exemple :</span> console.log(parseFloat('3.14'));</p>

<p><span className='blue'>6.</span> encodeURIComponent() - encode un composant URI.</p>

<p><span className='blue'>7.</span> Date - fournit des méthodes pour travailler avec les dates et heures.</p>

<p><span className='chocolate'>Exemple :</span> console.log(new Date());</p>

<p><span className='blue'>8.</span> Math - fournit des fonctions mathématiques et des constantes.</p>

<p><span className='chocolate'>Exemple :</span> console.log(Math.PI);</p>

</code>

<p>Les méthodes de l'objet global peuvent être appelées de n'importe où dans le code, sans besoin de créer une instance de l'objet. Cependant, il convient de faire attention lors de l'extension de l'objet global avec des méthodes personnalisées, car elles peuvent potentiellement entrer en conflit avec des méthodes intégrées ou d'autres méthodes personnalisées.</p>

<p>Il est important de noter que dans les environnements JavaScript modernes, l'objet global n'est pas toujours disponible dans tous les contextes, tels que dans le code basé sur des modules ou en mode strict.</p>

<h3>Manipulation des chaînes en JavaScript ES5</h3>

<p>En JavaScript ES5, une chaîne est une séquence de caractères et peut être manipulée à l'aide de diverses méthodes. Deux méthodes pour extraire des sous-chaînes d'une chaîne sont slice() et substring().</p>

<p>La méthode slice() extrait une section d'une chaîne et la renvoie en tant que nouvelle chaîne, sans modifier la chaîne d'origine. Elle prend deux paramètres : l'index de départ et l'index de fin (optionnel). Si l'index de fin n'est pas fourni, la méthode extraira jusqu'à la fin de la chaîne. Si l'index de départ est négatif, il compte à partir de la fin de la chaîne.</p>

<p>La méthode substring() est similaire à slice(), mais n'accepte pas d'indices négatifs. Si l'index de départ est supérieur à l'index de fin, les deux indices sont échangés pour éviter une erreur.</p>

<p>Voici quelques exemples</p>

<p><span className='darkgreen'>// Obtenir la sous-chaîne "is"</span></p>

<code>
<p>str.slice(<span className='blue'>5</span>, <span className='blue'>7</span>); <span className='darkgreen'>//"is"</span></p>

<p>str.substring(<span className='blue'>5</span>,<span className='blue'>7</span>); <span className='darkgreen'>//"is"</span></p>
</code>

<p><span className='darkgreen'>// Obtenir la sous-chaîne "is"</span></p>

<code>
<p>{'console.log'}(str.slice(<span className='blue'>5</span>, <span className='blue'>7</span>)); <span className='darkgreen'>//"is"</span></p>

<p>{'console.log'}(str.substring(<span className='blue'>5</span>, <span className='blue'>7</span>)); <span className='darkgreen'>//"is"</span></p>

<p><span className='darkgreen'>// Obtenir la sous-chaîne "is my text"</span></p>

<p>{'console.log'}(str.slice(<span className='blue'>5</span>)); <span className='darkgreen'>//"is my text"</span></p>

<p>{'console.log'}(str.substring(<span className='blue'>5</span>)); <span className='darkgreen'>//"is my text"</span></p>
</code>

<p><span className='darkgreen'>// Obtenir la sous-chaîne " "</span></p>

<code>
<p>{'console.log'}(str.slice(<span className='blue'>7</span>, <span className='blue'>5</span>)); <span className='darkgreen'>//" "</span></p>

<p>{'console.log'}(str.substring(<span className='blue'>7</span>, <span className='blue'>5</span>)); <span className='darkgreen'>//"is"</span> </p>
</code>

<p><span className='darkgreen'>// Obtenir la sous-chaîne "my"</span></p>

<code>
    <p>{'console.log'}(str.slice(-<span className='blue'>7</span>, -<span className='blue'>5</span>)); <span className='darkgreen'> //"my"</span></p>

    <p>{'console.log'}(str.substring(<span className='blue'>7</span>,<span className='blue'>5</span>)); <span className='darkgreen'>//" "</span></p>
</code>
 

<p>Dans les exemples ci-dessus, slice() et substring() sont utilisés pour extraire des sous-chaînes de la variable str. Le premier exemple extrait la sous-chaîne "is", tandis que le deuxième exemple extrait "is my text". Les troisième et quatrième exemples montrent comment slice() et substring() gèrent les cas où les indices sont désordonnés. Enfin, le cinquième exemple montre comment slice() peut être utilisé avec des indices négatifs pour extraire une sous-chaîne de la fin de la chaîne.</p>

<h3>Le sujet est "Recherche de chaîne" en JavaScript ES5.</h3>

<p>En JavaScript, vous pouvez rechercher une sous-chaîne spécifique dans une chaîne à l'aide de diverses méthodes. Voici quelques méthodes couramment utilisées :</p>

<p>1. Le sujet est "Recherche de chaîne" en JavaScript ES5.

En JavaScript, vous pouvez rechercher une sous-chaîne spécifique dans une chaîne à l'aide de diverses méthodes :

indexOf(sous-chaîne, début) : Cette méthode recherche une sous-chaîne dans une chaîne et renvoie l'index de la première occurrence de la sous-chaîne. Vous pouvez également spécifier la position de départ de la recherche en passant un paramètre de début facultatif. Si la sous-chaîne n'est pas trouvée, elle renvoie -1.</p>
   
   <p><b>Exemple</b></p>
   
 
<code>
  
  <p><span className='blueviole'>var</span> <span className='blue'>message</span> = <span className='red'>"Bonjour tout le monde"</span>;</p>

  <p><span className='blueviole'>var</span> <span className='blue'>index</span> = message.indexOf(<span className='red'>"tout"</span>);</p>

  <p>{'console.log(index);'} <span className='darkgreen'>// 8</span></p>

 </code>
 
 
 
<p>2. lastIndexOf(sous-chaîne, fin) : Cette méthode fonctionne de la même manière que indexOf, mais elle recherche la dernière occurrence de la sous-chaîne dans la chaîne, en recherchant à partir de la fin de la chaîne. Vous pouvez également spécifier la position de fin de la recherche en passant un paramètre de fin facultatif.</p>

<p><b>Exemple</b></p>

 
<code>
<p><span className='blueviole'>var</span><span className='blue'> message</span> = <span className='red'>"Bonjour tout le monde, bonjour!"</span>;</p>

<p><span className='blueviole'>var</span> <span className='blue'>index</span> = message.lastIndexOf(<span className='red'>"bonjour"</span>);</p>

<p>{'console.log(index);'}<span className='darkgreen'> // 15</span></p>
</code>
 

<p>
  Notez que la casse de la sous-chaîne importe lors de l'utilisation de ces méthodes. Par exemple, rechercher "bonjour" lorsque la chaîne contient uniquement "Bonjour" ne trouvera pas la sous-chaîne.
</p>

<p>3. includes(sous-chaîne) : Cette méthode vérifie si la sous-chaîne donnée est présente dans la chaîne ou non, et renvoie une valeur booléenne indiquant le résultat.</p>
    
    <p><b>Exemple</b></p>
    
 
<code>
  <p><span className='blueviole'>var</span> <span className='blue'>trouve</span> = message.includes(<span className='red'>"tout"</span>);</p>

  <p>{'console.log(trouve);'} <span className='darkgreen'>// true</span></p>
</code>
 
  
 
<p>4. search(regex) : Cette méthode recherche une expression régulière dans la chaîne et renvoie l'index du premier match. S'il n'y a pas de correspondance, elle renvoie -1.</p>
    
    <p><b>Exemple</b></p>

 
<code>
  <p><span className='blueviole'>var</span> <span className='blue'>message</span> = <span className='red'>"Bonjour tout le monde, bonjour!"</span>;</p>

  <p><span className='blueviole'>var</span> <span className='blue'>index</span> = message.search(<span className='red'>/bonjour/i</span>);<span className='darkgreen'>// le drapeau "i" le rend insensible à la casse</span></p>

  <p>{'console.log(index);'}<span className='darkgreen'> // 0</span></p>
   </code>
 

<p>Dans votre exemple, la variable str contient la chaîne "This is my text". Les lignes de code suivantes démontrent l'utilisation des méthodes de recherche de chaînes décrites ci-dessus :</p>

 
<code>
<p><span className='blueviole'>var</span> <span className='blue'>str</span> = <span className='red'>"This is my text"</span>;</p>

<p>{'console.log'}(str.indexOf(<span className='red'>"is"</span>)); <span className='darkgreen'>//2</span></p>

<p>{'console.log'}(str.indexOf(<span className='red'>"is"</span>, <span className='blue'>3</span>));<span className='darkgreen'> //5</span></p>

<p>{'console.log'}(str.lastIndexOf(<span className='red'>"is"</span>)); <span className='darkgreen'>//5</span></p>

<p>{'console.log'} (str.lastIndexOf(<span className='red'>"is"</span>, <span className='blue'>4</span>)); <span className='darkgreen'>//2</span></p>

<p>{'console.log'}(str.indexOf(<span className='red'>"some"</span>)); <span className='darkgreen'>//-1</span></p>
</code>
 

<p>Ces lignes de code recherchent la sous-chaîne "is" et "some" dans la chaîne str, et renvoient leurs index à l'aide des méthodes indexOf et lastIndexOf. Le deuxième paramètre de indexOf spécifie la position de départ de la recherche, tandis que le deuxième paramètre de lastIndexOf spécifie la position de fin de la recherche.</p>
    
    <h3>RegEx</h3>

    <p>RegExp est un objet intégré qui fournit un moyen de créer des expressions régulières. Les expressions régulières sont des motifs utilisés pour faire correspondre des combinaisons de caractères dans des chaînes.</p>
    
    <p><b>Voici un exemple de création d'un objet d'expression régulière à l'aide de la fonction constructeur :</b></p>
    
 
  <code>
    <p> <span className='blueviole'>var</span> <span className='blue'>regex</span> = <span className='blueviole'>new</span> RegExp(<span className='red'>"quelque", "long"</span>);</p>
  </code>
 
 
<p>Ici, "quelque" est le drapeau de l'expression régulière, et "long" sont des drapeaux facultatifs qui modifient le comportement de l'expression régulière.</p>
<p>
Voici un exemple d'utilisation de la méthode test() de l'objet RegExp pour tester si une chaîne correspond à une expression régulière :
</p>

 
<code>
<p><span className='blueviole'>var</span> <span className='blue'>str</span> = <span className='red'>" Le renard brun rapide saute par-dessus le chien paresseux "</span>;</p>

<p><span className='blueviole'>var</span> <span className='blue'>regex </span>=<span className='red'> /renard/i</span>;</p>

<p><span className='blueviole'>var</span> <span className='blue'>resultat</span> = regex.test(str);</p>

<p>{'console.log(resultat);'} <span className='darkgreen'>// true </span></p>
</code>
 
 
<p>Dans cet exemple, /renard/i est un motif d'expression régulière qui correspond au mot "renard" de manière insensible à la casse. La méthode test() renvoie une valeur booléenne indiquant si le motif d'expression régulière correspond ou non à la chaîne str.</p>
    
  <p>
  Voici un autre exemple d'utilisation de la méthode match() de l'objet String avec une expression régulière pour extraire les valeurs correspondantes :
  </p>

 
 <code>
 <p><span className='blueviole'>var</span> <span className='blue'>str</span> = <span className='red'>" Le renard brun rapide saute par-dessus le chien paresseux "</span>;</p>

<p><span className='blueviole'>var</span> <span className='blue'>regex </span>=<span className='red'> /renard/i</span>;</p>

<p><span className='blueviole'>var</span><span className='blue'> resultat</span>  = str.match(regex);</p>

<p>{'console.log(resultat);'} <span className='darkgreen'> // <span>[</span>"renard"<span>]</span></span></p>
 </code>
 

 

  <p>Dans cet exemple, la méthode match() renvoie un tableau contenant la ou les sous-chaînes correspondantes si le motif d'expression régulière est trouvé dans la chaîne.

</p>
    <b>Et voici quelques caractères spéciaux couramment utilisés dans les expressions régulières :</b>
    
    <p>.- Correspond à n'importe quel caractère sauf un saut de ligne \n</p>
    
    <p>\w - Correspond à n'importe quel caractère ASCII de mot [a-zA-Z0-9_]</p>
    
    <p>\W - Correspond à tout caractère non alphabétique [^a-zA-Z0-9_]</p>
    
    <p>\d - Correspond à tout chiffre ASCII [0-9]</p>
    
    <p>\D - Correspond à tout caractère non numérique [^0-9]</p>
    
    <p>\s - Correspond à tout caractère d'espacement Unicode</p>
    
    <p>\S - Correspond à tout caractère non-espace</p>
    
    <code>
      <p><span className='blueviole'>var</span> <span className='blue'>maStr</span> = <span className='red'>"Texte génial"</span>;</p>

      <p><span className='blueviole'>var</span> <span className='blue'>maRegExp</span> = <span className='red'>/[a-zA-Z0-9]/</span>;</p>

      <p><span className='blueviole'>var</span> <span className='blue'>resultat</span> = maRegExp.test(maStr);</p>

      <p>{'console.log(resultat);'}<span className='darkgreen'> //true</span></p>
    </code>
 
<p><b>^ - Correspond au début d'une chaîne</b></p>

<p><b>$ - Correspond à la fin d'une chaîne</b></p>

<p>Drapeaux :</p>

<p><b>i - ignoreCase</b></p>
 
 
 <code>
  <p><span className='blueviole'>var</span><span className='blue'> exp</span> = <span className='red'>/a/i</span> <span className='darkgreen'>// recherche à la fois les lettres majuscules et minuscules</span></p> 
</code> 

<p><b>g - global</b></p>

<p><b>Recherche toutes les occurrences d'un motif dans une chaîne</b></p>


 
<code>
<p><span className='blueviole'>var</span> <span className='blue'>str</span> = <span className='red'>"Borobudur"</span>;</p>

<p><span className='blueviole'>var</span> <span className='blue'>pattern</span> = <span className='red'>/[ou]/g</span>;</p>

<p>{'console.log'}(str.replace(pattern, <span className='red'>"a"</span>)); <span className='darkgreen'>//"Barabadar"";</span></p>
</code>
 


<p><b>m - multiline</b></p>

<p><b>Recherche toutes les occurrences d'un motif dans toutes les lignes d'une chaîne</b></p>

 
  <code>
<p><span className='blueviole'>var</span> <span className='blue'>str</span> = <span className='red'>"Some text Et un peu plus Et encore Ceci est la fin"</span>;</p>

<p><span className='blueviole'>var</span> <span className='blue'> pattern</span> = <span className='red'>/\w+\s/g</span>;</p>

<p>{'console.log(str.match(pattern));'} <span className='darkgreen'>//  [ "Some ", "text ", "Et ", "un ", "peu ", "plus ", "Et ", "encore ", "Ceci ", "est ", "la ", "fin"]</span></p>
  </code>
 
 
   <p>Ici, nous définissons une chaîne str avec la valeur "this is my text". Nous définissons ensuite un motif d'expression régulière qui correspond au début de la chaîne (^) suivi d'une ou plusieurs lettres minuscules ([a-z]+) séparées par des espaces, et la fin de la chaîne ($). Nous utilisons des parenthèses pour capturer chaque groupe de lettres en tant que sous-motif séparé.</p>
   
   <p>Enfin, nous utilisons la méthode replace() sur la chaîne, en passant le motif et une chaîne de remplacement qui utilise le symbole $ pour référencer les sous-motifs capturés dans l'ordre où ils ont été définis. Dans ce cas, nous échangeons le premier et le deuxième groupe de lettres, laissant le troisième et le quatrième groupe en place.</p>
   
   <p>Voici le code :</p>

 
<code>
<p><span className='blueviole'>var</span> <span className='blue'>str</span> = <span className='red'>"this is my text"</span>;</p>

<p><span className='blueviole'>var</span> <span className='blue'>pattern</span> = <span className='red'>/^([a-z]+) ([a-z]+) ([a-z]+) ([a-z]+)$/</span> ;</p>

<p><span className='blueviole'>var</span> <span className='blue'>res</span> = str.replace(pattern, <span className='red'>"$2 $1 $3 $4"</span>);</p>

<p>{'console.log(res);'} <span className='darkgreen'>// "is this my text"</span></p>
</code>


<b><p>* Texte écrit avec l'aide d'un traducteur. Si vous trouvez une erreur, veuillez nous en informer *</p></b>
    <div className='ads-container'>  
  {/*  реклама  */}
  </div>
    </div>
  )
}

export default FrEs5_6;