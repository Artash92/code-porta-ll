import React from 'react';

function JpReact_9() {
  return (
    <div>
       <div className='ad-container'>  
          {/*  реклама  */}
        </div>

         <h1>Redux-Saga</h1>
         
    <p>Redux-sagaは、Reduxアプリケーションで非同期リクエストやデータの取得などの副作用を処理するためのライブラリです。ジェネレーター関数を使用して非同期操作のフローを管理し、すべての副作用を処理するための集中化された場所を提供します。これにより、アプリケーションの動作を推論し、テストするのが簡単になります。</p>

    <p>以下は、redux-sagaを使用して非同期API呼び出しを処理する方法の例です：</p>

<code>
  <p><span className='red'>import</span> {'{ call, put, takeLatest }'} <span className='red'>from</span> <span className='blue1'>'redux-saga/effects'</span>; </p>

  <p><span className='red'>import</span> axios <span className='red'>from</span> <span className='blue1'>'axios'</span>; </p>

  <p><span className='green'>{"// Action Types "}</span></p>

  <p>&nbsp;<span className='red'>const</span> FETCH_USERS_REQUEST = <span className='blue1'>'FETCH_USERS_REQUEST'</span>;</p>

  <p>&nbsp;<span className='red'>const</span> FETCH_USERS_SUCCESS = <span className='blue1'>'FETCH_USERS_SUCCESS'</span>;</p>

  <p>&nbsp;<span className='red'>const</span> FETCH_USERS_FAILURE = <span className='blue1'>'FETCH_USERS_FAILURE'</span>;</p>

  <p><span className='green'>{"// Action Creators"}</span></p>

  <p>&nbsp;<span className='red'>const</span> fetchUsersRequest {'= () => ({'} <span className='blue'>type</span>: FETCH_USERS_REQUEST {'});'} </p>

  <p>&nbsp;<span className='red'>const</span> fetchUsersSuccess {'= (users) => ({'} <span className='blue'>type</span>: FETCH_USERS_SUCCESS, <span className='blue'>users</span> {'});'} </p>

  <p>&nbsp;<span className='red'>const</span> fetchUsersFailure {'= (error) => ({'} <span className='blue'>type</span>: FETCH_USERS_FAILURE, <span className='blue'>error</span> {'});'} </p>

  <p><span className='green'>{"// Reducer"}</span></p>

  <p>&nbsp;<span className='red'>const</span> initialState = {'{'} <span className='blue'>users</span>: {'[]'}, <span className='blue'>loading</span>: <span className='blue1'>false</span>, <span className='blue'>error</span>: <span className='red'>null</span> {'};'} </p>

  <p>&nbsp;<span className='red'>const</span> {"usersReducer = (state = initialState, action) => {"}</p>

  <p>&nbsp;&nbsp;&nbsp;<span className='red'>switch</span> {'('}action.<span className='blue'>type</span>{") {"}</p>

  <p>&nbsp;&nbsp;&nbsp;&nbsp;<span className='red'>case</span> {"FETCH_USERS_REQUEST:"}</p>

  <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className='red'>return</span> {'{'} ...state, <span className='blue'>loading</span>: <span className='blue1'>true</span> {'};'} </p>

  <p>&nbsp;&nbsp;&nbsp;&nbsp;<span className='red'>case</span> {"FETCH_USERS_SUCCESS:"}</p>

  <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className='red'>return</span> {'{'} ...state, <span className='blue'>users</span>: action.<span className='blue'>users</span>, <span className='blue'>loading</span>: <span className='blue1'>false</span> {'};'} </p>

  <p>&nbsp;&nbsp;&nbsp;&nbsp;<span className='red'>case</span> {"FETCH_USERS_FAILURE:"}</p>

  <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className='red'>return</span> {'{'} ...state, <span className='blue'>error</span>: action.<span className='blue'>error</span>, <span className='blue'>loading</span>: <span className='blue1'>false</span> {'};'} </p>

  <p>&nbsp;&nbsp;&nbsp;&nbsp;<span className='red'>default</span>:</p>

  <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className='red'>return</span> state;</p>

  <p>&nbsp;{" }"}</p>

  <p>{"};"}</p>

  <p><span className='green'>{"// Sagas"}</span></p>

  <p>&nbsp;<span className='red'>function*</span> <span className='blueviole'>fetchUsers</span>{"() {"}</p>

  <p>&nbsp;&nbsp;<span className='red'>try</span> {"{"}</p>

  <p>&nbsp;&nbsp;&nbsp;<span className='red'>const</span> response = <span className='red'>yield</span> <span className='blueviole'>call</span>(axios.<span className='blue'>get</span>, <span className='blue1'>'{'https://jsonplaceholder.typicode.com/users'}</span>'); </p>

  <p>&nbsp;&nbsp;&nbsp;<span className='red'>yield</span> <span className='blueviole'>put</span>(<span className='blueviole'>fetchUsersSuccess</span>(response.<span className='blue'>data</span>)); </p>

  <p>&nbsp;&nbsp;{"}"} <span className='red'>catch</span> {"(error) {"}</p>

  <p>&nbsp;&nbsp;&nbsp;<span className='red'>yield</span> <span className='blueviole'>put</span>(<span className='blueviole'>fetchUsersFailure</span>(error));</p>

  <p>&nbsp;{"}"}</p>

  <p>{"}"}</p>

  <p>&nbsp;<span className='red'>function*</span> <span className='blueviole'>usersSaga</span>{"() {"}</p>

  <p>&nbsp;&nbsp;&nbsp;<span className='red'>yield</span> <span className='blueviole'>takeLatest</span>{'(FETCH_USERS_REQUEST, fetchUsers)'};</p>

  <p>{"}"}</p>

  <p><span className='red'>export</span> {"{ usersReducer, usersSaga };"}</p>
</code>

<p>この例では、3つのアクションタイプ（FETCH_USERS_REQUEST、FETCH_USERS_SUCCESS、FETCH_USERS_FAILURE）、3つのアクションクリエーター（fetchUsersRequest、fetchUsersSuccess、fetchUsersFailure）、および状態の更新を処理するリデューサー関数（usersReducer）を定義しています。</p>

<p>また、2つのサガを定義しています：fetchUsersとusersSaga。fetchUsersサガは、API呼び出しを行い、成功または失敗に応じてfetchUsersSuccessまたはfetchUsersFailureをディスパッチするためにcallエフェクトを使用します。usersSagaサガはFETCH_USERS_REQUESTアクションをリッスンし、応答としてfetchUsersサガを実行します。</p>

<p>最後に、リデューサーとサガの両方をエクスポートして、Reduxストアのセットアップで使用できるようにしています：</p>

<code>
<p><span className='red'>import</span> {"{ createStore, applyMiddleware }"} <span className='red'>from</span> <span className='blue1'>'redux'</span>;</p>

<p><span className='red'>import</span> {'createSagaMiddleware'} <span className='red'>from</span> <span className='blue1'>'redux-saga'</span>; </p>

<p><span className='red'>import</span> {"{ usersReducer, usersSaga }"} <span className='red'>from</span> <span className='blue1'>'./users'</span>;</p>

<p><span className='red'>const</span> sagaMiddleware = <span className='blueviole'>createSagaMiddleware</span>(); </p>

<p><span className='red'>const</span> store = <span className='blueviole'>createStore</span>(usersReducer, <span className='blueviole'>applyMiddleware</span>(sagaMiddleware)); </p>

<p>sagaMiddleware.<span className='blue'>run</span>(usersSaga);</p>

<p><span className='red'>export default</span> store;</p>
</code>

<p>このセットアップでは、usersReducerを使用してReduxストアを作成し、sagaMiddlewareを適用します。次に、sagaMiddleware.runを使用してusersSagaを実行します。これにより、サガがアクティブになり、アプリケーション内のアクションをリッスンするようになります。</p>

<b><p>* 翻訳者の助けを借りて書かれたテキスト。 エラーが見つかった場合は、お知らせください *</p></b>
   
 <div className='ads-container'>  
  {/*  реклама  */}
</div>
    </div>
  )
}

export default JpReact_9;