import React from 'react';

function ArJSEs5_9() {
  return (
    <div>
      <div className='ad-container'>  
          {/*  реклама  */}
        </div>

        <h1>بروتوكول الزائف في جافا سكريبت</h1> 

    <p>مثال على استخدام "بروتوكول الزائف" في جافا سكريبت: في سمة href لعلامة الوصلة {'(<a>)'} . عندما ينقر المستخدم فوق الرابط، سيقوم بتنفيذ الشفرة في جافا سكريبت المحددة في سمة href.</p>

    <p>إليك طريقة بديلة لكتابة نفس الشفرة دون استخدام بروتوكول الجافا سكريبت:</p>

<code>
  <p>{'<'}<span className='green'>a</span> <span className='blue'>href</span>=<span className='blue1'>"#"</span> <span className='blue'>onclick</span>=<span className='blue1'>"myFunction(); return false;"</span>{'>'}Click{'</'}<span className='green'>a</span>{'>'}</p>
  <p>{'<'}<span className='green'>script</span>{'>'}</p>
  <p>&nbsp;<span className='red'>function</span> myFunction() {'{'}</p>
  <p>&nbsp;&nbsp;{'console'}.<span className='blue'>log</span>(<span className='blue1'>"مرحبًا"</span>);</p>
  <p>&nbsp;{'}'}</p>
  <p>{'</'}<span className='green'>script</span>{'>'}</p>
</code>

<p>في هذا المثال، نستخدم سمة href الخالية ومعالج حدث onclick لاستدعاء وظيفة myFunction() عندما ينقر المستخدم فوق الرابط. تمنع عبارة return false الرابط من التنقل إلى صفحة جديدة.</p>

<p>تحقق كل من الأمثلتين نفس النتيجة في تسجيل "مرحبًا" في وحدة التحكم عند النقر فوق الرابط. ومع ذلك، يُعتبر المثال الثاني ممارسة أفضل لأنه يفصل بين شفرة جافا سكريبت وعلامات HTML، مما يجعل الشفرة أسهل في الصيانة والتصحيح.</p>

<h2>نموذج كائن المتصفح (BOM)</h2>

<p>في جافا سكريبت ES5، يمثل نموذج كائن المستند (DOM) عناصر HTML لصفحة الويب كشجرة منظمة، مما يتيح لشفرة جافا سكريبت التفاعل مع محتوى صفحة الويب وتلاعبه بشكل ديناميكي. وفيما يلي بعض الكائنات المستخدمة بشكل شائع في كائن نافذة المتصفح:</p>

<p>1. <b>window:</b> الكائن العلوي في التسلسل الهرمي لجافا سكريبت في المتصفح، يمثل نافذة المتصفح. تصبح جميع الكائنات العالمية في جافا سكريبت والدوال والمتغيرات تلقائيًا أعضاء في كائن النافذة.</p>

<p>2. <b>history:</b> يتيح كائن السجل لجافا سكريبت التفاعل مع سجل التصفح في المتصفح، مما يسمح لك بالانتقال إلى الصفحات السابقة والتالية.</p>

<p>مثال</p>

<code><p>window.history.back(); <span className='green'>// الانتقال إلى الوراء بصفحة واحدة</span> </p></code>

<p>3. <b>navigator:</b> يوفر كائن الملاح معلومات حول متصفح الويب ونظام التشغيل الذي يعمل عليه كمبيوتر المستخدم.</p>

<p>مثال</p>

<code><p>{'console'}.<span className='blue'>log</span>(navigator.userAgent); <span className='green'>// يُخرج سلسلة وكيل المستخدم للمتصفح</span></p></code>

<p>4. <b>screen:</b> يوفر كائن الشاشة معلومات حول دقة الشاشة وعمق الألوان للمستخدم.</p>

<p>مثال:</p>

<code><p>{'console'}.<span className='blue'>log</span>(screen.width);<span className='green'> // يخرج عرض شاشة المستخدم</span></p></code>

<p><span>5. موقع:</span> يوفر كائن الموقع معلومات حول عنوان URL الحالي لصفحة الويب ويسمح لك بالانتقال إلى عناوين URL جديدة.</p>

<p>مثال:</p>

<code><p>{'console'}.<span className='blue'>log</span>(location.href);<span className='green'> // يخرج عنوان URL الحالي location.href = "https://www.example.com"; // يتنقل إلى عنوان URL جديد</span></p></code>

<p>6. <b>document:</b> يمثل كائن المستند محتوى HTML لصفحة الويب الحالية ويتيح لشفرة جافا سكريبت التفاعل مع محتوى الصفحة وتلاعبه.</p>

<p>مثال:</p>

<code><p>{'document'}.<span className='blue'>getElementById</span>(<span className='blue1'>"myDiv"</span>).<span className='blue'>innerHTML </span>= <span className='blue1'>"محتوى جديد"</span>; <span className='green'>// يغير محتوى HTML لعنصر بالهوية "myDiv"</span></p></code>

<p>7. <b>الوسائل:</b> هناك العديد من الوسائل الأخرى المتوفرة في كائن نافذة المتصفح مثل alert()، prompt()، confirm()، setInterval()، و setTimeout()، والتي تسمح لك بعرض صناديق الحوار، وضبط المؤقتات، وأكثر من ذلك.</p>

<p>مثال:</p>

<code><p><span className='blueviole'>alert</span>(<span className='blue1'>"مرحبًا، العالم!"</span>); <span className='green'>// يعرض صندوق حوار التنبيه برسالة "مرحبًا، العالم!"</span></p></code>

<h5>نموذج كائن المتصفح (BOM) هو واجهة برمجية في جافا سكريبت توفر الوصول إلى كائن النافذة في المتصفح وخصائصه. أحد خصائص كائن النافذة هو كائن السجل، الذي يحتوي على سجل التصفح للمستخدم.</h5>

<p>يوفر كائن السجل العديد من الوسائل للتنقل من خلال سجل التصفح. </p>

<p>يمكن استخدام <b>طريقة history.go()</b> للانتقال إلى صفحة محددة في سجل التصفح. تقبل هذه الطريقة عددًا صحيحًا موجبًا أو سالبًا كمعامل. إذا كان المعامل عددًا صحيحًا موجبًا، فإنه يتنقل إلى الأمام في التاريخ، وإذا كان سالبًا، فإنه يتنقل إلى الخلف في التاريخ. على سبيل المثال، history.go(-1) سيتنقل إلى الخلف بصفحة واحدة في سجل التصفح، و history.go(2) سيتنقل إلى الأمام بصفحتين.</p>

<p>تُستخدم <b>طريقة history.back()</b> للانتقال إلى الخلف بصفحة واحدة في سجل التصفح، وتعادل <b>history.go(-1)</b>.</p>

<p>تُستخدم <b>طريقة history.forward()</b> للانتقال إلى الأمام بصفحة واحدة في سجل التصفح، وتعادل <b>history.go(1)</b>.</p>

<p>خاصية <b>history.length</b> تُرجع عدد الصفحات في سجل التصفح.</p>

<p>فيما يلي مثال على كيفية استخدام كائن السجل:</p>

<code>
  <p><span className='green'>{ '// التنقل إلى الخلف بصفحة واحدة في سجل التصفح'} </span> history.<span className='blue'>back</span>();</p>
  <p><span className='green'>{'// التنقل إلى الأمام بصفحة واحدة في سجل التصفح'} </span>history.<span className='blue'>forward</span>();</p>
  <p><span className='green'>{'// التنقل إلى الصفحة الثالثة في سجل التصفح'} </span> history.<span className='blue'>go</span>(<span className='blue1'>2</span>);</p>
  <p><span className='green'>{ '// الحصول على عدد الصفحات في سجل التصفح'}</span>  {'console'}.<span className='blue'>log</span>(history.<span className='blue'>length</span>);</p>
</code>

<h4>نموذج كائن المتصفح (BOM) هو جزء من واجهة برمجة التطبيقات في جافا سكريبت التي توفر الوصول إلى نافذة المتصفح وخصائصها. يُعتبر كائن الملاح جزءًا من نموذج كائن المتصفح ويمثل المتصفح نفسه. يوفر معلومات حول المتصفح الذي يتم استخدامه حاليًا.</h4>

<p>فيما يلي بعض الخصائص لكائن الملاح وشروحها:</p>

<code>
  <p>navigator.<span className='blue'>appCodeName</span>: يُرجع اسم الكود للمتصفح.</p>
  <p>navigator.<span className='blue'>appName</span>: يُرجع اسم المتصفح.</p>
  <p>navigator.<span className='blue'>appVersion</span>: يُرجع معلومات الإصدار للمتصفح.</p>
  <p>navigator.<span className='blue'>language</span>: يُرجع اللغة التي تم تعيينها في المتصفح.</p>
  <p>navigator.<span className='blue'>platform</span>: يُرجع نظام التشغيل الذي يعمل عليه المتصفح.</p>
  <p>navigator.<span className='blue'>userAgent</span>: يُرجع سلسلة وكيل المستخدم للمتصفح</p>
</code>

<p>هذا مثال على كيفية استخدام كائن الملاح:</p>

<code>
  <p>{'console'}.<span className='blue'>log</span>(navigator.appName); <span className='green'>// يخرج اسم المتصفح</span></p>
  <p>{'console'}.<span className='blue'>log</span>(navigator.userAgent); <span className='green'>// يخرج سلسلة وكيل المستخدم للمتصفح</span></p>
</code>

<p>من خلال استخدام خصائص كائن الملاح، يمكنك كتابة شفرة جافا سكريبت تتصرف بشكل مختلف اعتمادًا على المتصفح الذي يستخدمه المستخدم.</p>

<h3>نموذج كائن المتصفح (BOM) في جافا سكريبت يوفر وسيلة للتفاعل مع نافذة المتصفح وخصائصها. كائن window.screen هو جزء من BOM ويوفر معلومات حول شاشة المستخدم.</h3>

<p>إليك تفصيل لخصائص <b> window.screen:</b></p>

<p><b>screen.height:</b> يُرجع الارتفاع الكلي لشاشة المستخدم بالبكسل.</p>

<p><b>screen.width:</b> يُرجع العرض الكلي لشاشة المستخدم بالبكسل.</p>

<p><b>screen.availHeight:</b> يُرجع الارتفاع المتاح لشاشة المستخدم بالبكسل، باستثناء شريط المهام في Windows وعناصر النظام الأخرى.</p>

<p><b>screen.availWidth:</b> يُرجع العرض المتاح لشاشة المستخدم بالبكسل، باستثناء شريط المهام في Windows وعناصر النظام الأخرى.</p>

<p>إليك مثال على كيفية استخدام هذه الخصائص:</p>

<code>
  <p>{'console'}.<span className='blue'>log</span>(<span className='blue1'>"ارتفاع الشاشة الكلي: "</span> + window.<span className='blue'>screen</span>.<span className='blue'>height</span> + <span className='blue1'>" بكسل"</span>);</p>
  <p>{'console'}.<span className='blue'>log</span>(<span className='blue1'>"عرض الشاشة الكلي: "</span> + window.<span className='blue'>screen</span>.<span className='blue'>width</span> + <span className='blue1'>" بكسل"</span>);</p>
  <p>{'console'}.<span className='blue'>log</span>(<span className='blue1'>"ارتفاع الشاشة المتاح: "</span> + window.<span className='blue'>screen</span>.<span className='blue'>availHeight</span> + <span className='blue1'>" بكسل"</span>);</p>
  <p>{'console'}.<span className='blue'>log</span>(<span className='blue1'>"عرض الشاشة المتاح: "</span> + window.<span className='blue'>screen</span>.<span className='blue'>availWidth</span> + <span className='blue1'>" بكسل"</span>);</p>
</code>

<p>سيقوم هذا الكود بتسجيل ارتفاع الشاشة وعرضها، بالإضافة إلى الارتفاع المتاح والعرض المتاح للشاشة، إلى وحدة التحكم.</p>

<p>يرجى ملاحظة أن كائن الشاشة لا يمكن تعديله وهو للقراءة فقط.</p>

<h3>نموذج كائن المتصفح (BOM) هو مجموعة من كائنات جافا سكريبت التي يقدمها متصفح الويب للتفاعل مع نافذة المتصفح. أحد الكائنات في BOM هو كائن الموقع، الذي يمثل عنوان URL الحالي لنافذة المتصفح. يحتوي كائن الموقع على عدة خصائص يمكن الوصول إليها وتعديلها للتفاعل مع عنوان URL.</h3>

<p>فيما يلي شروح خصائص <b>الموقع</b>:</p>

<p><b>location.protocol</b>: هذه الخاصية تحدد بروتوكول الذي يستخدم في عنوان URL، مثل <span className='blue1'>"http:"</span> أو <span className='blue1'>"https:"</span>.</p>

<p><b>location.host:</b> هذه الخاصية تحدد اسم النطاق ورقم المنفذ في عنوان URL، مثل <span className='blue1'>"www.site.com:8080"</span>.</p>

<p><b>location.hostname: </b>هذه الخاصية تحدد اسم النطاق في عنوان URL، مثل <span className='blue1'>"www.site.com"</span>.</p>

<p><b>location.href:</b> هذه الخاصية تحدد العنوان URL بالكامل، مثل <span className='blue1'>"http://www.site.com/about/?name=javascript#content"</span>.</p>

<p><b>location.port:</b> هذه الخاصية تحدد رقم المنفذ في عنوان URL، مثل <span className='blue1'>"8080"</span>.</p>

<p><b>location.pathname:</b> هذه الخاصية تحدد مسار العنوان URL، مثل <span className='blue1'>"/about/"</span>.</p>

<p><b>location.search:</b> هذه الخاصية تحدد سلسلة الاستعلام في عنوان URL، مثل <span className='blue1'>"?name=javascript"</span>.</p>

<p><b>location.hash:</b> هذه الخاصية تحدد هوية الشريحة في عنوان URL، مثل <span className='blue1'>"#content"</span>.</p>

<p>من خلال الوصول وتعديل هذه الخصائص من <b>الموقع</b>، يمكنك التفاعل مع عنوان URL الحالي لنافذة المتصفح، مثل توجيه المستخدم إلى صفحة مختلفة أو تعديل سلسلة الاستعلام.</p>

<p>طريقة <b>setTimeout()</b> هي دالة جافا سكريبت مدمجة تنفذ دالة محددة أو قطعة من الشفرة بعد مرور فترة زمنية محددة. تأخذ معها متغيرين: الدالة التي ستنفذ، والتأخير الزمني بالميلي ثانية.</p>

<p>في الشفرة المقدمة، يتم تعريف متغير يُسمى <b>timer</b> وتعيينه لقيمة إرجاع دالة <b>setTimeout()</b>. الدالة التي تُنفذ هنا هي عبارة بسيطة <b>console.log()</b> التي تقوم بطباعة "مرحبًا، العالم!" إلى وحدة التحكم بعد تأخير 2000 ميلي ثانية (أو 2 ثانية).</p>

<p>ثم يتم استدعاء الدالة <b>clearTimeout()</b> بمتغير النوع <b>timer</b> كمعلمة لها. تُلغي هذه الدالة الانتظار المحدد بواسطة <b>setTimeout()</b>، مما يعني أن عبارة <b>console.log()</b> لن تنفذ بعد التأخير المحدد.</p>

<p>إذا، في الختام، يضبط الكود مؤقتًا لتنفيذ دالة بعد 2 ثانية، ولكن يُلغي هذا المؤقت مباشرة قبل أن يتمكن من الانتهاء. هذا مثال بسيط على كيفية استخدام أساليب <b>setTimeout()</b> و <b>clearTimeout()</b> في جافا سكريبت.</p>   

<p>شفرة مثالية باستخدام <b>setTimeout:</b></p> 

<code>
  <p><span className='blueviole'>function </span><span className='blue'>sayHello</span>() {'{'}</p>
  <p>{'console'}.<span className='blue'>log</span>(<span className='red'>"مرحبًا، العالم!"</span>);</p>
  <p>{'}'}</p>
  <p className='green'>// استدعاء الدالة بعد 2 ثانية</p>
  <p><span className='blueviole'>var</span> <span className='blue'>timer</span> = setTimeout(sayHello, <span className='blue'>2000</span>);</p>
  <p className='green'>// إلغاء المؤقت قبل تنفيذه</p>
  <p>clearTimeout(timer);</p>
 </code>

<p>في هذا المثال، تُستخدم الدالة <b>setTimeout</b> لتأخير تنفيذ دالة <b>sayHello</b> لمدة 2 ثانية. يتم تمرير الدالة كمعلمة إلى setTimeout جنبًا إلى جنب مع تأخير الوقت بالميلي ثانية. تُرجع الدالة <b>setTimeout </b>معرف مؤقت يُستخدم لإلغاء المؤقت قبل تنفيذه باستخدام الدالة <b>clearTimeout</b>.</p>

<h3>الأحداث</h3>

<p>نموذج كائن المستند (DOM) هو واجهة برمجة لمستندات الويب. يُمثل الصفحة بحيث يمكن للبرامج تغيير هيكل المستند، والنمط، والمحتوى. الأحداث هي الإجراءات أو الحوادث التي تحدث في المتصفح، مثل النقر فوق زر، أو التمرير على الصفحة، أو الضغط على مفتاح على لوحة المفاتيح.</p>

<p>onclick</p>

<p>onmousedown</p>

<p>onmouseup</p>

<p>onmousemove</p>

<p>onmouseover</p>

<p>onmouseout</p>

<p>onkeydown</p>

<p>onkeyup</p>

<p>onkeypress</p>

<p>onfocus</p>

<p>onblur</p>

<p>onsubmit</p>

<p>onreset</p>

<p>onselect</p>

<p>onchange</p>

<p>onscroll</p>

<p>onload</p>

<p>onunload</p>

<p>الأحداث المدرجة هي معالجات الأحداث، وهي دوال تُنفذ عند حدوث حدث معين على صفحة الويب. على سبيل المثال، يتم تنفيذ معالج الحدث "onclick" عندما ينقر المستخدم على عنصر على صفحة الويب. بالمثل، يتم تنفيذ معالج الحدث "onload" عندما يتم تحميل الصفحة في المتصفح.</p>

<p>يمكن إضافة هذه المعالجات لعناصر HTML باستخدام البادئة "on" تليها اسم الحدث، مثل "onclick" أو "onload". عند حدوث الحدث المحدد، يتم تنفيذ الدالة المعينة لمعالج الحدث. يتيح هذا للمطورين إنشاء صفحات ويب تفاعلية تستجيب لأفعال المستخدم.</p>

<b><p>* النص المكتوب بمساعدة المترجم. إذا وجدت خطأ، يرجى إعلامنا *</p></b>
   
   <div className='ads-container'>  
     {/*  реклама  */}
     </div> 
    </div>
  )
}

export default ArJSEs5_9;