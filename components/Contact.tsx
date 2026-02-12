'use client'

import { useState } from 'react'
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setSubmitStatus('success')
      setIsSubmitting(false)
      setFormData({ name: '', email: '', message: '' })
      
      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000)
    }, 1500)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <section id="contacto" className="section-padding bg-gradient-to-b from-gray-50 to-white">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary-300 font-semibold text-sm uppercase tracking-wider">
            Contacto
          </span>
          <h2 className="heading-2 text-secondary-700 mt-4 mb-6">
            Reserva tu <span className="text-primary-300">cita ahora</span>
          </h2>
          <p className="text-lg text-gray-600">
            Estamos aquí para transformar tu estilo. Contáctanos por WhatsApp para una respuesta inmediata 
            o completa el formulario
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="heading-3 text-secondary-700 mb-6">
                Información de contacto
              </h3>
              
              <div className="space-y-6">
                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-secondary-700 mb-1">Teléfono</h4>
                    <a 
                      href="tel:694278962" 
                      className="text-gray-600 hover:text-primary-400 transition-colors"
                    >
                      694 278 962
                    </a>
                    <p className="text-sm text-gray-500 mt-1">Lunes a Sábado, 9:00 - 20:00h</p>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-secondary-700 mb-1">WhatsApp</h4>
                    <a 
                      href="https://wa.me/34694278962?text=Hola,%20me%20gustaría%20reservar%20cita%20en%20Estilo%20%26%20Arte"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-600 hover:text-green-700 font-medium transition-colors"
                    >
                      Enviar mensaje →
                    </a>
                    <p className="text-sm text-gray-500 mt-1">Respuesta inmediata</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-secondary-700 mb-1">Email</h4>
                    <a 
                      href="mailto:info@estiloarte.com" 
                      className="text-gray-600 hover:text-primary-400 transition-colors"
                    >
                      info@estiloarte.com
                    </a>
                    <p className="text-sm text-gray-500 mt-1">Respuesta en 24h</p>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-secondary-700 mb-1">Ubicación</h4>
                    <p className="text-gray-600">Calle Gran Vía, 28</p>
                    <p className="text-gray-600">28013 Madrid, España</p>
                    <a 
                      href="https://maps.google.com/?q=Gran+Vía+28+Madrid"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-400 hover:text-primary-500 text-sm font-medium mt-1 inline-block"
                    >
                      Ver en mapa →
                    </a>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-primary-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-secondary-700 mb-2">Horario</h4>
                    <div className="text-sm text-gray-600 space-y-1">
                      <p><span className="font-medium">Lun - Vie:</span> 9:00 - 20:00</p>
                      <p><span className="font-medium">Sábado:</span> 10:00 - 19:00</p>
                      <p><span className="font-medium">Domingo:</span> Cerrado</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Embed */}
            <div className="rounded-xl overflow-hidden shadow-lg h-64">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3037.4965514057315!2d-3.7097524!3d40.4201111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4228e23705d39f%3A0xa146c0d1dd1d6e20!2sGran%20V%C3%ADa%2C%2028%2C%2028013%20Madrid!5e0!3m2!1sen!2ses!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación de Estilo & Arte en Google Maps"
              />
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-10">
            <h3 className="heading-3 text-secondary-700 mb-6">
              Envíanos un mensaje
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                  Nombre completo *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-300 focus:border-transparent transition-all outline-none"
                  placeholder="Tu nombre"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-300 focus:border-transparent transition-all outline-none"
                  placeholder="tu@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                  Mensaje *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-300 focus:border-transparent transition-all outline-none resize-none"
                  placeholder="Cuéntanos qué servicio te interesa o déjanos tu consulta..."
                />
              </div>

              {submitStatus === 'success' && (
                <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg">
                  ¡Mensaje enviado! Te contactaremos pronto.
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>Enviando...</>
                ) : (
                  <>
                    Enviar mensaje
                    <Send className="w-5 h-5" />
                  </>
                )}
              </button>

              <p className="text-sm text-gray-500 text-center">
                O contáctanos directamente por{' '}
                <a 
                  href="https://wa.me/34694278962"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-600 font-semibold hover:text-green-700"
                >
                  WhatsApp
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
