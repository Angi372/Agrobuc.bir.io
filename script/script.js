document.addEventListener('DOMContentLoaded', function() {
    // Retire le spinner de chargement une fois la page chargée
    setTimeout(function() {
        document.getElementById('loading-image').style.display = 'none';
    }, 1000);