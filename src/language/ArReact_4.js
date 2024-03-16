import React from 'react';

function ArReact_4() {
  return (
    <div>
      <div className='ad-container'>  
          {/*  реклама  */}
        </div>
            
        <h1>احصل على البيانات في رياكت</h1>

<p>1. احصل على البيانات باستخدام واجهة برمجة التطبيقات fetch:</p>

<code> 
<p><span className='blueviole'>fetch</span>(<span className='blue1'>'https://api.example.com/data'</span>)</p>

<p>.<span className='blue'>then</span>(response {'=>'} response.<span className='blue'>json</span>()) </p>

<p>.<span className='blue'>then</span>(data {'=>'} console.<span className='blue'>log</span>(data))</p>

<p>.<span className='blue'>catch</span>(error {'=>'} console.<span className='blue'>error</span>(error)) </p>
</code>

<p>في هذا المثال، نقوم بطلب بيانات من الخادم باستخدام واجهة برمجة التطبيقات <b>fetch</b>. يتم تحويل كائن الاستجابة إلى تنسيق JSON باستخدام الطريقة <b>json()</b>، ويتم تسجيل البيانات الناتجة في وحدة التحكم. إذا حدث خطأ، يتم التقاطه وتسجيله في وحدة التحكم أيضًا.</p>


<p>2. عرض البيانات التي تم جلبها في حالة المكون:</p>

<code>
<p><span className='red'>import</span> {'React, { useState, useEffect } '} <span className='red'>from</span> <span className='blue1'>'react'</span>;   </p>

<p><span className='red'>function</span> <span className='blueviole'>MyComponent</span>() {'{'}</p>

<p><span className='red'>const</span> [data, setData] = <span className='blueviole'>useState</span>([]);</p>

<p><span className='blueviole'>useEffect</span>{'(() => {'}</p>

<p><span className='blueviole'>fetch</span>(<span className='blue1'>'https://api.example.com/data'</span>)</p>

<p>.<span className='blue'>then</span>(response {'=>'} response.<span className='blue'>json</span>())</p>

<p>.<span className='blue'>then</span>(data {'=>'} <span className='blueviole'>setData</span>(data))</p>

<p>.<span className='blue'>catch</span>(error {'=>'} console.<span className='blue'>error</span>(error)); </p>

<p>{'}, []);'}</p>

<p><span className='red'>return</span> {'('}</p>

<p>{'<'}<span className='green'>div</span>{'>'}</p>

<p>{'{'}data.<span className='blue'>map</span>{'(item => ('}</p>

<p>{'<'}<span className='green'>p</span> key={'{item.'}<span className='blue'>id</span>{'}>'}{'{item.'}<span className='blue'>name</span>{'}</'}<span className='green'>p</span>{'>'}</p>

<p>{'))} '}</p>

<p>{'</'}<span className='green'>div</span>{'>'}</p>

<p>&nbsp;{');'}</p>

<p>{'}'}</p>
</code>    


<p>في هذا المثال، نستخدم خطاف <b>useState</b> لتعريف متغير الحالة يسمى <b>data</b>. كما نستخدم خطاف <b>useEffect</b> لجلب البيانات من الخادم عند تحميل المكون، وتحديث متغير الحالة <b>data</b> بالبيانات التي تم جلبها. وأخيرًا، نستخدم الطريقة <b>map</b> للتكرار عبر مصفوفة البيانات وعرض كل عنصر كعنصر فقرة.</p>

<h1>أكسيوس</h1>

<p>كل من Fetch و Axios هما مكتبات JavaScript تستخدم لإجراء طلبات HTTP من المتصفح أو بيئة Node.js. ومع ذلك، هناك بعض الاختلافات بين الاثنين.</p>

<p>Fetch هو واجهة برمجة تطبيقات مضمنة في المتصفح تستخدم الوعود (promises) للتعامل مع الطلبات والاستجابات. لديها بنية بسيطة وأسهل في الاستخدام للطلبات البسيطة، ولكنها تفتقر إلى بعض الميزات المتقدمة مثل إلغاء الطلب، وأحداث التقدم، وإعادة المحاولات التلقائية للطلب.</p>

<p>أكسيوس هو مكتبة خارجية شهيرة توفر واجهة برمجة تطبيقات (API) أكثر ثراءً وقوة لإجراء طلبات HTTP. تدعم إلغاء الطلب، وأحداث التقدم، وإعادة المحاولات التلقائية بشكلٍ مباشر، وتحتوي أيضًا على دعم مدمج للتعامل مع بيانات الاستجابة مثل JSON، وXML، وFormData.</p>

<p>فيما يتعلق بسبب تفضيل استخدام أكسيوس على Fetch، يعتمد الأمر حقًا على الاحتياجات الخاصة بمشروعك. إذا كنت تقوم ببناء تطبيق ويب بسيط يحتاج فقط إلى إجراء طلبات أساسية، فقد يكون Fetch كافيًا. ومع ذلك، إذا كنت بحاجة إلى مزيد من الميزات المتقدمة وواجهة برمجة تطبيقات أقوى للتعامل مع الطلبات والاستجابات، فإن أكسيوس هو خيار أفضل.</p>

<p>بعض فوائد استخدام أكسيوس على Fetch تشمل:</p>

<p>1. التعامل مع الأخطاء بشكلٍ أفضل: أكسيوس يحتوي على نظام أكثر قوة للتعامل مع الأخطاء ويوفر رسائل أخطاء أكثر فائدة مقارنة بـ Fetch.</p>

<p>2. المحاصرين (Interceptors): أكسيوس يوفر محاصرين يتيح لك تعديل الطلبات أو الاستجابات قبل إرسالها أو استلامها.</p>

<p>3. التحويل التلقائي لبيانات الطلب والاستجابة: يمكن لأكسيوس تحويل بيانات الطلب والاستجابة تلقائيًا إلى تنسيقات مختلفة، مثل JSON، مما يمكن أن يكون مفيدًا جدًا عند العمل مع واجهات برمجة تطبيقات.</p>

<p>4. إلغاء الطلبات بسهولة: يوفر أكسيوس طريقة بسيطة لإلغاء الطلبات، وهو ما يمكن أن يكون مفيدًا عند التعامل مع شبكات بطيئة أو غير موثوقة.</p>

<p>باختصار، كل من Fetch و Axios هما أدوات مفيدة لإجراء طلبات HTTP في JavaScript، ولكن أكسيوس يوفر مزيدًا من الميزات المتقدمة وواجهة برمجة تطبيقات أكثر قوة يمكن أن تكون مفيدة جدًا لبناء تطبيقات أكثر تعقيدًا.</p>

<p><b>أكسيوس</b> هو مكتبة لإجراء طلبات HTTP من المتصفح أو Node.js. يجعل من السهل إرسال الطلبات باستخدام الوعود والتعامل مع الاستجابات.</p>

<p>لاستخدام أكسيوس في React.js، تحتاج أولاً إلى تثبيته باستخدام الأمر:</p>

<b>npm install axios</b>

<p>بعد ذلك، يمكنك استخدام أكسيوس في مكونات React الخاصة بك. على سبيل المثال، يرسل الكود التالي طلب GET إلى خادم بعيد ويعرض الاستجابة على الصفحة:</p>

<code>
    <p><span className='red'>import</span> {' React, { useState, useEffect }'} <span className='red'>from</span> <span className='blue1'>"react"</span>;</p>  

    <p><span className='red'>import</span> axios <span className='red'>from</span> <span className='blue1'>"axios"</span>;</p>

    <p><span className='red'>function</span> <span className='blueviole'>App</span>() {'{'}</p>  

    <p><span className='red'>const</span> {'[data, setData]'} = <span className='blueviole'>useState</span>("");</p>

    <p><span className='blueviole'>useEffect</span>{'(() => { '}</p>

    <p>axios.<span className='blue'>get</span>(<span className='blue1'>"https://jsonplaceholder.typicode.com/todos/1"</span>).<span className='blue'>then</span>{'((response) => {'}</p>

    <p><span className='blueviole'>setData</span>(response.<span className='blue'>data</span>);</p>

    <p>{'});'}</p>

    <p>{' }, []);'}</p>

    <p> return {'<'}<span className='green'>div</span>{'>'}{'{'}data.<span className='blue'>title</span>{'}'}{'</'}<span className='green'>div</span>{'>;'}</p>

    <p>{'}'}</p>

    <p><span className='red'>export default</span> App;</p>
</code> 
    
<p>في هذا المثال، يتم استخدام الخطاف (hook) <b>useEffect</b> لإرسال طلب GET إلى الخادم وتحديث متغير الحالة <b>data</b> بالاستجابة. ثم يتم عرض متغير البيانات على الصفحة باستخدام JSX.</p>  
    
<p>أكسيوس يدعم أيضًا طرق HTTP أخرى، مثل POST و PUT و DELETE، التي يمكن استخدامها لإرسال البيانات إلى الخادم وتعديل الموارد. كما يوفر كائن axios العديد من خيارات التكوين، مثل ضبط الرؤوس، وفترات الانتظار، ومحاصري الطلبات، مما يتيح لك تخصيص سلوك الطلبات.</p>  

<p>بشكل عام، أكسيوس هو مكتبة قوية ومرنة للعمل مع طلبات HTTP في React.js، ويمكن أن تبسط العديد من المهام الشائعة، مثل جلب البيانات من واجهة برمجة تطبيقات بعيدة.</p>

<p>بروتوكول HTTP يدعم عدة طرق للطلب تسمح بأداء عمليات مختلفة على البيانات. فيما يلي وصف موجز لأربعة من الطرق الرئيسية للطلب بالإضافة إلى أمثلة على استخدامها في React:</p>
    
<p>1. <b>GET</b>: طريقة طلب تُستخدم لاسترجاع البيانات من الخادم. في React، يمكنك استخدام طريقة <b>axios.get</b></p>  
    
<code>
    <p>axios.<span className='blue'>get</span>(<span className='blue1'>'/api/data'</span>)</p>

    <p>.<span className='blue'>then</span>{'(response => {'}</p>

    <p>{'console'}.<span className='blue'>log</span>(response.<span className='blue'>data</span>); </p>

    <p>{'})'}</p>

    <p>.<span className='blue'>catch</span>{'(error => {' }</p>

    <p>{'console'}.<span className='blue'>log</span>(error);</p>
  
    <p>{'});'}</p>  
</code>

<p>في هذا المثال، نقوم بجلب البيانات من نقطة النهاية <b>/api/data</b>. يتم تسجيل بيانات الاستجابة في وحدة التحكم إذا كان الطلب ناجحًا، ويتم التقاط أي أخطاء وتسجيلها في وحدة التحكم.</p>

<p>2. <b>PUT</b>: طريقة طلب تُستخدم لتحديث البيانات الحالية على الخادم. في React، يمكنك استخدام طريقة <b>axios.put</b>:</p>

<code>
  <p>axios.<span className='blue'>put</span>{'('}<span className='blue1'>'/api/data/1'</span>, {'{'} <span className='blue'>newData</span>: <span className='blue1'>'updatedData'</span> {"})"}</p>

  <p>.<span className='blue'>then</span>{'('}response { '=> {' }</p>

  <p>{'console'}.<span className='blue'>log</span>(response.<span className='blue'>data</span>);</p>

  <p>{'})'}</p>

  <p>.<span className='blue'>catch</span>{'(error => {'}</p>

  <p>{'console'}.<span className='blue'>log</span>(error);</p>

  <p>{'});'}</p>
</code>

<p>في هذا المثال، نقوم بتحديث البيانات في نقطة النهاية <b>/api/data/1</b>. نحن نرسل حمولة بالبيانات الجديدة كالوسيطة الثانية إلى <b>axios.put</b>. يتم تسجيل بيانات الاستجابة في وحدة التحكم إذا كان الطلب ناجحًا، ويتم التقاط أي أخطاء وتسجيلها في وحدة التحكم.</p>

<p>3. <b>POST </b>: طريقة طلب تُستخدم لإنشاء بيانات جديدة على الخادم. في React، يمكنك استخدام طريقة <b>axios.post</b></p>

<code>
  <p>axios.<span className='blue'>post</span>{'('}<span className='blue1'>'/api/data'</span>, {'{'} <span className='blue'>newData</span>: <span className='blue1'>'newData'</span> {"})"}</p>

  <p>.<span className='blue'>then</span>{'(response => {'}</p>

  <p>{'console'}.<span className='blue'>log</span>(response.<span className='blue'>data</span>);</p>

  <p>{'})'}</p>

  <p>.<span className='blue'>catch</span>{'(error => {'}</p>

  <p>{'console'}.<span className='blue'>log</span>(error);</p>

  <p>{'});'}</p>
</code>

<p>في هذا المثال، نقوم بإنشاء بيانات جديدة في نقطة النهاية <b>/api/data</b>. نحن نرسل حمولة بالبيانات الجديدة كالوسيطة الثانية إلى <b>axios.post</b>. يتم تسجيل بيانات الاستجابة في وحدة التحكم إذا كان الطلب ناجحًا، ويتم التقاط أي أخطاء وتسجيلها في وحدة التحكم.</p>

<p>4. <b>DELETE </b>: طريقة طلب تُستخدم لحذف البيانات الحالية على الخادم. في React، يمكنك استخدام طريقة <b>axios.delete</b>:</p>

<code>
  <p> axios.<span className='blue'>delete</span>(<span className='blue1'>'/api/data/1'</span>)  </p>

  <p>.<span className='blue'>then</span>{'(response => { '}</p>

  <p>{'console'}.<span className='blue'>log</span>(response.<span className='blue'>data</span>);</p>

  <p>{'}) '}</p>

  <p>.<span className='blue'>catch</span>{'(error => { '}</p>

  <p>{'console'}.<span className='blue'>log</span>(error);</p>

  <p>{'});'}</p>
</code>

<p>في هذا المثال، نقوم بحذف البيانات في نقطة النهاية <b>/api/data/1</b>. يتم تسجيل بيانات الاستجابة في وحدة التحكم إذا كان الطلب ناجحًا، ويتم التقاط أي أخطاء وتسجيلها في وحدة التحكم</p>

<p>لمزيد من المعلومات حول Axios، يرجى زيارة موقعهم الرسمي: <a href=" https://axios-http.com" target='_blank' > 👉🏼  https://axios-http.com</a></p>

<b><p>* النص المكتوب بمساعدة المترجم. إذا وجدت خطأ، يرجى إعلامنا *</p></b>
    <div className='ads-container'>  
  {/*  реклама  */}
</div>
    </div>
  )
}

export default ArReact_4;