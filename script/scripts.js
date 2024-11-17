document.querySelectorAll('.service-item').forEach(item => {
    item.addEventListener('click', () => {
        alert('Vous avez cliqué sur un service.');
    });
});
