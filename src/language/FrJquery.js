import React from 'react'

function FrJquery() {
  return (
    <div>
      <div className='ad-container'>  
          {/*  реклама  */}
        </div>
        
        <h1>JavaScript (JQuery)</h1>

<p>jQuery est une bibliothèque JavaScript qui simplifie le processus d'écriture du code JavaScript et de travail avec les documents HTML. Elle a été créée en 2006 par John Resig et est actuellement l'une des bibliothèques JavaScript les plus populaires.</p>

<p>jQuery fournit une variété de fonctions pour travailler avec le Modèle d'Objet de Document (DOM), ainsi que pour travailler avec AJAX (Asynchronous JavaScript and XML) et créer des animations. Elle simplifie également l'écriture du code compatible avec différents navigateurs car la bibliothèque jQuery gère automatiquement les problèmes de compatibilité des navigateurs.</p>

<p>Voici quelques exemples de l'utilisation de jQuery :</p>

<p>Manipulation des éléments du DOM :</p>

<code>
  <p><span className='green'>// Modification du texte d'un élément ayant l'ID "myElement"</span></p>
  <p><span className='blueviole'>$</span>(<span className='blue1'>'#myElement'</span>).<span className='blue'>text</span>(<span className='blue1'>'Nouveau texte'</span>); </p>
  <p><span className='green'>// Ajout d'un nouvel élément à la page</span> </p>
  <p><span className='blueviole'>$</span>(<span className='blue1'>'body'</span>).<span className='blue'>append</span>(<span className='blue1'>'{'<'}div{'>'}Nouvel élément{'</'}div{'>'}'</span>); </p>
</code>

<p>2. Gestion des événements :</p>

<code>
  <p><span className='green'>// Gestion de l'événement clic sur un bouton ayant l'ID "myButton"</span></p>
  <p><span className='blueviole'>$</span>(<span className='blue1'>'#myButton'</span>).<span className='blue'>click</span>{'('}<span className='red'>function</span>() {"{"}</p>
  <p>&nbsp;<span className='blueviole'>alert</span>(<span className='blue1'>'Bouton cliqué !'</span>);</p>
  <p>{"});"}</p>
</code>

<p>3. Travail avec AJAX :</p>

<code>
  <p><span className='green'>// Faire une requête AJAX vers un serveur et mettre à jour un élément de la page avec la réponse</span></p>
  <p> <span className='blueviole'>$</span>.<span className='blue'>get</span>{'('}<span className='blue1'>'https://exemple.com/api/données'</span>, <span className='red'>function</span>(réponse) {"{"}</p>
  <p><span className='blueviole'>$</span>(<span className='blue1'>'#myElement'</span>).<span className='blue'>text</span>(réponse); </p>
  <p>{" }); "}</p>
</code>

<p>En résumé, jQuery est un outil puissant et polyvalent pour simplifier le développement JavaScript et rendre plus facile la création de pages web dynamiques et interactives.</p>

<b>Pour inclure jQuery dans un document HTML, vous pouvez suivre les étapes suivantes :</b>

<p>1. Téléchargez la bibliothèque jQuery depuis le site officiel <a href="https://jquery.com/download/" target='_blank' > 👉🏼 (https://jquery.com/download/)</a> ou utilisez un lien CDN (Content Delivery Network).</p>

<p>2. Créez un nouveau fichier HTML et ajoutez le code suivant à l'intérieur de la section "head" de votre document HTML pour inclure la bibliothèque jQuery :</p>

<code>
  <p>{'<'}<span className='green'>head</span>{'>'}</p>
  <p>&nbsp;{'<'}<span className='green'>script</span> <span className='blue'>src</span>=<span className='blue1'>"chemin/vers/jquery.js"</span>{'>'}{'</'}<span className='green'>script</span>{'>'}</p>
  <p>{'</'}<span className='green'>head</span>{'>'}</p>
</code>

<p>Remplacez "chemin/vers/jquery.js" par le chemin réel où se trouve la bibliothèque jQuery sur votre serveur, ou utilisez le lien CDN :</p>

<code>
  <p>{'<'}<span className='green'>head</span>{'>'}</p>
  <p>&nbsp;{'<'}<span className='green'>script</span> <span className='blue'>src</span>=<span className='blue1'>"https://code.jquery.com/jquery-3.6.0.min.js"</span>{'>'}{'</'}<span className='green'>script</span>{'>'}</p>
  <p>{'</'}<span className='green'>head</span>{'>'}</p>
</code>

<p>3. Une fois que vous avez inclus la bibliothèque jQuery dans votre document HTML, vous pouvez commencer à l'utiliser en écrivant du code JavaScript qui fait référence à la bibliothèque jQuery.</p>

<p>Par exemple, pour changer le texte d'un élément HTML ayant l'ID "myElement", vous pouvez utiliser le code suivant :</p>

<code>
  <p>{'<'}<span className='green'>body</span>{'>'}</p>
  <p>&nbsp;{'<'}<span className='green'>div</span> <span className='blue'>id</span>=<span className='blue1'>"myElement"</span>{'>'}Bonjour le monde !{'</'}<span className='green'>div</span>{'>'}</p>
  <p>&nbsp;{'<'}<span className='green'>script</span>{'>'}</p>
  <p>&nbsp;&nbsp;{'$(document).ready(function() {'}</p>
  <p>&nbsp;&nbsp;&nbsp;<span className='blueviole'>$</span>(<span className='blue1'>"#myElement"</span>).<span className='blue'>text</span>(<span className='blue1'>"Nouveau texte !"</span>);</p>
  <p>&nbsp;&nbsp;{'});'}</p>
  <p>&nbsp;{'</'}<span className='green'>script</span>{'>'}</p>
  <p>{'</'}<span className='green'>body</span>{'>'}</p>
</code>

<p>Dans cet exemple, nous utilisons jQuery pour sélectionner l'élément ayant l'ID "myElement" et changer son texte en "Nouveau texte !". Le code est enveloppé dans une fonction document ready, qui garantit que le code est exécuté uniquement après le chargement du document.</p>

<p>En général, inclure jQuery dans un document HTML est un processus simple qui consiste à référencer la bibliothèque jQuery et à écrire du code JavaScript qui utilise la bibliothèque pour manipuler les éléments HTML.</p>

<p>La syntaxe jQuery est une combinaison de sélecteurs de style CSS et de code JavaScript, ce qui facilite la sélection et la manipulation des éléments HTML. Voici quelques exemples de syntaxe jQuery :</p>

<p><b>1. Sélection d'éléments</b></p>

<p>Pour sélectionner un élément HTML, vous pouvez utiliser la fonction jQuery, qui prend un sélecteur de style CSS comme argument. Par exemple, pour sélectionner tous les éléments "p" sur la page, vous pouvez utiliser le code suivant :</p>

<code><p><span className='blueviole'>$</span>(<span className='blue1'>'p'</span>) </p> </code>

<p>Vous pouvez également enchaîner les sélecteurs pour sélectionner des éléments en fonction de leur relation avec d'autres éléments. Par exemple, pour sélectionner tous les éléments "p" qui sont enfants d'un élément "div", vous pouvez utiliser le code suivant :</p>

<code><p><span className='blueviole'>$</span>(<span className='blue1'>'div {'>'} p'</span>)</p></code>

<p><b>2. Modification des éléments</b></p>

<p>Une fois que vous avez sélectionné un élément, vous pouvez modifier son contenu, ses attributs et ses propriétés CSS à l'aide de jQuery. Par exemple, pour changer le texte de tous les éléments "p" sur la page, vous pouvez utiliser le code suivant :</p>

<code>
  <p><span className='blueviole'>$</span>(<span className='blue1'>'p'</span>).<span className='blue'>text</span>(<span className='blue1'>'Nouveau texte'</span>)</p>
  <p>Pour ajouter une <span className='green'>classe</span> à un élément, vous pouvez utiliser la méthode <span className='blue1'>"addClass"</span>:</p>
  <p><span className='blueviole'>$</span>(<span className='blue1'>'p'</span>).<span className='blue'>addClass</span>(<span className='blue1'>'surligner'</span>)</p>
</code>

<p><b>3. Gestion des événements</b></p>

<p>Vous pouvez utiliser jQuery pour gérer des événements tels que les clics, les survols de souris et les pressions de touche. Par exemple, pour gérer l'événement clic d'un bouton ayant l'ID "myButton", vous pouvez utiliser le code suivant :</p>

<code>
  <p><span className='blueviole'>$</span>(<span className='blue1'>'#myButton'</span>).<span className='blue'>click</span>{'('}<span className='red'>function</span>() {"{"}</p>    
  <p>&nbsp;<span className='blueviole'>alert</span>(<span className='blue1'>'Bouton cliqué !'</span>) </p> 
  <p>{"})"}</p>
</code>

<p><b>4. Travail avec AJAX</b></p>

<p>jQuery facilite le travail avec les requêtes AJAX. Par exemple, pour effectuer une requête GET vers une URL et gérer la réponse, vous pouvez utiliser le code suivant :</p>

<code>
  <p>$.<span className='blue'>get</span>{'('}<span className='blue1'>'https://exemple.com/données'</span>, <span className='red'>function</span>(réponse) {"{"}</p>
  <p>&nbsp;{"console"}.<span className='blue'>log</span>(réponse)</p>
  <p>{"}) "}</p>
</code>

<p>En général, la syntaxe jQuery est facile à apprendre et à utiliser, et elle fournit un moyen puissant de manipuler les éléments HTML et de gérer les événements dans vos applications web.</p>

<p><b>Les méthodes de traversée jQuery sont utilisées pour naviguer et trouver des éléments dans un arbre DOM. Voici quelques exemples de méthodes de traversée qui traitent des éléments frères.</b></p>    

<p><b>1. Méthode next() :</b> </p>

<p>La méthode next() retourne l'élément frère suivant de l'élément sélectionné. Par exemple :</p>

<code>
  <p><span className='blueviole'>$</span>{'(document).'}<span className='blue'>ready</span>{'('}<span className='red'>function</span>() {'{'}</p> 
  <p>&nbsp;<span className='blueviole'>$</span>(<span className='blue1'>"h2"</span>).<span className='blue'>next</span>().<span className='blue'>css</span>(<span className='blue1'>"background-color", "yellow"</span>); </p>
  <p>{'}); '}</p>
</code>

<p>Ce code sélectionne tous les éléments "h2" et applique un style CSS à leur élément frère suivant en changeant sa couleur de fond en jaune</p>

<p><b>2. Méthode prev() :</b></p>

<p>La méthode prev() renvoie l'élément frère précédent de l'élément sélectionné. Par exemple :</p>

<code>
  <p><span className='blueviole'>$</span>(document).<span className='blue'>ready</span>{'('}<span className='red'>function</span>() {'{'}</p> 

  <p>&nbsp;<span className='blueviole'>$</span>(<span className='blue1'>"h2"</span>).<span className='blue'>prev</span>().<span className='blue'>css</span>(<span className='blue1'>"background-color", "yellow"</span>); </p>

  <p>{'});'}</p>
</code>

<p>Ce code sélectionne tous les éléments "h2" et applique un style CSS à leur élément frère précédent en changeant sa couleur de fond en jaune.</p>
 
<b>3. Méthode nextAll() :</b>

<p>La méthode nextAll() renvoie tous les éléments frères suivants de l'élément sélectionné. Par exemple :</p>

<code>
  <p><span className='blueviole'>$</span>(document).<span className='blue'>ready</span>{'('}<span className='red'>function</span>() {'{'}</p> 

  <p>&nbsp;<span className='blueviole'>$</span>(<span className='blue1'>"h2"</span>).<span className='blue'>nextAll</span>().<span className='blue'>css</span>(<span className='blue1'>"background-color", "yellow"</span>); </p>

  <p>{'}); '}</p>
</code>

<p>Ce code sélectionne tous les éléments "h2" et applique un style CSS à tous leurs éléments frères suivants en changeant leur couleur de fond en jaune.</p>

<b>4. Méthode prevAll() :</b> 

<p>La méthode prevAll() renvoie tous les éléments frères précédents de l'élément sélectionné. Par exemple :</p>

<code>
  <p><span className='blueviole'>$</span>(document).<span className='blue'>ready</span>{'('}<span className='red'>function</span>() {'{'}</p> 

  <p>&nbsp;<span className='blueviole'>$</span>(<span className='blue1'>"h2"</span>).<span className='blue'>prevAll</span>().<span className='blue'>css</span>(<span className='blue1'>"background-color", "yellow"</span>); </p>

  <p>{'}); '}</p>
</code>

<p>Ce code sélectionne tous les éléments "h2" et applique un style CSS à tous leurs éléments frères précédents en changeant leur couleur de fond en jaune</p>

<b>5. Méthode siblings() :</b>

<p>La méthode siblings() renvoie tous les éléments frères de l'élément sélectionné. Par exemple :</p>

<code>
  <p><span className='blueviole'>$</span>(document).<span className='blue'>ready</span>{'('}<span className='red'>function</span>() {'{'}</p> 

  <p>&nbsp;<span className='blueviole'>$</span>(<span className='blue1'>"h2"</span>).<span className='blue'>siblings</span>().<span className='blue'>css</span>(<span className='blue1'>"background-color", "yellow"</span>); </p>

  <p>{'}); '}</p>
</code>

<p>Ce code sélectionne tous les éléments "h2" et applique un style CSS à tous leurs éléments frères en changeant leur couleur de fond en jaune.</p>

<p>En général, ces méthodes de traversée vous permettent de naviguer facilement et de sélectionner les éléments frères d'un élément HTML, ce qui peut être utile à diverses fins telles que le style ou la modification de contenu</p>

<p><b>JQuery (CSS)</b></p>

<code>
  <p><span className='blueviole'>$</span>(document).<span className='blue'>ready</span>{'('}<span className='red'>function</span>() {'{'}</p> 

  <p>&nbsp;<span className='blueviole'>$</span>(<span className='blue1'>".box"</span>).<span className='blue'>click</span>{'('}<span className='red'>function</span>() {'{'}</p>

  <p>&nbsp;&nbsp;<span className='blueviole'>$</span>(<span className='red'>this</span>).<span className='blue'>css</span>(<span className='blue1'>"background-color", "red"</span>);</p>

  <p>&nbsp;&nbsp;{'});'}</p>

  <p>{'});'}</p>
</code>

<p>Ce code sélectionne l'élément avec la classe "box" en utilisant le sélecteur jQuery ".box". Ensuite, il attache un gestionnaire d'événement de clic à cet élément en utilisant la méthode click(). À l'intérieur de la fonction du gestionnaire d'événement, nous utilisons la méthode css() pour changer la couleur de fond de l'élément en rouge.</p>

<p>Ainsi, lorsque l'élément de la boîte est cliqué, sa couleur de fond passe du bleu au rouge. Nous pouvons également utiliser la méthode css() pour changer d'autres propriétés CSS telles que la taille de police, la largeur de bordure, etc.</p>

<p>Voici un autre exemple qui montre comment changer plusieurs propriétés CSS en utilisant la méthode css() :</p>

<code>
  <p><span className='blueviole'>$</span>(document).<span className='blue'>ready</span>{'('}<span className='red'>function</span>() {'{'}</p>

  <p>&nbsp;<span className='blueviole'>$</span>(<span className='blue1'>".box"</span>).<span className='blue'>css</span>{'({'}</p>

  <p>&nbsp;&nbsp;<span className='blue1'>"background-color"</span>: <span className='blue1'>"green"</span>,</p>

  <p>&nbsp;&nbsp;<span className='blue1'>"width"</span>: <span className='blue1'>"150px"</span>, </p>

  <p>&nbsp;&nbsp;<span className='blue1'>"height"</span>: <span className='blue1'>"150px"</span>, </p>

  <p>&nbsp;&nbsp;<span className='blue1'>"border"</span>: <span className='blue1'>"2px solid black"</span> </p>

  <p>&nbsp;{' });'}</p>

  <p>{'});'}</p>
</code>

<p>Ce code sélectionne tous les éléments avec la classe "box" et change leur couleur de fond en vert, leur largeur et leur hauteur en 150px, et ajoute une bordure noire solide de 2px.</p>

<p>En général, utiliser jQuery pour manipuler le CSS fournit un moyen puissant de styliser dynamiquement les éléments HTML en fonction des interactions de l'utilisateur ou d'autres événements.</p>

<b>JQuery ($.each)</b>

<p>La méthode $.each() de jQuery est utilisée pour itérer sur des tableaux et des objets. Voici un exemple qui montre comment l'utiliser :</p>

<p>Supposons que nous ayons un tableau de nombres et que nous voulions itérer sur chaque élément du tableau et afficher sa valeur dans la console :</p>
    
<code>
  <p><span className='red'>var</span> numbers = [<span className='blue1'>1, 2, 3, 4, 5</span>]; </p>

  <p>$.<span className='blue'>each</span>{'('}numbers, <span className='red'>function</span>(index, value){'{'}</p>

  <p>&nbsp;{'console'}.<span className='blue'>log</span>(<span className='blue1'>"Element at index "</span> + index + <span className='blue1'>" is "</span> + value);</p>

  <p>{'});'}</p>
</code>

<p>Dans ce code, nous passons le tableau numbers à la méthode $.each() ainsi qu'une fonction de rappel prenant deux arguments : l'index de l'élément actuel et la valeur de l'élément actuel. À l'intérieur de la fonction de rappel, nous utilisons console.log() pour afficher l'index et la valeur de l'élément actuel dans la console.</p>
    
<p>La sortie de ce code serait :</p>

<code>
  <p>Element at index <span className='blue1'>0</span> is <span className='blue1'>1</span></p>

  <p>Element at index <span className='blue1'>1</span> is <span className='blue1'>2</span></p>

  <p>Element at index <span className='blue1'>2</span> is <span className='blue1'>3</span></p>

  <p>Element at index <span className='blue1'>3</span> is <span className='blue1'>4</span></p>

  <p>Element at index <span className='blue1'>4</span> is <span className='blue1'>5</span></p>
</code>

<p>Voici un autre exemple qui montre comment utiliser $.each() avec un objet :</p>

<p>Supposons que nous ayons un objet représentant les détails d'une personne et que nous voulions itérer sur ses propriétés et afficher leurs valeurs dans la console :</p>

<code>
  <p><span className='red'>var</span> person = {'{'}</p>

  <p>&nbsp;<span className='blue'>name</span>: <span className='blue1'>"John"</span>,</p>

  <p>&nbsp;<span className='blue'>age</span>: <span className='blue1'>30</span>, </p>

  <p>&nbsp;<span className='blue'>occupation</span>: <span className='blue1'>"Développeur"</span> </p>

  <p>{'};'}</p>

  <p>$.<span className='blue'>each</span>{'('}person, <span className='red'>function</span>(key, value){'{'}</p>

  <p>&nbsp;{'console'}.<span className='blue'>log</span>(key + ": " + value);</p>

  <p>{'});'}</p>
</code>

<p>Dans ce code, nous passons l'objet person à la méthode $.each() ainsi qu'une fonction de rappel prenant deux arguments : la clé de la propriété actuelle et la valeur de la propriété actuelle. À l'intérieur de la fonction de rappel, nous utilisons console.log() pour afficher la clé et la valeur de la propriété actuelle dans la console.</p>

<p>La sortie de ce code serait :</p>

<code>
  <p><span className='blue'>name</span>: John </p>

  <p><span className='blue'>age</span>: <span className='blue1'>30</span> </p>

  <p><span className='blue'>occupation</span>: Développeur</p>
</code>

<p>En général, la méthode $.each() de jQuery fournit un moyen pratique d'itérer sur des tableaux et des objets et d'effectuer des opérations sur leurs éléments.</p>

<b>Événements jQuery</b>

<p>jQuery fournit un ensemble riche de méthodes de gestion d'événements qui permettent aux développeurs d'attacher des gestionnaires d'événements à des éléments HTML et de répondre aux interactions de l'utilisateur, telles que les clics de souris, les saisies au clavier et les soumissions de formulaire.</p>
    
<p>Voici un exemple qui montre comment utiliser la méthode click() de jQuery pour attacher un gestionnaire d'événements de clic à un élément de bouton et répondre au clic de l'utilisateur sur le bouton :</p>    
    
<code>
  <p>{'<'}!<span className='blue'>DOCTYPE</span> <span className='blue1'>html</span>{'>'}</p>

  <p>{'<'}<span className='green'>html</span>{'>'}</p>  

  <p>{'<'}<span className='green'>head</span>{'>'}</p>

  <p>&nbsp;{'<'}<span className='green'>title</span>{'>'}Exemple d'événement jQuery{'</'}<span className='green'>title</span>{'>'}</p>

  <p>{'<'}<span className='green'>script</span> <span className='blue'>src</span>=<span className='blue1'>"https://code.jquery.com/jquery-3.6.0.min.js"</span>{'>'}{'</'}<span className='green'>script</span>{'>'}</p>

  <p>{'</'}<span className='green'>head</span>{'>'}</p>

  <p>{'<'}<span className='green'>body</span>{'>'}</p>

  <p>&nbsp;{'<'}<span className='green'>button</span> <span className='blue'>id</span>=<span className='blue1'>"myButton"</span>{'>'}Cliquez ici !{'</'}<span className='green'>button</span>{'>'}</p>

  <p>{'<'}<span className='green'>script</span>{'>'}</p>

  <p>&nbsp;{'$(document).ready(function(){'}</p>

  <p>&nbsp;<span className='blueviole'>$</span>(<span className='blue1'>"#myButton"</span>).<span className='blue'>click</span>{'('}<span className='red'>function</span>(){'{'}</p>

  <p>&nbsp;<span className='blueviole'>alert</span>(<span className='blue1'>"Bouton cliqué !"</span>);</p>

  <p>&nbsp;{'});'}</p>

  <p>{'});'}</p>

  <p>{'</'}<span className='green'>script</span>{'>'}</p>

  <p>{'</'}<span className='green'>body</span>{'>'}</p>

  <p>{'</'}<span className='green'>html</span>{'>'}</p>
</code>    

<p>Dans ce code, nous incluons la bibliothèque jQuery dans la section head du document HTML et attachons un gestionnaire d'événements <b>click()</b> à l'élément de bouton en utilisant le sélecteur d'ID <b>#myButton</b>. À l'intérieur de la fonction de gestionnaire d'événements, nous utilisons la méthode <b>alert()</b> pour afficher une boîte de message avec le texte "Bouton cliqué !".</p>

<p>Lorsque l'utilisateur clique sur le bouton, l'événement <b>click()</b> est déclenché, et la fonction du gestionnaire d'événements est exécutée, affichant la boîte de message.</p>

<p>Voici un autre exemple qui montre comment utiliser la méthode <b>submit()</b> de jQuery pour attacher un gestionnaire d'événements de soumission à un élément de formulaire et empêcher le comportement de soumission par défaut du formulaire :</p>
    
<code>
  <p>{'<'}!<span className='blue'>DOCTYPE</span> <span className='blue1'>html</span>{'>'}</p>

  <p>{'<'}<span className='green'>html</span>{'>'}</p> 

  <p>{'<'}<span className='green'>head</span>{'>'}</p>

  <p>&nbsp;{'<'}<span className='green'>title</span>{'>'}Exemple d'événement jQuery{'</'}<span className='green'>title</span>{'>'}</p>

  <p>{'<'}<span className='green'>script</span> <span className='blue'>src</span>=<span className='blue1'>"https://code.jquery.com/jquery-3.6.0.min.js"</span>{'>'}{'</'}<span className='green'>script</span>{'>'}</p>

  <p>{'</'}<span className='green'>head</span>{'>'}</p>

  <p>{'<'}<span className='green'>body</span>{'>'}</p>

  <p>{'<'}<span className='green'>form</span> <span className='blue'>id</span>=<span className='blue1'>"myForm"</span>{'>'}</p>

  <p>&nbsp;{'<'}<span className='green'>label</span> <span className='blue'>for</span>=<span className='blue1'>"name"</span>{'>'}Nom:{'</'}<span className='green'>label</span>{'>'}</p>

  <p>&nbsp;{'<'}<span className='green'>input</span> <span className='blue'>type</span>=<span className='blue1'>"text"</span> <span className='blue'>id</span>=<span className='blue1'>"name"</span> <span className='blue'>name</span>=<span className='blue1'>"name"</span>{'><'}<span className='green'>br</span>{'><'}<span className='green'>br</span>{'>'}</p>

  <p>&nbsp;{'<'}<span className='green'>label</span> <span className='blue'>for</span>=<span className='blue1'>"email"</span>{'>'}E-mail:{'</'}<span className='green'>label</span>{'>'}</p>

  <p>&nbsp;{'<'}<span className='green'>input</span> <span className='blue'>type</span>=<span className='blue1'>"email"</span> <span className='blue'>id</span>=<span className='blue1'>"email"</span> <span className='blue'>name</span>=<span className='blue1'>"email"</span>{'><'}<span className='green'>br</span>{'><'}<span className='green'>br</span>{'>'}</p>

  <p>&nbsp;{'<'}<span className='green'>input</span> <span className='blue'>type</span>=<span className='blue1'>"submit"</span> <span className='blue'>value</span>=<span className='blue1'>"Soumettre"</span>{'>'}</p>

  <p>{'</'}<span className='green'>form</span>{'>'}</p>

  <p>{'<'}<span className='green'>script</span>{'>'}</p>

  <p>&nbsp;{'$(document).ready(function(){'}</p>

  <p>&nbsp;<span className='blueviole'>$</span>(<span className='blue1'>"#myForm"</span>).<span className='blue'>submit</span>{'('}<span className='red'>function</span>(event){'{'}</p>

  <p>&nbsp;event.<span className='blue'>preventDefault</span>();</p>

  <p>&nbsp;<span className='blueviole'>alert</span>(<span className='blue1'>"Formulaire soumis !"</span>);</p>

  <p>&nbsp;{'});'}</p>

  <p>{' });'}</p>

  <p>{'</'}<span className='green'>script</span>{'>'}</p>

  <p>{'</'}<span className='green'>body</span>{'>'}</p>

  <p>{'</'}<span className='green'>html</span>{'>'}</p>
</code>

<p>Dans ce code, nous attachons un gestionnaire d'événements <b>submit()</b> à l'élément de formulaire en utilisant le sélecteur d'ID <b>#myForm</b>. À l'intérieur de la fonction du gestionnaire d'événements, nous utilisons la méthode <b>preventDefault()</b> pour empêcher le comportement de soumission par défaut du formulaire, puis nous utilisons la méthode <b>alert()</b> pour afficher une boîte de message avec le texte "Formulaire soumis !".</p>

<p>Lorsque l'utilisateur soumet le formulaire en cliquant sur le bouton Soumettre, l'événement <b>submit()</b> est déclenché, et la fonction du gestionnaire d'événements est exécutée, affichant la boîte de message.</p>

<p>En résumé, jQuery fournit une interface simple et puissante pour manipuler le DOM et répondre aux événements de l'utilisateur dans les pages web.</p>


<b><p>* Texte écrit avec l'aide d'un traducteur. Si vous trouvez une erreur, veuillez nous en informer *</p></b>
    <div className='ads-container'>  
  {/*  реклама  */}
</div> 
    </div>
  )
}

export default FrJquery;