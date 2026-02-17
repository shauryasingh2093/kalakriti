"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const categories = [
    { name: "Pottery", icon: "🏺", img: "/img/Screenshot 2026-02-03 at 7.06.51 PM 1.png" },
    { name: "Textiles", icon: "🧶", img: "/img/Screenshot 2026-02-03 at 7.07.15 PM 1.png" },
    { name: "Metalwork", icon: "🔨", img: "/img/Screenshot 2026-02-03 at 7.40.01 PM 1.png" },
    { name: "Woodwork", icon: "🪚", img: "/img/Screenshot 2026-02-03 at 7.44.05 PM 1.png" },
    { name: "Jewelry", icon: "💍", img: "/img/Screenshot 2026-02-03 at 7.46.50 PM 1.png" },
    { name: "Stone", icon: "🗿", img: "/img/Screenshot 2026-02-03 at 6.30.42 PM 1-1.png" },
];

const artisans = [
    { id: 1, name: "Ram Narayan", craft: "Blue Pottery", img: "/img/Screenshot 2026-02-03 at 7.06.27 PM 1.png" },
    { id: 2, name: "Savitri Devi", craft: "Silk Weaving", img: "/img/ana-vicente-5xxwRZTVBt4-unsplash 1.png" },
    { id: 3, name: "Suresh Kumar", craft: "Wood Carving", img: "/img/earl-wilcox-iUbsw_VOkbM-unsplash 1.png" },
];

export default function Home() {
    const heroRef = useRef(null);
    const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });

    // Parallax & Cinematic Transforms
    const heroY = useTransform(scrollYProgress, [0, 1], [0, 300]);
    const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
    const textY = useTransform(scrollYProgress, [0, 1], [0, -100]);
    const stripY1 = useTransform(scrollYProgress, [0, 1], [0, -400]);
    const stripY2 = useTransform(scrollYProgress, [0, 1], [0, 200]);
    const stripY3 = useTransform(scrollYProgress, [0, 1], [0, -250]);

    return (
        <main style={{ minHeight: '100vh', overflowX: 'hidden' }}>
            <Navbar />

            {/* Cinematic Cinematic Hero */}
            <section ref={heroRef} style={{ height: '160vh', position: 'relative', overflow: 'hidden', backgroundColor: '#000' }}>

                {/* Fixed Cinematic Backdrop */}
                <motion.div
                    style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', y: heroY, scale: heroScale, zIndex: 0 }}
                >
                    <Image
                        src="/img/hero.png"
                        alt="Heritage Craft"
                        fill
                        style={{ objectFit: 'cover', opacity: 0.6, filter: 'blur(4px) brightness(0.7)' }}
                        priority
                    />
                </motion.div>

                {/* Animated Image Strips - Layered Depth */}
                <div style={{ position: 'absolute', top: '15%', left: 0, right: 0, height: '70%', display: 'flex', gap: '30px', padding: '0 80px', zIndex: 1 }}>
                    {[
                        { img: "/img/annie-spratt-TywjkDHf0Ps-unsplash 1.png", y: stripY1 },
                        { img: "/img/Screenshot 2026-02-03 at 6.30.42 PM 1.png", y: stripY2 },
                        { img: "/img/ana-vicente-5xxwRZTVBt4-unsplash 1.png", y: stripY3 },
                        { img: "/img/earl-wilcox-iUbsw_VOkbM-unsplash 1.png", y: stripY1 },
                        { img: "/img/Screenshot 2026-02-03 at 7.06.51 PM 1.png", y: stripY2 }
                    ].map((strip, i) => (
                        <motion.div
                            key={i}
                            style={{
                                flex: '1',
                                height: '100%',
                                position: 'relative',
                                borderRadius: '40px',
                                overflow: 'hidden',
                                y: strip.y,
                                boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
                                border: '1px solid rgba(255,255,255,0.05)'
                            }}
                        >
                            <Image src={strip.img} alt="Craft Strip" fill style={{ objectFit: 'cover', opacity: 0.9 }} />
                            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent, rgba(0,0,0,0.2))' }}></div>
                        </motion.div>
                    ))}
                </div>

                {/* Floating Words Overlay */}
                <motion.div
                    style={{
                        position: 'fixed',
                        top: '45vh',
                        left: 0,
                        right: 0,
                        zIndex: 10,
                        textAlign: 'center',
                        y: textY
                    }}
                >
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 0.8, y: 0 }}
                        transition={{ duration: 1.5, delay: 0.5 }}
                    >
                        <span className="tagline-accent" style={{ color: 'white', textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}>Create • Connect • Celebrate</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, scale: 0.85 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
                        className="hero-large"
                        style={{ color: 'white', textShadow: '0 20px 80px rgba(0,0,0,0.4)', marginTop: '20px' }}
                    >
                        kalakriti
                    </motion.h1>
                </motion.div>
            </section>

            {/* Masters Introduction Section */}
            <section style={{ position: 'relative', zIndex: 10, backgroundColor: 'var(--bg-off-white)', padding: '240px 0' }}>
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 60 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.5 }}
                        style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}
                    >
                        <h2 style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', fontWeight: 400, lineHeight: 1.2 }}>
                            Bridging the silent gap between <br />
                            <span style={{ fontFamily: 'var(--font-playfair)', fontStyle: 'italic', fontWeight: 400, color: 'var(--color-terracotta)' }}>heritage mastery</span> and the modern gaze.
                        </h2>
                        <div style={{ marginTop: '80px' }}>
                            <Link href="/marketplace" className="btn-primary">Explore the Marketplace</Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Artisan Spotlight with Organic Asymmetry */}
            <section className="section-spacer" style={{ backgroundColor: 'white' }}>
                <div className="container">
                    <header style={{ marginBottom: '160px' }}>
                        <span className="tagline-accent" style={{ opacity: 0.4 }}>Spotlight 01</span>
                        <h2 style={{ fontSize: '1rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.4em', marginTop: '20px' }}>The Legacy Keepers</h2>
                    </header>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '100px 40px', alignItems: 'start' }}>
                        {artisans.map((artisan, i) => (
                            <motion.div
                                key={artisan.id}
                                initial={{ opacity: 0, y: 80 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1.2, delay: i * 0.2 }}
                                style={{
                                    marginTop: i === 1 ? '200px' : i === 2 ? '100px' : '0',
                                }}
                            >
                                <Link href={`/artisan/${artisan.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                                    <div className="pill-card" style={{ height: '600px', borderRadius: '40px' }}>
                                        <Image src={artisan.img} alt={artisan.name} fill style={{ objectFit: 'cover' }} />
                                    </div>
                                    <div style={{ marginTop: '40px', textAlign: 'center' }}>
                                        <p style={{ fontSize: '0.65rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.3em', opacity: 0.5 }}>{artisan.craft}</p>
                                        <h3 style={{ fontSize: '1.6rem', marginTop: '12px', fontWeight: 400 }}>{artisan.name}</h3>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Minimalist Visual Marquee */}
            <div className="marquee-container" style={{
                padding: '40px 0',
                backgroundColor: 'transparent',
                borderTop: '1px solid rgba(0,0,0,0.03)',
                borderBottom: '1px solid rgba(0,0,0,0.03)',
                color: 'rgba(0,0,0,0.15)',
                fontSize: '0.9rem',
                letterSpacing: '0.5em',
                textTransform: 'uppercase'
            }}>
                <div className="marquee-content" style={{ animationDuration: '80s' }}>
                    Authentic • Verified • Direct • Traditional • Sustainable • Authentic • Verified • Direct • Traditional • Sustainable •Authentic • Verified • Direct • Traditional • Sustainable •
                </div>
            </div>

            {/* Discovery Category Grid */}
            <section className="section-spacer">
                <div className="container">
                    <header style={{ marginBottom: '100px', textAlign: 'center' }}>
                        <h2 style={{ fontSize: '2.5rem', fontWeight: 300 }}>Search by <span style={{ fontFamily: 'var(--font-playfair)', fontStyle: 'italic' }}>Matter</span></h2>
                    </header>
                    <div style={{ display: 'flex', gap: '30px', justifyContent: 'center', flexWrap: 'wrap' }}>
                        {categories.map((cat, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                whileHover={{ y: -10 }}
                                transition={{ delay: i * 0.05 }}
                                style={{
                                    width: '180px',
                                    textAlign: 'center',
                                    marginTop: i % 2 !== 0 ? '80px' : '0'
                                }}
                            >
                                <div style={{
                                    aspectRatio: '1/1.8',
                                    borderRadius: '100px',
                                    overflow: 'hidden',
                                    position: 'relative',
                                    marginBottom: '30px',
                                    backgroundColor: 'var(--color-sand)',
                                    transition: 'var(--transition-premium)',
                                    boxShadow: '0 10px 30px rgba(0,0,0,0.05)'
                                }}>
                                    <Image src={cat.img} alt={cat.name} fill style={{ objectFit: 'cover', filter: 'grayscale(1) opacity(0.6)' }} />
                                    <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2.5rem', opacity: 0.3 }}>{cat.icon}</div>
                                </div>
                                <span style={{ fontSize: '0.65rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.4em', opacity: 0.4 }}>{cat.name}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
