import Navigation from '../../../components/Navigation';
import Footer from '../../../components/Footer';
import CaseStudyHero from '../components/CaseStudyHero';
import CaseStudySidebar from '../components/CaseStudySidebar';
import NextProject from '../components/NextProject';

export default function RankSEO() {
    return (
        <div className="bg-background-light font-display text-text-main min-h-screen flex flex-col overflow-x-hidden selection:bg-primary selection:text-text-main">
            <Navigation />

            <main className="w-full flex flex-col pt-16">
                <CaseStudyHero
                    title="RankSEO - AI Powered SEO"
                    subtitle="An advanced implementation of automated data acquisition and AI analytics for SEO optimization."
                    backgroundImage="https://images.unsplash.com/photo-1571786256017-aee7a0c006b6?q=80&w=3000&auto=format&fit=crop"
                    liveLink="https://rankseo.in"
                    badge="AI Platform"
                />

                <div className="w-full bg-surface-light border-t border-[#e9e8ce]">
                    <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
                        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-12 lg:gap-24">
                            <CaseStudySidebar
                                client="RankSEO.in"
                                role="Full Stack & Automation"
                                timeline="Ongoing"
                                contents={[
                                    { id: "auth", label: "Authentication" },
                                    { id: "scraping", label: "Data Scraping" },
                                    { id: "automation", label: "AI Automation" },
                                    { id: "admin", label: "Admin Panel" }
                                ]}
                            />

                            <article className="flex flex-col gap-16 lg:gap-24 min-w-0">
                                {/* Mobile Meta Data */}
                                <div className="lg:hidden grid grid-cols-2 gap-4 p-5 rounded-xl bg-surface-light border border-[#e9e8ce]">
                                    <div className="flex flex-col gap-1">
                                        <span className="text-xs font-semibold uppercase text-text-muted">Client</span>
                                        <span className="text-sm font-bold text-text-main">RankSEO.in</span>
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <span className="text-xs font-semibold uppercase text-text-muted">Role</span>
                                        <span className="text-sm font-bold text-text-main">Full Stack & Automation</span>
                                    </div>
                                </div>

                                {/* Section: Authentication */}
                                <section id="auth" className="flex flex-col gap-6 scroll-mt-28">
                                    <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-text-main border-b border-[#e9e8ce] pb-4">
                                        Authentication & Security
                                    </h2>
                                    <div className="prose max-w-none text-text-muted leading-relaxed">
                                        <p className="mb-4">
                                            The foundation of the platform relies on a robust and secure authentication system. I implemented a dual-strategy approach to ensure flexibility and security for all users.
                                        </p>
                                        <ul className="list-disc pl-5 gap-2 flex flex-col">
                                            <li><strong>JWT Implementation:</strong> Developed a stateless authentication mechanism using JSON Web Tokens (JWT) for secure user sessions during standard email/password signup and signin.</li>
                                            <li><strong>Google OAuth 2.0:</strong> Integrated Google's OAuth 2.0 to reduce friction during onboarding, allowing users to sign up with a single click.</li>
                                            <li><strong>Secure Recovery:</strong> Built a comprehensive "Forgot Password" flow effectively handling OTP generation, emailing via SMTP, and server-side verification to prevent unauthorized account recovery.</li>
                                        </ul>
                                    </div>
                                </section>

                                {/* Section: Scraping */}
                                <section id="scraping" className="flex flex-col gap-6 scroll-mt-28">
                                    <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-text-main border-b border-[#e9e8ce] pb-4">
                                        Advanced Data Acquisition
                                    </h2>
                                    <p className="text-text-muted leading-relaxed">
                                        To analyze SEO performance effectively, we needed raw data directly from user websites. I utilized <strong>Playwright</strong> for its ability to handle modern, JavaScript-heavy web applications.
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                                        <div className="p-6 rounded-xl bg-surface-light border border-[#e9e8ce] flex flex-col gap-3">
                                            <span className="material-symbols-outlined text-3xl text-primary">spider</span>
                                            <h3 className="font-bold text-text-main">Deep Crawling</h3>
                                            <p className="text-sm text-text-muted">Currently, the system not only analyzes the provided URL but actively crawls sub-links to gather a holistic view of the domain's content structure.</p>
                                        </div>
                                        <div className="p-6 rounded-xl bg-surface-light border border-[#e9e8ce] flex flex-col gap-3">
                                            <span className="material-symbols-outlined text-3xl text-primary">cleaning_services</span>
                                            <h3 className="font-bold text-text-main">Data Sanitation</h3>
                                            <p className="text-sm text-text-muted">A backend preprocessing layer strips unnecessary HTML tags, scripts, and styling to ensure only high-quality, relevant text is sent for AI processing.</p>
                                        </div>
                                    </div>
                                </section>

                                {/* Section: Automation */}
                                <section id="automation" className="flex flex-col gap-6 scroll-mt-28">
                                    <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-text-main border-b border-[#e9e8ce] pb-4">
                                        AI Processing with n8n
                                    </h2>
                                    <p className="text-text-muted leading-relaxed">
                                        The core value proposition of RankSEO is its AI analysis. We bypassed the limitations of standard hard-coded algorithms by leveraging <strong>n8n</strong> workfows.
                                    </p>
                                    <div className="w-full p-6 rounded-xl bg-[#1e293b] text-slate-300 border border-slate-700">
                                        <div className="flex items-center gap-4 mb-4">
                                            <div className="p-2 rounded bg-orange-500/20 text-orange-500">
                                                <span className="material-symbols-outlined">api</span>
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-white">Workflow Architecture</h4>
                                                <span className="text-xs text-slate-400">Data Flow Pipeline</span>
                                            </div>
                                        </div>
                                        <div className="space-y-3 font-mono text-sm">
                                            <div className="flex items-center gap-3">
                                                <span className="text-green-400">INPUT</span>
                                                <span className="text-slate-500">→</span>
                                                <span>Sanitized Website Data (JSON)</span>
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <span className="text-blue-400">PROCESS</span>
                                                <span className="text-slate-500">→</span>
                                                <span>Keyword Extraction & Gap Analysis (AI Agent)</span>
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <span className="text-purple-400">OUTPUT</span>
                                                <span className="text-slate-500">→</span>
                                                <span>Structured Recommendations</span>
                                            </div>
                                        </div>
                                    </div>
                                </section>

                                {/* Section: Admin Panel */}
                                <section id="admin" className="flex flex-col gap-6 scroll-mt-28">
                                    <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-text-main border-b border-[#e9e8ce] pb-4">
                                        Admin Management
                                    </h2>
                                    <p className="text-text-muted leading-relaxed">
                                        To oversee the platform's operations, I built a dedicated Admin Panel. This secured area allows for:
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        <span className="px-3 py-1 bg-surface-dark text-white text-xs font-bold uppercase rounded-full">User Management</span>
                                        <span className="px-3 py-1 bg-surface-dark text-white text-xs font-bold uppercase rounded-full">System Health Monitoring</span>
                                        <span className="px-3 py-1 bg-surface-dark text-white text-xs font-bold uppercase rounded-full">Role Based Access Control</span>
                                    </div>
                                </section>

                            </article>
                            <NextProject
                                title="E-Commerce Replatforming"
                                link="/case-studies/ecommerce"
                                backgroundImage="https://lh3.googleusercontent.com/aida-public/AB6AXuCmYwnH5LVE4EZocpKsD8ytI0EbzJVS0P0xAFiuBME48Ne6aFjC7SxaSqlGPXtzimVx22mpmVCwPTwktmctlonzrghYvlh4yE0ydvHnhBABcCdEJLxUAThE0t0q5lmd-N_0CZxzt9Kw_yIvc1fWym7qF-lkfTxW6pj8RdmdAycSLSQOlYCEqDYhG6jYSmpDpmT39SEILqZPIWhsrFPEz9WeFvCqQM29hKoq_z1PevuuxQAax6_WWHB4pS_v8PGmiwm5P8eqpGnQObkO"
                            />
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
