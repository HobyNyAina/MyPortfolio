'use client'

import { motion } from 'framer-motion'
import workingExperiences from '@/data/workingExperiences/page'
import educations from '@/data/educations/page'

export default function CoverLetter() {
  return (
    <>
        <section className="bg-[#0f172a] text-white py-10 px-4 md:px-16 relative overflow-hidden">
        <div className="max-w-7xl mx-auto text-center">
            <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 0.05, y: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute top-[40] inset-0 text-8xl md:text-9xl font-bold text-white select-none pointer-events-none z-0"
            >
            Cover
            </motion.span>

            <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative text-6xl font-bold mb-16 z-10"
            ><span className="text-[#00BDC8]">RESUME</span>
            </motion.h2>
        </div>
        </section>
        <section className="bg-[#0f172a] text-white pb-10 px-6 md:px-16">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2">
        
        <div>
            <h3 className="text-2xl font-bold text-[#00BDC8] flex items-center gap-2 mb-6 uppercase">
            <span>🧑‍💻</span> Experiences
            </h3>
            <div className="space-y-8">
            {workingExperiences.map((item, i) => (
                <div key={i} className="relative pl-6 border-l border-gray-700">
                <span className="absolute left-[-0.4rem] top-1 w-3 h-3 bg-sky-500 rounded-full" />
                <h4 className="text-lg font-bold text-green-400">
                    {item.title}{' '}
                    <span className="text-sm text-gray-300 bg-gray-700 px-2 py-1 rounded ml-2">
                    {item.years}
                    </span>
                </h4>
                <p className="text-sm font-semibold text-white/70">{item.company}</p>
                <p className="text-xs text-gray-400 mt-1">{item.description}</p>
                <p className="text-xs text-gray-400 mt-1">{item.role}</p>
                </div>
            ))}
            </div>
            </div>
        
            {/* Colonne droite – Educational Qualifications */}
            <div>
                <h3 className="text-2xl font-bold text-[#00BDC8] flex items-center gap-2 mb-6 uppercase">
                <span>🎓</span> Formation
                </h3>
                <div className="space-y-8">
                {educations.map((item, i) => (
                    <div key={i} className="relative pl-6 border-l border-gray-700">
                    <span className="absolute left-[-0.4rem] top-1 w-3 h-3 bg-sky-500 rounded-full" />
                    <h4 className="text-lg font-bold text-green-400">
                        {item.title}{' '}
                        <span className="text-sm text-gray-300 bg-gray-700 px-2 py-1 rounded ml-2">
                        {item.years}
                        </span>
                    </h4>
                    <p className="text-sm font-semibold text-white/70">{item.institution}</p>
                    <p className="text-xs text-gray-400 mt-1">{item.description}</p>
                    </div>
                ))}
                </div>
            </div>
            </div>
        </section>
    </>  
    )
}