'use client';

import Image from 'next/image';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

// Interface untuk Facility
interface Facility {
    id: string;
    icon: 'classroom' | 'library' | 'sports' | 'mosque';
    title: string;
    description: string;
    imageUrl: string;
    showOnHomepage: boolean;
}

// Interface untuk Section data
interface FasilitasSectionData {
    title: string;
    description: string;
    showOnHomepage: boolean;
}

// Default section data
const defaultSectionData: FasilitasSectionData = {
    title: 'Fasilitas Sekolah',
    description: 'Kami menyediakan fasilitas yang lengkap dan modern untuk mendukung proses pembelajaran yang optimal.',
    showOnHomepage: true,
};

// Default facilities (nanti dari database - halaman profil)
const defaultFacilities: Facility[] = [
    {
        id: '1',
        icon: 'classroom',
        title: 'Ruang Kelas Nyaman',
        description: 'Ruang kelas bersih, rapih, dan kondusif untuk proses pembelajaran yang fokus dan menyenangkan.',
        imageUrl: '/hero-image1.jpeg',
        showOnHomepage: true,
    },
    {
        id: '2',
        icon: 'library',
        title: 'Perpustakaan Sekolah',
        description: 'Menyediakan berbagai koleksi buku pelajaran, bacaan islami, dan literasi untuk menumbuhkan minat baca siswa.',
        imageUrl: '/second-hero-image2.jpeg',
        showOnHomepage: true,
    },
    {
        id: '3',
        icon: 'sports',
        title: 'Lapangan Olahraga',
        description: 'Mendukung aktivitas olahraga, pramuka, dan kegiatan luar ruang lainnya.',
        imageUrl: '/hero-image1.jpeg',
        showOnHomepage: true,
    },
    {
        id: '4',
        icon: 'mosque',
        title: 'Mushola Sekolah',
        description: 'Digunakan untuk kegiatan ibadah, sholat berjamaah, dan pembinaan karakter islami siswa.',
        imageUrl: '/second-hero-image2.jpeg',
        showOnHomepage: true,
    },
];

// Icons
const icons = {
    classroom: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
    ),
    library: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
            <path d="M8 7h6" />
            <path d="M8 11h8" />
        </svg>
    ),
    sports: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
            <path d="M2 12h20" />
        </svg>
    ),
    mosque: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 21h18" />
            <path d="M5 21V7l7-4 7 4v14" />
            <path d="M9 21v-4a3 3 0 0 1 6 0v4" />
        </svg>
    ),
};

// Inline styles
const styles = {
    section: {
        padding: '4rem 1.5rem',
        backgroundColor: '#f9fafb',
    },
    container: {
        maxWidth: '1100px',
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
        maxWidth: '600px',
        margin: '0 auto',
    },
    grid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '1.5rem',
    },
    card: {
        position: 'relative' as const,
        borderRadius: '1rem',
        overflow: 'hidden',
        height: '280px',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
    },
    cardImage: {
        objectFit: 'cover' as const,
    },
    cardOverlay: {
        position: 'absolute' as const,
        inset: 0,
        background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.2) 100%)',
        display: 'flex',
        flexDirection: 'column' as const,
        justifyContent: 'flex-end',
        padding: '1.5rem',
    },
    cardHeader: {
        display: 'flex',
        alignItems: 'center',
        gap: '0.75rem',
        marginBottom: '0.5rem',
    },
    iconWrapper: {
        width: '40px',
        height: '40px',
        borderRadius: '50%',
        backgroundColor: '#16a34a',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#ffffff',
        flexShrink: 0,
    },
    cardTitle: {
        fontSize: '1.125rem',
        fontWeight: 700,
        color: '#ffffff',
    },
    cardDescription: {
        fontSize: '0.875rem',
        color: 'rgba(255,255,255,0.85)',
        lineHeight: 1.6,
    },
};

interface FasilitasSectionProps {
    sectionData?: FasilitasSectionData;
    facilities?: Facility[];
}

export default function FasilitasSection({
    sectionData = defaultSectionData,
    facilities = defaultFacilities,
}: FasilitasSectionProps) {
    const [headerRef, headerVisible] = useScrollAnimation<HTMLDivElement>();
    const [gridRef, gridVisible] = useScrollAnimation<HTMLDivElement>();

    if (!sectionData.showOnHomepage) {
        return null;
    }

    const visibleFacilities = facilities.filter(f => f.showOnHomepage);

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

                {/* Facility Cards */}
                <div
                    ref={gridRef}
                    style={styles.grid}
                    className={`scroll-hidden scroll-fade-up ${gridVisible ? 'scroll-visible' : ''}`}
                >
                    {visibleFacilities.map((facility, index) => (
                        <div
                            key={facility.id}
                            style={styles.card}
                            className={`scroll-delay-${index + 1}`}
                        >
                            <Image
                                src={facility.imageUrl}
                                alt={facility.title}
                                fill
                                style={styles.cardImage}
                            />
                            <div style={styles.cardOverlay}>
                                <div style={styles.cardHeader}>
                                    <div style={styles.iconWrapper}>
                                        {icons[facility.icon]}
                                    </div>
                                    <h3 style={styles.cardTitle}>{facility.title}</h3>
                                </div>
                                <p style={styles.cardDescription}>{facility.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
