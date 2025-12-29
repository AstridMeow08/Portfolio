export default function HeroSection() {
    return (
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center min-h-[60vh]">
            {/* Text Content */}
            <div className="lg:col-span-6 flex flex-col gap-6 order-2 lg:order-1">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider w-fit">
                    <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                    About Me
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight text-slate-900 dark:text-white">
                    Architecting <span className="text-primary">digital experiences</span> with precision.
                </h1>

                <div className="flex flex-col gap-4 text-slate-600 dark:text-slate-400 text-base md:text-lg leading-relaxed">
                    <p>
                        I'm Alex, a Full-Stack Developer passionate about building accessible, pixel-perfect user interfaces that blend seamlessly with performant backend architectures.
                    </p>
                    <p>
                        With a background in traditional graphic design and a degree in Computer Science, I bridge the often-wide gap between design and engineering. I don't just write code; I craft solutions that are scalable, maintainable, and delightful to use.
                    </p>
                </div>

                <div className="flex flex-wrap gap-4 pt-4">
                    <button className="flex items-center gap-2 h-12 px-6 bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:opacity-90 rounded-lg text-sm font-bold transition-all">
                        <span className="material-symbols-outlined text-[20px]">download</span>
                        Download Resume
                    </button>
                    <div className="flex items-center gap-4 px-4">
                        <a className="text-slate-400 hover:text-primary transition-colors" href="#">
                            <span className="sr-only">GitHub</span>
                            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
                            </svg>
                        </a>
                        <a className="text-slate-400 hover:text-primary transition-colors" href="#">
                            <span className="sr-only">LinkedIn</span>
                            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.238 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>

            {/* 3D Visual Area */}
            <div className="lg:col-span-6 relative h-[400px] lg:h-[600px] w-full flex items-center justify-center order-1 lg:order-2 perspective-[1000px] group">
                {/* Decorative background blob */}
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-100 to-slate-100 dark:from-slate-800 dark:to-slate-900 rounded-full blur-3xl opacity-50 dark:opacity-30 transform translate-y-10 scale-90"></div>

                {/* Main 3D Image */}
                <div
                    className="relative w-full h-full bg-contain bg-center bg-no-repeat transform transition-transform duration-700 ease-out hover:scale-105 hover:rotate-2 drop-shadow-2xl"
                    style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCtGqmuMipMQrKvN_mmLIxxxgjmPbIbArTzmghlvqnV8sQ-UV0xvHS8-HLJXYsL7GXf2CpKEpJIBxk0TMOr2f7m-wuGoDbGMf2fAwzBgG1mLjIvplCFZUnWc8y1W73NdFjxVXqrK25qzf0P-at2NA3nxQTb2E94snBSg1TOsceMUn2ziFviEjwGcao7iBRg9XDLIUnZz3ZpYvqSt2n_qHNNSySA3sQPdQmghfbUSTOQ8zQXG8_uBZTAMF6182yX_0GudosrtZXOf6-V')" }}
                ></div>

                {/* Floating Profile Card */}
                <div className="absolute bottom-10 -left-4 lg:-left-12 bg-white dark:bg-slate-800 p-4 rounded-xl shadow-xl flex items-center gap-4 max-w-xs animate-[bounce_3s_infinite]">
                    <div className="w-12 h-12 rounded-lg bg-slate-200 overflow-hidden shrink-0">
                        <img
                            className="w-full h-full object-cover"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBRvXjcsT__HrbhWRcexfSuMmqlw0GqhqvA8hCU7PhRUpBlShJrL5L318jrGXUPL7tHyXNrVH66vhRCi2ijA5YMVTVbLzqjW77UAc-6A_BPc_mePXFkww3FmmmeM-MYnsP-Vatk8-y-HmwJA6FKff9tzxRAyzcrRvb0v2HMMJuiHF3l0Hw3KkFOFpGeHNcpxpdG11d-mSoBYoPbgp4oy22cBLNcXe1lvvHe0TkCD0fd_DC-NfCcLIkiYE3pZv8KKxux37KVRe4GemDY"
                            alt="Professional headshot of a smiling developer"
                        />
                    </div>
                    <div>
                        <div className="text-sm font-bold text-slate-900 dark:text-white">Alex Dev</div>
                        <div className="text-xs text-primary font-medium">Senior Developer</div>
                    </div>
                </div>
            </div>
        </section>
    );
}
