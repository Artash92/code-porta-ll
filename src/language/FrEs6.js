import React from 'react'

function FrEs6() {
  return (
    <div>
      <div className='ad-container'>  
          {/*  реклама  */}
        </div>

        <h1 className='hy'>JavaScript ES6 (ECMAScript 2015) est la sixième version de JavaScript qui a introduit de nouvelles fonctionnalités et des améliorations de syntaxe dans le langage. Voici quelques fonctionnalités clés d'ES6 :</h1>

<p>1. <b className='blueviole'>let </b>et <b className='blueviole'>const</b> : Ce sont de nouvelles déclarations de variables qui remplacent l'ancien mot-clé var. Elles fournissent de meilleures règles de portée et aident à éviter les erreurs courantes qui peuvent survenir avec <b className='blueviole'>var</b>.</p>

<p>2. Fonctions fléchées : Les fonctions fléchées fournissent une syntaxe plus courte pour écrire des expressions de fonction. Elles lient également la valeur this de manière lexicale, ce qui rend plus facile de raisonner sur la portée des fonctions.</p>

<p>3. Modèles de chaînes : Cette fonctionnalité fournit un moyen d'incorporer des expressions à l'intérieur de chaînes en utilisant des guillemets inversés au lieu de guillemets simples ou doubles. Cela facilite la création de chaînes avec un contenu dynamique.</p>

<p>4. Opérateur de propagation : L'opérateur de propagation est représenté par trois points (...). Il permet à un itérable tel qu'une expression de tableau ou une chaîne d'être développé à des endroits où zéro ou plusieurs arguments (pour les appels de fonction) ou éléments (pour les littéraux de tableau) sont attendus.</p>

<p>5. Destructuration : La destructuration fournit un moyen d'extraire des données d'arrays et d'objets dans des variables distinctes en utilisant une syntaxe abrégée.</p>

<p>6. Classes : ES6 a introduit une nouvelle syntaxe de classe qui fournit un moyen plus simple et plus intuitif de créer des objets et de définir leur comportement.</p>

<p>7. Modules : Les modules sont une façon d'organiser le code en fichiers séparés et autonomes qui peuvent être facilement importés et exportés selon les besoins. Cela permet un développement et une maintenance plus efficaces des grandes applications. ES6 a introduit une syntaxe de module standardisée en utilisant les mots-clés import et export, facilitant le partage et la réutilisation du code entre plusieurs fichiers et projets.</p>

<p>8. Classes : ES6 a introduit une nouvelle syntaxe pour la création de classes, qui permet la programmation orientée objet en JavaScript. Les classes peuvent être utilisées pour créer des objets avec des propriétés et des méthodes, et peuvent également hériter d'autres classes. Cette syntaxe facilite l'écriture et la maintenance de code complexe, et peut améliorer la lisibilité et la réutilisabilité de votre code.</p>

<p>9. Promesses : Les promesses sont une façon de gérer les opérations asynchrones en JavaScript. Elles fournissent un moyen standardisé de gérer le résultat d'une opération asynchrone, soit en résolvant, soit en rejetant une valeur. Les promesses peuvent être enchaînées ensemble et combinées avec d'autres fonctionnalités comme async/await pour créer des flux de travail asynchrones plus complexes et puissants.</p>

<p>Ce ne sont là que quelques-unes des nombreuses fonctionnalités introduites dans ES6. Apprendre et utiliser ces fonctionnalités peut grandement améliorer votre code JavaScript et rendre votre processus de développement plus efficace et plus efficace.</p>

<p><b>Variables ES6</b></p>

<code>

    <p><span className='blueviole'>const</span> <span className='blue'>num</span> = <span className='blue1'>10</span>; </p>
    
    <p>{'console'}.<span className='blue'>log</span>(num);<span className='green'> // 10</span></p>
    
    <p>{'{'}</p>
    
    <p><span className='blueviole'>const</span> <span className='blue'>num2</span> = <span className='blue1'>20</span>;</p>
    
    <p>{'console'}.<span className='blue'>log</span>(num2); <span className='green'>// 20</span> </p>
    
    <p>{'}'}</p>
    
    <p><span className='green'>// num2 n'est pas défini</span></p>
    
    <p>{'console'}.<span className='blue'>log</span>(num); <span className='green'>// 10</span></p>
</code>

<p>Ce code utilise des variables ES6. La première ligne crée une variable constante nommée "num" et lui attribue la valeur 10. La deuxième ligne commence un bloc de code en utilisant des accolades, ce qui est une nouvelle fonctionnalité dans ES6.</p>

<p>À l'intérieur de ce bloc, une nouvelle variable nommée "num2" est déclarée en utilisant le mot-clé "const" et lui attribue la valeur 20. Cette variable n'est accessible que dans le bloc car elle a été déclarée en utilisant le mot-clé "const" qui crée une variable à portée de bloc. La troisième ligne affiche la valeur de "num2" dans la console, qui sera 20.</p>

<p>Après le bloc, une autre instruction console.log est appelée, mais cette fois elle affiche la valeur de la variable "num", qui est en dehors du bloc et donc accessible. Enfin, le code tente d'afficher la valeur de "num2", mais comme elle a été déclarée à l'intérieur du bloc et n'est pas accessible à l'extérieur, une erreur se produira, indiquant que "num2 n'est pas défini".</p>


<p><b>Variables ES6</b></p>

<code>
    <p><span className='blueviole'>const</span> <span className='blue'>name</span> = <span className='red'>"Leo"</span>;</p>
    
    <p><span className='blueviole'>const</span> <span className='blue'>name</span> = <span className='red'>"Kevin"</span>; <span className='green'>//L'identifiant (name) a déjà été déclaré</span></p>
    
    <p><span className='blueviole'>const</span> <span className='blue'>name</span> = <span className='red'>"Leo"</span>;</p>
    
    <p><span className='blueviole'>if</span> (<span className='blue1'>true</span>) {'{'}</p>
    
    <p><span className='blueviole'>const</span> <span className='blue'>name</span> = <span className='red'>"Mike"</span>;</p>
    
    <p>{'console'}.<span className='blue'>log</span>(name); <span className='green'>// Mike</span></p>
    
    <p>{'}'}</p>
    
    <p>{'console'}.<span className='blue'>log</span>(name); <span className='green'>// Leo</span></p>
</code>

<p>Ce code déclare une variable constante "name" puis tente de la déclarer à nouveau avec une valeur différente, ce qui entraîne une erreur "L'identifiant 'name' a déjà été déclaré".</p>

<p>Ensuite, le code redéclare "name" comme "Leo" et crée une portée de bloc avec une instruction if. À l'intérieur du bloc, une nouvelle variable "name" est déclarée avec la valeur "Mike", qui est ensuite affichée dans la console. En dehors du bloc, la variable d'origine "name" avec la valeur "Leo" est toujours accessible et est affichée dans la console.</p>

<p>Ainsi, la sortie de ce code est "L'identifiant 'name' a déjà été déclaré" suivi de "Mike" et "Leo".</p>

<p><b>Variables ES6</b></p>

<code>
    <p><span className='blueviole'>if</span> (<span className='blue1'>true</span>) {'{'}</p>
    
    <p><span className='green'>// Zone de Temporal Dead</span></p>

    <p>{'console'}.<span className='blue'>log</span>(<span className='blueviole'>typeof</span> value); <span className='green'>//value n'est pas défini</span></p>

    <p><span className='blueviole'>let</span> <span className='blue'>value</span> = <span className='blue1'>10</span>;</p>

    <p>{'} '}</p>

    <p>{'console'}.<span className='blue'>log</span>(<span className='blueviole'>typeof</span> value); <span className='green'>//indéfini</span></p>
</code>

<p>Le mot-clé <b>let</b> est utilisé pour déclarer la variable <b>valeur</b> dans le bloc. Cependant, lorsque <b>typeof value</b> est appelé dans le bloc avant la déclaration de <b>valeur</b>, le moteur JavaScript génère une ReferenceError car la variable n'est pas encore définie. Cela est connu sous le nom de Zone Temporal Dead, qui fait référence à la période entre la création d'une variable et sa déclaration où elle ne peut pas être accédée. L'instruction <b>console.log(typeof value)</b> en dehors du bloc renvoie <b>indéfini</b> car <b>valeur</b> n'est pas défini dans la portée actuelle.</p>

<p>Dans le deuxième bloc de code :</p>

<code>
  <p><span className='blueviole'>if</span>(<span className='blue1'>true</span>) {'{'}</p>

  <p><span className='blueviole'>let</span> <span className='blue'>value</span> = <span className='blue1'>10</span>;</p>

  <p>{'}'}</p>
</code>

<p>La variable <b>valeur</b> est déclarée et assignée à une valeur de <b>10</b> dans le bloc. Cependant, comme le bloc n'est pas dans la portée globale et que <b>valeur</b> n'est ni retournée ni assignée à une variable dans la portée extérieure, la valeur de <b>valeur</b> est effectivement perdue une fois que le bloc a fini de s'exécuter.</p>

<p><b>Variables ES6</b> </p>

<code>
  <p><span className='blueviole'>for</span>(<span className='blueviole'>var</span> <span className='blue'>i</span> = <span className='blue1'>0</span>; i {'<'} <span className='blue1'>5</span>; i++) {'{'}</p>

  <p><span className='green'>// Code ici</span></p>

  <p>{'}'}</p>

  <p>{'console'}.<span className='blue'>log</span>(i); <span className='green'>// 5</span> </p>

  <hr/>
  
  <p><span className='blueviole'>for</span>(<span className='blueviole'>let</span> <span className='blue'>i</span> = <span className='blue1'>0</span>; i {'<'} <span className='blue1'>5</span>; i++) {'{'}</p>

  <p><span className='green'>// Code ici</span></p>

  <p>{' }'}</p>

  <p>{'console'}.<span className='blue'>log</span>(i); <span className='green'>// i n'est pas défini</span> </p>
</code>

<p>Ce code démontre la différence de portée des variables entre l'utilisation de var et de let dans une boucle for. Dans le premier exemple, la variable i est déclarée à l'aide de var, qui a une portée de fonction. Cela signifie que la variable existe en dehors de la boucle for, donc la valeur de i est 5 lorsqu'elle est imprimée dans la console.</p>

<p>Dans le deuxième exemple, i est déclaré à l'aide de let, qui a une portée de bloc. Cela signifie que la variable n'existe que dans le bloc de la boucle for, donc elle n'est pas accessible en dehors de la boucle. Par conséquent, lorsque i est imprimé dans la console en dehors de la boucle, une erreur de référence est générée indiquant que i n'est pas défini.</p>

<p><b>Opérateur de diffusion ES6</b></p>

<p>L'opérateur de diffusion est une nouvelle fonctionnalité introduite dans ES6 qui vous permet de diffuser ou d'étendre un objet itérable en éléments individuels. Cet objet itérable peut être un tableau, une chaîne ou tout autre objet itérable.</p>

<p><b>L'opérateur de diffusion est représenté par trois points (...) et peut être utilisé de différentes manières. Voici quelques exemples :</b></p>

<p>1. Utilisation de l'opérateur de diffusion pour concaténer des tableaux :</p>

<code>
    <p><span className='blueviole'>const</span> <span className='blue'>array1</span> = [<span className='blue1'>1, 2, 3</span>];</p>

    <p><span className='blueviole'>const</span> <span className='blue'>array2</span> = [<span className='blue1'>4, 5, 6</span>]; </p>

    <p><span className='blueviole'>const</span> <span className='blue'>newArray</span> = [...array1, ...array2]; </p>

    <p>{'console'}.<span className='blue'>log</span>(newArray); <span className='green'>// [1, 2, 3, 4, 5, 6]</span></p>
</code>

<p>2. Utilisation de l'opérateur de diffusion pour créer une copie d'un tableau :</p>

<code>
    <p><span className='blueviole'>const</span> <span className='blue'>array1</span> = [<span className='blue1'>1, 2, 3</span>];</p>

    <p><span className='blueviole'>const</span> <span className='blue'>array2</span> = [...array1];</p>

    <p>{'console'}.<span className='blue'>log</span>(array2); <span className='green'>// [1, 2, 3]</span></p>
</code>

<p>3. Utilisation de l'opérateur de diffusion pour transmettre des arguments à une fonction :</p>

<code>
    <p><span className='blueviole'>function</span> <span className='blue'>sum</span>(<span className='blue1'>a, b, c</span>) {'{'}</p>

    <p><span className='blueviole'>return</span> a + b + c; </p>

    <p>{'}'}</p>

    <p><span className='blueviole'>const</span> <span className='blue'>numbers</span> = [<span className='blue1'>1, 2, 3</span>]; </p>

    <p><span className='blueviole'>const</span> <span className='blue'>result</span> = sum(...numbers);</p>

    <p>{'console'}.<span className='blue'>log</span>(result); <span className='green'>// 6</span></p>
</code>

<p>4. Utilisation de l'opérateur de diffusion pour fusionner des objets: </p>

<code>
  <p><span className='blueviole'>const</span> <span className='blue'>object1</span> = {'{'} x: <span className='blue1'>1</span>, y: <span className='blue1'>2</span> {'}'}; </p>

  <p><span className='blueviole'>const</span> <span className='blue'>object2</span> = {'{'} z: <span className='blue1'>3</span> {'}'};</p>

  <p><span className='blueviole'>const</span> <span className='blue'>mergedObject</span> = {'{'} ...object1, ...object2 {'}'};</p>

  <p>{'console'}.<span className='blue'>log</span>(mergedObject); <span className='green'>// {'{'} x: 1, y: 2, z: 3 {'}'}</span></p>
</code>

<p>Dans tous ces exemples, l'opérateur de diffusion est utilisé pour étendre un objet itérable en éléments individuels. C'est une fonctionnalité utile qui peut simplifier votre code et le rendre plus lisible.</p>

<p><b>La Destructuration ES6</b></p>

<p>La destructuration ES6 est une manière d'extraire des valeurs d'objets ou de tableaux et de les assigner à des variables de manière plus concise et lisible.</p>

<p>Par exemple, considérez l'objet suivant :</p>

<code>
    <p><span className='blueviole'>const</span> <span className='blue'>personne</span> = {'{'}</p>
    
    <p>nom: <span className='red'>'John Doe'</span>, </p>

    <p>âge: <span className='blue1'>30</span>,</p>

    <p>email: <span className='red'>'john.doe@example.com'</span></p>

    <p>{'};'}</p>
 </code>

 <p>Au lieu d'accéder à chaque propriété individuellement comme ceci :</p>

 <code>
    <p><span className='blueviole'>const</span> <span className='blue'>nom</span> = personne.nom;</p>

    <p><span className='blueviole'>const</span> <span className='blue'>âge</span> = personne.âge; </p>

    <p><span className='blueviole'>const</span> <span className='blue'>email</span> = personne.email; </p>
 </code>

 <p>Vous pouvez utiliser la destructuration pour assigner chaque propriété à une variable de manière plus concise :</p>

<code><p> <span className='blueviole'>const</span> {'{'} <span className='blue'>nom, âge, email</span> {'}'} = personne; </p></code>

<p>Cela crée trois variables <b>(nom, âge et email)</b> et leur assigne les valeurs de leurs propriétés correspondantes dans l'objet personne.</p>

<p>Vous pouvez également utiliser la destructuration avec des tableaux. Par exemple :</p>

<code>
  <p><span className='blueviole'>const</span> <span className='blue'>nombres</span> = [<span className='blue1'>1, 2, 3, 4, 5</span>]; </p>

  <p><span className='blueviole'>const</span> [<span className='blue'>premier</span>, <span className='blue'>deuxième</span>, ...<span className='blue'>reste</span>] = nombres; </p>

  <p>{'console'}.<span className='blue'>log</span>(premier); <span className='green'>// 1</span></p>

  <p>{'console'}.<span className='blue'>log</span>(deuxième); <span className='green'>// 2</span></p>

  <p>{'console'}.<span className='blue'>log</span>(reste); <span className='green'>// [3, 4, 5]</span></p>
 </code>

 <p>Cela crée trois variables <b>(premier, deuxième et reste)</b> et leur assigne les valeurs des deux premiers éléments du tableau <b>nombres</b> et le reste des éléments, respectivement.</p>
 
 <p>La destructuration peut également être utilisée avec des objets et des tableaux imbriqués, et peut même avoir des valeurs par défaut assignées aux variables au cas où la valeur déstructurée serait indéfinie.</p>
 
 <p>En général, la destructuration est une fonctionnalité puissante dans ES6 qui peut aider à rendre votre code plus lisible et concis.</p>

 <p><b>Boucle ES6 (for - of)</b></p>

 <p>ES6 a introduit un nouveau type de boucle en JavaScript appelé la boucle <b>for...of</b>. Cette boucle est utilisée pour itérer sur les éléments d'un objet itérable comme les tableaux, les chaînes de caractères, les maps, les sets, etc.</p>
 
 <p>Voici un exemple d'utilisation de la boucle <b>for...of </b> pour itérer sur un tableau :</p>

 <code>
    <p><span className='blueviole'>const</span> <span className='blue'>arr</span> = [<span className='blue1'>1, 2, 3, 4, 5</span>]; </p>

    <p><span className='blueviole'>for</span> (<span className='blueviole'>let</span> <span className='blue'>num</span> <span className='blueviole'>of</span> arr) {'{'}</p>

    <p>{'console'}.<span className='blue'>log</span>(num);</p>

    <p>{'} '}</p>
  </code> 

  <p>Dans cet exemple, la boucle <b>for...of</b> itère sur chaque élément dans le tableau <b>arr</b> et l'affiche dans la console.</p>

  <p>Nous pouvons également utiliser la boucle <b>for...of</b> pour itérer sur les caractères d'une chaîne de caractères :</p>
  
  <code>
    <p><span className='blueviole'>const</span> <span className='blue'>str</span> = <span className='red'>"Bonjour, monde!"</span>; </p>
    
    <p><span className='blueviole'>for</span> (<span className='blueviole'>let</span> <span className='blue'>char</span> <span className='blueviole'>of</span> str) {'{'}</p>

    <p>{'console'}.<span className='blue'>log</span>(char);</p>

    <p>{'}'}</p>
  </code>

  <p>Dans cet exemple, la boucle <b>for...of</b> itère sur chaque caractère dans la chaîne de caractères <b>str</b> et l'affiche dans la console.</p>

  <p>Nous pouvons également utiliser la boucle <b>for...of</b> pour itérer sur les clés ou les valeurs d'un objet Map :</p>

  <code>
    <p><span className='blueviole'>const</span> <span className='blue'>map</span> = <span className='blueviole'>new</span> Map {'(['} </p>
    
    <p>[<span className='red'>'a'</span>, <span className='blue1'>1</span>],</p>

    <p>[<span className='red'>'b'</span>, <span className='blue1'>2</span>], </p>

    <p>[<span className='red'>'c'</span>, <span className='blue1'>3</span>] </p>

    <p>{']);'}</p>

    <p><span className='blueviole'>for</span> (<span className='blueviole'>let</span> [<span className='blue'>clé, valeur</span>] <span className='blueviole'>of</span> map) {'{'}</p>

    <p>{'console'}.<span className='blue'>log</span>(clé, valeur);</p>

    <p>{'}'}</p>
   </code>

   <p>Dans cet exemple, la boucle <b>for...of</b> itère sur chaque paire clé-valeur dans l'objet <b>map</b> et les affiche dans la console.</p>

   <p>En général, la boucle <b>for...of</b> est un ajout utile au langage JavaScript qui simplifie l'itération sur les objets itérables.</p>

   <p><b>Paramètre de repos de fonction ES6</b></p>

   <p>Le paramètre de repos de fonction ES6 est une fonctionnalité qui permet à une fonction d'accepter un nombre indéfini d'arguments sous forme de tableau. Il est indiqué par trois points (...) suivi du nom du paramètre.</p>

   <p>Voici un exemple d'utilisation du paramètre de repos :</p>
    
 <code>
    <p><span className='blueviole'>function</span> <span className='blue'>somme</span>(...<span className='blue'>nombres</span>) {'{'}</p>
    
    <p><span className='blueviole'>let</span> <span className='blueviole'>resultat</span> = <span className='blue1'>0</span>; </p>

    <p><span className='blueviole'>for</span> (<span className='blueviole'>let</span> <span className='blue'>nombre</span> <span className='blueviole'>de</span> nombres) {'{'}</p>

    <p>{'resultat += nombre;'}</p>

    <p>&nbsp;{' }'}</p>

    <p><span className='blueviole'>return</span> resultat; </p>

    <p>{'}'}</p>

    <p>{'console'}.<span className='blue'>log</span>(somme(<span className='blue1'>1, 2, 3</span>)); <span className='green'>// Résultat: 6</span></p>

    <p>{'console'}.<span className='blue'>log</span>(somme(<span className='blue1'>4, 5, 6, 7</span>)); <span className='green'>// Résultat: 22</span></p>
 </code>
    
 <p>Dans l'exemple ci-dessus, la fonction sum accepte un nombre indéfini d'arguments en utilisant le paramètre rest ...numbers. Ensuite, elle parcourt le tableau numbers à l'aide d'une boucle for...of pour additionner les valeurs et renvoie le résultat.</p>
 
 <p>Le paramètre rest est utile lorsque vous voulez écrire une fonction qui peut manipuler un nombre variable d'arguments sans avoir à définir explicitement chaque argument. Il est couramment utilisé dans les fonctions qui manipulent des tableaux ou effectuent des opérations mathématiques sur un ensemble de valeurs.</p>
 
 <p>En résumé, le paramètre rest est une fonctionnalité pratique qui facilite l'écriture de fonctions plus flexibles et polyvalentes.</p>
 
 <p><b>Les fonctions fléchées</b></p>
 
 <p>Les fonctions fléchées sont une manière concise d'écrire des fonctions en JavaScript, introduites dans ES6 (ECMAScript 2015). Elles offrent une syntaxe plus compacte par rapport aux expressions de fonction traditionnelles, rendant le code plus facile à lire et à écrire.</p>
 
 <p>Voici un exemple d'une expression de fonction traditionnelle qui prend deux paramètres et renvoie leur somme :</p>

 <code>
    <p><span className='blueviole'>function</span> <span className='blue'>somme</span>(<span className='blue1'>a, b</span>) {'{'}</p>  
    
    <p><span className='blueviole'>return</span> a + b; </p>

    <p>{'}'}</p>
  </code>

  <p>La même fonction peut être écrite en utilisant une fonction fléchée de la manière suivante :</p>

    <code><p><span className='blueviole'>const</span> <span className='blue'>somme</span> = (<span className='blue1'>a, b</span>) {'=>'} a + b; </p></code>

   <p>Dans cet exemple, la fonction est définie en utilisant la syntaxe de la flèche <b>{'=>.'}</b> Les paramètres <b>(a, b)</b> sont inclus entre parenthèses, suivis de la flèche <b>{'=>'}</b> et du corps de la fonction <b>a + b.</b> Étant donné que le corps de la fonction est une seule instruction, les accolades et le mot-clé <b>return</b> peuvent être omis.</p>

   <p>Les fonctions fléchées peuvent également être utilisées en tant que fonctions anonymes, assignées à des variables et passées en tant qu'arguments à d'autres fonctions. Voici un exemple d'une fonction fléchée qui prend un tableau et renvoie un nouveau tableau avec chaque élément doublé :</p>
    
    <code><p><span className='blueviole'>const</span> <span className='blue'>doubleArray</span> = <span className='blue'>arr</span> {'=>'}arr.map(<span className='blue'>item</span> {'=>'} item * <span className='blue1'>2</span>); </p></code>

 <p>Dans cet exemple, la fonction fléchée{' (item => item * 2)'} est passée en tant qu'argument à la méthode <b>map()</b>, qui applique la fonction à chaque élément du tableau et renvoie un nouveau tableau avec les valeurs modifiées.</p>

 <p>Les fonctions fléchées ont également une liaison lexicale <b>this</b>, ce qui signifie que this fait référence à la valeur de <b>this</b> dans la portée englobante, plutôt qu'à <b>this</b> de la fonction elle-même. Cela rend les fonctions fléchées particulièrement utiles pour travailler avec les méthodes d'objet et les gestionnaires d'événements.</p>

 <p>En général, les fonctions fléchées offrent une manière plus concise et lisible d'écrire des fonctions en JavaScript, rendant le code plus facile à comprendre et à maintenir.</p>
 
 <p><b>Prototype</b></p>
 
 <p>En JavaScript, chaque objet possède une propriété interne appelée [[Prototype]] (parfois appelée "dunder proto"), qui fait référence à un autre objet ou null. Cette propriété est utilisée pour implémenter l'héritage et permettre aux objets d'hériter des propriétés et des méthodes de leurs prototypes.</p>
 
 <p>En ES5, vous pouvez créer un prototype en utilisant des fonctions constructeurs et la propriété prototype. Voici un exemple :</p>

<code>
  <p><span className='blueviole'>function</span> <span className='blue'>Personne</span>(<span className='blue1'>nom, age</span>) {'{'}</p>
  
  <p><span className='blueviole'>this</span>.nom = nom; </p>
  
  <p><span className='blueviole'>this</span>.age = age; </p>
  
  <p>&nbsp;{'} '}</p>
  
  <p>Personne.prototype.saluer = <span className='blueviole'>function</span>() {'{'}</p>
  
  <p>{'console'}.<span className='blue'>log</span>(<span className='red'>`Bonjour, je m'appelle</span> ${'{'}<span className='blueviole'>this</span>.nom{'}'} <span className='red'>et j'ai</span> ${'{'}<span className='blueviole'>this</span>.age{'}'} <span className='red'>ans.`</span>);</p>
  
  <p>{'} '}</p>
  
  <p><span className='blueviole'>const</span> <span className='blue'>john</span> = <span className='blueviole'>new</span> Personne(<span className='red'>"John"</span>, <span className='blue1'>30</span>); </p>
  
  <p>john.saluer(); <span className='green'>// "Bonjour, je m'appelle John et j'ai 30 ans."</span></p>
</code>
 
 <p>Dans cet exemple, nous créons une fonction constructeur appelée <b>Personne</b> qui prend un <b>nom</b> et un <b>âge</b> en tant qu'arguments et les définit comme propriétés sur l'objet. Nous ajoutons ensuite une méthode <b>saluer</b> au prototype de <b>Personne</b> en utilisant l'objet <b>Personne.prototype</b>. Cette méthode enregistre un message de salutation dans la console qui inclut le nom et l'âge de la personne.</p>

<p>Lorsque nous créons un nouvel objet en utilisant le mot-clé <b>new</b> et le constructeur <b>Personne</b>, la propriété [[Prototype]] du nouvel objet pointera vers l'objet <b>Personne.prototype</b>. Cela permet au nouvel objet d'hériter de la méthode <b>saluer</b> de son prototype.</p>

<p>En ES6, vous pouvez utiliser la syntaxe <b>class</b> pour définir une classe et son prototype. Voici le même exemple en utilisant des classes ES6 :</p>

<code>
  <p><span className='blueviole'>class</span> <span className='green'>Personne</span> {'{'}</p>
  
  <p>constructor(<span className='blue'>nom, age</span>) {'{'}</p>
  
  <p><span className='blueviole'>this</span>.nom = nom; </p>
  
  <p><span className='blueviole'>this</span>.age = age;</p>
  
  <p>{'}'}</p>
  
  <p>{'saluer() { '}</p>
  
  <p>{'console'}.<span className='blue'>log</span>(<span className='red'>`Bonjour, je m'appelle</span> ${'{'}<span className='blueviole'>this</span>.nom{'}'} <span className='red'>et j'ai</span> ${'{'}<span className='blueviole'>this</span>.age{'}'} <span className='red'>ans.`</span>);</p>
  
  <p>&nbsp;{'}'}</p>
  
  <p>{'}'}</p>
  
  <p><span className='blueviole'>const</span> <span className='blue'>john</span> = <span className='blueviole'>new</span> Personne(<span className='red'>"John"</span>, <span className='blue1'>30</span>); </p>
  
  <p>john.saluer(); <span className='green'>// "Bonjour, je m'appelle John et j'ai 30 ans."</span></p>
 
 </code>
    <p>Dans cet exemple, nous définissons une classe appelée <b>Personne</b> avec un constructeur qui prend un <b>nom </b>et un <b>âge</b> et les définit comme propriétés sur l'objet. Nous définissons ensuite une méthode <b>saluer</b> directement sur la classe. Sous le capot, la syntaxe de la <b>class</b> crée une fonction constructeur et définit son prototype sur le prototype de la classe.</p>
    
    <p>À la fois en ES5 et en ES6, le concept de prototypes est utilisé pour implémenter l'héritage en JavaScript, mais la syntaxe pour définir les prototypes est différente. Les classes ES6 offrent une syntaxe plus concise et intuitive pour créer des classes et définir leurs prototypes, tandis que les prototypes ES5 offrent plus de flexibilité et de contrôle sur la manière dont les prototypes sont définis.</p>
    
    <p><b>Classe (méthodes statiques)</b></p>
    
    <p>En ES6, les classes ont été introduites comme un moyen de créer des plans d'objet. Les classes sont un modèle pour créer des objets qui encapsulent des données et des fonctionnalités. Une caractéristique des classes est la possibilité de définir des méthodes statiques, qui sont des méthodes appelées sur la classe elle-même plutôt que sur une instance de la classe.</p>
    
    <p>Une méthode statique est une méthode qui appartient à la classe elle-même, plutôt qu'à une instance de la classe. Elle peut être appelée sur la classe sans avoir à créer d'instance de la classe au préalable.</p>
    
    <p>Voici un exemple d'une classe avec une méthode statique :</p>
  <code>
    
    <p><span className='blueviole'>class</span> <span className='green'>Voiture</span> {'{'}</p>
    
    <p>constructor(<span className='blue'>marque, modèle</span>) {'{'}</p>
  
    <p><span className='blueviole'>this</span>.marque = marque; </p>
    
    <p><span className='blueviole'>this</span>.modèle = modèle; </p>
    
    <p>{'}'}</p>
    
    <p><span className='blueviole'>static</span> comparer(<span className='blue'>voiture1, voiture2</span>) {'{'}</p>
    
    <p><span className='blueviole'>if</span> (voiture1.marque === voiture2.marque) {'{'}</p>
    
    <p><span className='blueviole'>return</span> <span className='red'>"Même marque"</span>; </p>
    
    <p>&nbsp;{'}'} <span className='blueviole'>else</span> {'{'}</p>
    
    <p><span className='blueviole'>return</span> <span className='red'>"Marque différente"</span>; </p>
    
    <p>&nbsp;&nbsp;{' }'}</p>
    
    <p>&nbsp;{' }'}</p>
    
    <p>{' }'}</p>
    
    <p><span className='blueviole'>let</span> <span className='blue'>voiture1</span> = <span className='blueviole'>new</span> Voiture(<span className='red'>"Honda", "Civic"</span>); </p>
    
    <p><span className='blueviole'>let</span> <span className='blue'>voiture2</span> = <span className='blueviole'>new</span> Voiture(<span className='red'>"Toyota", "Corolla"</span>); </p>
    <p>console.<span className='blue'>log</span>(Voiture.comparer(voiture1, voiture2)); <span className='green'>// "Marque différente"</span> </p>
  </code>
    
    <p>Dans l'exemple ci-dessus, la classe Voiture a une méthode statique appelée comparer. Cette méthode prend deux objets Voiture en tant que paramètres et renvoie une chaîne indiquant s'ils ont la même marque ou non. La méthode comparer peut être appelée sur la classe Voiture elle-même, plutôt que sur une instance de la classe.</p>
    
    <p>Remarquez que dans la méthode comparer, le mot-clé this n'est pas utilisé, car la méthode n'est pas appelée sur une instance de la classe. Au lieu de cela, la méthode prend deux objets Voiture en tant que paramètres et compare leurs propriétés marque.</p>
    
    <p>En ES5, les méthodes statiques peuvent être définies sur une fonction constructeur en utilisant la propriété prototype de la fonction constructeur. Voici un exemple de la façon dont la classe ES6 ci-dessus pourrait ressembler en ES5 :</p>
  <code>
    
    <p><span className='blueviole'>function</span> <span className='blue'>Voiture</span>(<span className='blue'>marque, modèle</span>) {'{'}</p>
    
    <p><span className='blueviole'>this</span>.marque = marque; </p>
    
    <p><span className='blueviole'>this</span>.modèle = modèle; </p>
    
    <p>{'} '}</p>
    
    <p>Voiture.comparer = <span className='blueviole'>function</span>(<span className='blue'>voiture1, voiture2</span>) {'{'}</p>
    
    <p><span className='blueviole'>if</span> (voiture1.marque === voiture2.marque) {'{'}</p>
    
    <p><span className='blueviole'>return</span> <span className='red'>"Même marque"</span>; </p>
    
    <p>&nbsp;{'}'} <span className='blueviole'>else</span>  {'{'}</p>
    
    <p><span className='blueviole'>return</span> <span className='red'>"Marque différente"</span>; </p>
    
    <p>&nbsp;{'}'}</p>
    
    <p>{'}; '}</p>

    <p><span className='blueviole'>let</span> <span className='blue'>car1</span> = <span className='blueviole'>new</span> Car(<span className='red'>"Honda", "Civic"</span>); </p>
    
    <p><span className='blueviole'>let</span> <span className='blue'>car2</span> = <span className='blueviole'>new</span> Car(<span className='red'>"Toyota", "Corolla"</span>); </p>
    
    <p>console.<span className='blue'>log</span>(Car.compare(car1, car2)); <span className='green'>// "Different make"</span> </p>
 </code>
    <p>Dans l'exemple ES5, la méthode compare est définie directement sur la fonction constructeur Car, plutôt que sur sa propriété prototype. Cela permet à la méthode d'être appelée sur la fonction constructeur Car elle-même.</p>
    
    <p><b>Symbol</b></p>
    
    <p>En ES6, Symbol est un nouveau type de données primitif qui représente un identifiant unique. Contrairement aux chaînes de caractères ou aux nombres, les symboles sont garantis d'être uniques et immuables, ce qui les rend utiles pour créer des clés ou des propriétés d'objet qui doivent être complètement uniques.</p>
    
    <p>Pour créer un symbole, vous pouvez utiliser la fonction <b>Symbol()</b>, comme ceci :</p>
    
    <code><p><span className='blueviole'>const</span> <span className='blue'>mySymbol</span> = Symbol();</p></code>

    <p>Vous pouvez également ajouter une description à un symbole pour le rendre plus facile à identifier ultérieurement, comme ceci :</p>
    
    <code><p><span className='blueviole'>const</span> <span className='blue'>mySymbol</span> = Symbol(<span className='red'>'My Symbol'</span>); </p></code>

    <p>Les symboles peuvent être utilisés comme clés ou propriétés d'objet, comme ceci :</p>
 <code>
    <p><span className='blueviole'>const</span> <span className='blue'>mySymbol</span> = Symbol(<span className='red'>'My Symbol'</span>); </p>
  
    <p><span className='blueviole'>const</span> <span className='blue'>obj</span> = {'{}'}; </p>
    
    <p>{'obj[mySymbol]'} = <span className='red'>'Bonjour, le Monde!'</span>; </p>
    
    <p>{"console"}.<span className='blue'>log</span>{'(obj[mySymbol])'}; <span className='green'>// Sortie : Bonjour, le Monde!</span> </p>
 </code>
    <p>L'un des principaux avantages de l'utilisation des symboles est qu'ils ne peuvent pas être accédés ou modifiés accidentellement, car ils sont uniques et ne peuvent pas être répliqués. Cela les rend idéaux pour créer des propriétés privées ou internes dans les objets.</p>
    
    <p>Un autre avantage des symboles est qu'ils peuvent être utilisés pour définir des symboles bien connus, qui sont des symboles intégrés ayant une signification ou un comportement spécifique dans le langage. Par exemple, le symbole Symbol.iterator est utilisé pour définir l'itérateur par défaut pour un objet.</p>
    
    <p>Globalement, les symboles fournissent un moyen puissant et flexible de créer des identifiants uniques et de définir un comportement personnalisé pour les objets en JavaScript.</p>
    
    <p><b>Promise</b></p>
    
    <p>Une Promise est une fonctionnalité introduite en ES6 qui vous permet de gérer les opérations asynchrones de manière plus facile et organisée.</p>
    
    <p>En termes simples, une Promise est un objet qui représente une valeur qui pourrait ne pas être disponible immédiatement, mais le sera à un moment donné dans le futur. Elle fournit un moyen de gérer les résultats des opérations asynchrones (telles que les requêtes API ou les requêtes de base de données) sans bloquer le thread principal d'exécution </p>
    
    <p>Une Promise a trois états : en attente, résolue ou rejetée. Lorsqu'une Promise est en attente, cela signifie que l'opération qu'elle représente n'est pas encore terminée. Lorsqu'une Promise est résolue, cela signifie que l'opération a réussi et que le résultat est disponible. Lorsqu'une Promise est rejetée, cela signifie que l'opération a échoué et qu'une erreur est disponible.</p>
    
    <p>Voici un exemple de comment utiliser une Promise pour récupérer des données à partir d'une API :</p>
 <code>
    <p><span className='blueviole'>fetch</span>(<span className='blue1'>'https://jsonplaceholder.typicode.com/todos/1'</span>) </p>
    
    <p>.<span className='blue'>then</span>(response {'=>'} response.<span className='blue'>json</span>()) </p>
    
    <p>.<span className='blue'>then</span>(data {'=>'} {'console'}.<span className='blue'>log</span>(data))</p>
    
    <p>.<span className='blue'>catch</span>(error {'=>'} {'console'}.<span className='blue'>error</span>(error))</p>
 </code>
    <p>Dans cet exemple, <b>fetch</b> est une fonction qui renvoie une Promise qui se résout avec la réponse de l'API. La méthode <b>then</b> est appelée sur la Promise, qui prend une fonction de rappel qui est exécutée lorsque la Promise est résolue. Le premier rappel then analyse la réponse en JSON et la retourne. Le deuxième rappel then enregistre les données analysées dans la console. La méthode <b>catch</b> est appelée pour gérer les erreurs qui se produisent pendant l'opération.</p>
    
    <p>Les Promises peuvent également être créées manuellement en utilisant le constructeur <b>Promise</b> :</p>
 <code>
    <p><span className='blueviole'>const</span> <span className='blue'>promise</span> = <span className='blueviole'>new</span> Promise{'(('}<span className='blue'>resolve, reject</span>{')'} {'=>'} {"{"}</p>
    
    <p>{"setTimeout(() => { "}</p>
    
    <p> resolve(<span className='red'>'Succès!'</span>) </p>
    
    <p>&nbsp;{" }"}, <span className='blue1'>1000</span>{')'} </p>
    
    <p>{"}) "}</p>
    
    <p> promise.then(<span className='blue'>result</span> {"=> console"}.<span className='blue'>log</span>(result)) <span className='green'>// Sortie : Succès!</span> </p>
 </code>
    
    <p>Dans cet exemple, la Promise est créée avec une fonction qui prend deux paramètres : <b>resolve et reject.</b> La fonction <b>resolve</b> est appelée après une seconde avec l'argument <b>'Succès!'</b>. La méthode <b>then</b> est appelée sur la Promise, qui prend une fonction de rappel qui est exécutée lorsque la Promise est résolue. Le rappel enregistre le résultat dans la console.</p>

    <b><p>* Texte écrit avec l'aide d'un traducteur. Si vous trouvez une erreur, veuillez nous en informer *</p></b>
  
  <div className='ads-container'>  
{/*  реклама  */}
</div> 
</div>
  )
}

export default FrEs6;