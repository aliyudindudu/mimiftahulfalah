# About Section (Tentang Sekolah) - Catatan Komponen

## Deskripsi
Section untuk menampilkan informasi tentang sekolah. Section ini terdiri dari 3 bagian:
1. **Sejarah Singkat Sekolah** (bagian ini)
2. Visi & Misi (akan dibuat)
3. Fasilitas / Info lainnya (akan dibuat)

## Database Schema

### Tabel: `about_sections`
Menyimpan konten untuk setiap bagian dalam section Tentang.

```sql
CREATE TABLE about_sections (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    section_key VARCHAR(50) NOT NULL UNIQUE,  -- 'history', 'vision_mission', 'facilities'
    title VARCHAR(255) NOT NULL,
    content TEXT NOT NULL,                     -- Konten utama (support markdown/html)
    image_url TEXT,                            -- Gambar pendukung
    image_alt VARCHAR(255),                    -- Alt text gambar
    display_order INT DEFAULT 0,
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Seed data untuk bagian pertama
INSERT INTO about_sections (section_key, title, content, image_url, display_order) VALUES
('history', 'Sejarah Singkat Sekolah', 
'Madrasah Ibtidaiyah (MI) Miftahul Falah Cikaramas berlokasi di samping jalan raya Desa Cikaramas, Kecamatan Tanjungmedar, Kabupaten Sumedang, dengan letak strategis dan mudah diakses masyarakat. Seiring perkembangan kebutuhan pendidikan, madrasah ini memperoleh legalitas sebagai lembaga pendidikan formal swasta di bawah binaan Persyarikatan Muhammadiyah.

MI Miftahul Falah Cikaramas resmi menyelenggarakan pendidikan dasar setelah mendapatkan izin operasional dari Kementerian Agama Republik Indonesia Nomor 521/SKP-IO/2018 pada 19 Desember 2018. Sejak itu, madrasah berkomitmen memberikan layanan pendidikan berkualitas yang berlandaskan nilai-nilai keislaman.

Pada tahun 2023, MI Miftahul Falah Cikaramas berhasil meraih akreditasi B dengan nilai 88 yang berlaku hingga 31 Desember 2028, sebagai bukti dedikasi dalam meningkatkan mutu dan daya saing pendidikan.',
'/about-classroom.jpg', 1);
```

## Elemen yang Bisa Diedit Admin

### Section Header
| Field | Tipe | Deskripsi |
|-------|------|-----------|
| `section_title` | Text | "Tentang MI Miftahul Falah" |
| `section_description` | Text | Deskripsi di bawah judul |

### Per Subsection (dari tabel about_sections)
| Field | Tipe | Deskripsi |
|-------|------|-----------|
| `title` | Text | Judul subsection (e.g. "Sejarah Singkat Sekolah") |
| `content` | Rich Text | Isi konten (paragraf, bisa multiple) |
| `image_url` | Image | Gambar pendukung |
| `is_active` | Toggle | Tampilkan/sembunyikan |
| `display_order` | Number | Urutan tampil |

## Komponen Files
- `src/components/AboutSection.tsx` - Section utama
- `src/styles/about.css` - CSS styles
