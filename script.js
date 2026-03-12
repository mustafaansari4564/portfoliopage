document.addEventListener('DOMContentLoaded', () => {
    // Custom cursor glow effect
    const cursorGlow = document.querySelector('.cursor-glow');
    
    document.addEventListener('mousemove', (e) => {
        cursorGlow.style.left = e.clientX + 'px';
        cursorGlow.style.top = e.clientY + 'px';
    });

    document.addEventListener('mousedown', () => {
        cursorGlow.style.width = '15px';
        cursorGlow.style.height = '15px';
        cursorGlow.style.opacity = '0.8';
        cursorGlow.style.background = 'var(--neon-secondary)';
    });

    document.addEventListener('mouseup', () => {
        cursorGlow.style.width = '20px';
        cursorGlow.style.height = '20px';
        cursorGlow.style.opacity = '0.5';
        cursorGlow.style.background = 'var(--neon-primary)';
    });

    // Add scroll animations for fade-in elements
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.fade-in').forEach(element => {
        observer.observe(element);
    });
});
