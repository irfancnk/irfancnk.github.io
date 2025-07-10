"use client"

import * as React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, Phone, Github, Linkedin, MapPin, Send } from "lucide-react"
import { motion } from "framer-motion"

const contactInfo = [
  {
    icon: <Mail className="w-5 h-5" />,
    label: "Email",
    value: "irfancnkaleli@gmail.com",
    href: "mailto:irfancnkaleli@gmail.com"
  },
  {
    icon: <Linkedin className="w-5 h-5" />,
    label: "LinkedIn",
    value: "linkedin.com/in/irfan-can-kaleli",
    href: "https://www.linkedin.com/in/irfan-can-kaleli/"
  },
  {
    icon: <Github className="w-5 h-5" />,
    label: "GitHub",
    value: "github.com/irfancnk",
    href: "https://github.com/irfancnk"
  },
  {
    icon: <MapPin className="w-5 h-5" />,
    label: "Location",
    value: "Ankara, Turkey",
    href: null
  }
]

export function ContactSection() {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormData({ name: '', email: '', message: '' })
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <section id="contact" className="py-20 sm:py-32 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display font-bold text-5xl sm:text-6xl lg:text-7xl mb-6 text-white">
            Get in Touch
          </h2>
          <div className="w-24 h-1 bg-purple-500 mx-auto mb-8" />
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Let&apos;s discuss your next project or explore opportunities to work together
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div>
              <h3 className="font-display font-semibold text-2xl mb-6 text-white select-none">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="card-hover border border-gray-700 bg-gray-800">
                      <CardContent className="p-4">
                        {info.href ? (
                          <a
                            href={info.href}
                            target={info.href.startsWith('http') ? '_blank' : '_self'}
                            rel={info.href.startsWith('http') ? 'noopener noreferrer' : ''}
                            className="flex items-center gap-3 hover:opacity-70 transition-opacity text-white cursor-pointer select-none"
                          >
                            <div className="text-purple-400">{info.icon}</div>
                            <div>
                              <div className="font-medium">{info.label}</div>
                              <div className="text-sm text-gray-400">{info.value}</div>
                            </div>
                          </a>
                        ) : (
                          <div className="flex items-center gap-3 text-white cursor-default select-none">
                            <div className="text-purple-400">{info.icon}</div>
                            <div>
                              <div className="font-medium">{info.label}</div>
                              <div className="text-sm text-gray-400">{info.value}</div>
                            </div>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
          
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="card-hover border border-gray-700 bg-gray-800">
              <CardContent className="p-8">
                <h3 className="font-display font-semibold text-2xl mb-6 text-white select-none">Send a Message</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-sm font-medium text-gray-300 select-none cursor-default">
                      Name
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your name"
                      required
                      className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-400 focus:border-purple-500"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-medium text-gray-300 select-none cursor-default">
                      Email
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                      required
                      className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-400 focus:border-purple-500"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-sm font-medium text-gray-300 select-none cursor-default">
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell me about your project or just say hello..."
                      rows={5}
                      required
                      className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-400 focus:border-purple-500 resize-none"
                    />
                  </div>
                  
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      type="submit"
                      className="w-full bg-purple-600 text-white hover:bg-purple-700 font-medium py-3 glow-purple"
                    >
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </Button>
                  </motion.div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}