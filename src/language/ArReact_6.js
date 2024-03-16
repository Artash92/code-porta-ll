import React from 'react';

function ArReact_6() {
  return (
    <div>
      <div className='ad-container'>  
          {/*  реклама  */}
        </div>
        
      <h1>الرد المراجع</h1>

<p>في React، الـ <b>ref</b> هو طريقة للوصول إلى عنصر DOM الأساسي أو مثيل مكون React لعنصر مقدم. يمكنك استخدام الـ refs للوصول إلى خصائص أو طرق معينة من مكون، أو لتعديل سلوكه.</p>

<p>إليك مثال على كيفية إنشاء ref في React:</p>

<code>
<p><span className='red'>import</span> React, {'{ useRef }'} <span className='red'>from</span> <span className='blue1'>'react'</span>;  </p>

<p><span className='red'>function</span> <span className='blueviole'>TextInput</span>{'() {'}</p>

<p>&nbsp;<span className='red'>const</span> inputRef = <span className='blueviole'>useRef</span>(<span className='red'>null</span>); </p> 

<p>&nbsp;<span className='red'>const</span> {'handleClick = () => {'}</p>

<p> inputRef.<span className='blue'>current</span>.<span className='blue'>focus</span>();</p>

<p>{' };'}</p>

<p>&nbsp;<span className='red'>return</span> {'('}</p>

<p>{'<'}<span className='green'>div</span>{'>'}</p>

<p>&nbsp;{'<'}<span className='green'>input</span> <span className='blue'>type</span>=<span className='blue1'>"text"</span> <span className='blue'>ref</span>={'{inputRef} />'}</p>

<p>&nbsp;{'<'}<span className='green'>button</span> <span className='blue'>onClick</span>={'{handleClick}>'}Focus Input{'</'}<span className='green'>button</span>{'>'}</p>

<p>{'</'}<span className='green'>div</span>{'>'}</p>

<p>&nbsp;{' );'}</p>

<p>{'}'}</p>
</code>

<p>في هذا المثال، ننشئ ref باستخدام hook <b>useRef</b>. ثم نمرر الـ ref إلى عنصر <b>input</b> باستخدام خاصية <b>ref</b>.</p>

<p>كما ننشئ دالة <b>handleClick</b> التي تستخدم خاصية <b>current</b> للـ ref لاستدعاء طريقة <b>focus</b> على عنصر <b>input</b>. هذا يسمح لنا بتحديد التركيز على الإدخال عندما ينقر المستخدم على زر "Focus Input".</p>

<p>بشكل عام، يمكن أن تكون استخدام الـ refs أداة قوية للوصول إلى المكونات وتلاعبها في React. ومع ذلك، من المهم استخدامها بحذر وتجنب الاعتماد بشكل كبير على الشيفرة الإلزامية، حيث يمكن أن يجعل ذلك الشيفرة أكثر صعوبة في التفكير والصيانة.</p>

<b>مصدر الحدث</b>

<p>مصدر الحدث هو نمط تصميم يسمح للكائنات في برنامج بالتواصل مع بعضها البعض عن طريق إطلاق ومعالجة الأحداث. ببساطة، مصدر الحدث هو آلية لبث الرسائل واستقبالها داخل برنامج.</p>

<p>في JavaScript، فئة EventEmitter هي وحدة مدمجة توفر وسيلة لتنفيذ هذا النمط. إليك مثال على كيفية استخدام EventEmitter في Node.js:</p>

<code>
<p><span className='red'>const</span> EventEmitter = <span className='blueviole'>require</span>(<span className='blue1'>'events'</span>); </p>

<p><span className='red'>class</span> MyEmitter <span className='red'>extends</span> EventEmitter {"{}"}</p>

<p><span className='red'>const</span> myEmitter = <span className='red'>new</span> MyEmitter(); </p>

<p>myEmitter.<span className='blue'>on</span>{'('}<span className='blue1'>'event'</span>, (arg){" => {"}</p>

<p> console.<span className='blue'>log</span>(<span className='blue1'>'Event triggered with argument:'</span>, arg); </p>

<p>{"});"}</p>

<p> myEmitter.<span className='blue'>emit</span>(<span className='blue1'>'event', 'Hello, world!'</span>); </p>
</code>

<p>في هذا المثال، ننشئ فئة مخصصة <b>MyEmitter</b> تمتد من فئة <b>EventEmitter</b>. ثم ننشئ مثيلًا لهذه الفئة ونحدد مستمعًا لحدث <b>event</b> باستخدام الطريقة <b>on</b>. في النهاية، نشعل حدث <b>event</b> ونمر بوسيطة سلسلة، مما يؤدي إلى تنشيط المستمع وتسجيل الوسيطة في وحدة التحكم.</p>

<p>بشكل عام، يمكن أن يكون استخدام مصدر الحدث طريقة مفيدة لتنفيذ نمط النشر والاشتراك في شيفرتك، حيث يمكن لأجزاء مختلفة من برنامجك التواصل مع بعضها البعض دون أن تكون مرتبطة بشكل وثيق. ومع ذلك، من المهم استخدام هذا النمط بحكمة وعدم الاعتماد بشكل كبير على الأحداث، حيث يمكن أن يجعل ذلك الشيفرة أكثر صعوبة في الفهم والتصحيح.</p>

<p><b>في React</b>، يمكنك استخدام نمط مصدر الحدث للتواصل بين مكونات مختلفة في تطبيقك. يمكن أن يكون هذا مفيدًا لتمرير البيانات أو تشغيل الإجراءات بين المكونات التي ليست مرتبطة مباشرة ببعضها البعض.</p>

<p>طريقة لتنفيذ نمط مصدر الحدث في React هي استخدام مكتبة من جهة ثالث مثل <b>eventemitter3</b> أو <b>mitt</b>. توفر هذه المكتبات واجهة برمجية بسيطة لإنشاء الأحداث والاشتراك فيها، ويمكن استخدامها مع كل من مكونات الصنف ومكونات الدالة مع الخطافات.</p>

<p>إليك مثال على كيفية استخدام <b>eventemitter3</b> في مكون React:</p>

<code>
<p><span className='red'>import</span> React, {"{ useEffect }"} <span className='red'>from</span> <span className='blue1'>'react'</span>; </p>

<p><span className='red'>import</span> EventEmitter <span className='red'>from</span> <span className='blue1'>'eventemitter3'</span>;  </p>

<p>&nbsp;<span className='red'>const</span>  emitter = <span className='red'>new</span> EventEmitter(); </p>

<p><span className='red'>function</span> <span className='blueviole'>ComponentA</span>() {"{"}</p>

<p>&nbsp;<span className='blueviole'>useEffect</span>{"(() => { "}</p>

<p>&nbsp;&nbsp;emitter.<span className='blue'>emit</span>{'('}<span className='blue1'>'eventA'</span>, {'{'} <span className='blue'>data</span>: <span className='blue1'>'Hello from ComponentA'</span> {'})'}; </p>

<p>{"}, []);"}</p>

<p>&nbsp;&nbsp;<span className='red'>return</span> {'<'}<span className='green'>div</span>{'>'}ComponentA{'</'}<span className='green'>div</span>{">; "}</p>

<p>{"} "}</p>

<p><span className='red'>function</span> <span className='blueviole'>ComponentB</span>{"() {"}</p>

<p>&nbsp;<span className='blueviole'>useEffect</span>{"(() => {"}</p>

<p>&nbsp;&nbsp;emitter.<span className='blue'>on</span>(<span className='blue1'>'eventA'</span>, handleEventA); </p>

<p>&nbsp;&nbsp;<span className='red'>return</span>  () {'=>'} emitter.<span className='blue'>off</span>(<span className='blue1'>'eventA'</span>, handleEventA);</p>

<p>{" }, []);"}</p>

<p>&nbsp;<span className='red'>const</span>  handleEventA = (payload) {"=> {"}</p>

<p>&nbsp;&nbsp;{'console.'}<span className='blue'>log</span>(<span className='blue1'>'Received eventA:'</span>, payload.<span className='blue'>data</span>);</p>

<p>{" }; "}</p>

<p>&nbsp;&nbsp;<span className='red'>return</span> {'<'}<span className='green'>div</span>{'>'}ComponentB{'</'}<span className='green'>div</span>{">; "}</p>

<p>{"}"}</p>
</code>

<p>في هذا المثال، نقوم بإنشاء مثيل لـ <b>EventEmitter يسمى emitter</b>. في <b>ComponentA</b>، نستخدم خطاف <b>useEffect</b> لإطلاق حدث يسمى <b>eventA</b> ببعض البيانات. في <b>ComponentB</b>، نستخدم خطاف <b>useEffect</b> للاشتراك في الحدث <b>eventA</b>، وتحديد دالة استدعاء تسمى <b>handleEventA</b> التي تسجل البيانات إلى وحدة التحكم.</p>

<p>عندما يتم تركيب ComponentA، يطلق الحدث eventA ببعض البيانات. عندما يتم تركيب ComponentB، يشترك في حدث eventA ويبدأ في الاستماع إلى أي أحداث بهذا الاسم. عندما يتم إطلاق eventA، يتم استدعاء handleEventA بالبيانات، ويقوم بتسجيل الرسالة إلى وحدة التحكم.</p>

<p>بشكل عام، استخدام نمط إصدار الحدث في React يمكن أن يكون وسيلة مفيدة لتنفيذ التواصل بين المكونات التي ليست مرتبطة مباشرة ببعضها البعض. ومع ذلك، من المهم استخدام هذا النمط بحكمة وعدم الاعتماد بشكل كبير على الأحداث، حيث يمكن أن يجعل هذا الأمر من الصعب فهم وتصحيح الشيفرة الخاصة بك.</p>

<h4>رد الفعل في React</h4>

<p>في React، يمكنك إضافة الردود في مكوناتك باستخدام مجموعة متنوعة من التقنيات. يمكن أن تجعل الردود واجهة المستخدم الخاصة بك أكثر جاذبية وتوفير ردود بصرية للمستخدم عندما تتغير الأشياء.</p>

<p>طريقة شائعة لتنفيذ الردود في React هي استخدام تحولات أو ردود فعل CSS. يمكنك إضافة فئات CSS إلى مكوناتك لتشغيل هذه الردود، واستخدام خاصية <b>className</b> في React لتبديل الفئات استنادًا إلى حالة المكون.</p>

<p>فيما يلي مثال على كيفية استخدام التحولات CSS لتحريك زر عندما يتم النقر عليه:</p>

<code>
<p><span className='red'>import</span> {'React, { useState }'} <span className='red'>from</span> <span className='blue1'>'react'</span>;</p> 

<p><span className='red'>import</span>  <span className='blue1'>'./Button.css'</span>;</p>

<p><span className='red'>function</span> <span className='blueviole'>Button</span>{"() {"}</p>

<p>&nbsp;<span className='red'>const</span>  {"[isClicked, setIsClicked]"} = <span className='blueviole'>useState</span>(<span className='blue1'>false</span>); </p>

<p>&nbsp;<span className='red'>const</span> {"handleClick = () => { "}</p>

<p><span className='blueviole'>setIsClicked</span>(<span className='blue1'>true</span>); </p>

<p><span className='blueviole'>setTimeout</span>{"(() => "}<span className='blueviole'>setIsClicked</span>(<span className='blue1'>false</span>), <span className='blue1'>1000</span>{')'};</p>

<p>{"};"}</p>

<p>&nbsp;<span className='red'>return</span> {"("}</p>

<p>{'<'}<span className='green'>button</span> <span className='blue'>className</span>={'{'}<span className='blue1'>`button {'${'}</span>isClicked ? <span className='blue1'>'clicked'</span> : <span className='blue1'>''{'}`'}</span>{'}'} <span className='blue'>onClick</span>={'{handleClick}>'}</p>

<p>&nbsp;{"Click me! "}</p>

<p>{"</"}<span className='green'>button</span>{">"}</p>

<p>{"); "}</p>

<p>{" }"}</p>
</code>

<p>في هذا المثال، نحدد مكونًا يسمى <b>Button</b> يستخدم السنارة <b>useState</b> لتتبع ما إذا كان الزر قد تم النقر عليه أم لا. عندما يتم النقر على الزر، نقوم بتعيين حالة <b>isClicked</b> إلى <b>true</b>، مما يضيف الفئة <b>clicked</b> إلى الزر. ثم نستخدم <b>setTimeout</b> لإزالة الفئة <b>clicked</b> بعد ثانية واحدة، مما يؤدي إلى الانتقال مرة أخرى إلى الحالة الأصلية.</p>

<p>نحدد أيضًا ملف CSS يُسمى <b>Button.css</b> يحدد الأنماط للزر والفئة <b>clicked</b>:</p>

<code>
  <p>{'.button {'}</p>
  <p>&nbsp;&nbsp;<span className='blue'>background-color</span>: <span className='blue1'>blue</span>; </p>
  <p>&nbsp;&nbsp;<span className='blue'>color</span>: <span className='blue1'>white</span>;</p>
  <p>&nbsp;&nbsp;<span className='blue'>padding</span>: 10<span className='blue1'>px</span> 20<span className='blue1'>px</span>; </p>
  <p>&nbsp;&nbsp;<span className='blue'>border</span>: <span className='blue1'>none</span>;</p>
  <p>&nbsp;&nbsp;<span className='blue'>border-radius</span>: 5<span className='blue1'>px</span>;</p>
  <p>&nbsp;&nbsp;<span className='blue'>transition</span>: <span className='blue1'>background-color</span> 0.5<span className='blue1'>s</span>; </p>
  <p>{'}'}</p>
  <p>{'.clicked {'}</p>
  <p>&nbsp;&nbsp;<span className='blue'>background-color</span>: <span className='blue1'>red</span>; </p>
  <p>{'}'}</p>
</code>

<p>في هذا الملف CSS، نحدد الأنماط للزر ونحدد خاصية <b>transition</b> على الفئة <b>button</b> لتحريك التغييرات على الخلفية. نحدد أيضًا الفئة <b>clicked</b>، التي تغير الخلفية إلى اللون الأحمر عند تطبيقها.</p>

<p>طريقة أخرى لتنفيذ الرسوم المتحركة في React هي استخدام مكتبة طرف ثالث مثل <b>react-spring أو framer-motion</b>. توفر هذه المكتبات واجهة برمجة تطبيقات أكثر مرونة لإنشاء رسوم متحركة معقدة ويمكن أن تكون مفيدة لحالات الاستخدام المتقدمة أكثر.</p>

<p><b>react-transition-group</b> هي مكتبة طرف ثالث لـ React توفر وسيلة لإضافة تحولات CSS ورسوم متحركة بسهولة إلى مكوناتك. توفر مجموعة من المكونات وواجهات برمجة التطبيقات لإدارة دورة حياة التحولات، بما في ذلك تركيب وإزالة العناصر، وإضافة وإزالة الفئات، وتأخير الرسوم المتحركة.</p>

<b>{'npm install react-transition-group'}</b>

<p>المكونات الأساسية في <b>react-transition-group هي Transition و CSSTransition و TransitionGroup</b>. إليك نظرة عامة على كل مكون:</p>

<p>• <b>Transition</b>: يحدد هذا المكون دورة حياة أساسية للتحول، بما في ذلك حالات الدخول، والدخول، والخروج، والخروج. يمكنك استخدام هذا المكون لتشغيل </p>

<p>• <b>CSSTransition</b>: يوسع هذا المكون المكون <b>Transition</b> ويضيف دعمًا لتحولات CSS ورسوم متحركة. يمكنك تحديد فئات CSS لتطبيقها على مكونك أثناء مراحل التحول المختلفة، مثل <b>enter، enter-active، exit، وexit-active</b>.</p>

<p>• <b>TransitionGroup</b>: يُستخدم هذا المكون لإدارة مجموعة من المكونات <b>Transition أو CSSTransition</b>. يتتبع تركيب وإزالة المكونات ويمكنه تطبيق تأثيرات تحول مختلفة على كل مكون.</p>

<p>إليك مثال على كيفية استخدام <b>react-transition-group</b> لإضافة تحول تلاشٍ لمكون عند تركيبه:</p>

<code>
  <p><span className='red'>import</span>  {'React, { useState }'} <span className='red'>from</span> <span className='blue1'>'react'</span>; </p>
  <p><span className='red'>import</span>  {'{ CSSTransition }'} <span className='red'>from</span> <span className='blue1'>'react-transition-group'</span>;</p>
  <p><span className='red'>import</span>  <span className='blue1'>'./FadeIn.css'</span>;</p>
  <p><span className='red'>function</span> <span className='blueviole'>FadeIn</span>{"() { "}</p>
  <p>&nbsp;<span className='red'>const</span> {'[isMounted, setIsMounted]'} = <span className='blueviole'>useState</span>(<span className='blue1'>false</span>); </p>
  <p>&nbsp;<span className='red'>const</span> {'handleMount = () => '}<span className='blueviole'>setIsMounted</span>(<span className='blue1'>true</span>);  </p>
  <p>&nbsp;<span className='red'>return</span> {"( "}</p>
  <p>{"<> "}</p>
  <p>&nbsp;{'<'}<span className='green'>button</span> <span className='blue'>onClick</span>={'{handleMount}>Mount component</'}<span className='green'>button</span>{'>'}</p>
  <p>&nbsp;{'<'}<span className='blueviole'>CSSTransition</span> <span className='blue'>in</span>={'{isMounted}'} <span className='blue'>timeout</span>={'{'}<span className='blue1'>300</span>{'}'} <span className='blue'>classNames</span>=<span className='blue1'>"fade"</span>{'>'}</p>
  <p>&nbsp;{'<'}<span className='green'>div</span> <span className='blue'>className</span>=<span className='blue1'>"content"</span>{'>'}Hello, world!{'</'}<span className='green'>div</span>{'>'}</p>
  <p>&nbsp;{"</"}<span className='blueviole'>CSSTransition</span>{">"}</p>
  <p>{" </> "}</p>
  <p>&nbsp;{"); "}</p>
  <p>{"} "}</p>
</code>

<p>في هذا المثال، نحدد مكونًا يُسمى <b>FadeIn</b> يستخدم السنارة <b>useState</b> لتتبع ما إذا تم تركيب المكون أم لا. عند النقر على الزر، نقوم بتعيين حالة <b>isMounted</b> إلى <b>true</b>، مما يؤدي إلى تقديم المكون <b>CSSTransition</b> لعرض div <b>content</b> بتأثير تلاشٍ. نحدد أيضًا ملف CSS يُسمى <b>FadeIn.css</b> الذي يحدد الأنماط والرسوم المتحركة لتأثير التلاشي:</p>

<code>
  <p>{" .fade-enter { "}</p>
  <p>&nbsp;&nbsp;<span className='blue'>opacity</span>: 0;</p>
  <p>{"} "}</p>
  <p>{".fade-enter-active { "}</p>
  <p>&nbsp;&nbsp;<span className='blue'>opacity</span>: 1; </p>
  <p>&nbsp;&nbsp;<span className='blue'>transition</span>: <span className='blue1'>opacity</span> 300<span className='blue1'>ms ease-in</span>;  </p>
  <p>{"} "}</p>
  <p>{".fade-exit { "}</p>
  <p>&nbsp;&nbsp;<span className='blue'>opacity</span>: 1;  </p>
  <p>{"} "}</p>
  <p>{".fade-exit-active { "}</p>
  <p>&nbsp;&nbsp;<span className='blue'>opacity</span>: 0;  </p>
  <p>&nbsp;&nbsp;<span className='blue'>transition</span> : <span className='blue1'>opacity</span> 300<span className='blue1'>ms ease-out</span>; </p>
  <p>{"}"}</p>
</code>
<p>في هذا الملف CSS، نحدد الفئات لمراحل التحول المختلفة. عند دخول المكون، له تعتيم بنسبة 0 (<b>fade-enter</b>) ويتحول إلى تعتيم بنسبة 1 على مدى 300 مللي ثانية (<b>fade-enter-active</b>). عند خروج المكون، له تعتيم بنسبة 1 (<b>fade-exit</b>) ويتحول إلى تعتيم بنسبة 0 على مدى 300 مللي ثانية (<b>fade-exit-active</b>).</p>

<p>بشكل عام، يمكن أن تجعل إضافة الرسوم المتحركة إلى مكونات React واجهة المستخدم الخاصة بك أكثر جاذبية وتوفير ردود فعل بصرية للمستخدم. من خلال استخدام تحولات CSS أو رسوم متحركة، أو مكتبة طرف ثالث، يمكنك بسهولة إضافة الرسوم المتحركة إلى مكوناتك وجعلها أكثر دينامية.</p>

<b><p>* النص المكتوب بمساعدة المترجم. إذا وجدت خطأ، يرجى إعلامنا *</p></b>
    <div className='ads-container'>  
  {/*  реклама  */}
</div>
    </div>
  )
}

export default ArReact_6;