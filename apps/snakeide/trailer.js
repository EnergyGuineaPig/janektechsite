(() => {
    const trailer = document.getElementById('snakeide-trailer');
    if (!trailer || !window.matchMedia('(max-width: 690px)').matches) return;

    trailer.poster = trailer.dataset.portraitPoster;
    trailer.querySelector('source').src = trailer.dataset.portrait;
    trailer.classList.add('is-portrait');
    trailer.load();
})();
