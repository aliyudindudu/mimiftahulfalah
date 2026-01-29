'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

interface NavItem {
    label: string;
    href: string;
}

const navItems: NavItem[] = [
    { label: 'Beranda', href: '/' },
    { label: 'Profil', href: '/profil' },
    { label: 'Prestasi', href: '/prestasi' },
    { label: 'Berita', href: '/berita' },
    { label: 'Galeri', href: '/galeri' },
    { label: 'Kontak', href: '/kontak' },
    { label: 'PPDB', href: '/ppdb' },
];

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="navbar">
            <div className="navbar-container">
                {/* Logo */}
                <Link href="/" className="navbar-logo">
                    <Image
                        src="/logo.png"
                        alt="MI Miftahul Falah"
                        width={48}
                        height={48}
                        className="navbar-logo-image"
                    />
                    <span className="navbar-logo-text">MI Miftahul Falah</span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="navbar-nav">
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="navbar-link"
                        >
                            {item.label}
                        </Link>
                    ))}
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="navbar-mobile-toggle"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle menu"
                >
                    <span className={`hamburger ${isMenuOpen ? 'active' : ''}`}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </span>
                </button>
            </div>

            {/* Mobile Navigation */}
            <nav className={`navbar-mobile ${isMenuOpen ? 'open' : ''}`}>
                {navItems.map((item) => (
                    <Link
                        key={item.href}
                        href={item.href}
                        className="navbar-mobile-link"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        {item.label}
                    </Link>
                ))}
            </nav>
        </header>
    );
}
