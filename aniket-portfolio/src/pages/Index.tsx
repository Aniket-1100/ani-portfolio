
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Certificates from "@/components/Certificates";
import Achievements from "@/components/Achievements";
import Education from "@/components/Education";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <section id="home">
          <Hero />
        </section>
        <About />
        <Projects />
        <Certificates />
        <Achievements />
        <Education />
        <Contact />
      </main>
      
      <footer className="bg-slate-800 text-center py-8">
        <p className="text-slate-400">
          © 2024 Aniket Pratap Singh. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Index;
