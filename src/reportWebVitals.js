const reportWebVitals = onPerfEntry => {
  // Verifica si onPerfEntry es una función antes de ejecutarla
  if (onPerfEntry && onPerfEntry instanceof Function) {
    // Importa el módulo 'web-vitals' para obtener las métricas de rendimiento
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      
      // getCLS: Mide el Cumulative Layout Shift (Desplazamiento Acumulado del Diseño)
      // Esta métrica mide la estabilidad visual de la página.
      getCLS(onPerfEntry);

      // getFID: Mide el First Input Delay (Retraso en la Primer Entrada)
      // Esta métrica mide el tiempo que pasa entre la primera interacción del usuario y el momento en que el navegador responde.
      getFID(onPerfEntry);

      // getFCP: Mide el First Contentful Paint (Primera Pintura de Contenido)
      // Mide el tiempo que tarda el navegador en renderizar el primer fragmento de contenido visual significativo.
      getFCP(onPerfEntry);

      // getLCP: Mide el Largest Contentful Paint (Pintura del Contenido Más Grande)
      // Mide el tiempo en que se carga el elemento más grande de contenido visible en la pantalla.
      getLCP(onPerfEntry);

      // getTTFB: Mide el Time to First Byte (Tiempo al Primer Byte)
      // Mide el tiempo que transcurre desde que se hace la solicitud hasta que se recibe el primer byte de respuesta del servidor.
      getTTFB(onPerfEntry);
    });
  }
};

export default reportWebVitals;
// Este archivo se utiliza para medir y reportar métricas de rendimiento de la aplicación React