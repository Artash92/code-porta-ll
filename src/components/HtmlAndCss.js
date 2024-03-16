import React from 'react';
import { NavLink } from 'react-router-dom';
import logo5 from '../assets/images/right-image.png';

function HtmlAndCss() {
    const handleNavLinkClick = (newTitle) => {
        document.title = newTitle;
    };

    return (
        <div>
         <section className="section padding-bottom-100">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-12 col-sm-12 align-self-center mobile-bottom-fix">
            <div className="left-heading">
              <h2 className="section-title">HTML and CSS</h2>
            </div>
            <div className="left-text">
              <p>This HTML and CSS tutorial is designed for beginners and serves as a crucial foundation before diving into React. You'll learn the basics of building web pages using HTML for structure and CSS for styling. Understanding HTML and CSS will make your entry into the world of React smoother and empower you to create interactive web applications.</p>
            </div>
          </div>
          <div className="col-lg-1"></div>
          <div className="col-lg-5 col-md-12 col-sm-12 align-self-center mobile-bottom-fix-big" data-scroll-reveal="enter right move 30px over 0.6s after 0.4s">
           <NavLink
              to="/html"
              className="flex-item html"
              onClick={() => handleNavLinkClick('HTML')}
            >
            <img src={logo5} className="rounded img-fluid d-block mx-auto" alt="App" />
            </NavLink>
          </div>
        </div>
      </div>
    </section>
        </div>
    );
}

export default HtmlAndCss;
