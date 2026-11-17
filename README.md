# Ridho Portfolio

Portfolio satu halaman menggunakan React, Vite, Tailwind CSS v4, Framer Motion, dan Lucide React.

## Menjalankan project

```bash
npm install
npm run dev
```

## Build production

```bash
npm run build
npm run preview
```

## Mengganti aset

- Letakkan avatar/karakter pixel art milikmu di `public/avatar.png`.
- Letakkan CV PDF di `public/cv.pdf`.
- Letakkan gambar project di `public/projects/` sesuai nama file pada `src/data/projects.js`.
- Ganti URL Github, email, dan sosial media di `src/data/portfolio.js` serta `src/data/socials.js`.

Jika gambar belum tersedia, komponen Home menampilkan fallback inisial. Gambar project juga memiliki tampilan placeholder jika file gambarnya belum ada.

## Struktur

- `src/components`: komponen reusable.
- `src/sections`: empat bagian utama website.
- `src/data`: konten portfolio dalam JavaScript.
- `src/hooks`: custom hooks.
- `src/assets`: aset yang di-import melalui kode.
- `public`: file statis seperti avatar, CV, dan gambar project.