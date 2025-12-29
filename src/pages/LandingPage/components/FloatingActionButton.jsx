export default function FloatingActionButton() {
    return (
        <div className="fixed bottom-8 right-8 z-40">
            <button className="bg-text-main text-white w-14 h-14 rounded-full shadow-xl flex items-center justify-center hover:scale-110 transition-transform cursor-pointer group relative">
                <span className="material-symbols-outlined">mail</span>
                <span className="absolute right-full mr-4 bg-white text-text-main px-3 py-1 rounded-lg text-sm font-medium shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                    Send Message
                </span>
            </button>
        </div>
    );
}
