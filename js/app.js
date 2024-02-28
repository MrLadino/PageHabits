// Obtén todos los elementos h1 y h2
let headings = document.querySelectorAll('h1, h2');

// Itera sobre cada elemento y agrega un event listener para el mouseover
headings.forEach((heading) => {
    heading.addEventListener('mouseover', () => {
        heading.classList.add('move'); // Agrega la clase 'move' al elemento
    });

    // Agrega un event listener para el mouseout para quitar la clase 'move'
    heading.addEventListener('mouseout', () => {
        heading.classList.remove('move'); // Quita la clase 'move' al elemento
    });
});
