'use client'

import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

const projects = [
  {
    id: 1,
    title: 'Application Mobile',
    category: 'UI/UX Design',
    image: '/images/project-1.jpg'
  },
  {
    id: 2,
    title: 'Site Web Corporatif',
    category: 'Développement Web',
    image: '/images/project-2.jpg'
  },
  {
    id: 3,
    title: 'Identité Visuelle',
    category: 'Branding',
    image: '/images/project-3.jpg'
  },
  {
    id: 4,
    title: 'Plateforme E-commerce',
    category: 'Développement Web',
    image: '/images/project-4.jpg'
  },
  {
    id: 5,
    title: 'Application SaaS',
    category: 'UI/UX Design',
    image: '/images/project-5.jpg'
  }
]

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-between items-end mb-16"
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Mon Portfolio</h2>
            <p className="text-muted-foreground">
              Une sélection de mes projets récents
            </p>
          </div>
          <Button variant="outline" className="hidden md:flex gap-2">
            Voir tout <ArrowRight className="h-4 w-4" />
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 }
            }}
            className="pb-12"
          >
            {projects.map((project) => (
              <SwiperSlide key={project.id}>
                <div className="group relative overflow-hidden rounded-lg">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <span className="text-sm text-primary">{project.category}</span>
                    <h3 className="text-xl font-bold text-white">{project.title}</h3>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  )
}