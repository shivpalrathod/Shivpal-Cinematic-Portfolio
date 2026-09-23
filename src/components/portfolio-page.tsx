import { useEffect, useRef, useState, type ReactNode } from "react";
import { ArrowDown, ArrowRight, CheckCircle2, Code2, Github, Linkedin, Mail, Menu, Phone, Sparkles, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ProjectVisual } from "@/components/project-visual";
import { SkillLogo } from "@/components/skill-logo";
import { achievements, certifications, education, experience, heroPanels, labCards, links, projects, skillGroups, skills, type Project, type SkillCategory, type Skill } from "@/data/portfolio";

const navItems = [
  ["Work", "work"], ["About", "intro"], ["Experience", "experience"], ["Skills", "dna"], ["Contact", "contact"],
] as const;

const external = { target: "_blank", rel: "noopener noreferrer" } as const;

export function PortfolioPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [cursor, setCursor] = useState({ x: -100, y: -100, project: false, active: false });
  const [architectureFocus, setArchitectureFocus] = useState(0);
  const [skillFilter, setSkillFilter] = useState<SkillCategory | "All">("All");
  const [hoveredSkill, setHoveredSkill] = useState<Skill | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const heroMediaRef = useRef<HTMLDivElement>(null);
  const heroCopyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const reveals = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const revealObserver = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) { entry.target.classList.add("is-visible"); revealObserver.unobserve(entry.target); }
    }), { threshold: 0.12 });
    reveals.forEach((element) => revealObserver.observe(element));
    const sections = document.querySelectorAll<HTMLElement>("main section[id]");
    const sectionObserver = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) setActive(entry.target.id);
    }), { rootMargin: "-35% 0px -55%" });
    sections.forEach((section) => sectionObserver.observe(section));
    const onScroll = () => setScrolled(window.scrollY > 60);
    const onMove = (event: MouseEvent) => {
      if (!reduced.matches && heroMediaRef.current && heroCopyRef.current && window.scrollY < window.innerHeight) {
        const x = event.clientX / window.innerWidth - 0.5;
        const y = event.clientY / window.innerHeight - 0.5;
        heroMediaRef.current.style.transform = `scale(1.035) translate3d(${x * 7}px, ${y * 5}px, 0)`;
        heroCopyRef.current.style.transform = `translate3d(${x * -4}px, ${y * -3}px, 0)`;
      }
      const target = event.target as HTMLElement;
      setCursor({ x: event.clientX, y: event.clientY, project: Boolean(target.closest("[data-project]")), active: Boolean(target.closest("a,button")) });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => { revealObserver.disconnect(); sectionObserver.disconnect(); window.removeEventListener("scroll", onScroll); window.removeEventListener("mousemove", onMove); };
  }, []);

  const handleVideoEnded = () => {
    const video = videoRef.current;
    if (!video) return;
    video.currentTime = 0;
    video.play().catch(() => {});
  };

  const scrollTo = (id: string) => { document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }); setMenuOpen(false); };

  return <div className="portfolio-shell">
    <a href="#work" className="skip-link">Skip to projects</a>
    <header className={`site-nav ${scrolled ? "is-compact" : ""}`}>
      <a className="wordmark" href="#home" aria-label="Shivpal Rathod, home"><span>SR</span><strong>Shivpal Rathod</strong></a>
      <nav className="desktop-nav" aria-label="Primary navigation">{navItems.map(([label, id]) => <button key={id} onClick={() => scrollTo(id)} className={active === id ? "active" : ""}>{label}</button>)}<Button variant="nav" size="sm" asChild><a href={links.resumeRequest}>Resume</a></Button></nav>
      <Button variant="nav" size="icon" className="mobile-menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen}>{menuOpen ? <X /> : <Menu />}</Button>
    </header>
    <div className={`mobile-menu ${menuOpen ? "open" : ""}`} aria-hidden={!menuOpen}>{navItems.map(([label, id]) => <button key={id} onClick={() => scrollTo(id)}>{label}<span>0{navItems.findIndex((item) => item[1] === id) + 1}</span></button>)}<a href={links.resumeRequest}>Request resume <ArrowRight /></a></div>

    <main>
      <section id="home" className="hero-section hero">
        <div className="hero-media" ref={heroMediaRef}><video className="hero-video" ref={videoRef} src="/videos/shivpal-hero.mp4" autoPlay muted loop playsInline preload="auto" onEnded={handleVideoEnded} aria-hidden="true" /></div>
        <div className="hero-shade hero-overlay" /><div className="hero-grain" />
        <div className="hero-copy hero-content" ref={heroCopyRef}>
          <div className="hero-status"><span /><p>Available for software engineering opportunities</p></div>
          <div className="hero-title"><h1 style={{ fontSize: "clamp(3.15rem, 7vw, 7.35rem)" }}><span>SHIVPAL</span><span>RATHOD</span></h1><p className="hero-role"><strong>Python Full-Stack Software Engineer</strong><span>AI / LLM Integration</span></p><p className="hero-summary">Building practical full-stack applications and AI-powered products with Python, Django, FastAPI, React, Node.js, and modern LLM APIs.</p></div>
          <div className="hero-bottom" style={{ flexDirection: "column", alignItems: "flex-start", gap: "1.15rem" }}><div><div className="hero-actions"><Button variant="cinematic" size="lg" onClick={() => scrollTo("work")}>View my work <ArrowRight /></Button><Button variant="cinematicOutline" size="lg" asChild><a href={links.resumeRequest}>Download resume <ArrowDown /></a></Button></div></div><div className="hero-socials"><a href={links.github} {...external}><Github />GitHub</a><a href={links.linkedin} {...external}><Linkedin />LinkedIn</a><a href={links.leetcode} {...external}><Code2 />LeetCode</a></div></div>
          <div className="hero-panels">{heroPanels.map((panel) => <div className="glass-panel hero-panel" key={panel.number}><span>{panel.number}</span><p>{panel.label}</p><strong>{panel.value}</strong></div>)}</div>
        </div>
        <button className="scroll-cue" onClick={() => scrollTo("work")}><span>Scroll to explore</span><ArrowDown /></button>
      </section>

      <section id="intro" className="section about-section">
        <SectionHeading number="01" eyebrow="Intro" title={<>Engineering with<br /><em>product intent.</em></>} intro="Computer Science undergraduate building useful systems at the intersection of software engineering and applied AI." />
        <div className="about-grid" data-reveal><div className="about-lead glass-panel"><span className="panel-kicker">Profile / 01</span><p>Computer Science undergraduate, B.Tech, graduating 2027.</p><strong>Python full-stack engineering<br />AI / LLM integration</strong></div><div className="about-copy"><p>Hands-on experience building full-stack applications with Python, Django, FastAPI, Node.js, and React.</p><p>Integrating Google Gemini and Anthropic Claude into AI-powered applications, from placement intelligence to developer tools.</p><div className="about-signals"><span><CheckCircle2 /> Product-minded systems</span><span><Sparkles /> Applied AI workflows</span></div></div></div>
      </section>

      <section id="dna" className="section stack-section">
        <SectionHeading number="02" eyebrow="Engineering stack" title={<>Systems, tools,<br /><em>and interfaces.</em></>} intro="Technologies I use to build full-stack and AI-powered applications." />
        <div className="skill-summary">{(["Languages", "Backend", "AI / LLM", "Databases", "DevOps"] as SkillCategory[]).map((category) => <div className="glass-panel" key={category}><span>{category}</span><strong>{skills.filter((skill) => skill.category === category).length}</strong></div>)}</div>
        <div className="skill-filters" role="group" aria-label="Filter engineering stack">{(["All", "Languages", "Frontend", "Backend", "AI / LLM", "Databases", "Testing", "DevOps", "Auth"] as const).map((category) => <button className={skillFilter === category ? "is-active" : ""} key={category} onClick={() => setSkillFilter(category)}>{category}</button>)}</div>
        <div className="skill-logo-grid">{skills.filter((skill) => skillFilter === "All" || skill.category === skillFilter).map((skill) => <SkillLogo key={skill.name} skill={skill} highlighted={Boolean(hoveredSkill && skill.name === hoveredSkill.name)} onHover={setHoveredSkill} />)}</div>
        <div className="architecture-panel glass-panel" data-reveal><div className="architecture-tabs">{skillGroups.slice(0, 4).map((group, index) => <button className={architectureFocus === index ? "is-active" : ""} key={group.label} onClick={() => setArchitectureFocus(index)}><span>0{index + 1}</span>{group.label}</button>)}</div><div className="architecture-detail"><span className="panel-kicker">Interactive architecture / {String(architectureFocus + 1).padStart(2, "0")}</span><h3>{skillGroups[architectureFocus].label}</h3><div className="skill-tags">{skillGroups[architectureFocus].skills.map((skill) => <span key={skill}>{skill}</span>)}</div><div className="architecture-flow"><span>Input</span><i /><strong>{skillGroups[architectureFocus].label}</strong><i /><span>Product layer</span></div></div></div>
      </section>

      <section id="work" className="section work-section">
        <SectionHeading number="03" eyebrow="Selected work" title={<>Products, not<br /><em>assignments.</em></>} intro="Three resume-backed systems spanning AI, backend engineering, and secure data workflows." />
        <div className="projects-list">{projects.map((project, index) => <article className={`project-row glass-panel ${index % 2 ? "reverse" : ""} ${hoveredSkill?.usedIn.includes(project.shortName) || hoveredSkill?.usedIn.includes(project.name.split(" — ")[0]) ? "skill-linked" : ""}`} key={project.name} data-reveal data-project onClick={() => setSelectedProject(project)} onKeyDown={(event) => { if (event.key === "Enter") setSelectedProject(project); }} tabIndex={0} role="button" aria-label={`View ${project.name} case study`}><div className="project-visual-wrap"><ProjectVisual project={project} /><span className="project-index">Project {project.number}</span></div><div className="project-copy"><p className="mono-label">Case study / {project.number}</p><h3>{project.shortName}</h3><p>{project.description}</p><div className="tech-row">{project.technologies.map((tech) => <span key={tech}>{tech}</span>)}</div><div className="project-open">Open case study <ArrowRight /></div></div></article>)}</div>
      </section>

      <section id="experience" className="section experience-section">
        <SectionHeading number="04" eyebrow="Experience" title={<>Building for<br /><em>real workflows.</em></>} />
        <article className="experience-card glass-panel" data-reveal><div className="experience-meta"><span className="mono-label">{experience.dates}</span><div className="timeline-dot" /></div><div className="experience-content"><p className="mono-label">{experience.company}</p><h3>{experience.role}</h3><h4>{experience.project}</h4><ul>{experience.contributions.map((contribution) => <li key={contribution}>{contribution}</li>)}</ul><div className="tech-row">{experience.technologies.map((tech) => <span key={tech}>{tech}</span>)}</div></div></article>
      </section>

      <section id="lab" className="section lab-section">
        <SectionHeading number="05" eyebrow="Lab" title={<>Engineering<br /><em>experiments.</em></>} intro="A working surface for the patterns, tools, and workflows that recur across my builds." />
        <div className="lab-grid">{labCards.map((card, index) => <article className="glass-panel lab-card" data-reveal key={card.label}><span className="card-index">0{index + 1}</span><h3>{card.label}</h3><p>{card.detail}</p><span className="lab-mark">●</span></article>)}</div>
      </section>

      <section id="education" className="section education-section">
        <SectionHeading number="06" eyebrow="Education" title={<>The foundation<br /><em>underneath.</em></>} />
        <div className="education-grid" data-reveal><div className="glass-panel education-main"><span className="panel-kicker">Academic profile</span><h3>{education.degree}</h3><p>{education.institution}</p><span>{education.dates}</span></div><div className="glass-panel education-score"><span className="panel-kicker">CGPA</span><strong>{education.cgpa}</strong><small>{education.details[0]}</small></div><div className="glass-panel education-courses"><span className="panel-kicker">Key courses</span><div className="skill-tags">{education.details.slice(1).map((course) => <span key={course}>{course}</span>)}</div></div></div>
      </section>

      <section id="certifications" className="section certification-section">
        <SectionHeading number="07" eyebrow="Certifications" title={<>Validated<br /><em>learning.</em></>} />
        <div className="cert-grid">{certifications.map((cert, index) => <article className="glass-panel cert-card" data-reveal key={cert.name}><span className="card-index">0{index + 1}</span><h3>{cert.name}</h3><p>{cert.issuer}</p><time>{cert.date || "Completed"}</time></article>)}</div>
      </section>

      <section id="achievements" className="section achievement-section">
        <SectionHeading number="08" eyebrow="Achievements" title={<>Evidence over<br /><em>adjectives.</em></>} />
        <div className="achievement-grid">{achievements.map((achievement) => <article className="glass-panel achievement-card" data-reveal key={achievement.label}><strong>{achievement.value}</strong><span>{achievement.label}</span><small>{achievement.detail}</small></article>)}</div>
      </section>

      <section id="contact" className="contact-section"><div className="contact-shell glass-panel"><p className="mono-label">09 / Contact</p><h2>Let's build<br /><em>something useful.</em></h2><div className="contact-lower"><div><p>Open to internships and full-time opportunities in Python full-stack engineering and AI software.</p><Button variant="cinematic" size="lg" asChild><a href={links.email}>Contact me <ArrowRight /></a></Button></div><div className="contact-list"><a href={links.email}><Mail />shivpalrathod1122@gmail.com</a><a href={links.phone}><Phone />+91 79956 47094</a><a href={links.linkedin} {...external}><Linkedin />LinkedIn</a><a href={links.github} {...external}>GitHub</a></div></div></div></section>
    </main>

    <footer><div><strong>Shivpal Rathod</strong><span>Python full-stack / AI + LLM integration</span></div><div><a href={links.github} {...external}>GitHub</a><a href={links.linkedin} {...external}>LinkedIn</a><a href={links.leetcode} {...external}>LeetCode</a><a href={links.email}>Email</a></div><p>© 2026 Shivpal Rathod</p></footer>
    <div className={`custom-cursor ${cursor.active ? "cursor-active" : ""} ${cursor.project ? "cursor-project" : ""}`} style={{ left: cursor.x, top: cursor.y }}><span>{cursor.project ? "VIEW →" : ""}</span></div>

    <Dialog open={Boolean(selectedProject)} onOpenChange={(open) => { if (!open) setSelectedProject(null); }}>{selectedProject && <DialogContent className="case-dialog"><div className="case-visual"><ProjectVisual project={selectedProject} /></div><div className="case-content"><DialogHeader><p className="mono-label">Project case study / {selectedProject.number}</p><DialogTitle>{selectedProject.name}</DialogTitle><DialogDescription>{selectedProject.overview}</DialogDescription></DialogHeader><div className="case-grid">{selectedProject.problem && <div><span>Problem</span><p>{selectedProject.problem}</p></div>}{selectedProject.solution && <div><span>Architecture / approach</span><p>{selectedProject.solution}</p></div>}{selectedProject.contribution && <div><span>Implementation</span><p>{selectedProject.contribution}</p></div>}<div><span>AI / key features</span><ul>{selectedProject.features.map((feature) => <li key={feature}>{feature}</li>)}</ul></div>{selectedProject.testing && <div><span>Testing</span><p>{selectedProject.testing}</p></div>}</div><div className="case-repository"><span className="mono-label">Repository</span><div className="tech-row">{selectedProject.technologies.map((tech) => <span key={tech}>{tech}</span>)}</div><Button variant="cinematic" size="lg" asChild><a href={selectedProject.repository} {...external}>Open GitHub <ArrowRight /></a></Button></div></div></DialogContent>}</Dialog>
  </div>;
}

function SectionHeading({ number, eyebrow, title, intro }: { number: string; eyebrow: string; title: ReactNode; intro?: string }) {
  return <header className="section-heading" data-reveal><p className="mono-label">{number} / {eyebrow}</p><div><h2>{title}</h2>{intro && <p>{intro}</p>}</div></header>;
}
