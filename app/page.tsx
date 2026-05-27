"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Mail, Menu, X, Download } from "lucide-react";

import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function PortfolioWebsite() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [text, setText] = useState("");
  const [theme, setTheme] = useState("dark");
  const [photoFailed, setPhotoFailed] = useState(false);
  const [terminalOutput, setTerminalOutput] = useState([
    { type: "command", text: "visitor@obed:~$ whoami" },
    { type: "output", text: "TWIRINGIYIMANA Obed\nIT Student @ University of Rwanda\nFull-Stack Web Developer\nFuture Cybersecurity Engineer\nNetworking & Linux Enthusiast\nStartup-Focused Builder" },
  ]);
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [currentOutputIndex, setCurrentOutputIndex] = useState(0);

  // Polyfill for environments or injected scripts that call `matchMedia(...).addListener`
  useEffect(() => {
    if (typeof window === "undefined") return;

    // Ensure matchMedia exists
    if (!window.matchMedia) {
      // Minimal stub to avoid runtime errors from third-party scripts/extensions
      // that expect `window.matchMedia` to be present.
      // This stub reports `matches: false` and provides no-op listeners.
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      window.matchMedia = (query) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: () => {},
        removeListener: () => {},
        addEventListener: () => {},
        removeEventListener: () => {},
        dispatchEvent: () => false,
      });
    } else {
      // If matchMedia exists but returned objects lack addListener (old API),
      // add a compatibility shim that maps to addEventListener('change', ...)
      try {
        const mq = window.matchMedia('(max-width: 0px)');
        // @ts-ignore
        const proto = Object.getPrototypeOf(mq);
        if (proto && !proto.addListener && proto.addEventListener) {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          proto.addListener = function (fn) {
            this.addEventListener('change', fn);
          };
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          proto.removeListener = function (fn) {
            this.removeEventListener('change', fn);
          };
        }
      } catch (e) {
        // swallow any errors — best-effort polyfill only
      }
    }
  }, []);

  const typingWords = [
    "Web Developer",
    "Cybersecurity Enthusiast",
    "Startup Builder",
    "Digital Creator",
  ];

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

  // Terminal typing animation
  useEffect(() => {
    if (!isTyping || currentOutputIndex >= terminalOutput.length) {
      setDisplayedText("");
      return;
    }

    const currentItem = terminalOutput[currentOutputIndex];
    let charIndex = 0;

    const interval = setInterval(() => {
      if (charIndex <= currentItem.text.length) {
        setDisplayedText(currentItem.text.slice(0, charIndex));
        charIndex++;
      } else {
        clearInterval(interval);
        setIsTyping(false);
      }
    }, 30);

    return () => clearInterval(interval);
  }, [isTyping, currentOutputIndex, terminalOutput]);

  const executeCommand = (command) => {
    const commands = {
      whoami: [
        { type: "command", text: "visitor@obed:~$ whoami" },
        { type: "output", text: "TWIRINGIYIMANA Obed\nIT Student @ University of Rwanda\nFull-Stack Web Developer\nFuture Cybersecurity Engineer\nNetworking & Linux Enthusiast\nStartup-Focused Builder" },
      ],
      about: [
        { type: "command", text: "visitor@obed:~$ cat about.txt" },
        { type: "output", text: "I'm an ambitious IT student at the University of Rwanda focused on building modern web solutions.\n\nPassionate about:\n  • Web development and modern frameworks\n  • Cybersecurity and system design\n  • Networking and Linux systems\n  • Building scalable startup solutions\n  • Empowering communities through technology\n\nGoal: Create impactful digital systems that transform businesses and communities." },
      ],
      skills: [
        { type: "command", text: "visitor@obed:~$ skills --list" },
        { type: "output", text: "Frontend: React, Next.js, JavaScript, Tailwind CSS\nBackend: Django, PHP, Node.js\nDatabase: MySQL, PostgreSQL\nTools & Platforms: GitHub, Linux, Networking\nOther: Cybersecurity, System Design, Problem Solving" },
      ],
      tech: [
        { type: "command", text: "visitor@obed:~$ techstack --verbose" },
        { type: "output", text: "Web Development:\n  • React 19.2.4 - UI library\n  • Next.js 16.2.6 - Full-stack framework\n  • Tailwind CSS 4 - Styling\n  • Framer Motion - Animations\n\nBackend:\n  • Django - Python web framework\n  • PHP - Server-side scripting\n\nDatabase:\n  • MySQL - Relational database\n  • PostgreSQL - Advanced database\n\nDevOps:\n  • Git & GitHub - Version control\n  • Linux - Server management" },
      ],
      experience: [
        { type: "command", text: "visitor@obed:~$ cat experience.log" },
        { type: "output", text: "3+ Years of Development Experience\n\n• Full-Stack Web Development\n  - Built 10+ production projects\n  - Frontend & backend implementation\n  - Database design and optimization\n\n• Project Leadership\n  - Managed team projects\n  - Created scalable solutions\n  - Mentored junior developers\n\n• Learning Focus\n  - Advanced cybersecurity concepts\n  - Cloud architecture\n  - System design patterns" },
      ],
      projects: [
        { type: "command", text: "visitor@obed:~$ projects --all" },
        { type: "output", text: "Featured Projects:\n\n1. Library Management System\n   Tech: Django, Bootstrap, MySQL\n   Features: Authentication, Admin Dashboard, Smart Management\n   \n2. Dream Home Platform\n   Tech: PHP, JavaScript, MySQL\n   Features: User Accounts, Property Management, Admin Controls\n   \n3. School Website\n   Tech: Django, HTML, CSS\n   Features: Gallery, Announcements, Video Showcase, Responsive Design\n\nView all on GitHub: https://github.com/Obed200" },
      ],
      mission: [
        { type: "command", text: "visitor@obed:~$ cat mission.txt" },
        { type: "output", text: "MISSION STATEMENT:\n\nBuilding impactful digital systems and startup solutions that empower\nbusinesses, students, and communities through technology.\n\nVision:\n  • Create innovative solutions that solve real problems\n  • Lead in startup ecosystem development\n  • Secure Rwanda's digital infrastructure\n  • Mentor the next generation of developers" },
      ],
      education: [
        { type: "command", text: "visitor@obed:~$ education --info" },
        { type: "output", text: "EDUCATION:\n\nUniversity of Rwanda\n  • Program: Information Technology\n  • Status: Current Student\n  • Focus: Web Development, Cybersecurity, Networking\n  • GPA: Strong academic performance\n\nSelf-Learning:\n  • Advanced web frameworks\n  • Cloud technologies\n  • Security best practices\n  • System architecture" },
      ],
      interests: [
        { type: "command", text: "visitor@obed:~$ interests --show" },
        { type: "output", text: "INTERESTS & HOBBIES:\n\nTechnology:\n  • Web Development\n  • Cybersecurity Research\n  • Linux & Networking\n  • Startup Innovation\n\nPersonal:\n  • Building scalable products\n  • Digital creation\n  • Problem solving\n  • Community impact\n  • Entrepreneurship" },
      ],
      contact: [
        { type: "command", text: "visitor@obed:~$ contact --all" },
        { type: "output", text: "CONTACT INFORMATION:\n\n📧 Email: obedtwiringiyimana19@gmail.com\n🔗 GitHub: https://github.com/Obed200\n💼 LinkedIn: linkedin.com/in/twiringiyimana-obed\n📍 Location: University of Rwanda\n\nLet's connect and build something amazing together!" },
      ],
      help: [
        { type: "command", text: "visitor@obed:~$ help" },
        { type: "output", text: "Available Commands:\n  whoami       - Display user information\n  about        - Learn about me\n  skills       - View technical skills\n  tech         - View tech stack\n  experience   - View experience\n  projects     - View featured projects\n  mission      - View mission statement\n  education    - View education info\n  interests    - View interests & hobbies\n  contact      - Get contact information\n  help         - Show this help message\n\nTip: Click any command button to execute!" },
      ],
    };

    if (commands[command]) {
      setTerminalOutput(commands[command]);
      setCurrentOutputIndex(0);
      setIsTyping(true);
    }
  };

  const projects = [
    {
      title: "Library Management System",
      description:
        "A complete Django-based system with authentication, admin dashboard, and smart management features.",
      tech: ["Django", "Bootstrap", "MySQL"],
      github: "https://github.com/Obed200",
      liveDemo: "",
    },
    {
      title: "Dream Home Platform",
      description:
        "Modern real estate platform featuring user accounts, property management, and admin controls.",
      tech: ["PHP", "JavaScript", "MySQL"],
      github: "https://github.com/Obed200",
      liveDemo: "",
    },
    {
      title: "School Website",
      description:
        "Professional school platform with gallery, announcements, video showcase, and responsive design.",
      tech: ["Django", "HTML", "CSS"],
      github: "https://github.com/Obed200",
      liveDemo: "https://obed200.github.io/GSK/index.html",
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
    "Flutter",
    "C#",
  ];

  const skillLogoMap: Record<string, string> = {
    React: "/logos/react.png",
    "Next.js": "/logos/next.png",
    Django: "/logos/django.png",
    Tailwind: "/logos/tailwind.png",
    JavaScript: "/logos/js.png",
    MySQL: "/logos/mysql.png",
    Cybersecurity: "/logos/cybersecurity.png",
    Networking: "/logos/networking.png",
    Linux: "/logos/linux.png",
    GitHub: "/logos/github.png",
    Flutter: "/logos/flutter.png",
    "C#": "/logos/csharp.png",
  };

  const skillLogoSize = 28;

  return (
    <div className={`${theme === "dark" ? "bg-black text-white" : "bg-white text-gray-900"} overflow-hidden scroll-smooth`}>
      {/* PARTICLE BACKGROUND */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        {theme === "dark" ? (
          <>
            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-500/20 blur-3xl rounded-full animate-pulse"></div>
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/20 blur-3xl rounded-full animate-pulse"></div>
          </>
        ) : (
          <>
            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-300/20 blur-3xl rounded-full animate-pulse"></div>
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo-300/20 blur-3xl rounded-full animate-pulse"></div>
          </>
        )}
      </div>

      {/* NAVBAR */}
      <nav className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-xl border-b ${theme === "dark" ? "border-white/10 bg-black/30" : "border-gray-200/30 bg-white/30"}`}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-black tracking-wide">
            Obed<span className={theme === "dark" ? "text-cyan-400" : "text-blue-600"}>.dev</span>
          </h1>

          <div className="hidden md:flex items-center gap-8 text-sm">
            <a href="#about" className={theme === "dark" ? "hover:text-cyan-400" : "hover:text-blue-600"}>
              About
            </a>
            <a href="#skills" className={theme === "dark" ? "hover:text-cyan-400" : "hover:text-blue-600"}>
              Skills
            </a>
            <a href="#projects" className={theme === "dark" ? "hover:text-cyan-400" : "hover:text-blue-600"}>
              Projects
            </a>
            <a href="#contact" className={theme === "dark" ? "hover:text-cyan-400" : "hover:text-blue-600"}>
              Contact
            </a>
          </div>

          <div className="flex items-center gap-4 md:gap-6">
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className={`px-3 py-2 rounded-lg border transition ${theme === "dark" ? "bg-cyan-500/20 border-cyan-400/50 text-cyan-400 hover:bg-cyan-500/40" : "bg-blue-100 border-blue-300 text-blue-600 hover:bg-blue-200"}`}
            >
              {theme === "dark" ? "☀️" : "🌙"}
            </button>

            <button
              className="md:hidden"
              onClick={() => setMobileMenu(!mobileMenu)}
            >
              {mobileMenu ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {mobileMenu && (
          <div className={`md:hidden px-6 pb-6 flex flex-col gap-4 ${theme === "dark" ? "bg-black/90" : "bg-white/90"} backdrop-blur-xl`}>
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
            <span className={theme === "dark" ? "text-cyan-400" : "text-blue-600"}> Digital </span>
            Experiences
          </h1>

          <div className="h-14 mb-8">
            <span className={`text-2xl md:text-4xl font-semibold ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}>
              {text}
            </span>
          </div>

          <p className={`text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mb-10 ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>
            Passionate about building modern websites, startup solutions,
            networking systems, and future-focused digital products.
          </p>

          <div className="flex flex-wrap justify-center gap-5">
            <a
              href="#projects"
              className={`px-8 py-4 rounded-2xl transition font-semibold ${theme === "dark" ? "bg-cyan-500 hover:bg-cyan-400 text-black" : "bg-blue-600 hover:bg-blue-700 text-white"}`}
            >
              View My Work
            </a>

            <a
              href="cv\TWIRINGIYIMANA Obed (Updated CV).pdf"
              download
              className={`px-8 py-4 rounded-2xl backdrop-blur-xl transition flex items-center gap-2 ${theme === "dark" ? "border border-white/10 bg-white/5 hover:border-cyan-400" : "border border-gray-300 bg-gray-100 hover:border-blue-600"}`}
            >
              <Download size={18} /> Download CV
            </a>
          </div>
        </motion.div>
      </section>

      {/* WHOAMI TERMINAL */}
      <section className="px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          <div className="rounded-3xl overflow-hidden border border-cyan-500/20 bg-black/60 backdrop-blur-2xl shadow-2xl shadow-cyan-500/10">
            
            {/* TERMINAL TOP BAR */}
            <div className={`flex items-center gap-2 px-6 py-4 border-b ${theme === "dark" ? "border-white/10 bg-white/[0.03]" : "border-gray-300 bg-gray-100"}`}>
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>

              <span className="ml-4 text-sm text-gray-400 font-mono">
                obed@portfolio: ~
              </span>
            </div>

            {/* TERMINAL BODY */}
            <div className="p-6 md:p-10 font-mono text-sm md:text-base space-y-6">
              
              {/* INTERACTIVE COMMANDS */}
              <div>
                <p className="text-gray-400 text-xs mb-4">Click on a command to execute:</p>
                <div className="flex flex-wrap gap-3 mb-8">
                  {["whoami", "about", "skills", "tech", "experience", "projects", "mission", "education", "interests", "contact", "help"].map((cmd) => (
                    <button
                      key={cmd}
                      onClick={() => executeCommand(cmd)}
                      className={`px-4 py-2 rounded-lg border transition font-mono text-xs md:text-sm cursor-pointer whitespace-nowrap ${theme === "dark" ? "bg-cyan-500/20 border-cyan-400/50 text-cyan-400 hover:bg-cyan-500/40" : "bg-blue-100 border-blue-400 text-blue-700 hover:bg-blue-200"}`}
                    >
                      &gt; {cmd}
                    </button>
                  ))}
                </div>
              </div>

              {/* TERMINAL OUTPUT */}
              <div>
                {terminalOutput.map((item, idx) => (
                  <div key={idx} className={idx === terminalOutput.length - 1 ? "min-h-[4rem]" : ""}>
                    {item.type === "command" && (
                      <p className="text-cyan-400 mb-2">{item.text}</p>
                    )}
                    {item.type === "output" && (
                      <div className="text-gray-300 leading-relaxed mb-6 whitespace-pre-wrap">
                        {idx === terminalOutput.length - 1 && isTyping ? (
                          <>
                            {displayedText}
                            <span className="ml-1 w-2 h-4 bg-cyan-400 animate-pulse inline-block rounded-sm"></span>
                          </>
                        ) : (
                          item.text
                        )}
                      </div>
                    )}
                  </div>
                ))}

                {/* BLINKING CURSOR IF NOT TYPING */}
                {!isTyping && (
                  <div className="flex items-center">
                    <span className="text-cyan-400">visitor@obed:~$</span>
                    <span className="ml-2 w-3 h-5 bg-cyan-400 animate-pulse rounded-sm"></span>
                  </div>
                )}
              </div>
            </div>
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
              <motion.div
                className="relative h-[450px] overflow-hidden rounded-[30px] bg-gradient-to-br from-cyan-500/20 via-purple-500/20 to-pink-500/20"
                whileHover={{ opacity: 0.85, scale: 1.02 }}
                transition={{ duration: 0.35 }}
              >
                {!photoFailed ? (
                  <Image
                    src="/image/user.JPG"
                    alt="Portrait of TWIRINGIYIMANA Obed"
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover object-center"
                    onError={() => setPhotoFailed(true)}
                    priority
                  />
                ) : (
                  <div className="flex h-full items-center justify-center text-7xl font-black text-white/20">
                    OBED
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className={`uppercase tracking-[0.4em] mb-4 text-sm ${theme === "dark" ? "text-cyan-400" : "text-blue-600"}`}>
              About Me
            </p>

            <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
              Turning Ideas Into Modern Digital Products
            </h2>

            <p className={`leading-relaxed text-lg mb-6 ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>
              I’m an ambitious Information Technology student focused on web
              development, cybersecurity, networking, and startup innovation.
            </p>

            <p className={`leading-relaxed text-lg mb-8 ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>
              My goal is to build impactful technology systems while growing as
              a developer, entrepreneur, and cybersecurity professional.
            </p>

            <div className="grid grid-cols-2 gap-5">
              <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6">
                <h3 className={`text-4xl font-black ${theme === "dark" ? "text-cyan-400" : "text-blue-600"}`}>10+</h3>
                <p className={`mt-2 ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>Projects Completed</p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6">
                <h3 className={`text-4xl font-black ${theme === "dark" ? "text-cyan-400" : "text-blue-600"}`}>3+</h3>
                <p className={`mt-2 ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>Years Experience</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className={`py-28 px-6 border-y ${theme === "dark" ? "border-white/10 bg-white/[0.03]" : "border-gray-200 bg-gray-50"}`}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className={`uppercase tracking-[0.4em] mb-4 text-sm ${theme === "dark" ? "text-cyan-400" : "text-blue-600"}`}>
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
                className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-5"
              >
                <div className="flex flex-col items-center text-center py-6">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-md overflow-hidden bg-white/5 flex items-center justify-center p-1">
                      {skillLogoMap[skill] ? (
                        <Image
                          src={skillLogoMap[skill]}
                          alt={`${skill} logo`}
                          width={skillLogoSize}
                          height={skillLogoSize}
                          className="h-full w-full object-contain"
                        />
                      ) : null}
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold mt-4">{skill}</h3>

                  <p className="text-gray-500 text-sm mt-3 max-w-[14rem]">
                    Modern technology and development expertise.
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="max-w-7xl mx-auto px-6 py-28">
        <div className="text-center mb-16">
          <p className={`uppercase tracking-[0.4em] mb-4 text-sm ${theme === "dark" ? "text-cyan-400" : "text-blue-600"}`}>
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
                      className={`px-3 py-1 rounded-full text-sm border ${theme === "dark" ? "border-cyan-500/20 bg-cyan-500/10 text-cyan-400" : "border-blue-300 bg-blue-100 text-blue-700"}`}
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap items-center gap-5">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 ${theme === "dark" ? "text-cyan-400" : "text-blue-600"}`}
                  >
                    <FaGithub size={18} /> View GitHub
                  </a>

                  {project.liveDemo?.trim() && (
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-2 ${theme === "dark" ? "text-cyan-400" : "text-blue-600"}`}
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className={`py-28 px-6 border-t ${theme === "dark" ? "border-white/10 bg-white/[0.03]" : "border-gray-200 bg-gray-50"}`}
      >
        <div className="max-w-4xl mx-auto text-center">
          <p className={`uppercase tracking-[0.4em] mb-4 text-sm ${theme === "dark" ? "text-cyan-400" : "text-blue-600"}`}>
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
              className={`p-5 rounded-2xl border backdrop-blur-xl focus:outline-none ${theme === "dark" ? "border-white/10 bg-white/5 focus:border-cyan-400" : "border-gray-300 bg-gray-100 focus:border-blue-600"}`}
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className={`p-5 rounded-2xl border backdrop-blur-xl focus:outline-none ${theme === "dark" ? "border-white/10 bg-white/5 focus:border-cyan-400" : "border-gray-300 bg-gray-100 focus:border-blue-600"}`}
            />

            <textarea
              rows="6"
              name="message"
              placeholder="Your Message"
              className={`p-5 rounded-2xl border backdrop-blur-xl focus:outline-none ${theme === "dark" ? "border-white/10 bg-white/5 focus:border-cyan-400" : "border-gray-300 bg-gray-100 focus:border-blue-600"}`}
            ></textarea>

            <button className={`px-8 py-5 rounded-2xl transition font-bold ${theme === "dark" ? "bg-cyan-500 hover:bg-cyan-400 text-black" : "bg-blue-600 hover:bg-blue-700 text-white"}`}>
              Send Message
            </button>
          </form>

          <div className="flex justify-center gap-6 mt-12 flex-wrap">
            <a
              href="https://github.com/Obed200"
              target="_blank"
              className={`p-4 rounded-full border backdrop-blur-xl transition ${theme === "dark" ? "border-white/10 bg-white/5 hover:border-cyan-400" : "border-gray-300 bg-gray-100 hover:border-blue-600"}`}
            >
             
              <FaGithub />
              
            </a>

            <a
              href="https://www.linkedin.com/in/twiringiyimana-obed-77287632a/"
              className={`p-4 rounded-full border backdrop-blur-xl transition ${theme === "dark" ? "border-white/10 bg-white/5 hover:border-cyan-400" : "border-gray-300 bg-gray-100 hover:border-blue-600"}`}
            >
              
              <FaLinkedin />
            </a>

            <a
              href="mailto:obedtwiringiyimana19@gmail.com"
              className={`p-4 rounded-full border backdrop-blur-xl transition ${theme === "dark" ? "border-white/10 bg-white/5 hover:border-cyan-400" : "border-gray-300 bg-gray-100 hover:border-blue-600"}`}
            >
              <Mail />
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className={`py-8 text-center border-t text-sm ${theme === "dark" ? "border-white/10 text-gray-500" : "border-gray-200 text-gray-600"}`}>
        © 2026 Obed Portfolio • Built with Next.js, Tailwind & Framer Motion
      </footer>
    </div>
  );
}

