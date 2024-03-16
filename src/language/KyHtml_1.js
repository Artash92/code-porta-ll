import React from 'react';

function KyHtml_1() {
  return (
    <div>
        <div className='ad-container'>  
          {/*  реклама  */}
        </div> 

        <h1>HTML</h1>

<p>HTML, кийинча HyperText Markup Language деп аталат, вебдеги мазмунду жасоо жана структуралоо үчүн колдонулаткан белгилөөлөр тили болуп саналат. Бул бардык сайттердин асы болуп, веб баракчалардын жайлары болуп табылады. HTML декларативтик тил болуп саналат, бул сайттин мазмунун жана строектурасын аныктаган жок, чыгуусун аныктамайды.</p>

<p>HTML Тим Бернерс-Лии 1990 жылдардын алдында CERN, Европалык Ядро Түшкүндөрүш Организациясында иштеген учурда түзүлгөн. Бернерс-Лии зооп жана оюу көзөмөндөргөн адамдар арасында маалыматты бөлүп аракет кылуу үчүн HTMLди пайдаланган. HTML сынган ада тема, техникалык өнүмдөрүне башка ким кийин чакырылышы мүмкүн болгон окуучулардан көркүлөт.</p>

<p>HTML колдонуучулар тизмесиндеги элементтер тармагынан турган. Тармактар бардык тарабынан ачылып, веб баракчанын строектурасын жана мазмунун түрүн аныктаган. Мисалы, {'<head>'} тармагы веб баракчасынын баш секциясын аныктаган, ушул бөлүмде сайтын аталышы жана сылталык стилдер мен скрипттерге ссылкалар бар. {'<body>'} тармагы веб баракчасынын беден секциясын аныктаган, ушул бөлүмде баракчанын негизги мазмуну бар.</p>

<p>HTML бириккич түрдө кайгылып, жаңы нускаларды убактысыз шаакылдаган тил болуп саналат. Азырки HTML нускасы HTML5, 2014-жылы чыгарылган. HTML5 көп жаңы мүмкүндүктөр мен мүмкүндүктөрдү киргиздет, мисалы, видео жана аудио тагдары, графика кошуу үчүн канвас элементтери, жана кандайттан чоң эле карап башкаларга жарнамалар мен SEO үчүн тамгалар.</p>

<p>Жалпы менен, HTML вебдеги мазмунду жасоо жана строектурадагы колдонулаткан белгилөөлөр тили болуп саналат. Аны 1990 жылдардын алдында Тим Бернерс-Лии тарабынан түзүлгөн жана бардык сайттердин асы болуп эсептелген. HTML аныктамага таарынган жана аны техникалык өнүмдөрү ким болсо да, бардык ким менен аныктуу үчүн оңой тил болуп саналат.</p>

<p>1. Аталыш жана параграфды камтык веб баракчасы:</p>

<code>
   <p>{'<'}!<span className='blue'>DOCTYPE</span> <span className='blue1'>html</span>{'>'}</p>

   <p>{'<'}<span className='green'>html</span>{'>'}</p> 
  
   <p>{'<'}<span className='green'>head</span>{'>'}</p>

   <p>&nbsp;{'<'}<span className='green'>title</span>{'>'}Менин Веб Баракчам{'</'}<span className='green'>title</span>{'>'}</p>

   <p>{'</'}<span className='green'>head</span>{'>'}</p>

   <p>{'<'}<span className='green'>body</span>{'>'}</p>

   <p>&nbsp;{'<'}<span className='green'>h1</span>{'>'}Менин Веб Баракчамга Карап Келгенче{'</'}<span className='green'>h1</span>{'>'}</p>

   <p>&nbsp;{'<'}<span className='green'>p</span>{'>'}Бул менин биринчи веб баракчам.{'</'}<span className='green'>p</span>{'>'}</p>

   <p>{'</'}<span className='green'>body</span>{'>'}</p>

   <p>{'</'}<span className='green'>html</span>{'>'}</p>
</code>

<p>Бул мисал жакшы веб баракчасынын аталышы жана параграфы бар. Аталыш белгиси "title" тагы менен, параграф "p" тагы менен билдирүлгөн. Баракчанын аталышы браузердин аталышы көрсөтүлүп, издөө эсептеринде көрсөтүлүп турат.</p>

<p>2. Альтернативтик текст менен катал жана башка баракчага багытталуу байланыш:</p>

<code>
    <p>{'<'}!<span className='blue'>DOCTYPE</span> <span className='blue1'>html</span>{'>'}</p>
       
    <p>{'<'}<span className='green'>html</span>{'>'}</p> 
       
    <p>{'<'}<span className='green'>head</span>{'>'}</p>  
       
    <p>&nbsp;{'<'}<span className='green'>title</span>{'>'}Менин Веб Баракчам{'</'}<span className='green'>title</span>{'>'}</p> 
       
    <p>{'</'}<span className='green'>head</span>{'>'}</p> 
       
    <p>{'<'}<span className='green'>body</span>{'>'}</p> 
       
    <p>&nbsp;{'<'}<span className='green'>h1</span>{'>'}Менин Веб Баракчамга Карап Келгенче{'</'}<span className='green'>h1</span>{'>'}</p>
       
    <p>&nbsp;{'<'}<span className='green'>p</span>{'>'}Бул махсус кат.{'</'}<span className='green'>p</span>{'>'}</p>
       
    <p>&nbsp;{'<'}<span className='green'>img</span> <span className='blue'>src</span>=<span className='blue1'>"cat.jpg"</span> <span className='blue'>alt</span>=<span className='blue1'>"Күчтү кат"</span>{'>'}</p> 

    <p>&nbsp;{'<'}<span className='green'>p</span>{'>'}Googleго бул жерде {'<'}<span className='green'>a</span> <span className='blue'>href</span>=<span className='blue1'>"http://www.google.com"</span>{'>'}жөнөтүү{'</'}<span className='green'>a</span>{'>'} Googleго өтүү үчүн бас.{'</'}<span className='green'>p</span>{'>'}</p> 

    <p>{'</'}<span className='green'>body</span>{'>'}</p> 

    <p>{'</'}<span className='green'>html</span>{'>'}</p>
</code>

<p>Бул мисалда каттын сүрөтү, "img" тагы менен билдирүлгөн, сүрөттүн жүктөлбөгөнүн жагдайында көрсөтүлгөн альтернативтик текст көрсөтүлөт. Googleго багытталуу байланыш "a" тагы менен көрсөтүлгөн жана "href" атрибуту бар башка баракчага.</p>

<p>3. Атын киргизүү жана серверге маалымат жөнөтүү формасы:</p>

<code>
    <p>{'<'}!<span className='blue'>DOCTYPE</span> <span className='blue1'>html</span>{'>'}</p>
    
    <p>{'<'}<span className='green'>html</span>{'>'}</p>    

    <p>{'<'}<span className='green'>head</span>{'>'}</p>  

    <p>&nbsp;{'<'}<span className='green'>title</span>{'>'}Менин Веб Баракчам{'</'}<span className='green'>title</span>{'>'}</p>   

    <p>{'</'}<span className='green'>head</span>{'>'}</p>  

    <p>{'<'}<span className='green'>body</span>{'>'}</p> 

    <p>&nbsp;{'<'}<span className='green'>h1</span>{'>'}Менин Веб Баракчамга Карап Келгенче{'</'}<span className='green'>h1</span>{'>'}</p> 

    <p>{'<'}<span className='green'>form</span>{'>'}</p> 

    <p>&nbsp;{'<'}<span className='green'>label</span> <span className='blue'>for</span>=<span className='blue1'>"name"</span>{'>'}Атыңызды киргизиңиз:{'</'}<span className='green'>label</span>{'>'}</p>  

    <p>&nbsp;{'<'}<span className='green'>input</span> <span className='blue'>type</span>=<span className='blue1'>"text"</span> <span className='blue'>id</span>=<span className='blue1'>"name"</span> <span className='blue'>name</span>=<span className='blue1'>"name"</span>{'><'}<span className='green'>br</span>{'><'}<span className='green'>br</span>{'>'}</p>  

    <p>&nbsp;{'<'}<span className='green'>input</span> <span className='blue'>type</span>=<span className='blue1'>"submit"</span> <span className='blue'>value</span>=<span className='blue1'>"Submit"</span>{'>'}</p>  

    <p>{'</'}<span className='green'>form</span>{'>'}</p>  

    <p>{'</'}<span className='green'>body</span>{'>'}</p>   

    <p>{'</'}<span className='green'>html</span>{'>'}</p>   
</code>

<p>Бул мисалда пайдалануучунун атын киргизүү үчүн тексттин киргизүү үчүн текст киргизүү оңой формасы бар. Форма жөнөтүлгөндө, маалымат серверге жөнөтүлөт. "label" тагы киргизүү өлчөмү үчүн текст маркерин берет, жана "input" тагы киргизүү өлчөмү мен жөнөтүү түймөлүгүн жасоо үчүн колдонулат.
</p>

<p>4. Электрондук тизменин тартибиги:</p>

<code>
    <p>{'<'}!<span className='blue'>DOCTYPE</span> <span className='blue1'>html</span>{'>'}</p>

    <p>{'<'}<span className='green'>html</span>{'>'}</p> 

    <p>{'<'}<span className='green'>head</span>{'>'}</p>

    <p>&nbsp;{'<'}<span className='green'>title</span>{'>'}Менин Веб Баракчам{'</'}<span className='green'>title</span>{'>'}</p>

    <p>{'</'}<span className='green'>head</span>{'>'}</p> 

    <p>{'<'}<span className='green'>body</span>{'>'}</p> 

    <p>&nbsp;{'<'}<span className='green'>h1</span>{'>'}Менин Веб Баракчамга Карап Келгенче{'</'}<span className='green'>h1</span>{'>'}</p> 

    <p>&nbsp;{'<'}<span className='green'>h2</span>{'>'}Сүйүктүү тамактарым:{'</'}<span className='green'>h2</span>{'>'}</p> 

    <p>{'<'}<span className='green'>ol</span>{'>'}</p>

    <p>&nbsp;{'<'}<span className='green'>li</span>{'>'}Пицца{'</'}<span className='green'>li</span>{'>'}</p>

    <p>&nbsp;{'<'}<span className='green'>li</span>{'>'}Бургерлер{'</'}<span className='green'>li</span>{'>'}</p>

    <p>&nbsp;{'<'}<span className='green'>li</span>{'>'}Мен жаңышка{'</'}<span className='green'>li</span>{'>'}</p>

    <p>{'</'}<span className='green'>ol</span>{'>'}</p> 

    <p>{'</'}<span className='green'>body</span>{'>'}</p> 

    <p>{'</'}<span className='green'>html</span>{'>'}</p>
</code>

<p>Бул мисал таспандагы баракчада "ol" тагы менен көрсөтүлгөн баракчаланган тизменин тартиби көрсөтүлгөн, көрсөтүлгөн кандай бир элемент "li" тагы менен көрсөтүлгөн. Тизменин санаттары браузер тарабынан автоматтык түрде жасалат.</p>

<p>5. Тартибсиз элементтерди тизме:</p>

<code>
  <p>{'<'}!<span className='blue'>DOCTYPE</span> <span className='blue1'>html</span>{'>'}</p>

  <p>{'<'}<span className='green'>html</span>{'>'}</p>

  <p>{'<'}<span className='green'>head</span>{'>'}</p>

  <p>&nbsp;{'<'}<span className='green'>title</span>{'>'}Менин Веб Баракчам{'</'}<span className='green'>title</span>{'>'}</p>

  <p>{'</'}<span className='green'>head</span>{'>'}</p>

  <p>{'<'}<span className='green'>body</span>{'>'}</p>

  <p>&nbsp;{'<'}<span className='green'>h1</span>{'>'}Менин Веб Баракчамга Карап Келгенче{'</'}<span className='green'>h1</span>{'>'}</p> 

  <p>&nbsp;{'<'}<span className='green'>h2</span>{'>'}Сүйүктүү киноларым:{'</'}<span className='green'>h2</span>{'>'}</p> 

  <p>{'<'}<span className='green'>ul</span>{'>'}</p>

  <p>&nbsp;{'<'}<span className='green'>li</span>{'>'}Түнүктүөрүш биржа{'</'}<span className='green'>li</span>{'>'}</p>

  <p>&nbsp;{'<'}<span className='green'>li</span>{'>'}Кайып теңиз жана мафия{'</'}<span className='green'>li</span>{'>'}</p>

  <p>&nbsp;{'<'}<span className='green'>li</span>{'>'}Кара күн{'</'}<span className='green'>li</span>{'>'}</p>

  <p>{'</'}<span className='green'>ul</span>{'>'}</p> 

  <p>{'</'}<span className='green'>body</span>{'>'}</p>

  <p>{'</'}<span className='green'>html</span>{'>'}</p> 
</code>

<p>Бул мисал тизмеси "ul" тагы менен көрсөтүлгөн тартибсиз элементтерди көрсөтүүдө, көрсөтүлгөн кандай бир элемент "li" тагы менен көрсөтүлгөн. Тизменин элементтери арткары ачкыч белгилери менөңөн. </p>

<p>HTML көбүнчө баракча маалыматтарынан башкармагын арттыруу үчүн, студенттерге алгачкыкы билүү жана улардын веб дамуу мүмкүнчүлүгүн арттыруу үчүн <b>MDN Web Docs</b> же <b>W3Schools</b> сайттарында көрүнүшүн тажрыйбалайт.</p> 

<p>MDN Web Docs сайтына чыгармалар үчүн байланышты кошуу үчүн алдын ала HTML кодун колдонуңуз:</p> 

<p><a href="https://developer.mozilla.org/en-US/docs/Web/HTML "target='_blank'> <b> &#x1F44D; MDN Web Docs</b></a></p> 

<p>W3Schools сайтына чыгармалар үчүн байланышты кошуу үчүн алдын ала HTML кодун колдонуңуз:</p>  

<p><a href="https://www.w3schools.com/html/" target='_blank' > <b>&#x1F44D; W3Schools</b></a></p>

<p>MDN Web Docs жана W3Schools HTML менен байланыштык технологиялар жөнүндө маалыматтарды берип жана интерактивтүү оқуучулар жана мисалдар жеткиликтүү жана толук көргөзмөлөр менен толугуштарды берет. Студенттер бул маалыматтардан колдонууга алат жана HTML боюнча билмегини көпчүлүктүүрүү жана веб дамуу улуттук.</p>


<b><p>* Текст котормочунун жардамы менен жазылган. Эгер ката тапсаңыз, бизге кабарлаңыз *</p></b>
    <div className='ads-container'>  
  {/*  реклама  */}
</div>
    </div>
  )
}

export default KyHtml_1;