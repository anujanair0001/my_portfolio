import { portfolioConfig } from '../data/config';

export default function About() {
  const { skills } = portfolioConfig;

  return (
    <section id="about" className="py-8 bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 relative">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <h2 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">About Me</h2>
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div className="space-y-4">
            <p className="text-lg text-gray-300 leading-relaxed">
              I’m a web developer specializing in Laravel and full-stack solutions. I focus on building scalable, user-friendly applications while constantly improving my skills to deliver better results.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              When I’m not coding, I like reading about software development trends, experimenting with side projects, and engaging in activities that keep me refreshed and motivated.            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-white">Skills</h3>
            <div className="space-y-4">
              {Object.entries(skills).map(([category, skillList]) => {
                const categoryNames: Record<string, string> = {
                  programming: "Programming",
                  databases: "Databases",
                  frameworks: "Web Frameworks",
                  dataScripting: "Data & Scripting",
                  practices: "Practices",
                  tools: "Tools",
                  frontend: "Familiar with"
                };
                return (
                  <div key={category}>
                    <h4 className="text-sm font-medium text-cyan-400 mb-2">{categoryNames[category]}</h4>
                    <div className="grid grid-cols-3 gap-2">
                      {skillList.map((skill) => (
                        <div
                          key={skill.name}
                          className="bg-gradient-to-r from-purple-500/20 to-cyan-500/20 backdrop-blur-sm border border-purple-500/30 px-3 py-2 rounded-lg text-center hover:scale-105 transition-all duration-300 group"
                        >
                          <div className="text-lg mb-1 group-hover:scale-110 transition-transform">{skill.icon}</div>
                          <div className="text-white text-xs font-medium">{skill.name}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}