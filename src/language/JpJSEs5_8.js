import React from 'react';

function JpJSEs5_8() {
  return (
    <div>
      <div className='ad-container'>  
          {/*  реклама  */}
        </div>
    
      <h4>Date - オブジェクト</h4>

<p>JavaScriptでは、Dateオブジェクトを使用して日付と時刻を操作します。これにより、さまざまな方法で日付と時刻を作成、操作、フォーマットすることができます。Dateオブジェクトは時間の一瞬を表し、デフォルトでは現在の日付と時刻で初期化されます。</p>

<p>以下は、JavaScriptでDateオブジェクトを使用するいくつかの例です：</p>

<p>1. 特定の日付と時刻でDateオブジェクトを作成する：</p>

<code>
  <p><span className='blueviole'>var</span> <span className='blue'>date</span> = <span className='blueviole'>new</span> Date(<span className='blue'>2022, 0, 1, 12, 0, 0</span>);</p>
  <p>{'console.log(date);'} <span className='green'>// 土 Jan 01 2022 12:00:00 GMT+0200 (Eastern European Standard Time)</span></p>
</code>

<p>この例では、指定した年（2022年）、月（1月の場合は0）、日（1日）、時間（12時）、分（0分）、秒（0秒）で新しいDateオブジェクトが作成されます。出力は、人が読める形式の日付と時刻を示しています。</p>

<p>2. 現在の日付と時刻でDateオブジェクトを作成する：</p>

<code>
  <p><span className='blueviole'>var</span> <span className='blue'>date</span> = <span className='blueviole'>new</span> Date(); </p>
  <p>{'console.log(date);'}<span className='green'>// 土 Mar 27 2023 13:28:17 GMT+0200 (Eastern European Standard Time)</span></p>
</code>

<p>この例では、現在の日付と時刻で新しいDateオブジェクトが作成されます。出力は、人が読める形式の日付と時刻を示しています。</p>

<p>3. 現在の年、月、日を取得する：</p>

<code>
  <p><span className='blueviole'>var</span> <span className='blue'>date</span> = <span className='blueviole'>new</span> Date();</p>
  <p><span className='blueviole'>var</span> <span className='blue'>year</span> = date.getFullYear();</p>
  <p><span className='blueviole'>var</span> <span className='blue'>month</span> = date.getMonth();</p>
  <p><span className='blueviole'>var</span> <span className='blue'>day</span> = date.getDate();</p>
  <p>{'console.log'}(year + <span className='red'>"-"</span> + month + <span className='red'>"-"</span> + day); <span className='green'></span></p>
</code>

<p>この例では、現在の日付と時刻で新しいDateオブジェクトが作成されます。次に、getFullYear()、getMonth()、およびgetDate()メソッドが使用され、Dateオブジェクトから年、月（0が1月を表します）、および日を抽出します。出力は、フォーマットされた文字列で日付を示しています。</p>

<p>4. 日付を文字列に変換する：</p>

<code>
  <p><span className='blueviole'>var</span> <span className='blue'>date</span> = <span className='blueviole'>new</span> Date();</p>
  <p><span className='blueviole'>var</span> <span className='blue'>dateString</span> = date.toDateString(); </p>
  <p>{'console.log'}(dateString); <span className='green'>// 土 May 30 2023</span></p>
</code>

<p>この例では、現在の日付と時刻で新しいDateオブジェクトが作成されます。toDateString()メソッドが使用され、日付を人が読める文字列形式に変換されます。出力は、日付の結果の文字列表現を示しています。</p>

<p>これらは、JavaScriptでDateオブジェクトを使用して日付と時刻を操作するための多くの方法の一部です。</p>

<p><b>Error - オブジェクト</b></p>

<p>JavaScriptでは、Errorオブジェクトはランタイムエラーを表すために使用されます。プログラムでエラーが発生すると、JavaScriptはErrorオブジェクトを生成して投げます。Errorオブジェクトには、エラーメッセージやエラーの名前など、エラーに関する情報が含まれています。</p>

<p>以下は、try-catchブロックを使用してReferenceErrorをキャッチする例です：</p>

<code>
  <p><span className='blueviole'>try </span>{'{'}</p>
  <p>{'console.log(variable);'}</p>
  <p>{'}'} <span className='blueviole'>catch</span>(<span className='blue'>err</span>) {'{'}</p>
  <p>{'console.log(err);'} <span className='green'>//ReferenceError: variable is not defined</span></p>
  <p>{'console.log(err.name);'} <span className='green'>//ReferenceError</span></p>
  <p>{' console.log(err.message);'} <span className='green'>//variable is not defined</span></p>
  <p>{'}'}</p>
</code>

<p>この例では、tryブロックが定義され、定義されていない変数をログに記録しようとしてReferenceErrorが発生します。catchブロックはエラーをキャッチし、エラーオブジェクトとその名前およびメッセージプロパティをログに記録します。</p>

<p>カスタムErrorオブジェクトをスローするためにtry-catchブロックを使用する別の例：</p>

<code>
  <p><span className='blueviole'>var</span> <span className='blue'>num1</span> = <span className='blue'>10</span>;</p>
  <p><span className='blueviole'>var</span> <span className='blue'>num2</span> = <span className='blue'>0</span>; </p>
  <p><span className='blueviole'>try</span> {'{'}</p>
  <p><span className='blueviole'>if</span> (num2 == <span className='blue'>0</span>) {'{'}</p>
  <p><span className='blueviole'>throw new</span> Error(<span className='red'>"Cannot divide by zero."</span>);</p>
  <p>{'}'}</p>
  <p>{'console.log(num1 / num2);'}</p>
  <p>{'}'} <span className='blueviole'>catch</span> (<span className='blue'>err</span>) {'{'}</p>
  <p>{' console.log'}(err.name, <span className='red'>" : "</span>, err.message) ; </p>
  <p>{'}'}</p>
</code>

<p>
この例では、tryブロックがnum1をnum2で除算しようとします。num2がゼロの場合、カスタムエラーメッセージで新しいErrorオブジェクトがスローされます。catchブロックはエラーをキャッチし、エラーオブジェクトとその名前およびメッセージプロパティをログに記録します。
</p>

<p>
Errorオブジェクトとtry-catchブロックを使用することは、JavaScriptプログラムでのランタイムエラーの処理の重要な部分です。これにより、開発者はエラーを優雅に処理し、ユーザーに有用なフィードバックを提供できます。
</p>

  <b><p>* 翻訳者の助けを借りて書かれたテキスト。 エラーが見つかった場合は、お知らせください *</p></b>
  
  <div className='ads-container'>  
    {/*  реклама  */}
  </div>
    </div>
  )
}

export default JpJSEs5_8;