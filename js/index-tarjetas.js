
  document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".flip-card");

    function isMobile() {
      return window.innerWidth < 768;
    }

    if (isMobile()) {
      cards.forEach((card) => {
        card.addEventListener("click", function (e) {
          e.stopPropagation(); // Evita que el evento se propague al document
          // Cierra todas las tarjetas
          cards.forEach(c => c.classList.remove("clicked"));
          // Abre solo la tarjeta actual
          this.classList.add("clicked");
        });
      });

      // Detecta clics fuera de cualquier tarjeta para cerrarlas
      document.addEventListener("click", function () {
        cards.forEach(c => c.classList.remove("clicked"));
      });
    }
  });
