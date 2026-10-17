import { useState } from "react"
import { ChevronLeft, ChevronRight, ExternalLink, Github, ChevronDown, Bot, Cpu } from "lucide-react"
import { motion } from "framer-motion"
import { Swiper, SwiperSlide } from "swiper/react"
import { A11y, Navigation } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"

export default function Projects() {
  // MOBILE UX: tracks which project cards are expanded (keyed by project title).
  // Each card's expand/collapse state is independent of the others.
  const [expandedCards, setExpandedCards] = useState({})
  const [imageErrors, setImageErrors] = useState({})

  const toggleCard = (title) => {
    setExpandedCards((prev) => ({ ...prev, [title]: !prev[title] }))
  }

  const handleImageError = (title) => {
    setImageErrors((prev) => ({ ...prev, [title]: true }))
  }

  const projects = [
    {
      title: "AI-Powered Customer Support (Refund System)",
      description:
        "An AI-assisted customer support engine focused on deterministic business logic, safe LLM orchestration, and transaction integrity. It decouples business rules from the LLM layer, validating delivery windows, item eligibility, and refund limits in TypeScript before AI processing to safeguard downstream systems.",
      // Metrics give recruiters a quick proof point for project depth without lengthening the description.
      metrics: ["58 Automated Tests", "Deterministic Rules", "Docker Containerized"],
      // Challenge statements summarize the hardest engineering problem each project solved.
      challenge:
        "Separated business-rule enforcement from the LLM layer so untrusted prompts and malicious inputs cannot directly determine refund eligibility.",
      tech: ["Vue", "Express", "TypeScript", "PostgreSQL", "LLM API", "Docker", "Jest"],
      codeUrl: "https://github.com/SlinkyCollins/worknoon-refund-engine",
      liveUrl: "https://worknoon-refund-ui.onrender.com",
      image: "/images/projects/refundengine.png",
      isLatest: true,
    },
    {
      title: "Vaultly (Digital Banking System)",
      description:
        "Vaultly is a production-style digital banking system focused on transaction integrity, concurrency handling, and secure financial operations. It uses Laravel transactions, row-level locking, and deadlock retries to protect deposits, transfers, and withdrawals while maintaining traceable transaction records.",
      // Metrics give recruiters a quick proof point for project depth without lengthening the description.
      metrics: ["13 Pages", "21 API Endpoints", "4 Cloud Services"],
      // Challenge statements summarize the hardest engineering problem each project solved.
      challenge:
        "Prevented double-spend conditions by using database transactions and row-level locking across concurrent transfer flows.",
      tech: ["Vue 3", "Pinia", "Laravel 12", "MySQL", "Sanctum", "Cloudinary", "Vite"],
      codeUrl: "https://github.com/SlinkyCollins/vaultly-frontend",
      liveUrl: "https://vaultlydemo.vercel.app",
      image: "/images/projects/vaultly.png",
    },
    {
      title: "JobNet (Global Recruitment Engine)",
      description:
        "JobNet is a global recruitment platform built to make hiring workflows consistent across authentication, role discovery, and compensation comparison. It connects Firebase social login with relational MySQL records, then normalizes salaries with exchange-rate data so users can evaluate jobs in local currency.",
      metrics: ["61 API Endpoints", "31 Angular Pages", "3 Dashboards"],
      challenge:
        "Coordinated 61 API endpoints, multi-role dashboards, and hybrid authentication into one recruitment workflow.",
      tech: ["Angular 18", "PHP 8.2", "MySQL", "Firebase Auth", "Docker"],
      codeUrl: "https://github.com/SlinkyCollins/job-portal-frontend",
      liveUrl: "https://jobnet.vercel.app/",
      image: "/images/projects/jobnet.png",
    },
    {
      title: "NairaNest (Core Banking Infrastructure)",
      description:
        "NairaNest is a core banking simulation focused on reliable account operations, secure access control, and financial visibility. It uses MongoDB sessions for atomic multi-document balance updates, with rate limiting, RBAC, and analytics dashboards supporting secure banking workflows.",
      metrics: ["21 API Endpoints", "14 Banking Features", "8 Security Features"],
      challenge:
        "Protected balance transfers and account access with MongoDB transactions, JWT authentication, RBAC, and guarded routes.",
      tech: ["React", "Redux Toolkit", "Node.js", "MongoDB", "Material UI"],
      codeUrl: "https://github.com/SlinkyCollins/Bank-App",
      liveUrl: "https://nairanest.vercel.app/",
      image: "/images/projects/bank.png",
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
              A curated selection of systems I&apos;ve built across secure AI,
              fintech, recruitment, and transaction-driven platforms. Swipe or use
              the controls to move through each project at a time.
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
            wrapperClass="items-start"
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
            {projects.map((project) => {
              // MOBILE UX: per-card expanded flag driving progressive disclosure below.
              const isExpanded = !!expandedCards[project.title]
              const CardIcon = project.icon || Cpu

              return (
                <SwiperSlide key={project.title} className="!h-auto min-w-0">
                  <article className="group flex h-full min-w-0 flex-col overflow-hidden rounded-[1.75rem] border border-white/10 bg-[linear-gradient(180deg,rgba(15,23,42,0.96),rgba(15,23,42,0.82))] shadow-[0_24px_80px_rgba(2,6,23,0.45)] transition duration-300 hover:-translate-y-1 hover:border-orange-400/60">
                    <div className="relative overflow-hidden">
                      <div className="absolute inset-0 z-10 bg-gradient-to-t from-slate-950 via-slate-950/10 to-transparent pointer-events-none" />
                      {project.image && !imageErrors[project.title] ? (
                        <img
                          src={project.image}
                          alt={`${project.title} screenshot`}
                          onError={() => handleImageError(project.title)}
                          className="w-full h-44 object-cover object-top group-hover:scale-105 sm:h-56 lg:h-72 transition-transform duration-500 grayscale group-hover:grayscale-0"
                        />
                      ) : (
                        <div
                          className="relative flex h-44 w-full flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 sm:h-56 lg:h-72 select-none"
                          aria-label={`${project.title} visual placeholder`}
                        >
                          {/* Ambient background glow & technical grid */}
                          <div
                            className="absolute inset-0 opacity-25"
                            style={{
                              backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.08) 1px, transparent 1px)`,
                              backgroundSize: "28px 28px",
                              maskImage: "radial-gradient(ellipse 70% 60% at 50% 50%, black 50%, transparent 100%)",
                              WebkitMaskImage: "radial-gradient(ellipse 70% 60% at 50% 50%, black 50%, transparent 100%)",
                            }}
                          />
                          <div className="absolute -top-12 -right-12 h-44 w-44 rounded-full bg-orange-500/10 blur-3xl transition duration-500 group-hover:bg-orange-500/20" />
                          <div className="absolute -bottom-12 -left-12 h-44 w-44 rounded-full bg-sky-500/10 blur-3xl transition duration-500 group-hover:bg-sky-500/20" />

                          {/* Centerpiece graphic & icon */}
                          <div className="relative z-10 flex flex-col items-center px-6 text-center transition-transform duration-500 group-hover:scale-105">
                            <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-orange-400 shadow-[0_8px_32px_rgba(0,0,0,0.35)] backdrop-blur-md transition-colors duration-300 group-hover:border-orange-400/40 group-hover:text-orange-300 sm:h-16 sm:w-16">
                              <CardIcon size={28} className="sm:h-8 sm:w-8" />
                            </div>
                            <span className="max-w-[260px] truncate text-xs font-semibold tracking-wider text-slate-200 uppercase sm:text-sm">
                              {project.title.split("(")[0].trim()}
                            </span>
                            <span className="mt-1 font-mono text-[10px] tracking-widest text-slate-400 uppercase sm:text-[11px]">
                              System Architecture &amp; Logic
                            </span>
                          </div>

                          {/* Subtle decorative technical corner accents */}
                          <div className="absolute top-3 left-3 h-2.5 w-2.5 border-t border-l border-white/20" />
                          <div className="absolute top-3 right-3 h-2.5 w-2.5 border-t border-r border-white/20" />
                        </div>
                      )}
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

                        {project.isLatest && (
                          <div className="inline-flex items-center gap-1.5 rounded-full border border-orange-400/35 bg-orange-500/20 backdrop-blur-md px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-orange-300 shadow-sm">
                            <span className="h-1.5 w-1.5 rounded-full bg-orange-400 animate-pulse" />
                            Latest
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="flex flex-1 flex-col p-4 sm:p-6 lg:p-7">
                      <h3 className="text-base font-semibold leading-snug text-white sm:text-xl">
                        {project.title}
                      </h3>

                      {/* POLISH PASS (Task 1): Clean description line-clamping logic. 
                        Unclamps completely when isExpanded is true or when on sm+ screens. */}
                      <p
                        className={`mt-3 text-xs leading-6 text-slate-300 sm:text-sm lg:text-[15px] ${isExpanded ? "" : "line-clamp-3"
                          } sm:line-clamp-none`}
                      >
                        {project.description}
                      </p>

                      {/* Project scope label and badges separate evidence of scale from the tech stack. */}
                      <div className="mt-4" aria-label={`${project.title} project metrics`}>
                        <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-sky-300/80">
                          Project Scope
                        </p>

                        {/* POLISH PASS (Task 3 Optional): Metric optimization for very small mobile screens.
                          Shows first two metrics + count badge when collapsed to maintain compact scannability. */}
                        <div className="mt-2 flex flex-wrap gap-2 sm:hidden">
                          {(isExpanded ? project.metrics : project.metrics.slice(0, 2)).map((metric) => (
                            <span
                              key={metric}
                              className="rounded-full border border-sky-400/25 bg-sky-400/10 px-2.5 py-1 text-[11px] font-semibold text-sky-100"
                            >
                              {metric}
                            </span>
                          ))}
                          {!isExpanded && project.metrics.length > 2 && (
                            <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] font-medium text-slate-300">
                              +{project.metrics.length - 2} more
                            </span>
                          )}
                        </div>

                        {/* Desktop and Tablet: Displays all metrics out-of-the-box */}
                        <div className="mt-2 hidden flex-wrap gap-2 sm:flex">
                          {project.metrics.map((metric) => (
                            <span
                              key={metric}
                              className="rounded-full border border-sky-400/25 bg-sky-400/10 px-2.5 py-1 text-[11px] font-semibold text-sky-100 sm:px-3"
                            >
                              {metric}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* POLISH PASS (Task 2): Relocated lightweight toggle button.
                        Placed immediately below the metrics block to intuitively connect the action
                        with the progressive content sections it triggers directly beneath it. */}
                      <button
                        type="button"
                        onClick={() => toggleCard(project.title)}
                        aria-expanded={isExpanded}
                        className="mt-4 flex items-center justify-center gap-1.5 self-start text-xs font-medium text-slate-300 transition hover:text-orange-300 sm:hidden"
                      >
                        {isExpanded ? "Show less" : "More details"}
                        <ChevronDown
                          size={14}
                          className={`transition-transform duration-200 ${isExpanded ? "rotate-180" : ""}`}
                        />
                      </button>

                      {/* Progressive Disclosure Section: Challenge Solved */}
                      <p
                        className={`mt-4 border-l border-sky-400/40 pl-3 text-xs leading-5 text-slate-300 sm:text-sm ${isExpanded ? "block" : "hidden"
                          } sm:block`}
                      >
                        <span className="font-semibold text-slate-100">Challenge solved:</span>{" "}
                        {project.challenge}
                      </p>

                      {/* Progressive Disclosure Section: Tech Stack */}
                      <div className="mt-5 flex flex-wrap gap-2 sm:hidden">
                        {(isExpanded ? project.tech : project.tech.slice(0, 4)).map((tech) => (
                          <span
                            key={tech}
                            className="rounded-full border border-orange-500/20 bg-orange-500/10 px-2.5 py-1 text-[11px] font-medium text-orange-200"
                          >
                            {tech}
                          </span>
                        ))}
                        {!isExpanded && project.tech.length > 4 && (
                          <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] font-medium text-slate-300">
                            +{project.tech.length - 4} more
                          </span>
                        )}
                      </div>
                      <div className="mt-5 hidden flex-wrap gap-2 sm:flex">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-full border border-orange-500/20 bg-orange-500/10 px-2.5 py-1 text-[11px] font-medium text-orange-200 sm:px-3"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Primary Action Controls */}
                      <div className="mt-6 grid gap-3 lg:grid-cols-2">
                        <motion.a
                          href={project.codeUrl || "https://github.com/SlinkyCollins"}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/12 bg-white/4 px-4 py-3 text-sm font-medium text-slate-100 transition hover:border-orange-400 hover:bg-white/8 cursor-pointer"
                          whileHover={{ opacity: 0.95 }}
                          transition={{ duration: 0.2, ease: "easeOut" }}
                        >
                          <Github size={16} />
                          View Code
                        </motion.a>
                        {project.liveUrl ? (
                          <motion.a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center justify-center gap-2 rounded-xl bg-orange-500 px-4 py-3 text-sm font-medium text-white transition hover:bg-orange-400 cursor-pointer"
                            whileHover={{ opacity: 0.95 }}
                            transition={{ duration: 0.2, ease: "easeOut" }}
                          >
                            <ExternalLink size={16} />
                            Live Demo
                          </motion.a>
                        ) : (
                          <span
                            className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-slate-400 cursor-not-allowed select-none opacity-80"
                            title="Live demo unavailable or enterprise system"
                          >
                            <ExternalLink size={16} />
                            Demo Inactive
                          </span>
                        )}
                      </div>
                    </div>
                  </article>
                </SwiperSlide>
              )
            })}
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