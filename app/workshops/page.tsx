"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Calendar, Clock, MapPin, ArrowRight, User, CheckCircle2 } from "lucide-react";
import Link from "next/link";

const events = [
    {
        id: 1,
        title: "Masterclass: Traditional Blue Pottery",
        artisan: "Master Ram Narayan",
        date: "March 24, 2024",
        time: "10:00 AM - 4:00 PM",
        location: "Jaipur Studio",
        price: "₹1,500",
        image: "/trending-craft.png",
        description: "Learn the ancient art of blue pottery, from mixing quartz powder to the delicate process of hand-painting cobalt motifs."
    },
    {
        id: 2,
        title: "Silk Weaving Techniques",
        artisan: "Savitri Devi",
        date: "April 02, 2024",
        time: "2:00 PM - 6:00 PM",
        location: "Varanasi Heritage Center",
        price: "₹2,500",
        image: "/hero.png",
        description: "A hands-on session on the pit loom, understanding the warp and weft of celebrated Banarasi silk."
    },
    {
        id: 3,
        title: "Wood Carving & Lacquerware",
        artisan: "Suresh Kumar",
        date: "April 15, 2024",
        time: "11:00 AM - 3:00 PM",
        location: "Channapatna Workshop",
        price: "₹1,200",
        image: "/artisan-featured.png",
        description: "Discover the 400-year-old tradition of lacquered woodcraft using organic colors and teak wood."
    },
];

export default function Workshops() {
    const [selectedEvent, setSelectedEvent] = useState<any>(null);
    const [isApplied, setIsApplied] = useState(false);

    const handleApply = (event: any) => {
        setSelectedEvent(event);
        // Simulate application flow
        setTimeout(() => {
            setIsApplied(true);
        }, 1500);
    };

    return (
        <main style={{ minHeight: '100vh', backgroundColor: 'var(--bg-off-white)' }}>
            <Navbar />

            {/* Header */}
            <section style={{ padding: '160px 0 80px', backgroundColor: 'var(--color-sand)' }}>
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        style={{ textAlign: 'center' }}
                    >
                        <span className="tagline-accent">Interactive Learning</span>
                        <h1 style={{ fontSize: '3.5rem', marginTop: '10px' }}>Craft Workshops</h1>
                        <p style={{ maxWidth: '600px', margin: '20px auto', opacity: 0.8 }}>
                            Experience the soul of Indian crafts through hands-on sessions guided by master artisans in their own studios.
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="section-spacer">
                <div className="container">
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '60px' }}>
                        {events.map((event, idx) => (
                            <motion.div
                                key={event.id}
                                initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                style={{
                                    display: 'grid',
                                    gridTemplateColumns: idx % 2 === 0 ? '1fr 1.2fr' : '1.2fr 1fr',
                                    gap: '60px',
                                    alignItems: 'center',
                                    backgroundColor: 'var(--color-white)',
                                    borderRadius: '40px',
                                    overflow: 'hidden',
                                    boxShadow: 'var(--shadow-subtle)'
                                }}
                            >
                                <div style={{ position: 'relative', height: '500px', order: idx % 2 === 0 ? 0 : 1 }}>
                                    <Image src={event.image} alt={event.title} fill style={{ objectFit: 'cover' }} />
                                    <div style={{
                                        position: 'absolute',
                                        top: '30px',
                                        left: '30px',
                                        backgroundColor: 'var(--color-terracotta)',
                                        color: 'white',
                                        padding: '10px 20px',
                                        borderRadius: '100px',
                                        fontWeight: 700
                                    }}>
                                        {event.price}
                                    </div>
                                </div>

                                <div style={{ padding: '60px' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
                                        <div style={{ width: '30px', height: '30px', borderRadius: '50%', backgroundColor: 'var(--color-sand)', overflow: 'hidden' }}>
                                            <Image src="/artisan-featured.png" alt="Artisan" width={30} height={30} />
                                        </div>
                                        <p style={{ color: 'var(--color-terracotta)', fontWeight: 600 }}>with {event.artisan}</p>
                                    </div>

                                    <h3 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>{event.title}</h3>
                                    <p style={{ opacity: 0.7, lineHeight: 1.8, marginBottom: '32px', fontSize: '1.1rem' }}>{event.description}</p>

                                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '40px' }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', opacity: 0.6 }}>
                                            <Calendar size={18} /> {event.date}
                                        </div>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', opacity: 0.6 }}>
                                            <Clock size={18} /> {event.time}
                                        </div>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', opacity: 0.6 }}>
                                            <MapPin size={18} /> {event.location}
                                        </div>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', opacity: 0.6 }}>
                                            <User size={18} /> 12 Seats Left
                                        </div>
                                    </div>

                                    <div style={{ display: 'flex', gap: '20px' }}>
                                        <button
                                            onClick={() => handleApply(event)}
                                            className="btn-primary"
                                            style={{ padding: '16px 40px' }}
                                        >
                                            Apply for Workshop
                                        </button>
                                        <Link href={`/workshops/${event.id}`} className="btn-secondary" style={{ padding: '16px 40px' }}>View Detail</Link>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Application Modal Overlay */}
            <AnimatePresence>
                {selectedEvent && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        style={{
                            position: 'fixed',
                            inset: 0,
                            zIndex: 2000,
                            backgroundColor: 'rgba(0,0,0,0.8)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            backdropFilter: 'blur(10px)'
                        }}
                    >
                        <motion.div
                            initial={{ scale: 0.9, y: 20 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.9, y: 20 }}
                            style={{
                                backgroundColor: 'var(--bg-off-white)',
                                padding: '60px',
                                borderRadius: '40px',
                                maxWidth: '500px',
                                width: '90%',
                                textAlign: 'center'
                            }}
                        >
                            {!isApplied ? (
                                <>
                                    <div className="loader" style={{ margin: '0 auto 30px', width: '60px', height: '60px', border: '4px solid var(--color-sand)', borderTopColor: 'var(--color-terracotta)', borderRadius: '50%', animation: 'spin 1s linear infinite' }}></div>
                                    <h3 style={{ fontSize: '2rem', marginBottom: '10px' }}>Processing...</h3>
                                    <p style={{ opacity: 0.7 }}>Sending your application to {selectedEvent.artisan}</p>
                                </>
                            ) : (
                                <>
                                    <div style={{ color: 'var(--color-olive)', marginBottom: '30px' }}><CheckCircle2 size={80} style={{ margin: '0 auto' }} /></div>
                                    <h3 style={{ fontSize: '2rem', marginBottom: '10px' }}>Application Sent!</h3>
                                    <p style={{ opacity: 0.7, marginBottom: '30px' }}>
                                        {selectedEvent.artisan} will review your application soon. You'll receive an email update within 24 hours.
                                    </p>
                                    <button
                                        onClick={() => { setSelectedEvent(null); setIsApplied(false) }}
                                        className="btn-primary"
                                        style={{ width: '100%' }}
                                    >
                                        Back to Workshops
                                    </button>
                                </>
                            )}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            <Footer />

            <style jsx>{`
                @keyframes spin {
                    to { transform: rotate(360deg); }
                }
                @media (max-width: 1024px) {
                    section[style*="gridTemplateColumns"] { grid-template-columns: 1fr !important; }
                    div[style*="height: 500px"] { height: 300px !important; }
                }
            `}</style>
        </main>
    );
}
