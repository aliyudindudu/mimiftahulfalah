'use client';

import Link from 'next/link';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

// Interface untuk Stats data
interface StatItem {
    id: string;
    icon: 'students' | 'achievements' | 'teachers' | 'founded';
    value: string;
    label: string;
}

interface StatsData {
    stats: StatItem[];
    ctaText: string;
    ctaLink: string;
    showOnHomepage: boolean;
}

// Default data (placeholder - nanti dari database)
const defaultStatsData: StatsData = {
    stats: [
        { id: '1', icon: 'students', value: '151', label: 'Siswa Aktif' },
        { id: '2', icon: 'achievements', value: '24', label: 'Prestasi' },
        { id: '3', icon: 'teachers', value: '10', label: 'Guru Profesional' },
        { id: '4', icon: 'founded', value: '1970', label: 'Tahun Berdiri' },
    ],
    ctaText: 'Selengkapnya',
    ctaLink: '/profil',
    showOnHomepage: true,
};

// Icons sebagai SVG components
const icons = {
    students: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
    ),
    achievements: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="8" r="6" />
            <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
        </svg>
    ),
    teachers: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
            <path d="M8 7h6" />
            <path d="M8 11h8" />
        </svg>
    ),
    founded: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
            <rect x="3" y="3" width="18" height="18" rx="2" />
        </svg>
    ),

    
};

// Inline styles
const styles = {
    section: {
        padding: '3rem 1.5rem',
        background: 'linear-gradient(180deg, #f0fdf4 0%, #ffffff 100%)',
    },
    container: {
        maxWidth: '1100px',
        margin: '0 auto',
    },
    grid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '1.5rem',
        marginBottom: '2.5rem',
    },
    card: {
        background: '#ffffff',
        borderRadius: '1rem',
        padding: '2rem 1.5rem',
        textAlign: 'center' as const,
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)',
        border: '1px solid #e5e7eb',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    },
    iconWrapper: {
        width: '60px',
        height: '60px',
        borderRadius: '50%',
        backgroundColor: '#dcfce7',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '0 auto 1rem',
        color: '#16a34a',
    },
    value: {
        fontSize: '2.5rem',
        fontWeight: 700,
        color: '#16a34a',
        marginBottom: '0.25rem',
        lineHeight: 1.2,
    },
    label: {
        fontSize: '0.9375rem',
        color: '#4b5563',
        fontWeight: 500,
    },
    ctaWrapper: {
        textAlign: 'center' as const,
    },
    ctaButton: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.5rem',
        padding: '0.875rem 2rem',
        backgroundColor: '#16a34a',
        color: '#ffffff',
        borderRadius: '9999px',
        fontWeight: 600,
        fontSize: '0.9375rem',
        textDecoration: 'none',
        transition: 'background-color 0.3s ease',
    },
};

interface StatsSectionProps {
    data?: StatsData;
}

export default function StatsSection({ data = defaultStatsData }: StatsSectionProps) {
    const [sectionRef, sectionVisible] = useScrollAnimation<HTMLDivElement>();

    if (!data.showOnHomepage) {
        return null;
    }

    return (
        <div style={styles.section}>
            <div
                ref={sectionRef}
                style={styles.container}
                className={`scroll-hidden scroll-fade-up ${sectionVisible ? 'scroll-visible' : ''}`}
            >
                {/* Stats Grid */}
                <div style={styles.grid}>
                    {data.stats.map((stat, index) => (
                        <div
                            key={stat.id}
                            style={styles.card}
                            className={`scroll-delay-${index + 1}`}
                        >
                            <div style={styles.iconWrapper}>
                                {icons[stat.icon]}
                            </div>
                            <div style={styles.value}>{stat.value}</div>
                            <div style={styles.label}>{stat.label}</div>
                        </div>
                    ))}
                </div>

                {/* CTA Button */}
                <div style={styles.ctaWrapper}>
                    <Link href={data.ctaLink} style={styles.ctaButton}>
                        {data.ctaText}
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </Link>
                </div>
            </div>
        </div>
    );
}
