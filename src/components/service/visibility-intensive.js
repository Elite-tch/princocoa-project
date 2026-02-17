"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { CheckCircle2 } from "lucide-react"

export default function VisibilityIntensive() {
    const modules = [
        {
            title: "Production Design",
            desc: "Setting the stage for authority. We curate the background, lighting, and wardrobe to ensure every frame communicates elite status."
        },
        {
            title: "The Mother Load",
            desc: "A full production day where we batch 30 days of high-conversion content in one sitting, using our teleprompter-assisted system."
        },
        {
            title: "Digital Distribution",
            desc: "We don't just film; we guide the release. We provide the hooks, descriptions, and scheduling strategy for maximum visibility."
        }
    ]

    return (
        <section className="py-24 bg-[#0a0a0a] text-white overflow-hidden relative">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="space-y-8"
                    >
                        <div className="space-y-4">
                            <span className="text-gray-400 font-bold tracking-[0.4em] uppercase text-[10px]">High-Touch Intensive</span>
                            <h2 className="text-4xl md:text-6xl font-sans font-bold uppercase tracking-tighter leading-[0.9]">
                                30 Days of<br /><span className="text-gray-400">Strategic Visibility</span>
                            </h2>
                            <p className="text-xl text-gray-400 font-light leading-relaxed max-w-xl">
                                Our signature one-day production model. We design, produce, and package a full month of authority-building content in just 24 hours of execution.
                            </p>
                        </div>

                        <div className="space-y-6">
                            {modules.map((m, i) => (
                                <div key={i} className="flex gap-4 items-start p-6 border border-white/10 rounded-sm hover:border-white/30 transition-colors">
                                    <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center shrink-0 mt-1">
                                        <CheckCircle2 className="w-4 h-4 text-[#0a0a0a]" />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold uppercase tracking-tight mb-2">{m.title}</h4>
                                        <p className="text-gray-400 text-sm leading-relaxed">{m.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="relative hidden md:block"
                    >
                        <div className="relative aspect-[4/5] rounded-sm overflow-hidden shadow-2xl">
                            <Image
                                src="https://res.cloudinary.com/dibwnfwk9/image/upload/v1761743114/1853EA70-8A63-4F52-9B66-6A68194DF2EB_L0_001-30_03_2023_22_09_47_yae3vc.jpg"
                                fill
                                alt="Strategic Visibility Intensive"
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
                        </div>

                        {/* Floating Metric Card */}
                        <div className="absolute -bottom-8 -left-8 bg-white p-8 rounded-sm shadow-2xl space-y-2">
                            <p className="text-4xl font-bold tracking-tighter text-[#0a0a0a]">30:1</p>
                            <p className="text-[10px] font-bold uppercase tracking-widest text-gray-500 italic">Asset-to-Day Ratio</p>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Background Text */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 pointer-events-none opacity-[0.02] select-none whitespace-nowrap">
                <span className="text-[20vw] font-bold uppercase tracking-tighter">PERCEPTION ARCHITECTURE</span>
            </div>
        </section>
    )
}
