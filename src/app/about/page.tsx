'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

const skills = [
  'UI/UX Design',
  'Développement Frontend',
  'Responsive Design',
  'Animation',
  'Branding',
  'Photographie'
]

export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div>
            <Badge variant="secondary" className="mb-4">
              À propos de moi
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Designer créatif avec passion pour l'excellence
            </h2>
            <p className="text-muted-foreground mb-6">
              Avec plus de 8 ans d'expérience dans le design et le développement,
              j'ai aidé des entreprises de toutes tailles à créer des identités
              visuelles fortes et des expériences utilisateur exceptionnelles.
            </p>
            <p className="text-muted-foreground mb-8">
              Mon approche combine une esthétique moderne avec des solutions
              techniques robustes pour des résultats qui impressionnent et
              fonctionnent parfaitement.
            </p>
            <Button size="lg">En savoir plus</Button>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {skills.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 border rounded-lg hover:bg-accent transition-colors"
              >
                <h3 className="font-medium">{skill}</h3>
                <div className="w-full bg-gray-200 h-1 mt-2">
                  <motion.div
                    className="h-full bg-primary"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${Math.random() * 50 + 50}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}