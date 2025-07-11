
import { Code, Database, Globe, Users, Terminal, Cpu, Brain, Settings } from "lucide-react";

const About = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: ["C++", "Java", "JavaScript", "Python"]
    },
    {
      title: "Web Development",
      icon: Globe,
      skills: ["HTML", "CSS", "React", "Node.js"]
    },
    {
      title: "Data Structures & Algorithms",
      icon: Brain,
      skills: ["Arrays", "Linked Lists", "Stacks", "Queues", "Sorting & Searching"]
    },
    {
      title: "Database Management",
      icon: Database,
      skills: ["MySQL", "MongoDB", "SQL Optimization"]
    },
    {
      title: "Tools/Platforms",
      icon: Settings,
      skills: ["Git", "VS Code", "Postman", "Linux CLI"]
    },
    {
      title: "Soft Skills",
      icon: Users,
      skills: ["Problem-Solving", "Team Collaboration", "Project Management", "Adaptability"]
    }
  ];

  return (
    <section className="py-20 bg-white" id="about">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            About Me
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Computer Science student at Lovely Professional University with a passion for full-stack development 
            and competitive programming. Experienced in building scalable web applications and solving complex algorithmic problems.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg">
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Technical Expertise</h3>
              <p className="text-lg text-slate-700 leading-relaxed mb-4">
                Strong foundation in computer science fundamentals with hands-on experience in modern web technologies. 
                Proficient in multiple programming languages and passionate about creating efficient, scalable solutions.
              </p>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="bg-white p-4 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">200+</div>
                  <div className="text-sm text-slate-600">Problems Solved</div>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <div className="text-2xl font-bold text-purple-600">4⭐</div>
                  <div className="text-sm text-slate-600">HackerRank Rating</div>
                </div>
              </div>
            </div>
            
            <div className="bg-slate-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-slate-800 mb-3">Experience Highlights</h3>
              <ul className="space-y-2 text-slate-700">
                <li className="flex items-start gap-2">
                  <Terminal className="text-blue-600 mt-1" size={16} />
                  <span>Linux CLI navigation and shell scripting</span>
                </li>
                <li className="flex items-start gap-2">
                  <Cpu className="text-blue-600 mt-1" size={16} />
                  <span>Competitive programming on LeetCode & Codeforces</span>
                </li>
                <li className="flex items-start gap-2">
                  <Globe className="text-blue-600 mt-1" size={16} />
                  <span>Full-stack web application development</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-slate-800 mb-6">Technical Skills</h3>
            <div className="grid gap-4">
              {skillCategories.map((category, index) => (
                <div key={category.title} className="border border-slate-200 rounded-lg p-4 hover:border-blue-300 transition-colors">
                  <div className="flex items-center gap-3 mb-3">
                    <category.icon className="text-blue-600" size={20} />
                    <h4 className="font-semibold text-slate-800">{category.title}</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
