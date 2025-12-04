import { Github, ArrowUpRight, Clock } from 'lucide-react';
import { projects } from '../data';
import FadeIn from './FadeIn';

const Projects = () => {
    return (
        <section id="work" className="relative border-t border-slate-800/80 bg-slate-950/95" aria-label="Selected work">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.08),_transparent_55%)]"></div>

            <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
                <FadeIn>
                    <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
                        <div className="space-y-2">
                            <h2 className="text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">Selected work</h2>
                            <p className="max-w-md text-base font-medium text-slate-300">
                                A few projects that highlight my approach to interaction, structure, and performance on the web.
                            </p>
                        </div>
                        <a
                            href="https://github.com/AlexBotUpdates"
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 text-xs font-medium tracking-tight text-slate-300 hover:text-slate-50"
                        >
                            <Github className="h-3.5 w-3.5" />
                            <span>Browse full project archive</span>
                        </a>
                    </div>
                </FadeIn>

                {/* Projects Grid */}
                <div className="grid gap-5 md:grid-cols-2">
                    {projects.map((project, index) => (
                        <FadeIn key={index} delay={index * 0.1} className="h-full">
                            <article
                                className="group flex h-full flex-col justify-between rounded-2xl border border-slate-800/80 bg-slate-950/60 p-4 shadow-sm shadow-black/40 transition hover:border-slate-600/80 hover:bg-slate-900/80"
                            >
                                <div className="space-y-3">
                                    <div className="flex items-center gap-2 text-xs text-slate-400">
                                        <span
                                            className={`inline-flex items-center rounded-full bg-slate-900/90 px-2 py-0.5 font-medium tracking-tight ring-1 ${project.statusColor}`}
                                        >
                                            {project.status}
                                        </span>
                                        <span>{project.type}</span>
                                    </div>
                                    <h3 className="text-lg font-semibold tracking-tight text-slate-50">{project.title}</h3>
                                    <p className="text-sm font-medium text-slate-300">{project.description}</p>
                                </div>
                                <div className="mt-4 flex items-center justify-between gap-3 border-t border-slate-800/80 pt-3 text-[0.7rem] text-slate-400">
                                    <div className="flex flex-wrap items-center gap-1.5">
                                        {project.tags.map((tag) => (
                                            <span key={tag} className="rounded-full bg-slate-900/90 px-2 py-0.5 font-medium tracking-tight">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    {project.link ? (
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="inline-flex items-center gap-1 text-xs font-medium tracking-tight text-slate-300 group-hover:text-slate-50"
                                        >
                                            <span>Visit</span>
                                            <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                                        </a>
                                    ) : (
                                        <button className="inline-flex items-center gap-1 text-xs font-medium tracking-tight text-slate-400 group-hover:text-slate-100">
                                            <span>Coming soon</span>
                                            <Clock className="h-3.5 w-3.5" />
                                        </button>
                                    )}
                                </div>
                            </article>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
