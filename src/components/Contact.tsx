import { useState, type FormEvent } from 'react';
import { ArrowUpRight, Send, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';
import { personalInfo } from '../data';
import FadeIn from './FadeIn';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setStatus('submitting');

        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1500));

        // Mock success
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });

        // Reset status after 3 seconds
        setTimeout(() => setStatus('idle'), 3000);
    };

    return (
        <section id="contact" className="relative border-t border-slate-800/80 bg-slate-950" aria-label="Contact">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(52,211,153,0.12),_transparent_50%)]"></div>

            <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-12 px-4 py-12 sm:px-6 lg:flex-row lg:gap-16 lg:px-8 lg:py-20">
                {/* Left Side: Info */}
                <div className="flex flex-col justify-between gap-8 lg:w-1/2">
                    <div className="space-y-6">
                        <FadeIn>
                            <h2 className="text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl">
                                Let’s build something together
                            </h2>
                        </FadeIn>
                        <FadeIn delay={0.1}>
                            <p className="max-w-md text-lg font-medium text-slate-300">
                                I’m open to freelance work, collaborations, and front-end roles where design and engineering sit close
                                together.
                            </p>
                        </FadeIn>
                    </div>

                    <div className="space-y-4">
                        <FadeIn delay={0.2}>
                            <a
                                href={`mailto:${personalInfo.email}`}
                                className="group flex items-center gap-3 text-sm font-medium text-slate-300 transition hover:text-emerald-400"
                            >
                                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-800 bg-slate-950/50 transition group-hover:border-emerald-500/50 group-hover:bg-emerald-500/10">
                                    <Send className="h-4 w-4" />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-xs uppercase tracking-wider text-slate-500 group-hover:text-emerald-500/80">
                                        Email me
                                    </span>
                                    <span>{personalInfo.email}</span>
                                </div>
                            </a>
                        </FadeIn>

                        <FadeIn delay={0.3}>
                            <div className="flex flex-wrap items-center gap-3 pt-2">
                                {personalInfo.social.map((social) => (
                                    <a
                                        key={social.label}
                                        href={social.href}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-950/80 px-4 py-2 text-xs font-medium text-slate-300 transition hover:border-slate-600 hover:bg-slate-900 hover:text-slate-50"
                                    >
                                        <social.icon className="h-3.5 w-3.5" />
                                        <span>{social.label}</span>
                                        <ArrowUpRight className="h-3 w-3 opacity-50" />
                                    </a>
                                ))}
                            </div>
                        </FadeIn>
                    </div>
                </div>

                {/* Right Side: Form */}
                <div className="lg:w-1/2">
                    <FadeIn delay={0.2} className="rounded-3xl border border-slate-800/80 bg-slate-950/50 p-6 shadow-2xl shadow-black/50 backdrop-blur-sm sm:p-8">
                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-xs font-medium uppercase tracking-wider text-slate-400">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    required
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    className="w-full rounded-xl border border-slate-800 bg-slate-950/50 px-4 py-3 text-sm text-slate-200 placeholder-slate-600 outline-none transition focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50"
                                    placeholder="What should I call you?"
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="email" className="text-xs font-medium uppercase tracking-wider text-slate-400">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    required
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    className="w-full rounded-xl border border-slate-800 bg-slate-950/50 px-4 py-3 text-sm text-slate-200 placeholder-slate-600 outline-none transition focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50"
                                    placeholder="Where can I reach you?"
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-xs font-medium uppercase tracking-wider text-slate-400">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    required
                                    rows={4}
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    className="w-full resize-none rounded-xl border border-slate-800 bg-slate-950/50 px-4 py-3 text-sm text-slate-200 placeholder-slate-600 outline-none transition focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50"
                                    placeholder="Tell me about your project..."
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={status === 'submitting' || status === 'success'}
                                className="group relative flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-500 px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-400 disabled:cursor-not-allowed disabled:opacity-70"
                            >
                                {status === 'submitting' ? (
                                    <>
                                        <Loader2 className="h-4 w-4 animate-spin" />
                                        <span>Sending...</span>
                                    </>
                                ) : status === 'success' ? (
                                    <>
                                        <CheckCircle2 className="h-4 w-4" />
                                        <span>Message Sent!</span>
                                    </>
                                ) : status === 'error' ? (
                                    <>
                                        <AlertCircle className="h-4 w-4" />
                                        <span>Try Again</span>
                                    </>
                                ) : (
                                    <>
                                        <span>Send Message</span>
                                        <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                                    </>
                                )}
                            </button>
                        </form>
                    </FadeIn>
                </div>
            </div>
        </section>
    );
};

export default Contact;
