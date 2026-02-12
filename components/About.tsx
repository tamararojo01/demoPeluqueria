'use client'

import { MapPin, Heart, Award } from 'lucide-react'
import Image from 'next/image'

export default function About() {
  return (
    <section id="sobre-nosotros" className="section-padding bg-gradient-to-b from-white to-gray-50">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div className="inline-block">
              <span className="text-primary-300 font-semibold text-sm uppercase tracking-wider">
                Nuestra Historia
              </span>
            </div>
            
            <h2 className="heading-2 text-secondary-700">
              Más que una peluquería, <span className="text-primary-300">una experiencia</span>
            </h2>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              En <strong className="text-secondary-700">Estilo & Arte</strong>, llevamos más de 15 años transformando 
              el look de nuestros clientes con pasión y profesionalidad. Nuestro equipo de estilistas expertos 
              combina técnicas tradicionales con las últimas tendencias para ofrecerte un resultado único.
            </p>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              Nos especializamos en crear estilos personalizados que realzan tu personalidad y se adaptan 
              a tu estilo de vida. Desde cortes clásicos hasta las coloraciones más innovadoras, cada 
              servicio es una obra de arte.
            </p>

            {/* Features */}
            <div className="grid sm:grid-cols-3 gap-6 pt-6">
              <div className="flex flex-col items-center text-center">
                <div className="w-14 h-14 bg-primary-50 rounded-full flex items-center justify-center mb-3">
                  <Heart className="w-7 h-7 text-primary-300" />
                </div>
                <h3 className="font-semibold text-secondary-700 mb-1">Pasión</h3>
                <p className="text-sm text-gray-600">Por cada cliente</p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="w-14 h-14 bg-primary-50 rounded-full flex items-center justify-center mb-3">
                  <Award className="w-7 h-7 text-primary-300" />
                </div>
                <h3 className="font-semibold text-secondary-700 mb-1">Calidad</h3>
                <p className="text-sm text-gray-600">Productos premium</p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="w-14 h-14 bg-primary-50 rounded-full flex items-center justify-center mb-3">
                  <MapPin className="w-7 h-7 text-primary-300" />
                </div>
                <h3 className="font-semibold text-secondary-700 mb-1">Ubicación</h3>
                <p className="text-sm text-gray-600">Centro de Madrid</p>
              </div>
            </div>

            {/* Location Info */}
            <div className="bg-primary-50 border border-primary-100 rounded-lg p-6 mt-8">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-primary-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-secondary-700 mb-2">Encuéntranos</h3>
                  <p className="text-gray-700">Calle Gran Vía, 28</p>
                  <p className="text-gray-700">28013 Madrid, España</p>
                  <a 
                    href="https://maps.google.com/?q=Gran+Vía+28+Madrid"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-400 hover:text-primary-500 font-medium mt-2 inline-block"
                  >
                    Ver en Google Maps →
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Images Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="relative h-64 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=2940&auto=format&fit=crop"
                  alt="Interior elegante de Estilo & Arte peluquería"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="relative h-48 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="https://images.unsplash.com/photo-1582095133179-bfd08e2fc6b3?q=80&w=2940&auto=format&fit=crop"
                  alt="Productos profesionales de peluquería"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="relative h-48 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?q=80&w=2940&auto=format&fit=crop"
                  alt="Estilista profesional trabajando en Estilo & Arte"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="relative h-64 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="https://images.unsplash.com/photo-1634449571010-02389ed0f9b0?q=80&w=2940&auto=format&fit=crop"
                  alt="Cliente satisfecha en Estilo & Arte"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
