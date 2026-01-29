-- =============================================
-- WEBSITE PROFIL MI MIFTAHUL FALAH
-- COMPLETE DATABASE SCHEMA (Supabase/PostgreSQL)
-- Created: 2026-01-29
-- =============================================

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- =============================================
-- 1. USERS (Admin Management)
-- =============================================
CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password TEXT NOT NULL,
    role TEXT CHECK (role IN ('admin', 'super_admin')) DEFAULT 'admin',
    last_login TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_users_role ON users(role);

-- =============================================
-- 2. HERO SECTIONS (Landing Page Hero)
-- =============================================
CREATE TABLE hero_sections (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    title VARCHAR(150),
    slogan VARCHAR(255),
    image TEXT,
    cta_text VARCHAR(100),
    cta_link VARCHAR(255),
    display_order INTEGER DEFAULT 0,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX idx_hero_sections_active ON hero_sections(is_active);
CREATE INDEX idx_hero_sections_order ON hero_sections(display_order);

-- =============================================
-- 3. HEADMASTER MESSAGES (Sambutan Kepala Sekolah)
-- =============================================
CREATE TABLE headmaster_messages (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    headmaster_name VARCHAR(100) NOT NULL,
    position VARCHAR(100) DEFAULT 'Kepala Sekolah',
    message TEXT,
    photo TEXT,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX idx_headmaster_active ON headmaster_messages(is_active);

-- =============================================
-- 4. HIGHLIGHTS (Info Kilat/Keunggulan)
-- =============================================
CREATE TABLE highlights (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    title VARCHAR(100) NOT NULL,
    description TEXT,
    icon TEXT,
    display_order INTEGER DEFAULT 0,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX idx_highlights_order ON highlights(display_order);
CREATE INDEX idx_highlights_active ON highlights(is_active);

-- =============================================
-- 5. SCHOOL STATISTICS (Statistik Sekolah)
-- =============================================
CREATE TABLE school_statistics (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    label VARCHAR(100) NOT NULL,
    value INTEGER DEFAULT 0,
    icon TEXT,
    display_order INTEGER DEFAULT 0,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX idx_statistics_order ON school_statistics(display_order);

-- =============================================
-- 6. SCHOOL PROFILES (Profil Sekolah - Visi Misi Sejarah)
-- =============================================
CREATE TABLE school_profiles (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    key VARCHAR(50) UNIQUE NOT NULL,
    title VARCHAR(150),
    content TEXT,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX idx_school_profiles_key ON school_profiles(key);

-- =============================================
-- 7. ORGANIZATION STRUCTURES (Struktur Organisasi)
-- =============================================
CREATE TABLE organization_structures (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(100) NOT NULL,
    position VARCHAR(100) NOT NULL,
    photo TEXT,
    parent_id UUID REFERENCES organization_structures(id) ON DELETE SET NULL,
    display_order INTEGER DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX idx_org_parent ON organization_structures(parent_id);
CREATE INDEX idx_org_order ON organization_structures(display_order);

-- =============================================
-- 8. FACILITIES (Fasilitas Sekolah)
-- =============================================
CREATE TABLE facilities (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(100) NOT NULL,
    description TEXT,
    image TEXT,
    display_order INTEGER DEFAULT 0,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX idx_facilities_order ON facilities(display_order);
CREATE INDEX idx_facilities_active ON facilities(is_active);

-- =============================================
-- 9. CURRICULUMS (Kurikulum)
-- =============================================
CREATE TABLE curriculums (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(100) NOT NULL,
    description TEXT,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX idx_curriculums_active ON curriculums(is_active);

-- =============================================
-- 10. TEACHERS & STAFF (Guru dan Staf)
-- =============================================
CREATE TABLE teachers_staff (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(100) NOT NULL,
    nip VARCHAR(30),
    position VARCHAR(100),
    photo TEXT,
    type TEXT CHECK (type IN ('guru', 'staf')) NOT NULL,
    display_order INTEGER DEFAULT 0,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX idx_teachers_type ON teachers_staff(type);
CREATE INDEX idx_teachers_active ON teachers_staff(is_active);
CREATE INDEX idx_teachers_order ON teachers_staff(display_order);

-- =============================================
-- 11. ACHIEVEMENTS (Prestasi)
-- =============================================
CREATE TABLE achievements (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    title VARCHAR(150) NOT NULL,
    description TEXT,
    category TEXT CHECK (category IN ('akademik', 'non-akademik')) NOT NULL,
    level TEXT CHECK (level IN ('kecamatan', 'kabupaten', 'provinsi', 'nasional', 'internasional')),
    year INTEGER,
    image TEXT,
    teacher_id UUID REFERENCES teachers_staff(id) ON DELETE SET NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX idx_achievements_category ON achievements(category);
CREATE INDEX idx_achievements_level ON achievements(level);
CREATE INDEX idx_achievements_year ON achievements(year DESC);
CREATE INDEX idx_achievements_teacher ON achievements(teacher_id);

-- =============================================
-- 12. POST CATEGORIES (Kategori Berita)
-- =============================================
CREATE TABLE post_categories (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(100) UNIQUE NOT NULL,
    slug VARCHAR(100) UNIQUE NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX idx_post_categories_slug ON post_categories(slug);

-- =============================================
-- 13. POSTS (Berita & Pengumuman)
-- =============================================
CREATE TABLE posts (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    title VARCHAR(150) NOT NULL,
    slug VARCHAR(150) UNIQUE NOT NULL,
    content TEXT,
    excerpt TEXT,
    thumbnail TEXT,
    type TEXT CHECK (type IN ('berita', 'pengumuman')) NOT NULL,
    category_id UUID REFERENCES post_categories(id) ON DELETE SET NULL,
    status TEXT CHECK (status IN ('draft', 'published')) DEFAULT 'draft',
    published_at TIMESTAMP WITH TIME ZONE,
    author_id UUID REFERENCES users(id) ON DELETE SET NULL,
    views INTEGER DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX idx_posts_slug ON posts(slug);
CREATE INDEX idx_posts_type ON posts(type);
CREATE INDEX idx_posts_category ON posts(category_id);
CREATE INDEX idx_posts_status ON posts(status);
CREATE INDEX idx_posts_published ON posts(published_at DESC);
CREATE INDEX idx_posts_author ON posts(author_id);

-- =============================================
-- 14. GALLERIES (Album Galeri)
-- =============================================
CREATE TABLE galleries (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    title VARCHAR(150) NOT NULL,
    description TEXT,
    type TEXT CHECK (type IN ('foto', 'video')) DEFAULT 'foto',
    cover_image TEXT,
    post_id UUID REFERENCES posts(id) ON DELETE SET NULL,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX idx_galleries_type ON galleries(type);
CREATE INDEX idx_galleries_post ON galleries(post_id);
CREATE INDEX idx_galleries_active ON galleries(is_active);

-- =============================================
-- 15. GALLERY ITEMS (Item Galeri)
-- =============================================
CREATE TABLE gallery_items (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    gallery_id UUID REFERENCES galleries(id) ON DELETE CASCADE NOT NULL,
    file_path TEXT NOT NULL,
    caption TEXT,
    display_order INTEGER DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX idx_gallery_items_gallery ON gallery_items(gallery_id);
CREATE INDEX idx_gallery_items_order ON gallery_items(display_order);

-- =============================================
-- 16. ACADEMIC YEARS (Tahun Ajaran)
-- =============================================
CREATE TABLE academic_years (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    year VARCHAR(20) UNIQUE NOT NULL,
    is_active BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX idx_academic_years_active ON academic_years(is_active);

-- =============================================
-- 17. PPDB INFO (Informasi PPDB)
-- =============================================
CREATE TABLE ppdb_infos (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    academic_year_id UUID REFERENCES academic_years(id) ON DELETE CASCADE,
    title VARCHAR(150),
    description TEXT,
    requirements TEXT,
    flow TEXT,
    start_date DATE,
    end_date DATE,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX idx_ppdb_infos_active ON ppdb_infos(is_active);
CREATE INDEX idx_ppdb_infos_year ON ppdb_infos(academic_year_id);

-- =============================================
-- 18. PPDB REGISTRATIONS (Pendaftaran PPDB)
-- =============================================
CREATE TABLE ppdb_registrations (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    registration_number VARCHAR(20) UNIQUE,
    academic_year_id UUID REFERENCES academic_years(id) ON DELETE SET NULL,
    full_name VARCHAR(100) NOT NULL,
    nisn VARCHAR(20),
    birth_place VARCHAR(100),
    birth_date DATE,
    gender TEXT CHECK (gender IN ('L', 'P')),
    address TEXT,
    parent_name VARCHAR(100),
    parent_phone VARCHAR(20),
    previous_school VARCHAR(150),
    status TEXT CHECK (status IN ('pending', 'verified', 'accepted', 'rejected')) DEFAULT 'pending',
    notes TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX idx_ppdb_reg_status ON ppdb_registrations(status);
CREATE INDEX idx_ppdb_reg_year ON ppdb_registrations(academic_year_id);
CREATE INDEX idx_ppdb_reg_created ON ppdb_registrations(created_at DESC);

-- =============================================
-- 19. CONTACT MESSAGES (Pesan Kontak)
-- =============================================
CREATE TABLE contact_messages (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    subject VARCHAR(150),
    message TEXT NOT NULL,
    is_read BOOLEAN DEFAULT FALSE,
    replied_at TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX idx_contact_read ON contact_messages(is_read);
CREATE INDEX idx_contact_created ON contact_messages(created_at DESC);

-- =============================================
-- 20. CONTACT INFO (Informasi Kontak Sekolah)
-- =============================================
CREATE TABLE contact_info (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    address TEXT,
    phone VARCHAR(20),
    email VARCHAR(100),
    maps_embed TEXT,
    whatsapp VARCHAR(20),
    facebook VARCHAR(255),
    instagram VARCHAR(255),
    youtube VARCHAR(255),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- =============================================
-- 21. ADMIN LOGS (Audit Trail)
-- =============================================
CREATE TABLE admin_logs (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES users(id) ON DELETE SET NULL,
    action VARCHAR(100) NOT NULL,
    table_name VARCHAR(50),
    record_id UUID,
    old_data JSONB,
    new_data JSONB,
    ip_address VARCHAR(45),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX idx_admin_logs_user ON admin_logs(user_id);
CREATE INDEX idx_admin_logs_action ON admin_logs(action);
CREATE INDEX idx_admin_logs_table ON admin_logs(table_name);
CREATE INDEX idx_admin_logs_created ON admin_logs(created_at DESC);
