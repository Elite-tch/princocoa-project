"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"

export default function MoreProjects({ categorySlug, currentProjectSlug, projects }) {
    // Strictly only show projects that belong to the current category ID
    const otherProjects = projects
        .filter(p => p.slug !== currentProjectSlug && (p.categorySlug === categorySlug || !p.categorySlug))
        .slice(0, 4);

    if (otherProjects.length === 0) return null;

    return (
        <section className="md:py-20 py-10 bg-gray-50 px-6">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-2xl md:text-4xl font-sans  mb-6 text-gray-900">
                    Check out more projects
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {otherProjects.map((project, index) => (
                        <motion.div
                            key={project.slug}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group"
                        >
                            <Link href={`/portfolio/${project.categorySlug || categorySlug}/${project.slug}`}>
                                <div className="relative aspect-[4/3] rounded overflow-hidden mb-4 shadow-md group-hover:shadow-xl transition-shadow duration-300">
                                    <Image
                                        src={project.images[0]}
                                        alt={project.title}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                                        <span className="text-white font-semibold border-b-2 border-white">VIEW PROJECT</span>
                                    </div>
                                </div>
                                <div className="space-y-1">
                                    <span className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-gray-500">
                                        {(project.categorySlug || categorySlug).replace('-', ' ')}
                                    </span>
                                    <h3 className="text-xl font-sans text-gray-900 transition-colors leading-tight">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-500 text-xs font-medium font-sans uppercase tracking-widest">{project.subtitle}</p>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
