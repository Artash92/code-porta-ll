import React from 'react';

function JpReact_10() {
  return (
    <div>
       <div className='ad-container'>  
          {/*  реклама  */}
        </div>
        
      <h2>HTTPエラー</h2>

{/* Informational responses (100 – 199) */}

<h3>情報応答 (100 – 199)</h3>
<p>
  <strong>100 Continue:</strong> サーバーはリクエストヘッダーを受信し、クライアントはリクエストボディを送信するべきです（たとえば、POSTリクエストの場合）。
</p>
<p>
  <strong>101 Switching Protocols:</strong> リクエスターはサーバーにプロトコルの切り替えを要求し、サーバーはそれに同意しました。
</p>
<p>
  <strong>102 Processing:</strong> サーバーはリクエストを受信して処理していますが、まだ応答が利用できません。
</p>
<p>
  <strong>103 Early Hints:</strong> サーバーが情報応答に含まれるヘッダーフィールドを含む最終応答を送信する可能性が高いことをクライアントに示します。
</p>

{/* Successful responses (200 – 299) */}

<h3>成功応答 (200 – 299)</h3>
<p>
  <strong>200 OK:</strong> リクエストが成功しました。応答とともに返される情報は、リクエストで使用されたメソッドに依存します。
</p>
<p>
  <strong>201 Created:</strong> リクエストは完了し、新しいリソースが作成されました。
</p>
<p>
  <strong>202 Accepted:</strong> リクエストは処理のために受け入れられましたが、処理は完了していません。
</p>
<p>
  <strong>203 Non-Authoritative Information:</strong> サーバーはリクエストを正常に処理しましたが、別のソースからの情報が返されています。
</p>
<p>
  <strong>204 No Content:</strong> サーバーはリクエストを正常に処理し、コンテンツを返していません。
</p>
<p>
  <strong>205 Reset Content:</strong> サーバーはリクエストを正常に処理しましたが、コンテンツを返していません。クライアントはドキュメントビューをリセットする必要があります。
</p>
<p>
  <strong>206 Partial Content:</strong> サーバーはクライアントが送信したレンジヘッダーによって、リソースの一部のみを配信しています。
</p>
<p>
  <strong>207 Multi-Status:</strong> 複数のリソースに関する情報を伝達するマルチステータス応答は、複数のステータスコードが適切な状況で使用される場合に使用されます。
</p>

{/* Redirection messages (300 – 399) */}

<h3>リダイレクトメッセージ (300 – 399)</h3>
<p>
  <strong>300 Multiple Choices:</strong> 要求されたリソースには複数の選択肢があり、それぞれが異なる属性と応答を持っています。
</p>
<p>
  <strong>301 Moved Permanently:</strong> 要求されたリソースは恒久的に新しいURLに移動され、このリソースへの将来の参照は返されたURLのいずれかを使用する必要があります。
</p>
<p>
  <strong>302 Found:</strong> 要求されたリソースは一時的に別のURIの下にあります。
</p>
<p>
  <strong>303 See Other:</strong> リクエストへの応答は別のURIにあり、そのリソースを取得するためにGETメソッドを使用する必要があります。
</p>
<p>
  <strong>304 Not Modified:</strong> リソースがリクエストヘッダーのIf-Modified-SinceまたはIf-None-Matchで指定されたバージョン以降に変更されていないことを示します。この場合、クライアントが以前にダウンロードしたコピーをまだ持っているため、リソースを再送信する必要はありません。
</p>
<p>
  <strong>305 Use Proxy:</strong> リクエストされたリソースは、Locationフィールドによって指定されたプロキシを介してアクセスする必要があります。
</p>
<p>
  <strong>307 Temporary Redirect:</strong> 要求されたリソースは一時的に別のURIの下にあります。
</p>
<p>
  <strong>308 Permanent Redirect:</strong> 要求されたリソースは恒久的に別のURIに移動され、クライアントはこの新しいURIへのすべての参照を更新する必要があります。
</p>

{/* Client error responses (400 – 499) */}

<h3>クライアントエラー応答 (400 – 499)</h3>
<p>
  <strong>400 Bad Request:</strong> クライアントエラーにより、サーバーはリクエストを処理できません（たとえば、形式が不正、サイズが大きすぎる、無効なリクエストメッセージの構築、または誤ったリクエストルーティング）。
</p>
<p>
  <strong>401 Unauthorized:</strong> 403 Forbiddenと同様ですが、認証が必要で失敗した場合またはまだ提供されていない場合に使用されます。
</p>
<p>
  <strong>402 Payment Required:</strong> 今後の使用のために予約されています。
</p>
<p>
  <strong>403 Forbidden:</strong> クライアントには要求されたリソースにアクセスする権限がありません。
</p>
<p>
  <strong>404 Not Found:</strong> サーバーは要求されたリソースを見つけることができません。
</p>
<p>
  <strong>405 Method Not Allowed:</strong> リクエストラインで受信したメソッドは、原点サーバーによって認識されますが、対象のリソースでサポートされていません。
</p>
<p>
  <strong>406 Not Acceptable:</strong> ターゲットリソースには、リクエストで受信した積極的なネゴシエーションヘッダーフィールドに応じて、ユーザーエージェントが受け入れ可能な現在の表現がありません。
</p>
<p>
  <strong>407 Proxy Authentication Required:</strong> クライアントは最初にプロキシで自分自身を認証する必要があります。
</p>
<p>
  <strong>408 Request Timeout:</strong> クライアントはサーバーが待機する時間内にリクエストを生成しませんでした。
</p>
<p>
  <strong>409 Conflict:</strong> 現在のターゲットリソースの状態との競合のため、リクエストを完了できませんでした。
</p>
<p>
  <strong>410 Gone:</strong> ターゲットリソースがサーバーで利用できず、転送先アドレスが不明であることを示します。
</p>
<p>
  <strong>411 Length Required:</strong> サーバーは定義されたContent-Lengthなしではリクエストを受け入れません。
</p>
<p>
  <strong>412 Precondition Failed:</strong> サーバーでテストされたときに、リクエストヘッダーフィールドに指定された1つ以上の条件が偽であることが判明しました。
</p>
<p>
  <strong>413 Payload Too Large:</strong> サーバーは、リクエストペイロードが処理できるサーバーの能力を超えているため、リクエストの処理を拒否しています。
</p>
<p>
  <strong>414 URI Too Long:</strong> サーバーは、リクエストターゲットがサーバーが解釈するのに適切でない長さであるため、リクエストをサービスするのを拒否しています。
</p>
<p>
  <strong>415 Unsupported Media Type:</strong> オリジンサーバーは、ペイロード形式がサポートされていない形式であるため、リクエストをサービス拒否しています。
</p>
<p>
  <strong>416 Range Not Satisfiable:</strong> クライアントがファイルの一部（バイトサービング）を要求しましたが、サーバーはその部分を供給できません。
</p>
<p>
  <strong>417 Expectation Failed:</strong> サーバーはExpectリクエストヘッダーフィールドの要件を満たすことができません。
</p>
<p>
  <strong>418 I'm a teapot:</strong> ティーポットでコーヒーを淹れようとする試みは、エラーコード「418 I'm a teapot」で結果が返されるべきです。
</p>
<p>
  <strong>420 Enhance Your Calm:</strong> クライアントがレート制限されているときにTwitter Search and Trends APIによって返されます。
</p>
<p>
  <strong>421 Misdirected Request:</strong> 要求は応答を生成できないサーバーに向けられました。
</p>
<p>
  <strong>422 Unprocessable Entity:</strong> 要求は正しく形成されていましたが、意味的なエラーのために処理できませんでした。
</p>
<p>
  <strong>423 Locked:</strong> アクセスされているリソースはロックされています。
</p>
<p>
  <strong>425 Too Early:</strong> サーバーは、再送信される可能性のあるリクエストの処理をリスクにさらしたくありません。
</p>
<p>
  <strong>426 Upgrade Required:</strong> サーバーは現在のプロトコルを使用してリクエストを実行することを拒否しますが、クライアントが異なるプロトコルにアップグレードした後に行うことができるかもしれません。
</p>
<p>
  <strong>428 Precondition Required:</strong> オリジンサーバーはリクエストが条件付きであることを要求します。
</p>
<p>
  <strong>429 Too Many Requests:</strong> ユーザーが指定された時間内に多すぎるリクエストを送信しました。
</p>

{/* Server error responses (500 – 599) */}

<h3>サーバーエラー応答 (500 – 599)</h3>
<p>
  <strong>500 Internal Server Error:</strong> 予期しない状態が発生し、より具体的なメッセージが適切でない場合に与えられる一般的なエラーメッセージです。これは、サーバーサイドのさまざまな問題によって引き起こされる非常に一般的なエラーです。
</p>
<p>
  <strong>501 Not Implemented:</strong> サーバーは、リクエストメソッドを認識しないか、要求を満たす能力がありません。
</p>
<p>
  <strong>502 Bad Gateway:</strong> サーバーは、ゲートウェイまたはプロキシとしてアクションする間に、アップストリームサーバーからの無効な応答を受信しました。
</p>
<p>
  <strong>503 Service Unavailable:</strong> サーバーは現在、一時的なオーバーロードまたはメンテナンスのためにリクエストを処理できません。
</p>
<p>
  <strong>504 Gateway Timeout:</strong> サーバーは、指定されたURIによって指定されたアップストリームサーバーまたは完了に必要な他の補助サーバーからのタイムリーな応答を受信しませんでした。
</p>
<p>
  <strong>505 HTTP Version Not Supported:</strong> サーバーは、リクエストメッセージで使用されたHTTPのメジャーバージョンをサポートしないか、サポート拒否しています。
</p>
<p>
  <strong>506 Variant Also Negotiates:</strong> サーバーには内部構成エラーがあります：選択された変種リソースは、透過的なコンテンツネゴシエーションに参加するように構成されており、したがって、ネゴシエーションプロセスの適切なエンドポイントではありません。
</p>
<p>
  <strong>507 Insufficient Storage:</strong> サーバーは、リクエストを完了するために必要な表現を格納できません。
</p>
<p>
  <strong>508 Loop Detected:</strong> サーバーは、リクエストを処理する間に無限ループを検出しました。
</p>
<p>
  <strong>510 Not Extended:</strong> サーバーがそれを満たすためにリクエストのさらなる拡張を必要としています。
</p>
<p>
  <strong>511 Network Authentication Required:</strong> クライアントはネットワークアクセスを取得するために認証する必要があります。
</p>

<b><p>* 翻訳者の助けを借りて書かれたテキスト。 エラーが見つかった場合は、お知らせください *</p></b>
   
 <div className='ads-container'>  
  {/*  реклама  */}
</div>
    </div>
  )
}

export default JpReact_10;