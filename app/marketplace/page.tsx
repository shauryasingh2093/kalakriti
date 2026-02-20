"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Search, Filter, MapPin } from "lucide-react";

export default function Marketplace() {
    const [activeCategory, setActiveCategory] = useState("All");
    const [activeRegion, setActiveRegion] = useState("All");

    const categories = ["All", "Pottery", "Textiles", "Woodwork", "Jewelry", "Paintings", "Metalware"];
    const regions = ["All", "Rajasthan", "Bihar", "Gujarat", "West Bengal", "Uttar Pradesh"];

    const products = [
        { id: 1, name: "Indigo Glazed Vase", price: "₹2,499", artisan: "Ram Narayan", category: "Pottery", region: "Rajasthan", img: "/trending-craft.png" },
        { id: 2, name: "Handwoven Silk Stole", price: "₹4,200", artisan: "Laxmi Devi", category: "Textiles", region: "Bihar", img: "/hero.png" },
        { id: 3, name: "Brass Ganesha Idol", price: "₹1,850", artisan: "Suresh Kumar", category: "Metalware", region: "Uttar Pradesh", img: "/artisan-featured.png" },
        { id: 4, name: "Madhubani Wall Art", price: "₹3,100", artisan: "Sunita Singh", category: "Paintings", region: "Bihar", img: "/hero.png" },
        { id: 5, name: "Teak Wood Chair", price: "₹8,500", artisan: "Vikram Rathore", category: "Woodwork", region: "Rajasthan", img: "/trending-craft.png" },
        { id: 6, name: "Silver Filigree Earrings", price: "₹2,200", artisan: "Anjali Das", category: "Jewelry", region: "West Bengal", img: "/artisan-featured.png" },
    ];

    const filteredProducts = products.filter(p =>
        (activeCategory === "All" || p.category === activeCategory) &&
        (activeRegion === "All" || p.region === activeRegion)
    );

    return (
        <main style={{ minHeight: '100vh' }}>
            <Navbar />

            <section style={{ padding: '140px 0 60px', backgroundColor: 'var(--color-sand)' }}>
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                        style={{ textAlign: 'left', maxWidth: '800px' }}
                    >
                        <span className="tagline-accent">The Marketplace</span>
                        <h1 style={{ fontSize: 'clamp(3rem, 10vw, 5rem)', marginTop: '20px', lineHeight: 1 }}>Curated <span style={{ fontStyle: 'italic', fontWeight: 400 }}>Crafts</span></h1>
                        <p style={{ marginTop: '30px', fontSize: '1.2rem', opacity: 0.7, lineHeight: 1.8 }}>
                            Discover authentic handmade treasures directly from master artisans across India.
                            Each purchase supports a legacy of craftsmanship that spans centuries.
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="section-spacer">
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: '280px 1fr', gap: '60px' }}>
                        {/* Filters Sidebar */}
                        <aside style={{ position: 'sticky', top: '120px', height: 'fit-content' }}>
                            <div style={{ marginBottom: '40px' }}>
                                <h4 style={{ fontSize: '1.2rem', marginBottom: '20px', borderBottom: '1px solid var(--color-sand)', paddingBottom: '10px' }}>
                                    Categories
                                </h4>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                    {categories.map(cat => (
                                        <button
                                            key={cat}
                                            onClick={() => setActiveCategory(cat)}
                                            style={{
                                                textAlign: 'left',
                                                background: 'none',
                                                border: 'none',
                                                cursor: 'pointer',
                                                fontSize: '0.95rem',
                                                color: activeCategory === cat ? 'var(--color-terracotta)' : 'var(--color-charcoal)',
                                                fontWeight: activeCategory === cat ? 600 : 400,
                                                transition: 'var(--transition-smooth)'
                                            }}
                                        >
                                            {cat}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <h4 style={{ fontSize: '1.2rem', marginBottom: '20px', borderBottom: '1px solid var(--color-sand)', paddingBottom: '10px' }}>
                                    Regions
                                </h4>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                    {regions.map(reg => (
                                        <button
                                            key={reg}
                                            onClick={() => setActiveRegion(reg)}
                                            style={{
                                                textAlign: 'left',
                                                background: 'none',
                                                border: 'none',
                                                cursor: 'pointer',
                                                fontSize: '0.95rem',
                                                color: activeRegion === reg ? 'var(--color-terracotta)' : 'var(--color-charcoal)',
                                                fontWeight: activeRegion === reg ? 600 : 400,
                                                transition: 'var(--transition-smooth)'
                                            }}
                                        >
                                            {reg}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </aside>

                        {/* Products Grid */}
                        <div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px' }}>
                                <p style={{ opacity: 0.6 }}>Showing {filteredProducts.length} results</p>
                                <div style={{ display: 'flex', gap: '20px' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '10px 20px', backgroundColor: 'var(--color-white)', borderRadius: '100px', border: '1px solid var(--color-sand)' }}>
                                        <Search size={16} opacity={0.5} />
                                        <input type="text" placeholder="Search crafts..." style={{ border: 'none', outline: 'none', fontSize: '0.9rem', background: 'transparent' }} />
                                    </div>
                                </div>
                            </div>

                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '120px 60px' }}>
                                {filteredProducts.map((product, idx) => (
                                    <motion.div
                                        key={product.id}
                                        initial={{ opacity: 0, y: 40 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: idx * 0.1, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                                        style={{
                                            aspectRatio: '1/1.6',
                                            marginTop: idx % 2 !== 0 ? '120px' : '0' // Editorial Rhythmic Asymmetry
                                        }}
                                        className="pill-card"
                                    >
                                        <div style={{ position: 'relative', height: '100%', width: '100%', backgroundColor: '#f5f5f5' }}>
                                            <Image src={product.img} alt={product.name} fill style={{ objectFit: 'cover' }} />
                                            {/* Heritage Status Badge */}
                                            <div style={{ position: 'absolute', top: '24px', left: '24px', display: 'flex', gap: '8px' }}>
                                                <div style={{ padding: '6px 14px', background: 'rgba(255,255,255,0.92)', backdropFilter: 'blur(4px)', borderRadius: '100px', fontSize: '0.55rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-charcoal)' }}>
                                                    Verified Heritage
                                                </div>
                                            </div>
                                            <div style={{ position: 'absolute', top: '24px', right: '24px', padding: '10px 20px', background: 'rgba(255,255,255,0.95)', borderRadius: '100px', fontSize: '0.6rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.15em', opacity: 0.8 }}>
                                                {product.region}
                                            </div>
                                        </div>
                                        <div style={{ padding: '40px 10px', textAlign: 'center' }}>
                                            <span style={{ fontSize: '0.65rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.2em', opacity: 0.6 }}>{product.category}</span>
                                            <h4 style={{ fontSize: '1.4rem', marginTop: '12px', fontWeight: 400 }}>{product.name}</h4>
                                            <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '24px' }}>
                                                <span style={{ fontWeight: 700, color: 'var(--color-terracotta)', fontSize: '1rem' }}>{product.price}</span>
                                                <Link href={`/marketplace/${product.id}`} style={{ fontSize: '0.65rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.2em', opacity: 0.8, textDecoration: 'none', color: 'inherit', borderBottom: '1px solid currentColor' }}>Details</Link>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            {filteredProducts.length === 0 && (
                                <div style={{ textAlign: 'center', padding: '100px 0' }}>
                                    <h3 style={{ opacity: 0.5 }}>No crafts found in this selection.</h3>
                                    <button onClick={() => { setActiveCategory("All"); setActiveRegion("All") }} className="btn-text" style={{ marginTop: '20px' }}>Reset Filters</button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
