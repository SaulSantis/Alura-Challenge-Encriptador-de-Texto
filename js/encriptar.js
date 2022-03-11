ingresoTexto = document.querySelector(".input-encriptar");
botonEncriptar = document.querySelector(".btn-Encriptar");
mensajeEncriptado = document.querySelector(".input-mensaje");

function validar(frase) {
  var buscar = /^[a-z ]+$/g;
  frase = ingresoTexto.value;
  if (frase.match(buscar)) {
  } else {
    alert("Ufff!! lo siento, solo se permiten letras minúsculas, sin números ni caracteres especiales. Inténtalo otra vez!!");
    inputTexto.value = "";
  }
}

botonEncriptar.addEventListener("click", function (event) {
  event.preventDefault();
  validar();
  texto = ingresoTexto.value;
  textoEncriptado = texto
  .replace(/e/gi, "enter")
  .replace(/i/gi, "imes")
  .replace(/a/gi, "ai")
    .replace(/o/gi, "ober")
    .replace(/u/gi, "ufat");
  mensajeEncriptado.value = textoEncriptado;
  textoIngresado.value = "";
});
