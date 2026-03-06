import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import FadeIn from "@/components/FadeIn";

export const projectsData = [
  {
    slug: "vr-patient-triage",
    title: "VR Patient Triage Simulation",
    subtitle: "Immersive clinical decision-making in safe environments",
    tags: ["VR", "EdTech", "Healthcare", "Product Design"],
    image: "/projects/tabletop-sim.jpg",
    problem: "Healthcare students need hands-on practice in clinical decision-making, but real-world triage scenarios are high-stakes and difficult to replicate safely in a classroom.",
    role: "EdTech Product Manager — led product design, collaborated with simulation experts, and managed iteration cycles.",
    approach: "Designed an immersive VR patient triage simulation using human-centered design principles. Conducted user research with medical students and educators to understand learning gaps. Iterated on interaction design to ensure the experience felt intuitive under simulated pressure.",
    features: ["VR-based patient assessment and triage flow", "Tabletop simulation cards for mixed-reality learning", "Eye-tracking integration for research", "Became a lesson template for Zoe Immersive globally"],
    outcome: "The simulation became a reusable lesson template adopted by Zoe Immersive, a global VR education company, extending its impact beyond Dubai Health.",
    images: ["/projects/tabletop-sim.jpg"],
  },
  {
    slug: "eye-tracking-research",
    title: "Eye Tracking Research & Product Design",
    subtitle: "Using gaze data to inform interface decisions",
    tags: ["Research", "Eye Tracking", "UX", "Healthcare"],
    image: "/projects/eye-tracking.jpg",
    problem: "Understanding how users interact with digital learning interfaces requires objective behavioral data beyond self-reported feedback.",
    role: "Product Designer & Researcher — designed studies, analyzed gaze data, and translated findings into product improvements.",
    approach: "Utilized eye-tracking technologies across web interfaces and simulation-based learning environments. Analyzed user behavior patterns, attention distribution, and decision-making sequences to create data-informed UI improvements.",
    features: ["Eye-tracking study design and execution", "Gaze pattern analysis and heatmap generation", "Data-driven interface redesign", "Integration with VR and web-based learning tools"],
    outcome: "Findings directly informed interface improvements across multiple educational products, resulting in more intuitive navigation and better learning outcomes.",
    images: ["/projects/eye-tracking.jpg"],
  },
  {
    slug: "alif-ai-literacy",
    title: "ALiF — AI Literacy Framework",
    subtitle: "One of the Middle East's first AI literacy initiatives",
    tags: ["AI", "Education", "Framework", "Course Design"],
    image: "/projects/alif.jpg",
    problem: "Healthcare professionals across Dubai Health needed foundational AI knowledge to confidently adopt AI tools in their work, but no structured, accessible framework existed in the region.",
    role: "Co-developer — contributed to framework design, course structure, and content creation.",
    approach: "Co-developed a comprehensive AI Literacy Framework (ALiF) spanning multiple modules — from demystifying AI to exploring its applications in healthcare. Designed the corresponding online course with interactive elements, accessible language, and evidence-based pedagogy.",
    features: ["Multi-module AI literacy course", "Interactive learning elements via LMS", "Accessible across Dubai Health institutions", "Presented at WHX Dubai"],
    outcome: "Deployed across Dubai Health institutions, enhancing workforce readiness in AI adoption. Recognized and presented at WHX Dubai as a pioneering initiative.",
    images: ["/projects/alif.jpg"],
  },
  {
    slug: "interactive-games",
    title: "Interactive Educational Games",
    subtitle: "Gamified learning for healthcare community building",
    tags: ["JavaScript", "Game Design", "EdTech"],
    image: "/projects/screen-game.jpg",
    problem: "Engaging healthcare professionals in values-based learning and community building required approaches beyond traditional e-learning.",
    role: "Designer & Developer — conceptualized, designed, and developed interactive games.",
    approach: "Designed and developed interactive educational games using JavaScript and GDevelop, including a values-based Flex Campus screen game. Focused on engagement mechanics, visual design, and accessibility across multiple deployment sites.",
    features: ["JavaScript and GDevelop-based game development", "Values-based matching and quiz games", "Deployed across 31 Dubai Health sites", "Designed for community engagement and competition"],
    outcome: "Successfully deployed across 31 Dubai Health sites, promoting engagement, competition, and community building among healthcare professionals.",
    images: ["/projects/screen-game.jpg"],
  },
  {
    slug: "nasa-data-explorer",
    title: "NASA Smallsat Data Explorer",
    subtitle: "Search, discover, and access NASA satellite data",
    tags: ["NASA", "API", "Python", "Django"],
    image: "/projects/nasa-interface.jpg",
    problem: "NASA's Commercial Smallsat Data Acquisition program needed a user-friendly way for researchers to search, discover, and order satellite data from commercial vendors.",
    role: "Software Developer Intern — designed and built the API and user interface.",
    approach: "Created a Django-based API and web interface to present and access the STAC event database. Built an Event Search form that used the API to populate options and enable data ordering, prioritizing usability and clear information architecture.",
    features: ["Django REST API for STAC database", "Event search and filtering interface", "Data ordering workflow", "Built with JavaScript, HTML, CSS, Python"],
    outcome: "Delivered a functional tool that enables NASA researchers and the user community to efficiently discover and order commercial smallsat data.",
    images: ["/projects/nasa-interface.jpg"],
  },
  {
    slug: "blue-cafe",
    title: "Blue Café — Autism Awareness",
    subtitle: "Educational website for autism awareness and community",
    tags: ["WordPress", "UI/UX", "Accessibility", "Eye Tracking"],
    image: "/projects/blue-cafe.jpg",
    problem: "An Autism Awareness café at Dubai Health needed a digital presence that was both informative and accessible to diverse audiences.",
    role: "Lead UI/UX & Developer — led design, user research, and WordPress development.",
    approach: "Led UI/UX efforts including sitemaps, user flows, and a scalable sandboxing process. Designed high-fidelity wireframes, translated them into responsive WordPress pages, and conducted eye-tracking studies to validate design decisions.",
    features: ["Accessible, responsive WordPress site", "Eye-tracking-informed UI design", "Developer documentation and testing framework", "Event management and resource sections"],
    outcome: "Launched a fully accessible educational platform that serves as the digital home for Blue Café's autism awareness events and resources.",
    images: ["/projects/blue-cafe.jpg"],
  },
  {
    slug: "polymedx",
    title: "PolyMedX — Clinical Case Platform",
    subtitle: "Digital platform for clinical case discussions",
    tags: ["Product Design", "Healthcare", "LMS"],
    image: "/projects/polymedx.jpg",
    problem: "Healthcare education needed a structured digital platform for clinical case discussions and peer learning.",
    role: "Product Designer — contributed to UX design and feature specification.",
    approach: "Designed the user experience for a clinical case feed platform, enabling structured case presentations, clinical examinations, investigations, and peer commentary. Focused on clear information hierarchy and collaborative features.",
    features: ["Case feed with structured clinical data", "Image and file upload capabilities", "Polling and commenting features", "Integration with institutional learning systems"],
    outcome: "Created a collaborative learning environment that supports evidence-based clinical discussions across Dubai Health.",
    images: ["/projects/polymedx.jpg"],
  },
  {
    slug: "dubai-health-webpages",
    title: "Dubai Health — Department Webpages",
    subtitle: "Launching and managing institutional web presence",
    tags: ["WordPress", "Content Strategy", "UI/UX"],
    image: "/projects/blue-cafe.jpg",
    problem: "Dubai Health's Institute of Learning needed a cohesive digital presence across multiple departments — Healthcare Simulation, Organizational Learning, Health Professions Education, and more.",
    role: "Web Developer & Content Strategist — designed, built, and launched department webpages and managed content strategy.",
    approach: "Led the design and development of multiple institutional webpages using WordPress, ensuring consistent branding, accessible navigation, and clear information architecture across departments. Created interactive learning content including video modules and knowledge checks.",
    features: ["Multi-department webpage launch on WordPress", "Interactive e-learning content with video and quizzes", "Consistent institutional branding and IA", "LMS integration for courses and assessments"],
    outcome: "Successfully launched and maintained webpages across Dubai Health's Institute of Learning, creating a unified digital experience for healthcare professionals and learners.",
    images: ["/projects/blue-cafe.jpg"],
  },
];

const Projects = () => {
  return (
    <Layout>
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn>
            <p className="text-sm font-body uppercase tracking-[0.2em] text-primary mb-6">Projects</p>
            <h1 className="font-display text-4xl md:text-5xl text-foreground mb-4">Product & Technical Work</h1>
            <p className="text-muted-foreground font-body max-w-xl mb-16">
              A selection of projects spanning VR simulations, AI literacy, educational games, and data tools — 
              all grounded in human-centered design.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-8">
            {projectsData.map((project, i) => (
              <FadeIn key={project.slug} delay={i * 0.08}>
                <Link to={`/projects/${project.slug}`} className="group block">
                  <div className="aspect-[16/10] rounded-lg overflow-hidden bg-muted mb-4">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="text-xs font-body text-primary bg-primary/10 px-2 py-1 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="font-display text-xl text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground font-body">{project.subtitle}</p>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Projects;
