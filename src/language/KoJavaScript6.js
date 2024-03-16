import React from 'react';

function KoJavaScript6() {
  return (
    <div>
       <div className='ad-container'>  
          {/*  реклама  */}
        </div>

       <h1 className='hy'>JavaScript ES6 (ECMAScript 2015)은 언어에 새로운 기능과 구문 개선을 도입한 JavaScript의 여섯 번째 버전입니다. 다음은 ES6의 주요 기능 중 일부입니다:</h1>

<p>1 . <b className='blueviole'>let </b>그리고 <b className='blueviole'>const</b>: 이들은 기존의 var 키워드를 대체하는 새로운 변수 선언입니다. 더 나은 스코프 규칙을 제공하고 var로 발생할 수 있는 일반적인 실수를 피하는 데 도움이 됩니다.</p>

<p>2. 화살표 함수: 화살표 함수는 함수 표현식을 더 짧은 구문으로 작성할 수 있게 해줍니다. 또한 이들은 this 값을 렉시컬하게 바인딩하여 함수 스코프에 대해 더 쉽게 추론할 수 있게 합니다.</p>

<p>3. 템플릿 리터럴: 이 기능은 문자열 내에서 표현식을 백틱을 사용하여 포함하는 방법을 제공합니다. 이는 동적 내용을 포함하는 문자열을 만드는 것을 더 쉽게 만듭니다.</p>

<p>4. 전개 연산자: 전개 연산자는 세 개의 점(...)으로 표시됩니다. 이는 배열 표현식 또는 문자열과 같은 반복 가능한 항목을 예상되는 곳에 확장할 수 있게 합니다 (함수 호출의 인수 또는 배열 리터럴의 요소에 대한 것).</p>

<p>5. 구조 분해: 구조 분해는 축약 구문을 사용하여 배열 및 객체에서 데이터를 별도의 변수로 추출하는 방법을 제공합니다.</p>

<p>6. 클래스: ES6는 객체를 생성하고 그들의 동작을 정의하는 더 간단하고 직관적인 방법을 제공하는 새로운 클래스 구문을 도입했습니다.</p>

<p>7. 모듈: 모듈은 코드를 별도의 자체 포함 파일로 구성하여 필요할 때 쉽게 가져오고 내보낼 수 있는 방법입니다. 이를 통해 대규모 응용 프로그램의 개발 및 유지 관리를 더 효율적으로 할 수 있습니다. ES6는 import 및 export 키워드를 사용하여 표준 모듈 구문을 도입하여 여러 파일 및 프로젝트 간에 코드를 공유하고 재사용하기 쉽게 만들었습니다.</p>

<p>8. 클래스: ES6는 JavaScript에서 객체 지향 프로그래밍을 가능하게 하는 새로운 클래스 생성 구문을 도입했습니다. 클래스는 속성과 메서드를 가진 객체를 생성하는 데 사용될 수 있으며 다른 클래스에서 상속받을 수도 있습니다. 이 구문은 복잡한 코드를 작성하고 유지 관리하는 것을 더 쉽게 만들며 코드의 가독성과 재사용성을 향상시킬 수 있습니다.</p>

<p>9. 프로미스: 프로미스는 JavaScript에서 비동기 작업을 처리하는 방법입니다. 프로미스는 비동기 작업의 결과를 처리하기 위한 표준화된 방법을 제공합니다. 값을 해결하거나 거부함으로써 비동기 작업의 결과를 처리할 수 있습니다. 프로미스는 다른 기능과 함께 연결되거나 async/await와 결합되어 더 복잡하고 강력한 비동기 작업 흐름을 만들 수 있습니다.</p>

<p>이것들은 ES6에서 소개된 많은 기능 중 일부에 불과합니다. 이러한 기능을 학습하고 사용하면 JavaScript 코드를 크게 개선하고 개발 프로세스를 보다 효율적이고 효과적으로 만들 수 있습니다.</p>

<p><b>ES6 변수</b></p>

 <code>
  <p><span className='blueviole'>const</span> <span className='blue'>num</span> = <span className='blue1'>10</span>; </p>
  <p>{'console'}.<span className='blue'>log</span>(num);<span className='green'> // 10</span></p>
  <p>{'{'}</p>
  <p><span className='blueviole'>const</span> <span className='blue'>num2</span> = <span className='blue1'>20</span>;</p>
  <p>{'console'}.<span className='blue'>log</span>(num2); <span className='green'>// 20</span> </p>
  <p>{'}'}</p>
  <p><span className='green'>// num2 is not defined</span></p>
  <p>{'console'}.<span className='blue'>log</span>(num); <span className='green'>// 10</span></p>
</code>
    
<p>이 코드는 ES6 변수를 사용합니다. 첫 번째 줄은 "num"이라는 상수 변수를 생성하고 그 값으로 10을 할당합니다. 두 번째 줄은 중괄호를 사용하여 코드 블록을 시작하는데, 이는 ES6의 새로운 기능입니다.</p>

<p>이 블록 내부에서 "const" 키워드를 사용하여 "num2"라는 새 변수를 선언하고 값 20을 할당합니다. 이 변수는 "const" 키워드를 사용하여 선언되었기 때문에 블록 범위 변수를 만들어 블록 내에서만 접근할 수 있습니다. 세 번째 줄은 "num2"의 값을 콘솔에 출력하는데, 그 값은 20이 될 것입니다.</p>

<p>블록 이후에는 다른 console.log 문이 호출되지만, 이번에는 블록 바깥에 있는 "num" 변수의 값을 출력합니다. 따라서 접근 가능한 곳에서는 블록 외부에 있기 때문에 오류가 발생하지 않습니다. 마지막으로 코드는 "num2"의 값을 출력하려고 시도하지만, 이것은 블록 내에서 선언되었고 블록 외부에서 접근할 수 없기 때문에 "num2가 정의되지 않았다"는 오류가 발생합니다.</p>

<p><b>ES6 변수</b></p>

 <code>
  <p><span className='blueviole'>const</span> <span className='blue'>name</span> = <span className='red'>"Leo"</span>;</p>
  <p><span className='blueviole'>const</span> <span className='blue'>name</span> = <span className='red'>"Kevin"</span>; <span className='green'>// 식별자 (name)가 이미 선언되었습니다</span></p>
  <p><span className='blueviole'>const</span> <span className='blue'>name</span> = <span className='red'>"Leo"</span>;</p>
  <p><span className='blueviole'>if</span> (<span className='blue1'>true</span>) {'{'}</p>
  <p><span className='blueviole'>const</span> <span className='blue'>name</span> = <span className='red'>"Mike"</span>;</p>
  <p>{'console'}.<span className='blue'>log</span>(name); <span className='green'>// Mike</span></p>
  <p>{'}'}</p>
  <p>{'console'}.<span className='blue'>log</span>(name); <span className='green'>// Leo</span></p>
</code>

<p>이 코드는 상수 변수 "name"을 선언하고 다른 값을 가지고 다시 선언하려고 시도하면 "식별자 'name'이 이미 선언되었습니다"라는 오류가 발생합니다.</p>

<p>그런 다음 코드는 "name"을 "Leo"로 다시 선언하고 if 문으로 블록 범위를 만듭니다. 블록 내부에서 새 변수 "name"이 값 "Mike"로 선언되고 그 값을 콘솔에 출력합니다. 블록 외부에서 원래 변수 "name"은 값 "Leo"로 여전히 유효 범위에 있으며 콘솔에 출력됩니다.</p>

<p>따라서 이 코드의 출력은 "식별자 'name'이 이미 선언되었습니다"가 먼저 나오고 그 다음에 "Mike"와 "Leo"가 나옵니다.</p>

<p><b>ES6 변수</b></p>   

 <code>
    <p><span className='blueviole'>if</span> (<span className='blue1'>true</span>) {'{'}</p>

    <p><span className='green'>// 시간적인 죽은 지대</span></p>

    <p>{'console'}.<span className='blue'>log</span>(<span className='blueviole'>typeof</span> value); <span className='green'>// value가 정의되지 않았습니다</span></p>

    <p><span className='blueviole'>let</span> <span className='blue'>value</span> = <span className='blue1'>10</span>;</p>

    <p>{'} '}</p>

    <p>{'console'}.<span className='blue'>log</span>(<span className='blueviole'>typeof</span> value); <span className='green'>//undefined</span></p>
 </code>

<p><b>let</b> 키워드는 블록 내에서 변수 <b>value</b>를 선언하는 데 사용됩니다. 그러나 블록 내에서 <b>value</b>의 선언 전에 <b>typeof value</b>를 호출하면 JavaScript 엔진이 변수가 아직 정의되지 않았으므로 ReferenceError를 throw합니다. 이를 시간적 죽은 지대라고하며 변수의 생성과 선언 사이에 액세스 할 수없는 시간을 참조합니다. 블록 외부의 <b>console.log(typeof value)</b> 문은 <b>value</b>가 현재 범위에서 정의되지 않았기 때문에 <b>undefined</b>를 반환합니다.</p>

<p>두 번째 코드 블록에서:</p>

 <code>
    <p><span className='blueviole'>if</span>(<span className='blue1'>true</span>) {'{'}</p>
    
    <p><span className='blueviole'>let</span> <span className='blue'>value</span> = <span className='blue1'>10</span>;</p>

    <p>{'}'}</p>
  </code>

<p>변수 <b>value</b>가 블록 내에서 선언되고 값 <b>10</b>이 할당됩니다. 그러나 블록이 전역 범위에 있지 않으며 <b>value</b>가 외부 범위에 반환되거나 할당되지 않았으므로 블록이 실행을 완료하면 <b>value</b>의 값은 사실상 손실됩니다.</p>

<p><b>ES6 변수</b></p>

 <code>
    <p><span className='blueviole'>for</span>(<span className='blueviole'>var</span> <span className='blue'>i</span> = <span className='blue1'>0</span>; i {'<'} <span className='blue1'>5</span>; i++) {'{'}</p>

    <p><span className='green'>// 여기에 코드 작성</span></p>

    <p>{'}'}</p>

    <p>{'console'}.<span className='blue'>log</span>(i); <span className='green'>// 5</span> </p>

    <hr/>

    <p><span className='blueviole'>for</span>(<span className='blueviole'>let</span> <span className='blue'>i</span> = <span className='blue1'>0</span>; i {'<'} <span className='blue1'>5</span>; i++) {'{'}</p>

    <p><span className='green'>// 여기에 코드 작성</span></p>

    <p>{' }'}</p>

   <p>{'console'}.<span className='blue'>log</span>(i); <span className='green'>// i가 정의되지 않았습니다</span> </p>
 </code>

<p>이 코드는 for 루프에서 var와 let을 사용한 변수 스코핑의 차이를 보여줍니다. 첫 번째 예제에서 i 변수는 var를 사용하여 선언되며 함수 수준의 스코프를 갖습니다. 이는 변수가 for 루프 외부에 존재함을 의미하므로 콘솔에 출력될 때 i의 값은 5입니다.</p>

<p>두 번째 예제에서 i는 let을 사용하여 선언되며 블록 수준의 스코프를 갖습니다. 이는 변수가 for 루프 블록 내에서만 존재함을 의미하므로 루프 외부에서는 접근할 수 없습니다. 따라서 루프 외부에서 i를 콘솔에 출력하면 i가 정의되지 않았다는 참조 오류가 발생합니다.</p>

<p><b>ES6 Spread Operator</b></p>

<p>전개 연산자는 ES6에서 도입된 새로운 기능으로, 반복 가능한 객체를 개별 요소로 확장하거나 펼칠 수 있습니다. 이 반복 가능한 객체는 배열, 문자열 또는 기타 반복 가능한 객체일 수 있습니다.</p>

<p><b>전개 연산자는 세 개의 점 (...)으로 표시되며 다양한 방법으로 사용할 수 있습니다. 여기에 몇 가지 예시가 있습니다:</b></p>

<p>1. 배열을 연결하는 데 전개 연산자 사용:</p>

 <code>
    <p><span className='blueviole'>const</span> <span className='blue'>array1</span> = [<span className='blue1'>1, 2, 3</span>];</p>

    <p><span className='blueviole'>const</span> <span className='blue'>array2</span> = [<span className='blue1'>4, 5, 6</span>]; </p>

    <p><span className='blueviole'>const</span> <span className='blue'>newArray</span> = [...array1, ...array2]; </p>

    <p>{'console'}.<span className='blue'>log</span>(newArray); <span className='green'>// [1, 2, 3, 4, 5, 6]</span></p>
  </code>

  <p>2. 배열의 복사본을 만드는 데 전개 연산자 사용:</p>

  <code>
    <p><span className='blueviole'>const</span> <span className='blue'>array1</span> = [<span className='blue1'>1, 2, 3</span>];</p>

    <p><span className='blueviole'>const</span> <span className='blue'>array2</span> = [...array1];</p>

    <p>{'console'}.<span className='blue'>log</span>(array2); <span className='green'>// [1, 2, 3]</span></p>
  </code>

  <p>3. 함수에 인수를 전달하는 데 전개 연산자 사용:</p>

  <code>
    <p><span className='blueviole'>function</span> <span className='blue'>sum</span>(<span className='blue1'>a, b, c</span>) {'{'}</p>
    
    <p><span className='blueviole'>return</span> a + b + c; </p>

    <p>{'}'}</p>

    <p><span className='blueviole'>const</span> <span className='blue'>numbers</span> = [<span className='blue1'>1, 2, 3</span>]; </p>

    <p><span className='blueviole'>const</span> <span className='blue'>result</span> = sum(...numbers);</p>

    <p>{'console'}.<span className='blue'>log</span>(result); <span className='green'>// 6</span></p>
  </code>

  <p>4. 객체를 병합하는 데 전개 연산자 사용:</p>

<code>
  <p><span className='blueviole'>const</span> <span className='blue'>object1</span> = {'{'} x: <span className='blue1'>1</span>, y: <span className='blue1'>2</span> {'}'}; </p>
  <p><span className='blueviole'>const</span> <span className='blue'>object2</span> = {'{'} z: <span className='blue1'>3</span> {'}'};</p>
  <p><span className='blueviole'>const</span> <span className='blue'>mergedObject</span> = {'{'} ...object1, ...object2 {'}'};</p>
  <p>{'console'}.<span className='blue'>log</span>(mergedObject); <span className='green'>// {'{'} x: 1, y: 2, z: 3 {'}'}</span></p>
</code>

<p>모든 이 예시에서 전개 연산자는 반복 가능한 객체를 개별 요소로 확장하는 데 사용됩니다. 이는 코드를 단순화하고 가독성을 높일 수 있는 유용한 기능입니다.</p>

<p><b>ES6 구조 분해</b></p>

<p>ES6 구조 분해는 객체나 배열에서 값을 추출하고 변수에 더 간결하고 가독성 있게 할당하는 방법입니다.</p>

<p>예를 들어 다음 객체를 살펴보세요:</p>

<code>
  <p><span className='blueviole'>const</span> <span className='blue'>person</span> = {'{'}</p>
  <p>name: <span className='red'>'John Doe'</span>, </p>
  <p>age: <span className='blue1'>30</span>,</p>
  <p> email: <span className='red'>'john.doe@example.com'</span></p>
  <p>{'};'}</p>
</code>

<p>다음과 같이 각 속성에 개별적으로 접근하는 대신:</p>

<code>
  <p><span className='blueviole'>const</span> <span className='blue'>name</span> = person.name;</p>
  <p><span className='blueviole'>const</span> <span className='blue'>age</span> = person.age; </p>
  <p><span className='blueviole'>const</span> <span className='blue'>email</span> = person.email; </p>
</code>

<p>더 간결한 방법으로 각 속성을 변수에 할당하기 위해 구조 분해를 사용할 수 있습니다:</p>

<code><p> <span className='blueviole'>const</span> {'{'} <span className='blue'>name, age, email</span> {'}'} = person; </p></code>

<p>이렇게 하면 세 개의 변수 <b>(name, age, email)</b>이 생성되고 person 객체의 해당 속성 값으로 할당됩니다.</p>

<p>배열에서도 구조 분해를 사용할 수 있습니다. 예를 들어:</p>

<code>
  <p><span className='blueviole'>const</span> <span className='blue'>numbers</span> = [<span className='blue1'>1, 2, 3, 4, 5</span>]; </p>
  <p><span className='blueviole'>const</span> [<span className='blue'>first</span>, <span className='blue'>second</span>, ...<span className='blue'>rest</span>] = numbers; </p>
  <p>{'console'}.<span className='blue'>log</span>(first); <span className='green'>// 1</span></p>
  <p>{'console'}.<span className='blue'>log</span>(second); <span className='green'>// 2</span></p>
  <p>{'console'}.<span className='blue'>log</span>(rest); <span className='green'>// [3, 4, 5]</span></p>
</code>

<p>이렇게 하면 세 개의 변수 <b>(first, second, rest)</b>가 생성되고, 각각 numbers 배열의 처음 두 요소와 나머지 요소의 값이 할당됩니다.</p>

<p>구조 분해는 중첩된 객체와 배열에서도 사용할 수 있으며, 값이 분해되는 경우 변수에 기본값을 할당할 수도 있습니다.</p>

<p>전반적으로, 구조 분해는 ES6에서 코드를 더 읽기 쉽고 간결하게 만들어주는 강력한 기능입니다.</p>

<p><b>ES6 사이클 (for - of)</b></p>

<p>ES6에서는 JavaScript에 새로운 종류의 루프인 <b>for...of</b> 루프가 도입되었습니다. 이 루프는 배열, 문자열, 맵, 세트 등과 같은 반복 가능한 객체의 요소를 반복하는 데 사용됩니다.</p>

<p>다음은 배열을 반복하는 <b>for...of</b> 루프를 사용하는 예시입니다:</p>

 <code>
    <p><span className='blueviole'>const</span> <span className='blue'>arr</span> = [<span className='blue1'>1, 2, 3, 4, 5</span>]; </p>

    <p><span className='blueviole'>for</span> (<span className='blueviole'>let</span> <span className='blue'>num</span> <span className='blueviole'>of</span> arr) {'{'}</p>

    <p>{'console'}.<span className='blue'>log</span>(num);</p>

    <p>{'} '}</p>
  </code>

<p>이 예시에서 <b>for...of</b> 루프는 <b>arr</b> 배열의 각 요소를 반복하고 콘솔에 기록합니다.</p>

<p>또한 <b>for...of</b> 루프를 사용하여 문자열의 문자를 반복할 수 있습니다:</p>

 <code>
    <p><span className='blueviole'>const</span> <span className='blue'>str</span> = <span className='red'>"Hello, world!"</span>; </p>

    <p><span className='blueviole'>for</span> (<span className='blueviole'>let</span> <span className='blue'>char</span> <span className='blueviole'>of</span> str) {'{'}</p>

    <p>{'console'}.<span className='blue'>log</span>(char);</p>

    <p>{'}'}</p>
  </code>

<p>이 예시에서 <b>for...of</b> 루프는 <b>str</b> 문자열의 각 문자를 반복하고 콘솔에 기록합니다.</p>

<p>또한 <b>for...of</b> 루프를 사용하여 Map 객체의 키 또는 값에 반복할 수도 있습니다:</p>

<code>
    <p><span className='blueviole'>const</span> <span className='blue'>map</span> = <span className='blueviole'>new</span> Map {'(['} </p>

    <p>[<span className='red'>'a'</span>, <span className='blue1'>1</span>],</p>

    <p>[<span className='red'>'b'</span>, <span className='blue1'>2</span>], </p>

    <p>[<span className='red'>'c'</span>, <span className='blue1'>3</span>] </p>

    <p>{']);'}</p>

    <p><span className='blueviole'>for</span> (<span className='blueviole'>let</span> [<span className='blue'>key, value</span>] <span className='blueviole'>of</span> map) {'{'}</p>

   <p>{'console'}.<span className='blue'>log</span>(key, value);</p>

   <p>{'}'}</p>
</code>

<p>이 예시에서 <b>for...of</b> 루프는 <b>map</b> 객체의 각 키-값 쌍을 반복하고 콘솔에 기록합니다.</p>

<p>전반적으로 <b>for...of</b> 루프는 반복 가능한 객체를 반복하는 것을 간단하게 해주는 JavaScript 언어에 유용한 추가 기능입니다.</p>

<p><b>ES6 함수 나머지 매개변수</b></p>

<p>ES6 함수 나머지 매개변수는 함수가 배열 형태로 무한한 수의 인수를 허용할 수 있도록 하는 기능입니다. 이는 매개변수 이름 뒤에 세 개의 점 (...)으로 표시됩니다.</p>

<p>나머지 매개변수를 사용하는 예시는 다음과 같습니다:</p>

 <code>
    <p><span className='blueviole'>function</span> <span className='blue'>sum</span>(...<span className='blue'>numbers</span>) {'{'}</p>

    <p><span className='blueviole'>let</span> <span className='blueviole'>result</span> = <span className='blue1'>0</span>; </p>

    <p><span className='blueviole'>for</span> (<span className='blueviole'>let</span> <span className='blue'>number</span> <span className='blueviole'>of</span> numbers) {'{'}</p>

    <p>{'result += number;'}</p>

    <p>&nbsp;{' }'}</p>

    <p><span className='blueviole'>return</span> result; </p>

    <p>{'}'}</p>

    <p>{'console'}.<span className='blue'>log</span>(sum(<span className='blue1'>1, 2, 3</span>)); <span className='green'>// 출력: 6</span></p>

    <p>{'console'}.<span className='blue'>log</span>(sum(<span className='blue1'>4, 5, 6, 7</span>)); <span className='green'>// 출력: 22</span></p>
  </code>

<p>위 예시에서 sum 함수는 나머지 매개변수 ...numbers를 사용하여 무한한 수의 인수를 받습니다. 그런 다음 numbers 배열을 for...of 루프를 사용하여 값을 더하고 결과를 반환합니다.</p>

<p>나머지 매개변수는 각 매개변수를 명시적으로 정의하지 않고도 가변 수의 인수를 처리하려는 함수를 작성할 때 유용합니다. 배열을 조작하거나 값 집합에 대한 수학 연산을 수행하는 함수에서 자주 사용됩니다.</p>

<p>전반적으로 나머지 매개변수는 함수를 더 유연하고 다용도로 만드는 편리한 기능입니다.</p>

<p><b>화살표 함수</b></p>

<p>화살표 함수는 ES6(ECMAScript 2015)에서 소개된 JavaScript의 함수를 작성하는 간결한 방법입니다. 기존의 함수 표현식에 비해 더 간결한 구문을 제공하여 코드를 읽고 쓰기 쉽게 만듭니다.</p>

<p>두 매개변수를 받아 그 합계를 반환하는 전통적인 함수 표현식의 예시는 다음과 같습니다:</p>

  <code>
    <p><span className='blueviole'>function</span> <span className='blue'>sum</span>(<span className='blue1'>a, b</span>) {'{'}</p>

    <p><span className='blueviole'>return</span> a + b; </p>

    <p>{'}'}</p>
  </code>
  
  <p>동일한 기능은 다음과 같이 화살표 함수를 사용하여 작성할 수 있습니다:</p>

<code><p><span className='blueviole'>const</span> <span className='blue'>sum</span> = (<span className='blue1'>a, b</span>) {'=>'} a + b; </p></code>

<p>이 예제에서는 함수가 <b>{'=>.'}</b> 화살표 구문을 사용하여 정의됩니다. 매개 변수 <b>(a, b)</b>는 괄호로 묶여 있고, 그 뒤로 <b>{'=>'}</b> 화살표와 함수 본문 <b>a + b.</b>이 따릅니다. 함수 본문이 단일 문장이기 때문에 중괄호와 <b>return</b> 키워드를 생략할 수 있습니다.</p>

<p>화살표 함수는 익명 함수로도 사용되며, 변수에 할당되어 다른 함수에 전달될 수도 있습니다. 다음은 배열을 받아 각 요소를 두 배로 한 새 배열을 반환하는 화살표 함수의 예입니다:</p>

<code><p><span className='blueviole'>const</span> <span className='blue'>doubleArray</span> = <span className='blue'>arr</span> {'=>'} arr.map(<span className='blue'>item</span> {'=>'} item * <span className='blue1'>2</span>); </p></code>

<p>이 예에서 화살표 함수{' (item => item * 2)'}는 <b>map()</b> 메서드의 인수로 전달되어 배열의 각 요소에 함수를 적용하고 수정된 값이 포함된 새 배열을 반환합니다.</p>

<p>화살표 함수는 렉시컬 <b>this</b> 바인딩도 갖고 있습니다. 즉, 이는 함수 자체의 <b>this</b>가 아니라 주변 범위의 <b>this</b> 값을 참조합니다. 이는 객체 메서드와 이벤트 핸들러를 다룰 때 화살표 함수가 특히 유용하게 만듭니다.</p>

<p>전반적으로 화살표 함수는 JavaScript에서 함수를 작성하는 더 간결하고 읽기 쉬운 방법을 제공하여 코드를 이해하고 유지하는 것을 더 쉽게 만듭니다.</p>
  
<p><b>프로토 타입</b></p>

  <p>JavaScript에서 모든 객체는 내부 속성으로 [[Prototype]](때로는 "dunder proto"라고 함)이라는 것을 갖고 있습니다. 이는 다른 객체나 null을 가리킵니다. 이 속성은 상속을 구현하고 객체가 프로토 타입에서 속성과 메서드를 상속받도록 허용하는 데 사용됩니다.</p>

<p>ES5에서는 생성자 함수와 prototype 속성을 사용하여 프로토 타입을 생성할 수 있습니다. 다음은 예입니다:</p>

<code>
  <p><span className='blueviole'>function</span> <span className='blue'>Person</span>(<span className='blue1'>name, age</span>) {'{'}</p>

  <p><span className='blueviole'>this</span>.name = name; </p>

  <p><span className='blueviole'>this</span>.age = age; </p>

  <p>&nbsp;{'} '}</p>

  <p>Person.prototype.greet = <span className='blueviole'>function</span>() {'{'}</p>

  <p>{'console'}.<span className='blue'>log</span>(<span className='red'>`안녕, 나의 이름은</span> ${'{'}<span className='blueviole'>this</span>.name{'}'} <span className='red'>이고 나이는</span> ${'{'}<span className='blueviole'>this</span>.age{'}'} <span className='red'>살입니다.`</span>);</p>

  <p>{'} '}</p>

  <p><span className='blueviole'>const</span> <span className='blue'>john</span> = <span className='blueviole'>new</span> Person(<span className='red'>"John"</span>, <span className='blue1'>30</span>); </p>

  <p>john.greet(); <span className='green'>// "안녕, 나의 이름은 John이고 나이는 30살입니다."</span></p>
</code>

<p>이 예제에서는 <b>Person</b>이라는 생성자 함수를 만들어 <b>name</b>과 <b>age</b>를 매개 변수로 사용하여 객체의 속성으로 설정합니다. 그런 다음 <b>Person</b>의 프로토 타입에 <b>greet</b> 메서드를 추가합니다. 이 메서드는 콘솔에 사람의 이름과 나이를 포함한 인사 메시지를 기록합니다.</p>

<p><b>new</b> 키워드와 <b>Person</b> 생성자를 사용하여 새로운 객체를 생성할 때, 새로운 객체의 [[Prototype]] 속성은 <b>Person.prototype</b> 객체를 가리킵니다. 이를 통해 새로운 객체가 프로토 타입에서 <b>greet</b> 메서드를 상속받을 수 있습니다.</p>

<p>ES6에서는 <b>class</b> 구문을 사용하여 클래스와 해당 프로토 타입을 정의할 수 있습니다. 여기서는 ES6 클래스를 사용한 동일한 예제를 살펴봅니다:</p>

<code>
  <p><span className='blueviole'>class</span> <span className='green'>Person</span> {'{'}</p>

  <p>constructor(<span className='blue'>name, age</span>) {'{'}</p>

  <p><span className='blueviole'>this</span>.name = name; </p>

  <p><span className='blueviole'>this</span>.age = age;</p>

  <p>{'}'}</p>

  <p>{'greet() { '}</p>

  <p>{'console'}.<span className='blue'>log</span>(<span className='red'>`안녕, 나의 이름은</span> ${'{'}<span className='blueviole'>this</span>.name{'}'} <span className='red'>이고 나이는</span> ${'{'}<span className='blueviole'>this</span>.age{'}'} <span className='red'>살입니다.`</span>);</p>

  <p>&nbsp;{'}'}</p>

  <p>{'}'}</p>

  <p><span className='blueviole'>const</span> <span className='blue'>john</span> = <span className='blueviole'>new</span> Person(<span className='red'>"John"</span>, <span className='blue1'>30</span>); </p>

  <p>john.greet(); <span className='green'>// "안녕, 나의 이름은 John이고 나이는 30살입니다."</span></p>
</code>

<p>이 예에서는 <b>name</b>과 <b>age</b>를 매개 변수로 사용하여 객체의 속성으로 설정하는 생성자를 가진 <b>Person</b> 클래스를 정의합니다. 그런 다음 클래스에 직접 <b>greet</b> 메서드를 정의합니다. 내부적으로 <b>class</b> 구문은 생성자 함수를 생성하고 해당 프로토 타입을 클래스의 프로토 타입으로 설정합니다.</p>

<p>ES5와 ES6 모두 JavaScript에서 상속을 구현하기 위해 프로토 타입 개념을 사용하지만 프로토 타입을 정의하는 구문은 다릅니다. ES6 클래스는 클래스를 생성하고 해당 프로토 타입을 정의하는 더 간결하고 직관적인 구문을 제공하며, ES5 프로토 타입은 프로토 타입을 정의하는 방법에 대해 더 많은 유연성과 제어를 제공합니다.</p>

<p><b> 클래스 (정적 메서드)</b></p>

<p>ES6에서는 클래스가 객체 블루프린트를 만드는 방법으로 소개되었습니다. 클래스는 데이터와 기능을 캡슐화하는 객체를 만들기 위한 템플릿입니다. 클래스의 하나의 기능은 정적 메서드를 정의할 수 있는 능력입니다. 이는 클래스 자체에 호출되는 메서드로 클래스의 인스턴스가 아니라 클래스 자체에서 호출됩니다.</p>

<p>정적 메서드는 클래스 자체에 속하는 메서드로서 클래스의 인스턴스가 아닌 클래스에 호출됩니다. 클래스의 인스턴스를 먼저 생성하지 않고도 클래스에서 호출할 수 있습니다.</p>

<p>다음은 정적 메서드를 포함하는 클래스의 예입니다:</p>

<code>
  <p><span className='blueviole'>class</span> <span className='green'>Car</span> {'{'}</p>

  <p>constructor(<span className='blue'>make, model</span>) {'{'}</p>

  <p><span className='blueviole'>this</span>.make = make; </p>

  <p><span className='blueviole'>this</span>.model = model; </p>

  <p>{'}'}</p>

  <p><span className='blueviole'>static</span> compare(<span className='blue'>car1, car2</span>) {'{'}</p>

  <p><span className='blueviole'>if</span> (car1.make === car2.make) {'{'}</p>

  <p><span className='blueviole'>return</span> <span className='red'>"동일한 제조사"</span>; </p>

  <p>&nbsp;{'}'} <span className='blueviole'>else</span> {'{'}</p>

  <p><span className='blueviole'>return</span> <span className='red'>"다른 제조사"</span>; </p>

  <p>&nbsp;&nbsp;{' }'}</p>

  <p>&nbsp;{' }'}</p>

  <p>{' }'}</p>

  <p><span className='blueviole'>let</span> <span className='blue'>car1</span> = <span className='blueviole'>new</span> Car(<span className='red'>"Honda", "Civic"</span>); </p>

  <p><span className='blueviole'>let</span> <span className='blue'>car2</span> = <span className='blueviole'>new</span> Car(<span className='red'>"Toyota", "Corolla"</span>); </p>

  <p>console.<span className='blue'>log</span>(Car.compare(car1, car2)); <span className='green'>// "다른 제조사"</span> </p>
</code>

<p>위 예제에서 Car 클래스에는 compare라는 정적 메서드가 있습니다. 이 메서드는 두 개의 Car 객체를 매개 변수로 사용하고 그들이 동일한 제조사인지 아닌지를 나타내는 문자열을 반환합니다. compare 메서드는 클래스의 인스턴스가 아닌 Car 클래스 자체에서 호출할 수 있습니다.</p>

<p>compare 메서드에서는 this 키워드가 사용되지 않습니다. 이는 메서드가 클래스의 인스턴스가 아니라 클래스의 인수로 Car 객체를 가져와서 그들의 제조사 속성을 비교하기 때문입니다.</p>

<p>ES5에서는 정적 메서드를 생성자 함수의 prototype 속성을 사용하여 생성자 함수에 정의할 수 있습니다. 다음은 위의 ES6 클래스가 ES5에서 어떻게 보일 수 있는지의 예입니다:</p>

<code>
  <p><span className='blueviole'>function</span> <span className='blue'>Car</span>(<span className='blue'>make, model</span>) {'{'}</p>

  <p><span className='blueviole'>this</span>.make = make; </p>

  <p><span className='blueviole'>this</span>.model = model; </p>

  <p>{'} '}</p>

  <p>Car.compare = <span className='blueviole'>function</span>(<span className='blue'>car1, car2</span>) {'{'}</p>

  <p><span className='blueviole'>if</span> (car1.make === car2.make) {'{'}</p>

  <p><span className='blueviole'>return</span> <span className='red'>"동일한 제조사"</span>; </p>

  <p>&nbsp;{'}'} <span className='blueviole'>else</span>  {'{'}</p>

  <p><span className='blueviole'>return</span> <span className='red'>"다른 제조사"</span>; </p>

  <p>&nbsp;{'}'}</p>

  <p>{'}; '}</p>

  <p><span className='blueviole'>let</span> <span className='blue'>car1</span> = <span className='blueviole'>new</span> Car(<span className='red'>"Honda", "Civic"</span>); </p>

  <p><span className='blueviole'>let</span> <span className='blue'>car2</span> = <span className='blueviole'>new</span> Car(<span className='red'>"Toyota", "Corolla"</span>); </p>

  <p>console.<span className='blue'>log</span>(Car.compare(car1, car2)); <span className='green'>// "다른 제조사"</span> </p>
</code>

<p>ES5 예제에서는 compare 메서드가 Car 생성자 함수에 직접 정의되어 있으며 prototype 속성에 정의되지 않았습니다. 이로 인해 메서드는 Car 생성자 함수 자체에서 호출될 수 있습니다.</p>

<p><b>Symbol</b></p>

<p>ES6에서 Symbol은 고유 식별자를 나타내는 새로운 원시 데이터 유형입니다. 문자열이나 숫자와는 달리 심볼은 고유하고 변경할 수 없다는 것이 보장되어 있으며, 이로써 완전히 고유한 객체 키나 속성을 만드는 데 유용합니다.</p>

<p>심볼을 생성하려면 다음과 같이 <b>Symbol()</b> 함수를 사용할 수 있습니다:</p>

<code><p><span className='blueviole'>const</span> <span className='blue'>mySymbol</span> = Symbol();</p></code>

<p>나중에 식별하기 쉽게 심볼에 설명을 추가할 수도 있습니다:</p>

<code><p><span className='blueviole'>const</span> <span className='blue'>mySymbol</span> = Symbol(<span className='red'>'내 심볼'</span>); </p></code>

<p>심볼은 객체 키나 속성으로 사용될 수 있습니다:</p>

<code>
  <p><span className='blueviole'>const</span> <span className='blue'>mySymbol</span> = Symbol(<span className='red'>'내 심볼'</span>); </p>

  <p><span className='blueviole'>const</span> <span className='blue'>obj</span> = {'{}'}; </p>

  <p>{'obj[mySymbol]'} = <span className='red'>'안녕, 세상아!'</span>; </p>

  <p>{"console"}.<span className='blue'>log</span>{'(obj[mySymbol])'}; <span className='green'>// 결과: 안녕, 세상아!</span> </p>
</code>

<p>심볼을 사용하는 주요 이점 중 하나는 고유하고 복제할 수 없기 때문에 실수로 접근하거나 수정할 수 없습니다. 이로써 객체의 개인 또는 내부 속성을 생성하는 데 이상적입니다.</p>

<p>심볼의 또 다른 이점은 잘 알려진 심볼을 정의할 수 있다는 것입니다. 이는 언어에서 특정 의미나 동작을 가진 내장된 심볼입니다. 예를 들어, Symbol.iterator 심볼은 객체의 기본 반복자를 정의하는 데 사용됩니다.</p>
      
<p>전반적으로, 심볼은 JavaScript에서 고유한 식별자를 만들고 객체에 사용자 지정 동작을 정의하는 강력하고 유연한 방법을 제공합니다.</p>

      <p><b>Promise</b></p>

<p>Promise는 ES6에서 소개된 기능으로 비동기 작업을 더 쉽고 구조화된 방식으로 처리할 수 있습니다.</p>

<p>간단히 말해, Promise는 아직 사용 가능하지 않지만 향후 어느 시점에는 사용 가능할 수 있는 값을 나타내는 객체입니다. 이는 비동기 작업(예: API 요청 또는 데이터베이스 쿼리)의 결과를 처리하는 방법을 제공하며, 실행의 주 스레드를 차단하지 않습니다.</p>

<p>Promise에는 세 가지 상태가 있습니다: 대기 중, 이행됨 또는 거부됨. Promise가 대기 중인 경우, 나타내는 작업이 아직 완료되지 않았음을 의미합니다. Promise가 이행되었을 때, 작업이 성공적으로 완료되었음을 의미하고 결과가 사용 가능합니다. Promise가 거부되었을 때, 작업이 실패하고 오류가 발생했음을 의미합니다.</p>

<p>다음은 API에서 데이터를 가져오는 데 Promise를 사용하는 예제입니다:</p>

<code>
  <p><span className='blueviole'>fetch</span>(<span className='blue1'>'https://jsonplaceholder.typicode.com/todos/1'</span>) </p>

  <p>.<span className='blue'>then</span>(response {'=>'} response.<span className='blue'>json</span>()) </p>

  <p>.<span className='blue'>then</span>(data {'=>'} {'console'}.<span className='blue'>log</span>(data))</p>

  <p>.<span className='blue'>catch</span>(error {'=>'} {'console'}.<span className='blue'>error</span>(error))</p>
</code>

<p>이 예제에서 <b>fetch</b>는 API에서의 응답으로 해결되는 Promise를 반환하는 함수입니다. <b>then</b> 메서드는 Promise에서 호출되며, 이는 Promise가 이행될 때 실행되는 콜백 함수를 가져옵니다. 첫 번째 <b>then</b> 콜백은 응답을 JSON으로 파싱하고 반환합니다. 두 번째 then 콜백은 파싱된 데이터를 콘솔에 기록합니다. <b>catch</b> 메서드는 작업 중 발생하는 모든 오류를 처리하기 위해 호출됩니다.</p>

<p>Promise는 <b>Promise</b> 생성자를 사용하여 수동으로 생성할 수도 있습니다:</p>

<code>
  <p><span className='blueviole'>const</span> <span className='blue'>promise</span> = <span className='blueviole'>new</span> Promise{'(('}<span className='blue'>resolve, reject</span>{')'} {'=>'} {"{"}</p>

  <p>{"setTimeout(() => { "}</p>

  <p> resolve(<span className='red'>'성공!'</span>) </p>

  <p>&nbsp;{" }"}, <span className='blue1'>1000</span>{')'} </p>

  <p>{"}) "}</p>

  <p> promise.then(<span className='blue'>result</span> {"=> console"}.<span className='blue'>log</span>(result)) <span className='green'>// 결과: 성공!</span> </p>
</code>

<p>이 예제에서는 두 개의 매개 변수, 즉 <b>resolve와 reject</b>를 사용하여 함수로 Promise가 생성됩니다. <b>resolve</b> 함수는 1초 후에 인수 <b>'성공!'</b>으로 호출됩니다. <b>then</b> 메서드는 Promise에서 호출되며, 이는 Promise가 이행될 때 실행되는 콜백 함수를 가져옵니다. 콜백은 결과를 콘솔에 기록합니다.</p>
  
<b><p>* 번역기를 사용하여 작성된 텍스트입니다. 오류를 발견하시면 알려주시면 감사하겠습니다 *</p></b>
   
   <div className='ads-container'>  
   {/*  реклама  */}
  </div>
    </div>
  )
}

export default KoJavaScript6;