import React from 'react';
function PtHtml_1() {
  return (
    <div>
      <div className='ad-container'>  
          {/*  реклама  */}
        </div> 

        <h1>HTML</h1>

<p>O HTML, que significa Linguagem de Marcação de Hipertexto, é uma linguagem de marcação usada para criar e estruturar conteúdo na web. É a espinha dorsal de cada site e serve como os blocos de construção das páginas da web. HTML é uma linguagem declarativa, o que significa que é usada para descrever o conteúdo e a estrutura de uma página da web, mas não necessariamente sua aparência.</p>

<p>O HTML foi criado por Tim Berners-Lee no início da década de 1990 enquanto trabalhava no CERN, a Organização Europeia para a Pesquisa Nuclear. Berners-Lee estava procurando uma maneira de compartilhar e organizar informações entre pesquisadores, e o HTML foi a solução que ele encontrou. O HTML foi projetado para ser uma linguagem simples que poderia ser facilmente compreendida e usada por qualquer pessoa, independentemente de seu conhecimento técnico.</p>

<p>O HTML é composto por uma série de elementos, que são representados por tags. As tags são cercadas por colchetes angulares e são usadas para definir a estrutura e o conteúdo de uma página da web. Por exemplo, a tag {'<head>'} é usada para definir a seção de cabeçalho de uma página da web, que normalmente contém informações como o título da página e links para folhas de estilo externas e scripts. A tag {'<body>'} é usada para definir a seção de corpo de uma página da web, que contém o conteúdo principal da página.</p>

<p>O HTML é uma linguagem em constante evolução, com novas versões sendo lançadas periodicamente. A versão atual do HTML é HTML5, que foi lançada em 2014. O HTML5 introduziu muitos novos recursos e capacidades, como tags de vídeo e áudio, elementos de tela para desenhar gráficos e tags semânticas para melhor acessibilidade e SEO.</p>

<p>Em resumo, o HTML é uma linguagem de marcação usada para criar e estruturar conteúdo na web. Foi criado por Tim Berners-Lee no início da década de 1990 e é a espinha dorsal de cada site. O HTML é composto por uma série de elementos representados por tags, e é uma linguagem em constante evolução, com novas versões sendo lançadas periodicamente.</p>

<p>1. Página da web simples com um título e um parágrafo:</p>

<code>
   <p>{'<'}!<span className='blue'>DOCTYPE</span> <span className='blue1'>html</span>{'>'}</p>
   <p>{'<'}<span className='green'>html</span>{'>'}</p> 
   <p>{'<'}<span className='green'>head</span>{'>'}</p>
   <p>&nbsp;{'<'}<span className='green'>title</span>{'>'}Minha Página na Web{'</'}<span className='green'>title</span>{'>'}</p>
   <p>{'</'}<span className='green'>head</span>{'>'}</p>
   <p>{'<'}<span className='green'>body</span>{'>'}</p>
   <p>&nbsp;{'<'}<span className='green'>h1</span>{'>'}Bem-vindo à minha página na web{'</'}<span className='green'>h1</span>{'>'}</p>
   <p>&nbsp;{'<'}<span className='green'>p</span>{'>'}Esta é a minha primeira página da web.{'</'}<span className='green'>p</span>{'>'}</p>
   <p>{'</'}<span className='green'>body</span>{'>'}</p>
   <p>{'</'}<span className='green'>html</span>{'>'}</p>
</code>

<p>Este é um exemplo de uma página da web simples que consiste em um título e um parágrafo. O título é representado pela tag "title" e o parágrafo pela tag "p". O título da página é exibido na barra de título do navegador e nos resultados do mecanismo de busca.</p>

<p>2. Imagem com texto alternativo e um link para outra página:</p>

<code>
    <p>{'<'}!<span className='blue'>DOCTYPE</span> <span className='blue1'>html</span>{'>'}</p>
    
    <p>{'<'}<span className='green'>html</span>{'>'}</p> 
   
    <p>{'<'}<span className='green'>head</span>{'>'}</p>  
   
    <p>&nbsp;{'<'}<span className='green'>title</span>{'>'}Minha Página na Web{'</'}<span className='green'>title</span>{'>'}</p> 
   
    <p>{'</'}<span className='green'>head</span>{'>'}</p> 
   
    <p>{'<'}<span className='green'>body</span>{'>'}</p> 
   
    <p>&nbsp;{'<'}<span className='green'>h1</span>{'>'}Bem-vindo à minha página na web{'</'}<span className='green'>h1</span>{'>'}</p>
   
    <p>&nbsp;{'<'}<span className='green'>p</span>{'>'}Esta é uma imagem de um gato:{'</'}<span className='green'>p</span>{'>'}</p>
   
    <p>&nbsp;{'<'}<span className='green'>img</span> <span className='blue'>src</span>=<span className='blue1'>"cat.jpg"</span> <span className='blue'>alt</span>=<span className='blue1'>"Um gato fofo"</span>{'>'}</p> 

    <p>&nbsp;{'<'}<span className='green'>p</span>{'>'}Clique {'<'}<span className='green'>a</span> <span className='blue'>href</span>=<span className='blue1'>"http://www.google.com"</span>{'>'}aqui{'</'}<span className='green'>a</span>{'>'} para ir para o Google.{'</'}<span className='green'>p</span>{'>'}</p> 

    <p>{'</'}<span className='green'>body</span>{'>'}</p> 

    <p>{'</'}<span className='green'>html</span>{'>'}</p>
  </code>

<p>Este exemplo inclui uma imagem de um gato, representada pela tag "img", com texto alternativo exibido caso a imagem não possa ser carregada. O link para o Google é representado pela tag "a" com o atributo "href" apontando para a URL da página de destino.</p>

<p>3. Formulário para inserir um nome e enviar dados para um servidor:</p>
    
<code>
    <p>{'<'}!<span className='blue'>DOCTYPE</span> <span className='blue1'>html</span>{'>'}</p>    
    
    <p>{'<'}<span className='green'>html</span>{'>'}</p>    

    <p>{'<'}<span className='green'>head</span>{'>'}</p>  

    <p>&nbsp;{'<'}<span className='green'>title</span>{'>'}Minha Página na Web{'</'}<span className='green'>title</span>{'>'}</p>   

    <p>{'</'}<span className='green'>head</span>{'>'}</p>  

    <p>{'<'}<span className='green'>body</span>{'>'}</p> 

    <p>&nbsp;{'<'}<span className='green'>h1</span>{'>'}Bem-vindo à Minha Página na Web{'</'}<span className='green'>h1</span>{'>'}</p> 

    <p>{'<'}<span className='green'>form</span>{'>'}</p> 

    <p>&nbsp;{'<'}<span className='green'>label</span> <span className='blue'>for</span>=<span className='blue1'>"name"</span>{'>'}Digite seu nome:{'</'}<span className='green'>label</span>{'>'}</p>  

    <p>&nbsp;{'<'}<span className='green'>input</span> <span className='blue'>type</span>=<span className='blue1'>"text"</span> <span className='blue'>id</span>=<span className='blue1'>"name"</span> <span className='blue'>name</span>=<span className='blue1'>"name"</span>{'><'}<span className='green'>br</span>{'><'}<span className='green'>br</span>{'>'}</p>  

    <p>&nbsp;{'<'}<span className='green'>input</span> <span className='blue'>type</span>=<span className='blue1'>"submit"</span> <span className='blue'>value</span>=<span className='blue1'>"Enviar"</span>{'>'}</p>  

    <p>{'</'}<span className='green'>form</span>{'>'}</p>  

    <p>{'</'}<span className='green'>body</span>{'>'}</p>   

    <p>{'</'}<span className='green'>html</span>{'>'}</p>   
 </code>

<p>Este exemplo mostra um formulário com um campo de entrada de texto para o usuário inserir seu nome. Quando o formulário é enviado, os dados são enviados para um servidor para processamento. A tag "label" fornece um rótulo de texto para o campo de entrada, e a tag "input" é usada para criar o campo de entrada e o botão de envio.</p>

<p>4. Lista ordenada de itens:</p>

<code>
    <p>{'<'}!<span className='blue'>DOCTYPE</span> <span className='blue1'>html</span>{'>'}</p>
    
    <p>{'<'}<span className='green'>html</span>{'>'}</p> 

    <p>{'<'}<span className='green'>head</span>{'>'}</p>

    <p>&nbsp;{'<'}<span className='green'>title</span>{'>'}Minha Página na Web{'</'}<span className='green'>title</span>{'>'}</p>

    <p>{'</'}<span className='green'>head</span>{'>'}</p> 

    <p>{'<'}<span className='green'>body</span>{'>'}</p> 

    <p>&nbsp;{'<'}<span className='green'>h1</span>{'>'}Bem-vindo à Minha Página na Web{'</'}<span className='green'>h1</span>{'>'}</p> 

    <p>&nbsp;{'<'}<span className='green'>h2</span>{'>'}Meus alimentos favoritos:{'</'}<span className='green'>h2</span>{'>'}</p> 

    <p>{'<'}<span className='green'>ol</span>{'>'}</p>

    <p>&nbsp;{'<'}<span className='green'>li</span>{'>'}Pizza{'</'}<span className='green'>li</span>{'>'}</p>

    <p>&nbsp;{'<'}<span className='green'>li</span>{'>'}Hamburgueres{'</'}<span className='green'>li</span>{'>'}</p>

    <p>&nbsp;{'<'}<span className='green'>li</span>{'>'}Sorvete{'</'}<span className='green'>li</span>{'>'}</p>

    <p>{'</'}<span className='green'>ol</span>{'>'}</p> 

    <p>{'</'}<span className='green'>body</span>{'>'}</p> 

    <p>{'</'}<span className='green'>html</span>{'>'}</p>
 </code>

<p>Este exemplo mostra uma lista ordenada de itens representados pela tag "ol", com cada item representado pela tag "li". Os números da lista são gerados automaticamente pelo navegador.</p>

<p>5. Lista não ordenada de itens:</p>

<code>
  <p>{'<'}!<span className='blue'>DOCTYPE</span> <span className='blue1'>html</span>{'>'}</p>
  <p>{'<'}<span className='green'>html</span>{'>'}</p>
  <p>{'<'}<span className='green'>head</span>{'>'}</p>
  <p>&nbsp;{'<'}<span className='green'>title</span>{'>'}Minha Página na Web{'</'}<span className='green'>title</span>{'>'}</p>
  <p>{'</'}<span className='green'>head</span>{'>'}</p>
  <p>{'<'}<span className='green'>body</span>{'>'}</p>
  <p>&nbsp;{'<'}<span className='green'>h1</span>{'>'}Bem-vindo à Minha Página na Web{'</'}<span className='green'>h1</span>{'>'}</p> 
  <p>&nbsp;{'<'}<span className='green'>h2</span>{'>'}Meus filmes favoritos:{'</'}<span className='green'>h2</span>{'>'}</p> 
  <p>{'<'}<span className='green'>ul</span>{'>'}</p>
  <p>&nbsp;{'<'}<span className='green'>li</span>{'>'}Um Sonho de Liberdade{'</'}<span className='green'>li</span>{'>'}</p>
  <p>&nbsp;{'<'}<span className='green'>li</span>{'>'}O Poderoso Chefão{'</'}<span className='green'>li</span>{'>'}</p>
  <p>&nbsp;{'<'}<span className='green'>li</span>{'>'}Batman: O Cavaleiro das Trevas{'</'}<span className='green'>li</span>{'>'}</p>
  <p>{'</'}<span className='green'>ul</span>{'>'}</p> 
  <p>{'</'}<span className='green'>body</span>{'>'}</p>
  <p>{'</'}<span className='green'>html</span>{'>'}</p> 
</code>

<p>Este exemplo mostra uma lista não ordenada de itens representados pela tag "ul", com cada item representado pela tag "li". Os itens da lista são exibidos com marcadores por padrão.</p> 

<p>Para aumentar ainda mais a compreensão deles sobre o HTML, os alunos podem ser direcionados a recursos adicionais, como a documentação no <b>MDN Web Docs</b> ou no <b>W3Schools</b>.</p> 

<p>Para adicionar um link para o MDN Web Docs em seu site, use o seguinte código HTML:</p> 

<p><a href="https://developer.mozilla.org/pt-BR/docs/Web/HTML "target='_blank'> <b> &#x1F44D; MDN Web Docs</b></a></p> 

<p>Para adicionar um link para o W3Schools em seu site, use o seguinte código HTML:</p>  

<p><a href="https://www.w3schools.com/html/" target='_blank' > <b>&#x1F44D; W3Schools</b></a></p>

<p>Tanto o MDN Web Docs quanto o W3Schools fornecem documentação abrangente e detalhada sobre o HTML e tecnologias relacionadas, bem como tutoriais interativos e exemplos. Os alunos podem usar esses recursos para aprofundar seu conhecimento sobre HTML e melhorar suas habilidades de desenvolvimento web.</p>

    <b><p>* Texto escrito com a ajuda de um tradutor. Se encontrar algum erro, por favor, avise-nos *</p></b>
    
    <div className='ads-container'>  
      {/*  реклама  */}
      </div>
    </div>
  )
}

export default PtHtml_1;