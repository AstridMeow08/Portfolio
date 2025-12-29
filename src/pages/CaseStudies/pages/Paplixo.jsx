import Navigation from '../../../components/Navigation';
import Footer from '../../../components/Footer';
import CaseStudyHero from '../components/CaseStudyHero';
import CaseStudySidebar from '../components/CaseStudySidebar';
import NextProject from '../components/NextProject';

export default function Paplixo() {
    return (
        <div className="bg-background-light font-display text-text-main min-h-screen flex flex-col overflow-x-hidden selection:bg-primary selection:text-text-main">
            <Navigation />

            <main className="w-full flex flex-col pt-16">
                <CaseStudyHero
                    title="Paplixo - Business Docs"
                    subtitle="A comprehensive online documentation platform for SMEs and freelancers, featuring a custom integrated document editor and CMS."
                    backgroundImage="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=3000&auto=format&fit=crop"
                    liveLink="https://paplixo.com/"
                    badge="SaaS Platform"
                />

                <div className="w-full bg-surface-light border-t border-[#e9e8ce]">
                    <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
                        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-12 lg:gap-24">
                            <CaseStudySidebar
                                client="Paplixo"
                                role="Full Stack & DevOps"
                                timeline="Ongoing"
                                contents={[
                                    { id: "editor", label: "Document Editor" },
                                    { id: "cms", label: "Custom CMS" },
                                    { id: "dashboard", label: "User Dashboard" }
                                ]}
                            />

                            <article className="flex flex-col gap-16 lg:gap-24 min-w-0">
                                {/* Mobile Meta Data */}
                                <div className="lg:hidden grid grid-cols-2 gap-4 p-5 rounded-xl bg-surface-light border border-[#e9e8ce]">
                                    <div className="flex flex-col gap-1">
                                        <span className="text-xs font-semibold uppercase text-text-muted">Client</span>
                                        <span className="text-sm font-bold text-text-main">Paplixo</span>
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <span className="text-xs font-semibold uppercase text-text-muted">Role</span>
                                        <span className="text-sm font-bold text-text-main">Full Stack & DevOps</span>
                                    </div>
                                </div>

                                {/* Section: Editor */}
                                <section id="editor" className="flex flex-col gap-6 scroll-mt-28">
                                    <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-text-main border-b border-[#e9e8ce] pb-4">
                                        Integrated Document Editor
                                    </h2>
                                    <div className="prose max-w-none text-text-muted leading-relaxed">
                                        <p className="mb-4">
                                            The core challenge was to provide users with a Microsoft Word-like editing experience directly in the browser. Developing this from scratch was feasible but resource-intensive, so I architected a solution using <strong>OnlyOffice</strong>.
                                        </p>
                                        <div className="mt-4 p-6 bg-[#1e293b] rounded-xl border border-slate-700 text-slate-300">
                                            <h4 className="font-bold text-white mb-3">Docker Implementation</h4>
                                            <p className="text-sm font-mono mb-4">
                                                To ensure isolation and scalability, the OnlyOffice Document Server is containerized via Docker and exposed on a dedicated port.
                                            </p>
                                            <ul className="text-sm list-disc pl-5 space-y-2">
                                                <li><strong>Microservice Architecture:</strong> The editor runs independently from the main Node.js backend.</li>
                                                <li><strong>JWT Security:</strong> Implemented strict token validation (JWT) for all interactions between the client browser and the document server to prevent unauthorized file access.</li>
                                            </ul>
                                        </div>
                                    </div>
                                </section>

                                {/* Section: CMS */}
                                <section id="cms" className="flex flex-col gap-6 scroll-mt-28">
                                    <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-text-main border-b border-[#e9e8ce] pb-4">
                                        Custom Content Management
                                    </h2>
                                    <p className="text-text-muted leading-relaxed">
                                        Managing thousands of document templates required a robust internal tool. I built a bespoke CMS to handle the specific hierarchy of Paplixo's offering.
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                                        <div className="p-6 rounded-xl bg-surface-light border border-[#e9e8ce] flex flex-col gap-3">
                                            <span className="material-symbols-outlined text-3xl text-primary">category</span>
                                            <h3 className="font-bold text-text-main">Hierarchical Structure</h3>
                                            <p className="text-sm text-text-muted">Admins can create deep nested structures (Category -&gt; Subcategory -&gt; Document Type) with strict type validation.</p>
                                        </div>
                                        <div className="p-6 rounded-xl bg-surface-light border border-[#e9e8ce] flex flex-col gap-3">
                                            <span className="material-symbols-outlined text-3xl text-primary">update</span>
                                            <h3 className="font-bold text-text-main">Hot Updates</h3>
                                            <p className="text-sm text-text-muted">Templates can be added or modified in real-time without requiring a full server restart or deployment.</p>
                                        </div>
                                    </div>
                                </section>

                                {/* Section: Dashboard */}
                                <section id="dashboard" className="flex flex-col gap-6 scroll-mt-28">
                                    <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-text-main border-b border-[#e9e8ce] pb-4">
                                        Dynamic User Dashboard
                                    </h2>
                                    <p className="text-text-muted leading-relaxed">
                                        The user-facing dashboard acts as the command center for document generation. It features efficient state management to track the lifecycle of a document from selection to final PDF export.
                                    </p>
                                    <div className="flex flex-wrap gap-2 pt-2">
                                        <span className="px-3 py-1 bg-surface-dark text-white text-xs font-bold uppercase rounded-full">React</span>
                                        <span className="px-3 py-1 bg-surface-dark text-white text-xs font-bold uppercase rounded-full">Redux Toolkit</span>
                                        <span className="px-3 py-1 bg-surface-dark text-white text-xs font-bold uppercase rounded-full">Socket.io</span>
                                    </div>
                                </section>

                            </article>

                            <NextProject
                                title="PDFWorks - Online Suite"
                                link="/case-studies/pdfworks"
                                backgroundImage="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=3000&auto=format&fit=crop"
                            />
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
