import { ExternalLink, Github, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Projects = () => {
  const projects = [
    {
      title: "MovieMuse Website",
      description: "Built a dynamic web application that recommends movies based on user mood and displays film metadata (trailers, cast, ratings). Integrated modal-based UI, responsive movie cards, and fixed navigation bar with custom styling.",
      image: "https://wallpapercave.com/wp/wp12839864.jpg",
      tech: ["React.js", "JavaScript", "HTML", "CSS", "TMDB API"],
      github: "https://github.com/Aniket-1100/moviemuse",
      live: "https://moviemuse-ba9k.onrender.com/",
      date: "July 2025",
      highlights: ["85%+ engagement rate", "Modal-based UI", "Responsive design"]
    },
    {
      title: "Rock, Paper, Scissors Game",
      description: "Designed and coded an interactive Rock, Paper, Scissors game using ReactJS. Incorporated a user-friendly interface and achieved 100% accuracy in outcome predictions during testing phases.",
      image: "https://t4.ftcdn.net/jpg/00/84/60/25/360_F_84602505_CbgZtlxEktGN0wfLfTQMuRNvBau4mujo.jpg",
      tech: ["ReactJS", "JavaScript"],
      github: "https://github.com/Aniket-1100/rockpaperscissor",
      live: "https://rockpaperscissor-swf.pages.dev/",
      date: "Dec 2024 – Jan 2025",
      highlights: ["100% accuracy", "Clean state management", "Visually appealing animations"]
    },
    {
      title: "EstateHaven Real Estate Platform",
      description: "Established a real estate website incorporating advanced property search features, resulting in a 35% increase in user engagement. Integrated advanced analytics and reporting tools.",
      image: "https://t4.ftcdn.net/jpg/04/73/72/11/360_F_473721132_I9LNMCvx7Du6EdJNH91EywcNHzgtEclz.jpg",
      tech: ["React", "HTML", "CSS", "JavaScript", "Swiper"],
      github: "https://github.com/Aniket-1100/RealEstate",
      live: "https://realestatehaven.pages.dev/",
      date: "Nov 2024 – Dec 2024",
      highlights: ["35% increase in user engagement", "25% boost in lead conversion", "Advanced search features"]
    },
    {
      title: "CarPedia Website",
      description: "Launched a sophisticated web-based resource for car enthusiasts, featuring 100+ interactive tools and detailed model comparisons. Enhanced page load speeds by 40% and integrated advanced search functionalities.",
      image: "https://wallpapercrafter.com/desktop/10299-car-road-twilight-light-landscape-4k.jpg",
      tech: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/Aniket-1100/CarPedia",
      live: "https://aniket-1100.github.io/CarPedia/",
      date: "Nov 2023 – Dec 2023",
      highlights: ["500+ monthly user interactions", "40% faster page loads", "35% increase in user retention"]
    }
  ];

  return (
    <section className="py-20 bg-slate-50" id="projects">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills in web development, 
            user experience design, and problem-solving capabilities.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button size="sm" variant="secondary" className="gap-2">
                      <Github size={16} />
                      Code
                    </Button>
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button size="sm" className="gap-2">
                      <ExternalLink size={16} />
                      Live Demo
                    </Button>
                  </a>
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="flex items-center gap-2 text-sm text-slate-500 mb-2">
                  <Calendar size={14} />
                  {project.date}
                </div>
                
                <h3 className="text-xl font-bold text-slate-800 mb-3">{project.title}</h3>
                <p className="text-slate-600 mb-4 leading-relaxed">{project.description}</p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-slate-700 mb-2">Key Highlights:</h4>
                  <ul className="text-sm text-slate-600 space-y-1">
                    {project.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a
            href="https://github.com/Aniket-1100"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="outline" size="lg" className="px-8 py-3">
              View All Projects on GitHub
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
