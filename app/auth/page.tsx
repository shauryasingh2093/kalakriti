"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";

export default function Auth() {
    const [isLogin, setIsLogin] = useState(true);

    return (
        <main style={{ minHeight: '100vh', background: 'var(--bg-off-white)' }}>
            <Navbar />

            <div style={{ padding: '200px 24px 100px', display: 'flex', justifyContent: 'center' }}>
                <div style={{ width: '100%', maxWidth: '1000px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', background: 'var(--color-white)', borderRadius: '40px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.05)' }}>
                    {/* Brand/Welcome Side */}
                    <div style={{ background: 'var(--color-olive)', padding: '80px', color: 'var(--color-white)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                        <div>
                            <h2 style={{ fontSize: '3.5rem', marginBottom: '24px', color: 'var(--color-white)' }}>kalakriti.</h2>
                            <p style={{ fontSize: '1.2rem', opacity: 0.8, lineHeight: 1.6 }}>
                                Be part of the movement to preserve Indian craftsmanship.
                            </p>
                        </div>
                        <div>
                            <Link href="/about" style={{ color: 'var(--color-white)', opacity: 0.6, fontSize: '0.9rem' }}>Learn why we exist →</Link>
                        </div>
                    </div>

                    {/* Form Side */}
                    <div style={{ padding: '80px' }}>
                        <div style={{ display: 'flex', gap: '32px', marginBottom: '60px', borderBottom: '1px solid var(--color-sand)' }}>
                            <button
                                onClick={() => setIsLogin(true)}
                                style={{ border: 'none', background: 'none', padding: '0 0 16px', fontSize: '1.1rem', fontWeight: 700, cursor: 'pointer', color: isLogin ? 'var(--color-olive)' : 'rgba(0,0,0,0.2)', borderBottom: isLogin ? '2px solid var(--color-olive)' : 'none' }}
                            >
                                Login
                            </button>
                            <button
                                onClick={() => setIsLogin(false)}
                                style={{ border: 'none', background: 'none', padding: '0 0 16px', fontSize: '1.1rem', fontWeight: 700, cursor: 'pointer', color: !isLogin ? 'var(--color-olive)' : 'rgba(0,0,0,0.2)', borderBottom: !isLogin ? '2px solid var(--color-olive)' : 'none' }}
                            >
                                Sign Up
                            </button>
                        </div>

                        <AnimatePresence mode="wait">
                            <motion.div
                                key={isLogin ? "login" : "signup"}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}
                            >
                                <h3 style={{ fontSize: '2.5rem', marginBottom: '12px' }}>{isLogin ? "Welcome back" : "Join us"}</h3>

                                {!isLogin && (
                                    <input type="text" placeholder="Full Name" style={{ padding: '20px', borderRadius: '12px', border: '1px solid var(--color-sand)', background: 'var(--bg-off-white)', outline: 'none' }} />
                                )}
                                <input type="email" placeholder="Email Address" style={{ padding: '20px', borderRadius: '12px', border: '1px solid var(--color-sand)', background: 'var(--bg-off-white)', outline: 'none' }} />
                                <input type="password" placeholder="Password" style={{ padding: '20px', borderRadius: '12px', border: '1px solid var(--color-sand)', background: 'var(--bg-off-white)', outline: 'none' }} />

                                <button className="btn-primary" style={{ marginTop: '20px', justifyContent: 'center' }}>
                                    {isLogin ? "Continue" : "Create Account"}
                                </button>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}

import Link from "next/link";
