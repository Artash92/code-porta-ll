import React,{ useState } from 'react';
import Wrapper from '../components/Wrapper';
import CodeViewer from './CodeViewer';


const App = () => {
  
  
  return (
    <Wrapper>
    <div className='java-scr'>
    <div className="smart1">
      <div id="dettaglio1">
        <div id="sensore1"></div>
        <div id="microfono1"></div>
      </div>
      <div id="acenzione-button1"></div>
      <div id="volume-su1"></div>
      <div id="volume-giu1"></div>
      <div id="schermo1">
        <div className="frame-posizione1">
          <div id="header10">
            <div className="wrap1">
              <div id="menu1" className="menu-responsive1">
                <div className="code-text1">codeportal.org</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="bottone1"></div>
    </div>
  </div>
  <div className='ad-container'>  
          {/*  реклама  */}
        </div>
  <CodeViewer />
</Wrapper>
  );
};

export default App;
