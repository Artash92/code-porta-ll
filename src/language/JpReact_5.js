import React from 'react';

function JpReact_5() {
  return (
    <div>
      <div className='ad-container'>  
          {/*  реклама  */}
        </div>

      <h1>React Router DOM</h1>

<p>React Router Domは、Reactアプリケーションでクライアントサイドのルーティングを管理するために使用される人気のあるライブラリです。異なるコンポーネント用の異なるルートを作成し、現在のURLに基づいてそれらをレンダリングすることができます。これにより、ユーザーはページ全体をリロードせずに異なるページとコンポーネントをナビゲートできるため、直感的でシームレスなユーザーエクスペリエンスが提供されます。</p>

<p>React Router DomはReact Routerライブラリを基にしており、ブラウザでの使用に特化して設計されています。ブラウザのHistory APIを使用してURLを操作し、ユーザーインターフェイスを現在のURLと同期させます。また、ルートを定義するための宣言的なアプローチを提供することで、複数のルートとネストされたコンポーネントを持つ複雑なアプリケーションを管理しやすくしています。</p>

<p>React Router Domの主な機能には、次のものがあります:</p>

<p> • 宣言的なルーティング：ルーティングロジックを理解しやすく管理しやすくするために、ルートをJSXコンポーネントとして定義できます。</p>

<p> • ネストされたルート：他のルート内にルートをネストできるため、より複雑なルーティングシナリオが可能です</p>

<p> • ルートパラメータ：ルート内で動的パラメータを定義できるため、現在のURLに基づいてコンポーネント間でデータを渡すことができます。</p>

<p> • 履歴管理：React Router Domは、ブラウザの履歴を管理するためのツールを提供し、プログラムでページ間をナビゲートしたり、戻る/進むのナビゲーションを処理したりすることができます。</p>

<p>ReactアプリケーションでReact Router Domを使用する簡単な例を示します: <b>(古いバージョン)v5</b></p>

<code>
  <p> <span className='red'>import</span> React <span className='red'>from</span> <span className='blue1'>'react'</span>;</p>

  <p> <span className='red'>import</span> {'{'} BrowserRouter <span className='red'>as</span> Router, Route, Link {'}'} <span className='red'>from</span> <span className='blue1'>'react-router-dom'</span>;  </p>

  <p>&nbsp;<span className='red'>const</span> Home = () {'=> <'}<span className='green'>h1</span>{'>'}Home{'</'}<span className='green'>h1</span>{'>; '}</p>

  <p>&nbsp;<span className='red'>const</span> About = () {'=> <'}<span className='green'>h1</span>{'>'}About{'</'}<span className='green'>h1</span>{'>;'}</p>

  <p>&nbsp;<span className='red'>const</span> App {'= () => ( '}</p>

  <p>{'<'}<span className='blueviole'>Router</span>{'>'}</p>

  <p>&nbsp;{'<'}<span className='green'>nav</span>{'>'}</p>

  <p>&nbsp;&nbsp;{'<'}<span className='green'>ul</span>{'>'}</p>

  <p>&nbsp;&nbsp;&nbsp;{'<'}<span className='green'>li</span>{'>'}</p>

  <p>&nbsp;&nbsp;&nbsp;&nbsp;{'<'}<span className='blueviole'>Link</span> <span className='blue'>to</span>=<span className='blue1'>"/"</span>{'>'}Home{'</'}<span className='blueviole'>Link</span>{'>'}</p>

  <p>&nbsp;&nbsp;&nbsp;{'</'}<span className='green'>li</span>{'>'}</p>

  <p>&nbsp;&nbsp;&nbsp;{'<'}<span className='green'>li</span>{'>'}</p>

  <p>&nbsp;&nbsp;&nbsp;&nbsp;{'<'}<span className='blueviole'>Link</span> <span className='blue'>to</span>=<span className='blue1'>"/about"</span>{'>'}About{'</'}<span className='blueviole'>Link</span>{'>'}</p>

  <p>&nbsp;&nbsp;&nbsp;{'</'}<span className='green'>li</span>{'>'}</p>

  <p>&nbsp;&nbsp;{'</'}<span className='green'>ul</span>{'>'}</p>

  <p>&nbsp;{'</'}<span className='green'>nav</span>{'>'}</p>

  <p>&nbsp;{'<'}<span className='blueviole'>Route </span><span className='blue'>exact path</span>=<span className='blue1'>"/"</span> <span className='blue'>component</span>={'{Home}  />'}</p>

  <p>&nbsp;{'<'}<span className='blueviole'>Route</span>  <span className='blue'>path</span>=<span className='blue1'>"/about"</span> <span className='blue'>component</span>={'{About}  />'}</p>

  <p>{'</'}<span className='blueviole'>Router</span>{'>'}</p>

  <p>{');'}</p>

  <p><span className='red'>export default</span> App; </p>
</code>

<p>この例では、React Router Domから必要なコンポーネントをインポートしています（具体的には、<b>BrowserRouter、Route、およびLink</b>）。次に、ホームページとアバウトページ用の2つのシンプルなコンポーネントを定義します。</p>

<p><b>App</b>コンポーネント内では、残りのアプリケーションにルーティングコンテキストを提供する<b>Router</b>コンポーネントで全体をラップします。次に、<b>Link</b>コンポーネントを使用して、2つのページ間を移動するためのシンプルなナビゲーションバーを定義します。</p>

<p>最後に、現在のURLに基づいて<b>HomeとAbout</b>コンポーネントをレンダリングする2つの<b>Route</b>コンポーネントを定義します。</p>

<p>React Router Dom 6.4は、2022年2月にリリースされたライブラリの最新バージョンです。このバージョンの新機能には、次のものがあります:</p>

<p>最新バージョン（v6）では、一部のAPIやコレクションに変更が加えられているため、React Router Domバージョン6.4を使用した新しい例を選択することができます:</p>

<p>React Router Domバージョン6.4を使用した例を以下に示します:</p>

<code>
  <p><span className='red'>import</span> {'{'} BrowserRouter <span className='red'>as</span> Router, Routes, Route, Link {'}'} <span className='red'>from</span> <span className='blue1'>'react-router-dom'</span>;</p>

  <p>&nbsp;<span className='red'>const</span>  Home = () {'=> <'}<span className='green'>h1</span>{'>'}Home{'</'}<span className='green'>h1</span>{'>;'}</p>

  <p>&nbsp;<span className='red'>const</span> About = () {'=> <'}<span className='green'>h1</span>{'>'}About{'</'}<span className='green'>h1</span>{'>;'}</p>

  <p>&nbsp;<span className='red'>const</span> NotFound = () {'=> <'}<span className='green'>h1</span>{'>'}404 Not Found{'</'}<span className='green'>h1</span>{'>;'}</p>

  <p>&nbsp;<span className='red'>const</span> {'App = () => ( '}</p>

  <p>{'<'}<span className='blueviole'>Router</span>{'>'}</p>

  <p>&nbsp;{'<'}<span className='green'>nav</span>{'>'}</p>

  <p>&nbsp;&nbsp;{'<'}<span className='green'>ul</span>{'>'}</p>

  <p>&nbsp;&nbsp;&nbsp;{'<'}<span className='green'>li</span>{'>'}</p>

  <p>&nbsp;&nbsp;&nbsp;&nbsp;{'<'}<span className='blueviole'>Link</span> <span className='blue'>to</span>=<span className='blue1'>"/"</span>{'>'}Home{'</'}<span className='blueviole'>Link</span>{'>'}</p>

  <p>&nbsp;&nbsp;&nbsp;{'</'}<span className='green'>li</span>{'>'}</p>

  <p>&nbsp;&nbsp;&nbsp;{'<'}<span className='green'>li</span>{'>'}</p>

  <p>&nbsp;&nbsp;&nbsp;&nbsp;{'<'}<span className='blueviole'>Link</span> <span className='blue'>to</span>=<span className='blue1'>"/about"</span>{'>'}About{'</'}<span className='blueviole'>Link</span>{'>'}</p>

  <p>&nbsp;&nbsp;&nbsp;{'</'}<span className='green'>li</span>{'>'}</p>

  <p>&nbsp;&nbsp;{'</'}<span className='green'>ul</span>{'>'}</p>

  <p>&nbsp;{'</'}<span className='green'>nav</span>{'>'}</p>

  <p>{'<'}<span className='blueviole'>Routes</span>{'>'}</p>

  <p>&nbsp;{'<'}<span className='blueviole'>Route</span> <span className='blue'>path</span>=<span className='blue1'>"/"</span> <span className='blue'>element</span>={'{<'}<span className='blueviole'>Home</span> {'/>} />'}</p>

  <p>&nbsp;{'<'}<span className='blueviole'>Route</span> <span className='blue'>path</span>=<span className='blue1'>"/about"</span> <span className='blue'>element</span>={'{<'}<span className='blueviole'>About</span> {'/>} />'}</p>

  <p>&nbsp;{'<'}<span className='blueviole'>Route</span> <span className='blue'>path</span>=<span className='blue1'>"*"</span> <span className='blue'>element</span>={'{<'}<span className='blueviole'>NotFound</span> {'/>} />'}</p>

  <p>{'</'}<span className='blueviole'>Routes</span>{'>'}</p>

  <p>{'</'}<span className='blueviole'>Router</span>{'>'}</p>

  <p>{');'}</p>

  <p><span className='red'>export default</span> App; </p>
</code>

<p>この例では、React Router Domから同じコアコンポーネント（BrowserRouter、Route、Linkなど）を使用していますが、いくつかの構文がわずかに異なります。</p>

<p>たとえば、複数のルートをグループ化するために<b>Switch</b>の代わりに<b>Routes</b>コンポーネントを使用します。各ルートは今では<b>path</b>と<b>element</b>プロップを持つ<b>Route</b>要素で表されます。 <b>path</b>プロップはルートのURLパターンを設定し、<b>element</b>プロップはルートが一致したときにレンダリングされるコンポーネントです。</p>

<p>この例では、存在しないページにアクセスした場合に表示される<b>NotFound</b>コンポーネントも追加しました。</p>

<p>全体として、React Router Dom 6はReactアプリケーションでルーティングを処理するより柔軟で便利な方法を提供します。</p>    
    
<p>1. <b>npm</b>を使用している場合は、ターミナルを開いて次のコマンドを実行します：</p>

<b>npm install react-router-dom</b>

<p>2. <b>yarn</b>を使用している場合は、ターミナルを開いて次のコマンドを実行します：</p>

<b>yarn add react-router-dom</b> 

<p>インストール後、必要なコンポーネントを<b>react-router-dom</b>パッケージからインポートできます。 上記の例で示したように</p>

<p> React Routerの詳細については、公式ウェブサイトをご覧ください：<a href="https://reactrouter.com/" target='_blank' > 👉🏼  https://reactrouter.com/.</a></p>    
    
<p>ウェブサイトでは、React Routerの使用方法に関する包括的なガイドが提供されています。</p>    
    
<p>•  React Routerとその主要なコンセプトの概要</p> 

<p>• インストールおよびセットアップ手順</p>

<p>• 異なるユースケースやシナリオの例</p>

<p>• 各コアコンポーネントとユーティリティのAPIドキュメント</p>

<p>• サーバーレンダリング、コード分割、およびネストされたルートなどの高度なトピック</p>

<p>ドキュメントに加えて、コミュニティフォーラム、バグレポートや機能リクエストのためのGitHubリポジトリ、関連プロジェクトやプラグインのコレクションなど、さまざまなリソースがあります。</p>



<b><p>* 翻訳者の助けを借りて書かれたテキスト。 エラーが見つかった場合は、お知らせください *</p></b>
   
 <div className='ads-container'>  
  {/*  реклама  */}
</div>
    </div>
  )
}

export default JpReact_5;