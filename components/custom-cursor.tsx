"use client"

import * as React from "react"
import { motion } from "framer-motion"

export function CustomCursor() {
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = React.useState(false)

  React.useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    const handleMouseEnter = () => setIsHovering(true)
    const handleMouseLeave = () => setIsHovering(false)

    // Hide default cursor
    document.body.style.cursor = 'none'

    window.addEventListener('mousemove', updateMousePosition)
    
    // Add hover listeners to interactive elements (excluding badges)
    const interactiveElements = document.querySelectorAll('button:not([class*="badge"]), a:not([class*="badge"]), [role="button"]:not([class*="badge"])')
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter)
      el.addEventListener('mouseleave', handleMouseLeave)
      // Hide cursor on interactive elements too
      ;(el as HTMLElement).style.cursor = 'none'
    })

    return () => {
      // Restore default cursor when component unmounts
      document.body.style.cursor = 'auto'
      window.removeEventListener('mousemove', updateMousePosition)
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter)
        el.removeEventListener('mouseleave', handleMouseLeave)
        ;(el as HTMLElement).style.cursor = 'auto'
      })
    }
  }, [])

  return (
    <motion.div
      className="fixed w-5 h-5 bg-purple-600 pointer-events-none z-[9999] mix-blend-difference"
      animate={{
        x: mousePosition.x - 10,
        y: mousePosition.y - 10,
        scale: isHovering ? 1.5 : 1,
      }}
      transition={{
        type: "tween",
        duration: 0,
        ease: "linear"
      }}
    />
  )
}