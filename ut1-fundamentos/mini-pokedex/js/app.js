const formulario = document.querySelector("#formulario-busqueda");
const inputBusqueda = document.querySelector("#busqueda");
const mensaje = document.querySelector("#mensaje");
const resultado = document.querySelector("#resultado");

formulario.addEventListener("submit", (evento) => {
  evento.preventDefault();

  console.log("Formulario enviado");
});