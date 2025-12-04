import { personalInfo } from '../data';

const Footer = () => {
    return (
        <footer className="border-t border-slate-800/80 bg-slate-950/95 text-[0.7rem] text-slate-500">
            <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-4 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
                <p className="font-medium tracking-tight">
                    © <span id="year">{new Date().getFullYear()}</span> {personalInfo.name}. Crafted for the web.
                </p>
                <p className="text-slate-500">Built with React, thoughtful motion, and a focus on performance.</p>
            </div>
        </footer>
    );
};

export default Footer;
