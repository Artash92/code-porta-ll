import React from 'react';

function ArReact_3() {
  return (
    <div>
      <div className='ad-container'>  
          {/*  реклама  */}
        </div>
        
      <h1>أحداث React</h1>

<p>توفر React طريقة للتعامل مع الأحداث في المكونات، بطريقة مشابهة للتعامل مع الأحداث في جافا سكريبت العادي. في React، يمكنك إضافة معالجين للأحداث إلى أي عنصر JSX باستخدام بنية التحرير <b>on[اسم الحدث]</b></p>

<p>على سبيل المثال، دعونا نفترض أن لدينا زر في مكون React نريد التعامل مع حدث النقر له:</p>

<code>
  <p><span className='red'>function</span> <span className='blueviole'>MyButton</span>(props) {'{'} </p>

  <p><span className='red'>function</span> <span className='blueviole'>handleClick</span>() {'{'}</p>

  <p><span className='blue'>{"console.log"}</span>(<span className='blue1'>'زر تم النقر عليه'</span>); </p>

  <p>{' }'}</p>

  <p><span className='red'>return</span> {'('}</p>

  <p>{'<'}<span className='green'>button</span> <span className='blue'>onClick</span>={'{handleClick}'}{'>'}انقر هنا{'</'}<span className='green'>button</span>{'>'}  </p>

  <p>&nbsp;{');'}</p>

  <p>{'} '}</p>
</code>

<p>في هذا المثال، نحدد مكون <b>MyButton</b> الذي يحتوي على عنصر زر مع خاصية <b>onClick</b> مضبوطة على دالة تسمى <b>handleClick</b>. عند النقر على الزر، سيتم استدعاء دالة <b>handleClick</b>، وسيتم تسجيل الرسالة "زر تم النقر عليه" في وحدة التحكم.</p>

<p>يمكنك أيضًا تمرير الوسائط إلى دالة معالج الحدث باستخدام الدوال السهمية. على سبيل المثال، دعونا نفترض أن لدينا قائمة من العناصر التي نريد عرضها كأزرار:</p>

<code>
 <p><span className='red'>function</span> <span className='blueviole'>ItemList</span>(props) {'{'}</p>

<p><span className='red'>const</span> items = props.<span className='blue'>items</span>; </p>

<p><span className='red'>function</span> <span className='blueviole'>handleClick</span>(item) {'{'}</p>

<p><span className='blue'>{'console.log'}</span>(<span className='blue1'>`العنصر $</span><span className='blue1'>{'{item'}.<span className='blue'>id</span>{'}'}</span><span className='blue1'> تم النقر عليه`</span>); </p>

<p>&nbsp;{'}'}</p>

<p><span className='red'>const</span> buttonList = {'items'}.<span className='blue'>map</span>{'('}(item) {'=>'} </p>

<p>{'<'}<span className='green'>button</span> <span className='blue1'>key</span>= {'{item'}.<span className='blue'>{'id}'}</span> <span className='blue'>onClick</span>={'{()'} {'=>'} <span className='blueviole'>handleClick</span>(item){'}'}{'>'}</p>

<p>{'{item'}.<span className='blue'>{'name}'}</span></p>

<p>{'</'}<span className='green'>button</span>{'>'}</p>

<p>{' ); '}</p>

<p><span className='red'>return</span> {'('}</p>

<p>{'<'}<span className='green'>div</span>{'>'}</p>

<p>{'{buttonList} '}</p>

<p>{'</'}<span className='green'>div</span>{'>'}</p>

<p>&nbsp;{');'}</p>

<p>{'} '}</p>
</code>

<p>في هذا المثال، نعرف مكون <b>ItemList</b> الذي يأخذ خاصية <b>items</b>. نعرف دالة <b>handleClick</b> التي تأخذ وسيطًا <b>item</b>، الذي سيُستخدم لتسجيل رسالة في وحدة التحكم عند النقر على الزر المقابل.</p>

<p>نستخدم الطريقة <b>map</b> لإنشاء مصفوفة جديدة من عناصر <b>{'<button>'}</b>، حيث يُقابل كل عنصر عنصرًا في خاصية <b>items</b>. نعين خاصية <b>key</b> لكل عنصر <b>{'<button>'}</b> إلى <b>id</b> للعنصر المقابل، وهو متطلب في React لمساعدته على تحسين التحديثات. نستخدم أيضًا دالة السهم لتمرير كائن <b>item</b> إلى دالة <b>handleClick</b> عند النقر على الزر.</p>

<p>ثم نعيد <b>{'<div>'}</b> الذي يحتوي على مصفوفة <b>buttonList</b>.</p>

<h5>React Events</h5>

    <p className='blue1'>onKeyDown</p>

    <p className='blue1'>onKeyPress </p>

    <p className='blue1'>onKeyUp</p>

    <p className='blue1'>onFocus</p>

    <p className='blue1'>onBlur</p>

    <p className='blue1'>onChange</p>

    <p className='blue1'>onInput</p>

    <p className='blue1'>onInvalid </p>

    <p className='blue1'>onSubmit</p>

    <p className='blue1'>onClick</p>

    <p className='blue1'>onContextMenu</p>

    <p className='blue1'>onDoubleClick</p>

    <p className='blue1'>onDrag</p>

    <p className='blue1'>onDragEnd</p>

    <p className='blue1'>onDragEnter</p>

    <p className='blue1'>onDragExit</p>

    <p className='blue1'>onDragLeave</p>

    <p> <a href="https://react.dev/reference/react-dom/components/common#react-event-object" target='_blank' > 👉🏼 React https://react.dev/reference/react-dom/components/common#react-event-object</a> </p>

    <b>React state in class components</b>

<p>في React، يمكن أيضًا إدارة الحالة باستخدام مكونات الصف. مكونات الصف هي فئات جافا سكريبت تمتد من الفئة <b>React.Component</b> وتنفذ طريقة <b>render</b> التي تعيد واجهة مستخدم المكون.</p>

<p>إليك مثال على مكون الصف الذي يدير الحالة:</p>

<code>
   <p><span className='red'>import</span> React,{"{ Component }"} <span className='red'>from</span> 'react'; </p>

   <p> <span className='red'>class</span> Counter <span className='red'>extends</span> Component {'{'}</p>

   <p><span className='blue'>constructor</span>(props) {'{'}</p>

   <p>super (props);</p>

   <p><span className='red'>this</span>.<span className='blue'>state</span> = {'{'}<span className='blue'>count</span>: <span className='blue1'>0</span> {'}'};</p>

   <p><span className='red'>this</span>.<span className='blue'>handleClick</span> = <span className='red'>this</span>.<span className='blue'>handleClick</span>.<span className='blue'>bind</span>(<span className='red'>this</span>);</p>

   <p>&nbsp;{'}'}</p>

   <p><span className='blue'>handleClick</span>() {'{'}</p>

   <p><span className='red'>this</span>.<span className='blue'>setState</span>{'({'} <span className='blue'>count</span>: <span className='red'>this</span>.<span className='blue'>state</span>.<span className='blue'>count</span> + <span className='blue1'>1</span>{' })'}; </p>

   <p>{'}'}</p>

   <p><span className='blue'>render</span>() {'{'}</p>

   <p><span className='red'>return</span> {'('}</p>

   <p>{'<'}<span className='green'>div</span>{'>'}</p>

   <p>{'<'}<span className='green'>p</span>{'>'}لقد قمت بالنقر {'{'}<span className='red'>this</span>.<span className='blue'>state</span>.<span className='blue'>count</span>{'}'} مرات{'</'}<span className='green'>p</span>{'>'}</p>

   <p>{'<'}<span className='green'>button</span> <span className='blue'>onClick</span>={'{'}<span className='red'>this</span>.<span className='blue'>handleClick</span>{'}'}{'>'}انقر هنا{'</'}<span className='green'>button</span>{'>'}</p>

   <p>{'</'}<span className='green'>div</span>{'>'}</p>

   <p>&nbsp;&nbsp;{');'}</p>

   <p>&nbsp;{'}'}</p>

   <p>{'}'}</p>
</code>

<p>في هذا المثال، نحدد فئة <b>Counter</b> التي تمتد من <b>React.Component</b>. داخل الفئة، نعرف مُنشئ يقوم بتعيين الحالة الابتدائية للمكون إلى كائن يحتوي على خاصية <b>count</b> بقيمة 0. كما نقوم بربط طريقة <b>handleClick</b> بمثيل المكون باستخدام <b>bind</b>.</p>

<p>تقوم طريقة <b>handleClick</b> بتحديث حالة المكون عن طريق استدعاء <b>this.setState</b> بكائن جديد يحتوي على خاصية <b>count</b> مضافة بواحد.</p>

<p>تقوم طريقة <b>render</b> بإرجاع واجهة المستخدم للمكون، والتي تشمل عنصر <b>{'<p>'}</b> يعرض القيمة الحالية لـ <b>count</b>، وزر يقوم بتعيين <b>handleClick</b> عند النقر عليه.</p>

<p>مثلما هو الحال مع المكونات الوظيفية، من المهم جدًا عدم تعديل الحالة مباشرةً. بدلاً من ذلك، استخدم دائمًا <b>this.setState</b> لتحديث الحالة.</p>

<p>على الرغم من أن مكونات الصف ما زالت مدعومة في React، يُفضل عمومًا استخدام المكونات الوظيفية، خاصةً مع مقدمة الهوكس. ومع ذلك، فإن فهم مكونات الصف ما زال مهمًا لصيانة وتحديث قواعد الشيفرة القديمة.</p>

<b>دورة حياة React</b>

<p>في React، تمتلك المكونات دورة حياة تصف المراحل المختلفة التي تمر بها أثناء وجودها. فهم دورة حياة React أمر أساسي لبناء وصيانة تطبيقات React قوية.</p>

<p>فيما يلي نظرة عامة على طرق دورة حياة المكونات في React، مُجمعة حسب المرحلة:</p>

<h4>مرحلة التحميل:</h4>

<p><b>{'constructor()'}</b>: يتم استدعاؤه عند تهيئة المكون.</p>

<p><b>{'static getDerivedStateFromProps()'}</b>: يتم استدعاؤه عند تهيئة المكون، ومرة أخرى عندما يتلقى الخصائص الجديدة. نادراً ما يُستخدم.</p>

<p><b>{'render()'}</b>: يتم استدعاؤه كلما كان هناك حاجة لتقديم المكون.</p>

<p><b>{'componentDidMount()'}</b>: يتم استدعاؤه بعد أن يتم تقديم المكون للمرة الأولى.</p>

<h4>مرحلة التحديث:</h4>

<p><b>{'static getDerivedStateFromProps()'}</b>: يتم استدعاؤه عندما يتلقى المكون الخصائص الجديدة.</p>

<p><b>{'shouldComponentUpdate()'}</b>: يتم استدعاؤه قبل إعادة تقديم المكون. يسمح لك بإلغاء التحديث.</p>

<p><b>{'render()'}</b>: يتم استدعاؤه كلما كان هناك حاجة لتقديم المكون.</p>

<p><b>{'getSnapshotBeforeUpdate()'}</b>: يتم استدعاؤه قبل تحديث المكون. نادراً ما يُستخدم.</p>

<p><b>{'componentDidUpdate()'}</b>: يتم استدعاؤه بعد أن يتم تحديث المكون.</p>

<h4>مرحلة إزالة:</h4>

<p><b>{'componentWillUnmount()'}</b>: يتم استدعاؤه عندما يكون المكون على وشك الإزالة من DOM.</p>

<p>إليك مثال يوضح طرق دورة الحياة:</p>

<code>
  <p><span className='red'>import</span> React,{"{ Component }"} <span className='red'>from</span> 'react'; </p>
  
  <p><span className='red'>class</span> LifecycleDemo <span className='red'>extends</span> Component {'{'}</p>

  <p><span className='blue'>constructor</span>(props) {'{'} </p>

  <p>{'super(props);'}</p>  

  <p><span className='red'>{'this'}</span>.<span className='blue'>state</span>= {'{'}<span className='blue'>count</span>: <span className='blue1'>0</span> {'}'};</p>

  <p>{"console"}.<span className='blue'>log</span>(<span className='blue1'>'constructor'</span>);</p>

  <p>{'}'}</p>

  <p><span className='red'>static</span> <span className='blue'>getDerivedStateFromProps</span>(props, state) {'{'}</p>

  <p>{"console"}.<span className='blue'>log</span>('<span className='blue1'>getDerivedStateFromProps</span>');</p>

  <p><span className='red'>return null</span>;</p>

  <p>{'}'}</p>

  <p><span className='blue'>componentDidMount</span>() {'{'}</p>

  <p>{"console"}.<span className='blue'>log</span>(<span className='blue1'>'componentDidMount'</span>); </p>

  <p>{'}'}</p>

  <p><span className='blue'>shouldComponentUpdate</span>(nextProps, nextState) {'{'}</p>

  <p>{"console"}.<span className='blue'>log</span>(<span className='blue1'>'shouldComponentUpdate'</span>);</p>

  <p><span className='red'>return</span> <span className='blue'>true</span>;</p>

  <p>{'}'}</p>

  <p><span className='blue'>getSnapshotBeforeUpdate</span>(prevProps, prevState) {'{'}</p>

  <p>{"console"}.<span className='blue'>log</span>(<span className='blue1'>'getSnapshotBeforeUpdate'</span>);</p>

  <p><span className='red'>return null</span>;</p>

  <p>{'}'}</p>

  <p><span className='blue'>componentDidUpdate</span>(prevProps, prevState, snapshot) {'{'}</p>

  <p>{"console"}.<span className='blue'>log</span>(<span className='blue1'>'componentDidUpdate'</span>); </p>

  <p>{'}'}</p>

  <p><span className='blue'>componentWillUnmount</span>() {'{'} </p>

  <p>{"console"}.<span className='blue'>log</span>(<span className='blue1'>'componentWillUnmount'</span>); </p>

  <p>{'}'}</p>

  <p> <span className='blue'>handleClick</span> = () {'=>'} {'{'}</p>

  <p><span className='red'>this</span>.<span className='blue'>setState</span>{'({'} <span className='blue'>count</span>: <span className='red'>this</span>.<span className='blue'>state</span>.<span className='blue'>count</span> + <span className='blue1'>1</span> {'})'};</p>

  <p>{'}; '}</p>

  <p><span className='blue'>render</span>() {'{'} </p>

  <p>{"console"}.<span className='blue'>log</span>(<span className='blue1'>'render'</span>);</p>

  <p><span className='red'>return</span> {'('}</p>

  <p>{'<'}<span className='green'>div</span>{'>'}</p>

  <p>{'<'}<span className='green'>p</span>{'>'}لقد قمت بالنقر {'{'}<span className='red'>this</span>.<span className='blue'>state</span>.<span className='blue'>count</span>{'}'} مرات{'</'}<span className='green'>p</span>{'>'}</p>

  <p>{'<'}<span className='green'>button</span> <span className='blue'>onClick</span>={'{'}<span className='red'>this</span>.<span className='blue'>handleClick</span>{'}>'}انقر هنا{'</'}<span className='green'>button</span>{'>'}</p>
  
  <p>{'</'}<span className='green'>div</span>{'>'}</p>

  <p>&nbsp;&nbsp;{');'}</p>

  <p>&nbsp;{'}'}</p>

  <p>{'}'}</p>
</code>

<p>في هذا المثال، نحدد فئة <b>LifecycleDemo</b> التي تسجل رسائل في وحدة التحكم أثناء كل مرحلة من مراحل دورة حياة المكون. نعرف أيضًا طريقة <b>handleClick</b> التي تقوم بتحديث حالة المكون.</p>

<p>عندما يتم تثبيت المكون للمرة الأولى، يتم استدعاء الطرق التالية، بالترتيب: <b>constructor، getDerivedStateFromProps، render، و componentDidMount</b>. وعندما يتغير حالة المكون، يتم استدعاء الطرق <b>shouldComponentUpdate، render، و componentDidUpdate</b>، بترتيبها.</p>

<p>عندما يتم إزالة المكون، يتم استدعاء الطريقة <b>componentWillUnmount</b>.</p>

<p>من المهم فهم دورة حياة مكونات React حتى تتمكن من تحسين مكوناتك وتجنب الأخطاء الشائعة مثل تسريب الذاكرة والحلقات اللانهائية. ولكن لا داعي للقلق إذا بدت مراحل الحياة مربكة في البداية - مع الممارسة، ستصبح أكثر راحة معها.</p>

<b><p>* النص المكتوب بمساعدة المترجم. إذا وجدت خطأ، يرجى إعلامنا *</p></b>
    <div className='ads-container'>  
  {/*  реклама  */}
</div>
    </div>
  )
}

export default ArReact_3;