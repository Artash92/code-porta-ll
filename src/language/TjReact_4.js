import React from 'react';

function TjReact_4() {
  return (
    <div>
      <div className='ad-container'>  
          {/*  реклама  */}
        </div>
       
       <h1>Fetch Data Дар React</h1>

       <p>1. Fetch data бо истифода аз API Fetch:</p>

<code> 
  <p><span className='blueviole'>fetch</span>(<span className='blue1'>'https://api.example.com/data'</span>)</p>

  <p>.<span className='blue'>then</span>(response {'=>'} response.<span className='blue'>json</span>()) </p>

  <p>.<span className='blue'>then</span>(data {'=>'} console.<span className='blue'>log</span>(data))</p>

  <p>.<span className='blue'>catch</span>(error {'=>'} console.<span className='blue'>error</span>(error)) </p>
</code>

<p>Дар ин мисол, мо бо истифода аз API <b>fetch</b> ба сервер дархост пешниҳод мекунем. Объекти <b>response</b> бо истифода аз усули <b>json()</b> ба формати JSON табдил дода мешавад ва маълумоти натиҷавӣ ба консол сабт карда мешавад. Агар хатогӣ рух диҳад, он дастгир карда мешавад ва ба консол ворид мешавад.</p>


<p>2. Намоиши маълумоти гирифташуда дар ҳолати компонент:</p>

<code>
  <p><span className='red'>import</span> {'React, { useState, useEffect } '} <span className='red'>from</span> <span className='blue1'>'react'</span>;   </p>

  <p><span className='red'>function</span> <span className='blueviole'>MyComponent</span>() {'{'}</p>

  <p><span className='red'>const</span> [data, setData] = <span className='blueviole'>useState</span>([]);</p>

  <p><span className='blueviole'>useEffect</span>{'(() => {'}</p>

  <p><span className='blueviole'>fetch</span>(<span className='blue1'>'https://api.example.com/data'</span>)</p>

  <p>.<span className='blue'>then</span>(response {'=>'} response.<span className='blue'>json</span>())</p>

  <p>.<span className='blue'>then</span>(data {'=>'} <span className='blueviole'>setData</span>(data))</p>

  <p>.<span className='blue'>catch</span>(error {'=>'} console.<span className='blue'>error</span>(error)); </p>

  <p>{'}, []);'}</p>

  <p><span className='red'>return</span> {'('}</p>

  <p>{'<'}<span className='green'>div</span>{'>'}</p>

  <p>{'{'}data.<span className='blue'>map</span>{'(item => ('}</p>

  <p>{'<'}<span className='green'>p</span> key={'{item.'}<span className='blue'>id</span>{'}>'}{'{item.'}<span className='blue'>name</span>{'}</'}<span className='green'>p</span>{'>'}</p>

  <p>{'))} '}</p>

  <p>{'</'}<span className='green'>div</span>{'>'}</p>

  <p>&nbsp;{');'}</p>

  <p>{'}'}</p>
</code>    

<p>Дар ин мисол, мо қалмоқи <b>useState</b>-ро барои муайян кардани тағирёбандаи ҳолати бо номи <b>data</b> истифода мебарем. Мо инчунин қалмоқи <b>useEffect</b>-ро барои гирифтани маълумот аз сервер ҳангоми васл кардани компонент истифода мебарем ва тағирёбандаи ҳолати <b>data</b>-ро бо маълумоти гирифташуда навсозӣ мекунем. Ниҳоят, мо усули <b>map</b>-ро истифода мебарем, то дар массиви маълумот давр занем ва ҳар як объектро ҳамчун унсури параграф нишон диҳем.</p>

<h1>Axios</h1>

<p>Ҳам Fetch ва ҳам Axios китобхонаҳои JavaScript мебошанд, ки барои қабули дархостҳои HTTP аз браузер ё муҳити Node.js истифода мешаванд. Бо вуҷуди ин, байни ин ду фарқият вуҷуд дорад.</p>


<p>Fetch як API-и дарунсохт аст, ки ваъдаҳоро барои коркарди дархостҳо ва посухҳо истифода мебарад. Он дорои синтаксиси соддатар аст ва истифодааш барои дархостҳои оддӣ осонтар аст, аммо он дорои баъзе хусусиятҳои пешрафта, ба монанди лағви дархост, рӯйдодҳои пешрафт ва кӯшишҳои автоматии дархост.</p>

<p>Axios як китобхонаи маъмули тарафи сеюм аст, ки барои қабули дархостҳои HTTP API-и бойтар ва пурқувватро таъмин мекунад. Он бекоркунии дархост, рӯйдодҳои пешрафт ва такрори автоматии берун аз қуттӣ дастгирӣ мекунад ва инчунин дорои дастгирии дохилӣ барои коркарди додаҳои посух ба монанди JSON, XML ва FormData.</p>

<p>Дар робита ба он ки чаро истифодаи Axios бар Fetch беҳтар аст, он воқеан аз ниёзҳои мушаххаси лоиҳаи шумо вобаста аст. Агар шумо як барномаи оддии веб сохта истода бошед, ки танҳо дархостҳои асосиро талаб мекунад, пас Fetch метавонад кофӣ бошад. Аммо, агар ба шумо хусусиятҳои мукаммалтар ва API-и пурқувваттар барои коркарди дархостҳо ва посухҳо ниёз дошта бошед, пас Axios интихоби беҳтар аст.</p>

<p>Баъзе бартариҳои истифодаи Axios over Fetch иборатанд аз:</p>

<p>1. Муносибати беҳтари хатогиҳо: Axios дорои системаи мустаҳкамтар барои коркарди хатоҳо ва дар муқоиса бо Fetch паёмҳои хатогиҳои муфидтар фароҳам меорад.</p>

<p>2. Боздоштҳо: Axios интерсепторҳоро таъмин мекунад, ки ба шумо имкон медиҳанд дархостҳо ё ҷавобҳоро пеш аз фиристодан ё қабул кардани онҳо тағир диҳед.</p>

<p>3. Табдилдиҳии худкори маълумоти дархост ва посух: Axios метавонад ба таври худкор маълумоти дархост ва посухро ба форматҳои гуногун табдил диҳад, ба монанди JSON, ки ҳангоми кор бо APIҳо хеле муфид буда метавонад.</p>

<p>4. Бекоркунии осони дархостҳо: Axios роҳи оддии бекор кардани дархостҳоро пешниҳод мекунад, ки он метавонад ҳангоми кор бо шабакаҳои суст ё беэътимод муфид бошад.</p>

<p>Хулоса, ҳам Fetch ва ҳам Axios абзорҳои муфид барои қабули дархостҳои HTTP дар JavaScript мебошанд, аммо Axios хусусиятҳои мукаммалтар ва API-и пурқудратро таъмин мекунад, ки метавонад барои сохтани барномаҳои мураккабтар хеле муфид бошад.</p>

<p><b>Axios</b> китобхона барои қабули дархостҳои HTTP аз браузер ё Node.js мебошад. Он фиристодани дархостҳоро бо истифода аз ваъдаҳо ва коркарди посухҳоро осон мекунад.</p>

<p>Барои истифодаи Axios дар React.js, шумо аввал бояд онро бо истифода аз фармон насб кунед:</p>

<b>npm install axios</b>

<p>Баъд аз ин, шумо метавонед Axios-ро дар ҷузъҳои React-и худ истифода баред. Масалан, рамзи зерин дархости GET-ро ба сервери дурдаст мефиристад ва ҷавобро дар саҳифа нишон медиҳад:</p>


<code>
  <p><span className='red'>import</span> {' React, { useState, useEffect }'} <span className='red'>from</span> <span className='blue1'>"react"</span>;</p>  

  <p><span className='red'>import</span> axios <span className='red'>from</span> <span className='blue1'>"axios"</span>;</p>

  <p><span className='red'>function</span> <span className='blueviole'>App</span>() {'{'}</p>  

  <p><span className='red'>const</span> {'[data, setData]'} = <span className='blueviole'>useState</span>("");</p>

  <p><span className='blueviole'>useEffect</span>{'(() => { '}</p>

  <p>axios.<span className='blue'>get</span>(<span className='blue1'>"https://jsonplaceholder.typicode.com/todos/1"</span>).<span className='blue'>then</span>{'((response) => {'}</p>

  <p><span className='blueviole'>setData</span>(response.<span className='blue'>data</span>);</p>

  <p>{'});'}</p>

  <p>{' }, []);'}</p>

  <p> return {'<'}<span className='green'>div</span>{'>'}{'{'}data.<span className='blue'>title</span>{'}'}{'</'}<span className='green'>div</span>{'>;'}</p>

  <p>{'}'}</p>

  <p><span className='red'>export default</span> App;</p>
</code> 
<p>Дар ин мисол қалмоқи <b>useEffect</b> барои фиристодани дархости GET ба сервер ва навсозии тағирёбандаи ҳолати <b>data</b> бо посух истифода мешавад. Пас аз он тағирёбандаи маълумот дар саҳифа бо истифода аз JSX намоиш дода мешавад.</p>

<p>Axios инчунин усулҳои дигари HTTP-ро, аз қабили POST, PUT ва DELETE -ро дастгирӣ мекунад, ки метавонанд барои фиристодани маълумот ба сервер ва тағир додани захираҳо истифода шаванд. Объекти axios инчунин имконоти зиёди конфигуратсияро фароҳам меорад, ба монанди танзими сарлавҳаҳо, вақт-аутҳо ва интерсепторҳои дархост, ки ба шумо имкон медиҳанд рафтори дархостҳоро танзим кунед.</p>

<p>Дар маҷмӯъ, Axios як китобхонаи пурқувват ва чандир барои кор бо дархостҳои HTTP дар React.js аст ва он метавонад бисёр вазифаҳои умумиро, аз қабили гирифтани маълумот аз API дурдаст содда кунад.</p>

<p>Протоколи HTTP якчанд усулҳои дархостро дастгирӣ мекунад, ки барои иҷрои амалиёти гуногун бо додаҳо имкон медиҳанд. Дар ин ҷо тавсифи мухтасари чаҳор усули асосии дархост ва мисолҳои истифодаи онҳо дар React оварда шудааст:</p>

<p>1. <b>GET</b>: усули дархост барои дарёфти маълумот аз сервер истифода мешавад. Дар React шумо метавонед усули <b>axios.get</b></p>-ро истифода баред

<code>
  <p>axios.<span className='blue'>get</span>(<span className='blue1'>'/api/data'</span>)</p>

  <p>.<span className='blue'>then</span>{'(response => {'}</p>

  <p>{'console'}.<span className='blue'>log</span>(response.<span className='blue'>data</span>); </p>

  <p>{'})'}</p>

  <p>.<span className='blue'>catch</span>{'(error => {' }</p>

  <p>{'console'}.<span className='blue'>log</span>(error);</p>

  <p>{'});'}</p>  
</code> 

<p>Дар ин мисол, мо маълумотро аз нуқтаи ниҳоии <b>/api/data</b> мегирем. Агар дархост бомуваффақият бошад, маълумоти посух ба консол сабт карда мешавад ва ҳама гуна хатогиҳо ошкор ва ба консол ворид карда мешаванд.</p>

<p>2. <b>PUT</b>: усули дархост барои навсозии маълумоти мавҷуда дар сервер истифода мешавад. Дар React шумо метавонед усули <b>axios.put</b> -ро истифода баред:</p>


<code>
  <p>axios.<span className='blue'>put</span>{'('}<span className='blue1'>'/api/data/1'</span>, {'{'} <span className='blue'>newData</span>: <span className='blue1'>'updatedData'</span> {"})"}</p>

  <p>.<span className='blue'>then</span>{'('}response { '=> {' }</p>

  <p>{'console'}.<span className='blue'>log</span>(response.<span className='blue'>data</span>);</p>  

  <p>{'})'}</p>

  <p>.<span className='blue'>catch</span>{'(error => {'}</p>

  <p>{'console'}.<span className='blue'>log</span>(error);</p>

  <p>{'});'}</p>
</code>

<p>Дар ин мисол, мо маълумотро дар нуқтаи ниҳоии <b>/api/data/1</b> навсозӣ мекунем. Мо бори пурборро бо маълумоти нав ҳамчун далели дуюм ба <b>axios.put</b> мефиристем. Агар дархост бомуваффақият бошад, маълумоти посух ба консол сабт карда мешавад ва ҳама гуна хатогиҳо ошкор ва ба консол ворид карда мешаванд.</p>

<p>3. <b>POST </b>: усули дархост барои эҷоди маълумоти нав дар сервер истифода мешавад. Дар React шумо метавонед усули <b>axios.post</b>-ро истифода баред</p>

<code>
  <p>axios.<span className='blue'>post</span>{'('}<span className='blue1'>'/api/data'</span>, {'{'} <span className='blue'>newData</span>: <span className='blue1'>'newData'</span> {"})"}</p>

  <p>.<span className='blue'>then</span>{'(response => {'}</p>

  <p>{'console'}.<span className='blue'>log</span>(response.<span className='blue'>data</span>);</p>

  <p>{'})'}</p>  

  <p>.<span className='blue'>catch</span>{'(error => {'}</p>

  <p>{'console'}.<span className='blue'>log</span>(error);</p> 

  <p>{'});'}</p> 
</code>  
<p>Дар ин мисол, мо дар нуқтаи ниҳоии <b>/api/data</b> маълумоти нав эҷод мекунем. Мо бори пурборро бо маълумоти нав ҳамчун далели дуюм ба <b>axios.post</b> мефиристем. Агар дархост бомуваффақият бошад, маълумоти посух ба консол сабт карда мешавад ва ҳама гуна хатогиҳо ошкор ва ба консол ворид карда мешаванд.</p>

<p>4. <b>DELETE </b>: усули дархост барои нест кардани маълумоти мавҷуда дар сервер истифода мешавад. Дар React шумо метавонед усули <b>axios.delete</b> -ро истифода баред:</p>

<code>
  <p> axios.<span className='blue'>delete</span>(<span className='blue1'>'/api/data/1'</span>)  </p>

  <p>.<span className='blue'>then</span>{'(response => { '}</p>

  <p>{'console'}.<span className='blue'>log</span>(response.<span className='blue'>data</span>);</p>

  <p>{'}) '}</p>

  <p>.<span className='blue'>catch</span>{'(error => { '}</p>

  <p>{'console'}.<span className='blue'>log</span>(error);</p>

  <p>{'});'}</p>
</code> 

<p>Дар ин мисол, мо маълумотро дар нуқтаи ниҳоии <b>/api/data/1</b> нест мекунем. Агар дархост бомуваффақият бошад, маълумоти посух ба консол сабт карда мешавад ва ҳама гуна хатогиҳо ошкор ва ба консол ворид карда мешаванд</p>

<p>Барои маълумоти бештар дар бораи Axios, лутфан ба вебсайти расмии онҳо муроҷиат кунед: <a href=" https://axios-http.com" target='_blank' > 👉🏼 https://axios-http.com</a ></p>
    
<b><p>* Матн бо ёрии тарчумон навишта шудааст. Агар шумо хатое пайдо кунед, лутфан ба мо хабар диҳед *</p></b>
    
    <div className='ads-container'>  
  {/*  реклама  */}
</div>
  </div>
  )
}

export default TjReact_4;