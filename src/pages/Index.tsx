import { Link } from "react-router-dom";
import FadeIn from "@/components/FadeIn";
import Layout from "@/components/Layout";
import DoodleCanvas from "@/components/DoodleCanvas";
import { ArrowRight, ExternalLink } from "lucide-react";

const featuredProjects = [
  {
    slug: "vr-patient-triage",
    title: "VR Patient Triage Simulation",
    description: "Immersive VR experience teaching clinical decision-making in safe environments, now a lesson template for Zoe Immersive.",
    tags: ["VR", "EdTech", "Healthcare"],
    image: "/projects/tabletop-sim.jpg",
  },
  {
    slug: "alif-ai-literacy",
    title: "ALiF — AI Literacy Framework",
    description: "Co-developed one of the Middle East's first AI Literacy Frameworks and course, deployed across Dubai Health institutions.",
    tags: ["AI", "Education", "Framework"],
    image: "/projects/alif.jpg",
  },
  {
    slug: "nasa-data-explorer",
    title: "NASA Smallsat Data Explorer",
    description: "Built an API and interface for NASA's Commercial Smallsat Data Acquisition program to search, discover, and access satellite data.",
    tags: ["NASA", "API", "Python"],
    image: "/projects/nasa-interface.jpg",
  },
];

const skills = [
  { category: "Languages", items: ["JavaScript", "TypeScript", "Python", "C++", "Java", "C#", "SQL"] },
  { category: "Product & Design", items: ["User Research", "Figma", "UI/UX Design", "Eye Tracking", "Prototyping"] },
  { category: "Frameworks & Tools", items: ["React", "Django", "Docker", "AWS", "Unity", "WordPress"] },
  { category: "Methods", items: ["Agile", "Human-Centered Design", "Accessibility", "Learning Design"] },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero with doodle area */}
      <section className="min-h-[85vh] flex items-center relative">
        <DoodleCanvas className="absolute inset-0 pointer-events-auto" />
        <div className="max-w-6xl mx-auto px-6 py-24 relative z-0 pointer-events-none">
          <FadeIn>
            <p className="text-sm font-body uppercase tracking-[0.2em] text-primary mb-6">
              Product Builder · Dubai, UAE
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1] text-foreground max-w-4xl text-balance">
              I build digital products grounded in human needs.
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed font-body font-light">
              Working at the intersection of technology and human-centered design, I create meaningful digital experiences — 
              from immersive VR simulations to AI literacy frameworks — that put people first.
            </p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <div className="mt-10 flex flex-wrap gap-4 pointer-events-auto">
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-md text-sm font-body font-medium hover:opacity-90 transition-opacity"
              >
                View Projects <ArrowRight size={16} />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 border border-border text-foreground px-6 py-3 rounded-md text-sm font-body font-medium hover:bg-secondary transition-colors"
              >
                About Me
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24 notebook-paper">
        <div className="max-w-6xl mx-auto px-6 ml-auto" style={{ paddingLeft: "calc(60px + 1.5rem)" }}>
          <FadeIn>
            <p className="text-sm font-body uppercase tracking-[0.2em] text-primary mb-3">Selected Work</p>
            <h2 className="font-display text-3xl md:text-4xl text-foreground mb-12">Featured Projects</h2>
          </FadeIn>
          <div className="grid md:grid-cols-3 gap-8">
            {featuredProjects.map((project, i) => (
              <FadeIn key={project.slug} delay={i * 0.1}>
                <Link to={`/projects/${project.slug}`} className="group block">
                  <div className="aspect-[4/3] rounded-lg overflow-hidden bg-muted mb-4">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-xs font-body text-primary bg-primary/10 px-2 py-1 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="font-display text-xl text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground font-body leading-relaxed">
                    {project.description}
                  </p>
                </Link>
              </FadeIn>
            ))}
          </div>
          <FadeIn delay={0.3}>
            <div className="mt-12 text-center">
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 text-primary text-sm font-body font-medium hover:underline"
              >
                View All Projects <ArrowRight size={14} />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Skills */}
      <section className="py-24 notebook-dot-grid">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn>
            <p className="text-sm font-body uppercase tracking-[0.2em] text-primary mb-3">Capabilities</p>
            <h2 className="font-display text-3xl md:text-4xl text-foreground mb-12">Skills & Tools</h2>
          </FadeIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((group, i) => (
              <FadeIn key={group.category} delay={i * 0.1}>
                <h3 className="font-display text-lg text-foreground mb-4">{group.category}</h3>
                <ul className="space-y-2">
                  {group.items.map((item) => (
                    <li key={item} className="text-sm text-muted-foreground font-body">{item}</li>
                  ))}
                </ul>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Artwork Teaser */}
      <section className="py-24 relative">
        <DoodleCanvas className="absolute inset-0" strokeColor="hsl(30, 10%, 12%)" strokeWidth={1.5} />
        <div className="max-w-6xl mx-auto px-6 relative z-0 pointer-events-none">
          <FadeIn>
            <p className="text-sm font-body uppercase tracking-[0.2em] text-primary mb-3">Creative Side</p>
            <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">Art & Expression</h2>
            <p className="text-muted-foreground font-body max-w-xl mb-10">
              Beyond product building, I paint — exploring memory, place, and identity through acrylic, oil, and mixed media on canvas.
            </p>
          </FadeIn>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pointer-events-auto">
            {[
              { src: "/artwork/teitas-house.jpg", alt: "Teita's House" },
              { src: "/artwork/the-other-side.jpg", alt: "The Other Side" },
              { src: "/artwork/naseem.jpg", alt: "Naseem" },
              { src: "/artwork/al-salt-jordan.jpg", alt: "Al-Salt, Jordan" },
            ].map((art, i) => (
              <FadeIn key={art.alt} delay={i * 0.1}>
                <div className="aspect-square rounded-lg overflow-hidden">
                  <img src={art.src} alt={art.alt} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
              </FadeIn>
            ))}
          </div>
          <FadeIn delay={0.4}>
            <div className="mt-10 text-center pointer-events-auto">
              <Link
                to="/artwork"
                className="inline-flex items-center gap-2 text-primary text-sm font-body font-medium hover:underline"
              >
                Explore Gallery <ArrowRight size={14} />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Contact */}
      <section className="py-24 notebook-paper">
        <div className="max-w-6xl mx-auto px-6 text-center" style={{ paddingLeft: "calc(60px + 1.5rem)" }}>
          <FadeIn>
            <p className="text-sm font-body uppercase tracking-[0.2em] text-primary mb-3">Get in Touch</p>
            <h2 className="font-display text-3xl md:text-4xl text-foreground mb-6">Let's Connect</h2>
            <p className="text-muted-foreground font-body max-w-lg mx-auto mb-8">
              Interested in collaborating, exchanging ideas, or just saying hello? I'm always open to thoughtful conversations.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="mailto:hadeelf2001@gmail.com"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-md text-sm font-body font-medium hover:opacity-90 transition-opacity"
              >
                Say Hello
              </a>
              <a
                href="https://www.linkedin.com/in/hadeel-farhan"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-border text-foreground px-6 py-3 rounded-md text-sm font-body font-medium hover:bg-secondary transition-colors"
              >
                LinkedIn <ExternalLink size={14} />
              </a>
            </div>
          </FadeIn>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
