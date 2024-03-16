import React from 'react';

function InReact_1() {
  return (
    <div>
       <div className='ad-container'>  
          {/*  реклама  */}
        </div> 
     
     <h1>React JS</h1>

  <p><b>ReactJS</b> एक लोकप्रिय <b>जावास्क्रिप्ट </b>लाइब्रेरी है जिसे <b>फेसबुक</b> द्वारा बनाया गया था। इसे पहली बार 2013 में रिलीज़ किया गया था और तब से इसे वेब डेवलपर्स के बीच बड़ी संख्या में फॉलोअर्स हासिल हुए हैं।</p>

<p>ReactJS को एक विशिष्ट समस्या को हल करने के लिए बनाया गया था - समय के साथ बदलने वाले बड़ी मात्रा में डेटा के साथ जटिल उपयोगकर्ता इंटरफ़ेस बनाने के लिए तेज़ और कुशल तरीके की आवश्यकता। ReactJS से पहले, इस प्रकार के इंटरफ़ेस के निर्माण के लिए बहुत सारे कोड की आवश्यकता होती थी और इसे प्रबंधित करना अक्सर धीमा और कठिन होता था।</p>

<p>ReactJS के पीछे मुख्य विचार उपयोगकर्ता इंटरफ़ेस को अलग-अलग घटकों में विभाजित करना है जिन्हें किसी एप्लिकेशन के विभिन्न भागों में पुन: उपयोग किया जा सकता है। प्रत्येक घटक यूआई के एक छोटे टुकड़े को प्रस्तुत करने के लिए जिम्मेदार है और जटिल इंटरफेस बनाने के लिए इसे आसानी से एक साथ जोड़ा जा सकता है।</p>

<p>ReactJS का एक प्रमुख लाभ यह है कि यह वर्चुअल DOM का उपयोग करता है, जो वास्तविक DOM का हल्का प्रतिनिधित्व है। यह ReactJS को वास्तविक DOM में महंगे अपडेट किए बिना, बहुत कुशल तरीके से UI में अपडेट करने की अनुमति देता है।</p>

<p><b>यहां एक सरल ReactJS घटक का उदाहरण दिया गया है:</b></p>

<code>
  <p><span className='red'>import </span>React  <span className='red'>from</span> <span className='blue'>'react'</span>;</p>

  <p><span className='red'>function</span> <span className='blueviole'>MyComponent</span>(props) {'{'}</p>

  <p><span className='red'>return</span> {'('}</p>

  <p>{'<'}<span className='green'>div</span>{'>'}</p>

  <p>&nbsp;{'<'}<span className='green'>h1</span>{'>'}{'{'}props.<span className='blue'>title{'}'}</span>{'</'}<span className='green'>h1</span>{'>'}</p>

  <p>&nbsp;{'<'}<span className='green'>p</span>{'>'} {'{'}props.<span className='blue'>description</span>{'}'}{'<'}<span className='green'>/p</span>{'>'}</p>

  <p>{'</'}<span className='green'>div</span>{'>'}</p>

  <p>&nbsp;{');'}</p>

  <p>{'}'}</p>

  <p><span className='red'>export default</span> MyComponent;</p>  
</code>
<p>यह घटक दो प्रॉप्स - <b>शीर्षक और विवरण </b>- लेता है और उन्हें एक सरल HTML संरचना में प्रस्तुत करता है। इस घटक का उपयोग उपयोगकर्ता को जानकारी प्रदर्शित करने के लिए पूरे एप्लिकेशन में किया जा सकता है।</p>

<p>यदि आप ReactJS के बारे में अधिक जानने में रुचि रखते हैं, तो मैं ReactJS वेबसाइट पर आधिकारिक दस्तावेज़ीकरण से शुरुआत करने की सलाह दूंगा: <a href='https://react.dev/' target='_blank' > 👉🏼 < b>https://react.dev/</b> </a>. वहां आपको ट्यूटोरियल, गाइड और संदर्भ सामग्री सहित ReactJS के साथ शुरुआत करने के बारे में ढेर सारी जानकारी मिलेगी।</p>

<p>रिएक्ट के साथ काम करने के लिए Node.js इंस्टॉल करने के लिए, नीचे दिए गए चरणों का पालन करें:</p>

<h1>विंडोज़ पर Node.js इंस्टॉल करना</h1>

<p>1. आधिकारिक Node.js वेबसाइट पर जाएँ:<a href='https://nodejs.org/' target='_blank' > 👉🏼 https://nodejs.org/ </a></p>

<p>2. "विंडोज इंस्टालर" संस्करण के लिए "डाउनलोड" बटन पर क्लिक करें</p>

<p>3. डाउनलोड किए गए इंस्टॉलर को चलाएं और Node.js</p> इंस्टॉल करने के लिए संकेतों का पालन करें

<p>4. एक बार इंस्टॉलेशन पूरा हो जाने पर, कमांड प्रॉम्प्ट खोलें और यह सत्यापित करने के लिए नोड -v टाइप करें कि Node.js सही तरीके से इंस्टॉल है</p>
<h1>Ubuntu पर Node.js इंस्टॉल करना</h1>

<p>1. एक टर्मिनल विंडो खोलें</p>

<p>2. <b>sudo apt update to update</b> पैकेज मैनेजर</p> कमांड चलाएँ

<p>3. Node.js इंस्टॉल करने के लिए <b>sudo apt install nodejs</b> कमांड चलाएँ</p>

<p>4. यह सत्यापित करने के लिए कि Node.js सही ढंग से स्थापित है</p> कमांड <b>node -v</b> चलाएँ

<b>यहां एक उदाहरण दिया गया है कि Node.js और React को एक साथ कैसे उपयोग करें:</b>

<p>1. <b>npx create-react-app my-app</b></p> कमांड का उपयोग करके एक नया रिएक्ट ऐप बनाएं

<p>2. <b>cd my-app</b></p> कमांड का उपयोग करके <b>my-app</b> निर्देशिका में बदलें

<p>3. <b>npm प्रारंभ</b></p> कमांड का उपयोग करके विकास सर्वर प्रारंभ करें

<p>4. एक वेब ब्राउज़र खोलें और रिएक्ट ऐप को चालू देखने के लिए <b>http://localhost:3000</b> पर जाएँ</p>
    
  <p>यदि आप Node.js और React के बारे में अधिक जानने में रुचि रखते हैं, तो मैं दोनों तकनीकों के लिए आधिकारिक दस्तावेज़ की जाँच करने की सलाह दूंगा। यहां उनकी संबंधित वेबसाइटों के लिंक दिए गए हैं:</p>
    
  <p><b><a href='https://nodejs.org/' target='_blank' > 👉🏼 Node.js</a></b></p>

  <p><b> <a href='https://react.dev/' target='_blank' > 👉🏼 React.js</a></b> </p>

  <p><b>रिएक्ट के साथ काम करने के लिए, आपको निम्नलिखित की अच्छी समझ होनी चाहिए:</b></p>

  <p>1. <span className='chocolate'>HTML</span>/<span className='blue'>CSS</span>: आपको HTML और CSS की अच्छी समझ होनी चाहिए, क्योंकि रिएक्ट का उपयोग मुख्य रूप से यूजर इंटरफेस (यूआई) बनाने के लिए किया जाता है ) और वेब एप्लिकेशन।</p>

  <p>2. <span className='yellow'>जावास्क्रिप्ट</span>: रिएक्ट एक जावास्क्रिप्ट लाइब्रेरी है, इसलिए आपको जावास्क्रिप्ट की ठोस समझ होनी चाहिए, जिसमें फ़ंक्शन, एरे, ऑब्जेक्ट और स्कोप जैसी अवधारणाएं शामिल हैं।</p>

  <p>3. <span className='red'>ES6</span>: रिएक्ट बहुत हद तक ES6 सुविधाओं जैसे एरो फ़ंक्शंस, डिस्ट्रक्चरिंग और क्लासेस पर निर्भर करता है, इसलिए आपको इन सुविधाओं की अच्छी समझ होनी चाहिए।</p>

  <p>4. <span className='blueviole'>JSX</span>: जैसा कि पहले उल्लेख किया गया है, JSX जावास्क्रिप्ट के लिए एक सिंटैक्स एक्सटेंशन है जो आपको अपनी जावास्क्रिप्ट फ़ाइलों में HTML-जैसा कोड लिखने की अनुमति देता है। आपको यह समझने की आवश्यकता होगी कि JSX कैसे काम करता है और UI घटकों को परिभाषित करने के लिए इसका उपयोग कैसे करें।</p>

  <p>5. <span className='green'>Node.js</span> और <span className='red'>npm</span>: रिएक्ट एप्लिकेशन आमतौर पर Node.js और npm पैकेज मैनेजर का उपयोग करके बनाए जाते हैं। आपको यह समझने की आवश्यकता होगी कि इन उपकरणों को कैसे स्थापित करें और उपयोग करें।</p>

  <p>6. <span className='blue'>React</span> इकोसिस्टम: टूल और लाइब्रेरी की एक विस्तृत श्रृंखला है जो आमतौर पर रिएक्ट इकोसिस्टम में उपयोग की जाती है, जैसे कि रिएक्ट राउटर, रेडक्स और एक्सियोस। आपको यह समझने की आवश्यकता होगी कि ये उपकरण कैसे काम करते हैं और रिएक्ट एप्लिकेशन बनाने के लिए उनका उपयोग कैसे करें।</p>

  <p>7. <span className='dev-tools'>विकास उपकरण</span>: आपको विज़ुअल स्टूडियो कोड, क्रोम DevTools और Git जैसे विकास उपकरणों से भी परिचित होना होगा।</p>
   
  <b><p>*  यह टेक्स्ट अनुवादक की मदद से लिखा गया है। यदि आपको कोई गलती मिलती है, तो कृपया हमें बताएं  *</p></b>
   
    <div className='ads-container'>  
    {/*  реклама  */}
   </div>
    </div>
  )
}

export default InReact_1;