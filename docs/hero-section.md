# Hero Section - Catatan Komponen

## Deskripsi
Hero Section adalah bagian pertama yang dilihat pengunjung di halaman beranda.

## Elemen yang Bisa Diedit Admin

| Field | Tipe | Deskripsi | Contoh Default |
|-------|------|-----------|----------------|
| `subtitle` | Text | Label kecil di atas judul | "Sekolah Islam Terpadu" |
| `title` | Text | Judul utama (heading) | "Membentuk Generasi Qur'ani dan Berakhlak Mulia" |
| `description` | Text | Paragraf deskripsi | "MI Miftahul Falah mengintegrasikan..." |
| `cta_primary_text` | Text | Tombol utama | "Daftar Sekarang" |
| `cta_primary_link` | URL | Link tombol utama | "/ppdb" |
| `cta_secondary_text` | Text | Tombol sekunder | "Pelajari Lebih Lanjut" |
| `cta_secondary_link` | URL | Link tombol sekunder | "/profil" |
| `image` | Image | Foto utama hero | Upload dari admin |
| `image_secondary` | Image | Foto kedua (opsional) | Upload dari admin |
| `is_active` | Boolean | Status aktif | true |

## Database Table: `hero_sections`

```sql
-- Sudah ada di 001_initial_schema.sql
CREATE TABLE hero_sections (
    id UUID PRIMARY KEY,
    title VARCHAR(150),
    slogan VARCHAR(255),       -- subtitle
    image TEXT,                -- image URL
    cta_text VARCHAR(100),     -- primary CTA text
    cta_link VARCHAR(255),     -- primary CTA link
    display_order INTEGER,
    is_active BOOLEAN,
    created_at TIMESTAMP
);
```

## Komponen File
- `src/components/HeroSection.tsx` - React component
- `src/styles/hero.css` - CSS styles

## Cara Mengubah Konten
1. Login ke Admin Dashboard
2. Pilih menu "Beranda" > "Hero Section"
3. Edit teks atau upload foto baru
4. Klik "Simpan"
