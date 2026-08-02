import React, { useState } from "react";
import { Trophy, Calendar, MapPin, Youtube } from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import hackathons from "../../lib/hackathonsData";

const HackathonCard = ({ h }) => (
  <div className="group relative overflow-hidden transform hover:-translate-y-2 transition-all duration-300">
    <div className="absolute inset-0 backdrop-blur-lg bg-white/5 rounded-lg" />
    <div className="absolute -inset-[2px] bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-lg opacity-0 group-hover:opacity-100 animate-gradient-xy transition-all duration-500" />
    <div className="relative bg-gray-900/90 rounded-lg overflow-hidden h-full border border-gray-800/50 shadow-xl backdrop-blur-xl flex flex-col">
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

const youtubeVideos = [
  { id: "gi1kkMbfNAE", title: "HackIndia 2024 — National Finals Highlights" },
  { id: "vwhbkog9vTs", title: "HackIndia Spark 6 — Regional Winner" },
];

function YoutubeSlider() {
  const [active, setActive] = useState(0);
  const [loading, setLoading] = useState(false);
  const dragStartX = React.useRef(null);
  const dragging = React.useRef(false);

  const goTo = (i) => {
    setActive(i);
    setLoading(true);
  };

  const handleDragStart = (e) => {
    dragStartX.current =
      e.type === "touchstart" ? e.touches[0].clientX : e.clientX;
    dragging.current = false;
  };

  const handleDragEnd = (e) => {
    if (dragStartX.current === null) return;
    const endX =
      e.type === "touchend" ? e.changedTouches[0].clientX : e.clientX;
    const diff = dragStartX.current - endX;
    if (Math.abs(diff) > 50) {
      dragging.current = true;
      if (diff > 0) {
        goTo((active + 1) % youtubeVideos.length);
      } else {
        goTo((active - 1 + youtubeVideos.length) % youtubeVideos.length);
      }
    }
    dragStartX.current = null;
  };

  return (
    <div className="max-w-6xl mx-auto mt-24">
      <div className="flex flex-col items-center gap-3 mb-10">
        <span className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 text-sm font-semibold">
          <Youtube className="w-4 h-4" /> HackIndia Highlights
        </span>
        <h3 className="text-3xl md:text-5xl font-black text-white text-center">
          Watch Our <span className="gradient-text">Journey</span>
        </h3>
        <p className="text-gray-400 text-center max-w-xl transition-all duration-300">
          {youtubeVideos[active].title}
        </p>
      </div>

      <div className="relative group rounded-2xl overflow-hidden border border-gray-800/60 shadow-2xl shadow-cyan-500/10 select-none">
        <div className="absolute -inset-[2px] bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-2xl opacity-0 group-hover:opacity-60 transition-all duration-500 -z-10" />

        <div className="aspect-video w-full relative">
          {loading && (
            <div className="absolute inset-0 bg-[#04081A] flex items-center justify-center z-10">
              <div className="flex flex-col items-center gap-3">
                <div className="w-12 h-12 rounded-full border-4 border-gray-700 border-t-cyan-400 animate-spin" />
                <p className="text-gray-400 text-sm">Loading video...</p>
              </div>
            </div>
          )}

          {/* iframe — full pointer events for play/pause */}
          <iframe
            key={active}
            src={`https://www.youtube.com/embed/${youtubeVideos[active].id}?rel=0&modestbranding=1`}
            title={youtubeVideos[active].title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
            onLoad={() => setLoading(false)}
          />

          {/* Transparent drag overlay — only on left/right edges */}
          <div
            className="absolute top-0 left-0 w-16 h-full z-20 cursor-grab active:cursor-grabbing"
            onMouseDown={handleDragStart}
            onMouseUp={handleDragEnd}
            onTouchStart={handleDragStart}
            onTouchEnd={handleDragEnd}
          />
          <div
            className="absolute top-0 right-0 w-16 h-full z-20 cursor-grab active:cursor-grabbing"
            onMouseDown={handleDragStart}
            onMouseUp={handleDragEnd}
            onTouchStart={handleDragStart}
            onTouchEnd={handleDragEnd}
          />
        </div>

        {/* Arrow buttons — outside iframe area */}
        <button
          onClick={() =>
            goTo((active - 1 + youtubeVideos.length) % youtubeVideos.length)
          }
          className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/60 flex items-center justify-center text-white text-xl opacity-0 group-hover:opacity-100 transition-opacity z-30 hover:bg-black/80"
        >
          ‹
        </button>
        <button
          onClick={() => goTo((active + 1) % youtubeVideos.length)}
          className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/60 flex items-center justify-center text-white text-xl opacity-0 group-hover:opacity-100 transition-opacity z-30 hover:bg-black/80"
        >
          ›
        </button>
      </div>

      {/* Dots */}
      <div className="flex items-center justify-center gap-3 mt-6">
        {youtubeVideos.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`transition-all duration-300 rounded-full ${
              active === i
                ? "w-8 h-3 bg-cyan-400"
                : "w-3 h-3 bg-gray-600 hover:bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

const AVATARS = {
  hackindia_linkedin:
    "https://media.licdn.com/dms/image/v2/D4D0BAQEmlAi42f53Rg/company-logo_200_200/company-logo_200_200/0/1715856933123/hackindiaxyz_logo?e=1787184000&v=beta&t=SKeOYYzYfVrGi6CrtYALrlMVqRwlXqm8M-oMYfzHF8I",
  rungta:
    "https://media.licdn.com/dms/image/v2/D4E0BAQE4Y4vOkxQkRg/company-logo_200_200/company-logo_200_200/0/1707901138652?e=1787184000&v=beta&t=9RasCQTIVxqsXbIO3m4-HlvikQIaAlH-XcD9MCyOu9c",
  devharsh:
    "https://media.licdn.com/dms/image/v2/D4D03AQEpvamtq48muw/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1722456667676?e=1787184000&v=beta&t=Ogw9tGWOhuq_jDFo2fgb2G0Ygy6EqTrfGjiGsCPxcTA",
  hackindia_twitter:
    "https://pbs.twimg.com/profile_images/1791039148079329280/t_2GHToT_400x400.jpg",
  simon:
    "https://pbs.twimg.com/profile_images/2006015624137555968/f2EaoOcf_400x400.jpg",
};

const socialPosts = [
  {
    type: "twitter",
    label: "HackIndia XYZ",
    handle: "@HackIndiaXYZ",
    avatar: AVATARS.hackindia_twitter,
    text: "🥈 Huge congrats to Team STRONGHAT on their stellar performance at #HackIndia2024 National Final! Your impactful ideas and hard work deserve this win. Keep it up, team! 💪",
    externalUrl: "https://x.com/HackIndiaXYZ/status/1853387633394581966",
  },
  {
    type: "twitter",
    label: "HackIndia XYZ",
    handle: "@HackIndiaXYZ",
    avatar: AVATARS.hackindia_twitter,
    text: "The results are in! 🏆 Announcing the winners of HackIndia 2024 National Finals. What an incredible journey it has been! #HackIndia2024 #Web3 #Hackathon",
    externalUrl: "https://x.com/HackIndiaXYZ/status/1853684456797904984",
  },
  {
    type: "twitter",
    label: "Code With Simon",
    handle: "@codewithsimon",
    avatar: AVATARS.simon,
    text: "Shoutout to all the amazing teams at HackIndia 2024! 🚀 Watching the next generation of Web3 builders compete was truly inspiring. #HackIndia2024 #BuildOnSolana",
    externalUrl: "https://x.com/codewithsimon/status/1849126920882970645",
  },
  {
    type: "twitter",
    label: "HackIndia XYZ",
    handle: "@HackIndiaXYZ",
    avatar: AVATARS.hackindia_twitter,
    text: "HackIndia 2024 National Finals kicks off in New Delhi! 🔥 9,251 students, 50+ universities, $150,000 prize pool. Let the best builders win! #HackIndia2024",
    externalUrl: "https://x.com/HackIndiaXYZ/status/1848232130884546807",
  },
  {
    type: "linkedin",
    label: "Rungta College",
    handle: "@rungtacollege",
    avatar: AVATARS.rungta,
    text: "Proud to share that our students represented Rungta College at HackIndia 2024 National Finals in New Delhi! 🎉 Team StrawHat Fleet made us proud. #RungtaCollege #RungtaIans",
    externalUrl:
      "https://www.linkedin.com/posts/rungtacollege_rungtacollege-rungtaians-rungtacolleger1-activity-7253381930996379648-zGpJ/",
  },
  {
    type: "linkedin",
    label: "HackIndia",
    handle: "@hackindiaxyz",
    avatar: AVATARS.hackindia_linkedin,
    text: "Congratulations to all the winners of HackIndia 2024! 🏆 9,251 students, 50+ universities, and one incredible journey. Team StrawHat Fleet — 1st Runner-Up! #HackIndia2024",
    externalUrl:
      "https://www.linkedin.com/posts/hackindiaxyz_hackindia2024-hackindia2024-hackathon-ugcPost-7253998219775356928-baGB",
  },
  {
    type: "linkedin",
    label: "HackIndia",
    handle: "@hackindiaxyz",
    avatar: AVATARS.hackindia_linkedin,
    text: "The energy at HackIndia 2024 National Finals was unreal! 🚀 Teams from across India came together to build the future with Web3 & AI. #HackIndia2024 #Hackathon",
    externalUrl:
      "https://www.linkedin.com/posts/hackindiaxyz_hackindia2024-hackindia2024-hackathon-activity-7259153757161086976-15yw",
  },
  {
    type: "linkedin",
    label: "HackIndia",
    handle: "@hackindiaxyz",
    avatar: AVATARS.hackindia_linkedin,
    text: "Web3 + AI = The future of innovation. HackIndia 2024 proved it! Incredible projects, passionate builders, and game-changing ideas. #HackIndia2024 #Web3 #AI",
    externalUrl:
      "https://www.linkedin.com/posts/hackindiaxyz_hackindia2024-web3-ai-activity-7259450497940488192-a3r8",
  },
  {
    type: "linkedin",
    label: "HackIndia",
    handle: "@hackindiaxyz",
    avatar: AVATARS.hackindia_linkedin,
    text: "HackIndia 2024 National Finals — the countdown begins! 🔥 Teams are ready, ideas are bold, and the stage is set in New Delhi. #HackIndia2024 #Hackathon",
    externalUrl:
      "https://www.linkedin.com/posts/hackindiaxyz_hackindia2024-hackindia2024-hackathon-activity-7238422531831947264-JHNL/",
  },
  {
    type: "linkedin",
    label: "Devharsh",
    handle: "@devharsh2k4",
    avatar: AVATARS.devharsh,
    text: "Thrilled to share that our underdog team made it to the Top at HackIndia 2024 National Finals! 🥈 What a journey with Team StrawHat Fleet. Grateful for every moment! 💪",
    externalUrl:
      "https://www.linkedin.com/posts/devharsh2k4_thrilled-to-share-that-our-underdog-team-ugcPost-7255595050737291265-KGCG",
  },
  {
    type: "linkedin",
    label: "HackIndia",
    handle: "@hackindiaxyz",
    avatar: AVATARS.hackindia_linkedin,
    text: "HackIndia 2024 is HERE! 🎯 India's largest Web3 hackathon kicks off with 9,000+ students competing for the $150,000 prize pool. Let the building begin! #HackIndia2024",
    externalUrl:
      "https://www.linkedin.com/posts/hackindiaxyz_hackindia2024-hackindia2024-hackathon-activity-7238180288810344448-ELPt",
  },
];

export default function Hackathons() {
  return (
    <div className="min-h-screen bg-[#04081A] relative overflow-hidden pt-32 pb-20">
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-blue-500/20 to-teal-500/20 blur-3xl rounded-full" />
      <div className="relative container mx-auto px-6 mt-10">
        {/* Heading */}
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

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {hackathons.map((h) => (
            <HackathonCard key={h.id} h={h} />
          ))}
        </div>

        {/* YouTube Slider */}
        <YoutubeSlider />

        {/* Social Posts — As Seen On */}
        <div className="mt-24">
          <div className="flex flex-col items-center gap-3 mb-12">
            <span className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-sm font-semibold">
              🌐 As Seen On
            </span>
            <h3 className="text-3xl md:text-5xl font-black text-white text-center">
              The <span className="gradient-text">Buzz We Created</span>
            </h3>
            <p className="text-gray-400 text-center max-w-xl">
              HackIndia, Rungta College, teammates & the community talking about
              Team StrawHat Fleet.
            </p>
          </div>

          <div className="relative marquee-container overflow-hidden">
            <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-[#04081A] to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-[#04081A] to-transparent z-10 pointer-events-none" />

            <div
              className="animate-marquee gap-5 py-4"
              style={{ display: "flex" }}
            >
              {[...socialPosts, ...socialPosts].map((post, i) => (
                <a
                  key={i}
                  href={post.externalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-shrink-0 w-72 rounded-xl border border-gray-800/50 bg-gray-900/80 backdrop-blur-sm hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300 flex flex-col gap-3 p-5 group"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <img
                        src={post.avatar}
                        alt={post.label}
                        className="w-8 h-8 rounded-full object-cover flex-shrink-0 border border-gray-700"
                        onError={(e) => {
                          e.currentTarget.style.display = "none";
                          e.currentTarget.nextElementSibling.style.display =
                            "flex";
                        }}
                      />
                      <div
                        className={`w-8 h-8 rounded-full items-center justify-center flex-shrink-0 hidden ${post.type === "twitter" ? "bg-black border border-gray-700" : "bg-[#0A66C2]"}`}
                      >
                        {post.type === "twitter" ? (
                          <FaXTwitter className="w-4 h-4 text-white" />
                        ) : (
                          <FaLinkedin className="w-4 h-4 text-white" />
                        )}
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-white leading-none">
                          {post.label}
                        </p>
                        <p className="text-xs text-gray-500 mt-0.5">
                          {post.handle}
                        </p>
                      </div>
                    </div>
                    <span className="text-xs text-gray-600 group-hover:text-cyan-400 transition-colors">
                      ↗
                    </span>
                  </div>

                  <p className="text-sm text-gray-300 leading-relaxed line-clamp-4">
                    {post.text}
                  </p>

                  <div className="mt-auto pt-2 border-t border-gray-800/60">
                    <span
                      className={`text-xs font-medium ${post.type === "twitter" ? "text-gray-400" : "text-[#0A66C2]"}`}
                    >
                      {post.type === "twitter" ? "𝕏 Post" : "LinkedIn Post"}
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute top-20 left-20 w-96 h-96 bg-yellow-500/10 rounded-full filter blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-orange-500/10 rounded-full filter blur-3xl animate-pulse delay-1000" />
    </div>
  );
}
