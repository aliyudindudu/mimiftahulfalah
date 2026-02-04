'use client';

import Image from 'next/image';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

// Interface untuk Sejarah data
interface SejarahData {
    title: string;
    content: string;
    imageUrl: string;
    imageAlt: string;
}

// Default data (sama dengan landing page, tapi lebih lengkap)
const defaultSejarahData: SejarahData = {
    title: 'Sejarah Singkat',
    content: `Madrasah Ibtidaiyah (MI) Miftahul Falah Cikaramas berlokasi di samping jalan raya Desa Cikaramas, Kecamatan Tanjungmedar, Kabupaten Sumedang, dengan letak strategis dan mudah diakses oleh masyarakat sekitar. Seiring perkembangan kebutuhan pendidikan, madrasah ini memperoleh legalitas sebagai lembaga pendidikan formal swasta di bawah binaan Persyarikatan Muhammadiyah.

MI Miftahul Falah Cikaramas secara resmi menyelenggarakan pendidikan tingkat dasar setelah mendapatkan izin operasional dari Kementerian Agama Republik Indonesia Nomor 521/SKP-IO/2018 pada tanggal 19 Desember 2018. Sejak saat itu, madrasah ini berkomitmen memberikan layanan pendidikan yang berkualitas serta berlandaskan nilai-nilai keislaman.

Sesuai dengan peran, tanggung jawab dan misinya di bidang pendidikan, MI Miftahul Falah Cikaramas mengikuti proses akreditasi dan pada tahun 2023 berhasil meraih akreditasi B dengan bobot nilai 88 yang berlaku hingga 31 Desember 2028. Pencapaian ini merupakan bukti nyata dari dedikasi dan kerja keras seluruh warga madrasah dalam mengembangkan kualitas lembaga pendidikan yang unggul dan berdaya saing.`,
    imageUrl: '/hero-image1.jpeg',
    imageAlt: 'Suasana belajar di MI Miftahul Falah',
};

// Inline styles
const styles = {
    section: {
        padding: '4rem 1.5rem',
        backgroundColor: '#ffffff',
    },
    container: {
        maxWidth: '900px',
        margin: '0 auto',
    },
    title: {
        fontSize: '2rem',
        fontWeight: 700,
        color: '#1f2937',
        textAlign: 'center' as const,
        marginBottom: '2rem',
    },
    content: {
        display: 'flex',
        flexDirection: 'column' as const,
        gap: '2rem',
    },
    text: {
        fontSize: '1rem',
        color: '#4b5563',
        lineHeight: 1.8,
        textAlign: 'justify' as const,
    },
    paragraph: {
        marginBottom: '1.5rem',
    },
    imageWrapper: {
        position: 'relative' as const,
        width: '100%',
        height: '350px',
        borderRadius: '1rem',
        overflow: 'hidden',
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
    },
};

interface ProfileSejarahProps {
    data?: SejarahData;
}

export default function ProfileSejarah({ data = defaultSejarahData }: ProfileSejarahProps) {
    const [sectionRef, sectionVisible] = useScrollAnimation<HTMLDivElement>();

    return (
        <section style={styles.section}>
            <div
                ref={sectionRef}
                style={styles.container}
                className={`scroll-hidden scroll-fade-up ${sectionVisible ? 'scroll-visible' : ''}`}
            >
                <h2 style={styles.title}>{data.title}</h2>

                <div style={styles.content}>
                    {/* Text Content */}
                    <div style={styles.text}>
                        {data.content.split('\n\n').map((paragraph, index) => (
                            <p key={index} style={styles.paragraph}>{paragraph}</p>
                        ))}
                    </div>

                    {/* Image */}
                    <div style={styles.imageWrapper}>
                        <Image
                            src={data.imageUrl}
                            alt={data.imageAlt}
                            fill
                            style={{ objectFit: 'cover' }}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
