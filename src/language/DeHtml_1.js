import React from 'react';

function DeHtml_1() {
  return (
    <div>
      <div className='ad-container'>  
          {/*  реклама  */}
        </div> 

        <h1>HTML</h1>

<p>HTML, was für HyperText Markup Language steht, ist eine Auszeichnungssprache, die verwendet wird, um Inhalte im Web zu erstellen und zu strukturieren. Es bildet das Rückgrat jeder Website und dient als Bausteine von Webseiten. HTML ist eine deklarative Sprache, was bedeutet, dass sie verwendet wird, um den Inhalt und die Struktur einer Webseite zu beschreiben, aber nicht unbedingt ihr Erscheinungsbild.</p>

<p>HTML wurde von Tim Berners-Lee Anfang der 1990er Jahre während seiner Arbeit am CERN, der Europäischen Organisation für Kernforschung, erstellt. Berners-Lee suchte nach einer Möglichkeit, Informationen unter Forschern zu teilen und zu organisieren, und HTML war die Lösung, die er entwickelte. HTML wurde als eine einfache Sprache konzipiert, die von jedermann, unabhängig von seinem technischen Hintergrund, leicht verstanden und verwendet werden kann.</p>

<p>HTML besteht aus einer Reihe von Elementen, die durch Tags dargestellt werden. Tags sind in spitzen Klammern eingeschlossen und dienen dazu, die Struktur und den Inhalt einer Webseite zu definieren. Zum Beispiel wird das {'<head>'}-Tag verwendet, um den Kopfbereich einer Webseite zu definieren, der in der Regel Informationen wie den Titel der Seite und Links zu externen Stylesheets und Skripten enthält. Das {'<body>'}-Tag wird verwendet, um den Hauptinhalt einer Webseite zu definieren.</p>

<p>HTML ist eine sich ständig weiterentwickelnde Sprache, bei der regelmäßig neue Versionen veröffentlicht werden. Die aktuelle Version von HTML ist HTML5, die 2014 veröffentlicht wurde. HTML5 brachte viele neue Funktionen und Möglichkeiten mit sich, wie z.B. Video- und Audio-Tags, Canvas-Elemente zum Zeichnen von Grafiken und semantische Tags für eine bessere Zugänglichkeit und SEO.</p>

<p>Zusammenfassend ist HTML eine Auszeichnungssprache, die verwendet wird, um Inhalte im Web zu erstellen und zu strukturieren. Sie wurde Anfang der 1990er Jahre von Tim Berners-Lee erstellt und bildet das Rückgrat jeder Website. HTML besteht aus einer Reihe von Elementen, die durch Tags dargestellt werden, und es handelt sich um eine sich ständig weiterentwickelnde Sprache, bei der regelmäßig neue Versionen veröffentlicht werden.</p>

<p>1. Einfache Webseite mit Titel und Absatz:</p>

<code>
   <p>{'<'}!<span className='blue'>DOCTYPE</span> <span className='blue1'>html</span>{'>'}</p>
   <p>{'<'}<span className='green'>html</span>{'>'}</p> 
   <p>{'<'}<span className='green'>head</span>{'>'}</p>
   <p>&nbsp;{'<'}<span className='green'>title</span>{'>'}Meine Webseite{'</'}<span className='green'>title</span>{'>'}</p>
   <p>{'</'}<span className='green'>head</span>{'>'}</p>
   <p>{'<'}<span className='green'>body</span>{'>'}</p>
   <p>&nbsp;{'<'}<span className='green'>h1</span>{'>'}Willkommen auf meiner Webseite{'</'}<span className='green'>h1</span>{'>'}</p>
   <p>&nbsp;{'<'}<span className='green'>p</span>{'>'}Dies ist meine erste Webseite.{'</'}<span className='green'>p</span>{'>'}</p>
   <p>{'</'}<span className='green'>body</span>{'>'}</p>
   <p>{'</'}<span className='green'>html</span>{'>'}</p>
</code>

<p>Dies ist ein Beispiel für eine einfache Webseite, die aus einem Titel und einem Absatz besteht. Der Titel wird durch das "title"-Tag und der Absatz durch das "p"-Tag dargestellt. Der Seitentitel wird in der Titelleiste des Browsers und in den Suchergebnissen angezeigt.</p>

<p>2. Bild mit Alternativtext und Link zu einer anderen Seite:</p>
  
  <code>
    <p>{'<'}!<span className='blue'>DOCTYPE</span> <span className='blue1'>html</span>{'>'}</p>
    
    <p>{'<'}<span className='green'>html</span>{'>'}</p> 
   
    <p>{'<'}<span className='green'>head</span>{'>'}</p>  
   
    <p>&nbsp;{'<'}<span className='green'>title</span>{'>'}Meine Webseite{'</'}<span className='green'>title</span>{'>'}</p> 
   
    <p>{'</'}<span className='green'>head</span>{'>'}</p> 
   
    <p>{'<'}<span className='green'>body</span>{'>'}</p> 
   
    <p>&nbsp;{'<'}<span className='green'>h1</span>{'>'}Willkommen auf meiner Webseite{'</'}<span className='green'>h1</span>{'>'}</p>
   
    <p>&nbsp;{'<'}<span className='green'>p</span>{'>'}Dies ist ein Bild einer Katze:{'</'}<span className='green'>p</span>{'>'}</p>
   
    <p>&nbsp;{'<'}<span className='green'>img</span> <span className='blue'>src</span>=<span className='blue1'>"katze.jpg"</span> <span className='blue'>alt</span>=<span className='blue1'>"Eine süße Katze"</span>{'>'}</p> 

    <p>&nbsp;{'<'}<span className='green'>p</span>{'>'}Klicken Sie {'<'}<span className='green'>a</span> <span className='blue'>href</span>=<span className='blue1'>"http://www.google.com"</span>{'>'}hier{'</'}<span className='green'>a</span>{'>'} um zu Google zu gelangen.{'</'}<span className='green'>p</span>{'>'}</p> 

    <p>{'</'}<span className='green'>body</span>{'>'}</p> 

    <p>{'</'}<span className='green'>html</span>{'>'}</p>
  </code>

 <p>Dieses Beispiel enthält ein Bild einer Katze, dargestellt durch das "img"-Tag, mit Alternativtext, der angezeigt wird, falls das Bild nicht geladen werden kann. Der Link zu Google wird durch das "a"-Tag mit dem "href"-Attribut dargestellt, das auf die URL der Zielseite verweist.</p>
 
 <p>3. Formular zum Eingeben eines Namens und zum Senden von Daten an einen Server:</p>
  
  <code>
    <p>{'<'}!<span className='blue'>DOCTYPE</span> <span className='blue1'>html</span>{'>'}</p>
    
    <p>{'<'}<span className='green'>html</span>{'>'}</p>    

    <p>{'<'}<span className='green'>head</span>{'>'}</p>  

    <p>&nbsp;{'<'}<span className='green'>title</span>{'>'}Meine Webseite{'</'}<span className='green'>title</span>{'>'}</p>   

    <p>{'</'}<span className='green'>head</span>{'>'}</p>  

    <p>{'<'}<span className='green'>body</span>{'>'}</p> 

    <p>&nbsp;{'<'}<span className='green'>h1</span>{'>'}Willkommen auf meiner Webseite{'</'}<span className='green'>h1</span>{'>'}</p> 

    <p>{'<'}<span className='green'>form</span>{'>'}</p> 

    <p>&nbsp;{'<'}<span className='green'>label</span> <span className='blue'>for</span>=<span className='blue1'>"name"</span>{'>'}Geben Sie Ihren Namen ein:{'</'}<span className='green'>label</span>{'>'}</p>  

    <p>&nbsp;{'<'}<span className='green'>input</span> <span className='blue'>type</span>=<span className='blue1'>"text"</span> <span className='blue'>id</span>=<span className='blue1'>"name"</span> <span className='blue'>name</span>=<span className='blue1'>"name"</span>{'><'}<span className='green'>br</span>{'><'}<span className='green'>br</span>{'>'}</p>  

    <p>&nbsp;{'<'}<span className='green'>input</span> <span className='blue'>type</span>=<span className='blue1'>"submit"</span> <span className='blue'>value</span>=<span className='blue1'>"Absenden"</span>{'>'}</p>  

    <p>{'</'}<span className='green'>form</span>{'>'}</p>  

    <p>{'</'}<span className='green'>body</span>{'>'}</p>   

    <p>{'</'}<span className='green'>html</span>{'>'}</p>   
 </code>
    
 <p>Dieses Beispiel zeigt ein Formular mit einem Texteingabefeld, in das der Benutzer seinen Namen eingeben kann. Wenn das Formular abgesendet wird, werden die Daten an einen Server zur Verarbeitung gesendet. Das "label"-Tag liefert einen Textlabel für das Eingabefeld, und das "input"-Tag wird verwendet, um das Eingabefeld und die Schaltfläche zum Absenden zu erstellen.</p> 

 <p>4. Geordnete Liste von Elementen:</p>

 <code>
    <p>{'<'}!<span className='blue'>DOCTYPE</span> <span className='blue1'>html</span>{'>'}</p>
    
    <p>{'<'}<span className='green'>html</span>{'>'}</p> 

    <p>{'<'}<span className='green'>head</span>{'>'}</p>

    <p>&nbsp;{'<'}<span className='green'>title</span>{'>'}Meine Webseite{'</'}<span className='green'>title</span>{'>'}</p>

    <p>{'</'}<span className='green'>head</span>{'>'}</p> 

    <p>{'<'}<span className='green'>body</span>{'>'}</p> 

    <p>&nbsp;{'<'}<span className='green'>h1</span>{'>'}Willkommen auf meiner Webseite{'</'}<span className='green'>h1</span>{'>'}</p> 

    <p>&nbsp;{'<'}<span className='green'>h2</span>{'>'}Meine Lieblingsgerichte:{'</'}<span className='green'>h2</span>{'>'}</p> 

    <p>{'<'}<span className='green'>ol</span>{'>'}</p>

    <p>&nbsp;{'<'}<span className='green'>li</span>{'>'}Pizza{'</'}<span className='green'>li</span>{'>'}</p>

    <p>&nbsp;{'<'}<span className='green'>li</span>{'>'}Burger{'</'}<span className='green'>li</span>{'>'}</p>

    <p>&nbsp;{'<'}<span className='green'>li</span>{'>'}Eiscreme{'</'}<span className='green'>li</span>{'>'}</p>

    <p>{'</'}<span className='green'>ol</span>{'>'}</p> 

    <p>{'</'}<span className='green'>body</span>{'>'}</p> 

    <p>{'</'}<span className='green'>html</span>{'>'}</p>
</code>

  <p>Dieses Beispiel zeigt eine geordnete Liste von Elementen, die durch das "ol"-Tag dargestellt werden, wobei jedes Element durch das "li"-Tag dargestellt wird. Die Nummern für die Liste werden automatisch vom Browser generiert.</p>
 
  <p>5. Ungeordnete Liste von Elementen:</p>

<code>
  <p>{'<'}!<span className='blue'>DOCTYPE</span> <span className='blue1'>html</span>{'>'}</p>
  <p>{'<'}<span className='green'>html</span>{'>'}</p>
  <p>{'<'}<span className='green'>head</span>{'>'}</p>
  <p>&nbsp;{'<'}<span className='green'>title</span>{'>'}Meine Webseite{'</'}<span className='green'>title</span>{'>'}</p>
  <p>{'</'}<span className='green'>head</span>{'>'}</p>
  <p>{'<'}<span className='green'>body</span>{'>'}</p>
  <p>&nbsp;{'<'}<span className='green'>h1</span>{'>'}Willkommen auf meiner Webseite{'</'}<span className='green'>h1</span>{'>'}</p> 
  <p>&nbsp;{'<'}<span className='green'>h2</span>{'>'}Meine Lieblingsfilme:{'</'}<span className='green'>h2</span>{'>'}</p> 
  <p>{'<'}<span className='green'>ul</span>{'>'}</p>
  <p>&nbsp;{'<'}<span className='green'>li</span>{'>'}Die Verurteilten{'</'}<span className='green'>li</span>{'>'}</p>
  <p>&nbsp;{'<'}<span className='green'>li</span>{'>'}Der Pate{'</'}<span className='green'>li</span>{'>'}</p>
  <p>&nbsp;{'<'}<span className='green'>li</span>{'>'}The Dark Knight{'</'}<span className='green'>li</span>{'>'}</p>
  <p>{'</'}<span className='green'>ul</span>{'>'}</p> 
  <p>{'</'}<span className='green'>body</span>{'>'}</p>
  <p>{'</'}<span className='green'>html</span>{'>'}</p> 
</code>

<p>Dieses Beispiel zeigt eine ungeordnete Liste von Elementen, die durch das "ul"-Tag dargestellt werden, wobei jedes Element durch das "li"-Tag dargestellt wird. Die Listenelemente werden standardmäßig mit Aufzählungspunkten angezeigt.</p> 

<p>Um ihr Verständnis von HTML weiter zu vertiefen, können die Schüler auf zusätzliche Ressourcen wie die Dokumentationen von <b>MDN Web Docs</b> oder <b>W3Schools</b> verwiesen werden.</p> 

<p>Um einen Link zu MDN Web Docs auf Ihrer Website hinzuzufügen, verwenden Sie den folgenden HTML-Code:</p> 

<p><a href="https://developer.mozilla.org/en-US/docs/Web/HTML "target='_blank'> <b> &#x1F44D; MDN Web Docs</b></a></p> 

<p>Um einen Link zu W3Schools auf Ihrer Website hinzuzufügen, verwenden Sie den folgenden HTML-Code:</p>  

<p><a href="https://www.w3schools.com/html/" target='_blank' > <b>&#x1F44D; W3Schools</b></a></p>

<p>Sowohl MDN Web Docs als auch W3Schools bieten umfassende und detaillierte Dokumentationen zu HTML und verwandten Technologien sowie interaktive Tutorials und Beispiele. Die Schüler können diese Ressourcen nutzen, um ihr Wissen über HTML zu vertiefen und ihre Webentwicklungsfähigkeiten zu verbessern.</p>  
    

<b><p>* Text geschrieben mit Hilfe eines Übersetzers. Wenn Sie einen Fehler finden, informieren Sie uns bitte *</p></b>
    <div className='ads-container'>  
  {/*  реклама  */}
</div>
    </div>
  )
}

export default DeHtml_1;