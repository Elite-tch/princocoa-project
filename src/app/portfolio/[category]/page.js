import { notFound } from "next/navigation"
import { portfolioData } from "@/data/portfolio"
import CategoryDetail from "@/components/portfolio/category-detail"

export default function CategoryPage({ params }) {
    const { category } = params
    const data = portfolioData[category]

    if (!data) {
        notFound()
    }

    // Get all projects across categories for "More Projects"
    const allProjects = Object.entries(portfolioData).flatMap(([catSlug, catData]) =>
        catData.projects.map(proj => ({ ...proj, categorySlug: catSlug }))
    )

    return <CategoryDetail category={data} slug={category} allProjects={allProjects} />
}
