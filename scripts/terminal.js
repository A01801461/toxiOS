// Actualizar reloj
function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    document.getElementById('clock').textContent = `${hours}:${minutes}:${seconds}`;
}

setInterval(updateClock, 1000);
updateClock();

document.addEventListener('DOMContentLoaded', function() {
    const lines = document.querySelectorAll('.terminal-line');
    const button = document.querySelector('.boton-codigo');
    
    // Oculta el botón inicialmente
    button.style.display = 'none';
    
    // Oculta todas las líneas inicialmente
    lines.forEach(line => {
        line.style.display = 'none';
    });
    
    // Muestra cada línea con un retraso
    lines.forEach((line, index) => {
        setTimeout(() => {
            line.style.display = 'block';
            // Si es la última línea, muestra el botón después de un pequeño retraso
            if (index === lines.length - 1) {
                setTimeout(() => {
                    button.style.display = 'block';
                }, 3500); // Retraso adicional después de la última línea
            }
        }, index * 2000); // Retraso de 500ms entre cada línea
    });
});