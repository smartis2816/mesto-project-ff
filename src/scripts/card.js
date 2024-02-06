const template = document.querySelector('#card-template').content;

const createCard = function (name, link, deleteCard, likeCard, openImagePopup) {
    const cardElement = template.querySelector('.card').cloneNode(true);
    cardElement.querySelector('.card__title').textContent = name;
    cardElement.querySelector('.card__image').src = link;
    cardElement.querySelector('.card__delete-button').addEventListener('click', deleteCard);
    cardElement.querySelector('.card__like-button').addEventListener('click', likeCard);
    cardElement.querySelector('.card__image').addEventListener('click', () => openImagePopup(name, link));
    
    return cardElement;
}


const likeCard = evt => evt.target.classList.toggle('card__like-button_is-active');

const deleteCard = evt => evt.target.closest('.card').remove();

export { createCard, deleteCard, likeCard };