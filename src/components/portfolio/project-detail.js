"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useRef } from "react"

export default function ProjectDetail({ project, categorySlug }) {
    const scrollRef = useRef(null)

    // Ensure we don't show generic fallbacks if specific data isn't there
    const hasStoryDetails = project.challenge || project.approach;

    return (
        <div className="min-h-screen text-[#0a0a0a] font-sans selection:bg-gray-100 bg-white">
            {/* 1. PROFESSIONAL PROJECT HEADER */}
            <section className="pt-32 pb-16 px-6 md:px-16 border-b border-gray-50">
                <div className="max-w-[1600px] mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="flex items-center pt-8 gap-4 mb-8">
                            <span className="text-gray-400 font-bold tracking-[0.4em] uppercase text-[10px]">
                                {categorySlug.replace('-', ' ')}
                            </span>
                            <div className="h-[1px] w-12 bg-gray-100" />
                        </div>

                        <h1 className="text-2xl md:text-4xl font-bold uppercase leading-tight tracking-normal mb-4 text-[#0a0a0a]">
                            {project.title}
                        </h1>
                        {project.client && (
                            <p className="text-[10px] font-bold tracking-[0.5em] uppercase text-gray-500 mb-12">
                                Client: {project.client}
                            </p>
                        )}

                        {/* Project Narrative Block - Strictly Data Driven */}
                        {hasStoryDetails && (
                            <div className="grid md:grid-cols-12 gap-12 md:gap-24 items-start">
                                <div className="md:col-span-8 space-y-4 md:space-y-12">
                                    {project.challenge && (
                                        <div className="md:space-y-4 space-y-2">
                                            <h3 className="text-[10px] font-bold tracking-[0.5em] uppercase text-gray-500">The Challenge</h3>
                                            <p className="text-md md:text-2xl text-[#0a0a0a] leading-[1.5] tracking-tighter">
                                                {project.challenge}
                                            </p>
                                        </div>
                                    )}
                                    {project.approach && (
                                        <div className="space-y-4">
                                            <h3 className="text-[10px] font-bold tracking-[0.5em] uppercase text-gray-500">The Strategy</h3>
                                            <p className="text-md md:text-xl text-gray-600 font-light leading-relaxed max-w-3xl">
                                                {project.approach}
                                            </p>
                                        </div>
                                    )}

                                    {/* Work Scope - New Detailed Breakdown */}
                                    {project.scope && (
                                        <div className="pt-12 border-t border-gray-50">
                                            <h3 className="text-[10px] font-bold tracking-[0.5em] uppercase text-gray-500 mb-8">Work Scope</h3>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
                                                {project.scope.map((item, idx) => (
                                                    <div key={idx} className="flex items-center gap-3">
                                                        <div className="w-1.5 h-1.5 bg-[#0a0a0a] rounded-full" />
                                                        <span className="text-md md:text-xl text-gray-700 font-medium">{item}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>

                                <div className="md:col-span-4 border-l border-gray-100 pl-10">
                                    <div className="md:space-y-10 space-y-3">
                                        {project.results && (
                                            <div>
                                                <h3 className="text-[10px] font-bold tracking-[0.4em] uppercase text-gray-500 mb-4">Results</h3>
                                                <p className="text-2xl text-[#0a0a0a] font-serif lowercase italic leading-snug">
                                                    &quot;{project.results}&quot;
                                                </p>
                                            </div>
                                        )}
                                        <div className="md:pt-10 pt-3  border-t border-gray-50">
                                            <h3 className="text-[10px] font-bold tracking-[0.4em] uppercase text-gray-500 mb-2">Discipline</h3>
                                            <p className="text-xs font-bold tracking-widest uppercase text-gray-950">{categorySlug.replace('-', ' ')}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </motion.div>
                </div>
            </section>

            {/* 2. MODULAR PROJECT CHAPTERS (Chapters of the Story) */}
            {project.sections && (
                <section className="py-12 md:py-24 bg-white overflow-hidden">
                    <div className="max-w-[1600px] mx-auto px-6 md:px-16 space-y-32">
                        {project.sections.map((section, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8 }}
                                className={`grid md:grid-cols-12 gap-12 md:gap-24 items-center ${idx % 2 !== 0 ? "md:flex-row-reverse" : ""
                                    }`}
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
                                        <Image
                                            src={section.images[0]}
                                            fill
                                            alt={section.title}
                                            className="object-cover"
                                        />
                                    </div>
                                    {/* Abstract background element for extra "perception" vibe */}
                                    <div className={`absolute -inset-4 bg-gray-50 -z-10 rounded-sm ${idx % 2 === 0 ? "translate-x-8" : "-translate-x-8"}`} />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>
            )}

            {/* 3. THE GALLERY GRID (Definitive Flex Grid) */}
            <section className="md:py-24 py-10 overflow-hidden bg-white">
                <div className="px-6 md:px-16 mb-16 flex justify-between items-end">
                    <h3 className="text-2xl md:text-4xl font-sans font-bold text-gray-950 uppercase tracking-tighter leading-none">
                        Visual<br /><span className="text-gray-500 font-light lowercase font-serif italic">In-situ</span>
                    </h3>

                    <span className="text-[10px] font-bold tracking-[0.5em] uppercase text-gray-500">
                        {project.images.length} Visual Assets
                    </span>
                </div>

                {/* Vertical Vertical Grid Container */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 px-6 md:px-16">
                    {project.images.map((img, idx) => {
                        // Alternate between widescreen cinematic and tall editorial for a "flexed" look
                        const isFullWidth = idx % 3 === 0;
                        const isTall = idx % 3 === 2;

                        return (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 60 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                className={`relative rounded-sm overflow-hidden group bg-gray-50 shadow-sm hover:shadow-2xl transition-shadow duration-700 ${isFullWidth ? "md:col-span-12 aspect-video" :
                                    isTall ? "md:col-span-5 aspect-[4/3.6]" : "md:col-span-7 aspect-[16/10]"
                                    }`}
                            >
                                <Image
                                    src={img}
                                    fill
                                    alt={`${project.title} detail ${idx + 1}`}
                                    className="object-cover transition-transform duration-[4s] group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-700" />

                                <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    <span className="text-white text-[10px] tracking-[0.5em] uppercase font-bold drop-shadow-md">
                                        Frame {idx + 1}
                                    </span>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </section>
        </div>
    )
}
