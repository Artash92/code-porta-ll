import React from 'react';

function JpHtml_2() {
  return (
    <div>
       <div className='ad-container'>  
          {/*  реклама  */}
        </div> 

        <h1>HTMLタグとその説明：</h1>

<p>1. <b>{'<'}<span className='green'>html</span>{'>'}</b>HTMLドキュメントを定義します。</p>

<p>2. <b>{'<'}<span className='green'>head</span>{'>'}</b>文書に関するメタデータ情報を含みます。タイトルやCSSスタイルシートへのリンクなどが含まれます。</p>

<p>3. <b>{'<'}<span className='green'>title</span>{'>'}</b>文書のタイトルを定義します。ブラウザのタイトルバーまたはタブに表示されます。</p>

<p>4. <b>{'<'}<span className='green'>body</span>{'>'}</b>文書の可視コンテンツを含みます。</p>

<p>5. <b>{'<'}<span className='green'>h1</span>{'>'} - {'<'}<span className='green'>h6</span>{'>'}</b>異なる重要度レベルの見出しを定義します。{'<h1>'}が最も重要であり、{'<h6>'}が最も重要でないものとなります。</p>

<p>6. <b>{'<'}<span className='green'>p</span>{'>'}</b>テキストの段落を定義します。</p>

<p>7. <b>{'<'}<span className='green'>a</span>{'>'}</b>別のウェブページや同じページ内の特定の場所へのハイパーリンクを定義します。</p>

<p>8. <b>{'<'}<span className='green'>img</span>{'>'}</b>画像を文書に挿入します。</p>

<p>9. <b>{'<'}<span className='green'>ul</span>{'>'}</b>順序のないリストを定義します。通常は箇条書きでマークされます。</p>

<p>10. <b>{'<'}<span className='green'>ol</span>{'>'}</b>順序付きリストを定義します。通常は数字や文字でマークされます。</p>

<p>11. <b>{'<'}<span className='green'>li</span>{'>'}</b>順序付きまたは順序のないリスト内のリスト項目を定義します。</p>

<p>12. <b>{'<'}<span className='green'>div</span>{'>'}</b>HTML要素のコンテナを定義します。スタイリングや配置に使用できます。</p>

<p>13. <b>{'<'}<span className='green'>span</span>{'>'}</b>インラインHTML要素のための小さなコンテナを定義します。スタイリングや配置に使用できます。</p>

<p>14. <b>{'<'}<span className='green'>form</span>{'>'}</b>ユーザー入力用のフォームを定義します。さまざまな入力フィールドや送信ボタンを含むことができます。</p>

<p>15. <b>{'<'}<span className='green'>input</span>{'>'}</b>テキストボックスやチェックボックスなどのユーザー入力用の入力フィールドを定義します。</p>

<p>16. <b>{'<'}<span className='green'>button</span>{'>'}</b>クリック可能なボタン要素を定義します。さまざまなユーザーインタラクションに使用できます。</p>

<p>17. <b>{'<'}<span className='green'>select</span>{'>'}</b>ドロップダウンリストを定義します。ユーザーが1つ以上のオプションを選択できます。</p>

<p>18. <b>{'<'}<span className='green'>option</span>{'>'}</b>ドロップダウンリスト内のオプションを定義します。</p>

<p>19. <b>{'<'}<span className='green'>textarea</span>{'>'}</b>複数行のテキスト入力フィールドを定義します。</p>

<p>20. <b>{'<'}<span className='green'>hr</span>{'>'}</b> "水平ルール"の略です。HTMLページに水平線を挿入するために使用されます。この線は、コンテンツを視覚的に区切るために使用されます。</p>

<p>21. <b>{'<'}<span className='green'>br</span>{'>'}</b> "改行"の略です。HTMLコンテンツに改行または新しい行を挿入するために使用されます。{'<p>'}タグが新しい段落を作成するのに対し、{'<br>'}タグは単に新しい行を作成します。</p>

<p>22. <b>{'<'}<span className='green'>small</span>{'>'}</b>より小さなテキストを定義します（著作権などの補足コメントなど）。</p> 

<p><a href="https://www.w3schools.com/tags/" target='_blank' > <b>さらにタグはこちらから見つけることができます 👉🏼 W3Schools</b></a></p>

<h2>HTMLテーブルタグと属性</h2>

<p>1. <b>{'<'}<span className='green'>table</span>{'>'}</b>HTMLテーブルの開始と終了を定義します。すべてのテーブル関連のタグは、{'<table>'}要素内に含まれます。</p>

<p>2. <b>{'<'}<span className='green'>caption</span>{'>'}</b>テーブルのタイトルまたはキャプションを提供するために使用されます。{'<table>'}タグの直後に配置する必要があります。</p>

<p>3. <b>{'<'}<span className='green'>frame</span>{'>'}</b>テーブルの境界線の表示方法を指定します。void、above、belowの3つの可能な値があります。</p>

<p>4. <b>{'<'}<span className='green'>rules</span>{'>'}</b>テーブルの境界線の可視性を指定します。境界線を非表示にするには「none」、行グループと列グループ間に境界線を表示するには「groups」、行間に境界線を表示するには「rows」に設定できます。</p>

<p>5. <b>{'<'}<span className='green'>border</span>{'>'}</b>テーブルの境界線の幅をピクセル単位で指定します。</p>

<p>6. <b>{'<'}<span className='green'>cellspacing</span>{'>'}</b>テーブル内の隣接するセル間のスペースの量を指定します。ピクセル単位で指定されます。</p>

<p>7. <b>{'<'}<span className='green'>cellpadding</span>{'>'}</b>セルの内容とセルの境界線の間のスペースの量を指定します。これもピクセル単位で指定されます。</p>

<p>8. <b>{'<'}<span className='green'>tr</span>{'>'}</b>テーブルの行を定義します。</p>

<p>9. <b>{'<'}<span className='green'>th</span>{'>'}</b>テーブルのヘッダーセルを定義します。通常、テーブルの各列の見出しを提供するために使用されます。</p>

<p>10. <b>{'<'}<span className='green'>td</span>{'>'}</b>テーブルデータセルを定義します。これはテーブルの実際のコンテンツが配置される場所です。</p>

<h2>リンクまたはハイパーテキスト参照</h2>

<p>HTMLのリンクまたはハイパーテキスト参照は、ウェブページ上でクリック可能な要素を作成し、ユーザーが他のページ、同じページのセクション、または他のオンラインリソースに移動できるようにします。リンクの基本的な構造は、アンカータグ {'(<a>)'} とリンクの先を指定するhref属性で構成されます。</p> 

<p>以下はHTMLで基本的なリンクの例です</p>

<code><p>{'<'}<span className='green'>a</span> <span className='blue'>href</span>=<span className='blue1'>"https://www.example.com"</span>{'>'}ここをクリックしてExample.comを訪問する{'</'}<span className='green'>a</span>{'>'}</p></code>

<p>この例では、テキスト "ここをクリックしてExample.comを訪問する" がリンクのクリック可能な部分であり、href属性はリンクの先のURLを指定します。ユーザーがリンクをクリックすると、指定されたURLのウェブサイトに移動します。</p>

<p>リンクはまた、単一のウェブページ内のアンカーポイントを作成するために使用することもできます。これにより、ユーザーはリンクをクリックすることでページの特定のセクションに素早く移動できます。アンカーポイントを作成するには、リンク先の要素に <b>id</b> 属性を追加し、その後、<b>#</b>シンボルに続いて <b>id</b> 値を指定してリンクを作成します。</p>

<code>
  <p>{'<'}<span className='green'>h2</span> <span className='blue'>id</span>=<span className='blue1'>"section1"</span>{'>'}セクション1{'</'}<span className='green'>h2 </span>{'>'}</p>
  <p>{'<'}<span className='green'>p</span>{'>'}これはページの最初のセクションです。{'</'}<span className='green'>p</span>{'>'}</p>
  <p>{'<'}<span className='green'>h2</span> <span className='blue'>id</span>=<span className='blue1'>"section2"</span>{'>'}セクション2{'</'}<span className='green'>h2 </span>{'>'}</p>
  <p>{'<'}<span className='green'>p</span>{'>'}これはページの2番目のセクションです。{'</'}<span className='green'>p</span>{'>'}</p>
  <p>{'<'}<span className='green'>a</span> <span className='blue'>href</span>=<span className='blue1'>"#section1"</span>{'>'}セクション1へ移動{'</'}<span className='green'>a</span>{'>'}</p>
  <p>{'<'}<span className='green'>a</span> <span className='blue'>href</span>=<span className='blue1'>"#section2"</span>{'>'}セクション2へ移動{'</'}<span className='green'>a</span>{'>'}</p>
</code>

<p>この例では、2つの <b>h2</b> タグに <b>id</b> 属性を追加して、各セクションのアンカーポイントを作成しました。ページの一番下にある2つのリンクは、これらのアンカーポイントにリンクするために <b>href</b> 属性を使用し、ユーザーがページの特定のセクションに素早く移動できるようにします。</p>

<p>HTMLでリンクを効果的に使用することで、ウェブページ上でよりインタラクティブで魅力的なユーザーエクスペリエンスを作成することができます。</p>

<p>電話番号やSkype用のリンクを作成するには、href属性を<b>"tel:"</b>または<b>"skype:"</b>に設定し、その後に電話番号やSkypeユーザー名を続けます。</p>

<p>たとえば、電話番号のリンクを作成するには、次のコードを使用できます：</p>

<code><p>{'<'}<span className='green'>a</span> <span className='blue'>href</span>=<span className='blue1'>"tel:+1234567890"</span>{'>'}+1 (234) 567-890 にお電話ください{'</'}<span className='green'>a</span>{'>'}</p></code>

<p>この例では、電話番号に対してプロトコルとして <b>"tel:"</b> が使用され、"+1234567890" が電話番号です。ユーザーがモバイルデバイスでこのリンクをクリックすると、事前に指定された番号で電話アプリが自動的に起動します。</p>

<p>Skype用のリンクを作成するには、次のコードを使用できます</p>

<code><p>{'<'}<span className='green'>a</span> <span className='blue'>href</span>=<span className='blue1'>"skype:username?call"</span>{'>'}Skypeでお電話ください{'</'}<span className='green'>a</span>{'>'}</p></code>

<p>この例では、Skypeリンク用のプロトコルとして <b>"skype:"</b> が使用され、"username" が電話をかけたい個人や会社のユーザー名です。さらに、通話を開始するために "?call" が追加されます。ユーザーがこのリンクをクリックすると、指定されたユーザー名に対してSkypeアプリが起動し、通話が開始されます。</p>

<p><b>HTMLの {'<img>'} タグはウェブページ上に画像を表示するために使用されます。{'<img>'} タグの使用例を次に示します：</b></p>

<code><p>{'<'}<span className='green'>img</span> <span className='blue'>src</span>=<span className='blue1'>"image.jpg"</span> <span className='blue'>alt</span>=<span className='blue1'>"画像の説明"</span>{'>'}</p></code>

<p>このタグの異なる部分を見てみましょう：</p>

<p>"src" 属性は表示したい画像ファイルのURLを指定します。</p>

<p>"alt" 属性は画像の説明を提供し、スクリーンリーダーやその他の支援技術で使用されます。</p>

<p>次に、特定の幅と高さで画像を表示するための {'<img>'} タグの使用例を示します：</p>

<code><p>{'<'}<span className='green'>img</span> <span className='blue'>src</span>=<span className='blue1'>"image.jpg"</span> <span className='blue'>alt</span>=<span className='blue1'>"画像の説明"</span> <span className='blue'>width</span>=<span className='blue1'>"500"</span> <span className='blue'>height</span>=<span className='blue1'>"300"</span> {'>'}</p></code>

<p>この例では、<b>"width"</b> および <b>"height" </b> 属性が画像の寸法をピクセル単位で指定します。</p>

<p>さらに、 {'<img>'} タグに <b>"class"</b> や <b>"id"</b> などの他の属性を追加して画像表示をカスタマイズすることもできます。</p>
   
<b><p>* 翻訳者の助けを借りて書かれたテキスト。 エラーが見つかった場合は、お知らせください *</p></b>
    <div className='ads-container'>  
  {/*  реклама  */}
</div>
 </div>
  )
}

export default JpHtml_2;