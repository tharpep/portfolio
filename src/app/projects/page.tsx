import { getProjectsByCategory, type ProjectCategory } from "@/lib/getProjects";
import type { Metadata } from "next";
import ScrollFadeIn from "@/components/ScrollFadeIn";
import ProjectCard from "@/components/ProjectCard";
import { text } from "@/lib/typography";

export const metadata: Metadata = {
  title: "Projects – Pryce Tharpe",
  description: "Portfolio projects across data, AI, creative tech, and research.",
  alternates: { canonical: '/projects' },
};

// Enable static generation for better performance
export const dynamic = 'force-static';

function CategorySection({ category }: { category: ProjectCategory }) {
  return (
    <section className="mb-20">
      <ScrollFadeIn>
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h2 className={`${text.sectionTitle} mb-3`}>
              {category.name}
            </h2>
            <p className="text-neutral-300 text-lg leading-relaxed max-w-3xl">
              {category.description}
            </p>
          </div>

          <div className="grid gap-4 md:gap-6 md:grid-cols-2 lg:grid-cols-2 items-stretch">
            {category.projects.map((project, index) => (
              <ScrollFadeIn key={project.slug} delay={index * 100} className="h-full">
                <ProjectCard project={project} />
              </ScrollFadeIn>
            ))}
          </div>
        </div>
      </ScrollFadeIn>
    </section>
  );
}

// Pre-compute categories at build time for better performance
const categories = getProjectsByCategory();

export default function Projects() {
  
  return (
    <main id="main" className="bg-neutral-900 text-neutral-100 px-4 sm:px-8 md:px-16 lg:px-32 py-12 min-h-screen overflow-visible">
      <ScrollFadeIn>
        {/* Hero Section */}
        <section className="text-center mb-16 overflow-visible">
          <div className="inline-block py-3 overflow-visible">
            <h1 className={`${text.pageTitle} mb-6`}>
              Projects
            </h1>
          </div>
          <p className="text-xl text-neutral-300 leading-relaxed max-w-4xl mx-auto">
            Projects spanning data pipelines, AI systems, full-stack development, and research.
            From embedded systems to cloud automation, these reflect what I&apos;ve built and learned.
          </p>
        </section>

      </ScrollFadeIn>

      {/* Project Categories */}
      <div className="space-y-1">
        {categories.map((category) => (
          <CategorySection key={category.id} category={category} />
        ))}
      </div>
    </main>
  );
}
