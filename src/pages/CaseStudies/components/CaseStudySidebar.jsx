export default function CaseStudySidebar({
    client = "Shopify Plus Brand",
    role = "Full Stack Lead",
    timeline = "3 Months (Q2 2023)",
    contents = [
        { id: "challenge", label: "The Challenge" },
        { id: "process", label: "The Process" },
        { id: "tech-stack", label: "Tech Stack" },
        { id: "deep-dive", label: "Technical Deep Dive" },
        { id: "outcomes", label: "Outcomes" }
    ]
}) {
    return (
        <aside className="hidden lg:block relative">
            <div className="sticky top-28 flex flex-col gap-8">
                {/* Project Meta */}
                <div className="flex flex-col gap-6 p-6 rounded-xl bg-surface-light border border-[#e9e8ce]">
                    <div className="flex flex-col gap-1">
                        <span className="text-xs font-semibold uppercase text-text-muted">Client</span>
                        <span className="text-sm font-bold text-text-main">{client}</span>
                    </div>
                    <div className="flex flex-col gap-1">
                        <span className="text-xs font-semibold uppercase text-text-muted">Role</span>
                        <span className="text-sm font-bold text-text-main">{role}</span>
                    </div>
                    <div className="flex flex-col gap-1">
                        <span className="text-xs font-semibold uppercase text-text-muted">Timeline</span>
                        <span className="text-sm font-bold text-text-main">{timeline}</span>
                    </div>
                </div>

                {/* Navigation */}
                <nav className="flex flex-col gap-2">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-text-muted px-3 mb-2">Contents</h3>
                    {contents.map((item) => (
                        <a
                            key={item.id}
                            className="flex items-center justify-between px-3 py-2 rounded-lg text-text-muted hover:text-text-main hover:bg-[#e9e8ce]/30 text-sm font-medium transition-colors"
                            href={`#${item.id}`}
                        >
                            {item.label}
                        </a>
                    ))}
                </nav>
            </div>
        </aside>
    );
}
