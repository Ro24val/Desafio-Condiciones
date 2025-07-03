//desafio1

function verificarStickers() {
  const s1 = document.querySelector("#sticker1");
  const s2 = document.querySelector("#sticker2");
  const s3 = document.querySelector("#sticker3");

  const total = s1 + s2 + s3;
  const resultado = document.getElementById("resultado");

  if (total <= 10) {
    resultado.textContent = "Llevas" + total + "Stickers";
    resultado.style.color = "green";
  } else {
    resultado.textContent = "Llevas demasiados stickers";
    resultado.style.color = "red";
  }
}

//desafio2
function verificarClave() {
  const d1 = document.querySelector("#digito1").value;
  const d2 = document.querySelector("#digito2").value;
  const d3 = document.querySelector("#digito3").value;

  const clave = d1 + d2 + d3;
  const resultado = document.querySelector("#resultado");

  if (clave === "111") {
    resultado.textContent = "clave correcta";
  } else if (clave === "222") {
    resultado.textContent = "2da clave correcta";
  } else resultado.textContent = "clave incorrrecta";
}

// desafio3
function toggleBorde() {
  const imagen = document.querySelector("#toggleBorde");
  if (imagen.style.border === "2px solid red") {
    imagen.style.border = "none";
  } else {
    imagen.style.border = "2px solid red";
  }
}
