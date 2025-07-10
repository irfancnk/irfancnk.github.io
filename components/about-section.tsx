"use client"

import * as React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"

export function AboutSection() {
  return (
    <section id="about" className="py-20 sm:py-32 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display font-bold text-5xl sm:text-6xl lg:text-7xl mb-6 text-white">
            About Me
          </h2>
          <div className="w-24 h-1 bg-purple-500 mx-auto mb-8" />
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="card-hover border border-gray-700 bg-gray-800">
              <CardContent className="p-8">
                <p className="text-lg text-gray-300 leading-relaxed mb-6">
                  With over <span className="font-semibold text-purple-400">7 years of experience</span> in full-stack development, 
                  I specialize in building scalable web applications using <span className="font-semibold text-purple-400">Node.js</span> and <span className="font-semibold text-purple-400">React</span>. 
                  My expertise spans from architecting microservices to crafting pixel-perfect user interfaces.
                </p>
                
                <p className="text-lg text-gray-300 leading-relaxed mb-6">
                  I'm passionate about <span className="font-semibold text-purple-400">performance optimization</span>, 
                  <span className="font-semibold text-purple-400"> scalability</span>, and <span className="font-semibold text-purple-400">reliability</span>. 
                  Whether it's reducing search latency by 60% or building component libraries adopted by multiple teams, 
                  I focus on solutions that make a real impact.
                </p>
                
                <p className="text-lg text-gray-300 leading-relaxed">
                  Currently, I'm working on cutting-edge e-commerce platforms and exploring the latest in 
                  cloud technologies, always looking for ways to push the boundaries of what's possible on the web.
                </p>
              </CardContent>
            </Card>
          </motion.div>
          
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-2 gap-6">
              {[
                { number: "7+", label: "Years Experience" },
                { number: "50+", label: "Projects Completed" },
                { number: "15+", label: "Technologies Mastered" },
                { number: "3", label: "Key Roles" }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="card-hover text-center p-6 border border-gray-700 bg-gray-800">
                    <CardContent className="p-0">
                      <div className="text-3xl font-bold text-purple-400 mb-2">{stat.number}</div>
                      <div className="text-sm text-gray-400">{stat.label}</div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}