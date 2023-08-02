const input = document.querySelector("[data-input]");
const botones = document.querySelectorAll("[data-boton]");
const caja_boton = document.querySelector("[data-cajaBoton]");
const fondo = document.querySelector("body");
const formulario = document.querySelector(".formulario");
let nombre = false;
let rgb = false;
let hexa = false;

function rgb_vec(color) {
    let r = ""
    let g = ""
    let b = ""
    let comas = 0
  cadena = color.trim();
  cadena = cadena.replace(/[() RGB]/g, "")
 
    for(i of cadena){

        if(i != "," ){
            if(comas == 0){
                r += i
           }else if(comas == 1){
                g += i

            }else if(comas == 2){
                b += i
            }
        }else{
            comas += 1
        }
    }
    return [r, g, b]
}

function colores() {
  if (nombre) {
    const color_seleccionado = input.value;
    if (color_seleccionado == "") {
      fondo.style.background = "palevioletred";
    } else if (color_seleccionado == "white") {
      botones[0].className = "boton__nombreA";
      botones[1].className = "boton__rgbA";
      botones[2].className = "boton__hexaA";
      formulario.className = "formularioA";
      fondo.style.background = `${color_seleccionado}`;
    } else {
      fondo.style.background = `${color_seleccionado}`;
      botones[0].className = "boton__nombre";
      botones[1].className = "boton__rgb";
      botones[2].className = "boton__hexa";
      formulario.className = "formulario";
    }
  } else if (rgb) {
    const color_seleccionado = input.value;
    const color_seleccionado_lista = rgb_vec(color_seleccionado);
 
    if (color_seleccionado == "") {
      fondo.style.background = "palevioletred";
    } else if (
      color_seleccionado_lista[0] >= 220 ||
      color_seleccionado_lista[1] >= 210 ||
      color_seleccionado_lista[2] >= 210
    ) {
      botones[0].className = "boton__nombreA";
      botones[1].className = "boton__rgbA";
      botones[2].className = "boton__hexaA";
      formulario.className = "formularioA";
      fondo.style.background = `${color_seleccionado}`;
    } else {
      fondo.style.background = `${color_seleccionado}`;
      botones[0].className = "boton__nombre";
      botones[1].className = "boton__rgb";
      botones[2].className = "boton__hexa";
      formulario.className = "formulario";
    }
  }else if(hexa){
    const color_seleccionado = input.value;
    if (color_seleccionado == "") {
      fondo.style.background = "palevioletred";
    } else if (color_seleccionado != "#000") {
      botones[0].className = "boton__nombreA";
      botones[1].className = "boton__rgbA";
      botones[2].className = "boton__hexaA";
      formulario.className = "formularioA";
      fondo.style.background = `${color_seleccionado}`;
    } else {
      fondo.style.background = `${color_seleccionado}`;
      botones[0].className = "boton__nombre";
      botones[1].className = "boton__rgb";
      botones[2].className = "boton__hexa";
      formulario.className = "formulario";
    }

  }
}

function boton_seleccionado(e) {
  e.preventDefault();

  for (i in botones) {
    if (e.target.className == botones[i].className) {
      console.log("estoy dentro");
      if (
        botones[i].className == "boton__nombre" ||
        botones[i].className == "boton__nombreA"
      ) {
        input.value = "";
        nombre = true;
        rgb = false;
        hexa = false;
        botones[i].style.boxShadow = "inset 0 0 30px  black";
        botones[i].style.color = "white";
        botones[1].style.boxShadow = "none";
        botones[1].style.color = "rgba(255, 255, 255, 0.5)";
        botones[2].style.boxShadow = "none";
        botones[2].style.color = "rgba(255, 255, 255, 0.5)";
      } else if (
        botones[i].className == "boton__rgb" ||
        botones[i].className == "boton__rgbA"
      ) {
        input.value = "RGB(216, 112, 147)";
        rgb = true;
        hexa = false;
        nombre = false;
        botones[i].style.boxShadow = "inset 0 0 30px  black";
        botones[i].style.color = "white";
        botones[0].style.boxShadow = "none";
        botones[0].style.color = "rgba(255, 255, 255, 0.5)";
        botones[2].style.boxShadow = "none";
        botones[2].style.color = "rgba(255, 255, 255, 0.5)";
      } else if (
        botones[i].className == "boton__hexa" ||
        botones[i].className == "boton__hexaA"
      ) {
        input.value = "#"
        hexa = true;
        rgb = false;
        nombre = false;
        botones[i].style.boxShadow = "inset 0 0 30px  black";
        botones[i].style.color = "white";
        botones[0].style.boxShadow = "none";
        botones[0].style.color = "rgba(255, 255, 255, 0.5)";
        botones[1].style.boxShadow = "none";
        botones[1].style.color = "rgba(255, 255, 255, 0.5)";
      }
    }
  }
}

caja_boton.addEventListener("click", boton_seleccionado);

setInterval(colores);
