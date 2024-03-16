import React from 'react';

function IdHtml_1() {
  return (
    <div>
        <div className='ad-container'>  
          {/*  реклама  */}
        </div>

        <h1>HTML</h1>

<p>HTML, yang merupakan singkatan dari HyperText Markup Language, adalah bahasa markup yang digunakan untuk membuat dan struktur konten di web. Ini adalah tulang punggung setiap situs web dan berfungsi sebagai blok pembangun halaman web. HTML adalah bahasa deklaratif, yang berarti digunakan untuk menggambarkan konten dan struktur halaman web, tetapi tidak selalu penampilannya.</p>

<p>HTML diciptakan oleh Tim Berners-Lee pada awal tahun 1990-an saat bekerja di CERN, Organisasi Eropa untuk Riset Nuklir. Berners-Lee sedang mencari cara untuk berbagi dan mengatur informasi di antara para peneliti, dan HTML adalah solusi yang dia temukan. HTML dirancang untuk menjadi bahasa yang sederhana yang dapat dengan mudah dimengerti dan digunakan oleh siapa pun, tanpa memandang latar belakang teknis mereka.</p>

<p>HTML terdiri dari serangkaian elemen, yang direpresentasikan oleh tag. Tag dikemas dalam tanda kurung sudut dan digunakan untuk mendefinisikan struktur dan konten halaman web. Misalnya, tag {'<head>'} digunakan untuk mendefinisikan bagian kepala halaman web, yang biasanya berisi informasi seperti judul halaman dan tautan ke stylesheet dan skrip eksternal. Tag {'<body>'} digunakan untuk mendefinisikan bagian tubuh halaman web, yang berisi konten utama dari halaman.</p>

<p>HTML adalah bahasa yang terus berkembang, dengan versi-versi baru yang dirilis secara berkala. Versi HTML saat ini adalah HTML5, yang dirilis pada tahun 2014. HTML5 memperkenalkan banyak fitur dan kemampuan baru, seperti tag video dan audio, elemen kanvas untuk menggambar grafis, dan tag semantik untuk aksesibilitas dan SEO yang lebih baik.</p>

<p>Secara ringkas, HTML adalah bahasa markup yang digunakan untuk membuat dan struktur konten di web. Ini diciptakan oleh Tim Berners-Lee pada awal tahun 1990-an dan merupakan tulang punggung setiap situs web. HTML terdiri dari serangkaian elemen yang direpresentasikan oleh tag, dan ini adalah bahasa yang terus berkembang dengan versi baru yang dirilis secara berkala.</p>

<p>1. Halaman web sederhana dengan judul dan paragraf:</p>

<code>
   <p>{'<'}!<span className='blue'>DOCTYPE</span> <span className='blue1'>html</span>{'>'}</p>
   <p>{'<'}<span className='green'>html</span>{'>'}</p> 
   <p>{'<'}<span className='green'>head</span>{'>'}</p>
   <p>&nbsp;{'<'}<span className='green'>title</span>{'>'}Halaman Web Saya{'</'}<span className='green'>title</span>{'>'}</p>
   <p>{'</'}<span className='green'>head</span>{'>'}</p>
   <p>{'<'}<span className='green'>body</span>{'>'}</p>
   <p>&nbsp;{'<'}<span className='green'>h1</span>{'>'}Selamat datang di Halaman Web Saya{'</'}<span className='green'>h1</span>{'>'}</p>
   <p>&nbsp;{'<'}<span className='green'>p</span>{'>'}Ini adalah halaman web pertama saya.{'</'}<span className='green'>p</span>{'>'}</p>
   <p>{'</'}<span className='green'>body</span>{'>'}</p>
   <p>{'</'}<span className='green'>html</span>{'>'}</p>
</code>

<p>Ini adalah contoh halaman web sederhana yang terdiri dari judul dan satu paragraf. Judul halaman ditampilkan di bilah judul peramban dan dalam hasil pencarian mesin telusur.</p>

<p>2. Gambar dengan teks alternatif dan tautan ke halaman lain:</p>

  <code>
    <p>{'<'}!<span className='blue'>DOCTYPE</span> <span className='blue1'>html</span>{'>'}</p>
    
    <p>{'<'}<span className='green'>html</span>{'>'}</p> 
   
    <p>{'<'}<span className='green'>head</span>{'>'}</p>  
      
    <p>&nbsp;{'<'}<span className='green'>title</span>{'>'}Halaman Web Saya{'</'}<span className='green'>title</span>{'>'}</p> 
      
    <p>{'</'}<span className='green'>head</span>{'>'}</p> 
      
    <p>{'<'}<span className='green'>body</span>{'>'}</p> 
      
    <p>&nbsp;{'<'}<span className='green'>h1</span>{'>'}Selamat datang di Halaman Web Saya{'</'}<span className='green'>h1</span>{'>'}</p>
      
    <p>&nbsp;{'<'}<span className='green'>p</span>{'>'}Ini adalah gambar seekor kucing:{'</'}<span className='green'>p</span>{'>'}</p>
      
    <p>&nbsp;{'<'}<span className='green'>img</span> <span className='blue'>src</span>=<span className='blue1'>"cat.jpg"</span> <span className='blue'>alt</span>=<span className='blue1'>"Seekor kucing lucu"</span>{'>'}</p> 
   
    <p>&nbsp;{'<'}<span className='green'>p</span>{'>'}Klik {'<'}<span className='green'>a</span> <span className='blue'>href</span>=<span className='blue1'>"http://www.google.com"</span>{'>'}di sini{'</'}<span className='green'>a</span>{'>'} untuk pergi ke Google.{'</'}<span className='green'>p</span>{'>'}</p> 
   
    <p>{'</'}<span className='green'>body</span>{'>'}</p> 
   
    <p>{'</'}<span className='green'>html</span>{'>'}</p>
 </code>

<p>Contoh ini mencakup gambar seekor kucing, yang direpresentasikan oleh tag "img", dengan teks alternatif ditampilkan jika gambar tidak dapat dimuat. Tautan ke Google direpresentasikan oleh tag "a" dengan atribut "href" menunjuk ke URL halaman tujuan.</p>

<p>3. Formulir untuk memasukkan nama dan mengirimkan data ke server:</p>
  
  <code>
    <p>{'<'}!<span className='blue'>DOCTYPE</span> <span className='blue1'>html</span>{'>'}</p>
     
    <p>{'<'}<span className='green'>html</span>{'>'}</p>    

    <p>{'<'}<span className='green'>head</span>{'>'}</p>  

    <p>&nbsp;{'<'}<span className='green'>title</span>{'>'}Halaman Web Saya{'</'}<span className='green'>title</span>{'>'}</p>   

    <p>{'</'}<span className='green'>head</span>{'>'}</p>  

    <p>{'<'}<span className='green'>body</span>{'>'}</p> 

    <p>&nbsp;{'<'}<span className='green'>h1</span>{'>'}Selamat datang di Halaman Web Saya{'</'}<span className='green'>h1</span>{'>'}</p> 

    <p>{'<'}<span className='green'>form</span>{'>'}</p> 

    <p>&nbsp;{'<'}<span className='green'>label</span> <span className='blue'>for</span>=<span className='blue1'>"name"</span>{'>'}Masukkan nama Anda:{'</'}<span className='green'>label</span>{'>'}</p>  

    <p>&nbsp;{'<'}<span className='green'>input</span> <span className='blue'>type</span>=<span className='blue1'>"text"</span> <span className='blue'>id</span>=<span className='blue1'>"name"</span> <span className='blue'>name</span>=<span className='blue1'>"name"</span>{'><'}<span className='green'>br</span>{'><'}<span className='green'>br</span>{'>'}</p>  

    <p>&nbsp;{'<'}<span className='green'>input</span> <span className='blue'>type</span>=<span className='blue1'>"submit"</span> <span className='blue'>value</span>=<span className='blue1'>"Kirim"</span>{'>'}</p>  

    <p>{'</'}<span className='green'>form</span>{'>'}</p>  

    <p>{'</'}<span className='green'>body</span>{'>'}</p>   

    <p>{'</'}<span className='green'>html</span>{'>'}</p>   
  </code>

  <p>Contoh ini menunjukkan formulir dengan kolom masukan teks agar pengguna memasukkan namanya. Ketika formulir dikirimkan, data dikirimkan ke server untuk diproses. Tag "label" menyediakan label teks untuk kolom masukan, dan tag "input" digunakan untuk membuat kolom masukan dan tombol kirim.</p>
   
  <p>4. Daftar terurut item:</p>

  <code>
    <p>{'<'}!<span className='blue'>DOCTYPE</span> <span className='blue1'>html</span>{'>'}</p>
    
    <p>{'<'}<span className='green'>html</span>{'>'}</p> 

    <p>{'<'}<span className='green'>head</span>{'>'}</p>

    <p>&nbsp;{'<'}<span className='green'>title</span>{'>'}Halaman Web Saya{'</'}<span className='green'>title</span>{'>'}</p>

    <p>{'</'}<span className='green'>head</span>{'>'}</p> 

    <p>{'<'}<span className='green'>body</span>{'>'}</p> 

    <p>&nbsp;{'<'}<span className='green'>h1</span>{'>'}Selamat datang di Halaman Web Saya{'</'}<span className='green'>h1</span>{'>'}</p> 

    <p>&nbsp;{'<'}<span className='green'>h2</span>{'>'}Makanan favorit saya:{'</'}<span className='green'>h2</span>{'>'}</p> 

    <p>{'<'}<span className='green'>ol</span>{'>'}</p>

    <p>&nbsp;{'<'}<span className='green'>li</span>{'>'}Pizza{'</'}<span className='green'>li</span>{'>'}</p>

    <p>&nbsp;{'<'}<span className='green'>li</span>{'>'}Burger{'</'}<span className='green'>li</span>{'>'}</p>

    <p>&nbsp;{'<'}<span className='green'>li</span>{'>'}Es krim{'</'}<span className='green'>li</span>{'>'}</p>

    <p>{'</'}<span className='green'>ol</span>{'>'}</p> 

    <p>{'</'}<span className='green'>body</span>{'>'}</p> 

    <p>{'</'}<span className='green'>html</span>{'>'}</p>
</code>

<p>Contoh ini menunjukkan daftar terurut item yang direpresentasikan oleh tag "ol", dengan setiap item direpresentasikan oleh tag "li". Angka untuk daftar dihasilkan secara otomatis oleh peramban.</p>

<p>5. Daftar tidak terurut item:</p>

<code>
  <p>{'<'}!<span className='blue'>DOCTYPE</span> <span className='blue1'>html</span>{'>'}</p>
  <p>{'<'}<span className='green'>html</span>{'>'}</p>
  <p>{'<'}<span className='green'>head</span>{'>'}</p>
  <p>&nbsp;{'<'}<span className='green'>title</span>{'>'}Halaman Web Saya{'</'}<span className='green'>title</span>{'>'}</p>
  <p>{'</'}<span className='green'>head</span>{'>'}</p>
  <p>{'<'}<span className='green'>body</span>{'>'}</p>
  <p>&nbsp;{'<'}<span className='green'>h1</span>{'>'}Selamat datang di Halaman Web Saya{'</'}<span className='green'>h1</span>{'>'}</p> 
  <p>&nbsp;{'<'}<span className='green'>h2</span>{'>'}Film favorit saya:{'</'}<span className='green'>h2</span>{'>'}</p> 
  <p>{'<'}<span className='green'>ul</span>{'>'}</p>
  <p>&nbsp;{'<'}<span className='green'>li</span>{'>'}The Shawshank Redemption{'</'}<span className='green'>li</span>{'>'}</p>
  <p>&nbsp;{'<'}<span className='green'>li</span>{'>'}The Godfather{'</'}<span className='green'>li</span>{'>'}</p>
  <p>&nbsp;{'<'}<span className='green'>li</span>{'>'}The Dark Knight{'</'}<span className='green'>li</span>{'>'}</p>
  <p>{'</'}<span className='green'>ul</span>{'>'}</p> 
  <p>{'</'}<span className='green'>body</span>{'>'}</p>
  <p>{'</'}<span className='green'>html</span>{'>'}</p> 
</code>

<p>Contoh ini menunjukkan daftar tidak terurut item yang direpresentasikan oleh tag "ul", dengan setiap item direpresentasikan oleh tag "li". Item daftar ditampilkan dengan poin bullet secara default.</p> 

<p>Untuk meningkatkan pemahaman mereka tentang HTML, siswa dapat diarahkan ke sumber daya tambahan seperti dokumentasi di <b>MDN Web Docs</b> atau <b>W3Schools</b>.</p> 

<p>Untuk menambahkan tautan ke MDN Web Docs di situs web Anda, gunakan kode HTML berikut:</p> 

<p><a href="https://developer.mozilla.org/en-US/docs/Web/HTML" target='_blank'> <b> &#x1F44D; MDN Web Docs</b></a></p> 

<p>Untuk menambahkan tautan ke W3Schools di situs web Anda, gunakan kode HTML berikut:</p>  

<p><a href="https://www.w3schools.com/html/" target='_blank' > <b>&#x1F44D; W3Schools</b></a></p>

<p>Baik MDN Web Docs maupun W3Schools menyediakan dokumentasi komprehensif dan detail tentang HTML dan teknologi terkait, serta tutorial interaktif dan contoh. Siswa dapat menggunakan sumber daya ini untuk memperdalam pengetahuan mereka tentang HTML dan meningkatkan keterampilan pengembangan web mereka.</p>

  <b><p>* Teks ditulis dengan bantuan penerjemah. Jika Anda menemukan kesalahan, harap beri tahu kami *</p></b>
  
  <div className='ads-container'>  
  {/*  реклама  */}
</div>  
    </div>
  )
}

export default IdHtml_1;