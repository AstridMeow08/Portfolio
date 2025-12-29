import Navigation from '../../../components/Navigation';
import Footer from '../../../components/Footer';
import CaseStudyHero from '../components/CaseStudyHero';
import CaseStudySidebar from '../components/CaseStudySidebar';
import NextProject from '../components/NextProject';

export default function PDFWorks() {
    return (
        <div className="bg-background-light font-display text-text-main min-h-screen flex flex-col overflow-x-hidden selection:bg-primary selection:text-text-main">
            <Navigation />

            <main className="w-full flex flex-col pt-16">
                <CaseStudyHero
                    title="PDFWorks - Online Suite"
                    subtitle="A comprehensive browser-based PDF manipulation platform featuring hybrid OCR, secure editing, and subscription management."
                    backgroundImage="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=3000&auto=format&fit=crop"
                    liveLink="https://pdfworks.in/"
                    badge="SaaS Tool"
                />

                <div className="w-full bg-surface-light border-t border-[#e9e8ce]">
                    <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
                        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-12 lg:gap-24">
                            <CaseStudySidebar
                                client="PDFWorks"
                                role="Full Stack & Architect"
                                timeline="Ongoing"
                                contents={[
                                    { id: "ocr", label: "Hybrid OCR Engine" },
                                    { id: "monetization", label: "Monetization" },
                                    { id: "editor", label: "Canvas Editor" },
                                    { id: "security", label: "Security & 2FA" }
                                ]}
                            />

                            <article className="flex flex-col gap-16 lg:gap-24 min-w-0">
                                {/* Mobile Meta Data */}
                                <div className="lg:hidden grid grid-cols-2 gap-4 p-5 rounded-xl bg-surface-light border border-[#e9e8ce]">
                                    <div className="flex flex-col gap-1">
                                        <span className="text-xs font-semibold uppercase text-text-muted">Client</span>
                                        <span className="text-sm font-bold text-text-main">PDFWorks</span>
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <span className="text-xs font-semibold uppercase text-text-muted">Role</span>
                                        <span className="text-sm font-bold text-text-main">Full Stack & Architect</span>
                                    </div>
                                </div>

                                {/* Section: Introduction / Suite Overview */}
                                <section className="flex flex-col gap-6">
                                    <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-text-main border-b border-[#e9e8ce] pb-4">
                                        The Comprehensive PDF Suite
                                    </h2>
                                    <p className="text-text-muted leading-relaxed">
                                        PDFWorks isn't just an editor; it's a complete ecosystem for document management. I architected a modular system supporting a wide array of tools, all running directly in the browser.
                                    </p>
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                        <div className="p-4 rounded-xl bg-surface-light border border-[#e9e8ce] text-center">
                                            <span className="material-symbols-outlined text-3xl text-primary mb-2">folder_managed</span>
                                            <h3 className="font-bold text-sm text-text-main">Organize</h3>
                                            <span className="text-xs text-text-muted">Merge, Split, Rotate</span>
                                        </div>
                                        <div className="p-4 rounded-xl bg-surface-light border border-[#e9e8ce] text-center">
                                            <span className="material-symbols-outlined text-3xl text-primary mb-2">edit_note</span>
                                            <h3 className="font-bold text-sm text-text-main">Edit</h3>
                                            <span className="text-xs text-text-muted">Text, shapes, Images</span>
                                        </div>
                                        <div className="p-4 rounded-xl bg-surface-light border border-[#e9e8ce] text-center">
                                            <span className="material-symbols-outlined text-3xl text-primary mb-2">enhanced_encryption</span>
                                            <h3 className="font-bold text-sm text-text-main">Secure</h3>
                                            <span className="text-xs text-text-muted">encrypt, decrypt, 2FA</span>
                                        </div>
                                        <div className="p-4 rounded-xl bg-surface-light border border-[#e9e8ce] text-center">
                                            <span className="material-symbols-outlined text-3xl text-primary mb-2">text_snippet</span>
                                            <h3 className="font-bold text-sm text-text-main">OCR</h3>
                                            <span className="text-xs text-text-muted">Image to Text extraction</span>
                                        </div>
                                    </div>
                                </section>

                                {/* Section: Hybrid OCR */}
                                <section id="ocr" className="flex flex-col gap-6 scroll-mt-28">
                                    <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-text-main border-b border-[#e9e8ce] pb-4">
                                        Hybrid OCR Intelligence
                                    </h2>
                                    <p className="text-text-muted leading-relaxed">
                                        One of the most complex challenges was implementing accurate text extraction for both printed and handwritten documents. I devised a hybrid strategy to balance server costs with accuracy.
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="p-6 rounded-xl bg-surface-light border border-[#e9e8ce] flex flex-col gap-4">
                                            <div className="flex items-center gap-3">
                                                <div className="size-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                                                    <span className="material-symbols-outlined">speed</span>
                                                </div>
                                                <h3 className="font-bold text-text-main">Client-Side Engine</h3>
                                            </div>
                                            <p className="text-sm text-text-muted">
                                                Powered by <strong>Tesseract.js</strong>, this engine runs entirely in the user's browser via Web Workers. It handles standard multi-language printed text with zero latency and no server overhead.
                                            </p>
                                        </div>
                                        <div className="p-6 rounded-xl bg-surface-light border border-[#e9e8ce] flex flex-col gap-4">
                                            <div className="flex items-center gap-3">
                                                <div className="size-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600">
                                                    <span className="material-symbols-outlined">psychology</span>
                                                </div>
                                                <h3 className="font-bold text-text-main">Deep Learning Engine</h3>
                                            </div>
                                            <p className="text-sm text-text-muted">
                                                For handwritten notes, I deployed a <strong>Python EasyOCR</strong> microservice inside a Docker container. It leverages complex deep learning models (ResNet + LSTM) to decipher irregular handwriting patterns.
                                            </p>
                                        </div>
                                    </div>
                                </section>

                                {/* Section: Moneitzation */}
                                <section id="monetization" className="flex flex-col gap-6 scroll-mt-28">
                                    <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-text-main border-b border-[#e9e8ce] pb-4">
                                        Monetization & Invoicing
                                    </h2>
                                    <div className="flex flex-col gap-6">
                                        <p className="text-text-muted leading-relaxed">
                                            Integrating commercial viability required a robust financial backend. I implemented a complete limit-management system integrated with <strong>Cashfree</strong>.
                                        </p>

                                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                            <div className="p-6 rounded-xl bg-[#1e293b] border border-slate-700 text-slate-300">
                                                <h4 className="font-bold text-white mb-4 flex items-center gap-2">
                                                    <span className="material-symbols-outlined text-green-400">payments</span>
                                                    Payment & Topup Logic
                                                </h4>
                                                <ul className="space-y-3 text-sm font-mono">
                                                    <li className="flex gap-3">
                                                        <span className="text-slate-500">01.</span>
                                                        <span><strong>Plan Management CMS:</strong> define credit limits (e.g., 50 OCR scans) dynamically.</span>
                                                    </li>
                                                    <li className="flex gap-3">
                                                        <span className="text-slate-500">02.</span>
                                                        <span><strong>Limit Middleware:</strong> Atomic `CheckLimit` and `UpdateLimit` services prevent usage capability.</span>
                                                    </li>
                                                    <li className="flex gap-3">
                                                        <span className="text-slate-500">03.</span>
                                                        <span><strong>Topup System:</strong> Users can purchase ad-hoc credits when plan limits are exhausted.</span>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="flex flex-col gap-4">
                                                <div className="p-4 rounded-xl bg-surface-light border border-[#e9e8ce]">
                                                    <h4 className="font-bold text-sm text-text-main mb-2">Automated Invoicing</h4>
                                                    <p className="text-xs text-text-muted">
                                                        Upon successful webhook confirmation from Cashfree, the system automatically generates a PDF invoice and dispatches it to the user's email via SMTP.
                                                    </p>
                                                </div>
                                                <div className="p-4 rounded-xl bg-surface-light border border-[#e9e8ce]">
                                                    <h4 className="font-bold text-sm text-text-main mb-2">Admin Financial Panel</h4>
                                                    <p className="text-xs text-text-muted">
                                                        A comprehensive dashboard for admins to view total transactions, payment history, and active subscriptions.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>

                                {/* Section: Editor */}
                                <section id="editor" className="flex flex-col gap-6 scroll-mt-28">
                                    <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-text-main border-b border-[#e9e8ce] pb-4">
                                        Canvas-Based PDF Editor
                                    </h2>
                                    <p className="text-text-muted leading-relaxed">
                                        To allow true in-browser editing, I utilized <strong>pdf.js</strong> (pdf-dist) to parse raw PDF vector data and map distinct text coordinates onto an HTML5 Canvas.
                                    </p>
                                    <div className="p-6 rounded-xl bg-surface-light border border-[#e9e8ce] relative overflow-hidden">
                                        <div className="absolute top-0 right-0 p-4 opacity-10">
                                            <span className="material-symbols-outlined text-9xl">edit_document</span>
                                        </div>
                                        <div className="relative z-10 flex flex-col gap-4">
                                            <h3 className="text-lg font-bold text-text-main">The Rendering Pipeline</h3>
                                            <div className="flex flex-wrap gap-2">
                                                <span className="px-3 py-1 bg-white border border-[#e9e8ce] rounded-full text-xs font-mono font-bold text-text-muted">Binary Parsing</span>
                                                <span className="hidden sm:inline text-gray-300">→</span>
                                                <span className="px-3 py-1 bg-white border border-[#e9e8ce] rounded-full text-xs font-mono font-bold text-text-muted">Vector Extraction</span>
                                                <span className="hidden sm:inline text-gray-300">→</span>
                                                <span className="px-3 py-1 bg-white border border-[#e9e8ce] rounded-full text-xs font-mono font-bold text-text-muted">Coordinate Mapping</span>
                                                <span className="hidden sm:inline text-gray-300">→</span>
                                                <span className="px-3 py-1 bg-primary text-text-main rounded-full text-xs font-mono font-bold">Interactive Canvas</span>
                                            </div>
                                            <p className="text-sm text-text-muted mt-2 max-w-2xl">
                                                Unlike simple overlays, this system understands the underlying document structure. When a user edits text, we re-render the specific region using the precise font metrics and coordinates extracted from the original PDF structure.
                                            </p>
                                        </div>
                                    </div>
                                </section>

                                {/* Section: Dashboard */}
                                <section id="dashboard" className="flex flex-col gap-6 scroll-mt-28">
                                    <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-text-main border-b border-[#e9e8ce] pb-4">
                                        User Dashboard & Analytics
                                    </h2>
                                    <p className="text-text-muted leading-relaxed">
                                        The user dashboard serves as a central hub for managing the digital workspace, aggregating real-time data on tool usage and quota health.
                                    </p>
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                        <div className="p-4 rounded-xl bg-surface-light border border-[#e9e8ce] flex flex-col items-center justify-center text-center gap-1">
                                            <span className="text-2xl font-black text-text-main">Usage</span>
                                            <span className="text-[10px] font-bold uppercase text-text-muted">Tool Metrics</span>
                                        </div>
                                        <div className="p-4 rounded-xl bg-surface-light border border-[#e9e8ce] flex flex-col items-center justify-center text-center gap-1">
                                            <span className="text-2xl font-black text-text-main">Credits</span>
                                            <span className="text-[10px] font-bold uppercase text-text-muted">Live Balance</span>
                                        </div>
                                        <div className="p-4 rounded-xl bg-surface-light border border-[#e9e8ce] flex flex-col items-center justify-center text-center gap-1">
                                            <span className="text-2xl font-black text-text-main">Activity</span>
                                            <span className="text-[10px] font-bold uppercase text-text-muted">Recent Logs</span>
                                        </div>
                                        <div className="p-4 rounded-xl bg-surface-light border border-[#e9e8ce] flex flex-col items-center justify-center text-center gap-1">
                                            <span className="text-2xl font-black text-text-main">Billing</span>
                                            <span className="text-[10px] font-bold uppercase text-text-muted">History</span>
                                        </div>
                                    </div>
                                </section>

                                {/* Section: Security */}
                                <section id="security" className="flex flex-col gap-6 scroll-mt-28">
                                    <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-text-main border-b border-[#e9e8ce] pb-4">
                                        Enterprise-Grade Security
                                    </h2>
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                        <div className="flex flex-col gap-2">
                                            <div className="flex items-center gap-2 text-text-main font-bold">
                                                <span className="material-symbols-outlined text-primary">lock</span>
                                                AES-256 Encryption
                                            </div>
                                            <p className="text-xs text-text-muted">
                                                Files are encrypted on the client side using the Advanced Encryption Standard (AES) before they ever touch our network.
                                            </p>
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <div className="flex items-center gap-2 text-text-main font-bold">
                                                <span className="material-symbols-outlined text-primary">key</span>
                                                Speakeasy 2FA
                                            </div>
                                            <p className="text-xs text-text-muted">
                                                Implemented Time-based One-Time Password (TOTP) logic using the <code>speakeasy</code> library for robust two-factor authentication.
                                            </p>
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <div className="flex items-center gap-2 text-text-main font-bold">
                                                <span className="material-symbols-outlined text-primary">share</span>
                                                Secure Sharing
                                            </div>
                                            <p className="text-xs text-text-muted">
                                                Granular Access Control allows users to share documents via specific email allow-lists, ensuring only authorized eyes view the data.
                                            </p>
                                        </div>
                                    </div>
                                </section>

                            </article>

                            <NextProject
                                title="HRalva - Next-Gen HRMS"
                                link="/works/hralva"
                                backgroundImage="https://images.unsplash.com/photo-1522071823991-b9671e9d7fbd?q=80&w=3000&auto=format&fit=crop"
                            />
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
