import React from 'react'
import { NavLink } from 'react-router-dom';
import logo3 from '../assets/images/featured-item-03.png';
import logo1 from '../assets/images/featured-item-01.png';

function JavaScript() {
  return (
  

  <div className="welcome-area" id="welcome">
    <section className="section home-feature">
      <div className="container">
        <div className="custom-row">
          <div className="col-lg-12">
            {/* Обертка для блоков */}
            <div className="custom-row-container">
              {/* Features Small Item Start */}
              <div className="col-lg-4 col-md-6 col-sm-6 col-12" data-scroll-reveal="enter bottom move 50px over 0.6s after 0.2s">
                <NavLink to='/javascript_es5' className="" >
                  <div className="icon">
                    <img src={logo1} alt="js es5" />
                  </div>
                  <h5 className="features-title">JavaScript ES5</h5>
                  <p>Learning JavaScript ES5 is crucial for web developers. It's the foundation of modern web development and provides essential skills to work with web technologies. While newer versions exist, a solid grasp of ES5 is a must for building robust web applications</p>
                </NavLink>
              </div>
              {/* Features Small Item End */}

              <NavLink to='/javascript6' className="">JavaScript ES6</NavLink>

              {/* Features Small Item Start */}
              <div className="col-lg-4 col-md-6 col-sm-6 col-12" data-scroll-reveal="enter bottom move 50px over 0.6s after 0.6s">
                <div className="features-small-item">
                  <NavLink to='/jquery' className=''>
                    <div className="icon">
                      <img src={logo3} alt="jquery" />
                    </div>
                  </NavLink>
                  <h5 className="features-title">jQuery</h5>
                  <p>
                    jQuery is a popular JavaScript library that simplifies web development tasks. It provides a set of easy-to-use functions and methods for tasks like DOM manipulation, event handling, and AJAX requests. jQuery streamlines web development and is known for its cross-browser compatibility and efficiency in writing JavaScript code.
                  </p>
                </div>
              </div>
              {/* Features Small Item End */}
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>



  )
}



export default JavaScript;

















 
  