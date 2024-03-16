import React from 'react';

function PtReact_4() {
  return (
    <div>

        <div className='ad-container'>  
          {/*  реклама  */}
        </div> 

      <h1>Obter Dados no React</h1>

<p>1. Obter dados usando a API fetch:</p>

<code> 
  <p><span className='blueviole'>fetch</span>(<span className='blue1'>'https://api.example.com/data'</span>)</p>

  <p>.<span className='blue'>then</span>(response {'=>'} response.<span className='blue'>json</span>()) </p>

  <p>.<span className='blue'>then</span>(data {'=>'} console.<span className='blue'>log</span>(data))</p>

  <p>.<span className='blue'>catch</span>(error {'=>'} console.<span className='blue'>error</span>(error)) </p>
</code>
  
<p>Neste exemplo, estamos fazendo uma solicitação a um servidor usando a API <b>fetch</b>. O objeto <b>response</b> é convertido para o formato JSON usando o método <b>json()</b>, e os dados resultantes são registrados no console. Se ocorrer um erro, ele é capturado e registrado no console.</p>


<p>2. Exibir os dados obtidos no estado do componente:</p>

<code>
  <p><span className='red'>import</span> {'React, { useState, useEffect } '} <span className='red'>from</span> <span className='blue1'>'react'</span>;   </p>

  <p><span className='red'>function</span> <span className='blueviole'>MyComponent</span>() {'{'}</p>

  <p><span className='red'>const</span> [data, setData] = <span className='blueviole'>useState</span>([]);</p>

  <p><span className='blueviole'>useEffect</span>{'(() => {'}</p>

  <p><span className='blueviole'>fetch</span>(<span className='blue1'>'https://api.example.com/data'</span>)</p>

  <p>.<span className='blue'>then</span>(response {'=>'} response.<span className='blue'>json</span>())</p>

  <p>.<span className='blue'>then</span>(data {'=>'} <span className='blueviole'>setData</span>(data))</p>

  <p>.<span className='blue'>catch</span>(error {'=>'} console.<span className='blue'>error</span>(error)); </p>

  <p>{'}, []);'}</p>

  <p><span className='red'>return</span> {'('}</p>

  <p>{'<'}<span className='green'>div</span>{'>'}</p>

  <p>{'{'}data.<span className='blue'>map</span>{'(item => ('}</p>

  <p>{'<'}<span className='green'>p</span> key={'{item.'}<span className='blue'>id</span>{'}>'}{'{item.'}<span className='blue'>name</span>{'}</'}<span className='green'>p</span>{'>'}</p>

  <p>{'))} '}</p>

  <p>{'</'}<span className='green'>div</span>{'>'}</p>

  <p>&nbsp;{');'}</p>

  <p>{'}'}</p>
</code>    


<p>Neste exemplo, estamos usando o gancho <b>useState</b> para definir uma variável de estado chamada <b>data</b>. Também estamos usando o gancho <b>useEffect</b> para obter dados do servidor quando o componente é montado e atualizar a variável de estado <b>data</b> com os dados obtidos. Finalmente, estamos usando o método <b>map</b> para percorrer a matriz de dados e exibir cada item como um elemento de parágrafo.</p>

<h1>Axios</h1>

<p>Tanto Fetch quanto Axios são bibliotecas JavaScript usadas para fazer requisições HTTP a partir do navegador ou do ambiente Node.js. No entanto, existem algumas diferenças entre os dois.</p>

<p>O Fetch é uma API de navegador integrada que usa promessas para lidar com requisições e respostas. Ele possui uma sintaxe mais simples e é mais fácil de usar para requisições simples, mas carece de algumas funcionalidades avançadas como cancelamento de requisição, eventos de progresso e tentativas de requisição automáticas.</p>

<p>O Axios é uma biblioteca de terceiros popular que fornece uma API mais rica em recursos e poderosa para fazer requisições HTTP. Ele suporta cancelamento de requisição, eventos de progresso e tentativas automáticas de requisição, e também possui suporte integrado para lidar com dados de resposta como JSON, XML e FormData.</p>

<p>Em termos de por que é melhor usar Axios em vez de Fetch, realmente depende das necessidades específicas do seu projeto. Se você está construindo uma aplicação web simples que só precisa fazer requisições básicas, então o Fetch pode ser suficiente. No entanto, se você precisa de funcionalidades mais avançadas e uma API mais poderosa para lidar com requisições e respostas, então o Axios é uma escolha melhor.</p>

<p>Alguns benefícios de usar o Axios em vez do Fetch incluem:</p>

<p>1. Melhor tratamento de erros: O Axios possui um sistema mais robusto para lidar com erros e fornece mensagens de erro mais úteis em comparação com o Fetch.</p>

<p>2. Interceptadores: O Axios fornece interceptadores que permitem modificar requisições ou respostas antes de serem enviadas ou recebidas.</p>

<p>3. Transformação automática de dados de requisição e resposta: O Axios pode transformar automaticamente dados de requisição e resposta em diferentes formatos, como JSON, o que pode ser muito útil ao trabalhar com APIs.</p>

<p>4. Cancelamento fácil de requisições: O Axios fornece uma maneira simples de cancelar requisições, o que pode ser útil ao lidar com redes lentas ou não confiáveis.</p>

<p>Em resumo, tanto Fetch quanto Axios são ferramentas úteis para fazer requisições HTTP em JavaScript, mas o Axios fornece funcionalidades mais avançadas e uma API mais poderosa que pode ser muito útil para construir aplicações mais complexas.</p>

<p><b>Axios</b> é uma biblioteca para fazer requisições HTTP a partir do navegador ou do Node.js. Facilita o envio de requisições usando promessas e o tratamento de respostas.</p>

<p>Para usar o Axios no React.js, primeiro você precisa instalá-lo usando o comando:</p>

<b>npm install axios</b>

<p>Depois disso, você pode usar o Axios em seus componentes React. Por exemplo, o código a seguir envia uma requisição GET para um servidor remoto e exibe a resposta na página:</p>

<code>
  <p><span className='red'>import</span> {' React, { useState, useEffect }'} <span className='red'>from</span> <span className='blue1'>"react"</span>;</p>  

  <p><span className='red'>import</span> axios <span className='red'>from</span> <span className='blue1'>"axios"</span>;</p>

  <p><span className='red'>function</span> <span className='blueviole'>App</span>() {'{'}</p>  

  <p><span className='red'>const</span> {'[data, setData]'} = <span className='blueviole'>useState</span>("");</p>

  <p><span className='blueviole'>useEffect</span>{'(() => { '}</p>

  <p>axios.<span className='blue'>get</span>(<span className='blue1'>"https://jsonplaceholder.typicode.com/todos/1"</span>).<span className='blue'>then</span>{'((response) => {'}</p>

  <p><span className='blueviole'>setData</span>(response.<span className='blue'>data</span>);</p>

  <p>{'});'}</p>

  <p>{' }, []);'}</p>

  <p> return {'<'}<span className='green'>div</span>{'>'}{'{'}data.<span className='blue'>title</span>{'}'}{'</'}<span className='green'>div</span>{'>;'}</p>

  <p>{'}'}</p>

  <p><span className='red'>export default</span> App;</p>
</code>

<p>Neste exemplo, o gancho <b>useEffect</b> é usado para enviar uma solicitação GET para o servidor e atualizar a variável de estado <b>data</b> com a resposta. A variável de dados é então exibida na página usando JSX.</p>

<p>O Axios também suporta outros métodos HTTP, como POST, PUT e DELETE, que podem ser usados para enviar dados para o servidor e modificar recursos. O objeto axios também fornece muitas opções de configuração, como definir cabeçalhos, tempos limite e interceptadores de solicitação, que permitem personalizar o comportamento das solicitações.</p>

<p>No geral, o Axios é uma biblioteca poderosa e flexível para trabalhar com solicitações HTTP no React.js, e pode simplificar muitas tarefas comuns, como buscar dados de uma API remota.</p>

<p>O protocolo HTTP suporta vários métodos de solicitação que permitem realizar várias operações com dados. Aqui está uma breve descrição dos quatro principais métodos de solicitação junto com exemplos de como usá-los no React:</p>

<p>1. <b>GET</b>: um método de solicitação usado para recuperar dados do servidor. No React, você pode usar o método <b>axios.get</b></p>

<code>
  <p>axios.<span className='blue'>get</span>(<span className='blue1'>'/api/data'</span>)</p>

  <p>.<span className='blue'>then</span>{'(response => {'}</p>

  <p>{'console'}.<span className='blue'>log</span>(response.<span className='blue'>data</span>); </p>

  <p>{'})'}</p>

  <p>.<span className='blue'>catch</span>{'(error => {' }</p>

  <p>{'console'}.<span className='blue'>log</span>(error);</p>

  <p>{'});'}</p>  
</code>

<p>Neste exemplo, estamos recuperando dados do ponto de extremidade <b>/api/data</b>. Os dados de resposta são registrados no console se a solicitação for bem-sucedida, e quaisquer erros são capturados e registrados no console.</p>

<p>2. <b>PUT</b>: um método de solicitação usado para atualizar dados existentes no servidor. No React, você pode usar o método <b>axios.put</b>:</p>

<code>
  <p>axios.<span className='blue'>put</span>{'('}<span className='blue1'>'/api/data/1'</span>, {'{'} <span className='blue'>newData</span>: <span className='blue1'>'updatedData'</span> {"})"}</p>

  <p>.<span className='blue'>then</span>{'('}response { '=> {' }</p>

  <p>{'console'}.<span className='blue'>log</span>(response.<span className='blue'>data</span>);</p>  

  <p>{'})'}</p>

  <p>.<span className='blue'>catch</span>{'(error => {'}</p>

  <p>{'console'}.<span className='blue'>log</span>(error);</p>

  <p>{'});'}</p>
</code>

<p>Neste exemplo, estamos atualizando dados no ponto de extremidade <b>/api/data/1</b>. Estamos enviando um payload com os novos dados como o segundo argumento para <b>axios.put</b>. Os dados de resposta são registrados no console se a solicitação for bem-sucedida, e quaisquer erros são capturados e registrados no console.</p>

<p>3. <b>POST</b>: um método de solicitação usado para criar novos dados no servidor. No React, você pode usar o método <b>axios.post</b></p>

<code>
  <p>axios.<span className='blue'>post</span>{'('}<span className='blue1'>'/api/data'</span>, {'{'} <span className='blue'>newData</span>: <span className='blue1'>'newData'</span> {"})"}</p>

  <p>.<span className='blue'>then</span>{'(response => {'}</p>

  <p>{'console'}.<span className='blue'>log</span>(response.<span className='blue'>data</span>);</p>

  <p>{'})'}</p>  

  <p>.<span className='blue'>catch</span>{'(error => {'}</p>

  <p>{'console'}.<span className='blue'>log</span>(error);</p>

  <p>{'});'}</p> 
</code>

<p>Neste exemplo, estamos criando novos dados no ponto de extremidade <b>/api/data</b>. Estamos enviando um payload com os novos dados como o segundo argumento para <b>axios.post</b>. Os dados de resposta são registrados no console se a solicitação for bem-sucedida, e quaisquer erros são capturados e registrados no console.</p>

<p>4. <b>DELETE</b>: um método de solicitação usado para excluir dados existentes no servidor. No React, você pode usar o método <b>axios.delete</b>:</p>

<code>
  <p> axios.<span className='blue'>delete</span>(<span className='blue1'>'/api/data/1'</span>)  </p>

  <p>.<span className='blue'>then</span>{'(response => { '}</p>

  <p>{'console'}.<span className='blue'>log</span>(response.<span className='blue'>data</span>);</p>

  <p>{'}) '}</p>

  <p>.<span className='blue'>catch</span>{'(error => { '}</p>

  <p>{'console'}.<span className='blue'>log</span>(error);</p>

  <p>{'});'}</p>
</code>

<p>Neste exemplo, estamos excluindo dados no ponto de extremidade <b>/api/data/1</b>. Os dados de resposta são registrados no console se a solicitação for bem-sucedida, e quaisquer erros são capturados e registrados no console</p>

<p>Para obter mais informações sobre o Axios, visite o site oficial deles: <a href=" https://axios-http.com" target='_blank' > 👉🏼  https://axios-http.com</a></p>

<b><p>* Texto escrito com a ajuda de um tradutor. Se encontrar algum erro, por favor, avise-nos *</p></b>
    
    <div className='ads-container'>  
      {/*  реклама  */}
      </div>
    </div>
  )
}

export default PtReact_4;