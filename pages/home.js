[...document.querySelectorAll('.item-1')].map(item => {
    item.addEventListener('click', event => {
        event.currentTarget.classList.toggle('active');
    });
});