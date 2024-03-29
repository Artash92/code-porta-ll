import React from 'react'

function AmReact_10() {
  return (
    <div>
      <div className='ad-container'>  
        {/*  реклама  */}
      </div>

         <h2>HTTP սխալներ</h2>

{/* Информационные ответы (100 – 199) */}

  <h3>Տեղեկատվական պատասխաններ (100 – 199)</h3>
  <p>
    <strong>100 Continue.</strong> Սերվերը ստացել է հարցումների վերնագրերը, և հաճախորդը պետք է շարունակի ուղարկել հարցման մարմինը (այն դեպքում, երբ պահանջվում է ուղարկել մարմին, օրինակ՝ POST հարցում):
  </p>
  <p>
    <strong>101 Switching Protocols.</strong> Հայցողը խնդրեց սերվերին փոխել արձանագրությունները, և սերվերը համաձայնեց դա անել:
  </p>
  <p>
    <strong>102 Processing.</strong> Սերվերը ստացել և մշակում է հարցումը, բայց դեռ պատասխան չկա:
  </p>
  <p>
    <strong>103 Early Hints.</strong> Ցույց է տալիս հաճախորդին, որ սերվերը, ամենայն հավանականությամբ, կուղարկի վերջնական պատասխան՝ տեղեկատվական պատասխանում ներառված վերնագրերով:
  </p>


{/* Успешные ответы (200 – 299) */}

  <h3>Հաջողված պատասխաններ (200 – 299)</h3>
  <p>
    <strong>200 OK.</strong> Հարցումը հաջողությամբ ավարտվեց: Պատասխանի հետ վերադարձվող տեղեկատվությունը կախված է հարցման մեջ կիրառվող մեթոդից:
  </p>
  <p>
    <strong>201 Created.</strong> Հարցումը հաջողությամբ ավարտվեց, ինչի արդյունքում ստեղծվեց նոր ռեսուրս:
  </p>
  <p>
    <strong>202 Accepted.</strong> Հարցումն ընդունվել է մշակման, սակայն մշակումը դեռ չի ավարտվել։
  </p>
  <p>
    <strong>203 Non-Authoritative Information.</strong> Սերվերը հաջողությամբ մշակել է հարցումը, սակայն վերադարձնում է տեղեկատվություն, որը կարող է լինել այլ աղբյուրից:
  </p>
  <p>
    <strong>204 No Content.</strong> Սերվերը հաջողությամբ մշակել է հարցումը և որևէ բովանդակություն չի վերադարձնում:
  </p>
  <p>
    <strong>205 Reset Content.</strong> Սերվերը հաջողությամբ մշակեց հարցումը, բայց ոչ մի բովանդակություն չի վերադարձնում: Հաճախորդը պետք է վերականգնի փաստաթղթի տեսակը:
  </p>
  <p>
    <strong>206 Partial Content.</strong> Սերվերը փոխանցում է միայն ռեսուրսի մի մասը հաճախորդի կողմից ուղարկված միջակայքի վերնագրի պատճառով:
  </p>
  <p>
    <strong>207 Multi-Status.</strong> Multi-Status-ի պատասխանը պարունակում է տեղեկատվություն բազմաթիվ ռեսուրսների մասին այն իրավիճակներում, երբ կարող են պահանջվել բազմաթիվ կարգավիճակի կոդեր:
  </p>
 

{/* Сообщения о перенаправлении (300 – 399) */}
 
  <h3>Վերահղման հաղորդագրություններ (300 – 399)</h3>
  <p>
    <strong>300 Multiple Choices.</strong> Պահանջվող ռեսուրսն ունի բազմաթիվ տարբերակներ, որոնցից յուրաքանչյուրն ունի տարբեր ատրիբուտներ և պատասխաններ:
  </p>
  <p>
    <strong>301 Moved Permanently.</strong> Հայցվող ռեսուրսը մշտապես տեղափոխվել է նոր URL, և այդ ռեսուրսի ցանկացած հետագա մուտք պետք է օգտագործի վերադարձված URL-ներից մեկը:
  </p>
  <p>
    <strong>302 Found.</strong> Հայցվող ռեսուրսը ժամանակավորապես գտնվում է այլ URI-ում:
  </p>
  <p>
    <strong>303 See Other.</strong> Հարցման պատասխանը կարելի է գտնել մեկ այլ URI-ում և պետք է առբերվի՝ օգտագործելով GET մեթոդը այդ ռեսուրսի վրա:
  </p>
  <p>
    <strong>304 Not Modified.</strong> Ցույց է տալիս, որ ռեսուրսը չի փոփոխվել If-Modified-Since կամ If-None-Match հարցումների վերնագրերում նշված տարբերակից հետո: Այս դեպքում ռեսուրսը վերափոխանցելու կարիք չկա, քանի որ հաճախորդն արդեն ունի նախկինում ներբեռնված պատճենը:
  </p>
  <p>
    <strong>305 Use Proxy.</strong> Հարցվող ռեսուրսը պետք է հասանելի լինի Location դաշտում նշված պրոքսի միջոցով:
  </p>
  <p>
    <strong>307 Temporary Redirect.</strong> Հայցվող ռեսուրսը ժամանակավորապես գտնվում է այլ URI-ում:
  </p>
  <p>
    <strong>308 Permanent Redirect.</strong> Հայցվող ռեսուրսը մշտապես տեղափոխվել է մեկ այլ URI, և հաճախորդը պետք է թարմացնի այս նոր URI-ի բոլոր հղումները:
  </p>
 

{/* Ответы клиента с ошибкой (400 – 499) */}
 
  <h3>Սխալով պատասխանները հաճախորդին (400 - 499)</h3>
  <p>
    <strong>400 Bad Request.</strong> Սերվերը չի կարող մշակել հարցումը հաճախորդի սխալի պատճառով (օրինակ՝ սխալ շարահյուսություն, չափազանց մեծ չափ, հարցումի անվավեր հաղորդագրության կառուցվածք կամ խաբուսիկ հարցումների երթուղում):
  </p>
  <p>
    <strong>401 Unauthorized.</strong> Նման է 403 Forbidden-ին, բայց հատուկ օգտագործման համար, երբ նույնականացում է պահանջվում, և այն ձախողվել է կամ դեռ չի տրամադրվել:
  </p>
  <p>
    <strong>402 Payment Required.</strong> Պահպանված է հետագա օգտագործման համար:
  </p>
  <p>
    <strong>403 Forbidden.</strong> Հաճախորդը չունի պահանջվող ռեսուրս մուտք գործելու թույլտվություն։
  </p>
  <p>
    <strong>404 Not Found.</strong> Սերվերը չի կարող գտնել պահանջվող ռեսուրսը:
  </p>
  <p>
    <strong>405 Method Not Allowed.</strong> Հարցման տողում վերադարձված մեթոդը հայտնի է աղբյուրի սերվերին, սակայն չի աջակցվում թիրախային ռեսուրսի կողմից:
  </p>
  <p>
    <strong>406 Not Acceptable.</strong> Չկա պահանջվող ռեսուրսի համապատասխան ներկայացում, որը բավարարում է օգտատիրոջը՝ հաշվի առնելով հարցումում ստացված ակտիվ բանակցությունների վերնագրերը:
  </p>
  <p>
    <strong>407 Proxy Authentication Required.</strong> Հաճախորդը նախ պետք է վավերացվի պրոքսի սերվերի միջոցով:
  </p>
  <p>
    <strong>408 Request Timeout.</strong> Հաճախորդը հարցում չի ներկայացրել այն ժամանակահատվածում, երբ սերվերը պատրաստ էր սպասել:
  </p>
  <p>
    <strong>409 Conflict.</strong> Հարցումը չի կարող կատարվել թիրախային ռեսուրսի ներկայիս վիճակի հետ հակասության պատճառով:
  </p>
  <p>
    <strong>410 Gone.</strong> Ցույց է տալիս, որ թիրախային ռեսուրսն այլևս հասանելի չէ սերվերում, և վերահղման հասցեն անհայտ է:
  </p>
  <p>
    <strong>411 Length Required.</strong> Սերվերը մերժում է հարցումն ընդունել առանց որոշակի բովանդակության երկարության:
  </p>
  <p>
    <strong>412 Precondition Failed.</strong> Հարցման վերնագրերում նշված մեկ կամ մի քանի պայմաններ սերվերում փորձարկվելիս գնահատվում են որպես false:
  </p>
  <p>
    <strong>413 Payload Too Large.</strong> Սերվերը հրաժարվում է մշակել հարցումը, քանի որ հարցման բեռնվածությունն ավելի մեծ է, քան սերվերը ցանկանում է կամ կարող է կարգավորել:
  </p>
  <p>
    <strong>414 URI Too Long.</strong> Սերվերը հրաժարվում է սպասարկել հարցումը, քանի որ URI-ն ավելի երկար է, քան սերվերը պատրաստ է մեկնաբանելու:
  </p>
  <p>
    <strong>415 Unsupported Media Type.</strong> Ծագման սերվերը հրաժարվում է սպասարկել հարցումը, քանի որ ծանրաբեռնվածության ձևաչափը չի ապահովվում:
  </p>
  <p>
    <strong>416 Range Not Satisfiable.</strong> Հաճախորդը խնդրել է ֆայլի մի մասը (բայթ ծառայություն), սակայն սերվերը չի կարող տրամադրել այդ մասը:
  </p>
  <p>
    <strong>417 Expectation Failed.</strong> Սերվերը չի կարող կատարել հարցումի Expect վերնագրի դաշտի պահանջները:
  </p>
  <p>
    <strong>418 I'm a teapot.</strong> Թեյնիկով սուրճ պատրաստելու ցանկացած փորձ պետք է հանգեցնի «418 Ես թեյնիկ եմ» սխալին։
  </p>
  <p>
    <strong>420 Enhance Your Calm.</strong> Վերադարձվել է Twitter Search and Trends API-ի կողմից, երբ հաճախորդը սահմանափակ արագություն ունի:
  </p>
  <p>
    <strong>421 Misdirected Request.</strong> Հարցումն ուղարկվել է սերվեր, որը չի կարող պատասխան ստեղծել:
  </p>
  <p>
    <strong>422 Unprocessable Entity.</strong> Հարցումը լավ ձևավորված էր, բայց իմաստային սխալների պատճառով չի կարող կատարվել:
  </p>
  <p>
    <strong>423 Locked.</strong> Մուտք գործած ռեսուրսը կողպված է:
  </p>
  <p>
    <strong>425 Too Early.</strong> Ցույց է տալիս, որ սերվերը չի ցանկանում ռիսկի ենթարկել այն հարցումը, որը կարող է վերարտադրվել:
  </p>
  <p>
    <strong>426 Upgrade Required.</strong> Սերվերը հրաժարվում է կատարել հարցումը՝ օգտագործելով ընթացիկ արձանագրությունը, բայց կարող է պատրաստ լինել դա անել այն բանից հետո, երբ հաճախորդը թարմացվի այլ արձանագրության:
  </p>
  <p>
    <strong>428 Precondition Required.</strong> Ծագման սերվերը պահանջում է, որ հարցումը լինի պայմանական:
  </p>
  <p>
    <strong>429 Too Many Requests.</strong> Օգտագործողը չափազանց շատ հարցումներ է ուղարկել որոշակի ժամանակահատվածում:
  </p>
 

{/* Ответы сервера с ошибкой (500 – 599) */}
 
  <h3>Սերվերի պատասխանները սխալներով (500 – 599)</h3>
  <p>
    <strong>500 Internal Server Error.</strong> Ընդհանուր սխալի հաղորդագրություն, որը տրամադրվում է, երբ հանդիպում է անսպասելի պայման, և չկա ավելի կոնկրետ հաղորդագրություն, որը հարմար է: Սա շատ տարածված սխալ է, որը կարող է առաջանալ սերվերի կողմից բազմաթիվ խնդիրների պատճառով:
  </p>
  <p>
    <strong>501 Not Implemented.</strong> Սերվերը կամ չի ճանաչում հարցման մեթոդը կամ չի կարողանում լրացնել հարցումը:
  </p>
  <p>
    <strong>502 Bad Gateway.</strong> Սերվերը, որը գործում է որպես դարպաս կամ պրոքսի, անվավեր պատասխան է ստացել արտաքին սերվերից, որի հետ կապվել է հարցումը կատարելիս:
  </p>
  <p>
    <strong>503 Service Unavailable.</strong> Սերվերը ներկայումս չի կարողանում մշակել հարցումը ժամանակավոր ծանրաբեռնվածության կամ սերվերի սպասարկման պատճառով:
  </p>
  <p>
    <strong>504 Gateway Timeout.</strong> Դարպասի կամ պրոքսի դերում գտնվող սերվերը ժամանակին պատասխան չի ստացել URI-ում նշված արտաքին սերվերից կամ որևէ այլ երկրորդական սերվերից, որին անհրաժեշտ էր կապվել հարցումն ավարտելու համար:
  </p>
  <p>
    <strong>505 HTTP Version Not Supported.</strong> Սերվերը չի աջակցում կամ հրաժարվում է աջակցել հարցման հաղորդագրության մեջ օգտագործվող հիմնական HTTP տարբերակը:
  </p>
  <p>
    <strong>506 Variant Also Negotiates.</strong> Սերվերն ունի ներքին կազմաձևման սխալ. ռեսուրսի ընտրված տարբերակը կազմաձևված է թափանցիկ բովանդակության բանակցություններին ինքնուրույն մասնակցելու համար և, հետևաբար, բանակցային գործընթացում վավեր վերջնակետ չէ:
  </p>
  <p>
    <strong>507 Insufficient Storage.</strong> Սերվերը չի կարող պահել հարցումը կատարելու համար անհրաժեշտ տեսքը:
  </p>
  <p>
    <strong>508 Loop Detected.</strong> Հարցումը մշակելիս սերվերը հանդիպեց անսահման հանգույցի:
  </p>
  <p>
    <strong>510 Not Extended.</strong> Հարցումը լրացնելու համար պահանջվում են լրացուցիչ ընդլայնումներ:
  </p>
  <p>
    <strong>511 Network Authentication Required.</strong> Ցանց մուտք գործելու համար հաճախորդը պետք է նույնականացվի:
  </p>

  <b><p>* Տեքստը գրված է թարգմանչի օգնությամբ։ Եթե սխալ եք հայտնաբերել, խնդրում ենք մեզ տեղյակ պահել *</p></b>
    
    <div className='ads-container'>  
  {/*  реклама  */}
  </div>
    </div>
  )
}

export default AmReact_10;