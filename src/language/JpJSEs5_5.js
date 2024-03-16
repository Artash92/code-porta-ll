import React from 'react';

function JpJSEs5_5() {
  return (
    <div>
      <div className='ad-container'>  
          {/*  реклама  */}
        </div>

<h1>配列</h1>

<p>
JavaScriptでは、配列は単一の変数に複数の値を格納することができるデータ構造です。配列は角かっこを使用して宣言され、その要素はカンマで区切られます。
</p>

<p><b>例</b></p>

<p className='darkgreen'>// 数値の配列</p>    

<code>
  <p><span className='blue'>var </span><span className='blue'>numbers</span> = [<span className='blue'>1, 2, 3, 4, 5</span>];</p>
  <p className='darkgreen'>// 文字列の配列</p>
  <p><span className='blueviole'>var</span> <span className='blue'>fruits</span> = [<span className='red'>"apple", "banana", "orange"</span>];</p>
</code>

<p><b>配列の長さ</b></p>

<p>配列のlengthプロパティは、配列内の要素の数を返します。</p>

<p><b>例</b></p>

<code>
  <p><span className='blueviole'>var</span> <span className='blue'>numbers</span> = [<span className='blue'>1, 2, 3, 4, 5</span>];</p>
  <p>{'console.log(numbers.length);'} <span className='darkgreen'>// 出力: 5</span></p>  
</code>

<p><b>配列のメソッド</b></p>

<p>JavaScriptの配列には、配列データを操作するために使用できる組み込みのメソッドがあります。一般的に使用されるいくつかの配列メソッドは次のとおりです:</p>

 <code>
    <p><b>push()</b>: 配列の末尾に1つ以上の要素を追加</p>
    <p><b>pop()</b>: 配列から最後の要素を削除</p>
    <p><b>shift()</b>: 配列から最初の要素を削除</p>
    <p><b>unshift()</b>: 配列の先頭に1つ以上の要素を追加</p>
    <p><b>splice()</b>: 指定したインデックスで配列から要素を追加または削除</p>
    <p><b>slice()</b>: 既存の配列の一部を含む新しい配列を返す</p>
    <p><b>join()</b>: 配列のすべての要素を文字列に結合</p>
    <p><b>concat()</b>: 2つ以上の配列を連結する</p>
 </code>
    
<p><b>例:</b></p>

<code>
  <p><span className='blueviole'>var</span> <span className='blue'>numbers</span> = [<span className='blue'>1, 2, 3, 4, 5</span>];</p>
  <p>numbers.push(<span className='blue'>6</span>); <span className='darkgreen'>// 配列の末尾に6を追加します</span></p>
  <p>{'console.log(numbers);'} <span className='darkgreen'>// 出力: [1, 2, 3, 4, 5, 6]</span></p>
</code>

<code>
  <p><span className='blueviole'>var</span> <span className='blue'>fruits</span> = [<span className='red'>"apple", "banana", "orange"</span>];</p>
  <p>fruits.pop(); <span className='darkgreen'>// 配列から最後の要素を削除します</span></p>
  <p>{'console.log(fruits);'} <span className='darkgreen'>// 出力: ["apple", "banana"]</span></p>
</code>

<code>
  <p><span className='blueviole'>var</span> <span className='blue'>colors</span> = [<span className='red'>"red", "green", "blue"</span>];</p>
  <p>colors.shift(); <span className='darkgreen'> // 配列から最初の要素を削除します</span></p>
  <p>{'console.log(colors);'} <span className='darkgreen'>// 出力: ["green", "blue"]</span></p>
</code>

<code>
  <p><span className='blueviole'>var</span> <span className='blue'>cars</span> = [<span className='red'>"BMW","Audi","Mercedes"</span>];</p>
  <p>cars.unshift(<span className='red'>"Toyota","Honda"</span>); <span className='darkgreen'>// 配列の先頭に2つの要素を追加します</span></p>
  <p>{'console.log(cars);'} <span className='darkgreen'>// 出力:["Toyota","Honda","BMW","Audi","Mercedes"]</span></p>
</code>

<code>
  <p><span className='blueviole'>var</span> <span className='blue'>animals</span> = [<span className='red'>"dog","cat","elephant","lion"</span>];</p>
  <p>animals.splice(<span className='blue'>2</span>,<span className='blue'>0</span>,<span className='red'>"bear"</span>,<span className='red'>"zebra"</span>); <span className='darkgreen'>// インデックス2に"bear"と"zebra"を追加します</span></p>
  <p>{'console.log(animals);'} <span className='darkgreen'>// 出力: ["dog","cat","bear","zebra","elephant","lion"]</span></p>
</code>

<code>
  <p><span className='blueviole'>var</span> <span className='blue'>letters</span> = [<span className='red'>"a", "b", "c", "d", "e"</span>];</p>
  <p><span className='blueviole'>var</span> <span className='blue'>slice1</span> = letters.slice(<span className='blue'>0, 2</span>); <span className='darkgreen'>// ["a", "b"]を返します</span></p>
  <p><span className='blueviole'>var</span> <span className='blue'>slice2</span> = letters.slice(<span className='blue'>2</span>); <span className='darkgreen'>// ["c", "d", "e"]を返します</span></p>
  <p>{'console.log(slice1);'}</p>
  <p>{'console.log(slice2);'}</p>
</code>

<code>
  <p><span className='blueviole'>var</span> <span className='blue'>fruits</span> = [<span className='red'>"apple", "banana", "orange"</span>];</p>
  <p><span className='blueviole'>var</span> <span className='blue'>fruitString</span> = fruits.join(<span className='red'>", "</span>); <span className='darkgreen'>// 配列の要素をコンマで結合します</span></p>
  <p>{'console.log(fruitString);'} <span className='darkgreen'>// 出力: "apple,banana,orange"</span></p>
</code>   
    
<code>
  <p><span className='blueviole'>var</span> <span className='blue'>nums1</span> = [<span className='blue'>1, 2, 3</span>];</p>
  <p><span className='blueviole'>var</span> <span className='blue'>nums2</span> = [<span className='blue'>4, 5, 6</span>];</p>
  <p><span className='blueviole'>var</span> <span className='blue'>nums3</span> = nums1.concat(nums2); <span className='darkgreen'>// nums1とnums2を結合します</span></p>
  <p>{'console.log(nums3);'} <span className='darkgreen'>// 出力: [1, 2, 3, 4, 5, 6]</span></p>
</code>

<p><b>配列のメソッド | 配列の結合</b></p>

<p>JavaScriptでは、concat()メソッドを使用して2つ以上の配列を結合できます。このメソッドは、元の配列のすべての要素を含む新しい配列を返します。</p>

<h3>forEachとmap</h3>

<p><b>forEach</b>は、配列の各要素を反復処理し、各要素に対して関数を実行します。関数を引数として受け取り、配列の各要素をその関数に引数として渡します。</p>

<p>以下は、forEachを使用して配列の各要素を出力する例です：</p>

<code>
  <p><span className='blueviole'>var</span> <span className='blue'>arr</span> = [<span className='blue'>1, 2, 3, 4, 5</span>];</p>
  <p>arr.forEach{'('}<span className='blueviole'>function</span>(<span className='blue'>element</span>) {'{'}</p>
  <p>{'console.log(element);'}</p>
  <p>{' });'}</p>
</code>

<p>これにより、次のように出力されます：</p>

<code>
  <p className='blue'>1</p>
  <p className='blue'>2</p>
  <p className='blue'>3</p>
  <p className='blue'>4</p>
  <p className='blue'>5</p>
</code>

<p>
一方、mapは、元の配列の各要素に関数を呼び出して新しい配列を作成するために使用されます。それも関数を引数として受け取り、配列の各要素をその関数に引数として渡します。関数は新しい配列に追加する新しい値を返す必要があります。
</p>

<p>
以下は、元の配列の各要素を2倍にして新しい配列を作成するためにmapを使用する例です：
</p>

<code>
  <p><span className='blueviole'>var</span> <span className='blue'>arr</span> = [<span className='blue'>1, 2, 3, 4, 5</span>];</p>
  <p><span className='blueviole'>var</span> <span className='blue'>doubledArr</span> = arr.map{'('}<span className='blueviole'>function</span>(<span className='blue'>element</span>) {'{'}</p>
 <p><span className='blueviole'>return</span> element * <span className='blue'>2</span>;</p>
 <p>{'});'}</p>
 <p>{'console.log(doubledArr);'}</p>
</code>

<p>これにより、次のように出力されます</p>

<code><p className='blue'>[2, 4, 6, 8, 10 ]</p></code>

<p>
要するに、forEachは配列の各要素に対して操作を実行し、mapは元の配列の各要素に対して関数を呼び出して新しい配列を作成します
</p>

<h3>applyメソッド</h3>

<p>JavaScriptでは、apply()メソッドは、指定されたthis値と引数（配列または配列のようなオブジェクトとして提供される）を使用して関数を呼び出すために使用されます。</p>

<p>apply()メソッドの使用法は次のとおりです：</p>
  
<code>
  <p>{'functionName.apply(thisValue, [argumentsArray]) '}</p>
</code>    
    
<p><b>Where</b></p>

<p>functionNameは、呼び出したい関数の名前です。</p>

<p>thisValueは、関数内でthis値として使用したい値です。このパラメータはオプションです。省略すると、グローバルオブジェクトが使用されます。</p>

<p>argumentsArrayは、関数に渡したい引数を含む配列または配列のようなオブジェクトです。このパラメータもオプションです。引数を渡す必要がない場合は、省略できます。</p>

<p>次に、apply()メソッドを配列と共に使用する例を示します：</p>
  
<code>
  <p><span className='blueviole'>var</span> <span className='blue'>numbers</span> = [<span className='blue'>1, 2, 3, 4, 5</span>];</p>    
  
  <p><span className='blueviole'>function</span> <span className='blue'>sumArray</span>() {'{'}</p>

  <p><span className='blueviole'>var</span> <span className='blue'>sum</span> = <span className='blue'>0</span>;</p>

  <p><span className='blueviole'>for</span> (<span className='blueviole'>var</span> <span className='blue'>i</span> = <span className='blue'>0</span>; i {'<'} <span className='blueviole'>this</span>.length; i++) {'{'}</p>

  <p>sum += <span className='blueviole'>this</span>[i];</p>

  <p>{'}'}</p>

  <p><span className='blueviole'>return</span> sum;</p>

  <p>{'}'}</p>

  <p><span className='blueviole'>var</span> <span className='blue'>result</span> = sumArray.apply(numbers);</p>

  <p>{'console.log(result);'} <span className='darkgreen'>// 出力: 15</span></p>

  <p>{''}</p>
</code>

<p>この例では、数値の配列と、配列内のすべての要素の合計を計算するsumArray()関数があります。 sumArray()関数に対してapply()メソッドを使用し、this値としてnumbers配列を渡します。 apply()メソッドは配列をthis値として渡し、sumArray()関数は配列内のすべての要素の合計を計算してそれを返します。</p>

<p>apply()メソッドはcall()メソッドと似ていますが、call()メソッドは引数をコンマ区切りのリストとして受け取ります。一方、apply()メソッドは引数を配列として受け取ります。</p>
  
  <h3>自己実行関数</h3>
  
  <p>自己実行関数は、定義されると自動的に実行されるJavaScript関数です。これは、即時実行関数式（IIFE）としても知られています。この関数は括弧で囲まれ、開き括弧と閉じ括弧を使用して即座に呼び出されます。</p>
  
  <p>以下は、自己実行関数の例です：</p>
  
  <code>
    <p>{'('}<span className='blueviole'>function</span>() {'{'}</p>

    <p>{'console.log'}(<span className='red'>"Hello, World!"</span>);</p>

    <p>{' })();'}</p>
  </code>

<p>この例では、関数が定義され、開き括弧と閉じ括弧を使用して即座に呼び出されます。これにより、「Hello, World!」がコンソールに出力されます。</p>

<p>自己実行関数は、変数や関数を定義してグローバル名前空間を汚染せずにプライベートスコープを作成するためによく使用されます。以下は例です：</p>

<code>
  <p>{'('}<span className='blueviole'>function</span>() {'{'}</p>
  <p><span className='blueviole'>var</span> <span className='blue'>x</span> = <span className='blue'>10</span>;</p>
  <p><span className='blueviole'>function</span> <span className='blue'>foo</span>() {'{'}</p>
  <p>{'console.log(x);'}</p>
  <p>{'}'}</p>
  <p>foo(); <span className='darkgreen'>// 出力: 10</span></p>
  <p>{'})();'}</p>
</code>

<p>この例では、変数xと関数fooが自己実行関数内で定義されています。これらは関数の外部からアクセスできず、他のコードとの名前の競合を防ぎます。</p>

<p>自己実行関数は通常の関数と同様に引数を取ることもできます。以下は例です：</p>

<code>
  <p>{'('}<span className='blueviole'>function</span>(<span className='blue'>x, y</span>) {'{'}</p>
  <p>{'console.log'}(x + y);</p>
  <p>{'})'}(10, 20); <span className='darkgreen'>// 出力: 30</span></p>
</code>

<p>この例では、自己実行関数が2つの引数（xとy）を取り、それらの合計をコンソールに出力します。</p>

<p>自己実行関数は、プライベートスコープを作成し、名前の競合を防ぎ、グローバル変数を管理するためのJavaScriptの強力なツールです。</p>
    
<b><p>* 翻訳者の助けを借りて書かれたテキスト。 エラーが見つかった場合は、お知らせください *</p></b>
  
  <div className='ads-container'>  
    {/*  реклама  */}
  </div>
    </div>
  )
}

export default JpJSEs5_5;