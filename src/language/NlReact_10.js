import React from 'react';

function NlReact_10() {
  return (
    <div>
      <div className='ad-container'>  
          {/*  реклама  */}
      </div>

      <h2>HTTP Fouten</h2>

           {/* Informatieve antwoorden (100 – 199) */}
      
           <h3>Informatieve antwoorden (100 – 199)</h3>
       <p>
         <strong>100 Doorgaan:</strong> De server heeft de verzoekheaders ontvangen en de client moet doorgaan met het verzenden van de verzoekbody (in het geval van een verzoek waarvoor een body moet worden verzonden; bijvoorbeeld een POST-verzoek).
       </p>
       <p>
         <strong>101 Schakel Protocollen:</strong> De verzoeker heeft de server gevraagd om van protocol te wisselen en de server heeft ingestemd dit te doen.
       </p>
       <p>
         <strong>102 Verwerking:</strong> De server heeft het verzoek ontvangen en verwerkt, maar er is nog geen antwoord beschikbaar.
       </p>
       <p>
         <strong>103 Vroege Aanwijzingen:</strong> Geeft aan de client aan dat de server waarschijnlijk een definitief antwoord zal sturen met de kopvelden die zijn opgenomen in het informatieve antwoord.
       </p>
      

     {/* Succesvolle antwoorden (200 – 299) */}
      
       <h3>Succesvolle antwoorden (200 – 299)</h3>
       <p>
         <strong>200 OK:</strong> Het verzoek is gelukt. De informatie die wordt teruggegeven met de reactie is afhankelijk van de methode die wordt gebruikt in het verzoek.
       </p>
       <p>
         <strong>201 Aangemaakt:</strong> Het verzoek is vervuld, wat heeft geleid tot de creatie van een nieuwe bron.
       </p>
       <p>
         <strong>202 Geaccepteerd:</strong> Het verzoek is geaccepteerd voor verwerking, maar de verwerking is nog niet voltooid.
       </p>
       <p>
         <strong>203 Niet-geautoriseerde Informatie:</strong> De server heeft het verzoek succesvol verwerkt, maar retourneert informatie die mogelijk van een andere bron afkomstig is.
       </p>
       <p>
         <strong>204 Geen Inhoud:</strong> De server heeft het verzoek succesvol verwerkt en retourneert geen inhoud.
       </p>
       <p>
         <strong>205 Inhoud Herstellen:</strong> De server heeft het verzoek succesvol verwerkt, maar retourneert geen inhoud. De client moet het documentweergave herstellen.
       </p>
       <p>
         <strong>206 Gedeeltelijke Inhoud:</strong> De server levert slechts een deel van de bron vanwege een bereikskop die door de client is verzonden.
       </p>
       <p>
         <strong>207 Multi-Status:</strong> Een Multi-Status-reactie geeft informatie weer over meerdere bronnen in situaties waarin meerdere statuscodes passend zouden kunnen zijn.
       </p>
      

     {/* Omleidingsberichten (300 – 399) */}
     
       <h3>Omleidingsberichten (300 – 399)</h3>
       <p>
         <strong>300 Meerdere Keuzes:</strong> De aangevraagde bron heeft meerdere keuzes, elk met verschillende eigenschappen en reacties.
       </p>
       <p>
         <strong>301 Permanent Verplaatst:</strong> De aangevraagde bron is permanent verplaatst naar een nieuwe URL, en toekomstige verwijzingen naar deze bron moeten een van de geretourneerde URL's gebruiken.
       </p>
       <p>
         <strong>302 Gevonden:</strong> De aangevraagde bron bevindt zich tijdelijk onder een andere URI.
       </p>
       <p>
         <strong>303 Zie Anders:</strong> Het antwoord op het verzoek kan worden gevonden onder een andere URI en moet worden opgehaald met een GET-methode op die bron.
       </p>
       <p>
         <strong>304 Niet Gewijzigd:</strong> Geeft aan dat de bron niet is gewijzigd sinds de versie gespecificeerd door de verzoekheaders If-Modified-Since of If-None-Match. In dat geval is er geen noodzaak om de bron opnieuw te verzenden omdat de client nog steeds een eerder gedownloade kopie heeft.
       </p>
       <p>
         <strong>305 Gebruik Proxy:</strong> De aangevraagde bron moet worden benaderd via de proxy die wordt gegeven door het veld Locatie.
       </p>
       <p>
         <strong>307 Tijdelijke Omleiding:</strong> De aangevraagde bron bevindt zich tijdelijk onder een andere URI.
       </p>
       <p>
         <strong>308 Permanente Omleiding:</strong> De aangevraagde bron is permanent verplaatst naar een andere URI, en de client moet alle verwijzingen naar deze nieuwe URI bijwerken.
       </p>
      

     {/* Clientfoutreacties (400 – 499) */}
      
       <h3>Clientfoutreacties (400 – 499)</h3>
       <p>
         <strong>400 Slecht Verzoek:</strong> De server kan het verzoek niet verwerken vanwege een clientfout (bijv. syntaxisfout, te grote omvang, ongeldige verzoekberichtopbouw of misleidende verzoekroutering).
       </p>
       <p>
         <strong>401 Niet Geautoriseerd:</strong> Vergelijkbaar met 403 Verboden, maar specifiek voor gebruik wanneer authenticatie vereist is en is mislukt of nog niet is verstrekt.
       </p>
       <p>
         <strong>402 Betaling Vereist:</strong> Voorbehouden voor toekomstig gebruik.
       </p>
       <p>
         <strong>403 Verboden:</strong> De client heeft geen toestemming om toegang te krijgen tot de aangevraagde bron.
       </p>
       <p>
         <strong>404 Niet Gevonden:</strong> De server kan de aangevraagde bron niet vinden.
       </p>
       <p>
         <strong>405 Methode Niet Toegestaan:</strong> De methode die is ontvangen in de verzoekregel, is bekend bij de oorspronkelijke server maar wordt niet ondersteund door de doelbron.
       </p>
       <p>
         <strong>406 Niet Acceptabel:</strong> De doelbron heeft geen huidige voorstelling die acceptabel zou zijn voor de gebruikersagent, volgens de proactieve onderhandelingskopvelden die zijn ontvangen in het verzoek.
       </p>
       <p>
         <strong>407 Proxy Authenticatie Vereist:</strong> De client moet zich eerst authenticeren bij de proxy.
       </p>
       <p>
         <strong>408 Verzoek Timeout:</strong> De client heeft geen verzoek geproduceerd binnen de tijd dat de server bereid was te wachten.
       </p>
       <p>
         <strong>409 Conflict:</strong> Het verzoek kon niet worden voltooid vanwege een conflict met de huidige status van de doelbron.
       </p>
       <p>
         <strong>410 Verdwenen:</strong> Geeft aan dat de doelbron niet langer beschikbaar is op de server en er geen doorstuuradres bekend is.
       </p>
       <p>
         <strong>411 Lengte Vereist:</strong> De server weigert het verzoek te accepteren zonder een gedefinieerde Content-Length.
       </p>
       <p>
         <strong>412 Voorwaarde Mislukt:</strong> Een of meer voorwaarden die in de verzoekkopvelden zijn gegeven, werden als onwaar geëvalueerd bij het testen op de server.
       </p>
       <p>
         <strong>413 Payload Te Groot:</strong> De server weigert een verzoek te verwerken omdat de verzoekpayload groter is dan de server bereid of in staat is te verwerken.
       </p>
       <p>
         <strong>414 URI Te Lang:</strong> De server weigert het verzoek te verwerken omdat de verzoek-doel-URI langer is dan de server bereid is te interpreteren.
       </p>
       <p>
         <strong>415 Niet-ondersteund Mediatype:</strong> De oorspronkelijke server weigert het verzoek te verwerken omdat het payload-formaat in een niet-ondersteund formaat is.
       </p>
       <p>
         <strong>416 Bereik Niet Bevredigend:</strong> De client heeft om een deel van het bestand gevraagd (byte serving), maar de server kan dat deel niet leveren.
       </p>
       <p>
         <strong>417 Verwachting Mislukt:</strong> De server kan niet voldoen aan de vereisten van het Verwachtingsverzoek-kopveld.
       </p>
       <p>
         <strong>418 Ik Ben een Theepot:</strong> Elke poging om koffie te zetten met een theepot moet resulteren in de foutcode "418 Ik ben een theepot".
       </p>
       <p>
         <strong>420 Verbeter Je Kalmte:</strong> Geretourneerd door de Twitter Zoek- en Trends API wanneer de client wordt beperkt in zijn gebruik.
       </p>
       <p>
         <strong>421 Verkeerd Gericht Verzoek:</strong> Het verzoek was gericht aan een server die niet in staat is om een reactie te produceren.
       </p>
       <p>
         <strong>422 Onverwerkbare Entiteit:</strong> Het verzoek was goed gevormd maar kon niet worden gevolgd vanwege semantische fouten.
       </p>
       <p>
         <strong>423 Vergrendeld:</strong> De bron die wordt benaderd, is vergrendeld.
       </p>
       <p>
         <strong>425 Te Vroeg:</strong> Geeft aan dat de server niet bereid is het risico te lopen een verzoek te verwerken dat mogelijk opnieuw wordt afgespeeld.
       </p>
       <p>
         <strong>426 Upgrade Vereist:</strong> De server weigert het verzoek uit te voeren met het huidige protocol maar is misschien bereid dit te doen nadat de client is geüpgraded naar een ander protocol.
       </p>
       <p>
         <strong>428 Voorwaarde Vereist:</strong> De oorspronkelijke server vereist dat het verzoek voorwaardelijk is.
       </p>
       <p>
         <strong>429 Te Veel Verzoeken:</strong> De gebruiker heeft te veel verzoeken in een bepaalde periode verzonden.
       </p>
      

     {/* Serverfoutreacties (500 – 599) */}
      
       <h3>Serverfoutreacties (500 – 599)</h3>
       <p>
         <strong>500 Interne Serverfout:</strong> Een generieke foutmelding, gegeven wanneer een onverwachte situatie werd aangetroffen en er geen specifieker bericht geschikt is. Dit is een zeer algemene fout die kan worden veroorzaakt door een breed scala aan problemen aan de serverzijde.
       </p>
       <p>
         <strong>501 Niet Geïmplementeerd:</strong> De server herkent het verzoeksmethode niet of heeft niet de mogelijkheid om het verzoek te vervullen.
       </p>
       <p>
         <strong>502 Slechte Gateway:</strong> De server ontving, terwijl deze fungeert als een gateway of proxy, een ongeldig antwoord van de upstream-server waartoe hij toegang had bij het proberen het verzoek te vervullen.
       </p>
       <p>
         <strong>503 Service Niet Beschikbaar:</strong> De server is momenteel niet in staat om het verzoek te verwerken vanwege een tijdelijke overbelasting of onderhoud van de server.
       </p>
       <p>
         <strong>504 Gateway Time-out:</strong> De server, terwijl deze fungeert als een gateway of proxy, ontving geen tijdige reactie van de upstream-server gespecificeerd door de URI of een andere hulpserver waartoe hij toegang nodig had om het verzoek te voltooien.
       </p>
       <p>
         <strong>505 HTTP Versie Niet Ondersteund:</strong> De server ondersteunt de hoofdversie van HTTP die werd gebruikt in het verzoekbericht niet of weigert deze te ondersteunen.
       </p>
       <p>
         <strong>506 Variant Onderhandelt Ook:</strong> De server heeft een interne configuratiefout: de gekozen variantbron is geconfigureerd om zelf deel te nemen aan transparante inhoudsonderhandeling en is daarom geen juist eindpunt in het onderhandelingsproces.
       </p>
       <p>
         <strong>507 Onvoldoende Opslagruimte:</strong> De server is niet in staat om de benodigde representatie op te slaan om het verzoek te voltooien.
       </p>
       <p>
         <strong>508 Lus Gedetecteerd:</strong> De server heeft een oneindige lus gedetecteerd tijdens het verwerken van het verzoek.
       </p>
       <p>
         <strong>510 Niet Uitgebreid:</strong> Verdere uitbreidingen van het verzoek zijn vereist voor de server om het te vervullen.
       </p>
       <p>
         <strong>511 Netwerk Authenticatie Vereist:</strong> De client moet zich authenticeren om netwerktoegang te krijgen.
       </p>

    <b><p>* Tekst geschreven met behulp van een vertaler. Als je een fout vindt, laat het ons dan weten *</p></b>
    
    <div className='ads-container'>  
      {/*  реклама  */}
    </div>
     </div>
  )
}

export default NlReact_10;