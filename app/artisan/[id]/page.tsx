"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { motion } from "framer-motion";
import { Award, MapPin } from "lucide-react";

export default function ArtisanProfile({ params }: { params: { id: string } }) {
    return (
        <main style={{ minHeight: '100vh' }}>
            <Navbar />

            {/* Profile Header */}
            <section style={{ height: '70vh', position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Image
                    src="/hero.png"
                    alt="Artisan Background"
                    fill
                    style={{ objectFit: 'cover', filter: 'brightness(0.5)' }}
                />
                <div style={{ position: 'relative', zIndex: 10, textAlign: 'center', color: 'var(--color-white)' }}>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        style={{ width: '200px', height: '200px', borderRadius: '50%', border: '4px solid var(--color-white)', overflow: 'hidden', margin: '0 auto 32px', boxShadow: '0 20px 40px rgba(0,0,0,0.3)' }}
                    >
                        <Image src="/artisan-featured.png" alt="Portrait" width={200} height={200} style={{ objectFit: 'cover' }} />
                    </motion.div>
                    <h1 style={{ fontSize: '4.5rem', marginBottom: '16px', color: 'var(--color-white)' }}>Master Rahamatullah</h1>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '24px', opacity: 0.8 }}>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><MapPin size={18} /> Channapatna</span>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Award size={18} /> National Awardee</span>
                    </div>
                </div>
            </section>

            {/* Story & Projects */}
            <section className="section-spacer">
                <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '80px' }}>

                    <div style={{ flex: 1 }}>
                        <div style={{ background: 'var(--color-sand)', padding: '50px', borderRadius: '30px' }}>
                            <h3 style={{ fontSize: '2rem', marginBottom: '24px' }}>The Craft</h3>
                            <p style={{ fontSize: '1.2rem', opacity: 0.7, lineHeight: 1.6, marginBottom: '32px' }}>
                                Lacquered woodcraft is a 400-year-old tradition. Master Rahamatullah uses vegetable dyes and ancient lathing techniques.
                            </p>
                            <div style={{ borderTop: '1px solid rgba(0,0,0,0.1)', paddingTop: '32px' }}>
                                <p style={{ fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.8rem', color: 'var(--color-terracotta)' }}>Primary Medium</p>
                                <p style={{ fontSize: '1.4rem', marginTop: '8px' }}>Teak & Sandalwood</p>
                            </div>
                        </div>
                    </div>

                    <div style={{ flex: 2 }}>
                        <h2 style={{ fontSize: '3rem', marginBottom: '32px' }}>His Story</h2>
                        <p style={{ fontSize: '1.3rem', lineHeight: 1.8, color: 'var(--color-charcoal)', opacity: 0.8, marginBottom: '24px' }}>
                            "Every piece of wood has a soul. My job is simply to uncover it." Starting at age seven, Rahamatullah followed in his father's footsteps, perfecting the art of the Channapatna doll.
                        </p>
                        <p style={{ fontSize: '1.2rem', lineHeight: 1.8, color: 'var(--color-charcoal)', opacity: 0.7 }}>
                            Today, his workshop is a sanctuary for the traditional lacquering process, ensuring that the vibrant colors of our heritage never fade.
                        </p>

                        <h2 style={{ fontSize: '3rem', margin: '80px 0 32px' }}>Masterpieces</h2>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                            <div style={{ position: 'relative', height: '300px', borderRadius: '20px', overflow: 'hidden' }}>
                                <Image src="/trending-craft.png" alt="Work" fill style={{ objectFit: 'cover' }} />
                            </div>
                            <div style={{ position: 'relative', height: '300px', borderRadius: '20px', overflow: 'hidden' }}>
                                <Image src="/hero.png" alt="Work" fill style={{ objectFit: 'cover' }} />
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            <Footer />
        </main>
    );
}
