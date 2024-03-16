import React from 'react';
import { NavLink } from 'react-router-dom';
import logo4 from '../assets/images/left-image.png';

function FeaturesBigItem() {
    const handleNavLinkClick = (newTitle) => {
        document.title = newTitle;
    };

    return (
    <div>
    {/* Features Big Item Start */}
    <section className="section padding-top-70 padding-bottom-0" id="features">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-md-12 col-sm-12 align-self-center" data-scroll-reveal="enter left move 30px over 0.6s after 0.4s">
            <NavLink
              to="/reactjs"
              className="flex-item reactjs"
              onClick={() => handleNavLinkClick('ReactJS')}
            >
            <img src={logo4} className="rounded img-fluid d-block mx-auto" alt="App" />
            </NavLink>
            
          </div>
          <div className="col-lg-1"></div>
          <div className="col-lg-6 col-md-12 col-sm-12 align-self-center mobile-top-fix">
            <div className="left-heading">
              <h2 className="section-title">React</h2>
            </div>
            <div className="left-text">
              <p>React.js is a popular JavaScript library for building user interfaces. It simplifies the creation of dynamic and interactive web applications, making it efficient and maintainable.</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="hr"></div>
          </div>
        </div>
      </div>
    </section>
    {/* Features Big Item End */}
        </div>
    );
}

export default FeaturesBigItem;
