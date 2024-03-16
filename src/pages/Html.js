import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Wrapper from '../components/Wrapper';

function Html() {

  useEffect(() => {
    
    document.title = 'HTML CSS Курсы';
    document.title = 'HTML CSS Դասեր';
    document.title = 'HTML CSS Courses'

  }, []);

  return (
    <Wrapper>
    <div className="courses-flex">
      <NavLink to='/html_1' className="courses-flex javascript1">Understanding HTML: The Backbone of Web Development</NavLink>
      <NavLink to='/html_2' className="courses-flex javascript1">Demystifying HTML: Understanding Tags and Their Functions</NavLink>
      <NavLink to='/html_3' className="courses-flex javascript1">Mastering HTML Meta Tags: A Beginner's Guide to Understanding and Using Metadata</NavLink>
      <NavLink to='/html_4' className="courses-flex javascript1">Crafting a Responsive Phone Interface: Innovative HTML/CSS Design</NavLink>
      <NavLink to='/html_5' className="courses-flex javascript1">Buttons</NavLink>
      <NavLink to='/html_6' className="courses-flex javascript1">CSS Cheat Sheet: Basic Properties and Usage</NavLink>
      <NavLink to='/html_7' className="courses-flex javascript1">Understanding the Contrast: HTML vs. XML</NavLink>
    </div>
    </Wrapper>
  );
}

export default Html;
