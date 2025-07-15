"use client"

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



function App() {

  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000) // Display loader for 2 seconds

    // Prevent scrolling while loading
    document.body.style.overflow = "hidden"

    return () => {
      clearTimeout(timer)
      document.body.style.overflow = "unset" // Re-enable scrolling after unmount
    }
  }, [])

  return (
    <>
      <main className="min-h-screen bg-slate-900 text-white">
        <AnimatePresence>{isLoading && <LoadingScreen />}</AnimatePresence>
        {!isLoading && (
          <>
            <Navbar />
            <Hero />
            <About />
            <Projects />
            <Contact />
            <Footer />
          </>
        )}
      </main>
    </>
  )
}

export default App
