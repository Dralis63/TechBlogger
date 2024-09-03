document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.querySelector('.header__search-input');
    const searchButton = document.querySelector('.header__search-button');
    const commentForms = document.querySelectorAll('.comments__form');

    searchButton.addEventListener('click', () => {
        alert(`Vous avez recherché : ${searchInput.value}`);
    });

    commentForms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Votre commentaire a été soumis!');
            form.reset();
        });
    });
});
