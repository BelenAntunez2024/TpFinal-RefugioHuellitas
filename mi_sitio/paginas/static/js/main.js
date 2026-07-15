// Esperamos a que todo el HTML de la página se cargue por completo
document.addEventListener("DOMContentLoaded", () => {
    
    // --- 1. FILTRO DE MASCOTAS ---
    const botonesFiltro = document.querySelectorAll(".btn-filtro");
    const tarjetasAnimales = document.querySelectorAll(".tarjeta-animal");

    if (botonesFiltro.length > 0 && tarjetasAnimales.length > 0) {
        botonesFiltro.forEach(boton => {
            boton.addEventListener("click", () => {
                // Quitamos la clase 'activo' del botón anterior y se la ponemos al que se clickeó
                document.querySelector(".btn-filtro.activo").classList.remove("activo");
                boton.classList.add("activo");

                const filtro = boton.getAttribute("data-filtro");

                // Filtramos las tarjetas según la especie
                tarjetasAnimales.forEach(tarjeta => {
                    const especie = tarjeta.getAttribute("data-especie");

                    if (filtro === "todos" || especie === filtro) {
                        tarjeta.classList.remove("oculta"); // Mostrar
                    } else {
                        tarjeta.classList.add("oculta"); // Ocultar
                    }
                });
            });
        });
    }

    // --- 2. VALIDACIÓN DEL FORMULARIO DE ADOPCIÓN ---
    const formAdopcion = document.getElementById("formulario-adopcion");
    const notificacion = document.getElementById("notificacion");

    if (formAdopcion) {
        formAdopcion.addEventListener("submit", (event) => {
            // Evitamos que la página se recargue por defecto al presionar enviar
            event.preventDefault();

            // Capturamos lo que escribió el usuario
            const nombre = document.getElementById("nombre").value.trim();
            const email = document.getElementById("email").value.trim();
            const mascota = document.getElementById("mascota").value;

            // Validación interactiva
            if (!nombre || !email || !mascota) {
                notificacion.textContent = "⚠️ Por favor, completa todos los campos requeridos.";
                notificacion.className = "notificacion error";
                notificacion.classList.remove("oculta");
            } else {
                // Mostramos un mensaje interactivo de éxito personalizado
                notificacion.textContent = `🐾 ¡Muchas gracias, ${nombre}! Tu solicitud para adoptar a ${mascota} fue enviada. Nos pondremos en contacto al correo: ${email}.`;
                notificacion.className = "notificacion exito";
                notificacion.classList.remove("oculta");

                // Limpiamos los campos del formulario tras un envío exitoso
                formAdopcion.reset();
            }
        });
    }
});