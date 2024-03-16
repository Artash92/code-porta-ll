import React from 'react';

function JpJSEs5_10() {
  return (
    <div>
      <div className='ad-container'>  
          {/*  реклама  */}
        </div>

<h1>JavaScript ES5の例</h1>

<p><b>数のべき乗を計算する関数</b></p>

<code>
    <p><span className='blueviole'>function</span> <span className='blue'>pow</span>(<span className='blue1'>num, exp</span>) {"{ "}</p>
    
    <p><span className='blueviole'>var</span> <span className='blue'>cnt</span> = <span className='blue1'>0</span>; </p>

    <p><span className='blueviole'>var</span> <span className='blue'>res</span> = <span className='blue1'>1</span>; </p>

    <p><span className='blueviole'>while</span> (cnt {'<'} exp) {"{"}</p>

    <p>{" res *= num;"}</p>

    <p>{" cnt++; "}</p>

    <p>&nbsp;{" }"}</p>

    <p><span className='blueviole'>return</span> res;</p>

    <p>{"}"}</p>
</code>   

<p><b>pow(num, exp)</b>: この関数は数のべき乗を計算します。numとexpの2つのパラメータを取り、numのexp乗の値を返します。この関数はwhileループとカウンターを使用して、カウンターがexpに達するまで、numを自身のexp回数分だけ繰り返し乗算します。</p>

<p><b>数のべき乗を計算する関数（別のバージョン）</b></p>

<code>
  <p><span className='blueviole'>function</span> <span className='blue'>pow2</span>(<span className='blue1'>num1, num2</span>) {'{'}</p>
  <p><span className='blueviole'>var</span> <span className='blue'>num3</span> = <span className='blue1'>1</span>;</p>
  <p><span className='blueviole'>for</span> (<span className='blueviole'>var</span> <span className='blue'>i</span> = <span className='blue1'>1</span>; i {'<='} num2; i++) {'{'}</p>
  <p>{'num3 *= num1;'}</p>
  <p>&nbsp;{'}'}</p>
  <p><span className='blueviole'>return</span> num3;</p>
  <p>{'}'}</p>
</code>

<p><b>pow2(num1, num2)</b>: この関数は数のべき乗を計算します。num1とnum2の2つのパラメータを取り、num1のnum2乗の値を返します。この関数は、forループを使用して、ループが完了するまでnum1を自身のnum2回数分だけ繰り返し乗算します。</p>

<p><b>数が素数かどうかをチェックする関数</b></p>

<code>
  <p><span className='blueviole'>function </span><span className='blue'>isPrime</span>(<span className='blue1'>number</span>) {'{'}</p> 
  <p><span className='blueviole'>if</span> (number {'<'} <span className='blue1'>2</span>) {'{'}</p> 
  <p><span className='blueviole'>return</span> <span className='blue1'>false</span>;</p> 
  <p>{'}'} <span className='blueviole'>else if</span> (number == undefined) {'{'}</p> 
  <p><span className='blueviole'>return</span> undefined;</p> 
  <p>{'}'} <span className='blueviole'>else</span> {'{'}</p> 
  <p><span className='blueviole'>for</span> (<span className='blueviole'>var</span> <span className='blueviole'>i</span> = <span className='blue1'>2</span>; i {'<'} number; i++) {'{'}</p>
  <p> <span className='blueviole'>if</span> (number % i === <span className='blue1'>0</span>) {'{'}</p> 
  <p><span className='blueviole'>return</span> <span className='blue1'>false</span>;</p>
  <p>&nbsp;{' }'}</p>
  <p>{'}'}</p>
  <p><span className='blueviole'>return</span> <span className='blue1'>true</span>;</p>
  <p>&nbsp;{'}'}</p>
  <p>{'}'}</p>
</code> 

<p><b>isPrime(number)</b>: この関数は、数が素数かどうかをチェックします。パラメータnumberを取り、数が素数であればtrueを返し、そうでなければfalseを返します。関数はまず、数が2未満かどうかをチェックし、その場合はすぐにfalseを返します。数がundefinedの場合はundefinedを返します。それ以外の場合、関数はforループを使用して、2からnumber（排他）までの間にnumberを均等に割り切る数があるかどうかをチェックします。そのような数が見つかった場合、関数はfalseを返します。そのような数が見つからない場合、関数はtrueを返します。</p>

<h4>JavaScriptでアスタリスクを使用してピラミッドを作成する</h4>

<code>
    <p><span className='blueviole'>var</span> <span className='blue'>x</span> = <span className='blue1'>6</span>; </p>
    
    <p><span className='blueviole'>var</span> <span className='blue'>string</span> = <span className='red'>""</span>;</p>

    <p><span className='blueviole'>for</span> (<span className='blueviole'>var</span> <span className='blue'>i</span> = <span className='blue1'>1</span>; i {'<='} x; i++) {"{"}</p>

    <p><span className='blueviole'>for</span> (<span className='blueviole'>var</span> <span className='blue'>y</span> = <span className='blue1'>1</span>; y {'<= '}x - i; y++) {"{"}</p>

    <p>string += <span className='red'>" "</span>;</p>

    <p>{"}"}</p>

    <p> <span className='blueviole'>for</span> (<span className='blueviole'>var</span> <span className='blue'>k</span> = <span className='blue1'>0</span>; k {'<'} <span className='blue1'>2</span> * i - <span className='blue1'>1</span>; k++) {"{"}</p>

    <p>string += <span className='red'>"*"</span>; </p>

    <p>&nbsp;{" }"}</p>

    <p>string += <span className='red'>"\n"</span>;</p>

    <p>{"}"}</p>

    <p>{"console"}.<span className='blue'>log</span>(string);</p>
 </code>

<p>このコードは、アスタリスク（'*'）とスペースを使用してピラミッドパターンを作成します。</p>

<p>コードは、値が6の変数'x'と空の文字列変数'string'を定義して開始します。その後、forループを使用して、ピラミッドの各行を1から'x'まで順番に繰り返します。</p>

<p>最初のforループ内では、アスタリスクの前にスペースを追加するために別のforループが使用されます。各行のアスタリスクの前に追加されるスペースの数は、(x-i)です。</p>

<p>次に、2番目のforループが使用されて、文字列にアスタリスクが追加されます。各行に追加されるアスタリスクの数は、2*i-1の式で与えられます。ここで、'i'は現在の行番号です。</p>   

<p>最後に、各行の末尾に改行文字が追加され、完成した文字列がconsole.log()メソッドを使用してコンソールに出力されます。</p>  

<p><b>アスタリスクと数値を使用してピラミッドパターンを作成する</b></p>
    
<code>
    <p><span className='blueviole'>var</span> <span className='blue'>lineCount</span> = <span className='blue1'>5</span>;</p>
    
    <p><span className='blueviole'>var</span> <span className='blue'>symb</span> = <span className='red'>'*'</span>;</p>

    <p><span className='blueviole'>var</span> <span className='blue'>result</span> = <span className='red'>''</span>; </p>

    <p><span className='blueviole'>for</span> (<span className='blueviole'>var</span> <span className='blue'>i</span> = <span className='blue1'>0</span>; i {'<'} lineCount; i++){'{'}</p>

    <p><span className='blueviole'>for</span> (<span className='blueviole'>var</span> <span className='blue'>j</span> = <span className='blue1'>0</span>; j {'<'} lineCount - i; j++){'{'}</p>

    <p>result += <span className='red'>'1'</span>; </p>

    <p>&nbsp;{' }'}</p>

    <p>result += symb + <span className='red'>'\n;'</span></p>

    <p> symb += <span className='red'>' *'</span>;</p>

    <p>{"}"}</p>

    <p>{"console"}.<span className='blue'>log</span>(result)</p>
 </code>

<p>このコードは、星と数字のパターンをピラミッド形状に作成します。まず、ピラミッドの行数と使用する記号（この場合、''）を定義します。次に、ネストされたループを使用して、ピラミッドの各行を構築します。基底から始めて、1つのシンボルを追加し、トップに到達するまで1つずつ追加します。パターン内の数字は、数字 '1' で表されます。ピラミッドの各行は、適切な数の '1'、次にシンボル、そして改行文字を追加することで構築されます。各行で使用されるシンボルは、新しい行ごとに追加するために文字列連結演算子を使用して更新されます。最後に、結果のパターンが 'console.log' 関数を使用してコンソールに出力されます。</p>

<h3>フィボナッチ数列を生成するJavaScript関数</h3>

<p><b>例</b></p>

<code>
    <p><span className='blueviole'>function </span><span className='blue'>fibo</span>(<span className='blue1'>num</span>) {"{"}</p>
    
    <p><span className='blueviole'>if</span> (isNaN(+num)) {"{"}</p>

    <p><span className='blueviole'>return</span> <span className='red'>'ERROR'</span>; </p>

    <p>{" } "}</p>

    <p><span className='blueviole'>var</span> <span className='blue'>firstN</span> = <span className='blue1'>0</span>; </p>

    <p><span className='blueviole'>var</span> <span className='blue'>secondN</span> = <span className='blue1'>1</span>; </p>

    <p><span className='blueviole'>while </span>(firstN {'<'} num) {"{"}</p>

    <p>{" console"}.<span className='blue'>log</span>(firstN); </p>

    <p>{" secondN = firstN + secondN; "}</p>

    <p>{"firstN = secondN - firstN; "}</p>

    <p>&nbsp;{"}"}</p>

    <p>{"}"}</p>

    <p>fibo(<span className='blue'>55</span>);</p>
</code>

 <p><b>例</b></p>

<code>
  <p><span className='blueviole'>function</span> <span className='blue'>fibonachi</span>(<span className='blue1'>num</span>) {"{"}</p>
  <p><span className='blueviole'>var</span> <span className='blue'>num1</span> = <span className='blue1'>0</span>;</p>
  <p><span className='blueviole'>var</span> <span className='blue'>num2</span> = <span className='blue1'>1</span>;</p>
  <p> <span className='blueviole'>if</span> (<span className='blueviole'>typeof</span> num !== <span className='red'>"number"</span>) {'{'}</p>
  <p>{'console'}.<span className='blue'>error</span>(<span className='red'>"数字だけを入力してください"</span>);</p>
  <p>{"}"} <span className='blueviole'>else</span> {"{"}</p>
  <p><span className='blueviole'>for</span> (<span className='blueviole'>var</span> <span className='blue'>i</span>; num1 {'<'} num;) {"{"}</p>
  <p>{" console"}.<span className='blue'>log</span>(num1);</p>
  <p>{" i = num1 + num2;"}</p>
  <p>{"num1 = num2;"}</p>
  <p>{"num2 = i;"}</p>
  <p>&nbsp;&nbsp;{" }"}</p>
  <p>&nbsp;{" }"}</p>
  <p>{"}"}</p>
  <p>fibonachi(<span className='blue'>100</span>);</p>
</code>

<p><b>例</b></p>

<code> 
  <p><span className='blueviole'>function</span> <span className='blue'>fibonachi</span>(<span className='blue1'>n</span>) {"{"}</p>

  <p> <span className='blueviole'>if</span> (<span className='blueviole'>typeof</span> n === <span className='red'>"number"</span>) {'{'}</p>

  <p> <span className='blueviole'>var</span> <span className='blue'>a</span> = <span className='blue1'>0</span>; </p>

  <p><span className='blueviole'>var</span> <span className='blue'>b</span> = <span className='blue1'>1</span>;  </p>

  <p><span className='blueviole'>var</span> <span className='blue'>result</span>;</p>

  <p><span className='blueviole'>for</span> {'(var i = 0; i < n; i++)'} {"{"}</p>

  <p>{"console"}.<span className='blue'>log</span>(a){';'}</p>

  <p>{"result = a + b;"}</p>

  <p>{"  a = b;"}</p>

  <p>{" b = result; "}</p>

  <p>&nbsp;{"}"}</p>
  
  <p><span className='blueviole'>return</span> <span className='blue1'>result</span>;</p>

  <p>{"}"} <span className='blueviole'>else</span> {"{"}</p>

  <p>{'console'}.<span className='blue'>error</span>(<span className='red'>"数字だけを書いてください"</span>){';'}</p>

  <p>&nbsp;{"}"}</p>

  <p>{"}"}</p>
</code>

<p>これらはJavaScriptでのフィボナッチ数列ジェネレーターの3つの異なる実装です。</p>

<p>最初の実装（fibo）は、与えられた制限（num）までのフィボナッチ数を生成するためにwhileループを使用し、それらをconsole.log()を使用して出力します。まず、入力が有効な数値かどうかをチェックし、そうでない場合はエラーメッセージを返します。</p>

<p>2番目の実装（fibonachi）は、与えられた制限（num）までのフィボナッチ数を生成するためにforループを使用し、それらをconsole.log()を使用して出力します。まず、入力が有効な数値かどうかをチェックし、そうでない場合はエラーメッセージをコンソールに出力します。</p>    

<p>3番目の実装（fibonachi）も、与えられた制限（n）までのフィボナッチ数を生成するためにforループを使用し、それらをconsole.log()を使用して出力します。まず、入力が有効な数値かどうかをチェックし、そうでない場合はエラーメッセージをコンソールに出力します。この実装は、次のフィボナッチ数を生成するために3つの変数：a、b、およびresultを使用します。 a = 0、b = 1で開始し、各繰り返しでaとbの合計を計算し、その結果をresultに格納し、aをbに設定し、bをresultに設定します。</p>   
    
   
<h3>チェス盤 JavaScript</h3>

<code>
  <p><span className='blueviole'>function</span> <span className='blue'>chess</span>(<span className='blue1'>rows, symbolOne, symbolTwo, currentRow</span>) {"{"}</p>

  <p><span className='blueviole'>var</span> <span className='blue'>symbol</span> = <span className='red'>' '</span>;</p>

  <p><span className='blueviole'>if</span> (<span className='blueviole'>typeof</span> rows != <span className='red'>"number"</span></p>

  <p>|| <span className='blueviole'>typeof</span> symbolOne != <span className='red'>"string"</span></p>

  <p>|| <span className='blueviole'>typeof</span> symbolTwo != <span className='red'>"string"</span>) {'{'}</p>

  <p>{' console'}.<span className='blue'>error</span>(<span className='red'>"無効なパラメーター"</span>);</p>

  <p> <span className='blueviole'>return</span>; </p>

  <p>{"}"}</p>

  <p>rows = rows || <span className='blue1'>8</span>;</p>

  <p> symbolOne = symbolOne ||<span className='red'> " ⬛"</span>;</p>
  
  <p>symbolTwo = symbolTwo || <span className='red'>" ⬜"</span>;</p>

  <p>currentRow = currentRow || <span className='blue1'>1</span>;</p>

  <p><span className='blueviole'>if</span> (currentRow {'>'} rows) <span className='blueviole'>return</span> <span className='red'>''</span>;</p>

  <p><span className='blueviole'>for</span> (<span className='blueviole'>var</span> <span className='blue'>i</span> = <span className='blue1'>0</span>; i {'<'} rows / <span className='blue1'>2</span>; i++) {"{"}</p>

  <p>{"symbol += symbolOne + symbolTwo;"}</p>

  <p>{" }"}</p>

  <p>symbol += <span className='red'>"\n"</span>; </p>

  <p>symbol += chess(rows, symbolTwo, symbolOne, currentRow + <span className='blue1'>1</span>);</p>

  <p><span className='blueviole'>return</span> symbol;</p>
  
  <p>{'}'}</p>

  <p>{'console'}.<span className='blue'>log</span>(chess(<span className='blue1'>8</span>, <span className='red'>"⬛"</span>, <span className='red'>"⬜"</span>))</p>
</code>  

<p>このコードは、「rows」、「symbolOne」、「symbolTwo」、および「currentRow」という4つのパラメーターを取る再帰関数「chess」を定義しています。これは、ボード上の各マスに「symbolOne」と「symbolTwo」という2つのシンボルを交互に配置して、チェス盤のパターンの文字列表現を作成することを目指しています。</p>
   
<p>関数はまず、入力パラメーターが有効かどうか（つまり、「rows」が数値であり、「symbolOne」と「symbolTwo」が文字列であるかどうか）をチェックします。パラメーターのいずれかが無効な場合、エラーメッセージを返して関数を終了します。</p>  
    
<p>次に、パラメーターが指定されていない場合の「rows」、「symbolOne」、および「symbolTwo」のデフォルト値を設定します。「rows」のデフォルト値は8であり、「symbolOne」と「symbolTwo」のデフォルト値は、それぞれ黒い正方形と白い正方形を表す2つのUnicode文字です。</p>  

<p>次に、関数はチェス盤の終わりに達したかどうかをチェックします（つまり、「currentRow」が「rows」より大きいかどうか）。その場合、空の文字列を返して関数を終了します。</p>

<p>チェス盤の終わりに達していない場合、関数は「symbolOne」と「symbolTwo」を交互に「rows / 2」回（各行が「rows / 2」対のシンボルで構成されるため）追加することで文字列「symbol」を作成します。</p>

<p>次に、「symbol」文字列に改行文字を追加し、「symbolOne」と「symbolTwo」を交換し、「currentRow」を1増やして「chess」関数を再帰的に呼び出します。</p>  
    
<p>最後に、チェス盤のパターン全体を含む「symbol」文字列を返します。コードの最後の行は、「rows」を8に設定し、「symbolOne」と「symbolTwo」をそれぞれ黒と白の正方形を表すUnicode文字に設定して「chess」関数を呼び出し、結果のチェス盤のパターンをコンソールにログ出力します。</p>


<b><p>* 翻訳者の助けを借りて書かれたテキスト。 エラーが見つかった場合は、お知らせください *</p></b>
  
  <div className='ads-container'>  
    {/*  реклама  */}
  </div>
</div>
  )
}

export default JpJSEs5_10;