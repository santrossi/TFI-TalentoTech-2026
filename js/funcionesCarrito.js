import {
  guardarCarrito,
  obtenerCarrito,
  vaciarCarritoStorage,
} from "./storage.js";
import { actualizarContador, mostrarMensaje } from "./ui.js";

export const agregarAlCarrito = (producto) => {
  const carrito = obtenerCarrito();
  carrito.push(producto);
  guardarCarrito(carrito);
  actualizarContador(carrito);
  mostrarMensaje("Producto agregado!");
};

export const eliminarProducto = (indice) => {
  const carrito = obtenerCarrito();
  // En este caso, el SPLICE elimina un elemento (no tiene 3er parámetro)
  carrito.splice(indice, 1);
  guardarCarrito(carrito);
  actualizarContador(carrito);
  mostrarMensaje("Producto eliminado");
};

export const vaciarCarrito = () => {
  vaciarCarritoStorage();
  actualizarContador([]);
  mostrarMensaje("Carrito vaciado");
};
