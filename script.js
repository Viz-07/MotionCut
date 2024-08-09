// script.js
document.addEventListener('DOMContentLoaded', function() {
    const dropdown = document.querySelector('.dropdown');
    const dropdownContent = document.querySelector('.dropdown-content');
    const dropbtn = document.querySelector('.dropbtn');

    dropbtn.addEventListener('click', function() {
        dropdownContent.classList.toggle('show');
    });

    window.addEventListener('click', function(event) {
        if (!event.target.matches('.dropbtn')) {
            if (dropdownContent.classList.contains('show')) {
                dropdownContent.classList.remove('show');
            }
        }
    });

    const links = dropdownContent.querySelectorAll('a');
    links.forEach(link => {
        link.addEventListener('click', function() {
            dropbtn.textContent = this.textContent;
            dropdownContent.classList.remove('show');
        });
    });
});