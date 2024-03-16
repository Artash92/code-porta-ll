import React from 'react';
import { NavLink } from 'react-router-dom';

function Services() {
  const handleNavLinkClick = (newTitle) => {
    document.title = newTitle;
  };

  return (
    <div className="flex-container">
      <NavLink
        to="/weather"
        className="flex-item javascript"
        onClick={() => handleNavLinkClick('Weather')}
      >
        Weather
      </NavLink>
      <NavLink
        to="/keyboard"
        className="flex-item html"
        onClick={() => handleNavLinkClick('Keyboard')}
      >
        Keyboard
      </NavLink>
      <NavLink
        to="/programming_tips"
        className="flex-item javascript"
        onClick={() => handleNavLinkClick('Programming Tips')}
      >
        Programming Tips
      </NavLink>
      <NavLink
        to="/html"
        className="flex-item html"
        onClick={() => handleNavLinkClick('HTML')}
      >
        HTML
      </NavLink>
      <NavLink
        to="/css"
        className="flex-item html"
        onClick={() => handleNavLinkClick('CSS')}
      >
        CSS
      </NavLink>
      <NavLink
        to="/js_quiz"
        className="flex-item javascript"
        onClick={() => handleNavLinkClick('JavaScriptQuiz')}
      >
        JavaScript
      </NavLink>
      <NavLink
        to="/reactjs"
        className="flex-item javascript"
        onClick={() => handleNavLinkClick('ReactJS')}
      >
        ReactJS
      </NavLink>
      {/* Добавленный NavLink для Google Chrome */}
      <NavLink
        to="/google_chrome"
        className="flex-item javascript"
        onClick={() => handleNavLinkClick('Google Chrome')}
      >
        Google Chrome
      </NavLink>
    </div>
  );
}

export default Services;
