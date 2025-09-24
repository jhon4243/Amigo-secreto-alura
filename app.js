let amigosLista = [];

function agregarAmigo() {
  let entradaNombre = document.getElementById("amigo");
  let nombre = entradaNombre.value.trim();

  if (nombre === "") {
    alert("Por favor, inserta un nombre.");
    return;
  }

  amigosLista.push(nombre);
  actualizarLista();
  entradaNombre.value = "";
}

function actualizarLista() {
  let listaElementos = document.getElementById("listaAmigos");
  listaElementos.innerHTML = "";

  for (let i = 0; i < amigosLista.length; i++) {
    let item = document.createElement("li");
    item.textContent = amigosLista[i];
    listaElementos.appendChild(item);
  }
}

function sortearAmigo() {
  if (amigosLista.length === 0) {
    alert("Agrega al menos un nombre antes de sortear.");
    return;
  }

  let indiceSorteado = Math.floor(Math.random() * amigosLista.length);
  let amigoElegido = amigosLista[indiceSorteado];

  let resultadoElemento = document.getElementById("resultado");
  resultadoElemento.innerHTML = `<li>🎉 El amigo secreto es: <strong>${amigoElegido}</strong></li>`;
}

