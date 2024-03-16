import React from 'react';

function PtJquery() {
  return (
    <div>
      <div className='ad-container'>  
          {/*  реклама  */}
        </div> 

        <h1>JavaScript(JQuery)</h1>

<p>jQuery é uma biblioteca JavaScript que simplifica o processo de escrever código JavaScript e trabalhar com documentos HTML. Foi criada em 2006 por John Resig e atualmente é uma das bibliotecas JavaScript mais populares.</p>

<p>jQuery fornece uma variedade de funções para trabalhar com o Document Object Model (DOM), bem como para trabalhar com AJAX (JavaScript e XML Assíncronos) e criar animações. Também simplifica a escrita de código compatível com vários navegadores, pois a biblioteca jQuery lida automaticamente com problemas de compatibilidade entre navegadores.</p>

<p>Aqui estão alguns exemplos de como o jQuery pode ser usado:</p>

<p>Manipulando elementos do DOM:</p>

<code>
  <p><span className='green'>// Alterando o texto de um elemento com ID "myElement"</span></p>

  <p><span className='blueviole'>$</span>(<span className='blue1'>'#myElement'</span>).<span className='blue'>text</span>(<span className='blue1'>'Novo Texto'</span>); </p>

  <p><span className='green'>// Adicionando um novo elemento à página</span> </p>

  <p><span className='blueviole'>$</span>(<span className='blue1'>'body'</span>).<span className='blue'>append</span>(<span className='blue1'>'{'<'}div{'>'}Novo Elemento{'</'}div{'>'}'</span>); </p>
</code>

<p>2. Manipulando eventos:</p>

<code>
  <p><span className='green'>// Manipulando o evento de clique de um botão com ID "myButton"</span></p>

  <p><span className='blueviole'>$</span>(<span className='blue1'>'#myButton'</span>).<span className='blue'>click</span>{'('}<span className='red'>function</span>() {"{"}</p>

  <p>&nbsp;<span className='blueviole'>alert</span>(<span className='blue1'>'Botão clicado!'</span>);</p>

  <p>{"});"}</p>
</code>

<p>3. Trabalhando com AJAX:</p>

<code>
  <p><span className='green'>// Fazendo uma solicitação AJAX para um servidor e atualizando um elemento da página com a resposta </span></p>

  <p> <span className='blueviole'>$</span>.<span className='blue'>get</span>{'('}<span className='blue1'>'https://exemplo.com/api/dados'</span>, <span className='red'>function</span>(resposta) {"{"}</p>

  <p><span className='blueviole'>$</span>(<span className='blue1'>'#myElement'</span>).<span className='blue'>text</span>(resposta); </p>

  <p>{" }); "}</p>
</code>

<p>No geral, jQuery é uma ferramenta poderosa e versátil para simplificar o desenvolvimento JavaScript e facilitar a criação de páginas da web dinâmicas e interativas.</p>

<b>Para incluir o jQuery em um documento HTML, você pode seguir as seguintes etapas:</b>

<p>1. Baixe a biblioteca jQuery no site oficial <a href="https://jquery.com/download/" target='_blank' > 👉🏼 (https://jquery.com/download/)</a> ou use um link CDN (Content Delivery Network).</p>

<p>2. Crie um novo arquivo HTML e adicione o seguinte código dentro da seção "head" do seu documento HTML para incluir a biblioteca jQuery:</p>

<code>
  <p>{'<'}<span className='green'>head</span>{'>'}</p>

  <p>&nbsp;{'<'}<span className='green'>script</span> <span className='blue'>src</span>=<span className='blue1'>"caminho/para/jquery.js"</span>{'>'}{'</'}<span className='green'>script</span>{'>'}</p>

  <p>{'</'}<span className='green'>head</span>{'>'}</p>
</code>

<p>Substitua "caminho/para/jquery.js" pelo caminho real onde a biblioteca jQuery está armazenada em seu servidor, ou use o link CDN:</p>

<code>
  <p>{'<'}<span className='green'>head</span>{'>'}</p>

  <p>&nbsp;{'<'}<span className='green'>script</span> <span className='blue'>src</span>=<span className='blue1'>"https://code.jquery.com/jquery-3.6.0.min.js"</span>{'>'}{'</'}<span className='green'>script</span>{'>'}</p>

  <p>{'</'}<span className='green'>head</span>{'>'}</p>
</code>

<p>3. Depois de incluir a biblioteca jQuery em seu documento HTML, você pode começar a usá-la escrevendo código JavaScript que faça referência à biblioteca jQuery.</p>

<p>Por exemplo, para alterar o texto de um elemento HTML com um ID "myElement", você pode usar o seguinte código:</p>

<code>
  <p>{'<'}<span className='green'>body</span>{'>'}</p>

  <p>&nbsp;{'<'}<span className='green'>div</span> <span className='blue'>id</span>=<span className='blue1'>"myElement"</span>{'>'}Olá Mundo!{'</'}<span className='green'>div</span>{'>'}</p>

  <p>&nbsp;{'<'}<span className='green'>script</span>{'>'}</p>

  <p>&nbsp;&nbsp;{'$(document).ready(function() {'}</p>

  <p>&nbsp;&nbsp;&nbsp;<span className='blueviole'>$</span>(<span className='blue1'>"#myElement"</span>).<span className='blue'>text</span>(<span className='blue1'>"Novo texto!"</span>);</p>

  <p>&nbsp;&nbsp;{'});'}</p>

  <p>&nbsp;{'</'}<span className='green'>script</span>{'>'}</p>

  <p>{'</'}<span className='green'>body</span>{'>'}</p>
</code>

<p>Neste exemplo, estamos usando jQuery para selecionar o elemento com o ID "myElement" e alterar seu texto para "Novo texto!". O código está envolvido em uma função document ready, que garante que o código seja executado apenas após o carregamento completo do documento.</p>

<p>No geral, incluir o jQuery em um documento HTML é um processo simples que envolve referenciar a biblioteca jQuery e escrever código JavaScript que usa a biblioteca para manipular elementos HTML.</p>

<p>A sintaxe do jQuery é uma combinação de seletores no estilo CSS e código JavaScript, o que facilita a seleção e manipulação de elementos HTML. Aqui estão alguns exemplos da sintaxe do jQuery:</p>

<p><b>1. Selecionando elementos</b></p>

<p>Para selecionar um elemento HTML, você pode usar a função jQuery, que recebe um seletor no estilo CSS como argumento. Por exemplo, para selecionar todos os elementos "p" na página, você pode usar o seguinte código:</p>

<code><p><span className='blueviole'>$</span>(<span className='blue1'>'p'</span>) </p> </code>

<p>Você também pode encadear seletores para selecionar elementos com base em seu relacionamento com outros elementos. Por exemplo, para selecionar todos os elementos "p" que são filhos de um elemento "div", você pode usar o seguinte código:</p>

<code><p><span className='blueviole'>$</span>(<span className='blue1'>'div {'>'} p'</span>)</p></code>

<p><b>2. Modificando elementos</b></p>

<p>Depois de selecionar um elemento, você pode modificar seu conteúdo, atributos e propriedades CSS usando jQuery. Por exemplo, para alterar o texto de todos os elementos "p" na página, você pode usar o seguinte código:</p>

<code>
  <p><span className='blueviole'>$</span>(<span className='blue1'>'p'</span>).<span className='blue'>text</span>(<span className='blue1'>'Novo texto'</span>)</p>

  <p>Para adicionar uma <span className='green'>classe</span> a um elemento, você pode usar o método <span className='blue1'>"addClass"</span>:</p>

  <p><span className='blueviole'>$</span>(<span className='blue1'>'p'</span>).<span className='blue'>addClass</span>(<span className='blue1'>'destaque'</span>)</p>
</code>

<p><b>3. Manipulando eventos</b></p>

<p>Você pode usar o jQuery para manipular eventos como cliques, passagens do mouse e pressionamentos de tecla. Por exemplo, para manipular o evento de clique de um botão com um ID "myButton", você pode usar o seguinte código:</p>

<code>
  <p><span className='blueviole'>$</span>(<span className='blue1'>'#myButton'</span>).<span className='blue'>click</span>{'('}<span className='red'>function</span>() {"{"}</p>    
    
  <p>&nbsp;<span className='blueviole'>alert</span>(<span className='blue1'>'Botão clicado!'</span>) </p> 
    
  <p>{"})"}</p>
</code>

<p><b>4. Trabalhando com AJAX</b></p>

<p>O jQuery facilita o trabalho com solicitações AJAX. Por exemplo, para fazer uma solicitação GET para uma URL e lidar com a resposta, você pode usar o seguinte código:</p>

<code>
  <p>$.<span className='blue'>get</span>{'('}<span className='blue1'>'https://exemplo.com/dados'</span>, <span className='red'>function</span>(resposta) {"{"}</p>

  <p>&nbsp;{"console"}.<span className='blue'>log</span>(resposta)</p>

  <p>{"}) "}</p>
</code>

<p>No geral, a sintaxe do jQuery é fácil de aprender e usar, e fornece uma maneira poderosa de manipular elementos HTML e lidar com eventos em suas aplicações web.</p>

<p><b>Os métodos de travessia do jQuery são usados para navegar e encontrar elementos em uma árvore DOM. Seguem alguns exemplos de métodos de travessia que lidam com elementos irmãos.</b></p>    

<p><b>1. Método next():</b> </p>

<p>O método next() retorna o próximo elemento irmão do elemento selecionado. Por exemplo:</p>

<code>
  <p><span className='blueviole'>$</span>(document).<span className='blue'>ready</span>{'('}<span className='red'>function</span>() {'{'}</p> 

  <p>&nbsp;<span className='blueviole'>$</span>(<span className='blue1'>"h2"</span>).<span className='blue'>next</span>().<span className='blue'>css</span>(<span className='blue1'>"background-color", "yellow"</span>); </p>

  <p>{'}); '}</p>
</code>

<p>Este código seleciona todos os elementos "h2" e aplica um estilo CSS ao próximo elemento irmão alterando sua cor de fundo para amarelo.</p>

<p><b>2. Método prev():</b></p>

<p>O método prev() retorna o elemento irmão anterior do elemento selecionado. Por exemplo:</p>

<code>
  <p><span className='blueviole'>$</span>(document).<span className='blue'>ready</span>{'('}<span className='red'>function</span>() {'{'}</p> 

  <p>&nbsp;<span className='blueviole'>$</span>(<span className='blue1'>"h2"</span>).<span className='blue'>prev</span>().<span className='blue'>css</span>(<span className='blue1'>"background-color", "yellow"</span>); </p>

  <p>{'});'}</p>
</code>

<p>Este código seleciona todos os elementos "h2" e aplica um estilo CSS ao elemento irmão anterior alterando sua cor de fundo para amarelo.</p>
 
<b>3. Método nextAll():</b>

<p>O método nextAll() retorna todos os elementos irmãos seguintes do elemento selecionado. Por exemplo:</p>

<code>
  <p><span className='blueviole'>$</span>(document).<span className='blue'>ready</span>{'('}<span className='red'>function</span>() {'{'}</p> 

  <p>&nbsp;<span className='blueviole'>$</span>(<span className='blue1'>"h2"</span>).<span className='blue'>nextAll</span>().<span className='blue'>css</span>(<span className='blue1'>"background-color", "yellow"</span>); </p>

  <p>{'}); '}</p>
</code>

<p>Este código seleciona todos os elementos "h2" e aplica um estilo CSS a todos os seus elementos irmãos seguintes alterando sua cor de fundo para amarelo.</p>

<b>4. Método prevAll():</b> 

<p>O método prevAll() retorna todos os elementos irmãos anteriores do elemento selecionado. Por exemplo:</p>

<code>
  <p><span className='blueviole'>$</span>(document).<span className='blue'>ready</span>{'('}<span className='red'>function</span>() {'{'}</p> 

  <p>&nbsp;<span className='blueviole'>$</span>(<span className='blue1'>"h2"</span>).<span className='blue'>prevAll</span>().<span className='blue'>css</span>(<span className='blue1'>"background-color", "yellow"</span>); </p>

  <p>{'}); '}</p>
</code>

<p>Este código seleciona todos os elementos "h2" e aplica um estilo CSS a todos os elementos irmãos anteriores, alterando sua cor de fundo para amarelo</p>

<b>5. Método siblings():</b>

<p>O método siblings() retorna todos os elementos irmãos do elemento selecionado. Por exemplo:</p>

<code>
  <p><span className='blueviole'>$</span>(document).<span className='blue'>ready</span>{'('}<span className='red'>function</span>() {'{'}</p> 

  <p>&nbsp;<span className='blueviole'>$</span>(<span className='blue1'>"h2"</span>).<span className='blue'>siblings</span>().<span className='blue'>css</span>(<span className='blue1'>"background-color", "yellow"</span>); </p>

  <p>{'}); '}</p>
</code>

<p>Este código seleciona todos os elementos "h2" e aplica um estilo CSS a todos os elementos irmãos, alterando sua cor de fundo para amarelo.</p>

<p>No geral, esses métodos de travessia permitem navegar e selecionar facilmente elementos irmãos de um elemento HTML, o que pode ser útil para diversos propósitos, como estilização ou modificação de conteúdo</p>

<p><b>JQuery (CSS)</b></p>

<code>
  <p><span className='blueviole'>$</span>(document).<span className='blue'>ready</span>{'('}<span className='red'>function</span>() {'{'}</p> 

  <p>&nbsp;<span className='blueviole'>$</span>(<span className='blue1'>".box"</span>).<span className='blue'>click</span>{'('}<span className='red'>function</span>() {'{'}</p>

  <p>&nbsp;&nbsp;<span className='blueviole'>$</span>(<span className='red'>this</span>).<span className='blue'>css</span>(<span className='blue1'>"background-color", "red"</span>);</p>

  <p>&nbsp;&nbsp;{'});'}</p>

  <p>{'});'}</p>
</code>

<p>Este código seleciona o elemento com a classe "box" usando o seletor jQuery ".box". Em seguida, ele anexa um manipulador de evento de clique a esse elemento usando o método click(). Dentro da função do manipulador de evento, usamos o método css() para alterar a cor de fundo do elemento para vermelho.</p>

<p>Então, quando o elemento da caixa é clicado, sua cor de fundo muda de azul para vermelho. Também podemos usar o método css() para alterar outras propriedades CSS como font-size, border-width, etc.</p>

<p>Aqui está outro exemplo que demonstra como alterar várias propriedades CSS usando o método css():</p>

<code>
  <p><span className='blueviole'>$</span>(document).<span className='blue'>ready</span>{'('}<span className='red'>function</span>() {'{'}</p>

  <p>&nbsp;<span className='blueviole'>$</span>(<span className='blue1'>".box"</span>).<span className='blue'>css</span>{'({'}</p>

  <p>&nbsp;&nbsp;<span className='blue1'>"background-color"</span>: <span className='blue1'>"green"</span>,</p>

  <p>&nbsp;&nbsp;<span className='blue1'>"width"</span>: <span className='blue1'>"150px"</span>, </p>

  <p>&nbsp;&nbsp;<span className='blue1'>"height"</span>: <span className='blue1'>"150px"</span>, </p>

  <p>&nbsp;&nbsp;<span className='blue1'>"border"</span>: <span className='blue1'>"2px solid black"</span> </p>

  <p>&nbsp;{' });'}</p>

  <p>{'});'}</p>
</code>

<p>Este código seleciona todos os elementos com a classe "box" e altera sua cor de fundo para verde, largura e altura para 150px, e adiciona uma borda sólida preta de 2px.</p>

<p>No geral, usar jQuery para manipular CSS fornece uma maneira poderosa de estilizar dinamicamente elementos HTML com base em interações do usuário ou outros eventos.</p>

<b>JQuery ($.each)</b>

<p>O método $.each() no jQuery é usado para iterar sobre arrays e objetos. Aqui está um exemplo que demonstra como usá-lo:</p>

<p>Suponha que tenhamos um array de números e queremos iterar sobre cada elemento do array e imprimir seu valor no console:</p>
    
<code>
  <p><span className='red'>var</span> numbers = [<span className='blue1'>1, 2, 3, 4, 5</span>]; </p>

  <p>$.<span className='blue'>each</span>{'('}numbers, <span className='red'>function</span>(index, value){'{'}</p>

  <p>&nbsp;{'console'}.<span className='blue'>log</span>(<span className='blue1'>"Elemento no índice "</span> + index + <span className='blue1'>" é "</span> + value);</p>

  <p>{'});'}</p>
</code>

<p>Neste código, passamos o array de números para o método $.each() junto com uma função de retorno de chamada que recebe dois argumentos: o índice do elemento atual e o valor do elemento atual. Dentro da função de retorno de chamada, usamos console.log() para imprimir o índice e o valor do elemento atual no console.</p>
    
<p>A saída deste código seria:</p>

<code>
  <p>Elemento no índice <span className='blue1'>0</span> é <span className='blue1'>1</span></p>

  <p>Elemento no índice <span className='blue1'>1</span> é <span className='blue1'>2</span></p>

  <p>Elemento no índice <span className='blue1'>2</span> é <span className='blue1'>3</span></p>

  <p>Elemento no índice <span className='blue1'>3</span> é <span className='blue1'>4</span></p>

  <p>Elemento no índice <span className='blue1'>4</span> é <span className='blue1'>5</span></p>
</code>

<p>Aqui está outro exemplo que demonstra como usar $.each() com um objeto:</p>

<p>Suponha que tenhamos um objeto representando os detalhes de uma pessoa e queremos iterar sobre suas propriedades e imprimir seus valores no console:</p>

<code>
  <p><span className='red'>var</span> person = {'{'}</p>

  <p>&nbsp;<span className='blue'>nome</span>: <span className='blue1'>"John"</span>,</p>

  <p>&nbsp;<span className='blue'>idade</span>: <span className='blue1'>30</span>, </p>

  <p>&nbsp;<span className='blue'>profissao</span>: <span className='blue1'>"Desenvolvedor"</span> </p>

  <p>{'};'}</p>

  <p>$.<span className='blue'>each</span>{'('}person, <span className='red'>function</span>(chave, valor){'{'}</p>

  <p>&nbsp;{'console'}.<span className='blue'>log</span>(chave + ": " + valor);</p>

  <p>{'});'}</p>
</code>

<p>Neste código, passamos o objeto person para o método $.each() junto com uma função de retorno de chamada que recebe dois argumentos: a chave da propriedade atual e o valor da propriedade atual. Dentro da função de retorno de chamada, usamos console.log() para imprimir a chave e o valor da propriedade atual no console.</p>

<p>A saída deste código seria:</p>

<code>
  <p><span className='blue'>nome</span>: John </p>

  <p><span className='blue'>idade</span>: <span className='blue1'>30</span> </p>

  <p><span className='blue'>profissão</span>: Desenvolvedor</p>
</code>

<p>No geral, o método $.each() no jQuery fornece uma maneira conveniente de iterar sobre arrays e objetos e realizar operações em seus elementos.</p>

<b>Eventos do jQuery</b>

<p>O jQuery fornece um rico conjunto de métodos de manipulação de eventos que permitem aos desenvolvedores anexar manipuladores de eventos a elementos HTML e responder a interações do usuário, como cliques do mouse, entrada do teclado e envios de formulários.</p>
    
<p>Aqui está um exemplo que demonstra como usar o método click() no jQuery para anexar um manipulador de eventos de clique a um elemento de botão e responder ao usuário clicando no botão:</p>    
    
<code>
  <p>{'<'}!<span className='blue'>DOCTYPE</span> <span className='blue1'>html</span>{'>'}</p>

  <p>{'<'}<span className='green'>html</span>{'>'}</p>  

  <p>{'<'}<span className='green'>head</span>{'>'}</p>

  <p>&nbsp;{'<'}<span className='green'>title</span>{'>'}Exemplo de Evento jQuery{'</'}<span className='green'>title</span>{'>'}</p>

  <p>{'<'}<span className='green'>script</span> <span className='blue'>src</span>=<span className='blue1'>"https://code.jquery.com/jquery-3.6.0.min.js"</span>{'>'}{'</'}<span className='green'>script</span>{'>'}</p>

  <p>{'</'}<span className='green'>head</span>{'>'}</p>

  <p>{'<'}<span className='green'>body</span>{'>'}</p>

  <p>&nbsp;{'<'}<span className='green'>button</span> <span className='blue'>id</span>=<span className='blue1'>"myButton"</span>{'>'}Clique em mim!{'</'}<span className='green'>button</span>{'>'}</p>

  <p>{'<'}<span className='green'>script</span>{'>'}</p>

  <p>&nbsp;{'$(document).ready(function(){'}</p>

  <p>&nbsp;<span className='blueviole'>$</span>(<span className='blue1'>"#myButton"</span>).<span className='blue'>click</span>{'('}<span className='red'>function</span>(){'{'}</p>

  <p>&nbsp;<span className='blueviole'>alert</span>(<span className='blue1'>"Botão clicado!"</span>);</p>

  <p>&nbsp;{'});'}</p>

  <p>{'});'}</p>

  <p>{'</'}<span className='green'>script</span>{'>'}</p>

  <p>{'</'}<span className='green'>body</span>{'>'}</p>

  <p>{'</'}<span className='green'>html</span>{'>'}</p>
</code>    

<p>Neste código, incluímos a biblioteca jQuery na seção head do documento HTML e anexamos um manipulador de eventos <b>click()</b> ao elemento de botão usando o seletor de ID <b>#myButton</b>. Dentro da função de manipulador de eventos, usamos o método <b>alert()</b> para exibir uma caixa de mensagem com o texto "Botão clicado!".</p>

<p>Quando o usuário clica no botão, o evento <b>click()</b> é acionado e a função do manipulador de eventos é executada, exibindo a caixa de mensagem.</p>

<p>Aqui está outro exemplo que demonstra como usar o método <b>submit()</b> no jQuery para anexar um manipulador de eventos de envio a um elemento de formulário e impedir o comportamento padrão de envio do formulário:</p>

<code>
  <p>{'<'}!<span className='blue'>DOCTYPE</span> <span className='blue1'>html</span>{'>'}</p>

  <p>{'<'}<span className='green'>html</span>{'>'}</p> 

  <p>{'<'}<span className='green'>head</span>{'>'}</p>

  <p>&nbsp;{'<'}<span className='green'>title</span>{'>'}Exemplo de Evento jQuery{'</'}<span className='green'>title</span>{'>'}</p>

  <p>{'<'}<span className='green'>script</span> <span className='blue'>src</span>=<span className='blue1'>"https://code.jquery.com/jquery-3.6.0.min.js"</span>{'>'}{'</'}<span className='green'>script</span>{'>'}</p>

  <p>{'</'}<span className='green'>head</span>{'>'}</p>

  <p>{'<'}<span className='green'>body</span>{'>'}</p>

  <p>{'<'}<span className='green'>form</span> <span className='blue'>id</span>=<span className='blue1'>"myForm"</span>{'>'}</p>

  <p>&nbsp;{'<'}<span className='green'>label</span> <span className='blue'>for</span>=<span className='blue1'>"name"</span>{'>'}Nome:{'</'}<span className='green'>label</span>{'>'}</p>

  <p>&nbsp;{'<'}<span className='green'>input</span> <span className='blue'>type</span>=<span className='blue1'>"text"</span> <span className='blue'>id</span>=<span className='blue1'>"name"</span> <span className='blue'>name</span>=<span className='blue1'>"name"</span>{'><'}<span className='green'>br</span>{'><'}<span className='green'>br</span>{'>'}</p>

  <p>&nbsp;{'<'}<span className='green'>label</span> <span className='blue'>for</span>=<span className='blue1'>"email"</span>{'>'}Email:{'</'}<span className='green'>label</span>{'>'}</p>

  <p>&nbsp;{'<'}<span className='green'>input</span> <span className='blue'>type</span>=<span className='blue1'>"email"</span> <span className='blue'>id</span>=<span className='blue1'>"email"</span> <span className='blue'>name</span>=<span className='blue1'>"email"</span>{'><'}<span className='green'>br</span>{'><'}<span className='green'>br</span>{'>'}</p>

  <p>&nbsp;{'<'}<span className='green'>input</span> <span className='blue'>type</span>=<span className='blue1'>"submit"</span> <span className='blue'>value</span>=<span className='blue1'>"Enviar"</span>{'>'}</p>

  <p>{'</'}<span className='green'>form</span>{'>'}</p>

  <p>{'<'}<span className='green'>script</span>{'>'}</p>

  <p>&nbsp;{'$(document).ready(function(){'}</p>

  <p>&nbsp;<span className='blueviole'>$</span>(<span className='blue1'>"#myForm"</span>).<span className='blue'>submit</span>{'('}<span className='red'>function</span>(event){'{'}</p>

  <p>&nbsp;event.<span className='blue'>preventDefault</span>();</p>

  <p>&nbsp;<span className='blueviole'>alert</span>(<span className='blue1'>"Formulário enviado!"</span>);</p>

  <p>&nbsp;{'});'}</p>

  <p>{' });'}</p>

  <p>{'</'}<span className='green'>script</span>{'>'}</p>

  <p>{'</'}<span className='green'>body</span>{'>'}</p>

  <p>{'</'}<span className='green'>html</span>{'>'}</p>
</code>

<p>Neste código, anexamos um manipulador de eventos <b>submit()</b> ao elemento de formulário usando o seletor de ID <b>#myForm</b>. Dentro da função do manipulador de eventos, usamos o método <b>preventDefault()</b> para evitar o comportamento padrão de envio do formulário, que recarregaria a página. Em vez disso, exibimos uma caixa de mensagem com o texto "Formulário enviado!". </p>
    
<p>Quando o usuário envia o formulário, o evento <b>submit()</b> é acionado, e a função do manipulador de eventos é executada, evitando o comportamento padrão de envio do formulário e exibindo a caixa de mensagem.</p>    

<p>No geral, os métodos de manipulação de eventos no jQuery fornecem uma maneira poderosa de lidar com interações do usuário e responder a eventos de forma consistente e compatível com vários navegadores.</p>    

<b><p>* Texto escrito com a ajuda de um tradutor. Se encontrar algum erro, por favor, avise-nos *</p></b>
    
    <div className='ads-container'>  
      {/*  реклама  */}
      </div>

    </div>
  )
}

export default PtJquery;