import React from 'react';

 function FrEs5_3() {
  return (
    <div>
       <div className='ad-container'>  
          {/*  реклама  */}
        </div> 

        <h3>Concept de fonction</h3>

<p>Une fonction est un bloc de code qui peut être défini et exécuté ultérieurement. Elle est utilisée pour effectuer une tâche spécifique et peut être appelée depuis n'importe quelle partie du programme où elle est accessible. Les fonctions rendent le code plus organisé, réutilisable et plus facile à comprendre.</p>

<h3>Création d'une fonction</h3>

<p>En JavaScript ES5, une fonction peut être créée en utilisant le mot-clé function, suivi du nom de la fonction et d'un ensemble de parenthèses. À l'intérieur des parenthèses, nous pouvons définir un ou plusieurs paramètres, et à l'intérieur des accolades, nous définissons le code à exécuter lorsque la fonction est appelée.</p>

<p><b>Exemple :</b></p>

<code>
  <p><span className='blueviole'>function </span><span className='blue'>sum</span>(<span className='blue'>a</span>,<span className='blue'> b</span>) {'{'} </p>  
  <p><span className='blueviole'>return</span> a + b;</p>  
  <p>{'}'}</p>  
</code>

<p><b>Arguments de la fonction :</b></p>

<p>Les arguments de la fonction sont les valeurs qui sont passées à une fonction lors de son appel. Nous pouvons définir un ou plusieurs paramètres entre parenthèses lors de la création d'une fonction. Lorsque la fonction est appelée, nous passons les valeurs réelles en tant qu'arguments.</p>

<p><b>Exemple :</b></p>

<code>
  <p><span className='blueviole'>function </span><span className='blue'>sum</span>(<span className='blue'>a</span>,<span className='blue'> b</span>) {'{'} </p>  
  <p><span className='blueviole'>return</span> a + b;</p>  
  <p>{'}'}</p>  
  <p><span className='blueviole'>var</span> <span className='blue'>result</span> = sum(<span className='blue'>5</span>, <span className='blue'>10</span>);</p>
  <p> <span className='darkgreen'>// Sortie: 15</span></p>
</code>

<p><b>Portées des variables :</b></p>

<p>Les variables peuvent avoir différentes portées en fonction de l'endroit où elles sont déclarées. Voici un exemple d'une variable déclarée à l'intérieur d'une fonction, qui n'est pas accessible en dehors de cette fonction :</p>

<p><b>Exemple :</b></p>

<code>
  <p><span className='blueviole'>function</span> <span className='blue'>showMessage</span>() {'{'} </p>
  <p><span className='blueviole'>var</span> <span className='blue'>message</span> = <span className='red'>'Bonjour, le monde!'</span>;</p>
  <p>{"console.log(message);"}</p>
  <p>{"} "}</p>
  <p>showMessage(); <span className='darkgreen'>// Sortie: Bonjour, le monde!</span> </p>
  <p>{" console.log(message); "} <span className='darkgreen'>// Sortie: Uncaught ReferenceError: message is not defined</span></p>
</code>

<p><b>Expressions de fonction :</b></p>

<p>Une expression de fonction est une fonction qui est assignée à une variable. Voici un exemple :</p>

<code>
  <p><span className='blueviole'>var</span> <span className='blue'>multiply</span> = <span className='blueviole'>function</span>(<span className='blue'>a</span>, <span className='blue'>b</span>) {'{'}</p>
  <p><span className='blueviole'>return</span> a * b ;</p>
  <p>{'}'}</p>
  <p><span className='blueviole'>var</span> <span className='blueviole'>result</span> = multiply(<span className='blue'>3</span>, <span className='blue'>4</span>);</p>
  <p>{'console.log(result);'} <span className='darkgreen'>// Sortie: 12</span></p>
</code>

<p><b>Fonctions anonymes :</b></p>

<p>Une fonction anonyme est une fonction sans nom. Voici un exemple d'une fonction anonyme qui est immédiatement invoquée :</p>


 <code>
  <p>{'('}<span className='blueviole'>function</span>() {'{'}</p>
  <p>{'console.log'}(<span className='red'>"Bonjour, le monde!"</span>);</p>
  <p>{'})();'}</p>
 </code>

<p><b>Fermetures</b></p>

<p>Les fermetures sont une fonctionnalité de JavaScript qui permet à une fonction d'accéder et de manipuler des variables qui sont en dehors de sa propre portée. En d'autres termes, une fermeture est formée lorsqu'une fonction est définie à l'intérieur d'une autre fonction et a accès aux variables de la fonction parente. Voici un exemple de fermeture en JavaScript ES5 :</p>

<code>
  <p><span className='blueviole'>function</span> <span className='blue'>outerFunction</span>() {'{'}</p>
  <p><span className='blueviole'>var</span> <span className='blue'>outerVariable</span> = <span className='red'>"Je suis à l'extérieur!"</span>;</p>
  <p><span className='blueviole'>function</span> <span className='blue'>innerFunction</span>() {'{'}</p> 
  <p>{'console.log(outerVariable);'}</p>
  <p>{'}'}</p>
  <p><span className='blueviole'>return </span>innerFunction;</p>
  <p>{'}'}</p>
  <p><span className='blueviole'>var</span> <span className='blue'>closureExample</span> = outerFunction();</p>
  <p>closureExample(); <span className='darkgreen'>// Sortie: "Je suis à l'extérieur!"</span></p>
</code>

<p>Dans cet exemple, la fonction outerFunction définit une variable outerVariable et une fonction innerFunction qui enregistre la valeur de outerVariable. L'innerFunction est renvoyée par outerFunction et assignée à la variable closureExample. Lorsque closureExample() est appelée, elle enregistre la valeur de outerVariable, qui est "Je suis à l'extérieur!". Cela est possible car innerFunction a accès à outerVariable grâce à la fermeture, même si outerVariable n'est pas définie à l'intérieur de innerFunction. Il s'agit simplement d'un exemple simple de fermetures en JavaScript ES5, mais il montre à quel point elles peuvent être puissantes et utiles. Les fermetures sont souvent utilisées pour créer des variables et des méthodes privées en JavaScript, entre autres choses.</p>
 
<b><p>* Texte écrit avec l'aide d'un traducteur. Si vous trouvez une erreur, veuillez nous en informer *</p></b>
    <div className='ads-container'>  
  {/*  реклама  */}
  </div>
    </div>
  )
}



export default FrEs5_3;