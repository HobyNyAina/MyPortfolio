'use client';

import { motion } from 'framer-motion';
import { fadeInUp } from '../lib/motionVariants';

export default function Hero() {
  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={fadeInUp}
      className="relative flex items-center justify-center h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
    >
      <div className="text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-heading font-bold">
          Bienvenue sur mon portfolio
        </h1>
        <p className="mt-4 text-lg md:text-2xl">
          Je réalise des sites modernes avec React, Next.js & Tailwind
        </p>
        <a
          href="#projects"
          className="inline-block mt-8 px-6 py-3 bg-primary rounded-full font-semibold hover:bg-red-600 transition"
        >
          Voir mes projets
        </a>
      </div>
    </motion.section>
  );
}
