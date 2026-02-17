"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import MoreProjects from "./more-projects"

export default function CategoryDetail({ category, slug }) {
    const details = category.details || {};

    return (
        <div className="min-h-screen bg-white">
            {/* 1. IMMERSIVE HERO */}
            <section className="h-[65vh] md:h-[85vh] mt-32 relative overflow-hidden">
                <Image
                    src={category.projects[0].images[0]}
                    alt={category.title}
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black/10" />
            </section>

            {/* 2. MAIN INTRO & CATEGORY LEADER */}
            <section className="pt-20 pb-20 px-6 md:px-12">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-12 gap-16 items-start">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="md:col-span-8"
                        >
                            <span className="text-pink-600 font-bold tracking-[0.4em] uppercase text-[10px] mb-8 block">Domain Expertise</span>
                            <h1 className="text-5xl md:text-7xl font-sans text-gray-950 mb-4 uppercase leading-[0.9] tracking-tighter">
                                {category.title}
                            </h1>
                            <p className="text-xl md:text-2xl text-gray-800 leading-snug max-w-4xl">
                                {category.description}
                            </p>
                        </motion.div>
                        <div className="md:col-span-4 self-end md:pl-12 border-l border-gray-100 h-full hidden md:block">
                            <p className="text-sm uppercase tracking-widest text-gray-400 mb-4 font-bold italic">Strategy First</p>
                            <p className="text-lg text-gray-600 font-sans leading-relaxed italic">
                                {details.strategyQuote || `"How do you communicate 'world-class' while remaining deeply rooted in the raw, real, energetic soul of ${category.title}?"`}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. THE CHALLENGE */}
            <section className="py-16 bg-gray-50 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-12 gap-16 ">
                        <div className="md:col-span-4">
                            <h2 className="text-3xl font-sans text-gray-950 uppercase tracking-tight">
                                The Challenge:<br /><span className="text-gray-400 italic">{details.challengeTitle || "Global Appeal"}</span>
                            </h2>
                        </div>
                        <div className="md:col-span-8">
                            {details.challengeText ? details.challengeText.map((text, i) => (
                                <p key={i} className={`text-xl md:text-2xl text-gray-700 leading-relaxed font-light ${i < details.challengeText.length - 1 ? 'mb-8' : ''}`}>
                                    {text}
                                </p>
                            )) : (
                                <p className="text-xl md:text-2xl text-gray-700 leading-relaxed font-light">
                                    In an increasingly crowded digital landscape, the challenge isn&apos;t just to be seen; it&apos;s to be understood. We bridge the gap between corporate rigidity and creative soul, ensuring every asset speaks to stakeholders and enthusiasts alike without losing its heartbeat.
                                </p>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. STRATEGIC FOCUS */}
            <section className="py-16 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-24 items-center mb-20">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-5"
                        >
                            <span className="text-pink-600 font-bold tracking-[0.2em] uppercase text-xs">Phases / 01</span>
                            <h2 className="text-4xl md:text-5xl font-sans text-gray-950 uppercase leading-none">Strategic Focus</h2>
                            {details.approachText ? details.approachText.map((text, i) => (
                                <p key={i} className="text-xl md:text-2xl text-gray-600 leading-relaxed font-light">
                                    {text}
                                </p>
                            )) : (
                                <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-light">
                                    We deep dive into the archives of global trends to identify the core pillars that set you apart. Before a single pixel is moved, we build a comprehensive creative direction that establishes the entire visual ecosystem.
                                </p>
                            )}
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="relative aspect-[3/3] rounded overflow-hidden"
                        >
                            {category.behindTheScenes && category.behindTheScenes[0] && (
                                <Image src={category.behindTheScenes[0]} alt="Focus" fill className="object-cover" />
                            )}
                        </motion.div>
                    </div>

                    {/* 5. OUR APPROACH */}
                    <div className="grid md:grid-cols-2 gap-24 items-center mb-20">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="relative aspect-[3/3] rounded overflow-hidden order-2 md:order-1"
                        >
                            {category.behindTheScenes && (category.behindTheScenes[1] || category.behindTheScenes[0]) && (
                                <Image src={category.behindTheScenes[1] || category.behindTheScenes[0]} alt="Approach" fill className="object-cover" />
                            )}
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-5 order-1 md:order-2"
                        >
                            <span className="text-pink-600 font-bold tracking-[0.2em] uppercase text-xs">Phases / 02</span>
                            <h2 className="text-4xl md:text-5xl font-sans text-gray-950 uppercase leading-none">Our Approach</h2>
                            <p className="text-xl md:text-2xl font-sans text-gray-950 italic font-light leading-tight">
                                {details.approachPhilosophy || '"More thinking, less design. We live in the details, anticipating creative needs."'}
                            </p>
                            <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-light">
                                Over the duration of a project, we become a literal extension of your team. We don’t just hand over designs;
                                we curate experiences that look and feel as professional as the performances on stage.
                            </p>
                        </motion.div>
                    </div>

                    {/* 6. THE RESULT */}
                    <div className="py-16 ">
                        <div className="grid md:grid-cols-12 gap-16 items-start">
                            <div className="md:col-span-4">
                                <h3 className="text-2xl md:text-3xl font-sans text-gray-950 uppercase tracking-tight">
                                    The Result:<br /><span className="text-gray-400">{details.resultTitle || "Clarity"}</span>
                                </h3>
                            </div>
                            <div className="md:col-span-8">
                                <p className="text-xl md:text-2xl text-gray-900 leading-tight font-sans italic mb-4">
                                    {details.resultPhilosophy || '"When the work is unified, the audience feels the impact."'}
                                </p>
                                <p className="text-xl md:text-2xl text-gray-700 leading-relaxed font-light">
                                    {details.resultText || "The victory is in the clarity of the vision. We design an atmosphere that is enjoyable, easy to navigate, and beautifully curated. The real ROI is in the audience's perception."}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* 7. THE PHILOSOPHY */}
                    <div className="py-32 border-y border-gray-100">
                        <div className="grid md:grid-cols-12 gap-16 items-start mb-24">
                            <div className="md:col-span-4">
                                <h3 className="text-2xl md:text-3xl font-sans text-gray-950 uppercase tracking-tighter">The Philosophy</h3>
                                <div className="w-12 h-1 bg-pink-600 mt-6" />
                            </div>
                            <div className="md:col-span-8">
                                <p className="text-2xl md:text-4xl font-sans text-gray-900 leading-tight tracking-tight mb-4 uppercase">
                                    {details.philosophyMainTitle || "LIVING IN THE DETAILS AS AN EXTENSION OF YOUR TEAM."}
                                </p>
                                <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-light font-sans italic text-gray-500">
                                    {details.philosophyText || "Every reel, poster, and merchandise tag is a vital chapter in your brand story. We treat them as such, ensuring the cultural impact remains at the forefront of every creative decision."}
                                </p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {category.behindTheScenes && category.behindTheScenes.slice(0, 2).map((img, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="relative aspect-[4/3] overflow-hidden "
                                >
                                    <Image src={img} alt="Philosophy detail" fill className="object-cover" />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <MoreProjects
                categorySlug={slug}
                projects={category.projects}
            />
        </div>
    )
}
