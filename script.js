document.addEventListener('DOMContentLoaded', () => {
    // 1. Fungsi untuk Smooth Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            if (this.classList.contains('cta-button') && this.getAttribute('href').startsWith('https://')) {
                return;
            }

            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const headerHeight = document.querySelector('header').offsetHeight;
                const offset = targetElement.offsetTop - headerHeight - 20; 
                
                window.scrollTo({
                    top: offset,
                    behavior: 'smooth'
                });
            }
        });
    });

    // 2. Fungsi untuk Image Slider (Wajib agar gambar bisa diganti)
    function setupImageSlider() {
        const slides = document.querySelectorAll('.slider-image');
        const dots = document.querySelectorAll('.dot');
        
        if (slides.length === 0 || dots.length === 0) return; 

        let currentSlide = 0;

        function showSlide(index) {
            // Pastikan indeks tetap di dalam batas array
            if (index >= slides.length) {
                index = 0;
            } else if (index < 0) {
                index = slides.length - 1;
            }
            
            // Sembunyikan semua dan nonaktifkan semua dot
            slides.forEach(slide => slide.classList.remove('active-slide'));
            dots.forEach(dot => dot.classList.remove('active'));

            // Tampilkan yang dipilih
            slides[index].classList.add('active-slide');
            dots[index].classList.add('active');
            currentSlide = index;
        }

        // Event listener untuk klik pada titik navigasi
        dots.forEach(dot => {
            dot.addEventListener('click', function() {
                const slideIndex = parseInt(this.getAttribute('data-slide'));
                showSlide(slideIndex);
            });
        });

        showSlide(currentSlide);
    }

    setupImageSlider();
});
