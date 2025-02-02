document.addEventListener("DOMContentLoaded", function() {
    // Inicializar AOS
    AOS.init();

    // Desplazamiento suave al hacer clic en los enlaces de navegación
    document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
        // Solo aplicar desplazamiento suave en enlaces internos
        if (link.getAttribute('href').startsWith('#')) {
            link.addEventListener('click', function (e) {
                e.preventDefault(); // Evita el salto inmediato

                // Obtener el ID de la sección destino
                const targetId = this.getAttribute('href').substring(1); // Elimina el '#'
                const targetElement = document.getElementById(targetId); // Busca la sección por ID

                // Si la sección existe, hacer scroll suave
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80, // Ajusta según la altura del navbar
                        behavior: 'smooth'
                    });
                }
            });
        }
    });

    // Cambio de clase activa en los enlaces
    const currentPage = window.location.pathname.split('/').pop(); // Obtiene el nombre de la página actual
    document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
        // Elimina la clase 'active' de todos los enlaces
        link.classList.remove('active');

        // Añade la clase 'active' al enlace correspondiente a la página actual
        if (link.getAttribute('href').includes(currentPage)) {
            link.classList.add('active');
        }

        // Agregar el comportamiento de cambio de clase 'active' al hacer clic
        link.addEventListener('click', function () {
            // Elimina la clase 'active' de todos los enlaces
            document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
                link.classList.remove('active');
            });
            // Añade la clase 'active' al enlace clickeado
            this.classList.add('active');
        });
    });
});


//***************   Formularioo   ******************** */

document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('contact-form');

    form.addEventListener('submit', function(e) {
        e.preventDefault();  // Evitar el envío por defecto

        // Verificar si los campos están vacíos
        const nombre = document.getElementById('nombre').value;
        const email = document.getElementById('email').value;
        const asunto = document.getElementById('asunto').value;
        const mensaje = document.getElementById('mensaje').value;

        if (!nombre || !email || !asunto || !mensaje) {
            alert("Por favor, completa todos los campos.");
            return;
        }

        // Aquí podrías hacer el envío a través de AJAX o redirigir a un servidor
        form.submit();  // Enviar formulario (esto es solo un ejemplo)
    });
});
