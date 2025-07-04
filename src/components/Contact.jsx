import React from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const Contact = () => {
    return (
        <section id="contact" className="py-20 px-6">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-white mb-4">Have a project?</h2>
                    <h3 className="text-3xl font-bold text-white">Let's talk!</h3>
                </div>

                <div className="grid md:grid-cols-2 gap-12">
                    <div className="space-y-6">
                        <div>
                            <label className="block text-white mb-2">Name</label>
                            <Input className="bg-slate-800 border-slate-700 text-white" />
                        </div>
                        <div>
                            <label className="block text-white mb-2">Email</label>
                            <Input type="email" className="bg-slate-800 border-slate-700 text-white" />
                        </div>
                        <div>
                            <label className="block text-white mb-2">Message</label>
                            <Textarea className="bg-slate-800 border-slate-700 text-white h-32" />
                        </div>
                        <Button className="bg-orange-500 hover:bg-orange-600 text-white w-full">Send Message</Button>
                    </div>

                    <div className="space-y-6 text-slate-300">
                        <div>
                            <h4 className="text-white font-semibold mb-2">Email</h4>
                            <p>jensen@example.com</p>
                        </div>
                        <div>
                            <h4 className="text-white font-semibold mb-2">Phone</h4>
                            <p>+1 (555) 123-4567</p>
                        </div>
                        <div>
                            <h4 className="text-white font-semibold mb-2">Location</h4>
                            <p>San Francisco, CA</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact
