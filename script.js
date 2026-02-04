document.addEventListener('DOMContentLoaded', () => {
    // --- 1. ELEMENTOS DEL DOM ---
    const loginForm = document.getElementById('loginForm');
    const appointmentForm = document.getElementById('appointmentForm');
    
    // --- 2. LÓGICA DE INICIO DE SESIÓN ---
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault(); 

            // Capturamos los TRES valores
            const username = document.getElementById('username').value;
            const email = document.getElementById('email').value; // <--- Aquí capturamos el correo
            const pass = document.getElementById('password').value;

            // Datos de prueba (Deben coincidir exactamente estos tres)
            const validUser = "estudianteSENA";
            const validEmail = "sena@correo.com"; // <--- Correo de prueba
            const validPass = "12345";

            console.log("Validando: " + username + ", " + email);

            if (username === validUser && email === validEmail && pass === validPass) {
                alert("¡Inicio de sesión exitoso! Bienvenido " + username);
                window.location.href = "dashboard.html"; 
            } else {
                // Si falla, avisamos qué podría estar mal
                alert("Error: El usuario, el correo o la contraseña son incorrectos.");
            }
        });
    }

    // --- 3. LÓGICA DE AGENDAMIENTO ---
    if (appointmentForm) {
        appointmentForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const date = document.getElementById('appointmentDate').value;
            const time = document.getElementById('appointmentTime').value;
            const specialist = document.getElementById('specialist').options[document.getElementById('specialist').selectedIndex].text;

            const confirmMessage = document.getElementById('confirmMessage');
            if (confirmMessage) {
                confirmMessage.innerHTML = `
                    <div style="background-color: #d4edda; color: #155724; padding: 15px; border-radius: 10px; margin-top: 20px; border: 1px solid #c3e6cb; text-align: center;">
                        <strong>¡Cita Confirmada!</strong><br>
                        Has agendado con <b>${specialist}</b> para el día <b>${date}</b> a las <b>${time}</b>.
                    </div>
                `;
            }

            alert("Su cita ha sido procesada correctamente.");
            appointmentForm.reset(); 
        });
    }
});