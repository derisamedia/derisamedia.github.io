document.addEventListener('DOMContentLoaded', () => {
    // Set dynamic year
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // Add staggered animation delay to all cards and sections
    const animateElements = document.querySelectorAll('.social-card, .section-title, .project-card, .contact-section');
    animateElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.animation = `slideIn 0.6s cubic-bezier(0.2, 0.8, 0.2, 1) forwards ${index * 0.1 + 0.3}s`;
    });
});

// Add slideIn animation style dynamically or ensure it exists in CSS
const styleSheet = document.createElement("style");
styleSheet.innerText = `
    @keyframes slideIn {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(styleSheet);
