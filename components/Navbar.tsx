'use client'

import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { href: '#inicio', label: 'Inicio' },
    { href: '#sobre-nosotros', label: 'Nosotros' },
    { href: '#servicios', label: 'Servicios' },
    { href: '#galeria', label: 'Galería' },
    { href: '#opiniones', label: 'Opiniones' },
    { href: '#contacto', label: 'Contacto' },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm">
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="text-2xl font-bold">
              <span className="text-primary-300">Estilo</span>
              <span className="text-secondary-700"> & Arte</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-700 hover:text-primary-300 font-medium transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://wa.me/34694278962?text=Hola,%20me%20gustaría%20reservar%20cita%20en%20Estilo%20%26%20Arte"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
            >
              Reservar Cita
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t animate-fade-in">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-gray-700 hover:text-primary-300 font-medium transition-colors px-4 py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="https://wa.me/34694278962?text=Hola,%20me%20gustaría%20reservar%20cita%20en%20Estilo%20%26%20Arte"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp mx-4"
              >
                Reservar Cita
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
