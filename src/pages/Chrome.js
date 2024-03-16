import React, { useState, useEffect } from 'react'; //1
import Wrapper from '../components/Wrapper';
import RuChrome from '../language/RuChrome';  
import AmChrome from '../language/AmChrome'; 
import FrChrome from '../language/FrChrome';
import TjChrome from '../language/TjChrome';
import ArChrome from '../language/ArChrome';
import PtChrome from '../language/PtChrome';
import HuChrome from '../language/HuChrome';
import RoChrome from '../language/RoChrome';
import ItChrome from '../language/ItChrome';
import JpChrome from '../language/JpChrome';
import DaChrome from '../language/DaChrome';
import SvChrome from '../language/SvChrome';
import InChrome from '../language/InChrome';

function Chrome() {
  const [language, setLanguage] = useState('en');

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
  };

  useEffect(() => {
    switch (language) {
      case 'en':
        document.title = 'How to Install and Update Google Chrome on Ubuntu | Google Chrome is one of the most popular web browsers, providing fast and reliable internet access. In this article, we will go through the steps to install and update Google Chrome on the Ubuntu operating system. | Now you have installed and updated Google Chrome on your Ubuntu computer. Enjoy fast and convenient web browsing! ';
        break;
      case 'ru':
        document.title = 'Как установить и обновить Google Chrome на Ubuntu | Google Chrome — один из самых популярных веб-браузеров, предоставляющий быстрый и надежный доступ в интернет. В этой статье мы рассмотрим шаги установки и обновления Google Chrome на операционной системе Ubuntu. | Прежде чем начать, откройте терминал на вашем компьютере Ubuntu. Это можно сделать, нажав Ctrl + Alt + T или выполните поиск в меню приложений и введите "Терминал". | Эта команда обновит Google Chrome до последней доступной версии. | Теперь у вас установлен и обновлен Google Chrome на вашем компьютере под управлением Ubuntu. Наслаждайтесь быстрым и удобным интернет-просмотром! ';
        break;
      case 'fr':
        document.title = 'Comment installer et mettre à jour Google Chrome sur Ubuntu | Avant de commencer, ouvrez le terminal sur votre ordinateur Ubuntu en appuyant sur Ctrl + Alt + T ou en recherchant dans le menu des applications et en tapant "Terminal". | Lorsque vous y êtes invité, appuyez sur Y (Oui) pour procéder à l installation. Google Chrome sera téléchargé et installé sur votre ordinateur. | Maintenant, vous avez installé et mis à jour Google Chrome sur votre ordinateur Ubuntu. Profitez d une navigation web rapide et pratique!  ';
        break;
        case 'tj':
        document.title = 'Чӣ тавр Google Chrome-ро дар Ubuntu насб кардан ва навсозӣ кардан мумкин аст | Google Chrome яке аз веб-браузерҳои маъмултарин буда, дастрасии зуд ва боэътимоди интернетро фароҳам меорад. Дар ин мақола мо қадамҳои насб ва навсозии Google Chrome-ро дар системаи оператсионии Ubuntu меомӯзем. | Пеш аз он ки мо оғоз кунем, терминалро дар компютери Ubuntu-и худ бо пахш кардани Ctrl + Alt + T ё тавассути ҷустуҷӯ дар менюи барномаҳо ва ворид кардани "Терминал" кушоед. | Акнун шумо Google Chrome-ро дар компютери Ubuntu-и худ насб ва навсозӣ кардед. Аз дидани зуд ва қулай веб лаззат баред! ';
        break;
        case 'ar':
        document.title = ' كيفية تثبيت وتحديث Google Chrome على أوبونتو | قبل أن نبدأ، قم بفتح الطرفية على جهاز الكمبيوتر الخاص بك بأوبونتو عن طريق الضغط على Ctrl + Alt + T أو عن طريق البحث في قائمة التطبيقات وكتابة "Terminal". | الآن لقد قمت بتثبيت وتحديث Google Chrome على جهاز الكمبيوتر الخاص بك الذي يعمل بنظام أوبونتو. استمتع بتصفح الويب السريع والمريح!';
        break;
        case 'pt':
        document.title = 'Como Instalar e Atualizar o Google Chrome no Ubuntu | O Google Chrome é um dos navegadores web mais populares, oferecendo acesso rápido e confiável à internet. Neste artigo, vamos passar pelos passos para instalar e atualizar o Google Chrome no sistema operacional Ubuntu. | Quando solicitado, pressione Y (Sim) para prosseguir com a instalação. O Google Chrome será baixado e instalado no seu computador. | Agora você instalou e atualizou o Google Chrome no seu computador Ubuntu. Aproveite a navegação web rápida e conveniente!';
        break;
        case 'ro':
        document.title = 'Cum se instalează și se actualizează Google Chrome pe Ubuntu | Înainte de a începe, deschideți terminalul de pe computerul dumneavoastră Ubuntu apăsând Ctrl + Alt + T sau căutând în meniul de aplicații și tastând „Terminal”. | Introduceți următoarea comandă pentru a actualiza lista de pachete a sistemului dvs.: | Pentru a actualiza Google Chrome la cea mai recentă versiune, utilizați următoarea comandă în terminal: | Acum ați instalat și actualizat Google Chrome pe computerul Ubuntu. Bucurați-vă de navigarea rapidă și convenabilă!  ';
        break;
        case 'it':
          document.title = 'Come Installare e Aggiornare Google Chrome su Ubuntu | Google Chrome è uno dei browser web più popolari, offrendo un accesso rapido e affidabile a Internet. In questo articolo, passeremo attraverso i passaggi per installare e aggiornare Google Chrome sul sistema operativo Ubuntu. | Dopo che l installazione è completata, avvia Google Chrome. Puoi farlo cercando nel menu delle applicazioni o inserendo il seguente comando nel terminale: | Ora hai installato e aggiornato Google Chrome sul tuo computer Ubuntu. Goditi una navigazione web veloce e comoda! ';
          break;
         case 'jp':
          document.title = 'Ubuntu に Google Chrome をインストールおよび更新する方法 | Google Chrome は、高速かつ信頼性の高いインターネットアクセスを提供する最も人気のあるウェブブラウザの1つです。この記事では、Ubuntu オペレーティングシステムに Google Chrome をインストールおよび更新する手順を説明します。 | インストールを続行する場合は、プロンプトが表示されたら Y (Yes) を押します。Google Chrome がコンピューターにダウンロードされ、インストールされます。| これで、Ubuntu コンピューターに Google Chrome をインストールして更新しました。高速かつ便利なウェブブラウジングをお楽しみください！ ';
          break;
          case 'am':
            document.title = 'Ինչպես տեղադրել և թարմացնել Google Chrome-ը Ubuntu-ում | Google Chrome-ը ամենահայտնի վեբ բրաուզերներից մեկն է, որն ապահովում է արագ և հուսալի ինտերնետ հասանելիություն: Այս հոդվածում մենք կբացահայտենք Ubuntu օպերացիոն համակարգում Google Chrome-ի տեղադրման և թարմացման քայլերը: | Google Chrome-ը վերջին տարբերակին թարմացնելու համար օգտագործեք հետևյալ հրամանը տերմինալում. | Այժմ դուք ունեք Google Chrome-ը տեղադրված և թարմացված ձեր Ubuntu համակարգչում: Վայելեք արագ և հարմար ինտերնետ դիտում ձեր զննարկիչում: ';
            break;
            case 'hu':
              document.title = 'Hogyan telepítsük és frissítsük a Google Chrome-ot Ubuntu rendszeren | A Google Chrome az egyik legnépszerűbb böngésző, gyors és megbízható internetelérést biztosítva. Ebben a cikkben áttekintjük a Google Chrome telepítésének és frissítésének lépéseit az Ubuntu operációs rendszeren. | Mielőtt elkezdenénk, nyissa meg a terminált az Ubuntu számítógépén a Ctrl + Alt + T billentyűk egyidejű lenyomásával, vagy a rendszermenűben való kereséssel és a "Terminal" gépelésével. | Most már telepítette és frissítette a Google Chrome-ot az Ubuntu számítógépén. Élvezze a gyors és kényelmes webböngészést!';
              break;
              case 'in':
                document.title = 'यूबंटू पर गूगल क्रोम को कैसे स्थापित और अपडेट करें | गूगल क्रोम एक लोकप्रिय वेब ब्राउज़रों में से एक है, जो तेज और विश्वसनीय इंटरनेट एक्सेस प्रदान करता है। इस लेख में, हम यूबंटू ऑपरेटिंग सिस्टम पर गूगल क्रोम को स्थापित और अपडेट करने के चरणों के माध्यम से जाएँगे। | जब हम शुरू करें, तो अपने यूबंटू कंप्यूटर पर टर्मिनल खोलें जिसके लिए आप Ctrl + Alt + T दबा सकते हैं या अनुप्रयोगों मेनू में खोज कर "टर्मिनल" लिखकर खोज कर सकते हैं। | अब आपने अपने यूबंटू कंप्यूटर पर गूगल क्रोम को स्थापित और अपडेट किया है। तेज और सुगम वेब ब्राउज़िंग का आनंद लें! ';
                break;
                case 'sv':
                document.title = 'Så här installerar och uppdaterar du Google Chrome på Ubuntu | Google Chrome är en av de mest populära webbläsarna som ger snabb och pålitlig internetåtkomst. I den här artikeln kommer vi att gå igenom stegen för att installera och uppdatera Google Chrome på Ubuntu-operativsystemet. | sudo apt-get --only-upgrade install google-chrome-stable';
                break;
                case 'da':
                document.title = 'Sådan installerer og opdaterer du Google Chrome på Ubuntu | Google Chrome er en af de mest populære webbrowsere, der giver hurtig og pålidelig internetadgang. I denne artikel vil vi gennemgå trinnene til at installere og opdatere Google Chrome på Ubuntu-operativsystemet. | sudo apt-get --only-upgrade install google-chrome-stable';
                break;
      default:
    document.title = 'How to Install and Update Google Chrome on Ubuntu';
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
          <button className='button1' onClick={() => handleLanguageChange('ar')}>عربى</button>
          <button className='button1' onClick={() => handleLanguageChange('pt')}>Português</button>
          <button className='button1' onClick={() => handleLanguageChange('hu')}>Magyar</button>
          <button className='button1' onClick={() => handleLanguageChange('ro')}>Română</button>
          <button className='button1' onClick={() => handleLanguageChange('it')}>Italiano</button>
          <button className='button1' onClick={() => handleLanguageChange('da')}>Dansk</button>
          <button className='button1' onClick={() => handleLanguageChange('sv')}>Svenska</button>
          <button className='button1' onClick={() => handleLanguageChange('jp')}>日本語</button>
          <button className='button1' onClick={() => handleLanguageChange('in')}>हिन्दी</button>
        </div>

        {language === 'en' && (
          <div>
            <div className='ad-container'>  
          {/*  реклама  */}
        </div> 
            <h1>How to Install and Update Google Chrome on Ubuntu</h1>
       <p>Google Chrome is one of the most popular web browsers, providing fast and reliable internet access. In this article, we will go through the steps to install and update Google Chrome on the Ubuntu operating system.</p>
     
       {/* Step 1: Open the Terminal */}
       <h2>Step 1: Open the Terminal</h2>
       <p>Before we begin, open the terminal on your Ubuntu computer by pressing Ctrl + Alt + T or by searching in the applications menu and typing "Terminal".</p>
     
       {/* Step 2: Update Package List */}
       <h2>Step 2: Update Package List</h2>
       <p>Enter the following command to update your system's package list:</p>
       <code>sudo apt update</code>
     
       <p>Press Enter and enter the administrator password if prompted.</p>
     
       {/* Step 3: Install Google Chrome */}
       <h2>Step 3: Install Google Chrome</h2>
       <p>To install Google Chrome, use the following command:</p>
       <code>sudo apt install google-chrome-stable</code>
     
       <p>When prompted, press Y (Yes) to proceed with the installation. Google Chrome will be downloaded and installed on your computer.</p>
     
       {/* Step 4: Launch Google Chrome */}
       <h2>Step 4: Launch Google Chrome</h2>
       <p>After the installation is complete, launch Google Chrome. You can do this by searching in the applications menu or by entering the following command in the terminal:</p>
       <code>google-chrome-stable</code>
     
       {/* Step 5: Update Google Chrome */}
       <h2>Step 5: Update Google Chrome</h2>
       
       <p>To update Google Chrome to the latest version, use the following command in the terminal:</p>
       
       <code>sudo apt-get --only-upgrade install google-chrome-stable</code>
     
       <p>This command will update Google Chrome to the latest available version.</p>
     
       {/* Conclusion */}
       <h2>Conclusion</h2>
       
       <p>Now you have installed and updated Google Chrome on your Ubuntu computer. Enjoy fast and convenient web browsing!</p>
          
    <b><p>* Text written with the help of a translator. If you find an error, please let us know *</p></b>
  
    <div className='ads-container'>  
      {/*  реклама  */}
    </div> 
      </div>
        )}
        {language === 'ru' && (
          <div>
            <RuChrome />
          </div>
        )}
        {language === 'am' && (
          <div>
            <AmChrome />
          </div>
        )}
         {language === 'fr' && (
          <div>
            <FrChrome />
          </div>
        )}
          {language === 'tj' && (
          <div>
            <TjChrome />
          </div>
        )}
         {language === 'ar' && (
          <div>
            <ArChrome />
          </div>
        )}
        {language === 'pt' && (
          <div>
            <PtChrome />
          </div>
        )}
        {language === 'hu' && (
          <div>
            <HuChrome />
          </div>
        )}
         {language === 'ro' && (
          <div>
            <RoChrome />
          </div>
        )}
           {language === 'it' && (
          <div>
            <ItChrome />
          </div>
        )}
        {language === 'jp' && (
          <div>
            <JpChrome />
          </div>
        )}
         {language === 'da' && (
          <div>
            <DaChrome />
          </div>
        )}
         {language === 'sv' && (
          <div>
            <SvChrome />
          </div>
        )}
         {language === 'in' && (
          <div>
            <InChrome />
          </div>
        )}
      </div>
    </Wrapper>
  );
}

export default Chrome;
