'use client'

import { useState } from 'react'
import Image from 'next/image'
import { X } from 'lucide-react'

const galleryImages = [
  {
    src: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=2940&auto=format&fit=crop',
    alt: 'Corte de pelo moderno estilo bob en Estilo & Arte',
    category: 'Cortes',
  },
  {
    src: 'https://images.unsplash.com/photo-1634449571010-02389ed0f9b0?q=80&w=2940&auto=format&fit=crop',
    alt: 'Coloración balayage rubio profesional',
    category: 'Coloración',
  },
  {
    src: 'https://images.unsplash.com/photo-1619887500138-3091a49f6275?q=80&w=2940&auto=format&fit=crop',
    alt: 'Peinado elegante para evento especial',
    category: 'Eventos',
  },
  {
    src: 'https://images.unsplash.com/photo-1605497788044-5a32c7078486?q=80&w=2940&auto=format&fit=crop',
    alt: 'Corte degradado moderno para hombre',
    category: 'Cortes',
  },
  {
    src: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?q=80&w=2940&auto=format&fit=crop',
    alt: 'Mechas californianas tonos caramelo',
    category: 'Coloración',
  },
  {
    src: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?q=80&w=2940&auto=format&fit=crop',
    alt: 'Peinado recogido para novia',
    category: 'Eventos',
  },
  {
    src: 'https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?q=80&w=2940&auto=format&fit=crop',
    alt: 'Corte en capas con volumen natural',
    category: 'Cortes',
  },
  {
    src: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=2940&auto=format&fit=crop',
    alt: 'Tratamiento de coloración completa',
    category: 'Coloración',
  },
]

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  return (
    <section id="galeria" className="section-padding bg-gray-50">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary-300 font-semibold text-sm uppercase tracking-wider">
            Nuestros Trabajos
          </span>
          <h2 className="heading-2 text-secondary-700 mt-4 mb-6">
            Galería de <span className="text-primary-300">transformaciones</span>
          </h2>
          <p className="text-lg text-gray-600">
            Descubre algunos de nuestros trabajos más destacados. Cada imagen cuenta la historia 
            de un cliente satisfecho
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="relative aspect-square group cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
              onClick={() => setSelectedImage(index)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-white font-medium text-sm">{image.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage !== null && (
          <div
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 animate-fade-in"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
              onClick={() => setSelectedImage(null)}
              aria-label="Cerrar galería"
            >
              <X size={32} />
            </button>
            <div className="relative max-w-5xl max-h-[90vh] w-full h-full">
              <Image
                src={galleryImages[selectedImage].src}
                alt={galleryImages[selectedImage].alt}
                fill
                className="object-contain"
              />
            </div>
          </div>
        )}

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            ¿Te gustaría un cambio de look?
          </p>
          <a
            href="https://wa.me/34694278962?text=Hola,%20me%20gustaría%20agendar%20una%20cita%20en%20Estilo%20%26%20Arte"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp"
          >
            Reserva tu Cita Ahora
          </a>
        </div>
      </div>
    </section>
  )
}
