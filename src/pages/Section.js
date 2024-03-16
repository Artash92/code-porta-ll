import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Logo9 from '../assets/images/logo9.png';


function Section() {
    useEffect(() => {
        document.title = 'CodeHub - JavaScript, Programming Tips, Weather Updates';
    }, []);
    return (
        <div>
            <section className="mini" id="work-process">
                <div className="mini-content">
                    <div className="container">
                        <div className="row">
                            <div className="offset-lg-3 col-lg-6">
                                <div className="info">
                                    <h1>CodeHub</h1>
                                    <p>Exploring JavaScript and programming, tips and examples, meteorological updates, Google Chrome updates on Ubuntu.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-2 col-md-3 col-sm-6 col-6">
                                <NavLink to="/es5_9" className="mini-box">
                                    <i><img src={Logo9} alt="DOM/BOM JavaScript" /></i>
                                    <strong>DOM/BOM</strong>
                                    <span>JavaScript</span>
                                </NavLink>
                            </div>
                            <div className="col-lg-2 col-md-3 col-sm-6 col-6">
                                <NavLink to="/es5_10" className="mini-box">
                                    <i><img src={Logo9} alt="" /></i>
                                    <strong>JavaScript ES5</strong>
                                    <span>Examples</span>
                                </NavLink>
                            </div>
                            <div className="col-lg-2 col-md-3 col-sm-6 col-6">
                                <NavLink to="/programming_tips" className="mini-box">
                                    <i><img src={Logo9} alt="" /></i>
                                    <strong>Programming</strong>
                                    <span>Tips</span>
                                </NavLink>
                            </div>
                            <div className="col-lg-2 col-md-3 col-sm-6 col-6">
                                <NavLink to="/keyboard" className="mini-box">
                                    <i><img src={Logo9} alt="" /></i>
                                    <strong>Keyboard</strong>
                                    <span>InThreeLanguages</span>
                                </NavLink>
                            </div>
                            <div className="col-lg-2 col-md-3 col-sm-6 col-6">
                                <NavLink to="/tech_titans" className="mini-box">
                                    <i><img src={Logo9} alt="" /></i>
                                    <strong>TechTitans</strong>
                                    <span>JourneyIntoGenius</span>
                                </NavLink>
                            </div>
                            <div className="col-lg-2 col-md-3 col-sm-6 col-6">
                                <NavLink to="/google-chrome" className="mini-box">
                                    <i><img src={Logo9} alt="" /></i>
                                    <strong>GoogleChrome</strong>
                                    <span>UpdateInUbuntu</span>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Section;
