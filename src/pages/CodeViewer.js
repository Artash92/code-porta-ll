import React, { useState } from 'react';
import CodeViewerCss from '../pages/CodeViewerCss';

const CodeViewer = () => {
  const [codeType, setCodeType] = useState('html');

  const handleHtmlClick = () => {
    setCodeType('html');
  };

  const handleCssClick = () => {
    setCodeType('css');
  };

  return (
    <div className="code-viewer">
      <button className='button1' onClick={handleHtmlClick}>HTML</button>
      <button className='button1' onClick={handleCssClick}>CSS</button>

      {codeType === 'html' && (
        <div>
          <code className='codee1'>
   <p>{'<'}!<span className='blue'>DOCTYPE</span> <span className='blue1'>html</span>{'>'}</p>

   <p>{'<'}<span className='green'>html</span>{'>'}</p> 
  
   <p>{'<'}<span className='green'>head</span>{'>'}</p>

   <p>{'<'}<span className='blue1'>meta</span> <span className='blueviole'>charset</span>="<span className='green'>UTF-8</span>"{'>'}</p>

   <p>&nbsp;{'<'}<span className='green'>title</span>{'>'}Phone HTML/CSS{'</'}<span className='green'>title</span>{'>'}</p>

   <p>{'</'}<span className='green'>head</span>{'>'}</p>

   <p>{'<'}<span className='green'>body</span>{'>'}</p>

   <p>{'<'}<span className='green'>div<span className='blue'><span> class</span></span></span>=<span><span>"<span className='blueviole'>smart1</span>"</span></span>{'>'}</p>

   <p>&nbsp;&nbsp;{'<'}<span className='green'>div<span className='yellow'><span> id</span></span></span>=<span><span>"<span className='blueviole'>dettaglio1</span>"</span></span>{'>'}</p>

   <p>&nbsp;&nbsp;&nbsp;{'<'}<span className='green'>div<span className='yellow'><span> id</span></span></span>=<span>"<span className='blueviole'>sensore1</span>"<span className='blueviole'></span></span>{'>'}{'</'}<span className='green'>div</span>{'>'}</p>

   <p>&nbsp;&nbsp;&nbsp;{'<'}<span className='green'>div<span className='yellow'><span> id</span></span></span>=<span>"<span className='blueviole'>microfono1</span>"<span className='blueviole'></span></span>{'>'}{'</'}<span className='green'>div</span>{'>'}</p>
   
   <p>&nbsp;{'</'}<span className='green'>div</span>{'>'}</p>

   <p>&nbsp;{'<'}<span className='green'>div<span className='yellow'><span> id</span></span></span>=<span>"<span className='blueviole'>acenzione-button1</span>"<span className='blueviole'></span></span>{'>'}{'</'}<span className='green'>div</span>{'>'}</p>
   
   <p>&nbsp;{'<'}<span className='green'>div<span className='yellow'><span> id</span></span></span>=<span>"<span className='blueviole'>volume-su1</span>"<span className='blueviole'></span></span>{'>'}{'</'}<span className='green'>div</span>{'>'}</p>
   
   <p>&nbsp;{'<'}<span className='green'>div<span className='yellow'><span> id</span></span></span>=<span>"<span className='blueviole'>volume-giu1</span>"<span className='blueviole'></span></span>{'>'}{'</'}<span className='green'>div</span>{'>'}</p>

   <p>&nbsp;{'<'}<span className='green'>div<span className='yellow'><span> id</span></span></span>=<span><span>"<span className='blueviole'>schermo1</span>"</span></span>{'>'}</p>

   <p>&nbsp;&nbsp;{'<'}<span className='green'>div<span className='blue'><span> class</span></span></span>=<span><span>"<span className='blueviole'>frame-posizione1</span>"</span></span>{'>'}</p>
   
   <p>&nbsp;&nbsp;&nbsp;{'<'}<span className='green'>div<span className='yellow'><span> id</span></span></span>=<span><span>"<span className='blueviole'>header10</span>"</span></span>{'>'}</p>
   
   <p>&nbsp;&nbsp;&nbsp;&nbsp;{'<'}<span className='green'>div<span className='blue'><span> class</span></span></span>=<span><span>"<span className='blueviole'>wrap1</span>"</span></span>{'>'}</p>

   <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'<'}<span className='green'>div<span className='yellow'><span> id</span></span></span>=<span><span>"<span className='blueviole'>menu1</span>"</span></span><span className='blue'> class</span>="<span className='blueviole'>menu-responsive1</span>"{'>'}</p>
   
   <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'<'}<span className='green'>div<span className='blue'><span> class</span></span></span>=<span>"<span className='blueviole'>code-text1</span>"<span className='blueviole'></span></span>{'>'}codeportal.org{'</'}<span className='green'>div</span>{'>'}</p>
   
   <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'</'}<span className='green'>div</span>{'>'}</p>

   <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'</'}<span className='green'>div</span>{'>'}</p>

   <p>&nbsp;&nbsp;&nbsp;&nbsp;{'</'}<span className='green'>div</span>{'>'}</p>

   <p>&nbsp;&nbsp;&nbsp;{'</'}<span className='green'>div</span>{'>'}</p>

   <p>&nbsp;&nbsp;{'</'}<span className='green'>div</span>{'>'}</p>

   <p>&nbsp;{'<'}<span className='green'>div<span className='yellow'><span> id</span></span></span>=<span>"<span className='blueviole'>bottone1</span>"<span className='blueviole'></span></span>{'>'}{'</'}<span className='green'>div</span>{'>'}</p>
   
   <p>{'</'}<span className='green'>div</span>{'>'}</p>

   <p>&nbsp;{'</'}<span className='green'>div</span>{'>'}</p>
 
   <p>{'</'}<span className='green'>body</span>{'>'}</p>

   <p>{'</'}<span className='green'>html</span>{'>'}</p>
</code>
        </div>
      )}

      {codeType === 'css' && (
        <div>
          <CodeViewerCss />
        </div>
      )}
    </div>
  );
};

export default CodeViewer;
