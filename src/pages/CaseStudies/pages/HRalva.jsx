import Navigation from '../../../components/Navigation';
import Footer from '../../../components/Footer';
import CaseStudyHero from '../components/CaseStudyHero';
import CaseStudySidebar from '../components/CaseStudySidebar';
import NextProject from '../components/NextProject';

export default function HRalva() {
    return (
        <div className="bg-background-light font-display text-text-main min-h-screen flex flex-col overflow-x-hidden selection:bg-primary selection:text-text-main">
            <Navigation />

            <main className="w-full flex flex-col pt-16">
                <CaseStudyHero
                    title="HRalva - Next-Gen HRMS"
                    subtitle="A modular Human Resource Management System streamlining communication and document workflows for modern workplaces."
                    backgroundImage="https://images.unsplash.com/photo-1522071823991-b9671e9d7fbd?q=80&w=3000&auto=format&fit=crop"
                    liveLink="https://hralva.com/"
                    badge="HRMS Platform"
                />

                <div className="w-full bg-surface-light border-t border-[#e9e8ce]">
                    <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
                        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-12 lg:gap-24">
                            <CaseStudySidebar
                                client="HRalva"
                                role="Full Stack Developer"
                                timeline="Ongoing"
                                contents={[
                                    { id: "announcements", label: "Announcement Engine" },
                                    { id: "templates", label: "Template Management" },
                                    { id: "integration", label: "OnlyOffice Integration" }
                                ]}
                            />

                            <article className="flex flex-col gap-16 lg:gap-24 min-w-0">
                                {/* Mobile Meta Data */}
                                <div className="lg:hidden grid grid-cols-2 gap-4 p-5 rounded-xl bg-surface-light border border-[#e9e8ce]">
                                    <div className="flex flex-col gap-1">
                                        <span className="text-xs font-semibold uppercase text-text-muted">Client</span>
                                        <span className="text-sm font-bold text-text-main">HRalva</span>
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <span className="text-xs font-semibold uppercase text-text-muted">Role</span>
                                        <span className="text-sm font-bold text-text-main">Full Stack Developer</span>
                                    </div>
                                </div>

                                {/* Section: Announcements */}
                                <section id="announcements" className="flex flex-col gap-6 scroll-mt-28">
                                    <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-text-main border-b border-[#e9e8ce] pb-4">
                                        Real-Time Announcement Engine
                                    </h2>
                                    <p className="text-text-muted leading-relaxed">
                                        The Announcement Management module was designed to bridge the gap between HR administration and the active workforce. It serves as a central hub for broadcasting critical updates and team news.
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="p-6 rounded-xl bg-surface-light border border-[#e9e8ce] flex flex-col gap-3">
                                            <span className="material-symbols-outlined text-3xl text-primary">campaign</span>
                                            <h3 className="font-bold text-text-main">Admin Broadcasting</h3>
                                            <p className="text-sm text-text-muted">Admins and HR personnel can draft and publish global announcements, instantly notifying the relevant departments or the entire organization.</p>
                                        </div>
                                        <div className="p-6 rounded-xl bg-surface-light border border-[#e9e8ce] flex flex-col gap-3">
                                            <span className="material-symbols-outlined text-3xl text-primary">forum</span>
                                            <h3 className="font-bold text-text-main">Social Engagement</h3>
                                            <p className="text-sm text-text-muted">Employee-side participation is encouraged through an interactive layer where users can react with likes and contribute comments, fostering a transparent company culture.</p>
                                        </div>
                                    </div>
                                </section>

                                {/* Section: Templates */}
                                <section id="templates" className="flex flex-col gap-6 scroll-mt-28">
                                    <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-text-main border-b border-[#e9e8ce] pb-4">
                                        Smart Template Management
                                    </h2>
                                    <p className="text-text-muted leading-relaxed">
                                        Handling HR artifacts like offer letters, experience certificates, and internal memos requires high precision and quick turnaround. I implemented a modular template system to automate these tasks.
                                    </p>
                                    <div className="w-full p-6 rounded-xl bg-[#1e293b] border border-slate-700 text-slate-300">
                                        <h4 className="font-bold text-white mb-4">Functional Capabilities</h4>
                                        <ul className="space-y-4 text-sm">
                                            <li className="flex items-start gap-3">
                                                <span className="material-symbols-outlined text-green-400 mt-0.5">add_circle</span>
                                                <div>
                                                    <span className="font-bold text-white block">Dynamic Creation</span>
                                                    <span>Upload and categorize new letter templates into the central repository.</span>
                                                </div>
                                            </li>
                                            <li className="items-start gap-3 flex">
                                                <span className="material-symbols-outlined text-blue-400 mt-0.5">download</span>
                                                <div>
                                                    <span className="font-bold text-white block">One-Click Export</span>
                                                    <span>Generate and download finalized documents in standard office and PDF formats.</span>
                                                </div>
                                            </li>
                                            <li className="items-start gap-3 flex">
                                                <span className="material-symbols-outlined text-red-400 mt-0.5">delete_sweep</span>
                                                <div>
                                                    <span className="font-bold text-white block">Audit & Cleanup</span>
                                                    <span>Maintain a clean workspace by archiving or deleting deprecated templates.</span>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </section>

                                {/* Section: OnlyOffice */}
                                <section id="integration" className="flex flex-col gap-6 scroll-mt-28">
                                    <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-text-main border-b border-[#e9e8ce] pb-4">
                                        OnlyOffice Integration (Docker)
                                    </h2>
                                    <p className="text-text-muted leading-relaxed">
                                        To eliminate the need for external software, I architected an integrated editing experience using <strong>OnlyOffice</strong>.
                                    </p>
                                    <div className="p-6 rounded-xl border border-[#e9e8ce] bg-white relative overflow-hidden">
                                        <div className="flex flex-col gap-4 relative z-10">
                                            <div className="flex items-center gap-2">
                                                <span className="flex h-3 w-3 rounded-full bg-red-400"></span>
                                                <span className="flex h-3 w-3 rounded-full bg-yellow-400"></span>
                                                <span className="flex h-3 w-3 rounded-full bg-green-400"></span>
                                                <span className="ml-2 text-xs font-mono text-gray-400">onlyoffice-container:8080</span>
                                            </div>
                                            <div className="prose prose-sm max-w-none text-text-muted italic">
                                                "By containerizing the document server, we achieved complete environment parity. HR can now edit complex DOCX templates directly within the dashboard with 100% layout accuracy."
                                            </div>
                                            <div className="flex flex-wrap gap-2 pt-2">
                                                <span className="px-2 py-1 bg-surface-dark text-white text-[10px] font-bold uppercase rounded">Docker Compose</span>
                                                <span className="px-2 py-1 bg-surface-dark text-white text-[10px] font-bold uppercase rounded">JWT Auth</span>
                                                <span className="px-2 py-1 bg-surface-dark text-white text-[10px] font-bold uppercase rounded">Collaborative Editing</span>
                                            </div>
                                        </div>
                                    </div>
                                </section>

                            </article>

                            <NextProject
                                title="RankSEO - AI Platform"
                                link="/works/rankseo"
                                backgroundImage="https://images.unsplash.com/photo-1571786256017-aee7a0c006b6?q=80&w=3000&auto=format&fit=crop"
                            />
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
