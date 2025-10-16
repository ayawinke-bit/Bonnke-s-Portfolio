import profilePhoto from "@/assets/profile-photo.jpeg";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary" />
      
      {/* Content wrapper */}
      <div className="container relative z-10 grid lg:grid-cols-2 gap-12 items-center py-20">
        {/* Left content */}
        <div className="space-y-8 animate-fade-in">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              Reinhard Bonnke
              <span className="block text-primary mt-2">Ochieng</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-xl">
              Web Developer & Computer Science Student
            </p>
          </div>
          
          <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
            Innovative full-stack developer crafting modern, scalable applications 
            with expertise in React, Node.js, and AI-powered solutions.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button 
              size="lg" 
              className="group"
              onClick={() => scrollToSection('contact')}
            >
              Get In Touch
              <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => scrollToSection('projects')}
            >
              View Projects
            </Button>
          </div>

          {/* Quick stats */}
          <div className="flex flex-wrap gap-8 pt-8 border-t border-border">
            <div>
              <div className="text-3xl font-bold text-primary">5+</div>
              <div className="text-sm text-muted-foreground">Projects Built</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">2025</div>
              <div className="text-sm text-muted-foreground">Ongoing Studies</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">Full-Stack</div>
              <div className="text-sm text-muted-foreground">Developer</div>
            </div>
          </div>
        </div>

        {/* Right side - Photo with blend effect */}
        <div className="relative h-[600px] lg:h-[700px] hidden lg:block">
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-background/50 to-background z-10" />
          <div 
            className="absolute inset-0 rounded-2xl overflow-hidden"
            style={{
              boxShadow: 'var(--shadow-cyan)'
            }}
          >
            <img 
              src={profilePhoto} 
              alt="Reinhard Bonnke Ochieng at workspace"
              className="w-full h-full object-cover object-center mix-blend-luminosity hover:mix-blend-normal transition-all duration-700"
            />
          </div>
          {/* Accent border */}
          <div className="absolute -inset-1 bg-gradient-to-br from-primary via-primary-glow to-primary rounded-2xl opacity-20 blur-xl" />
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-primary" />
      </div>
    </section>
  );
};

export default Hero;
