'use client'

import { motion } from 'framer-motion'

export default function Blog() {
  return (
    <section className="bg-[#0f172a] text-white py-20 px-4 md:px-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto text-center">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 0.05, y: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute top-[80] inset-0 text-8xl md:text-9xl font-bold text-white select-none pointer-events-none z-0"
        >News
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative text-6xl font-bold mb-20 z-10"
        ><span className="text-sky-500">BLOG</span>
        </motion.h2>

        <div className="gap-10 items-center z-10 relative">
        </div>
      </div>
    </section>
  )
}