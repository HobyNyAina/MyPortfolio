'use client'

import { motion } from 'framer-motion'
import { Code, Palette, Smartphone, BarChart2, Camera, Globe } from 'lucide-react'

const services = [
  {
    icon: <Palette className="h-8 w-8" />,
    title: 'UI/UX Design',
    description: 'Conception d\'interfaces intuitives et d\'expériences utilisateur mémorables'
  },
  {
    icon: <Code className="h-8 w-8" />,
    title: 'Développement Web',
    description: 'Création de sites web modernes et performants avec les dernières technologies'
  },
  {
    icon: <Smartphone className="h-8 w-8" />,
    title: 'Design Mobile',
    description: 'Applications mobiles élégantes et faciles à utiliser pour iOS et Android'
  },
  {
    icon: <BarChart2 className="h-8 w-8" />,
    title: 'Stratégie Digitale',
    description: 'Planification et mise en œuvre de stratégies digitales complètes'
  },
  {
    icon: <Camera className="h-8 w-8" />,
    title: 'Photographie',
    description: 'Images professionnelles pour renforcer votre identité de marque'
  },
  {
    icon: <Globe className="h-8 w-8" />,
    title: 'Branding',
    description: 'Développement d\'identités visuelles fortes et cohérentes'
  }
]

export default function Services() {
  return (
    <section id="services" className="py-20 bg-accent/30">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Mes Services</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Des solutions sur mesure pour répondre à tous vos besoins créatifs et techniques
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 bg-background rounded-lg border hover:shadow-lg transition-all"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}