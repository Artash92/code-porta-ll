import React from 'react';

function ArJSEs5_7() {
  return (
    <div>
       <div className='ad-container'>  
          {/*  реклама  */}
        </div>

        <h1>البرمجة الشيئية، أو OOP</h1>

<p>البرمجة الشيئية، أو OOP، هي نمط برمجة يؤكد على الكائنات، الفئات، والتغليف. في JavaScript ES5، يتم تنفيذ OOP من خلال استخدام وظائف المُنشئ والنماذج الأولية.</p>

<p>وظيفة المُنشئ هي وظيفة خاصة تُستخدم لإنشاء وتهيئة الكائنات. تُعرف وظائف المُنشئ باستخدام كلمة الأمر function، وتبدأ أسماؤها عادةً بحرف كبير للتمييز بينها وبين الوظائف العادية. يتم استخدام الكلمة this داخل وظيفة المُنشئ للإشارة إلى الكائن الذي يتم إنشاؤه. إليك مثال:</p>

<code>
  <p><span className='blueviole'>function</span> <span className='blue'>Person</span>(<span className='blue'>name, age</span>) {'{'}</p>
  <p><span className='blueviole'>this</span>.name = name;</p>
  <p><span className='blueviole'>this</span>.age = age;</p>
  <p>{'}'}</p>
  <p><span className='blueviole'>var</span> <span className='blue'>person1</span> = <span className='blueviole'>new</span> Person(<span className='red'>"أليس"</span>, <span className='blue'>25</span>);</p>
  <p><span className='blueviole'>var</span> <span className='blue'>person2</span> = <span className='blueviole'>new</span> Person(<span className='red'>"بوب"</span>, <span className='blue'>30</span>);</p>
  <p>{'console.log'}(person1.name); <span className='darkgreen'>// "أليس"</span></p>
  <p>{'console.log'}(person2.age); <span className='darkgreen'>// 30</span></p>
</code>

<p>في هذا المثال، تُستخدم الوظيفة Person كوظيفة المُنشئ لإنشاء كائنين من النوع Person، person1 و person2. تُعين الخصائص name و age باستخدام كلمة this داخل وظيفة المُنشئ.</p>

<p>بالإضافة إلى وظائف المُنشئ، تُستخدم النماذج الأولية لتنفيذ التوريث ومشاركة الأساليب والخصائص بين الكائنات. كل كائن في JavaScript لديه نموذج أولي، وهو كائن آخر يرث منه الكائن. يمكن إضافة الخصائص والأساليب إلى نموذج الكائن باستخدام خاصية النموذج الأولي. إليك مثال:</p>

<code>
  <p><span className='blueviole'>function</span> <span className='blue'>Person</span>(<span className='blue'>name, age</span>) {'{'}</p>
  <p><span className='blueviole'>this</span>.name = name;</p>
  <p><span className='blueviole'>this</span>.age = age;</p>
  <p>{'}'}</p>
  <p>Person.prototype.greet = <span className='blueviole'>function</span>() {'{'}</p>
  <p>{'console.log'}(<span className='red'>"مرحبًا، اسمي "</span> + <span className='blueviole'>this</span>.name + <span className='red'>" وأنا عمري "</span> + <span className='blueviole'>this</span>.age + <span className='red'>" سنة."</span>);</p>
  <p>{'}'}</p>
  <p><span className='blueviole'>var</span> <span className='blue'>person1</span> = <span className='blueviole'>new</span> <span className='blue'>Person</span>(<span className='red'>"أليس"</span>, <span className='blue'>25</span>);</p>
  <p><span className='blueviole'>var</span> <span className='blue'>person2</span> = <span className='blueviole'>new</span> <span className='blue'>Person</span>(<span className='red'>"بوب"</span>, <span className='blue'>30</span>);</p>
  <p>person1.greet(); <span className='darkgreen'>// "مرحبًا، اسمي أليس وأنا عمري 25 سنة."</span></p>
  <p>person2.greet(); <span className='darkgreen'>// "مرحبًا، اسمي بوب وأنا عمري 30 سنة."</span></p>
</code>

<p>في هذا المثال، يتم إضافة طريقة greet إلى نموذج الكائن Person باستخدام خاصية النموذج الأولي. يمكن استدعاء هذه الطريقة على أي كائن Person، كما يُظهر ذلك استدعاء person1.greet() و person2.greet().</p>

<p>مفهوم OOP الآخر في JavaScript ES5 هو التجزئة، التي تشير إلى ممارسة إخفاء تفاصيل التنفيذ وعرض واجهات البرمجة اللازمة فقط للعالم الخارجي. يمكن تحقيق ذلك باستخدام الإغلاقات، التي تسمح للدوال بالوصول إلى المتغيرات في نطاقها الخارجي حتى بعد عودة الدالة الخارجية. إليك مثال:</p>

<code>
  <p><span className='blueviole'>function</span> <span className='blue'>Counter</span>() {'{'}</p>
  <p><span className='blueviole'>var</span> <span className='blue'>count</span> = <span className='blue'>0</span>;</p>
  <p><span className='blueviole'>this</span>.increment = <span className='blueviole'>function</span>() {'{'}</p>
  <p>count++;</p>
  <p> console.log(count);</p>
  <p>{'};'}</p>
  <p><span className='blueviole'>this</span>.decrement = <span className='blueviole'>function</span>() {'{'}</p>
  <p>count--;</p>
  <p>console.log(count);</p>
  <p>{'};'}</p>
  <p>{'}'}</p>
  <p><span className='blueviole'>var</span> <span className='blue'>counter1</span> = <span className='blueviole'>new</span> Counter();</p>
  <p><span className='blueviole'>var</span> <span className='blue'>counter2</span> = <span className='blueviole'>new</span> Counter();</p>
  <p>counter1.increment(); <span className='darkgreen'>// 1</span></p>
  <p>counter1.increment(); <span className='darkgreen'>// 2</span></p>
  <p>counter1.decrement(); <span className='darkgreen'>// 1</span></p>
  <p>counter2.increment(); <span className='darkgreen'>// 1</span></p>
</code>

<code>
  <p><span className='blueviole'>function</span> <span className='blue'>Person</span>(<span className='blue'>name, age</span>) {'{'}</p>
  <p><span className='blueviole'>this</span>.name = name</p>
  <p><span className='blueviole'>this</span>.age = age;</p>
  <p>{'}'}</p>
  <p>Person.prototype.greet = <span className='blueviole'>function</span>() {'{'}</p>
  <p>{'console.log'}(<span className='red'>"مرحباً، اسمي "</span> + <span className='blueviole'>this</span>.name + <span className='red'>" وعمري "</span> + <span className='blueviole'>this</span>.age + <span className='red'>" سنة."</span>);</p>
  <p>{'}'}</p>
  <p><span className='blueviole'>var</span> <span className='blue'>person1</span> = <span className='blueviole'>new</span> <span className='blue'>Person</span>(<span className='red'>"أليس"</span>, <span className='blue'>25</span>);</p>
  <p><span className='blueviole'>var</span> <span className='blue'>person2</span> = <span className='blueviole'>new</span> <span className='blue'>Person</span>(<span className='red'>"بوب"</span>, <span className='blue'>30</span>);</p>
  <p>person1.greet(); <span className='darkgreen'>// "مرحباً، اسمي أليس وعمري 25 سنة."</span></p>
  <p>person2.greet(); <span className='darkgreen'>// "مرحباً، اسمي بوب وعمري 30 سنة."</span></p>
</code>

<p>في هذا المثال، تمت إضافة طريقة greet إلى نموذج الكائن Person باستخدام خاصية النموذج الأولي. يمكن بعد ذلك استدعاء هذه الطريقة على أي كائن Person، كما يُظهر ذلك استدعاء person1.greet() و person2.greet(). </p>

<p>مفهوم آخر في OOP في JavaScript ES5 هو التجزئة، والتي تشير إلى ممارسة إخفاء تفاصيل التنفيذ وعرض واجهات البرمجة اللازمة فقط للعالم الخارجي. يمكن تحقيق ذلك باستخدام الإغلاقات، التي تسمح للدوال بالوصول إلى المتغيرات في نطاقها الخارجي حتى بعد عودة الدالة الخارجية. إليك مثالًا: </p>

<code>
  <p><span className='blueviole'>function</span> <span className='blue'>Counter</span>() {'{'}</p>
  <p><span className='blueviole'>var</span> <span className='blue'>count</span> = <span className='blue'>0</span>;</p>
  <p><span className='blueviole'>this</span>.increment = <span className='blueviole'>function</span>() {'{'}</p>
  <p>count++;</p>
  <p> console.log(count);</p>
  <p>{'};'}</p>
  <p><span className='blueviole'>this</span>.decrement = <span className='blueviole'>function</span>() {'{'}</p>
  <p>count--;</p>
  <p>console.log(count);</p>
  <p>{'};'}</p>
  <p>{'}'}</p>
  <p><span className='blueviole'>var</span> <span className='blue'>counter1</span> = <span className='blueviole'>new</span> Counter();</p>
  <p><span className='blueviole'>var</span> <span className='blue'>counter2</span> = <span className='blueviole'>new</span> Counter();</p>
  <p>counter1.increment(); <span className='darkgreen'>// 1</span></p>
  <p>counter1.increment(); <span className='darkgreen'>// 2</span></p>
  <p>counter1.decrement(); <span className='darkgreen'>// 1</span></p>
  <p>counter2.increment(); <span className='darkgreen'>// 1</span></p>
</code>

<p>في هذا المثال، تنشئ وظيفة المُنشئ Counter كائنات تحتوي على طرق increment و decrement، التي تصل إلى متغير count خاص باستخدام الإغلاقات. يضمن هذا أن المتغير count مخفي عن العالم الخارجي ويمكن الوصول إليه فقط من خلال الطرق التي يوفرها كائن Counter.</p>

<p><b>البرمجة الشيئية (OOP) باستخدام القيم الأولية في JavaScript ES5</b></p>

<code>
  <p><span className='blueviole'>function</span> <span className='blue'>Person</span>(<span className='blue'>name, age, gender</span>) {'{'}</p>
  <p><span className='blueviole'>this</span>.name = name;</p>
  <p><span className='blueviole'>this</span>.age = age;</p>
  <p><span className='blueviole'>this</span>.gender = gender;</p>
  <p> <span className='blueviole'>this</span>.printDetails = <span className='blueviole'>function</span>() {'{'}</p>
  <p>{'console.log'}(<span className='red'>"الاسم: "</span> + <span className='blueviole'>this</span>.name);</p>
  <p>{'console.log'}(<span className='red'>"العمر: "</span> + <span className='blueviole'>this</span>.age);</p>
  <p>{'console.log'}(<span className='red'>"الجنس: "</span> + <span className='blueviole'>this</span>.gender);</p>
  <p>{'}'}</p>
  <p>{'}'}</p>
  <p><span className='blueviole'>var</span> <span className='blue'>person1</span> = <span className='blueviole'>new</span> Person(<span className='red'>"جون"</span>, <span className='blue'>25</span>, <span className='red'>"ذكر"</span>); </p>
  <p><span className='blueviole'>var</span> <span className='blue'>person2</span> = <span className='blueviole'>new</span> Person(<span className='red'>"جين"</span>, <span className='blue'>30</span>, <span className='red'>"أنثى"</span>); </p>
  <p>{'person1.printDetails();'}</p>
  <p>{'person2.printDetails();'}</p>
  <p><span className='blueviole'>var</span> <span className='blue'>bool</span> = <span className='blueviole'>new</span> Boolean(<span className='blue'>true</span>);</p>
  <p>{'console.log'}(bool.valueOf()); <span className='darkgreen'> // true</span></p>
  <p><span className='blueviole'>var</span> <span className='blue'>str</span> = <span className='blueviole'>new</span> String(<span className='red'>"مرحبا"</span>); </p>
  <p>{'console.log'}(str.concat(<span className='red'>" العالم"</span>)); <span className='darkgreen'>// "مرحبا العالم"</span></p>
  <p><span className='blueviole'>var</span> <span className='blue'>num</span> = <span className='blueviole'>new</span> Number(<span className='blue'>10</span>);</p>
  <p>{'console.log'}(num.valueOf() + <span className='blue'>5</span>); <span className='darkgreen'>// 15</span></p>
</code>

<p>في هذا المثال، نعرف دالة مُنشئ Person لإنشاء كائنات شخص بخصائص الاسم والعمر والجنس. نحدد أيضًا طريقة printDetails على كائن Person لطباعة تفاصيل الشخص.</p>

<p>ثم ننشئ كائنين Person باستخدام دالة المُنشئ ونستدعي طريقة printDetails لكل كائن.</p>

<p>بعد ذلك، ننشئ كائنات Boolean وString وNumber باستخدام دوال المُنشئ المقابلة لها ونوضح بعض طرقها، مثل valueOf وconcat والعمليات الحسابية الأساسية.</p>

<p><b>في JavaScript ES5، يمكننا إنشاء كائنات باستخدام دوال المُنشئ Object وArray. هذا هو شكل من أشكال البرمجة الشيئية يُسمى إنشاء الكائن القائم على المُنشئ.</b></p>

<p>لإنشاء كائن باستخدام دالة مُنشئ، نستخدم الكلمة الرئيسية new تليها اسم الدالة. على سبيل المثال، لإنشاء كائن باستخدام دالة المُنشئ Object، يمكننا القيام بما يلي:</p>

<code>
  <p> <span className='blueviole'>var</span> <span className='blue'>person</span> = <span className='blueviole'>new</span> Object(); </p>
  <p> person.name = <span className='red'>"جون"</span>; </p>
  <p>person.age = <span className='blue'>30</span>;</p>
  <p>person.job = <span className='red'>"مطور"</span>;</p>
</code>

<p>في المثال أعلاه، ننشئ كائنًا جديدًا person باستخدام دالة المُنشئ Object. ثم نضيف خصائص إلى هذا الكائن باستخدام تعبير النقطة.</p>

<p>بالمثل، يمكننا إنشاء مصفوفة باستخدام دالة المُنشئ Array:</p>

<code>
  <p><span className='blueviole'>var</span> <span className='blue'>arr</span> = [];</p>
  <p>arr.push(<span className='blue'>1</span>);</p>
  <p>arr.push(<span className='blue'>2</span>);</p>
  <p>arr.push(<span className='blue'>3</span>);</p>
  <p>console.log(arr); <span className='darkgreen'>// [1, 2, 3]</span></p>
</code>

<p>في المثال أعلاه، ننشئ مصفوفة جديدة arr باستخدام دالة المُنشئ Array. ثم نضيف عناصر إلى هذه المصفوفة باستخدام طريقة push.</p>

<p>إن إنشاء الكائن القائم على المُنشئ مفيد عندما نحتاج إلى إنشاء عدة كائنات من نفس النوع. يمكننا تحديد دالة مُنشئ تقوم بتعيين القيم الابتدائية لخصائص الكائن، ثم إنشاء كائنات جديدة باستخدام هذا المُنشئ.</p>

<p>على سبيل المثال، لنفترض أننا نريد إنشاء كائنات تمثل السيارات. يمكننا تحديد دالة مُنشئ مثل هذا:</p>

<code>
  <p><span className='blueviole'>function</span> <span className='blue'>Car</span>(<span className='blue'>make, model, year</span>) {'{'}</p>
  <p><span className='blueviole'>this</span>.make = make;</p>
  <p><span className='blueviole'>this</span>.model = model;</p>
  <p><span className='blueviole'>this</span>.year = year;</p>
  <p>{'}'}</p>
  <p><span className='blueviole'>var</span> <span className='blue'>car1</span> = <span className='blueviole'>new</span> Car(<span className='red'>"هوندا"</span>, <span className='red'>"سيفيك"</span>, <span className='blue'>2020</span>);</p>
  <p><span className='blueviole'>var</span> <span className='blue'>car2</span> = <span className='blueviole'>new</span> Car(<span className='red'>"تويوتا"</span>, <span className='red'>"كورولا"</span>, <span className='blue'>2021</span>);</p>
</code>

<p>في المثال أعلاه، نحدد دالة مُنشئ Car التي تأخذ ثلاثة معلمات (make وmodel وyear) وتعيّن الخصائص المقابلة للكائن باستخدام الكلمة الرئيسية this. ثم ننشئ كائني سيارة (car1 وcar2) باستخدام هذا المُنشئ.</p>

<p><b>البرمجة الشيئية باستخدام new RegExp()</b></p>

<code>
  <p><span className='blueviole'>var</span> <span className='blue'>str</span> = <span className='red'>"Hello, world!"</span>;</p>

  <p><span className='blueviole'>var</span> <span className='blue'>regex</span> = <span className='blueviole'>new</span> RegExp(<span className='red'>'\\w', 'g'</span>);</p>

  <p><span className='blueviole'>var</span> <span className='blue'>matches</span> = str.match(regex);</p>

  <p>{'console.log(matches);'} <span className='darkgreen'>// ["H", "e", "l", "l", "o", "w", "o", "r", "l", "d"]</span></p>
</code>

<p>في المثال أعلاه، نقوم بإنشاء تعبير عادي يتطابق مع أي حرف (\w) ونستخدم علامة g لإجراء بحث عالمي. ثم نستخدم طريقة match() للعثور على جميع التطابقات في السلسلة str. في النهاية، نسجل مصفوفة التطابقات في وحدة التحكم.</p>

<p>يرجى ملاحظة أنه يجب علينا تحويل الحرف العكسي عند تمرير نمط التعبير العادي كسلسلة إلى مُنشئ RegExp. يحدث ذلك لأن الحرف العكسي يُستخدم لتحويل الرموز الخاصة في التعابير العادية، ويجب تحويله في السلسلة أيضًا.</p>

<p><b>Prototype __proto__</b></p>

<p>البرمجة قائمة النماذج هي مفهوم أساسي في جافا سكريبت يسمح للكائنات بالاستنساخ من خصائص وأساليب الكائنات الأخرى. كل كائن في جافا سكريبت له نموذج، وهو كائن آخر يرث منه الخصائص والأساليب.</p>

<p>في ES5، يمكنك إنشاء نموذج باستخدام طريقة Object.create()، التي تأخذ كائنًا كمعلمة لها وتنشئ كائنًا جديدًا يكون نموذجه هو ذلك الكائن. يمكنك ثم إضافة الخصائص والأساليب إلى كائن النموذج، والتي ستورثها أي كائنات يتم إنشاؤها بها كنموذج لها.</p>

<p>إليك مثال على إنشاء نموذج لكائن Person</p>

<code>
  <p><span className='blueviole'>var</span> personPrototype = {'{'}</p>
  <p>greeting: <span className='blueviole'>function</span>() {'{'}</p>
  <p>{'console.log'}(<span className='red'>"مرحبًا، اسمي "</span> + <span className='blueviole'>this</span>.name);</p>
  <p>{'} ,'}</p>
  <p>farewell: <span className='blueviole'>function</span>() {'{'} </p>
  <p>{'console.log'}(<span className='red'>"وداعًا!"</span>);</p>
  <p>{'}'}</p>
  <p>{'};'}</p>
  <p><span className='blueviole'>var</span> <span className='blue'>john</span> = Object.create(personPrototype); </p>
  <p>john.name = <span className='red'>"جون"</span>;</p>
  <p>john.greeting(); <span className='darkgreen'>// ينتج: "مرحبًا، اسمي جون"</span></p>
</code>

<p>في هذا المثال، نحدد أولاً كائن personPrototype مع طريقة greeting() وطريقة farewell(). ثم، ننشئ كائنًا جديدًا للشخص john عن طريق استدعاء Object.create(personPrototype) وتعيين خاصية الاسم له إلى "جون". نظرًا لأن john تم إنشاؤه باستخدام personPrototype كنموذج له، فإنه يرث طريقة greeting() من كائن النموذج ويمكنه استدعائها باستخدام john.greeting().</p>

<p><b>instanceof</b></p>

<p>في جافا سكريبت ES5، instanceof هو عامل يُستخدم للتحقق مما إذا كان كائن ينتمي إلى فئة معينة أم لا. يُرجع قيمة منطقية تشير إلى ما إذا كان كائن هو نموذج من فئة محددة أو فئاتها الفرعية.</p>

<p>صيغة instanceof هي كالتالي:</p>

<p>object instanceof constructor</p>

<p>هنا، object هو اسم الكائن المراد التحقق منه وconstructor هو اسم دالة المُنشئ أو الفئة. يتحقق عامل instanceof من سلسلة النماذج للكائن ويُرجع true إذا كان الكائن هو نموذج من دالة المُنشئ أو الفئة المحددة، وإلا فإنه يُرجع false.</p>

<p>إليك مثال:</p>

<code>
  <p><span className='blueviole'>function</span> <span className='blue'>Animal</span>(<span className='blue'>name</span>) {'{'}</p>
  <p><span className='blueviole'>this</span>.name = name;</p>
  <p>{'}'}</p>
  <p><span className='blueviole'>function</span> <span className='blue'>Dog</span>(<span className='blue'>name</span>) {'{'}</p>
  <p>Animal.call(<span className='blueviole'>this</span>, name); </p>
  <p>{' }'}</p>
  <p>Dog.prototype = Object.create(Animal.prototype); </p>
  <p><span className='blueviole'>var</span> <span className='blue'>myDog</span> = <span className='blueviole'>new</span> Dog(<span className='red'>"بودي"</span>);</p>
  <p>{'console.log'}(myDog instanceof Dog);  <span className='darkgreen'>// true</span></p>
  <p>{'console.log'}(myDog instanceof Animal); <span className='darkgreen'>// true</span></p>
</code>

<p>في هذا المثال، نحدد فئتين Animal وDog. يرث Dog من Animal. ننشئ كائن Dog جديد ونتحقق مما إذا كان من نوع Dog و Animal باستخدام عامل instanceof. تُرجع كل التحققات الصحيحة true، لأن myDog هو نموذج من كلتا الفئتين.</p>

<p>لخلاصة، يُستخدم instanceof لتحديد ما إذا كان كائن هو نموذج من فئة معينة أو فئاتها الفرعية عن طريق التحقق من سلسلة النماذج الخاصة به.</p>

  
   <b><p>* النص المكتوب بمساعدة المترجم. إذا وجدت خطأ، يرجى إعلامنا *</p></b>
   
    <div className='ads-container'>  
      {/*  реклама  */}
      </div>   
    </div>
  )
}

export default ArJSEs5_7;