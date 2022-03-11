ingresoTexto = document.querySelector(".caja-encriptar");
botonEncriptar = document.querySelector(".btn-Encriptar");
mensajeEncriptado = document.querySelector(".caja-mensaje");

function soloMinusculas(texto) {
  var buscar = /^[a-z ]+$/g;
  texto = ingresoTexto.value;
  if (texto.match(buscar)) {
  } else {
    alert(
      "Ufff!! lo siento, solo se permiten letras minúsculas, sin números ni caracteres especiales. Inténtalo otra vez!!"
    );
    inputTexto.value = "";
  }
}

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
  textoIngresado.value = "";
});
