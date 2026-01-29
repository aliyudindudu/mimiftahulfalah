-- =============================================
-- SEED DATA: Initial Data for Website
-- =============================================

-- School Profile Keys
INSERT INTO school_profiles (key, title, content) VALUES
    ('history', 'Sejarah Sekolah', 'Sejarah MI Miftahul Falah akan diisi di sini...'),
    ('vision', 'Visi', 'Visi sekolah akan diisi di sini...'),
    ('mission', 'Misi', 'Misi sekolah akan diisi di sini...'),
    ('about', 'Tentang Kami', 'Deskripsi singkat tentang sekolah...');

-- Initial Statistics
INSERT INTO school_statistics (label, value, icon, display_order) VALUES
    ('Siswa', 500, 'users', 1),
    ('Guru', 30, 'user-tie', 2),
    ('Prestasi', 50, 'trophy', 3),
    ('Tahun Berdiri', 25, 'calendar', 4);

-- Initial Hero Section
INSERT INTO hero_sections (title, slogan, image, cta_text, cta_link, display_order, is_active) VALUES
    ('MI Miftahul Falah', 'Membentuk Generasi Islami yang Cerdas dan Berakhlak Mulia', '', 'Daftar Sekarang', '/ppdb', 1, TRUE);

-- Initial Headmaster Message
INSERT INTO headmaster_messages (headmaster_name, position, message, photo, is_active) VALUES
    ('Nama Kepala Sekolah', 'Kepala Sekolah', 'Sambutan Kepala Sekolah akan diisi di sini...', '', TRUE);

-- Initial Contact Info
INSERT INTO contact_info (address, phone, email, maps_embed) VALUES
    ('Jl. Raya Pasar Kemis No. 103, Desa Cikaramas, Kec. Tanjungmedar, Prov. Jawa Barat', '', '', '');

-- Initial Academic Year
INSERT INTO academic_years (year, is_active) VALUES
    ('2025/2026', FALSE),
    ('2026/2027', TRUE);

-- Initial Post Categories
INSERT INTO post_categories (name, slug) VALUES
    ('Keagamaan', 'keagamaan'),
    ('Kegiatan', 'kegiatan'),
    ('Prestasi', 'prestasi'),
    ('Akademik', 'akademik'),
    ('Pengumuman', 'pengumuman');

-- Initial Highlights
INSERT INTO highlights (title, description, icon, display_order) VALUES
    ('Kurikulum Islami', 'Pembelajaran berbasis nilai-nilai Islam', 'quran', 1),
    ('Tenaga Pendidik Berkualitas', 'Guru-guru profesional dan berpengalaman', 'graduation-cap', 2),
    ('Fasilitas Lengkap', 'Sarana prasarana yang mendukung pembelajaran', 'building', 3);

-- Initial PPDB Info
INSERT INTO ppdb_infos (academic_year_id, title, description, requirements, flow, is_active)
SELECT id, 'PPDB Tahun Ajaran 2026/2027', 'Penerimaan Peserta Didik Baru', 
    'Syarat pendaftaran akan diisi...', 'Alur pendaftaran akan diisi...', TRUE
FROM academic_years WHERE year = '2026/2027';
