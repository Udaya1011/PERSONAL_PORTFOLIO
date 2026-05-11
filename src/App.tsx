import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import {
  FiMenu, FiX, FiGithub, FiLinkedin, FiInstagram,
  FiMail, FiPhone, FiMapPin, FiExternalLink, FiArrowUp, FiDownload
} from 'react-icons/fi';
import { HiSparkles } from 'react-icons/hi';
import { IoInfinite } from 'react-icons/io5';
import {
  SiReact, SiHtml5, SiCss, SiJavascript, SiNodedotjs,
  SiExpress, SiMongodb, SiGit, SiPostman, SiTailwindcss,
  SiFirebase, SiCloudinary, SiFigma
} from 'react-icons/si';

// --- Navbar Component ---
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = ['Home', 'About', 'Skills', 'Projects', 'Contact'];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'py-4 glass-card border-b border-gray-800' : 'py-6 bg-transparent'}`}>
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <a href="#home" className="text-2xl font-bold tracking-tighter text-white">
          Udaya<span className="font-normal text-gray-500"></span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          <ul className="flex gap-6 font-medium text-sm uppercase tracking-wide">
            {navLinks.map((link) => (
              <li key={link}>
                <a href={`#${link.toLowerCase()}`} className="text-gray-400 hover:text-white transition-colors">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:hidden flex items-center gap-4">
          <button onClick={() => setIsOpen(!isOpen)} className="text-2xl text-white">
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full glass-card flex flex-col items-center py-6 gap-4 md:hidden border-t border-gray-800"
          >
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
                className="text-lg font-medium text-gray-400 hover:text-white transition-colors"
              >
                {link}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

// --- Hero Component ---
const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-20 pb-40 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 flex flex-col-reverse md:flex-row items-center min-h-[calc(100vh-80px)] py-12 md:py-0">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 text-center md:text-left mt-12 md:mt-0"
        >
          <h2 className="text-xl md:text-2xl font-medium text-gray-400 mb-2">Hello, I'm</h2>
          <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight text-white">
            Udayakumar D
          </h1>
          <h3 className="text-2xl md:text-3xl font-semibold mb-6 h-10 text-gray-300">
            <Typewriter
              words={['Full Stack Developer', 'UI/UX Engineer']}
              loop={true}
              cursor
              cursorStyle='|'
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </h3>
          <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl leading-relaxed">
            Passionate IT fresher crafting elegant, responsive, and highly-performant web & mobile applications with a minimalist approach.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a href="#projects" className="px-8 py-3 bg-white text-black rounded-full font-bold transition-all hover:bg-gray-200 w-full sm:w-auto text-center border border-white">
              View Projects
            </a>
            <a 
              href="/UDAYAKUMAR D (3) (1).pdf" 
              target="_blank"
              className="px-8 py-4 glass-card rounded-full font-bold text-white border border-gray-700 hover:border-white transition-all flex items-center justify-center gap-2 group"
            >
              <FiDownload className="group-hover:translate-y-1 transition-transform" /> View Resume
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-1 flex justify-center mb-8 md:mb-0"
        >
          <div className="relative w-48 h-48 md:w-[350px] md:h-[350px]">
            <div className="absolute inset-0 bg-white/5 rounded-full blur-2xl animate-pulse"></div>
            <div className="relative w-full h-full rounded-full border-2 border-white/10 overflow-hidden bg-dark-800 shadow-2xl group">
              <img
                src="/images/newprofile2.jpg"
                alt="Udayakumar"
                className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"
                onError={(e) => { e.currentTarget.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop" }}
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Integrated Double-Row Marquee pinned to absolute bottom */}
      <div className="absolute bottom-8 left-0 w-full py-4 border-t border-gray-800/30 overflow-hidden space-y-1">
        {/* Row 1: Left Scroll */}
        <div className="flex whitespace-nowrap animate-marquee">
          {[
            "Developer Portfolio", "Lyrics Studio", "Travellian",
            "Air Ambulance Service", "HMS - Hospital Management",
            "RVSCAS ACADEMIC PORTAL", "AI Lyricist Portfolio",
            "TexTrack QC", "Yolo Messenger"
          ].concat([
            "Developer Portfolio", "Lyrics Studio", "Travellian",
            "Air Ambulance Service", "HMS - Hospital Management",
            "RVSCAS ACADEMIC PORTAL", "AI Lyricist Portfolio",
            "TexTrack QC", "Yolo Messenger"
          ]).map((name, i) => (
            <div key={i} className="flex items-center gap-6 px-6 group">
              <a 
                href={`#${name.toLowerCase().replace(/\s+/g, '-')}`}
                className="text-xl md:text-3xl font-black text-transparent stroke-text opacity-20 group-hover:opacity-100 group-hover:text-white transition-all duration-500 uppercase tracking-tighter"
              >
                {name}
              </a>
              <div className="w-1.5 h-1.5 rounded-full bg-white opacity-10"></div>
            </div>
          ))}
        </div>

        {/* Row 2: Right Scroll (Reverse) */}
        <div className="flex whitespace-nowrap animate-marquee-reverse">
          {[
            "Yolo Messenger", "TexTrack QC", "AI Lyricist Portfolio",
            "RVSCAS ACADEMIC PORTAL", "HMS - Hospital Management",
            "Air Ambulance Service", "Travellian", "Lyrics Studio",
            "Developer Portfolio"
          ].concat([
            "Yolo Messenger", "TexTrack QC", "AI Lyricist Portfolio",
            "RVSCAS ACADEMIC PORTAL", "HMS - Hospital Management",
            "Air Ambulance Service", "Travellian", "Lyrics Studio",
            "Developer Portfolio"
          ]).map((name, i) => (
            <div key={i} className="flex items-center gap-6 px-6 group">
              <a 
                href={`#${name.toLowerCase().replace(/\s+/g, '-')}`}
                className="text-xl md:text-3xl font-black text-transparent stroke-text opacity-10 group-hover:opacity-100 group-hover:text-white transition-all duration-500 uppercase tracking-tighter"
              >
                {name}
              </a>
              <div className="w-1.5 h-1.5 rounded-full bg-white opacity-5"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- About Component ---
const About = () => {
  return (
    <section id="about" className="py-24 bg-dark-900 border-y border-gray-800">
      <div className="container mx-auto px-6 md:px-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-16 text-white"
        >
          About Me
        </motion.h2>

        <div className="flex flex-col lg:flex-row gap-12 mt-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 w-full"
          >
            <h3 className="text-2xl font-bold mb-6 text-white flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-sm italic">Edu</span> Education
            </h3>
            <div className="space-y-6">
              {[
                { deg: 'Master of Computer Applications', inst: 'RVS College Of Arts & Science, Coimbatore', year: '2024 - 2026', score: 'CGPA: 8.4' },
                { deg: 'Bachelor of Computer Applications', inst: 'RVS College Of Arts & Science, Coimbatore', year: '2021 - 2024', score: 'CGPA: 7.7' },
                { deg: 'HSC (Business Mathematics)', inst: 'Migross Kids Matriculation Hr Sec School, Tiruppur', year: '2019 - 2021', score: '71.9%' },
              ].map((item, i) => (
                <div key={i} className="relative pl-6 border-l-2 border-gray-800 hover:border-white transition-colors group">
                  <div className="absolute w-2 h-2 bg-gray-800 rounded-full -left-[5px] top-2 group-hover:bg-white transition-colors"></div>
                  <h4 className="text-lg font-bold text-white">{item.deg}</h4>
                  <p className="text-sm text-gray-400">{item.inst} | {item.year}</p>
                  <p className="text-sm font-bold mt-1 text-gray-300">{item.score}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 w-full"
          >
            <h3 className="text-2xl font-bold mb-6 text-white flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-sm italic">Exp</span> Experience
            </h3>
            <div className="space-y-8">
              <div className="relative pl-6 border-l-2 border-gray-800 hover:border-white transition-colors group">
                <div className="absolute w-2 h-2 bg-gray-800 rounded-full -left-[5px] top-2 group-hover:bg-white transition-colors"></div>
                <div className="flex justify-between items-start mb-1">
                  <h4 className="text-xl font-bold text-white leading-tight">Full Stack Developer Intern <br/> & Frontend Team Lead</h4>
                  <span className="text-xs font-bold px-3 py-1 bg-white/5 rounded-full text-gray-400 border border-white/10 italic">Internship</span>
                </div>
                <p className="text-sm text-gray-400 mb-4 font-medium tracking-wide">Movi Cloud Labs | Dec 2025 - Feb 2026</p>
                <div className="mb-4">
                  <a href="/resume/UDAYA (1).pdf" target="_blank" className="text-xs font-bold text-white px-3 py-1.5 bg-white/10 rounded-lg border border-white/20 hover:bg-white hover:text-black transition-all inline-flex items-center gap-2">
                    View Certificate
                  </a>
                </div>
                <ul className="text-sm text-gray-500 space-y-2 list-none">
                  <li className="flex gap-2">
                    <span className="text-white opacity-20 mt-1">•</span>
                    <span><strong>Frontend Leadership:</strong> Led a development team to design and implement enterprise-level UI systems for Air Ambulance & HMS.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-white opacity-20 mt-1">•</span>
                    <span><strong>Full Stack Integration:</strong> Developed end-to-end features including real-time flight tracking, dynamic billing engines, and secure database schemas.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-white opacity-20 mt-1">•</span>
                    <span><strong>System Architecture:</strong> Optimized role-based access controls and complex workflow automation for specialized medical environments.</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// --- Skills Component ---
const Skills = () => {
  const categories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "React.js", icon: <SiReact /> },
        { name: "React Native", icon: <SiReact /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss /> },
        { name: "HTML5", icon: <SiHtml5 /> },
        { name: "CSS3", icon: <SiCss /> },
        { name: "JavaScript", icon: <SiJavascript /> },
      ]
    },
    {
      title: "Backend & Database",
      skills: [
        { name: "Node.js", icon: <SiNodedotjs /> },
        { name: "Express.js", icon: <SiExpress /> },
        { name: "MongoDB", icon: <SiMongodb /> },
        { name: "Firebase", icon: <SiFirebase /> },
        { name: "Cloudinary", icon: <SiCloudinary /> },
      ]
    },
    {
      title: "Tools & Version Control",
      skills: [
        { name: "Git", icon: <SiGit /> },
        { name: "Postman", icon: <SiPostman /> },
        { name: "Figma", icon: <SiFigma /> },
      ]
    }
  ];

  return (
    <section id="skills" className="py-24 bg-dark-900 border-y border-gray-800">
      <div className="container mx-auto px-6 md:px-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-16 text-white"
        >
          My Skills
        </motion.h2>

        <div className="flex flex-col">
          {categories.map((cat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col md:flex-row items-start md:items-center py-12 border-b border-gray-800 last:border-b-0 gap-8 md:gap-16 group"
            >
              <div className="md:w-1/3 shrink-0">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-500 group-hover:text-white transition-colors">{cat.title}</h3>
              </div>

              <div className="md:w-2/3 flex flex-wrap gap-6">
                {cat.skills.map((skill, j) => (
                  <div key={j} className="flex flex-col items-center gap-3 w-20 md:w-24">
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-dark-800 border border-gray-700 flex items-center justify-center text-3xl md:text-4xl text-gray-400 hover:text-white hover:bg-dark-700 hover:border-white transition-all duration-300 shadow-md hover:-translate-y-2 hover:shadow-[0_10px_20px_rgba(255,255,255,0.05)] cursor-default">
                      {skill.icon}
                    </div>
                    <span className="font-bold text-xs tracking-wider text-gray-500 text-center uppercase">{skill.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Projects Component ---
const Projects = () => {
  const projects = [
    { title: "Developer Portfolio", desc: "A highly optimized, professional portfolio built with a strict monochrome design. Features glassmorphism UI, smooth scroll animations, and interactive components designed for maximum performance.", tech: ["React.js", "Tailwind CSS", "Framer Motion"], img: "/images/portfolio-preview.png", live: "https://udaya-portfolio.onrender.com", repo: "https://github.com/Udaya1011/react-portfolio" },
    { title: "Lyrics Studio", desc: "A personal lyrics management app built for a songwriter who wanted a dedicated space to write, save, and revisit their songs anytime, anywhere. Features a clean reader mode to showcase lyrics beautifully on any device.", tech: ["React.js", "Node.js"], img: "/images/lyrics-studio.png", live: "https://lyric-client.onrender.com/", repo: "#" },
    { title: "Travellian", desc: "A travel portfolio single page application built during internship training using Figma designs. A clean and visually rich travel experience showcase with modern UI components.", tech: ["React.js", "Figma"], img: "/images/travellian.jpg", live: "https://travellian.onrender.com", repo: "#", company: "IT Boomi", companyLink: "https://itboomi.com/", companyIcon: "/images/it-boomi-icon.png" },
    { title: "Air Ambulance Service", desc: "Developed the frontend admin module during an internship for an Air Ambulance management platform. Responsible for building dashboards to manage hospitals, users, and billing operations. Implemented real-time flight tracking between locations with an automated billing system that calculates charges dynamically.", tech: ["React.js"], img: "/images/air-ambulance.png", live: "https://air-ambulance-frontend-7i8i.onrender.com/#/login", repo: "#", company: "Movi Cloud", companyLink: "https://www.movicloudlabs.com/", companyIcon: "/images/movi-cloud-icon.png" },
    { title: "HMS - Hospital Management System", desc: "A comprehensive internship project involving a full frontend redesign and bug optimization of a hospital management system. Developed specialized role-based modules for Doctors, Pharmacists, and Pathologists to streamline clinical workflows and data management.", tech: ["React.js"], img: "/images/movi-hospital.png", live: "https://hms-dev-2.onrender.com/", repo: "#", company: "Movi Cloud", companyLink: "https://www.movicloudlabs.com/", companyIcon: "/images/movi-cloud-icon.png" },
    { title: "RVSCAS ACADEMIC PORTAL", desc: "My final year semester project: A robust Student-Teacher portal with administrative control. Features advanced biometric Face ID login, integrated real-time messenger (Call/Video/Chat), and an automated slot booking system for academic appointments. Includes modules for study material management, attendance tracking, and secure file sharing.", tech: ["React.js", "Node.js"], img: "/images/rvscas-portal.png", live: "https://rvscas-portal.onrender.com", repo: "#", doc: "/UDAYA[1P24MC056].pdf" },
    { title: "AI Lyricist Portfolio", desc: "A personal showcase for my work as a lyricist. Built with Cloudinary and Next.js, this platform integrates AI music to transform my original lyrics into fully produced songs with professional vocals and compositions, bridging the gap between songwriting and studio production.", tech: ["Cloudinary", "Next.js"], img: "/images/lyricist-portfolio.png", live: "https://udaya-lyricist.onrender.com/", repo: "#", isAI: true, aiLink: "https://suno.com/" },
    { title: "TexTrack QC", desc: "A specialized automation platform designed for the textile hub of Tirupur. It digitizes the manual inspection process for T-shirt manufacturing, automatically generating detailed quality control reports, final inspection summaries, and digital billing, replacing inefficient handwritten documentation.", tech: ["React.js"], img: "/images/textrack-qc.png", live: "https://report-ed7x.onrender.com/", repo: "#" },
    { title: "Yolo Messenger", desc: "A premier full-stack real-time communication platform with fully functional Web and Mobile applications. Features integrated Biometric Authentication (Face ID & Fingerprint), WebRTC-powered audio/video calls, and cross-platform push notifications via FCM. Engineered for high performance with a scalable real-time architecture, ensuring instant messaging and call alerts across all devices.", tech: ["React.js", "Tailwind CSS", "Node.js", "MongoDB", "WebRTC", "Socket.io", "Firebase (FCM)", "Cloudinary"], img: "/images/yolo-messenger.png", live: "https://tharkurizsss.onrender.com/", repo: "#" },
  ];

  return (
    <section id="projects" className="py-24 bg-dark-900 border-y border-gray-800">
      <div className="container mx-auto px-6 md:px-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-16 text-white"
        >
          Selected Projects
        </motion.h2>

        <div className="space-y-32">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              id={project.title.toLowerCase().replace(/\s+/g, '-')}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-20 items-center`}
            >
              {/* Image Block */}
              <div className="w-full lg:w-1/2 group">
                <div className="relative h-64 sm:h-80 lg:h-[420px] rounded-3xl overflow-hidden border border-gray-800 bg-dark-900 shadow-2xl">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none"></div>
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-full object-contain p-4 filter grayscale transition-all duration-700 group-hover:grayscale-0"
                    onError={(e) => { e.currentTarget.src = "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop" }}
                  />
                </div>
              </div>

              {/* Content Block */}
              <div className="w-full lg:w-1/2 flex flex-col justify-center">
                <div className="space-y-3 mb-8">
                  <p className="text-gray-500 font-bold tracking-[0.2em] text-xs uppercase">Featured Project 0{i + 1}</p>
                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight">{project.title}</h3>
                </div>

                <p className="text-gray-400 text-base md:text-lg leading-relaxed border-l-2 border-gray-700 pl-6 mb-8">
                  {project.desc}
                </p>

                <div className="flex flex-wrap gap-3 mb-10">
                  {project.tech.map((tag: string) => (
                    <span key={tag} className="text-xs font-bold px-4 py-2 bg-dark-800 text-gray-300 rounded-lg border border-gray-700 uppercase tracking-widest">{tag}</span>
                  ))}
                </div>

                <div className="flex flex-wrap items-center gap-8 pt-6 border-t border-gray-800">
                  <a href={project.live} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-white hover:text-gray-300 transition-colors group">
                    <div className="w-12 h-12 rounded-full border border-gray-600 flex items-center justify-center group-hover:border-white transition-colors bg-dark-800">
                      <FiExternalLink className="text-xl" />
                    </div>
                    <span className="font-bold text-xs uppercase tracking-widest">Live Preview</span>
                  </a>

                  {project.doc && (
                    <a href={project.doc} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-white hover:text-gray-300 transition-colors group">
                      <div className="w-12 h-12 rounded-full border border-gray-600 flex items-center justify-center group-hover:border-white transition-colors bg-dark-800">
                        <FiDownload className="text-xl" />
                      </div>
                      <span className="font-bold text-xs uppercase tracking-widest">View Documentation</span>
                    </a>
                  )}

                  {project.isAI && (
                    <a href={project.aiLink} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-white hover:text-gray-300 transition-colors group/ai">
                      <div className="w-12 h-12 rounded-full border border-gray-600 flex items-center justify-center bg-dark-800 group-hover/ai:border-white transition-colors">
                        <HiSparkles className="text-xl transition-colors" />
                      </div>
                      <span className="font-bold text-xs uppercase tracking-widest">AI Music</span>
                    </a>
                  )}

                  {project.company && (
                    <a href={project.companyLink} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-white hover:text-gray-300 transition-colors group/intern">
                      <div className="w-12 h-12 rounded-full border border-gray-600 flex items-center justify-center bg-dark-800 group-hover/intern:border-white transition-colors">
                        {project.company === 'IT Boomi' ? (
                          <IoInfinite className="text-xl" />
                        ) : project.company === 'Movi Cloud' ? (
                          <SiCloudinary className="text-xl" />
                        ) : (
                          <span className="text-xs font-black uppercase tracking-tighter">{project.company.charAt(0)}</span>
                        )}
                      </div>
                      <span className="font-bold text-xs uppercase tracking-widest">Intern: {project.company}</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Contact Component ---
const Contact = () => {
  const [status, setStatus] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    const name = formData.get('NAME');
    const email = formData.get('E-MAIL');
    const message = formData.get('MESSAGE');

    // Format the WhatsApp message
    const waText = `Hello Udayakumar,\n\n*Name:* ${name}\n*Email:* ${email}\n*Message:* ${message}`;
    const encodedText = encodeURIComponent(waText);

    // Redirect to WhatsApp
    window.open(`https://wa.me/916382666150?text=${encodedText}`, '_blank');

    setStatus('Redirecting to WhatsApp...');
    setTimeout(() => {
      setStatus('');
      form.reset();
    }, 3000);
  };

  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-6 md:px-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-16 text-white"
        >
          Get in Touch
        </motion.h2>

        <div className="flex flex-col lg:flex-row gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 space-y-8"
          >
            <h3 className="text-2xl font-bold text-white">Let's discuss your project</h3>
            <p className="text-gray-400">I'm currently available for a full-time role. If you have an opportunity or just want to say hi, my inbox is always open!</p>

            <div className="flex flex-col gap-6">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1 glass-card p-4 rounded-xl border border-gray-700 bg-dark-800/30 flex items-center gap-4 hover:border-gray-500 transition-colors">
                  <div className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center text-white shrink-0"><FiMail size={16} /></div>
                  <div className="overflow-hidden text-left">
                    <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-0.5">Email</p>
                    <p className="font-bold text-white text-sm truncate">udaya.fullstack@gmail.com</p>
                  </div>
                </div>
                <div className="flex-1 glass-card p-4 rounded-xl border border-gray-700 bg-dark-800/30 flex items-center gap-4 hover:border-gray-500 transition-colors">
                  <div className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center text-white shrink-0"><FiPhone size={16} /></div>
                  <div className="text-left">
                    <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-0.5">Phone</p>
                    <p className="font-bold text-white text-sm">+91 6382666150</p>
                  </div>
                </div>
              </div>

              {/* Map Container */}
              <div className="glass-card rounded-2xl border border-gray-700 overflow-hidden relative h-64 w-full">
                <iframe
                  src="https://maps.google.com/maps?q=11.107000,77.327015&hl=en&z=15&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'grayscale(1) invert(0.9) contrast(0.8)' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Tirupur Location"
                ></iframe>
                <div className="absolute top-4 left-4 glass-card px-4 py-2 rounded-full border border-gray-600 flex items-center gap-2 pointer-events-none shadow-lg">
                  <FiMapPin className="text-white" />
                  <span className="text-xs font-bold text-white">219, Kallampalayam, Tirupur</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <form onSubmit={handleSubmit} className="glass-card p-8 rounded-2xl space-y-6 border border-gray-700 bg-dark-900">
              <div>
                <label className="block text-sm font-bold mb-2 text-white uppercase tracking-wider">Name</label>
                <input type="text" name="NAME" required className="w-full px-4 py-3 bg-dark-800 border border-gray-700 rounded-lg focus:outline-none focus:border-white transition-colors text-white" placeholder="John Doe" />
              </div>
              <div>
                <label className="block text-sm font-bold mb-2 text-white uppercase tracking-wider">Email</label>
                <input type="email" name="E-MAIL" required className="w-full px-4 py-3 bg-dark-800 border border-gray-700 rounded-lg focus:outline-none focus:border-white transition-colors text-white" placeholder="john@example.com" />
              </div>
              <div>
                <label className="block text-sm font-bold mb-2 text-white uppercase tracking-wider">Message</label>
                <textarea name="MESSAGE" required rows={4} className="w-full px-4 py-3 bg-dark-800 border border-gray-700 rounded-lg focus:outline-none focus:border-white transition-colors text-white" placeholder="Your message here..."></textarea>
              </div>
              <button type="submit" className="w-full py-3 bg-white text-black font-bold rounded-lg transition-colors hover:bg-gray-300 border border-white uppercase tracking-widest">
                Send via WhatsApp
              </button>
              {status && <p className="text-center font-bold text-green-400">{status}</p>}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// --- Footer Component ---
const Footer = () => {
  return (
    <footer className="border-t border-gray-800 py-8 text-center bg-dark-900">
      <div className="flex justify-center gap-6 mb-6">
        <a href="https://github.com/Udaya1011" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-white transition-colors text-xl"><FiGithub /></a>
        <a href="https://www.linkedin.com/in/udayakumar-d-8471b430b" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-white transition-colors text-xl"><FiLinkedin /></a>
        <a href="https://www.instagram.com/k_i_n_g__m_a_k_er/?igsh=cHFnYW5pMG5wdGNy" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-white transition-colors text-xl"><FiInstagram /></a>
      </div>
      <p className="text-gray-500 font-medium text-sm">
        &copy; {new Date().getFullYear()} Udayakumar. All rights reserved.
      </p>
    </footer>
  );
};

// --- Loading Screen Component ---
const LoadingScreen = () => (
  <div className="fixed inset-0 z-[100] flex items-center justify-center bg-dark-900">
    <div className="w-16 h-16 border-4 border-dark-700 border-t-white rounded-full animate-spin"></div>
  </div>
);

// --- Main App Component ---
function App() {
  const [loading, setLoading] = useState(true);
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    // Simulate Loading
    const timer = setTimeout(() => setLoading(false), 1500);

    // Back to Top listener
    const handleScroll = () => {
      if (window.scrollY > 400) setShowTopBtn(true);
      else setShowTopBtn(false);
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  if (loading) return <LoadingScreen />;

  return (
    <div className="min-h-screen bg-dark-900 text-white selection:bg-white selection:text-black">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />

      {/* Back to Top Button */}
      <AnimatePresence>
        {showTopBtn && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 w-12 h-12 bg-white text-black rounded-full flex items-center justify-center shadow-lg hover:bg-gray-300 border border-white transition-colors z-50"
          >
            <FiArrowUp size={24} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
