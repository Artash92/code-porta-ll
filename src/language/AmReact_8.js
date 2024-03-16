import React from 'react'

function AmReact_8() {
  return (
    <div>
      <div className='ad-container'>  
        {/*  реклама  */}
      </div>

      <h1>Redux Thunk</h1>

      <p>Redux Thunk-ը Redux-ի ծրագրային գրադարան է, որը թույլ է տալիս գրել ասինխրոն տրամաբանություն, որը փոխազդում է Redux store-ի հետ: Այն թույլ է տալիս ուղարկել գործողություններ, որոնք պարունակում են ասինխրոն կոդ, ինչպիսիք են API հարցումները կամ այլ կողմնակի էֆեկտները՝ փաթեթավորելով ձեր գործողությունների ստեղծողներին մի ֆունկցիա, որը վերադարձնում է մեկ այլ գործառույթ:</p>

      <p>Ահա մի օրինակ, թե ինչպես կարելի է օգտագործել Redux Thunk-ը React հավելվածում.</p>
    
    <code>
        <p><span className='green'>{"// actions.js "}</span></p>

        <p><span className='red'>import</span> axios <span className='red'>from</span> <span className='blue1'>'axios'</span>; </p>

        <p><span className='red'>export const</span> {"fetchUserRequest = () => ({ "}</p>

        <p>&nbsp;&nbsp;<span className='blue'>type</span>: <span className='blue1'>'FETCH_USER_REQUEST'</span>, </p>

        <p>{"}); "}</p>

        <p><span className='red'>export const</span> {"fetchUserSuccess = (user) => ({ "}</p>

        <p>&nbsp;&nbsp;<span className='blue'>type</span>: <span className='blue1'>'FETCH_USER_SUCCESS'</span>,</p>

        <p>&nbsp;&nbsp;<span className='blue'>payload</span>: user, </p>

        <p>{"}); "}</p>

        <p><span className='red'>export const</span> {"fetchUserError = (error) => ({ "}</p>

        <p>&nbsp;&nbsp;<span className='blue'>type</span>: <span className='blue1'>'FETCH_USER_ERROR'</span>, </p>

        <p>&nbsp;&nbsp;<span className='blue'>payload</span>: error, </p>

        <p>{"}); "}</p>
        
        <p><span className='red'>export const</span> {"fetchUser = (userId) => { "}</p>

        <p>&nbsp;<span className='red'>return</span> {"(dispatch) => { "}</p>

        <p>&nbsp;&nbsp;<span className='blueviole'>dispatch</span>(<span className='blueviole'>fetchUserRequest</span>());</p>

        <p>&nbsp;&nbsp;axios.<span className='blue'>get</span>(` <span className='blue1'>{'https://jsonplaceholder.typicode.com/users/$'}</span>{'{userId}'} `)  </p>

        <p>&nbsp;&nbsp;&nbsp;.<span className='blue'>then</span>{"((response) => {"}</p>

        <p>&nbsp;&nbsp;&nbsp;&nbsp;<span className='red'>const</span> user = response.<span className='blue'>data</span>; </p>

        <p>&nbsp;&nbsp;&nbsp;&nbsp;<span className='blueviole'>dispatch</span>(<span className='blueviole'>fetchUserSuccess</span>(user)); </p>

        <p>{"})"}</p>

        <p>&nbsp;&nbsp;&nbsp;.<span className='blue'>catch</span>{"((error) => {"}</p>

        <p>&nbsp;&nbsp;&nbsp;&nbsp;<span className='blueviole'>dispatch</span>(<span className='blueviole'>fetchUserError</span>(error.<span className='blue'>message</span>)); </p>

        <p>&nbsp;&nbsp;{"});"}</p>

        <p>&nbsp;{"};"}</p>

        <p>{"};"}</p>
    </code>

    <p>Վերոհիշյալ օրինակում մենք սահմանում ենք գործողությունների երեք ստեղծողներ՝ <b>fetchUserRequest, fetchUserSuccess և fetchUserError</b>: Մենք նաև սահմանում ենք գործողությունների ստեղծող <b>fetchUser</b>, որը գործողությունների օբյեկտի փոխարեն ֆունկցիա է վերադարձնում: Այս ֆունկցիան ընդունում է որպես արգումենտ <b>dispatch</b>, որը Redux store-ի <b>dispatch</b> ֆունկցիան է:</p>
     
    <p><b>fetchUser</b> ֆունկցիայի ներսում մենք ուղարկում ենք <b>fetchUserRequest</b> գործողությունը, որը սահմանում է <b>isLoading</b> վիճակը <b>true</b>: Այնուհետև մենք API հարցում ենք կատարում Axios-ի միջոցով և ուղարկում ենք <b>fetchUserSuccess</b> կամ <b>fetchUserError</b> գործողություն՝ կախված API-ի պատասխանից: Այս գործողությունները թարմացնում են Redux store-ը՝ համապատասխանաբար ստացված տվյալներով կամ սխալի հաղորդագրությամբ:</p>
    
    <p>Այս գործողությունների ստեղծողը բաղադրիչում օգտագործելու համար մենք կարող ենք ներմուծել(import) այն և փոխանցել այն <b>dispatch</b> այսպես.</p>    
    
  <code>
      <p><span className='green'>{"// MyComponent.js"}</span></p>

      <p><span className='red'>import</span> {"React, { useEffect }"} <span className='red'>from</span> <span className='blue1'>'react'</span>;</p>

      <p><span className='red'>import</span> {"{ useDispatch, useSelector }"} <span className='red'>from</span> <span className='blue1'>'react-redux'</span>;</p>

      <p><span className='red'>import</span> {"{ fetchUser }"} <span className='red'>from</span> <span className='blue1'>'./actions'</span>; </p>

      <p>&nbsp;<span className='red'>const</span> MyComponent = {'({'} <span className='blue'>userId</span> {'})'} {"=> { "}</p>

      <p>&nbsp;<span className='red'>const</span> dispatch = <span className='blueviole'>useDispatch</span>(); </p>

      <p>&nbsp;<span className='red'>const</span> user = <span className='blueviole'>useSelector</span>(state {'=>'} state.<span className='blue'>user</span>.<span className='blue'>data</span>); </p>

      <p>&nbsp;<span className='red'>const</span> isLoading = <span className='blueviole'>useSelector</span>(state {'=>'} state.<span className='blue'>user</span>.<span className='blue'>isLoading</span>); </p>

      <p>&nbsp;<span className='red'>const</span> error = <span className='blueviole'>useSelector</span>(state {'=>'} state.<span className='blue'>user</span>.<span className='blue'>error</span>);</p>

      <p>&nbsp;<span className='blueviole'>useEffect</span>{"(() => { "}</p>

      <p>&nbsp;&nbsp;<span className='blueviole'>dispatch</span>(<span className='blueviole'>fetchUser</span>(userId));</p>

      <p>&nbsp;{"}, [dispatch, userId]); "}</p>

      <p>&nbsp;<span className='red'>if</span> {"(isLoading) { "}</p>

      <p>&nbsp;&nbsp;<span className='red'>return</span> {'<'}<span className='green'>div</span>{'>'}Loading...{'</'}<span className='green'>div</span>{'>'};</p>

      <p>{" } "}</p>

      <p>&nbsp;<span className='red'>if</span> {"(error) {  "}</p>

      <p>&nbsp;&nbsp;<span className='red'>return</span> {'<'}<span className='green'>div</span>{'>Error: {error}</'}<span className='green'>div</span>{'>'};</p>

      <p>{"}"}</p>

      <p>&nbsp;&nbsp;<span className='red'>return</span> {"("}</p>

      <p>{'<'}<span className='green'>div</span>{'>'}</p>

      <p>&nbsp;{'<'}<span className='green'>h1</span>{'>{'}user.<span className='blue'>name</span>{'}</'}<span className='green'>h1</span>{'>'}</p>

      <p>&nbsp;{'<'}<span className='green'>p</span>{'>{'}user.<span className='blue'>email</span>{'}</'}<span className='green'>p</span>{'>'}</p>
     
      <p>&nbsp;{'<'}<span className='green'>p</span>{'>{'}user.<span className='blue'>phone</span>{'}</'}<span className='green'>p</span>{'>'}</p>
     
      <p>{"</"}<span className='green'>div</span>{">"}</p>

      <p>&nbsp;{");"}</p>

      <p>{"};"}</p>
   </code>

   <p>Վերոնշյալ օրինակում մենք օգտագործում ենք <b>useDispatch</b> և <b>useSelector</b> կեռիկները react-redux գրադարանից՝ Redux store-ի հետ փոխազդելու համար: Մենք ուղարկում ենք <b>fetchUser</b> գործողության ստեղծողին <b>useEffect</b> կեռիկում, որը կկանչվի բաղադրիչը տեղադրելու ժամանակ: Մենք նաև օգտագործում ենք <b>useSelector</b> Redux store-ից համապատասխան տվյալներ առբերելու համար, ինչպիսիք են օգտվողի տվյալները, <b>isLoading</b> և <b>error</b> Ֆլագները:</p>
     
   <p>Ընդհանուր առմամբ, Redux Thunk-ը Redux-ի համար օգտակար միջին ծրագրային գրադարան է, որը թույլ է տալիս գրել ասինխրոն տրամաբանություն, որը փոխազդում է Redux store-ի հետ: Այն կարող է օգնել պարզեցնել ձեր կոդը և այն ավելի պարզ դարձնել ձեր React հավելվածում ասինխրոն գործառույթի ժամանակ:</p>
     
     <h3>Redux-Observable</h3>
    
     <p>Redux-Observable-ը Redux-ի միջին ծրագիր է, որը թույլ է տալիս ռեակտիվ ծրագրավորում Redux հավելվածներում: Այն թույլ է տալիս ծրագրավորողներին կառավարել բարդ ասինխրոն գործողություններ և իրադարձություններ դեկլարատիվ, բաղադրելի և հեշտությամբ փորձարկվող եղանակով՝ օգտագործելով RxJS՝ ռեակտիվ ծրագրավորման գրադարանը:</p>
    
     <p>Redux-Observable-ի միջոցով ծրագրավորողները կարող են սահմանել "epics", որոնք գործառույթներ են, որոնք լսում են կոնկրետ գործողություններ և այնուհետև արձագանքում դրանց նոր գործողությունների հոսքով: Այս epics-ները դիտելի օբյեկտներ են, որոնք ստանում են իրադարձությունների հոսք և կարող են փոխակերպել, զտել կամ միաձուլել դրանք դեկլարատիվ կերպով:</p>
    
     <p>Redux-Observable-ի օգտագործման օրինակ.</p>

<code>
  <p><span className='red'>import</span> {'{ createStore, applyMiddleware } '} <span className='red'>from</span> <span className='blue1'>'redux'</span>;</p>

  <p><span className='red'>import</span>  {'{ createEpicMiddleware, combineEpics }'} <span className='red'>from</span> <span className='blue1'>'redux-observable'</span>;</p>

  <p><span className='red'>import</span> {'{ ajax }'} <span className='red'>from</span> <span className='blue1'>'rxjs/ajax'</span>;  </p>

  <p><span className='red'>import</span> {'{ mergeMap, map, catchError }'} <span className='red'>from</span> <span className='blue1'>'rxjs/operators'</span>;</p>

  <p>&nbsp;<span className='red'>const</span> {"pingEpic = action$ =>"}</p>

  <p>&nbsp;&nbsp;action$.<span className='blue'>ofType</span>(<span className='blue1'>'PING'</span>)</p>

  <p>&nbsp;&nbsp;.<span className='blue'>mergeMap</span>{"(action =>"}</p>

  <p>&nbsp;&nbsp;&nbsp;ajax.<span className='blue'>getJSON</span>(<span className='blue1'>'/api/ping'</span>)</p>

  <p>&nbsp;&nbsp;&nbsp;.<span className='blue'>map</span>{'('}response {'=> ({ '}<span className='blue'>type</span>: <span className='blue1'>'PONG'</span>, <span className='blue'>payload</span>: response {'}))'}  </p>

  <p>&nbsp;&nbsp;&nbsp;.<span className='blue'>catch</span>{'(error => ({'} <span className='blue'>type</span>: <span className='blue1'>'PING_ERROR'</span>, <span className='blue'>payload</span>: error.<span className='blue'>message</span> {'}))'}</p>

  <p>{");"}</p>

  <p>&nbsp;<span className='red'>const</span> rootEpic = <span className='blueviole'>combineEpics</span>{'('}</p>

  <p>&nbsp;&nbsp;{"pingEpic, "}</p>

  <p>&nbsp;&nbsp;<span className='green'>{"// more epics... "}</span></p>

  <p>{"); "}</p>

  <p>&nbsp;<span className='red'>const</span> epicMiddleware = <span className='blueviole'>createEpicMiddleware</span>();</p>

  <p>&nbsp;<span className='red'>const</span> store = <span className='blueviole'>createStore</span>{'('}</p>

  <p>&nbsp;&nbsp;{"reducer, "}</p>

  <p>&nbsp;&nbsp;<span className='blueviole'>applyMiddleware</span>(epicMiddleware)</p>

  <p>{");"}</p>

  <p>epicMiddleware.<span className='blue'>run</span>(rootEpic); </p>
</code>

<p>Այս օրինակում մենք սահմանում ենք epic, որը կոչվում է <b>pingEpic</b>, որը լսում է «PING» գործողությունը և այնուհետև AJAX հարցում է ուղարկում սերվերին՝ այն ping ուղարկելու համար: Եթե ​​հարցումը հաջողվի, այն կուղարկի «PONG» տիպի գործողություն՝ պատասխանը որպես օգտակար բեռ: Եթե ​​հարցումը ձախողվի, այն կուղարկի «PING_ERROR» տիպի գործողություն՝ որպես օգտակար բեռ:</p>

<p>Այնուհետև մենք միավորում ենք մեր բոլոր epic-ները մեկ <b>rootEpic</b>-ի մեջ և ստեղծում <b>createEpicMiddleware()</b>-ի օրինակ՝ որպես միջին ծրագիր մեր Redux-ի պահոցում օգտագործելու համար: Ի վերջո, մենք կիրառում ենք middleware ծրագիրը պահեստում և գործարկում ենք արմատային epic-ը` օգտագործելով <b>epicMiddleware.run(rootEpic)</b>:</p>

<p>Ընդհանուր առմամբ, Redux-Observable-ը հզոր գործիք է Redux հավելվածներում բարդ ասինխրոն գործողությունների և իրադարձությունների կառավարման համար: Այն ապահովում է ճկուն և դեկլարատիվ մոտեցում ասինխրոն գործառույթը կառավարելու համար՝ օգտագործելով ռեակտիվ ծրագրավորման հասկացությունները:</p>
    
<b><p>* Տեքստը գրված է թարգմանչի օգնությամբ։ Եթե սխալ եք հայտնաբերել, խնդրում ենք մեզ տեղյակ պահել *</p></b>
    
    <div className='ads-container'>  
  {/*  реклама  */}
  </div>
    </div>
  )
}

export default AmReact_8;