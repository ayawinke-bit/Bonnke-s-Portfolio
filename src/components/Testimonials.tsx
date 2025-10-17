import { Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Healthcare Client",
      role: "Medical Practice Owner",
      content: "The AI-powered medical chatbot has transformed how we handle patient inquiries. The integration is seamless and the system is incredibly reliable.",
      project: "Medical Chatbot"
    },
    {
      name: "Business Owner",
      role: "Retail Store Manager",
      content: "The inventory management system has streamlined our operations significantly. Real-time tracking and automated alerts have reduced errors by 80%.",
      project: "StockMaster Inventory"
    },
    {
      name: "Travel Agency",
      role: "Agency Director",
      content: "Our new website has doubled our online bookings. The user experience is exceptional and the M-Pesa integration makes payments effortless for our customers.",
      project: "Travel Agency Platform"
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-secondary/50">
      <div className="container">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
          Client <span className="text-primary">Testimonials</span>
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mt-12">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="relative p-8 bg-gradient-to-br from-card to-card/50 border border-border rounded-xl hover:shadow-3d-hover transition-all duration-500 hover:-translate-y-1 hover:border-primary/50"
              style={{ boxShadow: 'var(--shadow-3d)' }}
            >
              <Quote className="h-10 w-10 text-primary/20 absolute top-6 right-6" />
              <div className="relative z-10">
                <p className="text-muted-foreground italic mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div className="border-t border-border pt-4">
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  <p className="text-xs text-primary mt-1">Project: {testimonial.project}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
