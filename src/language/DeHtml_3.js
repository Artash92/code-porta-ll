import React from 'react';

function DeHtml_3() {
  return (
    <div>

<div className='ad-container'>  
          {/*  реклама  */}
        </div>

   <h1>Verständnis von Meta-Tags in HTML - Ein Leitfaden für Anfänger</h1>

<p>1. <b>charset:</b> Das Attribut "Zeichensatz" legt die Zeichenkodierung für das HTML-Dokument fest. Es ist wichtig sicherzustellen, dass die Codierung korrekt eingestellt ist, damit Sonderzeichen korrekt angezeigt werden.</p>

<p>Beispiel:</p>

<code><p>{'<'}<span className='green'>meta</span> <span className='blue'>charset</span>=<span className='blue1'>"UTF-8"</span>{'>'}</p></code>

<p>2. <b>Name:</b> Das Attribut "Name" wird verwendet, um den Typ der bereitgestellten Metadaten festzulegen, wie Schlüsselwörter, Beschreibung oder Autor.</p>

<p>Beispiel:</p>

<code><p>{'<'}<span className='green'>meta</span> <span className='blue'>name</span>=<span className='blue1'>"description"</span> <span className='blue'>content</span>=<span className='blue1'>"Dies ist eine Beschreibung meiner Webseite."</span>{'>'}</p></code>

<p>3. <b>Inhalt:</b> Das Attribut "Inhalt" wird verwendet, um den Wert der bereitgestellten Metadaten anzugeben.</p>

<p>Beispiel:</p>

<code><p>{'<'}<span className='green'>meta</span> <span className='blue'>name</span>=<span className='blue1'>"keywords"</span> <span className='blue'>content</span>=<span className='blue1'>"HTML, CSS, JavaScript"</span>{'>'}</p></code>

<p>4. <b>http-equiv:</b> Das Attribut "http-equiv" wird verwendet, um einen HTTP-Header für das HTML-Dokument zu definieren, wie z.B. "refresh" oder "content-type".</p>

<p>Beispiel:</p>

<code><p>{'<'}<span className='green'>meta</span> <span className='blue'>http-equiv</span>=<span className='blue1'>"refresh"</span> <span className='blue'>content</span>=<span className='blue1'>"5"</span>{'>'}</p></code>
  
<p>5. <b>Viewport:</b> Das Attribut "Viewport" wird verwendet, um das Layout und die Skalierung einer Webseite auf verschiedenen Geräten, wie z.B. Mobiltelefonen oder Tablets, zu steuern.</p>

<p>Beispiel:</p>

<code><p>{'<'}<span className='green'>meta</span> <span className='blue'>name</span>=<span className='blue1'>"viewport"</span> <span className='blue'>content</span>=<span className='blue1'>"width=device-width, initial-scale=1.0"</span>{'>'}</p></code>

<h2>Wie man Farben in HTML verwendet: Ein Leitfaden für Anfänger</h2>

<p>Farben in HTML können mit verschiedenen Methoden definiert werden, einschließlich Farbnamen, hexadezimalen Werten, RGB-Werten und HSL-Werten.</p>

<b>1. Farbnamen:</b>

<p>HTML bietet eine Reihe vordefinierter Farbnamen, die verwendet werden können, um die Farbe eines Elements anzugeben. Einige Beispiele für Farbnamen sind "rot", "grün", "blau", "gelb", "lila" und "schwarz".</p>

<b>2. Hexadezimale Werte:</b>

<p>Ein hexadezimaler Farbwert ist ein sechsstelliger Code, der eine Farbe darstellt. Die ersten zwei Stellen repräsentieren die Menge an Rot in der Farbe, die nächsten zwei Stellen repräsentieren die Menge an Grün in der Farbe und die letzten beiden Stellen repräsentieren die Menge an Blau in der Farbe. Zum Beispiel repräsentiert #FF0000 reines Rot, #00FF00 reines Grün und #0000FF reines Blau.</p>

<b>3. RGB-Werte:</b>

<p>Ein RGB-Farbwert ist eine Gruppe von drei Zahlen, die die Menge an Rot, Grün und Blau in einer Farbe darstellen. Jeder Wert reicht von 0 bis 255. Zum Beispiel repräsentiert rgb(255, 0, 0) reines Rot, rgb(0, 255, 0) reines Grün und rgb(0, 0, 255) reines Blau.</p>

<b>4. HSL-Werte:</b>

<p>Ein HSL-Farbwert ist eine Gruppe von drei Zahlen, die den Farbton, die Sättigung und die Helligkeit einer Farbe darstellen. Der Farbton ist ein Grad auf dem Farbkreis (von 0 bis 360), die Sättigung ist ein Prozentwert (von 0% bis 100%) und die Helligkeit ist ebenfalls ein Prozentwert (von 0% bis 100%). Zum Beispiel repräsentiert hsl(0, 100%, 50%) reines Rot, hsl(120, 100%, 50%) reines Grün und hsl(240, 100%, 50%) reines Blau.</p>

<h2>Grundlagen von CSS für Anfänger: Eine Einführung in Cascading Style Sheets</h2>

<p>CSS steht für Cascading Style Sheets und ist eine Sprache, die zur Gestaltung von HTML-Dokumenten verwendet wird. CSS ermöglicht es Ihnen, die Farben, Schriften, das Layout und andere Aspekte Ihrer Webseite zu ändern. Es funktioniert, indem HTML-Elemente ausgewählt und Stile auf sie angewendet werden.</p>

<p>CSS-Stile werden mit Selektoren, Eigenschaften und Werten erstellt. Selektoren zielen auf bestimmte HTML-Elemente ab und können verwendet werden, um Stile auf mehrere Elemente gleichzeitig anzuwenden. Eigenschaften definieren, welche Stile Sie anwenden möchten, und können Dinge wie Schriftgröße, Farbe und Abstand enthalten. Werte geben die spezifischen Einstellungen für die Eigenschaft an, wie z.B. eine bestimmte Farbe oder Größe.</p>

<p>Um eine CSS-Datei mit einem HTML-Dokument zu verknüpfen, können Sie das {'<link>'}-Tag im {'<head>'}-Bereich Ihres HTML-Dokuments verwenden.</p>

<p>Hier ist ein Beispiel, wie Sie eine CSS-Datei namens "styles.css" mit Ihrem HTML-Dokument verknüpfen können:</p>

<code>
  <p>{'<'}!<span className='blue'>DOCTYPE</span> <span className='blue1'>html</span>{'>'}</p>

  <p>{'<'}<span className='green'>html</span>{'>'}</p> 

  <p>{'<'}<span className='green'>head</span>{'>'}</p>

  <p>&nbsp;{'<'}<span className='green'>link</span> <span className='blue'>rel</span>=<span className='blue1'>"stylesheet"</span> <span className='blue'>type</span>=<span className='blue1'>"text/css"</span> <span className='blue'>href</span>=<span className='blue1'>"styles.css"</span>{'>'}</p>

  <p>{'</'}<span className='green'>head</span>{'>'}</p>

  <p>{'<'}<span className='green'>body</span>{'>'}</p>

  <p>&nbsp;{'<!-- Ihr HTML-Inhalt hier -->'}</p>

  <p>{'</'}<span className='green'>body</span>{'>'}</p>

  <p>{'</'}<span className='green'>html</span>{'>'}</p>
</code>


    
<p>Hier ist ein Beispiel für CSS-Code:</p>

<code>
  <p>{'h1 {'}</p>

  <p><span className='blue'>color</span>: <span className='blue1'>rot</span>;</p>

  <p><span className='blue'>font-size</span>: <span className='blue1'>36px</span>; </p>

  <p><span className='blue'>text-align</span>: <span className='blue1'>zentriert</span>; </p>

  <p>{'}'}</p>

  <p>{'p {'}</p>

  <p><span className='blue'>color</span>: <span className='blue1'>blau</span>; </p>

  <p> <span className='blue'>font-size</span>: <span className='blue1'>16px</span>;</p>

  <p><span className='blue'>line-height</span>: <span className='blue1'>1.5</span>;</p>

  <p>{'}'}</p>
</code>

<p>In diesem Code haben wir zwei Selektoren <b>(h1 und p)</b> und mehrere Eigenschaften und Werte, die auf jeden angewendet werden. Der <b>h1</b>-Selektor wendet eine rote Farbe, eine Schriftgröße von 36px und eine zentrierte Textausrichtung auf alle <b>h1</b>-Elemente auf der Seite an. Der <b>p</b>-Selektor wendet eine blaue Farbe, eine Schriftgröße von 16px und eine Zeilenhöhe von 1,5 auf alle <b>p</b>-Elemente auf der Seite an.</p>

<p>CSS kann auf HTML-Dokumente auf verschiedene Weisen angewendet werden, einschließlich Inline-, eingebetteten und externen Stylesheets. Inline-Styles werden direkt auf das HTML-Element mit dem <b>style</b>-Attribut angewendet. Eingebettete Styles werden im <b>head</b>-Bereich des HTML-Dokuments mit dem style-Tag platziert. Externe Stylesheets werden in separaten CSS-Dateien gespeichert und mit dem HTML-Dokument mit dem <b>link</b>-Tag verknüpft.</p>

<b><p>* Text geschrieben mit Hilfe eines Übersetzers. Wenn Sie einen Fehler finden, informieren Sie uns bitte *</p></b>
    <div className='ads-container'>  
  {/*  реклама  */}
</div>

    </div>
  )
}

export default DeHtml_3;