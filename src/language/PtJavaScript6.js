import React from 'react';

function PtJavaScript6() {
  return (
    <div>
      <div className='ad-container'>  
          {/*  реклама  */}
        </div> 
        
     <h1 className='hy'>JavaScript ES6 (ECMAScript 2015) é a sexta versão do JavaScript que introduziu novos recursos e melhorias de sintaxe para a linguagem. Aqui estão algumas características-chave do ES6:</h1>

<p>1. <b className='blueviole'>let </b>e <b className='blueviole'>const</b>: Estas são novas declarações de variáveis que substituem a antiga palavra-chave var. Elas fornecem melhores regras de escopo e ajudam a evitar erros comuns que podem ocorrer com <b className='blueviole'>var</b>.</p>

<p>2. Funções de seta: As funções de seta fornecem uma sintaxe mais curta para escrever expressões de função. Elas também vinculam o valor this de forma léxica, facilitando o entendimento do escopo da função.</p>

<p>3. Literais de modelo: Este recurso fornece uma maneira de incorporar expressões dentro de strings usando acentos graves em vez de aspas. Isso facilita a criação de strings com conteúdo dinâmico.</p>

<p>4. Operador de propagação: O operador de propagação é representado por três pontos (...). Ele permite que um iterável, como uma expressão de matriz ou string, seja expandido nos lugares onde se espera zero ou mais argumentos (para chamadas de função) ou elementos (para literais de matriz).</p>

<p>5. Destruturação: A desestruturação fornece uma maneira de extrair dados de arrays e objetos em variáveis separadas usando uma sintaxe abreviada.</p>

<p>6. Classes: O ES6 introduziu uma nova sintaxe de classe que fornece uma maneira mais simples e intuitiva de criar objetos e definir seu comportamento.</p>

<p>7. Módulos: Os módulos são uma maneira de organizar o código em arquivos separados e autocontidos que podem ser facilmente importados e exportados conforme necessário. Isso permite um desenvolvimento e manutenção mais eficientes de aplicativos grandes. O ES6 introduziu uma sintaxe de módulo padronizada usando as palavras-chave import e export, facilitando o compartilhamento e reutilização de código entre vários arquivos e projetos.</p>

<p>8. Classes: O ES6 introduziu uma nova sintaxe para criar classes, que permite a programação orientada a objetos em JavaScript. As classes podem ser usadas para criar objetos com propriedades e métodos e também podem herdar de outras classes. Essa sintaxe facilita a escrita e manutenção de código complexo e pode melhorar a legibilidade e reutilização do seu código.</p>

<p>9. Promessas: As promessas são uma maneira de lidar com operações assíncronas em JavaScript. Elas fornecem uma maneira padronizada de lidar com o resultado de uma operação assíncrona, seja resolvendo ou rejeitando um valor. As promessas podem ser encadeadas e combinadas com outros recursos como async/await para criar fluxos de trabalho assíncronos mais complexos e poderosos.</p>

<p>Estas são apenas algumas das muitas características introduzidas no ES6. Aprender e usar essas características pode melhorar significativamente o seu código JavaScript e tornar o seu processo de desenvolvimento mais eficiente e eficaz.</p>

<p><b>Variáveis ES6</b></p>

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

<p>Este código está usando variáveis ES6. A primeira linha cria uma variável constante chamada "num" e atribui o valor 10 a ela. A segunda linha inicia um bloco de código usando chaves, o que é um novo recurso no ES6.</p>

<p>Dentro deste bloco, uma nova variável chamada "num2" é declarada usando a palavra-chave "const" e recebe o valor 20. Esta variável é acessível apenas dentro do bloco porque foi declarada usando a palavra-chave "const", que cria uma variável de escopo de bloco. A terceira linha imprime o valor de "num2" no console, que será 20.</p>

<p>Após o bloco, outra instrução console.log é chamada, mas desta vez ela imprime o valor da variável "num", que está fora do bloco e, portanto, acessível. Finalmente, o código tenta imprimir o valor de "num2", mas como foi declarado dentro do bloco e não é acessível fora dele, ocorrerá um erro dizendo que "num2 não está definido".</p>

<p><b>Variáveis ES6</b></p>

<code>
    <p><span className='blueviole'>const</span> <span className='blue'>name</span> = <span className='red'>"Leo"</span>;</p>

    <p><span className='blueviole'>const</span> <span className='blue'>name</span> = <span className='red'>"Kevin"</span>; <span className='green'>//O identificador (name) já foi declarado</span></p>

    <p><span className='blueviole'>const</span> <span className='blue'>name</span> = <span className='red'>"Leo"</span>;</p>

    <p><span className='blueviole'>if</span> (<span className='blue1'>true</span>) {'{'}</p>

    <p><span className='blueviole'>const</span> <span className='blue'>name</span> = <span className='red'>"Mike"</span>;</p>

    <p>{'console'}.<span className='blue'>log</span>(name); <span className='green'>// Mike</span></p>

    <p>{'}'}</p>
    
    <p>{'console'}.<span className='blue'>log</span>(name); <span className='green'>// Leo</span></p>
</code>

<p>Este código declara uma variável constante "name" e depois tenta declará-la novamente com um valor diferente, o que resulta em um erro "O identificador 'name' já foi declarado".</p>

<p>Em seguida, o código redefine "name" como "Leo" e cria um escopo de bloco com uma instrução if. Dentro do bloco, uma nova variável "name" é declarada com o valor "Mike", que é então impresso no console. Fora do bloco, a variável original "name" com o valor "Leo" ainda está em escopo e é impressa no console.</p>

<p>Portanto, a saída deste código é "O identificador 'name' já foi declarado" seguido por "Mike" e "Leo".</p>

<p><b>Variáveis ES6</b></p>

<code>
    <p><span className='blueviole'>if</span> (<span className='blue1'>true</span>) {'{'}</p>

    <p><span className='green'>// Zona de Temporal Dead Zone</span></p>

    <p>{'console'}.<span className='blue'>log</span>(<span className='blueviole'>typeof</span> value); <span className='green'>//value is not defined</span></p>

    <p><span className='blueviole'>let</span> <span className='blue'>value</span> = <span className='blue1'>10</span>;</p>

    <p>{'} '}</p>

    <p>{'console'}.<span className='blue'>log</span>(<span className='blueviole'>typeof</span> value); <span className='green'>//undefined</span></p>
</code>

<p>A palavra-chave <b>let</b> é usada para declarar a variável <b>value</b> dentro do bloco. No entanto, quando <b>typeof value</b> é chamado dentro do bloco antes da declaração de <b>value</b>, o mecanismo JavaScript gera um ReferenceError porque a variável ainda não está definida. Isso é conhecido como Zona de Temporal Dead Zone, que se refere ao período entre a criação de uma variável e sua declaração, onde ela não pode ser acessada. A instrução <b>console.log(typeof value)</b> fora do bloco retorna <b>undefined</b> porque <b>value</b> não está definido no escopo atual.</p>

<p>No segundo bloco de código:</p>
 
 <code>
      <p><span className='blueviole'>if</span>(<span className='blue1'>true</span>) {'{'}</p>
      
      <p><span className='blueviole'>let</span> <span className='blue'>value</span> = <span className='blue1'>10</span>;</p>

      <p>{'}'}</p>
 </code>

 <p>A variável <b>value</b> é declarada e atribuída um valor de <b>10</b> dentro do bloco. No entanto, como o bloco não está no escopo global e <b>value</b> não é retornado ou atribuído a uma variável no escopo externo, o valor de <b>value</b> é efetivamente perdido assim que o bloco termina de executar.</p>

<p><b>Variáveis ES6</b></p>

<code>
  <p><span className='blueviole'>for</span>(<span className='blueviole'>var</span> <span className='blue'>i</span> = <span className='blue1'>0</span>; i {'<'} <span className='blue1'>5</span>; i++) {'{'}</p>
  <p><span className='green'>// Código aqui</span></p>
  <p>{'}'}</p>
  <p>{'console'}.<span className='blue'>log</span>(i); <span className='green'>// 5</span> </p>
  <hr/>
  <p><span className='blueviole'>for</span>(<span className='blueviole'>let</span> <span className='blue'>i</span> = <span className='blue1'>0</span>; i {'<'} <span className='blue1'>5</span>; i++) {'{'}</p>
  <p><span className='green'>// Código aqui</span></p>
  <p>{' }'}</p>
  <p>{'console'}.<span className='blue'>log</span>(i); <span className='green'>// i não está definido</span> </p>
</code>

<p>Este código demonstra a diferença no escopo de variáveis entre o uso de var e let em um loop for. No primeiro exemplo, a variável i é declarada usando var, que tem escopo de nível de função. Isso significa que a variável existe fora do loop for, então o valor de i é 5 quando é impresso no console.</p>

<p>No segundo exemplo, i é declarado usando let, que tem escopo de nível de bloco. Isso significa que a variável só existe dentro do bloco do loop for, então não é acessível fora do loop. Portanto, quando i é impresso no console fora do loop, ele gera um erro de referência dizendo que i não está definido.</p>

<p><b>Operador de Propagação ES6</b></p>

<p>O operador de propagação é um novo recurso introduzido no ES6 que permite espalhar ou expandir um objeto iterável em elementos individuais. Este objeto iterável pode ser um array, uma string ou qualquer outro objeto iterável.</p>

<p><b>O operador de propagação é representado por três pontos (...) e pode ser usado de várias maneiras. Aqui estão alguns exemplos:</b></p>

<p>1. Usando o operador de propagação para concatenar arrays:</p>

<code>
  <p><span className='blueviole'>const</span> <span className='blue'>array1</span> = [<span className='blue1'>1, 2, 3</span>];</p>
  <p><span className='blueviole'>const</span> <span className='blue'>array2</span> = [<span className='blue1'>4, 5, 6</span>]; </p>
  <p><span className='blueviole'>const</span> <span className='blue'>newArray</span> = [...array1, ...array2]; </p>
  <p>{'console'}.<span className='blue'>log</span>(newArray); <span className='green'>// [1, 2, 3, 4, 5, 6]</span></p>
</code>
    
<p>2. Usando o operador de propagação para criar uma cópia de um array:</p>

<code>
  <p><span className='blueviole'>const</span> <span className='blue'>array1</span> = [<span className='blue1'>1, 2, 3</span>];</p>
  <p><span className='blueviole'>const</span> <span className='blue'>array2</span> = [...array1];</p>
  <p>{'console'}.<span className='blue'>log</span>(array2); <span className='green'>// [1, 2, 3]</span></p>
</code>

<p>3. Usando o operador de propagação para passar argumentos para uma função:</p>

<code>
  <p><span className='blueviole'>function</span> <span className='blue'>sum</span>(<span className='blue1'>a, b, c</span>) {'{'}</p>
  <p><span className='blueviole'>return</span> a + b + c; </p>
  <p>{'}'}</p>
  <p><span className='blueviole'>const</span> <span className='blue'>numbers</span> = [<span className='blue1'>1, 2, 3</span>]; </p>
  <p><span className='blueviole'>const</span> <span className='blue'>result</span> = sum(...numbers);</p>
  <p>{'console'}.<span className='blue'>log</span>(result); <span className='green'>// 6</span></p>
</code>

<p>4. Usando o operador de propagação para mesclar objetos:</p>

<code>
  <p><span className='blueviole'>const</span> <span className='blue'>object1</span> = {'{'} x: <span className='blue1'>1</span>, y: <span className='blue1'>2</span> {'}'}; </p>
  <p><span className='blueviole'>const</span> <span className='blue'>object2</span> = {'{'} z: <span className='blue1'>3</span> {'}'};</p>
  <p><span className='blueviole'>const</span> <span className='blue'>mergedObject</span> = {'{'} ...object1, ...object2 {'}'};</p>
  <p>{'console'}.<span className='blue'>log</span>(mergedObject); <span className='green'>// {'{'} x: 1, y: 2, z: 3 {'}'}</span></p>
</code>

<p>Em todos esses exemplos, o operador de propagação é usado para expandir um objeto iterável em elementos individuais. É um recurso útil que pode simplificar seu código e torná-lo mais legível.</p>

<p><b>Destruturação ES6</b></p>

<p>A destruturação ES6 é uma maneira de extrair valores de objetos ou arrays e atribuí-los a variáveis de uma maneira mais concisa e legível.</p>

<p>Por exemplo, considere o seguinte objeto:</p>

<code>
  <p><span className='blueviole'>const</span> <span className='blue'>person</span> = {'{'}</p>
  <p>name: <span className='red'>'John Doe'</span>, </p>
  <p>age: <span className='blue1'>30</span>,</p>
  <p> email: <span className='red'>'john.doe@example.com'</span></p>
  <p>{'};'}</p>
</code>   

<p>Em vez de acessar cada propriedade individualmente assim:</p>

<code>
  <p><span className='blueviole'>const</span> <span className='blue'>name</span> = person.name;</p>
  <p><span className='blueviole'>const</span> <span className='blue'>age</span> = person.age; </p>
  <p><span className='blueviole'>const</span> <span className='blue'>email</span> = person.email; </p>
</code>

<p>Você pode usar a desestruturação para atribuir cada propriedade a uma variável de forma mais concisa:</p>

<code><p> <span className='blueviole'>const</span> {'{'} <span className='blue'>name, age, email</span> {'}'} = person; </p></code>

<p>Isso cria três variáveis <b>(name, age e email)</b> e atribui a elas os valores de suas respectivas propriedades no objeto person.</p>

<p>Você também pode usar a desestruturação com arrays. Por exemplo:</p>

<code>
  <p><span className='blueviole'>const</span> <span className='blue'>numbers</span> = [<span className='blue1'>1, 2, 3, 4, 5</span>]; </p>
  <p><span className='blueviole'>const</span> [<span className='blue'>first</span>, <span className='blue'>second</span>, ...<span className='blue'>rest</span>] = numbers; </p>
  <p>{'console'}.<span className='blue'>log</span>(first); <span className='green'>// 1</span></p>
  <p>{'console'}.<span className='blue'>log</span>(second); <span className='green'>// 2</span></p>
  <p>{'console'}.<span className='blue'>log</span>(rest); <span className='green'>// [3, 4, 5]</span></p>
</code>

<p>Isso cria três variáveis <b>(first, second e rest)</b> e atribui a elas os valores dos dois primeiros elementos no array <b>numbers</b> e o restante dos elementos, respectivamente.</p>

<p>A desestruturação também pode ser usada com objetos e arrays aninhados e até mesmo pode ter valores padrão atribuídos a variáveis caso o valor sendo desestruturado seja undefined.</p>

<p>No geral, a desestruturação é um recurso poderoso no ES6 que pode ajudar a tornar seu código mais legível e conciso.</p>

<p><b>Ciclo ES6 (for - of)</b></p>

<p>O ES6 introduziu um novo tipo de loop em JavaScript chamado loop <b>for...of</b>. Este loop é usado para iterar sobre elementos de um objeto iterável como arrays, strings, maps, sets, etc.</p>

<p>Aqui está um exemplo de uso do loop <b>for...of</b> para iterar sobre um array:</p>

<code>
  <p><span className='blueviole'>const</span> <span className='blue'>arr</span> = [<span className='blue1'>1, 2, 3, 4, 5</span>]; </p>
  <p><span className='blueviole'>for</span> (<span className='blueviole'>let</span> <span className='blue'>num</span> <span className='blueviole'>of</span> arr) {'{'}</p>
  <p>{'console'}.<span className='blue'>log</span>(num);</p>
  <p>{'} '}</p>
</code>

<p>Neste exemplo, o loop <b>for...of</b> itera sobre cada elemento no array <b>arr</b> e o imprime no console.</p>

<p>Também podemos usar o loop <b>for...of</b> para iterar sobre os caracteres em uma string:</p>

<code>
  <p><span className='blueviole'>const</span> <span className='blue'>str</span> = <span className='red'>"Hello, world!"</span>; </p>
  <p><span className='blueviole'>for</span> (<span className='blueviole'>let</span> <span className='blue'>char</span> <span className='blueviole'>of</span> str) {'{'}</p>
  <p>{'console'}.<span className='blue'>log</span>(char);</p>
  <p>{'}'}</p>
</code>

<p>Neste exemplo, o loop <b>for...of</b> itera sobre cada caractere na string <b>str</b> e o registra no console.</p>

<p>Também podemos usar o loop <b>for...of</b> para iterar sobre as chaves ou valores de um objeto Map:</p>

<code>
  <p><span className='blueviole'>const</span> <span className='blue'>map</span> = <span className='blueviole'>new</span> Map {'(['} </p>
  <p>[<span className='red'>'a'</span>, <span className='blue1'>1</span>],</p>
  <p> [<span className='red'>'b'</span>, <span className='blue1'>2</span>], </p>
  <p> [<span className='red'>'c'</span>, <span className='blue1'>3</span>] </p>
  <p>{']);'}</p>
  <p><span className='blueviole'>for</span> (<span className='blueviole'>let</span> [<span className='blue'>key, value</span>] <span className='blueviole'>of</span> map) {'{'}</p>
  <p>{'console'}.<span className='blue'>log</span>(key, value);</p>
  <p>{'}'}</p>
</code>

<p>Neste exemplo, o loop <b>for...of</b> itera sobre cada par chave-valor no objeto <b>map</b> e os registra no console.</p>

<p>No geral, o loop <b>for...of</b> é uma adição útil à linguagem JavaScript que simplifica a iteração sobre objetos iteráveis.</p>

<p><b>Parâmetro de rest de função ES6</b></p>

<p>O parâmetro de rest de função ES6 é um recurso que permite que uma função aceite um número indefinido de argumentos como um array. É indicado por três pontos (...) seguidos pelo nome do parâmetro.</p>

<p>Aqui está um exemplo de uso do parâmetro de rest:</p>

<code>
  <p><span className='blueviole'>function</span> <span className='blue'>sum</span>(...<span className='blue'>numbers</span>) {'{'}</p>
  <p><span className='blueviole'>let</span> <span className='blueviole'>result</span> = <span className='blue1'>0</span>; </p>
  <p><span className='blueviole'>for</span> (<span className='blueviole'>let</span> <span className='blue'>number</span> <span className='blueviole'>of</span> numbers) {'{'}</p>
  <p>{'result += number;'}</p>
  <p>&nbsp;{' }'}</p>
  <p><span className='blueviole'>return</span> result; </p>
  <p>{'}'}</p>
  <p>{'console'}.<span className='blue'>log</span>(sum(<span className='blue1'>1, 2, 3</span>)); <span className='green'>// Saída: 6</span></p>
  <p>{'console'}.<span className='blue'>log</span>(sum(<span className='blue1'>4, 5, 6, 7</span>)); <span className='green'>// Saída: 22</span></p>
</code>

<p>No exemplo acima, a função sum aceita um número indefinido de argumentos usando o parâmetro de rest ...numbers. Em seguida, ela percorre o array de números usando um loop for...of para somar os valores e retorna o resultado.</p>

<p>O parâmetro de rest é útil quando você deseja escrever uma função que possa lidar com um número variável de argumentos sem ter que definir explicitamente cada argumento. É comumente usado em funções que manipulam arrays ou realizam operações matemáticas em um conjunto de valores.</p>

<p>No geral, o parâmetro de rest é um recurso conveniente que torna mais fácil escrever funções que são mais flexíveis e versáteis.</p>

<p><b>Funções de seta </b></p>

<p>As funções de seta são uma forma concisa de escrever funções em JavaScript, introduzidas no ES6 (ECMAScript 2015). Elas fornecem uma sintaxe mais compacta em comparação com as expressões de função tradicionais, tornando o código mais fácil de ler e escrever.</p>

<p>Aqui está um exemplo de uma expressão de função tradicional que recebe dois parâmetros e retorna a soma deles:</p>

 <code>
    <p><span className='blueviole'>function</span> <span className='blue'>sum</span>(<span className='blue1'>a, b</span>) {'{'}</p>

    <p><span className='blueviole'>return</span> a + b; </p>

    <p>{'}'}</p>
  </code>

<p>A mesma função pode ser escrita usando uma função de seta da seguinte forma:</p>

<code><p><span className='blueviole'>const</span> <span className='blue'>sum</span> = (<span className='blue1'>a, b</span>) {'=>'} a + b; </p></code>

<p>Neste exemplo, a função é definida usando a sintaxe de seta <b>{'=>.'}</b>. Os parâmetros <b>(a, b)</b> são encapsulados entre parênteses, seguidos pela seta <b>{'=>'}</b> e pelo corpo da função <b>a + b.</b> Como o corpo da função é uma única instrução, as chaves e a palavra-chave <b>return</b> podem ser omitidas.</p>

<p>As funções de seta também podem ser usadas como funções anônimas, atribuídas a variáveis e passadas como argumentos para outras funções. Aqui está um exemplo de uma função de seta que recebe um array e retorna um novo array com cada elemento dobrado:</p>

<code><p><span className='blueviole'>const</span> <span className='blue'>doubleArray</span> = <span className='blue'>arr</span> {'=>'}arr.map(<span className='blue'>item</span> {'=>'} item * <span className='blue1'>2</span>); </p></code>

<p>Neste exemplo, a função de seta{' (item => item * 2)'} é passada como argumento para o método <b>map()</b>, que aplica a função a cada elemento do array e retorna um novo array com os valores modificados.</p>

<p>As funções de seta também têm um vínculo léxico de <b>this</b>, o que significa que this se refere ao valor de <b>this</b> no escopo circundante, em vez do próprio <b>this</b> da função. Isso torna as funções de seta particularmente úteis para trabalhar com métodos de objetos e manipuladores de eventos.</p>

<p>No geral, as funções de seta fornecem uma maneira mais concisa e legível de escrever funções em JavaScript, tornando o código mais fácil de entender e manter.</p>

<p><b>Protótipo</b></p>

<p>Em JavaScript, todo objeto tem uma propriedade interna chamada [[Prototype]] (às vezes referida como "dunder proto"), que se refere a outro objeto ou null. Esta propriedade é usada para implementar a herança e permitir que objetos herdem propriedades e métodos de seus protótipos.</p>

<p>No ES5, você pode criar um protótipo usando funções construtoras e a propriedade prototype. Aqui está um exemplo:</p>
   
<code>
  <p><span className='blueviole'>function</span> <span className='blue'>Person</span>(<span className='blue1'>name, age</span>) {'{'}</p>
  <p><span className='blueviole'>this</span>.name = name; </p>
  <p><span className='blueviole'>this</span>.age = age; </p>
  <p>&nbsp;{'} '}</p>
  <p>Person.prototype.greet = <span className='blueviole'>function</span>() {'{'}</p>
  <p>{'console'}.<span className='blue'>log</span>(<span className='red'>`Hello, my name is</span> ${'{'}<span className='blueviole'>this</span>.name{'}'} <span className='red'>and I am</span> ${'{'}<span className='blueviole'>this</span>.age{'}'} <span className='red'>years old.`</span>);</p>
  <p>{'} '}</p>
  <p><span className='blueviole'>const</span> <span className='blue'>john</span> = <span className='blueviole'>new</span> Person(<span className='red'>"John"</span>, <span className='blue1'>30</span>); </p>
  <p>john.greet(); <span className='green'>// "Hello, my name is John and I am 30 years old."</span></p>
</code>

<p>Neste exemplo, criamos uma função construtora chamada <b>Person</b> que recebe um <b>name</b> e uma <b>age</b> como argumentos e os define como propriedades no objeto. Em seguida, adicionamos um método <b>greet</b> ao protótipo de <b>Person</b> usando o objeto <b>Person.prototype</b>. Este método registra uma mensagem de saudação no console que inclui o nome e a idade da pessoa.</p>

<p>Quando criamos um novo objeto usando a palavra-chave <b>new</b> e o construtor <b>Person</b>, a propriedade [[Prototype]] do novo objeto apontará para o objeto <b>Person.prototype</b>. Isso permite que o novo objeto herde o método <b>greet</b> de seu protótipo.</p>

<p>No ES6, você pode usar a sintaxe de <b>class</b> para definir uma classe e seu protótipo. Aqui está o mesmo exemplo usando classes ES6:</p>   

<code>
  <p><span className='blueviole'>class</span> <span className='green'>Person</span> {'{'}</p>
  <p>constructor(<span className='blue'>name, age</span>) {'{'}</p>
  <p><span className='blueviole'>this</span>.name = name; </p>
  <p><span className='blueviole'>this</span>.age = age;</p>
  <p>{'}'}</p>
  <p>{'greet() { '}</p>
  <p>{'console'}.<span className='blue'>log</span>(<span className='red'>`Olá, meu nome é</span> ${'{'}<span className='blueviole'>this</span>.name{'}'} <span className='red'>e tenho</span> ${'{'}<span className='blueviole'>this</span>.age{'}'} <span className='red'>anos de idade.`</span>);</p>
  <p>&nbsp;{'}'}</p>
  <p>{'}'}</p>
  <p><span className='blueviole'>const</span> <span className='blue'>john</span> = <span className='blueviole'>new</span> Person(<span className='red'>"John"</span>, <span className='blue1'>30</span>); </p>
  <p>john.greet(); <span className='green'>// "Olá, meu nome é John e tenho 30 anos de idade."</span></p>
</code>

<p>Neste exemplo, definimos uma classe chamada <b>Person</b> com um construtor que recebe um <b>name</b> e uma <b>age</b> e os define como propriedades no objeto. Em seguida, definimos um método <b>greet</b> diretamente na classe. Sob o capô, a sintaxe da <b>class</b> cria uma função construtora e define seu protótipo para o protótipo da classe.</p>

<p>Tanto o ES5 quanto o ES6 usam o conceito de protótipos para implementar herança em JavaScript, mas a sintaxe para definir protótipos é diferente. As classes ES6 fornecem uma sintaxe mais concisa e intuitiva para criar classes e definir seus protótipos, enquanto os protótipos do ES5 fornecem mais flexibilidade e controle sobre como os protótipos são definidos.</p>

<p><b>Classe (métodos estáticos)</b></p>

<p>No ES6, as classes foram introduzidas como uma forma de criar modelos de objetos. Classes são um modelo para criar objetos que encapsulam dados e funcionalidades. Uma característica das classes é a capacidade de definir métodos estáticos, que são métodos chamados na própria classe, em vez de em uma instância da classe.</p>

<p>Um método estático é um método que pertence à própria classe, em vez de a qualquer instância da classe. Pode ser chamado na classe sem ter que criar uma instância da classe primeiro.</p>

<p>Aqui está um exemplo de uma classe com um método estático:</p>

<code>
  <p><span className='blueviole'>class</span> <span className='green'>Car</span> {'{'}</p>
  <p>constructor(<span className='blue'>make, model</span>) {'{'}</p>
  <p><span className='blueviole'>this</span>.make = make; </p>
  <p><span className='blueviole'>this</span>.model = model; </p>
  <p>{'}'}</p>
  <p><span className='blueviole'>static</span> compare(<span className='blue'>car1, car2</span>) {'{'}</p>
  <p><span className='blueviole'>if</span> (car1.make === car2.make) {'{'}</p>
  <p><span className='blueviole'>return</span> <span className='red'>"Mesma marca"</span>; </p>
  <p>&nbsp;{'}'} <span className='blueviole'>else</span> {'{'}</p>
  <p><span className='blueviole'>return</span> <span className='red'>"Marca diferente"</span>; </p>
  <p>&nbsp;&nbsp;{' }'}</p>
  <p>&nbsp;{' }'}</p>
  <p>{' }'}</p>
  <p><span className='blueviole'>let</span> <span className='blue'>car1</span> = <span className='blueviole'>new</span> Car(<span className='red'>"Honda", "Civic"</span>); </p>
  <p><span className='blueviole'>let</span> <span className='blue'>car2</span> = <span className='blueviole'>new</span> Car(<span className='red'>"Toyota", "Corolla"</span>); </p>
  <p>console.<span className='blue'>log</span>(Car.compare(car1, car2)); <span className='green'>// "Marca diferente"</span> </p>
</code>   
   
<p>No exemplo acima, a classe Car possui um método estático chamado compare. Este método recebe dois objetos Car como parâmetros e retorna uma string indicando se eles têm a mesma marca ou não. O método compare pode ser chamado na própria classe Car, em vez de em uma instância da classe.</p>

<p>Observe que no método compare, a palavra-chave this não é usada, pois o método não é chamado em uma instância da classe. Em vez disso, o método recebe dois objetos Car como parâmetros e compara suas propriedades de marca.</p>

<p>No ES5, métodos estáticos podem ser definidos em uma função construtora usando a propriedade prototype da função construtora. Aqui está um exemplo de como a classe ES6 acima pode parecer em ES5:</p>

<code>
  <p><span className='blueviole'>function</span> <span className='blue'>Car</span>(<span className='blue'>make, model</span>) {'{'}</p>
  <p><span className='blueviole'>this</span>.make = make; </p>
  <p><span className='blueviole'>this</span>.model = model; </p>
  <p>{'} '}</p>
  <p>Car.compare = <span className='blueviole'>function</span>(<span className='blue'>car1, car2</span>) {'{'}</p>
  <p><span className='blueviole'>if</span> (car1.make === car2.make) {'{'}</p>
  <p><span className='blueviole'>return</span> <span className='red'>"Mesma marca"</span>; </p>
  <p>&nbsp;{'}'} <span className='blueviole'>else</span>  {'{'}</p>
  <p><span className='blueviole'>return</span> <span className='red'>"Marca diferente"</span>; </p>
  <p>&nbsp;{'}'}</p>
  <p>{'}; '}</p>
  <p><span className='blueviole'>let</span> <span className='blue'>car1</span> = <span className='blueviole'>new</span> Car(<span className='red'>"Honda", "Civic"</span>); </p>
  <p><span className='blueviole'>let</span> <span className='blue'>car2</span> = <span className='blueviole'>new</span> Car(<span className='red'>"Toyota", "Corolla"</span>); </p>
  <p>console.<span className='blue'>log</span>(Car.compare(car1, car2)); <span className='green'>// "Marca diferente"</span> </p>
</code>

<p>No exemplo ES5, o método compare é definido diretamente na função construtora Car, em vez de em sua propriedade prototype. Isso permite que o método seja chamado na própria função construtora Car. </p>

<p><b>Símbolo</b></p>

<p>No ES6, o Symbol é um novo tipo de dado primitivo que representa um identificador único. Ao contrário de strings ou números, símbolos são garantidos como únicos e imutáveis, o que os torna úteis para criar chaves de objeto ou propriedades que são completamente únicas.</p>

<p>Para criar um símbolo, você pode usar a função <b>Symbol()</b>, assim:</p>

<code><p><span className='blueviole'>const</span> <span className='blue'>mySymbol</span> = Symbol();</p></code>

<p>Você também pode adicionar uma descrição a um símbolo para facilitar sua identificação mais tarde, assim:</p>

<code><p><span className='blueviole'>const</span> <span className='blue'>mySymbol</span> = Symbol(<span className='red'>'Meu Símbolo'</span>); </p></code>

<p>Símbolos podem ser usados como chaves de objeto ou propriedades, assim:</p>

<code>
  <p><span className='blueviole'>const</span> <span className='blue'>mySymbol</span> = Symbol(<span className='red'>'Meu Símbolo'</span>); </p>
  <p><span className='blueviole'>const</span> <span className='blue'>obj</span> = {'{}'}; </p>
  <p>{'obj[mySymbol]'} = <span className='red'>'Olá, Mundo!'</span>; </p>
  <p>{"console"}.<span className='blue'>log</span>{'(obj[mySymbol])'}; <span className='green'>// Saída: Olá, Mundo!</span> </p>
</code>

<p>Um dos principais benefícios de usar símbolos é que eles não podem ser acessados ou modificados acidentalmente, porque são únicos e não podem ser replicados. Isso os torna ideais para criar propriedades privadas ou internas em objetos.</p>

<p>Outro benefício dos símbolos é que eles podem ser usados para definir símbolos conhecidos, que são símbolos embutidos que têm um significado ou comportamento específico na linguagem. Por exemplo, o símbolo Symbol.iterator é usado para definir o iterador padrão para um objeto.</p>

<p>No geral, símbolos fornecem uma maneira poderosa e flexível de criar identificadores únicos e definir comportamentos personalizados para objetos em JavaScript.</p>

<p><b>Promessa</b></p>

<p>Uma Promise é uma funcionalidade introduzida no ES6 que permite lidar com operações assíncronas de forma mais fácil e organizada.</p>

<p>Em termos simples, uma Promise é um objeto que representa um valor que pode não estar disponível ainda, mas estará em algum momento no futuro. Ela fornece uma maneira de lidar com os resultados de operações assíncronas (como solicitações de API ou consultas de banco de dados) sem bloquear a thread principal de execução.</p>

<p>Uma Promise tem três estados: pendente, realizada ou rejeitada. Quando uma Promise está pendente, significa que a operação que ela representa ainda não foi concluída. Quando uma Promise é realizada, significa que a operação foi bem-sucedida e o resultado está disponível. Quando uma Promise é rejeitada, significa que a operação falhou e um erro está disponível.</p>

<p>Aqui está um exemplo de como usar uma Promise para buscar dados de uma API:</p>

<code>
  <p><span className='blueviole'>fetch</span>(<span className='blue1'>'https://jsonplaceholder.typicode.com/todos/1'</span>) </p>
  <p>.<span className='blue'>then</span>(response {'=>'} response.<span className='blue'>json</span>()) </p>
  <p>.<span className='blue'>then</span>(data {'=>'} {'console'}.<span className='blue'>log</span>(data))</p>
  <p>.<span className='blue'>catch</span>(error {'=>'} {'console'}.<span className='blue'>error</span>(error))</p>
</code>

<p>Neste exemplo, <b>fetch</b> é uma função que retorna uma Promise que é resolvida com a resposta da API. O método <b>then</b> é chamado na Promise, que recebe uma função de retorno de chamada que é executada quando a Promise é cumprida. O primeiro retorno de chamada <b>then</b> analisa a resposta como JSON e a retorna. O segundo retorno de chamada <b>then</b> registra os dados analisados no console. O método <b>catch</b> é chamado para lidar com quaisquer erros que ocorram durante a operação.</p>

<p>Promessas também podem ser criadas manualmente usando o construtor <b>Promise</b>:</p>

<code>
  <p><span className='blueviole'>const</span> <span className='blue'>promise</span> = <span className='blueviole'>new</span> Promise{'(('}<span className='blue'>resolve, reject</span>{')'} {'=>'} {"{"}</p>
  <p>{"setTimeout(() => { "}</p>
  <p> resolve(<span className='red'>'Sucesso!'</span>) </p>
  <p>&nbsp;{" }"}, <span className='blue1'>1000</span>{')'} </p>
  <p>{"}) "}</p>
  <p> promise.then(<span className='blue'>result</span> {"=> console"}.<span className='blue'>log</span>(result)) <span className='green'>// Saída: Sucesso!</span> </p>
</code>

<p>Neste exemplo, a Promise é criada com uma função que recebe dois parâmetros: <b>resolve e reject.</b> A função <b>resolve</b> é chamada após um segundo com o argumento <b>'Sucesso!'</b>. O método <b>then</b> é chamado na Promise, que recebe uma função de retorno de chamada que é executada quando a Promise é cumprida. O retorno de chamada registra o resultado no console.</p>
    
<b><p>* Texto escrito com a ajuda de um tradutor. Se encontrar algum erro, por favor, avise-nos *</p></b>
    
    <div className='ads-container'>  
      {/*  реклама  */}
      </div>
    </div>
  )
}

export default PtJavaScript6;