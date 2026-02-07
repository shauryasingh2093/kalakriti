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
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "Discover", href: "/discover" },
        { name: "Community", href: "/community" },
        { name: "Workshops", href: "/workshops" },
        { name: "Support", href: "/support" },
    ];

    return (
        <nav
            style={{
                position: 'fixed',
                top: 0, left: 0, right: 0,
                zIndex: 1000,
                padding: isScrolled ? '20px 0' : '40px 0',
                background: isScrolled ? 'rgba(250, 248, 242, 0.95)' : 'transparent',
                borderBottom: isScrolled ? '1px solid rgba(0,0,0,0.05)' : 'none',
                backdropFilter: isScrolled ? 'blur(10px)' : 'none',
                transition: 'all 0.4s ease'
            }}
        >
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Link href="/" style={{ fontSize: '1.8rem', fontWeight: 700, fontFamily: 'var(--font-playfair)', letterSpacing: '-0.02em', textDecoration: 'none', color: 'var(--color-charcoal)' }}>
                    kalakriti.
                </Link>

                {/* Desktop Nav */}
                <div style={{ display: 'flex', gap: '32px', alignItems: 'center' }} className="desktop-nav">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            style={{
                                fontSize: '0.85rem',
                                fontWeight: 600,
                                textTransform: 'uppercase',
                                letterSpacing: '0.1em',
                                color: 'var(--color-charcoal)',
                                textDecoration: 'none',
                                opacity: 0.7
                            }}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link href="/auth" className="btn-primary" style={{ padding: '10px 24px', fontSize: '0.75rem' }}>
                        Join
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <button
                    style={{ background: 'none', border: 'none', color: 'var(--color-charcoal)', cursor: 'pointer', display: 'none' }}
                    className="mobile-nav-toggle"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        style={{ overflow: 'hidden', background: 'var(--bg-off-white)', padding: '40px' }}
                    >
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', textAlign: 'center' }}>
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    style={{ fontSize: '1.2rem', fontWeight: 600, textDecoration: 'none', color: 'var(--color-charcoal)' }}
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
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-nav-toggle { display: block !important; }
        }
      `}</style>
        </nav>
    );
};

export default Navbar;
