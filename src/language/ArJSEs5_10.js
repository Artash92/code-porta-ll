import React from 'react';

function ArJSEs5_10() {
  return (
    <div>
      <div className='ad-container'>  
          {/*  реклама  */}
        </div>
      
        <h1>أمثلة JavaScript ES5</h1>

<p><b>وظيفة لحساب قوة العدد</b></p>

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

<p><b>pow(num, exp)</b>: تقوم هذه الوظيفة بحساب قوة العدد. يأخذ معلمتين، num و exp، ويعيد قيمة num مرفوعة إلى قوة exp. تستخدم الوظيفة حلقة while وعدادًا لضرب num بنفسه exp مرة حتى يصل العداد إلى exp.</p>

<p><b>وظيفة لحساب قوة العدد (النسخة البديلة)</b></p>

<code>
  <p><span className='blueviole'>function</span> <span className='blue'>pow2</span>(<span className='blue1'>num1, num2</span>) {'{'}</p>
  <p><span className='blueviole'>var</span> <span className='blue'>num3</span> = <span className='blue1'>1</span>;</p>
  <p><span className='blueviole'>for</span> (<span className='blueviole'>var</span> <span className='blue'>i</span> = <span className='blue1'>1</span>; i {'<='} num2; i++) {'{'}</p>
  <p>{'num3 *= num1;'}</p>
  <p>&nbsp;{'}'}</p>
  <p><span className='blueviole'>return</span> num3;</p>
  <p>{'}'}</p>
</code>

<p><b>pow2(num1, num2)</b>: تقوم هذه الوظيفة بحساب قوة العدد. يأخذ معلمتين، num1 و num2، ويعيد قيمة num1 مرفوعة إلى قوة num2. تستخدم الوظيفة حلقة for لضرب num1 بنفسه num2 مرة حتى يكتمل الحلقة.</p>

<p><b>وظيفة للتحقق مما إذا كان العدد أوليًا</b></p>

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

<p><b>isPrime(number)</b>: تقوم هذه الوظيفة بالتحقق مما إذا كان العدد أوليًا أم لا. يأخذ معلمة العدد ويعيد true إذا كان العدد أوليًا، وإلا فإنه يعيد false. تقوم الوظيفة أولاً بالتحقق مما إذا كان العدد أقل من 2، وفي هذه الحالة تعيد فورًا false. إذا كان العدد غير معرف، فإنها تعيد undefined. وإلا، تستخدم الوظيفة حلقة for للتحقق مما إذا كان أي عدد بين 2 والعدد (حصريًا) يقسم العدد بشكل متساوٍ. إذا وُجد مثل هذا العدد، فإن الوظيفة تعيد false. إذا لم يتم العثور على مثل هذا العدد، فإن الوظيفة تعيد true.</p>

<h4>إنشاء هرم باستخدام النجوم في JavaScript</h4>
    
<code>
    <p><span className='blueviole'>var</span> <span className='blue'>x</span> = <span className='blue1'>6</span>; </p>

    <p><span className='blueviole'>var</span> <span className='blue'>string</span> = <span className='red'>""</span>;</p>

    <p><span className='blueviole'>for</span> (<span className='blueviole'>var</span> <span className='blue'>i</span> = <span className='blue1'>1</span>; i {'<='} x; i++) {"{"}</p>

    <p><span className='blueviole'>for</span> (<span className='blueviole'>var</span> <span className='blue'>y</span> = <span className='blue1'>1</span>; y {'<= '}x - i; y++) {"{"}</p>

    <p>string += <span className='red'>" "</span>;</p>

    <p>{"}"}</p>

    <p><span className='blueviole'>for</span> (<span className='blueviole'>var</span> <span className='blue'>k</span> = <span className='blue1'>0</span>; k {'<'} <span className='blue1'>2</span> * i - <span className='blue1'>1</span>; k++) {"{"}</p>

    <p>string += <span className='red'>"*"</span>; </p>

    <p>&nbsp;{" }"}</p>

    <p>string += <span className='red'>"\n"</span>;</p>

    <p>{"}"}</p>

    <p>{"console"}.<span className='blue'>log</span>(string);</p>
</code>

<p>ينشئ الكود نمط هرم باستخدام النجوم ('*') والمسافات.</p>

<p>يبدأ الكود بتعريف متغير 'x' بقيمة 6 ومتغير سلسلة فارغ 'string'. ثم يستخدم حلقة for للتكرار من خلال كل صف من الهرم، بدءًا من 1 وصولاً إلى 'x'.</p>

<p>في داخل الحلقة الأولى، يُستخدم حلقة for أخرى لإضافة المسافات قبل النجوم. يضيف (x-i) عدد من المسافات قبل كل صف من النجوم.</p>

<p>ثم، يُستخدم الحلقة الثانية for لإضافة النجوم إلى السلسلة. يُعطى عدد النجوم المضافة في كل صف بالصيغة 2*i-1، حيث 'i' هو رقم الصف الحالي.</p>

<p>أخيرًا، يتم إضافة حرف سطر جديد إلى نهاية كل صف، ويتم طباعة السلسلة المكتملة إلى وحدة التحكم باستخدام الطريقة console.log().</p>  

<p><b>إنشاء نمط هرم باستخدام النجوم والأرقام</b></p>

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

<p>يقوم الكود بإنشاء نمط من النجوم والأرقام بشكل هرمي. يقوم أولاً بتعريف عدد الأسطر للهرم والرمز المستخدم (في هذه الحالة ''). ثم يستخدم حلقات متداخلة لبناء كل سطر من الهرم، بدءًا من القاع وإضافة رمز واحد في كل مرة حتى يصل إلى القمة. يُمثل الأرقام في النمط بالرقم '1'. يتم بناء كل سطر من الهرم عن طريق إضافة عدد من '1' المناسب، تليه الرمز، ثم حرف سطر جديد. يتم تحديث الرمز المستخدم لكل سطر باستخدام عامل الاستمرارية في السلسلة لإضافة '' إضافية لكل سطر جديد. في النهاية، يتم طباعة النمط الناتج إلى وحدة التحكم باستخدام الدالة 'console.log'.</p>

<h3>الدوال في جافا سكريبت لإنشاء سلسلة فيبوناتشي</h3>

<p><b>مثال</b></p>

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

<p><b>مثال</b></p>

<code>
  <p><span className='blueviole'>function</span> <span className='blue'>fibonachi</span>(<span className='blue1'>num</span>) {"{"}</p>
  <p><span className='blueviole'>var</span> <span className='blue'>num1</span> = <span className='blue1'>0</span>;</p>
  <p><span className='blueviole'>var</span> <span className='blue'>num2</span> = <span className='blue1'>1</span>;</p>
  <p> <span className='blueviole'>if</span> (<span className='blueviole'>typeof</span> num !== <span className='red'>"number"</span>) {'{'}</p>
  <p>{'console'}.<span className='blue'>error</span>(<span className='red'>"write only numbers"</span>);</p>
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
 
<p><b>مثال</b></p>
    
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
    
        <p>{'console'}.<span className='blue'>error</span>(<span className='red'>"يرجى كتابة رقم فقط"</span>){';'}</p>
    
        <p>&nbsp;{"}"}</p>
    
        <p>{"}"}</p>
    </code>
    
    <p>هذه هي ثلاثة تنفيذات مختلفة لمولد تسلسل فيبوناتشي في جافا سكريبت</p>
    
    <p>التنفيذ الأول (fibo) يستخدم حلقة while لتوليد أعداد فيبوناتشي حتى حد معين (num) ويقوم بطباعتها باستخدام console.log(). يتحقق أولاً مما إذا كان الإدخال رقمًا صالحًا ، وإذا لم يكن كذلك ، فإنه يعيد رسالة خطأ.</p>
    
    <p>التنفيذ الثاني (fibonachi) يستخدم حلقة for لتوليد أعداد فيبوناتشي حتى حد معين (num) ويقوم بطباعتها باستخدام console.log(). يتحقق أولاً مما إذا كان الإدخال رقمًا صالحًا ، وإذا لم يكن كذلك ، فإنه يقوم بطباعة رسالة خطأ في وحدة التحكم.</p>
    
    <p>التنفيذ الثالث (fibonachi) يستخدم أيضًا حلقة for لتوليد أعداد فيبوناتشي حتى حد معين (n) ويقوم بطباعتها باستخدام console.log(). يتحقق أولاً مما إذا كان الإدخال رقمًا صالحًا ، وإذا لم يكن كذلك ، فإنه يقوم بطباعة رسالة خطأ في وحدة التحكم. يستخدم هذا التنفيذ ثلاث متغيرات لتوليد العدد الفيبوناتشي التالي: a و b و result. يبدأ بقيمة a = 0 و b = 1 ، وفي كل تكرار ، يحسب مجموع a و b ، ويخزن النتيجة في result ، ويضبط a على b ، ويضبط b على result.</p>
    
    <h3>لوحة شطرنج جافا سكريبت</h3>
    
    <code>
        <p><span className='blueviole'>function</span> <span className='blue'>chess</span>(<span className='blue1'>rows, symbolOne, symbolTwo, currentRow</span>) {"{"}</p>
    
        <p><span className='blueviole'>var</span> <span className='blue'>symbol</span> = <span className='red'>' '</span>;</p>
    
        <p><span className='blueviole'>if</span> (<span className='blueviole'>typeof</span> rows != <span className='red'>"number"</span></p>
    
        <p>|| <span className='blueviole'>typeof</span> symbolOne != <span className='red'>"string"</span></p>
    
        <p>|| <span className='blueviole'>typeof</span> symbolTwo != <span className='red'>"string"</span>) {'{'}</p>
    
        <p>{' console'}.<span className='blue'>error</span>(<span className='red'>"معلمات غير صالحة"</span>);</p>
    
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
    
    <p>يعرف هذا الكود دالة متكررة تسمى "chess" تأخذ أربعة معلمات: "rows" و "symbolOne" و "symbolTwo" و "currentRow". يهدف إلى إنشاء تمثيل سلسلة لنمط لوحة الشطرنج عن طريق تبديل رمزين ، "symbolOne" و "symbolTwo" ، بالتناوب لكل مربع على اللوحة.</p>
    
    <p>تتحقق الدالة أولاً مما إذا كانت المعلمات الداخلية صالحة ، أي ما إذا كانت "rows" رقمًا وكانت "symbolOne" و "symbolTwo" سلاسل. إذا كان أي من المعلمات غير صالح ، فإنها تعيد رسالة خطأ وتخرج من الدالة</p>
    
    <p>ثم ، يتم تعيين القيم الافتراضية لـ "rows" و "symbolOne" و "symbolTwo" إذا لم يتم توفيرها. القيمة الافتراضية لـ "rows" هي 8 ، بينما تكون القيم الافتراضية لـ "symbolOne" و "symbolTwo" هي اثنين من الأحرف اليونيكود التي تمثل مربعًا أسودًا ومربعًا أبيضًا على التوالي.</p>
    
    <p>بعد ذلك ، تتحقق الدالة مما إذا كانت قد وصلت إلى نهاية لوحة الشطرنج (أي ما إذا كانت "currentRow" أكبر من "rows"). إذا كان الأمر كذلك ، فإنها تعيد سلسلة فارغة وتخرج من الدالة.</p>
    
    <p>إذا لم يتم الوصول إلى نهاية لوحة الشطرنج ، تقوم الدالة بإنشاء سلسلة "symbol" عن طريق إضافة "symbolOne" و "symbolTwo" بالتناوب "rows / 2" مرة (نظرًا لأن كل صف يتكون من "rows / 2" أزواج من الرموز).</p>
    
    <p>ثم يضيف حرف تغيير السطر إلى سلسلة "symbol" ويقوم بالمكالمة التكرارية إلى الدالة "chess" ، مبادلة "symbolOne" و "symbolTwo" وزيادة "currentRow" بمقدار 1.</p>
    
    <p>أخيرًا ، تعيد سلسلة "symbol" التي تحتوي على نمط لوحة الشطرنج بأكملها. آخر سطر من الكود يستدعي الدالة "chess" مع "rows" محددة إلى 8 و "symbolOne" و "symbolTwo" محددة إلى الأحرف اليونيكود التي تمثل المربعين الأسود والأبيض على التوالي ، ويسجل نمط لوحة الشطرنج الناتج إلى وحدة التحكم.</p>
       
    <b><p>* النص المكتوب بمساعدة المترجم. إذا وجدت خطأ، يرجى إعلامنا *</p></b>
   
   <div className='ads-container'>  
     {/*  реклама  */}
     </div> 
    </div>
  )
}

export default ArJSEs5_10;