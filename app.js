const badge = document.getElementById('badge');
const botones = document.querySelectorAll('.btn-agregar');

botones.forEach(function(boton) {

  boton.addEventListener('click', function() {

    let cantidad = parseInt(badge.textContent);
    cantidad++;
    badge.textContent = cantidad;

  });

});