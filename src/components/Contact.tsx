import { Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-secondary/50">
      <div className="container">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
          Get In <span className="text-primary">Touch</span>
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="p-8 bg-gradient-to-br from-card to-card/50 border border-border rounded-xl text-center hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-3d-hover group"
              style={{ boxShadow: 'var(--shadow-3d)' }}>
              <div className="inline-flex p-4 bg-primary/10 rounded-xl mb-4 group-hover:scale-110 transition-transform border border-primary/20">
                <Phone className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-semibold mb-3 text-lg">Phone</h3>
              <a 
                href="tel:0745617108"
                className="text-muted-foreground hover:text-primary transition-colors text-lg font-medium"
              >
                0745617108
              </a>
              <p className="text-xs text-muted-foreground mt-2">Available 9 AM - 6 PM EAT</p>
            </div>

            <div className="p-8 bg-gradient-to-br from-card to-card/50 border border-border rounded-xl text-center hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-3d-hover group"
              style={{ boxShadow: 'var(--shadow-3d)' }}>
              <div className="inline-flex p-4 bg-primary/10 rounded-xl mb-4 group-hover:scale-110 transition-transform border border-primary/20">
                <Mail className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-semibold mb-3 text-lg">Email</h3>
              <a 
                href="mailto:bonnkereinhard654@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors break-all text-sm font-medium"
              >
                bonnkereinhard654@gmail.com
              </a>
              <p className="text-xs text-muted-foreground mt-2">Response within 24 hours</p>
            </div>

            <div className="p-8 bg-gradient-to-br from-card to-card/50 border border-border rounded-xl text-center hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-3d-hover group"
              style={{ boxShadow: 'var(--shadow-3d)' }}>
              <div className="inline-flex p-4 bg-primary/10 rounded-xl mb-4 group-hover:scale-110 transition-transform border border-primary/20">
                <MapPin className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-semibold mb-3 text-lg">Location</h3>
              <p className="text-muted-foreground text-lg font-medium">
                Homa Bay / Kisii, Kenya
              </p>
              <p className="text-xs text-muted-foreground mt-2">East Africa Time (EAT)</p>
            </div>
          </div>

          <div className="text-center p-10 bg-gradient-to-br from-card to-card/50 border border-border rounded-xl hover:shadow-3d-hover transition-all duration-500"
            style={{ boxShadow: 'var(--shadow-3d)' }}>
            <h3 className="text-2xl font-bold mb-4">Let's Build Something Amazing Together</h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Interested in working together, discussing a project, or learning more about my work? 
              I'm always open to new opportunities and collaborations.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button 
                size="lg"
                className="group"
                onClick={() => window.location.href = 'mailto:bonnkereinhard654@gmail.com'}
              >
                <Mail className="mr-2 h-5 w-5" />
                Send Me an Email
              </Button>
              <Button 
                size="lg"
                variant="outline"
                onClick={() => window.location.href = 'tel:0745617108'}
              >
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
