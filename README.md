# 🚀 Portfolio Personal - Nevits Developer

<div align="center">

![Astro](https://img.shields.io/badge/Astro-5.10.0-FF5D01?style=for-the-badge&logo=astro)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1.10-38B2AC?style=for-the-badge&logo=tailwind-css)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![GSAP](https://img.shields.io/badge/GSAP-3.13.0-88CE02?style=for-the-badge)

**Portfolio personal desarrollado con tecnologías modernas y diseño responsive**

[🌐 Ver Demo](https://tu-dominio.com) • [📧 Contacto](mailto:tu-email@ejemplo.com) • [💼 LinkedIn](https://linkedin.com/in/tu-perfil)

</div>

---

## ✨ Características Destacadas

### 🎨 **Diseño y UX**
- **Diseño Moderno**: Interfaz limpia y profesional con animaciones suaves
- **Totalmente Responsive**: Optimizado para desktop, tablet y móvil
- **Modo Oscuro**: Tema oscuro elegante con transiciones fluidas
- **Animaciones GSAP**: Efectos visuales avanzados y transiciones

### 🌐 **Internacionalización**
- **Multiidioma**: Soporte completo para Español e Inglés
- **Detección Automática**: Detecta el idioma del navegador automáticamente
- **Persistencia**: Recuerda la preferencia de idioma del usuario
- **Traducciones Completas**: Todo el contenido está traducido

### 📧 **Funcionalidades de Contacto**
- **Formulario Funcional**: Integración con EmailJS para envío de emails
- **Validación en Tiempo Real**: Validación de campos con feedback visual
- **Notificaciones**: Mensajes de éxito y error personalizados
- **Configuración Segura**: Variables de entorno para claves API

### 🛠️ **Stack Tecnológico**
- **Astro 5.10.0**: Framework web moderno y ultra-rápido
- **Tailwind CSS 4.1.10**: Framework CSS utility-first
- **TypeScript**: Tipado estático para mayor robustez
- **GSAP 3.13.0**: Biblioteca de animaciones profesionales
- **Spline Tool**: Integración 3D interactiva

---

## 🚀 Instalación y Configuración

### Prerrequisitos
- **Node.js** 18.0 o superior
- **pnpm** (recomendado) o npm

### 1. Clonar el Repositorio
```bash
git clone https://github.com/tu-usuario/personal-portfolio.git
cd personal-portfolio
```

### 2. Instalar Dependencias
```bash
pnpm install
```

### 3. Configurar Variables de Entorno
```bash
# Ejecutar el script de configuración
pnpm setup-env

# Editar el archivo .env con tus claves de EmailJS
nano .env
```

**Variables requeridas en `.env`:**
```env
PUBLIC_EMAILJS_SERVICE_ID=tu_service_id
PUBLIC_EMAILJS_TEMPLATE_ID=tu_template_id
PUBLIC_EMAILJS_PUBLIC_KEY=tu_public_key
```

### 4. Iniciar Servidor de Desarrollo
```bash
pnpm dev
```

El sitio estará disponible en `http://localhost:4321`

---

## 📁 Estructura del Proyecto

```
personal-portfolio/
├── 📁 public/                    # Archivos estáticos
│   ├── 📄 Nevits_CV.pdf         # CV descargable
│   ├── 📁 fonts/                # Fuentes personalizadas
│   ├── 📁 scripts/              # Scripts JavaScript
│   └── 📁 images/               # Imágenes del proyecto
├── 📁 src/
│   ├── 📁 components/           # Componentes Astro
│   │   ├── 📁 about/           # Sección Acerca de
│   │   ├── 📁 contact/         # Formulario de contacto
│   │   ├── 📁 header/          # Navegación principal
│   │   ├── 📁 technologies/    # Sección de tecnologías
│   │   └── 📁 language-selector/ # Selector de idioma
│   ├── 📁 i18n/                # Internacionalización
│   │   └── 📄 translations.ts  # Traducciones
│   ├── 📁 layouts/             # Layouts de página
│   ├── 📁 pages/               # Páginas del sitio
│   └── 📁 styles/              # Estilos globales
├── 📄 astro.config.mjs         # Configuración de Astro
├── 📄 tailwind.config.mjs      # Configuración de Tailwind
├── 📄 package.json             # Dependencias y scripts
└── 📄 README.md               # Este archivo
```

---

## 🛠️ Comandos Disponibles

| Comando | Descripción |
|---------|-------------|
| `pnpm dev` | Inicia el servidor de desarrollo en `localhost:4321` |
| `pnpm build` | Construye el proyecto para producción |
| `pnpm preview` | Previsualiza la build de producción |
| `pnpm setup-env` | Configura las variables de entorno para EmailJS |
| `pnpm astro --help` | Muestra ayuda de la CLI de Astro |

---

## 📧 Configuración de EmailJS

Para que el formulario de contacto funcione correctamente, necesitas configurar EmailJS:

### 1. Crear Cuenta en EmailJS
- Ve a [EmailJS.com](https://www.emailjs.com/)
- Regístrate para obtener una cuenta gratuita
- Verifica tu email

### 2. Configurar Servicio de Email
- En el dashboard, ve a "Email Services"
- Agrega un nuevo servicio (Gmail, Outlook, etc.)
- Conecta tu cuenta de email
- Anota el **Service ID**

### 3. Crear Plantilla de Email
- Ve a "Email Templates"
- Crea una nueva plantilla con las variables:
  - `{{from_name}}` - Nombre del remitente
  - `{{from_email}}` - Email del remitente
  - `{{subject}}` - Asunto del mensaje
  - `{{message}}` - Contenido del mensaje
- Anota el **Template ID**

### 4. Obtener Claves API
- Ve a "Account" → "API Keys"
- Copia tu **Public Key**

### 5. Configurar Variables de Entorno
Edita el archivo `.env` con tus claves reales:
```env
PUBLIC_EMAILJS_SERVICE_ID=tu_service_id_aqui
PUBLIC_EMAILJS_TEMPLATE_ID=tu_template_id_aqui
PUBLIC_EMAILJS_PUBLIC_KEY=tu_public_key_aqui
```

📖 **Guía Completa**: Consulta [EMAILJS_SETUP.md](./EMAILJS_SETUP.md) para instrucciones detalladas.

---

## 🎨 Personalización

### Cambiar Información Personal
1. **Datos Personales**: Edita `src/i18n/translations.ts`
2. **CV**: Reemplaza `public/Nevits_CV.pdf` con tu CV
3. **Imágenes**: Actualiza las imágenes en `public/images/`
4. **Enlaces Sociales**: Modifica los enlaces en los componentes

### Personalizar Diseño
1. **Colores**: Edita `tailwind.config.mjs` para cambiar la paleta de colores
2. **Fuentes**: Agrega nuevas fuentes en `public/fonts/`
3. **Animaciones**: Modifica las animaciones GSAP en los componentes
4. **Estilos**: Edita `src/styles/global.css` para estilos personalizados

### Agregar Nuevas Secciones
1. Crea un nuevo componente en `src/components/`
2. Agrega las traducciones en `src/i18n/translations.ts`
3. Incluye el componente en `src/pages/index.astro`

---

## 🔒 Seguridad

- ✅ **Variables de Entorno**: Las claves API se almacenan en `.env`
- ✅ **Gitignore**: El archivo `.env` está excluido del repositorio
- ✅ **Validación**: Formularios con validación del lado cliente
- ✅ **HTTPS**: Recomendado para producción

---

## 📱 Características Responsive

- **Desktop**: Diseño completo con todas las funcionalidades
- **Tablet**: Layout adaptado para pantallas medianas
- **Móvil**: Navegación optimizada y formularios táctiles
- **Breakpoints**: 640px, 768px, 1024px, 1280px

---

## 🌟 Tecnologías Utilizadas

### Frontend
- **Astro** - Framework web moderno
- **Tailwind CSS** - Framework CSS utility-first
- **TypeScript** - Tipado estático
- **GSAP** - Animaciones avanzadas

### Herramientas
- **pnpm** - Gestor de paquetes rápido
- **Vite** - Bundler y dev server
- **EmailJS** - Servicio de emails

### Desarrollo
- **ESLint** - Linting de código
- **Prettier** - Formateo de código
- **Git** - Control de versiones

---

## 🤝 Contribuir

Las contribuciones son bienvenidas. Para contribuir:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

---

## 📄 Licencia

Este proyecto es de uso personal. Todos los derechos reservados.

---

## 📞 Contacto

- **Email**: [tu-email@ejemplo.com](mailto:tu-email@ejemplo.com)
- **LinkedIn**: [Tu Perfil](https://linkedin.com/in/tu-perfil)
- **GitHub**: [@tu-usuario](https://github.com/tu-usuario)

---

<div align="center">

**Desarrollado con ❤️ por Nevits Developer**

[⬆️ Volver arriba](#-portfolio-personal---nevits-developer)

</div>
