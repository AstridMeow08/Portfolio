import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import ServicesHero from './components/ServicesHero';
import TechnicalProficiency from './components/TechnicalProficiency';
import CTASection from './components/CTASection';

export default function Skills() {
    return (
        <div className="bg-background-light font-display text-text-main min-h-screen flex flex-col overflow-x-hidden selection:bg-primary selection:text-text-main">
            <div className="relative flex min-h-screen w-full flex-col">
                <Navigation />

                <main className="flex-1 pt-24">
                    <ServicesHero />
                    <TechnicalProficiency />
                    <CTASection />
                </main>

                <Footer />
            </div>
        </div>
    );
}
