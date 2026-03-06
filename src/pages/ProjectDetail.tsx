import { useParams, Link } from "react-router-dom";
import Layout from "@/components/Layout";
import FadeIn from "@/components/FadeIn";
import { projectsData } from "@/pages/Projects";
import { ArrowLeft } from "lucide-react";

const ProjectDetail = () => {
  const { slug } = useParams();
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    return (
      <Layout>
        <div className="py-24 text-center">
          <h1 className="font-display text-3xl text-foreground">Project not found</h1>
          <Link to="/projects" className="text-primary font-body mt-4 inline-block">← Back to Projects</Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-6">
          <FadeIn>
            <Link to="/projects" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary text-sm font-body mb-8">
              <ArrowLeft size={14} /> All Projects
            </Link>
          </FadeIn>

          <FadeIn delay={0.05}>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag) => (
                <span key={tag} className="text-xs font-body text-primary bg-primary/10 px-2 py-1 rounded">{tag}</span>
              ))}
            </div>
            <h1 className="font-display text-3xl md:text-4xl text-foreground mb-2">{project.title}</h1>
            <p className="text-lg text-muted-foreground font-body">{project.subtitle}</p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="mt-10 aspect-[16/9] rounded-lg overflow-hidden bg-muted">
              <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
            </div>
          </FadeIn>

          <div className="mt-12 space-y-10">
            <FadeIn delay={0.15}>
              <h2 className="font-display text-xl text-foreground mb-3">The Challenge</h2>
              <p className="text-muted-foreground font-body leading-relaxed">{project.problem}</p>
            </FadeIn>

            <FadeIn delay={0.2}>
              <h2 className="font-display text-xl text-foreground mb-3">My Role</h2>
              <p className="text-muted-foreground font-body leading-relaxed">{project.role}</p>
            </FadeIn>

            <FadeIn delay={0.25}>
              <h2 className="font-display text-xl text-foreground mb-3">Approach & Process</h2>
              <p className="text-muted-foreground font-body leading-relaxed">{project.approach}</p>
            </FadeIn>

            <FadeIn delay={0.3}>
              <h2 className="font-display text-xl text-foreground mb-3">Key Features</h2>
              <ul className="space-y-2">
                {project.features.map((feature, i) => (
                  <li key={i} className="text-muted-foreground font-body flex items-start gap-2">
                    <span className="text-primary mt-1.5 shrink-0">·</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </FadeIn>

            <FadeIn delay={0.35}>
              <h2 className="font-display text-xl text-foreground mb-3">Outcome & Impact</h2>
              <p className="text-muted-foreground font-body leading-relaxed">{project.outcome}</p>
            </FadeIn>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ProjectDetail;
