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
const proposito = document.getElementById("proposito");

function presionar(e) {
  if (e.keyCode === 13) {
    this.blur();
  }
  console.log(e);
}
textAreas.forEach(function (el, index) {
  el.addEventListener("keydown", (e) => {
    if (e.keyCode === 13) {
      el.blur();
    }
  });
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
    //Si es proposito
  });
});

//Popovers
$(function () {
  $('[data-toggle="popover"]').popover({
    html: true,
  });
});

//PROPOSITO

var imagen_escritorio = document.getElementById("canvas_img_escritorio");
var imagen_mobile = document.getElementById("canvas_img_mobile");

function crear_proposito(context, text, x, y, maxWidth, lineHeight, img) {
  context.drawImage(img, 0, 0);
  context.fillStyle = "#f8e701";
  var words = text.split(" ");
  var line = "";

  for (var n = 0; n < words.length; n++) {
    var testLine = line + words[n] + " ";
    var metrics = context.measureText(testLine);
    var testWidth = metrics.width;
    if (testWidth > maxWidth && n > 0) {
      context.fillText(line, x, y);
      line = words[n] + " ";
      y += lineHeight;
    } else {
      line = testLine;
    }
  }

  context.fillText(line, x, y);
}

var canvas_escritorio = document.getElementById("canvas_escritorio");
var context_escritorio = canvas_escritorio.getContext("2d");
context_escritorio.font = "24pt Trebuchet MS";

var canvas_mobile = document.getElementById("canvas_mobile");
var context_mobile = canvas_mobile.getContext("2d");
context_mobile.font = "20pt Trebuchet MS";
/*var maxWidth = 610;
var lineHeight = 40;
var x = 605;
var y = 410;*/
//var text = "Sancho, que no es un hombre más que otro si no hace más que otro. Estas borrascas que nos suceden son señales de que presto ha de serenar.";

proposito.addEventListener("keydown", (event) => {
  if (event.keyCode === 13) {
    proposito.blur();
  }
});
proposito.addEventListener("blur", () => {
  if (proposito.value) {
    //crear_proposito(context, proposito.value, x, y, maxWidth, lineHeight);
    crear_proposito(context_escritorio, proposito.value, 605, 410, 610, 40, imagen_escritorio);
    crear_proposito(context_mobile, proposito.value, 215, 355, 320, 36, imagen_mobile);
    btn_descarga_escritorio.classList.add("mostrar");
    btn_descarga_mobile.classList.add("mostrar");
  }
});

//Descargar
var btn_descarga_escritorio = document.getElementById("descarga_escritorio");
function descargar_escritorio() {
  var dt = canvas_escritorio.toDataURL("image/jpeg");
  this.href = dt;
}
btn_descarga_escritorio.addEventListener("click", descargar_escritorio, false);

var btn_descarga_mobile = document.getElementById("descarga_mobile");

function descargar_mobile() {
  var dt = canvas_mobile.toDataURL("image/jpeg");
  this.href = dt;
}
btn_descarga_mobile.addEventListener("click", descargar_mobile, false);
