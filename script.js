// View switcher: simulate desktop/tablet/mobile width
function setView(mode, button) {
    document.body.classList.remove('view-mobile', 'view-tablet');

    if (mode === 'mobile') {
        document.body.classList.add('view-mobile');
    } else if (mode === 'tablet') {
        document.body.classList.add('view-tablet');
    }

    const buttons = document.querySelectorAll('.view-btn');
    buttons.forEach((btn) => btn.classList.remove('active'));
    if (button) {
        button.classList.add('active');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    // Attach view switcher buttons (present on each page)
    const viewButtons = document.querySelectorAll('.view-btn');
    viewButtons.forEach((btn) => {
        btn.addEventListener('click', () => {
            const mode = btn.getAttribute('data-mode'); // desktop/tablet/mobile
            setView(mode, btn);
        });
    });

    // Mobile menu toggle
    const toggle = document.querySelector('.mobile-toggle');
    const nav = document.querySelector('.nav-links');

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('active');
        });
    }

    // Simple form validation for pages that use contactForm
    const form = document.getElementById('contactForm');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const nameInput = document.getElementById('name');
            const emailInput = document.getElementById('email');
            const msgDiv = document.getElementById('statusMsg');

            const name = nameInput ? nameInput.value.trim() : '';
            const email = emailInput ? emailInput.value.trim() : '';

            if (name && email.includes('@')) {
                msgDiv.style.color = 'green';
                msgDiv.textContent = `Thanks ${name}! We will contact you shortly.`;
                form.reset();
            } else {
                msgDiv.style.color = 'red';
                msgDiv.textContent = 'Please enter valid details.';
            }
        });
    }

    // FAQ accordion
    document.querySelectorAll('.faq-question').forEach((q) => {
        q.addEventListener('click', () => {
            q.parentElement.classList.toggle('active');
        });
    });
});