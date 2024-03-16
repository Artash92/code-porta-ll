import React from 'react'

function AmReact_5() {
  return (
    <div>
      <div className='ad-container'>  
        {/*  реклама  */}
      </div>
       
       <h1>React Router DOM</h1>

       <p>React Router Dom-ը հանրաճանաչ գրադարան է, որն օգտագործվում է React հավելվածներում՝ հաճախորդի երթուղին կառավարելու համար: Այն թույլ է տալիս ծրագրավորողներին ստեղծել տարբեր երթուղիներ տարբեր բաղադրիչների համար և մատուցել դրանք ընթացիկ URL-ի հիման վրա: Սա ապահովում է օգտվողին ավելի անխափան օգտագործել, քանի որ օգտվողները կարող են նավարկել տարբեր էջերի և բաղադրիչների միջով՝ առանց ամբողջ էջը վերաբեռնելու:</p>

       <p>React Router Dom-ը հիմնված է React Router գրադարանի վրա և հատուկ նախագծված է բրաուզերում օգտագործելու համար: Այն օգտագործում է բրաուզերի պատմության API՝ URL-ը կառավարելու և օգտատիրոջ ինտերֆեյսը ընթացիկ URL-ի հետ համաժամեցնելու համար: Բացի այդ, այն ապահովում է երթուղիների սահմանման դեկլարատիվ մոտեցում՝ հեշտացնելով բազմաթիվ երթուղիներով և ներկառուցված բաղադրիչներով բարդ հավելվածների կառավարումը:</p>

       <p>React Router Dom-ի հիմնական առանձնահատկություններից են՝</p>

       <p> • Դեկլարատիվ երթուղում. Դուք կարող եք սահմանել ձեր երթուղիները որպես JSX բաղադրիչներ, ինչը հեշտացնում է երթուղավորման տրամաբանությունը հասկանալն ու կառավարելը:</p>

       <p> • Ներդրված երթուղիներ. դուք կարող եք երթուղիներ տեղադրել այլ երթուղիների ներսում, ինչը թույլ է տալիս լուծել ավելի բարդ երթուղային սցենարներ:</p>

       <p> • Երթուղու պարամետրեր. դուք կարող եք սահմանել դինամիկ պարամետրեր ձեր երթուղիներում՝ թույլ տալով տվյալների փոխանցել բաղադրիչների միջև՝ հիմնված ընթացիկ URL-ի վրա:</p>

       <p> • Պատմության կառավարում. React Router Dom-ը գործիքներ է տրամադրում բրաուզերի պատմությունը կառավարելու համար, որը թույլ է տալիս ծրագրային կերպով նավարկել էջերի միջև և կառավարել առաջ/հետ նավարկությունը:</p>

       <p> Ահա մի պարզ օրինակ, թե ինչպես կարելի է օգտագործել React Router Dom-ը React հավելվածում՝ <b>(հին տարբերակ)v5</b></p>
   
<code>
  <p> <span className='red'>import</span> React <span className='red'>from</span> <span className='blue1'>'react'</span>;</p>

  <p> <span className='red'>import</span> {'{'} BrowserRouter <span className='red'>as</span> Router, Route, Link {'}'} <span className='red'>from</span> <span className='blue1'>'react-router-dom'</span>;  </p>

  <p>&nbsp;<span className='red'>const</span> Home = () {'=> <'}<span className='green'>h1</span>{'>'}Home{'</'}<span className='green'>h1</span>{'>; '}</p>

  <p>&nbsp;<span className='red'>const</span> About = () {'=> <'}<span className='green'>h1</span>{'>'}About{'</'}<span className='green'>h1</span>{'>;'}</p>

  <p>&nbsp;<span className='red'>const</span> App {'= () => ( '}</p>

  <p>{'<'}<span className='blueviole'>Router</span>{'>'}</p>

  <p>&nbsp;{'<'}<span className='green'>nav</span>{'>'}</p>

  <p>&nbsp;&nbsp;{'<'}<span className='green'>ul</span>{'>'}</p>

  <p>&nbsp;&nbsp;&nbsp;{'<'}<span className='green'>li</span>{'>'}</p>

  <p>&nbsp;&nbsp;&nbsp;&nbsp;{'<'}<span className='blueviole'>Link</span> <span className='blue'>to</span>=<span className='blue1'>"/"</span>{'>'}Home{'</'}<span className='blueviole'>Link</span>{'>'}</p>

  <p>&nbsp;&nbsp;&nbsp;{'</'}<span className='green'>li</span>{'>'}</p>

  <p>&nbsp;&nbsp;&nbsp;{'<'}<span className='green'>li</span>{'>'}</p>

  <p>&nbsp;&nbsp;&nbsp;&nbsp;{'<'}<span className='blueviole'>Link</span> <span className='blue'>to</span>=<span className='blue1'>"/about"</span>{'>'}About{'</'}<span className='blueviole'>Link</span>{'>'}</p>

  <p>&nbsp;&nbsp;&nbsp;{'</'}<span className='green'>li</span>{'>'}</p>

  <p>&nbsp;&nbsp;{'</'}<span className='green'>ul</span>{'>'}</p>

  <p>&nbsp;{'</'}<span className='green'>nav</span>{'>'}</p>

  <p>&nbsp;{'<'}<span className='blueviole'>Route </span><span className='blue'>exact path</span>=<span className='blue1'>"/"</span> <span className='blue'>component</span>={'{Home}  />'}</p>

  <p>&nbsp;{'<'}<span className='blueviole'>Route</span>  <span className='blue'>path</span>=<span className='blue1'>"/about"</span> <span className='blue'>component</span>={'{About}  />'}</p>

  <p>{'</'}<span className='blueviole'>Router</span>{'>'}</p>

  <p>{');'}</p>

  <p><span className='red'>export default</span> App; </p>
</code>

<p>Այս օրինակում մենք ներմուծում(import) ենք անհրաժեշտ բաղադրիչները React Router Dom գրադարանից (մասնավորապես՝ <b>BrowserRouter, Route և Link</b>): Այնուհետև մենք սահմանում ենք երկու պարզ բաղադրիչ մեր Home և մեր About էջերի համար:</p>

<p><b>App</b> բաղադրիչի ներսում մենք ամեն ինչ փաթաթում ենք <b>Router</b> բաղադրիչի մեջ, որն ապահովում է երթուղային համատեքստը հավելվածի մնացած մասի համար: Այնուհետև մենք սահմանում ենք պարզ նավիգացիոն տող՝ օգտագործելով <b>Link</b> բաղադրիչը՝ մեր երկու էջերի միջև նավարկելու համար:</p>

<p>Վերջապես, մենք սահմանում ենք երկու <b>Route</b> բաղադրիչ, որոնք ներկայացնում են <b>Home</b> և <b>About</b> բաղադրիչները` կախված ընթացիկ URL-ից:</p>

<p>React Router Dom 6.4-ը գրադարանի վերջին տարբերակն է, որը թողարկվել է 2022 թվականի փետրվարին: Այս տարբերակի որոշ նոր հնարավորություններ ներառում են՝</p>

<p>Վերջին տարբերակում (v6) որոշ API-ներ և հավաքածուներ փոխվել են, ուստի ես կարող եմ նոր օրինակ բերել՝ օգտագործելով React Router Dom 6.4 տարբերակը.</p>

<p>React Router Dom տարբերակի 6.4-ի օգտագործման օրինակ.</p>  


<code>
  <p><span className='red'>import</span> {'{'} BrowserRouter <span className='red'>as</span> Router, Routes, Route, Link {'}'} <span className='red'>from</span> <span className='blue1'>'react-router-dom'</span>;</p>

  <p>&nbsp;<span className='red'>const</span>  Home = () {'=> <'}<span className='green'>h1</span>{'>'}Home{'</'}<span className='green'>h1</span>{'>;'}</p>

  <p>&nbsp;<span className='red'>const</span> About = () {'=> <'}<span className='green'>h1</span>{'>'}About{'</'}<span className='green'>h1</span>{'>;'}</p>

  <p>&nbsp;<span className='red'>const</span> NotFound = () {'=> <'}<span className='green'>h1</span>{'>'}404 Not Found{'</'}<span className='green'>h1</span>{'>;'}</p>

  <p>&nbsp;<span className='red'>const</span> {'App = () => ( '}</p>

  <p>{'<'}<span className='blueviole'>Router</span>{'>'}</p>

  <p>&nbsp;{'<'}<span className='green'>nav</span>{'>'}</p>

  <p>&nbsp;&nbsp;{'<'}<span className='green'>ul</span>{'>'}</p>

  <p>&nbsp;&nbsp;&nbsp;{'<'}<span className='green'>li</span>{'>'}</p>

  <p>&nbsp;&nbsp;&nbsp;&nbsp;{'<'}<span className='blueviole'>Link</span> <span className='blue'>to</span>=<span className='blue1'>"/"</span>{'>'}Home{'</'}<span className='blueviole'>Link</span>{'>'}</p>

  <p>&nbsp;&nbsp;&nbsp;{'</'}<span className='green'>li</span>{'>'}</p>

  <p>&nbsp;&nbsp;&nbsp;{'<'}<span className='green'>li</span>{'>'}</p>

  <p>&nbsp;&nbsp;&nbsp;&nbsp;{'<'}<span className='blueviole'>Link</span> <span className='blue'>to</span>=<span className='blue1'>"/about"</span>{'>'}About{'</'}<span className='blueviole'>Link</span>{'>'}</p>

  <p>&nbsp;&nbsp;&nbsp;{'</'}<span className='green'>li</span>{'>'}</p>

  <p>&nbsp;&nbsp;{'</'}<span className='green'>ul</span>{'>'}</p>

  <p>&nbsp;{'</'}<span className='green'>nav</span>{'>'}</p>

  <p>{'<'}<span className='blueviole'>Routes</span>{'>'}</p>

  <p>&nbsp;{'<'}<span className='blueviole'>Route</span> <span className='blue'>path</span>=<span className='blue1'>"/"</span> <span className='blue'>element</span>={'{<'}<span className='blueviole'>Home</span> {'/>} />'}</p>

  <p>&nbsp;{'<'}<span className='blueviole'>Route</span> <span className='blue'>path</span>=<span className='blue1'>"/about"</span> <span className='blue'>element</span>={'{<'}<span className='blueviole'>About</span> {'/>} />'}</p>

  <p>&nbsp;{'<'}<span className='blueviole'>Route</span> <span className='blue'>path</span>=<span className='blue1'>"*"</span> <span className='blue'>element</span>={'{<'}<span className='blueviole'>NotFound</span> {'/>} />'}</p>

  <p>{'</'}<span className='blueviole'>Routes</span>{'>'}</p>

  <p>{'</'}<span className='blueviole'>Router</span>{'>'}</p>

  <p>{');'}</p>

  <p><span className='red'>export default</span> App; </p>
</code>


<p>Այս օրինակում մենք օգտագործում ենք React Router Dom-ի նույն հիմնական բաղադրիչները (<b>ինչպիսիք են BrowserRouter, Route, Link</b>), սակայն դրանցից մի քանիսն ունեն մի փոքր այլ սինտաքս:</p>

<p>Օրինակ, մենք այժմ օգտագործում ենք <b>Routes</b> բաղադրիչը` <b>Switch</b> բաղադրիչի փոխարեն մի քանի երթուղիներ խմբավորելու համար: Յուրաքանչյուր երթուղի այժմ ներկայացված է <b>Route</b> տարրով՝ <b>path և element</b> պարամետրերով: <b>path</b> պարամետրը սահմանում է երթուղու URL-ի օրինաչափությունը, իսկ <b>element</b> պարամետրը նշում է բաղադրիչը, որը պետք է ներկայացվի, երբ երթուղին համապատասխանեցվի:</p>

<p>Այս օրինակում մենք նաև ավելացրել ենք <b>NotFound</b> բաղադրիչ, որը ցուցադրվում է, երբ օգտատերը հայտնվում է գոյություն չունեցող էջի վրա:</p>

<p>Ընդհանուր առմամբ, React Router Dom 6-ը ապահովում է React հավելվածներում երթուղիները կարգավորելու ավելի ճկուն և հարմար եղանակ:</p>

<p>1. Եթե ​​դուք օգտագործում եք <b>npm</b>, բացեք տերմինալ և գործարկեք հետևյալ հրամանը՝</p>

<b>npm install react-router-dom</b>

<p>2. Եթե ​​դուք օգտագործում եք <b>yarn</b>, բացեք տերմինալ և գործարկեք հետևյալ հրամանը՝</p>

<b>yarn add react-router-dom</b>

<p>Տեղադրվելուց հետո դուք կարող եք ներմուծել անհրաժեշտ բաղադրիչները <b>react-router-dom</b> փաթեթից, ինչպես ցույց է տրված վերը նշված օրինակներում:</p>

<p>React Router-ի մասին լրացուցիչ տեղեկությունների համար այցելեք նրանց պաշտոնական կայք. <a href="https://reactrouter.com/" target='_blank' > 👉🏼  https://reactrouter.com/.</a></p>

<p>Կայքում դուք կգտնեք React Router-ի օգտագործման համապարփակ ուղեցույց, ներառյալ՝</p>

<p>• React Router-ի և դրա հիմնական հասկացությունների ակնարկ</p>

<p>• Տեղադրման և կազմաձևման հրահանգներ</p>

<p>• Տարբեր օգտագործման դեպքերի և սցենարների օրինակներ</p>

<p>• API-ի փաստաթղթեր յուրաքանչյուր հիմնական բաղադրիչի և օգտակար ծառայությունների համար</p>

<p>• Ընդլայնված թեմաներ, ինչպիսիք են սերվերի կողմից մատուցումը, կոդի բաժանումը և ներկառուցված երթուղիները</p>
   
<p>Փաստաթղթերից բացի, դուք կարող եք նաև գտնել մի շարք օգտակար ռեսուրսներ, ինչպիսիք են համայնքի ֆորումը, GitHub-ի պահոցը վրիպակների մասին հաշվետվությունների և հնարավորությունների հարցումների համար, ինչպես նաև հարակից նախագծերի և հավելումների հավաքածու:</p>
    
<b><p>* Տեքստը գրված է թարգմանչի օգնությամբ։ Եթե սխալ եք հայտնաբերել, խնդրում ենք մեզ տեղյակ պահել *</p></b>
    <div className='ads-container'>  
  {/*  реклама  */}
  </div>
</div>
  )
}

export default AmReact_5;