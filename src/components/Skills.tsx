import { Code2, Database, Wrench, Brain } from "lucide-react";

const skillCategories = [
  {
    icon: Code2,
    title: "Frontend",
    skills: ["HTML5", "CSS3", "Tailwind CSS", "JavaScript (ES6+)", "React.js"]
  },
  {
    icon: Database,
    title: "Backend & Databases",
    skills: ["Node.js", "Express.js", "Firebase", "Supabase", "MySQL"]
  },
  {
    icon: Brain,
    title: "AI & Data",
    skills: ["BioBERT", "Machine Learning basics"]
  },
  {
    icon: Wrench,
    title: "Tools & Other Skills",
    skills: ["Git", "GitHub", "Figma", "VS Code", "Postman", "API Integration (M-Pesa, PayPal)", "SEO Optimization", "UI/UX Design"]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-background">
      <div className="container">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
          Technical <span className="text-primary">Skills</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div 
                key={index}
                className="p-6 bg-card border border-border rounded-xl hover:border-primary/50 transition-all group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex}
                      className="px-3 py-1 bg-secondary text-sm rounded-full border border-border hover:border-primary/50 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
