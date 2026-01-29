'use client';

import Link from 'next/link';
import NewsCard from './NewsCard';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

// Interface untuk Section data
interface NewsSectionData {
    title: string;
    description: string;
    ctaText: string;
    ctaLink: string;
}

// Interface untuk News item
interface NewsItem {
    id: string;
    title: string;
    excerpt: string;
    featuredImage: string;
    category: {
        name: string;
        color: string;
    };
    publishedAt: string;
    slug: string;
}

// Default section data
const defaultSectionData: NewsSectionData = {
    title: 'Berita Terbaru & Artikel',
    description: 'Temukan informasi resmi sekolah, laporan kegiatan, prestasi siswa, serta artikel pendidikan sebagai media publikasi dan transparansi informasi.',
    ctaText: 'Selengkapnya',
    ctaLink: '/berita',
};

// Placeholder news data (nanti dari database)
const placeholderNews: NewsItem[] = [
    {
        id: '1',
        title: 'Serunya Kegiatan Pramuka MI Miftahul Falah Cikaramas dalam Membentuk Karakter Mandiri',
        excerpt: 'Kegiatan Pramuka dilaksanakan untuk melatih kedisiplinan, kemandirian, dan kerja sama siswa melalui berbagai aktivitas edukatif dan menyenangkan.',
        featuredImage: '/hero-image.jpeg',
        category: { name: 'Ekstrakurikuler', color: '#16a34a' },
        publishedAt: '2026-01-10',
        slug: 'kegiatan-pramuka-membentuk-karakter-mandiri',
    },
    {
        id: '2',
        title: 'Tim Sepak Bola MI Miftahul Falah Raih Juara dalam Turnamen Antar Sekolah',
        excerpt: 'Tim sepak bola MI Miftahul Falah Cikaramas berhasil meraih juara dalam turnamen antar sekolah berkat kerja sama dan semangat sportivitas.',
        featuredImage: '/second-hero-image.jpeg',
        category: { name: 'Perlombaan', color: '#0ea5e9' },
        publishedAt: '2026-01-01',
        slug: 'tim-sepak-bola-raih-juara',
    },
    {
        id: '3',
        title: 'Meningkatkan Keimanan Melalui Kegiatan Sholat Berjamaah di MI Miftahul Falah',
        excerpt: 'Tim sepak bola MI Miftahul Falah Cikaramas berhasil meraih juara dalam turnamen antar sekolah berkat kerja sama dan semangat sportivitas.',
        featuredImage: '/hero-image.jpeg',
        category: { name: 'Keagamaan', color: '#f59e0b' },
        publishedAt: '2025-12-28',
        slug: 'kegiatan-sholat-berjamaah',
    },
];

interface NewsSectionProps {
    sectionData?: NewsSectionData;
    news?: NewsItem[];
}

export default function NewsSection({
    sectionData = defaultSectionData,
    news = placeholderNews
}: NewsSectionProps) {
    const [headerRef, headerVisible] = useScrollAnimation<HTMLDivElement>();
    const [gridRef, gridVisible] = useScrollAnimation<HTMLDivElement>();
    const [ctaRef, ctaVisible] = useScrollAnimation<HTMLDivElement>();

    return (
        <section className="news-section">
            <div className="news-container">
                {/* Header */}
                <div
                    ref={headerRef}
                    className={`news-header scroll-hidden scroll-fade-up ${headerVisible ? 'scroll-visible' : ''}`}
                >
                    <h2 className="news-title">{sectionData.title}</h2>
                    <p className="news-description">{sectionData.description}</p>
                </div>

                {/* News Grid */}
                <div
                    ref={gridRef}
                    className={`news-grid scroll-hidden scroll-fade-up ${gridVisible ? 'scroll-visible' : ''}`}
                >
                    {news.map((item, index) => (
                        <div key={item.id} className={`scroll-delay-${index + 1}`}>
                            <NewsCard data={item} />
                        </div>
                    ))}
                </div>

                {/* CTA Button */}
                <div
                    ref={ctaRef}
                    className={`news-cta scroll-hidden scroll-fade-up ${ctaVisible ? 'scroll-visible' : ''}`}
                >
                    <Link href={sectionData.ctaLink} className="news-cta-button">
                        {sectionData.ctaText}
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </Link>
                </div>
            </div>
        </section>
    );
}
