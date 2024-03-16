import React from 'react';

function FrEs5_10() {
  return (
    <div>
       <div className='ad-container'>  
          {/*  реклама  */}
        </div>
       
        <h1>Exemples JavaScript ES5</h1>

<p><b>Fonction pour calculer la puissance d'un nombre</b></p>

<code>
    <p><span className='blueviole'>function</span> <span className='blue'>pow</span>(<span className='blue1'>num, exp</span>) {"{ "}</p>

    <p><span className='blueviole'>var</span> <span className='blue'>cnt</span> = <span className='blue1'>0</span>; </p>

    <p><span className='blueviole'>var</span> <span className='blue'>res</span> = <span className='blue1'>1</span>; </p>

    <p><span className='blueviole'>while</span> (cnt {'<'} exp) {"{"}</p>

    <p>{" res *= num;"}</p>

    <p>{" cnt++; "}</p>

    <p>&nbsp;{" }"}</p>

    <p><span className='blueviole'>return</span> res;</p>

    <p>{"}"}</p>
</code>   

<p><b>pow(num, exp)</b>: Cette fonction calcule la puissance d'un nombre. Elle prend deux paramètres, num et exp, et retourne la valeur de num élevée à la puissance de exp. La fonction utilise une boucle while et un compteur pour multiplier num par lui-même exp fois jusqu'à ce que le compteur atteigne exp.</p>

<p><b>Fonction pour calculer la puissance d'un nombre (version alternative)</b></p>

<code>
  <p><span className='blueviole'>function</span> <span className='blue'>pow2</span>(<span className='blue1'>num1, num2</span>) {'{'}</p>

  <p><span className='blueviole'>var</span> <span className='blue'>num3</span> = <span className='blue1'>1</span>;</p>

  <p><span className='blueviole'>for</span> (<span className='blueviole'>var</span> <span className='blue'>i</span> = <span className='blue1'>1</span>; i {'<='} num2; i++) {'{'}</p>

  <p>{'num3 *= num1;'}</p>

  <p>&nbsp;{'}'}</p>

  <p><span className='blueviole'>return</span> num3;</p>

  <p>{'}'}</p>
</code>

<p><b>pow2(num1, num2)</b>: Cette fonction calcule la puissance d'un nombre. Elle prend deux paramètres, num1 et num2, et retourne la valeur de num1 élevée à la puissance de num2. La fonction utilise une boucle for pour multiplier num1 par lui-même num2 fois jusqu'à ce que la boucle soit terminée.</p>

<p><b>Fonction pour vérifier si un nombre est premier</b></p>

<code>
  <p><span className='blueviole'>function </span><span className='blue'>isPrime</span>(<span className='blue1'>number</span>) {'{'}</p> 

  <p><span className='blueviole'>if</span> (number {'<'} <span className='blue1'>2</span>) {'{'}</p> 

  <p><span className='blueviole'>return</span> <span className='blue1'>false</span>;</p> 

  <p>{'}'} <span className='blueviole'>else if</span> (number == undefined) {'{'}</p> 

  <p><span className='blueviole'>return</span> undefined;</p> 

  <p>{'}'} <span className='blueviole'>else</span> {'{'}</p> 

  <p><span className='blueviole'>for</span> (<span className='blueviole'>var</span> <span className='blueviole'>i</span> = <span className='blue1'>2</span>; i {'<'} number; i++) {'{'}</p>

   <p> <span className='blueviole'>if</span> (number % i === <span className='blue1'>0</span>) {'{'}</p> 

   <p><span className='blueviole'>return</span> <span className='blue1'>false</span>;</p>

   <p>&nbsp;{' }'}</p>

   <p>{'}'}</p>

   <p><span className='blueviole'>return</span> <span className='blue1'>true</span>;</p>

   <p>&nbsp;{'}'}</p>

   <p>{'}'}</p>
</code> 

<p><b>isPrime(number)</b>: Cette fonction vérifie si un nombre est premier ou non. Elle prend un paramètre number et retourne true si le nombre est premier, sinon elle retourne false. La fonction vérifie d'abord si le nombre est inférieur à 2, auquel cas elle retourne immédiatement false. Si le nombre est indéfini, elle retourne indéfini. Sinon, la fonction utilise une boucle for pour vérifier si aucun nombre entre 2 et number (exclusif) ne divise number de manière égale. Si un tel nombre est trouvé, la fonction retourne false. Si aucun tel nombre n'est trouvé, la fonction retourne true.</p>

<h4>Création d'une pyramide en utilisant des astérisques en JavaScript</h4>

<code>
    <p><span className='blueviole'>var</span> <span className='blue'>x</span> = <span className='blue1'>6</span>; </p>

    <p><span className='blueviole'>var</span> <span className='blue'>string</span> = <span className='red'>""</span>;</p>

    <p><span className='blueviole'>for</span> (<span className='blueviole'>var</span> <span className='blue'>i</span> = <span className='blue1'>1</span>; i {'<='} x; i++) {"{"}</p>

    <p><span className='blueviole'>for</span> (<span className='blueviole'>var</span> <span className='blue'>y</span> = <span className='blue1'>1</span>; y {'<= '}x - i; y++) {"{"}</p>

    <p>string += <span className='red'>" "</span>;</p>

    <p>{"}"}</p>

    <p> <span className='blueviole'>for</span> (<span className='blueviole'>var</span> <span className='blue'>k</span> = <span className='blue1'>0</span>; k {'<'} <span className='blue1'>2</span> * i - <span className='blue1'>1</span>; k++) {"{"}</p>

    <p>string += <span className='red'>"*"</span>; </p>

    <p>&nbsp;{" }"}</p>

    <p>string += <span className='red'>"\n"</span>;</p>

    <p>{"}"}</p>

    <p>{"console"}.<span className='blue'>log</span>(string);</p>
</code>

<p>Le code crée un motif de pyramide en utilisant des astérisques ('*') et des espaces.</p>

<p>Le code commence par définir une variable 'x' avec une valeur de 6 et une variable de chaîne vide 'string'. Ensuite, il utilise une boucle for pour itérer à travers chaque ligne de la pyramide, en commençant par 1 et en allant jusqu'à 'x'.</p>

<p>À l'intérieur de la première boucle for, une autre boucle for est utilisée pour ajouter des espaces avant les astérisques. Il ajoute (x-i) nombre d'espaces avant chaque ligne d'astérisques.</p>

<p>Ensuite, la deuxième boucle for est utilisée pour ajouter des astérisques à la chaîne. Le nombre d'astérisques ajoutés dans chaque ligne est donné par la formule 2*i-1, où 'i' est le numéro de la ligne actuelle.</p>   

<p>Enfin, un caractère de saut de ligne est ajouté à la fin de chaque ligne, et la chaîne complétée est imprimée dans la console à l'aide de la méthode console.log().</p>  

<p><b>Création d'un motif de pyramide avec des étoiles et des nombres</b></p>

<code>
    <p><span className='blueviole'>var</span> <span className='blue'>lineCount</span> = <span className='blue1'>5</span>;</p>

    <p><span className='blueviole'>var</span> <span className='blue'>symb</span> = <span className='red'>'*'</span>;</p>

    <p><span className='blueviole'>var</span> <span className='blue'>result</span> = <span className='red'>''</span>; </p>

    <p><span className='blueviole'>for</span> (<span className='blueviole'>var</span> <span className='blue'>i</span> = <span className='blue1'>0</span>; i {'<'} lineCount; i++){'{'}</p>

    <p><span className='blueviole'>for</span> (<span className='blueviole'>var</span> <span className='blue'>j</span> = <span className='blue1'>0</span>; j {'<'} lineCount - i; j++){'{'}</p>

    <p>result += <span className='red'>'1'</span>; </p>

    <p>&nbsp;{' }'}</p>

    <p>result += symb + <span className='red'>'\n;'</span></p>

    <p> symb += <span className='red'>' *'</span>;</p>

    <p>{"}"}</p>

    <p>{"console"}.<span className='blue'>log</span>(result)</p>
</code>

<p>Le code crée un motif d'étoiles et de nombres en forme de pyramide. Il commence par définir le nombre de lignes pour la pyramide et le symbole à utiliser (dans ce cas, ''). Ensuite, il utilise des boucles imbriquées pour construire chaque ligne de la pyramide, en commençant par la base et en ajoutant un symbole à la fois jusqu'à ce qu'il atteigne le sommet. Les nombres dans le motif sont représentés par le chiffre '1'. Chaque ligne de la pyramide est construite en ajoutant le nombre approprié de '1's, suivi du symbole, puis d'un caractère de saut de ligne. Le symbole utilisé pour chaque ligne est mis à jour en utilisant l'opérateur de concaténation de chaînes pour ajouter un '' supplémentaire pour chaque nouvelle ligne. Enfin, le motif résultant est imprimé dans la console en utilisant la fonction 'console.log'.</p>

<h3>Fonctions JavaScript pour générer des séries de Fibonacci</h3>

<p><b>Exemple</b></p>
    
<code>
  <p><span className='blueviole'>function </span><span className='blue'>fibo</span>(<span className='blue1'>num</span>) {"{"}</p>

  <p><span className='blueviole'>if</span> (isNaN(+num)) {"{"}</p>

  <p><span className='blueviole'>return</span> <span className='red'>'ERROR'</span>; </p>

  <p>{" } "}</p>

  <p><span className='blueviole'>var</span> <span className='blue'>firstN</span> = <span className='blue1'>0</span>; </p>

  <p><span className='blueviole'>var</span> <span className='blue'>secondN</span> = <span className='blue1'>1</span>; </p>

  <p><span className='blueviole'>while </span>(firstN {'<'} num) {"{"}</p>

  <p>{" console"}.<span className='blue'>log</span>(firstN); </p>

  <p>{" secondN = firstN + secondN; "}</p>

  <p>{"firstN = secondN - firstN; "}</p>

  <p>&nbsp;{"}"}</p>

  <p>{"}"}</p>

  <p>fibo(<span className='blue'>55</span>);</p>
</code>

<p><b>Exemple</b></p>

<code>
  <p><span className='blueviole'>function</span> <span className='blue'>fibonacci</span>(<span className='blue1'>num</span>) {"{"}</p>

  <p><span className='blueviole'>var</span> <span className='blue'>num1</span> = <span className='blue1'>0</span>;</p>

  <p><span className='blueviole'>var</span> <span className='blue'>num2</span> = <span className='blue1'>1</span>;</p>

  <p> <span className='blueviole'>if</span> (<span className='blueviole'>typeof</span> num !== <span className='red'>"number"</span>) {'{'}</p>

  <p>{'console'}.<span className='blue'>error</span>(<span className='red'>"écrire uniquement des nombres"</span>);</p>

  <p>{"}"} <span className='blueviole'>else</span> {"{"}</p>

  <p><span className='blueviole'>for</span> (<span className='blueviole'>var</span> <span className='blue'>i</span>; num1 {'<'} num;) {"{"}</p>

  <p>{" console"}.<span className='blue'>log</span>(num1);</p>

  <p>{" i = num1 + num2;"}</p>

  <p>{"num1 = num2;"}</p>

  <p>{"num2 = i;"}</p>

  <p>&nbsp;&nbsp;{" }"}</p>

  <p>&nbsp;{" }"}</p>

  <p>{"}"}</p>

  <p>fibonacci(<span className='blue'>100</span>);</p>
</code>

<p><b>Exemple</b></p>
    
<code> 
      <p><span className='blueviole'>function</span> <span className='blue'>fibonachi</span>(<span className='blue1'>n</span>) {"{"}</p>

      <p> <span className='blueviole'>if</span> (<span className='blueviole'>typeof</span> n === <span className='red'>"number"</span>) {'{'}</p>

      <p> <span className='blueviole'>var</span> <span className='blue'>a</span> = <span className='blue1'>0</span>; </p>

      <p><span className='blueviole'>var</span> <span className='blue'>b</span> = <span className='blue1'>1</span>;  </p>

      <p><span className='blueviole'>var</span> <span className='blue'>result</span>;</p>

      <p><span className='blueviole'>for</span> {'(var i = 0; i < n; i++)'} {"{"}</p>

      <p>{"console"}.<span className='blue'>log</span>(a){';'}</p>

      <p>{"result = a + b;"}</p>

      <p>{"  a = b;"}</p>

      <p>{" b = result; "}</p>

      <p>&nbsp;{"}"}</p>
      
      <p><span className='blueviole'>return</span> <span className='blue1'>result</span>;</p>

      <p>{"}"} <span className='blueviole'>else</span> {"{"}</p>

      <p>{'console'}.<span className='blue'>error</span>(<span className='red'>"veuillez écrire uniquement un nombre"</span>){';'}</p>

      <p>&nbsp;{"}"}</p>

      <p>{"}"}</p>
   </code>

<p>Il s'agit de trois implémentations différentes du générateur de séquence de Fibonacci en JavaScript</p>

<p>La première implémentation (fibonacci) utilise une boucle while pour générer des nombres de Fibonacci jusqu'à une limite donnée (num) et les imprime en utilisant console.log(). Elle vérifie d'abord si l'entrée est un nombre valide, et si ce n'est pas le cas, elle renvoie un message d'erreur.</p>

<p>La deuxième implémentation (fibonachi) utilise une boucle for pour générer des nombres de Fibonacci jusqu'à une limite donnée (num) et les imprime en utilisant console.log(). Elle vérifie d'abord si l'entrée est un nombre valide, et si ce n'est pas le cas, elle imprime un message d'erreur dans la console.</p>    

<p>La troisième implémentation (fibonachi) utilise également une boucle for pour générer des nombres de Fibonacci jusqu'à une limite donnée (n) et les imprime en utilisant console.log(). Elle vérifie d'abord si l'entrée est un nombre valide, et si ce n'est pas le cas, elle imprime un message d'erreur dans la console. Cette implémentation utilise trois variables pour générer le prochain nombre de Fibonacci : a, b et result. Elle commence avec a = 0 et b = 1, et pour chaque itération, elle calcule la somme de a et b, stocke le résultat dans result, définit a sur b et définit b sur result.</p>   

<h3>Échiquier en JavaScript</h3>

<code>
  <p><span className='blueviole'>function</span> <span className='blue'>chess</span>(<span className='blue1'>rows, symbolOne, symbolTwo, currentRow</span>) {"{"}</p>

  <p><span className='blueviole'>var</span> <span className='blue'>symbol</span> = <span className='red'>' '</span>;</p>

  <p><span className='blueviole'>if</span> (<span className='blueviole'>typeof</span> rows != <span className='red'>"number"</span></p>

  <p>|| <span className='blueviole'>typeof</span> symbolOne != <span className='red'>"string"</span></p>

  <p>|| <span className='blueviole'>typeof</span> symbolTwo != <span className='red'>"string"</span>) {'{'}</p>

  <p>{' console'}.<span className='blue'>error</span>(<span className='red'>"Paramètres non valides"</span>);</p>

  <p> <span className='blueviole'>return</span>; </p>

  <p>{"}"}</p>

  <p>rows = rows || <span className='blue1'>8</span>;</p>

  <p> symbolOne = symbolOne ||<span className='red'> " ⬛"</span>;</p>
  
  <p>symbolTwo = symbolTwo || <span className='red'>" ⬜"</span>;</p>

  <p>currentRow = currentRow || <span className='blue1'>1</span>;</p>

  <p><span className='blueviole'>if</span> (currentRow {'>'} rows) <span className='blueviole'>return</span> <span className='red'>''</span>;</p>

  <p><span className='blueviole'>for</span> (<span className='blueviole'>var</span> <span className='blue'>i</span> = <span className='blue1'>0</span>; i {'<'} rows / <span className='blue1'>2</span>; i++) {"{"}</p>

  <p>{"symbol += symbolOne + symbolTwo;"}</p>

  <p>{" }"}</p>

  <p>symbol += <span className='red'>"\n"</span>; </p>

  <p>symbol += chess(rows, symbolTwo, symbolOne, currentRow + <span className='blue1'>1</span>);</p>

  <p><span className='blueviole'>return</span> symbol;</p>
  
  <p>{'}'}</p>

  <p>{'console'}.<span className='blue'>log</span>(chess(<span className='blue1'>8</span>, <span className='red'>"⬛"</span>, <span className='red'>"⬜"</span>))</p>
</code>

<p>Ce code définit une fonction récursive appelée "chess" qui prend quatre paramètres : "rows", "symbolOne", "symbolTwo" et "currentRow". Son but est de créer une représentation sous forme de chaîne de caractères d'un motif d'échiquier en alternant deux symboles, "symbolOne" et "symbolTwo", pour chaque case sur le plateau.</p>
   
<p>La fonction vérifie d'abord si les paramètres d'entrée sont valides, c'est-à-dire si "rows" est un nombre et si "symbolOne" et "symbolTwo" sont des chaînes de caractères. Si l'un des paramètres est invalide, elle renvoie un message d'erreur et sort de la fonction.</p>  
    
<p>Ensuite, elle définit des valeurs par défaut pour "rows", "symbolOne" et "symbolTwo" si elles n'ont pas été fournies. La valeur par défaut pour "rows" est 8, tandis que les valeurs par défaut pour "symbolOne" et "symbolTwo" sont deux caractères Unicode représentant un carré noir et un carré blanc, respectivement.</p>  

<p>Ensuite, la fonction vérifie si elle a atteint la fin de l'échiquier (c'est-à-dire si "currentRow" est supérieur à "rows"). Si c'est le cas, elle renvoie une chaîne vide et sort de la fonction.</p>

<p>Si la fin de l'échiquier n'a pas été atteinte, la fonction crée une chaîne "symbol" en ajoutant "symbolOne" et "symbolTwo" alternativement "rows / 2" fois (puisque chaque ligne est composée de "rows / 2" paires de symboles).</p>

<p>Elle ajoute ensuite un caractère de saut de ligne à la chaîne "symbol" et effectue un appel récursif à la fonction "chess", en échangeant "symbolOne" et "symbolTwo" et en augmentant "currentRow" de 1.</p>  
    
<p>Enfin, elle renvoie la chaîne "symbol", qui contient l'ensemble du motif de l'échiquier. La dernière ligne de code appelle la fonction "chess" avec "rows" réglé sur 8 et "symbolOne" et "symbolTwo" réglés sur les caractères Unicode représentant des carrés noirs et blancs, respectivement, et enregistre le motif d'échiquier résultant dans la console.</p> 

<b><p>* Texte écrit avec l'aide d'un traducteur. Si vous trouvez une erreur, veuillez nous en informer *</p></b>
    <div className='ads-container'>  
  {/*  реклама  */}
  </div>
    </div>
  )
}

export default FrEs5_10;