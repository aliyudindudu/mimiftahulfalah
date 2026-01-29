# News Section (Berita & Artikel) - Catatan Komponen

## Deskripsi
Section untuk menampilkan berita dan artikel terbaru. Admin dapat memilih berita mana yang ditampilkan di landing page.

## Database Schema

### Tabel: `post_categories`
Kategori untuk berita/artikel.

```sql
CREATE TABLE post_categories (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(50) NOT NULL UNIQUE,
    slug VARCHAR(50) NOT NULL UNIQUE,
    color VARCHAR(20) DEFAULT '#16a34a',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Contoh data:
INSERT INTO post_categories (name, slug, color) VALUES
('Ekstrakurikuler', 'ekstrakurikuler', '#16a34a'),
('Perlombaan', 'perlombaan', '#0ea5e9'),
('Akademik', 'akademik', '#8b5cf6'),
('Keagamaan', 'keagamaan', '#f59e0b');
```

### Tabel: `posts`
Semua berita dan artikel.

```sql
CREATE TABLE posts (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title VARCHAR(255) NOT NULL,
    slug VARCHAR(255) NOT NULL UNIQUE,
    excerpt TEXT,                          -- Ringkasan singkat
    content TEXT NOT NULL,                 -- Konten lengkap (markdown/html)
    featured_image TEXT,                   -- URL gambar utama
    category_id UUID REFERENCES post_categories(id),
    author_id UUID REFERENCES users(id),
    
    -- Homepage display control
    show_on_homepage BOOLEAN DEFAULT false,  -- Admin pilih untuk tampil di landing
    homepage_order INT DEFAULT 0,            -- Urutan di landing page
    
    -- Status & timestamps
    status VARCHAR(20) DEFAULT 'draft',      -- draft, published, archived
    published_at TIMESTAMP,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    
    -- SEO
    meta_title VARCHAR(255),
    meta_description TEXT
);

-- Index untuk query homepage
CREATE INDEX idx_posts_homepage ON posts(show_on_homepage, homepage_order) 
WHERE show_on_homepage = true AND status = 'published';
```

## Elemen yang Bisa Diedit Admin

### Section Header
| Field | Tipe | Deskripsi |
|-------|------|-----------|
| `section_title` | Text | "Berita Terbaru & Artikel" |
| `section_description` | Text | Deskripsi di bawah judul |
| `cta_text` | Text | "Selengkapnya" |
| `cta_link` | URL | "/berita" |

### Per Artikel (dari tabel posts)
| Field | Tipe | Deskripsi |
|-------|------|-----------|
| `title` | Text | Judul artikel |
| `excerpt` | Text | Ringkasan singkat |
| `featured_image` | Image | Foto/gambar utama |
| `category` | Select | Pilih kategori |
| `published_at` | Date | Tanggal publish |
| `show_on_homepage` | Toggle | Tampilkan di landing? |
| `homepage_order` | Number | Urutan tampil |

## Cara Admin Memilih Berita untuk Landing Page
1. Buka Admin Dashboard → Berita
2. Edit artikel yang ingin ditampilkan
3. Aktifkan toggle "Tampilkan di Landing Page"
4. Set urutan (1, 2, 3...)
5. Simpan

## Query untuk Landing Page
```sql
SELECT p.*, c.name as category_name, c.color as category_color
FROM posts p
LEFT JOIN post_categories c ON p.category_id = c.id
WHERE p.show_on_homepage = true 
  AND p.status = 'published'
ORDER BY p.homepage_order ASC
LIMIT 3;
```

## Komponen Files
- `src/components/NewsSection.tsx` - Section component
- `src/components/NewsCard.tsx` - Card component (reusable)
- `src/styles/news.css` - CSS styles
