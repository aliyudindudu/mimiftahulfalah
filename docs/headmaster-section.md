# Headmaster Section (Sambutan Kepala Sekolah) - Catatan Komponen

## Deskripsi
Section untuk menampilkan sambutan/pesan dari Kepala Sekolah MI Miftahul Falah.

## Elemen yang Bisa Diedit Admin

| Field | Tipe | Deskripsi | Contoh Default |
|-------|------|-----------|----------------|
| `title` | Text | Judul section | "Sambutan Kepala Sekolah" |
| `name` | Text | Nama Kepala Sekolah | "Dahri S.pd.i" |
| `greeting` | Text | Salam pembuka | "Assalamualaikum Wr.Wb." |
| `message` | Text (Long) | Isi pesan sambutan | "Selamat datang di website resmi..." |
| `photo` | Image | Foto Kepala Sekolah | Upload dari admin |
| `cta_primary_text` | Text | Tombol utama | "Profil Lengkap" |
| `cta_primary_link` | URL | Link tombol utama | "/profil" |
| `cta_secondary_text` | Text | Tombol sekunder | "Struktur Organisasi" |
| `cta_secondary_link` | URL | Link tombol sekunder | "/struktur-organisasi" |
| `is_active` | Boolean | Status aktif | true |

## Database Table: `headmaster_messages`

```sql
-- Sudah ada di 001_initial_schema.sql
CREATE TABLE headmaster_messages (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(100) NOT NULL,
    position VARCHAR(100) DEFAULT 'Kepala Sekolah',
    photo TEXT,  -- URL foto
    greeting VARCHAR(100) DEFAULT 'Assalamualaikum Wr.Wb.',
    message TEXT NOT NULL,
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

## Komponen File
- `src/components/HeadmasterSection.tsx` - React component
- `src/styles/headmaster.css` - CSS styles

## Cara Mengubah Konten
1. Login ke Admin Dashboard
2. Pilih menu "Beranda" > "Sambutan Kepala Sekolah"
3. Edit nama, pesan sambutan, atau upload foto baru
4. Klik "Simpan"
