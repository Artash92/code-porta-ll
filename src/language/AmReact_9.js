import React from 'react'

function AmReact_9() {
  return (
    <div>
      <div className='ad-container'>  
        {/*  реклама  */}
      </div>
      
       <h1>Redux-Saga</h1>

       <p>Redux-saga-ն գրադարան է Redux հավելվածներում կողմնակի ազդեցությունների կառավարման համար, ինչպիսիք են ասինխրոն հարցումները և տվյալների որոնումը: Այն օգտագործում է գեներատորի ֆունկցիաները՝ վերահսկելու ասինխրոն գործողությունների հոսքը և ապահովում է կենտրոնական տեղ՝ բոլոր կողմնակի ազդեցությունները կարգավորելու համար՝ հեշտացնելով հասկանալը և փորձարկել հավելվածի գործելակերպը:</p>

       <p>Ահա մի օրինակ, թե ինչպես կարող եք օգտագործել redux-saga՝ Asynchronous API հարցումը կառավարելու համար.</p>
    
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
    
    <p>Այս օրինակում մենք սահմանում ենք գործողությունների երեք տեսակ (FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS և FETCH_USERS_FAILURE), երեք գործողություն ստեղծող ֆունկցիաներ (fetchUsersRequest, fetchUsersSuccess և fetchUsersFailure) և reducer ֆունկցիա (usersReducer) վիճակը թարմացնելու համար։</p>
    
    <p>Մենք նաև սահմանում ենք երկու սագա՝ fetchUsers և usersSaga: FetchUsers սագան օգտագործում է call էֆեկտը API հարցումը կատարելու համար՝ օգտագործելով axios և ուղարկում է fetchUsersSuccess կամ fetchUsersFailure գործողությունները՝ կախված հարցումը հաջող լինելուց: UserSaga-ն լսում է FETCH_USERS_REQUEST գործողությունները և ի պատասխան գործարկում է fetchUsers սագան:</p>
    
    <p>Վերջապես, մենք արտահանում ենք և՛ reducer-ը, և՛ սագան, որպեսզի դրանք օգտագործվեն մեր Redux store կարգավորելու համար.</p>
    
<code>
  <p><span className='red'>import</span> {"{ createStore, applyMiddleware }"} <span className='red'>from</span> <span className='blue1'>'redux'</span>;</p>

  <p><span className='red'>import</span> {'createSagaMiddleware'} <span className='red'>from</span> <span className='blue1'>'redux-saga'</span>; </p>

  <p><span className='red'>import</span> {"{ usersReducer, usersSaga }"} <span className='red'>from</span> <span className='blue1'>'./users'</span>;</p>

  <p><span className='red'>const</span> sagaMiddleware = <span className='blueviole'>createSagaMiddleware</span>(); </p>

  <p><span className='red'>const</span> store = <span className='blueviole'>createStore</span>(usersReducer, <span className='blueviole'>applyMiddleware</span>(sagaMiddleware)); </p>

  <p>sagaMiddleware.<span className='blue'>run</span>(usersSaga);</p>

  <p><span className='red'>export default</span> store;</p>
</code>
    
<p>Այս կարգավորումներում մենք ստեղծում ենք Redux store մեր usersReducer-ի հետ և օգտագործում sagaMiddleware: Այնուհետև մենք գործարկում ենք usersSaga-ն՝ օգտագործելով sagaMiddleware.run: Սա ապահովում է, որ մեր սագան ակտիվ է և լսում է մեր հավելվածի գործողությունները:</p>   
    
<b><p>* Տեքստը գրված է թարգմանչի օգնությամբ։ Եթե սխալ եք հայտնաբերել, խնդրում ենք մեզ տեղյակ պահել *</p></b>
    
    <div className='ads-container'>  
  {/*  реклама  */}
  </div>
    </div>
  )
}

export default AmReact_9;