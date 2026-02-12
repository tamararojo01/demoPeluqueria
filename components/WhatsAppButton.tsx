'use client'

import { MessageCircle } from 'lucide-react'

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/34694278962?text=Hola,%20me%20gustaría%20información%20sobre%20Estilo%20%26%20Arte"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-16 h-16 bg-green-500 text-white rounded-full shadow-2xl hover:bg-green-600 hover:scale-110 transition-all duration-300 animate-float"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle size={28} />
    </a>
  )
}
