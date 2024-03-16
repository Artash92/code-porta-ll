import React from 'react';

function TjReact_2() {
  return (
    <div>
      <div className='ad-container'>  
          {/*  реклама  */}
        </div>
       
       <h1>JSX</h1>

<p>JSX як васеъшавии синтаксиси JavaScript мебошад, ки ба шумо имкон медиҳад, ки дар файлҳои JavaScript коди ба HTML монандро нависед. Он дар React барои муайян кардани сохтор ва тарҳбандии ҷузъҳои UI ба таври васеъ истифода мешавад.</p>

   <p>Инак як мисоли кори JSX:</p>

<code>
 <p><span className='red'>import</span> React <span className='red'>from</span> <span className='blue1'>'react'</span>; </p>

 <p><span className='red'>function</span> <span className='blueviole'>MyComponent</span>() {'{'}</p>

 <p><span className='red'>return</span> {'('}</p>

 <p>{'<'}<span className='green'>div</span>{'>'}</p>

 <p>&nbsp;{'<'}<span className='green'>h1</span>{'>'}Салом Ҷаҳон!{'</'}<span className='green'>h1</span>{'>'} </p>

 <p>&nbsp;{'<'}<span className='green'>p</span>{'>'}Ин як мисоли оддии JSX аст.{'</'}<span className='green'>p</span>{'>'} </p>

 <p>{'</'}<span className='green'>div</span>{'>'}</p>

 <p>&nbsp;{'); '}</p>

 <p>{'}'}</p>

<p><span className='red'>export default</span> MyComponent;</p> 
</code>

<p>Дар ин мисол, мо як ҷузъи оддии React-ро бо истифода аз JSX муайян мекунем. Компонент элементи <b>div</b>-ро медиҳад, ки дорои элементи <b>h1 ва p</b> мебошад. Аҳамият диҳед, ки коди ба HTML монанд дар қавс дохил карда шудааст ва бо истифода аз синтаксиси JSX муайян карда мешавад.</p>

<p>JSX ба шумо имкон медиҳад, ки коди ба HTML монандро бо мантиқи JavaScript ба осонӣ якҷоя кунед. Масалан, шумо метавонед тағирёбандаҳо ва ифодаҳои JavaScript-ро дар дохили коди JSX-и худ истифода баред:</p>

<code>
  <p><span className='red'>import</span> React <span className='red'>from</span> <span className='blue1'>'react'</span>;</p>

  <p><span className='red'>function</span> <span className='blueviole'>MyComponent</span>() {'{'}</p>

  <p><span className='red'>const</span> name = <span className='blue1'>'John'</span>;  </p>

  <p><span className='red'>return</span> {'('}</p>

  <p>{'<'}<span className='green'>div</span>{'>'} </p>

  <p>&nbsp;{'<'}<span className='green'>h1</span>{'>'} Салом,{'{'}name{'}'}!{'</'}<span className='green'>h1</span>{'>'} </p>

  <p>&nbsp;{'<'}<span className='green'>p</span>{'>'}Ин як мисоли оддии JSX аст.{'</'}<span className='green'>p</span>{'>'} </p>

  <p>{'</'}<span className='green'>div</span>{'>'} </p>

  <p>&nbsp;{");"}</p>

  <p>{" } "}</p>

  <p><span className='red'>export default</span> MyComponent;</p> 
</code>
 
<p>Дар ин мисол, мо дар дохили коди JSX-и худ як тағирёбандаи JavaScript <b>(ном)</b>-ро истифода мебарем, то саломи фардӣ ба таври динамикӣ расонем.</p>

<p>JSX барои таҳияи React талаб карда намешавад, аммо он хеле тавсия дода мешавад, зеро он навиштан ва идоракунии ҷузъҳои мураккаби UI-ро хеле осон мекунад. Вақте ки шумо рамзи JSX менависед, он ба рамзи муқаррарии JavaScript интиқол дода мешавад, ки онро браузер иҷро карда метавонад.</p>

<p>Ду намуди асосии ҷузъҳои React вуҷуд доранд: ҷузъҳои функсионалӣ ва ҷузъҳои синфӣ.</p>

<p>Қисмҳои функсионалӣ ҳамчун функсияҳои JavaScript муайян карда мешаванд, ки унсури JSX-ро бармегардонанд. Онҳо маъмулан барои ҷузъҳои оддии UI-и презентатсия истифода мешаванд, ки ҳеҷ гуна усулҳои ҳолат ё давраи ҳаёт надоранд.</p>

<p>Инак як мисоли ҷузъи оддии функсионалӣ:</p>

<code>
    <p><span className='red'>import</span> React <span className='red'>from</span> <span className='blue1'>'react'</span>; </p>

    <p><span className='red'>function</span> <span className='blueviole'>MyComponent</span>(props) {'{'}</p>

    <p><span className='red'>return</span> {'('}</p>

    <p> {'<'}<span className='green'>div</span>{'>'} </p>

    <p>&nbsp;{'<'}<span className='green'>h1</span>{'>'}Салом,{'{'}props.<span className='blue'>name</span>{'}'}!{'</'}<span className='green'>h1</span>{'>'} </p>

    <p>&nbsp;{'<'}<span className='green'>p</span>{'>'}Ин як ҷузъи функсионалӣ мебошад.{'</'}<span className='green'>p</span>{'>'} </p>

    <p>{'</'}<span className='green'>div</span>{'>'} </p>

    <p>&nbsp;{');'}</p>

    <p>{'}'}</p>

    <p><span className='red'>export default</span> MyComponent;</p>  
</code>
 
<p>Дар ин мисол, мо ҷузъи функсионалии <b>MyComponent</b>-ро муайян мекунем, ки объекти <b>props</b>-ро ҳамчун аргумент қабул мекунад. Компонент унсури JSX-ро бар мегардонад, ки дорои унсури h1 бо саломи фардӣ ва унсури <b>p</b> бо паём аст.</p>
  
<p>Компонентҳои синф, аз тарафи дигар, ҳамчун синфҳои JavaScript муайян карда мешаванд, ки синфи <b>React.Component</b>-ро васеъ мекунанд. Онҳо барои ҷузъҳои мураккабтари UI истифода мешаванд, ки бояд вазъиятро идора кунанд ва усулҳои давраи ҳаёт дошта бошанд.</p>
 
<p>Инак як мисоли ҷузъҳои оддии синф:</p>

<code>
  <p><span className='red'>import</span> React <span className='red'>from</span> <span className='blue1'>'react'</span>; </p>

  <p><span className='red'>class</span> MyComponent <span className='red'>extends</span> React.<span className='blue'>Component</span> {'{'}</p>

  <p><span className='blue'>constructor</span>(props) {'{'}</p>

  <p>super(props);</p>

  <p><span className='red'>this</span>.<span className='blue'>state</span> = {'{'}</p>

  <p><span className='blue'>count</span>: <span className='blue1'>0</span></p>

  <p>&nbsp;{'};'}</p>

  <p>{'}'}</p>

  <p><span className='blue'>render</span>() {'{'}</p>

  <p><span className='red'>return</span> {'('}</p>

  <p>{'<'}<span className='green'>div</span>{'>'} </p>

  <p>{'<'}<span className='green'>h1</span>{'>'}Count: {'{'}<span className='red'>this</span>.<span className='blue'>state</span>.<span className='blue'>count</span>{'}'}{'</'}<span className='blue'>h1</span>{'>'}</p>

  <p>{'<'}<span className='green'>button</span> <span className='blue'>onClick</span> = {'{() => '}<span className='red'>this</span>.<span className='blue'>setState</span>{'({'} <span className='blue'>count</span>:<span className='red'>this</span>.<span className='blue'>state</span>.<span className='blue'>count</span> + <span className='blue1'>1</span> {'})}'}{'>'}Increment{'</'}<span className='green'>button</span>{'>'}</p>

  <p>{'</'}<span className='blue'>div</span>{'>'} </p>

  <p>&nbsp;&nbsp;{');'}</p>

  <p>&nbsp;{'}'}</p>

  <p>{'}'}</p>

  <p><span className='red'>export default</span> MyComponent;</p>  
</code>
  
<p>Дар ин мисол, мо як ҷузъи синфро бо номи MyComponent муайян мекунем, ки дорои моликияти давлатӣ бо номи <b>count ва усули render</b> мебошад, ки унсури JSX-ро бо унсури h1 бармегардонад, ки ҳисобкунии ҷорӣ ва < b>тугма</b> элементе, ки ҳангоми клик шумораро зиёд мекунад.</p>

<p>Компонентҳоро барои эҷоди унсурҳои мураккаби интерфейси интерфейси сохтан ва лона кардан мумкин аст. Онҳо инчунин метавонанд реквизитҳоро ҳамчун вуруд қабул кунанд, ки ба онҳо имкон медиҳад, ки дар тамоми барнома фармоишӣ ва дубора истифода шаванд.</p>

<p><b>{'<Component />'}</b> синтаксисест, ки дар React барои намоиш додани ҷузъ истифода мешавад. Он теги худпўшанда ё теги холӣ номида мешавад ва он ба даъват кардани ҷузъ ҳамчун функсия бе аргумент баробар аст.</p>

<p>Масалан, фарз мекунем, ки мо як ҷузъи оддӣ бо номи <b>MyComponent</b> дорем:</p>

<code>
  <p><span className='red'>function</span> <span className='blueviole'>MyComponent</span>() {'{'}</p>

  <p><span className='red'>return</span> {'('}</p>

  <p>{'<'}<span className='green'>div</span>{'>'}</p>

  <p>&nbsp;{'<'}<span className='green'>h1</span>{'>'}Салом Ҷаҳон!{'</'}<span className='green'>h1</span>{'>'} </p>

  <p>{'</'}<span className='green'>div</span>{'>'}</p>

  <p>&nbsp;{');'}</p>

  <p>{'}'}</p>
</code>
 
<p>Барои намоиш додани ин ҷузъ, мо синтаксиси <b>{'<MyComponent /> '}</b>-ро истифода мебарем:</p>

<code>
  <p>ReactDOM.<span className='blue'>render</span>{'('} </p>

  <p>{'<'}<span className='blueviole'>MyComponent </span>{'/>'}, </p>

  <p>document.<span className='blue'>getElementById</span>(<span className='blue1'>'root'</span>)</p>

  <p>{');'}</p> 
</code>

<p>Синтаксиси <b>{'<MyComponent /> '}</b> як мисоли ҷузъи MyComponent эҷод мекунад ва онро ба DOM медиҳад.</p>

<b><p>* Матн бо ёрии тарчумон навишта шудааст. Агар шумо хатое пайдо кунед, лутфан ба мо хабар диҳед *</p></b>
    
    <div className='ads-container'>  
  {/*  реклама  */}
</div>
    </div>
  )
}

export default TjReact_2;