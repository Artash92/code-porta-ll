import React from 'react'

function AmReact_6() {
  return (
    <div>
      <div className='ad-container'>  
        {/*  реклама  */}
      </div>

       <h1>React հղումներ (Refs)</h1>

       <p>React-ում <b>ref</b>-ը միջոց է՝ մուտք գործելու հիմքում ընկած DOM հանգույց կամ ներկայացվող տարրի React բաղադրիչի օրինակ: Դուք կարող եք օգտագործել հղումներ՝ բաղադրիչի որոշակի հատկություններ կամ մեթոդներ մուտք գործելու կամ դրա գործելակերպը փոխելու համար:</p>

       <p>React-ում հղում ստեղծելու օրինակ՝</p>

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

     <p>&nbsp;{');'}</p>

     <p>{'}'}</p>
 </code>

 <p>Ընդհանուր առմամբ, <b>ref</b>-ի օգտագործումը կարող է հզոր գործիք լինել React-ում բաղադրիչներ մուտք գործելու և կառավարելու համար: Այնուամենայնիվ, կարևոր է դրանք օգտագործել զգուշությամբ և խուսափել հրամայական կոդի վրա չափազանց մեծ վստահությունից, քանի որ դա կարող է ավելի դժվարացնել կոդը հասկանալն ու պահպանելը:</p>
  
  <b>Event Emitter</b>

  <p>Event Emitter-ը դիզայնի օրինաչափություն է, որը թույլ է տալիս ծրագրի օբյեկտներին փոխազդել միմյանց հետ՝ շարունակելով և մշակելով իրադարձությունները: Պարզ բառերով ասած՝ Event Emitter-ը ծրագրում հաղորդագրություններ ուղարկելու և ստանալու մեխանիզմ է:</p>

  <p>JavaScript-ում EventEmitter կլասը ներկառուցված մոդուլ է, որն ապահովում է այս օրինաչափությունն իրականացնելու միջոց: Ահա մի օրինակ, թե ինչպես օգտագործել EventEmitter-ը Node.js-ում:</p>

<code>
  <p><span className='red'>const</span> EventEmitter = <span className='blueviole'>require</span>(<span className='blue1'>'events'</span>); </p>

  <p><span className='red'>class</span> MyEmitter <span className='red'>extends</span> EventEmitter {"{}"}</p>

  <p><span className='red'>const</span> myEmitter = <span className='red'>new</span> MyEmitter(); </p>

  <p>myEmitter.<span className='blue'>on</span>{'('}<span className='blue1'>'event'</span>, (arg){" => {"}</p>

  <p> console.<span className='blue'>log</span>(<span className='blue1'>'Event triggered with argument:'</span>, arg); </p>

  <p>{"});"}</p>

  <p> myEmitter.<span className='blue'>emit</span>(<span className='blue1'>'event', 'Hello, world!'</span>); </p>
</code>

<p>Այս օրինակում մենք ստեղծում ենք հատուկ կլաս <b>MyEmitter</b>, որը ընդլայնում է <b>EventEmitter</b> կլասը: Այնուհետև մենք ստեղծում ենք այս կլասը և սահմանում ունկնդիր <b>event</b> իրադարձության համար՝ օգտագործելով <b>on</b> մեթոդը: Վերջապես, մենք ստեղծում ենք <b>event</b> և փոխանցում տողային արգումենտ, որը կանչում է լսողին և գրում է արգումենտը վահանակում:</p>

<p>Ընդհանուր առմամբ, իրադարձությունների թողարկիչի օգտագործումը կարող է օգտակար միջոց լինել ձեր կոդի մեջ հրատարակիչ-բաժանորդ օրինաչափության ներդրման համար, որտեղ ձեր ծրագրի տարբեր մասեր կարող են խոսել միմյանց հետ՝ առանց միմյանց սերտորեն կապված լինելու: Այնուամենայնիվ, կարևոր է խելամտորեն օգտագործել այս օրինաչափությունը և շատ չհիմնվել իրադարձությունների վրա, քանի որ դա կարող է ավելի դժվարացնել ձեր կոդը հասկանալը և վրիպազերծել:</p>

<p><b>React-ում</b> դուք կարող եք օգտագործել իրադարձությունների թողարկիչի օրինաչափությունը՝ ձեր հավելվածի տարբեր բաղադրիչների միջև հաղորդակցվելու համար: Սա կարող է օգտակար լինել տվյալների փոխանցման կամ գործողություններ գործարկելու համար բաղադրիչների միջև, որոնք ուղղակիորեն կապված չեն միմյանց:</p>

<p>React-ում իրադարձությունների թողարկիչի օրինաչափությունն իրականացնելու եղանակներից մեկը կողմնակի գրադարանի օգտագործումն է, ինչպիսիք են <b>eventemitter3 կամ mitt</b>: Այս գրադարանները ապահովում են պարզ API՝ իրադարձություններ ստեղծելու և բաժանորդագրվելու համար, և կարող են օգտագործվել ինչպես կլասի, այնպես էլ ֆունկցիայի բաղադրիչների հետ՝ կեռիկներ:</p>

<p>Օրինակ, թե ինչպես օգտագործել <b>eventemitter3</b> React բաղադրիչում.</p>

<code>
  <p><span className='red'>import</span> React, {"{ useEffect }"} <span className='red'>from</span> <span className='blue1'>'react'</span>; </p>

  <p><span className='red'>import</span> EventEmitter <span className='red'>from</span> <span className='blue1'>'eventemitter3'</span>;  </p>

  <p>&nbsp;<span className='red'>const</span>  emitter = <span className='red'>new</span> EventEmitter(); </p>

  <p><span className='red'>function</span> <span className='blueviole'>ComponentA</span>() {"{"}</p>

  <p>&nbsp;<span className='blueviole'>useEffect</span>{"(() => { "}</p>

  <p>&nbsp;&nbsp;emitter.<span className='blue'>emit</span>{'('}<span className='blue1'>'eventA'</span>, {'{'} <span className='blue'>data</span>: <span className='blue1'>'Hello from ComponentA'</span> {'})'}; </p>

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

<p>Այս օրինակում մենք ստեղծում ենք <b>EventEmitter</b>-ի օրինակ, որը կոչվում է <b>emitter</b>: <b>ComponentA</b>-ում մենք օգտագործում ենք <b>useEffect</b> կեռիկը` <b>eventA</b> իրադարձությունը որոշ տվյալներով բարձրացնելու համար: <b>ComponentB</b>-ում մենք օգտագործում ենք <b>useEffect</b> կեռիկը` բաժանորդագրվելու <b>eventA</b> իրադարձությանը և սահմանելու հետ կանչելու ֆունկցիա <b>handleEventA</b>, որը գրում է տվյալները կոնսոլին:</p>

<p>Երբ ComponentA-ն տեղադրվում է, այն բարձրացնում է eventA-ն որոշ տվյալներով: Երբ ComponentB-ը տեղադրվում է, այն բաժանորդագրվում է eventA-ին և սկսում է լսել այդ անունով ցանկացած իրադարձություն: Երբ eventA է տեղի ունենում, handleEventA-ն կանչվում է տվյալների հետ և հաղորդագրություն է գրում վահանակին:</p>

<p>Ընդհանուր առմամբ, React-ում իրադարձությունների թողարկիչի օրինաչափության օգտագործումը կարող է օգտակար միջոց լինել միմյանց հետ անմիջականորեն չառնչվող բաղադրիչների միջև հաղորդակցություն իրականացնելու համար: Այնուամենայնիվ, կարևոր է խելամտորեն օգտագործել այս օրինաչափությունը և շատ չհիմնվել դրա վրա, քանի որ այն կարող է ավելի դժվարացնել ձեր կոդը հասկանալը և վրիպազերծել:</p>

<h4>Անիմացիա React-ում</h4>

<p>React-ում դուք կարող եք անիմացիաներ ավելացնել ձեր բաղադրիչներին՝ օգտագործելով տարբեր տեխնիկա: Շարժապատկերները կարող են ձեր օգտատիրոջ ինտերֆեյսն ավելի հետաքրքիր դարձնել և տեսողական արձագանք տալ օգտատիրոջը, երբ ամեն ինչ փոխվում է:</p>

<p>React-ում անիմացիաներ իրականացնելու հանրաճանաչ եղանակներից մեկը CSS անցումներ կամ անիմացիաներ օգտագործելն է: Դուք կարող եք ավելացնել CSS կլասներ ձեր բաղադրիչներին՝ այս անիմացիաները գործարկելու համար, և React-ում օգտագործել <b>className</b> հենարանը՝ բաղադրիչի վիճակի հիման վրա կլասներ փոխելու համար:</p>

<p>Ահա մի օրինակ, թե ինչպես կարելի է օգտագործել CSS-ի անցումները կոճակը սեղմելիս շարժելու համար.</p>

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

  <p>&nbsp;{"Click me! "}</p>

  <p>{"</"}<span className='green'>button</span>{">"}</p>

  <p>{"); "}</p>

  <p>{" }"}</p>
</code>

<p>Այս օրինակում մենք սահմանում ենք մի բաղադրիչ, որը կոչվում է <b>Button</b>, որն օգտագործում է <b>useState</b> կեռը՝ հետևելու, թե արդյոք կոճակը սեղմվել է, թե ոչ: Երբ կոճակը սեղմվում է, մենք <b>isClicked</b> վիճակը դնում ենք <b>true</b>, որը կոճակին ավելացնում է <b>clicked</b> դասը: Այնուհետև մենք օգտագործում ենք <b>setTimeout</b>՝ 1 վայրկյան անց <b>clicked</b> դասը հեռացնելու համար, ինչը հանգեցնում է սկզբնական վիճակի հետ անցմանը:</p>

<p>Մենք նաև սահմանում ենք CSS ֆայլ, որը կոչվում է <b>Button.css</b>, որը սահմանում է կոճակի ոճերը և <b>clicked</b> կլասը.</p>

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

<p>Այս CSS-ֆայլում մենք սահմանում ենք կոճակի համար ոճերը եւ նշում ենք <b>transition</b> հատկությունը <b>button</b> կլասում անիմացիայի համար, որը կարող է փոխարինել <b>background-color</b> հատկությունը: Մենք նաև սահմանում ենք <b>clicked</b> կլասը, որը փոխարինում է ֆոնի գույնը կարմիրով, երբ այն կիրառվում է:</p>

<p>React-ում անիմացիաներ իրականացնելու մեկ այլ եղանակ է օգտագործել կողմնակի գրադարանը, ինչպիսին է <b>react-spring կամ framer-motion</b>: Այս գրադարաններն ապահովում են ավելի ճկուն API՝ բարդ անիմացիաներ ստեղծելու համար և կարող են օգտակար լինել ավելի առաջադեմ օգտագործման դեպքերի համար:</p>

<p><b>react-transition-group</b>-ը գրադարան է React-ի համար, որը հնարավորություն է տալիս հեշտությամբ ավելացնել CSS անցումներ և անիմացիաներ ձեր բաղադրիչներին: Այն ապահովում է մի շարք բաղադրիչներ և API-ներ՝ անցումների կյանքի ցիկլը կառավարելու համար, ներառյալ տարրերի տեղադրումն ու ապամոնտաժումը, կլասների ավելացումն ու հեռացումը և անիմացիաների հետաձգումը:</p>

<p><b>{'npm install react-transition-group'}</b></p>

<p><b>react-transition-group</b>-ի հիմնական բաղադրիչներն են Transition, CSSTransition և TransitionGroup: Յուրաքանչյուր բաղադրիչի կարճ ակնարկ՝</p>

<p>• <b>Transition</b>. Այս բաղադրիչը սահմանում է անցման հիմնական կյանքի ցիկլը, ներառյալ մուտքագրման, մուտքի, ելքի և ելքային վիճակները: Դուք կարող եք օգտագործել այս բաղադրիչը գործարկելու համար</p>

<p>• <b>CSSTtransition</b>. Այս բաղադրիչը ընդլայնում է <b>Transition</b> բաղադրիչը և ավելացնում է CSS անցումների և անիմացիաների աջակցություն: Դուք կարող եք նշել CSS կլասները, որոնք կիրառվում են ձեր բաղադրիչի վրա տարբեր անցումային փուլերում, ինչպիսիք են <b>enter, enter-active, exit և exit-active</b>:</p>

<p>• <b>TransitionGroup</b>. Այս բաղադրիչն օգտագործվում է <b>Transition կամ CSSTTransition</b> բաղադրիչները կառավարելու համար: Այն հետևում է բաղադրիչների տեղադրմանը և ապամոնտաժմանը և կարող է կիրառել տարբեր անցումային էֆեկտներ յուրաքանչյուր բաղադրիչի համար:</p>

<p><b>react-transition-group</b>-ի օգտագործման օրինակ՝ բաղադրիչը մոնտաժելիս արտաքին տեսքի անիմացիա ավելացնելու համար.</p>

<code>
  <p><span className='red'>import</span>  {'React, { useState }'} <span className='red'>from</span> <span className='blue1'>'react'</span>; </p>

  <p><span className='red'>import</span>  {'{ CSSTransition }'} <span className='red'>from</span> <span className='blue1'>'react-transition-group'</span>;</p>

  <p><span className='red'>import</span>  <span className='blue1'>'./FadeIn.css'</span>;</p>

  <p><span className='red'>function</span> <span className='blueviole'>FadeIn</span>{"() { "}</p>

  <p>&nbsp;<span className='red'>const</span> {'[isMounted, setIsMounted]'} = <span className='blueviole'>useState</span>(<span className='blue1'>false</span>); </p>

  <p>&nbsp;<span className='red'>const</span> {'handleMount = () => '}<span className='blueviole'>setIsMounted</span>(<span className='blue1'>true</span>);  </p>

  <p>&nbsp;<span className='red'>return</span> {"( "}</p>

  <p>{"<> "}</p>

  <p>&nbsp;{'<'}<span className='green'>button</span> <span className='blue'>onClick</span>={'{handleMount}>Mount component</'}<span className='green'>button</span>{'>'}</p>

  <p>&nbsp;{'<'}<span className='blueviole'>CSSTransition</span> <span className='blue'>in</span>={'{isMounted}'} <span className='blue'>timeout</span>={'{'}<span className='blue1'>300</span>{'}'} <span className='blue'>classNames</span>=<span className='blue1'>"fade"</span>{'>'}</p>

  <p>&nbsp;{'<'}<span className='green'>div</span> <span className='blue'>className</span>=<span className='blue1'>"content"</span>{'>'}Hello, world!{'</'}<span className='green'>div</span>{'>'}</p>

  <p>&nbsp;{"</"}<span className='blueviole'>CSSTransition</span>{">"}</p>

  <p>{" </> "}</p>

  <p>&nbsp;{"); "}</p>

  <p>{"} "}</p>
</code>

<p>Այս օրինակում մենք սահմանում ենք բաղադրիչ, որը կոչվում է <b>FadeIn</b>, որն օգտագործում է <b>useState</b> կեռիկը` հետևելու, թե արդյոք բաղադրիչը տեղադրվել է, թե ոչ: Երբ կոճակը սեղմվում է, մենք <b>isMounted</b> վիճակը դնում ենք <b>true</b>, որը գործարկում է <b>CSSTtransition</b> բաղադրիչը <b>content</b> մատուցելու համար արտաքին տեսքի էֆեկտով տարր: Մենք նաև սահմանում ենք CSS ֆայլ, որը կոչվում է <b>FadeIn.css</b>, որը սահմանում է ֆեյդ էֆեկտի ոճն ու անիմացիան.</p>

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

<p>Այս CSS ֆայլում մենք կլասներ ենք սահմանում անցումային տարբեր փուլերի համար: Երբ բաղադրիչը մտնում է, այն ունի 0 անթափանցիկություն (<b>fade-enter</b>) և անցնում է անթափանցիկության 1 300 մվ-ից (<b>fade-enter-active</b>): Երբ բաղադրիչը դուրս է գալիս, այն ունի 1 անթափանցիկություն (<b>fade-exit</b>) և անցնում է անթափանցիկության 0-ին 300 մվ-ում (<b>fade-exit-active</b>):</p>

<p>Ընդհանուր առմամբ, ձեր React բաղադրիչներին անիմացիաներ ավելացնելը կարող է ձեր ինտերֆեյսը ավելի գրավիչ դարձնել և տեսողական արձագանք ապահովել օգտատիրոջը: Օգտագործելով CSS անցումներ կամ անիմացիաներ կամ երրորդ կողմի գրադարանը, դուք հեշտությամբ կարող եք անիմացիաներ ավելացնել ձեր բաղադրիչներին և դրանք ավելի դինամիկ դարձնել:</p>

<b><p>* Տեքստը գրված է թարգմանչի օգնությամբ։ Եթե սխալ եք հայտնաբերել, խնդրում ենք մեզ տեղյակ պահել *</p></b>
    <div className='ads-container'>  
  {/*  реклама  */}
  </div>
</div>
  )
}

export default AmReact_6;