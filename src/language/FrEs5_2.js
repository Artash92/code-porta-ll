import React from 'react';

 function FrEs5_2() {
  return (
    <div>
      <div className='ad-container'>  
          {/*  реклама  */}
        </div> 
          
  <h3>Boucles et conditions en JavaScript</h3>
  
  <p><b>1. La boucle while</b></p>
  
  <p>La boucle while est utilisée pour exécuter un bloc de code de manière répétée tant qu'une condition spécifiée est vraie.</p>

<p>Voici un exemple :</p>
 
   <code>
    <p><span className='blueviole'>var</span> <span className='blue'>i</span> = <span className='blue'>0</span>; <span className='darkgreen'>// initialiser la variable de compteur</span></p> 
    <p><span className='blueviole'>while</span> (i {'<'}<span className='blue'> 5</span>) {'{'}<span className='darkgreen'> // définir la condition</span></p>
    <p>{'console.log'}(<span className='blue'>i</span>); <span className='darkgreen'>// exécuter le bloc de code</span></p>
    <p>i++; <span className='darkgreen'>// mettre à jour la variable de compteur</span></p>
    <p>{'}'}</p>
   </code>
  
  <p>Dans cet exemple, la boucle s'exécutera tant que la valeur de i est inférieure à 5. Le bloc de code sera exécuté à chaque fois que la boucle s'exécutera, et la valeur de i sera incrémentée de 1 jusqu'à ce qu'elle atteigne 5. La sortie de ce code sera :</p>

<code>
  <p className='blue'>0</p>
  <p className='blue'>1</p>
  <p className='blue'>2</p>
  <p className='blue'>3</p>
  <p className='blue'>4</p>
</code>
 
 <p><b>2. La boucle for</b></p>
 
  <p>La boucle for est utilisée pour exécuter un bloc de code un nombre spécifié de fois. Voici un exemple :</p>

<code>
  <p><span className='blueviole'>for</span> (<span className='blueviole'>var</span> i = <span className='blue'>0</span>; i {'<'} <span className='blue'>5</span>; i++) {'{'} </p>
  <p>{'console.log(i);'}</p>
  <p>{'}'}</p>
</code>
  
  <p>Dans cet exemple, la boucle s'exécutera 5 fois, puisque la condition spécifie que i doit être inférieur à 5. Le bloc de code sera exécuté à chaque fois que la boucle s'exécutera, et la valeur de i sera incrémentée de 1 à chaque fois. La sortie de ce code sera la même que dans l'exemple précédent :</p>

<code>
  <p className='blue'>0</p>
  <p className='blue'>1</p>
  <p className='blue'>2</p>
  <p className='blue'>3</p>
  <p className='blue'>4</p>
</code>

<p><b>3. La boucle do-while</b></p>
  
  <p>La boucle do-while est similaire à la boucle while, mais elle exécute le bloc de code au moins une fois, même si la condition est initialement fausse. Voici un exemple:</p>

<code>
  <p><span className='blueviole'>var</span> i = <span className='blue'>0</span>; <span className='darkgreen'>// initialiser la variable de compteur</span></p>
  <p><span className='blueviole'>do</span> {'{'}</p>
  <p>{'console.log(i);'} <span className='darkgreen'>// exécuter le bloc de code</span></p>
  <p>i++; <span className='darkgreen'>// mettre à jour la variable de compteur</span></p>
  <p>{'}'}</p>
  <p><span className='blueviole'>while</span> (i {'<'} <span className='blue'>5</span>); <span className='darkgreen'>// définir la condition</span></p>
</code>
  
  <p>Dans cet exemple, la boucle s'exécutera au moins une fois, puisque la condition est vérifiée après l'exécution du bloc de code. Le bloc de code sera exécuté à chaque fois que la boucle s'exécutera, et la valeur de i sera incrémentée de 1 à chaque fois, jusqu'à ce qu'elle atteigne 5. La sortie de ce code sera la même que dans les exemples précédents:</p>

<code>
  <p className='blue'>0</p>
  <p className='blue'>1</p>
  <p className='blue'>2</p>
  <p className='blue'>3</p>
  <p className='blue'>4</p>
</code>

<p><b>4. Les opérateurs ++ et --</b></p>
  
<p>Les opérateurs ++ et -- sont utilisés pour incrémenter ou décrémenter une variable de 1. Voici quelques exemples :</p>

<code>
  <p><span className='blueviole'>var</span> <span className='blue'>i</span> = <span className='blue'>0</span>; <span className='darkgreen'>// initialiser une variable</span></p>
  <p>i++; <span className='darkgreen'>// incrémenter la variable</span></p>
  <p>{'console.log(i);'} <span className='darkgreen'>// sortie: 1</span></p>
  <p><span className='blueviole'>var</span> <span className='blue'>j</span> = <span className='blue'>2</span>; <span className='darkgreen'>// initialiser une autre variable</span></p>
  <p>j--; <span className='darkgreen'>// décrémenter la variable</span> </p>
  <p>{'console.log(j);'} <span className='darkgreen'>// sortie: 1</span></p>
</code>
  
  <p>Ces opérateurs sont souvent utilisés dans les boucles pour suivre l'itération actuelle.</p>
  
  <b>5. Les instructions if, else et else if</b>

  <p>L'instruction if est utilisée pour exécuter un bloc de code si une condition spécifiée est vraie. L'instruction else est utilisée pour exécuter un bloc de code si la condition est fausse. L'instruction else if est utilisée pour tester plusieurs conditions. Voici un exemple :</p>

<code>
  <p><span className='blueviole'>var</span> <span className='blue'>x</span> = <span className='blue'>15</span>; <span className='darkgreen'>// initialiser une variable</span></p>
  <p><span className='blueviole'>if</span> (x {'>'} <span className='blue'>10</span>) {'{'} <span className='darkgreen'>// vérifier la condition</span></p>
  <p>{'console.log'}(<span className='red'>"x est supérieur à 10"</span>)</p>
  <p>{'}'}</p>
</code>
  
  <h3>Opérateur conditionnel (ternaire)</h3>
  
  <p>L'opérateur conditionnel (ternaire) est une façon abrégée d'écrire une instruction if-else en JavaScript. Il prend trois opérandes : une condition, une valeur à retourner si la condition est vraie, et une valeur à retourner si la condition est fausse. La syntaxe pour l'opérateur conditionnel est : (condition) ? valeur-vraie : valeur-fausse. Voici quelques exemples d'utilisation de l'opérateur conditionnel en JavaScript :</p>
  <p><b>Exemple 1 :</b></p>

<code>
  <p><span className='blueviole'>var</span> <span className='blue'>a</span> = <span className='blue'>5</span>;</p>
  <p><span className='blueviole'>var</span><span className='blue'> result</span> = (a == <span className='blue'>5</span>) ? <span className='red'>"vrai"</span> : <span className='red'>"faux"</span>;</p>
  <p>document.getElementById(<span className='red'>"example1"</span>).innerHTML = result;</p>
</code>

<p>Sortie : vrai Explication : Dans cet exemple, nous définissons la valeur de la variable a à 5, puis nous utilisons l'opérateur conditionnel pour vérifier si a est égal à 5. Comme c'est vrai, la valeur "vrai" est retournée et assignée à la variable result, qui est ensuite imprimée dans l'élément div HTML.</p>

<p><b>Exemple 2 :</b></p>

<code>
  <p> <span className='blueviole'>var</span> <span className='blue'>a</span> = <span className='blue'>10</span>;</p>
  <p><span className='blueviole'>var</span> <span className='blue'>result</span> = (a == <span className='blue'>5</span>) ? <span className='red'>"vrai"</span> : <span className='red'>"faux"</span>;</p>
  <p>document.getElementById(<span className='red'>"example2"</span>).innerHTML = result;</p>
</code>

<p>Sortie: faux Explication: Dans cet exemple, nous définissons la valeur de la variable a à 10, puis nous utilisons l'opérateur conditionnel pour vérifier si a est égal à 5. Comme c'est faux, la valeur "faux" est retournée et assignée à la variable result, qui est ensuite imprimée dans l'élément div HTML.</p>

<p><b>Exemple 3:</b></p>

<code>
  <p><span className='blueviole'>var</span> <span className='blue'>a</span> = <span className='blue'>7</span>;</p>
  <p><span className='blueviole'>var</span> <span className='blue'>result</span> = ( a {'>'} <span className='blue'>10</span>) ? <span className='red'>"plus grand que 10"</span>: (a {'<'} <span className='blue'>5</span>) ? <span className='red'>"moins que 5"</span> : <span className='red'>"entre 5 et 10"</span> ;</p>
  <p>document.getElementById(<span className='red'>"example3"</span>).innerHTML = result;</p>
</code>

<p>Sortie: entre 5 et 10 Explication: Dans cet exemple, nous définissons la valeur de la variable a à 7, puis nous utilisons l'opérateur conditionnel pour vérifier si a est supérieur à 10. Comme c'est faux, nous passons à la deuxième condition qui vérifie si a est inférieur à 5. Comme c'est aussi faux, nous passons à la troisième condition qui retourne la valeur "entre 5 et 10" puisque c'est la seule option restante. Le résultat est ensuite imprimé dans l'élément div HTML.</p>
   
<b><p>* Texte écrit avec l'aide d'un traducteur. Si vous trouvez une erreur, veuillez nous en informer *</p></b>
    <div className='ads-container'>  
  {/*  реклама  */}
  </div>
</div>
  )
}



export default FrEs5_2;