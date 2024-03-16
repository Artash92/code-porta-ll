import React from 'react';

function InReact_9() {
  return (
    <div>
       <div className='ad-container'>  
          {/*  реклама  */}
        </div>
        
         <h1>Redux-Saga</h1>
        
    <p>Redux-saga एक पुस्तकालय है जो साइड इफेक्ट, जैसे असमंजस अनुरोध और डेटा प्राप्ति, को संभालने के लिए बनाया गया है, Redux एप्लिकेशनों में। यह जनरेटर फ़ंक्शन का उपयोग करता है ताकि असमंजस कार्यों के प्रवाह को प्रबंधित किया जा सके और सभी साइड इफेक्ट को संभालने के लिए एक केंद्रीय स्थान प्रदान करता है, जिससे एप्लिकेशन के व्यवहार को समझना और परीक्षण करना आसान हो जाता है।</p>
    
    <p>यहां एक उदाहरण है कि आप कैसे Redux-saga का उपयोग कर सकते हैं एक असमंजस API कॉल को संभालने के लिए:</p>

<code>
  <p><span className='red'>import</span> {'{ call, put, takeLatest }'} <span className='red'>from</span> <span className='blue1'>'redux-saga/effects'</span>; </p>

  <p><span className='red'>import</span> axios <span className='red'>from</span> <span className='blue1'>'axios'</span>; </p>

  <p><span className='green'>{"// Action Types "}</span></p>

  <p>&nbsp;<span className='red'>const</span> FETCH_USERS_REQUEST = <span className='blue1'>'FETCH_USERS_REQUEST'</span>;</p>

  <p>&nbsp;<span className='red'>const</span> FETCH_USERS_SUCCESS = <span className='blue1'>'FETCH_USERS_SUCCESS'</span>;</p>

  <p>&nbsp;<span className='red'>const</span> FETCH_USERS_FAILURE = <span className='blue1'>'FETCH_USERS_FAILURE'</span>;</p>

  <p><span className='green'>{"// Action Creators"}</span></p>

  <p>&nbsp;<span className='red'>const</span> fetchUsersRequest {'= () => ({'} <span className='blue'>type</span>: FETCH_USERS_REQUEST {'});'} </p>

  <p>&nbsp;<span className='red'>const</span> fetchUsersSuccess {'= (users) => ({'} <span className='blue'>type</span>: FETCH_USERS_SUCCESS, <span className='blue'>users</span> {'});'} </p>

  <p>&nbsp;<span className='red'>const</span> fetchUsersFailure {'= (error) => ({'} <span className='blue'>type</span>: FETCH_USERS_FAILURE, <span className='blue'>error</span> {'});'} </p>

  <p><span className='green'>{"// Reducer"}</span></p>

  <p>&nbsp;<span className='red'>const</span> initialState = {'{'} <span className='blue'>users</span>: {'[]'}, <span className='blue'>loading</span>: <span className='blue1'>false</span>, <span className='blue'>error</span>: <span className='red'>null</span> {'};'} </p>

  <p>&nbsp;<span className='red'>const</span> {"usersReducer = (state = initialState, action) => {"}</p>

  <p>&nbsp;&nbsp;&nbsp;<span className='red'>switch</span> {'('}action.<span className='blue'>type</span>{") {"}</p>

  <p>&nbsp;&nbsp;&nbsp;&nbsp;<span className='red'>case</span> {"FETCH_USERS_REQUEST:"}</p>

  <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className='red'>return</span> {'{'} ...state, <span className='blue'>loading</span>: <span className='blue1'>true</span> {'};'} </p>

  <p>&nbsp;&nbsp;&nbsp;&nbsp;<span className='red'>case</span> {"FETCH_USERS_SUCCESS:"}</p>

  <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className='red'>return</span> {'{'} ...state, <span className='blue'>users</span>: action.<span className='blue'>users</span>, <span className='blue'>loading</span>: <span className='blue1'>false</span> {'};'} </p>

  <p>&nbsp;&nbsp;&nbsp;&nbsp;<span className='red'>case</span> {"FETCH_USERS_FAILURE:"}</p>

  <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className='red'>return</span> {'{'} ...state, <span className='blue'>error</span>: action.<span className='blue'>error</span>, <span className='blue'>loading</span>: <span className='blue1'>false</span> {'};'} </p>

  <p>&nbsp;&nbsp;&nbsp;&nbsp;<span className='red'>default</span>:</p>

  <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className='red'>return</span> state;</p>

  <p>&nbsp;{" }"}</p>

  <p>{"};"}</p>

  <p><span className='green'>{"// Sagas"}</span></p>

  <p>&nbsp;<span className='red'>function*</span> <span className='blueviole'>fetchUsers</span>{"() {"}</p>

  <p>&nbsp;&nbsp;<span className='red'>try</span> {"{"}</p>

  <p>&nbsp;&nbsp;&nbsp;<span className='red'>const</span> response = <span className='red'>yield</span> <span className='blueviole'>call</span>(axios.<span className='blue'>get</span>, <span className='blue1'>'{'https://jsonplaceholder.typicode.com/users'}</span>'); </p>

  <p>&nbsp;&nbsp;&nbsp;<span className='red'>yield</span> <span className='blueviole'>put</span>(<span className='blueviole'>fetchUsersSuccess</span>(response.<span className='blue'>data</span>)); </p>

  <p>&nbsp;&nbsp;{"}"} <span className='red'>catch</span> {"(error) {"}</p>

  <p>&nbsp;&nbsp;&nbsp;<span className='red'>yield</span> <span className='blueviole'>put</span>(<span className='blueviole'>fetchUsersFailure</span>(error));</p>

  <p>&nbsp;{"}"}</p>

  <p>{"}"}</p>

  <p>&nbsp;<span className='red'>function*</span> <span className='blueviole'>usersSaga</span>{"() {"}</p>

  <p>&nbsp;&nbsp;&nbsp;<span className='red'>yield</span> <span className='blueviole'>takeLatest</span>{'(FETCH_USERS_REQUEST, fetchUsers)'};</p>

  <p>{"}"}</p>

  <p><span className='red'>export</span> {"{ usersReducer, usersSaga };"}</p>
</code>

<p>इस उदाहरण में, हम तीन क्रिया प्रकार (FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS, और FETCH_USERS_FAILURE), तीन क्रिया सृजक (fetchUsersRequest, fetchUsersSuccess, और fetchUsersFailure), और एक रीड्यूसर फ़ंक्शन (usersReducer) को राज्य अपडेट करने के लिए परिभाषित करते हैं।</p>

<p>हम दो सागा भी परिभाषित करते हैं: fetchUsers और usersSaga। fetchUsers सागा axios का उपयोग करके एक API कॉल करने के लिए कॉल प्रभाव का उपयोग करता है और या तो fetchUsersSuccess या fetchUsersFailure डिस्पैच करता है यदि कॉल सफल होता है या असफल होता है। usersSaga सागा FETCH_USERS_REQUEST क्रियाओं को सुनता है और प्रतिक्रिया में fetchUsers सागा चलाता है।</p>

<p>अंत में, हम रीडक्स स्टोर सेटअप में उपयोग किए जाने के लिए रीडक्सर और सागा दोनों को निर्यात करते हैं:</p>

<code>
<p><span className='red'>import</span> {"{ createStore, applyMiddleware }"} <span className='red'>from</span> <span className='blue1'>'redux'</span>;</p>

<p><span className='red'>import</span> {'createSagaMiddleware'} <span className='red'>from</span> <span className='blue1'>'redux-saga'</span>; </p>

<p><span className='red'>import</span> {"{ usersReducer, usersSaga }"} <span className='red'>from</span> <span className='blue1'>'./users'</span>;</p>

<p><span className='red'>const</span> sagaMiddleware = <span className='blueviole'>createSagaMiddleware</span>(); </p>

<p><span className='red'>const</span> store = <span className='blueviole'>createStore</span>(usersReducer, <span className='blueviole'>applyMiddleware</span>(sagaMiddleware)); </p>

<p>sagaMiddleware.<span className='blue'>run</span>(usersSaga);</p>

<p><span className='red'>export default</span> store;</p>
</code>

<p>इस सेटअप में, हम अपने usersReducer के साथ एक रीडक्स स्टोर बनाते हैं और sagaMiddleware लागू करते हैं। फिर हम sagaMiddleware.run का उपयोग करके usersSaga को चलाते हैं। यह सुनिश्चित करेगा कि हमारा सागा सक्रिय है और हमारे एप्लिकेशन में क्रियाओं के लिए सुन रहा है।</p>
    
<b><p>*  यह टेक्स्ट अनुवादक की मदद से लिखा गया है। यदि आपको कोई गलती मिलती है, तो कृपया हमें बताएं  *</p></b>
   
   <div className='ads-container'>  
   {/*  реклама  */}
  </div>
   </div>
  )
}

export default InReact_9;