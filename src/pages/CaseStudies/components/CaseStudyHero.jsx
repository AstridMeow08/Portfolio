export default function CaseStudyHero({ 
    title = "E-Commerce Replatforming", 
    subtitle = "A complete overhaul of a legacy retail platform for a Shopify Plus brand...",
    backgroundImage = "https://lh3.googleusercontent.com/aida-public/AB6AXuCmYwnH5LVE4EZocpKsD8ytI0EbzJVS0P0xAFiuBME48Ne6aFjC7SxaSqlGPXtzimVx22mpmVCwPTwktmctlonzrghYvlh4yE0ydvHnhBABcCdEJLxUAThE0t0q5lmd-N_0CZxzt9Kw_yIvc1fWym7qF-lkfTxW6pj8RdmdAycSLSQOlYCEqDYhG6jYSmpDpmT39SEILqZPIWhsrFPEz9WeFvCqQM29hKoq_z1PevuuxQAax6_WWHB4pS_v8PGmiwm5P8eqpGnQObkO",
    liveLink = "#",
    repoLink = "#",
    badge = "Case Study"
}) {
    return (
        <section className="relative w-full pt-16 pb-12 lg:pt-24 lg:pb-20 px-4 sm:px-6 lg:px-8 max-w-[1280px] mx-auto">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-16">
                {/* Text Content */}
                <div className="flex-1 flex flex-col gap-6 lg:pt-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#e9e8ce]/30 border border-[#e9e8ce] text-text-muted w-fit">
                        <span className="material-symbols-outlined text-sm">cases</span>
                        <span className="text-xs font-bold uppercase tracking-wide">{badge}</span>
                    </div>
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] text-text-main">
                        {title}
                    </h1>
                    <p className="text-lg text-text-muted leading-relaxed max-w-2xl">
                        {subtitle}
                    </p>
                    <div className="flex flex-wrap gap-4 pt-2">
                        {liveLink && (
                            <a className="flex h-11 items-center gap-2 px-6 rounded-lg bg-primary hover:bg-[#e6e205] text-text-main text-sm font-bold transition-all shadow-lg shadow-primary/25" href={liveLink} target="_blank" rel="noopener noreferrer">
                                <span className="material-symbols-outlined text-[18px]">open_in_new</span>
                                View Live Site
                            </a>
                        )}
                        {repoLink && (
                            <a className="flex h-11 items-center gap-2 px-6 rounded-lg bg-surface-light border border-[#e9e8ce] hover:bg-[#e9e8ce]/30 text-text-main text-sm font-bold transition-all" href={repoLink} target="_blank" rel="noopener noreferrer">
                                <span className="material-symbols-outlined text-[18px]">code</span>
                                GitHub Repo
                            </a>
                        )}
                    </div>
                </div>

                {/* Hero Image */}
                <div className="w-full lg:w-[50%] aspect-video lg:aspect-[4/3] relative rounded-xl overflow-hidden shadow-2xl border border-[#e9e8ce] group">
                    <div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-transparent z-10"></div>
                    <div
                        className="w-full h-full bg-cover bg-center bg-no-repeat transition-transform duration-700 group-hover:scale-105"
                        style={{ backgroundImage: `url('${backgroundImage}')` }}
                    >
                    </div>
                </div>
            </div>
        </section>
    );
}
