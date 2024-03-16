import React, {useEffect} from 'react';
import { NavLink } from 'react-router-dom';
import Wrapper from "../components/Wrapper";
import logo5 from '../assets/images/right-image.png';
import CodeEditor from './CodeEditor';
import Quiz from './Quiz';
import About from './About';
import HeaderText from '../components/HeaderText';
import FeaturesSmall from '../components/FeaturesSmall';
import FeaturesBigItem from '../components/FeaturesBigItem';
import HtmlAndCss from '../components/HtmlAndCss';
import Section from './Section';




function Home() {
    
    useEffect(() => {
        document.title = 'codeportall.com';
    }, []);

    return (
    <Wrapper>
      <HeaderText />
      <FeaturesSmall />
      <FeaturesBigItem />
       <HtmlAndCss />
       <Section />

    {/* Testimonials Start */}
    <section className="section" id="testimonials">
        <div className="container">
            {/* Section Title Start */}
            <div className="row">
                <div className="col-lg-12">
                    <div className="center-heading">
                        <h2 className="section-title">JavaScript Online Code Editor</h2>
                    </div>
                </div>
                <div className="offset-lg-3 col-lg-6">
                    <div className="center-text">
                        <p>This code is an online JavaScript code editor using React, designed for learning and experimenting with JavaScript. It supports JavaScript code input, execution, and error display, exclusively for JavaScript programming.</p>
                    </div>
                </div>
            </div>
            {/* Section Title End */}
            <CodeEditor/>
           </div>
    </section>
    {/* Testimonials End */}
   
    {/* Pricing Plans Start */}
    <section className="section colored" id="pricing-plans">
      <Quiz />
    </section>
    {/* Counter Parallax End */}
   
     </Wrapper>
     
  );
}

export default Home;
