import React from 'react'

function ArJSEs5_5() {
  return (
    <div>
      <div className='ad-container'>  
          {/*  реклама  */}
        </div>

      <h1>المصفوفة</h1>

<p>في JavaScript، المصفوفة هي هيكل بيانات يسمح لك بتخزين قيم متعددة في متغير واحد. تُعلن المصفوفة باستخدام الأقواس المربعة، وتفصل عناصرها بفواصل.</p>

<p><b>مثال</b></p>

<p className='darkgreen'>// مصفوفة من الأرقام</p>    

 <code>
    <p><span className='blue'>var </span><span className='blue'> numbers</span> = [<span className='blue'>1, 2, 3, 4, 5</span>];</p>
    
    <p className='darkgreen'>// مصفوفة من السلاسل</p>

    <p><span className='blueviole'>var</span> <span className='blue'>fruits</span> = [<span className='red'>"apple", "banana", "orange"</span>];</p>

    <p className='darkgreen'>// مصفوفة من السلاسل</p>

    <p><span className='blueviole'>var</span> <span className='blue'>fruits</span> = [<span className='red'>"apple", "banana", "orange"</span>];</p>
  </code>

<p><b>طول المصفوفة</b></p>

<p>تُعيد خاصية الطول للمصفوفة عدد العناصر في المصفوفة.</p>

<p><b>مثال</b></p>

  <code>
    <p><span className='blueviole'>var</span> <span className='blue'>numbers</span> = [<span className='blue'>1, 2, 3, 4, 5</span>];</p>
    
    <p>{'console.log(numbers.length);'} <span className='darkgreen'>// الناتج: 5</span></p>  
 </code>

<p><b>أساليب المصفوفة</b></p>

<p>تحتوي المصفوفات في JavaScript على أساليب مدمجة يمكن استخدامها للتلاعب ببيانات المصفوفة. بعض أساليب المصفوفة المستخدمة بشكل شائع هي:

</p>
  <code>
    <p><b>push()</b>: تضيف عنصرًا أو أكثر إلى نهاية المصفوفة</p>

    <p><b>pop()</b>: تزيل العنصر الأخير من المصفوفة</p>

    <p><b>shift()</b>: تزيل العنصر الأول من المصفوفة</p>

    <p><b>unshift()</b>: تضيف عنصرًا أو أكثر إلى بداية المصفوفة</p>

    <p><b>splice()</b>: تضيف أو تزيل عناصر من المصفوفة في مؤشر محدد</p>

    <p><b>slice()</b>: تعيد مصفوفة جديدة تحتوي على جزء من المصفوفة الحالية</p>

    <p><b>join()</b>: تجمع جميع عناصر المصفوفة في سلسلة نصية</p>

    <p><b>concat()</b>: تربط مصفوفتين أو أكثر</p>
  </code>

<code>
  <p><b>مثال:</b></p>
  <p><span className='blueviole'>var</span> <span className='blue'>numbers</span> = [<span className='blue'>1, 2, 3, 4, 5</span>];</p>
  <p>numbers.push(<span className='blue'>6</span>); <span className='darkgreen'>// يضيف 6 إلى نهاية المصفوفة</span></p>
  <p>{'console.log(numbers);'} <span className='darkgreen'>// الناتج: [1, 2, 3, 4, 5, 6]</span></p>
</code>

<code>
  <p><span className='blueviole'>var</span> <span className='blue'>fruits</span> = [<span className='red'>"apple", "banana", "orange"</span>];</p>
  <p>fruits.pop(); <span className='darkgreen'>// يزيل العنصر الأخير من المصفوفة</span></p>
  <p>{'console.log(fruits);'} <span className='darkgreen'>// الناتج: ["apple", "banana"]</span></p>
</code>

<code>
  <p><span className='blueviole'>var</span> <span className='blue'>colors</span> = [<span className='red'>"red", "green", "blue"</span>];</p>
  <p>colors.shift(); <span className='darkgreen'> // يزيل العنصر الأول من المصفوفة</span></p>
  <p>{'console.log(colors);'} <span className='darkgreen'>// الناتج: ["green", "blue"]</span></p>
</code>

<code>
  <p><span className='blueviole'>var</span> <span className='blue'>cars</span> = [<span className='red'>"BMW","Audi","Mercedes"</span>];</p>
  <p>cars.unshift(<span className='red'>"Toyota","Honda"</span>); <span className='darkgreen'>// يضيف عنصرين إلى بداية المصفوفة</span></p>
  <p>{'console.log(cars);'} <span className='darkgreen'>// الناتج: ["Toyota","Honda","BMW","Audi","Mercedes"]</span></p>
</code>

<code>
  <p><span className='blueviole'>var</span> <span className='blue'>animals</span> = [<span className='red'>"dog","cat","elephant","lion"</span>];</p>
  <p>animals.splice(<span className='blue'>2</span>,<span className='blue'>0</span>,<span className='red'>"bear"</span>,<span className='red'>"zebra"</span>); <span className='darkgreen'>// يضيف "bear" و "zebra" في المؤشر 2</span></p>
  <p>{'console.log(animals);'} <span className='darkgreen'>// الناتج: ["dog","cat","bear","zebra","elephant","lion"]</span></p>
</code>

<code>
  <p><span className='blueviole'>var</span> <span className='blue'>letters</span> = [<span className='red'>"a", "b", "c", "d", "e"</span>];</p>
  <p><span className='blueviole'>var</span> <span className='blue'>slice1</span> = letters.slice(<span className='blue'>0, 2</span>); <span className='darkgreen'>// يعيد ["a", "b"]</span></p>
  <p><span className='blueviole'>var</span> <span className='blue'>slice2</span> = letters.slice(<span className='blue'>2</span>); <span className='darkgreen'>// يعيد ["c", "d", "e"]</span></p>
  <p>{'console.log(slice1);'}</p>
  <p>{'console.log(slice2);'}</p>
</code>

<code>
  <p><span className='blueviole'>var</span> <span className='blue'>fruits</span> = [<span className='red'>"apple", "banana", "orange"</span>];</p>
  <p><span className='blueviole'>var</span> <span className='blue'>fruitString</span> = fruits.join(<span className='red'>", "</span>); <span className='darkgreen'>// يدمج عناصر المصفوفة بفاصلة</span></p>
  <p>{'console.log(fruitString);'} <span className='darkgreen'>// الناتج: "apple,banana,orange"</span></p>
</code>

<code>
  <p><span className='blueviole'>var</span> <span className='blue'>nums1</span> = [<span className='blue'>1, 2, 3</span>];</p>
  <p><span className='blueviole'>var</span> <span className='blue'>nums2</span> = [<span className='blue'>4, 5, 6</span>];</p>
  <p><span className='blueviole'>var</span> <span className='blue'>nums3</span> = nums1.concat(nums2); <span className='darkgreen'>// يجمع بين nums1 و nums2</span></p>
  <p>{'console.log(nums3);'} <span className='darkgreen'>// الناتج: [1, 2, 3, 4, 5, 6]</span></p>
</code>

<p><b>طرق المصفوفة | دمج المصفوفات</b></p>

<p>يمكنك دمج مصفوفتين أو أكثر في JavaScript باستخدام طريقة concat(). تعيد هذه الطريقة مصفوفة جديدة تحتوي على جميع عناصر المصفوفات الأصلية</p>

<h3>forEach و map</h3>

<p><b>forEach</b> تُستخدم للتكرار عبر كل عنصر في مصفوفة وتنفيذ وظيفة على كل عنصر. تأخذ وظيفة كوسيط وتمرر كل عنصر في المصفوفة كوسيط إلى تلك الوظيفة.</p>

<p>فيما يلي مثال على استخدام forEach لطباعة كل عنصر في مصفوفة:</p>

<code>
  <p><span className='blueviole'>var</span> <span className='blue'>arr</span> = [<span className='blue'>1, 2, 3, 4, 5</span>];</p>
  <p>arr.forEach{'('}<span className='blueviole'>function</span>(<span className='blue'>element</span>) {'{'}</p>
  <p>{'console.log(element);'}</p>
  <p>{' });'}</p>
</code>

<p>سيتم طباعة ما يلي:</p>

<code>
  <p className='blue'>1</p>
  <p className='blue'>2</p>
  <p className='blue'>3</p>
  <p className='blue'>4</p>
  <p className='blue'>5</p>
</code>

<p>
map، من ناحية أخرى، تُستخدم لإنشاء مصفوفة جديدة باستخدام نتائج استدعاء وظيفة على كل عنصر في المصفوفة الأصلية. كما أنها تأخذ وظيفة كوسيط وتمرر كل عنصر في المصفوفة كوسيط إلى تلك الوظيفة. يجب أن تقوم الوظيفة بإرجاع قيمة جديدة لتُضاف إلى المصفوفة الجديدة.
</p>

<p>
فيما يلي مثال على استخدام map لإنشاء مصفوفة جديدة تحتوي على كل عنصر في المصفوفة الأصلية مضاعفًا:
</p>

<code>
  <p><span className='blueviole'>var</span> <span className='blue'>arr</span> = [<span className='blue'>1, 2, 3, 4, 5</span>];</p>
  <p><span className='blueviole'>var</span> <span className='blue'>doubledArr</span> = arr.map{'('}<span className='blueviole'>function</span>(<span className='blue'>element</span>) {'{'}</p>
  <p><span className='blueviole'>return</span> element * <span className='blue'>2</span>;</p>
  <p>{'});'}</p>
  <p>{'console.log(doubledArr);'}</p>
</code>

<p>سيتم طباعة ما يلي</p>

<code><p className='blue'>[2, 4, 6, 8, 10 ]</p></code>

<p>
باختصار، forEach يُستخدم لتنفيذ عملية على كل عنصر في مصفوفة، بينما يُستخدم map لإنشاء مصفوفة جديدة باستخدام نتائج استدعاء وظيفة على كل عنصر من المصفوفة الأصلية.
</p>

<h3>طريقة apply</h3>

<p>في JavaScript، تُستخدم طريقة apply() لاستدعاء وظيفة بقيمة this معينة ومع الوسائط المقدمة كمصفوفة (أو ككائن شبيه بمصفوفة).</p>

<p>الصيغة لاستخدام طريقة apply() هي:</p>
  <code>
    <p>{'functionName.apply(thisValue, [argumentsArray]) '}</p>
  </code>

<p><b>حيث</b></p>

<p>functionName هو اسم الوظيفة التي تريد استدعائها.</p>

<p>thisValue هي القيمة التي تريد استخدامها كقيمة this داخل الوظيفة. هذا المعلم اختياري. إذا تركته فارغًا، سيتم استخدام الكائن العالمي.</p>

<p>argumentsArray هو مصفوفة أو كائن شبيه بمصفوفة يحتوي على الوسائط التي تريد تمريرها إلى الوظيفة. هذا المعلم أيضًا اختياري. إذا لم تحتاج إلى تمرير أي وسائط، فيمكنك تركه فارغًا.</p>

<p>فيما يلي مثال على استخدام طريقة apply() مع مصفوفة:</p>
  
  <code>
    <p><span className='blueviole'>var</span> <span className='blue'>numbers</span> = [<span className='blue'>1, 2, 3, 4, 5</span>];</p>
</code>

<p>في هذا المثال، لدينا مصفوفة من الأرقام ووظيفة sumArray() التي تحسب مجموع جميع العناصر في مصفوفة. نستدعي طريقة apply() على وظيفة sumArray() مع مصفوفة numbers كقيمة this. تقوم طريقة apply() بتمرير المصفوفة كقيمة this وتحسب وظيفة sumArray() مجموع جميع العناصر في المصفوفة وتعيده.</p>

<p>يرجى ملاحظة أن طريقة apply() مماثلة لطريقة call(). الفرق الوحيد هو أن طريقة call() تقبل الوسائط كقائمة مفصولة بفاصلة، في حين أن طريقة apply() تقبل الوسائط كمصفوفة.</p>
  
  <h3>الدالة التي تقوم بدعوة نفسها</h3>
  
  <p>الدالة التي تقوم بدعوة نفسها هي دالة JavaScript تعمل تلقائيًا عندما يتم تعريفها. وهي معروفة أيضًا باسم التعبير الفوري للدالة المستدعاة بشكل فوري (IIFE). يتم لف هذه الدالة بين قوسين ثم يتم استدعاؤها فورًا باستخدام قوسي الفتح والإغلاق.</p>
  
  <p>فيما يلي مثال على الدالة التي تقوم بدعوة نفسها:</p>
  
  <code>
    <p>{'('}<span className='blueviole'>function</span>() {'{'}</p>
    
    <p>{'console.log'}(<span className='red'>"مرحباً، العالم!"</span>);</p>

    <p>{' })();'}</p>
  </code>

<p>في هذا المثال، يتم تعريف الدالة ثم يتم استدعاؤها فورًا باستخدام قوسي الفتح والإغلاق. سيتم طباعة "مرحباً، العالم!" في وحدة التحكم.</p>

<p>غالبًا ما يتم استخدام الدوال التي تقوم بدعوة نفسها لإنشاء نطاق خاص حيث يمكن تعريف المتغيرات والدوال دون تلويث النطاق العام. فيما يلي مثال:</p>

<code>
  <p>{'('}<span className='blueviole'>function</span>() {'{'}</p>
  <p><span className='blueviole'>var</span> <span className='blue'>x</span> = <span className='blue'>10</span>;</p>
  <p><span className='blueviole'>function</span> <span className='blue'>foo</span>() {'{'}</p>
  <p>{'console.log(x);'}</p>
  <p>{'}'}</p>
  <p>foo(); <span className='darkgreen'>// يخرج 10</span></p>
  <p>{'})();'}</p>
</code>

<p>في هذا المثال، يتم تعريف المتغير x والدالة foo داخل الدالة التي تقوم بدعوة نفسها. لا يمكن الوصول إليهم من خارج الدالة، مما يساعد على منع تعارض الأسماء مع الشفرة الأخرى.</p>

<p>يمكن للدوال التي تقوم بدعوة نفسها أيضًا استقبال وسائط، مثل الدوال العادية. فيما يلي مثال:</p>

<code>
  <p>{'('}<span className='blueviole'>function</span>(<span className='blue'>x, y</span>) {'{'}</p>
  <p>{'console.log'}(x + y);</p>
  <p>{'})'}(10, 20); <span className='darkgreen'>// يخرج 30</span></p>
</code>

  <p>في هذا المثال، تستقبل الدالة التي تقوم بدعوة نفسها وسيطين (x و y) وتخرج مجموعهما إلى وحدة التحكم.</p>

  <p>تعتبر الدوال التي تقوم بدعوة نفسها أداة قوية في JavaScript لإنشاء نطاقات خاصة، ومنع تعارض الأسماء، وإدارة المتغيرات العامة.</p>  
    
  <b><p>* النص المكتوب بمساعدة المترجم. إذا وجدت خطأ، يرجى إعلامنا *</p></b>
    <div className='ads-container'>  
      {/*  реклама  */}
      </div> 
</div>
  )
}

export default ArJSEs5_5