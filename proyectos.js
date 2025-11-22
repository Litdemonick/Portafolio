document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('.carousel');
    const prevButton = document.querySelector('.carousel-control.prev');
    const nextButton = document.querySelector('.carousel-control.next');
    const searchInput = document.getElementById('search-input');
    const projectCards = Array.from(document.querySelectorAll('.project-card'));
    const noResultsMessage = document.getElementById('no-results-message');
    const paginationContainer = document.querySelector('.carousel-pagination');

    if (!carousel) return;

    let autoScrollInterval;

    // --- Funcionalidad del Carrusel ---
    const scrollStep = () => {
        // Desplazar el ancho de una tarjeta + el gap
        // Buscamos la primera tarjeta que esté visible
        const card = carousel.querySelector('.project-card:not([style*="display: none"])');
        if (!card) return 0;
        
        const carouselStyle = window.getComputedStyle(carousel);
        const gap = parseFloat(carouselStyle.gap) || 20;
        return card.offsetWidth + gap;
    };

    nextButton.addEventListener('click', () => {
        carousel.scrollBy({ left: scrollStep(), behavior: 'smooth' });
    });

    prevButton.addEventListener('click', () => {
        carousel.scrollBy({ left: -scrollStep(), behavior: 'smooth' });
    });

    // --- Funcionalidad de Autoplay ---
    const startAutoScroll = () => {
        stopAutoScroll(); // Asegurarse de que no haya intervalos múltiples
        autoScrollInterval = setInterval(() => {
            // Si el carrusel llegó al final, vuelve al principio
            if (carousel.scrollLeft + carousel.clientWidth >= carousel.scrollWidth - 1) {
                carousel.scrollTo({ left: 0, behavior: 'smooth' });
            } else {
                nextButton.click();
            }
        }, 3000); // Cambia de slide cada 3 segundos
    };

    const stopAutoScroll = () => {
        clearInterval(autoScrollInterval);
    };

    // Pausar al pasar el ratón por encima, reanudar al quitarlo
    carousel.addEventListener('mouseenter', stopAutoScroll);
    carousel.addEventListener('mouseleave', startAutoScroll);
    prevButton.addEventListener('mouseenter', stopAutoScroll);
    nextButton.addEventListener('mouseenter', stopAutoScroll);

    // --- Funcionalidad de Paginación ---
    let paginationDots = [];

    const createPagination = () => {
        paginationContainer.innerHTML = '';
        paginationDots = [];
        const visibleCards = projectCards.filter(card => card.style.display !== 'none');
        
        visibleCards.forEach((card, index) => {
            const dot = document.createElement('div');
            dot.classList.add('pagination-dot');
            dot.addEventListener('click', () => {
                const cardWidth = scrollStep();
                carousel.scrollTo({ left: index * cardWidth, behavior: 'smooth' });
            });
            paginationContainer.appendChild(dot);
            paginationDots.push(dot);
        });
        updatePagination();
    };

    const updatePagination = () => {
        if (paginationDots.length === 0) return;

        const cardWidth = scrollStep();
        if (cardWidth === 0) return;

        // Cálculo mejorado para el índice actual.
        // Se basa en el punto central del carrusel para mayor precisión al desplazarse.
        const scrollCenter = carousel.scrollLeft + carousel.clientWidth / 2;
        const currentIndex = Math.floor(scrollCenter / cardWidth);

        paginationDots.forEach((dot, index) => {
            if (index === currentIndex) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
    };

    // --- Funcionalidad de Búsqueda ---
    const filterProjects = () => {
        const searchTerm = searchInput.value.toLowerCase().trim();
        let visibleProjects = 0;

        projectCards.forEach(card => {
            const title = card.querySelector('h3')?.textContent.toLowerCase() || '';
            const description = card.querySelector('p')?.textContent.toLowerCase() || '';
            const tags = Array.from(card.querySelectorAll('.project-tags span')).map(tag => tag.textContent.toLowerCase());

            const isVisible = title.includes(searchTerm) ||
                              description.includes(searchTerm) ||
                              tags.some(tag => tag.includes(searchTerm));

            if (isVisible) {
                card.style.display = 'flex';
                visibleProjects++;
            } else {
                card.style.display = 'none';
            }
        });

        // Mostrar u ocultar el mensaje de "no hay resultados"
        if (visibleProjects === 0) {
            noResultsMessage.style.display = 'block';
            carousel.style.justifyContent = 'center'; // Centra el mensaje si no hay tarjetas
        } else {
            noResultsMessage.style.display = 'none';
            carousel.style.justifyContent = 'flex-start'; // Alinea las tarjetas al inicio
        }

        // Detener o iniciar el autoplay según si hay resultados
        if (visibleProjects > 3) { // O el número de tarjetas visibles
            startAutoScroll();
        } else {
            stopAutoScroll();
        }

        // Recargar la paginación con las tarjetas visibles
        createPagination();
    };

    searchInput.addEventListener('input', filterProjects);
    carousel.addEventListener('scroll', updatePagination);

    filterProjects();
});