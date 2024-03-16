import React from 'react'

 function AmSecureWebGuard() {
  return (
    <div>
      <div className='ad-container'>  
        {/*  реклама  */}
      </div>
      
      <h2>Ի՞նչ է միջկայքային սկրիպտավորումը (XSS) React.js-ում:</h2>

      <p>Cross-Site Scripting-ը (XSS) շարունակում է մնալ անվտանգության կարևորագույն խնդիր, նույնիսկ ժամանակակից Frontend շրջանակներում, ինչպիսիք են React.js-ը: XSS-ն առաջանում է, երբ հարձակվողները վնասակար սկրիպտներ են ներարկում կայք, շահագործելով օգտվողի վստահությունը տվյալ կայքի նկատմամբ: React.js-ում դա կարող է տեղի ունենալ, երբ օգտատերերի մուտքերը պատշաճ կերպով չեն հաստատվում կամ մաքրվում:</p>

      <p>Ինչպես ապահովել ձեր React.js հավելվածը.</p>

      <h4>Տվյալների վավերացում(վալիդացիա) React-ում.</h4>

      <p>Միշտ կատարեք օգտագործողի տվյալների վավերացում և մաքրում React բաղադրիչներում ցուցադրելուց առաջ:</p>

      <p>Օգտագործեք գրադարաններ, ինչպիսիք են <b>validator</b>-ը, որպեսզի օգնեք հաստատել մուտքագրումը:</p>

      <h4>Կոդավորման ելքը React-ում.</h4>

      <p>Օգտագործեք ներկառուցված React մեխանիզմները ելքը կոդավորելու համար, օրինակ՝ <b>{'{}'}</b> փոփոխական ինտերպոլացիայի համար:</p>

      <p>Զգույշ եղեք dangerouslySetInnerHTML{';'} -ի հետ և օգտագործեք այն միայն մաքրված կոնտենտով:</p>

      <h4>Բովանդակության անվտանգության քաղաքականություն (CSP) React-ում՝</h4>

      <p>Իրականացրեք Բովանդակության անվտանգության քաղաքականության (Content Security Policy, CSP) վերնագրերը՝ վերահսկելու համար, թե որ սկրիպտները կարող են գործարկվել ձեր React.js հավելվածում:</p>

      <p>Կարգավորեք ձեր CSP-ն այնպես, որ թույլատրվեն միայն վստահելի աղբյուրներ սկրիպտների համար:</p>

      <h4>Համատեքստ React՝ վիճակը կառավարելու համար.</h4>

      <p>Օգտագործեք React-ի համատեքստը և վիճակի կառավարումը` ձեր բաղադրիչներում զգայուն տվյալների հոսքը և մուտքը վերահսկելու համար:</p>

      <h4>React Helmet HTTP վերնագրերը կարգավորելու համար.</h4>

      <p>Օգտագործեք React Helmet-ը՝ HTTP վերնագրերը, ներառյալ բովանդակության անվտանգության քաղաքականությունը, բարելավելու ձեր React.js հավելվածի անվտանգության մակարդակը բարձրացնելու համար:</p>

      <h4>React Router Security.</h4>

      <p>Ապահովեք անվտանգ երթուղում՝ վավերացնելով և մաքրելով React Router-ի միջոցով փոխանցված պարամետրերը:</p>

      <h4>Պարբերական թարմացումներ և անվտանգության ստուգումներ.</h4>

      <p>Պահպանեք React.js-ի ընթացիկ տարբերակը և դրա կախվածությունները՝ անվտանգության թարմացումներից օգտվելու համար:</p>

      <p>Կատարեք կանոնավոր անվտանգության աուդիտներ` հնարավոր խոցելիությունները հայտնաբերելու և շտկելու համար:</p>

      <p>Ընդգրկելով այս պրակտիկան ձեր React.js-ի մշակման աշխատանքային հոսքի մեջ՝ դուք կարող եք ստեղծել դիմացկուն և անվտանգ Front-end հավելվածներ՝ նվազեցնելով XSS-ի հարձակումների ռիսկը և խթանելով անվտանգ  միջավայր Front-end ծրագրավորողների համար:</p>

      <h2>React.js-ում XSS-ից պաշտպանվելու լրացուցիչ միջոցներ.</h2>

      <h4>Օգտագործեք React Fragments.</h4>

      <p>Բազմաթիվ էլեմենտներ ռենդեր անելիս հաշվի առեք React Fragments <b>{'(<React.Fragment>)'}</b>-ի օգտագործումը, այլ ոչ թե փաթաթվող div: Սա օգնում է խուսափել DOM-ում ավելորդ div-երից, որոնք կարող են թիրախ դառնալ հարձակվողի համար</p>

      <h4>DOMPurify մաքրման համար.</h4>

      <p>Օգտագործեք DOMPurify-ի նման գրադարան՝ օգտատիրոջ բովանդակությունը հետագայում մաքրելու համար: DOMPurify-ն օգնում է ապահովել, որ DOM-ում տեղադրված բոլոր դինամիկ տեղեկատվությունը պատշաճ կերպով մաքրված է և զերծ է վնասակար կոդերից:</p>

    <code>
      <p><span className='red'>import </span>DOMPurify <span className='red'>from</span> <span className='blue'>'dompurify'</span>;</p>

      <p><span className='red'>function</span> <span className='blueviole'>SanitizedHTML</span>{'({'}<span className='blue'>content</span>{'})'} {'{'}</p>

      <p>&nbsp;<span className='red'>return</span> {'<'}<span className='green'>div</span> <span className='blue1'>{'dangerouslySetInnerHTML'}</span>={'{{'}<span className='blue1'> __html: DOMPurify.sanitize</span>{'('}<span className='blue'>content</span>{')'} {'}} />;'}</p>
    </code>

    <h4>React Props տվյալների կապման համար.</h4>

    <p>Նախընտրեք օգտագործել React հատկությունները դինամիկ տվյալները կապելու համար՝ դրանք ուղղակիորեն JSX-ում ներկառուցելու փոխարեն: Սա օգնում է համոզվել, որ տվյալները պատշաճ կերպով էկրանավորված են և կանխում է սկրիպտների ոչ միտումնավոր կատարումը:</p>

    <code>
      <p><span className='red'>function</span> <span className='blueviole'>DynamicContent</span>{'({'} <span className='blue'>data</span> {'})'} {'{'}</p>

      <p>&nbsp;<span className='red'>return</span> {'<'}<span className='green'>div</span>{'>'}{'{'}<span className='blue'>data</span>{'}'}{'</'}<span className='green'>div</span>{'>'}{'; // Ավելի անվտանգ, քան dangerouslySetInnerHTML-ի օգտագործումը'}</p>

      <p>{'}'}</p>
   </code>

<h4>Client-Side XSS Protection Headers:</h4>

<p>Իրականացրեք հաճախորդի կողմից XSS պաշտպանության վերնագրերը` ի լրումն սերվերի կողմից բովանդակության անվտանգության քաղաքականության: Սա ավելացնում է պաշտպանության լրացուցիչ շերտ՝ հրահանգելով բրաուզերին արգելափակել կամ մաքրել վնասակար սկրիպտները:</p>

<code>
  <p>{'<'}<span className='green'>Helmet</span>{'>'}</p>

  <p>&nbsp;{'<'}<span className='blue'>meta</span> <span className='blueviole'>http-equiv</span>= <span className='blue1'>"X-XSS-Protection"</span> <span className='blueviole'>content</span>= <span className='blue1'>"1; mode=block"</span> {'/>'}</p>

  <p>{'</'}<span className='green'>Helmet</span>{'>'}</p>
</code>

<p>Անվտանգության ներդրում մշակման պրակտիկայում: Համոզվեք, որ բոլորը տեղյակ են XSS-ի հետ կապված ռիսկերի և անվտանգ կոդավորման պրակտիկաների իրականացման կարևորության մասին:</p>

<p>Հիշեք, որ անվտանգությունը մշակումների բազմակողմանի տարր է, և կարևոր է ամբողջական մոտեցում ցուցաբերել: Ինտեգրելով այս միջոցները, կանոնավոր անվտանգության ստուգումներ կատարելով և նոր սպառնալիքներին հետևելով՝ դուք օգնում եք ստեղծել ավելի ամուր և անվտանգ React.js հավելված:</p>

<h4>Անվտանգության միջոցներ XSS-ի դեմ, ներառյալ Eval-ը և Prompt-ը.</h4>

<p>Մեղմացնելով <b>eval</b> ռիսկերը XSS-ի կանխարգելման գործում.</p>

<h5>Նվազագույնի հասցնել օգտագործումը.</h5>

<p><b>Խորհուրդ.</b> Սահմանափակեք <b>eval</b>-ի օգտագործումը որքան հնարավոր է ձեր կոդում:</p>

<p><b>Հիմնավորում.</b> <b>eval</b>-ը ներկայացնում է կոդի դինամիկ կատարում և հանդիսանում է ընդհանուր թիրախ XSS հարձակումների համար: Դրա օգտագործումը նվազեցնելը նվազեցնում է պոտենցիալ հարձակման վեկտորները:</p>

<h5>Մուտքի մաքրում.</h5>

<p><b>Խորհուրդ.</b> Եթե <b>eval</b>-ից հնարավոր չէ խուսափել, զգուշորեն մաքրեք և հաստատեք օգտատիրոջ մուտքագրումը նախքան այն կանչելը:</p>

<p><b>Հիմնավորում.</b> Մուտքի պատշաճ մաքրումը նվազեցնում է օգտատիրոջ մուտքագրման միջոցով վնասակար կոդի ներարկման ռիսկը, որը XSS-ն օգտագործելու սովորական միջոց է:</p>

<p>React.js-ի վեբ էջի օրինակ՝ մեկնաբանության ձևով, որտեղ օգտատիրոջ մուտքագրումը չի օգտագործում <b>eval</b> և մաքրվում է.</p>

  <code>
    <p><span className='red'>import </span>React , {'{ useState }'} <span className='red'>from</span> <span className='blue'>'react'</span>;</p>

    <p><span className='red'>import </span>DOMPurify <span className='red'>from</span> <span className='blue'>'dompurify'</span>;</p>

    <p><span className='red'>const</span> <span className='blueviole'>CommentForm</span> {'= () => {'}</p>

    <p>&nbsp;&nbsp;<span className='red'>const</span> {'[comment, setComment] ='} <span className='blueviole'>useState</span>{'('}<span className='blue1'>{"''"}</span>{');'}</p>

    <p>&nbsp;&nbsp;<span className='red'>const</span> {'[comments, setComments] ='} <span className='blueviole'>useState</span>{'([]);'}</p>

    <p>&nbsp;&nbsp;<span className='red'>const</span> <span className='blueviole'>handleCommentChange</span> {'= ('}<span className='blue1'>event</span>{') => {'}</p>

    <p>&nbsp;&nbsp;&nbsp;&nbsp;<span className='blueviole'>setComment</span>{'(event.target.'}<span className='blue'>value</span>{');'}</p>

    <p>&nbsp;&nbsp;{'};'}</p>

    <p><span className='red'>const</span> <span className='blueviole'>submitComment</span> {'= () => {'}</p>

    <p>&nbsp;&nbsp;{'// Մաքրել մուտքագրված comment-ը, նախքան այն ավելացնելը վիճակին  '}</p>

    <p>&nbsp;&nbsp;<span className='red'>const</span> {'sanitizedComment = DOMPurify.'}<span className='blue'>sanitize</span>{'('}<span className='blue1'>comment</span>{');'}</p>

    <p>&nbsp;&nbsp;{'// Ավելացնել comment վիճակին'}</p>

    <p>&nbsp;&nbsp;<span className='blueviole'>setComments</span>{'([...comments, sanitizedComment]);'}</p>

    <p>&nbsp;&nbsp;{'// Մաքրել մուտքագրման դաշտը'}</p>

    <p>&nbsp;&nbsp;<span className='blueviole'>setComment</span>{'('}<span className='blue1'>{"''"}</span>{");"}</p>

    <p>{'};'}</p>

    <p><span className='red'>return</span> {'('}</p>

    <p>&nbsp;&nbsp;{'<'}<span className='green'>div</span>{'>'}</p>

    <p>&nbsp;&nbsp;&nbsp;{'<'}<span className='green'>h2</span>{'>'}Comments{'</'}<span className='green'>h2</span>{'>'}</p>

    <p>&nbsp;&nbsp;&nbsp;{'<'}<span className='green'>ul</span>{'>'}</p>

    <p>&nbsp;&nbsp;&nbsp;&nbsp;{'{comments.'}<span className='blue'>map</span>{'((c, index) => ('}</p>

    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'<'}<span className='green'>li</span> <span className='blue'>key</span>{'={index}>{c}</'}<span className='green'>li</span>{'>'}</p>

    <p>&nbsp;&nbsp;&nbsp;&nbsp;{'))}'}</p>

    <p>&nbsp;&nbsp;&nbsp;{'</'}<span className='green'>ul</span>{'>'}</p>

    <p>&nbsp;&nbsp;&nbsp;{'<'}<span className='green'>textarea</span> <span className='blue'>value</span>{'={comment}'} <span className='blue'>onChange</span>{'={handleCommentChange}'} <span className='blue'>placeholder</span>{'='}<span className='blue1'>"Enter your comment"</span>{'/>'}</p>

    <p>&nbsp;&nbsp;&nbsp;{'<'}<span className='green'>button</span> <span className='blue'>onClick</span>{'={submitComment}>Отправить</'}<span className='green'>button</span>{'>'}</p>

    <p>&nbsp;&nbsp;{'</'}<span className='green'>div</span>{'>'}</p>

    <p>&nbsp;{');'}</p>

    <p>{'};'}</p>

    <p><span className='red'>export default</span> CommentForm;</p>  
  </code>

  <p>Ապահովել <b>promt</b>-ի անվտանգ օգտագործումը</p>

  <h5>Համատեքստային հուշումներ</h5>

  <p><b>Խորհուրդ.</b> Համոզվեք, որ գործիքի հուշումները պարունակում են տեղեկատվություն այն մասին, թե ինչի համար են դրանք և որտեղից են եկել:</p>

  <p><b>Հիմնավորում.</b> Համատեքստային խորհուրդներն օգնում են օգտատերերին տեղեկացված որոշումներ կայացնել՝ նվազեցնելով սոցիալական ինժեներիայի կամ վնասակար ակնարկների զոհ դառնալու հավանականությունը:</p>

  <h5>Մուտքի վալիդացիա</h5>

  <p><b>Խորհուրդ.</b> Մաքրել և վավերացնել օգտատիրոջ տվյալները, որոնք ստացվել են գործիքի հուշումների միջոցով՝ կանխելու ներարկման հարձակումները:</p>

  <p><b>Հիմնավորում.</b> Օգտատիրոջ չվավերացված մուտքագրումը կարող է հանգեցնել սկրիպտի ներարկման, ուստի կարևոր է վավերացնել և մաքրել նախքան այն օգտագործելը դինամիկ կոդի կատարման մեջ:</p>

  <h5>Ապահովել օգտատերերի անվտանգ փոխազդեցությունը համատեքստային իրազեկ նշաններով. Օրինակ React.js-ում</h5>

  <code>
    <p><span className='red'>import </span>React  <span className='red'>from</span> <span className='blue'>'react'</span>;</p>

    <p><span className='red'>const</span> {'SecurePromptUsage = () => {'}</p>

    <p>&nbsp;&nbsp;<span className='red'>const</span> {'showSecurePrompt = () => {'}</p>

    <p>&nbsp;&nbsp;&nbsp;<span>{'// Դիալոգային պատուհան կոնտեքստով'}</span></p>

    <p><span className='red'>const</span> {'promptMessage ='} <span className='blue1'>'Ցանկանու՞մ եք շարունակել այս անվտանգ գործողությունը:'</span>;</p>

    <p><span className='red'>const</span> {'promptContext ='} <span className='blue1'>'Այս գործողությունը ներառում է ձեր հաշվի կարգավորումների թարմացում:'</span>;</p>

    <p>&nbsp;&nbsp;&nbsp;{'// Ցուցադրել դիալոգային պատուհան՝ հիմնված կոնտեքստի վրա'}</p>

    <p><span className='red'>const</span> {'userDecision ='} <span className='blueviole'>prompt</span>{'(`${promptContext}\n\n${promptMessage}`);'}</p>

    <p>&nbsp;&nbsp;&nbsp;{'// Մուտքի վալիդացիա'}</p>

    <p>&nbsp;&nbsp;&nbsp;<span className='red'>if</span> {'(userDecision !=='} <span className='red'>null</span>{') {'}</p>

    <p>&nbsp;&nbsp;&nbsp;&nbsp;{'// Օգտատիրոջ մուտքագրման մաքրում և վալիդացիա դիալոգային պատուհանի միջոցով'}</p>

    <p>&nbsp;&nbsp;&nbsp;&nbsp;<span className='red'>const</span> {'sanitizedUserDecision ='} <span className='blueviole'>sanitizeAndValidateInput</span>{'(userDecision);'}</p>

    <p>&nbsp;&nbsp;&nbsp;&nbsp;{'// Շարունակեք գործողությունը՝ հիմնված վավերացված մուտքագրման վրա'}</p>

    <p>&nbsp;&nbsp;&nbsp;&nbsp;<span className='red'>if</span> {'(sanitizedUserDecision ==='} <span className='blue1'>{"'yes'"}</span>{') {'}</p>

    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'// Անվտանգ գործողության կատարում'}</p>

    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'console.'}<span className='blue'>log</span>{'('}<span className='blue1'>'Անվտանգ գործողությունն ավարտվեց հաջողությամբ'</span>{');'}</p>

    <p>&nbsp;&nbsp;&nbsp;&nbsp;{'}'} <span className='red'>else</span> {'{'}</p>

    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'// Пользователь решил отказаться'}</p>

    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'console.'}<span className='blue'>log</span>{'('}<span className='blue1'>'Գործողությունը չեղարկվել է օգտատիրոջ կողմից:'</span>{');'}</p>

    <p>&nbsp;&nbsp;&nbsp;&nbsp;{'}'}</p>

    <p>&nbsp;&nbsp;{'}'}</p>

    <p>{'};'}</p>

    <p><span className='red'>const</span> {'sanitizeAndValidateInput = (input) => {'}</p>

    <p>&nbsp;&nbsp;{'// Անհրաժեշտության դեպքում մաքրեք և հաստատեք մուտքագրումը'}</p>

    <p>&nbsp;&nbsp;{"// Պարզության համար ենթադրենք, որ հիմնական ստուգումը 'այո' կամ 'ոչ' պատասխանների համար է:"}</p>

    <p>&nbsp;&nbsp;<span className='red'>const</span> {'sanitizedInput = input.'}<span className='blue'>toLowerCase</span>{'().'}<span className='blue'>trim</span>{'();'}</p>

    <p>&nbsp;&nbsp;<span className='red'>return</span> {'sanitizedInput ==='} <span className='blue1'>'yes'</span>{' || sanitizedInput ==='} <span className='blue1'>'no'</span>{' ? sanitizedInput :'} <span className='blue1'>{"'no'"}</span>{';'}</p>

    <p>&nbsp;{'};'}</p>

    <p>&nbsp;<span className='red'>return</span> {'('}</p>

    <p>&nbsp;&nbsp;{'<'}<span className='green'>div</span>{'>'}</p>

    <p>&nbsp;&nbsp;&nbsp;{'<'}<span className='green'>h2</span>{'>'}Դիալոգային պատուհանի անվտանգ օգտագործման օրինակ{'</'}<span className='green'>h2</span>{'>'}</p>

    <p>&nbsp;&nbsp;&nbsp;{'<'}<span className='green'>button</span>&nbsp;<span className='blue'>onClick</span>{'={showSecurePrompt}>'}Ցույց տալ անվտանգ դիալոգային պատուհան{'</'}<span className='green'>button</span>{'>'}</p>

    <p>&nbsp;&nbsp;{'</'}<span className='green'>div</span>{'>'}</p>

    <p>&nbsp;{');'}</p>

    <p>{'};'}</p>

    <p>&nbsp;<span className='red'>export default</span>&nbsp;SecurePromptUsage;</p>  
  </code>

    <p>Այս օրինակը օգտագործում է <b>showSecurePrompt</b> ֆունկցիան` դիալոգային պատուհանի անվտանգ օգտագործումը ցուցադրելու համար.</p>

    <p><b>Դիալոգային պատուհան կոնտեքստով.</b> Դիալոգային պատուհանի հաղորդագրությունը ներառում է համատեքստի տեղեկատվություն, որն օգնում է օգտատերերին հասկանալ հարցման նպատակը և ծագումը:</p>

    <p><b>Մուտքի վալիդացիա.</b> օգտատիրոջ մուտքագրումը, որը ստացվել է դիալոգային պատուհանի միջոցով, անցնում է մաքրման և վալիդացման գործընթաց` ներարկման հարձակումները կանխելու համար: Այս դեպքում կատարվում է հիմնական վալիդացում՝ ենթադրելով, որ օգտվողը կարող է մուտքագրել միայն 'այո' կամ 'ոչ':</p>

    <h5>Անվտանգության ընդհանուր խորհուրդններ XSS-ի դեմ (միջկայքի սկրիպտավորում).</h5>

    <p><b>Բովանդակության անվտանգ քաղաքականություն (CSP).</b></p>

    <p><b>Խորհուրդ.</b> կիրառեք բովանդակության անվտանգության ուժեղ քաղաքականություն՝ ձեր React.js հավելվածում սկրիպտների կատարումը վերահսկելու համար:</p>

    <p><b>Հիմնավորում.</b> CSP-ն գործում է որպես պաշտպանության կարևոր շերտ՝ սահմանափակելով չարտոնված սկրիպտների կատարումը, ներառյալ XSS-ի խոցելիության միջոցով ներարկվածները:</p>

    <h5>Անվտանգության կանոնավոր ստուգումներ՝</h5>

    <p><b>Խորհուրդ.</b> Անցկացրեք կանոնավոր անվտանգության աուդիտներ, հատկապես գնահատելով դինամիկ կոդի կատարման և օգտագործողի մուտքագրման գործընթացը:</p>

    <p><b>Հիմնավորում.</b> Անվտանգության կանոնավոր ստուգումները հայտնաբերում և վերացնում են հնարավոր XSS խոցելիությունները՝ ապահովելով ձեր հավելվածի շարունակական ճկունությունը:</p>

    <p><b>eval</b> և <b>prompt</b> առաջարկությունների ներդրումը XSS անվտանգության ավելի լայն համատեքստում ուժեղացնում է ավելի ապահով React.js հավելված ստեղծելու ձեր կարողությունը: Անդրադառնալով այս հնարավոր ռիսկերին՝ դուք նպաստում եք ձեր ընդհանուր պաշտպանական ռազմավարությանը XSS հարձակումներից:</p>
  
    <b><p>* Տեքստը գրված է թարգմանչի օգնությամբ։ Եթե սխալ եք հայտնաբերել, խնդրում ենք մեզ տեղյակ պահել *</p></b>
    
    <div className='ads-container'>  
  {/*  реклама  */}
  </div>
  </div>
  )
}



export default AmSecureWebGuard;