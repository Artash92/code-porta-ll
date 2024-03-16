import React from 'react';

function ArJSEs5_6() {
  return (
    <div>
       <div className='ad-container'>  
          {/*  реклама  */}
        </div>
    
    <h3>الكائن العالمي في JavaScript</h3>

<p>الكائن العالمي في JavaScript هو كائن مدمج متاح في كل مكان في الكود. يوفر خصائص وأساليب تُستخدم من قِبَل أجزاء مختلفة من اللغة ويمكن أيضًا توسيعه بوظائف مخصصة.</p>

 <code>
    <p>بعض الخصائص والأساليب للكائن العالمي في JavaScript تشمل:</p>
    <p><span className='blue'>1.</span> Infinity - يمثل قيمة اللانهاية الرياضية</p>
    <p><span className='chocolate'>مثال:</span> console.log(Infinity);</p>
    <p><span className='blue'>2.</span> NaN - يمثل قيمة "ليس رقمًا".</p>
    <p><span className='chocolate'>مثال:</span> console.log(NaN);</p>
    <p><span className='blue'>3.</span> console - يوفر أساليب لتسجيل المعلومات إلى وحدة التحكم.</p>
    <p><span className='chocolate'>مثال:</span> console.log('مرحبًا، العالم!');</p>
    <p><span className='blue'>4.</span> parseInt() - يقوم بتحليل سلسلة ويُرجع عددًا صحيحًا.</p>
    <p><span className='chocolate'>مثال:</span> console.log(parseInt('10'));</p>
    <p><span className='blue'>5.</span> parseFloat() - يقوم بتحليل سلسلة ويُرجع عددًا عشريًا.</p>
    <p><span className='chocolate'>مثال:</span> console.log(parseFloat('3.14'));</p>
    <p><span className='blue'>6.</span> encodeURIComponent() - يُشفر مكون URI.</p>
    <p><span className='blue'>7.</span> Date - يوفر أساليب للعمل مع التواريخ والأوقات.</p>
    <p><span className='chocolate'>مثال:</span> console.log(new Date());</p>
    <p><span className='blue'>8.</span> Math - يوفر وظائف رياضية وثوابت.</p>
    <p><span className='chocolate'>مثال:</span> console.log(Math.PI);</p>
 </code>

<p>يمكن استدعاء أساليب الكائن العالمي من أي مكان في الكود، دون الحاجة إلى إنشاء مثيل من الكائن. ومع ذلك، يجب أخذ الحيطة عند توسيع الكائن العالمي بوظائف مخصصة، حيث يمكن أن تتعارض بشكل محتمل مع الأساليب المدمجة أو الوظائف المخصصة الأخرى.</p>

<p>من المهم أن نلاحظ أنه في بيئات JavaScript الحديثة، الكائن العالمي ليس دائمًا متوفرًا في جميع السياقات، مثل الشفرة المبنية على الوحدات أو في الوضع الصارم.</p>

<h3>تلاعب السلاسل في JavaScript ES5</h3>

<p>
في JavaScript ES5، السلسلة هي تسلسل من الحروف ويمكن تلاعبها باستخدام أساليب مختلفة. تستخدم طريقتان لاستخراج سلاسل فرعية من سلسلة واحدة وهما slice() و substring().
</p>

<p>
طريقة slice() تقوم بإستخراج جزء من السلسلة وتُرجعه كسلسلة جديدة، دون تعديل السلسلة الأصلية. تأخذ معها معلمتين: المؤشر البدئي والمؤشر النهائي (اختياري). إذا لم يتم تقديم المؤشر النهائي، فإن الطريقة ستستخرج حتى نهاية السلسلة. إذا كان المؤشر البدئي سلبيًا، فإنه يعد من نهاية السلسلة.
</p>

<p>
طريقة substring() مشابهة لطريقة slice()، ولكنها لا تقبل مؤشرات سلبية. إذا كان المؤشر البدئي أكبر من المؤشر النهائي، فإن المؤشرين يتم تبديلهما لتجنب الخطأ.
</p>

<p>إليك بعض الأمثلة</p>

<code>
    <p><span className='darkgreen'>// الحصول على السلسلة الفرعية "is"</span></p>
    <p>str.slice(<span className='blue'>5</span>, <span className='blue'>7</span>); <span className='darkgreen'>//"is"</span></p>
    <p>str.substring(<span className='blue'>5</span>,<span className='blue'>7</span>); <span className='darkgreen'>//"is"</span></p>
    
    <p><span className='darkgreen'>// الحصول على السلسلة الفرعية "is my text"</span></p>
    <p>console.log(str.slice(<span className='blue'>5</span>)); <span className='darkgreen'>//"is my text"</span></p>
    <p>console.log(str.substring(<span className='blue'>5</span>)); <span className='darkgreen'>//"is my text"</span></p>
    
    <p><span className='darkgreen'>// الحصول على السلسلة الفرعية " "</span></p>
    <p>console.log(str.slice(<span className='blue'>7</span>, <span className='blue'>5</span>)); <span className='darkgreen'>//" "</span></p>
    <p>console.log(str.substring(<span className='blue'>7</span>, <span className='blue'>5</span>)); <span className='darkgreen'>//"is"</span></p>
    
    <p><span className='darkgreen'>// الحصول على السلسلة الفرعية "my"</span></p>
    <p>console.log(str.slice(-<span className='blue'>7</span>, -<span className='blue'>5</span>)); <span className='darkgreen'> //"my"</span></p>   
    <p>console.log(str.substring(<span className='blue'>7</span>,<span className='blue'>5</span>)); <span className='darkgreen'>//" "</span></p>
 </code>

<p>
في الأمثلة أعلاه، يتم استخدام الطرق slice() وsubstring() لاستخراج سلاسل فرعية من المتغير str. تستخرج الأمثلة الأولى السلسلة الفرعية "is"، بينما تستخرج الثانية "is my text". الأمثلة الثالثة والرابعة توضح كيفية تعامل slice() وsubstring() مع الحالات التي تكون فيها المؤشرات غير منتظمة. أخيرًا، توضح الأمثلة الخامسة كيف يمكن استخدام slice() مع المؤشرات السالبة لاستخراج سلسلة فرعية من نهاية السلسلة.
</p>

<h3>الموضوع هو "البحث في السلاسل" في JavaScript ES5.</h3>

<p>في JavaScript، يمكنك البحث عن سلسلة فرعية محددة ضمن سلسلة باستخدام طرق مختلفة. فيما يلي بعض الطرق المستخدمة بشكل شائع:</p>

<p>1. الموضوع هو "البحث في السلاسل" في JavaScript ES5.
في JavaScript، يمكنك البحث عن سلسلة فرعية محددة ضمن سلسلة باستخدام طرق مختلفة. فيما يلي بعض الطرق المستخدمة بشكل شائع:

indexOf(substring, start): تبحث هذه الطريقة عن سلسلة فرعية ضمن سلسلة وتُرجع مؤشر الحد الأول للظهور الأول للسلسلة الفرعية. يمكنك أيضًا تحديد موضع البدء للبحث من خلال تمرير معلم البداية الاختياري. إذا لم يتم العثور على السلسلة الفرعية، فإنها تُرجع -1.</p>

   <p><b>مثال</b></p>

<code>
  <p><span className='blueviole'>var</span> <span className='blue'>message</span> = <span className='red'>"مرحبا بالعالم"</span>;</p>
  <p><span className='blueviole'>var</span> <span className='blue'>index</span> = message.indexOf(<span className='red'>"العالم"</span>);</p>
  <p>{'console.log(index);'} <span className='darkgreen'>// 7</span></p>
 </code>

<p>2. lastIndexOf(substring, end): تعمل هذه الطريقة بنفس الطريقة مثل indexOf، ولكنها تبحث عن الظهور الأخير للسلسلة الفرعية ضمن السلسلة، مبحثة بالعكس من نهاية السلسلة. يمكنك أيضًا تحديد الموضع النهائي للبحث من خلال تمرير معلم النهاية الاختياري.</p>

<p><b>مثال</b></p>

 <code>
    <p><span className='blueviole'>var</span><span className='blue'> message</span> = <span className='red'>"مرحبا بالعالم، مرحبا!"</span>;</p>
    <p><span className='blueviole'>var</span> <span className='blue'>index</span> = message.lastIndexOf(<span className='red'>"مرحبا"</span>);</p>
    <p>{'console.log(index);'}<span className='darkgreen'> // 15</span></p>
 </code>

<p>
  تُلاحظ أن حالة السلسلة الفرعية تهم عند استخدام هذه الطرق. على سبيل المثال، البحث عن "مرحبا" عندما تحتوي السلسلة فقط على "مرحبا" لن يجد السلسلة الفرعية.
</p>

<p>3.includes(substring): تقوم هذه الطريقة بالتحقق مما إذا كانت السلسلة الفرعية المعطاة موجودة في السلسلة أم لا، وتُرجع قيمة بوليانية تشير إلى النتيجة.</p>

<p><b>مثال</b></p>

<code>
  <p><span className='blueviole'>var</span> <span className='blue'>found</span> = message.includes(<span className='red'>"بالعالم"</span>);</p>
  <p>{'console.log(found);'} <span className='darkgreen'>// true</span></p>
</code>

<p>4. search(regex): تبحث هذه الطريقة عن تعبير منتظم داخل السلسلة وتُرجع مؤشر الظهور الأول. إذا لم يكن هناك تطابق، فإنها تُرجع -1.</p>

<p><b>مثال</b></p>

<code>
  <p><span className='blueviole'>var</span> <span className='blue'>message</span> = <span className='red'>"مرحبا بالعالم، مرحبا!"</span>;</p>
  <p><span className='blueviole'>var</span> <span className='blue'>index</span> = message.search(<span className='red'>/مرحبا/i</span>);<span className='darkgreen'>// تجعل العلامة "i" البحث غير حساس لحالة الأحرف</span></p>
  <p>{'console.log(index);'}<span className='darkgreen'> // 0</span></p>
   </code>

<p>في مثالك، يحتوي المتغير str على السلسلة "هذا هو نصي". تُظهر الأسطر التالية من الكود استخدام الطرق البحثية في السلسلة الموصوفة أعلاه:</p>

 <code>
    <p><span className='blueviole'>var</span> <span className='blue'>str</span> = <span className='red'>"هذا هو نصي"</span>;</p>
    <p>{'console.log'}(str.indexOf(<span className='red'>"هو"</span>)); <span className='darkgreen'>//2</span></p>
    <p>{'console.log'}(str.indexOf(<span className='red'>"هو"</span>, <span className='blue'>3</span>));<span className='darkgreen'> //5</span></p>
    <p>{'console.log'}(str.lastIndexOf(<span className='red'>"هو"</span>)); <span className='darkgreen'>//5</span></p>
    <p>{'console.log'} (str.lastIndexOf(<span className='red'>"هو"</span>, <span className='blue'>4</span>)); <span className='darkgreen'>//2</span></p>
    <p>{'console.log'}(str.indexOf(<span className='red'>"بعض"</span>)); <span className='darkgreen'>//-1</span></p>
 </code>


<p>تبحث هذه الأسطر من الكود عن السلسلة الفرعية "هو" و"بعض" داخل السلسلة str، وتُرجع مؤشراتها باستخدام طرق indexOf وlastIndexOf. المعلمة الثانية لـ indexOf تحدد موضع بدء البحث، في حين تحدد المعلمة الثانية لـ lastIndexOf موضع نهاية البحث.</p>
  
<h3>التعبيرات العادية</h3>

<p>RegExp هو كائن مدمج يوفر وسيلة لإنشاء التعبيرات العادية. التعبيرات العادية هي أنماط تُستخدم لمطابقة تكرارات الأحرف في السلاسل.</p>

<p><b>إليك مثال على إنشاء كائن تعبير عادي باستخدام وظيفة البناء:</b></p>

<code>
  <p><span className='blueviole'>var</span> <span className='blue'>regex</span> = <span className='blueviole'>new</span> RegExp(<span className='red'>"بعض", "طويل"</span>);</p>
</code>
    
<p>هنا، "بعض" هو الرمز التنظيمي العادي، و"طويل" هي الرايات الاختيارية التي تعديل سلوك الرمز التنظيمي.</p>

<p>هنا مثال على استخدام طريقة test() من كائن RegExp لاختبار ما إذا كانت سلسلة تطابق الرمز التنظيمي:</p>

<code>
  <p><span className='blueviole'>var</span> <span className='blue'>str</span> = <span className='red'>" الثعلب البني السريع يقفز فوق الكلب الكسول "</span>;</p>
  <p><span className='blueviole'>var</span> <span className='blue'>regex </span>=<span className='red'> /الثعلب/i</span>;</p>
  <p><span className='blueviole'>var</span> <span className='blue'>result</span> = regex.test(str);</p>
  <p>{'console.log(result);'} <span className='darkgreen'>// true </span></p>
</code>

<p>في هذا المثال، /الثعلب/i هو نمط الرمز التنظيمي الذي يطابق كلمة "الثعلب" بطريقة غير حساسة لحالة الأحرف. تعيد طريقة test() قيمة بوليانية تشير إلى ما إذا كان نمط الرمز التنظيمي يطابق سلسلة str أم لا.</p>

<p>وهنا مثال آخر على استخدام طريقة match() من كائن String مع رمز تنظيمي لاستخراج القيم المطابقة:</p>

<code>
  <p><span className='blueviole'>var</span> <span className='blue'>str</span> = <span className='red'>" الثعلب البني السريع يقفز فوق الكلب الكسول "</span>;</p>
  <p><span className='blueviole'>var</span> <span className='blue'>regex </span>=<span className='red'> /الثعلب/i</span>;</p>
  <p><span className='blueviole'>var</span><span className='blue'> result</span>  = str.match(regex);</p>
  <p>{'console.log(result);'} <span className='darkgreen'> // ["الثعلب"]</span></p>
</code>

<p>في هذا المثال، تعيد طريقة match() مصفوفة تحتوي على السلسلة (السلسلات) المطابقة إذا وُجِد نمط الرمز التنظيمي في السلسلة.</p>

<b>وهنا بعض الرموز الخاصة المستخدمة بشكل شائع في الرموز التنظيمية:</b>

<p>. - يطابق أي حرف باستثناء السطر الجديد \n</p>

<p>\w - يطابق أي حرف كلمة ASCII [a-zA-Z0-9_]</p>

<p>\W - يطابق أي حرف غير كلمة [^a-zA-Z0-9_]</p>

<p>\d - يطابق أي رقم ASCII [0-9]</p>

<p>\D - يطابق أي حرف غير رقمي [^0-9]</p>

<p>\s - يطابق أي حرف فراغ يونيكود</p>

<p>\S - يطابق أي حرف غير فراغ</p>

<code>
  <p><span className='blueviole'>var</span> <span className='blue'>myStr</span> = <span className='red'>"نص رائع"</span>;</p>
  <p><span className='blueviole'>var</span> <span className='blue'>myRegExp</span> = <span className='red'>/\s/</span>;</p>
  <p><span className='blueviole'>var</span> <span className='blue'>result</span> = myRegExp.test(myStr);</p>
  <p>{'console.log(result);'}<span className='darkgreen'> //true</span></p>
</code>

<p><b>^ - يطابق بداية السلسلة</b></p>

<p><b>$ - يطابق نهاية السلسلة</b></p>

<p>الرايات:</p>

<p><b>i - تجاهل الحالة</b></p>

<code>
  <p><span className='blueviole'>var</span><span className='blue'> exp</span> = <span className='red'>/a/i</span> <span className='darkgreen'>// يبحث عن الحروف الكبيرة والصغيرة</span></p> 
</code>


<p><b>g - عالمي</b></p>

<p><b>يبحث عن جميع حالات النمط في سلسلة</b></p>

<code>
<p><span className='blueviole'>var</span> <span className='blue'>str</span> = <span className='red'>"Borobudur"</span>;</p>

<p><span className='blueviole'>var</span> <span className='blue'>pattern</span> = <span className='red'>/[ou]/g</span>;</p>

<p>{'console.log'}(str.replace(pattern, <span className='red'>"a"</span>)); <span className='darkgreen'>//"Barabadar"";</span></p>
</code>
 
<p><b>m - متعدد الأسطر</b></p>

<p><b>يبحث عن جميع حالات النمط في جميع الأسطر من سلسلة</b></p>

<code>
    <p><span className='blueviole'>var</span> <span className='blue'>str</span> = <span className='red'>"نص ما ونص أكثر وبعضه آخر هذه هي النهاية"</span>;</p>

    <p><span className='blueviole'>var</span> <span className='blue'>pattern</span> = <span className='red'>/[ء-ي]+/gu</span>;</p>

    <p>{'console.log(str.match(pattern));'} <span className='darkgreen'>//  [ "نص", "ما", "ونص", "أكثر", "وبعضه", "آخر", "هذه", "هي", "النهاية"]</span></p>
 </code>

 
<p>هنا، نحدد سلسلة str بقيمة "هذا هو نصي". ثم نحدد نمطًا عاديًا للتعبير الذي يطابق بداية السلسلة (^) تليها حرف صغير واحد أو أكثر ([a-z]+) مفصولة بالمسافات، ونهاية السلسلة ($). نستخدم الأقواس لالتقاط كل مجموعة من الحروف كنمط فرعي منفصل.</p>
<p>وأخيرًا، نستخدم طريقة replace() على السلسلة، مارسًا نمطًا وسلسلة استبدال تستخدم الرمز $ للإشارة إلى الأنماط الفرعية الملتقطة بالترتيب الذي تم تحديده. في هذه الحالة، نقوم بتبديل المجموعات الأولى والثانية من الحروف، متركة المجموعات الثالثة والرابعة في مكانها.</p>

<p>إليك الكود:</p>

<code>
  <p><span className='blueviole'>var</span> <span className='blue'>str</span> = <span className='red'>"هذا هو نصي"</span>;</p>

  <p><span className='blueviole'>var</span> <span className='blue'>pattern</span> = <span className='red'>/^([a-z]+) ([a-z]+) ([a-z]+) ([a-z]+)$/</span> ;</p>

  <p><span className='blueviole'>var</span> <span className='blue'>res</span> = str.replace(pattern, <span className='red'>"$2 $1 $3 $4"</span>);</p>

  <p>{'console.log(res);'} <span className='darkgreen'>// "هو هذا نصي"</span> </p>
</code>

  
   <b><p>* النص المكتوب بمساعدة المترجم. إذا وجدت خطأ، يرجى إعلامنا *</p></b>
   
    <div className='ads-container'>  
      {/*  реклама  */}
      </div>   
    </div>
  )
}

export default ArJSEs5_6;