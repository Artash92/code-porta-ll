import React from 'react';

function JpJSEs5_6() {
  return (
    <div>
      <div className='ad-container'>  
          {/*  реклама  */}
        </div>

        <h3>JavaScriptのグローバルオブジェクト</h3>

<p>JavaScriptのグローバルオブジェクトは、コードのどこからでも利用可能な組み込みオブジェクトです。言語のさまざまな部分で使用されるプロパティやメソッドを提供し、カスタム機能で拡張することもできます。</p>

  <code>
    <p>JavaScriptのグローバルオブジェクトの一部のプロパティとメソッドには、次のものがあります：</p>
    <p><span className='blue'>1.</span> Infinity - 数学上の無限大を表します。</p>
    <p><span className='chocolate'>例:</span> console.log(Infinity);</p>
    <p><span className='blue'>2.</span> NaN - "Not a Number" 値を表します。</p>
    <p><span className='chocolate'>例:</span> console.log(NaN);</p>
    <p><span className='blue'>3.</span> console - コンソールに情報を記録するためのメソッドを提供します。</p>
    <p><span className='chocolate'>例:</span> console.log('こんにちは、世界！');</p>
    <p><span className='blue'>4.</span> parseInt() - 文字列を解析し、整数を返します。</p>
    <p><span className='chocolate'>例:</span> console.log(parseInt('10'));</p>
    <p><span className='blue'>5.</span> parseFloat() - 文字列を解析し、浮動小数点数を返します。</p>
    <p><span className='chocolate'>例:</span> console.log(parseFloat('3.14'));</p>
    <p><span className='blue'>6.</span> encodeURIComponent() - URIコンポーネントをエンコードします。</p>
    <p><span className='blue'>7.</span> Date - 日付と時間を操作するためのメソッドを提供します。</p>
    <p><span className='chocolate'>例:</span> console.log(new Date());</p>
    <p><span className='blue'>8.</span> Math - 数学関数と定数を提供します。</p>
    <p><span className='chocolate'>例:</span> console.log(Math.PI);</p>
  </code>

<p>グローバルオブジェクトのメソッドは、コードのどこからでも呼び出すことができ、オブジェクトのインスタンスを作成する必要はありません。ただし、グローバルオブジェクトをカスタムメソッドで拡張する際には注意が必要です。これは、組み込みのメソッドや他のカスタムメソッドと競合する可能性があるためです。</p>

<p>重要な点として、現代のJavaScript環境では、モジュールベースのコードや厳密モードでのようなすべてのコンテキストで、グローバルオブジェクトが常に利用可能であるとは限らないことに注意する必要があります。</p>

<h3>JavaScript ES5での文字列操作</h3>

<p>
JavaScript ES5では、文字列は文字のシーケンスであり、さまざまなメソッドを使用して操作することができます。文字列から部分文字列を抽出するための2つのメソッドは、slice() と substring() です。
</p>
   
<p>
   slice() メソッドは、文字列の一部を抽出して新しい文字列として返しますが、元の文字列を変更しません。2つのパラメーターを取ります：開始インデックスと終了インデックス（オプション）。終了インデックスが指定されていない場合、メソッドは文字列の末尾まで抽出します。開始インデックスが負の場合、文字列の末尾から数えます。
</p>

<p>
  substring() メソッドは slice() と似ていますが、負のインデックスを受け入れません。開始インデックスが終了インデックスより大きい場合、エラーを防ぐために2つのインデックスが交換されます。
</p>

<p>以下にいくつかの例を示します</p>

<p><span className='darkgreen'>// 部分文字列 "is" を取得します</span></p>

 <code>
    <p>str.slice(<span className='blue'>5</span>, <span className='blue'>7</span>); <span className='darkgreen'>//"is"</span></p>   
    
    <p>str.substring(<span className='blue'>5</span>,<span className='blue'>7</span>); <span className='darkgreen'>//"is"</span></p>
 </code>

<p><span className='darkgreen'>// 部分文字列 "is" を取得します</span></p>

 <code> 
    <p>{'console.log'}(str.slice(<span className='blue'>5</span>, <span className='blue'>7</span>)); <span className='darkgreen'>//"is"</span></p>
   
    <p>{'console.log'}(str.substring(<span className='blue'>5</span>, <span className='blue'>7</span>)); <span className='darkgreen'>//"is"</span></p>

    <p><span className='darkgreen'>// 部分文字列 "is my text" を取得します</span></p>

    <p>{'console.log'}(str.slice(<span className='blue'>5</span>)); <span className='darkgreen'>//"is my text"</span></p>

    <p>{'console.log'}(str.substring(<span className='blue'>5</span>)); <span className='darkgreen'>//"is my text"</span></p>
  </code>
   
  <p><span className='darkgreen'>// 部分文字列 " " を取得します</span></p>

 <code>
    <p>{'console.log'}(str.slice(<span className='blue'>7</span>, <span className='blue'>5</span>)); <span className='darkgreen'>//" "</span></p>

   <p>{'console.log'}(str.substring(<span className='blue'>7</span>, <span className='blue'>5</span>)); <span className='darkgreen'>//"is"</span> </p>
 </code>

<p><span className='darkgreen'>// 部分文字列 "my" を取得します</span></p>

  <code>
    <p>{'console.log'}(str.slice(-<span className='blue'>7</span>, -<span className='blue'>5</span>)); <span className='darkgreen'> //"my"</span></p> 
    
    <p>{'console.log'}(str.substring(<span className='blue'>7</span>,<span className='blue'>5</span>)); <span className='darkgreen'>//" "</span></p>
  </code>
   
  <p>
    上記の例では、slice() および substring() を使用して、str 変数から部分文字列を抽出しています。最初の例は部分文字列 "is" を抽出し、2番目の例は "is my text" を抽出します。3番目と4番目の例は、インデックスが逆転している場合に slice() と substring() がどのように扱われるかを示しています。最後の例では、slice() が負のインデックスとともに使用され、文字列の末尾から部分文字列を抽出する方法が示されています。
  </p>

<h3>トピックは "JavaScript ES5における文字列検索" です。</h3>

<p>JavaScriptでは、さまざまなメソッドを使用して文字列内で特定の部分文字列を検索することができます。以下は、よく使用されるいくつかのメソッドです：</p>

<p>1. JavaScript ES5における文字列検索のトピックです。
JavaScriptでは、さまざまな方法で文字列内の特定の部分文字列を検索できます。ここにいくつかよく使われるメソッドがあります：

indexOf(substring, start): このメソッドは、文字列内の部分文字列を検索して、部分文字列の最初の出現位置のインデックスを返します。オプションの start パラメーターを渡すことで、検索の開始位置を指定することもできます。部分文字列が見つからない場合、-1 を返します。</p>

   <p><b>例</b></p>

<code>
  <p><span className='blueviole'>var</span> <span className='blue'>message</span> = <span className='red'>"Hello world"</span>;</p>
  <p><span className='blueviole'>var</span> <span className='blue'>index</span> = message.indexOf(<span className='red'>"world"</span>);</p>
  <p>{'console.log(index);'} <span className='darkgreen'>// 6</span></p>
</code>

<p>2. lastIndexOf(substring, end): このメソッドは indexOf と同様に機能しますが、文字列内の部分文字列の最後の出現位置を検索し、文字列の末尾から後ろ向きに検索します。オプションの end パラメーターを渡すことで、検索の終了位置を指定することもできます。</p>

<p><b>例</b></p>

<code>
 <p><span className='blueviole'>var</span><span className='blue'> message</span> = <span className='red'>"こんにちは、世界、こんにちは！"</span>;</p>
 <p><span className='blueviole'>var</span> <span className='blue'>index</span> = message.lastIndexOf(<span className='red'>"こんにちは"</span>);</p>
 <p>{'console.log(index);'}<span className='darkgreen'> // 13</span></p>
</code>

<p>
  これらのメソッドを使用する際には、部分文字列の大文字と小文字が重要であることに注意してください。たとえば、文字列に "Hello" しか含まれていない場合に "hello" を検索すると、部分文字列が見つからないことになります。
</p>

<p>3.includes(substring): このメソッドは、指定された部分文字列が文字列内に存在するかどうかを確認し、結果を示すブール値を返します。</p>

<p><b>例</b></p>

 <code>
    <p><span className='blueviole'>var</span> <span className='blue'>found</span> = message.includes(<span className='red'>"世界"</span>);</p>
    <p>{'console.log(found);'} <span className='darkgreen'>// true</span></p>
 </code>

<p>4. search(regex): このメソッドは、文字列内で正規表現を検索し、最初の一致のインデックスを返します。一致が見つからない場合、-1 を返します。</p>

<p><b>例</b></p>

 <code>
    <p><span className='blueviole'>var</span> <span className='blue'>message</span> = <span className='red'>"こんにちは、世界、こんにちは！"</span>;</p>
    <p><span className='blueviole'>var</span> <span className='blue'>index</span> = message.search(<span className='red'>/こんにちは/i</span>);<span className='darkgreen'>// "i" フラグは大文字と小文字を区別しないようにします</span></p>
    <p>{'console.log(index);'}<span className='darkgreen'> // 0</span></p>
 </code>

<p>この例では、変数 str には文字列 "これは私のテキストです" が含まれています。次のコード行は、上記で説明した文字列検索メソッドの使用法を示しています：</p>

 <code>
    <p><span className='blueviole'>var</span> <span className='blue'>str</span> = <span className='red'>"これは私のテキストです"</span>;</p>
    <p>{'console.log'}(str.indexOf(<span className='red'>"is"</span>)); <span className='darkgreen'>//2</span></p>
    <p>{'console.log'}(str.indexOf(<span className='red'>"is"</span>, <span className='blue'>3</span>));<span className='darkgreen'> //5</span></p>
    <p>{'console.log'}(str.lastIndexOf(<span className='red'>"is"</span>)); <span className='darkgreen'>//5</span></p>
    <p>{'console.log'} (str.lastIndexOf(<span className='red'>"is"</span>, <span className='blue'>4</span>)); <span className='darkgreen'>//2</span></p>
    <p>{'console.log'}(str.indexOf(<span className='red'>"some"</span>)); <span className='darkgreen'>//-1</span></p>
 </code>

<p>これらのコード行は、str 文字列内の部分文字列 "is" と "some" を検索し、indexOf および lastIndexOf メソッドを使用してそのインデックスを返します。indexOf の第二パラメーターは検索の開始位置を指定し、lastIndexOf の第二パラメーターは検索の終了位置を指定します。</p>

<h3>RegEx</h3>

<p>RegExp は、正規表現を作成する方法を提供する組み込みオブジェクトです。正規表現は、文字列内の文字の組み合わせを一致させるために使用されるパターンです。</p>

<p><b>以下は、コンストラクタ関数を使用して正規表現オブジェクトを作成する例です：</b></p>

<code>
    <p><span className='blueviole'>var</span> <span className='blue'>regex</span> = <span className='blueviole'>new</span> RegExp(<span className='red'>"some", "long"</span>);</p>
</code>
 
 <p>ここでは、some が正規表現フラグであり、long は正規表現の動作を変更するオプションのフラグです。</p>

<p>
ここに、文字列が正規表現に一致するかどうかをテストする RegExp オブジェクトの test() メソッドを使用した例があります：
</p>

 <code>
    <p><span className='blueviole'>var</span> <span className='blue'>str</span> = <span className='red'>"The quick brown fox jumps over the lazy dog"</span>;</p>
    <p><span className='blueviole'>var</span> <span className='blue'>regex </span>=<span className='red'> /fox/i</span>;</p>
    <p><span className='blueviole'>var</span> <span className='blue'>result</span> = regex.test(str);</p>
    <p>{'console.log(result);'} <span className='darkgreen'>// true </span></p>
 </code>

<p>この例では、/fox/i は大文字と小文字を区別しないで単語 "fox" に一致する正規表現パターンです。test() メソッドは、正規表現パターンが文字列 str に一致するかどうかを示すブール値を返します。</p>
  
  <p>
  以下は、String オブジェクトの match() メソッドを使用して、一致した値を抽出する正規表現を使用した別の例です：
  </p>
 
 <code>
    <p><span className='blueviole'>var</span> <span className='blue'>str</span> = <span className='red'>"The quick brown fox jumps over the lazy dog"</span>;</p>
    <p><span className='blueviole'>var</span> <span className='blue'>regex </span>=<span className='red'> /fox/i</span>;</p>
    <p><span className='blueviole'>var</span><span className='blue'> result</span>  = str.match(regex);</p>
    <p>{'console.log(result);'} <span className='darkgreen'> // <span>[</span>"fox"<span>]</span></span></p>
 </code>
  
  <p>この例では、match() メソッドは、正規表現パターンが文字列内に見つかった場合、一致した部分文字列を含む配列を返します。</p>

  <b>以下は、正規表現でよく使用される特殊文字のいくつかです：</b>

  <p>.- 改行文字 \n 以外の任意の文字に一致します</p>

<p>\w - ASCII の単語文字に一致します [a-zA-Z0-9_]</p>

<p>\W - ASCII の非単語文字に一致します [^a-zA-Z0-9_]</p>

<p>\d - ASCII の数字に一致します [0-9]</p>

<p>\D - 数字以外の文字に一致します [^0-9]</p>

<p>\s - 任意の Unicode 空白文字に一致します</p>

<p>\S - 空白以外の文字に一致します</p>

<code>
  <p><span className='blueviole'>var</span> <span className='blue'>myStr</span> = <span className='red'>"awesome Text"</span>;</p>

  <p><span className='blueviole'>var</span> <span className='blue'>myRegExp</span> = <span className='red'>/[a-zA-Z0-9]/</span>;</p>

  <p><span className='blueviole'>var</span> <span className='blue'>result</span> = myRegExp.test(myStr);</p>

  <p>{'console.log(result);'}<span className='darkgreen'> //true</span></p>
</code>

<p><b>^ - 文字列の先頭に一致します</b></p>

<p><b>$ - 文字列の末尾に一致します</b></p>

<p>フラグ:</p>

<p><b>i - ignoreCase</b></p>
 
 <code>
  <p><span className='blueviole'>var</span><span className='blue'> exp</span> = <span className='red'>/a/i</span> <span className='darkgreen'>// 大文字と小文字の両方を検索します</span></p> 
  </code> 

<p><b>g - global</b></p>

<p><b>文字列内のパターンのすべての出現を検索します</b></p>

 <code>
    <p><span className='blueviole'>var</span> <span className='blue'>str</span> = <span className='red'>"Borobudur"</span>;</p>
    <p><span className='blueviole'>var</span> <span className='blue'>pattern</span> = <span className='red'>/[ou]/g</span>;</p>
    <p>{'console.log'}(str.replace(pattern, <span className='red'>"a"</span>)); <span className='darkgreen'>//"Barabadar"";</span></p>
</code>

<p><b>m - multiline</b></p>

<p><b>文字列のすべての行でパターンのすべての出現を検索します</b></p>
  
  <code>
    <p><span className='blueviole'>var</span> <span className='blue'>str</span> = <span className='red'>"Some text And some more And yet This is the end"</span>;</p>
    <p><span className='blueviole'>var</span> <span className='blue'> pattern</span> = <span className='red'>/\w+\s/g</span>;</p>
    <p>{'console.log(str.match(pattern));'} <span className='darkgreen'>//  [ "Some ", "text ", "And ", "some ", "more ", "And ", "yet ", "This ", "is ", "the ", "end"]</span></p>
  </code>
   
   <p>
   ここでは、値が "this is my text" である文字列 str を定義しています。次に、文字列の先頭 (^) に一致し、スペースで区切られた 1 つ以上の小文字 ([a-z]+)、および文字列の末尾 ($) に一致する正規表現パターンを定義します。括弧を使用して、それぞれの文字列を個別のサブパターンとしてキャプチャします。
   </p>
   
   <p>
   最後に、文字列上で replace() メソッドを使用し、パターンと、キャプチャされたサブパターンを定義された順序で参照する $ シンボルを使用する置換文字列を渡します。この場合、最初のグループと 2 番目のグループの文字列を交換し、3 番目と 4 番目のグループをそのまま残します。
   </p>
   
   <p>以下は、コードです：</p>

<code>
  <p><span className='blueviole'>var</span> <span className='blue'>str</span> = <span className='red'>"this is my text"</span>;</p>
  <p><span className='blueviole'>var</span> <span className='blue'>pattern</span> = <span className='red'>/^([a-z]+) ([a-z]+) ([a-z]+) ([a-z]+)$/</span> ;</p>
  <p><span className='blueviole'>var</span> <span className='blue'>res</span> = str.replace(pattern, <span className='red'>"$2 $1 $3 $4"</span>);</p>
  <p>{'console.log(res);'} <span className='darkgreen'>// "is this my text"</span> </p>
</code>
   
  <b><p>* 翻訳者の助けを借りて書かれたテキスト。 エラーが見つかった場合は、お知らせください *</p></b>
  
  <div className='ads-container'>  
    {/*  реклама  */}
  </div>
    </div>
  )
}

export default JpJSEs5_6;