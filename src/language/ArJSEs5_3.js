import React from 'react';

function ArJSEs5_3() {
  return (
    <div>
      <div className='ad-container'>  
          {/*  реклама  */}
        </div>

        <h3>مفهوم الدوال</h3>

<p>الدالة هي مجموعة من الشفرة التي يمكن تعريفها وتنفيذها في وقت لاحق. تُستخدم لأداء مهمة معينة، ويمكن استدعاؤها من أي جزء في البرنامج حيث تكون متاحة. تجعل الدوال الشفرة أكثر تنظيمًا وإعادة استخدامًا وأسهل فهمًا.</p>

<h3>إنشاء دالة</h3>

<p>في JavaScript ES5، يمكن إنشاء دالة باستخدام كلمة الأمر function، تليها اسم الدالة، ومجموعة من الأقواس. داخل الأقواس، يمكننا تعريف معلمات واحدة أو أكثر، وداخل الأقواس المجعدة، نعرف الشفرة التي سيتم تنفيذها عند استدعاء الدالة.</p>

<p><b>مثال:</b></p>

<code>
  <p><span className='blueviole'>function </span><span className='blue'>sum</span>(<span className='blue'>a</span>,<span className='blue'> b</span>) {'{'} </p>  
  <p><span className='blueviole'>return</span> a + b;</p>  
  <p>{'}'}</p>  
</code>

<p><b>معاملات الدالة:</b></p>

<p>معاملات الدالة هي القيم التي يتم تمريرها إلى الدالة عند استدعائها. يمكننا تعريف معلمات واحدة أو أكثر داخل الأقواس عند إنشاء الدالة. عند استدعاء الدالة، نمرر القيم الفعلية كمعاملات.</p>

<p><b>مثال:</b></p>

<code>
  <p><span className='blueviole'>function </span><span className='blue'>sum</span>(<span className='blue'>a</span>,<span className='blue'> b</span>) {'{'} </p>  
  <p><span className='blueviole'>return</span> a + b;</p>  
  <p>{'}'}</p>  
  <p><span className='blueviole'>var</span> <span className='blue'>result</span> = sum(<span className='blue'>5</span>, <span className='blue'>10</span>);</p>
  <p> <span className='darkgreen'>// الناتج: 15</span></p>
</code>

<p><b>المدى المتغيرات:</b></p>

<p>يمكن أن تكون للمتغيرات مدى مختلفًا اعتمادًا على المكان الذي يتم فيه إعلانها. فيما يلي مثال على متغير يتم تعريفه داخل دالة والذي لا يمكن الوصول إليه خارج تلك الدالة:</p>

<p><b>مثال:</b></p>

<code>
  <p><span className='blueviole'>function</span> <span className='blue'>showMessage</span>() {'{'} </p>
  <p><span className='blueviole'>var</span> <span className='blue'>message</span> = <span className='red'>'مرحبًا، عالم!'</span>;</p>
  <p>{"console.log(message);"}</p>
  <p>{"} "}</p>
  <p>showMessage(); <span className='darkgreen'>//الناتج: مرحبًا، عالم!</span> </p>
  <p>{" console.log(message); "} <span className='darkgreen'>//الناتج: Uncaught ReferenceError: message is not defined</span></p>
</code>

<p><b>تعبيرات الدالة:</b></p>

<p>تعبير الدالة هو دالة يتم تعيينها لمتغير. فيما يلي مثال:</p>

<code>
  <p><span className='blueviole'>var</span> <span className='blue'>multiply</span> = <span className='blueviole'>function</span>(<span className='blue'>a</span>, <span className='blue'>b</span>) {'{'}</p>
  <p><span className='blueviole'>return</span> a * b ;</p>
  <p>{'}'}</p>
  <p><span className='blueviole'>var</span> <span className='blueviole'>result</span> = multiply(<span className='blue'>3</span>, <span className='blue'>4</span>);</p>
  <p>{'console.log(result);'} <span className='darkgreen'>// الناتج: 12</span></p>
</code>

<p><b>الدوال المجهولة:</b></p>

<p>الدالة المجهولة هي دالة بدون اسم. فيما يلي مثال على دالة مجهولة تُستدعى فورًا:</p>

<code>
  <p>{'('}<span className='blueviole'>function</span>() {'{'}</p>
  <p>{'console.log'}(<span className='red'>"مرحبًا، عالم!"</span>);</p>
  <p>{'})();'}</p>
 </code>

<p><b>الإغلاقات</b></p>

<p>الإغلاقات هي ميزة في JavaScript تسمح للدالة بالوصول إلى المتغيرات التي تكون خارج نطاقها الخاص. بمعنى آخر، تتشكل الإغلاق عندما تُعرَّف دالة داخل دالة أخرى وتتمتع بالوصول إلى المتغيرات الخاصة بالدالة الأم. فيما يلي مثال على إغلاق في JavaScript ES5:</p>

<code>
  <p><span className='blueviole'>function</span> <span className='blue'>outerFunction</span>() {'{'}</p>
  <p><span className='blueviole'>var</span> <span className='blue'>outerVariable</span> = <span className='red'>"أنا خارجًا!"</span>;</p>
  <p><span className='blueviole'>function</span> <span className='blue'>innerFunction</span>() {'{'}</p> 
  <p>{'console.log(outerVariable);'}</p>
  <p>{'}'}</p>
  <p><span className='blueviole'>return </span>innerFunction;</p>
  <p>{'}'}</p>
  <p><span className='blueviole'>var</span> <span className='blue'>closureExample</span> = outerFunction();</p>
  <p>closureExample(); <span className='darkgreen'>// الناتج: "أنا خارجًا!"</span></p>
</code>

<p>في هذا المثال، تعرِّف الدالة الخارجية متغيرًا خارجيًا ودالة داخلية تُسجِّل قيمة المتغير الخارجي. يتم إرجاع الدالة الداخلية من الدالة الخارجية وتعيينها للمتغير closureExample. عند استدعاء closureExample()، يتم تسجيل قيمة المتغير الخارجي، والتي هي "أنا خارجًا!"، وهذا ممكن بسبب الإغلاق، حتى ولو لم يتم تعريف المتغير الخارجي داخل الدالة الداخلية. هذا مثال بسيط على الإغلاقات في JavaScript ES5، ولكنه يظهر مدى قوتها وفائدتها. تُستخدم الإغلاقات في كثير من الأحيان لإنشاء المتغيرات والطرق الخاصة في JavaScript، بين أمور أخرى.</p>
    
<b><p>* النص المكتوب بمساعدة المترجم. إذا وجدت خطأ، يرجى إعلامنا *</p></b>
    <div className='ads-container'>  
      {/*  реклама  */}
      </div>
    </div>
  )
}

export default ArJSEs5_3;