import { Award, Calendar, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Certificates = () => {
  const certificates = [
    {
      title: "MERN Stack Development with a Capstone Project",
      issuer: "Programming Pathshala",
      date: "June 2024",
      description:
        "Comprehensive certification covering MongoDB, Express.js, React.js, and Node.js with hands-on project experience.",
      link: "https://certificates.programmingpathshala.com/v1/doc?id=5be0de8724b046680514cb560160566bb64a08d0e61c39cb311d48400837dd3f",
    },
    {
      title: "Server-side JavaScript with Node.js",
      issuer: "Coursera",
      date: "December 2024",
      description:
        "Comprehensive course on server-side development using Node.js, including asynchronous programming, Express framework, and API integration.",
      link: "https://coursera.org/share/2e8ffff1cb2d774ce47ff8e172d89053",
    },
    {
      title: "Leadership Through Social Influence",
      issuer: "Coursera",
      date: "March 2023",
      description:
        "Leadership development course focusing on influence strategies and team management skills.",
      link: "https://coursera.org/share/aab0b512226dbb5df44c23753ac97f48",
    },
    {
      title: "The Bits and Bytes of Computer Networking",
      issuer: "Coursera",
      date: "February 2023",
      description:
        "Comprehensive networking fundamentals covering protocols, infrastructure, and network security.",
      link: "https://coursera.org/share/97f9a822dadcbaea20efe053cb0ce809",
    },
  ];

  return (
    <section className="py-20 bg-white" id="certificates">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Certificates & Learning
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Continuous learning and professional development through
            industry-recognized certification programs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {certificates.map((cert, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Award className="text-blue-600" size={24} />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-slate-800 mb-2">
                      {cert.title}
                    </h3>
                    <div className="flex items-center gap-2 text-slate-600 mb-2">
                      <span className="font-medium">{cert.issuer}</span>
                      <span>•</span>
                      <div className="flex items-center gap-1">
                        <Calendar size={14} />
                        {cert.date}
                      </div>
                    </div>
                    <p className="text-slate-600 text-sm leading-relaxed mb-4">
                      {cert.description}
                    </p>

                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button variant="outline" size="sm" className="gap-2">
                        <ExternalLink size={14} />
                        View Certificate
                      </Button>
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
