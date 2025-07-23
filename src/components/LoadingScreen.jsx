import { motion } from "framer-motion"
import { Loader2 } from "lucide-react"

const LoadingScreen = () => {
  return (
    <motion.div
      className="fixed inset-0 flex flex-col items-center justify-center bg-slate-900 text-white z-[9999]"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <motion.div
        className="text-5xl font-bold text-orange-500 mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Collynx
      </motion.div>
      <motion.div
        className="flex items-center gap-3 text-gray-400"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
      >
        <Loader2 className="h-6 w-6 animate-spin" />
        <span className="text-lg">Loading Portfolio...</span>
      </motion.div>
    </motion.div>
  )
}

export default LoadingScreen