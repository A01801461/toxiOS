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

// Mostrar notificación
setTimeout(() => {
    const notification = document.getElementById('notification');
    notification.style.display = 'block';
    setTimeout(() => {
        notification.style.display = 'none';
    }, 3000);
}, 5000);

// Abrir ventanas
function openWindow(type) {
    closeAllWindows();
    const windowElement = document.getElementById(`${type}-window`);
    windowElement.style.display = 'flex';
    
    // Activar el icono en la barra de tareas
    document.querySelectorAll('.task-icon').forEach(icon => {
        icon.classList.remove('active');
    });
    document.querySelectorAll('.task-icon')[1].classList.add('active');
}

// Cerrar ventanas
function closeWindow(type) {
    document.getElementById(`${type}-window`).style.display = 'none';
}

function closeAllWindows() {
    document.querySelectorAll('.window').forEach(window => {
        window.style.display = 'none';
    });
}

// Cambiar fondo de pantalla
function changeWallpaper(wallpaperPath) {
    document.querySelector('.desktop').style.backgroundImage = `url('${wallpaperPath}')`;
    
    // Actualizar selector activo
    document.querySelectorAll('.wallpaper-option').forEach(option => {
        option.classList.remove('active');
    });
    event.target.classList.add('active');
}

// Hacer las ventanas arrastrables
let activeWindow = null;
let offsetX, offsetY;

document.querySelectorAll('.window-header').forEach(header => {
    header.addEventListener('mousedown', (e) => {
        activeWindow = header.parentElement;
        offsetX = e.clientX - activeWindow.getBoundingClientRect().left;
        offsetY = e.clientY - activeWindow.getBoundingClientRect().top;
        
        // Traer la ventana al frente
        document.querySelectorAll('.window').forEach(w => {
            w.style.zIndex = 2;
        });
        activeWindow.style.zIndex = 10;
    });
});

document.addEventListener('mousemove', (e) => {
    if (activeWindow) {
        activeWindow.style.left = `${e.clientX - offsetX}px`;
        activeWindow.style.top = `${e.clientY - offsetY}px`;
    }
});

document.addEventListener('mouseup', () => {
    activeWindow = null;
});

// Minimizar/Maximizar ventanas
document.querySelectorAll('.minimize-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        btn.closest('.window').style.display = 'none';
    });
});

// Event listeners para iconos
document.querySelectorAll('.icon').forEach(icon => {
    icon.addEventListener('click', () => {
        const windowType = icon.getAttribute('data-window');
        openWindow(windowType);
    });
});

// Event listeners para botones de cierre
document.querySelectorAll('.close-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const windowType = btn.getAttribute('data-window');
        closeWindow(windowType);
    });
});

// Event listeners para selectores de wallpaper
document.querySelectorAll('.wallpaper-option').forEach(option => {
    option.addEventListener('click', () => {
        const wallpaperPath = option.getAttribute('data-wallpaper');
        changeWallpaper(wallpaperPath);
    });
});

// Configurar imágenes de fondo para las opciones de wallpaper
document.addEventListener('DOMContentLoaded', () => {
    const wallpaperOptions = document.querySelectorAll('.wallpaper-option');
    wallpaperOptions.forEach(option => {
        const wallpaperPath = option.getAttribute('data-wallpaper');
        option.style.backgroundImage = `url('${wallpaperPath}')`;
    });
});

// Botón de inicio
document.getElementById('start-btn').addEventListener('click', () => {
    const notification = document.getElementById('notification');
    notification.innerHTML = '<h3>Error</h3><p>Aqui tienes todo lo que necesitas!</p>';
    notification.style.display = 'block';
    setTimeout(() => {
        notification.style.display = 'none';
    }, 8000);
});