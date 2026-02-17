"use client";

import { use } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowLeft, MapPin, Calendar, ShoppingBag, Share2, Instagram, Facebook, Mail, Award } from "lucide-react";

export default function ArtisanProfile({ params }: { params: Promise<{ id: string }> }) {
    const { id } = use(params);

    // Mock data for the artisan
    const artisan = {
        id: id,
        name: "Ram Narayan",
        craft: "Master Blue Pottery Artist",
        region: "Jaipur, Rajasthan",
        img: "/artisan-featured.png",
        bio: "Ram Narayan has been practicing the art of Blue Pottery for over 40 years. He is a state award winner and has trained hundreds of young artisans in his workshop in Jaipur. His work is known for its intricate floral patterns and the perfect shade of indigo.",
        journey: "The art of Blue Pottery came to Rajasthan in the 17th century. Ram's family has been involved in this craft since the era of Sawai Jai Singh II. He started helping his father at the age of 10 and eventually mastered the delicate balance of minerals required to create the signature glaze.",
        products: [
            { id: 1, name: "Indigo Glazed Vase", price: "₹2,499", img: "/trending-craft.png" },
            { id: 2, name: "Floral Serving Bowl", price: "₹1,800", img: "/hero.png" },
            { id: 3, name: "Decorative Tile Set", price: "₹3,500", img: "/artisan-featured.png" },
        ],
        experience: "42 Years",
        awards: ["Rajasthan State Award 2012", "Heritage Excellence 2018"],
        following: "1.2k",
        posts: 48
    };

    return (
        <main style={{ minHeight: '100vh', backgroundColor: 'var(--bg-off-white)' }}>
            <Navbar />

            {/* Immersive Profile Header */}
            <section style={{ padding: '180px 0 100px', backgroundColor: 'var(--color-sand)', position: 'relative', overflow: 'hidden' }}>
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <Link href="/" className="btn-text" style={{ marginBottom: '60px' }}>
                            <ArrowLeft size={16} /> Heritage Home
                        </Link>

                        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(300px, 450px) 1fr', gap: '80px', alignItems: 'center' }}>
                            <motion.div
                                initial={{ scale: 0.9, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                                style={{ position: 'relative', aspectRatio: '1/1.3', borderRadius: '150px', overflow: 'hidden', boxShadow: '0 50px 100px rgba(0,0,0,0.1)' }}
                            >
                                <Image src={artisan.img} alt={artisan.name} fill style={{ objectFit: 'cover' }} />
                            </motion.div>

                            <div>
                                <motion.span
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 0.6 }}
                                    transition={{ delay: 0.5 }}
                                    className="tagline-accent"
                                >
                                    Master Artisan • {artisan.region}
                                </motion.span>
                                <h1 style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', margin: '20px 0', lineHeight: 0.9 }}>{artisan.name}</h1>
                                <p style={{ fontSize: '1.4rem', fontStyle: 'italic', color: 'var(--color-terracotta)', fontWeight: 400, opacity: 0.8 }}>Specializing in {artisan.craft}</p>

                                <div style={{ display: 'flex', gap: '20px', marginTop: '50px' }}>
                                    <button className="btn-primary" style={{ padding: '16px 40px' }}>Follow Journey</button>
                                    <button style={{ background: 'white', border: '1px solid rgba(0,0,0,0.1)', padding: '16px', borderRadius: '50%', cursor: 'pointer' }}><Share2 size={20} /></button>
                                </div>

                                <div style={{ display: 'flex', gap: '60px', marginTop: '60px', paddingTop: '40px', borderTop: '1px solid rgba(0,0,0,0.05)' }}>
                                    {[
                                        { label: "Followers", value: artisan.following },
                                        { label: "Stories", value: artisan.posts },
                                        { label: "Experience", value: artisan.experience }
                                    ].map((stat, i) => (
                                        <div key={i}>
                                            <p style={{ fontWeight: 700, fontSize: '1.5rem' }}>{stat.value}</p>
                                            <p style={{ opacity: 0.5, fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{stat.label}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Bio & Journey */}
            <section className="section-spacer">
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '60px' }}>
                        <div>
                            <h2 style={{ fontSize: '2.5rem', marginBottom: '30px' }}>The Artisan's Journey</h2>
                            <p style={{ fontSize: '1.1rem', lineHeight: 2, opacity: 0.8, marginBottom: '30px' }}>{artisan.bio}</p>
                            <p style={{ fontSize: '1.1rem', lineHeight: 2, opacity: 0.8 }}>{artisan.journey}</p>
                        </div>

                        <div>
                            <div style={{ padding: '40px', backgroundColor: 'var(--color-white)', borderRadius: '30px', boxShadow: 'var(--shadow-subtle)' }}>
                                <h4 style={{ marginBottom: '20px', borderBottom: '1px solid var(--color-sand)', paddingBottom: '10px' }}>Certifications & Awards</h4>
                                <ul style={{ listStyle: 'none', padding: 0 }}>
                                    {artisan.awards.map((award, i) => (
                                        <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '15px' }}>
                                            <div style={{ width: '30px', height: '30px', borderRadius: '50%', backgroundColor: 'var(--color-olive)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
                                                <Award size={16} />
                                            </div>
                                            <span style={{ fontSize: '0.95rem', fontWeight: 500 }}>{award}</span>
                                        </li>
                                    ))}
                                </ul>

                                <h4 style={{ margin: '40px 0 20px', borderBottom: '1px solid var(--color-sand)', paddingBottom: '10px' }}>Connect</h4>
                                <div style={{ display: 'flex', gap: '20px' }}>
                                    <Instagram size={24} style={{ cursor: 'pointer', opacity: 0.7 }} />
                                    <Facebook size={24} style={{ cursor: 'pointer', opacity: 0.7 }} />
                                    <Mail size={24} style={{ cursor: 'pointer', opacity: 0.7 }} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Products */}
            <section className="section-spacer" style={{ backgroundColor: 'var(--color-white)' }}>
                <div className="container">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '60px', flexWrap: 'wrap', gap: '20px' }}>
                        <h2 style={{ fontSize: '2.5rem' }}>Listed Creations</h2>
                        <Link href="/marketplace" className="btn-text">View All</Link>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '80px 40px' }}>
                        {artisan.products.map((product) => (
                            <motion.div
                                key={product.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                style={{ aspectRatio: '1/1.6' }}
                            >
                                <div style={{ position: 'relative', height: '80%', width: '100%', borderRadius: '40px', overflow: 'hidden', backgroundColor: '#fcfcfc' }}>
                                    <Image src={product.img} alt={product.name} fill style={{ objectFit: 'cover' }} />
                                </div>
                                <div style={{ padding: '24px 0', textAlign: 'center' }}>
                                    <span style={{ fontSize: '0.65rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.2em', opacity: 0.6 }}>Original Piece</span>
                                    <h4 style={{ fontSize: '1.2rem', marginTop: '8px', fontWeight: 400 }}>{product.name}</h4>
                                    <p style={{ fontWeight: 700, color: 'var(--color-terracotta)', marginTop: '8px', fontSize: '0.95rem' }}>{product.price}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
