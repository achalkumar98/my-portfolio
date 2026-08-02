import React from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const socials = [
  {
    icon: FaGithub,
    href: "https://github.com/achalkumar98",
    label: "GitHub",
    hover: "hover:text-white",
  },
  {
    icon: FaInstagram,
    href: "https://www.instagram.com/achal.pand98/",
    label: "Instagram",
    hover: "hover:text-[#E1306C]",
  },
  {
    icon: FaXTwitter,
    href: "https://x.com/hackerachal1620",
    label: "X",
    hover: "hover:text-white",
  },
  {
    icon: FaLinkedin,
    href: "https://www.linkedin.com/in/devachal",
    label: "LinkedIn",
    hover: "hover:text-[#0A66C2]",
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#04081A] text-white">
      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-40" />

      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        <p className="text-sm text-gray-500 flex items-center gap-2">
          <img src="/faviconak.ico" alt="logo" className="w-5 h-5 rounded-sm" />
          © {new Date().getFullYear()}{" "}
          <span className="gradient-text font-semibold">Achal Kumar</span>. All
          rights reserved.
        </p>

        <div className="flex items-center gap-5">
          {socials.map(({ icon: Icon, href, label, hover }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className={`text-gray-500 ${hover} transition-all duration-300 hover:scale-125`}
            >
              <Icon className="w-5 h-5" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
