import './App.css'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Projects from './components/Projects'

function App() {

  return (
    <>
      <main className="min-h-screen bg-slate-900">
        <Navbar/>
        <Hero/>
        <About/>
        <Projects/>
        <Contact/>
        <Footer/>
      </main>
    </>
  )
}

export default App
