import React from 'react';

function InReact_6() {
  return (
    <div>
      <div className='ad-container'>  
          {/*  реклама  */}
        </div> 

      <h1>रिएक्ट रेफ</h1>

<p>रिएक्ट में, <b>रेफ</b> एक प्रकार का तरीका है जिससे किसी रेंडर किए गए तत्व के अंतर्निहित डोम नोड या रिएक्ट कॉम्पोनेंट इंस्टेंस तक पहुँचा जा सकता है। आप रेफ का उपयोग करके किसी कॉम्पोनेंट के कुछ गुण या विधियों तक पहुँच सकते हैं, या उसके व्यवहार को संशोधित कर सकते हैं।</p>

<p>यहाँ एक उदाहरण है कि रिएक्ट में रेफ कैसे बनाया जाता है:</p>

<code>
  <p><span className='red'>import</span> React, {'{ useRef }'} <span className='red'>from</span> <span className='blue1'>'react'</span>;  </p>

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

<p>इस उदाहरण में, हम <b>useRef</b> हुक का उपयोग करके एक <b>रेफ</b> बनाते हैं। फिर हम <b>रेफ</b> प्रॉप का उपयोग करके <b>इनपुट</b> तत्व को पास करते हैं।</p>

<p>हम एक <b>handleClick</b> फ़ंक्शन भी बनाते हैं जो <b>रेफ</b> की <b>current</b> गुणवत्ता का उपयोग करता है ताकि <b>इनपुट</b> तत्व पर <b>फोकस</b> विधि को कॉल किया जा सके। इससे हम यह सेट कर सकते हैं कि उपयोगकर्ता क्लिक करते हैं "फोकस इनपुट" बटन पर इनपुट पर फोकस करते हैं।</p>

<p>कुल मिलाकर, <b>रेफ</b> का उपयोग रिएक्ट में कॉम्पोनेंट्स तक पहुँचने और प्रबंधित करने के लिए एक शक्तिशाली उपकरण हो सकता है। हालांकि, इन्हें सावधानीपूर्वक उपयोग करना महत्वपूर्ण है और अनिवार्य नहीं है, क्योंकि यह आपकी कोड को समझने और बनाए रखने में कठिनी कर सकता है।</p>

<b>इवेंट इमिटर</b>

<p>इवेंट इमिटर एक डिज़ाइन पैटर्न है जो एक प्रोग्राम में वस्तुओं को आपस में संचार करने की अनुमति देता है जो इवेंट्स को ट्रिगर और हैंडल करने के द्वारा होता है। सरल शब्दों में, एक इवेंट इमिटर प्रोग्राम के भीतर संदेश प्रसारित और प्राप्त करने के लिए एक तंत्र है।</p>

<p>जावास्क्रिप्ट में, EventEmitter क्लास एक इनबिल्ट मॉड्यूल है जो इस पैटर्न को कैसे लागू करने का तरीका प्रदान करता है। यहाँ नोड.जेएस में EventEmitter का उपयोग करने का एक उदाहरण है:</p>

<code>
  <p><span className='red'>const</span> EventEmitter = <span className='blueviole'>require</span>(<span className='blue1'>'events'</span>); </p>

  <p><span className='red'>class</span> MyEmitter <span className='red'>extends</span> EventEmitter {"{}"}</p>

  <p><span className='red'>const</span> myEmitter = <span className='red'>new</span> MyEmitter(); </p>

  <p>myEmitter.<span className='blue'>on</span>{'('}<span className='blue1'>'event'</span>, (arg){" => {"}</p>

  <p> console.<span className='blue'>log</span>(<span className='blue1'>'Event triggered with argument:'</span>, arg); </p>

  <p>{"});"}</p>

  <p> myEmitter.<span className='blue'>emit</span>(<span className='blue1'>'event', 'Hello, world!'</span>); </p>
</code>

<p>इस उदाहरण में, हम एक कस्टम <b>MyEmitter</b> क्लास बनाते हैं जो <b>EventEmitter</b> क्लास को बढ़ाता है। फिर हम इस क्लास का एक उदाहरण बनाते हैं और <b>on</b> मेथड का उपयोग करके <b>इवेंट</b> इवेंट के लिए एक सुनने वाला विधि परिभाषित करते हैं। अंत में, हम <b>इवेंट</b> इवेंट को एमिट करते हैं और एक स्ट्रिंग आर्ग्यूमेंट पास करते हैं, जो सुनने वाले को ट्रिगर करता है और कॉन्सोल पर आर्ग्यूमेंट को लॉग करता है।</p>

<p>कुल मिलाकर, इवेंट इमिटर का उपयोग करना आपके कोड में पब-सब पैटर्न को लागू करने का एक उपयोगी तरीका हो सकता है, जहाँ आपके प्रोग्राम के विभिन्न हिस्से एक-दूसरे के साथ संचार कर सकते हैं बिना एक-दूसरे को मजबूती से बाँधे। हालांकि, इस पैटर्न का उपयोग सावधानीपूर्वक करना महत्वपूर्ण है और इवेंट्स पर अधिक निर्भर नहीं होना चाहिए, क्योंकि यह आपके कोड को समझने और बग निकालने में कठिन बना सकता है।</p>

<p><b>रिएक्ट</b> में, आप अपने एप्लिकेशन में विभिन्न कॉम्पोनेंट्स के बीच संचार के लिए इवेंट इमिटर पैटर्न का उपयोग कर सकते हैं। यह उन कॉम्पोनेंट्स के बीच डेटा पास करने या क्रियाओं को ट्रिगर करने के लिए उपयोगी हो सकता है जो सीधे रूप से एक-दूसरे संबंधित नहीं हैं।</p>

<p>रिएक्ट में इवेंट इमिटर पैटर्न को लागू करने का एक तरीका तीसरे पक्ष की पुस्तकालय का उपयोग करना है जैसे कि <b>eventemitter3 या mitt</b>। ये पुस्तकालय इवेंट्स को बनाने और सब्सक्राइब करने के लिए एक सरल API प्रदान करती हैं, और वे क्लास कॉम्पोनेंट्स और हुक्स के साथ उपयोग किए जा सकते हैं।</p>

<p>यहाँ एक <b>eventemitter3</b> का उपयोग करने का एक उदाहरण है रिएक्ट कॉम्पोनेंट में:</p>

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

<p>इस उदाहरण में, हम <b>EventEmitter का एक उदाहरण बनाते हैं जिसे emitter कहा जाता है।</b> <b>ComponentA</b> में, हम <b>useEffect</b> हुक का उपयोग करते हैं ताकि कुछ डेटा के साथ <b>eventA</b> नामक एक घटना उत्पन्न करें। <b>ComponentB</b> में, हम <b>useEffect</b> हुक का उपयोग करते हैं ताकि <b>eventA</b> घटना की सदस्यता की जा सके, और एक कॉलबैक फ़ंक्शन <b>handleEventA</b> को परिभाषित करें जो कंसोल पर डेटा को लॉग करता है।</p>

<p>जब ComponentA माउंट किया जाता है, तो यह उस डेटा के साथ घटना उत्पन्न करता है। ComponentB माउंट किया जाता है, तो यह घटना उत्पन्न करता है और उस नाम की किसी भी घटना के लिए सुनने लग जाता है। जब घटना उत्पन्न होती है, तो handleEventA डेटा के साथ कॉल किया जाता है, और यह मैसेज कंसोल पर लॉग करता है।</p>

<p>सम्ग्र, React में एक घटना उत्पन्न करने का पैटर्न उपयोग करना कंपोनेंट्स के बीच संचार को लागू करने का एक उपयोगी तरीका हो सकता है जो सीधे संबंधित नहीं हैं। हालांकि, इस पैटर्न का सावधानी से उपयोग करना महत्वपूर्ण है और इवेंट्स पर अधिक निर्भर न करें, क्योंकि यह आपके कोड को समझना और डीबग करना कठिन बना सकता है।</p>

<h4>रियैक्ट ऐनिमेशन</h4>

<p>React में, आप विभिन्न तकनीकों का उपयोग करके अपने कंपोनेंट्स में एनिमेशन जोड़ सकते हैं। जब कुछ बदलता है, तो एनिमेशन आपके यूआई को और आकर्षक बना सकता है और उपयोगकर्ता को विज़ुअल प्रतिक्रिया प्रदान कर सकता है।</p>

<p>रिएक्ट में एनिमेशन लागू करने का एक लोकप्रिय तरीका सीएसएस ट्रांसीशन या एनिमेशन का उपयोग करना है। आप अपने कंपोनेंट्स में सीएसएस क्लासेस जोड़ सकते हैं ताकि इन एनिमेशन को ट्रिगर किया जा सके, और रिऐक्ट का <b>className</b> प्रॉप का उपयोग करके कंपोनेंट की स्थिति के आधार पर क्लासेस टॉगल कर सकते हैं।</p>

<p>यहां एक उदाहरण है कि जब बटन क्लिक किया जाता है, तो CSS ट्रांसीशन का उपयोग कैसे किया जाता है:</p>

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

<p>इस उदाहरण में, हम एक कंपोनेंट को परिभाषित करते हैं <b>Button</b> जो <b>useState</b> हुक का उपयोग करके बटन के क्लिक किए जाने का पता लगाता है कि क्या नहीं किया गया है। जब बटन क्लिक किया जाता है, हम <b>isClicked</b> स्थिति को <b>true</b> पर सेट करते हैं, जो बटन में <b>clicked</b> क्लास जोड़ता है। हम फिर <b>setTimeout</b> का उपयोग करके <b>clicked</b> क्लास को 1 सेकंड के बाद हटाने के लिए करते हैं, जो मूल स्थिति में लौटने का ट्रांसीशन ट्रिगर करता है।</p>

<p>हम बटन और क्लिक किया गया <b>class</b> के लिए शैलियां परिभाषित करने वाली एक सीएसएस फ़ाइल भी परिभाषित करते हैं <b>Button.css</b>:</p>

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

<p>इस सीएसएस फ़ाइल में, हम बटन के लिए शैलियां परिभाषित करते हैं और <b>button</b> शैली पर <b>transition</b> प्रॉपर्टी का उपयोग ट्रांसिशन के लिए किया जाता है। हम <b>clicked</b> क्लास को भी परिभाषित करते हैं, जो लागू किए जाने पर <b>background-color</b> को लाल कर देता है।</p>

<p>React में एनिमेशन लागू करने का एक और तरीका तृतीय-पक्ष पुस्तकालय जैसे <b>react-spring या framer-motion</b> का उपयोग करना है। ये पुस्तकालय संवेदनशील एपीआई प्रदान करती हैं जिससे जटिल एनिमेशन बनाने के लिए और उन्नत उपयोग के मामलों के लिए उपयोगी हो सकते हैं।</p>

<p><b>react-transition-group</b> एक तृतीय-पक्ष पुस्तकालय है जो रिएक्ट के लिए सीएसएस ट्रांसीशन और एनिमेशन आसानी से जोड़ने का एक तरीका प्रदान करता है। यह एक संग्रह के कंपोनेंट्स और एपीआई प्रदान करता है जो ट्रांसिशन की जीवनकाल का प्रबंधन करता है, उत्पन्न और अनुसरण करने वाले तत्वों को, क्लासेस को जोड़ने और हटाने को, और एनिमेशन को विलम्बित करने को।</p>

<b>{'npm install react-transition-group'}</b>

<p><b>react-transition-group में मुख्य कंपोनेंट्स Transition, CSSTransition, और TransitionGroup हैं</b>। यहां प्रत्येक कंपोनेंट का संक्षिप्त अवलोकन है:</p>

<p>• <b>Transition</b>: यह कंपोनेंट एक ट्रांसीशन की मौलिक जीवनकाल को परिभाषित करता है, जैसे कि प्रवेश, प्रवेश, निकासी, और निकाल गए हालात। आप इस कंपोनेंट का उपयोग कर सकते हैं ताकि ट्रांसिशन की विभिन्न चरणों को ट्रिगर करें </p>

<p>• <b>CSSTransition</b>: यह कंपोनेंट <b>Transition</b> कंपोनेंट का विस्तार करता है और सीएसएस ट्रांसिशन और एनिमेशन का समर्थन जोड़ता है। आप अपने कंपोनेंट के लिए सीएसएस क्लासेस को निर्दिष्ट कर सकते हैं जो ट्रांसिशन के विभिन्न चरणों के दौरान लागू होंगे, जैसे कि <b>प्रवेश, प्रवेश-सक्रिय, निकासी, और निकासी-सक्रिय</b>।</p>

<p>• <b>TransitionGroup</b>: यह कंपोनेंट एक सेट के <b>Transition या CSSTransition</b> कंपोनेंट्स का प्रबंधन करने के लिए उपयोग किया जाता है। यह कंपोनेंट तत्वों के माउंटिंग और अनमाउंटिंग को ट्रैक करता है और प्रत्येक कंपोनेंट के लिए विभिन्न ट्रांसिशन प्रभाव लागू कर सकता है। </p>

<p>यहां एक उदाहरण है कि <b>react-transition-group</b> का उपयोग कैसे किया जाता है जब एक कंपोनेंट को माउंट किया जाता है, तो इसमें एक फेड-इन एनिमेशन जोड़ा जाता है:</p>

<code>
  <p><span className='red'>import</span> {'React, { useState }'} <span className='red'>from</span> <span className='blue1'>'react'</span>; </p>

  <p><span className='red'>import</span> {'{ CSSTransition }'} <span className='red'>from</span> <span className='blue1'>'react-transition-group'</span>;</p>

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

<p>इस उदाहरण में, हमने एक कंपोनेंट को <b>FadeIn</b> नामक संख्या में परिभाषित किया है जो <b>useState</b> हुक का उपयोग करता है ताकि कंपोनेंट माउंट किया गया है या नहीं का लगातार अनुशंसा रख सकें। जब बटन को क्लिक किया जाता है, हम <b>isMounted</b> स्थिति को <b>true</b> पर सेट करते हैं, जो <b>CSSTransition</b> कंपोनेंट को <b>content</b> डिव को एक फ़ेड-इन एनिमेशन के साथ रेंडर करने के लिए प्रेरित करता है। हम एक CSS फ़ाइल भी परिभाषित करते हैं जिसे <b>FadeIn.css</b> कहा जाता है जो फ़ेड-इन प्रभाव के लिए शैलियों और एनिमेशन को परिभाषित करती है:</p>

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

<p>इस CSS फ़ाइल में, हम संक्षिप्तिकरण के विभिन्न चरणों के लिए कक्षाओं को परिभाषित करते हैं। जब कंपोनेंट प्रवेश करता है, तो इसमें 0 (<b>fade-enter</b>) की अस्पष्टता होती है और 300ms के लिए 1 की अस्पष्टता होती है (<b>fade-enter-active</b>)। जब कंपोनेंट निकास होता है, तो इसमें 1 की अस्पष्टता होती है (<b>fade-exit</b>) और 300ms के लिए 0 की अस्पष्टता होती है (<b>fade-exit-active</b>)।</p>

<p>सम्ग्र, अपने React कंपोनेंट्स में एनिमेशन जोड़ने से आपका UI अधिक आकर्षक और उपयोगकर्ता को दृश्य संवेदनशीलता प्रदान कर सकता है। CSS संक्षेपण या एनिमेशन, या तृतीय-पक्ष पुस्तकालय का उपयोग करके, आप आसानी से अपने कंपोनेंट्स में एनिमेशन जोड़ सकते हैं और उन्हें अधिक गतिशील बना सकते हैं।</p>    


<b><p>*  यह टेक्स्ट अनुवादक की मदद से लिखा गया है। यदि आपको कोई गलती मिलती है, तो कृपया हमें बताएं  *</p></b>
   
   <div className='ads-container'>  
   {/*  реклама  */}
  </div>
    </div>
  )
}

export default InReact_6;