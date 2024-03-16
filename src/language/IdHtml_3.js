import React from 'react';

function IdHtml_3() {
  return (
    <div>
      <div className='ad-container'>  
          {/*  реклама  */}
        </div>

        <h1>Mengerti Meta Tag dalam HTML - Panduan untuk Pemula</h1>

<p>1. <b>charset:</b> Atribut charset menentukan encoding karakter untuk dokumen HTML. Penting untuk memastikan bahwa encoding diatur dengan benar untuk memastikan karakter khusus ditampilkan dengan benar.</p>

<p>Contoh:</p>

<code><p>{'<'}<span className='green'>meta</span> <span className='blue'>charset</span>=<span className='blue1'>"UTF-8"</span>{'>'}</p></code>

<p>2. <b>name:</b> Atribut name digunakan untuk mendefinisikan jenis metadata yang diberikan, seperti kata kunci, deskripsi, atau penulis.</p>

<p>Contoh:</p>

<code><p>{'<'}<span className='green'>meta</span> <span className='blue'>name</span>=<span className='blue1'>"description"</span> <span className='blue'>content</span>=<span className='blue1'>"Ini adalah deskripsi dari halaman web saya."</span>{'>'}</p></code>

<p>3. <b>content:</b> Atribut content digunakan untuk menentukan nilai dari metadata yang diberikan.</p>

<p>Contoh:</p>

<code><p>{'<'}<span className='green'>meta</span> <span className='blue'>name</span>=<span className='blue1'>"keywords"</span> <span className='blue'>content</span>=<span className='blue1'>"HTML, CSS, JavaScript"</span>{'>'}</p></code>

<p>4. <b>http-equiv:</b> Atribut http-equiv digunakan untuk mendefinisikan header HTTP untuk dokumen HTML, seperti refresh atau content-type</p>

<p>Contoh:</p>

<code><p>{'<'}<span className='green'>meta</span> <span className='blue'>http-equiv</span>=<span className='blue1'>"refresh"</span> <span className='blue'>content</span>=<span className='blue1'>"5"</span>{'>'}</p></code>

<p>5. <b>viewport:</b> Atribut viewport digunakan untuk mengontrol tata letak dan penskalaan halaman web pada perangkat yang berbeda, seperti ponsel pintar atau tablet.</p>

<p>Contoh:</p>

<code><p>{'<'}<span className='green'>meta</span> <span className='blue'>name</span>=<span className='blue1'>"viewport"</span> <span className='blue'>content</span>=<span className='blue1'>"width=device-width, initial-scale=1.0"</span>{'>'}</p></code>

<h2>Cara Menggunakan Warna dalam HTML: Panduan untuk Pemula.</h2>

<p>Warna dalam HTML dapat ditentukan menggunakan berbagai metode, termasuk nama warna, nilai heksadesimal, nilai RGB, dan nilai HSL.</p>

<b>1. Nama Warna:</b>

<p>HTML menyediakan serangkaian nama warna yang telah ditentukan sebelumnya yang dapat digunakan untuk menentukan warna elemen. Beberapa contoh nama warna termasuk "merah", "hijau", "biru", "kuning", "ungu", dan "hitam".</p>

<b>2. Nilai Heksadesimal:</b>

<p>Nilai warna heksadesimal adalah kode enam digit yang mewakili sebuah warna. Dua digit pertama mewakili jumlah merah dalam warna, dua digit berikutnya mewakili jumlah hijau dalam warna, dan dua digit terakhir mewakili jumlah biru dalam warna. Sebagai contoh, #FF0000 mewakili merah murni, #00FF00 mewakili hijau murni, dan #0000FF mewakili biru murni.</p>

<b>3. Nilai RGB:</b>

<p>Nilai warna RGB adalah set tiga angka yang mewakili jumlah merah, hijau, dan biru dalam sebuah warna. Setiap nilai berkisar dari 0 hingga 255. Sebagai contoh, rgb(255, 0, 0) mewakili merah murni, rgb(0, 255, 0) mewakili hijau murni, dan rgb(0, 0, 255) mewakili biru murni.</p>

<b>4. Nilai HSL:</b>

<p>Nilai warna HSL adalah set tiga angka yang mewakili hue, saturasi, dan kecerahan sebuah warna. Hue adalah derajat pada lingkaran warna (dari 0 hingga 360), saturasi adalah nilai persentase (dari 0% hingga 100%), dan kecerahan juga merupakan nilai persentase (dari 0% hingga 100%). Sebagai contoh, hsl(0, 100%, 50%) mewakili merah murni, hsl(120, 100%, 50%) mewakili hijau murni, dan hsl(240, 100%, 50%) mewakili biru murni.</p>

<h2>Dasar CSS untuk Pemula: Pengenalan terhadap Cascading Style Sheets</h2>

<p>CSS singkatan dari Cascading Style Sheets dan merupakan bahasa yang digunakan untuk mengatur gaya dokumen HTML. CSS memungkinkan Anda untuk mengubah warna, font, tata letak, dan aspek lain dari halaman web Anda. Ini bekerja dengan memilih elemen HTML dan menerapkan gaya pada mereka.</p>

<p>Gaya CSS dibuat menggunakan selector, properti, dan nilai. Selector menargetkan elemen HTML tertentu dan dapat digunakan untuk menerapkan gaya pada beberapa elemen sekaligus. Properti mendefinisikan gaya apa yang ingin Anda terapkan dan dapat mencakup hal-hal seperti ukuran font, warna, dan padding. Nilai menentukan pengaturan khusus untuk properti tersebut, seperti warna atau ukuran tertentu.</p>

<p>Untuk menghubungkan file CSS ke dokumen HTML, Anda dapat menggunakan tag {'<link>'} dalam bagian {'<head>'} dokumen HTML Anda.</p>

<p>Ini adalah contoh bagaimana menghubungkan file CSS bernama "styles.css" ke dokumen HTML Anda:</p>

<code>
  <p>{'<'}!<span className='blue'>DOCTYPE</span> <span className='blue1'>html</span>{'>'}</p>
  <p>{'<'}<span className='green'>html</span>{'>'}</p> 
  <p>{'<'}<span className='green'>head</span>{'>'}</p>
  <p>&nbsp;{'<'}<span className='green'>link</span> <span className='blue'>rel</span>=<span className='blue1'>"stylesheet"</span> <span className='blue'>type</span>=<span className='blue1'>"text/css"</span> <span className='blue'>href</span>=<span className='blue1'>"styles.css"</span>{'>'}</p>
  <p>{'</'}<span className='green'>head</span>{'>'}</p>
  <p>{'<'}<span className='green'>body</span>{'>'}</p>
  <p>&nbsp;{'<!-- konten HTML Anda di sini -->'}</p>
  <p>{'</'}<span className='green'>body</span>{'>'}</p>
  <p>{'</'}<span className='green'>html</span>{'>'}</p>
</code>

<p>Ini adalah contoh kode CSS:</p>

<code>
  <p>{'h1 {'}</p>
  <p><span className='blue'>color</span>: <span className='blue1'>merah</span>;</p>
  <p><span className='blue'>font-size</span>: <span className='blue1'>36px</span>; </p>
  <p><span className='blue'>text-align</span>: <span className='blue1'>center</span>; </p>
  <p>{'}'}</p>
  <p>{'p {'}</p>
  <p><span className='blue'>color</span>: <span className='blue1'>biru</span>; </p>
  <p> <span className='blue'>font-size</span>: <span className='blue1'>16px</span>;</p>
  <p><span className='blue'>line-height</span>: <span className='blue1'>1.5</span>;</p>
  <p>{'}'}</p>
</code>

<p>Pada kode ini, kami memiliki dua selector <b>(h1 dan p)</b> dan beberapa properti dan nilai yang diterapkan pada masing-masing. Selector <b>h1</b> menerapkan warna merah, ukuran font 36px, dan penyesuaian teks ke tengah untuk semua elemen <b>h1</b> pada halaman. Selector <b>p</b> menerapkan warna biru, ukuran font 16px, dan tinggi baris 1.5 untuk semua elemen <b>p</b> pada halaman.</p>

<p>CSS dapat diterapkan pada dokumen HTML dengan beberapa cara, termasuk gaya dalam baris, tertanam, dan gaya eksternal. Gaya dalam baris diterapkan langsung pada elemen HTML menggunakan atribut <b>style</b>. Gaya tertanam ditempatkan dalam bagian <b>head</b> dokumen HTML menggunakan tag gaya. Gaya eksternal disimpan dalam file CSS terpisah dan dihubungkan ke dokumen HTML menggunakan tag <b>link</b>.</p>
    
<b><p>* Teks ditulis dengan bantuan penerjemah. Jika Anda menemukan kesalahan, harap beri tahu kami *</p></b>
  
  <div className='ads-container'>  
  {/*  реклама  */}
  </div>
</div>
  )
}

export default IdHtml_3;