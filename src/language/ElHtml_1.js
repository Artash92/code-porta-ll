import React from 'react';

function ElHtml_1() {
  return (
    <div>
      <div className='ad-container'>  
          {/*  реклама  */}
        </div> 
        
        <h1>HTML</h1>

        <p>Η HTML (HyperText Markup Language) είναι μια γλώσσα σήμανσης που χρησιμοποιείται για τη δημιουργία και τη δομή περιεχομένου στο Διαδίκτυο. Είναι το θεμέλιο κάθε ιστότοπου και χρησιμεύει ως το δομικό στοιχείο των ιστοσελίδων. Η HTML είναι μια δηλωτική γλώσσα, που σημαίνει ότι χρησιμοποιείται για να περιγράψει το περιεχόμενο και τη δομή μιας ιστοσελίδας, αλλά όχι απαραίτητα την εμφάνισή της.</p>

<p>Η HTML δημιουργήθηκε από τον Tim Berners-Lee στις αρχές της δεκαετίας του 1990 ενώ εργαζόταν στο CERN, τον Ευρωπαϊκό Οργανισμό Πυρηνικής Έρευνας. Ο Berners-Lee έψαχνε έναν τρόπο να μοιράζεται και να οργανώνει πληροφορίες μεταξύ των ερευνητών και η HTML ήταν η λύση που βρήκε. Η HTML δημιουργήθηκε για να είναι μια απλή γλώσσα που θα μπορούσε εύκολα να γίνει κατανοητή και να χρησιμοποιηθεί από οποιονδήποτε, ανεξάρτητα από το τεχνικό τους υπόβαθρο.</p>

<p>Η HTML αποτελείται από μια σειρά στοιχείων που αντιπροσωπεύονται από ετικέτες. Οι ετικέτες περικλείονται σε γωνιακές αγκύλες και χρησιμοποιούνται για τον καθορισμό της δομής και του περιεχομένου μιας ιστοσελίδας. Για παράδειγμα, η ετικέτα {'<head>'} χρησιμοποιείται για να ορίσει το τμήμα κεφαλίδας μιας ιστοσελίδας, το οποίο συνήθως περιέχει πληροφορίες όπως ο τίτλος της σελίδας και συνδέσμους προς εξωτερικά φύλλα στυλ και σενάρια. Η ετικέτα {'<body>'} χρησιμοποιείται για να ορίσει το σώμα μιας ιστοσελίδας, η οποία περιέχει το κύριο περιεχόμενο της σελίδας.</p>

<p>Η HTML είναι μια γλώσσα που εξελίσσεται συνεχώς, με νέες εκδόσεις να κυκλοφορούν περιοδικά. Η τρέχουσα έκδοση της HTML είναι η HTML5, η οποία κυκλοφόρησε το 2014. Η HTML5 εισήγαγε πολλές νέες δυνατότητες και δυνατότητες, όπως ετικέτες βίντεο και ήχου, στοιχεία καμβά για τη σχεδίαση γραφικών και σημασιολογικές ετικέτες για καλύτερη προσβασιμότητα και SEO.</p>

<p>Με λίγα λόγια, η HTML είναι μια γλώσσα σήμανσης που χρησιμοποιείται για τη δημιουργία και τη δομή περιεχομένου στο Διαδίκτυο. Δημιουργήθηκε από τον Tim Berners-Lee στις αρχές της δεκαετίας του 1990 και αποτελεί τη βάση κάθε ιστότοπου. Η HTML αποτελείται από μια σειρά στοιχείων που αντιπροσωπεύονται από ετικέτες και είναι μια συνεχώς εξελισσόμενη γλώσσα με νέες εκδόσεις που κυκλοφορούν περιοδικά.</p>

<p>1. Μια απλή ιστοσελίδα με τίτλο και παράγραφο:</p>

<code>
   <p>{'<'}!<span className='blue'>DOCTYPE</span> <span className='blue1'>html</span>{'>'}</p>

   <p>{'<'}<span className='green'>html</span>{'>'}</p> 
  
   <p>{'<'}<span className='green'>head</span>{'>'}</p>

   <p>&nbsp;{'<'}<span className='green'>title</span>{'>'}Η ιστοσελίδα μου{'</'}<span className='green'>title</span>{'>'}</p>

   <p>{'</'}<span className='green'>head</span>{'>'}</p>

   <p>{'<'}<span className='green'>body</span>{'>'}</p>

   <p>&nbsp;{'<'}<span className='green'>h1</span>{'>'}Καλώς ήρθατε στην ιστοσελίδα μου{'</'}<span className='green'>h1</span>{'>'}</p>

   <p>&nbsp;{'<'}<span className='green'>p</span>{'>'}Αυτή είναι η πρώτη μου ιστοσελίδα.{'</'}<span className='green'>p</span>{'>'}</p>

   <p>{'</'}<span className='green'>body</span>{'>'}</p>

   <p>{'</'}<span className='green'>html</span>{'>'}</p>
</code>
  
   
<p>Αυτό είναι ένα παράδειγμα μιας απλής ιστοσελίδας που αποτελείται από μια επικεφαλίδα και μια παράγραφο. Ο τίτλος αντιπροσωπεύεται από την ετικέτα "τίτλος" και η παράγραφος αντιπροσωπεύεται από την ετικέτα "p". Ο τίτλος της σελίδας εμφανίζεται στη γραμμή τίτλου του προγράμματος περιήγησης και στα αποτελέσματα αναζήτησης.</p>

<p>2. Εικόνα με εναλλακτικό κείμενο και σύνδεσμος προς άλλη σελίδα:</p>

<code>
    <p>{'<'}!<span className='blue'>DOCTYPE</span> <span className='blue1'>html</span>{'>'}</p>
       
    <p>{'<'}<span className='green'>html</span>{'>'}</p> 
       
    <p>{'<'}<span className='green'>head</span>{'>'}</p>  
       
    <p>&nbsp;{'<'}<span className='green'>title</span>{'>'}Η ιστοσελίδα μου{'</'}<span className='green'>title</span>{'>'}</p> 
       
    <p>{'</'}<span className='green'>head</span>{'>'}</p> 
       
    <p>{'<'}<span className='green'>body</span>{'>'}</p> 
       
    <p>&nbsp;{'<'}<span className='green'>h1</span>{'>'}Καλώς ήρθατε στην ιστοσελίδα μου{'</'}<span className='green'>h1</span>{'>'}</p>
       
    <p>&nbsp;{'<'}<span className='green'>p</span>{'>'}Αυτή είναι η εικόνα μιας γάτας:{'</'}<span className='green'>p</span>{'>'}</p>
       
    <p>&nbsp;{'<'}<span className='green'>img</span> <span className='blue'>src</span>=<span className='blue1'>"cat.jpg"</span> <span className='blue'>alt</span>=<span className='blue1'>"Χαριτωμένη γάτα"</span>{'>'}</p> 

    <p>&nbsp;{'<'}<span className='green'>p</span>{'>'}Πατήστε {'<'}<span className='green'>a</span> <span className ='blue'>href</span>=<span className='blue1'>"http://www.google.com"</span>{'>'}εδώ{'</'}<span className= 'green'>a</span>{'>'} για να μεταβείτε στο Google.{'</'}<span className='green'>p</span>{'>'}</p>

    <p>{'</'}<span className='green'>body</span>{'>'}</p> 

    <p>{'</'}<span className='green'>html</span>{'>'}</p>
  </code>



  <p>Αυτό το παράδειγμα δείχνει μια εικόνα μιας γάτας που αντιπροσωπεύεται από μια ετικέτα "img" με εναλλακτικό κείμενο που εμφανίζεται εάν η εικόνα αποτύχει να φορτωθεί. Ένας σύνδεσμος προς το Google αντιπροσωπεύεται από μια ετικέτα "a" με ένα χαρακτηριστικό "href" που δείχνει τη διεύθυνση URL της σελίδας προορισμού.</p>

  <p>3. Φόρμα για την εισαγωγή ονόματος και την αποστολή δεδομένων στον διακομιστή:</p>
  
<code>
    <p>{'<'}!<span className='blue'>DOCTYPE</span> <span className='blue1'>html</span>{'>'}</p>
    
    <p>{'<'}<span className='green'>html</span>{'>'}</p>    

    <p>{'<'}<span className='green'>head</span>{'>'}</p>  

    <p>&nbsp;{'<'}<span className='green'>title</span>{'>'}Η ιστοσελίδα μου{'</'}<span className='green'>title</span>{'>'}</p>   

    <p>{'</'}<span className='green'>head</span>{'>'}</p>  

    <p>{'<'}<span className='green'>body</span>{'>'}</p> 

    <p>&nbsp;{'<'}<span className='green'>h1</span>{'>'}Καλώς ήρθατε στην ιστοσελίδα μου{'</'}<span className='green'>h1</span>{'>'}</p> 

    <p>{'<'}<span className='green'>form</span>{'>'}</p> 

    <p>&nbsp;{'<'}<span className='green'>label</span> <span className='blue'>for</span>=<span className='blue1'>"name"</span>{'>'}Εισάγετε το όνομά σας:{'</'}<span className='green'>label</span>{'>'}</p>  

    <p>&nbsp;{'<'}<span className='green'>input</span> <span className='blue'>type</span>=<span className='blue1'>"text"</span> <span className='blue'>id</span>=<span className='blue1'>"name"</span> <span className='blue'>name</span>=<span className='blue1'>"name"</span>{'><'}<span className='green'>br</span>{'><'}<span className='green'>br</span>{'>'}</p>  

    <p>&nbsp;{'<'}<span className='green'>input</span> <span className='blue'>type</span>=<span className='blue1'>"submit"</span> <span className='blue'>value</span>=<span className='blue1'>"Στείλετε"</span>{'>'}</p>  

    <p>{'</'}<span className='green'>form</span>{'>'}</p>  

    <p>{'</'}<span className='green'>body</span>{'>'}</p>   

    <p>{'</'}<span className='green'>html</span>{'>'}</p>   
  </code>

  <p>Αυτό το παράδειγμα δείχνει μια φόρμα με ένα πεδίο κειμένου για να εισάγει ο χρήστης ένα όνομα. Όταν υποβληθεί η φόρμα, τα δεδομένα αποστέλλονται στον διακομιστή για επεξεργασία. Η ετικέτα "label" παρέχει μια ετικέτα κειμένου για το πεδίο εισαγωγής και η ετικέτα "input" χρησιμοποιείται για τη δημιουργία του πεδίου εισαγωγής και το κουμπί υποβολής.</p>

  <p>4.Ταξινομημένη λίστα στοιχείων:</p>

<code>
    <p>{'<'}!<span className='blue'>DOCTYPE</span> <span className='blue1'>html</span>{'>'}</p>

    <p>{'<'}<span className='green'>html</span>{'>'}</p> 

    <p>{'<'}<span className='green'>head</span>{'>'}</p>

    <p>&nbsp;{'<'}<span className='green'>title</span>{'>'}Η ιστοσελίδα μου{'</'}<span className='green'>title</span>{'>'}</p>

    <p>{'</'}<span className='green'>head</span>{'>'}</p> 

    <p>{'<'}<span className='green'>body</span>{'>'}</p> 

    <p>&nbsp;{'<'}<span className='green'>h1</span>{'>'}Καλώς ήρθατε στην ιστοσελίδα μου{'</'}<span className='green'>h1</span>{'>'}</p> 

    <p>&nbsp;{'<'}<span className='green'>h2</span>{'>'}Τα αγαπημένα μου πιάτα:{'</'}<span className='green'>h2</span>{'>'}</p> 

    <p>{'<'}<span className='green'>ol</span>{'>'}</p>

    <p>&nbsp;{'<'}<span className='green'>li</span>{'>'}Πίτσα{'</'}<span className='green'>li</span>{'>'}</p>

    <p>&nbsp;{'<'}<span className='green'>li</span>{'>'}Μπέργκερ{'</'}<span className='green'>li</span>{'>'}</p>

    <p>&nbsp;{'<'}<span className='green'>li</span>{'>'}Παγωτό{'</'}<span className='green'>li</span>{'>'}</p>

    <p>{'</'}<span className='green'>ol</span>{'>'}</p> 

    <p>{'</'}<span className='green'>body</span>{'>'}</p> 

    <p>{'</'}<span className='green'>html</span>{'>'}</p>
</code>
  

<p>Αυτό το παράδειγμα δείχνει μια ταξινομημένη λίστα στοιχείων που αντιπροσωπεύονται από την ετικέτα "ol", όπου κάθε στοιχείο αντιπροσωπεύεται από την ετικέτα "li". Οι αριθμοί για τη λίστα δημιουργούνται αυτόματα από το πρόγραμμα περιήγησης.</p>

<p>5. Μη ταξινομημένη λίστα στοιχείων:</p>

<code>
  <p>{'<'}!<span className='blue'>DOCTYPE</span> <span className='blue1'>html</span>{'>'}</p>

  <p>{'<'}<span className='green'>html</span>{'>'}</p>

  <p>{'<'}<span className='green'>head</span>{'>'}</p>

  <p>&nbsp;{'<'}<span className='green'>title</span>{'>'}Η ιστοσελίδα μου{'</'}<span className='green'>title</span>{'>'}</p>

  <p>{'</'}<span className='green'>head</span>{'>'}</p>

  <p>{'<'}<span className='green'>body</span>{'>'}</p>

  <p>&nbsp;{'<'}<span className='green'>h1</span>{'>'}Καλώς ήρθατε στην ιστοσελίδα μου{'</'}<span className='green'>h1</span>{'>'}</p> 

  <p>&nbsp;{'<'}<span className='green'>h2</span>{'>'}Οι αγαπημένες μου ταινίες:{'</'}<span className='green'>h2</span>{'>'}</p> 

  <p>{'<'}<span className='green'>ul</span>{'>'}</p>

  <p>&nbsp;{'<'}<span className='green'>li</span>{'>'}The Shawshank Redemption{'</'}<span className='green'>li</span>{'>'}</p>

  <p>&nbsp;{'<'}<span className='green'>li</span>{'>'}πνευματικός πατέρας{'</'}<span className='green'>li</span>{'>'}</p>

  <p>&nbsp;{'<'}<span className='green'>li</span>{'>'}Ο σκοτεινός ιππότης{'</'}<span className='green'>li</span>{'>'}</p>

  <p>{'</'}<span className='green'>ul</span>{'>'}</p> 

  <p>{'</'}<span className='green'>body</span>{'>'}</p>

  <p>{'</'}<span className='green'>html</span>{'>'}</p> 
</code>

<p>Αυτό το παράδειγμα δείχνει μια μη ταξινομημένη λίστα στοιχείων που αντιπροσωπεύονται από μια ετικέτα "ul", με κάθε στοιχείο να αντιπροσωπεύεται από μια ετικέτα "li". Τα στοιχεία λίστας εμφανίζονται με κουκκίδες από προεπιλογή.</p>

<p>Για να εμβαθύνουν την κατανόησή τους για την HTML, οι μαθητές μπορούν να κατευθυνθούν σε πρόσθετους πόρους, όπως τεκμηρίωση σε <b>Έγγραφα Ιστού MDN</b> ή <b>W3Schools</b>.</p>

<p>Για να προσθέσετε έναν σύνδεσμο στα Έγγραφα Ιστού MDN στον ιστότοπό σας, χρησιμοποιήστε τον ακόλουθο κώδικα HTML:</p>

<p><a href="https://developer.mozilla.org/en-US/docs/Web/HTML" target='_blank'> <b>&#x1F44D; MDN Web Docs</b></a></p>

<p>Για να προσθέσετε έναν σύνδεσμο στο W3Schools στον ιστότοπό σας, χρησιμοποιήστε τον ακόλουθο κώδικα HTML:</p>

<p><a href="https://www.w3schools.com/html/" target='_blank' > <b>&#x1F44D; W3Schools</b></a></p>

<p>Τόσο το MDN Web Docs όσο και το W3Schools παρέχουν λεπτομερή τεκμηρίωση για την HTML και τις σχετικές τεχνολογίες, καθώς και διαδραστικά σεμινάρια και παραδείγματα. Οι μαθητές μπορούν να χρησιμοποιήσουν αυτούς τους πόρους για να εμβαθύνουν τις γνώσεις τους για την HTML και να βελτιώσουν τις δεξιότητές τους στην ανάπτυξη ιστού.</p>



<b><p>* Κείμενο γραμμένο με τη βοήθεια ενός μεταφραστή. Αν βρείτε κάποιο σφάλμα, παρακαλούμε ενημερώστε μας *</p></b>
    <div className='ads-container'>  
  {/*  реклама  */}
</div>
    </div>
  )
}

export default ElHtml_1;