import React from 'react'
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"

const Projects = () => {
  return (
      <section id="projects" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Projects</h2>
          <div className="w-12 h-1 bg-orange-500 mx-auto"></div>
        </div>

        <div className="space-y-20">
          {/* Battleship Project */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white">Battleship</h3>
              <div className="flex flex-wrap gap-2">
                {["HTML", "CSS", "JavaScript", "Node.js"].map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-slate-800 rounded text-sm text-slate-300">
                    {tech}
                  </span>
                ))}
              </div>
              <p className="text-slate-300 leading-relaxed">
                This is a battleship game built with vanilla JavaScript. The game features a clean interface and allows
                players to place ships and battle against the computer.
              </p>
              <div className="flex gap-4">
                <Button className="bg-orange-500 hover:bg-orange-600 text-white">
                  Live project <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
                <Button variant="outline" className="border-slate-600 text-white hover:bg-slate-800">
                  View project <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
            <div className="bg-slate-800 rounded-lg p-6">
              <div className="bg-slate-900 rounded p-4 font-mono text-sm text-green-400">
                <div>{"> npm start"}</div>
                <div>{"> Starting development server..."}</div>
                <div>{"> Server running on http://localhost:3000"}</div>
                <div>{"> Game initialized successfully"}</div>
                <div>{"> Ready to play!"}</div>
              </div>
            </div>
          </div>

          {/* Movie Titles API Project */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="lg:order-2 space-y-6">
              <h3 className="text-2xl font-bold text-white">Movie Titles API</h3>
              <div className="flex flex-wrap gap-2">
                {["HTML", "CSS", "JavaScript", "API", "Responsive Design"].map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-slate-800 rounded text-sm text-slate-300">
                    {tech}
                  </span>
                ))}
              </div>
              <p className="text-slate-300 leading-relaxed">
                A movie database application that fetches data from external APIs to display movie information, ratings,
                and posters with a responsive design.
              </p>
              <div className="flex gap-4">
                <Button className="bg-orange-500 hover:bg-orange-600 text-white">
                  Live project <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
                <Button variant="outline" className="border-slate-600 text-white hover:bg-slate-800">
                  View project <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
            <div className="lg:order-1 flex gap-4">
              <img
                src="/placeholder.svg?height=200&width=150"
                alt="Movie poster 1"
                className="w-[120px] h-[200px] rounded-lg object-cover"
              />
              <img
                src="/placeholder.svg?height=200&width=150"
                alt="Movie poster 2"
                className="w-[120px] h-[200px] rounded-lg object-cover"
              />
            </div>
          </div>

          {/* JavaScript Calculator */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white">JavaScript Calculator</h3>
              <div className="flex flex-wrap gap-2">
                {["HTML", "CSS", "JavaScript", "DOM"].map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-slate-800 rounded text-sm text-slate-300">
                    {tech}
                  </span>
                ))}
              </div>
              <p className="text-slate-300 leading-relaxed">
                A fully functional calculator built with vanilla JavaScript featuring basic arithmetic operations and a
                clean, intuitive interface.
              </p>
              <div className="flex gap-4">
                <Button className="bg-orange-500 hover:bg-orange-600 text-white">
                  Live project <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
                <Button variant="outline" className="border-slate-600 text-white hover:bg-slate-800">
                  View project <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
            <div className="bg-slate-800 rounded-lg p-6">
              <div className="bg-slate-900 rounded p-4 font-mono text-sm text-blue-400">
                <div>{"function calculate(operation) {"}</div>
                <div className="ml-4">{"const result = eval(operation);"}</div>
                <div className="ml-4">{"display.textContent = result;"}</div>
                <div className="ml-4">{"return result;"}</div>
                <div>{"}"}</div>
                <div className="mt-2 text-green-400">{"// Calculator ready!"}</div>
              </div>
            </div>
          </div>

          {/* SaaS Landing Page */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="lg:order-2 space-y-6">
              <h3 className="text-2xl font-bold text-white">SaaS Landing Page</h3>
              <div className="flex flex-wrap gap-2">
                {["React", "Tailwind", "Next.js"].map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-slate-800 rounded text-sm text-slate-300">
                    {tech}
                  </span>
                ))}
              </div>
              <p className="text-slate-300 leading-relaxed">
                A modern SaaS landing page built with React and Tailwind CSS, featuring responsive design and smooth
                animations to showcase product features.
              </p>
              <div className="flex gap-4">
                <Button className="bg-orange-500 hover:bg-orange-600 text-white">
                  Live project <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
                <Button variant="outline" className="border-slate-600 text-white hover:bg-slate-800">
                  View project <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
            <div className="lg:order-1">
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <div className="space-y-4">
                  <div className="text-2xl font-bold text-slate-900">Empowering teams with the freedom</div>
                  <div className="text-slate-600">to work anywhere</div>
                  <div className="bg-blue-500 text-white px-4 py-2 rounded inline-block">Get Started</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
