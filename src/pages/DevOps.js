import React, { useState, useEffect } from 'react';
import Wrapper from '../components/Wrapper';
import AmDevOps from '../language/AmDevOps';
import RuDevOps from '../language/RuDevOps';
import FrDevOps from '../language/FrDevOps';
import DaDevOps from '../language/DaDevOps';


function DevOps() {
   
  const [language, setLanguage] = useState('en'); 

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
  };
  
  useEffect(() => {
    switch (language) {
      case 'en':
        document.title = 'History and Foundations of DevOps | Year of DevOps Emergence | Goals of DevOps | Linux Basics, Web Server Installation, Bash Scripts: ';
        break;
      case 'ru':
        document.title = 'История и основы DevOps | Год появления DevOps | Создатели DevOps | Цели DevOps | Тестирование: Автоматизированное тестирование для обеспечения надежности кода. | Git: Система контроля версий для отслеживания изменений в коде.';
        break;
      case 'am':
        document.title = 'DevOps-ի պատմությունն ու հիմունքները | DevOps-ի հայտնվելու տարին | DevOps-ի ստեղծողները | DevOps-ի սահմանում | DevOps-ի նպատակները՝ Արագացնել զարգացումը. Կրճատել նոր գործառույթների ստեղծման և դրանց կիրառման միջև ընկած ժամանակը | Մշակում. կոդ գրելը և նոր գործառույթների ստեղծումը: | Մշակութային փոփոխություններ | Ցանցային հիմունքներ - TCP, IP հասցեներ, CIDR: | Հասկանալ ցանցերի հիմնական սկզբունքները, IP հասցեավորում և CIDR, չափազանց կարևոր է ցանցային ռեսուրսների կազմաձևման և կառավարման համար: | Linux հիմունքներ, վեբ սերվերի տեղադրում, Bash սկրիպտներ.';
        break;
        case 'fr':
          document.title = "Histoire et fondements de DevOps | Année d'émergence de DevOps | Développement : Écrire du code et créer de nouvelles fonctionnalités. Test : Tests automatisés pour garantir la fiabilité du code. Intégration : Fusionner le code des développeurs dans une base de code commune. | Notions de base sur les réseaux - TCP, adresses IP, CIDR:";
          break;
      default:
        document.title = 'History and Foundations of DevOps';
    }
  }, [language]);

  return (
    <Wrapper>
    <div className='java-script'>
        <div>
          <button className='button1' onClick={() => handleLanguageChange('en')}>English</button>
          <button className='button1' onClick={() => handleLanguageChange('ru')}>Русский</button>
          <button className='button1' onClick={() => handleLanguageChange('am')}>Հայերեն</button>
          <button className='button1' onClick={() => handleLanguageChange('fr')}>Français</button>
          <button className='button1' onClick={() => handleLanguageChange('da')}>Dansk</button>
        </div>
 {language === 'en' && (
      <div>
          <div className='ad-container'>  
          {/*  реклама  */}
        </div>         
     
       <h2>History and Foundations of DevOps:</h2>
       <p>
         The term and methodology of DevOps began taking shape in the early 2000s, driven by the increasing need for enhanced collaboration between <strong>software developers</strong> and <strong>system administrators</strong>. This evolution was a response to challenges arising from the separation between <strong>development</strong> and <strong>operations</strong>, with core principles and practices emerging in the mid-2000s.
       </p>
       <p>
         A significant milestone in DevOps history was the release of the book "<em>The Phoenix Project: A Novel About IT, DevOps, and Helping Your Business Win</em>" in 2013, co-authored by Gene Kim, Kevin Behr, and George Spafford. This novel approach to presenting DevOps gained popularity within the IT community.
       </p>
     
       <h2>Year of DevOps Emergence:</h2>
       <p>
         The term "DevOps" gained widespread adoption in the mid-2000s, becoming a standard approach in the <strong>development</strong> and management of <strong>IT systems</strong>.
       </p>
     
       <h2>Creators of DevOps:</h2>
       <p>
         DevOps, being more of an evolutionary process, doesn't have specific creators. However, influential figures like Patrick Debois, Andrew Shafer, and John Allspaw played crucial roles in promoting and spreading DevOps ideas.
       </p>
     
       <h2>DevOps Definition:</h2>
       <p>
         DevOps is a practical methodology in <strong>information technology</strong> that unites <strong>development</strong> and <strong>operations</strong>. It aims to foster collaboration between <strong>software developers</strong> and <strong>system administrators</strong>, enhancing processes like <strong>development</strong>, <strong>testing</strong>, <strong>deployment</strong>, and <strong>application maintenance</strong>.
       </p>
     
       <h2>Goals of DevOps:</h2>
       <ul>
         <li>Accelerating Development: Reducing the time between creating new features and deploying them.</li>
         <li>Increasing Quality: Automating testing and deployment to ensure stability and prevent errors.</li>
         <li>Continuous Delivery and Integration (CI/CD): Implementing practices for continuous testing and deployment of changes.</li>
       </ul>
     
       <h2>DevOps Principles:</h2>
       <ul>
         <li>Collaboration Culture: Fostering close interaction between <strong>development</strong> and <strong>operations</strong> teams.</li>
         <li>Automation: Utilizing automation tools to standardize and expedite processes.</li>
         <li>Tools and Practices: Applying modern methodologies like containerization, CI/CD pipelines, and configuration management.</li>
       </ul>
     
       <h2>Stages of DevOps:</h2>
       <ol>
         <li><strong>Development</strong>: Writing code and creating new features.</li>
         <li><strong>Testing</strong>: Automated testing to ensure code reliability.</li>
         <li><strong>Integration</strong>: Merging developers' code into a common codebase.</li>
         <li><strong>Deployment</strong>: Automated deployment of changes to test and production environments.</li>
         <li><strong>Monitoring</strong>: Continuous monitoring of application performance and functionality.</li>
       </ol>
     
       <h2>Advantages of DevOps:</h2>
       <ul>
         <li>Improved Efficiency: Reducing time to release new application versions.</li>
         <li>Enhanced Software Quality: Automated testing contributes to high stability.</li>
         <li>Routine Automation: Decreasing repetitive tasks, increasing team efficiency.</li>
       </ul>
     
       <h2>Roles in DevOps:</h2>
       <ul>
        <li><strong><a href="https://en.wikipedia.org/wiki/DevOps_engineer" target="_blank" rel="noopener noreferrer">DevOps Engineers</a></strong>: Engage in process and infrastructure automation.</li>
        <li><strong><a href="https://en.wikipedia.org/wiki/Software_development" target="_blank" rel="noopener noreferrer">Developers</a></strong>: Responsible for writing code and creating features.</li>
        <li><strong><a href="https://en.wikipedia.org/wiki/System_administrator" target="_blank" rel="noopener noreferrer">System Administrators</a></strong>: Manage and support infrastructure.</li>
      </ul>

     
       <h2>Cultural Changes:</h2>
       <ul>
         <li>Training and Knowledge Exchange: Emphasizing continuous learning and experience sharing.</li>
         <li>Quality Responsibility: Each team member is accountable for the quality of their work.</li>
       </ul>
     
       <h2>Network Basics - TCP, IP Addresses, CIDR:</h2>
    <p>
      Understanding fundamental network principles, <strong><a href="https://en.wikipedia.org/wiki/IP_address" target="_blank" rel="noopener noreferrer">IP addressing</a></strong>, and <strong><a href="https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing" target="_blank" rel="noopener noreferrer">CIDR</a></strong> is crucial for configuring and managing network resources.
   </p>

    <h2>Windows Administration Basics (PowerShell, Domain, IIS):</h2>
    <p>
      Knowledge of Windows administration is necessary for working with Windows servers, including using <strong><a href="https://docs.microsoft.com/en-us/powershell/" target="_blank" rel="noopener noreferrer">PowerShell</a></strong>, operating in a <strong><a href="https://en.wikipedia.org/wiki/Windows_domain" target="_blank" rel="noopener noreferrer">domain environment</a></strong>, and managing services like <strong><a href="https://www.iis.net/" target="_blank" rel="noopener noreferrer">IIS</a></strong>.
   </p>

    <h2>Linux Basics, Web Server Installation, Bash Scripts:</h2>
    <p>
      Working with Linux servers, installing web servers, and scripting in <strong><a href="https://www.gnu.org/software/bash/" target="_blank" rel="noopener noreferrer">Bash</a></strong> are important for configuring and supporting application runtime environments.
   </p>
     
    <h2>Essential Tools and Platforms:</h2>
       <ul>
        <li><strong><a href="https://www.ansible.com/" target="_blank" rel="noopener noreferrer">Ansible</a></strong>: Configuration management and task automation tool.</li>
        <li><strong><a href="https://git-scm.com/" target="_blank" rel="noopener noreferrer">Git</a></strong>: Version control system for tracking code changes.</li>
        <li><strong><a href="https://github.com/" target="_blank" rel="noopener noreferrer">GitHub</a></strong>/<strong><a href="https://bitbucket.org/" target="_blank" rel="noopener noreferrer">BitBucket</a></strong>/<strong><a href="https://about.gitlab.com/" target="_blank" rel="noopener noreferrer">GitLab</a></strong>: Web platforms for hosting Git repositories.</li>
        <li><strong><a href="https://www.jenkins.io/" target="_blank" rel="noopener noreferrer">Jenkins</a></strong>: CI/CD tool automating build, test, and deployment.</li>
        <li><strong><a href="https://www.docker.com/" target="_blank" rel="noopener noreferrer">Docker</a></strong> and <strong><a href="https://hub.docker.com/" target="_blank" rel="noopener noreferrer">Docker Image Repository (DockerHub)</a></strong>: Containerization tool for application portability and isolation.</li>
      </ul>

     
       <h2>Cloud Platform Knowledge (AWS, GCP, Azure):</h2>
       <p>
         Understanding one cloud platform like <strong><a href="https://aws.amazon.com/" target="_blank" rel="noopener noreferrer">AWS</a></strong>, <strong><a href="https://cloud.google.com/" target="_blank" rel="noopener noreferrer">GCP</a></strong>, or <strong><a href="https://azure.microsoft.com/" target="_blank" rel="noopener noreferrer">Azure</a></strong> is essential for deploying and managing cloud resources.
       </p>
     
       <h2>Infrastructure as Code (Terraform, CloudFormation):</h2>
       <p>
         Using code to define and manage infrastructure. <strong><a href="https://www.terraform.io/" target="_blank" rel="noopener noreferrer">Terraform</a></strong> and <strong><a href="https://aws.amazon.com/cloudformation/" target="_blank" rel="noopener noreferrer">AWS CloudFormation</a></strong> are Infrastructure as Code (IaC) tools for creating and maintaining infrastructure.
       </p>
     
       <h2>Conclusion:</h2>
       <p>
         These skills and tools form the foundation for the successful implementation of the DevOps approach, enabling automation of development, testing, and deployment processes.
       </p>
     
  <b><p>* Text written with the help of a translator. If you find an error, please let us know *</p></b>
  
  <div className='ads-container'>  
  {/*  реклама  */}
</div>
     </div>
     
     )}
      {language === 'ru' && (
        <div>
          <RuDevOps />
        </div>
      )}
      {language === 'am' && (
        <div>
          <AmDevOps />
        </div>
      )}
    {language === 'fr' && (
        <div>
          <FrDevOps />
        </div>
      )}
      {language === 'da' && (
        <div>
          <DaDevOps />
        </div>
      )}
    </div>
    </Wrapper>
  )
}




export default  DevOps;