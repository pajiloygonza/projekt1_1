window.addEventListener('scroll', function() {
    // Если пользователь прокручивает вверх за пределы страницы
    if (window.scrollY < 0) {
        window.scrollTo(0, 0);
    }

    // Если пользователь прокручивает вниз за пределы содержимого
    if (window.scrollY + window.innerHeight > document.documentElement.scrollHeight) {
        window.scrollTo(0, document.documentElement.scrollHeight - window.innerHeight);
    }
});