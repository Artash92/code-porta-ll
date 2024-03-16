import React from 'react';

function RoChrome() {
  return (
    <div>
      <div className='ad-container'>  
          {/*  реклама  */}
        </div>

     <h1>Cum se instalează și se actualizează Google Chrome pe Ubuntu</h1>
       
     <p>Google Chrome este unul dintre cele mai populare browsere web, oferind acces rapid și fiabil la internet. În acest articol, vom parcurge pașii pentru a instala și actualiza Google Chrome pe sistemul de operare Ubuntu.</p>
     
     <h2>Pasul 1: deschideți terminalul</h2>
       
     <p>Înainte de a începe, deschideți terminalul de pe computerul dumneavoastră Ubuntu apăsând Ctrl + Alt + T sau căutând în meniul de aplicații și tastând „Terminal”.</p>
     
     <h2>Pasul 2: Actualizați lista de pachete</h2>
       
     <p>Introduceți următoarea comandă pentru a actualiza lista de pachete a sistemului dvs.:</p>
       
       <code>sudo apt update</code>
     
       <p>Apăsați Enter și introduceți parola de administrator dacă vi se solicită.</p>
      
       <h2>Pasul 3: Instalați Google Chrome</h2>
      
       <p>Pentru a instala Google Chrome, utilizați următoarea comandă:</p>
      
       <code>sudo apt install google-chrome-stable</code>
     
       <p>Când vi se solicită, apăsați Y (Da) pentru a continua cu instalarea. Google Chrome va fi descărcat și instalat pe computerul dvs.</p>
       
       <h2>Pasul 4: lansați Google Chrome</h2>
       
       <p>După finalizarea instalării, lansați Google Chrome. Puteți face acest lucru căutând în meniul de aplicații sau introducând următoarea comandă în terminal:</p>
       
       <code>google-chrome-stable</code>
     
       <h2>Pasul 5: actualizați Google Chrome</h2>
       
       <p>Pentru a actualiza Google Chrome la cea mai recentă versiune, utilizați următoarea comandă în terminal:</p>
       
       <code>sudo apt-get --only-upgrade install google-chrome-stable</code>
     
       <p>Această comandă va actualiza Google Chrome la cea mai recentă versiune disponibilă.</p>
     
       
       <h2>Concluzie</h2>
       
       <p>Acum ați instalat și actualizat Google Chrome pe computerul Ubuntu. Bucurați-vă de navigarea rapidă și convenabilă!</p>

         <b><p>* Textul a fost scris cu ajutorul unui traducător. Dacă găsiți vreo greșeală, vă rugăm să ne anunțați *</p></b>
    <div className='ads-container'>  
  {/*  реклама  */}
</div> 
    </div>
  )
}

export default RoChrome;