import React, { useState, useEffect } from 'react'
import Wrapper from '../components/Wrapper';
import AmProgramming_tips from '../language/AmProgramming_tips';
import RuProgramming_tips from '../language/RuProgramming_tips';
import FrProgramming_tips from '../language/FrProgramming_tips';
import JpProgramming_tips from '../language/JpProgramming_tips';
import InProgramming_tips from '../language/InProgramming_tips';
import GeProgramming_tips from '../language/GeProgramming_tips';
import KyProgramming_tips from '../language/KyProgramming_tips';
import IdProgramming_tips from '../language/IdProgramming_tips';
import DaProgramming_tips from '../language/DaProgramming_tips';

function Programming_tips() {
   
  const [language, setLanguage] = useState('en');

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
  };


  useEffect(() => {
    switch (language) {
      case 'en':
        document.title = 'Programming Tips| Code Editors Comparison | Notepad++, Sublime Text, Visual Studio Code, Atom, WebStorm , Ubuntu';
        break;
      case 'ru':
        document.title = ' Советы по программированию | Сравнение редакторов кода | Notepad++, Sublime Text, Visual Studio Code, Atom, WebStorm , Ubuntu ';
        break;
      case 'am':
        document.title = 'Ծրագրավորման խորհուրդներ | Կոդի խմբագիրների համեմատություն | Notepad++, Sublime Text, Visual Studio Code, Atom, WebStorm , Ubuntu | Ubuntu-ն Linux միջուկի հանրաճանաչ բաշխում է, որն անվճար է, բաց կոդով և հեշտ օգտագործման համար, ինչը հիանալի ընտրություն է այն սկսնակների համար, ովքեր ցանկանում են սովորել ծրագրավորում: Ubuntu-ն ապահովում է զարգացման հզոր գործիքների և ծրագրավորման լեզուների լայն շրջանակ, որոնք կարող են օգնել սկսնակներին արագ սկսել: | Git և GitHub սկսնակների համար. հիմնական հասկացություններ և հրամաններ ';
        break;
        case 'fr':
        document.title = 'Comparaison des éditeurs de code | • Éditeur de code rapide et léger | Ubuntu est une distribution Linux populaire, gratuite, open-source et facile à utiliser, ce qui en fait un excellent choix pour les débutants qui veulent apprendre la programmation. Ubuntu propose une gamme d outils de développement puissants et de langages de programmation prêts à l emploi, ce qui peut aider les débutants à démarrer rapidement. | Git et GitHub pour débutants : Concepts et commandes de base | git init , git add , git commit  ';
        break;
        case 'jp':
        document.title = 'コードエディターの比較 | メリット | 速くて軽量なコードエディター | 初心者にとって、Notepad++ はシンプルで軽量なコードエディターであり、使いやすいため良い選択肢です。ただし、自動補完やデバッグなどの機能は提供されていないため、初心者がコードを書いたりデバッグしたりするのが難しい場合があります。したがって、初心者はNotepad++から始めて、徐々により高度なエディターに移行することが推奨されます。| Ubuntuは人気のあるLinuxディストリビューションであり、無料でオープンソースで使いやすいため、プログラミングを学びたい初心者にとって優れた選択肢です。Ubuntuは強力な開発ツールやプログラミング言語をデフォルトで提供しており、初心者が迅速に始めるのに役立ちます。| 初心者向けGitとGitHub：基本的な概念とコマンド ';
        break;
        case 'in':
        document.title = 'कोड संपादक तुलना | नोटपैड++, सबलाइम टेक्स्ट, विज़ुअल स्टूडियो कोड, अटम, वेबस्टॉर्म | उबंटू उबंटू एक लोकप्रिय लिनक्स वितरण है जो मुफ्त, ओपन-सोर्स, और उपयोग करने में आसान है, इसलिए इसे प्रोग्रामिंग सीखने के लिए नवीन लोगों के लिए उत्तम चयन माना जाता है। उबंटू उत्कृष्ट विकास साधनों और प्रोग्रामिंग भाषाओं का एक विस्तृत श्रेणी प्रदान करता है, जो नवीन लोगों को त्वरित शुरू होने में मदद कर सकता है। | शुरुआती लोगों के लिए Git और GitHub: मूल अवधारणाएँ और कमांड्स  ';
        break;
        case 'ge':
          document.title = 'Vergleich der Code-Editoren | Notepad++, Sublime Text, Visual Studio Code, Atom, WebStorm | Ubuntu ist eine beliebte Linux-Distribution, die kostenlos, Open Source und einfach zu bedienen ist, was sie zu einer ausgezeichneten Wahl für Anfänger macht, die das Programmieren lernen möchten. Ubuntu bietet eine Reihe leistungsstarker Entwicklungstools und Programmiersprachen von Haus aus, was Anfängern helfen kann, schnell einzusteigen. | Git und GitHub für Anfänger: Grundkonzepte und Befehle';
          break;
        case 'ky':
          document.title = 'Код редакторлорунун салышышы | Visual Studio Code жакшы көптөр жана шакталган код редактору болуп, жакшы код редактору менен баштап, кийинки жакындыкты коюлгон колдонуучуларга өнүктүүнү көрсөтүү. Аны, бир нече программалаштыруу тили менен файл форматтарын дестелеги менен жумшактап, бир нече плагиндер менен жана көптөрдүү көрүнүштөр менен узарткан. Анын башкы өзү, тегерек эмес жана көптөр эмес, чоң проекттер менен же киргизмелер менен биргелештирилет, кыймылдарды башкаруу үчүн бүгүндөкү салам айырбасталат. | Ubuntu болгон популярдуу Linux дистрибуциясы, андан өткөн убакты, ачык код болуп, жана колдонуу үчүн оңой жана көптөрдүү. Бул жаңы кыргызуучуларга өз кодун жазууучу менен баш тартуу үчүн күчтүүдүн бир көптүгүн табышынан кылынган. Ubuntu, күчтүүлөрдүн бир көптүгүн жөндөө үчүн көптөрдүү программалаштыруу тили менен жана программалар менен көмөк кылат. | Git жана GitHub: Баштапкы концепциялар жана командалар үчүн ';
          break;
        case 'id':
          document.title = 'Perbandingan Editor Kode | Visual Studio Code adalah editor kode yang serbaguna dan kuat dengan berbagai fitur, menjadikannya cocok untuk pemula maupun pengguna yang lebih berpengalaman. Mendukung beberapa bahasa pemrograman dan format file serta memiliki alat debugging bawaan dan integrasi Git, yang dapat membantu pemula dalam melakukan debugging dan mengelola kode mereka dengan lebih mudah. | Ubuntu adalah distribusi Linux populer yang gratis, sumber terbuka, dan mudah digunakan, menjadikannya pilihan yang sangat baik untuk pemula yang ingin belajar pemrograman. Ubuntu menyediakan berbagai alat pengembangan yang kuat dan bahasa pemrograman secara default, yang dapat membantu pemula memulai dengan cepat. | Git dan GitHub untuk Pemula: Konsep Dasar dan Perintah Dasar ';
          break;
          case 'da':
          document.title = 'Sammenligning af kodeeditorer Notepad++, Sublime Text, Visual Studio Code, Atom, WebStorm | Ubuntu | Ubuntu er en populær Linux-distribution, der er gratis, open-source og nem at bruge, hvilket gør den til et glimrende valg for begyndere, der vil lære at programmere. Ubuntu giver et udvalg af kraftfulde udviklingsværktøjer og programmeringssprog ud af boksen, hvilket kan hjælpe begyndere med at komme i gang hurtigt. | Git og GitHub for begyndere: Grundlæggende koncepter og kommandoer ';
          break;
      default:
        document.title = 'Programming Tips | Notepad++, Sublime Text, Visual Studio Code, Atom, WebStorm | Ubuntu ';
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
        <button className='button1' onClick={() => handleLanguageChange('jp')}>日本語</button>
        <button className='button1' onClick={() => handleLanguageChange('in')}>हिन्दी</button>
        <button className='button1' onClick={() => handleLanguageChange('ge')}>Deutsch</button>
        <button className='button1' onClick={() => handleLanguageChange('da')}>Danish</button>
        <button className='button1' onClick={() => handleLanguageChange('ky')}>Кыргызча</button>
        <button className='button1' onClick={() => handleLanguageChange('id')}>Bahasa Indonesia</button>
      </div>
 {language === 'en' && (
        <div>
             <div className='ad-container'>  
          {/*  реклама  */}
        </div> 

       <h1>Code Editors Comparison</h1>
       
<h3>Notepad++, Sublime Text, Visual Studio Code, Atom, WebStorm</h3>

<b>1. Notepad++</b>

<p>+ Pros </p>

<p>• Fast and lightweight code editor </p>

<p>• Supports a wide range of programming languages and file formats </p>

<p>• Extensible through plugins and scripts </p>

<p>• Free and open-source </p>

<p>- Cons</p>

<p>• Limited project management capabilities </p>

<p>• Interface can be cluttered and unintuitive </p>

<p>• May not be suitable for large projects or collaborative development </p>

<p>You can download Notepad++ from its official website:<a href=" https://notepad-plus-plus.org/" target='_blank' > 👉🏼 Notepad++</a></p>


<b>2. Sublime Text</b>

<p>+ Pros</p>

<p>• Fast and customizable code editor</p>

<p>• Supports multiple cursors and powerful search and replace functionality </p>

<p>• Has a large number of plugins and themes available </p>

<p>• Suitable for both small and large projects </p>

<p>- Cons </p>

<p>• Not free (although it does offer an unlimited free trial) </p>

<p>• Limited project management features </p>

<p>• Can be resource-intensive, particularly with large files or projects </p>

<p>You can download Sublime Text from its official website: <a href="https://www.sublimetext.com/" target='_blank' > 👉🏼 Sublime Text</a></p>

<b>3. Visual Studio Code</b>

<p>+ Pros</p>

<p>• Powerful and versatile code editor with a wide range of features</p>

<p>• Supports multiple programming languages and file formats</p>

<p>• Extensible through a large number of plugins and extensions</p>

<p>• Built-in debugging tools and Git integration</p>

<p>- Cons</p>

<p>• Can be resource-intensive, particularly with large projects or extensions</p>

<p>• Steep learning curve for some advanced features</p>

<p>• Requires some configuration and setup to use effectively</p>

<p>You can download Visual Studio Code from its official website: <a href="https://code.visualstudio.com/" target='_blank' > 👉🏼  Visual Studio Code</a> </p>

<b>4. Atom</b>

<p>+ Pros </p>

<p>• Free and open-source code editor with a modern and customizable interface</p>

<p>• Supports multiple programming languages and file formats</p>

<p>• Large number of plugins and packages available</p>

<p>• Suitable for both small and large projects</p>

<p>- Cons </p>

<p>• Can be resource-intensive, particularly with large projects or multiple packages</p>

<p>• Some features may require plugins or packages to be installed</p>

<p>• Interface can be slow or unresponsive at times</p>

<p>You can download Atom from its official website:<a href="https://atom.io/" target='_blank' > 👉🏼 Atom</a></p>

<b>5. WebStorm</b>

<p>• Pros</p>

<p>• Comprehensive and powerful code editor specifically designed for web development</p>

<p>• Supports a wide range of web technologies and frameworks</p>

<p>• Built-in debugging tools and Git integration</p>

<p>• Includes a wide range of productivity features, such as code completion and refactoring</p>

<p>• Cons</p>

<p>• Not free (although it does offer a 30-day free trial)</p>

<p>• Can be resource-intensive, particularly with large projects</p>

<p>• May not be suitable for developers who primarily work with non-web technologies</p>

<p>You can download WebStorm from its official website: <a href="https://www.jetbrains.com/webstorm/" target='_blank' > 👉🏼 WebStorm</a></p>

<p>For beginners, <b>Notepad++ </b> is a good choice as it is a simple and lightweight code editor that is easy to use. However, it does not offer features like auto-completion or debugging, which may make it difficult for beginners to write and debug their code. Therefore, as a beginner, it's recommended to start with Notepad++ and gradually move on to more advanced editors.</p>

<p><b>Sublime Text</b> is a fast and customizable code editor suitable for small and large projects. It has powerful search and replace functionality and supports multiple cursors, which can save time and increase productivity. However, it is not free and does not offer built-in debugging tools, which may not be suitable for beginners.</p>

<p><b>Visual Studio Code</b> is a versatile and powerful code editor with a wide range of features, making it suitable for both beginners and advanced users. It supports multiple programming languages and file formats and has built-in debugging tools and Git integration, which can help beginners debug and manage their code more easily.</p>

<p><b>Atom</b> is a free and open-source code editor with a modern and customizable interface. It supports multiple programming languages and file formats and has a large number of plugins and packages available, which can help beginners customize their editor and add new features. However, it can be resource-intensive, which may slow down the editor.</p>
       
<p><b>WebStorm</b> is a comprehensive and powerful code editor specifically designed for web development. It supports a wide range of web technologies and frameworks and includes built-in debugging tools and Git integration. It also offers a range of productivity features like code completion and refactoring, which can help beginners write and manage their code more effectively. However, it is not free and may not be suitable for developers who primarily work with non-web technologies.</p>       
       
<p>In summary, <b>for beginners</b>, Notepad++ is a good place to start, but it's recommended to gradually move on to more advanced editors like Visual Studio Code or WebStorm, depending on their specific needs and preferences.</p>       

<h1>Ubuntu</h1>

<p>Ubuntu is a popular Linux distribution that is free, open-source, and easy to use, making it an excellent choice for beginners who want to learn programming. Ubuntu provides a range of powerful development tools and programming languages out-of-the-box, which can help beginners get started quickly.</p>

<p>Additionally, Ubuntu has a large and supportive community that provides extensive documentation, tutorials, and forums to help beginners learn programming and solve any issues they may encounter.</p>

<p>Moreover, using Linux can be beneficial for beginners as it provides a more customizable and secure environment than Windows or macOS. It also allows for better control over system resources, which can be useful for programmers working with resource-intensive applications.</p> 

<p>While Mark Shuttleworth is the founder of Canonical and the driving force behind Ubuntu, his work is built upon the foundation laid by Linus Torvalds and the Linux community. Linux is the kernel that powers Ubuntu, and the principles of open-source development championed by both Torvalds and Shuttleworth are what have made Ubuntu a successful and widely-used operating system. Both men have been instrumental in shaping the open-source software landscape and promoting the idea of free and accessible technology for all.</p>
       
 <p>If you're interested in trying out Ubuntu, you can download the latest version from the official Ubuntu website: <a href="https://ubuntu.com/download/desktop" target='_blank' > 👉🏼  Ubuntu</a></p>      

<h1>Git and GitHub for Beginners: Basic Concepts and Commands </h1>

<p> Git is a version control system that helps you track changes to your code over time. It allows you to work on your own copy of a codebase, make changes, and test them without affecting the work of others. Git also makes it easy to collaborate with others on the same codebase and roll back changes if necessary.</p>

<p>GitHub is an online platform that provides hosting for Git repositories and simplifies collaborative work on code. GitHub has a web-based interface for managing repositories, which are simply collections of files and folders, along with the complete history of changes to those files. GitHub allows developers to create new repositories, push changes to existing repositories, and collaborate with others on shared repositories.</p>

<p>If you're new to Git and GitHub, it's best to start with the basics such as repositories, commits, branches, and merges. Many online resources and tutorials offer simpler explanations that can help you quickly get started with these technologies.</p>

<p>Here are some basic Git commands to get you started:</p>

<p> • git init: Initializes a new Git repository</p>

<p> • git add: Adds changes to the staging area</p>

<p>• git commit: Saves changes to the repository with a commit message</p>

<p>• git status: Shows the status of changes in the repository</p>

<p>• git log: Displays a log of all commits in the repository</p>

<p>• git branch: Lists all branches in the repository</p>

<p>• git checkout: Switches between branches or commits</p>

<p>• git merge: Merges changes from one branch into another</p>

<p>And here are some basic GitHub commands:</p>

<p>• git clone: Copies a repository from GitHub to your local machine</p>

<p>• git push: Pushes changes from your local repository to the remote repository on GitHub</p>

<p>• git pull: Pulls changes from the remote repository on GitHub to your local repository</p>

<p>• git fetch: Retrieves changes from the remote repository on GitHub without merging them into your local repository</p>

   
<b><p>* Text written with the help of a translator. If you find an error, please let us know *</p></b>
    <div className='ads-container'>  
  {/*  реклама  */}
    </div>
        </div>
     )}
      {language === 'ru' && (
        <div>
          <RuProgramming_tips />
        </div>
      )}
      {language === 'am' && (
        <div>
          <AmProgramming_tips />
        </div>
      )}
     {language === 'fr' && (
        <div>
          <FrProgramming_tips />
        </div>
      )}
       {language === 'jp' && (
        <div>
          <JpProgramming_tips />
        </div>
      )}
       {language === 'in' && (
        <div>
          <InProgramming_tips />
        </div>
      )}
       {language === 'ge' && (
        <div>
          <GeProgramming_tips />
        </div>
      )}
      {language === 'ky' && (
        <div>
          <KyProgramming_tips />
        </div>
      )}
       {language === 'id' && (
        <div>
          <IdProgramming_tips />
        </div>
      )}
       {language === 'da' && (
        <div>
          <DaProgramming_tips />
        </div>
      )}
       </div>
       </Wrapper>
  )
}

export default Programming_tips;