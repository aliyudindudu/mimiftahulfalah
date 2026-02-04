'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

// Interface untuk Achievement
interface Achievement {
    id: string;
    icon: 'academic' | 'religious' | 'technology' | 'environment' | 'sports';
    category: string;
    categoryColor: string;
    title: string;
    description: string;
    highlights: string[];
    level: string;
    year: string;
    imageUrl: string;
    showOnHomepage: boolean;
    isActive: boolean;
}

// Interface untuk Page data
interface PrestasiPageData {
    heroTitle: string;
    heroSubtitle: string;
    heroImage: string;
    ctaBannerImage: string;
    ctaBannerTitle: string;
    ctaBannerSubtitle: string;
    joinBannerTitle: string;
    joinBannerSubtitle: string;
}

// Default page data
const defaultPageData: PrestasiPageData = {
    heroTitle: 'Prestasi Kami',
    heroSubtitle: 'MI Miftahul Falah - Mencetak Generasi Islami dan Berprestasi',
    heroImage: '/hero-image1.jpeg',
    ctaBannerImage: '/hero-image1.jpeg',
    ctaBannerTitle: 'Raih Prestasi Bersama Kami',
    ctaBannerSubtitle: 'Bergabunglah dengan MI Miftahul Falah dan wujudkan potensi terbaikmu.',
    joinBannerTitle: 'Bergabunglah Dengan Kami',
    joinBannerSubtitle: 'MI Miftahul Falah - Mencetak Generasi Islami dan Berprestasi',
};

// Default achievements (nanti dari database)
const defaultAchievements: Achievement[] = [
    {
        id: '1',
        icon: 'sports',
        category: 'Olahraga',
        categoryColor: '#16a34a',
        title: 'Lomba Futsal Tingkat Kabupaten',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        highlights: [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        ],
        level: 'Tingkat Kabupaten',
        year: '2024',
        imageUrl: '/hero-image1.jpeg',
        showOnHomepage: true,
        isActive: true,
    },
    {
        id: '2',
        icon: 'sports',
        category: 'Olahraga',
        categoryColor: '#16a34a',
        title: 'Lomba Futsal Tingkat Kabupaten',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        highlights: [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        ],
        level: 'Tingkat Kabupaten',
        year: '2024',
        imageUrl: '/second-hero-image2.jpeg',
        showOnHomepage: true,
        isActive: true,
    },
    {
        id: '3',
        icon: 'sports',
        category: 'Olahraga',
        categoryColor: '#16a34a',
        title: 'Lomba Futsal Tingkat Kabupaten',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        highlights: [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        ],
        level: 'Tingkat Kabupaten',
        year: '2024',
        imageUrl: '/hero-image1.jpeg',
        showOnHomepage: false,
        isActive: true,
    },
    {
        id: '4',
        icon: 'sports',
        category: 'Olahraga',
        categoryColor: '#16a34a',
        title: 'Lomba Futsal Tingkat Kabupaten',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        highlights: [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        ],
        level: 'Tingkat Kabupaten',
        year: '2024',
        imageUrl: '/second-hero-image2.jpeg',
        showOnHomepage: false,
        isActive: true,
    },
];

// Styles
const styles = {
    hero: {
        position: 'relative' as const,
        height: '320px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
    },
    heroOverlay: {
        position: 'absolute' as const,
        inset: 0,
        background: 'linear-gradient(135deg, rgba(22, 101, 52, 0.9) 0%, rgba(21, 128, 61, 0.85) 100%)',
        zIndex: 1,
    },
    heroContent: {
        position: 'relative' as const,
        zIndex: 2,
        textAlign: 'center' as const,
        color: '#ffffff',
        padding: '0 1.5rem',
    },
    heroTitle: {
        fontSize: '2.5rem',
        fontWeight: 700,
        marginBottom: '0.75rem',
    },
    heroSubtitle: {
        fontSize: '1.125rem',
        opacity: 0.9,
    },
    section: {
        padding: '4rem 1.5rem',
        backgroundColor: '#ffffff',
    },
    container: {
        maxWidth: '1100px',
        margin: '0 auto',
    },
    achievementCard: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '3rem',
        alignItems: 'center',
        marginBottom: '4rem',
    },
    achievementCardReverse: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '3rem',
        alignItems: 'center',
        marginBottom: '4rem',
    },
    imageWrapper: {
        position: 'relative' as const,
        borderRadius: '1rem',
        overflow: 'hidden',
        aspectRatio: '4/3',
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
    },
    content: {
        display: 'flex',
        flexDirection: 'column' as const,
        gap: '1rem',
    },
    titleWrapper: {
        display: 'flex',
        alignItems: 'center',
        gap: '0.75rem',
    },
    iconWrapper: {
        width: '40px',
        height: '40px',
        borderRadius: '50%',
        backgroundColor: '#dcfce7',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#16a34a',
    },
    title: {
        fontSize: '1.375rem',
        fontWeight: 700,
        color: '#1f2937',
    },
    description: {
        fontSize: '0.9375rem',
        color: '#6b7280',
        lineHeight: 1.7,
    },
    highlightsTitle: {
        fontSize: '0.9375rem',
        fontWeight: 600,
        color: '#16a34a',
        marginBottom: '0.5rem',
    },
    highlightsList: {
        listStyle: 'none',
        padding: 0,
        margin: 0,
        display: 'flex',
        flexDirection: 'column' as const,
        gap: '0.5rem',
    },
    highlightItem: {
        display: 'flex',
        alignItems: 'flex-start',
        gap: '0.5rem',
        fontSize: '0.875rem',
        color: '#4b5563',
    },
    checkIcon: {
        color: '#16a34a',
        flexShrink: 0,
        marginTop: '2px',
    },
    ctaBanner: {
        position: 'relative' as const,
        borderRadius: '1rem',
        overflow: 'hidden',
        height: '200px',
        marginBottom: '4rem',
    },
    ctaOverlay: {
        position: 'absolute' as const,
        inset: 0,
        background: 'linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,0,0,0.3))',
        display: 'flex',
        flexDirection: 'column' as const,
        justifyContent: 'center',
        padding: '2rem',
    },
    ctaTitle: {
        fontSize: '1.75rem',
        fontWeight: 700,
        color: '#ffffff',
        marginBottom: '0.5rem',
    },
    ctaSubtitle: {
        fontSize: '1rem',
        color: 'rgba(255,255,255,0.9)',
    },
    joinBanner: {
        background: 'linear-gradient(135deg, #15803d 0%, #16a34a 100%)',
        borderRadius: '1rem',
        padding: '3rem',
        textAlign: 'center' as const,
    },
    joinTitle: {
        fontSize: '1.75rem',
        fontWeight: 700,
        color: '#ffffff',
        marginBottom: '0.5rem',
    },
    joinSubtitle: {
        fontSize: '1rem',
        color: 'rgba(255,255,255,0.9)',
    },
};

// Check icon
const CheckIcon = () => (
    <svg style={styles.checkIcon} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20 6 9 17 4 12" />
    </svg>
);

// Trophy icon
const TrophyIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
        <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
        <path d="M4 22h16" />
        <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
        <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
        <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
    </svg>
);

interface PrestasiPageContentProps {
    pageData?: PrestasiPageData;
    achievements?: Achievement[];
}

export default function PrestasiPageContent({
    pageData = defaultPageData,
    achievements = defaultAchievements,
}: PrestasiPageContentProps) {
    const [heroRef, heroVisible] = useScrollAnimation<HTMLDivElement>();

    const activeAchievements = achievements.filter(a => a.isActive);

    return (
        <>
            {/* Hero Section */}
            <section style={styles.hero}>
                <Image
                    src={pageData.heroImage}
                    alt={pageData.heroTitle}
                    fill
                    style={{ objectFit: 'cover' }}
                    priority
                />
                <div style={styles.heroOverlay} />
                <div
                    ref={heroRef}
                    style={styles.heroContent}
                    className={`scroll-hidden scroll-fade-up ${heroVisible ? 'scroll-visible' : ''}`}
                >
                    <h1 style={styles.heroTitle}>{pageData.heroTitle}</h1>
                    <p style={styles.heroSubtitle}>{pageData.heroSubtitle}</p>
                </div>
            </section>

            {/* Achievements Section */}
            <section style={styles.section}>
                <div style={styles.container}>
                    {activeAchievements.map((achievement, index) => {
                        const isEven = index % 2 === 0;

                        return (
                            <div
                                key={achievement.id}
                                style={isEven ? styles.achievementCard : styles.achievementCardReverse}
                                className="achievement-card"
                            >
                                {/* Image - Left for even, Right for odd */}
                                {isEven && (
                                    <div style={styles.imageWrapper}>
                                        <Image
                                            src={achievement.imageUrl}
                                            alt={achievement.title}
                                            fill
                                            style={{ objectFit: 'cover' }}
                                        />
                                    </div>
                                )}

                                {/* Content */}
                                <div style={styles.content}>
                                    <div style={styles.titleWrapper}>
                                        <div style={styles.iconWrapper}>
                                            <TrophyIcon />
                                        </div>
                                        <h3 style={styles.title}>{achievement.title}</h3>
                                    </div>

                                    <p style={styles.description}>{achievement.description}</p>

                                    <div>
                                        <div style={styles.highlightsTitle}>Lorem ipsum:</div>
                                        <ul style={styles.highlightsList}>
                                            {achievement.highlights.map((highlight, i) => (
                                                <li key={i} style={styles.highlightItem}>
                                                    <CheckIcon />
                                                    <span>{highlight}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                {/* Image - Right for odd */}
                                {!isEven && (
                                    <div style={styles.imageWrapper}>
                                        <Image
                                            src={achievement.imageUrl}
                                            alt={achievement.title}
                                            fill
                                            style={{ objectFit: 'cover' }}
                                        />
                                    </div>
                                )}
                            </div>
                        );
                    })}

                    {/* CTA Banner */}
                    <div style={styles.ctaBanner}>
                        <Image
                            src={pageData.ctaBannerImage}
                            alt={pageData.ctaBannerTitle}
                            fill
                            style={{ objectFit: 'cover' }}
                        />
                        <div style={styles.ctaOverlay}>
                            <h2 style={styles.ctaTitle}>{pageData.ctaBannerTitle}</h2>
                            <p style={styles.ctaSubtitle}>{pageData.ctaBannerSubtitle}</p>
                        </div>
                    </div>

                    {/* Join Banner */}
                    <div style={styles.joinBanner}>
                        <h2 style={styles.joinTitle}>{pageData.joinBannerTitle}</h2>
                        <p style={styles.joinSubtitle}>{pageData.joinBannerSubtitle}</p>
                    </div>
                </div>
            </section>

            {/* Mobile responsive styles */}
            <style jsx global>{`
        @media (max-width: 768px) {
          .achievement-card {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
        </>
    );
}
