'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

// Interface untuk Contact Info
interface ContactInfo {
    address: string;
    city: string;
    phones: string[];
    emails: string[];
    hours: {
        weekday: string;
        saturday: string;
    };
}

// Interface untuk Section data
interface ContactSectionData {
    title: string;
    description: string;
    registrationTitle: string;
    registrationDescription: string;
    registrationButtonText: string;
    registrationLink: string;
}

// Default section data
const defaultSectionData: ContactSectionData = {
    title: 'Hubungi Kami',
    description: 'Tertarik untuk mendaftarkan putra-putri Anda? Hubungi kami untuk informasi lebih lanjut. Dan juga kirimkan pesan untuk masukkan Anda.',
    registrationTitle: 'Pendaftaran Siswa Baru',
    registrationDescription: 'Tahun Ajaran baru belum dibuka. Hubungi pihak sekolah untuk info lebih lanjut.',
    registrationButtonText: 'Informasi Pendaftaran',
    registrationLink: '/pendaftaran',
};

// Default contact info
const defaultContactInfo: ContactInfo = {
    address: 'Jl. Pendidikan No. 123',
    city: 'Kota Jakarta, Indonesia 12345',
    phones: ['+62 812-3456-7890', '+62 21-1234-5678'],
    emails: ['info@mimiftahulfalah.sch.id', 'pendaftaran@mimiftahulfalah.sch.id'],
    hours: {
        weekday: 'Senin - Jumat: 07:00 - 15:00',
        saturday: 'Sabtu: 07:00 - 12:00',
    },
};

// Icons
const icons = {
    location: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
            <circle cx="12" cy="10" r="3" />
        </svg>
    ),
    phone: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
    ),
    email: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect width="20" height="16" x="2" y="4" rx="2" />
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
    ),
    clock: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
        </svg>
    ),
};

// Inline styles
const styles = {
    section: {
        padding: '4rem 1.5rem',
        backgroundColor: '#ffffff',
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
    content: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '3rem',
    },
    leftColumn: {
        display: 'flex',
        flexDirection: 'column' as const,
        gap: '2rem',
    },
    contactInfo: {
        display: 'flex',
        flexDirection: 'column' as const,
        gap: '1rem',
    },
    contactTitle: {
        fontSize: '1.125rem',
        fontWeight: 700,
        color: '#1f2937',
        marginBottom: '0.5rem',
    },
    contactItem: {
        display: 'flex',
        alignItems: 'flex-start',
        gap: '0.75rem',
    },
    iconWrapper: {
        width: '36px',
        height: '36px',
        borderRadius: '50%',
        backgroundColor: '#dcfce7',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#16a34a',
        flexShrink: 0,
    },
    contactText: {
        fontSize: '0.9375rem',
        color: '#16a34a',
        lineHeight: 1.5,
    },
    registrationBox: {
        backgroundColor: '#f9fafb',
        borderRadius: '1rem',
        padding: '1.5rem',
        border: '1px solid #e5e7eb',
    },
    registrationTitle: {
        fontSize: '1rem',
        fontWeight: 700,
        color: '#16a34a',
        marginBottom: '0.5rem',
    },
    registrationDesc: {
        fontSize: '0.875rem',
        color: '#6b7280',
        marginBottom: '1rem',
        lineHeight: 1.6,
    },
    registrationButton: {
        display: 'block',
        width: '100%',
        padding: '0.875rem',
        backgroundColor: '#16a34a',
        color: '#ffffff',
        borderRadius: '9999px',
        fontWeight: 600,
        fontSize: '0.9375rem',
        textAlign: 'center' as const,
        textDecoration: 'none',
        transition: 'background-color 0.3s ease',
    },
    formCard: {
        backgroundColor: '#f0fdf4',
        borderRadius: '1rem',
        padding: '2rem',
    },
    formTitle: {
        fontSize: '1.125rem',
        fontWeight: 700,
        color: '#16a34a',
        marginBottom: '1.5rem',
    },
    formGroup: {
        marginBottom: '1rem',
    },
    label: {
        display: 'block',
        fontSize: '0.875rem',
        fontWeight: 600,
        color: '#374151',
        marginBottom: '0.5rem',
    },
    input: {
        width: '100%',
        padding: '0.75rem 1rem',
        border: '1px solid #d1d5db',
        borderRadius: '0.5rem',
        fontSize: '0.9375rem',
        outline: 'none',
        transition: 'border-color 0.2s ease',
    },
    textarea: {
        width: '100%',
        padding: '0.75rem 1rem',
        border: '1px solid #d1d5db',
        borderRadius: '0.5rem',
        fontSize: '0.9375rem',
        outline: 'none',
        resize: 'vertical' as const,
        minHeight: '100px',
    },
    submitButton: {
        width: '100%',
        padding: '0.875rem',
        backgroundColor: '#16a34a',
        color: '#ffffff',
        border: 'none',
        borderRadius: '9999px',
        fontWeight: 600,
        fontSize: '0.9375rem',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease',
    },
};

interface ContactSectionProps {
    sectionData?: ContactSectionData;
    contactInfo?: ContactInfo;
}

export default function ContactSection({
    sectionData = defaultSectionData,
    contactInfo = defaultContactInfo,
}: ContactSectionProps) {
    const [headerRef, headerVisible] = useScrollAnimation<HTMLDivElement>();
    const [contentRef, contentVisible] = useScrollAnimation<HTMLDivElement>();

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // TODO: Implement actual form submission to API
        // POST to /api/contact with formData
        // Data will be saved to database and shown in admin panel

        await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API call

        setIsSubmitting(false);
        setSubmitted(true);
        setFormData({ name: '', email: '', phone: '', message: '' });

        setTimeout(() => setSubmitted(false), 3000);
    };

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

                {/* Content */}
                <div
                    ref={contentRef}
                    style={styles.content}
                    className={`contact-content scroll-hidden scroll-fade-up ${contentVisible ? 'scroll-visible' : ''}`}
                >
                    {/* Left Column - Contact Info */}
                    <div style={styles.leftColumn}>
                        <div style={styles.contactInfo}>
                            <h3 style={styles.contactTitle}>Informasi Kontak</h3>

                            {/* Address */}
                            <div style={styles.contactItem}>
                                <div style={styles.iconWrapper}>{icons.location}</div>
                                <div style={styles.contactText}>
                                    {contactInfo.address}<br />{contactInfo.city}
                                </div>
                            </div>

                            {/* Phones */}
                            <div style={styles.contactItem}>
                                <div style={styles.iconWrapper}>{icons.phone}</div>
                                <div style={styles.contactText}>
                                    {contactInfo.phones.map((phone, i) => (
                                        <span key={i}>{phone}{i < contactInfo.phones.length - 1 && <br />}</span>
                                    ))}
                                </div>
                            </div>

                            {/* Emails */}
                            <div style={styles.contactItem}>
                                <div style={styles.iconWrapper}>{icons.email}</div>
                                <div style={styles.contactText}>
                                    {contactInfo.emails.map((email, i) => (
                                        <span key={i}>{email}{i < contactInfo.emails.length - 1 && <br />}</span>
                                    ))}
                                </div>
                            </div>

                            {/* Hours */}
                            <div style={styles.contactItem}>
                                <div style={styles.iconWrapper}>{icons.clock}</div>
                                <div style={styles.contactText}>
                                    {contactInfo.hours.weekday}<br />{contactInfo.hours.saturday}
                                </div>
                            </div>
                        </div>

                        {/* Registration Box */}
                        <div style={styles.registrationBox}>
                            <h4 style={styles.registrationTitle}>{sectionData.registrationTitle}</h4>
                            <p style={styles.registrationDesc}>{sectionData.registrationDescription}</p>
                            <Link href={sectionData.registrationLink} style={styles.registrationButton}>
                                {sectionData.registrationButtonText}
                            </Link>
                        </div>
                    </div>

                    {/* Right Column - Form */}
                    <div style={styles.formCard}>
                        <h3 style={styles.formTitle}>Kirim Pesan</h3>
                        <form onSubmit={handleSubmit}>
                            <div style={styles.formGroup}>
                                <label style={styles.label}>Nama Lengkap</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Masukkan Nama Lengkap"
                                    style={styles.input}
                                    required
                                />
                            </div>
                            <div style={styles.formGroup}>
                                <label style={styles.label}>Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="email@example.com"
                                    style={styles.input}
                                    required
                                />
                            </div>
                            <div style={styles.formGroup}>
                                <label style={styles.label}>Nomer Telepon</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="08xxxxxxxxxx"
                                    style={styles.input}
                                    required
                                />
                            </div>
                            <div style={styles.formGroup}>
                                <label style={styles.label}>Pesan</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Tulis pesan Anda disini"
                                    style={styles.textarea}
                                    required
                                />
                            </div>
                            <button
                                type="submit"
                                style={{
                                    ...styles.submitButton,
                                    opacity: isSubmitting ? 0.7 : 1,
                                }}
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? 'Mengirim...' : submitted ? '✓ Terkirim!' : 'Kirim Pesan'}
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            {/* Mobile responsive styles */}
            <style jsx global>{`
        @media (max-width: 768px) {
          .contact-content {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
        </section>
    );
}
