// Custom JavaScript for EcoEdu
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll for navigation links
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

    // Contact form submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simple validation
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            if (name && email && subject && message) {
                // Show success message (you can replace this with actual form submission)
                alert('Terima kasih! Pesan Anda telah berhasil dikirim. Kami akan membalas dalam 1-2 hari kerja.');
                contactForm.reset();
            }
        });
    }

    // Article filter functionality
    const filterButtons = document.querySelectorAll('.btn-outline-success');
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
            
            // Here you would typically filter the articles
            // For demo purposes, we'll just show an alert
            const filter = this.textContent.trim();
            if (filter !== 'Semua') {
                alert(`Menampilkan artikel dengan filter: ${filter}`);
            }
        });
    });

    // Newsletter subscription
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