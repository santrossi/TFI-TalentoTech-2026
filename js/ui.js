export const actualizarContador = (carrito) => {
  const contador = document.getElementById("contador-carrito");
  if (contador) {
    contador.textContent = carrito.length;
  }
};

// Modularizar esta función permite adaptarle estilos más facilmente luego
export const mostrarMensaje = (mensaje) => {
  alert(mensaje);
};
