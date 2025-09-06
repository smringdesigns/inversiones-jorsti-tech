import { useState, useEffect } from "react";

// Hook reutilizable para obtener datos de una API
export const useDatosApi = (url, datosIniciales) => {
  const [datos, setDatos] = useState(datosIniciales);
  const [cargando, setCargando] = useState(false);
  const [hayError, setHayError] = useState(false);

  const obtenerDatos = async () => {
    setCargando(true);
    setHayError(false);

    try {
      const respuesta = await fetch(url);
      if (!respuesta.ok) {
        throw new Error("Error en la respuesta de la API");
      }

      const datosJson = await respuesta.json();
      setDatos(datosJson);
    } catch (error) {
      console.error("Error al obtener los datos:", error);
      setHayError(true);
    } finally {
      setCargando(false);
    }
  };

  useEffect(() => {
    obtenerDatos();
  }, [url]);

  return { datos, cargando, hayError, recargar: obtenerDatos };
};
