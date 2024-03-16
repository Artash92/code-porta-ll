import React from 'react';

function JpJSEs5_1() {
  return (
    <div>
      <div className='ad-container'>  
          {/*  реклама  */}
        </div> 

        <h1>JavaScript</h1>     
 <p>
   JavaScriptは1995年にBrendan EichがNetscape Communications Corporationで働いていたときに作成されました。
   当初、この言語はMochaと呼ばれていましたが、後にLiveScriptに名前が変更され、最終的にJavaScriptと名付けられました。
   名前の変更は主にマーケティング上の理由と、当時Javaの人気を利用するためでした。
   Brendan Eichは、Mozilla、Netscape、Brave Softwareなどの企業で働いたアメリカの技術者であり、プログラマでもあります。
   彼はJavaScriptの創造者と見なされており、他のプログラミング言語にも大きな貢献をしています。
 </p>

<h3>ECMAScriptは7つのデータ型を定義しています：</h3>

<code>
   <ul>
      <li><span className='blue'>Number：</span>整数や浮動小数点数を含む数値を表します。例：<span className='blue'>1, 3.14, -42</span>。</li>
      <li><span className='blue'>String：</span>シングルクォートまたはダブルクォートで囲まれたテキストデータを表します。例：<span className='red'>"hello", 'world', "123"</span>。</li>
      <li><span className='blue'>Boolean：</span>論理エンティティを表し、trueまたはfalseの値しか持ちません。例：<span className='blue'>true, false</span>。</li>
      <li><span className='blue'>Undefined：</span>値が割り当てられていない変数を表します。例：<span className='blueviole'>var</span> <span className='blue'>x</span>; console.log(x); <span className='darkgreen'>// 出力：undefined</span></li>
      <li><span className='blue'>Null：</span>任意のオブジェクト値の意図的な不在を表します。例：<span className='blueviole'>var</span> <span className='blue'>x</span> = <span className='blueviole'>null</span>; console.log(x); <span className='darkgreen'>// 出力：null</span></li>
      <li><span className='blue'>Symbol：</span>呼び出し元のコードに公開されていない一意の識別子を表します。例：<span className='blueviole'>const</span> <span className='blue'>sym1</span> = Symbol(<span className='red'>'foo'</span>);</li>
      <li><span className='blue'>Object：</span>関連するデータや機能のコレクションを表します。例：<span className='blueviole'>var</span> <span className='blue'>obj</span> = {'{'} name: <span className='red'>"John"</span>, age: <span className='blue'>30</span> {'}'}; <span className='blueviole'>var</span> <span className='blue'>arr</span> = [<span className='blue'>1, 2, 3</span>];</li>
   </ul>
</code>

<h2>Booleanデータ型</h2>

<p>Booleanデータ型にはtrueとfalseの2つの値しかありません。以下の演算子を使用した比較演算によく使用されます：</p>

<code>
   <ul>
      <li>=== および ==</li>
      <li>{'>'} および {'<='}</li>
      <li>{'>='} および {'<='}</li>
   </ul>
</code>

<p>例：</p>

<code>
   <ul>
      <li><span className='blue'>10</span> {'<'} <span className='blue'>16</span> == <span className='blue'>true</span></li>
      <li><span className='blue'>10</span> {'>'} <span className='blue'>16</span> == <span className='blue'>false</span></li>
   </ul>
</code>

<h2>Boolean演算子</h2>

<code>
   <ul>
      <li>NOT (!)</li>
      <li>AND (&&)</li>
      <li>OR (||)</li>
   </ul>
</code>

<p>条件を評価する際には、Booleanデータ型が使用されます。次の値はfalseに変換されます：0および空の文字列。次の値はtrueに変換されます：その他のすべての数値および空でない文字列。</p>

<h3>例：</h3>

<code>
   <p><span className='blue'>5</span> && <span className='blue'>6</span> <span className='darkgreen'>// 6</span></p>
   <p><span className='blue'>6</span> && <span className='blue'>0 </span> <span className='darkgreen'>// 0</span></p>
   <p><span className='blue'>true</span> && <span className='blue'>false</span> <span className='darkgreen'>// false</span></p>
   <p><span className='blue'>5</span> || <span className='blue'>6</span> <span className='darkgreen'>// 5</span></p>
   <p><span className='blue'>0</span> || <span className='blue'>false</span> <span className='darkgreen'>// false</span></p>
   <p><span className='blue'>false</span> || <span className='blue'>true</span> <span className='darkgreen'>// true</span></p>
   <p><span className='blue'>6</span> || <span className='blue'>7</span> <span className='darkgreen'> // 6</span></p>
   <p><span className='blue'>0</span> || <span className='blue'>false</span> <span className='darkgreen'> // false</span></p>
   <p><span className='blue'>false</span> || <span className='blue'>true</span> <span className='darkgreen'>// true</span></p>
   <p><span className='blue'>50</span> && <span className='blue'>6</span> <span className='darkgreen'>// 6</span></p>
   <p><span className='blue'>10</span> && <span className='blue'>0</span> <span className='darkgreen'>// 0</span></p>
   <p><span className='red'>'Hello'</span> && <span className='red'>'World'</span> <span className='darkgreen'>// "World"</span></p>
   <p><span className='red'>'Hello'</span> && <span className='red'>''</span> <span className='darkgreen'>// ''</span></p>
   <p>!<span className='blue'>true</span> <span className='darkgreen'>// false</span></p>
</code>

<h3>式と文</h3>

<p>これらはJavaScriptの式と演算子の例です。式は、値、変数、演算子の組み合わせで、ある値に評価できます。式は他の式や文で使用できます。</p>

<p>乗算、加算などの演算子は、式を作成するために使用されます。最初の3行は、異なるデータ型（数値、文字列、ブール値）を持つ式の例を示しています。</p>

<p>演算子は、演算子の一部である演算子式の形で使用できます。次の3行は、演算子式の例であり、演算子です。</p>

<p>各演算子式は演算子（;）で終わり、これによりそれが文になります。</p>

<ul>
   <li><strong className='blue'>式</strong>: <span className='blue'>8</span> * <span className='blue'>3</span> + <span className='blue'>2</span> </li>
   <li><strong className='blue'>式</strong>: <span className='red'>"Hello, there!"</span></li>
   <li><strong className='blue'>式</strong>: <span className='blue'>false</span></li>
   <li><strong className='blue'>文</strong>: <span className='blue'>8</span> * <span className='blue'>3</span> + <span className='blue'>2</span> ;</li>
   <li><strong className='blue'>文</strong>: <span className='red'>"Hello, there!"</span>;</li>
   <li><strong className='blue'>文</strong>: <span className='blue'>false</span>;</li>
</ul>

<h2>JavaScriptの特殊な値と関数</h2>

<h5>NaN</h5>

<p>NaNは「数値ではない」を表し、算術演算の結果として未定義または表現できない値を表すJavaScriptの特別な値です。例えば、ゼロをゼロで割るとNaNになります。</p>

<h5>typeof</h5>

<p>typeofはJavaScriptの単項演算子で、オペランドのデータ型を示す文字列を返します。例えば、typeof "hello"は"string"を返し、typeof 42は"number"を返します。</p>

<h5>isNaN()</h5>

<p>isNaN()はJavaScriptのグローバル関数であり、引数がNaN（数値ではない）である場合はtrueを返し、それ以外の場合はfalseを返します。例えば、isNaN("hello")はtrueを返し、isNaN(42)はfalseを返します。</p>

<h5>isFinite()</h5>

<p>isFinite()はJavaScriptのグローバル関数であり、引数が有限数である場合はtrueを返し、それ以外の場合はfalseを返します。例えば、isFinite(42)はtrueを返し、isFinite(Infinity)はfalseを返します。</p>

<h2>変数</h2>

<ul>
   <li>変数の宣言（a-A、$、_）</li>
   <ul>
      <li><code><span className='blueviole'>var</span> <span className='blue'>studentName</span>;</code></li>
      <li><code><span className='blueviole'>var</span> <span className='blue'>firstName, lastName, age</span>;</code></li>
   </ul>

   <li>変数の宣言および割り当て</li>

   <ul>
      <li><code><span className='blueviole'>var</span> <span className='blue'>carModel</span> = <span className='red'>"Tesla"</span>;</code></li>
      <li><code><span className='blueviole'>var</span> <span className='blue'>carModel</span> = <span className='red'>"Tesla"</span>, <span className='blue'>year</span> = <span className='blue'>2022</span>, <span className='blue'>isElectric</span> = <span className='blue'>true</span>;</code></li>
   </ul>

   <li>変数の使用</li>

   <ul>
      <li><code><span className='blueviole'>var</span> <span className='blue'>quantity</span> = <span className='blue'>5</span>;</code></li>
      <li><code>quantity = quantity + <span className='blue'>3</span>;</code></li>
      <li><code>quantity += <span className='blue'>2</span>;</code></li>
   </ul>
</ul>

<h2>NullとUndefined</h2>

<ul>
   <li>NullはJavaScriptの特別な値であり、任意のオブジェクト値の不在を表します。これはプリミティブ値であり、意図的な非値または空の値を表します。変数に値がないことを示したり、関数が値を返さないことを示すためによく使用されます。</li>
   <li>Undefinedは、変数が値が割り当てられていない場合、または明示的に値が未定義に設定されている場合に、変数が持つ値です。これもJavaScriptのプリミティブ値です。</li>
   <li>typeof演算子は値のタイプを判断するために使用されます。値がundefinedの場合、typeofは文字列"undefined"を返します。値がnullの場合、typeofは文字列"object"を返します。これはJavaScriptの既知のバグであり、言語が最初に作成されたときから存在しています。</li>
   <li>nullとundefinedは、値の不在を表すためにしばしば混同されます。しかし、それらは同じものではありません。nullは値の意図的な不在を表し、undefinedは値の偶発的な不在を表します。</li>
   <li>JavaScriptの==演算子は型の強制変換を実行し、それらを比較する前に異なる型の値を共通の型に変換しようとします。==でnullとundefinedを比較すると、それらはどちらもfalsy値と見なされるため、結果はtrueになります。</li>
   <li>JavaScriptの===演算子は型の厳密な比較を実行し、型の強制変換を行いません。===でnullとundefinedを比較すると、それらは同じ型の値ではないため、結果はfalseになります。</li>
   <li>parseInt、parseFloat、およびNumber関数は、文字列を数値に変換するために使用されます。値としてnullが渡されると、これらの関数のすべてがNaN（数値ではない）を返します。これは、nullが有効な数値ではなく、数値に変換できないためです。</li>
</ul>

<b><p>* 翻訳者の助けを借りて書かれたテキスト。 エラーが見つかった場合は、お知らせください *</p></b>
    <div className='ads-container'>  
  {/*  реклама  */}
</div>
    </div>
  )
}

export default JpJSEs5_1;