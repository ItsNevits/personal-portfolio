# Configuración de EmailJS

## Pasos para configurar EmailJS en tu proyecto

### 1. Crear una cuenta en EmailJS
1. Ve a [EmailJS.com](https://www.emailjs.com/)
2. Regístrate para obtener una cuenta gratuita
3. Verifica tu email

### 2. Configurar un servicio de email
1. En el dashboard de EmailJS, ve a "Email Services"
2. Haz clic en "Add New Service"
3. Selecciona tu proveedor de email (Gmail, Outlook, etc.)
4. Conecta tu cuenta de email
5. Guarda el servicio y anota el **Service ID**

### 3. Crear una plantilla de email
1. Ve a "Email Templates"
2. Haz clic en "Create New Template"
3. Diseña tu plantilla con las siguientes variables:
   - `{{from_name}}` - Nombre del remitente
   - `{{from_email}}` - Email del remitente
   - `{{subject}}` - Asunto del mensaje
   - `{{message}}` - Contenido del mensaje
4. Guarda la plantilla y anota el **Template ID**

### 4. Obtener tu Public Key
1. Ve a "Account" → "API Keys"
2. Copia tu **Public Key**

### 5. Configurar variables de entorno (Recomendado)
1. Copia el archivo `env.example` como `.env` en la raíz del proyecto:
   ```bash
   cp env.example .env
   ```

2. Edita el archivo `.env` y reemplaza los valores con tus claves reales:
   ```env
   PUBLIC_EMAILJS_SERVICE_ID=tu_service_id_aqui
   PUBLIC_EMAILJS_TEMPLATE_ID=tu_template_id_aqui
   PUBLIC_EMAILJS_PUBLIC_KEY=tu_public_key_aqui
   ```

3. **IMPORTANTE**: Agrega `.env` a tu archivo `.gitignore` para no subir las claves al repositorio:
   ```bash
   echo ".env" >> .gitignore
   ```

### 6. Configuración manual (Alternativa)
Si prefieres configurar directamente en el código (no recomendado para producción), edita el archivo `src/components/contact/contact.astro` y reemplaza las constantes:

```javascript
const EMAILJS_SERVICE_ID = 'TU_SERVICE_ID';
const EMAILJS_TEMPLATE_ID = 'TU_TEMPLATE_ID';
const EMAILJS_PUBLIC_KEY = 'TU_PUBLIC_KEY';
```

### 7. Ejemplo de plantilla de email
Aquí tienes un ejemplo de plantilla que puedes usar:

**Asunto:** Nuevo mensaje de contacto de {{from_name}}

**Contenido:**
```
Hola,

Has recibido un nuevo mensaje de contacto desde tu sitio web:

Nombre: {{from_name}}
Email: {{from_email}}
Asunto: {{subject}}

Mensaje:
{{message}}

---
Este mensaje fue enviado desde tu formulario de contacto.
```

### 8. Personalizar el email de contacto
En el archivo `src/components/contact/contact.astro`, línea 108, cambia el email por tu dirección real:

```html
<a href="mailto:tu-email@ejemplo.com" class="text-amber-400 hover:text-amber-300 transition-colors duration-300">
    tu-email@ejemplo.com
</a>
```

### 9. Probar el formulario
1. Ejecuta tu proyecto: `npm run dev`
2. Ve a la sección de contacto
3. Llena el formulario y envíalo
4. Verifica que recibas el email

### Notas importantes:
- El plan gratuito de EmailJS permite 200 emails por mes
- Los emails se envían desde tu cuenta de email configurada
- Puedes personalizar las notificaciones de éxito/error en el archivo de traducciones
- El formulario incluye validación básica de campos requeridos
- **NUNCA subas tu archivo `.env` al repositorio** - contiene información sensible

### Solución de problemas:
- Si no recibes emails, verifica que tu servicio de email esté correctamente configurado
- Revisa la consola del navegador para errores de JavaScript
- Asegúrate de que las claves de EmailJS sean correctas
- Verifica que tu plantilla de email use las variables correctas
- Si ves el error "variables de entorno no configuradas", verifica que tu archivo `.env` esté en la raíz del proyecto

### Seguridad:
- Las variables de entorno con prefijo `PUBLIC_` son visibles en el cliente
- Para mayor seguridad, considera usar un backend para manejar el envío de emails
- Nunca compartas tus claves de EmailJS públicamente 