const About = () => {
  return (
    <section id="about" className="py-24 bg-secondary/50">
      <div className="container">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
          Professional <span className="text-primary">Summary</span>
        </h2>
        
        <div className="max-w-4xl mx-auto space-y-6 text-lg text-muted-foreground leading-relaxed">
          <p className="text-xl">
            Innovative and detail-oriented Full Stack Developer and Computer Science student with strong 
            experience in building full-stack systems and modern, responsive websites. Skilled in 
            JavaScript, React, Node.js, Firebase, and MySQL, with a passion for designing clean, 
            functional, and scalable applications.
          </p>
          
          <p>
            Demonstrated success in delivering end-to-end projects — from concept and UI design to 
            backend development and deployment. I specialize in creating intuitive user interfaces 
            and robust backend systems that solve real-world problems. My approach combines technical 
            expertise with creative problem-solving to deliver solutions that exceed client expectations.
          </p>

          <p>
            With hands-on experience in AI integration, payment systems, and database architecture, 
            I bring a comprehensive skill set to every project. Currently pursuing my Bachelor's in 
            Computer Science at Kisii University while actively freelancing and building innovative 
            solutions for clients across various industries.
          </p>

          <p>
            Seeking a challenging role to contribute my skills in software development, web systems, 
            or AI-based solutions while growing technically and professionally in a dynamic environment.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-16 max-w-5xl mx-auto">
          <div className="p-8 bg-gradient-to-br from-card to-card/50 border border-border rounded-xl hover:shadow-3d-hover transition-all duration-500 hover:-translate-y-1 hover:border-primary/50"
            style={{ boxShadow: 'var(--shadow-3d)' }}>
            <h3 className="text-xl font-semibold mb-6 text-primary flex items-center gap-2">
              <div className="w-1 h-6 bg-primary rounded-full" />
              Contact Information
            </h3>
            <div className="space-y-4 text-muted-foreground">
              <p className="flex flex-col">
                <strong className="text-foreground text-sm mb-1">Phone</strong>
                <span className="text-lg">0745617108</span>
              </p>
              <p className="flex flex-col">
                <strong className="text-foreground text-sm mb-1">Email</strong>
                <span className="text-base">bonnkereinhard654@gmail.com</span>
              </p>
              <p className="flex flex-col">
                <strong className="text-foreground text-sm mb-1">Location</strong>
                <span className="text-lg">Homa Bay / Kisii, Kenya</span>
              </p>
              <p className="flex flex-col pt-2">
                <strong className="text-foreground text-sm mb-1">Availability</strong>
                <span className="text-base text-primary">Open to opportunities</span>
              </p>
            </div>
          </div>

          <div className="p-8 bg-gradient-to-br from-card to-card/50 border border-border rounded-xl hover:shadow-3d-hover transition-all duration-500 hover:-translate-y-1 hover:border-primary/50"
            style={{ boxShadow: 'var(--shadow-3d)' }}>
            <h3 className="text-xl font-semibold mb-6 text-primary flex items-center gap-2">
              <div className="w-1 h-6 bg-primary rounded-full" />
              Education
            </h3>
            <div className="space-y-3">
              <p className="font-semibold text-foreground text-lg">Bachelor of Science in Computer Science</p>
              <p className="text-muted-foreground">Kisii University — 4th Year (Ongoing)</p>
              <p className="text-sm text-muted-foreground">Expected Graduation: 2026</p>
              <div className="mt-4 pt-4 border-t border-border">
                <p className="text-sm text-muted-foreground mb-2">Key Coursework:</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded">Data Structures</span>
                  <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded">Algorithms</span>
                  <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded">Database Systems</span>
                  <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded">Web Development</span>
                  <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded">AI/ML</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
