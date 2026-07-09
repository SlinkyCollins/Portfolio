import { useState } from "react"
import pfp from "@/assets/aboutImg.jpg"
import { IoLogoFirebase } from "react-icons/io5";
import { SiExpress, SiRedux, SiVite } from "react-icons/si";
import { BiLogoMongodb } from "react-icons/bi";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { FaBootstrap, FaFigma, FaNpm, FaReact } from "react-icons/fa";
import { GrGraphQl, GrMysql } from "react-icons/gr";
import { SiWebpack } from "react-icons/si";
import { SiJest } from "react-icons/si";
import { SiPostman } from "react-icons/si";
import { motion } from "framer-motion"
import { FaAngular, FaGitAlt, FaGithub, FaPhp, FaVuejs } from "react-icons/fa6";
import { DiLaravel, DiNodejs, DiVisualstudio } from "react-icons/di";
import { ChevronDown } from "lucide-react";

export default function About() {
  // MOBILE UX: bio is long (5 paragraphs). On mobile we show the first 2 by
  // default and hide the rest behind a "Read more" toggle. Desktop always
  // shows the full bio since there's more room to breathe.
  const [showFullBio, setShowFullBio] = useState(false)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        ease: "easeOut",
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  }

  const techStack = {
    frontend: [
      { name: "React", icon: FaReact },
      { name: "Angular", icon: FaAngular },
      { name: "Vue", icon: FaVuejs },
      { name: "NextJS", icon: RiNextjsFill },
      { name: "Vite", icon: SiVite },
      { name: "Tailwind", icon: RiTailwindCssFill },
      { name: "Bootstrap", icon: FaBootstrap },
      { name: "Redux", icon: SiRedux },
    ],
    backend: [
      { name: "NodeJS", icon: DiNodejs },
      { name: "Express", icon: SiExpress },
      { name: "PHP", icon: FaPhp },
      { name: "Laravel", icon: DiLaravel },
      { name: "Firebase", icon: IoLogoFirebase },
      { name: "GraphQL", icon: GrGraphQl },
      { name: "MongoDB", icon: BiLogoMongodb },
      { name: "MySQL", icon: GrMysql },
    ],
    tools: [
      { name: "Webpack", icon: SiWebpack },
      { name: "Postman", icon: SiPostman },
      { name: "Jest", icon: SiJest },
      { name: "Git", icon: FaGitAlt },
      { name: "GitHub", icon: FaGithub },
      { name: "VS Code", icon: DiVisualstudio },
      { name: "NPM", icon: FaNpm },
      { name: "Figma", icon: FaFigma }
    ],
  };


  return (
    <section id="about" aria-label="About Me" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Meet <span className="text-orange-500">Collins</span>
          </h2>
        </motion.div>

        {/* IMAGE + TEXT  */}
        <div className="grid lg:grid-cols-3 gap-12 items-start mb-18">
          {/* IMAGE */}
          <motion.div
            className="lg:col-span-1 flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <img
              src={pfp}
              alt="aboutCollins"
              width="250"
              height="250"
              className="rounded-xl object-cover shadow-lg border border-slate-700"
            />
          </motion.div>

          <motion.div className="lg:col-span-2">
            {[
              "Yo! I'm Ademola Afolabi Collins — aka Collynx. I'm a Full-Stack Software Engineer from Nigeria 🇳🇬 and a Computer Engineering graduate from LAUTECH.",
              "I build production-ready web applications with a focus on clean architecture, maintainability, and real-world usability. I care less about flashy demos and more about software that works, scales, and remains maintainable long after it's shipped.",
              "Most of my work revolves around designing reliable backend systems and pairing them with intuitive frontend experiences using Vue, React, Angular, Laravel, Node.js, and modern web technologies.",
              "I like my APIs clean, my applications well-tested, and my interfaces smooth. Animations included but only when they improve the experience rather than distract from it.",
              "Outside of coding, I'm a football fan, movie lover, and an Afrobeats enthusiast. If I'm not shipping features, you'll probably find me watching the Premier League or listening to good music.",
            ].map((text, index) => {
              // MOBILE UX: first 2 paragraphs (intro + what I do) always show.
              // Paragraphs 3-5 (the "extra" ones) are hidden on mobile until expanded.
              const isExtra = index >= 2
              return (
                <motion.p
                  key={index}
                  className={`text-gray-300 text-base sm:text-lg leading-relaxed mb-4 last:mb-0 ${
                    isExtra && !showFullBio ? "hidden" : "block"
                  } sm:block`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.1 }}
                  viewport={{ once: true, margin: "-50px" }}
                >
                  {text}
                </motion.p>
              )
            })}

            {/* MOBILE UX: toggle only rendered on mobile — sm+ already shows the full bio. */}
            <button
              type="button"
              onClick={() => setShowFullBio((prev) => !prev)}
              aria-expanded={showFullBio}
              className="mt-1 flex items-center gap-1.5 text-sm font-medium text-orange-400 transition hover:text-orange-300 sm:hidden"
            >
              {showFullBio ? "Show less" : "Read more"}
              <ChevronDown
                size={14}
                className={`transition-transform duration-200 ${showFullBio ? "rotate-180" : ""}`}
              />
            </button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <div>
            <motion.h4
              className="text-xl sm:text-2xl font-bold text-center mb-12"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Tech <span className="text-orange-500">Stack</span>
              </h2>
            </motion.h4>

            {Object.entries(techStack).map(([category, stack]) => (
              <div key={category} className="mb-15">
                <h5 className="text-lg sm:text-xl font-semibold text-orange-400 mb-8 text-center capitalize">
                  {category === "frontend" ? "Frontend" :
                    category === "backend" ? "Backend & Cloud" :
                      "Dev Tools"}
                </h5>

                <motion.div
                  className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4 sm:gap-6"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                >
                  {stack.map((tech, index) => {
                    const IconComponent = tech.icon;
                    return (
                      <motion.div
                        key={index}
                        className="flex flex-col items-center group relative"
                        variants={itemVariants}
                        whileHover={{ y: -3, opacity: 0.9 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                      >
                        <div className="w-12 h-12 sm:w-16 sm:h-16 bg-slate-800 rounded-lg flex items-center justify-center mb-2 group-hover:bg-orange-500 group-hover:shadow-md group-hover:shadow-orange-500/20 transition-all duration-200">
                          <IconComponent className="w-6 h-6 sm:w-8 sm:h-8 text-gray-300 group-hover:text-white transition-colors" />
                        </div>
                        <span className="text-xs sm:text-sm text-gray-400 text-center group-hover:text-orange-400 transition-colors">
                          {tech.name}
                        </span>

                        {/* Tooltip for larger screens */}
                        <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-slate-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none hidden sm:block whitespace-nowrap">
                          {tech.name}
                        </div>
                      </motion.div>
                    );
                  })}
                </motion.div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}