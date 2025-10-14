import { Mail, MapPin } from 'lucide-react';

export default function Contact() {
  return (
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
  );
}
