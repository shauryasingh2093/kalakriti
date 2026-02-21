"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import Image from "next/image";
import { Heart, MessageCircle, Share2, MoreHorizontal, Plus } from "lucide-react";
import Link from "next/link";

const posts = [
    {
        id: 1,
        artisan: { name: "Ram Narayann", img: "/artisan-featured.png", craft: "Blue Pottery" },
        image: "/trending-craft.png",
        caption: "Witnessing the magic of natural indigo. This glaze will turn into a beautiful deep blue after firing at 800°C. #traditionalart #bluepottery #process",
        likes: 245,
        comments: 18,
        tags: ["Process", "Blue Pottery"],
        timestamp: "2 hours ago"
    },
    {
        id: 2,
        artisan: { name: "Laxmi Devi", img: "/hero.png", craft: "Madhubani Art" },
        image: "/hero.png",
        caption: "Finishing the border of this Sita-Swayamvar mural. Madhubani is not just painting; it's a prayer. #madhubani #mithila #heritage",
        likes: 512,
        comments: 42,
        tags: ["Finished Work", "Mural"],
        timestamp: "5 hours ago"
    },
    {
        id: 3,
        artisan: { name: "Suresh Kumar", img: "/artisan-featured.png", craft: "Wood Carving" },
        image: "/trending-craft.png",
        caption: "New batch of Channapatna dolls ready for the upcoming spring fair! Each one is colored with organic turmeric and lac. #sustainable #toys #woodcraft",
        likes: 189,
        comments: 12,
        tags: ["BehindTheScenes", "Workshop"],
        timestamp: "1 day ago"
    }
];

export default function Community() {
    return (
        <main style={{ minHeight: '100vh', backgroundColor: 'var(--bg-off-white)' }}>
            <Navbar />

            {/* Header */}
            <section style={{ padding: '160px 0 60px', backgroundColor: 'var(--color-olive)', color: 'white' }}>
                <div className="container">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px' }}>
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                        >
                            <span className="tagline-accent" style={{ color: 'var(--color-sand)' }}>Artisan Community</span>
                            <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', marginTop: '10px', color: 'white' }}>Craft Stories</h1>
                            <p style={{ maxWidth: '600px', marginTop: '20px', opacity: 0.9 }}>
                                Go behind the scenes and witness the making of heritage. Connect with artisans through their daily creative journeys.
                            </p>
                        </motion.div>
                        <button className="btn-primary" style={{ backgroundColor: 'var(--color-sand)', color: 'var(--color-charcoal)', display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <Plus size={20} /> Create Post
                        </button>
                    </div>
                </div>
            </section>

            <section className="section-spacer">
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(300px, 350px)', gap: '60px' }}>
                        {/* Feed */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
                            {posts.map((post) => (
                                <motion.div
                                    key={post.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    style={{
                                        backgroundColor: 'var(--color-white)',
                                        borderRadius: '30px',
                                        overflow: 'hidden',
                                        boxShadow: 'var(--shadow-subtle)'
                                    }}
                                >
                                    {/* Post Header */}
                                    <div style={{ padding: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <Link href={`/artisan/${post.id}`} style={{ display: 'flex', alignItems: 'center', gap: '15px', textDecoration: 'none', color: 'inherit' }}>
                                            <div style={{ position: 'relative', width: '50px', height: '50px', borderRadius: '50%', overflow: 'hidden', backgroundColor: 'var(--color-sand)' }}>
                                                <Image src={post.artisan.img} alt={post.artisan.name} fill style={{ objectFit: 'cover' }} />
                                            </div>
                                            <div>
                                                <h4 style={{ fontSize: '1.1rem' }}>{post.artisan.name}</h4>
                                                <p style={{ fontSize: '0.8rem', opacity: 0.6 }}>{post.artisan.craft}</p>
                                            </div>
                                        </Link>
                                        <button style={{ background: 'none', border: 'none', cursor: 'pointer', opacity: 0.4 }}><MoreHorizontal /></button>
                                    </div>

                                    {/* Post Image */}
                                    <div style={{ position: 'relative', aspectRatio: '4/3', backgroundColor: 'var(--color-sand)' }}>
                                        <Image src={post.image} alt="Post Content" fill style={{ objectFit: 'cover' }} />
                                    </div>

                                    {/* Post Interactions */}
                                    <div style={{ padding: '30px' }}>
                                        <div style={{ display: 'flex', gap: '24px', marginBottom: '20px' }}>
                                            <button style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '1rem', fontWeight: 600 }}>
                                                <Heart size={24} /> {post.likes}
                                            </button>
                                            <button style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '1rem', fontWeight: 600 }}>
                                                <MessageCircle size={24} /> {post.comments}
                                            </button>
                                            <button style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
                                                <Share2 size={24} />
                                            </button>
                                        </div>

                                        <p style={{ fontSize: '1.1rem', lineHeight: 1.6, marginBottom: '20px' }}>
                                            <strong>{post.artisan.name}</strong> {post.caption}
                                        </p>

                                        <div style={{ display: 'flex', gap: '10px' }}>
                                            {post.tags.map(tag => (
                                                <span key={tag} style={{ fontSize: '0.85rem', color: 'var(--color-terracotta)', fontWeight: 600 }}>#{tag}</span>
                                            ))}
                                        </div>

                                        <p style={{ fontSize: '0.8rem', opacity: 0.4, marginTop: '20px' }}>{post.timestamp}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Sidebar */}
                        <aside className="community-sidebar">
                            <div style={{ padding: '30px', backgroundColor: 'var(--color-white)', borderRadius: '30px', boxShadow: 'var(--shadow-subtle)', marginBottom: '30px' }}>
                                <h4 style={{ marginBottom: '20px', borderBottom: '1px solid var(--color-sand)', paddingBottom: '10px' }}>Popular Craft Tags</h4>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                                    {["#ceramics", "#indigo", "#handwoven", "#naturaldyes", "#sculpture", "#heritage"].map(tag => (
                                        <span key={tag} style={{ padding: '8px 16px', backgroundColor: 'var(--color-sand)', borderRadius: '100px', fontSize: '0.8rem', cursor: 'pointer' }}>{tag}</span>
                                    ))}
                                </div>
                            </div>

                            <div style={{ padding: '30px', backgroundColor: 'var(--color-white)', borderRadius: '30px', boxShadow: 'var(--shadow-subtle)' }}>
                                <h4 style={{ marginBottom: '20px', borderBottom: '1px solid var(--color-sand)', paddingBottom: '10px' }}>Weekly Artisan Spotlight</h4>
                                <div style={{ textAlign: 'center' }}>
                                    <div style={{ position: 'relative', width: '100px', height: '100px', borderRadius: '50%', overflow: 'hidden', margin: '0 auto 20px' }}>
                                        <Image src="/artisan-featured.png" alt="Spotlight" fill style={{ objectFit: 'cover' }} />
                                    </div>
                                    <h4 style={{ fontSize: '1.2rem' }}>Vikram Rathore</h4>
                                    <p style={{ fontSize: '0.85rem', opacity: 0.6, marginBottom: '20px' }}>Master Wood Carver</p>
                                    <Link href="/artisan/1" className="btn-secondary" style={{ width: '100%', fontSize: '0.8rem', padding: '10px' }}>View Feature</Link>
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>

            <Footer />

            <style jsx>{`
                @media (max-width: 1024px) {
                    div[style*="gridTemplateColumns"] { grid-template-columns: 1fr !important; }
                    .community-sidebar { display: none; }
                }
            `}</style>
        </main>
    );
}
