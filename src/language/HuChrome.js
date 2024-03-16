import React from 'react';

function HuChrome() {
  return (
    <div>
       <div className='ad-container'>  
          {/*  реклама  */}
        </div> 

        <h1>Hogyan telepítsük és frissítsük a Google Chrome-ot Ubuntu rendszeren</h1>

<p>A Google Chrome az egyik legnépszerűbb böngésző, gyors és megbízható internetelérést biztosítva. Ebben a cikkben áttekintjük a Google Chrome telepítésének és frissítésének lépéseit az Ubuntu operációs rendszeren.</p>

{/* 1. lépés: Nyissa meg a terminált */}

<h2>1. lépés: Nyissa meg a terminált</h2>

<p>Mielőtt elkezdenénk, nyissa meg a terminált az Ubuntu számítógépén a Ctrl + Alt + T billentyűk egyidejű lenyomásával, vagy a rendszermenűben való kereséssel és a "Terminal" gépelésével.</p>
{/* 2. lépés: Csomaglista frissítése */}

<h2>2. lépés: Csomaglista frissítése</h2>

<p>Írja be a következő parancsot a rendszer csomaglistájának frissítéséhez:</p>

<code>sudo apt update</code>

<p>Nyomja meg az Enter billentyűt, és adja meg az adminisztrátori jelszót, ha kérdezik.</p>
{/* 3. lépés: Google Chrome telepítése */}

<h2>3. lépés: Google Chrome telepítése</h2>

<p>A Google Chrome telepítéséhez használja a következő parancsot:</p>

<code>sudo apt install google-chrome-stable</code>

<p>Amikor felkérik, nyomja meg az Y (Igen) billentyűt a telepítés folytatásához. A Google Chrome letöltődik és települ a számítógépére.</p>
{/* 4. lépés: Indítsa el a Google Chrome-ot */}

<h2>4. lépés: Indítsa el a Google Chrome-ot</h2>

<p>A telepítés befejezése után indítsa el a Google Chrome-ot. Ezt megteheti a rendszermenüben való kereséssel vagy a következő parancs beírásával a terminálban:</p>

<code>google-chrome-stable</code>
{/* 5. lépés: Google Chrome frissítése */}

<h2>5. lépés: Google Chrome frissítése</h2>

<p>A Google Chrome frissítéséhez a legújabb verzióra használja a következő parancsot a terminálban:</p>

<code>sudo apt-get --only-upgrade install google-chrome-stable</code>

<p>Ez a parancs frissíti a Google Chrome-ot a legfrissebb elérhető verzióra.</p>
{/* Összefoglalás */}

<h2>Összefoglalás</h2>

<p>Most már telepítette és frissítette a Google Chrome-ot az Ubuntu számítógépén. Élvezze a gyors és kényelmes webböngészést!</p>
    
    <b><p>* A szöveget fordító segítségével íródott. Ha hibát találsz, kérlek, jelezd nekünk *</p></b>
  
    <div className='ads-container'>  
  {/*  реклама  */}
    </div>
</div>
  )
}

export default HuChrome;