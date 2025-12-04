import { aboutData } from '../data';
import FadeIn from './FadeIn';

const About = () => {
    return (
        <section id="about" className="relative border-t border-slate-800/80 bg-slate-950" aria-label="About">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(129,140,248,0.08),_transparent_55%)]"></div>

            <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 py-12 sm:px-6 lg:flex-row lg:gap-16 lg:px-8 lg:py-16">
                <div className="w-full space-y-3 lg:max-w-md">
                    <FadeIn>
                        <h2 className="text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">A bit about me</h2>
                    </FadeIn>
                    {aboutData.description.map((paragraph, index) => (
                        <FadeIn key={index} delay={0.1 + index * 0.1}>
                            <p className="text-base font-medium text-slate-300">
                                {paragraph}
                            </p>
                        </FadeIn>
                    ))}
                </div>

                <div className="w-full space-y-6 lg:flex-1">
                    <FadeIn delay={0.3}>
                        <div className="grid gap-4 rounded-2xl border border-slate-800/80 bg-slate-950/60 p-4 shadow-sm shadow-black/40 sm:grid-cols-2">
                            <div className="space-y-2">
                                <p className="text-xs font-medium tracking-tight text-slate-400">Capabilities</p>
                                <ul className="space-y-1.5 text-sm font-medium text-slate-300">
                                    {aboutData.capabilities.map((cap) => (
                                        <li key={cap.label} className="flex items-center gap-2">
                                            <span className={`h-1 w-3 rounded-full ${cap.color}`}></span>
                                            {cap.label}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="space-y-2">
                                <p className="text-xs font-medium tracking-tight text-slate-400">Interested in</p>
                                <ul className="space-y-1.5 text-sm font-medium text-slate-300">
                                    {aboutData.interests.map((interest) => (
                                        <li key={interest}>{interest}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.4}>
                        <div
                            id="experiments"
                            className="space-y-3 rounded-2xl border border-slate-800/80 bg-slate-950/60 p-4 shadow-sm shadow-black/40"
                        >
                            <div className="flex items-center justify-between gap-2">
                                <p className="text-xs font-medium tracking-tight text-slate-400">Experiments</p>
                                <span className="inline-flex items-center gap-1 rounded-full bg-slate-900/80 px-2 py-0.5 text-[0.7rem] font-medium tracking-tight text-slate-300">
                                    <aboutData.experiments.icon className="h-3 w-3" />
                                    <span>{aboutData.experiments.label}</span>
                                </span>
                            </div>
                            <p className="text-sm font-medium text-slate-300">{aboutData.experiments.description}</p>
                        </div>
                    </FadeIn>
                </div>
            </div>
        </section>
    );
};

export default About;
