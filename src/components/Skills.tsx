const Skills = () => {
  const skillCategories = [
    {
      category: "Frontend",
      skills: ["React", "TypeScript", "Tailwind CSS", "Next.js", "Responsive Design", "UI/UX"]
    },
    {
      category: "Backend",
      skills: ["Node.js", "PostgreSQL", "REST APIs", "Authentication", "Database Design", "Supabase"]
    },
    {
      category: "Full-Stack",
      skills: ["System Architecture", "Management Systems", "Real-time Features", "Payment Integration", "Cloud Deployment"]
    },
    {
      category: "Tools & Practices",
      skills: ["Git", "AI Integration", "Documentation", "Project Planning", "Agile Development"]
    }
  ];

  return (
    <section id="skills" className="py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">Skills & Technologies</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A comprehensive toolkit for building modern, scalable applications
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(124,58,237,0.15)]"
              >
                <h3 className="text-2xl font-bold mb-6 text-accent">{category.category}</h3>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-4 py-2 bg-secondary rounded-lg text-sm font-medium hover:bg-primary/20 hover:text-primary transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
