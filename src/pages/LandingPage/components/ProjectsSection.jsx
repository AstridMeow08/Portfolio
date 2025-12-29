export default function ProjectsSection() {
    const projects = [
        {
            category: 'Fintech',
            year: '2023',
            title: 'NeoBank Dashboard',
            description: 'A comprehensive financial analytics dashboard featuring real-time data visualization, transaction management, and secure user authentication.',
            tags: ['React', 'D3.js', 'Firebase'],
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCAzif4yZWWx1ExPBv7-hphDrXzrVYgyfhqMaOxcgWzm976rd3Eqv2KnHw8a3n628qrvsGI5OM24VUaUp7DhZcPdH-aZCI-FWHFXIDk6BWL2aS5CPaGwCJ5JPjQgLbJ7I6Yj3bQcSsY06VDuNtdnAe45xlGGZiNq2gS33SifU-lAS8bwUk1jTHIPYKHC8D6TF2UaG5VWNdYMU1YZ74Ynez2F921s5F0rrurR2tnqlHplc_Q0GnvwAKcOAXN9cdaNucpna3u16QiOoDQ',
            imageAlt: 'Dashboard interface showing financial data analytics with dark mode UI',
            reverse: false
        },
        {
            category: 'E-Commerce',
            year: '2024',
            title: 'Lumina Market',
            description: 'A modern headless e-commerce storefront built for speed and conversion. Features include AI-powered recommendations and instant search.',
            tags: ['Next.js', 'Shopify API', 'Tailwind'],
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBxQFCXmMfBwuixE16Yv48kFeoZEylDN0srL8Wx8Mozv1XHWhJinWOr4I7aTMYLbfCJ801T7DgqcsxfUVozrFWkpnrYXE2ffhfrYhzvZCuW4z7K8RB0zTkCbwUO-1BWrxGxK3zwmwo-yXBzQaXVRi6q6L0r3B7laCnUcfJHdoXlJP40Z6rzop22uYeDAM48SfQ2qq_2AzI_glqU0S4ZdYSjxOoOLZi-zv4J4IbYR99ucJMs-EMOEWWdP5ImYvnWddnFf15Bu9zVwkdm',
            imageAlt: 'Clean minimalist e-commerce product page layout on a laptop screen',
            reverse: true
        }
    ];

    return (
        <section className="w-full bg-surface-light border-y border-[#e9e8ce] py-20">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
                    <div>
                        <span className="text-primary font-bold uppercase tracking-widest text-sm mb-2 block">Featured Work</span>
                        <h2 className="text-4xl font-bold tracking-tight">Recent Projects</h2>
                    </div>
                    <a className="group flex items-center gap-2 font-bold text-sm border-b-2 border-primary pb-1 hover:text-primary transition-colors" href="#">
                        View All Projects
                        <span className="material-symbols-outlined text-lg transition-transform group-hover:translate-x-1">arrow_forward</span>
                    </a>
                </div>

                <div className="flex flex-col gap-12">
                    {projects.map((project) => (
                        <div key={project.title} className="group grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                            <div className={`md:col-span-7 ${project.reverse ? 'order-1 md:order-2' : ''} relative rounded-3xl overflow-hidden aspect-video shadow-sm border border-[#e9e8ce]`}>
                                <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors z-10"></div>
                                <img
                                    alt={project.imageAlt}
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                                    src={project.image}
                                />
                            </div>
                            <div className={`md:col-span-5 ${project.reverse ? 'order-2 md:order-1 md:items-end md:text-right' : ''} flex flex-col gap-4`}>
                                <div className="flex items-center gap-3">
                                    <span className="bg-primary px-3 py-1 rounded-full text-xs font-bold text-text-main">{project.category}</span>
                                    <span className="text-xs text-text-muted font-mono">{project.year}</span>
                                </div>
                                <h3 className="text-3xl font-bold group-hover:text-text-muted transition-colors">{project.title}</h3>
                                <p className="text-text-muted">{project.description}</p>
                                <div className={`flex flex-wrap gap-2 mt-2 ${project.reverse ? 'md:justify-end' : ''}`}>
                                    {project.tags.map((tag) => (
                                        <span key={tag} className="text-xs border border-[#e9e8ce] px-2 py-1 rounded">{tag}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
