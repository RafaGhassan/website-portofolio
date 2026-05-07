# Rafa Ghassan Rasyidi — Personal Website

Personal portfolio + blog untuk **Rafa Ghassan Rasyidi**, AI Trainer & RLHF Specialist.

Static site, tanpa backend, tanpa build step. Tinggal upload, jalan.

---

## 📁 Struktur Folder

```
website-portofolio/
├── index.html                    ← Halaman utama (homepage)
├── assets/
│   ├── styles.css                ← Semua CSS (warna, font, layout)
│   ├── main.js                   ← JavaScript (animasi, navigasi)
│   ├── favicon.svg               ← Icon di tab browser
│   ├── og-image.svg              ← Gambar share di sosmed (source)
│   ├── og-preview.html           ← Preview untuk konversi ke PNG
│   ├── profile.jpg               ← ⚠️ Anda perlu upload sendiri
│   └── Rafa_Ghassan_Rasyidi_CV.pdf  ← ⚠️ Anda perlu upload sendiri
├── blog/
│   ├── index.html                ← Halaman daftar artikel blog
│   └── posts/
│       ├── _post-template.html   ← Template untuk artikel baru
│       ├── auditing-chain-of-thought.html
│       └── why-indonesian-ai-needs-native-trainers.html
└── README.md
```

**Yang penting Anda tahu:**
- Mau **ganti warna / font**? Edit `assets/styles.css` (bagian paling atas, `:root { ... }`).
- Mau **edit konten homepage**? Edit `index.html`.
- Mau **tambah artikel blog**? Lihat panduan di bawah.

---

## 🧪 Cara Buka di Komputer Sendiri

**Cara paling mudah:** klik dua kali file `index.html` — akan langsung terbuka di browser.

**Atau pakai server lokal** (lebih akurat, simulasi seperti di internet):

```bash
cd website-portofolio
python3 -m http.server 8000
```

Lalu buka `http://localhost:8000` di browser.

---

## 🚀 Cara Deploy ke Internet (Gratis)

Ada 3 pilihan, pilih salah satu:

### Pilihan 1 — Vercel (Paling Mudah, Recommended)

1. Buka [vercel.com](https://vercel.com) → **Sign up** pakai GitHub atau email.
2. Klik tombol **Add New → Project**.
3. Drag-and-drop folder `website-portofolio` ke halaman itu.
4. Tunggu ~30 detik. Selesai.
5. Anda akan dapat URL seperti `https://website-portofolio-xxx.vercel.app` — sudah live!

> **Bonus:** kalau Anda push folder ini ke GitHub, Vercel bisa otomatis re-deploy setiap kali Anda update file. Sangat cocok kalau Anda sering tambah artikel blog baru.

### Pilihan 2 — Netlify

1. Buka [netlify.com/drop](https://app.netlify.com/drop).
2. Drag folder `website-portofolio` ke dalam kotak besar di halaman itu.
3. Selesai. Dapat URL seperti `https://random-name-xxx.netlify.app`.

### Pilihan 3 — GitHub Pages

1. Buat repository GitHub baru, upload semua file ini.
2. Repository → **Settings** → **Pages** → Source: pilih branch `main`, folder `/ (root)` → **Save**.
3. Tunggu ~1 menit. URL akan jadi `https://<username>.github.io/<repo-name>/`.

---

## 🌐 Custom Domain (Opsional)

Kalau ingin pakai domain sendiri (contoh: `rafaghassan.com`):

1. **Beli domain** di Niagahoster, Namecheap, atau Cloudflare Registrar (~Rp 150–200rb/tahun).
2. Di Vercel/Netlify: buka **Project Settings → Domains → Add Domain** → masukkan domain Anda.
3. Ikuti instruksi DNS yang diberikan (copy-paste 2–3 record di dashboard registrar Anda).
4. Tunggu ~5–60 menit. SSL/HTTPS otomatis aktif.

---

## ✍️ Cara Menambah Artikel Blog Baru

Cuma 3 langkah:

### 1. Buat file artikel baru

Di folder `blog/posts/`, **copy** file `_post-template.html`, beri nama baru pakai kebab-case (huruf kecil, dipisah strip):

```
blog/posts/judul-artikel-baru-saya.html
```

### 2. Edit isinya

Buka file tersebut, ganti bagian-bagian dalam `[KURUNG SIKU]`:

| Placeholder | Diganti dengan |
|---|---|
| `[TITLE]` | Judul artikel (di `<title>` dan `<h1>`) |
| `[DESCRIPTION]` | Ringkasan singkat untuk SEO (di meta description) |
| `[DATE]` | Tanggal publish (contoh: "May 2026") |
| `[READ TIME]` | Estimasi baca (contoh: "5 min read") |
| `[CATEGORY]` | Kategori (contoh: "RLHF", "Indonesian AI") |
| `[SUBTITLE / EXCERPT]` | 1–2 kalimat pengantar |
| Konten dalam `<div class="prose">` | Tulisan artikel Anda |

Tag HTML yang bisa dipakai di body artikel sudah dijelaskan di komentar template.

### 3. Tambahkan link di halaman blog

Buka `blog/index.html`, cari bagian `<!-- [POST 1] -->`, lalu **copy** salah satu `<article class="blog-card">` blok. Edit:
- Tanggal, read time, kategori
- Judul (di `<h2>`)
- Excerpt (paragraf di bawah judul)
- Link `href="posts/nama-file-anda.html"`

Selesai. Save semua, deploy ulang (di Vercel/Netlify cukup re-upload folder).

---

## 🎨 Cara Ganti Warna / Font

Buka `assets/styles.css`. Di bagian paling atas ada blok `:root { ... }` — di situ semua design tokens diatur.

**Contoh ganti warna utama** (text dan tombol):
```css
:root {
  --color-text: #1a1a1a;        /* ganti ke warna lain */
  --color-heading: #0a0a0a;     /* ganti ke warna lain */
}
```

**Contoh ganti font:**
```css
:root {
  --font-display: "Playfair Display", serif;   /* heading */
  --font-sans: "Open Sans", sans-serif;        /* body */
}
```
> Jangan lupa juga update URL Google Fonts di setiap file HTML kalau ganti font.

---

---

## 📸 File yang Perlu Anda Siapkan

Ada 2 file yang website ini referensikan tapi belum ada — Anda tinggal upload ke folder `assets/`:

### 1. Foto Profil — `assets/profile.jpg`

- **Ukuran ideal:** kotak (1:1), minimum 800×800 pixel
- **Format:** JPG (preferred) atau PNG
- **Tips:** crop ketat sampai bahu, background polos, pencahayaan natural
- Selama file belum ada, monogram **"RG"** akan tampil otomatis sebagai placeholder — website tetap terlihat rapi

### 2. CV PDF — `assets/Rafa_Ghassan_Rasyidi_CV.pdf`

- Export CV Anda ke PDF (dari Word: File → Export → PDF, atau dari Google Docs: File → Download → PDF)
- Beri nama exactly **`Rafa_Ghassan_Rasyidi_CV.pdf`** dan letakkan di folder `assets/`
- Tombol "Download CV" di Hero section akan langsung berfungsi

---

## 💬 Mengganti Testimonials (PENTING — sebelum publish!)

Section "Testimonials" di homepage sekarang berisi **placeholder copy** yang menggambarkan jenis feedback yang biasanya muncul. **Ini bukan testimonial asli** — Anda harus ganti semuanya sebelum website ini di-share ke publik.

Buka `index.html`, cari komentar `<!-- [TESTIMONIAL 1 — REPLACE WITH REAL] -->`. Untuk setiap card, ganti:

| Field | Diganti dengan |
|---|---|
| `<blockquote class="testimonial-quote">...` | Quote asli dari klien/kolega |
| `<div class="testimonial-avatar">JK</div>` | 2 inisial nama mereka (contoh: "Andi Kusuma" → `AK`) |
| `[Reviewer Name]` di `.testimonial-name` | Nama lengkap |
| `[AI Quality Lead, Company]` di `.testimonial-role` | Jabatan, Perusahaan |

**Cara menghapus 1 card:** hapus seluruh blok `<article class="testimonial-card">` sampai `</article>`.
**Cara menambah card:** copy salah satu blok `<article>`, paste, lalu edit.

**Tidak punya testimonial?** Hapus seluruh section `<section class="testimonials">...</section>`, lalu update eyebrow di section Contact dari "06" kembali ke "05".

---

## 🖼️ Cara Generate OG Image (gambar share di LinkedIn / WhatsApp)

Versi SVG sudah saya siapkan di `assets/og-image.svg`. Untuk kompatibilitas penuh dengan LinkedIn dan WhatsApp, perlu di-convert ke PNG:

**Cara paling mudah:**

1. Buka file `assets/og-preview.html` di browser (klik dua kali).
2. Anda akan lihat preview gambar 1200×630.
3. Buka [cloudconvert.com/svg-to-png](https://cloudconvert.com/svg-to-png).
4. Upload `assets/og-image.svg`, set width 1200, download hasil PNG.
5. Save sebagai `assets/og-image.png` (nama persis).

**Atau pakai screenshot:**
- Buka `og-preview.html` di browser
- Screenshot kotak putih persis 1200×630 (pakai Snipping Tool / macOS Cmd+Shift+5)
- Save sebagai `assets/og-image.png`

**Setelah deploy:**
Setelah website Anda online (misal di Vercel), buka semua file `.html` dan ganti `https://your-site.com` di meta tags dengan URL asli Anda (contoh `https://rafaghassan.vercel.app` atau `https://rafaghassan.com`). Search & replace cukup di 5 file.

---

## 🆘 Bantuan

Kalau ada yang tidak jalan setelah edit, cara paling cepat:
1. Buka file di browser → klik kanan → **Inspect** → tab **Console**.
2. Lihat error yang muncul (biasanya nama file salah ketik atau path salah).
3. Atau hubungi kembali — saya bisa bantu debug.
