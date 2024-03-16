import React from 'react';

function AmChrome() {
  return (
    <div>
      <div className='ad-container'>  
        {/*  реклама  */}
      </div>
      
    <h1>Ինչպես տեղադրել և թարմացնել Google Chrome-ը Ubuntu-ում</h1>
    
    <p>Google Chrome-ը ամենահայտնի վեբ բրաուզերներից մեկն է, որն ապահովում է արագ և հուսալի ինտերնետ հասանելիություն: Այս հոդվածում մենք կբացահայտենք Ubuntu օպերացիոն համակարգում Google Chrome-ի տեղադրման և թարմացման քայլերը:</p>
  
    {/* Step 1: Open the Terminal */}
    <h2>Քայլ 1. Բացեք տերմինալը</h2>
    
    <p>Նախքան սկսելը, բացեք տերմինալ ձեր Ubuntu համակարգչի վրա: Դուք կարող եք դա անել՝ սեղմելով Ctrl + Alt + T կամ որոնել Applications ցանկում և մուտքագրել «Terminal»:</p>
  
    {/* Step 2: Update Package List */}
    <h2>Քայլ 2. Թարմացրեք փաթեթների ցանկը</h2>
    
    <p>Մուտքագրեք հետևյալ հրամանը՝ ձեր համակարգի փաթեթների ցանկը թարմացնելու համար.</p>
    
    <code>sudo apt update</code>
  
    <p>Սեղմեք Enter և մուտքագրեք ադմինիստրատորի գաղտնաբառը, եթե պահանջվի:</p>
  
    {/* Step 3: Install Google Chrome */}
    <h2>Քայլ 3. Տեղադրեք Google Chrome-ը</h2>
    
    <p>Google Chrome-ը տեղադրելու համար օգտագործեք հետևյալ հրամանը.</p>
    
    <code>sudo apt install google-chrome-stable</code>
  
    <p>Հաստատելու և տեղադրումը շարունակելու համար, սեղմեք Y (Այո)՝ : Google Chrome-ը կներբեռնվի և կտեղադրվի ձեր համակարգչում:</p>
  
    {/* Step 4: Launch Google Chrome */}
    <h2>Քայլ 4. Գործարկեք Google Chrome-ը</h2>
    
    <p>Տեղադրման ավարտից հետո գործարկեք Google Chrome-ը: Դա կարելի է անել՝ փնտրելով հավելվածների ցանկում կամ տերմինալում մուտքագրելով հետևյալ հրամանը.</p>
    
    <code>google-chrome-stable</code>
  
    {/* Step 5: Update Google Chrome */}
    <h2>Քայլ 5. Թարմացրեք Google Chrome-ը</h2>
    
    <p>Google Chrome-ը վերջին տարբերակին թարմացնելու համար օգտագործեք հետևյալ հրամանը տերմինալում.</p>
    
    <code>sudo apt-get --only-upgrade install google-chrome-stable</code>
  
    <p>Այս հրամանը կթարմացնի Google Chrome-ը հասանելի կլինի վերջին տարբերակը:</p>
  
    {/* Conclusion */}
    <h2>Եզրակացություն</h2>
    
    <p>Այժմ դուք ունեք Google Chrome-ը տեղադրված և թարմացված ձեր Ubuntu համակարգչում: Վայելեք արագ և հարմար ինտերնետ դիտում ձեր զննարկիչում:</p>
  
    <b><p>* Տեքստը գրված է թարգմանչի օգնությամբ։ Եթե սխալ եք հայտնաբերել, խնդրում ենք մեզ տեղյակ պահել *</p></b>
    
    <div className='ads-container'>  
  {/*  реклама  */}
  </div>
  </div>
  )
}



export default AmChrome;