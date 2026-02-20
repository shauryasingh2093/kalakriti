"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";

const artisans = [
    { id: 1, name: "Ram Narayan", craft: "Blue Pottery", img: "/img/1.png", region: "Jaipur", rating: 4.9 },
    { id: 2, name: "Savitri Devi", craft: "Silk Weaving", img: "/img/2.png", region: "Banaras", rating: 5.0 },
    { id: 3, name: "Suresh Kumar", craft: "Wood Carving", img: "/img/3.png", region: "Sahandan", rating: 4.8 },
];

const communityImages = [
    "/img/1.png", "/img/2.png", "/img/3.png", "/img/4.png",
    "/img/1.png", "/img/2.png", "/img/3.png", "/img/4.png"
];

const categories = [
    { name: "Pottery", img: "/img/1.png" },
    { name: "Textiles", img: "/img/2.png" },
    { name: "Metalwork", img: "/img/3.png" },
    { name: "Woodwork", img: "/img/4.png" },
    { name: "Jewelry", img: "/img/3.png" },
    { name: "Stone", img: "/img/4.png" },
];

export default function Home() {
    const heroRef = useRef(null);
    const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
    const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

    const textFade = useTransform(smoothProgress, [0, 0.4], [1, 0]);
    const textScale = useTransform(smoothProgress, [0, 0.4], [1, 0.9]);

    const panels = [
        { img: "/img/4.png", pos: "center" },      // Material
        { img: "/img/2.png", pos: "center" },      // Making
        { img: "/img/3.png", pos: "top right" },  // Detail
        { img: "/img/1.png", pos: "center left" }  // Final / Finish
    ];

    return (
        <main style={{ minHeight: '100vh', overflowX: 'hidden' }}>
            <Navbar />

            {/* Section 1: Hero Design Mastery */}
            <section ref={heroRef} className="hero-grid">
                {panels.map((panel, i) => (
                    <div key={i} className="hero-panel">
                        <Image src={panel.img} alt={`Heritage Panel ${i + 1}`} fill style={{ objectFit: 'cover', objectPosition: panel.pos }} priority />
                    </div>
                ))}

                <motion.div className="hero-overlay" style={{ opacity: textFade, scale: textScale }}>
                    <div className="hero-tonal-shield" />
                    <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.5 }}>
                        <span className="tagline-accent">Create &middot; Connect &middot; Celebrate</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className="hero-large" style={{ marginBottom: '16px', fontWeight: 700 }}
                    >
                        kalakriti
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }} animate={{ opacity: 0.95 }} transition={{ duration: 1.5, delay: 1 }}
                        style={{ color: '#f5efe8', fontSize: '0.9rem', fontWeight: 400, letterSpacing: '0.1em', fontFamily: 'var(--font-playfair)', fontStyle: 'italic', textShadow: '0 4px 15px rgba(0,0,0,0.6)' }}
                    >
                        Discover handcrafted stories from master artisans
                    </motion.p>
                </motion.div>
            </section>

            {/* Section 2: Heritage Discovery Feature */}
            <section style={{ backgroundColor: '#F5F0E6', padding: '160px 0' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '32px' }}>
                        <motion.div
                            initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1 }}
                            style={{ backgroundColor: '#E8E2D1', borderRadius: '48px', padding: '80px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
                        >
                            <h2 style={{ fontSize: '2.5rem', marginBottom: '24px', maxWidth: '400px', lineHeight: 1.1 }}>Where tradition meets the modern marketplace.</h2>
                            <p style={{ opacity: 0.7, fontSize: '1.1rem', maxWidth: '400px', lineHeight: 1.6 }}>Connected to over 5,000 verified artisans across the subcontinent, Kalakriti is more than a store—it's a living archive of human skill.</p>
                        </motion.div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }}
                                style={{ height: '400px', borderRadius: '48px', overflow: 'hidden', position: 'relative' }}
                            >
                                <Image src="/img/2.png" alt="Pottery Craft" fill style={{ objectFit: 'cover' }} />
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.2 }}
                                style={{ backgroundColor: '#3D2B1F', borderRadius: '48px', padding: '40px', color: 'white' }}
                            >
                                <span style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.2em', opacity: 0.5 }}>Featured Story</span>
                                <h3 style={{ fontSize: '1.8rem', marginTop: '12px' }}>Indigo Blue: The Week's Findings</h3>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 3: Featured Artisans */}
            <section style={{ backgroundColor: '#F5F0E6', padding: '120px 0' }}>
                <div className="container">
                    <header style={{ marginBottom: '80px', textAlign: 'center' }}>
                        <span className="tagline-accent" style={{ color: 'var(--color-charcoal)', opacity: 0.4 }}>Curated Selections</span>
                        <h2 style={{ fontSize: '3rem', marginTop: '16px' }}>Featured Artisans</h2>
                    </header>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px' }}>
                        {artisans.map((artisan, i) => (
                            <motion.div
                                key={artisan.id} initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: i * 0.1 }}
                                className="pill-card" style={{ height: 'auto', padding: '16px', borderRadius: '32px' }}
                            >
                                <div style={{ position: 'relative', height: '350px', borderRadius: '24px', overflow: 'hidden', marginBottom: '24px' }}>
                                    <Image src={artisan.img} alt={artisan.name} fill style={{ objectFit: 'cover' }} />
                                    <div style={{ position: 'absolute', top: '16px', right: '16px', background: 'white', borderRadius: '100px', padding: '6px 12px', fontSize: '0.6rem', fontWeight: 800 }}>VERIFIED</div>
                                </div>
                                <div style={{ padding: '0 8px 16px' }}>
                                    <h3 style={{ fontSize: '1.4rem', fontWeight: 600 }}>{artisan.name}</h3>
                                    <p style={{ opacity: 0.5, fontSize: '0.85rem' }}>{artisan.craft} &bull; {artisan.region}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section 4: Running Banner */}
            <section className="marquee-container">
                <div className="marquee-content">
                    {[...Array(6)].map((_, i) => (
                        <span key={i} className="running-text-item">Handmade &middot; Verified Artisan &middot; Cultural Craft &middot; </span>
                    ))}
                </div>
            </section>

            {/* Section 5: Shop by Matter (Categories) */}
            <section style={{ backgroundColor: '#F5F0E6', padding: '120px 0' }}>
                <div className="container">
                    <header style={{ marginBottom: '80px' }}>
                        <h2 style={{ fontSize: '2.5rem' }}>Explore Categories</h2>
                    </header>
                    <div style={{ display: 'flex', justifyContent: 'space-between', gap: '24px', flexWrap: 'wrap' }}>
                        {categories.map((cat, i) => (
                            <motion.div key={i} whileHover={{ scale: 1.05 }} transition={{ duration: 0.4 }} style={{ textAlign: 'center', cursor: 'pointer' }}>
                                <div style={{ width: '160px', height: '160px', borderRadius: '50%', overflow: 'hidden', marginBottom: '20px', position: 'relative', border: '1px solid rgba(0,0,0,0.05)' }}>
                                    <Image src={cat.img} alt={cat.name} fill style={{ objectFit: 'cover', filter: 'grayscale(1)' }} />
                                </div>
                                <span style={{ fontSize: '0.8rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em' }}>{cat.name}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section 6: Community Showcase */}
            <section style={{ backgroundColor: '#F5F0E6', padding: '120px 0' }}>
                <div className="container">
                    <header style={{ marginBottom: '60px' }}>
                        <h2 style={{ fontSize: '2.5rem' }}>Community Showcase</h2>
                    </header>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gridAutoRows: '250px', gap: '20px' }}>
                        {communityImages.map((img, i) => (
                            <motion.div
                                key={i} whileHover={{ scale: 0.98 }} transition={{ duration: 0.6 }}
                                style={{
                                    gridRow: i === 0 ? 'span 2' : i === 5 ? 'span 2' : 'span 1',
                                    borderRadius: '24px', overflow: 'hidden', position: 'relative'
                                }}
                            >
                                <Image src={img} alt="Community" fill style={{ objectFit: 'cover' }} />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section 7: Upcoming Workshops */}
            <section style={{ backgroundColor: '#F5F0E6', padding: '120px 0' }}>
                <div className="container">
                    <header style={{ marginBottom: '60px' }}>
                        <h2 style={{ fontSize: '2.5rem' }}>Upcoming Workshops</h2>
                    </header>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '32px' }}>
                        {[1, 2].map((_, i) => (
                            <div key={i} style={{ backgroundColor: 'white', borderRadius: '32px', padding: '24px', display: 'flex', gap: '24px' }}>
                                <div style={{ width: '200px', height: '150px', borderRadius: '20px', overflow: 'hidden', position: 'relative' }}>
                                    <Image src={`/img/${i + 1}.png`} alt="Workshop" fill style={{ objectFit: 'cover' }} />
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                    <span style={{ fontSize: '0.7rem', opacity: 0.5, textTransform: 'uppercase' }}>Aug 12 - 14</span>
                                    <h3 style={{ fontSize: '1.4rem', margin: '8px 0' }}>Blue Pottery Masterclass</h3>
                                    <Link href="/workshops" className="btn-primary" style={{ padding: '8px 24px', fontSize: '0.7rem', width: 'fit-content' }}>Join Now</Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section 8: Join Our Artisan Community */}
            <section style={{ backgroundColor: '#F5F0E6', padding: '120px 0 200px' }}>
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
                        style={{ backgroundColor: '#6B705C', borderRadius: '48px', padding: '100px', textAlign: 'center', color: 'white', position: 'relative', overflow: 'hidden' }}
                    >
                        <h2 style={{ fontSize: '4rem', color: 'white', marginBottom: '40px' }}>Join Our Artisan Community</h2>
                        <Link href="/auth/register" className="btn-primary" style={{ backgroundColor: '#C26A4A', padding: '20px 60px' }}>Join Collective</Link>
                        <div style={{ position: 'absolute', bottom: '0', left: '0', opacity: 0.1, width: '300px', height: '200px' }}>
                            <Image src="/img/Screenshot 2026-02-03 at 7.06.27 PM 1.png" alt="Pattern" fill style={{ objectFit: 'cover' }} />
                        </div>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
