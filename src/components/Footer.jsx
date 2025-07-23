import { Github, Linkedin } from "lucide-react"
import { motion } from "framer-motion"
import { BsTwitterX, BsWhatsapp } from "react-icons/bs"

export default function Footer() {
  const socialLinks = [
    { icon: Github, href: "https://github.com/SlinkyCollins", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/afolabi-ademola-851842280/", label: "LinkedIn" },
    { icon: BsTwitterX, href: "https://x.com/collynxcodes", label: "Twitter" },
    { icon: BsWhatsapp, href: "https://wa.me/+2349037613598", label: "Whatsapp" },
  ]

  return (
    <footer className="bg-slate-800 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Collynx</h3>
            <p className="text-gray-400 text-sm sm:text-base">Full Stack Developer</p>
          </div>

          <motion.div
            className="flex space-x-4 sm:space-x-6"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
            viewport={{ once: true, margin: "-50px" }}
          >
            {socialLinks.map((social, index) => {
              const IconComponent = social.icon
              return (
                <motion.a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-slate-700 rounded-lg flex items-center justify-center hover:bg-orange-500 transition-colors"
                  whileHover={{ y: -2, opacity: 0.9 }}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.03, ease: "easeOut" }}
                  viewport={{ once: true, margin: "-50px" }}
                >
                  <IconComponent className="w-5 h-5 text-gray-300 hover:text-white" />
                </motion.a>
              )
            })}
          </motion.div>
        </motion.div>

        <motion.div
          className="border-t border-slate-700 mt-8 pt-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <p className="text-gray-400 text-sm sm:text-base">
            © {new Date().getFullYear()} Collynx. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
