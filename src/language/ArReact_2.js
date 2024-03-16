import React from 'react';

function ArReact_2() {
  return (
    <div>
      <div className='ad-container'>  
          {/*  реклама  */}
        </div>

      <h1>JSX</h1>

<p>JSX هو امتداد لبناء الجملة في جافا سكريبت يسمح لك بكتابة رمز شبيه بـ HTML في ملفات JavaScript الخاصة بك. يتم استخدامه بشكل واسع في React لتحديد الهيكل وتخطيط مكونات واجهة المستخدم.</p>

<p>فيما يلي مثال على كيفية عمل JSX:</p>

<code>
  <p><span className='red'>import</span> React <span className='red'>from</span> <span className='blue1'>'react'</span>; </p>

  <p><span className='red'>function</span> <span className='blueviole'>MyComponent</span>() {'{'}</p>

  <p><span className='red'>return</span> {'('}</p>

  <p>{'<'}<span className='green'>div</span>{'>'}</p>

  <p>&nbsp;{'<'}<span className='green'>h1</span>{'>'}مرحباً، عالم!{'</'}<span className='green'>h1</span>{'>'} </p>

  <p>&nbsp;{'<'}<span className='green'>p</span>{'>'}هذا مثال بسيط على JSX.{'</'}<span className='green'>p</span>{'>'} </p>

  <p>{'</'}<span className='green'>div</span>{'>'}</p>

  <p>&nbsp;{'); '}</p>

  <p>{'}'}</p>

  <p><span className='red'>export default</span> MyComponent;</p> 
</code>

<p>في هذا المثال، نقوم بتحديد مكون React بسيط باستخدام JSX. يقوم المكون بعرض عنصر <b>div</b> يحتوي على عناصر <b>h1 و p</b>. لاحظ أن الرمز شبيه بـ HTML محاط بالقوسين ومحدد باستخدام صيغة JSX.</p>

<p>يتيح لك JSX دمج رمز شبيه بـ HTML بسهولة مع منطق جافا سكريبت. على سبيل المثال، يمكنك استخدام متغيرات جافا سكريبت وتعبيرات داخل رمز JSX الخاص بك:</p>

<code>
  <p><span className='red'>import</span> React <span className='red'>from</span> <span className='blue1'>'react'</span>;</p>

  <p><span className='red'>function</span> <span className='blueviole'>MyComponent</span>() {'{'}</p>

  <p><span className='red'>const</span> name = <span className='blue1'>'John'</span>;  </p>

  <p><span className='red'>return</span> {'('}</p>

  <p>{'<'}<span className='green'>div</span>{'>'} </p>

  <p>&nbsp;{'<'}<span className='green'>h1</span>{'>'} مرحباً، {'{'}name{'}'}!{'</'}<span className='green'>h1</span>{'>'} </p>

  <p>&nbsp;{'<'}<span className='green'>p</span>{'>'}هذا مثال بسيط على JSX.{'</'}<span className='green'>p</span>{'>'} </p>

  <p>{'</'}<span className='green'>div</span>{'>'} </p>

  <p>&nbsp;{");"}</p>

  <p>{" } "}</p>

  <p><span className='red'>export default</span> MyComponent;</p> 
</code>

<p>في هذا المثال، نستخدم متغير جافا سكريبت <b>(name)</b> داخل رمز JSX لديناميكياً لعرض تحية شخصية.</p>

<p>ليس من الضروري استخدام JSX في تطوير React، ولكن من المُنصَح به بشدة حيث يجعل من الأسهل كتابة وإدارة مكونات واجهة المستخدم المُعقدة. عند كتابة رمز JSX، يتم تحويله إلى رمز جافا سكريبت عادي يمكن تنفيذه بواسطة المتصفح.</p>

<p>هناك نوعان رئيسيان من مكونات React: المكونات الوظيفية ومكونات الصف الكلاسي.</p>

<p>تُعرف المكونات الوظيفية باعتبارها وظائف جافا سكريبت ترجع عنصر JSX. عادةً ما يتم استخدامها لمكونات واجهة المستخدم البسيطة والتقديمية التي ليس لديها أي حالة أو أساليب دورة حياة.</p>

<p>فيما يلي مثال على مكون وظيفي بسيط:</p>

<code>
      <p><span className='red'>import</span> React <span className='red'>from</span> <span className='blue1'>'react'</span>; </p>

      <p><span className='red'>function</span> <span className='blueviole'>MyComponent</span>(props) {'{'}</p>

      <p><span className='red'>return</span> {'('}</p>

      <p> {'<'}<span className='green'>div</span>{'>'} </p>

      <p>&nbsp;{'<'}<span className='green'>h1</span>{'>'}مرحباً،{'{'}props.<span className='blue'>name</span>{'}'}!{'</'}<span className='green'>h1</span>{'>'} </p>

      <p>&nbsp;{'<'}<span className='green'>p</span>{'>'}هذا مكون وظيفي.{'</'}<span className='green'>p</span>{'>'} </p>

      <p>{'</'}<span className='green'>div</span>{'>'} </p>

      <p>&nbsp;{');'}</p>

      <p>{'}'}</p>

      <p><span className='red'>export default</span> MyComponent;</p>  
 </code>
   
    <p>في هذا المثال، نقوم بتحديد مكون وظيفي يسمى <b>MyComponent</b> الذي يأخذ كائن <b>props</b> كوسيط. يقوم المكون بإرجاع عنصر JSX يتضمن عنصر <b>h1</b> بتحية شخصية وعنصر <b>p</b> برسالة.</p>
    
    <p>من ناحية أخرى، تُعرف المكونات الكلاسية كفئات جافا سكريبت تمتد من فئة <b>React.Component</b>. يتم استخدامها لمكونات واجهة مستخدم أكثر تعقيدًا تحتاج إلى إدارة الحالة وتحتوي على أساليب دورة الحياة.</p>
    
    <p>إليك مثال على مكون كلاسي بسيط:</p>

<code>
    <p><span className='red'>import</span> React <span className='red'>from</span> <span className='blue1'>'react'</span>; </p>

    <p><span className='red'>class</span> MyComponent <span className='red'>extends</span> React.<span className='blue'>Component</span> {'{'}</p>

    <p><span className='blue'>constructor</span>(props) {'{'}</p>

    <p>super(props);</p>

    <p><span className='red'>this</span>.<span className='blue'>state</span> = {'{'}</p>

    <p><span className='blue'>count</span>: <span className='blue1'>0</span></p>

    <p>&nbsp;{'};'}</p>

    <p>{'}'}</p>

    <p><span className='blue'>render</span>() {'{'}</p>

    <p><span className='red'>return</span> {'('}</p>

    <p>{'<'}<span className='green'>div</span>{'>'} </p>

    <p>{'<'}<span className='green'>h1</span>{'>'}العدد: {'{'}<span className='red'>this</span>.<span className='blue'>state</span>.<span className='blue'>count</span>{'}'}{'</'}<span className='blue'>h1</span>{'>'}</p>

    <p>{'<'}<span className='green'>button</span> <span className='blue'>onClick</span> = {'{() => '}<span className='red'>this</span>.<span className='blue'>setState</span>{'({'} <span className='blue'>count</span>:<span className='red'>this</span>.<span className='blue'>state</span>.<span className='blue'>count</span> + <span className='blue1'>1</span> {'})}'}{'>'}زيادة{'</'}<span className='green'>button</span>{'>'}</p>

    <p>{'</'}<span className='blue'>div</span>{'>'} </p>

    <p>&nbsp;&nbsp;{');'}</p>

    <p>&nbsp;{'}'}</p>

    <p>{'}'}</p>

    <p><span className='red'>export default</span> MyComponent;</p>  
</code>
    
    <p>في هذا المثال، نقوم بتحديد مكون كلاسي يسمى MyComponent يحتوي على خاصية حالة تسمى <b>count</b> وأسلوب <b>render</b> الذي يرجع عنصر JSX بعنصر <b>h1</b> يعرض العدد الحالي وعنصر <b>button</b> يزيد العدد عند النقر عليه.</p>

    <p>يمكن تركيب المكونات وتداخلها لإنشاء عناصر واجهة مستخدم معقدة. يمكن أيضًا للمكونات قبول الـ props كمدخلات، مما يسمح لها بالتخصيص وإعادة الاستخدام في جميع أنحاء التطبيق.</p>

    <p><b>{'<Component />'}</b> هو بنية ترميز تستخدم في React لتقديم مكون. يُطلق عليها علامة بدون إغلاق أو علامة فارغة، وهي ما يُعادل استدعاء المكون كدالة بدون وسيطات.</p>

    <p>على سبيل المثال، لنفترض أن لدينا مكون بسيط يسمى <b>MyComponent</b>:</p>

<code>
  <p><span className='red'>function</span> <span className='blueviole'>MyComponent</span>() {'{'}</p>

  <p><span className='red'>return</span> {'('}</p>

  <p>{'<'}<span className='green'>div</span>{'>'}</p>

  <p>&nbsp;{'<'}<span className='green'>h1</span>{'>'}مرحباً، عالم!{'</'}<span className='green'>h1</span>{'>'} </p>

  <p>{'</'}<span className='green'>div</span>{'>'}</p>

  <p>&nbsp;{');'}</p>

  <p>{'}'}</p>
</code>
   
    <p>لتقديم هذا المكون، سنستخدم بنية الترميز <b>{'<MyComponent />'}</b>:</p>

 <code>
  <p>ReactDOM.<span className='blue'>render</span>{'('} </p>

  <p>{'<'}<span className='blueviole'>MyComponent </span>{'/>'}, </p>

  <p>document.<span className='blue'>getElementById</span>(<span className='blue1'>'root'</span>)</p>

  <p>{');'}</p> 
 </code>

    <p>بنية الترميز <b>{'<MyComponent />'}</b> تنشئ مثيلًا من مكون MyComponent وتقوم بتقديمه إلى DOM.</p>

<b><p>* النص المكتوب بمساعدة المترجم. إذا وجدت خطأ، يرجى إعلامنا *</p></b>
    <div className='ads-container'>  
  {/*  реклама  */}
</div>
    </div>
  )
}

export default ArReact_2;