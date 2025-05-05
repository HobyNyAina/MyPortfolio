'use client'

import { NAV_ITEMS } from '@/config/navigation'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function MobileNavbar({ activeItem, setActiveItem }: {
  activeItem: string
  setActiveItem: (path: string) => void
}) {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-gray-900 py-3 z-50 border-t border-gray-700">
      <div className="flex justify-center items-center">
        {/* Icônes */}
        <nav className="flex justify-center space-x-4">
          {NAV_ITEMS.map((item) => (
            <Link 
              href={item.path} 
              key={item.path}
              onClick={() => setActiveItem(item.path)}
              className="relative group"
            >
              <motion.div
                whileTap={{ scale: 0.9 }}
                className={`p-3 rounded-full transition-colors text-2xl ${
                  activeItem === item.path
                    ? 'bg-sky-500/20 text-sky-400'
                    : 'text-gray-400 hover:bg-sky-500 hover:text-black'
                }`}
              >
                {<item.icon/>}
              </motion.div>
            </Link>
          ))}
        </nav>
      </div>
    </div>
  )
}