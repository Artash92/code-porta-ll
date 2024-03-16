import React from 'react';

function InReact_5() {
  return (
    <div>
      <div className='ad-container'>  
          {/*  реклама  */}
        </div> 
        
      <h1>रिएक्ट राउटर डॉम</h1>

<p>रिएक्ट राउटर डॉम एक प्रसिद्ध पुस्तकालय है जो रिएक्ट अनुप्रयोगों में ग्राहक-पक्ष रूटिंग को प्रबंधित करने के लिए प्रयुक्त होती है। इसकी मदद से डेवलपर्स विभिन्न कॉम्पोनेंट्स के लिए विभिन्न रूट बना सकते हैं और मौजूदा URL के आधार पर उन्हें रेंडर कर सकते हैं। यह उपयोगकर्ता अनुभव को और अधिक सहज और अविरल बनाता है, क्योंकि उपयोगकर्ता पूरे पृष्ठ को पुनः लोड किए बिना विभिन्न पृष्ठों और घटकों में भ्रमण कर सकते हैं।</p>

<p>रिएक्ट राउटर डॉम रिएक्ट राउटर पुस्तकालय पर आधारित है और विशेष रूप से ब्राउज़र में उपयोग के लिए डिज़ाइन की गई है। यह ब्राउज़र के इतिहास एपीआई का उपयोग करता है ताकि यूआरएल को बदल सके और उपयोगकर्ता इंटरफेस को वर्तमान यूआरएल के साथ सिंक में रख सके। यह रूट को परिभाषित करने के लिए घोषणात्मक दृष्टिकोण भी प्रदान करता है, जिससे यह अधिक जटिल अनुप्रयोगों को प्रबंधित करना आसान होता है जिनमें कई रूट और नेस्टेड कॉम्पोनेंट्स होते हैं।</p>

<p>रिएक्ट राउटर डॉम की कुछ मुख्य विशेषताएँ शामिल हैं:</p>

<p> • घोषणात्मक रूटिंग: आप अपने रूट्स को JSX कॉम्पोनेंट्स के रूप में परिभाषित कर सकते हैं, जिससे रूटिंग लॉजिक को समझना और प्रबंधित करना आसान होता है।</p>

<p> • नेस्टेड रूट: आप एक से अधिक रूट को अन्य रूट्स के भीतर नेस्ट कर सकते हैं, जो अधिक जटिल रूटिंग स्थितियों के लिए संभव है</p>

<p> • रूट पैरामीटर: आप अपने रूट्स में गतिशील पैरामीटर परिभाषित कर सकते हैं, जिससे वर्तमान यूआरएल के आधार पर कॉम्पोनेंट्स के बीच डेटा पास कर सकते हैं।</p>

<p> • इतिहास प्रबंधन: रिएक्ट राउटर डॉम ब्राउज़र के इतिहास को प्रबंधित करने के लिए टूल्स प्रदान करता है, जिससे आप क्रमशः पृष्ठों के बीच नेविगेट कर सकते हैं और पिछले / आगे की नेविगेशन का संभालन कर सकते हैं। </p>

<p>यहां एक सरल उदाहरण है कि रिएक्ट राउटर डॉम को रिएक्ट अनुप्रयोग में कैसे उपयोग किया जा सकता है: <b>(पुराना संस्करण)v5</b></p>

<code>
  <p> <span className='red'>import</span> React <span className='red'>from</span> <span className='blue1'>'react'</span>;</p>

  <p> <span className='red'>import</span> {'{'} BrowserRouter <span className='red'>as</span> Router, Route, Link {'}'} <span className='red'>from</span> <span className='blue1'>'react-router-dom'</span>;  </p>

  <p>&nbsp;<span className='red'>const</span> Home = () {'=> <'}<span className='green'>h1</span>{'>'}Home{'</'}<span className='green'>h1</span>{'>; '}</p>

  <p>&nbsp;<span className='red'>const</span> About = () {'=> <'}<span className='green'>h1</span>{'>'}About{'</'}<span className='green'>h1</span>{'>;'}</p>

  <p>&nbsp;<span className='red'>const</span> App {'= () => ( '}</p>

  <p>{'<'}<span className='blueviole'>Router</span>{'>'}</p>

  <p>&nbsp;{'<'}<span className='green'>nav</span>{'>'}</p>

  <p>&nbsp;&nbsp;{'<'}<span className='green'>ul</span>{'>'}</p>

  <p>&nbsp;&nbsp;&nbsp;{'<'}<span className='green'>li</span>{'>'}</p>

  <p>&nbsp;&nbsp;&nbsp;&nbsp;{'<'}<span className='blueviole'>Link</span> <span className='blue'>to</span>=<span className='blue1'>"/"</span>{'>'}Home{'</'}<span className='blueviole'>Link</span>{'>'}</p>

  <p>&nbsp;&nbsp;&nbsp;{'</'}<span className='green'>li</span>{'>'}</p>

  <p>&nbsp;&nbsp;&nbsp;{'<'}<span className='green'>li</span>{'>'}</p>

  <p>&nbsp;&nbsp;&nbsp;&nbsp;{'<'}<span className='blueviole'>Link</span> <span className='blue'>to</span>=<span className='blue1'>"/about"</span>{'>'}About{'</'}<span className='blueviole'>Link</span>{'>'}</p>

  <p>&nbsp;&nbsp;&nbsp;{'</'}<span className='green'>li</span>{'>'}</p>

  <p>&nbsp;&nbsp;{'</'}<span className='green'>ul</span>{'>'}</p>

  <p>&nbsp;{'</'}<span className='green'>nav</span>{'>'}</p>

  <p>&nbsp;{'<'}<span className='blueviole'>Route </span><span className='blue'>exact path</span>=<span className='blue1'>"/"</span> <span className='blue'>component</span>={'{Home}  />'}</p>

  <p>&nbsp;{'<'}<span className='blueviole'>Route</span>  <span className='blue'>path</span>=<span className='blue1'>"/about"</span> <span className='blue'>component</span>={'{About}  />'}</p>

  <p>{'</'}<span className='blueviole'>Router</span>{'>'}</p>

  <p>{');'}</p>

  <p><span className='red'>export default</span> App; </p>
</code>

<p>इस उदाहरण में, हम रिएक्ट राउटर डॉम से आवश्यक घटकों को आयात कर रहे हैं (विशेष रूप से, <b>BrowserRouter, Route, और Link</b>)। फिर हमने हमारे होम और एबाउट पृष्ठों के लिए दो सरल कॉम्पोनेंट्स को परिभाषित किया है।</p>

<p><b>App</b> कॉम्पोनेंट के अंदर, हम सब कुछ <b>Router</b> कॉम्पोनेंट में लपेटते हैं, जो बाकी अनुप्रयोग के लिए रूटिंग संदर्भ प्रदान करता है। फिर हम <b>Link</b> कॉम्पोनेंट का उपयोग करके हमारे दो पृष्ठों के बीच नेविगेशन बार को परिभाषित करते हैं।</p>

<p>अंत में, हम वर्तमान यूआरएल के आधार पर <b>Home और About</b> कॉम्पोनेंट्स को रेंडर करने वाले दो <b>Route</b> कॉम्पोनेंट्स को परिभाषित करते हैं।</p>

<p>रिएक्ट राउटर डॉम 6.4 लाइब्रेरी का नवीनतम संस्करण है, जो 2022 में फरवरी में जारी किया गया था। इस संस्करण में कुछ नए विशेषताएँ शामिल हैं:</p>

<p>नवीनतम संस्करण (v6) में कुछ एपीआई और संग्रहों में बदलाव है, तो मैं रिएक्ट राउटर डॉम संस्करण 6.4 का उपयोग करके एक नया उदाहरण चुन सकता हूँ:</p>

<p>रिएक्ट राउटर डॉम संस्करण 6.4 का उपयोग करने का एक उदाहरण निम्नलिखित है:</p>

<code>
  <p><span className='red'>import</span> {'{'} BrowserRouter <span className='red'>as</span> Router, Routes, Route, Link {'}'} <span className='red'>from</span> <span className='blue1'>'react-router-dom'</span>;</p>

  <p>&nbsp;<span className='red'>const</span>  Home = () {'=> <'}<span className='green'>h1</span>{'>'}Home{'</'}<span className='green'>h1</span>{'>;'}</p>

  <p>&nbsp;<span className='red'>const</span> About = () {'=> <'}<span className='green'>h1</span>{'>'}About{'</'}<span className='green'>h1</span>{'>;'}</p>

  <p>&nbsp;<span className='red'>const</span> NotFound = () {'=> <'}<span className='green'>h1</span>{'>'}404 Not Found{'</'}<span className='green'>h1</span>{'>;'}</p>

  <p>&nbsp;<span className='red'>const</span> {'App = () => ( '}</p>

  <p>{'<'}<span className='blueviole'>Router</span>{'>'}</p>

  <p>&nbsp;{'<'}<span className='green'>nav</span>{'>'}</p>

  <p>&nbsp;&nbsp;{'<'}<span className='green'>ul</span>{'>'}</p>

  <p>&nbsp;&nbsp;&nbsp;{'<'}<span className='green'>li</span>{'>'}</p>

  <p>&nbsp;&nbsp;&nbsp;&nbsp;{'<'}<span className='blueviole'>Link</span> <span className='blue'>to</span>=<span className='blue1'>"/"</span>{'>'}Home{'</'}<span className='blueviole'>Link</span>{'>'}</p>

  <p>&nbsp;&nbsp;&nbsp;{'</'}<span className='green'>li</span>{'>'}</p>

  <p>&nbsp;&nbsp;&nbsp;{'<'}<span className='green'>li</span>{'>'}</p>

  <p>&nbsp;&nbsp;&nbsp;&nbsp;{'<'}<span className='blueviole'>Link</span> <span className='blue'>to</span>=<span className='blue1'>"/about"</span>{'>'}About{'</'}<span className='blueviole'>Link</span>{'>'}</p>

  <p>&nbsp;&nbsp;&nbsp;{'</'}<span className='green'>li</span>{'>'}</p>

  <p>&nbsp;&nbsp;{'</'}<span className='green'>ul</span>{'>'}</p>

  <p>&nbsp;{'</'}<span className='green'>nav</span>{'>'}</p>

  <p>{'<'}<span className='blueviole'>Routes</span>{'>'}</p>

  <p>&nbsp;{'<'}<span className='blueviole'>Route</span> <span className='blue'>path</span>=<span className='blue1'>"/"</span> <span className='blue'>element</span>={'{<'}<span className='blueviole'>Home</span> {'/>} />'}</p>

  <p>&nbsp;{'<'}<span className='blueviole'>Route</span> <span className='blue'>path</span>=<span className='blue1'>"/about"</span> <span className='blue'>element</span>={'{<'}<span className='blueviole'>About</span> {'/>} />'}</p>

  <p>&nbsp;{'<'}<span className='blueviole'>Route</span> <span className='blue'>path</span>=<span className='blue1'>"*"</span> <span className='blue'>element</span>={'{<'}<span className='blueviole'>NotFound</span> {'/>} />'}</p>

  <p>{'</'}<span className='blueviole'>Routes</span>{'>'}</p>

  <p>{'</'}<span className='blueviole'>Router</span>{'>'}</p>

  <p>{');'}</p>

  <p><span className='red'>export default</span> App; </p>
</code>

<p>इस उदाहरण में, हम रिएक्ट राउटर डोम से समान कोर के कॉम्पोनेंट्स का उपयोग करते हैं (<b>जैसे BrowserRouter, Route, Link</b>), लेकिन कुछ कंपोनेंट्स का संकेत थोड़ा अलग है।</p>

<p>उदाहरण के लिए, अब हम <b>स्विच</b> की बजाय <b>रूट्स</b> कंपोनेंट का उपयोग करते हैं ताकि कई रूट्स को समूहित किया जा सके। प्रत्येक रूट अब एक <b>रूट</b> तत्व द्वारा प्रतिनिधित किया जाता है जिसमें <b>पाथ और तत्व</b> प्रॉप होते हैं। <b>पाथ</b> प्रॉप रूट के लिए यूआरएल पैटर्न सेट करता है, और <b>तत्व</b> प्रॉप उस कॉम्पोनेंट को रेंडर करता है जब रूट मेल खाता है।</p>

<p>इस उदाहरण में, हमने एक <b>नॉट फाउंड</b> कॉम्पोनेंट भी जोड़ा है जो उस समय प्रदर्शित होता है जब उपयोगकर्ता एक अस्तित्वहीन पृष्ठ पर पहुंचता है।</p>

<p>सम्ग्र, रिएक्ट राउटर डोम 6 रिएक्ट एप्लिकेशन्स में रूटिंग को संभालने के लिए एक और अधिक लचीला और सुविधाजनक तरीका प्रदान करता है।</p>    
    
<p>1. यदि आप <b>नपम</b> का उपयोग कर रहे हैं, तो अपने टर्मिनल खोलें और निम्नलिखित कमांड चलाएं:</p>

<b>npm install react-router-dom</b>

<p>2. यदि आप <b>यार्न</b> का उपयोग कर रहे हैं, तो अपने टर्मिनल खोलें और निम्नलिखित कमांड चलाएं:</p>

<b>yarn add react-router-dom</b> 

<p>स्थापना के बाद, आप <b>रिएक्ट-राउटर-डोम</b> पैकेज से आवश्यक कंपोनेंट्स को आयात कर सकते हैं, जैसा कि मैंने पहले के उदाहरणों में दिखाया।</p>

<p>रिएक्ट राउटर के अधिक जानकारी के लिए, कृपया उनकी आधिकारिक वेबसाइट पर जाएं: <a href="https://reactrouter.com/" target='_blank' > 👉🏼  https://reactrouter.com/.</a></p>    
    
<p>वेबसाइट पर, आपको रिएक्ट राउटर का उपयोग करने के लिए एक व्यापक गाइड मिलेगा, जिसमें शामिल है:</p>    
    
<p>• रिएक्ट राउटर और इसके प्रमुख अवधारणाओं का अवलोकन</p> 

<p>• स्थापना और सेटअप निर्देश</p>

<p>• विभिन्न उपयोग मामलों और परिस्थितियों के उदाहरण</p>

<p>• मुख्य कंपोनेंट्स और यूटिलिटीज के लिए एपीआई दस्तावेज़ीकरण</p>

<p>• सर्वर रेंडरिंग, कोड स्प्लिटिंग और नेस्टेड रूट्स जैसे उन्नत विषय</p>

<p>दस्तावेज़ीकरण के अलावा, आप एक समुदाय फोरम, बग रिपोर्ट्स और फ़ीचर अनुरोधों के लिए एक GitHub रेपोजिटरी, और संबंधित परियोजनाओं और प्लगइन्स का संग्रह जैसे कई मददगार संसाधन भी पा सकते हैं।</p>


<b><p>*  यह टेक्स्ट अनुवादक की मदद से लिखा गया है। यदि आपको कोई गलती मिलती है, तो कृपया हमें बताएं  *</p></b>
   
   <div className='ads-container'>  
   {/*  реклама  */}
  </div>
    </div>
  )
}

export default InReact_5;