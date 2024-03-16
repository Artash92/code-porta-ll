import React from 'react';

function JpJavaScript6() {
  return (
    <div>
      <div className='ad-container'>  
          {/*  реклама  */}
        </div>
        
      <h1 className='hy'>JavaScript ES6（ECMAScript 2015）は、言語に新しい機能と構文の改善をもたらしたJavaScriptの第6版です。以下はES6の主な特長です：</h1>

<p>1. <b className='blueviole'>let </b>および<b className='blueviole'>const</b>：これらは古いvarキーワードを置き換える新しい変数宣言です。より良いスコープルールを提供し、<b className='blueviole'>var</b>によって発生する可能性のある一般的なミスを防ぐのに役立ちます。</p>

<p>2. アロー関数：アロー関数は関数式をより短い構文で記述する方法を提供します。また、thisの値をレキシカルにバインドするため、関数スコープについて推論するのが簡単になります。</p>

<p>3. テンプレートリテラル：この機能は、引用符の代わりにバッククォートを使用して文字列内に式を埋め込む方法を提供します。動的なコンテンツを持つ文字列を作成するのが簡単になります。</p>

<p>4. スプレッド演算子：スプレッド演算子は3つのドット（...）で表されます。配列式や文字列などの反復可能なものを、関数呼び出しの引数（または要素の配列リテラルの場合）が期待される場所で展開することができます。</p>

<p>5. 分割代入：分割代入は、省略記法を使用して配列やオブジェクトからデータを別々の変数に抽出する方法を提供します。</p>

<p>6. クラス：ES6では、オブジェクトを作成し、その動作を定義するよりシンプルで直感的な方法を提供する新しいクラス構文が導入されました。</p>

<p>7. モジュール：モジュールは、コードを別々の自己完結型ファイルに整理し、必要に応じて簡単にインポートおよびエクスポートできる方法です。これにより、大規模なアプリケーションの開発とメンテナンスが効率化されます。ES6は、importおよびexportキーワードを使用した標準化されたモジュール構文を導入し、複数のファイルやプロジェクト間でコードを共有および再利用しやすくしました。</p>

<p>8. クラス：ES6では、JavaScriptでオブジェクト指向プログラミングを可能にする新しいクラスの構文が導入されました。クラスはプロパティとメソッドを持つオブジェクトを作成するために使用でき、他のクラスからも継承できます。この構文により、複雑なコードを書きやすく保守しやすくなり、コードの可読性と再利用性が向上します。</p>

<p>9. プロミス：プロミスはJavaScriptで非同期操作を扱う方法です。非同期操作の結果を処理するための標準化された方法を提供し、値を解決または拒否することができます。プロミスはチェーンさせることができ、async/awaitなどの他の機能と組み合わせてより複雑で強力な非同期ワークフローを作成できます。</p>

<p>これらはES6で導入された多くの機能の一部に過ぎません。これらの機能を学習して使用することで、JavaScriptコードを大幅に改善し、開発プロセスを効率的かつ効果的にすることができます。</p>

<p><b>ES6変数</b></p>

<code>
    <p><span className='blueviole'>const</span> <span className='blue'>num</span> = <span className='blue1'>10</span>; </p>
    
    <p>{'console'}.<span className='blue'>log</span>(num);<span className='green'> // 10</span></p>

    <p>{'{'}</p>

    <p><span className='blueviole'>const</span> <span className='blue'>num2</span> = <span className='blue1'>20</span>;</p>

    <p>{'console'}.<span className='blue'>log</span>(num2); <span className='green'>// 20</span> </p>

    <p>{'}'}</p>

    <p><span className='green'>// num2が定義されていません</span></p>

    <p>{'console'}.<span className='blue'>log</span>(num); <span className='green'>// 10</span></p>
 </code>

<p>このコードはES6変数を使用しています。最初の行は定数変数「num」を作成し、その値を10に割り当てます。2行目は、ES6の新機能である波括弧を使用してコードのブロックを開始します。</p>

<p>このブロック内で、「const」キーワードを使用して新しい変数「num2」が宣言され、値20が割り当てられます。この変数はブロック内でのみアクセス可能です。なぜなら、「const」キーワードを使用して宣言されたため、ブロックスコープの変数が作成されるためです。3行目は、「num2」の値をコンソールに出力します。これは20になります。</p>

<p>ブロックの後、別のconsole.logステートメントが呼び出されますが、この時はブロックの外にあるためアクセス可能な変数「num」の値を出力します。最後に、コードは「num2」の値を出力しようとしますが、これはブロック内で宣言されており、その外部からアクセスできないため、「num2が定義されていません」というエラーが発生します。</p>

<p><b>ES6変数</b></p>

<code>
    <p><span className='blueviole'>const</span> <span className='blue'>name</span> = <span className='red'>"Leo"</span>;</p>    
    
    <p><span className='blueviole'>const</span> <span className='blue'>name</span> = <span className='red'>"Kevin"</span>; <span className='green'>//識別子（名前）がすでに宣言されています</span></p>

    <p><span className='blueviole'>const</span> <span className='blue'>name</span> = <span className='red'>"Leo"</span>;</p>

    <p><span className='blueviole'>if</span> (<span className='blue1'>true</span>) {'{'}</p>

    <p><span className='blueviole'>const</span> <span className='blue'>name</span> = <span className='red'>"Mike"</span>;</p>

    <p>{'console'}.<span className='blue'>log</span>(name); <span className='green'>// Mike</span></p>

    <p>{'}'}</p>
    <p>{'console'}.<span className='blue'>log</span>(name); <span className='green'>// Leo</span></p>
 </code>

<p>このコードは定数変数「name」を宣言し、別の値で再度宣言しようとしていますが、「識別子'name'はすでに宣言されています」というエラーが発生します。</p>

<p>その後、コードは「name」を「Leo」として再宣言し、if文でブロックスコープを作成します。ブロック内で、値「Mike」の新しい変数「name」が宣言され、それがコンソールに出力されます。ブロックの外では、値「Leo」の元の変数「name」がまだスコープ内にあり、コンソールに出力されます。</p>

<p>したがって、このコードの出力は「識別子'name'はすでに宣言されています」に続いて「Mike」と「Leo」になります。</p>

<p><b>ES6変数</b></p>
    
<code>
    <p><span className='blueviole'>if</span> (<span className='blue1'>true</span>) {'{'}</p>    
    
    <p><span className='green'>// 時間的死のゾーン</span></p>

    <p>{'console'}.<span className='blue'>log</span>(<span className='blueviole'>typeof</span> value); <span className='green'>// valueは定義されていません</span></p>

    <p><span className='blueviole'>let</span> <span className='blue'>value</span> = <span className='blue1'>10</span>;</p>

    <p>{'} '}</p>

    <p>{'console'}.<span className='blue'>log</span>(<span className='blueviole'>typeof</span> value); <span className='green'>// undefined</span></p>
    </code>

<p><b>let</b>キーワードはブロック内で変数<b>value</b>を宣言するために使用されます。しかし、ブロック内で<b>value</b>の宣言より前に<b>typeof value</b>が呼び出されると、JavaScriptエンジンは変数がまだ定義されていないためReferenceErrorをスローします。これは時間的死のゾーンとして知られ、変数の作成とその宣言の間の時間の期間を指し、その間にアクセスできない状態を示します。ブロックの外での<b>console.log(typeof value)</b>ステートメントは、現在のスコープで<b>value</b>が定義されていないため、<b>undefined</b>を返します。</p>

<p>2番目のコードブロックでは：</p>

 <code>
    <p><span className='blueviole'>if</span>(<span className='blue1'>true</span>) {'{'}</p>
    
    <p><span className='blueviole'>let</span> <span className='blue'>value</span> = <span className='blue1'>10</span>;</p>

    <p>{'}'}</p>
  </code>

<p>変数<b>value</b>はブロック内で宣言され、値<b>10</b>が割り当てられます。しかし、ブロックがグローバルスコープ内になく、<b>value</b>が外側のスコープに返されないか、変数に割り当てられない場合、<b>value</b>の値はブロックの実行が終了した時点で効果的に失われます。</p>

<p><b>ES6変数</b></p>

<code>
    <p><span className='blueviole'>for</span>(<span className='blueviole'>var</span> <span className='blue'>i</span> = <span className='blue1'>0</span>; i {'<'} <span className='blue1'>5</span>; i++) {'{'}</p> 
    
    <p><span className='green'>// ここにコードを入力</span></p>

    <p>{'}'}</p>

    <p>{'console'}.<span className='blue'>log</span>(i); <span className='green'>// 5</span> </p>

    <hr/>
  
    <p><span className='blueviole'>for</span>(<span className='blueviole'>let</span> <span className='blue'>i</span> = <span className='blue1'>0</span>; i {'<'} <span className='blue1'>5</span>; i++) {'{'}</p>

    <p><span className='green'>// ここにコードを入力</span></p>

    <p>{' }'}</p>

    <p>{'console'}.<span className='blue'>log</span>(i); <span className='green'>// iは定義されていません</span> </p>
  </code>

<p>このコードは、forループでvarとletの変数スコープの違いを示しています。最初の例では、i変数はvarを使用して宣言されており、関数レベルのスコープを持っています。これは、変数がforループの外部に存在することを意味し、そのためコンソールに出力されるときのiの値は5です。</p>

<p>2番目の例では、iはletを使用して宣言されており、ブロックレベルのスコープを持っています。これは、変数がforループブロック内にのみ存在することを意味し、ループの外部からアクセスできないため、ループの外部でコンソールに出力されるときには、iが定義されていないという参照エラーが発生します。</p>

<p><b>ES6 Spread Operator</b></p>

<p>スプレッド演算子は、ES6で導入された新機能で、反復可能なオブジェクトを個々の要素に展開または拡張することができます。この反復可能なオブジェクトは、配列、文字列、または他の反復可能なオブジェクトである場合があります。</p>

<p><b>スプレッド演算子は3つのドット(...)で表され、さまざまな方法で使用できます。以下はいくつかの例です：</b></p>

<p>1. 配列を連結するためにスプレッド演算子を使用する：</p>

 <code>
    <p><span className='blueviole'>const</span> <span className='blue'>array1</span> = [<span className='blue1'>1, 2, 3</span>];</p>  
    
    <p><span className='blueviole'>const</span> <span className='blue'>array2</span> = [<span className='blue1'>4, 5, 6</span>]; </p>

    <p><span className='blueviole'>const</span> <span className='blue'>newArray</span> = [...array1, ...array2]; </p>

    <p>{'console'}.<span className='blue'>log</span>(newArray); <span className='green'>// [1, 2, 3, 4, 5, 6]</span></p>
  </code>

<p>2. 配列のコピーを作成するためにスプレッド演算子を使用する：</p>

<code>
    <p><span className='blueviole'>const</span> <span className='blue'>array1</span> = [<span className='blue1'>1, 2, 3</span>];</p>
    
    <p><span className='blueviole'>const</span> <span className='blue'>array2</span> = [...array1];</p>

    <p>{'console'}.<span className='blue'>log</span>(array2); <span className='green'>// [1, 2, 3]</span></p>
</code>  
    
<p>3. 関数に引数を渡すためにスプレッド演算子を使用する：</p>

 <code>
    <p><span className='blueviole'>function</span> <span className='blue'>sum</span>(<span className='blue1'>a, b, c</span>) {'{'}</p>
    
    <p><span className='blueviole'>return</span> a + b + c; </p>

    <p>{'}'}</p>

    <p><span className='blueviole'>const</span> <span className='blue'>numbers</span> = [<span className='blue1'>1, 2, 3</span>]; </p>

    <p><span className='blueviole'>const</span> <span className='blue'>result</span> = sum(...numbers);</p>

    <p>{'console'}.<span className='blue'>log</span>(result); <span className='green'>// 6</span></p>
  </code>

<p>4. オブジェクトをマージするためにスプレッド演算子を使用する：</p>

<code>
    <p><span className='blueviole'>const</span> <span className='blue'>object1</span> = {'{'} x: <span className='blue1'>1</span>, y: <span className='blue1'>2</span> {'}'}; </p>
    
    <p><span className='blueviole'>const</span> <span className='blue'>object2</span> = {'{'} z: <span className='blue1'>3</span> {'}'};</p>

    <p><span className='blueviole'>const</span> <span className='blue'>mergedObject</span> = {'{'} ...object1, ...object2 {'}'};</p>

    <p>{'console'}.<span className='blue'>log</span>(mergedObject); <span className='green'>// {'{'} x: 1, y: 2, z: 3 {'}'}</span></p>
</code>

<p>これらのすべての例で、スプレッド演算子は反復可能なオブジェクトを個々の要素に展開するために使用されます。これは、コードを簡素化し、より読みやすくする便利な機能です。</p>

<p><b>ES6分割代入</b></p>

<p>ES6の分割代入は、より簡潔で読みやすい方法でオブジェクトや配列から値を抽出し、変数に割り当てる方法です。</p>

<p>例えば、次のようなオブジェクトを考えてみてください：</p> 

<code>
    <p><span className='blueviole'>const</span> <span className='blue'>person</span> = {'{'}</p>

    <p>name: <span className='red'>'John Doe'</span>, </p>

    <p>age: <span className='blue1'>30</span>,</p>

    <p>email: <span className='red'>'john.doe@example.com'</span></p>

    <p>{'};'}</p>
</code>

<p>個々のプロパティにアクセスする代わりに：</p>

<code>
    <p><span className='blueviole'>const</span> <span className='blue'>name</span> = person.name;</p>

    <p><span className='blueviole'>const</span> <span className='blue'>age</span> = person.age; </p>

    <p><span className='blueviole'>const</span> <span className='blue'>email</span> = person.email; </p>
</code>

<p>より簡潔な方法で各プロパティを変数に割り当てるために分割代入を使用できます：</p>

<code><p> <span className='blueviole'>const</span> {'{'} <span className='blue'>name, age, email</span> {'}'} = person; </p></code>

<p>これにより、<b>(name、age、およびemail)</b>の3つの変数が作成され、それぞれのプロパティの値がpersonオブジェクトに割り当てられます。</p>

<p>配列でも分割代入を使用できます。例：</p>

<code>
    <p><span className='blueviole'>const</span> <span className='blue'>numbers</span> = [<span className='blue1'>1, 2, 3, 4, 5</span>]; </p>

    <p><span className='blueviole'>const</span> [<span className='blue'>first</span>, <span className='blue'>second</span>, ...<span className='blue'>rest</span>] = numbers; </p>

    <p>{'console'}.<span className='blue'>log</span>(first); <span className='green'>// 1</span></p>

    <p>{'console'}.<span className='blue'>log</span>(second); <span className='green'>// 2</span></p>

    <p>{'console'}.<span className='blue'>log</span>(rest); <span className='green'>// [3, 4, 5]</span></p>
</code>

<p>これにより、3つの変数 <b>(first、second、およびrest)</b> が作成され、それぞれ <b>numbers</b> 配列の最初の2つの要素の値と残りの要素が割り当てられます。</p>

<p>デストラクチャリングは、ネストされたオブジェクトや配列でも使用でき、デストラクチャリングされる値が未定義の場合には変数にデフォルト値を割り当てることもできます。</p>

<p>全体として、デストラクチャリングは、ES6の強力な機能であり、コードをより読みやすく簡潔にするのに役立ちます。</p>

<p><b>ES6サイクル（for - of）</b></p>

<p>ES6では、JavaScriptに<b>for...of</b>ループという新しいタイプのループが導入されました。このループは、配列、文字列、マップ、セットなどの反復可能オブジェクトの要素を反復処理するために使用されます。</p>

<p>以下は、<b>for...of</b>ループを使用して配列を反復処理する例です：</p>

<code>
    <p><span className='blueviole'>const</span> <span className='blue'>arr</span> = [<span className='blue1'>1, 2, 3, 4, 5</span>]; </p>    
    
    <p><span className='blueviole'>for</span> (<span className='blueviole'>let</span> <span className='blue'>num</span> <span className='blueviole'>of</span> arr) {'{'}</p>

    <p>{'console'}.<span className='blue'>log</span>(num);</p>

    <p>{'} '}</p>
</code>

<p>この例では、<b>for...of</b>ループが <b>arr</b> 配列の各要素を反復処理し、それをコンソールに記録します。</p>

<p>また、<b>for...of</b>ループを使用して文字列の各文字を反復処理することもできます：</p>

<code>
    <p><span className='blueviole'>const</span> <span className='blue'>str</span> = <span className='red'>"Hello, world!"</span>; </p>
    
    <p><span className='blueviole'>for</span> (<span className='blueviole'>let</span> <span className='blue'>char</span> <span className='blueviole'>of</span> str) {'{'}</p>

    <p>{'console'}.<span className='blue'>log</span>(char);</p>

    <p>{'}'}</p>
</code>

<p>この例では、<b>for...of</b>ループが <b>str</b> 文字列の各文字を反復処理し、それをコンソールに記録します。</p>

<p>さらに、<b>for...of</b>ループを使用してMapオブジェクトのキーまたは値を反復処理することもできます：</p>

<code>
    <p><span className='blueviole'>const</span> <span className='blue'>map</span> = <span className='blueviole'>new</span> Map {'(['} </p>
    
    <p>[<span className='red'>'a'</span>, <span className='blue1'>1</span>],</p>

    <p> [<span className='red'>'b'</span>, <span className='blue1'>2</span>], </p>

    <p> [<span className='red'>'c'</span>, <span className='blue1'>3</span>] </p>

    <p>{']);'}</p>

    <p><span className='blueviole'>for</span> (<span className='blueviole'>let</span> [<span className='blue'>key, value</span>] <span className='blueviole'>of</span> map) {'{'}</p>

    <p>{'console'}.<span className='blue'>log</span>(key, value);</p>

    <p>{'}'}</p>
 </code>

<p>この例では、<b>for...of</b>ループが <b>map</b> オブジェクトの各キーと値のペアを反復処理し、それらをコンソールに記録します。</p>

<p>全体として、<b>for...of</b>ループは、反復可能オブジェクトを反復処理することを簡略化するJavaScript言語への有用な追加です。</p>

<p><b>ES6 関数のレストパラメーター</b></p>

<p>ES6 関数のレストパラメーターは、関数が配列として不特定の数の引数を受け入れる機能です。これは、パラメーター名の後に続く三点 (...) で示されます。</p>

<p>以下は、レストパラメーターを使用する例です：</p>

 <code>
    <p><span className='blueviole'>function</span> <span className='blue'>sum</span>(...<span className='blue'>numbers</span>) {'{'}</p>

    <p><span className='blueviole'>let</span> <span className='blueviole'>result</span> = <span className='blue1'>0</span>; </p>

    <p><span className='blueviole'>for</span> (<span className='blueviole'>let</span> <span className='blue'>number</span> <span className='blueviole'>of</span> numbers) {'{'}</p>

    <p>{'result += number;'}</p>

    <p>&nbsp;{' }'}</p>

    <p><span className='blueviole'>return</span> result; </p>

    <p>{'}'}</p>

    <p>{'console'}.<span className='blue'>log</span>(sum(<span className='blue1'>1, 2, 3</span>)); <span className='green'>// 出力: 6</span></p>

    <p>{'console'}.<span className='blue'>log</span>(sum(<span className='blue1'>4, 5, 6, 7</span>)); <span className='green'>// 出力: 22</span></p>
 </code>

 <p>上記の例では、関数sumは残余パラメータ...numbersを使用して不特定の数の引数を受け入れます。それは、for...ofループを使用してnumbers配列をループし、値を合計して結果を返します。</p>

<p>残余パラメータは、各引数を明示的に定義する必要なく、可変数の引数を処理する関数を書きたい場合に便利です。これは、配列を操作したり、一連の値に数学的な操作を行ったりする関数で一般的に使用されます。</p>

<p>全体的に、残余パラメータは、より柔軟で多目的な関数を書くのを容易にする便利な機能です。</p>

<p><b>アロー関数</b></p>

<p>アロー関数は、JavaScriptで関数を簡潔に書く方法であり、ES6（ECMAScript 2015）で導入されました。従来の関数式と比較して、よりコンパクトな構文を提供し、コードを読み書きしやすくします。</p>

<p>以下は、2つのパラメータを取り、その合計を返す従来の関数式の例です：</p>

<code>
<p><span className='blueviole'>function</span> <span className='blue'>sum</span>(<span className='blue1'>a, b</span>) {'{'}</p>

<p><span className='blueviole'>return</span> a + b; </p>

<p>{'}'}</p>
</code>

<p>同じ関数は、以下のようにアロー関数を使用して書くことができます：</p>

<code><p><span className='blueviole'>const</span> <span className='blue'>sum</span> = (<span className='blue1'>a, b</span>) {'=>'} a + b; </p></code>

<p>この例では、関数はアロー構文<b>{'=>'}</b>を使用して定義されています。パラメータ<b>(a, b)</b>はかっこで囲まれ、その後に矢印<b>{'=>'}</b>と関数の本体<b>a + b.</b>が続きます。関数本体が単一の文であるため、中括弧と<b>return</b>キーワードは省略できます。</p>

<p>アロー関数は、匿名関数としても使用でき、変数に割り当てたり、他の関数に引数として渡したりすることもできます。以下は、配列を取り、各要素を2倍にした新しい配列を返すアロー関数の例です：</p>

<code><p><span className='blueviole'>const</span> <span className='blue'>doubleArray</span> = <span className='blue'>arr</span> {'=>'}arr.map(<span className='blue'>item</span> {'=>'} item * <span className='blue1'>2</span>); </p></code>

<p>この例では、アロー関数{' (item => item * 2)'}が<b>map()</b>メソッドの引数として渡され、関数が配列の各要素に適用され、変更された値を持つ新しい配列が返されます。</p>

<p>アロー関数はまた、レキシカル<b>this</b>バインディングを持ち、これは関数の<b>this</b>ではなく、その周囲のスコープの<b>this</b>の値を参照します。これにより、オブジェクトのメソッドやイベントハンドラを扱う際に特に便利です。</p>

<p>全体として、アロー関数はJavaScriptで関数をより簡潔かつ読みやすく書く方法を提供し、コードを理解しやすく保守することができます。</p>

<p><b>プロトタイプ</b></p>

<p>JavaScriptでは、すべてのオブジェクトには[[Prototype]]（「ダンダープロト」とも呼ばれることがある）という内部プロパティがあり、これは別のオブジェクトまたはnullを参照します。このプロパティは、継承を実装し、オブジェクトがプロトタイプからプロパティとメソッドを継承し、利用できるようにします。</p>

<p>ES5では、コンストラクタ関数とプロトタイププロパティを使用してプロトタイプを作成できます。以下はその例です：</p>

<code>
  <p><span className='blueviole'>function</span> <span className='blue'>Person</span>(<span className='blue1'>name, age</span>) {'{'}</p>

  <p><span className='blueviole'>this</span>.name = name; </p>

  <p><span className='blueviole'>this</span>.age = age; </p>

  <p>&nbsp;{'} '}</p>

  <p>Person.prototype.greet = <span className='blueviole'>function</span>() {'{'}</p>

  <p>{'console'}.<span className='blue'>log</span>(<span className='red'>`こんにちは、私の名前は</span> ${'{'}<span className='blueviole'>this</span>.name{'}'} <span className='red'>で、私は</span> ${'{'}<span className='blueviole'>this</span>.age{'}'} <span className='red'>歳です。</span>`);</p>

  <p>{'} '}</p>

  <p><span className='blueviole'>const</span> <span className='blue'>john</span> = <span className='blueviole'>new</span> Person(<span className='red'>"John"</span>, <span className='blue1'>30</span>); </p>

  <p>john.greet(); <span className='green'>// "こんにちは、私の名前はJohnで、私は30歳です。"</span></p>
</code>

<p>この例では、<b>Person</b>という名前のコンストラクタ関数を作成し、引数として<b>name</b>と<b>age</b>を受け取り、それらをオブジェクトのプロパティとして設定します。その後、<b>Person</b>のプロトタイプに<b>greet</b>メソッドを追加します。これは、<b>Person.prototype</b>オブジェクトを使用して行います。このメソッドは、コンソールに挨拶メッセージをログに記録し、その中に人物の名前と年齢を含めます。</p>

<p>newキーワードと<b>Person</b>コンストラクタを使用して新しいオブジェクトを作成すると、新しいオブジェクトの[[Prototype]]プロパティは<b>Person.prototype</b>オブジェクトを指します。これにより、新しいオブジェクトはプロトタイプから<b>greet</b>メソッドを継承します。</p>

<p>ES6では、<b>class</b>構文を使用してクラスとそのプロトタイプを定義できます。以下は、ES6クラスを使用した同じ例です：</p>

<code>
  <p><span className='blueviole'>class</span> <span className='green'>Person</span> {'{'}</p>

  <p>constructor(<span className='blue'>name, age</span>) {'{'}</p>

  <p><span className='blueviole'>this</span>.name = name; </p>

  <p><span className='blueviole'>this</span>.age = age;</p>

  <p>{'}'}</p>

  <p>{'greet() { '}</p>

  <p>{'console'}.<span className='blue'>log</span>(<span className='red'>`こんにちは、私の名前は</span> ${'{'}<span className='blueviole'>this</span>.name{'}'} <span className='red'>で、私は</span> ${'{'}<span className='blueviole'>this</span>.age{'}'} <span className='red'>歳です。</span>`);</p>

  <p>&nbsp;{'}'}</p>

  <p>{'}'}</p>

  <p><span className='blueviole'>const</span> <span className='blue'>john</span> = <span className='blueviole'>new</span> Person(<span className='red'>"John"</span>, <span className='blue1'>30</span>); </p>

  <p>john.greet(); <span className='green'>// "こんにちは、私の名前はJohnで、私は30歳です。"</span></p>
</code>

<p>この例では、<b>Person</b>という名前のクラスを定義し、コンストラクタは<b>name</b>と<b>age</b>を受け取り、それらをオブジェクトのプロパティとして設定します。その後、クラス自体に直接<b>greet</b>メソッドを定義します。クラス構文は、実際にはコンストラクタ関数を作成し、そのプロトタイプをクラスのプロトタイプに設定します。</p>

<p>ES5とES6の両方がJavaScriptで継承を実装するためにプロトタイプの概念を使用しますが、プロトタイプを定義する構文は異なります。ES6のクラスは、クラスを作成し、そのプロトタイプを定義するためのより簡潔で直感的な構文を提供しますが、ES5のプロトタイプは、プロトタイプをどのように定義するかについての柔軟性と制御を提供します。</p>

<p><b>クラス（静的メソッド）</b></p>

<p>ES6では、オブジェクトの設計図としてクラスが導入されました。クラスは、データと機能をカプセル化するオブジェクトを作成するためのテンプレートです。クラスの特徴の1つは、静的メソッドを定義できることです。これは、クラスのインスタンスではなく、クラス自体で呼び出されるメソッドです。</p>

<p>静的メソッドは、クラス自体に属するメソッドであり、クラスのインスタンスを作成する必要なくクラスで呼び出すことができます。</p>

<p>以下は、静的メソッドを持つクラスの例です：</p>

<code>
  <p><span className='blueviole'>class</span> <span className='green'>Car</span> {'{'}</p>

  <p>constructor(<span className='blue'>make, model</span>) {'{'}</p>

  <p><span className='blueviole'>this</span>.make = make; </p>

  <p><span className='blueviole'>this</span>.model = model; </p>

  <p>{'}'}</p>

  <p><span className='blueviole'>static</span> compare(<span className='blue'>car1, car2</span>) {'{'}</p>

  <p><span className='blueviole'>if</span> (car1.make === car2.make) {'{'}</p>

  <p><span className='blueviole'>return</span> <span className='red'>"同じメーカー"</span>; </p>

  <p>&nbsp;{'}'} <span className='blueviole'>else</span> {'{'}</p>

  <p><span className='blueviole'>return</span> <span className='red'>"異なるメーカー"</span>; </p>

  <p>&nbsp;&nbsp;{' }'}</p>

  <p>&nbsp;{' }'}</p>

  <p>{' }'}</p>

  <p><span className='blueviole'>let</span> <span className='blue'>car1</span> = <span className='blueviole'>new</span> Car(<span className='red'>"Honda", "Civic"</span>); </p>

  <p><span className='blueviole'>let</span> <span className='blue'>car2</span> = <span className='blueviole'>new</span> Car(<span className='red'>"Toyota", "Corolla"</span>); </p>

  <p>console.<span className='blue'>log</span>(Car.compare(car1, car2)); <span className='green'>// "異なるメーカー"</span> </p>
</code>

<p>上記の例では、Carクラスにはcompareという静的メソッドがあります。このメソッドは、2つのCarオブジェクトをパラメータとして受け取り、それらが同じメーカーかどうかを示す文字列を返します。compareメソッドは、クラスのインスタンスではなく、Carクラス自体で呼び出すことができます。</p>

<p>compareメソッドでは、メソッドがクラスのインスタンスではなく、2つのCarオブジェクトをパラメータとして受け取り、そのmakeプロパティを比較するため、thisキーワードは使用されません。</p>

<p>ES5では、静的メソッドは、コンストラクタ関数のプロトタイププロパティを使用してコンストラクタ関数自体に定義されます。以下は、上記のES6クラスがES5でどのように見えるかの例です：</p>

<code>
  <p><span className='blueviole'>function</span> <span className='blue'>Car</span>(<span className='blue'>make, model</span>) {'{'}</p>

  <p><span className='blueviole'>this</span>.make = make; </p>

  <p><span className='blueviole'>this</span>.model = model; </p>

  <p>{'} '}</p>

  <p>Car.compare = <span className='blueviole'>function</span>(<span className='blue'>car1, car2</span>) {'{'}</p>

  <p><span className='blueviole'>if</span> (car1.make === car2.make) {'{'}</p>

  <p><span className='blueviole'>return</span> <span className='red'>"同じメーカー"</span>; </p>

  <p>&nbsp;{'}'} <span className='blueviole'>else</span>  {'{'}</p>

  <p><span className='blueviole'>return</span> <span className='red'>"異なるメーカー"</span>; </p>

  <p>&nbsp;{'}'}</p>

  <p>{'}; '}</p>

  <p><span className='blueviole'>let</span> <span className='blue'>car1</span> = <span className='blueviole'>new</span> Car(<span className='red'>"Honda", "Civic"</span>); </p>

  <p><span className='blueviole'>let</span> <span className='blue'>car2</span> = <span className='blueviole'>new</span> Car(<span className='red'>"Toyota", "Corolla"</span>); </p>

  <p>console.<span className='blue'>log</span>(Car.compare(car1, car2)); <span className='green'>// "異なるメーカー"</span> </p>
</code>

<p>ES5の例では、compareメソッドは、そのプロトタイププロパティではなく、Carコンストラクタ関数自体に直接定義されています。これにより、メソッドはCarコンストラクタ関数自体で呼び出すことができます。</p>

<p><b>シンボル</b></p>

<p>ES6では、シンボルは一意の識別子を表す新しいプリミティブデータ型です。文字列や数字とは異なり、シンボルは一意で不変であることが保証されており、完全に一意であるべきオブジェクトのキーまたはプロパティを作成するのに役立ちます。</p>

<p>シンボルを作成するには、<b>Symbol()</b>関数を使用できます。次のようにします：</p>

<code><p><span className='blueviole'>const</span> <span className='blue'>mySymbol</span> = Symbol();</p></code>

<p>後で識別しやすくするために、シンボルに説明を追加することもできます。次のようにします：</p>

<code><p><span className='blueviole'>const</span> <span className='blue'>mySymbol</span> = Symbol(<span className='red'>'My Symbol'</span>); </p></code>

<p>シンボルは、次のようにオブジェクトのキーまたはプロパティとして使用できます：</p>

<code>
  <p><span className='blueviole'>const</span> <span className='blue'>mySymbol</span> = Symbol(<span className='red'>'My Symbol'</span>); </p>

  <p><span className='blueviole'>const</span> <span className='blue'>obj</span> = {'{}'}; </p>

  <p>{'obj[mySymbol]'} = <span className='red'>'Hello, World!'</span>; </p>

  <p>{"console"}.<span className='blue'>log</span>{'(obj[mySymbol])'}; <span className='green'>// 出力: Hello, World!</span> </p>
</code>

<p>シンボルを使用する主な利点の1つは、一意で複製できないため、シンボルは偶然アクセスまたは変更されることがありません。これにより、オブジェクトのプライベートまたは内部プロパティを作成するのに最適です。</p>

<p>また、シンボルの利点のもう1つは、特定の意味や動作を持つ組み込みシンボルであるウェルノウンシンボルを定義できることです。たとえば、Symbol.iteratorシンボルはオブジェクトのデフォルトのイテレータを定義するために使用されます。</p>

<p>全体的に、シンボルはJavaScriptでオブジェクトの一意の識別子を作成し、カスタムの動作を定義するための強力で柔軟な方法を提供します。</p>

<p><b>プロミス</b></p>

<p>プロミスは、ES6で導入された機能で、非同期操作をより簡単かつ整理された方法で処理できるようにします。</p>

<p>単純に言えば、プロミスはまだ利用可能でない値を表すオブジェクトであり、将来的に利用可能になります。非同期操作（APIリクエストやデータベースクエリなど）の結果を処理する方法を提供し、メインスレッドの実行をブロックせずに行います。</p>

<p>プロミスには、保留中、達成済み、または拒否されたという3つの状態があります。プロミスが保留中の場合、それはまだ完了していないことを意味します。プロミスが達成された場合、それは操作が成功し、結果が利用可能であることを意味します。プロミスが拒否された場合、それは操作が失敗し、エラーが利用可能であることを意味します。</p>

<p>以下は、APIからデータを取得するためにプロミスを使用する方法の例です：</p>

<code>
  <p><span className='blueviole'>fetch</span>(<span className='blue1'>'https://jsonplaceholder.typicode.com/todos/1'</span>) </p>

  <p>.<span className='blue'>then</span>(response {'=>'} response.<span className='blue'>json</span>()) </p>

  <p>.<span className='blue'>then</span>(data {'=>'} {'console'}.<span className='blue'>log</span>(data))</p>

  <p>.<span className='blue'>catch</span>(error {'=>'} {'console'}.<span className='blue'>error</span>(error))</p>
</code>

<p>この例では、<b>fetch</b>はAPIからの応答で解決するプロミスを返す関数です。<b>then</b>メソッドは、プロミスに対して呼び出され、プロミスが達成されたときに実行されるコールバック関数を取ります。最初の<b>then</b>コールバックは、応答をJSONとして解析して返します。2番目のthenコールバックは、解析されたデータをコンソールにログ出力します。<b>catch</b>メソッドは、操作中に発生したエラーを処理するために呼び出されます。</p>

<p>プロミスは、<b>Promise</b>コンストラクタを使用して手動で作成することもできます：</p>

<code>
  <p><span className='blueviole'>const</span> <span className='blue'>promise</span> = <span className='blueviole'>new</span> Promise{'(('}<span className='blue'>resolve, reject</span>{')'} {'=>'} {"{"}</p>

  <p>{"setTimeout(() => { "}</p>

  <p> resolve(<span className='red'>'Success!'</span>) </p>

  <p>&nbsp;{" }"}, <span className='blue1'>1000</span>{')'} </p>

  <p>{"}) "}</p>

  <p> promise.then(<span className='blue'>result</span> {"=> console"}.<span className='blue'>log</span>(result)) <span className='green'>// 出力: Success!</span> </p>
</code>

<p>この例では、プロミスは、<b>resolve</b>および<b>reject</b>の2つのパラメータを取る関数で作成されます。<b>resolve</b>関数は、1秒後に引数<b>'Success!'</b>で呼び出されます。<b>then</b>メソッドは、プロミスに対して呼び出され、プロミスが達成されたときに実行されるコールバック関数を取ります。コールバックは結果をコンソールにログ出力します。</p>

    <b><p>* 翻訳者の助けを借りて書かれたテキスト。 エラーが見つかった場合は、お知らせください *</p></b>
    
    <div className='ads-container'>  
        {/*  реклама  */}
        </div>
    </div>
  )
}

export default JpJavaScript6;