import React from 'react';


const Html_6 = () => {
  return (
      <div>
         <div className='ad-container'>  
          {/*  реклама  */}
        </div>

        <h1>Character Entities (Символьные сущности):</h1>

        <p>Краткое справочное руководство, демонстрирующее основные свойства стилей CSS и их использование.</p>

        <p>Этот шпаргалка охватывает шрифты, цвета, границы, модель блока, позиционирование, стилизацию текста, анимации и многое другое.</p>

        <p><b>CSS</b> не используется для определения символьных сущностей напрямую. Обычно, они используются в HTML для представления специальных символов, таких как &amp;, &lt;, &gt;, и т.д.</p>

        <h2>Fonts (Шрифты):</h2>

        <p><strong>font-family:</strong> Задает семейство шрифтов для текста.</p>
        <code>
          <span className='blue'>font-family</span>: <span className='blue1'>{"'Arial', sans-serif"}</span>;
        </code>

        <p><strong>font-size:</strong> Определяет размер шрифта.</p>
        <code>
          <span className='blue'>font-size</span>: <span className='blue1'>16px</span>;
        </code>

        <p><strong>font-style:</strong> Устанавливает стиль шрифта (например, italic).</p>
        <code>
          <span className='blue'>font-style</span>: <span className='blue1'>italic</span>;
        </code>

        <p><strong>font-weight:</strong> Определяет толщину шрифта (например, bold).</p>
        <code>
          <span className='blue'>font-weight</span>: <span className='blue1'>bold</span>;
        </code>

        <h2>Colors (Цвета):</h2>

        <p><strong>color:</strong> Задает цвет текста.</p>
        <code>
          <span className='blue'>color</span>: <span className='blue1'>#3366cc</span>;
        </code>

        <p><strong>background-color:</strong> Определяет цвет фона элемента.</p>
        <code>
          <span className='blue'>background-color</span>: <span className='blue1'>#f0f0f0</span>;
        </code>

        <h2>Hover в CSS</h2>

        <p><strong>:hover</strong> Это псевдокласс CSS, который применяется к элементу при наведении на него курсора мыши.</p>

        <p>Например, если вы хотите изменить цвет текста при наведении на него курсора мыши, вы можете использовать :hover в CSS.</p>

        <code className='codeMin'>{'<'}<span className='green'>button</span> <span className='blue'>class</span>=<span className='blueviole'>"button"</span>{'>'}Наведите курсор{'</'}<span className='green'>button</span>{'>'}</code>

        <code>
          <p>{'button:hover {'}</p>

            <p>&nbsp;<span className='blue'>color</span>: <span className='blue1'>{'red'}</span>;</p>

          <p>{'}'}</p>
        </code>

        <p> В этом примере, когда пользователь наводит курсор мыши на элемент, классу button присваивается красный цвет.</p>

        <h2>URLs (Ссылки):</h2>

        <p><strong>background-image:</strong> Устанавливает изображение в качестве фона.</p>
        <code>
          <span className='blue'>background-image</span>: <span className='blue1'>{"url('background.jpg')"}</span>;
        </code>

        <p><strong>@media:</strong> Позволяет определять стили для различных типов устройств или условий.</p>
       
        <code>
          <span className='blueviole'>@media</span> <span className='yellow'>screen</span> and <span className='blue1'>(max-width: 600px)</span> {'{'}&nbsp;
            <span className='green'>{'/* Стили для экранов шириной 600 пикселей или меньше */'}</span>
            &nbsp;{'}'}
        </code>

        <h2>Cover в CSS</h2>

        <p><strong>Cover</strong>:Это значение свойства background-size в CSS, которое масштабирует изображение так, чтобы его ширина и высота полностью покрывали заданный контейнер, при этом сохраняя соотношение сторон изображения.</p>

        <p>Например, если у вас есть контейнер div с фоновым изображением, и вы хотите, чтобы это изображение полностью покрывало контейнер без искажения, вы можете использовать значение cover для свойства background-size.</p>

        <code>
          <p>{'.container {'}</p>

          <p>&nbsp;<span className='blue'>width</span>: <span className='blue1'>300px</span>;</p>

          <p>&nbsp;<span className='blue'>height</span>: <span className='blue1'>200px</span>;</p>

          <p>&nbsp;<span className='blue'>background-image</span>: <span className='blue1'>{"url('example.jpg')"}</span>;</p>

          <p>&nbsp;<span className='blue'>background-size</span>: <span className='blue1'>cover</span>;</p>

          <p>{'}'}</p>
        </code>
        
        <p>В этом примере, если размеры контейнера превышают размеры изображения, изображение будет масштабироваться так, чтобы полностью покрыть контейнер. Если размеры контейнера меньше размеров изображения, изображение будет обрезано так, чтобы полностью покрыть контейнер без искажения.</p>

        <h2>Borders (Границы):</h2>

        <p><strong>border:</strong> Устанавливает стиль, цвет и ширину границы элемента.</p>
        
        <code>
          <span className='blue'>border</span>: <span className='blue1'>1px solid #000</span>;
        </code>

        <p><strong>border-bottom, border-bottom-color, border-bottom-style, border-bottom-width:</strong> Специфические свойства для нижней границы.</p>
        <code>
          <span className='blue'>border-bottom</span>: <span className='blue1'>2px dashed #333</span>;
        </code>

        <h2>Box Model (Модель блока):</h2>

        <p><strong>margin, padding:</strong> Определяют внешние и внутренние отступы соответственно.</p>
        <code>
          <span className='blue'>margin</span>: <span className='blue1'>10px</span>;
          <span className='blue'>&nbsp;padding</span>: <span className='blue1'>20px</span>;
        </code>

        <p><strong>width, height:</strong> Задают ширину и высоту элемента.</p>
        <code>
          <span className='blue'>width</span>: <span className='blue1'>300px</span>;
          <span className='blue'>&nbsp;height</span>: <span className='blue1'>150px</span>;
        </code>

        <h2>Positioning (Позиционирование):</h2>

        <p><strong>position:</strong> Определяет метод позиционирования элемента (например, relative, absolute, fixed).</p>
        <code>
          <span className='blue'>position</span>: <span className='blue1'>relative</span>;
        </code>

        <p><strong>left:</strong> Устанавливает расстояние от левого края.</p>
        <code>
          <span className='blue'>left</span>: <span className='blue1'>50px</span>;
        </code>

        <p><strong>float:</strong> Позволяет элементу "плавать" влево или вправо.</p>
        <code>
          <span className='blue'>float</span>: <span className='blue1'>left</span>;
        </code>

        <h2>Text Styling (Стилизация текста):</h2>

        <p><strong>text-align:</strong> Устанавливает горизонтальное выравнивание текста.</p>
        <code>
          <span className='blue'>text-align</span>: <span className='blue1'>center</span>;
        </code>

        <p><strong>text-decoration:</strong> Определяет стиль подчеркивания, зачеркивания или линии над текстом.</p>
        <code>
          <span className='blue'>text-decoration</span>: <span className='blue1'>underline</span>;
        </code>

        <h2>Animation and Transitions (Анимация и переходы):</h2>

    <p><strong>@keyframes, animation:</strong> Используются для создания анимаций.</p>
  
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

    <p><strong>transition-duration:</strong> Задает длительность перехода для свойств.</p>
        
    <code>
      <span className='blue'>transition-duration</span>: <span className='blue1'>0.5s</span>;
    </code>

    <h2>Miscellaneous (Разное):</h2>

    <p><strong>opacity:</strong> Устанавливает прозрачность элемента.</p>
        
    <code>
      <span className='blue'>opacity</span>: <span className='blue1'>0.8</span>;
    </code>

     <p><strong>overflow:</strong> Определяет, что произойдет, если содержимое элемента не помещается в пределах его размеров.</p>
      
      <code>
        <span className='blue'>overflow</span>: <span className='blue1'>hidden</span>;
      </code>

     <p><strong>transform:</strong> Применяет преобразования (перемещение, вращение, масштабирование) к элементу.</p>
        
     <code>
        <span className='blue'>transform</span>: <span className='blue1'>rotate(45deg)</span>;
      </code>

      <h2>Important в CSS</h2>

       <p><strong>Important</strong>:Это ключевое слово в CSS, которое используется для установки приоритета определенному правилу стилей, чтобы гарантировать, что оно будет применено, даже если есть другие правила, которые пытаются переопределить его.</p>

       <p>Когда вы добавляете ключевое слово important к стилевому правилу, это правило получает высший приоритет и будет применяться, даже если есть другие правила с более специфичным селектором или если они определены позже в коде.</p>

       <p className='green'>/* Например, допустим, у вас есть следующее правило CSS */</p>

       <code><span className='blue'>color</span>:&nbsp;<span className='blue1'>red</span>;</code>

      <p>Если вы хотите, чтобы это правило имело наивысший приоритет, вы можете добавить ключевое слово important:</p>
      
      <code>
        <p>{'.color-red {'}</p>

        <p>&nbsp;<span className='blue'>color</span>: <span className='blue1'>red</span>&nbsp;<span className='blueviole'>!important</span>;</p>

        <p>{'}'}</p>
      </code>
      
      <p>Теперь это правило будет иметь приоритет над другими правилами, определенными для цвета текста, даже если они более специфичны или определены позже в коде.</p>
      
      <p>Важно использовать ключевое слово important осторожно, потому что его применение может сделать структуру CSS менее поддающейся контролю и усложнить отладку стилей, особенно в больших проектах.</p>
      
      <h2>Display: Flex в CSS</h2>

      <p><strong>Display</strong>: flex - это CSS свойство, которое применяется к контейнеру (родительскому элементу), чтобы установить контейнеру гибкую модель размещения его дочерних элементов (flex-элементов).</p>

      <p>При использовании display: flex, дочерние элементы (flex-элементы) в контейнере будут располагаться в строку или в столбец, в зависимости от значения свойства flex-direction.</p>

      <code>
        <p>{'<'}<span className='green'>div<span className='blue'><span> style</span></span></span>{'={{'}<span><span><span className='blueviole'>{" display: 'flex', justifyContent: 'center', alignItems: 'center' "}</span></span></span>{'}}>'}</p>

          <p>&nbsp;&nbsp;&nbsp;{'<'}<span className='green'>div</span>{'>'}Элемент 1{'</'}<span className='green'>div</span>{'>'}</p>

          <p>&nbsp;&nbsp;&nbsp;{'<'}<span className='green'>div</span>{'>'}Элемент 2{'</'}<span className='green'>div</span>{'>'}</p>

          <p>&nbsp;&nbsp;&nbsp;{'<'}<span className='green'>div</span>{'>'}Элемент 3{'</'}<span className='green'>div</span>{'>'}</p>

        <p>&nbsp;{'</'}<span className='green'>div</span>{'>'}</p>
      </code>

      <p>В этом примере, элементы 1, 2 и 3 будут располагаться горизонтально в контейнере, так как display: flex задает гибкую модель размещения.</p>

      <p>Вы также можете использовать различные свойства и значения, такие как justify-content и align-items, чтобы настроить выравнивание и распределение дочерних элементов в контейнере с помощью display: flex.</p>
      
      <b><p>* Текст написан с помощью переводчика. Если вы нашли ошибку, пожалуйста, сообщите нам *</p></b>
    <div className='ads-container'>  
      {/*  реклама  */}
   </div>
      </div>
  );
};

export default Html_6;
