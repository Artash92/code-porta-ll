import React from 'react';

function PtHtml_3() {
  return (
    <div>
      <div className='ad-container'>  
          {/*  реклама  */}
        </div> 

        <h1>Compreensão das Meta Tags em HTML - Um Guia para Iniciantes</h1>

<p>1. <b>charset:</b> O atributo charset especifica a codificação de caracteres para o documento HTML. É importante garantir que a codificação esteja definida corretamente para garantir que caracteres especiais sejam exibidos corretamente.</p>

<p>Exemplo:</p>

<code><p>{'<'}<span className='green'>meta</span> <span className='blue'>charset</span>=<span className='blue1'>"UTF-8"</span>{'>'}</p></code>

<p>2. <b>name:</b> O atributo name é usado para definir o tipo de metadados fornecidos, como palavras-chave, descrição ou autor.</p>

<p>Exemplo:</p>

<code><p>{'<'}<span className='green'>meta</span> <span className='blue'>name</span>=<span className='blue1'>"description"</span> <span className='blue'>content</span>=<span className='blue1'>"Esta é uma descrição da minha página da web."</span>{'>'}</p></code>

<p>3. <b>content:</b> O atributo content é usado para especificar o valor dos metadados fornecidos.</p>

<p>Exemplo:</p>

<code><p>{'<'}<span className='green'>meta</span> <span className='blue'>name</span>=<span className='blue1'>"keywords"</span> <span className='blue'>content</span>=<span className='blue1'>"HTML, CSS, JavaScript"</span>{'>'}</p></code>

<p>4. <b>http-equiv:</b> O atributo http-equiv é usado para definir um cabeçalho HTTP para o documento HTML, como refresh ou content-type</p>

<p>Exemplo:</p>

<code><p>{'<'}<span className='green'>meta</span> <span className='blue'>http-equiv</span>=<span className='blue1'>"refresh"</span> <span className='blue'>content</span>=<span className='blue1'>"5"</span>{'>'}</p></code>
  
<p>5. <b>viewport:</b> O atributo viewport é usado para controlar o layout e a escala de uma página da web em diferentes dispositivos, como telefones celulares ou tablets.</p>

<p>Exemplo:</p>

<code><p>{'<'}<span className='green'>meta</span> <span className='blue'>name</span>=<span className='blue1'>"viewport"</span> <span className='blue'>content</span>=<span className='blue1'>"width=device-width, initial-scale=1.0"</span>{'>'}</p></code>

<h2>Como Usar Cores em HTML: Um Guia para Iniciantes.</h2>

<p>Cores em HTML podem ser definidas usando uma variedade de métodos, incluindo nomes de cores, valores hexadecimais, valores RGB e valores HSL.</p>

<b>1. Nomes de Cores:</b>

<p>O HTML fornece um conjunto de nomes de cores predefinidos que podem ser usados para especificar a cor de um elemento. Alguns exemplos de nomes de cores incluem "vermelho", "verde", "azul", "amarelo", "roxo" e "preto".</p>

    
<b>2. Valores Hexadecimais:</b>

<p>Um valor de cor hexadecimal é um código de seis dígitos que representa uma cor. Os dois primeiros dígitos representam a quantidade de vermelho na cor, os próximos dois dígitos representam a quantidade de verde na cor e os dois últimos dígitos representam a quantidade de azul na cor. Por exemplo, #FF0000 representa vermelho puro, #00FF00 representa verde puro e #0000FF representa azul puro.</p>

<b>3. Valores RGB:</b>

<p>Um valor de cor RGB é um conjunto de três números que representam a quantidade de vermelho, verde e azul em uma cor. Cada valor varia de 0 a 255. Por exemplo, rgb(255, 0, 0) representa vermelho puro, rgb(0, 255, 0) representa verde puro e rgb(0, 0, 255) representa azul puro.</p>

<b>4. Valores HSL:</b>

<p>Um valor de cor HSL é um conjunto de três números que representam o matiz, saturação e luminosidade de uma cor. O matiz é um grau na roda de cores (de 0 a 360), a saturação é um valor percentual (de 0% a 100%) e a luminosidade também é um valor percentual (de 0% a 100%). Por exemplo, hsl(0, 100%, 50%) representa vermelho puro, hsl(120, 100%, 50%) representa verde puro e hsl(240, 100%, 50%) representa azul puro.</p>

<h2>Princípios Básicos de CSS para Iniciantes: Uma Introdução às Folhas de Estilo em Cascata</h2>

<p>CSS significa Cascading Style Sheets e é uma linguagem usada para estilizar documentos HTML. CSS permite que você altere as cores, fontes, layout e outros aspectos de sua página da web. Funciona selecionando elementos HTML e aplicando estilos a eles.</p>

<p>Os estilos CSS são criados usando seletores, propriedades e valores. Os seletores direcionam elementos HTML específicos e podem ser usados para aplicar estilos a vários elementos de uma vez. As propriedades definem quais estilos você deseja aplicar e podem incluir coisas como tamanho da fonte, cor e preenchimento. Os valores especificam as configurações específicas para a propriedade, como uma cor ou tamanho específico.</p>

<p>Para vincular um arquivo CSS a um documento HTML, você pode usar a tag {'<link>'} na seção {'<head>'} do seu documento HTML.</p>

<p>Aqui está um exemplo de como vincular um arquivo CSS chamado "styles.css" ao seu documento HTML:</p>

<code>
  <p>{'<'}!<span className='blue'>DOCTYPE</span> <span className='blue1'>html</span>{'>'}</p>

  <p>{'<'}<span className='green'>html</span>{'>'}</p> 

  <p>{'<'}<span className='green'>head</span>{'>'}</p>

  <p>&nbsp;{'<'}<span className='green'>link</span> <span className='blue'>rel</span>=<span className='blue1'>"stylesheet"</span> <span className='blue'>type</span>=<span className='blue1'>"text/css"</span> <span className='blue'>href</span>=<span className='blue1'>"styles.css"</span>{'>'}</p>

  <p>{'</'}<span className='green'>head</span>{'>'}</p>

  <p>{'<'}<span className='green'>body</span>{'>'}</p>

  <p>&nbsp;{'<!-- seu conteúdo HTML aqui -->'}</p>

  <p>{'</'}<span className='green'>body</span>{'>'}</p>

  <p>{'</'}<span className='green'>html</span>{'>'}</p>
</code>

    
<p>Aqui está um exemplo de código CSS:</p>

<code>
    <p>{'h1 {'}</p>

    <p><span className='blue'>color</span>: <span className='blue1'>red</span>;</p>

    <p><span className='blue'>font-size</span>: <span className='blue1'>36px</span>; </p>

    <p><span className='blue'>text-align</span>: <span className='blue1'>center</span>; </p>

    <p>{'}'}</p>

    <p>{'p {'}</p>

    <p><span className='blue'>color</span>: <span className='blue1'>blue</span>; </p>

    <p><span className='blue'>font-size</span>: <span className='blue1'>16px</span>;</p>

    <p><span className='blue'>line-height</span>: <span className='blue1'>1.5</span>;</p>

    <p>{'}'}</p>
</code>

<p>Neste código, temos dois seletores <b>(h1 e p)</b> e várias propriedades e valores aplicados a cada um. O seletor <b>h1</b> aplica uma cor vermelha, tamanho de fonte de 36px e alinhamento de texto centralizado a todos os elementos <b>h1</b> na página. O seletor <b>p</b> aplica uma cor azul, tamanho de fonte de 16px e altura de linha 1.5 a todos os elementos <b>p</b> na página.</p>

<p>O CSS pode ser aplicado a documentos HTML de várias maneiras, incluindo estilos em linha, incorporados e folhas de estilo externas. Estilos em linha são aplicados diretamente ao elemento HTML usando o atributo <b>style</b>. Estilos incorporados são colocados na seção <b>head</b> do documento HTML usando a tag de estilo. Folhas de estilo externas são armazenadas em arquivos CSS separados e vinculadas ao documento HTML usando a tag <b>link</b>.</p>

<b><p>* Texto escrito com a ajuda de um tradutor. Se encontrar algum erro, por favor, avise-nos *</p></b>
    
    <div className='ads-container'>  
      {/*  реклама  */}
      </div>
    </div>
  )
}

export default PtHtml_3;