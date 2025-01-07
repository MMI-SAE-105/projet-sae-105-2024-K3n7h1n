document.addEventListener("DOMContentLoaded", function() {
    // Récupérer le bouton hamburger
    const menuToggleButton = document.querySelector('.header__menu-toggle');
    // Récupérer le menu mobile
    const mobileMenu = document.getElementById('mobileMenu');
  
    // Au clic sur le bouton hamburger, on ouvre/ferme le menu
    menuToggleButton.addEventListener('click', () => {
      mobileMenu.classList.toggle('open');
    });
});

document.addEventListener('DOMContentLoaded', () => {
  /* =========================
   *   CAROUSEL NOLAN
   * ========================= */
  const nolanItems = document.querySelectorAll('#nolanCarousel .carousel__item');
  const prevNolan = document.getElementById('prevSlide');
  const nextNolan = document.getElementById('nextSlide');

  if (nolanItems.length > 0 && prevNolan && nextNolan) {
    let currentIndexNolan = 0;

    function showNolanSlide(index) {
      nolanItems.forEach(item => item.classList.remove('active'));
      nolanItems[index].classList.add('active');
    }

    prevNolan.addEventListener('click', () => {
      currentIndexNolan = (currentIndexNolan <= 0)
        ? nolanItems.length - 1
        : currentIndexNolan - 1;
      showNolanSlide(currentIndexNolan);
    });

    nextNolan.addEventListener('click', () => {
      currentIndexNolan = (currentIndexNolan >= nolanItems.length - 1)
        ? 0
        : currentIndexNolan + 1;
      showNolanSlide(currentIndexNolan);
    });
  }

  
  
  /* =========================
   *   CAROUSEL PARTENAIRES
   * ========================= */
  const partItems = document.querySelectorAll('#PartenairesCarousel .carousel__item');
  const prevPart = document.getElementById('prevSlide2');
  const nextPart = document.getElementById('nextSlide2');

  if (partItems.length > 0 && prevPart && nextPart) {
    let currentIndexPart = 0;

    function showPartSlide(index) {
      partItems.forEach(item => item.classList.remove('active'));
      partItems[index].classList.add('active');
    }

    prevPart.addEventListener('click', () => {
      currentIndexPart = (currentIndexPart <= 0)
        ? partItems.length - 1
        : currentIndexPart - 1;
      showPartSlide(currentIndexPart);
    });

    nextPart.addEventListener('click', () => {
      currentIndexPart = (currentIndexPart >= partItems.length - 1)
        ? 0
        : currentIndexPart + 1;
      showPartSlide(currentIndexPart);
    });
  }
});

document.addEventListener('DOMContentLoaded', () => {
  // Sélection du bouton hamburger
  const hamburgerButton = document.querySelector('.header__menu-toggle');
  // Sélection du menu mobile
  const mobileMenu = document.getElementById('mobileMenu');
  // Sélection du bouton “×”
  const closeButton = document.querySelector('.mobile-menu__close-button');

  // OUVERTURE : au clic sur le hamburger, on ajoute la classe .open
  hamburgerButton.addEventListener('click', () => {
    mobileMenu.classList.add('open');
  });

  // FERMETURE : au clic sur le “×”, on retire .open
  closeButton.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
  });
});