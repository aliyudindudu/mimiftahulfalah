'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

// Interface untuk Achievement
interface Achievement {
    id: string;
    icon: 'academic' | 'religious' | 'technology' | 'environment';
    category: string;
    categoryColor: string;
    title: string;
    level: string;
    year: string;
    showOnHomepage: boolean;
}

// Interface untuk Section data
interface PrestasiSectionData {
    title: string;
    description: string;
    bannerImage: string;
    bannerTitle: string;
    bannerSubtitle: string;
    showOnHomepage: boolean;
}

// Default section data
const defaultSectionData: PrestasiSectionData = {
    title: 'Prestasi Kami',
    description: 'Berbagai prestasi yang telah diraih oleh siswa-siswi MI Miftahul Falah sebagai bukti komitmen kami dalam mencetak generasi unggul dan berprestasi.',
    bannerImage: '/hero-image1.jpeg',
    bannerTitle: 'Raih Prestasi Bersama Kami',
    bannerSubtitle: 'Bergabunglah dengan MI Miftahul Falah dan wujudkan potensi terbaikmu.',
    showOnHomepage: true,
};

// Default achievements (nanti dari database)
const defaultAchievements: Achievement[] = [
    {
        id: '1',
        icon: 'academic',
        category: 'Akademik',
        categoryColor: '#16a34a',
        title: 'Juara 1 Olimpiade Nasional',
        level: 'Tingkat Kabupaten',
        year: '2024',
        showOnHomepage: true,
    },
    {
        id: '2',
        icon: 'religious',
        category: 'Keagamaan',
        categoryColor: '#16a34a',
        title: 'Juara 1 Tahfidz Al-Qur\'an',
        level: 'Tingkat Provinsi',
        year: '2024',
        showOnHomepage: true,
    },
    {
        id: '3',
        icon: 'technology',
        category: 'Teknologi',
        categoryColor: '#16a34a',
        title: 'Juara 2 Sepak Bola',
        level: 'Tingkat Kabupaten',
        year: '2024',
        showOnHomepage: true,
    },
    {
        id: '4',
        icon: 'environment',
        category: 'Lingkungan',
        categoryColor: '#16a34a',
        title: 'Sekolah Adiwiyata',
        level: 'Tingkat Nasional',
        year: '2024',
        showOnHomepage: true,
    },
];

// Icons
const icons = {
    academic: (
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="8" r="6" />
            <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
        </svg>
    ),
    religious: (
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
        </svg>
    ),
    technology: (
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect width="18" height="18" x="3" y="3" rx="2" />
            <path d="M7 7h10" />
            <path d="M7 12h10" />
            <path d="M7 17h10" />
        </svg>
    ),
    environment: (
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
    ),
};

// Inline styles
const styles = {
    section: {
        padding: '4rem 1.5rem',
        backgroundColor: '#ffffff',
    },
    container: {
        maxWidth: '1200px',
        margin: '0 auto',
    },
    header: {
        textAlign: 'center' as const,
        marginBottom: '3rem',
    },
    title: {
        fontSize: '2rem',
        fontWeight: 700,
        color: '#16a34a',
        marginBottom: '1rem',
    },
    description: {
        fontSize: '1rem',
        color: '#4b5563',
        lineHeight: 1.7,
        maxWidth: '700px',
        margin: '0 auto',
    },
    grid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '1.5rem',
        marginBottom: '3rem',
    },
    card: {
        backgroundColor: '#ffffff',
        borderRadius: '1rem',
        padding: '1.5rem',
        textAlign: 'center' as const,
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
        border: '1px solid #e5e7eb',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    },
    iconWrapper: {
        width: '56px',
        height: '56px',
        borderRadius: '50%',
        backgroundColor: '#dcfce7',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '0 auto 1rem',
        color: '#16a34a',
    },
    categoryBadge: {
        display: 'inline-block',
        padding: '0.25rem 0.75rem',
        borderRadius: '9999px',
        fontSize: '0.75rem',
        fontWeight: 600,
        color: '#ffffff',
        marginBottom: '0.75rem',
    },
    cardTitle: {
        fontSize: '0.9375rem',
        fontWeight: 600,
        color: '#1f2937',
        marginBottom: '0.25rem',
    },
    cardLevel: {
        fontSize: '0.8125rem',
        color: '#6b7280',
        marginBottom: '0.25rem',
    },
    cardYear: {
        fontSize: '0.875rem',
        fontWeight: 700,
        color: '#16a34a',
    },
    banner: {
        position: 'relative' as const,
        borderRadius: '1rem',
        overflow: 'hidden',
        height: '200px',
    },
    bannerImage: {
        objectFit: 'cover' as const,
    },
    bannerOverlay: {
        position: 'absolute' as const,
        inset: 0,
        background: 'linear-gradient(to right, rgba(0,0,0,0.6), rgba(0,0,0,0.2))',
        display: 'flex',
        flexDirection: 'column' as const,
        justifyContent: 'center',
        padding: '2rem',
    },
    bannerTitle: {
        fontSize: '1.5rem',
        fontWeight: 700,
        color: '#ffffff',
        marginBottom: '0.5rem',
    },
    bannerSubtitle: {
        fontSize: '0.9375rem',
        color: 'rgba(255,255,255,0.9)',
    },
};

interface PrestasiSectionProps {
    sectionData?: PrestasiSectionData;
    achievements?: Achievement[];
}

export default function PrestasiSection({
    sectionData = defaultSectionData,
    achievements = defaultAchievements,
}: PrestasiSectionProps) {
    const [headerRef, headerVisible] = useScrollAnimation<HTMLDivElement>();
    const [gridRef, gridVisible] = useScrollAnimation<HTMLDivElement>();
    const [bannerRef, bannerVisible] = useScrollAnimation<HTMLDivElement>();

    if (!sectionData.showOnHomepage) {
        return null;
    }

    const visibleAchievements = achievements.filter(a => a.showOnHomepage);

    return (
        <section style={styles.section}>
            <div style={styles.container}>
                {/* Header */}
                <div
                    ref={headerRef}
                    style={styles.header}
                    className={`scroll-hidden scroll-fade-up ${headerVisible ? 'scroll-visible' : ''}`}
                >
                    <h2 style={styles.title}>{sectionData.title}</h2>
                    <p style={styles.description}>{sectionData.description}</p>
                </div>

                {/* Achievement Cards */}
                <div
                    ref={gridRef}
                    style={styles.grid}
                    className={`scroll-hidden scroll-fade-up ${gridVisible ? 'scroll-visible' : ''}`}
                >
                    {visibleAchievements.map((achievement, index) => (
                        <div
                            key={achievement.id}
                            style={styles.card}
                            className={`scroll-delay-${index + 1}`}
                        >
                            <div style={styles.iconWrapper}>
                                {icons[achievement.icon]}
                            </div>
                            <span
                                style={{
                                    ...styles.categoryBadge,
                                    backgroundColor: achievement.categoryColor,
                                }}
                            >
                                {achievement.category}
                            </span>
                            <div style={styles.cardTitle}>{achievement.title}</div>
                            <div style={styles.cardLevel}>{achievement.level}</div>
                            <div style={styles.cardYear}>{achievement.year}</div>
                        </div>
                    ))}
                </div>

                {/* Banner CTA */}
                <div
                    ref={bannerRef}
                    style={styles.banner}
                    className={`scroll-hidden scroll-fade-up ${bannerVisible ? 'scroll-visible' : ''}`}
                >
                    <Image
                        src={sectionData.bannerImage}
                        alt="Prestasi MI Miftahul Falah"
                        fill
                        style={styles.bannerImage}
                    />
                    <div style={styles.bannerOverlay}>
                        <h3 style={styles.bannerTitle}>{sectionData.bannerTitle}</h3>
                        <p style={styles.bannerSubtitle}>{sectionData.bannerSubtitle}</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
