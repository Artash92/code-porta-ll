import React from 'react';
import logo2 from '../assets/images/featured-item-02.png';

const ES6 = () => {
  return (
    <div>
        <div className="col-lg-4 col-md-6 col-sm-6 col-12" data-scroll-reveal="enter bottom move 50px over 0.6s after 0.4s">
          <div className="features-small-item">
            <div className="icon">
              <img src={logo2} alt="" />
            </div>
                <h5 className="features-title">JavaScript ES6</h5>
                  <p>JavaScript ES6, or ECMAScript 2015, is a fundamental upgrade to the language. It introduces powerful features, syntax enhancements, and improved developer productivity. Learning ES6 is essential for modern web development, as it enables developers to write cleaner, more efficient code and stay current with industry standards.</p>
            </div>
        </div>
    </div>
  )
}

export default ES6;