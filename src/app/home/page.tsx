'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FaFacebookF, FaLinkedinIn, FaGithub, FaDownload } from 'react-icons/fa';

// Custom hook for hover effect
const useHover = () => {
  const [isHovered, setIsHovered] = useState(false);
  
  const hoverProps = {
    onHoverStart: () => setIsHovered(true),
    onHoverEnd: () => setIsHovered(false)
  };
  
  return [isHovered, hoverProps];
};

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 100
    }
  }
};

const socialIconVariants = {
  hover: {
    y: -5,
    color: '#ffffff',
    transition: { type: 'spring', stiffness: 300 }
  },
  tap: { scale: 0.9 }
};

const buttonVariants = {
  initial: { backgroundColor: 'rgba(0,0,0,0)' },
  hover: { 
    backgroundColor: '#00BDC8',
    transition: { duration: 0.3 }
  },
  tap: { scale: 0.95 }
};

export default function Home() {
  const [isMounted, setIsMounted] = useState(false);
  const [downloadHovered, downloadHoverProps] = useHover();
  
  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#0c1022] text-white px-4">
      <motion.section 
        className="text-center max-w-4xl"
        initial="hidden"
        animate={isMounted ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <motion.h1 
          className="text-3xl md:text-5xl font-bold mb-2"
          variants={itemVariants}
        >
          <motion.span 
            className="text-[#00BDC8]"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            Sitraka Ny Aina
          </motion.span>
        </motion.h1>
        
        <motion.h2 
          className="text-xl md:text-3xl font-semibold mt-4 text-[#00BDC8]"
          variants={itemVariants}
        >DEVELLOPEUR FULL STACK
        </motion.h2>
        
        <motion.p 
          className="text-gray-400 mt-6 mx-auto leading-relaxed"
          variants={itemVariants}
        >
          Full Stack Web Developer and Web Application specialist with expertise in both front-end and back-end development.
          Experienced with all stages of the development cycle for dynamic web projects. Proficient in JavaScript (ES6+), 
          Node.js, HTML5, CSS3, React.js, and MongoDB database systems.
        </motion.p>

        {/* Social Icons */}
        <motion.div 
          className="flex justify-center gap-6 mt-8"
          variants={itemVariants}
        >
          {[
            { icon: <FaFacebookF />, href: "#" },
            { icon: <FaLinkedinIn />, href: "https://www.linkdin.com/in/sitraka-ny-aina" },
            { icon: <FaGithub />, href: "https://github.com/HobyNyAina" }
          ].map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              className="p-2 bg-gray-800 rounded-full hover:bg-[#00BDC8] transition-colors"
              variants={socialIconVariants}
              whileHover="hover"
              whileTap="tap"
              target="_blank"
              rel="noopener noreferrer"
            >
              {social.icon}
            </motion.a>
          ))}
        </motion.div>
        <motion.div 
          className="mt-10"
          variants={itemVariants}
        >
          <motion.a
            href="#"
            className={`flex items-center justify-center gap-2 border border-[#00BDC8] px-6 py-3 rounded-md mx-auto w-max ${downloadHovered ? 'bg-sky-500 text-white' : 'text-[#00BDC8]'}`}
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            {...downloadHoverProps}
          >
            <FaDownload className="text-sm" />
            <span>Download CV</span>
          </motion.a>
        </motion.div>
      </motion.section>
    </main>
  );
}