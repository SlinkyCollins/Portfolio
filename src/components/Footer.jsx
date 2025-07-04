import React from 'react'
import { Github, Linkedin, Twitter } from "lucide-react"

const Footer = () => {
  return (
      <footer className="py-12 px-6 border-t border-slate-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-6">
          <div className="text-xl font-semibold text-white">Afolabi Collins</div>
          <p className="text-slate-400">Doing web development, mobile development and DevOps.</p>
          <div className="flex justify-center space-x-6">
            <a href="#" className="text-slate-400 hover:text-white transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors">
              <Twitter className="w-6 h-6" />
            </a>
          </div>
          <p className="text-slate-500 text-sm">© 2025 Afolabi Collins. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
