import React from 'react';

function JpReact_3() {
  return (
    <div>
      <div className='ad-container'>  
          {/*  реклама  */}
        </div>

      <h1>React イベント</h1>

<p>React は、コンポーネント内でイベントを処理する方法を提供しており、バニラ JavaScript でイベントを処理するのと同様です。React では、JSX 要素に対して on<b>[イベント名]</b> 構文を使用してイベントハンドラを追加できます。</p>

<p>例えば、React コンポーネント内にクリックイベントを処理したいボタンがあるとします:</p>

<code>
  <p><span className='red'>function</span> <span className='blueviole'>MyButton</span>(props) {'{'} </p>

  <p><span className='red'>function</span> <span className='blueviole'>handleClick</span>() {'{'}</p>

  <p><span className='blue'>{"console.log"}</span>(<span className='blue1'>'ボタンがクリックされました'</span>); </p>

  <p>{' }'}</p>

  <p><span className='red'>return</span> {'('}</p>

  <p>{'<'}<span className='green'>button</span> <span className='blue'>onClick</span>={'{handleClick}'}{'>'}クリック{'</'}<span className='green'>button</span>{'>'}  </p>

  <p>&nbsp;{');'}</p>

  <p>{'} '}</p>
</code>

<p>この例では、<b>MyButton</b> コンポーネントを定義し、<b>onClick</b> プロパティを <b>handleClick</b> 関数に設定したボタン要素を含めています。ボタンがクリックされると、<b>handleClick</b> 関数が呼び出され、コンソールに「ボタンがクリックされました」というメッセージがログされます。</p>

<p>また、アロー関数を使用してイベントハンドラ関数に引数を渡すこともできます。例えば、レンダリングするアイテムのリストがボタンとして表示される場合を考えてみましょう:</p>

<code>
 <p><span className='red'>function</span> <span className='blueviole'>ItemList</span>(props) {'{'}</p>

<p><span className='red'>const</span> items = props.<span className='blue'>items</span>; </p>

<p><span className='red'>function</span> <span className='blueviole'>handleClick</span>(item) {'{'}</p>

<p><span className='blue'>{'console.log'}</span>(<span className='blue1'>`アイテム $</span><span className='blue1'>{'{item'}.<span className='blue'>id</span>{'}'}</span><span className='blue1'> がクリックされました`</span>); </p>

<p>&nbsp;{'}'}</p>

<p><span className='red'>const</span> buttonList = {'items'}.<span className='blue'>map</span>{'('}(item) {'=>'} </p>

<p>{'<'}<span className='green'>button</span> <span className='blue1'>key</span>= {'{item'}.<span className='blue'>{'id}'}</span> <span className='blue'>onClick</span>={'{()'} {'=>'} <span className='blueviole'>handleClick</span>(item){'}'}{'>'}</p>

<p>{'{item'}.<span className='blue'>{'name}'}</span></p>

<p>{'</'}<span className='green'>button</span>{'>'}</p>

<p>{' ); '}</p>

<p><span className='red'>return</span> {'('}</p>

<p>{'<'}<span className='green'>div</span>{'>'}</p>

<p>{'{buttonList} '}</p>

<p>{'</'}<span className='green'>div</span>{'>'}</p>

<p>&nbsp;{');'}</p>

<p>{'} '}</p>
</code>

<p>この例では、<b>ItemList</b> コンポーネントを定義し、<b>items</b> プロパティを受け取ります。<b>handleClick</b> 関数を定義し、それには <b>item</b> 引数が必要で、対応するボタンがクリックされたときにコンソールにメッセージをログします。</p>

<p><b>map</b> メソッドを使用して、<b>items</b> プロパティ内の各アイテムに対応する新しい配列を作成します。各 <b>{'<button>'}</b> 要素の <b>key</b> プロパティを、対応するアイテムの <b>id</b> に設定します。これは、React が更新を最適化するための要件です。また、ボタンがクリックされたときに <b>item</b> オブジェクトを <b>handleClick</b> 関数に渡すために、アロー関数も使用しています。</p>

<p>そして、<b>buttonList</b> 配列を含む <b>{'<div>'}</b> 要素を返します。</p>

<h5>React Events</h5>

<p className='blue1'>onKeyDown</p>

<p className='blue1'>onKeyPress </p>

<p className='blue1'>onKeyUp</p>

<p className='blue1'>onFocus</p>

<p className='blue1'>onBlur</p>

<p className='blue1'>onChange</p>

<p className='blue1'>onInput</p>

<p className='blue1'>onInvalid </p>

<p className='blue1'>onSubmit</p>

<p className='blue1'>onClick</p>

<p className='blue1'>onContextMenu</p>

<p className='blue1'>onDoubleClick</p>

<p className='blue1'>onDrag</p>

<p className='blue1'>onDragEnd</p>

<p className='blue1'>onDragEnter</p>

<p className='blue1'>onDragExit</p>

<p className='blue1'>onDragLeave</p>

<p> <a href="https://react.dev/reference/react-dom/components/common#react-event-object" target='_blank' > 👉🏼 React https://react.dev/reference/react-dom/components/common#react-event-object</a> </p>


<b>クラスコンポーネントでのReactの状態管理</b>

    <p>Reactでは、クラスコンポーネントを使用して状態を管理することもできます。クラスコンポーネントは、<b>React.Component</b> クラスを拡張し、コンポーネントのUIを返す <b>render</b> メソッドを実装する JavaScript クラスです。</p>

    <p>以下は、状態を管理するクラスコンポーネントの例です:</p>

    <code>
       <p><span className='red'>import</span> React,{"{ Component }"} <span className='red'>from</span> 'react'; </p>

       <p> <span className='red'>class</span> Counter <span className='red'>extends</span> Component {'{'}</p>
    
       <p><span className='blue'>constructor</span>(props) {'{'}</p>

       <p>super (props);</p>

       <p><span className='red'>this</span>.<span className='blue'>state</span> = {'{'}<span className='blue'>count</span>: <span className='blue1'>0</span> {'}'};</p>

       <p><span className='red'>this</span>.<span className='blue'>handleClick</span> = <span className='red'>this</span>.<span className='blue'>handleClick</span>.<span className='blue'>bind</span>(<span className='red'>this</span>);</p>

       <p>&nbsp;{'}'}</p>

       <p><span className='blue'>handleClick</span>() {'{'}</p>

       <p><span className='red'>this</span>.<span className='blue'>setState</span>{'({'} <span className='blue'>count</span>: <span className='red'>this</span>.<span className='blue'>state</span>.<span className='blue'>count</span> + <span className='blue1'>1</span>{' })'}; </p>

       <p>{'}'}</p>

       <p><span className='blue'>render</span>() {'{'}</p>

       <p><span className='red'>return</span> {'('}</p>

       <p>{'<'}<span className='green'>div</span>{'>'}</p>

       <p>{'<'}<span className='green'>p</span>{'>'}あなたは {'{'}<span className='red'>this</span>.<span className='blue'>state</span>.<span className='blue'>count</span>{'}'} 回クリックしました{'</'}<span className='green'>p</span>{'>'}</p>

       <p>{'<'}<span className='green'>button</span> <span className='blue'>onClick</span>={'{'}<span className='red'>this</span>.<span className='blue'>handleClick</span>{'}'}{'>'}クリックしてください{'</'}<span className='green'>button</span>{'>'}</p>

       <p>{'</'}<span className='green'>div</span>{'>'}</p>

       <p>&nbsp;&nbsp;{');'}</p>

       <p>&nbsp;{'}'}</p>

       <p>{'}'}</p>
  </code>


  <p>この例では、<b>Counter</b> クラスを定義し、<b>React.Component</b> を拡張しています。クラス内で、constructorを定義し、コンポーネントの初期状態を<b>count</b>プロパティが0のオブジェクトに設定します。また、<b>handleClick</b> メソッドをコンポーネントインスタンスに <b>bind</b> しています。</p>

<p><b>handleClick</b> メソッドは、<b>count</b> プロパティが1増加した新しいオブジェクトを使用して、コンポーネントの状態を更新します。</p>

<p><b>render</b> メソッドは、コンポーネントのUIを返します。これには、現在の <b>count</b> の値を表示する <b>{'<p>'}</b> 要素と、クリックされたときに <b>handleClick</b> を呼び出すボタンが含まれています。</p>

<p>関数コンポーネントと同様に、状態を直接変更しないことが重要です。代わりに、常に <b>this.setState</b> を使用して状態を更新してください。</p>

<p>Reactでは、クラスコンポーネントは引き続きサポートされていますが、特にフックの導入に伴い、一般的に関数コンポーネントが好まれます。ただし、古いコードベースのメンテナンスや更新を行う際には、クラスコンポーネントの理解が重要です。</p>

<b>Reactライフサイクル</b>

<p>Reactでは、コンポーネントには存在中に異なる段階を示すライフサイクルがあります。Reactライフサイクルを理解することは、堅牢なReactアプリケーションを構築し、メンテナンスするために不可欠です。</p>

<p>以下は、Reactコンポーネントのライフサイクルメソッドの概要です。フェーズごとにグループ化されています:</p>

<h4>マウントフェーズ:</h4>

<p><b>{'constructor()'}</b>: コンポーネントが初期化されたときに呼び出されます。</p>

<p><b>{'static getDerivedStateFromProps()'}</b>: コンポーネントが初期化されたとき、および新しいプロップスを受け取ったときに呼び出されます。ほとんど使用されません。</p>

<p><b>{'render()'}</b>: コンポーネントがレンダリングする必要があるときに呼び出されます。</p>

<p><b>{'componentDidMount()'}</b>: コンポーネントが初めてレンダリングされた後に呼び出されます。</p>

<h4>更新フェーズ:</h4>

<p><b>{'static getDerivedStateFromProps()'}</b>: コンポーネントが新しいプロップスを受け取ったときに呼び出されます。</p>

<p><b>{'shouldComponentUpdate()'}</b>: コンポーネントが再レンダリングされる前に呼び出されます。更新をキャンセルすることができます。</p>

<p><b>{'render()'}</b>: コンポーネントがレンダリングする必要があるときに呼び出されます。</p>

<p><b>{'getSnapshotBeforeUpdate()'}</b>: コンポーネントが更新される前に呼び出されます。ほとんど使用されません。</p>

<p><b>{'componentDidUpdate()'}</b>: コンポーネントが更新された後に呼び出されます。</p>

<h4>アンマウントフェーズ:</h4>

<p><b>{'componentWillUnmount()'}</b>: コンポーネントがDOMから削除される直前に呼び出されます。</p>

<p>以下は、ライフサイクルメソッドをデモンストレーションする例です。</p>


<code>
  <p><span className='red'>import</span> React,{"{ Component }"} <span className='red'>from</span> 'react'; </p>
  
  <p><span className='red'>class</span> LifecycleDemo <span className='red'>extends</span> Component {'{'}</p>

  <p><span className='blue'>constructor</span>(props) {'{'} </p>

  <p>{'super(props);'}</p>  

  <p><span className='red'>{'this'}</span>.<span className='blue'>state</span>= {'{'}<span className='blue'>count</span>: <span className='blue1'>0</span> {'}'};</p>

  <p>{"console"}.<span className='blue'>log</span>(<span className='blue1'>'constructor'</span>);</p>

  <p>{'}'}</p>

  <p><span className='red'>static</span> <span className='blue'>getDerivedStateFromProps</span>(props, state) {'{'}</p>

  <p>{"console"}.<span className='blue'>log</span>('<span className='blue1'>getDerivedStateFromProps</span>');</p>

  <p><span className='red'>return null</span>;</p>

  <p>{'}'}</p>

  <p><span className='blue'>componentDidMount</span>() {'{'}</p>

  <p>{"console"}.<span className='blue'>log</span>(<span className='blue1'>'componentDidMount'</span>); </p>

  <p>{'}'}</p>

  <p><span className='blue'>shouldComponentUpdate</span>(nextProps, nextState) {'{'}</p>

  <p>{"console"}.<span className='blue'>log</span>(<span className='blue1'>'shouldComponentUpdate'</span>);</p>

  <p><span className='red'>return</span> <span className='blue'>true</span>;</p>

  <p>{'}'}</p>

  <p><span className='blue'>getSnapshotBeforeUpdate</span>(prevProps, prevState) {'{'}</p>

  <p>{"console"}.<span className='blue'>log</span>(<span className='blue1'>'getSnapshotBeforeUpdate'</span>);</p>

  <p><span className='red'>return null</span>;</p>

  <p>{'}'}</p>

  <p><span className='blue'>componentDidUpdate</span>(prevProps, prevState, snapshot) {'{'}</p>

  <p>{"console"}.<span className='blue'>log</span>(<span className='blue1'>'componentDidUpdate'</span>); </p>

  <p>{'}'}</p>

  <p><span className='blue'>componentWillUnmount</span>() {'{'} </p>

  <p>{"console"}.<span className='blue'>log</span>(<span className='blue1'>'componentWillUnmount'</span>); </p>

  <p>{'}'}</p>

  <p> <span className='blue'>handleClick</span> = () {'=>'} {'{'}</p>

  <p><span className='red'>this</span>.<span className='blue'>setState</span>{'({'} <span className='blue'>count</span>: <span className='red'>this</span>.<span className='blue'>state</span>.<span className='blue'>count</span> + <span className='blue1'>1</span> {'})'};</p>

  <p>{'}; '}</p>

  <p><span className='blue'>render</span>() {'{'} </p>

  <p>{"console"}.<span className='blue'>log</span>(<span className='blue1'>'render'</span>);</p>

  <p><span className='red'>return</span> {'('}</p>

  <p>{'<'}<span className='green'>div</span>{'>'}</p>

  <p>{'<'}<span className='green'>p</span>{'>'}あなたは {'{'}<span className='red'>this</span>.<span className='blue'>state</span>.<span className='blue'>count</span>{'}'} 回クリックしました{'</'}<span className='green'>p</span>{'>'}</p>

  <p>{'<'}<span className='green'>button</span> <span className='blue'>onClick</span>={'{'}<span className='red'>this</span>.<span className='blue'>handleClick</span>{'}>'}クリックしてください{'</'}<span className='green'>button</span>{'>'}</p>
  
  <p>{'</'}<span className='green'>div</span>{'>'}</p>

  <p>&nbsp;&nbsp;{');'}</p>

  <p>&nbsp;{'}'}</p>

  <p>{'}'}</p>
</code>

<p>この例では、コンポーネントのライフサイクルの各フェーズでコンソールにメッセージを記録する <b>LifecycleDemo</b> クラスを定義しています。また、コンポーネントの状態を更新する <b>handleClick</b> メソッドも定義しています。</p>

<p>コンポーネントが初めてマウントされると、次のメソッドが順番に呼び出されます: <b>constructor, getDerivedStateFromProps, render, componentDidMount</b> 。コンポーネントの状態が変更されるたびに、<b>shouldComponentUpdate, render, componentDidUpdate </b> メソッドがその順序で呼び出されます。</p>

<p>コンポーネントがアンマウントされると、<b>componentWillUnmount</b> メソッドが呼び出されます。</p>

<p>Reactコンポーネントのライフサイクルを理解することは重要です。これにより、コンポーネントを最適化し、メモリーリークや無限ループなどの一般的な問題を回避することができます。最初は圧倒されるかもしれませんが、練習を積むことで徐々に慣れていくでしょう。</p>

<b><p>* 翻訳者の助けを借りて書かれたテキスト。 エラーが見つかった場合は、お知らせください *</p></b>
    <div className='ads-container'>  
  {/*  реклама  */}
</div>
    </div>
  )
}

export default JpReact_3;