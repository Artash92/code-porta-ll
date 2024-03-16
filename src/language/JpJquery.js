import React from 'react';

function JpJquery() {
  return (
    <div>
      <div className='ad-container'>  
          {/*  реклама  */}
        </div>

        <h1>JavaScript（jQuery）</h1>

<p>jQuery（ジェイクエリー）は、JavaScriptコードの記述やHTMLドキュメントの操作を簡素化するJavaScriptライブラリです。2006年にJohn Resigによって作成され、現在では最も人気のあるJavaScriptライブラリの1つです。</p>

<p>jQueryは、文書オブジェクトモデル（DOM）や、非同期JavaScriptとXML（AJAX）、アニメーションの作成に関するさまざまな機能を提供しています。また、jQueryライブラリがブラウザの互換性の問題を自動的に処理するため、クロスブラウザコードの記述を簡素化します。</p>

<p>以下は、jQueryの使用例です：</p>

<p>DOM要素の操作：</p>

<code>
  <p><span className='green'>// IDが"myElement"の要素のテキストを変更する</span></p>
  <p><span className='blueviole'>$</span>(<span className='blue1'>'#myElement'</span>).<span className='blue'>text</span>(<span className='blue1'>'新しいテキスト'</span>); </p>
  <p><span className='green'>// ページに新しい要素を追加する</span> </p>
  <p><span className='blueviole'>$</span>(<span className='blue1'>'body'</span>).<span className='blue'>append</span>(<span className='blue1'>'{'<'}div{'>'}新しい要素{'</'}div{'>'}'</span>); </p>
</code>

<p>2. イベントの処理：</p>

<code>
  <p><span className='green'>// IDが"myButton"のボタンのクリックイベントを処理する</span></p>
  <p><span className='blueviole'>$</span>(<span className='blue1'>'#myButton'</span>).<span className='blue'>click</span>{'('}<span className='red'>function</span>() {"{"}</p>
  <p>&nbsp;<span className='blueviole'>alert</span>(<span className='blue1'>'ボタンがクリックされました！'</span>);</p>
  <p>{"});"}</p>
</code>

<p>3. AJAXの使用：</p>

<code>
  <p><span className='green'>// サーバーに対してAJAXリクエストを行い、応答でページ要素を更新する</span></p>
  <p> <span className='blueviole'>$</span>.<span className='blue'>get</span>{'('}<span className='blue1'>'https://example.com/api/data'</span>, <span className='red'>function</span>(response) {"{"}</p>
  <p><span className='blueviole'>$</span>(<span className='blue1'>'#myElement'</span>).<span className='blue'>text</span>(response); </p>
  <p>{" }); "}</p>
</code>

<p>全体的に、jQueryはJavaScriptの開発を簡素化し、動的でインタラクティブなウェブページを作成しやすくする強力で多目的なツールです。</p>

<b>HTMLドキュメントにjQueryを含めるには、次の手順を使用できます：</b>

<p>1. 公式ウェブサイト<a href="https://jquery.com/download/" target='_blank' > 👉🏼 (https://jquery.com/download/)</a>からjQueryライブラリをダウンロードするか、CDN（コンテンツデリバリーネットワーク）リンクを使用します。</p>

<p>2. 新しいHTMLファイルを作成し、HTMLドキュメントの「head」セクション内に次のコードを追加して、jQueryライブラリを含めます：</p>

<code>
  <p>{'<'}<span className='green'>head</span>{'>'}</p>
  <p>&nbsp;{'<'}<span className='green'>script</span> <span className='blue'>src</span>=<span className='blue1'>"path/to/jquery.js"</span>{'>'}{'</'}<span className='green'>script</span>{'>'}</p>
  <p>{'</'}<span className='green'>head</span>{'>'}</p>
</code>

<p>実際のパスに「path/to/jquery.js」を置き換えるか、CDNリンクを使用してください：</p>

<code>
  <p>{'<'}<span className='green'>head</span>{'>'}</p>
  <p>&nbsp;{'<'}<span className='green'>script</span> <span className='blue'>src</span>=<span className='blue1'>"https://code.jquery.com/jquery-3.6.0.min.js"</span>{'>'}{'</'}<span className='green'>script</span>{'>'}</p>
  <p>{'</'}<span className='green'>head</span>{'>'}</p>
</code>

<p>3. HTMLドキュメントにjQueryライブラリを含めたら、jQueryライブラリを参照するJavaScriptコードを書くことで使用を開始できます。</p>

<p>たとえば、IDが「myElement」のHTML要素のテキストを変更するには、次のコードを使用できます：</p>

<code>
  <p>{'<'}<span className='green'>body</span>{'>'}</p>
  <p>&nbsp;{'<'}<span className='green'>div</span> <span className='blue'>id</span>=<span className='blue1'>"myElement"</span>{'>'}こんにちは、世界！{'</'}<span className='green'>div</span>{'>'}</p>
  <p>&nbsp;{'<'}<span className='green'>script</span>{'>'}</p>
  <p>&nbsp;&nbsp;{'$(document).ready(function() {'}</p>
  <p>&nbsp;&nbsp;&nbsp;<span className='blueviole'>$</span>(<span className='blue1'>"#myElement"</span>).<span className='blue'>text</span>(<span className='blue1'>"新しいテキスト！"</span>);</p>
  <p>&nbsp;&nbsp;{'});'}</p>
  <p>&nbsp;{'</'}<span className='green'>script</span>{'>'}</p>
  <p>{'</'}<span className='green'>body</span>{'>'}</p>
</code>

<p>この例では、jQueryを使用してIDが「myElement」の要素を選択し、そのテキストを「新しいテキスト！」に変更しています。コードはdocument ready関数でラップされているため、ドキュメントの読み込みが完了した後にコードが実行されます。</p>

<p>全体的に、HTMLドキュメントにjQueryを含めることは、jQueryライブラリを参照し、ライブラリを使用してHTML要素を操作するJavaScriptコードを書くという簡単なプロセスです。</p>

<p>jQueryの構文は、CSSスタイルのセレクタとJavaScriptコードの組み合わせであり、HTML要素を選択および操作するのが簡単です。以下は、jQueryの構文のいくつかの例です：</p>

<p><b>1. 要素の選択</b></p>

<p>HTML要素を選択するには、CSSスタイルのセレクタを引数として取るjQuery関数を使用できます。たとえば、ページ上のすべての「p」要素を選択するには、次のコードを使用できます：</p>

<code><p><span className='blueviole'>$</span>(<span className='blue1'>'p'</span>) </p> </code>

<p>要素の関係に基づいて要素を選択するためにセレクタを連結することもできます。たとえば、「div」要素の子であるすべての「p」要素を選択するには、次のコードを使用できます：</p>

<code><p><span className='blueviole'>$</span>(<span className='blue1'>'div {'>'} p'</span>)</p></code>

<p><b>2. 要素の修正</b></p>

<p>要素を選択した後は、jQueryを使用してそのコンテンツ、属性、およびCSSプロパティを変更できます。たとえば、ページ上のすべての「p」要素のテキストを変更するには、次のコードを使用できます：</p>

<code>
  <p><span className='blueviole'>$</span>(<span className='blue1'>'p'</span>).<span className='blue'>text</span>(<span className='blue1'>'新しいテキスト'</span>)</p>
  <p>要素に<span className='green'>クラス</span>を追加するには、<span className='blue1'>"addClass"</span>メソッドを使用します：</p>
  <p><span className='blueviole'>$</span>(<span className='blue1'>'p'</span>).<span className='blue'>addClass</span>(<span className='blue1'>'highlight'</span>)</p>
</code>

<p><b>3. イベントの処理</b></p>

<p>jQueryを使用して、クリック、マウスオーバー、キープレスなどのイベントを処理できます。たとえば、「myButton」というIDを持つボタンのクリックイベントを処理するには、次のコードを使用できます：</p>

<code>
  <p><span className='blueviole'>$</span>(<span className='blue1'>'#myButton'</span>).<span className='blue'>click</span>{'('}<span className='red'>function</span>() {"{"}</p>    
  <p>&nbsp;<span className='blueviole'>alert</span>(<span className='blue1'>'ボタンがクリックされました！'</span>) </p> 
  <p>{"})"}</p>
</code>

<p><b>4. AJAXとの作業</b></p>

<p>jQueryを使用すると、AJAXリクエストの処理が簡単になります。たとえば、URLにGETリクエストを送信して応答を処理するには、次のコードを使用できます：</p>

<code>
  <p>$.<span className='blue'>get</span>{'('}<span className='blue1'>'https://example.com/data'</span>, <span className='red'>function</span>(response) {"{"}</p>
  <p>&nbsp;{"console"}.<span className='blue'>log</span>(response)</p>
  <p>{"}) "}</p>
</code>

<p>全体的に、jQueryの構文は学習と使用が容易であり、HTML要素を操作したり、ウェブアプリケーションでイベントを処理する強力な方法を提供します。</p>

<p><b>jQueryのトラバースメソッドは、DOMツリー内の要素をナビゲートして検索するために使用されます。次に、兄弟要素を扱ういくつかのトラバースメソッドの例を示します。</b></p>    

<p><b>1. next() メソッド：</b> </p>

<p>next() メソッドは、選択した要素の次の兄弟要素を返します。たとえば：</p>

<code>
  <p><span className='blueviole'>$</span>(document).<span className='blue'>ready</span>{'('}<span className='red'>function</span>() {'{'}</p> 
  <p>&nbsp;<span className='blueviole'>$</span>(<span className='blue1'>"h2"</span>).<span className='blue'>next</span>().<span className='blue'>css</span>(<span className='blue1'>"background-color", "yellow"</span>); </p>
  <p>{'}); '}</p>
</code>

<p>このコードは、すべての "h2" 要素を選択し、その次の兄弟要素にCSSスタイルを適用して、背景色を黄色に変更します。</p>

<p><b>2. prev() メソッド：</b></p>

<p>prev() メソッドは、選択した要素の前の兄弟要素を返します。たとえば：</p>

<code>
  <p><span className='blueviole'>$</span>(document).<span className='blue'>ready</span>{'('}<span className='red'>function</span>() {'{'}</p> 
  <p>&nbsp;<span className='blueviole'>$</span>(<span className='blue1'>"h2"</span>).<span className='blue'>prev</span>().<span className='blue'>css</span>(<span className='blue1'>"background-color", "yellow"</span>); </p>
  <p>{'});'}</p>
</code>

<p>このコードは、すべての "h2" 要素を選択し、その前の兄弟要素にCSSスタイルを適用して、背景色を黄色に変更します。</p>

<b>3. nextAll() メソッド：</b>

<p>nextAll() メソッドは、選択した要素のすべての次の兄弟要素を返します。たとえば：</p>

<code>
  <p><span className='blueviole'>$</span>(document).<span className='blue'>ready</span>{'('}<span className='red'>function</span>() {'{'}</p> 
  <p>&nbsp;<span className='blueviole'>$</span>(<span className='blue1'>"h2"</span>).<span className='blue'>nextAll</span>().<span className='blue'>css</span>(<span className='blue1'>"background-color", "yellow"</span>); </p>
  <p>{'}); '}</p>
</code>

<p>このコードは、すべての "h2" 要素を選択し、それらのすべての次の兄弟要素にCSSスタイルを適用して、背景色を黄色に変更します。</p>

<b>4. prevAll() メソッド：</b>

<p>prevAll() メソッドは、選択した要素のすべての前の兄弟要素を返します。たとえば：</p>

<code>
  <p><span className='blueviole'>$</span>(document).<span className='blue'>ready</span>{'('}<span className='red'>function</span>() {'{'}</p> 
  <p>&nbsp;<span className='blueviole'>$</span>(<span className='blue1'>"h2"</span>).<span className='blue'>prevAll</span>().<span className='blue'>css</span>(<span className='blue1'>"background-color", "yellow"</span>); </p>
  <p>{'}); '}</p>
</code>

<p>このコードは、すべての "h2" 要素を選択し、それらのすべての前の兄弟要素にCSSスタイルを適用して、背景色を黄色に変更します</p>

<b>5. siblings() メソッド：</b>

<p>siblings() メソッドは、選択した要素のすべての兄弟要素を返します。たとえば：</p>

<code>
  <p><span className='blueviole'>$</span>(document).<span className='blue'>ready</span>{'('}<span className='red'>function</span>() {'{'}</p> 
  <p>&nbsp;<span className='blueviole'>$</span>(<span className='blue1'>"h2"</span>).<span className='blue'>siblings</span>().<span className='blue'>css</span>(<span className='blue1'>"background-color", "yellow"</span>); </p>
  <p>{'}); '}</p>
</code>

<p>このコードはすべての "h2" 要素を選択し、それらの兄弟要素すべてに背景色を黄色に変更するCSSスタイルを適用します。</p>

<p>全体的に、これらのトラバースメソッドを使用すると、HTML要素の兄弟要素を簡単にナビゲートおよび選択できるため、スタイリングやコンテンツの変更などさまざまな目的に役立ちます。</p>

<p><b>JQuery (CSS)</b></p>

<code>
  <p><span className='blueviole'>$</span>(document).<span className='blue'>ready</span>{'('}<span className='red'>function</span>() {'{'}</p> 
  <p>&nbsp;<span className='blueviole'>$</span>(<span className='blue1'>".box"</span>).<span className='blue'>click</span>{'('}<span className='red'>function</span>() {'{'}</p>
  <p>&nbsp;&nbsp;<span className='blueviole'>$</span>(<span className='red'>this</span>).<span className='blue'>css</span>(<span className='blue1'>"background-color", "red"</span>);</p>
  <p>&nbsp;&nbsp;{'});'}</p>
  <p>{'});'}</p>
</code>

<p>このコードは、jQueryセレクタ ".box" を使用してクラス "box" を持つ要素を選択します。それから、クリック() メソッドを使用してその要素にクリックイベントハンドラを追加します。イベントハンドラ関数内では、css() メソッドを使用して要素の背景色を赤に変更します。</p>

<p>したがって、ボックス要素がクリックされると、その背景色が青から赤に変わります。css() メソッドを使用してフォントサイズ、境界幅などの他のCSSプロパティを変更することもできます。</p>

<p>css() メソッドを使用して複数のCSSプロパティを変更する方法を示す別の例を次に示します：</p>

<code>
  <p><span className='blueviole'>$</span>(document).<span className='blue'>ready</span>{'('}<span className='red'>function</span>() {'{'}</p>
  <p>&nbsp;<span className='blueviole'>$</span>(<span className='blue1'>".box"</span>).<span className='blue'>css</span>{'({'}</p>
  <p>&nbsp;&nbsp;<span className='blue1'>"background-color"</span>: <span className='blue1'>"green"</span>,</p>
  <p>&nbsp;&nbsp;<span className='blue1'>"width"</span>: <span className='blue1'>"150px"</span>, </p>
  <p>&nbsp;&nbsp;<span className='blue1'>"height"</span>: <span className='blue1'>"150px"</span>, </p>
  <p>&nbsp;&nbsp;<span className='blue1'>"border"</span>: <span className='blue1'>"2px solid black"</span> </p>
  <p>&nbsp;{' });'}</p>
  <p>{'});'}</p>
</code>

<p>このコードは、クラス "box" を持つすべての要素を選択し、その背景色を緑に、幅と高さを150pxに変更し、2pxの黒の実線ボーダーを追加します。</p>

<p>全体的に、jQueryを使用してCSSを操作することは、ユーザーの操作やその他のイベントに基づいてHTML要素を動的にスタイリングする強力な方法を提供します。</p>

<b>JQuery ($.each)</b>

<p>jQueryの $.each() メソッドは、配列やオブジェクトを繰り返し処理するために使用されます。次に、その使用方法を示す例を示します：</p>

<p>数値の配列があり、その配列の各要素を繰り返し処理し、その値をコンソールに出力したいとします：</p>

<code>
  <p><span className='red'>var</span> numbers = [<span className='blue1'>1, 2, 3, 4, 5</span>]; </p>
  <p>$.<span className='blue'>each</span>{'('}numbers, <span className='red'>function</span>(index, value){'{'}</p>
  <p>&nbsp;{'console'}.<span className='blue'>log</span>(<span className='blue1'>"インデックス "</span> + index + <span className='blue1'>" の要素は "</span> + value);</p>
  <p>{'});'}</p>
</code>

<p>このコードでは、numbers配列を$.each()メソッドに渡し、現在の要素のインデックスと現在の要素の値の2つの引数を取るコールバック関数を指定しています。コールバック関数内で、console.log()を使用して現在の要素のインデックスと値をコンソールに出力します。</p>

<p>このコードの出力は次のようになります：</p>

<code>
  <p>インデックス <span className='blue1'>0</span> の要素は <span className='blue1'>1</span></p>
  <p>インデックス <span className='blue1'>1</span> の要素は <span className='blue1'>2</span></p>
  <p>インデックス <span className='blue1'>2</span> の要素は <span className='blue1'>3</span></p>
  <p>インデックス <span className='blue1'>3</span> の要素は <span className='blue1'>4</span></p>
  <p>インデックス <span className='blue1'>4</span> の要素は <span className='blue1'>5</span></p>
</code>

<p>もう1つの例を示します。これは、オブジェクトを使用して$.each()を使う方法を示しています：</p>

<p>人物の詳細を表すオブジェクトがあり、そのプロパティを繰り返し処理し、その値をコンソールに出力したいとします：</p>

<code>
  <p><span className='red'>var</span> person = {'{'}</p>
  <p>&nbsp;<span className='blue'>name</span>: <span className='blue1'>"John"</span>,</p>
  <p>&nbsp;<span className='blue'>age</span>: <span className='blue1'>30</span>, </p>
  <p>&nbsp;<span className='blue'>occupation</span>: <span className='blue1'>"Developer"</span> </p>
  <p>{'};'}</p>
  <p>$.<span className='blue'>each</span>{'('}person, <span className='red'>function</span>(key, value){'{'}</p>
  <p>&nbsp;{'console'}.<span className='blue'>log</span>(key + ": " + value);</p>
  <p>{'});'}</p>
</code>

<p>このコードでは、personオブジェクトを$.each()メソッドに渡し、現在のプロパティのキーと値の2つの引数を取るコールバック関数を指定しています。コールバック関数内で、console.log()を使用して現在のプロパティのキーと値をコンソールに出力します。</p>

<p>このコードの出力は次のようになります：</p>

<code>
  <p><span className='blue'>name</span>: ジョン </p>
  <p><span className='blue'>age</span>: <span className='blue1'>30</span> </p>
  <p><span className='blue'>occupation</span>: 開発者</p>
</code>

<p>全体的に、jQueryの$.each()メソッドは、配列やオブジェクトを繰り返し処理し、その要素に対して操作を行う便利な方法を提供します。</p>

<b>JQuery イベント</b>

<p>JQueryは、開発者がHTML要素にイベントハンドラをアタッチして、マウスクリック、キーボード入力、フォームの送信などのユーザーの操作に応答するための豊富なイベント処理メソッドを提供しています。</p>

<p>以下は、jQueryのclick()メソッドを使用してボタン要素にクリックイベントハンドラをアタッチし、ユーザーがボタンをクリックした際に応答する方法を示した例です：</p>    

<code>
  <p>{'<'}!<span className='blue'>DOCTYPE</span> <span className='blue1'>html</span>{'>'}</p>
  <p>{'<'}<span className='green'>html</span>{'>'}</p>  
  <p>{'<'}<span className='green'>head</span>{'>'}</p>
  <p>&nbsp;{'<'}<span className='green'>title</span>{'>'}jQuery Event Example{'</'}<span className='green'>title</span>{'>'}</p>
  <p>{'<'}<span className='green'>script</span> <span className='blue'>src</span>=<span className='blue1'>"https://code.jquery.com/jquery-3.6.0.min.js"</span>{'>'}{'</'}<span className='green'>script</span>{'>'}</p>
  <p>{'</'}<span className='green'>head</span>{'>'}</p>
  <p>{'<'}<span className='green'>body</span>{'>'}</p>
  <p>&nbsp;{'<'}<span className='green'>button</span> <span className='blue'>id</span>=<span className='blue1'>"myButton"</span>{'>'}Click me!{'</'}<span className='green'>button</span>{'>'}</p>
  <p>{'<'}<span className='green'>script</span>{'>'}</p>
  <p>&nbsp;{'$(document).ready(function(){'}</p>
  <p>&nbsp;<span className='blueviole'>$</span>(<span className='blue1'>"#myButton"</span>).<span className='blue'>click</span>{'('}<span className='red'>function</span>(){'{'}</p>
  <p>&nbsp;<span className='blueviole'>alert</span>(<span className='blue1'>"Button clicked!"</span>);</p>
  <p>&nbsp;{'});'}</p>
  <p>{'});'}</p>
  <p>{'</'}<span className='green'>script</span>{'>'}</p>
  <p>{'</'}<span className='green'>body</span>{'>'}</p>
  <p>{'</'}<span className='green'>html</span>{'>'}</p>
</code>    

<p>このコードでは、headセクションにjQueryライブラリを含め、IDセレクタ<b>#myButton</b>を使用してボタン要素に<b>click()</b>イベントハンドラをアタッチしています。イベントハンドラ関数内では、<b>alert()</b>メソッドを使用してメッセージボックスに「Button clicked!」というテキストを表示しています。</p>

<p>ユーザーがボタンをクリックすると、<b>click()</b>イベントが発生し、イベントハンドラ関数が実行され、メッセージボックスが表示されます。</p>

<p>以下は、<b>submit()</b>メソッドを使用してフォーム要素に送信イベントハンドラをアタッチし、デフォルトのフォーム送信動作を防止する方法を示した別の例です：</p>

<code>
  <p>{'<'}!<span className='blue'>DOCTYPE</span> <span className='blue1'>html</span>{'>'}</p>
  <p>{'<'}<span className='green'>html</span>{'>'}</p> 
  <p>{'<'}<span className='green'>head</span>{'>'}</p>
  <p>&nbsp;{'<'}<span className='green'>title</span>{'>'}jQuery Event Example{'</'}<span className='green'>title</span>{'>'}</p>
  <p>{'<'}<span className='green'>script</span> <span className='blue'>src</span>=<span className='blue1'>"https://code.jquery.com/jquery-3.6.0.min.js"</span>{'>'}{'</'}<span className='green'>script</span>{'>'}</p>
  <p>{'</'}<span className='green'>head</span>{'>'}</p>
  <p>{'<'}<span className='green'>body</span>{'>'}</p>
  <p>{'<'}<span className='green'>form</span> <span className='blue'>id</span>=<span className='blue1'>"myForm"</span>{'>'}</p>
  <p>&nbsp;{'<'}<span className='green'>label</span> <span className='blue'>for</span>=<span className='blue1'>"name"</span>{'>'}Name:{'</'}<span className='green'>label</span>{'>'}</p>
  <p>&nbsp;{'<'}<span className='green'>input</span> <span className='blue'>type</span>=<span className='blue1'>"text"</span> <span className='blue'>id</span>=<span className='blue1'>"name"</span> <span className='blue'>name</span>=<span className='blue1'>"name"</span>{'><'}<span className='green'>br</span>{'><'}<span className='green'>br</span>{'>'}</p>
  <p>&nbsp;{'<'}<span className='green'>label</span> <span className='blue'>for</span>=<span className='blue1'>"email"</span>{'>'}Email:{'</'}<span className='green'>label</span>{'>'}</p>
  <p>&nbsp;{'<'}<span className='green'>input</span> <span className='blue'>type</span>=<span className='blue1'>"email"</span> <span className='blue'>id</span>=<span className='blue1'>"email"</span> <span className='blue'>name</span>=<span className='blue1'>"email"</span>{'><'}<span className='green'>br</span>{'><'}<span className='green'>br</span>{'>'}</p>
  <p>&nbsp;{'<'}<span className='green'>input</span> <span className='blue'>type</span>=<span className='blue1'>"submit"</span> <span className='blue'>value</span>=<span className='blue1'>"Submit"</span>{'>'}</p>
  <p>{'</'}<span className='green'>form</span>{'>'}</p>
  <p>{'<'}<span className='green'>script</span>{'>'}</p>
  <p>&nbsp;{'$(document).ready(function(){'}</p>
  <p>&nbsp;<span className='blueviole'>$</span>(<span className='blue1'>"#myForm"</span>).<span className='blue'>submit</span>{'('}<span className='red'>function</span>(event){'{'}</p>
  <p>&nbsp;event.<span className='blue'>preventDefault</span>();</p>
  <p>&nbsp;<span className='blueviole'>alert</span>(<span className='blue1'>"Form submitted!"</span>);</p>
  <p>&nbsp;{'});'}</p>
  <p>{' });'}</p>
  <p>{'</'}<span className='green'>script</span>{'>'}</p>
  <p>{'</'}<span className='green'>body</span>{'>'}</p>
  <p>{'</'}<span className='green'>html</span>{'>'}</p>
</code>


<p>このコードでは、IDセレクタ<b>#myForm</b>を使用してフォーム要素に<b>submit()</b>イベントハンドラをアタッチしています。イベントハンドラ関数内では、<b>preventDefault()</b>メソッドを使用して、ページをリロードするデフォルトのフォーム送信動作を防止しています。代わりに、「Form submitted!」というテキストを含むメッセージボックスを表示します。</p>

<p>ユーザーがフォームを送信すると、<b>submit()</b>イベントが発生し、イベントハンドラ関数が実行され、デフォルトのフォーム送信動作が防止され、メッセージボックスが表示されます。</p>    

<p>全体的に、jQueryのイベント処理メソッドは、ユーザーの操作に対処し、イベントに一貫してかつクロスブラウザで対応する強力な方法を提供します。</p> 

    <b><p>* 翻訳者の助けを借りて書かれたテキスト。 エラーが見つかった場合は、お知らせください *</p></b>
    
    <div className='ads-container'>  
        {/*  реклама  */}
        </div>
    </div>
  )
}

export default JpJquery;