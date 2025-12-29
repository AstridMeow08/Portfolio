export default function ServicesHero() {
    const services = [
        {
            icon: 'devices',
            title: 'Front-End Development',
            description: 'Building responsive, pixel-perfect user interfaces with modern frameworks like React and Vue that feel alive and intuitive.'
        },
        {
            icon: 'dns',
            title: 'Back-End Architecture',
            description: 'Designing robust, scalable server-side applications and secure database schemas using Node.js, Python, and Go.'
        },
        {
            icon: 'cloud_sync',
            title: 'Cloud & DevOps',
            description: 'Deploying secure infrastructure on AWS and Azure with automated CI/CD pipelines and containerized Docker environments.'
        }
    ];

    return (
        <section className="px-6 py-16 md:px-12 lg:px-24">
            <div className="mx-auto max-w-7xl">
                <div className="mb-14 max-w-2xl">
                    <div className="flex items-center gap-2 mb-3">
                        <span className="h-px w-8 bg-primary"></span>
                        <p className="text-sm font-bold uppercase tracking-wider text-primary">What I Do</p>
                    </div>
                    <h1 className="text-4xl font-black leading-tight tracking-tight text-text-main md:text-5xl lg:text-6xl">
                        Services &amp; Expertise
                    </h1>
                    <p className="mt-6 text-lg leading-relaxed text-text-muted">
                        I provide comprehensive full-stack solutions tailored to your business needs. From pixel-perfect frontends to robust backend architectures, I turn complex problems into elegant digital products.
                    </p>
                </div>

                {/* Service Cards Grid */}
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 perspective-container">
                    {services.map((service, index) => (
                        <div key={index} className="group hover:translate-y-[-8px] hover:rotate-x-2 hover:shadow-xl transition-all duration-400 ease-out transform-style-3d flex flex-col rounded-2xl border border-[#e9e8ce] bg-surface-light p-8 shadow-sm">
                            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/20 text-text-main group-hover:bg-primary group-hover:text-text-main transition-colors duration-300">
                                <span className="material-symbols-outlined text-3xl">{service.icon}</span>
                            </div>
                            <h3 className="mb-3 text-2xl font-bold text-text-main">{service.title}</h3>
                            <p className="text-base leading-relaxed text-text-muted">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
