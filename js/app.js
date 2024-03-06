// Obtén todos los elementos h1, h2 y a
let elements = document.querySelectorAll('h1, h2, a');

// Itera sobre cada elemento y agrega un event listener para el mouseover
elements.forEach((element) => {
    element.addEventListener('mouseover', () => {
        element.classList.add('move'); // Agrega la clase 'move' al elemento
    });

    // Agrega un event listener para el mouseout para quitar la clase 'move'
    element.addEventListener('mouseout', () => {
        element.classList.remove('move'); // Quita la clase 'move' al elemento
    });
});

