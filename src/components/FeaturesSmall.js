import React from 'react';
import { NavLink } from 'react-router-dom';
import logo1 from '../assets/images/featured-item-01.png';
import logo2 from '../assets/images/featured-item-02.png';
import logo3 from '../assets/images/featured-item-03.png';

function FeaturesSmall() {
    const handleNavLinkClick = (newTitle) => {
        document.title = newTitle;
    };

    return (
        <div>
            {/* Features Small Start */}
            <section className="section home-feature">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="row">
                                {/* Features Small Item Start */}
                                <div className="col-lg-4 col-md-6 col-sm-6 col-12" data-scroll-reveal="enter bottom move 50px over 0.6s after 0.2s">
                                    <NavLink to='/javascript5' className="features-small-item"  onClick={() => handleNavLinkClick('JavaScript ES5')}>
                                        <div className="icon">
                                            <img src={logo1} alt="" />
                                        </div>
                                        <h5 className="features-title">JavaScript ES5</h5>
                                        <p>Learning JavaScript ES5 is crucial for web developers. It's the foundation of modern web development and provides essential skills to work with web technologies. While newer versions exist, a solid grasp of ES5 is a must for building robust web applications</p>
                                    </NavLink>
                                </div>
                                {/* Features Small Item End */}

                                {/* Features Small Item Start */}
                                <div className="col-lg-4 col-md-6 col-sm-6 col-12" data-scroll-reveal="enter bottom move 50px over 0.6s after 0.4s">
                                    <NavLink to='/javascript6' className="features-small-item"  onClick={() => handleNavLinkClick('JavaScript ES6')}>
                                        <div className="icon">
                                            <img src={logo2} alt="" />
                                        </div>
                                        <h5 className="features-title">JavaScript ES6</h5>
                                        <p>JavaScript ES6, or ECMAScript 2015, is a fundamental upgrade to the language. It introduces powerful features, syntax enhancements, and improved developer productivity. Learning ES6 is essential for modern web development, as it enables developers to write cleaner, more efficient code and stay current with industry standards.</p>
                                    </NavLink>
                                </div>
                                {/* Features Small Item End */}

                                {/* Features Small Item Start */}
                                <div className="col-lg-4 col-md-6 col-sm-6 col-12" data-scroll-reveal="enter bottom move 50px over 0.6s after 0.6s">
                                    <NavLink to='/jQuery' className="features-small-item"  onClick={() => handleNavLinkClick('jQuery')}>
                                        <div className="icon">
                                            <img src={logo3} alt="" />
                                        </div>
                                        <h5 className="features-title">jQuery</h5>
                                        <p>jQuery is a popular JavaScript library that simplifies web development tasks. It provides a set of easy-to-use functions and methods for tasks like DOM manipulation, event handling, and AJAX requests. jQuery streamlines web development and is known for its cross-browser compatibility and efficiency in writing JavaScript code.</p>
                                    </NavLink>
                                </div>
                                {/* Features Small Item End */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Features Small End */}
        </div>
    );
}

export default FeaturesSmall;
