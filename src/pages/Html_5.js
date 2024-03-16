import React from 'react';
import Wrapper from '../components/Wrapper';
import ButtonCss from './ButonCss';


const Buttons = () => {
  return (
    <Wrapper>
        <div className='ad-container'>  
          {/*  реклама  */}
        </div>
    <div className="buttons-container">
      <button className="primary-btn">Primary Button</button>
      <code className='codeMin'>{'<button class="primary-btn">Primary Button</button>'}</code>
      <button className="secondary-btn">Secondary Button</button>
      <code className='codeMin'>{'<button class="secondary-btn">Secondary Button</button>'}</code>
      <button className="success-btn">Success Button</button>
      <code className='codeMin'>{'<button class="success-btn">Success Button</button>'}</code>
      <button className="danger-btn">Danger Button</button>
      <code className='codeMin'>{'<button class="danger-btn">Danger Button</button>'}</code>
      <button className="warning-btn">Warning Button</button>
      <code className='codeMin'>{'<button class="warning-btn">Warning Button</button>'}</code>
      <button className="info-btn">Info Button</button>
      <code className='codeMin'>{'<button class="info-btn">Info Button</button>'}</code>
      <button className="default-btn">Default Button</button>
      <code className='codeMin'>{'<button class="default-btn">Default Button</button>'}</code>
      <button className="custom1-btn">Custom Style 1</button>
      <code className='codeMin'>{'<button class="custom1-btn">Custom Style 1</button>'}</code>
      <button className="custom2-btn">Custom Style 2</button>
      <code className='codeMin'>{'<button class="custom2-btn">Custom Style 2</button>'}</code>
      <button className="custom3-btn">Custom Style 3</button>
      <code className='codeMin'>{'<button class="custom3-btn">Custom Style 3</button>'}</code>
      <button className="custom4-btn">Custom Style 4</button>
      <code className='codeMin'>{'<button class="custom4-btn">Custom Style 4</button>'}</code>
      <button className="custom5-btn">Custom Style 5</button>
      <code className='codeMin'>{'<button class="custom5-btn">Custom Style 5</button>'}</code>
      <button className="custom6-btn">Custom Style 6</button>
      <code className='codeMin'>{'<button class="custom6-btn">Custom Style 6</button>'}</code>
      <button className="custom7-btn">Custom Style 7</button>
      <code className='codeMin'>{'<button class="custom7-btn">Custom Style 7</button>'}</code>
      <button className="custom8-btn">Custom Style 8</button>
      <code className='codeMin'>{'<button class="custom8-btn">Custom Style 8</button>'}</code>
      <p>Enhance your website's visual appeal with a variety of button styles. Copy and paste the code below to easily add these buttons to your HTML document:</p>
     <ButtonCss/>
    </div>
    <div className='ad-container'>  
          {/*  реклама  */}
        </div>
    </Wrapper>
  );
};

export default Buttons;
