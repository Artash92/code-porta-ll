import React from 'react';

function JpJSEs5_4() {
  return (
    <div>
      <div className='ad-container'>  
          {/*  реклама  */}
        </div>
      
      <h3>再帰</h3>

<p>
再帰は、関数が基本ケースに達するまで自身を呼び出すプログラミングテクニックです。これは、より小さな同様のサブ問題に分解できる問題を解決するためによく使用されます。
JavaScript ES5では、再帰を使用して木や入れ子構造を走査したり、特定の計算を行ったり、要素の組み合わせをすべて生成したりすることができます。

以下は、与えられた数の階乗を計算するために再帰を使用する関数の例です：
</p>

<code>
  <p> <span className='blueviole'>function</span> <span className='blue'>factorial</span>(<span className='blue'>num</span>) {'{'} </p>
  <p><span className='blueviole'>if</span> (num {'<='}<span className='blue'> 1</span>) {'{'}</p>
  <p><span className='blueviole'>return</span> <span className='blue'>1</span>;</p>
  <p>{'}'}<span className='blueviole'> else</span> {'{'}</p>
  <p><span className='blueviole'>return</span> num * factorial(num - <span className='blue'>1</span>); </p>
  <p>{' }'}</p>
  <p>{'}'}</p>
  <p>{'console.log'}(factorial(<span className='blue'>5</span>)); <span className='darkgreen'>// Output: 120</span></p>
</code>

<p>この例では、factorial()関数は、小さい数で自身を呼び出し続け、 {'num <='} の基本ケースに達するまで、その結果として1を返します。最終的な結果は、すべての返された値を掛け合わせて計算されます。</p>

<p>再帰はメモリを多く消費する可能性があるため、特に大きな入力に対しては注意が必要です。無限ループを防ぐために、再帰関数に基本ケースを持たせ、注意深く設計することが重要です。</p>

<p><b>例</b></p>

<code>
  <p><span className='blueviole'>function</span> <span className='blue'>factorial</span>(<span className='blue'>num</span>) {'{'} </p>
  <p><span className='blueviole'>if</span> (num === <span className='blue'>0</span> || num === <span className='blue'>1</span>) {'{'} </p>
  <p><span className='blueviole'>return</span> <span className='blue'>1</span>; </p>
  <p>{'}'} <span className='blueviole'>else</span> {'{'} </p>
  <p><span className='blueviole'>return</span> num * factorial(num - <span className='blue'>1</span>); </p>
  <p> {'}'}</p>
  <p>{'}'}</p>
  <p><span className='blueviole'>var</span> <span className='blue'>result</span> = factorial(<span className='blue'>5</span>);</p>
  <p>{'console.log(result);'} <span className='darkgreen'>// Output: 120</span></p>
</code>

<p>
この更新された例では、単一のパラメータnumを取る関数factorialを定義しています。関数はまず、与えられた数が0または1であるかどうかをチェックし、その場合は即座に1を返します。それ以外の場合は、numの値をデクリメントした値で同じ関数factorialを呼び出し、その結果にnumの現在の値を乗算して、数の階乗を再帰的に計算します。
引数5でfactorial関数を呼び出すと、再帰的に自身を呼び出して、num === 1の基本ケースに達するまで、階乗を計算し、1を返します。再帰が解除され、最終的な結果である5 * 4 * 3 * 2 * 1 = 120が返されます。

</p>

<h3>オブジェクト</h3>

<p>
オブジェクトは、JavaScriptにおけるデータ構造であり、関連するデータと機能のコレクションを格納することができます。これはJavaScriptの中核的な概念であり、言語全体で広範囲に使用されています。オブジェクトは波括弧 {} を使用して定義され、キーと値のペアから構成されます。キーは文字列であり、値は他のオブジェクトや関数を含む、任意のデータ型であることができます。
</p>

<p>
JavaScriptでは、オブジェクトは複雑なデータ構造を作成したり、コードを整理したり、関連するデータと振る舞いをカプセル化する手段として広く使用されます。オブジェクトはJavaScriptにおけるオブジェクト指向プログラミングの重要な部分であり、多くの高度な機能やライブラリの基本的な構築要素です。
</p>

<p><b>例</b></p>

<p className='darkgreen'>// オブジェクトの作成</p>

<code>
  <p><span className='blueviole'>var</span> car = {'{'} </p>
  <p>make: <span className='red'>"Toyota"</span>,</p>
  <p> model: <span className='red'>"Camry"</span>,</p>
  <p>year: <span className='blue'>2021</span>,</p>
  <p> start: <span className='blueviole'>function</span>() {'{'} </p>
  <p>{'console.log'}(<span className='red'>"Starting the car..."</span>);</p>
  <p>{'}'}</p>
  <p>{'}'}</p>
  <p><span className='darkgreen'>// オブジェクトのプロパティにアクセスする</span></p>
  <p>{'console.log(car.make);'} <span className='darkgreen'>// Toyota</span></p>
  <p>{'console.log(car.year);'}<span className='darkgreen'> // 2021</span> </p>
  <p><span className='darkgreen'>// オブジェクトのメソッドを呼び出す</span></p>
  <p>{'car.start(); '}<span className='darkgreen'>// Starting the car...</span></p>
 </code>

<p><b>オブジェクトのプロパティ</b></p>

<code>
  <p><span className='blueviole'>var</span> <span className='blue'>person</span> = {'{'} </p>
  <p> name: <span className='red'>"John"</span>,</p>
  <p>age: <span className='blue'>30</span>,</p>
  <p>gender: <span className='red'>"male"</span></p>
  <p>{'};'}</p>
  <p>person.email = <span className='red'>"john@example.com"</span>;</p>
  <p>{'console.log(person.name);'} <span className='darkgreen'>// John</span></p>
  <p>{'console.log(person.email);'} <span className='darkgreen'>// john@example.com</span></p>
</code>

<p><b>オブジェクトのメソッド</b></p>

<code>
  <p><span className='blueviole'>var</span> <span className='blue'>calculator</span> = {'{'}</p>
  <p>add: <span className='blueviole'>function</span>(<span className='blue'>a</span>, <span className='blue'>b</span>) {'{'} </p>
  <p> <span className='blueviole'>return</span> a + b; {'}'},</p>
  <p>subtract: <span className='blueviole'>function</span>(<span className='blue'>a</span>,<span className='blue'>b</span>) {'{'} </p>
  <p><span className='blueviole'>return</span> a - b;</p>
  <p>{'}'}</p>
  <p>{'};'}</p>
  <p>{'console.log'}(calculator.add(<span className='blue'>5</span>, <span className='blue'>3</span>)); <span className='darkgreen'>// 8</span></p>
  <p>{'console.log'}(calculator.subtract(<span className='blue'>5</span>, <span className='blue'>3</span>)); <span className='darkgreen'>// 2</span></p>
</code>

<p><b>オブジェクト指向型 - 配列</b></p>


<p className='darkgreen'>// 配列の作成</p>
<code>
<p><span className='blueviole'>var</span> <span className='blue'>colors</span> = [<span className='red'>"red", "green", "blue"</span>]; <span className='darkgreen'>// 配列要素へのアクセス</span></p>
<p>{'console.log'}(colors[<span className='blue'>0</span>]); <span className='darkgreen'>// red</span></p>
<p>{'console.log'}(colors[<span className='blue'>2</span>]); <span className='darkgreen'>// blue</span></p>
<p><span className='darkgreen'>// 配列への新しい要素の追加 </span></p>
<p>{'colors.push'}(<span className='red'>"yellow"</span>); </p>
<p><span className='darkgreen'>// 配列のループ</span></p>
<p><span className='blueviole'>for</span>(<span className='blueviole'>var</span> <span className='blue'>i</span> = <span className='blue'>0</span>; i {'<'} colors.length; i++) {'{'}</p>
<p>{' console.log(colors[i]);'}</p>
<p>{'}'}</p>
</code>
<p><b>関数のプロパティとメソッド</b></p>
<code>
<p><span className='blueviole'>function</span> <span className='blue'>greeting</span>(<span className='blue'>name</span>) {'{'}</p>
<p>{'console.log'}(<span className='red'>"Hello "</span> + name);</p>
<p>{'}'}</p>
<p>{'console.log(greeting.length);'} <span className='darkgreen'>// 1 (期待される引数の数)</span></p>
<p><span className='darkgreen'>// 関数への新しいプロパティの追加</span></p>
<p>greeting.language = <span className='red'>"English"</span>;</p>
<p><span className='darkgreen'>// 関数プロパティへのアクセス</span></p>
<p>{'console.log(greeting.language);'} <span className='darkgreen'>// English</span></p>
<p><span className='darkgreen'>// 関数の呼び出し greeting("John"); // Hello John</span></p>
</code>
<h3>this</h3>
<p>
JavaScript ES5では、thisはコードが実行されている現在のオブジェクトまたはコンテキストを参照するキーワードです。どのようにどこで使用されるかによって、異なるオブジェクトを参照することができます。
thisは、オブジェクトのメソッドとして呼び出される関数内で使用される場合、オブジェクト自体を参照します。例えば：
</p>

<code>
  <p><span className='blueviole'>var</span> <span className='blue'>myObject</span> = {'{'}</p>
  <p>name: <span className='red'>"John"</span>,</p>
  <p>sayHello: <span className='blueviole'>function</span>() {'{'}</p>
  <p>{'console.log'}(<span className='red'>"Hello, my name is "</span> + <span className='blueviole'>this</span>.name);</p>
  <p>{' }'}</p>
  <p>{'};'}</p>
  <p>{'myObject.sayHello();'} <span className='darkgreen'>// Output: "Hello, my name is John"</span></p>
</code>

<p>
この例では、sayHello()がmyObjectのメソッドとして呼び出されているため、thisはmyObjectオブジェクトを参照します。
</p>

<p>
ただし、thisは通常の関数（つまりオブジェクトのメソッドとして呼び出されていない関数）内で使用される場合、デフォルトでグローバルオブジェクト（ブラウザではwindow、Node.jsではglobal）を参照します。例えば：
</p>
    

<code>
  <p><span className='blueviole'>function</span> <span className='blue'>sayHello</span>() {'{'}</p>
  <p>{'console.log'}(<span className='red'>"こんにちは、私の名前は "</span> + <span className='blueviole'>this</span>.name);</p>
  <p>{'}'}</p>
  <p><span className='blueviole'>var</span> <span className='blue'>name</span> = <span className='red'>"John"</span>;</p>
  <p>{'sayHello();'} <span className='darkgreen'>// 出力: "こんにちは、私の名前は undefined"</span></p>
</code>

<p>
この場合、sayHello()がオブジェクトのメソッドとして呼び出されていないため、thisはグローバルオブジェクトを参照します。グローバルオブジェクトにはnameプロパティがないため、this.nameは未定義です。
thisの値は、call()、apply()、bind()などのメソッドを使用して明示的に設定することができます。これらのメソッドを使用すると、関数を特定のthis値で呼び出すことができます。
</p>

<h3>関数をオブジェクトとして</h3>

<code>
  <p><span className='blueviole'>var</span> <span className='blue'>user</span> = {'{'}</p>
  <p>name: <span className='red'>"John"</span>,</p>
  <p>age:<span className='blue'>20</span></p>
  <p>{'};'}</p>
  <p><span className='blueviole'>function </span><span className='blue'> foo</span>(<span className='blue'>a</span>,<span className='blue'>b</span>) {'{'}</p>
  <p>{'console.log'}(<span className='blueviole'>this</span>.name);</p>
  <p>{'console.log(a + b);'}</p>
  <p>{'}'}</p>
  <p><span className='darkgreen'>// callメソッドを使用してthisをuserオブジェクトに設定する foo.call(user, 3, 5);</span></p>
  <p><span className='darkgreen'>// 関数のlengthプロパティにアクセス {'console.log(foo.length);'}</span></p>
</code>

<h3>オブジェクト引数</h3>

<p>argumentsオブジェクトは、すべての関数内で利用可能なローカル変数です。これには、関数に渡された引数の配列のようなリストが含まれています。
argumentsオブジェクトの使用例を次に示します:</p>    
    
<code>
  <p> <span className='blueviole'>function</span> <span className='blue'>sum</span>() {'{'} </p>
  <p><span className='blueviole'>var</span> <span className='blue'>result</span> = <span className='blue'>0</span>;</p>
  <p><span className='blueviole'>for</span> (<span className='blueviole'>var</span><span className='blue'> i</span> = <span className='blue'>0</span>; i {'<'} arguments.length; i++) {'{'} </p>
  <p>{'result += arguments[i];'}</p>
  <p>{'}'}</p>
  <p><span className='blueviole'>return</span> result;</p>
  <p>{'}'}</p>
  <p><span className='blueviole'>var</span> <span className='blue'>total</span> = sum(<span className='blue'>1, 2, 3, 4</span>);</p>
  <p>{'console.log(total);'} <span className='darkgreen'>// 出力: 10</span></p>
</code>

<p>
上記の例では、sum関数は任意の数の引数を受け入れ、argumentsオブジェクトを使用して各引数をループして合計します。関数はその合計を返します。
</p>

<p>argumentsオブジェクトを使用する別の例として、渡されたすべての引数を連結する関数を作成することができます</p>

<code>
  <p><span className='blueviole'>function</span> <span className='blue'>concatenate</span>() {'{'}</p>
  <p> <span className='blueviole'>var </span><span className='blue'>result</span> = <span className='red'>" "</span>;</p>
  <p><span className='blueviole'>for</span> (<span className='blueviole'>var</span> <span className='blue'>i</span> = <span className='blue'>0</span>; i {'<'} arguments.length; i++) {'{'}</p>
  <p>{'result += arguments[i];'}</p>
  <p>{'}'}</p>
  <p><span className='blueviole'>return</span> result;</p>
  <p>{'}'}</p>
  <p><span className='blueviole'>var</span> <span className='blue'>str</span> = concatenate(<span className='red'>"Hello", " ", "world", "!"</span>); </p>
  <p>{'console.log(str);'}<span className='darkgreen'>// 出力: "Hello world!"</span></p>
</code>

<p>
この例では、concatenate関数は任意の数の引数を受け入れ、それらを1つの文字列に連結して返します。
</p>
    
  
  <b><p>* 翻訳者の助けを借りて書かれたテキスト。 エラーが見つかった場合は、お知らせください *</p></b>
  
    <div className='ads-container'>  
      {/*  реклама  */}
    </div>
     </div>
  )
}

export default JpJSEs5_4;