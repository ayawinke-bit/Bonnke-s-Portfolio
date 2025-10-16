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
            <div className="p-6 bg-card border border-border rounded-xl text-center hover:border-primary/50 transition-all">
              <div className="inline-flex p-3 bg-primary/10 rounded-lg mb-4">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Phone</h3>
              <a 
                href="tel:0745617108"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                0745617108
              </a>
            </div>

            <div className="p-6 bg-card border border-border rounded-xl text-center hover:border-primary/50 transition-all">
              <div className="inline-flex p-3 bg-primary/10 rounded-lg mb-4">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Email</h3>
              <a 
                href="mailto:bonnkereinhard654@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors break-all"
              >
                bonnkereinhard654@gmail.com
              </a>
            </div>

            <div className="p-6 bg-card border border-border rounded-xl text-center hover:border-primary/50 transition-all">
              <div className="inline-flex p-3 bg-primary/10 rounded-lg mb-4">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Location</h3>
              <p className="text-muted-foreground">
                Homa Bay / Kisii, Kenya
              </p>
            </div>
          </div>

          <div className="text-center p-8 bg-card border border-border rounded-xl">
            <p className="text-lg text-muted-foreground mb-6">
              Interested in working together or learning more about my projects?
            </p>
            <Button 
              size="lg"
              onClick={() => window.location.href = 'mailto:bonnkereinhard654@gmail.com'}
            >
              Send Me an Email
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
