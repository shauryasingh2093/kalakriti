"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Search } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

const crafts = [
    { id: 1, name: "Hand-painted Pattachitras", category: "Paintings", region: "Odisha", image: "/hero.png" },
    { id: 2, name: "Terracotta Horses", category: "Pottery", region: "West Bengal", image: "/trending-craft.png" },
    { id: 3, name: "Blue Pottery Vases", category: "Pottery", region: "Jaipur", image: "/trending-craft.png" },
    { id: 4, name: "Silk Brocade Saree", category: "Handloom", region: "Varanasi", image: "/hero.png" },
    { id: 5, name: "Sandalwood Carvings", category: "Woodcraft", region: "Karnataka", image: "/artisan-featured.png" },
    { id: 6, name: "Madhubani Art", category: "Paintings", region: "Bihar", image: "/hero.png" },
];

const categories = ["All", "Pottery", "Handloom", "Woodcraft", "Paintings", "Jewelry"];

export default function Discover() {
    const [selectedCategory, setSelectedCategory] = useState("All");

    const filteredCrafts = selectedCategory === "All"
        ? crafts
        : crafts.filter(c => c.category === selectedCategory);

    return (
        <main style={{ minHeight: '100vh', paddingTop: '160px' }}>
            <Navbar />

            <section className="container">
                <header style={{ marginBottom: '80px', textAlign: 'center' }}>
                    <span className="tagline-accent">The Marketplace</span>
                    <h1 style={{ fontSize: '5rem', marginTop: '20px' }}>Discover Heritage</h1>
                </header>

                {/* Search and Filters */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '40px', marginBottom: '80px' }}>
                    <div style={{ position: 'relative', maxWidth: '600px', margin: '0 auto', width: '100%' }}>
                        <Search style={{ position: 'absolute', left: '20px', top: '50%', transform: 'translateY(-50%)', opacity: 0.3 }} size={20} />
                        <input
                            type="text"
                            placeholder="Search crafts, regions..."
                            style={{ width: '100%', padding: '20px 20px 20px 60px', borderRadius: '100px', border: '1px solid var(--color-sand)', background: 'var(--color-white)', outline: 'none', fontSize: '1rem' }}
                        />
                    </div>

                    <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
                        {categories.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setSelectedCategory(cat)}
                                className={selectedCategory === cat ? 'btn-primary' : 'btn-secondary'}
                                style={{ padding: '10px 24px', fontSize: '0.8rem' }}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Results Grid - Using columns for a masonry-like feel */}
                <div className="masonry">
                    {filteredCrafts.map((craft) => (
                        <motion.div
                            layout
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            key={craft.id}
                            className="masonry-brick"
                            style={{ background: 'var(--color-white)', padding: '16px', borderRadius: '20px', boxShadow: 'var(--shadow-subtle)' }}
                        >
                            <div style={{ position: 'relative', height: '300px', borderRadius: '12px', overflow: 'hidden', marginBottom: '20px' }}>
                                <Image src={craft.image} alt={craft.name} fill style={{ objectFit: 'cover' }} />
                            </div>
                            <span style={{ fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--color-terracotta)', letterSpacing: '0.1em' }}>{craft.category}</span>
                            <h3 style={{ fontSize: '1.4rem', margin: '8px 0' }}>{craft.name}</h3>
                            <p style={{ opacity: 0.6, fontSize: '0.9rem' }}>{craft.region}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            <Footer />
        </main>
    );
}
