import React from "react";
import { Trophy, Calendar, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import hackathons from "../../lib/hackathonsData";

const HackathonCard = ({ h }) => (
  <div className="group relative overflow-hidden transform hover:-translate-y-2 transition-all duration-300">
    <div className="absolute inset-0 backdrop-blur-lg bg-white/5 rounded-lg" />
    <div className="absolute -inset-[2px] bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-lg opacity-0 group-hover:opacity-100 animate-gradient-xy transition-all duration-500" />

    <div className="relative bg-gray-900/90 rounded-lg overflow-hidden h-full border border-gray-800/50 shadow-xl backdrop-blur-xl flex flex-col">
      {/* Cover Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={h.coverImage}
          alt={h.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent" />
        <div
          className={`absolute bottom-3 left-3 inline-flex items-center gap-1 px-3 py-1 rounded-full bg-gradient-to-r ${h.badgeColor} text-black font-bold text-xs`}
        >
          {h.badge}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1 space-y-3">
        <div>
          <h3 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent leading-tight">
            {h.title}
          </h3>
          <p className="text-gray-400 text-sm mt-1">{h.subtitle}</p>
        </div>

        <p className="text-gray-300 border-l-4 border-blue-500/50 pl-4 text-sm leading-relaxed">
          {h.projectDesc}
        </p>

        <div className="flex flex-wrap gap-3 text-xs text-gray-400">
          <span className="flex items-center gap-1">
            <Calendar className="w-3 h-3 text-blue-400" /> {h.date}
          </span>
          <span className="flex items-center gap-1">
            <MapPin className="w-3 h-3 text-pink-400" /> {h.location}
          </span>
          <span className="flex items-center gap-1">
            <Trophy className="w-3 h-3 text-yellow-400" /> {h.prize}
          </span>
        </div>

        <div className="flex flex-wrap gap-1.5">
          {h.tags.map((tag, i) => (
            <span
              key={i}
              className="px-2 py-0.5 rounded-full bg-gray-800 border border-gray-700 text-gray-300 text-xs"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Corner decorations */}
      <div className="absolute top-4 right-4 w-20 h-20 pointer-events-none">
        <div className="absolute top-0 right-0 w-6 h-[2px] bg-cyan-500/50" />
        <div className="absolute top-0 right-0 w-[2px] h-6 bg-cyan-500/50" />
      </div>
      <div className="absolute bottom-4 left-4 w-20 h-20 pointer-events-none">
        <div className="absolute bottom-0 left-0 w-6 h-[2px] bg-purple-500/50" />
        <div className="absolute bottom-0 left-0 w-[2px] h-6 bg-purple-500/50" />
      </div>
    </div>
  </div>
);

export default function Hackathons() {
  return (
    <div className="min-h-screen bg-[#04081A] relative overflow-hidden pt-32 pb-20">
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-blue-500/20 to-teal-500/20 blur-3xl rounded-full" />
      <div className="relative container mx-auto px-6 mt-10">
        <div className="flex flex-col items-center space-y-8 mb-20">
          <div className="relative">
            <h2 className="text-5xl md:text-7xl font-black text-center text-white">
              Hackathons <span className="gradient-text">Achievements</span>
            </h2>

            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 blur-3xl rounded-full" />
          </div>
          <p className="text-lg md:text-xl text-gray-400 font-medium tracking-wide text-center max-w-2xl">
            From college sparks to national finals — building, competing, and
            winning with Team StrawHat Fleet.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {hackathons.map((h) => (
            <HackathonCard key={h.id} h={h} />
          ))}
        </div>
      </div>

      <div className="absolute top-20 left-20 w-96 h-96 bg-yellow-500/10 rounded-full filter blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-orange-500/10 rounded-full filter blur-3xl animate-pulse delay-1000" />
    </div>
  );
}
