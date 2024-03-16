import React from 'react';

function FrHtml_6() {
  return (
    <div>
        <div className='ad-container'>  
          {/*  реклама  */}
        </div>
        
      <h1>Entités de caractères :</h1>

<p>Un bref guide de référence démontrant les propriétés de base des styles CSS et leur utilisation.</p>

<p>Cette feuille de triche couvre les polices, les couleurs, les bordures, le modèle de boîte, le positionnement, la mise en forme du texte, les animations, et plus encore.</p>

<p><b>CSS</b> n'est pas utilisé pour définir directement les entités de caractères. En général, elles sont utilisées en HTML pour représenter des caractères spéciaux, tels que &amp;, &lt;, &gt;, etc.</p>

<h2>Polices :</h2>

<p><strong>font-family :</strong> Définit la famille de polices pour le texte.</p>

<code>
    <span className='blue'>font-family</span> : <span className='blue1'>{'\'Arial\', sans-serif'}</span>;
</code>

<p><strong>font-size :</strong> Détermine la taille de la police.</p>

<code>
    <span className='blue'>font-size</span> : <span className='blue1'>16px</span>;
</code>

<p><strong>font-style :</strong> Définit le style de la police (par exemple, italique).</p>

<code>
    <span className='blue'>font-style</span> : <span className='blue1'>italic</span>;
</code>

<p><strong>font-weight :</strong> Définit le poids de la police (par exemple, gras).</p>

<code>
    <span className='blue'>font-weight</span> : <span className='blue1'>bold</span>;
</code>

<h2>Couleurs :</h2>

<p><strong>color :</strong> Définit la couleur du texte.</p>

<code>
    <span className='blue'>color</span> : <span className='blue1'>#3366cc</span>;
</code>

<p><strong>background-color :</strong> Définit la couleur de fond d'un élément.</p>

<code>
    <span className='blue'>background-color</span> : <span className='blue1'>#f0f0f0</span>;
</code>

<h2>Hover en CSS</h2>

<p><strong>:hover</strong> est une pseudo-classe CSS qui s'applique à un élément lorsque le curseur de la souris survole celui-ci.</p>

<p>Par exemple, si vous souhaitez changer la couleur du texte lorsque le curseur de la souris le survole, vous pouvez utiliser :hover en CSS.</p>

<code className='codeMin'>{'<'}<span className='green'>bouton</span> <span className='blue'>class</span>=<span className='blueviole'>"bouton"</span>{'>'}Survolez{'</'}<span className='green'>bouton</span>{'>'}</code>
    
<code>
    <p>{'bouton:hover {'}</p>

    <p>&nbsp;<span className='blue'>color</span> : <span className='blue1'>{'rouge'}</span>;</p>

    <p>{'}'}</p>
</code>

<p>Dans cet exemple, lorsque l'utilisateur survole l'élément, la classe du bouton se voit attribuer une couleur rouge.</p>    

<h2>URLs:</h2>

<p><strong>background-image :</strong> Définit une image comme fond.</p>

<code>
    <span className='blue'>background-image</span> : <span className='blue1'>{"url('background.jpg')"}</span>;
</code>

<p><strong>@media :</strong> Permet de définir des styles pour différents types d'appareils ou conditions.</p>

<code>
    <span className='blueviole'>@media</span> <span className='yellow'>screen</span> et <span className='blue1'>(max-width: 600px)</span> {'{'}&nbsp;
    <span className='green'>{'/* Styles pour les écrans de 600 pixels de large ou moins */'}</span>
    &nbsp;{'}'}
</code>

<h2>Couverture en CSS</h2>

<p><strong>Couverture</strong> : C'est la valeur de la propriété background-size en CSS, qui met à l'échelle une image pour couvrir complètement le conteneur spécifié, tout en maintenant le rapport hauteur/largeur de l'image.</p>

<p>Par exemple, si vous avez un conteneur div avec une image de fond et que vous voulez que l'image couvre complètement le conteneur sans déformation, vous pouvez utiliser la valeur cover pour la propriété background-size.</p>

<code>
  <p>{'.conteneur {'}</p>
  
  <p>&nbsp;<span className='blue'>largeur</span> : <span className='blue1'>300px</span>;</p>

  <p>&nbsp;<span className='blue'>hauteur</span> : <span className='blue1'>200px</span>;</p>

  <p>&nbsp;<span className='blue'>background-image</span> : <span className='blue1'>{"url('exemple.jpg')"}</span>;</p>

  <p>&nbsp;<span className='blue'>background-size</span> : <span className='blue1'>cover</span>;</p>

  <p>{'}'}</p>
</code>

<p>Dans cet exemple, si les dimensions du conteneur dépassent les dimensions de l'image, l'image sera mise à l'échelle pour recouvrir complètement le conteneur. Si les dimensions du conteneur sont plus petites que les dimensions de l'image, l'image sera rognée pour recouvrir complètement le conteneur sans déformation.</p>

<h2>Bordures :</h2>

<p><strong>bordure :</strong> Définit le style, la couleur et la largeur de la bordure d'un élément.</p>

<code>
    <span className='blue'>bordure</span> : <span className='blue1'>1px solide #000</span>;
</code>

<p><strong>bordure-bottom, bordure-bottom-color, bordure-bottom-style, bordure-bottom-width :</strong> Propriétés spécifiques pour la bordure inférieure.</p>

<code>
    <span className='blue'>bordure-bottom</span> : <span className='blue1'>2px en pointillés #333</span>;
</code>

<h2>Modèle de boîte :</h2>

<p><strong>marge, rembourrage :</strong> Définissent respectivement l'espacement externe et interne.</p>

<code>
    <span className='blue'>marge</span> : <span className='blue1'>10px</span>;
    <span className='blue'>&nbsp;rembourrage</span> : <span className='blue1'>20px</span>;
</code>

<p><strong>largeur, hauteur :</strong> Définissent la largeur et la hauteur d'un élément.</p>

<code>
    <span className='blue'>largeur</span> : <span className='blue1'>300px</span>;
    <span className='blue'>&nbsp;hauteur</span> : <span className='blue1'>150px</span>;
</code>

<h2>Positionnement :</h2>

<p><strong>position :</strong> Détermine la méthode de positionnement d'un élément (par exemple, relatif, absolu, fixe).</p>

<code>
    <span className='blue'>position</span> : <span className='blue1'>relatif</span>;
</code>

<p><strong>gauche :</strong> Définit la distance depuis le bord gauche.</p>

<code>
    <span className='blue'>gauche</span> : <span className='blue1'>50px</span>;
</code>

<p><strong>flottant :</strong> Permet à l'élément de "flotter" à gauche ou à droite.</p>

<code>
    <span className='blue'>flottant</span> : <span className='blue1'>gauche</span>;
</code>

<h2>Mise en forme du texte :</h2>

<p><strong>alignement du texte :</strong> Définit l'alignement horizontal du texte.</p>

<code>
    <span className='blue'>alignement du texte</span> : <span className='blue1'>centre</span>;
</code>

<p><strong>décoration du texte :</strong> Définit le style de soulignement, de sur-lignage ou de ligne à travers le texte.</p>

<code>
    <span className='blue'>décoration du texte</span> : <span className='blue1'>souligné</span>;
</code>

<h2>Animations et transitions :</h2>

<p><strong>@keyframes, animation :</strong> Utilisés pour créer des animations.</p>

<code>
    <p><span className='blueviole'>@keyframes</span><span className='yellow'> slideIn</span> {'{'}</p>    
    
    <p>&nbsp;<span className='blue1'>depuis</span> {'{'}</p>

    <p>&nbsp;&nbsp;<span className='blue'>transformer</span> : <span className='blue1'>translateX(-100%)</span>;</p>

    <p>&nbsp;{'}'}</p>

    <p>&nbsp;<span className='blue1'>à</span> {'{'}</p>

    <p>&nbsp;&nbsp;<span className='blue'>transformer</span> : <span className='blue1'>translateX(0)</span>;</p>

    <p>&nbsp;{'}'}</p>

    <p>{'}'}</p>

    <p>{'.élément-animé {'}</p>

    <p>&nbsp;<span className='blue'>animation</span> : <span className='blue1'>slideIn 1s ease-in-out</span>;</p>

    <p>{'}'}</p>
</code>

<p><strong>durée de transition :</strong> Définit la durée d'une transition pour les propriétés.</p>

<code>
    <span className='blue'>durée de transition</span> : <span className='blue1'>0.5s</span>;
</code>

<h2>Divers :</h2>

<p><strong>opacité :</strong> Définit la transparence d'un élément.</p>

<code>
    <span className='blue'>opacité</span> : <span className='blue1'>0.8</span>;
</code>

<p><strong>débordement :</strong> Détermine ce qui se passe si le contenu d'un élément dépasse ses dimensions.</p>

<code>
    <span className='blue'>débordement</span> : <span className='blue1'>caché</span>;
</code>

<p><strong>transformer :</strong> Applique des transformations (translation, rotation, mise à l'échelle) à un élément.</p>

<code>
    <span className='blue'>transformer</span> : <span className='blue1'>tourner(45deg)</span>;
</code>

<h2>Important en CSS</h2>

<p><strong>Important</strong> : C'est un mot-clé en CSS utilisé pour donner la priorité à une règle de style spécifique, en veillant à ce qu'elle soit appliquée même s'il existe d'autres règles tentant de la remplacer.</p>

<p>Lorsque vous ajoutez le mot-clé important à une règle de style, cette règle obtient la priorité la plus élevée et sera appliquée même s'il existe d'autres règles avec des sélecteurs plus spécifiques ou si elles sont définies ultérieurement dans le code.</p>

<p className='green'>/* Par exemple, supposez que vous ayez la règle CSS suivante */</p>

<code><span className='blue'>couleur</span> : <span className='blue1'>rouge</span>;</code>

<p>Si vous voulez que cette règle ait la plus haute priorité, vous pouvez ajouter le mot-clé important :</p>

<code>
    <p>{'.couleur-rouge {'}</p>

    <p>&nbsp;<span className='blue'>couleur</span> : <span className='blue1'>rouge</span>&nbsp;<span className='blueviole'>!important</span>;</p>

    <p>{'}'}</p>
</code>

<p>À présent, cette règle prendra le pas sur d'autres règles définies pour la couleur du texte, même si elles sont plus spécifiques ou définies ultérieurement dans le code.</p>

<p>Il est important d'utiliser le mot-clé important avec parcimonie car son utilisation peut rendre la structure CSS moins gérable et compliquer le débogage des styles, en particulier dans les grands projets.</p>

<h2>Affichage : Flex en CSS</h2>

<p><strong>Affichage</strong> : flex est une propriété CSS appliquée à un conteneur (élément parent) pour définir un modèle de disposition flexible pour ses éléments enfants (éléments flexibles).</p>

<p>Lors de l'utilisation de display : flex, les éléments enfants (éléments flexibles) dans le conteneur seront disposés en ligne ou en colonne, selon la valeur de la propriété flex-direction.</p>

<code>
    <p>{'<'}<span className='green'>div<span className='blue'><span> style</span></span></span>{'={{'}<span><span><span className='blueviole'>{" display: 'flex', justifyContent: 'center', alignItems: 'center' "}</span></span></span>{'}}>'}</p>
    
    <p>&nbsp;&nbsp;&nbsp;{'<'}<span className='green'>div</span>{'>'}Item 1{'</'}<span className='green'>div</span>{'>'}</p>

    <p>&nbsp;&nbsp;&nbsp;{'<'}<span className='green'>div</span>{'>'}Item 2{'</'}<span className='green'>div</span>{'>'}</p>

    <p>&nbsp;&nbsp;&nbsp;{'<'}<span className='green'>div</span>{'>'}Item 3{'</'}<span className='green'>div</span>{'>'}</p>

    <p>&nbsp;{'</'}<span className='green'>div</span>{'>'}</p>
</code>

<p>Dans cet exemple, les éléments 1, 2 et 3 seront disposés horizontalement dans le conteneur car display : flex définit un modèle de disposition flexible.</p>

<p>Vous pouvez également utiliser diverses propriétés et valeurs, telles que justify-content et align-items, pour personnaliser l'alignement et la distribution des éléments enfants dans le conteneur en utilisant display : flex.</p>
    
<b><p>* Texte écrit avec l'aide d'un traducteur. Si vous trouvez une erreur, veuillez nous en informer *</p></b>
    <div className='ads-container'>  
  {/*  реклама  */}
</div>  
    </div>
  )
}

export default FrHtml_6;