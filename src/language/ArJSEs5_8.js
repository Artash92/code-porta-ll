import React from 'react';

function ArJSEs5_8() {
  return (
    <div>
      <div className='ad-container'>  
          {/*  реклама  */}
        </div>

<h4>كائن التاريخ</h4>

<p>في JavaScript، يُستخدم كائن التاريخ للعمل مع التواريخ والأوقات. يسمح لك بإنشاء وتلاعب وتنسيق التواريخ والأوقات بطرق مختلفة. يمثل كائن التاريخ لحظة واحدة في الزمن، ويتم تهيئته بالتاريخ والوقت الحاليين افتراضيًا.</p>

<p>إليك بعض الأمثلة على كيفية استخدام كائن التاريخ في JavaScript:</p>

<p>1. إنشاء كائن التاريخ بتاريخ ووقت محددين:</p>

<code>
   <p><span className='blueviole'>var</span> <span className='blue'>date</span> = <span className='blueviole'>new</span> Date(<span className='blue'>2022, 0, 1, 12, 0, 0</span>);</p>
  <p>{'console.log(date);'} <span className='green'>// السبت يناير 01 2022 12:00:00 GMT+0200 (Eastern European Standard Time)</span></p>
</code>

<p>في هذا المثال، يتم إنشاء كائن تاريخ جديد مع السنة المحددة (2022)، والشهر (0 ليناير)، واليوم (1)، والساعة (12)، والدقيقة (0)، والثانية (0). يظهر الناتج التاريخ والوقت الناتج في شكل قابل للقراءة للإنسان.</p>

<p>2. إنشاء كائن تاريخ بالتاريخ والوقت الحاليين:</p>

<code>
  <p><span className='blueviole'>var</span> <span className='blue'>date</span> = <span className='blueviole'>new</span> Date(); </p>
  <p>{'console.log(date);'}<span className='green'>// السبت مارس 27 2023 13:28:17 GMT+0200 (Eastern European Standard Time)</span></p>
</code>

<p>في هذا المثال، يتم إنشاء كائن تاريخ جديد بالتاريخ والوقت الحاليين. يظهر الناتج التاريخ والوقت الناتج في شكل قابل للقراءة للإنسان.</p>

<p>3. الحصول على السنة والشهر واليوم الحاليين:</p>

<code>
  <p><span className='blueviole'>var</span> <span className='blue'>date</span> = <span className='blueviole'>new</span> Date();</p>
  <p><span className='blueviole'>var</span> <span className='blue'>year</span> = date.getFullYear();</p>
  <p><span className='blueviole'>var</span> <span className='blue'>month</span> = date.getMonth();</p>
  <p><span className='blueviole'>var</span> <span className='blue'>day</span> = date.getDate();</p>
  <p>{'console.log'}(year + <span className='red'>"-"</span> + month + <span className='red'>"-"</span> + day); <span className='green'></span></p>
</code>

<p>في هذا المثال، يتم إنشاء كائن تاريخ جديد بالتاريخ والوقت الحاليين. ثم يتم استخدام الأساليب getFullYear() و getMonth() و getDate() لاستخراج السنة والشهر (حيث يُمثل الرقم 0 شهر يناير) واليوم من كائن التاريخ. يظهر الناتج التاريخ الناتج في سلسلة مهيأة.</p>

<p> 4. تحويل التاريخ إلى سلسلة: </p>

<code>
  <p><span className='blueviole'>var</span> <span className='blue'>date</span> = <span className='blueviole'>new</span> Date();</p>
  <p><span className='blueviole'>var</span> <span className='blue'>dateString</span> = date.toDateString(); </p>
  <p>{'console.log'}(dateString); <span className='green'>// السبت مايو 30 2023</span></p>
</code>

<p>في هذا المثال، يتم إنشاء كائن تاريخ جديد بالتاريخ والوقت الحاليين. ثم يتم استخدام الأسلوب toDateString() لتحويل التاريخ إلى سلسلة قابلة للقراءة للإنسان. يظهر الناتج السلسلة الناتجة للتاريخ.</p>

<p>هذه أمثلة مجردة على العديد من الطرق التي يمكنك استخدام كائن التاريخ في JavaScript للعمل مع التواريخ والأوقات.</p>

<p><b>كائن الخطأ</b></p>

<p>في JavaScript، يُستخدم كائن الخطأ لتمثيل الأخطاء أثناء التشغيل. عند حدوث خطأ في البرنامج، يُنشئ JavaScript كائن خطأ ويُلقي به. يحتوي كائن الخطأ على معلومات حول الخطأ مثل رسالة الخطأ واسم الخطأ.</p>

<p>إليك مثال على استخدام كتلة try-catch لالتقاط خطأ الإشارة:</p>

<code>
  <p><span className='blueviole'>try </span>{'{'}</p>
  <p>{'console.log(variable);'}</p>
  <p>{'}'} <span className='blueviole'>catch</span>(<span className='blue'>err</span>) {'{'}</p>
  <p>{'console.log(err);'} <span className='green'>// ReferenceError: variable is not defined</span></p>
  <p>{'console.log(err.name);'} <span className='green'>// ReferenceError</span></p>
  <p>{' console.log(err.message);'} <span className='green'>// variable is not defined</span></p>
  <p>{'}'}</p>
</code>

<p>في هذا المثال، يحاول كتلة try تسجيل متغير لم يتم تعريفه، مما يؤدي إلى ReferenceError. تقوم كتلة الـ catch بالتقاط الخطأ وتسجيل كائن الخطأ مع خصائصه الاسم والرسالة.</p>

<p>وهنا مثال آخر على استخدام كتلة try-catch لرمي كائن خطأ مخصص:</p>

<code>
  <p><span className='blueviole'>var</span> <span className='blue'>num1</span> = <span className='blue'>10</span>;</p>
  <p><span className='blueviole'>var</span> <span className='blue'>num2</span> = <span className='blue'>0</span>; </p>
  <p><span className='blueviole'>try</span> {'{'}</p>
  <p><span className='blueviole'>if</span> (num2 == <span className='blue'>0</span>) {'{'}</p>
  <p><span className='blueviole'>throw new</span> Error(<span className='red'>"لا يمكن القسمة على الصفر."</span>);</p>
  <p>{'}'}</p>
  <p>{'console.log(num1 / num2);'}</p>
  <p>{'}'} <span className='blueviole'>catch</span> (<span className='blue'>err</span>) {'{'}</p>
  <p>{' console.log'}(err.name, <span className='red'>" : "</span>, err.message) ; </p>
  <p>{'}'}</p>
</code>

<p>
في هذا المثال، تحاول كتلة try قسمة num1 على num2. إذا كان num2 يساوي صفر، يتم رمي كائن خطأ جديد برسالة خطأ مخصصة. تقوم كتلة الـ catch بالتقاط الخطأ وتسجيل كائن الخطأ مع خصائصه الاسم والرسالة. 
</p>

<p>
استخدام كائنات الخطأ وكتل try-catch هو جزء مهم من معالجة الأخطاء أثناء التشغيل في برامج JavaScript. يسمح للمطورين بالتعامل بلطف مع الأخطاء وتوفير ردود فعل مفيدة للمستخدمين.  
</p>
  
  <b><p>* النص المكتوب بمساعدة المترجم. إذا وجدت خطأ، يرجى إعلامنا *</p></b>
   
   <div className='ads-container'>  
     {/*  реклама  */}
     </div>   
      </div>
  )
}

export default ArJSEs5_8;