"use strict";
console.log("Estamos");
const seccion_2 = document.getElementById("seccion_2");
const btn = document.getElementById("btn");

/*btn.addEventListener("click", () => {
  seccion_2.classList.remove("oculta");
});*/

const escena = document.getElementById("escena");
const parallaxInstance = new Parallax(escena);
