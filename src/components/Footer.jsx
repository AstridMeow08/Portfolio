export default function Footer() {
    const socialLinks = [
        { icon: 'public', href: '#' },
        { icon: 'alternate_email', href: '#' },
        { icon: 'chat_bubble', href: '#' }
    ];

    return (
        <footer className="bg-white border-t border-[#e9e8ce] pt-12 pb-8">
            <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-text-muted">terminal</span>
                    <span className="font-bold text-text-muted">DevPortfolio</span>
                </div>
                <div className="flex gap-8">
                    {socialLinks.map((link) => (
                        <a key={link.icon} className="text-text-muted hover:text-text-main transition-colors" href={link.href}>
                            <span className="material-symbols-outlined text-[24px]">{link.icon}</span>
                        </a>
                    ))}
                </div>
                <div className="text-sm text-text-muted">
                    © 2025. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
