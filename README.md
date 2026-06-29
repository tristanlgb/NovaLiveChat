# Nova Live Chat Portfolio

Portfolio personal desarrollado con React y TypeScript. Presenta experiencia, habilidades, proyectos, testimonios y vías de contacto, e incorpora un chat público en tiempo real conectado a un servidor Socket.IO.

## Funcionalidades

- Presentación profesional y sección “Sobre mí”.
- Listado de habilidades y proyectos.
- Testimonios y formulario de contacto.
- Chat en vivo con nickname.
- Indicador de conexión y cantidad de usuarios online.
- Diseño responsivo y despliegue preparado para Vercel.

## Stack

- React 19
- TypeScript
- Vite
- Socket.IO Client
- Bootstrap
- ESLint
- Vercel

## Organización

La interfaz está dividida en componentes dentro de `src/components/`. `LiveChat.tsx` gestiona la conexión WebSocket, recepción y envío de mensajes; `App.tsx` compone las secciones del portfolio; `vercel.json` configura el despliegue SPA.

## Ejecución local

```bash
npm install
npm run dev
```

## Comandos

```bash
npm run build
npm run lint
npm run preview
```

El chat consume el servicio remoto configurado en `LiveChat.tsx`; para utilizar otro backend debe cambiarse esa URL.

> Este repositorio contiene el frontend. El servicio Socket.IO se ejecuta de forma independiente.