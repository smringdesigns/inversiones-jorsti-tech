import { render, screen } from '@testing-library/react';  // Importa las funciones necesarias de Testing Library para renderizar y buscar elementos en el DOM.
import App from './App';  // Importa el componente App para poder testearlo.

test('renders learn react link', () => {
  render(<App />);  // Renderiza el componente App en el DOM virtual para pruebas.
  
  // Busca un enlace con el texto "learn react" (no importa si es mayúscula o minúscula).
  const linkElement = screen.getByText(/learn react/i); 
  
  // Verifica que el enlace esté presente en el documento.
  expect(linkElement).toBeInTheDocument(); 
});
// Este test verifica que el componente App renderice un enlace con el texto "learn react".