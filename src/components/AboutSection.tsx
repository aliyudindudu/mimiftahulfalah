'use client';

import Image from 'next/image';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

// Interface untuk Section header
interface AboutHeaderData {
    title: string;
    description: string;
}

// Interface untuk subsection
interface AboutSubsectionData {
    id: string;
    sectionKey: string;
    title: string;
    content: string;
    imageUrl: string;
    imageAlt: string;
}

// Default header data
const defaultHeader: AboutHeaderData = {
    title: 'Tentang MI Miftahul Falah',
    description: 'Temukan informasi terkini seputar kegiatan, prestasi, dan update terbaru sekolah kami.',
};

// Default subsection data - Sejarah Singkat
const defaultHistory: AboutSubsectionData = {
    id: '1',
    sectionKey: 'history',
    title: 'Sejarah Singkat Sekolah',
    content: `Madrasah Ibtidaiyah (MI) Miftahul Falah Cikaramas berlokasi di samping jalan raya Desa Cikaramas, Kecamatan Tanjungmedar, Kabupaten Sumedang, dengan letak strategis dan mudah diakses masyarakat. Seiring perkembangan kebutuhan pendidikan, madrasah ini memperoleh legalitas sebagai lembaga pendidikan formal swasta di bawah binaan Persyarikatan Muhammadiyah.

MI Miftahul Falah Cikaramas resmi menyelenggarakan pendidikan dasar setelah mendapatkan izin operasional dari Kementerian Agama Republik Indonesia Nomor 521/SKP-IO/2018 pada 19 Desember 2018. Sejak itu, madrasah berkomitmen memberikan layanan pendidikan berkualitas yang berlandaskan nilai-nilai keislaman.

Pada tahun 2023, MI Miftahul Falah Cikaramas berhasil meraih akreditasi B dengan nilai 88 yang berlaku hingga 31 Desember 2028, sebagai bukti dedikasi dalam meningkatkan mutu dan daya saing pendidikan.`,
    imageUrl: '/hero-image1.jpeg',
    imageAlt: 'Suasana belajar di MI Miftahul Falah',
};

interface AboutSectionProps {
    header?: AboutHeaderData;
    history?: AboutSubsectionData;
}

export default function AboutSection({
    header = defaultHeader,
    history = defaultHistory
}: AboutSectionProps) {
    const [headerRef, headerVisible] = useScrollAnimation<HTMLDivElement>();
    const [contentRef, contentVisible] = useScrollAnimation<HTMLDivElement>();
    const [imageRef, imageVisible] = useScrollAnimation<HTMLDivElement>();

    return (
        <section className="about-section">
            {/* Section Header */}
            <div
                ref={headerRef}
                className={`about-header scroll-hidden scroll-fade-up ${headerVisible ? 'scroll-visible' : ''}`}
            >
                <h2 className="about-title">{header.title}</h2>
                <p className="about-description">{header.description}</p>
            </div>

            {/* Sejarah Singkat Sekolah - Full width layout */}
            <div className="about-history-wrapper">
                <div
                    ref={contentRef}
                    className={`about-history-content scroll-hidden scroll-fade-left ${contentVisible ? 'scroll-visible' : ''}`}
                >
                    <h3 className="about-history-title">{history.title}</h3>
                    <div className="about-history-text">
                        {history.content.split('\n\n').map((paragraph, index) => (
                            <p key={index}>{paragraph}</p>
                        ))}
                    </div>
                </div>

                {/* Single Photo - Flush to right edge */}
                <div
                    ref={imageRef}
                    className={`about-history-image scroll-hidden scroll-fade-right ${imageVisible ? 'scroll-visible' : ''}`}
                >
                    <Image
                        src={history.imageUrl}
                        alt={history.imageAlt}
                        width={1200}
                        height={800}
                        className="about-photo"
                        priority
                    />
                </div>
            </div>
        </section>
    );
}
