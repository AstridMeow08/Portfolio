import FloatingCube from './FloatingCube';

export default function ContactInfo() {
    return (
        <div className="flex-1 flex flex-col gap-8">
            {/* Heading Section */}
            <div className="flex flex-col gap-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#e9e8ce]/30 border border-[#e9e8ce] w-fit">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                    <span className="text-xs font-bold text-text-muted uppercase tracking-wider">Open to Work</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-black leading-tight tracking-tight text-text-main">
                    Let's start a <br /><span className="relative inline-block">
                        conversation.
                        <svg className="absolute w-full h-3 bottom-1 left-0 text-primary -z-10" preserveAspectRatio="none" viewBox="0 0 100 10">
                            <path d="M0 5 Q 50 10 100 5" fill="none" stroke="currentColor" strokeWidth="8"></path>
                        </svg>
                    </span>
                </h1>
                <p className="text-text-muted text-lg leading-relaxed max-w-lg">
                    Interested in collaborating on a new project or just want to talk tech? Fill out the form or reach out directly. I usually respond within 24 hours.
                </p>
            </div>

            {/* Direct Contact Card */}
            <div className="rounded-xl border border-[#e9e8ce] bg-surface-light p-1 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between p-4 rounded-lg bg-background-light">
                    <div className="flex items-center gap-4">
                        <div className="flex items-center justify-center rounded-lg bg-primary/20 text-text-main shrink-0 size-12">
                            <span className="material-symbols-outlined">mail</span>
                        </div>
                        <div className="flex flex-col justify-center">
                            <p className="text-text-main text-base font-bold">Email Me</p>
                            <a className="text-text-muted text-sm hover:text-text-main transition-colors" href="mailto:hello@devportfolio.com">hello@devportfolio.com</a>
                        </div>
                    </div>
                    <button className="flex items-center gap-1 text-text-main text-sm font-bold hover:bg-[#e9e8ce]/30 px-3 py-1.5 rounded-lg transition-colors group">
                        <span>Copy</span>
                        <span className="material-symbols-outlined text-[16px]">content_copy</span>
                    </button>
                </div>
            </div>

            {/* Social Grid */}
            <div>
                <p className="text-sm font-semibold text-text-muted uppercase tracking-wider mb-4">Connect Elsewhere</p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {/* LinkedIn */}
                    <a className="flex flex-col items-center justify-center gap-3 p-6 rounded-xl border border-[#e9e8ce] bg-surface-light hover:border-primary/50 hover:shadow-lg transition-all group" href="#">
                        <span className="material-symbols-outlined text-3xl text-text-main grayscale group-hover:grayscale-0 transition-all">work</span>
                        <span className="text-sm font-bold text-text-main">LinkedIn</span>
                    </a>

                    {/* GitHub */}
                    <a className="flex flex-col items-center justify-center gap-3 p-6 rounded-xl border border-[#e9e8ce] bg-surface-light hover:border-primary/50 hover:shadow-lg transition-all group" href="#">
                        <span className="material-symbols-outlined text-3xl text-text-main">code</span>
                        <span className="text-sm font-bold text-text-main">GitHub</span>
                    </a>

                    {/* Twitter */}
                    <a className="flex flex-col items-center justify-center gap-3 p-6 rounded-xl border border-[#e9e8ce] bg-surface-light hover:border-primary/50 hover:shadow-lg transition-all group" href="#">
                        <span className="material-symbols-outlined text-3xl text-text-main">chat</span>
                        <span className="text-sm font-bold text-text-main">Twitter/X</span>
                    </a>
                </div>
            </div>

            <FloatingCube />
        </div>
    );
}
