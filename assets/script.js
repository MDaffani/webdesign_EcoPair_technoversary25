document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Contact form
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Validasi Elemen
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            if (name && email && subject && message) {
                // Menampilkan Pesan Berhasil
                alert('Terima kasih! Pesan Anda telah berhasil dikirim. Kami akan membalas dalam 1-2 hari kerja.');
                contactForm.reset();
            }
        });
    }

    // Fungsi Filter Artikel
    const filterButtons = document.querySelectorAll('.btn-outline-success');
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            const filter = this.textContent.trim();
            if (filter !== 'Semua') {
                alert(`Menampilkan artikel dengan filter: ${filter}`);
            }
        });
    });

    // Newsletter
    const newsletterBtn = document.querySelector('.newsletter-section .btn');
    if (newsletterBtn) {
        newsletterBtn.addEventListener('click', function() {
            const emailInput = this.parentElement.querySelector('input[type="email"]');
            if (emailInput.value) {
                alert(`Terima kasih! Email ${emailInput.value} telah berhasil didaftarkan untuk newsletter.`);
                emailInput.value = '';
            } else {
                alert('Silakan masukkan alamat email Anda.');
            }
        });
    }

});
