export type Language = 'en' | 'es';

export interface Translations {
  header: {
    home: string;
    technologies: string;
    projects: string;
    contact: string;
    codePlus: string;
  };
  about: {
    title: string;
    description: string;
    downloadCV: string;
    cvDownloaded: string;
  };
  technologies: {
    title: string;
    description: string;
    frontend: string;
    backend: string;
    microsoft: string;
    mobile: string;
    cloud: string;
    selectTechnology: string;
    selectTechnologyDescription: string;
    projectsWith: string;
    viewDetails: string;
    hideDetails: string;
    viewProject: string;
    viewGitHub: string;
    status: {
      completed: string;
      inDevelopment: string;
      planned: string;
    };
  };
  contact: {
    title: string;
    subtitle: string;
    name: string;
    email: string;
    subject: string;
    message: string;
    send: string;
    sending: string;
    success: string;
    error: string;
    alternative: string;
    placeholderName: string;
    placeholderEmail: string;
    placeholderSubject: string;
    placeholderMessage: string;
  };
}

export const translations: Record<Language, Translations> = {
  en: {
    header: {
      home: 'Home',
      technologies: 'Technologies',
      projects: 'Projects',
      contact: 'Contact',
      codePlus: 'Code++'
    },
    about: {
      title: 'Nevits Developer',
      description: "I'm a software engineer with a passion for building web applications.",
      downloadCV: 'Download CV',
      cvDownloaded: 'CV downloaded successfully!'
    },
    technologies: {
      title: 'Technologies',
      description: 'Technologies and tools I\'ve worked with throughout my career',
      frontend: 'Frontend Development',
      backend: 'Backend Development',
      microsoft: 'Microsoft Stack',
      mobile: 'Mobile Development',
      cloud: 'Cloud Services',
      selectTechnology: 'Select Technology',
      selectTechnologyDescription: 'Description of the selected technology',
      projectsWith: 'Projects with',
      viewDetails: 'View Details',
      hideDetails: 'Hide Details',
      viewProject: 'View Project',
      viewGitHub: 'View on GitHub',
      status: {
        completed: 'Completed',
        inDevelopment: 'In Development',
        planned: 'Planned'
      }
    },
    contact: {
      title: 'Contact',
      subtitle: 'Get in Touch',
      name: 'Name',
      email: 'Email',
      subject: 'Subject',
      message: 'Message',
      send: 'Send',
      sending: 'Sending...',
      success: 'Message sent successfully!',
      error: 'There was an error sending the message.',
      alternative: 'Alternatively, you can contact me via email at',
      placeholderName: 'Your Name',
      placeholderEmail: 'your@email.com',
      placeholderSubject: 'How can I help you?',
      placeholderMessage: 'Tell me more about your project...'
    }
  },
  es: {
    header: {
      home: 'Inicio',
      technologies: 'Tecnologías',
      projects: 'Proyectos',
      contact: 'Contacto',
      codePlus: 'Code++'
    },
    about: {
      title: 'Nevits Developer',
      description: 'Soy un ingeniero de software apasionado por construir aplicaciones web.',
      downloadCV: 'Descargar CV',
      cvDownloaded: '¡CV descargado correctamente!'
    },
    technologies: {
      title: 'Tecnologías',
      description: 'Tecnologías y herramientas con las que he trabajado a lo largo de mi carrera',
      frontend: 'Desarrollo Frontend',
      backend: 'Desarrollo Backend',
      microsoft: 'Stack Microsoft',
      mobile: 'Desarrollo Móvil',
      cloud: 'Servicios en la Nube',
      selectTechnology: 'Seleccionar Tecnología',
      selectTechnologyDescription: 'Descripción de la tecnología seleccionada',
      projectsWith: 'Proyectos con',
      viewDetails: 'Ver Detalles',
      hideDetails: 'Ocultar Detalles',
      viewProject: 'Ver Proyecto',
      viewGitHub: 'Ver en GitHub',
      status: {
        completed: 'Completado',
        inDevelopment: 'En Desarrollo',
        planned: 'Planificado'
      }
    },
    contact: {
      title: 'Contacto',
      subtitle: 'Ponte en Contacto',
      name: 'Nombre',
      email: 'Correo Electrónico',
      subject: 'Asunto',
      message: 'Mensaje',
      send: 'Enviar',
      sending: 'Enviando...',
      success: 'Mensaje enviado correctamente!',
      error: 'Hubo un error al enviar el mensaje.',
      alternative: 'Alternativamente, puedes contactarme por correo electrónico en',
      placeholderName: 'Tu nombre',
      placeholderEmail: 'tu@email.com',
      placeholderSubject: '¿En qué puedo ayudarte?',
      placeholderMessage: 'Cuéntame más sobre tu proyecto...'
    }
  }
};

// Función para detectar el idioma del navegador
function detectBrowserLanguage(): Language {
  if (typeof window !== 'undefined') {
    // Obtener el idioma del navegador
    const browserLang = navigator.language || navigator.languages?.[0] || 'en';
    
    // Extraer el código de idioma principal (es-ES -> es, en-US -> en)
    const primaryLang = browserLang.split('-')[0].toLowerCase();

    // Verificar si el idioma está soportado
    if (primaryLang === 'es') {
      return 'es';
    }
    
    // Por defecto, usar inglés para cualquier otro idioma
    return 'en';
  }
  return 'en';
}

// Función para obtener el idioma actual
export function getCurrentLanguage(): Language {
  if (typeof window !== 'undefined') {
    // Primero verificar si hay un idioma guardado en localStorage
    const savedLanguage = localStorage.getItem('language') as Language;
    
    if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'es')) {
      return savedLanguage;
    }
    
    // Si no hay idioma guardado, detectar el idioma del navegador
    const browserLanguage = detectBrowserLanguage();
    
    // Guardar el idioma detectado para futuras visitas
    localStorage.setItem('language', browserLanguage);
    
    return browserLanguage;
  }
  return 'en';
}

// Función para cambiar el idioma
export function setLanguage(language: Language) {
  if (typeof window !== 'undefined') {
    localStorage.setItem('language', language);
    window.dispatchEvent(new CustomEvent('languageChanged', { detail: language }));
  }
}

// Función para obtener traducción
export function getTranslation(key: string): string {
  const language = getCurrentLanguage();
  const keys = key.split('.');
  let value: any = translations[language];
  
  for (const k of keys) {
    value = value?.[k];
  }
  
  return value || key;
} 