"use client";

import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub, FaPaperPlane } from 'react-icons/fa';

export default function Contact() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
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

  const iconVariants = {
    hover: { scale: 1.1, color: '#10B981' },
    tap: { scale: 0.9 }
  };

  const buttonVariants = {
    initial: { backgroundColor: 'rgba(0,0,0,0)' },
    hover: { 
      backgroundColor: '#10B981',
      transition: { duration: 0.3 }
    },
    tap: { scale: 0.95 }
  };

  return (
    <main className="min-h-screen bg-[#0c1022] text-white flex flex-col items-center justify-center py-16 px-6">
      <motion.h1 
        className="text-4xl md:text-6xl font-bold mb-8 text-center"
        initial="hidden"
        animate="visible"
        variants={itemVariants}
      >
        CONTACT <motion.span className="text-green-500" whileHover={{ scale: 1.05 }}>US</motion.span>
      </motion.h1>

      <motion.div 
        className="flex flex-col md:flex-row gap-10 max-w-6xl w-full"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Left Side - Contact Info */}
        <motion.div 
          className="flex-1 space-y-6 md:w-1/3" // Added md:w-1/3 for sidebar width
          variants={itemVariants}
        >
          <motion.h2 className="text-2xl font-bold" variants={itemVariants}>
            Get in touch
          </motion.h2>
          
          <motion.p className="text-gray-400" variants={itemVariants}>
            Curabitur vitae nunc sed velit dignissim sodales. Urna neque viverra justo nec.
            In cursus massa tincidunt ut ornare the butter leo integer.
          </motion.p>

          <motion.div className="space-y-4" variants={itemVariants}>
            {[
              {
                icon: <FaMapMarkerAlt className="text-white" size={18} />,
                title: "Address",
                lines: [
                  "4080 Berkshire Circle Knoxville,",
                  "TN 37917, New York"
                ]
              },
              {
                icon: <FaEnvelope className="text-white" size={18} />,
                title: "Email",
                lines: [
                  "FrancisMBriscoe@jourrapide.com",
                  "info@jourrapide.com"
                ]
              },
              {
                icon: <FaPhone className="text-white" size={18} />,
                title: "Phone",
                lines: [
                  "865-564-9052",
                  "865-884-9658"
                ]
              }
            ].map((item, index) => (
              <motion.div 
                key={index}
                className="flex items-start gap-4"
                whileHover={{ x: 5 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <motion.div 
                  className="bg-green-600 p-3 rounded-full flex-shrink-0"
                  whileHover={{ rotate: 10 }}
                >
                  {item.icon}
                </motion.div>
                <div>
                  {item.lines.map((line, i) => (
                    <p key={i}>{line}</p>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Social Links */}
          <motion.div 
            className="flex gap-6 mt-6"
            variants={itemVariants}
          >
            {[
              { icon: <FaFacebookF />, href: "#" },
              { icon: <FaTwitter />, href: "#" },
              { icon: <FaLinkedinIn />, href: "#" },
              { icon: <FaGithub />, href: "#" }
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                className="text-gray-400 text-xl"
                variants={iconVariants}
                whileHover="hover"
                whileTap="tap"
                target="_blank"
                rel="noopener noreferrer"
              >
                {social.icon}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Side - Contact Form */}
        <motion.div 
          className="flex-1 md:w-2/3" // Added md:w-2/3 for main content width
          variants={itemVariants}
        >
          <motion.form 
            className="bg-[#1a1f38] p-8 rounded-lg space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            {[
              { label: "Name", type: "text", placeholder: "Enter Your Name..." },
              { label: "Email", type: "email", placeholder: "Enter Your Email..." },
              { label: "Subject", type: "text", placeholder: "Enter Your Subject..." },
            ].map((field, index) => (
              <motion.div key={index} variants={itemVariants}>
                <label className="block mb-2">{field.label} :</label>
                <motion.input
                  type={field.type}
                  placeholder={field.placeholder}
                  className="w-full p-3 rounded bg-transparent border border-gray-500 focus:outline-none focus:border-green-500"
                  whileFocus={{ 
                    borderColor: "#10B981",
                    boxShadow: "0 0 0 2px rgba(16, 185, 129, 0.2)"
                  }}
                />
              </motion.div>
            ))}

            <motion.div variants={itemVariants}>
              <label className="block mb-2">Message :</label>
              <motion.textarea
                placeholder="Enter Your Message ..."
                rows={4}
                className="w-full p-3 rounded bg-transparent border border-gray-500 focus:outline-none focus:border-green-500"
                whileFocus={{ 
                  borderColor: "#10B981",
                  boxShadow: "0 0 0 2px rgba(16, 185, 129, 0.2)"
                }}
              />
            </motion.div>

            <motion.button
              type="submit"
              className="w-full border border-green-500 px-6 py-3 rounded-md text-green-500 flex items-center justify-center gap-2"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <FaPaperPlane />
              <span>SEND MESSAGE</span>
            </motion.button>
          </motion.form>
        </motion.div>
      </motion.div>
    </main>
  );
}