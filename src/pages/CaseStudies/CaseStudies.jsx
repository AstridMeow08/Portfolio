import { Link } from 'react-router-dom';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';

export default function CaseStudies() {
    const projects = [
        {
            id: 'paplixo',
            title: "Paplixo - Business Docs",
            category: "SaaS Platform",
            description: "A comprehensive online documentation platform for SMEs and freelancers, featuring a custom integrated document editor and CMS.",
            image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=3000&auto=format&fit=crop",
            link: "/works/paplixo"
        },
        {
            id: 'pdfworks',
            title: "PDFWorks - Online Suite",
            category: "SaaS Tool",
            description: "A comprehensive browser-based PDF manipulation platform featuring hybrid OCR, secure editing, and subscription management.",
            image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=3000&auto=format&fit=crop",
            link: "/works/pdfworks"
        },
        {
            id: 'hralva',
            title: "HRalva - Next-Gen HRMS",
            category: "HRMS Platform",
            description: "A modular Human Resource Management System streamlining communication and document workflows for modern workplaces.",
            image: "https://images.unsplash.com/photo-1522071823991-b9671e9d7fbd?q=80&w=3000&auto=format&fit=crop",
            link: "/works/hralva"
        },
        {
            id: 'rankseo',
            title: "RankSEO - AI Powered SEO",
            category: "AI Platform",
            description: "An advanced implementation of automated data acquisition and AI analytics for SEO optimization, featuring Playwright crawling and n8n workflows.",
            image: "https://images.unsplash.com/photo-1571786256017-aee7a0c006b6?q=80&w=3000&auto=format&fit=crop",
            link: "/works/rankseo"
        },
        {
            id: 'ecommerce',
            title: "E-Commerce Replatforming",
            category: "Headless Commerce",
            description: "A complete overhaul of a legacy retail platform for a Shopify Plus brand, resulting in 200% faster load times and 15% conversion increase.",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCmYwnH5LVE4EZocpKsD8ytI0EbzJVS0P0xAFiuBME48Ne6aFjC7SxaSqlGPXtzimVx22mpmVCwPTwktmctlonzrghYvlh4yE0ydvHnhBABcCdEJLxUAThE0t0q5lmd-N_0CZxzt9Kw_yIvc1fWym7qF-lkfTxW6pj8RdmdAycSLSQOlYCEqDYhG6jYSmpDpmT39SEILqZPIWhsrFPEz9WeFvCqQM29hKoq_z1PevuuxQAax6_WWHB4pS_v8PGmiwm5P8eqpGnQObkO",
            link: "/works/ecommerce"
        }
    ];

    return (
        <div className="bg-background-light font-display text-text-main min-h-screen flex flex-col overflow-x-hidden selection:bg-primary selection:text-text-main">
            <Navigation />

            <main className="w-full flex flex-col pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-[1280px] mx-auto">
                <div className="flex flex-col gap-6 mb-16 text-center max-w-2xl mx-auto">
                    <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-text-main">
                        Selected Works
                    </h1>
                    <p className="text-lg text-text-muted">
                        A gallery of technical deep dives into my recent projects, showcasing architectural decisions and engineering challenges.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project) => (
                        <Link
                            key={project.id}
                            to={project.link}
                            className="group flex flex-col rounded-xl bg-surface-light border border-[#e9e8ce] overflow-hidden hover:shadow-lg transition-all hover:scale-[1.01]"
                        >
                            <div className="h-64 overflow-hidden relative">
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10"></div>
                                <div
                                    className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                    style={{ backgroundImage: `url('${project.image}')` }}
                                ></div>
                                <div className="absolute top-4 left-4 z-20">
                                    <span className="px-3 py-1 rounded-full bg-surface-light/90 backdrop-blur text-xs font-bold uppercase tracking-wide border border-[#e9e8ce]">
                                        {project.category}
                                    </span>
                                </div>
                            </div>
                            <div className="p-8 flex flex-col flex-1 gap-4">
                                <h2 className="text-2xl font-bold text-text-main group-hover:text-primary transition-colors">
                                    {project.title}
                                </h2>
                                <p className="text-text-muted leading-relaxed mb-4 flex-1">
                                    {project.description}
                                </p>
                                <div className="flex items-center gap-2 text-sm font-bold text-text-main">
                                    Read Case Study
                                    <span className="material-symbols-outlined text-[18px] transition-transform group-hover:translate-x-1">arrow_right_alt</span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </main>

            <Footer />
        </div>
    );
}
