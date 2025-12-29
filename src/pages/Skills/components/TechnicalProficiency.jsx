export default function TechnicalProficiency() {
    const frontendSkills = [
        { name: 'React.js / Next.js', percentage: '95%' },
        { name: 'TypeScript', percentage: '90%' },
        { name: 'Tailwind CSS & UI', percentage: '98%' },
        { name: 'Vue.js / Nuxt', percentage: '85%' },
    ];

    const backendSkills = [
        { name: 'Node.js', level: 'Advanced', icon: 'api', color: 'green' },
        { name: 'Python', level: 'Beginner', icon: 'terminal', color: 'blue' },
        // { name: 'PostgreSQL', level: 'Expert', icon: 'database', color: 'indigo' },
        // { name: 'GraphQL', level: 'Advanced', icon: 'schema', color: 'orange' },
    ];

    const tools = ['AWS', 'Docker', 'Git / GitHub', 'Figma', 'Jira', 'Vercel', 'Postman', 'Linux'];

    return (
        <section className="bg-surface-light px-6 py-20 md:px-12 lg:px-24 border-t border-[#e9e8ce]">
            <div className="mx-auto max-w-7xl">
                <div className="mb-12 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end border-b border-[#e9e8ce] pb-6">
                    <div>
                        <h2 className="text-3xl font-bold text-text-main">Technical Proficiency</h2>
                        <p className="mt-2 text-text-muted">A detailed breakdown of my tech stack and capability levels.</p>
                    </div>
                    {/* Visual Tabs */}
                    <div className="flex gap-1 rounded-lg bg-[#e9e8ce]/30 p-1.5">
                        <button className="rounded-md bg-surface-light px-5 py-2.5 text-sm font-bold text-text-main shadow-sm ring-1 ring-black/5">All</button>
                        <button className="rounded-md px-5 py-2.5 text-sm font-bold text-text-muted hover:text-text-main transition-colors">Frontend</button>
                        <button className="rounded-md px-5 py-2.5 text-sm font-bold text-text-muted hover:text-text-main transition-colors">Backend</button>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
                    {/* Column 1: Progress Bars (Frontend focus) */}
                    <div className="flex flex-col gap-8 rounded-3xl border border-[#e9e8ce] bg-background-light p-8">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="rounded-full bg-primary/20 p-2 text-text-main">
                                <span className="material-symbols-outlined text-2xl">web</span>
                            </div>
                            <h3 className="text-2xl font-bold text-text-main">Frontend Mastery</h3>
                        </div>

                        {frontendSkills.map((skill) => (
                            <div key={skill.name} className="group flex flex-col gap-3">
                                <div className="flex justify-between text-base font-bold">
                                    <span className="text-text-main group-hover:text-primary transition-colors">{skill.name}</span>
                                    <span className="text-primary">{skill.percentage}</span>
                                </div>
                                <div className="h-3 w-full overflow-hidden rounded-full bg-[#e9e8ce]">
                                    <div
                                        className="h-full rounded-full bg-primary shadow-[0_0_10px_rgba(249,245,6,0.5)]"
                                        style={{ width: skill.percentage }}
                                    ></div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Column 2: Badge Cloud & Backend Grid */}
                    <div className="flex flex-col gap-8">
                        {/* Backend Grid Block */}
                        <div className="rounded-3xl border border-[#e9e8ce] bg-surface-light p-8 shadow-sm">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="rounded-full bg-primary/20 p-2 text-text-main">
                                    <span className="material-symbols-outlined text-2xl">storage</span>
                                </div>
                                <h3 className="text-2xl font-bold text-text-main">Backend &amp; Data</h3>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {backendSkills.map((skill) => (
                                    <div key={skill.name} className="group flex items-center gap-4 rounded-xl border border-transparent bg-background-light p-4 transition-all hover:border-primary/20 hover:bg-primary/5 hover:shadow-sm">
                                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-surface-light text-text-main shadow-sm group-hover:scale-110 transition-transform">
                                            <span className="material-symbols-outlined">{skill.icon}</span>
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="text-base font-bold text-text-main">{skill.name}</span>
                                            <span className="text-xs font-semibold uppercase tracking-wide text-text-muted">{skill.level}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Tools Badges */}
                        <div className="rounded-3xl border border-[#e9e8ce] bg-surface-light p-8 shadow-sm">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="rounded-full bg-primary/20 p-2 text-text-main">
                                    <span className="material-symbols-outlined text-2xl">construction</span>
                                </div>
                                <h3 className="text-2xl font-bold text-text-main">Tools &amp; DevOps</h3>
                            </div>
                            <div className="flex flex-wrap gap-3">
                                {tools.map((tool) => (
                                    <span key={tool} className="inline-flex cursor-default items-center rounded-full bg-background-light px-4 py-2 text-sm font-bold text-text-main hover:bg-[#e9e8ce] transition-colors border border-transparent hover:border-[#e9e8ce]">
                                        {tool}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
