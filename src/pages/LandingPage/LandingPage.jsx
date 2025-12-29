import Navigation from '../../components/Navigation';
import HeroSection from './components/HeroSection';
import TechStackTicker from './components/TechStackTicker';
import ExpertiseSection from './components/ExpertiseSection';
import ProjectsSection from './components/ProjectsSection';
import CTASection from './components/CTASection';
import Footer from '../../components/Footer';
import FloatingActionButton from './components/FloatingActionButton';

export default function LandingPage() {
    return (
        <div className="bg-background-light text-text-main font-display antialiased overflow-x-hidden selection:bg-primary selection:text-text-main">
            <Navigation />

            <main className="flex flex-col min-h-screen pt-24 pb-12">
                <HeroSection />
                <TechStackTicker />
                <ExpertiseSection />
                <ProjectsSection />
                <CTASection />
            </main>

            <Footer />
            <FloatingActionButton />
        </div>
    );
}
