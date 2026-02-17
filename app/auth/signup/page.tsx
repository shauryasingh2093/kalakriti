"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import type { UserRole } from "@/lib/supabase";

export default function SignupPage() {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState<UserRole>("buyer");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSignup = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        setLoading(true);

        try {
            // Create auth user
            const { data: authData, error: authError } = await supabase.auth.signUp({
                email,
                password,
            });

            if (authError) throw authError;
            if (!authData.user) throw new Error("No user returned");

            // Create profile
            const { error: profileError } = await supabase.from("profiles").insert({
                id: authData.user.id,
                email,
                role,
            });

            if (profileError) throw profileError;

            // If artisan, redirect to profile creation
            if (role === "artisan") {
                router.push("/dashboard/artisan/onboarding");
            } else {
                router.push("/");
            }
        } catch (error: any) {
            setError(error.message || "Failed to create account");
        } finally {
            setLoading(false);
        }
    };

    return (
        <main style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "var(--bg-off-white)", padding: "40px 20px" }}>
            <div style={{ width: "100%", maxWidth: "450px" }}>
                <div style={{ textAlign: "center", marginBottom: "40px" }}>
                    <h1 style={{ fontSize: "3rem", marginBottom: "10px" }}>kalakriti</h1>
                    <p style={{ color: "var(--color-charcoal)", opacity: 0.7 }}>Create your account</p>
                </div>

                <div style={{ backgroundColor: "var(--color-white)", padding: "40px", borderRadius: "20px", boxShadow: "var(--shadow-subtle)" }}>
                    <form onSubmit={handleSignup}>
                        <div style={{ marginBottom: "24px" }}>
                            <label style={{ display: "block", marginBottom: "12px", fontSize: "0.9rem", fontWeight: 500 }}>
                                I am a:
                            </label>
                            <div style={{ display: "flex", gap: "12px" }}>
                                <button
                                    type="button"
                                    onClick={() => setRole("buyer")}
                                    style={{
                                        flex: 1,
                                        padding: "12px",
                                        border: `2px solid ${role === "buyer" ? "var(--color-olive)" : "var(--color-sand)"}`,
                                        backgroundColor: role === "buyer" ? "var(--color-olive)" : "transparent",
                                        color: role === "buyer" ? "var(--color-white)" : "var(--color-charcoal)",
                                        borderRadius: "10px",
                                        cursor: "pointer",
                                        fontWeight: 500,
                                        transition: "var(--transition-smooth)",
                                    }}
                                >
                                    Buyer
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setRole("artisan")}
                                    style={{
                                        flex: 1,
                                        padding: "12px",
                                        border: `2px solid ${role === "artisan" ? "var(--color-olive)" : "var(--color-sand)"}`,
                                        backgroundColor: role === "artisan" ? "var(--color-olive)" : "transparent",
                                        color: role === "artisan" ? "var(--color-white)" : "var(--color-charcoal)",
                                        borderRadius: "10px",
                                        cursor: "pointer",
                                        fontWeight: 500,
                                        transition: "var(--transition-smooth)",
                                    }}
                                >
                                    Artisan
                                </button>
                            </div>
                        </div>

                        <div style={{ marginBottom: "24px" }}>
                            <label htmlFor="email" style={{ display: "block", marginBottom: "8px", fontSize: "0.9rem", fontWeight: 500 }}>
                                Email
                            </label>
                            <input
                                id="email"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                style={{
                                    width: "100%",
                                    padding: "12px 16px",
                                    border: "1px solid var(--color-sand)",
                                    borderRadius: "10px",
                                    fontSize: "1rem",
                                    fontFamily: "var(--font-poppins)",
                                }}
                            />
                        </div>

                        <div style={{ marginBottom: "24px" }}>
                            <label htmlFor="password" style={{ display: "block", marginBottom: "8px", fontSize: "0.9rem", fontWeight: 500 }}>
                                Password
                            </label>
                            <input
                                id="password"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                minLength={6}
                                style={{
                                    width: "100%",
                                    padding: "12px 16px",
                                    border: "1px solid var(--color-sand)",
                                    borderRadius: "10px",
                                    fontSize: "1rem",
                                    fontFamily: "var(--font-poppins)",
                                }}
                            />
                            <p style={{ fontSize: "0.8rem", color: "var(--color-charcoal)", opacity: 0.6, marginTop: "6px" }}>
                                Minimum 6 characters
                            </p>
                        </div>

                        {error && (
                            <div style={{ padding: "12px", backgroundColor: "#fee", borderRadius: "8px", marginBottom: "20px", color: "#c00", fontSize: "0.9rem" }}>
                                {error}
                            </div>
                        )}

                        <button
                            type="submit"
                            disabled={loading}
                            className="btn-primary"
                            style={{ width: "100%", justifyContent: "center", opacity: loading ? 0.6 : 1 }}
                        >
                            {loading ? "Creating account..." : "Sign Up"}
                        </button>
                    </form>

                    <div style={{ marginTop: "24px", textAlign: "center", fontSize: "0.9rem" }}>
                        <span style={{ color: "var(--color-charcoal)", opacity: 0.7 }}>Already have an account? </span>
                        <Link href="/auth/login" style={{ color: "var(--color-olive)", fontWeight: 500, textDecoration: "none" }}>
                            Login
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    );
}
