export default function ExperienceSection() {
    const experiences = [
        {
            title: 'Senior Developer',
            period: '2024 - Present',
            company: 'TechCorp Solutions',
            description: 'Leading the frontend migration of the core product to Next.js. Improved site performance by 40% and established a comprehensive design system used across 3 separate engineering squads.',
            current: true
        },
        {
            title: 'Full Stack Developer',
            period: '2021 - 2024',
            company: 'StartupX Innovations',
            description: 'Developed and deployed scalable REST APIs using Node.js and Express. Integrated Stripe payments and third-party authentication services, serving over 10,000 monthly active users.',
            current: false
        },
        {
            title: 'BS Computer Science',
            period: '2017 - 2021',
            company: 'University of Technology',
            description: 'Focused on Software Engineering and Human-Computer Interaction. Graduated with honors. Capstone project involved building an accessible learning management system for schools.',
            current: false
        }
    ];

    return (
        <section className="flex flex-col gap-10">
            <div className="flex items-center gap-4">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">Experience Journey</h2>
                <div className="h-px bg-slate-200 dark:bg-slate-800 flex-1"></div>
            </div>

            <div className="relative pl-8 border-l border-slate-200 dark:border-slate-800 space-y-12">
                {experiences.map((exp, index) => (
                    <div key={index} className="relative group">
                        <span className={`absolute -left-[37px] top-2 flex h-4 w-4 items-center justify-center rounded-full border-2 ${exp.current ? 'border-primary' : 'border-slate-300 dark:border-slate-600'} bg-background-light dark:bg-background-dark`}>
                            {exp.current && <span className="h-2 w-2 rounded-full bg-primary"></span>}
                        </span>

                        <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-10 mb-2">
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors">
                                {exp.title}
                            </h3>
                            <span className="text-sm font-medium text-slate-500 dark:text-slate-400">{exp.period}</span>
                        </div>

                        <div className="text-base font-semibold text-slate-700 dark:text-slate-300 mb-2">{exp.company}</div>

                        <p className="text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
                            {exp.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}
