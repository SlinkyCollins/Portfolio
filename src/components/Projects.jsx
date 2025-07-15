"use client"

import { ExternalLink, Github } from "lucide-react"
import { motion } from "framer-motion"

export default function Projects() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce solution with payment integration, user authentication, and admin dashboard.",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      codeUrl: "#",
      liveUrl: "#",
    },
    {
      title: "Task Management App",
      description:
        "A collaborative task management application with real-time updates and team collaboration features.",
      tech: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
      codeUrl: "#",
      liveUrl: "#",
    },
    {
      title: "Weather Dashboard",
      description: "A responsive weather application with location-based forecasts and interactive charts.",
      tech: ["React", "Chart.js", "Weather API", "Tailwind"],
      codeUrl: "#",
      liveUrl: "#",
    },
    {
      title: "Social Media App",
      description: "A social networking platform with real-time messaging, posts, and user profiles.",
      tech: ["React Native", "Firebase", "Redux", "Socket.io"],
      codeUrl: "#",
      liveUrl: "#",
    },
    {
      title: "Portfolio Website",
      description: "A modern portfolio website showcasing projects and skills with smooth animations.",
      tech: ["Next.js", "Framer Motion", "Tailwind", "MDX"],
      codeUrl: "#",
      liveUrl: "#",
    },
    {
      title: "Blog Platform",
      description: "A content management system with markdown support, SEO optimization, and analytics.",
      tech: ["Gatsby", "GraphQL", "Contentful", "Netlify"],
      codeUrl: "#",
      liveUrl: "#",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.06,
        ease: "easeOut",
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  }

  return (
    <section id="projects" className="py-20 px-4 bg-slate-800/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="text-orange-500">Projects</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">
            Here are some of my recent projects that showcase my skills and experience in web development.
          </p>
        </motion.div>

        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-slate-900 rounded-lg p-4 sm:p-6 hover:transform hover:scale-105 transition-all duration-300"
              variants={itemVariants}
              whileHover={{ y: -4, opacity: 0.95 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              <h3 className="text-lg sm:text-xl font-bold mb-3 text-white">{project.title}</h3>
              <p className="text-gray-400 mb-4 text-sm leading-relaxed">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, techIndex) => (
                  <span key={techIndex} className="px-2 sm:px-3 py-1 bg-slate-800 text-orange-500 text-xs rounded-full">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <motion.a
                  href={project.codeUrl}
                  className="flex items-center justify-center gap-2 px-4 py-2 border border-orange-500 text-orange-500 rounded-lg hover:bg-orange-500 hover:text-white transition-colors text-sm"
                  whileHover={{ opacity: 0.9 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                >
                  <Github size={16} />
                  View Code
                </motion.a>
                <motion.a
                  href={project.liveUrl}
                  className="flex items-center justify-center gap-2 px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors text-sm"
                  whileHover={{ opacity: 0.9 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                >
                  <ExternalLink size={16} />
                  Live Demo
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
