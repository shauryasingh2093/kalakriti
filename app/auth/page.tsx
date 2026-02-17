"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { User, Briefcase, ArrowRight } from "lucide-react";

export default function Auth() {
    const [isLogin, setIsLogin] = useState(true);
    const [role, setRole] = useState<"buyer" | "artisan">("buyer");

    return (
        <main style={{ minHeight: '100vh', background: 'var(--bg-off-white)' }}>
            <Navbar />

            <div style={{ padding: '180px 24px 100px', display: 'flex', justifyContent: 'center' }}>
                <div style={{
                    width: '100%',
                    maxWidth: '1100px',
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                    background: 'var(--color-white)',
                    borderRadius: '40px',
                    overflow: 'hidden',
                    boxShadow: 'var(--shadow-hover)'
                }}>
                    {/* Brand/Welcome Side */}
                    <div style={{ background: 'var(--color-olive)', padding: '80px', color: 'var(--color-white)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', position: 'relative', overflow: 'hidden' }}>
                        <div style={{ position: 'relative', zIndex: 1 }}>
                            <h2 style={{ fontSize: '3.5rem', marginBottom: '24px', color: 'white' }}>kalakriti.</h2>
                            <p style={{ fontSize: '1.2rem', opacity: 0.9, lineHeight: 1.6 }}>
                                "{isLogin ? "Welcome back to the sanctuary of Indian heritage." : "Be part of the movement to preserve Indian craftsmanship."}"
                            </p>
                        </div>
                        <div style={{ position: 'relative', zIndex: 1 }}>
                            {!isLogin ? (
                                <p style={{ fontSize: '0.9rem', opacity: 0.7 }}>Already have an account? <button onClick={() => setIsLogin(true)} style={{ color: 'white', textDecoration: 'underline', background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>Login here</button></p>
                            ) : (
                                <p style={{ fontSize: '0.9rem', opacity: 0.7 }}>Don't have an account? <button onClick={() => setIsLogin(false)} style={{ color: 'white', textDecoration: 'underline', background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>Register now</button></p>
                            )}
                        </div>

                        {/* Decorative Circle */}
                        <div style={{ position: 'absolute', bottom: '-100px', right: '-100px', width: '300px', height: '300px', borderRadius: '50%', backgroundColor: 'rgba(250, 248, 242, 0.05)' }}></div>
                    </div>

                    {/* Form Side */}
                    <div style={{ padding: '60px clamp(40px, 5vw, 80px)' }}>
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={isLogin ? "login" : "signup"}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.5 }}
                                style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}
                            >
                                <h3 style={{ fontSize: '2.5rem', marginBottom: '10px' }}>{isLogin ? "Sign In" : "Create Account"}</h3>
                                <p style={{ opacity: 0.6, marginBottom: '20px' }}>
                                    {isLogin ? "Enter your credentials to access your account." : "Join thousands of art lovers and master artisans."}
                                </p>

                                {!isLogin && (
                                    <div style={{ display: 'flex', gap: '15px', marginBottom: '20px' }}>
                                        <button
                                            onClick={() => setRole("buyer")}
                                            style={{
                                                flex: 1,
                                                padding: '15px',
                                                borderRadius: '16px',
                                                border: '1px solid',
                                                borderColor: role === "buyer" ? 'var(--color-terracotta)' : 'var(--color-sand)',
                                                background: role === "buyer" ? 'var(--color-sand)' : 'white',
                                                display: 'flex',
                                                flexDirection: 'column',
                                                alignItems: 'center',
                                                gap: '8px',
                                                cursor: 'pointer',
                                                transition: 'var(--transition-smooth)'
                                            }}
                                        >
                                            <User size={20} color={role === "buyer" ? 'var(--color-terracotta)' : 'inherit'} />
                                            <span style={{ fontSize: '0.8rem', fontWeight: 600 }}>Buyer</span>
                                        </button>
                                        <button
                                            onClick={() => setRole("artisan")}
                                            style={{
                                                flex: 1,
                                                padding: '15px',
                                                borderRadius: '16px',
                                                border: '1px solid',
                                                borderColor: role === "artisan" ? 'var(--color-terracotta)' : 'var(--color-sand)',
                                                background: role === "artisan" ? 'var(--color-sand)' : 'white',
                                                display: 'flex',
                                                flexDirection: 'column',
                                                alignItems: 'center',
                                                gap: '8px',
                                                cursor: 'pointer',
                                                transition: 'var(--transition-smooth)'
                                            }}
                                        >
                                            <Briefcase size={20} color={role === "artisan" ? 'var(--color-terracotta)' : 'inherit'} />
                                            <span style={{ fontSize: '0.8rem', fontWeight: 600 }}>Artisan</span>
                                        </button>
                                    </div>
                                )}

                                <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                                    {!isLogin && (
                                        <input type="text" placeholder="Full Name" style={{ padding: '18px 24px', borderRadius: '14px', border: '1px solid var(--color-sand)', background: 'var(--bg-off-white)', outline: 'none', fontSize: '1rem' }} />
                                    )}
                                    <input type="email" placeholder="Email Address" style={{ padding: '18px 24px', borderRadius: '14px', border: '1px solid var(--color-sand)', background: 'var(--bg-off-white)', outline: 'none', fontSize: '1rem' }} />
                                    <input type="password" placeholder="Password" style={{ padding: '18px 24px', borderRadius: '14px', border: '1px solid var(--color-sand)', background: 'var(--bg-off-white)', outline: 'none', fontSize: '1rem' }} />
                                </div>

                                {isLogin && (
                                    <div style={{ textAlign: 'right' }}>
                                        <button style={{ border: 'none', background: 'none', fontSize: '0.85rem', opacity: 0.6, cursor: 'pointer' }}>Forgot Password?</button>
                                    </div>
                                )}

                                <button className="btn-primary" style={{ marginTop: '20px', padding: '18px', justifyContent: 'center', fontSize: '1rem' }}>
                                    {isLogin ? "Continue to Kalakriti" : "Complete Registration"}
                                    <ArrowRight size={18} style={{ marginLeft: '10px' }} />
                                </button>

                                <p style={{ fontSize: '0.8rem', opacity: 0.5, textAlign: 'center', marginTop: '20px' }}>
                                    By continuing, you agree to Kalakriti's Terms of Service and Privacy Policy.
                                </p>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
