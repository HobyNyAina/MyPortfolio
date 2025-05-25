'use client'

import { motion } from 'framer-motion'
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub, FaSlack } from 'react-icons/fa';

export default function Contact() {
  return (
    <section className="bg-[#0f172a] text-white py-20 px-4 md:px-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 relative px-4">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 0.05, y: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0 text-8xl md:text-9xl font-bold text-white select-none pointer-events-none z-0"
          >Contact
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative text-6xl font-bold z-10"
          ><span className="text-[#00BDC8]">CONNEXION</span>
          </motion.h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
          <div className="md:col-span-4 space-y-6 z-10 px-4">
            <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-4">
              <h3 className="text-xl font-semibold">Get in touch</h3>
              <p className="text-gray-400">Curabitur vitae nunc sed velit dignissim sodales. Urna neque viverra justo nec.</p>

              <div className="flex items-center gap-4 text-gray-300">
                <FaMapMarkerAlt className="text-2xl text-[#00BDC8]" />
                <span>Lot IC 177 Ter A Soamahavory</span>
              </div>

              <div className="flex items-center gap-4 text-gray-300">
                <FaEnvelope className="text-2xl text-[#00BDC8]" />
                <span>hobynyaina.sitraka@gmail.com</span>
              </div>

              <div className="flex items-center gap-4 text-gray-300">
                <FaPhoneAlt className="text-2xl text-[#00BDC8]" />
                <span>+261 38 99 262 17</span>
              </div>

              <div className="flex gap-4 pt-4">
                {[FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub, FaSlack].map((Icon, idx) => (
                  <Icon key={idx} className="text-white/70 hover:text-[#00BDC8] text-xl cursor-pointer" />
                ))}
              </div>
            </div>
          </div>

          <form className="md:col-span-8 bg-[#1e293b] p-8 rounded-md space-y-6 shadow-xl px-4">
            <div>
              <label className="block mb-2">Name :</label>
              <input
                type="text"
                placeholder=""
                className="w-full px-4 py-2 rounded-md bg-[#0f172a] border border-gray-500 focus:outline-none focus:ring-2 focus:ring-[#00BDC8]"
              />
            </div>
            <div>
              <label className="block mb-2">Email :</label>
              <input
                type="email"
                placeholder=""
                className="w-full px-4 py-2 rounded-md bg-[#0f172a] border border-gray-500 focus:outline-none focus:ring-2 focus:ring-[#00BDC8]"
              />
            </div>
            <div>
              <label className="block mb-2">Subject :</label>
              <input
                type="text"
                placeholder=""
                className="w-full px-4 py-2 rounded-md bg-[#0f172a] border border-gray-500 focus:outline-none focus:ring-2 focus:ring-[#00BDC8]"
              />
            </div>
            <div>
              <label className="block mb-2">Message :</label>
              <textarea
                rows={4}
                placeholder=""
                className="w-full px-4 py-2 rounded-md bg-[#0f172a] border border-gray-500 focus:outline-none focus:ring-2 focus:ring-[#00BDC8]"
              />
            </div>
            <button
              type="submit"
              className="bg-transparent border border-[#00BDC8] text-[#00BDC8] px-6 py-2 rounded-md hover:bg-[#00BDC8] hover:text-black transition"
            >
              SEND MESSAGE
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
