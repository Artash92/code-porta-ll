import React from 'react';

function JpHtml_1() {
  return (
    <div>
       <div className='ad-container'>  
          {/*  реклама  */}
        </div> 
        
        <h1>HTML</h1>

<p>HTMLは、ウェブ上のコンテンツを作成し構造化するためのマークアップ言語です。それはすべてのウェブサイトのバックボーンであり、ウェブページの構築ブロックとして機能します。HTMLは宣言型の言語であり、ウェブページのコンテンツと構造を記述するために使用されますが、必ずしもその外観を指定するものではありません。</p>

<p>HTMLは、ティム・バーナーズ＝リーが1990年代初頭にCERN（欧州原子核研究機構）で働いていたときに作成されました。バーナーズ＝リーは、研究者間で情報を共有し整理する方法を探しており、HTMLがその解決策でした。HTMLは、技術的なバックグラウンドに関係なく、誰でも簡単に理解して使用できるシンプルな言語で設計されました。</p>

<p>HTMLはタグによって表される一連の要素で構成されています。タグは角かっこで囲まれ、ウェブページの構造とコンテンツを定義するために使用されます。例えば、{'<head>'}タグはウェブページのヘッドセクションを定義するために使用され、通常はページのタイトルや外部スタイルシートやスクリプトへのリンクなどの情報が含まれます。{'<body>'}タグはウェブページのボディセクションを定義するために使用され、ページの主なコンテンツが含まれます。</p>

<p>HTMLは絶えず進化する言語であり、定期的に新しいバージョンがリリースされています。現在のHTMLのバージョンはHTML5であり、2014年にリリースされました。HTML5には、ビデオやオーディオのタグ、グラフィックを描画するためのキャンバス要素、アクセシビリティとSEOの向上のためのセマンティックタグなど、多くの新機能や機能が導入されました。</p>

<p>要約すると、HTMLはウェブ上のコンテンツを作成し構造化するためのマークアップ言語です。それは1990年代初頭にティム・バーナーズ＝リーによって作成され、すべてのウェブサイトのバックボーンです。HTMLはタグによって表される一連の要素で構成され、定期的に新しいバージョンがリリースされる絶えず進化する言語です。</p>

<p>1. タイトルと段落を持つシンプルなウェブページ:</p>

<code>
   <p>{'<'}!<span className='blue'>DOCTYPE</span> <span className='blue1'>html</span>{'>'}</p>
   <p>{'<'}<span className='green'>html</span>{'>'}</p> 
   <p>{'<'}<span className='green'>head</span>{'>'}</p>
   <p>&nbsp;{'<'}<span className='green'>title</span>{'>'}マイウェブページ{'</'}<span className='green'>title</span>{'>'}</p>
   <p>{'</'}<span className='green'>head</span>{'>'}</p>
   <p>{'<'}<span className='green'>body</span>{'>'}</p>
   <p>&nbsp;{'<'}<span className='green'>h1</span>{'>'}マイウェブページへようこそ{'</'}<span className='green'>h1</span>{'>'}</p>
   <p>&nbsp;{'<'}<span className='green'>p</span>{'>'}これは私の最初のウェブページです。{'</'}<span className='green'>p</span>{'>'}</p>
   <p>{'</'}<span className='green'>body</span>{'>'}</p>
   <p>{'</'}<span className='green'>html</span>{'>'}</p>
</code>

<p>これはタイトルと段落を持つシンプルなウェブページの例です。タイトルは「title」タグで表され、段落は「p」タグで表されます。ページのタイトルは、ブラウザのタイトルバーと検索エンジンの検索結果に表示されます。</p>

<p>2. 代替テキストを持つ画像と別のページへのリンク:</p>

<code>
    <p>{'<'}!<span className='blue'>DOCTYPE</span> <span className='blue1'>html</span>{'>'}</p>
    
    <p>{'<'}<span className='green'>html</span>{'>'}</p> 
   
    <p>{'<'}<span className='green'>head</span>{'>'}</p>  
   
    <p>&nbsp;{'<'}<span className='green'>title</span>{'>'}マイウェブページ{'</'}<span className='green'>title</span>{'>'}</p> 
   
    <p>{'</'}<span className='green'>head</span>{'>'}</p> 
   
    <p>{'<'}<span className='green'>body</span>{'>'}</p> 
   
    <p>&nbsp;{'<'}<span className='green'>h1</span>{'>'}マイウェブページへようこそ{'</'}<span className='green'>h1</span>{'>'}</p>
   
    <p>&nbsp;{'<'}<span className='green'>p</span>{'>'}これは猫の写真です:{'</'}<span className='green'>p</span>{'>'}</p>
   
    <p>&nbsp;{'<'}<span className='green'>img</span> <span className='blue'>src</span>=<span className='blue1'>"cat.jpg"</span> <span className='blue'>alt</span>=<span className='blue1'>"かわいい猫"</span>{'>'}</p> 

    <p>&nbsp;{'<'}<span className='green'>p</span>{'>'}ここを{'<'}<span className='green'>a</span> <span className='blue'>href</span>=<span className='blue1'>"http://www.google.com"</span>{'>'}クリックして{'</'}<span className='green'>a</span>{'>'} Google に移動する{'</'}<span className='green'>p</span>{'>'}</p> 

    <p>{'</'}<span className='green'>body</span>{'>'}</p> 

    <p>{'</'}<span className='green'>html</span>{'>'}</p>
</code>

<p>この例では、代替テキストを持つ猫の画像が表示され、画像が読み込まれない場合に代わりのテキストが表示されます。Googleへのリンクは、目的のページのURLを指す「href」属性を持つ「a」タグで表されます。</p>

<p>3. 名前を入力してデータをサーバーに送信するためのフォーム:</p>

<code>
    <p>{'<'}!<span className='blue'>DOCTYPE</span> <span className='blue1'>html</span>{'>'}</p>
    
    <p>{'<'}<span className='green'>html</span>{'>'}</p>    

    <p>{'<'}<span className='green'>head</span>{'>'}</p>  

    <p>&nbsp;{'<'}<span className='green'>title</span>{'>'}マイウェブページ{'</'}<span className='green'>title</span>{'>'}</p>   

    <p>{'</'}<span className='green'>head</span>{'>'}</p>  

    <p>{'<'}<span className='green'>body</span>{'>'}</p> 

    <p>&nbsp;{'<'}<span className='green'>h1</span>{'>'}マイウェブページへようこそ{'</'}<span className='green'>h1</span>{'>'}</p> 

    <p>{'<'}<span className='green'>form</span>{'>'}</p> 

    <p>&nbsp;{'<'}<span className='green'>label</span> <span className='blue'>for</span>=<span className='blue1'>"name"</span>{'>'}名前を入力してください:{'</'}<span className='green'>label</span>{'>'}</p>  

    <p>&nbsp;{'<'}<span className='green'>input</span> <span className='blue'>type</span>=<span className='blue1'>"text"</span> <span className='blue'>id</span>=<span className='blue1'>"name"</span> <span className='blue'>name</span>=<span className='blue1'>"name"</span>{'><'}<span className='green'>br</span>{'><'}<span className='green'>br</span>{'>'}</p>  

    <p>&nbsp;{'<'}<span className='green'>input</span> <span className='blue'>type</span>=<span className='blue1'>"submit"</span> <span className='blue'>value</span>=<span className='blue1'>"送信"</span>{'>'}</p>  

    <p>{'</'}<span className='green'>form</span>{'>'}</p>  

    <p>{'</'}<span className='green'>body</span>{'>'}</p>   

    <p>{'</'}<span className='green'>html</span>{'>'}</p>   
</code>

<p>この例は、ユーザーが名前を入力するためのテキスト入力フィールドを持つフォームを示しています。フォームが送信されると、データはサーバーに送信されます。「label」タグは入力フィールドのテキストラベルを提供し、「input」タグは入力フィールドと送信ボタンを作成するために使用されます。</p>

<p>4. 順序付きリスト:</p>

<code>
    <p>{'<'}!<span className='blue'>DOCTYPE</span> <span className='blue1'>html</span>{'>'}</p>
    
    <p>{'<'}<span className='green'>html</span>{'>'}</p> 

    <p>{'<'}<span className='green'>head</span>{'>'}</p>

    <p>&nbsp;{'<'}<span className='green'>title</span>{'>'}マイウェブページ{'</'}<span className='green'>title</span>{'>'}</p>

    <p>{'</'}<span className='green'>head</span>{'>'}</p> 

    <p>{'<'}<span className='green'>body</span>{'>'}</p> 

    <p>&nbsp;{'<'}<span className='green'>h1</span>{'>'}マイウェブページへようこそ{'</'}<span className='green'>h1</span>{'>'}</p> 

    <p>&nbsp;{'<'}<span className='green'>h2</span>{'>'}私の好きな食べ物:{'</'}<span className='green'>h2</span>{'>'}</p> 

    <p>{'<'}<span className='green'>ol</span>{'>'}</p>

    <p>&nbsp;{'<'}<span className='green'>li</span>{'>'}ピザ{'</'}<span className='green'>li</span>{'>'}</p>

    <p>&nbsp;{'<'}<span className='green'>li</span>{'>'}ハンバーガー{'</'}<span className='green'>li</span>{'>'}</p>

    <p>&nbsp;{'<'}<span className='green'>li</span>{'>'}アイスクリーム{'</'}<span className='green'>li</span>{'>'}</p>

    <p>{'</'}<span className='green'>ol</span>{'>'}</p> 

    <p>{'</'}<span className='green'>body</span>{'>'}</p> 

    <p>{'</'}<span className='green'>html</span>{'>'}</p>
    </code>

<p>この例は、「ol」タグで表される順序付きリストで、各アイテムは「li」タグで表されます。リストの番号はブラウザによって自動的に生成されます。</p>

<p>5. 順序なしリスト:</p>

<code>
  <p>{'<'}!<span className='blue'>DOCTYPE</span> <span className='blue1'>html</span>{'>'}</p>
  <p>{'<'}<span className='green'>html</span>{'>'}</p>
  <p>{'<'}<span className='green'>head</span>{'>'}</p>
  <p>&nbsp;{'<'}<span className='green'>title</span>{'>'}マイウェブページ{'</'}<span className='green'>title</span>{'>'}</p>
  <p>{'</'}<span className='green'>head</span>{'>'}</p>
  <p>{'<'}<span className='green'>body</span>{'>'}</p>
  <p>&nbsp;{'<'}<span className='green'>h1</span>{'>'}マイウェブページへようこそ{'</'}<span className='green'>h1</span>{'>'}</p> 
  <p>&nbsp;{'<'}<span className='green'>h2</span>{'>'}私の好きな映画:{'</'}<span className='green'>h2</span>{'>'}</p> 
  <p>{'<'}<span className='green'>ul</span>{'>'}</p>
  <p>&nbsp;{'<'}<span className='green'>li</span>{'>'}ショーシャンクの空に{'</'}<span className='green'>li</span>{'>'}</p>
  <p>&nbsp;{'<'}<span className='green'>li</span>{'>'}ゴッドファーザー{'</'}<span className='green'>li</span>{'>'}</p>
  <p>&nbsp;{'<'}<span className='green'>li</span>{'>'}ダークナイト{'</'}<span className='green'>li</span>{'>'}</p>
  <p>{'</'}<span className='green'>ul</span>{'>'}</p> 
  <p>{'</'}<span className='green'>body</span>{'>'}</p>
  <p>{'</'}<span className='green'>html</span>{'>'}</p> 
</code>

<p>この例は、「ul」タグで表される順序なしリストで、各アイテムは「li」タグで表されます。リストのアイテムは、デフォルトでは箇条書きで表示されます。</p> 

<p>HTMLの理解をさらに深めるために、学生は<b>MDN Web Docs</b>や<b>W3Schools</b>などの追加リソースに案内されることがあります。</p> 

<p>ウェブサイトにMDN Web Docsへのリンクを追加するには、次のHTMLコードを使用してください:</p> 

<p><a href="https://developer.mozilla.org/en-US/docs/Web/HTML "target='_blank'> <b> &#x1F44D; MDN Web Docs</b></a></p> 

<p>ウェブサイトにW3Schoolsへのリンクを追加するには、次のHTMLコードを使用してください:</p>  

<p><a href="https://www.w3schools.com/html/" target='_blank' > <b>&#x1F44D; W3Schools</b></a></p>

<p>MDN Web DocsとW3Schoolsの両方は、HTMLや関連技術に関する包括的で詳細なドキュメント、インタラクティブなチュートリアル、および例を提供しています。学生はこれらのリソースを使用して、HTMLの知識を深め、ウェブ開発のスキルを向上させることができます。</p>
    
    
<b><p>* 翻訳者の助けを借りて書かれたテキスト。 エラーが見つかった場合は、お知らせください *</p></b>
    <div className='ads-container'>  
  {/*  реклама  */}
</div>
    </div>
  )
}

export default JpHtml_1;