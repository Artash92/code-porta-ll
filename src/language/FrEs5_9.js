import React from 'react'

function FrEs5_9() {
  return (
    <div>
        <div className='ad-container'>  
          {/*  реклама  */}
        </div>
        <h1>Protocole pseudo JavaScript</h1>

<p>Exemple d'utilisation du "protocole pseudo" JavaScript : dans l'attribut href d'une balise d'ancre ({'<a>'}). Lorsque l'utilisateur clique sur le lien, il exécutera le code JavaScript spécifié dans l'attribut href.</p>

<p>Voici une façon alternative d'écrire le même code sans utiliser le protocole javascript :</p>

<code>
  <p>{'<'}<span className='green'>a</span> <span className='blue'>href</span>=<span className='blue1'>"#"</span> <span className='blue'>onclick</span>=<span className='blue1'>"myFunction(); return false;"</span>{'>'}Cliquer{'</'}<span className='green'>a</span>{'>'}</p>
  <p>{'<'}<span className='green'>script</span>{'>'}</p>
  <p>&nbsp;<span className='red'>function</span> myFunction() {'{'}</p>
  <p>&nbsp;&nbsp;{'console'}.<span className='blue'>log</span>(<span className='blue1'>"Bonjour"</span>);</p>
  <p>&nbsp;{'}'}</p>
  <p>{'</'}<span className='green'>script</span>{'>'}</p>
 </code>

<p>Dans cet exemple, nous utilisons un attribut href d'ancre vide et le gestionnaire d'événements onclick pour appeler la fonction myFunction() lorsque l'utilisateur clique sur le lien. L'instruction return false empêche le lien de naviguer vers une nouvelle page.</p>

<p>Les deux exemples atteignent le même résultat en enregistrant "Bonjour" dans la console lorsque le lien est cliqué. Cependant, le deuxième exemple est considéré comme une meilleure pratique car il sépare le code JavaScript du balisage HTML, ce qui facilite la maintenance et le débogage du code.</p>

<h2>Modèle d'objet de navigateur (BOM)</h2>

<p>En JavaScript ES5, le modèle d'objet de document (DOM) représente les éléments HTML d'une page Web sous forme d'arbre structuré, permettant au code JavaScript d'interagir avec et de manipuler le contenu de la page Web dynamiquement. Voici quelques objets couramment utilisés dans l'objet fenêtre du navigateur :</p>

<p>1. <b>window :</b> L'objet de niveau supérieur dans la hiérarchie JavaScript du navigateur, représentant la fenêtre du navigateur. Tous les objets, fonctions et variables JavaScript globaux deviennent automatiquement des membres de l'objet window.</p>

<p>2. <b>history :</b> L'objet history permet à JavaScript d'interagir avec l'historique du navigateur, vous permettant de revenir en arrière et d'avancer entre les pages.</p>

<p>Exemple</p>

<code><p>window.history.back(); <span className='green'>// Revenir en arrière d'une page</span> </p></code>

<p>3. <b>navigator :</b> L'objet navigator fournit des informations sur le navigateur Web et le système d'exploitation utilisé sur l'ordinateur de l'utilisateur.</p>

<p>Exemple</p>

<code><p>{'console'}.<span className='blue'>log</span>(navigator.userAgent); <span className='green'>// Affiche la chaîne d'agent utilisateur pour le navigateur</span></p></code>

<p>4. <b>screen :</b> L'objet screen fournit des informations sur la résolution de l'écran de l'utilisateur et la profondeur de couleur.</p>

<p>Exemple :</p>

<code><p>{'console'}.<span className='blue'>log</span>(screen.width);<span className='green'> // Affiche la largeur de l'écran de l'utilisateur</span></p></code>

<p><span>5. location :</span> L'objet location fournit des informations sur l'URL actuelle de la page Web et vous permet de naviguer vers de nouvelles URLs.</p>

<p>Exemple :</p>

<code><p>{'console'}.<span className='blue'>log</span>(location.href);<span className='green'> // Affiche l'URL actuelle location.href = "https://www.example.com"; // Navigue vers une nouvelle URL</span></p></code>

<p>6. <b>document :</b> L'objet document représente le contenu HTML de la page Web actuelle et permet au code JavaScript d'interagir avec et de manipuler le contenu de la page.</p>

<p>Exemple :</p>

<code><p>{'document'}.<span className='blue'>getElementById</span>(<span className='blue1'>"monDiv"</span>).<span className='blue'>innerHTML </span>= <span className='blue1'>"Nouveau contenu"</span>; <span className='green'>// Modifie le contenu HTML d'un élément avec l'ID "monDiv"</span></p></code>

<p>7. <b>méthodes :</b> Il existe de nombreuses autres méthodes disponibles dans l'objet fenêtre du navigateur, telles que alert(), prompt(), confirm(), setInterval() et setTimeout(), qui vous permettent d'afficher des boîtes de dialogue, de définir des minuteries, et plus encore.</p>

<p>Exemple :</p>

<code><p><span className='blueviole'>alert</span>(<span className='blue1'>"Bonjour, monde!"</span>); <span className='green'>// Affiche une boîte de dialogue d'alerte avec le message "Bonjour, monde!"</span></p></code>

<h5>Le modèle d'objet de navigateur (BOM) est une API JavaScript qui fournit un accès à l'objet fenêtre du navigateur Web et à ses propriétés. Une des propriétés de l'objet window est l'objet history, qui contient l'historique de navigation de l'utilisateur.</h5>

<p>L'objet history fournit plusieurs méthodes pour naviguer dans l'historique de navigation.</p>

<p>La méthode <b>history.go()</b> peut être utilisée pour naviguer vers une page spécifique dans l'historique de navigation. Cette méthode accepte un entier positif ou négatif comme argument. Si l'argument est un entier positif, il navigue vers l'avant dans l'historique, et s'il est négatif, il navigue vers l'arrière dans l'historique. Par exemple, history.go(-1) naviguerait en arrière d'une page dans l'historique de navigation, et history.go(2) naviguerait vers l'avant de deux pages.</p>

<p>La méthode <b>history.back()</b> est utilisée pour naviguer en arrière d'une page dans l'historique de navigation, équivalent à <b>history.go(-1)</b>.</p>

<p>La méthode <b>history.forward()</b> est utilisée pour naviguer vers l'avant d'une page dans l'historique de navigation, équivalent à <b>history.go(1)</b>.</p>

<p>La propriété <b>history.length</b> retourne le nombre de pages dans l'historique de navigation.</p>

<p>Voici un exemple d'utilisation de l'objet history :</p>

<code>
  <p><span className='green'>{ "// Naviguer en arrière d'une page dans l'historique de navigation"} </span> history.<span className='blue'>back</span>();</p>
  <p><span className='green'>{"// Naviguer vers l'avant d'une page dans l'historique de navigation"} </span>history.<span className='blue'>forward</span>();</p>
  <p><span className='green'>{"// Naviguer vers la troisième page dans l'historique de navigation"} </span> history.<span className='blue'>go</span>(<span className='blue1'>2</span>);</p>
  <p><span className='green'>{ "// Obtenir le nombre de pages dans l'historique de navigation"}</span>  {'console'}.<span className='blue'>log</span>(history.<span className='blue'>length</span>);</p>
</code>

<h4>Le modèle d'objet de navigateur (BOM) est une partie de l'API JavaScript qui fournit l'accès à la fenêtre du navigateur et à ses propriétés. L'objet Navigator fait partie du BOM et représente le navigateur lui-même. Il fournit des informations sur le navigateur qui est actuellement utilisé.</h4>

<p>Voici quelques propriétés de l'objet Navigator et leurs explications :</p>

<code>
  <p>navigator.<span className='blue'>appCodeName</span> : Renvoie le nom de code du navigateur.</p>
  <p>navigator.<span className='blue'>appName</span> : Renvoie le nom du navigateur.</p>
  <p>navigator.<span className='blue'>appVersion</span> : Renvoie les informations de version du navigateur.</p>
  <p>navigator.<span className='blue'>language</span> : Renvoie la langue définie dans le navigateur.</p>
  <p>navigator.<span className='blue'>platform</span> : Renvoie la plateforme du système d'exploitation sur laquelle le navigateur fonctionne.</p>
  <p>navigator.<span className='blue'>userAgent</span> : Renvoie la chaîne d'agent utilisateur du navigateur.</p>
</code>

<p>Voici un exemple d'utilisation de l'objet Navigator :</p>

<code>
  <p>{'console'}.<span className='blue'>log</span>(navigator.appName); <span className='green'>// Affiche le nom du navigateur</span></p>
  <p>{'console'}.<span className='blue'>log</span>(navigator.userAgent); <span className='green'>// Affiche la chaîne d'agent utilisateur du navigateur</span></p>
</code>

<p>En utilisant les propriétés de l'objet Navigator, vous pouvez écrire du code JavaScript qui se comporte différemment en fonction du navigateur que l'utilisateur utilise.</p>

<h3>Le modèle d'objet de navigateur (BOM) en JavaScript fournit un moyen d'interagir avec la fenêtre du navigateur et ses propriétés. L'objet window.screen fait partie du BOM et fournit des informations sur l'écran de l'utilisateur.</h3>

<p>Voici un résumé des propriétés de <b>window.screen :</b></p>

<p><b>screen.height :</b> renvoie la hauteur totale de l'écran de l'utilisateur en pixels.</p>

<p><b>screen.width :</b> renvoie la largeur totale de l'écran de l'utilisateur en pixels.</p>

<p><b>screen.availHeight :</b> renvoie la hauteur disponible de l'écran de l'utilisateur en pixels, en excluant la barre des tâches Windows et d'autres éléments du système.</p>

<p><b>screen.availWidth :</b> renvoie la largeur disponible de l'écran de l'utilisateur en pixels, en excluant la barre des tâches Windows et d'autres éléments du système.</p>

<p>Voici un exemple d'utilisation de ces propriétés :</p>

<code>
  <p>{'console'}.<span className='blue'>log</span>(<span className='blue1'>"Hauteur totale de l'écran : "</span> + window.<span className='blue'>screen</span>.<span className='blue'>height</span> + <span className='blue1'>" pixels"</span>);</p>
  <p>{'console'}.<span className='blue'>log</span>(<span className='blue1'>"Largeur totale de l'écran : "</span> + window.<span className='blue'>screen</span>.<span className='blue'>width</span> + <span className='blue1'>" pixels"</span>);</p>
  <p>{'console'}.<span className='blue'>log</span>(<span className='blue1'>"Hauteur disponible de l'écran : "</span> + window.<span className='blue'>screen</span>.<span className='blue'>availHeight</span> + <span className='blue1'>" pixels"</span>);</p>
  <p>{'console'}.<span className='blue'>log</span>(<span className='blue1'>"Largeur disponible de l'écran : "</span> + window.<span className='blue'>screen</span>.<span className='blue'>availWidth</span> + <span className='blue1'>" pixels"</span>);</p>
</code>

<p>Ce code affichera la hauteur et la largeur de l'écran, ainsi que la hauteur et la largeur disponibles de l'écran, dans la console.</p>

<p>Remarquez que l'objet screen est en lecture seule et ne peut pas être modifié.</p>

<h3>Le modèle d'objet de navigateur (BOM) est un ensemble d'objets JavaScript fournis par les navigateurs Web pour interagir avec la fenêtre du navigateur. Un des objets du BOM est l'objet location, qui représente l'URL actuelle de la fenêtre du navigateur. L'objet location a plusieurs propriétés auxquelles on peut accéder et modifier pour interagir avec l'URL.</h3>

<p>Voici les explications des propriétés de l'objet <b>location</b> :</p>

<p><b>location.protocol :</b> Cette propriété spécifie le protocole utilisé dans l'URL, tel que <span className='blue1'>"http:"</span> ou <span className='blue1'>"https:"</span>.</p>

<p><b>location.host :</b> Cette propriété spécifie le nom de domaine et le numéro de port dans l'URL, tel que <span className='blue1'>"www.site.com:8080"</span>.</p>

<p><b>location.hostname :</b> Cette propriété spécifie le nom de domaine dans l'URL, tel que <span className='blue1'>"www.site.com"</span>.</p>

<p><b>location.href :</b> Cette propriété spécifie l'URL entière, tel que <span className='blue1'>"http://www.site.com/about/?name=javascript#content"</span>.</p>

<p><b>location.port :</b> Cette propriété spécifie le numéro de port dans l'URL, tel que <span className='blue1'>"8080"</span>.</p>

<p><b>location.pathname :</b> Cette propriété spécifie le chemin de l'URL, tel que <span className='blue1'>"/about/"</span>.</p>

<p><b>location.search :</b> Cette propriété spécifie la chaîne de requête dans l'URL, tel que <span className='blue1'>"?name=javascript"</span>.</p>

<p><b>location.hash :</b> Cette propriété spécifie l'identifiant de fragment dans l'URL, tel que <span className='blue1'>"#content"</span>.</p>

<p>En accédant et en modifiant ces propriétés de l'objet <b>location</b>, vous pouvez interagir avec l'URL actuelle de la fenêtre du navigateur, comme rediriger l'utilisateur vers une autre page ou modifier la chaîne de requête.</p>

<p>La méthode <b>setTimeout()</b> est une fonction JavaScript intégrée qui exécute une fonction ou un morceau de code spécifié après qu'un certain laps de temps s'est écoulé. Elle prend deux arguments : une fonction à exécuter et un délai en millisecondes.</p>

<p>Dans le code exemple que vous avez fourni, une variable appelée <b>timer</b> est déclarée et affectée à la valeur de retour de la fonction <b>setTimeout()</b>. La fonction exécutée ici est une simple instruction <b>console.log()</b> qui imprime "Bonjour, monde !" dans la console après un délai de 2000 millisecondes (ou 2 secondes).</p>

<p>La méthode <b>clearTimeout()</b> est ensuite appelée avec la variable timer comme argument. Cette méthode annule le délai défini par <b>setTimeout()</b>, ce qui signifie que l'instruction <b>console.log()</b> ne sera pas exécutée après le délai spécifié.</p>

<p>En résumé, le code définit un minuteur pour exécuter une fonction après 2 secondes, mais annule immédiatement ce minuteur avant qu'il ne puisse se terminer. Il s'agit d'un exemple simple d'utilisation des méthodes <b>setTimeout()</b> et <b>clearTimeout()</b> en JavaScript.</p>

<p>Exemple de code utilisant <b>setTimeout:</b></p>

<code>
  <p><span className='blueviole'>function </span><span className='blue'>direBonjour</span>() {'{'}</p>
  <p>{'console'}.<span className='blue'>log</span>(<span className='red'>"Bonjour, monde!"</span>);</p>
  <p>{'}'}</p>
  <p className='green'>// Appeler la fonction après 2 secondes</p>
  <p><span className='blueviole'>var</span> <span className='blue'>minuteur</span> = setTimeout(direBonjour, <span className='blue'>2000</span>);</p>
  <p className='green'>// Annuler le minuteur avant son exécution</p>
  <p>clearTimeout(minuteur);</p>
</code>

<p>Dans cet exemple, la fonction <b>setTimeout</b> est utilisée pour retarder l'exécution de la fonction <b>direBonjour</b> pendant 2 secondes. La fonction est passée en paramètre à setTimeout avec le délai en millisecondes. La fonction <b>setTimeout</b> retourne un identifiant de minuteur qui est utilisé pour annuler le minuteur avant son exécution à l'aide de la fonction <b>clearTimeout</b>.</p>

<h3>Événements</h3>

<p>Le Modèle d'Objet de Document (DOM) est une interface de programmation pour les documents Web. Il représente la page afin que les programmes puissent changer la structure, le style et le contenu du document. Les événements sont des actions ou des occurrences qui se produisent dans le navigateur, telles que cliquer sur un bouton, faire défiler la page ou appuyer sur une touche du clavier.</p>

<p>onclick</p>

<p>onmousedown</p>

<p>onmouseup</p>

<p>onmousemove</p>

<p>onmouseover</p>

<p>onmouseout</p>

<p>onkeydown</p>

<p>onkeyup</p>

<p>onkeypress</p>

<p>onfocus</p>

<p>onblur</p>

<p>onsubmit</p>

<p>onreset</p>

<p>onselect</p>

<p>onchange</p>

<p>onscroll</p>

<p>onload</p>

<p>onunload</p>

<p>Les événements énumérés sont des gestionnaires d'événements, ce sont des fonctions qui sont exécutées lorsqu'un événement spécifique se produit sur une page Web. Par exemple, le gestionnaire d'événements "onclick" est exécuté lorsqu'un utilisateur clique sur un élément d'une page Web. De même, le gestionnaire d'événements "onload" est exécuté lorsque la page a fini de charger dans le navigateur.</p>

<p>Ces gestionnaires d'événements peuvent être ajoutés aux éléments HTML en utilisant le préfixe "on" suivi du nom de l'événement, comme "onclick" ou "onload". Lorsque l'événement spécifié se produit, la fonction assignée au gestionnaire d'événements est exécutée. Cela permet aux développeurs de créer des pages Web interactives qui réagissent aux actions des utilisateurs.</p>
   
<b><p>* Texte écrit avec l'aide d'un traducteur. Si vous trouvez une erreur, veuillez nous en informer *</p></b>
    <div className='ads-container'>  
  {/*  реклама  */}
  </div>
    </div>
  )
}

export default FrEs5_9;