import React from 'react'

function FrReact_8() {
  return (
    <div>
      <div className='ad-container'>  
          {/*  реклама  */}
        </div>

      <h1>Redux Thunk</h1>

<p>Redux Thunk est une bibliothèque middleware pour Redux qui vous permet d'écrire une logique asynchrone qui interagit avec le magasin Redux. Il vous permet de dispatcher des actions contenant du code asynchrone, telles que des requêtes API ou d'autres effets secondaires, en enveloppant vos créateurs d'actions dans une fonction qui renvoie une autre fonction.</p>

<p>Voici un exemple de la façon dont Redux Thunk peut être utilisé dans une application React :</p>

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

<p>Dans l'exemple ci-dessus, nous définissons trois créateurs d'actions : <b>fetchUserRequest, fetchUserSuccess et fetchUserError</b>. Nous définissons également un créateur d'actions <b>fetchUser</b> qui renvoie une fonction au lieu d'un objet d'action. Cette fonction prend <b>dispatch</b> en argument, qui est la fonction <b>dispatch</b> du magasin Redux.</p>

<p>Dans la fonction <b>fetchUser</b>, nous envoyons l'action <b>fetchUserRequest</b>, qui définit l'état <b>isLoading</b> sur <b>true</b>. Nous effectuons ensuite un appel API en utilisant Axios et envoyons soit l'action <b>fetchUserSuccess ou fetchUserError</b> en fonction de la réponse de l'API. Ces actions mettent à jour le magasin Redux avec les données récupérées ou le message d'erreur, respectivement.</p>

<p>Pour utiliser ce créateur d'actions dans un composant, nous pouvons l'importer et le passer à <b>dispatch</b> de la manière suivante :</p>

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

  <p>&nbsp;&nbsp;<span className='red'>return</span> {'<'}<span className='green'>div</span>{'>'}Chargement...{'</'}<span className='green'>div</span>{'>'};</p>

  <p>{" } "}</p>

  <p>&nbsp;<span className='red'>if</span> {"(error) {  "}</p>

  <p>&nbsp;&nbsp;<span className='red'>return</span> {'<'}<span className='green'>div</span>{'>Erreur : {error}</'}<span className='green'>div</span>{'>'};</p>

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

<p>Dans l'exemple ci-dessus, nous utilisons les hooks useDispatch et useSelector de la bibliothèque react-redux pour interagir avec le magasin Redux. Nous envoyons le créateur d'actions fetchUser dans le hook useEffect, qui sera appelé lorsque le composant est monté. Nous utilisons également useSelector pour extraire les morceaux de données pertinents du magasin Redux, tels que les données utilisateur et les indicateurs isLoading et error.</p>

<p>En général, Redux Thunk est une bibliothèque middleware utile pour Redux qui vous permet d'écrire une logique asynchrone qui interagit avec le magasin Redux. Cela peut aider à simplifier votre code et à faciliter la compréhension du comportement asynchrone dans votre application React.</p>

<h3>Redux-Observable</h3>

<p>Redux-Observable est un middleware pour Redux qui permet l'utilisation de la programmation réactive dans les applications Redux. Il permet aux développeurs de gérer des actions et des événements asynchrones complexes de manière déclarative, composable et facile à tester en utilisant RxJS, une bibliothèque de programmation réactive.</p>

<p>Avec Redux-Observable, les développeurs peuvent définir des "épiques" qui sont des fonctions qui écoutent certaines actions, puis réagissent à celles-ci avec un flux de nouvelles actions. Ces épiques sont des observables, ce sont des fonctions qui reçoivent un flux d'événements et peuvent les transformer, les filtrer ou les fusionner de manière déclarative.</p>

<p>Voici un exemple de l'utilisation de Redux-Observable :</p>

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

<p>Dans cet exemple, nous définissons un epic appelé <b>pingEpic</b> qui écoute une action de type 'PING', puis effectue une requête AJAX vers un serveur pour le pinguer. Si la requête réussit, il envoie une action de type 'PONG' avec la charge utile de la réponse. Si la requête échoue, il envoie une action de type 'PING_ERROR' avec le message d'erreur comme charge utile.</p>

<p>Nous combinons ensuite tous nos épiques en un seul <b>rootEpic</b>, et créons une instance de <b>createEpicMiddleware()</b> à utiliser comme middleware dans notre magasin Redux. Enfin, nous appliquons le middleware au magasin et exécutons le root epic avec <b>epicMiddleware.run(rootEpic)</b>.</p>

<p>En général, Redux-Observable est un outil puissant pour gérer des actions et des événements asynchrones complexes dans les applications Redux. Il fournit une manière flexible et déclarative de gérer le comportement asynchrone en utilisant des concepts de programmation réactive.</p>

<b><p>* Texte écrit avec l'aide d'un traducteur. Si vous trouvez une erreur, veuillez nous en informer *</p></b>
  
  <div className='ads-container'>  
{/*  реклама  */}
</div>
    </div>
  )
}

export default FrReact_8;