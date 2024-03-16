import React from 'react'

 function FrEs5_1() {
  return (
    <div>
      <div className='ad-container'>  
          {/*  реклама  */}
        </div> 
     
      <h1>JavaScript</h1>     
      
      <p>
      JavaScript a été créé en 1995 par Brendan Eich lorsqu'il travaillait chez Netscape Communications Corporation. 
      Le langage était initialement appelé Mocha, mais a ensuite été renommé LiveScript avant de finalement être nommé JavaScript. 
      Le changement de nom était principalement dû à des raisons marketing et pour capitaliser sur la popularité de Java à l'époque. 
      Brendan Eich est un technologue et programmeur américain qui a travaillé pour des entreprises telles que Mozilla, Netscape et Brave Software. 
      Il est considéré comme le créateur de JavaScript et a également apporté des contributions significatives à d'autres langages de programmation.
      </p>
      
      <h3>ECMAScript définit 7 types de données:</h3>
      
      <code>
      <ul>
        <li><span className='blue'>Number:</span> représente des valeurs numériques, y compris des entiers et des nombres à virgule flottante. Exemple: <span className='blue'>1, 3.14, -42</span>.</li>
        
        <li><span className='blue'>String:</span> représente des données textuelles, entre guillemets simples ou doubles. Exemples: <span className='red'>"bonjour", 'monde', "123"</span>.</li>
        
        <li><span className='blue'>Boolean:</span> représente une entité logique et peut avoir seulement deux valeurs: vrai ou faux. Exemple: <span className='blue'> true, false</span>.</li>
        
        <li><span className='blue'>Undefined:</span> représente une variable qui a été déclarée mais à laquelle aucune valeur n'a été affectée. Exemple: <span className='blueviole'>var</span> <span className='blue'>x</span>; console.log(x); <span className='darkgreen'>// Sortie: undefined</span></li>
        
        <li><span className='blue'>Null:</span> représente l'absence intentionnelle de toute valeur d'objet. Exemple: <span className='blueviole'>var</span> <span className='blue'>x</span> = <span className='blueviole'>null</span>; console.log(x); <span className='darkgreen'>// Sortie: null</span></li>
        
        <li><span className='blue'>Symbol:</span> représente un identifiant unique qui n'est pas exposé au code appelant. Exemple: <span className='blueviole'>const</span> <span className='blue'>sym1</span> = Symbol(<span className='red'>'foo'</span>);</li>
        
        <li><span className='blue'>Object:</span> représente une collection de données et/ou fonctionnalités associées. Exemple: <span className='blueviole'>var</span> <span className='blue'>obj</span> = {'{'} name: <span className='red'>"John"</span>, age: <span className='blue'>30</span> {'}'}; <span className='blueviole'>var</span> <span className='blue'>arr</span> = [<span className='blue'>1, 2, 3</span>];</li>
      </ul>
      </code>
      
      <h2>Type de données Boolean</h2>
      
      <p>Le type de données Boolean n'a que deux valeurs: vrai et faux. Il est couramment utilisé dans les opérations de comparaison à l'aide des opérateurs suivants:</p>     
   
 <code>
    <ul>
       <li>=== et ==</li>
        <li>{'>'} et {'<='}</li>
        <li>{'>='} et {'<='}</li>
      </ul>
 </code>
      
      <p>Exemples:</p>
      
      <code>
      <ul>
        <li><span className='blue'>10</span> {'<'} <span className='blue'>16</span> == <span className='blue'>true</span></li>
        
        <li><span className='blue'>10</span> {'>'} <span className='blue'>16</span> == <span className='blue'>false</span></li>
      </ul>
   </code>
      
      <h2>Opérateurs Booléens</h2>
     
      <code>
      <ul>
        <li>NOT (!)</li>
        <li>ET (&&)</li>
        <li>OU (||)</li>
      </ul>
      </code>
      
      <p>Lors de l'évaluation d'une condition, le type de données Boolean est utilisé. Les valeurs suivantes sont converties en false: 0 et une chaîne vide. Les valeurs suivantes sont converties en true: tous les autres nombres et chaînes non vides.</p>
      
      <h3>Exemples:</h3>
      
 <code>
 <p><span className='blue'>5</span> && <span className='blue'>6</span> <span className='darkgreen'>// 6</span></p>
  
  <p><span className='blue'>6</span> && <span className='blue'>0 </span> <span className='darkgreen'>// 0</span></p>
  
  <p><span className='blue'>true</span> && <span className='blue'>false</span> <span className='darkgreen'>// false</span></p>
  
  <p><span className='blue'>5</span> || <span className='blue'>6</span> <span className='darkgreen'>// 5</span></p>
  
  <p><span className='blue'>0</span> || <span className='blue'>false</span> <span className='darkgreen'>// false</span></p>
  
  <p><span className='blue'>false</span> || <span className='blue'>true</span> <span className='darkgreen'>// true</span></p>
  
  <p><span className='blue'>6</span> || <span className='blue'>7</span> <span className='darkgreen'> // 6</span></p>
  
  <p><span className='blue'>0</span> || <span className='blue'>false</span> <span className='darkgreen'> // false</span></p>
  
  <p><span className='blue'>false</span> || <span className='blue'>true</span> <span className='darkgreen'>// true</span></p>
  
  <p><span className='blue'>50</span> && <span className='blue'>6</span> <span className='darkgreen'>// 6</span></p>
  
  <p><span className='blue'>10</span> && <span className='blue'>0</span> <span className='darkgreen'>// 0</span></p>
  
  <p><span className='red'>'Bonjour'</span> && <span className='red'>'Monde'</span> <span className='darkgreen'>// "Monde"</span></p>
  
  <p><span className='red'>'Bonjour'</span> && <span className='red'>''</span> <span className='darkgreen'>// ''</span></p>
  
  <p>!<span className='blue'>true</span> <span className='darkgreen'>// false</span></p>
 
 </code>
  
  
  <h3>Expressions et Instructions</h3>
  
<p>Ce sont des exemples d'expressions et d'opérateurs en JavaScript. Une expression est une combinaison de valeurs, de variables, d'opérateurs, qui peut être évaluée à une certaine valeur. Les expressions peuvent être utilisées dans d'autres expressions ou dans des instructions.</p>

<p>Des opérateurs tels que *, +, etc., sont utilisés pour créer des expressions. Les trois premières lignes montrent des exemples d'expressions avec différents types de données: des nombres, des chaînes de caractères et des valeurs booléennes.</p>

<p>Les opérateurs peuvent être utilisés sous forme d'expressions d'opérateurs, qui font partie des opérateurs. Les trois lignes suivantes montrent des exemples d'expressions d'opérateurs, qui sont des opérateurs.</p>

<p>Chaque expression d'opérateur se termine par un opérateur (;), ce qui en fait une instruction.</p>
  
  <ul>
    <li><strong className='blue'>Expression</strong>: <span className='blue'>8</span> * <span className='blue'>3</span> + <span className='blue'>2</span> </li>
    
    <li><strong className='blue'>Expression</strong>: <span className='red'>"Bonjour, tout le monde!"</span></li>
    
    <li><strong className='blue'>Expression</strong>: <span className='blue'>false</span></li>
    
    <li><strong className='blue'>Instruction</strong>: <span className='blue'>8</span> * <span className='blue'>3</span> + <span className='blue'>2</span> ;</li>
    
    <li><strong className='blue'>Instruction</strong>: <span className='red'>"Bonjour, tout le monde!"</span>;</li>
    
    <li><strong className='blue'>Instruction</strong>: <span className='blue'>false</span>;</li>
  </ul>
  <h2>Valeurs Spéciales et Fonctions JavaScript</h2>
  
  <h5>NaN</h5>
  
  <p>NaN signifie "Not a Number" et est une valeur spéciale en JavaScript qui représente une valeur indéfinie ou non représentable résultant d'une opération arithmétique. Par exemple, diviser zéro par zéro donnera NaN.</p>
  
  <h5>typeof</h5>
  
  <p>typeof est un opérateur unaire en JavaScript qui renvoie une chaîne indiquant le type de données d'un opérande. Par exemple, typeof "bonjour" renverra "chaîne de caractères" et typeof 42 renverra "nombre".</p>
  
  <h5>isNaN()</h5>
  
  <p>isNaN() est une fonction globale en JavaScript qui renvoie true si l'argument est NaN (Not a Number), et false sinon. Par exemple, isNaN("bonjour") renverra true, et isNaN(42) renverra false.</p>
  
  <h5>isFinite()</h5>
  
  <p>isFinite() est une fonction globale en JavaScript qui renvoie true si l'argument est un nombre fini, et false sinon. Par exemple, isFinite(42) renverra true, et isFinite(Infinity) renverra false.</p>
  
  <h2>Variables</h2>

<ul>
  <li>Déclaration des variables (a-A, $, _)</li>
 
  <ul>
    <li><code><span className='blueviole'>var</span> <span className='blue'>nomEtudiant</span>;</code></li>
    <li><code><span className='blueviole'>var</span> <span className='blue'>prenom, nom, age</span>;</code></li>
  </ul>
 
  <li>Déclaration et affectation des variables</li>
  
  <ul>
    <li><code><span className='blueviole'>var</span> <span className='blue'>modeleVoiture</span> = <span className='red'>"Tesla"</span>;</code></li>
    <li><code><span className='blueviole'>var</span> <span className='blue'>modeleVoiture</span> = <span className='red'>"Tesla"</span>, <span className='blue'>annee</span> = <span className='blue'>2022</span>, <span className='blue'>estElectrique</span> = <span className='blue'>true</span>;</code></li>
  </ul>
  
  <li>Utilisation des variables</li>
  
  <ul>
    <li><code><span className='blueviole'>var</span> <span className='blue'>quantite</span> = <span className='blue'>5</span>;</code></li>
    <li><code>quantite = quantite + <span className='blue'>3</span>;</code></li>
    <li><code>quantite += <span className='blue'>2</span>;</code></li>
  </ul>
</ul>

<h2>Null et Undefined</h2>
 
  <ul>
    <li>Null est une valeur spéciale en JavaScript qui représente l'absence de toute valeur d'objet. C'est une valeur primitive et représente une non-valeur délibérée ou une valeur vide. Il est souvent utilisé pour indiquer qu'une variable n'a pas de valeur ou qu'une fonction ne renvoie aucune valeur.</li>
    <li>Undefined est une valeur qu'une variable peut avoir si elle n'a pas été affectée ou si elle a été explicitement affectée à la valeur undefined. C'est aussi une valeur primitive en JavaScript.</li>
    <li>L'opérateur typeof est utilisé pour déterminer le type d'une valeur. Si la valeur est undefined, typeof renvoie la chaîne "undefined". Si la valeur est null, typeof renvoie la chaîne "object". Il s'agit d'un bogue connu en JavaScript qui existe depuis la création du langage.</li>
    <li>Null et undefined sont souvent confondus car ils représentent tous deux l'absence d'une valeur. Cependant, ils ne sont pas la même chose. null représente une absence délibérée de valeur, tandis que undefined représente une absence accidentelle de valeur.</li>
    <li>L'opérateur == en JavaScript effectue une coercition de type, ce qui signifie qu'il essaiera de convertir les valeurs de types différents en un type commun avant de les comparer. Lors de la comparaison de null et undefined avec ==, le résultat est vrai car ils sont tous deux considérés comme des valeurs fausses.</li>
    <li>L'opérateur === en JavaScript effectue une comparaison stricte qui ne fait pas de coercition de type. Lors de la comparaison de null et undefined avec ===, le résultat est faux car ils ne sont pas du même type de valeur.</li>
    <li>Les fonctions parseInt, parseFloat et Number sont utilisées pour convertir une chaîne en nombre. Lorsqu'on passe la valeur null, les trois fonctions renvoient NaN, qui signifie "Not a Number". Cela est dû au fait que null n'est pas un nombre valide et ne peut pas être converti en un nombre.</li>
  </ul>

  <b><p>* Texte écrit avec l'aide d'un traducteur. Si vous trouvez une erreur, veuillez nous en informer *</p></b>
    <div className='ads-container'>  
  {/*  реклама  */}
</div>
    </div>
  )
}



export default FrEs5_1