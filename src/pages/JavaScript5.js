import React from 'react';
import { NavLink } from 'react-router-dom';
import Wrapper from '../components/Wrapper';

function JavaScript() {
  return (
    <Wrapper>
    <div className="courses-flex">
      <NavLink to='/es5_1' className="courses-flex javascript1"> JavaScript Essentials: Origins, Data Types, Operators, and Special Values</NavLink>
      <NavLink to='/es5_2' className="courses-flex html1">JavaScript Basics: Variable Initialization, Increment/Decrement, and Conditional Operations</NavLink>
      <NavLink to='/es5_3' className="courses-flex javascript1">Exploring JavaScript Functions: Creation, Arguments, Scopes, Expressions, and Closures</NavLink>
      <NavLink to='/es5_4' className="courses-flex html1">Mastering JavaScript: Recursion, Objects, Functions, 'this' Keyword, and More</NavLink>
      <NavLink to='/es5_5' className="courses-flex javascript1">Deep Dive into JavaScript Arrays, forEach, map, apply, and Self-Invoking Functions</NavLink>
      <NavLink to='/es5_6' className="courses-flex html1">Exploring Global Object, String Manipulation, String Searching, Regular Expressions, and RegExp Object in JavaScript ES5</NavLink>
      <NavLink to='/es5_7' className="courses-flex javascript1">Understanding Object-Oriented Programming (OOP) Concepts in JavaScript ES5</NavLink>
      <NavLink to='/es5_8' className="courses-flex html1">Mastering JavaScript Date Object and Handling Runtime Errors with Error and try-catch</NavLink>
      {/*<NavLink to='/es5_10' className="courses-flex javascript1"> JavaScript ES5 Examples</NavLink>*/}
    </div>
    </Wrapper>
  );
}

export default JavaScript;
