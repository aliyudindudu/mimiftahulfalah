'use client';

import Image from 'next/image';

// Interface untuk hero data
interface ProfileHeroData {
    title: string;
    subtitle: string;
    backgroundImage: string;
}

// Default data
const defaultHeroData: ProfileHeroData = {
    title: 'Tentang Kami',
    subtitle: 'MI Miftahul Falah - Mencetak Generasi Islami dan Berprestasi',
    backgroundImage: '/hero-image1.jpeg',
};

// Inline styles
const styles = {
    hero: {
        position: 'relative' as const,
        height: '280px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
    },
    background: {
        position: 'absolute' as const,
        inset: 0,
        zIndex: 0,
    },
    overlay: {
        position: 'absolute' as const,
        inset: 0,
        background: 'linear-gradient(135deg, rgba(22, 101, 52, 0.9) 0%, rgba(21, 128, 61, 0.85) 100%)',
        zIndex: 1,
    },
    content: {
        position: 'relative' as const,
        zIndex: 2,
        textAlign: 'center' as const,
        color: '#ffffff',
        padding: '0 1.5rem',
    },
    title: {
        fontSize: '2.5rem',
        fontWeight: 700,
        marginBottom: '0.75rem',
    },
    subtitle: {
        fontSize: '1.125rem',
        opacity: 0.9,
        maxWidth: '600px',
        margin: '0 auto',
    },
};

interface ProfileHeroProps {
    data?: ProfileHeroData;
}

export default function ProfileHero({ data = defaultHeroData }: ProfileHeroProps) {
    return (
        <section style={styles.hero}>
            <div style={styles.background}>
                <Image
                    src={data.backgroundImage}
                    alt={data.title}
                    fill
                    style={{ objectFit: 'cover' }}
                    priority
                />
            </div>
            <div style={styles.overlay} />
            <div style={styles.content}>
                <h1 style={styles.title}>{data.title}</h1>
                <p style={styles.subtitle}>{data.subtitle}</p>
            </div>
        </section>
    );
}
