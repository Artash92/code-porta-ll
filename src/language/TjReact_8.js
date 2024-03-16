import React from 'react';

function TjReact_8() {
  return (
    <div>
      <div className='ad-container'>  
          {/*  реклама  */}
        </div>
      
      <h1>Redux Thunk</h1>
      
      <p>Redux Thunk як китобхонаи миёнарав барои Redux аст, ки ба шумо имкон медиҳад мантиқи асинкро нависед, ки бо мағозаи Redux ҳамкорӣ мекунад. Он ба шумо имкон медиҳад, ки амалҳоеро, ки дорои рамзи асинхронӣ ҳастанд, ба мисли дархостҳои API ё дигар эффектҳои номатлуб, тавассути печонидани эҷодкорони амали худ дар функсияе, ки вазифаи дигарро бармегардонад, интиқол диҳед.</p>

      <p>Ин ҷо мисоли он аст, ки чӣ тавр Redux Thunk-ро дар барномаи React истифода бурдан мумкин аст:</p>

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

    <p>Дар мисоли боло мо се эҷодкунандаи амалро муайян мекунем: <b>fetchUserRequest, fetchUserSuccess ва fetchUserError</b>. Мо инчунин эҷодкунандаи амали <b>fetchUser</b>-ро муайян мекунем, ки ба ҷои объекти амал функсияро бармегардонад. Ин функсия <b>dispatch</b> -ро ҳамчун аргумент мегирад, ки он функсияи <b>диспетчер</b>-и мағозаи Redux мебошад.</p>

<p>Дар дохили функсияи <b>fetchUser</b> мо <b>fetchUserRequest</b> action -ро мефиристем, ки ҳолати <b>isLoading</b> -ро ба <b>true</b> муқаррар мекунад. Пас аз он мо бо истифода аз Axios занги API мекунем ва дар асоси посухи API амалҳои <b>fetchUserSuccess ё fetchUserError</b>-ро мефиристем. Ин амалҳо мағозаи Redux-ро бо маълумоти гирифташуда ё паёми хатогӣ навсозӣ мекунанд.</p>

<p>Барои истифодаи ин офаринандаи action дар ҷузъ, мо метавонем онро ворид кунем ва онро ба <b>dispatch</b> чунин интиқол диҳем:</p>
    
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

<p>Дар мисоли боло мо барои ҳамкорӣ бо мағозаи Redux қалмоқҳои useDispatch ва useSelector аз китобхонаи react-redux истифода мебарем. Мо офаринандаи амали fetchUser-ро дар қалмоқчаи useEffect мефиристем, ки ҳангоми васлшавии ҷузъ даъват карда мешавад. Мо инчунин useSelector-ро барои истихроҷи қисмҳои дахлдори додаҳо аз Redux store, ба монанди маълумоти корбар ва парчамҳои isLoading ва хатогиҳо истифода мебарем.</p>

<p>Дар маҷмӯъ, Redux Thunk як китобхонаи миёнаравии муфид барои Redux мебошад, ки ба шумо имкон медиҳад мантиқи асинкро нависед, ки бо мағозаи Redux ҳамкорӣ мекунад. Он метавонад ба содда кардани коди шумо ва осон кардани мулоҳиза дар бораи рафтори асинхронӣ дар барномаи React-и шумо кӯмак кунад.</p>

<h3>Redux-Observable</h3>

<p>Redux-Observable миёнаравӣ барои Redux мебошад, ки имкон медиҳад, ки барномасозии реактивиро дар замимаҳои Redux истифода барад. Он ба таҳиягарон имкон медиҳад, ки амалҳо ва рӯйдодҳои мураккаби асинхронӣ бо роҳи декларативӣ, таркибӣ ва озмоиши осон бо истифода аз RxJS, китобхонаи барномасозии реактивиро идора кунанд.</p>

<p>Бо Redux-Observable, таҳиягарон метавонанд "epics" -ро муайян кунанд, ки функсияҳое мебошанд, ки амалҳои муайянро гӯш мекунанд ва сипас бо ҷараёни амалҳои нав ба онҳо вокуниш нишон медиҳанд. Ин эпикҳо мушоҳидашавандаанд, ки функсияҳое мебошанд, ки ҷараёни рӯйдодҳоро мегиранд ва метавонанд онҳоро ба таври декларативӣ табдил, филтр ё якҷоя кунанд.</p>

<p>Инак як мисоли тарзи истифодаи Redux-Observable:</p>

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

<p>Дар ин мисол, мо эпикро бо номи <b>pingEpic</b> муайян мекунем, ки амали навъи "PING"-ро мешунавад ва сипас ба сервер дархости AJAX барои пинг кардани он медиҳад. Агар дархост бомуваффақият бошад, он амали навъи "PONG"-ро бо сарбории посух мефиристад. Агар дархост иҷро нашавад, он dispatches як action-и навъи "PING_ERROR" бо паёми хатогӣ ҳамчун сарбории пардохтӣ мешавад.</p>

<p>Пас мо ҳама эпикҳои худро ба як <b>rootEpic</b> муттаҳид мекунем ва як мисоли <b>createEpicMiddleware()</b>-ро эҷод мекунем, то дар мағозаи Redux-и худ ҳамчун миёнарав истифода барем. Дар ниҳоят, мо миёнаравро ба мағоза истифода мебарем ва эпикии решаро бо <b>epicMiddleware.run(rootEpic)</b> иҷро мекунем.</p>
   
<p>Дар маҷмӯъ, Redux-Observable воситаи пурқувват барои коркарди амалҳо ва рӯйдодҳои мураккаби асинхронӣ дар замимаҳои Redux мебошад. Он роҳи фасеҳ ва декларативии идоракунии рафтори асинкро бо истифода аз консепсияҳои барномасозии реактивиро таъмин мекунад.</p>
    
<b><p>* Матн бо ёрии тарчумон навишта шудааст. Агар шумо хатое пайдо кунед, лутфан ба мо хабар диҳед *</p></b>
    
    <div className='ads-container'>  
  {/*  реклама  */}
</div>
  </div>
  )
}

export default TjReact_8;