import React from 'react';

function ArJSEs5_2() {
  return (
    <div>
      <div className='ad-container'>  
          {/*  реклама  */}
        </div> 
        
        <h3>حلقات التكرار والشروط في جافا سكريبت</h3>

<p><b>1. حلقة while</b></p>

<p>تُستخدم حلقة while لتنفيذ مجموعة من الشفرة مرارًا وتكرارًا بينما شرط معين محدد صحيح.</p>

<p>إليك مثال:</p>

 <code>
    <p><span className='blueviole'>var</span> <span className='blue'>i</span> = <span className='blue'>0</span>; <span className='darkgreen'>// تهيئة متغير العداد</span></p>
    <p><span className='blueviole'>while</span> (i {'<'}<span className='blue'> 5</span>) {'{'}<span className='darkgreen'> // تعيين الشرط</span></p>
    <p>{'console.log'}(<span className='blue'>i</span>); <span className='darkgreen'>// تنفيذ كتلة الشفرة</span></p>
    <p>i++; <span className='darkgreen'>// تحديث متغير العداد</span></p>
    <p>{'}'}</p>
 </code>

<p>في هذا المثال، ستستمر الحلقة في التكرار طالما أن قيمة i أقل من 5. سيتم تنفيذ كتلة الشفرة في كل مرة يتم فيها تنفيذ الحلقة، وسيتم زيادة قيمة i بمقدار 1 حتى تصل إلى 5. سيكون مخرج هذا الكود كالتالي:</p>

 <code>
    <p className='blue'>0</p>
    <p className='blue'>1</p>
    <p className='blue'>2</p>
    <p className='blue'>3</p>
    <p className='blue'>4</p>
 </code>

<p><b>2. حلقة for</b></p>

<p>تُستخدم حلقة for لتنفيذ مجموعة من الشفرة عدد محدد من المرات. إليك مثال:</p>

  <code>
    <p><span className='blueviole'>for</span> (<span className='blueviole'>var</span> i = <span className='blue'>0</span>; i {'<'} <span className='blue'>5</span>; i++) {'{'}</p>
    <p>{'console.log(i);'}</p>
    <p>{'}'}</p>
 </code>

<p>في هذا المثال، ستقوم الحلقة بالتكرار 5 مرات، حيث يُفرض الشرط أن i يجب أن تكون أقل من 5. ستتم تنفيذ كتلة الشفرة في كل مرة يتم فيها تنفيذ الحلقة، وسيتم زيادة قيمة i بمقدار 1 في كل تكرار.</p>

<p>مخرج هذا الكود سيكون مشابهًا للمثال السابق:</p>

 <code>
    <p className='blue'>0</p>
    <p className='blue'>1</p>
    <p className='blue'>2</p>
    <p className='blue'>3</p>
    <p className='blue'>4</p>
 </code>

<p><b>3. حلقة do-while</b></p>

<p>تشبه حلقة do-while حلقة while، لكنها تنفذ كتلة الشفرة على الأقل مرة واحدة، حتى لو كان الشرط غير صحيحًا في البداية. إليك مثالًا:</p>

<code>
  <p><span className='blueviole'>var</span> i = <span className='blue'>0</span>; <span className='darkgreen'>// تهيئة متغير العداد</span></p>
  <p><span className='blueviole'>do</span> {'{'}</p>
  <p>{'console.log(i);'} <span className='darkgreen'>// تنفيذ كتلة الشفرة</span></p>
  <p>i++; <span className='darkgreen'>// تحديث متغير العداد</span></p>
  <p>{'}'}</p>
  <p><span className='blueviole'>while</span> (i {'<'} <span className='blue'>5</span>); <span className='darkgreen'>// تعيين الشرط</span></p>
</code>

<p>في هذا المثال، ستعمل الحلقة على الأقل مرة واحدة، حيث يتم فحص الشرط بعد تنفيذ كتلة الشفرة. ستتم تنفيذ كتلة الشفرة في كل مرة يتم فيها تنفيذ الحلقة، وسيتم زيادة قيمة i بمقدار 1 في كل تكرار، حتى تصل إلى 5.</p>

<p>مخرج هذا الكود سيكون مشابهًا للأمثلة السابقة:</p>

<code>
  <p className='blue'>0</p>
  <p className='blue'>1</p>
  <p className='blue'>2</p>
  <p className='blue'>3</p>
  <p className='blue'>4</p>
</code>

<p><b>4. عوامل ++ و --</b></p>

<p>تُستخدم عوامل ++ و -- لزيادة أو تنقيص قيمة متغير بمقدار 1. إليك بعض الأمثلة:</p>

 <code>
    <p><span className='blueviole'>var</span> <span className='blue'>i</span> = <span className='blue'>0</span>; <span className='darkgreen'>// تهيئة متغير</span></p>
    <p>i++; <span className='darkgreen'>// زيادة قيمة المتغير</span></p>
    <p>{'console.log(i);'} <span className='darkgreen'>// الناتج: 1</span></p>
    <p><span className='blueviole'>var</span> <span className='blue'>j</span> = <span className='blue'>2</span>; <span className='darkgreen'>// تهيئة متغير آخر</span></p>
    <p>j--; <span className='darkgreen'>// تنقيص قيمة المتغير</span> </p>
    <p>{'console.log(j);'} <span className='darkgreen'>// الناتج: 1</span></p>
 </code>

<p>غالبًا ما يتم استخدام هذه العوامل في الحلقات لتتبع التكرار الحالي.</p>

<p><b>5. عبارات if و else و else if</b></p>

<p>تُستخدم عبارة if لتنفيذ كتلة من الشفرة إذا كان شرط محدد صحيحًا. تُستخدم عبارة else لتنفيذ كتلة من الشفرة إذا كان الشرط خاطئًا. تُستخدم عبارة else if لاختبار شروط متعددة. إليك مثالًا:</p>

 <code>
    <p><span className='blueviole'>var</span> <span className='blue'>x</span> = <span className='blue'>15</span>; <span className='darkgreen'>// تهيئة متغير</span></p>
    <p><span className='blueviole'>if</span> (x {'>'} <span className='blue'>10</span>) {'{'} <span className='darkgreen'>// فحص الشرط</span></p>
    <p>{'console.log'}(<span className='red'>"x أكبر من 10"</span>)</p>
    <p>{'}'}</p>
 </code>

<h3>العامل الشرطي (الثلاثي)</h3>

<p>العامل الشرطي (الثلاثي) هو طريقة مختصرة لكتابة عبارة if-else في جافا سكريبت. يأخذ العامل الشرطي ثلاثة عوامل: شرطًا، قيمة تُرجع إذا كان الشرط صحيحًا، وقيمة تُرجع إذا كان الشرط خاطئًا. بإليك بعض الأمثلة على استخدام العامل الشرطي في جافا سكريبت:</p>

<p><b>المثال 1:</b></p>

  <code>
    <p><span className='blueviole'>var</span> <span className='blue'>a</span> = <span className='blue'>5</span>;</p>
    <p><span className='blueviole'>var</span><span className='blue'> result</span> = (a == <span className='blue'>5</span>) ? <span className='red'>"true"</span> : <span className='red'>"false"</span>;</p>
    <p>document.getElementById(<span className='red'>"example1"</span>).innerHTML = result;</p>
  </code>
 
 <p>الناتج: صحيح التوضيح: في هذا المثال، نقوم بتعيين قيمة المتغير a إلى 5، ثم نستخدم العامل الشرطي للتحقق مما إذا كانت قيمة a تساوي 5. نظرًا لأن الشرط صحيح، فإن القيمة "true" تُرجع وتُسند إلى المتغير result، الذي يتم ثم طباعته في عنصر div في الصفحة.</p>
 
 <p><b>المثال 2:</b></p>

 <code>
    <p> <span className='blueviole'>var</span> <span className='blue'>a</span> = <span className='blue'>10</span>;</p>
    <p><span className='blueviole'>var</span> <span className='blue'>result</span> = (a == <span className='blue'>5</span>) ? <span className='red'>"true"</span> : <span className='red'>"false"</span>;</p>
    <p>document.getElementById(<span className='red'>"example2"</span>).innerHTML = result;</p>
 </code>

<p>الناتج: خاطئ التوضيح: في هذا المثال، نقوم بتعيين قيمة المتغير a إلى 10، ثم نستخدم العامل الشرطي للتحقق مما إذا كانت قيمة a تساوي 5. نظرًا لأن الشرط خاطئ، فإن القيمة "false" تُرجع وتُسند إلى المتغير result، الذي يتم ثم طباعته في عنصر div في الصفحة.</p>

<p><b>المثال 3:</b></p>

 <code>
    <p><span className='blueviole'>var</span> <span className='blue'>a</span> = <span className='blue'>7</span>;</p>
    <p><span className='blueviole'>var</span> <span className='blue'>result</span> = ( a {'>'} <span className='blue'>10</span>) ? <span className='red'>"أكبر من 10"</span>: (a {'<'} <span className='blue'>5</span>) ? <span className='red'>"أقل من 5"</span> : <span className='red'>"بين 5 و 10"</span> ;</p>
    <p>document.getElementById(<span className='red'>"example3"</span>).innerHTML = result;</p>
 </code>

<p>الناتج: بين 5 و 10 التوضيح: في هذا المثال، نقوم بتعيين قيمة المتغير a إلى 7، ثم نستخدم العامل الشرطي للتحقق مما إذا كانت قيمة a أكبر من 10. نظرًا لأن الشرط خاطئ، ننتقل إلى الشرط الثاني الذي يتحقق مما إذا كانت قيمة a أقل من 5. نظرًا لأن هذا الشرط أيضًا خاطئ، ننتقل إلى الشرط الثالث الذي يُرجع القيمة "بين 5 و 10" نظرًا لأنه الخيار الوحيد المتبقي. يتم ثم طباعة النتيجة في عنصر div في الصفحة.</p>
   
<b><p>* النص المكتوب بمساعدة المترجم. إذا وجدت خطأ، يرجى إعلامنا *</p></b>
    <div className='ads-container'>  
  {/*  реклама  */}
</div>
    </div>
  )
}

export default ArJSEs5_2;