'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

// Data interface untuk Hero Section (nanti diambil dari database)
interface HeroData {
    subtitle: string;
    title: string;
    description: string;
    ctaPrimaryText: string;
    ctaPrimaryLink: string;
    ctaSecondaryText: string;
    ctaSecondaryLink: string;
    image: string;
    imageSecondary?: string;
}

// Default data (placeholder - nanti diganti dari database)
const defaultHeroData: HeroData = {
    subtitle: 'Sekolah Islam Terpadu',
    title: 'Membentuk Generasi Qur\'ani dan Berakhlak Mulia',
    description: 'MI Miftahul Falah mengintegrasikan pendidikan akademik dengan nilai-nilai Islam untuk membentuk generasi yang cerdas, berakhlak mulia, dan siap menghadapi tantangan masa depan.',
    ctaPrimaryText: 'Daftar Sekarang',
    ctaPrimaryLink: '/ppdb',
    ctaSecondaryText: 'Pelajari Lebih Lanjut',
    ctaSecondaryLink: '/profil',
    image: '/hero-image1.jpeg',
    imageSecondary: '/second-hero-image2.jpeg',
};

interface HeroSectionProps {
    data?: HeroData;
}

export default function HeroSection({ data = defaultHeroData }: HeroSectionProps) {
    // State untuk swap animasi gambar
    const [isSwapped, setIsSwapped] = useState(false);
    const [contentRef, contentVisible] = useScrollAnimation<HTMLDivElement>();
    const [imagesRef, imagesVisible] = useScrollAnimation<HTMLDivElement>();

    // Auto-swap setiap 5 detik
    useEffect(() => {
        const interval = setInterval(() => {
            setIsSwapped((prev) => !prev);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="hero">
            <div className="hero-container">
                {/* Left Content */}
                <div
                    ref={contentRef}
                    className={`hero-content scroll-hidden scroll-fade-left ${contentVisible ? 'scroll-visible' : ''}`}
                >
                    <span className="hero-subtitle">{data.subtitle}</span>
                    <h1 className="hero-title">{data.title}</h1>
                    <p className="hero-description">{data.description}</p>

                    <div className="hero-buttons">
                        <Link href={data.ctaPrimaryLink} className="hero-btn hero-btn-primary">
                            {data.ctaPrimaryText}
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </Link>
                        <Link href={data.ctaSecondaryLink} className="hero-btn hero-btn-secondary">
                            {data.ctaSecondaryText}
                        </Link>
                    </div>
                </div>

                {/* Right Images with Swap Animation */}
                <div
                    ref={imagesRef}
                    className={`hero-images scroll-hidden scroll-fade-right ${imagesVisible ? 'scroll-visible' : ''}`}
                >
                    <div className={`hero-image-wrapper hero-image-main ${isSwapped ? 'swapped' : ''}`}>
                        <Image
                            src={data.image}
                            alt="Siswa MI Miftahul Falah"
                            width={640}
                            height={360}
                            className="hero-image"
                            priority
                        />
                    </div>
                    {data.imageSecondary && (
                        <div className={`hero-image-wrapper hero-image-secondary ${isSwapped ? 'swapped' : ''}`}>
                            <Image
                                src={data.imageSecondary}
                                alt="Kegiatan Sekolah"
                                width={640}
                                height={360}
                                className="hero-image"
                            />
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
