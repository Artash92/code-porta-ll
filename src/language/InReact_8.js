import React from 'react';

function InReact_8() {
  return (
    <div>
      <div className='ad-container'>  
          {/*  реклама  */}
        </div> 
      
      <h1>Redux Thunk</h1>
      
      <p>Redux Thunk रीडक्स के लिए एक मध्यवर्ती पुस्तकालय है जो आपको रीडक्स स्टोर के साथ आसिंक तार्किक कोड लिखने की अनुमति देता है। यह आपको ऐसी क्रियाओं को डिस्पैच करने की अनुमति देता है जो आसिंक कोड, जैसे API अनुरोध या अन्य प्रभाव, को शामिल करती है, अपने कार्रवाई सृजनकर्ताओं को एक फ़ंक्शन में लपेटकर जो एक और फ़ंक्शन वापस करता है।</p>
      
      <p>यहाँ एक उदाहरण है कि Redux Thunk किस प्रकार से एक React अनुप्रयोग में उपयोग किया जा सकता है:</p>

      <code>
        <p><span className='green'>{"// actions.js "}</span></p>

        <p><span className='red'>import</span> axios <span className='red'>from</span> <span className='blue1'>'axios'</span>; </p>

        <p><span className='red'>export const</span> {"fetchUserRequest = () => ({ "}</p>

        <p>&nbsp;&nbsp;<span className='blue'>type</span>: <span className='blue1'>'FETCH_USER_REQUEST'</span>, </p>

        <p>{"}); "}</p>

        <p><span className='red'>export const</span> {"fetchUserSuccess = (user) => ({ "}</p>

        <p>&nbsp;&nbsp;<span className='blue'>type</span>: <span className='blue1'>'FETCH_USER_SUCCESS'</span>,</p>

        <p>&nbsp;&nbsp;<span className='blue'>payload</span>: user, </p>

        <p>{"}); "}</p>

        <p><span className='red'>export const</span> {"fetchUserError = (error) => ({ "}</p>

        <p>&nbsp;&nbsp;<span className='blue'>type</span>: <span className='blue1'>'FETCH_USER_ERROR'</span>, </p>

        <p>&nbsp;&nbsp;<span className='blue'>payload</span>: error, </p>

        <p>{"}); "}</p>
        
        <p><span className='red'>export const</span> {"fetchUser = (userId) => { "}</p>

        <p>&nbsp;<span className='red'>return</span> {"(dispatch) => { "}</p>

        <p>&nbsp;&nbsp;<span className='blueviole'>dispatch</span>(<span className='blueviole'>fetchUserRequest</span>());</p>

        <p>&nbsp;&nbsp;axios.<span className='blue'>get</span>(` <span className='blue1'>{'https://jsonplaceholder.typicode.com/users/$'}</span>{'{userId}'} `)  </p>

        <p>&nbsp;&nbsp;&nbsp;.<span className='blue'>then</span>{"((response) => {"}</p>

        <p>&nbsp;&nbsp;&nbsp;&nbsp;<span className='red'>const</span> user = response.<span className='blue'>data</span>; </p>

        <p>&nbsp;&nbsp;&nbsp;&nbsp;<span className='blueviole'>dispatch</span>(<span className='blueviole'>fetchUserSuccess</span>(user)); </p>

        <p>{"})"}</p>

        <p>&nbsp;&nbsp;&nbsp;.<span className='blue'>catch</span>{"((error) => {"}</p>

        <p>&nbsp;&nbsp;&nbsp;&nbsp;<span className='blueviole'>dispatch</span>(<span className='blueviole'>fetchUserError</span>(error.<span className='blue'>message</span>)); </p>

        <p>&nbsp;&nbsp;{"});"}</p>

        <p>&nbsp;{"};"}</p>

        <p>{"};"}</p>
    </code>

    <p>उपर के उदाहरण में, हम तीन क्रिया सृजनकर्ताओं को परिभाषित करते हैं: <b>fetchUserRequest, fetchUserSuccess, और fetchUserError</b>। हम <b>fetchUser</b> क्रिया सृजनकर्ता को भी परिभाषित करते हैं जो एक क्रिया ऑब्जेक्ट की बजाय एक फ़ंक्शन वापस करता है। यह फ़ंक्शन <b>dispatch</b> को एक आर्ग्यूमेंट के रूप में लेता है, जो रीडक्स स्टोर का <b>dispatch</b> फ़ंक्शन होता है।</p>
    
    <p><b>fetchUser</b> फ़ंक्शन के भीतर, हम <b>fetchUserRequest</b> क्रिया को डिस्पैच करते हैं, जो <b>isLoading</b> स्थिति को <b>true</b> पर सेट करता है। फिर हम Axios का उपयोग करके एपीआई कॉल करते हैं और API प्रतिक्रिया के आधार पर या तो <b>fetchUserSuccess</b> या <b>fetchUserError</b> क्रिया को डिस्पैच करते हैं। ये क्रियाएँ लाए गए डेटा या त्रुटि संदेश के साथ रीडक्स स्टोर को अपडेट करती हैं।</p>
    
    <p>इस क्रिया सृजनकर्ता का उपयोग किसी घटक में करने के लिए, हम इसे आयात कर सकते हैं और इसे <b>dispatch</b> को पास कर सकते हैं जैसे कि:</p>
    
    <code>
      <p><span className='green'>{"// MyComponent.js"}</span></p>

      <p><span className='red'>import</span> {"React, { useEffect }"} <span className='red'>from</span> <span className='blue1'>'react'</span>;</p>

      <p><span className='red'>import</span> {"{ useDispatch, useSelector }"} <span className='red'>from</span> <span className='blue1'>'react-redux'</span>;</p>

      <p><span className='red'>import</span> {"{ fetchUser }"} <span className='red'>from</span> <span className='blue1'>'./actions'</span>; </p>

      <p>&nbsp;<span className='red'>const</span> MyComponent = {'({'} <span className='blue'>userId</span> {'})'} {"=> { "}</p>

      <p>&nbsp;<span className='red'>const</span> dispatch = <span className='blueviole'>useDispatch</span>(); </p>

      <p>&nbsp;<span className='red'>const</span> user = <span className='blueviole'>useSelector</span>(state {'=>'} state.<span className='blue'>user</span>.<span className='blue'>data</span>); </p>

      <p>&nbsp;<span className='red'>const</span> isLoading = <span className='blueviole'>useSelector</span>(state {'=>'} state.<span className='blue'>user</span>.<span className='blue'>isLoading</span>); </p>

      <p>&nbsp;<span className='red'>const</span> error = <span className='blueviole'>useSelector</span>(state {'=>'} state.<span className='blue'>user</span>.<span className='blue'>error</span>);</p>

      <p>&nbsp;<span className='blueviole'>useEffect</span>{"(() => { "}</p>

      <p>&nbsp;&nbsp;<span className='blueviole'>dispatch</span>(<span className='blueviole'>fetchUser</span>(userId));</p>

      <p>&nbsp;{"}, [dispatch, userId]); "}</p>

      <p>&nbsp;<span className='red'>if</span> {"(isLoading) { "}</p>

      <p>&nbsp;&nbsp;<span className='red'>return</span> {'<'}<span className='green'>div</span>{'>'}Loading...{'</'}<span className='green'>div</span>{'>'};</p>

      <p>{" } "}</p>

      <p>&nbsp;<span className='red'>if</span> {"(error) {  "}</p>

      <p>&nbsp;&nbsp;<span className='red'>return</span> {'<'}<span className='green'>div</span>{'>Error: {error}</'}<span className='green'>div</span>{'>'};</p>

      <p>{"}"}</p>

      <p>&nbsp;&nbsp;<span className='red'>return</span> {"("}</p>

      <p>{'<'}<span className='green'>div</span>{'>'}</p>

      <p>&nbsp;{'<'}<span className='green'>h1</span>{'>{'}user.<span className='blue'>name</span>{'}</'}<span className='green'>h1</span>{'>'}</p>

      <p>&nbsp;{'<'}<span className='green'>p</span>{'>{'}user.<span className='blue'>email</span>{'}</'}<span className='green'>p</span>{'>'}</p>
     
      <p>&nbsp;{'<'}<span className='green'>p</span>{'>{'}user.<span className='blue'>phone</span>{'}</'}<span className='green'>p</span>{'>'}</p>
     
      <p>{"</"}<span className='green'>div</span>{">"}</p>

      <p>&nbsp;{");"}</p>

      <p>{"};"}</p>
   </code>


<p>उपर के उदाहरण में, हम react-redux पुस्तकालय से useDispatch और useSelector hooks का उपयोग करते हैं ताकि हम Redux स्टोर के साथ बातचीत कर सकें। हम useEffect हुक में fetchUser क्रिया सृजनकर्ता को dispatch करते हैं, जो कंपोनेंट माउंट होने पर कॉल होगा। हम यह भी useSelector का उपयोग करते हैं ताकि हम Redux स्टोर से संबंधित डेटा के महत्वपूर्ण टुकड़े निकाल सकें, जैसे कि उपयोगकर्ता डेटा और isLoading और error फ़्लैग्स।</p>

<p>सम्ग्र, Redux Thunk एक उपयोगी मध्यवर्ती पुस्तकालय है जो रीडक्स के साथ बातचीत करने वाले आसिंक तार्किक कोड लिखने की अनुमति देता है। यह आपकी कोड को सरल बनाने और आपके रिएक्ट अनुप्रयोग में आसिंक व्यवहार को समझने में सहायक हो सकता है।</p>

<h3>Redux-Observable</h3>

<p>Redux-Observable रीडक्स के लिए एक मध्यवर्ती है जो रीडक्स अनुप्रयोगों में रिएक्टिव प्रोग्रामिंग का उपयोग सक्षम करता है। यह विकसकों को RxJS, एक रिएक्टिव प्रोग्रामिंग के लिए पुस्तकालय का उपयोग करके घोषणात्मक, संयोजनीय, और परीक्षण करने में सरल तरीके से जटिल आसिंक्रोनस क्रियाओं और घटनाओं का संभालन करने की अनुमति देता है।</p>

<p>Redux-Observable के साथ, विकसक "एपिक्स" को परिभाषित कर सकते हैं जो कुछ क्रियाओं के लिए सुनते हैं, और फिर उन पर एक नई क्रियाओं की धारा के साथ प्रतिक्रिया करते हैं। ये एपिक्स निदर्शनीय हैं, जो फ़ंक्शन हैं जो घटनाओं की एक धारा प्राप्त करते हैं और उन्हें घोषणात्मक तरीके से बदल, छान या विलय कर सकते हैं।</p>

<p>यहाँ Redux-Observable का उपयोग करने का एक उदाहरण है:</p>

<code>
  <p><span className='red'>import</span> {'{ createStore, applyMiddleware } '} <span className='red'>from</span> <span className='blue1'>'redux'</span>;</p>

  <p><span className='red'>import</span>  {'{ createEpicMiddleware, combineEpics }'} <span className='red'>from</span> <span className='blue1'>'redux-observable'</span>;</p>

  <p><span className='red'>import</span> {'{ ajax }'} <span className='red'>from</span> <span className='blue1'>'rxjs/ajax'</span>;  </p>

  <p><span className='red'>import</span> {'{ mergeMap, map, catchError }'} <span className='red'>from</span> <span className='blue1'>'rxjs/operators'</span>;</p>

  <p>&nbsp;<span className='red'>const</span> {"pingEpic = action$ =>"}</p>

  <p>&nbsp;&nbsp;action$.<span className='blue'>ofType</span>(<span className='blue1'>'PING'</span>)</p>

  <p>&nbsp;&nbsp;.<span className='blue'>mergeMap</span>{"(action =>"}</p>

  <p>&nbsp;&nbsp;&nbsp;ajax.<span className='blue'>getJSON</span>(<span className='blue1'>'/api/ping'</span>)</p>

  <p>&nbsp;&nbsp;&nbsp;.<span className='blue'>map</span>{'('}response {'=> ({ '}<span className='blue'>type</span>: <span className='blue1'>'PONG'</span>, <span className='blue'>payload</span>: response {'}))'}  </p>

  <p>&nbsp;&nbsp;&nbsp;.<span className='blue'>catch</span>{'(error => ({'} <span className='blue'>type</span>: <span className='blue1'>'PING_ERROR'</span>, <span className='blue'>payload</span>: error.<span className='blue'>message</span> {'}))'}</p>

  <p>{");"}</p>

  <p>&nbsp;<span className='red'>const</span> rootEpic = <span className='blueviole'>combineEpics</span>{'('}</p>

  <p>&nbsp;&nbsp;{"pingEpic, "}</p>

  <p>&nbsp;&nbsp;<span className='green'>{"// more epics... "}</span></p>

  <p>{"); "}</p>

  <p>&nbsp;<span className='red'>const</span> epicMiddleware = <span className='blueviole'>createEpicMiddleware</span>();</p>

  <p>&nbsp;<span className='red'>const</span> store = <span className='blueviole'>createStore</span>{'('}</p>

  <p>&nbsp;&nbsp;{"reducer, "}</p>

  <p>&nbsp;&nbsp;<span className='blueviole'>applyMiddleware</span>(epicMiddleware)</p>

  <p>{");"}</p>

  <p>epicMiddleware.<span className='blue'>run</span>(rootEpic); </p>
</code>

<p>इस उदाहरण में, हम एक एपिक को <b>pingEpic</b> कहा है जो 'PING' प्रकार के एक क्रिया को सुनता है, और फिर इसे पिंग करने के लिए सर्वर को एक AJAX अनुरोध भेजता है। यदि अनुरोध सफल होता है, तो यह प्रतिक्रिया डेटा के साथ 'PONG' प्रकार की एक क्रिया को डिस्पैच करता है। यदि अनुरोध असफल होता है, तो यह त्रुटि संदेश के साथ 'PING_ERROR' प्रकार की एक क्रिया को डिस्पैच करता है।</p>

<p>फिर हम सभी अपने एपिक्स को एक ही <b>rootEpic</b> में कॉम्बाइन करते हैं, और <b>createEpicMiddleware()</b> का एक उदाहरण बनाते हैं जिसे हम अपने रीडक्स स्टोर में मध्यवर्ती के रूप में उपयोग करें। अंत में, हम मध्यवर्ती को स्टोर पर लागू करते हैं और <b>epicMiddleware.run(rootEpic)</b> के साथ रूट एपिक को चलाते हैं।</p>

<p>सम्ग्र, Redux-Observable रीडक्स अनुप्रयोगों में जटिल आसिंक्रोनस क्रियाओं और घटनाओं का संबोधन करने के लिए एक शक्तिशाली उपकरण है। यह रिएक्टिव प्रोग्रामिंग के अवधारणाओं का उपयोग करके आसिंक्रो व्यवहार को प्रबंधित करने के लिए एक लचीला और घोषणात्मक तरीका प्रदान करता है।</p>
    
<b><p>*  यह टेक्स्ट अनुवादक की मदद से लिखा गया है। यदि आपको कोई गलती मिलती है, तो कृपया हमें बताएं  *</p></b>
   
   <div className='ads-container'>  
   {/*  реклама  */}
  </div>
    </div>
  )
}

export default InReact_8;