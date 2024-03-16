import React from 'react';

function InReact_3() {
  return (
    <div>
      <div className='ad-container'>  
          {/*  реклама  */}
        </div> 
        
      <h1>रिएक्ट इवेंट्स</h1>

<p>रिएक्ट कॉम्पोनेंट्स में इवेंट्स को हैंडल करने का एक तरीका प्रदान करता है, जो वैनिला जावास्क्रिप्ट में इवेंट्स को हैंडल करने के तरीके के समान है। रिएक्ट में, आप on<b>[इवेंटनाम]</b> सिंटैक्स का उपयोग करके किसी भी JSX तत्व में इवेंट हैंडलर जोड़ सकते हैं।</p>

<p>उदाहरण के लिए, चलो मान लें कि हमारे पास एक बटन है जिसे रिएक्ट कॉम्पोनेंट में क्लिक इवेंट को हैंडल करना है:</p>

<code>
  <p><span className='red'>function</span> <span className='blueviole'>MyButton</span>(props) {'{'} </p>

  <p><span className='red'>function</span> <span className='blueviole'>handleClick</span>() {'{'}</p>

  <p><span className='blue'>{"console.log"}</span>(<span className='blue1'>'बटन क्लिक किया'</span>); </p>

  <p>{' }'}</p>

  <p><span className='red'>return</span> {'('}</p>

  <p>{'<'}<span className='green'>button</span> <span className='blue'>onClick</span>={'{handleClick}'}{'>'}मुझे क्लिक करें{'</'}<span className='green'>button</span>{'>'}  </p>

  <p>&nbsp;{');'}</p>

  <p>{'} '}</p>
</code>

<p>इस उदाहरण में, हमने एक <b>MyButton</b> कॉम्पोनेंट को परिभाषित किया है जिसमें एक बटन तत्व है जिसमें <b>onClick</b> प्रॉप एक <b>handleClick</b> नामक फ़ंक्शन को सेट किया गया है। जब बटन क्लिक किया जाता है, तो <b>handleClick</b> फ़ंक्शन को कॉल किया जाएगा, और संदेश "Button clicked" कंसोल में लॉग किया जाएगा।</p>

<p>आप इवेंट हैंडलर फ़ंक्शन को एरो फ़ंक्शन का उपयोग करके आर्ग्यूमेंट पास कर सकते हैं। उदाहरण के लिए, चलो मान लें कि हमारे पास बटन के रूप में रेंडर करने के लिए आइटम की एक सूची है:</p>

<code>
 <p><span className='red'>function</span> <span className='blueviole'>ItemList</span>(props) {'{'}</p>

<p><span className='red'>const</span> items = props.<span className='blue'>items</span>; </p>

<p><span className='red'>function</span> <span className='blueviole'>handleClick</span>(item) {'{'}</p>

<p><span className='blue'>{'console.log'}</span>(<span className='blue1'>`Item $</span><span className='blue1'>{'{item'}.<span className='blue'>id</span>{'}'}</span><span className='blue1'> clicked`</span>); </p>

<p>&nbsp;{'}'}</p>

<p><span className='red'>const</span> buttonList = {'items'}.<span className='blue'>map</span>{'('}(item) {'=>'} </p>

<p>{'<'}<span className='green'>button</span> <span className='blue1'>key</span>= {'{item'}.<span className='blue'>{'id}'}</span> <span className='blue'>onClick</span>={'{()'} {'=>'} <span className='blueviole'>handleClick</span>(item){'}'}{'>'}</p>

<p>{'{item'}.<span className='blue'>{'name}'}</span></p>

<p>{'</'}<span className='green'>button</span>{'>'}</p>

<p>{' ); '}</p>

<p><span className='red'>return</span> {'('}</p>

<p>{'<'}<span className='green'>div</span>{'>'}</p>

<p>{'{buttonList} '}</p>

<p>{'</'}<span className='green'>div</span>{'>'}</p>

<p>&nbsp;{');'}</p>

<p>{'} '}</p>
</code>

<p>इस उदाहरण में, हमने एक <b>ItemList</b> कॉम्पोनेंट को परिभाषित किया है जो एक <b>items</b> प्रॉप को लेता है। हमने एक <b>handleClick</b> फ़ंक्शन की परिभाषा की है जो एक <b>item</b> आर्ग्यूमेंट को लेती है, जो कि कॉरेस्पोन्डिंग बटन क्लिक होने पर कंसोल में संदेश लॉग करने के लिए उपयोग किया जाएगा।</p>

<p>हम <b>map</b> मेथड का उपयोग करते हैं ताकि नए <b>{'<button>'}</b> तत्व का एक नया एरे बनाया जा सके, जहाँ प्रत्येक तत्व <b>items</b> प्रॉप में एक आइटम को संदर्भित करता है। हम प्रत्येक <b>{'<button>'}</b> तत्व का <b>id</b> प्रॉप को सेट करते हैं, जो कि रिएक्ट में अपडेट को अनुकूलित करने में मदद करने के लिए आवश्यक है। हम इस भी एक एरो फ़ंक्शन का उपयोग करते हैं ताकि जब बटन क्लिक हो, तो <b>item</b> ऑब्जेक्ट को <b>handleClick</b> फ़ंक्शन को पास किया जा सके।</p>

<p>फिर हम एक <b>{'<div>'}</b> तत्व लौटाते हैं जो <b>buttonList</b> एरे को शामिल करता है।</p>

<h5>React Events</h5>

    <p className='blue1'>onKeyDown</p>

    <p className='blue1'>onKeyPress </p>

    <p className='blue1'>onKeyUp</p>

    <p className='blue1'>onFocus</p>

    <p className='blue1'>onBlur</p>

    <p className='blue1'>onChange</p>

    <p className='blue1'>onInput</p>

    <p className='blue1'>onInvalid </p>

    <p className='blue1'>onSubmit</p>

    <p className='blue1'>onClick</p>

    <p className='blue1'>onContextMenu</p>

    <p className='blue1'>onDoubleClick</p>

    <p className='blue1'>onDrag</p>

    <p className='blue1'>onDragEnd</p>

    <p className='blue1'>onDragEnter</p>

    <p className='blue1'>onDragExit</p>

    <p className='blue1'>onDragLeave</p>

    <p><a href="https://react.dev/reference/react-dom/components/common#react-event-object" target='_blank' > 👉🏼 React https://react.dev/reference/react-dom/components/common#react-event-object</a> </p>

    <b>रिएक्ट स्टेट क्लास कॉम्पोनेंट में</b>

<p>रिएक्ट में, स्टेट को क्लास कॉम्पोनेंट्स का उपयोग करके भी प्रबंधित किया जा सकता है। क्लास कॉम्पोनेंट्स जावास्क्रिप्ट क्लास होते हैं जो <b>React.Component</b> क्लास को विस्तारित करते हैं और <b>render</b> मेथड को लागू करते हैं जो कॉम्पोनेंट का UI लौटाता है।</p>

<p>यहाँ एक उदाहरण है जो कि स्टेट को प्रबंधित करने वाला एक क्लास कॉम्पोनेंट है:</p>

<code>
   <p><span className='red'>import</span> React,{"{ Component }"} <span className='red'>from</span> 'react'; </p>

   <p> <span className='red'>class</span> Counter <span className='red'>extends</span> Component {'{'}</p>

   <p><span className='blue'>constructor</span>(props) {'{'}</p>

   <p>super (props);</p>

   <p><span className='red'>this</span>.<span className='blue'>state</span> = {'{'}<span className='blue'>count</span>: <span className='blue1'>0</span> {'}'};</p>

   <p><span className='red'>this</span>.<span className='blue'>handleClick</span> = <span className='red'>this</span>.<span className='blue'>handleClick</span>.<span className='blue'>bind</span>(<span className='red'>this</span>);</p>

   <p>&nbsp;{'}'}</p>

   <p><span className='blue'>handleClick</span>() {'{'}</p>

   <p><span className='red'>this</span>.<span className='blue'>setState</span>{'({'} <span className='blue'>count</span>: <span className='red'>this</span>.<span className='blue'>state</span>.<span className='blue'>count</span> + <span className='blue1'>1</span>{' })'}; </p>

   <p>{'}'}</p>

   <p><span className='blue'>render</span>() {'{'}</p>

   <p><span className='red'>return</span> {'('}</p>

   <p>{'<'}<span className='green'>div</span>{'>'}</p>

   <p>{'<'}<span className='green'>p</span>{'>'}आपने {'{'}<span className='red'>this</span>.<span className='blue'>state</span>.<span className='blue'>count</span>{'}'} बार क्लिक किया है{'</'}<span className='green'>p</span>{'>'}</p>

   <p>{'<'}<span className='green'>button</span> <span className='blue'>onClick</span>={'{'}<span className='red'>this</span>.<span className='blue'>handleClick</span>{'}'}{'>'}मुझे क्लिक करें{'</'}<span className='green'>button</span>{'>'}</p>

   <p>{'</'}<span className='green'>div</span>{'>'}</p>

   <p>&nbsp;&nbsp;{');'}</p>

   <p>&nbsp;{'}'}</p>

   <p>{'}'}</p>
</code>

<p>इस उदाहरण में, हम <b>Counter</b> कक्षा को <b>React.Component</b> का विस्तार करते हैं। कक्षा के अंदर, हम एक निर्माता को परिभाषित करते हैं जो संबंधित का प्रारंभिक स्थिति को एक नई वस्तु के साथ सेट करता है जिसमें 0 की <b>काउंट</b> संपत्ति होती है। हम <b>bind</b> का उपयोग करके उपककक्ष के उदाहरण को उपककक्ष अवस्था से जोड़ने के लिए <b>हैंडलक्लिक</b> विधि को बाँधते हैं।</p>

<p><b>हैंडलक्लिक</b> विधि नई वस्तु को बुलाकर कक्ष की स्थिति को अपडेट करती है जिसमें <b>काउंट</b> संपत्ति को 1 से बढ़ाती है।</p>

<p><b>रेंडर</b> विधि उपकक्ष का यूआई लौटाती है, जिसमें एक <b>{'<p>'}</b> तत्व शामिल है जो <b>काउंट</b> का वर्तमान मान प्रदर्शित करता है, और जब क्लिक किया जाता है, <b>हैंडलक्लिक</b> को बुलाता है।</p>

<p>फ़ंक्शनल कक्षों की तरह, अवस्था को सीधे संशोधित करना महत्वपूर्ण है। इसके बजाय, हमेशा अवस्था को अपडेट करने के लिए <b>this.setState</b> का उपयोग करें।</p>

<p>हालांकि कक्ष कक्ष की अब भी React में समर्थित हैं, साधारण रूप से, हुक्स के परिचय के साथ फ़ंक्शनल कक्षों को अधिक पसंद किया जाता है। तथापि, पुराने कोडबेस को बनाए रखने और अपडेट करने के लिए कक्ष कक्षों को समझना भी महत्वपूर्ण है।</p>

<b>React जीवनचक्र</b>

<p>React में, कक्षों के पास एक जीवनचक्र होता है जो उनके अस्तित्व के दौरान वे जो चरण गुज़रते हैं वह वर्णित करता है। React जीवनचक्र को समझना शक्तिशाली React अनुप्रयोग बनाने और बनाए रखने के लिए महत्वपूर्ण है।</p>

<p>यहां एक जीवनचक्र विधियों का एक संक्षिप्त अवलोकन है, चरणों द्वारा समूहीकृत:</p>

<h4>माउंटिंग चरण:</h4>

<p><b>{'constructor()'}</b>: कक्षा का प्रारंभिकरण होने पर कॉल किया जाता है।</p>

<p><b>{'static getDerivedStateFromProps()'}</b>: कक्षा का प्रारंभिकरण होने पर, और फिर जब यह नए प्रॉप्स प्राप्त करता है। बहुत कम उपयोग होता है।</p>

<p><b>{'render()'}</b>: कभी भी कक्ष को पुनः रेंडर किया जाना चाहिए, कॉल किया जाता है।</p>

<p><b>{'componentDidMount()'}</b>: कक्ष को पहली बार रेंडर किए जाने के बाद कॉल किया जाता है।</p>

<h4>अपडेटिंग चरण:</h4>

<p><b>{'static getDerivedStateFromProps()'}</b>: कक्षा नए प्रॉप्स प्राप्त करती है तो कॉल किया जाता है।</p>

<p><b>{'shouldComponentUpdate()'}</b>: कक्ष को पुनः रेंडर करने से पहले कॉल किया जाता है। आपको अपडेट को रद्द करने की अनुमति देता है।</p>

<p><b>{'render()'}</b>: कभी भी कक्ष को पुनः रेंडर किया जाना चाहिए, कॉल किया जाता है।</p>

<p><b>{'getSnapshotBeforeUpdate()'}</b>: कक्ष को अपडेट होने से पहले कॉल किया जाता है। बहुत कम उपयोग होता है।</p>

<p><b>{'componentDidUpdate()'}</b>: कक्ष को अपडेट होने के बाद कॉल किया जाता है।</p>

<h4>अनवासरण चरण:</h4>

<p><b>{'componentWillUnmount()'}</b>: कक्ष को DOM से हटाने के लिए कॉल किया जाता है।</p>

<p>यहां एक उदाहरण है जो जीवनचक्र विधियों का प्रदर्शन करता है:</p>


<code>
  <p><span className='red'>import</span> React,{"{ Component }"} <span className='red'>from</span> 'react'; </p>
  
  <p><span className='red'>class</span> LifecycleDemo <span className='red'>extends</span> Component {'{'}</p>

  <p><span className='blue'>constructor</span>(props) {'{'} </p>

  <p>{'super(props);'}</p>  

  <p><span className='red'>{'this'}</span>.<span className='blue'>state</span>= {'{'}<span className='blue'>count</span>: <span className='blue1'>0</span> {'}'};</p>

  <p>{"console"}.<span className='blue'>log</span>(<span className='blue1'>'constructor'</span>);</p>

  <p>{'}'}</p>

  <p><span className='red'>static</span> <span className='blue'>getDerivedStateFromProps</span>(props, state) {'{'}</p>

  <p>{"console"}.<span className='blue'>log</span>('<span className='blue1'>getDerivedStateFromProps</span>');</p>

  <p><span className='red'>return null</span>;</p>

  <p>{'}'}</p>

  <p><span className='blue'>componentDidMount</span>() {'{'}</p>

  <p>{"console"}.<span className='blue'>log</span>(<span className='blue1'>'componentDidMount'</span>); </p>

  <p>{'}'}</p>

  <p><span className='blue'>shouldComponentUpdate</span>(nextProps, nextState) {'{'}</p>

  <p>{"console"}.<span className='blue'>log</span>(<span className='blue1'>'shouldComponentUpdate'</span>);</p>

  <p><span className='red'>return</span> <span className='blue'>true</span>;</p>

  <p>{'}'}</p>

  <p><span className='blue'>getSnapshotBeforeUpdate</span>(prevProps, prevState) {'{'}</p>

  <p>{"console"}.<span className='blue'>log</span>(<span className='blue1'>'getSnapshotBeforeUpdate'</span>);</p>

  <p><span className='red'>return null</span>;</p>

  <p>{'}'}</p>

  <p><span className='blue'>componentDidUpdate</span>(prevProps, prevState, snapshot) {'{'}</p>

  <p>{"console"}.<span className='blue'>log</span>(<span className='blue1'>'componentDidUpdate'</span>); </p>

  <p>{'}'}</p>

  <p><span className='blue'>componentWillUnmount</span>() {'{'} </p>

  <p>{"console"}.<span className='blue'>log</span>(<span className='blue1'>'componentWillUnmount'</span>); </p>

  <p>{'}'}</p>

  <p> <span className='blue'>handleClick</span> = () {'=>'} {'{'}</p>

  <p><span className='red'>this</span>.<span className='blue'>setState</span>{'({'} <span className='blue'>count</span>: <span className='red'>this</span>.<span className='blue'>state</span>.<span className='blue'>count</span> + <span className='blue1'>1</span> {'})'};</p>

  <p>{'}; '}</p>

  <p><span className='blue'>render</span>() {'{'} </p>

  <p>{"console"}.<span className='blue'>log</span>(<span className='blue1'>'render'</span>);</p>

  <p><span className='red'>return</span> {'('}</p>

  <p>{'<'}<span className='green'>div</span>{'>'}</p>

  <p>{'<'}<span className='green'>p</span>{'>'}आपने {'{'}<span className='red'>this</span>.<span className='blue'>state</span>.<span className='blue'>count</span>{'}'} बार क्लिक किया{'</'}<span className='green'>p</span>{'>'}</p>

  <p>{'<'}<span className='green'>button</span> <span className='blue'>onClick</span>={'{'}<span className='red'>this</span>.<span className='blue'>handleClick</span>{'}>'}मुझे क्लिक करें{'</'}<span className='green'>button</span>{'>'}</p>
  
  <p>{'</'}<span className='green'>div</span>{'>'}</p>

  <p>&nbsp;&nbsp;{');'}</p>

  <p>&nbsp;{'}'}</p>

  <p>{'}'}</p>
</code>

<p>इस उदाहरण में, हम एक <b>LifecycleDemo</b> कक्षा परिभाषित करते हैं जो संघ की जीवनकाल के प्रत्येक चरण के दौरान कन्सोल में संदेश लॉग करता है। हम एक <b>handleClick</b> विधि भी परिभाषित करते हैं जो संघ की स्थिति को अपडेट करती है।</p>

<p>जब संघ पहली बार माउंट होता है, तो निम्नलिखित विधियाँ क्रम में बुलाई जाती हैं: <b>कंस्ट्रक्टर, getDerivedStateFromProps, render, और componentDidMount</b>। जब भी संघ की स्थिति बदलती है, तो <b>shouldComponentUpdate, render, और componentDidUpdate </b> विधियाँ उसी क्रम में बुलाई जाती हैं।</p>

<p>संघ को अनमाउंट किया जाता है, तो <b>componentWillUnmount</b> विधि को बुलाया जाता है।</p>

<p>रिएक्ट कंपोनेंट जीवनकाल को समझना महत्वपूर्ण है ताकि आप अपने कंपोनेंट को अनुकूलित कर सकें और सामान्य खतरों जैसे मेमोरी लीक और अनंत लूप्स से बच सकें। लेकिन यदि पहले में यह भारी लगता है, तो चिंता न करें - अभ्यास के साथ, आप इसके साथ अधिक आराम से हो जाएंगे।</p>

<b><p>*  यह टेक्स्ट अनुवादक की मदद से लिखा गया है। यदि आपको कोई गलती मिलती है, तो कृपया हमें बताएं  *</p></b>
   
   <div className='ads-container'>  
   {/*  реклама  */}
  </div>
    </div>
  )
}

export default InReact_3;