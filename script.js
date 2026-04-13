// 1. Seleccionamos la imagen
const img = document.querySelector('.logop');

// 2. Transición suave para que no se mueva de golpe
img.style.transition = 'transform 0.1s ease';

// 3. Cuando movemos el mouse sobre la imagen...
img.onmousemove = (e) => {
    const { width, height, left, top } = img.getBoundingClientRect();
    
    // Calculamos qué tan lejos está el mouse del centro (en porcentaje)
    const x = ((e.clientX - left) / width) - 0.5;
    const y = ((e.clientY - top) / height) - 0.5;
    
    // Aplicamos la rotación según la posición del mouse
    const rotX = y * -20; // Inclinación arriba/abajo
    const rotY = x * 20;  // Inclinación izquierda/derecha
    
    img.style.transform = `perspective(1000px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale(1.05)`;
};

// 4. Cuando el mouse sale, la imagen vuelve a la normalidad
img.onmouseleave = () => {
    img.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)';
};
