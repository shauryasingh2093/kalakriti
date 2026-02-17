"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 100);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Marketplace", href: "/marketplace" },
        { name: "Community", href: "/community" },
        { name: "Workshops", href: "/workshops" },
    ];

    return (
        <nav
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                zIndex: 1000,
                padding: isScrolled ? '24px 80px' : '60px 80px',
                background: isScrolled ? 'rgba(250, 248, 242, 0.98)' : 'transparent',
                backdropFilter: isScrolled ? 'blur(40px)' : 'none',
                WebkitBackdropFilter: isScrolled ? 'blur(40px)' : 'none',
                transition: 'all 1.2s cubic-bezier(0.16, 1, 0.3, 1)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                borderBottom: isScrolled ? '1px solid rgba(0,0,0,0.03)' : 'none'
            }}
        >
            <Link href="/" style={{
                fontSize: '1.2rem',
                fontWeight: 700,
                fontFamily: 'var(--font-playfair)',
                letterSpacing: '-0.02em',
                textDecoration: 'none',
                color: isScrolled ? 'var(--color-charcoal)' : '#FFFFFF',
                textTransform: 'lowercase',
                opacity: 0.9,
                transition: 'color 0.8s ease'
            }}>
                kalakriti
            </Link>

            {/* Desktop Nav - Spectral Links */}
            <div style={{ display: 'flex', gap: '48px', alignItems: 'center' }} className="desktop-nav">
                {navLinks.map((link) => (
                    <Link
                        key={link.name}
                        href={link.href}
                        className="nav-link-masters"
                        style={{
                            fontSize: '0.7rem',
                            fontWeight: 700,
                            textTransform: 'uppercase',
                            letterSpacing: '0.2em',
                            color: isScrolled ? 'var(--color-charcoal)' : '#FFFFFF',
                            textDecoration: 'none',
                            opacity: isScrolled ? 0.6 : 0.8,
                            transition: 'var(--transition-premium)',
                        }}
                    >
                        {link.name}
                    </Link>
                ))}
                <Link href="/auth" style={{
                    fontSize: '0.7rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.2em',
                    color: 'var(--color-terracotta)',
                    textDecoration: 'none',
                    marginLeft: '20px'
                }}>
                    Login
                </Link>
            </div>

            {/* Ghost Mobile Toggle */}
            <button
                style={{ background: 'none', border: 'none', color: 'var(--color-charcoal)', cursor: 'pointer', display: 'none', opacity: 0.6 }}
                className="mobile-nav-toggle"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
                {isMobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>

            {/* Minimalist Slide Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        style={{
                            position: 'fixed',
                            top: '100px',
                            right: '40px',
                            background: 'white',
                            padding: '40px',
                            borderRadius: '24px',
                            boxShadow: '0 40px 100px rgba(0,0,0,0.05)',
                            minWidth: '240px'
                        }}
                    >
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', textAlign: 'right' }}>
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    style={{ fontSize: '0.75rem', fontWeight: 700, textDecoration: 'none', color: 'var(--color-charcoal)', textTransform: 'uppercase', letterSpacing: '0.2em', opacity: 0.6 }}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <style jsx>{`
                @media (max-width: 1024px) {
                    .desktop-nav { display: none !important; }
                    .mobile-nav-toggle { display: block !important; }
                }
                .nav-link-masters:hover {
                    opacity: 1 !important;
                    letter-spacing: 0.35em !important;
                }
            `}</style>
        </nav>
    );
};

export default Navbar;
