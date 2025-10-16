import { Button } from "@/components/ui/button";
import { Mail, MessageSquare, Briefcase } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-32 bg-secondary/30 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Section Header */}
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">Let's Build Something</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Whether you need a complete system, a specific feature, or just want to discuss 
              a technical challenge — I'm ready to help make it happen.
            </p>
          </div>

          {/* Contact Options */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-card border border-border rounded-2xl p-6 hover:border-primary/50 transition-all duration-300">
              <div className="inline-flex p-3 rounded-lg bg-primary/10 mb-4">
                <Briefcase className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Freelance Work</h3>
              <p className="text-muted-foreground text-sm">
                Available for project-based work and consulting
              </p>
            </div>

            <div className="bg-card border border-border rounded-2xl p-6 hover:border-accent/50 transition-all duration-300">
              <div className="inline-flex p-3 rounded-lg bg-accent/10 mb-4">
                <MessageSquare className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Collaboration</h3>
              <p className="text-muted-foreground text-sm">
                Open to partnerships and technical discussions
              </p>
            </div>

            <div className="bg-card border border-border rounded-2xl p-6 hover:border-primary/50 transition-all duration-300">
              <div className="inline-flex p-3 rounded-lg bg-primary/10 mb-4">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Full-Time</h3>
              <p className="text-muted-foreground text-sm">
                Considering opportunities with innovative teams
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-card border border-border rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl font-bold mb-4">Ready to start?</h3>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Drop me a message about your project or opportunity. I typically respond within 24 hours.
            </p>
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
              asChild
            >
              <a href="mailto:rainhard@example.com">
                <Mail className="mr-2 h-5 w-5" />
                Send Email
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
