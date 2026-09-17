# Ruang Antara Studio — Website Arsitektur Butik

Website arsitektur kelas produksi yang dirancang dan dibangun khusus untuk **Ruang Antara Studio**, sebuah praktik arsitektur butik yang berbasis di Bandung Utara, Jawa Barat.

Dirancang dengan standar estetika editorial setara biro arsitektur terkemuka dunia (*Norm Architects*, *Saunders Architecture*, *Studio Mumbai*). Dibangun sepenuhnya dengan HTML5 semantik, CSS3 murni tanpa framework, dan vanilla JavaScript tanpa proses kompilasi (*zero build step*).

---

## 1. Struktur Berkas & Direktori

```
ruang-antara-studio/
├── index.html                  # Beranda: Hero slideshow 7.5s, teaser grid asimetris, esai filosofi, CTA tenang
├── studio.html                 # Studio: Biografi Dipta Wirawan (6 thn di Yogya, IAI), 3 esai filosofi, tim 3 orang
├── portofolio.html             # Portofolio: Grid masonry dengan filter kategori understated (Semua, Hunian, Komersial, Interior)
├── proyek-lembang.html         # Studi Kasus 01: Rumah Akhir Pekan Pohon Mangga 40 Tahun (Lembang)
├── proyek-roastery.html        # Studi Kasus 02: Sangrai Roastery dengan Truss Kayu Jati 1942 (Bandung)
├── proyek-cihapit.html         # Studi Kasus 03: Rumah Cihapit Lahan Sempit 6 Meter & Courtyard (Bandung)
├── layanan.html                # Layanan: 5 lingkup kerja terukur, tanpa kartu ikon generik SaaS
├── proses.html                 # Proses: Timeline 6 tahap berbasis tipografi dari mendengar tapak hingga serah terima
├── jurnal.html                 # Jurnal: 3 esai panjang tentang pohon tapak, kayu jati reklamasi, dan courtyard kota
├── kontak.html                 # Kontak: Formulir 4 kolom isian, alamat Bandung Utara, peta vektor monokrom custom
├── sitemap.xml                 # Peta situs resmi untuk indeks mesin pencari (SEO)
├── robots.txt                  # Direktif crawler perayap web
├── favicon.svg                 # Monogram arsitektur tektonik (arang + aksen tanah liat bakar)
├── assets/
│   ├── css/
│   │   └── style.css           # Sistem desain arsitektural: tipografi, ritme grid, responsif, focus state
│   ├── js/
│   │   └── main.js             # Navigasi sticky, transisi halus hero slider, filter karya, penanganan formulir
│   └── img/
│       ├── drawings/           # Gambar kerja teknik vektor SVG arsitektur
│       │   ├── lembang-section.svg       # Potongan A-A' konservasi akar & tritisan 2.800 mm
│       │   ├── roastery-truss.svg        # Aksonometri struktur kuda-kuda jati reklamasi 1942
│       │   └── cihapit-infill-section.svg# Potongan memanjang efek cerobong ventilasi lahan 6m
│       └── studio/
│           ├── dipta-portrait.svg        # Potret bersahaja Dipta Wirawan di meja gambar kayu jati
│           └── bandung-map.svg           # Kartografi vektor Bandung Utara & koordinat studio
└── README.md                   # Dokumentasi teknis & panduan kustomisasi ulang (reskinning)
```

---

## 2. Sistem Desain Visual & Anti-AI

- **Tipografi**:
  - *Headline & Judul*: **Newsreader** (display serif berkarakter editorial dengan optical size)
  - *Teks Tubuh & Menu*: **Plus Jakarta Sans** (sans-serif geometris humanis karya desainer Indonesia yang hangat dan bersih)
  - *Notasi Teknis & Keterangan*: **JetBrains Mono** (skala gambar, dimensi tapak, elevasi)
  - *Bebas dari Font Pasaran AI*: Tanpa Playfair Display, tanpa Poppins, tanpa Roboto.
- **Palet Warna Tektonik**:
  - *Kertas Gading*: `#F7F5F0` (latar belakang hangat, tekstur kertas unbleached)
  - *Batu Kapur*: `#EFECE4` (kontras permukaan bidang)
  - *Jelaga Arang*: `#191817` (warna teks utama tajam tanpa silau hitam digital)
  - *Abu-abu Hangat*: `#5E5B54` (teks pendukung dan keterangan gambar)
  - *Satu-satunya Warna Aksen*: `#A64B2A` (warna tanah liat bata merah bakar Garut)
  - *Nol Gradien*: Tanpa gradien ungu-biru SaaS, tanpa neon, tanpa efek glossy.
- **Detail Bentuk & Tombol**:
  - *Sudut Tegas*: `border-radius: 0px` (atau mikro 2px), konsisten dengan garis ketegasan arsitektur.
  - *Nol Drop-Shadow*: Tanpa bayangan mengambang lembut khas template CMS.
  - *Tautan Teks Understated*: Menggunakan garis bawah halus dan panah tipis (`→`) saat disentuh kursor.

---

## 3. Panduan Reskinning untuk Klien Studio Lain

Template ini telah menggunakan konten nyata Ruang Antara Studio secara konsisten (tanpa *Lorem Ipsum*). Jika ingin digunakan ulang untuk klien arsitektur butik lain:

1. **Nama Studio & Kota**:
   - Cari dan ganti (*find & replace*) `Ruang Antara` dengan nama biro arsitek baru.
   - Perbarui alamat studio, koordinat garis lintang/bujur, serta surel resmi di `kontak.html` dan footer seluruh halaman.
2. **Warna Aksen Material**:
   - Pada `assets/css/style.css`, ubah variabel `--accent: #A64B2A;` sesuai material khas klien baru (misal: baja hitam `#282828`, tembaga tua `#4B6B5D`, atau batu granit `#6E6C68`).
3. **Penggantian Foto**:
   - Ganti tautan `src` pada berkas HTML dengan foto dokumentasi proyek klien beresolusi tinggi.
   - Proporsi yang disarankan:
     - Hero: 16:9 atau 21:9 (minimal lebar 2.000 piksel).
     - Teaser Asimetris: 16:10 untuk foto utama melebar, 4:5 atau 3:2 untuk foto vertikal bertumpuk.
4. **Gambar Kerja Arsitektur**:
   - Ganti berkas SVG di folder `assets/img/drawings/` dengan hasil ekspor CAD/vektor potongan dan denah proyek milik klien terkait.
5. **Penghubung Formulir Kontak**:
   - Pada `kontak.html`, sambungkan tag `<form id="studioInquiryForm">` ke layanan pemroses surel statis seperti Formspree, Basin, atau Netlify Forms dengan menambahkan atribut `action="URL_ENDPOINT"`.

---

## 4. Opsi Deployment Siap Pakai (Zero-Build)

Karena website ini dibangun murni menggunakan HTML5, CSS3, dan JS standar web modern, tidak diperlukan `npm install` ataupun proses `npm run build`:

### Opsi A: Netlify / Vercel
1. Buka dashboard Netlify atau Vercel.
2. Seret (*drag and drop*) seluruh folder `ruang-antara-studio` ke area upload.
3. Situs langsung aktif dalam hitungan detik dengan HTTPS otomatis.

### Opsi B: GitHub Pages
1. Unggah folder ke repositori GitHub.
2. Buka menu **Settings** > **Pages**.
3. Pilih cabang `main` direktori `/ (root)`.

### Opsi C: Hosting Tradisional (cPanel / Apache / Nginx)
1. Unggah seluruh isi folder langsung ke direktori `public_html` melalui File Manager atau FTP.
2. Langsung dapat diakses tanpa perlu konfigurasi server tambahan.
