# Pagina demo de Hospital Nacional

## Contexto

En este proyecto, los estudiantes deberán implementar el consumo de una API para obtener y mostrar datos del sistema del hospital, como la información de doctores o servicios médicos.
Utilizando useEffect y useState, se espera que realicen peticiones asíncronas, gestionen el estado y manejen los errores de manera eficiente. Podrán utilizar Fetch API o Axios según su preferencia.

Trabajo práctico para desarrollar una página web de hospital que debe contener las siguientes páginas:

1. Vista Principal Home
2. Vista del About
3. Vista de Contact

## Cómo correr el proyecto:

1. Descargar el contenido de este repositorio en el computador. Puede ser clonando el repositorio o descargando el .zip:

   - **Clonar el repositorio**: Puede hacerlo con cualquier gestor de repositorios. Si tiene git instalado, puede abrir una terminal en algun diretorio y ejecutar:

   ```bash
   git clone url_de_este_repo
   ```

   - Si no tiene git instalado puede presionar el botón verde `<> Code` que está en esta página y seleccionar la opción `Download ZIP`.
     1. Descargue el archivo .zip en algun directorio conocido _(ej: Escritorio, Documentos, etc.)_.
     2. Descomprima el archivo .zip

2. Abrir una terminal denntro de la carpeta.
3. Ejecutar `npm run dev` y se mostrará el link para ver la pagina ejecutada en localhost.

## Uso de Axios

Se optó por usar Axios, ya que este permite tener un mayor control sobre las peticiones HTTP realizadas. En un futuro podría permitir mejores funcionalidades como timeout u otras que son requeridas cuando se trabaja con un gran volumen de datos o si se llega a necesitar autenticación.

## Estructura del proyecto

```
PROJECT
  ├── /Public
  |   ├── /assets
  |   |   └── /img
  |   |       ├── /Doctors
  |   |       |   ├── /doctor_01.png
  |   |       |   ├── /doctor_02.png
  |   |       |   ├── /doctor_03.png
  |   |       |   ├── /doctor_04.png
  |   |       |   ├── /doctor_05.png
  |   |       |   ├── /doctor_06.png
  |   |       |   └── /doctor_default.png
  |   |       ├── /hospital.jpg
  |   |       ├── /logo--principal.png
  |   |       └── /Telephone-fillB.png
  |   ├── /db
  |   |   └── /doctors.json
  |   └── /vite.svg
  ├── /src
  |   ├── /components
  |   |   ├── /footer.tsx
  |   |   └── /header.tsx
  |   ├── /pages
  |   |   ├── /About.tsx
  |   |   ├── /Appointment.tsx
  |   |   ├── /Contact.tsx
  |   |   └── /Home.tsx
  |   ├── /Types
  |   |   └── /data.d.ts
  |   ├── /Utils
  |   |   └── /constants.ts
  |   ├── /main.tsx
  |   └── /vite-env.d.ts
  ├── eslint.config.js
  ├── index.html
  ├── package-lock.json
  ├── package.json
  ├── README.md
  ├── tsconfig.app.json
  ├── tsconfig.json
  ├── tsconfig.node.json
  └── vite.config.ts
```

## Requisitos:

1. Implementación de Peticiones con useEffect y useState (2 puntos)

   - [x] Usa los Hooks useEffect y useState para realizar peticiones a una API externa (puedes simular una API REST) que devuelva datos relacionados con los servicios médicos o el equipo de doctores del hospital.
   - [x] Asegúrate de que los datos se carguen cuando el componente se monte en el DOM.
   - [x] Los datos deben mostrarse correctamente en una lista o tabla en la vista correspondiente.

2. Uso de Fetch API o Axios para el Consumo de la API (1.5 puntos)

   - [x] Implementa las peticiones a la API utilizando Fetch API o Axios para obtener los datos de manera asíncrona.
   - [x] Explica en el README por qué has elegido una u otra opción.
   - [x] Asegúrate de manejar correctamente los errores de la petición (por ejemplo, mostrar un mensaje de error si la API no responde o devuelve un error).

3. Peticiones Basadas en Eventos del Usuario (1 punto)

   - [x] Permite que el usuario realice una petición a la API mediante una interacción, como un botón para recargar la lista de doctores o servicios médicos.
   - [x] Asegúrate de que el botón realice la petición y actualice los datos en la interfaz.

4. Manejo de Errores en Peticiones Asíncronas (1 punto)

   - [x] Implementa una estrategia de manejo de errores cuando la API falle o no responda.
   - [x] Muestra un mensaje en la interfaz indicando que ocurrió un error, y permite al usuario intentar realizar la petición nuevamente.

5. Optimización del Rendimiento al Omitir Efectos en useEffect (0.5 puntos)

   - [x] Implementa una optimización en useEffect para evitar que las peticiones se realicen múltiples veces innecesariamente. Asegúrate de que la petición se realice solo cuando el componente se monte o cuando haya un cambio relevante (por ejemplo, al hacer clic en el botón para recargar los datos).
