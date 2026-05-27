"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Mail, Menu, X, Download } from "lucide-react";

import { FaGithub, FaLinkedin } from "react-icons/fa";

const typingWords = [
  "Web Developer",
  "Cybersecurity Enthusiast",
  "Startup Builder",
  "Digital Creator",
];

export default function PortfolioWebsite() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [text, setText] = useState("");

  useEffect(() => {
    let wordIndex = 0;
    let charIndex = 0;

    const interval = setInterval(() => {
      const currentWord = typingWords[wordIndex];
      setText(currentWord.slice(0, charIndex));

      charIndex++;

      if (charIndex > currentWord.length) {
        charIndex = 0;
        wordIndex = (wordIndex + 1) % typingWords.length;
      }
    }, 150);

    return () => clearInterval(interval);
  }, []);

  const projects = [
    {
      title: "Library Management System",
      description:
        "A complete Django-based system with authentication, admin dashboard, and smart management features.",
      tech: ["Django", "Bootstrap", "MySQL"],
      github: "https://github.com/Obed200",
    },
    {
      title: "Dream Home Platform",
      description:
        "Modern real estate platform featuring user accounts, property management, and admin controls.",
      tech: ["PHP", "JavaScript", "MySQL"],
      github: "https://github.com/Obed200",
    },
    {
      title: "School Website",
      description:
        "Professional school platform with gallery, announcements, video showcase, and responsive design.",
      tech: ["Django", "HTML", "CSS"],
      github: "https://github.com/Obed200",
    },
  ];

  const skills = [
    "React",
    "Next.js",
    "Django",
    "Tailwind",
    "JavaScript",
    "MySQL",
    "Cybersecurity",
    "Networking",
    "Linux",
    "GitHub",
  ];

  return (
    <div className="bg-black text-white overflow-hidden scroll-smooth">
      {/* PARTICLE BACKGROUND */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-500/20 blur-3xl rounded-full animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/20 blur-3xl rounded-full animate-pulse"></div>
      </div>

      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl border-b border-white/10 bg-black/30">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-black tracking-wide">
            Obed<span className="text-cyan-400">.dev</span>
          </h1>

          <div className="hidden md:flex items-center gap-8 text-sm">
            <a href="#about" className="hover:text-cyan-400 transition">
              About
            </a>
            <a href="#skills" className="hover:text-cyan-400 transition">
              Skills
            </a>
            <a href="#projects" className="hover:text-cyan-400 transition">
              Projects
            </a>
            <a href="#contact" className="hover:text-cyan-400 transition">
              Contact
            </a>
          </div>

          <button
            className="md:hidden"
            onClick={() => setMobileMenu(!mobileMenu)}
          >
            {mobileMenu ? <X /> : <Menu />}
          </button>
        </div>

        {mobileMenu && (
          <div className="md:hidden px-6 pb-6 flex flex-col gap-4 bg-black/90 backdrop-blur-xl">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center max-w-5xl"
        >
          <div className="inline-block mb-8 px-5 py-2 rounded-full border border-cyan-500/20 bg-white/5 backdrop-blur-xl text-sm">
            University of Rwanda • IT Student • Entrepreneur Mindset
          </div>

          <h1 className="text-5xl md:text-8xl font-black leading-tight mb-6">
            Building
            <span className="text-cyan-400"> Digital </span>
            Experiences
          </h1>

          <div className="h-14 mb-8">
            <span className="text-2xl md:text-4xl font-semibold text-gray-300">
              {text}
            </span>
          </div>

          <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mb-10">
            Passionate about building modern websites, startup solutions,
            networking systems, and future-focused digital products.
          </p>

          <div className="flex flex-wrap justify-center gap-5">
            <a
              href="#projects"
              className="px-8 py-4 rounded-2xl bg-cyan-500 hover:bg-cyan-400 transition font-semibold text-black"
            >
              View My Work
            </a>

            <a
              href="/cv/TWIRINGIYIMANA Obed (Updated CV).pdf"
              download
              className="px-8 py-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl hover:border-cyan-400 transition flex items-center gap-2"
            >
              <Download size={18} /> Download CV
            </a>
          </div>
        </motion.div>
      </section>

      {/* ABOUT */}
      <section id="about" className="max-w-7xl mx-auto px-6 py-28">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="rounded-[40px] overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl p-6 shadow-2xl shadow-cyan-500/10">
              <div className="h-[450px] rounded-[30px] bg-gradient-to-br from-cyan-500/20 via-purple-500/20 to-pink-500/20 flex items-center justify-center text-7xl font-black text-white/20">
                OBED
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="uppercase tracking-[0.4em] text-cyan-400 mb-4 text-sm">
              About Me
            </p>

            <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
              Turning Ideas Into Modern Digital Products
            </h2>

            <p className="text-gray-400 leading-relaxed text-lg mb-6">
              I’m an ambitious Information Technology student focused on web
              development, cybersecurity, networking, and startup innovation.
            </p>

            <p className="text-gray-400 leading-relaxed text-lg mb-8">
              My goal is to build impactful technology systems while growing as
              a developer, entrepreneur, and cybersecurity professional.
            </p>

            <div className="grid grid-cols-2 gap-5">
              <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6">
                <h3 className="text-4xl font-black text-cyan-400">10+</h3>
                <p className="text-gray-400 mt-2">Projects Completed</p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6">
                <h3 className="text-4xl font-black text-cyan-400">3+</h3>
                <p className="text-gray-400 mt-2">Years Experience</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="py-28 px-6 border-y border-white/10 bg-white/[0.03]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="uppercase tracking-[0.4em] text-cyan-400 mb-4 text-sm">
              Skills
            </p>

            <h2 className="text-4xl md:text-6xl font-black">
              Technologies & Expertise
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10, scale: 1.03 }}
                className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 text-center"
              >
                <h3 className="text-2xl font-bold mb-3">{skill}</h3>
                <p className="text-gray-500 text-sm">
                  Modern technology and development expertise.
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="max-w-7xl mx-auto px-6 py-28">
        <div className="text-center mb-16">
          <p className="uppercase tracking-[0.4em] text-cyan-400 mb-4 text-sm">
            Portfolio
          </p>

          <h2 className="text-4xl md:text-6xl font-black">
            Featured Projects
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              className="rounded-[35px] overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl"
            >
              <div className="h-60 bg-gradient-to-br from-cyan-500/20 via-purple-500/20 to-pink-500/20"></div>

              <div className="p-8">
                <h3 className="text-3xl font-black mb-4">
                  {project.title}
                </h3>

                <p className="text-gray-400 leading-relaxed mb-6">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((item, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-full text-sm border border-cyan-500/20 bg-cyan-500/10 text-cyan-400"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <a
                  href={project.github}
                  target="_blank"
                  className="inline-flex items-center gap-2 text-cyan-400"
                >
                 
                  <FaGithub size={18} /> View GitHub
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="py-28 px-6 border-t border-white/10 bg-white/[0.03]"
      >
        <div className="max-w-4xl mx-auto text-center">
          <p className="uppercase tracking-[0.4em] text-cyan-400 mb-4 text-sm">
            Contact
          </p>

          <h2 className="text-4xl md:text-6xl font-black mb-8">
            Let’s Build Something Amazing
          </h2>

          <form
          
            action="https://formspree.io/f/mnjrlqgg"
            method="POST"
            className="grid gap-6 text-left"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="p-5 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl focus:outline-none focus:border-cyan-400"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="p-5 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl focus:outline-none focus:border-cyan-400"
            />

            <textarea
              rows={6}
              name="message"
              placeholder="Your Message"
              className="p-5 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl focus:outline-none focus:border-cyan-400"
            ></textarea>

            <button className="px-8 py-5 rounded-2xl bg-cyan-500 hover:bg-cyan-400 transition font-bold text-black">
              Send Message
            </button>
          </form>

          <div className="flex justify-center gap-6 mt-12 flex-wrap">
            <a
              href="https://github.com/Obed200"
              target="_blank"
              className="p-4 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl hover:border-cyan-400 transition"
            >
             
              <FaGithub />
              
            </a>

            <a
              href="https://www.linkedin.com/in/twiringiyimana-obed-77287632a/"
              className="p-4 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl hover:border-cyan-400 transition"
            >
              
              <FaLinkedin />
            </a>

            <a
              href="mailto:obedtwiringiyimana19@gmail.com"
              className="p-4 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl hover:border-cyan-400 transition"
            >
              <Mail />
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 text-center border-t border-white/10 text-gray-500 text-sm">
        © 2026 Obed Portfolio • Built with Next.js, Tailwind & Framer Motion
      </footer>
    </div>
  );
}
