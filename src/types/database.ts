/**
 * Database Types for Website Profil MI Miftahul Falah
 * Generated from Supabase schema - 21 Tables
 */

// =============================================
// 1. USERS
// =============================================
export type UserRole = 'admin' | 'super_admin';

export interface User {
    id: string;
    name: string;
    email: string;
    password: string;
    role: UserRole;
    last_login: string | null;
    created_at: string;
    updated_at: string;
}

export interface UserInsert {
    name: string;
    email: string;
    password: string;
    role?: UserRole;
}

// =============================================
// 2. HERO SECTIONS
// =============================================
export interface HeroSection {
    id: string;
    title: string | null;
    slogan: string | null;
    image: string | null;
    cta_text: string | null;
    cta_link: string | null;
    display_order: number;
    is_active: boolean;
    created_at: string;
}

export interface HeroSectionInsert {
    title?: string | null;
    slogan?: string | null;
    image?: string | null;
    cta_text?: string | null;
    cta_link?: string | null;
    display_order?: number;
    is_active?: boolean;
}

// =============================================
// 3. HEADMASTER MESSAGES
// =============================================
export interface HeadmasterMessage {
    id: string;
    headmaster_name: string;
    position: string;
    message: string | null;
    photo: string | null;
    is_active: boolean;
    created_at: string;
}

export interface HeadmasterMessageInsert {
    headmaster_name: string;
    position?: string;
    message?: string | null;
    photo?: string | null;
    is_active?: boolean;
}

// =============================================
// 4. HIGHLIGHTS
// =============================================
export interface Highlight {
    id: string;
    title: string;
    description: string | null;
    icon: string | null;
    display_order: number;
    is_active: boolean;
    created_at: string;
}

export interface HighlightInsert {
    title: string;
    description?: string | null;
    icon?: string | null;
    display_order?: number;
    is_active?: boolean;
}

// =============================================
// 5. SCHOOL STATISTICS
// =============================================
export interface SchoolStatistic {
    id: string;
    label: string;
    value: number;
    icon: string | null;
    display_order: number;
    updated_at: string;
}

export interface SchoolStatisticInsert {
    label: string;
    value?: number;
    icon?: string | null;
    display_order?: number;
}

// =============================================
// 6. SCHOOL PROFILES
// =============================================
export type SchoolProfileKey = 'history' | 'vision' | 'mission' | 'about';

export interface SchoolProfile {
    id: string;
    key: SchoolProfileKey;
    title: string | null;
    content: string | null;
    updated_at: string;
}

export interface SchoolProfileInsert {
    key: SchoolProfileKey;
    title?: string | null;
    content?: string | null;
}

// =============================================
// 7. ORGANIZATION STRUCTURES
// =============================================
export interface OrganizationStructure {
    id: string;
    name: string;
    position: string;
    photo: string | null;
    parent_id: string | null;
    display_order: number;
    created_at: string;
}

export interface OrganizationStructureInsert {
    name: string;
    position: string;
    photo?: string | null;
    parent_id?: string | null;
    display_order?: number;
}

// =============================================
// 8. FACILITIES
// =============================================
export interface Facility {
    id: string;
    name: string;
    description: string | null;
    image: string | null;
    display_order: number;
    is_active: boolean;
    created_at: string;
}

export interface FacilityInsert {
    name: string;
    description?: string | null;
    image?: string | null;
    display_order?: number;
    is_active?: boolean;
}

// =============================================
// 9. CURRICULUMS
// =============================================
export interface Curriculum {
    id: string;
    name: string;
    description: string | null;
    is_active: boolean;
    created_at: string;
}

export interface CurriculumInsert {
    name: string;
    description?: string | null;
    is_active?: boolean;
}

// =============================================
// 10. TEACHERS & STAFF
// =============================================
export type TeacherStaffType = 'guru' | 'staf';

export interface TeacherStaff {
    id: string;
    name: string;
    nip: string | null;
    position: string | null;
    photo: string | null;
    type: TeacherStaffType;
    display_order: number;
    is_active: boolean;
    created_at: string;
}

export interface TeacherStaffInsert {
    name: string;
    nip?: string | null;
    position?: string | null;
    photo?: string | null;
    type: TeacherStaffType;
    display_order?: number;
    is_active?: boolean;
}

// =============================================
// 11. ACHIEVEMENTS
// =============================================
export type AchievementCategory = 'akademik' | 'non-akademik';
export type AchievementLevel = 'kecamatan' | 'kabupaten' | 'provinsi' | 'nasional' | 'internasional';

export interface Achievement {
    id: string;
    title: string;
    description: string | null;
    category: AchievementCategory;
    level: AchievementLevel | null;
    year: number | null;
    image: string | null;
    teacher_id: string | null;
    created_at: string;
}

export interface AchievementInsert {
    title: string;
    description?: string | null;
    category: AchievementCategory;
    level?: AchievementLevel | null;
    year?: number | null;
    image?: string | null;
    teacher_id?: string | null;
}

// =============================================
// 12. POST CATEGORIES
// =============================================
export interface PostCategory {
    id: string;
    name: string;
    slug: string;
    created_at: string;
}

export interface PostCategoryInsert {
    name: string;
    slug: string;
}

// =============================================
// 13. POSTS
// =============================================
export type PostType = 'berita' | 'pengumuman';
export type PostStatus = 'draft' | 'published';

export interface Post {
    id: string;
    title: string;
    slug: string;
    content: string | null;
    excerpt: string | null;
    thumbnail: string | null;
    type: PostType;
    category_id: string | null;
    status: PostStatus;
    published_at: string | null;
    author_id: string | null;
    views: number;
    created_at: string;
    updated_at: string;
}

export interface PostInsert {
    title: string;
    slug: string;
    content?: string | null;
    excerpt?: string | null;
    thumbnail?: string | null;
    type: PostType;
    category_id?: string | null;
    status?: PostStatus;
    published_at?: string | null;
    author_id?: string | null;
}

// =============================================
// 14. GALLERIES
// =============================================
export type GalleryType = 'foto' | 'video';

export interface Gallery {
    id: string;
    title: string;
    description: string | null;
    type: GalleryType;
    cover_image: string | null;
    post_id: string | null;
    is_active: boolean;
    created_at: string;
}

export interface GalleryInsert {
    title: string;
    description?: string | null;
    type?: GalleryType;
    cover_image?: string | null;
    post_id?: string | null;
    is_active?: boolean;
}

// =============================================
// 15. GALLERY ITEMS
// =============================================
export interface GalleryItem {
    id: string;
    gallery_id: string;
    file_path: string;
    caption: string | null;
    display_order: number;
    created_at: string;
}

export interface GalleryItemInsert {
    gallery_id: string;
    file_path: string;
    caption?: string | null;
    display_order?: number;
}

// =============================================
// 16. ACADEMIC YEARS
// =============================================
export interface AcademicYear {
    id: string;
    year: string;
    is_active: boolean;
    created_at: string;
}

export interface AcademicYearInsert {
    year: string;
    is_active?: boolean;
}

// =============================================
// 17. PPDB INFO
// =============================================
export interface PPDBInfo {
    id: string;
    academic_year_id: string | null;
    title: string | null;
    description: string | null;
    requirements: string | null;
    flow: string | null;
    start_date: string | null;
    end_date: string | null;
    is_active: boolean;
    created_at: string;
}

export interface PPDBInfoInsert {
    academic_year_id?: string | null;
    title?: string | null;
    description?: string | null;
    requirements?: string | null;
    flow?: string | null;
    start_date?: string | null;
    end_date?: string | null;
    is_active?: boolean;
}

// =============================================
// 18. PPDB REGISTRATIONS
// =============================================
export type PPDBStatus = 'pending' | 'verified' | 'accepted' | 'rejected';
export type Gender = 'L' | 'P';

export interface PPDBRegistration {
    id: string;
    registration_number: string | null;
    academic_year_id: string | null;
    full_name: string;
    nisn: string | null;
    birth_place: string | null;
    birth_date: string | null;
    gender: Gender | null;
    address: string | null;
    parent_name: string | null;
    parent_phone: string | null;
    previous_school: string | null;
    status: PPDBStatus;
    notes: string | null;
    created_at: string;
    updated_at: string;
}

export interface PPDBRegistrationInsert {
    registration_number?: string | null;
    academic_year_id?: string | null;
    full_name: string;
    nisn?: string | null;
    birth_place?: string | null;
    birth_date?: string | null;
    gender?: Gender | null;
    address?: string | null;
    parent_name?: string | null;
    parent_phone?: string | null;
    previous_school?: string | null;
    status?: PPDBStatus;
    notes?: string | null;
}

// =============================================
// 19. CONTACT MESSAGES
// =============================================
export interface ContactMessage {
    id: string;
    name: string;
    email: string;
    subject: string | null;
    message: string;
    is_read: boolean;
    replied_at: string | null;
    created_at: string;
}

export interface ContactMessageInsert {
    name: string;
    email: string;
    subject?: string | null;
    message: string;
}

// =============================================
// 20. CONTACT INFO
// =============================================
export interface ContactInfo {
    id: string;
    address: string | null;
    phone: string | null;
    email: string | null;
    maps_embed: string | null;
    whatsapp: string | null;
    facebook: string | null;
    instagram: string | null;
    youtube: string | null;
    updated_at: string;
}

export interface ContactInfoInsert {
    address?: string | null;
    phone?: string | null;
    email?: string | null;
    maps_embed?: string | null;
    whatsapp?: string | null;
    facebook?: string | null;
    instagram?: string | null;
    youtube?: string | null;
}

// =============================================
// 21. ADMIN LOGS
// =============================================
export interface AdminLog {
    id: string;
    user_id: string | null;
    action: string;
    table_name: string | null;
    record_id: string | null;
    old_data: Record<string, unknown> | null;
    new_data: Record<string, unknown> | null;
    ip_address: string | null;
    created_at: string;
}

export interface AdminLogInsert {
    user_id?: string | null;
    action: string;
    table_name?: string | null;
    record_id?: string | null;
    old_data?: Record<string, unknown> | null;
    new_data?: Record<string, unknown> | null;
    ip_address?: string | null;
}

// =============================================
// DATABASE SCHEMA (for Supabase Client)
// =============================================
export interface Database {
    public: {
        Tables: {
            users: {
                Row: User;
                Insert: UserInsert;
                Update: Partial<UserInsert>;
            };
            hero_sections: {
                Row: HeroSection;
                Insert: HeroSectionInsert;
                Update: Partial<HeroSectionInsert>;
            };
            headmaster_messages: {
                Row: HeadmasterMessage;
                Insert: HeadmasterMessageInsert;
                Update: Partial<HeadmasterMessageInsert>;
            };
            highlights: {
                Row: Highlight;
                Insert: HighlightInsert;
                Update: Partial<HighlightInsert>;
            };
            school_statistics: {
                Row: SchoolStatistic;
                Insert: SchoolStatisticInsert;
                Update: Partial<SchoolStatisticInsert>;
            };
            school_profiles: {
                Row: SchoolProfile;
                Insert: SchoolProfileInsert;
                Update: Partial<SchoolProfileInsert>;
            };
            organization_structures: {
                Row: OrganizationStructure;
                Insert: OrganizationStructureInsert;
                Update: Partial<OrganizationStructureInsert>;
            };
            facilities: {
                Row: Facility;
                Insert: FacilityInsert;
                Update: Partial<FacilityInsert>;
            };
            curriculums: {
                Row: Curriculum;
                Insert: CurriculumInsert;
                Update: Partial<CurriculumInsert>;
            };
            teachers_staff: {
                Row: TeacherStaff;
                Insert: TeacherStaffInsert;
                Update: Partial<TeacherStaffInsert>;
            };
            achievements: {
                Row: Achievement;
                Insert: AchievementInsert;
                Update: Partial<AchievementInsert>;
            };
            post_categories: {
                Row: PostCategory;
                Insert: PostCategoryInsert;
                Update: Partial<PostCategoryInsert>;
            };
            posts: {
                Row: Post;
                Insert: PostInsert;
                Update: Partial<PostInsert>;
            };
            galleries: {
                Row: Gallery;
                Insert: GalleryInsert;
                Update: Partial<GalleryInsert>;
            };
            gallery_items: {
                Row: GalleryItem;
                Insert: GalleryItemInsert;
                Update: Partial<GalleryItemInsert>;
            };
            academic_years: {
                Row: AcademicYear;
                Insert: AcademicYearInsert;
                Update: Partial<AcademicYearInsert>;
            };
            ppdb_infos: {
                Row: PPDBInfo;
                Insert: PPDBInfoInsert;
                Update: Partial<PPDBInfoInsert>;
            };
            ppdb_registrations: {
                Row: PPDBRegistration;
                Insert: PPDBRegistrationInsert;
                Update: Partial<PPDBRegistrationInsert>;
            };
            contact_messages: {
                Row: ContactMessage;
                Insert: ContactMessageInsert;
                Update: Partial<ContactMessageInsert>;
            };
            contact_info: {
                Row: ContactInfo;
                Insert: ContactInfoInsert;
                Update: Partial<ContactInfoInsert>;
            };
            admin_logs: {
                Row: AdminLog;
                Insert: AdminLogInsert;
                Update: Partial<AdminLogInsert>;
            };
        };
    };
}
