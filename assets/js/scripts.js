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

/********* ENVIO DE FORMULARIO A FPRMSPREE CONVIRTIENDO A JSON ******/

document.getElementById("contact-form").addEventListener("submit", async function (event) {
    event.preventDefault(); // Evita el envío automático

    const form = event.target;
    const formData = new FormData(form);
    const jsonData = Object.fromEntries(formData.entries()); // Convierte FormData en JSON

    try {
        console.log("Datos a enviar:", JSON.stringify(jsonData));

        const response = await fetch("https://formspree.io/f/xeoekbve", {
            method: "POST",
            headers: { "Content-Type": "application/json" }, // Indicar que se envía JSON
            body: JSON.stringify(jsonData), // Convertir los datos en JSON
        });

        if (response.ok) {
            alert("Formulario enviado con éxito.");
            form.reset(); // Limpiar formulario
        } else {
            alert("Error al enviar el formulario.");
        }
    } catch (error) {
        console.error("Error:", error);
        alert("Hubo un problema al enviar el formulario.");
    }
});
