import React from 'react';

function JpJSEs5_2() {
  return (
    <div>
      <div className='ad-container'>  
          {/*  реклама  */}
        </div>

        <h3>JavaScriptのループと条件分岐</h3>

<p><b>1. whileループ</b></p>

<p>whileループは、指定された条件がtrueの間、コードブロックを繰り返し実行するために使用されます。</p>

<p>以下は例です：</p>

<code>
 <p><span className='blueviole'>var</span> <span className='blue'>i</span> = <span className='blue'>0</span>; <span className='darkgreen'>// カウンター変数を初期化</span></p> 
 <p><span className='blueviole'>while</span> (i {'<'} <span className='blue'>5</span>) {'{'}<span className='darkgreen'> // 条件を設定</span></p>
 <p>{'console.log'}(<span className='blue'>i</span>); <span className='darkgreen'>// コードブロックを実行</span></p>
 <p>i++; <span className='darkgreen'>// カウンター変数を更新</span></p>
 <p>{'}'}</p>
</code>

<p>この例では、iの値が5未満の間、ループが実行されます。ループが実行されるたびにコードブロックが実行され、iの値が5に達するまで1ずつ増加します。</p>

<p>このコードの出力は次のとおりです：</p>

 <code>
    <p className='blue'>0</p>
    <p className='blue'>1</p>
    <p className='blue'>2</p>
    <p className='blue'>3</p>
    <p className='blue'>4</p>
 </code>

<p><b>2. forループ</b></p>

<p>forループは、指定された回数だけコードブロックを実行するために使用されます。以下は例です：</p>

 <code>
  <p><span className='blueviole'>for</span> (<span className='blueviole'>var</span> i = <span className='blue'>0</span>; i {'<'} <span className='blue'>5</span>; i++) {'{'} </p>
  <p>{'console.log(i);'}</p>
  <p>{'}'}</p>
 </code>

<p>この例では、条件がiが5未満であることを指定しているため、ループが5回実行されます。ループが実行されるたびにコードブロックが実行され、iの値が1ずつ増加します。</p>

<p>このコードの出力は前の例と同じです：</p>

 <code>
    <p className='blue'>0</p>
    <p className='blue'>1</p>
    <p className='blue'>2</p>
    <p className='blue'>3</p>
    <p className='blue'>4</p>
 </code>

<p><b>3. do-whileループ</b></p>

<p>do-whileループはwhileループに似ていますが、条件が最初からfalseであっても、コードブロックを少なくとも1回は実行します。</p>

<p>以下は例です：</p>

 <code>
    <p><span className='blueviole'>var</span> i = <span className='blue'>0</span>; <span className='darkgreen'>// カウンター変数を初期化</span></p>
    <p><span className='blueviole'>do</span> {'{'}</p>
    <p>{'console.log(i);'} <span className='darkgreen'>// コードブロックを実行</span></p>
    <p>i++; <span className='darkgreen'>// カウンター変数を更新</span></p>
    <p>{'}'}</p>
    <p><span className='blueviole'>while</span> (i {'<'} <span className='blue'>5</span>); <span className='darkgreen'>// 条件を設定</span></p>
 </code>

<p>この例では、条件がコードブロックが実行された後に確認されるため、ループは少なくとも1回は実行されます。ループが実行されるたびにコードブロックが実行され、iの値が5に達するまで1ずつ増加します。</p>

<p>このコードの出力は前の例と同じです：</p>

 <code>
    <p className='blue'>0</p>
    <p className='blue'>1</p>
    <p className='blue'>2</p>
    <p className='blue'>3</p>
    <p className='blue'>4</p>
 </code>

<p><b>4. ++ および --演算子</b></p>

<p>++および--演算子は、変数を1ずつ増減させるために使用されます。以下はいくつかの例です：</p>

  <code>
    <p><span className='blueviole'>var</span> <span className='blue'>i</span> = <span className='blue'>0</span>; <span className='darkgreen'>// 変数を初期化</span></p>
    <p>i++; <span className='darkgreen'>// 変数をインクリメント</span></p>
    <p>{'console.log(i);'} <span className='darkgreen'>// 出力：1</span></p>
    <p><span className='blueviole'>var</span> <span className='blue'>j</span> = <span className='blue'>2</span>; <span className='darkgreen'>// 別の変数を初期化</span></p>
    <p>j--; <span className='darkgreen'>// 変数をデクリメント</span> </p>
    <p>{'console.log(j);'} <span className='darkgreen'>// 出力：1</span></p>
 </code>

<p>これらの演算子は、しばしば現在の反復を追跡するためにループで使用されます。</p>

<p><b>5. if、else、およびelse if文</b></p>

<p>if文は、指定された条件がtrueの場合にコードブロックを実行するために使用されます。else文は、条件がfalseの場合にコードブロックを実行します。else if文は複数の条件をテストするために使用されます。以下は例です：</p>

 <code>
    <p><span className='blueviole'>var</span> <span className='blue'>x</span> = <span className='blue'>15</span>; <span className='darkgreen'>// 変数を初期化</span></p>
    <p><span className='blueviole'>if</span> (x {'>'} <span className='blue'>10</span>) {'{'} <span className='darkgreen'>// 条件をチェック</span></p>
    <p>{'console.log'}(<span className='red'>"x is greater than 10"</span>)</p>
    <p>{'}'}</p>
 </code>

<h3>条件（三項）演算子</h3>

<p>条件（三項）演算子は、JavaScriptでif-else文を短縮して記述するための方法です。3つのオペランドを取ります：条件、条件がtrueの場合に返す値、および条件がfalseの場合に返す値。条件演算子の構文は次のとおりです：（条件）? true-value : false-value 以下はJavaScriptで条件演算子を使用する例です：</p>

<p><b>Example 1:</b></p>

 <code>
    <p><span className='blueviole'>var</span> <span className='blue'>a</span> = <span className='blue'>5</span>;</p>
    <p><span className='blueviole'>var</span><span className='blue'> result</span> = (a == <span className='blue'>5</span>) ? <span className='red'>"true"</span> : <span className='red'>"false"</span>;</p>
    <p>document.getElementById(<span className='red'>"example1"</span>).innerHTML = result;</p>
 </code>

<p>出力：true 説明：この例では、変数aの値を5に設定し、条件演算子を使用してaが5と等しいかどうかをチェックします。これがtrueであるため、「true」の値が返され、変数resultに割り当てられ、その後HTMLのdiv要素に表示されます。</p>

<p><b>Example 2:</b></p>

 <code>
    <p> <span className='blueviole'>var</span> <span className='blue'>a</span> = <span className='blue'>10</span>;</p>
    <p><span className='blueviole'>var</span> <span className='blue'>result</span> = (a == <span className='blue'>5</span>) ? <span className='red'>"true"</span> : <span className='red'>"false"</span>;</p>
    <p>document.getElementById(<span className='red'>"example2"</span>).innerHTML = result;</p>
 </code>

<p>出力：false 説明：この例では、変数aの値を10に設定し、条件演算子を使用してaが5と等しいかどうかをチェックします。これがfalseであるため、「false」の値が返され、変数resultに割り当てられ、その後HTMLのdiv要素に表示されます。</p>

<p><b>Example 3:</b></p>

 <code>
    <p><span className='blueviole'>var</span> <span className='blue'>a</span> = <span className='blue'>7</span>;</p>
    <p><span className='blueviole'>var</span> <span className='blue'>result</span> = ( a {'>'} <span className='blue'>10</span>) ? <span className='red'>"greater than10"</span>: (a {'<'} <span className='blue'>5</span>) ? <span className='red'>"less than 5"</span> : <span className='red'>"between 5 and 10"</span> ;</p>
    <p>document.getElementById(<span className='red'>"example3"</span>).innerHTML = result;</p>
 </code>

<p>出力：between 5 and 10 説明：この例では、変数aの値を7に設定し、条件演算子を使用してaが10より大きいかどうかをチェックします。これがfalseであるため、次にaが5未満かどうかを確認します。これもfalseであるため、最後に残されたオプションである「between 5 and 10」の値が返され、その結果がHTMLのdiv要素に表示されます。</p>
   

<b><p>* 翻訳者の助けを借りて書かれたテキスト。 エラーが見つかった場合は、お知らせください *</p></b>
    <div className='ads-container'>  
  {/*  реклама  */}
</div>
 </div>
  )
}

export default JpJSEs5_2;