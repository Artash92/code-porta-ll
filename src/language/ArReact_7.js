import React from 'react';

function ArReact_7() {
  return (
    <div>
      <div className='ad-container'>  
          {/*  реклама  */}
        </div>

      <h1>Redux</h1>

<p>Redux هو مكتبة لإدارة الحالة لتطبيقات JavaScript. يساعد في إدارة حالة تطبيقك بطريقة قابلة للتنبؤ، مما يجعل من السهل استيعاب تدفق البيانات في تطبيقك. باستخدام Redux، تخزن حالة تطبيقك في كائن واحد يسمى المتجر، وتستخدم الإجراءات والمقلصات لتعديل تلك الحالة.</p>

<p>هكذا يعمل الأمر: عندما تريد تغيير حالة تطبيقك، ترسل إجراءً. الإجراء هو كائن JavaScript عادي يصف ما حدث في تطبيقك. على سبيل المثال، قد ترسل إجراءً لإضافة عنصر جديد إلى قائمة، أو لتحديث معلومات ملف تعريف المستخدم.</p>

<p>المقلصات هي وظائف تأخذ الحالة الحالية لتطبيقك وإجراء، وتعيد حالة جديدة. المقلصات هي وظائف نقية، مما يعني أنها ليس لديها أي تأثيرات جانبية وأنها تعيد دائمًا نفس الناتج للإدخال المعطى.</p>

<p>React-Redux هو مكتبة تدمج Redux مع React. يوفر وسيلة لربط مكونات React الخاصة بك بمتجر Redux، بحيث يمكنك الوصول إلى وتعديل حالة تطبيقك من مكوناتك. يوفر React-Redux عنصرين رئيسيين: Provider و connect.</p>

<p>يتم استخدام عنصر المزود لتغليف تطبيق React الخاص بك بالكامل. يأخذ كائن متجر كخاصية، ويجعل هذا المتجر متاحًا لجميع المكونات في تطبيقك.</p>

<p>1. قم بتثبيت الحزم المطلوبة:</p>

<b>npm install redux react-redux</b>

<p>2. إنشاء متجر Redux:</p>

<code>
  <p><span className='red'>import</span> {'{ createStore }'} <span className='red'>from</span> <span className='blue1'>'redux'</span>;</p>
  <p><span className='red'>import</span> rootReducer <span className='red'>from</span> <span className='blue1'>'./reducers'</span>; </p>
  <p><span className='red'>const</span> store = <span className='blueviole'>createStore</span>(rootReducer); </p>
</code>

<p>3. إنشاء إجراءات Redux:</p>

<code>
  <p><span className='red'>export const</span> {"increment = () => {"}</p>
  <p>&nbsp;<span className='red'>return</span>  {"{ "}</p>
  <p>&nbsp;&nbsp;<span className='blue'>type</span> : <span className='blue1'>'INCREMENT'</span></p>
  <p>&nbsp;{" } "}</p>
  <p>{" } "}</p>
  <p><span className='red'>export const</span>  {"decrement = () => { "}</p>
  <p>&nbsp;<span className='red'>return</span>  {" { "}</p>
  <p>&nbsp;&nbsp;<span className='blue'>type</span> : <span className='blue1'>'DECREMENT'</span></p>
  <p>&nbsp;{" } "}</p>
  <p>{" } "}</p>
</code>

<p>4. إنشاء مقلصات Redux:</p>

<code>
    <p><span className='red'>const</span> counterReducer = {'('}state = <span className='blue1'>0</span>, {"action) => { "}</p>

    <p>&nbsp;<span className='red'>switch</span> (action.<span className='blue'>type</span>) {"{ "}</p>

    <p>&nbsp;&nbsp;<span className='red'>case</span> <span className='blue1'>'INCREMENT'</span>:</p>

    <p>&nbsp;&nbsp;&nbsp;<span className='red'>return</span>  state + <span className='blue1'>1</span>;</p>

    <p>&nbsp;&nbsp;<span className='red'>case</span> <span className='blue1'>'DECREMENT'</span>:</p>

    <p>&nbsp;&nbsp;&nbsp;<span className='red'>return</span> state - <span className='blue1'>1</span>; </p>

    <p>&nbsp;&nbsp;<span className='red'>default</span>: </p>

    <p>&nbsp;&nbsp;&nbsp;<span className='red'>return</span> state; </p>

    <p>&nbsp;{" }"}</p>

    <p>{"} "}</p>

    <p><span className='red'>export default</span> counterReducer;</p>
  </code>


<p>5. قم بربط Redux بعنصر React باستخدام وظيفة <b>connect</b> في React-Redux:</p>

<code>
    <p><span className='red'>import</span> {'{ connect }'} <span className='red'>from</span> <span className='blue1'>'react-redux'</span>; </p>

    <p><span className='red'>import</span>  {'{ increment, decrement }'} <span className='red'>from</span> <span className='blue1'>'./actions'</span>;</p>

    <p>&nbsp;<span className='red'>const</span> {"Counter = (props) => { "}</p>

    <p>&nbsp;<span className='red'>return</span> {'('}</p>

    <p>{'<'}<span className='green'>div</span>{'>'}</p>

    <p>&nbsp;&nbsp;{'<'}<span className='green'>h1</span>{'>{'}props.<span className='blue'>count</span>{'}</'}<span className='green'>h1</span>{'>'}</p>

    <p>&nbsp;&nbsp;{'<'}<span className='green'>button</span> <span className='blue'>onClick</span>={'{'}props.<span className='blue'>increment</span>{'}>'}+{'</'}<span className='green'>button</span>{'>'}</p>

    <p>&nbsp;&nbsp;{'<'}<span className='green'>button</span> <span className='blue'>onClick</span>={'{'}props.<span className='blue'>decrement</span>{'}>-</'}<span className='green'>button</span>{'>'}</p>

    <p>{"</"}<span className='green'>div</span>{">"}</p>

    <p>&nbsp;{");"}</p>

    <p>{"} "}</p>

    <p>&nbsp;<span className='red'>const</span> {"mapStateToProps = (state) => {"}</p>

    <p>&nbsp;<span className='red'>return</span> {"{ "}</p>

    <p>&nbsp;&nbsp;&nbsp;<span className='blue'>count</span>: state.<span className='blue'>counter</span></p>

    <p>&nbsp;{"} "}</p>

    <p>{"} "}</p>

    <p>&nbsp;<span className='red'>const</span> {"mapDispatchToProps = (dispatch) => { "}</p>

    <p>&nbsp;<span className='red'>return</span> {"{ "}</p>

    <p>&nbsp;&nbsp;&nbsp;<span className='blue'>increment</span>: {"() =>"} <span className='blueviole'>dispatch</span>(<span className='blueviole'>increment</span>()), </p>

    <p>&nbsp;&nbsp;&nbsp;<span className='blue'>decrement</span>: {"() =>"} <span className='blueviole'>dispatch</span>(<span className='blueviole'>decrement</span>())</p>

    <p>&nbsp;{"}"}</p>

    <p>{"}"}</p>

    <p><span className='red'>export default</span> <span className='blueviole'>connect</span>(mapStateToProps, mapDispatchToProps)(Counter); </p>
  </code>

  <p>6. قم بتغليف تطبيقك بعنصر <b>Provider</b> لجعل مخزن Redux متاحًا لجميع العناصر:</p>

  <code> 
      <p><span className='red'>import</span> {"{ Provider } "} <span className='red'>from</span> <span className='blue1'>'react-redux'</span>;</p>

      <p><span className='red'>import</span> store <span className='red'>from</span> <span className='blue1'>'./store'</span>;</p>

      <p><span className='red'>import</span> Counter <span className='red'>from</span> <span className='blue1'>'./Counter'</span>; </p>

      <p>&nbsp;<span className='red'>const</span> {"App = () => { "}</p>

      <p>&nbsp;<span className='red'>return</span> {"("}</p>

      <p>{"<"}<span className='blueviole'>Provider</span> <span className='blue'>store</span>={"{store}> "}</p>

      <p>&nbsp;&nbsp;{"<"}<span className='blueviole'>Counter</span> {"/>"}</p>

      <p>{"</"}<span className='blueviole'>Provider</span>{">"}</p>

      <p>&nbsp;{");"}</p>

      <p>{"}"}</p>

      <p><span className='red'>export default</span> App;</p>
    </code>

<p>هذا مثال أساسي على كيفية استخدام Redux و React-Redux في تطبيق React. تذكر أن هذا مجرد نصيحة من الجبل الجليدي، وهناك الكثير لتعلمه حول Redux ونظامه البيئي.</p>

<p>هناك بعض الأشياء الأخرى التي يجب مراعاتها عند استخدام Redux في تطبيق React:</p>

<p>1. وسيط Redux: الوسيط هو طريقة لتعديل أو التقاط إجراءات Redux قبل وصولها إلى المحددات. يمكن استخدام الوسيط لمهام مثل تسجيل الدخول، والطلبات الغير متزامنة، وأكثر من ذلك. بعض الخيارات الشهيرة للوسيط في Redux تشمل <b>redux-thunk، redux-saga، و redux-observable</b>.</p>

<p>2. أدوات تطوير Redux: أدوات تطوير Redux هي إضافة للمتصفح توفر واجهة مستخدم مفيدة لتصحيح الأخطاء وفحص مخزن Redux. تتيح لك فحص الإجراءات وتغييرات الحالة، وتوفر أيضًا وظيفة تصحيح الوقت.</p>

<p>3. محددات Redux: المحددات هي وظائف تستخرج قطعًا محددة من البيانات من مخزن Redux. يمكن استخدامها لحساب البيانات المشتقة، وتصفية وتحويل البيانات، وأكثر من ذلك. يمكن أن تساعد المحددات في تبسيط مكوناتك من خلال توفير البيانات الدقيقة التي تحتاج إليها، من دون القلق بشأن شكل المخزن.</p>

<p>4. Ducks Redux: Ducks هو اقتراح لتنظيم رموز Redux في وحدات تحتوي على جميع أنواع الإجراءات ذات الصلة، ومنشئي الإجراءات، والمحددات لميزة أو مجال معين. يمكن أن يساعد هذا النهج في تبسيط قاعدة الشفرة الخاصة بك وجعلها أسهل في الصيانة.</p>

<p>هذه فقط بعض المواضيع الإضافية التي قد ترغب في استكشافها عند العمل مع Redux. هناك العديد من المكتبات والأدوات الأخرى المتاحة في نظام Redux البيئي، لذلك من المهم أن تأخذ الوقت لتعلمها وتقرر أيها الأفضل لمشروعك.</p>
  
<b><p>* النص المكتوب بمساعدة المترجم. إذا وجدت خطأ، يرجى إعلامنا *</p></b>
    <div className='ads-container'>  
  {/*  реклама  */}
</div>
    </div>
  )
}

export default ArReact_7;