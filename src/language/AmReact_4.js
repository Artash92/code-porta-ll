import React from 'react'

function AmReact_4() {
  return (
    <div>
      <div className='ad-container'>  
        {/*  реклама  */}
      </div>

        <h1>Տվյալների ստացում React-ում (Fetch Data)</h1>

        <p>1. Տվյալների ստացում՝ օգտագործելով fetch API՝</p>

<code> 
  <p><span className='blueviole'>fetch</span>(<span className='blue1'>'https://api.example.com/data'</span>)</p>

  <p>.<span className='blue'>then</span>(response {'=>'} response.<span className='blue'>json</span>()) </p>

  <p>.<span className='blue'>then</span>(data {'=>'} console.<span className='blue'>log</span>(data))</p>

  <p>.<span className='blue'>catch</span>(error {'=>'} console.<span className='blue'>error</span>(error)) </p>
</code>


<p>Այս օրինակում մենք հարցում ենք ուղարկում սերվերին՝ օգտագործելով <b>fetch</b> API: <b>response</b> օբյեկտը փոխակերպվում է JSON-ի` օգտագործելով <b>json()</b> մեթոդը, և ստացված տվյալները դուրս են բերվում console(վահանակ): Եթե ​​սխալ է տեղի ունենում, այն բռնվում և տպվում է վահանակում:</p>


<p>2. Ստացված տվյալները ցուցադրվում են կոմպոնենտի state-ում՝</p>

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

<p>Այս օրինակում մենք օգտագործում ենք <b>useState</b> կեռը(hook)` սահմանելու վիճակի փոփոխական, որը կոչվում է <b>data</b>: Մենք նաև օգտագործում ենք <b>useEffect</b> կեռը՝ բաղադրիչը մոնտաժելիս սերվերից տվյալներ ստանալու և <b>data</b> վիճակի փոփոխականը թարմացնելու համար ստացված տվյալներով: Ի վերջո, մենք օգտագործում ենք <b>map</b> մեթոդը տվյալների զանգվածի միջով կրկնելու և յուրաքանչյուր տարրը որպես պարբերության տարր ցուցադրելու համար:</p>

<h1>Axios</h1>

<p>Եվ Fetch-ը, և Axios-ը JavaScript գրադարաններ են, որոնք օգտագործվում են բրաուզերից կամ Node.js շրջանակից HTTP հարցումներ կատարելու համար: Այնուամենայնիվ, կան որոշ տարբերություններ նրանց միջև:</p>

<p>Fetch-ը ներկառուցված բրաուզերի API է, որն օգտագործում է խոստումներ(promises)՝ հարցումները և պատասխանները մշակելու համար: Այն ունի ավելի պարզ շարահյուսություն և ավելի հեշտ է օգտագործել պարզ հարցումների համար, սակայն չունի որոշ առաջադեմ գործառույթներ, ինչպիսիք են հարցումների չեղարկումը, առաջընթացի իրադարձությունները և ավտոմատ հարցումը նորից ուղարկելը:</p> 

<p>Axios-ը հանրաճանաչ գրադարան է, որն ապահովում է ավելի ֆունկցիոնալ և հզոր API՝ HTTP հարցումներ կատարելու համար: Այն աջակցում է հարցումների չեղարկմանը, առաջընթացի իրադարձություններին և ավտոմատ վերաուղարկմանը, ինչպես նաև ունի ներկառուցված աջակցություն պատասխանների տվյալների մշակման համար, ինչպիսիք են JSON, XML և FormData:</p>

<p>Իսկ թե ինչու է ավելի լավ օգտագործել Axios-ը Fetch-ի փոխարեն, դա իսկապես կախված է ձեր նախագծի հատուկ կարիքներից: Եթե ​​դուք կառուցում եք պարզ վեբ հավելված, որը պետք է կատարի միայն հիմնական հարցումները, ապա Fetch-ը կարող է բավարար լինել: Այնուամենայնիվ, եթե Ձեզ անհրաժեշտ են ավելի առաջադեմ գործառույթներ և հզոր API՝ հարցումներն ու պատասխանները կարգավորելու համար, ապա Axios-ն ավելի լավ ընտրություն է:</p>  

<p>Axios-ի օգտագործման որոշ առավելություններ Fetch-ի նկատմամբ ներառում են՝</p>

<p>1. Սխալների ավելի լավ կառավարում. Axios-ն ունի սխալների ավելի արդյունավետ մշակում և ապահովում է ավելի օգտակար սխալի հաղորդագրություններ՝ համեմատած Fetch-ի հետ:</p>  

<p>2. Interceptors. Axios-ը տրամադրում է ընդհատիչներ, որոնք թույլ են տալիս փոփոխել հարցումները կամ պատասխանները նախքան դրանք ուղարկելը կամ ստանալը:</p>  

<p>3. Ավտոմատ կերպով փոխակերպեք հարցումների և պատասխանների տվյալները. Axios-ը կարող է ավտոմատ կերպով փոխակերպել հարցումների և պատասխանների տվյալները տարբեր ձևաչափերի, օրինակ՝ JSON, որը կարող է շատ օգտակար լինել API-ների հետ աշխատելիս:</p>  

<p>4. Հեշտությամբ չեղարկեք հարցումները. Axios-ը տրամադրում է հարցումները չեղարկելու հեշտ միջոց, որը կարող է օգտակար լինել դանդաղ կամ անվստահելի ցանցերի հետ գործ ունենալիս:</p>  

<p>Ընդհանուր առմամբ, և՛ Fetch-ը, և՛ Axios-ը օգտակար գործիքներ են HTTP հարցումները JavaScript-ին ուղարկելու համար, սակայն Axios-ը տրամադրում է ավելի առաջադեմ գործառույթներ և ավելի հզոր API, որը կարող է շատ օգտակար լինել ավելի բարդ հավելվածներ ստեղծելիս:</p>  

<p><b>Axios</b>-ը HTTP հարցումներ ուղարկելու գրադարան բրաուզերից կամ Node.js-ից: Այն հեշտացնում է հարցումներ ուղարկելը խոստումների միջոցով և մշակել պատասխանները:</p>

<p>Axios-ը React.js-ում օգտագործելու համար նախ անհրաժեշտ է տեղադրել այն՝ օգտագործելով հրամանը՝</p>

<p><b>npm install axios</b></p>

<p>Այնուհետև կարող եք օգտագործել Axios-ը ձեր React բաղադրիչներում: Օրինակ՝ հետևյալ կոդը GET հարցում է ուղարկում հեռավոր սերվերին և պատասխանը ցուցադրում էջի վրա.</p>

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

<p>Այս օրինակը օգտագործում է <b>useEffect</b> կեռիկը` սերվերին GET հարցում ուղարկելու և <b>data</b> վիճակի փոփոխականը պատասխանով թարմացնելու համար: Այնուհետև ցուցադրվում է data փոփոխականը: էջում՝ օգտագործելով JSX: </p>  

<p>Axios-ն աջակցում է նաև այլ HTTP մեթոդներ, ինչպիսիք են POST, PUT և DELETE, որոնք կարող են օգտագործվել սերվերին տվյալներ ուղարկելու և ռեսուրսները փոփոխելու համար: Axios օբյեկտը տրամադրում է նաև կազմաձևման բազմաթիվ տարբերակներ, ինչպիսիք են վերնագրերի կարգավորումը, ժամանակի ընդհատումները և հարցումների ընդհատիչները, որոնք թույլ են տալիս հարմարեցնել հարցումները:</p>  

<p>Ընդհանուր առմամբ, Axios-ը հզոր և ճկուն գրադարան է React.js-ում HTTP հարցումների հետ աշխատելու համար, որը կարող է պարզեցնել շատ առաջադրանքներ, ինչպիսիք են տվյալների առբերումը հեռավոր API-ից:</p> 

<p>HTTP պրոտոկոլն աջակցում է հարցումների մի քանի մեթոդներ, որոնք թույլ են տալիս տարբեր գործողություններ կատարել տվյալների վրա: Ահա հարցման չորս հիմնական մեթոդների հակիրճ նկարագրությունը, ինչպես նաև React-ում դրանք օգտագործելու օրինակներ.</p> 

<p>1. <b>GET</b>. Հարցման մեթոդն օգտագործվում է սերվերից տվյալներ ստանալու համար: React-ում կարող եք օգտագործել <b>axios.get</b> մեթոդը:</p>

<code>
  <p>axios.<span className='blue'>get</span>(<span className='blue1'>'/api/data'</span>)</p>

  <p>.<span className='blue'>then</span>{'(response => {'}</p>

  <p>{'console'}.<span className='blue'>log</span>(response.<span className='blue'>data</span>); </p>

  <p>{'})'}</p>

  <p>.<span className='blue'>catch</span>{'(error => {' }</p>

  <p>{'console'}.<span className='blue'>log</span>(error);</p>

  <p>{'});'}</p>  
</code> 

<p>Այս օրինակում մենք տվյալներ ենք ստանում <b>/api/data</b> վերջնակետից: Պատասխանի տվյալները գրվում են վահանակում(console), եթե հարցումը հաջողված է, և ցանկացած սխալ հայտնաբերվում և գրվում է վահանակում:</p>

<p>2. <b>PUT</b>. Հարցման մեթոդ օգտագործվում է սերվերում առկա տվյալները թարմացնելու համար: React-ում կարող եք օգտագործել <b>axios.put</b> մեթոդը՝</p>


<code>
  <p>axios.<span className='blue'>put</span>{'('}<span className='blue1'>'/api/data/1'</span>, {'{'} <span className='blue'>newData</span>: <span className='blue1'>'updatedData'</span> {"})"}</p>

  <p>.<span className='blue'>then</span>{'('}response { '=> {' }</p>

  <p>{'console'}.<span className='blue'>log</span>(response.<span className='blue'>data</span>);</p>  

  <p>{'})'}</p>

  <p>.<span className='blue'>catch</span>{'(error => {'}</p>

  <p>{'console'}.<span className='blue'>log</span>(error);</p>

  <p>{'});'}</p>
</code>

<p>Այս օրինակում մենք թարմացնում ենք տվյալները <b>/api/data/1</b> վերջնակետում: Մենք ուղարկում ենք արդյուքները նոր տվյալների հետ որպես երկրորդ արգումենտ <b>axios.put</b>: Պատասխանի տվյալները գրվում են վահանակում, եթե հարցումը հաջողված է, և ցանկացած սխալ հայտնաբերվում և գրվում է վահանակում:</p>

<p>3.<b>POST</b>. Հարցման մեթոդն օգտագործվում է սերվերի վրա նոր տվյալներ ստեղծելու համար: React-ում կարող եք օգտագործել <b>axios.post</b> մեթոդը՝</p>

<code>
  <p>axios.<span className='blue'>post</span>{'('}<span className='blue1'>'/api/data'</span>, {'{'} <span className='blue'>newData</span>: <span className='blue1'>'newData'</span> {"})"}</p>

  <p>.<span className='blue'>then</span>{'(response => {'}</p>

  <p>{'console'}.<span className='blue'>log</span>(response.<span className='blue'>data</span>);</p>

  <p>{'})'}</p>  

  <p>.<span className='blue'>catch</span>{'(error => {'}</p>

  <p>{'console'}.<span className='blue'>log</span>(error);</p> 

  <p>{'});'}</p> 
</code>  

<p>Այս օրինակում մենք նոր տվյալներ ենք ստեղծում <b>/api/data</b> վերջնակետում: Մենք ուղարկում ենք արդյուքները նոր տվյալների հետ որպես երկրորդ արգումենտ <b>axios.post</b>: Պատասխանի տվյալները գրվում են վահանակում, եթե հարցումը հաջողված է, և ցանկացած սխալ հայտնաբերվում և գրվում է վահանակում:</p>

<p>4.<b>DELETE</b>. Հարցման մեթոդն օգտագործվում է սերվերում առկա տվյալները ջնջելու համար: React-ում կարող եք օգտագործել <b>axios.delete</b> մեթոդը՝</p>

<code>
  <p> axios.<span className='blue'>delete</span>(<span className='blue1'>'/api/data/1'</span>)  </p>

  <p>.<span className='blue'>then</span>{'(response => { '}</p>

  <p>{'console'}.<span className='blue'>log</span>(response.<span className='blue'>data</span>);</p>

  <p>{'}) '}</p>

  <p>.<span className='blue'>catch</span>{'(error => { '}</p>

  <p>{'console'}.<span className='blue'>log</span>(error);</p>

  <p>{'});'}</p>
</code> 

  <p>Այս օրինակում մենք ջնջում ենք տվյալները <b>/api/data/1</b> հասցեով: Եթե ​​հարցումը հաջողվի, պատասխանի տվյալները կգրանցվեն վահանակ, և ցանկացած սխալ կհայտնաբերվի և մուտքագրվի վահանակ:</p>

  <p>Axios գրադարանի մասին լրացուցիչ տեղեկությունների համար այցելեք նրանց պաշտոնական կայքը. <a href="https://axios-http.com" target='_blank'>👉🏼 https://axios-http.com</a></p>

  <b><p>* Տեքստը գրված է թարգմանչի օգնությամբ։ Եթե սխալ եք հայտնաբերել, խնդրում ենք մեզ տեղյակ պահել *</p></b>
    <div className='ads-container'>  
  {/*  реклама  */}
</div>
</div>
  )
}

export default AmReact_4;