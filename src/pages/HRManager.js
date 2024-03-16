
import React, { useState, useEffect } from 'react';
import Wrapper from '../components/Wrapper';
import RuHRManager from '../language/RuHRManager';
import AmHRManager from '../language/AmHRManager';
import FrHRManager from '../language/FrHRManager';
import TjHRManager from '../language/TjHRManager';


function Domains() {
   
  const [language, setLanguage] = useState('en'); 

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
  };

  useEffect(() => {
    switch (language) {
      case 'en':
        document.title = 'HR Manager: A Deep Dive into the Role and Its Connection with IT | History and Evolution | Key Functions of HR Manager | IT Recruiting: With an increasing dependence on technology, HR Managers become key players in the recruitment of IT specialists.';
        break;
      case 'ru':
        document.title = 'HR Менеджер: Погружение в Роль и Ее Связь с ИТ | История и Эволюция | Связь с ИТ | Управление Цифровыми Ресурсами';
        break;
      case 'am':
        document.title = 'HR մենեջերի դերը և կապը ՏՏ-ի հետ | Պատմություն և էվոլյուցիա | HR մենեջերի հիմնական գործառույթները | Հավաքագրում և աշխատանքի ընդունում. HR մենեջերը դառնում է տաղանդավոր ճարտարապետ՝ մշակելով որոնման ռազմավարություններ՝ հարմարեցված ընկերության պահանջներին: Այս գործընթացը ներառում է աշխատատեղերի ձևավորում, հարցազրույցների անցկացում և աշխատանքի ընդունելու վերաբերյալ տեղեկացված որոշումների կայացում: | Կապ ՏՏ-ի հետ | Մասնագիտության ապագան.';
        break;
        case 'fr':
          document.title = "Gestionnaire des ressources humaines : Une plongée profonde dans le rôle et sa connexion avec l'informatique | Histoire et évolution | Fonctions clés du gestionnaire des ressources humaines: | Connexion avec l'informatique: | L'avenir de la profession ";
          break;
          case 'tj':
          document.title = 'Менеҷери HR: Мушкилоти амиқ ба нақш ва робитаи он бо IT | Вазифаҳои асосии Менеҷери HR: | Пайвастшавӣ бо IT: | Омӯзиши технологӣ: Менеҷерони кадрҳо дар ташкили барномаҳои омӯзишӣ, ки ба баланд бардоштани саводнокии техникии кормандон дар шароити тағйироти доимӣ дар соҳаи ТИ нигаронида шудаанд, фаъолона иштирок мекунанд.| Идоракунии захираҳои рақамӣ: '
          break;
      default:
        document.title = 'HR Manager: A Deep Dive into the Role and Its Connection with IT ';
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
        <button className='button1' onClick={() => handleLanguageChange('tj')}>Тоҷикӣ</button>
      </div>
 {language === 'en' && (
       <div>
        <div className='ad-container'>  
          {/*  реклама  */}
        </div> 

       <h1>HR Manager: A Deep Dive into the Role and Its Connection with IT</h1>
 
       <h3>Introduction:</h3>
       <p>
         The HR Manager profession in the modern corporate world embodies not only human capital management but also a strategic component capable of influencing business success. Let's delve deeper into the history, functions, and the interplay of this profession with the dynamic field of information technologies.
       </p>
 
       <h3>History and Evolution:</h3>
       <p>
         The emergence of the HR Manager profession is linked to the need for companies to effectively manage their resources. In the early 20th century, as businesses began to realize the importance of human capital, there was a demand for specialists capable of not only administrating HR matters but also strategically shaping and developing teams.
       </p>
 
       <h3>Key Functions of HR Manager:</h3>
       <ol>
         <li>
           <strong>Recruitment and Hiring:</strong> HR Managers become talent architects, developing search strategies tailored to the company's needs. This process includes crafting job listings, conducting interviews, and making informed hiring decisions.
         </li>
         <li>
           <strong>Training and Development:</strong> Effective training and employee development become fundamental tasks for HR Managers. Creating training programs, identifying learning needs, and monitoring career growth are crucial responsibilities.
         </li>
         <li>
           <strong>Performance Management and Motivation:</strong> HR Managers are responsible for creating performance assessment systems and implementing motivation and reward programs aimed at maintaining high employee productivity.
         </li>
         <li>
           <strong>Corporate Culture and Communications:</strong> Establishing and maintaining a healthy corporate culture becomes a task for HR Managers, actively working on improving internal communication within the organization.
         </li>
       </ol>
 
       <h3>Connection with IT:</h3>
       <ol>
         <li>
           <strong>IT Recruiting:</strong> With an increasing dependence on technology, HR Managers become key players in the recruitment of IT specialists. Collaboration with the IT department involves developing search strategies and assessing candidates' technical competencies.
         </li>
         <li>
           <strong>Technological Training:</strong> HR Managers actively participate in organizing training programs aimed at enhancing the technical literacy of personnel in the face of constant changes in the IT field.
         </li>
         <li>
           <strong>Management of Digital Resources:</strong> The automation of HR processes becomes an integral part of HR Manager responsibilities, involving the implementation and utilization of digital resources such as HR platforms to enhance efficiency.
         </li>
       </ol>
 
       <h3>The Future of the Profession:</h3>
       <p>
         Anticipating business dynamics, the HR Manager profession will continue to evolve. Flexibility, creativity, and the ability to implement innovative methods in human capital management will become essential competencies in this field.
       </p>
 
       <h3>Conclusion:</h3>
       <p>
         An HR Manager is not just a personnel administrator but a strategic ally of the business, capable of influencing the quality and outcomes of an organization's work. A profound understanding and awareness of this profession are key elements for successfully managing human resources in the modern business world.
       </p>
  
  <b><p>* Text written with the help of a translator. If you find an error, please let us know *</p></b>
  
  <div className='ads-container'>  
  {/*  реклама  */}
  </div>
     </div>
     )}
      {language === 'ru' && (
        <div>
          <RuHRManager />
        </div>
      )}
      {language === 'am' && (
        <div>
          <AmHRManager />
        </div>
      )}
    {language === 'fr' && (
        <div>
          <FrHRManager />
        </div>
      )}
      {language === 'tj' && (
        <div>
          <TjHRManager />
        </div>
      )}
    </div>
    </Wrapper>
  )
}




export default  Domains;