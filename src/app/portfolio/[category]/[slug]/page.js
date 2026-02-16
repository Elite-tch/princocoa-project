import { notFound } from "next/navigation"
import { portfolioData } from "@/data/portfolio"
import ProjectDetail from "@/components/portfolio/project-detail"

export default function ProjectPage({ params }) {
    const { category, slug } = params

    const categoryData = portfolioData[category]
    if (!categoryData) notFound()

    const project = categoryData.projects.find(p => p.slug === slug)
    if (!project) notFound()

    // Get all projects across categories
    const allProjects = Object.entries(portfolioData).flatMap(([catSlug, catData]) =>
        catData.projects.map(proj => ({ ...proj, categorySlug: catSlug }))
    )

    return (
        <ProjectDetail
            project={project}
            allProjects={allProjects}
            categorySlug={category}
        />
    )
}
