function verificarStickers() {
  const s1 = parseInt(document.querySelector("#sticker1").value) || 0;
  const s2 = parseInt(document.querySelector("#sticker2").value) || 0;
  const s3 = parseInt(document.querySelector("#sticker3").value) || 0;
  const total = s1 + s2 + s3;

  const resultado = document.getElementById("resultado1");

  if (total <= 10) {
    resultado.textContent = `Llevas ${total} sticker(s)`;
    resultado.style.color = "green";
  } else {
    resultado.textContent = "Llevas demasiados stickers";
    resultado.style.color = "red";
  }
}

function verificarClave() {
  const d1 = document.querySelector("#digito1").value;
  const d2 = document.querySelector("#digito2").value;
  const d3 = document.querySelector("#digito3").value;

  const clave = d1 + d2 + d3;
  const resultado = document.getElementById("resultado2");

  if (clave === "911") {
    resultado.textContent = "Clave correcta";
    resultado.style.color = "green";
  } else if (clave === "714") {
    resultado.textContent = "2da clave correcta";
    resultado.style.color = "green";
  } else {
    resultado.textContent = "Clave incorrecta";
    resultado.style.color = "red";
  }
}

function toggleBorde() {
  const imagen = document.querySelector("#toggleBorde");
  if (imagen.style.border === "2px solid red") {
    imagen.style.border = "none";
  } else {
    imagen.style.border = "2px solid red";
  }
}
