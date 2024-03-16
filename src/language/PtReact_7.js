import React from 'react';

function PtReact_7() {
  return (
    <div>
      <div className='ad-container'>  
          {/*  реклама  */}
        </div> 
        
      <h1>Redux</h1>

<p>O Redux é uma biblioteca de gerenciamento de estado para aplicativos JavaScript. Ele ajuda a gerenciar o estado do seu aplicativo de uma maneira previsível, tornando mais fácil entender o fluxo de dados em seu aplicativo. Com o Redux, você armazena o estado do seu aplicativo em um único objeto chamado de store, e você usa actions e reducers para modificar esse estado.</p>

<p>Eis como funciona: quando você deseja alterar o estado do seu aplicativo, você despacha uma action. A action é um objeto JavaScript simples que descreve o que aconteceu no seu aplicativo. Por exemplo, você pode despachar uma action para adicionar um novo item a uma lista, ou para atualizar as informações do perfil de um usuário.</p>

<p>Reducers são funções que recebem o estado atual do seu aplicativo e uma action, e retornam um novo estado. Reducers são funções puras, o que significa que eles não têm efeitos colaterais e sempre retornam a mesma saída para uma entrada dada.</p>

<p>O React-Redux é uma biblioteca que integra o Redux com o React. Ele fornece uma maneira de conectar seus componentes React à store do Redux, para que você possa acessar e modificar o estado do seu aplicativo a partir dos seus componentes. O React-Redux fornece dois componentes-chave: Provider e connect.</p>

<p>O componente Provider é usado para envolver todo o seu aplicativo React. Ele recebe um objeto store como propriedade e disponibiliza essa store para todos os componentes do seu aplicativo.</p>

<p>1. Instale os pacotes necessários:</p>

<b>npm install redux react-redux</b>

<p>2. Crie uma store do Redux:</p>

<code>
  <p><span className='red'>import</span> {'{ createStore }'} <span className='red'>from</span> <span className='blue1'>'redux'</span>;</p>
  
  <p><span className='red'>import</span> rootReducer <span className='red'>from</span> <span className='blue1'>'./reducers'</span>; </p>

  <p><span className='red'>const</span> store = <span className='blueviole'>createStore</span>(rootReducer); </p>
</code>

<p>3. Crie as actions do Redux:</p>

<code>
  <p><span className='red'>export const</span> {"increment = () => {"}</p>
 
  <p>&nbsp;<span className='red'>return</span>  {"{ "}</p>

  <p>&nbsp;&nbsp;<span className='blue'>type</span> : <span className='blue1'>'INCREMENT'</span></p>

  <p>&nbsp;{" } "}</p>

  <p>{" } "}</p>

  <p><span className='red'>export const</span>  {"decrement = () => { "}</p>

  <p>&nbsp;<span className='red'>return</span>  {" { "}</p>

  <p>&nbsp;&nbsp;<span className='blue'>type</span> : <span className='blue1'>'DECREMENT'</span></p>

  <p>&nbsp;{" } "}</p>

  <p>{" } "}</p>
</code>

<p>4. Crie os reducers do Redux:</p>

<code>
<p><span className='red'>const</span> counterReducer = {'('}state = <span className='blue1'>0</span>, {"action) => { "}</p>

<p>&nbsp;<span className='red'>switch</span> (action.<span className='blue'>type</span>) {"{ "}</p>

<p>&nbsp;&nbsp;<span className='red'>case</span> <span className='blue1'>'INCREMENT'</span>:</p>

<p>&nbsp;&nbsp;&nbsp;<span className='red'>return</span>  state + <span className='blue1'>1</span>;</p>

<p>&nbsp;&nbsp;<span className='red'>case</span> <span className='blue1'>'DECREMENT'</span>:</p>

<p>&nbsp;&nbsp;&nbsp;<span className='red'>return</span> state - <span className='blue1'>1</span>; </p>

<p>&nbsp;&nbsp;<span className='red'>default</span>: </p>

<p>&nbsp;&nbsp;&nbsp;<span className='red'>return</span> state; </p>

<p>&nbsp;{" }"}</p>

<p>{"} "}</p>

<p><span className='red'>export default</span> counterReducer;</p>
</code>

<p>5. Conecte o Redux a um componente React usando a função <b>connect</b> do React-Redux:</p>

<code>
    <p><span className='red'>import</span> {'{ connect }'} <span className='red'>from</span> <span className='blue1'>'react-redux'</span>; </p>
    
    <p><span className='red'>import</span>  {'{ increment, decrement }'} <span className='red'>from</span> <span className='blue1'>'./actions'</span>;</p>

    <p>&nbsp;<span className='red'>const</span> {"Counter = (props) => { "}</p>

    <p>&nbsp;<span className='red'>return</span> {'('}</p>

    <p>{'<'}<span className='green'>div</span>{'>'}</p>

    <p>&nbsp;&nbsp;{'<'}<span className='green'>h1</span>{'>{'}props.<span className='blue'>count</span>{'}</'}<span className='green'>h1</span>{'>'}</p>

    <p>&nbsp;&nbsp;{'<'}<span className='green'>button</span> <span className='blue'>onClick</span>={'{'}props.<span className='blue'>increment</span>{'}>'}+{'</'}<span className='green'>button</span>{'>'}</p>

    <p>&nbsp;&nbsp;{'<'}<span className='green'>button</span> <span className='blue'>onClick</span>={'{'}props.<span className='blue'>decrement</span>{'}>-</'}<span className='green'>button</span>{'>'}</p>

    <p>{"</"}<span className='green'>div</span>{">"}</p>

    <p>&nbsp;{");"}</p>

    <p>{"} "}</p>

    <p>&nbsp;<span className='red'>const</span> {"mapStateToProps = (state) => {"}</p>

    <p>&nbsp;<span className='red'>return</span> {"{ "}</p>

    <p>&nbsp;&nbsp;&nbsp;<span className='blue'>count</span>: state.<span className='blue'>counter</span></p>

    <p>&nbsp;{"} "}</p>

    <p>{"} "}</p>

    <p>&nbsp;<span className='red'>const</span> {"mapDispatchToProps = (dispatch) => { "}</p>

    <p>&nbsp;<span className='red'>return</span> {"{ "}</p>

    <p>&nbsp;&nbsp;&nbsp;<span className='blue'>increment</span>: {"() =>"} <span className='blueviole'>dispatch</span>(<span className='blueviole'>increment</span>()), </p>

    <p>&nbsp;&nbsp;&nbsp;<span className='blue'>decrement</span>: {"() =>"} <span className='blueviole'>dispatch</span>(<span className='blueviole'>decrement</span>())</p>

    <p>&nbsp;{"}"}</p>

    <p>{"}"}</p>

    <p><span className='red'>export default</span> <span className='blueviole'>connect</span>(mapStateToProps, mapDispatchToProps)(Counter); </p>
</code>

<p>6. Envolver seu aplicativo com o componente <b>Provider</b> para disponibilizar a loja Redux para todos os componentes:</p>

<code> 
      <p><span className='red'>import</span> {"{ Provider } "} <span className='red'>from</span> <span className='blue1'>'react-redux'</span>;</p>

      <p><span className='red'>import</span> store <span className='red'>from</span> <span className='blue1'>'./store'</span>;</p>

      <p><span className='red'>import</span> Counter <span className='red'>from</span> <span className='blue1'>'./Counter'</span>; </p>

      <p>&nbsp;<span className='red'>const</span> {"App = () => { "}</p>

      <p>&nbsp;<span className='red'>return</span> {"("}</p>

      <p>{"<"}<span className='blueviole'>Provider</span> <span className='blue'>store</span>={"{store}> "}</p>

      <p>&nbsp;&nbsp;{"<"}<span className='blueviole'>Counter</span> {"/>"}</p>

      <p>{"</"}<span className='blueviole'>Provider</span>{">"}</p>

      <p>&nbsp;{");"}</p>

      <p>{"}"}</p>

      <p><span className='red'>export default</span> App;</p>
    </code>

    <p>Este é um exemplo básico de como usar Redux e React-Redux em uma aplicação React. Tenha em mente que isso é apenas a ponta do iceberg, e há muito mais a aprender sobre o Redux e seu ecossistema.</p>

    <p>há algumas coisas adicionais a ter em mente ao usar Redux em uma aplicação React:</p>

    <p>1. Middleware Redux: Middleware é uma maneira de modificar ou interceptar ações Redux antes de chegarem aos redutores. O middleware pode ser usado para tarefas como logging, solicitações assíncronas e muito mais. Algumas opções populares de middleware para Redux incluem <b>redux-thunk, redux-saga e redux-observable</b>.</p>

    <p>2. Ferramentas de desenvolvimento Redux: Redux devtools é uma extensão do navegador que fornece uma interface útil para depurar e inspecionar a loja Redux. Ele permite que você inspecione ações e alterações de estado, e também fornece funcionalidade de depuração de viagem no tempo.</p>

    <p>3. Seletores Redux: Seletores são funções que extraem peças específicas de dados da loja Redux. Eles podem ser usados para calcular dados derivados, filtrar e transformar dados e muito mais. Os seletores podem ajudar a simplificar seus componentes fornecendo a eles os dados exatos de que precisam, sem precisar se preocupar com a forma da loja.</p>

    <p>4. Ducks Redux: Ducks é uma proposta para organizar o código Redux em módulos que contêm todos os tipos de ação, criadores de ação e redutores relacionados a um recurso ou domínio específico. Esta abordagem pode ajudar a simplificar sua base de código e torná-la mais fácil de manter.</p>

    <p>Estes são apenas alguns dos tópicos adicionais que você pode querer explorar ao trabalhar com Redux. Existem muitas outras bibliotecas e ferramentas disponíveis no ecossistema Redux, então é importante dedicar tempo para aprendê-las e decidir quais são as mais adequadas para seu projeto.</p>

    <b><p>* Texto escrito com a ajuda de um tradutor. Se encontrar algum erro, por favor, avise-nos *</p></b>
    
    <div className='ads-container'>  
      {/*  реклама  */}
      </div>
    </div>
  )
}

export default PtReact_7;