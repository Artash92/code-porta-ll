import React from 'react';

function JpReact_6() {
  return (
    <div>
      <div className='ad-container'>  
          {/*  реклама  */}
        </div>
        
      <h1>React Refs</h1>

<p>Reactでは、<b>ref</b>はレンダリングされた要素の基礎となるDOMノードまたはReactコンポーネントインスタンスにアクセスする方法です。refを使用して、コンポーネントの特定のプロパティやメソッドにアクセスしたり、その動作を変更したりすることができます。</p>

<p>以下は、Reactでrefを作成する方法の例です：</p>

<code>
 <p><span className='red'>import</span>  React, {'{ useRef }'} <span className='red'>from</span> <span className='blue1'>'react'</span>;  </p>

 <p><span className='red'>function</span> <span className='blueviole'>TextInput</span>{'() {'}</p>

 <p>&nbsp;<span className='red'>const</span> inputRef = <span className='blueviole'>useRef</span>(<span className='red'>null</span>); </p> 

 <p>&nbsp;<span className='red'>const</span> {'handleClick = () => {'}</p>

 <p> inputRef.<span className='blue'>current</span>.<span className='blue'>focus</span>();</p>

 <p>{' };'}</p>

 <p>&nbsp;<span className='red'>return</span> {'('}</p>

 <p>{'<'}<span className='green'>div</span>{'>'}</p>

 <p>&nbsp;{'<'}<span className='green'>input</span> <span className='blue'>type</span>=<span className='blue1'>"text"</span> <span className='blue'>ref</span>={'{inputRef} />'}</p>

 <p>&nbsp;{'<'}<span className='green'>button</span> <span className='blue'>onClick</span>={'{handleClick}>'}Focus Input{'</'}<span className='green'>button</span>{'>'}</p>

 <p>{'</'}<span className='green'>div</span>{'>'}</p>

 <p>&nbsp;{' );'}</p>

 <p>{'}'}</p>
</code>

<p>この例では、<b>useRef</b>フックを使用して<b>ref</b>を作成します。その後、<b>ref</b>を<b>ref</b>プロップを使用して<b>input</b>要素に渡します。</p>

<p>また、<b>ref</b>の<b>current</b>プロパティを使用して<b>input</b>要素の<b>focus</b>メソッドを呼び出す<b>handleClick</b>関数も作成します。これにより、ユーザーが「Focus Input」ボタンをクリックしたときに入力にフォーカスを設定できます。</p>

<p>全体的に、<b>refs</b>を使用すると、Reactでコンポーネントにアクセスしたり操作したりする強力なツールになります。ただし、必要以上に使用せず、命令形式のコードに過度に依存しないように注意することが重要です。これにより、コードが理解しやすく、メンテナンスしやすくなります。</p>

<b>Event Emitter</b>

<p>イベントエミッターは、プログラム内のオブジェクトがイベントをトリガーして処理することで互いに通信するデザインパターンです。単純に言えば、イベントエミッターは、プログラム内でメッセージをブロードキャストして受信するメカニズムです。</p>

<p>JavaScriptでは、EventEmitterクラスはこのパターンを実装する方法を提供する組み込みモジュールです。以下は、Node.jsでEventEmitterを使用する方法の例です：</p>

<code>
  <p><span className='red'>const</span> EventEmitter = <span className='blueviole'>require</span>(<span className='blue1'>'events'</span>); </p>

  <p><span className='red'>class</span> MyEmitter <span className='red'>extends</span> EventEmitter {"{}"}</p>

  <p><span className='red'>const</span> myEmitter = <span className='red'>new</span> MyEmitter(); </p>

  <p>myEmitter.<span className='blue'>on</span>{'('}<span className='blue1'>'event'</span>, (arg){" => {"}</p>

  <p> console.<span className='blue'>log</span>(<span className='blue1'>'Event triggered with argument:'</span>, arg); </p>

  <p>{"});"}</p>

  <p> myEmitter.<span className='blue'>emit</span>(<span className='blue1'>'event', 'Hello, world!'</span>); </p>
</code>

<p>この例では、<b>MyEmitter</b>クラスを作成し、<b>EventEmitter</b>クラスを拡張します。その後、このクラスのインスタンスを作成し、<b>on</b>メソッドを使用して<b>event</b>イベントのリスナーを定義します。最後に、<b>event</b>イベントを発行し、文字列引数を渡します。これにより、リスナーがトリガーされ、引数がコンソールにログされます。</p>

<p>全体的に、イベントエミッターを使用すると、プログラムのさまざまな部分が互いに密接に結合せずに通信できるパブサブパターンを実装できます。ただし、このパターンを慎重に使用し、イベントに過度に依存しないようにすることが重要です。これにより、コードが理解しやすく、デバッグしやすくなります。</p>

<p><b>React</b>では、イベントエミッターパターンを使用してアプリケーション内の異なるコンポーネント間で通信できます。これは、お互いに直接関連していないコンポーネント間でデータを渡したりアクションをトリガーしたりする場合に役立ちます。</p>

<p>Reactでイベントエミッターパターンを実装する方法の1つは、<b>eventemitter3</b>や<b>mitt</b>などのサードパーティライブラリを使用することです。これらのライブラリは、イベントの作成やサブスクライブに対する簡単なAPIを提供し、クラスコンポーネントとフックを使用した関数コンポーネントの両方で使用できます。</p>

<p>以下は、Reactコンポーネントで<b>eventemitter3</b>を使用する方法の例です：</p>

<code>
<p><span className='red'>import</span> React, {"{ useEffect }"} <span className='red'>from</span> <span className='blue1'>'react'</span>; </p>

<p><span className='red'>import</span> EventEmitter <span className='red'>from</span> <span className='blue1'>'eventemitter3'</span>;  </p>

<p>&nbsp;<span className='red'>const</span>  emitter = <span className='red'>new</span> EventEmitter(); </p>

<p><span className='red'>function</span> <span className='blueviole'>ComponentA</span>() {"{"}</p>

<p>&nbsp;<span className='blueviole'>useEffect</span>{"(() => { "}</p>

<p>&nbsp;&nbsp;emitter.<span className='blue'>emit</span>{'('}<span className='blue1'>'eventA'</span>, {'{'} <span className='blue'>data</span>: <span className='blue1'>'Hello from ComponentA'</span> {'})'}; </p>

<p>{"}, []);"}</p>

<p>&nbsp;&nbsp;<span className='red'>return</span> {'<'}<span className='green'>div</span>{'>'}ComponentA{'</'}<span className='green'>div</span>{">; "}</p>

<p>{"} "}</p>

<p><span className='red'>function</span> <span className='blueviole'>ComponentB</span>{"() {"}</p>

<p>&nbsp;<span className='blueviole'>useEffect</span>{"(() => {"}</p>

<p>&nbsp;&nbsp;emitter.<span className='blue'>on</span>(<span className='blue1'>'eventA'</span>, handleEventA); </p>

<p>&nbsp;&nbsp;<span className='red'>return</span>  () {'=>'} emitter.<span className='blue'>off</span>(<span className='blue1'>'eventA'</span>, handleEventA);</p>

<p>{" }, []);"}</p>

<p>&nbsp;<span className='red'>const</span>  handleEventA = (payload) {"=> {"}</p>

<p>&nbsp;&nbsp;{'console.'}<span className='blue'>log</span>(<span className='blue1'>'Received eventA:'</span>, payload.<span className='blue'>data</span>);</p>

<p>{" }; "}</p>

<p>&nbsp;&nbsp;<span className='red'>return</span> {'<'}<span className='green'>div</span>{'>'}ComponentB{'</'}<span className='green'>div</span>{">; "}</p>

<p>{"}"}</p>
</code>

<p>この例では、<b>emitter</b> という <b>EventEmitter</b> のインスタンスを作成します。 <b>ComponentA</b> では、 <b>useEffect</b> フックを使用して <b>eventA</b> というイベントを一部のデータとともに発行します。 <b>ComponentB</b> では、 <b>useEffect</b> フックを使用して <b>eventA</b> イベントに登録し、 <b>handleEventA</b> というコールバック関数を定義して、データをコンソールにログ出力します。</p>

<p><b>ComponentA</b> がマウントされると、一部のデータを持つ <b>eventA</b> イベントが発行されます。 <b>ComponentB</b> がマウントされると、<b>eventA</b> イベントに登録され、その名前を持つイベントのリスニングを開始します。 <b>eventA</b> が発行されると、データが渡され、それがコンソールにメッセージとして表示されます。</p>

<p>全体として、React でイベントエミッターパターンを使用することは、直接関連付けられていないコンポーネント間の通信を実装するための便利な方法です。 ただし、このパターンを慎重に使用し、イベントに過度に依存せず、コードを理解しやすくデバッグしやすくすることが重要です。</p>

<h4>React アニメーション</h4>

<p>React では、さまざまな技術を使用してコンポーネントにアニメーションを追加できます。 アニメーションは、UI をより魅力的にし、変更があったときにユーザーにビジュアルフィードバックを提供できます。</p>

<p>React でアニメーションを実装する人気のある方法の1つは、CSS の遷移またはアニメーションを使用することです。 これらのアニメーションをトリガーするために、コンポーネントに CSS クラスを追加し、コンポーネントの状態に基づいてクラスを切り替えるために React の <b>className</b> プロパティを使用できます。</p>

<p>以下は、ボタンをクリックしたときに CSS の遷移を使用してボタンにアニメーションを適用する方法の例です：</p>

<code>
<p><span className='red'>import</span> {'React, { useState }'} <span className='red'>from</span> <span className='blue1'>'react'</span>;</p> 

<p><span className='red'>import</span>  <span className='blue1'>'./Button.css'</span>;</p>

<p><span className='red'>function</span> <span className='blueviole'>Button</span>{"() {"}</p>

<p>&nbsp;<span className='red'>const</span>  {"[isClicked, setIsClicked]"} = <span className='blueviole'>useState</span>(<span className='blue1'>false</span>); </p>

<p>&nbsp;<span className='red'>const</span> {"handleClick = () => { "}</p>

<p><span className='blueviole'>setIsClicked</span>(<span className='blue1'>true</span>); </p>

<p><span className='blueviole'>setTimeout</span>{"(() => "}<span className='blueviole'>setIsClicked</span>(<span className='blue1'>false</span>), <span className='blue1'>1000</span>{')'};</p>

<p>{"};"}</p>

<p>&nbsp;<span className='red'>return</span> {"("}</p>

<p>{'<'}<span className='green'>button</span> <span className='blue'>className</span>={'{'}<span className='blue1'>`button {'${'}</span>isClicked ? <span className='blue1'>'clicked'</span> : <span className='blue1'>''{'}`'}</span>{'}'} <span className='blue'>onClick</span>={'{handleClick}>'}</p>

<p>&nbsp;{"Click me! "}</p>

<p>{"</"}<span className='green'>button</span>{">"}</p>

<p>{"); "}</p>

<p>{" }"}</p>
</code>

<p>この例では、<b>Button</b>というコンポーネントを定義し、<b>useState</b>フックを使用してボタンがクリックされたかどうかを追跡します。ボタンがクリックされると、<b>isClicked</b>状態を<b>true</b>に設定し、ボタンに<b>clicked</b>クラスを追加します。<b>setTimeout</b>を使用して1秒後に<b>clicked</b>クラスを削除し、元の状態に遷移させます。</p>

<p><b>Button.css</b>というCSSファイルも定義されており、ボタンとクリックされた<b>class</b>のスタイルを定義しています：</p>

<code>
  <p>{'.button {'}</p>

  <p>&nbsp;&nbsp;<span className='blue'>background-color</span>: <span className='blue1'>blue</span>; </p>

  <p>&nbsp;&nbsp;<span className='blue'>color</span>: <span className='blue1'>white</span>;</p>

  <p>&nbsp;&nbsp;<span className='blue'>padding</span>: 10<span className='blue1'>px</span> 20<span className='blue1'>px</span>; </p>

  <p>&nbsp;&nbsp;<span className='blue'>border</span>: <span className='blue1'>none</span>;</p>

  <p>&nbsp;&nbsp;<span className='blue'>border-radius</span>: 5<span className='blue1'>px</span>;</p>

  <p>&nbsp;&nbsp;<span className='blue'>transition</span>: <span className='blue1'>background-color</span> 0.5<span className='blue1'>s</span>; </p>

  <p>{'}'}</p>

  <p>{'.clicked {'}</p>

  <p>&nbsp;&nbsp;<span className='blue'>background-color</span>: <span className='blue1'>red</span>; </p>

  <p>{'}'}</p>
</code>

<p>このCSSファイルでは、ボタンのスタイルを定義し、<b>button</b>クラスの<b>background-color</b>プロパティの変更をアニメートするために<b>transition</b>プロパティを指定しています。また、<b>clicked</b>クラスも定義されており、適用されると<b>background-color</b>を赤に変更します。</p>

<p>Reactでアニメーションを実装する別の方法は、<b>react-spring</b>や<b>framer-motion</b>などのサードパーティのライブラリを使用することです。これらのライブラリは、複雑なアニメーションを作成するための柔軟なAPIを提供し、より高度なユースケースに役立ちます。</p>

<p><b>react-transition-group</b>は、React向けのサードパーティのライブラリであり、コンポーネントにCSSトランジションやアニメーションを簡単に追加する方法を提供します。トランジションのライフサイクル、要素のマウントおよびアンマウント、クラスの追加と削除、アニメーションの遅延などを管理するための一連のコンポーネントとAPIを提供します。</p>

<b>{'npm install react-transition-group'}</b>

<p><b>react-transition-group</b>のコアコンポーネントには、<b>Transition</b>、<b>CSSTransition</b>、および<b>TransitionGroup</b>があります。それぞれのコンポーネントについて簡単に説明します：</p>

<p>• <b>Transition</b>: このコンポーネントは、トランジションの基本的なライフサイクル（entering、entered、exiting、exitedの各状態）を定義します。このコンポーネントを使用してトランジションをトリガーできます。</p>

<p>• <b>CSSTransition</b>: このコンポーネントは、<b>Transition</b>コンポーネントを拡張し、CSSトランジションとアニメーションをサポートします。トランジションのさまざまな段階（<b>enter</b>、<b>enter-active</b>、<b>exit</b>、<b>exit-active</b>など）でコンポーネントに適用するCSSクラスを指定できます。</p>

<p>• <b>TransitionGroup</b>: このコンポーネントは、一連の<b>Transition</b>または<b>CSSTransition</b>コンポーネントを管理するために使用されます。要素のマウントとアンマウントを追跡し、各コンポーネントに異なるトランジション効果を適用できます。</p>

<p>以下は、コンポーネントがマウントされるときに<b>react-transition-group</b>を使用してフェードインアニメーションを追加する方法の例です：</p>

<code>
  <p><span className='red'>import</span>  {'React, { useState }'} <span className='red'>from</span> <span className='blue1'>'react'</span>; </p>

  <p><span className='red'>import</span>  {'{ CSSTransition }'} <span className='red'>from</span> <span className='blue1'>'react-transition-group'</span>;</p>

  <p><span className='red'>import</span>  <span className='blue1'>'./FadeIn.css'</span>;</p>

  <p><span className='red'>function</span> <span className='blueviole'>FadeIn</span>{"() { "}</p>

  <p>&nbsp;<span className='red'>const</span> {'[isMounted, setIsMounted]'} = <span className='blueviole'>useState</span>(<span className='blue1'>false</span>); </p>

  <p>&nbsp;<span className='red'>const</span> {'handleMount = () => '}<span className='blueviole'>setIsMounted</span>(<span className='blue1'>true</span>);  </p>

  <p>&nbsp;<span className='red'>return</span> {"( "}</p>

  <p>{"<> "}</p>

  <p>&nbsp;{'<'}<span className='green'>button</span> <span className='blue'>onClick</span>={'{handleMount}>Mount component</'}<span className='green'>button</span>{'>'}</p>

  <p>&nbsp;{'<'}<span className='blueviole'>CSSTransition</span> <span className='blue'>in</span>={'{isMounted}'} <span className='blue'>timeout</span>={'{'}<span className='blue1'>300</span>{'}'} <span className='blue'>classNames</span>=<span className='blue1'>"fade"</span>{'>'}</p>

  <p>&nbsp;{'<'}<span className='green'>div</span> <span className='blue'>className</span>=<span className='blue1'>"content"</span>{'>'}Hello, world!{'</'}<span className='green'>div</span>{'>'}</p>

  <p>&nbsp;{"</"}<span className='blueviole'>CSSTransition</span>{">"}</p>

  <p>{" </> "}</p>

  <p>&nbsp;{"); "}</p>

  <p>{"} "}</p>
</code>

<p>この例では、<b>FadeIn</b>というコンポーネントを定義し、<b>useState</b>フックを使用してコンポーネントがマウントされたかどうかを追跡します。ボタンがクリックされると、<b>isMounted</b>状態を<b>true</b>に設定し、<b>CSSTransition</b>コンポーネントがフェードインアニメーションを持つ<b>content</b> divをレンダリングするようになります。フェードイン効果のスタイルとアニメーションを定義する<b>FadeIn.css</b>というCSSファイルも定義されています：</p>

<code>
  <p>{" .fade-enter { "}</p>

  <p>&nbsp;&nbsp;<span className='blue'>opacity</span>: 0;</p>

  <p>{"} "}</p>

  <p>{".fade-enter-active { "}</p>

  <p>&nbsp;&nbsp;<span className='blue'>opacity</span>: 1; </p>

  <p>&nbsp;&nbsp;<span className='blue'>transition</span>: <span className='blue1'>opacity</span> 300<span className='blue1'>ms ease-in</span>;  </p>

  <p>{"} "}</p>

  <p>{".fade-exit { "}</p>

  <p>&nbsp;&nbsp;<span className='blue'>opacity</span>: 1;  </p>

  <p>{"} "}</p>

  <p>{".fade-exit-active { "}</p>

  <p>&nbsp;&nbsp;<span className='blue'>opacity</span>: 0;  </p>
  
  <p>&nbsp;&nbsp;<span className='blue'>transition</span> : <span className='blue1'>opacity</span> 300<span className='blue1'>ms ease-out</span>; </p>

  <p>{"}"}</p>
</code>

<p>このCSSファイルでは、トランジションの異なる段階のためのクラスが定義されています。コンポーネントが入るときには不透明度が0（<b>fade-enter</b>）になり、300msで不透明度が1に変化します（<b>fade-enter-active</b>）。コンポーネントが出るときには不透明度が1（<b>fade-exit</b>）になり、300msで不透明度が0に変化します（<b>fade-exit-active</b>）。</p>

<p>全体的に、Reactコンポーネントにアニメーションを追加すると、UIがより魅力的になり、ユーザーに視覚的なフィードバックを提供できます。CSSトランジションまたはアニメーション、またはサードパーティのライブラリを使用することで、コンポーネントに簡単にアニメーションを追加して、よりダイナミックにします。</p>


<b><p>* 翻訳者の助けを借りて書かれたテキスト。 エラーが見つかった場合は、お知らせください *</p></b>
   
 <div className='ads-container'>  
  {/*  реклама  */}
</div>

    </div>
  )
}

export default JpReact_6;