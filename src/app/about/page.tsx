'use client';

import Image from 'next/image';
import profilImage from '@/assets/images/profil.jpg';
import Skill from '@/app/skills/page';
import { motion } from 'framer-motion';

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

const skills = [
  { label: 'HTML5 / CSS3', percent: 90 },
  { label: 'JavaScript', percent: 85 },
  { label: 'React / Next.js', percent: 45 },
  { label: 'Node.js', percent: 75 },
  { label: 'Tailwind CSS', percent: 90 },
  { label: 'UI/UX Design', percent: 80 },
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
          className="absolute top-[70] inset-0 text-9xl md:text-9xl font-bold text-white select-none pointer-events-none z-0"
        >
          Resume
        </motion.span>

        {/* Titre principal */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative text-6xl font-bold mb-20 z-10"
        >
          ABOUT <span className="text-sky-500">ME</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-10 items-center z-10 relative">
          {/* Infos personnelles */}
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="relative w-48 h-60">
              <div className="absolute inset-0 border-[3px] border-sky-500 -translate-x-2 -translate-y-2" />
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
              <p><strong>Age:</strong> 26</p>
              <p><strong>Phone:</strong> +261 38 99 262 17</p>
              <p><strong>Skype:</strong> Briscoe_fc</p>
              <p><strong>Email:</strong> FrancisMBriscoe@jourrapide.com</p>
              <p><strong>Address:</strong> 4080 Berkshire Circle</p>
              <p><strong>Languages:</strong> French, English</p>
              <p><strong>Nationality:</strong> USA</p>
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

      {/* MY SKILL */}
      <section className="bg-[#0f172a] text-white py-5 px-4 md:px-16">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-6xl font-bold mb-15"
          >
            <span className="text-sky-500">MY</span> SKILL
          </motion.h2>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 justify-items-center">
            {skills.map((skill, index) => (
              <Skill key={index} {...skill} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
