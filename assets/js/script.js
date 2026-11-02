/* ==========================================================================
   UNIQUE GYM - INTERACTIVIDAD Y VALIDACIONES (MÓDULO 6)
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  console.log('Unique Gym App cargada y lista.');

  // 1. Confirmación limpia al reiniciar formularios
  const form = document.querySelector('form');
  if (form) {
    form.addEventListener('reset', (e) => {
      const confirmar = confirm('¿Está seguro de que desea limpiar todos los campos del formulario?');
      if (!confirmar) {
        e.preventDefault();
      }
    });

    // 2. Feedback dinámico al enviar formulario de inscripción
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('¡Gracias por inscribirte en Unique Gym! Nos pondremos en contacto contigo a la brevedad.');
      form.reset();
    });
  }

  // 3. Resaltar la página activa en el menú de navegación
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll('header nav a');

  navLinks.forEach(link => {
    if (link.getAttribute('href') && currentPath.includes(link.getAttribute('href'))) {
      link.setAttribute('aria-current', 'page');
    }
  });
});