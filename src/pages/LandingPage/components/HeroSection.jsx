export default function HeroSection() {
    return (
        <section className="relative w-full flex-1 flex flex-col items-center justify-center px-4 py-12 lg:py-24 max-w-7xl mx-auto">
            {/* Background Decorative Elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] -z-10"></div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center w-full">
                {/* Text Content */}
                <div className="flex flex-col gap-6 lg:items-start text-center lg:text-left order-2 lg:order-1">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#e9e8ce]/30 border border-[#e9e8ce] w-fit mx-auto lg:mx-0">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                        <span className="text-xs font-semibold uppercase tracking-wider text-text-muted">Available for hire</span>
                    </div>

                    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tighter leading-[1.1]">
                        Building Digital <br />
                        <span className="relative inline-block">
                            Architectures
                            <svg className="absolute w-full h-3 bottom-1 left-0 text-primary -z-10" preserveAspectRatio="none" viewBox="0 0 100 10">
                                <path d="M0 5 Q 50 10 100 5" fill="none" stroke="currentColor" strokeWidth="8"></path>
                            </svg>
                        </span>
                    </h1>

                    <p className="text-lg text-text-muted max-w-lg mx-auto lg:mx-0 leading-relaxed">
                        Full-Stack Developer &amp; UI Engineer crafting robust backends and intuitive frontends. I bridge the gap between design and engineering.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
                        <button className="bg-text-main text-white hover:opacity-90 px-8 py-4 rounded-full font-bold text-base transition-all flex items-center justify-center gap-2">
                            View Projects
                            <span className="material-symbols-outlined text-[20px]">arrow_downward</span>
                        </button>
                        <button className="bg-transparent border-2 border-[#e9e8ce] hover:border-text-main px-8 py-4 rounded-full font-bold text-base transition-all text-text-main flex items-center justify-center gap-2">
                            Contact Me
                        </button>
                    </div>

                    <div className="flex items-center justify-center lg:justify-start gap-6 mt-8">
                        <a className="text-text-muted hover:text-text-main transition-colors" href="#"><span className="material-symbols-outlined text-3xl">code</span></a>
                        <a className="text-text-muted hover:text-text-main transition-colors" href="#"><span className="material-symbols-outlined text-3xl">data_object</span></a>
                        <a className="text-text-muted hover:text-text-main transition-colors" href="#"><span className="material-symbols-outlined text-3xl">terminal</span></a>
                    </div>
                </div>

                {/* 3D Visual Representation */}
                <div className="relative flex items-center justify-center order-1 lg:order-2 h-[400px] lg:h-[600px] w-full">
                    <div className="relative w-full h-full rounded-3xl overflow-hidden flex items-center justify-center">
                        <iframe
                            src='https://my.spline.design/nexbotrobotcharacterconcept-opDi4I622qdG1sgqLydQh1fU/'
                            frameBorder='0'
                            width='100%'
                            height='100%'
                            className="pointer-events-auto absolute top-0 left-0 w-full h-[calc(100%+60px)]"
                            style={{ clipPath: 'inset(0 0 60px 0)' }}
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
}
