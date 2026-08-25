import { Code2, Network, Calendar, MapPin, Briefcase } from "lucide-react";
import { motion } from "framer-motion";

const experiences = [
  {
    icon: Network,
    title: "Full Stack Development Trainee",
    company: "Soviet Technologies",
    period: "2023 – 2024",
    location: "Remote",
    type: "Internship",
    description:
      "Built a real-time MERN chat application with Socket.io, JWT authentication, and responsive UI. Gained hands-on experience with full-stack architecture and deployment.",
    tags: ["React.js", "Node.js", "Socket.io", "MongoDB", "JWT"],
    badge: "🚀 Internship",
    badgeColor: "from-cyan-400 to-blue-400",
    accentFrom: "#22d3ee",
    accentTo: "#3b82f6",
    gradientBg: "from-cyan-900/40 via-blue-900/30 to-indigo-900/20",
    glowColor: "rgba(34,211,238,0.22)",
    patternColor: "#22d3ee",
  },
  {
    icon: Code2,
    title: "Software Engineer",
    company: "JMK Next Technologies",
    period: "2025 – Present",
    location: "On-site",
    type: "Full-time",
    description:
      "Developing scalable full-stack solutions across frontend, backend, mobile, and cloud deployment using Next.js, TypeScript, React Native, Node.js, and AWS.",
    tags: ["Next.js", "TypeScript", "React Native", "Node.js", "AWS"],
    badge: "⚡ Full-time",
    badgeColor: "from-violet-400 to-purple-400",
    accentFrom: "#a78bfa",
    accentTo: "#818cf8",
    gradientBg: "from-violet-900/40 via-purple-900/30 to-indigo-900/20",
    glowColor: "rgba(167,139,250,0.22)",
    patternColor: "#a78bfa",
  },
];

function ExperienceCard({ exp, index }) {
  const Icon = exp.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="group relative overflow-hidden transform hover:-translate-y-2 transition-all duration-300"
    >
      {/* Glass base */}
      <div className="absolute inset-0 backdrop-blur-lg bg-white/5 rounded-lg" />

      {/* Animated gradient border on hover — exact same as HackathonCard */}
      <div className="absolute -inset-[2px] bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-lg opacity-0 group-hover:opacity-100 animate-gradient-xy transition-all duration-500" />

      {/* Card body */}
      <div className="relative bg-gray-900/90 rounded-lg overflow-hidden h-full border border-gray-800/50 shadow-xl backdrop-blur-xl flex flex-col">

        {/* ── Visual header — background clipped separately from badge ── */}
        <div className={`relative h-48 flex-shrink-0`}>

          {/* Background layer clipped in its own wrapper */}
          <div className={`absolute inset-0 overflow-hidden rounded-t-lg bg-gradient-to-br ${exp.gradientBg}`}>
            {/* Dot-grid pattern */}
            <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id={`edots-${index}`} x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                  <circle cx="2" cy="2" r="1.5" fill={exp.patternColor} />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill={`url(#edots-${index})`} />
            </svg>
            {/* Glow blobs */}
            <div
              className="absolute -bottom-8 -right-8 w-40 h-40 rounded-full blur-3xl opacity-60 group-hover:opacity-90 transition-opacity duration-500"
              style={{ backgroundColor: exp.glowColor }}
            />
            <div
              className="absolute -top-8 -left-8 w-32 h-32 rounded-full blur-2xl opacity-40"
              style={{ backgroundColor: exp.glowColor }}
            />
          </div>

          {/* Centre: icon + company name */}
          <div className="relative z-10 h-full flex flex-col items-center justify-center gap-3 px-6 pb-6">
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300"
              style={{
                background: `linear-gradient(135deg, ${exp.accentFrom}30, ${exp.accentTo}30)`,
                border: `1.5px solid ${exp.accentFrom}50`,
              }}
            >
              <Icon className="w-8 h-8" style={{ color: exp.accentFrom }} strokeWidth={1.5} />
            </div>
            <p
              className="text-base font-black tracking-tight text-center leading-tight"
              style={{ color: exp.accentFrom }}
            >
              {exp.company}
            </p>
          </div>

          {/* Badge — bottom of header, outside overflow clip */}
          <div className="absolute bottom-0 left-0 right-0 px-3 pb-3 flex items-end z-20">
            <div
              className={`snake-border-light inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r ${exp.badgeColor} text-black font-bold text-xs shadow-lg`}
            >
              {exp.badge}
            </div>
          </div>
        </div>

        {/* ── Content body ── */}
        <div className="p-6 flex flex-col flex-1 space-y-3">

          {/* Title */}
          <div>
            <h3
              className="text-xl font-bold leading-snug"
              style={{
                background: `linear-gradient(90deg, ${exp.accentFrom}, ${exp.accentTo})`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {exp.title}
            </h3>
            <p className="text-gray-400 text-sm mt-0.5">{exp.type}</p>
          </div>

          {/* Description */}
          <p
            className="text-gray-300 border-l-4 pl-4 text-sm leading-relaxed"
            style={{ borderColor: `${exp.accentFrom}60` }}
          >
            {exp.description}
          </p>

          {/* Meta row */}
          <div className="flex flex-wrap gap-3 text-xs text-gray-400">
            <span className="flex items-center gap-1">
              <Calendar className="w-3 h-3" style={{ color: exp.accentFrom }} />
              {exp.period}
            </span>
            <span className="flex items-center gap-1">
              <MapPin className="w-3 h-3 text-pink-400" />
              {exp.location}
            </span>
            <span className="flex items-center gap-1">
              <Briefcase className="w-3 h-3 text-yellow-400" />
              {exp.company}
            </span>
          </div>

          {/* Tech tags */}
          <div className="flex flex-wrap gap-1.5">
            {exp.tags.map((tag, i) => (
              <span
                key={i}
                className="px-2 py-0.5 rounded-full bg-gray-800 border border-gray-700 text-gray-300 text-xs"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Corner accents — identical to HackathonCard */}
        <div className="absolute top-4 right-4 w-20 h-20 pointer-events-none">
          <div className="absolute top-0 right-0 w-6 h-[2px] bg-cyan-500/50" />
          <div className="absolute top-0 right-0 w-[2px] h-6 bg-cyan-500/50" />
        </div>
        <div className="absolute bottom-4 left-4 w-20 h-20 pointer-events-none">
          <div className="absolute bottom-0 left-0 w-6 h-[2px] bg-purple-500/50" />
          <div className="absolute bottom-0 left-0 w-[2px] h-6 bg-purple-500/50" />
        </div>
      </div>
    </motion.div>
  );
}

export default function ExperienceSection() {
  return (
    <div className="min-h-screen bg-[#04081A] relative overflow-hidden pt-32 pb-20">

      {/* Grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(50,50,70,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(50,50,70,0.15)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_70%,transparent_100%)]" />

      {/* Ambient glows */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-cyan-500/10 rounded-full filter blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl animate-pulse delay-1000" />

      <div className="relative container mx-auto px-6 mt-10">

        {/* Section heading */}
        <div className="flex flex-col items-center space-y-6 mb-20">
          <span className="snake-border flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 text-cyan-400 text-sm font-semibold">
            <Briefcase className="w-4 h-4" /> Work History
          </span>
          <div className="relative">
            <h2 className="text-5xl md:text-7xl font-black text-white text-center">
              Professional <span className="gradient-text">Journey</span>
            </h2>
            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 blur-3xl rounded-full" />
          </div>
          <p className="text-lg md:text-xl text-gray-400 font-medium tracking-wide text-center max-w-2xl">
            "Transforming ideas into digital reality, one project at a time"
          </p>
        </div>

        {/* Cards — same grid as hackathon (md:grid-cols-2 centred, max-w-4xl) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} exp={exp} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
