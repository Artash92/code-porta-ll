import React from 'react';

function FrHtml_2() {
  return (
    <div>
      <div className='ad-container'>  
          {/*  реклама  */}
        </div>
        
        <h1>Balises HTML et leurs descriptions :</h1>

<p>1. <b>{'<'}<span className='green'>html</span>{'>'}</b> Définit un document HTML.</p>

<p>2. <b>{'<'}<span className='green'>head</span>{'>'}</b> Contient des informations de métadonnées sur le document, telles que le titre et les liens vers les feuilles de style CSS.</p>

<p>3. <b>{'<'}<span className='green'>title</span>{'>'}</b> Définit le titre du document, qui apparaît dans la barre de titre ou l'onglet du navigateur.</p>

<p>4. <b>{'<'}<span className='green'>body</span>{'>'}</b> Contient le contenu visible du document.</p>

<p>5. <b>{'<'}<span className='green'>h1</span>{'>'} - {'<'}<span className='green'>h6</span>{'>'}</b> Définit des en-têtes de différents niveaux d'importance, {'<h1>'} étant le plus important et {'<h6>'} le moins important.</p>

<p>6. <b>{'<'}<span className='green'>p</span>{'>'}</b> Définit un paragraphe de texte.</p>

<p>7. <b>{'<'}<span className='green'>a</span>{'>'}</b> Définit un lien hypertexte vers une autre page web ou un emplacement spécifique dans la même page.</p>

<p>8. <b>{'<'}<span className='green'>img</span>{'>'}</b> Insère une image dans le document.</p>

<p>9. <b>{'<'}<span className='green'>ul</span>{'>'}</b> Définit une liste non ordonnée, généralement marquée par des puces.</p>

<p>10. <b>{'<'}<span className='green'>ol</span>{'>'}</b> Définit une liste ordonnée, généralement marquée par des chiffres ou des lettres.</p>

<p>11. <b>{'<'}<span className='green'>li</span>{'>'}</b> Définit un élément de liste dans une liste ordonnée ou non ordonnée.</p>

<p>12. <b>{'<'}<span className='green'>div</span>{'>'}</b> Définit un conteneur pour les éléments HTML, qui peut être utilisé pour le style et le positionnement.</p>

<p>13. <b>{'<'}<span className='green'>span</span>{'>'}</b> Définit un petit conteneur pour les éléments HTML en ligne, qui peut être utilisé pour le style et le positionnement.</p>

<p>14. <b>{'<'}<span className='green'>form</span>{'>'}</b> Définit un formulaire pour la saisie de l'utilisateur, qui peut contenir différents champs de saisie et des boutons de soumission.</p>

<p>15. <b>{'<'}<span className='green'>input</span>{'>'}</b> Définit un champ de saisie pour l'utilisateur, tel qu'une zone de texte ou une case à cocher.</p>

<p>16. <b>{'<'}<span className='green'>button</span>{'>'}</b> Définit un élément de bouton cliquable, qui peut être utilisé pour diverses interactions avec l'utilisateur.</p>

<p>17. <b>{'<'}<span className='green'>select</span>{'>'}</b> Définit une liste déroulante, qui permet aux utilisateurs de sélectionner une ou plusieurs options.</p>

<p>18. <b>{'<'}<span className='green'>option</span>{'>'}</b> Définit une option dans une liste déroulante.</p>

<p>19. <b>{'<'}<span className='green'>textarea</span>{'>'}</b> Définit un champ de saisie de texte multi-lignes.</p>

<p>20. <b>{'<'}<span className='green'>hr</span>{'>'}</b> Signifie "règle horizontale". Elle est utilisée pour insérer une ligne horizontale dans la page HTML. La ligne peut être utilisée pour séparer visuellement le contenu.</p>

<p>21. <b>{'<'}<span className='green'>br</span>{'>'}</b> Signifie "saut de ligne". Il est utilisé pour insérer un saut de ligne ou une nouvelle ligne dans le contenu HTML. Contrairement à la balise {'<p>'} qui crée un nouveau paragraphe, la balise {'<br>'} crée uniquement une nouvelle ligne.</p>

<p>22. <b>{'<'}<span className='green'>small</span>{'>'}</b> Définit un texte plus petit (comme le copyright et d'autres commentaires).</p>

<p><a href="https://www.w3schools.com/tags/" target='_blank' > <b>Vous pouvez trouver plus de balises ici 👉🏼 W3Schools</b></a></p>

<h2>Balises et attributs de table HTML</h2>

<p>1. <b>{'<'}<span className='green'>table</span>{'>'}</b> Est utilisé pour définir le début et la fin d'une table HTML. Toutes les balises liées à la table sont contenues dans l'élément {'<table>'}.</p>

<p>2. <b>{'<'}<span className='green'>caption</span>{'>'}</b> Est utilisé pour fournir un titre ou une légende pour la table. Il doit être placé immédiatement après la balise d'ouverture {'<table>'}.</p>

<p>3. <b>{'<'}<span className='green'>frame</span>{'>'}</b> Spécifie comment les bordures de la table doivent être affichées. Il a trois valeurs possibles : void, above et below.</p>

<p>4. <b>{'<'}<span className='green'>rules</span>{'>'}</b> Spécifie la visibilité des bordures de la table. Il peut être réglé sur "none" pour masquer les bordures, "groups" pour afficher les bordures entre les groupes de lignes et de colonnes, ou "rows" pour afficher les bordures entre les lignes.</p>

<p>5. <b>{'<'}<span className='green'>border</span>{'>'}</b> Spécifie la largeur des bordures de la table en pixels.</p>

<p>6. <b>{'<'}<span className='green'>cellspacing</span>{'>'}</b> Spécifie la quantité d'espace entre les cellules adjacentes dans la table. Il est spécifié en pixels.</p>

<p>7. <b>{'<'}<span className='green'>cellpadding</span>{'>'}</b> Spécifie la quantité d'espace entre le contenu de la cellule et les bordures de la cellule. Il est également spécifié en pixels.</p>

<p>8. <b>{'<'}<span className='green'>tr</span>{'>'}</b> Définit une ligne de tableau.</p>

<p>9. <b>{'<'}<span className='green'>th</span>{'>'}</b> Définit une cellule d'en-tête de tableau. Cela est généralement utilisé pour fournir des en-têtes pour chaque colonne dans le tableau.</p>

<p>10. <b>{'<'}<span className='green'>td</span>{'>'}</b> Définit une cellule de données de tableau. C'est là que le contenu réel du tableau est placé.</p>

 <h2>Liens ou références hypertextes</h2>

<p>Les liens ou références hypertextes en HTML sont utilisés pour créer des éléments cliquables sur une page web qui permettent aux utilisateurs de naviguer vers d'autres pages, sections de la même page ou autres ressources en ligne. La structure de base d'un lien se compose d'une balise d'ancre {'(<a>)'} et d'un attribut href qui spécifie la destination du lien.</p>

<p>Voici un exemple de lien de base en HTML :</p>

<code><p>{'<'}<span className='green'>a</span> <span className='blue'>href</span>=<span className='blue1'>"https://www.example.com"</span>{'>'}Cliquez ici pour visiter Exemple.com{'</'}<span className='green'>a</span>{'>'}</p></code>

<p>Dans cet exemple, le texte "Cliquez ici pour visiter Exemple.com" est la partie cliquable du lien, tandis que l'attribut href spécifie l'URL de la destination. Lorsque l'utilisateur clique sur le lien, il est dirigé vers le site web à l'URL spécifiée.</p>

<p>Les liens peuvent également être utilisés pour créer des points d'ancrage à l'intérieur d'une seule page web. Cela permet aux utilisateurs de sauter rapidement vers une section spécifique de la page en cliquant sur un lien. Pour créer un point d'ancrage, vous ajoutez un attribut <b>id</b> à l'élément que vous souhaitez lier, puis créez un lien avec un symbole <b>#</b> suivi de la valeur de l'attribut <b>id</b> comme destination.</p>

 <code>
    <p>{'<'}<span className='green'>h2</span> <span className='blue'>id</span>=<span className='blue1'>"section1"</span>{'>'}Section 1{'</'}<span className='green'>h2 </span>{'>'}</p>
    <p>{'<'}<span className='green'>p</span>{'>'}Ceci est la première section de la page.{'</'}<span className='green'>p</span>{'>'}</p>
    <p>{'<'}<span className='green'>h2</span> <span className='blue'>id</span>=<span className='blue1'>"section2"</span>{'>'}Section 2 {'</'}<span className='green'>h2 </span>{'>'}</p>
    <p>{'<'}<span className='green'>p</span>{'>'}Ceci est la deuxième section de la page.{'</'}<span className='green'>p</span>{'>'}</p>
    <p>{'<'}<span className='green'>a</span> <span className='blue'>href</span>=<span className='blue1'>"#section1"</span>{'>'}Aller à la Section 1{'</'}<span className='green'>a</span>{'>'}</p>
    <p>{'<'}<span className='green'>a</span> <span className='blue'>href</span>=<span className='blue1'>"#section2"</span>{'>'}Aller à la Section 2{'</'}<span className='green'>a</span>{'>'}</p>
 </code>

<p>Dans cet exemple, nous avons ajouté des attributs <b>id</b> aux deux balises <b>h2</b> pour créer des points d'ancrage pour chaque section. Les deux liens en bas de la page utilisent l'attribut <b>href</b> pour lier à ces points d'ancrage, permettant aux utilisateurs de sauter rapidement vers une section spécifique de la page.</p>

<p>Il existe de nombreuses autres options et attributs qui peuvent être utilisés avec les liens en HTML, notamment target, download, rel et plus encore. En utilisant les liens de manière efficace, vous pouvez créer une expérience utilisateur plus interactive et engageante sur vos pages web.</p>

<p>Pour créer un lien pour un numéro de téléphone ou Skype, vous pouvez utiliser la balise {'<a>'} avec l'attribut href défini sur <b>"tel:"</b> ou <b>"skype:"</b> suivi du numéro de téléphone ou du nom d'utilisateur Skype.</p>

<p>Par exemple, pour créer un lien pour un numéro de téléphone, vous pouvez utiliser le code suivant :</p>

<code><p>{'<'}<span className='green'>a</span> <span className='blue'>href</span>=<span className='blue1'>"tel:+1234567890"</span>{'>'}Appelez-nous au +1 (234) 567-890{'</'}<span className='green'>a</span>{'>'}</p></code>

<p>Dans cet exemple, <b>"tel:"</b> est utilisé comme protocole pour les numéros de téléphone, et "+1234567890" est le numéro de téléphone. Lorsqu'un utilisateur clique sur ce lien sur un appareil mobile, il lancera automatiquement l'application téléphonique avec le numéro pré-rempli.</p>

<p>Pour créer un lien pour Skype, vous pouvez utiliser le code suivant :</p>

<code><p>{'<'}<span className='green'>a</span> <span className='blue'>href</span>=<span className='blue1'>"skype:username?call"</span>{'>'}Appelez-nous sur Skype{'</'}<span className='green'>a</span>{'>'}</p></code>

<p>Dans cet exemple, <b>"skype:"</b> est utilisé comme protocole pour les liens Skype, "username" est le nom d'utilisateur de la personne ou de l'entreprise que vous souhaitez appeler, et "?call" est ajouté pour initier un appel. Lorsqu'un utilisateur clique sur ce lien, il lancera l'application Skype et initiera un appel vers le nom d'utilisateur spécifié.</p>

<p><b>La balise {'<img>'} en HTML est utilisée pour afficher des images sur une page web. Voici un exemple de comment utiliser la balise {'<img>'} :</b></p>

<code><p>{'<'}<span className='green'>img</span> <span className='blue'>src</span>=<span className='blue1'>"image.jpg"</span> <span className='blue'>alt</span>=<span className='blue1'>"Description de l'image"</span>{'>'}</p></code>

<p>Examinons les différentes parties de cette balise :</p>

<p>L'attribut "src" spécifie l'URL du fichier image que vous souhaitez afficher.</p>

<p>L'attribut "alt" fournit une description de l'image pour les lecteurs d'écran et autres technologies d'assistance.</p>

<p>Voici un exemple de comment utiliser la balise {'<img>'} pour afficher une image avec une largeur et une hauteur spécifiques :</p>

<code><p>{'<'}<span className='green'>img</span> <span className='blue'>src</span>=<span className='blue1'>"image.jpg"</span> <span className='blue'>alt</span>=<span className='blue1'>"Description de l'image"</span> <span className='blue'>width</span>=<span className='blue1'>"500"</span> <span className='blue'>height</span>=<span className='blue1'>"300"</span> {'>'}</p></code>

<p>Dans cet exemple, les attributs <b>"width"</b> et <b>"height"</b> spécifient les dimensions de l'image en pixels.</p>

<p>Vous pouvez également ajouter d'autres attributs à la balise {'<img>'} pour personnaliser davantage l'affichage de l'image, tels que <b>"class"</b> et <b>"id"</b> à des fins de style CSS.</p>   
        
<b><p>* Texte écrit avec l'aide d'un traducteur. Si vous trouvez une erreur, veuillez nous en informer *</p></b>
    <div className='ads-container'>  
  {/*  реклама  */}
</div>
    </div>
  )
}

export default FrHtml_2;