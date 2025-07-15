"use client"

import { motion } from "framer-motion"

export default function Hero() {
  const scrollToProjects = () => {
    const element = document.getElementById("projects")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16">
      <div className="max-w-screen-xl mx-auto w-full px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-4 lg:gap-6 items-center">
          {/* === Text Section === */}
          <motion.div
            className="text-center lg:text-left order-2 lg:order-1 lg:ml-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            >
              Hi, I'm <span className="text-orange-500">Collins</span>
              <span className="text-orange-500">.</span>
            </motion.h1>

            <motion.p
              className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-6"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            >
              Full Stack Developer
            </motion.p>

            <motion.p
              className="text-gray-400 mb-8 max-w-lg mx-auto lg:mx-0 text-sm sm:text-base"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            >
              I create modern web applications with clean code and beautiful user experiences. Passionate about turning
              ideas into digital reality.
            </motion.p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <motion.button
                onClick={scrollToProjects}
                className="bg-orange-500 hover:bg-orange-600 text-white px-6 sm:px-8 py-3 rounded-lg font-semibold transition-colors text-sm sm:text-base cursor-pointer"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                whileHover={{ opacity: 0.9 }}
              >
                View Projects
              </motion.button>
              <motion.a
                href="/resume.pdf"
                download="resume.pdf"
                className="border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-6 sm:px-8 py-3 rounded-lg font-semibold transition-colors text-sm sm:text-base flex items-center justify-center cursor-pointer"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
                whileHover={{ opacity: 0.9 }}
              >
                My Resume
              </motion.a>
            </div>
          </motion.div>

          {/* === Profile Image Section === */}
          <motion.div
            className="flex justify-center lg:justify-end order-1 lg:order-2 lg:mr-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            <div className="relative">
              <motion.div
                className="w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full bg-gradient-to-r from-orange-500 to-red-500 p-1"
                whileHover={{ opacity: 0.95 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <div className="w-full h-full rounded-full bg-slate-900 p-1">
                  <div className="w-full h-full rounded-full overflow-hidden">
                    <img
                      src="/src/assets/pfp2.jpg"
                      alt="Collins Afolabi - Full Stack Developer"
                      width={400}
                      height={400}
                      className="w-full h-full object-cover"
                      priority
                    />
                  </div>
                </div>
              </motion.div>

              {/* Subtle Dancing Arrows */}
              <motion.div
                className="absolute -top-4 -right-4 w-6 h-6 sm:w-8 sm:h-8 border-2 border-orange-500 rotate-45 hidden sm:block"
                animate={{ rotate: [45, 55, 45], x: [0, 8, 0], y: [0, -8, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                className="absolute -bottom-4 -left-4 w-4 h-4 sm:w-6 sm:h-6 border-2 border-orange-500 rotate-45 hidden sm:block"
                animate={{ rotate: [45, 35, 45], x: [0, -8, 0], y: [0, 8, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
