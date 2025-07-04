import React from 'react'
import { Code, Smartphone, Server } from "lucide-react"

const About = () => {
    return (
        <section id="about" className="py-20 px-6">
            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
                {/* Services Timeline */}
                <div className="space-y-8">
                    <div className="space-y-8 pl-6 border-l-2 border-orange-500">
                        <div className="flex items-center gap-4 -ml-8">
                            <div className="w-4 h-4 bg-orange-500 rounded-full"></div>
                            <Code className="w-6 h-6 text-slate-400" />
                            <span className="text-xl font-semibold text-white">Website Development</span>
                        </div>

                        <div className="flex items-center gap-4 -ml-8">
                            <div className="w-4 h-4 bg-orange-500 rounded-full"></div>
                            <Smartphone className="w-6 h-6 text-slate-400" />
                            <span className="text-xl font-semibold text-white">App Development</span>
                        </div>

                        <div className="flex items-center gap-4 -ml-8">
                            <div className="w-4 h-4 bg-orange-500 rounded-full"></div>
                            <Server className="w-6 h-6 text-slate-400" />
                            <span className="text-xl font-semibold text-white">Website Hosting</span>
                        </div>
                    </div>
                </div>

                {/* About Me */}
                <div className="space-y-8">
                    <h2 className="text-4xl font-bold text-white">About me</h2>
                    <p className="text-slate-300 leading-relaxed">
                        I started my software journey from photography. Through that, I learned to love the process of creating from
                        scratch. Since then, this has led me to software development as it fulfills my love for learning and
                        building things.
                    </p>

                    <div className="grid grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="text-3xl font-bold text-orange-500">
                                120 <span className="text-orange-400">+</span>
                            </div>
                            <div className="text-sm text-slate-400">
                                Completed
                                <br />
                                Projects
                            </div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-orange-500">
                                95 <span className="text-orange-400">%</span>
                            </div>
                            <div className="text-sm text-slate-400">
                                Client
                                <br />
                                satisfaction
                            </div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-orange-500">
                                10 <span className="text-orange-400">+</span>
                            </div>
                            <div className="text-sm text-slate-400">
                                Years of
                                <br />
                                experience
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
