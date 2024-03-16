import React from 'react';
import { NavLink } from 'react-router-dom';
import Wrapper from '../components/Wrapper';

 function ReactJS() {
  return (
    
   <Wrapper>
    <div className="courses-flex">
      <NavLink to='/react_1' className="courses-flex javascript1"> ReactJS: Empowering Developers to Craft Dynamic User Interfaces with Ease</NavLink>
      <NavLink to='/react_2' className="courses-flex html1">Demystifying JSX: Enhancing JavaScript with HTML-like Syntax in React Components</NavLink>
      <NavLink to='/react_3' className="courses-flex javascript1">Mastering React Events: Handling Interactivity and Understanding Component Lifecycles</NavLink>
      <NavLink to='/react_4' className="courses-flex html1">Fetching Data in React: A Comprehensive Guide to Using Fetch API, Axios, and HTTP Methods</NavLink>
      <NavLink to='/react_5' className="courses-flex javascript1">Exploring React Router DOM: Simplifying Client-Side Routing in React Applications</NavLink>
      <NavLink to='/react_6' className="courses-flex html1">Mastering React Refs: Enhancing Component Interactions and Behavior</NavLink>
      <NavLink to='/react_7' className="courses-flex javascript1"> Understanding Redux: A Comprehensive Guide to State Management in JavaScript Applications</NavLink>
      <NavLink to='/react_8' className="courses-flex html1">Managing Asynchronous Logic in Redux with Redux Thunk and Redux-Observable</NavLink>
      <NavLink to='/react_9' className="courses-flex javascript1">Managing Asynchronous Operations in Redux with Redux-Saga</NavLink>
      <NavLink to='/react_10' className="courses-flex javascript1">HTTP Error Codes</NavLink>
      <NavLink to='/react_node_moduls' className="courses-flex javascript1">node_moduls</NavLink>
   </div>
 </Wrapper>
    
  )
}


export default ReactJS;