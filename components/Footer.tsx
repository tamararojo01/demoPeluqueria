'use client'

import Link from 'next/link'
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Twitter } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-secondary-700 text-white">
      <div className="container-custom">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 py-16">
          {/* About */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-2">
                <span className="text-primary-300">Estilo</span> & Arte
              </h3>
              <p className="text-gray-300">
                Peluquería Premium en Madrid
              </p>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              Más de 15 años transformando el estilo de nuestros clientes con pasión, 
              profesionalidad y las últimas técnicas en corte, coloración y estilismo.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-4">
              <a
                href="https://instagram.com/estiloarte"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-primary-300 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://facebook.com/estiloarte"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-primary-300 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://twitter.com/estiloarte"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-primary-300 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Enlaces Rápidos</h4>
            <ul className="space-y-3">
              <li>
                <Link href="#inicio" className="text-gray-400 hover:text-primary-300 transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="#sobre-nosotros" className="text-gray-400 hover:text-primary-300 transition-colors">
                  Nosotros
                </Link>
              </li>
              <li>
                <Link href="#servicios" className="text-gray-400 hover:text-primary-300 transition-colors">
                  Servicios
                </Link>
              </li>
              <li>
                <Link href="#galeria" className="text-gray-400 hover:text-primary-300 transition-colors">
                  Galería
                </Link>
              </li>
              <li>
                <Link href="#opiniones" className="text-gray-400 hover:text-primary-300 transition-colors">
                  Opiniones
                </Link>
              </li>
              <li>
                <Link href="#contacto" className="text-gray-400 hover:text-primary-300 transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contacto</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin size={20} className="flex-shrink-0 mt-0.5 text-primary-300" />
                <div>
                  <p>Calle Gran Vía, 28</p>
                  <p>28013 Madrid, España</p>
                </div>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Phone size={20} className="flex-shrink-0 text-primary-300" />
                <a href="tel:694278962" className="hover:text-primary-300 transition-colors">
                  694 278 962
                </a>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Mail size={20} className="flex-shrink-0 text-primary-300" />
                <a href="mailto:info@estiloarte.com" className="hover:text-primary-300 transition-colors">
                  info@estiloarte.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <Clock size={20} className="flex-shrink-0 mt-0.5 text-primary-300" />
                <div className="text-sm">
                  <p>Lun - Vie: 9:00 - 20:00</p>
                  <p>Sábado: 10:00 - 19:00</p>
                  <p>Domingo: Cerrado</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {currentYear} Estilo & Arte. Todos los derechos reservados.
            </p>
            <div className="flex gap-6 text-sm">
              <Link href="/privacidad" className="text-gray-400 hover:text-primary-300 transition-colors">
                Política de Privacidad
              </Link>
              <Link href="/cookies" className="text-gray-400 hover:text-primary-300 transition-colors">
                Cookies
              </Link>
              <Link href="/legal" className="text-gray-400 hover:text-primary-300 transition-colors">
                Aviso Legal
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
