import React from 'react';

function TjJsEs5_10() {
  return (
    <div>
      <div className='ad-container'>  
          {/*  реклама  */}
        </div> 

     <h1>Намунаҳои JavaScript ES5</h1>

<p><b>Функсияи ҳисоб кардани қудрати адад</b></p>
    
<code>
    <p><span className='blueviole'>function</span> <span className='blue'>pow</span>(<span className='blue1'>num, exp</span>) {"{ "}</p>

    <p><span className='blueviole'>var</span> <span className='blue'>cnt</span> = <span className='blue1'>0</span>; </p>

    <p><span className='blueviole'>var</span> <span className='blue'>res</span> = <span className='blue1'>1</span>; </p>

    <p><span className='blueviole'>while</span> (cnt {'<'} exp) {"{"}</p>

    <p>{" res *= num;"}</p>

    <p>{" cnt++; "}</p>

    <p>&nbsp;{" }"}</p>

    <p><span className='blueviole'>return</span> res;</p>

    <p>{"}"}</p>
</code>   

<p><b>pow(num, exp)</b>: Ин функсия қудрати ададро ҳисоб мекунад. Он ду параметр, num ва exp -ро мегирад ва арзиши ададро ба қудрати Exp бармегардонад. Функсия ҳалқаи while ва ҳисобкунакро истифода мебарад, то он даме, ки ҳисобкунак ба экспресс мерасад, ададро ба худ такроран зарб кунад.</p>

<p><b>Функсияи ҳисоб кардани қудрати рақам (версияи алтернативӣ)</b></p>

<code>
  <p><span className='blueviole'>function</span> <span className='blue'>pow2</span>(<span className='blue1'>num1, num2</span>) {'{'}</p>

  <p><span className='blueviole'>var</span> <span className='blue'>num3</span> = <span className='blue1'>1</span>;</p>

  <p><span className='blueviole'>for</span> (<span className='blueviole'>var</span> <span className='blue'>i</span> = <span className='blue1'>1</span>; i {'<='} num2; i++) {'{'}</p>

  <p>{'num3 *= num1;'}</p>

  <p>&nbsp;{'}'}</p>

  <p><span className='blueviole'>return</span> num3;</p>

  <p>{'}'}</p>
</code>

<p><b>pow2(num1, num2)</b>: Ин функсия қудрати ададро ҳисоб мекунад. Он ду параметр, num1 ва num2 -ро мегирад ва арзиши адади1-ро ба қудрати адад2 бармегардонад. Функсия ҳалқаи for-ро барои такроран зарб задани адад1 ба худ адад2-ро то анҷоми давра истифода мебарад.</p>

<p><b>Функсия барои санҷидани он, ки рақами аслӣ аст</b></p>

<code>
  <p><span className='blueviole'>function </span><span className='blue'>isPrime</span>(<span className='blue1'>number</span>) {'{'}</p> 

  <p><span className='blueviole'>if</span> (number {'<'} <span className='blue1'>2</span>) {'{'}</p> 

  <p><span className='blueviole'>return</span> <span className='blue1'>false</span>;</p> 

  <p>{'}'} <span className='blueviole'>else if</span> (number == undefined) {'{'}</p> 

  <p><span className='blueviole'>return</span> undefined;</p> 

  <p>{'}'} <span className='blueviole'>else</span> {'{'}</p> 

  <p><span className='blueviole'>for</span> (<span className='blueviole'>var</span> <span className='blueviole'>i</span> = <span className='blue1'>2</span>; i {'<'} number; i++) {'{'}</p>

   <p> <span className='blueviole'>if</span> (number % i === <span className='blue1'>0</span>) {'{'}</p> 

   <p><span className='blueviole'>return</span> <span className='blue1'>false</span>;</p>

   <p>&nbsp;{' }'}</p>

   <p>{'}'}</p>

   <p><span className='blueviole'>return</span> <span className='blue1'>true</span>;</p>

   <p>&nbsp;{'}'}</p>

   <p>{'}'}</p>
</code> 

<p><b>isPrime(number)</b>: Ин функсия санҷида мешавад, ки оё адад асосӣ аст ё не. Он рақами параметрро мегирад ва агар адад аслӣ бошад, ҳақиқиро бармегардонад, вагарна он бардурӯғ бармегардад. Функсия аввал месанҷад, ки ин адад аз 2 камтар аст, дар ин ҳолат он дарҳол нодурустро бармегардонад. Агар рақам номуайян бошад, он номуайян бармегардад. Дар акси ҳол, функсия барои санҷидани он, ки оё ягон адад байни 2 ва адад (истисноӣ) ададро баробар тақсим мекунад, аз ҳалқаи for истифода мебарад. Агар чунин адад пайдо шавад, функсия бардурӯғ бармегардонад. Агар чунин рақам ёфт нашавад, функсия ҳақиқиро бармегардонад.</p>

<h4>Эҷоди пирамида бо истифода аз ситорачаҳо дар JavaScript</h4>

<code>
    <p><span className='blueviole'>var</span> <span className='blue'>x</span> = <span className='blue1'>6</span>; </p>

    <p><span className='blueviole'>var</span> <span className='blue'>string</span> = <span className='red'>""</span>;</p>

    <p><span className='blueviole'>for</span> (<span className='blueviole'>var</span> <span className='blue'>i</span> = <span className='blue1'>1</span>; i {'<='} x; i++) {"{"}</p>

    <p><span className='blueviole'>for</span> (<span className='blueviole'>var</span> <span className='blue'>y</span> = <span className='blue1'>1</span>; y {'<= '}x - i; y++) {"{"}</p>

    <p>string += <span className='red'>" "</span>;</p>

    <p>{"}"}</p>

    <p> <span className='blueviole'>for</span> (<span className='blueviole'>var</span> <span className='blue'>k</span> = <span className='blue1'>0</span>; k {'<'} <span className='blue1'>2</span> * i - <span className='blue1'>1</span>; k++) {"{"}</p>

    <p>string += <span className='red'>"*"</span>; </p>

    <p>&nbsp;{" }"}</p>

    <p>string += <span className='red'>"\n"</span>;</p>

    <p>{"}"}</p>

    <p>{"console"}.<span className='blue'>log</span>(string);</p>
</code>

<p>Рамз бо истифода аз ситорачаҳо ('*') ва фосила намунаи пирамида эҷод мекунад.</p>

<p>Рамз аз муайян кардани тағирёбандаи "x" бо арзиши 6 ва тағирёбандаи сатри холӣ "сатр" оғоз мешавад. Сипас, он барои такрор кардани ҳар як сатри пирамида, аз 1 сар карда то ба 'x' гузаштан даври for-ро истифода мебарад.</p>

<p>Дар дохили даври якум барои даври дигар барои илова кардани фосила пеш аз ситорачаҳо истифода мешавад. Он (x-i) шумораи фосилаҳоро пеш аз ҳар як сатри ситорачаҳо илова мекунад.</p>

<p>Сипас, даври дуюм барои илова кардани ситорачаҳо ба сатр истифода мешавад. Миқдори ситорачаҳои дар ҳар як сатр иловашуда бо формулаи 2*i-1 дода мешавад, ки дар он 'i' рақами сатри ҷорӣ аст.</p>   

<p>Дар охир, аломати сатри нав ба охири ҳар як сатр илова карда мешавад ва сатри анҷомёфта бо истифода аз усули console.log() дар консол чоп карда мешавад.</p>  

<p><b>Эҷоди як намунаи пирамида бо ситораҳо ва рақамҳо</b></p>

<code>
    <p><span className='blueviole'>var</span> <span className='blue'>lineCount</span> = <span className='blue1'>5</span>;</p>

    <p><span className='blueviole'>var</span> <span className='blue'>symb</span> = <span className='red'>'*'</span>;</p>

    <p><span className='blueviole'>var</span> <span className='blue'>result</span> = <span className='red'>''</span>; </p>

    <p><span className='blueviole'>for</span> (<span className='blueviole'>var</span> <span className='blue'>i</span> = <span className='blue1'>0</span>; i {'<'} lineCount; i++){'{'}</p>

    <p><span className='blueviole'>for</span> (<span className='blueviole'>var</span> <span className='blue'>j</span> = <span className='blue1'>0</span>; j {'<'} lineCount - i; j++){'{'}</p>

    <p>result += <span className='red'>'1'</span>; </p>

    <p>&nbsp;{' }'}</p>

    <p>result += symb + <span className='red'>'\n;'</span></p>

    <p> symb += <span className='red'>' *'</span>;</p>

    <p>{"}"}</p>

    <p>{"console"}.<span className='blue'>log</span>(result)</p>
</code>

<p>Рамз намунаи ситораҳо ва рақамҳоро дар шакли пирамида эҷод мекунад. Он аввал шумораи сатрҳоро барои пирамида ва аломати истифодашаванда муайян мекунад (дар ин ҳолат, ''). Он гоҳ барои сохтани ҳар як хати пирамида ҳалқаҳои лонаро истифода мебарад, ки аз пой сар карда, дар як вақт як аломат илова мекунад, то он даме, ки он ба боло мерасад. Рақамҳо дар намуна бо рақами '1' ифода карда мешаванд. Ҳар як сатри пирамида тавассути илова кардани рақами мувофиқи '1, пас аз он аломат ва аломати сатри нав сохта мешавад. Аломате, ки барои ҳар як сатр истифода мешавад, бо истифода аз оператори пайвасткунии сатр нав карда мешавад, то барои ҳар як сатри нав иловаи '' илова карда шавад. Дар ниҳоят, намунаи натиҷавӣ бо истифода аз функсияи 'console.log' дар консол чоп карда мешавад.</p>

    <h3>Функсияҳои JavaScript барои тавлиди силсилаи Фибоначӣ</h3>


    <p><b>Намуна</b></p>
    
    <code>
      <p><span className='blueviole'>function </span><span className='blue'>fibo</span>(<span className='blue1'>num</span>) {"{"}</p>

      <p><span className='blueviole'>if</span> (isNaN(+num)) {"{"}</p>

      <p><span className='blueviole'>return</span> <span className='red'>'ERROR'</span>; </p>

      <p>{" } "}</p>

      <p><span className='blueviole'>var</span> <span className='blue'>firstN</span> = <span className='blue1'>0</span>; </p>

      <p><span className='blueviole'>var</span> <span className='blue'>secondN</span> = <span className='blue1'>1</span>; </p>

      <p><span className='blueviole'>while </span>(firstN {'<'} num) {"{"}</p>

      <p>{" console"}.<span className='blue'>log</span>(firstN); </p>

      <p>{" secondN = firstN + secondN; "}</p>

      <p>{"firstN = secondN - firstN; "}</p>

      <p>&nbsp;{"}"}</p>

      <p>{"}"}</p>

      <p>fibo(<span className='blue'>55</span>);</p>
    </code>

    <p><b>Намуна</b></p>

    <code>
      <p><span className='blueviole'>function</span> <span className='blue'>fibonachi</span>(<span className='blue1'>num</span>) {"{"}</p>

      <p><span className='blueviole'>var</span> <span className='blue'>num1</span> = <span className='blue1'>0</span>;</p>

      <p><span className='blueviole'>var</span> <span className='blue'>num2</span> = <span className='blue1'>1</span>;</p>

      <p> <span className='blueviole'>if</span> (<span className='blueviole'>typeof</span> num !== <span className='red'>"number"</span>) {'{'}</p>

      <p>{'console'}.<span className='blue'>error</span>(<span className='red'>"танҳо рақамҳоро нависед"</span>);</p>

      <p>{"}"} <span className='blueviole'>else</span> {"{"}</p>

      <p><span className='blueviole'>for</span> (<span className='blueviole'>var</span> <span className='blue'>i</span>; num1 {'<'} num;) {"{"}</p>

      <p>{" console"}.<span className='blue'>log</span>(num1);</p>

      <p>{" i = num1 + num2;"}</p>

      <p>{"num1 = num2;"}</p>

      <p>{"num2 = i;"}</p>

      <p>&nbsp;&nbsp;{" }"}</p>

      <p>&nbsp;{" }"}</p>

      <p>{"}"}</p>

      <p>fibonachi(<span className='blue'>100</span>);</p>
    </code>

    <p><b>Намуна</b></p>
    
    <code> 
      <p><span className='blueviole'>function</span> <span className='blue'>fibonachi</span>(<span className='blue1'>n</span>) {"{"}</p>

      <p> <span className='blueviole'>if</span> (<span className='blueviole'>typeof</span> n === <span className='red'>"number"</span>) {'{'}</p>

      <p> <span className='blueviole'>var</span> <span className='blue'>a</span> = <span className='blue1'>0</span>; </p>

      <p><span className='blueviole'>var</span> <span className='blue'>b</span> = <span className='blue1'>1</span>;  </p>

      <p><span className='blueviole'>var</span> <span className='blue'>result</span>;</p>

      <p><span className='blueviole'>for</span> {'(var i = 0; i < n; i++)'} {"{"}</p>

      <p>{"console"}.<span className='blue'>log</span>(a){';'}</p>

      <p>{"result = a + b;"}</p>

      <p>{"  a = b;"}</p>

      <p>{" b = result; "}</p>

      <p>&nbsp;{"}"}</p>
      
      <p><span className='blueviole'>return</span> <span className='blue1'>result</span>;</p>

      <p>{"}"} <span className='blueviole'>else</span> {"{"}</p>

      <p>{'console'}.<span className='blue'>error</span>(<span className='red'>"илтимос танхо номеро нависед"</span>){';'}</p>

      <p>&nbsp;{"}"}</p>

      <p>{"}"}</p>
   </code>

<p>Инҳо се амали гуногуни генератори пайдарпаии Фибоначиро дар JavaScript мебошанд</p>

<p>Татбиқи аввал (fibo) ҳалқаи while -ро барои тавлиди рақамҳои Фибоначиро то ҳадди муқарраршуда (num) истифода мебарад ва онҳоро бо истифода аз console.log() чоп мекунад. Он аввал месанҷад, ки оё вуруд рақами дуруст аст ва агар не, паёми хатогиро бармегардонад.</p>

<p>Амали дуюм (fibonachi) барои тавлиди ададҳои Фибоначиро то ҳудуди додашуда (num) ҳалқаи for истифода мебарад ва онҳоро бо истифода аз console.log() чоп мекунад. Он аввал месанҷад, ки оё вуруд рақами дуруст аст ва агар не, он паёми хаторо ба консол чоп мекунад.</p>    

 <p>Татбиқи сеюм (fibonachi) инчунин барои тавлиди рақамҳои Фибоначиро то ҳудуди додашуда (n) ҳалқаи for истифода мебарад ва онҳоро бо истифода аз console.log() чоп мекунад. Он аввал месанҷад, ки оё вуруд рақами дуруст аст ва агар не, он паёми хаторо ба консол чоп мекунад. Ин татбиқ се тағирёбандаро барои тавлиди рақами навбатии Фибоначиро истифода мебарад: a, b ва натиҷа. Он бо a = 0 ва b = 1 оғоз мешавад ва барои ҳар як такрор ҷамъи a ва b -ро ҳисоб мекунад, натиҷаро дар натиҷа нигоҳ медорад, a ба b ва b -ро ба натиҷа мегузорад.</p>   
    
   
 <h3>JavaScript тахтаи шоҳмот</h3>

 <code>
    <p><span className='blueviole'>function</span> <span className='blue'>chess</span>(<span className='blue1'>rows, symbolOne, symbolTwo, currentRow</span>) {"{"}</p>

    <p><span className='blueviole'>var</span> <span className='blue'>symbol</span> = <span className='red'>' '</span>;</p>

    <p><span className='blueviole'>if</span> (<span className='blueviole'>typeof</span> rows != <span className='red'>"number"</span></p>

    <p>|| <span className='blueviole'>typeof</span> symbolOne != <span className='red'>"string"</span></p>

    <p>|| <span className='blueviole'>typeof</span> symbolTwo != <span className='red'>"string"</span>) {'{'}</p>

    <p>{' console'}.<span className='blue'>error</span>(<span className='red'>"Invalid params"</span>);</p>

    <p> <span className='blueviole'>return</span>; </p>

    <p>{"}"}</p>

    <p>rows = rows || <span className='blue1'>8</span>;</p>

    <p> symbolOne = symbolOne ||<span className='red'> " ⬛"</span>;</p>
  
    <p>symbolTwo = symbolTwo || <span className='red'>" ⬜"</span>;</p>

    <p>currentRow = currentRow || <span className='blue1'>1</span>;</p>

    <p><span className='blueviole'>if</span> (currentRow {'>'} rows) <span className='blueviole'>return</span> <span className='red'>''</span>;</p>

    <p><span className='blueviole'>for</span> (<span className='blueviole'>var</span> <span className='blue'>i</span> = <span className='blue1'>0</span>; i {'<'} rows / <span className='blue1'>2</span>; i++) {"{"}</p>

    <p>{"symbol += symbolOne + symbolTwo;"}</p>

    <p>{" }"}</p>

    <p>symbol += <span className='red'>"\n"</span>; </p>

    <p>symbol += chess(rows, symbolTwo, symbolOne, currentRow + <span className='blue1'>1</span>);</p>

    <p><span className='blueviole'>return</span> symbol;</p>
  
    <p>{'}'}</p>

    <p>{'console'}.<span className='blue'>log</span>(chess(<span className='blue1'>8</span>, <span className='red'>"⬛"</span>, <span className='red'>"⬜"</span>))</p>
  </code>  

  <p>Ин код функсияи рекурсивиро бо номи "chess" муайян мекунад, ки чаҳор параметрро мегирад: "rows", "symbolOne", "symbolTwo" ва "currentRow". Ҳадафи он эҷод кардани тасвири сатри намунаи тахтаи шоҳмот тавассути иваз кардани ду аломат, "symbolOne" ва "symbolTwo" барои ҳар як мураббаъ дар тахта мебошад.</p>
   
  <p>Функсия аввал месанҷад, ки оё параметрҳои вуруд дурустанд, яъне оё "rows" адад ва "symbolOne" ва "symbolTwo" сатр мебошанд. Агар яке аз параметрҳо нодуруст бошад, он паёми хаторо бармегардонад ва аз функсия мебарояд</p>  
    
  <p>Сипас, он арзишҳои пешфарзро барои "rows", "symbolOne" ва "symbolTwo" муқаррар мекунад, агар онҳо таъмин нашуда бошанд. Қимати пешфарз барои "rows" 8 аст, дар ҳоле ки арзишҳои пешфарз барои "symbolOne" ва "symbolTwo" ду аломати Юникод мебошанд, ки мутаносибан мураббаи сиёҳ ва мураббаи сафедро ифода мекунанд.</p>  

  <p>Баъдан, функсия месанҷад, ки оё он ба охири тахтаи шоҳмот расидааст (яъне, "currentRow" аз "rows" бузургтар аст). Агар ин тавр бошад, он сатри холиро бармегардонад ва аз функсия мебарояд.</p>

  <p>Агар ба охири тахтаи шоҳмот расида нашуда бошад, функсия бо илова кардани "symbolOne" ва "symbolTwo" ба таври навбатӣ "rows / 2" сатри "символ" эҷод мекунад (зеро ҳар як сатр аз ҷуфтҳои "rows / 2" иборат аст) .</p>

  <p>Он гоҳ аломати сатри навро ба сатри "symbol" замима мекунад ва ба функсияи "chess" занги рекурсивӣ медиҳад, иваз кардани "symbolOne" ва "symbolTwo" ва "currentRow" -ро ба 1 зиёд мекунад.</p>  
    
  <p>Дар ниҳоят, он сатри "symbol" -ро бармегардонад, ки тамоми намунаи тахтаи шоҳмотро дар бар мегирад. Сатри охирини код функсияи "chess" -ро бо танзими "rows" ба 8 ва "symbolOne" ва "symbolTwo" ба аломатҳои Юникод, ки мураббаъҳои сиёҳ ва сафедро ифода мекунанд, даъват мекунад ва намунаи тахтаи шоҳмотро дар консол сабт мекунад.</p> 
   
  
  
  <b><p>* Матн бо ёрии тарчумон навишта шудааст. Агар шумо хатое пайдо кунед, лутфан ба мо хабар диҳед *</p></b>
  
    <div className='ads-container'>  
      {/*  реклама  */}
  </div>
    </div>
  )
}

export default TjJsEs5_10;