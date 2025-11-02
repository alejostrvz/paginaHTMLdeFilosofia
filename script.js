function loadUnit(unitNumber) {
    // Ocultar página principal
    document.getElementById('mainPage').style.display = 'none';
    
    // Ocultar todas las unidades
    document.getElementById('unit1').style.display = 'none';
    document.getElementById('unit2').style.display = 'none';
    document.getElementById('unit3').style.display = 'none';
    
    // Mostrar la unidad seleccionada
    document.getElementById('unit' + unitNumber).style.display = 'block';
    
    // Scroll al inicio
    window.scrollTo(0, 0);
}

function goBack() {
    // Ocultar todas las unidades
    document.getElementById('unit1').style.display = 'none';
    document.getElementById('unit2').style.display = 'none';
    document.getElementById('unit3').style.display = 'none';
    
    // Mostrar página principal
    document.getElementById('mainPage').style.display = 'flex';
    
    // Scroll al inicio
    window.scrollTo(0, 0);
}



// ======= Alternar modo oscuro global =======
const themeToggle = document.getElementById('themeToggle');
const savedTheme = localStorage.getItem('theme');

// Si el usuario ya tenía modo oscuro, mantenerlo
if (savedTheme === 'dark') {
    document.body.classList.add('dark');
    themeToggle.textContent = '☀️';
}

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    const isDark = document.body.classList.contains('dark');
    themeToggle.textContent = isDark ? '☀️' : '🌙';
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
});
