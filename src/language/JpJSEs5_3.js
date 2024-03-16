import React from 'react';

function JpJSEs5_3() {
  return (
    <div>
      <div className='ad-container'>  
          {/*  реклама  */}
        </div>
        
        <h3>関数の概念</h3>

<p>関数は、後で定義および実行できるコードのブロックです。特定のタスクを実行するために使用され、アクセス可能なプログラムの任意の部分から呼び出すことができます。関数を使用すると、コードがより整理され、再利用可能になり、理解しやすくなります。</p>

<h3>関数の作成</h3>

<p>JavaScript ES5では、関数はfunctionキーワードを使用して作成されます。これに続いて関数名と、かっこのセットが続きます。かっこの内部では、1つ以上のパラメータを定義し、波括弧の内部では、関数が呼び出されたときに実行するコードを定義します。</p>

<p><b>例：</b></p>

<code>
<p><span className='blueviole'>function </span><span className='blue'>sum</span>(<span className='blue'>a</span>,<span className='blue'> b</span>) {'{'} </p>  
<p><span className='blueviole'>return</span> a + b;</p>  
<p>{'}'}</p>  

</code>

<p><b>関数引数：</b></p>

<p>関数引数は、関数が呼び出されたときに渡される値です。関数を作成するときにかっこの中に1つ以上のパラメータを定義できます。関数が呼び出されるときに、実際の値を引数として渡します。</p>

<p><b>例：</b></p>

<code>
  <p><span className='blueviole'>function </span><span className='blue'>sum</span>(<span className='blue'>a</span>,<span className='blue'> b</span>) {'{'} </p>  
  <p><span className='blueviole'>return</span> a + b;</p>  
  <p>{'}'}</p>  
  <p><span className='blueviole'>var</span> <span className='blue'>result</span> = sum(<span className='blue'>5</span>, <span className='blue'>10</span>);</p>
  <p> <span className='darkgreen'>// 出力：15</span></p>
</code>

<p><b>変数のスコープ：</b></p>

<p>変数のスコープは、宣言された場所によって異なります。関数内で宣言された変数の例で、その関数の外部からアクセスできないことを示します：</p>

  <p><b>例：</b></p>

<code>
  <p><span className='blueviole'>function</span> <span className='blue'>showMessage</span>() {'{'} </p>
  <p><span className='blueviole'>var</span> <span className='blue'>message</span> = <span className='red'>'Hello, World!'</span>;</p>
  <p>{"console.log(message);"}</p>
  <p>{"} "}</p>
  <p>showMessage(); <span className='darkgreen'>// 出力：Hello, World!</span> </p>
  <p>{" console.log(message); "} <span className='darkgreen'>// 出力：Uncaught ReferenceError: message is not defined</span></p>
</code>

<p><b>関数式：</b></p>

<p>関数式は、変数に割り当てられた関数です。以下はその例です：</p>

<code>
  <p><span className='blueviole'>var</span> <span className='blue'>multiply</span> = <span className='blueviole'>function</span>(<span className='blue'>a</span>, <span className='blue'>b</span>) {'{'}</p>
  <p><span className='blueviole'>return</span> a * b ;</p>
  <p>{'}'}</p>
  <p><span className='blueviole'>var</span> <span className='blueviole'>result</span> = multiply(<span className='blue'>3</span>, <span className='blue'>4</span>);</p>
  <p>{'console.log(result);'} <span className='darkgreen'>// 出力：12</span></p>
</code>

<p><b>匿名関数：</b></p>

<p>匿名関数は名前を持たない関数です。以下は、すぐに呼び出される匿名関数の例です：</p>

 <code>
  <p>{'('}<span className='blueviole'>function</span>() {'{'}</p>
  <p>{'console.log'}(<span className='red'>"Hello, World!"</span>);</p>
  <p>{'})();'}</p>
 </code>

<p><b>クロージャ</b></p>

<p>クロージャは、JavaScriptの機能であり、関数が自分自身のスコープ外にある変数にアクセスして操作できるようにします。つまり、クロージャは、関数が別の関数内で定義され、親関数の変数にアクセスできるときに形成されます。以下はJavaScript ES5でのクロージャの例です：</p>

<code>
  <p><span className='blueviole'>function</span> <span className='blue'>outerFunction</span>() {'{'}</p>
  <p><span className='blueviole'>var</span> <span className='blue'>outerVariable</span> = <span className='red'>"I am outside!"</span>;</p>
  <p><span className='blueviole'>function</span> <span className='blue'>innerFunction</span>() {'{'}</p> 
  <p>{'console.log(outerVariable);'}</p>
  <p>{'}'}</p>
  <p><span className='blueviole'>return </span>innerFunction;</p>
  <p>{'}'}</p>
  <p><span className='blueviole'>var</span> <span className='blue'>closureExample</span> = outerFunction();</p>
  <p>closureExample(); <span className='darkgreen'>// 出力："I am outside!"</span></p>
</code>

<p>この例では、outerFunctionは変数outerVariableとinnerFunctionを定義します。innerFunctionはouterFunctionから返され、closureExample変数に割り当てられます。closureExample()が呼び出されると、"I am outside!"の値がログに記録されます。これは、innerFunctionがクロージャを介してouterVariableにアクセスできるため、innerFunction内でouterVariableが定義されていなくても可能です。これはJavaScript ES5でのクロージャの単純な例ですが、クロージャがどれほど強力で便利かを示しています。クロージャは、JavaScriptでプライベート変数やメソッドを作成するためにしばしば使用されます。</p>

<b><p>* 翻訳者の助けを借りて書かれたテキスト。 エラーが見つかった場合は、お知らせください *</p></b>
    <div className='ads-container'>  
  {/*  реклама  */}
</div>
    </div>
  )
}

export default JpJSEs5_3;