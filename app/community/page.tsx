"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { motion } from "framer-motion";
import { Heart, MessageCircle, Plus } from "lucide-react";

const posts = [
    { id: 1, user: "Ananya", image: "/hero.png", likes: 124, comments: 12, text: "Just finished my first pottery workshop at Kalakriti!" },
    { id: 2, user: "Rohan", image: "/trending-craft.png", likes: 89, comments: 5, text: "The details on this terracotta vase are mind-blowing." },
    { id: 3, user: "Priya", image: "/artisan-featured.png", likes: 256, comments: 34, text: "Meeting Master Rahamatullah was a dream come true." },
    { id: 4, user: "Siddharth", image: "/hero.png", likes: 45, comments: 2, text: "Indian handlooms never cease to amaze me." },
    { id: 5, user: "Kavya", image: "/trending-craft.png", likes: 112, comments: 18, text: "Earth brown tones are the new aesthetic." },
    { id: 6, user: "Vikram", image: "/hero.png", likes: 67, comments: 8, text: "Incredible evening at the workshop." },
];

export default function Community() {
    return (
        <main style={{ minHeight: '100vh', paddingTop: '160px' }}>
            <Navbar />

            <section className="container">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '80px' }}>
                    <div>
                        <span className="tagline-accent">Inspiration Wall</span>
                        <h1 style={{ fontSize: '5rem', marginTop: '20px' }}>Community Feed</h1>
                    </div>
                    <button className="btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <Plus size={20} /> Share Craft
                    </button>
                </div>

                {/* Masonry Grid */}
                <div className="masonry" style={{ marginBottom: '120px' }}>
                    {posts.map((post) => (
                        <motion.div
                            layout
                            key={post.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="masonry-brick"
                            style={{ background: 'var(--color-white)', borderRadius: '24px', overflow: 'hidden', border: '1px solid var(--color-sand)', boxShadow: 'var(--shadow-subtle)' }}
                        >
                            <div style={{ position: 'relative', width: '100%' }}>
                                <Image
                                    src={post.image}
                                    alt={post.text}
                                    width={500}
                                    height={500}
                                    style={{ width: '100%', height: 'auto', display: 'block' }}
                                />
                            </div>

                            <div style={{ padding: '24px' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                                    <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'var(--color-olive)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.8rem', fontWeight: 700 }}>
                                        {post.user[0]}
                                    </div>
                                    <span style={{ fontWeight: 600 }}>{post.user}</span>
                                </div>
                                <p style={{ fontSize: '1rem', color: 'var(--color-charcoal)', opacity: 0.8, marginBottom: '24px', lineHeight: 1.5 }}>
                                    {post.text}
                                </p>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid var(--color-sand)', paddingTop: '16px' }}>
                                    <div style={{ display: 'flex', gap: '20px', opacity: 0.4 }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><Heart size={18} /> {post.likes}</div>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><MessageCircle size={18} /> {post.comments}</div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            <Footer />
        </main>
    );
}
