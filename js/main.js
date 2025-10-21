// EVENTO PARA TODAS LAS CARDS

document.querySelector('.cards')
  .addEventListener('click', e => {
    // BUSCAMOS LA CARTA MAS CERCANA
    const card = e.target.closest('.card');
    if (!card) return;

    // SI LA CARTA ESA ABIERTA, LA CERRAMOS
    const isOpen = card.classList.contains('is-open');
    document.querySelectorAll('.card.is-open')
      .forEach(c => c.classList.remove('is-open'));

    // SI LA CARTA NO ESTA ABIERTA, LA ABRIMOS
    if (!isOpen) {
      card.classList.add('is-open');
    }
  });

  

