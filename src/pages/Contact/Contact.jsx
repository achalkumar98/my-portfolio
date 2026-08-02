import React, { useState } from "react";
import {
  Send,
  MapPin,
  Mail,
  Copy,
  Tag,
  User,
  MessageSquare,
  CheckCircle,
  X,
  XCircle,
} from "lucide-react";
import { FaLinkedin, FaGithub, FaInstagram, FaTelegram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState("");

  const validate = () => {
    let temp = {};
    if (!formData.name.trim()) temp.name = "Name is required";
    if (!formData.email.trim()) temp.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) temp.email = "Invalid email";
    if (!formData.subject.trim()) temp.subject = "Subject is required";
    if (!formData.message.trim()) temp.message = "Message is required";
    setErrors(temp);
    return Object.keys(temp).length === 0;
  };

  const handleCopy = (text, key) => {
    navigator.clipboard.writeText(text);
    setCopied(key);
    setTimeout(() => setCopied(""), 2000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    const form = new FormData();
    form.append("access_key", "4cfc59eb-3fb5-484b-9dc7-3807b22f0cf7");
    form.append("name", formData.name);
    form.append("email", formData.email);
    form.append("subject", formData.subject);
    form.append("message", formData.message);
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: form,
      });
      const result = await res.json();
      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
        setErrors({});
      } else {
        setStatus(result.message || "error");
      }
    } catch {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  const inputClass = (field) =>
    `w-full px-4 py-3.5 rounded-xl bg-[#0d1117] border ${
      errors[field] ? "border-red-500" : "border-gray-800"
    } focus:border-blue-500 focus:outline-none text-white placeholder-gray-600 transition-all`;

  const socials = [
    {
      icon: <FaLinkedin className="w-4 h-4 text-[#0A66C2]" />,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/devachal",
    },
    {
      icon: <FaInstagram className="w-4 h-4 text-[#E1306C]" />,
      label: "Instagram",
      href: "https://www.instagram.com/achal.pand98/",
    },
    {
      icon: <FaGithub className="w-4 h-4 text-white" />,
      label: "GitHub",
      href: "https://github.com/achalkumar98",
    },
    {
      icon: <FaXTwitter className="w-4 h-4 text-white" />,
      label: "X (Twitter)",
      href: "https://x.com/hackerachal1620",
    },
  ];

  return (
    <main className="bg-[#04081A] text-white min-h-screen">
      {/* Success Popup */}
      {status === "success" && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center px-4"
          onClick={() => setStatus(null)}
        >
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
          <div
            className="relative bg-[#0d1117] border border-green-500/30 rounded-2xl p-8 max-w-sm w-full text-center shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setStatus(null)}
              className="absolute top-4 right-4 text-gray-500 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="flex items-center justify-center mb-4">
              <div className="bg-green-500/10 p-4 rounded-full">
                <CheckCircle className="w-12 h-12 text-green-400" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Message Sent!</h3>
            <p className="text-gray-400 text-sm mb-6">
              Thanks for reaching out. I'll get back to you within 24 hours.
            </p>
            <button
              onClick={() => setStatus(null)}
              className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 rounded-xl font-semibold hover:opacity-90 transition-all"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Error Popup */}
      {status === "error" && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center px-4"
          onClick={() => setStatus(null)}
        >
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
          <div
            className="relative bg-[#0d1117] border border-red-500/30 rounded-2xl p-8 max-w-sm w-full text-center shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setStatus(null)}
              className="absolute top-4 right-4 text-gray-500 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="flex items-center justify-center mb-4">
              <div className="bg-red-500/10 p-4 rounded-full">
                <XCircle className="w-12 h-12 text-red-400" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">
              Something Went Wrong!
            </h3>
            <p className="text-gray-400 text-sm mb-6">
              Failed to send your message. Please try again or email me
              directly.
            </p>
            <button
              onClick={() => setStatus(null)}
              className="w-full bg-gradient-to-r from-red-500 to-pink-500 text-white py-3 rounded-xl font-semibold hover:opacity-90 transition-all"
            >
              Try Again
            </button>
          </div>
        </div>
      )}

      <section className="min-h-screen flex items-center px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="container mx-auto max-w-6xl w-full">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            {/* Left Column */}
            <div className="space-y-6">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-800/60 border border-gray-700 text-sm">
                <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
                Let's Connect
              </div>

              {/* Title */}
              <div>
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-4">
                  Get in <span className="gradient-text">Touch</span>
                </h2>
                <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
                  Have a project in mind or want to collaborate?{" "}
                  <span className="block sm:inline">
                    I'd love to hear from you.
                  </span>
                </p>
              </div>

              {/* Email & Location Cards */}
              <div className="space-y-3">
                <div className="flex items-center gap-3 bg-gray-900/60 border border-gray-800 rounded-2xl p-4">
                  <div className="bg-blue-500/20 p-2.5 rounded-xl shrink-0">
                    <Mail className="w-5 h-5 text-blue-400" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-gray-400 font-medium">Email</p>
                    <p className="text-gray-300 text-sm truncate">
                      dev.padeyachal@gmail.com
                    </p>
                  </div>
                  <button
                    onClick={() =>
                      handleCopy("dev.padeyachal@gmail.com", "email")
                    }
                    className="text-gray-500 hover:text-white transition-colors shrink-0"
                  >
                    <Copy className="w-4 h-4" />
                  </button>
                </div>

                <div className="flex items-center gap-3 bg-gray-900/60 border border-gray-800 rounded-2xl p-4">
                  <div className="bg-purple-500/20 p-2.5 rounded-xl shrink-0">
                    <MapPin className="w-5 h-5 text-purple-400" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-gray-400 font-medium">
                      Location
                    </p>
                    <p className="text-gray-300 text-sm">Arrah, Bihar 802301</p>
                  </div>
                  <button
                    onClick={() =>
                      handleCopy("Arrah, Bihar 802301", "location")
                    }
                    className="text-gray-500 hover:text-white transition-colors shrink-0"
                  >
                    <Copy className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <p className="text-sm text-gray-400 mb-3 font-medium">
                  Connect with me
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {socials.map((s, i) => (
                    <a
                      key={i}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 bg-gray-900/60 border border-gray-800 hover:border-gray-600 rounded-xl px-3 py-2.5 transition-all hover:scale-105 text-sm text-white"
                    >
                      {s.icon} {s.label}
                    </a>
                  ))}
                </div>
              </div>

              {/* Google Map */}
              <div className="rounded-2xl overflow-hidden border border-gray-800 h-48 w-full">
                <iframe
                  title="Arrah Bihar Map"
                  src="https://maps.google.com/maps?q=25.5467713,84.6675273&z=15&output=embed"
                  width="100%"
                  height="100%"
                  style={{
                    border: 0,
                    filter: "invert(90%) hue-rotate(180deg)",
                  }}
                  allowFullScreen=""
                  loading="lazy"
                />
              </div>

              {/* Bottom CTA */}
              <div className="flex items-start sm:items-center gap-4 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-2xl p-4 sm:p-5">
                <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-3 rounded-xl shrink-0">
                  <FaTelegram className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-white font-semibold text-sm sm:text-base">
                    Let's build something amazing together
                  </p>
                  <p className="text-gray-400 text-xs sm:text-sm">
                    I'm always open to new opportunities and exciting projects.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - Form */}
            <div
              className="border border-blue-500/30 rounded-2xl p-5 sm:p-8"
              style={{
                background:
                  "linear-gradient(135deg, rgba(59,130,246,0.05) 0%, rgba(139,92,246,0.05) 100%)",
              }}
            >
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                  <input
                    type="text"
                    placeholder="Your Name"
                    className={inputClass("name") + " pl-11"}
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                  />
                  {errors.name && (
                    <p className="text-red-400 text-xs mt-1">{errors.name}</p>
                  )}
                </div>

                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className={inputClass("email") + " pl-11"}
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                  {errors.email && (
                    <p className="text-red-400 text-xs mt-1">{errors.email}</p>
                  )}
                </div>

                <div className="relative">
                  <Tag className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                  <input
                    type="text"
                    placeholder="Subject"
                    className={inputClass("subject") + " pl-11"}
                    value={formData.subject}
                    onChange={(e) =>
                      setFormData({ ...formData, subject: e.target.value })
                    }
                  />
                  {errors.subject && (
                    <p className="text-red-400 text-xs mt-1">
                      {errors.subject}
                    </p>
                  )}
                </div>

                <div className="relative">
                  <MessageSquare className="absolute left-4 top-4 w-4 h-4 text-gray-500" />
                  <textarea
                    placeholder="Your Message"
                    rows="7"
                    className={inputClass("message") + " pl-11 resize-none"}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                  />
                  {errors.message && (
                    <p className="text-red-400 text-xs mt-1">
                      {errors.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-4 px-6 rounded-xl font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition-all disabled:opacity-60 disabled:cursor-not-allowed text-base"
                >
                  {loading ? (
                    <>
                      <svg
                        className="animate-spin w-4 h-4"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8v8z"
                        />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" /> Send Message
                    </>
                  )}
                </button>

                <p className="text-center text-gray-500 text-sm flex items-center justify-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse inline-block"></span>
                  I usually reply within 24 hours
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
