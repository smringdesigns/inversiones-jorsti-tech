import { useDatosApi } from "../hooks/UseDatosApi"; // Asegúrate de que la ruta es correcta

// Este componente recibe una URL como prop para hacerlo flexible
export default function CustomHookComponent({ url }) {
  const { datos, cargando, hayError, recargar } = useDatosApi(url, []);

  if (cargando) return <p>Cargando datos...</p>;
  if (hayError) return <p>Error al cargar los datos.</p>;

  return (
    <div>
      <h2>Datos desde: {url}</h2>
      <ul>
        {datos.map((item) => (
          <li key={item.id}>{item.name || item.title}</li>
        ))}
      </ul>
      <button onClick={recargar}>Cargar Datos de Nuevo</button>
    </div>
  );
}
