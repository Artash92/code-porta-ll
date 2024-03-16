import React from 'react';

function ArHtml_6() {
  return (
    <div>
      <div className='ad-container'>  
          {/*  реклама  */}
        </div>
        
      <h1>كيانات الشخصيات:</h1>

<p>دليل مرجعي موجز يوضح الخصائص الأساسية لأنماط CSS واستخدامها.</p>

<p>يغطي هذا الورق الغش الخطوط والألوان والحدود ونموذج الصندوق والتموضع وتنسيق النص والرسوم المتحركة، وأكثر من ذلك.</p>

<p><b>CSS</b> لا يُستخدم لتحديد كيانات الشخصيات مباشرة. عادةً ما يتم استخدامها في HTML لتمثيل الشخصيات الخاصة، مثل &amp;، &lt;، &gt;، وما إلى ذلك.</p>

<h2>الخطوط:</h2>

<p><strong>font-family:</strong> يحدد عائلة الخط للنص.</p>

<code>
    <span className='blue'>font-family</span>: <span className='blue1'>{'\'Arial\', sans-serif'}</span>;
</code>

<p><strong>font-size:</strong> يحدد حجم الخط.</p>

<code>
    <span className='blue'>font-size</span>: <span className='blue1'>16px</span>;
</code>

<p><strong>font-style:</strong> يحدد نمط الخط (على سبيل المثال، مائل).</p>

<code>
    <span className='blue'>font-style</span>: <span className='blue1'>italic</span>;
</code>

<p><strong>font-weight:</strong> يحدد وزن الخط (على سبيل المثال، عريض).</p>

<code>
    <span className='blue'>font-weight</span>: <span className='blue1'>bold</span>;
</code>

<h2>الألوان:</h2>

<p><strong>color:</strong> يحدد لون النص.</p>

<code>
    <span className='blue'>color</span>: <span className='blue1'>#3366cc</span>;
</code>

<p><strong>background-color:</strong> يحدد لون خلفية العنصر.</p>

<code>
    <span className='blue'>background-color</span>: <span className='blue1'>#f0f0f0</span>;
</code>

<h2>التحويم في CSS</h2>

<p><strong>:hover</strong> هو فئة شبه CSS تطبق على عنصر عندما يكون مؤشر الماوس يحوم فوقه.</p>

<p>على سبيل المثال، إذا كنت ترغب في تغيير لون النص عندما يحوم مؤشر الماوس فوقه، يمكنك استخدام :hover في CSS.</p>

<code className='codeMin'>{'<'}<span className='green'>button</span> <span className='blue'>class</span>=<span className='blueviole'>"button"</span>{'>'}Hover{'</'}<span className='green'>button</span>{'>'}</code>

<code>
    <p>{'button:hover {'}</p>

    <p>&nbsp;<span className='blue'>color</span>: <span className='blue1'>{'red'}</span>;</p>

    <p>{'}'}</p>
</code>


<p>في هذا المثال، عندما يحوم المستخدم فوق العنصر، يتم تعيين لون أحمر لفئة الزر.</p>

<h2>عناوين URL:</h2>

<p><strong>background-image:</strong> يحدد صورة كخلفية.</p>

<code>
    <span className='blue'>background-image</span>: <span className='blue1'>{"url('background.jpg')"}</span>;
</code>

<p><strong>@media:</strong> يسمح بتحديد الأنماط لأنواع مختلفة من الأجهزة أو الظروف.</p>

<code>
    <span className='blueviole'>@media</span> <span className='yellow'>screen</span> and <span className='blue1'>(max-width: 600px)</span> {'{'}&nbsp;
    <span className='green'>{'/* أنماط للشاشات التي يبلغ عرضها 600 بكسل أو أقل */'}</span>
    &nbsp;{'}'}
</code>

<h2>التغطية في CSS</h2>

<p><strong>Cover</strong>: هذا هو قيمة خاصية background-size في CSS، التي تقوم بتحجيم الصورة لتغطي الحاوية المحددة تمامًا، مع الحفاظ على نسبة العرض إلى الارتفاع للصورة.</p>

<p>على سبيل المثال، إذا كان لديك حاوية div مع صورة خلفية، وتريد أن تغطي الصورة الحاوية تمامًا دون تشويه، يمكنك استخدام القيمة cover لخاصية background-size.</p>

<code>
    <p>{'.container {'}</p>

    <p>&nbsp;<span className='blue'>width</span>: <span className='blue1'>300px</span>;</p>

    <p>&nbsp;<span className='blue'>height</span>: <span className='blue1'>200px</span>;</p>

    <p>&nbsp;<span className='blue'>background-image</span>: <span className='blue1'>{"url('example.jpg')"}</span>;</p>

    <p>&nbsp;<span className='blue'>background-size</span>: <span className='blue1'>cover</span>;</p>

    <p>{'}'}</p>
</code>

<p>في هذا المثال، إذا تجاوزت أبعاد الحاوية أبعاد الصورة، سيتم تحجيم الصورة لتغطي الحاوية تمامًا. إذا كانت أبعاد الحاوية أصغر من أبعاد الصورة، سيتم قص الصورة لتغطية الحاوية تمامًا دون تشويه.</p>

<h2>الحدود:</h2>

<p><strong>border:</strong> يحدد نمط ولون وعرض حدود العنصر.</p>

<code>
    <span className='blue'>border</span>: <span className='blue1'>1px solid #000</span>;
</code>

<p><strong>border-bottom, border-bottom-color, border-bottom-style, border-bottom-width:</strong> خصائص محددة للحدود السفلية.</p>

<code>
    <span className='blue'>border-bottom</span>: <span className='blue1'>2px dashed #333</span>;
</code>

<h2>نموذج الصندوق:</h2>

<p><strong>margin, padding:</strong> يعرف التباعد الخارجي والداخلي على التوالي.</p>

<code>
    <span className='blue'>margin</span>: <span className='blue1'>10px</span>;
    <span className='blue'>&nbsp;padding</span>: <span className='blue1'>20px</span>;
</code>

<p><strong>width, height:</strong> يحدد عرض وارتفاع العنصر.</p>

<code>
    <span className='blue'>width</span>: <span className='blue1'>300px</span>;
    <span className='blue'>&nbsp;height</span>: <span className='blue1'>150px</span>;
</code>

<h2>التموضع:</h2>

<p><strong>position:</strong> يحدد طريقة تموضع العنصر (على سبيل المثال، نسبي، مطلق، ثابت).</p>

<code>
    <span className='blue'>position</span>: <span className='blue1'>relative</span>;
</code>

<p><strong>left:</strong> يحدد المسافة من الحافة اليسرى.</p>

<code>
    <span className='blue'>left</span>: <span className='blue1'>50px</span>;
</code>

<p><strong>float:</strong> يسمح للعنصر بالتموضع "عائمًا" إلى اليسار أو اليمين.</p>

<code>
    <span className='blue'>float</span>: <span className='blue1'>left</span>;
</code>

<h2>تنسيق النص:</h2>

<p><strong>text-align:</strong> يحدد المحاذاة الأفقية للنص.</p>

<code>
    <span className='blue'>text-align</span>: <span className='blue1'>center</span>;
</code>

<p><strong>text-decoration:</strong> يحدد نمط التسطير، أو الخط العلوي، أو الخط الوسط للنص.</p>

<code>
    <span className='blue'>text-decoration</span>: <span className='blue1'>underline</span>;
</code>

<h2>الرسوم المتحركة والانتقالات:</h2>

<p><strong>@keyframes, animation:</strong> يستخدم لإنشاء الرسوم المتحركة.</p>

<code>
    <p><span className='blueviole'>@keyframes</span><span className='yellow'> slideIn</span> {'{'}</p>

    <p>&nbsp;<span className='blue1'>from</span> {'{'}</p>

    <p>&nbsp;&nbsp;<span className='blue'> transform</span>: <span className='blue1'>translateX(-100%)</span>;</p>

    <p>&nbsp;{'}'}</p>

    <p>&nbsp;<span className='blue1'>to</span> {'{'}</p>

    <p>&nbsp;&nbsp;<span className='blue'> transform</span>: <span className='blue1'>translateX(0)</span>;</p>

    <p>&nbsp;{'}'}</p>

    <p>{'}'}</p>

    <p>{'.animated-element {'}</p>

    <p>&nbsp;<span className='blue'>animation</span>: <span className='blue1'>slideIn 1s ease-in-out</span>;</p>

    <p>{'}'}</p>

    </code>
    
    <p><strong>transition-duration:</strong> يحدد مدة الانتقال للخصائص.</p>

  <code>
    <span className='blue'>transition-duration</span>: <span className='blue1'>0.5s</span>;
  </code>
  
  <h2>متنوع:</h2>
  
  <p><strong>opacity:</strong> يحدد شفافية العنصر.</p>

  <code>
    <span className='blue'>opacity</span>: <span className='blue1'>0.8</span>;
  </code>
  
  <p><strong>overflow:</strong> يحدد ما يحدث إذا تجاوز محتوى العنصر أبعاده.</p>
  
  <code>
    <span className='blue'>overflow</span>: <span className='blue1'>hidden</span>;
  </code>

  <p><strong>transform:</strong> يطبق التحويلات (الترجمة، الدوران، التكبير) على العنصر.</p>

  <code>
    <span className='blue'>transform</span>: <span className='blue1'>rotate(45deg)</span>;
  </code>

  <h2>المهم في CSS</h2>
  
  <p><strong>Important:</strong> هذه كلمة رئيسية في CSS تُستخدم لإعطاء الأولوية لقاعدة تنسيق معينة، مما يضمن تطبيقها حتى إذا كانت هناك قواعد أخرى تحاول تجاوزها.</p>
  
  <p>عندما تضيف الكلمة المفتاحية important إلى قاعدة تنسيق، فإن تلك القاعدة تحصل على أعلى أولوية وستُطبق حتى إذا كانت هناك قواعد أخرى ذات محددات أكثر تحديدًا أو إذا تم تعريفها لاحقًا في الشيفرة.</p>
  
  <p className='green'>/* على سبيل المثال، لنفترض أن لديك القاعدة التالية في CSS */</p>
  
  <code><span className='blue'>color</span>: <span className='blue1'>red</span>;</code>

<p>إذا أردت أن تكون هذه القاعدة ذات أعلى أولوية، يمكنك إضافة الكلمة المفتاحية important:</p>

  <code>
    <p>{'.color-red {'}</p>

    <p>&nbsp;<span className='blue'>color</span>: <span className='blue1'>red</span>&nbsp;<span className='blueviole'>!important</span>;</p>

    <p>{'}'}</p>
  </code>

<p>الآن ستتخذ هذه القاعدة الأولوية على قواعد أخرى محددة للون، حتى إذا كانت أكثر تحديدًا أو تم تعريفها لاحقًا في الشيفرة.</p>

<p>من الضروري استخدام الكلمة المفتاحية important بحذر لأن استخدامها يمكن أن يجعل من هيكل CSS أقل إدارةً ويعقّد تصحيح الأخطاء في التنسيق، خاصة في المشاريع الكبيرة.</p>

<h2>عرض: Flex في CSS</h2>

<p><strong>Display</strong>: flex هو خاصية CSS تُطبّق على حاوية (عنصر الأب) لتعيين نموذج تخطيط مرن لعناصره الابنة (عناصر flex).</p>

<p>عند استخدام display: flex، سيتم ترتيب عناصر الابنة (عناصر flex) في الحاوية أفقيًا أو عموديًا، اعتمادًا على قيمة خاصية flex-direction.</p>

 <code>
    <p>{'<'}<span className='green'>div<span className='blue'><span> style</span></span></span>{'={{'}<span><span><span className='blueviole'>{" display: 'flex', justifyContent: 'center', alignItems: 'center' "}</span></span></span>{'}}>'}</p>    
    
    <p>&nbsp;&nbsp;&nbsp;{'<'}<span className='green'>div</span>{'>'}Item 1{'</'}<span className='green'>div</span>{'>'}</p>

    <p>&nbsp;&nbsp;&nbsp;{'<'}<span className='green'>div</span>{'>'}Item 2{'</'}<span className='green'>div</span>{'>'}</p>

    <p>&nbsp;&nbsp;&nbsp;{'<'}<span className='green'>div</span>{'>'}Item 3{'</'}<span className='green'>div</span>{'>'}</p>

    <p>&nbsp;{'</'}<span className='green'>div</span>{'>'}</p>
  </code>

<p>في هذا المثال، ستُرتب العناصر 1، 2، و 3 أفقيًا في الحاوية لأن display: flex يعيّن نموذج تخطيط مرنًا.</p>

<p>يمكنك أيضًا استخدام خصائص وقيم مختلفة، مثل justify-content و align-items، لتخصيص محاذاة وتوزيع عناصر الابنة في الحاوية باستخدام display: flex.</p>
    
<b><p>* النص المكتوب بمساعدة المترجم. إذا وجدت خطأ، يرجى إعلامنا *</p></b>
    <div className='ads-container'>  
  {/*  реклама  */}
</div>
    </div>
  )
}

export default ArHtml_6;