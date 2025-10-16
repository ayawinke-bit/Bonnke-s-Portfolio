import { Code2, Database, Lightbulb, Rocket } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: "Full-Stack Expertise",
      description: "Building complete systems from frontend to backend, with a focus on practical, scalable solutions."
    },
    {
      icon: Database,
      title: "Data-Driven Systems",
      description: "Expert in databases, APIs, and backend architecture that power real business operations."
    },
    {
      icon: Lightbulb,
      title: "Builder's Mindset",
      description: "I see a problem and immediately think: 'How can I build something functional and modern for this?'"
    },
    {
      icon: Rocket,
      title: "Career-Focused",
      description: "Aligning technical growth with real opportunities in AI, full-stack development, and freelancing."
    }
  ];

  return (
    <section id="about" className="py-32 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">About Me</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Beyond just coding — I'm designing structured, useful systems that help businesses thrive
            </p>
          </div>

          {/* Highlights Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(124,58,237,0.15)]"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Main Description */}
          <div className="bg-card border border-border rounded-2xl p-8 md:p-12">
            <p className="text-lg text-foreground/90 leading-relaxed mb-6">
              I'm a detail-oriented developer who thrives on turning complex problems into elegant solutions. 
              My approach combines technical expertise with business thinking — I don't just build features, 
              I build systems that actually work in the real world.
            </p>
            <p className="text-lg text-foreground/90 leading-relaxed">
              Whether it's implementing M-Pesa integrations, setting up domain configurations, or architecting 
              complete management systems for travel agencies, I ask the practical "how-do-I" questions that 
              lead to robust, production-ready solutions. I balance modern tech stacks, thoughtful design, 
              and business value to create work that matters.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
