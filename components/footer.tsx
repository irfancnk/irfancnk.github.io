"use client"

import * as React from "react"
import { Github, Linkedin, Mail } from "lucide-react"
import { motion } from "framer-motion"

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col items-center space-y-6">
          <motion.button
            onClick={scrollToTop}
            className="font-display font-bold text-2xl text-white hover:text-purple-400 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            ICK
          </motion.button>
          
          <div className="flex space-x-6">
            {[
              { icon: <Mail className="w-5 h-5" />, href: "mailto:irfancankaleli@gmail.com", label: "Email" },
              { icon: <Linkedin className="w-5 h-5" />, href: "https://linkedin.com/in/irfancankaleli", label: "LinkedIn" },
              { icon: <Github className="w-5 h-5" />, href: "https://github.com/irfancankaleli", label: "GitHub" }
            ].map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target={social.href.startsWith('http') ? '_blank' : '_self'}
                rel={social.href.startsWith('http') ? 'noopener noreferrer' : ''}
                className="text-gray-400 hover:text-purple-400 transition-colors p-2 rounded-full hover:bg-gray-800"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {social.icon}
                <span className="sr-only">{social.label}</span>
              </motion.a>
            ))}
          </div>
          
          <div className="text-center text-sm text-gray-500">
            <p>© 2025 Irfan Can Kaleli. All rights reserved.</p>
            <p className="mt-1">Built with Next.js, React, and Tailwind CSS</p>
          </div>
        </div>
      </div>
    </footer>
  )
}