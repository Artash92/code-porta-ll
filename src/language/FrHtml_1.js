import React from 'react';

function FrHtml_1() {
  return (
    <div>
        <div className='ad-container'>  
          {/*  реклама  */}
        </div>

        <h1>HTML</h1>

<p>HTML, qui signifie HyperText Markup Language, est un langage de balisage utilisé pour créer et structurer le contenu sur le web. Il est l'épine dorsale de chaque site web et sert de fondation aux pages web. HTML est un langage déclaratif, ce qui signifie qu'il est utilisé pour décrire le contenu et la structure d'une page web, mais pas nécessairement son apparence.</p>   

<p>HTML a été créé par Tim Berners-Lee au début des années 1990 alors qu'il travaillait au CERN, l'Organisation européenne pour la recherche nucléaire. Berners-Lee cherchait un moyen de partager et d'organiser l'information entre les chercheurs, et HTML était la solution qu'il avait trouvée. HTML a été conçu comme un langage simple pouvant être facilement compris et utilisé par n'importe qui, indépendamment de ses compétences techniques.</p>

<p>HTML est constitué d'une série d'éléments, qui sont représentés par des balises. Les balises sont encadrées par des chevrons et sont utilisées pour définir la structure et le contenu d'une page web. Par exemple, la balise {'<head>'} est utilisée pour définir la section d'en-tête d'une page web, qui contient généralement des informations telles que le titre de la page et des liens vers des feuilles de style externes et des scripts. La balise {'<body>'} est utilisée pour définir la section du corps d'une page web, qui contient le contenu principal de la page.</p>

<p>HTML est un langage en constante évolution, de nouvelles versions étant publiées périodiquement. La version actuelle de HTML est HTML5, qui a été publiée en 2014. HTML5 a introduit de nombreuses nouvelles fonctionnalités et capacités, telles que les balises vidéo et audio, les éléments de canevas pour dessiner des graphiques, et les balises sémantiques pour une meilleure accessibilité et un meilleur référencement.</p>

<p>En résumé, HTML est un langage de balisage utilisé pour créer et structurer le contenu sur le web. Il a été créé par Tim Berners-Lee au début des années 1990 et est l'épine dorsale de chaque site web. HTML est constitué d'une série d'éléments représentés par des balises, et c'est un langage en constante évolution avec de nouvelles versions publiées périodiquement.</p>

<p>1. Page web simple avec un titre et un paragraphe :</p>

<code>
   <p>{'<'}!<span className='blue'>DOCTYPE</span> <span className='blue1'>html</span>{'>'}</p>
   <p>{'<'}<span className='green'>html</span>{'>'}</p> 
   <p>{'<'}<span className='green'>head</span>{'>'}</p>
   <p>&nbsp;{'<'}<span className='green'>title</span>{'>'}Ma page web{'</'}<span className='green'>title</span>{'>'}</p>
   <p>{'</'}<span className='green'>head</span>{'>'}</p>
   <p>{'<'}<span className='green'>body</span>{'>'}</p>
   <p>&nbsp;{'<'}<span className='green'>h1</span>{'>'}Bienvenue sur ma page web{'</'}<span className='green'>h1</span>{'>'}</p>
   <p>&nbsp;{'<'}<span className='green'>p</span>{'>'}Ceci est ma première page web.{'</'}<span className='green'>p</span>{'>'}</p>
   <p>{'</'}<span className='green'>body</span>{'>'}</p>
   <p>{'</'}<span className='green'>html</span>{'>'}</p>
</code>

<p>Il s'agit d'un exemple de page web simple composée d'un titre et d'un paragraphe. Le titre est représenté par la balise "title" et le paragraphe par la balise "p". Le titre de la page est affiché dans la barre de titre du navigateur et dans les résultats des moteurs de recherche.</p>

<p>2. Image avec un texte alternatif et un lien vers une autre page :</p>
  
  <code>
    <p>{'<'}!<span className='blue'>DOCTYPE</span> <span className='blue1'>html</span>{'>'}</p>
    
    <p>{'<'}<span className='green'>html</span>{'>'}</p> 
   
    <p>{'<'}<span className='green'>head</span>{'>'}</p>  
   
    <p>&nbsp;{'<'}<span className='green'>title</span>{'>'}Ma page web{'</'}<span className='green'>title</span>{'>'}</p> 
   
    <p>{'</'}<span className='green'>head</span>{'>'}</p> 
   
    <p>{'<'}<span className='green'>body</span>{'>'}</p> 
   
    <p>&nbsp;{'<'}<span className='green'>h1</span>{'>'}Bienvenue sur ma page web{'</'}<span className='green'>h1</span>{'>'}</p>
   
    <p>&nbsp;{'<'}<span className='green'>p</span>{'>'}Voici une image d'un chat :{'</'}<span className='green'>p</span>{'>'}</p>
   
    <p>&nbsp;{'<'}<span className='green'>img</span> <span className='blue'>src</span>=<span className='blue1'>"chat.jpg"</span> <span className='blue'>alt</span>=<span className='blue1'>"Un chat mignon"</span>{'>'}</p> 

    <p>&nbsp;{'<'}<span className='green'>p</span>{'>'}Cliquez {'<'}<span className='green'>a</span> <span className='blue'>href</span>=<span className='blue1'>"http://www.google.com"</span>{'>'}ici{'</'}<span className='green'>a</span>{'>'} pour aller sur Google.{'</'}<span className='green'>p</span>{'>'}</p> 

    <p>{'</'}<span className='green'>body</span>{'>'}</p> 

    <p>{'</'}<span className='green'>html</span>{'>'}</p>
</code>

<p>Cet exemple comprend une image d'un chat, représentée par la balise "img", avec un texte alternatif affiché au cas où l'image ne pourrait pas être chargée. Le lien vers Google est représenté par la balise "a" avec l'attribut "href" pointant vers l'URL de la page de destination.</p>

<p>3. Formulaire pour saisir un nom et soumettre des données à un serveur :</p>
  
  <code>
    <p>{'<'}!<span className='blue'>DOCTYPE</span> <span className='blue1'>html</span>{'>'}</p>
    
    <p>{'<'}<span className='green'>html</span>{'>'}</p>    

    <p>{'<'}<span className='green'>head</span>{'>'}</p>  

    <p>&nbsp;{'<'}<span className='green'>title</span>{'>'}Ma page web{'</'}<span className='green'>title</span>{'>'}</p>   

    <p>{'</'}<span className='green'>head</span>{'>'}</p>  

    <p>{'<'}<span className='green'>body</span>{'>'}</p> 

    <p>&nbsp;{'<'}<span className='green'>h1</span>{'>'}Bienvenue sur ma page web{'</'}<span className='green'>h1</span>{'>'}</p> 

    <p>{'<'}<span className='green'>form</span>{'>'}</p> 

    <p>&nbsp;{'<'}<span className='green'>label</span> <span className='blue'>for</span>=<span className='blue1'>"name"</span>{'>'}Entrez votre nom :{'</'}<span className='green'>label</span>{'>'}</p>  

    <p>&nbsp;{'<'}<span className='green'>input</span> <span className='blue'>type</span>=<span className='blue1'>"text"</span> <span className='blue'>id</span>=<span className='blue1'>"name"</span> <span className='blue'>name</span>=<span className='blue1'>"name"</span>{'><'}<span className='green'>br</span>{'><'}<span className='green'>br</span>{'>'}</p>  

    <p>&nbsp;{'<'}<span className='green'>input</span> <span className='blue'>type</span>=<span className='blue1'>"submit"</span> <span className='blue'>value</span>=<span className='blue1'>"Soumettre"</span>{'>'}</p>  

    <p>{'</'}<span className='green'>form</span>{'>'}</p>  

    <p>{'</'}<span className='green'>body</span>{'>'}</p>   

    <p>{'</'}<span className='green'>html</span>{'>'}</p>   
 </code>

  <p>Cet exemple montre un formulaire avec un champ de saisie de texte pour que l'utilisateur entre son nom. Lorsque le formulaire est soumis, les données sont envoyées à un serveur pour traitement. La balise "label" fournit une étiquette textuelle pour le champ de saisie, et la balise "input" est utilisée pour créer le champ de saisie et le bouton de soumission.</p>

  <p>4. Liste ordonnée d'éléments :</p>

<code>
    <p>{'<'}!<span className='blue'>DOCTYPE</span> <span className='blue1'>html</span>{'>'}</p>  
    
    <p>{'<'}<span className='green'>html</span>{'>'}</p> 

    <p>{'<'}<span className='green'>head</span>{'>'}</p>

    <p>&nbsp;{'<'}<span className='green'>title</span>{'>'}Ma page web{'</'}<span className='green'>title</span>{'>'}</p>

    <p>{'</'}<span className='green'>head</span>{'>'}</p> 

    <p>{'<'}<span className='green'>body</span>{'>'}</p> 

    <p>&nbsp;{'<'}<span className='green'>h1</span>{'>'}Bienvenue sur ma page web{'</'}<span className='green'>h1</span>{'>'}</p> 

    <p>&nbsp;{'<'}<span className='green'>h2</span>{'>'}Mes plats préférés:{'</'}<span className='green'>h2</span>{'>'}</p> 

    <p>{'<'}<span className='green'>ol</span>{'>'}</p>

    <p>&nbsp;{'<'}<span className='green'>li</span>{'>'}Pizza{'</'}<span className='green'>li</span>{'>'}</p>

    <p>&nbsp;{'<'}<span className='green'>li</span>{'>'}Burgers{'</'}<span className='green'>li</span>{'>'}</p>

    <p>&nbsp;{'<'}<span className='green'>li</span>{'>'}Glace{'</'}<span className='green'>li</span>{'>'}</p>

    <p>{'</'}<span className='green'>ol</span>{'>'}</p> 

    <p>{'</'}<span className='green'>body</span>{'>'}</p> 

    <p>{'</'}<span className='green'>html</span>{'>'}</p>
 </code>

<p>Cet exemple montre une liste ordonnée d'éléments représentée par la balise "ol", avec chaque élément représenté par la balise "li". Les numéros de la liste sont automatiquement générés par le navigateur.</p>

<p>5. Liste non ordonnée d'éléments :</p>

<code>
  <p>{'<'}!<span className='blue'>DOCTYPE</span> <span className='blue1'>html</span>{'>'}</p>
  <p>{'<'}<span className='green'>html</span>{'>'}</p>
  <p>{'<'}<span className='green'>head</span>{'>'}</p>
  <p>&nbsp;{'<'}<span className='green'>title</span>{'>'}Ma page web{'</'}<span className='green'>title</span>{'>'}</p>
  <p>{'</'}<span className='green'>head</span>{'>'}</p>
  <p>{'<'}<span className='green'>body</span>{'>'}</p>
  <p>&nbsp;{'<'}<span className='green'>h1</span>{'>'}Bienvenue sur ma page web{'</'}<span className='green'>h1</span>{'>'}</p> 
  <p>&nbsp;{'<'}<span className='green'>h2</span>{'>'}Mes films préférés:{'</'}<span className='green'>h2</span>{'>'}</p> 
  <p>{'<'}<span className='green'>ul</span>{'>'}</p>
  <p>&nbsp;{'<'}<span className='green'>li</span>{'>'}Les Évadés{'</'}<span className='green'>li</span>{'>'}</p>
  <p>&nbsp;{'<'}<span className='green'>li</span>{'>'}Le Parrain{'</'}<span className='green'>li</span>{'>'}</p>
  <p>&nbsp;{'<'}<span className='green'>li</span>{'>'}The Dark Knight{'</'}<span className='green'>li</span>{'>'}</p>
  <p>{'</'}<span className='green'>ul</span>{'>'}</p> 
  <p>{'</'}<span className='green'>body</span>{'>'}</p>
  <p>{'</'}<span className='green'>html</span>{'>'}</p> 
</code>

<p>Cet exemple montre une liste non ordonnée d'éléments représentée par la balise "ul", avec chaque élément représenté par la balise "li". Les éléments de liste sont affichés avec des puces par défaut.</p> 

<p>Pour améliorer davantage leur compréhension de HTML, les élèves peuvent être dirigés vers des ressources supplémentaires telles que la documentation sur <b>MDN Web Docs</b> ou <b>W3Schools</b>.</p> 

<p>Pour ajouter un lien vers MDN Web Docs sur votre site web, utilisez le code HTML suivant :</p> 

<p><a href="https://developer.mozilla.org/en-US/docs/Web/HTML" target='_blank'> <b> &#x1F44D; MDN Web Docs</b></a></p> 

<p>Pour ajouter un lien vers W3Schools sur votre site web, utilisez le code HTML suivant :</p>  

<p><a href="https://www.w3schools.com/html/" target='_blank' > <b>&#x1F44D; W3Schools</b></a></p>

<p>MDN Web Docs et W3Schools fournissent tous deux une documentation complète et détaillée sur HTML et les technologies connexes, ainsi que des tutoriels interactifs et des exemples. Les élèves peuvent utiliser ces ressources pour approfondir leurs connaissances en HTML et améliorer leurs compétences en développement web.</p>
    
<b><p>* Texte écrit avec l'aide d'un traducteur. Si vous trouvez une erreur, veuillez nous en informer *</p></b>
    <div className='ads-container'>  
  {/*  реклама  */}
</div>
    </div>
  )
}

export default FrHtml_1;