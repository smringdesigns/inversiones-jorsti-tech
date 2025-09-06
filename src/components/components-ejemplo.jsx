import { useDatosApi } from "./ejemplo-hook-custom";

const ComponenteCustonHook = () => {
  const { datos, cargando, hayError, recargar } = useDatosApi("https://jsonplaceholder.typicode.com/users", []);

  if (cargando) return <p>Cargando datos...</p>;

  if (hayError) return <p>Error al cargar los datos.</p>;

  return (
    <div>
      <ul>
        {datos.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
      <button onClick={recargar}>Cargar Datos de Nuevo</button>
    </div>
  );
};

export default ComponenteCustonHook;
