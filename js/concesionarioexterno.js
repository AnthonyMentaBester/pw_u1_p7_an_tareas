function mostrarNombre(idElemento, valor) {
    document.getElementById(idElemento).innerText = "Modelo: " + valor;
}

function agregarImagen(idElemento, urlImagen) {
    document.getElementById(idElemento).innerHTML = `<img src="${urlImagen}" alt="Auto" style="width: 100%; max-width: 300px; border-radius: 10px;">`;
}

function cambiarColorTexto(idElemento, color) {
    document.getElementById(idElemento).style.color = color;
}

function mostrarCosto(idElemento, costo) {
    document.getElementById(idElemento).innerText = "Costo: $" + costo;
}