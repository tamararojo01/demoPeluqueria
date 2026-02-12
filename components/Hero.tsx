'use client'

import { ArrowRight, Sparkles } from 'lucide-react'
import Image from 'next/image'

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=2940&auto=format&fit=crop"
          alt="Interior moderno de peluquería Estilo & Arte"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-secondary-700/80 via-secondary-700/60 to-primary-300/40" />
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 text-center text-white py-20">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in-up">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
            <Sparkles className="w-5 h-5 text-primary-300" />
            <span className="text-sm font-medium">Peluquería Premium en Madrid</span>
          </div>

          {/* Main Heading */}
          <h1 className="heading-1 text-white">
            Peluquería <span className="text-primary-300">Estilo & Arte</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto font-light">
            Estilo moderno en el corazón de Madrid
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
            <a
              href="https://wa.me/34694278962?text=Hola,%20me%20gustaría%20reservar%20cita%20en%20Estilo%20%26%20Arte"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp group"
            >
              <MessageCircle className="w-5 h-5" />
              Contáctanos por WhatsApp
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#servicios"
              className="btn-secondary group"
            >
              Ver Servicios
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-12 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-300">500+</div>
              <div className="text-sm text-gray-300 mt-1">Clientes Felices</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-300">15+</div>
              <div className="text-sm text-gray-300 mt-1">Años de Experiencia</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-300">4.9★</div>
              <div className="text-sm text-gray-300 mt-1">Valoración Google</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/60 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  )
}

function MessageCircle({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  )
}
