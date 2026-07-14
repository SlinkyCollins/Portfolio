import { motion } from "framer-motion"

const LoadingScreen = () => {
  return (
    <motion.div
      className="fixed inset-0 z-[9999] grid place-items-center bg-slate-950/95 text-white backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.02 }}
      transition={{ duration: 0.28, ease: "easeOut" }}
    >
      <motion.div
        className="relative flex items-center gap-3 rounded-full border border-orange-500/20 bg-white/[0.03] px-5 py-3 shadow-2xl shadow-orange-500/10"
        initial={{ opacity: 0, y: 10, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
      >
        <motion.span
          className="h-2.5 w-2.5 rounded-full bg-orange-500 shadow-[0_0_22px_rgba(249,115,22,0.9)]"
          animate={{ scale: [1, 1.35, 1], opacity: [0.8, 1, 0.8] }}
          transition={{ duration: 1.1, repeat: Infinity, ease: "easeInOut" }}
        />
        <span className="text-sm font-semibold tracking-[0.28em] text-orange-50">
          COLLYNX
        </span>
      </motion.div>
    </motion.div>
  )
}

export default LoadingScreen