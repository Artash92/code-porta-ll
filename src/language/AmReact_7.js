import React from 'react'

function AmReact_7() {
  return (
    <div>
      <div className='ad-container'>  
        {/*  реклама  */}
      </div>
      
       <h1>Redux</h1>
   
       <p>Redux-ը վիճակի ​​կառավարման գրադարան է JavaScript հավելվածների համար: Այն օգնում է կանխատեսելի կերպով կառավարել ձեր հավելվածի վիճակը՝ հեշտացնելով ձեր հավելվածում տվյալների հոսքի վերլուծությունը: Redux-ի միջոցով դուք պահում եք ձեր հավելվածի վիճակը մեկ օբյեկտի մեջ, որը կոչվում է store և օգտագործում գործողություններ և reducers՝ այդ վիճակը փոխելու համար:</p>
   
       <p>Ահա թե ինչպես է այն աշխատում. Երբ ցանկանում եք փոխել ձեր հավելվածի վիճակը, դուք ուղարկում եք գործողություն (action): Գործողությունը պարզ JavaScript օբյեկտ է, որը նկարագրում է մի բան, որը տեղի է ունեցել ձեր հավելվածում: Օրինակ՝ կարող եք գործողություն ուղարկել՝ ցուցակում նոր տարր ավելացնելու կամ օգտվողի պրոֆիլի տեղեկությունները թարմացնելու համար:</p>
   
       <p>Reducers-ը գործառույթներ են, որոնք ընդունում են ձեր հավելվածի ընթացիկ վիճակը և գործողությունները և վերադարձնում նոր վիճակ: Reducers-Ները մաքուր գործառույթներ(functions) են, ինչը նշանակում է, որ նրանք չունեն կողմնակի ազդեցություններ և միշտ վերադարձնում են նույն արդյունքը տվյալ մուտքագրման համար:</p>
   
       <p>React-Redux-ը գրադարան է, որը միավորում է Redux-ը React-ի հետ: Այն ապահովում է ձեր React բաղադրիչները Redux store-ին միացնելու միջոց, որպեսզի կարողանաք մուտք գործել և փոփոխել ձեր հավելվածի վիճակը ձեր բաղադրիչներից: React-Redux-ն ապահովում է երկու հիմնական բաղադրիչ՝ Provider և connect.</p>
   
       <p>Provider բաղադրիչն օգտագործվում է ձեր ամբողջ React հավելվածը փաթեթավորելու համար: Այն վերցնում է պահեստավորման օբյեկտը որպես պահոց և հասանելի է դարձնում այդ պահոցը ձեր հավելվածի բոլոր բաղադրիչներին:</p>
   
       <p>1. Տեղադրեք անհրաժեշտ փաթեթները՝</p>

        <p><b>npm install redux react-redux</b></p>

        <p>2. Ստեղծեք Redux store.</p>
    
   <code>
      <p><span className='red'>import</span> {'{ createStore }'} <span className='red'>from</span> <span className='blue1'>'redux'</span>;</p>
      
      <p><span className='red'>import</span> rootReducer <span className='red'>from</span> <span className='blue1'>'./reducers'</span>; </p>

      <p><span className='red'>const</span> store = <span className='blueviole'>createStore</span>(rootReducer); </p>
    </code>

      <p>3. Ստեղծեք Redux actions.</p>

   <code>
      <p><span className='red'>export const</span> {"increment = () => {"}</p>
     
      <p>&nbsp;<span className='red'>return</span>  {"{ "}</p>

      <p>&nbsp;&nbsp;<span className='blue'>type</span> : <span className='blue1'>'INCREMENT'</span></p>

      <p>&nbsp;{" } "}</p>

      <p>{" } "}</p>

      <p><span className='red'>export const</span>  {"decrement = () => { "}</p>

      <p>&nbsp;<span className='red'>return</span>  {" { "}</p>

      <p>&nbsp;&nbsp;<span className='blue'>type</span> : <span className='blue1'>'DECREMENT'</span></p>

      <p>&nbsp;{" } "}</p>

      <p>{" } "}</p>
   </code>

   <p>4. Ստեղծեք Redux reducers.</p>

  <code>
    <p><span className='red'>const</span> counterReducer = {'('}state = <span className='blue1'>0</span>, {"action) => { "}</p>

    <p>&nbsp;<span className='red'>switch</span> (action.<span className='blue'>type</span>) {"{ "}</p>

    <p>&nbsp;&nbsp;<span className='red'>case</span> <span className='blue1'>'INCREMENT'</span>:</p>

    <p>&nbsp;&nbsp;&nbsp;<span className='red'>return</span>  state + <span className='blue1'>1</span>;</p>

    <p>&nbsp;&nbsp;<span className='red'>case</span> <span className='blue1'>'DECREMENT'</span>:</p>

    <p>&nbsp;&nbsp;&nbsp;<span className='red'>return</span> state - <span className='blue1'>1</span>; </p>

    <p>&nbsp;&nbsp;<span className='red'>default</span>: </p>

    <p>&nbsp;&nbsp;&nbsp;<span className='red'>return</span> state; </p>

    <p>&nbsp;{" }"}</p>

    <p>{"} "}</p>

    <p><span className='red'>export default</span> counterReducer;</p>
  </code>

  <p>5. Redux-ը միացրեք ձեր React բաղադրիչին, օգտագործելով React-Redux գրադարանի <b>connect</b> ֆունկցիան.</p>   

  <code>
    <p><span className='red'>import</span> {'{ connect }'} <span className='red'>from</span> <span className='blue1'>'react-redux'</span>; </p>

    <p><span className='red'>import</span>  {'{ increment, decrement }'} <span className='red'>from</span> <span className='blue1'>'./actions'</span>;</p>

    <p>&nbsp;<span className='red'>const</span> {"Counter = (props) => { "}</p>

    <p>&nbsp;<span className='red'>return</span> {'('}</p>

    <p>{'<'}<span className='green'>div</span>{'>'}</p>

    <p>&nbsp;&nbsp;{'<'}<span className='green'>h1</span>{'>{'}props.<span className='blue'>count</span>{'}</'}<span className='green'>h1</span>{'>'}</p>

    <p>&nbsp;&nbsp;{'<'}<span className='green'>button</span> <span className='blue'>onClick</span>={'{'}props.<span className='blue'>increment</span>{'}>'}+{'</'}<span className='green'>button</span>{'>'}</p>

    <p>&nbsp;&nbsp;{'<'}<span className='green'>button</span> <span className='blue'>onClick</span>={'{'}props.<span className='blue'>decrement</span>{'}>-</'}<span className='green'>button</span>{'>'}</p>

    <p>{"</"}<span className='green'>div</span>{">"}</p>

    <p>&nbsp;{");"}</p>

    <p>{"} "}</p>

    <p>&nbsp;<span className='red'>const</span> {"mapStateToProps = (state) => {"}</p>

    <p>&nbsp;<span className='red'>return</span> {"{ "}</p>

    <p>&nbsp;&nbsp;&nbsp;<span className='blue'>count</span>: state.<span className='blue'>counter</span></p>

    <p>&nbsp;{"} "}</p>

    <p>{"} "}</p>

    <p>&nbsp;<span className='red'>const</span> {"mapDispatchToProps = (dispatch) => { "}</p>

    <p>&nbsp;<span className='red'>return</span> {"{ "}</p>

    <p>&nbsp;&nbsp;&nbsp;<span className='blue'>increment</span>: {"() =>"} <span className='blueviole'>dispatch</span>(<span className='blueviole'>increment</span>()), </p>

    <p>&nbsp;&nbsp;&nbsp;<span className='blue'>decrement</span>: {"() =>"} <span className='blueviole'>dispatch</span>(<span className='blueviole'>decrement</span>())</p>

    <p>&nbsp;{"}"}</p>

    <p>{"}"}</p>

    <p><span className='red'>export default</span> <span className='blueviole'>connect</span>(mapStateToProps, mapDispatchToProps)(Counter); </p>
  </code>

   <p>6. Ձեր հավելվածը փաթեթավորեք <b>Provider</b> բաղադրիչով, որպեսզի Redux store հասանելի դառնա բոլոր բաղադրիչների համար.</p>
    
  <code> 
      <p><span className='red'>import</span> {"{ Provider } "} <span className='red'>from</span> <span className='blue1'>'react-redux'</span>;</p>

      <p><span className='red'>import</span> store <span className='red'>from</span> <span className='blue1'>'./store'</span>;</p>

      <p><span className='red'>import</span> Counter <span className='red'>from</span> <span className='blue1'>'./Counter'</span>; </p>

      <p>&nbsp;<span className='red'>const</span> {"App = () => { "}</p>

      <p>&nbsp;<span className='red'>return</span> {"("}</p>

      <p>{"<"}<span className='blueviole'>Provider</span> <span className='blue'>store</span>={"{store}> "}</p>

      <p>&nbsp;&nbsp;{"<"}<span className='blueviole'>Counter</span> {"/>"}</p>

      <p>{"</"}<span className='blueviole'>Provider</span>{">"}</p>

      <p>&nbsp;{");"}</p>

      <p>{"}"}</p>

      <p><span className='red'>export default</span> App;</p>
  </code>
    
    <p>Սա հիմնական օրինակ է, թե ինչպես օգտագործել Redux-ը և React-Redux-ը React հավելվածում: Հիշեք, որ սա միայն այսբերգի գագաթն է, և Redux-ի և նրա էկոհամակարգի մասին շատ ավելին կարելի է իմանալ:</p>
    
    <p>Կան մի քանի լրացուցիչ բաներ, որոնց պետք է ուշադրություն դարձնել React հավելվածում Redux-ն օգտագործելիս.</p>
    
    <p>1. Redux Middleware. Middleware-ը Redux-ի գործողությունները փոփոխելու կամ ընդհատելու միջոց է՝ նախքան դրանք մշակվելը ռեդյուսերների կողմից: Middleware-ը կարող է օգտագործվել այնպիսի խնդիրների համար, ինչպիսիք են գրանցումը, ասինխրոն հարցումները և այլն: Redux-ի միջին ծրագրակազմի որոշ հայտնի տարբերակներ ներառում են <b>redux-thunk, redux-saga և redux-observable</b>:</p>
    
    <p>2. Redux Developer Tools. Redux Developer Tools-ը բրաուզերի ընդլայնում է, որն ապահովում է օգտակար ինտերֆեյս Redux store վրիպազերծելու և ստուգելու համար: Այն թույլ է տալիս դիտել գործողությունները և վիճակի փոփոխությունները, ինչպես նաև հնարավորություն է տալիս վրիպազերծել ժամանակի հետընթացով:</p>
    
    <p>3. Redux Սելեկտորներ. Սելեկտորները գործառույթներ են, որոնք հայտնաբերում են որոշակի տվյալներ Redux store-ից: Դրանք կարող են օգտագործվել ստացված տվյալները հաշվարկելու, տվյալները զտելու և փոխակերպելու համար և շատ ավելին: Սելեկտորները կարող են օգնել պարզեցնել ձեր բաղադրիչները՝ տալով նրանց միայն անհրաժեշտ տվյալները՝ առանց անհանգստանալու պահեստավորման կառուցվածքի մասին:</p>
    
    <p>4. Redux ducks. Ducks-ը Redux կոդը կազմակերպելու առաջարկ է մոդուլների մեջ, որոնք պարունակում են գործողության բոլոր տեսակները, գործողությունների ստեղծողներ և reducers-ներ որոշակի գործառույթի կամ շրջանակի համար: Այս մոտեցումը կարող է օգնել պարզեցնել ձեր կոդը և հեշտացնել այն պահպանելը:</p>
    
    <p>Սրանք ընդամենը մի քանի լրացուցիչ թեմաներ են, որոնք կարող եք սովորել Redux-ի հետ աշխատելիս: Redux-ի էկոհամակարգում կան բազմաթիվ այլ գրադարաններ և գործիքներ, ուստի կարևոր է ժամանակ տրամադրել դրանք ուսումնասիրելու և որոշել, թե որոնք են լավագույնը ձեր նախագծի համար:</p>
    
    
    <b><p>* Տեքստը գրված է թարգմանչի օգնությամբ։ Եթե սխալ եք հայտնաբերել, խնդրում ենք մեզ տեղյակ պահել *</p></b>
    
    <div className='ads-container'>  
  {/*  реклама  */}
  </div>
    </div>
  )
}

export default AmReact_7;