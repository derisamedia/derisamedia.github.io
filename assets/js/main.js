document.addEventListener('DOMContentLoaded', () => {
    // Set dynamic year
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // Add staggered animation delay to cards
    const cards = document.querySelectorAll('.social-card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.animation = `slideIn 0.5s ease-out forwards ${index * 0.1 + 0.5}s`;
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
