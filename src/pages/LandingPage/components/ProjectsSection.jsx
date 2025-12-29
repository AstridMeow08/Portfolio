import { Link } from 'react-router-dom';

export default function ProjectsSection() {
    const projects = [
        {
            category: 'HRMS Platform',
            year: '2025',
            title: 'HRalva - Next-Gen HRMS',
            description: 'A modular Human Resource Management System streamlining communication and document workflows for modern workplaces. Features real-time announcements and Dockerized OnlyOffice integration.',
            tags: ['React', 'Node.js', 'Docker', 'OnlyOffice'],
            image: 'https://images.unsplash.com/photo-1522071823991-b9671e9d7fbd?q=80&w=3000&auto=format&fit=crop',
            imageAlt: 'HRMS Dashboard preview showing employee records and navigation',
            link: '/works/hralva',
            reverse: false
        },
        {
            category: 'SaaS Tool',
            year: '2025',
            title: 'PDFWorks - Online Suite',
            description: 'A comprehensive browser-based PDF manipulation platform featuring hybrid OCR (Tesseract.js + EasyOCR), secure canvas editing, and automated Cashfree invoicing.',
            tags: ['React', 'Python', 'Tesseract.js', 'Cashfree'],
            image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=3000&auto=format&fit=crop',
            imageAlt: 'PDF editor interface with various toolbars and document preview',
            link: '/works/pdfworks',
            reverse: true
        }
    ];

    return (
        <section className="w-full bg-surface-light border-y border-[#e9e8ce] py-20">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
                    <div>
                        <span className="text-primary font-bold uppercase tracking-widest text-sm mb-2 block">Featured Works</span>
                        <h2 className="text-4xl font-bold tracking-tight text-text-main">Selected Projects</h2>
                    </div>
                    <Link className="group flex items-center gap-2 font-bold text-sm border-b-2 border-primary pb-1 hover:text-primary transition-colors text-text-main" to="/works">
                        View All Works
                        <span className="material-symbols-outlined text-lg transition-transform group-hover:translate-x-1">arrow_forward</span>
                    </Link>
                </div>

                <div className="flex flex-col gap-12">
                    {projects.map((project) => (
                        <Link
                            key={project.title}
                            to={project.link}
                            className="group grid grid-cols-1 md:grid-cols-12 gap-8 items-center"
                        >
                            <div className={`md:col-span-7 ${project.reverse ? 'order-1 md:order-2' : ''} relative rounded-3xl overflow-hidden aspect-video shadow-sm border border-[#e9e8ce]`}>
                                <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors z-10"></div>
                                <img
                                    alt={project.imageAlt}
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                                    src={project.image}
                                />
                            </div>
                            <div className={`md:col-span-5 ${project.reverse ? 'order-2 md:order-1 md:items-end md:text-right' : ''} flex flex-col gap-4 text-text-main`}>
                                <div className={`flex items-center gap-3 ${project.reverse ? 'md:justify-end' : ''}`}>
                                    <span className="bg-primary px-3 py-1 rounded-full text-xs font-bold text-text-main">{project.category}</span>
                                    <span className="text-xs text-text-muted font-mono">{project.year}</span>
                                </div>
                                <h3 className="text-3xl font-bold group-hover:text-primary transition-colors">{project.title}</h3>
                                <p className="text-text-muted leading-relaxed">{project.description}</p>
                                <div className={`flex flex-wrap gap-2 mt-2 ${project.reverse ? 'md:justify-end' : ''}`}>
                                    {project.tags.map((tag) => (
                                        <span key={tag} className="text-xs border border-[#e9e8ce] px-2 py-1 rounded">{tag}</span>
                                    ))}
                                </div>
                                <div className={`flex items-center gap-2 text-sm font-bold mt-2 ${project.reverse ? 'md:justify-end' : ''}`}>
                                    View Case Study
                                    <span className="material-symbols-outlined text-lg transition-transform group-hover:translate-x-1">arrow_right_alt</span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
