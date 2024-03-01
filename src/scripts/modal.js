const openModal = function(item) {
    item.classList.add('popup_is-animated');
    item.classList.add('popup_is-opened');
    document.addEventListener('keydown', closeModalEscape);

}

const closeModal = function(item) {
    item.classList.remove('popup_is-opened');
    document.removeEventListener('keydown', closeModalEscape);
}

const closeModalOverlay = function(evt) {
    if (evt.target.classList.contains('popup_is-opened')) {
        closeModal(evt.target);
      }
}

const closeModalEscape = function(evt) {
    if (evt.key === 'Escape') {
        closeModal(document.querySelector('.popup_is-opened'));
    }
}

export { openModal, closeModal, closeModalOverlay}