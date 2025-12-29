import Navigation from '../../../components/Navigation';
import Footer from '../../../components/Footer';
import CaseStudyHero from '../components/CaseStudyHero';
import CaseStudySidebar from '../components/CaseStudySidebar';
import CaseStudyContent from '../components/CaseStudyContent'; // Keeping the original content component for this one as it matches perfectly
import NextProject from '../components/NextProject';
 
export default function Ecommerce() {
    return (
        <div className="bg-background-light font-display text-text-main min-h-screen flex flex-col overflow-x-hidden selection:bg-primary selection:text-text-main">
            <Navigation />

            <main className="w-full flex flex-col pt-16">
                <CaseStudyHero
                    title="E-Commerce Replatforming"
                    subtitle="A complete overhaul of a legacy retail platform for a Shopify Plus brand, resulting in 200% faster load times, improved scalability during flash sales, and a 15% increase in conversion rate."
                    backgroundImage="https://lh3.googleusercontent.com/aida-public/AB6AXuCmYwnH5LVE4EZocpKsD8ytI0EbzJVS0P0xAFiuBME48Ne6aFjC7SxaSqlGPXtzimVx22mpmVCwPTwktmctlonzrghYvlh4yE0ydvHnhBABcCdEJLxUAThE0t0q5lmd-N_0CZxzt9Kw_yIvc1fWym7qF-lkfTxW6pj8RdmdAycSLSQOlYCEqDYhG6jYSmpDpmT39SEILqZPIWhsrFPEz9WeFvCqQM29hKoq_z1PevuuxQAax6_WWHB4pS_v8PGmiwm5P8eqpGnQObkO"
                    liveLink="#"
                    badge="Case Study"
                />

                <div className="w-full bg-surface-light border-t border-[#e9e8ce]">
                    <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
                        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-12 lg:gap-24">
                            <CaseStudySidebar />
                            <div>
                                <CaseStudyContent />
                                <NextProject
                                    title="Paplixo - Business Docs"
                                    link="/case-studies/paplixo"
                                    backgroundImage="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=3000&auto=format&fit=crop"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
