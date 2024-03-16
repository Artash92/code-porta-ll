import React from 'react';

function InReact_4() {
  return (
    <div>
      <div className='ad-container'>  
          {/*  реклама  */}
        </div> 

      <h1>रिएक्ट में डेटा लाना</h1>

<p>1. fetch API का उपयोग करके डेटा लाएं:</p>

<code> 
    <p><span className='blueviole'>fetch</span>(<span className='blue1'>'https://api.example.com/data'</span>)</p>

    <p>.<span className='blue'>then</span>(response {'=>'} response.<span className='blue'>json</span>()) </p>

    <p>.<span className='blue'>then</span>(data {'=>'} console.<span className='blue'>log</span>(data))</p>

    <p>.<span className='blue'>catch</span>(error {'=>'} console.<span className='blue'>error</span>(error)) </p>
  </code>

<p>इस उदाहरण में, हम <b>fetch</b> API का उपयोग करके सर्वर को अनुरोध कर रहे हैं। <b>प्रतिक्रिया</b> ऑब्जेक्ट को <b>json()</b> मेथड का उपयोग करके JSON प्रारूप में परिवर्तित किया जाता है, और परिणामस्वरूप डेटा को कॉन्सोल में लॉग किया जाता है। यदि कोई त्रुटि होती है, तो यह पकड़ी जाती है और कॉन्सोल में लॉग की जाती है।</p>


<p>2. कॉम्पोनेंट के स्थिति में लाए गए डेटा को प्रदर्शित करें:</p>

<code>
    <p><span className='red'>import</span> {'React, { useState, useEffect } '} <span className='red'>from</span> <span className='blue1'>'react'</span>;   </p>

    <p><span className='red'>function</span> <span className='blueviole'>MyComponent</span>() {'{'}</p>

    <p><span className='red'>const</span> [data, setData] = <span className='blueviole'>useState</span>([]);</p>

    <p><span className='blueviole'>useEffect</span>{'(() => {'}</p>

    <p><span className='blueviole'>fetch</span>(<span className='blue1'>'https://api.example.com/data'</span>)</p>

    <p>.<span className='blue'>then</span>(response {'=>'} response.<span className='blue'>json</span>())</p>

    <p>.<span className='blue'>then</span>(data {'=>'} <span className='blueviole'>setData</span>(data))</p>

    <p>.<span className='blue'>catch</span>(error {'=>'} console.<span className='blue'>error</span>(error)); </p>

    <p>{'}, []);'}</p>

    <p><span className='red'>return</span> {'('}</p>

    <p>{'<'}<span className='green'>div</span>{'>'}</p>

    <p>{'{'}data.<span className='blue'>map</span>{'(item => ('}</p>

    <p>{'<'}<span className='green'>p</span> key={'{item.'}<span className='blue'>id</span>{'}>'}{'{item.'}<span className='blue'>name</span>{'}</'}<span className='green'>p</span>{'>'}</p>

    <p>{'))} '}</p>

    <p>{'</'}<span className='green'>div</span>{'>'}</p>

    <p>&nbsp;{');'}</p>

    <p>{'}'}</p>
</code>  

<p>इस उदाहरण में, हम <b>useState</b> हुक का उपयोग करके एक स्थिति चर <b>data</b> को परिभाषित कर रहे हैं। हम <b>useEffect</b> हुक का भी उपयोग कर रहे हैं ताकि कंपोनेंट माउंट होने पर सर्वर से डेटा प्राप्त किया जा सके, और प्राप्त किए गए डेटा के साथ स्थिति चर <b>data</b> को अपडेट किया जा सके। अंत में, हम <b>map</b> विधि का उपयोग कर रहे हैं ताकि डेटा सरणी में लूप किया जा सके और प्रत्येक आइटम को पैराग्राफ तत्व के रूप में प्रदर्शित किया जा सके।</p>

<h1>Axios</h1>

<p>फेच और एक्सियोस दोनों ब्राउज़र या नोड.जेएस परिवेश से HTTP अनुरोध भेजने के लिए उपयोग की जाने वाली जावास्क्रिप्ट लाइब्रेरी हैं। हालांकि, इन दोनों में कुछ अंतर हैं।</p>

<p>फेच एक अंतर्निहित ब्राउज़र एपीआई है जो अनुरोधों और प्रतिक्रियाओं को संभालने के लिए प्रमिस का उपयोग करता है। इसमें एक सरल संधि है और सरल अनुरोधों के लिए उपयोग करने में आसान है, लेकिन इसमें कुछ उन्नत विशेषताएँ जैसे अनुरोध रद्द करना, प्रगति घटनाएँ, और स्वचालित अनुरोध पुनः प्रयास की कमी है।</p>

<p>एक्सियोस एक लोकप्रिय तीसरे पक्ष की पुस्तकालय है जो HTTP अनुरोध भेजने के लिए एक अधिक सुविधाजनक और शक्तिशाली एपीआई प्रदान करती है। यह अनुरोध रद्द करने, प्रगति घटनाओं, और स्वचालित प्रयासों का समर्थन करता है, और साथ ही JSON, XML, और FormData जैसे प्रतिक्रिया डेटा का संभालन करने के लिए एक निर्मित समर्थन भी है।</p>

<p>एक्सियोस का उपयोग क्यों करना बेहतर है, इसका सचमुच आपके परियोजना की विशेष आवश्यकताओं पर निर्भर करता है। यदि आप एक सरल वेब अनुप्रयोग बना रहे हैं जो केवल मूल अनुरोध करने की आवश्यकता है, तो फेच पर्याप्त हो सकता है। हालांकि, यदि आपको अधिक उन्नत सुविधाएँ और अनुरोधों और प्रतिक्रियाओं का अधिक शक्तिशाली एपीआई चाहिए, तो एक्सियोस एक बेहतर विकल्प है।</p>

<p>एक्सियोस का उपयोग करने के कुछ लाभ निम्नलिखित हैं:</p>

<p>1. बेहतर त्रुटि संभालन: एक्सियोस के पास त्रुटियों को संभालने के लिए एक मजबूत प्रणाली है और फेच की तुलना में अधिक सहायक त्रुटि संदेश प्रदान करती है।</p>

<p>2. इंटरसेप्टर: एक्सियोस इंटरसेप्टर प्रदान करता है जो आपको अनुरोधों या प्रतिक्रियाओं को भेजे या प्राप्त करने से पहले संशोधित करने की अनुमति देता है।</p>

<p>3. अनुरोध और प्रतिक्रिया डेटा का स्वचालित परिवर्तन: एक्सियोस अनुरोध और प्रतिक्रिया डेटा को स्वचालित रूप से विभिन्न प्रारूपों में परिवर्तित कर सकता है, जैसे कि JSON, जो एपीआई के साथ काम करते समय बहुत सहायक हो सकता है।</p>

<p>4. अनुरोधों को आसानता से रद्द करना: एक्सियोस अनुरोधों को रद्द करने का एक सरल तरीका प्रदान करता है, जो धीमे या अविश्वसनीय नेटवर्क के साथ निपटते समय उपयोगी हो सकता है।</p>

<p>सारांश में, जावास्क्रिप्ट में HTTP अनुरोध भेजने के लिए फेच और एक्सियोस उपयोगी उपकरण हैं, लेकिन एक्सियोस अधिक उन्नत सुविधाओं और एक अधिक शक्तिशाली एपीआई प्रदान करता है जो अधिक जटिल अनुप्रयोगों को बनाने के लिए बहुत ही सहायक हो सकता है।</p>

<p><b>एक्सियोस</b> ब्राउज़र या नोड.जेएस से HTTP अनुरोध भेजने के लिए एक पुस्तकालय है। यह प्रोमिस का उपयोग करके अनुरोध भेजना और प्रतिक्रिया को संभालना आसान बनाता है।</p>

<p>एक्सियोस का उपयोग रिएक्ट.जेएस में करने के लिए, पहले आपको इसे इंस्टॉल करने की आवश्यकता है इस आदेश का उपयोग करके:</p>

<b>npm install axios</b>

<p>इसके बाद, आप अपने रिएक्ट कंपोनेंट में एक्सियोस का उपयोग कर सकते हैं। उदाहरण के लिए, निम्नलिखित कोड एक GET अनुरोध को एक रिमोट सर्वर को भेजता है और पृष्ठ पर प्रतिक्रिया को प्रदर्शित करता है:</p>

<code>
    <p><span className='red'>import</span> {' React, { useState, useEffect }'} <span className='red'>from</span> <span className='blue1'>"react"</span>;</p>  

    <p><span className='red'>import</span> axios <span className='red'>from</span> <span className='blue1'>"axios"</span>;</p>

    <p><span className='red'>function</span> <span className='blueviole'>App</span>() {'{'}</p>  

    <p><span className='red'>const</span> {'[data, setData]'} = <span className='blueviole'>useState</span>("");</p>

    <p><span className='blueviole'>useEffect</span>{'(() => { '}</p>

    <p>axios.<span className='blue'>get</span>(<span className='blue1'>"https://jsonplaceholder.typicode.com/todos/1"</span>).<span className='blue'>then</span>{'((response) => {'}</p>

    <p><span className='blueviole'>setData</span>(response.<span className='blue'>data</span>);</p>

    <p>{'});'}</p>

    <p>{' }, []);'}</p>

    <p> return {'<'}<span className='green'>div</span>{'>'}{'{'}data.<span className='blue'>title</span>{'}'}{'</'}<span className='green'>div</span>{'>;'}</p>

    <p>{'}'}</p>

    <p><span className='red'>export default</span> App;</p>
 </code>

 <p>इस उदाहरण में, <b>useEffect</b> हुक का उपयोग सर्वर को GET अनुरोध भेजने और प्रतिक्रिया के साथ <b>data</b> स्थिति चर को अपडेट करने के लिए किया जाता है। फिर डेटा चर को JSX का उपयोग करके पृष्ठ पर प्रदर्शित किया जाता है।</p>

<p>एक्सियोस अन्य एचटीटीपी विधियों का समर्थन भी करता है, जैसे POST, PUT, और DELETE, जो सर्वर को डेटा भेजने और संसाधनों को संशोधित करने के लिए प्रयोग किया जा सकता है। एक्सियोस ऑब्जेक्ट भी कई कॉन्फ़िगरेशन विकल्प प्रदान करता है, जैसे हेडर्स, टाइमआउट, और अनुरोध इंटरसेप्टर्स, जो आपको अनुरोधों का व्यवहार अनुकूलित करने की अनुमति देते हैं।</p>

<p>सामग्री के रूप में, एक्सियोस एक शक्तिशाली और लचीला पुस्तकालय है जो रिएक्ट.जेएस में एचटीटीपी अनुरोधों के साथ काम करने के लिए है, और यह कई सामान्य कार्यों को सरल बना सकता है, जैसे कि दूरस्थ एपीआई से डेटा प्राप्त करना।</p>

<p>एचटीटीपी प्रोटोकॉल कई अनुरोध विधियों का समर्थन करता है जो डेटा के साथ विभिन्न आयोजन करने की अनुमति देते हैं। यहां चार मुख्य अनुरोध विधियों का संक्षिप्त विवरण है साथ ही उनके उपयोग के उदाहरणों के साथ उन्हें रिएक्ट में उपयोग करने का:</p>

<p>1. <b>GET</b>: सर्वर से डेटा प्राप्त करने के लिए एक अनुरोध विधि है। रिएक्ट में, आप <b>axios.get</b> विधि का उपयोग कर सकते हैं</p>

<code>
  <p>axios.<span className='blue'>get</span>(<span className='blue1'>'/api/data'</span>)</p>

  <p>.<span className='blue'>then</span>{'(response => {'}</p>

  <p>{'console'}.<span className='blue'>log</span>(response.<span className='blue'>data</span>); </p>

  <p>{'})'}</p>

  <p>.<span className='blue'>catch</span>{'(error => {' }</p>

  <p>{'console'}.<span className='blue'>log</span>(error);</p>

  <p>{'});'}</p>  
</code>

<p>इस उदाहरण में, हम <b>/api/data</b> अंतबिंध से डेटा प्राप्त कर रहे हैं। अगर अनुरोध सफल होता है तो प्रतिक्रिया डेटा को कॉन्सोल में लॉग किया जाता है, और किसी भी त्रुटियों को पकड़कर और कॉन्सोल में लॉग किया जाता है।</p>

<p>2. <b>PUT</b>: सर्वर पर मौजूदा डेटा को अपडेट करने के लिए एक अनुरोध विधि है। रिएक्ट में, आप <b>axios.put</b> विधि का उपयोग कर सकते हैं:</p>

<code>
  <p>axios.<span className='blue'>put</span>{'('}<span className='blue1'>'/api/data/1'</span>, {'{'} <span className='blue'>newData</span>: <span className='blue1'>'updatedData'</span> {"})"}</p>

  <p>.<span className='blue'>then</span>{'('}response { '=> {' }</p>

  <p>{'console'}.<span className='blue'>log</span>(response.<span className='blue'>data</span>);</p>

  <p>{'})'}</p>

  <p>.<span className='blue'>catch</span>{'(error => {'}</p>

  <p>{'console'}.<span className='blue'>log</span>(error);</p>

  <p>{'});'}</p>
</code>

<p>इस उदाहरण में, हम <b>/api/data/1</b> अंतबिंध पर डेटा को अपडेट कर रहे हैं। हम नए डेटा के साथ पेलोड भेज रहे हैं जैसे <b>axios.put</b> के दूसरे तर्क के रूप में। अगर अनुरोध सफल होता है तो प्रतिक्रिया डेटा को कॉन्सोल में लॉग किया जाता है, और किसी भी त्रुटियों को पकड़कर और कॉन्सोल में लॉग किया जाता है।</p>

<p>3. <b>POST</b>: सर्वर पर नई डेटा बनाने के लिए एक अनुरोध विधि है। रिएक्ट में, आप <b>axios.post</b> विधि का उपयोग कर सकते हैं</p>

<code>
  <p>axios.<span className='blue'>post</span>{'('}<span className='blue1'>'/api/data'</span>, {'{'} <span className='blue'>newData</span>: <span className='blue1'>'newData'</span> {"})"}</p>

  <p>.<span className='blue'>then</span>{'(response => {'}</p>

  <p>{'console'}.<span className='blue'>log</span>(response.<span className='blue'>data</span>);</p>

  <p>{'})'}</p>

  <p>.<span className='blue'>catch</span>{'(error => {'}</p>

  <p>{'console'}.<span className='blue'>log</span>(error);</p>

  <p>{'});'}</p> 
</code>

<p>इस उदाहरण में, हम <b>/api/data</b> अंतबिंध पर नई डेटा बना रहे हैं। हम नए डेटा के साथ पेलोड भेज रहे हैं जैसे <b>axios.post</b> के दूसरे तर्क के रूप में। अगर अनुरोध सफल होता है तो प्रतिक्रिया डेटा को कॉन्सोल में लॉग किया जाता है, और किसी भी त्रुटियों को पकड़कर और कॉन्सोल में लॉग किया जाता है।</p>

<p>4. <b>DELETE</b>: सर्वर पर मौजूदा डेटा को हटाने के लिए एक अनुरोध विधि है। रिएक्ट में, आप <b>axios.delete</b> विधि का उपयोग कर सकते हैं:</p>

<code>
  <p> axios.<span className='blue'>delete</span>(<span className='blue1'>'/api/data/1'</span>)  </p>

  <p>.<span className='blue'>then</span>{'(response => { '}</p>

  <p>{'console'}.<span className='blue'>log</span>(response.<span className='blue'>data</span>);</p>

  <p>{'}) '}</p>

  <p>.<span className='blue'>catch</span>{'(error => { '}</p>

  <p>{'console'}.<span className='blue'>log</span>(error);</p>

  <p>{'});'}</p>
</code>

<p>इस उदाहरण में, हम <b>/api/data/1</b> अंतबिंध पर डेटा को हटा रहे हैं। अगर अनुरोध सफल होता है तो प्रतिक्रिया डेटा को कॉन्सोल में लॉग किया जाता है, और किसी भी त्रुटियों को पकड़कर और कॉन्सोल में लॉग किया जाता है</p>

<p>अक्सर पूछे जाने वाले प्रश्नों के लिए अक्सिओस पर अधिक जानकारी के लिए, कृपया उनकी आधिकारिक वेबसाइट पर जाएं: <a href="https://axios-http.com" target='_blank' > 👉🏼 https://axios-http.com</a></p>

<b><p>*  यह टेक्स्ट अनुवादक की मदद से लिखा गया है। यदि आपको कोई गलती मिलती है, तो कृपया हमें बताएं  *</p></b>
   
   <div className='ads-container'>  
   {/*  реклама  */}
  </div>
    </div>
  )
}

export default InReact_4;