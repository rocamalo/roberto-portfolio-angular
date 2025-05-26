// Este archivo contiene la inicialización de plugins para efectos de UI
document.addEventListener('DOMContentLoaded', function() {
  // Inicializar scrollspy
  var scrollSpy = new bootstrap.ScrollSpy(document.body, {
    target: '#sideNav'
  });

  // Añadir click handler para los enlaces de navegación
  document.querySelectorAll('a.js-scroll-trigger[href*="#"]:not([href="#"])').forEach(function(link) {
    link.addEventListener('click', function(event) {
      event.preventDefault();

      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: 'smooth'
        });

        // Cerrar el menú responsive si está abierto
        const navbarCollapse = document.querySelector('.navbar-collapse');
        if (navbarCollapse.classList.contains('show')) {
          navbarCollapse.classList.remove('show');
        }
      }
    });
  });

  // Animación de contadores para la sección de habilidades
  const skillsSection = document.getElementById('skills');

  if (skillsSection) {
    const isInViewport = function(element) {
      const rect = element.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    };

    window.addEventListener('scroll', function() {
      if (isInViewport(skillsSection)) {
        // Efecto de animación para elementos de habilidades
        document.querySelectorAll('.skill-item').forEach(function(item, index) {
          setTimeout(function() {
            item.classList.add('animate');
          }, index * 100);
        });
      }
    });
  }
});
