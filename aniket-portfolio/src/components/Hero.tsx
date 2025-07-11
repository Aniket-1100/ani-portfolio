import { ArrowDown, Github, Linkedin, Mail, Phone, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 z-10">
        <div className="text-center">
          {/* Profile Image */}
          <div className="mb-8 animate-fade-in">
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1 mb-6">
              <div className="w-full h-full rounded-full bg-white overflow-hidden flex items-center justify-center">
                <img
                  src="/aniket.jpg"
                  alt="Aniket Pratap Singh"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
          </div>

          {/* Name and Info */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in delay-300">
            Aniket <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Pratap Singh</span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-300 mb-8 animate-fade-in delay-500">
            Full-Stack Web Developer | UI/UX Enthusiast | Competitive Programmer
          </p>

          <p className="text-lg text-slate-400 mb-12 max-w-2xl mx-auto animate-fade-in delay-700">
            Passionate developer specializing in modern web technologies and competitive programming with expertise in data structures and algorithms.
          </p>

          {/* Resume Button */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in delay-1000">
            <a href="/Aniket_Resume.pdf" download>
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full gap-2">
                <Download size={20} />
                Download Resume
              </Button>
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex gap-6 justify-center animate-fade-in delay-1200">
            <a
              href="https://www.linkedin.com/in/aniket-pratap-singh-138167251/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors duration-300 hover:scale-110 transform"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://github.com/Aniket-1100"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors duration-300 hover:scale-110 transform"
            >
              <Github size={24} />
            </a>
            <a
              href="mailto:singhaniketpratap1100@gmail.com"
              className="text-slate-400 hover:text-white transition-colors duration-300 hover:scale-110 transform"
            >
              <Mail size={24} />
            </a>
            <a
              href="tel:+918738951100"
              className="text-slate-400 hover:text-white transition-colors duration-300 hover:scale-110 transform"
            >
              <Phone size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Arrow */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="text-slate-400" size={24} />
      </div>
    </section>
  );
};

export default Hero;
