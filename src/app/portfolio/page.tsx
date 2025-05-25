'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

// 🔁 Importation des images depuis src/assets
import mockup1 from '@/assets/images/portfolio/mockup1.png'

const projects = [mockup1]

export default function Portfolio() {
  return (
    <section className="bg-[#0f172a] text-white py-20 px-4 md:px-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto text-center">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 0.05, y: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute top-[80px] inset-0 text-8xl md:text-9xl font-bold text-white select-none pointer-events-none z-0"
        >
          Resume
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative text-6xl font-bold mb-20 z-10"
        >
          <span className="text-[#00BDC8]">PORTFOLIO</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-10 z-10 relative">
          {projects.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="overflow-hidden rounded-xl shadow-lg"
            >
              <Image
                src={src}
                alt={`Mockup ${index + 1}`}
                width={600}
                height={400}
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
