import React from 'react';

function ArReact_8() {
  return (
    <div>
      <div className='ad-container'>  
          {/*  реклама  */}
        </div>
     
     <h1>Redux Thunk</h1>
      
     <p>Redux Thunk هو مكتبة وسيطة لـ Redux تتيح لك كتابة منطق غير متزامن يتفاعل مع متجر Redux. يتيح لك توجيه الإجراءات التي تحتوي على كود غير متزامن، مثل طلبات API أو آثار جانبية أخرى، عن طريق لف منشئي الإجراءات الخاصة بك في دالة تعيد دالة أخرى.</p>
     
     <p>فيما يلي مثال على كيفية استخدام Redux Thunk في تطبيق React:</p>
     
      <code>
        <p><span className='green'>{"// actions.js "}</span></p>

        <p><span className='red'>import</span> axios <span className='red'>from</span> <span className='blue1'>'axios'</span>; </p>

        <p><span className='red'>export const</span> {"fetchUserRequest = () => ({ "}</p>

        <p>&nbsp;&nbsp;<span className='blue'>type</span>: <span className='blue1'>'FETCH_USER_REQUEST'</span>, </p>

        <p>{"}); "}</p>

        <p><span className='red'>export const</span> {"fetchUserSuccess = (user) => ({ "}</p>

        <p>&nbsp;&nbsp;<span className='blue'>type</span>: <span className='blue1'>'FETCH_USER_SUCCESS'</span>,</p>

        <p>&nbsp;&nbsp;<span className='blue'>payload</span>: user, </p>

        <p>{"}); "}</p>

        <p><span className='red'>export const</span> {"fetchUserError = (error) => ({ "}</p>

        <p>&nbsp;&nbsp;<span className='blue'>type</span>: <span className='blue1'>'FETCH_USER_ERROR'</span>, </p>

        <p>&nbsp;&nbsp;<span className='blue'>payload</span>: error, </p>

        <p>{"}); "}</p>
        
        <p><span className='red'>export const</span> {"fetchUser = (userId) => { "}</p>

        <p>&nbsp;<span className='red'>return</span> {"(dispatch) => { "}</p>

        <p>&nbsp;&nbsp;<span className='blueviole'>dispatch</span>(<span className='blueviole'>fetchUserRequest</span>());</p>

        <p>&nbsp;&nbsp;axios.<span className='blue'>get</span>(` <span className='blue1'>{'https://jsonplaceholder.typicode.com/users/$'}</span>{'{userId}'} `)  </p>

        <p>&nbsp;&nbsp;&nbsp;.<span className='blue'>then</span>{"((response) => {"}</p>

        <p>&nbsp;&nbsp;&nbsp;&nbsp;<span className='red'>const</span> user = response.<span className='blue'>data</span>; </p>

        <p>&nbsp;&nbsp;&nbsp;&nbsp;<span className='blueviole'>dispatch</span>(<span className='blueviole'>fetchUserSuccess</span>(user)); </p>

        <p>{"})"}</p>

        <p>&nbsp;&nbsp;&nbsp;.<span className='blue'>catch</span>{"((error) => {"}</p>

        <p>&nbsp;&nbsp;&nbsp;&nbsp;<span className='blueviole'>dispatch</span>(<span className='blueviole'>fetchUserError</span>(error.<span className='blue'>message</span>)); </p>

        <p>&nbsp;&nbsp;{"});"}</p>

        <p>&nbsp;{"};"}</p>

        <p>{"};"}</p>
    </code>

    <p>في المثال أعلاه، نقوم بتعريف ثلاث منشئي إجراءات: <b>fetchUserRequest, fetchUserSuccess, و fetchUserError</b>. نحدد أيضًا منشئ إجراء <b>fetchUser</b> الذي يعيد دالة بدلاً من كائن إجراء. تأخذ هذه الدالة <b>dispatch</b> كوسيطة، وهي دالة <b>dispatch</b> المخزن Redux.</p>
    
    <p>داخل الدالة <b>fetchUser</b>، نقوم بإرسال إجراء <b>fetchUserRequest</b>، الذي يضبط حالة <b>isLoading</b> إلى <b>true</b>. ثم نقوم بعمل استدعاء لواجهة برمجة التطبيقات باستخدام Axios وإرسال إما الإجراء <b>fetchUserSuccess</b> أو <b>fetchUserError</b> استنادًا إلى رد الواجهة برمجة التطبيقات. تحدث هذه الإجراءات تحديثًا في مخزن Redux بالبيانات المستردة أو رسالة الخطأ على التوالي.</p>
    
    <p>لاستخدام منشئ الإجراء هذا في عنصر، يمكننا استيراده وتمريره إلى <b>dispatch</b> بهذه الطريقة:</p>
    
    <code>
      <p><span className='green'>{"// MyComponent.js"}</span></p>

      <p><span className='red'>import</span> {"React, { useEffect }"} <span className='red'>from</span> <span className='blue1'>'react'</span>;</p>

      <p><span className='red'>import</span> {"{ useDispatch, useSelector }"} <span className='red'>from</span> <span className='blue1'>'react-redux'</span>;</p>

      <p><span className='red'>import</span> {"{ fetchUser }"} <span className='red'>from</span> <span className='blue1'>'./actions'</span>; </p>

      <p>&nbsp;<span className='red'>const</span> MyComponent = {'({'} <span className='blue'>userId</span> {'})'} {"=> { "}</p>

      <p>&nbsp;<span className='red'>const</span> dispatch = <span className='blueviole'>useDispatch</span>(); </p>

      <p>&nbsp;<span className='red'>const</span> user = <span className='blueviole'>useSelector</span>(state {'=>'} state.<span className='blue'>user</span>.<span className='blue'>data</span>); </p>

      <p>&nbsp;<span className='red'>const</span> isLoading = <span className='blueviole'>useSelector</span>(state {'=>'} state.<span className='blue'>user</span>.<span className='blue'>isLoading</span>); </p>

      <p>&nbsp;<span className='red'>const</span> error = <span className='blueviole'>useSelector</span>(state {'=>'} state.<span className='blue'>user</span>.<span className='blue'>error</span>);</p>

      <p>&nbsp;<span className='blueviole'>useEffect</span>{"(() => { "}</p>

      <p>&nbsp;&nbsp;<span className='blueviole'>dispatch</span>(<span className='blueviole'>fetchUser</span>(userId));</p>

      <p>&nbsp;{"}, [dispatch, userId]); "}</p>

      <p>&nbsp;<span className='red'>if</span> {"(isLoading) { "}</p>

      <p>&nbsp;&nbsp;<span className='red'>return</span> {'<'}<span className='green'>div</span>{'>'}Loading...{'</'}<span className='green'>div</span>{'>'};</p>

      <p>{" } "}</p>

      <p>&nbsp;<span className='red'>if</span> {"(error) {  "}</p>

      <p>&nbsp;&nbsp;<span className='red'>return</span> {'<'}<span className='green'>div</span>{'>Error: {error}</'}<span className='green'>div</span>{'>'};</p>

      <p>{"}"}</p>

      <p>&nbsp;&nbsp;<span className='red'>return</span> {"("}</p>

      <p>{'<'}<span className='green'>div</span>{'>'}</p>

      <p>&nbsp;{'<'}<span className='green'>h1</span>{'>{'}user.<span className='blue'>name</span>{'}</'}<span className='green'>h1</span>{'>'}</p>

      <p>&nbsp;{'<'}<span className='green'>p</span>{'>{'}user.<span className='blue'>email</span>{'}</'}<span className='green'>p</span>{'>'}</p>
     
      <p>&nbsp;{'<'}<span className='green'>p</span>{'>{'}user.<span className='blue'>phone</span>{'}</'}<span className='green'>p</span>{'>'}</p>
     
      <p>{"</"}<span className='green'>div</span>{">"}</p>

      <p>&nbsp;{");"}</p>

      <p>{"};"}</p>
   </code>

   <p>في المثال أعلاه، نستخدم خطافات <b>useDispatch</b> و <b>useSelector</b> من مكتبة react-redux للتفاعل مع مخزن Redux. نقوم بإرسال منشئ الإجراء <b>fetchUser</b> في خطاف <b>useEffect</b>، الذي سيتم استدعاؤه عند تجهيز العنصر. كما نستخدم <b>useSelector</b> لاستخراج الأجزاء ذات الصلة من البيانات من مخزن Redux، مثل بيانات المستخدم وعلامات التحميل والخطأ.</p>
   
   <p>بشكل عام، Redux Thunk هو مكتبة وسيطة مفيدة لـ Redux تتيح لك كتابة منطق غير متزامن يتفاعل مع مخزن Redux. يمكن أن يساعد في تبسيط الشيفرة وجعلها أسهل في فهم سلوك البرمجة غير المتزامن في تطبيق React الخاص بك.</p>
    
   <h3>Redux-Observable</h3>

   <p>Redux-Observable هو وسيط لـ Redux يمكن استخدام برمجة رد فعلية في تطبيقات Redux. يتيح للمطورين التعامل مع الإجراءات والأحداث الغير متزامنة المعقدة بطريقة واضحة ومركبة وسهلة الاختبار باستخدام RxJS، وهي مكتبة للبرمجة الرد فعلية.</p>
   
   <p>مع Redux-Observable، يمكن للمطورين تعريف "epics" وهي دوال تستمع إلى إجراءات معينة، ثم تستجيب لها بتيار من الإجراءات الجديدة. هذه الepics هي observables، وهي دوال تتلقى تيار من الأحداث ويمكنها تحويلها أو تصفيتها أو دمجها بطريقة واضحة.</p>
   
   <p>إليك مثال على كيفية استخدام Redux-Observable:</p>

<code>
  <p><span className='red'>import</span> {'{ createStore, applyMiddleware } '} <span className='red'>from</span> <span className='blue1'>'redux'</span>;</p>

  <p><span className='red'>import</span>  {'{ createEpicMiddleware, combineEpics }'} <span className='red'>from</span> <span className='blue1'>'redux-observable'</span>;</p>

  <p><span className='red'>import</span> {'{ ajax }'} <span className='red'>from</span> <span className='blue1'>'rxjs/ajax'</span>;  </p>

  <p><span className='red'>import</span> {'{ mergeMap, map, catchError }'} <span className='red'>from</span> <span className='blue1'>'rxjs/operators'</span>;</p>

  <p>&nbsp;<span className='red'>const</span> {"pingEpic = action$ =>"}</p>

  <p>&nbsp;&nbsp;action$.<span className='blue'>ofType</span>(<span className='blue1'>'PING'</span>)</p>

  <p>&nbsp;&nbsp;.<span className='blue'>mergeMap</span>{"(action =>"}</p>

  <p>&nbsp;&nbsp;&nbsp;ajax.<span className='blue'>getJSON</span>(<span className='blue1'>'/api/ping'</span>)</p>

  <p>&nbsp;&nbsp;&nbsp;.<span className='blue'>map</span>{'('}response {'=> ({ '}<span className='blue'>type</span>: <span className='blue1'>'PONG'</span>, <span className='blue'>payload</span>: response {'}))'}  </p>

  <p>&nbsp;&nbsp;&nbsp;.<span className='blue'>catch</span>{'(error => ({'} <span className='blue'>type</span>: <span className='blue1'>'PING_ERROR'</span>, <span className='blue'>payload</span>: error.<span className='blue'>message</span> {'}))'}</p>

  <p>{");"}</p>

  <p>&nbsp;<span className='red'>const</span> rootEpic = <span className='blueviole'>combineEpics</span>{'('}</p>

  <p>&nbsp;&nbsp;{"pingEpic, "}</p>

  <p>&nbsp;&nbsp;<span className='green'>{"// more epics... "}</span></p>

  <p>{"); "}</p>

  <p>&nbsp;<span className='red'>const</span> epicMiddleware = <span className='blueviole'>createEpicMiddleware</span>();</p>

  <p>&nbsp;<span className='red'>const</span> store = <span className='blueviole'>createStore</span>{'('}</p>

  <p>&nbsp;&nbsp;{"reducer, "}</p>

  <p>&nbsp;&nbsp;<span className='blueviole'>applyMiddleware</span>(epicMiddleware)</p>

  <p>{");"}</p>

  <p>epicMiddleware.<span className='blue'>run</span>(rootEpic); </p>
</code>

<p>في هذا المثال، نقوم بتعريف epic يسمى <b>pingEpic</b> الذي يستمع إلى إجراء من نوع 'PING'، ثم يقوم بإجراء طلب AJAX إلى خادم لإرسال ping. إذا كان الطلب ناجحًا، فإنه يرسل إجراء من نوع 'PONG' مع حمولة الاستجابة. إذا فشل الطلب، فإنه يرسل إجراء من نوع 'PING_ERROR' مع رسالة الخطأ كحمولة.</p>

<p>ثم نقوم بدمج جميع epics الخاصة بنا في <b>rootEpic</b> وننشئ مثيلًا لـ <b>createEpicMiddleware()</b> لاستخدامه كوسيط في مخزن Redux الخاص بنا. وأخيرًا، نقوم بتطبيق الوسيط على المخزن وتشغيل الـ root epic بواسطة <b>epicMiddleware.run(rootEpic)</b>.</p>

<p>بشكل عام، Redux-Observable هو أداة قوية لمعالجة الإجراءات والأحداث الغير متزامنة المعقدة في تطبيقات Redux. يوفر طريقة مرنة وواضحة لإدارة السلوك غير المتزامن باستخدام مفاهيم البرمجة الرد فعلية.</p>
    
<b><p>* النص المكتوب بمساعدة المترجم. إذا وجدت خطأ، يرجى إعلامنا *</p></b>
    <div className='ads-container'>  
  {/*  реклама  */}
</div>
    </div>
  )
}

export default ArReact_8;