import React from 'react'; // Importa la librería React para poder crear componentes.
import ReactDOM from 'react-dom/client'; // Importa ReactDOM para interactuar con el DOM y renderizar el componente raíz.
import './index.css'; // Importa el archivo de estilos globales.
import App from './App'; // Importa el componente principal App.
import reportWebVitals from './reportWebVitals'; // Importa la función para medir el rendimiento de la aplicación.

const root = ReactDOM.createRoot(document.getElementById('root')); // Crea el punto de entrada de React (el "root" en el HTML).
root.render(
  <React.StrictMode>  {/* Modo estricto de React, ayuda a detectar problemas en el desarrollo */}
    <App />  {/* Renderiza el componente principal App */}
  </React.StrictMode>
);

// Si quieres empezar a medir el rendimiento de tu aplicación, pasa una función
// para registrar los resultados (por ejemplo: reportWebVitals(console.log))
// o envíalos a un endpoint de análisis. Aprende más: https://bit.ly/CRA-vitals
reportWebVitals(); // Llama a la función para medir el rendimiento, si no se pasa ningún argumento, no se registran los resultados.