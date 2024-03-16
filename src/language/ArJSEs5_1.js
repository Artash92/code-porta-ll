import React from 'react';

function ArJSEs5_1() {
  return (
    <div>
       <div className='ad-container'>  
          {/*  реклама  */}
        </div> 

<h1>جافا سكريبت</h1>

<p>
    تم إنشاء جافا سكريبت في عام 1995 من قبل براندان إيتش أثناء عمله في شركة نيتسكيب للاتصالات. كانت اللغة تُسمى في الأصل بـ Mocha، لكنها تم تغيير اسمها لاحقًا إلى LiveScript قبل أن يتم تسميتها أخيرًا JavaScript. تم التغيير في الاسم بشكل رئيسي لأسباب تسويقية وللاستفادة من شعبية جافا في ذلك الوقت. براندان إيتش هو تكنولوج أمريكي ومبرمج عمل لدى شركات مثل موزيلا، نيتسكيب، وبريف سوفتوير. يُعتبر مخترعًا لجافا سكريبت وقد قدم مساهمات كبيرة في لغات البرمجة الأخرى أيضًا.
</p>

<h3>تحدد ECMAScript 7 أنواع بيانات:</h3>

 <code>
  <ul>
    <li><span className='blue'>Number:</span> يمثل قيم رقمية، بما في ذلك الأعداد الصحيحة والأعداد العشرية. مثال: <span className='blue'>1، 3.14، -42</span>.</li>
  
    <li><span className='blue'>String:</span> تمثل البيانات النصية، وتحيط بها علامات اقتباس مفردة أو مزدوجة. أمثلة: <span className='red'>"مرحبا"، 'العالم'، "123"</span>.</li>
  
    <li><span className='blue'>Boolean:</span> يمثل كياناً منطقياً ويمكن أن يكون له قيمتان فقط: صحيح أو خطأ. مثال: <span className='blue'> صحيح، خطأ</span>.</li>
  
    <li><span className='blue'>Undefined:</span> يمثل متغيراً تم تعريفه ولم يتم تخصيص قيمة له بعد. مثال: <span className='blueviole'>var</span> <span className='blue'>x</span>; console.log(x); <span className='darkgreen'>// الناتج: غير معرف</span></li>
  
    <li><span className='blue'>Null:</span> يمثل الغياب المتعمد لأي قيمة كائن. مثال: <span className='blueviole'>var</span> <span className='blue'>x</span> = <span className='blueviole'>null</span>; console.log(x); <span className='darkgreen'>// الناتج: فارغ</span></li>
  
    <li><span className='blue'>Symbol:</span> يمثل معرف فريد لا يتم إظهاره للكود المستدعي. مثال: <span className='blueviole'>const</span> <span className='blue'>sym1</span> = Symbol(<span className='red'>'foo'</span>);</li>
  
    <li><span className='blue'>Object:</span> يمثل مجموعة من البيانات و/أو الوظائف ذات الصلة. مثال: <span className='blueviole'>var</span> <span className='blue'>obj</span> = {'{'} name: <span className='red'>"جون"</span>, age: <span className='blue'>30</span> {'}'}; <span className='blueviole'>var</span> <span className='blue'>arr</span> = [<span className='blue'>1، 2، 3</span>];</li>
  </ul>
 </code>

        <h2>نوع البيانات المنطقية</h2>
    
    <p>لديه النوع البيانات المنطقية قيمتان فقط: صحيح وخاطئ. يتم استخدامه عادة في عمليات المقارنة باستخدام العمليات التالية:</p>
    <code>
         <ul>
            <li>=== و ==</li>
            <li>{'>'} و {'<='}</li>
            <li>{'>='} و {'<='}</li>
        </ul>
    </code>
    
    <p>أمثلة:</p>
    <code>
        <ul>
          <li><span className='blue'>10</span> {'<'} <span className='blue'>16</span> == <span className='blue'>true</span></li>
          <li><span className='blue'>10</span> {'>'} <span className='blue'>16</span> == <span className='blue'>false</span></li>
        </ul>
    </code>
    
    <h2>عوامل المنطقية</h2>
    
    <code>
       <ul>
        <li>NOT (!)</li>
        <li>AND (&&)</li>
        <li>OR (||)</li>
      </ul>
    </code>

<p>عند تقييم شرط، يتم استخدام نوع البيانات المنطقية. يتم تحويل القيم التالية إلى خطأ: 0 وسلسلة فارغة. يتم تحويل القيم التالية إلى صحيح: جميع الأرقام الأخرى وسلاسل النصوص غير الفارغة.</p>

<h3>أمثلة:</h3>

<code>
    <p><span className='blue'>5</span> && <span className='blue'>6</span> <span className='darkgreen'>// 6</span></p>
    
    <p><span className='blue'>6</span> && <span className='blue'>0 </span> <span className='darkgreen'>// 0</span></p>

    <p><span className='blue'>true</span> && <span className='blue'>false</span> <span className='darkgreen'>// false</span></p>

    <p><span className='blue'>5</span> || <span className='blue'>6</span> <span className='darkgreen'>// 5</span></p>

    <p><span className='blue'>0</span> || <span className='blue'>false</span> <span className='darkgreen'>// false</span></p>

    <p><span className='blue'>false</span> || <span className='blue'>true</span> <span className='darkgreen'>// true</span></p>

    <p><span className='blue'>6</span> || <span className='blue'>7</span> <span className='darkgreen'> // 6</span></p>

    <p><span className='blue'>0</span> || <span className='blue'>false</span> <span className='darkgreen'> // false</span></p>

    <p><span className='blue'>false</span> || <span className='blue'>true</span> <span className='darkgreen'>// true</span></p>

    <p><span className='blue'>50</span> && <span className='blue'>6</span> <span className='darkgreen'>// 6</span></p>

    <p><span className='blue'>10</span> && <span className='blue'>0</span> <span className='darkgreen'>// 0</span></p>

    <p><span className='red'>'Hello'</span> && <span className='red'>'World'</span> <span className='darkgreen'>// "World"</span></p>

    <p><span className='red'>'Hello'</span> && <span className='red'>''</span> <span className='darkgreen'>// ''</span></p>

    <p>!<span className='blue'>true</span> <span className='darkgreen'>// false</span></p>
</code>

    <h3>التعبيرات والبيانات</h3>

<p>هذه أمثلة على التعبيرات والعوامل في جافا سكريبت. التعبير هو مزيج من القيم والمتغيرات والعوامل، يمكن تقييمه إلى قيمة ما. يمكن استخدام التعابير في تعبيرات أخرى أو في بيانات.</p>

<p>تستخدم العوامل مثل *، +، إلخ، لإنشاء تعابير. تظهر الثلاثة أسطر الأولى أمثلة على التعابير مع أنواع بيانات مختلفة: أرقام وسلاسل وقيم منطقية.</p>

<p>يمكن استخدام العوامل في شكل تعبيرات عاملية، والتي هي جزء من العوامل. تظهر الثلاثة الأسطر التالية أمثلة على تعابير العوامل، التي هي عوامل.</p>

<p>ينتهي كل تعبير عاملي بعامل (;)، مما يجعله بيانًا.</p>

 <ul>
    <li><strong className='blue'>التعبير</strong>: <span className='blue'>8</span> * <span className='blue'>3</span> + <span className='blue'>2</span> </li> 
    
    <li><strong className='blue'>التعبير</strong>: <span className='red'>"Hello, there!"</span></li>

    <li><strong className='blue'>التعبير</strong>: <span className='blue'>false</span></li>

    <li><strong className='blue'>البيان</strong>: <span className='blue'>8</span> * <span className='blue'>3</span> + <span className='blue'>2</span> ;</li>

    <li><strong className='blue'>البيان</strong>: <span className='red'>"Hello, there!"</span>;</li>

    <li><strong className='blue'>البيان</strong>: <span className='blue'>false</span>;</li>
</ul>

<h2>القيم الخاصة والدوال في جافا سكريبت</h2>

<h5>NaN</h5>

<p>NaN تعني "ليس رقمًا" وهي قيمة خاصة في جافا سكريبت تمثل قيمة غير معرفة أو لا يمكن تمثيلها ناتجة عن عملية حسابية. على سبيل المثال، قسمة الصفر على الصفر ستعطي NaN.</p>

<h5>typeof</h5>

<p>typeof هو عامل ثنائي في جافا سكريبت يعيد سلسلة تشير إلى نوع بيانات العامل. على سبيل المثال، typeof "hello" ستعيد "string" و typeof 42 ستعيد "number".</p>

<h5>isNaN()</h5>

<p>isNaN() هو دالة عالمية في جافا سكريبت تعيد true إذا كان الوسيط NaN (ليس رقمًا)، والخطأ في الحالة الأخرى. على سبيل المثال، isNaN("hello") ستعيد true، و isNaN(42) ستعيد false.</p>

<h5>isFinite()</h5>

<p>isFinite() هي دالة عالمية في جافا سكريبت تعيد true إذا كان الوسيط رقمًا محدودًا، والخطأ في الحالة الأخرى. على سبيل المثال، isFinite(42) ستعيد true، و isFinite(Infinity) ستعيد false.</p>

<h2>المتغيرات</h2>

 <ul>
    <li>تعريف المتغيرات (a-A، $، _)</li>
    <ul>
    <li><code><span className='blueviole'>var</span> <span className='blue'>studentName</span>;</code></li>
    <li><code><span className='blueviole'>var</span> <span className='blue'>firstName, lastName, age</span>;</code></li>
 </ul>

    <li>تعريف وتعيين المتغيرات</li>

  <ul>
    <li><code><span className='blueviole'>var</span> <span className='blue'>carModel</span> = <span className='red'>"Tesla"</span>;</code></li>
    <li><code><span className='blueviole'>var</span> <span className='blue'>carModel</span> = <span className='red'>"Tesla"</span>, <span className='blue'>year</span> = <span className='blue'>2022</span>, <span className='blue'>isElectric</span> = <span className='blue'>true</span>;</code></li>
  </ul>

<li>استخدام المتغيرات</li>

  <ul>
    <li><code><span className='blueviole'>var</span> <span className='blue'>quantity</span> = <span className='blue'>5</span>;</code></li>
    <li><code>quantity = quantity + <span className='blue'>3</span>;</code></li>
    <li><code>quantity += <span className='blue'>2</span>;</code></li>
  </ul>

  </ul>
    
    <h2>الفارغ والغير معرف</h2>
  <ul>
    <li>الفارغ هو قيمة خاصة في جافا سكريبت تمثل غياب أي قيمة كائن. إنها قيمة أولية وتمثل قيمة غير معدة أو قيمة فارغة متعمدة. غالبًا ما يُستخدم للإشارة إلى أن المتغير ليس له قيمة أو أن الدالة لا تعيد قيمة.</li>
    <li>الغير معرف هو قيمة يمكن أن يكون للمتغير إذا لم يتم تعيين قيمة له أو إذا تم تعيين قيمة undefined له بوضوح. إنها أيضًا قيمة أولية في جافا سكريبت.</li>
    <li>يُستخدم عامل typeof لتحديد نوع قيمة. إذا كانت القيمة غير معرفة، فإن typeof يعيد السلسلة "undefined". إذا كانت القيمة فارغة، فإن typeof يعيد السلسلة "object". هذا خلل معروف في جافا سكريبت يعود إلى أول إصدار للغة.</li>
    <li>غالبًا ما يتم الخلط بين الفارغ والغير معرف لأن كلاهما يمثل غياب القيمة. ومع ذلك، فهما ليسا نفس الشيء. يُمثل الفارغ غيابًا متعمدًا لقيمة، بينما يمثل الغير معرف غيابًا عرضيًا لقيمة.</li>
    <li>عامل == في جافا سكريبت يقوم بتحويل النوع، مما يعني أنه سيحاول تحويل القيم من أنواع مختلفة إلى نوع مشترك قبل مقارنتها. عند مقارنة الفارغ والغير معرف باستخدام ==، النتيجة صحيحة لأنهما يُعتبران قيم خاطئة.</li>
    <li>عامل === في جافا سكريبت يقوم بمقارنة صارمة لا تقوم بتحويل النوع. عند مقارنة الفارغ والغير معرف باستخدام ===، النتيجة خاطئة لأنهما ليسا نفس النوع من القيمة.</li>
    <li>يُستخدم الدوال parseInt و parseFloat و Number لتحويل سلسلة إلى رقم. عند تمرير قيمة الفارغ، تُعيد كل من الدوال الثلاث NaN، والتي تعني "ليس رقمًا". يحدث ذلك لأن الفارغ ليس رقمًا صالحًا ولا يمكن تحويله إلى رقم.</li>
  </ul>
    
  <b><p>* النص المكتوب بمساعدة المترجم. إذا وجدت خطأ، يرجى إعلامنا *</p></b>
    <div className='ads-container'>  
  {/*  реклама  */}
</div>
    
    </div>
  )
}

export default ArJSEs5_1;