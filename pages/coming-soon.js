function toggleClass(el, className) {
    if (el.classList.contains(className)) {
        el.classList.remove(className);
    } else {
        el.classList.add(className);
    }
}

[...document.querySelectorAll('.item-1')].map(item => {
    item.addEventListener('click', event => {
        toggleClass(event.currentTarget, 'active');
    });
});