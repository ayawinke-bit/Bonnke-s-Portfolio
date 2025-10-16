import { ExternalLink } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const projects = [
  {
    title: "StockMaster System",
    description: "Inventory and warehouse management system with real-time tracking, supplier management.",
    tech: ["React", "Node.js", "MySQL"]
  },
  {
    title: "AI-Powered Medical Chatbot",
    description: "BioBERT-based chatbot with Firebase login and React Native UI.",
    tech: ["BioBERT", "Firebase", "React Native"]
  },
  {
    title: "Travel Agency Website & Booking System",
    description: "Portal + backend driver/staff management with M-Pesa and PayPal integration.",
    tech: ["HTML", "CSS", "JavaScript", "M-Pesa", "PayPal"]
  },
  {
    title: "Job Application Tracker",
    description: "Web app to manage job applications and deadlines.",
    tech: ["React", "Firebase"]
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-secondary/50">
      <div className="container">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="group hover:shadow-glow transition-all hover:border-primary/50"
            >
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  {project.title}
                  <ExternalLink className="h-5 w-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                </CardTitle>
                <CardDescription className="text-base">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full border border-primary/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
