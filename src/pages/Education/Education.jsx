import { GraduationCap, Calendar, MapPin, Award, Trophy, BookOpen } from "lucide-react";
import { motion } from "framer-motion";

const educationData = [
  {
    degree: "B.Sc. (Hons.) Mathematics",
    fullDegree: "Bachelor of Science (Hons.) in Mathematics",
    school: "S.B. College, Ara",
    university: "Veer Kunwar Singh University, Bihar",
    year: "2018 – 2021",
    badge: "🎓 First Division",
    badgeColor: "from-emerald-400 to-teal-400",
    accentFrom: "#10b981",
    accentTo: "#06b6d4",
    icon: BookOpen,
    achievements: ["First Division", "Honours in Mathematics"],
    skills: ["Mathematics", "Analytical Thinking", "Problem Solving", "Logical Reasoning"],
    description:
      "Completed a Bachelor of Science (Honours) in Mathematics with a strong foundation in mathematical concepts, analytical reasoning, and quantitative problem-solving.",
    gradientBg: "from-emerald-900/40 via-teal-900/30 to-cyan-900/20",
    glowColor: "rgba(16,185,129,0.25)",
    patternColor: "#10b981",
  },
  {
    degree: "B.Tech — CSE",
    fullDegree: "Bachelor of Technology in Computer Science & Engineering",
    school: "Rungta College of Engineering & Technology",
    university: "CSVTU, Bhilai",
    year: "2022 – 2025",
    badge: "⚡ CGPA: 8.2/10",
    badgeColor: "from-blue-400 to-indigo-400",
    accentFrom: "#3b82f6",
    accentTo: "#6366f1",
    icon: GraduationCap,
    achievements: ["Completed B.Tech (CSE)", "CGPA: 8.2/10"],
    skills: ["Web Development", "Database Management", "Data Structures & Algorithms"],
    description:
      "Completed B.Tech in Computer Science & Engineering with a strong foundation in software development, programming, databases, and modern web technologies.",
    gradientBg: "from-blue-900/40 via-indigo-900/30 to-purple-900/20",
    glowColor: "rgba(59,130,246,0.25)",
    patternColor: "#3b82f6",
  },
];

function EducationCard({ edu, index }) {
  const Icon = edu.icon;

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

      {/* Animated gradient border on hover */}
      <div
        className="absolute -inset-[2px] rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-500"
        style={{
          background: `linear-gradient(135deg, ${edu.accentFrom}, ${edu.accentTo}, ${edu.accentFrom})`,
          backgroundSize: "200% 200%",
          animation: "gradient-shift 3s linear infinite",
        }}
      />

      {/* Card body */}
      <div className="relative bg-gray-900/90 rounded-lg overflow-hidden h-full border border-gray-800/50 shadow-xl backdrop-blur-xl flex flex-col">

        {/* ── Visual header — background + icon, clipped separately from badge ── */}
        <div className={`relative h-48 flex-shrink-0`}>

          {/* Background layer — clipped inside its own wrapper */}
          <div className={`absolute inset-0 overflow-hidden rounded-t-lg bg-gradient-to-br ${edu.gradientBg}`}>
            {/* Dot-grid pattern */}
            <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id={`dots-${index}`} x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                  <circle cx="2" cy="2" r="1.5" fill={edu.patternColor} />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill={`url(#dots-${index})`} />
            </svg>
            {/* Glow blobs */}
            <div
              className="absolute -bottom-8 -right-8 w-40 h-40 rounded-full blur-3xl opacity-60 group-hover:opacity-90 transition-opacity duration-500"
              style={{ backgroundColor: edu.glowColor }}
            />
            <div
              className="absolute -top-8 -left-8 w-32 h-32 rounded-full blur-2xl opacity-40"
              style={{ backgroundColor: edu.glowColor }}
            />
          </div>

          {/* Centre icon + short degree — overlaid on background */}
          <div className="relative z-10 h-full flex flex-col items-center justify-center gap-3 px-6 pb-6">
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300"
              style={{
                background: `linear-gradient(135deg, ${edu.accentFrom}30, ${edu.accentTo}30)`,
                border: `1.5px solid ${edu.accentFrom}50`,
              }}
            >
              <Icon className="w-8 h-8" style={{ color: edu.accentFrom }} strokeWidth={1.5} />
            </div>
            <p
              className="text-lg font-black tracking-tight text-center leading-tight"
              style={{ color: edu.accentFrom }}
            >
              {edu.degree}
            </p>
          </div>

          {/* Badge — at bottom of header, sits outside the overflow clip */}
          <div className="absolute bottom-0 left-0 right-0 px-3 pb-3 flex items-end z-20">
            <div
              className={`snake-border-light inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r ${edu.badgeColor} text-black font-bold text-xs shadow-lg`}
            >
              {edu.badge}
            </div>
          </div>
        </div>

        {/* ── Content body ── */}
        <div className="p-6 flex flex-col flex-1 space-y-4">

          {/* Title + school */}
          <div>
            <h3
              className="text-lg font-bold leading-snug"
              style={{
                background: `linear-gradient(90deg, ${edu.accentFrom}, ${edu.accentTo})`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {edu.fullDegree}
            </h3>
            <p className="text-gray-300 text-sm mt-1 flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 flex-shrink-0" style={{ color: edu.accentFrom }} />
              {edu.school}
            </p>
            <p className="text-gray-500 text-xs mt-0.5 pl-5">{edu.university}</p>
          </div>

          {/* Description */}
          <p className="text-gray-300 border-l-4 pl-4 text-sm leading-relaxed"
            style={{ borderColor: `${edu.accentFrom}60` }}>
            {edu.description}
          </p>

          {/* Meta row */}
          <div className="flex flex-wrap gap-3 text-xs text-gray-400">
            <span className="flex items-center gap-1">
              <Calendar className="w-3 h-3" style={{ color: edu.accentFrom }} />
              {edu.year}
            </span>
            <span className="flex items-center gap-1">
              <Trophy className="w-3 h-3 text-yellow-400" />
              {edu.achievements[1] ?? edu.achievements[0]}
            </span>
          </div>

          {/* Skill tags */}
          <div className="flex flex-wrap gap-1.5">
            {edu.skills.map((skill, i) => (
              <span
                key={i}
                className="px-2 py-0.5 rounded-full bg-gray-800 border border-gray-700 text-gray-300 text-xs"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Corner accents — identical to hackathon card */}
        <div className="absolute top-4 right-4 w-20 h-20 pointer-events-none">
          <div className="absolute top-0 right-0 w-6 h-[2px]" style={{ backgroundColor: `${edu.accentFrom}60` }} />
          <div className="absolute top-0 right-0 w-[2px] h-6" style={{ backgroundColor: `${edu.accentFrom}60` }} />
        </div>
        <div className="absolute bottom-4 left-4 w-20 h-20 pointer-events-none">
          <div className="absolute bottom-0 left-0 w-6 h-[2px]" style={{ backgroundColor: `${edu.accentTo}60` }} />
          <div className="absolute bottom-0 left-0 w-[2px] h-6" style={{ backgroundColor: `${edu.accentTo}60` }} />
        </div>
      </div>
    </motion.div>
  );
}

export default function EducationSection() {
  return (
    <section className="min-h-screen relative overflow-hidden py-32 bg-[#04081A]">

      {/* Grid background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-grid-white/[0.04] bg-[length:50px_50px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#04081A] via-transparent to-[#04081A]" />
      </div>

      {/* Ambient glows */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-teal-500/10 rounded-full filter blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/10 rounded-full filter blur-3xl animate-pulse delay-1000" />

      <div className="max-w-6xl mx-auto px-4 relative z-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center space-y-6 mb-20"
        >
          <span className="snake-border flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-500/10 text-teal-400 text-sm font-semibold">
            <GraduationCap className="w-4 h-4" /> Academic Background
          </span>
          <h2 className="text-5xl md:text-7xl font-black text-white text-center">
            Educational <span className="gradient-text">Journey</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg text-center">
            Discover how academic excellence shapes innovative thinking and professional growth.
          </p>
        </motion.div>

        {/* Cards — same grid as hackathon page (md:grid-cols-2 centred) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {educationData.map((edu, index) => (
            <EducationCard key={index} edu={edu} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
