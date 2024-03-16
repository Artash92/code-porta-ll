import React from 'react';

function TjReact_6() {
  return (
    <div>
      <div className='ad-container'>  
          {/*  реклама  */}
        </div>

<h1>React Refs</h1>

<p>Дар React, <b>ref</b> роҳи дастрасӣ ба гиреҳи аслии DOM ё мисоли ҷузъҳои React-и элементи додашуда мебошад. Шумо метавонед refs-ро барои дастрасӣ ба хосиятҳо ё усулҳои муайяни ҷузъ ё тағир додани рафтори он истифода баред.</p>

<p>Ин ҷо як мисоли чӣ гуна сохтани ref дар React:</p>

<code>
 <p><span className='red'>import</span>  React, {'{ useRef }'} <span className='red'>from</span> <span className='blue1'>'react'</span>;  </p>

 <p><span className='red'>function</span> <span className='blueviole'>TextInput</span>{'() {'}</p>

 <p>&nbsp;<span className='red'>const</span> inputRef = <span className='blueviole'>useRef</span>(<span className='red'>null</span>); </p> 

 <p>&nbsp;<span className='red'>const</span> {'handleClick = () => {'}</p>

 <p> inputRef.<span className='blue'>current</span>.<span className='blue'>focus</span>();</p>

 <p>{' };'}</p>

 <p>&nbsp;<span className='red'>return</span> {'('}</p>

 <p>{'<'}<span className='green'>div</span>{'>'}</p>

 <p>&nbsp;{'<'}<span className='green'>input</span> <span className='blue'>type</span>=<span className='blue1'>"text"</span> <span className='blue'>ref</span>={'{inputRef} />'}</p>

 <p>&nbsp;{'<'}<span className='green'>button</span> <span className='blue'>onClick</span>={'{handleClick}>'}Focus Input{'</'}<span className='green'>button</span>{'>'}</p>

 <p>{'</'}<span className='green'>div</span>{'>'}</p>

 <p>&nbsp;{' );'}</p>

 <p>{'}'}</p>
</code>

<p>Дар ин мисол, мо бо истифода аз қалмоқи <b>useRef</b> <b>ref</b> эҷод мекунем. Сипас, мо <b>ref</b>-ро бо истифода аз проп <b>ref</b> ба элементи <b>input</b> мегузорем.</p>

<p>Мо инчунин функсияи <b>handleClick</b>-ро эҷод мекунем, ки хосияти <b>current</b> -и <b>ref</b> -ро барои занг задан ба усули <b>focus</b> истифода мебарад дар элементи <b>input</b>. Ин ба мо имкон медиҳад, ки вақте ки корбар тугмаи "Фокус Вуруд"-ро клик мекунад, фокусро ба вуруд муқаррар кунем.</p>

<p>Дар маҷмӯъ, истифодаи <b>refs</b> метавонад як воситаи пурқувват барои дастрасӣ ва коркарди ҷузъҳо дар React бошад. Бо вуҷуди ин, муҳим аст, ки онҳоро сарфакорона истифода баред ва аз такя ба коди императивӣ худдорӣ кунед, зеро ин метавонад дар бораи коди шумо мулоҳиза ва нигоҳдории онро душвортар созад.</p>

<b>Event Emitter</b>

<p>Эмитенти ҳодиса намунаи тарроҳӣ мебошад, ки ба объектҳои барнома имкон медиҳад, ки тавассути ангеза ва коркарди рӯйдодҳо бо ҳамдигар муошират кунанд. Ба ибораи оддӣ, эмитенти ҳодиса механизми пахш ва қабули паёмҳо дар дохили барнома мебошад.</p>

<p>Дар JavaScript синфи EventEmitter модули дарунсохт аст, ки роҳи татбиқи ин намунаро таъмин мекунад. Ин аст мисоли тарзи истифодаи EventEmitter дар Node.js:</p>

<code>
  <p><span className='red'>const</span> EventEmitter = <span className='blueviole'>require</span>(<span className='blue1'>'events'</span>); </p>

  <p><span className='red'>class</span> MyEmitter <span className='red'>extends</span> EventEmitter {"{}"}</p>

  <p><span className='red'>const</span> myEmitter = <span className='red'>new</span> MyEmitter(); </p>

  <p>myEmitter.<span className='blue'>on</span>{'('}<span className='blue1'>'event'</span>, (arg){" => {"}</p>

  <p> console.<span className='blue'>log</span>(<span className='blue1'>'Event triggered with argument:'</span>, arg); </p>

  <p>{"});"}</p>

  <p> myEmitter.<span className='blue'>emit</span>(<span className='blue1'>'event', 'Hello, world!'</span>); </p>
</code>

<p>Дар ин мисол, мо синфи фармоишии <b>MyEmitter</b> эҷод мекунем, ки синфи <b>EventEmitter</b>-ро васеъ мекунад. Сипас, мо як мисоли ин синфро эҷод мекунем ва шунавандаро барои ҳодисаи <b>event</b> бо истифода аз усули <b>on</b> муайян мекунем. Ниҳоят, мо ҳодисаи <b>event</b>-ро мебарорем ва аргументи сатрро интиқол медиҳем, ки шунавандаро ангеза медиҳад ва далелро ба console сабт мекунад.</p>

<p>Дар маҷмӯъ, истифодаи эмитенти рӯйдодҳо метавонад як роҳи муфид барои татбиқи намунаи pub-sub дар коди шумо бошад, ки дар он қисмҳои гуногуни барномаи шумо бидуни пайвастани зич бо ҳам муошират карда метавонанд. Бо вуҷуди ин, муҳим аст, ки ин намунаро оқилона истифода баред ва ба рӯйдодҳо такя накунед, зеро ин метавонад фаҳмидан ва ислоҳ кардани коди шуморо душвортар созад.</p>

<p><b>Дар React</b>, шумо метавонед намунаи эмитенти ҳодисаро барои иртибот байни ҷузъҳои гуногуни замимаи худ истифода баред. Ин метавонад барои интиқоли маълумот ё ангезиши амалҳо байни ҷузъҳое, ки мустақиман бо ҳамдигар алоқаманд нестанд, муфид бошад.</p>

<p>Яке аз роҳҳои татбиқи намунаи эмитенти ҳодиса дар React ин истифодаи китобхонаи тарафи сеюм ба монанди <b>eventemitter3 ё mitt</b> мебошад. Ин китобхонаҳо API-и оддиро барои эҷод ва обуна шудан ба рӯйдодҳо таъмин мекунанд ва онҳоро ҳам бо ҷузъҳои синф ва ҳам ҷузъҳои функсионалии дорои қалмоқҳо истифода бурдан мумкин аст.</p>

<p>Ин ҷо як мисоли чӣ гуна истифода бурдани <b>eventemitter3</b> дар ҷузъи React:</p>

<code>
  <p><span className='red'>import</span> React, {"{ useEffect }"} <span className='red'>from</span> <span className='blue1'>'react'</span>; </p>

  <p><span className='red'>import</span> EventEmitter <span className='red'>from</span> <span className='blue1'>'eventemitter3'</span>;  </p>

  <p>&nbsp;<span className='red'>const</span>  emitter = <span className='red'>new</span> EventEmitter(); </p>

  <p><span className='red'>function</span> <span className='blueviole'>ComponentA</span>() {"{"}</p>

  <p>&nbsp;<span className='blueviole'>useEffect</span>{"(() => { "}</p>

  <p>&nbsp;&nbsp;emitter.<span className='blue'>emit</span>{'('}<span className='blue1'>'eventA'</span>, {'{'} <span className='blue'>data</span>: <span className='blue1'>'Салом аз ComponentA'</span> {'})'}; </p>

  <p>{"}, []);"}</p>

  <p>&nbsp;&nbsp;<span className='red'>return</span> {'<'}<span className='green'>div</span>{'>'}ComponentA{'</'}<span className='green'>div</span>{">; "}</p>

  <p>{"} "}</p>

  <p><span className='red'>function</span> <span className='blueviole'>ComponentB</span>{"() {"}</p>

  <p>&nbsp;<span className='blueviole'>useEffect</span>{"(() => {"}</p>

  <p>&nbsp;&nbsp;emitter.<span className='blue'>on</span>(<span className='blue1'>'eventA'</span>, handleEventA); </p>

  <p>&nbsp;&nbsp;<span className='red'>return</span>  () {'=>'} emitter.<span className='blue'>off</span>(<span className='blue1'>'eventA'</span>, handleEventA);</p>

  <p>{" }, []);"}</p>

  <p>&nbsp;<span className='red'>const</span>  handleEventA = (payload) {"=> {"}</p>

  <p>&nbsp;&nbsp;{'console.'}<span className='blue'>log</span>(<span className='blue1'>'Received eventA:'</span>, payload.<span className='blue'>data</span>);</p>

  <p>{" }; "}</p>

  <p>&nbsp;&nbsp;<span className='red'>return</span> {'<'}<span className='green'>div</span>{'>'}ComponentB{'</'}<span className='green'>div</span>{">; "}</p>

  <p>{"}"}</p>
</code>

<p>Дар ин мисол, мо як мисоли <b>EventEmitter бо номи emitter</b> эҷод мекунем. Дар <b>ComponentA</b>, мо қалмоқи <b>useEffect</b>-ро барои паҳн кардани ҳодисае бо номи <b>eventA</b> бо баъзе маълумот истифода мебарем. Дар <b>ComponentB</b>, мо қалмоқи <b>useEffect</b>-ро барои обуна ба ҳодисаи <b>eventA</b> истифода мебарем ва функсияи бозхонд бо номи <b>handleEventA</b>-ро муайян мекунем. ки маълумотро ба консол сабт мекунад.</p>

<p>Вақте ки ComponentA насб карда мешавад, он ҳодисаи A EventA-ро бо баъзе маълумотҳо мебарорад. Вақте ки ComponentB насб карда мешавад, он ба чорабинии eventA обуна мешавад ва гӯш кардани ҳама гуна рӯйдодҳоро бо ин ном оғоз мекунад. Вақте ки eventA содир мешавад, handleEventA бо маълумот даъват карда мешавад ва он паёмро ба консол сабт мекунад.</p>

<p>Дар маҷмӯъ, истифодаи намунаи эмитенти ҳодиса дар React метавонад як роҳи муфид барои амалисозии иртибот байни ҷузъҳое бошад, ки мустақиман бо ҳамдигар алоқаманд нестанд. Бо вуҷуди ин, муҳим аст, ки ин намунаро оқилона истифода баред ва ба рӯйдодҳо такя накунед, зеро ин метавонад фаҳмидан ва ислоҳ кардани коди шуморо душвортар созад.</p>

<h4>React Animation</h4>

<p>Дар React шумо метавонед бо истифода аз усулҳои гуногун ба ҷузъҳои худ аниматсияҳо илова кунед. Аниматсияҳо метавонанд UI-и шуморо ҷолибтар созанд ва ҳангоми тағир додани вазъ ба корбар фикру мулоҳизаҳои визуалӣ пешниҳод кунанд.</p>

<p>Яке аз роҳи маъмули татбиқи аниматсияҳо дар React ин истифодаи гузариш ё аниматсияҳои CSS мебошад. Шумо метавонед синфҳои CSS-ро ба ҷузъҳои худ илова кунед, то ин аниматсияҳоро фаъол созед ва пропсияи <b>className</b>-и React-ро барои иваз кардани синфҳо дар асоси ҳолати компонент истифода баред.</p>

<p>Ин ҷо як мисоли тарзи истифодаи гузаришҳои CSS барои аниме кардани тугма ҳангоми клик кардани он оварда шудааст:</p>


<code>
  <p><span className='red'>import</span> {'React, { useState }'} <span className='red'>from</span> <span className='blue1'>'react'</span>;</p> 

  <p><span className='red'>import</span>  <span className='blue1'>'./Button.css'</span>;</p>

  <p><span className='red'>function</span> <span className='blueviole'>Button</span>{"() {"}</p>

  <p>&nbsp;<span className='red'>const</span>  {"[isClicked, setIsClicked]"} = <span className='blueviole'>useState</span>(<span className='blue1'>false</span>); </p>

  <p>&nbsp;<span className='red'>const</span> {"handleClick = () => { "}</p>

  <p><span className='blueviole'>setIsClicked</span>(<span className='blue1'>true</span>); </p>

  <p><span className='blueviole'>setTimeout</span>{"(() => "}<span className='blueviole'>setIsClicked</span>(<span className='blue1'>false</span>), <span className='blue1'>1000</span>{')'};</p>

  <p>{"};"}</p>

  <p>&nbsp;<span className='red'>return</span> {"("}</p>

  <p>{'<'}<span className='green'>button</span> <span className='blue'>className</span>={'{'}<span className='blue1'>`button {'${'}</span>isClicked ? <span className='blue1'>'clicked'</span> : <span className='blue1'>''{'}`'}</span>{'}'} <span className='blue'>onClick</span>={'{handleClick}>'}</p>

  <p>&nbsp;{"Маро клик кунед! "}</p>

  <p>{"</"}<span className='green'>button</span>{">"}</p>

  <p>{"); "}</p>

  <p>{" }"}</p>
</code>

<p>Дар ин мисол мо ҷузъеро бо номи <b>Button</b> муайян мекунем, ки қалмоқи <b>useState</b>-ро барои пайгирӣ кардани пахш кардани тугма истифода мекунад ё не. Вақте ки тугма пахш мешавад, мо ҳолати <b>isClicked</b> -ро ба <b>true</b> муқаррар мекунем, ки синфи <b>clicked</b> -ро ба тугма илова мекунад. Сипас, мо <b>setTimeout</b>-ро барои нест кардани синфи <b>clicked</b> пас аз 1 сония истифода мебарем, ки ин гузаришро ба ҳолати аслӣ бармегардонад.</p>

<p>Мо инчунин файли CSS-ро бо номи <b>Button.css</b> муайян мекунем, ки услубҳоро барои тугма ва <b>синфи</b> кликшударо муайян мекунад:</p>

<code>
  <p>{'.button {'}</p>

  <p>&nbsp;&nbsp;<span className='blue'>background-color</span>: <span className='blue1'>blue</span>; </p>

  <p>&nbsp;&nbsp;<span className='blue'>color</span>: <span className='blue1'>white</span>;</p>

  <p>&nbsp;&nbsp;<span className='blue'>padding</span>: 10<span className='blue1'>px</span> 20<span className='blue1'>px</span>; </p>

  <p>&nbsp;&nbsp;<span className='blue'>border</span>: <span className='blue1'>none</span>;</p>

  <p>&nbsp;&nbsp;<span className='blue'>border-radius</span>: 5<span className='blue1'>px</span>;</p>

  <p>&nbsp;&nbsp;<span className='blue'>transition</span>: <span className='blue1'>background-color</span> 0.5<span className='blue1'>s</span>; </p>

  <p>{'}'}</p>

  <p>{'.clicked {'}</p>

  <p>&nbsp;&nbsp;<span className='blue'>background-color</span>: <span className='blue1'>red</span>; </p>

  <p>{'}'}</p>
</code>

<p>Дар ин файли CSS мо услубҳои тугмаро муайян мекунем ва хосияти <b>transition</b>-ро дар синфи <b>button</b> муайян мекунем, то тағирот ба <b>background-color</b> моликият. Мо инчунин синфи <b>clicked</b>-ро муайян мекунем, ки ҳангоми татбиқ кардани <b>background-color</b> ба сурх табдил меёбад.</p>

<p>Роҳи дигари татбиқи аниматсияҳо дар React ин истифодаи китобхонаи тарафи сеюм ба монанди <b>react-spring ё framer-motion</b> мебошад. Ин китобхонаҳо барои эҷоди аниматсияҳои мураккаб API фасеҳтар пешниҳод мекунанд ва метавонанд барои ҳолатҳои пешрафтаи истифода муфид бошанд.</p>

<p><b>react-transition-group</b> китобхонаи тарафи сеюм барои React мебошад, ки роҳи ба осонӣ илова кардани гузаришҳо ва аниматсияҳои CSS-ро ба ҷузъҳои худ фароҳам меорад. Он маҷмӯи ҷузъҳо ва API-ҳоро барои идоракунии давраи зиндагии гузаришҳо, аз ҷумла васлкунӣ ва ҷудокунии унсурҳо, илова ва хориҷ кардани синфҳо ва таъхири аниматсияҳо таъмин мекунад.</p>

<b>{'npm install react-transition-group'}</b>

<p>Қисмҳои асосии <b>react-transition-group Transition, Transition CSS ва Transition Group</b> мебошанд. Дар ин ҷо шарҳи мухтасари ҳар як ҷузъ:</p>

<p>• <b>Transition</b>: Ин ќисмат давраи асосии давраи гузаришро муайян мекунад, аз љумла њолатњои дохилшавї, воридшуда, њаяҷоновар ва ҳаяҷоновар. Шумо метавонед ин компонентро барои триггер истифода баред</p>

<p>• <b>CSSTransition</b>: Ин ҷузъ ҷузъи <b>Transition</b> -ро васеъ мекунад ва барои гузариш ва аниматсияҳои CSS дастгирӣ илова мекунад. Шумо метавонед синфҳои CSS-ро таъин кунед, то ба ҷузъи худ дар марҳилаҳои гуногуни гузариш татбиқ карда шаванд, ба монанди <b>enter, enter-active, exit ва exit-active</b>.</p>

<p>• <b>TransitionGroup</b>: Ин ҷузъ барои идоракунии маҷмӯи ҷузъҳои <b>Transition ё CSSTransition</b> истифода мешавад. Он васлкунӣ ва ҷудокунии ҷузъҳоро пайгирӣ мекунад ва метавонад ба ҳар як ҷузъ эффектҳои гуногуни гузаришро татбиқ кунад.</p>

<p>Ин аст мисоли чӣ гуна истифода бурдани <b>react-transition-group</b> барои илова кардани аниматсияи пажмурдашуда ба ҷузъ ҳангоми насби он:</p>


<code>
    <p><span className='red'>import</span>  {'React, { useState }'} <span className='red'>from</span> <span className='blue1'>'react'</span>; </p>

    <p><span className='red'>import</span>  {'{ CSSTransition }'} <span className='red'>from</span> <span className='blue1'>'react-transition-group'</span>;</p>

    <p><span className='red'>import</span>  <span className='blue1'>'./FadeIn.css'</span>;</p>

    <p><span className='red'>function</span> <span className='blueviole'>FadeIn</span>{"() { "}</p>

    <p>&nbsp;<span className='red'>const</span> {'[isMounted, setIsMounted]'} = <span className='blueviole'>useState</span>(<span className='blue1'>false</span>); </p>

    <p>&nbsp;<span className='red'>const</span> {'handleMount = () => '}<span className='blueviole'>setIsMounted</span>(<span className='blue1'>true</span>); </p>

    <p>&nbsp;<span className='red'>return</span> {"( "}</p>

    <p>{"<> "}</p>

    <p>&nbsp;{'<'}<span className='green'>button</span> <span className='blue'>onClick</span>={'{handleMount}>Mount component</'}<span className='green'>button</span>{'>'}</p>

    <p>&nbsp;{'<'}<span className='blueviole'>CSSTransition</span> <span className='blue'>in</span>={'{isMounted}'} <span className='blue'>timeout</span>={'{'}<span className='blue1'>300</span>{'}'} <span className='blue'>classNames</span>=<span className='blue1'>"fade"</span>{'>'}</p>

    <p>&nbsp;{'<'}<span className='green'>div</span> <span className='blue'>className</span>=<span className='blue1'>"content"</span>{'>'}Салом Ҷаҳон!{'</'}<span className='green'>div</span>{'>'}</p>

    <p>&nbsp;{"</"}<span className='blueviole'>CSSTransition</span>{">"}</p>

    <p>{" </> "}</p>

    <p>&nbsp;{"); "}</p>

    <p>{"} "}</p>
 </code>

 <p>Дар ин мисол, мо ҷузъеро бо номи <b>FadeIn</b> муайян мекунем, ки қалмоқи <b>useState</b>-ро барои пайгирӣ кардани насб ё насб нашудани компонент истифода мебарад. Вақте ки тугма пахш карда мешавад, мо ҳолати <b>isMounted</b>-ро ба <b>true</b> таъин мекунем, ки он ҷузъи <b>CSSTransition</b>-ро барои намоиш додани <b>content</b> бармеангезад. div бо аниматсияи пажмурдашуда. Мо инчунин файли CSS-ро бо номи <b>FadeIn.css</b> муайян мекунем, ки услубҳо ва аниматсияро барои эффекти пажмурда муайян мекунад:</p>

 <code>
    <p>{" .fade-enter { "}</p>

    <p>&nbsp;&nbsp;<span className='blue'>opacity</span>: 0;</p>

    <p>{"} "}</p>

    <p>{".fade-enter-active { "}</p>

    <p>&nbsp;&nbsp;<span className='blue'>opacity</span>: 1; </p>

    <p>&nbsp;&nbsp;<span className='blue'>transition</span>: <span className='blue1'>opacity</span> 300<span className='blue1'>ms ease-in</span>;  </p>

    <p>{"} "}</p>

    <p>{".fade-exit { "}</p>

    <p>&nbsp;&nbsp;<span className='blue'>opacity</span>: 1;  </p>

    <p>{"} "}</p>

    <p>{".fade-exit-active { "}</p>

    <p>&nbsp;&nbsp;<span className='blue'>opacity</span>: 0;  </p>

    <p>&nbsp;&nbsp;<span className='blue'>transition</span> : <span className='blue1'>opacity</span> 300<span className='blue1'>ms ease-out</span>; </p>

    <p>{"}"}</p>
 </code>

 <p>Дар ин файли CSS мо синфҳоро барои марҳилаҳои гуногуни гузариш муайян мекунем. Вақте ки ҷузъ ворид мешавад, он шаффофияти 0 (<b>fade-enter</b>) дорад ва ба шаффофияти 1 бар 300 мс мегузарад (<b>fade-enter-active</b>). Вақте ки ҷузъ хориҷ мешавад, он шаффофияти 1 (<b>fade-exit</b>) дорад ва ба шаффофияти 0 бар 300 мс мегузарад (<b>fade-exit-active</b>).</p >

<p>Дар маҷмӯъ, илова кардани аниматсияҳо ба ҷузъҳои React-и шумо метавонад UI-и шуморо ҷолибтар кунад ва ба корбар фикру мулоҳизаҳои визуалӣ пешниҳод кунад. Бо истифода аз гузаришҳо ё аниматсияҳои CSS ё китобхонаи тарафи сеюм, шумо метавонед ба осонӣ ба ҷузъҳои худ аниматсияҳо илова кунед ва онҳоро динамиктар гардонед.</p>
    
<b><p>* Матн бо ёрии тарчумон навишта шудааст. Агар шумо хатое пайдо кунед, лутфан ба мо хабар диҳед *</p></b>
    
    <div className='ads-container'>  
  {/*  реклама  */}
</div>
  </div>
  )
}

export default TjReact_6;