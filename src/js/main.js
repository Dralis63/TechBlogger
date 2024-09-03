document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.querySelector('.header__search-input');
    const searchButton = document.querySelector('.header__search-button');
    const articles = document.querySelectorAll('.article-card');
    const commentForms = document.querySelectorAll('.comments__form');

    if (searchButton && searchInput) {
    searchButton.addEventListener('click', () => {
        const query = searchInput.value.toLowerCase();
        articles.forEach(article => {
            const title = article.querySelector('.article-card__title').textContent.toLowerCase();
            const content = article.querySelector('.article-card__content').textContent.toLowerCase();
            if (title.includes(query) || content.includes(query)) {
                article.style.display = 'block';
            } else {
                article.style.display = 'none';
            }
        });
    });
    searchInput.addEventListener('input', () => {
        if (searchInput.value === '') {
            articles.forEach(article => {
                article.style.display = 'block';
            });
        }
    });
} else { }
    commentForms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const commentBox = form.querySelector('.comments__textarea');
            if (commentBox.value.trim() === '') {
                alert('Veuillez entrer un commentaire avant de soumettre.');
                return;
            }

            // Simuler l'ajout du commentaire
            alert('Merci pour votre commentaire!');
            commentBox.value = ''; // Réinitialiser le champ
        });
    });



});
window.onscroll = function() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("progress-bar").style.width = scrolled + "%";
};