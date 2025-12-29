import { Link } from 'react-router-dom';

export default function NextProject({
    title = "FinTech Dashboard Analytics",
    link = "#",
    backgroundImage = "https://lh3.googleusercontent.com/aida-public/AB6AXuAnJ-mDguPTpe2YxNmYr3vqlDphVheluJIbB2qBjVjyxqAxfWm5QmSc3mo7i693f6ZfYRtREQKbvugcjjpMg1Olnff_5vdRDiD3yzhR_iXEgSGBFWg-5_6PHd80zWofDHxdpH-L3-ROpgMF4QYg468It_RComJTO1xuXv_Q0O3mYgFQfJw_MCop-oNbQcFRmi1g6KiZiOFVhY_Xwxy4hs8OHDnfzOAReSh7OQoSKxE6HF4PRtc2d5f35qxZ9Sd_0fY44dLE8S9vRP6d"
}) {
    return (
        <div className="mt-12 pt-12 border-t border-[#e9e8ce]">
            <p className="text-sm font-bold uppercase tracking-widest text-text-muted mb-6">Next Project</p>
            <Link className="group block relative rounded-2xl overflow-hidden aspect-[3/1] bg-surface-light" to={link}>
                <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{ backgroundImage: `url('${backgroundImage}')` }}
                ></div>
                <div className="absolute inset-0 bg-black/60 transition-colors group-hover:bg-black/50"></div>
                <div className="absolute bottom-0 left-0 p-6 md:p-10 flex flex-col gap-2">
                    <h3 className="text-white text-2xl md:text-3xl font-bold">{title}</h3>
                    <div className="flex items-center gap-2 text-primary group-hover:translate-x-2 transition-transform duration-300">
                        <span className="text-sm font-bold">View Case Study</span>
                        <span className="material-symbols-outlined text-sm">arrow_forward</span>
                    </div>
                </div>
            </Link>
        </div>
    );
}
