import { Briefcase } from "lucide-react";

const experiences = [
  {
    role: "Software Developer Intern",
    company: "Department of Agriculture, Irrigation, and Livestock Development",
    location: "Homa Bay County",
    period: "May 2025 – August 2025",
    responsibilities: [
      "Assisted in developing internal web-based systems to improve data collection and analysis",
      "Participated in drafting a Security Policy Framework for protecting government data",
      "Supported digital transformation and data digitization initiatives"
    ]
  },
  {
    role: "Web Developer (Freelance Projects)",
    company: "Self-Employed",
    location: "Remote",
    period: "January 2024 – Present",
    responsibilities: [
      "Designed and built complete, responsive websites and systems for clients using modern stacks",
      "Developed StockMaster, an advanced inventory and warehouse management system",
      "Built an AI-powered Medical Chatbot using BioBERT and Firebase",
      "Developed Travel Agency System (frontend + backend) with M-Pesa and PayPal integration",
      "Created Job Application Tracker and E-learning Portal projects"
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-background">
      <div className="container">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
          Work <span className="text-primary">Experience</span>
        </h2>
        
        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className="relative p-8 bg-gradient-to-br from-card to-card/50 border border-border rounded-xl hover:border-primary/50 transition-all duration-500 hover:shadow-3d-hover hover:-translate-y-1"
              style={{ boxShadow: 'var(--shadow-3d)' }}
            >
              {/* Timeline indicator */}
              <div className="absolute -left-3 top-8 w-6 h-6 bg-primary rounded-full border-4 border-background" />
              
              <div className="flex items-start gap-6">
                <div className="p-4 bg-primary/10 rounded-xl mt-1 border border-primary/20">
                  <Briefcase className="h-7 w-7 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
                    <div>
                      <h3 className="text-2xl font-bold mb-2 text-foreground">{exp.role}</h3>
                      <p className="text-lg text-primary font-medium">{exp.company}</p>
                    </div>
                    <div className="px-4 py-2 bg-primary/10 rounded-lg border border-primary/30">
                      <p className="text-sm font-medium text-primary">{exp.period}</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-6 flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-primary" />
                    {exp.location}
                  </p>
                  <ul className="space-y-3">
                    {exp.responsibilities.map((resp, respIndex) => (
                      <li key={respIndex} className="flex items-start gap-3 text-muted-foreground leading-relaxed">
                        <span className="text-primary mt-1 text-lg">▸</span>
                        <span className="text-base">{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
