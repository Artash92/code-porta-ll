import React, { useState, useEffect } from 'react'; 
import Wrapper from "../components/Wrapper";
import RuHtml_6 from '../language/RuHtml_6';
import AmHtml_6 from '../language/AmHtml_6';
import FrHtml_6 from '../language/FrHtml_6';
import TjHtml_6 from '../language/TjHtml_6';
import UzHtml_6 from '../language/UzHtml_6';
import PgHtml_6 from '../language/PtHtml_6';
import ArHtml_6 from '../language/ArHtml_6';

function Html_6() {
  const [language, setLanguage] = useState('en'); 

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
  };
 
  useEffect(() => {
    switch (language) {
      case 'en':
        document.title = 'Character Entities | CSS is not used to directly define character entities. Typically, they are used in HTML to represent special characters, such as &, <, >, etc. | Fonts: font-family | font-style: Sets the font style (e.g., italic). | Hover in CSS | background-image: Sets an image as the background. | @media: Allows defining styles for different types of devices or conditions. | Animation and Transitions: | Important in CSS ';
        break;
      case 'ru':
        document.title = '(Символьные сущности) | CSS не используется для определения символьных сущностей напрямую. Обычно, они используются в HTML для представления специальных символов, таких как &, <, >, и т.д. | Fonts (Шрифты): | Colors (Цвета): | Hover в CSS | @media: Позволяет определять стили для различных типов устройств или условий. | Cover:Это значение свойства background-size в CSS, |  Borders (Границы): | Box Model (Модель блока) | Positioning (Позиционирование): | Positioning (Позиционирование) | Text Styling (Стилизация текста) | Animation and Transitions (Анимация и переходы): | opacity: Устанавливает прозрачность элемента. | Important в CSS | Display: Flex в CSS ';
        break;
      case 'am':
        document.title = 'Նիշերի միավորներ | CSS-ը չի օգտագործվում ուղղակիորեն նիշերի միավորները սահմանելու համար: Սովորաբար, դրանք օգտագործվում են HTML-ում՝ ներկայացնելու հատուկ նիշեր, ինչպիսիք են &, <, > և այլն: | Fonts (Տառատեսակներ) | font-family: Նշում է տառատեսակի ընտանիքը տեքստի համար: | color: Սահմանում է տեքստի գույնը: | Hover CSS-ում | URL-ներ (հղումներ) | @media: Թույլ է տալիս սահմանել ոճեր տարբեր սարքերի տեսակների կամ միջավայրերի համար: | Cover: Սա CSS-ում background-size հատկության արժեքն է, որը չափում է պատկերն այնպես, որ դրա լայնությունն ու բարձրությունը ամբողջությամբ ծածկեն տվյալ կոնտեյները՝ միաժամանակ պահպանելով պատկերի հարաբերակցությունը։ | Borders (Սահմաններ) | Animation and Transitions (Անիմացիա և անցումներ) | opacity: Սահմանում է տարրի թափանցիկությունը: | Important CSS-ում | Display: Flex CSS-ում ';
        break;
      case 'fr':
          document.title = 'Entités de caractères | CSS n est pas utilisé pour définir directement les entités de caractères. En général, elles sont utilisées en HTML pour représenter des caractères spéciaux, tels que &, <, >, etc. | font-family : Définit la famille de polices pour le texte. | background-color : Définit la couleur de fond d un élément. | Hover en CSS | background-image : Définit une image comme fond | Modèle de boîte | Animations et transitions ';
          break;
      case 'uz':
            document.title = 'CSS belgilar ob ektlarini bevosita belgilash uchun ishlatilmaydi. Odatda, ular HTMLda &, <, > va hokazo kabi maxsus belgilarni ifodalash uchun ishlatiladi. | CSS-da Hover | CSS-da Cover | border: Element chegarasining uslubi, rangi va kengligini o rnatadi. | @keyframes, animation: Animatsiyalar yaratish uchun foydalaniladi. | CSS-da Important | Masalan, sizda quyidagi CSS qoidasi bor deylik  ';
          break;
      case 'ar':
            document.title = 'كيانات الشخصيات: | CSS لا يُستخدم لتحديد كيانات الشخصيات مباشرة. عادةً ما يتم استخدامها في HTML لتمثيل  | الشخصيات الخاصة، مثل &، <، >، وما إلى ذلك. الخطوط: | font-family: يحدد عائلة الخط للنص. | الألوان: | التحويم في CSS | :hover هو فئة شبه CSS تطبق على عنصر عندما يكون مؤشر الماوس يحوم فوقه. | @media: يسمح بتحديد الأنماط لأنواع مختلفة من الأجهزة أو الظروف. | Display: flex هو خاصية CSS تُطبّق على حاوية (عنصر الأب) لتعيين نموذج تخطيط مرن لعناصره الابنة (عناصر flex). ';
          break;
      case 'tj':
           document.title = 'Объектҳои аломат | CSS барои бевосита муайян кардани объектҳои характер истифода намешавад. Одатан, онҳо дар HTML барои ифода кардани аломатҳои махсус, ба монанди &, <, > ва ғайра истифода мешаванд. | font-family: Оилаи шрифтро барои матн муқаррар мекунад. | Hover дар CSS | :hover Синфи псевдо-синфи CSS аст, ки ҳангоми дар болои он ҳаракат кардани курсори муш ба элемент татбиқ мешавад. | @media: Имкон медиҳад, ки услубҳо барои намудҳои гуногуни дастгоҳҳо ё шароитҳо муайян карда шаванд. | Cover дар CSS | Cover: Ин арзиши моликияти background-size дар CSS мебошад, ки тасвирро барои пурра пӯшонидани контейнери муайяншуда бо нигоҳ доштани таносуби ҷанбаҳои тасвир миқёс мекунад. | border-bottom, border-bottom-color, border-bottom-style, border-bottom-width: Хусусиятҳои мушаххас барои сарҳади поён. | @keyframes, animation: Барои сохтани аниматсияҳо истифода мешавад. | opacity: Шаффофияти элементро муқаррар мекунад. | overflow: Муайян мекунад, ки агар мундариҷаи унсур аз андозаҳои он зиёд шавад, чӣ мешавад. | Important дар CSS ';
          break;
      case 'pt':
          document.title = 'Entidades de Caracteres | CSS não é usado para definir diretamente entidades de caracteres. Normalmente, elas são usadas em HTML para representar caracteres especiais, como &, <, >, etc. | Fontes | font-family: Define a família da fonte para o texto. | font-weight: Define o peso da fonte (por exemplo, negrito). | font-style: Define o estilo da fonte (por exemplo, itálico). | Hover em CSS | :hover é uma pseudo-classe CSS que se aplica a um elemento quando o cursor do mouse está sobre ele. | URLs | @media: Permite definir estilos para diferentes tipos de dispositivos ou condições. | Cover em CSS | Cover: Este é o valor da propriedade background-size em CSS, que dimensiona uma imagem para cobrir completamente o contêiner especificado, mantendo a proporção da imagem. | border: Define o estilo, cor e largura da borda de um elemento. | position: Determina o método de posicionamento de um elemento (por exemplo, relativo, absoluto, fixo). | Animações e Transições: | @keyframes, animation: Usados para criar animações. | overflow: Determina o que acontece se o conteúdo de um elemento transbordar suas dimensões. | Important em CSS | Exibição: Flex em CSS ';
          break;
      default:
        document.title = 'Character Entities | Fonts | Colors | Hover in CSS | Cover in CSS | Borders | Text Styling | Animation and Transitions | Display: Flex in CSS ';
    }
  }, [language]);

  return (
    <Wrapper>
      <div className='java-script'>
        <div>
          <button className='button1' onClick={() => handleLanguageChange('en')}>English</button>
          <button className='button1' onClick={() => handleLanguageChange('ru')}>Русский</button>
          <button className='button1' onClick={() => handleLanguageChange('am')}>Հայերեն</button>
          <button className='button1' onClick={() => handleLanguageChange('fr')}>Français</button>
          <button className='button1' onClick={() => handleLanguageChange('tj')}>Тоҷикӣ</button>
          <button className='button1' onClick={() => handleLanguageChange('uz')}>OʻZBEK</button>
          <button className='button1' onClick={() => handleLanguageChange('pt')}>Português</button>
          <button className='button1' onClick={() => handleLanguageChange('ar')}>عربى</button>
        </div>
        {language === 'en' && (
          <div>
              <div className='ad-container'>  
          {/*  реклама  */}
        </div>
        
            <h1>Character Entities:</h1>
   
   <p>A brief reference guide demonstrating the basic properties of CSS styles and their usage.</p>

   <p>This cheat sheet covers fonts, colors, borders, box model, positioning, text styling, animations, and more.</p>

   <p><b>CSS</b> is not used to directly define character entities. Typically, they are used in HTML to represent special characters, such as &amp;, &lt;, &gt;, etc.</p>

   <h2>Fonts:</h2>

   <p><strong>font-family:</strong> Sets the font family for text.</p>
   <code>
       <span className='blue'>font-family</span>: <span className='blue1'>{'\'Arial\', sans-serif'}</span>;
   </code>

   <p><strong>font-size:</strong> Determines the font size.</p>
   <code>
       <span className='blue'>font-size</span>: <span className='blue1'>16px</span>;
   </code>

   <p><strong>font-style:</strong> Sets the font style (e.g., italic).</p>
   <code>
       <span className='blue'>font-style</span>: <span className='blue1'>italic</span>;
   </code>

   <p><strong>font-weight:</strong> Defines the font weight (e.g., bold).</p>
   <code>
       <span className='blue'>font-weight</span>: <span className='blue1'>bold</span>;
   </code>

   <h2>Colors:</h2>

   <p><strong>color:</strong> Sets the text color.</p>
   <code>
       <span className='blue'>color</span>: <span className='blue1'>#3366cc</span>;
   </code>

   <p><strong>background-color:</strong> Defines the background color of an element.</p>
   <code>
       <span className='blue'>background-color</span>: <span className='blue1'>#f0f0f0</span>;
   </code>

   <h2>Hover in CSS</h2>

   <p><strong>:hover</strong> is a CSS pseudo-class that applies to an element when the mouse cursor is hovering over it.</p>

   <p>For example, if you want to change the text color when the mouse cursor hovers over it, you can use :hover in CSS.</p>

   <code className='codeMin'>{'<'}<span className='green'>button</span> <span className='blue'>class</span>=<span className='blueviole'>"button"</span>{'>'}Hover{'</'}<span className='green'>button</span>{'>'}</code>

   <code>
       <p>{'button:hover {'}</p>

       <p>&nbsp;<span className='blue'>color</span>: <span className='blue1'>{'red'}</span>;</p>

       <p>{'}'}</p>
   </code>

   <p>In this example, when the user hovers over the element, the button class is assigned a red color.</p>

   <h2>URLs:</h2>

   <p><strong>background-image:</strong> Sets an image as the background.</p>
   <code>
       <span className='blue'>background-image</span>: <span className='blue1'>{"url('background.jpg')"}</span>;
   </code>

   <p><strong>@media:</strong> Allows defining styles for different types of devices or conditions.</p>

   <code>
       <span className='blueviole'>@media</span> <span className='yellow'>screen</span> and <span className='blue1'>(max-width: 600px)</span> {'{'}&nbsp;
       <span className='green'>{'/* Styles for screens 600 pixels wide or less */'}</span>
       &nbsp;{'}'}
   </code>

   <h2>Cover in CSS</h2>

   <p><strong>Cover</strong>: This is the value of the background-size property in CSS, which scales an image to completely cover the specified container, while maintaining the aspect ratio of the image.</p>

   <p>For example, if you have a div container with a background image, and you want the image to completely cover the container without distortion, you can use the cover value for the background-size property.</p>

   <code>
       <p>{'.container {'}</p>

       <p>&nbsp;<span className='blue'>width</span>: <span className='blue1'>300px</span>;</p>

       <p>&nbsp;<span className='blue'>height</span>: <span className='blue1'>200px</span>;</p>

       <p>&nbsp;<span className='blue'>background-image</span>: <span className='blue1'>{"url('example.jpg')"}</span>;</p>

       <p>&nbsp;<span className='blue'>background-size</span>: <span className='blue1'>cover</span>;</p>

       <p>{'}'}</p>
   </code>

   <p>In this example, if the container dimensions exceed the image dimensions, the image will be scaled to cover the container completely. If the container dimensions are smaller than the image dimensions, the image will be cropped to cover the container completely without distortion.</p>

   <h2>Borders:</h2>

   <p><strong>border:</strong> Sets the style, color, and width of an element's border.</p>

   <code>
       <span className='blue'>border</span>: <span className='blue1'>1px solid #000</span>;
   </code>

   <p><strong>border-bottom, border-bottom-color, border-bottom-style, border-bottom-width:</strong> Specific properties for the bottom border.</p>
   <code>
       <span className='blue'>border-bottom</span>: <span className='blue1'>2px dashed #333</span>;
   </code>

   <h2>Box Model:</h2>

   <p><strong>margin, padding:</strong> Define external and internal spacing respectively.</p>
   <code>
       <span className='blue'>margin</span>: <span className='blue1'>10px</span>;
       <span className='blue'>&nbsp;padding</span>: <span className='blue1'>20px</span>;
   </code>

   <p><strong>width, height:</strong> Set the width and height of an element.</p>
   <code>
       <span className='blue'>width</span>: <span className='blue1'>300px</span>;
       <span className='blue'>&nbsp;height</span>: <span className='blue1'>150px</span>;
   </code>

   <h2>Positioning:</h2>

   <p><strong>position:</strong> Determines the method of positioning an element (e.g., relative, absolute, fixed).</p>
   <code>
       <span className='blue'>position</span>: <span className='blue1'>relative</span>;
   </code>

   <p><strong>left:</strong> Sets the distance from the left edge.</p>
   <code>
       <span className='blue'>left</span>: <span className='blue1'>50px</span>;
   </code>

   <p><strong>float:</strong> Allows the element to "float" left or right.</p>
   <code>
       <span className='blue'>float</span>: <span className='blue1'>left</span>;
   </code>

   <h2>Text Styling:</h2>

   <p><strong>text-align:</strong> Sets the horizontal alignment of text.</p>
   <code>
       <span className='blue'>text-align</span>: <span className='blue1'>center</span>;
   </code>

   <p><strong>text-decoration:</strong> Defines the style of underlining, overlining, or line through text.</p>
   <code>
       <span className='blue'>text-decoration</span>: <span className='blue1'>underline</span>;
   </code>

   <h2>Animation and Transitions:</h2>

   <p><strong>@keyframes, animation:</strong> Used to create animations.</p>

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

   <p><strong>transition-duration:</strong> Sets the duration of a transition for properties.</p>

   <code>
       <span className='blue'>transition-duration</span>: <span className='blue1'>0.5s</span>;
   </code>

   <h2>Miscellaneous:</h2>

   <p><strong>opacity:</strong> Sets the transparency of an element.</p>

   <code>
       <span className='blue'>opacity</span>: <span className='blue1'>0.8</span>;
   </code>

   <p><strong>overflow:</strong> Determines what happens if the content of an element overflows its dimensions.</p>

   <code>
       <span className='blue'>overflow</span>: <span className='blue1'>hidden</span>;
   </code>

   <p><strong>transform:</strong> Applies transformations (translation, rotation, scaling) to an element.</p>

   <code>
       <span className='blue'>transform</span>: <span className='blue1'>rotate(45deg)</span>;
   </code>

   <h2>Important in CSS</h2>

   <p><strong>Important</strong>: This is a keyword in CSS used to give priority to a specific style rule, ensuring that it will be applied even if there are other rules attempting to override it.</p>

   <p>When you add the important keyword to a style rule, that rule gets the highest priority and will be applied even if there are other rules with more specific selectors or if they are defined later in the code.</p>

   <p className='green'>/* For example, suppose you have the following CSS rule */</p>

   <code><span className='blue'>color</span>:&nbsp;<span className='blue1'>red</span>;</code>

   <p>If you want this rule to have the highest priority, you can add the important keyword:</p>

   <code>
       <p>{'.color-red {'}</p>

       <p>&nbsp;<span className='blue'>color</span>: <span className='blue1'>red</span>&nbsp;<span className='blueviole'>!important</span>;</p>

       <p>{'}'}</p>
   </code>

   <p>Now this rule will take precedence over other rules defined for text color, even if they are more specific or defined later in the code.</p>

   <p>It's important to use the important keyword sparingly because its use can make the CSS structure less manageable and complicate style debugging, especially in large projects.</p>

   <h2>Display: Flex in CSS</h2>

   <p><strong>Display</strong>: flex is a CSS property applied to a container (parent element) to set a flexible layout model for its child elements (flex items).</p>

   <p>When using display: flex, the child elements (flex items) in the container will be arranged in a row or column, depending on the value of the flex-direction property.</p>

   <code>
       <p>{'<'}<span className='green'>div<span className='blue'><span> style</span></span></span>{'={{'}<span><span><span className='blueviole'>{" display: 'flex', justifyContent: 'center', alignItems: 'center' "}</span></span></span>{'}}>'}</p>

       <p>&nbsp;&nbsp;&nbsp;{'<'}<span className='green'>div</span>{'>'}Item 1{'</'}<span className='green'>div</span>{'>'}</p>

       <p>&nbsp;&nbsp;&nbsp;{'<'}<span className='green'>div</span>{'>'}Item 2{'</'}<span className='green'>div</span>{'>'}</p>

       <p>&nbsp;&nbsp;&nbsp;{'<'}<span className='green'>div</span>{'>'}Item 3{'</'}<span className='green'>div</span>{'>'}</p>

       <p>&nbsp;{'</'}<span className='green'>div</span>{'>'}</p>
   </code>

   <p>In this example, items 1, 2, and 3 will be arranged horizontally in the container because display: flex sets a flexible layout model.</p>

   <p>You can also use various properties and values, such as justify-content and align-items, to customize the alignment and distribution of child elements in the container using display: flex.</p>

        <b><p>* Text written with the help of a translator. If you find an error, please let us know *</p></b>
    <div className='ads-container'>  
  {/*  реклама  */}
</div>  
  </div>
        )}
        {language === 'ru' && (
          <div>
            <RuHtml_6 />
          </div>
        )}
        {language === 'am' && (
          <div>
            <AmHtml_6 />
          </div>
        )}
        {language === 'fr' && (
          <div>
            <FrHtml_6 />
          </div>
        )}
        {language === 'tj' && (
          <div>
            <TjHtml_6 />
          </div>
        )}
        {language === 'uz' && (
          <div>
            <UzHtml_6 />
          </div>
        )}
        {language === 'pt' && (
          <div>
            <PgHtml_6 />
          </div>
        )}
        {language === 'ar' && (
          <div>
            <ArHtml_6 />
          </div>
        )}
      </div>
    </Wrapper>
  );
}

export default Html_6;
