import React from 'react';

function JpJSEs5_9() {
  return (
    <div>
      <div className='ad-container'>  
          {/*  реклама  */}
        </div>
        
        <h1>擬似プロトコル JavaScript</h1>

<p>「擬似プロトコル」javascriptの使用例：アンカー{'（<a>）'}タグのhref属性で。ユーザーがリンクをクリックすると、href属性で指定されたJavaScriptコードが実行されます。</p>

<p>以下は、javascript:プロトコルを使用せずに同じコードを書く別の方法です：</p>

<code>
  <p>{'<'}<span className='green'>a</span> <span className='blue'>href</span>=<span className='blue1'>"#"</span> <span className='blue'>onclick</span>=<span className='blue1'>"myFunction(); return false;"</span>{'>'}Click{'</'}<span className='green'>a</span>{'>'}</p>
  <p>{'<'}<span className='green'>script</span>{'>'}</p>
  <p>&nbsp;<span className='red'>function</span> myFunction() {'{'}</p>
  <p>&nbsp;&nbsp;{'console'}.<span className='blue'>log</span>(<span className='blue1'>"Hello"</span>);</p>
  <p>&nbsp;{'}'}</p>
  <p>{'</'}<span className='green'>script</span>{'>'}</p>
</code>

<p>この例では、空のアンカーhref属性とonclickイベントハンドラを使用して、ユーザーがリンクをクリックしたときにmyFunction()関数を呼び出します。return falseステートメントにより、リンクが新しいページに移動しないようになります。</p>

<p>両方の例は、リンクをクリックするとコンソールに "Hello" が記録されるという同じ結果を達成します。ただし、第2の例は、JavaScriptコードをHTMLマークアップから分離するため、コードのメンテナンスとデバッグが容易になるため、より良い実践と見なされています。</p>

<h2>ブラウザオブジェクトモデル（BOM）</h2>

<p>JavaScript ES5では、Document Object Model（DOM）はWebページのHTML要素を構造化されたツリーとして表し、JavaScriptコードがWebページのコンテンツと動的にやり取りすることを可能にします。以下は、ブラウザウィンドウオブジェクト内でよく使用されるオブジェクトのいくつかです：</p>

<p>1. <b>window：</b> ブラウザのJavaScript階層の最上位オブジェクトであり、ブラウザウィンドウを表します。すべてのグローバルJavaScriptオブジェクト、関数、および変数は自動的にwindowオブジェクトのメンバーになります。</p>

<p>2. <b>history：</b> historyオブジェクトはJavaScriptがブラウザの履歴とやり取りするのに使用され、ページ間を前後に移動できます。</p>

<p>例：</p>

<code><p>window.history.back(); <span className='green'>// 1ページ戻る</span> </p></code>

<p>3. <b>navigator：</b> navigatorオブジェクトは、ユーザーのコンピューターで実行されているWebブラウザとオペレーティングシステムに関する情報を提供します。</p>

<p>例：</p>

<code><p>{'console'}.<span className='blue'>log</span>(navigator.userAgent); <span className='green'>// ブラウザのユーザーエージェント文字列を出力します</span></p></code>

<p>4. <b>screen：</b> screenオブジェクトは、ユーザーの画面解像度とカラーの深さに関する情報を提供します。</p>

<p>例：</p>

<code><p>{'console'}.<span className='blue'>log</span>(screen.width);<span className='green'> // ユーザーの画面の幅を出力します</span></p></code>

<p>5. <b>location：</b> locationオブジェクトは、現在のWebページのURLに関する情報を提供し、新しいURLに移動することを可能にします。</p>

<p>例：</p>

<code><p>{'console'}.<span className='blue'>log</span>(location.href);<span className='green'> // 現在のURLを出力します location.href = "https://www.example.com"; // 新しいURLに移動します</span></p></code>

<p>6. <b>document：</b> documentオブジェクトは、現在のWebページのHTMLコンテンツを表し、JavaScriptコードがページのコンテンツとやり取りし、操作することを可能にします。</p>

<p>例：</p>

<code><p>{'document'}.<span className='blue'>getElementById</span>(<span className='blue1'>"myDiv"</span>).<span className='blue'>innerHTML </span>= <span className='blue1'>"新しいコンテンツ"</span>; <span className='green'>// IDが "myDiv" の要素のHTMLコンテンツを変更します</span></p></code>

<p>7. <b>メソッド：</b> ブラウザウィンドウオブジェクトには、alert()、prompt()、confirm()、setInterval()、setTimeout()などの多くの他のメソッドがあり、ダイアログボックスを表示したり、タイマーを設定したりすることができます。</p>

<p>例：</p>

<code><p><span className='blueviole'>alert</span>(<span className='blue1'>"Hello, world!"</span>); <span className='green'>// メッセージ "Hello, world!" を含むアラートダイアログボックスを表示します</span></p></code>

<h5>ブラウザオブジェクトモデル（BOM）は、JavaScript APIの一部であり、ブラウザのウィンドウオブジェクトとそのプロパティにアクセスできます。 windowオブジェクトのプロパティの1つは、ユーザーの閲覧履歴を含むhistoryオブジェクトです。</h5>

<p>historyオブジェクトには、閲覧履歴を操作するためのいくつかのメソッドが用意されています。</p>

<p><b>history.go()</b> メソッドは、特定のページに移動するために使用できます。このメソッドは、正または負の整数を引数として受け取ります。引数が正の整数の場合、履歴を進み、負の整数の場合、履歴を戻します。例えば、history.go(-1) は、閲覧履歴を1ページ戻りますし、history.go(2) は、2ページ進みます。</p>

<p><b>history.back()</b> メソッドは、閲覧履歴を1ページ戻ります。これは <b>history.go(-1)</b> と同等です。</p>

<p><b>history.forward()</b> メソッドは、閲覧履歴を1ページ進めます。これは <b>history.go(1)</b> と同等です。</p>

<p><b>history.length </b>プロパティは、閲覧履歴内のページ数を返します。</p>

<p>以下は、historyオブジェクトを使用する方法の例です：</p>

<code>
  <p><span className='green'>{ '// 1ページ戻る'} </span> history.<span className='blue'>back</span>();</p>
  <p><span className='green'>{ '// 1ページ進む'} </span>history.<span className='blue'>forward</span>();</p>
  <p><span className='green'>{ '// 3番目のページに移動'} </span> history.<span className='blue'>go</span>(<span className='blue1'>2</span>);</p>
  <p><span className='green'>{ '// 閲覧履歴内のページ数を取得'}</span>  {'console'}.<span className='blue'>log</span>(history.<span className='blue'>length</span>);</p>
</code>

<h4>ブラウザオブジェクトモデル（BOM）は、JavaScript APIの一部であり、ブラウザのウィンドウとそのプロパティにアクセスする機能を提供します。NavigatorオブジェクトはBOMの一部であり、現在使用されているブラウザを表します。現在使用されているブラウザに関する情報を提供します。</h4>

<p>以下は、Navigatorオブジェクトのいくつかのプロパティとその説明です：</p>
   
<code>
  <p>navigator.<span className='blue'>appCodeName</span>: ブラウザのコード名を返します。</p>
  <p>navigator.<span className='blue'>appName</span>: ブラウザの名前を返します。</p>
  <p>navigator.<span className='blue'>appVersion</span>: ブラウザのバージョン情報を返します。</p>
  <p>navigator.<span className='blue'>language</span>: ブラウザが設定されている言語を返します。</p>
  <p>navigator.<span className='blue'>platform</span>: ブラウザが実行されているオペレーティングシステムプラットフォームを返します。</p>
  <p>navigator.<span className='blue'>userAgent</span>: ブラウザのユーザーエージェント文字列を返します</p>
</code>

<p>Navigatorオブジェクトの使用例：</p>

<code>
  <p>{'console'}.<span className='blue'>log</span>(navigator.appName); <span className='green'>// ブラウザの名前を出力します</span></p>
  <p>{'console'}.<span className='blue'>log</span>(navigator.userAgent); <span className='green'>// ブラウザのユーザーエージェント文字列を出力します</span></p>
</code>

<p>Navigatorオブジェクトのプロパティを使用することで、ユーザーが実行しているブラウザに応じて異なる動作をするJavaScriptコードを書くことができます。</p>

<h3>ブラウザオブジェクトモデル（BOM）は、JavaScriptによってブラウザウィンドウとそのプロパティとのやり取りを提供します。window.screenオブジェクトはBOMの一部であり、ユーザーの画面に関する情報を提供します。</h3>

<p><b>window.screen</b>のプロパティの詳細：</p>

<p><b>screen.height:</b> ユーザーの画面の総高さをピクセル単位で返します。</p>

<p><b>screen.width:</b> ユーザーの画面の総幅をピクセル単位で返します。</p>

<p><b>screen.availHeight:</b> ユーザーの画面の利用可能な高さをピクセル単位で返します。Windowsのタスクバーやその他のシステム要素は除外されます。</p>

<p><b>screen.availWidth:</b> ユーザーの画面の利用可能な幅をピクセル単位で返します。Windowsのタスクバーなどのシステム要素は除外されます。</p>

<p>これらのプロパティを使用する例：</p>

<code>
  <p>{'console'}.<span className='blue'>log</span>(<span className='blue1'>"総画面の高さ: "</span> + window.<span className='blue'>screen</span>.<span className='blue'>height</span> + <span className='blue1'>" ピクセル"</span>);</p>
  <p>{'console'}.<span className='blue'>log</span>(<span className='blue1'>"総画面の幅: "</span> + window.<span className='blue'>screen</span>.<span className='blue'>width</span> + <span className='blue1'>" ピクセル"</span>);</p>
  <p>{'console'}.<span className='blue'>log</span>(<span className='blue1'>"利用可能な画面の高さ: "</span> + window.<span className='blue'>screen</span>.<span className='blue'>availHeight</span> + <span className='blue1'>" ピクセル"</span>);</p>
  <p>{'console'}.<span className='blue'>log</span>(<span className='blue1'>"利用可能な画面の幅: "</span> + window.<span className='blue'>screen</span>.<span className='blue'>availWidth</span> + <span className='blue1'>" ピクセル"</span>);</p>
</code>

<p>このコードは、画面の高さと幅、および利用可能な画面の高さと幅をコンソールに記録します。</p>

<p>なお、screenオブジェクトは読み取り専用であり、変更することはできません。</p>

<h3>ブラウザオブジェクトモデル（BOM）は、ブラウザウィンドウとそのプロパティとのやり取りを提供するJavaScriptオブジェクトのセットです。BOMのオブジェクトの1つはlocationオブジェクトであり、ブラウザウィンドウの現在のURLを表します。locationオブジェクトには、URLとやり取りするためにアクセスおよび変更できる複数のプロパティがあります。</h3>

<p><b>location</b>オブジェクトのプロパティの説明：</p>

<p><b>location.protocol:</b> このプロパティは、URLで使用されるプロトコルを指定します。たとえば、<span className='blue1'>"http:"</span> または <span className='blue1'>"https:"</span> などです。</p>

<p><b>location.host:</b> このプロパティは、URL内のドメイン名とポート番号を指定します。例：<span className='blue1'>"www.site.com:8080"</span> などです。</p>

<p><b>location.hostname:</b> このプロパティは、URL内のドメイン名を指定します。例：<span className='blue1'>"www.site.com"</span> などです。</p>

<p><b>location.href:</b> このプロパティは、完全なURLを指定します。例：<span className='blue1'>"http://www.site.com/about/?name=javascript#content"</span> などです。</p>

<p><b>location.port:</b> このプロパティは、URL内のポート番号を指定します。例：<span className='blue1'>"8080"</span> などです。</p>

<p><b>location.pathname:</b> このプロパティは、URLのパスを指定します。例：<span className='blue1'>"/about/"</span> などです。</p>

<p><b>location.search:</b> このプロパティは、URL内のクエリ文字列を指定します。例：<span className='blue1'>"?name=javascript"</span> などです。</p>

<p><b>location.hash:</b> このプロパティは、URL内のフラグメント識別子を指定します。例：<span className='blue1'>"#content"</span> などです。</p>

<p><b>location</b>オブジェクトのこれらのプロパティにアクセスし、変更することで、ブラウザウィンドウの現在のURLとやり取りすることができます。これには、ユーザーを別のページにリダイレクトしたり、クエリ文字列を変更したりするなどの操作が含まれます。</p>

<p><b>setTimeout()</b>メソッドは、指定された時間が経過した後に指定された関数またはコード片を実行する組み込みのJavaScript関数です。2つの引数を取ります：実行する関数と、ミリ秒単位の時間遅延です。</p>

<p>提供された例のコードでは、<b>timer</b>という変数が宣言され、<b>setTimeout()</b>関数の戻り値が代入されます。ここで実行されている関数は単純な <b>console.log()</b> 文で、2秒後（2000ミリ秒後）にコンソールに "Hello, World!" を出力します。</p>
 
<p>次に、<b>clearTimeout()</b>メソッドがタイマー変数を引数として呼び出されます。このメソッドは、<b>setTimeout()</b>によって設定されたタイムアウトをキャンセルします。つまり、指定された遅延後に <b>console.log()</b> 文が実行されることはありません。</p>

<p>要するに、このコードは2秒後に関数を実行するタイマーを設定しますが、そのタイマーが完了する前に即座にキャンセルします。これはJavaScriptで<b>setTimeout()</b>と<b>clearTimeout()</b>メソッドを使用する単純な例です。</p>   
  
<p><b>setTimeout</b>を使用した例のコード：</p> 
 
 <code>
  <p><span className='blueviole'>function </span><span className='blue'>sayHello</span>() {'{'}</p>
  <p>{'console'}.<span className='blue'>log</span>(<span className='red'>"Hello, World!"</span>);</p>
  <p>{'}'}</p>
  <p className='green'>// 2秒後に関数を呼び出す</p>
  <p><span className='blueviole'>var</span> <span className='blue'>timer</span> = setTimeout(sayHello, <span className='blue'>2000</span>);</p>
  <p className='green'>// 実行前にタイマーをキャンセル</p>
  <p>clearTimeout(timer);</p>
 </code>

<p>この例では、<b>setTimeout</b>関数を使用して、2秒後に <b>sayHello</b> 関数の実行を遅延させます。関数はsetTimeoutにパラメータとして渡され、ミリ秒単位の遅延とともに指定されます。setTimeout関数は、実行前にタイマーIDを返し、これを<b>clearTimeout</b>関数を使用して実行前にキャンセルします。</p>

<h3>イベント</h3>

<p>Document Object Model（DOM）は、ウェブドキュメントのプログラミングインターフェイスです。ページを表現し、プログラムが文書構造、スタイル、コンテンツを変更できるようにします。イベントは、ブラウザで発生するアクションや出来事のことであり、ボタンのクリック、ページのスクロール、キーボードでキーを押すなどが該当します。</p>

<p>onclick</p>
<p>onmousedown</p>
<p>onmouseup</p>
<p>onmousemove</p>
<p>onmouseover</p>
<p>onmouseout</p>
<p>onkeydown</p>
<p>onkeyup</p>
<p>onkeypress</p>
<p>onfocus</p>
<p>onblur</p>
<p>onsubmit</p>
<p>onreset</p>
<p>onselect</p>
<p>onchange</p>
<p>onscroll</p>
<p>onload</p>
<p>onunload</p>

<p>上記のイベントはイベントハンドラです。これらは、特定のイベントがウェブページで発生したときに実行される関数です。たとえば、「onclick」イベントハンドラは、ウェブページ上の要素をクリックしたときに実行されます。同様に、「onload」イベントハンドラは、ページがブラウザで完全に読み込まれたときに実行されます。</p>

<p>これらのイベントハンドラは、「onclick」や「onload」などのイベント名の後に「on」接頭辞を付けてHTML要素に追加することができます。指定されたイベントが発生すると、イベントハンドラに割り当てられた関数が実行されます。これにより、ユーザーアクションに応答するインタラクティブなウェブページを作成できます。</p>      
   
<b><p>* 翻訳者の助けを借りて書かれたテキスト。 エラーが見つかった場合は、お知らせください *</p></b>
  
  <div className='ads-container'>  
    {/*  реклама  */}
  </div>
    </div>
  )
}

export default JpJSEs5_9;