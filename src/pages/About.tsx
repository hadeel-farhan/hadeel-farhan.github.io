import Layout from "@/components/Layout";
import FadeIn from "@/components/FadeIn";

const timeline = [
  { year: "2024 – Present", role: "EdTech Product Manager", org: "Dubai Health MBRU, Dubai", description: "Building VR simulations, AI literacy frameworks, and interactive learning experiences for healthcare education." },
  { year: "2022", role: "Software Engineer Co-op", org: "Kythera Space Solutions, Maryland", description: "Designed API endpoints and built integration tests for SATCOM optimization software." },
  { year: "2022", role: "Software Developer Intern", org: "NASA Marshall Space Flight Center, Alabama", description: "Built an API and interface for NASA's Commercial Smallsat Data Acquisition program." },
  { year: "2022", role: "UI/UX Designer", org: "Generate at Northeastern University, Boston", description: "Designed a platform connecting artists and music to playlist curators." },
  { year: "2019 – 2023", role: "B.S. Computer Science", org: "Northeastern University, Boston", description: "Human-Centered Computing concentration, Interaction Design minor. GPA: 3.6/4.0." },
];

const About = () => {
  return (
    <Layout>
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-6">
          <FadeIn>
            <p className="text-sm font-body uppercase tracking-[0.2em] text-primary mb-6">About</p>
            <h1 className="font-display text-4xl md:text-5xl text-foreground leading-tight mb-8">
              Building at the intersection of technology and human experience.
            </h1>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="space-y-6 text-muted-foreground font-body leading-relaxed">
              <p>
                I'm Hadeel — a product builder, computer scientist, and artist based in Dubai, UAE. My work is driven by a simple belief: 
                technology is most powerful when it's designed around people.
              </p>
              <p>
                With a Computer Science degree from Northeastern University — concentrating in Human-Centered Computing with a minor 
                in Interaction Design — I've spent my career weaving together technical depth with design empathy. From building satellite 
                data interfaces at NASA to creating VR clinical simulations at Dubai Health, I approach every project as an opportunity to 
                understand the humans who will use it.
              </p>
              <p>
                Currently, I work as an EdTech Product Manager at Dubai Health's Mohammed Bin Rashid University of Medicine and Health Sciences, 
                where I develop immersive learning experiences, co-create AI literacy frameworks, and design educational tools that reach 
                thousands of healthcare professionals across the UAE.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div className="mt-16">
              <h2 className="font-display text-2xl text-foreground mb-3">My Approach</h2>
              <div className="space-y-4 text-muted-foreground font-body leading-relaxed">
                <p>
                  I believe great products emerge from genuine curiosity about the people they serve. My process always starts with listening — 
                  through user research, eye-tracking studies, observation, and conversation — before moving to design and code.
                </p>
                <p>
                  Whether it's a VR simulation, an interactive educational game, or an AI literacy course, I aim to create experiences 
                  that feel intuitive, purposeful, and human.
                </p>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="mt-16">
              <h2 className="font-display text-2xl text-foreground mb-3">Beyond the Screen</h2>
              <p className="text-muted-foreground font-body leading-relaxed">
                When I'm not building digital products, I paint. My artwork explores themes of memory, heritage, and place — 
                often drawing from my Jordanian roots. This creative practice isn't separate from my product work; it sharpens 
                how I see, feel, and design for people.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-secondary/30">
        <div className="max-w-3xl mx-auto px-6">
          <FadeIn>
            <h2 className="font-display text-3xl text-foreground mb-12">Experience</h2>
          </FadeIn>
          <div className="space-y-10">
            {timeline.map((item, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <div className="flex gap-6">
                  <div className="w-28 shrink-0 text-sm text-primary font-body font-medium pt-1">{item.year}</div>
                  <div>
                    <h3 className="font-display text-lg text-foreground">{item.role}</h3>
                    <p className="text-sm text-muted-foreground font-body mb-1">{item.org}</p>
                    <p className="text-sm text-muted-foreground font-body leading-relaxed">{item.description}</p>
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

export default About;
