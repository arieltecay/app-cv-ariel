# CV Digital - Ariel Tecay

[![React](https://img.shields.io/badge/React-19.1.1-blue.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-blue.svg)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-7.1.2-646CFF.svg)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.17-38B2AC.svg)](https://tailwindcss.com/)
[![Vercel](https://img.shields.io/badge/Vercel-Deployed-black.svg)](https://vercel.com)

Un currículum vitae digital moderno y profesional construido con tecnologías web actuales. Incluye soporte bilingüe (español/inglés), tema oscuro/claro, y está optimizado para compartir en redes sociales y LinkedIn.

## 🚀 Características

- **🎨 Diseño Moderno**: Interfaz limpia y profesional con Tailwind CSS
- **🌍 Bilingüe**: Soporte completo para español e inglés
- **🌓 Tema Adaptable**: Modo oscuro y claro con persistencia automática
- **📱 Responsive**: Diseño completamente responsivo para todos los dispositivos
- **⚡ Alto Rendimiento**: Construido con Vite para carga rápida
- **🔍 SEO Optimizado**: Meta tags y Open Graph para mejor visibilidad
- **🛡️ Seguro**: Sanitización de HTML con DOMPurify
- **♿ Accesible**: Cumple con estándares de accesibilidad web

## 👨‍💻 Información Profesional

### Ariel Tecay
**Desarrollador Full Stack | MERN Stack Developer**

### 📧 Contacto
- **Email**: arieltecay@gmail.com
- **Teléfono**: +5493816346097
- **LinkedIn**: [linkedin.com/in/arieltecay](https://linkedin.com/in/arieltecay)
- **GitHub**: [github.com/arieltecay](https://github.com/arieltecay)
- **Ubicación**: Tucumán, San Miguel de Tucumán, Argentina

### 💼 Experiencia Profesional

#### Instructor de Desarrollo Full Stack - NUCBA
**Marzo 2022 - Diciembre 2022**
- Instructor especializado en stack MERN (MongoDB, Express.js, React, Node.js)
- Programa completo desde fundamentos de HTML, CSS y JavaScript
- Desarrollo avanzado de aplicaciones React y APIs con Node.js/Express
- Proyecto final: E-commerce completo para delivery de pizzas

#### Software Developer - Mercado Libre
**Abril 2023 - Actualidad**
- Desarrollo de soluciones escalables en el ecosistema de Mercado Libre
- Tecnologías: React.js, TypeScript, Go (Golang), Node.js
- Trabajo colaborativo en entornos ágiles distribuidos

#### Software Engineer - Naranja X
**Diciembre 2021 - Abril 2023**
- Desarrollo de soluciones digitales para el sector financiero
- Tecnologías: JavaScript, Node.js, React
- Colaboración estrecha con equipos de diseño y producto

#### Full Stack Web Developer - Cultura IT
**Junio 2021 - Diciembre 2021**
- Desarrollo de aplicaciones web con React, Node.js y MongoDB
- Diseño e implementación de funcionalidades clave
- Integración de APIs y mejora de UX

#### Technical Manager - Compumundo
**Mayo 2013 - Agosto 2020 (7 años 4 meses)**
- Gestión del área de servicio técnico post-venta
- Reparación de dispositivos electrónicos (computadoras, celulares, tablets)
- Coordinación de equipo técnico y control de calidad

### 🎓 Educación

#### Full Stack Web Development - Henry
**2020**
- Bootcamp intensivo de 4 meses (8 horas diarias)
- Desarrollo de E-commerce funcional como proyecto final

#### Bachelor of Science in Computer Science - Universidad Tecnológica Nacional de Tucumán
**2014 - 2018**

### 🛠️ Habilidades Técnicas

**Frontend**: JavaScript (ES6+), TypeScript, React, HTML5 & CSS3, Tailwind CSS
**Backend**: Node.js, Express, Go (Golang), SQL, MongoDB
**Herramientas**: Git, Desarrollo Web, MERN Stack, Enseñanza, Mentoría

## 🏗️ Arquitectura del Proyecto

```
client/
├── public/                 # Archivos estáticos
│   ├── cv-icon.svg        # Ícono del CV
│   └── foto-perfil.png    # Foto de perfil
├── src/
│   ├── components/        # Componentes React
│   │   ├── Header.tsx     # Encabezado con información personal
│   │   ├── Summary.tsx    # Resumen profesional
│   │   ├── Experience.tsx # Sección de experiencia laboral
│   │   ├── Education.tsx  # Sección de educación
│   │   ├── Skills.tsx     # Habilidades técnicas
│   │   └── WhatsAppIcon.tsx # Componente de ícono WhatsApp
│   ├── context/           # Contextos de React
│   │   ├── LanguageContext.tsx # Gestión de idioma
│   │   └── ThemeContext.tsx    # Gestión de tema
│   ├── data/
│   │   └── mock-data.ts   # Datos del CV (bilingüe)
│   └── assets/            # Recursos adicionales
├── dist/                  # Build de producción (generado)
├── vercel.json           # Configuración de despliegue Vercel
└── README.md             # Esta documentación
```

## 🛠️ Tecnologías Utilizadas

- **Framework**: React 19.1.1 con TypeScript
- **Build Tool**: Vite 7.1.2
- **Styling**: Tailwind CSS 3.4.17
- **Icons**: Lucide React & React Icons
- **Routing**: React Router (si se expande)
- **State Management**: React Context API
- **Security**: DOMPurify para sanitización HTML
- **Deployment**: Vercel

## 🚀 Instalación y Desarrollo

### Prerrequisitos
- Node.js 18+ y npm
- Git

### Instalación
```bash
# Clonar el repositorio
git clone <repository-url>
cd client

# Instalar dependencias
npm install
```

### Desarrollo Local
```bash
# Iniciar servidor de desarrollo
npm run dev

# El proyecto estará disponible en http://localhost:5173
```

### Build de Producción
```bash
# Construir para producción
npm run build

# Vista previa del build
npm run preview
```

### Linting
```bash
# Ejecutar ESLint
npm run lint
```

## 📦 Despliegue

### Vercel (Recomendado)
1. Conectar el repositorio a Vercel
2. El archivo `vercel.json` está configurado automáticamente
3. Despliegue automático en cada push a main

### Configuración Manual
```bash
# Build del proyecto
npm run build

# Los archivos estánticos estarán en la carpeta 'dist'
# Servir con cualquier servidor web estático
```

## 🎨 Personalización

### Cambiar Información del CV
Editar `src/data/mock-data.ts`:
- Información personal
- Experiencia laboral
- Educación
- Habilidades técnicas

### Modificar Estilos
- Los estilos están en Tailwind CSS
- Colores principales: Azul (#3B82F6)
- Tema oscuro/claro automático

### Agregar Nuevas Secciones
1. Crear componente en `src/components/`
2. Agregar datos en `mock-data.ts`
3. Importar y usar en `App.tsx`

## 📈 Optimizaciones SEO

- Meta tags descriptivos
- Open Graph para LinkedIn/Facebook
- Twitter Cards
- Structured data (planeado para futuras versiones)
- URLs limpias y semánticas

## 🔧 Mantenimiento

### Actualizaciones
```bash
# Actualizar dependencias
npm update

# Verificar compatibilidad
npm run build
npm run lint
```

### Mejoras Futuras Planeadas
- [ ] Animaciones suaves con Framer Motion
- [ ] PWA (Progressive Web App)
- [ ] Modo impresión optimizado
- [ ] Integración con APIs para datos dinámicos
- [ ] Analytics y seguimiento

## 📄 Licencia

Este proyecto es privado y está destinado únicamente para uso personal profesional.

## 👥 Contribución

Proyecto personal - no se aceptan contribuciones externas.

## 📞 Contacto

**Ariel Tecay**
- Email: arieltecay@gmail.com
- LinkedIn: [linkedin.com/in/arieltecay](https://linkedin.com/in/arieltecay)

---

⭐ **Desplegado en Vercel** | 🌐 **Responsive Design** | 🎯 **SEO Optimizado**
