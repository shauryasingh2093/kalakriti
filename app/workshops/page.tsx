"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import Image from "next/image";
import { Calendar, Clock, MapPin } from "lucide-react";

const events = [
    {
        id: 1,
        title: "Masterclass: Traditional Pottery",
        artisan: "Master Rahamatullah",
        date: "Jan 15, 2026",
        time: "10:00 AM - 4:00 PM",
        location: "Channapatna",
        price: "₹1,500",
        image: "/trending-craft.png",
    },
    {
        id: 2,
        title: "Silk Weaving Techniques",
        artisan: "Savitri Devi",
        date: "Jan 22, 2026",
        time: "2:00 PM - 6:00 PM",
        location: "Varanasi Studio",
        price: "₹2,500",
        image: "/hero.png",
    },
];

export default function Workshops() {
    return (
        <main style={{ minHeight: '100vh', paddingTop: '160px' }}>
            <Navbar />

            <section className="container">
                <header style={{ marginBottom: '80px' }}>
                    <span className="tagline-accent">Learn from Masters</span>
                    <h1 style={{ fontSize: '5rem', marginTop: '20px' }}>Workshops</h1>
                    <p style={{ fontSize: '1.2rem', opacity: 0.6, maxWidth: '600px', marginTop: '20px' }}>
                        Hands-on learning experiences guided by national award-winning artisans.
                    </p>
                </header>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '40px', marginBottom: '120px' }}>
                    {events.map((event) => (
                        <motion.div
                            layout
                            key={event.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            style={{ display: 'flex', background: 'var(--color-white)', borderRadius: '30px', overflow: 'hidden', boxShadow: 'var(--shadow-subtle)' }}
                            className="event-card"
                        >
                            <div style={{ position: 'relative', width: '400px', height: '350px' }} className="event-img">
                                <Image src={event.image} alt={event.title} fill style={{ objectFit: 'cover' }} />
                                <div style={{ position: 'absolute', top: '24px', left: '24px', background: 'var(--color-white)', padding: '8px 16px', borderRadius: '100px', fontWeight: 700 }}>
                                    {event.price}
                                </div>
                            </div>

                            <div style={{ padding: '60px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                <h3 style={{ fontSize: '2.5rem', marginBottom: '12px' }}>{event.title}</h3>
                                <p style={{ color: 'var(--color-terracotta)', fontWeight: 600, fontSize: '1.1rem', marginBottom: '32px' }}>with {event.artisan}</p>

                                <div style={{ display: 'flex', gap: '40px', marginBottom: '40px', opacity: 0.6 }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Calendar size={18} /> {event.date}</div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Clock size={18} /> {event.time}</div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><MapPin size={18} /> {event.location}</div>
                                </div>

                                <button className="btn-primary" style={{ alignSelf: 'flex-start' }}>Register Session</button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            <Footer />

            <style jsx>{`
        @media (max-width: 1024px) {
            .event-card { flex-direction: column; }
            .event-img { width: 100% !important; height: 300px !important; }
        }
      `}</style>
        </main>
    );
}
