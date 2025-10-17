import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Certifications from "@/components/Certifications";
import Testimonials from "@/components/Testimonials";
import CallToAction from "@/components/CallToAction";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Certifications />
        <Testimonials />
        <CallToAction />
        <Contact />
      </main>
      <footer className="py-8 border-t border-border">
        <div className="container text-center text-muted-foreground">
          <p>© 2025 Reinhard Bonnke Ochieng. Innovate. Elevate. Inspire.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
