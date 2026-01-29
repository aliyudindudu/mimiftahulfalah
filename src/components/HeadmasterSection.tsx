'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

// Data interface untuk Headmaster Section (nanti diambil dari database)
interface HeadmasterData {
    title: string;
    name: string;
    position: string;
    greeting: string;
    message: string;
    photo: string;
    ctaPrimaryText: string;
    ctaPrimaryLink: string;
    ctaSecondaryText: string;
    ctaSecondaryLink: string;
}

// Default data (placeholder - nanti diganti dari database)
const defaultHeadmasterData: HeadmasterData = {
    title: 'Sambutan Kepala Sekolah',
    name: 'Dahri S.pd.i',
    position: 'Kepala Sekolah',
    greeting: 'Assalamualaikum Wr.Wb.',
    message: `Selamat datang di website resmi MI Miftahul Falah Cikaramas. Website ini kami hadirkan sebagai sarana informasi, komunikasi, dan publikasi berbagai kegiatan serta prestasi madrasah.

MI Miftahul Falah Cikaramas berkomitmen untuk menyelenggarakan pendidikan yang berkualitas dengan menyeimbangkan ilmu pengetahuan, nilai keislaman, dan pembentukan karakter peserta didik. Kami terus berupaya menciptakan lingkungan belajar yang aman, nyaman, dan inspiratif melalui kerja sama antara sekolah, orang tua, dan masyarakat.

Semoga website ini dapat memberikan manfaat dan menjadi jendela informasi bagi seluruh pengunjung.`,
    photo: '/headmaster-v3.png',
    ctaPrimaryText: 'Profil Lengkap',
    ctaPrimaryLink: '/profil',
    ctaSecondaryText: 'Struktur Organisasi',
    ctaSecondaryLink: '/struktur-organisasi',
};

interface HeadmasterSectionProps {
    data?: HeadmasterData;
}

export default function HeadmasterSection({ data = defaultHeadmasterData }: HeadmasterSectionProps) {
    const [photoRef, photoVisible] = useScrollAnimation<HTMLDivElement>();
    const [contentRef, contentVisible] = useScrollAnimation<HTMLDivElement>();

    return (
        <section className="headmaster">
            {/* Decorative elements */}
            <div className="headmaster-decor headmaster-decor-left"></div>
            <div className="headmaster-decor headmaster-decor-right"></div>

            <div className="headmaster-container">
                {/* Photo */}
                <div
                    ref={photoRef}
                    className={`headmaster-photo-wrapper scroll-hidden scroll-fade-left ${photoVisible ? 'scroll-visible' : ''}`}
                >
                    <Image
                        src={data.photo}
                        alt={data.name}
                        width={400}
                        height={500}
                        className="headmaster-photo"
                        priority
                    />
                </div>

                {/* Content */}
                <div
                    ref={contentRef}
                    className={`headmaster-content scroll-hidden scroll-fade-right ${contentVisible ? 'scroll-visible' : ''}`}
                >
                    <h2 className="headmaster-title">{data.title}</h2>
                    <h3 className="headmaster-name">{data.name}</h3>

                    <div className="headmaster-message-box">
                        <p className="headmaster-greeting">&quot;{data.greeting}</p>
                        {data.message.split('\n\n').map((paragraph, index) => (
                            <p key={index} className="headmaster-message-text">
                                {paragraph}
                            </p>
                        ))}
                        <p className="headmaster-closing">
                            Semoga website ini dapat memberikan manfaat dan menjadi jendela informasi bagi seluruh pengunjung.&quot;
                        </p>
                    </div>

                    <div className="headmaster-buttons">
                        <Link href={data.ctaPrimaryLink} className="headmaster-btn headmaster-btn-primary">
                            {data.ctaPrimaryText}
                        </Link>
                        <Link href={data.ctaSecondaryLink} className="headmaster-btn headmaster-btn-secondary">
                            {data.ctaSecondaryText}
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
