import React from 'react'

function ArJSEs5_4() {
  return (
    <div>
      <div className='ad-container'>  
          {/*  реклама  */}
        </div>
   
   <h3>التكرار</h3>

<p>
التكرار هو تقنية برمجية حيث تقوم الدالة بدعوة نفسها حتى تصل إلى حالة قاعدية. غالبًا ما يُستخدم لحل المشاكل التي يمكن تقسيمها إلى مشاكل فرعية أصغر ومماثلة.
</p>

<p>
في JavaScript ES5 ، يمكن استخدام التكرار للانتقال عبر شجرة أو هيكل متداخل ، لأداء حسابات معينة أو لإنشاء جميع التركيبات الممكنة لمجموعة من العناصر.
</p>

<p>
إليك مثال على دالة تستخدم التكرار لحساب العامل التشغيلي لرقم معين:
</p>

  <code>
      <p><span className='blueviole'>function</span> <span className='blue'>factorial</span>(<span className='blue'>num</span>) {'{'} </p>

      <p><span className='blueviole'>if</span> (num {'<='}<span className='blue'> 1</span>) {'{'}</p>

      <p><span className='blueviole'>return</span> <span className='blue'>1</span>;</p>

     <p>{'}'}<span className='blueviole'> else</span> {'{'}</p>

     <p><span className='blueviole'>return</span> num * factorial(num - <span className='blue'>1</span>); </p>

     <p>{' }'}</p>

    <p>{'}'}</p>

    <p>{'console.log'}(factorial(<span className='blue'>5</span>)); <span className='darkgreen'>// Output: 120</span></p>
</code>

<p>
في هذا المثال ، تقوم دالة factorial() بدعوة نفسها برقم أصغر حتى تصل إلى الحالة الأساسية num {'<= 1 '}، حيث تعيد قيمة 1. يتم حساب النتيجة النهائية عن طريق ضرب جميع القيم المُعادة معًا.
</p>

<p>
من المهم أن نلاحظ أن التكرار يمكن أن يكون مكلفًا للذاكرة ، خاصة بالنسبة للمدخلات الكبيرة ، لذا من المهم تصميم الدوال التكرارية بعناية والتأكد من وجود حالة قاعدية لتجنب الحلقات اللانهائية.
</p>

<p><b>مثال</b></p>

<code>
  <p><span className='blueviole'>function</span> <span className='blue'>factorial</span>(<span className='blue'>num</span>) {'{'} </p>
  <p><span className='blueviole'>if</span> (num === <span className='blue'>0</span> || num === <span className='blue'>1</span>) {'{'} </p>
  <p><span className='blueviole'>return</span> <span className='blue'>1</span>; </p>
  <p>{'}'} <span className='blueviole'>else</span> {'{'} </p>
  <p><span className='blueviole'>return</span> num * factorial(num - <span className='blue'>1</span>); </p>
  <p> {'}'}</p>
  <p>{'}'}</p>
  <p><span className='blueviole'>var</span> <span className='blue'>result</span> = factorial(<span className='blue'>5</span>);</p>
  <p>{'console.log(result);'} <span className='darkgreen'>// Output: 120</span></p>
</code>

<p>
في المثال المُحدّث، قمنا بتعريف دالة factorial التي تأخذ معامل واحد num. تقوم الدالة أولاً بالتحقق مما إذا كان الرقم المعطى هو 0 أو 1، في هذه الحالة تقوم بإعادة قيمة 1 مباشرة. خلاف ذلك، تقوم بحساب العامل التشغيلي للرقم بشكل تكراري عن طريق استدعاء نفسها factorial مع قيمة num المنقوصة وضربها في القيمة الحالية ل num.
عندما نقوم بدعوة دالة factorial مع الوسيطة 5، فإنها تقوم بحساب العامل التشغيلي بشكل تكراري عن طريق استدعاء نفسها مع القيم المُنخفضة حتى تصل إلى الحالة الأساسية num === 1، حيث تعيد 1 وتنتهي العملية التكرارية، مع إرجاع النتيجة النهائية لـ 5 * 4 * 3 * 2 * 1 = 120.

</p>

<h3>الكائن</h3>

<p>
الكائن هو هيكل بيانات في JavaScript يتيح لك تخزين مجموعات من البيانات والوظائف المتعلقة. إنه مفهوم رئيسي في JavaScript ويُستخدم بشكل واسع في جميع أنحاء اللغة. يتم تعريف الكائنات باستخدام الأقواس المنحنية {} وتتكون من أزواج المفتاح والقيمة، حيث يكون المفتاح سلسلة نصية والقيمة يمكن أن تكون أي نوع من البيانات، بما في ذلك الكائنات الأخرى أو الدوال.
تُستخدم الكائنات في JavaScript لأغراض متنوعة، بما في ذلك إنشاء هياكل بيانات معقدة، تنظيم الشيفرة، وتوفير وسيلة لتجميع البيانات والسلوك المتعلقين. إنها جزء مهم من البرمجة الموجهة نحو الكائنات في JavaScript وهي كتلة بناء أساسية للعديد من الميزات المتقدمة والمكتبات في اللغة.
</p>

<p><b>مثال</b></p>

<p className='darkgreen'>// إنشاء كائن</p>

<code>
  <p><span className='blueviole'>var</span> car = {'{'} </p>
  <p>make: <span className='red'>"Toyota"</span>,</p>
  <p> model: <span className='red'>"Camry"</span>,</p>
  <p>year: <span className='blue'>2021</span>,</p>
  <p> start: <span className='blueviole'>function</span>() {'{'} </p>
  <p>{'console.log'}(<span className='red'>"Starting the car..."</span>);</p>
  <p>{'}'}</p>
  <p>{'}'}</p>
  <p><span className='darkgreen'>// الوصول إلى خصائص الكائن</span></p>
  <p>{'console.log(car.make);'} <span className='darkgreen'>// Toyota</span></p>
  <p>{'console.log(car.year);'}<span className='darkgreen'> // 2021</span> </p>
  <p><span className='darkgreen'>// استدعاء أساليب الكائن</span></p>
  <p>{'car.start(); '}<span className='darkgreen'>// Starting the car...</span></p>
</code>

<p><b>خصائص الكائن</b></p>

<code>
  <p><span className='blueviole'>var</span> <span className='blue'>person</span> = {'{'} </p>
  <p> name: <span className='red'>"John"</span>,</p>
  <p>age: <span className='blue'>30</span>,</p>
  <p>gender: <span className='red'>"male"</span></p>
  <p>{'};'}</p>
  <p>person.email = <span className='red'>"john@example.com"</span>;</p>
  <p>{'console.log(person.name);'} <span className='darkgreen'>// جون</span></p>
  <p>{'console.log(person.email);'} <span className='darkgreen'>// john@example.com</span></p>
</code>

<p><b>أساليب الكائن</b></p>

<code>
  <p><span className='blueviole'>var</span> <span className='blue'>calculator</span> = {'{'}</p>
  <p>add: <span className='blueviole'>function</span>(<span className='blue'>a</span>, <span className='blue'>b</span>) {'{'} </p>
  <p><span className='blueviole'>return</span> a + b; {'}'},</p>
  <p>subtract: <span className='blueviole'>function</span>(<span className='blue'>a</span>,<span className='blue'>b</span>) {'{'} </p>
  <p><span className='blueviole'>return</span> a - b;</p>
  <p>{'}'}</p>
  <p>{'};'}</p>
  <p>{'console.log'}(calculator.add(<span className='blue'>5</span>, <span className='blue'>3</span>)); <span className='darkgreen'>// 8</span></p>
  <p>{'console.log'}(calculator.subtract(<span className='blue'>5</span>, <span className='blue'>3</span>)); <span className='darkgreen'>// 2</span></p>
</code>

<p><b>نوع الكائن الموجه نحو الكائنات - المصفوفة</b></p>

<p className='darkgreen'>// إنشاء مصفوفة</p>

<code>
  <p><span className='blueviole'>var</span> <span className='blue'>colors</span> = [<span className='red'>"red", "green", "blue"</span>]; <span className='darkgreen'>// الوصول إلى عناصر المصفوفة</span></p>
  <p>{'console.log'}(colors[<span className='blue'>0</span>]); <span className='darkgreen'>// أحمر</span></p>
  <p>{'console.log'}(colors[<span className='blue'>2</span>]); <span className='darkgreen'>// أزرق</span></p>
  <p><span className='darkgreen'>// إضافة عنصر جديد إلى المصفوفة </span></p>
  <p>{'colors.push'}(<span className='red'>"yellow"</span>); </p>
  <p><span className='darkgreen'>// التكرار عبر المصفوفة</span></p>
  <p><span className='blueviole'>for</span>(<span className='blueviole'>var</span> <span className='blue'>i</span> = <span className='blue'>0</span>; i {'<'} colors.length; i++) {'{'}</p>
  <p>{' console.log(colors[i]);'}</p>
  <p>{'}'}</p>
</code>

<p><b>الخصائص والأساليب لدالة</b></p>

<code>
  <p><span className='blueviole'>function</span> <span className='blue'>greeting</span>(<span className='blue'>name</span>) {'{'}</p>
  <p>{'console.log'}(<span className='red'>"مرحبا "</span> + name);</p>
  <p>{'}'}</p>
  <p>{'console.log(greeting.length);'} <span className='darkgreen'>// 1 (عدد الوسائط المتوقعة)</span></p>
  <p><span className='darkgreen'>// إضافة خاصية جديدة للدالة</span></p>
  <p>greeting.language = <span className='red'>"الإنجليزية"</span>;</p>
  <p><span className='darkgreen'>// الوصول إلى خصائص الدالة</span></p>
  <p>{'console.log(greeting.language);'} <span className='darkgreen'>// الإنجليزية</span></p>
  <p><span className='darkgreen'>// استدعاء الدالة greeting("جون"); // مرحبا جون</span></p>
</code>

<h3>this</h3>

<p>
في JavaScript ES5 ، هذا هو كلمة مفتاحية تشير إلى الكائن الحالي أو السياق الذي يتم فيه تنفيذ الكود. يمكن أن يشير إلى كائنات مختلفة اعتمادًا على كيفية ومكان استخدامه.
عند استخدام هذا داخل دالة تُستدعى كطريقة لكائن، فإنه يشير إلى الكائن نفسه. على سبيل المثال:

</p>

<code>
  <p><span className='blueviole'>var</span> <span className='blue'>myObject</span> = {'{'}</p>
  <p>name: <span className='red'>"جون"</span>,</p>
  <p>sayHello: <span className='blueviole'>function</span>() {'{'}</p>
  <p>{'console.log'}(<span className='red'>"مرحبا، اسمي "</span> + <span className='blueviole'>this</span>.name);</p>
  <p>{' }'}</p>
  <p>{'};'}</p>
  <p>{'myObject.sayHello();'} <span className='darkgreen'>// الناتج: "مرحبا، اسمي جون"</span></p>
</code>

<p>
في هذا المثال، يشير هذا إلى كائن myObject لأن sayHello() يتم استدعاؤها كطريقة لـ myObject.
</p>

<p>
ومع ذلك، عندما يتم استخدام هذا داخل دالة عادية (أي ليست مستدعاة كطريقة لكائن)، فإنه يشير إلى الكائن العام (window في المتصفح أو global في Node.js) افتراضيًا. على سبيل المثال:
</p>

<code>
  <p><span className='blueviole'>function</span> <span className='blue'>sayHello</span>() {'{'}</p>
  <p>{'console.log'}(<span className='red'>"مرحبا، اسمي "</span> + <span className='blueviole'>this</span>.name);</p>
  <p>{'}'}</p>
  <p><span className='blueviole'>var</span> <span className='blue'>name</span> = <span className='red'>"جون"</span>;</p>
  <p>{'sayHello();'} <span className='darkgreen'>// الناتج: "مرحبا، اسمي غير معرف"</span></p>
</code>

<p>
في هذه الحالة، يشير هذا إلى الكائن العام لأن sayHello() لا يتم استدعاؤها كطريقة لكائن. نظرًا لأن الكائن العام لا يحتوي على خاصية name، فإن this.name هو غير معرف.
من المهم أن نلاحظ أن قيمة هذا يمكن تعيينها صراحة باستخدام طرق مثل call()، apply()، و bind(). هذه الطرق تسمح لك باستدعاء دالة مع قيمة محددة لهذا، بغض النظر عن كيفية استدعائها.
</p>

<h3>الدالة ككائن</h3>

<code>
  <p><span className='blueviole'>var</span> <span className='blue'>user</span> = {'{'}</p>
  <p>name: <span className='red'>"جون"</span>,</p>
  <p>age:<span className='blue'>20</span></p>
  <p>{'};'}</p>
  <p><span className='blueviole'>function </span><span className='blue'> foo</span>(<span className='blue'>a</span>,<span className='blue'>b</span>) {'{'}</p>
  <p>{'console.log'}(<span className='blueviole'>this</span>.name);</p>
  <p>{'console.log(a + b);'}</p>
  <p>{'}'}</p>
  <p><span className='darkgreen'>//استخدام الدالة call لتعيين هذا إلى كائن المستخدم foo.call(user, 3, 5);</span></p>
  <p><span className='darkgreen'>// الوصول إلى خاصية الطول للدالة {'console.log(foo.length);'}</span></p>
</code>

<h3>الوسائط ككائن</h3>

<p>الكائن المتغير هو متغير محلي يتوفر داخل جميع الدوال. يحتوي على قائمة شبيهة بالمصفوفة من الوسائط التي تم تمريرها إلى الدالة.
إليك مثال على كيفية استخدام الكائن المتغير:</p>

<code>
  <p> <span className='blueviole'>function</span> <span className='blue'>sum</span>() {'{'} </p>
  <p><span className='blueviole'>var</span> <span className='blue'>result</span> = <span className='blue'>0</span>;</p>
  <p><span className='blueviole'>for</span> (<span className='blueviole'>var</span><span className='blue'> i</span> = <span className='blue'>0</span>; i {'<'} arguments.length; i++) {'{'} </p>
  <p>{'result += arguments[i];'}</p>
  <p>{'}'}</p>
  <p><span className='blueviole'>return</span> result;</p>
  <p>{'}'}</p>
  <p><span className='blueviole'>var</span> <span className='blue'>total</span> = sum(<span className='blue'>1, 2, 3, 4</span>);</p>
  <p>{'console.log(total);'} <span className='darkgreen'>// الناتج: 10</span></p>
</code>

<p>
في المثال أعلاه، تقبل الدالة sum أي عدد من الوسائط، ويتم استخدام الكائن المتغير للمرور عبر كل وسيط وإضافتها معًا. ثم تقوم الدالة بإرجاع المجموع الإجمالي.
</p>

<p>مثال آخر على استخدام الكائن المتغير هو إنشاء دالة تقوم بدمج جميع الوسائط الممررة فيها إلى سلسلة واحدة</p>

<code>
  <p><span className='blueviole'>function</span> <span className='blue'>concatenate</span>() {'{'}</p>
  <p> <span className='blueviole'>var </span><span className='blue'>result</span> = <span className='red'>" "</span>;</p>
  <p><span className='blueviole'>for</span> (<span className='blueviole'>var</span> <span className='blue'>i</span> = <span className='blue'>0</span>; i {'<'} arguments.length; i++) {'{'}</p>
  <p>{'result += arguments[i];'}</p>
  <p>{'}'}</p>
  <p><span className='blueviole'>return</span> result;</p>
  <p>{'}'}</p>
  <p><span className='blueviole'>var</span> <span className='blue'>str</span> = concatenate(<span className='red'>"مرحبا", " ", "العالم", "!"</span>); </p>
  <p>{'console.log(str);'}<span className='darkgreen'>// الناتج: "مرحبا العالم!"</span></p>
</code>

<p>
في هذا المثال، تقبل الدالة concatenate أي عدد من الوسائط وتدمجها معًا في سلسلة واحدة، التي يتم إرجاعها.
</p>

<b><p>* النص المكتوب بمساعدة المترجم. إذا وجدت خطأ، يرجى إعلامنا *</p></b>
    <div className='ads-container'>  
      {/*  реклама  */}
      </div>
    </div>
  )
}

export default ArJSEs5_4