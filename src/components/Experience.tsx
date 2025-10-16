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
              className="p-6 bg-card border border-border rounded-xl hover:border-primary/50 transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg mt-1">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-1">{exp.role}</h3>
                  <p className="text-muted-foreground mb-1">{exp.company}</p>
                  <p className="text-sm text-muted-foreground mb-4">{exp.location} • {exp.period}</p>
                  <ul className="space-y-2">
                    {exp.responsibilities.map((resp, respIndex) => (
                      <li key={respIndex} className="flex items-start gap-2 text-muted-foreground">
                        <span className="text-primary mt-1.5">•</span>
                        <span>{resp}</span>
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
