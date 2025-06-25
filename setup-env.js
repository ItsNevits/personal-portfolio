#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🔧 Configuración de variables de entorno para EmailJS\n');

// Verificar si ya existe el archivo .env
const envPath = path.join(process.cwd(), '.env');
if (fs.existsSync(envPath)) {
    console.log('⚠️  El archivo .env ya existe. ¿Quieres sobrescribirlo? (y/N)');
    process.stdin.once('data', (data) => {
        const answer = data.toString().trim().toLowerCase();
        if (answer === 'y' || answer === 'yes') {
            createEnvFile();
        } else {
            console.log('❌ Operación cancelada.');
            process.exit(0);
        }
    });
} else {
    createEnvFile();
}

function createEnvFile() {
    const envContent = `# EmailJS Configuration
# Reemplaza estos valores con tus claves reales de EmailJS
PUBLIC_EMAILJS_SERVICE_ID=your_service_id_here
PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id_here
PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key_here

# Instrucciones:
# 1. Ve a https://www.emailjs.com/ y crea una cuenta
# 2. Configura un servicio de email y obtén el Service ID
# 3. Crea una plantilla de email y obtén el Template ID
# 4. Ve a Account > API Keys y obtén tu Public Key
# 5. Reemplaza los valores de arriba con tus claves reales
`;

    try {
        fs.writeFileSync(envPath, envContent);
        console.log('✅ Archivo .env creado exitosamente!');
        console.log('📝 Edita el archivo .env con tus claves reales de EmailJS');
        console.log('🔒 El archivo .env ya está en .gitignore para mantener tus claves seguras');
    } catch (error) {
        console.error('❌ Error al crear el archivo .env:', error.message);
    }
} 