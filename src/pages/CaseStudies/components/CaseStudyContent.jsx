export default function CaseStudyContent() {
    return (
        <article className="flex flex-col gap-16 lg:gap-24 min-w-0">
            {/* Mobile Meta Data */}
            <div className="lg:hidden grid grid-cols-2 gap-4 p-5 rounded-xl bg-surface-light border border-[#e9e8ce]">
                <div className="flex flex-col gap-1">
                    <span className="text-xs font-semibold uppercase text-text-muted">Client</span>
                    <span className="text-sm font-bold text-text-main">Shopify Plus Brand</span>
                </div>
                <div className="flex flex-col gap-1">
                    <span className="text-xs font-semibold uppercase text-text-muted">Role</span>
                    <span className="text-sm font-bold text-text-main">Full Stack Lead</span>
                </div>
                <div className="flex flex-col gap-1 col-span-2">
                    <span className="text-xs font-semibold uppercase text-text-muted">Timeline</span>
                    <span className="text-sm font-bold text-text-main">3 Months</span>
                </div>
            </div>

            {/* Section: The Challenge */}
            <section id="challenge" className="flex flex-col gap-6 scroll-mt-28">
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-text-main border-b border-[#e9e8ce] pb-4">
                    The Challenge
                </h2>
                <div className="prose max-w-none text-text-muted leading-relaxed">
                    <p className="mb-4">
                        The client's legacy codebase was struggling to keep up with their rapid growth. Built on an outdated monolithic architecture, the site experienced significant latency during peak traffic hours, often leading to server timeouts and lost revenue.
                    </p>
                    <p>
                        Specifically, the product filtering system was client-side heavy, causing the browser to freeze when loading categories with over 5,000 items. Our goal was to decouple the frontend from the backend, implement server-side rendering for critical paths, and introduce a more robust caching strategy.
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
                    <div className="p-4 rounded-lg bg-red-50 border border-red-100 flex items-start gap-3">
                        <span className="material-symbols-outlined text-red-500 mt-1">warning</span>
                        <div>
                            <h4 class="font-bold text-red-900 text-sm">Pain Point 1</h4>
                            <p className="text-sm text-red-700">5s+ page load times on mobile devices.</p>
                        </div>
                    </div>
                    <div className="p-4 rounded-lg bg-red-50 border border-red-100 flex items-start gap-3">
                        <span className="material-symbols-outlined text-red-500 mt-1">trending_down</span>
                        <div>
                            <h4 class="font-bold text-red-900 text-sm">Pain Point 2</h4>
                            <p className="text-sm text-red-700">High bounce rate on product listing pages.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section: The Process */}
            <section id="process" className="flex flex-col gap-6 scroll-mt-28">
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-text-main border-b border-[#e9e8ce] pb-4">
                    The Process
                </h2>
                <p className="text-text-muted leading-relaxed">
                    We adopted an incremental migration strategy to avoid downtime. We started by building a headless frontend using Next.js, communicating with the existing backend via GraphQL. This allowed us to deploy the new storefront page-by-page.
                </p>
                <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="flex flex-col gap-3">
                        <div className="h-40 bg-surface-light border border-[#e9e8ce] rounded-lg bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC0dKzc4gFMsjxTjNGjPOw77ehzAzUZIg8cILaN3kVT0w3st-PVO5Kx4qb30JkHCw-acxtGRRUppciY015zptQalaS5e9VeOUpwOgPZ3AFr_UirJPstFJ7t--YUFClqeUmkejmnKpBOueTXNgYOCmYsJH4fyLqRE1cklMoa6AKBdRVdfSCUbieAOU1lgP-WFPhbkbBobaql-6-_2DoR3nFmMpPE5KR7ZGAoXlCFugX1_cU5hwGW0A3V5TAfh94Yvngr6nIXJ4Ryt0cD')" }}></div>
                        <h3 className="font-bold text-lg text-text-main">1. Discovery &amp; Audit</h3>
                        <p className="text-sm text-text-muted">Identified bottlenecks in the SQL queries and unoptimized assets.</p>
                    </div>
                    <div className="flex flex-col gap-3">
                        <div className="h-40 bg-surface-light border border-[#e9e8ce] rounded-lg bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuABswGM3a78arRE6FA24cFd3AiSp99d_T21__HHXMRNsE9KFyZz7G93kteOfaGmdFFbaRNiZPLdnlVx18HIMXiXVIz4Ilpmacipn_S998bL_P8NPCsVIJe7alteFNwSjm0yqIlNyXOg9nGmZjwiPtQL5akgyglL3S3zaiW4t3SMaWE9lP5okx0J6Vzk6G31t2p_4lerM_tpc9_aZbKJgXJyTHfECk8mcpwaQNke-8uk6e8CFY1q2BFR1Ln_d1U9Z9FX_t2rcMk8lo5K')" }}></div>
                        <h3 className="font-bold text-lg text-text-main">2. Headless Build</h3>
                        <p className="text-sm text-text-muted">Developed a component library in React/TypeScript tailored to the brand.</p>
                    </div>
                    <div className="flex flex-col gap-3">
                        <div className="h-40 bg-surface-light border border-[#e9e8ce] rounded-lg bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBZ60dKHE9OeNZVZk_qzB8cVYZ3mbgiiY7XHYitbiH95jlOii7VLs9iva_1lqz11qyNogHtZygEvJeBaGUWDUvgToiCOqVMZjP4gvq3NKfG0IhDaUX4eXx9x_F5Mo-Y8weKdOrCT-AhPO9r5aUg-Jf22BvuHzFptKMZCtQWI1EhnT2DS22No6KZOPcdUxAG6uiHMrSJqMswmOCtWBCZZFIlAIhzRUtrux6JOdY_096Hy2nDwBOd07-D0cNMcjEWJOf2yh-di8rm5WU2')" }}></div>
                        <h3 className="font-bold text-lg text-text-main">3. Optimization</h3>
                        <p className="text-sm text-text-muted">Implemented Redis caching and edge functions for global distribution.</p>
                    </div>
                </div>
            </section>

            {/* Section: Tech Stack */}
            <section id="tech-stack" className="flex flex-col gap-6 scroll-mt-28">
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-text-main border-b border-[#e9e8ce] pb-4">
                    Tech Stack
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="flex flex-col items-center justify-center p-6 rounded-xl bg-surface-light border border-[#e9e8ce] hover:border-primary/50 transition-colors group">
                        <span className="material-symbols-outlined text-4xl mb-2 text-text-muted group-hover:text-primary transition-colors">javascript</span>
                        <span className="font-semibold text-sm text-text-main">Next.js 14</span>
                    </div>
                    <div className="flex flex-col items-center justify-center p-6 rounded-xl bg-surface-light border border-[#e9e8ce] hover:border-primary/50 transition-colors group">
                        <span className="material-symbols-outlined text-4xl mb-2 text-text-muted group-hover:text-primary transition-colors">dataset</span>
                        <span className="font-semibold text-sm text-text-main">GraphQL</span>
                    </div>
                    <div className="flex flex-col items-center justify-center p-6 rounded-xl bg-surface-light border border-[#e9e8ce] hover:border-primary/50 transition-colors group">
                        <span className="material-symbols-outlined text-4xl mb-2 text-text-muted group-hover:text-primary transition-colors">brush</span>
                        <span className="font-semibold text-sm text-text-main">Tailwind CSS</span>
                    </div>
                    <div className="flex flex-col items-center justify-center p-6 rounded-xl bg-surface-light border border-[#e9e8ce] hover:border-primary/50 transition-colors group">
                        <span className="material-symbols-outlined text-4xl mb-2 text-text-muted group-hover:text-primary transition-colors">cloud</span>
                        <span className="font-semibold text-sm text-text-main">Vercel Edge</span>
                    </div>
                </div>
            </section>

            {/* Section: Technical Deep Dive */}
            <section id="deep-dive" className="flex flex-col gap-6 scroll-mt-28">
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-text-main border-b border-[#e9e8ce] pb-4">
                    Technical Deep Dive
                </h2>
                <div className="flex flex-col gap-4">
                    <h3 className="text-xl font-bold text-text-main">Optimizing Product Filtering with Memoization</h3>
                    <p className="text-text-muted">
                        One of the biggest hurdles was the "mega-filter" component. Re-rendering the entire product grid on every checkbox change was killing performance. I implemented `useMemo` specifically for the derived state of filtered products to prevent expensive recalculations.
                    </p>
                </div>

                {/* Code Window */}
                <div className="w-full rounded-xl overflow-hidden bg-[#1e293b] text-slate-300 shadow-2xl border border-slate-700">
                    <div className="flex items-center justify-between px-4 py-3 bg-[#0f172a] border-b border-slate-700">
                        <div className="flex gap-2">
                            <div className="size-3 rounded-full bg-red-500"></div>
                            <div className="size-3 rounded-full bg-yellow-500"></div>
                            <div className="size-3 rounded-full bg-green-500"></div>
                        </div>
                        <span className="text-xs font-mono text-slate-400">ProductGrid.tsx</span>
                    </div>
                    <div className="p-6 overflow-x-auto">
                        <pre className="font-mono text-sm leading-relaxed text-blue-300">
                            <span className="text-purple-400">const</span> filteredProducts = <span className="text-yellow-300">useMemo</span>(() =&gt; {'{\n'}
                            {'  '}<span className="text-purple-400">return</span> products.<span className="text-yellow-300">filter</span>(product =&gt; {'{\n'}
                            {'    '}<span className="text-slate-400">// Check category match</span>{'\n'}
                            {'    '}<span className="text-purple-400">if</span> (activeCategory &amp;&amp; product.category !== activeCategory) {'{\n'}
                            {'      '}<span className="text-purple-400">return</span> <span className="text-red-400">false</span>;{'\n'}
                            {'    }'}{'\n'}
                            {'    '}<span className="text-slate-400">// Check price range (expensive computation avoided on non-price changes)</span>{'\n'}
                            {'    '}<span className="text-purple-400">if</span> (product.price &lt; minPrice || product.price &gt; maxPrice) {'{\n'}
                            {'      '}<span className="text-purple-400">return</span> <span className="text-red-400">false</span>;{'\n'}
                            {'    }'}{'\n'}
                            {'    '}<span className="text-purple-400">return</span> <span className="text-red-400">true</span>;{'\n'}
                            {'  }'});{'\n'}
                            {'}, [products, activeCategory, minPrice, maxPrice]);'}
                        </pre>
                    </div>
                </div>
            </section>

            {/* Section: Outcomes */}
            <section id="outcomes" className="flex flex-col gap-6 scroll-mt-28">
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-text-main border-b border-[#e9e8ce] pb-4">
                    Outcomes
                </h2>
                <p className="text-text-muted">
                    The results were immediate. Upon deployment, we observed a drastic reduction in Time to First Byte (TTFB) and a significant uptick in user engagement metrics.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
                    <div className="p-8 rounded-2xl bg-primary text-text-main flex flex-col items-center text-center shadow-xl shadow-primary/20">
                        <span className="text-5xl font-black mb-2">200%</span>
                        <span className="text-sm font-bold opacity-90">Faster Load Times</span>
                    </div>
                    <div className="p-8 rounded-2xl bg-surface-dark text-white flex flex-col items-center text-center shadow-xl">
                        <span className="text-5xl font-black mb-2">15%</span>
                        <span className="text-sm font-medium opacity-90">Increase in Conversion</span>
                    </div>
                    <div className="p-8 rounded-2xl bg-surface-light border border-[#e9e8ce] flex flex-col items-center text-center shadow-sm">
                        <span className="text-5xl font-black mb-2 text-primary">99.9%</span>
                        <span className="text-sm font-medium text-text-muted">Uptime During Flash Sales</span>
                    </div>
                </div>
            </section>
        </article>
    );
}
