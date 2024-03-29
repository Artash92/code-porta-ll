import React from 'react';

function InChrome() {
  return (
    <div>
      <div className='ad-container'>  
          {/*  реклама  */}
        </div> 
     
<h1>यूबंटू पर गूगल क्रोम को कैसे स्थापित और अपडेट करें</h1>

<p>गूगल क्रोम एक लोकप्रिय वेब ब्राउज़रों में से एक है, जो तेज और विश्वसनीय इंटरनेट एक्सेस प्रदान करता है। इस लेख में, हम यूबंटू ऑपरेटिंग सिस्टम पर गूगल क्रोम को स्थापित और अपडेट करने के चरणों के माध्यम से जाएँगे।</p>
{/* कदम 1: टर्मिनल खोलें */}

<h2>कदम 1: टर्मिनल खोलें</h2>

<p>जब हम शुरू करें, तो अपने यूबंटू कंप्यूटर पर टर्मिनल खोलें जिसके लिए आप Ctrl + Alt + T दबा सकते हैं या अनुप्रयोगों मेनू में खोज कर "टर्मिनल" लिखकर खोज कर सकते हैं।</p>
{/* कदम 2: पैकेज सूची को अपडेट करें */}

<h2>कदम 2: पैकेज सूची को अपडेट करें</h2>

<p>अपने सिस्टम की पैकेज सूची को अपडेट करने के लिए निम्नलिखित कमांड दर्ज करें:</p>

<code>sudo apt update</code>

<p>Enter प्रेस करें और यदि पूछा जाए तो प्रशासक पासवर्ड दर्ज करें।</p>
{/* कदम 3: गूगल क्रोम स्थापित करें */}

<h2>कदम 3: गूगल क्रोम स्थापित करें</h2>

<p>गूगल क्रोम स्थापित करने के लिए, निम्नलिखित कमांड का उपयोग करें:</p>

<code>sudo apt install google-chrome-stable</code>

<p>जब पूछा जाए, स्थापना के साथ आगे बढ़ने के लिए Y (हां) दबाएँ। गूगल क्रोम आपके कंप्यूटर पर डाउनलोड और स्थापित किया जाएगा।</p>
{/* कदम 4: गूगल क्रोम लॉन्च करें */}

<h2>कदम 4: गूगल क्रोम लॉन्च करें</h2>

<p>स्थापना पूर्ण होने के बाद, गूगल क्रोम को लॉन्च करें। आप इसे अनुप्रयोगों मेनू में खोजकर या टर्मिनल में निम्नलिखित कमांड दर्ज करके कर सकते हैं:</p>

<code>google-chrome-stable</code>
{/* कदम 5: गूगल क्रोम को अपडेट करें */}

<h2>कदम 5: गूगल क्रोम को अपडेट करें</h2>

<p>गूगल क्रोम को नवीनतम संस्करण में अपडेट करने के लिए, टर्मिनल में निम्नलिखित कमांड का उपयोग करें:</p>

<code>sudo apt-get --only-upgrade install google-chrome-stable</code>

<p>यह कमांड गूगल क्रोम को उपलब्ध नवीनतम संस्करण में अपडेट करेगा।</p>
{/* निष्कर्ष */}

<h2>निष्कर्ष</h2>

<p>अब आपने अपने यूबंटू कंप्यूटर पर गूगल क्रोम को स्थापित और अपडेट किया है। तेज और सुगम वेब ब्राउज़िंग का आनंद लें!</p>
   
<b><p>*  यह टेक्स्ट अनुवादक की मदद से लिखा गया है। यदि आपको कोई गलती मिलती है, तो कृपया हमें बताएं  *</p></b>
   
   <div className='ads-container'>  
   {/*  реклама  */}
  </div>
    </div>
  )
}

export default InChrome;