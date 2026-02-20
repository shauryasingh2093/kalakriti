"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
    { name: 'Marketplace', href: '/marketplace' },
    { name: 'Community', href: '/community' },
    { name: 'Workshops', href: '/workshops' },
];

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [activeLink, setActiveLink] = useState('');

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                zIndex: 1000,
                padding: isScrolled ? '20px 80px' : '40px 80px',
                background: isScrolled ? 'rgba(250, 248, 242, 0.85)' : 'transparent',
                backdropFilter: isScrolled ? 'blur(20px)' : 'none',
                WebkitBackdropFilter: isScrolled ? 'blur(20px)' : 'none',
                transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                borderBottom: isScrolled ? '1px solid rgba(0,0,0,0.05)' : 'none'
            }}
        >
            <Link href="/" style={{
                fontSize: '1.4rem',
                fontWeight: 700,
                fontFamily: 'var(--font-playfair)',
                letterSpacing: '-0.04em',
                textDecoration: 'none',
                color: isScrolled ? 'var(--color-charcoal)' : '#FFFFFF',
                textTransform: 'lowercase',
                opacity: 0.9,
                transition: 'color 0.8s ease'
            }}>
                kalakriti
            </Link>

            {/* Desktop Nav - High-End Product Grade */}
            <div style={{ display: 'flex', gap: '48px', alignItems: 'center' }} className="desktop-nav">
                {navLinks.map((link) => (
                    <Link
                        key={link.name}
                        href={link.href}
                        onMouseEnter={() => setActiveLink(link.name)}
                        onMouseLeave={() => setActiveLink('')}
                        style={{
                            fontSize: '0.75rem',
                            fontWeight: 700,
                            textTransform: 'uppercase',
                            letterSpacing: '0.25em',
                            color: isScrolled ? 'var(--color-charcoal)' : '#FFFFFF',
                            textDecoration: 'none',
                            opacity: isScrolled ? 0.6 : 0.8,
                            transition: 'all 0.6s var(--ease-out-expo)',
                            position: 'relative',
                            padding: '8px 0'
                        }}
                    >
                        {link.name}
                        {/* Hover Reveal Underline */}
                        <motion.div
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: activeLink === link.name ? 1 : 0 }}
                            style={{
                                position: 'absolute',
                                bottom: 0,
                                left: 0,
                                right: 0,
                                height: '1.5px',
                                background: isScrolled ? 'var(--color-terracotta)' : 'white',
                                originX: 0,
                                transformOrigin: 'left'
                            }}
                        />
                    </Link>
                ))}

                {/* Login Pill Button */}
                <Link href="/auth" className="btn-terracotta-pill" style={{ marginLeft: '20px' }}>
                    Join the Collective
                </Link>
            </div>

            {/* Mobile Toggle - Minimalist */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                style={{
                    display: 'none', // Will be hidden on desktop via CSS
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    color: isScrolled ? 'var(--color-charcoal)' : '#FFFFFF',
                    padding: '10px'
                }}
                className="mobile-nav-toggle"
            >
                <div style={{ width: '24px', height: '1.5px', background: 'currentColor', marginBottom: '6px', transition: '0.3s', transform: isOpen ? 'translateY(7.5px) rotate(45deg)' : 'none' }}></div>
                <div style={{ width: '24px', height: '1.5px', background: 'currentColor', transition: '0.3s', opacity: isOpen ? 0 : 1 }}></div>
                <div style={{ width: '24px', height: '1.5px', background: 'currentColor', marginTop: '6px', transition: '0.3s', transform: isOpen ? 'translateY(-7.5px) rotate(-45deg)' : 'none' }}></div>
            </button>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        style={{
                            position: 'absolute',
                            top: '100%',
                            left: 0,
                            right: 0,
                            background: '#FAF8F2',
                            padding: '40px 80px',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '30px',
                            zIndex: 999,
                            boxShadow: '0 40px 80px rgba(0,0,0,0.1)'
                        }}
                    >
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                style={{ fontSize: '1.5rem', fontWeight: 400, color: 'var(--color-charcoal)', textDecoration: 'none', fontFamily: 'var(--font-playfair)' }}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>

            <style jsx>{`
                @media (max-width: 1024px) {
                    .desktop-nav { display: none; }
                    .mobile-nav-toggle { display: block !important; }
                }
            `}</style>
        </nav>
    );
}
