import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Heart, Globe, CreditCard, Gift } from "lucide-react";

export default function Support() {
    return (
        <main className="min-h-screen pt-32">
            <Navbar />

            <section className="section-container">
                <div className="max-w-4xl mx-auto text-center mb-20">
                    <h1 className="text-6xl mb-6">Support Our Artisans</h1>
                    <p className="text-xl text-[var(--text-muted)]">
                        Every contribution directly helps preserve a dying craft and supports an artisan community.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-32">
                    {[
                        {
                            title: "Direct Support",
                            desc: "Contribute to an artisan's workshop fund for tools and raw materials.",
                            icon: <CreditCard size={32} className="text-[var(--accent-terracotta)]" />,
                        },
                        {
                            title: "Adopt a Craft",
                            desc: "Monthly support for specific endangered craft forms to ensure teaching continues.",
                            icon: <Heart size={32} className="text-[var(--accent-terracotta)]" />,
                        },
                        {
                            title: "Corporate Gifting",
                            desc: "Bulk orders for sustainable, handcrafted corporate gifts.",
                            icon: <Gift size={32} className="text-[var(--accent-terracotta)]" />,
                        },
                        {
                            title: "Global Reach",
                            desc: "Help us take these masterpieces to international exhibitions.",
                            icon: <Globe size={32} className="text-[var(--accent-terracotta)]" />,
                        },
                    ].map((item, idx) => (
                        <div key={idx} className="glass-morphism p-12 rounded-[40px] space-y-6">
                            {item.icon}
                            <h3 className="text-3xl">{item.title}</h3>
                            <p className="text-lg text-[var(--text-muted)] leading-relaxed">
                                {item.desc}
                            </p>
                            <button className="btn-secondary">Learn More</button>
                        </div>
                    ))}
                </div>
            </section>

            <Footer />
        </main>
    );
}
