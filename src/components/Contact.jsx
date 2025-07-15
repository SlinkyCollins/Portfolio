"use client"

import { useState } from "react"

import { Mail, Phone, MapPin, Send } from "lucide-react"
import { motion } from "framer-motion"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
    // Reset form
    setFormData({ name: "", email: "", message: "" })
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const contactInfo = [
    { icon: Mail, title: "Email", info: "collynx@example.com" },
    { icon: Phone, title: "Phone", info: "+1 (555) 123-4567" },
    { icon: MapPin, title: "Location", info: "San Francisco, CA" },
  ]

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get In <span className="text-orange-500">Touch</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">
            Have a project in mind or want to collaborate? I'd love to hear from you. Let's create something amazing
            together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <h3 className="text-xl sm:text-2xl font-bold mb-6">Let's talk about your project</h3>
            <p className="text-gray-400 mb-8 text-sm sm:text-base">
              I'm always interested in new opportunities and exciting projects. Whether you have a question or just want
              to say hi, feel free to reach out.
            </p>

            <div className="space-y-6">
              {contactInfo.map((contact, index) => {
                const IconComponent = contact.icon
                return (
                  <motion.div
                    key={index}
                    className="flex items-center gap-4"
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.05, ease: "easeOut" }}
                    viewport={{ once: true, margin: "-50px" }}
                  >
                    <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm sm:text-base">{contact.title}</h4>
                      <p className="text-gray-400 text-sm sm:text-base">{contact.info}</p>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          <motion.div
            className="bg-slate-800 p-6 sm:p-8 rounded-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.05, ease: "easeOut" }}
                viewport={{ once: true, margin: "-50px" }}
              >
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg focus:outline-none focus:border-orange-500 transition-colors text-sm sm:text-base"
                  placeholder="Your name"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1, ease: "easeOut" }}
                viewport={{ once: true, margin: "-50px" }}
              >
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg focus:outline-none focus:border-orange-500 transition-colors text-sm sm:text-base"
                  placeholder="your.email@example.com"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.15, ease: "easeOut" }}
                viewport={{ once: true, margin: "-50px" }}
              >
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg focus:outline-none focus:border-orange-500 transition-colors resize-none text-sm sm:text-base"
                  placeholder="Tell me about your project..."
                />
              </motion.div>

              <motion.button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2 text-sm sm:text-base"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.2, ease: "easeOut" }}
                viewport={{ once: true, margin: "-50px" }}
                whileHover={{ opacity: 0.9 }}
              >
                <Send size={20} />
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
