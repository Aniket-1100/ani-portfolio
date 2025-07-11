
import { GraduationCap, MapPin, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Education = () => {
  const educationData = [
    {
      degree: "Bachelor of Technology – Computer Science & Engineering",
      institution: "Lovely Professional University",
      location: "Phagwara, Punjab",
      period: "Since 2022",
      grade: "CGPA: 7.57",
      status: "Ongoing",
      description: "Comprehensive computer science program covering software engineering, data structures, algorithms, and modern web technologies."
    },
    {
      degree: "Intermediate (12th Grade)",
      institution: "Shri Raghukul Vidya Peeth",
      location: "Gonda, UP",
      period: "April 2020 – June 2022",
      grade: "Percentage: 76%",
      status: "Completed",
      description: "Science stream with focus on Mathematics and Computer Science fundamentals."
    },
    {
      degree: "Matriculation (10th Grade)",
      institution: "Fatima Senior Secondary School",
      location: "Gonda, UP",
      period: "April 2018 – March 2020",
      grade: "Percentage: 81%",
      status: "Completed",
      description: "Secondary education with strong foundation in Science and Mathematics."
    }
  ];

  return (
    <section className="py-20 bg-white" id="education">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Education
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Academic journey building strong foundations in computer science and technology.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-200"></div>
            
            <div className="space-y-8">
              {educationData.map((edu, index) => (
                <div key={index} className="relative flex items-start gap-8">
                  {/* Timeline dot */}
                  <div className="relative z-10 bg-blue-600 p-3 rounded-full">
                    <GraduationCap className="text-white" size={20} />
                  </div>
                  
                  {/* Content */}
                  <Card className="flex-1 hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-slate-800 mb-2">{edu.degree}</h3>
                          <h4 className="text-lg font-semibold text-blue-600 mb-2">{edu.institution}</h4>
                          
                          <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-slate-600 mb-3">
                            <div className="flex items-center gap-2">
                              <MapPin size={16} />
                              {edu.location}
                            </div>
                            <div className="flex items-center gap-2">
                              <Calendar size={16} />
                              {edu.period}
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex flex-col items-end gap-2">
                          <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                            {edu.status}
                          </div>
                          <div className="text-lg font-bold text-slate-800">{edu.grade}</div>
                        </div>
                      </div>
                      
                      <p className="text-slate-600 leading-relaxed">{edu.description}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
