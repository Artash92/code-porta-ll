import React from 'react';

function JpHtml_3() {
  return (
    <div>
      <div className='ad-container'>  
          {/*  реклама  */}
        </div>
        
        <h1>HTMLのメタタグの理解 - 初心者向けガイド</h1>

<p>1. <b>charset:</b> charset属性はHTMLドキュメントの文字エンコーディングを指定します。特殊文字が正しく表示されるように、エンコーディングが正しく設定されていることが重要です。</p>

<p>例:</p>

<code><p>{'<'}<span className='green'>meta</span> <span className='blue'>charset</span>=<span className='blue1'>"UTF-8"</span>{'>'}</p></code>

<p>2. <b>name:</b> name属性は提供されるメタデータの種類を定義するために使用されます。キーワード、説明、または著者などが含まれます。</p>

<p>例:</p>

<code><p>{'<'}<span className='green'>meta</span> <span className='blue'>name</span>=<span className='blue1'>"description"</span> <span className='blue'>content</span>=<span className='blue1'>"これは私のウェブページの説明です。"</span>{'>'}</p></code>

<p>3. <b>content:</b> content属性は提供されるメタデータの値を指定するために使用されます。</p>

<p>例:</p>

<code><p>{'<'}<span className='green'>meta</span> <span className='blue'>name</span>=<span className='blue1'>"keywords"</span> <span className='blue'>content</span>=<span className='blue1'>"HTML、CSS、JavaScript"</span>{'>'}</p></code>

<p>4. <b>http-equiv:</b> http-equiv属性はHTMLドキュメントのHTTPヘッダーを定義するために使用されます。refreshやcontent-typeなどが含まれます。</p>

<p>例:</p>

<code><p>{'<'}<span className='green'>meta</span> <span className='blue'>http-equiv</span>=<span className='blue1'>"refresh"</span> <span className='blue'>content</span>=<span className='blue1'>"5"</span>{'>'}</p></code>

<p>5. <b>viewport:</b> viewport属性は、異なるデバイス（モバイル電話やタブレットなど）でのウェブページのレイアウトとスケーリングを制御するために使用されます。</p>

<p>例:</p>

<code><p>{'<'}<span className='green'>meta</span> <span className='blue'>name</span>=<span className='blue1'>"viewport"</span> <span className='blue'>content</span>=<span className='blue1'>"width=device-width, initial-scale=1.0"</span>{'>'}</p></code>

<h2>HTMLで色の使用方法：初心者向けガイド</h2>

<p>HTMLで色は、色名、16進数値、RGB値、およびHSL値を含むさまざまな方法で定義できます。</p>

<b>1. 色の名前：</b>

<p>HTMLでは、要素の色を指定するために使用できる一連の定義済みの色名が提供されます。一部の色名の例には、「赤」、「緑」、「青」、「黄」、「紫」、「黒」などがあります。</p>

<b>2. 16進数値：</b>

<p>16進数の色値は、色を表す6桁のコードです。最初の2桁は色の赤の量を表し、次の2桁は色の緑の量を表し、最後の2桁は色の青の量を表します。例えば、#FF0000は純粋な赤を表し、#00FF00は純粋な緑を表し、#0000FFは純粋な青を表します。</p>

<b>3. RGB値：</b>

<p>RGB色値は、色の赤、緑、青の量を表す3つの数値のセットです。各値の範囲は0から255です。例えば、rgb(255, 0, 0)は純粋な赤を表し、rgb(0, 255, 0)は純粋な緑を表し、rgb(0, 0, 255)は純粋な青を表します。</p>

<b>4. HSL値：</b>

<p>HSL色値は、色の色相、彩度、明度を表す3つの数値のセットです。色相は色の円環上の度数（0から360まで）、彩度はパーセンテージ値（0％から100％）、明度もパーセンテージ値（0％から100％）です。例えば、hsl(0, 100%, 50%)は純粋な赤を表し、hsl(120, 100%, 50%)は純粋な緑を表し、hsl(240, 100%, 50%)は純粋な青を表します。</p>

<h2>初心者向けCSS基礎：カスケーディングスタイルシートの紹介</h2>

<p>CSSはCascading Style Sheetsの略で、HTMLドキュメントにスタイルを付けるための言語です。CSSを使用すると、ウェブページの色、フォント、レイアウト、その他の要素を変更できます。それはHTML要素を選択し、それらにスタイルを適用することによって機能します。</p>

<p>CSSスタイルは、セレクタ、プロパティ、および値を使用して作成されます。セレクタは特定のHTML要素を対象とし、一度に複数の要素にスタイルを適用するために使用できます。プロパティは適用したいスタイルを定義し、フォントサイズ、色、パディングなどが含まれることがあります。値はプロパティの特定の設定を指定し、特定の色やサイズなどが含まれます。</p>

<p>CSSファイルをHTMLドキュメントにリンクするには、HTMLドキュメントの{'<head>セクションに<link>'}タグを使用できます。</p>

<p>以下は、CSSファイル「styles.css」をHTMLドキュメントにリンクする方法の例です:</p>

<code>
  <p>{'<'}!<span className='blue'>DOCTYPE</span> <span className='blue1'>html</span>{'>'}</p>

  <p>{'<'}<span className='green'>html</span>{'>'}</p> 

  <p>{'<'}<span className='green'>head</span>{'>'}</p>

  <p>&nbsp;{'<'}<span className='green'>link</span> <span className='blue'>rel</span>=<span className='blue1'>"stylesheet"</span> <span className='blue'>type</span>=<span className='blue1'>"text/css"</span> <span className='blue'>href</span>=<span className='blue1'>"styles.css"</span>{'>'}</p>

  <p>{'</'}<span className='green'>head</span>{'>'}</p>

  <p>{'<'}<span className='green'>body</span>{'>'}</p>

  <p>&nbsp;{'<!-- ここにHTMLのコンテンツを挿入 -->'}</p>

  <p>{'</'}<span className='green'>body</span>{'>'}</p>

  <p>{'</'}<span className='green'>html</span>{'>'}</p>
</code>


    
<p>CSSコードの例:</p>

<code>
  <p>{'h1 {'}</p>

  <p><span className='blue'>color</span>: <span className='blue1'>red</span>;</p>

  <p><span className='blue'>font-size</span>: <span className='blue1'>36px</span>; </p>

  <p><span className='blue'>text-align</span>: <span className='blue1'>center</span>; </p>

  <p>{'}'}</p>

  <p>{'p {'}</p>

  <p><span className='blue'>color</span>: <span className='blue1'>blue</span>; </p>

  <p> <span className='blue'>font-size</span>: <span className='blue1'>16px</span>;</p>

  <p><span className='blue'>line-height</span>: <span className='blue1'>1.5</span>;</p>

  <p>{'}'}</p>
</code>

<p>このコードでは、<b>(h1およびp)</b> の2つのセレクタと、それぞれに適用される複数のプロパティと値があります。<b>h1</b> セレクタは、ページのすべての <b>h1</b> 要素に赤の色、36pxのフォントサイズ、中央揃えを適用します。 <b>p</b> セレクタは、ページのすべての <b>p</b> 要素に青の色、16pxのフォントサイズ、1.5の行の高さを適用します。</p>

<p>CSSは、インライン、埋め込み、および外部スタイルシートを含むいくつかの方法でHTMLドキュメントに適用できます。インラインスタイルは、<b>style</b> 属性を使用してHTML要素に直接適用されます。埋め込みスタイルは、HTMLドキュメントの{'<head>'}セクションにスタイルタグを配置して適用されます。外部スタイルシートは別々のCSSファイルに保存され、<b>link</b> タグを使用してHTMLドキュメントにリンクされます。</p>

<b><p>* 翻訳者の助けを借りて書かれたテキスト。 エラーが見つかった場合は、お知らせください *</p></b>
    <div className='ads-container'>  
  {/*  реклама  */}
</div>
    </div>
  )
}

export default JpHtml_3;