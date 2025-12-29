import { Link } from 'react-router-dom';

export default function CTASection() {
    return (
        <section className="max-w-4xl mx-auto px-4 py-24 w-full text-center">
            <div className="bg-gradient-to-b from-surface-light to-transparent border border-[#e9e8ce] rounded-[3rem] p-12 md:p-20 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px] -z-10 translate-x-1/2 -translate-y-1/2"></div>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-text-main">Ready to collaborate?</h2>
                <p className="text-lg text-text-muted mb-10 max-w-lg mx-auto">Let's build something amazing together. Whether it's a new product, a redesign, or a technical consultation.</p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link to="/contact" className="bg-primary hover:bg-[#e6e205] text-text-main px-8 py-4 rounded-full font-bold text-base transition-all active:scale-95 w-full sm:w-auto shadow-lg shadow-primary/20 flex items-center justify-center">
                        Start a Project
                    </Link>
                    <a href="mailto:hbklogesh8@outlook.com" className="bg-white border border-[#e9e8ce] hover:bg-gray-50 text-text-main px-8 py-4 rounded-full font-bold text-base transition-all active:scale-95 w-full sm:w-auto flex items-center justify-center">
                        hbklogesh8@outlook.com
                    </a>
                </div>
            </div>
        </section>
    );
}
