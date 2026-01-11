import { ExternalLink, Github } from "lucide-react"
import { motion } from "framer-motion"

export default function Projects() {
  const projects = [
    {
      title: "JobNet",
      description:
        "A full-stack recruitment engine solving the 'Identity Gap' by merging Social Login (Firebase) with strict SQL Relational Data. Features a custom Dual-Pipeline Auth system and a real-time Currency Normalization Engine for global salary filtering.",
      tech: ["Angular 18", "PHP 8.2", "MySQL", "Firebase Auth", "Docker"],
      codeUrl: "https://github.com/SlinkyCollins/job-portal-frontend",
      liveUrl: "https://jobnet.vercel.app/",
      image: "/images/projects/jobnet.png"
    },
    {
      title: "NairaNest (Bank App)", // Renamed to match the brand
      description:
        "A simulation of a core banking infrastructure handling ACID-compliant transactions using MongoDB Sessions. Implements custom rate-limiting security, role-based access (RBAC), and real-time visual analytics for income tracking.",
      tech: ["React", "Redux Toolkit", "Node.js", "MongoDB", "Material UI"],
      codeUrl: "https://github.com/SlinkyCollins/Bank-App",
      liveUrl: "https://nairanest.vercel.app/",
      image: "/images/projects/bank.png"
    },
    {
      title: "Perform-MD",
      description:
        "A patient management portal for a pain clinic designed to streamline appointment booking. Features complex form handling for patient intake, scheduling logic, and a responsive dashboard for medical practitioners.",
      tech: ["Next.js 14", "TypeScript", "Tailwind CSS", "GraphQL"],
      codeUrl: "https://github.com/SlinkyCollins/Perform-Md",
      liveUrl: "https://performmd.vercel.app/schedule",
      image: "/images/projects/performmd.png",
      status: "ongoing",
    },
    {
      title: "Phone OS Simulator",
      description:
        "A browser-based phone operating system simulation built entirely with Vanilla JavaScript. Features a Regex-based USSD engine for validating airtime vouchers, a physics-based game using the Canvas API, and real-time media integration for the Camera and Music apps.",
      tech: ["Vanilla JavaScript", "Canvas API", "Webcam API", "LocalStorage", "CSS3"],
      codeUrl: "https://github.com/SlinkyCollins/Phone-App",
      liveUrl: "https://slinkycollins.github.io/Phone-App/",
      image: "/images/projects/phone.png"
    },
    {
      title: "Van Life",
      description:
        "A travel rental marketplace for digital nomads. Implements dynamic route protection, complex data filtering for van types, and a server-mirrored API structure for handling bookings and host listings.",
      tech: ["React Router 6", "MirageJS", "Firebase", "CSS Modules"],
      codeUrl: "https://github.com/SlinkyCollins/Van-Life",
      liveUrl: "https://van-life-flax.vercel.app/",
      image: "/images/projects/vanlife.png"
    },
    {
      title: "Portfolio V1",
      description:
        "A performance-optimized personal site featuring smooth page transitions and interactive motion components. Built with a focus on accessibility, SEO best practices, and clean component architecture.",
      tech: ["React", "Framer Motion", "Tailwind CSS", "EmailJS"],
      codeUrl: "https://github.com/SlinkyCollins/Portfolio",
      liveUrl: "https://collynx.vercel.app/",
      image: "/images/projects/portfolio.png"
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
