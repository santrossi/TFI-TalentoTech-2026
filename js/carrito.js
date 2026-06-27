import { eliminarProducto, vaciarCarrito } from "./funcionescarrito.js";
import { obtenerCarrito } from "./storage.js";
import { actualizarContador } from "./ui.js";

const renderizarCarrito = () => {
  const carrito = obtenerCarrito();
  actualizarContador(carrito);

  const contenedor = document.getElementById("contenedor-carrito");
  const divAcciones = document.getElementById("acciones-carrito");

  contenedor.innerHTML = "";
  divAcciones.innerHTML = "";

  if (!carrito.length) {
    const mensaje = document.createElement("p");
    mensaje.classList.add("mensaje-carrito-vacio");
    mensaje.textContent("Carrito vacío!");

    contenedor.appendChild(mensaje);
    return;
  }

  carrito.forEach((producto, index) => {
    const tarjeta = document.createElement("article");
    tarjeta.classList.add("card");

    const img = document.createElement("img");
    img.src = `../${producto.img}`;
    img.alt = producto.nombre;

    const titulo = document.createElement("h3");
    titulo.textContent = producto.nombre;

    const precio = document.createElement("p");
    precio.textContent = `$${producto.precio}`;

    const botonEliminar = document.createElement("button");
    botonEliminar.classList.add("btn", "btn-danger");
    botonEliminar.textContent = "Eliminar";

    botonEliminar.addEventListener("click", () => {
      eliminarProducto(index);
      renderizarCarrito();
    });

    tarjeta.appendChild(img);
    tarjeta.appendChild(titulo);
    tarjeta.appendChild(precio);
    tarjeta.appendChild(botonEliminar);

    contenedor.appendChild(tarjeta);
  });

  const botonVaciar = document.createElement("button");
  botonVaciar.classList.add("btn", "btn-danger");
  botonVaciar.textContent = "Vaciar Carrito";
  botonVaciar.addEventListener("click", () => {
    vaciarCarrito();
    renderizarCarrito();
  });

  divAcciones.appendChild(botonVaciar);
};

document.addEventListener("DOMContentLoaded", () => {
  renderizarCarrito();
});
