import React from 'react'
import { Button } from "@/components/ui/button"

const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-6">
            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-8">
                    <div className="space-y-4">
                        <h1 className="text-6xl md:text-7xl font-bold text-white">
                            Hello<span className="text-orange-500">.</span>
                        </h1>
                        <h2 className="text-3xl md:text-4xl font-light text-slate-300">I'm Collins</h2>
                        <h3 className="text-4xl md:text-5xl font-bold text-white">Software Developer</h3>
                    </div>

                    <div className="flex gap-4">
                        <Button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 text-lg">Got a project?</Button>
                        <Button variant="outline" className="border-slate-600 text-white hover:bg-slate-800 px-6 py-3 text-lg">
                            My resume
                        </Button>
                    </div>

                    <div className="flex flex-wrap gap-4 pt-8">
                        {["HTML5", "CSS", "Javascript", "Node.js", "React", "Git", "Github"].map((tech) => (
                            <span key={tech} className="px-3 py-1 bg-slate-800 rounded-full text-sm text-slate-300">
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="flex justify-center">
                    <div className="relative">
                        <div className="w-60 h-60 sm:w-80 sm:h-80 rounded-full bg-gradient-to-br from-orange-500 to-red-500 p-2">
                            <div className="w-full h-full rounded-full overflow-hidden bg-slate-800">
                                <img
                                    src="/placeholder.svg?height=300&width=300"
                                    alt="Jensen Omega"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                        {/* Decorative arrows */}
                        <div className="hidden sm:block absolute -left-12 top-1/4 text-slate-600 text-4xl">{"<"}</div>
                        <div className="hidden sm:block absolute -right-12 bottom-1/4 text-slate-600 text-4xl">{">"}</div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
