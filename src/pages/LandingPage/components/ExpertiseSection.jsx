export default function ExpertiseSection() {
    const expertiseCards = [
        {
            icon: 'devices',
            title: 'Frontend Engineering',
            description: 'Building pixel-perfect, responsive user interfaces using React, and modern CSS frameworks like Tailwind.',
            tags: ['React', 'JavaScript']
        },
        {
            icon: 'database',
            title: 'Backend Architecture',
            description: 'Designing scalable APIs and database schemas with Node.js, Python.',
            tags: ['Node']
        },
        {
            icon: 'design_services',
            title: 'Product Design',
            description: 'Bridging the gap between code and design with Figma prototyping and design system implementation.',
            tags: ['Figma', 'UI/UX']
        }
    ];

    return (
        <section className="max-w-7xl mx-auto px-4 w-full mb-24">
            <div className="flex flex-col gap-4 mb-12">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Core Expertise</h2>
                <div className="h-1 w-20 bg-primary rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {expertiseCards.map((card) => (
                    <div key={card.title} className="group bg-surface-light border border-[#e9e8ce] p-8 rounded-2xl hover:shadow-lg hover:border-primary/50 transition-all duration-300 relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity transform group-hover:scale-110">
                            <span className="material-symbols-outlined text-[120px]">{card.icon}</span>
                        </div>
                        <div className="relative z-10 flex flex-col gap-4 h-full">
                            <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center text-text-main mb-2">
                                <span className="material-symbols-outlined text-2xl">{card.icon}</span>
                            </div>
                            <h3 className="text-xl font-bold">{card.title}</h3>
                            <p className="text-text-muted leading-relaxed">{card.description}</p>
                            <div className="mt-auto pt-4 flex flex-wrap gap-2">
                                {card.tags.map((tag) => (
                                    <span key={tag} className="px-2 py-1 bg-gray-100 rounded text-xs font-semibold text-gray-600">{tag}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
