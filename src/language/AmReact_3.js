import React from 'react'

function AmReact_3() {
  return (
    <div>
      <div className='ad-container'>  
        {/*  реклама  */}
      </div>
      
      <h1>React Events</h1>
    
      <p>React-ը հնարավորություն է տալիս կարգավորել իրադարձությունները բաղադրիչներում, որոնք նման են այն բանին, թե ինչպես են իրադարձությունները մշակվում մաքուր JavaScript-ում: React-ում կարող եք իրադարձությունների մշակիչներ ավելացնել ցանկացած JSX տարրի՝ օգտագործելով <b>[EventName]</b>-ի շարահյուսությունը:</p>
    
      <p>Օրինակ, ենթադրենք, որ մենք ունենք կոճակ React բաղադրիչում, որի համար ցանկանում ենք կառավարել սեղմումների իրադարձությունը.</p>
    
    <code>
      <p><span className='red'>function</span> <span className='blueviole'>MyButton</span>(props) {'{'} </p>

      <p><span className='red'>function</span> <span className='blueviole'>handleClick</span>() {'{'}</p>

      <p><span className='blue'>{"console.log"}</span>(<span className='blue1'>'Կոճակը սեղմված է'</span>); </p>

      <p>{' }'}</p>

      <p><span className='red'>return</span> {'('}</p>

      <p>{'<'}<span className='green'>button</span> <span className='blue'>onClick</span>={'{handleClick}'}{'>'}Սեղմեք կոճակը{'</'}<span className='green'>button</span>{'>'}  </p>

      <p>&nbsp;{');'}</p>

      <p>{'} '}</p>
    </code>
    
    <p>Այս օրինակում մենք սահմանում ենք <b>MyButton</b> բաղադրիչ, որը պարունակում է կոճակի տարր՝ <b>onClick</b> հենարանով(props), որը սահմանված է <b>handleClick</b> կոչվող ֆունկցիայի վրա: Երբ կոճակը սեղմվի, <b>handleClick</b> ֆունկցիան կկանչվի, և «Button clicked» հաղորդագրությունը կգրվի կոնսոլում:</p>

    <p>Դուք կարող եք նաև արգումենտներ փոխանցել իրադարձությունների մշակման գործառույթին՝ օգտագործելով սլաքների ֆունկցիաները: Ենթադրենք, մենք ունենք տարրերի ցանկ, որոնք ցանկանում ենք ցուցադրել որպես կոճակներ.</p>
    
    <code>
     <p><span className='red'>function</span> <span className='blueviole'>ItemList</span>(props) {'{'}</p>

    <p><span className='red'>const</span> items = props.<span className='blue'>items</span>; </p>

    <p><span className='red'>function</span> <span className='blueviole'>handleClick</span>(item) {'{'}</p>

    <p><span className='blue'>{'console.log'}</span>(<span className='blue1'>`Տարրը սեղմված է $</span><span className='blue1'>{'{item'}.<span className='blue'>id</span>{'}'}</span><span className='blue1'>`</span>); </p>

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

    <p>&nbsp;{'); '}</p>

    <p>{'} '}</p>
 </code>

 <p>Այս օրինակում մենք սահմանում ենք <b>ItemList</b> բաղադրիչ, որն ընդունում է <b>items</b> մուտքագրման պարամետրը: Մենք սահմանում ենք <b>handleClick</b> ֆունկցիա, որն ընդունում է <b>item</b> արգումենտ, որը կօգտագործվի կոնսոլում հաղորդագրություն տպելու համար, երբ սեղմվում է համապատասխան կոճակը:</p>

 <p>Մենք օգտագործում ենք <b>map</b> մեթոդը՝ <b>{'<button>'}</b> տարրերի նոր զանգված ստեղծելու համար, որտեղ յուրաքանչյուր տարր համապատասխանում է  մուտքային պարամետրից մեկին <b>items</b >: Մենք սահմանել ենք <b>key</b> հատկությունը յուրաքանչյուր <b>{'<button>'}</b> տարրի համար համապատասխան տարրի <b>id</b> արժեքին, որը պարտադիր է React թարմացումները օպտիմալացնելու համար: Մենք նաև օգտագործում ենք սլաքի ֆունկցիան՝ կոճակը սեղմելիս <b>item</b> օբյեկտը <b>handleClick</b> ֆունկցիային փոխանցելու համար:</p>

 <p>Այնուհետև մենք վերադարձնում ենք <b>{'<div>'}</b> տարր, որը պարունակում է <b>buttonList</b> զանգված:</p>

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

    <p><a href="https://react.dev/reference/react-dom/components/common#react-event-object" target='_blank' > 👉🏼 React https://react.dev/reference/react-dom/components/common#react-event-object</a> </p>
    
    <b>React state կլասի բաղադրիչներում(կոմպոնենտ)</b>

    <p>React-ում  state-ը կարող է կառավարվել նաև կլասի բաղադրիչների միջոցով: Կլասի բաղադրիչները JavaScript class-ներն  են, որոնք ընդլայնում են <b>React.Component</b> կլասը և իրականացնում են <b>render</b> մեթոդ, որը վերադարձնում է կոմպոնենտի օգտագործողի ինտերֆեյսը:</p>
  
    <p>Կլասի բաղադրիչի օրինակ, որը կառավարում է վիճակը.</p>
    <code>
       <p><span className='red'>import</span> React,{"{ Component }"} <span className='red'>from</span> 'react'; </p>

       <p> <span className='red'>class</span> Counter <span className='red'>extends</span> Component {'{'}</p>
    
       <p><span className='blue'>constructor</span>(props) {'{'}</p>

       <p>super (props);</p>

       <p><span className='red'>this</span>.<span className='blue'>state</span> = {'{'}<span className='blue'>count</span>: <span className='blue1'>0</span> {'}'};</p>

       <p><span className='red'>this</span>.<span className='blue'>handleClick</span> = <span className='red'>this</span>.<span className='blue'>handleClick</span>.<span className='blue'>bind</span>(<span className='red'>this</span>);</p>

       <p>{'}'}</p>

       <p><span className='blue'>handleClick</span>() {'{'}</p>

       <p><span className='red'>this</span>.<span className='blue'>setState</span>{'({'} <span className='blue'>count</span>: <span className='red'>this</span>.<span className='blue'>state</span>.<span className='blue'>count</span> + <span className='blue1'>1</span>{' })'}; </p>

       <p>{'}'}</p>

       <p><span className='blue'>render</span>() {'{'}</p>

       <p><span className='red'>return</span> {'('}</p>

       <p>{'<'}<span className='green'>div</span>{'>'}</p>

       <p>{'<'}<span className='green'>p</span>{'>'}դուք սեղմել եք {'{'}<span className='red'>this</span>.<span className='blue'>state</span>.<span className='blue'>count</span>{'}'} անգամ{'</'}<span className='green'>p</span>{'>'}</p>

       <p>{'<'}<span className='green'>button</span> <span className='blue'>onClick</span>={'{'}<span className='red'>this</span>.<span className='blue'>handleClick</span>{'}'}{'>'}Սեղմել{'</'}<span className='green'>button</span>{'>'}</p>

       <p>{'</'}<span className='green'>div</span>{'>'}</p>

       <p>&nbsp;&nbsp;{');'}</p>

       <p>&nbsp;{'}'}</p>

       <p>{'}'}</p>
    </code>

    <p>Այս օրինակում մենք սահմանում ենք <b>Counter</b> կլաս, որը ընդլայնում է <b>React.Component</b> կլասը: Կլասի ներսում մենք սահմանում ենք կոնստրուկտոր, որը բաղադրիչի սկզբնական վիճակը սահմանում է օբյեկտի վրա, որի <b>count</b> հատկությունը հավասար է 0-ի: Մենք նաև կապում ենք <b>handleClick</b> մեթոդը բաղադրիչին: օրինակ՝ օգտագործելով <b>bind</b> մեթոդը.</p>

    <p><b>handleClick</b> մեթոդը թարմացնում է բաղադրիչի վիճակը՝ կանչելով this.setState մեթոդը նոր օբյեկտով, որի <b>count</b> հատկությունն ավելացել է 1-ով:</p>

    <p><b>render</b> մեթոդը վերադարձնում է բաղադրիչի օգտատիրոջ ինտերֆեյսը, որը ներառում է <b>{'<p>'}</b> տարր, որը ցուցադրում է ընթացիկ <b>count</b> արժեքը, և կոճակ, որը սեղմելիս կանչում է <b>handleClick</b> մեթոդը:</p>

    <p>Ինչպես ֆունկցիոնալ բաղադրիչների դեպքում, կարևոր է երբեք ուղղակիորեն չփոխել վիճակը: Փոխարենը, միշտ օգտագործեք <b>this.setState</b> մեթոդը՝ վիճակը թարմացնելու համար:</p>

    <p>Չնայած կլասի բաղադրիչները դեռևս աջակցվում են React-ում, ֆունկցիոնալ բաղադրիչները հիմնականում նախընտրելի են, հատկապես կեռիկների(Hooks) ներդրման դեպքում: Այնուամենայնիվ, կլասի բաղադրիչները հասկանալը դեռևս կարևոր է հին կոդերի բազաները պահպանելու և թարմացնելու համար:</p>

    <b>React lifecycle</b>

    <p>React-ում բաղադրիչներն ունեն կյանքի ցիկլ, որը նկարագրում է տարբեր փուլերը, որոնց միջով նրանք անցնում են իրենց գոյության ընթացքում: React-ի կյանքի ցիկլը հասկանալը կարևոր է հուսալի React հավելվածներ ստեղծելու և պահպանելու համար:</p>

    <p>React բաղադրիչի կյանքի ցիկլի մեթոդները խմբավորված ըստ փուլերի.</p>

    <h4>Mounting phase</h4>    

    <p><b>{'constructor()'}</b>. կանչվում է, երբ բաղադրիչը սկզբնավորվում է:</p>

    <p><b>{'static getDerivedStateFromProps()'}</b>. կանչվում է, երբ բաղադրիչը սկզբնավորվում է, և այնուհետև նորից, երբ նրան փոխանցվում են նոր հատկություններ&nbsp;{'(props)'}: Հազվադեպ է օգտագործվում:</p>

    <p><b>{'render()'}</b> կանչվում է ամեն անգամ, երբ կոմպոնենտը պետք է վերագծվի:</p>

    <p><b>{'componentDidMount()'}</b>. կանչվում է բաղադրիչի առաջին անգամ արտապատկերումից հետո:</p>

    <h4>Updating phase</h4>

    <p><b>{'static getDerivedStateFromProps()'}</b>. այս մեթոդը կանչվում է, երբ կոմպոնենտին նոր հատկություններ (props) են փոխանցվում:</p>

    <p><b>{'shouldComponentUpdate()'}</b>. կանչվում է նախքան բաղադրիչի վերաարտադրումը: Թույլ է տալիս չեղարկել թարմացումը:</p>

    <p><b>{'render()'}</b> կանչվում է ամեն անգամ, երբ կոմպոնենտը պետք է վերագծվի:</p>

    <p><b>{'getSnapshotBeforeUpdate()'}</b>. կանչվում է նախքան բաղադրիչի թարմացումը: Հազվադեպ է օգտագործվում:</p>

    <p><b>{'componentDidUpdate()'}</b>. կանչվում է բաղադրիչի թարմացումից հետո:</p>


    <h4>Ջնջման փուլ (Unmounting phase)</h4>


    <p><b>{'componentWillUnmount()'}</b>. կանչվում է, երբ բաղադրիչը պատրաստվում է ջնջվել DOM-ից:</p>

    <p>Օրինակ, որը ցույց է տալիս կյանքի ցիկլի մեթոդները.</p>

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

  <p>{'<'}<span className='green'>p</span>{'>'}դուք սեղմել եք{'{'}<span className='red'>this</span>.<span className='blue'>state</span>.<span className='blue'>count</span>{'}'} անգամ{'</'}<span className='green'>p</span>{'>'}</p>

  <p>{'<'}<span className='green'>button</span> <span className='blue'>onClick</span>={'{'}<span className='red'>this</span>.<span className='blue'>handleClick</span>{'}>'}Սեղմել{'</'}<span className='green'>button</span>{'>'}</p>
  
  <p>{'</'}<span className='green'>div</span>{'>'}</p>

  <p>&nbsp;&nbsp;{');'}</p>

  <p>&nbsp;{'}'}</p>

  <p>{'}'}</p>
</code>

<p>Այս օրինակում մենք սահմանում ենք <b>LifecycleDemo</b> կլաս, որը հաղորդագրություններ է գրում կոնսոլին կոմպոնենտի կյանքի ցիկլի յուրաքանչյուր փուլի ընթացքում: Մենք նաև սահմանում ենք <b>handleClick</b> մեթոդ, որը թարմացնում է բաղադրիչի վիճակը:</p>

<p>Երբ բաղադրիչն առաջին անգամ տեղադրվում է, հաջորդականությամբ կանչվում են հետևյալ մեթոդները. <b>constructor, getDerivedStateFromProps, render և componentDidMount</b>: Երբ բաղադրիչի վիճակը փոխվում է, <b>shouldComponentUpdate, render և componentDidUpdate</b> մեթոդները կանչվում են այդ հերթականությամբ:</p>
   
<p>Կոմպոնենտի ջնջման ժամանակ կանչվում է <b>componentWillUnmount</b> մեթոդը.</p>
    
<p>Կարևոր է հասկանալ React բաղադրիչի կյանքի ցիկլը, որպեսզի կարողանաք օպտիմալացնել ձեր կոմպոնենտները և խուսափել տարածված խնդիրներից, ինչպիսիք են հիշողության արտահոսքը և անվերջ ցիկլերը: Բայց մի անհանգստացեք, եթե սկզբում դժվար է թվում. պրակտիկայի դեպքում դուք ավելի վստահ կդառնաք դրանում:</p>  
    

<b><p>* Տեքստը գրված է թարգմանչի օգնությամբ։ Եթե սխալ եք հայտնաբերել, խնդրում ենք մեզ տեղյակ պահել *</p></b>
    <div className='ads-container'>  
  {/*  реклама  */}
</div>
    </div>
  )
}

export default AmReact_3;