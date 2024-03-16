import React from 'react';

function FrEs5_8() {
  return (
    <div>
      <div className='ad-container'>  
          {/*  реклама  */}
        </div>
          <h4>Objet Date</h4>
  
  <p>En JavaScript, l'objet Date est utilisé pour travailler avec les dates et les heures. Il vous permet de créer, de manipuler et de formater des dates et des heures de différentes manières. L'objet Date représente un instant précis dans le temps et est initialisé par défaut avec la date et l'heure actuelles.</p>

  <p>Voici quelques exemples d'utilisation de l'objet Date en JavaScript :</p>
  
  <p>1. Créer un objet Date avec une date et une heure spécifiques :</p>

  <code>
       <p><span className='blueviole'>var</span> <span className='blue'>date</span> = <span className='blueviole'>new</span> Date(<span className='blue'>2022, 0, 1, 12, 0, 0</span>);</p>

       <p>{'console.log(date);'} <span className='green'>// Sam 01 janv. 2022 12:00:00 GMT+0200 (heure d'Europe de l'Est)</span></p>
  </code>

<p>Dans cet exemple, un nouvel objet Date est créé avec l'année spécifiée (2022), le mois (0 pour janvier), le jour (1), l'heure (12), la minute (0) et la seconde (0). La sortie affiche la date et l'heure résultantes sous une forme lisible par l'homme.</p>

<p>2. Créer un objet Date avec la date et l'heure actuelles :</p>

<code>
  <p><span className='blueviole'>var</span> <span className='blue'>date</span> = <span className='blueviole'>new</span> Date(); </p>
  <p>{'console.log(date);'}<span className='green'>// Sam 27 mars 2023 13:28:17 GMT+0200 (heure d'Europe de l'Est)</span></p>
</code>

<p>Dans cet exemple, un nouvel objet Date est créé avec la date et l'heure actuelles. La sortie affiche la date et l'heure résultantes sous une forme lisible par l'homme.</p>

<p>3. Obtenir l'année, le mois et le jour actuels :</p>

<code>
  <p><span className='blueviole'>var</span> <span className='blue'>date</span> = <span className='blueviole'>new</span> Date();</p>
  <p><span className='blueviole'>var</span> <span className='blue'>année</span> = date.getFullYear();</p>
  <p><span className='blueviole'>var</span> <span className='blue'>mois</span> = date.getMonth();</p>
  <p><span className='blueviole'>var</span> <span className='blue'>jour</span> = date.getDate();</p>
  <p>{'console.log'}(année + <span className='red'>"-"</span> + mois + <span className='red'>"-"</span> + jour); <span className='green'></span></p>
</code>

<p>Dans cet exemple, un nouvel objet Date est créé avec la date et l'heure actuelles. Les méthodes getFullYear(), getMonth() et getDate() sont ensuite utilisées pour extraire l'année, le mois (où 0 représente janvier) et le jour de l'objet Date. La sortie affiche la date résultante sous forme de chaîne formatée.</p>

<p> 4.  Convertir une date en chaîne :</p>

<code>
  <p><span className='blueviole'>var</span> <span className='blue'>date</span> = <span className='blueviole'>new</span> Date();</p>
  <p><span className='blueviole'>var</span> <span className='blue'>dateString</span> = date.toDateString(); </p>
  <p>{'console.log'}(dateString); <span className='green'>// Sam 30 mai 2023</span></p>
</code>

<p>Dans cet exemple, un nouvel objet Date est créé avec la date et l'heure actuelles. La méthode toDateString() est ensuite utilisée pour convertir la date en une chaîne lisible par l'homme. La sortie affiche la représentation sous forme de chaîne de la date résultante</p>

<p>Il s'agit juste de quelques exemples des nombreuses façons d'utiliser l'objet Date en JavaScript pour travailler avec les dates et les heures.</p>

<p><b>Objet Erreur</b></p>

<p>En JavaScript, un objet Error est utilisé pour représenter les erreurs d'exécution. Lorsqu'une erreur se produit dans un programme, JavaScript génère un objet Error et le lance. L'objet Error contient des informations sur l'erreur telles que le message d'erreur et le nom de l'erreur.</p>

<p>Voici un exemple d'utilisation d'un bloc try-catch pour attraper une ReferenceError :</p>

<code>
  <p><span className='blueviole'>try </span>{'{'}</p>
  <p>{'console.log(variable);'}</p>
  <p>{'}'} <span className='blueviole'>catch</span>(<span className='blue'>err</span>) {'{'}</p>
  <p>{'console.log(err);'} <span className='green'>//ReferenceError: variable is not defined</span></p>
  <p>{'console.log(err.name);'} <span className='green'>//ReferenceError</span></p>
  <p>{' console.log(err.message);'} <span className='green'>//variable is not defined</span></p>
  <p>{'}'}</p>
</code>

<p>Dans cet exemple, le bloc try tente de journaliser une variable qui n'a pas été définie, ce qui entraîne une ReferenceError. Le bloc catch attrape l'erreur et journalise l'objet d'erreur ainsi que ses propriétés name et message.</p>

<p>Voici un autre exemple d'utilisation d'un bloc try-catch pour lancer un objet Error personnalisé :</p>

<code>
  <p><span className='blueviole'>var</span> <span className='blue'>num1</span> = <span className='blue'>10</span>;</p>
  <p><span className='blueviole'>var</span> <span className='blue'>num2</span> = <span className='blue'>0</span>; </p>
  <p><span className='blueviole'>try</span> {'{'}</p>
  <p><span className='blueviole'>if</span> (num2 == <span className='blue'>0</span>) {'{'}</p>
  <p><span className='blueviole'>throw new</span> Error(<span className='red'>"Impossible de diviser par zéro."</span>);</p>
  <p>{'}'}</p>
  <p>{'console.log(num1 / num2);'}</p>
  <p>{'}'} <span className='blueviole'>catch</span> (<span className='blue'>err</span>) {'{'}</p>
  <p>{' console.log'}(err.name, <span className='red'>" : "</span>, err.message) ; </p>
  <p>{'}'}</p>
</code>

<p>Dans cet exemple, le bloc try tente de diviser num1 par num2. Si num2 est zéro, un nouvel objet Error est lancé avec un message d'erreur personnalisé. Le bloc catch attrape l'erreur et journalise l'objet d'erreur ainsi que ses propriétés name et message.</p>

<p>L'utilisation des objets Error et des blocs try-catch est une partie importante du traitement des erreurs d'exécution dans les programmes JavaScript. Cela permet aux développeurs de gérer les erreurs de manière élégante et de fournir des retours utiles aux utilisateurs.</p>

<b><p>* Texte écrit avec l'aide d'un traducteur. Si vous trouvez une erreur, veuillez nous en informer *</p></b>
    <div className='ads-container'>  
  {/*  реклама  */}
  </div>
    </div>
  )
}

export default FrEs5_8;