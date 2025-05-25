'use client'

import {motion} from 'framer-motion';
import Skill from '@/app/skills/page';

const skills = [
    { label: 'HTML5 / CSS3', percent: 90 },
    { label: 'JavaScript', percent: 85 },
    { label: 'React / Next.js', percent: 45 },
    { label: 'Node.js', percent: 75 },
    { label: 'Tailwind CSS', percent: 90 },
    { label: 'UI/UX Design', percent: 80 },
    { label: 'Php', percent: 75 },
    { label: 'Symfony', percent: 85 },
    { label: 'CodeIgniter', percent: 85 },
    { label: 'Magento', percent: 85 },
    { label: 'WordPress', percent: 85 },
  ];

export default function Competence() {
    return(
        <>
            <section className="bg-[#0f172a] text-white py-20 px-4 md:px-16 relative overflow-hidden">
                <div className="max-w-7xl mx-auto text-center">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 0.05, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="absolute top-[80] inset-0 text-8xl md:text-9xl font-bold text-white select-none pointer-events-none z-0"
                    >Skills
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="relative text-6xl font-bold mb-20 z-10"
                    ><span className="text-[#00BDC8]">Compétences</span>
                    </motion.h2>
                    <div className="gap-10 items-center z-10 relative">
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 justify-items-center">
                            {skills.map((skill, index) => (
                            <Skill key={index} {...skill} />
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}