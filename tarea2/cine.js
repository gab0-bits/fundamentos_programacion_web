// films en cartelera
const movies = [
    { id: 1, title: 'Il Padrino' },
    { id: 2, title: 'Persona' },
    { id: 3, title: 'V for Vendetta' }
];
// funcion para popular opciones de peliculas, en el elemento selecionado

function populateMovies() {
    const movieSelect = document.getElementById('movie-select');

    movies.forEach(movie => {
        const option = document.createElement('option');
        option.value = movie.id;
        option.textContent = movie.title;
        movieSelect.appendChild(option);
    });
}

// Function to handle ticket booking
function bookTickets() {
    const movieSelect = document.getElementById('movie-select');
    const quantityInput = document.getElementById('quantity');

    const selectedMovie = movieSelect.options[movieSelect.selectedIndex].textContent;
    const ticketQuantity = quantityInput.value;

    alert(`Booking confirmed!\nMovie: ${selectedMovie}\nQuantity: ${ticketQuantity}`);
}

// Populate movies when the page loads
document.addEventListener('DOMContentLoaded', () => {
    populateMovies();
});
