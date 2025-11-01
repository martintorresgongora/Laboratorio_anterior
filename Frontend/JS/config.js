// =============================================================================
// Configuración del Frontend - DINÁMICO PARA DESARROLLO Y PRODUCCIÓN
// =============================================================================

const CONFIG = {
  API_URL:
    window.location.hostname === "localhost"
      ? "http://localhost:3000/api" // Nota el /api al final
      : "https://laboratorio-anterior.onrender.com/api", // Y aquí también

  SOCKET_URL:
    window.location.hostname === "localhost"
      ? "http://localhost:3000"
      : "https://laboratorio-anterior.onrender.com",
};

// Hacer CONFIG global
window.APP_CONFIG = CONFIG;
