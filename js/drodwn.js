document.querySelectorAll('.dropbtn').forEach(button => {
    button.onclick = function(event) {
        const dropdownMenu = this.nextElementSibling;
        const isOpen = dropdownMenu.style.display === 'block';
        dropdownMenu.style.display = isOpen ? 'none' : 'block';
        this.textContent = isOpen ? '+' : '-';
    };
});

window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        document.querySelectorAll('.dropdown-content').forEach(menu => {
            menu.style.display = 'none';
        });
        document.querySelectorAll('.dropbtn').forEach(button => {
            button.textContent = '+';
        });
    }
};