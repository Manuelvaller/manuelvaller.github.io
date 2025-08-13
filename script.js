document.addEventListener("DOMContentLoaded", function () {

  // Manejo de flip-cards
  const buttons = document.querySelectorAll(".flip-card-front .button");

  buttons.forEach((btn) => {
    btn.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();

      const card = btn.closest(".flip-card");
      const plato = btn.closest(".plato");
      const platosContainer = btn.closest(".platos");

      // Quitar estados previos
      document.querySelectorAll(".plato").forEach(p => p.classList.remove("highlight"));
      document.querySelectorAll(".platos").forEach(pc => pc.classList.remove("blur"));

      // Aplicar nuevos estados
      card.classList.add("flipped");
      if (plato) plato.classList.add("highlight");
      if (platosContainer) platosContainer.classList.add("blur");

      // Restaurar al salir el mouse
      const targetElement = plato || card;
      targetElement.addEventListener("mouseleave", function handler() {
        card.classList.remove("flipped");
        if (plato) plato.classList.remove("highlight");
        if (platosContainer) platosContainer.classList.remove("blur");
        targetElement.removeEventListener("mouseleave", handler);
      });
    });
  });

  // Toggle del menú al presionar el ícono
  const menuToggle = document.getElementById('menu-toggle');
  const menuLinks = document.getElementById('menu-links');

  menuToggle.addEventListener('click', function () {
    menuLinks.classList.toggle('active');
    this.classList.toggle('open');
  });

  // Ocultar menú al hacer clic en cualquier enlace
  document.querySelectorAll('#menu-links a').forEach(link => {
    link.addEventListener('click', () => {
      menuLinks.classList.remove('active');
      menuToggle.classList.remove('open');
    });
  });

});
