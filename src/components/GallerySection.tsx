'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

// Interface untuk Gallery item
interface GalleryItem {
    id: string;
    imageUrl: string;
    title: string;
    showOnHomepage: boolean;
}

// Interface untuk Section data
interface GallerySectionData {
    title: string;
    description: string;
    ctaText: string;
    ctaLink: string;
    showOnHomepage: boolean;
}

// Default section data
const defaultSectionData: GallerySectionData = {
    title: 'Galeri Kegiatan Sekolah',
    description: 'Galeri ini menampilkan berbagai dokumentasi kegiatan yang dilaksanakan di MI Miftahul Falah, sebagai bentuk transparansi, apresiasi, serta kenangan berharga dalam perjalanan pendidikan siswa.',
    ctaText: 'Selengkapnya',
    ctaLink: '/galeri',
    showOnHomepage: true,
};

// Default gallery items (nanti dari database - halaman galeri)
const defaultGalleryItems: GalleryItem[] = [
    { id: '1', imageUrl: '/hero-image1.jpeg', title: 'Kegiatan Pramuka', showOnHomepage: true },
    { id: '2', imageUrl: '/second-hero-image2.jpeg', title: 'Pembelajaran di Kelas', showOnHomepage: true },
    { id: '3', imageUrl: '/hero-image1.jpeg', title: 'Kegiatan Olahraga', showOnHomepage: true },
    { id: '4', imageUrl: '/second-hero-image2.jpeg', title: 'Upacara Bendera', showOnHomepage: true },
    { id: '5', imageUrl: '/hero-image1.jpeg', title: 'Lomba Antar Sekolah', showOnHomepage: true },
    { id: '6', imageUrl: '/second-hero-image2.jpeg', title: 'Festival Kegiatan', showOnHomepage: true },
];

// Inline styles
const styles = {
    section: {
        padding: '4rem 1.5rem',
        backgroundColor: '#f0fdf4',
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
        maxWidth: '700px',
        margin: '0 auto',
    },
    grid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '1rem',
        marginBottom: '2.5rem',
    },
    imageWrapper: {
        position: 'relative' as const,
        borderRadius: '1rem',
        overflow: 'hidden',
        aspectRatio: '4/3',
        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
    },
    image: {
        objectFit: 'cover' as const,
        transition: 'transform 0.3s ease',
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

// Mobile styles (will be applied conditionally)
const mobileGridStyle = {
    gridTemplateColumns: 'repeat(2, 1fr)',
};

interface GallerySectionProps {
    sectionData?: GallerySectionData;
    galleryItems?: GalleryItem[];
}

export default function GallerySection({
    sectionData = defaultSectionData,
    galleryItems = defaultGalleryItems,
}: GallerySectionProps) {
    const [headerRef, headerVisible] = useScrollAnimation<HTMLDivElement>();
    const [gridRef, gridVisible] = useScrollAnimation<HTMLDivElement>();
    const [ctaRef, ctaVisible] = useScrollAnimation<HTMLDivElement>();

    if (!sectionData.showOnHomepage) {
        return null;
    }

    const visibleItems = galleryItems.filter(item => item.showOnHomepage).slice(0, 6);

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

                {/* Gallery Grid */}
                <div
                    ref={gridRef}
                    style={styles.grid}
                    className={`gallery-grid scroll-hidden scroll-fade-up ${gridVisible ? 'scroll-visible' : ''}`}
                >
                    {visibleItems.map((item, index) => (
                        <div
                            key={item.id}
                            style={styles.imageWrapper}
                            className={`gallery-item scroll-delay-${index + 1}`}
                        >
                            <Image
                                src={item.imageUrl}
                                alt={item.title}
                                fill
                                style={styles.image}
                            />
                        </div>
                    ))}
                </div>

                {/* CTA Button */}
                <div
                    ref={ctaRef}
                    style={styles.ctaWrapper}
                    className={`scroll-hidden scroll-fade-up ${ctaVisible ? 'scroll-visible' : ''}`}
                >
                    <Link href={sectionData.ctaLink} style={styles.ctaButton}>
                        {sectionData.ctaText}
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </Link>
                </div>
            </div>

            {/* Mobile responsive styles */}
            <style jsx global>{`
        @media (max-width: 768px) {
          .gallery-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
        </section>
    );
}
