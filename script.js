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