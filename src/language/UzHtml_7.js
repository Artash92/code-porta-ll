import React from 'react';

function UzHtml_7() {
  return (
    <div>
      <div className='ad-container'>  
          {/*  реклама  */}
        </div>
        
        <h2>HTML va XML o'rtasidagi farq nima?</h2>

   <p>
     HTML (HyperText Markup Language) aniqlovchi tuzilgan veb-sahifalarni yaratish uchun ishlatiladi
     veb-brauzerda ko'rsatiladigan sahifa tarkibi. XML (eXtensible Markup Language) universaldir
     strukturada cheklovlarsiz ma'lumotlarni saqlash va uzatish uchun belgilash tili. HTML va XML o'rtasidagi asosiy farq
     HTML kontentni ko'rsatish uchun, XML esa saqlash va uzatish uchundir
     ma'lum bir tuzilmaga havolasiz ma'lumotlar.
   </p>
   
   <h2>HTML va XML o'rtasida qanday o'xshashliklar bor?</h2>

   <p>
     HTML ham, XML ham ma'lumotlar tuzilishini aniqlash uchun teglardan foydalanadigan belgilash tillaridir.
     Ikkalasi ham tahlilchilar tomonidan qayta ishlanishi va ma'lumotni ko'rsatish uchun talqin qilinishi mumkin, ammo ulardan foydalanish
     va maqsadi farqlanadi.
   </p> 

   <h2>Sintaksis</h2>

   <p>
     HTML va XML sintaksisi shunga o'xshashki, ular ikkalasi ham hujjat tuzilishini aniqlash uchun teglardan foydalanadi.
     HTMLda ko'pgina elementlarda oldindan belgilangan teglar mavjud, XML esa o'z teglaringizni belgilash imkonini beradi.
     HTML teglari katta, kichik yoki ikkalasining kombinatsiyasi yordamida yozilishi mumkin, XML teglari esa katta-kichik harflarga sezgir.
   </p>

   <h2>Foydalanish</h2>

   <p>
     HTML veb-sahifalarni yaratish uchun ishlatiladi, XML esa ma'lumotlarni saqlash va uzatish uchun keng qo'llaniladi.
     konfiguratsiya fayllari, mahsulot ma'lumotlari va boshqalar kabi.
  </p>

  <h2>HTML va XML o'rtasidagi asosiy sintaktik farqlar</h2>

  <p>
     Asosiy sintaktik farqlar shundaki, HTML juda ko'p oldindan belgilangan teglar va tuzilishga ega,
     XML esa o'z teg va tuzilmalaringizni belgilash imkonini beradi. Bundan tashqari, HTML ko'pincha atributlarni o'z ichiga oladi
     Bu havolalar uchun {'<a>'} dagi href kabi teglarni to'ldiradi, XML esa atributsiz teglardan foydalanadi.
     ma'lumotlar strukturasini aniqlash.
  </p>

  <h2>Oldindan belgilangan teglar</h2>

   <p>
     HTMLda veb-sahifaning turli qismlarini belgilaydigan {'<h1>, <p>, <a>, <div>,'} kabi ko'plab oldindan belgilangan teglar mavjud.
     XMLda oldindan belgilangan teglar yo'q va kerakli ma'lumotlar strukturasiga muvofiq maxsus teglar yaratishga bog'liq.
  </p>


  <h2>HTML va XML misollari</h2>

<code>
<pre>
    {`
    <!-- Misol HTML -->
    <!DOCTYPE html>
    <html>
    <head>
        <title>Misol HTML</title>
    </head>
    <body>
        <h1>Sarlavha</h1>
        <p><a href="https://example.com">havola</a> bilan paragraf.</p>
    </body>
    </html>
   
   
    <?xml version="1.0" encoding="UTF-8"?>
<note>
    <to>Qabul qiluvchi</to>
    <from>Yuboruvchi</from>
    <heading>Sarlavha</heading>
    <body>Eslatma matni.</body>
</note>
`}
</pre>
</code>

{/* Самозакрывающиеся теги */}

<h2>O'z-o'zidan yopiladigan teglar</h2>

  <p>
     HTML ba'zida {'<img> yoki <br>'} kabi o'z-o'zidan yopiladigan teglardan foydalanadi, XMLda esa har bir teg
     aniq yopiq yoki o'z-o'zidan yopilishi kerak.
  </p>

{/* Другие ключевые отличия HTML и XML */}

<h2>HTML va XML o'rtasidagi boshqa asosiy farqlar</h2>

   <p>
     HTML veb-sahifa mazmunini ifodalash uchun mo'ljallangan, XML esa ma'lumotlarni saqlash va uzatish uchun ishlatiladi.
     HTMLda ko'plab oldindan belgilangan elementlar va atributlar mavjud, XML esa moslashtirilganlarning aniq ta'rifini talab qiladi
     elementlar va atributlar.
   </p>
{/* Когда использовать HTML и XML */}

<h2>HTML va XML-dan qachon foydalanish kerak</h2>

  <p>
     Brauzerda ko'rsatilishi kerak bo'lgan tarkibga ega veb-sahifalarni yaratish uchun HTML-dan foydalaning.
     Veb-sahifada paydo bo'lishi shart bo'lmagan ma'lumotlarni tuzish va saqlash uchun XML dan foydalaning.
  </p>
{/* Как использовать HTML и XML вместе */}

<h2>HTML va XML-dan qanday foydalanish kerak</h2>

   <p>
     HTML va XML birgalikda ishlatilishi mumkin, masalan, ko'rsatish uchun XML fayllaridan ma'lumotlarni yuklaydigan veb-sahifalarni yaratish uchun.
     Buning uchun ko'pincha AJAX yoki server tomonidagi dasturlash tillari kabi texnologiyalar qo'llaniladi.
  </p>
{/* Краткое изложение основных различий между HTML и XML */}

<h2>HTML va XML o'rtasidagi asosiy farqlarning qisqacha mazmuni</h2>

   <p>
     HTML veb-sahifalarni yaratish uchun mo'ljallangan va oldindan belgilangan teglarga ega, XML esa uchun ishlatiladi
     tuzilgan ma'lumotlarni saqlash va uzatish va maxsus teglar va atributlarni aniqlash imkonini beradi.
   </p>
{/* Как начать работать с XML */}

 <h2>XML bilan qanday ishlashni boshlash kerak</h2>

  <p>
     XML bilan ishlash uchun sizga matn muharriri va asosiy sintaksisni bilish kerak bo'ladi.
     Siz XML hujjatlarining tuzilishi, ularning asosiy elementlari va atributlari bilan tanishishingiz mumkin,
     va dasturlash tilingizdagi kutubxonalar yoki vositalar yordamida XML ma'lumotlarini qayta ishlash usullari.
  </p>

{/* Как начать работать с HTML */}

<h2>HTML bilan qanday ishlashni boshlash kerak</h2>

  <p>
     HTML bilan ishlashni boshlash uchun sizga matn muharriri va belgilash bo'yicha ba'zi asosiy bilimlar ham kerak bo'ladi.
     Siz asosiy HTML teglari, ularning atributlari va veb-sahifa tuzilishini o'rganishingiz mumkin,
     va CSS va JavaScript yordamida uslublar va interaktivlik texnikasi.
  </p>

  <b><p>* Matn tarjimon yordamida yozilgan. Agar xato topsangiz, bizga xabar bering *</p></b>
    <div className='ads-container'>  
  {/*  реклама  */}
 </div>
    </div>
  )
}

export default UzHtml_7;