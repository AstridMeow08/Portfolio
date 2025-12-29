export default function TechStackSection() {
    const techStack = {
        frontend: [
            { name: 'React', color: 'cyan-400' },
            { name: 'TypeScript', color: 'blue-600' },
            { name: 'Tailwind CSS', color: 'teal-500' },
            { name: 'Next.js', color: 'black dark:bg-white' }
        ],
        backend: [
            { name: 'Node.js', color: 'green-500' },
            { name: 'Python', color: 'yellow-400' },
            // { name: 'PostgreSQL', color: 'blue-400' },
            // { name: 'GraphQL', color: 'pink-500' }
        ],
        devops: [
            { name: 'Docker', color: 'blue-500' },
            { name: 'AWS', color: 'orange-500' },
            { name: 'Figma', color: 'purple-500' },
            { name: 'Git', color: 'red-500' }
        ]
    };

    return (
        <section className="flex flex-col gap-8">
            <div className="flex items-center gap-4">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">Technical Arsenal</h2>
                <div className="h-px bg-slate-200 dark:bg-slate-800 flex-1"></div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                {/* Frontend */}
                <div className="space-y-4">
                    <h3 className="text-sm uppercase tracking-wider text-slate-500 font-semibold">Frontend</h3>
                    <div className="flex flex-wrap gap-2">
                        {techStack.frontend.map((tech) => (
                            <span
                                key={tech.name}
                                className="px-3 py-1.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-md text-sm font-medium text-slate-700 dark:text-slate-300 flex items-center gap-2 hover:border-primary transition-colors cursor-default"
                            >
                                <span className={`w-2 h-2 rounded-full bg-${tech.color}`}></span> {tech.name}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Backend */}
                <div className="space-y-4">
                    <h3 className="text-sm uppercase tracking-wider text-slate-500 font-semibold">Backend</h3>
                    <div className="flex flex-wrap gap-2">
                        {techStack.backend.map((tech) => (
                            <span
                                key={tech.name}
                                className="px-3 py-1.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-md text-sm font-medium text-slate-700 dark:text-slate-300 flex items-center gap-2 hover:border-primary transition-colors cursor-default"
                            >
                                <span className={`w-2 h-2 rounded-full bg-${tech.color}`}></span> {tech.name}
                            </span>
                        ))}
                    </div>
                </div>

                {/* DevOps & Tools */}
                <div className="space-y-4">
                    <h3 className="text-sm uppercase tracking-wider text-slate-500 font-semibold">DevOps &amp; Tools</h3>
                    <div className="flex flex-wrap gap-2">
                        {techStack.devops.map((tech) => (
                            <span
                                key={tech.name}
                                className="px-3 py-1.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-md text-sm font-medium text-slate-700 dark:text-slate-300 flex items-center gap-2 hover:border-primary transition-colors cursor-default"
                            >
                                <span className={`w-2 h-2 rounded-full bg-${tech.color}`}></span> {tech.name}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
