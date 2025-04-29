document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.getElementById('menu-btn');
    const navbarList = document.querySelector('.navbar ul');
    const links = document.querySelectorAll('.navbar ul li a');

    if (menuBtn && navbarList) {
        // === Toggle del menú móvil === //
        menuBtn.addEventListener('click', (e) => {
            // Evita que el evento de clic en el botón también se propague a la documentación
            e.stopPropagation();
            navbarList.classList.toggle('active');
        });

        // === Cierra el menú si se hace clic fuera del header === //
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.header')) {
                navbarList.classList.remove('active');
            }
        });

        // === Manejador para enlaces del navbar === //
        links.forEach(link => {
            link.addEventListener('click', () => {
                // Elimina la clase activa de todos los enlaces
                links.forEach(el => el.classList.remove('active'));

                // Agrega la clase activa al enlace clicado
                link.classList.add('active');

                // Cierra el menú después de seleccionar una opción
                navbarList.classList.remove('active');
            });
        });
    }
});
