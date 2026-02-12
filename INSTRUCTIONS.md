# 🚀 Guía de Inicio Rápido - Estilo & Arte

## 📥 Instalación Paso a Paso

### Paso 1: Verificar Node.js

```bash
node --version
```

Debes tener Node.js 18 o superior. Si no lo tienes, descárgalo de [nodejs.org](https://nodejs.org)

### Paso 2: Navegar al proyecto

```bash
cd demoPeluqueria
```

### Paso 3: Instalar dependencias

```bash
npm install
```

Este proceso puede tardar 1-2 minutos. Instalará:
- Next.js 14
- React 18
- Tailwind CSS
- TypeScript
- Lucide React (iconos)

### Paso 4: Iniciar servidor de desarrollo

```bash
npm run dev
```

### Paso 5: Abrir en navegador

Abre [http://localhost:3000](http://localhost:3000)

¡Listo! 🎉

---

## 🎨 Personalización Rápida

### 1. Cambiar Nombre de la Peluquería

**Archivo**: `components/Navbar.tsx`

```typescript
// Línea 28-31
<span className="text-primary-300">Tu Nombre</span>
<span className="text-secondary-700"> Aquí</span>
```

**Archivo**: `app/layout.tsx`

```typescript
// Línea 8
title: 'Tu Peluquería | Título SEO',
```

### 2. Actualizar Teléfono y WhatsApp

Busca y reemplaza en todos los archivos:
- `694278962` → Tu número (sin espacios)
- `34694278962` → Código país + tu número

**Archivos a modificar**:
- `components/Navbar.tsx`
- `components/Hero.tsx`
- `components/WhatsAppButton.tsx`
- `components/Services.tsx`
- `components/Contact.tsx`
- `components/Footer.tsx`

### 3. Cambiar Email

Reemplaza `info@estiloarte.com` con tu email en:
- `components/Contact.tsx`
- `components/Footer.tsx`

### 4. Actualizar Dirección

**Archivo**: `components/About.tsx` y `components/Footer.tsx`

```typescript
<p>Tu Calle, Número</p>
<p>Tu Código Postal y Ciudad</p>
```

### 5. Cambiar Mapa de Google

**Archivo**: `components/Contact.tsx`

1. Ve a [Google Maps](https://maps.google.com)
2. Busca tu dirección
3. Clic en "Compartir" → "Insertar un mapa"
4. Copia el código iframe
5. Reemplaza el `src` del iframe (línea ~128)

### 6. Colores Personalizados

**Archivo**: `tailwind.config.ts`

```typescript
primary: {
  300: '#tu-color-hex',  // Color principal
},
secondary: {
  700: '#tu-color-hex',  // Color secundario
},
```

Herramienta recomendada: [Coolors.co](https://coolors.co)

### 7. Subir Tus Propias Fotos

1. Crea carpeta: `public/images/`
2. Sube tus fotos
3. Reemplaza URLs en componentes:

**Ejemplo en Hero.tsx**:
```typescript
// Antes
src="https://images.unsplash.com/..."

// Después
src="/images/tu-foto.jpg"
```

---

## 🔧 Comandos Útiles

```bash
# Desarrollo
npm run dev          # Inicia servidor local

# Producción
npm run build        # Crea versión optimizada
npm run start        # Inicia versión de producción

# Calidad de código
npm run lint         # Verifica errores
```

---

## 📱 Deploy en Vercel (GRATIS)

### Opción 1: Deploy Automático (Recomendado)

1. **Crear cuenta en Vercel**
   - Ve a [vercel.com](https://vercel.com)
   - Regístrate con GitHub

2. **Subir proyecto a GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin tu-repo-url
   git push -u origin main
   ```

3. **Importar en Vercel**
   - New Project → Import Git Repository
   - Selecciona tu repo
   - Click "Deploy"

4. **¡Listo!** Tu web está online 🚀

### Opción 2: Deploy Manual

```bash
npm install -g vercel
vercel login
vercel
```

---

## 🎯 Checklist de Personalización

Antes de publicar, asegúrate de:

- [ ] Cambiar nombre de la peluquería
- [ ] Actualizar teléfono y WhatsApp
- [ ] Cambiar email de contacto
- [ ] Actualizar dirección física
- [ ] Configurar mapa de Google Maps
- [ ] Subir fotos reales (mínimo 10)
- [ ] Reemplazar testimonios por reales
- [ ] Actualizar horarios
- [ ] Personalizar servicios y precios
- [ ] Cambiar metadata SEO
- [ ] Configurar OpenGraph image
- [ ] Añadir enlaces a redes sociales
- [ ] Probar formulario de contacto
- [ ] Verificar todos los enlaces WhatsApp
- [ ] Probar responsive en móvil

---

## 🐛 Solución de Problemas

### Error: "Cannot find module"
```bash
rm -rf node_modules package-lock.json
npm install
```

### Error al compilar TypeScript
```bash
npm run build
# Ver errores específicos
```

### Imágenes no se ven
- Verifica rutas relativas
- Asegúrate de usar `/` al inicio
- Revisa extensión del archivo (.jpg, .png)

### WhatsApp no funciona
- Verifica formato: `wa.me/34694278962`
- Incluye código de país (34 para España)
- Sin espacios ni guiones

---

## 📊 SEO y Marketing

### Google My Business
1. Crea/reclama perfil en Google
2. Añade misma dirección que en la web
3. Sube fotos profesionales
4. Pide opiniones a clientes

### Redes Sociales
- Crea Instagram Business
- Configura Facebook Page
- Añade enlaces en `components/Footer.tsx`

### Analytics (Opcional)

**Instalar Google Analytics**:

1. Crea propiedad en [analytics.google.com](https://analytics.google.com)
2. Instala el paquete:
```bash
npm install @next/third-parties
```
3. Añade en `app/layout.tsx`:
```typescript
import { GoogleAnalytics } from '@next/third-parties/google'

// En el body
<GoogleAnalytics gaId="G-TU-ID" />
```

---

## 💡 Tips de Conversión

### Aumenta las Reservas

1. **Respuestas rápidas**: Contesta WhatsApp en < 5 min
2. **Ofertas visibles**: Añade banner con promoción
3. **Fotos de calidad**: Invierte en fotografía profesional
4. **Testimonios reales**: Con permisos de clientes
5. **Google Reviews**: Pide opiniones después de cada servicio
6. **Call-to-Actions claros**: Botones WhatsApp visibles
7. **Horarios actualizados**: Revisa semanalmente

### Mejora tu Posicionamiento

- Publica regularmente en redes
- Crea blog con consejos de peluquería
- Pide enlaces de otros negocios locales
- Actualiza Google My Business semanalmente
- Responde todas las opiniones

---

## 🆘 Soporte

¿Necesitas ayuda personalizada?

- 💬 WhatsApp: 694 278 962
- 📧 Email: info@estiloarte.com

---

## 🎓 Recursos Útiles

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [TypeScript](https://www.typescriptlang.org/docs)
- [Vercel Deploy](https://vercel.com/docs)

---

**¡Éxito con tu nueva web! 🚀**
