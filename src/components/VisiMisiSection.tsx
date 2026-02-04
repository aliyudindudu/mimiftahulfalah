'use client';

import { useScrollAnimation } from '@/hooks/useScrollAnimation';

// Interface untuk Visi Misi data
interface VisiMisiData {
    visi: {
        title: string;
        content: string;
        showOnHomepage: boolean;
    };
    misi: {
        title: string;
        items: string[];
        showOnHomepage: boolean;
    };
}

// Default data (placeholder - nanti dari database)
const defaultVisiMisiData: VisiMisiData = {
    visi: {
        title: 'Visi',
        content: 'Terwujudnya peserta didik yang beriman, berakhlak mulia, cerdas, berprestasi, dan berwawasan global berlandaskan nilai-nilai Islam.',
        showOnHomepage: true,
    },
    misi: {
        title: 'Misi',
        items: [
            'Menyelenggarakan pendidikan yang berlandaskan Al-Qur\'an dan As-Sunnah untuk membentuk karakter islami.',
            'Meningkatkan kualitas pembelajaran yang aktif, kreatif, inovatif, dan menyenangkan.',
            'Mengembangkan potensi akademik dan non-akademik peserta didik secara optimal.',
            'Menanamkan disiplin, tanggung jawab, dan kepedulian sosial sejak dini.',
            'Mewujudkan lingkungan madrasah yang aman, nyaman, bersih, dan religius.',
        ],
        showOnHomepage: true,
    },
};

interface VisiMisiSectionProps {
    data?: VisiMisiData;
}

// Inline styles untuk memastikan styling berfungsi
const styles = {
    section: {
        padding: '3rem 1.5rem',
        backgroundColor: '#f9fafb',
    },
    container: {
        maxWidth: '1000px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '2rem',
    },
    visiCard: {
        background: 'linear-gradient(135deg, #86efac 0%, #8dfd60ff 100%)',
        borderRadius: '1rem',
        padding: '2rem 1.5rem',
        position: 'relative' as const,
        overflow: 'hidden' as const,
        minHeight: '220px',
        boxShadow: '0 10px 30px rgba(74, 222, 128, 0.25)',
        transition: 'transform 0.3s ease',
    },
    misiCard: {
        background: 'linear-gradient(135deg, #86efac 0%, #8dfd60ff 100%)',
        borderRadius: '1rem',
        padding: '2rem 1.5rem',
        position: 'relative' as const,
        overflow: 'hidden' as const,
        minHeight: '220px',
        boxShadow: '0 10px 30px rgba(253, 224, 71, 0.25)',
        transition: 'transform 0.3s ease',
    },
    visiTitle: {
        fontSize: '1.5rem',
        fontWeight: 700,
        color: '#104929ff',
        marginBottom: '1rem',
    },
    misiTitle: {
        fontSize: '1.5rem',
        fontWeight: 700,
        color: '#104929ff',
        marginBottom: '1rem',
    },
    visiContent: {
        fontSize: '0.9375rem',
        color: '#14532d',
        lineHeight: 1.7,
    },
    misiList: {
        listStyle: 'decimal',
        paddingLeft: '1.25rem',
        margin: 0,
    },
    misiItem: {
        fontSize: '0.875rem',
        color: '#78350f',
        lineHeight: 1.6,
        marginBottom: '0.5rem',
    },
    decorCircle: {
        position: 'absolute' as const,
        top: '-30px',
        right: '-30px',
        width: '100px',
        height: '100px',
        background: 'rgba(255, 255, 255, 0.2)',
        borderRadius: '50%',
    },
};

export default function VisiMisiSection({ data = defaultVisiMisiData }: VisiMisiSectionProps) {
    const [visiRef, visiVisible] = useScrollAnimation<HTMLDivElement>();
    const [misiRef, misiVisible] = useScrollAnimation<HTMLDivElement>();

    // haloooooooo i was here
    if (!data.visi.showOnHomepage && !data.misi.showOnHomepage) {
        return null;
    }

    return (
        <div style={styles.section}>
            <div style={styles.container}>
                {/* Visi Card */}
                {data.visi.showOnHomepage && (
                    <div
                        ref={visiRef}
                        className={`scroll-hidden scroll-fade-left ${visiVisible ? 'scroll-visible' : ''}`}
                    >
                        <div style={styles.visiCard}>
                            <div style={styles.decorCircle}></div>
                            <h3 style={styles.visiTitle}>{data.visi.title}</h3>
                            <p style={styles.visiContent}>{data.visi.content}</p>
                        </div>
                    </div>
                )}

                {/* Misi Card */}
                {data.misi.showOnHomepage && (
                    <div
                        ref={misiRef}
                        className={`scroll-hidden scroll-fade-right ${misiVisible ? 'scroll-visible' : ''}`}
                    >
                        <div style={styles.misiCard}>
                            <h3 style={styles.misiTitle}>{data.misi.title}</h3>
                            <ol style={styles.misiList}>
                                {data.misi.items.map((item, index) => (
                                    <li key={index} style={styles.misiItem}>{item}</li>
                                ))}
                            </ol>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
