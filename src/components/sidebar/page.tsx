'use client'

import { NAV_ITEMS } from '@/config/navigation'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import profilImage from '@/assets/images/profil.jpg'
import MobileNavbar from '@/components/MobileSidebar/page'
import { useState } from 'react'

export default function Sidebar() {
  const [activeItem, setActiveItem] = useState('/')

  return (
    <>
      {/* Version Mobile */}
      <MobileNavbar activeItem={activeItem} setActiveItem={setActiveItem} />

      {/* Version Desktop */}
      <div className="hidden md:flex fixed inset-y-0 left-0 w-30 bg-gray-900 text-white flex-col items-center justify-center z-50 border-r border-gray-700">
        <div className="flex flex-col items-center justify-center h-full space-y-10">
          {/* Photo de profil */}
          <div className="w-25 h-25 rounded-full overflow-hidden border-2 border-white/20 hover:border-emerald-400 transition-all duration-300">
            <Image
              src={profilImage}
              alt="Profil"
              width={64}
              height={64}
              className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
            />
          </div>
          
          {/* Icônes */}
          <nav className="flex flex-col items-center space-y-3">
            {NAV_ITEMS.map((item) => (
              <Link 
                href={item.path} 
                key={item.path}
                onClick={() => setActiveItem(item.path)}
                className="relative group"
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className={`p-3 rounded-full transition-colors bg-gray-700 text-black text-xl ${
                    activeItem === item.path
                      ? 'bg-sky-400'
                      : 'text-gray-400 hover:bg-sky-400 hover:text-black'
                  }`}
                >
                  {<item.icon/>}
                </motion.div>
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </>
  )
}