# 💇‍♀️ Estilo & Arte - Web de Peluquería Premium

> **Web profesional para peluquería moderna, optimizada para conversión y SEO**

![Next.js](https://img.shields.io/badge/Next.js-14-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.6-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8)
![License](https://img.shields.io/badge/License-MIT-green)

## 🌟 Características

- ✨ **Diseño Premium**: Interfaz moderna y elegante con animaciones suaves
- 📱 **Responsive**: Perfectamente adaptado a móviles, tablets y desktop
- 🚀 **SEO Optimizado**: Metadata completa, OpenGraph y estructura semántica
- ⚡ **Rendimiento**: Carga rápida con Next.js 14 y optimización de imágenes
- 💬 **WhatsApp Integrado**: Botón flotante y CTAs para máxima conversión
- 🎨 **Tailwind CSS**: Sistema de diseño consistente y mantenible
- 📧 **Formulario de Contacto**: Validación y UX optimizada
- 🖼️ **Galería Interactiva**: Lightbox para mostrar trabajos
- ⭐ **Testimonios**: Sección de opiniones de clientes
- 🗺️ **Google Maps**: Mapa embebido con ubicación

## 📋 Requisitos Previos

- Node.js 18.x o superior
- npm, yarn o pnpm

## 🚀 Instalación y Uso

### 1. Clonar o descargar el proyecto

```bash
cd demoPeluqueria
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Ejecutar en modo desarrollo

```bash
npm run dev
```

### 4. Abrir en el navegador

Visita [http://localhost:3000](http://localhost:3000)

## 📦 Scripts Disponibles

```bash
npm run dev      # Inicia servidor de desarrollo
npm run build    # Crea build de producción
npm run start    # Inicia servidor de producción
npm run lint     # Ejecuta linter
```

## 🏗️ Estructura del Proyecto

```
demoPeluqueria/
├── app/
│   ├── layout.tsx          # Layout principal con SEO
│   ├── page.tsx            # Página principal
│   └── globals.css         # Estilos globales
├── components/
│   ├── Navbar.tsx          # Navegación responsive
│   ├── Hero.tsx            # Sección hero principal
│   ├── About.tsx           # Sobre nosotros
│   ├── Services.tsx        # Servicios destacados
│   ├── Gallery.tsx         # Galería de trabajos
│   ├── Testimonials.tsx    # Opiniones de clientes
│   ├── Contact.tsx         # Formulario y contacto
│   ├── Footer.tsx          # Footer con información
│   └── WhatsAppButton.tsx  # Botón flotante WhatsApp
├── public/                 # Archivos estáticos
├── package.json
├── tailwind.config.ts      # Configuración Tailwind
├── tsconfig.json           # Configuración TypeScript
└── next.config.js          # Configuración Next.js
```

## 🎨 Personalización

### Colores y Branding

Edita `tailwind.config.ts` para cambiar la paleta de colores:

```typescript
colors: {
  primary: {
    300: '#d4a574',  // Color principal (dorado)
    // ... más tonos
  },
  secondary: {
    700: '#2c3e50',  // Color secundario (azul oscuro)
    // ... más tonos
  },
}
```

### Información de Contacto

Actualiza estos valores en los componentes:

- **Teléfono**: `694278962` → Tu número
- **Email**: `info@estiloarte.com` → Tu email
- **Dirección**: `Calle Gran Vía, 28` → Tu dirección
- **WhatsApp**: Actualizar enlace `wa.me/34694278962` con tu número

### Imágenes

Reemplaza las URLs de Unsplash con tus propias imágenes:
- Subir imágenes a `/public/images/`
- Actualizar rutas en los componentes

### Metadata SEO

Edita `app/layout.tsx` para actualizar:
- Title
- Description
- Keywords
- OpenGraph images
- Verificación de Google

## 🔧 Optimizaciones Implementadas

### SEO
- ✅ Metadata completa en cada página
- ✅ OpenGraph y Twitter Cards
- ✅ Alt tags descriptivos en imágenes
- ✅ Estructura semántica HTML5
- ✅ Schema markup ready

### Performance
- ✅ Next.js Image optimization
- ✅ Lazy loading de imágenes
- ✅ CSS optimizado con Tailwind
- ✅ Componentes client-side selectivos
- ✅ Font optimization

### UX/UI
- ✅ Navegación smooth scroll
- ✅ Animaciones sutiles
- ✅ Mobile-first responsive
- ✅ Feedback visual en formularios
- ✅ Estados hover/active

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## 🌐 Deploy en Producción

### Vercel (Recomendado)

1. Sube el proyecto a GitHub
2. Importa en [Vercel](https://vercel.com)
3. Deploy automático

### Otras plataformas

```bash
npm run build
npm run start
```

Despliega la carpeta `.next` en tu servidor.

## 📞 Contacto y Soporte

¿Necesitas personalizar esta plantilla para tu negocio?

- 📱 WhatsApp: [694 278 962](https://wa.me/34694278962)
- 📧 Email: info@estiloarte.com

## 📝 Licencia

Este proyecto es una plantilla reutilizable. Siéntete libre de modificarlo para tu negocio.

---

## 🎯 Casos de Uso

Esta plantilla es perfecta para:

- ✅ Peluquerías y salones de belleza
- ✅ Barberías
- ✅ Centros de estética
- ✅ Spas
- ✅ Salones de uñas
- ✅ Cualquier negocio local de servicios

## 🔄 Próximas Mejoras (Roadmap)

- [ ] Sistema de reservas online
- [ ] Panel de administración
- [ ] Blog integrado
- [ ] Multi-idioma
- [ ] Modo oscuro
- [ ] PWA (Progressive Web App)

## 💡 Tips para Máxima Conversión

1. **Actualiza el número de WhatsApp** en todos los CTAs
2. **Usa fotos reales** de tu negocio y trabajos
3. **Testimonios auténticos** con nombres y fotos reales
4. **Ofertas especiales** en el hero o como banner
5. **Google My Business** actualizado y vinculado
6. **Horarios precisos** y actualizados
7. **Responde rápido** a mensajes de WhatsApp

---

**Desarrollado con ❤️ usando Next.js 14, TypeScript y Tailwind CSS**
