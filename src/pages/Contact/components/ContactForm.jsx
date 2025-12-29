export default function ContactForm() {
    return (
        <div className="flex-1 w-full max-w-lg mx-auto lg:mx-0">
            <div className="bg-surface-light border border-[#e9e8ce] rounded-2xl shadow-xl shadow-[#e9e8ce]/50 p-6 md:p-8 relative overflow-hidden">
                {/* Decorative gradient blob */}
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/20 rounded-full blur-3xl pointer-events-none"></div>

                <form className="flex flex-col gap-6 relative z-10">
                    <div className="flex flex-col gap-1">
                        <h3 className="text-xl font-bold text-text-main">Send a Message</h3>
                        <p className="text-sm text-text-muted">I'll get back to you as soon as possible.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <label className="flex flex-col gap-2">
                            <span className="text-sm font-medium text-text-main">Name</span>
                            <input
                                className="w-full h-12 px-4 rounded-lg bg-background-light border border-[#e9e8ce] text-text-main placeholder-text-muted focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none"
                                placeholder="Jane Doe"
                                type="text"
                            />
                        </label>
                        <label className="flex flex-col gap-2">
                            <span className="text-sm font-medium text-text-main">Email</span>
                            <input
                                className="w-full h-12 px-4 rounded-lg bg-background-light border border-[#e9e8ce] text-text-main placeholder-text-muted focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none"
                                placeholder="jane@example.com"
                                type="email"
                            />
                        </label>
                    </div>

                    <label className="flex flex-col gap-2">
                        <span className="text-sm font-medium text-text-main">Subject</span>
                        <input
                            className="w-full h-12 px-4 rounded-lg bg-background-light border border-[#e9e8ce] text-text-main placeholder-text-muted focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none"
                            placeholder="Project collaboration..."
                            type="text"
                        />
                    </label>

                    <label className="flex flex-col gap-2">
                        <span className="text-sm font-medium text-text-main">Message</span>
                        <textarea
                            className="w-full p-4 rounded-lg bg-background-light border border-[#e9e8ce] text-text-main placeholder-text-muted focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none resize-none"
                            placeholder="Hi, I'd like to discuss..."
                            rows="4"
                        ></textarea>
                    </label>

                    <button
                        className="mt-2 w-full h-12 bg-primary hover:bg-[#e6e205] text-text-main font-bold rounded-lg shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all flex items-center justify-center gap-2 group"
                        type="button"
                    >
                        <span>Send Message</span>
                        <span className="material-symbols-outlined text-[20px] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">send</span>
                    </button>
                </form>
            </div>
        </div>
    );
}
