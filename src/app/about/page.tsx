'use client';

import Image from 'next/image';
import profilImage from '@/assets/images/profil-sitraka.jpg';
import { motion } from 'framer-motion';
import CoverLetter from '@/app/cover-letter/page';
import Competence from '@/app/competence/page';

type Stat = {
  value: string;
  label: string;
};

const stats: Stat[] = [
  { value: '10+', label: 'NUMBERS OF EXPERIENCE' },
  { value: '360+', label: 'COMPLETED PROJECTS' },
  { value: '332+', label: 'ATTEND MEETINGS' },
  { value: '630+', label: 'MAKE BIG SOFTWARE' },
  { value: '890+', label: 'HAPPY CUSTOMERS' },
  { value: '65+', label: 'INTERNATIONAL AWARDS WON' },
];

export default function About() {
  return (
    <>
      {/* ABOUT ME */}
      <section className="bg-[#0f172a] text-white py-20 px-4 md:px-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto text-center">
        {/* Texte décoratif en arrière-plan */}
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 0.05, y: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute top-[80] inset-0 text-8xl md:text-9xl font-bold text-white select-none pointer-events-none z-0"
        >
          About
        </motion.span>

        {/* Titre principal */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative text-6xl font-bold mb-20 z-10"
        >
          A <span className="text-[#00BDC8]">PROPOS</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-10 items-center z-10 relative">
          {/* Infos personnelles */}
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="relative w-48 h-60">
              <div className="absolute inset-0 border-[3px] border-[#00BDC8] -translate-x-2 -translate-y-2" />
              <Image
                src={profilImage}
                alt="Profile"
                fill
                className="rounded shadow-md object-cover"
                sizes="192px"
                priority
              />
            </div>

            <div className="text-sm md:text-base space-y-1 text-left">
              <p><strong>Name:</strong> Sitraka Ny Aina</p>
              <p><strong>Phone:</strong> +261 38 99 262 17</p>
              <p><strong>Email:</strong> hobynyaina.sitraka@gmail.com</p>
              <p><strong>Address:</strong> Lot IC 177 ter A Soamahavory</p>
              <p><strong>Languages:</strong> French</p>
              <p><strong>Nationality:</strong> Malgache</p>
            </div>
          </div>

          {/* Statistiques */}
          <div className="grid grid-cols-2 gap-4 text-center">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="border border-gray-700 p-6 rounded shadow 
                           hover:scale-105 transition-transform duration-200"
              >
                <p className="text-3xl font-bold text-sky-500">{stat.value}</p>
                <p className="text-xs text-gray-300 mt-2 uppercase">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
    <Competence/>
    <CoverLetter />
    </>
  );
}
