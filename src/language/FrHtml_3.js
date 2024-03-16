import React from 'react';

function FrHtml_3() {
  return (
    <div>
       <div className='ad-container'>  
          {/*  реклама  */}
        </div>

<h1>Comprendre les balises meta en HTML - Un guide pour les débutants</h1>

<p>1. <b>charset :</b> L'attribut charset spécifie le codage des caractères pour le document HTML. Il est important de s'assurer que le codage est correctement défini pour que les caractères spéciaux soient affichés correctement.</p>

<p>Exemple :</p>

<code><p>{'<'}<span className='green'>meta</span> <span className='blue'>charset</span>=<span className='blue1'>"UTF-8"</span>{'>'}</p></code>

<p>2. <b>name :</b> L'attribut name est utilisé pour définir le type de métadonnées fournies, telles que les mots-clés, la description ou l'auteur.</p>

<p>Exemple :</p>

<code><p>{'<'}<span className='green'>meta</span> <span className='blue'>name</span>=<span className='blue1'>"description"</span> <span className='blue'>content</span>=<span className='blue1'>"Ceci est une description de ma page web."</span>{'>'}</p></code>

<p>3. <b>content :</b> L'attribut content est utilisé pour spécifier la valeur des métadonnées fournies.</p>

<p>Exemple :</p>

<code><p>{'<'}<span className='green'>meta</span> <span className='blue'>name</span>=<span className='blue1'>"keywords"</span> <span className='blue'>content</span>=<span className='blue1'>"HTML, CSS, JavaScript"</span>{'>'}</p></code>

<p>4. <b>http-equiv :</b> L'attribut http-equiv est utilisé pour définir un en-tête HTTP pour le document HTML, tel que refresh ou content-type</p>

<p>Exemple :</p>

<code><p>{'<'}<span className='green'>meta</span> <span className='blue'>http-equiv</span>=<span className='blue1'>"refresh"</span> <span className='blue'>content</span>=<span className='blue1'>"5"</span>{'>'}</p></code>

<p>5. <b>viewport :</b> L'attribut viewport est utilisé pour contrôler la mise en page et l'échelle d'une page web sur différents appareils, tels que les téléphones mobiles ou les tablettes.</p>

<p>Exemple :</p>

<code><p>{'<'}<span className='green'>meta</span> <span className='blue'>name</span>=<span className='blue1'>"viewport"</span> <span className='blue'>content</span>=<span className='blue1'>"width=device-width, initial-scale=1.0"</span>{'>'}</p></code>

<h2>Comment utiliser les couleurs en HTML : Guide pour débutants.</h2>

<p>Les couleurs en HTML peuvent être définies à l'aide de différentes méthodes, y compris les noms de couleur, les valeurs hexadécimales, les valeurs RGB et les valeurs HSL.</p>

<b>1. Noms de couleur :</b>

<p>HTML fournit un ensemble de noms de couleur prédéfinis qui peuvent être utilisés pour spécifier la couleur d'un élément. Quelques exemples de noms de couleur incluent "rouge", "vert", "bleu", "jaune", "violet" et "noir".</p>

<b>2. Valeurs hexadécimales :</b>

<p>Une valeur de couleur hexadécimale est un code à six chiffres qui représente une couleur. Les deux premiers chiffres représentent la quantité de rouge dans la couleur, les deux chiffres suivants représentent la quantité de vert dans la couleur, et les deux derniers chiffres représentent la quantité de bleu dans la couleur. Par exemple, #FF0000 représente rouge pur, #00FF00 représente vert pur, et #0000FF représente bleu pur.</p>

<b>3. Valeurs RGB :</b>

<p>Une valeur de couleur RGB est un ensemble de trois nombres qui représentent la quantité de rouge, de vert et de bleu dans une couleur. Chaque valeur varie de 0 à 255. Par exemple, rgb(255, 0, 0) représente rouge pur, rgb(0, 255, 0) représente vert pur, et rgb(0, 0, 255) représente bleu pur.</p>

<b>4. Valeurs HSL :</b>

<p>Une valeur de couleur HSL est un ensemble de trois nombres qui représentent la teinte, la saturation et la luminosité d'une couleur. La teinte est un degré sur la roue des couleurs (de 0 à 360), la saturation est une valeur en pourcentage (de 0% à 100%), et la luminosité est également une valeur en pourcentage (de 0% à 100%). Par exemple, hsl(0, 100%, 50%) représente rouge pur, hsl(120, 100%, 50%) représente vert pur, et hsl(240, 100%, 50%) représente bleu pur.</p>

<h2>Principes de base de CSS pour débutants : Une introduction aux feuilles de style en cascade</h2>

<p>CSS signifie Cascading Style Sheets et c'est un langage utilisé pour styler les documents HTML. CSS vous permet de changer les couleurs, les polices, la mise en page et d'autres aspects de votre page web. Il fonctionne en sélectionnant les éléments HTML et en leur appliquant des styles.</p>

<p>Les styles CSS sont créés à l'aide de sélecteurs, de propriétés et de valeurs. Les sélecteurs ciblent des éléments HTML spécifiques et peuvent être utilisés pour appliquer des styles à plusieurs éléments en même temps. Les propriétés définissent les styles que vous souhaitez appliquer et peuvent inclure des choses comme la taille de la police, la couleur et le padding. Les valeurs spécifient les paramètres spécifiques de la propriété, tels qu'une couleur ou une taille spécifique.</p>

<p>Pour lier un fichier CSS à un document HTML, vous pouvez utiliser la balise {'<link>'} dans la section {'<head>'} de votre document HTML.</p>

<p>Voici un exemple de comment lier un fichier CSS appelé "styles.css" à votre document HTML :</p>

<code>
  <p>{'<'}!<span className='blue'>DOCTYPE</span> <span className='blue1'>html</span>{'>'}</p>
  <p>{'<'}<span className='green'>html</span>{'>'}</p> 
  <p>{'<'}<span className='green'>head</span>{'>'}</p>
  <p>&nbsp;{'<'}<span className='green'>link</span> <span className='blue'>rel</span>=<span className='blue1'>"stylesheet"</span> <span className='blue'>type</span>=<span className='blue1'>"text/css"</span> <span className='blue'>href</span>=<span className='blue1'>"styles.css"</span>{'>'}</p>
  <p>{'</'}<span className='green'>head</span>{'>'}</p>
  <p>{'<'}<span className='green'>body</span>{'>'}</p>
  <p>&nbsp;{'<!-- votre contenu HTML ici -->'}</p>
  <p>{'</'}<span className='green'>body</span>{'>'}</p>
  <p>{'</'}<span className='green'>html</span>{'>'}</p>
</code>

<p>Voici un exemple de code CSS :</p>

<code>
  <p>{'h1 {'}</p>
  <p><span className='blue'>color</span>: <span className='blue1'>red</span>;</p>
  <p><span className='blue'>font-size</span>: <span className='blue1'>36px</span>; </p>
  <p><span className='blue'>text-align</span>: <span className='blue1'>center</span>; </p>
  <p>{'}'}</p>
  <p>{'p {'}</p>
  <p><span className='blue'>color</span>: <span className='blue1'>blue</span>; </p>
  <p> <span className='blue'>font-size</span>: <span className='blue1'>16px</span>;</p>
  <p><span className='blue'>line-height</span>: <span className='blue1'>1.5</span>;</p>
  <p>{'}'}</p>
</code>

<p>Dans ce code, nous avons deux sélecteurs <b>(h1 et p)</b> et plusieurs propriétés et valeurs appliquées à chacun. Le sélecteur <b>h1</b> applique une couleur rouge, une taille de police de 36px et un alignement de texte centré à tous les éléments <b>h1</b> sur la page. Le sélecteur <b>p</b> applique une couleur bleue, une taille de police de 16px et une hauteur de ligne de 1.5 à tous les éléments <b>p</b> sur la page.</p>

<p>Le CSS peut être appliqué aux documents HTML de plusieurs façons, notamment en ligne, intégré et externes. Les styles en ligne sont appliqués directement à l'élément HTML à l'aide de l'attribut <b>style</b>. Les styles intégrés sont placés dans la section <b>head</b> du document HTML à l'aide de la balise style. Les feuilles de style externes sont stockées dans des fichiers CSS séparés et liées au document HTML à l'aide de la balise <b>link</b>.</p>
    
<b><p>* Texte écrit avec l'aide d'un traducteur. Si vous trouvez une erreur, veuillez nous en informer *</p></b>
    <div className='ads-container'>  
  {/*  реклама  */}
</div>  
</div>
  )
}

export default FrHtml_3;