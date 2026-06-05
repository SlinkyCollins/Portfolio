import { ChevronLeft, ChevronRight, ExternalLink, Github } from "lucide-react"
import { motion } from "framer-motion"
import { Swiper, SwiperSlide } from "swiper/react"
import { A11y, Navigation } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"

export default function Projects() {
  const projects = [
    {
      title: "Vaultly (Digital Banking System)",
      description:
        "A digital banking demo built to model core account operations with production-style safeguards. I used Laravel transactions, row-level locking, and deadlock retries to protect deposits, transfers, and withdrawals, then paired it with a Vue 3 SPA that enforces route ownership and keeps transaction records and profile media traceable.",
      tech: ["Vue 3", "Pinia", "Laravel 12", "MySQL", "Sanctum", "Cloudinary", "Vite"],
      codeUrl: "https://github.com/SlinkyCollins/vaultly-frontend",
      liveUrl: "https://vaultlydemo.vercel.app",
      image: "/images/projects/vaultly.png",
    },
    {
      title: "JobNet (Global Recruitment Engine)",
      description:
        "A full-stack recruitment platform built to make global hiring workflows more consistent across authentication and salary discovery. I combined Firebase social login with relational MySQL records through a dual-pipeline auth flow, then added exchange-rate normalization so users can compare roles in local currency without compromising session integrity.",
      tech: ["Angular 18", "PHP 8.2", "MySQL", "Firebase Auth", "Docker"],
      codeUrl: "https://github.com/SlinkyCollins/job-portal-frontend",
      liveUrl: "https://jobnet.vercel.app/",
      image: "/images/projects/jobnet.png",
    },
    {
      title: "NairaNest (Core Banking Infrastructure)",
      description:
        "A banking simulation focused on making financial operations reliable at the application layer. I used MongoDB sessions for atomic multi-document balance updates, then added rate limiting, RBAC, and dashboard analytics so the platform could handle secure account actions while surfacing spending and income trends.",
      tech: ["React", "Redux Toolkit", "Node.js", "MongoDB", "Material UI"],
      codeUrl: "https://github.com/SlinkyCollins/Bank-App",
      liveUrl: "https://nairanest.vercel.app/",
      image: "/images/projects/bank.png",
    },
    {
      title: "Phone OS Simulator (Browser-Based Mobile OS)",
      description:
        "A browser-based phone OS simulation built with Vanilla JavaScript to demonstrate low-level frontend and platform API work without frameworks. It includes app-like state isolation, USSD validation, a Canvas mini game, and a webcam-powered camera feature, all coordinated through DOM state and LocalStorage.",
      tech: ["Vanilla JavaScript", "Canvas API", "Webcam API", "LocalStorage", "CSS3"],
      codeUrl: "https://github.com/SlinkyCollins/Phone-App",
      liveUrl: "https://slinkycollins.github.io/Phone-App/",
      image: "/images/projects/phone.png",
    }
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

  return (
    <section id="projects" className="overflow-x-hidden bg-slate-900/70 px-4 sm:px-6">
      <div className="mx-auto max-w-7xl overflow-hidden">
        <motion.div
          className="mb-10 flex flex-col gap-6 lg:mb-14 lg:flex-row lg:items-end lg:justify-between"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold md:text-4xl">
              My <span className="text-orange-500">Projects</span>
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-300 sm:text-base">
              A curated selection of systems I&apos;ve built across fintech, healthcare, recruitment,
              and interactive frontend experiences. Swipe or use the controls to move through each
              project two at a time.
            </p>
          </div>

          <div className="flex items-center gap-3 self-start lg:self-auto">
            <button
              type="button"
              aria-label="Previous projects"
              className="projects-swiper-prev flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-100 transition hover:border-orange-400 hover:bg-orange-500 hover:text-white cursor-pointer"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              type="button"
              aria-label="Next projects"
              className="projects-swiper-next flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-100 transition hover:border-orange-400 hover:bg-orange-500 hover:text-white cursor-pointer"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </motion.div>

        <motion.div
          className="overflow-hidden"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Swiper
            modules={[Navigation, A11y]}
            navigation={{
              prevEl: ".projects-swiper-prev",
              nextEl: ".projects-swiper-next",
            }}
            slidesPerView={1}
            slidesPerGroup={1}
            spaceBetween={14}
            breakpoints={{
              768: {
                slidesPerView: 2,
                spaceBetween: 18,
              },
              640: {
                spaceBetween: 16,
              },
              1280: {
                slidesPerView: 2,
                spaceBetween: 24,
              },
            }}
            speed={700}
            grabCursor
            watchOverflow
            touchRatio={1.2}
            className="!overflow-hidden !pb-3"
          >
            {projects.map((project) => (
              <SwiperSlide key={project.title} className="!h-auto min-w-0">
                <article className="group flex h-full min-w-0 flex-col overflow-hidden rounded-[1.75rem] border border-white/10 bg-[linear-gradient(180deg,rgba(15,23,42,0.96),rgba(15,23,42,0.82))] shadow-[0_24px_80px_rgba(2,6,23,0.45)] transition duration-300 hover:-translate-y-1 hover:border-orange-400/60">
                  <div className="relative overflow-hidden">
                    <div className="absolute inset-0 z-10 bg-gradient-to-t from-slate-950 via-slate-950/10 to-transparent" />
                    <img
                      src={project.image}
                      alt={`${project.title} screenshot`}
                      className="h-44 w-full object-cover object-top transition duration-500 group-hover:scale-105 sm:h-56 lg:h-72"
                    />
                    <div className="absolute inset-x-0 bottom-0 z-20 flex items-center justify-between px-4 pb-4 sm:px-6">
                      {project.status === "ongoing" ? (
                        <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/15 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-emerald-300">
                          <span className="h-2 w-2 rounded-full bg-emerald-400" />
                          Ongoing
                        </div>
                      ) : (
                        <div className="inline-flex rounded-full border border-white/10 bg-slate-950/60 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-slate-200">
                          Featured Build
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col p-4 sm:p-6 lg:p-7">
                    <h3 className="text-base font-semibold leading-snug text-white sm:text-xl">
                      {project.title}
                    </h3>
                    <p className="mt-3 text-xs leading-6 text-slate-300 sm:text-sm lg:text-[15px]">
                      {project.description}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-orange-500/20 bg-orange-500/10 px-2.5 py-1 text-[11px] font-medium text-orange-200 sm:px-3"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="mt-6 grid gap-3 lg:grid-cols-2">
                      <motion.a
                        href={project.codeUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/12 bg-white/4 px-4 py-3 text-sm font-medium text-slate-100 transition hover:border-orange-400 hover:bg-white/8"
                        whileHover={{ opacity: 0.95 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                      >
                        <Github size={16} />
                        View Code
                      </motion.a>
                      <motion.a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center justify-center gap-2 rounded-xl bg-orange-500 px-4 py-3 text-sm font-medium text-white transition hover:bg-orange-400"
                        whileHover={{ opacity: 0.95 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                      >
                        <ExternalLink size={16} />
                        Live Demo
                      </motion.a>
                    </div>
                  </div>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        <div className="mt-12 text-center">
          <motion.a
            href="https://github.com/SlinkyCollins"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-orange-500 px-6 py-3 text-sm text-orange-400 transition-colors hover:bg-orange-500 hover:text-white"
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
