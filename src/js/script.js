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
      const carouselItems = document.querySelectorAll('#nolanCarousel .carousel__item');
      const prevButton = document.getElementById('prevSlide');
      const nextButton = document.getElementById('nextSlide');

      let currentIndex = 0;

      function showSlide(index) {
        // Retirer l'état 'active' de toutes les slides
        carouselItems.forEach(item => {
          item.classList.remove('active');
        });
        // Afficher celle demandée
        carouselItems[index].classList.add('active');
      }

      // Clic sur PREV
      prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex <= 0) 
          ? carouselItems.length - 1 
          : currentIndex - 1;
        showSlide(currentIndex);
      });

      // Clic sur NEXT
      nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex >= carouselItems.length - 1) 
          ? 0 
          : currentIndex + 1;
        showSlide(currentIndex);
      });
    });

    