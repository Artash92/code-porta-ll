import React from 'react';

function AmHtml_3() {
  return (
    <div>
      <div className='ad-container'>  
          {/*  реклама  */}
        </div>
   
   <h1>Հասկանալ Meta թեգերը HTML-ում - Սկսնակների ուղեցույց</h1>

   <p>1. <b>charset</b> charset հատկանիշը նշում է HTML փաստաթղթի կոդավորումը: Կարևոր է համոզվել, որ կոդավորումը ճիշտ է դրված, որպեսզի հատուկ նիշերը ճիշտ ցուցադրվեն:</p>

   <p>Օրինակ՝</p>

   <code><p>{'<'}<span className='green'>meta</span> <span className='blue'>charset</span>=<span className='blue1'>"UTF-8"</span>{'>'}</p></code>

   <p>2. <b>name.</b> Անվան հատկանիշն օգտագործվում է տրամադրվող մետատվյալների տեսակը որոշելու համար, ինչպիսիք են հիմնաբառերը, նկարագրությունը կամ հեղինակը:</p>

   <p>Օրինակ՝</p>

   <code><p>{'<'}<span className='green'>meta</span> <span className='blue'>name</span>=<span className='blue1'>"description"</span> <span className='blue'>content</span>=<span className='blue1'>"Սա իմ վեբ էջի նկարագրությունն է:"</span>{'>'}</p></code>

   <p>3. <b>content</b> բովանդակության հատկանիշն օգտագործվում է տրամադրված մետատվյալների արժեքը նշելու համար:</p>

   <p>Օրինակ՝</p>

   <code><p>{'<'}<span className='green'>meta</span> <span className='blue'>name</span>=<span className='blue1'>"keywords"</span> <span className='blue'>content</span>=<span className='blue1'>"HTML, CSS, JavaScript"</span>{'>'}</p></code>

   <p>4. <b>http-equiv.</b> http-equiv հատկանիշն օգտագործվում է HTML փաստաթղթի համար HTTP վերնագիր սահմանելու համար, օրինակ՝ refresh կամ content-type:</p>

   <p>Օրինակ՝</p>

   <code><p>{'<'}<span className='green'>meta</span> <span className='blue'>http-equiv</span>=<span className='blue1'>"refresh"</span> <span className='blue'>content</span>=<span className='blue1'>"5"</span>{'>'}</p></code>

   <p>5. <b>viewport.</b> Viewport հատկանիշն օգտագործվում է տարբեր սարքերում, ինչպիսիք են բջջային հեռախոսները կամ պլանշետները, վերահսկելու վեբ էջի մասշտաբումն ու դասավորությունը:</p>

   <p>Օրինակ՝</p>

   <code><p>{'<'}<span className='green'>meta</span> <span className='blue'>name</span>=<span className='blue1'>"viewport"</span> <span className='blue'>content</span>=<span className='blue1'>"width=device-width, initial-scale=1.0"</span>{'>'}</p></code>

   <h2>Ինչպես օգտագործել գույները HTML-ում. Սկսնակների ուղեցույց</h2>

   <p>HTML-ում գույները կարող են սահմանվել տարբեր մեթոդների միջոցով, ներառյալ գույների անունները, տասնվեցական արժեքները, RGB արժեքները և HSL արժեքները:</p>

   <b>1. Գույների անունները.</b>

   <p>HTML-ն ապահովում է նախապես սահմանված գունային անունների մի շարք, որոնք կարող են օգտագործվել տարրի գույնը նշելու համար: Գույների անունների որոշ օրինակներ են՝ "կարմիր", "կանաչ", "կապույտ", "դեղին", "մանուշակագույն" և "սև"։</p>

   <b>2. Տասնվեցական արժեքներ</b>

   <p>Գույնի տասնվեցական արժեքը վեցանիշ կոդ է, որը ներկայացնում է գույնը: Առաջին երկու թվանշանները ներկայացնում են գույնի կարմիրի քանակը, հաջորդ երկու թվանշանները ներկայացնում են գույնի կանաչի քանակը, իսկ վերջին երկու թվանշանները ներկայացնում են գույնի կապույտի քանակը: Օրինակ՝ #FF0000-ը ներկայացնում է մաքուր կարմիրը, #00FF00-ը՝ մաքուր կանաչը, իսկ #0000FF-ը՝ մաքուր կապույտը:</p>

   <b>3. RGB արժեքներ՝</b>

   <p>Գույնի RGB արժեքը երեք թվերի հավաքածու է, որը ներկայացնում է գույնի կարմիր, կանաչ և կապույտի քանակը: Յուրաքանչյուր արժեք տատանվում է 0-ից մինչև 255: Օրինակ՝ rgb(255, 0, 0) ներկայացնում է մաքուր կարմիր, rgb(0, 255, 0)՝ մաքուր կանաչ, իսկ rgb(0, 0, 255)՝ մաքուր կապույտ:</p>

   <b>4. HSL արժեքներ՝</b>

   <p>Գույնի HSL արժեքը երեք թվերի հավաքածու է, որոնք ներկայացնում են գույնի երանգը, հագեցվածությունը և թեթևությունը: Երանգը գունային անիվի վրա աստիճան է (0-ից 360), հագեցվածությունը տոկոսային արժեք է (0% -ից մինչև 100%), իսկ թեթևությունը նաև տոկոսային արժեք է (0% -ից 100%): Օրինակ՝ hsl(0, 100%, 50%) ներկայացնում է մաքուր կարմիր, hsl(120, 100%, 50%)՝ մաքուր կանաչ, իսկ hsl(240, 100%, 50%)՝ մաքուր կապույտ:</p>

   <h2>CSS հիմունքներ սկսնակների համար. ներածություն կասկադային ոճերի թերթիկների համար</h2>

   <p>CSS (Cascading Style Sheets) լեզուն է, որն օգտագործվում է HTML փաստաթղթերի ոճավորման համար: CSS-ը թույլ է տալիս փոխել ձեր վեբ էջի գույները, տառատեսակները, դասավորությունը և այլ կողմերը: Այն աշխատում է՝ ընտրելով HTML տարրեր և կիրառելով դրանց ոճերը:</p>

   <p>CSS ոճերը ստեղծվում են սելեկտորների, հատկությունների և արժեքների միջոցով: Սելեկտորները ընտրում են կոնկրետ HTML տարրեր և կարող են օգտագործվել ոճերը մի քանի տարրերի վրա միաժամանակ կիրառելու համար: Հատկությունները սահմանում են, թե ինչ ոճեր եք ուզում կիրառել և կարող են ներառել այնպիսի բաներ, ինչպիսիք են տառաչափը, գույնը և ներդիրը: Արժեքները սահմանում են հատուկ կարգավորումներ, օրինակ՝ որոշակի գույն կամ չափ:</p>

   <p>CSS ֆայլը HTML փաստաթղթին կապելու համար կարող եք օգտագործել {'<link>'} թեգը ձեր HTML փաստաթղթի {'<head>'} բաժնում:</p>

   <p>Օրինակ, թե ինչպես ներառել "styles.css" կոչվող CSS ֆայլը ձեր HTML փաստաթղթում.</p>

   <code>
      <p>{'<'}!<span className='blue'>DOCTYPE</span> <span className='blue1'>html</span>{'>'}</p>

      <p>{'<'}<span className='green'>html</span>{'>'}</p> 

      <p>{'<'}<span className='green'>head</span>{'>'}</p>

      <p>&nbsp;{'<'}<span className='green'>link</span> <span className='blue'>rel</span>=<span className='blue1'>"stylesheet"</span> <span className='blue'>type</span>=<span className='blue1'>"text/css"</span> <span className='blue'>href</span>=<span className='blue1'>"styles.css"</span>{'>'}</p>

      <p>{'</'}<span className='green'>head</span>{'>'}</p>

      <p>{'<'}<span className='green'>body</span>{'>'}</p>

      <p>&nbsp;{'<!-- Ձեր HTML բովանդակությունը այստեղ  -->'}</p>

      <p>{'</'}<span className='green'>body</span>{'>'}</p>

      <p>{'</'}<span className='green'>html</span>{'>'}</p>
  </code>

  <p>CSS կոդի օրինակ՝</p>

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

  <p>Այս CSS կոդը կիրառում է ոճեր HTML փաստաթղթի տարրերին: Այն ունի երկու սելեկտոր՝ <b>h1</b> և <b>p</b>, և նրանցից յուրաքանչյուրն ունի մի քանի հատկություններ և արժեքներ: <b>h1</b> սելեկտորը էջի բոլոր <b>h1</b> տարրերի համար սահմանում է կարմիր գույնը, 36px տառաչափը և տեքստի կենտրոնական հավասարեցումը: <b>p</b> ընտրիչը էջի բոլոր <b>p</b> տարրերի համար սահմանում է կապույտ գույնը, տառաչափը 16px և տողերի տարածությունը 1,5:</p>

  <p>CSS-ը կարող է կիրառվել HTML փաստաթղթերի վրա մի շարք ձևերով, այդ թվում՝ ներկառուցված, ներքին և արտաքին: Ներկառուցված ոճը կիրառվում է HTML փաստաթղթի <b>head</b> բաժնում՝ օգտագործելով <b>style</b> թեգը: Ներքին ոճը կիրառվում է անմիջապես HTML տարրի վրա՝ օգտագործելով <b>style</b> հատկանիշը: Արտաքին ոճը պահվում է առանձին CSS ֆայլերում և կապված է HTML փաստաթղթի հետ՝ օգտագործելով <b>link</b> թեգը:</p>

  <b><p>* Տեքստը գրված է թարգմանչի օգնությամբ։ Եթե սխալ եք հայտնաբերել, խնդրում ենք մեզ տեղյակ պահել *</p></b>
    <div className='ads-container'>  
  {/*  реклама  */}
</div>

    </div>
  )
}

export default AmHtml_3