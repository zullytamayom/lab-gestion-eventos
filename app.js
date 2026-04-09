const badge = document.getElementById('badge');
const botones = document.querySelectorAll('.btn-agregar');

botones.forEach(function(boton) {
  boton.addEventListener('click', function() {

    let cantidad = parseInt(badge.textContent);
    cantidad++;
    badge.textContent = cantidad;

  });

});

function mostrarTotal(total) {
  const elemento = document.getElementById('total');

  if (elemento) {
    elemento.textContent =
      '$' + total.toLocaleString('es-CO');
  }
}

let total = 0;

botones.forEach(function(boton) {

  boton.addEventListener('click', function() {

    const precio = Number(this.dataset.precio);

    total += precio;

    mostrarTotal(total);

  });

});


