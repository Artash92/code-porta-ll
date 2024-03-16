import React from 'react';

function TjReact_3() {
  return (
    <div>
      <div className='ad-container'>  
          {/*  реклама  */}
        </div>
        
      <h1>React Events</h1>

      <p>React роҳи коркарди рӯйдодҳоро дар ҷузъҳо таъмин мекунад, ба монанди коркарди рӯйдодҳо дар JavaScript JavaScript. Дар React, шумо метавонед бо истифода аз синтаксиси on<b>[EventName] </b>ба ягон унсури JSX коркардкунандагони рӯйдодҳо илова кунед</p>

<p>Масалан, фарз мекунем, ки мо дар ҷузъи React тугмае дорем, ки мо мехоҳем як ҳодисаи кликро барои: идора кунем:</p>

<code>
  <p><span className='red'>function</span> <span className='blueviole'>MyButton</span>(props) {'{'} </p>

  <p><span className='red'>function</span> <span className='blueviole'>handleClick</span>() {'{'}</p>

  <p><span className='blue'>{"console.log"}</span>(<span className='blue1'>'Тугма пахш шуд'</span>); </p>

  <p>{' }'}</p>

  <p><span className='red'>return</span> {'('}</p>

  <p>{'<'}<span className='green'>button</span> <span className='blue'>onClick</span>={'{handleClick}'}{'>'}Маро клик кунед{'</'}<span className='green'>button</span>{'>'}  </p>

  <p>&nbsp;{');'}</p>

  <p>{'} '}</p>
</code>

<p>Дар ин мисол мо як ҷузъи <b>MyButton</b>-ро муайян мекунем, ки дорои як унсури тугма бо <b>onClick</b> проп ба функсия бо номи <b>handleClick</b>. Вақте ки тугма пахш карда мешавад, функсияи <b>handleClick</b> даъват карда мешавад ва паёми "Тугма пахш карда шуд" ба консол сабт мешавад.</p>

<p>Шумо инчунин метавонед бо истифода аз функсияҳои тирча далелҳоро ба функсияи коркардкунандаи ҳодиса интиқол диҳед. Масалан, фарз мекунем, ки мо рӯйхати ашёе дорем, ки онҳоро ҳамчун тугмаҳо пешниҳод кардан мехоҳем:</p>

<code>
  <p><span className='red'>function</span> <span className='blueviole'>ItemList</span>(props) {'{'}</p>

  <p><span className='red'>const</span> items = props.<span className='blue'>items</span>; </p>

  <p><span className='red'>function</span> <span className='blueviole'>handleClick</span>(item) {'{'}</p>

  <p><span className='blue'>{'console.log'}</span>(<span className='blue1'>`Item $</span><span className='blue1'>{'{item'}.<span className='blue'>id</span>{'}'}</span><span className='blue1'> clicked`</span>); </p>

  <p>&nbsp;{'}'}</p>

  <p><span className='red'>const</span> buttonList = {'items'}.<span className='blue'>map</span>{'('}(item) {'=>'} </p>

  <p>{'<'}<span className='green'>button</span> <span className='blue1'>key</span>= {'{item'}.<span className='blue'>{'id}'}</span> <span className='blue'>onClick</span>={'{()'} {'=>'} <span className='blueviole'>handleClick</span>(item){'}'}{'>'}</p>

  <p>{'{item'}.<span className='blue'>{'name}'}</span></p>

  <p>{'</'}<span className='green'>button</span>{'>'}</p>

  <p>{' ); '}</p>

  <p><span className='red'>return</span> {'('}</p>

  <p>{'<'}<span className='green'>div</span>{'>'}</p>

  <p>{'{buttonList} '}</p>

  <p>{'</'}<span className='green'>div</span>{'>'}</p>

  <p>&nbsp;{');'}</p>

  <p>{'} '}</p>
</code>

<p>Дар ин мисол, мо ҷузъи <b>ItemList</b>-ро муайян мекунем, ки дар таркиби <b>items</b> реквизит мегирад. Мо функсияи <b>handleClick</b>-ро муайян мекунем, ки далели <b>item</b>-ро мегирад, ки барои сабти паём ба консол ҳангоми пахши тугмаи мувофиқ истифода мешавад.</p>

<p>Мо усули <b>харитаи</b>-ро барои сохтани массиви нави элементҳои <b>{'<button>'}</b> истифода мебарем, ки дар он ҳар як элемент ба ҷузъе дар <b> элементҳо мувофиқат мекунад. </b> такя. Мо <b>калиди</b> пропсияи ҳар як элементи <b>{'<button> '}</b>-ро ба <b>id</b>-и элементи мувофиқ муқаррар мекунем, ки ин талабот дар React аст то ба он беҳтар кардани навсозиҳо кӯмак кунад. Мо инчунин функсияи тирро истифода мебарем, то объекти <b>item</b> -ро ба функсияи <b>handleClick</b> ҳангоми пахш кардани тугма гузаронем.</p>

<p>Пас, мо элементи <b>{'<div>'}</b>-ро бармегардонем, ки массиви <b>buttonList</b> -ро дар бар мегирад.</p>

<h5>React Events</h5>

<p className='blue1'>onKeyDown</p>

<p className='blue1'>onKeyPress </p>

<p className='blue1'>onKeyUp</p>

<p className='blue1'>onFocus</p>

<p className='blue1'>onBlur</p>

<p className='blue1'>onChange</p>

<p className='blue1'>onInput</p>

<p className='blue1'>onInvalid </p>

<p className='blue1'>onSubmit</p>

<p className='blue1'>onClick</p>

<p className='blue1'>onContextMenu</p>

<p className='blue1'>onDoubleClick</p>

<p className='blue1'>onDrag</p>

<p className='blue1'>onDragEnd</p>

<p className='blue1'>onDragEnter</p>

<p className='blue1'>onDragExit</p>

<p className='blue1'>onDragLeave</p>

<p> <a href="https://react.dev/reference/react-dom/components/common#react-event-object" target='_blank' > 👉🏼 React https://react.dev/reference/react-dom/components/common#react-event-object</a> </p>


<b> Ҳолати реаксия дар ҷузъҳои синф</b>

<p>Дар React, ҳолатро инчунин бо истифода аз ҷузъҳои синф идора кардан мумкин аст. Компонентҳои синф синфҳои JavaScript мебошанд, ки синфи <b>React.Component</b>-ро васеъ мекунанд ва усули <b>render</b>-ро амалӣ мекунанд, ки интерфейси UI компонентро бармегардонад.</p>

<p>Дар ин ҷо як мисоли ҷузъҳои синф, ки вазъиятро идора мекунад:</p>

<code>
   <p><span className='red'>import</span> React,{"{ Component }"} <span className='red'>from</span> 'react'; </p>

   <p> <span className='red'>class</span> Counter <span className='red'>extends</span> Component {'{'}</p>

   <p><span className='blue'>constructor</span>(props) {'{'}</p>

   <p>super (props);</p>

   <p><span className='red'>this</span>.<span className='blue'>state</span> = {'{'}<span className='blue'>count</span>: <span className='blue1'>0</span> {'}'};</p>

   <p><span className='red'>this</span>.<span className='blue'>handleClick</span> = <span className='red'>this</span>.<span className='blue'>handleClick</span>.<span className='blue'>bind</span>(<span className='red'>this</span>);</p>

   <p>&nbsp;{'}'}</p>

   <p><span className='blue'>handleClick</span>() {'{'}</p>

   <p><span className='red'>this</span>.<span className='blue'>setState</span>{'({'} <span className='blue'>count</span>: <span className='red'>this</span>.<span className='blue'>state</span>.<span className='blue'>count</span> + <span className='blue1'>1</span>{' })'}; </p>

   <p>{'}'}</p>

   <p><span className='blue'>render</span>() {'{'}</p>

   <p><span className='red'>return</span> {'('}</p>

   <p>{'<'}<span className='green'>div</span>{'>'}</p>

   <p>{'<'}<span className='green'>p</span>{'>'}Шумо {'{'}<span className='red'>this</span>.<span className='blue'>state</span>.<span className='blue'>count</span>{'}'} маротиба клик кардед{'</'}<span className='green'>p</span>{'>'}</p>

   <p>{'<'}<span className='green'>button</span> <span className='blue'>onClick</span>={'{'}<span className='red'>this</span>.<span className='blue'>handleClick</span>{'}'}{'>'}Маро клик кунед{'</'}<span className='green'>button</span>{'>'}</p>

   <p>{'</'}<span className='green'>div</span>{'>'}</p>

   <p>&nbsp;&nbsp;{');'}</p>

   <p>&nbsp;{'}'}</p>

   <p>{'}'}</p>
</code>
<p>Дар ин мисол мо синфи <b>Counter</b>-ро муайян мекунем, ки <b>React.Component</b>-ро васеъ мекунад. Дар дохили синф мо конструктореро муайян мекунем, ки ҳолати ибтидоии ҷузъро ба объект бо хосияти <b>count</b> 0 муқаррар мекунад. Мо инчунин усули <b>handleClick</b>-ро ба мисоли компонент мепайвандем. бо истифода аз <b>банд</b>.</p>

<p>Усули <b>handleClick</b> ҳолати ҷузъро тавассути даъват кардани this.setState бо объекти нав, ки дорои хосияти <b>count</b> ба 1 зиёд шудааст, навсозӣ мекунад.</p>

<p>Усули <b>render</b> интерфейси UI-и компонентро бармегардонад, ки унсури <b>{'<p>'}</b>-ро дар бар мегирад, ки арзиши ҷории <b>count</b>-ро намоиш медиҳад , ва тугмае, ки ҳангоми пахш кардан <b>handleClick</b> -ро даъват мекунад.</p>

<p>Мисли ҷузъҳои функсионалӣ, муҳим аст, ки ҳеҷ гоҳ ҳолати мустақимро тағир надиҳед. Ба ҷои ин, ҳамеша барои навсозии ҳолат <b>this.setState</b> -ро истифода баред.</p>

<p>Дар ҳоле ки ҷузъҳои синф ҳанӯз дар React дастгирӣ мешаванд, ҷузъҳои функсионалӣ ба таври умум бартарӣ дода мешаванд, алахусус ҳангоми ҷорӣ кардани қалмоқҳо. Бо вуҷуди ин, фаҳмидани ҷузъҳои синф барои нигоҳдорӣ ва навсозии пойгоҳи кодҳои кӯҳна муҳим аст.</p>

<b>React lifecycle</b>

<p>Дар React, ҷузъҳо як давраи ҳаёт доранд, ки марҳилаҳои мухталиферо, ки дар давоми мавҷудияти худ аз сар мегузаронанд, тавсиф мекунад. Фаҳмидани давраи ҳаёти React барои сохтан ва нигоҳ доштани замимаҳои боэътимоди React муҳим аст.</p>

<p>Дар ин ҷо шарҳи мухтасари усулҳои давраи ҳаёти ҷузъҳои React, ки аз рӯи марҳила гурӯҳбандӣ шудаанд:</p>

<h4>Марҳилаи насб:</h4>

<p><b>{'constructor()'}</b>: Called when the component is initialized.</p>

<p><b>{'static getDerivedStateFromProps()'}</b>: Called when the component is initialized, and again when it receives new props. Rarely used.</p>

<p><b>{'render()'}</b>: Called whenever the component needs to be rendered.</p>

<p><b>{'componentDidMount()'}</b>: Called after the component has been rendered for the first time.</p>

<h4>Updating phase:</h4>

<p><b>{'static getDerivedStateFromProps()'}</b>: Called when the component receives new props.</p>

<p><b>{'shouldComponentUpdate()'}</b>: Called before the component re-renders. Allows you to cancel the update.</p>

<p><b>{'render()'}</b>: Called whenever the component needs to be rendered.</p>

<p><b>{'getSnapshotBeforeUpdate()'}</b>: Called before the component updates. Rarely used.</p>

<p><b>{'componentDidUpdate()'}</b>: Called after the component has been updated.</p>

<h4>Unmounting phase:</h4>

<p><b>{'componentWillUnmount()'}</b>: Called when the component is about to be removed from the DOM.</p>

<p>Here's an example that demonstrates the lifecycle methods:</p>

<code>
<p><span className='red'>import</span> React,{"{ Component }"} <span className='red'>from</span> 'react'; </p>

<p><span className='red'>class</span> LifecycleDemo <span className='red'>extends</span> Component {'{'}</p>

<p><span className='blue'>constructor</span>(props) {'{'} </p>

<p>{'super(props);'}</p>  

<p><span className='red'>{'this'}</span>.<span className='blue'>state</span>= {'{'}<span className='blue'>count</span>: <span className='blue1'>0</span> {'}'};</p>

<p>{"console"}.<span className='blue'>log</span>(<span className='blue1'>'constructor'</span>);</p>

<p>{'}'}</p>

<p><span className='red'>static</span> <span className='blue'>getDerivedStateFromProps</span>(props, state) {'{'}</p>

<p>{"console"}.<span className='blue'>log</span>('<span className='blue1'>getDerivedStateFromProps</span>');</p>

<p><span className='red'>return null</span>;</p>

<p>{'}'}</p>

<p><span className='blue'>componentDidMount</span>() {'{'}</p>

<p>{"console"}.<span className='blue'>log</span>(<span className='blue1'>'componentDidMount'</span>); </p>

<p>{'}'}</p>

<p><span className='blue'>shouldComponentUpdate</span>(nextProps, nextState) {'{'}</p>

<p>{"console"}.<span className='blue'>log</span>(<span className='blue1'>'shouldComponentUpdate'</span>);</p>

<p><span className='red'>return</span> <span className='blue'>true</span>;</p>

<p>{'}'}</p>

<p><span className='blue'>getSnapshotBeforeUpdate</span>(prevProps, prevState) {'{'}</p>

<p>{"console"}.<span className='blue'>log</span>(<span className='blue1'>'getSnapshotBeforeUpdate'</span>);</p>

<p><span className='red'>return null</span>;</p>

<p>{'}'}</p>

<p><span className='blue'>componentDidUpdate</span>(prevProps, prevState, snapshot) {'{'}</p>

<p>{"console"}.<span className='blue'>log</span>(<span className='blue1'>'componentDidUpdate'</span>); </p>

<p>{'}'}</p>

<p><span className='blue'>componentWillUnmount</span>() {'{'} </p>

<p>{"console"}.<span className='blue'>log</span>(<span className='blue1'>'componentWillUnmount'</span>); </p>

<p>{'}'}</p>

<p> <span className='blue'>handleClick</span> = () {'=>'} {'{'}</p>

<p><span className='red'>this</span>.<span className='blue'>setState</span>{'({'} <span className='blue'>count</span>: <span className='red'>this</span>.<span className='blue'>state</span>.<span className='blue'>count</span> + <span className='blue1'>1</span> {'})'};</p>

<p>{'}; '}</p>

<p><span className='blue'>render</span>() {'{'} </p>

<p>{"console"}.<span className='blue'>log</span>(<span className='blue1'>'render'</span>);</p>

<p><span className='red'>return</span> {'('}</p>

<p>{'<'}<span className='green'>div</span>{'>'}</p>

<p>{'<'}<span className='green'>p</span>{'>'}Шумо {'{'}<span className='red'>this</span>.<span className='blue'>state</span>.<span className='blue'>count</span>{'}'} маротиба клик кардед{'</'}<span className='green'>p</span>{'>'}</p>

<p>{'<'}<span className='green'>button</span> <span className='blue'>onClick</span>={'{'}<span className='red'>this</span>.<span className='blue'>handleClick</span>{'}>'}Маро клик кунед{'</'}<span className='green'>button</span>{'>'}</p>

<p>{'</'}<span className='green'>div</span>{'>'}</p>

<p>&nbsp;&nbsp;{');'}</p>

<p>&nbsp;{'}'}</p>

<p>{'}'}</p>
</code>

<p>Дар ин мисол, мо синфи <b>LifecycleDemo</b>-ро муайян мекунем, ки паёмҳоро ба консол дар давоми ҳар як марҳилаи ҳаёти компонент сабт мекунад. Мо инчунин усули <b>handleClick</b>-ро муайян мекунем, ки ҳолати ҷузъро навсозӣ мекунад.</p>

<p>Вақте ки компонент бори аввал васл карда мешавад, усулҳои зерин бо навбат даъват карда мешаванд: <b>созанда, getDerivedStateFromProps, render ва componentDidMount</b>. Ҳар вақте ки ҳолати компонент тағир меёбад, усулҳои <b>shouldComponentUpdate, render ва componentDidUpdate </b> бо ҳамин тартиб даъват карда мешаванд.</p>

<p>Вақте ки ҷузъ ҷудо карда мешавад, усули <b>componentWillUnmount</b> даъват карда мешавад.</p>

<p> Фаҳмидани давраи ҳаёти ҷузъҳои React муҳим аст, то шумо метавонед ҷузъҳои худро оптимизатсия кунед ва аз домҳои умумӣ ба монанди ихроҷи хотира ва ҳалқаҳои беохир канорагирӣ кунед. Аммо хавотир нашав, агар ин дар аввал душвор ба назар мерасад – бо машқ, шумо бо он бароҳаттар хоҳед шуд.</p>
   
<b><p>* Матн бо ёрии тарчумон навишта шудааст. Агар шумо хатое пайдо кунед, лутфан ба мо хабар диҳед *</p></b>
    
    <div className='ads-container'>  
  {/*  реклама  */}
</div>
    </div>
  )
}

export default TjReact_3;