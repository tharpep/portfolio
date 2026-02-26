import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getProjectBySlug, getNextProject, getPreviousProject, getAllProjects } from "@/lib/getProjects";
import ScrollFadeIn from "@/components/ScrollFadeIn";
import SazedArchitectureDiagramWrapper from "@/components/SazedArchitectureDiagramWrapper";

// Generate static params for all visible projects
export async function generateStaticParams() {
    const projects = getAllProjects();
    return projects.map((project) => ({
        slug: project.slug,
    }));
}

// Generate metadata for each project
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const project = getProjectBySlug(slug);

    if (!project) {
        return { title: "Project Not Found" };
    }

    return {
        title: `${project.title} – Projects – Pryce Tharpe`,
        description: project.description,
        alternates: { canonical: `/projects/${slug}` },
    };
}

// Accent color configurations per category
const categoryAccents: Record<string, { primary: string; gradient: string; badge: string; hover: string; border: string }> = {
    "ai-ml": {
        primary: "text-emerald-300",
        gradient: "from-emerald-400/90 via-teal-400/90 to-cyan-400/90",
        badge: "bg-emerald-900/30 text-emerald-300 border-emerald-700/50 hover:shadow-emerald-500/20",
        hover: "hover:text-emerald-300 hover:shadow-emerald-500/10",
        border: "border-emerald-700/50",
    },
    "data-analytics": {
        primary: "text-cyan-300",
        gradient: "from-cyan-400/90 via-teal-400/90 to-emerald-400/90",
        badge: "bg-cyan-900/30 text-cyan-300 border-cyan-700/50 hover:shadow-cyan-500/20",
        hover: "hover:text-cyan-300 hover:shadow-cyan-500/10",
        border: "border-cyan-700/50",
    },
    "devops-cloud": {
        primary: "text-purple-300",
        gradient: "from-purple-400/90 via-indigo-400/90 to-blue-400/90",
        badge: "bg-purple-900/30 text-purple-300 border-purple-700/50 hover:shadow-purple-500/20",
        hover: "hover:text-purple-300 hover:shadow-purple-500/10",
        border: "border-purple-700/50",
    },
    "full-stack": {
        primary: "text-blue-300",
        gradient: "from-blue-400/90 via-indigo-400/90 to-purple-400/90",
        badge: "bg-blue-900/30 text-blue-300 border-blue-700/50 hover:shadow-blue-500/20",
        hover: "hover:text-blue-300 hover:shadow-blue-500/10",
        border: "border-blue-700/50",
    },
    "hardware-embedded": {
        primary: "text-orange-300",
        gradient: "from-orange-400/90 via-amber-400/90 to-yellow-400/90",
        badge: "bg-orange-900/30 text-orange-300 border-orange-700/50 hover:shadow-orange-500/20",
        hover: "hover:text-orange-300 hover:shadow-orange-500/10",
        border: "border-orange-700/50",
    },
};

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const project = getProjectBySlug(slug);

    if (!project) {
        notFound();
    }

    const nextProject = getNextProject(slug);
    const prevProject = getPreviousProject(slug);
    const accent = categoryAccents[project.category] || categoryAccents["ai-ml"];

    const statusLabel = project.status === "completed" ? "Completed" : "In Progress";
    const statusColor = project.status === "completed"
        ? "bg-emerald-900/30 text-emerald-300 border-emerald-700/50"
        : "bg-orange-900/30 text-orange-300 border-orange-700/50";

    // Check if project uses new challenge/solution/result format
    const hasNewFormat = project.challenge && project.solution && project.result;

    return (
        <main className="bg-neutral-900 text-neutral-100 min-h-screen">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-10 md:py-12">

                {/* Back Navigation */}
                <nav className="mb-8">
                    <Link
                        href="/projects"
                        className={`inline-flex items-center ${accent.primary} ${accent.hover} transition-colors text-sm`}
                    >
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path d="M19 12H5m7-7l-7 7 7 7" />
                        </svg>
                        Back to Projects
                    </Link>
                </nav>

                {/* Hero Section */}
                <header className="mb-10">
                    <div className="flex items-center gap-3 mb-4">
                        <span className={`px-3 py-1 text-xs font-medium rounded-full border ${statusColor}`}>
                            {statusLabel}
                        </span>
                        <span className="text-sm text-neutral-400 font-mono">{project.timeline}</span>
                    </div>

                    <h1 className={`text-3xl sm:text-4xl md:text-5xl font-bold font-mono tracking-tight mb-4 text-transparent bg-clip-text bg-gradient-to-r ${accent.gradient}`}>
                        {project.title}
                    </h1>

                    <p className="text-lg text-neutral-300 leading-relaxed mb-6">
                        {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-6">
                        {project.technologies.map((tech) => (
                            <span
                                key={tech}
                                className={`px-3 py-1 text-sm font-medium rounded-full border transition-all duration-300 hover:scale-105 ${accent.badge}`}
                            >
                                {tech}
                            </span>
                        ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap gap-3">
                        {project.githubUrl && (
                            <a
                                href={project.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-5 py-2.5 bg-neutral-800 hover:bg-neutral-700 text-white font-medium rounded-lg transition-all duration-300 border border-neutral-600 hover:border-neutral-500"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                </svg>
                                GitHub
                            </a>
                        )}
                        {project.demoUrl && (
                            <a
                                href={project.demoUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-5 py-2.5 bg-neutral-800 hover:bg-neutral-700 text-white font-medium rounded-lg transition-all duration-300 border border-neutral-600 hover:border-neutral-500"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                    <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                                Live Demo
                            </a>
                        )}
                        {project.paperUrl && (
                            <a
                                href={project.paperUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-5 py-2.5 bg-neutral-800 hover:bg-neutral-700 text-white font-medium rounded-lg transition-all duration-300 border border-neutral-600 hover:border-neutral-500"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                    <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                                Read Paper
                            </a>
                        )}
                    </div>
                </header>

                {/* Divider */}
                <div className="h-px bg-gradient-to-r from-transparent via-neutral-700 to-transparent mb-10"></div>

                {/* Hero Image */}
                {project.images && project.images.length > 0 && (
                    <ScrollFadeIn>
                        <figure className="mb-10">
                            <div className={`overflow-hidden rounded-lg border ${accent.border} bg-neutral-900/50`}>
                                <Image
                                    src={`/images/${project.images[0].path}`}
                                    alt={project.images[0].caption || `${project.title}`}
                                    width={900}
                                    height={600}
                                    className="w-full h-auto"
                                    priority
                                />
                            </div>
                            {project.images[0].caption && (
                                <figcaption className="mt-3 text-sm text-neutral-500 text-center">
                                    {project.images[0].caption}
                                </figcaption>
                            )}
                        </figure>
                    </ScrollFadeIn>
                )}

                {/* Challenge / Solution / Result - New Format */}
                {hasNewFormat ? (
                    <>
                        <ScrollFadeIn>
                            <section className="mb-8">
                                <h2 className={`text-lg font-bold font-mono ${accent.primary} mb-3`}>Challenge</h2>
                                <p className="text-neutral-300 leading-relaxed">{project.challenge}</p>
                            </section>
                        </ScrollFadeIn>

                        <ScrollFadeIn delay={100}>
                            <section className="mb-8">
                                <h2 className={`text-lg font-bold font-mono ${accent.primary} mb-3`}>Solution</h2>
                                <div className="space-y-2">
                                    {project.solution?.map((point, index) => (
                                        <div key={index} className="flex items-start gap-3">
                                            <span className={`${accent.primary} mt-1`}>•</span>
                                            <p className="text-neutral-300 leading-relaxed">{point}</p>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        </ScrollFadeIn>

                        <ScrollFadeIn delay={200}>
                            <section className="mb-10">
                                <h2 className={`text-lg font-bold font-mono ${accent.primary} mb-3`}>Result</h2>
                                <p className="text-neutral-300 leading-relaxed">{project.result}</p>
                            </section>
                        </ScrollFadeIn>
                    </>
                ) : (
                    /* Fallback to highlights for projects not yet migrated */
                    <>
                        {project.highlights.length > 0 && (
                            <ScrollFadeIn>
                                <section className="mb-10">
                                    <h2 className={`text-xl font-bold font-mono ${accent.primary} mb-4`}>Key Achievements</h2>
                                    <div className="space-y-3">
                                        {project.highlights.map((highlight, index) => (
                                            <div key={index} className="flex items-start gap-3">
                                                <span className={`${accent.primary} mt-1`}>•</span>
                                                <p className="text-neutral-300 leading-relaxed">{highlight}</p>
                                            </div>
                                        ))}
                                    </div>
                                </section>
                            </ScrollFadeIn>
                        )}
                    </>
                )}

                {/* Architecture Diagram */}
                {project.architectureDiagram && (
                    <ScrollFadeIn delay={250}>
                        <section className="mb-10 pt-8 border-t border-neutral-800">
                            <h2 className={`text-lg font-bold font-mono ${accent.primary} mb-4`}>
                                Architecture
                            </h2>
                            {project.architectureDiagram.type === 'component' &&
                             project.architectureDiagram.name === 'sazed' && (
                                <SazedArchitectureDiagramWrapper />
                            )}
                        </section>
                    </ScrollFadeIn>
                )}

                {/* Secondary Images (if more than 1 image) */}
                {project.images && project.images.length > 1 && (
                    <ScrollFadeIn delay={200}>
                        <section className="mt-10 pt-8 border-t border-neutral-800">
                            <h2 className={`text-lg font-bold font-mono ${accent.primary} mb-4`}>Additional Screenshots</h2>
                            <div className="space-y-6">
                                {project.images.slice(1).map((image, index) => (
                                    <figure key={index}>
                                        <div className={`overflow-hidden rounded-lg border ${accent.border} bg-neutral-900/50`}>
                                            <Image
                                                src={`/images/${image.path}`}
                                                alt={image.caption || `${project.title} screenshot`}
                                                width={900}
                                                height={600}
                                                className="w-full h-auto"
                                            />
                                        </div>
                                        {image.caption && (
                                            <figcaption className="mt-3 text-sm text-neutral-500 text-center">
                                                {image.caption}
                                            </figcaption>
                                        )}
                                    </figure>
                                ))}
                            </div>
                        </section>
                    </ScrollFadeIn>
                )}

                {/* Bottom Navigation */}
                <ScrollFadeIn delay={200}>
                    <nav className="mt-12 pt-8 border-t border-neutral-700">
                        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                            {prevProject ? (
                                <Link
                                    href={`/projects/${prevProject.slug}`}
                                    className={`group flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-neutral-800/50 transition-all ${accent.hover} flex-1`}
                                >
                                    <svg className="w-5 h-5 text-neutral-400 group-hover:text-current flex-shrink-0 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                        <path d="M19 12H5m7-7l-7 7 7 7" />
                                    </svg>
                                    <div className="min-w-0">
                                        <div className="text-xs text-neutral-500 font-mono">Previous</div>
                                        <div className="text-sm text-neutral-300 group-hover:text-current font-medium truncate">{prevProject.title}</div>
                                    </div>
                                </Link>
                            ) : (
                                <div className="flex-1"></div>
                            )}

                            <Link
                                href="/projects"
                                className={`group flex items-center justify-center gap-2 px-4 py-3 rounded-lg hover:bg-neutral-800/50 transition-all ${accent.hover}`}
                            >
                                <svg className="w-5 h-5 text-neutral-400 group-hover:text-current" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                    <path d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                                <span className="text-sm text-neutral-300 group-hover:text-current font-medium font-mono">All Projects</span>
                            </Link>

                            {nextProject ? (
                                <Link
                                    href={`/projects/${nextProject.slug}`}
                                    className={`group flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-neutral-800/50 transition-all ${accent.hover} flex-1 justify-end text-right`}
                                >
                                    <div className="min-w-0">
                                        <div className="text-xs text-neutral-500 font-mono">Next</div>
                                        <div className="text-sm text-neutral-300 group-hover:text-current font-medium truncate">{nextProject.title}</div>
                                    </div>
                                    <svg className="w-5 h-5 text-neutral-400 group-hover:text-current flex-shrink-0 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                        <path d="M5 12h14m-7-7l7 7-7 7" />
                                    </svg>
                                </Link>
                            ) : (
                                <div className="flex-1"></div>
                            )}
                        </div>
                    </nav>
                </ScrollFadeIn>

            </div>
        </main>
    );
}
