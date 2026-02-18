"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import MoreProjects from "./more-projects"

export default function CategoryDetail({ category, slug }) {
    const details = category.details || {};
    const hero = category.heroProject;

    return (
        <div className="min-h-screen bg-white text-[#0a0a0a] font-sans">
            {/* 1. IMMERSIVE HERO */}
            <section className="h-[65vh] md:h-[85vh] mt-32 relative overflow-hidden">
                <Image
                    src={hero ? hero.images[0] : (category.projects[0]?.images[0] || "/placeholder.svg")}
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
                    <div className="grid md:grid-cols-12 gap-6 md:gap-16 items-start">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="md:col-span-8"
                        >
                            <span className="font-bold tracking-[0.4em] uppercase text-[10px] mb-8 block text-gray-400">Domain Expertise</span>
                            <h1 className="text-2xl md:text-4xl font-bold text-gray-950 mb-4 md:mb-6 uppercase leading-tight tracking-normal">
                                {category.title}
                            </h1>
                            <div className="space-y-6">
                                <p className="text-2xl md:text-4xl text-gray-950 leading-tight max-w-4xl font-bold uppercase tracking-normal">
                                    {category.description}
                                </p>
                                {category.descriptionLong && (
                                    <p className="text-md md:text-xl text-gray-700 leading-relaxed max-w-4xl font-light">
                                        {category.descriptionLong}
                                    </p>
                                )}
                            </div>
                        </motion.div>
                        <div className="md:col-span-4 self-end md:pl-12 border-l border-gray-100 h-full hidden md:block">
                            <p className="text-sm uppercase tracking-widest text-gray-400 mb-4 font-bold italic">Strategy First</p>
                            <p className="text-lg text-gray-600 font-sans leading-relaxed italic">
                                {details.strategyQuote || `"How do you communicate 'world-class' while remaining deeply rooted in the energetic soul of ${category.title}?"`}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. CASE STUDY CONTENT (If Hero Project Exists) */}
            {hero ? (
                <div className="space-y-0">
                    {/* The Challenge & Approach */}
                    <section className="md:py-24 py-12 bg-gray-50 px-6">
                        <div className="max-w-7xl mx-auto">
                            <div className="grid md:grid-cols-12 gap-12 md:gap-24">
                                <div className="md:col-span-8 space-y-12">
                                    <div className="space-y-4">
                                        <h3 className="text-[10px] font-bold tracking-[0.5em] uppercase text-gray-400">The Challenge</h3>
                                        <p className="text-md md:text-xl text-[#0a0a0a] font-bold leading-[1.5] tracking-tighter">
                                            {hero.challenge}
                                        </p>
                                    </div>
                                    <div className="space-y-4">
                                        <h3 className="text-[10px] font-bold tracking-[0.5em] uppercase text-gray-400">The Strategy</h3>
                                        <p className="text-md md:text-xl text-gray-600 font-light leading-relaxed">
                                            {hero.approach}
                                        </p>
                                    </div>

                                    {/* Work Scope */}
                                    <div className="pt-12 border-t border-gray-200">
                                        <h3 className="text-[10px] font-bold tracking-[0.5em] uppercase text-gray-400 mb-8">Work Scope</h3>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
                                            {hero.scope.map((item, idx) => (
                                                <div key={idx} className="flex items-center gap-3">
                                                    <div className="w-1.5 h-1.5 bg-[#0a0a0a] rounded-full" />
                                                    <span className="text-md md:text-xl text-gray-700 font-medium">{item}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <div className="md:col-span-4 border-l border-gray-100 pl-10 hidden md:block">
                                    <div className="space-y-10">
                                        <div>
                                            <h3 className="text-[10px] font-bold tracking-[0.4em] uppercase text-gray-400 mb-4">Results</h3>
                                            <p className="text-2xl text-[#0a0a0a] font-serif lowercase italic leading-snug">
                                                &quot;{hero.results}&quot;
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Chapters */}
                    <section className="py-24 bg-white overflow-hidden">
                        <div className="max-w-7xl mx-auto px-6 space-y-32">
                            {hero.sections.map((section, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8 }}
                                    className={`grid md:grid-cols-12 gap-12 md:gap-24 items-center ${idx % 2 !== 0 ? "md:flex-row-reverse" : ""}`}
                                >
                                    <div className={`md:col-span-5 space-y-6 ${idx % 2 !== 0 ? "md:order-2" : ""}`}>
                                        <div className="space-y-2">
                                            <span className="text-[10px] font-bold tracking-[0.5em] uppercase text-gray-400 block">Chapter 0{idx + 1}</span>
                                            <h2 className="text-2xl md:text-4xl font-bold uppercase tracking-normal leading-tight text-[#0a0a0a]">
                                                {section.title}
                                            </h2>
                                            <p className="text-gray-500 font-serif lowercase italic text-md md:text-lg">
                                                {section.subtitle}
                                            </p>
                                        </div>
                                        <p className="text-md md:text-xl text-gray-600 font-light leading-relaxed max-w-xl">
                                            {section.content}
                                        </p>
                                    </div>
                                    <div className={`md:col-span-7 relative ${idx % 2 !== 0 ? "md:order-1" : ""}`}>
                                        <div className="relative aspect-[16/10] rounded-sm overflow-hidden shadow-2xl">
                                            <Image src={section.images[0]} fill alt={section.title} className="object-cover" />
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </section>
                </div>
            ) : (
                /* Fallback for categories without a hero case study */
                <section className="md:py-16 py-8 px-6">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid md:grid-cols-2 gap-24 items-center mb-20">
                            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="md:space-y-5 space-y-2">
                                <span className="font-bold tracking-[0.2em] uppercase text-xs text-gray-400">Phases / 01</span>
                                <h2 className="text-2xl md:text-5xl font-bold uppercase leading-none">Strategic Focus</h2>
                                <p className="text-md md:text-2xl text-gray-600 leading-relaxed font-light">
                                    We deep dive into the archives of global trends to identify the core pillars that set you apart.
                                </p>
                            </motion.div>
                            <div className="relative aspect-square rounded overflow-hidden bg-gray-50">
                                {category.projects[0] && <Image src={category.projects[0].images[0]} alt="Focus" fill className="object-cover opacity-80" />}
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {/* Projects Section (Now showing Sub-categories) */}
            <MoreProjects
                categorySlug={slug}
                projects={category.projects}
            />
        </div>
    )
}
