import React from 'react';

function InReact_2() {
  return (
    <div>
       <div className='ad-container'>  
          {/*  реклама  */}
        </div> 

      <h1>जेएसएक्स</h1>

<p>जेएसएक्स जावास्क्रिप्ट के लिए एक सिंटैक्स एक्सटेंशन है जो आपको अपने जावास्क्रिप्ट फ़ाइलों में HTML-जैसी कोड लिखने की अनुमति देता है। यह रीऐक्ट में UI के संरचना और लेआउट को परिभाषित करने के लिए व्यापक रूप से प्रयुक्त किया जाता है।</p>    

  <p>यहां एक उदाहरण है कि जेएसएक्स कैसे काम करता है:</p>

<code>
 <p><span className='red'>import</span> React <span className='red'>from</span> <span className='blue1'>'react'</span>; </p>

 <p><span className='red'>function</span> <span className='blueviole'>MyComponent</span>() {'{'}</p>

 <p><span className='red'>return</span> {'('}</p>

 <p>{'<'}<span className='green'>div</span>{'>'}</p>

 <p>&nbsp;{'<'}<span className='green'>h1</span>{'>'}हैलो वर्ल्ड!{'</'}<span className='green'>h1</span>{'>'} </p>

 <p>&nbsp;{'<'}<span className='green'>p</span>{'>'}यह एक सरल JSX उदाहरण है.{'</'}<span className='green'>p</span>{'>'} </p>

 <p>{'</'}<span className='green'>div</span>{'>'}</p>

 <p>&nbsp;{'); '}</p>

 <p>{'}'}</p>

<p><span className='red'>export default</span> MyComponent;</p> 
</code>

  <p>इस उदाहरण में, हम जेएसएक्स का उपयोग करके एक सरल रीऐक्ट कॉम्पोनेंट परिभाषित कर रहे हैं। इस कॉम्पोनेंट एक <b>डिव</b> तत्व को रेंडर करता है जो <b>एक एच1 और एक पी</b> तत्व को समाहित करता है। ध्यान दें कि HTML-जैसा कोड आवश्यक रूप से गोलियों में बंद किया गया है और यह जेएसएक्स सिंटैक्स का उपयोग करके परिभाषित किया गया है।</p>

  <p>जेएसएक्स आपको आसानी से जेएसएक्स कोड के अंदर जावास्क्रिप्ट तर्क सम्मिलित करने की अनुमति देता है। उदाहरण के लिए, आप अपने जेएसएक्स कोड के अंदर जावास्क्रिप्ट वेरिएबल्स और अभिव्यंजन उपयोग कर सकते हैं:</p>
  
<code>
 <p><span className='red'>import</span> React <span className='red'>from</span> <span className='blue1'>'react'</span>;</p>

 <p><span className='red'>function</span> <span className='blueviole'>MyComponent</span>() {'{'}</p>

<p><span className='red'>const</span> name = <span className='blue1'>'John'</span>;  </p>

<p><span className='red'>return</span> {'('}</p>

<p>{'<'}<span className='green'>div</span>{'>'} </p>

<p>&nbsp;{'<'}<span className='green'>h1</span>{'>'} नमस्ते,{'{'}name{'}'}!{'</'}<span className='green'>h1</span>{'>'} </p>

<p>&nbsp;{'<'}<span className='green'>p</span>{'>'}यह एक सरल JSX उदाहरण है.{'</'}<span className='green'>p</span>{'>'} </p>

<p>{'</'}<span className='green'>div</span>{'>'} </p>

<p>&nbsp;{");"}</p>

<p>{" } "}</p>

<p><span className='red'>export default</span> MyComponent;</p> 
</code>
 
  <p>इस उदाहरण में, हम अपने जेएसएक्स कोड के अंदर एक जावास्क्रिप्ट वेरिएबल <b>(नाम)</b> का उपयोग करके एक व्यक्तिगत ग्रीटिंग को डाइनेमिक रूप से रेंडर करने के लिए कर रहे हैं।</p>

  <p>रीऐक्ट डेवलपमेंट के लिए जेएसएक्स की आवश्यकता नहीं है, लेकिन यह उत्कृष्ट रूप से सिफारिश की जाती है क्योंकि इससे संगठित यूआई कॉम्पोनेंट्स लिखना और प्रबंधन करना बहुत आसान हो जाता है। जब आप जेएसएक्स कोड लिखते हैं, तो इसे नियमित जावास्क्रिप्ट कोड में ट्रांसपाइल किया जाता है जो ब्राउज़र द्वारा क्रियान्वित किया जा सकता है।</p>
  
  <p>रीऐक्ट के प्रमुख प्रकार हैं: कार्यात्मक कॉम्पोनेंट्स और कक्षा कॉम्पोनेंट्स।</p>
  
  <p>कार्यात्मक कॉम्पोनेंट्स को जावास्क्रिप्ट फ़ंक्शन के रूप में परिभाषित किया जाता है जो एक जेएसएक्स तत्व लौटाता है। वे सामान्यतः सरल, प्रस्तुतिशील यूआई कॉम्पोनेंट्स के लिए प्रयुक्त किए जाते हैं जिनमें कोई स्थिति या जीवनकाल विधियाँ नहीं होती हैं।</p>
  
  <p>यहां एक सरल कार्यात्मक कॉम्पोनेंट का उदाहरण है:</p>

  <code>
      <p><span className='red'>import</span> React <span className='red'>from</span> <span className='blue1'>'react'</span>; </p>

      <p><span className='red'>function</span> <span className='blueviole'>MyComponent</span>(props) {'{'}</p>

      <p><span className='red'>return</span> {'('}</p>

      <p> {'<'}<span className='green'>div</span>{'>'} </p>

      <p>&nbsp;{'<'}<span className='green'>h1</span>{'>'}नमस्ते,{'{'}props.<span className='blue'>name</span>{'}'}!{'</'}<span className='green'>h1</span>{'>'} </p>

      <p>&nbsp;{'<'}<span className='green'>p</span>{'>'}यह एक कार्यात्मक कॉम्पोनेंट है।{'</'}<span className='green'>p</span>{'>'} </p>

      <p>{'</'}<span className='green'>div</span>{'>'} </p>

      <p>&nbsp;{');'}</p>

      <p>{'}'}</p>

      <p><span className='red'>export default</span> MyComponent;</p>  
 </code>
   
    <p>इस उदाहरण में, हम <b>MyComponent</b> नामक एक कार्यात्मक कॉम्पोनेंट परिभाषित कर रहे हैं जो एक <b>प्रॉप्स</b> ऑब्जेक्ट को एक आर्गुमेंट के रूप में लेता है। कॉम्पोनेंट एक जेएसएक्स तत्व लौटाता है जिसमें एक ह1 तत्व शामिल है जिसमें व्यक्तिगत ग्रीटिंग है और एक <b>पी</b> तत्व है जिसमें संदेश है।</p>
    
    <p>दूसरी ओर, कक्षा कॉम्पोनेंट्स को जावास्क्रिप्ट क्लासेस के रूप में परिभाषित किया जाता है जो <b>रिऐक्ट.कॉम्पोनेंट</b> क्लास को विस्तारित करते हैं। वे अधिक जटिल यूआई कॉम्पोनेंट्स के लिए प्रयुक्त किए जाते हैं जो राज्य को प्रबंधित करने और जीवनकाल विधियों को होने की आवश्यकता होती है।</p>
    
    <p>यहां एक सरल कक्षा कॉम्पोनेंट का उदाहरण है:</p>

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

    <p>{'<'}<span className='green'>h1</span>{'>'}गिनती: {'{'}<span className='red'>this</span>.<span className='blue'>state</span>.<span className='blue'>count</span>{'}'}{'</'}<span className='blue'>h1</span>{'>'}</p>

    <p>{'<'}<span className='green'>button</span> <span className='blue'>onClick</span> = {'{() => '}<span className='red'>this</span>.<span className='blue'>setState</span>{'({'} <span className='blue'>count</span>:<span className='red'>this</span>.<span className='blue'>state</span>.<span className='blue'>count</span> + <span className='blue1'>1</span> {'})}'}{'>'}वृद्धि करें{'</'}<span className='green'>button</span>{'>'}</p>

    <p>{'</'}<span className='blue'>div</span>{'>'} </p>

    <p>&nbsp;&nbsp;{');'}</p>

    <p>&nbsp;{'}'}</p>

    <p>{'}'}</p>

    <p><span className='red'>export default</span> MyComponent;</p>  
</code>
    
    <p>इस उदाहरण में, हम एक कक्षा कॉम्पोनेंट जिसे MyComponent कहा जाता है, की परिभाषा कर रहे हैं जिसमें <b>काउंट</b> नामक राज्य संपत्ति है और एक <b>रेंडर</b> विधि है जो वर्तमान गिनती दिखाता है और जब क्लिक किया जाता है तो गिनती को बढ़ाता है।</p>

    <p>कॉम्पोनेंट्स को विविध और घुसाया जा सकता है ताकि जटिल यूआई तत्व बनाए जा सकें। वे उपयोगकर्ता इनपुट के रूप में प्रॉप्स को स्वीकार कर सकते हैं, जो उन्हें अनुकूलित और पुनः उपयोग किया जाने की अनुमति देते हैं।</p>

    <p><b>{'<Component />'}</b> एक सिंटैक्स है जो रीऐक्ट में कॉम्पोनेंट को रेंडर करने के लिए प्रयुक्त होता है। इसे एक स्वयं-बंद टैग या एक खाली टैग के रूप में भी कहा जाता है, और यह कॉम्पोनेंट को किसी भी आर्गुमेंट के साथ फ़ंक्शन के रूप में बुलाने के समान है।</p>

    <p>उदाहरण के लिए, चलो मान लेते हैं कि हमारे पास एक सरल कॉम्पोनेंट है जिसे <b>MyComponent</b> कहा जाता है:</p>

<code>
  <p><span className='red'>function</span> <span className='blueviole'>MyComponent</span>() {'{'}</p>

  <p><span className='red'>return</span> {'('}</p>

  <p>{'<'}<span className='green'>div</span>{'>'}</p>

  <p>&nbsp;{'<'}<span className='green'>h1</span>{'>'}नमस्ते, दुनिया!{'</'}<span className='green'>h1</span>{'>'} </p>

  <p>{'</'}<span className='green'>div</span>{'>'}</p>

  <p>&nbsp;{');'}</p>

  <p>{'}'}</p>
</code>
   
    <p>इस कॉम्पोनेंट को रेंडर करने के लिए, हम <b>{'<MyComponent />'}</b> सिंटैक्स का उपयोग करेंगे:</p>

 <code>
  <p>ReactDOM.<span className='blue'>render</span>{'('} </p>

  <p>{'<'}<span className='blueviole'>MyComponent </span>{'/>'}, </p>

  <p>document.<span className='blue'>getElementById</span>(<span className='blue1'>'root'</span>)</p>

  <p>{');'}</p> 
 </code>

    <p><b>{'<MyComponent />'}</b> सिंटैक्स एक MyComponent कॉम्पोनेंट का एक उदाहरण बनाता है और इसे डॉम पर रेंडर करता है।</p>

    <b><p>*  यह टेक्स्ट अनुवादक की मदद से लिखा गया है। यदि आपको कोई गलती मिलती है, तो कृपया हमें बताएं  *</p></b>
   
    <div className='ads-container'>  
    {/*  реклама  */}
   </div>
    </div>
  )
}

export default InReact_2;