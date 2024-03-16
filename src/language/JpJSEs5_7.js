import React from 'react';

function JpJSEs5_7() {
  return (
    <div>
      <div className='ad-container'>  
          {/*  реклама  */}
        </div>
        
        <h1>オブジェクト指向プログラミング、またはOOP</h1>

<p>オブジェクト指向プログラミング、またはOOPは、オブジェクト、クラス、カプセル化を強調するプログラミングパラダイムです。JavaScript ES5では、OOPはコンストラクタ関数とプロトタイプを使用して実装されます。</p>

<p>
コンストラクタ関数は、オブジェクトを作成して初期化するために使用される特別な関数です。コンストラクタ関数は、functionキーワードを使用して定義され、通常、名前は通常の関数と区別するために大文字で始まります。コンストラクタ内部でthisキーワードが使用され、作成されるオブジェクトを参照します。以下は例です：
</p>

<code>
  <p><span className='blueviole'>function</span> <span className='blue'>Person</span>(<span className='blue'>name, age</span>) {'{'}</p>

  <p><span className='blueviole'>this</span>.name = name;</p>

  <p><span className='blueviole'>this</span>.age = age;</p>

  <p>{'}'}</p>

  <p><span className='blueviole'>var</span> <span className='blue'>person1</span> = <span className='blueviole'>new</span> Person(<span className='red'>"Alice"</span>, <span className='blue'>25</span>);</p>

  <p><span className='blueviole'>var</span> <span className='blue'>person2</span> = <span className='blueviole'>new</span> Person(<span className='red'>"Bob"</span>, <span className='blue'>30</span>);</p>

  <p>{'console.log'}(person1.name); <span className='darkgreen'>// "Alice"</span></p>

  <p>{'console.log'}(person2.age); <span className='darkgreen'>// 30</span></p>
</code>

<p>この例では、Person関数は2つのPersonオブジェクト、person1とperson2を作成するためのコンストラクタ関数として使用されます。nameとageのプロパティは、コンストラクタ関数内でthisキーワードを使用して設定されます。</p>
<p>
コンストラクタ関数の他に、プロトタイプは継承を実装し、オブジェクト間でメソッドとプロパティを共有するために使用されます。JavaScriptのすべてのオブジェクトにはプロトタイプがあり、これはオブジェクトが継承する別のオブジェクトです。プロパティとメソッドは、prototypeプロパティを使用してオブジェクトのプロトタイプに追加することができます。以下は例です：
</p>

<code>
  <p><span className='blueviole'>function</span> <span className='blue'>Person</span>(<span className='blue'>name, age</span>) {'{'}</p>

  <p><span className='blueviole'>this</span>.name = name</p>

  <p><span className='blueviole'>this</span>.age = age;</p>

  <p>{'}'}</p>

  <p>Person.prototype.greet = <span className='blueviole'>function</span>() {'{'}</p>

  <p>{'console.log'}(<span className='red'>"Hello, my name is "</span> + <span className='blueviole'>this</span>.name + <span className='red'>" and I am "</span> + <span className='blueviole'>this</span>.age + <span className='red'>" years old."</span>);</p>

  <p>{'}'}</p>

  <p><span className='blueviole'>var</span> <span className='blue'>person1</span> = <span className='blueviole'>new</span> <span className='blue'>Person</span>(<span className='red'>"Alice"</span>, <span className='blue'>25</span>);</p>

  <p><span className='blueviole'>var</span> <span className='blue'>person2</span> = <span className='blueviole'>new</span> <span className='blue'>Person</span>(<span className='red'>"Bob"</span>, <span className='blue'>30</span>);</p>

  <p>person1.greet(); <span className='darkgreen'>// "Hello, my name is Alice and I am 25 years old."</span></p>

  <p>person2.greet(); <span className='darkgreen'>// "Hello, my name is Bob and I am 30 years old."</span></p>
</code>

<p>この例では、greetメソッドがprototypeプロパティを使用してPersonのプロトタイプに追加されています。このメソッドは、person1.greet()およびperson2.greet()の呼び出しによって示されるように、任意のPersonオブジェクトで呼び出すことができます。</p>

<p>JavaScript ES5のもう1つのOOP概念はカプセル化であり、これは実装の詳細を隠し、外部世界には必要なインターフェースのみを公開するという慣習を指します。これは、クロージャを使用して実現できます。これにより、外部関数が返された後も関数が外側のスコープの変数にアクセスできます。以下は例です：</p>
 
<code>
  <p><span className='blueviole'>function</span> <span className='blue'>Counter</span>() {'{'}</p>

  <p><span className='blueviole'>var</span> <span className='blue'>count</span> = <span className='blue'>0</span>;</p>

  <p><span className='blueviole'>this</span>.increment = <span className='blueviole'>function</span>() {'{'}</p>

  <p>count++;</p>

  <p> console.log(count);</p>

  <p>{'};'}</p>

  <p><span className='blueviole'>this</span>.decrement = <span className='blueviole'>function</span>() {'{'}</p>

  <p>count--;</p>

  <p>console.log(count);</p>

  <p>{'};'}</p>

  <p>{'}'}</p>

  <p><span className='blueviole'>var</span> <span className='blue'>counter1</span> = <span className='blueviole'>new</span> Counter();</p>

  <p><span className='blueviole'>var</span> <span className='blue'>counter2</span> = <span className='blueviole'>new</span> Counter();</p>

  <p>counter1.increment(); <span className='darkgreen'>// 1</span></p>

  <p>counter1.increment(); <span className='darkgreen'>// 2</span></p>

  <p>counter1.decrement(); <span className='darkgreen'>// 1</span></p>

  <p>counter2.increment(); <span className='darkgreen'>// 1</span></p>
</code>

<p>この例では、Counterコンストラクタ関数がインクリメントおよびデクリメントメソッドを持つオブジェクトを作成し、クロージャを使用してプライベートなcount変数にアクセスしています。これにより、count変数が外部から隠され、Counterオブジェクトが提供するメソッドを介してのみアクセスできるようになります。</p>

<p><b>JavaScript ES5でのプリミティブ値を使用したオブジェクト指向プログラミング（OOP）</b></p>

<code>
  <p><span className='blueviole'>function</span> <span className='blue'>Person</span>(<span className='blue'>name, age, gender</span>) {'{'}</p>

  <p><span className='blueviole'>this</span>.name = name;</p>

  <p><span className='blueviole'>this</span>.age = age;</p>

  <p><span className='blueviole'>this</span>.gender = gender;</p>

  <p> <span className='blueviole'>this</span>.printDetails = <span className='blueviole'>function</span>() {'{'}</p>

  <p>{'console.log'}(<span className='red'>"名前："</span> + <span className='blueviole'>this</span>.name);</p>

  <p>{'console.log'}(<span className='red'>"年齢："</span> + <span className='blueviole'>this</span>.age);</p>

  <p>{'console.log'}(<span className='red'>"性別："</span> + <span className='blueviole'>this</span>.gender);</p>

  <p>{'}'}</p>

  <p>{'}'}</p>

  <p><span className='blueviole'>var</span> <span className='blue'>person1</span> = <span className='blueviole'>new</span> Person(<span className='red'>"John"</span>, <span className='blue'>25</span>, <span className='red'>"男性"</span>); </p>

  <p><span className='blueviole'>var</span> <span className='blue'>person2</span> = <span className='blueviole'>new</span> Person(<span className='red'>"Jane"</span>, <span className='blue'>30</span>, <span className='red'>"女性"</span>); </p>

  <p>{'person1.printDetails();'}</p>

  <p>{'person2.printDetails();'}</p>

  <p><span className='blueviole'>var</span> <span className='blue'>bool</span> = <span className='blueviole'>new</span> Boolean(<span className='blue'>true</span>);</p>

  <p>{'console.log'}(bool.valueOf()); <span className='darkgreen'> // true</span></p>

  <p><span className='blueviole'>var</span> <span className='blue'>str</span> = <span className='blueviole'>new</span> String(<span className='red'>"Hello"</span>); </p>

  <p>{'console.log'}(str.concat(<span className='red'>" World"</span>)); <span className='darkgreen'>// "Hello World"</span></p>

  <p><span className='blueviole'>var</span> <span className='blue'>num</span> = <span className='blueviole'>new</span> Number(<span className='blue'>10</span>);</p>

  <p>{'console.log'}(num.valueOf() + <span className='blue'>5</span>); <span className='darkgreen'>// 15</span></p>
</code>

<p>この例では、名前、年齢、性別のプロパティを持つpersonオブジェクトを作成するためのPersonコンストラクタ関数を定義しています。また、PersonオブジェクトにprintDetailsメソッドも定義して、人物の詳細を出力しています。</p>

<p>その後、コンストラクタ関数を使用して2つのPersonオブジェクトを作成し、それぞれのオブジェクトのprintDetailsメソッドを呼び出します。</p>

<p>次に、それぞれのコンストラクタ関数を使用してBoolean、String、およびNumberオブジェクトを作成し、それらのメソッド（valueOf、concat、および基本的な算術演算）をいくつか示します。</p>

<p><b>JavaScript ES5では、ObjectおよびArrayコンストラクタ関数を使用してオブジェクトを作成できます。これは、コンストラクタベースのオブジェクト作成と呼ばれるOOPの形式です。</b></p>

<p>コンストラクタ関数を使用してオブジェクトを作成するには、関数名の後にnewキーワードを使用します。たとえば、Objectコンストラクタ関数を使用してオブジェクトを作成する場合は、次のようにします：</p>

<code>
  <p> <span className='blueviole'>var</span> <span className='blue'>person</span> = <span className='blueviole'>new</span> Object(); </p>

  <p> person.name = <span className='red'>"John"</span>; </p>

  <p>person.age = <span className='blue'>30</span>;</p>

  <p>person.job = <span className='red'>"Developer"</span>;</p>
</code>

<p>上記の例では、Objectコンストラクタ関数を使用して新しいオブジェクトpersonを作成しています。その後、ドット記法を使用してこのオブジェクトにプロパティを追加しています。</p>

<p>同様に、Arrayコンストラクタ関数を使用して配列を作成できます：</p>

<code>
  <p><span className='blueviole'>var</span> <span className='blue'>arr</span> = [];</p>

  <p>arr.push(<span className='blue'>1</span>);</p>

  <p>arr.push(<span className='blue'>2</span>);</p>

  <p>arr.push(<span className='blue'>3</span>);</p>

  <p>console.log(arr); <span className='darkgreen'>// [1, 2, 3]</span></p>
</code>


<p>上記の例では、Arrayコンストラクタ関数を使用して新しい配列arrを作成しています。その後、pushメソッドを使用してこの配列に要素を追加しています。</p>

<p>コンストラクタベースのオブジェクト作成は、同じタイプの複数のオブジェクトを作成する必要がある場合に便利です。オブジェクトのプロパティの初期値を設定するコンストラクタ関数を定義し、そのコンストラクタを使用して新しいオブジェクトを作成できます。</p>

<p>たとえば、車を表すオブジェクトを作成したいとします。このような場合、次のようにコンストラクタ関数を定義できます：</p>

<code>
  <p><span className='blueviole'>function</span> <span className='blue'>Car</span>(<span className='blue'>make, model, year</span>) {'{'}</p>

  <p><span className='blueviole'>this</span>.make = make;</p>

  <p><span className='blueviole'>this</span>.model = model;</p>

  <p><span className='blueviole'>this</span>.year = year;</p>

  <p>{'}'}</p>

  <p><span className='blueviole'>var</span> <span className='blue'>car1</span> = <span className='blueviole'>new</span> Car(<span className='red'>"Honda"</span>, <span className='red'>"Civic"</span>, <span className='blue'>2020</span>);</p>


  <p><span className='blueviole'>var</span> <span className='blue'>car2</span> = <span className='blueviole'>new</span> Car(<span className='red'>"Toyota"</span>, <span className='red'>"Corolla"</span>, <span className='blue'>2021</span>);</p>
</code>

<p>上記の例では、三つのパラメータ（make、model、およびyear）を受け取り、それぞれのプロパティをthisキーワードを使用してオブジェクトに設定するCarコンストラクタ関数を定義しています。その後、このコンストラクタを使用して2つのcarオブジェクト（car1およびcar2）を作成します。</p>

<p><b>OOP I new RegExp()</b></p>

<code>
  <p><span className='blueviole'>var</span> <span className='blue'>str</span> = <span className='red'>"Hello, world!"</span>;</p>

  <p><span className='blueviole'>var</span> <span className='blue'>regex</span> = <span className='blueviole'>new</span> RegExp(<span className='red'>'\\w', 'g'</span>);</p>

  <p><span className='blueviole'>var</span> <span className='blue'>matches</span> = str.match(regex);</p>

  <p>{'console.log(matches);'} <span className='darkgreen'>// ["H", "e", "l", "l", "o", "w", "o", "r", "l", "d"]</span></p>
</code>

<p>上記の例では、任意の単語文字（\w）に一致する正規表現を作成し、gフラグを使用してグローバル検索を実行しています。その後、match()メソッドを使用して文字列str内のすべての一致を検索します。最後に、一致した配列をコンソールにログ出力しています。</p>

<p>正規表現パターンを文字列としてRegExpコンストラクタに渡す場合は、バックスラッシュ文字をエスケープする必要があることに注意してください。これは、バックスラッシュ文字が正規表現内の特殊文字をエスケープするために使用され、文字列内でもエスケープする必要があるためです。</p>

<p><b>プロトタイプ __proto__</b></p>

<p>プロトタイプベースのプログラミングは、オブジェクトが他のオブジェクトからプロパティとメソッドを継承できるようにするJavaScriptの基本的な概念です。JavaScriptのすべてのオブジェクトには、プロパティとメソッドを継承する別のオブジェクトであるプロトタイプがあります。</p>

<p>ES5では、Object.create()メソッドを使用してプロトタイプを作成できます。このメソッドはオブジェクトをパラメータとして受け取り、そのオブジェクトのプロトタイプをそれに設定した新しいオブジェクトを作成します。その後、プロトタイプオブジェクトにプロパティとメソッドを追加できます。これらは、そのプロトタイプを使用して作成されたすべてのオブジェクトによって継承されます。</p>

<p>以下は、Personオブジェクトのプロトタイプを作成する例です。</p>

<code>
  <p><span className='blueviole'>var</span> personPrototype = {'{'}</p>

  <p>greeting: <span className='blueviole'>function</span>() {'{'}</p>

  <p>{'console.log'}(<span className='red'>"こんにちは、私の名前は "</span> + <span className='blueviole'>this</span>.name);</p>

  <p>{'} ,'}</p>

  <p>farewell: <span className='blueviole'>function</span>() {'{'} </p>

  <p>{'console.log'}(<span className='red'>"さようなら！"</span>);</p>

  <p>{'}'}</p>

  <p>{'};'}</p>

  <p><span className='blueviole'>var</span> <span className='blue'>john</span> = Object.create(personPrototype); </p>

  <p>john.name = <span className='red'>"John"</span>;</p>

  <p>john.greeting(); <span className='darkgreen'>// 出力: "こんにちは、私の名前は John"</span></p>
</code>

<p>この例では、最初にgreeting()メソッドとfarewell()メソッドを持つpersonPrototypeオブジェクトを定義します。その後、Object.create(personPrototype)を呼び出して新しいPersonオブジェクトjohnを作成し、そのnameプロパティを "John" に設定します。johnはpersonPrototypeをプロトタイプとして作成されているため、プロトタイプオブジェクトからgreeting()メソッドを継承し、john.greeting()を使用して呼び出すことができます。</p>

<p><b>instanceof</b></p>

<p>JavaScript ES5では、instanceofは、オブジェクトが特定のクラスに属しているかどうかを確認するために使用される演算子です。指定されたクラスまたはそのサブクラスのインスタンスであるかどうかを示すブール値を返します。</p>

<p>instanceofの構文は次のとおりです：</p>

<p>object instanceof constructor</p>

<p>ここで、objectは確認するオブジェクトの名前であり、constructorはコンストラクタ関数またはクラスの名前です。instanceof演算子はオブジェクトのプロトタイプチェーンをチェックし、オブジェクトが指定されたコンストラクタ関数またはクラスのインスタンスである場合はtrueを返し、それ以外の場合はfalseを返します。</p>

<p>以下は例です：</p>

<code>
  <p><span className='blueviole'>function</span> <span className='blue'>Animal</span>(<span className='blue'>name</span>) {'{'}</p>

  <p><span className='blueviole'>this</span>.name = name;</p>

  <p>{'}'}</p>

  <p><span className='blueviole'>function</span> <span className='blue'>Dog</span>(<span className='blue'>name</span>) {'{'}</p>

  <p>Animal.call(<span className='blueviole'>this</span>, name); </p>

  <p>{' }'}</p>

  <p>Dog.prototype = Object.create(Animal.prototype); </p>

  <p><span className='blueviole'>var</span> <span className='blue'>myDog</span> = <span className='blueviole'>new</span> Dog(<span className='red'>"Buddy"</span>);</p>

  <p>{'console.log'}(myDog instanceof Dog);  <span className='darkgreen'>// true</span></p>

  <p>{'console.log'}(myDog instanceof Animal); <span className='darkgreen'>// true</span></p>
</code>

<p>この例では、AnimalとDogの二つのクラスを定義しています。DogはAnimalを継承しています。新しいDogオブジェクトを作成し、そのオブジェクトがDogおよびAnimalの両方のインスタンスであるかどうかをinstanceof演算子を使用してチェックしています。両方のチェックがtrueを返します。なぜなら、myDogは両方のクラスのインスタンスだからです。</p>

<p>要約すると、instanceofは、そのプロトタイプチェーンをチェックして、オブジェクトが特定のクラスまたはそのサブクラスのインスタンスであるかどうかを判断するために使用されます。</p>


  <b><p>* 翻訳者の助けを借りて書かれたテキスト。 エラーが見つかった場合は、お知らせください *</p></b>
  
  <div className='ads-container'>  
    {/*  реклама  */}
  </div>
 </div>
  )
}

export default JpJSEs5_7;