import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Phone } from "lucide-react";

const CallToAction = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-primary/10" />
      
      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Build Something <span className="text-primary">Amazing?</span>
          </h2>
          
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            Whether you need a full-stack web application, an AI-powered solution, or a modern 
            responsive website, I'm here to turn your vision into reality.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="group min-w-[200px]"
              onClick={() => scrollToSection('contact')}
            >
              Start a Project
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="min-w-[200px]"
              onClick={() => scrollToSection('projects')}
            >
              View My Work
            </Button>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8 border-t border-border">
            <a 
              href="mailto:bonnkereinhard654@gmail.com"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="h-5 w-5" />
              <span>bonnkereinhard654@gmail.com</span>
            </a>
            <a 
              href="tel:0745617108"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Phone className="h-5 w-5" />
              <span>0745 617 108</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
