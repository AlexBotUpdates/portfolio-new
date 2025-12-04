import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import { navLinks, personalInfo } from '../data';

const Navbar = () => {
    const [theme, setTheme] = useState<'light' | 'dark'>('dark');

    useEffect(() => {
        const stored = localStorage.getItem('theme');
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const initial = stored || (prefersDark ? 'dark' : 'light');
        setTheme(initial as 'light' | 'dark');
        applyTheme(initial as 'light' | 'dark');
    }, []);

    const applyTheme = (t: 'light' | 'dark') => {
        const root = document.documentElement;
        if (t === 'dark') {
            root.classList.add('dark');
            document.body.classList.remove('bg-white', 'text-slate-900');
            document.body.classList.add('bg-slate-950', 'text-slate-50');
        } else {
            root.classList.remove('dark');
            document.body.classList.remove('bg-slate-950', 'text-slate-50');
            document.body.classList.add('bg-white', 'text-slate-900');
        }
    };

    const toggleTheme = () => {
        const next = theme === 'dark' ? 'light' : 'dark';
        setTheme(next);
        localStorage.setItem('theme', next);
        applyTheme(next);
    };

    return (
        <header className="relative z-20 mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-4 pt-6 sm:px-6 lg:px-8">
            {/* Logo */}
            <a href="#top" aria-label={`${personalInfo.name} home`} className="group inline-flex items-center gap-2">
                <div className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-800 bg-slate-900/70 shadow-sm shadow-black/40 ring-1 ring-black/50 backdrop-blur">
                    <span className="text-sm font-semibold tracking-tight text-slate-50 group-hover:text-indigo-300">
                        {personalInfo.initials}
                    </span>
                </div>
                <span className="hidden text-sm font-medium tracking-tight text-slate-300 sm:inline-flex">
                    {personalInfo.handle}
                </span>
            </a>

            {/* Nav */}
            <nav
                className="flex items-center gap-1 rounded-full border border-slate-800/80 bg-slate-950/70 px-1.5 py-1 text-xs text-slate-300 shadow-sm shadow-black/40 backdrop-blur"
                aria-label="Primary"
            >
                {navLinks.map((link) => (
                    <a
                        key={link.label}
                        href={link.href}
                        className={`rounded-full px-3 py-1.5 font-medium tracking-tight text-slate-300 hover:bg-slate-800/80 hover:text-slate-50 ${link.className || ''}`}
                    >
                        {link.label}
                    </a>
                ))}

                {/* Theme Toggle */}
                <button
                    id="theme-toggle"
                    type="button"
                    aria-label="Toggle theme"
                    onClick={toggleTheme}
                    className="ml-1 inline-flex h-7 w-7 items-center justify-center rounded-full border border-slate-700 bg-slate-900/80 text-slate-300 shadow-sm shadow-black/40 hover:bg-slate-800"
                >
                    {theme === 'dark' ? <Moon className="h-3.5 w-3.5" /> : <Sun className="h-3.5 w-3.5" />}
                </button>
            </nav>
        </header>
    );
};

export default Navbar;
