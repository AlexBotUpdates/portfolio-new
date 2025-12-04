import { technicalArsenal } from '../data';

const TechnicalArsenal = () => {
    const renderIcon = (icon: any) => {
        if (!icon) return null;
        const Icon = icon;
        return <Icon className="w-5 h-5 text-gray-500 group-hover:text-amber-500 transition-colors" />;
    };

    return (
        <section id="expertise" className="relative border-t border-slate-800/80 bg-slate-950/95 py-24">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.08),_transparent_55%)]"></div>
            <div className="relative max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <div>
                        <h2 className="text-xs font-mono text-amber-500 tracking-widest uppercase mb-4">Expertise</h2>
                        <h3 className="text-4xl font-semibold text-white tracking-tight">Technical Arsenal</h3>
                    </div>
                    <p className="max-w-md text-sm text-gray-500 leading-relaxed">
                        A curated set of technologies I use to build high-performance, scalable, and secure applications.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Frontend */}
                    <div className="space-y-6">
                        <h4 className="text-lg font-medium text-white border-b border-white/10 pb-4">Frontend</h4>
                        <div className="space-y-3">
                            {technicalArsenal.frontend.map((item, index) => (
                                <div key={index} className="glass-card p-4 rounded hover:bg-white/5 transition-colors group flex items-center gap-4">
                                    {renderIcon(item.icon)}
                                    <span className="text-gray-300 font-medium">{item.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Backend */}
                    <div className="space-y-6">
                        <h4 className="text-lg font-medium text-white border-b border-white/10 pb-4">Backend</h4>
                        <div className="space-y-3">
                            {technicalArsenal.backend.map((item, index) => (
                                <div key={index} className="glass-card p-4 rounded hover:bg-white/5 transition-colors group flex items-center gap-4">
                                    {renderIcon(item.icon)}
                                    <span className="text-gray-300 font-medium">{item.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Cloud & DevOps */}
                    <div className="space-y-6">
                        <h4 className="text-lg font-medium text-white border-b border-white/10 pb-4">Cloud & DevOps</h4>
                        <div className="space-y-3">
                            {technicalArsenal.cloud.map((item, index) => (
                                <div key={index} className="glass-card p-4 rounded hover:bg-white/5 transition-colors group flex items-center gap-4">
                                    {renderIcon(item.icon)}
                                    <span className="text-gray-300 font-medium">{item.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* AI & ML - Added as a 4th column or separate row? The design had 3 columns. 
                        The user provided 5 categories: Frontend, Backend, AI & ML, Cloud & DevOps, Tools & Software.
                        The HTML example had 3 columns.
                        I should probably adapt the grid to fit all of them.
                        Maybe a 3-column grid where they flow?
                        Or I can add more columns or rows.
                        Let's try to fit them in the grid.
                     */}

                    {/* AI & ML */}
                    <div className="space-y-6">
                        <h4 className="text-lg font-medium text-white border-b border-white/10 pb-4">AI & ML</h4>
                        <div className="space-y-3">
                            {technicalArsenal.ai_ml.map((item, index) => (
                                <div key={index} className="glass-card p-4 rounded hover:bg-white/5 transition-colors group flex items-center gap-4">
                                    {renderIcon(item.icon)}
                                    <span className="text-gray-300 font-medium">{item.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Tools & Software */}
                    <div className="space-y-6">
                        <h4 className="text-lg font-medium text-white border-b border-white/10 pb-4">Tools & Software</h4>
                        <div className="space-y-3">
                            {technicalArsenal.tools.map((item, index) => (
                                <div key={index} className="glass-card p-4 rounded hover:bg-white/5 transition-colors group flex items-center gap-4">
                                    {renderIcon(item.icon)}
                                    <span className="text-gray-300 font-medium">{item.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default TechnicalArsenal;
