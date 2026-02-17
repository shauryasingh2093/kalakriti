"use client";

import { use } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowLeft, ShoppingBag, Heart, Share2, MapPin, Award } from "lucide-react";

export default function ProductDetail({ params }: { params: Promise<{ id: string }> }) {
    const { id } = use(params);

    // Mock data for the product
    const product = {
        id: id,
        name: "Indigo Glazed Vase",
        price: "₹2,499",
        artisan: {
            id: 1,
            name: "Ram Narayan",
            craft: "Blue Pottery",
            region: "Jaipur, Rajasthan",
            img: "/artisan-featured.png"
        },
        category: "Pottery",
        images: ["/trending-craft.png", "/hero.png", "/artisan-featured.png"],
        description: "This exquisite Blue Pottery vase is handcrafted by master artisan Ram Narayan using traditional techniques passed down through five generations. The vibrant indigo glaze is derived from natural cobalt oxide, ensuring a deep, rich color that never fades.",
        story: "Blue Pottery is unique because it is the only pottery in the world that does not use clay. Instead, it is made from a mix of quartz stone powder, powdered glass, Multani Mitti (Fuller's Earth), borax, gum, and water. This specific piece took over 12 days to complete, including the meticulous hand-painting of traditional floral motifs.",
        materials: ["Quartz Powder", "Glass Powder", "Natural Indigo Tint", "Fuller's Earth"],
        dimensions: "12\" Height x 8\" Diameter"
    };

    return (
        <main style={{ minHeight: '100vh', backgroundColor: 'var(--bg-off-white)' }}>
            <Navbar />

            <section style={{ padding: '120px 0 80px' }}>
                <div className="container">
                    <Link href="/marketplace" className="btn-text" style={{ marginBottom: '40px' }}>
                        <ArrowLeft size={16} /> Back to Marketplace
                    </Link>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'start' }}>
                        {/* Image Gallery */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                style={{ position: 'relative', aspectRatio: '1/1', borderRadius: '30px', overflow: 'hidden', backgroundColor: 'var(--color-sand)' }}
                            >
                                <Image src={product.images[0]} alt={product.name} fill style={{ objectFit: 'cover' }} />
                            </motion.div>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
                                {product.images.map((img, i) => (
                                    <div key={i} style={{ position: 'relative', aspectRatio: '1/1', borderRadius: '15px', overflow: 'hidden', cursor: 'pointer', border: i === 0 ? '2px solid var(--color-terracotta)' : 'none' }}>
                                        <Image src={img} alt="Thumbnail" fill style={{ objectFit: 'cover' }} />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Product Info */}
                        <div>
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                            >
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                                    <div>
                                        <span className="tagline-accent" style={{ fontSize: '0.8rem' }}>{product.category}</span>
                                        <h1 style={{ fontSize: '3rem', margin: '10px 0' }}>{product.name}</h1>
                                    </div>
                                    <div style={{ display: 'flex', gap: '15px' }}>
                                        <button style={{ background: 'white', border: '1px solid var(--color-sand)', padding: '10px', borderRadius: '50%', cursor: 'pointer' }}><Heart size={20} /></button>
                                        <button style={{ background: 'white', border: '1px solid var(--color-sand)', padding: '10px', borderRadius: '50%', cursor: 'pointer' }}><Share2 size={20} /></button>
                                    </div>
                                </div>

                                <div style={{ display: 'flex', alignItems: 'center', gap: '20px', margin: '20px 0' }}>
                                    <p style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--color-terracotta)' }}>{product.price}</p>
                                    <span style={{ padding: '4px 12px', backgroundColor: 'var(--color-olive)', color: 'white', borderRadius: '100px', fontSize: '0.75rem', fontWeight: 600 }}>In Stock</span>
                                </div>

                                <p style={{ fontSize: '1.1rem', lineHeight: 1.8, opacity: 0.8, marginBottom: '40px' }}>
                                    {product.description}
                                </p>

                                {/* Artisan Link */}
                                <Link href={`/artisan/${product.artisan.id}`} style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '20px',
                                    padding: '24px',
                                    backgroundColor: 'var(--color-sand)',
                                    borderRadius: '20px',
                                    textDecoration: 'none',
                                    color: 'inherit',
                                    marginBottom: '40px',
                                    transition: 'var(--transition-smooth)'
                                }}>
                                    <div style={{ position: 'relative', width: '60px', height: '60px', borderRadius: '50%', overflow: 'hidden' }}>
                                        <Image src={product.artisan.img} alt={product.artisan.name} fill style={{ objectFit: 'cover' }} />
                                    </div>
                                    <div>
                                        <p style={{ fontSize: '0.8rem', opacity: 0.6, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Meet the Artisan</p>
                                        <h4 style={{ fontSize: '1.2rem' }}>{product.artisan.name}</h4>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '0.8rem', opacity: 0.7 }}>
                                            <MapPin size={12} /> {product.artisan.region}
                                        </div>
                                    </div>
                                </Link>

                                <div style={{ display: 'flex', gap: '20px' }}>
                                    <button className="btn-primary" style={{ flex: 2, padding: '18px', fontSize: '1rem' }}>
                                        <ShoppingBag size={20} style={{ marginRight: '10px' }} /> Buy This Piece
                                    </button>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Story & Process Section */}
            <section className="section-spacer" style={{ backgroundColor: 'var(--color-white)' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '100px' }}>
                        <div>
                            <h2 style={{ fontSize: '2.5rem', marginBottom: '30px' }}>The Craft Story</h2>
                            <p style={{ fontSize: '1.1rem', lineHeight: 2, opacity: 0.8 }}>{product.story}</p>

                            <div style={{ marginTop: '40px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px' }}>
                                <div>
                                    <h4 style={{ marginBottom: '15px' }}>Materials</h4>
                                    <ul style={{ listStyle: 'none', padding: 0 }}>
                                        {product.materials.map((m, i) => (
                                            <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px', opacity: 0.7 }}>
                                                <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--color-terracotta)' }}></div>
                                                {m}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div>
                                    <h4 style={{ marginBottom: '15px' }}>Dimensions</h4>
                                    <p style={{ opacity: 0.7 }}>{product.dimensions}</p>
                                </div>
                            </div>
                        </div>

                        <div style={{ position: 'relative', borderRadius: '30px', overflow: 'hidden', height: '500px' }}>
                            <Image src="/hero.png" alt="Craft Process" fill style={{ objectFit: 'cover' }} />
                            <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0,0,0,0.2)' }}></div>
                            <div style={{ position: 'absolute', bottom: '40px', left: '40px', color: 'white' }}>
                                <Award size={40} style={{ color: 'var(--color-sand)', marginBottom: '20px' }} />
                                <h3 style={{ color: 'white', fontSize: '2rem' }}>Traditional <br />Certified</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
