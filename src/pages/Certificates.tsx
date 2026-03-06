import Layout from "@/components/Layout";
import FadeIn from "@/components/FadeIn";
import { Award } from "lucide-react";

const certificates = [
  { title: "Best Educational Accessibility Hack", org: "HackHarvard", type: "Award", year: "2022" },
  { title: "B.S. Computer Science — Human-Centered Computing", org: "Northeastern University", type: "Degree", year: "2023" },
  { title: "Minor in Interaction Design", org: "Northeastern University", type: "Degree", year: "2023" },
  { title: "AI Literacy Framework (ALiF) — Co-developer", org: "Dubai Health MBRU", type: "Framework", year: "2024" },
  { title: "WHX Dubai — Presenter", org: "World Health Exhibition Dubai", type: "Presentation", year: "2024" },
  { title: "VR Simulation Design — Zoe Immersive Template", org: "Dubai Health MBRU / Zoe Immersive", type: "Product", year: "2024" },
  { title: "Eye Tracking Research — Web & Simulation", org: "Dubai Health MBRU", type: "Research", year: "2024" },
  { title: "H5P, Genially & LMS Proficiency", org: "Professional Development", type: "Technical", year: "Ongoing" },
];

const Certificates = () => {
  return (
    <Layout>
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6">
          <FadeIn>
            <p className="text-sm font-body uppercase tracking-[0.2em] text-primary mb-6">Professional Development</p>
            <h1 className="font-display text-4xl md:text-5xl text-foreground mb-4">Certificates & Achievements</h1>
            <p className="text-muted-foreground font-body max-w-xl mb-16">
              A collection of academic achievements, certifications, and professional milestones.
            </p>
          </FadeIn>

          <div className="grid sm:grid-cols-2 gap-6">
            {certificates.map((cert, i) => (
              <FadeIn key={i} delay={i * 0.06}>
                <div className="bg-card border border-border rounded-lg p-6 hover:border-primary/30 transition-colors">
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-primary/10 rounded-md text-primary shrink-0">
                      <Award size={18} />
                    </div>
                    <div>
                      <span className="text-xs font-body text-primary bg-primary/10 px-2 py-0.5 rounded mb-2 inline-block">
                        {cert.type}
                      </span>
                      <h3 className="font-display text-base text-foreground mt-1">{cert.title}</h3>
                      <p className="text-sm text-muted-foreground font-body mt-1">{cert.org}</p>
                      <p className="text-xs text-muted-foreground font-body mt-1">{cert.year}</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Certificates;
