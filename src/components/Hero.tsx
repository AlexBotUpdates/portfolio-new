import { ArrowRight, Send, Circle, Square, Code2, Activity } from 'lucide-react';
import { heroData, personalInfo, navLinks } from '../data';
import FadeIn from './FadeIn';

const Hero = () => {
    return (
        <main
            id="top"
            className="relative z-10 mx-auto flex w-full max-w-6xl flex-1 flex-col gap-16 px-4 pb-16 pt-14 sm:px-6 sm:pt-20 lg:flex-row lg:items-center lg:gap-20 lg:px-8 lg:pb-20"
        >
            {/* Left / Intro */}
            <section className="w-full space-y-10 lg:max-w-xl" aria-labelledby="hero-heading">
                <div className="space-y-6">
                    <FadeIn delay={0.1}>
                        <p className="text-xs font-medium uppercase tracking-[0.22em] text-slate-400">
                            {personalInfo.role}
                        </p>
                    </FadeIn>

                    <FadeIn delay={0.2}>
                        <h1
                            id="hero-heading"
                            className="text-4xl font-semibold tracking-tight text-slate-50 sm:text-5xl lg:text-6xl"
                        >
                            {heroData.heading.start} <span className="text-indigo-300">{heroData.heading.highlight}</span> {heroData.heading.end}
                        </h1>
                    </FadeIn>

                    <FadeIn delay={0.3}>
                        <p className="max-w-xl text-base font-medium text-slate-300">
                            {heroData.description.start} <span className="text-sky-300">{heroData.description.tech1}</span>,{' '}
                            <span className="text-emerald-300">{heroData.description.tech2}</span>{heroData.description.end}
                        </p>
                    </FadeIn>
                </div>

                {/* CTA Row */}
                <FadeIn delay={0.4}>
                    <div className="flex flex-wrap items-center gap-3">
                        <a
                            href={navLinks.find(l => l.label === 'Work')?.href}
                            className="inline-flex items-center gap-2 rounded-full bg-slate-50 px-4 py-2.5 text-xs font-medium tracking-tight text-slate-950 shadow-sm shadow-slate-900/60 ring-1 ring-slate-200 hover:bg-slate-100"
                        >
                            <span>View Selected Work</span>
                            <ArrowRight className="h-3.5 w-3.5" />
                        </a>

                        <a
                            href={`mailto:${personalInfo.email}`}
                            className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-950/40 px-3.5 py-2 text-xs font-medium tracking-tight text-slate-200 hover:border-slate-500 hover:bg-slate-900/70"
                        >
                            <Send className="h-3.5 w-3.5" />
                            <span>Open to collaborations</span>
                        </a>
                    </div>
                </FadeIn>

                {/* Meta */}
                <FadeIn delay={0.5}>
                    <div className="grid gap-4 rounded-2xl border border-slate-800/80 bg-slate-950/50 p-4 text-xs text-slate-300 shadow-sm shadow-black/40 backdrop-blur sm:grid-cols-3">
                        <div className="space-y-1">
                            <p className="font-medium tracking-tight text-slate-400">Currently</p>
                            <p className="font-semibold tracking-tight text-slate-100">Building React experiences</p>
                            <p className="text-[0.7rem] text-slate-400">Freelance & personal projects</p>
                        </div>
                        <div className="space-y-1">
                            <p className="font-medium tracking-tight text-slate-400">Focus</p>
                            <p className="font-semibold tracking-tight text-slate-100">Frontend, UX, Motion</p>
                            <p className="text-[0.7rem] text-slate-400">Performance & accessibility first</p>
                        </div>
                        <div className="space-y-1">
                            <p className="font-medium tracking-tight text-slate-400">Stack</p>
                            <p className="font-semibold tracking-tight text-slate-100">React, TS, Node, WebGL</p>
                            <p className="text-[0.7rem] text-slate-400">Open to exploring new tools</p>
                        </div>
                    </div>
                </FadeIn>
            </section>

            {/* Right / Feature Panel */}
            <section aria-label="Featured visual" className="w-full lg:flex lg:flex-1 lg:justify-end">
                <FadeIn delay={0.6} className="w-full">
                    <div className="relative mx-auto mt-2 w-full max-w-xl rounded-3xl border border-slate-800/80 bg-slate-950/80 p-4 shadow-[0_24px_120px_rgba(0,0,0,0.85)] backdrop-blur-xl sm:p-5 lg:mt-0">
                        {/* Status */}
                        <div className="mb-3 flex items-center justify-between gap-3">
                            <div className="flex items-center gap-2 text-xs font-medium text-slate-300">
                                <span className={`inline-flex h-1.5 w-1.5 rounded-full ${heroData.status.color} ring-4 ring-emerald-400/20`}></span>
                                <span className="tracking-tight">{heroData.status.text}</span>
                            </div>
                            <div className="flex items-center gap-1 rounded-full border border-slate-800 bg-slate-950/80 px-2 py-1 text-[0.7rem] text-slate-400">
                                <span className="inline-flex h-1 w-1 rounded-full bg-indigo-400"></span>
                                <span>Last updated {new Date().getFullYear()}</span>
                            </div>
                        </div>

                        {/* "Window" */}
                        <div className="relative overflow-hidden rounded-2xl border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-950">
                            {/* Window Top */}
                            <div className="flex items-center justify-between border-b border-slate-800/90 bg-slate-950/80 px-3 py-2">
                                <div className="flex items-center gap-1.5">
                                    <span className="inline-flex h-2.5 w-2.5 rounded-full bg-rose-500/90"></span>
                                    <span className="inline-flex h-2.5 w-2.5 rounded-full bg-amber-400/90"></span>
                                    <span className="inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400/90"></span>
                                </div>
                                <p className="text-[0.7rem] font-medium tracking-tight text-slate-400">{personalInfo.handle} / portfolio.tsx</p>
                                <div className="flex items-center gap-1 text-[0.7rem] text-slate-500">
                                    <Circle className="h-2.5 w-2.5" />
                                    <Square className="h-2.5 w-2.5" />
                                </div>
                            </div>

                            {/* Code & preview split */}
                            <div className="grid gap-0 border-t border-slate-900/60 sm:grid-cols-5">
                                {/* Code block */}
                                <div className="relative col-span-3 border-r border-slate-900/60 bg-slate-950/90 p-3 sm:p-4">
                                    <div className="mb-2 flex items-center justify-between text-[0.7rem] text-slate-400">
                                        <div className="flex items-center gap-1.5">
                                            <Code2 className="h-3.5 w-3.5" />
                                            <span className="font-medium tracking-tight">React · TypeScript</span>
                                        </div>
                                        <span className="rounded-full bg-slate-900/90 px-2 py-0.5 font-medium">src/portfolio.tsx</span>
                                    </div>

                                    <pre className="overflow-x-auto rounded-xl bg-gradient-to-br from-slate-950/80 via-slate-950/95 to-slate-950 p-3 text-[0.68rem] leading-relaxed text-slate-300 ring-1 ring-slate-900/80">
                                        <code>
                                            {`// typed by ${personalInfo.name.split(' ')[0]}

const Hero = () => {
  return (
    <section className="min-h-[60vh] flex flex-col justify-center">
      <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight">
        ${heroData.heading.start} ${heroData.heading.highlight} ${heroData.heading.end}
      </h1>
      <p className="mt-3 text-base text-slate-300">
        Focused on ${heroData.description.tech1}, ${heroData.description.tech2}, motion and performance.
      </p>
    </section>
  )
}`}
                                        </code>
                                    </pre>
                                </div>

                                {/* Preview / stack */}
                                <div className="col-span-2 flex flex-col justify-between gap-3 bg-slate-950/70 p-3 sm:p-4">
                                    <div className="space-y-2">
                                        <p className="text-[0.7rem] font-medium tracking-tight text-slate-400">Tooling</p>
                                        <div className="flex flex-wrap gap-1.5">
                                            {heroData.tooling.map((tool) => (
                                                <span
                                                    key={tool.label}
                                                    className={`inline-flex items-center rounded-full bg-slate-900/90 px-2.5 py-1 text-[0.7rem] font-medium tracking-tight ${tool.color} ring-1 ${tool.ring}`}
                                                >
                                                    {tool.icon === 'react' ? (
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="-11.5 -10.23174 23 20.46348"
                                                            className="mr-1.5 h-3.5 w-3.5"
                                                            fill="none"
                                                        >
                                                            <circle cx="0" cy="0" r="2.05" fill="currentColor" />
                                                            <g stroke="currentColor" strokeWidth="1" fill="none">
                                                                <ellipse rx="11" ry="4.2" />
                                                                <ellipse rx="11" ry="4.2" transform="rotate(60)" />
                                                                <ellipse rx="11" ry="4.2" transform="rotate(120)" />
                                                            </g>
                                                        </svg>
                                                    ) : (
                                                        <tool.icon className="mr-1.5 h-3.5 w-3.5" />
                                                    )}
                                                    {tool.label}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="mt-1 rounded-xl border border-slate-800 bg-gradient-to-br from-slate-900/90 via-slate-950 to-slate-950 p-3">
                                        <p className="text-[0.7rem] font-medium tracking-tight text-slate-400">Craft</p>
                                        <p className="mt-1 text-xs font-medium text-slate-200">
                                            Motion as a design tool, not a distraction.
                                        </p>
                                        <p className="mt-1 text-[0.7rem] text-slate-400">
                                            I obsess over the details: easing curves, micro-interactions, and how performance feels—not just how
                                            it measures.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Small footer */}
                        <div className="mt-3 flex items-center justify-between text-[0.7rem] text-slate-500">
                            <div className="flex items-center gap-1.5">
                                <Activity className="h-3 w-3" />
                                <span>Built for the web. Shipped with care.</span>
                            </div>
                            <div className="hidden items-center gap-1 sm:flex">
                                <span className="h-1 w-6 rounded-full bg-gradient-to-r from-emerald-400 to-sky-400"></span>
                                <span>Optimized & accessible</span>
                            </div>
                        </div>
                    </div>
                </FadeIn>
            </section>
        </main>
    );
};

export default Hero;
