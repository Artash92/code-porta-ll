import React from 'react';

function PtReact_8() {
  return (
    <div>
      <div className='ad-container'>  
          {/*  реклама  */}
        </div> 

    <h1>Redux Thunk</h1>
      
    <p>Redux Thunk é uma biblioteca de middleware para Redux que permite escrever lógica assíncrona que interage com a loja Redux. Ele permite despachar ações que contêm código assíncrono, como solicitações de API ou outros efeitos colaterais, envolvendo seus criadores de ação em uma função que retorna outra função.</p>

    <p>Aqui está um exemplo de como o Redux Thunk pode ser usado em uma aplicação React:</p>

      <code>
        <p><span className='green'>{"// actions.js "}</span></p>

        <p><span className='red'>import</span> axios <span className='red'>from</span> <span className='blue1'>'axios'</span>; </p>

        <p><span className='red'>export const</span> {"fetchUserRequest = () => ({ "}</p>

        <p>&nbsp;&nbsp;<span className='blue'>type</span>: <span className='blue1'>'FETCH_USER_REQUEST'</span>, </p>

        <p>{"}); "}</p>

        <p><span className='red'>export const</span> {"fetchUserSuccess = (user) => ({ "}</p>

        <p>&nbsp;&nbsp;<span className='blue'>type</span>: <span className='blue1'>'FETCH_USER_SUCCESS'</span>,</p>

        <p>&nbsp;&nbsp;<span className='blue'>payload</span>: user, </p>

        <p>{"}); "}</p>

        <p><span className='red'>export const</span> {"fetchUserError = (error) => ({ "}</p>

        <p>&nbsp;&nbsp;<span className='blue'>type</span>: <span className='blue1'>'FETCH_USER_ERROR'</span>, </p>

        <p>&nbsp;&nbsp;<span className='blue'>payload</span>: error, </p>

        <p>{"}); "}</p>
        
        <p><span className='red'>export const</span> {"fetchUser = (userId) => { "}</p>

        <p>&nbsp;<span className='red'>return</span> {"(dispatch) => { "}</p>

        <p>&nbsp;&nbsp;<span className='blueviole'>dispatch</span>(<span className='blueviole'>fetchUserRequest</span>());</p>

        <p>&nbsp;&nbsp;axios.<span className='blue'>get</span>(` <span className='blue1'>{'https://jsonplaceholder.typicode.com/users/$'}</span>{'{userId}'} `)  </p>

        <p>&nbsp;&nbsp;&nbsp;.<span className='blue'>then</span>{"((response) => {"}</p>

        <p>&nbsp;&nbsp;&nbsp;&nbsp;<span className='red'>const</span> user = response.<span className='blue'>data</span>; </p>

        <p>&nbsp;&nbsp;&nbsp;&nbsp;<span className='blueviole'>dispatch</span>(<span className='blueviole'>fetchUserSuccess</span>(user)); </p>

        <p>{"})"}</p>

        <p>&nbsp;&nbsp;&nbsp;.<span className='blue'>catch</span>{"((error) => {"}</p>

        <p>&nbsp;&nbsp;&nbsp;&nbsp;<span className='blueviole'>dispatch</span>(<span className='blueviole'>fetchUserError</span>(error.<span className='blue'>message</span>)); </p>

        <p>&nbsp;&nbsp;{"});"}</p>

        <p>&nbsp;{"};"}</p>

        <p>{"};"}</p>
    </code>

<p>No exemplo acima, definimos três criadores de ação: <b>fetchUserRequest, fetchUserSuccess e fetchUserError</b>. Também definimos um criador de ação <b>fetchUser</b> que retorna uma função em vez de um objeto de ação. Esta função recebe <b>dispatch</b> como argumento, que é a função <b>dispatch</b> da loja Redux.</p>

<p>Dentro da função <b>fetchUser</b>, despachamos a ação <b>fetchUserRequest</b>, que define o estado <b>isLoading</b> como <b>true</b>. Em seguida, fazemos uma chamada de API usando o Axios e despachamos a ação <b>fetchUserSuccess ou fetchUserError</b> com base na resposta da API. Essas ações atualizam a loja Redux com os dados recuperados ou a mensagem de erro, respectivamente.</p>

<p>Para usar este criador de ação em um componente, podemos importá-lo e passá-lo para <b>dispatch</b> assim:</p>

    <code>
      <p><span className='green'>{"// MyComponent.js"}</span></p>

      <p><span className='red'>import</span> {"React, { useEffect }"} <span className='red'>from</span> <span className='blue1'>'react'</span>;</p>

      <p><span className='red'>import</span> {"{ useDispatch, useSelector }"} <span className='red'>from</span> <span className='blue1'>'react-redux'</span>;</p>

      <p><span className='red'>import</span> {"{ fetchUser }"} <span className='red'>from</span> <span className='blue1'>'./actions'</span>; </p>

      <p>&nbsp;<span className='red'>const</span> MyComponent = {'({'} <span className='blue'>userId</span> {'})'} {"=> { "}</p>

      <p>&nbsp;<span className='red'>const</span> dispatch = <span className='blueviole'>useDispatch</span>(); </p>

      <p>&nbsp;<span className='red'>const</span> user = <span className='blueviole'>useSelector</span>(state {'=>'} state.<span className='blue'>user</span>.<span className='blue'>data</span>); </p>

      <p>&nbsp;<span className='red'>const</span> isLoading = <span className='blueviole'>useSelector</span>(state {'=>'} state.<span className='blue'>user</span>.<span className='blue'>isLoading</span>); </p>

      <p>&nbsp;<span className='red'>const</span> error = <span className='blueviole'>useSelector</span>(state {'=>'} state.<span className='blue'>user</span>.<span className='blue'>error</span>);</p>

      <p>&nbsp;<span className='blueviole'>useEffect</span>{"(() => { "}</p>

      <p>&nbsp;&nbsp;<span className='blueviole'>dispatch</span>(<span className='blueviole'>fetchUser</span>(userId));</p>

      <p>&nbsp;{"}, [dispatch, userId]); "}</p>

      <p>&nbsp;<span className='red'>if</span> {"(isLoading) { "}</p>

      <p>&nbsp;&nbsp;<span className='red'>return</span> {'<'}<span className='green'>div</span>{'>'}Loading...{'</'}<span className='green'>div</span>{'>'};</p>

      <p>{" } "}</p>

      <p>&nbsp;<span className='red'>if</span> {"(error) {  "}</p>

      <p>&nbsp;&nbsp;<span className='red'>return</span> {'<'}<span className='green'>div</span>{'>Error: {error}</'}<span className='green'>div</span>{'>'};</p>

      <p>{"}"}</p>

      <p>&nbsp;&nbsp;<span className='red'>return</span> {"("}</p>

      <p>{'<'}<span className='green'>div</span>{'>'}</p>

      <p>&nbsp;{'<'}<span className='green'>h1</span>{'>{'}user.<span className='blue'>name</span>{'}</'}<span className='green'>h1</span>{'>'}</p>

      <p>&nbsp;{'<'}<span className='green'>p</span>{'>{'}user.<span className='blue'>email</span>{'}</'}<span className='green'>p</span>{'>'}</p>
     
      <p>&nbsp;{'<'}<span className='green'>p</span>{'>{'}user.<span className='blue'>phone</span>{'}</'}<span className='green'>p</span>{'>'}</p>
     
      <p>{"</"}<span className='green'>div</span>{">"}</p>

      <p>&nbsp;{");"}</p>

      <p>{"};"}</p>
   </code>

<p>No exemplo acima, usamos os ganchos useDispatch e useSelector da biblioteca react-redux para interagir com a loja Redux. Despachamos o criador de ação fetchUser no gancho useEffect, que será chamado quando o componente for montado. Também usamos o useSelector para extrair as partes relevantes dos dados da loja Redux, como os dados do usuário e as flags isLoading e error.</p>

<p>No geral, o Redux Thunk é uma biblioteca de middleware útil para Redux que permite escrever lógica assíncrona que interage com a loja Redux. Ele pode ajudar a simplificar seu código e tornar mais fácil entender o comportamento assíncrono em sua aplicação React.</p>

<h3>Redux-Observable</h3>

<p>O Redux-Observable é um middleware para Redux que permite o uso de programação reativa em aplicações Redux. Ele permite que os desenvolvedores lidem com ações e eventos assíncronos complexos de forma declarativa, componível e fácil de testar usando RxJS, uma biblioteca para programação reativa.</p>

<p>Com o Redux-Observable, os desenvolvedores podem definir "épicos" que são funções que escutam certas ações e depois reagem a elas com uma stream de novas ações. Esses épicos são observáveis, que são funções que recebem uma stream de eventos e podem transformá-los, filtrá-los ou mesclá-los de forma declarativa.</p>

<p>Aqui está um exemplo de como usar o Redux-Observable:</p>


<code>
  <p><span className='red'>import</span> {'{ createStore, applyMiddleware } '} <span className='red'>from</span> <span className='blue1'>'redux'</span>;</p>

  <p><span className='red'>import</span>  {'{ createEpicMiddleware, combineEpics }'} <span className='red'>from</span> <span className='blue1'>'redux-observable'</span>;</p>

  <p><span className='red'>import</span> {'{ ajax }'} <span className='red'>from</span> <span className='blue1'>'rxjs/ajax'</span>;  </p>

  <p><span className='red'>import</span> {'{ mergeMap, map, catchError }'} <span className='red'>from</span> <span className='blue1'>'rxjs/operators'</span>;</p>

  <p>&nbsp;<span className='red'>const</span> {"pingEpic = action$ =>"}</p>

  <p>&nbsp;&nbsp;action$.<span className='blue'>ofType</span>(<span className='blue1'>'PING'</span>)</p>

  <p>&nbsp;&nbsp;.<span className='blue'>mergeMap</span>{"(action =>"}</p>

  <p>&nbsp;&nbsp;&nbsp;ajax.<span className='blue'>getJSON</span>(<span className='blue1'>'/api/ping'</span>)</p>

  <p>&nbsp;&nbsp;&nbsp;.<span className='blue'>map</span>{'('}response {'=> ({ '}<span className='blue'>type</span>: <span className='blue1'>'PONG'</span>, <span className='blue'>payload</span>: response {'}))'}  </p>

  <p>&nbsp;&nbsp;&nbsp;.<span className='blue'>catch</span>{'(error => ({'} <span className='blue'>type</span>: <span className='blue1'>'PING_ERROR'</span>, <span className='blue'>payload</span>: error.<span className='blue'>message</span> {'}))'}</p>

  <p>{");"}</p>

  <p>&nbsp;<span className='red'>const</span> rootEpic = <span className='blueviole'>combineEpics</span>{'('}</p>

  <p>&nbsp;&nbsp;{"pingEpic, "}</p>

  <p>&nbsp;&nbsp;<span className='green'>{"// more epics... "}</span></p>

  <p>{"); "}</p>

  <p>&nbsp;<span className='red'>const</span> epicMiddleware = <span className='blueviole'>createEpicMiddleware</span>();</p>

  <p>&nbsp;<span className='red'>const</span> store = <span className='blueviole'>createStore</span>{'('}</p>

  <p>&nbsp;&nbsp;{"reducer, "}</p>

  <p>&nbsp;&nbsp;<span className='blueviole'>applyMiddleware</span>(epicMiddleware)</p>

  <p>{");"}</p>

  <p>epicMiddleware.<span className='blue'>run</span>(rootEpic); </p>
</code>

<p>Neste exemplo, definimos um épico chamado <b>pingEpic</b> que escuta por uma ação do tipo 'PING', e então faz uma solicitação AJAX para um servidor para pingá-lo. Se a solicitação for bem-sucedida, ele despacha uma ação do tipo 'PONG' com a carga de resposta. Se a solicitação falhar, ele despacha uma ação do tipo 'PING_ERROR' com a mensagem de erro como carga.</p>

<p>Em seguida, combinamos todos os nossos épicos em um único <b>rootEpic</b>, e criamos uma instância de <b>createEpicMiddleware()</b> para usar como um middleware em nossa loja Redux. Finalmente, aplicamos o middleware à loja e executamos o épico raiz com <b>epicMiddleware.run(rootEpic)</b>.</p>

<p>No geral, o Redux-Observable é uma ferramenta poderosa para lidar com ações e eventos assíncronos complexos em aplicações Redux. Ele fornece uma maneira flexível e declarativa de gerenciar comportamento assíncrono usando conceitos de programação reativa.</p>

    <b><p>* Texto escrito com a ajuda de um tradutor. Se encontrar algum erro, por favor, avise-nos *</p></b>
    
    <div className='ads-container'>  
      {/*  реклама  */}
      </div>
    </div>
  )
}

export default PtReact_8;