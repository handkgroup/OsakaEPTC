document.addEventListener('DOMContentLoaded', () => {
    const toggleButtons = document.querySelectorAll('.toggle-btn');

    toggleButtons.forEach(button => {
        button.addEventListener('click', () => {
            const answer = button.closest('.faq-item').querySelector('.answer');
            if (answer.style.display === 'block') {
                answer.style.display = 'none';
                button.textContent = '+';
            } else {
                answer.style.display = 'block';
                button.textContent = '-';
            }
        });
    });
});
