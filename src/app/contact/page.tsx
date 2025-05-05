'use client'

import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <section className="bg-[#0f172a] text-white py-20 px-4 md:px-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto text-center">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 0.05, y: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute top-[70] inset-0 text-9xl md:text-9xl font-bold text-white select-none pointer-events-none z-0"
        >
          Connection
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative text-6xl font-bold mb-16 z-10"
        >
          CONTACT <span className="text-sky-500">ME</span>
        </motion.h2>
      </div>
    </section>
  )
}