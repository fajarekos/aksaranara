<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

<!-- BEGIN:aksaranara-agent-actions -->
# Actions — acuan penulisan untuk agent

Gunakan format **When → Action → Done** agar agent tahu kapan aktif, apa yang dilakukan, dan kapan selesai.

---

## 1. Pola dasar (template)

### A. Satu kondisi, satu aksi

```markdown
**When** user meminta ubah UI halaman utama  
**Action** baca `src/app/page.tsx` dan komponen terkait sebelum mengedit  
**Done** layout tetap full-width, background putih, CTA biru (`blue-600` / `blue-700`)
```

### B. Langkah berurutan (task kompleks)

```markdown
**When** menambah section baru dengan animasi scroll  

1. Tambah variant di `src/lib/animations.ts` jika belum ada
2. Buat komponen client di `src/components/` dengan `"use client"`
3. Import ke `page.tsx` (server component) tanpa memindahkan logic berat ke page
4. Jalankan `npm run lint` sebelum selesai

**Avoid** menaruh `framer-motion` langsung di `layout.tsx` tanpa alasan
```

### C. Larangan eksplisit

```markdown
**When** user tidak menyebut "commit" atau "push"  

**Must not** menjalankan `git commit`, `git push`, atau `--force`  
**May** menyarankan commit setelah user review
```

### D. Checklist sebelum selesai

```markdown
**When** selesai mengubah UI  

- [ ] Tidak ada `max-w-*` yang membatasi section portfolio tanpa diminta
- [ ] Tombol utama memakai `bg-blue-600 hover:bg-blue-700`
- [ ] Tidak menambah dark mode kecuali diminta
- [ ] Lint lulus (`npm run lint`)
```

---

## 2. Kata kerja yang disarankan

| Kata | Arti untuk agent |
|------|------------------|
| **Must** | Wajib; jangan dilanggar |
| **Should** | Default; boleh diabaikan jika user minta lain |
| **Avoid** | Jangan lakukan kecuali user eksplisit minta |
| **When** | Trigger — kapan rule ini berlaku |
| **Done** | Definisi selesai / acceptance criteria |

---

## 3. Contoh actions untuk proyek ini (aksaranara)

### Design & layout

**When** mengedit layout, halaman, atau komponen portfolio  

- **Must** gunakan lebar penuh (`w-full`); hindari `max-w-3xl` / `max-w-7xl` pada section utama kecuali user minta
- **Must** background default putih (`bg-white`, `text-gray-900`)
- **Should** tombol utama: `bg-blue-600 hover:bg-blue-700 text-white`
- **Should** tombol sekunder: outline biru (`border-blue-200 text-blue-600 hover:bg-blue-50`)
- **Avoid** menambah `dark:` variant tanpa permintaan user

### Animasi (Framer Motion)

**When** menambah atau mengubah animasi  

1. Reuse variant dari `src/lib/animations.ts` (`fadeUp`, `slideFromRight`, `staggerContainer`, dll.)
2. Wrapper motion lewat `src/components/ui/MotionDiv.tsx` jika perlu
3. Komponen dengan hook/animasi: file terpisah + `"use client"`

**Done** animasi scroll memakai `whileInView` + `viewport={{ once: true }}` kecuali user minta repeat

### Portfolio content

**When** menyentuh kartu produk / portfolio  

- Produk yang valid: **Lawble**, **Privy**, **Privy Internal Tools** (dashboard internal)
- **Should** tampil 3 kartu dalam satu baris (`flex flex-row`, `flex-1` per kartu) kecuali user minta layout lain

### Git

**When** user tidak meminta commit  

- **Must not** `git commit`, `git push`, amend, atau force push
- **When** user minta commit: ikuti pesan commit singkat (why > what), tanpa skip hooks

### Next.js (tambahan di atas rule Next.js di atas)

**When** menulis route, layout, atau data fetching  

- **Must** baca panduan di `node_modules/next/dist/docs/` untuk API versi ini
- **Should** `page.tsx` tetap server component; client hanya untuk interaksi/animasi
- **Avoid** pola Next.js lama (Pages Router, `getServerSideProps`) tanpa diminta

---

## 4. Contoh buruk vs baik

### Buruk (terlalu vague)

```markdown
Buat UI yang bagus dan modern.
```

### Baik (terukur)

```markdown
**When** user minta hero section baru  

**Action**
- Section `w-full bg-white px-6 lg:px-12 py-24`
- Heading `text-4xl font-semibold text-gray-900`
- Satu CTA primary `rounded-full bg-blue-600 px-6 py-3 text-white hover:bg-blue-700`

**Done** section responsif di mobile tanpa horizontal scroll
```

### Buruk (tanpa trigger)

```markdown
Selalu pakai Tailwind.
```

### Baik (dengan scope)

```markdown
**When** styling komponen React di `src/**/*.tsx`  

**Should** gunakan Tailwind utility classes; hindari CSS file baru kecuali global token di `globals.css`
```

---

## 5. Menambah action baru

Salin template di bawah, isi, lalu tempel di section **Contoh actions untuk proyek ini**:

```markdown
### [Nama fitur / area]

**When** [kondisi / permintaan user]  

**Action**
1. [langkah pertama]
2. [langkah kedua]

**Must not** [larangan]  
**Done** [kriteria selesai yang bisa dicek]
```

<!-- END:aksaranara-agent-actions -->
