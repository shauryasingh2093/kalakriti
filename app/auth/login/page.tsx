"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

export default function LoginPage() {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        setLoading(true);

        try {
            const { data, error } = await supabase.auth.signInWithPassword({
                email,
                password,
            });

            if (error) throw error;

            // Get user profile to determine role
            const { data: profile } = await supabase
                .from("profiles")
                .select("role")
                .eq("id", data.user.id)
                .single();

            // Redirect based on role
            if (profile?.role === "artisan") {
                router.push("/dashboard/artisan");
            } else {
                router.push("/");
            }
        } catch (error: any) {
            setError(error.message || "Failed to login");
        } finally {
            setLoading(false);
        }
    };

    return (
        <main style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "var(--bg-off-white)" }}>
            <div style={{ width: "100%", maxWidth: "450px", padding: "40px" }}>
                <div style={{ textAlign: "center", marginBottom: "40px" }}>
                    <h1 style={{ fontSize: "3rem", marginBottom: "10px" }}>kalakriti</h1>
                    <p style={{ color: "var(--color-charcoal)", opacity: 0.7 }}>Welcome back</p>
                </div>

                <div style={{ backgroundColor: "var(--color-white)", padding: "40px", borderRadius: "20px", boxShadow: "var(--shadow-subtle)" }}>
                    <form onSubmit={handleLogin}>
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
                            {loading ? "Logging in..." : "Login"}
                        </button>
                    </form>

                    <div style={{ marginTop: "24px", textAlign: "center", fontSize: "0.9rem" }}>
                        <span style={{ color: "var(--color-charcoal)", opacity: 0.7 }}>Don't have an account? </span>
                        <Link href="/auth/signup" style={{ color: "var(--color-olive)", fontWeight: 500, textDecoration: "none" }}>
                            Sign up
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    );
}
