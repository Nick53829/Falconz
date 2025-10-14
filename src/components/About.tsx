import { Target, Rocket, ArrowRight } from 'lucide-react';

interface AboutProps {
  setModalContent: (content: 'vision' | 'mission' | null) => void;
}

export default function About({ setModalContent }: AboutProps) {
  return (
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
  );
}
