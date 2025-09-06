// Importa StrictMode para ayudarte a detectar problemas potenciales en el desarrollo
import { StrictMode } from 'react';

// Importa la función createRoot para crear el "root" moderno en React 18+
import { createRoot } from 'react-dom/client';

// Importa los estilos globales
import './index.css';

// Importa el componente raíz de tu aplicación
import App from './App.jsx';

// Selecciona el elemento con id 'root' en tu HTML y lo usa como contenedor principal
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App /> {/* Monta tu App dentro de React.StrictMode */}
  </StrictMode>,
);
// Esto ayuda a identificar problemas potenciales en la aplicación durante el desarrollo
// y asegura que tu aplicación esté utilizando las mejores prácticas de React.
