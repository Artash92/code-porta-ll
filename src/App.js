import React, { Component } from 'react';
import { BrowserRouter, Routes, Route, Outlet, Navigate } from 'react-router-dom';
import Home from "./pages/Home";
import About from "./pages/About";
import Domains from "./pages/Domains";
import WorkProcess from  "./pages/DevOps";
import SecureWebGuard from "./pages/SecureWebGuard";
import BlogEntries from "./pages/HRManager";
import Ai_inights from "./pages/Ai_inights";
import JavaScript from './pages/JavaScript';
import ReactJS from './pages/ReactJS';
import JavaScript5 from './pages/JavaScript5';
import JavaScript6 from './pages/JavaScript6';
import JsEs5_1 from './pages/JSEs5_1';
import JsEs5_2 from './pages/JSEs5_2';
import JsEs5_3 from './pages/JsEs5_3';
import JsEs5_4 from './pages/JsEs5_4';
import JsEs5_5 from './pages/JsEs5_5';
import JsEs5_6 from './pages/JsEs5_6';
import JsEs5_7 from './pages/JsEs5_7';
import JsEs5_8 from './pages/JsEs5_8';
import JsEs5_9 from './pages/JsEs5_9';
import JsEs5_10 from './pages/JsEs5_10';
import Html from './pages/Html';
import Html_1 from './pages/Html_1';
import Html_2 from './pages/Html_2';
import Html_3 from './pages/Html_3';
import Html_4 from './pages/Html_4';
import Html_5 from './pages/Html_5';
import Html_6 from './pages/Html_6';
import Html_7 from './pages/Html_7';
import Jquery from './pages/Jquery'; 
import React_1 from './pages/React_1';
import React_2 from './pages/React_2';
import React_3 from './pages/React_3';
import React_4 from './pages/React_4';
import React_5 from './pages/React_5';
import React_6 from './pages/React_6';
import React_7 from './pages/React_7';
import React_8 from './pages/React_8';
import React_9 from './pages/React_9';
import DevOps from './pages/DevOps';
import HRManager from './pages/HRManager';
import Programming_tips from './pages/Programming_tips';
import Keyboard from './pages/keyboard';
import NotFound from './pages/NotFound';
import Chrome from './pages/Chrome';
import Quiz from './pages/Quiz';
import HtmlCss from './pages/HtmlCss';
import QuizJs from './pages/QuizJs';
import QuizReact from './pages/QuizReact';
import React_10 from './pages/React_10';
import Node_moduls from './pages/Node_moduls';
import TechTitans from './pages/TechTitans';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
        <Route path='*' element ={<Navigate to= '/not-found'/>} />
        
        <Route index element={<Home/>} />
          <Route path='/about' element={<About />} />
          <Route path='/domains' element={<Domains />} />
          <Route path='/cross_site_scripting_xss' element={<SecureWebGuard />} />
          <Route path='/devops' element={<DevOps />} />
          <Route path='/hr_manager' element={<HRManager />} />
          <Route path='/ai_inights' element={<Ai_inights/>} />
        
          <Route path ='/javascript' element={<Outlet/>}>
              <Route index element={<JavaScript/>} />
            </Route>
            <Route path='/html' element ={<Outlet />}>
              <Route index element= {<Html/>} />
            </Route>
            <Route path='/reactjs' element ={<Outlet />}>
              <Route index element= {<ReactJS/>} />
            </Route>
           <Route path ='/about' element={<About/>} />
           <Route path ='/javascript5' element={<Outlet/>}>
              <Route index element={<JavaScript5/>} />
            </Route>
            <Route path ='/es5_1' element={<Outlet/>}>
              <Route index element={<JsEs5_1/>} />
            </Route>
            <Route path ='/es5_2' element={<Outlet/>}>
              <Route index element={<JsEs5_2/>} />
            </Route>
            <Route path ='/es5_3' element={<Outlet/>}>
              <Route index element={<JsEs5_3/>} />
            </Route>
            <Route path ='/es5_4' element={<Outlet/>}>
              <Route index element={<JsEs5_4/>} />
            </Route>
            <Route path ='/es5_5' element={<Outlet/>}>
              <Route index element={<JsEs5_5/>} />
            </Route>
            <Route path ='/es5_6' element={<Outlet/>}>
              <Route index element={<JsEs5_6/>} />
            </Route>
            <Route path ='/es5_7' element={<Outlet/>}>
              <Route index element={<JsEs5_7/>} />
            </Route>
            <Route path ='/es5_8' element={<Outlet/>}>
              <Route index element={<JsEs5_8/>} />
            </Route>
            <Route path ='es5_9' element={<Outlet/>}>
              <Route index element={<JsEs5_9/>} />
            </Route>
            <Route path ='/es5_10' element={<Outlet/>}>
              <Route index element={<JsEs5_10/>} />
            </Route>
            <Route path ='/javascript6' element={<Outlet/>}>
              <Route index element={<JavaScript6/>} />
            </Route>
            <Route index element={<Html/>} />
              <Route path ='/html_1' element={<Outlet/>}>
              <Route index element={<Html_1/>} />
            </Route>
            <Route path ='/html_2' element={<Outlet/>}>
              <Route index element={<Html_2/>} />
            </Route>
              <Route path ='/html_3' element={<Outlet/>}>
            <Route index element={<Html_3/>} />
              </Route>
              <Route path ='/html_4' element={<Outlet/>}>
            <Route index element={<Html_4/>} />
              </Route>
              <Route path ='/html_5' element={<Outlet/>}>
            <Route index element={<Html_5/>} />
              </Route>
            <Route path ='/html_6' element={<Outlet/>}>
              <Route index element={<Html_6/>} />
            </Route>
              <Route path ='/html_7' element={<Outlet/>}>
            <Route index element={<Html_7/>} />
              </Route>
            <Route path ='/jquery' element ={<Jquery/>} />
              <Route index element ={<Jquery/>}/>
            
            <Route index element={<ReactJS/>} />
              <Route path ='/react_1' element={<React_1/>}>
              </Route>
              <Route index element={<ReactJS/>} />
              <Route path ='/react_2' element={<React_2/>}>
              </Route>
              <Route index element={<ReactJS/>} />
              <Route path ='/react_3' element={<React_3/>}>
              </Route>

              <Route index element={<ReactJS/>} />
              <Route path ='/react_4' element={<React_4/>}>
              </Route>

              <Route index element={<ReactJS/>} />
              <Route path ='/react_5' element={<React_5/>}>
              </Route>
              
              <Route index element={<ReactJS/>} />
              <Route path ='/react_6' element={<React_6/>}>
              </Route>
              
              <Route index element={<ReactJS/>} />
              <Route path ='/react_7' element={<React_7/>}>
              </Route>
              
              <Route index element={<ReactJS/>} />
              <Route path ='/react_8' element={<React_8/>}>
              </Route>

              <Route index element={<ReactJS/>} />
              <Route path ='/react_9' element={<React_9/>}>
              </Route>
              <Route index element={<ReactJS/>} />
              <Route path ='/react_10' element={<React_10/>}>
              </Route>
              <Route index element={<ReactJS/>} />
              <Route path ='/react_node_moduls' element={<Node_moduls/>}>
              </Route>
          {/* <Route path ='contact' element={<Contact/>} />*/}    
        
          <Route path='/programming_tips' element = {< Programming_tips />} />
          <Route path='/keyboard' element= {<Keyboard/> }/>
          <Route path ='/tech_titans' element={<TechTitans/>} />
          <Route path ='/google-chrome' element={<Chrome />} />

          <Route path ='/html_css_quiz' element={<Outlet/>}>
              <Route index element= {<HtmlCss/>} />
              </Route>
              <Route path ='/js_quiz' element={<Outlet/>}>
              <Route index element= {<QuizJs />} />
              </Route>
              <Route path ='react_quiz' element={<Outlet/>}>
              <Route index element= {<QuizReact />} />
              </Route>
              <Route path = '/not-found' element = {<NotFound/>} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
