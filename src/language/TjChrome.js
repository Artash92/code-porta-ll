import React from 'react';

function TjChrome() {
  return (
    <div>
      <div className='ad-container'>  
          {/*  реклама  */}
        </div>

          <h1>Чӣ тавр Google Chrome-ро дар Ubuntu насб кардан ва навсозӣ кардан мумкин аст</h1>
       
          <p>Google Chrome яке аз веб-браузерҳои маъмултарин буда, дастрасии зуд ва боэътимоди интернетро фароҳам меорад. Дар ин мақола мо қадамҳои насб ва навсозии Google Chrome-ро дар системаи оператсионии Ubuntu меомӯзем.</p>
     
       {/* Step 1: Open the Terminal */}
       <h2>Қадами 1: Терминалро кушоед</h2>
       
       <p>Пеш аз он ки мо оғоз кунем, терминалро дар компютери Ubuntu-и худ бо пахш кардани Ctrl + Alt + T ё тавассути ҷустуҷӯ дар менюи барномаҳо ва ворид кардани "Терминал" кушоед.</p>
     
       {/* Step 2: Update Package List */}
       
       <h2>Қадами 2: Рӯйхати бастаҳоро навсозӣ кунед</h2>
       
       <p>Барои навсозии рӯйхати бастаҳои системаи шумо фармони зеринро ворид кунед:</p>
       
       <code>sudo apt update</code>
     
       <p> Enter-ро пахш кунед ва агар дархост шавад, пароли администраторро ворид кунед.</p>
     
       {/* Step 3: Install Google Chrome */}
       
       <h2>Қадами 3: Google Chrome насб кунед</h2>
       
       <p>Барои насб кардани Google Chrome, фармони зеринро истифода баред:</p>
       
       <code>sudo apt install google-chrome-stable</code>
     
       <p>Вақте ки дархост дода мешавад, Y (Ҳа) -ро пахш кунед, то ба насбкунӣ идома диҳед. Google Chrome дар компютери шумо зеркашӣ ва насб карда мешавад.</p>
     
       {/* Step 4: Launch Google Chrome */}
       
       <h2>Қадами 4: Google Chrome-ро оғоз кунед</h2>
       
       <p>Пас аз анҷоми насб, Google Chrome-ро оғоз кунед. Шумо метавонед ин корро тавассути ҷустуҷӯ дар менюи барномаҳо ё бо ворид кардани фармони зерин дар терминал анҷом диҳед:</p>
       
       <code>google-chrome-stable</code>
     
       {/* Step 5: Update Google Chrome */}
       
       <h2>Қадами 5: Навсозии Google Chrome</h2>
       
       <p>Барои навсозии Google Chrome ба версияи охирин, фармони зеринро дар терминал истифода баред:</p>
       
       <code>sudo apt-get --only-upgrade install google-chrome-stable</code>
     
       <p>Ин фармон Google Chrome-ро ба версияи охирини дастрас навсозӣ мекунад.</p>
     
       {/* Conclusion */}
       
       <h2>Хулоса</h2>
       
       <p>Акнун шумо Google Chrome-ро дар компютери Ubuntu-и худ насб ва навсозӣ кардед. Аз дидани зуд ва қулай веб лаззат баред!</p>
    
       <b><p>* Матн бо ёрии тарчумон навишта шудааст. Агар шумо хатое пайдо кунед, лутфан ба мо хабар диҳед *</p></b>
    
    <div className='ads-container'>  
  {/*  реклама  */}
</div>
    </div>
  )
}

export default TjChrome;