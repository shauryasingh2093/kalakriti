import Link from "next/link";
import { Instagram, Twitter, Facebook } from "lucide-react";

const Footer = () => {
    return (
        <footer style={{ backgroundColor: 'var(--color-charcoal)', color: 'var(--bg-off-white)', padding: '100px 0 40px' }}>
            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '60px', marginBottom: '80px' }}>

                    <div style={{ flex: 2 }}>
                        <h2 style={{ fontSize: '2.5rem', fontFamily: 'var(--font-playfair)', marginBottom: '24px', color: 'var(--bg-off-white)' }}>kalakriti.</h2>
                        <p style={{ opacity: 0.6, fontSize: '1.1rem', maxWidth: '400px', lineHeight: 1.6 }}>
                            Preserving legacies, empowering hands. We connect the heartbeat of Indian craftsmanship with the modern world.
                        </p>
                    </div>

                    <div>
                        <h4 style={{ textTransform: 'uppercase', letterSpacing: '0.2em', fontSize: '0.8rem', marginBottom: '32px', color: 'var(--color-terracotta)' }}>Platform</h4>
                        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                            <li><Link href="/marketplace" style={{ textDecoration: 'none', color: 'inherit', opacity: 0.7 }}>Browse Marketplace</Link></li>
                            <li><Link href="/community" style={{ textDecoration: 'none', color: 'inherit', opacity: 0.7 }}>Community Feed</Link></li>
                            <li><Link href="/workshops" style={{ textDecoration: 'none', color: 'inherit', opacity: 0.7 }}>Workshops</Link></li>
                            <li><Link href="/support" style={{ textDecoration: 'none', color: 'inherit', opacity: 0.7 }}>Support Artisans</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 style={{ textTransform: 'uppercase', letterSpacing: '0.2em', fontSize: '0.8rem', marginBottom: '32px', color: 'var(--color-terracotta)' }}>Connect</h4>
                        <div style={{ display: 'flex', gap: '20px' }}>
                            <Instagram size={24} style={{ opacity: 0.7 }} />
                            <Twitter size={24} style={{ opacity: 0.7 }} />
                            <Facebook size={24} style={{ opacity: 0.7 }} />
                        </div>
                        <p style={{ marginTop: '40px', opacity: 0.5, fontSize: '0.9rem' }}>
                            hello@kalakriti.art
                        </p>
                    </div>

                </div>

                <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '40px', textAlign: 'center', opacity: 0.4, fontSize: '0.8rem' }}>
                    © 2024 Kalakriti. All rights reserved. Built with love for Indian Heritage.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
