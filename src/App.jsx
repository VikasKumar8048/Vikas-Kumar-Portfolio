import { useEffect, useMemo, useState } from 'react';
import {
  ArrowDown, ArrowDownRight, ArrowUpRight, Award, BookOpen, Check, Code2,
  Cpu, Database, Download, FileText, GraduationCap, Heart,
  Mail, MapPin, Menu, Moon, Network, Quote, Sparkles, Sun, Terminal,
  Trophy, Users, Workflow, X, BrainCircuit, Layers3, CalendarDays,
  ChartNoAxesCombined,
} from 'lucide-react';

// Brand marks are kept as tiny inline SVGs because lucide-react focuses on
// interface icons and does not export GitHub or LinkedIn brand logos.
function GithubIcon({ size = 18, ...props }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.111.82-.261.82-.577 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function LinkedinIcon({ size = 18, ...props }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.35V9h3.414v1.561h.049c.476-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM7.119 20.452H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

const profile = {
  name: 'Vikas Kumar', headline: 'AI/ML Engineer · AI Researcher',
  email: 'vikaskumariit964954@gmail.com', phone: '+91-96495-48048',
  linkedin: 'https://linkedin.com/in/vikas-kumar-9649ac',
  github: 'https://github.com/VikasKumar8048',
  leetcode: 'https://leetcode.com/u/Vikaskumar90ac/',
};

const smartPromptGithub = 'https://github.com/VikasKumar8048/Smart-Prompt';

const projects = [
  {
    id: 'smartprompt', category: 'Research', number: '01', title: 'SmartPrompt',
    subtitle: 'Adaptive LLM Inference Optimization',
    description: 'A LangGraph-based optimization framework combining semantic caching and prompt compression to make retrieval-augmented generation more efficient.',
    impact: [['99.5%', 'lower TTFT'], ['52.4%', 'fewer RAG tokens']],
    stack: ['Python', 'LangGraph', 'Semantic caching', 'Prompt compression'],
    href: smartPromptGithub,
    tag: 'ICT4SD 2026 · Accepted', accent: 'lime', icon: BrainCircuit,
  },
  {
    id: 'documind', category: 'AI systems', number: '02', title: 'DocuMind',
    subtitle: 'Conversational Company Knowledge Assistant',
    description: 'A multi-provider RAG application for company knowledge. Ingests PDF, DOCX, TXT and Markdown files, then grounds conversational answers in retrieved source material.',
    impact: [['3', 'LLM providers'], ['4+', 'document formats']],
    stack: ['FastAPI', 'ChromaDB', 'Sentence Transformers', 'SQLAlchemy', 'Docker'],
    href: null, tag: 'Retrieval-augmented generation', accent: 'blue', icon: FileText,
  },
  {
    id: 'abt', category: 'Research', number: '03', title: 'Average Binary Tree',
    subtitle: 'A New Tree Transformation Approach',
    description: 'A novel tree transformation algorithm with an O(n) Python implementation framework, developed as a contribution to algorithmic research.',
    impact: [['O(n)', 'framework complexity'], ['2026', 'conference year']],
    stack: ['Python', 'Algorithms', 'Data structures', 'Complexity analysis'],
    href: 'https://github.com/VikasKumar8048/Average-Binary-Tree-ABT',
    tag: 'ICDPNS 2026 · Accepted', accent: 'violet', icon: Network,
  },
  {
    id: 'secondbrain', category: 'AI systems', number: '04', title: 'Second Brain',
    subtitle: 'AI Knowledge Management Platform',
    description: 'A full-stack knowledge management platform with authenticated REST APIs, a Next.js interface and a PostgreSQL data layer, prepared for containerized cloud workflows.',
    impact: [['Full', 'stack application'], ['JWT', 'authentication']],
    stack: ['FastAPI', 'Next.js', 'PostgreSQL', 'Docker', 'AWS'],
    href: 'https://github.com/VikasKumar8048/Second-Brain',
    tag: 'Full-stack application', accent: 'orange', icon: Layers3,
  },
];

const skillGroups = [
  { title: 'Programming', icon: Code2, note: 'Building blocks', items: ['Python', 'SQL', 'Java', 'C++'] },
  { title: 'AI / ML & LLMs', icon: BrainCircuit, note: 'Intelligent systems', items: ['RAG', 'LLM prompting', 'Embeddings', 'Semantic search', 'Sentence Transformers', 'Scikit-learn', 'PyTorch', 'LangChain', 'LangGraph'] },
  { title: 'LLM integration', icon: Workflow, note: 'Model connectivity', items: ['OpenAI API', 'Gemini API', 'Ollama · Local inference'] },
  { title: 'Backend & APIs', icon: Terminal, note: 'Reliable services', items: ['FastAPI', 'SQLAlchemy'] },
  { title: 'Databases', icon: Database, note: 'Data foundations', items: ['PostgreSQL', 'MySQL', 'SQLite', 'ChromaDB'] },
  { title: 'Tools & core CS', icon: Cpu, note: 'Engineering toolkit', items: ['Git', 'GitHub', 'Docker', 'AWS', 'DSA', 'OOP', 'DBMS', 'Operating Systems', 'Computer Networks'] },
];

const navItems = [['about', 'About'], ['work', 'Work'], ['research', 'Research'], ['skills', 'Skills'], ['journey', 'Journey'], ['contact', 'Contact']];

function useReveal() {
  useEffect(() => {
    const nodes = document.querySelectorAll('.reveal');
    if (!('IntersectionObserver' in window)) {
      nodes.forEach((node) => node.classList.add('is-visible'));
      return undefined;
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);
}

function SectionHeading({ eyebrow, title, description, index }) {
  return (
    <div className="section-heading reveal">
      <div className="section-heading-top"><span className="eyebrow"><span className="eyebrow-dot" />{eyebrow}</span><span className="section-index">{index}</span></div>
      <h2>{title}</h2>{description && <p>{description}</p>}
    </div>
  );
}

function SocialLink({ href, label, children }) {
  return <a className="social-link" href={href} target="_blank" rel="noreferrer" aria-label={label}>{children}<span>{label}</span><ArrowUpRight size={14} /></a>;
}

function ProjectCard({ project, featured = false }) {
  const Icon = project.icon;
  return (
    <article className={`project-card reveal ${featured ? 'project-card-featured' : ''} accent-${project.accent}`}>
      <div className="project-card-top"><div className="project-number">{project.number} <span>/ 04</span></div><div className="project-symbol"><Icon size={22} strokeWidth={1.7} /></div></div>
      <div className="project-copy"><span className="project-kicker">{project.category} <span>·</span> {project.tag}</span><h3>{project.title}</h3><p className="project-subtitle">{project.subtitle}</p><p className="project-description">{project.description}</p></div>
      <div className="project-impact">{project.impact.map(([value, label]) => <div key={label} className="impact-item"><strong>{value}</strong><span>{label}</span></div>)}</div>
      <div className="project-bottom"><div className="tag-list">{project.stack.map((tag) => <span key={tag}>{tag}</span>)}</div>
        {project.href ? <a className="project-link" href={project.href} target="_blank" rel="noreferrer" aria-label={`View ${project.title} on GitHub`}><GithubIcon size={17} /><span>Source</span><ArrowUpRight size={14} /></a> : <span className="project-private"><Check size={14} /> Project details</span>}
      </div>
    </article>
  );
}

export default function App() {
  const [theme, setTheme] = useState(() => {
    try { return localStorage.getItem('vk-theme') || 'dark'; } catch { return 'dark'; }
  });
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');
  const [filter, setFilter] = useState('All');
  const [copied, setCopied] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  useReveal();

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try { localStorage.setItem('vk-theme', theme); } catch { /* Storage may be unavailable. */ }
  }, [theme]);

  useEffect(() => {
    const sections = navItems.map(([id]) => document.getElementById(id)).filter(Boolean);
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible) setActiveSection(visible.target.id);
    }, { rootMargin: '-25% 0px -55% 0px', threshold: [0, 0.15, 0.35, 0.6] });
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const update = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(max > 0 ? (window.scrollY / max) * 100 : 0);
    };
    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => { window.removeEventListener('scroll', update); window.removeEventListener('resize', update); };
  }, []);

  const filteredProjects = useMemo(() => filter === 'All' ? projects : projects.filter((project) => project.category === filter), [filter]);
  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch { window.location.href = `mailto:${profile.email}`; }
  };
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <div className="scroll-progress" style={{ width: `${scrollProgress}%` }} />
      <div className="ambient ambient-one" /><div className="ambient ambient-two" />
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Vikas Kumar home" onClick={closeMenu}><span className="brand-mark">VK<span>.</span></span><span className="brand-name">Vikas Kumar<span> / Portfolio</span></span></a>
        <nav className={`main-nav ${menuOpen ? 'nav-open' : ''}`} aria-label="Main navigation">
          {navItems.map(([id, label]) => <a key={id} className={activeSection === id ? 'active' : ''} href={`#${id}`} onClick={closeMenu}>{label}</a>)}
        </nav>
        <div className="header-actions">
          <button className="theme-toggle" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`} title="Toggle theme">{theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}</button>
          <a className="header-contact" href="#contact">Let's talk <ArrowUpRight size={15} /></a>
          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close menu' : 'Open menu'}>{menuOpen ? <X /> : <Menu />}</button>
        </div>
      </header>

      <main id="top">
        <section className="hero section-wrap" id="about">
          <div className="hero-content">
            <div className="availability-pill reveal"><span className="pulse-dot" /> UNDERGRADUATE RESEARCHER <span className="pill-divider">/</span> AIT PUNE</div>
            <p className="hero-pretitle reveal">Hello, I'm</p>
            <h1 className="hero-title reveal">Vikas<br /><span>Kumar<span className="title-period">.</span></span></h1>
            <div className="hero-role reveal"><span className="role-line" />{profile.headline}</div>
            <p className="hero-description reveal">I’m a third-year Computer Engineering undergraduate at Army Institute of Technology, Pune. I build intelligent applications at the intersection of <strong>AI, language models, and backend engineering</strong> — and explore new ideas through research.</p>
            <div className="hero-actions reveal">
              <a href="#work" className="button button-primary">Explore my work <ArrowDownRight size={17} /></a>
              <a href="/Vikas-Kumar-Resume.pdf" className="button button-secondary" target="_blank" rel="noreferrer"><Download size={16} /> View résumé</a>
            </div>
            <div className="hero-socials reveal"><SocialLink href={profile.github} label="GitHub"><GithubIcon size={17} /></SocialLink><SocialLink href={profile.linkedin} label="LinkedIn"><LinkedinIcon size={17} /></SocialLink><SocialLink href={profile.leetcode} label="LeetCode"><Code2 size={17} /></SocialLink></div>
          </div>
          <div className="hero-visual reveal">
            <div className="portrait-orbit orbit-one" /><div className="portrait-orbit orbit-two" />
            <div className="portrait-frame">
              <div className="portrait-topline"><span>PROFILE / 001</span><span>IN · 2026</span></div>
              <img src="/images/vikas-kumar.webp" alt="Portrait of Vikas Kumar in a navy suit and red tie" className="portrait" />
              <div className="portrait-bottomline"><span>VIKAS KUMAR</span><span>AIT PUNE ↗</span></div>
            </div>
            <div className="floating-note note-top"><Sparkles size={15} /><span>Curiosity → Creation</span></div>
            <div className="floating-note note-bottom"><span className="note-dot" /> Building with purpose</div>
            <div className="hero-coordinates">18° 34' N<br />73° 54' E</div>
          </div>
          <a className="scroll-cue" href="#snapshot"><span>SCROLL TO EXPLORE</span><ArrowDown size={14} /></a>
        </section>

        <section className="snapshot-section section-wrap" id="snapshot">
          <div className="snapshot-label"><span className="eyebrow"><span className="eyebrow-dot" /> AT A GLANCE</span><span className="muted-mono">A FEW SIGNALS, NOT THE WHOLE STORY</span></div>
          <div className="snapshot-grid">
            <div className="snapshot-card reveal"><span className="snapshot-icon"><GraduationCap size={18} /></span><strong>9.44<span>/10</span></strong><p>Academic CGPA</p><small>Computer Engineering · AIT</small></div>
            <div className="snapshot-card reveal"><span className="snapshot-icon"><Trophy size={18} /></span><strong>99.60<span>%ile</span></strong><p>Naukri Campus Young Turks</p><small>2025 · 500K+ participants</small></div>
            <div className="snapshot-card reveal"><span className="snapshot-icon"><Code2 size={18} /></span><strong>100<span>+</span></strong><p>LeetCode problems</p><small>Data structures & algorithms</small></div>
            <div className="snapshot-card reveal"><span className="snapshot-icon"><Users size={18} /></span><strong>200<span>+</span></strong><p>Students represented</p><small>Library Head Representative</small></div>
          </div>
        </section>

        <section className="section-wrap content-section" id="work">
          <SectionHeading eyebrow="SELECTED WORK" title={<>Building ideas into <em>systems.</em></>} description="A selection of research and engineering projects — from making LLM applications more efficient to building useful knowledge tools." index="01 — 04" />
          <div className="filter-row reveal" role="group" aria-label="Project display filter">
            <button type="button" className={`filter-button ${filter === 'All' ? 'selected' : ''}`} onClick={() => setFilter('All')} aria-pressed={filter === 'All'}>All<span>04</span></button>
            <span className="filter-hint">ALL PROJECTS</span>
          </div>
          <div className="projects-grid" aria-live="polite">{filteredProjects.map((project, index) => <ProjectCard key={project.id} project={project} featured={index === 0 && filter === 'All'} />)}</div>
          <div className="github-cta reveal"><div><GithubIcon size={20} /><span>More experiments, code and iterations live on GitHub.</span></div><a href={profile.github} target="_blank" rel="noreferrer">Explore GitHub <ArrowUpRight size={15} /></a></div>
        </section>

        <section className="research-section" id="research"><div className="section-wrap content-section">
          <SectionHeading eyebrow="RESEARCH & INNOVATION" title={<>Questions first. <em>Then evidence.</em></>} description="Undergraduate research at the Department of Computer Engineering, Army Institute of Technology, Pune." index="02 — 04" />
          <div className="research-layout">
            <div className="research-intro reveal"><div className="research-date"><CalendarDays size={15} /> FEB 2026 — PRESENT</div><h3>Undergraduate<br /><span>Researcher</span></h3><p>Exploring practical ways to improve intelligent systems and algorithmic problem-solving — with an emphasis on measurable outcomes, clear implementations and reproducible thinking.</p><div className="research-affiliation"><span className="affiliation-symbol"></span><div><strong>Army Institute of Technology</strong><span>Department of Computer Engineering · Pune</span></div></div></div>
            <div className="publication-list">
              <article className="publication-card reveal"><div className="publication-top"><span className="publication-type">CONFERENCE PAPER / 01</span><span className="publication-status"><span /> ACCEPTED</span></div><h3>SmartPrompt: Adaptive LLM Inference Optimization</h3><p>Semantic caching and prompt compression for more efficient RAG workflows.</p><div className="publication-meta"><span><BookOpen size={14} /> ICT4SD 2026</span><span>Springer Nature · Scopus indexed</span></div><div className="publication-footer"><span>Accepted and presented · 2026</span><a href={smartPromptGithub} target="_blank" rel="noreferrer">Project <ArrowUpRight size={14} /></a></div></article>
              <article className="publication-card reveal"><div className="publication-top"><span className="publication-type">CONFERENCE PAPER / 02</span><span className="publication-status"><span /> ACCEPTED</span></div><h3>Average Binary Tree (ABT)</h3><p>A novel tree transformation algorithm supported by an O(n) Python framework.</p><div className="publication-meta"><span><BookOpen size={14} /> ICDPNS 2026</span><span>Springer Nature · Scopus indexed</span></div><div className="publication-footer"><span>Accepted · 2026</span><a href="https://github.com/VikasKumar8048/Average-Binary-Tree-ABT" target="_blank" rel="noreferrer">Project <ArrowUpRight size={14} /></a></div></article>
            </div>
          </div>
          <div className="research-footnote reveal"><Quote size={18} /><p>Good research is not just about having an idea. It is about asking a precise question, testing it honestly, and communicating what the evidence actually says.</p></div>
        </div></section>

        <section className="section-wrap content-section" id="skills">
          <SectionHeading eyebrow="TOOLS & THINKING" title={<>A toolkit for <em>turning complexity into clarity.</em></>} description="The languages, frameworks and foundations I use to build, experiment and learn." index="03 — 04" />
          <div className="skills-topline reveal"><span>TECHNICAL SKILLS</span><span>GROUPED BY HOW I WORK</span></div>
          <div className="skills-grid">{skillGroups.map((group, index) => {
            const Icon = group.icon;
            return <article className="skill-card reveal" key={group.title}><div className="skill-card-head"><span className="skill-icon"><Icon size={18} /></span><span className="skill-count">0{index + 1}</span></div><h3>{group.title}</h3><p>{group.note}</p><div className="skill-tags">{group.items.map((item) => <span key={item}>{item}</span>)}</div></article>;
          })}</div>
          <div className="engineering-note reveal"><div className="engineering-note-icon"><ChartNoAxesCombined size={22} /></div><div><strong>Engineering mindset</strong><p>From data structures and database design to RAG pipelines and API architecture — I enjoy understanding the fundamentals behind the tools I use.</p></div><ArrowUpRight size={18} /></div>
        </section>

        <section className="journey-section" id="journey"><div className="section-wrap content-section">
          <SectionHeading eyebrow="THE JOURNEY SO FAR" title={<>Learn deeply. <em>Build deliberately.</em></>} description="A few milestones that shape the way I approach engineering, research and collaboration." index="04 — 04" />
          <div className="journey-grid">
            <div className="education-column reveal"><div className="column-label"><GraduationCap size={17} /> EDUCATION</div>
              <article className="journey-entry"><div className="journey-marker" /><div className="journey-entry-top"><span>2024 — 2028</span><span className="current-tag">IN PROGRESS</span></div><h3>Army Institute of Technology, Pune</h3><p>B.E. · Computer Engineering</p><strong className="journey-result">9.44 / 10.00 <span>CGPA</span></strong><span className="journey-location"><MapPin size={13} /> Pune, Maharashtra</span></article>
              <article className="journey-entry"><div className="journey-marker" /><div className="journey-entry-top"><span>JUN 2023 — MAY 2024</span></div><h3>Gurukul Sikshan Sansthan Sr. Sec. School</h3><p>Senior Secondary · Physics, Chemistry & Mathematics</p><strong className="journey-result">96.40<span>%</span></strong><span className="journey-location"><MapPin size={13} /> Sikar, Rajasthan</span></article>
            </div>
            <div className="recognition-column reveal"><div className="column-label"><Award size={17} /> RECOGNITION & CONTRIBUTION</div>
              <article className="recognition-card"><div className="recognition-icon"><Trophy size={19} /></div><div><span className="recognition-year">2025</span><h3>Naukri Campus Young Turks</h3><p>99.60 percentile among 500K+ participants.</p></div></article>
              <article className="recognition-card"><div className="recognition-icon"><Users size={19} /></div><div><span className="recognition-year">2025 — PRESENT</span><h3>Library Head Representative</h3><p>Represented 200+ students, coordinating with faculty and student representatives to improve access to academic and research resources.</p><span className="recognition-org">Department of Computer Engineering · AIT Pune</span></div></article>
              <article className="recognition-card"><div className="recognition-icon"><Check size={19} /></div><div><span className="recognition-year">CERTIFICATIONS</span><h3>Continuous learning</h3><p>FastAPI · Machine Learning · Python for Data Science · IoT Foundation</p></div></article>
              <article className="recognition-card"><div className="recognition-icon"><Code2 size={19} /></div><div><span className="recognition-year">PRACTICE</span><h3>100+ LeetCode problems</h3><p>Consistent problem-solving practice across data structures and algorithms.</p></div></article>
            </div>
          </div>
        </div></section>

        <section className="contact-section" id="contact"><div className="section-wrap contact-inner">
          <div className="contact-orbit contact-orbit-one" /><div className="contact-orbit contact-orbit-two" />
          <div className="contact-content reveal"><span className="eyebrow"><span className="eyebrow-dot" /> OPEN TO CONVERSATIONS</span><h2>Have an idea?<br /><em>Let's build</em> something.</h2><p>Interested in AI/ML engineering, research collaborations, thoughtful product work or simply exchanging ideas? I'd be glad to connect.</p><div className="contact-actions"><a className="button button-primary" href={`mailto:${profile.email}`}>Start a conversation <ArrowUpRight size={17} /></a><button className="button button-outline" onClick={copyEmail}>{copied ? <Check size={16} /> : <Mail size={16} />}{copied ? 'Email copied' : 'Copy email'}</button></div></div>
          <div className="contact-details reveal"><div className="contact-detail"><span>EMAIL</span><a href={`mailto:${profile.email}`}>{profile.email} <ArrowUpRight size={14} /></a></div><div className="contact-detail"><span>PHONE</span><a href="tel:+919649548048">{profile.phone} <ArrowUpRight size={14} /></a></div><div className="contact-detail"><span>BASED IN</span><p>Pune, Maharashtra, India</p></div><div className="contact-socials"><a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><LinkedinIcon size={19} /></a><a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><GithubIcon size={19} /></a><a href={profile.leetcode} target="_blank" rel="noreferrer" aria-label="LeetCode"><Code2 size={19} /></a></div></div>
        </div></section>
      </main>
      <footer className="site-footer section-wrap"><a className="footer-brand" href="#top">VK<span>.</span></a><p>Curiosity in mind. Engineering in motion.</p><div className="footer-right"><span>© {new Date().getFullYear()} Vikas Kumar</span><span className="footer-made">Made with love by Kumar Vikas <Heart size={13} fill="currentColor" /></span><a href="#top" aria-label="Back to top"><ArrowUpRight size={16} /></a></div></footer>
    </div>
  );
}

