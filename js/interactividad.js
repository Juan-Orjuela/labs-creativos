"use strict";
//Parallax
/*const escena = document.getElementById("escena");
const parallaxInstance = new Parallax(escena);*/

const scenes = [];
const scenesSelector = document.querySelectorAll(".lab_interno_texturas");

for (let i = 0; i < scenesSelector.length; i++) {
  scenes[i] = new Parallax(scenesSelector[i]);
}
//Respuestas
const respuestas = {};
const textAreas = document.querySelectorAll(".lab_textarea");

textAreas.forEach(function (el, index) {
  el.addEventListener("blur", () => {
    if (el.value) {
      //Guardar respuestas en Obj respuestas
      const id = el.id;
      respuestas[id] = el.value;

      //Habilitar final
      if (el.classList.contains("previo")) {
        document.getElementById(`probeta_${el.id}`).classList.add("anim");
        const previos = el.parentElement.querySelectorAll(".previo");
        const previosArr = [];

        previos.forEach((el) => previosArr.push(el.value));

        if (previosArr.every((e) => e)) {
          el.parentElement.querySelector(".final").disabled = false;
          document.getElementById(`probeta_${el.parentElement.querySelector(".final").id}`).classList.add("anim");
        }
      }
      //Habilitar siguiente seccion
      else if (el.classList.contains("final")) {
        el.closest(".section").nextElementSibling.classList.remove("oculta");
      }
    }
  });
});
//Popovers
$(function () {
  $('[data-toggle="popover"]').popover({
    html: true,
  });
});
/*
$(".popover-dismiss").popover({
  trigger: "click",
});*/
