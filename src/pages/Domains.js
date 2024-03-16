import React, { useState, useEffect } from 'react';
import Wrapper from '../components/Wrapper';
import RuDomains from '../language/RuDomains';
import AmDomains from '../language/AmDomains';
import FrDomains from '../language/FrDomains';
import DaDomains from '../language/DaDomains';

function Domains() {
  const [language, setLanguage] = useState('en');

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
  };

  useEffect(() => {
    switch (language) {
      case 'en':
        document.title = 'Full Guide to Domains: History, Registration, and Extension Meanings | .us is intended for web resources related to the United States, serving as a standard for American organizations and enterprises. ';
        break;
      case 'ru':
        document.title = 'Полный Путь по Доменам: История, Регистрация, и Значения Расширений | .ru относится к российскому онлайн-пространству, подчеркивая связь с русскоязычной аудиторией. | Как Выбрать Доменное Имя ';
        break;
      case 'am':
        document.title = 'Դոմենի ստեղծման պատմություն | Ազգային տիրույթների նշանակությունը | .us: Միացյալ Նահանգներ | .uk: Մեծ Բրիտանիա | .de:Գերմանիա | .am-ը Հայաստանի ազգային տիրույթն է, որը հարթակ է ապահովում հայկական վեբ ռեսուրսների համար: | .org ոչ առևտրային կազմակերպություններ ';
        break;
      case 'fr':
        document.title = 'Guide complet des domaines : Histoire, Enregistrement et Significations des Extensions | Les domaines .fr sont réservés aux ressources web liées à la France, offrant une identification claire avec le marché français et le public francophone.';
        break;
      default:
        document.title = 'Full Guide to Domains';
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
              
               <h1>Full Guide to Domains: History, Registration, and Extension Meanings</h1>
   
   <h2>History of Domain Creation:</h2>
   <p>
     The idea of domain names emerged in 1983 with the creation of the first domain, symbolics.com. It was a pivotal moment in the development of the internet, and since then, domains have become an integral part of the web space.
   </p>
 
   <h2>Meanings of National Domains:</h2>
   <ol>
     <li><strong>.us:</strong> United States</li>
     <p>.us is intended for web resources related to the United States, serving as a standard for American organizations and enterprises.</p>
 
     <li><strong>.uk:</strong> United Kingdom</li>
     <p>The .uk domain is associated with the United Kingdom, emphasizing a connection with the British audience.</p>
 
     <li><strong>.de:</strong> Germany</li>
     <p>.de is the standard for German web resources, adding a national identity.</p>
 
     <li><strong>.ru:</strong> Russia</li>
     <p>.ru relates to the Russian online space, emphasizing a connection with the Russian-speaking audience.</p>
 
     <li><strong>.am:</strong> Armenia</li>
     <p>.am is the national domain of Armenia, providing a platform for Armenian web resources.</p>
   </ol>
 
   <h2>How to Choose a Domain Name:</h2>
   <ul>
     <li><strong>Uniqueness:</strong> The name should be unique and easily memorable.</li>
     <li><strong>Reflect Content:</strong> Reflect the essence of your project in the domain name.</li>
     <li><strong>Simplicity and Clarity:</strong> Avoid complex and ambiguous combinations.</li>
   </ul>
 
   <h2>How to Buy and Register a Domain:</h2>
   <ol>
     <li><strong>Choose a Registrar:</strong> Select a reliable registrar that provides domain registration services.</li>
     <li><strong>Check Availability:</strong> Check if your chosen name is available.</li>
     <li><strong>Registration:</strong> Follow the registrar's instructions to complete the purchase process.</li>
     <li><strong>DNS Configuration:</strong> Set up domain name system (DNS) for your website.</li>
   </ol>
 
   <h2>Meanings of Domain Extensions:</h2>
   <ul>
     <li><strong>.ai:</strong> Artificial Intelligence</li>
     <p>Used in projects related to artificial intelligence, highlighting an innovative and technological nature.</p>
 
     <li><strong>.io:</strong> Internet-Oriented Resources</li>
     <p>Became popular among startups and tech companies due to its association with Input/Output.</p>
 
     <li><strong>.com:</strong> Commercial Resources</li>
     <p>The most popular and universal extension, designed for commercial websites.</p>
 
     <li><strong>.org:</strong> Nonprofit Organizations</li>
     <p>Used by nonprofit organizations to emphasize their nonprofit nature.</p>
 
     <li><strong>.net:</strong> Network Resources</li>
     <p>Associated with network and technical resources, though widely used.</p>
 
     <li><strong>.dev:</strong> Developer Resources</li>
     <p>Perfect for websites related to development and programming.</p>
 
     <li><strong>.academy:</strong> Educational Resources</li>
     <p>Emphasizes the educational focus of the website.</p>
   </ul>
 
   <p>
     Your choice of domain name and extension can influence how your brand is perceived and attract your target audience. Make your choice carefully, considering the goals of your project and your audience.
   </p>

   <b><p>* Text written with the help of a translator. If you find an error, please let us know *</p></b>
  
  <div className='ads-container'>  
  {/*  реклама  */}
</div>
    </div>
          )}
          {language === 'ru' && (
            <div>
              <RuDomains />
            </div>
          )}
          {language === 'am' && (
            <div>
              <AmDomains />
            </div>
          )}
          {language === 'fr' && (
            <div>
              <FrDomains />
            </div>
          )}
           {language === 'da' && (
            <div>
              <DaDomains />
            </div>
          )}
        </div>
      </Wrapper>
  );
}

export default Domains;
