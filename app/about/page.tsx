import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function About() {
    return (
        <main className="min-h-screen">
            <Navbar />

            {/* Editorial Header */}
            <section className="pt-48 pb-32 px-6">
                <div className="max-w-7xl mx-auto text-center">
                    <span className="text-[var(--accent-terracotta)] font-bold tracking-[0.4em] uppercase text-sm mb-8 block">
                        Our Mission
                    </span>
                    <h1 className="text-7xl md:text-9xl mb-12">Bridging Time & Craft</h1>
                    <p className="text-3xl md:text-4xl text-[var(--tone-earth)] font-light max-w-5xl mx-auto leading-tight italic">
                        "Kalakriti was born from a simple realization: that behind every masterpiece lie hands that carry the weight of a thousand-year-old legacy."
                    </p>
                </div>
            </section>

            {/* Image Spread */}
            <section className="px-6 mb-32">
                <div className="max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 h-[70vh]">
                    <div className="relative rounded-[40px] overflow-hidden">
                        <Image src="/hero.png" alt="Crafting" fill className="object-cover" />
                    </div>
                    <div className="grid grid-rows-2 gap-6">
                        <div className="relative rounded-[40px] overflow-hidden">
                            <Image src="/trending-craft.png" alt="Pottery" fill className="object-cover" />
                        </div>
                        <div className="relative rounded-[40px] overflow-hidden">
                            <Image src="/artisan-featured.png" alt="Artisan" fill className="object-cover" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="bg-[var(--tone-earth)] py-32 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
                        <div className="space-y-6">
                            <h3 className="text-4xl text-[var(--bg-cream)]">Visibility</h3>
                            <p className="text-xl text-[var(--bg-cream)] opacity-60 leading-relaxed">
                                Giving local artisans a global stage to showcase their skills, stories, and products without intermediaries.
                            </p>
                        </div>
                        <div className="space-y-6">
                            <h3 className="text-4xl text-[var(--bg-cream)]">Sustainability</h3>
                            <p className="text-xl text-[var(--bg-cream)] opacity-60 leading-relaxed">
                                Promoting eco-friendly crafts and sustainable livelihoods for artisan communities across India.
                            </p>
                        </div>
                        <div className="space-y-6">
                            <h3 className="text-4xl text-[var(--bg-cream)]">Connection</h3>
                            <p className="text-xl text-[var(--bg-cream)] opacity-60 leading-relaxed">
                                Building deep emotional bonds between creators and appreciators through workshops and direct interaction.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
