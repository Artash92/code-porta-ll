import React from 'react';

function JpReact_8() {
  return (
    <div>
       <div className='ad-container'>  
          {/*  реклама  */}
        </div>
      
      <h1>Redux Thunk</h1>
      
      <p>Redux Thunk は、Redux のミドルウェアライブラリであり、Redux ストアとやり取りする非同期ロジックを記述することができます。これにより、API リクエストやその他の副作用を含む非同期コードを含むアクションをディスパッチできるようになります。アクションクリエーターを別の関数を返す関数でラップすることで、この機能が実現されます。</p>
      
      <p>以下は、React アプリケーションで Redux Thunk を使用する例です:</p>

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


  <p>上記の例では、<b>fetchUserRequest、fetchUserSuccess、fetchUserError</b> の 3 つのアクションクリエーターを定義しています。また、アクションオブジェクトの代わりに関数を返す<b>fetchUser</b> アクションクリエーターも定義しています。この関数は、Redux ストアの<b>dispatch</b> 関数を引数として受け取ります。</p>
  
  <p><b>fetchUser</b> 関数の内部では、<b>fetchUserRequest</b> アクションをディスパッチし、<b>isLoading</b> ステートを<b>true</b>に設定します。その後、Axios を使用して API コールを行い、API の応答に基づいて <b>fetchUserSuccess</b> または <b>fetchUserError</b> アクションをディスパッチします。これらのアクションは、取得したデータまたはエラーメッセージで Redux ストアを更新します。</p>
  
  <p>このアクションクリエーターをコンポーネントで使用するには、それをインポートして次のように<b>dispatch</b> に渡すことができます:</p>
   
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

<p>上記の例では、react-redux ライブラリから useDispatch と useSelector フックを使用して Redux ストアとやり取りします。 useEffect フック内で fetchUser アクションクリエーターをディスパッチし、コンポーネントがマウントされたときに呼び出されます。また、useSelector を使用して、Redux ストアからユーザーデータや isLoading、エラーフラグなどの関連するデータを抽出します。</p>

<p>全体として、Redux Thunk は Redux の便利なミドルウェアライブラリであり、Redux ストアとやり取りする非同期ロジックを記述することができます。これにより、React アプリケーション内での非同期動作を簡素化し、理解しやすくすることができます。</p>

<h3>Redux-Observable</h3>

<p>Redux-Observable は、Redux 用のミドルウェアであり、Redux アプリケーションでリアクティブプログラミングを使用できるようにします。これにより、RxJS というリアクティブプログラミング用のライブラリを使用して、複雑な非同期アクションやイベントを宣言的で合成可能でテストしやすい方法で処理できるようになります。</p>

<p>Redux-Observable を使用すると、開発者は特定のアクションを監視し、それに対して新しいアクションのストリームで反応する関数である「epics」を定義できます。これらのエピックスは、イベントのストリームを受け取り、それらを宣言的な方法で変換、フィルタリング、またはマージできる関数であり、これらはオブザーバブルです。</p>

<p>以下は Redux-Observable の使用例です:</p>

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


<p>この例では、'PING' タイプのアクションを待ち受け、それを受け取ったらサーバーに対して AJAX リクエストを行い、それに 'PONG' タイプのアクションを送信します。</p>

<p>私たちはすべてのエピックスを単一の<b>rootEpic</b>に結合し、<b>createEpicMiddleware()</b>のインスタンスを作成して、Redux ストアでミドルウェアとして使用します。最後に、ミドルウェアをストアに適用し、<b>epicMiddleware.run(rootEpic)</b>でルートエピックを実行します。</p>

<p>全体的に、Redux-Observable は Redux アプリケーション内での複雑な非同期アクションやイベントの処理に強力なツールです。リアクティブプログラミングの概念を使用して、非同期動作を柔軟で宣言的な方法で管理できます。</p>

<b><p>* 翻訳者の助けを借りて書かれたテキスト。 エラーが見つかった場合は、お知らせください *</p></b>
   
 <div className='ads-container'>  
  {/*  реклама  */}
</div>
    </div>
  )
}

export default JpReact_8;