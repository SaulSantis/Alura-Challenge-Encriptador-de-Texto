var ingresoTexto = document.querySelector(".caja-encriptar");
var botonEncriptar = document.querySelector(".btn-Encriptar");
var botonDesencriptar = document.querySelector(".btn-Desencriptar");
var mensajeEncriptado = document.querySelector(".caja-mensaje");
var botonCopiar = document.querySelector("#btnCopiar");
var botonLimpiar = document.querySelector("#btnLimpiar");
var textArea = document.querySelectorAll("textarea");
ingresoTexto.focus();

// Función que no permite ingresar mayúsculas numeros ni carateres especiales.
function soloMinusculas(texto) {
  var buscar = /^[a-z, ]+$/g;
  texto = ingresoTexto.value;
  if (texto.match(buscar)) {
  } else {
    swal(
      "¡Opss! lo sentimos.",
      "No se permiten textos vacíos, letras minúsculas, números ni caracteres especiales. ¡Inténtalo otra vez!",
      "warning"
    );
    ingresoTexto.focus();
    ingresoTexto.value = "";
  }
}

// Al hacer click en botón encriptar captura el texto y remplaza las vocales por lo definido en Trello de Alura Challenge. ejemplo: la letra "e" la reemplaza por "enter".
botonEncriptar.addEventListener("click", function (event) {
  event.preventDefault();
  soloMinusculas();
  texto = ingresoTexto.value;
  textoEncriptado = texto
    .replace(/e/gi, "enter")
    .replace(/i/gi, "imes")
    .replace(/a/gi, "ai")
    .replace(/o/gi, "ober")
    .replace(/u/gi, "ufat");
  mensajeEncriptado.value = textoEncriptado;
  ingresoTexto.value = "";
});

// Al hacer click en botón desencriptar captura el texto y remplaza las palabras definidas en Trello de Alura Challenge. ejemplo: la palabra "enter" es reemplazada por la vocal "e".
botonDesencriptar.addEventListener("click", function (event) {
  event.preventDefault();
  soloMinusculas();
  texto = ingresoTexto.value;
  textoEncriptado = texto
    .replace(/enter/gi, "e")
    .replace(/imes/gi, "i")
    .replace(/ai/gi, "a")
    .replace(/ober/gi, "o")
    .replace(/ufat/gi, "u");

  mensajeEncriptado.value = textoEncriptado;
  ingresoTexto.value = "";
});

// Al hacer click en el boton "copiar mensaje" captura el mensaje que fue encriptado o desencriptado y lo copia para ser pegado en cualquier lugar, si no existe mensaje en la caja de texto mostrara una alerta donde indica que no existe texto para copiar.
botonCopiar.addEventListener("click", function (event) {
  navigator.clipboard.writeText(mensajeEncriptado.value);
  if (mensajeEncriptado.value == "") {
    swal("¡Nada por acá!", "no encontramos ningún texto para copiar", "error");
  } else {
    swal("¡Perfecto!", "El texto se a copiado con exito.", "success");
  }
  mensajeEncriptado.value = "";
  ingresoTexto.focus();
});

// Al hacer click en boton "limpiar todo" deja las cajas de texto limpias sin ningún valor.
botonLimpiar.addEventListener("click", () => {
  textArea.forEach((textarea) => (textarea.value = ""));
  swal("¡Muy bien!", "Limpiaste las cajas de texto.", "success");
  ingresoTexto.focus();
});
