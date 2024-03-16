import React from 'react';

function ArReact_5() {
  return (
    <div>
      <div className='ad-container'>  
          {/*  реклама  */}
        </div>
      
      <h1>راوتر رياكت دوم</h1>

<p>راوتر رياكت دوم هو مكتبة شهيرة تستخدم في تطبيقات رياكت لإدارة التوجيه على جانب العميل. يتيح للمطورين إنشاء مسارات مختلفة لمكونات مختلفة وتقديمها استنادًا إلى عنوان URL الحالي. يوفر هذا تجربة مستخدم أكثر تفاعلية وسلسة، حيث يمكن للمستخدمين التنقل بين الصفحات والمكونات المختلفة دون الحاجة إلى إعادة تحميل الصفحة بأكملها.</p>

<p>يستند راوتر رياكت دوم إلى مكتبة راوتر رياكت ومصمم خصيصًا للاستخدام في المتصفح. يستخدم واجهة برمجة التطبيقات التاريخية للمتصفح للتلاعب في عنوان URL والحفاظ على واجهة المستخدم متزامنة مع العنوان URL الحالي. كما يوفر نهجًا تصريحيًا لتحديد المسارات، مما يجعل من السهل إدارة التطبيقات المعقدة مع مسارات متعددة ومكونات متداخلة.</p>

<p>بعض الميزات الرئيسية لراوتر رياكت دوم تشمل:</p>

<p> • التوجيه التصريحي: يمكنك تحديد مساراتك كمكونات JSX، مما يجعل من السهل فهم وإدارة منطق التوجيه.</p>

<p> • المسارات المتداخلة: يمكنك تضمين المسارات داخل مسارات أخرى، مما يسمح بسيناريوهات توجيه أكثر تعقيدًا.</p>

<p> • معلمات المسار: يمكنك تحديد معلمات ديناميكية داخل مساراتك، مما يتيح لك تمرير البيانات بين المكونات استنادًا إلى العنوان URL الحالي.</p>

<p> • إدارة التاريخ: يوفر راوتر رياكت دوم أدوات لإدارة تاريخ المتصفح، مما يتيح لك التنقل بشكل برمجي بين الصفحات والتعامل مع التنقل إلى الوراء/إلى الأمام.</p>

<p>إليك مثال بسيط على كيفية استخدام راوتر رياكت دوم في تطبيق رياكت: <b>(الإصدار القديم)v5</b></p>

<code>
  <p> <span className='red'>import</span> React <span className='red'>from</span> <span className='blue1'>'react'</span>;</p>

  <p> <span className='red'>import</span> {'{'} BrowserRouter <span className='red'>as</span> Router, Route, Link {'}'} <span className='red'>from</span> <span className='blue1'>'react-router-dom'</span>;  </p>

  <p>&nbsp;<span className='red'>const</span> Home = () {'=> <'}<span className='green'>h1</span>{'>'}Home{'</'}<span className='green'>h1</span>{'>; '}</p>

  <p>&nbsp;<span className='red'>const</span> About = () {'=> <'}<span className='green'>h1</span>{'>'}About{'</'}<span className='green'>h1</span>{'>;'}</p>

  <p>&nbsp;<span className='red'>const</span> App {'= () => ( '}</p>

  <p>{'<'}<span className='blueviole'>Router</span>{'>'}</p>

  <p>&nbsp;{'<'}<span className='green'>nav</span>{'>'}</p>

  <p>&nbsp;&nbsp;{'<'}<span className='green'>ul</span>{'>'}</p>

  <p>&nbsp;&nbsp;&nbsp;{'<'}<span className='green'>li</span>{'>'}</p>

  <p>&nbsp;&nbsp;&nbsp;&nbsp;{'<'}<span className='blueviole'>Link</span> <span className='blue'>to</span>=<span className='blue1'>"/"</span>{'>'}Home{'</'}<span className='blueviole'>Link</span>{'>'}</p>

  <p>&nbsp;&nbsp;&nbsp;{'</'}<span className='green'>li</span>{'>'}</p>

  <p>&nbsp;&nbsp;&nbsp;{'<'}<span className='green'>li</span>{'>'}</p>

  <p>&nbsp;&nbsp;&nbsp;&nbsp;{'<'}<span className='blueviole'>Link</span> <span className='blue'>to</span>=<span className='blue1'>"/about"</span>{'>'}About{'</'}<span className='blueviole'>Link</span>{'>'}</p>

  <p>&nbsp;&nbsp;&nbsp;{'</'}<span className='green'>li</span>{'>'}</p>

  <p>&nbsp;&nbsp;{'</'}<span className='green'>ul</span>{'>'}</p>

  <p>&nbsp;{'</'}<span className='green'>nav</span>{'>'}</p>

  <p>&nbsp;{'<'}<span className='blueviole'>Route </span><span className='blue'>exact path</span>=<span className='blue1'>"/"</span> <span className='blue'>component</span>={'{Home}  />'}</p>

  <p>&nbsp;{'<'}<span className='blueviole'>Route</span>  <span className='blue'>path</span>=<span className='blue1'>"/about"</span> <span className='blue'>component</span>={'{About}  />'}</p>

  <p>{'</'}<span className='blueviole'>Router</span>{'>'}</p>

  <p>{');'}</p>

  <p><span className='red'>export default</span> App; </p>
</code>

<p>في هذا المثال، نقوم بإستيراد المكونات الضرورية من راوتر رياكت دوم (بالتحديد، <b>BrowserRouter, Route, and Link</b>). ثم نقوم بتحديد مكونين بسيطين لصفحاتنا الرئيسية وحول.</p>

<p>داخل مكون <b>App</b>، نلف كل شيء في مكون <b>Router</b>، الذي يوفر سياق التوجيه لبقية التطبيق. ثم نحدد شريط تنقل بسيط باستخدام مكون <b>Link</b> للتنقل بين صفحتينا.</p>

<p>أخيرًا، نحدد مكوني <b>Route</b> يقومان بتقديم مكونات <b>Home and About</b> استنادًا إلى العنوان URL الحالي.</p>

<p>راوتر رياكت دوم 6.4 هو أحدث إصدار من المكتبة، تم إصداره في فبراير 2022. بعض الميزات الجديدة في هذا الإصدار تشمل:</p>

<p>الإصدار الأحدث (v6) يحتوي على تغييرات في بعض واجهات البرمجة التطبيقية والمجموعات، لذا يمكنني اختيار مثال جديد باستخدام راوتر رياكت دوم الإصدار 6.4:</p>

<p>إليك مثال باستخدام راوتر رياكت دوم الإصدار 6.4:</p>

<code>
<p><span className='red'>import</span> {'{'} BrowserRouter <span className='red'>as</span> Router, Routes, Route, Link {'}'} <span className='red'>from</span> <span className='blue1'>'react-router-dom'</span>;</p>

<p>&nbsp;<span className='red'>const</span>  Home = () {'=> <'}<span className='green'>h1</span>{'>'}Home{'</'}<span className='green'>h1</span>{'>;'}</p>

<p>&nbsp;<span className='red'>const</span> About = () {'=> <'}<span className='green'>h1</span>{'>'}About{'</'}<span className='green'>h1</span>{'>;'}</p>

<p>&nbsp;<span className='red'>const</span> NotFound = () {'=> <'}<span className='green'>h1</span>{'>'}404 Not Found{'</'}<span className='green'>h1</span>{'>;'}</p>

<p>&nbsp;<span className='red'>const</span> {'App = () => ( '}</p>

<p>{'<'}<span className='blueviole'>Router</span>{'>'}</p>

<p>&nbsp;{'<'}<span className='green'>nav</span>{'>'}</p>

<p>&nbsp;&nbsp;{'<'}<span className='green'>ul</span>{'>'}</p>

<p>&nbsp;&nbsp;&nbsp;{'<'}<span className='green'>li</span>{'>'}</p>

<p>&nbsp;&nbsp;&nbsp;&nbsp;{'<'}<span className='blueviole'>Link</span> <span className='blue'>to</span>=<span className='blue1'>"/"</span>{'>'}Home{'</'}<span className='blueviole'>Link</span>{'>'}</p>

<p>&nbsp;&nbsp;&nbsp;{'</'}<span className='green'>li</span>{'>'}</p>

<p>&nbsp;&nbsp;&nbsp;{'<'}<span className='green'>li</span>{'>'}</p>

<p>&nbsp;&nbsp;&nbsp;&nbsp;{'<'}<span className='blueviole'>Link</span> <span className='blue'>to</span>=<span className='blue1'>"/about"</span>{'>'}About{'</'}<span className='blueviole'>Link</span>{'>'}</p>

<p>&nbsp;&nbsp;&nbsp;{'</'}<span className='green'>li</span>{'>'}</p>

<p>&nbsp;&nbsp;{'</'}<span className='green'>ul</span>{'>'}</p>

<p>&nbsp;{'</'}<span className='green'>nav</span>{'>'}</p>

<p>{'<'}<span className='blueviole'>Routes</span>{'>'}</p>

<p>&nbsp;{'<'}<span className='blueviole'>Route</span> <span className='blue'>path</span>=<span className='blue1'>"/"</span> <span className='blue'>element</span>={'{<'}<span className='blueviole'>Home</span> {'/>} />'}</p>

<p>&nbsp;{'<'}<span className='blueviole'>Route</span> <span className='blue'>path</span>=<span className='blue1'>"/about"</span> <span className='blue'>element</span>={'{<'}<span className='blueviole'>About</span> {'/>} />'}</p>

<p>&nbsp;{'<'}<span className='blueviole'>Route</span> <span className='blue'>path</span>=<span className='blue1'>"*"</span> <span className='blue'>element</span>={'{<'}<span className='blueviole'>NotFound</span> {'/>} />'}</p>

<p>{'</'}<span className='blueviole'>Routes</span>{'>'}</p>

<p>{'</'}<span className='blueviole'>Router</span>{'>'}</p>

<p>{');'}</p>

<p><span className='red'>export default</span> App; </p>
</code>

<p> في هذا المثال، نستخدم نفس المكونات الأساسية من راوتر رياكت دوم (<b>مثل BrowserRouter، Route، Link</b>)، ولكن بعضها لها بناء جملة مختلف قليلاً.</p>

<p>على سبيل المثال، نحن نستخدم الآن مكون <b>Routes</b> بدلاً من <b>Switch</b> لتجميع عدة مسارات. كل مسار الآن يتمثل في عنصر <b>Route</b> مع خصائص <b>path و element</b>. خاصية <b>path</b> تحدد نمط عنوان URL للمسار، وخاصية <b>element</b> هي المكون الذي يتم تقديمه عندما يتطابق المسار.</p>

<p>في هذا المثال، قمنا أيضًا بإضافة مكون <b>NotFound</b> الذي يعرض عندما يهبط المستخدم في صفحة غير موجودة.</p>

<p>بشكل عام، يوفر راوتر رياكت دوم 6 طريقة أكثر مرونة وراحة للتعامل مع التوجيه في تطبيقات رياكت.</p>    
  
<p>1. إذا كنت تستخدم <b>npm</b>، افتح الطرفية الخاصة بك وقم بتشغيل الأمر التالي:</p>

<b>npm install react-router-dom</b>

<p>2. إذا كنت تستخدم <b>yarn</b>، افتح الطرفية الخاصة بك وقم بتشغيل الأمر التالي:</p>

<b>yarn add react-router-dom</b> 

<p>بعد التثبيت، يمكنك استيراد المكونات الضرورية من حزمة <b>react-router-dom</b>، كما أظهرت في الأمثلة أعلاه</p>

<p> لمزيد من المعلومات حول راوتر رياكت، يرجى زيارة موقعهم الرسمي: <a href="https://reactrouter.com/" target='_blank' > 👉🏼  https://reactrouter.com/.</a></p>    
  
<p>على الموقع، ستجد دليلًا شاملاً لاستخدام راوتر رياكت، بما في ذلك:</p>    
  
<p>• نظرة عامة على راوتر رياكت ومفاهيمه الرئيسية</p> 

<p>• تعليمات التثبيت والإعداد</p>

<p>• أمثلة على حالات الاستخدام والسيناريوهات المختلفة</p>

<p>• وثائق واجهة برمجة التطبيقات لكل من المكونات الأساسية والأدوات</p>

<p>• مواضيع متقدمة مثل العرض على الخادم، وتقسيم الشفرة، والمسارات المتداخلة</p>

<p>بالإضافة إلى الوثائق، يمكنك أيضًا العثور على عدد من الموارد المفيدة مثل منتدى المجتمع، ومستودع GitHub لتقارير الأخطاء وطلبات الميزات، ومجموعة من المشاريع والإضافات ذات الصلة.</p>


<b><p>* النص المكتوب بمساعدة المترجم. إذا وجدت خطأ، يرجى إعلامنا *</p></b>
    <div className='ads-container'>  
  {/*  реклама  */}
</div>
    </div>
  )
}

export default ArReact_5;