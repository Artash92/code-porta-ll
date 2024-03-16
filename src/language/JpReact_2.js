import React from 'react';

function JpReact_2() {
  return (
    <div>
      <div className='ad-container'>  
          {/*  реклама  */}
        </div>
        
      <h1>JSX</h1>

<p>JSXはJavaScriptのための構文拡張であり、JavaScriptファイル内でHTMLのようなコードを書くことができます。ReactではUIコンポーネントの構造とレイアウトを定義するために広く使用されています。</p>

<p>以下はJSXの動作例です:</p>

<code>
  <p><span className='red'>import</span> React <span className='red'>from</span> <span className='blue1'>'react'</span>; </p>

  <p><span className='red'>function</span> <span className='blueviole'>MyComponent</span>() {'{'}</p>

  <p><span className='red'>return</span> {'('}</p>

  <p>{'<'}<span className='green'>div</span>{'>'}</p>

  <p>&nbsp;{'<'}<span className='green'>h1</span>{'>'}こんにちは、世界！{'</'}<span className='green'>h1</span>{'>'} </p>

  <p>&nbsp;{'<'}<span className='green'>p</span>{'>'}これはシンプルなJSXの例です。{'</'}<span className='green'>p</span>{'>'} </p>

  <p>{'</'}<span className='green'>div</span>{'>'}</p>

  <p>&nbsp;{'); '}</p>

  <p>{'}'}</p>

  <p><span className='red'>export default</span> MyComponent;</p> 
</code>

<p>この例では、JSXを使用してシンプルなReactコンポーネントを定義しています。このコンポーネントは、<b>div</b>要素をレンダリングし、<b>h1とp</b>要素を含んでいます。HTMLのようなコードが括弧で囲まれ、JSX構文を使用して定義されていることに注意してください。</p>

<p>JSXを使用すると、HTMLのようなコードとJavaScriptロジックを簡単に組み合わせることができます。たとえば、JSXコード内でJavaScript変数や式を使用できます:</p>

<code>
  <p><span className='red'>import</span> React <span className='red'>from</span> <span className='blue1'>'react'</span>;</p>

  <p><span className='red'>function</span> <span className='blueviole'>MyComponent</span>() {'{'}</p>

  <p><span className='red'>const</span> name = <span className='blue1'>'John'</span>;  </p>

  <p><span className='red'>return</span> {'('}</p>

  <p>{'<'}<span className='green'>div</span>{'>'} </p>

  <p>&nbsp;{'<'}<span className='green'>h1</span>{'>'}こんにちは、{'{'}name{'}'}！{'</'}<span className='green'>h1</span>{'>'} </p>

  <p>&nbsp;{'<'}<span className='green'>p</span>{'>'}これはシンプルなJSXの例です。{'</'}<span className='green'>p</span>{'>'} </p>

  <p>{'</'}<span className='green'>div</span>{'>'} </p>

  <p>&nbsp;{");"}</p>

  <p>{" } "}</p>

  <p><span className='red'>export default</span> MyComponent;</p> 
</code>

<p>この例では、JSXコード内でJavaScript変数 <b>(name)</b> を使用して、動的にパーソナライズされた挨拶をレンダリングしています。</p>

<p>React開発ではJSXは必須ではありませんが、複雑なUIコンポーネントを書きやすく管理しやすくするために非常に推奨されています。JSXコードを書くと、ブラウザで実行できる通常のJavaScriptコードに変換されます。</p>

<p>Reactコンポーネントには、機能コンポーネントとクラスコンポーネントの2つの主要なタイプがあります。</p>

<p>機能コンポーネントは、JSX要素を返すJavaScript関数として定義されます。状態やライフサイクルメソッドを持たない単純なプレゼンテーションUIコンポーネントに通常使用されます。</p>

<p>以下は、シンプルな機能コンポーネントの例です:</p>

<code>
    <p><span className='red'>import</span> React <span className='red'>from</span> <span className='blue1'>'react'</span>; </p>

    <p><span className='red'>function</span> <span className='blueviole'>MyComponent</span>(props) {'{'}</p>

    <p><span className='red'>return</span> {'('}</p>

    <p> {'<'}<span className='green'>div</span>{'>'} </p>

    <p>&nbsp;{'<'}<span className='green'>h1</span>{'>'}こんにちは、{'{'}props.<span className='blue'>name</span>{'}'}さん！{'</'}<span className='green'>h1</span>{'>'} </p>

    <p>&nbsp;{'<'}<span className='green'>p</span>{'>'}これは機能コンポーネントです。{'</'}<span className='green'>p</span>{'>'} </p>

    <p>{'</'}<span className='green'>div</span>{'>'} </p>

    <p>&nbsp;{');'}</p>

    <p>{'}'}</p>

    <p><span className='red'>export default</span> MyComponent;</p>  
</code>
   
<p>この例では、<b>MyComponent</b> という機能コンポーネントを定義し、引数として <b>props</b> オブジェクトを取ります。このコンポーネントは、パーソナライズされた挨拶を含む h1 要素とメッセージを含む <b>p</b> 要素を返します。</p>

<p>一方、クラスコンポーネントは、<b>React.Component</b> クラスを拡張したJavaScriptクラスとして定義されます。状態を管理し、ライフサイクルメソッドを持つより複雑なUIコンポーネントに使用されます。</p>

<p>以下は、シンプルなクラスコンポーネントの例です:</p>

<code>
    <p><span className='red'>import</span> React <span className='red'>from</span> <span className='blue1'>'react'</span>; </p>

    <p><span className='red'>class</span> MyComponent <span className='red'>extends</span> React.<span className='blue'>Component</span> {'{'}</p>

    <p><span className='blue'>constructor</span>(props) {'{'}</p>

    <p>super(props);</p>

    <p><span className='red'>this</span>.<span className='blue'>state</span> = {'{'}</p>

    <p><span className='blue'>count</span>: <span className='blue1'>0</span></p>

    <p>&nbsp;{'};'}</p>

    <p>{'}'}</p>

    <p><span className='blue'>render</span>() {'{'}</p>

    <p><span className='red'>return</span> {'('}</p>

    <p>{'<'}<span className='green'>div</span>{'>'} </p>

    <p>{'<'}<span className='green'>h1</span>{'>'}カウント: {'{'}<span className='red'>this</span>.<span className='blue'>state</span>.<span className='blue'>count</span>{'}'}{'</'}<span className='blue'>h1</span>{'>'}</p>

    <p>{'<'}<span className='green'>button</span> <span className='blue'>onClick</span> = {'{() => '}<span className='red'>this</span>.<span className='blue'>setState</span>{'({'} <span className='blue'>count</span>:<span className='red'>this</span>.<span className='blue'>state</span>.<span className='blue'>count</span> + <span className='blue1'>1</span> {'})}'}{'>'}増やす{'</'}<span className='green'>button</span>{'>'}</p>

    <p>{'</'}<span className='blue'>div</span>{'>'} </p>

    <p>&nbsp;&nbsp;{');'}</p>

    <p>&nbsp;{'}'}</p>

    <p>{'}'}</p>

    <p><span className='red'>export default</span> MyComponent;</p>  
</code>
    
<p>この例では、<b>MyComponent</b> というクラスコンポーネントを定義し、<b>count</b> という状態プロパティと、現在のカウントを表示する h1 要素と、クリック時にカウントを増やす <b>button</b> 要素を含む JSX 要素を返します。</p>

<p>コンポーネントは、複合およびネストされたUI要素を作成するために構成およびネストすることができます。また、アプリケーション全体でカスタマイズおよび再利用されるように、propsを入力として受け入れることもできます。</p>

<p><b>{'<Component />'}</b> は、Reactでコンポーネントをレンダリングするための構文です。これは、自己終了タグまたは空のタグと呼ばれ、引数なしで関数としてコンポーネントを呼び出すことと同等です。</p>

<p>たとえば、シンプルな <b>MyComponent</b> というコンポーネントがあるとします:</p>

<code>
    <p><span className='red'>function</span> <span className='blueviole'>MyComponent</span>() {'{'}</p>

    <p><span className='red'>return</span> {'('}</p>

    <p>{'<'}<span className='green'>div</span>{'>'}</p>

    <p>&nbsp;{'<'}<span className='green'>h1</span>{'>'}こんにちは、世界！{'</'}<span className='green'>h1</span>{'>'} </p>

    <p>{'</'}<span className='green'>div</span>{'>'}</p>

    <p>&nbsp;{');'}</p>

    <p>{'}'}</p>
</code>
   
<p>このコンポーネントをレンダリングするには、<b>{'<MyComponent />'}</b> 構文を使用します:</p>

<code>
    <p>ReactDOM.<span className='blue'>render</span>{'('} </p>

    <p>{'<'}<span className='blueviole'>MyComponent </span>{'/>'}, </p>

    <p>document.<span className='blue'>getElementById</span>(<span className='blue1'>'root'</span>)</p>

    <p>{');'}</p> 
</code>

<p><b>{'<MyComponent />'}</b> 構文は、MyComponentコンポーネントのインスタンスを作成し、DOMにレンダリングします。</p>

<b><p>* 翻訳者の助けを借りて書かれたテキスト。 エラーが見つかった場合は、お知らせください *</p></b>
    <div className='ads-container'>  
  {/*  реклама  */}
</div>

    </div>
  )
}

export default JpReact_2;