import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import ContactInfo from './components/ContactInfo';
import ContactForm from './components/ContactForm';

export default function Contact() {
    return (
        <div className="bg-background-light font-display text-text-main min-h-screen flex flex-col overflow-x-hidden selection:bg-primary selection:text-text-main">
            <div className="relative min-h-screen flex flex-col">
                {/* Tech Background Pattern */}
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-0" style={{
                    backgroundImage: 'radial-gradient(#1c1c0d 1px, transparent 1px)',
                    backgroundSize: '32px 32px'
                }}></div>

                <Navigation />

                <main className="flex-grow z-10 py-12 px-6 flex justify-center pt-24">
                    <div className="w-full max-w-[1200px] flex flex-col lg:flex-row gap-12 lg:gap-20">
                        <ContactInfo />
                        <ContactForm />
                    </div>
                </main>

                <Footer />
            </div>
        </div>
    );
}
