import React from 'react';

function TjReact_5() {
  return (
    <div>
      <div className='ad-container'>  
          {/*  реклама  */}
        </div>
        
       <h1>React Router DOM</h1>

       <p>React Router Dom китобхонаи маъмулест, ки дар барномаҳои React барои идоракунии масир аз ҷониби муштарӣ истифода мешавад. Он ба таҳиягарон имкон медиҳад, ки барои ҷузъҳои гуногун масирҳои гуногун эҷод кунанд ва онҳоро дар асоси URL-и ҷорӣ гардонанд. Ин таҷрибаи корбарро осонтар ва бефосила таъмин мекунад, зеро корбарон метавонанд бидуни дубора боркунии тамоми саҳифа дар саҳифаҳо ва ҷузъҳои гуногун паймоиш кунанд.</p>

<p>React Router Dom ба китобхонаи React Router асос ёфтааст ва махсусан барои истифода дар браузер тарҳрезӣ шудааст. Он API History-и браузерро барои идора кардани URL ва нигоҳ доштани интерфейси корбар дар ҳамоҳангӣ бо URL-и ҷорӣ истифода мебарад. Он инчунин равиши декларативиро барои муайян кардани хатсайрҳо таъмин намуда, идоракунии барномаҳои мураккабро бо масирҳои сершумор ва ҷузъҳои лона гузошташударо осон мекунад.</p>

<p>Баъзе хусусиятҳои асосии React Router Dom иборатанд аз:</p>

<p> • Масири декларативӣ: Шумо метавонед масирҳои худро ҳамчун ҷузъҳои JSX муайян кунед, ки фаҳмидан ва идоракунии мантиқи масирро осон мекунад.</p>

<p> • Хатсайрҳои дохилӣ: Шумо метавонед хатсайрҳоро дар дохили дигар хатсайрҳо ҷойгир кунед, ки имкон медиҳад сенарияҳои масир бештар мураккабтар шаванд</p>

<p> • Параметрҳои масир: Шумо метавонед параметрҳои динамикиро дар масирҳои худ муайян кунед, ки ба шумо имкон медиҳад, ки маълумотро байни ҷузъҳо дар асоси URL-и ҷорӣ интиқол диҳед.</p>

<p> • Идоракунии таърих: React Router Dom асбобҳоро барои идоракунии таърихи браузер таъмин мекунад, ки ба шумо имкон медиҳад ба таври барномавӣ дар байни саҳифаҳо паймоиш кунед ва паймоиши пеш/қафоро идора кунед. </p>
 
<p>Инак як мисоли оддии он аст, ки чӣ тавр React Router Dom-ро дар барномаи React истифода бурдан мумкин аст: <b>(версияи кӯҳна)v5</b></p>

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

<p>Дар ин мисол, мо ҷузъҳои заруриро аз React Router Dom ворид мекунем (махсусан, <b>BrowserRouter, Route ва Link</b>). Сипас, мо ду ҷузъи оддиро барои хона ва дар бораи саҳифаҳои худ муайян мекунем.</p>

<p>Дар дохили ҷузъи <b>App</b>, мо ҳама чизро дар як ҷузъи <b>Router</b> мепӯшем, ки контексти масирро барои қисми боқимондаи барнома таъмин мекунад. Сипас, мо бо истифода аз ҷузъи <b>Link</b> як сатри оддиро муайян мекунем, то дар байни ду саҳифаи мо паймоиш кунем.</p>

<p>Дар ниҳоят, мо ду ҷузъи <b>Route</b>-ро муайян мекунем, ки ҷузъҳои <b>Home ва About</b>-ро дар асоси URL-и ҷорӣ таъмин мекунанд.</p>

<p>React Router Dom 6.4 версияи охирини китобхона аст, ки моҳи феврали соли 2022 бароварда шудааст. Баъзе аз хусусиятҳои нави ин версия иборатанд аз:</p>

<p>Нусхаи охирини (v6) ба баъзе APIҳо ва коллексияҳо тағйирот ворид кардааст, бинобар ин ман метавонам бо истифода аз версияи React Router Dom 6.4 мисоли нав интихоб кунам:</p>

<p>Инак як мисол бо истифода аз версияи React Router Dom 6.4:</p>

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

<p>Дар ин мисол, мо ҳамон ҷузъҳои асосии React Router Dom-ро истифода мебарем (<b>ба монанди BrowserRouter, Route, Link</b>), аммо баъзеи онҳо синтаксиси каме дигар доранд.</p>

<p>Масалан, ҳоло мо ҷузъҳои <b>Routes</b> -ро ба ҷои <b>Switch</b> барои гурӯҳбандии хатсайрҳои сершумор истифода мебарем. Ҳар як масир ҳоло бо унсури <b>Route</b> бо реквизитҳои <b>path ва element</b> муаррифӣ мешавад. Таклифи <b>path</b> намунаи URL-ро барои масир муқаррар мекунад ва <b>element</b> ҷузъе мебошад, ки ҳангоми мувофиқати масир намоиш дода мешавад.</p>

<p>Дар ин мисол, мо инчунин ҷузъи <b>NotFound</b> -ро илова кардем, ки ҳангоми фуруд омадани корбар ба саҳифаи мавҷуда намоиш дода намешавад.</p>

<p>Дар маҷмӯъ, React Router Dom 6 роҳи чандиртар ва қулайро барои коркарди масир дар барномаҳои React таъмин мекунад.</p>
    
<p>1. Агар шумо <b>npm</b>-ро истифода баред, терминали худро кушоед ва фармони зеринро иҷро кунед:</p>

<b>npm install react-router-dom</b>

<p>2. Агар шумо <b>yarn</b> -ро истифода баред, терминали худро кушоед ва фармони зеринро иҷро кунед:</p>

<b>yarn add react-router-dom</b> 

<p>Пас аз насб, шумо метавонед ҷузъҳои заруриро аз бастаи <b>react-router-dom</b> ворид кунед, тавре ки ман дар мисолҳои боло нишон додам</p>

<p> Барои маълумоти бештар дар бораи React Router, лутфан ба вебсайти расмии онҳо муроҷиат кунед: <a href="https://reactrouter.com/" target='_blank' > 👉🏼 https://reactrouter.com/.</a ></p>
    
<p>Дар вебсайт шумо дастури ҳамаҷониба барои истифодаи React Router пайдо мекунед, аз ҷумла:</p>
    
<p>• Баррасии React Router ва мафҳумҳои асосии он</p>

<p>• Дастур оид ба насб ва танзим</p>

<p>• Намунаҳои ҳолатҳои истифода ва сенарияҳои гуногун</p>

<p>• Ҳуҷҷатҳои API барои ҳар як ҷузъҳои асосӣ ва утилитаҳо</p>

<p>• Мавзӯъҳои пешрафта, ба монанди визуалии сервер, тақсимоти код ва хатсайрҳои дохилӣ</p>

<p>Ба ғайр аз ҳуҷҷатҳо, шумо инчунин метавонед як қатор захираҳои муфидро пайдо кунед, ба монанди форуми ҷомеа, анбори GitHub барои гузоришҳо дар бораи хатогиҳо ва дархостҳои хусусиятҳо ва маҷмӯи лоиҳаҳо ва плагинҳои алоқаманд.</p>
    
<b><p>* Матн бо ёрии тарчумон навишта шудааст. Агар шумо хатое пайдо кунед, лутфан ба мо хабар диҳед *</p></b>
    
    <div className='ads-container'>  
  {/*  реклама  */}
</div>
  </div>
  )
}

export default TjReact_5;