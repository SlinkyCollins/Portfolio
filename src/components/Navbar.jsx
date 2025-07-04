"use client"
import { Menu, X } from 'lucide-react'
import React, { useState } from 'react'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-sm border-b border-slate-800">
            <div className="max-w-7xl mx-auto px-6 py-4">
                <div className="flex justify-between items-center">
                    <div className="text-xl font-semibold text-white">Afolabi Collins</div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex space-x-8">
                        <a href="#home" className="text-white hover:text-orange-500 transition-colors">
                            HOME
                        </a>
                        <a href="#about" className="text-white hover:text-orange-500 transition-colors">
                            ABOUT
                        </a>
                        <a href="#projects" className="text-white hover:text-orange-500 transition-colors">
                            PROJECTS
                        </a>
                        <a href="#contact" className="text-white hover:text-orange-500 transition-colors">
                            CONTACT
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isOpen && (
                    <div className="md:hidden mt-4 pb-4 space-y-4">
                        <a href="#home" onClick={() => setIsOpen(!isOpen)} className="block text-white hover:text-orange-500 transition-colors">
                            HOME
                        </a>
                        <a href="#about" onClick={() => setIsOpen(!isOpen)} className="block text-white hover:text-orange-500 transition-colors">
                            ABOUT
                        </a>
                        <a href="#projects" onClick={() => setIsOpen(!isOpen)} className="block text-white hover:text-orange-500 transition-colors">
                            PROJECTS
                        </a>
                        <a href="#contact" onClick={() => setIsOpen(!isOpen)} className="block text-white hover:text-orange-500 transition-colors">
                            CONTACT
                        </a>
                    </div>
                )}
            </div>
        </nav>
    )
}

export default Navbar
