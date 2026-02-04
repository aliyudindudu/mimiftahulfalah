'use client';

import Image from 'next/image';
import Link from 'next/link';

// Interface untuk Footer data
interface FooterData {
    schoolName: string;
    tagline: string;
    logoUrl: string;
    menuLinks: { label: string; href: string }[];
    contact: {
        address: string;
        city: string;
        phone: string;
        email: string;
    };
    socialLinks: {
        facebook?: string;
        instagram?: string;
        youtube?: string;
        email?: string;
    };
    copyright: string;
}

// Default footer data
const defaultFooterData: FooterData = {
    schoolName: 'MI MIFTAHUL FALAH',
    tagline: 'Membentuk Generasi Qurani Yang Cerdas, Terampil, Dan Berakhlakul Karimah.',
    logoUrl: '/logo.png',
    menuLinks: [
        { label: 'Beranda', href: '/' },
        { label: 'Profil', href: '/profil' },
        { label: 'Prestasi', href: '/prestasi' },
        { label: 'Galeri', href: '/galeri' },
        { label: 'Kontak', href: '/kontak' },
    ],
    contact: {
        address: 'Jl. Cikaramas Jingkang',
        city: 'Sumedang, Jawa Barat, Indonesia',
        phone: '+62 812-3456-7890',
        email: 'info@mimiftahulfalah.sch.id',
    },
    socialLinks: {
        facebook: 'https://facebook.com/mimiftahulfalah',
        instagram: 'https://instagram.com/mimiftahulfalah',
        youtube: 'https://youtube.com/@mimiftahulfalah',
        email: 'mailto:info@mimiftahulfalah.sch.id',
    },
    copyright: '© 2026 MI Miftahul Falah. All Rights Reserved.',
};

// Social icons
const socialIcons = {
    facebook: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </svg>
    ),
    instagram: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
        </svg>
    ),
    youtube: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
        </svg>
    ),
    email: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect width="20" height="16" x="2" y="4" rx="2" />
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
    ),
};

// Inline styles
const styles = {
    footer: {
        backgroundColor: '#15803d',
        color: '#ffffff',
        padding: '3rem 1.5rem 1.5rem',
    },
    container: {
        maxWidth: '1200px',
        margin: '0 auto',
    },
    grid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '2rem',
        marginBottom: '2rem',
    },
    logoSection: {
        display: 'flex',
        flexDirection: 'column' as const,
        gap: '1rem',
    },
    logoWrapper: {
        display: 'flex',
        alignItems: 'center',
        gap: '0.75rem',
    },
    logoImage: {
        width: '48px',
        height: '48px',
        borderRadius: '50%',
        overflow: 'hidden',
        backgroundColor: '#ffffff',
    },
    schoolName: {
        fontSize: '1.125rem',
        fontWeight: 700,
        color: '#ffffff',
    },
    tagline: {
        fontSize: '0.875rem',
        color: 'rgba(255,255,255,0.85)',
        lineHeight: 1.6,
    },
    sectionTitle: {
        fontSize: '1rem',
        fontWeight: 700,
        color: '#ffffff',
        marginBottom: '1rem',
    },
    menuList: {
        listStyle: 'none',
        padding: 0,
        margin: 0,
        display: 'flex',
        flexDirection: 'column' as const,
        gap: '0.5rem',
    },
    menuLink: {
        fontSize: '0.875rem',
        color: 'rgba(255,255,255,0.85)',
        textDecoration: 'none',
        transition: 'color 0.2s ease',
    },
    contactList: {
        listStyle: 'disc',
        paddingLeft: '1.25rem',
        margin: 0,
        display: 'flex',
        flexDirection: 'column' as const,
        gap: '0.5rem',
    },
    contactItem: {
        fontSize: '0.875rem',
        color: 'rgba(255,255,255,0.85)',
        lineHeight: 1.5,
    },
    contactLink: {
        color: 'rgba(255,255,255,0.85)',
        textDecoration: 'none',
    },
    socialLinks: {
        display: 'flex',
        gap: '0.75rem',
    },
    socialIcon: {
        width: '36px',
        height: '36px',
        borderRadius: '50%',
        backgroundColor: 'rgba(255,255,255,0.15)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#ffffff',
        textDecoration: 'none',
        transition: 'background-color 0.2s ease',
    },
    divider: {
        borderTop: '1px solid rgba(255,255,255,0.2)',
        paddingTop: '1rem',
        textAlign: 'center' as const,
    },
    copyright: {
        fontSize: '0.8125rem',
        color: 'rgba(255,255,255,0.7)',
    },
};

interface FooterProps {
    data?: FooterData;
}

export default function Footer({ data = defaultFooterData }: FooterProps) {
    return (
        <footer style={styles.footer}>
            <div style={styles.container}>
                {/* Main Grid */}
                <div style={styles.grid} className="footer-grid">
                    {/* Logo & Tagline */}
                    <div style={styles.logoSection}>
                        <div style={styles.logoWrapper}>
                            <div style={styles.logoImage}>
                                <Image
                                    src={data.logoUrl}
                                    alt={data.schoolName}
                                    width={48}
                                    height={48}
                                    style={{ objectFit: 'cover' }}
                                />
                            </div>
                            <span style={styles.schoolName}>{data.schoolName}</span>
                        </div>
                        <p style={styles.tagline}>{data.tagline}</p>
                    </div>

                    {/* Menu Links */}
                    <div>
                        <h4 style={styles.sectionTitle}>Menu</h4>
                        <ul style={styles.menuList}>
                            {data.menuLinks.map((link, index) => (
                                <li key={index}>
                                    <Link href={link.href} style={styles.menuLink}>
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 style={styles.sectionTitle}>Kontak</h4>
                        <ul style={styles.contactList}>
                            <li style={styles.contactItem}>{data.contact.address}</li>
                            <li style={styles.contactItem}>{data.contact.city}</li>
                            <li style={styles.contactItem}>{data.contact.phone}</li>
                            <li style={styles.contactItem}>
                                <a href={`mailto:${data.contact.email}`} style={styles.contactLink}>
                                    {data.contact.email}
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Social Media */}
                    <div>
                        <h4 style={styles.sectionTitle}>Media Sosial</h4>
                        <div style={styles.socialLinks}>
                            {data.socialLinks.facebook && (
                                <a href={data.socialLinks.facebook} style={styles.socialIcon} target="_blank" rel="noopener noreferrer">
                                    {socialIcons.facebook}
                                </a>
                            )}
                            {data.socialLinks.instagram && (
                                <a href={data.socialLinks.instagram} style={styles.socialIcon} target="_blank" rel="noopener noreferrer">
                                    {socialIcons.instagram}
                                </a>
                            )}
                            {data.socialLinks.youtube && (
                                <a href={data.socialLinks.youtube} style={styles.socialIcon} target="_blank" rel="noopener noreferrer">
                                    {socialIcons.youtube}
                                </a>
                            )}
                            {data.socialLinks.email && (
                                <a href={data.socialLinks.email} style={styles.socialIcon}>
                                    {socialIcons.email}
                                </a>
                            )}
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div style={styles.divider}>
                    <p style={styles.copyright}>{data.copyright}</p>
                </div>
            </div>

            {/* Mobile responsive styles */}
            <style jsx global>{`
        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 480px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
        </footer>
    );
}
