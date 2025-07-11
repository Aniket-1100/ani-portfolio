
import { Trophy, Code, Users, TreePine, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Achievements = () => {
  const achievements = [
    {
      category: "Social Impact",
      icon: TreePine,
      title: "NGO – Lions Club Social Work Intern",
      period: "June 2023 – July 2023",
      highlights: [
        "Led an initiative on urban deforestation involving students from 10+ schools",
        "Facilitated collaborations with 10+ organizations",
        "Increased participation in environmental programs by 40%",
        "Conducted awareness sessions on afforestation"
      ]
    },
    {
      category: "Competitive Programming",
      icon: Code,
      title: "Coding Excellence",
      period: "Ongoing",
      highlights: [
        "Solved 200+ problems on LeetCode and Codeforces",
        "4-Star rating on HackerRank in Python, Java, C, and C++",
        "Strong logical thinking and algorithmic problem-solving abilities",
        "Active participant in competitive programming contests"
      ]
    }
  ];

  const stats = [
    { icon: Code, value: "200+", label: "Problems Solved" },
    { icon: Star, value: "4⭐", label: "HackerRank Rating" },
    { icon: Users, value: "10+", label: "Organizations Collaborated" },
    { icon: TreePine, value: "40%", label: "Increased Participation" }
  ];

  return (
    <section className="py-20 bg-slate-50" id="achievements">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Achievements & Impact
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Recognition for technical excellence, social impact, and leadership in various domains.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="bg-blue-100 p-3 rounded-full w-fit mx-auto mb-4">
                  <stat.icon className="text-blue-600" size={24} />
                </div>
                <div className="text-2xl font-bold text-slate-800 mb-1">{stat.value}</div>
                <div className="text-sm text-slate-600">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Achievements Details */}
        <div className="space-y-8">
          {achievements.map((achievement, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="flex items-start gap-6">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-4 rounded-lg">
                    <achievement.icon className="text-white" size={32} />
                  </div>
                  
                  <div className="flex-1">
                    <div className="text-sm font-medium text-blue-600 mb-2">{achievement.category}</div>
                    <h3 className="text-2xl font-bold text-slate-800 mb-2">{achievement.title}</h3>
                    <div className="text-slate-600 mb-4">{achievement.period}</div>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      {achievement.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-slate-700">{highlight}</span>
                        </div>
                      ))}
                    </div>
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

export default Achievements;
