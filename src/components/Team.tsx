"use client";
import { Users, Target, Code, GitBranch } from "lucide-react";

interface TeamMember {
  name: string;
  role: string;
  description: string;
  skills: string[];
  image?: string; // added
}

const TeamCard = ({ member }: { member: TeamMember }) => (
  <div className="group relative bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-sm p-6 rounded-xl border border-cyan-500/20 hover:border-cyan-400/60 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/20">
    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    <div className="relative flex flex-col items-center text-center">
      {member.image ? (
        <img
          src={member.image}
          alt={member.name}
          className="w-20 h-20 rounded-full object-cover border-2 border-cyan-500/40 mb-4 shadow-lg shadow-cyan-500/30 group-hover:shadow-cyan-400/50 transition-shadow duration-300"
        />
      ) : (
        <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center text-white mb-4 shadow-lg shadow-cyan-500/50">
          <Users className="w-8 h-8" />
        </div>
      )}
      <h3 className="text-lg font-bold text-white mb-1">{member.name}</h3>
      <p className="text-cyan-400 font-semibold text-sm mb-3">{member.role}</p>
      <p className="text-gray-400 text-sm mb-4 leading-relaxed">{member.description}</p>
      <div className="flex flex-wrap justify-center gap-2">
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

export default function Team() {
  const leadership = [
    {
      name: "Azan Ali",
      role: "Project Manager & QA Executive",
      description: "Visionary leader ensuring precision-driven excellence",
      skills: ["Project Management", "QA", "Agile", "Power Platform"],
      image: "/azan.jpg",
    },
    {
      name: "Abdur Rehman",
      role: "Project Manager & QA Executive",
      description: "Strategic planning with analytical expertise",
      skills: ["Strategic Planning", "Quality Assurance", "Jira", "Scrum"],
      image: "/abdurrehman.jpg",
    },
  ];

  const developers = [
    {
      name: "Shariq Shoaib",
      role: "Full Stack Developer",
      description: "Engineering brilliant, responsive systems",
      skills: ["React.js", "Node.js", "MongoDB", "UI/UX"],
      image: "/shariq.png",
    },
    {
      name: "Muhammad Adeel",
      role: "Full Stack Developer",
      description: "Building scalable web applications",
      skills: ["Next.js", "Express.js", "MySQL", "API Design"],
      image: "/adeel.jpg",
    },
    {
      name: "Muhammad Zaid",
      role: "Full Stack Developer",
      description: "Merging user experience with engineering",
      skills: ["JavaScript", "PHP", "Firebase", "Tailwind CSS"],
      image: "/zaid.png",
    },
  ];

  const devops = [
    {
      name: "Sardar Noor Ul Hassan",
      role: "DevOps Engineer",
      description: "Architect of continuous delivery and operational excellence",
      skills: ["CI/CD", "Docker", "Kubernetes", "AWS", "Azure"],
      image: "/noor.jpg",
    },
  ];

  return (
    <section id="team" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/30">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
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
  );
}
