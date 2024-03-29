import React from 'react'

function RuHtml_3() {
  return (
    <div>
      <div className='ad-container'>  
          {/*  реклама  */}
        </div>
       
    <h1>Понимание метатегов в HTML - Руководство для начинающих</h1>

<p>1. <b>charset:</b> Атрибут charset указывает кодировку символов для HTML-документа. Важно убедиться, что кодировка установлена правильно, чтобы специальные символы отображались корректно.</p>

<p>Пример:</p>

<code><p>{'<'}<span className='green'>meta</span> <span className='blue'>charset</span>=<span className='blue1'>"UTF-8"</span>{'>'}</p></code>

<p>2. <b>name:</b> Атрибут name используется для определения типа предоставляемых метаданных, таких как ключевые слова, описание или автор.</p>

<p>Пример:</p>

<code><p>{'<'}<span className='green'>meta</span> <span className='blue'>name</span>=<span className='blue1'>"description"</span> <span className='blue'>content</span>=<span className='blue1'>"Это описание моей веб-страницы."</span>{'>'}</p></code>

<p>3. <b>content:</b> Атрибут content используется для указания значения предоставляемых метаданных.</p>

<p>Пример:</p>

<code><p>{'<'}<span className='green'>meta</span> <span className='blue'>name</span>=<span className='blue1'>"keywords"</span> <span className='blue'>content</span>=<span className='blue1'>"HTML, CSS, JavaScript"</span>{'>'}</p></code>

<p>4. <b>http-equiv:</b> Атрибут http-equiv используется для определения заголовка HTTP для документа HTML, такого как refresh или content-type.</p>

<p>Пример:</p>

<code><p>{'<'}<span className='green'>meta</span> <span className='blue'>http-equiv</span>=<span className='blue1'>"refresh"</span> <span className='blue'>content</span>=<span className='blue1'>"5"</span>{'>'}</p></code>

<p>5. <b>viewport:</b> Атрибут viewport используется для управления масштабированием и разметкой веб-страницы на разных устройствах, таких как мобильные телефоны или планшеты.</p>

<p>Пример:</p>

<code><p>{'<'}<span className='green'>meta</span> <span className='blue'>name</span>=<span className='blue1'>"viewport"</span> <span className='blue'>content</span>=<span className='blue1'>"width=device-width, initial-scale=1.0"</span>{'>'}</p></code>

<h2>Как использовать цвета в HTML: руководство для начинающих.</h2>

<p>Цвета в HTML могут быть определены с помощью различных методов, включая названия цветов, шестнадцатеричные значения, значения RGB и значения HSL.</p>

<b>1. Названия цветов:</b>

<p>HTML предоставляет набор заранее определенных имен цветов, которые можно использовать для указания цвета элемента. Некоторые примеры имен цветов: "красный", "зеленый", "синий", "желтый", "фиолетовый" и "черный".</p>
    
<b>2. Шестнадцатеричные значения:</b>

<p>Шестнадцатеричное значение цвета - это шестизначный код, представляющий цвет. Первые две цифры представляют количество красного в цвете, следующие две цифры представляют количество зеленого в цвете, а последние две цифры представляют количество синего в цвете. Например, #FF0000 представляет чистый красный, #00FF00 - чистый зеленый, а #0000FF - чистый синий.</p>

 <b>3. RGB значения:</b>

 <p>RGB значение цвета - это набор из трех чисел, представляющих количество красного, зеленого и синего в цвете. Каждое значение находится в диапазоне от 0 до 255. Например, rgb(255, 0, 0) представляет чистый красный, rgb(0, 255, 0) - чистый зеленый, а rgb(0, 0, 255) - чистый синий.</p>

<b>4. HSL значения:</b>

<p>HSL значение цвета - это набор из трех чисел, представляющих оттенок, насыщенность и светлоту цвета. Оттенок - это градус на цветовом круге (от 0 до 360), насыщенность - это процентное значение (от 0% до 100%), а светлота также является процентным значением (от 0% до 100%). Например, hsl(0, 100%, 50%) представляет чистый красный, hsl(120, 100%, 50%) - чистый зеленый, а hsl(240, 100%, 50%) - чистый синий.</p>

<h2>Основы CSS для начинающих: Введение в Cascading Style Sheets</h2>

<p>CSS (Cascading Style Sheets) - это язык, используемый для стилизации HTML-документов. CSS позволяет изменять цвета, шрифты, макет и другие аспекты вашей веб-страницы. Он работает путем выбора HTML-элементов и применения к ним стилей.</p>

<p>Стили CSS создаются с использованием селекторов, свойств и значений. Селекторы выбирают конкретные HTML-элементы и могут использоваться для применения стилей к нескольким элементам одновременно. Свойства определяют, какие стили вы хотите применить, и могут включать такие вещи, как размер шрифта, цвет и отступы. Значения указывают конкретные настройки для свойства, такие как конкретный цвет или размер.</p>

<p>Для подключения CSS-файла к HTML-документу вы можете использовать тег {'<link>'} в разделе {'<head>'} вашего HTML-документа.</p>

<p>Вот пример того, как подключить CSS-файл с названием "styles.css" к вашему HTML-документу:</p>

<code>
      <p>{'<'}!<span className='blue'>DOCTYPE</span> <span className='blue1'>html</span>{'>'}</p>

      <p>{'<'}<span className='green'>html</span>{'>'}</p> 

      <p>{'<'}<span className='green'>head</span>{'>'}</p>

      <p>&nbsp;{'<'}<span className='green'>link</span> <span className='blue'>rel</span>=<span className='blue1'>"stylesheet"</span> <span className='blue'>type</span>=<span className='blue1'>"text/css"</span> <span className='blue'>href</span>=<span className='blue1'>"styles.css"</span>{'>'}</p>

      <p>{'</'}<span className='green'>head</span>{'>'}</p>

      <p>{'<'}<span className='green'>body</span>{'>'}</p>

      <p>&nbsp;{'<!-- ваш HTML-контент здесь -->'}</p>

      <p>{'</'}<span className='green'>body</span>{'>'}</p>

      <p>{'</'}<span className='green'>html</span>{'>'}</p>
  </code>

<p>Вот пример CSS-кода:</p>

<code>
    <p>{'h1 {'}</p>

    <p><span className='blue'>color</span>: <span className='blue1'>red</span>;</p>

    <p><span className='blue'>font-size</span>: <span className='blue1'>36px</span>; </p>

    <p><span className='blue'>text-align</span>: <span className='blue1'>center</span>; </p>

    <p>{'}'}</p>

    <p>{'p {'}</p>

    <p><span className='blue'>color</span>: <span className='blue1'>blue</span>; </p>

    <p> <span className='blue'>font-size</span>: <span className='blue1'>16px</span>;</p>

    <p><span className='blue'>line-height</span>: <span className='blue1'>1.5</span>;</p>

    <p>{'}'}</p>
   </code>

<p>Этот код на CSS применяет стили к элементам HTML документа. В нем два селектора: <b>h1</b> и <b>p</b>, и для каждого из них заданы несколько свойств и значений. Селектор <b>h1</b> задает красный цвет, размер шрифта 36px и выравнивание текста по центру для всех элементов <b>h1</b> на странице. Селектор <b>p</b> задает синий цвет, размер шрифта 16px и межстрочный интервал 1.5 для всех элементов <b>p</b> на странице.</p>

<p>CSS может быть применен к HTML документам несколькими способами, включая встроенный, внутренний и внешний. Встроенный стиль применяется в разделе <b>head</b> HTML документа с помощью тега <b>style</b>. Внутренний стиль применяется напрямую к HTML элементу с помощью атрибута <b>style</b>. Внешний стиль хранится в отдельных файлах CSS и связывается с HTML документом с помощью тега <b>link</b>.</p>
    
<b><p>* Текст написан с помощью переводчика. Если вы нашли ошибку, пожалуйста, сообщите нам *</p></b>
    <div className='ads-container'>  
  {/*  реклама  */}
</div>
    </div>
  )
}

export default RuHtml_3