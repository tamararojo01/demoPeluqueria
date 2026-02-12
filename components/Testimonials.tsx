'use client'

import { Star, Quote } from 'lucide-react'
import Image from 'next/image'

const testimonials = [
  {
    name: 'Laura Martínez',
    role: 'Clienta desde 2021',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop',
    rating: 5,
    text: 'Llevo años viniendo a Estilo & Arte y nunca me decepciona. El equipo es profesional, atento y siempre consiguen el look que quiero. Mi coloración balayage quedó perfecta, ¡recibo cumplidos constantemente!',
    service: 'Coloración Balayage',
  },
  {
    name: 'Carlos Rodríguez',
    role: 'Cliente desde 2019',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop',
    rating: 5,
    text: 'Como hombre, encontrar una peluquería de confianza era difícil. Aquí no solo consigo un corte impecable, sino que me hacen sentir cómodo. El ambiente es acogedor y el resultado siempre supera mis expectativas.',
    service: 'Corte Clásico Moderno',
  },
]

export default function Testimonials() {
  return (
    <section id="opiniones" className="section-padding bg-white">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary-300 font-semibold text-sm uppercase tracking-wider">
            Testimonios
          </span>
          <h2 className="heading-2 text-secondary-700 mt-4 mb-6">
            Lo que dicen <span className="text-primary-300">nuestros clientes</span>
          </h2>
          <p className="text-lg text-gray-600">
            La satisfacción de nuestros clientes es nuestra mejor carta de presentación
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-primary-50/30 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-10">
                <Quote size={64} className="text-primary-300" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary-300 text-primary-300" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 text-lg leading-relaxed mb-6 relative z-10">
                &ldquo;{testimonial.text}&rdquo;
              </p>

              {/* Service Tag */}
              <div className="inline-block px-3 py-1 bg-primary-100 text-primary-600 text-sm font-medium rounded-full mb-6">
                {testimonial.service}
              </div>

              {/* Author */}
              <div className="flex items-center gap-4 border-t border-gray-200 pt-6">
                <div className="relative w-14 h-14 rounded-full overflow-hidden flex-shrink-0">
                  <Image
                    src={testimonial.image}
                    alt={`Foto de ${testimonial.name}, cliente de Estilo & Arte`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-secondary-700">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Google Reviews CTA */}
        <div className="text-center mt-12 p-8 bg-primary-50 rounded-2xl max-w-2xl mx-auto">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-primary-300 text-primary-300" />
              ))}
            </div>
            <span className="text-2xl font-bold text-secondary-700">4.9/5</span>
          </div>
          <p className="text-gray-700 mb-4">
            Basado en más de <strong>120 opiniones</strong> en Google
          </p>
          <a
            href="https://www.google.com/search?q=estilo+arte+peluqueria+madrid"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-400 hover:text-primary-500 font-semibold inline-flex items-center gap-2"
          >
            Ver todas las opiniones →
          </a>
        </div>
      </div>
    </section>
  )
}
