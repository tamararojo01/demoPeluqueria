'use client'

import { Scissors, Palette, Sparkles, ArrowRight } from 'lucide-react'
import Image from 'next/image'

const services = [
  {
    icon: Scissors,
    title: 'Cortes y Peinados',
    description: 'Desde cortes clásicos hasta los estilos más modernos y vanguardistas. Nuestros estilistas expertos crean el look perfecto para ti.',
    features: ['Cortes personalizados', 'Peinados para ocasiones', 'Asesoramiento de estilo'],
    image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=2940&auto=format&fit=crop',
    color: 'primary',
  },
  {
    icon: Palette,
    title: 'Coloración y Tratamientos',
    description: 'Coloración profesional con productos de alta gama. Mechas, balayage, tintes y tratamientos que cuidan y embellecen tu cabello.',
    features: ['Coloración completa', 'Mechas y balayage', 'Tratamientos capilares'],
    image: 'https://images.unsplash.com/photo-1582095133179-bfd08e2fc6b3?q=80&w=2940&auto=format&fit=crop',
    color: 'secondary',
  },
  {
    icon: Sparkles,
    title: 'Estilismo para Eventos',
    description: 'Luce espectacular en tu día especial. Peinados para bodas, graduaciones, fiestas y eventos importantes con acabado profesional.',
    features: ['Peinados de novia', 'Eventos especiales', 'Prueba previa incluida'],
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=2940&auto=format&fit=crop',
    color: 'accent',
  },
]

export default function Services() {
  return (
    <section id="servicios" className="section-padding bg-white">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary-300 font-semibold text-sm uppercase tracking-wider">
            Nuestros Servicios
          </span>
          <h2 className="heading-2 text-secondary-700 mt-4 mb-6">
            Servicios que <span className="text-primary-300">transforman</span> tu estilo
          </h2>
          <p className="text-lg text-gray-600">
            Descubre nuestra amplia gama de servicios diseñados para realzar tu belleza natural 
            y personalidad única
          </p>
        </div>

        {/* Services Grid */}
        <div className="space-y-12">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`card group hover:-translate-y-2 transition-all duration-500 ${
                index % 2 === 0 ? '' : 'lg:flex-row-reverse'
              }`}
            >
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Image */}
                <div className="relative h-80 lg:h-auto">
                  <Image
                    src={service.image}
                    alt={`Servicio de ${service.title} en Estilo & Arte`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </div>

                {/* Content */}
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="w-14 h-14 bg-primary-50 rounded-full flex items-center justify-center mb-6">
                    <service.icon className="w-7 h-7 text-primary-300" />
                  </div>
                  
                  <h3 className="heading-3 text-secondary-700 mb-4">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3 text-gray-700">
                        <div className="w-1.5 h-1.5 bg-primary-300 rounded-full" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href="https://wa.me/34694278962?text=Hola,%20me%20gustaría%20información%20sobre%20el%20servicio%20de%20"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary-400 font-semibold hover:text-primary-500 transition-colors group/link"
                  >
                    Más información
                    <ArrowRight className="w-5 h-5 group-hover/link:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-600 mb-6">
            ¿No encuentras lo que buscas? Contáctanos para servicios personalizados
          </p>
          <a
            href="https://wa.me/34694278962?text=Hola,%20me%20gustaría%20información%20sobre%20servicios%20en%20Estilo%20%26%20Arte"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Consulta Personalizada
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  )
}
