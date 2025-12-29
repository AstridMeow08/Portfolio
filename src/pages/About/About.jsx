import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import HeroSection from './components/HeroSection';
import TechStackSection from './components/TechStackSection';
import ExperienceSection from './components/ExperienceSection';

export default function About() {
    return (
        <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-white min-h-screen flex flex-col overflow-x-hidden">
            <Navigation />

            <main className="flex-1 w-full max-w-[1200px] mx-auto px-4 md:px-10 py-10 flex flex-col gap-16 md:gap-24">
                <HeroSection />
                <TechStackSection />
                <ExperienceSection />
            </main>

            <Footer />
        </div>
    );
}
