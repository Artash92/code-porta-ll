import React from 'react';

function AmHtml_6() {
  return (
      <div>
        <div className='ad-container'>  
          {/*  реклама  */}
        </div>

        <h1>Character Entities (Նիշերի միավորներ)</h1>

        <p>Արագ տեղեկատու ուղեցույց, որը ցույց է տալիս CSS ոճերի հիմնական հատկությունները և դրանց օգտագործման եղանակները:</p>

        <p>Այս հղումը ներառում է տառատեսակներ, գույներ, եզրագծեր, բլոկների մոդելներ, դիրքավորում, տեքստի ոճավորում, անիմացիաներ և այլն:</p>

        <p><b>CSS</b>-ը չի օգտագործվում ուղղակիորեն նիշերի միավորները սահմանելու համար: Սովորաբար, դրանք օգտագործվում են HTML-ում՝ ներկայացնելու հատուկ նիշեր, ինչպիսիք են &amp;, &lt;, &gt; և այլն:</p>

        <h2>Fonts {'(Տառատեսակներ)'}</h2>

        <p><strong>font-family:</strong>&nbsp;Նշում է տառատեսակի ընտանիքը տեքստի համար:</p>
        <code>
          <span className='blue'>font-family</span>: <span className='blue1'>{"'Arial', sans-serif"}</span>;
        </code>

        <p><strong>font-size:</strong>&nbsp;Նշում է տառատեսակի չափը:</p>
        <code>
          <span className='blue'>font-size</span>: <span className='blue1'>16px</span>;
        </code>

        <p><strong>font-style:</strong> Սահմանում է տառատեսակի ոճը (օրինակ՝ italic):</p>
        <code>
          <span className='blue'>font-style</span>: <span className='blue1'>italic</span>;
        </code>

        <p><strong>font-weight:</strong> Սահմանում է տառատեսակի հաստությունը (օրինակ՝ bold)։</p>
        <code>
          <span className='blue'>font-weight</span>: <span className='blue1'>bold</span>;
        </code>

        <h2>Colors (Գույներ)</h2>

        <p><strong>color:</strong> Սահմանում է տեքստի գույնը:</p>
        <code>
          <span className='blue'>color</span>: <span className='blue1'>#3366cc</span>;
        </code>

        <p><strong>background-color:</strong> Սահմանում է տարրի ֆոնային գույնը:</p>
        <code>
          <span className='blue'>background-color</span>: <span className='blue1'>#f0f0f0</span>;
        </code>

        <h2>Hover CSS-ում</h2>

        <p><strong>:hover</strong> Սա pseudo-class CSS է, որը կիրառվում է տարրի վրա, երբ մկնիկի կուրսորը պահում ենք դրա վրա:</p>

        <p>Օրինակ, եթե ցանկանում եք փոխել տեքստի գույնը, երբ կուրսորը պահում եք դրա վրա, կարող եք օգտագործել :hover CSS-ում:</p>

        <code className='codeMin'>{'<'}<span className='green'>button</span> <span className='blue'>class</span>=<span className='blueviole'>"button"</span>{'>'}Hover{'</'}<span className='green'>button</span>{'>'}</code>

        <code>
          <p>{'button:hover {'}</p>

            <p>&nbsp;<span className='blue'>color</span>: <span className='blue1'>{'red'}</span>;</p>

          <p>{'}'}</p>
        </code>

        <p>Այս օրինակում, երբ օգտատերը կուրսորը պահում է տարրի վրա, button կլասը դառնում է կարմիր գույն:</p>

        <h2>URL-ներ (հղումներ)</h2>

        <p><strong>background-image:</strong> Սահմանում է պատկերը որպես ֆոն:</p>
        <code>
          <span className='blue'>background-image</span>: <span className='blue1'>{"url('background.jpg')"}</span>;
        </code>

        <p><strong>@media:</strong> Թույլ է տալիս սահմանել ոճեր տարբեր սարքերի տեսակների կամ միջավայրերի համար:</p>
       
        <code>
          <span className='blueviole'>@media</span> <span className='yellow'>screen</span> and <span className='blue1'>(max-width: 600px)</span> {'{'}&nbsp;
            <span className='green'>{'/* Ոճեր 600 պիքսել կամ պակաս լայնությամբ էկրանների համար */'}</span>
            &nbsp;{'}'}
        </code>

        <h2>Cover CSS-ում</h2>

        <p><strong>Cover</strong>: Սա CSS-ում background-size հատկության արժեքն է, որը չափում է պատկերն այնպես, որ դրա լայնությունն ու բարձրությունը ամբողջությամբ ծածկեն տվյալ կոնտեյները՝ միաժամանակ պահպանելով պատկերի հարաբերակցությունը։</p>

        <p>Օրինակ, եթե դուք ունեք կոնտեյների div ֆոնային պատկերով, և ցանկանում եք, որ այդ պատկերն ամբողջությամբ ծածկի կոնտեյները առանց աղավաղումների, կարող եք օգտագործել background-size ծածկույթի արժեքը:</p>

        <code>
          <p>{'.container {'}</p>

          <p>&nbsp;<span className='blue'>width</span>: <span className='blue1'>300px</span>;</p>

          <p>&nbsp;<span className='blue'>height</span>: <span className='blue1'>200px</span>;</p>

          <p>&nbsp;<span className='blue'>background-image</span>: <span className='blue1'>{"url('example.jpg')"}</span>;</p>

          <p>&nbsp;<span className='blue'>background-size</span>: <span className='blue1'>cover</span>;</p>

          <p>{'}'}</p>
        </code>
        
        <p>Այս օրինակում, եթե կոնտեյները ավելի մեծ է, քան պատկերը, պատկերը կմեծացվի այնպես, որ ամբողջությամբ ծածկի կոնտեյները: Եթե ​​կոնտեյների չափերը ավելի փոքր են, քան պատկերի չափսերը, ապա պատկերը կկտրվի, որպեսզի ամբողջությամբ ծածկի կոնտեյները առանց աղավաղումների:</p>

        <h2>Borders (Սահմաններ)</h2>

        <p><strong>border:</strong> Սահմանում է տարրի եզրագծի ոճը, գույնը և լայնությունը:</p>
        
        <code>
          <span className='blue'>border</span>: <span className='blue1'>1px solid #000</span>;
        </code>

        <p><strong>border-bottom, border-bottom-color, border-bottom-style, border-bottom-width:</strong> Հատուկ հատկություններ ստորին սահմանի համար:</p>
        <code>
          <span className='blue'>border-bottom</span>: <span className='blue1'>2px dashed #333</span>;
        </code>

        <h2>Box Model (Բլոկի մոդել)</h2>

        <p><strong>margin, padding:</strong> Սահմանում է համապատասխանաբար արտաքին և ներքին միջակայքերը:</p>
        <code>
          <span className='blue'>margin</span>: <span className='blue1'>10px</span>;
          <span className='blue'>&nbsp;padding</span>: <span className='blue1'>20px</span>;
        </code>

        <p><strong>width, height:</strong> Սահմանում է տարրի լայնությունը և բարձրությունը:</p>
        <code>
          <span className='blue'>width</span>: <span className='blue1'>300px</span>;
          <span className='blue'>&nbsp;height</span>: <span className='blue1'>150px</span>;
        </code>

        <h2>Positioning (Դիրքորոշում):</h2>

        <p><strong>position:</strong> Սահմանում է տարրի դիրքավորման մեթոդը (օրինակ՝ relative, absolute, fixed):</p>
        <code>
          <span className='blue'>position</span>: <span className='blue1'>relative</span>;
        </code>

        <p><strong>left:</strong> Սահմանում է հեռավորությունը ձախ եզրից:</p>
        <code>
          <span className='blue'>left</span>: <span className='blue1'>50px</span>;
        </code>

        <p><strong>float:</strong> Թույլ է տալիս տարրին «լողալ» ձախ կամ աջ:</p>
        <code>
          <span className='blue'>float</span>: <span className='blue1'>left</span>;
        </code>

        <h2>Text Styling (Տեքստի ոճավորում)</h2>

        <p><strong>text-align:</strong> Սահմանում է տեքստի հորիզոնական հավասարեցումը:</p>
        <code>
          <span className='blue'>text-align</span>: <span className='blue1'>center</span>;
        </code>

        <p><strong>text-decoration:</strong> Նշում է տեքստի ընդգծման, գծանշման կամ տողի ոճը:</p>
        <code>
          <span className='blue'>text-decoration</span>: <span className='blue1'>underline</span>;
        </code>

        <h2>Animation and Transitions (Անիմացիա և անցումներ)</h2>

    <p><strong>@keyframes, animation:</strong> Օգտագործվում է անիմացիաներ ստեղծելու համար:</p>
  
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

    <p><strong>transition-duration:</strong> Սահմանում է հատկությունների անցման տևողությունը:</p>
        
    <code>
      <span className='blue'>transition-duration</span>: <span className='blue1'>0.5s</span>;
    </code>

    <h2>Miscellaneous (Տարբեր)</h2>

    <p><strong>opacity:</strong> Սահմանում է տարրի թափանցիկությունը:</p>
        
    <code>
      <span className='blue'>opacity</span>: <span className='blue1'>0.8</span>;
    </code>

     <p><strong>overflow:</strong> Որոշում է, թե ինչ է տեղի ունենում, եթե տարրի բովանդակությունը չի համապատասխանում դրա չափերին:</p>
      
      <code>
        <span className='blue'>overflow</span>: <span className='blue1'>hidden</span>;
      </code>

     <p><strong>transform:</strong> Կիրառում է փոխակերպումներ (շարժում, պտտում, մասշտաբում) տարրի վրա:</p>
        
     <code>
        <span className='blue'>transform</span>: <span className='blue1'>rotate(45deg)</span>;
      </code>

      <h2>Important CSS-ում</h2>

       <p><strong>Important</strong>: Սա CSS-ի հիմնաբառ է, որն օգտագործվում է որոշակի ոճի կանոնների առաջնահերթություն տալու համար՝ ապահովելու համար, որ այն կիրառելի է, նույնիսկ եթե այլ կանոններ փորձում են չեղարկել այն։</p>

       <p>Երբ դուք ավելացնում եք important բանալի բառը ոճի կանոնին, այդ կանոնը ստանում է ամենաառաջնահերթությունը և կկիրառվի, նույնիսկ եթե կան այլ կանոններ ավելի կոնկրետ ընտրիչով կամ եթե դրանք սահմանված են ավելի ուշ կոդի մեջ:</p>

       <p className='green'>/* Օրինակ, ենթադրենք, որ դուք ունեք հետևյալ CSS կանոնը */</p>

       <code><span className='blue'>color</span>:&nbsp;<span className='blue1'>red</span>;</code>

      <p>Եթե ​​ցանկանում եք, որ այս կանոնն ունենա ամենաբարձր առաջնահերթությունը, կարող եք ավելացնել important հիմնաբառը:</p>
      
      <code>
        <p>{'.color-red {'}</p>

        <p>&nbsp;<span className='blue'>color</span>: <span className='blue1'>red</span>&nbsp;<span className='blueviole'>!important</span>;</p>

        <p>{'}'}</p>
      </code>
      
      <p>Այս կանոնն այժմ կգերակայի այլ կանոնների նկատմամբ, որոնք սահմանված են տեքստի գույնի համար, նույնիսկ եթե դրանք ավելի կոնկրետ են կամ սահմանված են ավելի ուշ կոդի մեջ:</p>
      
      <p>Կարևոր է զգուշորեն օգտագործել important  հիմնաբառը, քանի որ դրա օգտագործումը կարող է ավելի քիչ կառավարելի դարձնել CSS կառուցվածքը և ոճավորումն ավելի դժվարացնել վրիպազերծումը, հատկապես խոշոր նախագծերում:</p>
      
      <h2>Display: Flex CSS-ում</h2>

      <p><strong>Display</strong>: flex-ը CSS հատկություն է, որը կիրառվում է կոնտեյների (ծնող տարր) վրա՝ կոնտեյներին իր երեխաների համար դասավորության ճկուն օրինակ տալու համար (flex տարրեր):</p>

      <p>Display՝ flex-ն օգտագործելիս կոնտեյների մեջ երեխայի տարրերը (flex տարրերը) կդասավորվեն տողով կամ սյունակով՝ կախված flex-direction հատկության արժեքից:</p>

      <code>
        <p>{'<'}<span className='green'>div<span className='blue'><span> style</span></span></span>{'={{'}<span><span><span className='blueviole'>{" display: 'flex', justifyContent: 'center', alignItems: 'center' "}</span></span></span>{'}}>'}</p>

          <p>&nbsp;&nbsp;&nbsp;{'<'}<span className='green'>div</span>{'>'}Տարր 1{'</'}<span className='green'>div</span>{'>'}</p>

          <p>&nbsp;&nbsp;&nbsp;{'<'}<span className='green'>div</span>{'>'}Տարր 2{'</'}<span className='green'>div</span>{'>'}</p>

          <p>&nbsp;&nbsp;&nbsp;{'<'}<span className='green'>div</span>{'>'}Տարր 3{'</'}<span className='green'>div</span>{'>'}</p>

        <p>&nbsp;{'</'}<span className='green'>div</span>{'>'}</p>
      </code>

      <p>Այս օրինակում 1-ին, 2-րդ և 3-րդ տարրերը կտեղադրվեն կոնտեյների մեջ հորիզոնական, քանի որ display: flex-ը սահմանում է ճկուն դասավորության մոդել:</p>

      <p>Դուք կարող եք նաև օգտագործել տարբեր հատկություններ և արժեքներ, ինչպիսիք են՝ justify-content և align- items՝ հարմարեցնելու համար երեխայի տարրերի հավասարեցումը և բաշխումը կոնտեյների ներսում՝ օգտագործելով display: flex:</p>
   
     <b><p>* Տեքստը գրված է թարգմանչի օգնությամբ։ Եթե սխալ եք հայտնաբերել, խնդրում ենք մեզ տեղյակ պահել *</p></b>
     
     <div className='ads-container'>  
      {/*  реклама  */}
      </div>
    </div>
  )
}

export default AmHtml_6;