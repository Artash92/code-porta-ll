import React, { useState } from 'react';
 

const ButtonCss = () => {
  
  return (
    <div>
     <code className='codee1'>
    <p className='green'>{'/* Primary Button */'}</p>
  
    <p>{'.primary-btn {'}</p>

    <p>&nbsp;<span className='blue'>background-color</span>: <span className='blue1'>#3498db</span>;</p>

    <p>&nbsp;<span className='blue'>color</span>: <span className='blue1'>#fff</span>;</p>

    <p>{'}'}</p>

  <p className='green'>{'/* Secondary Button */'}</p>
  
  <p>{'.secondary-btn {'}</p>

  <p>&nbsp;<span className='blue'>background-color</span>: <span className='blue1'>#2c3e50</span>;</p>

  <p>&nbsp;<span className='blue'>color</span>: <span className='blue1'>#fff</span>;</p>

  <p>{'}'}</p>

  <p className='green'>{'/* Success Button */'}</p>
  
  <p>{'.success-btn {'}</p>

  <p>&nbsp;<span className='blue'>background-color</span>: <span className='blue1'>#27ae60</span>;</p>

  <p>&nbsp;<span className='blue'>color</span>: <span className='blue1'>#fff</span>;</p>

  <p>{'}'}</p>

  <p className='green'>{'/* Danger Button */'}</p>
  
  <p>{'.danger-btn {'}</p>

  <p>&nbsp;<span className='blue'>background-color</span>: <span className='blue1'> #e74c3c</span>;</p>

  <p>&nbsp;<span className='blue'>color</span>: <span className='blue1'>#fff</span>;</p>

  <p>{'}'}</p>

  <p className='green'>{'/* Warning Button */'}</p>
  
  <p>{'.warning-btn {'}</p>

  <p>&nbsp;<span className='blue'>background-color</span>: <span className='blue1'> #f39c12</span>;</p>

  <p>&nbsp;<span className='blue'>color</span>: <span className='blue1'>#fff</span>;</p>

  <p>{'}'}</p>

  <p className='green'>{'/* Info Button */'}</p>
  
  <p>{'.info-btn {'}</p>

  <p>&nbsp;<span className='blue'>background-color</span>: <span className='blue1'>  #2980b9</span>;</p>

  <p>&nbsp;<span className='blue'>color</span>: <span className='blue1'>#fff</span>;</p>

  <p>{'}'}</p>

  <p className='green'>{'/* Default Button */'}</p>
  
  <p>{'.default-btn {'}</p>

  <p>&nbsp;<span className='blue'>background-color</span>: <span className='blue1'>  #ecf0f1</span>;</p>

  <p>&nbsp;<span className='blue'>color</span>: <span className='blue1'>#333</span>;</p>

  <p>{'}'}</p>

  <p className='green'>{'/* Custom Style 1 */'}</p>
  
  <p>{'.custom1-btn {'}</p>

  <p>&nbsp;<span className='blue'>background-color</span>: <span className='blue1'> #9b59b6</span>;</p>

  <p>&nbsp;<span className='blue'>color</span>: <span className='blue1'>#fff</span>;</p>

  <p>{'}'}</p>

  <p className='green'>{'/* Custom Style 2 */'}</p>
  
  <p>{'.custom2-btn {'}</p>

  <p>&nbsp;<span className='blue'>background-color</span>: <span className='blue1'> #e67e22</span>;</p>

  <p>&nbsp;<span className='blue'>color</span>: <span className='blue1'>#fff</span>;</p>

  <p>{'}'}</p>

  <p className='green'>{'/* Custom Style 3 */'}</p>
  
  <p>{'.custom3-btn {'}</p>

  <p>&nbsp;<span className='blue'>background-color</span>: <span className='blue1'> #34495e</span>;</p>

  <p>&nbsp;<span className='blue'>color</span>: <span className='blue1'>#fff</span>;</p>

  <p>{'}'}</p>

  <p className='green'>{'/* Custom Style 4 */'}</p>
  
  <p>{'.custom4-btn {'}</p>

  <p>&nbsp;<span className='blue'>background-color</span>: <span className='blue1'> #fbd7c2</span>;</p>

  <p>&nbsp;<span className='blue'>border-radius</span>: <span className='blue1'>50px</span>;</p>

  <p>&nbsp;<span className='blue'>box-shadow</span>: <span className='blue1'>{'rgba(187, 44, 99, .2) 0 -25px 18px -14px inset, rgba(187, 44, 99, .15) 0 1px 2px, rgba(187, 44, 99, .15) 0 2px 4px, rgba(187, 44, 99, .15) 0 4px 8px, rgba(187, 44, 99, .15) 0 8px 16px, rgba(187, 44, 99, .15) 0 16px 32px'}</span>;</p>

  <p>&nbsp;<span className='blue'>color</span>: <span className='blue1'>#00cc00</span>;</p>

  <p>&nbsp;<span className='blue'>cursor</span>: <span className='blue1'>pointer</span>;</p>

  <p>&nbsp;<span className='blue'>display</span>: <span className='blue1'>inline-block</span>;</p>

  <p>&nbsp;<span className='blue'>font-family</span>: <span className='blue1'>{"'Courier New', Courier, monospace"}</span>;</p>
  
  <p>&nbsp;<span className='blue'>padding</span>: <span className='blue1'>10px 25px</span>;</p>

  <p>&nbsp;<span className='blue'>text-align</span>: <span className='blue1'>center</span>;</p>

  <p>&nbsp;<span className='blue'>text-decoration</span>: <span className='blue1'>none</span>;</p>
  
  <p>&nbsp;<span className='blue'>transition</span>: <span className='blue1'>all 250ms</span>;</p>

  <p>&nbsp;<span className='blue'>border</span>: <span className='blue1'>0</span>;</p>

  <p>&nbsp;<span className='blue'>font-size</span>: <span className='blue1'>18px</span>;</p>
  
  <p>&nbsp;<span className='blue'>user-select</span>: <span className='blue1'>none</span>;</p>

  <p>&nbsp;<span className='blue'>-webkit-user-select</span>: <span className='blue1'>none</span>;</p>

  <p>&nbsp;<span className='blue'>touch-action</span>: <span className='blue1'>manipulation</span>;</p>

  <p>{'}'}</p>

  <p>{'.custom4-btn:hover {'}</p>

<p>&nbsp;<span className='blue'>box-shadow</span>: <span className='blue1'> {'rgba(187, 44, 99, .35) 0 -25px 18px -14px inset, rgba(187, 44, 99, .25) 0 1px 2px, rgba(187, 44, 99, .25) 0 2px 4px, rgba(187, 44, 99, .25) 0 4px 8px, rgba(187, 44, 99, .25) 0 8px 16px, rgba(187, 44, 99, .25) 0 16px 32px'}</span>;</p>

<p>&nbsp;<span className='blue'>transform</span>: <span className='blue1'>{'scale(1.1) rotate(-2deg)'}</span>;</p>

<p>{'}'}</p>

<p className='green'>{'/* Custom Style 5 */'}</p>
  
  <p>{'.custom5-btn {'}</p>

  <p>&nbsp;<span className='blue'>align-items</span>: <span className='blue1'>flex-start</span>;</p>

  <p>&nbsp;<span className='blue'>background-image</span>: <span className='blue1'>{'linear-gradient(144deg, #FF60AF, #F3625B 50%, #ECDD20)'}</span>;</p>

  <p>&nbsp;<span className='blue'>border</span>: <span className='blue1'>{'3px solid #FFFFCC'}</span>;</p>

  <p>&nbsp;<span className='blue'>border-radius</span>: <span className='blue1'>15px</span>;</p>

  <p>&nbsp;<span className='blue'>box-shadow</span>: <span className='blue1'>{'rgba(252, 65, 151, 0.25) 0 15px 28px -8px'}</span>;</p>

  <p>&nbsp;<span className='blue'>box-sizing</span>: <span className='blue1'>border-box</span>;</p>

  <p>&nbsp;<span className='blue'>color</span>: <span className='blue1'>#FFFFCC</span>;</p>

  <p>&nbsp;<span className='blue'>display</span>: <span className='blue1'>flex</span>;</p>

  <p>&nbsp;<span className='blue'>font-family</span>: <span className='blue1'>{"'Arial', sans-serif"}</span>;</p>

  <p>&nbsp;<span className='blue'>font-size</span>: <span className='blue1'>20px</span>;</p>

  <p>&nbsp;<span className='blue'>justify-content</span>: <span className='blue1'>center</span>;</p>

  <p>&nbsp;<span className='blue'>line-height</span>: <span className='blue1'>1.5em</span>;</p>

  <p>&nbsp;<span className='blue'>max-width</span>: <span className='blue1'>70%</span>;</p>

  <p>&nbsp;<span className='blue'>min-width</span>: <span className='blue1'>130px</span>;</p>

  <p>&nbsp;<span className='blue'>padding</span>: <span className='blue1'>8px</span>;</p>

  <p>&nbsp;<span className='blue'>text-decoration</span>: <span className='blue1'>none</span>;</p>

  <p>&nbsp;<span className='blue'>user-select</span>: <span className='blue1'>none</span>;</p>

  <p>&nbsp;<span className='blue'>-webkit-user-select</span>: <span className='blue1'>none</span>;</p>

  <p>&nbsp;<span className='blue'>touch-action</span>: <span className='blue1'>manipulation</span>;</p>

  <p>&nbsp;<span className='blue'>white-space</span>: <span className='blue1'>normal</span>;</p>

  <p>&nbsp;<span className='blue'>cursor</span>: <span className='blue1'>pointer</span>;</p>
  
  <p>{'}'}</p>

  {'.custom5-btn:active, '}

  <p>{'.custom5-btn:hover {'}</p>

<p>&nbsp;<span className='blue'>outline</span>: <span className='blue1'> {"3px solid #FF60AF"}</span>;</p>

<p>&nbsp;<span className='blue'>transform</span>: <span className='blue1'>{'scale(1.1) rotate(-2deg)'}</span>;</p>

<p>{'}'}</p>

<p>{'.custom5-btn span {'}</p>

<p>&nbsp;<span className='blue'>background-color</span>: <span className='blue1'> {'rgb(25, 6, 5)'}</span>;</p>

<p>&nbsp;<span className='blue'>padding</span>: <span className='blue1'>{'14px 20px'}</span>;</p>

<p>&nbsp;<span className='blue'>border-radius</span>: <span className='blue1'>{'10px'}</span>;</p>

<p>&nbsp;<span className='blue'>width</span>: <span className='blue1'>100%</span>;</p>

<p>&nbsp;<span className='blue'>height</span>: <span className='blue1'>100%</span>;</p>

<p>&nbsp;<span className='blue'>transition</span>: <span className='blue1'>350ms</span>;</p>

<p>{'}'}</p>

<p>{'.custom5-btn:hover span {'}</p>

<p>&nbsp;<span className='blue'>background</span>: <span className='blue1'>{'rgba(0, 0, 0, 0.7)'}</span>;</p>

<p>{'}'}</p>

<p className='green'>{'/* Custom Style 6 */'}</p>

<p>{'.custom6-btn {'}</p>

<p>&nbsp;<span className='blue'>padding</span>: <span className='blue1'> {'1.5em 3em'}</span>;</p>

<p>&nbsp;<span className='blue'>border</span>: <span className='blue1'>{'4px solid #444444'}</span>;</p>

<p>&nbsp;<span className='blue'>outline</span>: <span className='blue1'>none</span>;</p>

<p>&nbsp;<span className='blue'>color</span>: <span className='blue1'>#FFFFFF</span>;</p>

<p>&nbsp;<span className='blue'>background</span>: <span className='blue1'> #444</span>;</p>

<p>&nbsp;<span className='blue'>cursor</span>: <span className='blue1'>pointer</span>;</p>

<p>&nbsp;<span className='blue'>position</span>: <span className='blue1'>relative</span>;</p>

<p>&nbsp;<span className='blue'>z-index</span>: <span className='blue1'>0</span>;</p>

<p>&nbsp;<span className='blue'>border-radius</span>: <span className='blue1'>15px</span>;</p>

<p>&nbsp;<span className='blue'>user-select</span>: <span className='blue1'>none</span>;</p>

<p>&nbsp;<span className='blue'>-webkit-user-select</span>: <span className='blue1'>none</span>;</p>

<p>&nbsp;<span className='blue'>touch-action</span>: <span className='blue1'>manipulation</span>;</p>

<p>{'}'}</p>   

<p>{'.custom6-btn:before {'}</p>

<p>&nbsp;<span className='blue'>content</span>: <span className='blue1'> {'""'}</span>;</p>

<p>&nbsp;<span className='blue'>background</span>:, <span className='blue1'> {'linear-gradient('}</span></p>

<p>&nbsp;<span className='blue'>45deg</span>,</p>

<p>&nbsp;&nbsp;<span className='blue'>{'#FF1000'}</span>,</p>

<p>&nbsp;&nbsp;<span className='blue'>{'#FF6300'}</span>,</p>

<p>&nbsp;&nbsp;<span className='blue'>{'#FFFB00'}</span>,</p>

<p>&nbsp;&nbsp;<span className='blue'>{'#58FF00'}</span>,</p>

<p>&nbsp;&nbsp;<span className='blue'>{'#10FFD5'}</span>,</p>

<p>&nbsp;&nbsp;<span className='blue'>{'#003BFF'}</span>,</p>

<p>&nbsp;&nbsp;<span className='blue'>{'#7A10FF'}</span>,</p>

<p>&nbsp;&nbsp;<span className='blue'>{'#FF10C8'}</span>,</p>

<p>&nbsp;&nbsp;<span className='blue'>{'#FF1000'}</span></p>

<p>&nbsp;<span className='blue'>{')'}</span>;</p>

<p>&nbsp;<span className='blue'>position</span>: <span className='blue1'>absolute</span>;</p>

<p>&nbsp;<span className='blue'>top</span>: <span className='blue1'>{'-4px'}</span>;</p>

<p>&nbsp;<span className='blue'>left</span>: <span className='blue1'>{'-4px'}</span>;</p>

<p>&nbsp;<span className='blue'>background-size</span>: <span className='blue1'>600%</span>;</p>

<p>&nbsp;<span className='blue'>z-index</span>: <span className='blue1'>{'-1'}</span>;</p>

<p>&nbsp;<span className='blue'>filter</span>: <span className='blue1'>{'blur(10px)'}</span>;</p>

<p>&nbsp;<span className='blue'>-webkit-filter</span>: <span className='blue1'>{'blur(10px)'}</span>;</p>

<p>&nbsp;<span className='blue'>width</span>: <span className='blue1'>{'calc(100% + 8px)'}</span>;</p>

<p>&nbsp;<span className='blue'>height</span>: <span className='blue1'>{'calc(100% + 8px)'}</span>;</p>

<p>&nbsp;<span className='blue'>animation</span>: <span className='blue1'>{'glowing-button-85 20s linear infinite'}</span>;</p>

<p>&nbsp;<span className='blue'>transition</span>: <span className='blue1'>opacity 0.5s ease-in-out</span>;</p>

<p>&nbsp;<span className='blue'>border-radius</span>: <span className='blue1'>20px</span>;</p>

<p>{'}'}</p>      
    
<p>{'.custom6-btn:hover {'}</p>

<p>&nbsp;<span className='blue'>box-shadow</span>: <span className='blue1'>{'rgba(187, 44, 99, .4) 0 -15px 10px -8px inset, rgba(187, 44, 99, .3) 0 1px 2px, rgba(187, 44, 99, .3) 0 2px 4px, rgba(187, 44, 99, .3) 0 4px 6px, rgba(187, 44, 99, .3) 0 8px 10px, rgba(187, 44, 99, .3) 0 10px 14px'}</span>;</p>

<p>&nbsp;<span className='blue'>transform</span>: <span className='blue1'>{'scale(1.25) rotate(-5deg)'}</span>;</p>

<p>{'}'}</p>

<p>{'.custom6-btn:after {'}</p>

<p>&nbsp;<span className='blue'>z-index</span>: <span className='blue1'>{'-1'}</span>;</p>

<p>&nbsp;<span className='blue'>content</span>: <span className='blue1'>{'""'}</span>;</p>

<p>&nbsp;<span className='blue'>position</span>: <span className='blue1'>absolute</span>;</p>

<p>&nbsp;<span className='blue'>width</span>: <span className='blue1'>{'100%'}</span>;</p>

<p>&nbsp;<span className='blue'>height</span>: <span className='blue1'>{'100%'}</span>;</p>

<p>&nbsp;<span className='blue'>background</span>: <span className='blue1'>{'#222'}</span>;</p>

<p>&nbsp;<span className='blue'>left</span>: <span className='blue1'>{'0'}</span>;</p>

<p>&nbsp;<span className='blue'>top</span>: <span className='blue1'>{'0'}</span>;</p>

<p>&nbsp;<span className='blue'>border-radius</span>: <span className='blue1'>{'20px'}</span>;</p>

<p>{'}'}</p>

<p className='green'>{'/* Custom Style 7 */'}</p>

<p>{'.custom7-btn {'}</p>

<p>&nbsp;<span className='blue'>align-items</span>: <span className='blue1'> flex-end</span>;</p>

<p>&nbsp;<span className='blue'>background-color</span>: <span className='blue1'>{'#f5f5f5'}</span>;</p>

<p>&nbsp;<span className='blue'>border-radius</span>: <span className='blue1'>20px</span>;</p>

<p>&nbsp;<span className='blue'>box-shadow</span>: <span className='blue1'>{'rgba(18, 18, 18, .2) 0 0 0 3px, rgba(18, 18, 18, .1) 0 6px 20px'}</span>;</p>

<p>&nbsp;<span className='blue'>box-sizing</span>: <span className='blue1'> border-box</span>;</p>

<p>&nbsp;<span className='blue'>color</span>: <span className='blue1'>#212121</span>;</p>

<p>&nbsp;<span className='blue'>cursor</span>: <span className='blue1'>pointer</span>;</p>

<p>&nbsp;<span className='blue'>display</span>: <span className='blue1'>inline-flex</span>;</p>

<p>&nbsp;<span className='blue'>flex</span>: <span className='blue1'>1 1 auto</span>;</p>

<p>&nbsp;<span className='blue'>font-family</span>: <span className='blue1'>{"'Tahoma', sans-serif"}</span>;</p>

<p>&nbsp;<span className='blue'>font-size</span>: <span className='blue1'>1.3rem</span>;</p>

<p>&nbsp;<span className='blue'>font-weight</span>: <span className='blue1'>600</span>;</p>

<p>&nbsp;<span className='blue'>justify-content</span>: <span className='blue1'>center</span>;</p>

<p>&nbsp;<span className='blue'>line-height</span>: <span className='blue1'>1.3</span>;</p>

<p>&nbsp;<span className='blue'>margin</span>: <span className='blue1'>0</span>;</p>

<p>&nbsp;<span className='blue'>outline</span>: <span className='blue1'>none</span>;</p>

<p>&nbsp;<span className='blue'>padding</span>: <span className='blue1'>{'1.2rem 1.5rem'}</span>;</p>

<p>&nbsp;<span className='blue'>text-align</span>: <span className='blue1'>center</span>;</p>

<p>&nbsp;<span className='blue'>text-decoration</span>: <span className='blue1'>none</span>;</p>

<p>&nbsp;<span className='blue'>transition</span>: <span className='blue1'>{'box-shadow .2s, -webkit-box-shadow .2s'}</span>;</p>

<p>&nbsp;<span className='blue'>white-space</span>: <span className='blue1'>nowrap</span>;</p>

<p>&nbsp;<span className='blue'>border</span>: <span className='blue1'>{'2px solid #f5f5f5'}</span>;</p>

<p>&nbsp;<span className='blue'>user-select</span>: <span className='blue1'>none</span>;</p>

<p>&nbsp;<span className='blue'>-webkit-user-select</span>: <span className='blue1'>none</span>;</p>

<p>&nbsp;<span className='blue'>touch-action</span>: <span className='blue1'>manipulation</span>;</p>

<p>{'}'}</p>   

<p>{'.custom7-btn:hover {'}</p>

<p>&nbsp;<span className='blue'>box-shadow</span>: <span className='blue1'>{'#212121 0 0 0 3px, transparent 0 0 0 0'}</span>;</p>

<p>{'}'}</p>

<p className='green'>{'/* Custom Style 8 */'}</p>

<p>{'.custom8-btn {'}</p>

<p>&nbsp;<span className='blue'>display</span>: <span className='blue1'> inline-block</span>;</p>

<p>&nbsp;<span className='blue'>padding</span>: <span className='blue1'>{'15px 25px'}</span>;</p>

<p>&nbsp;<span className='blue'>font-weight</span>: <span className='blue1'>bold</span>;</p>

<p>&nbsp;<span className='blue'>text-align</span>: <span className='blue1'>center</span>;</p>

<p>&nbsp;<span className='blue'>text-decoration</span>: <span className='blue1'> none</span>;</p>

<p>&nbsp;<span className='blue'>cursor</span>: <span className='blue1'>pointer</span>;</p>

<p>&nbsp;<span className='blue'>border</span>: <span className='blue1'>none</span>;</p>

<p>&nbsp;<span className='blue'>border-radius</span>: <span className='blue1'>5px</span>;</p>

<p>&nbsp;<span className='blue'>transition</span>: <span className='blue1'>{'background-color 0.3s ease-in-out, color 0.3s ease-in-out'}</span>;</p>
 
<p>{'}'}</p>   

<p>{'.custom8-btn {'}</p>

<p>&nbsp;<span className='blue'>background-color</span>: <span className='blue1'>#3498db</span>;</p>

<p>&nbsp;<span className='blue'>color</span>: <span className='blue1'>#ffffff</span>;</p>

<p>{'}'}</p>

<p>{'.custom8-btn:hover {'}</p>

<p>&nbsp;<span className='blue'>background-color</span>: <span className='blue1'>#2980b9</span>;</p>

<p>{'}'}</p>

</code>
     
    </div>
  );
};

export default ButtonCss;
