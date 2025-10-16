import { ExternalLink, Database, Brain, Plane, Briefcase } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import stockmasterImg from "@/assets/project-stockmaster.jpg";
import medicalChatbotImg from "@/assets/project-medical-chatbot.jpg";
import travelAgencyImg from "@/assets/project-travel-agency.jpg";
import jobTrackerImg from "@/assets/project-job-tracker.jpg";

const projects = [
  {
    title: "StockMaster System",
    description: "A comprehensive inventory and warehouse management system featuring real-time stock tracking, automated reordering alerts, supplier management, and detailed analytics dashboards. Built with responsive design to work seamlessly across desktop and mobile devices.",
    tech: ["React", "Node.js", "MySQL", "Express", "REST API"],
    image: stockmasterImg,
    icon: Database,
    highlights: ["Real-time tracking", "Automated alerts", "Analytics dashboard"]
  },
  {
    title: "AI-Powered Medical Chatbot",
    description: "Intelligent healthcare assistant powered by BioBERT NLP model, providing accurate medical information and guidance. Features secure Firebase authentication, conversation history, and React Native mobile application for iOS and Android platforms.",
    tech: ["BioBERT", "Firebase", "React Native", "NLP", "Python"],
    image: medicalChatbotImg,
    icon: Brain,
    highlights: ["BioBERT AI model", "Cross-platform", "Secure authentication"]
  },
  {
    title: "Travel Agency Website & Booking System",
    description: "Full-featured travel booking platform with integrated payment solutions. Includes driver and staff management system, booking calendar, destination showcase, and seamless payment integration with M-Pesa for local transactions and PayPal for international payments.",
    tech: ["HTML5", "CSS3", "JavaScript", "M-Pesa API", "PayPal API", "PHP"],
    image: travelAgencyImg,
    icon: Plane,
    highlights: ["Payment integration", "Staff management", "Booking system"]
  },
  {
    title: "Job Application Tracker",
    description: "Streamlined web application to organize and manage job applications efficiently. Track application status, set deadline reminders, store company information, and visualize application progress through an intuitive dashboard with Firebase real-time database.",
    tech: ["React", "Firebase", "Material-UI", "Cloud Firestore"],
    image: jobTrackerImg,
    icon: Briefcase,
    highlights: ["Status tracking", "Deadline alerts", "Progress dashboard"]
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-secondary/50">
      <div className="container">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <Card 
                key={index}
                className="group overflow-hidden bg-gradient-to-br from-card to-card/50 hover:shadow-3d-hover transition-all duration-500 hover:border-primary/50 hover:-translate-y-2"
                style={{
                  transform: 'perspective(1000px) rotateX(0deg)',
                  transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)'
                }}
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden bg-secondary">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-60" />
                  <div className="absolute top-4 right-4 p-3 bg-primary/20 backdrop-blur-sm rounded-lg border border-primary/30">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                </div>

                <CardHeader>
                  <CardTitle className="flex items-center justify-between text-xl">
                    {project.title}
                    <ExternalLink className="h-5 w-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                  </CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  {/* Key Highlights */}
                  <div className="space-y-2">
                    {project.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tech.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-3 py-1.5 bg-primary/10 text-primary text-xs font-medium rounded-full border border-primary/30 hover:bg-primary/20 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
