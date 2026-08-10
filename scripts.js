o'use strict';

//Expandir cards
const cards = document.querySelectorAll('.servicio-card');

cards.forEach(card => {
    card.addEventListener('click', () => {
      const yaEstabaExpandida = card.classList.contains('expandida'); cards.forEach(c => c.classList.remove('expandida'));

  if (!yaEstabaExpandida) {
    card.classList.add('expandida');
  }
});
});

// Menú hamburguesa
const btnHamburguesa = document.querySelector('.btn-hamburguesa');
const navMobile = document.getElementById('navMobile');

btnHamburguesa.addEventListener('click', () => {
  btnHamburguesa.classList.toggle('abierto');
  navMobile.classList.toggle('abierto');
});

// Cerrar menú al hacer click en un link
navMobile.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    btnHamburguesa.classList.remove('abierto');
    navMobile.classList.remove('abierto');
  });
});
