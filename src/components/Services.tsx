'use client';

import { motion } from 'framer-motion';
import { fadeInUp } from '../lib/motionVariants';

const services = [
  { icon: '💻', title: 'Développement Web', desc: 'Sites statiques & dynamiques' },
  { icon: '⚙️', title: 'Intégration Magento', desc: 'Modules et thèmes sur mesure' },
  { icon: '🎨', title: 'Design UI/UX', desc: 'Maquettes et prototypes' },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-accent">
      <h2 className="text-3xl font-heading text-center mb-12">Mes services</h2>
      <div className="max-w-4xl mx-auto grid gap-8 grid-cols-1 md:grid-cols-3">
        {services.map((s, i) => (
          <motion.div
            key={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="p-6 bg-white rounded-2xl shadow-lg text-center"
          >
            <div className="text-4xl mb-4">{s.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
            <p className="text-gray-600">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
