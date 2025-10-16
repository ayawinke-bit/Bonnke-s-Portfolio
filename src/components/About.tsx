const About = () => {
  return (
    <section id="about" className="py-24 bg-secondary/50">
      <div className="container">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
          Professional <span className="text-primary">Summary</span>
        </h2>
        
        <div className="max-w-4xl mx-auto space-y-6 text-lg text-muted-foreground leading-relaxed">
          <p>
            Innovative and detail-oriented Web Developer and Computer Science student with strong 
            experience in building full-stack systems and modern, responsive websites. Skilled in 
            JavaScript, React, Node.js, Firebase, and MySQL, with a passion for designing clean, 
            functional, and scalable applications.
          </p>
          
          <p>
            Demonstrated success in delivering end-to-end projects — from concept and UI design to 
            backend development and deployment. Seeking a challenging role to contribute my skills 
            in software development, web systems, or AI-based solutions while growing technically 
            and professionally.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-16 max-w-5xl mx-auto">
          <div className="p-6 bg-card border border-border rounded-xl hover:shadow-glow transition-shadow">
            <h3 className="text-xl font-semibold mb-4 text-primary">Contact Information</h3>
            <div className="space-y-3 text-muted-foreground">
              <p><strong className="text-foreground">Phone:</strong> 0745617108</p>
              <p><strong className="text-foreground">Email:</strong> bonnkereinhard654@gmail.com</p>
              <p><strong className="text-foreground">Location:</strong> Homa Bay / Kisii, Kenya</p>
            </div>
          </div>

          <div className="p-6 bg-card border border-border rounded-xl hover:shadow-glow transition-shadow">
            <h3 className="text-xl font-semibold mb-4 text-primary">Education</h3>
            <div className="space-y-2">
              <p className="font-semibold text-foreground">Bachelor of Science in Computer Science</p>
              <p className="text-muted-foreground">Kisii University — 3rd Year (Ongoing)</p>
              <p className="text-sm text-muted-foreground">Expected Graduation: 2026</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
