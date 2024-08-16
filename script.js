document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.getElementById('navbar');
    const sections = document.querySelectorAll('section');
    const links = navbar.querySelectorAll('a');
    const menuToggle = document.getElementById('menu-toggle');

    // Initially, hide all sections except the first one and make the first one visible
    sections.forEach((section, index) => {
        if (index !== 0) {
            section.classList.add('hidden');
        } else {
            section.classList.add('visible');
        }
    });
        // Toggle menu visibility on hamburger click
        menuToggle.addEventListener('click', () => {
            navbar.classList.toggle('active');
        });

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetSection = document.getElementById(link.getAttribute('data-section'));

            // Hide all sections
            sections.forEach(section => {
                section.classList.remove('visible');
                section.classList.add('hidden');
            });

            // Show the targeted section with animation
            setTimeout(() => {
                targetSection.classList.remove('hidden');
                targetSection.classList.add('visible');
            }, 50); // Delay to ensure the transition is applied

            // Update active link
            links.forEach(link => link.classList.remove('active'));
            link.classList.add('active');
        });
    });
});
