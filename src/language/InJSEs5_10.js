import React from 'react';

function InJSEs5_10() {
  return (
    <div>
      <div className='ad-container'>  
          {/*  реклама  */}
        </div>

        <h1>जावास्क्रिप्ट ES5 उदाहरण</h1>

<p><b>संख्या की घात की गणना करने के लिए फ़ंक्शन</b></p>
    
<code>
    <p><span className='blueviole'>function</span> <span className='blue'>pow</span>(<span className='blue1'>num, exp</span>) {"{ "}</p>

    <p><span className='blueviole'>var</span> <span className='blue'>cnt</span> = <span className='blue1'>0</span>; </p>

    <p><span className='blueviole'>var</span> <span className='blue'>res</span> = <span className='blue1'>1</span>; </p>

    <p><span className='blueviole'>while</span> (cnt {'<'} exp) {"{"}</p>

    <p>{" res *= num;"}</p>

    <p>{" cnt++; "}</p>

    <p>&nbsp;{" }"}</p>

    <p><span className='blueviole'>return</span> res;</p>

    <p>{"}"}</p>
</code>   

<p><b>pow(num, exp)</b>: यह फ़ंक्शन एक संख्या की घात की गणना करती है। यह दो पैरामीटर्स, num और exp, लेती है, और num की घात के exp ताकत का मान वापस देती है। फ़ंक्शन एक वाइल लूप और गणना का उपयोग करती है और cnt बार तक बार-बार खुद को गुणा करती है exp बार तक गुना करने के लिए एक काउंटर का उपयोग करती है, जब तक cnt exp तक नहीं पहुंचता।</p>

<p><b>एक संख्या की घात की गणना के लिए फ़ंक्शन (वैकल्पिक संस्करण)</b></p>

<code>
  <p><span className='blueviole'>function</span> <span className='blue'>pow2</span>(<span className='blue1'>num1, num2</span>) {'{'}</p>

  <p><span className='blueviole'>var</span> <span className='blue'>num3</span> = <span className='blue1'>1</span>;</p>

  <p><span className='blueviole'>for</span> (<span className='blueviole'>var</span> <span className='blue'>i</span> = <span className='blue1'>1</span>; i {'<='} num2; i++) {'{'}</p>

  <p>{'num3 *= num1;'}</p>

  <p>&nbsp;{'}'}</p>

  <p><span className='blueviole'>return</span> num3;</p>

  <p>{'}'}</p>
</code>

<p><b>pow2(num1, num2)</b>: यह फ़ंक्शन एक संख्या की घात की गणना करती है। यह दो पैरामीटर्स, num1 और num2, लेती है, और num1 की घात के num2 ताकत का मान वापस देती है। फ़ंक्शन एक फ़ॉर लूप का उपयोग करती है और num1 को अपने आप से num2 बार तक बार-बार गुना करती है, जब तक लूप पूरा नहीं होता है।</p>

<p><b>एक संख्या के प्राइम होने की जाँच करने के लिए फ़ंक्शन</b></p>

<code>
  <p><span className='blueviole'>function </span><span className='blue'>isPrime</span>(<span className='blue1'>number</span>) {'{'}</p> 

  <p><span className='blueviole'>if</span> (number {'<'} <span className='blue1'>2</span>) {'{'}</p> 

  <p><span className='blueviole'>return</span> <span className='blue1'>false</span>;</p> 

  <p>{'}'} <span className='blueviole'>else if</span> (number == undefined) {'{'}</p> 

  <p><span className='blueviole'>return</span> undefined;</p> 

  <p>{'}'} <span className='blueviole'>else</span> {'{'}</p> 

  <p><span className='blueviole'>for</span> (<span className='blueviole'>var</span> <span className='blueviole'>i</span> = <span className='blue1'>2</span>; i {'<'} number; i++) {'{'}</p>

   <p> <span className='blueviole'>if</span> (number % i === <span className='blue1'>0</span>) {'{'}</p> 

   <p><span className='blueviole'>return</span> <span className='blue1'>false</span>;</p>

   <p>&nbsp;{' }'}</p>

   <p>{'}'}</p>

   <p><span className='blueviole'>return</span> <span className='blue1'>true</span>;</p>

   <p>&nbsp;{'}'}</p>

   <p>{'}'}</p>
</code>

<p><b>isPrime(number)</b>: यह फ़ंक्शन यह जांचती है कि क्या एक संख्या प्राइम है या नहीं। यह एक पैरामीटर संख्या लेती है और यदि संख्या प्राइम है तो true वापस करती है, अन्यथा यह false वापस करती है। फ़ंक्शन सबसे पहले यह जांचती है कि क्या संख्या 2 से कम है, जिस मामले में यह तुरंत false वापस करती है। यदि संख्या undefined है, तो यह undefined वापस करती है। अन्यथा, फ़ंक्शन एक for लूप का उपयोग करती है ताकि किसी भी संख्या की जाँच की जाए जो 2 और संख्या (विशिष्ट) के बीच संख्या को बिना शेष संभागित किए बार-बार करता है। यदि ऐसी कोई संख्या मिलती है, तो फ़ंक्शन false वापस करती है। यदि कोई ऐसी संख्या नहीं मिलती है, तो फ़ंक्शन true वापस करती है।</p>

<h4>JavaScript में तारों का उपयोग करके पिरामिड बनाना</h4>

<code>
    <p><span className='blueviole'>var</span> <span className='blue'>x</span> = <span className='blue1'>6</span>; </p>

    <p><span className='blueviole'>var</span> <span className='blue'>string</span> = <span className='red'>""</span>;</p>

    <p><span className='blueviole'>for</span> (<span className='blueviole'>var</span> <span className='blue'>i</span> = <span className='blue1'>1</span>; i {'<='} x; i++) {"{"}</p>

    <p><span className='blueviole'>for</span> (<span className='blueviole'>var</span> <span className='blue'>y</span> = <span className='blue1'>1</span>; y {'<= '}x - i; y++) {"{"}</p>

    <p>string += <span className='red'>" "</span>;</p>

    <p>{"}"}</p>

    <p> <span className='blueviole'>for</span> (<span className='blueviole'>var</span> <span className='blue'>k</span> = <span className='blue1'>0</span>; k {'<'} <span className='blue1'>2</span> * i - <span className='blue1'>1</span>; k++) {"{"}</p>

    <p>string += <span className='red'>"*"</span>; </p>

    <p>&nbsp;{" }"}</p>

    <p>string += <span className='red'>"\n"</span>;</p>

    <p>{"}"}</p>

    <p>{"console"}.<span className='blue'>log</span>(string);</p>
</code>

<p>यह कोड तारों ('*') और रिक्त स्थानों का उपयोग करके एक पिरामिड पैटर्न बनाता है।</p>

<p>कोड 6 के एक मान 'x' और एक खाली स्ट्रिंग चर 'string' को पहले परिभाषित करके शुरू होता है। फिर, यह एक for लूप का उपयोग करके पिरामिड के प्रत्येक पंक्ति के माध्यम से लूप करता है, 1 से शुरू होकर 'x' तक।</p>

<p>पहले for लूप के भीतर, दूसरे for लूप का उपयोग तारों से पहले रिक्त स्थानों को जोड़ने के लिए किया जाता है। यह प्रत्येक पंक्ति के लिए (x-i) संख्या के रिक्त स्थानों को प्रति पंक्ति जोड़ता है।</p>

<p>फिर, दूसरे for लूप का उपयोग स्ट्रिंग में तारों को जोड़ने के लिए किया जाता है। प्रत्येक पंक्ति में जोड़े गए तारों की संख्या को फार्मूला 2*i-1 द्वारा दिया जाता है, जहां 'i' वर्तमान पंक्ति संख्या है।</p>   

<p>अंत में, प्रत्येक पंक्ति के अंत में एक न्यूलाइन चरेक्टर जोड़ा जाता है, और पूरी गई स्ट्रिंग को कंसोल में 'console.log()' विधि का उपयोग करके प्रिंट किया जाता है।</p>  

<p><b>तारों और संख्याओं का उपयोग करके पिरामिड पैटर्न बनाना</b></p>

<code>
    <p><span className='blueviole'>var</span> <span className='blue'>lineCount</span> = <span className='blue1'>5</span>;</p>

    <p><span className='blueviole'>var</span> <span className='blue'>symb</span> = <span className='red'>'*'</span>;</p>

    <p><span className='blueviole'>var</span> <span className='blue'>result</span> = <span className='red'>''</span>; </p>

    <p><span className='blueviole'>for</span> (<span className='blueviole'>var</span> <span className='blue'>i</span> = <span className='blue1'>0</span>; i {'<'} lineCount; i++){'{'}</p>

    <p><span className='blueviole'>for</span> (<span className='blueviole'>var</span> <span className='blue'>j</span> = <span className='blue1'>0</span>; j {'<'} lineCount - i; j++){'{'}</p>

    <p>result += <span className='red'>'1'</span>; </p>

    <p>&nbsp;{' }'}</p>

    <p>result += symb + <span className='red'>'\n;'</span></p>

    <p> symb += <span className='red'>' *'</span>;</p>

    <p>{"}"}</p>

    <p>{"console"}.<span className='blue'>log</span>(result)</p>
</code>

<p>कोड तारों और संख्याओं के पैटर्न को एक पिरामिड आकार में बनाता है। सबसे पहले, पिरामिड के लिए पंक्तियों की संख्या और उपयोग करने के लिए प्रतीक की परिभाषा की जाती है (इस मामले में, ''). फिर, एक से अधिक लूप्स का उपयोग प्रत्येक पंक्ति को बनाने के लिए किया जाता है, आधार से शुरू होकर शीर्ष तक एक सिंबल को एक-एक करके जोड़ते हुए। पैटर्न में नंबर को '1' से प्रतिनिधित किया जाता है। प्रत्येक पिरामिड पंक्ति को उचित संख्या में '1' को जोड़कर, उसके बाद प्रतीक को जोड़कर और फिर एक न्यूलाइन चरेक्टर जोड़कर बनाया जाता है। प्रत्येक पंक्ति के लिए उपयोग किए गए प्रतीक को प्रति पंक्ति एक अतिरिक्त '' जोड़ने के लिए अद्यतन किया जाता है। अंत में, परिणामकारी पैटर्न को 'कंसोल.लॉग' फ़ंक्शन का उपयोग करके कंसोल में प्रिंट किया जाता है।</p>

<h3>फ़ाइबोनाची श्रृंखला उत्पन्न करने के लिए जावास्क्रिप्ट फ़ंक्शन</h3>


<p><b>उदाहरण</b></p>
    
<code>
  <p><span className='blueviole'>function </span><span className='blue'>fibo</span>(<span className='blue1'>num</span>) {"{"}</p>

  <p><span className='blueviole'>if</span> (isNaN(+num)) {"{"}</p>

  <p><span className='blueviole'>return</span> <span className='red'>'त्रुटि'</span>; </p>

  <p>{" } "}</p>

  <p><span className='blueviole'>var</span> <span className='blue'>firstN</span> = <span className='blue1'>0</span>; </p>

  <p><span className='blueviole'>var</span> <span className='blue'>secondN</span> = <span className='blue1'>1</span>; </p>

  <p><span className='blueviole'>while </span>(firstN {'<'} num) {"{"}</p>

  <p>{" console"}.<span className='blue'>log</span>(firstN); </p>

  <p>{" secondN = firstN + secondN; "}</p>

  <p>{"firstN = secondN - firstN; "}</p>

  <p>&nbsp;{"}"}</p>

  <p>{"}"}</p>

  <p>fibo(<span className='blue'>55</span>);</p>
</code>

<p><b>उदाहरण</b></p>

<code>
  <p><span className='blueviole'>function</span> <span className='blue'>fibonachi</span>(<span className='blue1'>num</span>) {"{"}</p>

  <p><span className='blueviole'>var</span> <span className='blue'>num1</span> = <span className='blue1'>0</span>;</p>

  <p><span className='blueviole'>var</span> <span className='blue'>num2</span> = <span className='blue1'>1</span>;</p>

  <p> <span className='blueviole'>if</span> (<span className='blueviole'>typeof</span> num !== <span className='red'>"संख्या"</span>) {'{'}</p>

  <p>{'console'}.<span className='blue'>error</span>(<span className='red'>"केवल संख्याएँ लिखें"</span>);</p>

  <p>{"}"} <span className='blueviole'>else</span> {"{"}</p>

  <p><span className='blueviole'>for</span> (<span className='blueviole'>var</span> <span className='blue'>i</span>; num1 {'<'} num;) {"{"}</p>

  <p>{" console"}.<span className='blue'>log</span>(num1);</p>

  <p>{" i = num1 + num2;"}</p>

  <p>{"num1 = num2;"}</p>

  <p>{"num2 = i;"}</p>

  <p>&nbsp;&nbsp;{" }"}</p>

  <p>&nbsp;{" }"}</p>

  <p>{"}"}</p>

  <p>fibonachi(<span className='blue'>100</span>);</p>
</code>

<p><b>उदाहरण</b></p>
    
<code> 
  <p><span className='blueviole'>function</span> <span className='blue'>fibonachi</span>(<span className='blue1'>n</span>) {"{"}</p>

  <p> <span className='blueviole'>if</span> (<span className='blueviole'>typeof</span> n === <span className='red'>"number"</span>) {'{'}</p>

  <p> <span className='blueviole'>var</span> <span className='blue'>a</span> = <span className='blue1'>0</span>; </p>

  <p><span className='blueviole'>var</span> <span className='blue'>b</span> = <span className='blue1'>1</span>;  </p>

  <p><span className='blueviole'>var</span> <span className='blue'>result</span>;</p>

  <p><span className='blueviole'>for</span> {'(var i = 0; i < n; i++)'} {"{"}</p>

  <p>{"console"}.<span className='blue'>log</span>(a){';'}</p>

  <p>{"result = a + b;"}</p>

  <p>{"  a = b;"}</p>

  <p>{" b = result; "}</p>

  <p>&nbsp;{"}"}</p>
  
  <p><span className='blueviole'>return</span> <span className='blue1'>result</span>;</p>

  <p>{"}"} <span className='blueviole'>else</span> {"{"}</p>

  <p>{'console'}.<span className='blue'>error</span>(<span className='red'>"कृपया केवल संख्या लिखें"</span>){';'}</p>

  <p>&nbsp;{"}"}</p>

  <p>{"}"}</p>
</code>


<p>ये तीन अलग-अलग जावास्क्रिप्ट में फ़िबोनाची श्रृंखला जनरेटर के विभिन्न अमल हैं</p>

<p>पहला अमल (फिबो) एक वाइल लूप का उपयोग करके एक दिए गए सीमा (नंबर) तक फिबोनाची संख्याएँ उत्पन्न करने और उन्हें कंसोल.लॉग () का उपयोग करके प्रिंट करता है। यह पहले यह जांचता है कि इनपुट एक वैध संख्या है या नहीं, और अगर नहीं, तो यह एक त्रुटि संदेश लौटाता है।</p>

<p>दूसरा अमल (फिबोनाची) एक फॉर लूप का उपयोग करता है तकनीकी सीमा (नंबर) तक फिबोनाची संख्याएँ उत्पन्न करने और उन्हें कंसोल.लॉग () का उपयोग करके प्रिंट करता है। यह पहले यह जांचता है कि इनपुट एक वैध संख्या है या नहीं, और अगर नहीं, तो यह कंसोल में एक त्रुटि संदेश प्रिंट करता है।</p>    

<p>तीसरा अमल (फिबोनाची) भी तकनीकी सीमा (न) तक फिबोनाची संख्याएँ उत्पन्न करने के लिए एक फॉर लूप का उपयोग करता है और उन्हें कंसोल.लॉग () का उपयोग करके प्रिंट करता है। यह पहले यह जांचता है कि इनपुट एक वैध संख्या है या नहीं, और अगर नहीं, तो यह कंसोल में एक त्रुटि संदेश प्रिंट करता है। इस अमल में अगली फिबोनाची संख्या उत्पन्न करने के लिए तीन चरों का उपयोग किया जाता है: ए, बी, और परिणाम। यह ए = 0 और बी = 1 के साथ शुरू होता है, और प्रत्येक अवर्तन के लिए, यह ए और बी का योग की गणना करता है, परिणाम में परिणाम को स्टोर करता है, ए को बी सेट करता है, और बी को परिणाम में सेट करता है।</p>   

<h3>चैस बोर्ड जावास्क्रिप्ट</h3>

<code>
  <p><span className='blueviole'>function</span> <span className='blue'>chess</span>(<span className='blue1'>rows, symbolOne, symbolTwo, currentRow</span>) {"{"}</p>

  <p><span className='blueviole'>var</span> <span className='blue'>symbol</span> = <span className='red'>' '</span>;</p>

  <p><span className='blueviole'>if</span> (<span className='blueviole'>typeof</span> rows != <span className='red'>"number"</span></p>

  <p>|| <span className='blueviole'>typeof</span> symbolOne != <span className='red'>"string"</span></p>

  <p>|| <span className='blueviole'>typeof</span> symbolTwo != <span className='red'>"string"</span>) {'{'}</p>

  <p>{' console'}.<span className='blue'>error</span>(<span className='red'>"अमान्य पैरामीटर"</span>);</p>

  <p> <span className='blueviole'>return</span>; </p>

  <p>{"}"}</p>

  <p>rows = rows || <span className='blue1'>8</span>;</p>

  <p> symbolOne = symbolOne ||<span className='red'> " ⬛"</span>;</p>
  
  <p>symbolTwo = symbolTwo || <span className='red'>" ⬜"</span>;</p>

  <p>currentRow = currentRow || <span className='blue1'>1</span>;</p>

  <p><span className='blueviole'>if</span> (currentRow {'>'} rows) <span className='blueviole'>return</span> <span className='red'>''</span>;</p>

  <p><span className='blueviole'>for</span> (<span className='blueviole'>var</span> <span className='blue'>i</span> = <span className='blue1'>0</span>; i {'<'} rows / <span className='blue1'>2</span>; i++) {"{"}</p>

  <p>{"symbol += symbolOne + symbolTwo;"}</p>

  <p>{" }"}</p>

  <p>symbol += <span className='red'>"\n"</span>; </p>

  <p>symbol += chess(rows, symbolTwo, symbolOne, currentRow + <span className='blue1'>1</span>);</p>

  <p><span className='blueviole'>return</span> symbol;</p>
  
  <p>{'}'}</p>

  <p>{'console'}.<span className='blue'>log</span>(chess(<span className='blue1'>8</span>, <span className='red'>"⬛"</span>, <span className='red'>"⬜"</span>))</p>
</code>  

<p>यह कोड एक चक्रवाती फ़ंक्शन को परिभाषित करता है "शतरंज" जो चार पैरामीटर लेता है: "पंक्तियाँ", "प्रतीकएक", "प्रतीकदो", और "वर्तमान पंक्ति"। यह एक चेसबोर्ड पैटर्न का स्ट्रिंग प्रतिनिधित्व बनाने का उद्देश्य है जो बोर्ड पर हर स्क्वेयर के लिए "प्रतीकएक" और "प्रतीकदो" को बदलते हुए दो प्रतीकों को विस्तृत करता है।</p>
   
<p>फ़ंक्शन सबसे पहले यह जांचता है कि इनपुट पैरामीटर क्या वैध हैं, यानी कि "पंक्तियाँ" एक संख्या है और "प्रतीकएक" और "प्रतीकदो" स्ट्रिंग हैं। यदि किसी भी पैरामीटर अमान्य हैं, तो यह एक त्रुटि संदेश लौटाता है और फ़ंक्शन से बाहर निकलता है</p>  
    
<p>फिर, यह "पंक्तियाँ", "प्रतीकएक", और "प्रतीकदो" को प्रदान नहीं किया गया है तो उनके लिए डिफ़ॉल्ट मान सेट करता है। "पंक्तियाँ" के लिए डिफ़ॉल्ट मान 8 है, जबकि "प्रतीकएक" और "प्रतीकदो" के लिए डिफ़ॉल्ट मान दो Unicode वर्ण हैं जो एक काले वर्ग और एक सफेद वर्ग को प्रतिनिधित करते हैं, क्रमशः।</p>  

<p>फिर, फ़ंक्शन यह जांचता है कि क्या यह चेसबोर्ड का अंत पहुँच गया है (अर्थात "वर्तमान पंक्ति" "पंक्तियाँ" से अधिक है)। यदि हां, तो यह एक खाली स्ट्रिंग लौटाता है और फ़ंक्शन से बाहर निकलता है।</p>

<p>यदि चेसबोर्ड का अंत नहीं पहुँचा है, तो फ़ंक्शन एक स्ट्रिंग "प्रतीक" बनाता है जिसमें "प्रतीकएक" और "प्रतीकदो" को "पंक्तियाँ / 2" बार लगातार जोड़ता है (क्योंकि प्रत्येक पंक्ति में "पंक्तियाँ / 2" जोड़ों के जोड़ होते हैं)।</p>

<p>फिर, यह "प्रतीक" स्ट्रिंग को न्यूलाइन वर्ण के साथ जोड़ता है और "प्रतीकदो" और "प्रतीकएक" को बदलते हुए "वर्तमान पंक्ति" को 1 बढ़ाता है के साथ "चैस" फ़ंक्शन को पुनरावृत्ति करता है।</p>  

<p>अंत में, यह "प्रतीक" स्ट्रिंग को लौटाता है, जिसमें पूरा चेसबोर्ड पैटर्न होता है। कोड की आखिरी पंक्ति "पंक्तियाँ" को 8 के रूप में सेट करके और "प्रतीकएक" और "प्रतीकदो" को काले और सफेद वर्गों को प्रतिनिधित करने वाले यूनिकोड वर्णों को सेट करके "चेस" फ़ंक्शन को आह्वान करती है, और परिणाम स्क्रीन पर चेसबोर्ड पैटर्न को लॉग करती है।</p>


<b><p>*  यह टेक्स्ट अनुवादक की मदद से लिखा गया है। यदि आपको कोई गलती मिलती है, तो कृपया हमें बताएं  *</p></b>
  
  <div className='ads-container'>  
  {/*  реклама  */}
</div>
    </div>
  )
}

export default InJSEs5_10;