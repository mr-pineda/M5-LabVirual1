# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
## Contexto

En este proyecto, los estudiantes deberán implementar el consumo de una API para obtener y mostrar datos del sistema del hospital, como la información de doctores o servicios médicos.
Utilizando useEffect y useState, se espera que realicen peticiones asíncronas, gestionen el estado y manejen los errores de manera eficiente. Podrán utilizar Fetch API o Axios según su preferencia.

Trabajo práctico para desarrollar una página web de hospital que debe contener las siguientes páginas:

1. Vista Principal Home
2. Vista del About
3. Vista de Contact


## Requisitos:

1. Implementación de Peticiones con useEffect y useState (2 puntos)
- [ ] Usa los Hooks useEffect y useState para realizar peticiones a una API externa (puedes simular una API REST) que devuelva datos relacionados con los servicios médicos o el equipo de doctores del hospital.
- [ ] Asegúrate de que los datos se carguen cuando el componente se monte en el DOM.
- [ ] Los datos deben mostrarse correctamente en una lista o tabla en la vista correspondiente.

2. Uso de Fetch API o Axios para el Consumo de la API (1.5 puntos)
- [ ] Implementa las peticiones a la API utilizando Fetch API o Axios para obtener los datos de manera asíncrona.
- [ ] Explica en el README por qué has elegido una u otra opción.
- [ ] Asegúrate de manejar correctamente los errores de la petición (por ejemplo, mostrar un mensaje de error si la API no responde o devuelve un error).

3. Peticiones Basadas en Eventos del Usuario (1 punto)
- [ ] Permite que el usuario realice una petición a la API mediante una interacción, como un botón para recargar la lista de doctores o servicios médicos.
- [ ] Asegúrate de que el botón realice la petición y actualice los datos en la interfaz.

4. Manejo de Errores en Peticiones Asíncronas (1 punto)
- [ ] Implementa una estrategia de manejo de errores cuando la API falle o no responda.
- [ ] Muestra un mensaje en la interfaz indicando que ocurrió un error, y permite al usuario intentar realizar la petición nuevamente.

5. Optimización del Rendimiento al Omitir Efectos en useEffect (0.5 puntos)
- [ ] Implementa una optimización en useEffect para evitar que las peticiones se realicen múltiples veces innecesariamente. Asegúrate de que la petición se realice solo cuando el componente se monte o cuando haya un cambio relevante (por ejemplo, al hacer clic en el botón para recargar los datos).
      

## Estructura del proyecto
# Hospital

//  ├── Public
    	├── /assets
          ├── /img
              ├── /Doctors
                  ├── /doctor_01.png
                  ├── /doctor_02.png
                  ├── /doctor_03.png
                  ├── /doctor_04.png
                  ├── /doctor_05.png
                  ├── /doctor_06.png
                  ├── /doctor_default.png
              ├── /hospital.jpg
              ├── /logo--principal.png
              ├── /Telephone-fillB.png
  ├── db 
      ├── /doctors.json
      ├── /vite.svg
	├──── src 
		  ├── /components
          ├── /footer.tsx
          ├── /header.tsx
	    ├── /pages
         ├── /About.tsx
         ├── /Appointment.tsx
         ├── /contact.tsx
         ├── /home.tsx
      ├── /Types
         ├── /data.d.ts
      ├── /Utils
         ├── /constants.ts
      ├── /main.tsx
      ├── /vite-env.d.ts
  ├──── eslint.config.js
  ├──── index.html
  ├──── package-lock.json
  ├──── package.json
  ├──── README.md          # Ud. se encuentra aquí
  ├──── tsconfig.app.json
  ├──── tsconfig.json
  ├──── tsconfig.node.json
  └──   vite.config.ts
