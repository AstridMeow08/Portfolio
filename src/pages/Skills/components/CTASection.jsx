export default function CTASection() {
    return (
        <section className="bg-gradient-to-br from-primary/5 to-primary/10 py-24 border-t border-[#e9e8ce]">
            <div className="mx-auto flex max-w-4xl flex-col items-center text-center px-6">
                <h2 className="text-4xl font-black text-text-main md:text-5xl lg:text-6xl tracking-tight">Ready to bring your ideas to life?</h2>
                <p className="mt-6 max-w-2xl text-xl text-text-muted">
                    I'm currently available for freelance projects and open to new opportunities. Let's build something amazing together.
                </p>
                <button className="mt-10 flex h-14 min-w-[220px] items-center justify-center rounded-xl bg-primary px-10 text-lg font-bold text-text-main shadow-xl shadow-primary/40 transition-all hover:scale-105 hover:bg-[#e6e205] hover:shadow-primary/50 ring-offset-2 focus:ring-2 focus:ring-primary">
                    Start a Project
                </button>
            </div>
        </section>
    );
}
