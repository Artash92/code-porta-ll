import React from 'react';

function InReact_7() {
  return (
    <div>
      <div className='ad-container'>  
          {/*  реклама  */}
        </div> 
    
    <h1>रीडक्स</h1>
   
  <p>रीडक्स एक जावास्क्रिप्ट एप्लिकेशनों के लिए एक स्टेट प्रबंधन लाइब्रेरी है। यह आपके एप्लिकेशन की स्थिति को एक पूर्वानुमाननीय तरीके से प्रबंधित करने में मदद करता है, जिससे आपके एप्लिकेशन में डेटा के प्रवाह को सोचने में आसानी हो। रीडक्स के साथ, आप अपने एप्लिकेशन की स्थिति को एक एकल ऑब्जेक्ट जिसे स्टोर कहा जाता है में संग्रहित करते हैं, और आप उस स्थिति को संशोधित करने के लिए कार्रवाई और रीड्यूसर्स का उपयोग करते हैं।</p>
   
  <p>यहाँ कैसे काम करता है: जब आप अपने एप्लिकेशन की स्थिति को बदलना चाहते हैं, तो आप एक एक्शन डिस्पैच करते हैं। एक्शन एक सादा जावास्क्रिप्ट ऑब्जेक्ट होता है जो आपके एप्लिकेशन में क्या हुआ है यह वर्णित करता है। उदाहरण के लिए, आप एक्शन डिस्पैच कर सकते हैं ताकि एक नई आइटम को सूची में जोड़ा जा सके, या उपयोगकर्ता के प्रोफ़ाइल जानकारी को अपडेट कर सकते हैं।</p>
  
  <p>रीड्यूसर्स वे फ़ंक्शन होते हैं जो आपके एप्लिकेशन की वर्तमान स्थिति और एक्शन को लेकर एक नई स्थिति लौटाते हैं, और यह नई स्थिति। रीड्यूसर्स प्योर फ़ंक्शन होते हैं, जिसका मतलब है कि उनमें कोई भी प्रभाव नहीं होता है और वे हमेशा एक दिए गए इनपुट के लिए समान आउटपुट लौटाते हैं।</p>
  
  <p>रीऐक्ट-रीडक्स एक लाइब्रेरी है जो रीडक्स को रीऐक्ट के साथ एकीकृत करती है। यह आपके रीऐक्ट कंपोनेंट्स को रीडक्स स्टोर से कनेक्ट करने का एक तरीका प्रदान करता है, ताकि आप अपने कंपोनेंट्स से अपने एप्लिकेशन की स्थिति को एक्सेस और मॉडिफ़ाई कर सकें। रीऐक्ट-रीडक्स दो मुख्य घटक प्रदान करता है: प्रोवाइडर और कनेक्ट।</p>
  
  <p>प्रोवाइडर कंपोनेंट का उपयोग आपके पूरे रीऐक्ट एप्लिकेशन को लपेटने के लिए किया जाता है। यह एक स्टोर ऑब्जेक्ट को एक प्रॉप के रूप में लेता है, और उस स्टोर को आपके एप्लिकेशन में सभी कंपोनेंट्स के लिए उपलब्ध कराता है।</p>
  
  <p>1. आवश्यक पैकेजों को इंस्टॉल करें:</p>
  
  <b>npm install redux react-redux</b>

   <p>2. एक रीडक्स स्टोर बनाएं:</p>
    
<code>
  <p><span className='red'>import</span> {'{ createStore }'} <span className='red'>from</span> <span className='blue1'>'redux'</span>;</p>
  
  <p><span className='red'>import</span> rootReducer <span className='red'>from</span> <span className='blue1'>'./reducers'</span>; </p>

  <p><span className='red'>const</span> store = <span className='blueviole'>createStore</span>(rootReducer); </p>
</code>

<p>3. रीडक्स एक्शन्स बनाएँ:</p>

<code>
  <p><span className='red'>export const</span> {"increment = () => {"}</p>
 
  <p>&nbsp;<span className='red'>return</span>  {"{ "}</p>

  <p>&nbsp;&nbsp;<span className='blue'>type</span> : <span className='blue1'>'INCREMENT'</span></p>

  <p>&nbsp;{" } "}</p>

  <p>{" } "}</p>

  <p><span className='red'>export const</span>  {"decrement = () => { "}</p>

  <p>&nbsp;<span className='red'>return</span>  {" { "}</p>

  <p>&nbsp;&nbsp;<span className='blue'>type</span> : <span className='blue1'>'DECREMENT'</span></p>

  <p>&nbsp;{" } "}</p>

  <p>{" } "}</p>
</code>

<p>4. रीडक्स रीड्यूसर्स बनाएँ:</p>

<code>
  <p><span className='red'>const</span> counterReducer = {'('}state = <span className='blue1'>0</span>, {"action) => { "}</p>

  <p>&nbsp;<span className='red'>switch</span> (action.<span className='blue'>type</span>) {"{ "}</p>

  <p>&nbsp;&nbsp;<span className='red'>case</span> <span className='blue1'>'INCREMENT'</span>:</p>

  <p>&nbsp;&nbsp;&nbsp;<span className='red'>return</span>  state + <span className='blue1'>1</span>;</p>

  <p>&nbsp;&nbsp;<span className='red'>case</span> <span className='blue1'>'DECREMENT'</span>:</p>

  <p>&nbsp;&nbsp;&nbsp;<span className='red'>return</span> state - <span className='blue1'>1</span>; </p>

  <p>&nbsp;&nbsp;<span className='red'>default</span>: </p>

  <p>&nbsp;&nbsp;&nbsp;<span className='red'>return</span> state; </p>

  <p>&nbsp;{" }"}</p>

  <p>{"} "}</p>

  <p><span className='red'>export default</span> counterReducer;</p>
</code>

<p>5. रीडक्स को रियैक्ट कंपोनेंट से जोड़ें React-Redux के <b>connect</b> फ़ंक्शन का उपयोग करके:</p>

<code>
    <p><span className='red'>import</span> {'{ connect }'} <span className='red'>from</span> <span className='blue1'>'react-redux'</span>; </p>

    <p><span className='red'>import</span>  {'{ increment, decrement }'} <span className='red'>from</span> <span className='blue1'>'./actions'</span>;</p>

    <p>&nbsp;<span className='red'>const</span> {"Counter = (props) => { "}</p>

    <p>&nbsp;<span className='red'>return</span> {'('}</p>

    <p>{'<'}<span className='green'>div</span>{'>'}</p>

    <p>&nbsp;&nbsp;{'<'}<span className='green'>h1</span>{'>{'}props.<span className='blue'>count</span>{'}</'}<span className='green'>h1</span>{'>'}</p>

    <p>&nbsp;&nbsp;{'<'}<span className='green'>button</span> <span className='blue'>onClick</span>={'{'}props.<span className='blue'>increment</span>{'}>'}+{'</'}<span className='green'>button</span>{'>'}</p>

    <p>&nbsp;&nbsp;{'<'}<span className='green'>button</span> <span className='blue'>onClick</span>={'{'}props.<span className='blue'>decrement</span>{'}>-</'}<span className='green'>button</span>{'>'}</p>

    <p>{"</"}<span className='green'>div</span>{">"}</p>

    <p>&nbsp;{");"}</p>

    <p>{"} "}</p>

    <p>&nbsp;<span className='red'>const</span> {"mapStateToProps = (state) => {"}</p>

    <p>&nbsp;<span className='red'>return</span> {"{ "}</p>

    <p>&nbsp;&nbsp;&nbsp;<span className='blue'>count</span>: state.<span className='blue'>counter</span></p>

    <p>&nbsp;{"} "}</p>

    <p>{"} "}</p>

    <p>&nbsp;<span className='red'>const</span> {"mapDispatchToProps = (dispatch) => { "}</p>

    <p>&nbsp;<span className='red'>return</span> {"{ "}</p>

    <p>&nbsp;&nbsp;&nbsp;<span className='blue'>increment</span>: {"() =>"} <span className='blueviole'>dispatch</span>(<span className='blueviole'>increment</span>()), </p>

    <p>&nbsp;&nbsp;&nbsp;<span className='blue'>decrement</span>: {"() =>"} <span className='blueviole'>dispatch</span>(<span className='blueviole'>decrement</span>())</p>

    <p>&nbsp;{"}"}</p>

    <p>{"}"}</p>

    <p><span className='red'>export default</span> <span className='blueviole'>connect</span>(mapStateToProps, mapDispatchToProps)(Counter); </p>
  </code>

  <p>6. सभी components को उपलब्ध करने के लिए अपने एप्लिकेशन को <b>Provider</b> component के साथ लपेटें ताकि Redux store उपलब्ध हो:</p>

  <code> 
      <p><span className='red'>import</span> {"{ Provider } "} <span className='red'>from</span> <span className='blue1'>'react-redux'</span>;</p>

      <p><span className='red'>import</span> store <span className='red'>from</span> <span className='blue1'>'./store'</span>;</p>

      <p><span className='red'>import</span> Counter <span className='red'>from</span> <span className='blue1'>'./Counter'</span>; </p>

      <p>&nbsp;<span className='red'>const</span> {"App = () => { "}</p>

      <p>&nbsp;<span className='red'>return</span> {"("}</p>

      <p>{"<"}<span className='blueviole'>Provider</span> <span className='blue'>store</span>={"{store}> "}</p>

      <p>&nbsp;&nbsp;{"<"}<span className='blueviole'>Counter</span> {"/>"}</p>

      <p>{"</"}<span className='blueviole'>Provider</span>{">"}</p>

      <p>&nbsp;{");"}</p>

      <p>{"}"}</p>

      <p><span className='red'>export default</span> App;</p>
    </code>
    
<p>यह एक बुनियादी उदाहरण है कि कैसे रीडक्स और रीऐक्ट-रीडक्स को रीऐक्ट एप्लिकेशन में कैसे उपयोग किया जाता है। ध्यान रखें कि यह केवल बर्फ का तोहफा है, और रीडक्स और इसके पारिस्थितिकी के बारे में और भी बहुत कुछ सीखने की बात है।</p>

<p>रीऐक्ट एप्लिकेशन में रीडक्स का उपयोग करते समय कुछ और बातों का ध्यान रखें:</p>

<p>1. रीडक्स मिडलवेयर: मिडलवेयर रीडक्स एक्शन को संशोधित या अंतर्ग्रहण करने का एक तरीका है जो उन्हें रीड्यूसर्स तक पहुंचने से पहले बदल सकता है। मिडलवेयर को लॉगिंग, असिंक्रोनस अनुरोध आदि जैसे कार्यों के लिए उपयोग किया जा सकता है। रीडक्स के लिए कुछ लोकप्रिय मिडलवेयर विकल्प में <b>redux-thunk, redux-saga, और redux-observable</b> शामिल हैं।</p>

<p>2. रीडक्स डेवटूल्स: रीडक्स डेवटूल्स एक ब्राउज़र एक्सटेंशन है जो रीडक्स स्टोर की डीबगिंग और जाँच के लिए एक उपयोगी यूआई प्रदान करता है। इसे आप एक्शन और स्थिति परिवर्तनों की जाँच करने की अनुमति देता है, और समय-यात्रा डीबगिंग कार्यक्षमता भी प्रदान करता है।</p>

<p>3. रीडक्स सिलेक्टर्स: सिलेक्टर्स वे फ़ंक्शन हैं जो रीडक्स स्टोर से विशिष्ट डेटा टुकड़ों को निकालते हैं। वे उन्हें उपयोग किया जा सकता हैं अंश डेटा की गणना करने, डेटा को फ़िल्टर और परिवर्तित करने, और अधिक। सिलेक्टर्स आपके कंपोनेंट को सरल बनाने में मदद कर सकते हैं जिससे उन्हें स्टोर के आकार को लेकर चिंता करने की आवश्यकता नहीं होती है।</p>

<p>4. रीडक्स डक्स: डक्स एक प्रस्ताव है जो रीडक्स कोड को मॉड्यूल में आयोजित करने के लिए है जो एक विशिष्ट सुविधा या डोमेन के लिए संबंधित सभी क्रिया प्रकार, क्रिया निर्माता, और रीड्यूसर्स को शामिल करता है। यह दृष्टिकोण आपके कोडबेस को सरल बनाने और इसे बनाए रखने में मदद कर सकता है।</p>

<p>ये कुछ अतिरिक्त विषय हैं जिन्हें आप रीडक्स के साथ काम करते समय अन्वेषण कर सकते हैं। रीडक्स पारिस्थितिकी में बहुत सारे अन्य पुस्तकालय और उपकरण हैं, इसलिए उनके बारे में सीखने का समय लेना और यह निर्णय करना महत्वपूर्ण है कि आपके परियोजना के लिए कौन से सबसे अच्छे हैं।</p>

<b><p>*  यह टेक्स्ट अनुवादक की मदद से लिखा गया है। यदि आपको कोई गलती मिलती है, तो कृपया हमें बताएं  *</p></b>
   
   <div className='ads-container'>  
   {/*  реклама  */}
  </div>
    </div>
  )
}

export default InReact_7;