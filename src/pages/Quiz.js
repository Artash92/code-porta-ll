import React, { useEffect } from 'react'; //4
import { NavLink } from 'react-router-dom';
import code from '../assets/images/code.svg';


function Quiz() {

    useEffect(() => {
        document.title = 'Online Quiz';
    }, []);

    return (
        <div>
           

            <div className="container">
                {/* Section Title Start */}
                <div className="row">
                    <div className="col-lg-12">
                        <div className="center-heading">
                            <h2 className="section-title">Online Quiz</h2>
                        </div>
                    </div>
                    <div className="offset-lg-3 col-lg-6">
                        <div className="center-text">
                            <p>Explore our 'Online Quiz' section, which offers engaging quizzes and tests for those looking to dive into the world of web development. Take interactive quizzes on HTML, CSS, JavaScript, and React.js to enhance your knowledge and skills in building websites and web applications. Test your expertise, learn new concepts, and discover how well you master these key development technologies.</p>
                        </div>
                    </div>
                </div>
                {/* Section Title End */}
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-12" data-scroll-reveal="enter bottom move 50px over 0.6s after 0.2s">
                        <div className="pricing-item">
                            <div className="pricing-header">
                                <h3 className="pricing-title">HTML CSS</h3>
                                <img src={code} alt='' />
                            </div>
                            <div className="pricing-footer">
                                <NavLink to="/html_css_quiz">
                                    <button className="main-button">Start Quiz</button>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                    {/* Pricing Item End */}
                    {/* Pricing Item Start */}
                    <div className="col-lg-4 col-md-6 col-sm-12" data-scroll-reveal="enter bottom move 50px over 0.6s after 0.4s">
                        <NavLink to="/js_quiz">
                            <div className="pricing-item active">
                                <div className="pricing-header">
                                    <h3 className="pricing-title">JavaScript</h3>
                                    <img src={code} alt='' />
                                </div>
                                <div className="pricing-footer">
                                    <button className="main-button">Start Quiz</button>
                                </div>
                            </div>
                        </NavLink>
                    </div>
                    {/* Pricing Item End */}
                    {/* Pricing Item Start */}
                    <div className="col-lg-4 col-md-6 col-sm-12" data-scroll-reveal="enter bottom move 50px over 0.6s after 0.6s">
                        <NavLink to="/react_quiz">
                            <div className="pricing-item">
                                <div className="pricing-header">
                                    <h3 className="pricing-title">ReactJS</h3>
                                    <img src={code} alt='' />
                                </div>
                                <div className="pricing-footer">
                                    <button className="main-button">Start Quiz</button>
                                </div>
                            </div>
                        </NavLink>
                    </div>
                    {/* Pricing Item End */}
                </div>
            </div>
            {/* Pricing Plans End */}
        </div>
    );
}

export default Quiz;
