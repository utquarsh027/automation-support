function toggleContactPopup() {
    const popup = document.getElementById('contactPopup');
    const overlay = document.getElementById('popupOverlay');
    popup.classList.toggle('active');
    overlay.classList.toggle('active');
}

function toggleMobileMenu() {
    document.getElementById('navLinks').classList.toggle('active');
}

// Close popup when clicking overlay
document.addEventListener('DOMContentLoaded', function() {
    const overlay = document.getElementById('popupOverlay');
    if (overlay) {
        overlay.addEventListener('click', toggleContactPopup);
    }

    // Set active nav link based on current page
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});