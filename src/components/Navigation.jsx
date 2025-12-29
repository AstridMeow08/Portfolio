import { Link } from 'react-router-dom';

export default function Navigation() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center py-6 px-4">
            <div className="bg-surface-light/80 backdrop-blur-md border border-[#e9e8ce] rounded-full pl-6 pr-2 py-2 flex items-center justify-between gap-8 shadow-sm max-w-2xl w-full">
                <Link to="/" className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-text-main">terminal</span>
                    <span className="font-bold tracking-tight text-lg text-text-main">DevPort.</span>
                </Link>
                <div className="hidden sm:flex items-center gap-6">
                    <Link className="text-sm font-medium text-text-main hover:text-primary transition-colors" to="/">Home</Link>
                    <Link className="text-sm font-medium text-text-main hover:text-primary transition-colors" to="/about">About</Link>
                    <Link className="text-sm font-medium text-text-main hover:text-primary transition-colors" to="/skills">Services</Link>
                    <Link className="text-sm font-medium text-text-main hover:text-primary transition-colors" to="/works">Works</Link>
                    {/* <a className="text-sm font-medium text-text-main hover:text-primary transition-colors" href="#">Process</a> */}
                </div>
                <div className="flex items-center gap-3">
                    <Link className="hidden sm:block text-sm font-medium text-text-main hover:text-primary transition-colors mr-2" to="/contact">Contact</Link>
                    <button className="bg-primary hover:bg-[#e6e205] text-text-main text-sm font-bold px-5 py-2.5 rounded-full transition-all active:scale-95 flex items-center gap-2">
                        <span>Resume</span>
                        <span className="material-symbols-outlined text-[18px]">download</span>
                    </button>
                </div>
            </div>
        </nav>
    );
}
