'use client'

import { NAV_ITEMS } from '@/config/navigation'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import profilImage from '@/assets/images/profil-sitraka.jpg'
import MobileNavbar from '@/components/sidebar/app-sidebar-mobile'
import { useState } from 'react'

export default function Sidebar() {
  const [activeItem, setActiveItem] = useState('/')

  return (
    <>
      <MobileNavbar activeItem={activeItem} setActiveItem={setActiveItem} />
      <div className="hidden md:flex fixed inset-y-0 left-0 w-25 bg-gray-900 text-white flex-col items-center justify-center z-50 border-r border-gray-700">
        <div className="flex flex-col items-center justify-center h-full space-y-5">
        <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white/10 hover:border-[#00BDC8] shadow-md hover:shadow-[#00BDC8] transition-all duration-300">
              <Image
                src={profilImage}
                alt="Photo de profil"
                width={128}
                height={128}
                quality={100}
                priority
                className="object-cover w-full h-full rounded-full hover:scale-105 transition-transform duration-500"
              />
            </div>
          <nav className="flex flex-col items-center space-y-3">
            {NAV_ITEMS.filter(item => !item.hidden).map((item) => (
              <Link 
                href={item.path} 
                key={item.path}
                onClick={() => setActiveItem(item.path)}
                className="relative group"
              ><motion.div
                  whileHover={{ scale: 1.1 }}
                  className={`p-3 rounded-full transition-colors bg-gray-700 text-2xl ${
                    activeItem === item.path
                    ? 'bg-sky-500/20 text-[#00BDC8]'
                    : 'text-gray-400 hover:bg-[#00BDC8] hover:text-black'
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
