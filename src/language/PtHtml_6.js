import React from 'react';

function PtHtml_6() {
  return (
    <div>
         <div className='ad-container'>  
          {/*  реклама  */}
        </div> 
        
      <h1>Entidades de Caracteres:</h1>
   
   <p>Um breve guia de referência demonstrando as propriedades básicas dos estilos CSS e seu uso.</p>
   
   <p>Esta folha de trapaça abrange fontes, cores, bordas, modelo de caixa, posicionamento, estilização de texto, animações e muito mais.</p>
   
   <p><b>CSS</b> não é usado para definir diretamente entidades de caracteres. Normalmente, elas são usadas em HTML para representar caracteres especiais, como &amp;, &lt;, &gt;, etc.</p>
   
   <h2>Fontes:</h2>
   
   <p><strong>font-family:</strong> Define a família da fonte para o texto.</p>
   <code>
       <span className='blue'>font-family</span>: <span className='blue1'>{'\'Arial\', sans-serif'}</span>;
   </code>
   
   <p><strong>font-size:</strong> Determina o tamanho da fonte.</p>
   <code>
       <span className='blue'>font-size</span>: <span className='blue1'>16px</span>;
   </code>
   
   <p><strong>font-style:</strong> Define o estilo da fonte (por exemplo, itálico).</p>
   <code>
       <span className='blue'>font-style</span>: <span className='blue1'>italic</span>;
   </code>
   
   <p><strong>font-weight:</strong> Define o peso da fonte (por exemplo, negrito).</p>
   <code>
       <span className='blue'>font-weight</span>: <span className='blue1'>bold</span>;
   </code>
   
   <h2>Cores:</h2>
   
   <p><strong>color:</strong> Define a cor do texto.</p>
   <code>
       <span className='blue'>color</span>: <span className='blue1'>#3366cc</span>;
   </code>
   
   <p><strong>background-color:</strong> Define a cor de fundo de um elemento.</p>
   <code>
       <span className='blue'>background-color</span>: <span className='blue1'>#f0f0f0</span>;
   </code>
   
   <h2>Hover em CSS</h2>
   
   <p><strong>:hover</strong> é uma pseudo-classe CSS que se aplica a um elemento quando o cursor do mouse está sobre ele.</p>
   
   <p>Por exemplo, se você quiser mudar a cor do texto quando o cursor do mouse estiver sobre ele, você pode usar :hover em CSS.</p>
   
   <code className='codeMin'>{'<'}<span className='green'>button</span> <span className='blue'>class</span>=<span className='blueviole'>"button"</span>{'>'}Hover{'</'}<span className='green'>button</span>{'>'}</code>
   
   <code>
       <p>{'button:hover {'}</p>
   
       <p>&nbsp;<span className='blue'>color</span>: <span className='blue1'>{'red'}</span>;</p>
   
       <p>{'}'}</p>
   </code>
   
   <p>Neste exemplo, quando o usuário passar o cursor sobre o elemento, a classe do botão será atribuída uma cor vermelha.</p>
   
   <h2>URLs:</h2>
   
   <p><strong>background-image:</strong> Define uma imagem como fundo.</p>
   <code>
       <span className='blue'>background-image</span>: <span className='blue1'>{"url('background.jpg')"}</span>;
   </code>
   
   <p><strong>@media:</strong> Permite definir estilos para diferentes tipos de dispositivos ou condições.</p>
   
   <code>
       <span className='blueviole'>@media</span> <span className='yellow'>screen</span> and <span className='blue1'>(max-width: 600px)</span> {'{'}&nbsp;
       <span className='green'>{'/* Estilos para telas com 600 pixels de largura ou menos */'}</span>
       &nbsp;{'}'}
   </code>
   
   <h2>Cover em CSS</h2>
   
   <p><strong>Cover</strong>: Este é o valor da propriedade background-size em CSS, que dimensiona uma imagem para cobrir completamente o contêiner especificado, mantendo a proporção da imagem.</p>
   
   <p>Por exemplo, se você tiver um contêiner div com uma imagem de fundo, e quiser que a imagem cubra completamente o contêiner sem distorção, você pode usar o valor cover para a propriedade background-size.</p>
   
   <code>
       <p>{'.container {'}</p>
   
       <p>&nbsp;<span className='blue'>width</span>: <span className='blue1'>300px</span>;</p>
   
       <p>&nbsp;<span className='blue'>height</span>: <span className='blue1'>200px</span>;</p>
   
       <p>&nbsp;<span className='blue'>background-image</span>: <span className='blue1'>{"url('example.jpg')"}</span>;</p>
   
       <p>&nbsp;<span className='blue'>background-size</span>: <span className='blue1'>cover</span>;</p>
   
       <p>{'}'}</p>
   </code>
   
   <p>Neste exemplo, se as dimensões do contêiner excederem as dimensões da imagem, a imagem será dimensionada para cobrir completamente o contêiner. Se as dimensões do contêiner forem menores que as dimensões da imagem, a imagem será cortada para cobrir completamente o contêiner sem distorção.</p>
   
   <h2>Bordas:</h2>
   
   <p><strong>border:</strong> Define o estilo, cor e largura da borda de um elemento.</p>
   
   <code>
       <span className='blue'>border</span>: <span className='blue1'>1px solid #000</span>;
   </code>
   
   <p><strong>border-bottom, border-bottom-color, border-bottom-style, border-bottom-width:</strong> Propriedades específicas para a borda inferior.</p>
   <code>
       <span className='blue'>border-bottom</span>: <span className='blue1'>2px dashed #333</span>;
   </code>
   
   <h2>Modelo de Caixa:</h2>
   
   <p><strong>margin, padding:</strong> Definem espaçamento externo e interno, respectivamente.</p>
   <code>
       <span className='blue'>margin</span>: <span className='blue1'>10px</span>;
       <span className='blue'>&nbsp;padding</span>: <span className='blue1'>20px</span>;
   </code>
   
   <p><strong>width, height:</strong> Define a largura e a altura de um elemento.</p>
   <code>
       <span className='blue'>width</span>: <span className='blue1'>300px</span>;
       <span className='blue'>&nbsp;height</span>: <span className='blue1'>150px</span>;
   </code>
   
   <h2>Posicionamento:</h2>
   
   <p><strong>position:</strong> Determina o método de posicionamento de um elemento (por exemplo, relativo, absoluto, fixo).</p>
   <code>
       <span className='blue'>position</span>: <span className='blue1'>relative</span>;
   </code>
   
   <p><strong>left:</strong> Define a distância a partir da borda esquerda.</p>
   <code>
       <span className='blue'>left</span>: <span className='blue1'>50px</span>;
   </code>
   
   <p><strong>float:</strong> Permite que o elemento "flutue" para a esquerda ou direita.</p>
   <code>
       <span className='blue'>float</span>: <span className='blue1'>left</span>;
   </code>
   
   <h2>Estilização de Texto:</h2>
   
   <p><strong>text-align:</strong> Define o alinhamento horizontal do texto.</p>
   <code>
       <span className='blue'>text-align</span>: <span className='blue1'>center</span>;
   </code>
   
   <p><strong>text-decoration:</strong> Define o estilo de sublinhado, sobrelinhado ou linha sobre o texto.</p>
   <code>
       <span className='blue'>text-decoration</span>: <span className='blue1'>underline</span>;
   </code>
   
   <h2>Animações e Transições:</h2>
   
   <p><strong>@keyframes, animation:</strong> Usados para criar animações.</p>
   
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
   
   <p><strong>transition-duration:</strong> Define a duração de uma transição para propriedades.</p>
   
   <code>
       <span className='blue'>transition-duration</span>: <span className='blue1'>0.5s</span>;
   </code>
   
   <h2>Diversos:</h2>
   
   <p><strong>opacity:</strong> Define a transparência de um elemento.</p>
   
   <code>
       <span className='blue'>opacity</span>: <span className='blue1'>0.8</span>;
   </code>
   
   <p><strong>overflow:</strong> Determina o que acontece se o conteúdo de um elemento transbordar suas dimensões.</p>
   
   <code>
       <span className='blue'>overflow</span>: <span className='blue1'>hidden</span>;
   </code>
   
   <p><strong>transform:</strong> Aplica transformações (translação, rotação, escala) a um elemento.</p>
   
   <code>
       <span className='blue'>transform</span>: <span className='blue1'>rotate(45deg)</span>;
   </code>
   
   <h2>Important em CSS</h2>
   
   <p><strong>Important</strong>: Esta é uma palavra-chave em CSS usada para dar prioridade a uma regra de estilo específica, garantindo que ela será aplicada mesmo que haja outras regras tentando substituí-la.</p>
   
   <p>Quando você adiciona a palavra-chave important a uma regra de estilo, essa regra obtém a mais alta prioridade e será aplicada mesmo que haja outras regras com seletores mais específicos ou se forem definidas posteriormente no código.</p>
   
   <p className='green'>/* Por exemplo, suponha que você tenha a seguinte regra CSS */</p>
   
   <code><span className='blue'>color</span>:&nbsp;<span className='blue1'>red</span>;</code>
   
   <p>Se você quiser que essa regra tenha a mais alta prioridade, pode adicionar a palavra-chave important:</p>
   
   <code>
       <p>{'.color-red {'}</p>
   
       <p>&nbsp;<span className='blue'>color</span>: <span className='blue1'>red</span>&nbsp;<span className='blueviole'>!important</span>;</p>
   
       <p>{'}'}</p>
   </code>
   
   <p>Agora, esta regra terá precedência sobre outras regras definidas para a cor do texto, mesmo que sejam mais específicas ou definidas posteriormente no código.</p>
   
   <p>É importante usar a palavra-chave important com parcimônia porque seu uso pode tornar a estrutura CSS menos gerenciável e complicar a depuração de estilos, especialmente em projetos grandes.</p>
   
   <h2>Exibição: Flex em CSS</h2>
   
   <p><strong>Display</strong>: flex é uma propriedade CSS aplicada a um contêiner (elemento pai) para definir um modelo de layout flexível para seus elementos filhos (itens flexíveis).</p>
   
   <p>Ao usar display: flex, os elementos filhos (itens flexíveis) no contêiner serão organizados em uma linha ou coluna, dependendo do valor da propriedade flex-direction.</p>
   
   <code>
       <p>{'<'}<span className='green'>div<span className='blue'><span> style</span></span></span>{'={{'}<span><span><span className='blueviole'>{" display: 'flex', justifyContent: 'center', alignItems: 'center' "}</span></span></span>{'}}>'}</p>
   
       <p>&nbsp;&nbsp;&nbsp;{'<'}<span className='green'>div</span>{'>'}Item 1{'</'}<span className='green'>div</span>{'>'}</p>
   
       <p>&nbsp;&nbsp;&nbsp;{'<'}<span className='green'>div</span>{'>'}Item 2{'</'}<span className='green'>div</span>{'>'}</p>
   
       <p>&nbsp;&nbsp;&nbsp;{'<'}<span className='green'>div</span>{'>'}Item 3{'</'}<span className='green'>div</span>{'>'}</p>
   
       <p>&nbsp;{'</'}<span className='green'>div</span>{'>'}</p>
   </code>
   
   <p>Neste exemplo, os itens 1, 2 e 3 serão organizados horizontalmente no contêiner porque display: flex define um modelo de layout flexível.</p>
   
   <p>Você também pode usar várias propriedades e valores, como justify-content e align-items, para personalizar o alinhamento e a distribuição dos elementos filhos no contêiner usando display: flex.</p>
   

   <b><p>* Texto escrito com a ajuda de um tradutor. Se encontrar algum erro, por favor, avise-nos *</p></b>
    
    <div className='ads-container'>  
      {/*  реклама  */}
      </div>
    </div>
  )
}

export default PtHtml_6;