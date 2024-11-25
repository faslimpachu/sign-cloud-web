AOS.init({
    duration: 1000, // Animation duration in milliseconds
    once: true,     // Whether animation should happen only once
});


document.querySelectorAll('.lightbox').forEach(link => {
link.addEventListener('click', event => {
    event.preventDefault();
    const overlay = document.createElement('div');
    overlay.classList.add('lightbox-overlay');
    overlay.innerHTML = `
        <img src="${link.href}" alt="Lightbox Image">
        <span class="close">&times;</span>
    `;
    document.body.appendChild(overlay);
    overlay.classList.add('active');

    // Close functionality
    overlay.querySelector('.close').addEventListener('click', () => {
        overlay.remove();
    });

    // Close on click outside the image
    overlay.addEventListener('click', e => {
        if (e.target === overlay) overlay.remove();
    });
});
});




