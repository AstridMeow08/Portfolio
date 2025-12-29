import { Fragment } from 'react';

export default function TechStackTicker() {
    const technologies = [
        { icon: 'javascript', name: 'JavaScript' },
        { icon: 'html', name: 'React' },
        { icon: 'dns', name: 'Node.js' },
        { icon: 'code_blocks', name: 'Python' },
        { icon: 'view_in_ar', name: 'Three.js' },
        { icon: 'cloud', name: 'AWS' },
    ];

    return (
        <div className="w-full overflow-hidden bg-text-main py-4 mb-20">
            <div className="flex whitespace-nowrap animate-ticker">
                {/* Set 1 */}
                <div className="flex items-center gap-12 px-6">
                    {technologies.map((tech, index) => (
                        <Fragment key={tech.name}>
                            <span className="text-primary/90 text-xl font-mono font-bold uppercase tracking-widest flex items-center gap-2">
                                <span className="material-symbols-outlined">{tech.icon}</span> {tech.name}
                            </span>
                            {index < technologies.length - 1 && <span className="text-primary/40 text-xl">✦</span>}
                        </Fragment>
                    ))}
                    <span className="text-primary/40 text-xl">✦</span>
                </div>
                {/* Set 2 (Duplicate for smooth loop) */}
                <div className="flex items-center gap-12 px-6">
                    {technologies.map((tech, index) => (
                        <Fragment key={`${tech.name}-2`}>
                            <span className="text-primary/90 text-xl font-mono font-bold uppercase tracking-widest flex items-center gap-2">
                                <span className="material-symbols-outlined">{tech.icon}</span> {tech.name}
                            </span>
                            {index < technologies.length - 1 && <span className="text-primary/40 text-xl">✦</span>}
                        </Fragment>
                    ))}
                    <span className="text-primary/40 text-xl">✦</span>
                </div>
            </div>
        </div>
    );
}
