import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "Travel Agency Management System",
      description: "A comprehensive full-stack solution featuring separate customer-facing website and worker management system. Includes booking management, payment integration, and real-time updates.",
      tags: ["React", "TypeScript", "PostgreSQL", "Authentication", "Management Dashboard"],
      image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&q=80",
      link: "#",
      github: "#"
    },
    {
      title: "M-Pesa Integration Platform",
      description: "Secure payment gateway integration with M-Pesa API, featuring passkey authentication, transaction tracking, and automated reconciliation for East African businesses.",
      tags: ["Node.js", "REST API", "Payment Gateway", "Security", "Real-time"],
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80",
      link: "#",
      github: "#"
    },
    {
      title: "Business Management Suite",
      description: "Custom-built ERP system for small-to-medium businesses. Features include inventory management, customer relations, reporting dashboards, and multi-user access control.",
      tags: ["Full-Stack", "Database Design", "Dashboard", "Analytics", "Multi-tenant"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      link: "#",
      github: "#"
    }
  ];

  return (
    <section id="projects" className="py-32 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">Featured Projects</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real-world systems that solve actual business problems
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(124,58,237,0.15)]"
              >
                <div className="md:flex">
                  {/* Image */}
                  <div className="md:w-2/5 relative overflow-hidden bg-secondary">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 md:h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="md:w-3/5 p-8">
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-3 py-1 bg-secondary text-sm rounded-lg"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex gap-4">
                      <Button
                        variant="outline"
                        className="border-border hover:border-primary hover:bg-primary/10 group/btn"
                        asChild
                      >
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                          View Project
                          <ExternalLink className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                        </a>
                      </Button>
                      <Button
                        variant="outline"
                        className="border-border hover:border-accent hover:bg-accent/10"
                        asChild
                      >
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="mr-2 h-4 w-4" />
                          Code
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
