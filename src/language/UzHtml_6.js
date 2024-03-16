import React from 'react';

function UzHtml_6() {
  return (
    <div>
        <div className='ad-container'>  
          {/*  реклама  */}
        </div>

       <h1>Character Entities:</h1>
   
   <p>CSS uslublarining asosiy xususiyatlarini va ulardan foydalanishni ko'rsatadigan qisqacha ma'lumotnoma.</p>

   <p>Ushbu cheat varaq shriftlar, ranglar, hoshiyalar, quti modeli, joylashishni aniqlash, matn uslubi, animatsiyalar va boshqalarni qamrab oladi.</p>

   <p><b>CSS</b> belgilar ob'ektlarini bevosita belgilash uchun ishlatilmaydi. Odatda, ular HTMLda &amp;, &lt;, &gt; va hokazo kabi maxsus belgilarni ifodalash uchun ishlatiladi.</p>

   <h2>Fonts:</h2>

   <p><strong>font-family:</strong> Matn uchun shriftlar oilasini o'rnatadi.</p>
   <code>
       <span className='blue'>font-family</span>: <span className='blue1'>{'\'Arial\', sans-serif'}</span>;
   </code>

   <p><strong>font-size:</strong> Shrift hajmini aniqlaydi.</p>
   <code>
       <span className='blue'>font-size</span>: <span className='blue1'>16px</span>;
   </code>

   <p><strong>font-style:</strong> Shrift uslubini o'rnatadi (masalan, italic).</p>
   <code>
       <span className='blue'>font-style</span>: <span className='blue1'>italic</span>;
   </code>

   <p><strong>font-weight:</strong> Shrift vaznini belgilaydi (masalan, bold).</p>
   <code>
       <span className='blue'>font-weight</span>: <span className='blue1'>bold</span>;
   </code>

   <h2>Colors:</h2>

   <p><strong>color:</strong> Matn rangini o'rnatadi.</p>
   <code>
       <span className='blue'>color</span>: <span className='blue1'>#3366cc</span>;
   </code>

   <p><strong>background-color:</strong> Elementning fon rangini belgilaydi.</p>
   <code>
       <span className='blue'>background-color</span>: <span className='blue1'>#f0f0f0</span>;
   </code>

   <h2>CSS-da Hover</h2>

   <p><strong>:hover</strong> CSS psevdo-sinfi boʻlib, u sichqoncha kursori uning ustida turganda elementga nisbatan qoʻllaniladi.</p>

   <p>Misol uchun, agar siz sichqoncha kursori ustiga kelganda matn rangini o'zgartirmoqchi bo'lsangiz, CSS-da :hover dan foydalanishingiz mumkin.</p>

   <code className='codeMin'>{'<'}<span className='green'>button</span> <span className='blue'>class</span>=<span className='blueviole'>"button"</span>{'>'}Hover{'</'}<span className='green'>button</span>{'>'}</code>

   <code>
       <p>{'button:hover {'}</p>

       <p>&nbsp;<span className='blue'>color</span>: <span className='blue1'>{'red'}</span>;</p>

       <p>{'}'}</p>
   </code>

   <p>Ushbu misolda foydalanuvchi kursorni element ustiga olib kelganida tugma sinfiga qizil rang beriladi.</p>

   <h2>URLs:</h2>

   <p><strong>background-image:</strong> Rasmni fon sifatida o'rnatadi.</p>
   <code>
       <span className='blue'>background-image</span>: <span className='blue1'>{"url('background.jpg')"}</span>;
   </code>

   <p><strong>@media:</strong> Turli turdagi qurilmalar yoki shartlar uchun uslublarni aniqlash imkonini beradi.</p>

   <code>
       <span className='blueviole'>@media</span> <span className='yellow'>screen</span> and <span className='blue1'>(max-width: 600px)</span> {'{'}&nbsp;
       <span className='green'>{'/* Kengligi 600 piksel yoki undan kam ekranlar uchun uslublar */'}</span>
       &nbsp;{'}'}
   </code>

   <h2>CSS-da Cover</h2>

   <p><strong>Cover</strong>: Bu CSS-dagi background-size xususiyatining qiymati bo'lib, tasvirning tomonlar nisbatini saqlab qolgan holda, belgilangan konteynerni to'liq qoplash uchun tasvirni masshtablaydi.</p>

   <p>Misol uchun, agar sizda fon tasviri bo'lgan div konteyneringiz bo'lsa va siz tasvir konteynerni buzilmasdan to'liq qoplashini istasangiz, background-size xususiyati uchun qopqoq qiymatidan foydalanishingiz mumkin.</p>

   <code>
       <p>{'.container {'}</p>

       <p>&nbsp;<span className='blue'>width</span>: <span className='blue1'>300px</span>;</p>

       <p>&nbsp;<span className='blue'>height</span>: <span className='blue1'>200px</span>;</p>

       <p>&nbsp;<span className='blue'>background-image</span>: <span className='blue1'>{"url('example.jpg')"}</span>;</p>

       <p>&nbsp;<span className='blue'>background-size</span>: <span className='blue1'>cover</span>;</p>

       <p>{'}'}</p>
   </code>

   <p>Ushbu misolda, agar konteyner o'lchamlari tasvir o'lchamidan oshsa, tasvir konteynerni to'liq qoplash uchun o'lchaydi. Agar konteyner o'lchamlari rasm o'lchamidan kichikroq bo'lsa, tasvir konteynerni buzilmasdan to'liq qoplash uchun kesiladi.</p>

   <h2>Borders:</h2>

   <p><strong>border:</strong> Element chegarasining uslubi, rangi va kengligini o'rnatadi.</p>

   <code>
       <span className='blue'>border</span>: <span className='blue1'>1px solid #000</span>;
   </code>

   <p><strong>border-bottom, border-bottom-color, border-bottom-style, border-bottom-width:</strong> Pastki chegara uchun o'ziga xos xususiyatlar.</p>
   <code>
       <span className='blue'>border-bottom</span>: <span className='blue1'>2px dashed #333</span>;
   </code>

   <h2>Box Model:</h2>

   <p><strong>margin, padding:</strong> Tashqi va ichki oraliqlarni mos ravishda aniqlang.</p>
   <code>
       <span className='blue'>margin</span>: <span className='blue1'>10px</span>;
       <span className='blue'>&nbsp;padding</span>: <span className='blue1'>20px</span>;
   </code>

   <p><strong>width, height:</strong> Elementning kengligi va balandligini o'rnating.</p>
   <code>
       <span className='blue'>width</span>: <span className='blue1'>300px</span>;
       <span className='blue'>&nbsp;height</span>: <span className='blue1'>150px</span>;
   </code>

   <h2>Positioning:</h2>

   <p><strong>position:</strong> Elementni joylashtirish usulini aniqlaydi (masalan, relative, absolute, fixed).</p>
   
   <code>
       <span className='blue'>position</span>: <span className='blue1'>relative</span>;
   </code>

   <p><strong>left:</strong> Chap chetidan masofani o'rnatadi.</p>
   <code>
       <span className='blue'>left</span>: <span className='blue1'>50px</span>;
   </code>

   <p><strong>float:</strong> Elementga chapga yoki o'ngga "suzish" imkonini beradi.</p>
   <code>
       <span className='blue'>float</span>: <span className='blue1'>left</span>;
   </code>

   <h2>Matn uslubi:</h2>

   <p><strong>text-align:</strong> Matnning gorizontal tekislanishini o'rnatadi.</p>
   <code>
       <span className='blue'>text-align</span>: <span className='blue1'>center</span>;
   </code>

   <p><strong>text-decoration:</strong> Matnning tagiga chizish, ustiga chizish yoki chiziq chizig'ini belgilash uslubini belgilaydi.</p>
   <code>
       <span className='blue'>text-decoration</span>: <span className='blue1'>underline</span>;
   </code>

   <h2>Animation and Transitions:</h2>

   <p><strong>@keyframes, animation:</strong> Animatsiyalar yaratish uchun foydalaniladi.</p>

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

   <p><strong>transition-duration:</strong> Xususiyatlar uchun o'tish muddatini belgilaydi.</p>

   <code>
       <span className='blue'>transition-duration</span>: <span className='blue1'>0.5s</span>;
   </code>

   <h2>Turli xil:</h2>

   <p><strong>opacity:</strong> Elementning shaffofligini o'rnatadi.</p>

   <code>
       <span className='blue'>opacity</span>: <span className='blue1'>0.8</span>;
   </code>

   <p><strong>overflow:</strong> Elementning mazmuni uning o'lchamlarini oshirib yuborsa nima bo'lishini aniqlaydi.</p>

   <code>
       <span className='blue'>overflow</span>: <span className='blue1'>hidden</span>;
   </code>

   <p><strong>transform:</strong> Elementga o'zgartirishlarni (tarjima, aylantirish, masshtablash) qo'llaydi.</p>

   <code>
       <span className='blue'>transform</span>: <span className='blue1'>rotate(45deg)</span>;
   </code>

   <h2>CSS-da Important</h2>

   <p><strong>Important</strong>: Bu CSS-dagi kalit so'z bo'lib, ma'lum bir uslub qoidasiga ustunlik berish uchun ishlatiladi va uni bekor qilishga urinayotgan boshqa qoidalar bo'lsa ham qo'llanilishini ta'minlaydi.</p>

   <p>Uslub qoidasiga important kalit so‘zini qo‘shsangiz, bu qoida eng yuqori ustuvorlikka ega bo‘ladi va hatto aniqroq selektorli boshqa qoidalar mavjud bo‘lsa yoki ular kodda keyinroq belgilangan bo‘lsa ham qo‘llaniladi.</p>

   <p className='green'>/* Masalan, sizda quyidagi CSS qoidasi bor deylik */</p>

   <code><span className='blue'>color</span>:&nbsp;<span className='blue1'>red</span>;</code>

   <p>Agar siz ushbu qoida eng yuqori ustuvorlikka ega bo'lishini istasangiz, important kalit so'zini qo'shishingiz mumkin:</p>

   <code>
       <p>{'.color-red {'}</p>

       <p>&nbsp;<span className='blue'>color</span>: <span className='blue1'>red</span>&nbsp;<span className='blueviole'>!important</span>;</p>

       <p>{'}'}</p>
   </code>

   <p>Endi bu qoida matn rangi uchun belgilangan boshqa qoidalardan ustun bo'ladi, hatto ular aniqroq bo'lsa yoki kodda keyinroq aniqlangan bo'lsa ham.</p>

   <p>important kalit so'zni tejamkorlik bilan ishlatish juda muhim, chunki undan foydalanish CSS tuzilmasini kamroq boshqarishi va uslublarni tuzatishni murakkablashtirishi mumkin, ayniqsa yirik loyihalarda.</p>

   <h2>Displey: CSS-da Flex</h2>

   <p><strong>Display</strong>: flex - bu konteynerga (ota-ona element) qo'llaniladigan CSS xususiyati bo'lib, uning pastki elementlari (moslashuvchan elementlar) uchun moslashuvchan tartib modelini o'rnatish.</p>

   <p>Displey: flex dan foydalanilganda, konteynerdagi asosiy elementlar (egiluvchan elementlar) flex-direction xususiyati qiymatiga qarab qator yoki ustunga joylashtiriladi.</p>

   <code>
       <p>{'<'}<span className='green'>div<span className='blue'><span> style</span></span></span>{'={{'}<span><span><span className='blueviole'>{" display: 'flex', justifyContent: 'center', alignItems: 'center' "}</span></span></span>{'}}>'}</p>

       <p>&nbsp;&nbsp;&nbsp;{'<'}<span className='green'>div</span>{'>'}1-modda{'</'}<span className='green'>div</span>{'>'}</p>

       <p>&nbsp;&nbsp;&nbsp;{'<'}<span className='green'>div</span>{'>'}2-modda{'</'}<span className='green'>div</span>{'>'}</p>

       <p>&nbsp;&nbsp;&nbsp;{'<'}<span className='green'>div</span>{'>'}3-modda{'</'}<span className='green'>div</span>{'>'}</p>

       <p>&nbsp;{'</'}<span className='green'>div</span>{'>'}</p>
   </code>

   <p>Ushbu misolda 1, 2 va 3-bandlar konteynerda gorizontal ravishda joylashtiriladi, chunki displey: flex moslashuvchan tartib modelini o'rnatadi.</p>

   <p>Shuningdek, displey: flex-dan foydalanib konteynerdagi ichki elementlarning hizalanishi va taqsimlanishini sozlash uchun justify-content va align-elementlar kabi turli xususiyat va qiymatlardan foydalanishingiz mumkin.</p>

  <b><p>* Matn tarjimon yordamida yozilgan. Agar xato topsangiz, bizga xabar bering *</p></b>
    <div className='ads-container'>  
  {/*  реклама  */}
 </div>
</div>
  )
}

export default UzHtml_6;