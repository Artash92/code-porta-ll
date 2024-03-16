import React from 'react'

function AmHtml_2() {
  return (
    <div>
      <div className='ad-container'>  
          {/*  реклама  */}
        </div>
  
  <h1>HTML թեգերը և դրանց նկարագրությունները</h1>

  <p>1. <b>{'<'}<span className='green'>html</span>{'>'}</b> Սահմանում է HTML փաստաթուղթ:</p>

  <p>2. <b>{'<'}<span className='green'>head</span>{'>'}</b> Պարունակում է փաստաթղթի վերաբերյալ մետատվյալներ, ինչպիսիք են վերնագիրը և հղումները դեպի CSS ոճային թերթիկներ:</p >

  <p>3. <b>{'<'}<span className='green'>title</span>{'>'}</b> Նշում է փաստաթղթի անվանումը, ինչպես ցուցադրվում է դիտարկիչի պատուհանի վերնագրում կամ ներդիրում:</p>

  <p>4. <b>{'<'}<span className='green'>body</span>{'>'}</b> Պարունակում է փաստաթղթի տեսանելի բովանդակությունը:</p>

  <p>5. <b>{'<'}<span className='green'>h1</span>{'>'} - {'<'}<span className='green'>h6</span>{'>'} </b> Սահմանել կարևորության տարբեր մակարդակների վերնագրեր, որոնցից {'<h1>'}-ը ամենամեծն է, իսկ {'<h6>'}-ը` ամենափոքրը:</p>

  <p>6. <b>{'<'}<span className='green'>p</span>{'>'}</b> Սահմանում է տեքստի պարբերություն:</p>

  <p>7. <b>{'<'}<span className='green'>a</span>{'>'}</b> Սահմանում է հղում դեպի մեկ այլ վեբ էջի կամ նույն էջի որոշակի վայրի:</p >

  <p>8. <b>{'<'}<span className='green'>img</span>{'>'}</b> Տեղադրում է պատկեր փաստաթղթի մեջ:</p>

  <p>9. <b>{'<'}<span className='green'>ul</span>{'>'}</b> Սահմանում է չդասավորված ցուցակ, որը սովորաբար նշվում է պարբերակներով:</p>

  <p>10. <b>{'<'}<span className='green'>ol</span>{'>'}</b> Նշում է դասավորված ցուցակը, որը սովորաբար նշվում է թվերով կամ տառերով:</p>

  <p>11. <b>{'<'}<span className='green'>li</span>{'>'}</b> Նույնականացնում է ցանկի տարրը դասավորված կամ չդասավորված ցանկում:</p>

  <p>12. <b>{'<'}<span className='green'>div</span>{'>'}</b> Սահմանում է HTML տարրերի կոնտեյներ, որը կարող է օգտագործվել ձևավորման և դիրքավորման համար:</p>

  <p>13. <b>{'<'}<span className='green'>span</span>{'>'}</b> Սահմանում է փոքր կոնտեյներ ներկառուցված HTML տարրերի համար, որոնք կարող են օգտագործվել ձևավորման և դիրքավորման համար:</p >

  <p>14. <b>{'<'}<span className='green'>form</span>{'>'}</b> Սահմանում է օգտվողի մուտքագրման ձև, որը կարող է պարունակել տարբեր մուտքային դաշտեր և ուղարկել կոճակներ:</p >

  <p>15. <b>{'<'}<span className='green'>input</span>{'>'}</b> Նշում է մուտքագրման դաշտ օգտատիրոջ մուտքագրման համար, օրինակ՝ տեքստային դաշտ կամ վանդակ:</p >

  <p>16. <b>{'<'}<span className='green'>button</span>{'>'}</b> Սահմանում է սեղմվող կոճակի տարր, որը կարող է օգտագործվել օգտատերերի տարբեր փոխազդեցությունների համար:</p>

  <p>17. <b>{'<'}<span className='green'>select</span>{'>'}</b> Սահմանում է բացվող ցուցակ, որը թույլ է տալիս օգտվողներին ընտրել մեկ կամ մի քանի տարբերակ:</p>

  <p>18. <b>{'<'}<span className='green'>small</span>{'>'}</b> օգտագործվում է ավելի փոքր տեքստի չափս սահմանելու համար (օրինակ՝ հեղինակային իրավունքի և այլ մեկնաբանությունների համար):</p>

  <p><a href="https://www.w3schools.com/tags/" target='_blank' > <b>Ավելի շատ թեգեր կարելի է գտնել այստեղ 👉🏼 W3Schools</b></a></p>

  <h2>HTML աղյուսակի թեգեր և ատրիբուտներ</h2>

  <p>1. <b>{'<'}<span className='green'>table</span>{'>'}</b> Օգտագործվում է HTML աղյուսակի սկիզբն ու վերջը սահմանելու համար: Աղյուսակին առնչվող բոլոր թեգերը պարունակվում են {'<table>'} տարրում:</p>

  <p>2. <b>{'<'}<span className='green'>caption</span>{'>'}</b> Օգտագործվում է աղյուսակի ենթագրեր տրամադրելու համար: Այն պետք է տեղադրվի անմիջապես բացվող {'<table>'} թեգից հետո:</p>

  <p>3. <b>{'<'}<span className='green'>frame</span>{'>'}</b> Նշում է, թե ինչպես պետք է ցուցադրվեն աղյուսակի եզրագծերը: Այն ունի երեք հնարավոր արժեք՝ void, above և below:</p>

  <p>4. <b>{'<'}<span className='green'>rules</span>{'>'}</b> Որոշում է աղյուսակի եզրագծերի տեսանելիությունը: Այն կարող է սահմանվել "none"՝ եզրագծերը թաքցնելու համար, "groups"՝ տողերի խմբերի և սյունակների խմբերի միջև սահմաններ ցույց տալու համար, կամ "rows"՝ տողերի միջև սահմանները ցուցադրելու համար:</p>

  <p>5. <b>{'<'}<span className='green'>border</span>{'>'}</b> Նշում է աղյուսակի եզրագծերի լայնությունը պիքսելներով:</p>

  <p>6. <b>{'<'}<span className='green'>cellspacing</span>{'>'}</b> Նշում է աղյուսակի հարակից բջիջների միջև հեռավորությունը: Այն նշված է պիքսելներով:</p>

  <p>7. <b>{'<'}<span className='green'>cellpadding</span>{'>'}</b> Նշում է բջիջի բովանդակության և բջիջի եզրագծերի միջև հեռավորությունը: Այն նաև նշված է պիքսելներով:</p>

  <p>8. <b>{'<'}<span className='green'>tr</span>{'>'}</b> Օգտագործվում է աղյուսակի տող սահմանելու համար:</p>

  <p>9. <b>{'<'}<span className='green'>th</span>{'>'}</b> Օգտագործվում է աղյուսակի բջիջի անվանումը սահմանելու համար: Այն սովորաբար օգտագործվում է աղյուսակի յուրաքանչյուր սյունակի վերնագրերի համար:</p>

  <p>10. <b>{'<'}<span className='green'>td</span>{'>'}</b> Օգտագործվում է աղյուսակի տվյալների բջիջ սահմանելու համար: Այստեղ է տեղադրվում աղյուսակի փաստացի բովանդակությունը:</p>

  <h2>Հղումներ կամ հիպերտեքստային հղումներ</h2>

  <p>Հղումները կամ հիպերտեքստային հղումները HTML-ում օգտագործվում են վեբ էջի վրա սեղմելու տարրեր ստեղծելու համար, որոնք թույլ են տալիս օգտվողներին անցնելու այլ էջեր, նույն էջի բաժիններ կամ այլ առցանց ռեսուրսներ: Հղման հիմնական կառուցվածքը բաղկացած է խարիսխ թեգից {'(<a>)'} և href հատկանիշից, որը սահմանում է հղման նպատակակետը:</p>

  <p>HTML-ում հիմնական հղման օրինակ.</p>

  <code><p>{'<'}<span className='green'>a</span> <span className='blue'>href</span>=<span className='blue1'>"https://www.example.com"</span>{'>'}Սեղմեք այստեղ այցելելու համար Example.com{'</'}<span className='green'>a</span>{'>'}</p></code>

  <p>Այս օրինակում "Սեղմեք այստեղ՝ Example.com այցելելու համար" տեքստը հղման կտտացող մասն է, իսկ href հատկանիշը նշում է նպատակակետ URL-ը: Սեղմելով հղման վրա, օգտվողին կտանի նշված URL-ով կայք:</p>

  <p>Հղումները կարող են օգտագործվել նաև նույն վեբ էջի ներսում խարիսխ կետեր ստեղծելու համար: Սա թույլ է տալիս օգտվողներին արագ անցնելու էջի որոշակի հատված՝ սեղմելով հղման վրա: Խարիսխ կետ ստեղծելու համար դուք ավելացնում եք <b>id</b> հատկանիշն այն տարրին, որին ցանկանում եք կապել, այնուհետև ստեղծեք հղումը <b>#</b> նշանով, որին հաջորդում է արժեքը: <b>id</b> որպես նպատակակետ:</p>

  <code>
      <p>{'<'}<span className='green'>h2</span> <span className='blue'>id</span>=<span className='blue1'>"section1"</span>{'>'}Բաժին 1{'</'}<span className='green'>h2 </span>{'>'}</p>

      <p>{'<'}<span className='green'>p</span>{'>'}Սա էջի առաջին բաժինն է։{'</'}<span className='green'>p</span>{'>'}</p>

      <p>{'<'}<span className='green'>h2</span> <span className='blue'>id</span>=<span className='blue1'>"section2"</span>{'>'}Բաժին 2{'</'}<span className='green'>h2 </span>{'>'}</p>

      <p>{'<'}<span className='green'>p</span>{'>'}Սա էջի երկրորդ բաժինն է։{'</'}<span className='green'>p</span>{'>'}</p>

      <p>{'<'}<span className='green'>a</span> <span className='blue'>href</span>=<span className='blue1'>"#section1"</span>{'>'}Անցնել բաժին 1{'</'}<span className='green'>a</span>{'>'}</p>

      <p>{'<'}<span className='green'>a</span> <span className='blue'>href</span>=<span className='blue1'>"#section2"</span>{'>'}Անցնել բաժին 2{'</'}<span className='green'>a</span>{'>'}</p>
 </code>

 <p>Այս օրինակում մենք <b>id</b> ատրիբուտներ ենք ավելացրել երկու <b>h2</b> թեգերին` յուրաքանչյուր բաժնի համար խարիսխ կետեր ստեղծելու համար: Էջի ներքևի երկու հղումներն օգտագործում են <b>href</b> հատկանիշը՝ այս խարիսխ կետերը կապելու համար, ինչը թույլ է տալիս օգտվողներին արագ անցնել էջի որոշակի հատված:</p>

 <p>HTML-ում կան բազմաթիվ այլ տարբերակներ և ատրիբուտներ, որոնք կարող են օգտագործվել հղումներում, այդ թվում՝ target, download, rel և այլն: Հղումների արդյունավետ օգտագործումը թույլ է տալիս ստեղծել ավելի ինտերակտիվ  փորձ ձեր վեբ էջերում:</p>

 <p>Հեռախոսահամարի կամ Skype-ի համար հղում ստեղծելու համար կարող եք օգտագործել {'<a>'} թեգը <b>href</b> հատկանիշով սահմանված <b>"tel"</b> կամ <b>"skype"</b> որին հաջորդում է Skype հեռախոսահամարը կամ օգտանունը:</p>

 <p>Օրինակ, հեռախոսահամարի համար հղում ստեղծելու համար կարող եք օգտագործել հետևյալ կոդը՝</p>

 <code><p>{'<'}<span className='green'>a</span> <span className='blue'>href</span>=<span className='blue1'>"tel:+1234567890"</span>{'>'} Զանգահարեք մեզ այս համարով +1 (234) 567-890{'</'}<span className='green'>a</span>{'>'}</p></code>

 <p>Այս օրինակում <b>"Tel"</b> օգտագործվում է որպես հեռախոսահամարների արձանագրություն, իսկ "+1234567890"-ը հենց հեռախոսահամարն է: Երբ օգտատերը կտտացնում է այս հղմանը շարժական սարքի վրա, այն ավտոմատ կերպով գործարկում է հեռախոսի հավելվածը նախապես լրացված համարով:</p>

 <p>Skype-ի համար հղում ստեղծելու համար կարող եք օգտագործել հետևյալ կոդը՝</p>

 <code><p>{'<'}<span className='green'>a</span> <span className='blue'>href</span>=<span className='blue1'>"skype:username?call"</span>{'>'} Զանգահարեք մեզ Skype -ով{'</'}<span className='green'>a</span>{'>'}</p></code>

 <p>Այս օրինակում <b>"skype"</b>-ն օգտագործվում է որպես Skype-ի հղումների արձանագրություն, "username"-ն այն անձի կամ ընկերության օգտանունն է, ում ցանկանում եք զանգահարել, և ավելացվել է "?call" զանգը սկսելու համար: Երբ օգտատերը սեղմում է այս հղման վրա, այն գործարկում է Skype հավելվածը և զանգ է անում նշված օգտվողի անվանը:</p>

 <p><b>HTML-ում {'<img>'} թեգը օգտագործվում է վեբ էջում պատկերներ ցուցադրելու համար: Ահա {'<img>'} թեգը օգտագործելու օրինակ</b></p> 

 <code><p>{'<'}<span className='green'>img</span> <span className='blue'>src</span>=<span className='blue1'>"image.jpg"</span> <span className='blue'>alt</span>=<span className='blue1'>"Description of image"</span>{'>'}</p></code>

 <p>Եկեք բաժանենք այս թեգը տարբեր մասերի.</p>

 <p><b>"src"</b> ատրիբուտը նշում է պատկերի ֆայլի URL-ը, որը ցանկանում եք ցուցադրել:</p>

 <p><b>"alt"</b> ատրիբուտը տրամադրում է պատկերի նկարագրությունը էկրանի ընթերցողների և այլ օժանդակ տեխնոլոգիաների համար:</p>

 <p>Ահա {'<img>'} թեգի օգտագործման օրինակ՝ որոշակի լայնությամբ և բարձրությամբ պատկեր ցուցադրելու համար.</p>

 <code><p>{'<'}<span className='green'>img</span> <span className='blue'>src</span>=<span className='blue1'>"image.jpg"</span> <span className='blue'>alt</span>=<span className='blue1'>"Description of image"</span> <span className='blue'>width</span>=<span className='blue1'>"500"</span> <span className='blue'>height</span>=<span className='blue1'>"300"</span>{'>'}</p></code>

 <p>Այս օրինակում <b>"width"</b> և <b>"height"</b> ատրիբուտները սահմանում են պատկերի չափերը պիքսելներով:</p>

 <p>Դուք կարող եք նաև ավելացնել այլ ատրիբուտներ {'<img>'} թեգին, որպեսզի հետագայում հարմարեցնեք, թե ինչպես է ցուցադրվում պատկերը, ինչպիսիք են <b>"class"</b> և <b>"id"</b > ոճավորել CSS-ով:</p>


 <b><p>* Տեքստը գրված է թարգմանչի օգնությամբ։ Եթե սխալ եք հայտնաբերել, խնդրում ենք մեզ տեղյակ պահել *</p></b>
    <div className='ads-container'>  
  {/*  реклама  */}
</div>
    </div>
  )
}

export default AmHtml_2