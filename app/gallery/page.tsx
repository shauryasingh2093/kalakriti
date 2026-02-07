"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { motion } from "framer-motion";

const galleryImages = [
    { id: 1, src: "/hero.png", span: "row-span-2" },
    { id: 2, src: "/trending-craft.png", span: "" },
    { id: 3, src: "/artisan-featured.png", span: "row-span-2" },
    { id: 4, src: "/hero.png", span: "" },
    { id: 5, src: "/trending-craft.png", span: "row-span-2" },
    { id: 6, src: "/artisan-featured.png", span: "" },
    { id: 7, src: "/hero.png", span: "" },
    { id: 8, src: "/trending-craft.png", span: "row-span-2" },
];

export default function Gallery() {
    return (
        <main className="min-h-screen pt-32 bg-[var(--bg-cream)]">
            <Navbar />

            <section className="section-container">
                <header className="mb-20 text-center">
                    <h1 className="text-7xl mb-6">Inspiration Feed</h1>
                    <p className="text-xl text-[var(--text-muted)] max-w-2xl mx-auto">
                        A curated visual journey through the soul of Indian craftsmanship. Warm, filtered, and timeless.
                    </p>
                </header>

                <div className="columns-1 md:columns-2 lg:columns-4 gap-6 space-y-6">
                    {galleryImages.map((img, idx) => (
                        <motion.div
                            layout
                            key={img.id}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="break-inside-avoid relative group rounded-2xl overflow-hidden shadow-sm"
                        >
                            <Image
                                src={img.src}
                                alt={`Gallery ${img.id}`}
                                width={600}
                                height={idx % 2 === 0 ? 800 : 500}
                                className="w-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-95 group-hover:brightness-100"
                            />
                            <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                        </motion.div>
                    ))}
                </div>
            </section>

            <Footer />
        </main>
    );
}
