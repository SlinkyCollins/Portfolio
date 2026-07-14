import { useState, useEffect } from "react"
import { AnimatePresence } from "framer-motion"
import './App.css'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import LoadingScreen from "./components/LoadingScreen"
import { Toaster } from "react-hot-toast"

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 650)
    return () => clearTimeout(timer)
  }, [])

  return (
    <main className="min-h-screen bg-slate-900 text-white">
      <AnimatePresence>{isLoading && <LoadingScreen />}</AnimatePresence>
      <Toaster />
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </main>
  )
}

export default App