import React, { useState } from 'react';
 

const CodeViewerCss = () => {
  
  return (
    <div>
     <code className='codee1'>
     <p><span className='red'>:root</span> {'{'}</p>

<p>&nbsp;<span className='blue'>--phone-height</span>: <span className='blue1'>400px</span>;</p>

<p>&nbsp;<span className='blue'>--screen-height</span>: <span className='yellow'>calc</span>{'('}<span className='yellow'>var</span>{'('}<span className='blue'>--phone-height</span>{')'} {'-'}&nbsp;<span className='blue1'>100px</span>{')'};</p>

<p>{'}'}</p>

<p><span className='blueviole'>@keyframes</span><span className='blue'> AnimationName</span> {'{'}</p>

<p><span className='blue1'>0%</span> {'{'}</p>

<p><span className='blue'> background-position</span>: <span className='blue1'>0% 50%</span>;</p>

<p>{'}'}</p>

<p><span className='blue1'>50%</span> {'{'}</p>

<p> <span className='blue'> background-position</span>: <span className='blue1'>100% 50%</span>;</p>

<p>{'}'}</p>  

<p><span className='blue1'>100%</span> {'{'}</p>

<p><span className='blue'> background-position</span>: <span className='blue1'>0% 50%</span>;</p>

<p>&nbsp;{'}'}</p>  

<p>{'}'}</p>

<p>{'.smart1 {'}</p>

    <p>&nbsp;<span className='blue'>margin</span>: <span className='blue1'>150px</span>;</p>

    <p>&nbsp;<span className='blue'>border</span>: <span className='blue1'>2px solid #ddd</span>; </p>

    <p>&nbsp;<span className='blue'>border-radius</span>: <span className='blue1'>40px</span>; </p>

    <p>&nbsp;<span className='blue'>background-color</span>: <span className='blue1'>#333</span>; </p>

    <p>&nbsp;<span className='blue'>width</span>: <span className='blue1'>210px</span>; </p>

    <p>&nbsp;<span className='blue'>height</span>: <span className='yellow'>var</span>{'('}<span className='blue'>--phone-height</span>{')'};</p>

    <p>&nbsp;<span className='blue'>padding</span>: <span className='blue1'>60px 16px</span>; </p>

    <p>&nbsp;<span className='blue'>position</span>: <span className='blue1'>relative</span>; </p>

    <p>&nbsp;<span className='blue'>height</span>: <span className='blue1'>295px</span>; </p>

    <p>{'}'}</p>

    <p>{'#acenzione-button1,'}</p>

    <p>{'#volume-su1,'}</p>
   
    <p>{'#volume-giu1 {'}</p>

      <p>&nbsp;<span className='blue'>background-color</span>: <span className='blue1'>#333</span>; </p>

      <p>&nbsp;<span className='blue'>height</span>: <span className='blue1'>20px</span>;</p>

      <p>&nbsp;<span className='blue'>left</span>: <span className='blue1'>-5px</span>;</p>

      <p>&nbsp;<span className='blue'>top</span>: <span className='blue1'>59px</span>;</p>

      <p>&nbsp;<span className='blue'>border-radius</span>: <span className='blue1'>4px 0 0 4px</span>;</p>

      <p>&nbsp;<span className='blue'>width</span>: <span className='blue1'>3px</span>;</p>

      <p>&nbsp;<span className='blue'>background</span>: <span className='blue1'>#333</span>;</p>

      <p>&nbsp;<span className='blue'>position</span>: <span className='blue1'>absolute</span>;</p>
    
    <p>{'}'}</p>

    <p>{'#volume-su1,'}</p>
   
    <p>{'#volume-giu1 {'}</p>
 
      <p>&nbsp;<span className='blue'>height</span>: <span className='blue1'>40px</span>;</p> 

      <p>&nbsp;<span className='blue'>width</span>: <span className='blue1'>3px</span>;</p>

      <p>&nbsp;<span className='blue'>left</span>: <span className='blue1'>-7px</span>;</p>

    <p>{'}'}</p>

    <p>{'#volume-su1 {'}</p>

      <p>&nbsp;<span className='blue'>top</span>: <span className='blue1'>110px</span>;</p>
   
    <p>{'}'}</p>

    <p>{'#volume-giu1 {'}</p>

      <p>&nbsp;<span className='blue'>top</span>: <span className='blue1'>155px</span>;</p>
   
    <p>{'}'}</p>

    <p>{'#dettaglio1 {'}</p>

      <p>&nbsp;<span className='blue'>position</span>: <span className='blue1'>absolute</span>;</p>

      <p>&nbsp;<span className='blue'>left</span>: <span className='blue1'>0</span>;</p>

      <p>&nbsp;<span className='blue'>top</span>: <span className='blue1'>17px</span>;</p>

      <p>&nbsp;<span className='blue'>width</span>: <span className='blue1'>100%</span>;</p>
   
    <p>{'}'}</p>
     
    <p>{'#fotocamera1,'}</p>

    <p>{'#sensore1,'}</p>
   
    <p>{'#microfono1 {'}</p>

      <p>&nbsp;<span className='blue'>background</span>: <span className='blue1'>#111</span>; </p>

      <p>&nbsp;<span className='blue'>height</span>: <span className='blue1'>7px</span>;</p>

      <p>&nbsp;<span className='blue'>width</span>: <span className='blue1'>7px</span>;</p>

      <p>&nbsp;<span className='blue'>border-radius</span>: <span className='blue1'>100px</span>;</p>

      <p>&nbsp;<span className='blue'>display</span>: <span className='blue1'>block</span>;</p>
    
    <p>{'}'}</p>

    <p>{'#sensore1 {'}</p>

      <p>&nbsp;<span className='blue'>margin</span>: <span className='blue1'>12px 100px</span>;</p>
   
    <p>{'}'}</p>
 
    <p>{'#microfono1 {'}</p>

      <p>&nbsp;<span className='blue'>height</span>: <span className='blue1'>7px</span>;</p>

      <p>&nbsp;<span className='blue'>width</span>: <span className='blue1'>90px</span>;</p>

      <p>&nbsp;<span className='blue'>margin</span>: <span className='blue1'>-19px auto 0</span>;</p>
    
    <p>{'}'}</p>

    <p>{'#schermo1 {'}</p>

      <p>&nbsp;<span className='blue'>height</span>: <span className='yellow'>var</span>{'('}<span className='blue'>--screen-height</span>{')'};</p>

      <p>&nbsp;<span className='blue'>width</span>: <span className='blue1'>210px</span>;</p>

      <p>&nbsp;<span className='blue'>background-color</span>: <span className='blue1'>#fff</span>;</p>

      <p>&nbsp;<span className='blue'>box-shadow</span>: <span className='blue1'>none</span>;</p>

      <p>&nbsp;<span className='blue'>overflow</span>: <span className='blue1'>hidden</span>;</p>

      <p>&nbsp;<span className='blue'>position</span>: <span className='blue1'>relative</span>;</p>
    
    <p>{'}'}</p>

    <p>{'#bottone1 {'}</p>

      <p>&nbsp;<span className='blue'>height</span>: <span className='blue1'>45px</span>;</p>

      <p>&nbsp;<span className='blue'>width</span>: <span className='blue1'>45px</span>;</p>

      <p>&nbsp;<span className='blue'>background</span>: <span className='blue1'>#111</span>;</p>

      <p>&nbsp;<span className='blue'>margin</span>: <span className='blue1'>5px auto 0</span>;</p>

      <p>&nbsp;<span className='blue'>border-radius</span>: <span className='blue1'>90px</span>;</p>
    
    <p>{'}'}</p>

    <p>{'.frame-posizione1 {'}</p>

      <p>&nbsp;<span className='blue'>margin-left</span>: <span className='blue1'>0px</span>;</p>

      <p>&nbsp;<span className='blue'>margin-right</span>: <span className='blue1'>-1px</span>;</p>

      <p>&nbsp;<span className='blue'>display</span>: <span className='blue1'>block</span>;</p>
    
    <p>{'}'}</p>

    <p>{'#header1 {'}</p>

      <p>&nbsp;<span className='blue'>background</span>: <span className='blue1'>#555</span>;</p>

      <p>&nbsp;<span className='blue'>box-shadow</span>: <span className='blue1'>1px 2px 7px #333</span>;</p>
    
    <p>{'}'}</p>

    <p>{'.wrap1 {'}</p>

      <p>&nbsp;<span className='blue'>width</span>: <span className='blue1'>960px</span>;</p>

      <p>&nbsp;<span className='blue'>max-width</span>: <span className='blue1'>100%</span>;</p>

      <p>&nbsp;<span className='blue'>margin</span>: <span className='blue1'>0 auto</span>;</p>

      <p>&nbsp;<span className='blue'>text-align</span>: <span className='blue1'>center</span>;</p>

      <p>&nbsp;<span className='blue'>margin-top</span>: <span className='blue1'>100px</span>;</p>

      <p>&nbsp;<span className='blue'>font-weight</span>: <span className='blue1'>700</span>;</p>
    
    <p>{'}'}</p>

    <p>{'#menu1 ul {'}</p>

      <p>&nbsp;<span className='blue'>list-style</span>: <span className='blue1'>none</span>;</p>
    
    <p>{'}'}</p>

    <p>{'#menu1 ul li {'}</p>

      <p>&nbsp;<span className='blue'>float</span>: <span className='blue1'>left</span>;</p>

      <p>&nbsp;<span className='blue'>padding</span>: <span className='blue1'>3px</span>;</p>
    
    <p>{'}'}</p>
    
    <p>{'#menu1 ul li a {'}</p>

      <p>&nbsp;<span className='blue'>display</span>: <span className='blue1'>block</span>;</p>

      <p>&nbsp;<span className='blue'>padding</span>: <span className='blue1'>20px</span>;</p>

      <p>&nbsp;<span className='blue'>color</span>: <span className='blue1'>#fff</span>;</p>

      <p>&nbsp;<span className='blue'>text-decoration</span>: <span className='blue1'>none</span>;</p>

      <p>&nbsp;<span className='blue'>font-weight</span>: <span className='blue1'>700</span>;</p>
    
    <p>{'}'}</p>

    <p>{'#menu1 ul li a:hover {'}</p>

      <p>&nbsp;<span className='blue'>background</span>: <span className='blue1'>#444</span>;</p>

      <p>&nbsp;<span className='blue'>transition-property</span>: <span className='blue1'>background-color</span>;</p>

      <p>&nbsp;<span className='blue'>transition-duration</span>: <span className='blue1'>0.4s</span>;</p>

      <p>&nbsp;<span className='blue'>transition-timing-function</span>: <span className='blue1'>ease</span>;</p>

      <p>&nbsp;<span className='blue'>color</span>: <span className='blue1'>#FFF</span>;</p>

    <p>{'}'}</p>

    <p>{'.three-lines-menu1 {'}</p>

      <p>&nbsp;<span className='blue'>position</span>: <span className='blue1'>absolute</span>;</p>

      <p>&nbsp;<span className='blue'>bottom</span>: <span className='blue1'>10px</span>;</p>

      <p>&nbsp;<span className='blue'>right</span>: <span className='blue1'>10px</span>;</p>

      <p>&nbsp;<span className='blue'>text-decoration</span>: <span className='blue1'>none</span>;</p>

      <p>&nbsp;<span className='blue'>color</span>: <span className='blue1'>#FFF</span>;</p>

      <p>&nbsp;<span className='blue'>font-size</span>: <span className='blue1'>32px</span>;</p>

      <p>&nbsp;<span className='blue'>display</span>: <span className='blue1'>none</span>;</p>

    <p>{'}'}</p>

    <p>{'#code-text1 {'}</p>

      <p>&nbsp;<span className='blue'>position</span>: <span className='blue1'>absolute</span>;</p>

      <p>&nbsp;<span className='blue'>top</span>: <span className='blue1'>70px</span>;</p>

      <p>&nbsp;<span className='blue'>right</span>: <span className='blue1'>10px</span>;</p>

      <p>&nbsp;<span className='blue'>color</span>: <span className='blue1'>#FFF</span>;</p>

      <p>&nbsp;<span className='blue'>font-size</span>: <span className='blue1'>16px</span>;</p>

    <p>{'}'}</p>


    </code>
     
    </div>
  );
};

export default CodeViewerCss;
