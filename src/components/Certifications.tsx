import { Award, CheckCircle } from "lucide-react";

const Certifications = () => {
  const certifications = [
    {
      title: "Full Stack Web Development",
      issuer: "Self-Taught & Project-Based Learning",
      year: "2023-2024",
      skills: ["React", "Node.js", "Firebase", "MySQL"]
    },
    {
      title: "AI & Machine Learning Integration",
      issuer: "Hands-on Project Implementation",
      year: "2024",
      skills: ["Gemini AI", "NLP", "API Integration"]
    },
    {
      title: "Cloud & Database Management",
      issuer: "Professional Experience",
      year: "2023-2024",
      skills: ["Firebase", "MySQL", "Cloud Storage"]
    }
  ];

  return (
    <section id="certifications" className="py-24 bg-background">
      <div className="container">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
          Certifications & <span className="text-primary">Achievements</span>
        </h2>
        
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mt-12">
          {certifications.map((cert, index) => (
            <div 
              key={index}
              className="p-6 bg-gradient-to-br from-card to-card/50 border border-border rounded-xl hover:shadow-3d-hover transition-all duration-500 hover:-translate-y-1 hover:border-primary/50 group"
              style={{ boxShadow: 'var(--shadow-3d)' }}
            >
              <div className="flex items-start gap-3 mb-4">
                <Award className="h-6 w-6 text-primary mt-1 group-hover:scale-110 transition-transform" />
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground text-lg mb-1">{cert.title}</h3>
                  <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                  <p className="text-xs text-primary mt-1">{cert.year}</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mt-4">
                {cert.skills.map((skill, idx) => (
                  <span key={idx} className="px-2 py-1 bg-primary/10 text-primary text-xs rounded">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold mb-6 text-center">Key Achievements</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Successfully deployed 5+ full-stack applications",
              "Integrated AI-powered solutions in healthcare & business",
              "Built scalable payment systems with M-Pesa integration",
              "Developed responsive, user-friendly interfaces for diverse clients"
            ].map((achievement, index) => (
              <div key={index} className="flex items-start gap-3 p-4 bg-secondary/30 rounded-lg">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <p className="text-muted-foreground">{achievement}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
