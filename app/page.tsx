"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  const crafts = [
    { id: 1, img: "/hero.png" },
    { id: 2, img: "/trending-craft.png" },
    { id: 3, img: "/artisan-featured.png" },
    { id: 4, img: "/hero.png" },
    { id: 5, img: "/trending-craft.png" },
  ];

  return (
    <main style={{ minHeight: '100vh' }}>
      <Navbar />

      {/* Hero Section based on Frame 6 */}
      <section style={{ padding: '180px 0 80px', textAlign: 'center' }}>
        <div className="container">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="tagline-accent"
            style={{ marginBottom: '20px' }}
          >
            Create • Connect • Celebrate
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="hero-large"
            style={{ marginBottom: '40px' }}
          >
            kalakriti
          </motion.h1>

          {/* Gallery Strip from Frame 6 */}
          <div className="gallery-strip">
            {crafts.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.15 }}
                className="gallery-item"
              >
                <Image src={item.img} alt="Craft" fill />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Alternating Content Blocks from Frame 6 */}
      <section className="section-spacer">
        <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: '150px' }}>

          {/* Block 1 */}
          <div className="content-block">
            <div className="image-wrapper">
              <Image src="/artisan-featured.png" alt="Featured" width={600} height={700} />
            </div>
            <div style={{ padding: '40px' }}>
              <span className="tagline-accent">Featured Story</span>
              <h2 style={{ fontSize: '4rem', margin: '24px 0', lineHeight: 1.1 }}>The Hands of Channapatna</h2>
              <p style={{ fontSize: '1.2rem', color: 'var(--color-charcoal)', opacity: 0.8, marginBottom: '40px' }}>
                Discover the life of Rahamatullah, a master artisan who has been carving wooden memories for over half a century.
              </p>
              <Link href="/artisan/1" className="btn-primary">Read More <ArrowRight size={18} style={{ marginLeft: '12px' }} /></Link>
            </div>
          </div>

          {/* Block 2 (Reverse) */}
          <div className="content-block reverse">
            <div className="image-wrapper" style={{ backgroundColor: 'var(--color-olive)', opacity: 0.9 }}>
              <Image src="/trending-craft.png" alt="Process" width={600} height={700} style={{ mixBlendMode: 'multiply' }} />
            </div>
            <div style={{ padding: '40px' }}>
              <span className="tagline-accent" style={{ color: 'var(--color-olive)' }}>Our Philosophy</span>
              <h2 style={{ fontSize: '4rem', margin: '24px 0', lineHeight: 1.1 }}>Crafted for the Modern Soul</h2>
              <p style={{ fontSize: '1.2rem', color: 'var(--color-charcoal)', opacity: 0.8, marginBottom: '40px' }}>
                We believe in slow design, where every stroke matters and every story is preserved. Join us in celebrating Indian heritage.
              </p>
              <Link href="/about" className="btn-secondary">Our Mission</Link>
            </div>
          </div>

        </div>
      </section>

      {/* Featured Masterpieces / Masonry Preview at bottom */}
      <section className="section-spacer" style={{ background: 'var(--color-sand)', opacity: 0.5 }}>
        <div className="container">
          <h2 style={{ fontSize: '3rem', textAlign: 'center', marginBottom: '80px' }}>Inspiration Feed</h2>
          <div className="masonry">
            {[1, 2, 3, 4, 5, 6, 7, 8].map(i => (
              <div key={i} className="masonry-brick">
                <Image src={i % 2 === 0 ? "/hero.png" : "/trending-craft.png"} alt="Masonry" width={300} height={400} />
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '60px' }}>
            <Link href="/gallery" className="btn-primary">View Full Gallery</Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
