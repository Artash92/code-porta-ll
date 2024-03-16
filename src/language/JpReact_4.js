import React from 'react';

function JpReact_4() {
  return (
    <div>
      <div className='ad-container'>  
          {/*  реклама  */}
        </div>

      <h1>Reactでデータを取得する</h1>

<p>1. fetch APIを使用してデータを取得する:</p>

<code> 
<p><span className='blueviole'>fetch</span>(<span className='blue1'>'https://api.example.com/data'</span>)</p>

<p>.<span className='blue'>then</span>(response {'=>'} response.<span className='blue'>json</span>()) </p>

<p>.<span className='blue'>then</span>(data {'=>'} console.<span className='blue'>log</span>(data))</p>

<p>.<span className='blue'>catch</span>(error {'=>'} console.<span className='blue'>error</span>(error)) </p>
</code>

<p>この例では、<b>fetch</b> APIを使用してサーバーにリクエストを行っています。 <b>response</b> オブジェクトは <b>json()</b> メソッドを使用してJSON形式に変換され、その結果のデータがコンソールにログされます。 エラーが発生した場合は、それがキャッチされてコンソールにログされます。</p>


<p>2. コンポーネントの状態に取得したデータを表示する:</p>

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


<p>この例では、<b>useState</b> フックを使用して <b>data</b> という名前の状態変数を定義しています。 また、コンポーネントがマウントされたときにサーバーからデータを取得し、取得したデータで状態変数 <b>data</b> を更新するために <b>useEffect</b> フックを使用しています。 最後に、<b>map</b> メソッドを使用してデータ配列をループし、それぞれの項目を段落要素として表示しています。</p>

<h1>Axios</h1>

<p>FetchとAxiosは、ブラウザやNode.js環境からのHTTPリクエストを行うためのJavaScriptライブラリです。ただし、両者にはいくつかの違いがあります。</p>

<p>Fetchは組み込みのブラウザAPIであり、リクエストとレスポンスを処理するためにプロミスを使用します。シンプルな構文を持ち、単純なリクエストには使いやすいですが、リクエストのキャンセル、進行イベント、自動リトライなどの高度な機能が欠けています。</p>

<p>Axiosは、HTTPリクエストを行うためのより豊富な機能を提供する人気のあるサードパーティのライブラリです。リクエストのキャンセル、進行イベント、自動リトライのサポートを提供し、また、JSON、XML、FormDataなどのレスポンスデータの処理をサポートしています。</p>

<p>Axiosを使用するメリットには次のようなものがあります：</p>

<p>1. より良いエラー処理：Axiosはエラーを処理するためのより堅牢なシステムを持ち、Fetchと比較してより役立つエラーメッセージを提供します。</p>

<p>2. インターセプター：Axiosは、リクエストやレスポンスが送信または受信される前にそれらを変更することを可能にするインターセプターを提供します。</p>

<p>3. リクエストおよびレスポンスデータの自動変換：Axiosは、リクエストおよびレスポンスデータを自動的に異なる形式に変換することができます。これはAPIとの作業時に非常に役立ちます。</p>

<p>4. リクエストの簡単なキャンセル：Axiosはリクエストをキャンセルする簡単な方法を提供し、遅いまたは信頼性の低いネットワークを扱う際に便利です。</p>

<p>要約すると、FetchとAxiosはJavaScriptでHTTPリクエストを行うための有用なツールですが、Axiosはより高度な機能とより強力なAPIを提供し、より複雑なアプリケーションを構築する際に非常に役立ちます。</p>

<p><b>Axios</b>は、ブラウザやNode.jsからのHTTPリクエストを行うためのライブラリです。プロミスを使用してリクエストを送信し、レスポンスを処理することが容易になります。</p>

<p>AxiosをReact.jsで使用するには、まず次のコマンドを使用してインストールする必要があります：</p>

<b>npm install axios</b>

<p>その後、ReactコンポーネントでAxiosを使用できます。例えば、次のコードはリモートサーバーにGETリクエストを送信し、レスポンスをページに表示します：</p>

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

<p>この例では、<b>useEffect</b>フックを使用してサーバーにGETリクエストを送信し、<b>data</b>ステート変数をレスポンスで更新します。その後、JSXを使用してデータ変数をページに表示します。</p>

<p>Axiosはまた、データを送信してリソースを変更するために使用できるPOST、PUT、DELETEなどの他のHTTPメソッドもサポートしています。axiosオブジェクトは、ヘッダー、タイムアウト、リクエストインターセプタなどの多くの構成オプションも提供しており、リクエストの動作をカスタマイズすることができます。</p>

<p>全体的に、AxiosはReact.jsでHTTPリクエストを処理するための強力で柔軟なライブラリであり、リモートAPIからデータを取得するなど、多くの一般的なタスクを簡素化することができます。</p>

<p>HTTPプロトコルは、さまざまな操作を行うためのいくつかのリクエストメソッドをサポートしています。ここでは、主要な4つのリクエストメソッドの概要と、それらをReactで使用する例を示します：</p>

<p>1. <b>GET</b>: サーバーからデータを取得するために使用されるリクエストメソッドです。Reactでは、<b>axios.get</b>メソッドを使用できます。</p>  
    
<code>
    <p>axios.<span className='blue'>get</span>(<span className='blue1'>'/api/data'</span>)</p>

    <p>.<span className='blue'>then</span>{'(response => {'}</p>

    <p>{'console'}.<span className='blue'>log</span>(response.<span className='blue'>data</span>); </p>

    <p>{'})'}</p>

    <p>.<span className='blue'>catch</span>{'(error => {' }</p>

    <p>{'console'}.<span className='blue'>log</span>(error);</p>
  
    <p>{'});'}</p>  
  </code> 

  <p>この例では、<b>/api/data</b>エンドポイントからデータを取得しています。リクエストが成功した場合は、レスポンスデータがコンソールに記録され、エラーが発生した場合はコンソールに記録されます。</p>
    
  <p>2. <b>PUT</b>: サーバー上の既存のデータを更新するために使用されるリクエストメソッドです。Reactでは、<b>axios.put</b>メソッドを使用できます：</p>  

  <code>
    <p>axios.<span className='blue'>put</span>{'('}<span className='blue1'>'/api/data/1'</span>, {'{'} <span className='blue'>newData</span>: <span className='blue1'>'updatedData'</span> {"})"}</p>

    <p>.<span className='blue'>then</span>{'('}response { '=> {' }</p>

    <p>{'console'}.<span className='blue'>log</span>(response.<span className='blue'>data</span>);</p>  

    <p>{'})'}</p>

    <p>.<span className='blue'>catch</span>{'(error => {'}</p>

    <p>{'console'}.<span className='blue'>log</span>(error);</p>

    <p>{'});'}</p>
 </code>

  <p>この例では、<b>/api/data/1</b>エンドポイントのデータを更新しています。新しいデータを <b>axios.put</b> の第2引数としてペイロードとして送信しています。リクエストが成功した場合は、レスポンスデータがコンソールに記録され、エラーが発生した場合はコンソールに記録されます。</p>    
    
  <p>3. <b>POST</b>: サーバー上で新しいデータを作成するために使用されるリクエストメソッドです。Reactでは、<b>axios.post</b>メソッドを使用できます</p>  
    
  <code>
    <p>axios.<span className='blue'>post</span>{'('}<span className='blue1'>'/api/data'</span>, {'{'} <span className='blue'>newData</span>: <span className='blue1'>'newData'</span> {"})"}</p>

    <p>.<span className='blue'>then</span>{'(response => {'}</p>

    <p>{'console'}.<span className='blue'>log</span>(response.<span className='blue'>data</span>);</p>

    <p>{'})'}</p>  

    <p>.<span className='blue'>catch</span>{'(error => {'}</p>

    <p>{'console'}.<span className='blue'>log</span>(error);</p> 

    <p>{'});'}</p> 
  </code>   

  <p>この例では、<b>/api/data</b>エンドポイントで新しいデータを作成しています。リクエストが成功した場合は、レスポンスデータがコンソールに記録され、エラーが発生した場合はコンソールに記録されます。</p>
    
  <p>4. <b>DELETE</b>: サーバー上の既存のデータを削除するために使用されるリクエストメソッドです。Reactでは、<b>axios.delete</b>メソッドを使用できます：</p>  
    
  <code>
    <p> axios.<span className='blue'>delete</span>(<span className='blue1'>'/api/data/1'</span>)  </p>

    <p>.<span className='blue'>then</span>{'(response => { '}</p>

    <p>{'console'}.<span className='blue'>log</span>(response.<span className='blue'>data</span>);</p>

    <p>{'}) '}</p>

    <p>.<span className='blue'>catch</span>{'(error => { '}</p>

    <p>{'console'}.<span className='blue'>log</span>(error);</p>

    <p>{'});'}</p>
  </code> 

    <p>この例では、<b>/api/data/1</b>エンドポイントのデータを削除しています。リクエストが成功した場合は、レスポンスデータがコンソールに記録され、エラーが発生した場合はコンソールに記録されます</p>

   <p>axiosの詳細については、公式ウェブサイトを参照してください：<a href=" https://axios-http.com" target='_blank' > 👉🏼  https://axios-http.com</a></p>


   <b><p>* 翻訳者の助けを借りて書かれたテキスト。 エラーが見つかった場合は、お知らせください *</p></b>
   
    <div className='ads-container'>  
  {/*  реклама  */}
</div>
    </div>
  )
}

export default JpReact_4;