import { ExternalLink, Github } from "lucide-react"
import { motion } from "framer-motion"

export default function Projects() {
  const projects = [
    {
      title: "JobNet",
      description:
        "A job portal for tech roles where users can search, apply, and manage jobs, while admins handle postings and applications via their respective dashboards.",
      tech: ["Angular", "PHP", "MySQL", "Bootstrap"],
      codeUrl: "https://github.com/SlinkyCollins/job-portal-frontend",
      liveUrl: "https://jobnet.vercel.app/",
      image: "/images/projects/jobnet.png",
      status: "ongoing", // 🟢 this one’s ongoing
    },
    {
      title: "Printivo Clone",
      description:
        "A front-end clone of the Printivo ecommerce platform, built to mirror UI/UX patterns with responsive design and product browsing.",
      tech: ["React", "Vite", "CSS"],
      codeUrl: "https://github.com/SlinkyCollins/Printivo-Clone",
      liveUrl: "https://printivo-clone-omega.vercel.app/",
      image: "/images/projects/printivo.png",
    },
    {
      title: "Bank Web App",
      description:
        "A digital banking app with user authentication, transaction history, and balance tracking. Built with MERN stack and secure REST APIs.",
      tech: ["React", "Express", "Node.js", "MongoDB"],
      codeUrl: "https://github.com/SlinkyCollins/Bank-App",
      liveUrl: "https://nairanest.vercel.app/",
      image: "/images/projects/bank.png",
      status: "ongoing", // 🟢 this one’s ongoing
    },
    {
      title: "Perform-MD",
      description:
        "A medical web app for a pain management clinic with appointment scheduling and patient booking flow. Built with modern fullstack tools.",
      tech: ["Nextjs", "Tailwind CSS", "GraphQL", "Node.js"],
      codeUrl: "https://github.com/SlinkyCollins/Perform-Md",
      liveUrl: "https://performmd.vercel.app/schedule",
      image: "/images/projects/performmd.png",
      status: "ongoing", // 🟢 this one’s ongoing
    },
    {
      title: "Portfolio Website",
      description:
        "A sleek and animated portfolio site to showcase my skills and projects, built with motion effects and clean responsive design.",
      tech: ["React", "Framer Motion", "Tailwind CSS"],
      codeUrl: "https://github.com/SlinkyCollins/Portfolio",
      liveUrl: "https://collynx.vercel.app/",
      image: "/images/projects/portfolio.png",
    },
    {
      title: "Van Life",
      description:
        "A van listing and rental platform for digital nomads. Features include auth, listings, detail pages, and payment gateway setup.",
      tech: ["React", "Node.js", "Express", "MongoDB"],
      codeUrl: "https://github.com/SlinkyCollins/Van-Life",
      liveUrl: "https://van-life-flax.vercel.app/",
      image: "/images/projects/vanlife.png",
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
            A few projects I've built, ranging from responsive frontends to full-stack platforms. Each one helped me sharpen my craft.
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
              {/* IMAGE SECTION */}
              <div className="mb-4 overflow-hidden rounded-md">
                <img
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  className="w-full h-48 object-cover"
                />
              </div>

              {project.status === "ongoing" && (
                <div className="flex items-center gap-1 mb-2">
                  <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-green-400 text-xs font-medium">Ongoing</span>
                </div>
              )}

              <h3 className="text-lg sm:text-xl font-bold mb-3 text-white">{project.title}</h3>
              <p className="text-gray-400 mb-4 text-sm leading-relaxed">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-2 sm:px-3 py-1 bg-slate-800 text-orange-500 text-xs rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <motion.a
                  href={project.codeUrl}
                  target="_blank"
                  className="flex items-center justify-center gap-2 px-4 py-2 border border-orange-500 text-orange-500 rounded-lg hover:bg-orange-500 hover:text-white transition-colors text-sm"
                  whileHover={{ opacity: 0.9 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                >
                  <Github size={16} />
                  View Code
                </motion.a>
                <motion.a
                  href={project.liveUrl}
                  target="_blank"
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

        <div className="text-center mt-12">
          <motion.a
            href="https://github.com/SlinkyCollins"
            target="_blank"
            className="inline-flex items-center gap-2 px-6 py-3 border border-orange-500 text-orange-500 rounded-lg hover:bg-orange-500 hover:text-white transition-colors text-sm"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <Github size={16} />
            View more on GitHub
          </motion.a>
        </div>

      </div>
    </section>
  )
}
