document.addEventListener('DOMContentLoaded', () => {
    // Fungsi untuk Smooth Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            // Hanya berlaku untuk tautan internal (bukan WhatsApp CTA)
            if (this.classList.contains('cta-button') && this.getAttribute('href').startsWith('https://')) {
                return;
            }

            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                // Scroll ke elemen dengan offset untuk header sticky
                const headerHeight = document.querySelector('header').offsetHeight;
                const offset = targetElement.offsetTop - headerHeight - 20; // -20 untuk sedikit padding
                
                window.scrollTo({
                    top: offset,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Anda dapat menambahkan logika carousel/slider di sini jika dibutuhkan.
});