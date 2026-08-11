import { useParams, Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowLeft, ExternalLink, Github, Play, Users, Layers, Zap, Clock } from "lucide-react";
import projectsData from "@/lib/projectsData";

/* ─── helpers ─────────────────────────────────────────────────────────────── */
function DriveEmbed({ fileId, title }) {
  return (
    <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-white/10 shadow-2xl bg-black">
      <iframe
        src={`https://drive.google.com/file/d/${fileId}/preview`}
        title={title}
        allow="autoplay"
        allowFullScreen
        className="w-full h-full"
      />
    </div>
  );
}

function TechBadge({ text, color }) {
  return (
    <span
      className="px-3 py-1 rounded-full text-xs font-semibold border backdrop-blur-sm"
      style={{
        borderColor: `${color}40`,
        backgroundColor: `${color}15`,
        color: color,
      }}
    >
      {text}
    </span>
  );
}

function FeatureCard({ feature, color, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      className="group relative rounded-xl border border-white/8 bg-white/4 backdrop-blur-sm p-5 hover:border-white/20 hover:bg-white/8 transition-all duration-300"
    >
      <div
        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: `radial-gradient(ellipse at top left, ${color}18 0%, transparent 60%)` }}
      />
      <div className="relative">
        <span
          className="inline-flex items-center justify-center w-9 h-9 rounded-lg mb-3"
          style={{ backgroundColor: `${color}20`, color }}
        >
          <feature.icon className="w-5 h-5" strokeWidth={1.75} />
        </span>
        <h4 className="text-white font-semibold text-sm mb-1.5">{feature.title}</h4>
        <p className="text-gray-400 text-xs leading-relaxed">{feature.desc}</p>
      </div>
    </motion.div>
  );
}

/* ─── main component ──────────────────────────────────────────────────────── */
export default function ProjectDetail() {
  const { projectId } = useParams();
  const project = projectsData.find((p) => p.id === projectId);

  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [projectId]);

  if (!project) {
    return (
      <div className="min-h-screen bg-[#04081A] flex flex-col items-center justify-center gap-6 text-white">
        <p className="text-2xl font-bold">Project not found</p>
        <Link
          to="/projects"
          className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/20 hover:bg-white/10 transition-colors text-sm"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Projects
        </Link>
      </div>
    );
  }

  const currentIndex = projectsData.findIndex((p) => p.id === projectId);
  const prevProject = projectsData[currentIndex - 1] ?? null;
  const nextProject = projectsData[currentIndex + 1] ?? null;

  return (
    <div className="min-h-screen bg-[#04081A] text-white">

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section ref={heroRef} className="relative min-h-[70vh] flex items-end overflow-hidden">

        {/* Background image with parallax */}
        <motion.div
          style={{ y: heroY }}
          className="absolute inset-0 z-0"
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover object-center scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#04081A] via-[#04081A]/70 to-[#04081A]/30" />
          <div
            className="absolute inset-0 opacity-30"
            style={{
              background: `radial-gradient(ellipse at center bottom, ${project.color}40, transparent 60%)`,
            }}
          />
        </motion.div>

        {/* Ambient glow blobs */}
        <div
          className="absolute top-20 right-10 w-96 h-96 rounded-full blur-3xl opacity-20 animate-pulse"
          style={{ backgroundColor: project.color }}
        />

        {/* Back button */}
        <div className="absolute top-8 left-6 md:left-10 z-20">
          <Link
            to="/projects"
            className="group inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-black/30 backdrop-blur-md text-sm text-gray-300 hover:text-white hover:border-white/40 hover:bg-black/50 transition-all duration-200"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
            Back to Projects
          </Link>
        </div>

        {/* Hero content */}
        <motion.div
          style={{ opacity: heroOpacity }}
          className="relative z-10 w-full max-w-6xl mx-auto px-6 md:px-10 pb-16 pt-32"
        >
          {/* Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap gap-2 mb-5"
          >
            {project.badges.map((b) => (
              <TechBadge key={b} text={b} color={project.color} />
            ))}
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight mb-4"
          >
            {project.shortTitle}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-lg md:text-xl text-gray-300 max-w-2xl mb-8"
          >
            {project.tagline}
          </motion.p>

          {/* CTA links */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.22 }}
            className="flex flex-wrap items-center gap-3"
          >
            {project.liveLink && (
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold text-sm text-white transition-all duration-200 hover:opacity-90 hover:scale-105 active:scale-95"
                style={{ backgroundColor: project.color }}
              >
                <ExternalLink className="w-4 h-4" /> Live Demo
              </a>
            )}
            {project.githubLink && (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold text-sm border border-white/25 bg-white/8 backdrop-blur-sm hover:bg-white/15 hover:border-white/40 transition-all duration-200"
              >
                <Github className="w-4 h-4" /> GitHub (Frontend)
              </a>
            )}
            {project.githubBackendLink && (
              <a
                href={project.githubBackendLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold text-sm border border-white/25 bg-white/8 backdrop-blur-sm hover:bg-white/15 hover:border-white/40 transition-all duration-200"
              >
                <Github className="w-4 h-4" /> GitHub (Backend)
              </a>
            )}
          </motion.div>
        </motion.div>
      </section>

      {/* ── Content ──────────────────────────────────────────────────────── */}
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-20 space-y-24">

        {/* About */}
        <motion.section
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <SectionLabel icon={<Zap className="w-4 h-4" />} label="Overview" color={project.color} />
          <p className="text-gray-300 text-lg leading-relaxed max-w-3xl mt-4">
            {project.description}
          </p>
        </motion.section>

        {/* Video */}
        {project.videoId && (
          <motion.section
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <SectionLabel icon={<Play className="w-4 h-4" />} label="Project Demo" color={project.color} />
            <p className="text-gray-400 text-sm mt-2 mb-6">
              Watch a full walkthrough of the project in action.
            </p>
            <DriveEmbed fileId={project.videoId} title={project.title} />
          </motion.section>
        )}

        {/* Features */}
        {project.features?.length > 0 && (
          <section>
            <SectionLabel icon={<Zap className="w-4 h-4" />} label="Features" color={project.color} />
            <p className="text-gray-400 text-sm mt-2 mb-8">
              Everything packed into this platform.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {project.features.map((f, i) => (
                <FeatureCard key={f.title} feature={f} color={project.color} index={i} />
              ))}
            </div>
          </section>
        )}

        {/* Tech Stack */}
        {project.techStack?.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <SectionLabel icon={<Layers className="w-4 h-4" />} label="Tech Stack" color={project.color} />
            <p className="text-gray-400 text-sm mt-2 mb-8">
              The technologies powering this project.
            </p>
            <div className="overflow-hidden rounded-2xl border border-white/8">
              {project.techStack.map((row, i) => (
                <motion.div
                  key={row.layer}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: i * 0.05 }}
                  className={`flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 px-6 py-4 ${
                    i % 2 === 0 ? "bg-white/3" : "bg-transparent"
                  } hover:bg-white/6 transition-colors`}
                >
                  <span
                    className="text-xs font-bold uppercase tracking-widest w-32 flex-shrink-0"
                    style={{ color: project.color }}
                  >
                    {row.layer}
                  </span>
                  <span className="text-gray-300 text-sm">{row.tech}</span>
                </motion.div>
              ))}
            </div>
          </motion.section>
        )}

        {/* Upcoming features */}
        {project.upcomingFeatures?.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <SectionLabel icon={<Clock className="w-4 h-4" />} label="Upcoming Features" color={project.color} />
            <p className="text-gray-400 text-sm mt-2 mb-8">What's coming next.</p>
            <div className="flex flex-wrap gap-3">
              {project.upcomingFeatures.map((feat, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-gray-300 text-sm"
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                    style={{ backgroundColor: project.color }}
                  />
                  {feat}
                </motion.span>
              ))}
            </div>
          </motion.section>
        )}

        {/* Team */}
        {project.team?.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <SectionLabel icon={<Users className="w-4 h-4" />} label="Team" color={project.color} />
            <p className="text-gray-400 text-sm mt-2 mb-8">The people who built this.</p>
            <div className="flex flex-wrap gap-4">
              {project.team.map((member, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  className="flex items-center gap-3 px-5 py-3 rounded-2xl border border-white/10 bg-white/4 backdrop-blur-sm"
                >
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold text-white flex-shrink-0"
                    style={{ backgroundColor: `${project.color}30`, border: `2px solid ${project.color}60` }}
                  >
                    {member.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-white text-sm font-semibold leading-none">{member.name}</p>
                    <p className="text-gray-400 text-xs mt-0.5">{member.role}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>
        )}

        {/* Project navigation */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="border-t border-white/8 pt-12"
        >
          <p className="text-gray-500 text-xs uppercase tracking-widest mb-6 text-center">
            More Projects
          </p>
          <div className="flex flex-col sm:flex-row justify-between gap-4">
            {prevProject ? (
              <Link
                to={`/projects/${prevProject.id}`}
                className="group flex items-center gap-3 flex-1 p-4 rounded-xl border border-white/8 bg-white/3 hover:bg-white/8 hover:border-white/20 transition-all duration-200"
              >
                <ArrowLeft className="w-5 h-5 text-gray-500 group-hover:text-white transition-colors flex-shrink-0" />
                <div className="min-w-0">
                  <p className="text-gray-500 text-xs mb-1">Previous</p>
                  <p className="text-white text-sm font-semibold truncate">{prevProject.shortTitle}</p>
                </div>
              </Link>
            ) : (
              <div className="flex-1" />
            )}

            <Link
              to="/projects"
              className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-white/8 bg-white/3 hover:bg-white/8 hover:border-white/20 transition-all duration-200 text-gray-400 hover:text-white text-sm font-medium"
            >
              All Projects
            </Link>

            {nextProject ? (
              <Link
                to={`/projects/${nextProject.id}`}
                className="group flex items-center justify-end gap-3 flex-1 p-4 rounded-xl border border-white/8 bg-white/3 hover:bg-white/8 hover:border-white/20 transition-all duration-200"
              >
                <div className="min-w-0 text-right">
                  <p className="text-gray-500 text-xs mb-1">Next</p>
                  <p className="text-white text-sm font-semibold truncate">{nextProject.shortTitle}</p>
                </div>
                <ArrowLeft className="w-5 h-5 text-gray-500 group-hover:text-white transition-colors flex-shrink-0 rotate-180" />
              </Link>
            ) : (
              <div className="flex-1" />
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

/* ─── small utility ──────────────────────────────────────────────────────── */
function SectionLabel({ icon, label, color }) {
  return (
    <div className="inline-flex items-center gap-2">
      <span
        className="flex items-center justify-center w-7 h-7 rounded-lg"
        style={{ backgroundColor: `${color}25`, color }}
      >
        {icon}
      </span>
      <span
        className="text-xs font-bold uppercase tracking-widest"
        style={{ color }}
      >
        {label}
      </span>
    </div>
  );
}
