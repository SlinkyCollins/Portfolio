"use client"
import pfp from "@/assets/pfp4.jpg"
import { IoLogoFirebase } from "react-icons/io5";
import { SiRedux } from "react-icons/si";
import { FaDocker } from "react-icons/fa";
import { BiLogoMongodb } from "react-icons/bi";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaBootstrap } from "react-icons/fa";
import { GrGraphQl } from "react-icons/gr";
import { FaAws } from "react-icons/fa";
import { FaSass } from "react-icons/fa";
import { SiWebpack } from "react-icons/si";
import { SiJest } from "react-icons/si";
import { SiPostman } from "react-icons/si";
import { motion } from "framer-motion"

export default function About() {
  const stats = [
    { number: "50+", label: "Completed Projects" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "3+", label: "Years Experience" },
  ]

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

  const currentlyUsing = {
    Languages: ["JavaScript", "TypeScript", "PHP", "HTML", "CSS"],
    Frameworks: ["React", "Vue", "Angular", "Next.js"],
    Backend: ["Node.js", "Express", "Laravel", "MySQL"],
    Tools: ["Git", "GitHub", "VS Code", "Figma"],
  }

  const familiarWith = [
    { name: "Firebase", icon: IoLogoFirebase },
    { name: "Redux", icon: SiRedux },
    { name: "Docker", icon: FaDocker },
    { name: "MongoDB", icon: BiLogoMongodb },
    { name: "Tailwind", icon: RiTailwindCssFill },
    { name: "Bootstrap", icon: FaBootstrap },
    { name: "GraphQL", icon: GrGraphQl },
    { name: "AWS", icon: FaAws },
    { name: "Sass", icon: FaSass },
    { name: "Webpack", icon: SiWebpack },
    { name: "Jest", icon: SiJest },
    { name: "Postman", icon: SiPostman },
  ]

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="text-orange-500">Me</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <img src={pfp} alt="aboutCollins" width="250" height="250" className="rounded object-cover mx-auto"/>
          </motion.div> */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-6">
              I started my development journey with a passion for creating digital solutions that make a difference.
              Through continuous learning and hands-on experience, I've developed expertise in cutting edge technologies such as NodeJS, React, Angular and Laravel.
            </p>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
              I specialize in building responsive web applications, focusing on clean code, user experience, and
              performance optimization. I deliver web solutions that are both innovative and robust.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 text-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="bg-slate-800 p-4 sm:p-6 rounded-lg"
                variants={itemVariants}
                whileHover={{ y: -2, opacity: 0.95 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              >
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-orange-500 mb-2">{stat.number}</div>
                <div className="text-gray-400 text-xs sm:text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <h3 className="text-xl sm:text-2xl font-bold text-center mb-12">Skills</h3>

          {/* Currently Using Section */}
          <div className="mb-16">
            <motion.h4
              className="text-lg sm:text-xl font-semibold text-orange-500 mb-8 text-center"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              viewport={{ once: true, margin: "-50px" }}
            >
              Currently Using
            </motion.h4>

            <motion.div
              className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              {Object.entries(currentlyUsing).map(([category, skills], index) => (
                <motion.div
                  key={category}
                  className="bg-slate-800/50 rounded-lg p-4 sm:p-6 border border-slate-700"
                  variants={itemVariants}
                  whileHover={{ y: -2, opacity: 0.95 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                >
                  <h5 className="font-semibold text-white mb-4 text-sm sm:text-base">{category}</h5>
                  <ul className="space-y-2">
                    {skills.map((skill, skillIndex) => (
                      <motion.li
                        key={skill}
                        className="text-gray-300 text-sm"
                        initial={{ opacity: 0, x: -5 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.02 + skillIndex * 0.01, ease: "easeOut" }}
                        viewport={{ once: true, margin: "-50px" }}
                      >
                        {skill}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Familiar With Section */}
          <div>
            <motion.h4
              className="text-lg sm:text-xl font-semibold text-orange-500 mb-8 text-center"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              viewport={{ once: true, margin: "-50px" }}
            >
              Familiar With
            </motion.h4>

            <motion.div
              className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4 sm:gap-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              {familiarWith.map((tech, index) => {
                const IconComponent = tech.icon
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
                )
              })}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
