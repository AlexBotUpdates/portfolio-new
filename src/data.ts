import { Github, Linkedin, Globe2, FileCode, Framer, Cpu, FlaskConical, Layout, Wrench, Search, Image, Brain } from 'lucide-react';
import { FaReact, FaBootstrap, FaHtml5, FaFigma, FaPython, FaNodeJs, FaDocker, FaAws, FaGithub } from 'react-icons/fa';
import { SiTailwindcss, SiThreedotjs, SiDjango, SiFirebase, SiRazorpay, SiNetlify, SiAdobeaftereffects, SiAdobephotoshop, SiKalilinux, SiPostman } from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';

export const personalInfo = {
    name: "Aryan Chavan",
    initials: "AC",
    handle: "Aryan.Chavan",
    role: "Developer & Creative Technologist",
    email: "aryanchavan046@gmail.com",
    social: [
        { label: "GitHub", href: "https://github.com/AlexBotUpdates", icon: Github },
        { label: "LinkedIn", href: "https://www.linkedin.com/in/aryan-chavan-2111a033b/", icon: Linkedin },
        { label: "Current site", href: "https://github.com/AlexBotUpdates", icon: Globe2 },
    ],
};

export const navLinks = [
    { label: "Work", href: "#work" },
    { label: "About", href: "#about" },
    { label: "Experiments", href: "#experiments", className: "hidden sm:inline-flex" },
    { label: "Contact", href: "#contact", className: "hidden md:inline-flex" },
];

export const heroData = {
    heading: {
        start: "I build",
        highlight: "interactive",
        end: "experiences for the modern web.",
    },
    description: {
        start: "I’m Aryan, a developer focused on expressive interfaces, thoughtful motion, and fast, accessible products. I work primarily with",
        tech1: "React",
        tech2: "TypeScript",
        end: ", and modern tooling.",
    },
    status: {
        text: "Available for select projects",
        color: "bg-emerald-400",
    },
    tooling: [
        { label: "React", icon: "react", color: "text-sky-200", ring: "ring-sky-500/40" },
        { label: "TypeScript", icon: FileCode, color: "text-indigo-200", ring: "ring-indigo-500/40" },
        { label: "Motion", icon: Framer, color: "text-emerald-200", ring: "ring-emerald-500/40" },
        { label: "Performance", icon: Cpu, color: "text-slate-200", ring: "ring-slate-700/60" },
    ],
};

export const projects = [
    {
        title: "Motion-driven portfolio experience",
        description: "A React-based portfolio with scroll-linked animations, route transitions, and highly tuned micro‑interactions.",
        tags: ["React", "TypeScript", "Motion"],
        link: "https://github.com/AlexBotUpdates",
        status: "Live",
        statusColor: "text-emerald-300 ring-emerald-500/40",
        type: "Interactive Web App",
    },
    {
        title: "Web experiments & micro‑interactions",
        description: "A growing collection of small front-end explorations: scroll stories, shader sketches, and interface experiments.",
        tags: ["Canvas / WebGL", "Framer Motion"],
        link: null, // Coming soon
        status: "In progress",
        statusColor: "text-sky-300 ring-sky-500/40",
        type: "Experimental UI Lab",
    },
];

export const aboutData = {
    description: [
        "I enjoy moving between design and engineering—taking ideas from sketch to prototype to production. My work leans towards clean layouts, meaningful motion, and systems that scale.",
        "On the technical side I focus on front-end architecture, design systems, and the details that make interfaces feel alive.",
    ],
    capabilities: [
        { label: "Interface engineering & systems", color: "bg-emerald-400" },
        { label: "Interaction & motion design", color: "bg-sky-400" },
        { label: "Performance & accessibility", color: "bg-indigo-400" },
    ],
    interests: [
        "Creative tools & editors",
        "Developer experience",
        "Data-driven storytelling",
        "Experimental interfaces",
    ],
    experiments: {
        label: "Small things often",
        icon: FlaskConical,
        description: "I keep a running collection of prototypes exploring scrolling narratives, unconventional navigation, and techniques that don’t always fit into shipped products—but teach me something new.",
    },
};

export const technicalArsenal = {
    frontend: [
        { label: "React.js", icon: FaReact },
        { label: "Tailwind CSS", icon: SiTailwindcss },
        { label: "Three.js", icon: SiThreedotjs },
        { label: "Bootstrap", icon: FaBootstrap },
        { label: "HTML5 & CSS3", icon: FaHtml5 },
        { label: "Wix Studio / Figma", icon: FaFigma },
        { label: "Responsive UI/UX", icon: Layout },
    ],
    backend: [
        { label: "Python", icon: FaPython },
        { label: "Django", icon: SiDjango },
        { label: "Node.js", icon: FaNodeJs },
        { label: "Firebase", icon: SiFirebase },
        { label: "Razorpay", icon: SiRazorpay },
        { label: "API Dev", icon: Wrench },
    ],
    ai_ml: [
        { label: "Stable Diffusion", icon: Brain },
        { label: "ComfyUI", icon: Image },
        { label: "AI Image Gen", icon: Image },
        { label: "Model Fine-Tuning", icon: Brain },
        { label: "Metadata Extraction", icon: Search },
    ],
    cloud: [
        { label: "Docker", icon: FaDocker },
        { label: "AWS", icon: FaAws },
        { label: "Netlify", icon: SiNetlify },
        { label: "GitHub", icon: FaGithub },
    ],
    tools: [
        { label: "VS Code", icon: VscVscode },
        { label: "After Effects", icon: SiAdobeaftereffects },
        { label: "Photoshop", icon: SiAdobephotoshop },
        { label: "Kali Linux", icon: SiKalilinux },
        { label: "Postman", icon: SiPostman },
    ]
};
