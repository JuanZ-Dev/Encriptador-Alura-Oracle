// VERIFICAR TEXTO
function verifyText() {
  const text = document.getElementById("text").value;
  const regex = /^[a-zñ\s\¿\?\¡\!\,\.]+$/;

  if (regex.test(text)) {
    encryptText(text);
  } else {
    Swal.fire({
      title: "Error...",
      text: "El texto no cumple con los requisitos",
      imageUrl: "../images/error.png",
      imageWidth: 100,
    });
  }

  if (text == "") {
    Swal.fire({
      title: "Alto...",
      text: "Debe ingresar un texto",
      imageUrl: "./images/warning.png",
      imageWidth: 100,
    });
  }
}

// ENCRIPTAR
function encryptText(text) {
  let encryptedText = "";
  for (let i = 0; i < text.length; i++) {
    let letter = text.charAt(i);
    switch (letter) {
      case "a":
        letter = "ai";
        break;
      case "e":
        letter = "enter";
        break;
      case "i":
        letter = "imes";
        break;
      case "o":
        letter = "ober";
        break;
      case "u":
        letter = "ufat";
        break;
      default:
        break;
    }
    encryptedText += letter;
  }

  const result = document.getElementById("result");
  result.value = encryptedText;

  disappear();
  deleteText();
}

// DESENCRIPTAR
function decryptText() {
  let text = document.getElementById("text").value;

  if (text == "") {
    Swal.fire({
      title: "Alto...",
      text: "Debe ingresar un texto",
      imageUrl: "./images/warning.png",
      imageWidth: 100,
    });
  } else {
    text = text
      .replace(/ai/g, "a")
      .replace(/enter/g, "e")
      .replace(/imes/g, "i")
      .replace(/ober/g, "o")
      .replace(/ufat/g, "u");

    const result = document.getElementById("result");
    result.value = text;

    disappear();
    deleteText();
  }
}

// MOSTRAR Y OCULTAR
function disappear() {
  const image = document.getElementById("img-msg");
  image.classList.add("disappear");

  const rightContent = document.getElementById("right-content");
  rightContent.classList.remove("disappear");
}

// ELIMINAR TEXTO
function deleteText() {
  text.value = "";
}

// COPIAR TEXTO
const button = document.getElementById("copy");
const originalContent = button.innerHTML;

button.addEventListener("click", function () {
  const text = document.getElementById("text");
  const result = document.getElementById("result");

  result.select();
  document.execCommand("copy");
  window.getSelection().removeAllRanges();
  text.focus();

  button.innerHTML =
    '<p>Copiado</p><div><i class="fa-solid fa-check"></i></div>';

  setTimeout(function () {
    button.innerHTML = originalContent;
  }, 1000);
});

// CAMBIAR DE TEMA
const btnDark = document.getElementById("button-dark");
const body = document.querySelector("body");

load();

btnDark.addEventListener("click", (e) => {
  body.classList.toggle("darkMode");
  store(body.classList.contains("darkMode"));

  btnDark.classList.toggle("active");
  store(btnDark.classList.contains("active"));
});

function load() {
  const darkMode = localStorage.getItem("darkMode");

  if (!darkMode) {
    store("false");
  } else if (darkMode == "true") {
    body.classList.add("darkMode");
    btnDark.classList.add("active");
  }
}

function store(value) {
  localStorage.setItem("darkMode", value);
  localStorage.setItem("active", value);
}
