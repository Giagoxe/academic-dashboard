# Instrucciones de Instalación para Panel de Control Académico

## Requisitos Previos
Antes de comenzar, asegúrate de tener lo siguiente instalado:
- [Node.js](https://nodejs.org/) (versión 14 o superior)
- [npm](https://www.npmjs.com/) (viene con Node.js)
- Un editor de código como [Visual Studio Code](https://code.visualstudio.com/)

## Paso 1: Clonar el Repositorio
Abre tu terminal y ejecuta el siguiente comando para clonar el repositorio:

```bash
git clone https://github.com/Giagoxe/academic-dashboard.git
```

## Paso 2: Navegar al Directorio del Proyecto
Cambia al directorio del proyecto:

```bash
cd academic-dashboard
```

## Paso 3: Instalar Dependencias
Ejecuta el siguiente comando para instalar todas las dependencias necesarias:

```bash
npm install
```

## Paso 4: Configurar Variables de Entorno
Crea un archivo `.env` en la raíz del directorio del proyecto. Puedes usar el archivo `.env.example` como plantilla. Agrega las variables requeridas según tu configuración.

## Paso 5: Ejecutar el Proyecto
Para iniciar el servidor de desarrollo, usa:

```bash
npm start
```

Tu aplicación ahora debe estar ejecutándose en `http://localhost:3000`.

## Paso 6: Construir para Producción
Si necesitas crear una compilación de producción, ejecuta:

```bash
npm run build
```

## Información Adicional
Para cualquier problema o solicitud, siéntete libre de crear un problema en el repositorio.