import { Code, TestTube, CloudCog, Palette, Settings, Layers } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Web & App Development",
      description: "Building seamless, scalable systems with modern frameworks"
    },
    {
      icon: <TestTube className="w-8 h-8" />,
      title: "Quality Assurance & Testing",
      description: "Ensuring flawless performance through rigorous testing"
    },
    {
      icon: <CloudCog className="w-8 h-8" />,
      title: "DevOps & Cloud Management",
      description: "Automated deployments and cloud infrastructure excellence"
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "UI/UX Design & Prototyping",
      description: "Crafting intuitive interfaces with pixel-perfect precision"
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Automation & Integration",
      description: "Streamlining workflows with intelligent automation"
    },
    {
      icon: <Layers className="w-8 h-8" />,
      title: "Project Management & Consultancy",
      description: "Strategic guidance from ideation to execution"
    }
  ];

  return (
    <section id="services" className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Core Expertise
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Comprehensive solutions for the digital age
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-sm p-8 rounded-xl border border-cyan-500/20 hover:border-cyan-400/60 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/20"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-lg flex items-center justify-center text-cyan-400 mb-6 border border-cyan-500/30 group-hover:border-cyan-400/60 transition-all duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
