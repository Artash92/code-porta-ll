import React , {useEffect}from 'react';
import Wrapper from "../components/Wrapper";

function About(props) {
 
  useEffect(() => {
    // Update the document title for SEO purposes
    const newTitle = "About CodePortall - Learn Programming Fundamentals | CodePortall.com";
    document.title = newTitle;

    // Add meta tags for SEO
    const metaDescription = "Welcome to CodePortall, your gateway to mastering the fundamentals of programming! Learn JavaScript, React, and more with our comprehensive courses.";
    const metaKeywords = "CodePortall, programming, JavaScript, React, web development";
    updateMetaTags(metaDescription, metaKeywords);
  }, []);

  // Function to update meta tags for SEO
  const updateMetaTags = (description, keywords) => {
    const metaDescriptionTag = document.querySelector('meta[name="description"]');
    if (metaDescriptionTag) {
      metaDescriptionTag.setAttribute("content", description);
    } else {
      const newMetaDescriptionTag = document.createElement('meta');
      newMetaDescriptionTag.setAttribute("name", "description");
      newMetaDescriptionTag.setAttribute("content", description);
      document.head.appendChild(newMetaDescriptionTag);
    }

    const metaKeywordsTag = document.querySelector('meta[name="keywords"]');
    if (metaKeywordsTag) {
      metaKeywordsTag.setAttribute("content", keywords);
    } else {
      const newMetaKeywordsTag = document.createElement('meta');
      newMetaKeywordsTag.setAttribute("name", "keywords");
      newMetaKeywordsTag.setAttribute("content", keywords);
      document.head.appendChild(newMetaKeywordsTag);
    }
  };
 
 
  return (
    <Wrapper>
 <section className="section" id="blog">
        <div className="container">
            {/* Section Title Start */}
            <div className="row">
                <div className="col-lg-12">
                    <div className="center-heading">
                        <h2 className="section-title">About</h2>
                    </div>
                </div>
                <div className="offset-lg-3 col-lg-6">
                    <div className="center-text">
                    <div>
  <h4>Welcome to CodePortall, your gateway to mastering the fundamentals of programming!</h4>
  <div className='ad-container'>  
          {/*  реклама  */}
        </div>
  <p>
    At CodePortall, we believe in laying a strong foundation for aspiring programmers. Our platform is meticulously designed to cater to beginners, offering a comprehensive curriculum starting from the roots of JavaScript ES5. We understand the significance of grasping the essentials, which is why our courses begin with JavaScript Essentials, covering origins, data types, operators, and special values.
  </p>
  <p>
    As you progress through our structured learning path, you'll delve deeper into the world of JavaScript, exploring topics such as functions, objects, arrays, and object-oriented programming. Our hands-on approach ensures that you not only understand the concepts but also gain practical experience through interactive exercises and projects.
  </p>
  <p>
    But we don't stop there. CodePortall goes beyond just JavaScript. We provide in-depth tutorials on modern frameworks like ReactJS and tools like Redux, empowering you to build dynamic web applications with confidence. From understanding JSX to mastering Redux-Saga, we've got you covered every step of the way.
  </p>
  <p>
    What sets us apart is our commitment to accessibility. With multi-language support on every page, including English, Русский, Հայերեն, Français, Español, عربى, 日本語, Português, Italiano, Nederlands, Тоҷикӣ, हिन्दी, Korean, and more, we ensure that language is never a barrier to learning.
  </p>
  <p>
    But CodePortall isn't just about courses. It's a vibrant community where learners can test their knowledge through online quizzes, practice coding in our JavaScript editor, and stay updated with the latest insights on DevOps, security, and AI.
  </p>
  <p>
    Whether you're embarking on your programming journey or looking to enhance your skills, CodePortall is your trusted companion. Join us today and unlock the doors to endless possibilities in the world of programming. Start your journey at <b>codeportall.com</b> and let the coding adventures begin!
  </p>
  <p>
    For inquiries and support, reach out to us at <a href="mailto:codeportall@gmail.com">codeportall@gmail.com</a>.
  </p>
</div>

                    </div>
                </div>
            </div>
          </div>
    </section>
    {/* Contact Us End */}
      
  
  <div className='ads-container'>  
  {/*  реклама  */}
</div>  
    </Wrapper>
  );
}

export default About;
