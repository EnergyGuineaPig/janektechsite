(() => {
    const button = document.getElementById('mobile-menu-button');
    const navigation = document.getElementById('nav-links');
    if (!button || !navigation) return;
    const setOpen = (open) => {
        navigation.classList.toggle('show', open);
        button.setAttribute('aria-expanded', String(open));
        button.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
        button.textContent = open ? '×' : '☰';
    };
    button.addEventListener('click', () => setOpen(button.getAttribute('aria-expanded') !== 'true'));
    navigation.addEventListener('click', (event) => { if (event.target.closest('a')) setOpen(false); });
    document.addEventListener('click', (event) => { if (!event.target.closest('.navbar')) setOpen(false); });
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && button.getAttribute('aria-expanded') === 'true') { setOpen(false); button.focus(); }
    });
    window.matchMedia('(min-width: 821px)').addEventListener('change', () => setOpen(false));
})();
