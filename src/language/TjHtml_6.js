import React from 'react';

function TjHtml_6() {
  return (
    <div>
        <div className='ad-container'>  
          {/*  реклама  */}
        </div>

       <h1>Character Entities(Объектҳои аломат):</h1>
   
   <p>Дастури мухтасари истинод, ки хосиятҳои асосии сабкҳои CSS ва истифодаи онҳоро нишон медиҳад.</p>

   <p>Ин варақаи фиреб ҳуруфҳо, рангҳо, сарҳадҳо, модели қуттӣ, ҷойгиркунӣ, ороиши матн, аниматсияҳо ва ғайраро дар бар мегирад.</p>

   <p><b>CSS</b> барои бевосита муайян кардани объектҳои характер истифода намешавад. Одатан, онҳо дар HTML барои ифода кардани аломатҳои махсус, ба монанди &amp;, &lt;, &gt; ва ғайра истифода мешаванд.</p>

   <h2>Fonts:</h2>

   <p><strong>font-family:</strong> Оилаи шрифтро барои матн муқаррар мекунад.</p>
   <code>
       <span className='blue'>font-family</span>: <span className='blue1'>{'\'Arial\', sans-serif'}</span>;
   </code>

   <p><strong>font-size:</strong> Андозаи шрифтро муайян мекунад.</p>
   <code>
       <span className='blue'>font-size</span>: <span className='blue1'>16px</span>;
   </code>

   <p><strong>font-style:</strong> Услуби шрифтро муқаррар мекунад (масалан, italic).</p>
   <code>
       <span className='blue'>font-style</span>: <span className='blue1'>italic</span>;
   </code>

   <p><strong>font-weight:</strong> Вазни шрифтро муайян мекунад (масалан, bold).</p>
   <code>
       <span className='blue'>font-weight</span>: <span className='blue1'>bold</span>;
   </code>

   <h2>Colors:</h2>

   <p><strong>color:</strong> Ранги матнро муқаррар мекунад.</p>
   <code>
       <span className='blue'>color</span>: <span className='blue1'>#3366cc</span>;
   </code>

   <p><strong>background-color:</strong> Ранги заминавии элементро муайян мекунад.</p>
   <code>
       <span className='blue'>background-color</span>: <span className='blue1'>#f0f0f0</span>;
   </code>

   <h2>Hover дар CSS</h2>

   <p><strong>:hover</strong> Синфи псевдо-синфи CSS аст, ки ҳангоми дар болои он ҳаракат кардани курсори муш ба элемент татбиқ мешавад.</p>

   <p>Масалан, агар шумо хоҳед, ки ранги матнро ҳангоми дар болои он ҷойгир кардани курсори муш тағир диҳед, шумо метавонед :hover -ро дар CSS истифода баред.</p>

   <code className='codeMin'>{'<'}<span className='green'>button</span> <span className='blue'>class</span>=<span className='blueviole'>"button"</span>{'>'}Hover{'</'}<span className='green'>button</span>{'>'}</code>

   <code>
       <p>{'button:hover {'}</p>

       <p>&nbsp;<span className='blue'>color</span>: <span className='blue1'>{'red'}</span>;</p>

       <p>{'}'}</p>
   </code>

   <p>Дар ин мисол, вақте ки корбар болои элемент мегузарад, ба синфи тугма ранги сурх дода мешавад.</p>

   <h2>URLs:</h2>

   <p><strong>background-image:</strong> Тасвирро ҳамчун замина муқаррар мекунад.</p>
   <code>
       <span className='blue'>background-image</span>: <span className='blue1'>{"url('background.jpg')"}</span>;
   </code>

   <p><strong>@media:</strong> Имкон медиҳад, ки услубҳо барои намудҳои гуногуни дастгоҳҳо ё шароитҳо муайян карда шаванд.</p>

   <code>
       <span className='blueviole'>@media</span> <span className='yellow'>screen</span> and <span className='blue1'>(max-width: 600px)</span> {'{'}&nbsp;
       <span className='green'>{'/* Услубҳо барои экранҳои 600 пиксел ё камтар */'}</span>
       &nbsp;{'}'}
   </code>

   <h2>Cover дар CSS</h2>

   <p><strong>Cover</strong>: Ин арзиши моликияти background-size дар CSS мебошад, ки тасвирро барои пурра пӯшонидани контейнери муайяншуда бо нигоҳ доштани таносуби ҷанбаҳои тасвир миқёс мекунад.</p>

   <p>Масалан, агар шумо контейнери div бо тасвири замина дошта бошед ва шумо мехоҳед, ки тасвир контейнерро бидуни таҳриф пурра пӯшонад, шумо метавонед арзиши муқоваро барои моликияти background-size истифода баред.</p>

   <code>
       <p>{'.container {'}</p>

       <p>&nbsp;<span className='blue'>width</span>: <span className='blue1'>300px</span>;</p>

       <p>&nbsp;<span className='blue'>height</span>: <span className='blue1'>200px</span>;</p>

       <p>&nbsp;<span className='blue'>background-image</span>: <span className='blue1'>{"url('example.jpg')"}</span>;</p>

       <p>&nbsp;<span className='blue'>background-size</span>: <span className='blue1'>cover</span>;</p>

       <p>{'}'}</p>
   </code>

   <p>Дар ин мисол, агар андозаи контейнер аз андозаҳои тасвир зиёд бошад, тасвир барои пурра пӯшонидани контейнер миқёс карда мешавад. Агар андозаҳои контейнер аз андозаҳои тасвир хурдтар бошанд, тасвир бурида мешавад, то контейнерро комилан бидуни таҳриф пӯшонад.</p>

   <h2>Borders:</h2>

   <p><strong>border:</strong> Услуб, ранг ва паҳнои сарҳади элементро муқаррар мекунад.</p>

   <code>
       <span className='blue'>border</span>: <span className='blue1'>1px solid #000</span>;
   </code>

   <p><strong>border-bottom, border-bottom-color, border-bottom-style, border-bottom-width:</strong> Хусусиятҳои мушаххас барои сарҳади поён.</p>
   <code>
       <span className='blue'>border-bottom</span>: <span className='blue1'>2px dashed #333</span>;
   </code>

   <h2>Box Model:</h2>

   <p><strong>margin, padding:</strong> Фосилаи берунӣ ва дохилиро мувофиқан муайян кунед.</p>
   <code>
       <span className='blue'>margin</span>: <span className='blue1'>10px</span>;
       <span className='blue'>&nbsp;padding</span>: <span className='blue1'>20px</span>;
   </code>

   <p><strong>width, height:</strong> Барон ва баландии элементро таъин кунед.</p>
   <code>
       <span className='blue'>width</span>: <span className='blue1'>300px</span>;
       <span className='blue'>&nbsp;height</span>: <span className='blue1'>150px</span>;
   </code>

   <h2>Positioning:</h2>

   <p><strong>position:</strong> Усули ҷойгиркунии элементро муайян мекунад (масалан, relative, absolute, fixed).</p>
   <code>
       <span className='blue'>position</span>: <span className='blue1'>relative</span>;
   </code>

   <p><strong>left:</strong> Масофаро аз канори чап муқаррар мекунад.</p>
   <code>
       <span className='blue'>left</span>: <span className='blue1'>50px</span>;
   </code>

   <p><strong>float:</strong> Ба элемент имкон медиҳад, ки ба чап ё рост " шино" кунад.</p>
   <code>
       <span className='blue'>float</span>: <span className='blue1'>left</span>;
   </code>

   <h2>Text Styling:</h2>

   <p><strong>text-align:</strong> Ҳамоҳангсозии уфуқии матнро муқаррар мекунад.</p>
   <code>
       <span className='blue'>text-align</span>: <span className='blue1'>center</span>;
   </code>

   <p><strong>text-decoration:</strong> Услуби зерхат, болои хат ё хатти матнро муайян мекунад.</p>
   <code>
       <span className='blue'>text-decoration</span>: <span className='blue1'>underline</span>;
   </code>

   <h2>Animation and Transitions:</h2>

   <p><strong>@keyframes, animation:</strong> Барои сохтани аниматсияҳо истифода мешавад.</p>

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

   <p><strong>transition-duration:</strong> Давомнокии гузаришро барои хосиятҳо муқаррар мекунад.</p>

   <code>
       <span className='blue'>transition-duration</span>: <span className='blue1'>0.5s</span>;
   </code>

   <h2>Miscellaneous:</h2>

   <p><strong>opacity:</strong> Шаффофияти элементро муқаррар мекунад.</p>

   <code>
       <span className='blue'>opacity</span>: <span className='blue1'>0.8</span>;
   </code>

   <p><strong>overflow:</strong> Муайян мекунад, ки агар мундариҷаи унсур аз андозаҳои он зиёд шавад, чӣ мешавад.</p>

   <code>
       <span className='blue'>overflow</span>: <span className='blue1'>hidden</span>;
   </code>

   <p><strong>transform:</strong> Тағиротҳоро (тарҷума, гардиш, миқёс) ба элемент татбиқ мекунад.</p>

   <code>
       <span className='blue'>transform</span>: <span className='blue1'>rotate(45deg)</span>;
   </code>

   <h2>Important дар CSS</h2>

   <p><strong>Important</strong>: Ин калимаи калидӣ дар CSS аст, ки барои афзалият додан ба як қоидаи услуби мушаххас истифода мешавад ва кафолат медиҳад, ки он ҳатто дар сурати мавҷуд будани қоидаҳои дигаре, ки кӯшиши бекор кардани онро доранд, татбиқ карда мешавад.</p>

   <p>Вақте ки шумо калимаи муҳимро ба қоидаи услуб илова мекунед, он қоида афзалияти баландтаринро мегирад ва ҳатто агар қоидаҳои дигаре бо интихоби мушаххаси мушаххас вуҷуд дошта бошанд ё онҳо дертар дар код муайян карда шаванд, татбиқ карда мешавад.</p>

   <p className='green'>/* Масалан, фарз кунед, ки шумо қоидаҳои зерини CSS доред */</p>

   <code><span className='blue'>color</span>:&nbsp;<span className='blue1'>red</span>;</code>

   <p>Агар шумо хоҳед, ки ин қоида афзалияти баланд дошта бошад, шумо метавонед калимаи important илова кунед:</p>

   <code>
       <p>{'.color-red {'}</p>

       <p>&nbsp;<span className='blue'>color</span>: <span className='blue1'>red</span>&nbsp;<span className='blueviole'>!important</span>;</p>

       <p>{'}'}</p>
   </code>

   <p>Акнун ин қоида бар қоидаҳои дигаре, ки барои ранги матн муайян шудаанд, бартарӣ хоҳад дошт, ҳатто агар онҳо мушаххастар бошанд ё дертар дар код муайян карда шаванд.</p>

   <p>Муҳим аст, ки калимаи калидии important -ро сарфакорона истифода баред, зеро истифодаи он метавонад сохтори CSS-ро камтар идорашаванда гардонад ва ислоҳи услубро, бахусус дар лоиҳаҳои калон, мушкил гардонад.</p>

   <h2>Display: Flex дар CSS</h2>

   <p><strong>Display</strong>: flex хосияти CSS аст, ки ба контейнер (унсури волидайн) барои гузоштани модели тарҳбандии чандир барои унсурҳои кӯдаки он (flex items) истифода мешавад.</p>

   <p>Ҳангоми истифодабарии Display: flex, унсурҳои кӯдак (flex items) дар контейнер вобаста ба арзиши хосияти flex-direction дар як сатр ё сутун ҷойгир карда мешаванд.</p>

   <code>
       <p>{'<'}<span className='green'>div<span className='blue'><span> style</span></span></span>{'={{'}<span><span><span className='blueviole'>{" display: 'flex', justifyContent: 'center', alignItems: 'center' "}</span></span></span>{'}}>'}</p>

       <p>&nbsp;&nbsp;&nbsp;{'<'}<span className='green'>div</span>{'>'}Банди 1{'</'}<span className='green'>div</span>{'>'}</p>

       <p>&nbsp;&nbsp;&nbsp;{'<'}<span className='green'>div</span>{'>'}Банди 2{'</'}<span className='green'>div</span>{'>'}</p>

       <p>&nbsp;&nbsp;&nbsp;{'<'}<span className='green'>div</span>{'>'}Банди 3{'</'}<span className='green'>div</span>{'>'}</p>

       <p>&nbsp;{'</'}<span className='green'>div</span>{'>'}</p>
   </code>

   <p>Дар ин мисол, ҷузъҳои 1, 2 ва 3 дар контейнер ба таври уфуқӣ ҷойгир карда мешаванд, зеро display: flex модели тарҳбандии чандирро муқаррар мекунад.</p>

   <p>Шумо инчунин метавонед хосиятҳо ва арзишҳои гуногунро истифода баред, ба монанди justify-content ва align-items, барои мутобиқсозӣ ва тақсимоти унсурҳои кӯдак дар контейнер бо истифода аз display: flex.</p>
    
   <b><p>* Матн бо ёрии тарчумон навишта шудааст. Агар шумо хатое пайдо кунед, лутфан ба мо хабар диҳед *</p></b>
    
    <div className='ads-container'>  
  {/*  реклама  */}
</div> 
  </div>
  )
}

export default TjHtml_6;