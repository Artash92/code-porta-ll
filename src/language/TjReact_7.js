import React from 'react';

function TjReact_7() {
  return (
    <div>
      <div className='ad-container'>  
          {/*  реклама  */}
        </div>

<h1>Redux</h1>
   
<p>Redux китобхонаи идоракунии давлатӣ барои барномаҳои JavaScript мебошад. Он ба идоракунии ҳолати барномаи шумо ба таври пешгӯинашаванда кӯмак мекунад, ки дар бораи ҷараёни маълумот дар замимаи шумо мулоҳиза карданро осонтар мекунад. Бо Redux, шумо ҳолати аризаи худро дар як объекте бо номи мағоза нигоҳ медоред ва барои тағир додани ин ҳолат actions ва редукторҳоро истифода мебаред</p>
   
   <p>Ин чӣ гуна кор мекунад: Вақте ки шумо мехоҳед ҳолати аризаи худро тағир диҳед, шумо амал мефиристед. Ин амал як объекти оддии JavaScript мебошад, ки он чиро, ки дар замимаи шумо рух додааст, тасвир мекунад. Масалан, шумо метавонед амалеро барои илова кардани ашёи нав ба рӯйхат фиристед ё маълумоти профили корбарро навсозӣ кунед.</p>
  
   <p>Reducers функсияҳое мебошанд, ки ҳолати кунунии замимаи шумо ва амалро мегиранд ва ҳолати навро бармегардонанд. Редукторҳо функсияҳои холис мебошанд, яъне онҳо ягон таъсири тараф надоранд ва онҳо ҳамеша як натиҷаро барои вуруди додашуда бармегардонанд.</p>
  
   <p>React-Redux китобхонаест, ки Redux-ро бо React муттаҳид мекунад. Он роҳи пайваст кардани ҷузъҳои React-и худро ба мағозаи Redux фароҳам меорад, то шумо тавонед ҳолати барномаи худро аз ҷузъҳои худ дастрас ва тағир диҳед. React-Redux ду ҷузъи калидиро таъмин мекунад: Provider ва connect.</p>
  
   <p>Ҷузъи Provider барои фарогирии тамоми барномаи React-и шумо истифода мешавад. Он объекти мағозаро ҳамчун такягоҳ мегирад ва он мағозаро барои ҳама ҷузъҳои замимаи шумо дастрас мекунад.</p>
  
   <p>1. Бастаҳои лозимиро насб кунед:</p>

   <b>npm install redux react-redux</b>

   <p>2. Эҷоди Redux store:</p>

    <code>
      <p><span className='red'>import</span> {'{ createStore }'} <span className='red'>from</span> <span className='blue1'>'redux'</span>;</p>
      
      <p><span className='red'>import</span> rootReducer <span className='red'>from</span> <span className='blue1'>'./reducers'</span>; </p>

      <p><span className='red'>const</span> store = <span className='blueviole'>createStore</span>(rootReducer); </p>
    </code>

    <p>3. Эҷоди Redux action:</p>

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

   <p>4. Эҷоди Redux reducers:</p>

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

  <p>5. Redux-ро ба ҷузъи React бо истифода аз функсияи <b>connect</b> React-Redux пайваст кунед:</p>

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

  <p>6. Барномаи худро бо ҷузъи <b>Provider</b> печонед, то мағозаи Redux барои ҳама ҷузъҳо дастрас гардад:</p>

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

    <p>Ин як мисоли асосии истифодаи Redux ва React-Redux дар замимаи React мебошад. Дар хотир доред, ки ин танҳо нӯги айсберг аст ва дар бораи Redux ва экосистемаи он чизҳои зиёдеро омӯхтан лозим аст.</p>

<p>Чанд чизҳои дигаре ҳастанд, ки ҳангоми истифодаи Redux дар барномаи React дар хотир бояд дошт:</p>

<p>1. Redux middleware: Миёнаравӣ як роҳи тағир додан ё боздоштани амалҳои Redux пеш аз расидан ба редукторҳо мебошад. Миёнаравӣ метавонад барои вазифаҳо ба монанди сабти ном, дархостҳои асинхронӣ ва ғайра истифода шавад. Баъзе вариантҳои маъмули миёнаравӣ барои Redux иборатанд аз <b>redux-thunk, redux-saga ва redux-observable</b>.</p>.

<p>2. Redux devtools: Redux devtools як тавсеаи браузер аст, ки интерфейси муфидро барои ислоҳ ва тафтиши Redux store таъмин мекунад. Он ба шумо имкон медиҳад, ки амалҳо ва ҳолати тағиротро тафтиш кунед ва инчунин функсияи ислоҳи ислоҳи вақтро таъмин кунед.</p>

<p>3. Redux selectors: Интихобкунандагон функсияҳое мебошанд, ки қисмҳои мушаххаси маълумотро аз мағозаи Redux истихроҷ мекунанд. Онҳо метавонанд барои ҳисоб кардани маълумоти ҳосилшуда, филтр ва табдил додани маълумот ва ғайра истифода шаванд. Интихобкунандагон метавонанд ба содда кардани ҷузъҳои шумо тавассути пешниҳоди маълумоти дақиқи онҳо, бидуни ташвиш дар бораи шакли store кӯмак расонанд.</p>

<p>4. Ducks Redux: Ducks пешниҳодест барои ташкили рамзи Redux ба модулҳо, ки дорои ҳама намудҳои марбути action, эҷодкунандагони амал ва редукторҳо барои хусусият ё домени мушаххас мебошанд. Ин равиш метавонад ба содда кардани пойгоҳи коди шумо ва нигоҳдории он осонтар гардад.</p>

<p>Инҳо танҳо чанде аз мавзӯъҳои иловагӣ мебошанд, ки шумо ҳангоми кор бо Redux омӯхтан мехоҳед. Дар экосистемаи Redux бисёр китобхонаҳо ва абзорҳои дигар мавҷуданд, аз ин рӯ муҳим аст, ки вақт ҷудо карда дар бораи онҳо маълумот гиред ва муайян кунед, ки кадоме аз онҳо барои лоиҳаи шумо мувофиқтаранд.</p>

<b><p>* Матн бо ёрии тарчумон навишта шудааст. Агар шумо хатое пайдо кунед, лутфан ба мо хабар диҳед *</p></b>
    
    <div className='ads-container'>  
  {/*  реклама  */}
</div>
    </div>
  )
}

export default TjReact_7;