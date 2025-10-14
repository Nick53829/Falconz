import { useState } from 'react';
import {
  Rocket, Code, CloudCog, TestTube, Layout, Zap, Shield, Clock,
  Users, Target, ChevronRight, Mail, MapPin, X, Menu, Layers,
  GitBranch, Palette, Settings, CheckCircle2, ArrowRight
} from 'lucide-react';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [modalContent, setModalContent] = useState<'vision' | 'mission' | null>(null);

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

  const leadership = [
    {
      name: "Azan Ali",
      role: "Project Manager & QA Executive",
      description: "Visionary leader ensuring precision-driven excellence",
      skills: ["Project Management", "QA", "Agile", "Power Platform"]
    },
    {
      name: "Abdur Rehman",
      role: "Project Manager & QA Executive",
      description: "Strategic planning with analytical expertise",
      skills: ["Strategic Planning", "Quality Assurance", "Jira", "Scrum"]
    }
  ];

  const developers = [
    {
      name: "Shariq Shoaib",
      role: "Full Stack Developer",
      description: "Engineering brilliant, responsive systems",
      skills: ["React.js", "Node.js", "MongoDB", "UI/UX"]
    },
    {
      name: "Muhammad Adeel",
      role: "Full Stack Developer",
      description: "Building scalable web applications",
      skills: ["Next.js", "Express.js", "MySQL", "API Design"]
    },
    {
      name: "Muhammad Zaid",
      role: "Full Stack Developer",
      description: "Merging user experience with engineering",
      skills: ["JavaScript", "PHP", "Firebase", "Tailwind CSS"]
    }
  ];

  const devops = [
    {
      name: "Sardar Noor Ul Hassan",
      role: "DevOps Engineer",
      description: "Architect of continuous delivery and operational excellence",
      skills: ["CI/CD", "Docker", "Kubernetes", "AWS", "Azure"]
    }
  ];

  const values = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Future-Ready Solutions",
      description: "Scalable & adaptive technology"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Industry Expertise",
      description: "Proven track record"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Transparent Collaboration",
      description: "Clear communication always"
    },
    {
      icon: <CheckCircle2 className="w-6 h-6" />,
      title: "Quality Standards",
      description: "Unmatched excellence"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Timely Delivery",
      description: "Innovation on schedule"
    }
  ];

  const TeamCard = ({ member }: { member: typeof leadership[0] }) => (
    <div className="group relative bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-sm p-6 rounded-xl border border-cyan-500/20 hover:border-cyan-400/60 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/20">
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="relative">
        <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center text-white mb-4 shadow-lg shadow-cyan-500/50">
          <Users className="w-8 h-8" />
        </div>
        <h3 className="text-lg font-bold text-white mb-1">{member.name}</h3>
        <p className="text-cyan-400 font-semibold text-sm mb-3">{member.role}</p>
        <p className="text-gray-400 text-sm mb-4 leading-relaxed">{member.description}</p>
        <div className="flex flex-wrap gap-2">
          {member.skills.map((skill, idx) => (
            <span
              key={idx}
              className="text-xs px-3 py-1 bg-cyan-500/10 text-cyan-300 rounded-full border border-cyan-500/30"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* Animated Background Effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-950/80 backdrop-blur-md z-50 border-b border-cyan-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="absolute inset-0 bg-cyan-500 blur-lg opacity-50" />
                <div className="relative w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center shadow-lg shadow-cyan-500/50">
                  <Rocket className="w-6 h-6 text-white" />
                </div>
              </div>
              <div>
                <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  FALCONZ NEURO
                </span>
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-gray-300 hover:text-cyan-400 transition-colors font-medium">About</a>
              <a href="#team" className="text-gray-300 hover:text-cyan-400 transition-colors font-medium">Team</a>
              <a href="#services" className="text-gray-300 hover:text-cyan-400 transition-colors font-medium">Services</a>
              <a href="#contact" className="group relative px-6 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-medium overflow-hidden hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300">
                <span className="relative z-10">Contact</span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-cyan-400"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-slate-900/95 backdrop-blur-md border-t border-cyan-500/20">
            <div className="px-4 py-6 space-y-4">
              <a href="#about" className="block text-gray-300 hover:text-cyan-400 transition-colors font-medium">About</a>
              <a href="#team" className="block text-gray-300 hover:text-cyan-400 transition-colors font-medium">Team</a>
              <a href="#services" className="block text-gray-300 hover:text-cyan-400 transition-colors font-medium">Services</a>
              <a href="#contact" className="block bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-2.5 rounded-lg text-center font-medium">
                Contact
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
          <div className="absolute top-40 right-20 w-2 h-2 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
          <div className="absolute bottom-20 left-1/3 w-2 h-2 bg-cyan-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        <div className="relative max-w-7xl mx-auto">
          <div className="text-center max-w-5xl mx-auto">
            <div className="inline-flex items-center space-x-2 bg-cyan-500/10 text-cyan-400 px-4 py-2 rounded-full mb-8 font-medium border border-cyan-500/30">
              <Zap className="w-4 h-4" />
              <span>Empowering Digital Evolution</span>
            </div>

            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent animate-gradient">
                FALCONZ NEURO
              </span>
            </h1>

            <p className="text-xl sm:text-2xl text-gray-300 mb-12 leading-relaxed max-w-3xl mx-auto">
              Where innovation meets intelligence. We craft experiences that evolve with the future.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#about"
                className="group inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-medium text-lg overflow-hidden hover:shadow-xl hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105"
              >
                <span>Explore Our Vision</span>
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center space-x-2 bg-slate-800/50 backdrop-blur-sm text-white px-8 py-4 rounded-lg border-2 border-cyan-500/30 hover:border-cyan-400 transition-all duration-300 font-medium text-lg"
              >
                <span>Our Services</span>
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
      </section>

      {/* About Section */}
      <section id="about" className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              About FalconZ Neuro
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              FalconZ Neuro is a forward-thinking IT solutions company led by a passionate team of innovators.
              We blend technology, creativity, and precision to design powerful digital ecosystems that redefine
              how businesses grow and operate in the modern world.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <button
              onClick={() => setModalContent('vision')}
              className="group relative bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-sm p-10 rounded-2xl border border-cyan-500/30 hover:border-cyan-400 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20 text-left overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative">
                <Target className="w-12 h-12 text-cyan-400 mb-4" />
                <h3 className="text-2xl font-bold text-white mb-3">Our Vision</h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  To revolutionize the global tech landscape by crafting intelligent, adaptive, and future-ready solutions.
                </p>
                <div className="flex items-center text-cyan-400 font-medium">
                  <span>Learn more</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </button>

            <button
              onClick={() => setModalContent('mission')}
              className="group relative bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-sm p-10 rounded-2xl border border-blue-500/30 hover:border-blue-400 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20 text-left overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative">
                <Rocket className="w-12 h-12 text-blue-400 mb-4" />
                <h3 className="text-2xl font-bold text-white mb-3">Our Mission</h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  To empower enterprises and startups with next-generation digital products that are scalable and automated.
                </p>
                <div className="flex items-center text-blue-400 font-medium">
                  <span>Learn more</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 text-cyan-400 mb-4">
              <Users className="w-6 h-6" />
              <span className="font-semibold">Meet the Team</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Innovators from Bahria University
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              BS IT graduates with exceptional industrial experience
            </p>
          </div>

          {/* Leadership */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-cyan-400 mb-6 flex items-center">
              <Target className="w-6 h-6 mr-3" />
              Leadership
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {leadership.map((member, index) => (
                <TeamCard key={index} member={member} />
              ))}
            </div>
          </div>

          {/* Developers */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-cyan-400 mb-6 flex items-center">
              <Code className="w-6 h-6 mr-3" />
              Development Team
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {developers.map((member, index) => (
                <TeamCard key={index} member={member} />
              ))}
            </div>
          </div>

          {/* DevOps */}
          <div>
            <h3 className="text-2xl font-bold text-cyan-400 mb-6 flex items-center">
              <GitBranch className="w-6 h-6 mr-3" />
              Infrastructure & Operations
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {devops.map((member, index) => (
                <TeamCard key={index} member={member} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
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

      {/* Why Choose Us */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Why Choose FalconZ Neuro
            </h2>
            <p className="text-xl text-gray-300">
              At the frontier of technology innovation
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-sm p-6 rounded-xl border border-cyan-500/20 hover:border-cyan-400 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/20"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-lg flex items-center justify-center text-cyan-400 mb-4 border border-cyan-500/30">
                    {value.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{value.title}</h3>
                  <p className="text-gray-400 text-sm">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-sm p-12 rounded-2xl border border-cyan-500/30 shadow-2xl shadow-cyan-500/20">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 rounded-2xl" />

            <div className="relative text-center mb-12">
              <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Let's Build the Future
              </h2>
              <p className="text-xl text-gray-300">
                FalconZ Neuro stands at the frontier of technology — where innovation meets intelligence
              </p>
            </div>

            <form className="relative space-y-6 mb-8">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-6 py-4 bg-slate-900/50 border border-cyan-500/30 rounded-lg text-white placeholder-gray-500 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-6 py-4 bg-slate-900/50 border border-cyan-500/30 rounded-lg text-white placeholder-gray-500 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300"
                />
              </div>
              <div>
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  className="w-full px-6 py-4 bg-slate-900/50 border border-cyan-500/30 rounded-lg text-white placeholder-gray-500 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300 resize-none"
                />
              </div>
              <button
                type="submit"
                className="group w-full relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-medium text-lg overflow-hidden hover:shadow-xl hover:shadow-cyan-500/50 transition-all duration-300"
              >
                <span className="relative z-10 flex items-center justify-center">
                  <Mail className="w-5 h-5 mr-2" />
                  Send Message
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
            </form>

            <div className="relative flex items-center justify-center space-x-2 text-gray-300">
              <MapPin className="w-5 h-5 text-cyan-400" />
              <span className="font-medium">Islamabad, Pakistan</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative border-t border-cyan-500/20 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="relative">
              <div className="absolute inset-0 bg-cyan-500 blur-lg opacity-50" />
              <div className="relative w-8 h-8 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center shadow-lg shadow-cyan-500/50">
                <Rocket className="w-5 h-5 text-white" />
              </div>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              FALCONZ NEURO
            </span>
          </div>
          <p className="text-gray-400 text-sm">© 2025 FalconZ Neuro. All Rights Reserved.</p>
        </div>
      </footer>

      {/* Modal */}
      {modalContent && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={() => setModalContent(null)}>
          <div className="relative bg-gradient-to-br from-slate-900 to-slate-800 p-10 rounded-2xl border border-cyan-500/50 max-w-2xl w-full shadow-2xl shadow-cyan-500/20" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setModalContent(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-cyan-400 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            {modalContent === 'vision' ? (
              <>
                <Target className="w-12 h-12 text-cyan-400 mb-4" />
                <h3 className="text-3xl font-bold text-white mb-4">Our Vision</h3>
                <p className="text-xl text-gray-300 leading-relaxed">
                  To revolutionize the global tech landscape by crafting intelligent, adaptive, and future-ready
                  solutions — bridging innovation and human potential.
                </p>
              </>
            ) : (
              <>
                <Rocket className="w-12 h-12 text-blue-400 mb-4" />
                <h3 className="text-3xl font-bold text-white mb-4">Our Mission</h3>
                <p className="text-xl text-gray-300 leading-relaxed">
                  To empower enterprises and startups with next-generation digital products that are scalable,
                  automated, and built with technical excellence.
                </p>
              </>
            )}
          </div>
        </div>
      )}

      <style>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </div>
  );
}

export default App;
