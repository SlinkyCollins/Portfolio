"use client"

import emailjs from "@emailjs/browser"
import { Mail, Phone, MapPin, Send } from "lucide-react"
import toast from "react-hot-toast"
import { motion } from "framer-motion"
import { useRef, useState } from "react"

export default function Contact() {
  const formRef = useRef()
  const [isSending, setIsSending] = useState(false)
  const [showSuccessMessage, setShowSuccessMessage] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [errors, setErrors] = useState({})

  const validate = () => {
    const newErrors = {}
    if (!formData.name.trim()) newErrors.name = "Name is required"
    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid"
    }
    if (!formData.subject.trim()) newErrors.subject = "Subject is required"
    if (!formData.message.trim()) newErrors.message = "Message is required"
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const sendEmail = (e) => {
    e.preventDefault()
    if (!validate()) return
    setIsSending(true)
    emailjs
      .sendForm("service_s0hblvr", "template_c5wpjze", formRef.current, {
        publicKey: "uxAFKUbpwytSJOdw1",
      })
      .then(
        (result) => {
          console.log("SUCCESS!", result)
          toast.success("Message sent successfully!")
          setShowSuccessMessage(true)
          setTimeout(() => setShowSuccessMessage(false), 5000) // Hide after 5 secs
          setFormData({ name: "", email: "", subject: "", message: "" })
          formRef.current.reset()
        },
        (error) => {
          console.log("FAILED...", error.text)
          toast.error("Failed to send message. Try again later.")
        },
      )
      .finally(() => setIsSending(false))
  }

  const contactInfo = [
    { icon: Mail, title: "Email", info: "afolabiademola27@gmail.com" },
    { icon: Phone, title: "Phone", info: "+2349037613598" },
    { icon: MapPin, title: "Location", info: "Oyo state, NG" },
  ]

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Let's <span className="text-orange-500">Connect</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">
            Whether it's work, collaboration, or a tech chat. I'm just a message away 👇
          </p>
        </motion.div>

        {/* Main content container with improved responsive layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Contact Info Section */}
          <motion.div
            className="order-2 lg:order-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <div className="lg:sticky lg:top-24">
              <h3 className="text-xl sm:text-2xl font-bold mb-6 lg:mb-8">Get in touch</h3>
              <p className="text-gray-400 mb-8 text-sm sm:text-base leading-relaxed">
                I'm open to job offers, freelance gigs, or even just a friendly chat. Got a project or idea? Reach out anytime.
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
            </div>
          </motion.div>

          {/* Contact Form Section */}
          <motion.div
            className="order-1 lg:order-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <div className="bg-slate-800 p-6 sm:p-8 rounded-lg">
              <form ref={formRef} onSubmit={sendEmail} disabled={isSending} className="space-y-6">
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
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    autoComplete="off"
                    required
                    className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg focus:outline-none focus:border-orange-500 transition-colors text-sm sm:text-base"
                    placeholder="Your name"
                  />
                  {errors.name && <p className="text-red-600 text-sm mt-1">{errors.name}</p>}
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
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    autoComplete="off"
                    required
                    className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg focus:outline-none focus:border-orange-500 transition-colors text-sm sm:text-base"
                    placeholder="your.email@example.com"
                  />
                  {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email}</p>}
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1, ease: "easeOut" }}
                  viewport={{ once: true, margin: "-50px" }}
                >
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    autoComplete="off"
                    required
                    className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg focus:outline-none focus:border-orange-500 transition-colors text-sm sm:text-base"
                    placeholder="Let's work together"
                  />
                  {errors.subject && <p className="text-red-600 text-sm mt-1">{errors.subject}</p>}
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
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    autoComplete="off"
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg focus:outline-none focus:border-orange-500 transition-colors resize-none text-sm sm:text-base"
                    placeholder="Your message..."
                  />
                  {errors.message && <p className="text-red-600 text-sm mt-1">{errors.message}</p>}
                </motion.div>

                {showSuccessMessage && (
                  <motion.div
                    className="text-green-400 text-sm sm:text-base font-medium"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    ✅ Message sent successfully. I'll get back to you soon!
                  </motion.div>
                )}

                <motion.button
                  type="submit"
                  disabled={isSending}
                  className={`w-full ${isSending ? "bg-orange-400 cursor-not-allowed" : "bg-orange-500 hover:bg-orange-600 cursor-pointer"}  text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2 text-sm sm:text-base`}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.2, ease: "easeOut" }}
                  viewport={{ once: true, margin: "-50px" }}
                  whileHover={{ opacity: 0.9 }}
                >
                  {isSending ? (
                    <>
                      <svg className="animate-spin w-5 h-5 text-white" fill="none" viewBox="0 0 24 24">
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8v4l3.5-3.5L12 0v4a8 8 0 00-8 8h4z"
                        ></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}